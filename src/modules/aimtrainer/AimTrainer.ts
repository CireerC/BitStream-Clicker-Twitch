import { store } from '../../core/GameStore.js';
import { formatNumber } from '../../core/balance.js';

const GAME_DURATION  = 15;
const TARGET_LIFETIME = 1400;
const SPAWN_INTERVAL  = 500;
const SPAWN_CHANCE    = 0.85;

// Points per hit based on target size:
//   small (≤ 28px) → 3 pts, medium (≤ 42px) → 2 pts, large → 1 pt
function pointsForSize(size: number): number {
  if (size <= 28) return 3;
  if (size <= 42) return 2;
  return 1;
}

// Reward: sum of points × bet × 0.12 (each point worth 12% of bet)
const REWARD_PER_POINT = 0.12;

export function mountAimTrainer(container: HTMLElement): () => void {
  let gameActive = false;
  let points = 0;        // weighted score (not raw hit count)
  let hits = 0;          // raw hit counter for display
  let timeLeft = GAME_DURATION;
  let spawnInt = 0;
  let timerInt = 0;
  const activeTargets = new Set<HTMLElement>();

  container.innerHTML = `
    <div class="aimtrainer-panel">
      <h2 class="panel-title">🎯 Aim Trainer</h2>
      <div class="aim-hud">
        <span class="aim-hud__item">⏱ <span id="aim-timer">${GAME_DURATION}</span>s</span>
        <span class="aim-hud__item">🎯 <span id="aim-hits">0</span> hits</span>
        <span class="aim-hud__item">⭐ <span id="aim-score">0</span> pts</span>
        <span class="aim-hud__item aim-bet-live" id="aim-bet-live" style="display:none">
          Mise : <span id="aim-bet-label" class="mono">-</span>
        </span>
      </div>
      <div class="aim-field" id="aim-field">
        <div class="aim-hint" id="aim-hint">Petites cibles = plus de points !</div>
      </div>
      <div class="aim-controls">
        <div class="bet-wrap">
          <div class="bet-quicks">
            <button class="bet-quick" data-pct="10">10%</button>
            <button class="bet-quick" data-pct="25">25%</button>
            <button class="bet-quick" data-pct="50">50%</button>
            <button class="bet-quick" data-pct="100">MAX</button>
          </div>
          <input type="number" id="aim-bet" class="bet-input" value="100" min="1">
        </div>
        <button class="casino-btn" id="aim-start">🎯 Lancer la session</button>
      </div>
      <div id="aim-result" class="aim-result" style="display:none"></div>
    </div>
  `;

  const field      = container.querySelector<HTMLElement>('#aim-field')!;
  const timerEl    = container.querySelector<HTMLElement>('#aim-timer')!;
  const hitsEl     = container.querySelector<HTMLElement>('#aim-hits')!;
  const scoreEl    = container.querySelector<HTMLElement>('#aim-score')!;
  const startBtn   = container.querySelector<HTMLButtonElement>('#aim-start')!;
  const betInput   = container.querySelector<HTMLInputElement>('#aim-bet')!;
  const resultEl   = container.querySelector<HTMLElement>('#aim-result')!;
  const betLiveEl  = container.querySelector<HTMLElement>('#aim-bet-live')!;
  const betLabelEl = container.querySelector<HTMLElement>('#aim-bet-label')!;
  const hintEl     = container.querySelector<HTMLElement>('#aim-hint')!;

  container.querySelectorAll<HTMLElement>('.bet-quick').forEach(btn => {
    btn.addEventListener('click', () => {
      const pct = parseInt(btn.dataset.pct || '100');
      const max = Math.floor(store.getState().bits);
      betInput.value = String(Math.max(1, Math.floor(max * pct / 100)));
    });
  });

  function getBet(): number {
    return Math.max(1, parseInt(betInput.value) || 1);
  }

  function spawnTarget(): void {
    if (!gameActive) return;
    const target = document.createElement('div');
    target.className = 'aim-target';

    // Size range: 18–56px; smaller = rarer but more rewarding
    const size = 18 + Math.floor(Math.random() * 39);
    const pts = pointsForSize(size);
    target.style.width  = size + 'px';
    target.style.height = size + 'px';
    target.dataset.pts  = String(pts);

    const fieldW = field.clientWidth  - size - 8;
    const fieldH = field.clientHeight - size - 8;
    target.style.left = Math.max(4, Math.random() * fieldW) + 'px';
    target.style.top  = Math.max(4, Math.random() * fieldH) + 'px';

    // Smaller targets get a distinct accent color
    if (pts === 3) target.classList.add('aim-target--small');
    else if (pts === 2) target.classList.add('aim-target--medium');

    field.appendChild(target);
    activeTargets.add(target);

    const removeTarget = (): void => {
      if (!target.isConnected) return;
      target.remove();
      activeTargets.delete(target);
    };

    target.addEventListener('click', e => {
      e.stopPropagation();
      if (!gameActive) return;
      const p = Number(target.dataset.pts ?? 1);
      points += p;
      hits++;
      hitsEl.textContent  = String(hits);
      scoreEl.textContent = String(points);

      // Flash the target color on hit before removing
      target.classList.add('aim-target--hit');
      setTimeout(removeTarget, 130);

      // Show floating points label
      const floater = document.createElement('div');
      floater.className = 'aim-floater';
      floater.textContent = `+${p}`;
      floater.style.left = target.style.left;
      floater.style.top  = target.style.top;
      field.appendChild(floater);
      setTimeout(() => floater.remove(), 700);
    }, { once: true });

    setTimeout(removeTarget, TARGET_LIFETIME);
  }

  function endGame(bet: number): void {
    gameActive = false;
    clearInterval(spawnInt);
    clearInterval(timerInt);
    activeTargets.forEach(t => t.remove());
    activeTargets.clear();

    betLiveEl.style.display = 'none';
    hintEl.style.display = 'block';

    const reward = Math.floor(points * bet * REWARD_PER_POINT);
    if (reward > 0) {
      store.setState(s => {
        s.bits += reward;
        s.totalBitsEarned += reward;
      });
    }

    resultEl.style.display = 'block';
    if (hits === 0) {
      resultEl.className = 'aim-result aim-result--lose';
      resultEl.textContent = `🎯 0 cible — Perdu ${formatNumber(bet)} bits`;
    } else {
      const net = reward - bet;
      const sign = net >= 0 ? '+' : '';
      resultEl.className = `aim-result ${net >= 0 ? 'aim-result--win' : 'aim-result--lose'}`;
      resultEl.textContent = `🎯 ${hits} hits · ${points} pts → ${sign}${formatNumber(net)} bits nets`;
    }

    startBtn.disabled = false;
    startBtn.textContent = '🎯 Rejouer';
    timerEl.textContent  = String(GAME_DURATION);
    hitsEl.textContent   = '0';
    scoreEl.textContent  = '0';
  }

  startBtn.addEventListener('click', () => {
    if (gameActive) return;
    const bet = getBet();
    if (store.getState().bits < bet) {
      resultEl.style.display = 'block';
      resultEl.className = 'aim-result aim-result--lose';
      resultEl.textContent = 'Bits insuffisants !';
      return;
    }

    store.setState(s => { s.bits -= bet; });
    gameActive = true;
    points = 0;
    hits   = 0;
    timeLeft = GAME_DURATION;
    hitsEl.textContent   = '0';
    scoreEl.textContent  = '0';
    timerEl.textContent  = String(GAME_DURATION);
    resultEl.style.display = 'none';
    startBtn.disabled = true;

    betLabelEl.textContent = formatNumber(bet) + ' bits';
    betLiveEl.style.display = '';
    hintEl.style.display = 'none';

    spawnInt = window.setInterval(() => {
      if (Math.random() < SPAWN_CHANCE) spawnTarget();
    }, SPAWN_INTERVAL);

    timerInt = window.setInterval(() => {
      timeLeft--;
      timerEl.textContent = String(timeLeft);
      if (timeLeft <= 0) endGame(bet);
    }, 1000);
  });

  return () => {
    clearInterval(spawnInt);
    clearInterval(timerInt);
    activeTargets.forEach(t => t.remove());
  };
}
