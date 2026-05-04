/**
 * i18n Translation System
 * Central translation module for all UI text.
 * Supports English (en) and French (fr).
 */

export type Language = 'en' | 'fr';

export const translations = {
  en: {
    // ── Stats ──
    'stat.total_earned': 'Total earned',
    'stat.bps': 'BPS',
    'stat.bpc': 'BPC',
    'stat.global_multi': 'Global ×',
    'stat.burst': '⚡ BURST',
    'stat.phase': 'Phase',

    // ── Phases ──
    'phase.1': 'I — Garage Hacker',
    'phase.2': 'II — Script Kiddie',
    'phase.3': 'III — Digital Nomad',
    'phase.4': 'IV — AI Engineer',
    'phase.5': 'V — Quantum Singularity',

    // ── Clicker ──
    'clicker.click': 'Click',
    'clicker.combo': 'Combo ×',

    // ── Production ──
    'production.bps_label': 'BPS',
    'production.owned': 'Owned',
    'production.buy': 'Buy',
    'production.buy_bulk': 'Buy ×10',

    // ── Generators (names & descriptions) ──
    'gen.bit_miner': 'Bit Miner',
    'gen.bit_miner_desc': 'A basic script that mines bits slowly.',
    'gen.script_farm': 'Script Farm',
    'gen.script_farm_desc': 'Runs scripts in parallel, faster than manual mining.',
    'gen.bot_network': 'Bot Network',
    'gen.bot_network_desc': 'Distributed bots harvest bits from multiple sources.',
    'gen.data_center': 'Data Center',
    'gen.data_center_desc': 'Industrial-scale bit production.',
    'gen.ai_cluster': 'AI Cluster',
    'gen.ai_cluster_desc': 'Cutting-edge AI optimizes bit extraction.',
    'gen.quantum_farm': 'Quantum Farm',
    'gen.quantum_farm_desc': 'Harnesses quantum tunneling for bits.',

    // ── Projects ──
    'project.better_click': 'Better Click Feedback',
    'project.better_click_desc': 'Improves visual feedback on each click.',
    'project.combo_amplifier': 'Combo Amplifier',
    'project.combo_amplifier_desc': 'Increases max combo multiplier to ×12.',
    'project.market_access': 'Market Access',
    'project.market_access_desc': 'Unlocks the Trade module.',
    'project.prediction_engine': 'Prediction Engine',
    'project.prediction_engine_desc': 'Improves trade market predictions.',
    'project.casino_charter': 'Casino Charter',
    'project.casino_charter_desc': 'Unlocks the Casino module.',
    'project.puzzle_framework': 'Puzzle Framework',
    'project.puzzle_framework_desc': 'Unlocks the Puzzle module.',
    'project.ai_trading': 'AI Trading',
    'project.ai_trading_desc': 'Automates trade execution.',
    'project.distributed_casino': 'Distributed Casino',
    'project.distributed_casino_desc': 'Expands casino operations globally.',
    'project.neural_sync': 'Neural Synchronization',
    'project.neural_sync_desc': 'Synchronizes consciousness across quantum states.',
    'project.launch_protocol': 'Launch Protocol',
    'project.launch_protocol_desc': 'Initiates the final sequence.',

    // ── Casino ──
    'casino.title': '🎰 Casino',
    'casino.safe_bet': 'Safe Bet',
    'casino.safe_bet_desc': '100 Bits → ×1.25 multiplier',
    'casino.risky_bet': 'Risky Bet',
    'casino.risky_bet_desc': '500 Bits → ×2.0 multiplier',
    'casino.extreme_bet': 'Extreme Bet',
    'casino.extreme_bet_desc': '2000 Bits → ×5.0 multiplier',
    'casino.insufficient_bits': 'Insufficient Bits',
    'casino.bet': 'Bet',
    'casino.win': '🎉 You win!',
    'casino.lose': '💀 You lose!',

    // ── Trade ──
    'trade.title': '📈 Trade',
    'trade.sell': 'Sell',
    'trade.current_price': 'Current Price',
    'trade.insufficient_units': 'No units to sell',

    // ── Puzzle ──
    'puzzle.title': '🧩 Puzzle',
    'puzzle.score': 'Score',
    'puzzle.claim': 'Claim',
    'puzzle.claiming': 'Claiming...',

    // ── Mini-Games ──
    'minigame.click_target': '🎯 Click the Target',
    'minigame.click_target_instructions': 'Click the glowing target 5 times.',
    'minigame.key_sequence': '⌨️ Key Sequence',
    'minigame.key_sequence_instructions': 'Type the sequence shown.',
    'minigame.quick_math': '🧮 Quick Math',
    'minigame.quick_math_instructions': 'Tap the correct answer.',
    'minigame.win_reward': '🎉 +{reward} bits!',
    'minigame.win_info': '×{multiplier} BPS · {duration}',
    'minigame.lose': '💀 Too slow!',

    // ── UI Common ──
    'button.buy': 'Buy',
    'button.close': 'Close',
    'button.skip': 'Skip',
    'button.sell': 'Sell',
    'button.play': 'Play',
    'button.claim': 'Claim',

    // ── Twitch ──
    'twitch.live': '🔴 LIVE +50%',
    'twitch.offline': 'Twitch',

    // ── Header ──
    'header.title': 'BitStream',

    // ── Leaderboard ──
    'leaderboard.title': '🏆 Leaderboard',
    'leaderboard.rank': 'Rank',
    'leaderboard.player': 'Player',
    'leaderboard.bits': 'Bits',
    'leaderboard.you': '(You)',
    'leaderboard.enter_name': 'Enter your name',

  },

  fr: {
    // ── Stats ──
    'stat.total_earned': 'Total gagné',
    'stat.bps': 'BPS',
    'stat.bpc': 'BPC',
    'stat.global_multi': 'Multiplicateur',
    'stat.burst': '⚡ BURST',
    'stat.phase': 'Phase',

    // ── Phases ──
    'phase.1': 'I — Pirate Garage',
    'phase.2': 'II — Script Kiddie',
    'phase.3': 'III — Nomade Digital',
    'phase.4': 'IV — Ingénieur IA',
    'phase.5': 'V — Singularité Quantique',

    // ── Clicker ──
    'clicker.click': 'Cliquer',
    'clicker.combo': 'Combo ×',

    // ── Production ──
    'production.bps_label': 'BPS',
    'production.owned': 'Possédé',
    'production.buy': 'Acheter',
    'production.buy_bulk': 'Acheter ×10',

    // ── Generators (names & descriptions) ──
    'gen.bit_miner': 'Mineur de Bits',
    'gen.bit_miner_desc': 'Un script basique qui extrait les bits lentement.',
    'gen.script_farm': 'Ferme de Scripts',
    'gen.script_farm_desc': 'Exécute des scripts en parallèle, plus rapide que l\'extraction manuelle.',
    'gen.bot_network': 'Réseau de Bots',
    'gen.bot_network_desc': 'Des bots distribués récoltent les bits de plusieurs sources.',
    'gen.data_center': 'Centre de Données',
    'gen.data_center_desc': 'Production de bits à l\'échelle industrielle.',
    'gen.ai_cluster': 'Cluster IA',
    'gen.ai_cluster_desc': 'L\'IA de pointe optimise l\'extraction de bits.',
    'gen.quantum_farm': 'Ferme Quantique',
    'gen.quantum_farm_desc': 'Exploite l\'effet tunnel quantique pour les bits.',

    // ── Projects ──
    'project.better_click': 'Meilleur Feedback de Clic',
    'project.better_click_desc': 'Améliore le feedback visuel de chaque clic.',
    'project.combo_amplifier': 'Amplificateur de Combo',
    'project.combo_amplifier_desc': 'Augmente le multiplicateur de combo max à ×12.',
    'project.market_access': 'Accès au Marché',
    'project.market_access_desc': 'Déverrouille le module Commerce.',
    'project.prediction_engine': 'Moteur de Prédiction',
    'project.prediction_engine_desc': 'Améliore les prédictions du marché commercial.',
    'project.casino_charter': 'Charte du Casino',
    'project.casino_charter_desc': 'Déverrouille le module Casino.',
    'project.puzzle_framework': 'Framework Puzzle',
    'project.puzzle_framework_desc': 'Déverrouille le module Puzzle.',
    'project.ai_trading': 'Commerce IA',
    'project.ai_trading_desc': 'Automatise l\'exécution des échanges.',
    'project.distributed_casino': 'Casino Distribué',
    'project.distributed_casino_desc': 'Étend les opérations du casino mondialement.',
    'project.neural_sync': 'Synchronisation Neurale',
    'project.neural_sync_desc': 'Synchronise la conscience à travers les états quantiques.',
    'project.launch_protocol': 'Protocole de Lancement',
    'project.launch_protocol_desc': 'Initie la séquence finale.',

    // ── Casino ──
    'casino.title': '🎰 Casino',
    'casino.safe_bet': 'Pari Sûr',
    'casino.safe_bet_desc': '100 Bits → ×1.25 multiplicateur',
    'casino.risky_bet': 'Pari Risqué',
    'casino.risky_bet_desc': '500 Bits → ×2.0 multiplicateur',
    'casino.extreme_bet': 'Pari Extrême',
    'casino.extreme_bet_desc': '2000 Bits → ×5.0 multiplicateur',
    'casino.insufficient_bits': 'Bits insuffisants',
    'casino.bet': 'Parier',
    'casino.win': '🎉 Vous gagnez!',
    'casino.lose': '💀 Vous perdez!',

    // ── Trade ──
    'trade.title': '📈 Commerce',
    'trade.sell': 'Vendre',
    'trade.current_price': 'Prix Actuel',
    'trade.insufficient_units': 'Aucune unité à vendre',

    // ── Puzzle ──
    'puzzle.title': '🧩 Puzzle',
    'puzzle.score': 'Score',
    'puzzle.claim': 'Réclamer',
    'puzzle.claiming': 'Réclamation...',

    // ── Mini-Games ──
    'minigame.click_target': '🎯 Cliquez la Cible',
    'minigame.click_target_instructions': 'Cliquez la cible brillante 5 fois.',
    'minigame.key_sequence': '⌨️ Séquence de Touches',
    'minigame.key_sequence_instructions': 'Tapez la séquence affichée.',
    'minigame.quick_math': '🧮 Mathématiques Rapides',
    'minigame.quick_math_instructions': 'Appuyez sur la bonne réponse.',
    'minigame.win_reward': '🎉 +{reward} bits!',
    'minigame.win_info': '×{multiplier} BPS · {duration}',
    'minigame.lose': '💀 Trop lent!',

    // ── UI Common ──
    'button.buy': 'Acheter',
    'button.close': 'Fermer',
    'button.skip': 'Passer',
    'button.sell': 'Vendre',
    'button.play': 'Jouer',
    'button.claim': 'Réclamer',

    // ── Twitch ──
    'twitch.live': '🔴 EN DIRECT +50%',
    'twitch.offline': 'Twitch',

    // ── Header ──
    'header.title': 'BitStream',

    // ── Leaderboard ──
    'leaderboard.title': '🏆 Classement',
    'leaderboard.rank': 'Rang',
    'leaderboard.player': 'Joueur',
    'leaderboard.bits': 'Bits',
    'leaderboard.you': '(Vous)',
    'leaderboard.enter_name': 'Entrez votre nom',
  },
};

let currentLanguage: Language = 'fr';

export function setLanguage(lang: Language): void {
  currentLanguage = lang;
}

export function getLanguage(): Language {
  return currentLanguage;
}

/**
 * Initialize i18n with the game store.
 * Call this once at app startup to sync language with store.
 */
export function initI18n(store: any): void {
  currentLanguage = store.getLanguage();
  store.subscribe(() => {
    currentLanguage = store.getLanguage();
  });
}

/**
 * Translate a key to the current language.
 * Supports variable interpolation: t('key.{var}') with { var: value }
 */
export function t(key: string, vars?: Record<string, string | number>): string {
  const trans = translations[currentLanguage];
  let text = (trans as any)[key] || key;

  if (vars) {
    Object.entries(vars).forEach(([k, v]) => {
      text = text.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v));
    });
  }

  return text;
}
