import { getPlayerName, savePlayerName } from '../modules/leaderboard/Leaderboard.js';
import { upsertScore, isSupabaseConfigured } from '../integrations/supabase/LeaderboardDB.js';

/**
 * Shows a blocking modal asking the player for their username.
 * Returns immediately if a name is already stored.
 * Resolves with the chosen name when the player confirms.
 */
export function maybeShowUsernameModal(): void {
  if (getPlayerName()) return; // already set

  const overlay = document.createElement('div');
  overlay.className = 'username-modal-overlay';
  overlay.innerHTML = `
    <div class="username-modal">
      <div class="username-modal__icon">🎮</div>
      <h2 class="username-modal__title">Bienvenue sur BitStream !</h2>
      <p class="username-modal__sub">Choisissez votre pseudo pour le classement.</p>
      <input
        class="username-modal__input"
        id="username-input"
        type="text"
        maxlength="20"
        placeholder="Votre pseudo..."
        autocomplete="off"
        spellcheck="false"
      >
      <div class="username-modal__error" id="username-error"></div>
      <button class="username-modal__btn" id="username-confirm">Jouer →</button>
    </div>
  `;
  document.body.appendChild(overlay);

  const input   = overlay.querySelector<HTMLInputElement>('#username-input')!;
  const confirm = overlay.querySelector<HTMLButtonElement>('#username-confirm')!;
  const errorEl = overlay.querySelector<HTMLElement>('#username-error')!;

  requestAnimationFrame(() => input.focus());

  function submit(): void {
    const name = input.value.trim();
    if (name.length < 2) {
      errorEl.textContent = 'Pseudo trop court (2 caractères minimum).';
      input.classList.add('username-modal__input--error');
      return;
    }
    savePlayerName(name);
    overlay.classList.add('username-modal-overlay--out');
    overlay.addEventListener('animationend', () => overlay.remove(), { once: true });
    setTimeout(() => overlay.remove(), 400); // fallback

    // Push initial score of 0 to register the player in the DB
    if (isSupabaseConfigured()) {
      void upsertScore(name, 0).catch(() => { /* silent */ });
    }
  }

  confirm.addEventListener('click', submit);
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') submit();
    errorEl.textContent = '';
    input.classList.remove('username-modal__input--error');
  });
}
