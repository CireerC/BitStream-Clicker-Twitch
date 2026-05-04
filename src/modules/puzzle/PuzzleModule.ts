import { store } from '../../core/GameStore.js';

export function mountPuzzle(container: HTMLElement): () => void {
  container.innerHTML = `
    <div class="puzzle-panel">
      <h2 class="panel-title">🧩 Puzzle</h2>
      <div class="puzzle-intro">
        <p>Arrange blocks for production bonuses!</p>
        <p class="puzzle-note">Feature coming soon: interactive block puzzle</p>
      </div>
      <div class="puzzle-grid" id="puzzle-grid"></div>
      <button id="puzzle-btn" class="puzzle-btn">Generate Pattern</button>
    </div>
  `;

  const puzzleGrid = container.querySelector<HTMLElement>('#puzzle-grid')!;
  const puzzleBtn = container.querySelector<HTMLElement>('#puzzle-btn')!;

  const GRID_SIZE = 4;
  let score = 0;

  function generatePattern(): void {
    puzzleGrid.innerHTML = '';
    score = 0;

    for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
      const block = document.createElement('div');
      block.className = 'puzzle-block';
      block.dataset.index = String(i);
      block.addEventListener('click', handleBlockClick);
      puzzleGrid.appendChild(block);
    }

    puzzleBtn.textContent = `Score: 0 | Click blocks in sequence`;
  }

  function handleBlockClick(e: MouseEvent): void {
    const block = e.target as HTMLElement;
    if (!block.classList.contains('puzzle-block')) return;

    block.classList.toggle('puzzle-block--active');
    score += 10;
    puzzleBtn.textContent = `Score: ${score} | Claim bonus when ready!`;

    // Auto-claim small bonus
    if (score > 50) {
      claimBonus();
    }
  }

  function claimBonus(): void {
    const bonus = Math.floor(score / 10);
    store.addBits(bonus);
    generatePattern();
  }

  puzzleBtn.addEventListener('click', claimBonus);

  function onStoreChange(): void {
    // Update on state change (optional - for dynamic bonus calculation)
  }

  const unsub = store.subscribe(onStoreChange);
  generatePattern();

  return () => unsub();
}
