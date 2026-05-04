(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={clicker:{baseBitsPerClick:1,comboWindowMs:500,maxComboMultiplier:12,clicksToMaxCombo:20,comboDecayMs:1200},generators:[{id:`bit_miner`,name:`Bit Miner`,description:`A basic script that mines bits slowly.`,emoji:`⛏️`,baseCost:15,growthRate:1.15,baseBps:.1,unlockAt:0},{id:`packet_router`,name:`Packet Router`,description:`Routes network packets for profit.`,emoji:`📡`,baseCost:100,growthRate:1.15,baseBps:.5,unlockAt:50},{id:`data_farm`,name:`Data Farm`,description:`A small farm of data-generating bots.`,emoji:`🌾`,baseCost:500,growthRate:1.15,baseBps:3,unlockAt:300},{id:`neural_net`,name:`Neural Net`,description:`Self-optimising bit generation network.`,emoji:`🧠`,baseCost:3e3,growthRate:1.15,baseBps:20,unlockAt:2e3},{id:`quantum_rig`,name:`Quantum Rig`,description:`Quantum-entangled bit harvesting.`,emoji:`⚛️`,baseCost:2e4,growthRate:1.15,baseBps:150,unlockAt:15e3},{id:`bit_singularity`,name:`Bit Singularity`,description:`A black hole that converts matter to bits.`,emoji:`🕳️`,baseCost:2e5,growthRate:1.15,baseBps:1500,unlockAt:15e4},{id:`warp_core`,name:`Warp Core`,description:`Bends spacetime to accelerate bit production.`,emoji:`🌀`,baseCost:5e6,growthRate:1.15,baseBps:2e4,unlockAt:2e6},{id:`dimensional_tap`,name:`Dimensional Tap`,description:`Siphons energy from parallel dimensions.`,emoji:`🔮`,baseCost:1e8,growthRate:1.15,baseBps:35e4,unlockAt:5e7},{id:`reality_engine`,name:`Reality Engine`,description:`Reshapes physical constants for maximum output.`,emoji:`🌌`,baseCost:3e9,growthRate:1.15,baseBps:7e6,unlockAt:1e9},{id:`the_omnibus`,name:`The Omnibus`,description:`An incomprehensible hypercomputer. Runs everything.`,emoji:`♾️`,baseCost:1e11,growthRate:1.15,baseBps:2e8,unlockAt:3e10}],projects:[{id:`better_click_feedback`,name:`Better Click Feedback`,description:`Improve click responsiveness and visual feedback.`,category:`gameplay`,cost:150,unlockAt:50,phase:1,effect:{enabled:`better_click_feedback`},requires:[]},{id:`combo_amplifier`,name:`Combo Amplifier`,description:`Extend combo meter cap from 8× to 12×.`,category:`gameplay`,cost:500,unlockAt:300,phase:1,effect:{maxCombo:12},requires:[]},{id:`market_access`,name:`Market Access`,description:`Unlock the Trade Module: buy/sell generators at market prices.`,category:`module`,cost:5e3,unlockAt:5e3,phase:2,effect:{unlocks:`trade`},requires:[]},{id:`prediction_engine`,name:`Prediction Engine`,description:`Enables market forecasting for better trading decisions.`,category:`gameplay`,cost:8e3,unlockAt:8e3,phase:2,effect:{enabled:`market_prediction`},requires:[`market_access`]},{id:`casino_charter`,name:`Casino Charter`,description:`Unlock the Casino Module: risk/reward betting with multipliers.`,category:`module`,cost:5e4,unlockAt:1e5,phase:3,effect:{unlocks:`casino`},requires:[]},{id:`ai_trading`,name:`AI Trading`,description:`Automate trading decisions with neural networks.`,category:`gameplay`,cost:1e6,unlockAt:1e6,phase:4,effect:{enabled:`ai_trading`},requires:[`market_access`]},{id:`distributed_casino`,name:`Distributed Casino`,description:`Run multiple casino games in parallel for faster rewards.`,category:`gameplay`,cost:2e6,unlockAt:2e6,phase:4,effect:{enabled:`parallel_casino`},requires:[`casino_charter`]},{id:`neural_synchronization`,name:`Neural Synchronization`,description:`All modules feed into each other, multiplying effectiveness.`,category:`gameplay`,cost:5e7,unlockAt:5e7,phase:5,effect:{enabled:`module_sync`},requires:[`market_access`,`casino_charter`]},{id:`endgame_protocol`,name:`🚀 LAUNCH THE PROTOCOL`,description:`Deploy BitStream to every node on Earth. End condition: you win.`,category:`endgame`,cost:5e8,unlockAt:5e8,phase:5,effect:{endgame:!0},requires:[`neural_synchronization`]}],research:{rpsDiv:3,technologies:[{id:`lossless_compress`,name:`Lossless Compression`,description:`Compress bit streams for 20% more passive output.`,tier:1,phase:1,rpCost:50,effect:{passiveMultiplier:1.2},requires:[]},{id:`macro_engine`,name:`Macro Engine`,description:`Automate input patterns for 50% more bits per click.`,tier:1,phase:1,rpCost:80,effect:{clickMultiplier:1.5},requires:[]},{id:`combo_protocol`,name:`Combo Protocol`,description:`Extend the combo meter cap from ×8 to ×12.`,tier:1,phase:1,rpCost:150,effect:{maxCombo:12},requires:[`lossless_compress`]},{id:`hash_sharding`,name:`Hash Sharding`,description:`Distributed hash tables: all generators produce ×1.5.`,tier:2,phase:2,rpCost:600,effect:{passiveMultiplier:1.5},requires:[`lossless_compress`]},{id:`rp_accelerator`,name:`RP Accelerator`,description:`Dedicated research cores — research rate ×1.5.`,tier:2,phase:2,rpCost:900,effect:{researchMultiplier:1.5},requires:[`combo_protocol`]},{id:`exploit_amplifier`,name:`Exploit Amplifier`,description:`Mini-game rewards are doubled.`,tier:2,phase:2,rpCost:1500,effect:{minigameRewardMult:2},requires:[`macro_engine`]},{id:`neural_amplifier`,name:`Neural Amplification`,description:`Deep neural nets push all generators to ×3.`,tier:3,phase:3,rpCost:12e3,effect:{passiveMultiplier:3},requires:[`hash_sharding`]},{id:`global_cascade`,name:`Global Cascade`,description:`Cascade all gains globally: ×2 everything.`,tier:3,phase:3,rpCost:2e4,effect:{globalMultiplier:2},requires:[`rp_accelerator`,`neural_amplifier`]},{id:`deep_cache`,name:`Deep Cache`,description:`Offline cache extended from 8h to 16h.`,tier:3,phase:3,rpCost:35e3,effect:{offlineCapHours:16},requires:[`exploit_amplifier`]},{id:`quantum_sync`,name:`Quantum Sync`,description:`Quantum synchronisation across all nodes: global ×5.`,tier:4,phase:4,rpCost:3e5,effect:{globalMultiplier:5},requires:[`global_cascade`]},{id:`dark_cores`,name:`Dark Matter Cores`,description:`Tap dark matter for ×10 production.`,tier:4,phase:4,rpCost:5e5,effect:{passiveMultiplier:10},requires:[`neural_amplifier`]},{id:`temporal_acc`,name:`Temporal Accelerator`,description:`Bend time — research rate ×5.`,tier:4,phase:4,rpCost:15e5,effect:{researchMultiplier:5},requires:[`rp_accelerator`]},{id:`genesis_code`,name:`Genesis Code`,description:`Rewrite the universe's source: global ×20.`,tier:5,phase:5,rpCost:6e6,effect:{globalMultiplier:20},requires:[`quantum_sync`,`dark_cores`]},{id:`recursive_loop`,name:`Recursive Loop`,description:`Self-referential optimisation: all generators ×50.`,tier:5,phase:5,rpCost:25e6,effect:{passiveMultiplier:50},requires:[`temporal_acc`]},{id:`launch_protocol`,name:`🚀 LAUNCH THE PROTOCOL`,description:`Deploy the BitStream Protocol to every node on Earth. This ends the game.`,tier:5,phase:5,rpCost:1e8,effect:{endgame:!0},requires:[`genesis_code`,`recursive_loop`]}]},phases:[{id:1,threshold:0,title:`Garage Hacker`,narrative:`You start writing scripts in your bedroom. The stream goes live for the first time.`,unlocks:[`clicker`,`generators`,`upgrades`,`minigames`]},{id:2,threshold:1e4,title:`Going Online`,narrative:`Your scripts go viral. A small community forms around your stream. Research becomes possible.`,unlocks:[`research`]},{id:3,threshold:3e5,title:`Corporate Attention`,narrative:`A startup wants to partner. Corporate money starts flowing. New hardware arrives.`,unlocks:[]},{id:4,threshold:5e6,title:`Enterprise Scale`,narrative:`BitStream becomes a platform. Thousands of nodes are now live worldwide.`,unlocks:[]},{id:5,threshold:1e8,title:`Quantum Era`,narrative:`Quantum servers come online. The network transcends traditional computing.`,unlocks:[]}],minigames:{intervalRange:[12e4,3e5],durationMs:15e3,burstDurationSec:30,burstBpsMultiplier:10},offline:{maxOfflineMs:480*60*1e3,efficiency:.1},twitch:{liveMultiplier:1.5,pollIntervalMs:120*1e3},save:{intervalMs:1e4}};function t(e,t,n){return Math.floor(e*t**+n)}function n(e){return e>=0x38d7ea4c68000?(e/0x38d7ea4c68000).toFixed(2)+`Qa`:e>=0xe8d4a51000?(e/0xe8d4a51000).toFixed(2)+`T`:e>=1e9?(e/1e9).toFixed(2)+`B`:e>=1e6?(e/1e6).toFixed(2)+`M`:e>=1e3?(e/1e3).toFixed(2)+`K`:e>=10?Math.floor(e).toString():e>=1?e.toFixed(1):e>0?e.toFixed(2):`0`}function r(e){let t=Math.floor(e/3600),n=Math.floor(e%3600/60),r=Math.floor(e%60);return t>0?`${t}h ${n}m`:n>0?`${n}m ${r}s`:`${r}s`}function i(){return{bits:0,totalBitsEarned:0,totalClicks:0,clicker:{comboCount:0,comboMultiplier:1,lastClickTime:0},generators:e.generators.map(e=>({id:e.id,owned:0})),projects:e.projects.map(e=>({id:e.id,purchased:!1})),multipliers:{click:1,passive:1,global:1,twitch:1,minigame:1,minigameEndsAt:0,research:1},research:{points:0,techPurchased:[]},twitch:{isLive:!1,streamTitle:``,gameName:``,lastChecked:0,channelName:``},lastPhase:1,lastSaveTime:Date.now(),lastTickTime:Date.now(),language:`fr`}}var a=new class{state=i();listeners=new Set;getState(){return this.state}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notify(){this.listeners.forEach(e=>e())}setState(e){e(this.state),this.notify()}addBits(e){this.state.bits+=e,this.state.totalBitsEarned+=e,this.notify()}incrementClicks(){this.state.totalClicks+=1}spendBits(e){return this.state.bits<e?!1:(this.state.bits-=e,this.notify(),!0)}getResearchPS(){let t=this.getRawBPS();return Math.sqrt(t+1)/e.research.rpsDiv*this.state.multipliers.research}addResearchPoints(e){this.state.research.points+=e}isTechPurchased(e){return this.state.research.techPurchased.includes(e)}isTechAvailable(t){let n=e.research.technologies.find(e=>e.id===t);if(!n||this.isTechPurchased(t)||this.getCurrentPhase()<n.phase)return!1;for(let e of n.requires)if(!this.isTechPurchased(e))return!1;return!0}purchaseTech(t){let n=e.research.technologies.find(e=>e.id===t);return!n||!this.isTechAvailable(t)||this.state.research.points<n.rpCost?!1:(this.setState(e=>{e.research.points-=n.rpCost,e.research.techPurchased.push(t),this.recomputeMultipliers(e)}),!0)}getMaxCombo(){let t=e.research.technologies.find(e=>e.id===`combo_protocol`);return t&&this.isTechPurchased(`combo_protocol`)?t.effect.maxCombo??e.clicker.maxComboMultiplier:e.clicker.maxComboMultiplier}getOfflineCapMs(){let t=e.research.technologies.find(e=>e.id===`deep_cache`);return t&&this.isTechPurchased(`deep_cache`)?(t.effect.offlineCapHours??8)*36e5:e.offline.maxOfflineMs}getMinigameRewardMult(){let t=e.research.technologies.find(e=>e.id===`exploit_amplifier`);return t&&this.isTechPurchased(`exploit_amplifier`)?t.effect.minigameRewardMult??1:1}isMinigameActive(){return Date.now()<this.state.multipliers.minigameEndsAt}getPassiveMultiplier(){let e=this.state.multipliers;return e.passive*e.global*e.twitch*(this.isMinigameActive()?e.minigame:1)}getClickMultiplier(){let e=this.state.multipliers;return e.click*e.global*e.twitch*(this.isMinigameActive()?e.minigame:1)*this.state.clicker.comboMultiplier}getRawBPS(){let t=0;for(let n of e.generators){let e=this.state.generators.find(e=>e.id===n.id);e&&(t+=e.owned*n.baseBps)}return t}getEffectiveBPS(){return this.getRawBPS()*this.getPassiveMultiplier()}getEffectiveBPC(){return e.clicker.baseBitsPerClick*this.getClickMultiplier()}getCurrentPhase(){let t=this.state.totalBitsEarned,n=1;for(let r of e.phases)t>=r.threshold&&(n=r.id);return n}getCost(n){let r=e.generators.find(e=>e.id===n),i=this.state.generators.find(e=>e.id===n);return!r||!i?1/0:t(r.baseCost,r.growthRate,i.owned)}buyGenerator(e){let t=this.getCost(e);return this.state.bits<t?!1:(this.setState(n=>{n.bits-=t,n.generators.find(t=>t.id===e).owned+=1}),!0)}purchaseProject(t){let n=e.projects.find(e=>e.id===t),r=this.state.projects.find(e=>e.id===t);if(!n||!r||r.purchased||this.state.bits<n.cost||this.state.totalBitsEarned<n.unlockAt||this.getCurrentPhase()<n.phase)return!1;for(let e of n.requires)if(!this.state.projects.find(t=>t.id===e)?.purchased)return!1;return this.setState(e=>{e.bits-=n.cost,e.projects.find(e=>e.id===t).purchased=!0}),!0}recomputeMultipliers(t){let n=1,r=1,i=1,a=1;for(let o of e.research.technologies){if(!t.research.techPurchased.includes(o.id))continue;let e=o.effect;e.clickMultiplier&&(n*=e.clickMultiplier),e.passiveMultiplier&&(r*=e.passiveMultiplier),e.globalMultiplier&&(i*=e.globalMultiplier),e.researchMultiplier&&(a*=e.researchMultiplier)}t.multipliers.click=n,t.multipliers.passive=r,t.multipliers.global=i,t.multipliers.research=a}setTwitchLive(t,n){this.setState(r=>{r.twitch.isLive=t,r.twitch.streamTitle=n.title,r.twitch.gameName=n.game,r.twitch.lastChecked=Date.now(),r.multipliers.twitch=t?e.twitch.liveMultiplier:1})}setLanguage(e){this.setState(t=>{t.language=e})}getLanguage(){return this.state.language}loadState(t){let n=i();this.state={...n,...t,generators:n.generators.map(e=>t.generators?.find(t=>t.id===e.id)??e),projects:n.projects.map(e=>t.projects?.find(t=>t.id===e.id)??e),multipliers:{...n.multipliers,...t.multipliers??{}},research:{...n.research,...t.research??{}},twitch:{...n.twitch,...t.twitch??{}}},this.recomputeMultipliers(this.state),this.state.twitch.isLive&&(this.state.multipliers.twitch=e.twitch.liveMultiplier),this.notify()}resetState(){this.state=i(),this.notify()}},o=`bitstream_v1`,s=null;function c(){let e=s;return s=null,e}function l(){let e={...a.getState(),lastSaveTime:Date.now()};localStorage.setItem(o,JSON.stringify(e))}function u(){let t=localStorage.getItem(o);if(!t)return!1;try{let n=JSON.parse(t);if(n.lastSaveTime){let t=n.research?.techPurchased?.includes(`deep_cache`)?16*36e5:e.offline.maxOfflineMs,r=Math.min(Date.now()-n.lastSaveTime,t);if(r>5e3){let t=0;for(let r of e.generators){let e=n.generators?.find(e=>e.id===r.id);e&&(t+=e.owned*r.baseBps)}let i=n.multipliers?.passive??1,a=n.multipliers?.global??1,o=t*i*a*(r/1e3)*e.offline.efficiency;n.bits=(n.bits??0)+o,n.totalBitsEarned=(n.totalBitsEarned??0)+o,s={bitsEarned:o,seconds:r/1e3}}}return n.lastTickTime=Date.now(),a.loadState(n),!0}catch{return!1}}function d(){localStorage.removeItem(o),a.resetState()}function f(){setInterval(l,e.save.intervalMs),window.addEventListener(`beforeunload`,l)}function p(e){e.innerHTML=`
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
        <button id="main-btn" class="click-btn" aria-label="Cliquer pour gagner des bits">
          <span class="click-btn__icon">⚡</span>
          <span class="click-btn__label">CLIC</span>
        </button>
        <div class="combo-bar">
          <div class="combo-bar__fill" id="combo-fill" style="width:0%"></div>
          <span class="combo-bar__text" id="combo-text">×1.0</span>
        </div>
      </div>
      <div class="clicker-stats">
        <div class="stat-row">
          <span class="stat-label">Par clic</span>
          <span class="stat-value mono" id="bpc-display">0</span>
        </div>
      </div>
    </div>
  `;let r=t.querySelector(`#main-btn`),i=t.querySelector(`#combo-fill`),o=t.querySelector(`#combo-text`),s=t.querySelector(`#bpc-display`),c=0;function l(e){let t=a.getEffectiveBPC();a.addBits(t),a.incrementClicks(),f(r,t),r.classList.remove(`click-btn--pop`),r.offsetWidth,r.classList.add(`click-btn--pop`),u(),p(r,e)}function u(){let t=Date.now();clearTimeout(c),a.setState(n=>{t-n.clicker.lastClickTime<=e.clicker.comboWindowMs?n.clicker.comboCount=Math.min(n.clicker.comboCount+1,e.clicker.clicksToMaxCombo):n.clicker.comboCount=1,n.clicker.lastClickTime=t;let r=n.clicker.comboCount/e.clicker.clicksToMaxCombo;n.clicker.comboMultiplier=1+(e.clicker.maxComboMultiplier-1)*Math.min(r,1)}),d(),c=window.setTimeout(()=>{a.setState(e=>{e.clicker.comboCount=0,e.clicker.comboMultiplier=1}),d()},e.clicker.comboDecayMs)}function d(){let{comboCount:t,comboMultiplier:n}=a.getState().clicker,r=t/e.clicker.clicksToMaxCombo*100;i.style.width=r.toFixed(1)+`%`,o.textContent=`×${n.toFixed(1)}`}function f(e,t){let r=document.createElement(`div`);r.className=`click-floater`,r.textContent=`+`+n(t);let i=e.getBoundingClientRect();r.style.left=i.left+i.width/2+(Math.random()-.5)*60+`px`,r.style.top=i.top-10+`px`,document.body.appendChild(r),r.addEventListener(`animationend`,()=>r.remove(),{once:!0})}function p(e,t){let n=document.createElement(`span`);n.className=`click-ripple`;let r=e.getBoundingClientRect(),i=t instanceof MouseEvent?t.clientX:t.touches[0].clientX,a=t instanceof MouseEvent?t.clientY:t.touches[0].clientY;n.style.left=i-r.left+`px`,n.style.top=a-r.top+`px`,e.appendChild(n),n.addEventListener(`animationend`,()=>n.remove(),{once:!0})}function m(){s.textContent=n(a.getEffectiveBPC())}r.addEventListener(`click`,l);let h=a.subscribe(m);return m(),()=>{h(),clearTimeout(c)}}function h(t){let n=e.generators.find(e=>e.id===t),r=a.getState().generators.find(e=>e.id===t);return Math.floor(n.baseCost*n.growthRate**+r.owned*.5)}function g(){return!!a.getState().projects.find(e=>e.id===`market_access`)?.purchased}function _(r){r.innerHTML=`
    <div class="production-panel">
      <h2 class="panel-title">Générateurs</h2>
      <div id="generators-list" class="generators-list"></div>
    </div>
  `;let i=r.querySelector(`#generators-list`),o=``;function s(){let t=a.getState(),n=t.generators.map(e=>e.owned).join(`,`),r=e.generators.map(e=>t.totalBitsEarned>=e.unlockAt?`1`:`0`).join(``),i=t.projects.find(e=>e.id===`market_access`)?.purchased?`1`:`0`;return n+`|`+r+`|`+Math.floor(t.multipliers.passive)+`|`+i}function c(){let r=a.getState();i.innerHTML=``;let o=!1;for(let s of e.generators){let e=r.generators.find(e=>e.id===s.id);if(r.totalBitsEarned<s.unlockAt)continue;o=!0;let c=t(s.baseCost,s.growthRate,e.owned),l=r.bits>=c,u=e.owned*s.baseBps*a.getPassiveMultiplier(),d=g(),f=h(s.id),p=document.createElement(`div`);p.className=`gen-card${l?` gen-card--affordable`:``}`,p.dataset.id=s.id,p.innerHTML=`
        <div class="gen-card__icon">${s.emoji}</div>
        <div class="gen-card__info">
          <div class="gen-card__name">${s.name}</div>
          <div class="gen-card__bps mono">${e.owned>0?n(u)+` b/s`:`inactif`}</div>
          ${d&&e.owned>0?`<button class="gen-sell-btn" data-sell="${s.id}" data-price="${f}">Vendre ${n(f)}</button>`:``}
        </div>
        <div class="gen-card__right">
          <div class="gen-card__owned mono">${e.owned}</div>
          <button class="gen-btn${l?``:` gen-btn--disabled`}" data-buy="${s.id}">
            <span class="gen-btn__cost mono">${n(c)}</span>
            <span class="gen-btn__label">ACHETER</span>
          </button>
        </div>
      `,i.appendChild(p)}o||(i.innerHTML=`<p class="gen-hint">Earn more bits to unlock generators…</p>`)}function l(){let r=a.getState();for(let o of e.generators){let e=i.querySelector(`[data-id="${o.id}"]`);if(!e)continue;let s=r.generators.find(e=>e.id===o.id),c=t(o.baseCost,o.growthRate,s.owned),l=r.bits>=c;e.classList.toggle(`gen-card--affordable`,l);let u=e.querySelector(`[data-buy="${o.id}"]`);if(u.classList.toggle(`gen-btn--disabled`,!l),u.querySelector(`.gen-btn__cost`).textContent=n(c),s.owned>0){let t=s.owned*o.baseBps*a.getPassiveMultiplier();e.querySelector(`.gen-card__bps`).textContent=n(t)+` b/s`}}}function u(){let e=s();e===o?l():(o=e,c())}function d(e){let t=e.target.closest(`[data-buy]`);if(!t)return;let n=t.dataset.buy;a.buyGenerator(n)&&i.querySelector(`[data-id="${n}"]`)?.classList.add(`gen-card--bought`)}function f(e){let t=e.target.closest(`[data-sell]`);if(!t)return;let n=t.dataset.sell,r=parseInt(t.dataset.price||`0`,10);a.getState().generators.find(e=>e.id===n).owned!==0&&(a.setState(e=>{--e.generators.find(e=>e.id===n).owned}),a.addBits(r))}i.addEventListener(`click`,d),i.addEventListener(`click`,f);let p=a.subscribe(u);return o=s(),c(),()=>p()}function v(){let t=document.createElement(`div`);t.className=`endgame-overlay`;let{totalBitsEarned:r}=a.getState();t.innerHTML=`
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
  `,document.body.appendChild(t),t.querySelector(`#endgame-close`).addEventListener(`click`,()=>{t.classList.add(`endgame-overlay--out`),t.addEventListener(`animationend`,()=>t.remove(),{once:!0})})}var y={gameplay:`🎮 Gameplay`,module:`📦 New Module`,automation:`🤖 Automation`,economic:`💰 Economic`,minigame:`🎲 Mini-games`,endgame:`🚀 Endgame`};function b(t){t.innerHTML=`
    <div class="projects-panel">
      <h2 class="panel-title">Projects</h2>
      <div id="projects-list" class="projects-list"></div>
    </div>
  `;let r=t.querySelector(`#projects-list`),i=``;function o(){let t=a.getState(),n=t.projects.filter(e=>e.purchased).map(e=>e.id).join(`,`),r=e.projects.map(e=>{if(t.projects.find(t=>t.id===e.id).purchased)return`0`;let n=e.requires.every(e=>t.projects.find(t=>t.id===e)?.purchased),r=t.totalBitsEarned>=e.unlockAt&&a.getCurrentPhase()>=e.phase;return r&&n?`1`:!r&&n?`2`:`3`}).join(``);return n+`|`+r}function s(e){return a.getCurrentPhase()>=e}function c(t){let n=a.getState(),r=e.projects.find(e=>e.id===t);if(n.projects.find(e=>e.id===t).purchased||n.totalBitsEarned<r.unlockAt||!s(r.phase))return!1;for(let e of r.requires)if(!n.projects.find(t=>t.id===e)?.purchased)return!1;return!0}function l(t){let n=a.getState(),r=e.projects.find(e=>e.id===t);if(n.projects.find(e=>e.id===t).purchased||n.totalBitsEarned>=r.unlockAt&&s(r.phase))return!1;for(let e of r.requires)if(!n.projects.find(t=>t.id===e)?.purchased)return!1;return!0}function u(e){let t=[];return e.unlocks&&t.push(`Unlock: ${e.unlocks}`),e.maxCombo&&t.push(`Max combo: ${e.maxCombo}×`),e.enabled&&t.push(`Enable: ${e.enabled}`),e.endgame&&t.push(`🏁 Game ending`),t.join(` · `)}function d(){let t=a.getState();r.innerHTML=``;let i=e.projects.filter(e=>c(e.id)),o=e.projects.filter(e=>l(e.id));if(i.length===0&&o.length===0){r.innerHTML=`<p class="prj-hint">All projects completed.<br/>You win! 🏆</p>`;return}let s=new Map;for(let e of i)s.has(e.category)||s.set(e.category,[]),s.get(e.category).push(e);for(let[e,i]of s){let a=document.createElement(`div`);a.className=`prj-section`,a.innerHTML=`<div class="prj-section__label">${y[e]??e}</div>`;for(let e of i){let r=t.bits>=e.cost,i=document.createElement(`div`);i.className=`prj-card${r?` prj-card--affordable`:``}`,i.dataset.id=e.id,i.innerHTML=`
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
        `,e.appendChild(a)}r.appendChild(e)}}function f(t){let n=t.target.closest(`[data-buy]`);if(!n)return;let r=n.dataset.buy;a.purchaseProject(r)&&(e.projects.find(e=>e.id===r)?.effect).endgame&&v()}function p(){let t=o();if(t!==i)i=t,d();else{let t=a.getState();r.querySelectorAll(`[data-buy]`).forEach(r=>{let i=r.dataset.buy,a=e.projects.find(e=>e.id===i),o=t.bits>=a.cost;r.classList.toggle(`prj-btn--disabled`,!o),r.textContent=o?`RESEARCH`:`Need `+n(a.cost-t.bits)+` more`,r.closest(`.prj-card`).classList.toggle(`prj-card--affordable`,o)})}}r.addEventListener(`click`,f);let m=a.subscribe(p);return i=o(),d(),()=>m()}function x(e){e.innerHTML=`
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
  `;let t=e.querySelector(`#casino-content`),r=e.querySelector(`#casino-balance`),i=e.querySelector(`#casino-history`),o=e.querySelectorAll(`.casino-tab`);function s(e){let n=t.querySelector(`.casino-error`);n&&n.remove();let r=document.createElement(`div`);r.className=`casino-error`,r.textContent=e,t.prepend(r),setTimeout(()=>r.remove(),2e3)}let c=`blackjack`,l=[],u=!1;function d(){return`
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
    `}function f(){if(u)return;u=!0;let e=t.querySelector(`#bj-bet`),n=parseInt(e.value);if(a.getState().bits<n){s(`Bits insuffisants !`),u=!1;return}let r=5+Math.floor(Math.random()*5)+(Math.random()<.6?10:5),i=!1,o=``;if(r>21?(i=!0,o=`Dealer busts (${r})! You win!`):15>r?(i=!0,o=`15 vs ${r} — You win!`):r===15?(i=!1,o=`Push (15) — You lose your bet`):(i=!1,o=`15 vs ${r} — Dealer wins`),i){let e=Math.floor(n*1.5);a.addBits(e),l.unshift({game:`blackjack`,won:!0,amount:e,timestamp:Date.now()})}else a.spendBits(n),l.unshift({game:`blackjack`,won:!1,amount:n,timestamp:Date.now()});let d=t.querySelector(`#bj-result`);d.textContent=o,d.style.display=`block`,d.className=`bj-result ${i?`bj-result--win`:`bj-result--lose`}`,setTimeout(()=>{u=!1,y(c),x()},2e3)}function p(){return`
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
    `}function m(){if(u)return;u=!0;let e=t.querySelector(`#gamble-bet`),r=parseInt(e.value);if(a.getState().bits<r){s(`Bits insuffisants !`),u=!1;return}let i=[`♠`,`♣`,`♥`,`♦`,`⭐`],o=[i[Math.floor(Math.random()*i.length)],i[Math.floor(Math.random()*i.length)],i[Math.floor(Math.random()*i.length)]],d=t.querySelector(`#gamble-w1`),f=t.querySelector(`#gamble-w2`),p=t.querySelector(`#gamble-w3`);d.style.animation=`spin 0.5s`,f.style.animation=`spin 0.6s`,p.style.animation=`spin 0.7s`,setTimeout(()=>{d.textContent=o[0],f.textContent=o[1],p.textContent=o[2],d.style.animation=`none`,f.style.animation=`none`,p.style.animation=`none`;let e=o[0]===o[1]&&o[1]===o[2],i=o[0]===o[1]||o[1]===o[2]||o[0]===o[2],s=0,m=``;e?(s=r*(r===2e3?5:2),m=`🎉 Triple match! +${n(s)} bits!`,a.addBits(s),l.unshift({game:`gamble`,won:!0,amount:s,timestamp:Date.now()})):i?(s=Math.floor(r*.5),a.addBits(s),m=`Pair match — +${n(s)} bits`,l.unshift({game:`gamble`,won:!0,amount:s,timestamp:Date.now()})):(m=`No match — Lose ${n(r)} bits`,a.spendBits(r),l.unshift({game:`gamble`,won:!1,amount:r,timestamp:Date.now()}));let h=t.querySelector(`#gamble-result`);h.textContent=m,h.style.display=`block`,h.className=`gamble-result ${e?`gamble-result--win`:i?`gamble-result--partial`:`gamble-result--lose`}`,setTimeout(()=>{u=!1,y(c),x()},2e3)},700)}function h(){return`
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
    `}function g(){if(u)return;u=!0;let e=t.querySelector(`#wheel-bet`),r=parseInt(e.value);if(a.getState().bits<r){s(`Bits insuffisants !`),u=!1;return}let i=[{mult:.5,label:`0.5×`,jackpot:!1},{mult:1,label:`1×`,jackpot:!1},{mult:2,label:`2×`,jackpot:!1},{mult:3,label:`3×`,jackpot:!1},{mult:5,label:`5×`,jackpot:!1},{mult:10,label:`10×`,jackpot:!1},{mult:0,label:`Lose`,jackpot:!1},{mult:50,label:`💎 JACKPOT`,jackpot:!0}],o=Math.floor(Math.random()*i.length),d=i[o],f=t.querySelector(`#wheel`);f.style.animation=`spin-wheel ${2+o*.1}s ease-out`,setTimeout(()=>{f.style.animation=`none`,f.style.transform=`rotate(${o*45}deg)`;let e=!1,i=0;d.mult>0?(e=!0,i=Math.floor(r*d.mult),a.addBits(i),l.unshift({game:`wheel`,won:!0,amount:i,timestamp:Date.now()})):(a.spendBits(r),l.unshift({game:`wheel`,won:!1,amount:r,timestamp:Date.now()}));let s=t.querySelector(`#wheel-result`);s.textContent=e?`${d.label} — +${n(i)} bits!`:`${d.label} — Lost ${n(r)} bits`,s.style.display=`block`,s.className=`wheel-result ${e?`wheel-result--win`:`wheel-result--lose`}`,setTimeout(()=>{u=!1,y(c),x()},2e3)},2e3+o*100)}function _(){return`
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
    `}function v(){if(u)return;let e=t.querySelector(`#rush-bet`),r=parseInt(e.value);if(a.getState().bits<r){s(`Bits insuffisants !`);return}u=!0,a.spendBits(r);let i=0,o=10,d=t.querySelector(`#rush-time`),f=t.querySelector(`#rush-score`),p=t.querySelector(`#rush-score2`),m=t.querySelector(`#rush-field`),h=t.querySelector(`#rush-pikachu`),g=()=>{let e=document.createElement(`div`);e.className=`rush-target`,e.textContent=`⚡`,e.style.left=Math.random()*80+`%`,e.style.top=Math.random()*60+10+`%`,m.appendChild(e),e.addEventListener(`click`,t=>{t.stopPropagation(),e.remove(),i++,f.textContent=String(i),p.textContent=String(i),h.classList.add(`rush-pikachu--hit`),setTimeout(()=>h.classList.remove(`rush-pikachu--hit`),150)},{once:!0}),setTimeout(()=>e.remove(),1200)},_=setInterval(()=>{Math.random()<.8&&g()},400),v=setInterval(()=>{if(o--,d.textContent=String(o),o<=0){clearInterval(v),clearInterval(_),m.querySelectorAll(`.rush-target`).forEach(e=>e.remove());let e=Math.floor(i*r*.2);a.addBits(e),l.unshift({game:`rush`,won:e>0,amount:e,timestamp:Date.now()});let o=t.querySelector(`#rush-result`);o.textContent=`⚡ ${i} clics — +${n(e)} bits !`,o.style.display=`block`,o.className=`rush-result--win`,setTimeout(()=>{u=!1,y(c),x()},2e3)}},1e3)}function y(e){c=e,o.forEach(t=>{t.classList.toggle(`casino-tab--active`,t.dataset.game===e)});let n=``;switch(e){case`blackjack`:n=d();break;case`gamble`:n=p();break;case`wheel`:n=h();break;case`rush`:n=_();break}t.innerHTML=n,setTimeout(()=>{switch(e){case`blackjack`:t.querySelector(`#bj-play`)?.addEventListener(`click`,f);break;case`gamble`:t.querySelector(`#gamble-spin`)?.addEventListener(`click`,m);break;case`wheel`:t.querySelector(`#wheel-spin`)?.addEventListener(`click`,g);break;case`rush`:t.querySelector(`#rush-start`)?.addEventListener(`click`,v);break}},0)}function b(){r.textContent=n(a.getState().bits)}function x(){i.innerHTML=l.slice(0,5).map(e=>{let t=e.won?`✅`:`❌`;return`<div class="casino-history-item ${e.won?`win`:`lose`}">${t} ${e.game}: ${e.won?`+`:`-`}${n(e.amount)}</div>`}).join(``)}o.forEach(e=>{e.addEventListener(`click`,()=>{u||y(e.dataset.game)})});let S=a.subscribe(b);return y(`blackjack`),b(),x(),()=>S()}var S=[[{id:`m_click_50`,label:`⚡ Cliqueur`,description:`Cliquer 50 fois`,target:50,reward:500,type:`clicks`},{id:`m_earn_1k`,label:`💰 Accumulateur`,description:`Gagner 1 000 bits`,target:1e3,reward:800,type:`bits_earned`},{id:`m_gen_3`,label:`🤖 Constructeur`,description:`Posséder 3 générateurs`,target:3,reward:600,type:`generators`}],[{id:`m_click_500`,label:`⚡ Cliqueur Pro`,description:`Cliquer 500 fois`,target:500,reward:5e3,type:`clicks`},{id:`m_earn_50k`,label:`💰 Investisseur`,description:`Gagner 50 000 bits`,target:5e4,reward:8e3,type:`bits_earned`},{id:`m_gen_20`,label:`🏭 Industriel`,description:`Posséder 20 générateurs`,target:20,reward:7500,type:`generators`}],[{id:`m_click_2k`,label:`⚡ Légende`,description:`Cliquer 2 000 fois`,target:2e3,reward:25e3,type:`clicks`},{id:`m_earn_1m`,label:`💰 Millionnaire`,description:`Gagner 1 000 000 bits`,target:1e6,reward:5e4,type:`bits_earned`},{id:`m_gen_50`,label:`🌐 Empire`,description:`Posséder 50 générateurs`,target:50,reward:4e4,type:`generators`}]];function C(){let e=new Date,t=String(e.getMonth()+1).padStart(2,`0`);return`${e.getFullYear()}-${t}-${e.getDate()}`}function w(e,t){let n=t*2654435761;for(let t=0;t<e.length;t++)n=Math.imul(n^e.charCodeAt(t),2246822519);return n^=n>>>16,(n>>>0)/4294967296}function T(){let e=C();return S.map((t,n)=>({...t[Math.floor(w(e,n)*t.length)]}))}var E=`bs_missions_v1`;function D(e,t){try{let n=localStorage.getItem(E);if(n){let r=JSON.parse(n);if(r.lastSeed===C())return r.clicksAtStart=e,r.bitsAtStart=t,r}}catch{}return{clicksAtStart:e,bitsAtStart:t,clicksDone:0,bitsEarnedDone:0,claimed:[],lastSeed:C()}}function O(e){localStorage.setItem(E,JSON.stringify(e))}function ee(e){let t=T(),r=a.getState(),i=D(r.totalClicks,r.totalBitsEarned);function o(e){let t=a.getState();switch(e.type){case`clicks`:return i.clicksDone+(t.totalClicks-i.clicksAtStart);case`bits_earned`:return i.bitsEarnedDone+(t.totalBitsEarned-i.bitsAtStart);case`generators`:return t.generators.reduce((e,t)=>e+t.owned,0)}}function s(e){if(i.claimed.includes(e))return;let n=t.find(t=>t.id===e);if(!n||o(n)<n.target)return;let r=a.getState();i.clicksDone+=r.totalClicks-i.clicksAtStart,i.bitsEarnedDone+=r.totalBitsEarned-i.bitsAtStart,i.clicksAtStart=r.totalClicks,i.bitsAtStart=r.totalBitsEarned,i.claimed.push(e),a.addBits(n.reward),O(i),c()}function c(){let r=e.querySelector(`.missions-list`);r&&(r.innerHTML=t.map(e=>{let t=Math.min(o(e),e.target),r=t/e.target*100,a=t>=e.target,s=i.claimed.includes(e.id);return`
        <div class="mission-card${s?` mission-card--claimed`:a?` mission-card--done`:``}">
          <div class="mission-card__header">
            <span class="mission-card__label">${e.label}</span>
            <span class="mission-card__reward mono">+${n(e.reward)}</span>
          </div>
          <div class="mission-card__desc">${e.description}</div>
          <div class="mission-progress">
            <div class="mission-progress__bar">
              <div class="mission-progress__fill" style="width:${r.toFixed(1)}%"></div>
            </div>
            <span class="mission-progress__text mono">${n(t)} / ${n(e.target)}</span>
          </div>
          ${s?`<div class="mission-claimed">✓ Réclamé</div>`:a?`<button class="mission-claim-btn" data-id="${e.id}">Réclamer</button>`:``}
        </div>
      `}).join(``),r.querySelectorAll(`.mission-claim-btn`).forEach(e=>{e.addEventListener(`click`,()=>s(e.dataset.id))}))}e.innerHTML=`
    <div class="missions-panel">
      <h2 class="panel-title">Missions du jour</h2>
      <div class="missions-list"></div>
    </div>
  `,c();let l=0,u=a.subscribe(()=>{clearTimeout(l),l=window.setTimeout(()=>{O(i),c()},500)});return()=>{u(),clearTimeout(l)}}var k=`bs_leaderboard_v1`,A=`bs_player_name`,j=[`xX_BitL0rd_Xx`,`Neuron_42`,`QuantumLeak`,`CryptoVoid`,`NullByte`,`SilentMiner`,`ByteHunter`,`DataPhantom`,`GridRunner`,`CodeShadow`,`PacketWolf`,`NanoScript`];function M(e,t){let n=t*1234567891;for(let t=0;t<e.length;t++)n=Math.imul(n^e.charCodeAt(t),2246822519)>>>0;return n}function N(e,t){let n=.3+M(e,e.length)%100/100*1.4,r=Math.max(t*n,100);return Math.floor(r)}function P(){return localStorage.getItem(A)||`Vous`}function F(e){localStorage.setItem(A,e)}function I(){let e=localStorage.getItem(k);try{if(e)return JSON.parse(e)}catch{}return 0}function L(e){e>I()&&localStorage.setItem(k,JSON.stringify(e))}function R(e){let t=P(),r=I(),i=!1;function o(){let e=a.getState().totalBitsEarned;r=Math.max(r,e),L(r);let n=j.slice(0,9).map(e=>({name:e,score:N(e,Math.max(r,100)),isPlayer:!1})),i={name:t,score:r,isPlayer:!0};return[...n,i].sort((e,t)=>t.score-e.score)}function s(){let t=o(),r=t.findIndex(e=>e.isPlayer)+1,i=e.querySelector(`.lb-list`);if(!i)return;i.innerHTML=t.map((e,t)=>`
      <div class="lb-row ${e.isPlayer?`lb-row--you`:``}">
        <span class="lb-rank mono">#${t+1}</span>
        <span class="lb-name">${e.name}${e.isPlayer?` <span class="lb-you">(Vous)</span>`:``}</span>
        <span class="lb-score mono">${n(e.score)}</span>
      </div>
    `).join(``);let a=e.querySelector(`#lb-your-rank`);a&&(a.textContent=`#${r}`)}e.innerHTML=`
    <div class="lb-panel">
      <h2 class="panel-title">Classement</h2>
      <div class="lb-header">
        <div class="lb-name-row">
          <span class="lb-name-label">Votre nom :</span>
          <span id="lb-name-display" class="lb-name-val">${t}</span>
          <button class="lb-edit-btn" id="lb-edit">✏</button>
        </div>
        <div class="lb-rank-row">Votre rang : <span class="mono" id="lb-your-rank">#?</span></div>
      </div>
      <div class="lb-name-edit" id="lb-name-edit" style="display:none">
        <input class="lb-input" id="lb-name-input" type="text" maxlength="18" placeholder="Votre pseudo" value="${t}">
        <button class="lb-save-btn" id="lb-name-save">OK</button>
      </div>
      <div class="lb-list"></div>
    </div>
  `;let c=e.querySelector(`#lb-edit`),l=e.querySelector(`#lb-name-display`),u=e.querySelector(`#lb-name-edit`),d=e.querySelector(`#lb-name-input`),f=e.querySelector(`#lb-name-save`);c.addEventListener(`click`,()=>{i=!i,u.style.display=i?`flex`:`none`,i&&d.focus()}),f.addEventListener(`click`,()=>{let e=d.value.trim();e&&(t=e,F(e),l.textContent=e),i=!1,u.style.display=`none`,s()}),s();let p=a.subscribe(s);return()=>p()}var z=[{title:`🎯 Click the Target`,instructions:`Click the glowing target 5 times.`,mount(e,t){let n=0;function r(){let i=document.createElement(`button`);i.className=`mg-target`;let a=Math.max(e.clientWidth-52,10),o=Math.max(e.clientHeight-52,10);i.style.left=Math.random()*a+`px`,i.style.top=Math.random()*o+`px`,e.appendChild(i),i.addEventListener(`click`,()=>{i.remove(),++n>=5?t():r()},{once:!0})}return r(),()=>e.querySelectorAll(`.mg-target`).forEach(e=>e.remove())}},{title:`⌨️ Key Sequence`,instructions:`Type the sequence shown.`,mount(e,t,n){let r=[`A`,`S`,`D`,`F`,`J`,`K`,`L`],i=Array.from({length:5},()=>r[Math.floor(Math.random()*r.length)]),a=0,o=document.createElement(`div`);o.className=`mg-sequence`,o.innerHTML=i.map((e,t)=>`<span class="mg-key" id="k${t}">${e}</span>`).join(``),e.appendChild(o);function s(e){e.key.toUpperCase()===i[a]?(o.querySelector(`#k${a}`)?.classList.add(`mg-key--hit`),++a>=i.length&&t()):n()}return window.addEventListener(`keydown`,s),()=>window.removeEventListener(`keydown`,s)}},{title:`🧮 Quick Math`,instructions:`Tap the correct answer.`,mount(e,t,n){let r=Math.floor(Math.random()*20)+1,i=Math.floor(Math.random()*20)+1,a=r+i,o=new Set;for(;o.size<3;){let e=a+Math.floor(Math.random()*20)-10;e!==a&&e>0&&o.add(e)}let s=[...o,a].sort(()=>Math.random()-.5),c=document.createElement(`div`);return c.className=`mg-math`,c.innerHTML=`
      <div class="mg-math__question">${r} + ${i} = ?</div>
      <div class="mg-math__choices">
        ${s.map(e=>`<button class="mg-choice" data-val="${e}">${e}</button>`).join(``)}
      </div>
    `,e.appendChild(c),c.addEventListener(`click`,e=>{let r=e.target.closest(`[data-val]`);r&&(Number(r.dataset.val)===a?t():n())}),()=>{}}}];function B(){let t=0,i=null,o=null;function s(){let[n,r]=e.minigames.intervalRange;t=window.setTimeout(c,n+Math.random()*(r-n))}function c(){if(i)return;let e=z[Math.floor(Math.random()*z.length)];l(e)}function l(t){let c=document.createElement(`div`);c.className=`mg-card`;let l=e.minigames.durationMs/1e3,d=!1;c.innerHTML=`
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
    `,document.body.appendChild(c),i=c;let f=c.querySelector(`#mg-arena`),p=c.querySelector(`#mg-timer`),m=c.querySelector(`#mg-result`),h=c.querySelector(`#mg-close`),g=l,_=null,v=setInterval(()=>{g--,p.textContent=String(g),g<=0&&(clearInterval(v),b())},1e3);h.addEventListener(`click`,()=>{clearInterval(v),_!==null&&clearTimeout(_),o?.(),S(!1)});function y(){clearInterval(v),o?.(),u(),x(!0)}function b(){clearInterval(v),o?.(),x(!1)}function x(t){f.style.display=`none`,m.style.display=`flex`;let i=a.getEffectiveBPS()*e.minigames.burstDurationSec*e.minigames.burstBpsMultiplier;m.innerHTML=t?`<div class="mg-result mg-result--win">
             <span>🎉 +${n(i)} bits!</span>
             <small>×${e.minigames.burstBpsMultiplier} BPS · ${r(e.minigames.burstDurationSec)}</small>
           </div>`:`<div class="mg-result mg-result--lose"><span>💀 Too slow!</span></div>`,_=window.setTimeout(()=>{S(!0)},2200)}function S(e){d||(d=!0,c.classList.add(`mg-card--out`),c.addEventListener(`animationend`,()=>{c.remove(),i=null,o=null,e&&s()},{once:!0}))}o=t.mount(f,y,b)}function u(){let t=a.getEffectiveBPS()*e.minigames.burstDurationSec*e.minigames.burstBpsMultiplier;a.setState(n=>{n.bits+=t,n.totalBitsEarned+=t,n.multipliers.minigame=e.minigames.burstBpsMultiplier,n.multipliers.minigameEndsAt=Date.now()+e.minigames.burstDurationSec*1e3})}return s(),()=>{clearTimeout(t),o?.(),i?.remove()}}var V=[];function H(){let e=a.getCurrentPhase(),t=a.subscribe(()=>{let t=a.getCurrentPhase();t>e&&(e=t,a.setState(e=>{e.lastPhase=t}),U(t),V.forEach(e=>e(t)))});return()=>t()}function U(t){let n=e.phases.find(e=>e.id===t);if(!n)return;let r=n.unlocks.length>0?`<div class="phase-notif__unlocks">New: ${n.unlocks.map(e=>`<strong>${e}</strong>`).join(`, `)}</div>`:``,i=document.createElement(`div`);i.className=`phase-notif`,i.innerHTML=`
    <div class="phase-notif__badge">Phase ${t}</div>
    <div class="phase-notif__title">${n.title}</div>
    <div class="phase-notif__narrative">${n.narrative}</div>
    ${r}
  `,document.body.appendChild(i);let a=()=>{i.classList.add(`phase-notif--out`),i.addEventListener(`animationend`,()=>i.remove(),{once:!0})};i.addEventListener(`click`,a),setTimeout(a,6e3)}var W=0;function G(t){if(!t.clientId||!t.channelName)return()=>{};a.setState(e=>{e.twitch.channelName=t.channelName});async function n(){try{let e=`https://api.twitch.tv/helix/streams?user_login=${encodeURIComponent(t.channelName)}`,n=await fetch(e,{headers:{"Client-ID":t.clientId,Authorization:`Bearer ${window.__TWITCH_TOKEN__??``}`}});if(!n.ok){console.warn(`[Twitch] API responded with`,n.status);return}let r=(await n.json()).data[0],i=!!r;a.setTwitchLive(i,{title:r?.title??``,game:r?.game_name??``})}catch(e){console.warn(`[Twitch] Poll failed:`,e)}}return n(),W=window.setInterval(n,e.twitch.pollIntervalMs),()=>clearInterval(W)}function K(e){function t(){let{twitch:t,multipliers:n}=a.getState();if(!t.channelName){e.style.display=`none`;return}e.style.display=`flex`,t.isLive?e.innerHTML=`
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
      `}let n=a.subscribe(t);return t(),()=>n()}var te={en:{"stat.total_earned":`Total earned`,"stat.bps":`BPS`,"stat.bpc":`BPC`,"stat.global_multi":`Global ×`,"stat.burst":`⚡ BURST`,"stat.phase":`Phase`,"phase.1":`I — Garage Hacker`,"phase.2":`II — Script Kiddie`,"phase.3":`III — Digital Nomad`,"phase.4":`IV — AI Engineer`,"phase.5":`V — Quantum Singularity`,"clicker.click":`Click`,"clicker.combo":`Combo ×`,"production.bps_label":`BPS`,"production.owned":`Owned`,"production.buy":`Buy`,"production.buy_bulk":`Buy ×10`,"gen.bit_miner":`Bit Miner`,"gen.bit_miner_desc":`A basic script that mines bits slowly.`,"gen.script_farm":`Script Farm`,"gen.script_farm_desc":`Runs scripts in parallel, faster than manual mining.`,"gen.bot_network":`Bot Network`,"gen.bot_network_desc":`Distributed bots harvest bits from multiple sources.`,"gen.data_center":`Data Center`,"gen.data_center_desc":`Industrial-scale bit production.`,"gen.ai_cluster":`AI Cluster`,"gen.ai_cluster_desc":`Cutting-edge AI optimizes bit extraction.`,"gen.quantum_farm":`Quantum Farm`,"gen.quantum_farm_desc":`Harnesses quantum tunneling for bits.`,"project.better_click":`Better Click Feedback`,"project.better_click_desc":`Improves visual feedback on each click.`,"project.combo_amplifier":`Combo Amplifier`,"project.combo_amplifier_desc":`Increases max combo multiplier to ×12.`,"project.market_access":`Market Access`,"project.market_access_desc":`Unlocks the Trade module.`,"project.prediction_engine":`Prediction Engine`,"project.prediction_engine_desc":`Improves trade market predictions.`,"project.casino_charter":`Casino Charter`,"project.casino_charter_desc":`Unlocks the Casino module.`,"project.puzzle_framework":`Puzzle Framework`,"project.puzzle_framework_desc":`Unlocks the Puzzle module.`,"project.ai_trading":`AI Trading`,"project.ai_trading_desc":`Automates trade execution.`,"project.distributed_casino":`Distributed Casino`,"project.distributed_casino_desc":`Expands casino operations globally.`,"project.neural_sync":`Neural Synchronization`,"project.neural_sync_desc":`Synchronizes consciousness across quantum states.`,"project.launch_protocol":`Launch Protocol`,"project.launch_protocol_desc":`Initiates the final sequence.`,"casino.title":`🎰 Casino`,"casino.safe_bet":`Safe Bet`,"casino.safe_bet_desc":`100 Bits → ×1.25 multiplier`,"casino.risky_bet":`Risky Bet`,"casino.risky_bet_desc":`500 Bits → ×2.0 multiplier`,"casino.extreme_bet":`Extreme Bet`,"casino.extreme_bet_desc":`2000 Bits → ×5.0 multiplier`,"casino.insufficient_bits":`Insufficient Bits`,"casino.bet":`Bet`,"casino.win":`🎉 You win!`,"casino.lose":`💀 You lose!`,"trade.title":`📈 Trade`,"trade.sell":`Sell`,"trade.current_price":`Current Price`,"trade.insufficient_units":`No units to sell`,"puzzle.title":`🧩 Puzzle`,"puzzle.score":`Score`,"puzzle.claim":`Claim`,"puzzle.claiming":`Claiming...`,"minigame.click_target":`🎯 Click the Target`,"minigame.click_target_instructions":`Click the glowing target 5 times.`,"minigame.key_sequence":`⌨️ Key Sequence`,"minigame.key_sequence_instructions":`Type the sequence shown.`,"minigame.quick_math":`🧮 Quick Math`,"minigame.quick_math_instructions":`Tap the correct answer.`,"minigame.win_reward":`🎉 +{reward} bits!`,"minigame.win_info":`×{multiplier} BPS · {duration}`,"minigame.lose":`💀 Too slow!`,"button.buy":`Buy`,"button.close":`Close`,"button.skip":`Skip`,"button.sell":`Sell`,"button.play":`Play`,"button.claim":`Claim`,"twitch.live":`🔴 LIVE +50%`,"twitch.offline":`Twitch`,"header.title":`BitStream`,"leaderboard.title":`🏆 Leaderboard`,"leaderboard.rank":`Rank`,"leaderboard.player":`Player`,"leaderboard.bits":`Bits`,"leaderboard.you":`(You)`,"leaderboard.enter_name":`Enter your name`},fr:{"stat.total_earned":`Total gagné`,"stat.bps":`BPS`,"stat.bpc":`BPC`,"stat.global_multi":`Multiplicateur`,"stat.burst":`⚡ BURST`,"stat.phase":`Phase`,"phase.1":`I — Pirate Garage`,"phase.2":`II — Script Kiddie`,"phase.3":`III — Nomade Digital`,"phase.4":`IV — Ingénieur IA`,"phase.5":`V — Singularité Quantique`,"clicker.click":`Cliquer`,"clicker.combo":`Combo ×`,"production.bps_label":`BPS`,"production.owned":`Possédé`,"production.buy":`Acheter`,"production.buy_bulk":`Acheter ×10`,"gen.bit_miner":`Mineur de Bits`,"gen.bit_miner_desc":`Un script basique qui extrait les bits lentement.`,"gen.script_farm":`Ferme de Scripts`,"gen.script_farm_desc":`Exécute des scripts en parallèle, plus rapide que l'extraction manuelle.`,"gen.bot_network":`Réseau de Bots`,"gen.bot_network_desc":`Des bots distribués récoltent les bits de plusieurs sources.`,"gen.data_center":`Centre de Données`,"gen.data_center_desc":`Production de bits à l'échelle industrielle.`,"gen.ai_cluster":`Cluster IA`,"gen.ai_cluster_desc":`L'IA de pointe optimise l'extraction de bits.`,"gen.quantum_farm":`Ferme Quantique`,"gen.quantum_farm_desc":`Exploite l'effet tunnel quantique pour les bits.`,"project.better_click":`Meilleur Feedback de Clic`,"project.better_click_desc":`Améliore le feedback visuel de chaque clic.`,"project.combo_amplifier":`Amplificateur de Combo`,"project.combo_amplifier_desc":`Augmente le multiplicateur de combo max à ×12.`,"project.market_access":`Accès au Marché`,"project.market_access_desc":`Déverrouille le module Commerce.`,"project.prediction_engine":`Moteur de Prédiction`,"project.prediction_engine_desc":`Améliore les prédictions du marché commercial.`,"project.casino_charter":`Charte du Casino`,"project.casino_charter_desc":`Déverrouille le module Casino.`,"project.puzzle_framework":`Framework Puzzle`,"project.puzzle_framework_desc":`Déverrouille le module Puzzle.`,"project.ai_trading":`Commerce IA`,"project.ai_trading_desc":`Automatise l'exécution des échanges.`,"project.distributed_casino":`Casino Distribué`,"project.distributed_casino_desc":`Étend les opérations du casino mondialement.`,"project.neural_sync":`Synchronisation Neurale`,"project.neural_sync_desc":`Synchronise la conscience à travers les états quantiques.`,"project.launch_protocol":`Protocole de Lancement`,"project.launch_protocol_desc":`Initie la séquence finale.`,"casino.title":`🎰 Casino`,"casino.safe_bet":`Pari Sûr`,"casino.safe_bet_desc":`100 Bits → ×1.25 multiplicateur`,"casino.risky_bet":`Pari Risqué`,"casino.risky_bet_desc":`500 Bits → ×2.0 multiplicateur`,"casino.extreme_bet":`Pari Extrême`,"casino.extreme_bet_desc":`2000 Bits → ×5.0 multiplicateur`,"casino.insufficient_bits":`Bits insuffisants`,"casino.bet":`Parier`,"casino.win":`🎉 Vous gagnez!`,"casino.lose":`💀 Vous perdez!`,"trade.title":`📈 Commerce`,"trade.sell":`Vendre`,"trade.current_price":`Prix Actuel`,"trade.insufficient_units":`Aucune unité à vendre`,"puzzle.title":`🧩 Puzzle`,"puzzle.score":`Score`,"puzzle.claim":`Réclamer`,"puzzle.claiming":`Réclamation...`,"minigame.click_target":`🎯 Cliquez la Cible`,"minigame.click_target_instructions":`Cliquez la cible brillante 5 fois.`,"minigame.key_sequence":`⌨️ Séquence de Touches`,"minigame.key_sequence_instructions":`Tapez la séquence affichée.`,"minigame.quick_math":`🧮 Mathématiques Rapides`,"minigame.quick_math_instructions":`Appuyez sur la bonne réponse.`,"minigame.win_reward":`🎉 +{reward} bits!`,"minigame.win_info":`×{multiplier} BPS · {duration}`,"minigame.lose":`💀 Trop lent!`,"button.buy":`Acheter`,"button.close":`Fermer`,"button.skip":`Passer`,"button.sell":`Vendre`,"button.play":`Jouer`,"button.claim":`Réclamer`,"twitch.live":`🔴 EN DIRECT +50%`,"twitch.offline":`Twitch`,"header.title":`BitStream`,"leaderboard.title":`🏆 Classement`,"leaderboard.rank":`Rang`,"leaderboard.player":`Joueur`,"leaderboard.bits":`Bits`,"leaderboard.you":`(Vous)`,"leaderboard.enter_name":`Entrez votre nom`}},q=`fr`;function ne(e){q=e.getLanguage(),e.subscribe(()=>{q=e.getLanguage()})}function J(e,t){let n=te[q][e]||e;return t&&Object.entries(t).forEach(([e,t])=>{n=n.replace(RegExp(`\\{${e}\\}`,`g`),String(t))}),n}function re(t,r={}){ne(a),t.innerHTML=`
    <div id="hdr"></div>
    <main class="layout">
      <!-- Colonne gauche : Clicker + Stats -->
      <aside class="layout__left">
        <section id="clicker-slot"></section>
        <div class="stats-card">
          <div class="stats-card__row">
            <span class="stats-label" id="label-total">Total gagné</span>
            <span class="stats-value mono" id="stat-total">0</span>
          </div>
          <div class="stats-card__row">
            <span class="stats-label" id="label-bps">BPS</span>
            <span class="stats-value mono" id="stat-bps">0</span>
          </div>
          <div class="stats-card__row">
            <span class="stats-label" id="label-bpc">BPC</span>
            <span class="stats-value mono" id="stat-bpc">0</span>
          </div>
          <div class="stats-card__row">
            <span class="stats-label" id="label-multi">Multiplicateur</span>
            <span class="stats-value mono" id="stat-multi">1.00×</span>
          </div>
          <div class="stats-card__row" id="burst-row" style="display:none">
            <span class="stats-label burst-label" id="label-burst">⚡ BURST</span>
            <span class="stats-value mono burst-value" id="stat-burst"></span>
          </div>
          <div class="stats-card__row">
            <span class="stats-label" id="label-phase">Phase</span>
            <span class="stats-value mono" id="stat-phase">I — Pirate Garage</span>
          </div>
        </div>
      </aside>

      <!-- Colonne centre : Générateurs + Casino -->
      <section class="layout__center">
        <section id="prod-slot"></section>
        <section id="casino-slot" style="display:none"></section>
      </section>

      <!-- Colonne droite : Projets + Missions + Leaderboard -->
      <aside class="layout__right">
        <section id="projects-slot"></section>
        <section id="missions-slot"></section>
        <section id="leaderboard-slot"></section>
      </aside>
    </main>
  `,p(t.querySelector(`#hdr`)),m(t.querySelector(`#clicker-slot`)),_(t.querySelector(`#prod-slot`)),b(t.querySelector(`#projects-slot`)),ee(t.querySelector(`#missions-slot`)),R(t.querySelector(`#leaderboard-slot`)),B(),H(),r.twitchClientId&&r.twitchChannel&&G({clientId:r.twitchClientId,channelName:r.twitchChannel});let i=document.querySelector(`#twitch-badge-slot`);i&&K(i);let o=t.querySelector(`#casino-slot`),s=!1;function c(){let e=a.getState();!s&&e.projects.find(e=>e.id===`casino_charter`)?.purchased&&(o.style.display=``,x(o),s=!0)}a.subscribe(c),c();let l=t.querySelector(`#stat-total`),u=t.querySelector(`#stat-bps`),d=t.querySelector(`#stat-bpc`),f=t.querySelector(`#stat-multi`),h=t.querySelector(`#burst-row`),g=t.querySelector(`#stat-burst`),v=t.querySelector(`#stat-phase`),y=t.querySelector(`#label-total`),S=t.querySelector(`#label-bps`),C=t.querySelector(`#label-bpc`),w=t.querySelector(`#label-multi`),T=t.querySelector(`#label-burst`),E=t.querySelector(`#label-phase`),D=[``,`I`,`II`,`III`,`IV`,`V`];function O(){y.textContent=J(`stat.total_earned`),S.textContent=J(`stat.bps`),C.textContent=J(`stat.bpc`),w.textContent=J(`stat.global_multi`),T.textContent=J(`stat.burst`),E.textContent=J(`stat.phase`)}function k(){let t=a.getState(),r=t.multipliers,i=a.getCurrentPhase(),o=e.phases.find(e=>e.id===i);l.textContent=n(t.totalBitsEarned),u.textContent=n(a.getEffectiveBPS())+` b/s`,d.textContent=n(a.getEffectiveBPC())+` /click`,v.textContent=`${D[i]} — ${o.title}`,f.textContent=n(a.getPassiveMultiplier())+`×`;let s=a.isMinigameActive();if(h.style.display=s?`flex`:`none`,s){let e=Math.max(0,Math.ceil((r.minigameEndsAt-Date.now())/1e3));g.textContent=`×${r.minigame} · ${e}s`}}O(),a.subscribe(O),a.subscribe(k),k(),window.store=a}var Y=0,X=0,ie=500,Z=0;function Q(e){Y===0&&(Y=e);let t=Math.min((e-Y)/1e3,1);Y=e;let n=a.getEffectiveBPS();n>0&&a.addBits(n*t),X+=a.getResearchPS()*t,e-Z>ie&&(X>0&&(a.addResearchPoints(X),X=0,a.notify()),Z=e),requestAnimationFrame(Q)}function ae(){Y=0,Z=performance.now(),requestAnimationFrame(Q)}function oe(e){let t=document.createElement(`div`);t.className=`mg-overlay`,t.innerHTML=`
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
  `,document.body.appendChild(t),t.querySelector(`#offline-close`).addEventListener(`click`,()=>{t.classList.add(`mg-overlay--out`),t.addEventListener(`animationend`,()=>t.remove(),{once:!0})})}window.__TWITCH_TOKEN__=``;var se=document.getElementById(`app`);u();var $=c();re(se,{twitchClientId:`73u1zjxog6q27ehere4n1exf2ke5pv`,twitchChannel:`cireericfr`}),ae(),f(),$&&$.bitsEarned>1&&requestAnimationFrame(()=>oe($));