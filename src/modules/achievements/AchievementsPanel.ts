import { store } from '../../core/GameStore.js';
import { ACHIEVEMENTS, formatNumber } from '../../core/balance.js';

export function mountAchievements(container: HTMLElement): () => void {
  function render(): void {
    const unlocked = new Set(store.getState().achievements);
    const total = ACHIEVEMENTS.length;
    const done = unlocked.size;
    const pct = Math.round((done / total) * 100);

    container.innerHTML = `
      <div class="ach-panel">
        <div class="ach-progress">
          <span class="ach-progress__label">Succès débloqués</span>
          <span class="ach-progress__count mono">${done} / ${total}</span>
          <div class="ach-progress__bar">
            <div class="ach-progress__fill" style="width:${pct}%"></div>
          </div>
        </div>
        <div class="ach-grid">
          ${ACHIEVEMENTS.map(ach => {
            const isDone = unlocked.has(ach.id);
            return `
              <div class="ach-card${isDone ? ' ach-card--done' : ''}" title="${isDone ? ach.description : 'Non débloqué'}">
                <div class="ach-card__icon">${isDone ? '🏆' : '🔒'}</div>
                <div class="ach-card__body">
                  <div class="ach-card__name">${isDone ? ach.name : '???'}</div>
                  ${isDone ? `<div class="ach-card__reward mono">+${formatNumber(ach.reward)}</div>` : ''}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  const unsub = store.subscribe(render);
  render();
  return () => unsub();
}
