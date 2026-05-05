import './ui/styles/main.css';
import { mountApp } from './ui/App.js';
import { loadGame, startAutoSave, getOfflineReport } from './core/SaveSystem.js';
import { startGameLoop } from './core/GameLoop.js';
import { showOfflineModal } from './ui/OfflineModal.js';
import { maybeShowUsernameModal } from './ui/UsernameModal.js';

// ── Bootstrap ─────────────────────────────────────────────────────────────
// Expose Twitch token for the API module (avoids bundling secrets in code)
(window as any).__TWITCH_TOKEN__ = import.meta.env.VITE_TWITCH_TOKEN ?? '';

const root = document.getElementById('app')!;

// Load persisted state (also computes offline earnings)
loadGame();

// Show offline report if the player was away
const offlineReport = getOfflineReport();

// Mount UI
mountApp(root, {
  // Fill in your Twitch credentials here or via environment variables.
  // See README.md for setup instructions.
  twitchClientId: import.meta.env.VITE_TWITCH_CLIENT_ID ?? '',
  twitchChannel:  import.meta.env.VITE_TWITCH_CHANNEL ?? '',
});

// Start the game loop (RAF-based tick)
startGameLoop();

// Start auto-save (every 10s + beforeunload)
startAutoSave();

// Show modals after first render (username must come first if no name saved)
requestAnimationFrame(() => {
  maybeShowUsernameModal();
  if (offlineReport && offlineReport.bitsEarned > 1) {
    showOfflineModal(offlineReport);
  }
});
