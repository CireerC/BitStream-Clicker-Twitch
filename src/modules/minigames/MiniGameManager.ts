import { store } from '../../core/GameStore.js';
import { BALANCE, formatNumber, formatDuration } from '../../core/balance.js';

interface MiniGame {
  title: string;
  instructions: string;
  mount(container: HTMLElement, onWin: () => void, onLose: () => void): () => void;
}

// ── Game 1: Click the target ──────────────────────────────────────────────────
const clickTargetGame: MiniGame = {
  title: '🎯 Click the Target',
  instructions: 'Click the glowing target 5 times.',
  mount(container, onWin) {
    const targets = 5;
    let clicked = 0;

    function spawnTarget(): void {
      const btn = document.createElement('button');
      btn.className = 'mg-target';
      const maxX = Math.max(container.clientWidth - 52, 10);
      const maxY = Math.max(container.clientHeight - 52, 10);
      btn.style.left = Math.random() * maxX + 'px';
      btn.style.top = Math.random() * maxY + 'px';
      container.appendChild(btn);
      btn.addEventListener('click', () => {
        btn.remove();
        if (++clicked >= targets) onWin();
        else spawnTarget();
      }, { once: true });
    }

    spawnTarget();
    return () => container.querySelectorAll('.mg-target').forEach(t => t.remove());
  },
};

// ── Game 2: Key sequence ──────────────────────────────────────────────────────
const keySequenceGame: MiniGame = {
  title: '⌨️ Key Sequence',
  instructions: 'Type the sequence shown.',
  mount(container, onWin, onLose) {
    const keys = ['A', 'S', 'D', 'F', 'J', 'K', 'L'];
    const seq = Array.from({ length: 5 }, () => keys[Math.floor(Math.random() * keys.length)]);
    let idx = 0;

    const display = document.createElement('div');
    display.className = 'mg-sequence';
    display.innerHTML = seq.map((k, i) => `<span class="mg-key" id="k${i}">${k}</span>`).join('');
    container.appendChild(display);

    function onKey(e: KeyboardEvent): void {
      if (e.key.toUpperCase() === seq[idx]) {
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

// ── Game 3: Quick math ────────────────────────────────────────────────────────
const quickMathGame: MiniGame = {
  title: '🧮 Quick Math',
  instructions: 'Tap the correct answer.',
  mount(container, onWin, onLose) {
    const a = Math.floor(Math.random() * 20) + 1;
    const b = Math.floor(Math.random() * 20) + 1;
    const answer = a + b;
    const wrongs = new Set<number>();
    while (wrongs.size < 3) {
      const w = answer + Math.floor(Math.random() * 20) - 10;
      if (w !== answer && w > 0) wrongs.add(w);
    }
    const choices = [...wrongs, answer].sort(() => Math.random() - 0.5);

    const q = document.createElement('div');
    q.className = 'mg-math';
    q.innerHTML = `
      <div class="mg-math__question">${a} + ${b} = ?</div>
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

const GAMES: MiniGame[] = [clickTargetGame, keySequenceGame, quickMathGame];

// ── Manager ───────────────────────────────────────────────────────────────────
export function startMiniGameManager(): () => void {
  let scheduleTimer = 0;
  let card: HTMLElement | null = null;
  let cleanupGame: (() => void) | null = null;

  function scheduleNext(): void {
    const [min, max] = BALANCE.minigames.intervalRange;
    scheduleTimer = window.setTimeout(triggerGame, min + Math.random() * (max - min));
  }

  function triggerGame(): void {
    if (card) return; // already showing one
    const game = GAMES[Math.floor(Math.random() * GAMES.length)];
    showCard(game);
  }

  function showCard(game: MiniGame): void {
    const el = document.createElement('div');
    el.className = 'mg-card';
    const durationSec = BALANCE.minigames.durationMs / 1000;
    let isDismissing = false;  // Prevent double-dismiss

    el.innerHTML = `
      <div class="mg-card__header">
        <span class="mg-card__title">${game.title}</span>
        <div class="mg-card__controls">
          <span class="mg-card__timer mono" id="mg-timer">${durationSec}</span>
          <button class="mg-card__close" id="mg-close" title="Skip (give up)">✕</button>
        </div>
      </div>
      <p class="mg-card__instructions">${game.instructions}</p>
      <div class="mg-card__arena" id="mg-arena"></div>
      <div class="mg-card__result" id="mg-result" style="display:none"></div>
    `;
    document.body.appendChild(el);
    card = el;

    const arena   = el.querySelector<HTMLElement>('#mg-arena')!;
    const timerEl = el.querySelector<HTMLElement>('#mg-timer')!;
    const resultEl= el.querySelector<HTMLElement>('#mg-result')!;
    const closeBtn= el.querySelector<HTMLButtonElement>('#mg-close')!;

    let remaining = durationSec;
    let resultTimer: number | null = null;
    const countdown = setInterval(() => {
      remaining--;
      timerEl.textContent = String(remaining);
      if (remaining <= 0) { clearInterval(countdown); onLose(); }
    }, 1000);

    closeBtn.addEventListener('click', () => {
      clearInterval(countdown);
      if (resultTimer !== null) clearTimeout(resultTimer);
      cleanupGame?.();
      dismiss(false);
    });

    function onWin(): void {
      clearInterval(countdown);
      cleanupGame?.();
      applyReward();
      showResult(true);
    }

    function onLose(): void {
      clearInterval(countdown);
      cleanupGame?.();
      showResult(false);
    }

    function showResult(won: boolean): void {
      arena.style.display = 'none';
      resultEl.style.display = 'flex';
      const bps = store.getEffectiveBPS();
      const reward = bps * BALANCE.minigames.burstDurationSec * BALANCE.minigames.burstBpsMultiplier;

      resultEl.innerHTML = won
        ? `<div class="mg-result mg-result--win">
             <span>🎉 +${formatNumber(reward)} bits!</span>
             <small>×${BALANCE.minigames.burstBpsMultiplier} BPS · ${formatDuration(BALANCE.minigames.burstDurationSec)}</small>
           </div>`
        : `<div class="mg-result mg-result--lose"><span>💀 Too slow!</span></div>`;

      resultTimer = window.setTimeout(() => { dismiss(true); }, 2200);
    }

    function dismiss(scheduleAfter: boolean): void {
      if (isDismissing) return;  // Already dismissing, prevent double-dismiss
      isDismissing = true;

      el.classList.add('mg-card--out');
      el.addEventListener('animationend', () => {
        el.remove();
        card = null;
        cleanupGame = null;
        if (scheduleAfter) scheduleNext();
      }, { once: true });
    }

    cleanupGame = game.mount(arena, onWin, onLose);
  }

  function applyReward(): void {
    const bps = store.getEffectiveBPS();
    const burst = bps * BALANCE.minigames.burstDurationSec * BALANCE.minigames.burstBpsMultiplier;
    store.setState(s => {
      s.bits += burst;
      s.totalBitsEarned += burst;
      s.multipliers.minigame = BALANCE.minigames.burstBpsMultiplier;
      s.multipliers.minigameEndsAt = Date.now() + BALANCE.minigames.burstDurationSec * 1000;
    });
  }

  scheduleNext();

  return () => {
    clearTimeout(scheduleTimer);
    cleanupGame?.();
    card?.remove();
  };
}
