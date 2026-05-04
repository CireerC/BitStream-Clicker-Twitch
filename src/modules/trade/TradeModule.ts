import { store } from '../../core/GameStore.js';
import { BALANCE, formatNumber } from '../../core/balance.js';

export function mountTrade(container: HTMLElement): () => void {
  container.innerHTML = `
    <div class="trade-panel">
      <h2 class="panel-title">💱 Trade</h2>
      <div class="trade-header">
        <div class="trade-header__label">Market prices fluctuate ±20%</div>
        <div class="trade-list"></div>
      </div>
    </div>
  `;

  const tradeList = container.querySelector<HTMLElement>('.trade-list')!;

  // Generate market multipliers (±20% variance)
  const marketMults = new Map<string, number>();
  for (const gen of BALANCE.generators) {
    const variance = 0.8 + Math.random() * 0.4; // 0.8 to 1.2
    marketMults.set(gen.id, variance);
  }

  function renderTrades(): void {
    tradeList.innerHTML = '';
    const state = store.getState();

    for (const gen of BALANCE.generators) {
      const gs = state.generators.find(g => g.id === gen.id)!;
      if (gs.owned === 0) continue; // Only show generators you own

      const baseSellPrice = gen.baseCost * (gen.growthRate ** gs.owned) * 0.5; // Sell for 50% of buy price
      const marketMult = marketMults.get(gen.id) || 1;
      const currentPrice = Math.floor(baseSellPrice * marketMult);

      const card = document.createElement('div');
      card.className = 'trade-item';
      card.innerHTML = `
        <div class="trade-item__name">${gen.emoji} ${gen.name}</div>
        <div class="trade-item__owned">Owned: ${gs.owned}</div>
        <div class="trade-item__price">
          <span class="trade-item__price-label">Sell 1 for</span>
          <span class="trade-item__price-value mono">${formatNumber(currentPrice)}</span>
        </div>
        <button class="trade-btn" data-gen="${gen.id}" data-price="${currentPrice}">
          Sell One
        </button>
      `;
      tradeList.appendChild(card);
    }

    if (tradeList.innerHTML === '') {
      tradeList.innerHTML = '<p class="trade-empty">Own generators to trade them on the market.</p>';
    }
  }

  function handleSell(e: MouseEvent): void {
    const btn = (e.target as HTMLElement).closest<HTMLElement>('[data-gen]');
    if (!btn) return;

    const genId = btn.dataset.gen!;
    const price = parseInt(btn.dataset.price || '0', 10);
    const state = store.getState();
    const gs = state.generators.find(g => g.id === genId)!;

    if (gs.owned === 0) return;

    // Sell 1 generator
    store.setState(s => {
      s.generators.find(g => g.id === genId)!.owned -= 1;
    });
    store.addBits(price);
    renderTrades();
  }

  function onStoreChange(): void {
    renderTrades();
  }

  tradeList.addEventListener('click', handleSell);
  const unsub = store.subscribe(onStoreChange);
  renderTrades();

  return () => unsub();
}
