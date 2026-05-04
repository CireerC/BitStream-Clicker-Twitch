# 📚 BitStream v2.0 — Documentation Index

## Quick Links

| Document | Purpose |
|----------|---------|
| **[VERCEL_DEPLOY.md](VERCEL_DEPLOY.md)** | 🚀 Deploy to Vercel (3 easy options) |
| **[QUICKREF.md](QUICKREF.md)** | ⚡ Quick reference & customization |
| **[ROADMAP.md](ROADMAP.md)** | 🗺️ Future features & improvements |

## For General Info

👉 **[README.md](../README.md)** — Quick start & overview (at root)  
👉 **[CHANGELOG.md](../CHANGELOG.md)** — Detailed v2.0 changes (at root)  

---

## Documentation Map

```
Root (/)
├── README.md              ← START HERE
├── CHANGELOG.md           ← What changed in v2.0
├── CLAUDE.md              ← Architecture notes
└── docs/
    ├── VERCEL_DEPLOY.md   ← How to deploy
    ├── QUICKREF.md        ← Commands & customization
    └── INDEX.md           ← This file

src/
├── core/                  ← Game state & balance
├── modules/               ← Game features
├── integrations/          ← Twitch API
└── ui/                    ← UI components & styles
```

---

## How to Use This Documentation

**I just want to play locally:**
1. Read [README.md](../README.md) Quick Start section
2. Run: `npm install && npm run dev`

**I want to deploy:**
1. Read [VERCEL_DEPLOY.md](VERCEL_DEPLOY.md)
2. Choose Option 1 (CLI), 2 (GitHub), or 3 (Drag-Drop)

**I need to customize the game:**
1. Check [QUICKREF.md](QUICKREF.md) → Customization section
2. Edit `src/core/balance.ts` for difficulty
3. Edit `src/ui/styles/variables.css` for colors

**I want to understand the code:**
1. Read [CLAUDE.md](../CLAUDE.md) → Architecture
2. Start in `src/core/GameStore.ts`
3. Then explore modules in `src/modules/`

---

**Questions?** Check the relevant doc above. 📖
