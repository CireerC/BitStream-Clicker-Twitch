(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={clicker:{baseBitsPerClick:1,comboWindowMs:500,maxComboMultiplier:6,clicksToMaxCombo:20,comboDecayMs:1200,cpsLimit:6},generators:[{id:`bit_miner`,name:`Mineur de Bits`,description:`Un script basique qui extrait les bits lentement.`,emoji:`⛏️`,baseCost:25,growthRate:1.15,baseBps:.1,unlockAt:0,milestones:[{owned:10,multiplier:2},{owned:25,multiplier:3},{owned:50,multiplier:5},{owned:100,multiplier:10}]},{id:`packet_router`,name:`Routeur de Paquets`,description:`Achemine des paquets réseau contre rémunération.`,emoji:`📡`,baseCost:160,growthRate:1.15,baseBps:.55,unlockAt:80,milestones:[{owned:10,multiplier:2},{owned:25,multiplier:3},{owned:50,multiplier:5},{owned:100,multiplier:10}]},{id:`data_farm`,name:`Ferme de Données`,description:`Une ferme de bots générateurs de bits.`,emoji:`🌾`,baseCost:900,growthRate:1.15,baseBps:3,unlockAt:500,milestones:[{owned:10,multiplier:2},{owned:25,multiplier:3},{owned:50,multiplier:5},{owned:100,multiplier:10}]},{id:`neural_net`,name:`Réseau Neuronal`,description:`Réseau auto-optimisé de génération de bits.`,emoji:`🧠`,baseCost:5500,growthRate:1.15,baseBps:16,unlockAt:3e3,milestones:[{owned:10,multiplier:2},{owned:25,multiplier:3},{owned:50,multiplier:5},{owned:100,multiplier:10}]},{id:`quantum_rig`,name:`Rig Quantique`,description:`Récolte de bits par intrication quantique.`,emoji:`⚛️`,baseCost:35e3,growthRate:1.15,baseBps:90,unlockAt:22e3,milestones:[{owned:10,multiplier:2},{owned:25,multiplier:3},{owned:50,multiplier:5},{owned:100,multiplier:10}]},{id:`bit_singularity`,name:`Singularité de Bits`,description:`Un trou noir qui convertit la matière en bits.`,emoji:`🕳️`,baseCost:28e4,growthRate:1.15,baseBps:640,unlockAt:18e4,milestones:[{owned:10,multiplier:2},{owned:25,multiplier:3},{owned:50,multiplier:5},{owned:100,multiplier:10}]},{id:`warp_core`,name:`Noyau de Distorsion`,description:`Courbe l'espace-temps pour accélérer la production.`,emoji:`🌀`,baseCost:5e6,growthRate:1.15,baseBps:1500,unlockAt:35e5,milestones:[{owned:10,multiplier:2},{owned:25,multiplier:3},{owned:50,multiplier:5},{owned:100,multiplier:10}]},{id:`dimensional_tap`,name:`Robinet Dimensionnel`,description:`Siphonne l'énergie des dimensions parallèles.`,emoji:`🔮`,baseCost:1e8,growthRate:1.15,baseBps:2e4,unlockAt:65e6,milestones:[{owned:10,multiplier:2},{owned:25,multiplier:3},{owned:50,multiplier:5},{owned:100,multiplier:10}]},{id:`reality_engine`,name:`Moteur de Réalité`,description:`Redéfinit les constantes physiques pour un rendement maximal.`,emoji:`🌌`,baseCost:25e8,growthRate:1.15,baseBps:35e4,unlockAt:15e8,milestones:[{owned:10,multiplier:2},{owned:25,multiplier:3},{owned:50,multiplier:5},{owned:100,multiplier:10}]},{id:`the_omnibus`,name:`L'Omnibus`,description:`Un hypercalculateur incompréhensible. Fait tout tourner.`,emoji:`♾️`,baseCost:9e10,growthRate:1.15,baseBps:1e7,unlockAt:6e10,milestones:[{owned:10,multiplier:2},{owned:25,multiplier:3},{owned:50,multiplier:5},{owned:100,multiplier:10}]}],projects:[{id:`overclock_initial`,name:`Overclock Initial`,description:`Optimise les scripts de base. Tous les générateurs +25% de production.`,category:`production`,cost:400,unlockAt:250,phase:1,effect:{bpsBonus:.25},requires:[]},{id:`combo_amplifie`,name:`Combo Amplifié`,description:`Entraîne les réflexes du streamer. Combo maximum passe de 6× à 10×.`,category:`production`,cost:2500,unlockAt:2e3,phase:1,effect:{maxCombo:10},requires:[]},{id:`marche_libre`,name:`Marché Libre`,description:`Déverrouille la vente de générateurs au prix du marché (50% du coût actuel).`,category:`module`,cost:12e3,unlockAt:9e3,phase:2,effect:{unlocks:`trade`},requires:[]},{id:`protocole_casino`,name:`Protocole Casino`,description:`Déverrouille le Casino. Mises libres, high risk / high reward.`,category:`module`,cost:28e3,unlockAt:2e4,phase:2,effect:{unlocks:`casino`},requires:[]},{id:`compression_reseau`,name:`Compression Réseau`,description:`Optimise les flux de données. Production passive +40%.`,category:`production`,cost:5e4,unlockAt:4e4,phase:2,effect:{bpsBonus:.4},requires:[]},{id:`interface_clicker`,name:`Interface Clicker Pro`,description:`Améliore la détection de clics. Bits par clic +60%.`,category:`production`,cost:12e4,unlockAt:1e5,phase:3,effect:{clickBonus:.6},requires:[]},{id:`protocole_precision`,name:`Protocole de Précision`,description:`Déverrouille l'Aim Trainer. Misez et visez pour gagner gros.`,category:`module`,cost:2e5,unlockAt:15e4,phase:3,effect:{unlocks:`aimtrainer`},requires:[]},{id:`module_boost_init`,name:`Amplificateur de Gains`,description:`Booste les récompenses des modules actifs. Casino & Aim Trainer +30%.`,category:`module`,cost:6e5,unlockAt:4e5,phase:3,effect:{moduleBonus:.3},requires:[]},{id:`amplification_neurale`,name:`Amplification Neurale`,description:`Réseau neuronal dédié à la production. Tous les générateurs +80%.`,category:`production`,cost:9e5,unlockAt:7e5,phase:3,effect:{bpsBonus:.8},requires:[]},{id:`reseau_quantique`,name:`Réseau Quantique`,description:`Intrication quantique des nœuds de production. Générateurs +120%.`,category:`production`,cost:4e6,unlockAt:3e6,phase:4,effect:{bpsBonus:1.2},requires:[]},{id:`table_champions`,name:`Table des Champions`,description:`Accès VIP aux tables haute mise. Casino & Aim Trainer +50%.`,category:`module`,cost:1e7,unlockAt:7e6,phase:4,effect:{moduleBonus:.5},requires:[]},{id:`acceleration_globale`,name:`Accélération Globale`,description:`Synchronise tous les systèmes. TOUS les gains +100%.`,category:`global`,cost:2e7,unlockAt:15e6,phase:4,effect:{globalBonus:1},requires:[]},{id:`singularite`,name:`Singularité de Production`,description:`Atteint le seuil de singularité computationnelle. Générateurs +200%.`,category:`production`,cost:1e8,unlockAt:8e7,phase:5,effect:{bpsBonus:2},requires:[]},{id:`protocole_omega`,name:`Protocole Oméga`,description:`Réécrit les règles du jeu. Modules +100%, tous les gains +75%.`,category:`global`,cost:25e7,unlockAt:2e8,phase:5,effect:{moduleBonus:1,globalBonus:.75},requires:[]},{id:`endgame_protocol`,name:`🚀 LANCER LE PROTOCOLE`,description:`Déploie BitStream sur tous les nœuds de la Terre. Condition de victoire.`,category:`endgame`,cost:2e9,unlockAt:2e9,phase:5,effect:{endgame:!0},requires:[`marche_libre`,`protocole_casino`,`protocole_precision`]}],phases:[{id:1,threshold:0,title:`Garage Hacker`,narrative:`Tu codes dans ta chambre. Le stream démarre pour la première fois.`,unlocks:[`clicker`,`generators`,`projects`,`minigames`]},{id:2,threshold:5e3,title:`Going Online`,narrative:`Tes scripts se répandent. Une communauté se forme.`,unlocks:[]},{id:3,threshold:12e4,title:`Corporate Attention`,narrative:`Une startup veut te financer. Le casino ouvre ses portes.`,unlocks:[]},{id:4,threshold:3e6,title:`Enterprise Scale`,narrative:`BitStream devient une plateforme. Des milliers de nœuds sont en ligne.`,unlocks:[]},{id:5,threshold:75e6,title:`Quantum Era`,narrative:`Les serveurs quantiques s'activent. Le réseau transcende le calcul classique.`,unlocks:[]}],minigames:{intervalRange:[15e4,36e4],durationMs:15e3,burstDurationSec:20,burstBpsMultiplier:4,lossPenaltyPct:.02},offline:{maxOfflineMs:480*60*1e3,efficiency:.08},twitch:{liveMultiplier:1.5,pollIntervalMs:120*1e3},save:{intervalMs:1e4}};function t(e,t,n){return Math.floor(e*t**+n)}function n(e,t){let n=1;for(let r of e)t>=r.owned&&(n=r.multiplier);return n}function r(e){return e>=0x38d7ea4c68000?(e/0x38d7ea4c68000).toFixed(2)+`Qa`:e>=0xe8d4a51000?(e/0xe8d4a51000).toFixed(2)+`T`:e>=1e9?(e/1e9).toFixed(2)+`B`:e>=1e6?(e/1e6).toFixed(2)+`M`:e>=1e3?(e/1e3).toFixed(2)+`K`:e>=10?Math.floor(e).toString():e>=1?e.toFixed(1):e>0?e.toFixed(2):`0`}function i(e){let t=Math.floor(e/3600),n=Math.floor(e%3600/60),r=Math.floor(e%60);return t>0?`${t}h ${n}m`:n>0?`${n}m ${r}s`:`${r}s`}function a(){return{bits:0,totalBitsEarned:0,totalClicks:0,clicker:{comboCount:0,comboMultiplier:1,lastClickTime:0},generators:e.generators.map(e=>({id:e.id,owned:0})),projects:e.projects.map(e=>({id:e.id,purchased:!1})),multipliers:{bpsBonus:0,clickBonus:0,globalBonus:0,moduleBonus:0,maxComboOverride:0,twitch:1,minigame:1,minigameEndsAt:0},twitch:{isLive:!1,streamTitle:``,gameName:``,lastChecked:0,channelName:``},lastPhase:1,lastSaveTime:Date.now(),lastTickTime:Date.now(),language:`fr`}}var o=new class{state=a();listeners=new Set;getState(){return this.state}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notify(){this.listeners.forEach(e=>e())}setState(e){e(this.state),this.notify()}addBits(e){this.state.bits+=e,this.state.totalBitsEarned+=e,this.notify()}incrementClicks(){this.state.totalClicks+=1}spendBits(e){return this.state.bits<e?!1:(this.state.bits-=e,this.notify(),!0)}isMinigameActive(){return Date.now()<this.state.multipliers.minigameEndsAt}getPassiveMultiplier(){let e=this.state.multipliers;return(1+e.bpsBonus+e.globalBonus)*e.twitch*(this.isMinigameActive()?e.minigame:1)}getClickMultiplier(){let e=this.state.multipliers;return(1+e.clickBonus+e.globalBonus)*this.state.clicker.comboMultiplier*e.twitch*(this.isMinigameActive()?e.minigame:1)}getModuleMultiplier(){let e=this.state.multipliers;return 1+e.moduleBonus+e.globalBonus}getRawBPS(){let t=0;for(let r of e.generators){let e=this.state.generators.find(e=>e.id===r.id);if(e&&e.owned>0){let i=n(r.milestones,e.owned);t+=e.owned*r.baseBps*i}}return t}getEffectiveBPS(){return this.getRawBPS()*this.getPassiveMultiplier()}getEffectiveBPC(){return e.clicker.baseBitsPerClick*this.getClickMultiplier()}getMaxCombo(){let t=this.state.multipliers.maxComboOverride;return t>0?t:e.clicker.maxComboMultiplier}getOfflineCapMs(){return e.offline.maxOfflineMs}getCurrentPhase(){let t=this.state.totalBitsEarned,n=1;for(let r of e.phases)t>=r.threshold&&(n=r.id);return n}getCost(n){let r=e.generators.find(e=>e.id===n),i=this.state.generators.find(e=>e.id===n);return!r||!i?1/0:t(r.baseCost,r.growthRate,i.owned)}buyGenerator(e){let t=this.getCost(e);return this.state.bits<t?!1:(this.setState(n=>{n.bits-=t,n.generators.find(t=>t.id===e).owned+=1}),!0)}purchaseProject(t){let n=e.projects.find(e=>e.id===t),r=this.state.projects.find(e=>e.id===t);if(!n||!r||r.purchased||this.state.bits<n.cost||this.state.totalBitsEarned<n.unlockAt||this.getCurrentPhase()<n.phase)return!1;for(let e of n.requires)if(!this.state.projects.find(t=>t.id===e)?.purchased)return!1;return this.setState(e=>{e.bits-=n.cost,e.projects.find(e=>e.id===t).purchased=!0,this.recomputeMultipliers(e)}),!0}recomputeMultipliers(t){let n=0,r=0,i=0,a=0,o=0;for(let s of e.projects){if(!t.projects.find(e=>e.id===s.id)?.purchased)continue;let e=s.effect;typeof e.bpsBonus==`number`&&(n+=e.bpsBonus),typeof e.clickBonus==`number`&&(r+=e.clickBonus),typeof e.globalBonus==`number`&&(i+=e.globalBonus),typeof e.moduleBonus==`number`&&(a+=e.moduleBonus),typeof e.maxCombo==`number`&&(o=Math.max(o,e.maxCombo))}t.multipliers.bpsBonus=n,t.multipliers.clickBonus=r,t.multipliers.globalBonus=i,t.multipliers.moduleBonus=a,t.multipliers.maxComboOverride=o}setTwitchLive(t,n){this.setState(r=>{r.twitch.isLive=t,r.twitch.streamTitle=n.title,r.twitch.gameName=n.game,r.twitch.lastChecked=Date.now(),r.multipliers.twitch=t?e.twitch.liveMultiplier:1})}setLanguage(e){this.setState(t=>{t.language=e})}getLanguage(){return this.state.language}loadState(t){let n=a();this.state={bits:typeof t.bits==`number`?t.bits:n.bits,totalBitsEarned:typeof t.totalBitsEarned==`number`?t.totalBitsEarned:n.totalBitsEarned,totalClicks:typeof t.totalClicks==`number`?t.totalClicks:n.totalClicks,clicker:{...n.clicker,...t.clicker??{}},generators:n.generators.map(e=>t.generators?.find(t=>t.id===e.id)??e),projects:n.projects.map(e=>t.projects?.find(t=>t.id===e.id)??e),multipliers:{...n.multipliers,...t.multipliers??{}},twitch:{...n.twitch,...t.twitch??{}},lastPhase:typeof t.lastPhase==`number`?t.lastPhase:n.lastPhase,lastSaveTime:typeof t.lastSaveTime==`number`?t.lastSaveTime:n.lastSaveTime,lastTickTime:typeof t.lastTickTime==`number`?t.lastTickTime:n.lastTickTime,language:t.language===`en`||t.language===`fr`?t.language:n.language},this.recomputeMultipliers(this.state),this.state.twitch.isLive&&(this.state.multipliers.twitch=e.twitch.liveMultiplier),this.notify()}resetState(){this.state=a(),this.notify()}},s=`bitstream_v1`,c=null;function l(){let e=c;return c=null,e}function u(){let e={...o.getState(),lastSaveTime:Date.now()};localStorage.setItem(s,JSON.stringify(e))}function d(){let t=localStorage.getItem(s);if(!t)return!1;try{let n=JSON.parse(t);if(n.lastSaveTime){let t=e.offline.maxOfflineMs,r=Math.min(Date.now()-n.lastSaveTime,t);if(r>5e3){let t=0;for(let r of e.generators){let e=n.generators?.find(e=>e.id===r.id);e&&(t+=e.owned*r.baseBps)}let i=n.multipliers,a=i?.bpsBonus??0,o=i?.globalBonus??0,s=t*(1+a+o)*(r/1e3)*e.offline.efficiency;n.bits=(n.bits??0)+s,n.totalBitsEarned=(n.totalBitsEarned??0)+s,c={bitsEarned:s,seconds:r/1e3}}}return n.lastTickTime=Date.now(),o.loadState(n),!0}catch{return!1}}function f(){localStorage.removeItem(s),o.resetState()}function p(){setInterval(u,e.save.intervalMs),window.addEventListener(`beforeunload`,u)}var m=`https://xocwingwakmhfztbqpqz.supabase.co`,h=`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhvY3dpbmd3YWttaGZ6dGJxcHF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc5NzkzNjgsImV4cCI6MjA5MzU1NTM2OH0.w2z8jMXid6_i8QRlwpPRy3tW69EavgX4uF5SgWemu6U`;function g(){return!0}var _={apikey:h,Authorization:`Bearer ${h}`,"Content-Type":`application/json`};async function v(){let e=await fetch(`${m}/rest/v1/leaderboard?select=name,score&order=score.desc&limit=20`,{headers:_});if(!e.ok)throw Error(`LB fetch: ${e.status}`);return e.json()}async function y(e,t){let n=new Date().toISOString();await fetch(`${m}/rest/v1/leaderboard`,{method:`POST`,headers:{..._,Prefer:`resolution=merge-duplicates`},body:JSON.stringify({name:e,score:t,updated_at:n})})}var b=`bs_player_name`,x=`bs_player_best`,S=120*1e3,C=300*1e3,w=[`xX_BitL0rd_Xx`,`Neuron_42`,`QuantumLeak`,`CryptoVoid`,`NullByte`,`SilentMiner`,`ByteHunter`,`DataPhantom`,`GridRunner`,`CodeShadow`];function T(e,t){let n=t*1234567891;for(let t=0;t<e.length;t++)n=Math.imul(n^e.charCodeAt(t),2246822519)>>>0;return n}function E(e){return w.map(t=>{let n=.3+T(t,t.length)%100/100*1.4;return{name:t,score:Math.floor(Math.max(e*n,100))}})}function D(){return localStorage.getItem(`bs_player_name`)??``}function ee(e){localStorage.setItem(b,e)}async function O(){let e=D();if(localStorage.removeItem(b),localStorage.removeItem(x),e&&g())try{await y(e,0)}catch{}}function k(){try{return JSON.parse(localStorage.getItem(`bs_player_best`)??`0`)}catch{return 0}}function A(e){e>k()&&localStorage.setItem(x,JSON.stringify(e))}function te(e){let t=g(),n=[],i=k(),a=0,s=0,c=0;e.innerHTML=`
    <div class="lb-panel">
      <h2 class="panel-title">🏆 Classement</h2>
      <div class="lb-status" id="lb-status">${t?`🌐 En ligne`:`🤖 Local (bots)`}</div>
      <div class="lb-rank-row">Votre rang : <span class="mono" id="lb-your-rank">#?</span></div>
      <div class="lb-list" id="lb-list">
        <div class="lb-loading">Chargement…</div>
      </div>
    </div>
  `;let l=e.querySelector(`#lb-list`),u=e.querySelector(`#lb-your-rank`);function d(){let e=D(),a=o.getState().totalBitsEarned;i=Math.max(i,a),A(i);let s;if(t){let t=n.filter(t=>t.name!==e),r={name:e,score:i};s=[...t,r].sort((e,t)=>t.score-e.score).slice(0,20)}else{let t={name:e||`Vous`,score:i};s=[...E(i),t].sort((e,t)=>t.score-e.score)}u.textContent=`#${s.findIndex(t=>t.name===(e||`Vous`))+1}`,l.innerHTML=s.map((t,n)=>{let i=t.name===(e||`Vous`);return`
        <div class="lb-row ${i?`lb-row--you`:``}">
          <span class="lb-rank mono">#${n+1}</span>
          <span class="lb-name">${t.name}${i?` <span class="lb-you">(Vous)</span>`:``}</span>
          <span class="lb-score mono">${r(t.score)}</span>
        </div>
      `}).join(``)}async function f(){if(!t){d();return}try{n=await v()}catch{}d()}let p=0;async function m(e=!1){if(!t)return;let n=D();if(!n)return;let r=o.getState().totalBitsEarned;if(i=Math.max(i,r),i<=0)return;let s=Date.now(),c=i>p*1.05||i>p+1e4;if(!(!e&&s-a<C&&!c)){a=s,p=i;try{await y(n,i)}catch{}}}f(),setTimeout(()=>void m(!0),3e3),s=window.setInterval(()=>{f()},S),c=window.setInterval(()=>{m()},C);let h=o.subscribe(d);return()=>{clearInterval(s),clearInterval(c),h()}}function ne(e){e.innerHTML=`
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
  `;let t=e.querySelector(`#hdr-bits`),n=e.querySelector(`#btn-save`),i=e.querySelector(`#btn-reset`);function a(){t.textContent=r(o.getState().bits),t.classList.remove(`bits--tick`),t.offsetWidth,t.classList.add(`bits--tick`)}n.addEventListener(`click`,()=>{u(),n.textContent=`✅`,setTimeout(()=>n.textContent=`💾`,1500)}),i.addEventListener(`click`,()=>{confirm(`Réinitialiser toute la progression ? Cette action est irréversible.`)&&O().finally(()=>{f(),window.location.reload()})});let s=o.subscribe(a);return a(),()=>s()}function re(t){t.innerHTML=`
    <div class="clicker-panel">
      <div class="clicker-core">
        <button id="main-btn" class="click-btn" aria-label="Cliquer pour gagner des bits">
          <span class="click-btn__icon">⚡</span>
          <span class="click-btn__label">CLIC</span>
        </button>
      </div>
      <div class="combo-bar">
        <div class="combo-bar__fill" id="combo-fill" style="width:0%"></div>
        <span class="combo-bar__text" id="combo-text">×1.0</span>
      </div>
      <div class="clicker-stats">
        <div class="stat-row">
          <span class="stat-label">Par clic</span>
          <span class="stat-value mono" id="bpc-display">0</span>
        </div>
      </div>
    </div>
  `;let n=t.querySelector(`#main-btn`),i=t.querySelector(`#combo-fill`),a=t.querySelector(`#combo-text`),s=t.querySelector(`#bpc-display`),c=0,l=[],u=3e3;function d(){let t=Date.now();for(;l.length>0&&t-l[0]>u;)l.shift();let n=l.length/(u/1e3),r=e.clicker.cpsLimit;return n<=r?1:r/n}function f(e){l.push(Date.now());let t=d(),r=o.getEffectiveBPC()*t;o.addBits(r),o.incrementClicks(),h(n,r),n.classList.remove(`click-btn--pop`),n.offsetWidth,n.classList.add(`click-btn--pop`),p(),g(n,e)}function p(){let t=Date.now();clearTimeout(c),o.setState(n=>{t-n.clicker.lastClickTime<=e.clicker.comboWindowMs?n.clicker.comboCount=Math.min(n.clicker.comboCount+1,e.clicker.clicksToMaxCombo):n.clicker.comboCount=1,n.clicker.lastClickTime=t;let r=n.clicker.comboCount/e.clicker.clicksToMaxCombo;n.clicker.comboMultiplier=1+(o.getMaxCombo()-1)*Math.min(r,1)}),m(),c=window.setTimeout(()=>{o.setState(e=>{e.clicker.comboCount=0,e.clicker.comboMultiplier=1}),m()},e.clicker.comboDecayMs)}function m(){let{comboCount:t,comboMultiplier:n}=o.getState().clicker,r=t/e.clicker.clicksToMaxCombo*100;i.style.width=r.toFixed(1)+`%`,a.textContent=`×${n.toFixed(1)}`}function h(e,t){let n=document.createElement(`div`);n.className=`click-floater`,n.textContent=`+`+r(t);let i=e.getBoundingClientRect();n.style.left=i.left+i.width/2+(Math.random()-.5)*60+`px`,n.style.top=i.top-10+`px`,document.body.appendChild(n),n.addEventListener(`animationend`,()=>n.remove(),{once:!0})}function g(e,t){let n=document.createElement(`span`);n.className=`click-ripple`;let r=e.getBoundingClientRect(),i=t instanceof MouseEvent?t.clientX:t.touches[0].clientX,a=t instanceof MouseEvent?t.clientY:t.touches[0].clientY;n.style.left=i-r.left+`px`,n.style.top=a-r.top+`px`,e.appendChild(n),n.addEventListener(`animationend`,()=>n.remove(),{once:!0})}function _(){s.textContent=r(o.getEffectiveBPC())}n.addEventListener(`click`,f);let v=o.subscribe(_);return _(),()=>{v(),clearTimeout(c)}}function j(t){let n=e.generators.find(e=>e.id===t),r=o.getState().generators.find(e=>e.id===t);return Math.floor(n.baseCost*n.growthRate**+r.owned*.5)}function M(){return!!o.getState().projects.find(e=>e.id===`marche_libre`)?.purchased}function N(i){i.innerHTML=`
    <div class="production-panel">
      <h2 class="panel-title">Générateurs</h2>
      <div id="generators-list" class="generators-list"></div>
    </div>
  `;let a=i.querySelector(`#generators-list`),s=``;function c(){let t=o.getState(),n=t.generators.map(e=>e.owned).join(`,`),r=e.generators.map(e=>t.totalBitsEarned>=e.unlockAt?`1`:`0`).join(``),i=t.projects.find(e=>e.id===`marche_libre`)?.purchased?`1`:`0`;return n+`|`+r+`|`+Math.floor(t.multipliers.bpsBonus*100)+`|`+i}function l(){let i=o.getState();a.innerHTML=``;let s=!1;for(let c of e.generators){let e=i.generators.find(e=>e.id===c.id);if(i.totalBitsEarned<c.unlockAt)continue;s=!0;let l=t(c.baseCost,c.growthRate,e.owned),u=i.bits>=l,d=e.owned*c.baseBps*o.getPassiveMultiplier(),f=M(),p=j(c.id),m=n(c.milestones,e.owned),h=c.milestones.find(t=>t.owned>e.owned),g=e.owned>0?h?`×${m} actif · prochain ×${h.multiplier} à ${h.owned}`:`×${m} MAX`:h?`Palier ×${h.multiplier} à ${h.owned}`:``,_=document.createElement(`div`);_.className=`gen-card${u?` gen-card--affordable`:``}`,_.dataset.id=c.id,_.innerHTML=`
        <div class="gen-card__icon">${c.emoji}</div>
        <div class="gen-card__info">
          <div class="gen-card__name">${c.name}</div>
          <div class="gen-card__bps mono">${e.owned>0?r(d)+` b/s`:`inactif`}</div>
          ${g?`<div class="gen-card__milestone">${g}</div>`:``}
          ${f&&e.owned>0?`<button class="gen-sell-btn" data-sell="${c.id}" data-price="${p}">Vendre ${r(p)}</button>`:``}
        </div>
        <div class="gen-card__right">
          <div class="gen-card__owned mono">${e.owned}</div>
          <button class="gen-btn${u?``:` gen-btn--disabled`}" data-buy="${c.id}">
            <span class="gen-btn__cost mono">${r(l)}</span>
            <span class="gen-btn__label">ACHETER</span>
          </button>
        </div>
      `,a.appendChild(_)}s||(a.innerHTML=`<p class="gen-hint">Earn more bits to unlock generators…</p>`)}function u(){let n=o.getState();for(let i of e.generators){let e=a.querySelector(`[data-id="${i.id}"]`);if(!e)continue;let s=n.generators.find(e=>e.id===i.id),c=t(i.baseCost,i.growthRate,s.owned),l=n.bits>=c;e.classList.toggle(`gen-card--affordable`,l);let u=e.querySelector(`[data-buy="${i.id}"]`);if(u.classList.toggle(`gen-btn--disabled`,!l),u.querySelector(`.gen-btn__cost`).textContent=r(c),s.owned>0){let t=s.owned*i.baseBps*o.getPassiveMultiplier();e.querySelector(`.gen-card__bps`).textContent=r(t)+` b/s`}}}function d(){let e=c();e===s?u():(s=e,l())}function f(e){let t=e.target.closest(`[data-buy]`);if(!t)return;let n=t.dataset.buy;o.buyGenerator(n)&&a.querySelector(`[data-id="${n}"]`)?.classList.add(`gen-card--bought`)}function p(e){let t=e.target.closest(`[data-sell]`);if(!t)return;let n=t.dataset.sell,r=parseInt(t.dataset.price||`0`,10);o.getState().generators.find(e=>e.id===n).owned!==0&&(o.setState(e=>{--e.generators.find(e=>e.id===n).owned}),o.addBits(r))}a.addEventListener(`click`,f),a.addEventListener(`click`,p);let m=o.subscribe(d);return s=c(),l(),()=>m()}function P(){let t=document.createElement(`div`);t.className=`endgame-overlay`;let{totalBitsEarned:n}=o.getState();t.innerHTML=`
    <div class="endgame-modal">
      <div class="endgame-modal__glow"></div>
      <div class="endgame-modal__content">
        <div class="endgame-modal__icon">🚀</div>
        <h1 class="endgame-modal__title">THE BITSTREAM PROTOCOL IS LIVE</h1>
        <p class="endgame-modal__subtitle">
          Tu as construit un réseau mondial depuis un simple script dans ta chambre.<br/>
          Le protocole tourne maintenant sur chaque nœud de la Terre.
        </p>
        <div class="endgame-stats">
          <div class="endgame-stat">
            <span class="endgame-stat__label">Total Bits Générés</span>
            <span class="endgame-stat__value mono">${r(n)}</span>
          </div>
          <div class="endgame-stat">
            <span class="endgame-stat__label">BPS au pic</span>
            <span class="endgame-stat__value mono">${r(o.getEffectiveBPS())} b/s</span>
          </div>
          <div class="endgame-stat">
            <span class="endgame-stat__label">Projets complétés</span>
            <span class="endgame-stat__value mono">${o.getState().projects.filter(e=>e.purchased).length} / ${e.projects.length}</span>
          </div>
        </div>
        <p class="endgame-modal__continue">Le réseau continue de tourner. Il y a toujours plus à accumuler.</p>
        <button class="endgame-close" id="endgame-close">Continuer à jouer</button>
      </div>
    </div>
  `,document.body.appendChild(t),t.querySelector(`#endgame-close`).addEventListener(`click`,()=>{t.classList.add(`endgame-overlay--out`),t.addEventListener(`animationend`,()=>t.remove(),{once:!0})})}var F={production:`⚡ Production`,module:`🎰 Modules`,global:`🌐 Global`,endgame:`🚀 Endgame`};function I(e){let t=[];return e.unlocks===`trade`?t.push(`Débloque : Vente de générateurs`):e.unlocks===`casino`?t.push(`Débloque : Casino`):e.unlocks===`aimtrainer`&&t.push(`Débloque : Aim Trainer`),typeof e.bpsBonus==`number`&&t.push(`+${Math.round(e.bpsBonus*100)}% production passive`),typeof e.clickBonus==`number`&&t.push(`+${Math.round(e.clickBonus*100)}% bits/clic`),typeof e.globalBonus==`number`&&t.push(`+${Math.round(e.globalBonus*100)}% tous les gains`),typeof e.moduleBonus==`number`&&t.push(`+${Math.round(e.moduleBonus*100)}% gains modules`),typeof e.maxCombo==`number`&&t.push(`Combo max : ${e.maxCombo}×`),e.endgame&&t.push(`🏁 Condition de victoire`),t.join(` · `)}function ie(t){t.innerHTML=`
    <div class="projects-panel">
      <h2 class="panel-title">Projets</h2>
      <div id="projects-list" class="projects-list"></div>
    </div>
  `;let n=t.querySelector(`#projects-list`),i=``;function a(){let t=o.getState(),n=t.projects.filter(e=>e.purchased).map(e=>e.id).join(`,`),r=e.projects.map(e=>{if(t.projects.find(t=>t.id===e.id).purchased)return`0`;let n=e.requires.every(e=>t.projects.find(t=>t.id===e)?.purchased),r=t.totalBitsEarned>=e.unlockAt&&o.getCurrentPhase()>=e.phase;return r&&n?`1`:!r&&n?`2`:`3`}).join(``);return n+`|`+r}function s(t){let n=o.getState(),r=e.projects.find(e=>e.id===t);if(n.projects.find(e=>e.id===t).purchased||n.totalBitsEarned<r.unlockAt||o.getCurrentPhase()<r.phase)return!1;for(let e of r.requires)if(!n.projects.find(t=>t.id===e)?.purchased)return!1;return!0}function c(t){let n=o.getState(),r=e.projects.find(e=>e.id===t);if(n.projects.find(e=>e.id===t).purchased||n.totalBitsEarned>=r.unlockAt&&o.getCurrentPhase()>=r.phase)return!1;for(let e of r.requires)if(!n.projects.find(t=>t.id===e)?.purchased)return!1;return!0}function l(){let t=o.getState();n.innerHTML=``;let i=e.projects.filter(e=>s(e.id)),a=e.projects.filter(e=>c(e.id));if(i.length===0&&a.length===0){n.innerHTML=`<p class="prj-hint">Tous les projets sont complétés. 🏆</p>`;return}let l=new Map;for(let e of i)l.has(e.category)||l.set(e.category,[]),l.get(e.category).push(e);for(let[e,i]of l){let a=document.createElement(`div`);a.className=`prj-section`,a.innerHTML=`<div class="prj-section__label">${F[e]??e}</div>`;for(let e of i){let n=t.bits>=e.cost,i=document.createElement(`div`);i.className=`prj-card${n?` prj-card--affordable`:``}`,i.dataset.id=e.id,i.innerHTML=`
          <div class="prj-card__header">
            <span class="prj-card__name">${e.name}</span>
            <span class="prj-card__cost mono">${r(e.cost)} bits</span>
          </div>
          <div class="prj-card__desc">${e.description}</div>
          <div class="prj-card__effect">${I(e.effect)}</div>
          <button class="prj-btn${n?``:` prj-btn--disabled`}" data-buy="${e.id}">
            ${n?`ACHETER`:`Manque `+r(e.cost-t.bits)}
          </button>
        `,a.appendChild(i)}n.appendChild(a)}if(a.length>0){let e=new Map;for(let t of a)e.has(t.category)||e.set(t.category,t);let i=document.createElement(`div`);i.className=`prj-section`,i.innerHTML=`<div class="prj-section__label prj-section__label--locked">🔒 Prochainement</div>`;for(let n of e.values()){let e=n.unlockAt-t.totalBitsEarned,a=document.createElement(`div`);a.className=`prj-card prj-card--locked`,a.innerHTML=`
          <div class="prj-card__header">
            <span class="prj-card__name">${n.name}</span>
            <span class="prj-card__cost mono">${r(n.cost)} bits</span>
          </div>
          <div class="prj-card__desc">${n.description}</div>
          <div class="prj-card__locked-hint">Gagne encore ${r(e)} bits total pour débloquer</div>
        `,i.appendChild(a)}n.appendChild(i)}}function u(t){let n=t.target.closest(`[data-buy]`);if(!n)return;let r=n.dataset.buy;o.purchaseProject(r)&&e.projects.find(e=>e.id===r)?.effect?.endgame&&P()}function d(){let t=a();if(t!==i)i=t,l();else{let t=o.getState();n.querySelectorAll(`[data-buy]`).forEach(n=>{let i=n.dataset.buy,a=e.projects.find(e=>e.id===i),o=t.bits>=a.cost;n.classList.toggle(`prj-btn--disabled`,!o),n.textContent=o?`ACHETER`:`Manque `+r(a.cost-t.bits),n.closest(`.prj-card`).classList.toggle(`prj-card--affordable`,o)})}}n.addEventListener(`click`,u);let f=o.subscribe(d);return i=a(),l(),()=>f()}var L=[`♠`,`♣`,`♥`,`♦`],R=[`A`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`10`,`J`,`Q`,`K`];function ae(){let e=L.flatMap(e=>R.map(t=>({suit:e,rank:t})));return[].concat(...[,,,,,,].fill(0).map(()=>e.map(e=>({...e}))))}function oe(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}function z(e){return[`J`,`Q`,`K`].includes(e.rank)?10:e.rank===`A`?11:parseInt(e.rank)}function B(e){let t=e.filter(e=>!e.faceDown),n=t.reduce((e,t)=>e+z(t),0),r=t.filter(e=>e.rank===`A`).length;for(;n>21&&r-- >0;)n-=10;return n}function V(e){return e.faceDown?`<div class="bj-card bj-card--back"></div>`:`<div class="bj-card${e.suit===`♥`||e.suit===`♦`?` bj-card--red`:``}">
    <div class="bj-card-tl">${e.rank}<br><span>${e.suit}</span></div>
    <div class="bj-card-ct">${e.suit}</div>
    <div class="bj-card-br">${e.rank}<br><span>${e.suit}</span></div>
  </div>`}var H=[{label:`PERTE`,mult:0,col:`#881111`,txt:`#fff`},{label:`×0.5`,mult:.5,col:`#333333`,txt:`#fff`},{label:`PERTE`,mult:0,col:`#aa2222`,txt:`#fff`},{label:`×1`,mult:1,col:`#555555`,txt:`#fff`},{label:`×2`,mult:2,col:`#888888`,txt:`#000`},{label:`×3`,mult:3,col:`#bbbbbb`,txt:`#000`},{label:`×5`,mult:5,col:`#e8e8e8`,txt:`#000`},{label:`💎×15`,mult:15,col:`#ffcc00`,txt:`#000`}];function U(e,t,n,r,i){let a=H.length,o=2*Math.PI/a;e.clearRect(0,0,e.canvas.width,e.canvas.height);for(let s=0;s<a;s++){let a=H[s],c=i+s*o-Math.PI/2,l=c+o;e.beginPath(),e.moveTo(t,n),e.arc(t,n,r,c,l),e.closePath(),e.fillStyle=a.col,e.fill(),e.strokeStyle=`#111`,e.lineWidth=1.5,e.stroke();let u=c+o/2;e.save(),e.translate(t+Math.cos(u)*r*.68,n+Math.sin(u)*r*.68),e.rotate(u+Math.PI/2),e.textAlign=`center`,e.textBaseline=`middle`,e.fillStyle=a.txt,e.font=`bold 10px monospace`,e.fillText(a.label,0,0),e.restore()}e.beginPath(),e.arc(t,n,10,0,2*Math.PI),e.fillStyle=`#111`,e.fill(),e.strokeStyle=`#fff`,e.lineWidth=1.5,e.stroke()}function se(e,t){let n=2*Math.PI/H.length,r=((-(t+.5)*n%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-(e%(2*Math.PI)+2*Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI);return e+(4+Math.floor(Math.random()*4))*2*Math.PI+r}function W(e){e.innerHTML=`
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
  `;let t=e.querySelector(`#casino-content`),n=e.querySelector(`#casino-balance`),i=e.querySelector(`#casino-history`),a=e.querySelectorAll(`.casino-tab`),s=`blackjack`,c=!1,l=[];function u(e){let n=t.querySelector(`.casino-error`);n&&n.remove();let r=document.createElement(`div`);r.className=`casino-error`,r.textContent=e,t.prepend(r),setTimeout(()=>r.remove(),2500)}function d(e){let n=t.querySelector(`#${e}`),r=Math.max(1,parseInt(n?.value||`1`)||1);return localStorage.setItem(`bs_bet_${e}`,String(r)),r}function f(e,t=100){return parseInt(localStorage.getItem(`bs_bet_${e}`)||String(t))||t}function p(e,t=100){return`
      <div class="bet-wrap">
        <div class="bet-quicks">
          <button class="bet-quick" data-pct="10">10%</button>
          <button class="bet-quick" data-pct="25">25%</button>
          <button class="bet-quick" data-pct="50">50%</button>
          <button class="bet-quick" data-pct="100">MAX</button>
        </div>
        <input type="number" id="${e}" class="bet-input" value="${f(e,t)}" min="1">
      </div>
    `}function m(e){t.querySelectorAll(`.bet-quick`).forEach(n=>{n.addEventListener(`click`,()=>{let r=parseInt(n.dataset.pct||`100`),i=Math.floor(o.getState().bits),a=Math.max(1,Math.floor(i*r/100)),s=t.querySelector(`#${e}`);s&&(s.value=String(a))})})}function h(e,t,n){l.unshift({game:e,won:t,amount:n}),G()}let g=[],_=[[]],v=[100],y=0,b=[],x=100,S=`bet`;function C(){return _[y]}function w(){return v[y]}function T(){return _.length>1}function E(e){let n=t.querySelector(`#bj-bet-display`);n&&(n.textContent=r(e)+` bits`)}function D(){let e=t.querySelector(`#bj-dealer-cards`),n=t.querySelector(`#bj-dealer-total`),i=t.querySelector(`#bj-controls`),a=t.querySelector(`#bj-msg`);if(!(!e||!i||!a))if(S===`bet`){e.innerHTML=`<div class="bj-placeholder">♠ ♣ ♥ ♦</div>`;let r=t.querySelector(`#bj-player-cards`);r&&(r.innerHTML=`<div class="bj-placeholder">Distribuez pour commencer</div>`),n&&(n.textContent=``),a.innerHTML=``;let o=t.querySelector(`#bj-bet-display`);o&&(o.textContent=`—`),i.innerHTML=`
        ${p(`bj-bet`,x)}
        <button class="casino-btn" id="bj-deal">🃏 Distribuer</button>
      `,m(`bj-bet`),t.querySelector(`#bj-deal`)?.addEventListener(`click`,ee)}else if(S===`play`){e.innerHTML=b.map(e=>V(e)).join(``);let s=B(b.filter(e=>!e.faceDown));n&&(n.textContent=`${s}${b.some(e=>e.faceDown)?` + ?`:``}`);let c=t.querySelector(`#bj-player-cards`),l=t.querySelector(`#bj-player-total`);if(c)if(T())c.innerHTML=_.map((e,t)=>{let n=t===y,i=B(e);return`<div class="bj-split-hand${n?` bj-split-hand--active`:``}">
              <div class="bj-split-label">Main ${t+1} (${r(v[t])} bits)${n?` ◀`:``}</div>
              <div class="bj-cards">${e.map(e=>V(e)).join(``)}</div>
              <div class="bj-total">${i}</div>
            </div>`}).join(``),l&&(l.textContent=``);else{c.innerHTML=C().map(e=>V(e)).join(``);let e=B(C());l&&(l.textContent=String(e))}E(w());let u=B(C()),d=C().length===2&&o.getState().bits>=w(),f=C().length===2&&!T()&&C()[0].rank===C()[1].rank&&o.getState().bits>=w();i.innerHTML=`
        <div class="bj-action-row">
          <button class="casino-btn" id="bj-hit">Tirer</button>
          <button class="casino-btn" id="bj-stand">Rester</button>
          <button class="casino-btn${d?``:` casino-btn--disabled`}" id="bj-double">Doubler</button>
          ${f?`<button class="casino-btn bj-btn-split" id="bj-split">Split</button>`:``}
        </div>
        <div class="bj-total-row">Total : <span class="mono">${u}</span></div>
      `,a.innerHTML=``,t.querySelector(`#bj-hit`)?.addEventListener(`click`,O),t.querySelector(`#bj-stand`)?.addEventListener(`click`,A),d&&t.querySelector(`#bj-double`)?.addEventListener(`click`,ne),f&&t.querySelector(`#bj-split`)?.addEventListener(`click`,re)}else{b.forEach(e=>{e.faceDown=!1}),e.innerHTML=b.map(e=>V(e)).join(``);let r=B(b);n&&(n.textContent=String(r));let a=t.querySelector(`#bj-player-cards`);if(a)if(T())a.innerHTML=_.map((e,t)=>`
            <div class="bj-split-hand">
              <div class="bj-split-label">Main ${t+1}</div>
              <div class="bj-cards">${e.map(e=>V(e)).join(``)}</div>
              <div class="bj-total">${B(e)}</div>
            </div>`).join(``);else{a.innerHTML=C().map(e=>V(e)).join(``);let e=B(C()),n=t.querySelector(`#bj-player-total`);n&&(n.textContent=String(e))}i.innerHTML=`<button class="casino-btn" id="bj-again">Rejouer</button>`,t.querySelector(`#bj-again`)?.addEventListener(`click`,()=>{S=`bet`,_=[[]],v=[x],y=0,D()})}}function ee(){if(x=d(`bj-bet`),o.getState().bits<x){u(`Bits insuffisants !`);return}if(o.spendBits(x),c=!0,g=oe(ae()),_=[[{...g.pop()},{...g.pop()}]],v=[x],y=0,b=[{...g.pop()},{...g.pop(),faceDown:!0}],S=`play`,D(),B(C())===21){let e=t.querySelector(`#bj-player-cards`);e&&e.classList.add(`bj-blackjack-flash`);let n=t.querySelector(`#bj-msg`);n&&(n.innerHTML=`<div class="bj-bj-banner">🃏 BLACKJACK ! 🃏</div>`),setTimeout(()=>{b.forEach(e=>{e.faceDown=!1}),B(b)===21?j([{push:!0,msg:`Double Blackjack — Égalité !`}]):j([{won:!0,bonus:!0,msg:`🃏 Blackjack ! ×1.5 !`}])},1400)}}function O(){C().push({...g.pop()}),D();let e=B(C());e>21?setTimeout(()=>{let n=t.querySelector(`#bj-msg`);n&&(n.innerHTML=`<div class="bj-result bj-result--lose">💥 Bust (${e}) !</div>`),setTimeout(()=>k(),1e3)},300):e===21&&setTimeout(()=>A(),300)}function k(){T()&&y<_.length-1?(y++,D()):te()}function A(){k()}function te(){b.forEach(e=>{e.faceDown=!1}),D();function e(){if(B(b)<17)setTimeout(()=>{b.push({...g.pop()}),D(),e()},650);else{let e=B(b),t=[];_.forEach((n,r)=>{let i=B(n);i>21?t.push({won:!1,msg:`Main ${_.length>1?r+1+` : `:``}Bust (${i}) — Perdu`}):e>21?t.push({won:!0,msg:`Main ${_.length>1?r+1+` : `:``}Croupier bust — Gagné !`}):i>e?t.push({won:!0,msg:`Main ${_.length>1?r+1+` : `:``}${i} > ${e} — Gagné !`}):i===e?t.push({push:!0,msg:`Main ${_.length>1?r+1+` : `:``}Égalité (${i})`}):t.push({won:!1,msg:`Main ${_.length>1?r+1+` : `:``}${i} < ${e} — Croupier gagne`})}),setTimeout(()=>j(t),400)}}e()}function ne(){if(o.getState().bits<w()){u(`Bits insuffisants pour doubler !`);return}o.spendBits(w()),v[y]*=2,C().push({...g.pop()}),E(v[y]),D(),B(C())>21?setTimeout(()=>{k()},500):setTimeout(()=>A(),600)}function re(){if(o.getState().bits<w()){u(`Bits insuffisants pour splitter !`);return}o.spendBits(w());let e=v[0];_=[[_[0][0],{...g.pop()}],[_[0][1],{...g.pop()}]],v=[e,e],y=0,D()}function j(e){S=`done`;let n=0,i=o.getModuleMultiplier();e.forEach((e,t)=>{let r=v[t];if(e.won){let t=e.bonus?Math.floor(r*1.5):r,a=Math.floor(t*i);o.addBits(r+a),n+=a,h(`🃏`,!0,a)}else e.push?(o.addBits(r),h(`🃏`,!0,0)):(n-=r,h(`🃏`,!1,r))}),c=!1,D();let a=t.querySelector(`#bj-msg`);if(a){let t=e.map(e=>`<div class="bj-result ${e.won?`bj-result--win`:e.push?`bj-result--push`:`bj-result--lose`}">${e.msg}</div>`),i=n>=0?`+`:``;t.push(`<div class="bj-net-total">Net : ${i}${r(n)} bits</div>`),a.innerHTML=t.join(``)}}let M=null;function N(){t.innerHTML=`
      <div class="casino-game-suits">
        <p class="suits-hint">Choisissez une couleur, puis misez. Bonne réponse → ×3</p>
        <div class="suits-choices">
          ${L.map(e=>`<button class="suit-btn${e===`♥`||e===`♦`?` suit-btn--red`:``}${M===e?` suit-btn--active`:``}" data-suit="${e}">${e}</button>`).join(``)}
        </div>
        ${p(`suits-bet`,100)}
        <button class="casino-btn${M?``:` casino-btn--disabled`}" id="suits-play">Miser</button>
        <div id="suits-result" class="suits-result" style="display:none"></div>
      </div>
    `,m(`suits-bet`),t.querySelectorAll(`.suit-btn`).forEach(e=>{e.addEventListener(`click`,()=>{M=e.dataset.suit,t.querySelectorAll(`.suit-btn`).forEach(t=>t.classList.toggle(`suit-btn--active`,t===e));let n=t.querySelector(`#suits-play`);n&&n.classList.remove(`casino-btn--disabled`)})}),t.querySelector(`#suits-play`)?.addEventListener(`click`,()=>{if(!M||c)return;let e=d(`suits-bet`);if(o.getState().bits<e){u(`Bits insuffisants !`);return}c=!0,o.spendBits(e);let n=L[Math.floor(Math.random()*4)],i={suit:n,rank:R[Math.floor(Math.random()*13)]},a=n===M,s=o.getModuleMultiplier(),l=a?Math.floor(e*3*s):0,f=a?l:-e,p=f>=0?`+`:``,m=t.querySelector(`#suits-result`);m.style.display=`flex`,m.innerHTML=`
        <div class="suits-drawn">${V(i)}</div>
        <div class="suits-verdict ${a?`suits-win`:`suits-lose`}">
          ${a?`✅ ${n} — Gagné !<br><span class="mono">${p}${r(f)} bits nets</span>`:`❌ ${n} — Raté !<br><span class="mono">${p}${r(f)} bits</span>`}
        </div>
      `,a?(o.addBits(e+l),h(`♥`,!0,l)):h(`♥`,!1,e),setTimeout(()=>{c=!1,M=null,N()},2500)})}let P=0,F=0;function I(){t.innerHTML=`
      <div class="casino-game-wheel">
        <div class="wheel-canvas-wrap">
          <canvas id="wheel-canvas" width="200" height="200" class="wheel-canvas"></canvas>
          <div class="wheel-needle">▼</div>
        </div>
        ${p(`wheel-bet`,100)}
        <button class="casino-btn" id="wheel-spin">🎡 Faire tourner !</button>
        <div id="wheel-result" style="display:none" class="wheel-result-msg"></div>
      </div>
    `,m(`wheel-bet`),U(t.querySelector(`#wheel-canvas`).getContext(`2d`),100,100,90,F),t.querySelector(`#wheel-spin`)?.addEventListener(`click`,ie)}function ie(){if(c)return;let e=d(`wheel-bet`);if(o.getState().bits<e){u(`Bits insuffisants !`);return}c=!0,o.spendBits(e);let n=t.querySelector(`#wheel-canvas`);if(!n)return;let i=n.getContext(`2d`),a=Math.floor(Math.random()*H.length),s=se(F,a),l=3500,f=performance.now(),p=F,m=t.querySelector(`#wheel-spin`);m.disabled=!0,cancelAnimationFrame(P);function g(n){let u=Math.min(n-f,l);if(U(i,100,100,90,p+(1-(1-u/l)**4)*(s-p)),u<l)P=requestAnimationFrame(g);else{F=s,U(i,100,100,90,F);let n=H[a],l=t.querySelector(`#wheel-result`);if(l.style.display=`block`,n.mult>0){let t=o.getModuleMultiplier(),i;i=n.mult>1?e+Math.floor(e*(n.mult-1)*t):Math.floor(e*n.mult);let a=i-e,s=a>=0?`+`:``;o.addBits(i),l.textContent=`${n.label} — ${s}${r(a)} bits nets`,l.className=a>=0?`wheel-result-msg wheel-result--win`:`wheel-result-msg wheel-result--lose`,h(`🎡`,a>=0,Math.abs(a))}else l.textContent=`PERTE — −${r(e)} bits`,l.className=`wheel-result-msg wheel-result--lose`,h(`🎡`,!1,e);setTimeout(()=>{c=!1,I()},2500)}}P=requestAnimationFrame(g)}function z(e){c&&e!==s||(cancelAnimationFrame(P),s=e,a.forEach(t=>t.classList.toggle(`casino-tab--active`,t.dataset.game===e)),e===`blackjack`?(t.innerHTML=`
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
      `,S=`bet`,_=[[]],v=[x],y=0,b=[],g=[],D()):e===`suits`?(M=null,N()):e===`wheel`&&I())}function W(){n.textContent=r(o.getState().bits)}function G(){i.innerHTML=l.slice(0,5).map(e=>{let t=e.won?`✅`:`❌`;return`<div class="casino-history-item ${e.won?`win`:`lose`}">${t} ${e.game} ${e.won?`+`:`−`}${r(e.amount)}</div>`}).join(``)}a.forEach(e=>{e.addEventListener(`click`,()=>{(!c||e.dataset.game===s)&&z(e.dataset.game)})});let K=o.subscribe(W);return z(`blackjack`),W(),()=>{cancelAnimationFrame(P),K()}}var G=15,K=1400,ce=1200,le=500,ue=.85,de=.18,fe=.12;function pe(e){return e<=28?3:e<=42?2:1}var me=10,he=15;function ge(e){let t=!1,n=0,i=0,a=G,s=0,c=0,l=new Set;e.innerHTML=`
    <div class="aimtrainer-panel">
      <h2 class="panel-title">🎯 Aim Trainer</h2>
      <div class="aim-hud">
        <span class="aim-hud__item">⏱ <span id="aim-timer">${G}</span>s</span>
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
  `;let u=e.querySelector(`#aim-field`),d=e.querySelector(`#aim-timer`),f=e.querySelector(`#aim-hits`),p=e.querySelector(`#aim-score`),m=e.querySelector(`#aim-start`),h=e.querySelector(`#aim-bet`),g=e.querySelector(`#aim-result`),_=e.querySelector(`#aim-bet-live`),v=e.querySelector(`#aim-bet-label`),y=e.querySelector(`#aim-hint`);e.querySelectorAll(`.bet-quick`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.dataset.pct||`100`),n=Math.floor(o.getState().bits);h.value=String(Math.max(1,Math.floor(n*t/100)))})});function b(){return Math.max(1,parseInt(h.value)||1)}function x(){if(!t)return;if(Math.random()<de){S();return}let e=document.createElement(`div`);e.className=`aim-target`;let r=18+Math.floor(Math.random()*39),a=pe(r);e.style.width=r+`px`,e.style.height=r+`px`,e.dataset.pts=String(a);let o=u.clientWidth-r-8,s=u.clientHeight-r-8;e.style.left=Math.max(4,Math.random()*o)+`px`,e.style.top=Math.max(4,Math.random()*s)+`px`,a===3?e.classList.add(`aim-target--small`):a===2&&e.classList.add(`aim-target--medium`),u.appendChild(e),l.add(e);let c=()=>{e.isConnected&&(e.remove(),l.delete(e))};e.addEventListener(`click`,r=>{if(r.stopPropagation(),!t)return;let a=Number(e.dataset.pts??1);n+=a,i++,f.textContent=String(i),p.textContent=String(n),e.classList.add(`aim-target--hit`),setTimeout(c,130);let o=document.createElement(`div`);o.className=`aim-floater`,o.textContent=`+${a}`,o.style.left=e.style.left,o.style.top=e.style.top,u.appendChild(o),setTimeout(()=>o.remove(),700)},{once:!0}),setTimeout(c,K)}function S(){if(!t)return;let e=document.createElement(`div`);e.className=`aim-target aim-target--bomb`;let n=32+Math.floor(Math.random()*16);e.style.width=n+`px`,e.style.height=n+`px`,e.textContent=`💣`;let r=u.clientWidth-n-8,i=u.clientHeight-n-8;e.style.left=Math.max(4,Math.random()*r)+`px`,e.style.top=Math.max(4,Math.random()*i)+`px`,u.appendChild(e),l.add(e);let a=()=>{e.isConnected&&(e.remove(),l.delete(e))};e.addEventListener(`click`,n=>{if(n.stopPropagation(),!t)return;let r=Math.max(1,parseInt(h.value)||1),i=Math.floor(r*fe);i>0&&o.setState(e=>{e.bits=Math.max(0,e.bits-i)}),e.classList.add(`aim-target--hit`),setTimeout(a,130);let s=document.createElement(`div`);s.className=`aim-floater aim-floater--bomb`,s.textContent=`💥 −${i}`,s.style.left=e.style.left,s.style.top=e.style.top,u.appendChild(s),setTimeout(()=>s.remove(),900)},{once:!0}),setTimeout(a,ce)}function C(e){t=!1,clearInterval(s),clearInterval(c),l.forEach(e=>e.remove()),l.clear(),_.style.display=`none`,y.style.display=`block`;let a=o.getModuleMultiplier(),u=Math.max(0,(n-me)/he),h=Math.floor(e*u*a),v=h-e;h>0&&o.setState(e=>{e.bits+=h,e.totalBitsEarned+=h}),g.style.display=`block`,u<=0?(g.className=`aim-result aim-result--lose`,g.textContent=`🎯 ${n} pts — Score trop bas ! Perdu ${r(e)} bits`):v>=0?(g.className=`aim-result aim-result--win`,g.textContent=`🎯 ${i} hits · ${n} pts → +${r(v)} bits nets`):(g.className=`aim-result aim-result--lose`,g.textContent=`🎯 ${i} hits · ${n} pts → −${r(Math.abs(v))} bits`),m.disabled=!1,m.textContent=`🎯 Rejouer`,d.textContent=String(G),f.textContent=`0`,p.textContent=`0`}return m.addEventListener(`click`,()=>{if(t)return;let e=b();if(o.getState().bits<e){g.style.display=`block`,g.className=`aim-result aim-result--lose`,g.textContent=`Bits insuffisants !`;return}o.setState(t=>{t.bits-=e}),t=!0,n=0,i=0,a=G,f.textContent=`0`,p.textContent=`0`,d.textContent=String(G),g.style.display=`none`,m.disabled=!0,v.textContent=r(e)+` bits`,_.style.display=``,y.style.display=`none`,s=window.setInterval(()=>{Math.random()<ue&&x()},le),c=window.setInterval(()=>{a--,d.textContent=String(a),a<=0&&C(e)},1e3)}),()=>{clearInterval(s),clearInterval(c),l.forEach(e=>e.remove())}}var _e=[[{id:`m_click_50`,label:`⚡ Cliqueur`,description:`Cliquer 50 fois`,target:50,reward:500,type:`clicks`},{id:`m_earn_1k`,label:`💰 Accumulateur`,description:`Gagner 1 000 bits`,target:1e3,reward:800,type:`bits_earned`},{id:`m_gen_3`,label:`🤖 Constructeur`,description:`Posséder 3 générateurs`,target:3,reward:600,type:`generators`}],[{id:`m_click_500`,label:`⚡ Cliqueur Pro`,description:`Cliquer 500 fois`,target:500,reward:5e3,type:`clicks`},{id:`m_earn_50k`,label:`💰 Investisseur`,description:`Gagner 50 000 bits`,target:5e4,reward:8e3,type:`bits_earned`},{id:`m_gen_20`,label:`🏭 Industriel`,description:`Posséder 20 générateurs`,target:20,reward:7500,type:`generators`}],[{id:`m_click_2k`,label:`⚡ Légende`,description:`Cliquer 2 000 fois`,target:2e3,reward:25e3,type:`clicks`},{id:`m_earn_1m`,label:`💰 Millionnaire`,description:`Gagner 1 000 000 bits`,target:1e6,reward:5e4,type:`bits_earned`},{id:`m_gen_50`,label:`🌐 Empire`,description:`Posséder 50 générateurs`,target:50,reward:4e4,type:`generators`}]];function q(){let e=new Date,t=String(e.getMonth()+1).padStart(2,`0`);return`${e.getFullYear()}-${t}-${e.getDate()}`}function ve(e,t){let n=t*2654435761;for(let t=0;t<e.length;t++)n=Math.imul(n^e.charCodeAt(t),2246822519);return n^=n>>>16,(n>>>0)/4294967296}function ye(){let e=q();return _e.map((t,n)=>({...t[Math.floor(ve(e,n)*t.length)]}))}var be=`bs_missions_v1`;function xe(e,t){try{let n=localStorage.getItem(be);if(n){let r=JSON.parse(n);if(r.lastSeed===q()){let n=Math.max(0,e-r.clicksAtStart),i=Math.max(0,t-r.bitsAtStart);return r.clicksDone+=n,r.bitsEarnedDone+=i,r.clicksAtStart=e,r.bitsAtStart=t,r}}}catch{}return{clicksAtStart:e,bitsAtStart:t,clicksDone:0,bitsEarnedDone:0,claimed:[],lastSeed:q()}}function J(e){localStorage.setItem(be,JSON.stringify(e))}function Se(e){let t=ye(),n=o.getState(),i=xe(n.totalClicks,n.totalBitsEarned),a=q();function s(e){let t=o.getState();switch(e.type){case`clicks`:return i.clicksDone+(t.totalClicks-i.clicksAtStart);case`bits_earned`:return i.bitsEarnedDone+(t.totalBitsEarned-i.bitsAtStart);case`generators`:return t.generators.reduce((e,t)=>e+t.owned,0)}}function c(e){if(i.claimed.includes(e))return;let n=t.find(t=>t.id===e);if(!n||s(n)<n.target)return;let r=o.getState();i.clicksDone+=r.totalClicks-i.clicksAtStart,i.bitsEarnedDone+=r.totalBitsEarned-i.bitsAtStart,i.clicksAtStart=r.totalClicks,i.bitsAtStart=r.totalBitsEarned,i.claimed.push(e),o.addBits(n.reward),J(i),l()}function l(){let n=e.querySelector(`.missions-list`);n&&(n.innerHTML=t.map(e=>{let t=Math.min(s(e),e.target),n=t/e.target*100,a=t>=e.target,o=i.claimed.includes(e.id);return`
        <div class="mission-card${o?` mission-card--claimed`:a?` mission-card--done`:``}">
          <div class="mission-card__header">
            <span class="mission-card__label">${e.label}</span>
            <span class="mission-card__reward mono">+${r(e.reward)}</span>
          </div>
          <div class="mission-card__desc">${e.description}</div>
          <div class="mission-progress">
            <div class="mission-progress__bar">
              <div class="mission-progress__fill" style="width:${n.toFixed(1)}%"></div>
            </div>
            <span class="mission-progress__text mono">${r(t)} / ${r(e.target)}</span>
          </div>
          ${o?`<div class="mission-claimed">✓ Réclamé</div>`:a?`<button class="mission-claim-btn" data-id="${e.id}">Réclamer</button>`:``}
        </div>
      `}).join(``),n.querySelectorAll(`.mission-claim-btn`).forEach(e=>{e.addEventListener(`click`,()=>c(e.dataset.id))}))}function u(){let e=new Date,t=new Date(e);t.setHours(24,0,0,0);let n=t.getTime()-e.getTime(),r=Math.floor(n/36e5),i=Math.floor(n%36e5/6e4);return`Reset dans ${String(r).padStart(2,`0`)}h${String(i).padStart(2,`0`)}`}e.innerHTML=`
    <div class="missions-panel">
      <div class="missions-header">
        <h2 class="panel-title" style="margin:0">Missions du jour</h2>
        <span class="missions-reset" id="missions-reset">${u()}</span>
      </div>
      <div class="missions-list"></div>
    </div>
  `;let d=window.setInterval(()=>{let n=e.querySelector(`#missions-reset`);n&&(n.textContent=u());let r=q();if(r!==a){a=r,t=ye();let e=o.getState();i={clicksAtStart:e.totalClicks,bitsAtStart:e.totalBitsEarned,clicksDone:0,bitsEarnedDone:0,claimed:[],lastSeed:r},J(i),l()}},6e4);l();let f=0,p=o.subscribe(()=>{clearTimeout(f),f=window.setTimeout(()=>{J(i),l()},500)});return()=>{p(),clearTimeout(f),clearInterval(d)}}var Ce=[{title:`🎯 Cible !`,instructions:`Clique 5 fois sur la cible !`,mount(e,t){let n=0;function r(){let i=document.createElement(`button`);i.className=`mg-target`;let a=Math.max(e.clientWidth-52,10),o=Math.max(e.clientHeight-52,10);i.style.left=Math.random()*a+`px`,i.style.top=Math.random()*o+`px`,e.appendChild(i),i.addEventListener(`click`,()=>{i.remove(),++n>=5?t():r()},{once:!0})}return r(),()=>e.querySelectorAll(`.mg-target`).forEach(e=>e.remove())}},{title:`⌨️ Séquence`,instructions:`Tape la séquence affichée.`,mount(e,t,n){let r=[`A`,`S`,`D`,`F`,`J`,`K`,`L`],i=Array.from({length:5},()=>r[Math.floor(Math.random()*r.length)]),a=0,o=document.createElement(`div`);o.className=`mg-sequence`,o.innerHTML=i.map((e,t)=>`<span class="mg-key" id="k${t}">${e}</span>`).join(``),e.appendChild(o);function s(e){e.key.toUpperCase()===i[a]?(o.querySelector(`#k${a}`)?.classList.add(`mg-key--hit`),++a>=i.length&&t()):n()}return window.addEventListener(`keydown`,s),()=>window.removeEventListener(`keydown`,s)}},{title:`🧮 Calcul rapide`,instructions:`Appuie sur la bonne réponse.`,mount(e,t,n){let r=Math.floor(Math.random()*20)+1,i=Math.floor(Math.random()*20)+1,a=r+i,o=new Set;for(;o.size<3;){let e=a+Math.floor(Math.random()*20)-10;e!==a&&e>0&&o.add(e)}let s=[...o,a].sort(()=>Math.random()-.5),c=document.createElement(`div`);return c.className=`mg-math`,c.innerHTML=`
      <div class="mg-math__question">${r} + ${i} = ?</div>
      <div class="mg-math__choices">
        ${s.map(e=>`<button class="mg-choice" data-val="${e}">${e}</button>`).join(``)}
      </div>
    `,e.appendChild(c),c.addEventListener(`click`,e=>{let r=e.target.closest(`[data-val]`);r&&(Number(r.dataset.val)===a?t():n())}),()=>{}}}];function we(){let t=0,n=null,a=null;function s(){let[n,r]=e.minigames.intervalRange;t=window.setTimeout(c,n+Math.random()*(r-n))}function c(){if(n)return;let e=Ce[Math.floor(Math.random()*Ce.length)];l(e)}function l(t){let c=document.createElement(`div`);c.className=`mg-card`;let l=e.minigames.durationMs/1e3,d=!1;c.innerHTML=`
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
    `,document.body.appendChild(c),n=c;let f=c.querySelector(`#mg-arena`),p=c.querySelector(`#mg-timer`),m=c.querySelector(`#mg-result`),h=c.querySelector(`#mg-close`),g=l,_=null,v=setInterval(()=>{g--,p.textContent=String(g),g<=0&&(clearInterval(v),b())},1e3);h.addEventListener(`click`,()=>{clearInterval(v),_!==null&&clearTimeout(_),a?.(),C(!1)});function y(){clearInterval(v),a?.(),u(),S(!0)}function b(){clearInterval(v),a?.(),x(),S(!1)}function x(){let t=Math.floor(o.getState().bits*e.minigames.lossPenaltyPct);t>0&&o.setState(e=>{e.bits=Math.max(0,e.bits-t)})}function S(t){f.style.display=`none`,m.style.display=`flex`;let n=o.getEffectiveBPS()*e.minigames.burstDurationSec*e.minigames.burstBpsMultiplier,a=Math.floor(o.getState().bits*e.minigames.lossPenaltyPct);m.innerHTML=t?`<div class="mg-result mg-result--win">
             <span>🎉 +${r(n)} bits !</span>
             <small>×${e.minigames.burstBpsMultiplier} BPS · ${i(e.minigames.burstDurationSec)}</small>
           </div>`:`<div class="mg-result mg-result--lose"><span>💀 Raté ! −${r(a)} bits</span></div>`,_=window.setTimeout(()=>C(!0),2200)}function C(e){if(d)return;d=!0,c.classList.add(`mg-card--out`);let t=!1,r=()=>{t||(t=!0,c.remove(),n=null,a=null,e&&s())};c.addEventListener(`animationend`,r,{once:!0}),window.setTimeout(r,400)}a=t.mount(f,y,b)}function u(){let t=o.getEffectiveBPS()*e.minigames.burstDurationSec*e.minigames.burstBpsMultiplier;o.setState(n=>{n.bits+=t,n.totalBitsEarned+=t,n.multipliers.minigame=e.minigames.burstBpsMultiplier,n.multipliers.minigameEndsAt=Date.now()+e.minigames.burstDurationSec*1e3})}return s(),()=>{clearTimeout(t),a?.(),n?.remove()}}var Te=[];function Ee(){let e=o.getCurrentPhase(),t=o.subscribe(()=>{let t=o.getCurrentPhase();t>e&&(e=t,o.setState(e=>{e.lastPhase=t}),De(t),Te.forEach(e=>e(t)))});return()=>t()}function De(t){let n=e.phases.find(e=>e.id===t);if(!n)return;let r=n.unlocks.length>0?`<div class="phase-notif__unlocks">New: ${n.unlocks.map(e=>`<strong>${e}</strong>`).join(`, `)}</div>`:``,i=document.createElement(`div`);i.className=`phase-notif`,i.innerHTML=`
    <div class="phase-notif__badge">Phase ${t}</div>
    <div class="phase-notif__title">${n.title}</div>
    <div class="phase-notif__narrative">${n.narrative}</div>
    ${r}
  `,document.body.appendChild(i);let a=()=>{i.classList.add(`phase-notif--out`),i.addEventListener(`animationend`,()=>i.remove(),{once:!0})};i.addEventListener(`click`,a),setTimeout(a,6e3)}var Y=0;function Oe(t){if(!t.clientId||!t.channelName)return()=>{};o.setState(e=>{e.twitch.channelName=t.channelName});async function n(){try{let e=`https://api.twitch.tv/helix/streams?user_login=${encodeURIComponent(t.channelName)}`,n=await fetch(e,{headers:{"Client-ID":t.clientId,Authorization:`Bearer ${window.__TWITCH_TOKEN__??``}`}});if(!n.ok){console.warn(`[Twitch] API responded with`,n.status);return}let r=(await n.json()).data[0],i=!!r;o.setTwitchLive(i,{title:r?.title??``,game:r?.game_name??``})}catch(e){console.warn(`[Twitch] Poll failed:`,e)}}return n(),Y=window.setInterval(n,e.twitch.pollIntervalMs),()=>clearInterval(Y)}function ke(e){function t(){let{twitch:t,multipliers:n}=o.getState();if(!t.channelName){e.style.display=`none`;return}e.style.display=`flex`,t.isLive?e.innerHTML=`
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
      `}let n=o.subscribe(t);return t(),()=>n()}var Ae={en:{"stat.total_earned":`Total earned`,"stat.bps":`BPS`,"stat.bpc":`BPC`,"stat.global_multi":`Global ×`,"stat.burst":`⚡ BURST`,"stat.phase":`Phase`,"phase.1":`I — Garage Hacker`,"phase.2":`II — Script Kiddie`,"phase.3":`III — Digital Nomad`,"phase.4":`IV — AI Engineer`,"phase.5":`V — Quantum Singularity`,"clicker.click":`Click`,"clicker.combo":`Combo ×`,"production.bps_label":`BPS`,"production.owned":`Owned`,"production.buy":`Buy`,"production.buy_bulk":`Buy ×10`,"gen.bit_miner":`Bit Miner`,"gen.bit_miner_desc":`A basic script that mines bits slowly.`,"gen.script_farm":`Script Farm`,"gen.script_farm_desc":`Runs scripts in parallel, faster than manual mining.`,"gen.bot_network":`Bot Network`,"gen.bot_network_desc":`Distributed bots harvest bits from multiple sources.`,"gen.data_center":`Data Center`,"gen.data_center_desc":`Industrial-scale bit production.`,"gen.ai_cluster":`AI Cluster`,"gen.ai_cluster_desc":`Cutting-edge AI optimizes bit extraction.`,"gen.quantum_farm":`Quantum Farm`,"gen.quantum_farm_desc":`Harnesses quantum tunneling for bits.`,"project.market_access":`Market Access`,"project.market_access_desc":`Unlocks the Trade module.`,"project.casino_charter":`Casino Charter`,"project.casino_charter_desc":`Unlocks the Casino module.`,"project.aim_protocol":`Precision Protocol`,"project.aim_protocol_desc":`Unlocks the Aim Trainer module.`,"project.bomb_defuser":`Bomb Defuser`,"project.bomb_defuser_desc":`Reduces bomb frequency in the clicker by 50%.`,"project.neural_overclock":`Neural Overclock`,"project.neural_overclock_desc":`All generators produce ×1.5 permanently.`,"project.launch_protocol":`Launch Protocol`,"project.launch_protocol_desc":`Initiates the final sequence.`,"casino.title":`🎰 Casino`,"casino.safe_bet":`Safe Bet`,"casino.safe_bet_desc":`100 Bits → ×1.25 multiplier`,"casino.risky_bet":`Risky Bet`,"casino.risky_bet_desc":`500 Bits → ×2.0 multiplier`,"casino.extreme_bet":`Extreme Bet`,"casino.extreme_bet_desc":`2000 Bits → ×5.0 multiplier`,"casino.insufficient_bits":`Insufficient Bits`,"casino.bet":`Bet`,"casino.win":`🎉 You win!`,"casino.lose":`💀 You lose!`,"trade.title":`📈 Trade`,"trade.sell":`Sell`,"trade.current_price":`Current Price`,"trade.insufficient_units":`No units to sell`,"puzzle.title":`🧩 Puzzle`,"puzzle.score":`Score`,"puzzle.claim":`Claim`,"puzzle.claiming":`Claiming...`,"minigame.click_target":`🎯 Click the Target`,"minigame.click_target_instructions":`Click the glowing target 5 times.`,"minigame.key_sequence":`⌨️ Key Sequence`,"minigame.key_sequence_instructions":`Type the sequence shown.`,"minigame.quick_math":`🧮 Quick Math`,"minigame.quick_math_instructions":`Tap the correct answer.`,"minigame.win_reward":`🎉 +{reward} bits!`,"minigame.win_info":`×{multiplier} BPS · {duration}`,"minigame.lose":`💀 Too slow!`,"button.buy":`Buy`,"button.close":`Close`,"button.skip":`Skip`,"button.sell":`Sell`,"button.play":`Play`,"button.claim":`Claim`,"twitch.live":`🔴 LIVE +50%`,"twitch.offline":`Twitch`,"header.title":`BitStream`,"leaderboard.title":`🏆 Leaderboard`,"leaderboard.rank":`Rank`,"leaderboard.player":`Player`,"leaderboard.bits":`Bits`,"leaderboard.you":`(You)`,"leaderboard.enter_name":`Enter your name`},fr:{"stat.total_earned":`Total gagné`,"stat.bps":`BPS`,"stat.bpc":`BPC`,"stat.global_multi":`Multiplicateur`,"stat.burst":`⚡ BURST`,"stat.phase":`Phase`,"phase.1":`I — Pirate Garage`,"phase.2":`II — Script Kiddie`,"phase.3":`III — Nomade Digital`,"phase.4":`IV — Ingénieur IA`,"phase.5":`V — Singularité Quantique`,"clicker.click":`Cliquer`,"clicker.combo":`Combo ×`,"production.bps_label":`BPS`,"production.owned":`Possédé`,"production.buy":`Acheter`,"production.buy_bulk":`Acheter ×10`,"gen.bit_miner":`Mineur de Bits`,"gen.bit_miner_desc":`Un script basique qui extrait les bits lentement.`,"gen.script_farm":`Ferme de Scripts`,"gen.script_farm_desc":`Exécute des scripts en parallèle, plus rapide que l'extraction manuelle.`,"gen.bot_network":`Réseau de Bots`,"gen.bot_network_desc":`Des bots distribués récoltent les bits de plusieurs sources.`,"gen.data_center":`Centre de Données`,"gen.data_center_desc":`Production de bits à l'échelle industrielle.`,"gen.ai_cluster":`Cluster IA`,"gen.ai_cluster_desc":`L'IA de pointe optimise l'extraction de bits.`,"gen.quantum_farm":`Ferme Quantique`,"gen.quantum_farm_desc":`Exploite l'effet tunnel quantique pour les bits.`,"project.market_access":`Accès au Marché`,"project.market_access_desc":`Déverrouille le module Commerce.`,"project.casino_charter":`Charte du Casino`,"project.casino_charter_desc":`Déverrouille le module Casino.`,"project.aim_protocol":`Protocole de Précision`,"project.aim_protocol_desc":`Déverrouille l'Aim Trainer.`,"project.bomb_defuser":`Désamorceur de Bombes`,"project.bomb_defuser_desc":`Réduit la fréquence des bombes dans le clicker de 50%.`,"project.neural_overclock":`Surclocking Neuronal`,"project.neural_overclock_desc":`Tous les générateurs produisent ×1.5 de façon permanente.`,"project.launch_protocol":`Protocole de Lancement`,"project.launch_protocol_desc":`Initie la séquence finale.`,"casino.title":`🎰 Casino`,"casino.safe_bet":`Pari Sûr`,"casino.safe_bet_desc":`100 Bits → ×1.25 multiplicateur`,"casino.risky_bet":`Pari Risqué`,"casino.risky_bet_desc":`500 Bits → ×2.0 multiplicateur`,"casino.extreme_bet":`Pari Extrême`,"casino.extreme_bet_desc":`2000 Bits → ×5.0 multiplicateur`,"casino.insufficient_bits":`Bits insuffisants`,"casino.bet":`Parier`,"casino.win":`🎉 Vous gagnez!`,"casino.lose":`💀 Vous perdez!`,"trade.title":`📈 Commerce`,"trade.sell":`Vendre`,"trade.current_price":`Prix Actuel`,"trade.insufficient_units":`Aucune unité à vendre`,"puzzle.title":`🧩 Puzzle`,"puzzle.score":`Score`,"puzzle.claim":`Réclamer`,"puzzle.claiming":`Réclamation...`,"minigame.click_target":`🎯 Cliquez la Cible`,"minigame.click_target_instructions":`Cliquez la cible brillante 5 fois.`,"minigame.key_sequence":`⌨️ Séquence de Touches`,"minigame.key_sequence_instructions":`Tapez la séquence affichée.`,"minigame.quick_math":`🧮 Mathématiques Rapides`,"minigame.quick_math_instructions":`Appuyez sur la bonne réponse.`,"minigame.win_reward":`🎉 +{reward} bits!`,"minigame.win_info":`×{multiplier} BPS · {duration}`,"minigame.lose":`💀 Trop lent!`,"button.buy":`Acheter`,"button.close":`Fermer`,"button.skip":`Passer`,"button.sell":`Vendre`,"button.play":`Jouer`,"button.claim":`Réclamer`,"twitch.live":`🔴 EN DIRECT +50%`,"twitch.offline":`Twitch`,"header.title":`BitStream`,"leaderboard.title":`🏆 Classement`,"leaderboard.rank":`Rang`,"leaderboard.player":`Joueur`,"leaderboard.bits":`Bits`,"leaderboard.you":`(Vous)`,"leaderboard.enter_name":`Entrez votre nom`}},X=`fr`;function je(e){X=e.getLanguage(),e.subscribe(()=>{X=e.getLanguage()})}function Z(e,t){let n=Ae[X][e]||e;return t&&Object.entries(t).forEach(([e,t])=>{n=n.replace(RegExp(`\\{${e}\\}`,`g`),String(t))}),n}function Me(t,n={}){je(o),t.innerHTML=`
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
  `,ne(t.querySelector(`#hdr`)),re(t.querySelector(`#clicker-slot`)),N(t.querySelector(`#prod-slot`)),ie(t.querySelector(`#projects-slot`)),Se(t.querySelector(`#missions-slot`)),te(t.querySelector(`#leaderboard-slot`)),we(),Ee(),n.twitchClientId&&n.twitchChannel&&Oe({clientId:n.twitchClientId,channelName:n.twitchChannel});let i=document.querySelector(`#twitch-badge-slot`);i&&ke(i);let a=t.querySelector(`#casino-slot`),s=t.querySelector(`#aimtrainer-slot`),c=!1,l=!1;function u(){let e=o.getState();!c&&e.projects.find(e=>e.id===`protocole_casino`)?.purchased&&(a.style.display=``,W(a),c=!0),!l&&e.projects.find(e=>e.id===`protocole_precision`)?.purchased&&(s.style.display=``,ge(s),l=!0)}o.subscribe(u),u();let d=t.querySelector(`#stat-total`),f=t.querySelector(`#stat-bps`),p=t.querySelector(`#stat-bpc`),m=t.querySelector(`#stat-multi`),h=t.querySelector(`#burst-row`),g=t.querySelector(`#stat-burst`),_=t.querySelector(`#stat-phase`),v=t.querySelector(`#label-total`),y=t.querySelector(`#label-bps`),b=t.querySelector(`#label-bpc`),x=t.querySelector(`#label-multi`),S=t.querySelector(`#label-burst`),C=t.querySelector(`#label-phase`),w=[``,`I`,`II`,`III`,`IV`,`V`];function T(){v.textContent=Z(`stat.total_earned`),y.textContent=Z(`stat.bps`),b.textContent=Z(`stat.bpc`),x.textContent=Z(`stat.global_multi`),S.textContent=Z(`stat.burst`),C.textContent=Z(`stat.phase`)}function E(){let t=o.getState(),n=t.multipliers,i=o.getCurrentPhase(),a=e.phases.find(e=>e.id===i);d.textContent=r(t.totalBitsEarned),f.textContent=r(o.getEffectiveBPS())+` b/s`,p.textContent=r(o.getEffectiveBPC())+` /click`,_.textContent=`${w[i]} — ${a.title}`,m.textContent=r(o.getPassiveMultiplier())+`×`;let s=o.isMinigameActive();if(h.style.display=s?`flex`:`none`,s){let e=Math.max(0,Math.ceil((n.minigameEndsAt-Date.now())/1e3));g.textContent=`×${n.minigame} · ${e}s`}}T(),o.subscribe(T),o.subscribe(E),E(),window.store=o}var Q=0;function Ne(e){Q===0&&(Q=e);let t=Math.min((e-Q)/1e3,1);Q=e;let n=o.getEffectiveBPS();n>0&&o.addBits(n*t),requestAnimationFrame(Ne)}function Pe(){Q=0,requestAnimationFrame(Ne)}function Fe(e){let t=document.createElement(`div`);t.className=`mg-overlay`,t.innerHTML=`
    <div class="mg-modal offline-modal" role="dialog" aria-modal="true">
      <div class="offline-modal__icon">💤</div>
      <h2 class="offline-modal__title">Welcome back!</h2>
      <p class="offline-modal__desc">
        While you were away for <strong>${i(e.seconds)}</strong>,<br/>
        your generators earned
      </p>
      <div class="offline-modal__amount mono">+${r(e.bitsEarned)} bits</div>
      <button class="upg-btn offline-modal__btn" id="offline-close">Claim & Continue</button>
    </div>
  `,document.body.appendChild(t),t.querySelector(`#offline-close`).addEventListener(`click`,()=>{t.classList.add(`mg-overlay--out`),t.addEventListener(`animationend`,()=>t.remove(),{once:!0})})}function Ie(){if(D())return;let e=document.createElement(`div`);e.className=`username-modal-overlay`,e.innerHTML=`
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
  `,document.body.appendChild(e);let t=e.querySelector(`#username-input`),n=e.querySelector(`#username-confirm`),r=e.querySelector(`#username-error`);requestAnimationFrame(()=>t.focus());function i(){let n=t.value.trim();if(n.length<2){r.textContent=`Pseudo trop court (2 caractères minimum).`,t.classList.add(`username-modal__input--error`);return}ee(n),e.classList.add(`username-modal-overlay--out`),e.addEventListener(`animationend`,()=>e.remove(),{once:!0}),setTimeout(()=>e.remove(),400),g()&&y(n,0).catch(()=>{})}n.addEventListener(`click`,i),t.addEventListener(`keydown`,e=>{e.key===`Enter`&&i(),r.textContent=``,t.classList.remove(`username-modal__input--error`)})}window.__TWITCH_TOKEN__=``;var Le=document.getElementById(`app`);d();var $=l();Me(Le,{twitchClientId:`73u1zjxog6q27ehere4n1exf2ke5pv`,twitchChannel:`cireericfr`}),Pe(),p(),requestAnimationFrame(()=>{Ie(),$&&$.bitsEarned>1&&Fe($)});