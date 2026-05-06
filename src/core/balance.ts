/**
 * BALANCE CONFIGURATION — Central source of truth for all game math.
 *
 * Mathematical foundation:
 *   "The Math of Idle Games" by Anthony Pecorella (Game Developer, 2012)
 *   https://www.gamedeveloper.com/design/the-math-of-idle-games-part-i
 *
 * Core cost formula:  cost(n) = baseCost × growthRate^n
 *
 * Design philosophy:
 *   - Generators are the passive baseline (~30% of total income for active players)
 *   - Modules (casino, aim trainer) are the HIGH RISK / HIGH REWARD path — that is
 *     how fast players advance. Safe players advance too, but ~2× slower.
 *   - Projects provide ADDITIVE bonuses visible to the player (no hidden stacking).
 *   - Paliers marqués: milestones on generators create sudden jumps in power;
 *     late generators have long ROI forcing players to use modules to progress.
 *
 * Game arc: ~6–10 h of play (active risky ≈ 6 h, safe idle ≈ 10–12 h).
 *   Phase 1 exit:   5 K total bits   (~30 min)
 *   Phase 2 exit: 120 K total bits   (~1.5 h)
 *   Phase 3 exit:   3 M total bits   (~3 h)
 *   Phase 4 exit:  75 M total bits   (~6 h)
 *   Endgame:        2 B total bits
 */

export const BALANCE = {
  // ─── CLICKER ──────────────────────────────────────────────────────────────
  clicker: {
    baseBitsPerClick: 1,
    comboWindowMs: 500,
    maxComboMultiplier: 6,      // raised to 10 by combo_amplifie project
    clicksToMaxCombo: 20,
    comboDecayMs: 1200,
    cpsLimit: 6,                // anti-autoclicker soft cap (CPS penalty above this)
  },

  // ─── GENERATORS ───────────────────────────────────────────────────────────
  //
  // growthRate 1.15 → ~15% more expensive per unit.
  // ROI (return on investment) = baseCost / baseBps:
  //   Early generators: ~250–450 s  (4–7 min) — quick, fun, engaging
  //   Late generators:  ~3000–9000 s (55–150 min) — the "wall" that makes
  //     modules the natural fast path in phases 3–5.
  //
  // Milestones apply retroactively to all owned (the "palier marqué" moment):
  //   × 2 at 10 | × 3 at 25 | × 5 at 50 | × 10 at 100
  generators: [
    {
      id: 'bit_miner',
      name: 'Mineur de Bits',
      description: 'Un script basique qui extrait les bits lentement.',
      emoji: '⛏️',
      baseCost: 25,
      growthRate: 1.15,
      baseBps: 0.10,            // ROI ≈ 250 s (4 min)
      unlockAt: 0,
      milestones: [
        { owned: 10,  multiplier: 2  },
        { owned: 25,  multiplier: 3  },
        { owned: 50,  multiplier: 5  },
        { owned: 100, multiplier: 10 },
      ],
    },
    {
      id: 'packet_router',
      name: 'Routeur de Paquets',
      description: 'Achemine des paquets réseau contre rémunération.',
      emoji: '📡',
      baseCost: 160,
      growthRate: 1.15,
      baseBps: 0.55,            // ROI ≈ 291 s
      unlockAt: 80,
      milestones: [
        { owned: 10,  multiplier: 2  },
        { owned: 25,  multiplier: 3  },
        { owned: 50,  multiplier: 5  },
        { owned: 100, multiplier: 10 },
      ],
    },
    {
      id: 'data_farm',
      name: 'Ferme de Données',
      description: 'Une ferme de bots générateurs de bits.',
      emoji: '🌾',
      baseCost: 900,
      growthRate: 1.15,
      baseBps: 3.0,             // ROI ≈ 300 s
      unlockAt: 500,
      milestones: [
        { owned: 10,  multiplier: 2  },
        { owned: 25,  multiplier: 3  },
        { owned: 50,  multiplier: 5  },
        { owned: 100, multiplier: 10 },
      ],
    },
    {
      id: 'neural_net',
      name: 'Réseau Neuronal',
      description: 'Réseau auto-optimisé de génération de bits.',
      emoji: '🧠',
      baseCost: 5_500,
      growthRate: 1.15,
      baseBps: 16,              // ROI ≈ 344 s
      unlockAt: 3_000,
      milestones: [
        { owned: 10,  multiplier: 2  },
        { owned: 25,  multiplier: 3  },
        { owned: 50,  multiplier: 5  },
        { owned: 100, multiplier: 10 },
      ],
    },
    {
      id: 'quantum_rig',
      name: 'Rig Quantique',
      description: 'Récolte de bits par intrication quantique.',
      emoji: '⚛️',
      baseCost: 35_000,
      growthRate: 1.15,
      baseBps: 90,              // ROI ≈ 389 s
      unlockAt: 22_000,
      milestones: [
        { owned: 10,  multiplier: 2  },
        { owned: 25,  multiplier: 3  },
        { owned: 50,  multiplier: 5  },
        { owned: 100, multiplier: 10 },
      ],
    },
    {
      id: 'bit_singularity',
      name: 'Singularité de Bits',
      description: 'Un trou noir qui convertit la matière en bits.',
      emoji: '🕳️',
      baseCost: 280_000,
      growthRate: 1.15,
      baseBps: 640,             // ROI ≈ 438 s
      unlockAt: 180_000,
      milestones: [
        { owned: 10,  multiplier: 2  },
        { owned: 25,  multiplier: 3  },
        { owned: 50,  multiplier: 5  },
        { owned: 100, multiplier: 10 },
      ],
    },
    {
      id: 'warp_core',
      name: 'Noyau de Distorsion',
      description: "Courbe l'espace-temps pour accélérer la production.",
      emoji: '🌀',
      baseCost: 5_000_000,
      growthRate: 1.15,
      baseBps: 1_500,           // ROI ≈ 3 333 s (55 min) — le premier vrai MUUR
      unlockAt: 3_500_000,
      milestones: [
        { owned: 10,  multiplier: 2  },
        { owned: 25,  multiplier: 3  },
        { owned: 50,  multiplier: 5  },
        { owned: 100, multiplier: 10 },
      ],
    },
    {
      id: 'dimensional_tap',
      name: 'Robinet Dimensionnel',
      description: 'Siphonne l\'énergie des dimensions parallèles.',
      emoji: '🔮',
      baseCost: 100_000_000,
      growthRate: 1.15,
      baseBps: 20_000,          // ROI ≈ 5 000 s (83 min)
      unlockAt: 65_000_000,
      milestones: [
        { owned: 10,  multiplier: 2  },
        { owned: 25,  multiplier: 3  },
        { owned: 50,  multiplier: 5  },
        { owned: 100, multiplier: 10 },
      ],
    },
    {
      id: 'reality_engine',
      name: 'Moteur de Réalité',
      description: 'Redéfinit les constantes physiques pour un rendement maximal.',
      emoji: '🌌',
      baseCost: 2_500_000_000,
      growthRate: 1.15,
      baseBps: 350_000,         // ROI ≈ 7 143 s (119 min)
      unlockAt: 1_500_000_000,
      milestones: [
        { owned: 10,  multiplier: 2  },
        { owned: 25,  multiplier: 3  },
        { owned: 50,  multiplier: 5  },
        { owned: 100, multiplier: 10 },
      ],
    },
    {
      id: 'the_omnibus',
      name: "L'Omnibus",
      description: 'Un hypercalculateur incompréhensible. Fait tout tourner.',
      emoji: '♾️',
      baseCost: 90_000_000_000,
      growthRate: 1.15,
      baseBps: 10_000_000,      // ROI ≈ 9 000 s (150 min)
      unlockAt: 60_000_000_000,
      milestones: [
        { owned: 10,  multiplier: 2  },
        { owned: 25,  multiplier: 3  },
        { owned: 50,  multiplier: 5  },
        { owned: 100, multiplier: 10 },
      ],
    },
  ],

  // ─── PROJECTS ─────────────────────────────────────────────────────────────
  //
  // All bonuses are ADDITIVE (not multiplicative stacking).
  // Effect fields:
  //   bpsBonus    — added to the passive production multiplier  (0.25 = +25%)
  //   clickBonus  — added to the BPC multiplier                 (0.60 = +60%)
  //   globalBonus — added to ALL gains (BPS + BPC + modules)    (1.00 = +100%)
  //   moduleBonus — added to casino / aim trainer payout        (0.30 = +30%)
  //   maxCombo    — override max combo multiplier (6 → 10)
  //   unlocks     — 'trade' | 'casino' | 'aimtrainer'
  //   endgame     — triggers victory screen
  //
  // Category determines the section header shown in the Projects panel.
  projects: [
    // ── Phase 1 ──────────────────────────────────────────────────────────
    {
      id: 'overclock_initial',
      name: 'Overclock Initial',
      description: 'Optimise les scripts de base. Tous les générateurs +25% de production.',
      category: 'production' as const,
      cost: 400,
      unlockAt: 250,
      phase: 1,
      effect: { bpsBonus: 0.25 },
      requires: [] as string[],
    },
    {
      id: 'combo_amplifie',
      name: 'Combo Amplifié',
      description: 'Entraîne les réflexes du streamer. Combo maximum passe de 6× à 10×.',
      category: 'production' as const,
      cost: 2_500,
      unlockAt: 2_000,
      phase: 1,
      effect: { maxCombo: 10 },
      requires: [] as string[],
    },
    // ── Phase 2 ──────────────────────────────────────────────────────────
    {
      id: 'marche_libre',
      name: 'Marché Libre',
      description: 'Déverrouille la vente de générateurs au prix du marché (50% du coût actuel).',
      category: 'module' as const,
      cost: 12_000,
      unlockAt: 9_000,
      phase: 2,
      effect: { unlocks: 'trade' },
      requires: [] as string[],
    },
    {
      id: 'protocole_casino',
      name: 'Protocole Casino',
      description: 'Déverrouille le Casino. Mises libres, high risk / high reward.',
      category: 'module' as const,
      cost: 28_000,
      unlockAt: 20_000,
      phase: 2,
      effect: { unlocks: 'casino' },
      requires: [] as string[],
    },
    {
      id: 'compression_reseau',
      name: 'Compression Réseau',
      description: 'Optimise les flux de données. Production passive +40%.',
      category: 'production' as const,
      cost: 50_000,
      unlockAt: 40_000,
      phase: 2,
      effect: { bpsBonus: 0.40 },
      requires: [] as string[],
    },
    // ── Phase 3 ──────────────────────────────────────────────────────────
    {
      id: 'interface_clicker',
      name: 'Interface Clicker Pro',
      description: 'Améliore la détection de clics. Bits par clic +60%.',
      category: 'production' as const,
      cost: 120_000,
      unlockAt: 100_000,
      phase: 3,
      effect: { clickBonus: 0.60 },
      requires: [] as string[],
    },
    {
      id: 'protocole_precision',
      name: 'Protocole de Précision',
      description: 'Déverrouille l\'Aim Trainer. Misez et visez pour gagner gros.',
      category: 'module' as const,
      cost: 200_000,
      unlockAt: 150_000,
      phase: 3,
      effect: { unlocks: 'aimtrainer' },
      requires: [] as string[],
    },
    {
      id: 'module_boost_init',
      name: 'Amplificateur de Gains',
      description: 'Booste les récompenses des modules actifs. Casino & Aim Trainer +30%.',
      category: 'module' as const,
      cost: 600_000,
      unlockAt: 400_000,
      phase: 3,
      effect: { moduleBonus: 0.30 },
      requires: [] as string[],
    },
    {
      id: 'amplification_neurale',
      name: 'Amplification Neurale',
      description: 'Réseau neuronal dédié à la production. Tous les générateurs +80%.',
      category: 'production' as const,
      cost: 900_000,
      unlockAt: 700_000,
      phase: 3,
      effect: { bpsBonus: 0.80 },
      requires: [] as string[],
    },
    // ── Phase 4 ──────────────────────────────────────────────────────────
    {
      id: 'reseau_quantique',
      name: 'Réseau Quantique',
      description: 'Intrication quantique des nœuds de production. Générateurs +120%.',
      category: 'production' as const,
      cost: 4_000_000,
      unlockAt: 3_000_000,
      phase: 4,
      effect: { bpsBonus: 1.20 },
      requires: [] as string[],
    },
    {
      id: 'table_champions',
      name: 'Table des Champions',
      description: 'Accès VIP aux tables haute mise. Casino & Aim Trainer +50%.',
      category: 'module' as const,
      cost: 10_000_000,
      unlockAt: 7_000_000,
      phase: 4,
      effect: { moduleBonus: 0.50 },
      requires: [] as string[],
    },
    {
      id: 'acceleration_globale',
      name: 'Accélération Globale',
      description: 'Synchronise tous les systèmes. TOUS les gains +100%.',
      category: 'global' as const,
      cost: 20_000_000,
      unlockAt: 15_000_000,
      phase: 4,
      effect: { globalBonus: 1.0 },
      requires: [] as string[],
    },
    // ── Phase 5 (Endgame) ─────────────────────────────────────────────────
    {
      id: 'singularite',
      name: 'Singularité de Production',
      description: 'Atteint le seuil de singularité computationnelle. Générateurs +200%.',
      category: 'production' as const,
      cost: 100_000_000,
      unlockAt: 80_000_000,
      phase: 5,
      effect: { bpsBonus: 2.0 },
      requires: [] as string[],
    },
    {
      id: 'protocole_omega',
      name: 'Protocole Oméga',
      description: 'Réécrit les règles du jeu. Modules +100%, tous les gains +75%.',
      category: 'global' as const,
      cost: 250_000_000,
      unlockAt: 200_000_000,
      phase: 5,
      effect: { moduleBonus: 1.0, globalBonus: 0.75 },
      requires: [] as string[],
    },
    {
      id: 'endgame_protocol',
      name: '🚀 LANCER LE PROTOCOLE',
      description: 'Déploie BitStream sur tous les nœuds de la Terre. Condition de victoire.',
      category: 'endgame' as const,
      cost: 2_000_000_000,
      unlockAt: 2_000_000_000,
      phase: 5,
      effect: { endgame: true },
      requires: ['marche_libre', 'protocole_casino', 'protocole_precision'] as string[],
    },
  ],

  // ─── PHASES ───────────────────────────────────────────────────────────────
  //
  // Paliers marqués: each phase entry is a visible milestone.
  // Thresholds based on totalBitsEarned (never decreases).
  phases: [
    {
      id: 1,
      threshold: 0,
      title: 'Garage Hacker',
      narrative: 'Tu codes dans ta chambre. Le stream démarre pour la première fois.',
      unlocks: ['clicker', 'generators', 'projects', 'minigames'],
    },
    {
      id: 2,
      threshold: 5_000,
      title: 'Going Online',
      narrative: 'Tes scripts se répandent. Une communauté se forme.',
      unlocks: [],
    },
    {
      id: 3,
      threshold: 120_000,
      title: 'Corporate Attention',
      narrative: 'Une startup veut te financer. Le casino ouvre ses portes.',
      unlocks: [],
    },
    {
      id: 4,
      threshold: 3_000_000,
      title: 'Enterprise Scale',
      narrative: 'BitStream devient une plateforme. Des milliers de nœuds sont en ligne.',
      unlocks: [],
    },
    {
      id: 5,
      threshold: 75_000_000,
      title: 'Quantum Era',
      narrative: 'Les serveurs quantiques s\'activent. Le réseau transcende le calcul classique.',
      unlocks: [],
    },
  ],

  // ─── MINI-GAMES ───────────────────────────────────────────────────────────
  minigames: {
    intervalRange: [150_000, 360_000] as [number, number],
    durationMs: 15_000,
    burstDurationSec: 20,
    burstBpsMultiplier: 4,
    lossPenaltyPct: 0.02,
  },

  // ─── OFFLINE PRODUCTION ───────────────────────────────────────────────────
  offline: {
    maxOfflineMs: 8 * 60 * 60 * 1000,  // 8 h cap
    efficiency: 0.08,                   // 8% of normal production while offline
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

/** Returns the highest milestone multiplier reached for the given owned count. */
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

/** Format large numbers with K / M / B / T suffixes. */
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
