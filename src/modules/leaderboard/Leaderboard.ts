import { store } from '../../core/GameStore.js';
import { formatNumber } from '../../core/balance.js';

interface LeaderEntry {
  name: string;
  score: number;
  isPlayer: boolean;
}

const SAVE_KEY = 'bs_leaderboard_v1';
const NAME_KEY = 'bs_player_name';

// Deterministic bot names + scores from a hash seed
const BOT_NAMES = [
  'xX_BitL0rd_Xx', 'Neuron_42', 'QuantumLeak', 'CryptoVoid',
  'NullByte', 'SilentMiner', 'ByteHunter', 'DataPhantom',
  'GridRunner', 'CodeShadow', 'PacketWolf', 'NanoScript',
];

function hashNum(seed: string, idx: number): number {
  let h = idx * 1234567891;
  for (let i = 0; i < seed.length; i++) h = Math.imul(h ^ seed.charCodeAt(i), 2246822519) >>> 0;
  return h;
}

function getBotScore(name: string, playerBest: number): number {
  const h = hashNum(name, name.length);
  const variance = 0.3 + (h % 100) / 100 * 1.4; // 0.3× to 1.7× of player score
  const base = Math.max(playerBest * variance, 100);
  return Math.floor(base);
}

function getPlayerName(): string {
  return localStorage.getItem(NAME_KEY) || 'Vous';
}

function savePlayerName(name: string): void {
  localStorage.setItem(NAME_KEY, name);
}

function getPlayerBest(): number {
  const raw = localStorage.getItem(SAVE_KEY);
  try { if (raw) return JSON.parse(raw) as number; } catch {}
  return 0;
}

function savePlayerBest(score: number): void {
  const prev = getPlayerBest();
  if (score > prev) localStorage.setItem(SAVE_KEY, JSON.stringify(score));
}

export function mountLeaderboard(container: HTMLElement): () => void {
  let playerName = getPlayerName();
  let playerBest = getPlayerBest();
  let editing = false;

  function buildEntries(): LeaderEntry[] {
    const current = store.getState().totalBitsEarned;
    playerBest = Math.max(playerBest, current);
    savePlayerBest(playerBest);

    const bots: LeaderEntry[] = BOT_NAMES.slice(0, 9).map(name => ({
      name,
      score: getBotScore(name, Math.max(playerBest, 100)),
      isPlayer: false,
    }));

    const player: LeaderEntry = { name: playerName, score: playerBest, isPlayer: true };
    return [...bots, player].sort((a, b) => b.score - a.score);
  }

  function render(): void {
    const entries = buildEntries();
    const playerRank = entries.findIndex(e => e.isPlayer) + 1;

    const listEl = container.querySelector<HTMLElement>('.lb-list');
    if (!listEl) return;

    listEl.innerHTML = entries.map((e, i) => `
      <div class="lb-row ${e.isPlayer ? 'lb-row--you' : ''}">
        <span class="lb-rank mono">#${i + 1}</span>
        <span class="lb-name">${e.name}${e.isPlayer ? ' <span class="lb-you">(Vous)</span>' : ''}</span>
        <span class="lb-score mono">${formatNumber(e.score)}</span>
      </div>
    `).join('');

    const rankEl = container.querySelector<HTMLElement>('#lb-your-rank');
    if (rankEl) rankEl.textContent = `#${playerRank}`;
  }

  container.innerHTML = `
    <div class="lb-panel">
      <h2 class="panel-title">Classement</h2>
      <div class="lb-header">
        <div class="lb-name-row">
          <span class="lb-name-label">Votre nom :</span>
          <span id="lb-name-display" class="lb-name-val">${playerName}</span>
          <button class="lb-edit-btn" id="lb-edit">✏</button>
        </div>
        <div class="lb-rank-row">Votre rang : <span class="mono" id="lb-your-rank">#?</span></div>
      </div>
      <div class="lb-name-edit" id="lb-name-edit" style="display:none">
        <input class="lb-input" id="lb-name-input" type="text" maxlength="18" placeholder="Votre pseudo" value="${playerName}">
        <button class="lb-save-btn" id="lb-name-save">OK</button>
      </div>
      <div class="lb-list"></div>
    </div>
  `;

  const editBtn = container.querySelector<HTMLButtonElement>('#lb-edit')!;
  const nameDisplay = container.querySelector<HTMLElement>('#lb-name-display')!;
  const nameEditRow = container.querySelector<HTMLElement>('#lb-name-edit')!;
  const nameInput = container.querySelector<HTMLInputElement>('#lb-name-input')!;
  const saveBtn = container.querySelector<HTMLButtonElement>('#lb-name-save')!;

  editBtn.addEventListener('click', () => {
    editing = !editing;
    nameEditRow.style.display = editing ? 'flex' : 'none';
    if (editing) nameInput.focus();
  });

  saveBtn.addEventListener('click', () => {
    const val = nameInput.value.trim();
    if (val) {
      playerName = val;
      savePlayerName(val);
      nameDisplay.textContent = val;
    }
    editing = false;
    nameEditRow.style.display = 'none';
    render();
  });

  render();
  const unsub = store.subscribe(render);

  return () => unsub();
}
