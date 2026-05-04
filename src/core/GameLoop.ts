import { store } from './GameStore.js';

let lastTime = 0;
let rafId = 0;

// Batch research point accumulation to avoid notifying every frame
let rpBuffer = 0;
const RP_FLUSH_INTERVAL = 500; // ms
let lastRpFlush = 0;

function tick(now: number): void {
  if (lastTime === 0) lastTime = now;
  const dt = Math.min((now - lastTime) / 1000, 1); // cap dt at 1s
  lastTime = now;

  // Passive bit production
  const bps = store.getEffectiveBPS();
  if (bps > 0) store.addBits(bps * dt);

  // Research point accumulation (buffered — only flush every 500ms to avoid
  // triggering expensive store notifications on every RAF frame)
  rpBuffer += store.getResearchPS() * dt;
  if (now - lastRpFlush > RP_FLUSH_INTERVAL) {
    if (rpBuffer > 0) {
      store.addResearchPoints(rpBuffer);
      rpBuffer = 0;
      store.notify();
    }
    lastRpFlush = now;
  }

  rafId = requestAnimationFrame(tick);
}

export function startGameLoop(): void {
  lastTime = 0;
  lastRpFlush = performance.now();
  rafId = requestAnimationFrame(tick);
}

export function stopGameLoop(): void {
  cancelAnimationFrame(rafId);
}
