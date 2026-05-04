import { formatNumber, formatDuration } from '../core/balance.js';
import type { OfflineReport } from '../core/SaveSystem.js';

export function showOfflineModal(report: OfflineReport): void {
  const overlay = document.createElement('div');
  overlay.className = 'mg-overlay';
  overlay.innerHTML = `
    <div class="mg-modal offline-modal" role="dialog" aria-modal="true">
      <div class="offline-modal__icon">💤</div>
      <h2 class="offline-modal__title">Welcome back!</h2>
      <p class="offline-modal__desc">
        While you were away for <strong>${formatDuration(report.seconds)}</strong>,<br/>
        your generators earned
      </p>
      <div class="offline-modal__amount mono">+${formatNumber(report.bitsEarned)} bits</div>
      <button class="upg-btn offline-modal__btn" id="offline-close">Claim & Continue</button>
    </div>
  `;
  document.body.appendChild(overlay);

  overlay.querySelector('#offline-close')!.addEventListener('click', () => {
    overlay.classList.add('mg-overlay--out');
    overlay.addEventListener('animationend', () => overlay.remove(), { once: true });
  });
}
