import { store } from '../../core/GameStore.js';
import { formatNumber } from '../../core/balance.js';

const W = 340;
const H = 200;
const BIRD_X     = 65;
const BIRD_R     = 10;
const GRAVITY    = 0.24;   // gentler fall (was 0.32)
const FLAP_VEL   = -5.0;   // lower jump (was -6.2)
const PIPE_W     = 36;
const PIPE_GAP   = 88;     // wider gap (was 72)
const PIPE_SPEED = 2.0;
const PIPE_INTERVAL = 90;
const COOLDOWN_MS   = 20_000;

function rewardPerPipe(): number {
  return Math.floor(50 * store.getModuleMultiplier());
}

interface Pipe { x: number; topH: number; scored?: boolean; }

export function mountFlappy(container: HTMLElement): () => void {
  container.innerHTML = `
    <div class="flappy-panel">
      <h2 class="panel-title">🐦 Flappy Bit</h2>
      <div class="flappy-wrap">
        <canvas id="flappy-canvas" width="${W}" height="${H}" class="flappy-canvas"></canvas>
        <div class="flappy-overlay" id="flappy-overlay">
          <div class="flappy-overlay__msg" id="flappy-msg">Clique ou Espace pour jouer</div>
          <div class="flappy-overlay__sub" id="flappy-sub">+${formatNumber(rewardPerPipe())} bits / tuyau passé</div>
        </div>
      </div>
      <div class="flappy-hud">
        <span>Score : <span id="flappy-score" class="mono">0</span></span>
        <span id="flappy-cooldown" class="flappy-cooldown" style="display:none"></span>
      </div>
      <div class="flappy-bet" id="flappy-bet-row">
        <div class="bet-quicks">
          <button class="bet-quick" data-pct="10">10%</button>
          <button class="bet-quick" data-pct="25">25%</button>
          <button class="bet-quick" data-pct="50">50%</button>
          <button class="bet-quick" data-pct="100">MAX</button>
        </div>
        <div class="bet-input-row">
          <input class="bet-input" id="flappy-bet-input" type="number" min="0" step="1" placeholder="0" />
          <span class="bet-preview" id="flappy-bet-preview"></span>
        </div>
      </div>
    </div>
  `;

  const canvas     = container.querySelector<HTMLCanvasElement>('#flappy-canvas')!;
  const ctx        = canvas.getContext('2d')!;
  const overlay    = container.querySelector<HTMLElement>('#flappy-overlay')!;
  const msgEl      = container.querySelector<HTMLElement>('#flappy-msg')!;
  const subEl      = container.querySelector<HTMLElement>('#flappy-sub')!;
  const scoreEl    = container.querySelector<HTMLElement>('#flappy-score')!;
  const cooldownEl = container.querySelector<HTMLElement>('#flappy-cooldown')!;
  const betRow      = container.querySelector<HTMLElement>('#flappy-bet-row')!;
  const betInput    = container.querySelector<HTMLInputElement>('#flappy-bet-input')!;
  const betPreview  = container.querySelector<HTMLElement>('#flappy-bet-preview')!;

  let birdY       = H / 2;
  let birdVY      = 0;
  let pipes: Pipe[] = [];
  let score   = 0;
  let alive   = false;
  let started = false;
  let rafId   = 0;
  let cooldownEnd = 0;
  let cooldownInt = 0;
  let countdownActive = false;
  let currentBet  = 0;

  function updateBetPreview(): void {
    const val = Math.floor(parseFloat(betInput.value) || 0);
    betPreview.textContent = val > 0 ? `= ${formatNumber(val)} bits` : '';
  }

  container.querySelectorAll<HTMLElement>('.bet-quick').forEach(btn => {
    btn.addEventListener('click', () => {
      const pct = parseInt(btn.dataset.pct ?? '100', 10);
      const max = store.getState().bits;
      betInput.value = String(Math.max(0, Math.floor(max * pct / 100)));
      updateBetPreview();
    });
  });

  betInput.addEventListener('input', updateBetPreview);
  updateBetPreview();

  // Delta-time: physics are independent of monitor refresh rate
  let lastTimestamp  = 0;
  let lastPipeSpawn  = 0;
  const PIPE_INTERVAL_MS = PIPE_INTERVAL * (1000 / 60); // 1500 ms

  function isCoolingDown(): boolean { return Date.now() < cooldownEnd; }

  function flap(): void {
    if (countdownActive) return;
    if (!started) { startWithCountdown(); return; }
    if (alive) birdVY = FLAP_VEL;
  }

  function startWithCountdown(): void {
    if (isCoolingDown()) return;
    countdownActive = true;
    overlay.style.display = 'flex';
    msgEl.style.fontSize = '2rem';
    msgEl.style.color = '#fff';
    subEl.textContent = '';

    let n = 3;
    const tick = (): void => {
      msgEl.textContent = String(n);
      if (n <= 0) {
        countdownActive = false;
        msgEl.style.fontSize = '';
        msgEl.style.color = '';
        startGame();
        return;
      }
      n--;
      window.setTimeout(tick, 700);
    };
    tick();
  }

  function startGame(): void {
    if (isCoolingDown()) return;
    const betVal = Math.floor(parseFloat(betInput.value) || 0);
    if (betVal > 0 && !store.spendBits(betVal)) {
      subEl.textContent = 'Pas assez de bits pour cette mise !';
      return;
    }
    currentBet    = betVal;
    birdY         = H / 2;
    birdVY        = 0;
    pipes         = [];
    score         = 0;
    alive         = true;
    started       = true;
    lastTimestamp = 0;
    lastPipeSpawn = 0;
    overlay.style.display = 'none';
    scoreEl.textContent   = '0';
    betRow.style.display  = 'none';
    betInput.disabled     = true;
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(loop);
  }

  function startCooldown(): void {
    cooldownEnd = Date.now() + COOLDOWN_MS;
    cooldownEl.style.display = '';
    clearInterval(cooldownInt);
    cooldownInt = window.setInterval(() => {
      const rem = Math.ceil((cooldownEnd - Date.now()) / 1000);
      if (rem <= 0) {
        clearInterval(cooldownInt);
        cooldownEl.style.display = 'none';
        betRow.style.display  = '';
        betInput.disabled     = false;
        // Show ready state
        msgEl.textContent = '▶ Prêt !';
        subEl.textContent = `Clique ou Espace · +${formatNumber(rewardPerPipe())} bits/tuyau`;
        overlay.style.display = 'flex';
      } else {
        cooldownEl.textContent = `Disponible dans ${rem}s`;
      }
    }, 500);
  }

  function die(): void {
    alive = false;
    cancelAnimationFrame(rafId);
    draw();

    let earned: number;
    if (currentBet > 0) {
      earned = Math.floor(currentBet * score / 5 * store.getModuleMultiplier());
    } else {
      earned = score * rewardPerPipe();
    }
    if (earned > 0) store.addBits(earned);

    msgEl.style.fontSize = '';
    msgEl.style.color = '';
    msgEl.textContent = score > 0
      ? `Score : ${score} — +${formatNumber(earned)} bits`
      : 'Raté ! Score : 0';
    subEl.textContent = score >= 10 ? '🔥 Bien joué !' : score >= 5 ? 'Pas mal !' : 'Continue...';
    overlay.style.display = 'flex';
    betRow.style.display  = '';
    betInput.disabled     = false;
    updateBetPreview();

    startCooldown();
    started = false;
  }

  function checkCollision(pipe: Pipe): boolean {
    const left  = pipe.x;
    const right = pipe.x + PIPE_W;
    const bLeft  = BIRD_X - BIRD_R + 2;
    const bRight = BIRD_X + BIRD_R - 2;
    if (bRight < left || bLeft > right) return false;
    const bTop    = birdY - BIRD_R + 2;
    const bBottom = birdY + BIRD_R - 2;
    return bTop < pipe.topH || bBottom > pipe.topH + PIPE_GAP;
  }

  function loop(timestamp: number): void {
    // Cap dt to 50ms to avoid huge jumps on tab-switch or slow frames
    const dt = lastTimestamp > 0 ? Math.min(timestamp - lastTimestamp, 50) : 16.667;
    lastTimestamp = timestamp;
    const f = dt / 16.667; // 1.0 at 60fps, ~0.5 at 120fps, ~0.42 at 144fps

    birdVY += GRAVITY * f;
    birdY  += birdVY * f;

    if (timestamp - lastPipeSpawn > PIPE_INTERVAL_MS) {
      lastPipeSpawn = timestamp;
      const margin = 32;
      const topH = margin + Math.floor(Math.random() * (H - PIPE_GAP - margin * 2));
      pipes.push({ x: W, topH });
    }

    for (const p of pipes) {
      p.x -= PIPE_SPEED * f;
      if (!p.scored && p.x + PIPE_W < BIRD_X) {
        p.scored = true;
        score++;
        scoreEl.textContent = String(score);
      }
    }
    pipes = pipes.filter(p => p.x + PIPE_W > 0);

    if (birdY + BIRD_R > H || birdY - BIRD_R < 0) { die(); return; }
    for (const p of pipes) { if (checkCollision(p)) { die(); return; } }

    draw();
    rafId = requestAnimationFrame(loop);
  }

  function draw(): void {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, W, H);

    ctx.strokeStyle = '#333';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, H - 1);
    ctx.lineTo(W, H - 1);
    ctx.stroke();

    for (const p of pipes) {
      ctx.fillStyle = '#2a7a2a';
      ctx.fillRect(p.x, 0, PIPE_W, p.topH);
      ctx.fillStyle = '#3a9a3a';
      ctx.fillRect(p.x - 2, p.topH - 8, PIPE_W + 4, 8);
      const botY = p.topH + PIPE_GAP;
      ctx.fillStyle = '#2a7a2a';
      ctx.fillRect(p.x, botY, PIPE_W, H - botY);
      ctx.fillStyle = '#3a9a3a';
      ctx.fillRect(p.x - 2, botY, PIPE_W + 4, 8);
    }

    ctx.beginPath();
    ctx.arc(BIRD_X, birdY, BIRD_R, 0, Math.PI * 2);
    ctx.fillStyle = alive ? '#f0c040' : '#888';
    ctx.fill();
    ctx.strokeStyle = alive ? '#c09000' : '#555';
    ctx.lineWidth = 2;
    ctx.stroke();

    if (alive) {
      ctx.beginPath();
      ctx.arc(BIRD_X + 4, birdY - 3, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = '#111';
      ctx.fill();
    }
  }

  const wrap = container.querySelector<HTMLElement>('.flappy-wrap')!;

  const onClick = (e: MouseEvent): void => {
    // Ignore clicks on bet-quick buttons that sit outside the wrap
    if ((e.target as HTMLElement).closest('.bet-quick, .bet-input')) return;
    if (!isCoolingDown()) flap();
  };
  const onKey = (e: KeyboardEvent): void => {
    if (e.code === 'Space' || e.code === 'ArrowUp') {
      e.preventDefault();
      if (!isCoolingDown()) flap();
    }
  };

  wrap.addEventListener('click', onClick);
  window.addEventListener('keydown', onKey);
  draw();

  return () => {
    cancelAnimationFrame(rafId);
    clearInterval(cooldownInt);
    countdownActive = false;
    wrap.removeEventListener('click', onClick);
    window.removeEventListener('keydown', onKey);
  };
}
