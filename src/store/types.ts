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
  click: number;
  passive: number;
  global: number;
  twitch: number;
  minigame: number;
  minigameEndsAt: number;
  research: number;          // research rate multiplier (from techs)
}

export interface ResearchState {
  points: number;            // current RP
  techPurchased: string[];   // IDs of purchased technologies
}

export interface GameState {
  bits: number;
  totalBitsEarned: number;
  clicker: ClickerState;
  generators: GeneratorState[];
  projects: ProjectState[];
  multipliers: MultiplierState;
  research: ResearchState;
  twitch: TwitchState;
  lastPhase: number;         // highest phase reached (for notifications)
  lastSaveTime: number;
  lastTickTime: number;
}
