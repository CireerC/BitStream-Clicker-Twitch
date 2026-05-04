# Changelog — BitStream

## [v2.0] — Complete Refactor: Projects + New Modules + Pikachu Theme ✅ DONE

**Release Date**: 2026-04-28  
**Status**: Production-ready, tested, ready for Vercel deployment  
**Build Size**: 65.51 KB total (16.84 KB gzipped)

### 🔄 Major Refactoring

#### Upgrades → Projects System
- **What changed**: Old stat-multiplier upgrades replaced with gameplay-focused projects
- **Why**: Stat multipliers were unintuitive; projects that unlock features are more engaging
- **How it works**:
  - 9 projects across 5 phases
  - Each project unlocks a new feature (module or gameplay enhancement)
  - Projects have prerequisite chains (must complete earlier projects first)
  - Example: "Market Access" project (Phase 2) unlocks the Trade module
  
**Projects by Phase**:
| Phase | Projects | Effect |
|-------|----------|--------|
| 1 | Better Click Feedback, Combo Amplifier | UI improvements |
| 2 | Market Access, Prediction Engine | Unlocks Trade module |
| 3 | Casino Charter, Puzzle Framework | Unlock Casino & Puzzle modules |
| 4 | AI Trading, Distributed Casino | Advanced features |
| 5 | Neural Synchronization, Launch Protocol | Endgame + theme shift |

#### Research Lab Removal
- **File deleted**: `src/modules/research/ResearchLab.ts` (entire UI module removed)
- **What kept**: Research system still runs in background for multiplier calculations
- **Impact**: Saved ~500 lines of unused code; cleaner codebase
- **Endgame**: Trigger moved from research tech to Projects endgame project

### 🎮 Three New Gameplay Modules

#### 1. Casino Module (Phase 3+)
- **Unlock**: "Casino Charter" project
- **Mechanic**: Bet Bits for multiplier rewards
- **Win Rate**: 50% chance to win
- **Bet Tiers**:
  - Safe Bet: 100 Bits → ×1.25 multiplier
  - Risky Bet: 500 Bits → ×2.0 multiplier
  - Extreme Bet: 2000 Bits → ×5.0 multiplier
- **File**: `src/modules/casino/CasinoModule.ts` (95 lines)
- **UI**: Dynamic card layout showing odds and affordable status

#### 2. Trade Module (Phase 2+)
- **Unlock**: "Market Access" project
- **Mechanic**: Sell generators at fluctuating market prices
- **Price Variance**: ±20% each session (simulates market volatility)
- **Sell Value**: 50% of base purchase cost × market multiplier
- **File**: `src/modules/trade/TradeModule.ts` (87 lines)
- **UI**: Shows owned generators, current market prices, sell buttons

#### 3. Puzzle Module (Phase 3+)
- **Unlock**: "Puzzle Framework" project
- **Mechanic**: Click blocks in a 4×4 grid for points
- **Scoring**: Each click = 10 points
- **Auto-Claim**: When score > 50, claim bonus Bits
- **File**: `src/modules/puzzle/PuzzleModule.ts` (75 lines)
- **UI**: Interactive grid with highlight effects

**Dynamic Mounting**: All three modules automatically appear when their unlock project is purchased. Hidden before unlock to reduce visual clutter.

### 🎨 Artistic Redesign: Pikachu + Quantum

#### Color Palette Overhaul
**Before (v1.0)**:
- Primary: Electric teal (#00E5C0)
- Danger: Hot orange (#FF5E3A)
- Reward: Amber gold (#FBBF24)

**After (v2.0) - Phases 1-4**:
- Primary: **Pikachu yellow** (#FFD700) ← NEW
- Danger: Hot orange (#FF5E3A) ← kept
- Reward: **Bright yellow** (#FFC000) ← NEW
- Advanced: Quantum purple (#A78BFA) ← for projects

**Phase 5 Override**:
When player reaches Phase 5 (Quantum Singularity):
- Primary accent: **Purple** (#A78BFA)
- Reward color: **Magenta** (#E879F9)
- Background stays dark for contrast
- Special animations activate

#### CSS Changes
- `src/ui/styles/variables.css`: Color palette completely updated
- `src/ui/styles/main.css`: +140 lines of new component styles (casino, trade, puzzle)
- `src/ui/styles/animations.css`: +25 lines of glitch & pulse effects
- `src/ui/styles/research.css`: Removed all tech tree UI (kept endgame modal)

#### Quantum Phase Effects (Phase 5)
- **Glitch Animation**: Stats values slightly offset + flicker (CPU-efficient)
- **Pulse Effect**: Bits counter pulses with quantum glow
- **Auto-Apply**: Triggered via `[data-phase="5"]` attribute on root element
- **Immersive**: Creates sense of "endgame has begun"

### ⚙️ Architecture Improvements

#### Single Source of Truth
```
GameStore.ts (Zustand)
  ├─ All game state in one place
  ├─ store.subscribe() listeners
  ├─ Auto-save every 10s + on beforeunload
  └─ No prop drilling
```

#### Dynamic Module System
```typescript
// When project purchased:
if (purchasedProject.unlocks === "casino") {
  mountCasino(container);
  container.style.display = "";
}
```

#### Type Safety
- `src/core/types.ts`: Updated GameState
- `UpgradeState` → `ProjectState`
- `state.upgrades[]` → `state.projects[]`
- Full TypeScript strict mode

### 📊 Build Metrics

| Metric | Value |
|--------|-------|
| JavaScript Bundle | 41.35 KB |
| JavaScript (gzipped) | 12.26 KB |
| CSS Bundle | 24.16 KB |
| CSS (gzipped) | 4.58 KB |
| **Total** | **65.51 KB** |
| **Total (gzipped)** | **16.84 KB** |
| TypeScript Files | 18 |
| Compilation Errors | 0 |
| Build Time | ~115ms |

### ✅ Quality Assurance

- [x] TypeScript compilation: Zero errors
- [x] Vite build: Successful (21 modules transformed)
- [x] Dev server: Starts on port 5176
- [x] No console warnings or errors on load
- [x] Projects system: Fully functional
- [x] Casino: All bet tiers tested
- [x] Trade: Market prices generate correctly
- [x] Puzzle: Scoring and UI working
- [x] Dynamic mounting: Modules appear/disappear correctly
- [x] Phase 5 theme: Colors and animations working
- [x] Twitch integration: Badge ready
- [x] localStorage: Save/load working
- [x] Offline production: Calculated correctly

### 📝 Files Changed

**New Files** (3):
- `src/modules/casino/CasinoModule.ts`
- `src/modules/trade/TradeModule.ts`
- `src/modules/puzzle/PuzzleModule.ts`

**Deleted Files** (2):
- `src/modules/upgrades/UpgradeSystem.ts`
- `src/modules/research/ResearchLab.ts`

**Major Updates** (8):
- `src/core/balance.ts` — Projects added, upgrades removed
- `src/core/types.ts` — GameState refactored
- `src/core/GameStore.ts` — Adjusted for new system
- `src/modules/projects/ProjectSystem.ts` — New, replaces upgrades UI
- `src/ui/App.ts` — Dynamic module mounting logic
- `src/ui/styles/variables.css` — Complete color palette change
- `src/ui/styles/main.css` — +140 lines (casino, trade, puzzle styles)
- `src/ui/styles/animations.css` — +25 lines (quantum effects)

**Documentation** (3):
- `README.md` — Completely rewritten for v2.0
- `CHANGELOG.md` — This file (comprehensive)
- `CLAUDE.md` — Project requirements (unchanged)

### 🚀 Deployment Ready

✅ Production build passes all checks  
✅ No runtime errors  
✅ Ready for Vercel deployment  
✅ See README.md for deployment steps

---

## [v1.0] — Initial Release (2025)

### Core Features
- ✓ Clicker with combo system
- ✓ 6 passive generators (exponential cost curve)
- ✓ Mini-games with burst multipliers
- ✓ Twitch integration (×1.5 bonus when live)
- ✓ localStorage persistence (8h offline production at 80% efficiency)
- ✓ Dark theme with teal accents
- ✓ 25 KB JS + 14 KB CSS (gzipped)

### Math Reference
- Cost: `baseCost × growthRate^n` (1.15× exponential)
- Generators: 5–10× tier-to-tier scaling
- Offline: `bps × time × 0.8` (8h cap)

