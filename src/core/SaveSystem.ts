import { store } from './GameStore.js';
import { BALANCE } from './balance.js';
import type { GameState } from '../store/types.js';

const SAVE_KEY = 'bitstream_v1';

export interface OfflineReport {
  bitsEarned: number;
  seconds: number;
}

let _offlineReport: OfflineReport | null = null;

export function getOfflineReport(): OfflineReport | null {
  const r = _offlineReport;
  _offlineReport = null;
  return r;
}

export function saveGame(): void {
  const snap: GameState = { ...store.getState(), lastSaveTime: Date.now() };
  localStorage.setItem(SAVE_KEY, JSON.stringify(snap));
}

export function loadGame(): boolean {
  const raw = localStorage.getItem(SAVE_KEY);
  if (!raw) return false;

  try {
    const saved = JSON.parse(raw) as Partial<GameState>;

    if (saved.lastSaveTime) {
      const offlineCapMs = BALANCE.offline.maxOfflineMs;
      const offlineMs = Math.min(Date.now() - saved.lastSaveTime, offlineCapMs);

      if (offlineMs > 5_000) {
        let rawBps = 0;
        for (const gen of BALANCE.generators) {
          const gs = saved.generators?.find(g => g.id === gen.id);
          if (gs) rawBps += gs.owned * gen.baseBps;
        }
        const m = saved.multipliers as Record<string, number> | undefined;
        const bpsBonus    = m?.bpsBonus    ?? 0;
        const globalBonus = m?.globalBonus ?? 0;
        const bps = rawBps * (1 + bpsBonus + globalBonus);
        const earned = bps * (offlineMs / 1000) * BALANCE.offline.efficiency;

        saved.bits = (saved.bits ?? 0) + earned;
        saved.totalBitsEarned = (saved.totalBitsEarned ?? 0) + earned;
        _offlineReport = { bitsEarned: earned, seconds: offlineMs / 1000 };
      }
    }

    saved.lastTickTime = Date.now();
    store.loadState(saved);
    return true;
  } catch {
    return false;
  }
}

export function deleteSave(): void {
  localStorage.removeItem(SAVE_KEY);
  store.resetState();
}

export function startAutoSave(): void {
  setInterval(saveGame, BALANCE.save.intervalMs);
  window.addEventListener('beforeunload', saveGame);
}
