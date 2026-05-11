// v2
import { mountHeader } from './Header.js';
import { mountClicker } from '../modules/clicker/Clicker.js';
import { mountProduction } from '../modules/production/Production.js';
import { mountProjects } from '../modules/projects/ProjectSystem.js';
import { mountCasino } from '../modules/casino/CasinoModule.js';
import { mountAimTrainer } from '../modules/aimtrainer/AimTrainer.js';
import { mountLeaderboard } from '../modules/leaderboard/Leaderboard.js';
import { mountFlappy } from '../modules/flappy/FlappyBird.js';
import { mountPuzzle } from '../modules/puzzle/PuzzleModule.js';
import { mountAchievements } from '../modules/achievements/AchievementsPanel.js';
import type { AchievementDef } from '../core/balance.js';
import { startMiniGameManager } from '../modules/minigames/MiniGameManager.js';
import { startPhaseManager } from '../modules/phases/PhaseManager.js';
import { startTwitchPoller, mountTwitchBadge } from '../integrations/twitch/TwitchAPI.js';
import { store } from '../core/GameStore.js';
import { initI18n, t } from '../core/i18n.js';
import { BALANCE, formatNumber } from '../core/balance.js';

interface AppConfig {
  twitchClientId?: string;
  twitchChannel?: string;
}

export function mountApp(root: HTMLElement, config: AppConfig = {}): void {
  initI18n(store);
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
          <canvas id="bps-graph" class="bps-graph" width="160" height="28"></canvas>
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
            <span class="stats-value mono" id="stat-phase">I — Garage Hacker</span>
          </div>
        </div>
      </aside>

      <!-- Colonne centre-gauche : Générateurs -->
      <section class="layout__center-left">
        <section id="prod-slot"></section>
      </section>

      <!-- Colonne centre-droite : Modules débloquables -->
      <section class="layout__center-right">
        <section id="casino-slot"     style="display:none"></section>
        <section id="aimtrainer-slot" style="display:none"></section>
        <section id="flappy-slot"     style="display:none"></section>
        <section id="puzzle-slot"     style="display:none"></section>
      </section>

      <!-- Colonne droite : Projets + Succès + Classement -->
      <aside class="layout__right">
        <section id="projects-slot"></section>
        <section id="achievements-slot"></section>
        <section id="leaderboard-slot"></section>
      </aside>
    </main>
  `;

  mountHeader(root.querySelector('#hdr')!);
  mountClicker(root.querySelector('#clicker-slot')!);
  mountProduction(root.querySelector('#prod-slot')!);
  mountProjects(root.querySelector('#projects-slot')!);
  mountLeaderboard(root.querySelector('#leaderboard-slot')!);
  mountAchievements(root.querySelector('#achievements-slot')!);
  startMiniGameManager();
  startPhaseManager();

  if (config.twitchClientId && config.twitchChannel) {
    startTwitchPoller({ clientId: config.twitchClientId, channelName: config.twitchChannel });
  }
  const twitchSlot = document.querySelector<HTMLElement>('#twitch-badge-slot');
  if (twitchSlot) mountTwitchBadge(twitchSlot);

  // ── Dynamic module reveal ─────────────────────────────────────────────────
  const casinoSlot      = root.querySelector<HTMLElement>('#casino-slot')!;
  const aimtrainerSlot  = root.querySelector<HTMLElement>('#aimtrainer-slot')!;
  const flappySlot      = root.querySelector<HTMLElement>('#flappy-slot')!;
  const puzzleSlot      = root.querySelector<HTMLElement>('#puzzle-slot')!;

  let casinoMounted     = false;
  let aimtrainerMounted = false;
  let flappyMounted     = false;
  let puzzleMounted     = false;

  function maybeUnlockModules(): void {
    const state = store.getState();

    if (!casinoMounted && state.projects.find(p => p.id === 'protocole_casino')?.purchased) {
      casinoSlot.style.display = '';
      mountCasino(casinoSlot);
      casinoMounted = true;
    }

    if (!puzzleMounted && state.projects.find(p => p.id === 'protocole_puzzle')?.purchased) {
      puzzleSlot.style.display = '';
      mountPuzzle(puzzleSlot);
      puzzleMounted = true;
    }

    if (!flappyMounted && state.projects.find(p => p.id === 'protocole_arcade')?.purchased) {
      flappySlot.style.display = '';
      mountFlappy(flappySlot);
      flappyMounted = true;
    }

    if (!aimtrainerMounted && state.projects.find(p => p.id === 'protocole_precision')?.purchased) {
      aimtrainerSlot.style.display = '';
      mountAimTrainer(aimtrainerSlot);
      aimtrainerMounted = true;
    }
  }

  store.subscribe(maybeUnlockModules);
  maybeUnlockModules();

  // ── Achievement toasts ────────────────────────────────────────────────────
  function showAchievementToast(ach: AchievementDef): void {
    const toast = document.createElement('div');
    toast.className = 'achievement-toast';
    toast.innerHTML = `
      <div class="achievement-toast__icon">🏆</div>
      <div class="achievement-toast__body">
        <div class="achievement-toast__title">${ach.name}</div>
        <div class="achievement-toast__desc">${ach.description}</div>
        <div class="achievement-toast__reward">+${formatNumber(ach.reward)} bits</div>
      </div>
    `;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('achievement-toast--show'));
    setTimeout(() => toast.classList.remove('achievement-toast--show'), 3200);
    setTimeout(() => toast.remove(), 3700);
  }

  document.addEventListener('bitstream:achievement', (e: Event) => {
    showAchievementToast((e as CustomEvent<AchievementDef>).detail);
  });

  // ── Stats ─────────────────────────────────────────────────────────────────
  const statTotal  = root.querySelector<HTMLElement>('#stat-total')!;
  const statBps    = root.querySelector<HTMLElement>('#stat-bps')!;
  const statBpc    = root.querySelector<HTMLElement>('#stat-bpc')!;
  const statMulti  = root.querySelector<HTMLElement>('#stat-multi')!;
  const burstRow   = root.querySelector<HTMLElement>('#burst-row')!;
  const statBurst  = root.querySelector<HTMLElement>('#stat-burst')!;
  const statPhase  = root.querySelector<HTMLElement>('#stat-phase')!;

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

    statTotal.textContent = formatNumber(state.totalBitsEarned);
    statBps.textContent   = formatNumber(store.getEffectiveBPS()) + ' b/s';
    statBpc.textContent   = formatNumber(store.getEffectiveBPC()) + ' /click';
    statPhase.textContent = `${PHASE_NAMES[phase]} — ${phaseInfo.title}`;
    statMulti.textContent = formatNumber(store.getPassiveMultiplier()) + '×';

    const burstActive = store.isMinigameActive();
    burstRow.style.display = burstActive ? 'flex' : 'none';
    if (burstActive) {
      const rem = Math.max(0, Math.ceil((m.minigameEndsAt - Date.now()) / 1000));
      statBurst.textContent = `×${m.minigame} · ${rem}s`;
    }
  }

  // ── BPS sparkline ─────────────────────────────────────────────────────────
  const bpsCanvas = root.querySelector<HTMLCanvasElement>('#bps-graph')!;
  const bpsCtx    = bpsCanvas.getContext('2d')!;
  const BPS_SAMPLES = 60;
  const bpsHistory: number[] = [];
  let lastBpsSample = 0;

  function sampleAndDrawBps(): void {
    const now = Date.now();
    if (now - lastBpsSample < 3000) return;
    lastBpsSample = now;
    bpsHistory.push(store.getEffectiveBPS());
    if (bpsHistory.length > BPS_SAMPLES) bpsHistory.shift();

    const W = bpsCanvas.width;
    const H = bpsCanvas.height;
    bpsCtx.clearRect(0, 0, W, H);
    if (bpsHistory.length < 2) return;

    const max = Math.max(...bpsHistory, 0.001);

    bpsCtx.beginPath();
    bpsHistory.forEach((v, i) => {
      const x = (i / (BPS_SAMPLES - 1)) * W;
      const y = H - (v / max) * (H - 2) - 1;
      if (i === 0) bpsCtx.moveTo(x, y); else bpsCtx.lineTo(x, y);
    });
    bpsCtx.lineTo(((bpsHistory.length - 1) / (BPS_SAMPLES - 1)) * W, H);
    bpsCtx.lineTo(0, H);
    bpsCtx.closePath();
    bpsCtx.fillStyle = 'rgba(255,255,255,0.04)';
    bpsCtx.fill();

    bpsCtx.beginPath();
    bpsHistory.forEach((v, i) => {
      const x = (i / (BPS_SAMPLES - 1)) * W;
      const y = H - (v / max) * (H - 2) - 1;
      if (i === 0) bpsCtx.moveTo(x, y); else bpsCtx.lineTo(x, y);
    });
    bpsCtx.strokeStyle = 'rgba(255,255,255,0.5)';
    bpsCtx.lineWidth = 1.5;
    bpsCtx.stroke();
  }

  store.subscribe(sampleAndDrawBps);
  store.subscribe(updateLabels);
  store.subscribe(renderStats);

  updateLabels();
  renderStats();

  (window as any).store = store;
}
