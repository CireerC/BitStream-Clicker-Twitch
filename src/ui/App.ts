// v2
import { mountHeader } from './Header.js';
import { mountClicker } from '../modules/clicker/Clicker.js';
import { mountProduction } from '../modules/production/Production.js';
import { mountProjects } from '../modules/projects/ProjectSystem.js';
import { mountCasino } from '../modules/casino/CasinoModule.js';
import { mountAimTrainer } from '../modules/aimtrainer/AimTrainer.js';
import { mountMissions } from '../modules/missions/MissionsModule.js';
import { mountLeaderboard } from '../modules/leaderboard/Leaderboard.js';
import { startMiniGameManager } from '../modules/minigames/MiniGameManager.js';
import { startPhaseManager } from '../modules/phases/PhaseManager.js';
import { startTwitchPoller, mountTwitchBadge } from '../integrations/twitch/TwitchAPI.js';
import { store } from '../core/GameStore.js';
import { initI18n, t } from '../core/i18n.js';
import { BALANCE, formatNumber } from '../core/balance.js';
import { maybeShowUsernameModal } from './UsernameModal.js';

interface AppConfig {
  twitchClientId?: string;
  twitchChannel?: string;
}

export function mountApp(root: HTMLElement, config: AppConfig = {}): void {
  initI18n(store);
  maybeShowUsernameModal();
  root.innerHTML = `
    <div id="hdr"></div>
    <main class="layout">
      <!-- Colonne gauche : Clicker + Stats -->
      <aside class="layout__left">
        <section id="clicker-slot"></section>
        <div class="stats-card">
          <div class="stats-card__row">
            <span class="stats-label" id="label-total">Total gagné</span>
            <span class="stats-value mono" id="stat-total">0</span>
          </div>
          <div class="stats-card__row">
            <span class="stats-label" id="label-bps">BPS</span>
            <span class="stats-value mono" id="stat-bps">0</span>
          </div>
          <div class="stats-card__row">
            <span class="stats-label" id="label-bpc">BPC</span>
            <span class="stats-value mono" id="stat-bpc">0</span>
          </div>
          <div class="stats-card__row">
            <span class="stats-label" id="label-multi">Multiplicateur</span>
            <span class="stats-value mono" id="stat-multi">1.00×</span>
          </div>
          <div class="stats-card__row" id="burst-row" style="display:none">
            <span class="stats-label burst-label" id="label-burst">⚡ BURST</span>
            <span class="stats-value mono burst-value" id="stat-burst"></span>
          </div>
          <div class="stats-card__row">
            <span class="stats-label" id="label-phase">Phase</span>
            <span class="stats-value mono" id="stat-phase">I — Pirate Garage</span>
          </div>
        </div>
      </aside>

      <!-- Colonne centre : Générateurs + Casino -->
      <section class="layout__center">
        <section id="prod-slot"></section>
        <section id="casino-slot" style="display:none"></section>
        <section id="aimtrainer-slot" style="display:none"></section>
      </section>

      <!-- Colonne droite : Projets + Missions + Leaderboard -->
      <aside class="layout__right">
        <section id="projects-slot"></section>
        <section id="missions-slot"></section>
        <section id="leaderboard-slot"></section>
      </aside>
    </main>
  `;

  mountHeader(root.querySelector('#hdr')!);
  mountClicker(root.querySelector('#clicker-slot')!);
  mountProduction(root.querySelector('#prod-slot')!);
  mountProjects(root.querySelector('#projects-slot')!);
  mountMissions(root.querySelector('#missions-slot')!);
  mountLeaderboard(root.querySelector('#leaderboard-slot')!);
  startMiniGameManager();
  startPhaseManager();

  if (config.twitchClientId && config.twitchChannel) {
    startTwitchPoller({ clientId: config.twitchClientId, channelName: config.twitchChannel });
  }
  // Le badge Twitch est monté dans le slot du header (créé par Header.ts)
  const twitchSlot = document.querySelector<HTMLElement>('#twitch-badge-slot');
  if (twitchSlot) mountTwitchBadge(twitchSlot);

  // ── Dynamic module reveal (when projects unlock them) ──────────────────────
  const casinoSlot      = root.querySelector<HTMLElement>('#casino-slot')!;
  const aimtrainerSlot  = root.querySelector<HTMLElement>('#aimtrainer-slot')!;

  let casinoMounted     = false;
  let aimtrainerMounted = false;

  function maybeUnlockModules(): void {
    const state = store.getState();

    if (!casinoMounted && state.projects.find(p => p.id === 'casino_charter')?.purchased) {
      casinoSlot.style.display = '';
      mountCasino(casinoSlot);
      casinoMounted = true;
    }

    if (!aimtrainerMounted && state.projects.find(p => p.id === 'aim_protocol')?.purchased) {
      aimtrainerSlot.style.display = '';
      mountAimTrainer(aimtrainerSlot);
      aimtrainerMounted = true;
    }
  }

  store.subscribe(maybeUnlockModules);
  maybeUnlockModules(); // check if any modules should be shown on load

  // ── Center stats ──────────────────────────────────────────────────────────
  const statTotal  = root.querySelector<HTMLElement>('#stat-total')!;
  const statBps    = root.querySelector<HTMLElement>('#stat-bps')!;
  const statBpc    = root.querySelector<HTMLElement>('#stat-bpc')!;
  const statMulti  = root.querySelector<HTMLElement>('#stat-multi')!;
  const burstRow   = root.querySelector<HTMLElement>('#burst-row')!;
  const statBurst  = root.querySelector<HTMLElement>('#stat-burst')!;
  const statPhase  = root.querySelector<HTMLElement>('#stat-phase')!;

  // Label elements for i18n
  const labelTotal = root.querySelector<HTMLElement>('#label-total')!;
  const labelBps   = root.querySelector<HTMLElement>('#label-bps')!;
  const labelBpc   = root.querySelector<HTMLElement>('#label-bpc')!;
  const labelMulti = root.querySelector<HTMLElement>('#label-multi')!;
  const labelBurst = root.querySelector<HTMLElement>('#label-burst')!;
  const labelPhase = root.querySelector<HTMLElement>('#label-phase')!;

  const PHASE_NAMES = ['', 'I', 'II', 'III', 'IV', 'V'];

  function updateLabels(): void {
    labelTotal.textContent = t('stat.total_earned');
    labelBps.textContent   = t('stat.bps');
    labelBpc.textContent   = t('stat.bpc');
    labelMulti.textContent = t('stat.global_multi');
    labelBurst.textContent = t('stat.burst');
    labelPhase.textContent = t('stat.phase');
  }

  function renderStats(): void {
    const state = store.getState();
    const m = state.multipliers;
    const phase = store.getCurrentPhase();
    const phaseInfo = BALANCE.phases.find(p => p.id === phase)!;

    statTotal.textContent  = formatNumber(state.totalBitsEarned);
    statBps.textContent    = formatNumber(store.getEffectiveBPS()) + ' b/s';
    statBpc.textContent    = formatNumber(store.getEffectiveBPC()) + ' /click';
    statPhase.textContent  = `${PHASE_NAMES[phase]} — ${phaseInfo.title}`;

    // Multiplicateur effectif sur la production passive (BPS)
    const totalMulti = store.getPassiveMultiplier();
    statMulti.textContent = formatNumber(totalMulti) + '×';

    const burstActive = store.isMinigameActive();
    burstRow.style.display = burstActive ? 'flex' : 'none';
    if (burstActive) {
      const rem = Math.max(0, Math.ceil((m.minigameEndsAt - Date.now()) / 1000));
      statBurst.textContent = `×${m.minigame} · ${rem}s`;
    }
  }

  // Update labels on language change and initial render
  updateLabels();
  store.subscribe(updateLabels);
  store.subscribe(renderStats);
  renderStats();

  // Expose store to window for dev console commands
  (window as any).store = store;
}
