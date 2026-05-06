import { store } from '../../core/GameStore.js';
import { formatNumber } from '../../core/balance.js';
import { isSupabaseConfigured, fetchLeaderboard, upsertScore, type LBEntry } from '../../integrations/supabase/LeaderboardDB.js';

export const NAME_KEY  = 'bs_player_name';
const BEST_KEY  = 'bs_player_best';
const POLL_MS   = 2 * 60 * 1000;   // refresh leaderboard every 2 min
const SUBMIT_MS = 5 * 60 * 1000;   // push score every 5 min

// ── Fallback bot data (used when Supabase is not configured) ──────────────
const BOT_NAMES = [
  'xX_BitL0rd_Xx', 'Neuron_42', 'QuantumLeak', 'CryptoVoid',
  'NullByte', 'SilentMiner', 'ByteHunter', 'DataPhantom',
  'GridRunner', 'CodeShadow',
];

function hashNum(seed: string, idx: number): number {
  let h = idx * 1_234_567_891;
  for (let i = 0; i < seed.length; i++) h = Math.imul(h ^ seed.charCodeAt(i), 2_246_822_519) >>> 0;
  return h;
}

function botEntries(playerBest: number): LBEntry[] {
  return BOT_NAMES.map(name => {
    const h = hashNum(name, name.length);
    const v = 0.3 + (h % 100) / 100 * 1.4;
    return { name, score: Math.floor(Math.max(playerBest * v, 100)) };
  });
}

// ── Helpers ───────────────────────────────────────────────────────────────
export function getPlayerName(): string {
  return localStorage.getItem(NAME_KEY) ?? '';
}

export function savePlayerName(name: string): void {
  localStorage.setItem(NAME_KEY, name);
}

function getPlayerBest(): number {
  try { return JSON.parse(localStorage.getItem(BEST_KEY) ?? '0') as number; } catch { return 0; }
}

function savePlayerBest(score: number): void {
  if (score > getPlayerBest()) localStorage.setItem(BEST_KEY, JSON.stringify(score));
}

// ── Module ────────────────────────────────────────────────────────────────
export function mountLeaderboard(container: HTMLElement): () => void {
  const online = isSupabaseConfigured();
  let entries: LBEntry[] = [];
  let playerBest = getPlayerBest();
  let lastSubmit = 0;
  let pollTimer  = 0;
  let submitTimer = 0;

  container.innerHTML = `
    <div class="lb-panel">
      <h2 class="panel-title">🏆 Classement</h2>
      <div class="lb-status" id="lb-status">${online ? '🌐 En ligne' : '🤖 Local (bots)'}</div>
      <div class="lb-rank-row">Votre rang : <span class="mono" id="lb-your-rank">#?</span></div>
      <div class="lb-list" id="lb-list">
        <div class="lb-loading">Chargement…</div>
      </div>
    </div>
  `;

  const listEl     = container.querySelector<HTMLElement>('#lb-list')!;
  const rankEl     = container.querySelector<HTMLElement>('#lb-your-rank')!;

  function renderEntries(): void {
    const playerName = getPlayerName();
    const current = store.getState().totalBitsEarned;
    playerBest = Math.max(playerBest, current);
    savePlayerBest(playerBest);

    let all: LBEntry[];
    if (online) {
      // Merge player into real entries (upsert locally for immediate feedback)
      const withoutMe = entries.filter(e => e.name !== playerName);
      const me: LBEntry = { name: playerName, score: playerBest };
      all = [...withoutMe, me].sort((a, b) => b.score - a.score).slice(0, 20);
    } else {
      const me: LBEntry = { name: playerName || 'Vous', score: playerBest };
      all = [...botEntries(playerBest), me].sort((a, b) => b.score - a.score);
    }

    const playerRank = all.findIndex(e => e.name === (playerName || 'Vous')) + 1;
    rankEl.textContent = `#${playerRank}`;

    listEl.innerHTML = all.map((e, i) => {
      const isMe = e.name === (playerName || 'Vous');
      return `
        <div class="lb-row ${isMe ? 'lb-row--you' : ''}">
          <span class="lb-rank mono">#${i + 1}</span>
          <span class="lb-name">${e.name}${isMe ? ' <span class="lb-you">(Vous)</span>' : ''}</span>
          <span class="lb-score mono">${formatNumber(e.score)}</span>
        </div>
      `;
    }).join('');
  }

  async function loadFromServer(): Promise<void> {
    if (!online) { renderEntries(); return; }
    try {
      entries = await fetchLeaderboard();
    } catch {
      // silent — keep previous entries
    }
    renderEntries();
  }

  let lastSubmittedScore = 0;

  async function maybePushScore(force = false): Promise<void> {
    if (!online) return;
    const playerName = getPlayerName();
    if (!playerName) return;
    const current = store.getState().totalBitsEarned;
    playerBest = Math.max(playerBest, current);
    if (playerBest <= 0) return;

    const now = Date.now();
    const significantIncrease = playerBest > lastSubmittedScore * 1.05 || playerBest > lastSubmittedScore + 10_000;
    if (!force && now - lastSubmit < SUBMIT_MS && !significantIncrease) return;

    lastSubmit = now;
    lastSubmittedScore = playerBest;
    try { await upsertScore(playerName, playerBest); } catch { /* silent */ }
  }

  // Initial load + immediate score push
  void loadFromServer();
  setTimeout(() => void maybePushScore(true), 3000);

  // Periodic refresh + score submission
  pollTimer   = window.setInterval(() => { void loadFromServer(); }, POLL_MS);
  submitTimer = window.setInterval(() => { void maybePushScore(); }, SUBMIT_MS);

  // Also re-render when store changes (live rank update)
  const unsub = store.subscribe(renderEntries);

  return () => {
    clearInterval(pollTimer);
    clearInterval(submitTimer);
    unsub();
  };
}
