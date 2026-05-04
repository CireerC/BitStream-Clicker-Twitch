import { BALANCE, generatorCost } from './balance.js';
import type { GameState, ProjectState, MultiplierState } from '../store/types.js';

type Listener = () => void;

function defaultState(): GameState {
  return {
    bits: 0,
    totalBitsEarned: 0,
    clicker: { comboCount: 0, comboMultiplier: 1, lastClickTime: 0 },
    generators: BALANCE.generators.map(g => ({ id: g.id, owned: 0 })),
    projects: BALANCE.projects.map(p => ({ id: p.id, purchased: false })),
    multipliers: {
      click: 1, passive: 1, global: 1, twitch: 1,
      minigame: 1, minigameEndsAt: 0, research: 1,
    } satisfies MultiplierState,
    research: { points: 0, techPurchased: [] },
    twitch: { isLive: false, streamTitle: '', gameName: '', lastChecked: 0, channelName: '' },
    lastPhase: 1,
    lastSaveTime: Date.now(),
    lastTickTime: Date.now(),
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

  spendBits(amount: number): boolean {
    if (this.state.bits < amount) return false;
    this.state.bits -= amount;
    this.notify();
    return true;
  }

  // ── Research ──────────────────────────────────────────────────────────────

  /**
   * Research rate: sqrt(effectiveBPS + 1) / rpsDiv × research multiplier
   * Grows with BPS but sub-linearly — always meaningful, never trivial.
   */
  getResearchPS(): number {
    const rawBps = this.getRawBPS();
    return (Math.sqrt(rawBps + 1) / BALANCE.research.rpsDiv) * this.state.multipliers.research;
  }

  addResearchPoints(rp: number): void {
    this.state.research.points += rp;
    // No notify here — called every frame, notification handled by GameLoop batching
  }

  isTechPurchased(id: string): boolean {
    return this.state.research.techPurchased.includes(id);
  }

  isTechAvailable(id: string): boolean {
    const tech = BALANCE.research.technologies.find(t => t.id === id);
    if (!tech || this.isTechPurchased(id)) return false;
    if (this.getCurrentPhase() < tech.phase) return false;
    for (const req of tech.requires) {
      if (!this.isTechPurchased(req)) return false;
    }
    return true;
  }

  purchaseTech(techId: string): boolean {
    const tech = BALANCE.research.technologies.find(t => t.id === techId);
    if (!tech || !this.isTechAvailable(techId)) return false;
    if (this.state.research.points < tech.rpCost) return false;

    this.setState(s => {
      s.research.points -= tech.rpCost;
      s.research.techPurchased.push(techId);
      this.recomputeMultipliers(s);
    });
    return true;
  }

  // ── Computed tech effects ──────────────────────────────────────────────────

  /** Max combo multiplier (raised by combo_protocol tech) */
  getMaxCombo(): number {
    const tech = BALANCE.research.technologies.find(t => t.id === 'combo_protocol');
    if (tech && this.isTechPurchased('combo_protocol')) {
      return (tech.effect as any).maxCombo ?? BALANCE.clicker.maxComboMultiplier;
    }
    return BALANCE.clicker.maxComboMultiplier;
  }

  /** Offline cap in ms (extended by deep_cache tech) */
  getOfflineCapMs(): number {
    const tech = BALANCE.research.technologies.find(t => t.id === 'deep_cache');
    if (tech && this.isTechPurchased('deep_cache')) {
      return ((tech.effect as any).offlineCapHours ?? 8) * 3_600_000;
    }
    return BALANCE.offline.maxOfflineMs;
  }

  /** Mini-game reward multiplier (boosted by exploit_amplifier tech) */
  getMinigameRewardMult(): number {
    const tech = BALANCE.research.technologies.find(t => t.id === 'exploit_amplifier');
    if (tech && this.isTechPurchased('exploit_amplifier')) {
      return (tech.effect as any).minigameRewardMult ?? 1;
    }
    return 1;
  }

  // ── Multipliers ───────────────────────────────────────────────────────────

  isMinigameActive(): boolean {
    return Date.now() < this.state.multipliers.minigameEndsAt;
  }

  getPassiveMultiplier(): number {
    const m = this.state.multipliers;
    return m.passive * m.global * m.twitch * (this.isMinigameActive() ? m.minigame : 1);
  }

  getClickMultiplier(): number {
    const m = this.state.multipliers;
    return (
      m.click * m.global * m.twitch *
      (this.isMinigameActive() ? m.minigame : 1) *
      this.state.clicker.comboMultiplier
    );
  }

  getRawBPS(): number {
    let raw = 0;
    for (const gen of BALANCE.generators) {
      const s = this.state.generators.find(g => g.id === gen.id);
      if (s) raw += s.owned * gen.baseBps;
    }
    return raw;
  }

  getEffectiveBPS(): number {
    return this.getRawBPS() * this.getPassiveMultiplier();
  }

  getEffectiveBPC(): number {
    return BALANCE.clicker.baseBitsPerClick * this.getClickMultiplier();
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
    // Check prerequisites
    for (const req of def.requires) {
      if (!this.state.projects.find(p => p.id === req)?.purchased) return false;
    }

    this.setState(s => {
      s.bits -= def.cost;
      s.projects.find(p => p.id === projectId)!.purchased = true;
    });
    return true;
  }

  /**
   * Recomputes click/passive/global/research multipliers from scratch.
   * NOTE: Projects unlock gameplay features but don't provide multipliers.
   * Only research technologies contribute to multiplier effects.
   */
  recomputeMultipliers(s: GameState): void {
    let click = 1, passive = 1, global = 1, research = 1;

    // Research technologies (only source of multipliers now)
    for (const tech of BALANCE.research.technologies) {
      if (!s.research.techPurchased.includes(tech.id)) continue;
      const e = tech.effect as Record<string, number>;
      if (e.clickMultiplier)    click    *= e.clickMultiplier;
      if (e.passiveMultiplier)  passive  *= e.passiveMultiplier;
      if (e.globalMultiplier)   global   *= e.globalMultiplier;
      if (e.researchMultiplier) research *= e.researchMultiplier;
    }

    s.multipliers.click    = click;
    s.multipliers.passive  = passive;
    s.multipliers.global   = global;
    s.multipliers.research = research;
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

  // ── Save / Load ───────────────────────────────────────────────────────────

  loadState(saved: Partial<GameState>): void {
    const fresh = defaultState();
    this.state = {
      ...fresh,
      ...saved,
      generators: fresh.generators.map(def => saved.generators?.find(g => g.id === def.id) ?? def),
      projects:   fresh.projects.map(def => saved.projects?.find(p => p.id === def.id) ?? def),
      multipliers: { ...fresh.multipliers, ...(saved.multipliers ?? {}) },
      research:   { ...fresh.research, ...(saved.research ?? {}) },
      twitch:     { ...fresh.twitch, ...(saved.twitch ?? {}) },
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
