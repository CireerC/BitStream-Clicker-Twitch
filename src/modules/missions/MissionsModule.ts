import { store } from '../../core/GameStore.js';
import { formatNumber } from '../../core/balance.js';

interface Mission {
  id: string;
  label: string;
  description: string;
  target: number;
  reward: number;
  type: 'clicks' | 'bits_earned' | 'generators';
}

const MISSION_POOLS: Mission[][] = [
  // Facile
  [
    { id: 'm_click_50',   label: '⚡ Cliqueur',    description: 'Cliquer 50 fois',        target: 50,    reward: 500,    type: 'clicks' },
    { id: 'm_earn_1k',    label: '💰 Accumulateur', description: 'Gagner 1 000 bits',       target: 1000,  reward: 800,    type: 'bits_earned' },
    { id: 'm_gen_3',      label: '🤖 Constructeur', description: 'Posséder 3 générateurs',  target: 3,     reward: 600,    type: 'generators' },
  ],
  // Moyen
  [
    { id: 'm_click_500',  label: '⚡ Cliqueur Pro', description: 'Cliquer 500 fois',        target: 500,   reward: 5000,   type: 'clicks' },
    { id: 'm_earn_50k',   label: '💰 Investisseur', description: 'Gagner 50 000 bits',      target: 50000, reward: 8000,   type: 'bits_earned' },
    { id: 'm_gen_20',     label: '🏭 Industriel',   description: 'Posséder 20 générateurs', target: 20,    reward: 7500,   type: 'generators' },
  ],
  // Difficile
  [
    { id: 'm_click_2k',   label: '⚡ Légende',       description: 'Cliquer 2 000 fois',      target: 2000,  reward: 25000,  type: 'clicks' },
    { id: 'm_earn_1m',    label: '💰 Millionnaire',  description: 'Gagner 1 000 000 bits',   target: 1e6,   reward: 50000,  type: 'bits_earned' },
    { id: 'm_gen_50',     label: '🌐 Empire',        description: 'Posséder 50 générateurs', target: 50,    reward: 40000,  type: 'generators' },
  ],
];

// Seed quotidien basé sur la date YYYY-MM-DD (mois correct 1-12)
function getDailySeed(): string {
  const d = new Date();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  return `${d.getFullYear()}-${mm}-${d.getDate()}`;
}

function seededRandom(seed: string, idx: number): number {
  let h = idx * 2654435761;
  for (let i = 0; i < seed.length; i++) h = Math.imul(h ^ seed.charCodeAt(i), 2246822519);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967296;
}

function pickDailyMissions(): Mission[] {
  const seed = getDailySeed();
  return MISSION_POOLS.map((pool, i) => ({ ...pool[Math.floor(seededRandom(seed, i) * pool.length)] }));
}

interface MissionProgress {
  clicksAtStart: number;       // store.totalClicks au moment du chargement
  bitsAtStart: number;         // store.totalBitsEarned au moment du chargement
  clicksDone: number;          // clics depuis le début de la session du jour
  bitsEarnedDone: number;      // bits gagnés depuis le début de la session du jour
  claimed: string[];
  lastSeed: string;
}

const SAVE_KEY = 'bs_missions_v1';

function loadProgress(clicksNow: number, bitsNow: number): MissionProgress {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (raw) {
      const p = JSON.parse(raw) as MissionProgress;
      if (p.lastSeed === getDailySeed()) {
        // Reprendre la session du jour : ancrer les compteurs sur la valeur actuelle du store
        p.clicksAtStart = clicksNow;
        p.bitsAtStart = bitsNow;
        return p;
      }
    }
  } catch {}
  return {
    clicksAtStart: clicksNow,
    bitsAtStart: bitsNow,
    clicksDone: 0,
    bitsEarnedDone: 0,
    claimed: [],
    lastSeed: getDailySeed(),
  };
}

function saveProgress(p: MissionProgress): void {
  localStorage.setItem(SAVE_KEY, JSON.stringify(p));
}

export function mountMissions(container: HTMLElement): () => void {
  const missions = pickDailyMissions();
  const initState = store.getState();
  let progress = loadProgress(initState.totalClicks, initState.totalBitsEarned);

  function getProgress(m: Mission): number {
    const state = store.getState();
    switch (m.type) {
      case 'clicks':
        return progress.clicksDone + (state.totalClicks - progress.clicksAtStart);
      case 'bits_earned':
        return progress.bitsEarnedDone + (state.totalBitsEarned - progress.bitsAtStart);
      case 'generators':
        return state.generators.reduce((s, g) => s + g.owned, 0);
    }
  }

  function claimMission(id: string): void {
    if (progress.claimed.includes(id)) return;
    const m = missions.find(ms => ms.id === id);
    if (!m || getProgress(m) < m.target) return;

    // Snapshot progress avant de réclamer pour que les compteurs ne repartent pas de zéro
    const state = store.getState();
    progress.clicksDone += state.totalClicks - progress.clicksAtStart;
    progress.bitsEarnedDone += state.totalBitsEarned - progress.bitsAtStart;
    progress.clicksAtStart = state.totalClicks;
    progress.bitsAtStart = state.totalBitsEarned;

    progress.claimed.push(id);
    store.addBits(m.reward);
    saveProgress(progress);
    renderProgress();
  }

  function renderProgress(): void {
    const list = container.querySelector<HTMLElement>('.missions-list');
    if (!list) return;
    list.innerHTML = missions.map(m => {
      const prog = Math.min(getProgress(m), m.target);
      const pct = (prog / m.target) * 100;
      const done = prog >= m.target;
      const claimed = progress.claimed.includes(m.id);
      return `
        <div class="mission-card${claimed ? ' mission-card--claimed' : done ? ' mission-card--done' : ''}">
          <div class="mission-card__header">
            <span class="mission-card__label">${m.label}</span>
            <span class="mission-card__reward mono">+${formatNumber(m.reward)}</span>
          </div>
          <div class="mission-card__desc">${m.description}</div>
          <div class="mission-progress">
            <div class="mission-progress__bar">
              <div class="mission-progress__fill" style="width:${pct.toFixed(1)}%"></div>
            </div>
            <span class="mission-progress__text mono">${formatNumber(prog)} / ${formatNumber(m.target)}</span>
          </div>
          ${claimed
            ? '<div class="mission-claimed">✓ Réclamé</div>'
            : done
              ? `<button class="mission-claim-btn" data-id="${m.id}">Réclamer</button>`
              : ''}
        </div>
      `;
    }).join('');

    list.querySelectorAll<HTMLButtonElement>('.mission-claim-btn').forEach(btn => {
      btn.addEventListener('click', () => claimMission(btn.dataset.id!));
    });
  }

  function getResetLabel(): string {
    const now = new Date();
    const reset = new Date(now);
    reset.setHours(24, 0, 0, 0); // prochaine minuit
    const diff = reset.getTime() - now.getTime();
    const h = Math.floor(diff / 3_600_000);
    const m = Math.floor((diff % 3_600_000) / 60_000);
    const hh = String(h).padStart(2, '0');
    const mm = String(m).padStart(2, '0');
    return `Reset dans ${hh}h${mm}`;
  }

  container.innerHTML = `
    <div class="missions-panel">
      <div class="missions-header">
        <h2 class="panel-title" style="margin:0">Missions du jour</h2>
        <span class="missions-reset" id="missions-reset">${getResetLabel()}</span>
      </div>
      <div class="missions-list"></div>
    </div>
  `;

  // Update reset countdown every minute
  const resetInterval = window.setInterval(() => {
    const el = container.querySelector<HTMLElement>('#missions-reset');
    if (el) el.textContent = getResetLabel();
  }, 60_000);

  renderProgress();

  // Sauvegarder et rafraichir périodiquement (pas chaque frame RAF)
  let renderTimer = 0;
  const unsub = store.subscribe(() => {
    clearTimeout(renderTimer);
    renderTimer = window.setTimeout(() => {
      saveProgress(progress);
      renderProgress();
    }, 500);
  });

  return () => {
    unsub();
    clearTimeout(renderTimer);
    clearInterval(resetInterval);
  };
}
