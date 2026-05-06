import { store } from './GameStore.js';

let lastTime = 0;
let rafId = 0;

function tick(now: number): void {
  if (lastTime === 0) lastTime = now;
  const dt = Math.min((now - lastTime) / 1000, 1); // cap dt at 1 s to avoid spikes
  lastTime = now;

  const bps = store.getEffectiveBPS();
  if (bps > 0) store.addBits(bps * dt);

  rafId = requestAnimationFrame(tick);
}

export function startGameLoop(): void {
  lastTime = 0;
  rafId = requestAnimationFrame(tick);
}

export function stopGameLoop(): void {
  cancelAnimationFrame(rafId);
}
