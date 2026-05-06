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
          Tu as construit un réseau mondial depuis un simple script dans ta chambre.<br/>
          Le protocole tourne maintenant sur chaque nœud de la Terre.
        </p>
        <div class="endgame-stats">
          <div class="endgame-stat">
            <span class="endgame-stat__label">Total Bits Générés</span>
            <span class="endgame-stat__value mono">${formatNumber(totalBitsEarned)}</span>
          </div>
          <div class="endgame-stat">
            <span class="endgame-stat__label">BPS au pic</span>
            <span class="endgame-stat__value mono">${formatNumber(store.getEffectiveBPS())} b/s</span>
          </div>
          <div class="endgame-stat">
            <span class="endgame-stat__label">Projets complétés</span>
            <span class="endgame-stat__value mono">${store.getState().projects.filter(p => p.purchased).length} / ${BALANCE.projects.length}</span>
          </div>
        </div>
        <p class="endgame-modal__continue">Le réseau continue de tourner. Il y a toujours plus à accumuler.</p>
        <button class="endgame-close" id="endgame-close">Continuer à jouer</button>
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
  production: '⚡ Production',
  module:     '🎰 Modules',
  global:     '🌐 Global',
  endgame:    '🚀 Endgame',
};

type EffectMap = Record<string, unknown>;

function describeEffect(effect: EffectMap): string {
  const parts: string[] = [];
  if (effect.unlocks === 'trade')       parts.push('Débloque : Vente de générateurs');
  else if (effect.unlocks === 'casino') parts.push('Débloque : Casino');
  else if (effect.unlocks === 'aimtrainer') parts.push('Débloque : Aim Trainer');
  if (typeof effect.bpsBonus    === 'number') parts.push(`+${Math.round(effect.bpsBonus * 100)}% production passive`);
  if (typeof effect.clickBonus  === 'number') parts.push(`+${Math.round(effect.clickBonus * 100)}% bits/clic`);
  if (typeof effect.globalBonus === 'number') parts.push(`+${Math.round(effect.globalBonus * 100)}% tous les gains`);
  if (typeof effect.moduleBonus === 'number') parts.push(`+${Math.round(effect.moduleBonus * 100)}% gains modules`);
  if (typeof effect.maxCombo    === 'number') parts.push(`Combo max : ${effect.maxCombo}×`);
  if (effect.endgame) parts.push('🏁 Condition de victoire');
  return parts.join(' · ');
}

export function mountProjects(container: HTMLElement): () => void {
  container.innerHTML = `
    <div class="projects-panel">
      <h2 class="panel-title">Projets</h2>
      <div id="projects-list" class="projects-list"></div>
    </div>
  `;

  const list = container.querySelector<HTMLDivElement>('#projects-list')!;

  let lastSig = '';

  function projectSig(): string {
    const s = store.getState();
    const purchased = s.projects.filter(p => p.purchased).map(p => p.id).join(',');
    const states = BALANCE.projects.map(def => {
      const ps = s.projects.find(p => p.id === def.id)!;
      if (ps.purchased) return '0';
      const preqsMet = def.requires.every(req =>
        s.projects.find(p => p.id === req)?.purchased
      );
      const unlocked = s.totalBitsEarned >= def.unlockAt && store.getCurrentPhase() >= def.phase;
      if (unlocked && preqsMet) return '1';
      if (!unlocked && preqsMet) return '2';
      return '3';
    }).join('');
    return purchased + '|' + states;
  }

  function isAvailable(id: string): boolean {
    const state = store.getState();
    const def = BALANCE.projects.find(p => p.id === id)!;
    const ps = state.projects.find(p => p.id === id)!;
    if (ps.purchased) return false;
    if (state.totalBitsEarned < def.unlockAt) return false;
    if (store.getCurrentPhase() < def.phase) return false;
    for (const req of def.requires) {
      if (!state.projects.find(p => p.id === req)?.purchased) return false;
    }
    return true;
  }

  function isTeaser(id: string): boolean {
    const state = store.getState();
    const def = BALANCE.projects.find(p => p.id === id)!;
    const ps = state.projects.find(p => p.id === id)!;
    if (ps.purchased) return false;
    if (state.totalBitsEarned >= def.unlockAt && store.getCurrentPhase() >= def.phase) return false;
    for (const req of def.requires) {
      if (!state.projects.find(p => p.id === req)?.purchased) return false;
    }
    return true;
  }

  function renderList(): void {
    const state = store.getState();
    list.innerHTML = '';

    const available = BALANCE.projects.filter(p => isAvailable(p.id));
    const teasers   = BALANCE.projects.filter(p => isTeaser(p.id));

    if (available.length === 0 && teasers.length === 0) {
      list.innerHTML = '<p class="prj-hint">Tous les projets sont complétés. 🏆</p>';
      return;
    }

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
          <div class="prj-card__effect">${describeEffect(def.effect as EffectMap)}</div>
          <button class="prj-btn${canAfford ? '' : ' prj-btn--disabled'}" data-buy="${def.id}">
            ${canAfford ? 'ACHETER' : 'Manque ' + formatNumber(def.cost - state.bits)}
          </button>
        `;
        section.appendChild(card);
      }
      list.appendChild(section);
    }

    if (teasers.length > 0) {
      const teasersByCategory = new Map<string, typeof BALANCE.projects[number]>();
      for (const def of teasers) {
        if (!teasersByCategory.has(def.category)) teasersByCategory.set(def.category, def);
      }

      const section = document.createElement('div');
      section.className = 'prj-section';
      section.innerHTML = `<div class="prj-section__label prj-section__label--locked">🔒 Prochainement</div>`;

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
          <div class="prj-card__locked-hint">Gagne encore ${formatNumber(needed)} bits total pour débloquer</div>
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
      const project = BALANCE.projects.find(p => p.id === projectId);
      if ((project?.effect as EffectMap)?.endgame) {
        triggerEndgame();
      }
    }
  }

  function onStoreChange(): void {
    const sig = projectSig();
    if (sig !== lastSig) {
      lastSig = sig;
      renderList();
    } else {
      const state = store.getState();
      list.querySelectorAll<HTMLElement>('[data-buy]').forEach(btn => {
        const id = btn.dataset.buy!;
        const def = BALANCE.projects.find(p => p.id === id)!;
        const canAfford = state.bits >= def.cost;
        btn.classList.toggle('prj-btn--disabled', !canAfford);
        btn.textContent = canAfford ? 'ACHETER' : 'Manque ' + formatNumber(def.cost - state.bits);
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
