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

interface Pipe { x: number; topH: number; }

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
    </div>
  `;

  const canvas     = container.querySelector<HTMLCanvasElement>('#flappy-canvas')!;
  const ctx        = canvas.getContext('2d')!;
  const overlay    = container.querySelector<HTMLElement>('#flappy-overlay')!;
  const msgEl      = container.querySelector<HTMLElement>('#flappy-msg')!;
  const subEl      = container.querySelector<HTMLElement>('#flappy-sub')!;
  const scoreEl    = container.querySelector<HTMLElement>('#flappy-score')!;
  const cooldownEl = container.querySelector<HTMLElement>('#flappy-cooldown')!;

  let birdY       = H / 2;
  let birdVY      = 0;
  let pipes: Pipe[] = [];
  let frame       = 0;
  let score       = 0;
  let alive       = false;
  let started     = false;
  let rafId       = 0;
  let cooldownEnd = 0;
  let cooldownInt = 0;
  let countdownActive = false;

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
    birdY   = H / 2;
    birdVY  = 0;
    pipes   = [];
    frame   = 0;
    score   = 0;
    alive   = true;
    started = true;
    overlay.style.display = 'none';
    scoreEl.textContent = '0';
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

    const earned = score * rewardPerPipe();
    if (earned > 0) store.addBits(earned);

    msgEl.style.fontSize = '';
    msgEl.style.color = '';
    msgEl.textContent = score > 0
      ? `Score : ${score} — +${formatNumber(earned)} bits`
      : 'Raté ! Score : 0';
    subEl.textContent = score >= 10 ? '🔥 Bien joué !' : score >= 5 ? 'Pas mal !' : 'Continue...';
    overlay.style.display = 'flex';

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

  function loop(): void {
    frame++;
    birdVY += GRAVITY;
    birdY  += birdVY;

    if (frame % PIPE_INTERVAL === 0) {
      const margin = 32;
      const topH = margin + Math.floor(Math.random() * (H - PIPE_GAP - margin * 2));
      pipes.push({ x: W, topH });
    }

    for (const p of pipes) {
      p.x -= PIPE_SPEED;
      if (Math.round(p.x + PIPE_W) === BIRD_X) {
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

  const onClick = (): void => { if (!isCoolingDown()) flap(); };
  const onKey = (e: KeyboardEvent): void => {
    if (e.code === 'Space' || e.code === 'ArrowUp') {
      e.preventDefault();
      if (!isCoolingDown()) flap();
    }
  };

  canvas.addEventListener('click', onClick);
  window.addEventListener('keydown', onKey);
  draw();

  return () => {
    cancelAnimationFrame(rafId);
    clearInterval(cooldownInt);
    countdownActive = false;
    canvas.removeEventListener('click', onClick);
    window.removeEventListener('keydown', onKey);
  };
}
