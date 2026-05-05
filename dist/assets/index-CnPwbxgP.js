(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={clicker:{baseBitsPerClick:1,comboWindowMs:500,maxComboMultiplier:12,clicksToMaxCombo:20,comboDecayMs:1200},generators:[{id:`bit_miner`,name:`Mineur de Bits`,description:`Un script basique qui extrait les bits lentement.`,emoji:`⛏️`,baseCost:15,growthRate:1.15,baseBps:.1,unlockAt:0},{id:`packet_router`,name:`Routeur de Paquets`,description:`Achemine des paquets réseau contre rémunération.`,emoji:`📡`,baseCost:100,growthRate:1.15,baseBps:.5,unlockAt:50},{id:`data_farm`,name:`Ferme de Données`,description:`Une petite ferme de bots générateurs de bits.`,emoji:`🌾`,baseCost:500,growthRate:1.15,baseBps:3,unlockAt:300},{id:`neural_net`,name:`Réseau Neuronal`,description:`Réseau auto-optimisé de génération de bits.`,emoji:`🧠`,baseCost:3e3,growthRate:1.15,baseBps:20,unlockAt:2e3},{id:`quantum_rig`,name:`Rig Quantique`,description:`Récolte de bits par intrication quantique.`,emoji:`⚛️`,baseCost:2e4,growthRate:1.15,baseBps:150,unlockAt:15e3},{id:`bit_singularity`,name:`Singularité de Bits`,description:`Un trou noir qui convertit la matière en bits.`,emoji:`🕳️`,baseCost:2e5,growthRate:1.15,baseBps:1500,unlockAt:15e4},{id:`warp_core`,name:`Noyau de Distorsion`,description:`Courbe l'espace-temps pour accélérer la production.`,emoji:`🌀`,baseCost:5e6,growthRate:1.15,baseBps:2e4,unlockAt:2e6},{id:`dimensional_tap`,name:`Robinet Dimensionnel`,description:`Siphonne l'énergie des dimensions parallèles.`,emoji:`🔮`,baseCost:1e8,growthRate:1.15,baseBps:35e4,unlockAt:5e7},{id:`reality_engine`,name:`Moteur de Réalité`,description:`Redéfinit les constantes physiques pour un rendement maximal.`,emoji:`🌌`,baseCost:3e9,growthRate:1.15,baseBps:7e6,unlockAt:1e9},{id:`the_omnibus`,name:`L'Omnibus`,description:`Un hypercalculateur incompréhensible. Fait tout tourner.`,emoji:`♾️`,baseCost:1e11,growthRate:1.15,baseBps:2e8,unlockAt:3e10}],projects:[{id:`market_access`,name:`Accès au Marché`,description:`Déverrouille le Commerce : vente de générateurs au prix du marché.`,category:`module`,cost:5e3,unlockAt:5e3,phase:2,effect:{unlocks:`trade`},requires:[]},{id:`casino_charter`,name:`Charte du Casino`,description:`Déverrouille le Casino : paris risque/récompense avec multiplicateurs.`,category:`module`,cost:5e4,unlockAt:1e5,phase:3,effect:{unlocks:`casino`},requires:[]},{id:`aim_protocol`,name:`Protocole de Précision`,description:`Déverrouille l'Aim Trainer : mise en jeu, cibles à viser pour gagner des bits.`,category:`module`,cost:15e4,unlockAt:2e5,phase:3,effect:{unlocks:`aimtrainer`},requires:[]},{id:`endgame_protocol`,name:`🚀 LANCER LE PROTOCOLE`,description:`Déploie BitStream sur tous les nœuds de la Terre. Condition de victoire.`,category:`endgame`,cost:5e8,unlockAt:5e8,phase:5,effect:{endgame:!0},requires:[`market_access`,`casino_charter`,`aim_protocol`]}],research:{rpsDiv:3,technologies:[{id:`lossless_compress`,name:`Lossless Compression`,description:`Compress bit streams for 20% more passive output.`,tier:1,phase:1,rpCost:50,effect:{passiveMultiplier:1.2},requires:[]},{id:`macro_engine`,name:`Macro Engine`,description:`Automate input patterns for 50% more bits per click.`,tier:1,phase:1,rpCost:80,effect:{clickMultiplier:1.5},requires:[]},{id:`combo_protocol`,name:`Combo Protocol`,description:`Extend the combo meter cap from ×8 to ×12.`,tier:1,phase:1,rpCost:150,effect:{maxCombo:12},requires:[`lossless_compress`]},{id:`hash_sharding`,name:`Hash Sharding`,description:`Distributed hash tables: all generators produce ×1.5.`,tier:2,phase:2,rpCost:600,effect:{passiveMultiplier:1.5},requires:[`lossless_compress`]},{id:`rp_accelerator`,name:`RP Accelerator`,description:`Dedicated research cores — research rate ×1.5.`,tier:2,phase:2,rpCost:900,effect:{researchMultiplier:1.5},requires:[`combo_protocol`]},{id:`exploit_amplifier`,name:`Exploit Amplifier`,description:`Mini-game rewards are doubled.`,tier:2,phase:2,rpCost:1500,effect:{minigameRewardMult:2},requires:[`macro_engine`]},{id:`neural_amplifier`,name:`Neural Amplification`,description:`Deep neural nets push all generators to ×3.`,tier:3,phase:3,rpCost:12e3,effect:{passiveMultiplier:3},requires:[`hash_sharding`]},{id:`global_cascade`,name:`Global Cascade`,description:`Cascade all gains globally: ×2 everything.`,tier:3,phase:3,rpCost:2e4,effect:{globalMultiplier:2},requires:[`rp_accelerator`,`neural_amplifier`]},{id:`deep_cache`,name:`Deep Cache`,description:`Offline cache extended from 8h to 16h.`,tier:3,phase:3,rpCost:35e3,effect:{offlineCapHours:16},requires:[`exploit_amplifier`]},{id:`quantum_sync`,name:`Quantum Sync`,description:`Quantum synchronisation across all nodes: global ×5.`,tier:4,phase:4,rpCost:3e5,effect:{globalMultiplier:5},requires:[`global_cascade`]},{id:`dark_cores`,name:`Dark Matter Cores`,description:`Tap dark matter for ×10 production.`,tier:4,phase:4,rpCost:5e5,effect:{passiveMultiplier:10},requires:[`neural_amplifier`]},{id:`temporal_acc`,name:`Temporal Accelerator`,description:`Bend time — research rate ×5.`,tier:4,phase:4,rpCost:15e5,effect:{researchMultiplier:5},requires:[`rp_accelerator`]},{id:`genesis_code`,name:`Genesis Code`,description:`Rewrite the universe's source: global ×20.`,tier:5,phase:5,rpCost:6e6,effect:{globalMultiplier:20},requires:[`quantum_sync`,`dark_cores`]},{id:`recursive_loop`,name:`Recursive Loop`,description:`Self-referential optimisation: all generators ×50.`,tier:5,phase:5,rpCost:25e6,effect:{passiveMultiplier:50},requires:[`temporal_acc`]},{id:`launch_protocol`,name:`🚀 LAUNCH THE PROTOCOL`,description:`Deploy the BitStream Protocol to every node on Earth. This ends the game.`,tier:5,phase:5,rpCost:1e8,effect:{endgame:!0},requires:[`genesis_code`,`recursive_loop`]}]},phases:[{id:1,threshold:0,title:`Garage Hacker`,narrative:`You start writing scripts in your bedroom. The stream goes live for the first time.`,unlocks:[`clicker`,`generators`,`upgrades`,`minigames`]},{id:2,threshold:1e4,title:`Going Online`,narrative:`Your scripts go viral. A small community forms around your stream. Research becomes possible.`,unlocks:[`research`]},{id:3,threshold:3e5,title:`Corporate Attention`,narrative:`A startup wants to partner. Corporate money starts flowing. New hardware arrives.`,unlocks:[]},{id:4,threshold:5e6,title:`Enterprise Scale`,narrative:`BitStream becomes a platform. Thousands of nodes are now live worldwide.`,unlocks:[]},{id:5,threshold:1e8,title:`Quantum Era`,narrative:`Quantum servers come online. The network transcends traditional computing.`,unlocks:[]}],minigames:{intervalRange:[12e4,3e5],durationMs:15e3,burstDurationSec:30,burstBpsMultiplier:10},offline:{maxOfflineMs:480*60*1e3,efficiency:.1},twitch:{liveMultiplier:1.5,pollIntervalMs:120*1e3},save:{intervalMs:1e4}};function t(e,t,n){return Math.floor(e*t**+n)}function n(e){return e>=0x38d7ea4c68000?(e/0x38d7ea4c68000).toFixed(2)+`Qa`:e>=0xe8d4a51000?(e/0xe8d4a51000).toFixed(2)+`T`:e>=1e9?(e/1e9).toFixed(2)+`B`:e>=1e6?(e/1e6).toFixed(2)+`M`:e>=1e3?(e/1e3).toFixed(2)+`K`:e>=10?Math.floor(e).toString():e>=1?e.toFixed(1):e>0?e.toFixed(2):`0`}function r(e){let t=Math.floor(e/3600),n=Math.floor(e%3600/60),r=Math.floor(e%60);return t>0?`${t}h ${n}m`:n>0?`${n}m ${r}s`:`${r}s`}function i(){return{bits:0,totalBitsEarned:0,totalClicks:0,clicker:{comboCount:0,comboMultiplier:1,lastClickTime:0},generators:e.generators.map(e=>({id:e.id,owned:0})),projects:e.projects.map(e=>({id:e.id,purchased:!1})),multipliers:{click:1,passive:1,global:1,twitch:1,minigame:1,minigameEndsAt:0,research:1},research:{points:0,techPurchased:[]},twitch:{isLive:!1,streamTitle:``,gameName:``,lastChecked:0,channelName:``},lastPhase:1,lastSaveTime:Date.now(),lastTickTime:Date.now(),language:`fr`}}var a=new class{state=i();listeners=new Set;getState(){return this.state}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notify(){this.listeners.forEach(e=>e())}setState(e){e(this.state),this.notify()}addBits(e){this.state.bits+=e,this.state.totalBitsEarned+=e,this.notify()}incrementClicks(){this.state.totalClicks+=1}spendBits(e){return this.state.bits<e?!1:(this.state.bits-=e,this.notify(),!0)}getResearchPS(){let t=this.getRawBPS();return Math.sqrt(t+1)/e.research.rpsDiv*this.state.multipliers.research}addResearchPoints(e){this.state.research.points+=e}isTechPurchased(e){return this.state.research.techPurchased.includes(e)}isTechAvailable(t){let n=e.research.technologies.find(e=>e.id===t);if(!n||this.isTechPurchased(t)||this.getCurrentPhase()<n.phase)return!1;for(let e of n.requires)if(!this.isTechPurchased(e))return!1;return!0}purchaseTech(t){let n=e.research.technologies.find(e=>e.id===t);return!n||!this.isTechAvailable(t)||this.state.research.points<n.rpCost?!1:(this.setState(e=>{e.research.points-=n.rpCost,e.research.techPurchased.push(t),this.recomputeMultipliers(e)}),!0)}getMaxCombo(){let t=e.research.technologies.find(e=>e.id===`combo_protocol`);return t&&this.isTechPurchased(`combo_protocol`)?t.effect.maxCombo??e.clicker.maxComboMultiplier:e.clicker.maxComboMultiplier}getOfflineCapMs(){let t=e.research.technologies.find(e=>e.id===`deep_cache`);return t&&this.isTechPurchased(`deep_cache`)?(t.effect.offlineCapHours??8)*36e5:e.offline.maxOfflineMs}getMinigameRewardMult(){let t=e.research.technologies.find(e=>e.id===`exploit_amplifier`);return t&&this.isTechPurchased(`exploit_amplifier`)?t.effect.minigameRewardMult??1:1}isMinigameActive(){return Date.now()<this.state.multipliers.minigameEndsAt}getPassiveMultiplier(){let e=this.state.multipliers;return e.passive*e.global*e.twitch*(this.isMinigameActive()?e.minigame:1)}getClickMultiplier(){let e=this.state.multipliers;return e.click*e.global*e.twitch*(this.isMinigameActive()?e.minigame:1)*this.state.clicker.comboMultiplier}getRawBPS(){let t=0;for(let n of e.generators){let e=this.state.generators.find(e=>e.id===n.id);e&&(t+=e.owned*n.baseBps)}return t}getEffectiveBPS(){return this.getRawBPS()*this.getPassiveMultiplier()}getEffectiveBPC(){return e.clicker.baseBitsPerClick*this.getClickMultiplier()}getCurrentPhase(){let t=this.state.totalBitsEarned,n=1;for(let r of e.phases)t>=r.threshold&&(n=r.id);return n}getCost(n){let r=e.generators.find(e=>e.id===n),i=this.state.generators.find(e=>e.id===n);return!r||!i?1/0:t(r.baseCost,r.growthRate,i.owned)}buyGenerator(e){let t=this.getCost(e);return this.state.bits<t?!1:(this.setState(n=>{n.bits-=t,n.generators.find(t=>t.id===e).owned+=1}),!0)}purchaseProject(t){let n=e.projects.find(e=>e.id===t),r=this.state.projects.find(e=>e.id===t);if(!n||!r||r.purchased||this.state.bits<n.cost||this.state.totalBitsEarned<n.unlockAt||this.getCurrentPhase()<n.phase)return!1;for(let e of n.requires)if(!this.state.projects.find(t=>t.id===e)?.purchased)return!1;return this.setState(e=>{e.bits-=n.cost,e.projects.find(e=>e.id===t).purchased=!0}),!0}recomputeMultipliers(t){let n=1,r=1,i=1,a=1;for(let o of e.research.technologies){if(!t.research.techPurchased.includes(o.id))continue;let e=o.effect;e.clickMultiplier&&(n*=e.clickMultiplier),e.passiveMultiplier&&(r*=e.passiveMultiplier),e.globalMultiplier&&(i*=e.globalMultiplier),e.researchMultiplier&&(a*=e.researchMultiplier)}t.multipliers.click=n,t.multipliers.passive=r,t.multipliers.global=i,t.multipliers.research=a}setTwitchLive(t,n){this.setState(r=>{r.twitch.isLive=t,r.twitch.streamTitle=n.title,r.twitch.gameName=n.game,r.twitch.lastChecked=Date.now(),r.multipliers.twitch=t?e.twitch.liveMultiplier:1})}setLanguage(e){this.setState(t=>{t.language=e})}getLanguage(){return this.state.language}loadState(t){let n=i();this.state={...n,...t,generators:n.generators.map(e=>t.generators?.find(t=>t.id===e.id)??e),projects:n.projects.map(e=>t.projects?.find(t=>t.id===e.id)??e),multipliers:{...n.multipliers,...t.multipliers??{}},research:{...n.research,...t.research??{}},twitch:{...n.twitch,...t.twitch??{}}},this.recomputeMultipliers(this.state),this.state.twitch.isLive&&(this.state.multipliers.twitch=e.twitch.liveMultiplier),this.notify()}resetState(){this.state=i(),this.notify()}},o=`bitstream_v1`,s=null;function c(){let e=s;return s=null,e}function l(){let e={...a.getState(),lastSaveTime:Date.now()};localStorage.setItem(o,JSON.stringify(e))}function u(){let t=localStorage.getItem(o);if(!t)return!1;try{let n=JSON.parse(t);if(n.lastSaveTime){let t=n.research?.techPurchased?.includes(`deep_cache`)?16*36e5:e.offline.maxOfflineMs,r=Math.min(Date.now()-n.lastSaveTime,t);if(r>5e3){let t=0;for(let r of e.generators){let e=n.generators?.find(e=>e.id===r.id);e&&(t+=e.owned*r.baseBps)}let i=n.multipliers?.passive??1,a=n.multipliers?.global??1,o=t*i*a*(r/1e3)*e.offline.efficiency;n.bits=(n.bits??0)+o,n.totalBitsEarned=(n.totalBitsEarned??0)+o,s={bitsEarned:o,seconds:r/1e3}}}return n.lastTickTime=Date.now(),a.loadState(n),!0}catch{return!1}}function d(){localStorage.removeItem(o),a.resetState()}function f(){setInterval(l,e.save.intervalMs),window.addEventListener(`beforeunload`,l)}function p(e){e.innerHTML=`
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
        `,e.appendChild(a)}r.appendChild(e)}}function f(t){let n=t.target.closest(`[data-buy]`);if(!n)return;let r=n.dataset.buy;a.purchaseProject(r)&&(e.projects.find(e=>e.id===r)?.effect).endgame&&v()}function p(){let t=o();if(t!==i)i=t,d();else{let t=a.getState();r.querySelectorAll(`[data-buy]`).forEach(r=>{let i=r.dataset.buy,a=e.projects.find(e=>e.id===i),o=t.bits>=a.cost;r.classList.toggle(`prj-btn--disabled`,!o),r.textContent=o?`RESEARCH`:`Need `+n(a.cost-t.bits)+` more`,r.closest(`.prj-card`).classList.toggle(`prj-card--affordable`,o)})}}r.addEventListener(`click`,f);let m=a.subscribe(p);return i=o(),d(),()=>m()}var x=[`♠`,`♣`,`♥`,`♦`],S=[`A`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`10`,`J`,`Q`,`K`];function ee(){let e=x.flatMap(e=>S.map(t=>({suit:e,rank:t})));return[].concat(...[,,,,,,].fill(0).map(()=>e.map(e=>({...e}))))}function te(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}function C(e){return[`J`,`Q`,`K`].includes(e.rank)?10:e.rank===`A`?11:parseInt(e.rank)}function w(e){let t=e.filter(e=>!e.faceDown),n=t.reduce((e,t)=>e+C(t),0),r=t.filter(e=>e.rank===`A`).length;for(;n>21&&r-- >0;)n-=10;return n}function T(e){return e.faceDown?`<div class="bj-card bj-card--back"></div>`:`<div class="bj-card${e.suit===`♥`||e.suit===`♦`?` bj-card--red`:``}">
    <div class="bj-card-tl">${e.rank}<br><span>${e.suit}</span></div>
    <div class="bj-card-ct">${e.suit}</div>
    <div class="bj-card-br">${e.rank}<br><span>${e.suit}</span></div>
  </div>`}var E=[{label:`PERTE`,mult:0,col:`#881111`,txt:`#fff`},{label:`×0.5`,mult:.5,col:`#333333`,txt:`#fff`},{label:`PERTE`,mult:0,col:`#aa2222`,txt:`#fff`},{label:`×1`,mult:1,col:`#555555`,txt:`#fff`},{label:`×2`,mult:2,col:`#888888`,txt:`#000`},{label:`×3`,mult:3,col:`#bbbbbb`,txt:`#000`},{label:`×5`,mult:5,col:`#e8e8e8`,txt:`#000`},{label:`💎`,mult:10,col:`#ffcc00`,txt:`#000`}];function D(e,t,n,r,i){let a=E.length,o=2*Math.PI/a;e.clearRect(0,0,e.canvas.width,e.canvas.height);for(let s=0;s<a;s++){let a=E[s],c=i+s*o-Math.PI/2,l=c+o;e.beginPath(),e.moveTo(t,n),e.arc(t,n,r,c,l),e.closePath(),e.fillStyle=a.col,e.fill(),e.strokeStyle=`#111`,e.lineWidth=1.5,e.stroke();let u=c+o/2;e.save(),e.translate(t+Math.cos(u)*r*.68,n+Math.sin(u)*r*.68),e.rotate(u+Math.PI/2),e.textAlign=`center`,e.textBaseline=`middle`,e.fillStyle=a.txt,e.font=`bold 10px monospace`,e.fillText(a.label,0,0),e.restore()}e.beginPath(),e.arc(t,n,10,0,2*Math.PI),e.fillStyle=`#111`,e.fill(),e.strokeStyle=`#fff`,e.lineWidth=1.5,e.stroke()}function O(e,t){let n=2*Math.PI/E.length,r=((-(t+.5)*n%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-(e%(2*Math.PI)+2*Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI);return e+(4+Math.floor(Math.random()*4))*2*Math.PI+r}function k(e){e.innerHTML=`
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
        <button class="casino-tab" data-game="suits">♥ Couleurs</button>
        <button class="casino-tab" data-game="wheel">🎡 Roue</button>
      </div>
      <div class="casino-content" id="casino-content"></div>
      <div class="casino-history" id="casino-history"></div>
    </div>
  `;let t=e.querySelector(`#casino-content`),r=e.querySelector(`#casino-balance`),i=e.querySelector(`#casino-history`),o=e.querySelectorAll(`.casino-tab`),s=`blackjack`,c=!1,l=[];function u(e){let n=t.querySelector(`.casino-error`);n&&n.remove();let r=document.createElement(`div`);r.className=`casino-error`,r.textContent=e,t.prepend(r),setTimeout(()=>r.remove(),2500)}function d(e){let n=t.querySelector(`#${e}`);return Math.max(1,parseInt(n?.value||`1`)||1)}function f(e,t=100){return`
      <div class="bet-wrap">
        <div class="bet-quicks">
          <button class="bet-quick" data-pct="10">10%</button>
          <button class="bet-quick" data-pct="25">25%</button>
          <button class="bet-quick" data-pct="50">50%</button>
          <button class="bet-quick" data-pct="100">MAX</button>
        </div>
        <input type="number" id="${e}" class="bet-input" value="${t}" min="1">
      </div>
    `}function p(e){t.querySelectorAll(`.bet-quick`).forEach(n=>{n.addEventListener(`click`,()=>{let r=parseInt(n.dataset.pct||`100`),i=Math.floor(a.getState().bits),o=Math.max(1,Math.floor(i*r/100)),s=t.querySelector(`#${e}`);s&&(s.value=String(o))})})}function m(e,t,n){l.unshift({game:e,won:t,amount:n}),K()}let h=[],g=[[]],_=[100],v=0,y=[],b=100,C=`bet`;function k(){return g[v]}function A(){return _[v]}function j(){return g.length>1}function M(e){let r=t.querySelector(`#bj-bet-display`);r&&(r.textContent=n(e)+` bits`)}function N(){let e=t.querySelector(`#bj-dealer-cards`),r=t.querySelector(`#bj-dealer-total`),i=t.querySelector(`#bj-controls`),o=t.querySelector(`#bj-msg`);if(!(!e||!i||!o))if(C===`bet`){e.innerHTML=`<div class="bj-placeholder">♠ ♣ ♥ ♦</div>`;let n=t.querySelector(`#bj-player-cards`);n&&(n.innerHTML=`<div class="bj-placeholder">Distribuez pour commencer</div>`),r&&(r.textContent=``),o.innerHTML=``;let a=t.querySelector(`#bj-bet-display`);a&&(a.textContent=`—`),i.innerHTML=`
        ${f(`bj-bet`,b)}
        <button class="casino-btn" id="bj-deal">🃏 Distribuer</button>
      `,p(`bj-bet`),t.querySelector(`#bj-deal`)?.addEventListener(`click`,ne)}else if(C===`play`){e.innerHTML=y.map(e=>T(e)).join(``);let s=w(y.filter(e=>!e.faceDown));r&&(r.textContent=`${s}${y.some(e=>e.faceDown)?` + ?`:``}`);let c=t.querySelector(`#bj-player-cards`),l=t.querySelector(`#bj-player-total`);if(c)if(j())c.innerHTML=g.map((e,t)=>{let r=t===v,i=w(e);return`<div class="bj-split-hand${r?` bj-split-hand--active`:``}">
              <div class="bj-split-label">Main ${t+1} (${n(_[t])} bits)${r?` ◀`:``}</div>
              <div class="bj-cards">${e.map(e=>T(e)).join(``)}</div>
              <div class="bj-total">${i}</div>
            </div>`}).join(``),l&&(l.textContent=``);else{c.innerHTML=k().map(e=>T(e)).join(``);let e=w(k());l&&(l.textContent=String(e))}M(A());let u=w(k()),d=k().length===2&&a.getState().bits>=A(),f=k().length===2&&!j()&&k()[0].rank===k()[1].rank&&a.getState().bits>=A();i.innerHTML=`
        <div class="bj-action-row">
          <button class="casino-btn" id="bj-hit">Tirer</button>
          <button class="casino-btn" id="bj-stand">Rester</button>
          <button class="casino-btn${d?``:` casino-btn--disabled`}" id="bj-double">Doubler</button>
          ${f?`<button class="casino-btn bj-btn-split" id="bj-split">Split</button>`:``}
        </div>
        <div class="bj-total-row">Total : <span class="mono">${u}</span></div>
      `,o.innerHTML=``,t.querySelector(`#bj-hit`)?.addEventListener(`click`,re),t.querySelector(`#bj-stand`)?.addEventListener(`click`,F),d&&t.querySelector(`#bj-double`)?.addEventListener(`click`,ie),f&&t.querySelector(`#bj-split`)?.addEventListener(`click`,ae)}else{y.forEach(e=>{e.faceDown=!1}),e.innerHTML=y.map(e=>T(e)).join(``);let n=w(y);r&&(r.textContent=String(n));let a=t.querySelector(`#bj-player-cards`);if(a)if(j())a.innerHTML=g.map((e,t)=>`
            <div class="bj-split-hand">
              <div class="bj-split-label">Main ${t+1}</div>
              <div class="bj-cards">${e.map(e=>T(e)).join(``)}</div>
              <div class="bj-total">${w(e)}</div>
            </div>`).join(``);else{a.innerHTML=k().map(e=>T(e)).join(``);let e=w(k()),n=t.querySelector(`#bj-player-total`);n&&(n.textContent=String(e))}i.innerHTML=`<button class="casino-btn" id="bj-again">Rejouer</button>`,t.querySelector(`#bj-again`)?.addEventListener(`click`,()=>{C=`bet`,g=[[]],_=[b],v=0,N()})}}function ne(){if(b=d(`bj-bet`),a.getState().bits<b){u(`Bits insuffisants !`);return}if(a.spendBits(b),c=!0,h=te(ee()),g=[[{...h.pop()},{...h.pop()}]],_=[b],v=0,y=[{...h.pop()},{...h.pop(),faceDown:!0}],C=`play`,N(),w(k())===21){let e=t.querySelector(`#bj-player-cards`);e&&e.classList.add(`bj-blackjack-flash`);let n=t.querySelector(`#bj-msg`);n&&(n.innerHTML=`<div class="bj-bj-banner">🃏 BLACKJACK ! 🃏</div>`),setTimeout(()=>{y.forEach(e=>{e.faceDown=!1}),w(y)===21?L([{push:!0,msg:`Double Blackjack — Égalité !`}]):L([{won:!0,bonus:!0,msg:`🃏 Blackjack ! ×1.5 !`}])},1400)}}function re(){k().push({...h.pop()}),N();let e=w(k());e>21?setTimeout(()=>{let n=t.querySelector(`#bj-msg`);n&&(n.innerHTML=`<div class="bj-result bj-result--lose">💥 Bust (${e}) !</div>`),setTimeout(()=>P(),1e3)},300):e===21&&setTimeout(()=>F(),300)}function P(){j()&&v<g.length-1?(v++,N()):I()}function F(){P()}function I(){y.forEach(e=>{e.faceDown=!1}),N();function e(){if(w(y)<17)setTimeout(()=>{y.push({...h.pop()}),N(),e()},650);else{let e=w(y),t=[];g.forEach((n,r)=>{let i=w(n);i>21?t.push({won:!1,msg:`Main ${g.length>1?r+1+` : `:``}Bust (${i}) — Perdu`}):e>21?t.push({won:!0,msg:`Main ${g.length>1?r+1+` : `:``}Croupier bust — Gagné !`}):i>e?t.push({won:!0,msg:`Main ${g.length>1?r+1+` : `:``}${i} > ${e} — Gagné !`}):i===e?t.push({push:!0,msg:`Main ${g.length>1?r+1+` : `:``}Égalité (${i})`}):t.push({won:!1,msg:`Main ${g.length>1?r+1+` : `:``}${i} < ${e} — Croupier gagne`})}),setTimeout(()=>L(t),400)}}e()}function ie(){if(a.getState().bits<A()){u(`Bits insuffisants pour doubler !`);return}a.spendBits(A()),_[v]*=2,k().push({...h.pop()}),M(_[v]),N(),w(k())>21?setTimeout(()=>{P()},500):setTimeout(()=>F(),600)}function ae(){if(a.getState().bits<A()){u(`Bits insuffisants pour splitter !`);return}a.spendBits(A());let e=_[0];g=[[g[0][0],{...h.pop()}],[g[0][1],{...h.pop()}]],_=[e,e],v=0,N()}function L(e){C=`done`;let r=0;e.forEach((e,t)=>{let n=_[t];if(e.won){let t=e.bonus?Math.floor(n*1.5):n;a.addBits(n+t),r+=t,m(`🃏`,!0,t)}else e.push?(a.addBits(n),m(`🃏`,!0,0)):(r-=n,m(`🃏`,!1,n))}),c=!1,N();let i=t.querySelector(`#bj-msg`);if(i){let t=e.map(e=>`<div class="bj-result ${e.won?`bj-result--win`:e.push?`bj-result--push`:`bj-result--lose`}">${e.msg}</div>`),a=r>=0?`+`:``;t.push(`<div class="bj-net-total">Net : ${a}${n(r)} bits</div>`),i.innerHTML=t.join(``)}}let R=null;function z(){t.innerHTML=`
      <div class="casino-game-suits">
        <p class="suits-hint">Choisissez une couleur, puis misez. Bonne réponse → ×3</p>
        <div class="suits-choices">
          ${x.map(e=>`<button class="suit-btn${e===`♥`||e===`♦`?` suit-btn--red`:``}${R===e?` suit-btn--active`:``}" data-suit="${e}">${e}</button>`).join(``)}
        </div>
        ${f(`suits-bet`,100)}
        <button class="casino-btn${R?``:` casino-btn--disabled`}" id="suits-play">Miser</button>
        <div id="suits-result" class="suits-result" style="display:none"></div>
      </div>
    `,p(`suits-bet`),t.querySelectorAll(`.suit-btn`).forEach(e=>{e.addEventListener(`click`,()=>{R=e.dataset.suit,t.querySelectorAll(`.suit-btn`).forEach(t=>t.classList.toggle(`suit-btn--active`,t===e));let n=t.querySelector(`#suits-play`);n&&n.classList.remove(`casino-btn--disabled`)})}),t.querySelector(`#suits-play`)?.addEventListener(`click`,()=>{if(!R||c)return;let e=d(`suits-bet`);if(a.getState().bits<e){u(`Bits insuffisants !`);return}c=!0,a.spendBits(e);let r=x[Math.floor(Math.random()*4)],i={suit:r,rank:S[Math.floor(Math.random()*13)]},o=r===R,s=o?e*2:-e,l=s>=0?`+`:``,f=t.querySelector(`#suits-result`);f.style.display=`flex`,f.innerHTML=`
        <div class="suits-drawn">${T(i)}</div>
        <div class="suits-verdict ${o?`suits-win`:`suits-lose`}">
          ${o?`✅ ${r} — Gagné !<br><span class="mono">${l}${n(s)} bits nets</span>`:`❌ ${r} — Raté !<br><span class="mono">${l}${n(s)} bits</span>`}
        </div>
      `,o?(a.addBits(e*3),m(`♥`,!0,e*2)):m(`♥`,!1,e),setTimeout(()=>{c=!1,R=null,z()},2500)})}let B=0,V=0;function H(){t.innerHTML=`
      <div class="casino-game-wheel">
        <div class="wheel-canvas-wrap">
          <canvas id="wheel-canvas" width="200" height="200" class="wheel-canvas"></canvas>
          <div class="wheel-needle">▼</div>
        </div>
        ${f(`wheel-bet`,100)}
        <button class="casino-btn" id="wheel-spin">🎡 Faire tourner !</button>
        <div id="wheel-result" style="display:none" class="wheel-result-msg"></div>
      </div>
    `,p(`wheel-bet`),D(t.querySelector(`#wheel-canvas`).getContext(`2d`),100,100,90,V),t.querySelector(`#wheel-spin`)?.addEventListener(`click`,U)}function U(){if(c)return;let e=d(`wheel-bet`);if(a.getState().bits<e){u(`Bits insuffisants !`);return}c=!0,a.spendBits(e);let r=t.querySelector(`#wheel-canvas`);if(!r)return;let i=r.getContext(`2d`),o=Math.floor(Math.random()*E.length),s=O(V,o),l=3500,f=performance.now(),p=V,h=t.querySelector(`#wheel-spin`);h.disabled=!0,cancelAnimationFrame(B);function g(r){let u=Math.min(r-f,l);if(D(i,100,100,90,p+(1-(1-u/l)**4)*(s-p)),u<l)B=requestAnimationFrame(g);else{V=s,D(i,100,100,90,V);let r=E[o],l=t.querySelector(`#wheel-result`);if(l.style.display=`block`,r.mult>0){let t=Math.floor(e*r.mult),i=t-e,o=i>=0?`+`:``;a.addBits(t),l.textContent=`${r.label} — ${o}${n(i)} bits nets`,l.className=i>=0?`wheel-result-msg wheel-result--win`:`wheel-result-msg wheel-result--lose`,m(`🎡`,i>=0,Math.abs(i))}else l.textContent=`PERTE — −${n(e)} bits`,l.className=`wheel-result-msg wheel-result--lose`,m(`🎡`,!1,e);setTimeout(()=>{c=!1,H()},2500)}}B=requestAnimationFrame(g)}function W(e){c&&e!==s||(cancelAnimationFrame(B),s=e,o.forEach(t=>t.classList.toggle(`casino-tab--active`,t.dataset.game===e)),e===`blackjack`?(t.innerHTML=`
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
      `,C=`bet`,g=[[]],_=[b],v=0,y=[],h=[],N()):e===`suits`?(R=null,z()):e===`wheel`&&H())}function G(){r.textContent=n(a.getState().bits)}function K(){i.innerHTML=l.slice(0,5).map(e=>{let t=e.won?`✅`:`❌`;return`<div class="casino-history-item ${e.won?`win`:`lose`}">${t} ${e.game} ${e.won?`+`:`−`}${n(e.amount)}</div>`}).join(``)}o.forEach(e=>{e.addEventListener(`click`,()=>{(!c||e.dataset.game===s)&&W(e.dataset.game)})});let oe=a.subscribe(G);return W(`blackjack`),G(),()=>{cancelAnimationFrame(B),oe()}}var A=15,j=1400,M=500,N=.85;function ne(e){return e<=28?3:e<=42?2:1}var re=.12;function P(e){let t=!1,r=0,i=0,o=A,s=0,c=0,l=new Set;e.innerHTML=`
    <div class="aimtrainer-panel">
      <h2 class="panel-title">🎯 Aim Trainer</h2>
      <div class="aim-hud">
        <span class="aim-hud__item">⏱ <span id="aim-timer">${A}</span>s</span>
        <span class="aim-hud__item">🎯 <span id="aim-hits">0</span> hits</span>
        <span class="aim-hud__item">⭐ <span id="aim-score">0</span> pts</span>
        <span class="aim-hud__item aim-bet-live" id="aim-bet-live" style="display:none">
          Mise : <span id="aim-bet-label" class="mono">-</span>
        </span>
      </div>
      <div class="aim-field" id="aim-field">
        <div class="aim-hint" id="aim-hint">Petites cibles = plus de points !</div>
      </div>
      <div class="aim-controls">
        <div class="bet-wrap">
          <div class="bet-quicks">
            <button class="bet-quick" data-pct="10">10%</button>
            <button class="bet-quick" data-pct="25">25%</button>
            <button class="bet-quick" data-pct="50">50%</button>
            <button class="bet-quick" data-pct="100">MAX</button>
          </div>
          <input type="number" id="aim-bet" class="bet-input" value="100" min="1">
        </div>
        <button class="casino-btn" id="aim-start">🎯 Lancer la session</button>
      </div>
      <div id="aim-result" class="aim-result" style="display:none"></div>
    </div>
  `;let u=e.querySelector(`#aim-field`),d=e.querySelector(`#aim-timer`),f=e.querySelector(`#aim-hits`),p=e.querySelector(`#aim-score`),m=e.querySelector(`#aim-start`),h=e.querySelector(`#aim-bet`),g=e.querySelector(`#aim-result`),_=e.querySelector(`#aim-bet-live`),v=e.querySelector(`#aim-bet-label`),y=e.querySelector(`#aim-hint`);e.querySelectorAll(`.bet-quick`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.dataset.pct||`100`),n=Math.floor(a.getState().bits);h.value=String(Math.max(1,Math.floor(n*t/100)))})});function b(){return Math.max(1,parseInt(h.value)||1)}function x(){if(!t)return;let e=document.createElement(`div`);e.className=`aim-target`;let n=18+Math.floor(Math.random()*39),a=ne(n);e.style.width=n+`px`,e.style.height=n+`px`,e.dataset.pts=String(a);let o=u.clientWidth-n-8,s=u.clientHeight-n-8;e.style.left=Math.max(4,Math.random()*o)+`px`,e.style.top=Math.max(4,Math.random()*s)+`px`,a===3?e.classList.add(`aim-target--small`):a===2&&e.classList.add(`aim-target--medium`),u.appendChild(e),l.add(e);let c=()=>{e.isConnected&&(e.remove(),l.delete(e))};e.addEventListener(`click`,n=>{if(n.stopPropagation(),!t)return;let a=Number(e.dataset.pts??1);r+=a,i++,f.textContent=String(i),p.textContent=String(r),e.classList.add(`aim-target--hit`),setTimeout(c,130);let o=document.createElement(`div`);o.className=`aim-floater`,o.textContent=`+${a}`,o.style.left=e.style.left,o.style.top=e.style.top,u.appendChild(o),setTimeout(()=>o.remove(),700)},{once:!0}),setTimeout(c,j)}function S(e){t=!1,clearInterval(s),clearInterval(c),l.forEach(e=>e.remove()),l.clear(),_.style.display=`none`,y.style.display=`block`;let o=Math.floor(r*e*re);if(o>0&&a.setState(e=>{e.bits+=o,e.totalBitsEarned+=o}),g.style.display=`block`,i===0)g.className=`aim-result aim-result--lose`,g.textContent=`🎯 0 cible — Perdu ${n(e)} bits`;else{let t=o-e,a=t>=0?`+`:``;g.className=`aim-result ${t>=0?`aim-result--win`:`aim-result--lose`}`,g.textContent=`🎯 ${i} hits · ${r} pts → ${a}${n(t)} bits nets`}m.disabled=!1,m.textContent=`🎯 Rejouer`,d.textContent=String(A),f.textContent=`0`,p.textContent=`0`}return m.addEventListener(`click`,()=>{if(t)return;let e=b();if(a.getState().bits<e){g.style.display=`block`,g.className=`aim-result aim-result--lose`,g.textContent=`Bits insuffisants !`;return}a.setState(t=>{t.bits-=e}),t=!0,r=0,i=0,o=A,f.textContent=`0`,p.textContent=`0`,d.textContent=String(A),g.style.display=`none`,m.disabled=!0,v.textContent=n(e)+` bits`,_.style.display=``,y.style.display=`none`,s=window.setInterval(()=>{Math.random()<N&&x()},M),c=window.setInterval(()=>{o--,d.textContent=String(o),o<=0&&S(e)},1e3)}),()=>{clearInterval(s),clearInterval(c),l.forEach(e=>e.remove())}}var F=[[{id:`m_click_50`,label:`⚡ Cliqueur`,description:`Cliquer 50 fois`,target:50,reward:500,type:`clicks`},{id:`m_earn_1k`,label:`💰 Accumulateur`,description:`Gagner 1 000 bits`,target:1e3,reward:800,type:`bits_earned`},{id:`m_gen_3`,label:`🤖 Constructeur`,description:`Posséder 3 générateurs`,target:3,reward:600,type:`generators`}],[{id:`m_click_500`,label:`⚡ Cliqueur Pro`,description:`Cliquer 500 fois`,target:500,reward:5e3,type:`clicks`},{id:`m_earn_50k`,label:`💰 Investisseur`,description:`Gagner 50 000 bits`,target:5e4,reward:8e3,type:`bits_earned`},{id:`m_gen_20`,label:`🏭 Industriel`,description:`Posséder 20 générateurs`,target:20,reward:7500,type:`generators`}],[{id:`m_click_2k`,label:`⚡ Légende`,description:`Cliquer 2 000 fois`,target:2e3,reward:25e3,type:`clicks`},{id:`m_earn_1m`,label:`💰 Millionnaire`,description:`Gagner 1 000 000 bits`,target:1e6,reward:5e4,type:`bits_earned`},{id:`m_gen_50`,label:`🌐 Empire`,description:`Posséder 50 générateurs`,target:50,reward:4e4,type:`generators`}]];function I(){let e=new Date,t=String(e.getMonth()+1).padStart(2,`0`);return`${e.getFullYear()}-${t}-${e.getDate()}`}function ie(e,t){let n=t*2654435761;for(let t=0;t<e.length;t++)n=Math.imul(n^e.charCodeAt(t),2246822519);return n^=n>>>16,(n>>>0)/4294967296}function ae(){let e=I();return F.map((t,n)=>({...t[Math.floor(ie(e,n)*t.length)]}))}var L=`bs_missions_v1`;function R(e,t){try{let n=localStorage.getItem(L);if(n){let r=JSON.parse(n);if(r.lastSeed===I())return r.clicksAtStart=e,r.bitsAtStart=t,r}}catch{}return{clicksAtStart:e,bitsAtStart:t,clicksDone:0,bitsEarnedDone:0,claimed:[],lastSeed:I()}}function z(e){localStorage.setItem(L,JSON.stringify(e))}function B(e){let t=ae(),r=a.getState(),i=R(r.totalClicks,r.totalBitsEarned);function o(e){let t=a.getState();switch(e.type){case`clicks`:return i.clicksDone+(t.totalClicks-i.clicksAtStart);case`bits_earned`:return i.bitsEarnedDone+(t.totalBitsEarned-i.bitsAtStart);case`generators`:return t.generators.reduce((e,t)=>e+t.owned,0)}}function s(e){if(i.claimed.includes(e))return;let n=t.find(t=>t.id===e);if(!n||o(n)<n.target)return;let r=a.getState();i.clicksDone+=r.totalClicks-i.clicksAtStart,i.bitsEarnedDone+=r.totalBitsEarned-i.bitsAtStart,i.clicksAtStart=r.totalClicks,i.bitsAtStart=r.totalBitsEarned,i.claimed.push(e),a.addBits(n.reward),z(i),c()}function c(){let r=e.querySelector(`.missions-list`);r&&(r.innerHTML=t.map(e=>{let t=Math.min(o(e),e.target),r=t/e.target*100,a=t>=e.target,s=i.claimed.includes(e.id);return`
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
      `}).join(``),r.querySelectorAll(`.mission-claim-btn`).forEach(e=>{e.addEventListener(`click`,()=>s(e.dataset.id))}))}function l(){let e=new Date,t=new Date(e);t.setHours(24,0,0,0);let n=t.getTime()-e.getTime(),r=Math.floor(n/36e5),i=Math.floor(n%36e5/6e4);return`Reset dans ${String(r).padStart(2,`0`)}h${String(i).padStart(2,`0`)}`}e.innerHTML=`
    <div class="missions-panel">
      <div class="missions-header">
        <h2 class="panel-title" style="margin:0">Missions du jour</h2>
        <span class="missions-reset" id="missions-reset">${l()}</span>
      </div>
      <div class="missions-list"></div>
    </div>
  `;let u=window.setInterval(()=>{let t=e.querySelector(`#missions-reset`);t&&(t.textContent=l())},6e4);c();let d=0,f=a.subscribe(()=>{clearTimeout(d),d=window.setTimeout(()=>{z(i),c()},500)});return()=>{f(),clearTimeout(d),clearInterval(u)}}var V=``,H=``;function U(){return!1}var W={apikey:H,Authorization:`Bearer ${H}`,"Content-Type":`application/json`};async function G(){let e=await fetch(`${V}/rest/v1/leaderboard?select=name,score&order=score.desc&limit=20`,{headers:W});if(!e.ok)throw Error(`LB fetch: ${e.status}`);return e.json()}async function K(e,t){let n=new Date().toISOString();await fetch(`${V}/rest/v1/leaderboard`,{method:`POST`,headers:{...W,Prefer:`resolution=merge-duplicates`},body:JSON.stringify({name:e,score:t,updated_at:n})})}var oe=`bs_player_name`,se=`bs_player_best`,ce=120*1e3,le=300*1e3,ue=[`xX_BitL0rd_Xx`,`Neuron_42`,`QuantumLeak`,`CryptoVoid`,`NullByte`,`SilentMiner`,`ByteHunter`,`DataPhantom`,`GridRunner`,`CodeShadow`];function de(e,t){let n=t*1234567891;for(let t=0;t<e.length;t++)n=Math.imul(n^e.charCodeAt(t),2246822519)>>>0;return n}function fe(e){return ue.map(t=>{let n=.3+de(t,t.length)%100/100*1.4;return{name:t,score:Math.floor(Math.max(e*n,100))}})}function q(){return localStorage.getItem(`bs_player_name`)??``}function pe(e){localStorage.setItem(oe,e)}function me(){try{return JSON.parse(localStorage.getItem(se)??`0`)}catch{return 0}}function he(e){e>me()&&localStorage.setItem(se,JSON.stringify(e))}function ge(e){let t=U(),r=[],i=me(),o=0,s=0,c=0;e.innerHTML=`
    <div class="lb-panel">
      <h2 class="panel-title">🏆 Classement</h2>
      <div class="lb-status" id="lb-status">${t?`🌐 En ligne`:`🤖 Local (bots)`}</div>
      <div class="lb-rank-row">Votre rang : <span class="mono" id="lb-your-rank">#?</span></div>
      <div class="lb-list" id="lb-list">
        <div class="lb-loading">Chargement…</div>
      </div>
    </div>
  `;let l=e.querySelector(`#lb-list`),u=e.querySelector(`#lb-your-rank`);function d(){let e=q(),o=a.getState().totalBitsEarned;i=Math.max(i,o),he(i);let s;if(t){let t=r.filter(t=>t.name!==e),n={name:e,score:i};s=[...t,n].sort((e,t)=>t.score-e.score).slice(0,20)}else{let t={name:e||`Vous`,score:i};s=[...fe(i),t].sort((e,t)=>t.score-e.score)}u.textContent=`#${s.findIndex(t=>t.name===(e||`Vous`))+1}`,l.innerHTML=s.map((t,r)=>{let i=t.name===(e||`Vous`);return`
        <div class="lb-row ${i?`lb-row--you`:``}">
          <span class="lb-rank mono">#${r+1}</span>
          <span class="lb-name">${t.name}${i?` <span class="lb-you">(Vous)</span>`:``}</span>
          <span class="lb-score mono">${n(t.score)}</span>
        </div>
      `}).join(``)}async function f(){if(!t){d();return}try{r=await G()}catch{}d()}async function p(){if(!t)return;let e=Date.now();if(e-o<le)return;let n=q();if(!n)return;let r=a.getState().totalBitsEarned;if(i=Math.max(i,r),!(i<=0)){o=e;try{await K(n,i)}catch{}}}f(),s=window.setInterval(()=>{f()},ce),c=window.setInterval(()=>{p()},le);let m=a.subscribe(d);return()=>{clearInterval(s),clearInterval(c),m()}}var _e=[{title:`🎯 Cible !`,instructions:`Clique 5 fois sur la cible !`,mount(e,t){let n=0;function r(){let i=document.createElement(`button`);i.className=`mg-target`;let a=Math.max(e.clientWidth-52,10),o=Math.max(e.clientHeight-52,10);i.style.left=Math.random()*a+`px`,i.style.top=Math.random()*o+`px`,e.appendChild(i),i.addEventListener(`click`,()=>{i.remove(),++n>=5?t():r()},{once:!0})}return r(),()=>e.querySelectorAll(`.mg-target`).forEach(e=>e.remove())}},{title:`⌨️ Séquence`,instructions:`Tape la séquence affichée.`,mount(e,t,n){let r=[`A`,`S`,`D`,`F`,`J`,`K`,`L`],i=Array.from({length:5},()=>r[Math.floor(Math.random()*r.length)]),a=0,o=document.createElement(`div`);o.className=`mg-sequence`,o.innerHTML=i.map((e,t)=>`<span class="mg-key" id="k${t}">${e}</span>`).join(``),e.appendChild(o);function s(e){e.key.toUpperCase()===i[a]?(o.querySelector(`#k${a}`)?.classList.add(`mg-key--hit`),++a>=i.length&&t()):n()}return window.addEventListener(`keydown`,s),()=>window.removeEventListener(`keydown`,s)}},{title:`🧮 Calcul rapide`,instructions:`Appuie sur la bonne réponse.`,mount(e,t,n){let r=Math.floor(Math.random()*20)+1,i=Math.floor(Math.random()*20)+1,a=r+i,o=new Set;for(;o.size<3;){let e=a+Math.floor(Math.random()*20)-10;e!==a&&e>0&&o.add(e)}let s=[...o,a].sort(()=>Math.random()-.5),c=document.createElement(`div`);return c.className=`mg-math`,c.innerHTML=`
      <div class="mg-math__question">${r} + ${i} = ?</div>
      <div class="mg-math__choices">
        ${s.map(e=>`<button class="mg-choice" data-val="${e}">${e}</button>`).join(``)}
      </div>
    `,e.appendChild(c),c.addEventListener(`click`,e=>{let r=e.target.closest(`[data-val]`);r&&(Number(r.dataset.val)===a?t():n())}),()=>{}}}];function ve(){let t=0,i=null,o=null;function s(){let[n,r]=e.minigames.intervalRange;t=window.setTimeout(c,n+Math.random()*(r-n))}function c(){if(i)return;let e=_e[Math.floor(Math.random()*_e.length)];l(e)}function l(t){let c=document.createElement(`div`);c.className=`mg-card`;let l=e.minigames.durationMs/1e3,d=!1;c.innerHTML=`
      <div class="mg-card__header">
        <span class="mg-card__title">${t.title}</span>
        <div class="mg-card__controls">
          <span class="mg-card__timer mono" id="mg-timer">${l}</span>
          <button class="mg-card__close" id="mg-close" title="Abandonner">✕</button>
        </div>
      </div>
      <p class="mg-card__instructions">${t.instructions}</p>
      <div class="mg-card__arena" id="mg-arena"></div>
      <div class="mg-card__result" id="mg-result" style="display:none"></div>
    `,document.body.appendChild(c),i=c;let f=c.querySelector(`#mg-arena`),p=c.querySelector(`#mg-timer`),m=c.querySelector(`#mg-result`),h=c.querySelector(`#mg-close`),g=l,_=null,v=setInterval(()=>{g--,p.textContent=String(g),g<=0&&(clearInterval(v),b())},1e3);h.addEventListener(`click`,()=>{clearInterval(v),_!==null&&clearTimeout(_),o?.(),S(!1)});function y(){clearInterval(v),o?.(),u(),x(!0)}function b(){clearInterval(v),o?.(),x(!1)}function x(t){f.style.display=`none`,m.style.display=`flex`;let i=a.getEffectiveBPS()*e.minigames.burstDurationSec*e.minigames.burstBpsMultiplier;m.innerHTML=t?`<div class="mg-result mg-result--win">
             <span>🎉 +${n(i)} bits !</span>
             <small>×${e.minigames.burstBpsMultiplier} BPS · ${r(e.minigames.burstDurationSec)}</small>
           </div>`:`<div class="mg-result mg-result--lose"><span>💀 FAUX !</span></div>`,_=window.setTimeout(()=>S(!0),2200)}function S(e){if(d)return;d=!0,c.classList.add(`mg-card--out`);let t=!1,n=()=>{t||(t=!0,c.remove(),i=null,o=null,e&&s())};c.addEventListener(`animationend`,n,{once:!0}),window.setTimeout(n,400)}o=t.mount(f,y,b)}function u(){let t=a.getEffectiveBPS()*e.minigames.burstDurationSec*e.minigames.burstBpsMultiplier;a.setState(n=>{n.bits+=t,n.totalBitsEarned+=t,n.multipliers.minigame=e.minigames.burstBpsMultiplier,n.multipliers.minigameEndsAt=Date.now()+e.minigames.burstDurationSec*1e3})}return s(),()=>{clearTimeout(t),o?.(),i?.remove()}}var ye=[];function be(){let e=a.getCurrentPhase(),t=a.subscribe(()=>{let t=a.getCurrentPhase();t>e&&(e=t,a.setState(e=>{e.lastPhase=t}),xe(t),ye.forEach(e=>e(t)))});return()=>t()}function xe(t){let n=e.phases.find(e=>e.id===t);if(!n)return;let r=n.unlocks.length>0?`<div class="phase-notif__unlocks">New: ${n.unlocks.map(e=>`<strong>${e}</strong>`).join(`, `)}</div>`:``,i=document.createElement(`div`);i.className=`phase-notif`,i.innerHTML=`
    <div class="phase-notif__badge">Phase ${t}</div>
    <div class="phase-notif__title">${n.title}</div>
    <div class="phase-notif__narrative">${n.narrative}</div>
    ${r}
  `,document.body.appendChild(i);let a=()=>{i.classList.add(`phase-notif--out`),i.addEventListener(`animationend`,()=>i.remove(),{once:!0})};i.addEventListener(`click`,a),setTimeout(a,6e3)}var Se=0;function Ce(t){if(!t.clientId||!t.channelName)return()=>{};a.setState(e=>{e.twitch.channelName=t.channelName});async function n(){try{let e=`https://api.twitch.tv/helix/streams?user_login=${encodeURIComponent(t.channelName)}`,n=await fetch(e,{headers:{"Client-ID":t.clientId,Authorization:`Bearer ${window.__TWITCH_TOKEN__??``}`}});if(!n.ok){console.warn(`[Twitch] API responded with`,n.status);return}let r=(await n.json()).data[0],i=!!r;a.setTwitchLive(i,{title:r?.title??``,game:r?.game_name??``})}catch(e){console.warn(`[Twitch] Poll failed:`,e)}}return n(),Se=window.setInterval(n,e.twitch.pollIntervalMs),()=>clearInterval(Se)}function we(e){function t(){let{twitch:t,multipliers:n}=a.getState();if(!t.channelName){e.style.display=`none`;return}e.style.display=`flex`,t.isLive?e.innerHTML=`
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
      `}let n=a.subscribe(t);return t(),()=>n()}var Te={en:{"stat.total_earned":`Total earned`,"stat.bps":`BPS`,"stat.bpc":`BPC`,"stat.global_multi":`Global ×`,"stat.burst":`⚡ BURST`,"stat.phase":`Phase`,"phase.1":`I — Garage Hacker`,"phase.2":`II — Script Kiddie`,"phase.3":`III — Digital Nomad`,"phase.4":`IV — AI Engineer`,"phase.5":`V — Quantum Singularity`,"clicker.click":`Click`,"clicker.combo":`Combo ×`,"production.bps_label":`BPS`,"production.owned":`Owned`,"production.buy":`Buy`,"production.buy_bulk":`Buy ×10`,"gen.bit_miner":`Bit Miner`,"gen.bit_miner_desc":`A basic script that mines bits slowly.`,"gen.script_farm":`Script Farm`,"gen.script_farm_desc":`Runs scripts in parallel, faster than manual mining.`,"gen.bot_network":`Bot Network`,"gen.bot_network_desc":`Distributed bots harvest bits from multiple sources.`,"gen.data_center":`Data Center`,"gen.data_center_desc":`Industrial-scale bit production.`,"gen.ai_cluster":`AI Cluster`,"gen.ai_cluster_desc":`Cutting-edge AI optimizes bit extraction.`,"gen.quantum_farm":`Quantum Farm`,"gen.quantum_farm_desc":`Harnesses quantum tunneling for bits.`,"project.market_access":`Market Access`,"project.market_access_desc":`Unlocks the Trade module.`,"project.casino_charter":`Casino Charter`,"project.casino_charter_desc":`Unlocks the Casino module.`,"project.aim_protocol":`Precision Protocol`,"project.aim_protocol_desc":`Unlocks the Aim Trainer module.`,"project.launch_protocol":`Launch Protocol`,"project.launch_protocol_desc":`Initiates the final sequence.`,"casino.title":`🎰 Casino`,"casino.safe_bet":`Safe Bet`,"casino.safe_bet_desc":`100 Bits → ×1.25 multiplier`,"casino.risky_bet":`Risky Bet`,"casino.risky_bet_desc":`500 Bits → ×2.0 multiplier`,"casino.extreme_bet":`Extreme Bet`,"casino.extreme_bet_desc":`2000 Bits → ×5.0 multiplier`,"casino.insufficient_bits":`Insufficient Bits`,"casino.bet":`Bet`,"casino.win":`🎉 You win!`,"casino.lose":`💀 You lose!`,"trade.title":`📈 Trade`,"trade.sell":`Sell`,"trade.current_price":`Current Price`,"trade.insufficient_units":`No units to sell`,"puzzle.title":`🧩 Puzzle`,"puzzle.score":`Score`,"puzzle.claim":`Claim`,"puzzle.claiming":`Claiming...`,"minigame.click_target":`🎯 Click the Target`,"minigame.click_target_instructions":`Click the glowing target 5 times.`,"minigame.key_sequence":`⌨️ Key Sequence`,"minigame.key_sequence_instructions":`Type the sequence shown.`,"minigame.quick_math":`🧮 Quick Math`,"minigame.quick_math_instructions":`Tap the correct answer.`,"minigame.win_reward":`🎉 +{reward} bits!`,"minigame.win_info":`×{multiplier} BPS · {duration}`,"minigame.lose":`💀 Too slow!`,"button.buy":`Buy`,"button.close":`Close`,"button.skip":`Skip`,"button.sell":`Sell`,"button.play":`Play`,"button.claim":`Claim`,"twitch.live":`🔴 LIVE +50%`,"twitch.offline":`Twitch`,"header.title":`BitStream`,"leaderboard.title":`🏆 Leaderboard`,"leaderboard.rank":`Rank`,"leaderboard.player":`Player`,"leaderboard.bits":`Bits`,"leaderboard.you":`(You)`,"leaderboard.enter_name":`Enter your name`},fr:{"stat.total_earned":`Total gagné`,"stat.bps":`BPS`,"stat.bpc":`BPC`,"stat.global_multi":`Multiplicateur`,"stat.burst":`⚡ BURST`,"stat.phase":`Phase`,"phase.1":`I — Pirate Garage`,"phase.2":`II — Script Kiddie`,"phase.3":`III — Nomade Digital`,"phase.4":`IV — Ingénieur IA`,"phase.5":`V — Singularité Quantique`,"clicker.click":`Cliquer`,"clicker.combo":`Combo ×`,"production.bps_label":`BPS`,"production.owned":`Possédé`,"production.buy":`Acheter`,"production.buy_bulk":`Acheter ×10`,"gen.bit_miner":`Mineur de Bits`,"gen.bit_miner_desc":`Un script basique qui extrait les bits lentement.`,"gen.script_farm":`Ferme de Scripts`,"gen.script_farm_desc":`Exécute des scripts en parallèle, plus rapide que l'extraction manuelle.`,"gen.bot_network":`Réseau de Bots`,"gen.bot_network_desc":`Des bots distribués récoltent les bits de plusieurs sources.`,"gen.data_center":`Centre de Données`,"gen.data_center_desc":`Production de bits à l'échelle industrielle.`,"gen.ai_cluster":`Cluster IA`,"gen.ai_cluster_desc":`L'IA de pointe optimise l'extraction de bits.`,"gen.quantum_farm":`Ferme Quantique`,"gen.quantum_farm_desc":`Exploite l'effet tunnel quantique pour les bits.`,"project.market_access":`Accès au Marché`,"project.market_access_desc":`Déverrouille le module Commerce.`,"project.casino_charter":`Charte du Casino`,"project.casino_charter_desc":`Déverrouille le module Casino.`,"project.aim_protocol":`Protocole de Précision`,"project.aim_protocol_desc":`Déverrouille l'Aim Trainer.`,"project.launch_protocol":`Protocole de Lancement`,"project.launch_protocol_desc":`Initie la séquence finale.`,"casino.title":`🎰 Casino`,"casino.safe_bet":`Pari Sûr`,"casino.safe_bet_desc":`100 Bits → ×1.25 multiplicateur`,"casino.risky_bet":`Pari Risqué`,"casino.risky_bet_desc":`500 Bits → ×2.0 multiplicateur`,"casino.extreme_bet":`Pari Extrême`,"casino.extreme_bet_desc":`2000 Bits → ×5.0 multiplicateur`,"casino.insufficient_bits":`Bits insuffisants`,"casino.bet":`Parier`,"casino.win":`🎉 Vous gagnez!`,"casino.lose":`💀 Vous perdez!`,"trade.title":`📈 Commerce`,"trade.sell":`Vendre`,"trade.current_price":`Prix Actuel`,"trade.insufficient_units":`Aucune unité à vendre`,"puzzle.title":`🧩 Puzzle`,"puzzle.score":`Score`,"puzzle.claim":`Réclamer`,"puzzle.claiming":`Réclamation...`,"minigame.click_target":`🎯 Cliquez la Cible`,"minigame.click_target_instructions":`Cliquez la cible brillante 5 fois.`,"minigame.key_sequence":`⌨️ Séquence de Touches`,"minigame.key_sequence_instructions":`Tapez la séquence affichée.`,"minigame.quick_math":`🧮 Mathématiques Rapides`,"minigame.quick_math_instructions":`Appuyez sur la bonne réponse.`,"minigame.win_reward":`🎉 +{reward} bits!`,"minigame.win_info":`×{multiplier} BPS · {duration}`,"minigame.lose":`💀 Trop lent!`,"button.buy":`Acheter`,"button.close":`Fermer`,"button.skip":`Passer`,"button.sell":`Vendre`,"button.play":`Jouer`,"button.claim":`Réclamer`,"twitch.live":`🔴 EN DIRECT +50%`,"twitch.offline":`Twitch`,"header.title":`BitStream`,"leaderboard.title":`🏆 Classement`,"leaderboard.rank":`Rang`,"leaderboard.player":`Joueur`,"leaderboard.bits":`Bits`,"leaderboard.you":`(Vous)`,"leaderboard.enter_name":`Entrez votre nom`}},J=`fr`;function Ee(e){J=e.getLanguage(),e.subscribe(()=>{J=e.getLanguage()})}function Y(e,t){let n=Te[J][e]||e;return t&&Object.entries(t).forEach(([e,t])=>{n=n.replace(RegExp(`\\{${e}\\}`,`g`),String(t))}),n}function De(){if(q())return;let e=document.createElement(`div`);e.className=`username-modal-overlay`,e.innerHTML=`
    <div class="username-modal">
      <div class="username-modal__icon">🎮</div>
      <h2 class="username-modal__title">Bienvenue sur BitStream !</h2>
      <p class="username-modal__sub">Choisissez votre pseudo pour le classement.</p>
      <input
        class="username-modal__input"
        id="username-input"
        type="text"
        maxlength="20"
        placeholder="Votre pseudo..."
        autocomplete="off"
        spellcheck="false"
      >
      <div class="username-modal__error" id="username-error"></div>
      <button class="username-modal__btn" id="username-confirm">Jouer →</button>
    </div>
  `,document.body.appendChild(e);let t=e.querySelector(`#username-input`),n=e.querySelector(`#username-confirm`),r=e.querySelector(`#username-error`);requestAnimationFrame(()=>t.focus());function i(){let n=t.value.trim();if(n.length<2){r.textContent=`Pseudo trop court (2 caractères minimum).`,t.classList.add(`username-modal__input--error`);return}pe(n),e.classList.add(`username-modal-overlay--out`),e.addEventListener(`animationend`,()=>e.remove(),{once:!0}),setTimeout(()=>e.remove(),400),U()&&K(n,0).catch(()=>{})}n.addEventListener(`click`,i),t.addEventListener(`keydown`,e=>{e.key===`Enter`&&i(),r.textContent=``,t.classList.remove(`username-modal__input--error`)})}function Oe(t,r={}){Ee(a),De(),t.innerHTML=`
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
        <section id="aimtrainer-slot" style="display:none"></section>
      </section>

      <!-- Colonne droite : Projets + Missions + Leaderboard -->
      <aside class="layout__right">
        <section id="projects-slot"></section>
        <section id="missions-slot"></section>
        <section id="leaderboard-slot"></section>
      </aside>
    </main>
  `,p(t.querySelector(`#hdr`)),m(t.querySelector(`#clicker-slot`)),_(t.querySelector(`#prod-slot`)),b(t.querySelector(`#projects-slot`)),B(t.querySelector(`#missions-slot`)),ge(t.querySelector(`#leaderboard-slot`)),ve(),be(),r.twitchClientId&&r.twitchChannel&&Ce({clientId:r.twitchClientId,channelName:r.twitchChannel});let i=document.querySelector(`#twitch-badge-slot`);i&&we(i);let o=t.querySelector(`#casino-slot`),s=t.querySelector(`#aimtrainer-slot`),c=!1,l=!1;function u(){let e=a.getState();!c&&e.projects.find(e=>e.id===`casino_charter`)?.purchased&&(o.style.display=``,k(o),c=!0),!l&&e.projects.find(e=>e.id===`aim_protocol`)?.purchased&&(s.style.display=``,P(s),l=!0)}a.subscribe(u),u();let d=t.querySelector(`#stat-total`),f=t.querySelector(`#stat-bps`),h=t.querySelector(`#stat-bpc`),g=t.querySelector(`#stat-multi`),v=t.querySelector(`#burst-row`),y=t.querySelector(`#stat-burst`),x=t.querySelector(`#stat-phase`),S=t.querySelector(`#label-total`),ee=t.querySelector(`#label-bps`),te=t.querySelector(`#label-bpc`),C=t.querySelector(`#label-multi`),w=t.querySelector(`#label-burst`),T=t.querySelector(`#label-phase`),E=[``,`I`,`II`,`III`,`IV`,`V`];function D(){S.textContent=Y(`stat.total_earned`),ee.textContent=Y(`stat.bps`),te.textContent=Y(`stat.bpc`),C.textContent=Y(`stat.global_multi`),w.textContent=Y(`stat.burst`),T.textContent=Y(`stat.phase`)}function O(){let t=a.getState(),r=t.multipliers,i=a.getCurrentPhase(),o=e.phases.find(e=>e.id===i);d.textContent=n(t.totalBitsEarned),f.textContent=n(a.getEffectiveBPS())+` b/s`,h.textContent=n(a.getEffectiveBPC())+` /click`,x.textContent=`${E[i]} — ${o.title}`,g.textContent=n(a.getPassiveMultiplier())+`×`;let s=a.isMinigameActive();if(v.style.display=s?`flex`:`none`,s){let e=Math.max(0,Math.ceil((r.minigameEndsAt-Date.now())/1e3));y.textContent=`×${r.minigame} · ${e}s`}}D(),a.subscribe(D),a.subscribe(O),O(),window.store=a}var X=0,Z=0,ke=500,Q=0;function Ae(e){X===0&&(X=e);let t=Math.min((e-X)/1e3,1);X=e;let n=a.getEffectiveBPS();n>0&&a.addBits(n*t),Z+=a.getResearchPS()*t,e-Q>ke&&(Z>0&&(a.addResearchPoints(Z),Z=0,a.notify()),Q=e),requestAnimationFrame(Ae)}function je(){X=0,Q=performance.now(),requestAnimationFrame(Ae)}function Me(e){let t=document.createElement(`div`);t.className=`mg-overlay`,t.innerHTML=`
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
  `,document.body.appendChild(t),t.querySelector(`#offline-close`).addEventListener(`click`,()=>{t.classList.add(`mg-overlay--out`),t.addEventListener(`animationend`,()=>t.remove(),{once:!0})})}window.__TWITCH_TOKEN__=``;var Ne=document.getElementById(`app`);u();var $=c();Oe(Ne,{twitchClientId:`73u1zjxog6q27ehere4n1exf2ke5pv`,twitchChannel:`cireericfr`}),je(),f(),$&&$.bitsEarned>1&&requestAnimationFrame(()=>Me($));