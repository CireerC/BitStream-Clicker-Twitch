import { store } from '../../core/GameStore.js';
import { formatNumber } from '../../core/balance.js';

export function mountCasino(container: HTMLElement): () => void {
  container.innerHTML = `
    <div class="casino-panel">
      <h2 class="panel-title">🎰 Casino</h2>
      <div class="casino-stats">
        <div class="stat-row">
          <span class="stat-label">Wallet</span>
          <span class="stat-value mono" id="casino-wallet">0</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">Multiplier</span>
          <span class="stat-value mono" id="casino-mult">1.50×</span>
        </div>
      </div>
      <div class="casino-games"></div>
    </div>
  `;

  const gamesContainer = container.querySelector<HTMLElement>('.casino-games')!;
  const walletEl = container.querySelector<HTMLElement>('#casino-wallet')!;
  const multEl = container.querySelector<HTMLElement>('#casino-mult')!;

  // Simple betting mechanics: risk Bits for multiplier rewards
  const games = [
    { id: 'safe', name: 'Safe Bet', risk: 100, mult: 1.25 },
    { id: 'risky', name: 'Risky Bet', risk: 500, mult: 2.0 },
    { id: 'extreme', name: 'Extreme Bet', risk: 2000, mult: 5.0 },
  ];

  function renderGames(): void {
    gamesContainer.innerHTML = '';
    const state = store.getState();

    for (const game of games) {
      const canAfford = state.bits >= game.risk;
      const card = document.createElement('div');
      card.className = `casino-game${canAfford ? ' casino-game--affordable' : ''}`;
      card.innerHTML = `
        <div class="casino-game__name">${game.name}</div>
        <div class="casino-game__odds">Win: ×${game.mult}</div>
        <button class="casino-btn${canAfford ? '' : ' casino-btn--disabled'}" data-game="${game.id}">
          ${formatNumber(game.risk)} Bits
        </button>
      `;
      gamesContainer.appendChild(card);
    }
  }

  function handleBet(e: MouseEvent): void {
    const btn = (e.target as HTMLElement).closest<HTMLElement>('[data-game]');
    if (!btn) return;

    const gameId = btn.dataset.game!;
    const game = games.find(g => g.id === gameId)!;
    const state = store.getState();

    if (state.bits < game.risk) return;

    // 50% win rate
    const won = Math.random() < 0.5;
    if (won) {
      const reward = game.risk * game.mult;
      store.addBits(reward);
    } else {
      store.spendBits(game.risk);
    }

    renderGames();
  }

  function onStoreChange(): void {
    const state = store.getState();
    walletEl.textContent = formatNumber(state.bits);
    renderGames();
  }

  gamesContainer.addEventListener('click', handleBet);
  const unsub = store.subscribe(onStoreChange);
  renderGames();
  onStoreChange();

  return () => unsub();
}
