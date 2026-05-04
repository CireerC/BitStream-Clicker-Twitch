import { store } from '../../core/GameStore.js';
import { BALANCE } from '../../core/balance.js';

interface TwitchConfig {
  clientId: string;
  channelName: string;
}

let pollTimer = 0;

/**
 * Starts polling the Twitch Helix API every 2 minutes.
 * Returns a cleanup function to stop polling.
 *
 * The API call is: GET /helix/streams?user_login=<channel>
 * An empty `data` array means the channel is offline.
 * Docs: https://dev.twitch.tv/docs/api/reference/#get-streams
 */
export function startTwitchPoller(config: TwitchConfig): () => void {
  if (!config.clientId || !config.channelName) return () => {};

  store.setState(s => { s.twitch.channelName = config.channelName; });

  async function poll(): Promise<void> {
    try {
      const url = `https://api.twitch.tv/helix/streams?user_login=${encodeURIComponent(config.channelName)}`;
      const res = await fetch(url, {
        headers: {
          'Client-ID': config.clientId,
          // App Access Token required — see README for setup
          'Authorization': `Bearer ${(window as any).__TWITCH_TOKEN__ ?? ''}`,
        },
      });

      if (!res.ok) {
        console.warn('[Twitch] API responded with', res.status);
        return;
      }

      const json = await res.json() as { data: { title: string; game_name: string }[] };
      const stream = json.data[0];
      const isLive = !!stream;

      store.setTwitchLive(isLive, {
        title: stream?.title ?? '',
        game: stream?.game_name ?? '',
      });
    } catch (err) {
      console.warn('[Twitch] Poll failed:', err);
    }
  }

  poll();
  pollTimer = window.setInterval(poll, BALANCE.twitch.pollIntervalMs);

  return () => clearInterval(pollTimer);
}

/**
 * Renders the Twitch status badge into the target element.
 * Subscribe to store changes for live updates.
 */
export function mountTwitchBadge(container: HTMLElement): () => void {
  function render(): void {
    const { twitch, multipliers } = store.getState();

    if (!twitch.channelName) {
      container.style.display = 'none';
      return;
    }

    container.style.display = 'flex';

    if (twitch.isLive) {
      container.innerHTML = `
        <div class="twitch-badge twitch-badge--live">
          <span class="twitch-badge__dot"></span>
          <span class="twitch-badge__text">LIVE</span>
          <span class="twitch-badge__boost">+${Math.round((multipliers.twitch - 1) * 100)}%</span>
          ${twitch.gameName ? `<span class="twitch-badge__game">${twitch.gameName}</span>` : ''}
        </div>
      `;
    } else {
      container.innerHTML = `
        <div class="twitch-badge twitch-badge--offline">
          <span class="twitch-badge__text">⚫ ${twitch.channelName} offline</span>
        </div>
      `;
    }
  }

  const unsub = store.subscribe(render);
  render();
  return () => unsub();
}
