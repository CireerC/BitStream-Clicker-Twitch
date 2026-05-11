import { store } from '../../core/GameStore.js';
import { formatNumber } from '../../core/balance.js';

const COOLDOWN_MS = 30_000;
const GRID_W = 5;
const GRID_H = 5;
const TARGET = 100;
const COLORS = ['#c44040', '#c48a30', '#4080c4', '#40a464', '#888888'];
const ANIM_MS = 180;

export function mountPuzzle(container: HTMLElement): () => void {
  let grid: string[] = [];
  let score = 0;
  let gameActive = false;
  let cooldownEnd = 0;
  let cooldownTimer = 0;
  let animLocked = false;
  let currentBet = 0;

  function baseRewardPerPoint(): number {
    return Math.floor(2 * store.getModuleMultiplier());
  }

  container.innerHTML = `
    <div class="puzzle-panel">
      <div class="puzzle-header">
        <h2 class="panel-title">🧩 Tile Match</h2>
        <div class="puzzle-meta">
          <span class="puzzle-meta__item">Score : <span id="pz-score" class="mono">0</span> / ${TARGET}</span>
          <span class="puzzle-meta__item mono" id="pz-reward"></span>
        </div>
      </div>
      <div class="puzzle-progress-bar">
        <div class="puzzle-progress-fill" id="pz-bar" style="width:0%"></div>
      </div>
      <div class="puzzle-grid" id="pz-grid"></div>
      <div class="puzzle-footer">
        <div class="bet-wrap" id="pz-bet-row">
          <div class="bet-quicks">
            <button class="bet-quick" data-pct="10">10%</button>
            <button class="bet-quick" data-pct="25">25%</button>
            <button class="bet-quick" data-pct="50">50%</button>
            <button class="bet-quick" data-pct="100">MAX</button>
          </div>
          <div class="bet-input-row">
            <input class="bet-input" id="pz-bet-input" type="number" min="0" step="1" placeholder="0" />
            <span class="bet-preview" id="pz-bet-preview"></span>
          </div>
        </div>
        <button class="puzzle-btn" id="pz-start">Lancer une partie</button>
        <div class="puzzle-hint" id="pz-hint">Clique sur 2+ tuiles adjacentes de même couleur pour les effacer</div>
      </div>
    </div>
  `;

  const gridEl      = container.querySelector<HTMLElement>('#pz-grid')!;
  const scoreEl     = container.querySelector<HTMLElement>('#pz-score')!;
  const barEl       = container.querySelector<HTMLElement>('#pz-bar')!;
  const startBtn    = container.querySelector<HTMLButtonElement>('#pz-start')!;
  const hintEl      = container.querySelector<HTMLElement>('#pz-hint')!;
  const rewardEl    = container.querySelector<HTMLElement>('#pz-reward')!;
  const betRow      = container.querySelector<HTMLElement>('#pz-bet-row')!;
  const betInput    = container.querySelector<HTMLInputElement>('#pz-bet-input')!;
  const betPreview  = container.querySelector<HTMLElement>('#pz-bet-preview')!;

  function updateBetPreview(): void {
    const val = Math.floor(parseFloat(betInput.value) || 0);
    betPreview.textContent = val > 0 ? `= ${formatNumber(val)} bits` : '';
  }

  container.querySelectorAll<HTMLElement>('.bet-quick').forEach(btn => {
    btn.addEventListener('click', () => {
      const pct = parseInt(btn.dataset.pct ?? '100', 10);
      const max = store.getState().bits;
      betInput.value = String(Math.max(0, Math.floor(max * pct / 100)));
      updateBetPreview();
    });
  });

  betInput.addEventListener('input', updateBetPreview);
  updateBetPreview();

  function generateGrid(): void {
    grid = Array.from({ length: GRID_W * GRID_H }, () =>
      COLORS[Math.floor(Math.random() * COLORS.length)]
    );
  }

  function renderGrid(droppedIndices?: Set<number>): void {
    gridEl.innerHTML = '';
    for (let i = 0; i < grid.length; i++) {
      const tile = document.createElement('div');
      if (grid[i]) {
        tile.className = 'puzzle-tile';
        if (droppedIndices?.has(i)) tile.classList.add('puzzle-tile--drop');
        tile.style.setProperty('--tile-color', grid[i]);
        if (gameActive) tile.addEventListener('click', () => handleTileClick(i));
      } else {
        tile.className = 'puzzle-tile puzzle-tile--empty';
      }
      gridEl.appendChild(tile);
    }
  }

  function getGroup(index: number, color: string): Set<number> {
    const group   = new Set<number>();
    const visited = new Set<number>();
    function flood(idx: number): void {
      if (visited.has(idx) || grid[idx] !== color) return;
      visited.add(idx);
      group.add(idx);
      const row = Math.floor(idx / GRID_W);
      const col = idx % GRID_W;
      if (row > 0)          flood(idx - GRID_W);
      if (row < GRID_H - 1) flood(idx + GRID_W);
      if (col > 0)          flood(idx - 1);
      if (col < GRID_W - 1) flood(idx + 1);
    }
    flood(index);
    return group;
  }

  function handleTileClick(index: number): void {
    if (!gameActive || !grid[index] || animLocked) return;
    const group = getGroup(index, grid[index]);
    if (group.size < 2) {
      hintEl.textContent = 'Il faut au moins 2 tuiles adjacentes de même couleur !';
      return;
    }

    animLocked = true;

    const tiles = gridEl.querySelectorAll<HTMLElement>('.puzzle-tile, .puzzle-tile--empty');
    group.forEach(idx => tiles[idx]?.classList.add('puzzle-tile--clear'));

    setTimeout(() => {
      const combo = group.size >= 6 ? 3 : group.size >= 4 ? 2 : 1;
      const pts   = group.size * combo;
      score = Math.min(score + pts, TARGET);

      hintEl.textContent = combo > 1 ? `Combo ×${combo} — +${pts} pts` : `+${pts} pts`;

      group.forEach(idx => { grid[idx] = ''; });
      const gridBefore = [...grid];
      applyGravity();

      const droppedIndices = new Set<number>();
      for (let i = 0; i < grid.length; i++) {
        if (grid[i] && grid[i] !== gridBefore[i]) droppedIndices.add(i);
      }

      scoreEl.textContent = String(score);
      barEl.style.width   = `${Math.round((score / TARGET) * 100)}%`;
      updateRewardDisplay();

      // Unlock before re-render so click listeners attach correctly
      animLocked = false;
      renderGrid(droppedIndices);

      if (score >= TARGET)  endGame(true);
      else if (isStuck())   endGame(false);
    }, ANIM_MS);
  }

  function applyGravity(): void {
    for (let col = 0; col < GRID_W; col++) {
      const filled: string[] = [];
      for (let row = 0; row < GRID_H; row++) {
        const v = grid[row * GRID_W + col];
        if (v) filled.push(v);
      }
      for (let row = 0; row < GRID_H; row++) {
        const offset = GRID_H - filled.length;
        grid[row * GRID_W + col] = row < offset ? '' : filled[row - offset];
      }
    }
  }

  function isStuck(): boolean {
    for (let i = 0; i < grid.length; i++) {
      if (grid[i] && getGroup(i, grid[i]).size >= 2) return false;
    }
    return true;
  }

  function computeReward(): number {
    if (currentBet > 0) {
      return Math.floor(currentBet * score / 50 * store.getModuleMultiplier());
    }
    return Math.floor(score * baseRewardPerPoint());
  }

  function updateRewardDisplay(): void {
    rewardEl.textContent = currentBet > 0
      ? `→ ${formatNumber(computeReward())} bits`
      : `+${formatNumber(baseRewardPerPoint())} bits/pt`;
  }

  function endGame(won: boolean): void {
    gameActive = false;
    const reward = computeReward();
    store.addBits(reward);
    hintEl.textContent = won
      ? `🎉 Objectif atteint ! +${formatNumber(reward)} bits`
      : `Bloqué à ${score} pts — +${formatNumber(reward)} bits`;
    betRow.style.display   = '';
    startBtn.textContent   = 'Rejouer';
    startBtn.style.display = '';
    startBtn.disabled      = true;

    cooldownEnd = Date.now() + COOLDOWN_MS;
    clearInterval(cooldownTimer);
    cooldownTimer = window.setInterval(() => {
      const rem = Math.ceil((cooldownEnd - Date.now()) / 1000);
      if (rem <= 0) {
        clearInterval(cooldownTimer);
        startBtn.disabled    = false;
        startBtn.textContent = 'Rejouer';
      } else {
        startBtn.textContent = `Rejouer (${rem}s)`;
      }
    }, 500);
  }

  function startGame(): void {
    if (gameActive || Date.now() < cooldownEnd) return;
    const betVal = Math.floor(parseFloat(betInput.value) || 0);
    if (betVal > 0 && !store.spendBits(betVal)) {
      hintEl.textContent = 'Pas assez de bits pour cette mise !';
      return;
    }
    currentBet  = betVal;
    score       = 0;
    gameActive  = true;
    animLocked  = false;
    scoreEl.textContent = '0';
    barEl.style.width   = '0%';
    hintEl.textContent  = 'Clique sur 2+ tuiles adjacentes de même couleur';
    betRow.style.display   = 'none';
    startBtn.style.display = 'none';
    updateRewardDisplay();
    generateGrid();
    renderGrid();
  }

  startBtn.addEventListener('click', startGame);
  updateRewardDisplay();
  generateGrid();
  renderGrid();

  return () => { clearInterval(cooldownTimer); };
}
