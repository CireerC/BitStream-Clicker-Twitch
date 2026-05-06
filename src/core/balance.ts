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
 *   Each generator tier targets roi ≈ 2× the previous tier.
 *
 * Game arc: ~10 h of active play across 5 phases.
 *   Phase 1 exit:   100K total bits   (~1.5 h)
 *   Phase 2 exit:     2M total bits   (~3 h)
 *   Phase 3 exit:    50M total bits   (~5 h)
 *   Phase 4 exit:     1B total bits   (~8 h)
 *   Endgame: final project purchase at 10B bits
 *
 * Clicker: useful in phases 1–2, progressively weaker afterwards.
 * Bombs: appear every ~20 clicks to discourage autoclickers.
 */

export const BALANCE = {
  // ─── CLICKER ──────────────────────────────────────────────────────────────
  clicker: {
    baseBitsPerClick: 1,
    comboWindowMs: 500,
    maxComboMultiplier: 8,
    clicksToMaxCombo: 20,
    comboDecayMs: 1200,
    // Phase penalty: scale applied to BPC per phase (1=full, 0.05=negligible)
    phaseScale: [1, 1, 0.4, 0.1, 0.02] as number[],
    // Bomb mechanic: every bombMinClicks–bombMaxClicks clicks a bomb appears
    bombMinClicks: 18,
    bombMaxClicks: 35,
    bombDurationMs: 2000,
    bombBitLossPct: 0.03,  // 3% bits lost on bomb click
    // Auto-clicker soft cap: CPS above this reduces effective BPC
    cpsLimit: 6,
  },

  // ─── GENERATORS ───────────────────────────────────────────────────────────
  // growthRate = 1.17 → ~17% more expensive per purchase.
  // baseBps reduced ~30% vs previous version for longer game arc.
  // milestones: cumulative ×multiplier when owned count is reached.
  generators: [
    {
      id: 'bit_miner',
      name: 'Mineur de Bits',
      description: 'Un script basique qui extrait les bits lentement.',
      emoji: '⛏️',
      baseCost: 30,
      growthRate: 1.17,
      baseBps: 0.07,
      unlockAt: 0,
      milestones: [
        { owned: 10,  multiplier: 2  },
        { owned: 25,  multiplier: 4  },
        { owned: 50,  multiplier: 8  },
        { owned: 100, multiplier: 20 },
      ],
    },
    {
      id: 'packet_router',
      name: 'Routeur de Paquets',
      description: 'Achemine des paquets réseau contre rémunération.',
      emoji: '📡',
      baseCost: 200,
      growthRate: 1.17,
      baseBps: 0.35,
      unlockAt: 100,
      milestones: [
        { owned: 10,  multiplier: 2  },
        { owned: 25,  multiplier: 4  },
        { owned: 50,  multiplier: 8  },
        { owned: 100, multiplier: 20 },
      ],
    },
    {
      id: 'data_farm',
      name: 'Ferme de Données',
      description: 'Une petite ferme de bots générateurs de bits.',
      emoji: '🌾',
      baseCost: 1_000,
      growthRate: 1.17,
      baseBps: 2.1,
      unlockAt: 600,
      milestones: [
        { owned: 10,  multiplier: 2  },
        { owned: 25,  multiplier: 4  },
        { owned: 50,  multiplier: 8  },
        { owned: 100, multiplier: 20 },
      ],
    },
    {
      id: 'neural_net',
      name: 'Réseau Neuronal',
      description: 'Réseau auto-optimisé de génération de bits.',
      emoji: '🧠',
      baseCost: 6_000,
      growthRate: 1.17,
      baseBps: 14,
      unlockAt: 4_000,
      milestones: [
        { owned: 10,  multiplier: 2  },
        { owned: 25,  multiplier: 4  },
        { owned: 50,  multiplier: 8  },
        { owned: 100, multiplier: 20 },
      ],
    },
    {
      id: 'quantum_rig',
      name: 'Rig Quantique',
      description: 'Récolte de bits par intrication quantique.',
      emoji: '⚛️',
      baseCost: 40_000,
      growthRate: 1.17,
      baseBps: 105,
      unlockAt: 30_000,
      milestones: [
        { owned: 10,  multiplier: 2  },
        { owned: 25,  multiplier: 4  },
        { owned: 50,  multiplier: 8  },
        { owned: 100, multiplier: 20 },
      ],
    },
    {
      id: 'bit_singularity',
      name: 'Singularité de Bits',
      description: 'Un trou noir qui convertit la matière en bits.',
      emoji: '🕳️',
      baseCost: 400_000,
      growthRate: 1.17,
      baseBps: 1_050,
      unlockAt: 300_000,
      milestones: [
        { owned: 10,  multiplier: 2  },
        { owned: 25,  multiplier: 4  },
        { owned: 50,  multiplier: 8  },
        { owned: 100, multiplier: 20 },
      ],
    },
    {
      id: 'warp_core',
      name: 'Noyau de Distorsion',
      description: 'Courbe l\'espace-temps pour accélérer la production.',
      emoji: '🌀',
      baseCost: 10_000_000,
      growthRate: 1.17,
      baseBps: 14_000,
      unlockAt: 4_000_000,
      milestones: [
        { owned: 10,  multiplier: 2  },
        { owned: 25,  multiplier: 4  },
        { owned: 50,  multiplier: 8  },
        { owned: 100, multiplier: 20 },
      ],
    },
    {
      id: 'dimensional_tap',
      name: 'Robinet Dimensionnel',
      description: 'Siphonne l\'énergie des dimensions parallèles.',
      emoji: '🔮',
      baseCost: 200_000_000,
      growthRate: 1.17,
      baseBps: 245_000,
      unlockAt: 100_000_000,
      milestones: [
        { owned: 10,  multiplier: 2  },
        { owned: 25,  multiplier: 4  },
        { owned: 50,  multiplier: 8  },
        { owned: 100, multiplier: 20 },
      ],
    },
    {
      id: 'reality_engine',
      name: 'Moteur de Réalité',
      description: 'Redéfinit les constantes physiques pour un rendement maximal.',
      emoji: '🌌',
      baseCost: 6_000_000_000,
      growthRate: 1.17,
      baseBps: 4_900_000,
      unlockAt: 2_000_000_000,
      milestones: [
        { owned: 10,  multiplier: 2  },
        { owned: 25,  multiplier: 4  },
        { owned: 50,  multiplier: 8  },
        { owned: 100, multiplier: 20 },
      ],
    },
    {
      id: 'the_omnibus',
      name: "L'Omnibus",
      description: 'Un hypercalculateur incompréhensible. Fait tout tourner.',
      emoji: '♾️',
      baseCost: 200_000_000_000,
      growthRate: 1.17,
      baseBps: 140_000_000,
      unlockAt: 60_000_000_000,
      milestones: [
        { owned: 10,  multiplier: 2  },
        { owned: 25,  multiplier: 4  },
        { owned: 50,  multiplier: 8  },
        { owned: 100, multiplier: 20 },
      ],
    },
  ],

  // ─── PROJECTS ────────────────────────────────────────────────────────────
  projects: [
    // ── Phase 2 ──────────────────────────────────────────────────────────
    {
      id: 'market_access',
      name: 'Accès au Marché',
      description: 'Déverrouille le Commerce : vente de générateurs au prix du marché.',
      category: 'module' as const,
      cost: 20_000,
      unlockAt: 20_000,
      phase: 2,
      effect: { unlocks: 'trade' },
      requires: [] as string[],
    },
    // ── Phase 3 ────────────────────────────────────────────────────────────
    {
      id: 'casino_charter',
      name: 'Charte du Casino',
      description: 'Déverrouille le Casino : paris risque/récompense avec multiplicateurs.',
      category: 'module' as const,
      cost: 200_000,
      unlockAt: 400_000,
      phase: 3,
      effect: { unlocks: 'casino' },
      requires: [] as string[],
    },
    {
      id: 'aim_protocol',
      name: 'Protocole de Précision',
      description: 'Déverrouille l\'Aim Trainer : mises en jeu, cibles à viser pour gagner des bits.',
      category: 'module' as const,
      cost: 500_000,
      unlockAt: 800_000,
      phase: 3,
      effect: { unlocks: 'aimtrainer' },
      requires: [] as string[],
    },
    {
      id: 'bomb_defuser',
      name: 'Désamorceur de Bombes',
      description: 'Réduit la fréquence des bombes dans le clicker de 50%.',
      category: 'upgrade' as const,
      cost: 1_000_000,
      unlockAt: 1_500_000,
      phase: 3,
      effect: { bombReductionRate: 0.5 },
      requires: [] as string[],
    },
    // ── Phase 4 ─────────────────────────────────────────────────────────────
    {
      id: 'neural_overclock',
      name: 'Surclocking Neuronal',
      description: 'Tous les générateurs produisent ×1.5 de façon permanente.',
      category: 'upgrade' as const,
      cost: 15_000_000,
      unlockAt: 20_000_000,
      phase: 4,
      effect: { passiveMultiplier: 1.5 },
      requires: [] as string[],
    },
    // ── Phase 5 (Endgame) ─────────────────────────────────────────────────
    {
      id: 'endgame_protocol',
      name: '🚀 LANCER LE PROTOCOLE',
      description: 'Déploie BitStream sur tous les nœuds de la Terre. Condition de victoire.',
      category: 'endgame' as const,
      cost: 5_000_000_000,
      unlockAt: 5_000_000_000,
      phase: 5,
      effect: { endgame: true },
      requires: ['market_access', 'casino_charter', 'aim_protocol'],
    },
  ],

  // ─── RESEARCH ─────────────────────────────────────────────────────────────
  // RP/s = sqrt(effectiveBPS + 1) / rpsDiv  (rpsDiv raised for slower early RP)
  research: {
    rpsDiv: 4,

    technologies: [
      // ── Tier 1 ──────────────────────────────────────────────────────
      {
        id: 'lossless_compress',
        name: 'Lossless Compression',
        description: 'Compress bit streams for 15% more passive output.',
        tier: 1, phase: 1,
        rpCost: 100,
        effect: { passiveMultiplier: 1.15 },
        requires: [] as string[],
      },
      {
        id: 'macro_engine',
        name: 'Macro Engine',
        description: 'Automate input patterns for 30% more bits per click.',
        tier: 1, phase: 1,
        rpCost: 160,
        effect: { clickMultiplier: 1.3 },
        requires: [] as string[],
      },
      {
        id: 'combo_protocol',
        name: 'Combo Protocol',
        description: 'Extend the combo meter cap from ×8 to ×12.',
        tier: 1, phase: 1,
        rpCost: 300,
        effect: { maxCombo: 12 },
        requires: ['lossless_compress'],
      },
      // ── Tier 2 — Phase 2 ────────────────────────────────────────────
      {
        id: 'hash_sharding',
        name: 'Hash Sharding',
        description: 'Distributed hash tables: all generators produce ×1.35.',
        tier: 2, phase: 2,
        rpCost: 1_200,
        effect: { passiveMultiplier: 1.35 },
        requires: ['lossless_compress'],
      },
      {
        id: 'rp_accelerator',
        name: 'RP Accelerator',
        description: 'Dedicated research cores — research rate ×1.4.',
        tier: 2, phase: 2,
        rpCost: 1_800,
        effect: { researchMultiplier: 1.4 },
        requires: ['combo_protocol'],
      },
      {
        id: 'exploit_amplifier',
        name: 'Exploit Amplifier',
        description: 'Mini-game burst multiplier is increased.',
        tier: 2, phase: 2,
        rpCost: 3_000,
        effect: { minigameRewardMult: 1.5 },
        requires: ['macro_engine'],
      },
      // ── Tier 3 — Phase 3 ────────────────────────────────────────────
      {
        id: 'neural_amplifier',
        name: 'Neural Amplification',
        description: 'Deep neural nets push all generators to ×2.',
        tier: 3, phase: 3,
        rpCost: 24_000,
        effect: { passiveMultiplier: 2 },
        requires: ['hash_sharding'],
      },
      {
        id: 'global_cascade',
        name: 'Global Cascade',
        description: 'Cascade all gains globally: ×1.75 everything.',
        tier: 3, phase: 3,
        rpCost: 40_000,
        effect: { globalMultiplier: 1.75 },
        requires: ['rp_accelerator', 'neural_amplifier'],
      },
      {
        id: 'deep_cache',
        name: 'Deep Cache',
        description: 'Offline cache extended from 8h to 16h.',
        tier: 3, phase: 3,
        rpCost: 70_000,
        effect: { offlineCapHours: 16 },
        requires: ['exploit_amplifier'],
      },
      // ── Tier 4 — Phase 4 ────────────────────────────────────────────
      {
        id: 'quantum_sync',
        name: 'Quantum Sync',
        description: 'Quantum synchronisation: global ×3.',
        tier: 4, phase: 4,
        rpCost: 600_000,
        effect: { globalMultiplier: 3 },
        requires: ['global_cascade'],
      },
      {
        id: 'dark_cores',
        name: 'Dark Matter Cores',
        description: 'Tap dark matter for ×6 production.',
        tier: 4, phase: 4,
        rpCost: 1_000_000,
        effect: { passiveMultiplier: 6 },
        requires: ['neural_amplifier'],
      },
      {
        id: 'temporal_acc',
        name: 'Temporal Accelerator',
        description: 'Bend time — research rate ×4.',
        tier: 4, phase: 4,
        rpCost: 3_000_000,
        effect: { researchMultiplier: 4 },
        requires: ['rp_accelerator'],
      },
      // ── Tier 5 — Phase 5 ────────────────────────────────────────────
      {
        id: 'genesis_code',
        name: 'Genesis Code',
        description: "Rewrite the universe's source: global ×10.",
        tier: 5, phase: 5,
        rpCost: 12_000_000,
        effect: { globalMultiplier: 10 },
        requires: ['quantum_sync', 'dark_cores'],
      },
      {
        id: 'recursive_loop',
        name: 'Recursive Loop',
        description: 'Self-referential optimisation: all generators ×20.',
        tier: 5, phase: 5,
        rpCost: 50_000_000,
        effect: { passiveMultiplier: 20 },
        requires: ['temporal_acc'],
      },
      {
        id: 'launch_protocol',
        name: '🚀 LAUNCH THE PROTOCOL',
        description: 'Deploy the BitStream Protocol to every node on Earth.',
        tier: 5, phase: 5,
        rpCost: 200_000_000,
        effect: { endgame: true },
        requires: ['genesis_code', 'recursive_loop'],
      },
    ],
  },

  // ─── PHASES ───────────────────────────────────────────────────────────────
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
      threshold: 100_000,
      title: 'Going Online',
      narrative: 'Your scripts go viral. A small community forms. Research becomes possible.',
      unlocks: ['research'],
    },
    {
      id: 3,
      threshold: 2_000_000,
      title: 'Corporate Attention',
      narrative: 'A startup wants to partner. Corporate money starts flowing.',
      unlocks: [],
    },
    {
      id: 4,
      threshold: 50_000_000,
      title: 'Enterprise Scale',
      narrative: 'BitStream becomes a platform. Thousands of nodes are now live worldwide.',
      unlocks: [],
    },
    {
      id: 5,
      threshold: 1_000_000_000,
      title: 'Quantum Era',
      narrative: 'Quantum servers come online. The network transcends traditional computing.',
      unlocks: [],
    },
  ],

  // ─── MINI-GAMES ───────────────────────────────────────────────────────────
  minigames: {
    intervalRange: [150_000, 360_000] as [number, number], // 2.5–6 min
    durationMs: 15_000,
    burstDurationSec: 20,
    burstBpsMultiplier: 4,    // Reduced from 10 — no longer dominates economy
    lossPenaltyPct: 0.02,     // 2% bits lost on mini-game failure
  },

  // ─── OFFLINE PRODUCTION ───────────────────────────────────────────────────
  offline: {
    maxOfflineMs: 8 * 60 * 60 * 1000,
    efficiency: 0.08,         // Slightly reduced offline efficiency
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

export function generatorCost(baseCost: number, growthRate: number, owned: number): number {
  return Math.floor(baseCost * Math.pow(growthRate, owned));
}

export function bulkGeneratorCost(
  baseCost: number, growthRate: number, owned: number, count: number,
): number {
  return Math.floor(
    (baseCost * Math.pow(growthRate, owned) * (Math.pow(growthRate, count) - 1)) /
      (growthRate - 1),
  );
}

/** Get the milestone multiplier for a given owned count */
export function getMilestoneMultiplier(
  milestones: readonly { owned: number; multiplier: number }[],
  owned: number,
): number {
  let mult = 1;
  for (const ms of milestones) {
    if (owned >= ms.owned) mult = ms.multiplier;
  }
  return mult;
}

/** Format large numbers with K / M / B / T suffixes */
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

export function formatDuration(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  if (h > 0) return `${h}h ${m}m`;
  if (m > 0) return `${m}m ${s}s`;
  return `${s}s`;
}
