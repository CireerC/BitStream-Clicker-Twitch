import { store } from '../../core/GameStore.js';
import { formatNumber } from '../../core/balance.js';

type GameType = 'blackjack' | 'gamble' | 'wheel' | 'rush';

interface GameResult {
  game: GameType;
  won: boolean;
  amount: number;
  timestamp: number;
}

export function mountCasino(container: HTMLElement): () => void {
  container.innerHTML = `
    <div class="casino-panel">
      <h2 class="panel-title">🎰 Casino</h2>
      <div class="casino-header">
        <div class="casino-wallet">
          <span class="casino-wallet__label">Solde :</span>
          <span class="casino-wallet__value mono" id="casino-balance">0</span>
        </div>
      </div>
      <div class="casino-tabs">
        <button class="casino-tab casino-tab--active" data-game="blackjack">🃏 Blackjack</button>
        <button class="casino-tab" data-game="gamble">♠ Cartes</button>
        <button class="casino-tab" data-game="wheel">🎡 Roue</button>
        <button class="casino-tab" data-game="rush">⚡ Pikachu</button>
      </div>
      <div class="casino-content" id="casino-content"></div>
      <div class="casino-history" id="casino-history"></div>
    </div>
  `;

  const contentEl = container.querySelector<HTMLElement>('#casino-content')!;
  const balanceEl = container.querySelector<HTMLElement>('#casino-balance')!;
  const historyEl = container.querySelector<HTMLElement>('#casino-history')!;
  const tabs = container.querySelectorAll<HTMLButtonElement>('.casino-tab');

  function showError(msg: string): void {
    const existing = contentEl.querySelector('.casino-error');
    if (existing) existing.remove();
    const el = document.createElement('div');
    el.className = 'casino-error';
    el.textContent = msg;
    contentEl.prepend(el);
    setTimeout(() => el.remove(), 2000);
  }

  let currentGame: GameType = 'blackjack';
  let history: GameResult[] = [];
  let gameInProgress = false;

  // ──────────────────────────────────────────────────────────────────────────
  // GAME 1: BLACKJACK
  // ──────────────────────────────────────────────────────────────────────────

  function blackjackUI(): string {
    return `
      <div class="casino-game-blackjack">
        <div class="bj-section">
          <div class="bj-label">Dealer</div>
          <div class="bj-cards" id="bj-dealer">
            <div class="bj-card">?</div>
          </div>
        </div>
        <div class="bj-section">
          <div class="bj-label">You</div>
          <div class="bj-cards" id="bj-player">
            <div class="bj-card">K</div>
            <div class="bj-card">5</div>
          </div>
          <div class="bj-total" id="bj-total">15</div>
        </div>
        <div class="bj-controls">
          <select id="bj-bet" class="bj-input">
            <option value="50">50 Bits</option>
            <option value="200">200 Bits</option>
            <option value="500">500 Bits</option>
            <option value="1000">1000 Bits</option>
          </select>
          <button class="casino-btn" id="bj-play">Jouer</button>
        </div>
        <div class="bj-result" id="bj-result" style="display:none"></div>
      </div>
    `;
  }

  function playBlackjack(): void {
    if (gameInProgress) return;
    gameInProgress = true;

    const betSelect = contentEl.querySelector<HTMLSelectElement>('#bj-bet')!;
    const bet = parseInt(betSelect.value);
    const state = store.getState();

    if (state.bits < bet) {
      showError('Bits insuffisants !');
      gameInProgress = false;
      return;
    }

    // Simple blackjack: player has K+5 (15), dealer plays
    const playerTotal = 15;
    const dealerCard = 5 + Math.floor(Math.random() * 5); // 5-9
    const dealerTotal = dealerCard + (Math.random() < 0.6 ? 10 : 5); // Dealer hits on 16

    let won = false;
    let resultText = '';

    if (dealerTotal > 21) {
      won = true;
      resultText = `Dealer busts (${dealerTotal})! You win!`;
    } else if (playerTotal > dealerTotal) {
      won = true;
      resultText = `${playerTotal} vs ${dealerTotal} — You win!`;
    } else if (playerTotal === dealerTotal) {
      won = false;
      resultText = `Push (${playerTotal}) — You lose your bet`;
    } else {
      won = false;
      resultText = `${playerTotal} vs ${dealerTotal} — Dealer wins`;
    }

    if (won) {
      const reward = Math.floor(bet * 1.5);
      store.addBits(reward);
      history.unshift({ game: 'blackjack', won: true, amount: reward, timestamp: Date.now() });
    } else {
      store.spendBits(bet);
      history.unshift({ game: 'blackjack', won: false, amount: bet, timestamp: Date.now() });
    }

    // Show result
    const resultEl = contentEl.querySelector<HTMLElement>('#bj-result')!;
    resultEl.textContent = resultText;
    resultEl.style.display = 'block';
    resultEl.className = `bj-result ${won ? 'bj-result--win' : 'bj-result--lose'}`;

    setTimeout(() => {
      gameInProgress = false;
      renderGame(currentGame);
      updateHistory();
    }, 2000);
  }

  // ──────────────────────────────────────────────────────────────────────────
  // GAME 2: GAMBLE (SYMBOL SPINNING)
  // ──────────────────────────────────────────────────────────────────────────

  function gambleUI(): string {
    return `
      <div class="casino-game-gamble">
        <div class="gamble-wheels">
          <div class="gamble-wheel" id="gamble-w1">♠</div>
          <div class="gamble-wheel" id="gamble-w2">♣</div>
          <div class="gamble-wheel" id="gamble-w3">♥</div>
        </div>
        <div class="gamble-controls">
          <select id="gamble-bet" class="gamble-input">
            <option value="100">100 Bits (paire ×2)</option>
            <option value="500">500 Bits (triple ×3)</option>
            <option value="2000">2000 Bits (triple ×5 !)</option>
          </select>
          <button class="casino-btn" id="gamble-spin">Tourner !</button>
        </div>
        <div class="gamble-result" id="gamble-result" style="display:none"></div>
      </div>
    `;
  }

  function playGamble(): void {
    if (gameInProgress) return;
    gameInProgress = true;

    const betSelect = contentEl.querySelector<HTMLSelectElement>('#gamble-bet')!;
    const bet = parseInt(betSelect.value);
    const state = store.getState();

    if (state.bits < bet) {
      showError('Bits insuffisants !');
      gameInProgress = false;
      return;
    }

    const symbols = ['♠', '♣', '♥', '♦', '⭐'];
    const result = [
      symbols[Math.floor(Math.random() * symbols.length)],
      symbols[Math.floor(Math.random() * symbols.length)],
      symbols[Math.floor(Math.random() * symbols.length)],
    ];

    const w1 = contentEl.querySelector<HTMLElement>('#gamble-w1')!;
    const w2 = contentEl.querySelector<HTMLElement>('#gamble-w2')!;
    const w3 = contentEl.querySelector<HTMLElement>('#gamble-w3')!;

    // Spinning animation
    w1.style.animation = 'spin 0.5s';
    w2.style.animation = 'spin 0.6s';
    w3.style.animation = 'spin 0.7s';

    setTimeout(() => {
      w1.textContent = result[0];
      w2.textContent = result[1];
      w3.textContent = result[2];
      w1.style.animation = 'none';
      w2.style.animation = 'none';
      w3.style.animation = 'none';

      const match3 = result[0] === result[1] && result[1] === result[2];
      const match2 = result[0] === result[1] || result[1] === result[2] || result[0] === result[2];

      let won = false;
      let reward = 0;
      let resultText = '';

      if (match3) {
        won = true;
        reward = bet * (bet === 2000 ? 5 : 2);
        resultText = `🎉 Triple match! +${formatNumber(reward)} bits!`;
        store.addBits(reward);
        history.unshift({ game: 'gamble', won: true, amount: reward, timestamp: Date.now() });
      } else if (match2) {
        reward = Math.floor(bet * 0.5);
        store.addBits(reward);
        resultText = `Pair match — +${formatNumber(reward)} bits`;
        history.unshift({ game: 'gamble', won: true, amount: reward, timestamp: Date.now() });
      } else {
        resultText = `No match — Lose ${formatNumber(bet)} bits`;
        store.spendBits(bet);
        history.unshift({ game: 'gamble', won: false, amount: bet, timestamp: Date.now() });
      }

      const resultEl = contentEl.querySelector<HTMLElement>('#gamble-result')!;
      resultEl.textContent = resultText;
      resultEl.style.display = 'block';
      resultEl.className = `gamble-result ${match3 ? 'gamble-result--win' : match2 ? 'gamble-result--partial' : 'gamble-result--lose'}`;

      setTimeout(() => {
        gameInProgress = false;
        renderGame(currentGame);
        updateHistory();
      }, 2000);
    }, 700);
  }

  // ──────────────────────────────────────────────────────────────────────────
  // GAME 3: FORTUNE WHEEL
  // ──────────────────────────────────────────────────────────────────────────

  function wheelUI(): string {
    return `
      <div class="casino-game-wheel">
        <div class="wheel-container">
          <div class="wheel" id="wheel">
            <div class="wheel-segment" style="background: #ff4444;"><span>0.5×</span></div>
            <div class="wheel-segment" style="background: #ffaa00;"><span>1×</span></div>
            <div class="wheel-segment" style="background: #ffdd00;"><span>2×</span></div>
            <div class="wheel-segment" style="background: #00ff44;"><span>3×</span></div>
            <div class="wheel-segment" style="background: #00aaff;"><span>5×</span></div>
            <div class="wheel-segment" style="background: #aa00ff;"><span>10×</span></div>
            <div class="wheel-segment" style="background: #ffffff;"><span>Lose</span></div>
            <div class="wheel-segment" style="background: #ffff00;"><span>💎 JP!</span></div>
          </div>
          <div class="wheel-pointer"></div>
        </div>
        <div class="wheel-controls">
          <select id="wheel-bet" class="wheel-input">
            <option value="50">50 Bits</option>
            <option value="200">200 Bits</option>
            <option value="1000">1000 Bits</option>
          </select>
          <button class="casino-btn" id="wheel-spin">Faire tourner !</button>
        </div>
        <div class="wheel-result" id="wheel-result" style="display:none"></div>
      </div>
    `;
  }

  function playWheel(): void {
    if (gameInProgress) return;
    gameInProgress = true;

    const betSelect = contentEl.querySelector<HTMLSelectElement>('#wheel-bet')!;
    const bet = parseInt(betSelect.value);
    const state = store.getState();

    if (state.bits < bet) {
      showError('Bits insuffisants !');
      gameInProgress = false;
      return;
    }

    const outcomes = [
      { mult: 0.5, label: '0.5×', jackpot: false },
      { mult: 1, label: '1×', jackpot: false },
      { mult: 2, label: '2×', jackpot: false },
      { mult: 3, label: '3×', jackpot: false },
      { mult: 5, label: '5×', jackpot: false },
      { mult: 10, label: '10×', jackpot: false },
      { mult: 0, label: 'Lose', jackpot: false },
      { mult: 50, label: '💎 JACKPOT', jackpot: true },
    ];

    const spinIndex = Math.floor(Math.random() * outcomes.length);
    const outcome = outcomes[spinIndex];

    const wheel = contentEl.querySelector<HTMLElement>('#wheel')!;
    wheel.style.animation = `spin-wheel ${2 + spinIndex * 0.1}s ease-out`;

    setTimeout(() => {
      wheel.style.animation = 'none';
      wheel.style.transform = `rotate(${spinIndex * 45}deg)`;

      let won = false;
      let reward = 0;

      if (outcome.mult > 0) {
        won = true;
        reward = Math.floor(bet * outcome.mult);
        store.addBits(reward);
        history.unshift({ game: 'wheel', won: true, amount: reward, timestamp: Date.now() });
      } else {
        store.spendBits(bet);
        history.unshift({ game: 'wheel', won: false, amount: bet, timestamp: Date.now() });
      }

      const resultEl = contentEl.querySelector<HTMLElement>('#wheel-result')!;
      resultEl.textContent = won ? `${outcome.label} — +${formatNumber(reward)} bits!` : `${outcome.label} — Lost ${formatNumber(bet)} bits`;
      resultEl.style.display = 'block';
      resultEl.className = `wheel-result ${won ? 'wheel-result--win' : 'wheel-result--lose'}`;

      setTimeout(() => {
        gameInProgress = false;
        renderGame(currentGame);
        updateHistory();
      }, 2000);
    }, 2000 + spinIndex * 100);
  }

  // ──────────────────────────────────────────────────────────────────────────
  // GAME 4: PENGUIN RUSH (TAP GAME)
  // ──────────────────────────────────────────────────────────────────────────

  function rushUI(): string {
    return `
      <div class="casino-game-rush">
        <div class="rush-field" id="rush-field">
          <div class="rush-player" id="rush-pikachu">⚡</div>
          <div class="rush-score-overlay">Score: <span id="rush-score">0</span></div>
        </div>
        <div class="rush-info">
          <div>Temps: <span id="rush-time">10</span>s</div>
          <div>Clics: <span id="rush-score2">0</span></div>
        </div>
        <div class="rush-controls">
          <select id="rush-bet" class="rush-input">
            <option value="100">100 Bits</option>
            <option value="500">500 Bits</option>
            <option value="1000">1000 Bits</option>
          </select>
          <button class="casino-btn" id="rush-start">⚡ Lancer !</button>
        </div>
        <div class="rush-result" id="rush-result" style="display:none"></div>
      </div>
    `;
  }

  function playRush(): void {
    if (gameInProgress) return;

    const betSelect = contentEl.querySelector<HTMLSelectElement>('#rush-bet')!;
    const bet = parseInt(betSelect.value);
    const state = store.getState();

    if (state.bits < bet) {
      showError('Bits insuffisants !');
      return;
    }

    gameInProgress = true;
    store.spendBits(bet);

    let score = 0;
    let timeLeft = 10;
    const timeEl = contentEl.querySelector<HTMLElement>('#rush-time')!;
    const scoreEl = contentEl.querySelector<HTMLElement>('#rush-score')!;
    const score2El = contentEl.querySelector<HTMLElement>('#rush-score2')!;
    const field = contentEl.querySelector<HTMLElement>('#rush-field')!;
    const pikachu = contentEl.querySelector<HTMLElement>('#rush-pikachu')!;

    // Spawn lightning bolt targets to click
    const spawnTarget = () => {
      const target = document.createElement('div');
      target.className = 'rush-target';
      target.textContent = '⚡';
      target.style.left = Math.random() * 80 + '%';
      target.style.top = Math.random() * 60 + 10 + '%';
      field.appendChild(target);
      target.addEventListener('click', (e) => {
        e.stopPropagation();
        target.remove();
        score++;
        scoreEl.textContent = String(score);
        score2El.textContent = String(score);
        pikachu.classList.add('rush-pikachu--hit');
        setTimeout(() => pikachu.classList.remove('rush-pikachu--hit'), 150);
      }, { once: true });
      setTimeout(() => target.remove(), 1200);
    };

    const spawnInterval = setInterval(() => { if (Math.random() < 0.8) spawnTarget(); }, 400);

    const timer = setInterval(() => {
      timeLeft--;
      timeEl.textContent = String(timeLeft);

      if (timeLeft <= 0) {
        clearInterval(timer);
        clearInterval(spawnInterval);
        field.querySelectorAll('.rush-target').forEach(t => t.remove());

        const reward = Math.floor(score * bet * 0.2);
        store.addBits(reward);
        history.unshift({ game: 'rush', won: reward > 0, amount: reward, timestamp: Date.now() });

        const resultEl = contentEl.querySelector<HTMLElement>('#rush-result')!;
        resultEl.textContent = `⚡ ${score} clics — +${formatNumber(reward)} bits !`;
        resultEl.style.display = 'block';
        resultEl.className = 'rush-result--win';

        setTimeout(() => {
          gameInProgress = false;
          renderGame(currentGame);
          updateHistory();
        }, 2000);
      }
    }, 1000);
  }

  // ──────────────────────────────────────────────────────────────────────────
  // RENDERING
  // ──────────────────────────────────────────────────────────────────────────

  function renderGame(game: GameType): void {
    currentGame = game;

    // Update tab highlighting
    tabs.forEach(tab => {
      tab.classList.toggle('casino-tab--active', tab.dataset.game === game);
    });

    // Render game UI
    let html = '';
    switch (game) {
      case 'blackjack':
        html = blackjackUI();
        break;
      case 'gamble':
        html = gambleUI();
        break;
      case 'wheel':
        html = wheelUI();
        break;
      case 'rush':
        html = rushUI();
        break;
    }

    contentEl.innerHTML = html;

    // Attach event listeners
    setTimeout(() => {
      switch (game) {
        case 'blackjack':
          contentEl.querySelector('#bj-play')?.addEventListener('click', playBlackjack);
          break;
        case 'gamble':
          contentEl.querySelector('#gamble-spin')?.addEventListener('click', playGamble);
          break;
        case 'wheel':
          contentEl.querySelector('#wheel-spin')?.addEventListener('click', playWheel);
          break;
        case 'rush':
          contentEl.querySelector('#rush-start')?.addEventListener('click', playRush);
          break;
      }
    }, 0);
  }

  function updateBalance(): void {
    balanceEl.textContent = formatNumber(store.getState().bits);
  }

  function updateHistory(): void {
    historyEl.innerHTML = history.slice(0, 5).map(h => {
      const icon = h.won ? '✅' : '❌';
      return `<div class="casino-history-item ${h.won ? 'win' : 'lose'}">${icon} ${h.game}: ${h.won ? '+' : '-'}${formatNumber(h.amount)}</div>`;
    }).join('');
  }

  // Event listeners
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      if (!gameInProgress) {
        renderGame(tab.dataset.game as GameType);
      }
    });
  });

  const unsubStore = store.subscribe(updateBalance);

  // Initial render
  renderGame('blackjack');
  updateBalance();
  updateHistory();

  return () => unsubStore();
}
