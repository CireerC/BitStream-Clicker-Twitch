# BitStream — Idle Game v2.0 ✨

A production-ready browser incremental game with **Pikachu yellow theme** and **dynamic modules** (Casino, Trade, Puzzle).

**Status**: ✅ Complete & tested | **Build**: 65.5 KB (16.84 KB gzipped)

---

## Quick Start

```bash
npm install
npm run dev          # → http://localhost:5176
```

Play locally, then **[Deploy to Vercel](VERCEL_DEPLOY.md)** (2 min setup).

---

## Game Features

### 🎮 Core Mechanics
- **Clicker**: Click for Bits + combo multiplier (up to 8×)
- **Generators**: 6 passive producers (exponential cost curve)
- **Mini-games**: Random challenges every 2-5 min → burst ×10 BPS for 30s
- **Projects**: 9 gameplay unlocks across 5 phases
- **Twitch**: ×1.5 multiplier when your stream is live
- **Offline**: 8h production at 80% efficiency

### 🎰 New Modules (v2.0)
| Module | Phase | Unlock | Mechanic |
|--------|-------|--------|----------|
| **Casino** | 3 | "Casino Charter" | Bet Bits for multipliers (50% win) |
| **Trade** | 2 | "Market Access" | Sell generators at market prices |
| **Puzzle** | 3 | "Puzzle Framework" | Click blocks for point bonuses |

### 🎨 Theme
- **Phases 1-4**: Pikachu yellow (#FFD700) + bright accents
- **Phase 5**: Quantum purple (#A78BFA) + glitch animations + endgame feel

---

## 📁 Project Structure

```
src/
├── core/
│   ├── GameStore.ts       ← Single source of truth
│   ├── balance.ts         ← All game constants
│   └── types.ts           ← TypeScript definitions
├── modules/
│   ├── clicker/           ← Click + combo
│   ├── production/        ← Generators + BPS
│   ├── projects/          ← Gameplay unlocks (replaces upgrades)
│   ├── casino/            ← Betting system (NEW v2.0)
│   ├── trade/             ← Market selling (NEW v2.0)
│   ├── puzzle/            ← Block mini-game (NEW v2.0)
│   └── [other modules]
├── integrations/
│   └── twitch/            ← Live badge + multiplier
└── ui/
    ├── App.ts             ← Main layout
    ├── Header.ts          ← Stats display
    └── styles/            ← CSS (colors changed to yellow)
```

---

## 🚀 Deployment

### 1. Test Locally
```bash
npm run build       # Build for production
npm run preview     # Test production build locally
```

### 2. Deploy to Vercel (Choose One)

**Option A: CLI (Fastest)**
```bash
npm install -g vercel
vercel --prod
```

**Option B: GitHub + Vercel Dashboard**
- Push to GitHub: `git push origin main`
- Go to vercel.com/new → import repo
- Vercel auto-detects Vite configuration
- Deploy!

**Option C: Full Guide**
👉 See **[VERCEL_DEPLOY.md](VERCEL_DEPLOY.md)** (step-by-step with screenshots)

### 3. Verify Deployment ✅
```
✓ Clicker responds
✓ Generators produce Bits
✓ Projects unlock
✓ Casino/Trade/Puzzle appear
✓ Bits save correctly
✓ (Optional) Twitch badge shows when live
```

---

## ⚙️ Configuration

### Add Twitch Integration (Optional)
If you want the ×1.5 live multiplier in production:

**In Vercel Settings → Environment Variables, add:**
```env
VITE_TWITCH_CLIENT_ID=your_oauth_client_id
VITE_TWITCH_CHANNEL=your_channel_name
```

**Get credentials:**
1. Go to https://dev.twitch.tv/console/apps
2. Create new application
3. Copy **Client ID**
4. Set channel name (e.g., "ninja" without @)

---

## 🎓 How It Works

### State Management
```
GameStore (Zustand)
    ↓
store.subscribe() listeners
    ↓
UI re-renders automatically
    ↓
localStorage save (every 10s)
```

### Projects System
- When you purchase a project, it unlocks a feature
- Example: Buy "Casino Charter" → Casino module appears
- Projects have prerequisites (must complete earlier ones first)
- Phase gates: Can't buy Phase 3 projects until Phase 3 reached

### Math Reference
- **Cost**: `baseCost × growthRate^n` (exponential)
- **Generators**: 5-10× tier scaling (each tier worth more)
- **Offline**: `bps × elapsed_seconds × 0.8` (8h cap)

---

## 📊 Build Stats

| Metric | Size |
|--------|------|
| JavaScript | 41.35 KB |
| JavaScript (gzipped) | 12.26 KB |
| CSS | 24.16 KB |
| CSS (gzipped) | 4.58 KB |
| **Total** | **65.51 KB** |
| **Total (gzipped)** | **16.84 KB** |

---

## 🎨 Customization

### Edit Game Balance
All constants in `src/core/balance.ts`:
```typescript
// Make game easier/harder
const growthRate = 1.15;  // Cost multiplier (↑ = harder)
const baseBps = [2, 5, 10, 20, ...];  // Generator output
```

Changes apply immediately with `npm run dev`.

### Change Colors
`src/ui/styles/variables.css`:
```css
--accent: #ffd700;    /* Pikachu yellow */
--gold: #ffc000;      /* Bright yellow */
--accent3: #a78bfa;   /* Quantum purple */
```

---

## 📝 Documentation

- **[docs/VERCEL_DEPLOY.md](docs/VERCEL_DEPLOY.md)** — Complete Vercel deployment guide (3 options)
- **[docs/QUICKREF.md](docs/QUICKREF.md)** — Customization & quick reference
- **[CHANGELOG.md](CHANGELOG.md)** — Detailed v2.0 changes + what was refactored
- **[CLAUDE.md](CLAUDE.md)** — Project requirements & architecture notes
- **[docs/INDEX.md](docs/INDEX.md)** — Documentation map

---

## 🐛 Troubleshooting

### Build fails locally
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Dev server won't start
Port 5176 in use? Vercel will try another port automatically.

### Twitch badge doesn't show
- Check env vars in Vercel Settings
- Verify your stream is actually live on Twitch
- Check browser console for API errors

---

## 🚀 Next Steps (v2.1+)

- [ ] Prestige/reset mechanic
- [ ] Achievements system  
- [ ] More mini-game types
- [ ] Advanced trading
- [ ] Leaderboards
- [ ] Sound effects

---

## License

MIT — Use, modify, fork freely.

---

**Ready to deploy?** 👉 [VERCEL_DEPLOY.md](VERCEL_DEPLOY.md) has 3 easy options.


