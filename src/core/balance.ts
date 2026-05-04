/**
 * BALANCE CONFIGURATION — Central source of truth for all game math.
 *
 * Mathematical foundation:
 *   "The Math of Idle Games" by Anthony Pecorella (Game Developer, 2012)
 *   https://www.gamedeveloper.com/design/the-math-of-idle-games-part-i
 *
 * Core cost formula:  cost(n) = baseCost × growthRate^n
 * Bulk purchase (geometric series):
 *   cost(owned→owned+k) = baseCost × growthRate^owned × (growthRate^k − 1) / (growthRate − 1)
 *
 * ROI balance target:
 *   roi(n) = cost(n) / effectiveBPS
 *   Each generator tier targets roi ≈ 2× the previous tier, keeping every tier
 *   relevant for roughly twice as long before the next one dominates.
 *
 * Game arc: ~15–20 h of active play across 5 phases.
 *   Phase 1 exit:  10K total bits   (~1–2 h)
 *   Phase 2 exit: 300K total bits   (~3–5 h)
 *   Phase 3 exit:   5M total bits   (~6–9 h)
 *   Phase 4 exit: 100M total bits   (~10–14 h)
 *   Endgame: triggered by final research tech (Launch the Protocol)
 */

export const BALANCE = {
  // ─── CLICKER ──────────────────────────────────────────────────────────────
  clicker: {
    baseBitsPerClick: 1,
    comboWindowMs: 500,       // clicks within this gap count toward combo
    maxComboMultiplier: 8,    // raised to 12 by Combo Protocol research
    clicksToMaxCombo: 20,
    comboDecayMs: 1200,
  },

  // ─── GENERATORS ───────────────────────────────────────────────────────────
  // growthRate = 1.15 → ~15% more expensive per purchase, doubling every ~5 units.
  // Each new tier has baseBps / baseCost ≈ tier-1 value, keeping ROI consistent.
  generators: [
    // ── Phase 1 (always available) ──────────────────────────────────────
    {
      id: 'bit_miner',
      name: 'Bit Miner',
      description: 'A basic script that mines bits slowly.',
      emoji: '⛏️',
      baseCost: 15,
      growthRate: 1.15,
      baseBps: 0.1,
      unlockAt: 0,
    },
    {
      id: 'packet_router',
      name: 'Packet Router',
      description: 'Routes network packets for profit.',
      emoji: '📡',
      baseCost: 100,
      growthRate: 1.15,
      baseBps: 0.5,
      unlockAt: 50,
    },
    {
      id: 'data_farm',
      name: 'Data Farm',
      description: 'A small farm of data-generating bots.',
      emoji: '🌾',
      baseCost: 500,
      growthRate: 1.15,
      baseBps: 3,
      unlockAt: 300,
    },
    {
      id: 'neural_net',
      name: 'Neural Net',
      description: 'Self-optimising bit generation network.',
      emoji: '🧠',
      baseCost: 3_000,
      growthRate: 1.15,
      baseBps: 20,
      unlockAt: 2_000,
    },
    {
      id: 'quantum_rig',
      name: 'Quantum Rig',
      description: 'Quantum-entangled bit harvesting.',
      emoji: '⚛️',
      baseCost: 20_000,
      growthRate: 1.15,
      baseBps: 150,
      unlockAt: 15_000,
    },
    {
      id: 'bit_singularity',
      name: 'Bit Singularity',
      description: 'A black hole that converts matter to bits.',
      emoji: '🕳️',
      baseCost: 200_000,
      growthRate: 1.15,
      baseBps: 1_500,
      unlockAt: 150_000,
    },
    // ── Phase 3 (5M bits unlock) ─────────────────────────────────────────
    {
      id: 'warp_core',
      name: 'Warp Core',
      description: 'Bends spacetime to accelerate bit production.',
      emoji: '🌀',
      baseCost: 5_000_000,
      growthRate: 1.15,
      baseBps: 20_000,
      unlockAt: 2_000_000,
    },
    // ── Phase 4 (50M bits unlock) ────────────────────────────────────────
    {
      id: 'dimensional_tap',
      name: 'Dimensional Tap',
      description: 'Siphons energy from parallel dimensions.',
      emoji: '🔮',
      baseCost: 100_000_000,
      growthRate: 1.15,
      baseBps: 350_000,
      unlockAt: 50_000_000,
    },
    // ── Phase 5 (1B bits unlock) ─────────────────────────────────────────
    {
      id: 'reality_engine',
      name: 'Reality Engine',
      description: 'Reshapes physical constants for maximum output.',
      emoji: '🌌',
      baseCost: 3_000_000_000,
      growthRate: 1.15,
      baseBps: 7_000_000,
      unlockAt: 1_000_000_000,
    },
    {
      id: 'the_omnibus',
      name: 'The Omnibus',
      description: 'An incomprehensible hypercomputer. Runs everything.',
      emoji: '♾️',
      baseCost: 100_000_000_000,
      growthRate: 1.15,
      baseBps: 200_000_000,
      unlockAt: 30_000_000_000,
    },
  ],

  // ─── PROJECTS ────────────────────────────────────────────────────────────
  // Projects unlock gameplay features, not stat multipliers.
  // Each project is a one-time purchase that enables a new capability.
  // unlockAt = totalBitsEarned (lifetime threshold for visibility).
  projects: [
    // ── Phase 1 (Garage Hacker) ──────────────────────────────────────────
    {
      id: 'better_click_feedback',
      name: 'Better Click Feedback',
      description: 'Improve click responsiveness and visual feedback.',
      category: 'gameplay' as const,
      cost: 150,
      unlockAt: 50,
      phase: 1,
      effect: { enabled: 'better_click_feedback' },
      requires: [] as string[],
    },
    {
      id: 'combo_amplifier',
      name: 'Combo Amplifier',
      description: 'Extend combo meter cap from 8× to 12×.',
      category: 'gameplay' as const,
      cost: 500,
      unlockAt: 300,
      phase: 1,
      effect: { maxCombo: 12 },
      requires: [] as string[],
    },
    // ── Phase 2 (Going Online) ───────────────────────────────────────────
    {
      id: 'market_access',
      name: 'Market Access',
      description: 'Unlock the Trade Module: buy/sell generators at market prices.',
      category: 'module' as const,
      cost: 5_000,
      unlockAt: 5_000,
      phase: 2,
      effect: { unlocks: 'trade' },
      requires: [] as string[],
    },
    {
      id: 'prediction_engine',
      name: 'Prediction Engine',
      description: 'Enables market forecasting for better trading decisions.',
      category: 'gameplay' as const,
      cost: 8_000,
      unlockAt: 8_000,
      phase: 2,
      effect: { enabled: 'market_prediction' },
      requires: ['market_access'],
    },
    // ── Phase 3 (Corporate Attention) ──────────────────────────────────────
    {
      id: 'casino_charter',
      name: 'Casino Charter',
      description: 'Unlock the Casino Module: risk/reward betting with multipliers.',
      category: 'module' as const,
      cost: 50_000,
      unlockAt: 100_000,
      phase: 3,
      effect: { unlocks: 'casino' },
      requires: [] as string[],
    },
    {
      id: 'puzzle_framework',
      name: 'Puzzle Framework',
      description: 'Unlock Tetris-like Puzzle Module: arrange blocks for bonuses.',
      category: 'module' as const,
      cost: 80_000,
      unlockAt: 150_000,
      phase: 3,
      effect: { unlocks: 'puzzle' },
      requires: [] as string[],
    },
    // ── Phase 4 (Enterprise Scale) ────────────────────────────────────────
    {
      id: 'ai_trading',
      name: 'AI Trading',
      description: 'Automate trading decisions with neural networks.',
      category: 'gameplay' as const,
      cost: 1_000_000,
      unlockAt: 1_000_000,
      phase: 4,
      effect: { enabled: 'ai_trading' },
      requires: ['market_access'],
    },
    {
      id: 'distributed_casino',
      name: 'Distributed Casino',
      description: 'Run multiple casino games in parallel for faster rewards.',
      category: 'gameplay' as const,
      cost: 2_000_000,
      unlockAt: 2_000_000,
      phase: 4,
      effect: { enabled: 'parallel_casino' },
      requires: ['casino_charter'],
    },
    // ── Phase 5 (Quantum Era) ──────────────────────────────────────────────
    {
      id: 'neural_synchronization',
      name: 'Neural Synchronization',
      description: 'All modules feed into each other, multiplying effectiveness.',
      category: 'gameplay' as const,
      cost: 50_000_000,
      unlockAt: 50_000_000,
      phase: 5,
      effect: { enabled: 'module_sync' },
      requires: ['market_access', 'casino_charter', 'puzzle_framework'],
    },
    {
      id: 'endgame_protocol',
      name: '🚀 LAUNCH THE PROTOCOL',
      description: 'Deploy BitStream to every node on Earth. End condition: you win.',
      category: 'endgame' as const,
      cost: 500_000_000,
      unlockAt: 500_000_000,
      phase: 5,
      effect: { endgame: true },
      requires: ['neural_synchronization'],
    },
  ],

  // ─── RESEARCH ─────────────────────────────────────────────────────────────
  // Research Points (RP) accumulate at: rps = sqrt(effectiveBPS + 1) / 3
  // This gives naturally slow early research and faster late-game research
  // without ever making it trivial at any tier.
  //
  // Technologies are arranged in a tree (requires[]) across 5 tiers that
  // mirror the 5 game phases. Each tier requires the phase to be reached
  // before the tech is visible.
  research: {
    /** RP/s = sqrt(effectiveBPS + 1) / rpsDiv */
    rpsDiv: 3,

    technologies: [
      // ── Tier 1 — always available ────────────────────────────────────
      {
        id: 'lossless_compress',
        name: 'Lossless Compression',
        description: 'Compress bit streams for 20% more passive output.',
        tier: 1,
        phase: 1,
        rpCost: 50,
        effect: { passiveMultiplier: 1.2 },
        requires: [] as string[],
      },
      {
        id: 'macro_engine',
        name: 'Macro Engine',
        description: 'Automate input patterns for 50% more bits per click.',
        tier: 1,
        phase: 1,
        rpCost: 80,
        effect: { clickMultiplier: 1.5 },
        requires: [] as string[],
      },
      {
        id: 'combo_protocol',
        name: 'Combo Protocol',
        description: 'Extend the combo meter cap from ×8 to ×12.',
        tier: 1,
        phase: 1,
        rpCost: 150,
        effect: { maxCombo: 12 },
        requires: ['lossless_compress'],
      },
      // ── Tier 2 — Phase 2 (10K bits) ──────────────────────────────────
      {
        id: 'hash_sharding',
        name: 'Hash Sharding',
        description: 'Distributed hash tables: all generators produce ×1.5.',
        tier: 2,
        phase: 2,
        rpCost: 600,
        effect: { passiveMultiplier: 1.5 },
        requires: ['lossless_compress'],
      },
      {
        id: 'rp_accelerator',
        name: 'RP Accelerator',
        description: 'Dedicated research cores — research rate ×1.5.',
        tier: 2,
        phase: 2,
        rpCost: 900,
        effect: { researchMultiplier: 1.5 },
        requires: ['combo_protocol'],
      },
      {
        id: 'exploit_amplifier',
        name: 'Exploit Amplifier',
        description: 'Mini-game rewards are doubled.',
        tier: 2,
        phase: 2,
        rpCost: 1_500,
        effect: { minigameRewardMult: 2 },
        requires: ['macro_engine'],
      },
      // ── Tier 3 — Phase 3 (300K bits) ──────────────────────────────────
      {
        id: 'neural_amplifier',
        name: 'Neural Amplification',
        description: 'Deep neural nets push all generators to ×3.',
        tier: 3,
        phase: 3,
        rpCost: 12_000,
        effect: { passiveMultiplier: 3 },
        requires: ['hash_sharding'],
      },
      {
        id: 'global_cascade',
        name: 'Global Cascade',
        description: 'Cascade all gains globally: ×2 everything.',
        tier: 3,
        phase: 3,
        rpCost: 20_000,
        effect: { globalMultiplier: 2 },
        requires: ['rp_accelerator', 'neural_amplifier'],
      },
      {
        id: 'deep_cache',
        name: 'Deep Cache',
        description: 'Offline cache extended from 8h to 16h.',
        tier: 3,
        phase: 3,
        rpCost: 35_000,
        effect: { offlineCapHours: 16 },
        requires: ['exploit_amplifier'],
      },
      // ── Tier 4 — Phase 4 (5M bits) ───────────────────────────────────
      {
        id: 'quantum_sync',
        name: 'Quantum Sync',
        description: 'Quantum synchronisation across all nodes: global ×5.',
        tier: 4,
        phase: 4,
        rpCost: 300_000,
        effect: { globalMultiplier: 5 },
        requires: ['global_cascade'],
      },
      {
        id: 'dark_cores',
        name: 'Dark Matter Cores',
        description: 'Tap dark matter for ×10 production.',
        tier: 4,
        phase: 4,
        rpCost: 500_000,
        effect: { passiveMultiplier: 10 },
        requires: ['neural_amplifier'],
      },
      {
        id: 'temporal_acc',
        name: 'Temporal Accelerator',
        description: 'Bend time — research rate ×5.',
        tier: 4,
        phase: 4,
        rpCost: 1_500_000,
        effect: { researchMultiplier: 5 },
        requires: ['rp_accelerator'],
      },
      // ── Tier 5 — Phase 5 (100M bits) — endgame path ──────────────────
      {
        id: 'genesis_code',
        name: 'Genesis Code',
        description: "Rewrite the universe's source: global \xD720.",
        tier: 5,
        phase: 5,
        rpCost: 6_000_000,
        effect: { globalMultiplier: 20 },
        requires: ['quantum_sync', 'dark_cores'],
      },
      {
        id: 'recursive_loop',
        name: 'Recursive Loop',
        description: 'Self-referential optimisation: all generators ×50.',
        tier: 5,
        phase: 5,
        rpCost: 25_000_000,
        effect: { passiveMultiplier: 50 },
        requires: ['temporal_acc'],
      },
      {
        id: 'launch_protocol',
        name: '🚀 LAUNCH THE PROTOCOL',
        description: 'Deploy the BitStream Protocol to every node on Earth. This ends the game.',
        tier: 5,
        phase: 5,
        rpCost: 100_000_000,
        effect: { endgame: true },
        requires: ['genesis_code', 'recursive_loop'],
      },
    ],
  },

  // ─── PHASES ───────────────────────────────────────────────────────────────
  // Each phase unlocks when totalBitsEarned crosses the threshold.
  // Phases reveal new modules and drive the narrative.
  phases: [
    {
      id: 1,
      threshold: 0,
      title: 'Garage Hacker',
      narrative: 'You start writing scripts in your bedroom. The stream goes live for the first time.',
      unlocks: ['clicker', 'generators', 'upgrades', 'minigames'],
    },
    {
      id: 2,
      threshold: 10_000,
      title: 'Going Online',
      narrative: 'Your scripts go viral. A small community forms around your stream. Research becomes possible.',
      unlocks: ['research'],
    },
    {
      id: 3,
      threshold: 300_000,
      title: 'Corporate Attention',
      narrative: 'A startup wants to partner. Corporate money starts flowing. New hardware arrives.',
      unlocks: [],
    },
    {
      id: 4,
      threshold: 5_000_000,
      title: 'Enterprise Scale',
      narrative: 'BitStream becomes a platform. Thousands of nodes are now live worldwide.',
      unlocks: [],
    },
    {
      id: 5,
      threshold: 100_000_000,
      title: 'Quantum Era',
      narrative: 'Quantum servers come online. The network transcends traditional computing.',
      unlocks: [],
    },
  ],

  // ─── MINI-GAMES ───────────────────────────────────────────────────────────
  minigames: {
    intervalRange: [120_000, 300_000] as [number, number], // 2–5 min
    durationMs: 15_000,
    burstDurationSec: 30,
    burstBpsMultiplier: 10, // multiplied by minigameRewardMult from research
  },

  // ─── OFFLINE PRODUCTION ───────────────────────────────────────────────────
  offline: {
    maxOfflineMs: 8 * 60 * 60 * 1000, // extended to 16h by deep_cache research
    efficiency: 0.1,
  },

  // ─── TWITCH ───────────────────────────────────────────────────────────────
  twitch: {
    liveMultiplier: 1.5,
    pollIntervalMs: 2 * 60 * 1000,
  },

  // ─── SAVE ─────────────────────────────────────────────────────────────────
  save: { intervalMs: 10_000 },
} as const;

// ── Utility functions ──────────────────────────────────────────────────────

/** cost(n) = baseCost × growthRate^n  [idle math §cost curves] */
export function generatorCost(baseCost: number, growthRate: number, owned: number): number {
  return Math.floor(baseCost * Math.pow(growthRate, owned));
}

/**
 * Bulk cost for `count` units starting from `owned` already held.
 * Geometric series: baseCost × growthRate^owned × (growthRate^count − 1) / (growthRate − 1)
 */
export function bulkGeneratorCost(
  baseCost: number,
  growthRate: number,
  owned: number,
  count: number,
): number {
  return Math.floor(
    (baseCost * Math.pow(growthRate, owned) * (Math.pow(growthRate, count) - 1)) /
      (growthRate - 1),
  );
}

/** Format large numbers with K / M / B / T suffixes; shows decimals below 10 */
export function formatNumber(n: number): string {
  if (n >= 1e15) return (n / 1e15).toFixed(2) + 'Qa';
  if (n >= 1e12) return (n / 1e12).toFixed(2) + 'T';
  if (n >= 1e9)  return (n / 1e9).toFixed(2) + 'B';
  if (n >= 1e6)  return (n / 1e6).toFixed(2) + 'M';
  if (n >= 1e3)  return (n / 1e3).toFixed(2) + 'K';
  if (n >= 10)   return Math.floor(n).toString();
  if (n >= 1)    return n.toFixed(1);
  if (n > 0)     return n.toFixed(2);
  return '0';
}

/** Format seconds into Xh Ym Zs */
export function formatDuration(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  if (h > 0) return `${h}h ${m}m`;
  if (m > 0) return `${m}m ${s}s`;
  return `${s}s`;
}
