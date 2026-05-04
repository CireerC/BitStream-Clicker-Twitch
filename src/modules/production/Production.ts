import { store } from '../../core/GameStore.js';
import { BALANCE, formatNumber, generatorCost } from '../../core/balance.js';

export function mountProduction(container: HTMLElement): () => void {
  container.innerHTML = `
    <div class="production-panel">
      <h2 class="panel-title">Generators</h2>
      <div id="generators-list" class="generators-list"></div>
    </div>
  `;

  const list = container.querySelector<HTMLDivElement>('#generators-list')!;

  // Signature of state that requires a full DOM rebuild
  let lastStructSig = '';

  function structSig(): string {
    const s = store.getState();
    const ownedCounts = s.generators.map(g => g.owned).join(',');
    // Track which generators are currently visible (unlocked), not exact bits
    const unlockedGens = BALANCE.generators.map(gen =>
      s.totalBitsEarned >= gen.unlockAt ? '1' : '0'
    ).join('');
    return ownedCounts + '|' + unlockedGens + '|' + Math.floor(s.multipliers.passive);
  }

  /** Full DOM rebuild — only called when a purchase or unlock happens */
  function fullRender(): void {
    const state = store.getState();
    list.innerHTML = '';

    let anyVisible = false;
    for (const gen of BALANCE.generators) {
      const gs = state.generators.find(g => g.id === gen.id)!;
      if (state.totalBitsEarned < gen.unlockAt) continue;
      anyVisible = true;

      const cost = generatorCost(gen.baseCost, gen.growthRate, gs.owned);
      const canAfford = state.bits >= cost;
      const bps = gs.owned * gen.baseBps * store.getPassiveMultiplier();

      const card = document.createElement('div');
      card.className = `gen-card${canAfford ? ' gen-card--affordable' : ''}`;
      card.dataset.id = gen.id;
      card.innerHTML = `
        <div class="gen-card__icon">${gen.emoji}</div>
        <div class="gen-card__info">
          <div class="gen-card__name">${gen.name}</div>
          <div class="gen-card__desc">${gen.description}</div>
          <div class="gen-card__bps mono">${gs.owned > 0 ? formatNumber(bps) + ' b/s' : 'idle'}</div>
        </div>
        <div class="gen-card__right">
          <div class="gen-card__owned mono">${gs.owned}</div>
          <button class="gen-btn${canAfford ? '' : ' gen-btn--disabled'}" data-buy="${gen.id}">
            <span class="gen-btn__cost mono">${formatNumber(cost)}</span>
            <span class="gen-btn__label">BUY</span>
          </button>
        </div>
      `;
      list.appendChild(card);
    }

    if (!anyVisible) {
      list.innerHTML = '<p class="gen-hint">Earn more bits to unlock generators…</p>';
    }
  }

  /**
   * Lightweight update — runs on every game loop tick.
   * Only patches text content and CSS classes; never recreates DOM nodes.
   * This keeps buttons stable between mousedown/mouseup so clicks register.
   */
  function lightUpdate(): void {
    const state = store.getState();
    for (const gen of BALANCE.generators) {
      const card = list.querySelector<HTMLElement>(`[data-id="${gen.id}"]`);
      if (!card) continue;

      const gs = state.generators.find(g => g.id === gen.id)!;
      const cost = generatorCost(gen.baseCost, gen.growthRate, gs.owned);
      const canAfford = state.bits >= cost;

      card.classList.toggle('gen-card--affordable', canAfford);

      const btn = card.querySelector<HTMLElement>(`[data-buy="${gen.id}"]`)!;
      btn.classList.toggle('gen-btn--disabled', !canAfford);
      btn.querySelector('.gen-btn__cost')!.textContent = formatNumber(cost);

      if (gs.owned > 0) {
        const bps = gs.owned * gen.baseBps * store.getPassiveMultiplier();
        card.querySelector<HTMLElement>('.gen-card__bps')!.textContent = formatNumber(bps) + ' b/s';
      }
    }
  }

  function onStoreChange(): void {
    const sig = structSig();
    if (sig !== lastStructSig) {
      lastStructSig = sig;
      fullRender();       // purchase or unlock → rebuild
    } else {
      lightUpdate();      // passive tick → patch in place
    }
  }

  function handleBuy(e: MouseEvent): void {
    const btn = (e.target as HTMLElement).closest<HTMLElement>('[data-buy]');
    if (!btn) return;
    const id = btn.dataset.buy!;
    if (store.buyGenerator(id)) {
      const card = list.querySelector<HTMLElement>(`[data-id="${id}"]`);
      card?.classList.add('gen-card--bought');
      // class removed on next fullRender (triggered by the purchase notify)
    }
  }

  list.addEventListener('click', handleBuy);
  const unsub = store.subscribe(onStoreChange);

  // Initial render
  lastStructSig = structSig();
  fullRender();

  return () => unsub();
}
