import { store } from '../../core/GameStore.js';
import { BALANCE, formatNumber, generatorCost, getMilestoneMultiplier } from '../../core/balance.js';

function getSellPrice(genId: string): number {
  const gen = BALANCE.generators.find(g => g.id === genId)!;
  const gs = store.getState().generators.find(g => g.id === genId)!;
  return Math.floor(gen.baseCost * Math.pow(gen.growthRate, gs.owned) * 0.5);
}

function isTradeUnlocked(): boolean {
  return !!store.getState().projects.find(p => p.id === 'marche_libre')?.purchased;
}

export function mountProduction(container: HTMLElement): () => void {
  container.innerHTML = `
    <div class="production-panel">
      <h2 class="panel-title">Générateurs</h2>
      <div id="generators-list" class="generators-list"></div>
    </div>
  `;

  const list = container.querySelector<HTMLDivElement>('#generators-list')!;

  // Signature of state that requires a full DOM rebuild
  let lastStructSig = '';

  function structSig(): string {
    const s = store.getState();
    const ownedCounts = s.generators.map(g => g.owned).join(',');
    const unlockedGens = BALANCE.generators.map(gen =>
      s.totalBitsEarned >= gen.unlockAt ? '1' : '0'
    ).join('');
    const tradeActive = s.projects.find(p => p.id === 'marche_libre')?.purchased ? '1' : '0';
    return ownedCounts + '|' + unlockedGens + '|' + Math.floor(s.multipliers.bpsBonus * 100) + '|' + tradeActive;
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

      const tradeUnlocked = isTradeUnlocked();
      const sellPrice = getSellPrice(gen.id);

      const milestoneMult = getMilestoneMultiplier(gen.milestones, gs.owned);
      const nextMs = gen.milestones.find(m => m.owned > gs.owned);
      const msText = gs.owned > 0
        ? (nextMs
          ? `×${milestoneMult} actif · prochain ×${nextMs.multiplier} à ${nextMs.owned}`
          : `×${milestoneMult} MAX`)
        : (nextMs ? `Palier ×${nextMs.multiplier} à ${nextMs.owned}` : '');

      const card = document.createElement('div');
      card.className = `gen-card${canAfford ? ' gen-card--affordable' : ''}`;
      card.dataset.id = gen.id;
      card.innerHTML = `
        <div class="gen-card__icon">${gen.emoji}</div>
        <div class="gen-card__info">
          <div class="gen-card__name">${gen.name}</div>
          <div class="gen-card__bps mono">${gs.owned > 0 ? formatNumber(bps) + ' b/s' : 'inactif'}</div>
          ${msText ? `<div class="gen-card__milestone">${msText}</div>` : ''}
          ${tradeUnlocked && gs.owned > 0 ? `<button class="gen-sell-btn" data-sell="${gen.id}" data-price="${sellPrice}">Vendre ${formatNumber(sellPrice)}</button>` : ''}
        </div>
        <div class="gen-card__right">
          <div class="gen-card__owned mono">${gs.owned}</div>
          <button class="gen-btn${canAfford ? '' : ' gen-btn--disabled'}" data-buy="${gen.id}">
            <span class="gen-btn__cost mono">${formatNumber(cost)}</span>
            <span class="gen-btn__label">ACHETER</span>
          </button>
        </div>
      `;
      list.appendChild(card);
    }

    if (!anyVisible) {
      list.innerHTML = '<p class="gen-hint">Clique pour générer tes premiers bits !</p>';
    }

    // Next locked generator hint
    const nextLocked = BALANCE.generators.find(
      gen => state.totalBitsEarned < gen.unlockAt
    );
    const existingHint = list.querySelector('.gen-next-hint');
    if (existingHint) existingHint.remove();
    if (nextLocked) {
      const needed = nextLocked.unlockAt - state.totalBitsEarned;
      const hint = document.createElement('div');
      hint.className = 'gen-next-hint';
      hint.innerHTML = `${nextLocked.emoji} <strong>${nextLocked.name}</strong> — encore ${formatNumber(needed)} bits gagnés pour débloquer`;
      list.appendChild(hint);
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

    // Update next-generator hint
    const nextLocked = BALANCE.generators.find(
      gen => state.totalBitsEarned < gen.unlockAt
    );
    const hint = list.querySelector<HTMLElement>('.gen-next-hint');
    if (hint && nextLocked) {
      const needed = nextLocked.unlockAt - state.totalBitsEarned;
      hint.innerHTML = `${nextLocked.emoji} <strong>${nextLocked.name}</strong> — encore ${formatNumber(needed)} bits gagnés pour débloquer`;
    } else if (hint && !nextLocked) {
      hint.remove();
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
    }
  }

  function handleSell(e: MouseEvent): void {
    const btn = (e.target as HTMLElement).closest<HTMLElement>('[data-sell]');
    if (!btn) return;
    const genId = btn.dataset.sell!;
    const price = parseInt(btn.dataset.price || '0', 10);
    const gs = store.getState().generators.find(g => g.id === genId)!;
    if (gs.owned === 0) return;
    store.setState(s => {
      s.generators.find(g => g.id === genId)!.owned -= 1;
    });
    store.addBits(price);
  }

  list.addEventListener('click', handleBuy);
  list.addEventListener('click', handleSell);
  const unsub = store.subscribe(onStoreChange);

  // Initial render
  lastStructSig = structSig();
  fullRender();

  return () => unsub();
}
