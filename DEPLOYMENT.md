# v2.0 Deployment Checklist ✅

## Pre-Deployment
- [x] TypeScript compilation passes
- [x] Vite build succeeds (21 modules, 65.5 KB total)
- [x] Dev server starts (`npm run dev`)
- [x] No console errors on initial load
- [x] All CSS variables defined
- [x] Projects system functional
- [x] Casino module works
- [x] Trade module works
- [x] Puzzle module works
- [x] Dynamic module mounting works
- [x] Phase 5 quantum theme tested
- [x] README.md updated
- [x] CHANGELOG.md updated

## Deployment Steps

### 1. Local Testing (Before Deploy)
```bash
npm run build     # verify production build
npm run preview   # run production build locally
# Test at http://localhost:5173 or similar
```

### 2. Deploy to Vercel
```bash
# Option A: Via CLI
npm i -g vercel
vercel

# Option B: Via GitHub
# 1. Push to GitHub
# 2. Go to https://vercel.com/new
# 3. Import repository
# 4. Add env vars (below)
# 5. Deploy
```

### 3. Environment Variables (Vercel Project Settings)
```
VITE_TWITCH_CLIENT_ID = your_oauth_client_id
VITE_TWITCH_CHANNEL = your_channel_name
```

### 4. After Deploy
- Visit deployed URL
- Test clicker works
- Test generators work
- Test projects panel
- Go to Phase 3 to unlock Casino (cheat bits in console if needed)
- Verify Twitch badge appears when stream is live (if env vars set)

## Game State Commands (Dev Console)

Test in browser console (`F12 → Console`):

```javascript
// Add bits
window.store.addBits(100000)

// Set phase (1-5)
window.store.setState(s => { s.currentPhase = 5 })

// Unlock all projects
window.store.setState(s => {
  s.projects.forEach(p => { p.purchased = true })
})

// Check current state
window.store.getState()
```

## File Manifest (v2.0)

### New Files Added
- `src/modules/casino/CasinoModule.ts` — Betting system
- `src/modules/trade/TradeModule.ts` — Market selling
- `src/modules/puzzle/PuzzleModule.ts` — Block mini-game
- `DEPLOYMENT.md` — This file

### Files Deleted
- `src/modules/upgrades/UpgradeSystem.ts` — Replaced by ProjectSystem
- `src/modules/research/ResearchLab.ts` — UI removed (system stays)

### Major Updates
- `src/core/balance.ts` — Projects added, upgrades removed
- `src/core/types.ts` — Upgrades → Projects in GameState
- `src/modules/projects/ProjectSystem.ts` — New, replaces upgrades UI
- `src/ui/App.ts` — Dynamic module mounting added
- `src/ui/styles/variables.css` — Color palette changed (Pikachu yellow)
- `src/ui/styles/main.css` — Added casino/trade/puzzle styles
- `src/ui/styles/animations.css` — Added quantum glitch effects
- `src/ui/styles/research.css` — Removed UI, kept endgame modal
- `README.md` — Complete rewrite for v2.0
- `CHANGELOG.md` — Added v2.0 section

## Rollback Plan

If issues arise after deploy:

1. **Revert in Vercel**: 
   - Go to Deployments tab
   - Click "Redeploy" on previous working commit

2. **Fix Locally**:
   ```bash
   git log --oneline
   git revert <commit>
   npm run build
   vercel
   ```

3. **Emergency Contacts**:
   - Check TypeScript errors: `npm run build`
   - Check runtime errors: Browser console (F12)
   - Check CSS: Inspect element in DevTools

## Success Criteria

✅ **v2.0 is deployable when:**
- Build completes without errors
- Dev preview runs without console errors
- Clicker responds to clicks
- Generators purchase and produce bits
- Projects unlock modules (when purchased)
- Casino/Trade/Puzzle appear after unlocking
- Twitch badge (if env vars set)

---

**Status**: All criteria met. Ready for production. 🚀
