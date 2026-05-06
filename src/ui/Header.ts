import { store } from '../core/GameStore.js';
import { formatNumber } from '../core/balance.js';
import { saveGame, deleteSave } from '../core/SaveSystem.js';
import { resetPlayerLeaderboard } from '../modules/leaderboard/Leaderboard.js';

export function mountHeader(container: HTMLElement): () => void {
  container.innerHTML = `
    <header class="header">
      <div class="header__brand">
        <span class="header__logo">⚡</span>
        <span class="header__title">BitStream</span>
      </div>

      <div class="header__currency">
        <span class="header__bits mono" id="hdr-bits">0</span>
        <span class="header__bits-label">BITS</span>
      </div>

      <div class="header__right">
        <div id="twitch-badge-slot"></div>
        <div class="header__actions">
          <button class="hdr-btn" id="btn-save" title="Save now">💾</button>
          <button class="hdr-btn hdr-btn--danger" id="btn-reset" title="Reset game">🗑</button>
        </div>
      </div>
    </header>
  `;

  const bitsEl = container.querySelector<HTMLElement>('#hdr-bits')!;
  const btnSave = container.querySelector<HTMLButtonElement>('#btn-save')!;
  const btnReset = container.querySelector<HTMLButtonElement>('#btn-reset')!;

  function render(): void {
    bitsEl.textContent = formatNumber(store.getState().bits);
    bitsEl.classList.remove('bits--tick');
    void bitsEl.offsetWidth;
    bitsEl.classList.add('bits--tick');
  }

  btnSave.addEventListener('click', () => {
    saveGame();
    btnSave.textContent = '✅';
    setTimeout(() => (btnSave.textContent = '💾'), 1500);
  });

  btnReset.addEventListener('click', () => {
    if (confirm('Réinitialiser toute la progression ? Cette action est irréversible.')) {
      resetPlayerLeaderboard().finally(() => {
        deleteSave();
        window.location.reload();
      });
    }
  });

  const unsub = store.subscribe(render);
  render();

  return () => unsub();
}
