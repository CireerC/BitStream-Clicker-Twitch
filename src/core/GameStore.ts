import { BALANCE, generatorCost, getMilestoneMultiplier } from './balance.js';
import type { GameState, MultiplierState } from '../store/types.js';

type Listener = () => void;

function defaultState(): GameState {
  return {
    bits: 0,
    totalBitsEarned: 0,
    totalClicks: 0,
    clicker: { comboCount: 0, comboMultiplier: 1, lastClickTime: 0 },
    generators: BALANCE.generators.map(g => ({ id: g.id, owned: 0 })),
    projects:   BALANCE.projects.map(p => ({ id: p.id, purchased: false })),
    multipliers: {
      bpsBonus: 0, clickBonus: 0, globalBonus: 0, moduleBonus: 0,
      maxComboOverride: 0,
      twitch: 1, minigame: 1, minigameEndsAt: 0,
    } satisfies MultiplierState,
    twitch: { isLive: false, streamTitle: '', gameName: '', lastChecked: 0, channelName: '' },
    lastPhase: 1,
    lastSaveTime: Date.now(),
    lastTickTime: Date.now(),
    language: 'fr',
  };
}

class GameStore {
  private state: GameState = defaultState();
  private listeners = new Set<Listener>();

  getState(): Readonly<GameState> { return this.state; }

  subscribe(listener: Listener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify(): void { this.listeners.forEach(l => l()); }

  setState(updater: (s: GameState) => void): void {
    updater(this.state);
    this.notify();
  }

  // ── Currency ─────────────────────────────────────────────────────────────

  addBits(raw: number): void {
    this.state.bits += raw;
    this.state.totalBitsEarned += raw;
    this.notify();
  }

  incrementClicks(): void {
    this.state.totalClicks += 1;
    // No notify — Clicker already calls addBits which notifies
  }

  spendBits(amount: number): boolean {
    if (this.state.bits < amount) return false;
    this.state.bits -= amount;
    this.notify();
    return true;
  }

  // ── Multipliers ───────────────────────────────────────────────────────────

  isMinigameActive(): boolean {
    return Date.now() < this.state.multipliers.minigameEndsAt;
  }

  /**
   * Effective multiplier applied to passive BPS.
   * Formula: (1 + bpsBonus + globalBonus) × twitch × (minigame if burst active)
   */
  getPassiveMultiplier(): number {
    const m = this.state.multipliers;
    const base = 1 + m.bpsBonus + m.globalBonus;
    return base * m.twitch * (this.isMinigameActive() ? m.minigame : 1);
  }

  /**
   * Effective multiplier applied to BPC.
   * Formula: (1 + clickBonus + globalBonus) × combo × twitch × (minigame if burst)
   */
  getClickMultiplier(): number {
    const m = this.state.multipliers;
    const base = 1 + m.clickBonus + m.globalBonus;
    return base * this.state.clicker.comboMultiplier * m.twitch * (this.isMinigameActive() ? m.minigame : 1);
  }

  /**
   * Multiplier applied to casino / aim trainer payouts.
   * Formula: 1 + moduleBonus + globalBonus
   * (global bonus applies to everything, including modules)
   */
  getModuleMultiplier(): number {
    const m = this.state.multipliers;
    return 1 + m.moduleBonus + m.globalBonus;
  }

  getRawBPS(): number {
    let raw = 0;
    for (const gen of BALANCE.generators) {
      const s = this.state.generators.find(g => g.id === gen.id);
      if (s && s.owned > 0) {
        const milestoneMult = getMilestoneMultiplier(gen.milestones, s.owned);
        raw += s.owned * gen.baseBps * milestoneMult;
      }
    }
    return raw;
  }

  getEffectiveBPS(): number {
    return this.getRawBPS() * this.getPassiveMultiplier();
  }

  getEffectiveBPC(): number {
    return BALANCE.clicker.baseBitsPerClick * this.getClickMultiplier();
  }

  /** Max combo multiplier — overridden by combo_amplifie project. */
  getMaxCombo(): number {
    const override = this.state.multipliers.maxComboOverride;
    return override > 0 ? override : BALANCE.clicker.maxComboMultiplier;
  }

  /** Offline cap in ms. */
  getOfflineCapMs(): number {
    return BALANCE.offline.maxOfflineMs;
  }

  // ── Phases ────────────────────────────────────────────────────────────────

  getCurrentPhase(): number {
    const total = this.state.totalBitsEarned;
    let phase = 1;
    for (const p of BALANCE.phases) {
      if (total >= p.threshold) phase = p.id;
    }
    return phase;
  }

  // ── Generators ────────────────────────────────────────────────────────────

  getCost(genId: string): number {
    const def = BALANCE.generators.find(g => g.id === genId);
    const s = this.state.generators.find(g => g.id === genId);
    if (!def || !s) return Infinity;
    return generatorCost(def.baseCost, def.growthRate, s.owned);
  }

  buyGenerator(genId: string): boolean {
    const cost = this.getCost(genId);
    if (this.state.bits < cost) return false;
    this.setState(s => {
      s.bits -= cost;
      s.generators.find(g => g.id === genId)!.owned += 1;
    });
    return true;
  }

  // ── Projects ──────────────────────────────────────────────────────────────

  purchaseProject(projectId: string): boolean {
    const def = BALANCE.projects.find(p => p.id === projectId);
    const ps = this.state.projects.find(p => p.id === projectId);
    if (!def || !ps || ps.purchased) return false;
    if (this.state.bits < def.cost) return false;
    if (this.state.totalBitsEarned < def.unlockAt) return false;
    if (this.getCurrentPhase() < def.phase) return false;
    for (const req of def.requires) {
      if (!this.state.projects.find(p => p.id === req)?.purchased) return false;
    }

    this.setState(s => {
      s.bits -= def.cost;
      s.projects.find(p => p.id === projectId)!.purchased = true;
      this.recomputeMultipliers(s);
    });
    return true;
  }

  /**
   * Recomputes all project-derived bonuses from scratch (additive system).
   * Each project's effect fields are accumulated into the multiplier state.
   * Only projects are sources — no hidden research system.
   */
  recomputeMultipliers(s: GameState): void {
    let bpsBonus = 0;
    let clickBonus = 0;
    let globalBonus = 0;
    let moduleBonus = 0;
    let maxComboOverride = 0;

    for (const proj of BALANCE.projects) {
      if (!s.projects.find(p => p.id === proj.id)?.purchased) continue;
      const e = proj.effect as Record<string, unknown>;
      if (typeof e.bpsBonus    === 'number') bpsBonus    += e.bpsBonus;
      if (typeof e.clickBonus  === 'number') clickBonus  += e.clickBonus;
      if (typeof e.globalBonus === 'number') globalBonus += e.globalBonus;
      if (typeof e.moduleBonus === 'number') moduleBonus += e.moduleBonus;
      if (typeof e.maxCombo    === 'number') maxComboOverride = Math.max(maxComboOverride, e.maxCombo);
    }

    s.multipliers.bpsBonus          = bpsBonus;
    s.multipliers.clickBonus        = clickBonus;
    s.multipliers.globalBonus       = globalBonus;
    s.multipliers.moduleBonus       = moduleBonus;
    s.multipliers.maxComboOverride  = maxComboOverride;
  }

  // ── Twitch ────────────────────────────────────────────────────────────────

  setTwitchLive(isLive: boolean, info: { title: string; game: string }): void {
    this.setState(s => {
      s.twitch.isLive = isLive;
      s.twitch.streamTitle = info.title;
      s.twitch.gameName = info.game;
      s.twitch.lastChecked = Date.now();
      s.multipliers.twitch = isLive ? BALANCE.twitch.liveMultiplier : 1;
    });
  }

  // ── Language ──────────────────────────────────────────────────────────────

  setLanguage(lang: 'en' | 'fr'): void {
    this.setState(s => { s.language = lang; });
  }

  getLanguage(): 'en' | 'fr' {
    return this.state.language;
  }

  // ── Save / Load ───────────────────────────────────────────────────────────

  loadState(saved: Partial<GameState> & Record<string, unknown>): void {
    const fresh = defaultState();
    this.state = {
      bits:             typeof saved.bits === 'number'             ? saved.bits             : fresh.bits,
      totalBitsEarned:  typeof saved.totalBitsEarned === 'number'  ? saved.totalBitsEarned  : fresh.totalBitsEarned,
      totalClicks:      typeof saved.totalClicks === 'number'      ? saved.totalClicks      : fresh.totalClicks,
      clicker:          { ...fresh.clicker,      ...(saved.clicker      ?? {}) } as GameState['clicker'],
      generators:       fresh.generators.map(def =>
        (saved.generators as GameState['generators'] | undefined)?.find(g => g.id === def.id) ?? def
      ),
      projects:         fresh.projects.map(def =>
        (saved.projects as GameState['projects'] | undefined)?.find(p => p.id === def.id) ?? def
      ),
      multipliers:      { ...fresh.multipliers, ...(saved.multipliers ?? {}) } as MultiplierState,
      twitch:           { ...fresh.twitch,       ...(saved.twitch       ?? {}) } as GameState['twitch'],
      lastPhase:        typeof saved.lastPhase === 'number'        ? saved.lastPhase        : fresh.lastPhase,
      lastSaveTime:     typeof saved.lastSaveTime === 'number'     ? saved.lastSaveTime     : fresh.lastSaveTime,
      lastTickTime:     typeof saved.lastTickTime === 'number'     ? saved.lastTickTime     : fresh.lastTickTime,
      language:         (saved.language === 'en' || saved.language === 'fr') ? saved.language : fresh.language,
    };
    this.recomputeMultipliers(this.state);
    if (this.state.twitch.isLive) this.state.multipliers.twitch = BALANCE.twitch.liveMultiplier;
    this.notify();
  }

  resetState(): void {
    this.state = defaultState();
    this.notify();
  }
}

export const store = new GameStore();
