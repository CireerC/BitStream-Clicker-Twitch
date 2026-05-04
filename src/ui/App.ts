// v2
import { mountHeader } from './Header.js';
import { mountClicker } from '../modules/clicker/Clicker.js';
import { mountProduction } from '../modules/production/Production.js';
import { mountProjects } from '../modules/projects/ProjectSystem.js';
import { mountCasino } from '../modules/casino/CasinoModule.js';
import { mountTrade } from '../modules/trade/TradeModule.js';
import { mountPuzzle } from '../modules/puzzle/PuzzleModule.js';
import { startMiniGameManager } from '../modules/minigames/MiniGameManager.js';
import { startPhaseManager, onPhaseUnlock } from '../modules/phases/PhaseManager.js';
import { startTwitchPoller, mountTwitchBadge } from '../integrations/twitch/TwitchAPI.js';
import { store } from '../core/GameStore.js';
import { BALANCE, formatNumber } from '../core/balance.js';

interface AppConfig {
  twitchClientId?: string;
  twitchChannel?: string;
}

export function mountApp(root: HTMLElement, config: AppConfig = {}): void {
  root.innerHTML = `
    <div id="hdr"></div>
    <main class="layout">
      <aside class="layout__left" id="layout-left">
        <section id="clicker-slot"></section>
        <section id="prod-slot"></section>
        <section id="casino-slot" style="display:none"></section>
        <section id="trade-slot" style="display:none"></section>
        <section id="puzzle-slot" style="display:none"></section>
      </aside>

      <section class="layout__center">
        <div class="stats-card">
          <div class="stats-card__row">
            <span class="stats-label">Total earned</span>
            <span class="stats-value mono" id="stat-total">0</span>
          </div>
          <div class="stats-card__row">
            <span class="stats-label">BPS</span>
            <span class="stats-value mono" id="stat-bps">0</span>
          </div>
          <div class="stats-card__row">
            <span class="stats-label">BPC</span>
            <span class="stats-value mono" id="stat-bpc">0</span>
          </div>
          <div class="stats-card__row">
            <span class="stats-label">Global ×</span>
            <span class="stats-value mono" id="stat-multi">1.00×</span>
          </div>
          <div class="stats-card__row" id="burst-row" style="display:none">
            <span class="stats-label burst-label">⚡ BURST</span>
            <span class="stats-value mono burst-value" id="stat-burst"></span>
          </div>
          <div class="stats-card__row">
            <span class="stats-label">Phase</span>
            <span class="stats-value mono" id="stat-phase">I — Garage Hacker</span>
          </div>
        </div>

        <div id="twitch-badge-slot" class="twitch-slot"></div>
      </section>

      <aside class="layout__right">
        <section id="projects-slot"></section>
      </aside>
    </main>
  `;

  mountHeader(root.querySelector('#hdr')!);
  mountClicker(root.querySelector('#clicker-slot')!);
  mountProduction(root.querySelector('#prod-slot')!);
  mountProjects(root.querySelector('#projects-slot')!);
  startMiniGameManager();
  startPhaseManager();

  if (config.twitchClientId && config.twitchChannel) {
    startTwitchPoller({ clientId: config.twitchClientId, channelName: config.twitchChannel });
  }
  mountTwitchBadge(root.querySelector('#twitch-badge-slot')!);

  // ── Dynamic module reveal (when projects unlock them) ──────────────────────
  const casinoSlot = root.querySelector<HTMLElement>('#casino-slot')!;
  const tradeSlot = root.querySelector<HTMLElement>('#trade-slot')!;
  const puzzleSlot = root.querySelector<HTMLElement>('#puzzle-slot')!;

  let casinoMounted = false;
  let tradeMounted = false;
  let puzzleMounted = false;

  function maybeUnlockModules(): void {
    const state = store.getState();

    // Casino: unlock when "casino_charter" project is purchased
    if (!casinoMounted && state.projects.find(p => p.id === 'casino_charter')?.purchased) {
      casinoSlot.style.display = '';
      mountCasino(casinoSlot);
      casinoMounted = true;
    }

    // Trade: unlock when "market_access" project is purchased
    if (!tradeMounted && state.projects.find(p => p.id === 'market_access')?.purchased) {
      tradeSlot.style.display = '';
      mountTrade(tradeSlot);
      tradeMounted = true;
    }

    // Puzzle: unlock when "puzzle_framework" project is purchased
    if (!puzzleMounted && state.projects.find(p => p.id === 'puzzle_framework')?.purchased) {
      puzzleSlot.style.display = '';
      mountPuzzle(puzzleSlot);
      puzzleMounted = true;
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

  const PHASE_NAMES = ['', 'I', 'II', 'III', 'IV', 'V'];

  function renderStats(): void {
    const state = store.getState();
    const m = state.multipliers;
    const phase = store.getCurrentPhase();
    const phaseInfo = BALANCE.phases.find(p => p.id === phase)!;

    statTotal.textContent  = formatNumber(state.totalBitsEarned);
    statBps.textContent    = formatNumber(store.getEffectiveBPS()) + ' b/s';
    statBpc.textContent    = formatNumber(store.getEffectiveBPC()) + ' /click';
    statPhase.textContent  = `${PHASE_NAMES[phase]} — ${phaseInfo.title}`;

    const totalMulti = m.click * m.passive * m.global * m.twitch;
    statMulti.textContent = formatNumber(totalMulti) + '×';

    const burstActive = store.isMinigameActive();
    burstRow.style.display = burstActive ? 'flex' : 'none';
    if (burstActive) {
      const rem = Math.max(0, Math.ceil((m.minigameEndsAt - Date.now()) / 1000));
      statBurst.textContent = `×${m.minigame} · ${rem}s`;
    }

    // Apply quantum phase styling in Phase 5
    if (phase === 5) {
      root.setAttribute('data-phase', '5');
    } else {
      root.removeAttribute('data-phase');
    }
  }

  store.subscribe(renderStats);
  renderStats();
}
