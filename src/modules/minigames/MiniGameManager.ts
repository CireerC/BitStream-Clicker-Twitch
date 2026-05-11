import { store } from '../../core/GameStore.js';
import { formatNumber, formatDuration } from '../../core/balance.js';

// ── Difficulty tiers ──────────────────────────────────────────────────────────
// Phase 1-2 → Normal, Phase 3-4 → Hard, Phase 5 → Extreme
const DIFFICULTY = {
  normal:  { label: '',           color: '',          durationSec: 15, burstMult: 4,  burstSec: 20, targets: 5,  seqLen: 5,  lossPct: 0.02 },
  hard:    { label: '⚡ HARD',     color: '#ff9900',   durationSec: 11, burstMult: 7,  burstSec: 25, targets: 8,  seqLen: 7,  lossPct: 0.03 },
  extreme: { label: '💀 EXTREME',  color: '#ff4444',   durationSec: 8,  burstMult: 12, burstSec: 30, targets: 12, seqLen: 9,  lossPct: 0.05 },
} as const;

type Diff = typeof DIFFICULTY[keyof typeof DIFFICULTY];

function getDifficulty(): Diff {
  const phase = store.getCurrentPhase();
  if (phase >= 5) return DIFFICULTY.extreme;
  if (phase >= 3) return DIFFICULTY.hard;
  return DIFFICULTY.normal;
}

// ── Interval (2.5–6 min) ──────────────────────────────────────────────────────
const INTERVAL_RANGE: [number, number] = [150_000, 360_000];

interface MiniGame {
  title: string;
  mount(container: HTMLElement, diff: Diff, onWin: () => void, onLose: () => void): () => void;
}

// ── Jeu 1 : Clique les cibles ─────────────────────────────────────────────────
const clickTargetGame: MiniGame = {
  title: '🎯 Cibles',
  mount(container, diff, onWin) {
    let clicked = 0;
    const total = diff.targets;

    function spawnTarget(): void {
      const btn = document.createElement('button');
      btn.className = 'mg-target';
      const maxX = Math.max(container.clientWidth  - 52, 10);
      const maxY = Math.max(container.clientHeight - 52, 10);
      btn.style.left = Math.random() * maxX + 'px';
      btn.style.top  = Math.random() * maxY + 'px';
      // Hard+ targets shrink
      if (diff.targets > 5) {
        const s = diff.targets > 8 ? 28 : 36;
        btn.style.width  = s + 'px';
        btn.style.height = s + 'px';
      }
      container.appendChild(btn);
      btn.addEventListener('click', () => {
        btn.remove();
        if (++clicked >= total) onWin();
        else spawnTarget();
      }, { once: true });
    }

    spawnTarget();
    return () => container.querySelectorAll('.mg-target').forEach(t => t.remove());
  },
};

// ── Jeu 2 : Séquence de touches ───────────────────────────────────────────────
const keySequenceGame: MiniGame = {
  title: '⌨️ Séquence',
  mount(container, diff, onWin, onLose) {
    const keys = ['A', 'S', 'D', 'F', 'J', 'K', 'L'];
    const seq = Array.from({ length: diff.seqLen }, () => keys[Math.floor(Math.random() * keys.length)]);
    let idx = 0;

    const display = document.createElement('div');
    display.className = 'mg-sequence';
    display.innerHTML = seq.map((k, i) => `<span class="mg-key" id="k${i}">${k}</span>`).join('');
    container.appendChild(display);

    function onKey(e: KeyboardEvent): void {
      const pressed = e.key.toUpperCase();
      if (!keys.includes(pressed)) return; // ignore Space, arrows, etc.
      if (pressed === seq[idx]) {
        display.querySelector<HTMLElement>(`#k${idx}`)?.classList.add('mg-key--hit');
        if (++idx >= seq.length) onWin();
      } else {
        onLose();
      }
    }

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  },
};

// ── Jeu 3 : Calcul rapide ─────────────────────────────────────────────────────
const quickMathGame: MiniGame = {
  title: '🧮 Calcul',
  mount(container, diff, onWin, onLose) {
    // Hard+ uses multiplication
    const usesMult = diff.targets > 5;
    let a: number, b: number, answer: number;
    if (usesMult) {
      a = Math.floor(Math.random() * 12) + 2;
      b = Math.floor(Math.random() * 12) + 2;
      answer = a * b;
    } else {
      a = Math.floor(Math.random() * 20) + 1;
      b = Math.floor(Math.random() * 20) + 1;
      answer = a + b;
    }

    const wrongs = new Set<number>();
    while (wrongs.size < 3) {
      const delta = Math.floor(Math.random() * (usesMult ? 20 : 15)) - (usesMult ? 10 : 7);
      const w = answer + delta;
      if (w !== answer && w > 0) wrongs.add(w);
    }
    const choices = [...wrongs, answer].sort(() => Math.random() - 0.5);

    const q = document.createElement('div');
    q.className = 'mg-math';
    q.innerHTML = `
      <div class="mg-math__question">${a} ${usesMult ? '×' : '+'} ${b} = ?</div>
      <div class="mg-math__choices">
        ${choices.map(c => `<button class="mg-choice" data-val="${c}">${c}</button>`).join('')}
      </div>
    `;
    container.appendChild(q);

    q.addEventListener('click', (e) => {
      const btn = (e.target as HTMLElement).closest<HTMLElement>('[data-val]');
      if (!btn) return;
      if (Number(btn.dataset.val) === answer) onWin(); else onLose();
    });

    return () => {};
  },
};

// ── Jeu 4 (Extreme only) : Double cible chronométrée ─────────────────────────
const rapidDoubleGame: MiniGame = {
  title: '⚡ Double Frappe',
  mount(container, diff, onWin, onLose) {
    let phase = 0; // 0 = waiting for first, 1 = waiting for second
    let firstTarget: HTMLElement | null = null;

    function spawnPair(): void {
      container.querySelectorAll('.mg-target').forEach(t => t.remove());

      const t1 = document.createElement('button');
      const t2 = document.createElement('button');
      t1.className = 'mg-target mg-target--primary';
      t2.className = 'mg-target mg-target--secondary';

      const maxX = Math.max(container.clientWidth  - 44, 10);
      const maxY = Math.max(container.clientHeight - 44, 10);
      t1.style.left = Math.random() * maxX + 'px';
      t1.style.top  = Math.random() * maxY + 'px';
      t2.style.left = Math.random() * maxX + 'px';
      t2.style.top  = Math.random() * maxY + 'px';
      t2.style.opacity = '0.2';
      t2.style.pointerEvents = 'none';

      container.appendChild(t1);
      container.appendChild(t2);
      firstTarget = t1;

      t1.addEventListener('click', () => {
        t1.remove();
        t2.style.opacity = '1';
        t2.style.pointerEvents = '';
        phase = 1;
        t2.addEventListener('click', () => {
          t2.remove();
          if (++phase >= diff.targets / 2 + 1) onWin();
          else { phase = 0; spawnPair(); }
        }, { once: true });

        // Time limit for second click
        setTimeout(() => {
          if (t2.isConnected) { t2.remove(); onLose(); }
        }, 1200);
      }, { once: true });
    }

    spawnPair();
    return () => container.querySelectorAll('.mg-target').forEach(t => t.remove());
  },
};

const NORMAL_GAMES: MiniGame[] = [clickTargetGame, keySequenceGame, quickMathGame];
const HARD_GAMES:   MiniGame[] = [clickTargetGame, keySequenceGame, quickMathGame];
const EXTREME_GAMES: MiniGame[] = [clickTargetGame, keySequenceGame, quickMathGame, rapidDoubleGame];

function pickGame(diff: Diff): MiniGame {
  const pool = diff === DIFFICULTY.extreme ? EXTREME_GAMES
    : diff === DIFFICULTY.hard   ? HARD_GAMES
    : NORMAL_GAMES;
  return pool[Math.floor(Math.random() * pool.length)];
}

// ── Manager ───────────────────────────────────────────────────────────────────
export function startMiniGameManager(): () => void {
  let scheduleTimer = 0;
  let card: HTMLElement | null = null;
  let cleanupGame: (() => void) | null = null;

  function scheduleNext(): void {
    const [min, max] = INTERVAL_RANGE;
    scheduleTimer = window.setTimeout(triggerGame, min + Math.random() * (max - min));
  }

  function triggerGame(): void {
    if (card) return;
    const diff = getDifficulty();
    showCard(pickGame(diff), diff);
  }

  function showCard(game: MiniGame, diff: Diff): void {
    const el = document.createElement('div');
    el.className = 'mg-card';
    if ((diff as Diff).label) el.classList.add('mg-card--hard');
    if (diff === DIFFICULTY.extreme) el.classList.add('mg-card--extreme');

    const durationSec = diff.durationSec;
    const rewardBits  = store.getEffectiveBPS() * diff.burstSec * diff.burstMult;
    let isDismissing = false;

    const diffBadge = (diff as Diff).label
      ? `<span class="mg-diff-badge" style="color:${(diff as Diff).color}">${(diff as Diff).label}</span>`
      : '';

    el.innerHTML = `
      <div class="mg-card__header">
        <span class="mg-card__title">${game.title} ${diffBadge}</span>
        <div class="mg-card__controls">
          <span class="mg-card__timer mono" id="mg-timer">${durationSec}</span>
          <button class="mg-card__close" id="mg-close" title="Abandonner">✕</button>
        </div>
      </div>
      <p class="mg-card__instructions">Récompense : <strong class="mono">+${formatNumber(rewardBits)} bits</strong> · ×${diff.burstMult} BPS · ${formatDuration(diff.burstSec)}</p>
      <div class="mg-card__arena" id="mg-arena"></div>
      <div class="mg-card__result" id="mg-result" style="display:none"></div>
    `;
    document.body.appendChild(el);
    card = el;

    const arena    = el.querySelector<HTMLElement>('#mg-arena')!;
    const timerEl  = el.querySelector<HTMLElement>('#mg-timer')!;
    const resultEl = el.querySelector<HTMLElement>('#mg-result')!;
    const closeBtn = el.querySelector<HTMLButtonElement>('#mg-close')!;

    let remaining = durationSec;
    let resultTimer: number | null = null;

    const countdown = setInterval(() => {
      remaining--;
      timerEl.textContent = String(remaining);
      if (remaining <= 3) timerEl.style.color = 'var(--accent2)';
      if (remaining <= 0) { clearInterval(countdown); onLose(); }
    }, 1000);

    closeBtn.addEventListener('click', () => {
      clearInterval(countdown);
      if (resultTimer !== null) clearTimeout(resultTimer);
      cleanupGame?.();
      dismiss(true);
    });

    function onWin(): void {
      clearInterval(countdown);
      cleanupGame?.();
      applyReward(diff);
      showResult(true, diff);
    }

    function onLose(): void {
      clearInterval(countdown);
      cleanupGame?.();
      applyLossPenalty(diff);
      showResult(false, diff);
    }

    function showResult(won: boolean, d: Diff): void {
      arena.style.display = 'none';
      resultEl.style.display = 'flex';
      const bps   = store.getEffectiveBPS();
      const reward = bps * d.burstSec * d.burstMult;
      const loss  = Math.floor(store.getState().bits * d.lossPct);

      resultEl.innerHTML = won
        ? `<div class="mg-result mg-result--win">
             <span>🎉 +${formatNumber(reward)} bits !</span>
             <small>×${d.burstMult} BPS · ${formatDuration(d.burstSec)}</small>
           </div>`
        : `<div class="mg-result mg-result--lose"><span>💀 Raté ! −${formatNumber(loss)} bits</span></div>`;

      resultTimer = window.setTimeout(() => dismiss(true), 2200);
    }

    function dismiss(scheduleAfter: boolean): void {
      if (isDismissing) return;
      isDismissing = true;
      el.classList.add('mg-card--out');
      let removed = false;
      const doRemove = (): void => {
        if (removed) return;
        removed = true;
        el.remove();
        card = null;
        cleanupGame = null;
        if (scheduleAfter) scheduleNext();
      };
      el.addEventListener('animationend', doRemove, { once: true });
      window.setTimeout(doRemove, 400);
    }

    cleanupGame = game.mount(arena, diff, onWin, onLose);
  }

  function applyReward(diff: Diff): void {
    const bps   = store.getEffectiveBPS();
    const burst = bps * diff.burstSec * diff.burstMult;
    store.setState(s => {
      s.bits += burst;
      s.totalBitsEarned += burst;
      s.multipliers.minigame        = diff.burstMult;
      s.multipliers.minigameEndsAt  = Date.now() + diff.burstSec * 1000;
    });
  }

  function applyLossPenalty(diff: Diff): void {
    const loss = Math.floor(store.getState().bits * diff.lossPct);
    if (loss > 0) store.setState(s => { s.bits = Math.max(0, s.bits - loss); });
  }

  scheduleNext();

  return () => {
    clearTimeout(scheduleTimer);
    cleanupGame?.();
    card?.remove();
  };
}
