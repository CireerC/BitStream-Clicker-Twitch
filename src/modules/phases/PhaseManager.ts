import { store } from '../../core/GameStore.js';
import { BALANCE } from '../../core/balance.js';

/** Callback fired when a new phase is entered. */
type PhaseCallback = (phaseId: number) => void;

const callbacks: PhaseCallback[] = [];

export function onPhaseUnlock(cb: PhaseCallback): void {
  callbacks.push(cb);
}

/** Start watching for phase transitions. Returns cleanup. */
export function startPhaseManager(): () => void {
  let lastPhase = store.getCurrentPhase();

  const unsub = store.subscribe(() => {
    const current = store.getCurrentPhase();
    if (current > lastPhase) {
      lastPhase = current;
      store.setState(s => { s.lastPhase = current; });
      showPhaseNotification(current);
      callbacks.forEach(cb => cb(current));
    }
  });

  return () => unsub();
}

function showPhaseNotification(phaseId: number): void {
  const phase = BALANCE.phases.find(p => p.id === phaseId);
  if (!phase) return;

  const unlockList = phase.unlocks.length > 0
    ? `<div class="phase-notif__unlocks">New: ${phase.unlocks.map(u => `<strong>${u}</strong>`).join(', ')}</div>`
    : '';

  const el = document.createElement('div');
  el.className = 'phase-notif';
  el.innerHTML = `
    <div class="phase-notif__badge">Phase ${phaseId}</div>
    <div class="phase-notif__title">${phase.title}</div>
    <div class="phase-notif__narrative">${phase.narrative}</div>
    ${unlockList}
  `;
  document.body.appendChild(el);

  // Auto-dismiss after 6s; click to dismiss early
  const dismiss = (): void => {
    el.classList.add('phase-notif--out');
    el.addEventListener('animationend', () => el.remove(), { once: true });
  };
  el.addEventListener('click', dismiss);
  setTimeout(dismiss, 6_000);
}
