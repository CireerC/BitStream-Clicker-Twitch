import { store } from '../../core/GameStore.js';
import { formatNumber } from '../../core/balance.js';

const GAME_DURATION   = 15;
const TARGET_LIFETIME = 1400;
const BOMB_LIFETIME   = 1200;   // bombs disappear faster
const SPAWN_INTERVAL  = 500;
const SPAWN_CHANCE    = 0.85;
const BOMB_CHANCE     = 0.18;   // ~18% of spawns are bombs
const BOMB_BET_LOSS   = 0.12;   // clicking a bomb costs 12% of bet

// Points per hit based on target size:
//   small (≤ 28px) → 3 pts, medium (≤ 42px) → 2 pts, large → 1 pt
function pointsForSize(size: number): number {
  if (size <= 28) return 3;
  if (size <= 42) return 2;
  return 1;
}

// HIGH RISK / HIGH REWARD payout formula:
//   returnMult = max(0, (points - SCORE_THRESHOLD) / SCORE_DIVISOR)
//   totalReturn = bet × returnMult × store.getModuleMultiplier()
//
// Breakpoints (without module upgrades, moduleMult = 1):
//   < 10 pts  : 0× (lose entire bet)
//     25 pts  : 1.0× (break even)
//     40 pts  : 2.0× (win +100%)
//     55 pts  : 3.0× (win +200%)
//
// With max module upgrades (moduleMult ≈ 3.8):
//     25 pts  : 3.8× (win +280%)
//     40 pts  : 7.6× (win +660%)
const SCORE_THRESHOLD = 10;
const SCORE_DIVISOR   = 15;

export function mountAimTrainer(container: HTMLElement): () => void {
  let gameActive = false;
  let points = 0;        // weighted score (not raw hit count)
  let hits = 0;          // raw hit counter for display
  let timeLeft = GAME_DURATION;
  let spawnInt = 0;
  let timerInt = 0;
  const activeTargets = new Set<HTMLElement>();

  container.innerHTML = `
    <div class="aimtrainer-panel">
      <h2 class="panel-title">🎯 Aim Trainer</h2>
      <div class="aim-hud">
        <span class="aim-hud__item">⏱ <span id="aim-timer">${GAME_DURATION}</span>s</span>
        <span class="aim-hud__item">🎯 <span id="aim-hits">0</span> hits</span>
        <span class="aim-hud__item">⭐ <span id="aim-score">0</span> pts</span>
        <span class="aim-hud__item aim-bet-live" id="aim-bet-live" style="display:none">
          Mise : <span id="aim-bet-label" class="mono">-</span>
        </span>
      </div>
      <div class="aim-field" id="aim-field">
        <div class="aim-hint" id="aim-hint">Petites cibles = plus de points !</div>
      </div>
      <div class="aim-controls">
        <div class="bet-wrap">
          <div class="bet-quicks">
            <button class="bet-quick" data-pct="10">10%</button>
            <button class="bet-quick" data-pct="25">25%</button>
            <button class="bet-quick" data-pct="50">50%</button>
            <button class="bet-quick" data-pct="100">MAX</button>
          </div>
          <input type="number" id="aim-bet" class="bet-input" value="100" min="1">
        </div>
        <button class="casino-btn" id="aim-start">🎯 Lancer la session</button>
      </div>
      <div id="aim-result" class="aim-result" style="display:none"></div>
    </div>
  `;

  const field      = container.querySelector<HTMLElement>('#aim-field')!;
  const timerEl    = container.querySelector<HTMLElement>('#aim-timer')!;
  const hitsEl     = container.querySelector<HTMLElement>('#aim-hits')!;
  const scoreEl    = container.querySelector<HTMLElement>('#aim-score')!;
  const startBtn   = container.querySelector<HTMLButtonElement>('#aim-start')!;
  const betInput   = container.querySelector<HTMLInputElement>('#aim-bet')!;
  const resultEl   = container.querySelector<HTMLElement>('#aim-result')!;
  const betLiveEl  = container.querySelector<HTMLElement>('#aim-bet-live')!;
  const betLabelEl = container.querySelector<HTMLElement>('#aim-bet-label')!;
  const hintEl     = container.querySelector<HTMLElement>('#aim-hint')!;

  container.querySelectorAll<HTMLElement>('.bet-quick').forEach(btn => {
    btn.addEventListener('click', () => {
      const pct = parseInt(btn.dataset.pct || '100');
      const max = Math.floor(store.getState().bits);
      betInput.value = String(Math.max(1, Math.floor(max * pct / 100)));
    });
  });

  function getBet(): number {
    return Math.max(1, parseInt(betInput.value) || 1);
  }

  function spawnTarget(): void {
    if (!gameActive) return;

    // Randomly spawn a bomb instead of a normal target
    if (Math.random() < BOMB_CHANCE) { spawnBomb(); return; }

    const target = document.createElement('div');
    target.className = 'aim-target';

    const size = 18 + Math.floor(Math.random() * 39);
    const pts = pointsForSize(size);
    target.style.width  = size + 'px';
    target.style.height = size + 'px';
    target.dataset.pts  = String(pts);

    const fieldW = field.clientWidth  - size - 8;
    const fieldH = field.clientHeight - size - 8;
    target.style.left = Math.max(4, Math.random() * fieldW) + 'px';
    target.style.top  = Math.max(4, Math.random() * fieldH) + 'px';

    if (pts === 3) target.classList.add('aim-target--small');
    else if (pts === 2) target.classList.add('aim-target--medium');

    field.appendChild(target);
    activeTargets.add(target);

    const removeTarget = (): void => {
      if (!target.isConnected) return;
      target.remove();
      activeTargets.delete(target);
    };

    target.addEventListener('click', e => {
      e.stopPropagation();
      if (!gameActive) return;
      const p = Number(target.dataset.pts ?? 1);
      points += p;
      hits++;
      hitsEl.textContent  = String(hits);
      scoreEl.textContent = String(points);

      target.classList.add('aim-target--hit');
      setTimeout(removeTarget, 130);

      const floater = document.createElement('div');
      floater.className = 'aim-floater';
      floater.textContent = `+${p}`;
      floater.style.left = target.style.left;
      floater.style.top  = target.style.top;
      field.appendChild(floater);
      setTimeout(() => floater.remove(), 700);
    }, { once: true });

    setTimeout(removeTarget, TARGET_LIFETIME);
  }

  function spawnBomb(): void {
    if (!gameActive) return;
    const bomb = document.createElement('div');
    bomb.className = 'aim-target aim-target--bomb';
    const size = 32 + Math.floor(Math.random() * 16); // bombs are medium-large
    bomb.style.width  = size + 'px';
    bomb.style.height = size + 'px';
    bomb.textContent  = '💣';

    const fieldW = field.clientWidth  - size - 8;
    const fieldH = field.clientHeight - size - 8;
    bomb.style.left = Math.max(4, Math.random() * fieldW) + 'px';
    bomb.style.top  = Math.max(4, Math.random() * fieldH) + 'px';

    field.appendChild(bomb);
    activeTargets.add(bomb);

    const removeBomb = (): void => {
      if (!bomb.isConnected) return;
      bomb.remove();
      activeTargets.delete(bomb);
    };

    bomb.addEventListener('click', e => {
      e.stopPropagation();
      if (!gameActive) return;
      // Clicking a bomb costs a fraction of the bet
      const currentBet = Math.max(1, parseInt(betInput.value) || 1);
      const loss = Math.floor(currentBet * BOMB_BET_LOSS);
      if (loss > 0) {
        store.setState(s => { s.bits = Math.max(0, s.bits - loss); });
      }
      bomb.classList.add('aim-target--hit');
      setTimeout(removeBomb, 130);

      const floater = document.createElement('div');
      floater.className = 'aim-floater aim-floater--bomb';
      floater.textContent = `💥 −${loss}`;
      floater.style.left = bomb.style.left;
      floater.style.top  = bomb.style.top;
      field.appendChild(floater);
      setTimeout(() => floater.remove(), 900);
    }, { once: true });

    setTimeout(removeBomb, BOMB_LIFETIME);
  }

  function endGame(bet: number): void {
    gameActive = false;
    clearInterval(spawnInt);
    clearInterval(timerInt);
    activeTargets.forEach(t => t.remove());
    activeTargets.clear();

    betLiveEl.style.display = 'none';
    hintEl.style.display = 'block';

    // High risk / high reward: score below threshold loses everything.
    // Module multiplier boosts wins — endgame players can win massively.
    const moduleMult  = store.getModuleMultiplier();
    const returnMult  = Math.max(0, (points - SCORE_THRESHOLD) / SCORE_DIVISOR);
    const totalReturn = Math.floor(bet * returnMult * moduleMult);
    const net         = totalReturn - bet;

    if (totalReturn > 0) {
      store.setState(s => {
        s.bits += totalReturn;
        s.totalBitsEarned += totalReturn;
      });
    }

    resultEl.style.display = 'block';
    if (returnMult <= 0) {
      resultEl.className = 'aim-result aim-result--lose';
      resultEl.textContent = `🎯 ${points} pts — Score trop bas ! Perdu ${formatNumber(bet)} bits`;
    } else if (net >= 0) {
      resultEl.className = 'aim-result aim-result--win';
      resultEl.textContent = `🎯 ${hits} hits · ${points} pts → +${formatNumber(net)} bits nets`;
    } else {
      resultEl.className = 'aim-result aim-result--lose';
      resultEl.textContent = `🎯 ${hits} hits · ${points} pts → −${formatNumber(Math.abs(net))} bits`;
    }

    startBtn.disabled = false;
    startBtn.textContent = '🎯 Rejouer';
    timerEl.textContent  = String(GAME_DURATION);
    hitsEl.textContent   = '0';
    scoreEl.textContent  = '0';
  }

  startBtn.addEventListener('click', () => {
    if (gameActive) return;
    const bet = getBet();
    if (store.getState().bits < bet) {
      resultEl.style.display = 'block';
      resultEl.className = 'aim-result aim-result--lose';
      resultEl.textContent = 'Bits insuffisants !';
      return;
    }

    store.setState(s => { s.bits -= bet; });
    gameActive = true;
    points = 0;
    hits   = 0;
    timeLeft = GAME_DURATION;
    hitsEl.textContent   = '0';
    scoreEl.textContent  = '0';
    timerEl.textContent  = String(GAME_DURATION);
    resultEl.style.display = 'none';
    startBtn.disabled = true;

    betLabelEl.textContent = formatNumber(bet) + ' bits';
    betLiveEl.style.display = '';
    hintEl.style.display = 'none';

    spawnInt = window.setInterval(() => {
      if (Math.random() < SPAWN_CHANCE) spawnTarget();
    }, SPAWN_INTERVAL);

    timerInt = window.setInterval(() => {
      timeLeft--;
      timerEl.textContent = String(timeLeft);
      if (timeLeft <= 0) endGame(bet);
    }, 1000);
  });

  return () => {
    clearInterval(spawnInt);
    clearInterval(timerInt);
    activeTargets.forEach(t => t.remove());
  };
}
