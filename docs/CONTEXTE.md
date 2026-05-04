# BitStream — Contexte Complet du Projet

> Ce document explique le projet de A à Z pour reprendre n'importe quelle session sans ambiguïté.  
> Dernière mise à jour : 2026-05-04

---

## 1. C'est quoi ?

Un **jeu incrémental (idle game)** web solo, hébergé sur Vercel, jouable dans le navigateur sans installation.  
Le joueur accumule une monnaie appelée **Bits** en cliquant, en achetant des générateurs passifs, et en jouant à des mini-jeux.  
La progression persiste via `localStorage` (sauvegarde automatique toutes les 10s + au chargement).

**Lien Twitch** : si le stream de la chaîne configurée est en ligne, un multiplicateur ×1.5 est appliqué à tous les gains. Affiché via un badge "LIVE +50%" dans le header.

---

## 2. Stack Technique

| Outil | Rôle |
|-------|------|
| **Vite + TypeScript** | Build tool + langage principal (strict) |
| **Vanilla TS** (pas de framework) | Gestion d'état, rendu DOM manuel |
| **CSS custom** (pas Bootstrap, pas Tailwind) | Styles avec variables CSS |
| **Vercel** | Hébergement (déploiement `git push`) |
| **localStorage** | Sauvegarde côté client uniquement |
| **Twitch Helix API** | Vérification statut stream (polling 2 min) |

**Pas de backend, pas de base de données.** Tout tourne côté client.

---

## 3. Structure des Dossiers

```
src/
├── main.ts                          ← Point d'entrée : bootstrap, loadGame, startGameLoop
├── core/
│   ├── GameStore.ts                 ← Store central (source de vérité unique)
│   ├── GameLoop.ts                  ← RAF tick : BPS passif + recherche
│   ├── SaveSystem.ts                ← load/save/delete + calcul offline
│   ├── balance.ts                   ← TOUTES les constantes mathématiques du jeu
│   └── i18n.ts                      ← Système de traduction (fr/en), défaut = 'fr'
├── store/
│   └── types.ts                     ← Interfaces TypeScript (GameState, etc.)
├── modules/
│   ├── clicker/Clicker.ts           ← Bouton de clic + combo bar
│   ├── production/Production.ts     ← Générateurs + bouton vendre inline
│   ├── casino/CasinoModule.ts       ← 4 jeux casino (onglets)
│   ├── minigames/MiniGameManager.ts ← Pop-up minijeux aléatoires
│   ├── missions/MissionsModule.ts   ← 3 missions quotidiennes
│   ├── leaderboard/Leaderboard.ts   ← Classement local (bots simulés)
│   ├── projects/ProjectSystem.ts    ← Arbre de projets (remplace upgrades)
│   ├── phases/PhaseManager.ts       ← Gestion transitions de phases
│   └── trade/TradeModule.ts         ← Logique de vente (utilisée en inline dans Production)
├── integrations/
│   └── twitch/TwitchAPI.ts          ← Polling Twitch + badge UI
└── ui/
    ├── App.ts                        ← Layout principal, montage de tous les modules
    ├── Header.ts                     ← Header : compteur bits, save, reset, badge Twitch
    ├── OfflineModal.ts               ← Modale "revenus pendant absence"
    └── styles/
        ├── main.css                  ← Import des autres CSS + styles principaux
        ├── variables.css             ← Palette couleurs (thème black/white minimaliste)
        ├── animations.css            ← Animations CSS (floater, ripple, combo, etc.)
        ├── phase.css                 ← Notification de phase + styles .mg-card (mini-jeux)
        └── research.css             ← Styles legacy (recherche toujours active en fond)

docs/
├── PourMoi.txt                       ← Notes personnelles / todo liste UX
└── CONTEXTE.md                       ← Ce fichier
```

---

## 4. Architecture Centrale : GameStore

`src/core/GameStore.ts` est le **store central** (patron Observable sans Zustand).

```typescript
// API publique clé :
store.getState()              // → GameState (readonly)
store.setState(s => { ... })  // Muter l'état + notifier les listeners
store.subscribe(listener)     // S'abonner aux changements → retourne unsub()
store.notify()                // Notifier manuellement (ex: après addResearchPoints)

store.addBits(n)              // +n bits (et totalBitsEarned)
store.spendBits(n)            // -n bits, retourne false si insuffisant
store.incrementClicks()       // +1 totalClicks (sans notifier, appelé par Clicker)
store.buyGenerator(id)        // Acheter 1 générateur
store.purchaseProject(id)     // Acheter un projet (vérifie prereqs + phase)

store.getEffectiveBPS()       // BPS × multiplicateurs passifs
store.getEffectiveBPC()       // bits/clic × multiplicateurs clic + combo
store.getPassiveMultiplier()  // m.passive × m.global × m.twitch × (minigame si actif)
store.getCurrentPhase()       // Phase actuelle (1-5) basée sur totalBitsEarned
store.getMaxCombo()           // Max combo multiplier (8 de base, 12 après projet/tech)
store.isMinigameActive()      // true si le burst minijeu est en cours
```

### Structure de GameState

```typescript
interface GameState {
  bits: number;               // Bits actuels (peut baisser si dépensé)
  totalBitsEarned: number;    // Total historique (ne baisse jamais → sert pour phases/unlock)
  totalClicks: number;        // Clics totaux de toute la partie
  clicker: {
    comboCount: number;
    comboMultiplier: number;  // 1.0 à maxCombo
    lastClickTime: number;
  };
  generators: Array<{ id: string; owned: number }>;
  projects: Array<{ id: string; purchased: boolean }>;
  multipliers: {
    click: number;            // Bonus clic (depuis research)
    passive: number;          // Bonus BPS (depuis research)
    global: number;           // Bonus global (depuis research)
    twitch: number;           // 1.5 si live, 1 sinon
    minigame: number;         // ×10 pendant burst minijeu
    minigameEndsAt: number;   // timestamp ms fin burst
    research: number;         // Multiplicateur taux de recherche
  };
  research: { points: number; techPurchased: string[] };
  twitch: { isLive, streamTitle, gameName, lastChecked, channelName };
  lastPhase: number;
  lastSaveTime: number;
  lastTickTime: number;
  language: 'en' | 'fr';     // Défaut 'fr'
}
```

---

## 5. Modules en Détail

### 5.1 Clicker (`Clicker.ts`)
- Bouton central ⚡, clic = +BPC bits
- **Combo bar** : clics rapides (< 500ms) → multiplicateur 1× à maxCombo× (8 par défaut, 12 après upgrade)
- Floater animé à chaque clic, ripple effect
- Appelle `store.incrementClicks()` pour tracker les missions

### 5.2 Générateurs (`Production.ts`)
- Achat selon `cost(n) = baseCost × growthRate^n` (growthRate = 1.15)
- **10 générateurs** : Bit Miner → The Omnibus (unlockAt de 0 à 30B bits)
- **Vente inline** : bouton "Vendre X bits" dans chaque carte si `market_access` project acheté
  - Prix = 50% du coût d'achat actuel
- Optimisé : `lightUpdate()` (patch DOM) vs `fullRender()` (rebuild complet uniquement si changement structurel)
- `structSig()` détecte : owned counts | generators unlocked | multiplier passif | trade actif

### 5.3 Casino (`CasinoModule.ts`)
4 jeux accessibles par onglets, débloqués par le projet `casino_charter` :
- **🃏 Blackjack** : joueur fixe à 15, dealer joue aléatoirement, bet 50/200/500/1000
- **♠ Cartes** : 3 roulettes avec ♠ ♣ ♥ ♦ ⭐, triple = ×2 ou ×5, paire = +50%
- **🎡 Roue** : 8 secteurs (0.5× à jackpot 50×), animation CSS
- **⚡ Pikachu Rush** : tap game 10s, des éclairs ⚡ apparaissent à cliquer, score × bet × 0.2

### 5.4 Mini-jeux aléatoires (`MiniGameManager.ts`)
- Pop-up fixe en haut à droite (défini dans `phase.css`)
- Apparaît toutes les 2-5 min (aléatoire)
- 3 jeux : clic sur cible, séquence de touches, QCM de maths
- Victoire → burst ×10 BPS pendant 30s (affiché dans stats center)
- Fermeture via ✕ ou auto après résultat. Guard `isDismissing` pour éviter double-dismiss

### 5.5 Missions (`MissionsModule.ts`)
- 3 missions quotidiennes, seed basé sur la date (change chaque jour à minuit)
- **Tracking correct** :
  - Clics : `store.state.totalClicks - clicksAtStart` (fiable, pas de faux positifs passifs)
  - Bits gagnés : `totalBitsEarned` (ne baisse jamais, même si bits dépensés)
  - Générateurs : somme de tous les owned actuels
- Réclamer = ajouter les bits reward
- Persistance localStorage (`bs_missions_v1`) avec reset si nouvelle journée

### 5.6 Leaderboard (`Leaderboard.ts`)
- Entièrement local (pas de backend)
- 9 bots générés déterministiquement depuis leur nom (hash)
- Score des bots = variance autour du meilleur score du joueur (0.3× à 1.7×)
- Joueur peut modifier son pseudo
- Persistance localStorage : meilleur score (`bs_leaderboard_v1`) + nom (`bs_player_name`)

### 5.7 Projets (`ProjectSystem.ts`)
9 projets en 5 phases, débloquent des fonctionnalités (pas des multipliers) :
```
Phase 1 : Better Click Feedback, Combo Amplifier (combo 8→12)
Phase 2 : Market Access (déverrouille vente inline), Prediction Engine
Phase 3 : Casino Charter (déverrouille Casino)
Phase 4 : AI Trading, Distributed Casino
Phase 5 : Neural Synchronization, 🚀 LAUNCH THE PROTOCOL (endgame)
```
Affiche les projets disponibles + teasers (prochains à débloquer).

### 5.8 Système de Recherche (background)
- Actif en arrière-plan même si pas de UI dédiée
- RP/s = `sqrt(BPS_brut + 1) / 3`
- Technologies : passiveMultiplier, clickMultiplier, globalMultiplier, etc.
- Buffé : flush toutes les 500ms dans `GameLoop.ts` pour ne pas notifier à chaque frame RAF

### 5.9 Phases (1 à 5)
| Phase | Seuil totalBitsEarned | Titre |
|-------|----------------------|-------|
| 1 | 0 | Pirate Garage |
| 2 | 10 000 | Going Online |
| 3 | 300 000 | Corporate Attention |
| 4 | 5 000 000 | Enterprise Scale |
| 5 | 100 000 000 | Quantum Era |

Notification toast au passage de phase (click pour fermer, auto-dismiss 6s).

---

## 6. Layout

```
┌──────────────────────────────────────────────────────────┐
│  HEADER : Logo | [BITS compteur] | [💾] [🗑] | Badge Twitch │
├───────────────┬──────────────────────────┬───────────────┤
│  Colonne gauche│   Colonne centre         │  Colonne droite│
│  (280px)      │   (flexible)             │  (280px)       │
│               │                          │                │
│  Clicker ⚡   │  Générateurs (inline sell│  Projets       │
│  Stats card   │  si market_access ok)    │  Missions/jour │
│   - Total     │                          │  Leaderboard   │
│   - BPS       │  Casino (si débloqué     │                │
│   - BPC       │  par casino_charter)     │                │
│   - Multiplicateur│                      │                │
│   - Phase     │                          │                │
└───────────────┴──────────────────────────┴───────────────┘
```

- `height: calc(100vh - 64px)`, chaque colonne `overflow-y: auto`
- Pas de scroll de page — tout dans les colonnes internes
- Responsive mobile : 1 colonne, overflow visible

---

## 7. Cycle de Jeu (Boucle)

```
main.ts bootstrap:
  1. loadGame()           → lit localStorage, calcule offline earnings
  2. mountApp()           → crée le DOM, monte tous les modules
  3. startGameLoop()      → RAF 60fps : addBits(BPS × dt) + accum RP
  4. startAutoSave()      → setInterval 10s + beforeunload

Chaque RAF frame (~16ms):
  - dt = min((now - lastTime) / 1000, 1)   [cap 1s pour éviter spike]
  - store.addBits(effectiveBPS × dt)
  - rpBuffer += researchPS × dt
  - Flush RP toutes les 500ms → store.notify()

Offline (au reload) :
  - offlineMs = min(now - lastSaveTime, offlineCap)
  - earned = rawBPS × passiveMulti × globalMulti × offlineMs/1000 × 0.1 (10% efficacité)
  - Modale affichée si earned > 1 bit
```

---

## 8. Mathématiques Clés (`balance.ts`)

```typescript
// Coût d'un générateur à l'achat n :
cost(n) = baseCost × growthRate^n    (growthRate = 1.15)

// Combo clicker :
comboMultiplier = 1 + (maxCombo - 1) × (comboCount / clicksToMaxCombo)
// maxCombo = 8 par défaut, 12 après combo_amplifier project ou combo_protocol research

// Offline earnings :
earned = BPS × passiveMulti × globalMulti × offlineSecs × 0.1

// Minijeu burst :
reward = BPS_effectif × burstDurationSec × burstBpsMultiplier
//               = BPS × 30s × 10 = 300 × BPS en bits immédiats
```

---

## 9. Thème Visuel

**Palette minimaliste** inspirée de *Universal Paperclips* :
- `--bg-0: #000000` (fond principal)
- `--bg-1: #0a0a0a` (panneaux)
- `--bg-2: #141414` (cartes)
- `--accent: #ffffff` (blanc — interactions)
- `--accent2: #ff4444` (rouge — dangers, alertes)
- `--text-0: #ffffff`, `--text-1: #999999`, `--text-2: #555555`
- Typographies : `Inter` (UI), `JetBrains Mono` (chiffres/mono)

---

## 10. Variables d'Environnement (`.env.local`)

```bash
VITE_TWITCH_CLIENT_ID=xxxxxxxxxxxx    # Client ID app Twitch Developer
VITE_TWITCH_TOKEN=xxxxxxxxxxxxxx      # App Access Token
VITE_TWITCH_CHANNEL=nom_de_chaine     # Chaîne à surveiller
```

Sans ces variables, Twitch est désactivé (le jeu fonctionne normalement sans).

---

## 11. Commandes

```bash
npm run dev      # Serveur développement (hot reload)
npm run build    # Build production → dist/
npm run preview  # Prévisualiser le build
npx tsc --noEmit # Vérifier TypeScript sans builder
```

**Déploiement Vercel** : push sur `main` → déploiement automatique.

---

## 12. Historique des Sessions & État Actuel

### Session 1 (avant 2026-04-28) — v1.0
- Architecture de base : clicker, générateurs, mini-jeux, Twitch
- Système d'upgrades (stat multipliers)
- Research Lab UI

### Session 2 (2026-04-28) — v2.0
- **Upgrades → Projets** : débloquent des fonctionnalités, pas des stats
- **Research Lab UI supprimée** (système actif en background)
- **Nouveaux modules** : Casino, Trade, Puzzle
- **Thème Pikachu** (jaune #FFD700) puis refactorisé en minimaliste

### Session 3 (2026-05-04) — v2.1 (état actuel)
Depuis `PourMoi.txt` :
- ✅ Thème minimaliste black/white (Universal Paperclips style)
- ✅ Bug minijeux fermés correctement (isDismissing guard)
- ✅ **Puzzle supprimé** entièrement
- ✅ **Trade inline** : bouton "Vendre X bits" dans chaque carte générateur (visible si `market_access` acheté)
- ✅ **Casino refait** : ♠♣♥♦ pour Cartes, ⚡ Pikachu Rush (tap cibles)
- ✅ **Tout en français** (interface, labels, casino)
- ✅ **Layout sans scroll** : 3 colonnes avec scroll interne, `100vh - header`
- ✅ **Module Missions journalières** (3 missions par jour, seed quotidien)
- ✅ **Leaderboard local** (9 bots + joueur, pseudo modifiable)

**Bugs corrigés en session 3** :
1. Missions : comptage clics via `totalClicks` dans GameState (plus de faux positifs passifs)
2. Missions : date seed `getMonth()+1` (janvier = 1, pas 0)
3. CSS : `.mg-card` en double entre `main.css` et `phase.css` (carte mini-jeu en haut au lieu du bas)
4. HTML : `#twitch-badge-slot` existait 2× (header + layout) → ID dupliqué
5. Production : `market_access` absent du `structSig()` → boutons vendre n'apparaissaient pas
6. Casino : `alert()` remplacé par messages d'erreur inline (non bloquants)
7. App.ts : multiplicateur affiché = `getPassiveMultiplier()` (BPS réel)

---

## 13. Fichiers à NE PAS Modifier Sans Précaution

| Fichier | Pourquoi fragile |
|---------|-----------------|
| `balance.ts` | Changer un coût ou growthRate casse l'équilibre complet |
| `GameStore.ts` | `defaultState()` doit rester en sync avec `types.ts` |
| `types.ts` | Changer une interface = vérifier loadState() dans GameStore |
| `SaveSystem.ts` | `SAVE_KEY = 'bitstream_v1'` — changer = efface toutes les saves |
| `phase.css` | Contient les styles `.mg-card` (NE PAS re-définir dans main.css) |

---

## 14. Ce qui N'est PAS Fait (idées futures)

- Leaderboard en ligne réel (nécessiterait un backend ou service type Supabase)
- Internationalisation complète (les noms de générateurs dans balance.ts sont en anglais)
- Achievement system
- Nouvelles technologies de recherche
- Animations plus riches pour l'endgame (Phase 5)
