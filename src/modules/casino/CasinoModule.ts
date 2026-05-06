import { store } from '../../core/GameStore.js';
import { formatNumber, BALANCE } from '../../core/balance.js';

// ── Types cartes ──────────────────────────────────────────────────────────────
type Suit = '♠' | '♣' | '♥' | '♦';
type Rank = 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';
interface Card { suit: Suit; rank: Rank; faceDown?: boolean; }

const SUITS: Suit[] = ['♠', '♣', '♥', '♦'];
const RANKS: Rank[] = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

// 6 decks like a real casino table
function new6Deck(): Card[] {
  const single = SUITS.flatMap(s => RANKS.map(r => ({ suit: s, rank: r })));
  return ([] as Card[]).concat(...Array(6).fill(0).map(() => single.map(c => ({ ...c }))));
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function cardVal(c: Card): number {
  if (['J', 'Q', 'K'].includes(c.rank)) return 10;
  if (c.rank === 'A') return 11;
  return parseInt(c.rank);
}

function handVal(cards: Card[]): number {
  const visible = cards.filter(c => !c.faceDown);
  let t = visible.reduce((s, c) => s + cardVal(c), 0);
  let aces = visible.filter(c => c.rank === 'A').length;
  while (t > 21 && aces-- > 0) t -= 10;
  return t;
}

function cardHTML(c: Card): string {
  if (c.faceDown) return `<div class="bj-card bj-card--back"></div>`;
  const red = c.suit === '♥' || c.suit === '♦';
  return `<div class="bj-card${red ? ' bj-card--red' : ''}">
    <div class="bj-card-tl">${c.rank}<br><span>${c.suit}</span></div>
    <div class="bj-card-ct">${c.suit}</div>
    <div class="bj-card-br">${c.rank}<br><span>${c.suit}</span></div>
  </div>`;
}

// ── Secteurs de la roue ───────────────────────────────────────────────────────
// 3 secteurs perdants / 5 gagnants. Jackpot ×15.
// Sans module upgrades : EV ≈ (0.5+1+2+3+5+15)/8 - 3/8 ≈ 2.8 (légèrement favorable)
// Avec module multiplier max (×3.8), les profits sont x3.8 → très forte récompense.
const WHEEL = [
  { label: 'PERTE',  mult: 0,    col: '#881111', txt: '#fff' },
  { label: '×0.5',  mult: 0.5,  col: '#333333', txt: '#fff' },
  { label: 'PERTE', mult: 0,    col: '#aa2222', txt: '#fff' },
  { label: '×1',    mult: 1,    col: '#555555', txt: '#fff' },
  { label: '×2',    mult: 2,    col: '#888888', txt: '#000' },
  { label: '×3',    mult: 3,    col: '#bbbbbb', txt: '#000' },
  { label: '×5',    mult: 5,    col: '#e8e8e8', txt: '#000' },
  { label: '💎×15', mult: 15,   col: '#ffcc00', txt: '#000' },
];

function drawWheel(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number, rot: number): void {
  const n = WHEEL.length;
  const slice = (2 * Math.PI) / n;
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  for (let i = 0; i < n; i++) {
    const s = WHEEL[i];
    const a0 = rot + i * slice - Math.PI / 2;
    const a1 = a0 + slice;

    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, a0, a1);
    ctx.closePath();
    ctx.fillStyle = s.col;
    ctx.fill();
    ctx.strokeStyle = '#111';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    const mid = a0 + slice / 2;
    ctx.save();
    ctx.translate(cx + Math.cos(mid) * r * 0.68, cy + Math.sin(mid) * r * 0.68);
    ctx.rotate(mid + Math.PI / 2);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = s.txt;
    ctx.font = 'bold 10px monospace';
    ctx.fillText(s.label, 0, 0);
    ctx.restore();
  }

  ctx.beginPath();
  ctx.arc(cx, cy, 10, 0, 2 * Math.PI);
  ctx.fillStyle = '#111';
  ctx.fill();
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 1.5;
  ctx.stroke();
}

// ── Calcul targetRot correct (corrige le bug aiguille entre 2 secteurs) ───────
// Pour que le secteur targetIdx soit centré à 12h (angle -π/2 canvas = haut),
// il faut : rot + (targetIdx + 0.5) * slice ≡ 0 (mod 2π)
function computeWheelTarget(currentRot: number, targetIdx: number): number {
  const slice = (2 * Math.PI) / WHEEL.length;
  const wantedNorm = ((-(targetIdx + 0.5) * slice) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
  const currentNorm = ((currentRot % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
  const extra = ((wantedNorm - currentNorm) + 2 * Math.PI) % (2 * Math.PI);
  const spins = (4 + Math.floor(Math.random() * 4)) * 2 * Math.PI;
  return currentRot + spins + extra;
}

type GameType = 'blackjack' | 'suits' | 'wheel';

export function mountCasino(container: HTMLElement): () => void {
  container.innerHTML = `
    <div class="casino-panel">
      <h2 class="panel-title">🎰 Casino</h2>
      <div class="casino-header">
        <div class="casino-wallet">
          <span class="casino-wallet__label">Solde :</span>
          <span class="casino-wallet__value mono" id="casino-balance">0</span>
        </div>
        <div class="casino-streak" id="casino-streak" style="display:none"></div>
      </div>
      <div class="casino-tabs">
        <button class="casino-tab casino-tab--active" data-game="blackjack">🃏 Blackjack</button>
        <button class="casino-tab" data-game="suits">♥ Couleurs</button>
        <button class="casino-tab" data-game="wheel">🎡 Roue</button>
      </div>
      <div class="casino-content" id="casino-content"></div>
      <div class="casino-history" id="casino-history"></div>
    </div>
  `;

  const contentEl = container.querySelector<HTMLElement>('#casino-content')!;
  const balanceEl = container.querySelector<HTMLElement>('#casino-balance')!;
  const historyEl = container.querySelector<HTMLElement>('#casino-history')!;
  const tabs = container.querySelectorAll<HTMLButtonElement>('.casino-tab');

  let currentGame: GameType = 'blackjack';
  let gameInProgress = false;
  const history: Array<{ game: string; won: boolean; amount: number }> = [];

  // ── Streak system ──────────────────────────────────────────────────────────
  let winStreak = 0;
  let streakBonusEndsAt = 0;
  const { streakThreshold: STREAK_THRESHOLD, streakBonus: STREAK_BONUS, streakDuration: STREAK_DURATION } = BALANCE.modules.casino;

  function streakMultiplier(): number {
    return Date.now() < streakBonusEndsAt ? 1 + STREAK_BONUS : 1;
  }

  function recordResult(won: boolean): void {
    if (won) {
      winStreak++;
      if (winStreak >= STREAK_THRESHOLD) streakBonusEndsAt = Date.now() + STREAK_DURATION;
    } else {
      winStreak = 0;
    }
    updateStreakDisplay();
  }

  const streakEl = container.querySelector<HTMLElement>('#casino-streak')!;

  function updateStreakDisplay(): void {
    if (!streakEl) return;
    if (winStreak >= STREAK_THRESHOLD && Date.now() < streakBonusEndsAt) {
      const rem = Math.ceil((streakBonusEndsAt - Date.now()) / 1000);
      streakEl.textContent = `🔥 Streak ×${winStreak} · +10% · ${rem}s`;
      streakEl.style.display = '';
    } else if (winStreak >= 2) {
      streakEl.textContent = `🔥 Streak ×${winStreak}`;
      streakEl.style.display = '';
    } else {
      streakEl.style.display = 'none';
    }
  }

  // Refresh streak display every second while active
  const streakInterval = window.setInterval(() => {
    if (Date.now() >= streakBonusEndsAt && winStreak >= STREAK_THRESHOLD) {
      winStreak = 0;
      updateStreakDisplay();
    } else if (streakBonusEndsAt > 0) {
      updateStreakDisplay();
    }
  }, 1000);

  function showError(msg: string): void {
    const ex = contentEl.querySelector('.casino-error');
    if (ex) ex.remove();
    const el = document.createElement('div');
    el.className = 'casino-error';
    el.textContent = msg;
    contentEl.prepend(el);
    setTimeout(() => el.remove(), 2500);
  }

  function getBet(inputId: string): number {
    const inp = contentEl.querySelector<HTMLInputElement>(`#${inputId}`);
    const val = Math.max(1, parseInt(inp?.value || '1') || 1);
    localStorage.setItem(`bs_bet_${inputId}`, String(val));
    return val;
  }

  function getSavedBet(inputId: string, fallback = 100): number {
    return parseInt(localStorage.getItem(`bs_bet_${inputId}`) || String(fallback)) || fallback;
  }

  function betHTML(inputId: string, fallback = 100): string {
    const saved = getSavedBet(inputId, fallback);
    return `
      <div class="bet-wrap">
        <div class="bet-quicks">
          <button class="bet-quick" data-pct="10">10%</button>
          <button class="bet-quick" data-pct="25">25%</button>
          <button class="bet-quick" data-pct="50">50%</button>
          <button class="bet-quick" data-pct="100">MAX</button>
        </div>
        <input type="number" id="${inputId}" class="bet-input" value="${saved}" min="1">
      </div>
    `;
  }

  function attachBetQuicks(inputId: string): void {
    contentEl.querySelectorAll<HTMLElement>('.bet-quick').forEach(btn => {
      btn.addEventListener('click', () => {
        const pct = parseInt(btn.dataset.pct || '100');
        const max = Math.floor(store.getState().bits);
        const val = Math.max(1, Math.floor(max * pct / 100));
        const inp = contentEl.querySelector<HTMLInputElement>(`#${inputId}`);
        if (inp) inp.value = String(val);
      });
    });
  }

  function addHistory(game: string, won: boolean, amount: number): void {
    history.unshift({ game, won, amount });
    recordResult(won);
    updateHistory();
  }

  // ───────────────────────────────────────────────────────────────────────────
  // JEU 1 : BLACKJACK (6 decks, split, animation BJ)
  // ───────────────────────────────────────────────────────────────────────────
  let bjDeck: Card[] = [];
  let bjHands: Card[][] = [[]];   // 1 hand normally, 2 after split
  let bjHandBets: number[] = [100];
  let bjHandIdx = 0;              // hand currently being played
  let bjDealer: Card[] = [];
  let bjBet = 100;                // mise de la prochaine partie
  let bjPhase: 'bet' | 'play' | 'done' = 'bet';

  function bjPlayer(): Card[] { return bjHands[bjHandIdx]; }
  function bjActiveBet(): number { return bjHandBets[bjHandIdx]; }
  function bjSplitActive(): boolean { return bjHands.length > 1; }

  function bjUpdateBetDisplay(bet: number): void {
    const el = contentEl.querySelector<HTMLElement>('#bj-bet-display');
    if (el) el.textContent = formatNumber(bet) + ' bits';
  }

  function bjRender(): void {
    const dlCardsEl = contentEl.querySelector<HTMLElement>('#bj-dealer-cards');
    const dlTotalEl = contentEl.querySelector<HTMLElement>('#bj-dealer-total');
    const ctrlEl    = contentEl.querySelector<HTMLElement>('#bj-controls');
    const msgEl     = contentEl.querySelector<HTMLElement>('#bj-msg');
    if (!dlCardsEl || !ctrlEl || !msgEl) return;

    if (bjPhase === 'bet') {
      dlCardsEl.innerHTML = '<div class="bj-placeholder">♠ ♣ ♥ ♦</div>';
      const plCardsEl = contentEl.querySelector<HTMLElement>('#bj-player-cards');
      if (plCardsEl) plCardsEl.innerHTML = '<div class="bj-placeholder">Distribuez pour commencer</div>';
      if (dlTotalEl) dlTotalEl.textContent = '';
      msgEl.innerHTML = '';
      const betDisplay = contentEl.querySelector<HTMLElement>('#bj-bet-display');
      if (betDisplay) betDisplay.textContent = '—';
      ctrlEl.innerHTML = `
        ${betHTML('bj-bet', bjBet)}
        <button class="casino-btn" id="bj-deal">🃏 Distribuer</button>
      `;
      attachBetQuicks('bj-bet');
      contentEl.querySelector('#bj-deal')?.addEventListener('click', bjDeal);

    } else if (bjPhase === 'play') {
      dlCardsEl.innerHTML = bjDealer.map(c => cardHTML(c)).join('');
      const dVisible = handVal(bjDealer.filter(c => !c.faceDown));
      if (dlTotalEl) dlTotalEl.textContent = `${dVisible}${bjDealer.some(c => c.faceDown) ? ' + ?' : ''}`;

      // Player hand(s)
      const plCardsEl = contentEl.querySelector<HTMLElement>('#bj-player-cards');
      const plTotalEl = contentEl.querySelector<HTMLElement>('#bj-player-total');
      if (plCardsEl) {
        if (bjSplitActive()) {
          plCardsEl.innerHTML = bjHands.map((hand, i) => {
            const active = i === bjHandIdx;
            const val = handVal(hand);
            return `<div class="bj-split-hand${active ? ' bj-split-hand--active' : ''}">
              <div class="bj-split-label">Main ${i + 1} (${formatNumber(bjHandBets[i])} bits)${active ? ' ◀' : ''}</div>
              <div class="bj-cards">${hand.map(c => cardHTML(c)).join('')}</div>
              <div class="bj-total">${val}</div>
            </div>`;
          }).join('');
          if (plTotalEl) plTotalEl.textContent = '';
        } else {
          plCardsEl.innerHTML = bjPlayer().map(c => cardHTML(c)).join('');
          const pTotal = handVal(bjPlayer());
          if (plTotalEl) plTotalEl.textContent = String(pTotal);
        }
      }

      bjUpdateBetDisplay(bjActiveBet());

      const pTotal = handVal(bjPlayer());
      const canDouble = bjPlayer().length === 2 && store.getState().bits >= bjActiveBet();
      const canSplit = bjPlayer().length === 2
        && !bjSplitActive()
        && bjPlayer()[0].rank === bjPlayer()[1].rank
        && store.getState().bits >= bjActiveBet();
      ctrlEl.innerHTML = `
        <div class="bj-action-row">
          <button class="casino-btn" id="bj-hit">Tirer</button>
          <button class="casino-btn" id="bj-stand">Rester</button>
          <button class="casino-btn${canDouble ? '' : ' casino-btn--disabled'}" id="bj-double">Doubler</button>
          ${canSplit ? '<button class="casino-btn bj-btn-split" id="bj-split">Split</button>' : ''}
        </div>
        <div class="bj-total-row">Total : <span class="mono">${pTotal}</span></div>
      `;
      msgEl.innerHTML = '';
      contentEl.querySelector('#bj-hit')?.addEventListener('click', bjHit);
      contentEl.querySelector('#bj-stand')?.addEventListener('click', bjStand);
      if (canDouble) contentEl.querySelector('#bj-double')?.addEventListener('click', bjDouble);
      if (canSplit)  contentEl.querySelector('#bj-split')?.addEventListener('click', bjSplit);

    } else { // done
      bjDealer.forEach(c => { c.faceDown = false; });
      dlCardsEl.innerHTML = bjDealer.map(c => cardHTML(c)).join('');
      const dTotal = handVal(bjDealer);
      if (dlTotalEl) dlTotalEl.textContent = String(dTotal);

      const plCardsEl = contentEl.querySelector<HTMLElement>('#bj-player-cards');
      if (plCardsEl) {
        if (bjSplitActive()) {
          plCardsEl.innerHTML = bjHands.map((hand, i) => `
            <div class="bj-split-hand">
              <div class="bj-split-label">Main ${i + 1}</div>
              <div class="bj-cards">${hand.map(c => cardHTML(c)).join('')}</div>
              <div class="bj-total">${handVal(hand)}</div>
            </div>`).join('');
        } else {
          plCardsEl.innerHTML = bjPlayer().map(c => cardHTML(c)).join('');
          const pTotal = handVal(bjPlayer());
          const plTotalEl = contentEl.querySelector<HTMLElement>('#bj-player-total');
          if (plTotalEl) plTotalEl.textContent = String(pTotal);
        }
      }
      ctrlEl.innerHTML = `<button class="casino-btn" id="bj-again">Rejouer</button>`;
      contentEl.querySelector('#bj-again')?.addEventListener('click', () => {
        bjPhase = 'bet';
        bjHands = [[]];
        bjHandBets = [bjBet];
        bjHandIdx = 0;
        bjRender();
      });
    }
  }

  function bjDeal(): void {
    bjBet = getBet('bj-bet');
    if (store.getState().bits < bjBet) { showError('Bits insuffisants !'); return; }
    store.spendBits(bjBet);
    gameInProgress = true;

    bjDeck = shuffle(new6Deck());
    bjHands = [[{ ...bjDeck.pop()! }, { ...bjDeck.pop()! }]];
    bjHandBets = [bjBet];
    bjHandIdx = 0;
    bjDealer = [{ ...bjDeck.pop()! }, { ...bjDeck.pop()!, faceDown: true }];

    bjPhase = 'play';
    bjRender();

    // Natural blackjack check
    if (handVal(bjPlayer()) === 21) {
      // Flash animation
      const plCardsEl = contentEl.querySelector<HTMLElement>('#bj-player-cards');
      if (plCardsEl) plCardsEl.classList.add('bj-blackjack-flash');

      const msgEl = contentEl.querySelector<HTMLElement>('#bj-msg');
      if (msgEl) msgEl.innerHTML = '<div class="bj-bj-banner">🃏 BLACKJACK ! 🃏</div>';

      setTimeout(() => {
        bjDealer.forEach(c => { c.faceDown = false; });
        if (handVal(bjDealer) === 21) {
          bjFinish([{ push: true, msg: 'Double Blackjack — Égalité !' }]);
        } else {
          bjFinish([{ won: true, bonus: true, msg: '🃏 Blackjack ! ×1.5 !' }]);
        }
      }, 1400);
    }
  }

  function bjHit(): void {
    bjPlayer().push({ ...bjDeck.pop()! });
    bjRender();
    const total = handVal(bjPlayer());
    if (total > 21) {
      setTimeout(() => {
        const msgEl = contentEl.querySelector<HTMLElement>('#bj-msg');
        if (msgEl) {
          msgEl.innerHTML = `<div class="bj-result bj-result--lose">💥 Bust (${total}) !</div>`;
        }
        setTimeout(() => bjNextHandOrFinish(), 1000);
      }, 300);
    } else if (total === 21) {
      setTimeout(() => bjStand(), 300);
    }
  }

  function bjNextHandOrFinish(): void {
    if (bjSplitActive() && bjHandIdx < bjHands.length - 1) {
      // Switch to next split hand
      bjHandIdx++;
      bjRender();
    } else {
      bjDealerPlay();
    }
  }

  function bjStand(): void {
    bjNextHandOrFinish();
  }

  function bjDealerPlay(): void {
    bjDealer.forEach(c => { c.faceDown = false; });
    bjRender();

    function dealerDraw(): void {
      if (handVal(bjDealer) < 17) {
        setTimeout(() => {
          bjDealer.push({ ...bjDeck.pop()! });
          bjRender();
          dealerDraw();
        }, 650);
      } else {
        const d = handVal(bjDealer);
        const results: Array<{ won?: boolean; push?: boolean; bonus?: boolean; msg: string }> = [];

        bjHands.forEach((hand, i) => {
          const p = handVal(hand);
          if (p > 21) {
            results.push({ won: false, msg: `Main ${bjHands.length > 1 ? i + 1 + ' : ' : ''}Bust (${p}) — Perdu` });
          } else if (d > 21) {
            results.push({ won: true, msg: `Main ${bjHands.length > 1 ? i + 1 + ' : ' : ''}Croupier bust — Gagné !` });
          } else if (p > d) {
            results.push({ won: true, msg: `Main ${bjHands.length > 1 ? i + 1 + ' : ' : ''}${p} > ${d} — Gagné !` });
          } else if (p === d) {
            results.push({ push: true, msg: `Main ${bjHands.length > 1 ? i + 1 + ' : ' : ''}Égalité (${p})` });
          } else {
            results.push({ won: false, msg: `Main ${bjHands.length > 1 ? i + 1 + ' : ' : ''}${p} < ${d} — Croupier gagne` });
          }
        });

        setTimeout(() => bjFinish(results), 400);
      }
    }
    dealerDraw();
  }

  function bjDouble(): void {
    if (store.getState().bits < bjActiveBet()) { showError('Bits insuffisants pour doubler !'); return; }
    store.spendBits(bjActiveBet());
    bjHandBets[bjHandIdx] *= 2;
    bjPlayer().push({ ...bjDeck.pop()! });
    bjUpdateBetDisplay(bjHandBets[bjHandIdx]);
    bjRender();
    const total = handVal(bjPlayer());
    if (total > 21) {
      setTimeout(() => {
        bjNextHandOrFinish();
      }, 500);
    } else {
      setTimeout(() => bjStand(), 600);
    }
  }

  function bjSplit(): void {
    if (store.getState().bits < bjActiveBet()) { showError('Bits insuffisants pour splitter !'); return; }
    store.spendBits(bjActiveBet());
    const bet = bjHandBets[0];
    // Create 2 hands from the 2 starting cards, each gets one more card
    bjHands = [
      [bjHands[0][0], { ...bjDeck.pop()! }],
      [bjHands[0][1], { ...bjDeck.pop()! }],
    ];
    bjHandBets = [bet, bet];
    bjHandIdx = 0;
    bjRender();
  }

  interface BjResult { won?: boolean; push?: boolean; bonus?: boolean; msg: string; }

  function bjFinish(results: BjResult[]): void {
    bjPhase = 'done';
    let totalNet = 0;
    const moduleMult = store.getModuleMultiplier();

    results.forEach((r, i) => {
      const bet = bjHandBets[i];
      if (r.won) {
        // Base profit: bet×1.5 for blackjack natural, bet×1 for normal win.
        // Module multiplier applies only to the profit (bet is always refunded).
        const baseProfit = r.bonus ? Math.floor(bet * 1.5) : bet;
        const profit = Math.floor(baseProfit * moduleMult * streakMultiplier());
        store.addBits(bet + profit);
        totalNet += profit;
        addHistory('🃏', true, profit);
      } else if (r.push) {
        store.addBits(bet);
        addHistory('🃏', true, 0);
      } else {
        totalNet -= bet;
        addHistory('🃏', false, bet);
      }
    });

    gameInProgress = false;
    bjRender();
    const msgEl = contentEl.querySelector<HTMLElement>('#bj-msg');
    if (msgEl) {
      const lines = results.map(r => {
        const cls = r.won ? 'bj-result--win' : r.push ? 'bj-result--push' : 'bj-result--lose';
        return `<div class="bj-result ${cls}">${r.msg}</div>`;
      });
      const netSign = totalNet >= 0 ? '+' : '';
      lines.push(`<div class="bj-net-total">Net : ${netSign}${formatNumber(totalNet)} bits</div>`);
      msgEl.innerHTML = lines.join('');
    }
  }

  // ───────────────────────────────────────────────────────────────────────────
  // JEU 2 : COULEURS
  // ───────────────────────────────────────────────────────────────────────────
  let selectedSuit: Suit | null = null;

  function suitsRender(): void {
    contentEl.innerHTML = `
      <div class="casino-game-suits">
        <p class="suits-hint">Choisissez une couleur, puis misez. Bonne réponse → ×3</p>
        <div class="suits-choices">
          ${SUITS.map(s => {
            const red = s === '♥' || s === '♦';
            const active = selectedSuit === s;
            return `<button class="suit-btn${red ? ' suit-btn--red' : ''}${active ? ' suit-btn--active' : ''}" data-suit="${s}">${s}</button>`;
          }).join('')}
        </div>
        ${betHTML('suits-bet', 100)}
        <button class="casino-btn${selectedSuit ? '' : ' casino-btn--disabled'}" id="suits-play">Miser</button>
        <div id="suits-result" class="suits-result" style="display:none"></div>
      </div>
    `;

    attachBetQuicks('suits-bet');

    contentEl.querySelectorAll<HTMLElement>('.suit-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        selectedSuit = btn.dataset.suit as Suit;
        contentEl.querySelectorAll('.suit-btn').forEach(b =>
          b.classList.toggle('suit-btn--active', b === btn));
        const playBtn = contentEl.querySelector<HTMLButtonElement>('#suits-play');
        if (playBtn) playBtn.classList.remove('casino-btn--disabled');
      });
    });

    contentEl.querySelector('#suits-play')?.addEventListener('click', () => {
      if (!selectedSuit || gameInProgress) return;
      const bet = getBet('suits-bet');
      if (store.getState().bits < bet) { showError('Bits insuffisants !'); return; }
      gameInProgress = true;
      store.spendBits(bet);

      const drawnSuit = SUITS[Math.floor(Math.random() * 4)];
      const drawnRank = RANKS[Math.floor(Math.random() * 13)];
      const drawn: Card = { suit: drawnSuit, rank: drawnRank };
      const won = drawnSuit === selectedSuit;
      // ×4 total return (×3 net profit) × module multiplier on profit
      const moduleMult = store.getModuleMultiplier();
      const profit = won ? Math.floor(bet * 3 * moduleMult * streakMultiplier()) : 0;
      const net = won ? profit : -bet;
      const netSign = net >= 0 ? '+' : '';

      const resultEl = contentEl.querySelector<HTMLElement>('#suits-result')!;
      resultEl.style.display = 'flex';
      resultEl.innerHTML = `
        <div class="suits-drawn">${cardHTML(drawn)}</div>
        <div class="suits-verdict ${won ? 'suits-win' : 'suits-lose'}">
          ${won
            ? `✅ ${drawnSuit} — Gagné !<br><span class="mono">${netSign}${formatNumber(net)} bits nets</span>`
            : `❌ ${drawnSuit} — Raté !<br><span class="mono">${netSign}${formatNumber(net)} bits</span>`}
        </div>
      `;

      if (won) {
        store.addBits(bet + profit);
        addHistory('♥', true, profit);
      } else {
        addHistory('♥', false, bet);
      }

      setTimeout(() => {
        gameInProgress = false;
        selectedSuit = null;
        suitsRender();
      }, 2500);
    });
  }

  // ───────────────────────────────────────────────────────────────────────────
  // JEU 3 : ROUE DE LA FORTUNE (canvas + rotation corrigée)
  // ───────────────────────────────────────────────────────────────────────────
  let wheelRaf = 0;
  let wheelRot = 0; // rotation absolue (jamais normalisée pour éviter le bug d'aiguille)

  function wheelRender(): void {
    contentEl.innerHTML = `
      <div class="casino-game-wheel">
        <div class="wheel-canvas-wrap">
          <canvas id="wheel-canvas" width="200" height="200" class="wheel-canvas"></canvas>
          <div class="wheel-needle">▼</div>
        </div>
        ${betHTML('wheel-bet', 100)}
        <button class="casino-btn" id="wheel-spin">🎡 Faire tourner !</button>
        <div id="wheel-result" style="display:none" class="wheel-result-msg"></div>
      </div>
    `;
    attachBetQuicks('wheel-bet');
    const canvas = contentEl.querySelector<HTMLCanvasElement>('#wheel-canvas')!;
    const ctx = canvas.getContext('2d')!;
    drawWheel(ctx, 100, 100, 90, wheelRot);
    contentEl.querySelector('#wheel-spin')?.addEventListener('click', wheelPlay);
  }

  function wheelPlay(): void {
    if (gameInProgress) return;
    const bet = getBet('wheel-bet');
    if (store.getState().bits < bet) { showError('Bits insuffisants !'); return; }
    gameInProgress = true;
    store.spendBits(bet);

    const canvas = contentEl.querySelector<HTMLCanvasElement>('#wheel-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    const targetIdx = Math.floor(Math.random() * WHEEL.length);
    const targetRot = computeWheelTarget(wheelRot, targetIdx);

    const duration = 3500;
    const startTime = performance.now();
    const startRot = wheelRot;

    const spinBtn = contentEl.querySelector<HTMLButtonElement>('#wheel-spin')!;
    spinBtn.disabled = true;

    cancelAnimationFrame(wheelRaf);

    function tick(now: number): void {
      const elapsed = Math.min(now - startTime, duration);
      const t = elapsed / duration;
      const eased = 1 - Math.pow(1 - t, 4);
      const rot = startRot + eased * (targetRot - startRot);
      drawWheel(ctx, 100, 100, 90, rot);

      if (elapsed < duration) {
        wheelRaf = requestAnimationFrame(tick);
      } else {
        // Store targetRot directly (no normalization avoids precision drift)
        wheelRot = targetRot;
        drawWheel(ctx, 100, 100, 90, wheelRot);

        const sector = WHEEL[targetIdx];
        const resultEl = contentEl.querySelector<HTMLElement>('#wheel-result')!;
        resultEl.style.display = 'block';

        if (sector.mult > 0) {
          // Apply module multiplier only to the PROFIT (mult > 1).
          // Partial returns (×0.5, ×1) are refunded as-is — no boost on losses.
          const moduleMult = store.getModuleMultiplier();
          let gross: number;
          if (sector.mult > 1) {
            const profit = Math.floor(bet * (sector.mult - 1) * moduleMult * streakMultiplier());
            gross = bet + profit;
          } else {
            gross = Math.floor(bet * sector.mult); // partial refund, no boost
          }
          const net = gross - bet;
          const netSign = net >= 0 ? '+' : '';
          store.addBits(gross);
          resultEl.textContent = `${sector.label} — ${netSign}${formatNumber(net)} bits nets`;
          resultEl.className = net >= 0
            ? 'wheel-result-msg wheel-result--win'
            : 'wheel-result-msg wheel-result--lose';
          addHistory('🎡', net >= 0, Math.abs(net));
        } else {
          resultEl.textContent = `PERTE — −${formatNumber(bet)} bits`;
          resultEl.className = 'wheel-result-msg wheel-result--lose';
          addHistory('🎡', false, bet);
        }

        setTimeout(() => {
          gameInProgress = false;
          wheelRender();
        }, 2500);
      }
    }

    wheelRaf = requestAnimationFrame(tick);
  }

  // ───────────────────────────────────────────────────────────────────────────
  // RENDU GÉNÉRAL
  // ───────────────────────────────────────────────────────────────────────────
  function renderGame(game: GameType): void {
    if (gameInProgress && game !== currentGame) return;
    cancelAnimationFrame(wheelRaf);
    currentGame = game;
    tabs.forEach(tab => tab.classList.toggle('casino-tab--active', tab.dataset.game === game));

    if (game === 'blackjack') {
      contentEl.innerHTML = `
        <div class="casino-game-blackjack">
          <div class="bj-section">
            <div class="bj-label">Croupier <span id="bj-dealer-total" class="bj-total"></span></div>
            <div class="bj-cards" id="bj-dealer-cards"></div>
          </div>
          <div class="bj-bet-row">
            Mise en jeu : <span class="mono" id="bj-bet-display">—</span>
          </div>
          <div class="bj-section">
            <div class="bj-label">Vous <span id="bj-player-total" class="bj-total"></span></div>
            <div id="bj-player-cards"></div>
          </div>
          <div id="bj-controls" class="bj-controls"></div>
          <div id="bj-msg" class="bj-msg"></div>
        </div>
      `;
      bjPhase = 'bet';
      bjHands = [[]];
      bjHandBets = [bjBet];
      bjHandIdx = 0;
      bjDealer = [];
      bjDeck = [];
      bjRender();
    } else if (game === 'suits') {
      selectedSuit = null;
      suitsRender();
    } else if (game === 'wheel') {
      wheelRender();
    }
  }

  function updateBalance(): void {
    balanceEl.textContent = formatNumber(store.getState().bits);
  }

  function updateHistory(): void {
    historyEl.innerHTML = history.slice(0, 5).map(h => {
      const icon = h.won ? '✅' : '❌';
      return `<div class="casino-history-item ${h.won ? 'win' : 'lose'}">${icon} ${h.game} ${h.won ? '+' : '−'}${formatNumber(h.amount)}</div>`;
    }).join('');
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      if (!gameInProgress || tab.dataset.game === currentGame) {
        renderGame(tab.dataset.game as GameType);
      }
    });
  });

  const unsubStore = store.subscribe(updateBalance);
  renderGame('blackjack');
  updateBalance();

  return () => {
    cancelAnimationFrame(wheelRaf);
    clearInterval(streakInterval);
    unsubStore();
  };
}
