import { store } from '../../core/GameStore.js';
import { BALANCE, formatNumber } from '../../core/balance.js';

function triggerEndgame(): void {
  const overlay = document.createElement('div');
  overlay.className = 'endgame-overlay';
  const { totalBitsEarned } = store.getState();

  overlay.innerHTML = `
    <div class="endgame-modal">
      <div class="endgame-modal__glow"></div>
      <div class="endgame-modal__content">
        <div class="endgame-modal__icon">🚀</div>
        <h1 class="endgame-modal__title">THE BITSTREAM PROTOCOL IS LIVE</h1>
        <p class="endgame-modal__subtitle">
          You've built a global distributed network from a single bedroom script.<br/>
          The protocol is now running on every node on Earth.
        </p>
        <div class="endgame-stats">
          <div class="endgame-stat">
            <span class="endgame-stat__label">Total Bits Generated</span>
            <span class="endgame-stat__value mono">${formatNumber(totalBitsEarned)}</span>
          </div>
          <div class="endgame-stat">
            <span class="endgame-stat__label">Peak BPS</span>
            <span class="endgame-stat__value mono">${formatNumber(store.getEffectiveBPS())} b/s</span>
          </div>
          <div class="endgame-stat">
            <span class="endgame-stat__label">Projects Completed</span>
            <span class="endgame-stat__value mono">${store.getState().projects.filter(p => p.purchased).length} / ${BALANCE.projects.length}</span>
          </div>
        </div>
        <p class="endgame-modal__continue">The network keeps running. Keep accumulating — there's always more.</p>
        <button class="endgame-close" id="endgame-close">Continue Playing</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  overlay.querySelector('#endgame-close')!.addEventListener('click', () => {
    overlay.classList.add('endgame-overlay--out');
    overlay.addEventListener('animationend', () => overlay.remove(), { once: true });
  });
}

const CATEGORY_LABELS: Record<string, string> = {
  gameplay: '🎮 Gameplay',
  module: '📦 New Module',
  automation: '🤖 Automation',
  economic: '💰 Economic',
  minigame: '🎲 Mini-games',
  endgame: '🚀 Endgame',
};

export function mountProjects(container: HTMLElement): () => void {
  container.innerHTML = `
    <div class="projects-panel">
      <h2 class="panel-title">Projects</h2>
      <div id="projects-list" class="projects-list"></div>
    </div>
  `;

  const list = container.querySelector<HTMLDivElement>('#projects-list')!;

  // Only rebuild when the set of visible projects changes
  let lastSig = '';

  function projectSig(): string {
    const s = store.getState();
    const purchased = s.projects.filter(p => p.purchased).map(p => p.id).join(',');
    const projectStates = BALANCE.projects.map(def => {
      const ps = s.projects.find(p => p.id === def.id)!;
      if (ps.purchased) return '0';
      // Check if prerequisites are met
      const preqsMet = def.requires.every(req =>
        s.projects.find(p => p.id === req)?.purchased
      );
      const unlocked = s.totalBitsEarned >= def.unlockAt && store.getCurrentPhase() >= def.phase;
      if (unlocked && preqsMet) return '1'; // available
      if (!unlocked && preqsMet) return '2'; // teaser
      return '3'; // locked
    }).join('');
    return purchased + '|' + projectStates;
  }

  /** Check if phase threshold is met */
  function isPhaseUnlocked(phase: number): boolean {
    return store.getCurrentPhase() >= phase;
  }

  /** Fully unlocked and purchasable */
  function isAvailable(id: string): boolean {
    const state = store.getState();
    const def = BALANCE.projects.find(p => p.id === id)!;
    const ps = state.projects.find(p => p.id === id)!;
    if (ps.purchased) return false;
    if (state.totalBitsEarned < def.unlockAt) return false;
    if (!isPhaseUnlocked(def.phase)) return false;
    for (const req of def.requires) {
      if (!state.projects.find(p => p.id === req)?.purchased) return false;
    }
    return true;
  }

  /**
   * "Next" project: prerequisites met but unlockAt not yet reached.
   * Show at most 1 per category as a teaser.
   */
  function isTeaser(id: string): boolean {
    const state = store.getState();
    const def = BALANCE.projects.find(p => p.id === id)!;
    const ps = state.projects.find(p => p.id === id)!;
    if (ps.purchased) return false;
    if (state.totalBitsEarned >= def.unlockAt && isPhaseUnlocked(def.phase)) return false;
    // Prerequisites satisfied
    for (const req of def.requires) {
      if (!state.projects.find(p => p.id === req)?.purchased) return false;
    }
    return true;
  }

  function describeEffect(effect: Record<string, any>): string {
    const parts: string[] = [];
    if (effect.unlocks) parts.push(`Unlock: ${effect.unlocks}`);
    if (effect.maxCombo) parts.push(`Max combo: ${effect.maxCombo}×`);
    if (effect.enabled) parts.push(`Enable: ${effect.enabled}`);
    if (effect.endgame) parts.push('🏁 Game ending');
    return parts.join(' · ');
  }

  function renderList(): void {
    const state = store.getState();
    list.innerHTML = '';

    const available = BALANCE.projects.filter(p => isAvailable(p.id));
    const teasers = BALANCE.projects.filter(p => isTeaser(p.id));

    if (available.length === 0 && teasers.length === 0) {
      list.innerHTML = '<p class="prj-hint">All projects completed.<br/>You win! 🏆</p>';
      return;
    }

    // Group available projects by category
    const byCategory = new Map<string, typeof BALANCE.projects[number][]>();
    for (const def of available) {
      if (!byCategory.has(def.category)) byCategory.set(def.category, []);
      byCategory.get(def.category)!.push(def);
    }

    for (const [cat, defs] of byCategory) {
      const section = document.createElement('div');
      section.className = 'prj-section';
      section.innerHTML = `<div class="prj-section__label">${CATEGORY_LABELS[cat] ?? cat}</div>`;

      for (const def of defs) {
        const canAfford = state.bits >= def.cost;
        const card = document.createElement('div');
        card.className = `prj-card${canAfford ? ' prj-card--affordable' : ''}`;
        card.dataset.id = def.id;

        card.innerHTML = `
          <div class="prj-card__header">
            <span class="prj-card__name">${def.name}</span>
            <span class="prj-card__cost mono">${formatNumber(def.cost)} bits</span>
          </div>
          <div class="prj-card__desc">${def.description}</div>
          <div class="prj-card__effect">${describeEffect(def.effect as Record<string, any>)}</div>
          <button class="prj-btn${canAfford ? '' : ' prj-btn--disabled'}" data-buy="${def.id}">
            ${canAfford ? 'RESEARCH' : 'Need ' + formatNumber(def.cost - state.bits) + ' more'}
          </button>
        `;
        section.appendChild(card);
      }
      list.appendChild(section);
    }

    // Teasers: show 1 per category (first alphabetically)
    const teasersByCategory = new Map<string, typeof BALANCE.projects[number]>();
    for (const def of teasers) {
      if (!teasersByCategory.has(def.category)) teasersByCategory.set(def.category, def);
    }

    if (teasersByCategory.size > 0) {
      const section = document.createElement('div');
      section.className = 'prj-section';
      section.innerHTML = `<div class="prj-section__label prj-section__label--locked">🔒 Coming up</div>`;

      for (const def of teasersByCategory.values()) {
        const needed = def.unlockAt - state.totalBitsEarned;
        const card = document.createElement('div');
        card.className = 'prj-card prj-card--locked';
        card.innerHTML = `
          <div class="prj-card__header">
            <span class="prj-card__name">${def.name}</span>
            <span class="prj-card__cost mono">${formatNumber(def.cost)} bits</span>
          </div>
          <div class="prj-card__desc">${def.description}</div>
          <div class="prj-card__locked-hint">Earn ${formatNumber(needed)} more bits total to unlock</div>
        `;
        section.appendChild(card);
      }
      list.appendChild(section);
    }
  }

  function handleBuy(e: MouseEvent): void {
    const btn = (e.target as HTMLElement).closest<HTMLElement>('[data-buy]');
    if (!btn) return;
    const projectId = btn.dataset.buy!;
    if (store.purchaseProject(projectId)) {
      // Check if this is the endgame project
      const project = BALANCE.projects.find(p => p.id === projectId);
      if ((project?.effect as any).endgame) {
        triggerEndgame();
      }
    }
    // renderList fires automatically via store.subscribe
  }

  function onStoreChange(): void {
    // Project affordability can change on every bit tick.
    // Only do a full rebuild when the set of visible projects actually changes.
    const sig = projectSig();
    if (sig !== lastSig) {
      lastSig = sig;
      renderList();
    } else {
      // Patch affordability text in-place
      const state = store.getState();
      list.querySelectorAll<HTMLElement>('[data-buy]').forEach(btn => {
        const id = btn.dataset.buy!;
        const def = BALANCE.projects.find(p => p.id === id)!;
        const canAfford = state.bits >= def.cost;
        btn.classList.toggle('prj-btn--disabled', !canAfford);
        btn.textContent = canAfford ? 'RESEARCH' : 'Need ' + formatNumber(def.cost - state.bits) + ' more';

        const card = btn.closest<HTMLElement>('.prj-card')!;
        card.classList.toggle('prj-card--affordable', canAfford);
      });
    }
  }

  list.addEventListener('click', handleBuy);
  const unsub = store.subscribe(onStoreChange);
  lastSig = projectSig();
  renderList();

  return () => unsub();
}
