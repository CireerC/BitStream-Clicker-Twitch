import { store } from '../../core/GameStore.js';
import { formatNumber } from '../../core/balance.js';

export function mountPuzzle(container: HTMLElement): () => void {
  container.innerHTML = `
    <div class="puzzle-panel">
      <h2 class="panel-title">🧩 Tile Matching</h2>
      <div class="puzzle-stats">
        <div class="puzzle-stat">Score: <span id="puzzle-score" class="mono">0</span></div>
        <div class="puzzle-stat">Target: <span id="puzzle-target" class="mono">100</span></div>
      </div>
      <div class="puzzle-grid" id="puzzle-grid"></div>
      <button class="puzzle-btn" id="puzzle-start">Start Game</button>
      <div class="puzzle-result" id="puzzle-result" style="display:none"></div>
    </div>
  `;

  const gridEl = container.querySelector<HTMLElement>('#puzzle-grid')!;
  const scoreEl = container.querySelector<HTMLElement>('#puzzle-score')!;
  const startBtn = container.querySelector<HTMLElement>('#puzzle-start')!;
  const resultEl = container.querySelector<HTMLElement>('#puzzle-result')!;

  const GRID_WIDTH = 5;
  const GRID_HEIGHT = 5;
  const COLORS = ['#ff4444', '#ffaa00', '#ffdd00', '#00ff44', '#00aaff'];

  let grid: string[] = [];
  let score = 0;
  let gameActive = false;
  let selectedTiles = new Set<number>();

  function generateGrid(): void {
    grid = Array.from({ length: GRID_WIDTH * GRID_HEIGHT }, () =>
      COLORS[Math.floor(Math.random() * COLORS.length)]
    );
  }

  function renderGrid(): void {
    gridEl.innerHTML = '';
    gridEl.style.gridTemplateColumns = `repeat(${GRID_WIDTH}, 1fr)`;

    for (let i = 0; i < grid.length; i++) {
      const tile = document.createElement('div');
      tile.className = 'puzzle-tile';
      tile.style.backgroundColor = grid[i];
      tile.dataset.index = String(i);
      tile.addEventListener('click', () => handleTileClick(i));
      gridEl.appendChild(tile);
    }
  }

  function getAdjacentTiles(index: number, color: string): Set<number> {
    const adjacent = new Set<number>();
    const visited = new Set<number>();

    function flood(idx: number): void {
      if (visited.has(idx) || grid[idx] !== color) return;
      visited.add(idx);
      adjacent.add(idx);

      const row = Math.floor(idx / GRID_WIDTH);
      const col = idx % GRID_WIDTH;

      // Check adjacent tiles (up, down, left, right)
      if (row > 0) flood(idx - GRID_WIDTH); // up
      if (row < GRID_HEIGHT - 1) flood(idx + GRID_WIDTH); // down
      if (col > 0) flood(idx - 1); // left
      if (col < GRID_WIDTH - 1) flood(idx + 1); // right
    }

    flood(index);
    return adjacent;
  }

  function handleTileClick(index: number): void {
    if (!gameActive || selectedTiles.has(index)) return;

    const color = grid[index];
    const adjacent = getAdjacentTiles(index, color);

    // Only clear if 2+ tiles of same color are adjacent
    if (adjacent.size < 2) return;

    // Clear tiles
    const clearedTiles = Array.from(adjacent);
    clearedTiles.forEach(idx => {
      grid[idx] = '';
    });

    score += adjacent.size;

    // Apply combo multiplier
    if (adjacent.size > 4) {
      score = Math.floor(score * 2);
    }

    scoreEl.textContent = String(score);

    // Gravity: tiles fall down
    applyGravity();
    renderGrid();

    // Check win condition
    if (score >= 100) {
      endGame(true);
    } else if (isGameOver()) {
      endGame(false);
    }
  }

  function applyGravity(): void {
    for (let col = 0; col < GRID_WIDTH; col++) {
      const column: string[] = [];

      // Extract non-empty tiles
      for (let row = 0; row < GRID_HEIGHT; row++) {
        const idx = row * GRID_WIDTH + col;
        if (grid[idx] !== '') {
          column.push(grid[idx]);
        }
      }

      // Fill column from bottom
      for (let row = 0; row < GRID_HEIGHT; row++) {
        const idx = row * GRID_WIDTH + col;
        if (row < GRID_HEIGHT - column.length) {
          grid[idx] = '';
        } else {
          grid[idx] = column[row - (GRID_HEIGHT - column.length)];
        }
      }
    }
  }

  function isGameOver(): boolean {
    // Check if any moves are available
    for (let i = 0; i < grid.length; i++) {
      if (grid[i] !== '') {
        const adjacent = getAdjacentTiles(i, grid[i]);
        if (adjacent.size > 1) {
          return false;
        }
      }
    }
    return true;
  }

  function endGame(won: boolean): void {
    gameActive = false;

    const reward = Math.floor(score * 2); // 1 point = 2 Bits
    const bonus = won ? Math.floor(score * 0.5) : 0; // Bonus for perfect clear

    if (won) {
      store.addBits(reward + bonus);
      resultEl.textContent = `🎉 Perfect! Score: ${score} — Won ${formatNumber(reward + bonus)} bits!`;
      resultEl.className = 'puzzle-result puzzle-result--win';
    } else {
      store.addBits(reward);
      resultEl.textContent = `Game Over! Score: ${score} — Won ${formatNumber(reward)} bits`;
      resultEl.className = 'puzzle-result puzzle-result--lose';
    }

    resultEl.style.display = 'block';
    startBtn.textContent = 'Play Again';

    setTimeout(() => {
      resultEl.style.display = 'none';
    }, 3000);
  }

  function startGame(): void {
    if (gameActive) return;

    score = 0;
    gameActive = true;
    selectedTiles.clear();
    scoreEl.textContent = '0';
    startBtn.textContent = 'Game Active...';
    resultEl.style.display = 'none';

    generateGrid();
    renderGrid();
  }

  startBtn.addEventListener('click', startGame);

  const unsub = store.subscribe(() => {
    // Update on store changes if needed
  });

  // Initial render (empty state)
  generateGrid();
  renderGrid();

  return () => unsub();
}
