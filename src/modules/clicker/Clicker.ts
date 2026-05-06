import { store } from '../../core/GameStore.js';
import { BALANCE, formatNumber } from '../../core/balance.js';

export function mountClicker(container: HTMLElement): () => void {
  container.innerHTML = `
    <div class="clicker-panel">
      <div class="clicker-core">
        <button id="main-btn" class="click-btn" aria-label="Cliquer pour gagner des bits">
          <span class="click-btn__icon">⚡</span>
          <span class="click-btn__label">CLIC</span>
        </button>
      </div>
      <div class="combo-bar">
        <div class="combo-bar__fill" id="combo-fill" style="width:0%"></div>
        <span class="combo-bar__text" id="combo-text">×1.0</span>
      </div>
      <div class="clicker-stats">
        <div class="stat-row">
          <span class="stat-label">Par clic</span>
          <span class="stat-value mono" id="bpc-display">0</span>
        </div>
        <div class="stat-row" id="phase-penalty-row" style="display:none">
          <span class="stat-label clicker-penalty-label" id="phase-penalty-label">Phase</span>
        </div>
      </div>
    </div>
  `;

  const btn           = container.querySelector<HTMLButtonElement>('#main-btn')!;
  const comboFill     = container.querySelector<HTMLDivElement>('#combo-fill')!;
  const comboText     = container.querySelector<HTMLSpanElement>('#combo-text')!;
  const bpcDisplay    = container.querySelector<HTMLSpanElement>('#bpc-display')!;
  const penaltyRow    = container.querySelector<HTMLElement>('#phase-penalty-row')!;
  const penaltyLabel  = container.querySelector<HTMLElement>('#phase-penalty-label')!;

  // ── Combo state ──────────────────────────────────────────────────────────
  let comboDecayTimer = 0;

  // ── Bomb state ──────────────────────────────────────────────────────────
  let bombVisible = false;
  let bombTimeout = 0;
  let clicksSinceBomb = 0;
  let bombThreshold = nextBombThreshold();

  function nextBombThreshold(): number {
    const { bombMinClicks, bombMaxClicks } = BALANCE.clicker;
    const defused = store.getState().projects.find(p => p.id === 'bomb_defuser')?.purchased;
    const base = bombMinClicks + Math.floor(Math.random() * (bombMaxClicks - bombMinClicks));
    return defused ? base * 2 : base;
  }

  function showBomb(): void {
    bombVisible = true;
    btn.classList.add('click-btn--bomb');
    btn.querySelector<HTMLElement>('.click-btn__icon')!.textContent = '💣';
    btn.querySelector<HTMLElement>('.click-btn__label')!.textContent = 'DANGER!';
    bombTimeout = window.setTimeout(() => hideBomb(false), BALANCE.clicker.bombDurationMs);
  }

  function hideBomb(triggered: boolean): void {
    clearTimeout(bombTimeout);
    bombVisible = false;
    btn.classList.remove('click-btn--bomb');
    btn.querySelector<HTMLElement>('.click-btn__icon')!.textContent = '⚡';
    btn.querySelector<HTMLElement>('.click-btn__label')!.textContent = 'CLIC';

    if (triggered) {
      const state = store.getState();
      const loss = Math.floor(state.bits * BALANCE.clicker.bombBitLossPct);
      store.setState(s => {
        s.bits = Math.max(0, s.bits - loss);
        s.clicker.comboCount = 0;
        s.clicker.comboMultiplier = 1;
      });
      spawnFloater(btn, -loss, true);
      btn.classList.add('click-btn--boom');
      setTimeout(() => btn.classList.remove('click-btn--boom'), 400);
      renderCombo();
    }
  }

  // ── Anti-autoclicker: track recent clicks ────────────────────────────────
  const recentClicks: number[] = [];
  const CPS_WINDOW = 3000;

  function getAutoclickerPenalty(): number {
    const now = Date.now();
    while (recentClicks.length > 0 && now - recentClicks[0] > CPS_WINDOW) recentClicks.shift();
    const cps = recentClicks.length / (CPS_WINDOW / 1000);
    const limit = BALANCE.clicker.cpsLimit;
    return cps <= limit ? 1 : limit / cps;
  }

  // ── Main click handler ───────────────────────────────────────────────────
  function handleClick(e: MouseEvent | TouchEvent): void {
    if (bombVisible) {
      hideBomb(true);
      return;
    }

    recentClicks.push(Date.now());
    const penalty = getAutoclickerPenalty();
    const bpc = store.getEffectiveBPC() * penalty;

    store.addBits(bpc);
    store.incrementClicks();

    spawnFloater(btn, bpc, false);
    btn.classList.remove('click-btn--pop');
    void btn.offsetWidth;
    btn.classList.add('click-btn--pop');

    updateCombo();
    spawnRipple(btn, e);

    // Bomb check
    clicksSinceBomb++;
    if (clicksSinceBomb >= bombThreshold) {
      clicksSinceBomb = 0;
      bombThreshold = nextBombThreshold();
      showBomb();
    }
  }

  function updateCombo(): void {
    const now = Date.now();
    clearTimeout(comboDecayTimer);

    store.setState(s => {
      const elapsed = now - s.clicker.lastClickTime;
      if (elapsed <= BALANCE.clicker.comboWindowMs) {
        s.clicker.comboCount = Math.min(s.clicker.comboCount + 1, BALANCE.clicker.clicksToMaxCombo);
      } else {
        s.clicker.comboCount = 1;
      }
      s.clicker.lastClickTime = now;
      const ratio = s.clicker.comboCount / BALANCE.clicker.clicksToMaxCombo;
      s.clicker.comboMultiplier = 1 + (store.getMaxCombo() - 1) * Math.min(ratio, 1);
    });

    renderCombo();

    comboDecayTimer = window.setTimeout(() => {
      store.setState(s => { s.clicker.comboCount = 0; s.clicker.comboMultiplier = 1; });
      renderCombo();
    }, BALANCE.clicker.comboDecayMs);
  }

  function renderCombo(): void {
    const { comboCount, comboMultiplier } = store.getState().clicker;
    const maxCombo = store.getMaxCombo();
    const pct = (comboCount / BALANCE.clicker.clicksToMaxCombo) * 100;
    comboFill.style.width = pct.toFixed(1) + '%';
    comboText.textContent = `×${comboMultiplier.toFixed(1)}`;
    // Color combo bar based on phase (warns player)
    const phase = store.getCurrentPhase();
    comboFill.style.opacity = phase >= 3 ? '0.5' : '1';
    void maxCombo; // used indirectly via store
  }

  function spawnFloater(anchor: HTMLElement, amount: number, isBomb: boolean): void {
    const el = document.createElement('div');
    el.className = isBomb ? 'click-floater click-floater--bomb' : 'click-floater';
    el.textContent = (isBomb ? '' : '+') + formatNumber(amount);
    const rect = anchor.getBoundingClientRect();
    el.style.left = rect.left + rect.width / 2 + (Math.random() - 0.5) * 60 + 'px';
    el.style.top  = rect.top - 10 + 'px';
    document.body.appendChild(el);
    el.addEventListener('animationend', () => el.remove(), { once: true });
  }

  function spawnRipple(btn: HTMLButtonElement, e: MouseEvent | TouchEvent): void {
    const ripple = document.createElement('span');
    ripple.className = 'click-ripple';
    const rect = btn.getBoundingClientRect();
    const clientX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
    const clientY = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;
    ripple.style.left = clientX - rect.left + 'px';
    ripple.style.top  = clientY - rect.top  + 'px';
    btn.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove(), { once: true });
  }

  function render(): void {
    bpcDisplay.textContent = formatNumber(store.getEffectiveBPC());

    // Show phase penalty label in phases 3+
    const phase = store.getCurrentPhase();
    const scale = store.getClickerPhaseScale();
    if (phase >= 3) {
      penaltyRow.style.display = '';
      const pct = Math.round(scale * 100);
      penaltyLabel.textContent = `Clicker: ${pct}% (phase ${phase})`;
    } else {
      penaltyRow.style.display = 'none';
    }
  }

  btn.addEventListener('click', handleClick);
  const unsub = store.subscribe(render);
  render();

  return () => {
    unsub();
    clearTimeout(comboDecayTimer);
    clearTimeout(bombTimeout);
  };
}
