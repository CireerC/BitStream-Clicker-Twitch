(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={clicker:{baseBitsPerClick:1,comboWindowMs:500,maxComboMultiplier:8,clicksToMaxCombo:20,comboDecayMs:1200},generators:[{id:`bit_miner`,name:`Bit Miner`,description:`A basic script that mines bits slowly.`,emoji:`⛏️`,baseCost:15,growthRate:1.15,baseBps:.1,unlockAt:0},{id:`packet_router`,name:`Packet Router`,description:`Routes network packets for profit.`,emoji:`📡`,baseCost:100,growthRate:1.15,baseBps:.5,unlockAt:50},{id:`data_farm`,name:`Data Farm`,description:`A small farm of data-generating bots.`,emoji:`🌾`,baseCost:500,growthRate:1.15,baseBps:3,unlockAt:300},{id:`neural_net`,name:`Neural Net`,description:`Self-optimising bit generation network.`,emoji:`🧠`,baseCost:3e3,growthRate:1.15,baseBps:20,unlockAt:2e3},{id:`quantum_rig`,name:`Quantum Rig`,description:`Quantum-entangled bit harvesting.`,emoji:`⚛️`,baseCost:2e4,growthRate:1.15,baseBps:150,unlockAt:15e3},{id:`bit_singularity`,name:`Bit Singularity`,description:`A black hole that converts matter to bits.`,emoji:`🕳️`,baseCost:2e5,growthRate:1.15,baseBps:1500,unlockAt:15e4},{id:`warp_core`,name:`Warp Core`,description:`Bends spacetime to accelerate bit production.`,emoji:`🌀`,baseCost:5e6,growthRate:1.15,baseBps:2e4,unlockAt:2e6},{id:`dimensional_tap`,name:`Dimensional Tap`,description:`Siphons energy from parallel dimensions.`,emoji:`🔮`,baseCost:1e8,growthRate:1.15,baseBps:35e4,unlockAt:5e7},{id:`reality_engine`,name:`Reality Engine`,description:`Reshapes physical constants for maximum output.`,emoji:`🌌`,baseCost:3e9,growthRate:1.15,baseBps:7e6,unlockAt:1e9},{id:`the_omnibus`,name:`The Omnibus`,description:`An incomprehensible hypercomputer. Runs everything.`,emoji:`♾️`,baseCost:1e11,growthRate:1.15,baseBps:2e8,unlockAt:3e10}],projects:[{id:`better_click_feedback`,name:`Better Click Feedback`,description:`Improve click responsiveness and visual feedback.`,category:`gameplay`,cost:150,unlockAt:50,phase:1,effect:{enabled:`better_click_feedback`},requires:[]},{id:`combo_amplifier`,name:`Combo Amplifier`,description:`Extend combo meter cap from 8× to 12×.`,category:`gameplay`,cost:500,unlockAt:300,phase:1,effect:{maxCombo:12},requires:[]},{id:`market_access`,name:`Market Access`,description:`Unlock the Trade Module: buy/sell generators at market prices.`,category:`module`,cost:5e3,unlockAt:5e3,phase:2,effect:{unlocks:`trade`},requires:[]},{id:`prediction_engine`,name:`Prediction Engine`,description:`Enables market forecasting for better trading decisions.`,category:`gameplay`,cost:8e3,unlockAt:8e3,phase:2,effect:{enabled:`market_prediction`},requires:[`market_access`]},{id:`casino_charter`,name:`Casino Charter`,description:`Unlock the Casino Module: risk/reward betting with multipliers.`,category:`module`,cost:5e4,unlockAt:1e5,phase:3,effect:{unlocks:`casino`},requires:[]},{id:`puzzle_framework`,name:`Puzzle Framework`,description:`Unlock Tetris-like Puzzle Module: arrange blocks for bonuses.`,category:`module`,cost:8e4,unlockAt:15e4,phase:3,effect:{unlocks:`puzzle`},requires:[]},{id:`ai_trading`,name:`AI Trading`,description:`Automate trading decisions with neural networks.`,category:`gameplay`,cost:1e6,unlockAt:1e6,phase:4,effect:{enabled:`ai_trading`},requires:[`market_access`]},{id:`distributed_casino`,name:`Distributed Casino`,description:`Run multiple casino games in parallel for faster rewards.`,category:`gameplay`,cost:2e6,unlockAt:2e6,phase:4,effect:{enabled:`parallel_casino`},requires:[`casino_charter`]},{id:`neural_synchronization`,name:`Neural Synchronization`,description:`All modules feed into each other, multiplying effectiveness.`,category:`gameplay`,cost:5e7,unlockAt:5e7,phase:5,effect:{enabled:`module_sync`},requires:[`market_access`,`casino_charter`,`puzzle_framework`]},{id:`endgame_protocol`,name:`🚀 LAUNCH THE PROTOCOL`,description:`Deploy BitStream to every node on Earth. End condition: you win.`,category:`endgame`,cost:5e8,unlockAt:5e8,phase:5,effect:{endgame:!0},requires:[`neural_synchronization`]}],research:{rpsDiv:3,technologies:[{id:`lossless_compress`,name:`Lossless Compression`,description:`Compress bit streams for 20% more passive output.`,tier:1,phase:1,rpCost:50,effect:{passiveMultiplier:1.2},requires:[]},{id:`macro_engine`,name:`Macro Engine`,description:`Automate input patterns for 50% more bits per click.`,tier:1,phase:1,rpCost:80,effect:{clickMultiplier:1.5},requires:[]},{id:`combo_protocol`,name:`Combo Protocol`,description:`Extend the combo meter cap from ×8 to ×12.`,tier:1,phase:1,rpCost:150,effect:{maxCombo:12},requires:[`lossless_compress`]},{id:`hash_sharding`,name:`Hash Sharding`,description:`Distributed hash tables: all generators produce ×1.5.`,tier:2,phase:2,rpCost:600,effect:{passiveMultiplier:1.5},requires:[`lossless_compress`]},{id:`rp_accelerator`,name:`RP Accelerator`,description:`Dedicated research cores — research rate ×1.5.`,tier:2,phase:2,rpCost:900,effect:{researchMultiplier:1.5},requires:[`combo_protocol`]},{id:`exploit_amplifier`,name:`Exploit Amplifier`,description:`Mini-game rewards are doubled.`,tier:2,phase:2,rpCost:1500,effect:{minigameRewardMult:2},requires:[`macro_engine`]},{id:`neural_amplifier`,name:`Neural Amplification`,description:`Deep neural nets push all generators to ×3.`,tier:3,phase:3,rpCost:12e3,effect:{passiveMultiplier:3},requires:[`hash_sharding`]},{id:`global_cascade`,name:`Global Cascade`,description:`Cascade all gains globally: ×2 everything.`,tier:3,phase:3,rpCost:2e4,effect:{globalMultiplier:2},requires:[`rp_accelerator`,`neural_amplifier`]},{id:`deep_cache`,name:`Deep Cache`,description:`Offline cache extended from 8h to 16h.`,tier:3,phase:3,rpCost:35e3,effect:{offlineCapHours:16},requires:[`exploit_amplifier`]},{id:`quantum_sync`,name:`Quantum Sync`,description:`Quantum synchronisation across all nodes: global ×5.`,tier:4,phase:4,rpCost:3e5,effect:{globalMultiplier:5},requires:[`global_cascade`]},{id:`dark_cores`,name:`Dark Matter Cores`,description:`Tap dark matter for ×10 production.`,tier:4,phase:4,rpCost:5e5,effect:{passiveMultiplier:10},requires:[`neural_amplifier`]},{id:`temporal_acc`,name:`Temporal Accelerator`,description:`Bend time — research rate ×5.`,tier:4,phase:4,rpCost:15e5,effect:{researchMultiplier:5},requires:[`rp_accelerator`]},{id:`genesis_code`,name:`Genesis Code`,description:`Rewrite the universe's source: global ×20.`,tier:5,phase:5,rpCost:6e6,effect:{globalMultiplier:20},requires:[`quantum_sync`,`dark_cores`]},{id:`recursive_loop`,name:`Recursive Loop`,description:`Self-referential optimisation: all generators ×50.`,tier:5,phase:5,rpCost:25e6,effect:{passiveMultiplier:50},requires:[`temporal_acc`]},{id:`launch_protocol`,name:`🚀 LAUNCH THE PROTOCOL`,description:`Deploy the BitStream Protocol to every node on Earth. This ends the game.`,tier:5,phase:5,rpCost:1e8,effect:{endgame:!0},requires:[`genesis_code`,`recursive_loop`]}]},phases:[{id:1,threshold:0,title:`Garage Hacker`,narrative:`You start writing scripts in your bedroom. The stream goes live for the first time.`,unlocks:[`clicker`,`generators`,`upgrades`,`minigames`]},{id:2,threshold:1e4,title:`Going Online`,narrative:`Your scripts go viral. A small community forms around your stream. Research becomes possible.`,unlocks:[`research`]},{id:3,threshold:3e5,title:`Corporate Attention`,narrative:`A startup wants to partner. Corporate money starts flowing. New hardware arrives.`,unlocks:[]},{id:4,threshold:5e6,title:`Enterprise Scale`,narrative:`BitStream becomes a platform. Thousands of nodes are now live worldwide.`,unlocks:[]},{id:5,threshold:1e8,title:`Quantum Era`,narrative:`Quantum servers come online. The network transcends traditional computing.`,unlocks:[]}],minigames:{intervalRange:[12e4,3e5],durationMs:15e3,burstDurationSec:30,burstBpsMultiplier:10},offline:{maxOfflineMs:480*60*1e3,efficiency:.1},twitch:{liveMultiplier:1.5,pollIntervalMs:120*1e3},save:{intervalMs:1e4}};function t(e,t,n){return Math.floor(e*t**+n)}function n(e){return e>=0x38d7ea4c68000?(e/0x38d7ea4c68000).toFixed(2)+`Qa`:e>=0xe8d4a51000?(e/0xe8d4a51000).toFixed(2)+`T`:e>=1e9?(e/1e9).toFixed(2)+`B`:e>=1e6?(e/1e6).toFixed(2)+`M`:e>=1e3?(e/1e3).toFixed(2)+`K`:e>=10?Math.floor(e).toString():e>=1?e.toFixed(1):e>0?e.toFixed(2):`0`}function r(e){let t=Math.floor(e/3600),n=Math.floor(e%3600/60),r=Math.floor(e%60);return t>0?`${t}h ${n}m`:n>0?`${n}m ${r}s`:`${r}s`}function i(){return{bits:0,totalBitsEarned:0,clicker:{comboCount:0,comboMultiplier:1,lastClickTime:0},generators:e.generators.map(e=>({id:e.id,owned:0})),projects:e.projects.map(e=>({id:e.id,purchased:!1})),multipliers:{click:1,passive:1,global:1,twitch:1,minigame:1,minigameEndsAt:0,research:1},research:{points:0,techPurchased:[]},twitch:{isLive:!1,streamTitle:``,gameName:``,lastChecked:0,channelName:``},lastPhase:1,lastSaveTime:Date.now(),lastTickTime:Date.now()}}var a=new class{state=i();listeners=new Set;getState(){return this.state}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notify(){this.listeners.forEach(e=>e())}setState(e){e(this.state),this.notify()}addBits(e){this.state.bits+=e,this.state.totalBitsEarned+=e,this.notify()}spendBits(e){return this.state.bits<e?!1:(this.state.bits-=e,this.notify(),!0)}getResearchPS(){let t=this.getRawBPS();return Math.sqrt(t+1)/e.research.rpsDiv*this.state.multipliers.research}addResearchPoints(e){this.state.research.points+=e}isTechPurchased(e){return this.state.research.techPurchased.includes(e)}isTechAvailable(t){let n=e.research.technologies.find(e=>e.id===t);if(!n||this.isTechPurchased(t)||this.getCurrentPhase()<n.phase)return!1;for(let e of n.requires)if(!this.isTechPurchased(e))return!1;return!0}purchaseTech(t){let n=e.research.technologies.find(e=>e.id===t);return!n||!this.isTechAvailable(t)||this.state.research.points<n.rpCost?!1:(this.setState(e=>{e.research.points-=n.rpCost,e.research.techPurchased.push(t),this.recomputeMultipliers(e)}),!0)}getMaxCombo(){let t=e.research.technologies.find(e=>e.id===`combo_protocol`);return t&&this.isTechPurchased(`combo_protocol`)?t.effect.maxCombo??e.clicker.maxComboMultiplier:e.clicker.maxComboMultiplier}getOfflineCapMs(){let t=e.research.technologies.find(e=>e.id===`deep_cache`);return t&&this.isTechPurchased(`deep_cache`)?(t.effect.offlineCapHours??8)*36e5:e.offline.maxOfflineMs}getMinigameRewardMult(){let t=e.research.technologies.find(e=>e.id===`exploit_amplifier`);return t&&this.isTechPurchased(`exploit_amplifier`)?t.effect.minigameRewardMult??1:1}isMinigameActive(){return Date.now()<this.state.multipliers.minigameEndsAt}getPassiveMultiplier(){let e=this.state.multipliers;return e.passive*e.global*e.twitch*(this.isMinigameActive()?e.minigame:1)}getClickMultiplier(){let e=this.state.multipliers;return e.click*e.global*e.twitch*(this.isMinigameActive()?e.minigame:1)*this.state.clicker.comboMultiplier}getRawBPS(){let t=0;for(let n of e.generators){let e=this.state.generators.find(e=>e.id===n.id);e&&(t+=e.owned*n.baseBps)}return t}getEffectiveBPS(){return this.getRawBPS()*this.getPassiveMultiplier()}getEffectiveBPC(){return e.clicker.baseBitsPerClick*this.getClickMultiplier()}getCurrentPhase(){let t=this.state.totalBitsEarned,n=1;for(let r of e.phases)t>=r.threshold&&(n=r.id);return n}getCost(n){let r=e.generators.find(e=>e.id===n),i=this.state.generators.find(e=>e.id===n);return!r||!i?1/0:t(r.baseCost,r.growthRate,i.owned)}buyGenerator(e){let t=this.getCost(e);return this.state.bits<t?!1:(this.setState(n=>{n.bits-=t,n.generators.find(t=>t.id===e).owned+=1}),!0)}purchaseProject(t){let n=e.projects.find(e=>e.id===t),r=this.state.projects.find(e=>e.id===t);if(!n||!r||r.purchased||this.state.bits<n.cost||this.state.totalBitsEarned<n.unlockAt||this.getCurrentPhase()<n.phase)return!1;for(let e of n.requires)if(!this.state.projects.find(t=>t.id===e)?.purchased)return!1;return this.setState(e=>{e.bits-=n.cost,e.projects.find(e=>e.id===t).purchased=!0}),!0}recomputeMultipliers(t){let n=1,r=1,i=1,a=1;for(let o of e.research.technologies){if(!t.research.techPurchased.includes(o.id))continue;let e=o.effect;e.clickMultiplier&&(n*=e.clickMultiplier),e.passiveMultiplier&&(r*=e.passiveMultiplier),e.globalMultiplier&&(i*=e.globalMultiplier),e.researchMultiplier&&(a*=e.researchMultiplier)}t.multipliers.click=n,t.multipliers.passive=r,t.multipliers.global=i,t.multipliers.research=a}setTwitchLive(t,n){this.setState(r=>{r.twitch.isLive=t,r.twitch.streamTitle=n.title,r.twitch.gameName=n.game,r.twitch.lastChecked=Date.now(),r.multipliers.twitch=t?e.twitch.liveMultiplier:1})}loadState(t){let n=i();this.state={...n,...t,generators:n.generators.map(e=>t.generators?.find(t=>t.id===e.id)??e),projects:n.projects.map(e=>t.projects?.find(t=>t.id===e.id)??e),multipliers:{...n.multipliers,...t.multipliers??{}},research:{...n.research,...t.research??{}},twitch:{...n.twitch,...t.twitch??{}}},this.recomputeMultipliers(this.state),this.state.twitch.isLive&&(this.state.multipliers.twitch=e.twitch.liveMultiplier),this.notify()}resetState(){this.state=i(),this.notify()}},o=`bitstream_v1`,s=null;function c(){let e=s;return s=null,e}function l(){let e={...a.getState(),lastSaveTime:Date.now()};localStorage.setItem(o,JSON.stringify(e))}function u(){let t=localStorage.getItem(o);if(!t)return!1;try{let n=JSON.parse(t);if(n.lastSaveTime){let t=n.research?.techPurchased?.includes(`deep_cache`)?16*36e5:e.offline.maxOfflineMs,r=Math.min(Date.now()-n.lastSaveTime,t);if(r>5e3){let t=0;for(let r of e.generators){let e=n.generators?.find(e=>e.id===r.id);e&&(t+=e.owned*r.baseBps)}let i=n.multipliers?.passive??1,a=n.multipliers?.global??1,o=t*i*a*(r/1e3)*e.offline.efficiency;n.bits=(n.bits??0)+o,n.totalBitsEarned=(n.totalBitsEarned??0)+o,s={bitsEarned:o,seconds:r/1e3}}}return n.lastTickTime=Date.now(),a.loadState(n),!0}catch{return!1}}function d(){localStorage.removeItem(o),a.resetState()}function f(){setInterval(l,e.save.intervalMs),window.addEventListener(`beforeunload`,l)}function p(e){e.innerHTML=`
    <header class="header">
      <div class="header__brand">
        <span class="header__logo">⚡</span>
        <span class="header__title">BitStream</span>
      </div>

      <div class="header__currency">
        <span class="header__bits mono" id="hdr-bits">0</span>
        <span class="header__bits-label">BITS</span>
      </div>

      <div class="header__right">
        <div id="twitch-badge-slot"></div>
        <div class="header__actions">
          <button class="hdr-btn" id="btn-save" title="Save now">💾</button>
          <button class="hdr-btn hdr-btn--danger" id="btn-reset" title="Reset game">🗑</button>
        </div>
      </div>
    </header>
  `;let t=e.querySelector(`#hdr-bits`),r=e.querySelector(`#btn-save`),i=e.querySelector(`#btn-reset`);function o(){t.textContent=n(a.getState().bits),t.classList.remove(`bits--tick`),t.offsetWidth,t.classList.add(`bits--tick`)}r.addEventListener(`click`,()=>{l(),r.textContent=`✅`,setTimeout(()=>r.textContent=`💾`,1500)}),i.addEventListener(`click`,()=>{confirm(`Reset all progress? This cannot be undone.`)&&(d(),window.location.reload())});let s=a.subscribe(o);return o(),()=>s()}function m(t){t.innerHTML=`
    <div class="clicker-panel">
      <div class="clicker-core">
        <button id="main-btn" class="click-btn" aria-label="Click to earn bits">
          <span class="click-btn__icon">⚡</span>
          <span class="click-btn__label">CLICK</span>
        </button>
        <div class="combo-bar">
          <div class="combo-bar__fill" id="combo-fill" style="width:0%"></div>
          <span class="combo-bar__text" id="combo-text">×1.0</span>
        </div>
      </div>
      <div class="clicker-stats">
        <div class="stat-row">
          <span class="stat-label">Per click</span>
          <span class="stat-value mono" id="bpc-display">0</span>
        </div>
      </div>
    </div>
  `;let r=t.querySelector(`#main-btn`),i=t.querySelector(`#combo-fill`),o=t.querySelector(`#combo-text`),s=t.querySelector(`#bpc-display`),c=0;function l(e){let t=a.getEffectiveBPC();a.addBits(t),f(r,t),r.classList.remove(`click-btn--pop`),r.offsetWidth,r.classList.add(`click-btn--pop`),u(),p(r,e)}function u(){let t=Date.now();clearTimeout(c),a.setState(n=>{t-n.clicker.lastClickTime<=e.clicker.comboWindowMs?n.clicker.comboCount=Math.min(n.clicker.comboCount+1,e.clicker.clicksToMaxCombo):n.clicker.comboCount=1,n.clicker.lastClickTime=t;let r=n.clicker.comboCount/e.clicker.clicksToMaxCombo;n.clicker.comboMultiplier=1+(e.clicker.maxComboMultiplier-1)*Math.min(r,1)}),d(),c=window.setTimeout(()=>{a.setState(e=>{e.clicker.comboCount=0,e.clicker.comboMultiplier=1}),d()},e.clicker.comboDecayMs)}function d(){let{comboCount:t,comboMultiplier:n}=a.getState().clicker,r=t/e.clicker.clicksToMaxCombo*100;i.style.width=r.toFixed(1)+`%`,o.textContent=`×${n.toFixed(1)}`}function f(e,t){let r=document.createElement(`div`);r.className=`click-floater`,r.textContent=`+`+n(t);let i=e.getBoundingClientRect();r.style.left=i.left+i.width/2+(Math.random()-.5)*60+`px`,r.style.top=i.top-10+`px`,document.body.appendChild(r),r.addEventListener(`animationend`,()=>r.remove(),{once:!0})}function p(e,t){let n=document.createElement(`span`);n.className=`click-ripple`;let r=e.getBoundingClientRect(),i=t instanceof MouseEvent?t.clientX:t.touches[0].clientX,a=t instanceof MouseEvent?t.clientY:t.touches[0].clientY;n.style.left=i-r.left+`px`,n.style.top=a-r.top+`px`,e.appendChild(n),n.addEventListener(`animationend`,()=>n.remove(),{once:!0})}function m(){s.textContent=n(a.getEffectiveBPC())}r.addEventListener(`click`,l);let h=a.subscribe(m);return m(),()=>{h(),clearTimeout(c)}}function h(r){r.innerHTML=`
    <div class="production-panel">
      <h2 class="panel-title">Generators</h2>
      <div id="generators-list" class="generators-list"></div>
    </div>
  `;let i=r.querySelector(`#generators-list`),o=``;function s(){let t=a.getState(),n=t.generators.map(e=>e.owned).join(`,`),r=e.generators.map(e=>t.totalBitsEarned>=e.unlockAt?`1`:`0`).join(``);return n+`|`+r+`|`+Math.floor(t.multipliers.passive)}function c(){let r=a.getState();i.innerHTML=``;let o=!1;for(let s of e.generators){let e=r.generators.find(e=>e.id===s.id);if(r.totalBitsEarned<s.unlockAt)continue;o=!0;let c=t(s.baseCost,s.growthRate,e.owned),l=r.bits>=c,u=e.owned*s.baseBps*a.getPassiveMultiplier(),d=document.createElement(`div`);d.className=`gen-card${l?` gen-card--affordable`:``}`,d.dataset.id=s.id,d.innerHTML=`
        <div class="gen-card__icon">${s.emoji}</div>
        <div class="gen-card__info">
          <div class="gen-card__name">${s.name}</div>
          <div class="gen-card__desc">${s.description}</div>
          <div class="gen-card__bps mono">${e.owned>0?n(u)+` b/s`:`idle`}</div>
        </div>
        <div class="gen-card__right">
          <div class="gen-card__owned mono">${e.owned}</div>
          <button class="gen-btn${l?``:` gen-btn--disabled`}" data-buy="${s.id}">
            <span class="gen-btn__cost mono">${n(c)}</span>
            <span class="gen-btn__label">BUY</span>
          </button>
        </div>
      `,i.appendChild(d)}o||(i.innerHTML=`<p class="gen-hint">Earn more bits to unlock generators…</p>`)}function l(){let r=a.getState();for(let o of e.generators){let e=i.querySelector(`[data-id="${o.id}"]`);if(!e)continue;let s=r.generators.find(e=>e.id===o.id),c=t(o.baseCost,o.growthRate,s.owned),l=r.bits>=c;e.classList.toggle(`gen-card--affordable`,l);let u=e.querySelector(`[data-buy="${o.id}"]`);if(u.classList.toggle(`gen-btn--disabled`,!l),u.querySelector(`.gen-btn__cost`).textContent=n(c),s.owned>0){let t=s.owned*o.baseBps*a.getPassiveMultiplier();e.querySelector(`.gen-card__bps`).textContent=n(t)+` b/s`}}}function u(){let e=s();e===o?l():(o=e,c())}function d(e){let t=e.target.closest(`[data-buy]`);if(!t)return;let n=t.dataset.buy;a.buyGenerator(n)&&i.querySelector(`[data-id="${n}"]`)?.classList.add(`gen-card--bought`)}i.addEventListener(`click`,d);let f=a.subscribe(u);return o=s(),c(),()=>f()}function g(){let t=document.createElement(`div`);t.className=`endgame-overlay`;let{totalBitsEarned:r}=a.getState();t.innerHTML=`
    <div class="endgame-modal">
      <div class="endgame-modal__glow"></div>
      <div class="endgame-modal__content">
        <div class="endgame-modal__icon">🚀</div>
        <h1 class="endgame-modal__title">THE BITSTREAM PROTOCOL IS LIVE</h1>
        <p class="endgame-modal__subtitle">
          You've built a global distributed network from a single bedroom script.<br/>
          The protocol is now running on every node on Earth.
        </p>
        <div class="endgame-stats">
          <div class="endgame-stat">
            <span class="endgame-stat__label">Total Bits Generated</span>
            <span class="endgame-stat__value mono">${n(r)}</span>
          </div>
          <div class="endgame-stat">
            <span class="endgame-stat__label">Peak BPS</span>
            <span class="endgame-stat__value mono">${n(a.getEffectiveBPS())} b/s</span>
          </div>
          <div class="endgame-stat">
            <span class="endgame-stat__label">Projects Completed</span>
            <span class="endgame-stat__value mono">${a.getState().projects.filter(e=>e.purchased).length} / ${e.projects.length}</span>
          </div>
        </div>
        <p class="endgame-modal__continue">The network keeps running. Keep accumulating — there's always more.</p>
        <button class="endgame-close" id="endgame-close">Continue Playing</button>
      </div>
    </div>
  `,document.body.appendChild(t),t.querySelector(`#endgame-close`).addEventListener(`click`,()=>{t.classList.add(`endgame-overlay--out`),t.addEventListener(`animationend`,()=>t.remove(),{once:!0})})}var _={gameplay:`🎮 Gameplay`,module:`📦 New Module`,automation:`🤖 Automation`,economic:`💰 Economic`,minigame:`🎲 Mini-games`,endgame:`🚀 Endgame`};function v(t){t.innerHTML=`
    <div class="projects-panel">
      <h2 class="panel-title">Projects</h2>
      <div id="projects-list" class="projects-list"></div>
    </div>
  `;let r=t.querySelector(`#projects-list`),i=``;function o(){let t=a.getState(),n=t.projects.filter(e=>e.purchased).map(e=>e.id).join(`,`),r=e.projects.map(e=>{if(t.projects.find(t=>t.id===e.id).purchased)return`0`;let n=e.requires.every(e=>t.projects.find(t=>t.id===e)?.purchased),r=t.totalBitsEarned>=e.unlockAt&&a.getCurrentPhase()>=e.phase;return r&&n?`1`:!r&&n?`2`:`3`}).join(``);return n+`|`+r}function s(e){return a.getCurrentPhase()>=e}function c(t){let n=a.getState(),r=e.projects.find(e=>e.id===t);if(n.projects.find(e=>e.id===t).purchased||n.totalBitsEarned<r.unlockAt||!s(r.phase))return!1;for(let e of r.requires)if(!n.projects.find(t=>t.id===e)?.purchased)return!1;return!0}function l(t){let n=a.getState(),r=e.projects.find(e=>e.id===t);if(n.projects.find(e=>e.id===t).purchased||n.totalBitsEarned>=r.unlockAt&&s(r.phase))return!1;for(let e of r.requires)if(!n.projects.find(t=>t.id===e)?.purchased)return!1;return!0}function u(e){let t=[];return e.unlocks&&t.push(`Unlock: ${e.unlocks}`),e.maxCombo&&t.push(`Max combo: ${e.maxCombo}×`),e.enabled&&t.push(`Enable: ${e.enabled}`),e.endgame&&t.push(`🏁 Game ending`),t.join(` · `)}function d(){let t=a.getState();r.innerHTML=``;let i=e.projects.filter(e=>c(e.id)),o=e.projects.filter(e=>l(e.id));if(i.length===0&&o.length===0){r.innerHTML=`<p class="prj-hint">All projects completed.<br/>You win! 🏆</p>`;return}let s=new Map;for(let e of i)s.has(e.category)||s.set(e.category,[]),s.get(e.category).push(e);for(let[e,i]of s){let a=document.createElement(`div`);a.className=`prj-section`,a.innerHTML=`<div class="prj-section__label">${_[e]??e}</div>`;for(let e of i){let r=t.bits>=e.cost,i=document.createElement(`div`);i.className=`prj-card${r?` prj-card--affordable`:``}`,i.dataset.id=e.id,i.innerHTML=`
          <div class="prj-card__header">
            <span class="prj-card__name">${e.name}</span>
            <span class="prj-card__cost mono">${n(e.cost)} bits</span>
          </div>
          <div class="prj-card__desc">${e.description}</div>
          <div class="prj-card__effect">${u(e.effect)}</div>
          <button class="prj-btn${r?``:` prj-btn--disabled`}" data-buy="${e.id}">
            ${r?`RESEARCH`:`Need `+n(e.cost-t.bits)+` more`}
          </button>
        `,a.appendChild(i)}r.appendChild(a)}let d=new Map;for(let e of o)d.has(e.category)||d.set(e.category,e);if(d.size>0){let e=document.createElement(`div`);e.className=`prj-section`,e.innerHTML=`<div class="prj-section__label prj-section__label--locked">🔒 Coming up</div>`;for(let r of d.values()){let i=r.unlockAt-t.totalBitsEarned,a=document.createElement(`div`);a.className=`prj-card prj-card--locked`,a.innerHTML=`
          <div class="prj-card__header">
            <span class="prj-card__name">${r.name}</span>
            <span class="prj-card__cost mono">${n(r.cost)} bits</span>
          </div>
          <div class="prj-card__desc">${r.description}</div>
          <div class="prj-card__locked-hint">Earn ${n(i)} more bits total to unlock</div>
        `,e.appendChild(a)}r.appendChild(e)}}function f(t){let n=t.target.closest(`[data-buy]`);if(!n)return;let r=n.dataset.buy;a.purchaseProject(r)&&(e.projects.find(e=>e.id===r)?.effect).endgame&&g()}function p(){let t=o();if(t!==i)i=t,d();else{let t=a.getState();r.querySelectorAll(`[data-buy]`).forEach(r=>{let i=r.dataset.buy,a=e.projects.find(e=>e.id===i),o=t.bits>=a.cost;r.classList.toggle(`prj-btn--disabled`,!o),r.textContent=o?`RESEARCH`:`Need `+n(a.cost-t.bits)+` more`,r.closest(`.prj-card`).classList.toggle(`prj-card--affordable`,o)})}}r.addEventListener(`click`,f);let m=a.subscribe(p);return i=o(),d(),()=>m()}function y(e){e.innerHTML=`
    <div class="casino-panel">
      <h2 class="panel-title">🎰 Casino</h2>
      <div class="casino-stats">
        <div class="stat-row">
          <span class="stat-label">Wallet</span>
          <span class="stat-value mono" id="casino-wallet">0</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">Multiplier</span>
          <span class="stat-value mono" id="casino-mult">1.50×</span>
        </div>
      </div>
      <div class="casino-games"></div>
    </div>
  `;let t=e.querySelector(`.casino-games`),r=e.querySelector(`#casino-wallet`);e.querySelector(`#casino-mult`);let i=[{id:`safe`,name:`Safe Bet`,risk:100,mult:1.25},{id:`risky`,name:`Risky Bet`,risk:500,mult:2},{id:`extreme`,name:`Extreme Bet`,risk:2e3,mult:5}];function o(){t.innerHTML=``;let e=a.getState();for(let r of i){let i=e.bits>=r.risk,a=document.createElement(`div`);a.className=`casino-game${i?` casino-game--affordable`:``}`,a.innerHTML=`
        <div class="casino-game__name">${r.name}</div>
        <div class="casino-game__odds">Win: ×${r.mult}</div>
        <button class="casino-btn${i?``:` casino-btn--disabled`}" data-game="${r.id}">
          ${n(r.risk)} Bits
        </button>
      `,t.appendChild(a)}}function s(e){let t=e.target.closest(`[data-game]`);if(!t)return;let n=t.dataset.game,r=i.find(e=>e.id===n);if(!(a.getState().bits<r.risk)){if(Math.random()<.5){let e=r.risk*r.mult;a.addBits(e)}else a.spendBits(r.risk);o()}}function c(){r.textContent=n(a.getState().bits),o()}t.addEventListener(`click`,s);let l=a.subscribe(c);return o(),c(),()=>l()}function b(t){t.innerHTML=`
    <div class="trade-panel">
      <h2 class="panel-title">💱 Trade</h2>
      <div class="trade-header">
        <div class="trade-header__label">Market prices fluctuate ±20%</div>
        <div class="trade-list"></div>
      </div>
    </div>
  `;let r=t.querySelector(`.trade-list`),i=new Map;for(let t of e.generators){let e=.8+Math.random()*.4;i.set(t.id,e)}function o(){r.innerHTML=``;let t=a.getState();for(let a of e.generators){let e=t.generators.find(e=>e.id===a.id);if(e.owned===0)continue;let o=a.baseCost*a.growthRate**e.owned*.5,s=i.get(a.id)||1,c=Math.floor(o*s),l=document.createElement(`div`);l.className=`trade-item`,l.innerHTML=`
        <div class="trade-item__name">${a.emoji} ${a.name}</div>
        <div class="trade-item__owned">Owned: ${e.owned}</div>
        <div class="trade-item__price">
          <span class="trade-item__price-label">Sell 1 for</span>
          <span class="trade-item__price-value mono">${n(c)}</span>
        </div>
        <button class="trade-btn" data-gen="${a.id}" data-price="${c}">
          Sell One
        </button>
      `,r.appendChild(l)}r.innerHTML===``&&(r.innerHTML=`<p class="trade-empty">Own generators to trade them on the market.</p>`)}function s(e){let t=e.target.closest(`[data-gen]`);if(!t)return;let n=t.dataset.gen,r=parseInt(t.dataset.price||`0`,10);a.getState().generators.find(e=>e.id===n).owned!==0&&(a.setState(e=>{--e.generators.find(e=>e.id===n).owned}),a.addBits(r),o())}function c(){o()}r.addEventListener(`click`,s);let l=a.subscribe(c);return o(),()=>l()}function x(e){e.innerHTML=`
    <div class="puzzle-panel">
      <h2 class="panel-title">🧩 Puzzle</h2>
      <div class="puzzle-intro">
        <p>Arrange blocks for production bonuses!</p>
        <p class="puzzle-note">Feature coming soon: interactive block puzzle</p>
      </div>
      <div class="puzzle-grid" id="puzzle-grid"></div>
      <button id="puzzle-btn" class="puzzle-btn">Generate Pattern</button>
    </div>
  `;let t=e.querySelector(`#puzzle-grid`),n=e.querySelector(`#puzzle-btn`),r=0;function i(){t.innerHTML=``,r=0;for(let e=0;e<16;e++){let n=document.createElement(`div`);n.className=`puzzle-block`,n.dataset.index=String(e),n.addEventListener(`click`,o),t.appendChild(n)}n.textContent=`Score: 0 | Click blocks in sequence`}function o(e){let t=e.target;t.classList.contains(`puzzle-block`)&&(t.classList.toggle(`puzzle-block--active`),r+=10,n.textContent=`Score: ${r} | Claim bonus when ready!`,r>50&&s())}function s(){let e=Math.floor(r/10);a.addBits(e),i()}n.addEventListener(`click`,s);function c(){}let l=a.subscribe(c);return i(),()=>l()}var S=[{title:`🎯 Click the Target`,instructions:`Click the glowing target 5 times.`,mount(e,t){let n=0;function r(){let i=document.createElement(`button`);i.className=`mg-target`;let a=Math.max(e.clientWidth-52,10),o=Math.max(e.clientHeight-52,10);i.style.left=Math.random()*a+`px`,i.style.top=Math.random()*o+`px`,e.appendChild(i),i.addEventListener(`click`,()=>{i.remove(),++n>=5?t():r()},{once:!0})}return r(),()=>e.querySelectorAll(`.mg-target`).forEach(e=>e.remove())}},{title:`⌨️ Key Sequence`,instructions:`Type the sequence shown.`,mount(e,t,n){let r=[`A`,`S`,`D`,`F`,`J`,`K`,`L`],i=Array.from({length:5},()=>r[Math.floor(Math.random()*r.length)]),a=0,o=document.createElement(`div`);o.className=`mg-sequence`,o.innerHTML=i.map((e,t)=>`<span class="mg-key" id="k${t}">${e}</span>`).join(``),e.appendChild(o);function s(e){e.key.toUpperCase()===i[a]?(o.querySelector(`#k${a}`)?.classList.add(`mg-key--hit`),++a>=i.length&&t()):n()}return window.addEventListener(`keydown`,s),()=>window.removeEventListener(`keydown`,s)}},{title:`🧮 Quick Math`,instructions:`Tap the correct answer.`,mount(e,t,n){let r=Math.floor(Math.random()*20)+1,i=Math.floor(Math.random()*20)+1,a=r+i,o=new Set;for(;o.size<3;){let e=a+Math.floor(Math.random()*20)-10;e!==a&&e>0&&o.add(e)}let s=[...o,a].sort(()=>Math.random()-.5),c=document.createElement(`div`);return c.className=`mg-math`,c.innerHTML=`
      <div class="mg-math__question">${r} + ${i} = ?</div>
      <div class="mg-math__choices">
        ${s.map(e=>`<button class="mg-choice" data-val="${e}">${e}</button>`).join(``)}
      </div>
    `,e.appendChild(c),c.addEventListener(`click`,e=>{let r=e.target.closest(`[data-val]`);r&&(Number(r.dataset.val)===a?t():n())}),()=>{}}}];function C(){let t=0,i=null,o=null;function s(){let[n,r]=e.minigames.intervalRange;t=window.setTimeout(c,n+Math.random()*(r-n))}function c(){if(i)return;let e=S[Math.floor(Math.random()*S.length)];l(e)}function l(t){let c=document.createElement(`div`);c.className=`mg-card`;let l=e.minigames.durationMs/1e3;c.innerHTML=`
      <div class="mg-card__header">
        <span class="mg-card__title">${t.title}</span>
        <div class="mg-card__controls">
          <span class="mg-card__timer mono" id="mg-timer">${l}</span>
          <button class="mg-card__close" id="mg-close" title="Skip (give up)">✕</button>
        </div>
      </div>
      <p class="mg-card__instructions">${t.instructions}</p>
      <div class="mg-card__arena" id="mg-arena"></div>
      <div class="mg-card__result" id="mg-result" style="display:none"></div>
    `,document.body.appendChild(c),i=c;let d=c.querySelector(`#mg-arena`),f=c.querySelector(`#mg-timer`),p=c.querySelector(`#mg-result`),m=c.querySelector(`#mg-close`),h=l,g=setInterval(()=>{h--,f.textContent=String(h),h<=0&&(clearInterval(g),v())},1e3);m.addEventListener(`click`,()=>{clearInterval(g),o?.(),b(!1)});function _(){clearInterval(g),o?.(),u(),y(!0)}function v(){o?.(),y(!1)}function y(t){d.style.display=`none`,p.style.display=`flex`;let i=a.getEffectiveBPS()*e.minigames.burstDurationSec*e.minigames.burstBpsMultiplier;p.innerHTML=t?`<div class="mg-result mg-result--win">
             <span>🎉 +${n(i)} bits!</span>
             <small>×${e.minigames.burstBpsMultiplier} BPS · ${r(e.minigames.burstDurationSec)}</small>
           </div>`:`<div class="mg-result mg-result--lose"><span>💀 Too slow!</span></div>`,setTimeout(()=>b(!0),2200)}function b(e){c.classList.add(`mg-card--out`),c.addEventListener(`animationend`,()=>{c.remove(),i=null,o=null,e&&s()},{once:!0})}o=t.mount(d,_,v)}function u(){let t=a.getEffectiveBPS()*e.minigames.burstDurationSec*e.minigames.burstBpsMultiplier;a.setState(n=>{n.bits+=t,n.totalBitsEarned+=t,n.multipliers.minigame=e.minigames.burstBpsMultiplier,n.multipliers.minigameEndsAt=Date.now()+e.minigames.burstDurationSec*1e3})}return s(),()=>{clearTimeout(t),o?.(),i?.remove()}}var w=[];function T(){let e=a.getCurrentPhase(),t=a.subscribe(()=>{let t=a.getCurrentPhase();t>e&&(e=t,a.setState(e=>{e.lastPhase=t}),E(t),w.forEach(e=>e(t)))});return()=>t()}function E(t){let n=e.phases.find(e=>e.id===t);if(!n)return;let r=n.unlocks.length>0?`<div class="phase-notif__unlocks">New: ${n.unlocks.map(e=>`<strong>${e}</strong>`).join(`, `)}</div>`:``,i=document.createElement(`div`);i.className=`phase-notif`,i.innerHTML=`
    <div class="phase-notif__badge">Phase ${t}</div>
    <div class="phase-notif__title">${n.title}</div>
    <div class="phase-notif__narrative">${n.narrative}</div>
    ${r}
  `,document.body.appendChild(i);let a=()=>{i.classList.add(`phase-notif--out`),i.addEventListener(`animationend`,()=>i.remove(),{once:!0})};i.addEventListener(`click`,a),setTimeout(a,6e3)}var D=0;function O(t){if(!t.clientId||!t.channelName)return()=>{};a.setState(e=>{e.twitch.channelName=t.channelName});async function n(){try{let e=`https://api.twitch.tv/helix/streams?user_login=${encodeURIComponent(t.channelName)}`,n=await fetch(e,{headers:{"Client-ID":t.clientId,Authorization:`Bearer ${window.__TWITCH_TOKEN__??``}`}});if(!n.ok){console.warn(`[Twitch] API responded with`,n.status);return}let r=(await n.json()).data[0],i=!!r;a.setTwitchLive(i,{title:r?.title??``,game:r?.game_name??``})}catch(e){console.warn(`[Twitch] Poll failed:`,e)}}return n(),D=window.setInterval(n,e.twitch.pollIntervalMs),()=>clearInterval(D)}function k(e){function t(){let{twitch:t,multipliers:n}=a.getState();if(!t.channelName){e.style.display=`none`;return}e.style.display=`flex`,t.isLive?e.innerHTML=`
        <div class="twitch-badge twitch-badge--live">
          <span class="twitch-badge__dot"></span>
          <span class="twitch-badge__text">LIVE</span>
          <span class="twitch-badge__boost">+${Math.round((n.twitch-1)*100)}%</span>
          ${t.gameName?`<span class="twitch-badge__game">${t.gameName}</span>`:``}
        </div>
      `:e.innerHTML=`
        <div class="twitch-badge twitch-badge--offline">
          <span class="twitch-badge__text">⚫ ${t.channelName} offline</span>
        </div>
      `}let n=a.subscribe(t);return t(),()=>n()}function A(t,r={}){t.innerHTML=`
    <div id="hdr"></div>
    <main class="layout">
      <aside class="layout__left" id="layout-left">
        <section id="clicker-slot"></section>
        <section id="prod-slot"></section>
        <section id="casino-slot" style="display:none"></section>
        <section id="trade-slot" style="display:none"></section>
        <section id="puzzle-slot" style="display:none"></section>
      </aside>

      <section class="layout__center">
        <div class="stats-card">
          <div class="stats-card__row">
            <span class="stats-label">Total earned</span>
            <span class="stats-value mono" id="stat-total">0</span>
          </div>
          <div class="stats-card__row">
            <span class="stats-label">BPS</span>
            <span class="stats-value mono" id="stat-bps">0</span>
          </div>
          <div class="stats-card__row">
            <span class="stats-label">BPC</span>
            <span class="stats-value mono" id="stat-bpc">0</span>
          </div>
          <div class="stats-card__row">
            <span class="stats-label">Global ×</span>
            <span class="stats-value mono" id="stat-multi">1.00×</span>
          </div>
          <div class="stats-card__row" id="burst-row" style="display:none">
            <span class="stats-label burst-label">⚡ BURST</span>
            <span class="stats-value mono burst-value" id="stat-burst"></span>
          </div>
          <div class="stats-card__row">
            <span class="stats-label">Phase</span>
            <span class="stats-value mono" id="stat-phase">I — Garage Hacker</span>
          </div>
        </div>

        <div id="twitch-badge-slot" class="twitch-slot"></div>
      </section>

      <aside class="layout__right">
        <section id="projects-slot"></section>
      </aside>
    </main>
  `,p(t.querySelector(`#hdr`)),m(t.querySelector(`#clicker-slot`)),h(t.querySelector(`#prod-slot`)),v(t.querySelector(`#projects-slot`)),C(),T(),r.twitchClientId&&r.twitchChannel&&O({clientId:r.twitchClientId,channelName:r.twitchChannel}),k(t.querySelector(`#twitch-badge-slot`));let i=t.querySelector(`#casino-slot`),o=t.querySelector(`#trade-slot`),s=t.querySelector(`#puzzle-slot`),c=!1,l=!1,u=!1;function d(){let e=a.getState();!c&&e.projects.find(e=>e.id===`casino_charter`)?.purchased&&(i.style.display=``,y(i),c=!0),!l&&e.projects.find(e=>e.id===`market_access`)?.purchased&&(o.style.display=``,b(o),l=!0),!u&&e.projects.find(e=>e.id===`puzzle_framework`)?.purchased&&(s.style.display=``,x(s),u=!0)}a.subscribe(d),d();let f=t.querySelector(`#stat-total`),g=t.querySelector(`#stat-bps`),_=t.querySelector(`#stat-bpc`),S=t.querySelector(`#stat-multi`),w=t.querySelector(`#burst-row`),E=t.querySelector(`#stat-burst`),D=t.querySelector(`#stat-phase`),A=[``,`I`,`II`,`III`,`IV`,`V`];function j(){let r=a.getState(),i=r.multipliers,o=a.getCurrentPhase(),s=e.phases.find(e=>e.id===o);f.textContent=n(r.totalBitsEarned),g.textContent=n(a.getEffectiveBPS())+` b/s`,_.textContent=n(a.getEffectiveBPC())+` /click`,D.textContent=`${A[o]} — ${s.title}`,S.textContent=n(i.click*i.passive*i.global*i.twitch)+`×`;let c=a.isMinigameActive();if(w.style.display=c?`flex`:`none`,c){let e=Math.max(0,Math.ceil((i.minigameEndsAt-Date.now())/1e3));E.textContent=`×${i.minigame} · ${e}s`}o===5?t.setAttribute(`data-phase`,`5`):t.removeAttribute(`data-phase`)}a.subscribe(j),j()}var j=0,M=0,N=500,P=0;function F(e){j===0&&(j=e);let t=Math.min((e-j)/1e3,1);j=e;let n=a.getEffectiveBPS();n>0&&a.addBits(n*t),M+=a.getResearchPS()*t,e-P>N&&(M>0&&(a.addResearchPoints(M),M=0,a.notify()),P=e),requestAnimationFrame(F)}function I(){j=0,P=performance.now(),requestAnimationFrame(F)}function L(e){let t=document.createElement(`div`);t.className=`mg-overlay`,t.innerHTML=`
    <div class="mg-modal offline-modal" role="dialog" aria-modal="true">
      <div class="offline-modal__icon">💤</div>
      <h2 class="offline-modal__title">Welcome back!</h2>
      <p class="offline-modal__desc">
        While you were away for <strong>${r(e.seconds)}</strong>,<br/>
        your generators earned
      </p>
      <div class="offline-modal__amount mono">+${n(e.bitsEarned)} bits</div>
      <button class="upg-btn offline-modal__btn" id="offline-close">Claim & Continue</button>
    </div>
  `,document.body.appendChild(t),t.querySelector(`#offline-close`).addEventListener(`click`,()=>{t.classList.add(`mg-overlay--out`),t.addEventListener(`animationend`,()=>t.remove(),{once:!0})})}window.__TWITCH_TOKEN__=``;var R=document.getElementById(`app`);u();var z=c();A(R,{twitchClientId:``,twitchChannel:``}),I(),f(),z&&z.bitsEarned>1&&requestAnimationFrame(()=>L(z));