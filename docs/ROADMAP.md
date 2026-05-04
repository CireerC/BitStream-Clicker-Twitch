# 🚀 Future Roadmap (v2.1+)

## Planned Features

### Short Term (v2.1)
- [ ] **Prestige/Reset System** — Start fresh with bonuses for meta-progression
- [ ] **Achievements** — Badges for milestones
- [ ] **Theme Switcher** — Change app skin via CSS without touching code

### Medium Term (v2.2)
- [ ] **Advanced Trading** — Buy/sell orders, limit prices
- [ ] **Casino Events** — Jackpot events, multiplier bonuses
- [ ] **Leaderboards** — Global stats (if backend added)
- [ ] **Sound Effects** — Optional, can be toggled

### Long Term (v2.3+)
- [ ] **Guilds/Clans** — Multiplayer elements
- [ ] **Real-time Multiplayer** — Via WebSockets
- [ ] **Mobile App** — Dedicated native app
- [ ] **Analytics** — Track player behavior

---

## Improvement Ideas

### Theme System (v2.1)
```
Currently: Pikachu yellow (Phase 1-4) + Quantum purple (Phase 5)

Future: Allow players to switch themes via dropdown
├─ Pikachu (default)
├─ Neon (electric colors)
├─ Dark Mode (minimal)
├─ Cyberpunk (futuristic)
└─ Custom (user-defined CSS)

Implementation:
  1. Add theme selector in UI
  2. Store preference in localStorage
  3. Swap CSS variables on theme change
  4. No need to edit code - just CSS!
```

### Other Ideas
- [ ] Boss battles (special events)
- [ ] Crafting system (combine resources)
- [ ] Territory control (real-time PvP-lite)
- [ ] Daily missions (resets, streak bonuses)
- [ ] Seasonal events (limited-time features)

---

## Known Issues

None currently. v2.0 is production-stable.

---

## Performance Targets (v2.2)

| Metric | Target | Current |
|--------|--------|---------|
| Build Time | <100ms | ~115ms ✓ |
| JS Bundle | <40 KB | 41.35 KB ✓ |
| CSS Bundle | <25 KB | 24.16 KB ✓ |
| FCP | <1s | <500ms ✓ |
| TTI | <2s | <1s ✓ |

---

**Last updated**: 2026-04-28  
**Maintained by**: BitStream Team
