export interface GeneratorState {
  id: string;
  owned: number;
}

export interface ProjectState {
  id: string;
  purchased: boolean;
}

export interface ClickerState {
  comboCount: number;
  comboMultiplier: number;
  lastClickTime: number;
}

export interface TwitchState {
  isLive: boolean;
  streamTitle: string;
  gameName: string;
  lastChecked: number;
  channelName: string;
}

export interface MultiplierState {
  // ── Additive bonuses from projects (0.0 = no bonus, 1.0 = +100%) ──────────
  bpsBonus: number;           // added to passive production multiplier
  clickBonus: number;         // added to BPC multiplier
  globalBonus: number;        // added to all gains (BPS, BPC, modules)
  moduleBonus: number;        // added to casino / aim trainer payout multiplier
  maxComboOverride: number;   // 0 = use BALANCE default, positive = override

  // ── Independent multiplicative factors (not from projects) ────────────────
  twitch: number;             // 1.5 when stream is live, 1 otherwise
  minigame: number;           // active burst multiplier value (e.g. 4)
  minigameEndsAt: number;     // Unix timestamp (ms) when burst expires
}

export interface GameState {
  bits: number;
  totalBitsEarned: number;
  totalClicks: number;
  clicker: ClickerState;
  generators: GeneratorState[];
  projects: ProjectState[];
  multipliers: MultiplierState;
  twitch: TwitchState;
  lastPhase: number;
  lastSaveTime: number;
  lastTickTime: number;
  language: 'en' | 'fr';
}
