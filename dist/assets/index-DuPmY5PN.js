(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={clicker:{baseBitsPerClick:1,comboWindowMs:500,maxComboMultiplier:6,clicksToMaxCombo:20,comboDecayMs:1200,cpsLimit:6},generators:[{id:`bit_miner`,name:`Mineur de Bits`,description:`Un script basique qui extrait les bits lentement.`,emoji:`⛏️`,baseCost:25,growthRate:1.15,baseBps:.1,unlockAt:0,milestones:[{owned:10,multiplier:2},{owned:25,multiplier:3},{owned:50,multiplier:5},{owned:100,multiplier:10}]},{id:`packet_router`,name:`Routeur de Paquets`,description:`Achemine des paquets réseau contre rémunération.`,emoji:`📡`,baseCost:160,growthRate:1.15,baseBps:.55,unlockAt:80,milestones:[{owned:10,multiplier:2},{owned:25,multiplier:3},{owned:50,multiplier:5},{owned:100,multiplier:10}]},{id:`data_farm`,name:`Ferme de Données`,description:`Une ferme de bots générateurs de bits.`,emoji:`🌾`,baseCost:900,growthRate:1.15,baseBps:3,unlockAt:500,milestones:[{owned:10,multiplier:2},{owned:25,multiplier:3},{owned:50,multiplier:5},{owned:100,multiplier:10}]},{id:`neural_net`,name:`Réseau Neuronal`,description:`Réseau auto-optimisé de génération de bits.`,emoji:`🧠`,baseCost:5500,growthRate:1.15,baseBps:16,unlockAt:3e3,milestones:[{owned:10,multiplier:2},{owned:25,multiplier:3},{owned:50,multiplier:5},{owned:100,multiplier:10}]},{id:`quantum_rig`,name:`Rig Quantique`,description:`Récolte de bits par intrication quantique.`,emoji:`⚛️`,baseCost:35e3,growthRate:1.15,baseBps:90,unlockAt:22e3,milestones:[{owned:10,multiplier:2},{owned:25,multiplier:3},{owned:50,multiplier:5},{owned:100,multiplier:10}]},{id:`bit_singularity`,name:`Singularité de Bits`,description:`Un trou noir qui convertit la matière en bits.`,emoji:`🕳️`,baseCost:28e4,growthRate:1.15,baseBps:640,unlockAt:18e4,milestones:[{owned:10,multiplier:2},{owned:25,multiplier:3},{owned:50,multiplier:5},{owned:100,multiplier:10}]},{id:`warp_core`,name:`Noyau de Distorsion`,description:`Courbe l'espace-temps pour accélérer la production.`,emoji:`🌀`,baseCost:5e6,growthRate:1.15,baseBps:1500,unlockAt:35e5,milestones:[{owned:10,multiplier:2},{owned:25,multiplier:3},{owned:50,multiplier:5},{owned:100,multiplier:10}]},{id:`dimensional_tap`,name:`Robinet Dimensionnel`,description:`Siphonne l'énergie des dimensions parallèles.`,emoji:`🔮`,baseCost:1e8,growthRate:1.15,baseBps:2e4,unlockAt:65e6,milestones:[{owned:10,multiplier:2},{owned:25,multiplier:3},{owned:50,multiplier:5},{owned:100,multiplier:10}]},{id:`reality_engine`,name:`Moteur de Réalité`,description:`Redéfinit les constantes physiques pour un rendement maximal.`,emoji:`🌌`,baseCost:25e8,growthRate:1.15,baseBps:35e4,unlockAt:15e8,milestones:[{owned:10,multiplier:2},{owned:25,multiplier:3},{owned:50,multiplier:5},{owned:100,multiplier:10}]},{id:`the_omnibus`,name:`L'Omnibus`,description:`Un hypercalculateur incompréhensible. Fait tout tourner.`,emoji:`♾️`,baseCost:9e10,growthRate:1.15,baseBps:1e7,unlockAt:6e10,milestones:[{owned:10,multiplier:2},{owned:25,multiplier:3},{owned:50,multiplier:5},{owned:100,multiplier:10}]}],projects:[{id:`overclock_initial`,name:`Overclock Initial`,description:`Optimise les scripts de base. Tous les générateurs +25% de production.`,category:`production`,cost:400,unlockAt:250,phase:1,effect:{bpsBonus:.25},requires:[]},{id:`combo_amplifie`,name:`Combo Amplifié`,description:`Entraîne les réflexes du streamer. Combo maximum passe de 6× à 10×.`,category:`production`,cost:2500,unlockAt:2e3,phase:1,effect:{maxCombo:10},requires:[]},{id:`marche_libre`,name:`Marché Libre`,description:`Déverrouille la vente de générateurs au prix du marché (50% du coût actuel).`,category:`module`,cost:12e3,unlockAt:9e3,phase:2,effect:{unlocks:`trade`},requires:[]},{id:`protocole_casino`,name:`Protocole Casino`,description:`Déverrouille le Casino. Mises libres, high risk / high reward.`,category:`module`,cost:28e3,unlockAt:2e4,phase:2,effect:{unlocks:`casino`},requires:[]},{id:`compression_reseau`,name:`Compression Réseau`,description:`Optimise les flux de données. Production passive +40%.`,category:`production`,cost:5e4,unlockAt:4e4,phase:2,effect:{bpsBonus:.4},requires:[]},{id:`protocole_arcade`,name:`Protocole Arcade`,description:`Déverrouille le mini-jeu Flappy Bit. Score = bits gagnés × moduleMultiplier.`,category:`module`,cost:65e3,unlockAt:45e3,phase:2,effect:{unlocks:`flappy`},requires:[]},{id:`interface_clicker`,name:`Interface Clicker Pro`,description:`Améliore la détection de clics. Bits par clic +60%.`,category:`production`,cost:12e4,unlockAt:1e5,phase:3,effect:{clickBonus:.6},requires:[]},{id:`protocole_precision`,name:`Protocole de Précision`,description:`Déverrouille l'Aim Trainer. Misez et visez pour gagner gros.`,category:`module`,cost:2e5,unlockAt:15e4,phase:3,effect:{unlocks:`aimtrainer`},requires:[]},{id:`module_boost_init`,name:`Amplificateur de Gains`,description:`Booste les récompenses des modules actifs. Casino & Aim Trainer +30%.`,category:`module`,cost:6e5,unlockAt:4e5,phase:3,effect:{moduleBonus:.3},requires:[]},{id:`amplification_neurale`,name:`Amplification Neurale`,description:`Réseau neuronal dédié à la production. Tous les générateurs +80%.`,category:`production`,cost:9e5,unlockAt:7e5,phase:3,effect:{bpsBonus:.8},requires:[]},{id:`reseau_quantique`,name:`Réseau Quantique`,description:`Intrication quantique des nœuds de production. Générateurs +120%.`,category:`production`,cost:4e6,unlockAt:3e6,phase:4,effect:{bpsBonus:1.2},requires:[]},{id:`acceleration_globale`,name:`Accélération Globale`,description:`Synchronise tous les systèmes. TOUS les gains +100%.`,category:`global`,cost:2e7,unlockAt:15e6,phase:4,effect:{globalBonus:1},requires:[]},{id:`singularite`,name:`Singularité de Production`,description:`Atteint le seuil de singularité computationnelle. Générateurs +200%.`,category:`production`,cost:1e8,unlockAt:8e7,phase:5,effect:{bpsBonus:2},requires:[]},{id:`protocole_omega`,name:`Protocole Oméga`,description:`Réécrit les règles du jeu. Modules +100%, tous les gains +75%.`,category:`global`,cost:25e7,unlockAt:2e8,phase:5,effect:{moduleBonus:1,globalBonus:.75},requires:[]},{id:`endgame_protocol`,name:`🚀 LANCER LE PROTOCOLE`,description:`Déploie BitStream sur tous les nœuds de la Terre. Condition de victoire.`,category:`endgame`,cost:2e9,unlockAt:2e9,phase:5,effect:{endgame:!0},requires:[`marche_libre`,`protocole_casino`,`protocole_precision`]},{id:`expansion_galactique`,name:`🌌 Expansion Galactique`,description:`BitStream s'étend au-delà de la Terre. Tous les gains +200%.`,category:`endgame`,cost:1e10,unlockAt:5e9,phase:5,effect:{globalBonus:2},requires:[`endgame_protocol`]},{id:`singularite_finale`,name:`♾️ Singularité Finale`,description:`Le réseau devient conscient. Modules +200%, générateurs +400%.`,category:`endgame`,cost:1e11,unlockAt:5e10,phase:5,effect:{moduleBonus:2,bpsBonus:4},requires:[`expansion_galactique`]}],phases:[{id:1,threshold:0,title:`Garage Hacker`,narrative:`Tu codes dans ta chambre. Le stream démarre pour la première fois.`,unlocks:[`clicker`,`generators`,`projects`,`minigames`]},{id:2,threshold:5e3,title:`Going Online`,narrative:`Tes scripts se répandent. Une communauté se forme.`,unlocks:[]},{id:3,threshold:12e4,title:`Corporate Attention`,narrative:`Une startup veut te financer. Le casino ouvre ses portes.`,unlocks:[]},{id:4,threshold:3e6,title:`Enterprise Scale`,narrative:`BitStream devient une plateforme. Des milliers de nœuds sont en ligne.`,unlocks:[]},{id:5,threshold:75e6,title:`Quantum Era`,narrative:`Les serveurs quantiques s'activent. Le réseau transcende le calcul classique.`,unlocks:[]}],minigames:{intervalRange:[15e4,36e4],durationMs:15e3,burstDurationSec:20,burstBpsMultiplier:4,lossPenaltyPct:.02},offline:{maxOfflineMs:480*60*1e3,efficiency:.08},twitch:{liveMultiplier:1.5,pollIntervalMs:120*1e3},save:{intervalMs:1e4},modules:{aimtrainer:{gameDuration:15,targetLifetime:1400,bombLifetime:1200,spawnInterval:500,spawnChance:.85,bombChance:.18,bombBetLoss:.12,scoreThreshold:10,scoreDivisor:15},casino:{streakThreshold:3,streakBonus:.1,streakDuration:3e4}}};function t(e,t,n){return Math.floor(e*t**+n)}function n(e,t,n,r){return Math.floor(e*t**+n*(t**+r-1)/(t-1))}function r(e,t){let n=1;for(let r of e)t>=r.owned&&(n=r.multiplier);return n}function i(e){return!isFinite(e)||e<0?`0`:e>=1e33?(e/1e33).toFixed(2)+` Dc`:e>=1e30?(e/1e30).toFixed(2)+` No`:e>=1e27?(e/1e27).toFixed(2)+` Oc`:e>=1e24?(e/1e24).toFixed(2)+` Sp`:e>=1e21?(e/1e21).toFixed(2)+` Sx`:e>=0xde0b6b3a7640000?(e/0xde0b6b3a7640000).toFixed(2)+` Qi`:e>=0x38d7ea4c68000?(e/0x38d7ea4c68000).toFixed(2)+` Qa`:e>=0xe8d4a51000?(e/0xe8d4a51000).toFixed(2)+` T`:e>=1e9?(e/1e9).toFixed(2)+` B`:e>=1e6?(e/1e6).toFixed(2)+` M`:e>=1e3?(e/1e3).toFixed(2)+` K`:e>=10?Math.floor(e).toString():e>=1?e.toFixed(1):e>0?e.toFixed(2):`0`}function a(e){let t=Math.floor(e/3600),n=Math.floor(e%3600/60),r=Math.floor(e%60);return t>0?`${t}h ${n}m`:n>0?`${n}m ${r}s`:`${r}s`}var o=[{id:`first_click`,name:`Premier Clic`,description:`Le voyage commence.`,reward:5,condition:{type:`totalClicks`,value:1}},{id:`click_100`,name:`Cliqueur`,description:`100 clics réalisés.`,reward:100,condition:{type:`totalClicks`,value:100}},{id:`click_1000`,name:`Hypercliqueur`,description:`1 000 clics réalisés.`,reward:1e3,condition:{type:`totalClicks`,value:1e3}},{id:`click_10000`,name:`Machine à Cliquer`,description:`10 000 clics réalisés.`,reward:1e4,condition:{type:`totalClicks`,value:1e4}},{id:`earned_1k`,name:`1K Bits`,description:`1 000 bits gagnés au total.`,reward:200,condition:{type:`totalBitsEarned`,value:1e3}},{id:`earned_100k`,name:`100K Club`,description:`100 000 bits gagnés.`,reward:1e4,condition:{type:`totalBitsEarned`,value:1e5}},{id:`earned_10m`,name:`Dizaine de Millions`,description:`10 millions de bits gagnés.`,reward:5e5,condition:{type:`totalBitsEarned`,value:1e7}},{id:`earned_1b`,name:`Milliardaire`,description:`1 milliard de bits gagnés.`,reward:2e7,condition:{type:`totalBitsEarned`,value:1e9}},{id:`first_gen`,name:`Premier Automate`,description:`Achète ton premier générateur.`,reward:30,condition:{type:`generatorsOwned`,value:1}},{id:`gen_10`,name:`Réseau Naissant`,description:`10 générateurs au total.`,reward:2e3,condition:{type:`generatorsOwned`,value:10}},{id:`gen_50`,name:`Méga Ferme`,description:`50 générateurs au total.`,reward:1e5,condition:{type:`generatorsOwned`,value:50}},{id:`first_project`,name:`R&D Initiée`,description:`Premier projet acheté.`,reward:200,condition:{type:`projectsPurchased`,value:1}},{id:`projects_5`,name:`Chercheur`,description:`5 projets complétés.`,reward:2e4,condition:{type:`projectsPurchased`,value:5}},{id:`phase_2`,name:`Going Online`,description:`Phase 2 atteinte.`,reward:2e3,condition:{type:`phase`,value:2}},{id:`phase_3`,name:`Corporate Attention`,description:`Phase 3 atteinte.`,reward:3e4,condition:{type:`phase`,value:3}},{id:`phase_4`,name:`Enterprise Scale`,description:`Phase 4 atteinte.`,reward:5e5,condition:{type:`phase`,value:4}},{id:`phase_5`,name:`Quantum Era`,description:`Phase 5 atteinte.`,reward:5e6,condition:{type:`phase`,value:5}},{id:`all_projects`,name:`Maître Architecte`,description:`Tous les projets complétés.`,reward:1e8,condition:{type:`projectsPurchased`,value:15}},{id:`earned_10b`,name:`Au-delà du Protocole`,description:`10 milliards de bits gagnés.`,reward:2e8,condition:{type:`totalBitsEarned`,value:1e10}},{id:`earned_100b`,name:`Transcendance`,description:`100 milliards de bits gagnés.`,reward:2e9,condition:{type:`totalBitsEarned`,value:1e11}}];function s(){return{bits:0,totalBitsEarned:0,totalClicks:0,clicker:{comboCount:0,comboMultiplier:1,lastClickTime:0},generators:e.generators.map(e=>({id:e.id,owned:0})),projects:e.projects.map(e=>({id:e.id,purchased:!1})),multipliers:{bpsBonus:0,clickBonus:0,globalBonus:0,moduleBonus:0,maxComboOverride:0,twitch:1,minigame:1,minigameEndsAt:0},twitch:{isLive:!1,streamTitle:``,gameName:``,lastChecked:0,channelName:``},achievements:[],lastPhase:1,lastSaveTime:Date.now(),lastTickTime:Date.now(),language:`fr`}}var c=new class{state=s();listeners=new Set;checkingAchievements=!1;achSnapshot={totalClicks:-1,totalBitsEarned:-1,generatorsOwned:-1,projectsPurchased:-1,phase:-1};getState(){return this.state}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notify(){this.listeners.forEach(e=>e()),this.checkAchievements()}checkAchievements(){if(this.checkingAchievements||this.state.achievements.length>=o.length)return;let e=this.state,t=e.generators.reduce((e,t)=>e+t.owned,0),n=e.projects.filter(e=>e.purchased).length,r=this.getCurrentPhase(),i=this.achSnapshot;if(e.totalClicks===i.totalClicks&&e.totalBitsEarned===i.totalBitsEarned&&t===i.generatorsOwned&&n===i.projectsPurchased&&r===i.phase)return;i.totalClicks=e.totalClicks,i.totalBitsEarned=e.totalBitsEarned,i.generatorsOwned=t,i.projectsPurchased=n,i.phase=r,this.checkingAchievements=!0;let a=!1;for(let i of o){if(e.achievements.includes(i.id))continue;let o=i.condition,s=!1;switch(o.type){case`totalClicks`:s=e.totalClicks>=o.value;break;case`totalBitsEarned`:s=e.totalBitsEarned>=o.value;break;case`generatorsOwned`:s=t>=o.value;break;case`projectsPurchased`:s=n>=o.value;break;case`phase`:s=r>=o.value;break}s&&(e.achievements.push(i.id),e.bits+=i.reward,e.totalBitsEarned+=i.reward,document.dispatchEvent(new CustomEvent(`bitstream:achievement`,{detail:i})),a=!0)}this.checkingAchievements=!1,a&&this.listeners.forEach(e=>e())}setState(e){e(this.state),this.notify()}addBits(e){this.state.bits+=e,this.state.totalBitsEarned+=e,this.notify()}incrementClicks(){this.state.totalClicks+=1}spendBits(e){return this.state.bits<e?!1:(this.state.bits-=e,this.notify(),!0)}isMinigameActive(){return Date.now()<this.state.multipliers.minigameEndsAt}getPassiveMultiplier(){let e=this.state.multipliers;return(1+e.bpsBonus+e.globalBonus)*e.twitch*(this.isMinigameActive()?e.minigame:1)}getClickMultiplier(){let e=this.state.multipliers;return(1+e.clickBonus+e.globalBonus)*this.state.clicker.comboMultiplier*e.twitch*(this.isMinigameActive()?e.minigame:1)}getModuleMultiplier(){let e=this.state.multipliers;return 1+e.moduleBonus+e.globalBonus}getRawBPS(){let t=0;for(let n of e.generators){let e=this.state.generators.find(e=>e.id===n.id);if(e&&e.owned>0){let i=r(n.milestones,e.owned);t+=e.owned*n.baseBps*i}}return t}getEffectiveBPS(){return this.getRawBPS()*this.getPassiveMultiplier()}getEffectiveBPC(){return e.clicker.baseBitsPerClick*this.getClickMultiplier()}getMaxCombo(){let t=this.state.multipliers.maxComboOverride;return t>0?t:e.clicker.maxComboMultiplier}getOfflineCapMs(){return e.offline.maxOfflineMs}getCurrentPhase(){let t=this.state.totalBitsEarned,n=1;for(let r of e.phases)t>=r.threshold&&(n=r.id);return n}getCost(n){let r=e.generators.find(e=>e.id===n),i=this.state.generators.find(e=>e.id===n);return!r||!i?1/0:t(r.baseCost,r.growthRate,i.owned)}buyGenerator(e){let t=this.getCost(e);return this.state.bits<t?!1:(this.setState(n=>{n.bits-=t,n.generators.find(t=>t.id===e).owned+=1}),!0)}bulkBuyGenerator(t,r){let i=e.generators.find(e=>e.id===t),a=this.state.generators.find(e=>e.id===t);if(!i||!a)return!1;let o=n(i.baseCost,i.growthRate,a.owned,r);return this.state.bits<o?!1:(this.setState(e=>{e.bits-=o,e.generators.find(e=>e.id===t).owned+=r}),!0)}purchaseProject(t){let n=e.projects.find(e=>e.id===t),r=this.state.projects.find(e=>e.id===t);if(!n||!r||r.purchased||this.state.bits<n.cost||this.state.totalBitsEarned<n.unlockAt||this.getCurrentPhase()<n.phase)return!1;for(let e of n.requires)if(!this.state.projects.find(t=>t.id===e)?.purchased)return!1;return this.setState(e=>{e.bits-=n.cost,e.projects.find(e=>e.id===t).purchased=!0,this.recomputeMultipliers(e)}),!0}recomputeMultipliers(t){let n=0,r=0,i=0,a=0,o=0;for(let s of e.projects){if(!t.projects.find(e=>e.id===s.id)?.purchased)continue;let e=s.effect;typeof e.bpsBonus==`number`&&(n+=e.bpsBonus),typeof e.clickBonus==`number`&&(r+=e.clickBonus),typeof e.globalBonus==`number`&&(i+=e.globalBonus),typeof e.moduleBonus==`number`&&(a+=e.moduleBonus),typeof e.maxCombo==`number`&&(o=Math.max(o,e.maxCombo))}t.multipliers.bpsBonus=n,t.multipliers.clickBonus=r,t.multipliers.globalBonus=i,t.multipliers.moduleBonus=a,t.multipliers.maxComboOverride=o}setTwitchLive(t,n){this.setState(r=>{r.twitch.isLive=t,r.twitch.streamTitle=n.title,r.twitch.gameName=n.game,r.twitch.lastChecked=Date.now(),r.multipliers.twitch=t?e.twitch.liveMultiplier:1})}setLanguage(e){this.setState(t=>{t.language=e})}getLanguage(){return this.state.language}loadState(t){let n=s();this.state={bits:typeof t.bits==`number`?t.bits:n.bits,totalBitsEarned:typeof t.totalBitsEarned==`number`?t.totalBitsEarned:n.totalBitsEarned,totalClicks:typeof t.totalClicks==`number`?t.totalClicks:n.totalClicks,clicker:{...n.clicker,...t.clicker??{}},generators:n.generators.map(e=>t.generators?.find(t=>t.id===e.id)??e),projects:n.projects.map(e=>t.projects?.find(t=>t.id===e.id)??e),multipliers:{...n.multipliers,...t.multipliers??{}},twitch:{...n.twitch,...t.twitch??{}},achievements:Array.isArray(t.achievements)?t.achievements:n.achievements,lastPhase:typeof t.lastPhase==`number`?t.lastPhase:n.lastPhase,lastSaveTime:typeof t.lastSaveTime==`number`?t.lastSaveTime:n.lastSaveTime,lastTickTime:typeof t.lastTickTime==`number`?t.lastTickTime:n.lastTickTime,language:t.language===`en`||t.language===`fr`?t.language:n.language},this.recomputeMultipliers(this.state),this.state.twitch.isLive&&(this.state.multipliers.twitch=e.twitch.liveMultiplier),this.notify()}resetState(){this.state=s(),this.notify()}},l=`bitstream_v1`,u=null;function d(){let e=u;return u=null,e}function f(){let e={...c.getState(),lastSaveTime:Date.now()};localStorage.setItem(l,JSON.stringify(e))}function p(){let t=localStorage.getItem(l);if(!t)return!1;try{let n=JSON.parse(t);if(n.lastSaveTime){let t=e.offline.maxOfflineMs,r=Math.min(Date.now()-n.lastSaveTime,t);if(r>5e3){let t=0;for(let r of e.generators){let e=n.generators?.find(e=>e.id===r.id);e&&(t+=e.owned*r.baseBps)}let i=n.multipliers,a=i?.bpsBonus??0,o=i?.globalBonus??0,s=t*(1+a+o)*(r/1e3)*e.offline.efficiency;n.bits=(n.bits??0)+s,n.totalBitsEarned=(n.totalBitsEarned??0)+s,u={bitsEarned:s,seconds:r/1e3}}}return n.lastTickTime=Date.now(),c.loadState(n),!0}catch{return!1}}function m(){localStorage.removeItem(l),c.resetState()}function h(){setInterval(f,e.save.intervalMs),window.addEventListener(`beforeunload`,f)}var g=`https://xocwingwakmhfztbqpqz.supabase.co`,_=`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhvY3dpbmd3YWttaGZ6dGJxcHF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc5NzkzNjgsImV4cCI6MjA5MzU1NTM2OH0.w2z8jMXid6_i8QRlwpPRy3tW69EavgX4uF5SgWemu6U`;function v(){return!0}var y={apikey:_,Authorization:`Bearer ${_}`,"Content-Type":`application/json`};async function b(){let e=await fetch(`${g}/rest/v1/leaderboard?select=name,score&order=score.desc&limit=20`,{headers:y});if(!e.ok)throw Error(`LB fetch: ${e.status}`);return e.json()}async function x(e,t){let n=Math.floor(t);await fetch(`${g}/rest/v1/leaderboard?name=eq.${encodeURIComponent(e)}`,{method:`PATCH`,headers:y,body:JSON.stringify({score:n})}),await fetch(`${g}/rest/v1/leaderboard`,{method:`POST`,headers:{...y,Prefer:`resolution=ignore-duplicates`},body:JSON.stringify({name:e,score:n})})}async function S(e){await fetch(`${g}/rest/v1/leaderboard?name=eq.${encodeURIComponent(e)}`,{method:`DELETE`,headers:y})}var C=`bs_player_name`,w=`bs_player_best`,T=120*1e3,E=300*1e3,D=[`xX_BitL0rd_Xx`,`Neuron_42`,`QuantumLeak`,`CryptoVoid`,`NullByte`,`SilentMiner`,`ByteHunter`,`DataPhantom`,`GridRunner`,`CodeShadow`];function O(e,t){let n=t*1234567891;for(let t=0;t<e.length;t++)n=Math.imul(n^e.charCodeAt(t),2246822519)>>>0;return n}function k(e){return D.map(t=>{let n=.3+O(t,t.length)%100/100*1.4;return{name:t,score:Math.floor(Math.max(e*n,100))}})}function A(){return localStorage.getItem(`bs_player_name`)??``}function j(e){localStorage.setItem(C,e)}async function M(){let e=A();if(localStorage.removeItem(C),localStorage.removeItem(w),e&&v())try{await S(e)}catch{}}function N(){try{return JSON.parse(localStorage.getItem(`bs_player_best`)??`0`)}catch{return 0}}function P(e){e>N()&&localStorage.setItem(w,JSON.stringify(e))}function F(e){let t=v(),n=[],r=N(),a=0,o=0,s=0;e.innerHTML=`
    <div class="lb-panel">
      <h2 class="panel-title">🏆 Classement</h2>
      <div class="lb-status" id="lb-status">${t?`🌐 En ligne`:`🤖 Local (bots)`}</div>
      <div class="lb-rank-row">Votre rang : <span class="mono" id="lb-your-rank">#?</span></div>
      <div class="lb-list" id="lb-list">
        <div class="lb-loading">Chargement…</div>
      </div>
    </div>
  `;let l=e.querySelector(`#lb-list`),u=e.querySelector(`#lb-your-rank`);function d(){let e=A(),a=c.getState().totalBitsEarned;r=Math.max(r,a),P(r);let o;if(t){let t=n.filter(t=>t.name!==e),i={name:e,score:r};o=[...t,i].sort((e,t)=>t.score-e.score).slice(0,20)}else{let t={name:e||`Vous`,score:r};o=[...k(r),t].sort((e,t)=>t.score-e.score)}u.textContent=`#${o.findIndex(t=>t.name===(e||`Vous`))+1}`,l.innerHTML=o.map((t,n)=>{let r=t.name===(e||`Vous`);return`
        <div class="lb-row ${r?`lb-row--you`:``}">
          <span class="lb-rank mono">#${n+1}</span>
          <span class="lb-name">${t.name}${r?` <span class="lb-you">(Vous)</span>`:``}</span>
          <span class="lb-score mono">${i(t.score)}</span>
        </div>
      `}).join(``)}async function f(){if(!t){d();return}try{n=await b()}catch{}d()}let p=0;async function m(e=!1){if(!t)return;let n=A();if(!n)return;let i=c.getState().totalBitsEarned;if(r=Math.max(r,i),r<=0)return;let o=Date.now(),s=r>p*1.05||r>p+1e4;if(!(!e&&o-a<E&&!s)){a=o,p=r;try{await x(n,r)}catch{}}}f(),setTimeout(()=>void m(!0),3e3),o=window.setInterval(()=>{f()},T),s=window.setInterval(()=>{m()},E);let h=c.subscribe(()=>{d(),m()}),g=()=>{m(!0)};return window.addEventListener(`beforeunload`,g),()=>{clearInterval(o),clearInterval(s),window.removeEventListener(`beforeunload`,g),h()}}function I(e){e.innerHTML=`
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
  `;let t=e.querySelector(`#hdr-bits`),n=e.querySelector(`#btn-save`),r=e.querySelector(`#btn-reset`);function a(){t.textContent=i(c.getState().bits),t.classList.remove(`bits--tick`),t.offsetWidth,t.classList.add(`bits--tick`)}n.addEventListener(`click`,()=>{f(),n.textContent=`✅`,setTimeout(()=>n.textContent=`💾`,1500)}),r.addEventListener(`click`,()=>{confirm(`Réinitialiser toute la progression ? Cette action est irréversible.`)&&M().finally(()=>{m(),window.location.reload()})});let o=c.subscribe(a);return a(),()=>o()}function L(t){t.innerHTML=`
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
  `;let n=t.querySelector(`#main-btn`),r=t.querySelector(`#combo-fill`),a=t.querySelector(`#combo-text`),o=t.querySelector(`#bpc-display`),s=0,l=[],u=3e3;function d(){let t=Date.now();for(;l.length>0&&t-l[0]>u;)l.shift();let n=l.length/(u/1e3),r=e.clicker.cpsLimit;return n<=r?1:r/n}function f(e){l.push(Date.now());let t=d(),r=c.getEffectiveBPC()*t;c.addBits(r),c.incrementClicks(),h(n,r),n.classList.remove(`click-btn--pop`),n.offsetWidth,n.classList.add(`click-btn--pop`),p(),g(n,e)}function p(){let t=Date.now();clearTimeout(s),c.setState(n=>{t-n.clicker.lastClickTime<=e.clicker.comboWindowMs?n.clicker.comboCount=Math.min(n.clicker.comboCount+1,e.clicker.clicksToMaxCombo):n.clicker.comboCount=1,n.clicker.lastClickTime=t;let r=n.clicker.comboCount/e.clicker.clicksToMaxCombo;n.clicker.comboMultiplier=1+(c.getMaxCombo()-1)*Math.min(r,1)}),m(),s=window.setTimeout(()=>{c.setState(e=>{e.clicker.comboCount=0,e.clicker.comboMultiplier=1}),m()},e.clicker.comboDecayMs)}function m(){let{comboCount:t,comboMultiplier:n}=c.getState().clicker,i=t/e.clicker.clicksToMaxCombo*100;r.style.width=i.toFixed(1)+`%`,a.textContent=`×${n.toFixed(1)}`}function h(e,t){let n=document.createElement(`div`);n.className=`click-floater`,n.textContent=`+`+i(t);let r=e.getBoundingClientRect();n.style.left=r.left+r.width/2+(Math.random()-.5)*60+`px`,n.style.top=r.top-10+`px`,document.body.appendChild(n),n.addEventListener(`animationend`,()=>n.remove(),{once:!0})}function g(e,t){let n=document.createElement(`span`);n.className=`click-ripple`;let r=e.getBoundingClientRect(),i=t instanceof MouseEvent?t.clientX:t.touches[0].clientX,a=t instanceof MouseEvent?t.clientY:t.touches[0].clientY;n.style.left=i-r.left+`px`,n.style.top=a-r.top+`px`,e.appendChild(n),n.addEventListener(`animationend`,()=>n.remove(),{once:!0})}function _(){o.textContent=i(c.getEffectiveBPC())}n.addEventListener(`click`,f);let v=c.subscribe(_);return _(),()=>{v(),clearTimeout(s)}}function R(t){let n=e.generators.find(e=>e.id===t),r=c.getState().generators.find(e=>e.id===t);return Math.floor(n.baseCost*n.growthRate**+r.owned*.5)}function ee(){return!!c.getState().projects.find(e=>e.id===`marche_libre`)?.purchased}function z(a){a.innerHTML=`
    <div class="production-panel">
      <div class="gen-panel-header">
        <h2 class="panel-title">Générateurs</h2>
        <div class="gen-qty-bar">
          <button class="gen-qty-btn gen-qty-btn--active" data-qty="1">×1</button>
          <button class="gen-qty-btn" data-qty="5">×5</button>
          <button class="gen-qty-btn" data-qty="10">×10</button>
          <button class="gen-qty-btn" data-qty="100">×100</button>
        </div>
      </div>
      <div id="generators-list" class="generators-list"></div>
    </div>
  `;let o=a.querySelector(`#generators-list`),s=1;a.querySelectorAll(`.gen-qty-btn`).forEach(e=>{e.addEventListener(`click`,()=>{s=parseInt(e.dataset.qty||`1`),a.querySelectorAll(`.gen-qty-btn`).forEach(t=>t.classList.toggle(`gen-qty-btn--active`,t===e)),l=``,d()})});let l=``;function u(){let t=c.getState(),n=t.generators.map(e=>e.owned).join(`,`),r=e.generators.map(e=>t.totalBitsEarned>=e.unlockAt?`1`:`0`).join(``),i=t.projects.find(e=>e.id===`marche_libre`)?.purchased?`1`:`0`;return n+`|`+r+`|`+Math.floor(t.multipliers.bpsBonus*100)+`|`+i}function d(){let a=c.getState();o.innerHTML=``;let l=!1;for(let u of e.generators){let e=a.generators.find(e=>e.id===u.id);if(a.totalBitsEarned<u.unlockAt)continue;l=!0;let d=s===1?t(u.baseCost,u.growthRate,e.owned):n(u.baseCost,u.growthRate,e.owned,s),f=a.bits>=d,p=e.owned*u.baseBps*c.getPassiveMultiplier(),m=ee(),h=R(u.id),g=r(u.milestones,e.owned),_=u.milestones.find(t=>t.owned>e.owned),v=e.owned>0?_?`×${g} actif · prochain ×${_.multiplier} à ${_.owned}`:`×${g} MAX`:_?`Palier ×${_.multiplier} à ${_.owned}`:``,y=document.createElement(`div`);y.className=`gen-card${f?` gen-card--affordable`:``}`,y.dataset.id=u.id,y.innerHTML=`
        <div class="gen-card__icon">${u.emoji}</div>
        <div class="gen-card__info">
          <div class="gen-card__name">${u.name}</div>
          <div class="gen-card__bps mono">${e.owned>0?i(p)+` b/s`:`inactif`}</div>
          ${v?`<div class="gen-card__milestone">${v}</div>`:``}
          ${m&&e.owned>0?`<button class="gen-sell-btn" data-sell="${u.id}" data-price="${h}">Vendre ${i(h)}</button>`:``}
        </div>
        <div class="gen-card__right">
          <div class="gen-card__owned mono">${e.owned}</div>
          <button class="gen-btn${f?``:` gen-btn--disabled`}" data-buy="${u.id}">
            <span class="gen-btn__cost mono">${i(d)}</span>
            <span class="gen-btn__label">${s>1?`×`+s:`ACHETER`}</span>
          </button>
        </div>
      `,o.appendChild(y)}l||(o.innerHTML=`<p class="gen-hint">Clique pour générer tes premiers bits !</p>`);let u=e.generators.find(e=>a.totalBitsEarned<e.unlockAt),d=o.querySelector(`.gen-next-hint`);if(d&&d.remove(),u){let e=u.unlockAt-a.totalBitsEarned,t=document.createElement(`div`);t.className=`gen-next-hint`,t.innerHTML=`${u.emoji} <strong>${u.name}</strong> — encore ${i(e)} bits gagnés pour débloquer`,o.appendChild(t)}}function f(){let r=c.getState();for(let a of e.generators){let e=o.querySelector(`[data-id="${a.id}"]`);if(!e)continue;let l=r.generators.find(e=>e.id===a.id),u=s===1?t(a.baseCost,a.growthRate,l.owned):n(a.baseCost,a.growthRate,l.owned,s),d=r.bits>=u;e.classList.toggle(`gen-card--affordable`,d);let f=e.querySelector(`[data-buy="${a.id}"]`);if(f.classList.toggle(`gen-btn--disabled`,!d),f.querySelector(`.gen-btn__cost`).textContent=i(u),l.owned>0){let t=l.owned*a.baseBps*c.getPassiveMultiplier();e.querySelector(`.gen-card__bps`).textContent=i(t)+` b/s`}}let a=e.generators.find(e=>r.totalBitsEarned<e.unlockAt),l=o.querySelector(`.gen-next-hint`);if(l&&a){let e=a.unlockAt-r.totalBitsEarned;l.innerHTML=`${a.emoji} <strong>${a.name}</strong> — encore ${i(e)} bits gagnés pour débloquer`}else l&&!a&&l.remove()}function p(){let e=u();e===l?f():(l=e,d())}function m(e){let t=e.target.closest(`[data-buy]`);if(!t)return;let n=t.dataset.buy;(s===1?c.buyGenerator(n):c.bulkBuyGenerator(n,s))&&o.querySelector(`[data-id="${n}"]`)?.classList.add(`gen-card--bought`)}function h(e){let t=e.target.closest(`[data-sell]`);if(!t)return;let n=t.dataset.sell,r=parseInt(t.dataset.price||`0`,10);c.getState().generators.find(e=>e.id===n).owned!==0&&(c.setState(e=>{--e.generators.find(e=>e.id===n).owned}),c.addBits(r))}o.addEventListener(`click`,m),o.addEventListener(`click`,h);let g=c.subscribe(p);return l=u(),d(),()=>g()}function te(){let t=document.createElement(`div`);t.className=`endgame-overlay`;let{totalBitsEarned:n}=c.getState();t.innerHTML=`
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
            <span class="endgame-stat__value mono">${i(n)}</span>
          </div>
          <div class="endgame-stat">
            <span class="endgame-stat__label">BPS au pic</span>
            <span class="endgame-stat__value mono">${i(c.getEffectiveBPS())} b/s</span>
          </div>
          <div class="endgame-stat">
            <span class="endgame-stat__label">Projets complétés</span>
            <span class="endgame-stat__value mono">${c.getState().projects.filter(e=>e.purchased).length} / ${e.projects.length}</span>
          </div>
        </div>
        <p class="endgame-modal__continue">
          Le réseau continue de tourner. Deux projets d'expansion t'attendent encore —
          <em>Expansion Galactique</em> et <em>Singularité Finale</em>.
          Il y a toujours plus à accumuler.
        </p>
        <button class="endgame-close" id="endgame-close">Continuer à jouer</button>
      </div>
    </div>
  `,document.body.appendChild(t),t.querySelector(`#endgame-close`).addEventListener(`click`,()=>{t.classList.add(`endgame-overlay--out`),t.addEventListener(`animationend`,()=>t.remove(),{once:!0})})}var ne={production:`⚡ Production`,module:`🎰 Modules`,global:`🌐 Global`,endgame:`🚀 Endgame`};function re(e){let t=[];return e.unlocks===`trade`?t.push(`Débloque : Vente de générateurs`):e.unlocks===`casino`?t.push(`Débloque : Casino`):e.unlocks===`aimtrainer`?t.push(`Débloque : Aim Trainer`):e.unlocks===`flappy`&&t.push(`Débloque : Flappy Bit`),typeof e.bpsBonus==`number`&&t.push(`+${Math.round(e.bpsBonus*100)}% production passive`),typeof e.clickBonus==`number`&&t.push(`+${Math.round(e.clickBonus*100)}% bits/clic`),typeof e.globalBonus==`number`&&t.push(`+${Math.round(e.globalBonus*100)}% tous les gains`),typeof e.moduleBonus==`number`&&t.push(`+${Math.round(e.moduleBonus*100)}% gains modules`),typeof e.maxCombo==`number`&&t.push(`Combo max : ${e.maxCombo}×`),e.endgame&&t.push(`🏁 Condition de victoire`),t.join(` · `)}function ie(t){t.innerHTML=`
    <div class="projects-panel">
      <h2 class="panel-title">Projets</h2>
      <div id="projects-list" class="projects-list"></div>
    </div>
  `;let n=t.querySelector(`#projects-list`),r=``;function a(){let t=c.getState(),n=t.projects.filter(e=>e.purchased).map(e=>e.id).join(`,`),r=e.projects.map(e=>{if(t.projects.find(t=>t.id===e.id).purchased)return`0`;let n=e.requires.every(e=>t.projects.find(t=>t.id===e)?.purchased),r=t.totalBitsEarned>=e.unlockAt&&c.getCurrentPhase()>=e.phase;return r&&n?`1`:!r&&n?`2`:`3`}).join(``);return n+`|`+r}function o(t){let n=c.getState(),r=e.projects.find(e=>e.id===t);if(n.projects.find(e=>e.id===t).purchased||n.totalBitsEarned<r.unlockAt||c.getCurrentPhase()<r.phase)return!1;for(let e of r.requires)if(!n.projects.find(t=>t.id===e)?.purchased)return!1;return!0}function s(t){let n=c.getState(),r=e.projects.find(e=>e.id===t);if(n.projects.find(e=>e.id===t).purchased||n.totalBitsEarned>=r.unlockAt&&c.getCurrentPhase()>=r.phase)return!1;for(let e of r.requires)if(!n.projects.find(t=>t.id===e)?.purchased)return!1;return!0}function l(){let t=c.getState();n.innerHTML=``;let r=e.projects.filter(e=>o(e.id)),a=e.projects.filter(e=>s(e.id));if(r.length===0&&a.length===0){n.innerHTML=`<p class="prj-hint">Tous les projets sont complétés. 🏆</p>`;return}let l=new Map;for(let e of r)l.has(e.category)||l.set(e.category,[]),l.get(e.category).push(e);for(let[e,r]of l){let a=document.createElement(`div`);a.className=`prj-section`,a.innerHTML=`<div class="prj-section__label">${ne[e]??e}</div>`;for(let e of r){let n=t.bits>=e.cost,r=document.createElement(`div`);r.className=`prj-card${n?` prj-card--affordable`:``}`,r.dataset.id=e.id,r.innerHTML=`
          <div class="prj-card__header">
            <span class="prj-card__name">${e.name}</span>
            <span class="prj-card__cost mono">${i(e.cost)} bits</span>
          </div>
          <div class="prj-card__desc">${e.description}</div>
          <div class="prj-card__effect">${re(e.effect)}</div>
          <button class="prj-btn${n?``:` prj-btn--disabled`}" data-buy="${e.id}">
            ${n?`ACHETER`:`Manque `+i(e.cost-t.bits)}
          </button>
        `,a.appendChild(r)}n.appendChild(a)}if(a.length>0){let e=new Map;for(let t of a)e.has(t.category)||e.set(t.category,t);let r=document.createElement(`div`);r.className=`prj-section`,r.innerHTML=`<div class="prj-section__label prj-section__label--locked">🔒 Prochainement</div>`;for(let n of e.values()){let e=n.unlockAt-t.totalBitsEarned,a=document.createElement(`div`);a.className=`prj-card prj-card--locked`,a.innerHTML=`
          <div class="prj-card__header">
            <span class="prj-card__name">${n.name}</span>
            <span class="prj-card__cost mono">${i(n.cost)} bits</span>
          </div>
          <div class="prj-card__desc">${n.description}</div>
          <div class="prj-card__locked-hint">Gagne encore ${i(e)} bits total pour débloquer</div>
        `,r.appendChild(a)}n.appendChild(r)}}function u(t){let n=t.target.closest(`[data-buy]`);if(!n)return;let r=n.dataset.buy;c.purchaseProject(r)&&e.projects.find(e=>e.id===r)?.effect?.endgame&&te()}function d(){let t=a();if(t!==r)r=t,l();else{let t=c.getState();n.querySelectorAll(`[data-buy]`).forEach(n=>{let r=n.dataset.buy,a=e.projects.find(e=>e.id===r),o=t.bits>=a.cost;n.classList.toggle(`prj-btn--disabled`,!o),n.textContent=o?`ACHETER`:`Manque `+i(a.cost-t.bits),n.closest(`.prj-card`).classList.toggle(`prj-card--affordable`,o)})}}n.addEventListener(`click`,u);let f=c.subscribe(d);return r=a(),l(),()=>f()}var ae=[`♠`,`♣`,`♥`,`♦`],oe=[`A`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`10`,`J`,`Q`,`K`];function se(){let e=ae.flatMap(e=>oe.map(t=>({suit:e,rank:t})));return[].concat(...[,,,,,,].fill(0).map(()=>e.map(e=>({...e}))))}function ce(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}function le(e){return[`J`,`Q`,`K`].includes(e.rank)?10:e.rank===`A`?11:parseInt(e.rank)}function B(e){let t=e.filter(e=>!e.faceDown),n=t.reduce((e,t)=>e+le(t),0),r=t.filter(e=>e.rank===`A`).length;for(;n>21&&r-- >0;)n-=10;return n}function V(e){return e.faceDown?`<div class="bj-card bj-card--back"></div>`:`<div class="bj-card${e.suit===`♥`||e.suit===`♦`?` bj-card--red`:``}">
    <div class="bj-card-tl">${e.rank}<br><span>${e.suit}</span></div>
    <div class="bj-card-ct">${e.suit}</div>
    <div class="bj-card-br">${e.rank}<br><span>${e.suit}</span></div>
  </div>`}var H=[{label:`PERTE`,mult:0,col:`#881111`,txt:`#fff`},{label:`×0.5`,mult:.5,col:`#333333`,txt:`#fff`},{label:`PERTE`,mult:0,col:`#aa2222`,txt:`#fff`},{label:`×1`,mult:1,col:`#555555`,txt:`#fff`},{label:`×2`,mult:2,col:`#888888`,txt:`#000`},{label:`×3`,mult:3,col:`#bbbbbb`,txt:`#000`},{label:`×5`,mult:5,col:`#e8e8e8`,txt:`#000`},{label:`💎×15`,mult:15,col:`#ffcc00`,txt:`#000`}];function ue(e,t,n,r,i){let a=H.length,o=2*Math.PI/a;e.clearRect(0,0,e.canvas.width,e.canvas.height);for(let s=0;s<a;s++){let a=H[s],c=i+s*o-Math.PI/2,l=c+o;e.beginPath(),e.moveTo(t,n),e.arc(t,n,r,c,l),e.closePath(),e.fillStyle=a.col,e.fill(),e.strokeStyle=`#111`,e.lineWidth=1.5,e.stroke();let u=c+o/2;e.save(),e.translate(t+Math.cos(u)*r*.68,n+Math.sin(u)*r*.68),e.rotate(u+Math.PI/2),e.textAlign=`center`,e.textBaseline=`middle`,e.fillStyle=a.txt,e.font=`bold 10px monospace`,e.fillText(a.label,0,0),e.restore()}e.beginPath(),e.arc(t,n,10,0,2*Math.PI),e.fillStyle=`#111`,e.fill(),e.strokeStyle=`#fff`,e.lineWidth=1.5,e.stroke()}function de(e,t){let n=2*Math.PI/H.length,r=((-(t+.5)*n%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-(e%(2*Math.PI)+2*Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI);return e+(4+Math.floor(Math.random()*4))*2*Math.PI+r}function fe(t){t.innerHTML=`
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
  `;let n=t.querySelector(`#casino-content`),r=t.querySelector(`#casino-balance`),a=t.querySelector(`#casino-history`),o=t.querySelectorAll(`.casino-tab`),s=`blackjack`,l=!1,u=[],d=0,f=0,{streakThreshold:p,streakBonus:m,streakDuration:h}=e.modules.casino;function g(){return Date.now()<f?1+m:1}function _(e){e?(d++,d>=p&&(f=Date.now()+h)):d=0,y()}let v=t.querySelector(`#casino-streak`);function y(){if(v)if(d>=p&&Date.now()<f){let e=Math.ceil((f-Date.now())/1e3);v.textContent=`🔥 Streak ×${d} · +10% · ${e}s`,v.style.display=``}else d>=2?(v.textContent=`🔥 Streak ×${d}`,v.style.display=``):v.style.display=`none`}let b=window.setInterval(()=>{Date.now()>=f&&d>=p?(d=0,y()):f>0&&y()},1e3);function x(e){let t=n.querySelector(`.casino-error`);t&&t.remove();let r=document.createElement(`div`);r.className=`casino-error`,r.textContent=e,n.prepend(r),setTimeout(()=>r.remove(),2500)}function S(e){let t=n.querySelector(`#${e}`);return Math.max(1,Math.floor(parseFloat(t?.value||`1`)||1))}function C(e,t=100){return Math.floor(parseFloat(localStorage.getItem(`bs_bet_${e}`)||String(t))||t)}function w(e){let t=n.querySelector(`#${e}`),r=n.querySelector(`#preview-${e}`);if(!t||!r)return;let a=Math.floor(parseFloat(t.value)||0);r.textContent=a>0?`= ${i(a)} bits`:``}function T(e,t=100){return`
      <div class="bet-wrap">
        <div class="bet-quicks">
          <button class="bet-quick" data-pct="10">10%</button>
          <button class="bet-quick" data-pct="25">25%</button>
          <button class="bet-quick" data-pct="50">50%</button>
          <button class="bet-quick" data-pct="100">MAX</button>
        </div>
        <div class="bet-input-row">
          <input type="number" id="${e}" class="bet-input" value="${C(e,t)}" min="1">
          <span class="bet-preview" id="preview-${e}"></span>
        </div>
      </div>
    `}function E(e){n.querySelectorAll(`.bet-quick`).forEach(t=>{t.addEventListener(`click`,()=>{let r=parseInt(t.dataset.pct||`100`),i=c.getState().bits,a=Math.max(1,Math.floor(i*r/100)),o=n.querySelector(`#${e}`);o&&(o.value=String(a),localStorage.setItem(`bs_bet_${e}`,String(a)),w(e))})});let t=n.querySelector(`#${e}`);t?.addEventListener(`input`,()=>{localStorage.setItem(`bs_bet_${e}`,t.value),w(e)}),w(e)}function D(e,t,n){u.unshift({game:e,won:t,amount:n}),_(t),ve()}let O=[],k=[[]],A=[100],j=0,M=[],N=100,P=`bet`,F=!1;function I(){return k[j]}function L(){return A[j]}function R(){return k.length>1}function ee(e){let t=n.querySelector(`#bj-bet-display`);t&&(t.textContent=i(e)+` bits`)}function z(){let e=n.querySelector(`#bj-dealer-cards`),t=n.querySelector(`#bj-dealer-total`),r=n.querySelector(`#bj-controls`),a=n.querySelector(`#bj-msg`);if(!(!e||!r||!a))if(P===`bet`){e.innerHTML=`<div class="bj-placeholder">♠ ♣ ♥ ♦</div>`;let i=n.querySelector(`#bj-player-cards`);i&&(i.innerHTML=`<div class="bj-placeholder">Distribuez pour commencer</div>`),t&&(t.textContent=``),a.innerHTML=``;let o=n.querySelector(`#bj-bet-display`);o&&(o.textContent=`—`),r.innerHTML=`
        ${T(`bj-bet`,N)}
        <button class="casino-btn" id="bj-deal">🃏 Distribuer</button>
      `,E(`bj-bet`),n.querySelector(`#bj-deal`)?.addEventListener(`click`,te)}else if(P===`play`){e.innerHTML=M.map(e=>V(e)).join(``);let o=B(M.filter(e=>!e.faceDown));t&&(t.textContent=`${o}${M.some(e=>e.faceDown)?` + ?`:``}`);let s=n.querySelector(`#bj-player-cards`),l=n.querySelector(`#bj-player-total`);if(s)if(R())s.innerHTML=k.map((e,t)=>{let n=t===j,r=B(e);return`<div class="bj-split-hand${n?` bj-split-hand--active`:``}">
              <div class="bj-split-label">Main ${t+1} (${i(A[t])} bits)${n?` ◀`:``}</div>
              <div class="bj-cards">${e.map(e=>V(e)).join(``)}</div>
              <div class="bj-total">${r}</div>
            </div>`}).join(``),l&&(l.textContent=``);else{s.innerHTML=I().map(e=>V(e)).join(``);let e=B(I());l&&(l.textContent=String(e))}ee(L());let u=B(I()),d=I().length===2&&c.getState().bits>=L(),f=I().length===2&&!R()&&I()[0].rank===I()[1].rank&&c.getState().bits>=L();r.innerHTML=`
        <div class="bj-action-row">
          <button class="casino-btn" id="bj-hit">Tirer</button>
          <button class="casino-btn" id="bj-stand">Rester</button>
          <button class="casino-btn${d?``:` casino-btn--disabled`}" id="bj-double">Doubler</button>
          ${f?`<button class="casino-btn bj-btn-split" id="bj-split">Split</button>`:``}
        </div>
        <div class="bj-total-row">Total : <span class="mono">${u}</span></div>
      `,a.innerHTML=``,n.querySelector(`#bj-hit`)?.addEventListener(`click`,ne),n.querySelector(`#bj-stand`)?.addEventListener(`click`,ie),d&&n.querySelector(`#bj-double`)?.addEventListener(`click`,fe),f&&n.querySelector(`#bj-split`)?.addEventListener(`click`,U)}else{M.forEach(e=>{e.faceDown=!1}),e.innerHTML=M.map(e=>V(e)).join(``);let i=B(M);t&&(t.textContent=String(i));let a=n.querySelector(`#bj-player-cards`);if(a)if(R())a.innerHTML=k.map((e,t)=>`
            <div class="bj-split-hand">
              <div class="bj-split-label">Main ${t+1}</div>
              <div class="bj-cards">${e.map(e=>V(e)).join(``)}</div>
              <div class="bj-total">${B(e)}</div>
            </div>`).join(``);else{a.innerHTML=I().map(e=>V(e)).join(``);let e=B(I()),t=n.querySelector(`#bj-player-total`);t&&(t.textContent=String(e))}r.innerHTML=`<button class="casino-btn" id="bj-again">Rejouer</button>`,n.querySelector(`#bj-again`)?.addEventListener(`click`,()=>{P=`bet`,k=[[]],A=[N],j=0,z()})}}function te(){if(N=S(`bj-bet`),c.getState().bits<N){x(`Bits insuffisants !`);return}if(c.spendBits(N),F=!1,l=!0,O=ce(se()),k=[[{...O.pop()},{...O.pop()}]],A=[N],j=0,M=[{...O.pop()},{...O.pop(),faceDown:!0}],P=`play`,z(),B(I())===21){let e=n.querySelector(`#bj-player-cards`);e&&e.classList.add(`bj-blackjack-flash`);let t=n.querySelector(`#bj-msg`);t&&(t.innerHTML=`<div class="bj-bj-banner">🃏 BLACKJACK ! 🃏</div>`),setTimeout(()=>{M.forEach(e=>{e.faceDown=!1}),B(M)===21?W([{push:!0,msg:`Double Blackjack — Égalité !`}]):W([{won:!0,bonus:!0,msg:`🃏 Blackjack ! ×1.5 !`}])},1400)}}function ne(){if(F||P!==`play`)return;I().push({...O.pop()}),z();let e=B(I());e>21?(F=!0,setTimeout(()=>{let t=n.querySelector(`#bj-msg`);t&&(t.innerHTML=`<div class="bj-result bj-result--lose">💥 Bust (${e}) !</div>`),setTimeout(()=>{F=!1,re()},1e3)},300)):e===21&&(F=!0,setTimeout(()=>{F=!1,ie()},300))}function re(){R()&&j<k.length-1?(j++,z()):le()}function ie(){F||P!==`play`||(F=!0,re())}function le(){M.forEach(e=>{e.faceDown=!1}),z();function e(){if(B(M)<17)setTimeout(()=>{M.push({...O.pop()}),z(),e()},650);else{let e=B(M),t=[];k.forEach((n,r)=>{let i=B(n);i>21?t.push({won:!1,msg:`Main ${k.length>1?r+1+` : `:``}Bust (${i}) — Perdu`}):e>21?t.push({won:!0,msg:`Main ${k.length>1?r+1+` : `:``}Croupier bust — Gagné !`}):i>e?t.push({won:!0,msg:`Main ${k.length>1?r+1+` : `:``}${i} > ${e} — Gagné !`}):i===e?t.push({push:!0,msg:`Main ${k.length>1?r+1+` : `:``}Égalité (${i})`}):t.push({won:!1,msg:`Main ${k.length>1?r+1+` : `:``}${i} < ${e} — Croupier gagne`})}),setTimeout(()=>W(t),400)}}e()}function fe(){if(c.getState().bits<L()){x(`Bits insuffisants pour doubler !`);return}c.spendBits(L()),A[j]*=2,I().push({...O.pop()}),ee(A[j]),z(),B(I())>21?setTimeout(()=>{re()},500):setTimeout(()=>ie(),600)}function U(){if(c.getState().bits<L()){x(`Bits insuffisants pour splitter !`);return}c.spendBits(L());let e=A[0];k=[[k[0][0],{...O.pop()}],[k[0][1],{...O.pop()}]],A=[e,e],j=0,z()}function W(e){P=`done`;let t=0,r=c.getModuleMultiplier();e.forEach((e,n)=>{let i=A[n];if(e.won){let n=e.bonus?Math.floor(i*1.5):i,a=Math.floor(n*r*g());c.addBits(i+a),t+=a,D(`🃏`,!0,a)}else e.push?(c.addBits(i),D(`🃏`,!0,0)):(t-=i,D(`🃏`,!1,i))}),l=!1,z();let a=n.querySelector(`#bj-msg`);if(a){let n=e.map(e=>`<div class="bj-result ${e.won?`bj-result--win`:e.push?`bj-result--push`:`bj-result--lose`}">${e.msg}</div>`),r=t>=0?`+`:``;n.push(`<div class="bj-net-total">Net : ${r}${i(t)} bits</div>`),a.innerHTML=n.join(``)}}let G=null;function pe(){n.innerHTML=`
      <div class="casino-game-suits">
        <p class="suits-hint">Choisissez une couleur, puis misez. Bonne réponse → ×3</p>
        <div class="suits-choices">
          ${ae.map(e=>`<button class="suit-btn${e===`♥`||e===`♦`?` suit-btn--red`:``}${G===e?` suit-btn--active`:``}" data-suit="${e}">${e}</button>`).join(``)}
        </div>
        ${T(`suits-bet`,100)}
        <button class="casino-btn${G?``:` casino-btn--disabled`}" id="suits-play">Miser</button>
        <div id="suits-result" class="suits-result" style="display:none"></div>
      </div>
    `,E(`suits-bet`),n.querySelectorAll(`.suit-btn`).forEach(e=>{e.addEventListener(`click`,()=>{G=e.dataset.suit,n.querySelectorAll(`.suit-btn`).forEach(t=>t.classList.toggle(`suit-btn--active`,t===e));let t=n.querySelector(`#suits-play`);t&&t.classList.remove(`casino-btn--disabled`)})}),n.querySelector(`#suits-play`)?.addEventListener(`click`,()=>{if(!G||l)return;let e=S(`suits-bet`);if(c.getState().bits<e){x(`Bits insuffisants !`);return}l=!0,c.spendBits(e);let t=ae[Math.floor(Math.random()*4)],r={suit:t,rank:oe[Math.floor(Math.random()*13)]},a=t===G,o=c.getModuleMultiplier(),s=a?Math.floor(e*3*o*g()):0,u=a?s:-e,d=u>=0?`+`:``,f=n.querySelector(`#suits-result`);f.style.display=`flex`,f.innerHTML=`
        <div class="suits-drawn">${V(r)}</div>
        <div class="suits-verdict ${a?`suits-win`:`suits-lose`}">
          ${a?`✅ ${t} — Gagné !<br><span class="mono">${d}${i(u)} bits nets</span>`:`❌ ${t} — Raté !<br><span class="mono">${d}${i(u)} bits</span>`}
        </div>
      `,a?(c.addBits(e+s),D(`♥`,!0,s)):D(`♥`,!1,e),setTimeout(()=>{l=!1,G=null,pe()},2500)})}let K=0,q=0;function me(){n.innerHTML=`
      <div class="casino-game-wheel">
        <div class="wheel-canvas-wrap">
          <canvas id="wheel-canvas" width="200" height="200" class="wheel-canvas"></canvas>
          <div class="wheel-needle">▼</div>
        </div>
        ${T(`wheel-bet`,100)}
        <button class="casino-btn" id="wheel-spin">🎡 Faire tourner !</button>
        <div id="wheel-result" style="display:none" class="wheel-result-msg"></div>
      </div>
    `,E(`wheel-bet`),ue(n.querySelector(`#wheel-canvas`).getContext(`2d`),100,100,90,q),n.querySelector(`#wheel-spin`)?.addEventListener(`click`,he)}function he(){if(l)return;let e=S(`wheel-bet`);if(c.getState().bits<e){x(`Bits insuffisants !`);return}l=!0,c.spendBits(e);let t=n.querySelector(`#wheel-canvas`);if(!t)return;let r=t.getContext(`2d`),a=Math.floor(Math.random()*H.length),o=de(q,a),s=3500,u=performance.now(),d=q,f=n.querySelector(`#wheel-spin`);f.disabled=!0,cancelAnimationFrame(K);function p(t){let f=Math.min(t-u,s);if(ue(r,100,100,90,d+(1-(1-f/s)**4)*(o-d)),f<s)K=requestAnimationFrame(p);else{q=o,ue(r,100,100,90,q);let t=H[a],s=n.querySelector(`#wheel-result`);if(s.style.display=`block`,t.mult>0){let n=c.getModuleMultiplier(),r=g(),a,o;t.mult>1?(a=e+Math.floor(e*(t.mult-1)*n*r),(t.mult-1)*n*r,o=n>1||r>1?` (×${t.mult} × ×${n.toFixed(2)} module${r>1?` × ×${r.toFixed(2)} streak`:``})`:``):(a=Math.floor(e*t.mult),o=``);let l=a-e,u=l>=0?`+`:``;c.addBits(a),s.textContent=`${t.label}${o} — ${u}${i(l)} bits`,s.className=l>=0?`wheel-result-msg wheel-result--win`:`wheel-result-msg wheel-result--lose`,D(`🎡`,l>=0,Math.abs(l))}else s.textContent=`PERTE — −${i(e)} bits`,s.className=`wheel-result-msg wheel-result--lose`,D(`🎡`,!1,e);setTimeout(()=>{l=!1,me()},2500)}}K=requestAnimationFrame(p)}function ge(e){l&&e!==s||(cancelAnimationFrame(K),s=e,o.forEach(t=>t.classList.toggle(`casino-tab--active`,t.dataset.game===e)),e===`blackjack`?(n.innerHTML=`
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
            <div id="bj-player-cards" class="bj-cards"></div>
          </div>
          <div id="bj-controls" class="bj-controls"></div>
          <div id="bj-msg" class="bj-msg"></div>
        </div>
      `,P=`bet`,k=[[]],A=[N],j=0,M=[],O=[],z()):e===`suits`?(G=null,pe()):e===`wheel`&&me())}function _e(){r.textContent=i(c.getState().bits)}function ve(){a.innerHTML=u.slice(0,5).map(e=>{let t=e.won?`✅`:`❌`;return`<div class="casino-history-item ${e.won?`win`:`lose`}">${t} ${e.game} ${e.won?`+`:`−`}${i(e.amount)}</div>`}).join(``)}o.forEach(e=>{e.addEventListener(`click`,()=>{(!l||e.dataset.game===s)&&ge(e.dataset.game)})});let ye=c.subscribe(_e);return ge(`blackjack`),_e(),()=>{cancelAnimationFrame(K),clearInterval(b),ye()}}var U=e.modules.aimtrainer,W=U.gameDuration,G=U.targetLifetime,pe=U.bombLifetime,K=U.spawnInterval,q=U.spawnChance,me=U.bombChance,he=U.bombBetLoss,ge=U.scoreThreshold,_e=U.scoreDivisor;function ve(e){return e<=28?3:e<=42?2:1}function ye(e){let t=!1,n=0,r=0,a=W,o=0,s=0,l=new Set;e.innerHTML=`
    <div class="aimtrainer-panel">
      <h2 class="panel-title">🎯 Aim Trainer</h2>
      <div class="aim-hud">
        <span class="aim-hud__item">⏱ <span id="aim-timer">${W}</span>s</span>
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
          <div class="bet-input-row">
            <input type="number" id="aim-bet" class="bet-input" value="100" min="1">
            <span class="bet-preview" id="aim-bet-preview"></span>
          </div>
        </div>
        <button class="casino-btn" id="aim-start">🎯 Lancer la session</button>
      </div>
      <div id="aim-result" class="aim-result" style="display:none"></div>
    </div>
  `;let u=e.querySelector(`#aim-field`),d=e.querySelector(`#aim-timer`),f=e.querySelector(`#aim-hits`),p=e.querySelector(`#aim-score`),m=e.querySelector(`#aim-start`),h=e.querySelector(`#aim-bet`),g=e.querySelector(`#aim-result`),_=e.querySelector(`#aim-bet-live`),v=e.querySelector(`#aim-bet-label`),y=e.querySelector(`#aim-hint`),b=e.querySelector(`#aim-bet-preview`);function x(){let e=Math.floor(parseFloat(h.value)||0);b.textContent=e>0?`= ${i(e)} bits`:``}e.querySelectorAll(`.bet-quick`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.dataset.pct||`100`),n=Math.floor(c.getState().bits);h.value=String(Math.max(1,Math.floor(n*t/100))),x()})}),h.addEventListener(`input`,x),x();function S(){return Math.max(1,Math.floor(parseFloat(h.value)||1))}function C(){if(!t)return;if(Math.random()<me){w();return}let e=document.createElement(`div`);e.className=`aim-target`;let i=18+Math.floor(Math.random()*39),a=ve(i);e.style.width=i+`px`,e.style.height=i+`px`,e.dataset.pts=String(a);let o=u.clientWidth-i-8,s=u.clientHeight-i-8;e.style.left=Math.max(4,Math.random()*o)+`px`,e.style.top=Math.max(4,Math.random()*s)+`px`,a===3?e.classList.add(`aim-target--small`):a===2&&e.classList.add(`aim-target--medium`),u.appendChild(e),l.add(e);let c=()=>{e.isConnected&&(e.remove(),l.delete(e))};e.addEventListener(`click`,i=>{if(i.stopPropagation(),!t)return;let a=Number(e.dataset.pts??1);n+=a,r++,f.textContent=String(r),p.textContent=String(n),e.classList.add(`aim-target--hit`),setTimeout(c,130);let o=document.createElement(`div`);o.className=`aim-floater`,o.textContent=`+${a}`,o.style.left=e.style.left,o.style.top=e.style.top,u.appendChild(o),setTimeout(()=>o.remove(),700)},{once:!0}),setTimeout(c,G)}function w(){if(!t)return;let e=document.createElement(`div`);e.className=`aim-target aim-target--bomb`;let n=32+Math.floor(Math.random()*16);e.style.width=n+`px`,e.style.height=n+`px`,e.textContent=`💣`;let r=u.clientWidth-n-8,i=u.clientHeight-n-8;e.style.left=Math.max(4,Math.random()*r)+`px`,e.style.top=Math.max(4,Math.random()*i)+`px`,u.appendChild(e),l.add(e);let a=()=>{e.isConnected&&(e.remove(),l.delete(e))};e.addEventListener(`click`,n=>{if(n.stopPropagation(),!t)return;let r=Math.max(1,Math.floor(parseFloat(h.value)||1)),i=Math.floor(r*he);i>0&&c.setState(e=>{e.bits=Math.max(0,e.bits-i)}),e.classList.add(`aim-target--hit`),setTimeout(a,130);let o=document.createElement(`div`);o.className=`aim-floater aim-floater--bomb`,o.textContent=`💥 −${i}`,o.style.left=e.style.left,o.style.top=e.style.top,u.appendChild(o),setTimeout(()=>o.remove(),900)},{once:!0}),setTimeout(a,pe)}function T(e){t=!1,clearInterval(o),clearInterval(s),l.forEach(e=>e.remove()),l.clear(),_.style.display=`none`,y.style.display=`block`;let a=c.getModuleMultiplier(),u=Math.max(0,(n-ge)/_e),h=Math.floor(e*u*a),v=h-e;h>0&&c.setState(e=>{e.bits+=h,e.totalBitsEarned+=h}),g.style.display=`block`,u<=0?(g.className=`aim-result aim-result--lose`,g.textContent=`🎯 ${n} pts — Score trop bas ! Perdu ${i(e)} bits`):v>=0?(g.className=`aim-result aim-result--win`,g.textContent=`🎯 ${r} hits · ${n} pts → +${i(v)} bits nets`):(g.className=`aim-result aim-result--lose`,g.textContent=`🎯 ${r} hits · ${n} pts → −${i(Math.abs(v))} bits`),m.disabled=!1,m.textContent=`🎯 Rejouer`,d.textContent=String(W),f.textContent=`0`,p.textContent=`0`}return m.addEventListener(`click`,()=>{if(t)return;let e=S();if(c.getState().bits<e){g.style.display=`block`,g.className=`aim-result aim-result--lose`,g.textContent=`Bits insuffisants !`;return}c.setState(t=>{t.bits-=e}),t=!0,n=0,r=0,a=W,f.textContent=`0`,p.textContent=`0`,d.textContent=String(W),g.style.display=`none`,m.disabled=!0,v.textContent=i(e)+` bits`,_.style.display=``,y.style.display=`none`,o=window.setInterval(()=>{Math.random()<q&&C()},K),s=window.setInterval(()=>{a--,d.textContent=String(a),a<=0&&T(e)},1e3)}),()=>{clearInterval(o),clearInterval(s),l.forEach(e=>e.remove())}}var be=340,J=200,xe=65,Y=10,Se=.24,Ce=-5,X=36,we=88,Te=2,Ee=90,De=2e4;function Oe(){return Math.floor(50*c.getModuleMultiplier())}function ke(e){e.innerHTML=`
    <div class="flappy-panel">
      <h2 class="panel-title">🐦 Flappy Bit</h2>
      <div class="flappy-wrap">
        <canvas id="flappy-canvas" width="${be}" height="${J}" class="flappy-canvas"></canvas>
        <div class="flappy-overlay" id="flappy-overlay">
          <div class="flappy-overlay__msg" id="flappy-msg">Clique ou Espace pour jouer</div>
          <div class="flappy-overlay__sub" id="flappy-sub">+${i(Oe())} bits / tuyau passé</div>
        </div>
      </div>
      <div class="flappy-hud">
        <span>Score : <span id="flappy-score" class="mono">0</span></span>
        <span id="flappy-cooldown" class="flappy-cooldown" style="display:none"></span>
      </div>
      <div class="flappy-bet" id="flappy-bet-row">
        <div class="bet-quicks">
          <button class="bet-quick" data-pct="10">10%</button>
          <button class="bet-quick" data-pct="25">25%</button>
          <button class="bet-quick" data-pct="50">50%</button>
          <button class="bet-quick" data-pct="100">MAX</button>
        </div>
        <div class="bet-input-row">
          <input class="bet-input" id="flappy-bet-input" type="number" min="0" step="1" placeholder="0" />
          <span class="bet-preview" id="flappy-bet-preview"></span>
        </div>
      </div>
    </div>
  `;let t=e.querySelector(`#flappy-canvas`).getContext(`2d`),n=e.querySelector(`#flappy-overlay`),r=e.querySelector(`#flappy-msg`),a=e.querySelector(`#flappy-sub`),o=e.querySelector(`#flappy-score`),s=e.querySelector(`#flappy-cooldown`),l=e.querySelector(`#flappy-bet-row`),u=e.querySelector(`#flappy-bet-input`),d=e.querySelector(`#flappy-bet-preview`),f=J/2,p=0,m=[],h=0,g=!1,_=!1,v=0,y=0,b=0,x=!1,S=0;function C(){let e=Math.floor(parseFloat(u.value)||0);d.textContent=e>0?`= ${i(e)} bits`:``}e.querySelectorAll(`.bet-quick`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.dataset.pct??`100`,10),n=c.getState().bits;u.value=String(Math.max(0,Math.floor(n*t/100))),C()})}),u.addEventListener(`input`,C),C();let w=0,T=0,E=1e3/60*Ee;function D(){return Date.now()<y}function O(){if(!x){if(!_){k();return}g&&(p=Ce)}}function k(){if(D())return;x=!0,n.style.display=`flex`,r.style.fontSize=`2rem`,r.style.color=`#fff`,a.textContent=``;let e=3,t=()=>{if(r.textContent=String(e),e<=0){x=!1,r.style.fontSize=``,r.style.color=``,A();return}e--,window.setTimeout(t,700)};t()}function A(){if(D())return;let e=Math.floor(parseFloat(u.value)||0);if(e>0&&!c.spendBits(e)){a.textContent=`Pas assez de bits pour cette mise !`;return}S=e,f=J/2,p=0,m=[],h=0,g=!0,_=!0,w=0,T=0,n.style.display=`none`,o.textContent=`0`,l.style.display=`none`,u.disabled=!0,cancelAnimationFrame(v),v=requestAnimationFrame(P)}function j(){y=Date.now()+De,s.style.display=``,clearInterval(b),b=window.setInterval(()=>{let e=Math.ceil((y-Date.now())/1e3);e<=0?(clearInterval(b),s.style.display=`none`,l.style.display=``,u.disabled=!1,r.textContent=`▶ Prêt !`,a.textContent=`Clique ou Espace · +${i(Oe())} bits/tuyau`,n.style.display=`flex`):s.textContent=`Disponible dans ${e}s`},500)}function M(){g=!1,cancelAnimationFrame(v),F();let e;e=S>0?Math.floor(S*h/5*c.getModuleMultiplier()):h*Oe(),e>0&&c.addBits(e),r.style.fontSize=``,r.style.color=``,r.textContent=h>0?`Score : ${h} — +${i(e)} bits`:`Raté ! Score : 0`,a.textContent=h>=10?`🔥 Bien joué !`:h>=5?`Pas mal !`:`Continue...`,n.style.display=`flex`,l.style.display=``,u.disabled=!1,C(),j(),_=!1}function N(e){let t=e.x,n=e.x+X,r=xe-Y+2;if(xe+Y-2<t||r>n)return!1;let i=f-Y+2,a=f+Y-2;return i<e.topH||a>e.topH+we}function P(e){let t=w>0?Math.min(e-w,50):16.667;w=e;let n=t/16.667;if(p+=Se*n,f+=p*n,e-T>E){T=e;let t=32+Math.floor(Math.random()*(J-we-64));m.push({x:be,topH:t})}for(let e of m)e.x-=Te*n,!e.scored&&e.x+X<xe&&(e.scored=!0,h++,o.textContent=String(h));if(m=m.filter(e=>e.x+X>0),f+Y>J||f-Y<0){M();return}for(let e of m)if(N(e)){M();return}F(),v=requestAnimationFrame(P)}function F(){t.clearRect(0,0,be,J),t.fillStyle=`#0a0a0a`,t.fillRect(0,0,be,J),t.strokeStyle=`#333`,t.lineWidth=1,t.beginPath(),t.moveTo(0,J-1),t.lineTo(be,J-1),t.stroke();for(let e of m){t.fillStyle=`#2a7a2a`,t.fillRect(e.x,0,X,e.topH),t.fillStyle=`#3a9a3a`,t.fillRect(e.x-2,e.topH-8,X+4,8);let n=e.topH+we;t.fillStyle=`#2a7a2a`,t.fillRect(e.x,n,X,J-n),t.fillStyle=`#3a9a3a`,t.fillRect(e.x-2,n,X+4,8)}t.beginPath(),t.arc(xe,f,Y,0,Math.PI*2),t.fillStyle=g?`#f0c040`:`#888`,t.fill(),t.strokeStyle=g?`#c09000`:`#555`,t.lineWidth=2,t.stroke(),g&&(t.beginPath(),t.arc(xe+4,f-3,2.5,0,Math.PI*2),t.fillStyle=`#111`,t.fill())}let I=e.querySelector(`.flappy-wrap`),L=e=>{e.target.closest(`.bet-quick, .bet-input`)||D()||O()},R=e=>{(e.code===`Space`||e.code===`ArrowUp`)&&(e.preventDefault(),D()||O())};return I.addEventListener(`click`,L),window.addEventListener(`keydown`,R),F(),()=>{cancelAnimationFrame(v),clearInterval(b),x=!1,I.removeEventListener(`click`,L),window.removeEventListener(`keydown`,R)}}var Ae=3e4,Z=5,je=5,Me=100,Ne=[`#c44040`,`#c48a30`,`#4080c4`,`#40a464`,`#888888`],Pe=180;function Fe(e){let t=[],n=0,r=!1,a=0,o=0,s=!1,l=0;function u(){return Math.floor(2*c.getModuleMultiplier())}e.innerHTML=`
    <div class="puzzle-panel">
      <div class="puzzle-header">
        <h2 class="panel-title">🧩 Tile Match</h2>
        <div class="puzzle-meta">
          <span class="puzzle-meta__item">Score : <span id="pz-score" class="mono">0</span> / ${Me}</span>
          <span class="puzzle-meta__item mono" id="pz-reward"></span>
        </div>
      </div>
      <div class="puzzle-progress-bar">
        <div class="puzzle-progress-fill" id="pz-bar" style="width:0%"></div>
      </div>
      <div class="puzzle-grid" id="pz-grid"></div>
      <div class="puzzle-footer">
        <div class="bet-wrap" id="pz-bet-row">
          <div class="bet-quicks">
            <button class="bet-quick" data-pct="10">10%</button>
            <button class="bet-quick" data-pct="25">25%</button>
            <button class="bet-quick" data-pct="50">50%</button>
            <button class="bet-quick" data-pct="100">MAX</button>
          </div>
          <div class="bet-input-row">
            <input class="bet-input" id="pz-bet-input" type="number" min="0" step="1" placeholder="0" />
            <span class="bet-preview" id="pz-bet-preview"></span>
          </div>
        </div>
        <button class="puzzle-btn" id="pz-start">Lancer une partie</button>
        <div class="puzzle-hint" id="pz-hint">Clique sur 2+ tuiles adjacentes de même couleur pour les effacer</div>
      </div>
    </div>
  `;let d=e.querySelector(`#pz-grid`),f=e.querySelector(`#pz-score`),p=e.querySelector(`#pz-bar`),m=e.querySelector(`#pz-start`),h=e.querySelector(`#pz-hint`),g=e.querySelector(`#pz-reward`),_=e.querySelector(`#pz-bet-row`),v=e.querySelector(`#pz-bet-input`),y=e.querySelector(`#pz-bet-preview`);function b(){let e=Math.floor(parseFloat(v.value)||0);y.textContent=e>0?`= ${i(e)} bits`:``}e.querySelectorAll(`.bet-quick`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.dataset.pct??`100`,10),n=c.getState().bits;v.value=String(Math.max(0,Math.floor(n*t/100))),b()})}),v.addEventListener(`input`,b),b();function x(){t=Array.from({length:Z*je},()=>Ne[Math.floor(Math.random()*Ne.length)])}function S(e){d.innerHTML=``;for(let n=0;n<t.length;n++){let i=document.createElement(`div`);t[n]?(i.className=`puzzle-tile`,e?.has(n)&&i.classList.add(`puzzle-tile--drop`),i.style.setProperty(`--tile-color`,t[n]),r&&i.addEventListener(`click`,()=>w(n))):i.className=`puzzle-tile puzzle-tile--empty`,d.appendChild(i)}}function C(e,n){let r=new Set,i=new Set;function a(e){if(i.has(e)||t[e]!==n)return;i.add(e),r.add(e);let o=Math.floor(e/Z),s=e%Z;o>0&&a(e-Z),o<je-1&&a(e+Z),s>0&&a(e-1),s<Z-1&&a(e+1)}return a(e),r}function w(e){if(!r||!t[e]||s)return;let i=C(e,t[e]);if(i.size<2){h.textContent=`Il faut au moins 2 tuiles adjacentes de même couleur !`;return}s=!0;let a=d.querySelectorAll(`.puzzle-tile, .puzzle-tile--empty`);i.forEach(e=>a[e]?.classList.add(`puzzle-tile--clear`)),setTimeout(()=>{let e=i.size>=6?3:i.size>=4?2:1,r=i.size*e;n=Math.min(n+r,Me),h.textContent=e>1?`Combo ×${e} — +${r} pts`:`+${r} pts`,i.forEach(e=>{t[e]=``});let a=[...t];T();let o=new Set;for(let e=0;e<t.length;e++)t[e]&&t[e]!==a[e]&&o.add(e);f.textContent=String(n),p.style.width=`${Math.round(n/Me*100)}%`,O(),s=!1,S(o),n>=Me?k(!0):E()&&k(!1)},Pe)}function T(){for(let e=0;e<Z;e++){let n=[];for(let r=0;r<je;r++){let i=t[r*Z+e];i&&n.push(i)}for(let r=0;r<je;r++){let i=je-n.length;t[r*Z+e]=r<i?``:n[r-i]}}}function E(){for(let e=0;e<t.length;e++)if(t[e]&&C(e,t[e]).size>=2)return!1;return!0}function D(){return Math.floor(l>0?l*n/50*c.getModuleMultiplier():n*u())}function O(){g.textContent=l>0?`→ ${i(D())} bits`:`+${i(u())} bits/pt`}function k(e){r=!1;let t=D();c.addBits(t),h.textContent=e?`🎉 Objectif atteint ! +${i(t)} bits`:`Bloqué à ${n} pts — +${i(t)} bits`,_.style.display=``,m.textContent=`Rejouer`,m.style.display=``,m.disabled=!0,a=Date.now()+Ae,clearInterval(o),o=window.setInterval(()=>{let e=Math.ceil((a-Date.now())/1e3);e<=0?(clearInterval(o),m.disabled=!1,m.textContent=`Rejouer`):m.textContent=`Rejouer (${e}s)`},500)}function A(){if(r||Date.now()<a)return;let e=Math.floor(parseFloat(v.value)||0);if(e>0&&!c.spendBits(e)){h.textContent=`Pas assez de bits pour cette mise !`;return}l=e,n=0,r=!0,s=!1,f.textContent=`0`,p.style.width=`0%`,h.textContent=`Clique sur 2+ tuiles adjacentes de même couleur`,_.style.display=`none`,m.style.display=`none`,O(),x(),S()}return m.addEventListener(`click`,A),O(),x(),S(),()=>{clearInterval(o)}}function Ie(e){function t(){let t=new Set(c.getState().achievements),n=o.length,r=t.size;e.innerHTML=`
      <div class="ach-panel">
        <div class="ach-progress">
          <span class="ach-progress__label">Succès débloqués</span>
          <span class="ach-progress__count mono">${r} / ${n}</span>
          <div class="ach-progress__bar">
            <div class="ach-progress__fill" style="width:${Math.round(r/n*100)}%"></div>
          </div>
        </div>
        <div class="ach-grid">
          ${o.map(e=>{let n=t.has(e.id);return`
              <div class="ach-card${n?` ach-card--done`:``}" title="${n?e.description:`Non débloqué`}">
                <div class="ach-card__icon">${n?`🏆`:`🔒`}</div>
                <div class="ach-card__body">
                  <div class="ach-card__name">${n?e.name:`???`}</div>
                  ${n?`<div class="ach-card__reward mono">+${i(e.reward)}</div>`:``}
                </div>
              </div>
            `}).join(``)}
        </div>
      </div>
    `}let n=c.subscribe(t);return t(),()=>n()}var Q={normal:{label:``,color:``,durationSec:15,burstMult:4,burstSec:20,targets:5,seqLen:5,lossPct:.02},hard:{label:`⚡ HARD`,color:`#ff9900`,durationSec:11,burstMult:7,burstSec:25,targets:8,seqLen:7,lossPct:.03},extreme:{label:`💀 EXTREME`,color:`#ff4444`,durationSec:8,burstMult:12,burstSec:30,targets:12,seqLen:9,lossPct:.05}};function Le(){let e=c.getCurrentPhase();return e>=5?Q.extreme:e>=3?Q.hard:Q.normal}var Re=[15e4,36e4],ze={title:`🎯 Cibles`,mount(e,t,n){let r=0,i=t.targets;function a(){let o=document.createElement(`button`);o.className=`mg-target`;let s=Math.max(e.clientWidth-52,10),c=Math.max(e.clientHeight-52,10);if(o.style.left=Math.random()*s+`px`,o.style.top=Math.random()*c+`px`,t.targets>5){let e=t.targets>8?28:36;o.style.width=e+`px`,o.style.height=e+`px`}e.appendChild(o),o.addEventListener(`click`,()=>{o.remove(),++r>=i?n():a()},{once:!0})}return a(),()=>e.querySelectorAll(`.mg-target`).forEach(e=>e.remove())}},Be={title:`⌨️ Séquence`,mount(e,t,n,r){let i=[`A`,`S`,`D`,`F`,`J`,`K`,`L`],a=Array.from({length:t.seqLen},()=>i[Math.floor(Math.random()*i.length)]),o=0,s=document.createElement(`div`);s.className=`mg-sequence`,s.innerHTML=a.map((e,t)=>`<span class="mg-key" id="k${t}">${e}</span>`).join(``),e.appendChild(s);function c(e){let t=e.key.toUpperCase();i.includes(t)&&(t===a[o]?(s.querySelector(`#k${o}`)?.classList.add(`mg-key--hit`),++o>=a.length&&n()):r())}return window.addEventListener(`keydown`,c),()=>window.removeEventListener(`keydown`,c)}},Ve={title:`🧮 Calcul`,mount(e,t,n,r){let i=t.targets>5,a,o,s;i?(a=Math.floor(Math.random()*12)+2,o=Math.floor(Math.random()*12)+2,s=a*o):(a=Math.floor(Math.random()*20)+1,o=Math.floor(Math.random()*20)+1,s=a+o);let c=new Set;for(;c.size<3;){let e=Math.floor(Math.random()*(i?20:15))-(i?10:7),t=s+e;t!==s&&t>0&&c.add(t)}let l=[...c,s].sort(()=>Math.random()-.5),u=document.createElement(`div`);return u.className=`mg-math`,u.innerHTML=`
      <div class="mg-math__question">${a} ${i?`×`:`+`} ${o} = ?</div>
      <div class="mg-math__choices">
        ${l.map(e=>`<button class="mg-choice" data-val="${e}">${e}</button>`).join(``)}
      </div>
    `,e.appendChild(u),u.addEventListener(`click`,e=>{let t=e.target.closest(`[data-val]`);t&&(Number(t.dataset.val)===s?n():r())}),()=>{}}},He={title:`⚡ Double Frappe`,mount(e,t,n,r){let i=0;function a(){e.querySelectorAll(`.mg-target`).forEach(e=>e.remove());let o=document.createElement(`button`),s=document.createElement(`button`);o.className=`mg-target mg-target--primary`,s.className=`mg-target mg-target--secondary`;let c=Math.max(e.clientWidth-44,10),l=Math.max(e.clientHeight-44,10);o.style.left=Math.random()*c+`px`,o.style.top=Math.random()*l+`px`,s.style.left=Math.random()*c+`px`,s.style.top=Math.random()*l+`px`,s.style.opacity=`0.2`,s.style.pointerEvents=`none`,e.appendChild(o),e.appendChild(s),o.addEventListener(`click`,()=>{o.remove(),s.style.opacity=`1`,s.style.pointerEvents=``,i=1,s.addEventListener(`click`,()=>{s.remove(),++i>=t.targets/2+1?n():(i=0,a())},{once:!0}),setTimeout(()=>{s.isConnected&&(s.remove(),r())},1200)},{once:!0})}return a(),()=>e.querySelectorAll(`.mg-target`).forEach(e=>e.remove())}},Ue=[ze,Be,Ve],We=[ze,Be,Ve],Ge=[ze,Be,Ve,He];function Ke(e){let t=e===Q.extreme?Ge:e===Q.hard?We:Ue;return t[Math.floor(Math.random()*t.length)]}function qe(){let e=0,t=null,n=null;function r(){let[t,n]=Re;e=window.setTimeout(o,t+Math.random()*(n-t))}function o(){if(t)return;let e=Le();s(Ke(e),e)}function s(e,o){let s=document.createElement(`div`);s.className=`mg-card`,o.label&&s.classList.add(`mg-card--hard`),o===Q.extreme&&s.classList.add(`mg-card--extreme`);let d=o.durationSec,f=c.getEffectiveBPS()*o.burstSec*o.burstMult,p=!1,m=o.label?`<span class="mg-diff-badge" style="color:${o.color}">${o.label}</span>`:``;s.innerHTML=`
      <div class="mg-card__header">
        <span class="mg-card__title">${e.title} ${m}</span>
        <div class="mg-card__controls">
          <span class="mg-card__timer mono" id="mg-timer">${d}</span>
          <button class="mg-card__close" id="mg-close" title="Abandonner">✕</button>
        </div>
      </div>
      <p class="mg-card__instructions">Récompense : <strong class="mono">+${i(f)} bits</strong> · ×${o.burstMult} BPS · ${a(o.burstSec)}</p>
      <div class="mg-card__arena" id="mg-arena"></div>
      <div class="mg-card__result" id="mg-result" style="display:none"></div>
    `,document.body.appendChild(s),t=s;let h=s.querySelector(`#mg-arena`),g=s.querySelector(`#mg-timer`),_=s.querySelector(`#mg-result`),v=s.querySelector(`#mg-close`),y=d,b=null,x=setInterval(()=>{y--,g.textContent=String(y),y<=3&&(g.style.color=`var(--accent2)`),y<=0&&(clearInterval(x),C())},1e3);v.addEventListener(`click`,()=>{clearInterval(x),b!==null&&clearTimeout(b),n?.(),T(!0)});function S(){clearInterval(x),n?.(),l(o),w(!0,o)}function C(){clearInterval(x),n?.(),u(o),w(!1,o)}function w(e,t){h.style.display=`none`,_.style.display=`flex`;let n=c.getEffectiveBPS()*t.burstSec*t.burstMult,r=Math.floor(c.getState().bits*t.lossPct);_.innerHTML=e?`<div class="mg-result mg-result--win">
             <span>🎉 +${i(n)} bits !</span>
             <small>×${t.burstMult} BPS · ${a(t.burstSec)}</small>
           </div>`:`<div class="mg-result mg-result--lose"><span>💀 Raté ! −${i(r)} bits</span></div>`,b=window.setTimeout(()=>T(!0),2200)}function T(e){if(p)return;p=!0,s.classList.add(`mg-card--out`);let i=!1,a=()=>{i||(i=!0,s.remove(),t=null,n=null,e&&r())};s.addEventListener(`animationend`,a,{once:!0}),window.setTimeout(a,400)}n=e.mount(h,o,S,C)}function l(e){let t=c.getEffectiveBPS()*e.burstSec*e.burstMult;c.setState(n=>{n.bits+=t,n.totalBitsEarned+=t,n.multipliers.minigame=e.burstMult,n.multipliers.minigameEndsAt=Date.now()+e.burstSec*1e3})}function u(e){let t=Math.floor(c.getState().bits*e.lossPct);t>0&&c.setState(e=>{e.bits=Math.max(0,e.bits-t)})}return r(),()=>{clearTimeout(e),n?.(),t?.remove()}}var Je=[];function Ye(){let e=c.getCurrentPhase();document.body.dataset.phase=String(e);let t=c.subscribe(()=>{let t=c.getCurrentPhase();document.body.dataset.phase=String(t),t>e&&(e=t,c.setState(e=>{e.lastPhase=t}),Xe(t),Je.forEach(e=>e(t)))});return()=>t()}function Xe(t){let n=e.phases.find(e=>e.id===t);if(!n)return;let r=n.unlocks.length>0?`<div class="phase-notif__unlocks">New: ${n.unlocks.map(e=>`<strong>${e}</strong>`).join(`, `)}</div>`:``,i=document.createElement(`div`);i.className=`phase-notif`,i.innerHTML=`
    <div class="phase-notif__badge">Phase ${t}</div>
    <div class="phase-notif__title">${n.title}</div>
    <div class="phase-notif__narrative">${n.narrative}</div>
    ${r}
  `,document.body.appendChild(i);let a=()=>{i.classList.add(`phase-notif--out`),i.addEventListener(`animationend`,()=>i.remove(),{once:!0})};i.addEventListener(`click`,a),setTimeout(a,6e3)}var Ze=0;function Qe(t){if(!t.clientId||!t.channelName)return()=>{};c.setState(e=>{e.twitch.channelName=t.channelName});let n=window.__TWITCH_TOKEN__;if(!n)return()=>{};async function r(){try{let e=`https://api.twitch.tv/helix/streams?user_login=${encodeURIComponent(t.channelName)}`,r=await fetch(e,{headers:{"Client-ID":t.clientId,Authorization:`Bearer ${n}`}});if(!r.ok){console.warn(`[Twitch] API responded with`,r.status);return}let i=(await r.json()).data[0],a=!!i;c.setTwitchLive(a,{title:i?.title??``,game:i?.game_name??``})}catch(e){console.warn(`[Twitch] Poll failed:`,e)}}return r(),Ze=window.setInterval(r,e.twitch.pollIntervalMs),()=>clearInterval(Ze)}function $e(e){function t(){let{twitch:t,multipliers:n}=c.getState();if(!t.channelName){e.style.display=`none`;return}e.style.display=`flex`;let r=`https://www.twitch.tv/${t.channelName||`cireericfr`}`;t.isLive?e.innerHTML=`
        <a class="twitch-badge twitch-badge--live" href="${r}" target="_blank" rel="noopener">
          <span class="twitch-badge__dot"></span>
          <span class="twitch-badge__text">LIVE</span>
          <span class="twitch-badge__boost">+${Math.round((n.twitch-1)*100)}%</span>
          ${t.gameName?`<span class="twitch-badge__game">${t.gameName}</span>`:``}
        </a>
      `:e.innerHTML=`
        <a class="twitch-badge twitch-badge--offline" href="${r}" target="_blank" rel="noopener">
          <span class="twitch-badge__text">⚫ ${t.channelName||`cireericfr`} offline</span>
        </a>
      `}let n=c.subscribe(t);return t(),()=>n()}var et={en:{"stat.total_earned":`Total earned`,"stat.bps":`BPS`,"stat.bpc":`BPC`,"stat.global_multi":`Global ×`,"stat.burst":`⚡ BURST`,"stat.phase":`Phase`,"phase.1":`I — Garage Hacker`,"phase.2":`II — Script Kiddie`,"phase.3":`III — Digital Nomad`,"phase.4":`IV — AI Engineer`,"phase.5":`V — Quantum Singularity`,"clicker.click":`Click`,"clicker.combo":`Combo ×`,"production.bps_label":`BPS`,"production.owned":`Owned`,"production.buy":`Buy`,"production.buy_bulk":`Buy ×10`,"gen.bit_miner":`Bit Miner`,"gen.bit_miner_desc":`A basic script that mines bits slowly.`,"gen.script_farm":`Script Farm`,"gen.script_farm_desc":`Runs scripts in parallel, faster than manual mining.`,"gen.bot_network":`Bot Network`,"gen.bot_network_desc":`Distributed bots harvest bits from multiple sources.`,"gen.data_center":`Data Center`,"gen.data_center_desc":`Industrial-scale bit production.`,"gen.ai_cluster":`AI Cluster`,"gen.ai_cluster_desc":`Cutting-edge AI optimizes bit extraction.`,"gen.quantum_farm":`Quantum Farm`,"gen.quantum_farm_desc":`Harnesses quantum tunneling for bits.`,"project.market_access":`Market Access`,"project.market_access_desc":`Unlocks the Trade module.`,"project.casino_charter":`Casino Charter`,"project.casino_charter_desc":`Unlocks the Casino module.`,"project.aim_protocol":`Precision Protocol`,"project.aim_protocol_desc":`Unlocks the Aim Trainer module.`,"project.bomb_defuser":`Bomb Defuser`,"project.bomb_defuser_desc":`Reduces bomb frequency in the clicker by 50%.`,"project.neural_overclock":`Neural Overclock`,"project.neural_overclock_desc":`All generators produce ×1.5 permanently.`,"project.launch_protocol":`Launch Protocol`,"project.launch_protocol_desc":`Initiates the final sequence.`,"casino.title":`🎰 Casino`,"casino.safe_bet":`Safe Bet`,"casino.safe_bet_desc":`100 Bits → ×1.25 multiplier`,"casino.risky_bet":`Risky Bet`,"casino.risky_bet_desc":`500 Bits → ×2.0 multiplier`,"casino.extreme_bet":`Extreme Bet`,"casino.extreme_bet_desc":`2000 Bits → ×5.0 multiplier`,"casino.insufficient_bits":`Insufficient Bits`,"casino.bet":`Bet`,"casino.win":`🎉 You win!`,"casino.lose":`💀 You lose!`,"trade.title":`📈 Trade`,"trade.sell":`Sell`,"trade.current_price":`Current Price`,"trade.insufficient_units":`No units to sell`,"puzzle.title":`🧩 Puzzle`,"puzzle.score":`Score`,"puzzle.claim":`Claim`,"puzzle.claiming":`Claiming...`,"minigame.click_target":`🎯 Click the Target`,"minigame.click_target_instructions":`Click the glowing target 5 times.`,"minigame.key_sequence":`⌨️ Key Sequence`,"minigame.key_sequence_instructions":`Type the sequence shown.`,"minigame.quick_math":`🧮 Quick Math`,"minigame.quick_math_instructions":`Tap the correct answer.`,"minigame.win_reward":`🎉 +{reward} bits!`,"minigame.win_info":`×{multiplier} BPS · {duration}`,"minigame.lose":`💀 Too slow!`,"button.buy":`Buy`,"button.close":`Close`,"button.skip":`Skip`,"button.sell":`Sell`,"button.play":`Play`,"button.claim":`Claim`,"twitch.live":`🔴 LIVE +50%`,"twitch.offline":`Twitch`,"header.title":`BitStream`,"leaderboard.title":`🏆 Leaderboard`,"leaderboard.rank":`Rank`,"leaderboard.player":`Player`,"leaderboard.bits":`Bits`,"leaderboard.you":`(You)`,"leaderboard.enter_name":`Enter your name`},fr:{"stat.total_earned":`Total gagné`,"stat.bps":`BPS`,"stat.bpc":`BPC`,"stat.global_multi":`Multiplicateur`,"stat.burst":`⚡ BURST`,"stat.phase":`Phase`,"phase.1":`I — Pirate Garage`,"phase.2":`II — Script Kiddie`,"phase.3":`III — Nomade Digital`,"phase.4":`IV — Ingénieur IA`,"phase.5":`V — Singularité Quantique`,"clicker.click":`Cliquer`,"clicker.combo":`Combo ×`,"production.bps_label":`BPS`,"production.owned":`Possédé`,"production.buy":`Acheter`,"production.buy_bulk":`Acheter ×10`,"gen.bit_miner":`Mineur de Bits`,"gen.bit_miner_desc":`Un script basique qui extrait les bits lentement.`,"gen.script_farm":`Ferme de Scripts`,"gen.script_farm_desc":`Exécute des scripts en parallèle, plus rapide que l'extraction manuelle.`,"gen.bot_network":`Réseau de Bots`,"gen.bot_network_desc":`Des bots distribués récoltent les bits de plusieurs sources.`,"gen.data_center":`Centre de Données`,"gen.data_center_desc":`Production de bits à l'échelle industrielle.`,"gen.ai_cluster":`Cluster IA`,"gen.ai_cluster_desc":`L'IA de pointe optimise l'extraction de bits.`,"gen.quantum_farm":`Ferme Quantique`,"gen.quantum_farm_desc":`Exploite l'effet tunnel quantique pour les bits.`,"project.market_access":`Accès au Marché`,"project.market_access_desc":`Déverrouille le module Commerce.`,"project.casino_charter":`Charte du Casino`,"project.casino_charter_desc":`Déverrouille le module Casino.`,"project.aim_protocol":`Protocole de Précision`,"project.aim_protocol_desc":`Déverrouille l'Aim Trainer.`,"project.bomb_defuser":`Désamorceur de Bombes`,"project.bomb_defuser_desc":`Réduit la fréquence des bombes dans le clicker de 50%.`,"project.neural_overclock":`Surclocking Neuronal`,"project.neural_overclock_desc":`Tous les générateurs produisent ×1.5 de façon permanente.`,"project.launch_protocol":`Protocole de Lancement`,"project.launch_protocol_desc":`Initie la séquence finale.`,"casino.title":`🎰 Casino`,"casino.safe_bet":`Pari Sûr`,"casino.safe_bet_desc":`100 Bits → ×1.25 multiplicateur`,"casino.risky_bet":`Pari Risqué`,"casino.risky_bet_desc":`500 Bits → ×2.0 multiplicateur`,"casino.extreme_bet":`Pari Extrême`,"casino.extreme_bet_desc":`2000 Bits → ×5.0 multiplicateur`,"casino.insufficient_bits":`Bits insuffisants`,"casino.bet":`Parier`,"casino.win":`🎉 Vous gagnez!`,"casino.lose":`💀 Vous perdez!`,"trade.title":`📈 Commerce`,"trade.sell":`Vendre`,"trade.current_price":`Prix Actuel`,"trade.insufficient_units":`Aucune unité à vendre`,"puzzle.title":`🧩 Puzzle`,"puzzle.score":`Score`,"puzzle.claim":`Réclamer`,"puzzle.claiming":`Réclamation...`,"minigame.click_target":`🎯 Cliquez la Cible`,"minigame.click_target_instructions":`Cliquez la cible brillante 5 fois.`,"minigame.key_sequence":`⌨️ Séquence de Touches`,"minigame.key_sequence_instructions":`Tapez la séquence affichée.`,"minigame.quick_math":`🧮 Mathématiques Rapides`,"minigame.quick_math_instructions":`Appuyez sur la bonne réponse.`,"minigame.win_reward":`🎉 +{reward} bits!`,"minigame.win_info":`×{multiplier} BPS · {duration}`,"minigame.lose":`💀 Trop lent!`,"button.buy":`Acheter`,"button.close":`Fermer`,"button.skip":`Passer`,"button.sell":`Vendre`,"button.play":`Jouer`,"button.claim":`Réclamer`,"twitch.live":`🔴 EN DIRECT +50%`,"twitch.offline":`Twitch`,"header.title":`BitStream`,"leaderboard.title":`🏆 Classement`,"leaderboard.rank":`Rang`,"leaderboard.player":`Joueur`,"leaderboard.bits":`Bits`,"leaderboard.you":`(Vous)`,"leaderboard.enter_name":`Entrez votre nom`}},tt=`fr`;function nt(e){tt=e.getLanguage(),e.subscribe(()=>{tt=e.getLanguage()})}function $(e,t){let n=et[tt][e]||e;return t&&Object.entries(t).forEach(([e,t])=>{n=n.replace(RegExp(`\\{${e}\\}`,`g`),String(t))}),n}function rt(t,n={}){nt(c),t.innerHTML=`
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
          <canvas id="bps-graph" class="bps-graph" width="160" height="28"></canvas>
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
            <span class="stats-value mono" id="stat-phase">I — Garage Hacker</span>
          </div>
        </div>
      </aside>

      <!-- Colonne centre-gauche : Générateurs -->
      <section class="layout__center-left">
        <section id="prod-slot"></section>
      </section>

      <!-- Colonne centre-droite : Modules débloquables + Puzzle -->
      <section class="layout__center-right">
        <section id="casino-slot"     style="display:none"></section>
        <section id="aimtrainer-slot" style="display:none"></section>
        <section id="flappy-slot"     style="display:none"></section>
        <section id="puzzle-slot"></section>
      </section>

      <!-- Colonne droite : Projets + Succès + Classement -->
      <aside class="layout__right">
        <section id="projects-slot"></section>
        <section id="achievements-slot"></section>
        <section id="leaderboard-slot"></section>
      </aside>
    </main>
  `,I(t.querySelector(`#hdr`)),L(t.querySelector(`#clicker-slot`)),z(t.querySelector(`#prod-slot`)),ie(t.querySelector(`#projects-slot`)),F(t.querySelector(`#leaderboard-slot`)),Fe(t.querySelector(`#puzzle-slot`)),Ie(t.querySelector(`#achievements-slot`)),qe(),Ye(),n.twitchClientId&&n.twitchChannel&&Qe({clientId:n.twitchClientId,channelName:n.twitchChannel});let r=document.querySelector(`#twitch-badge-slot`);r&&$e(r);let a=t.querySelector(`#casino-slot`),o=t.querySelector(`#aimtrainer-slot`),s=t.querySelector(`#flappy-slot`),l=!1,u=!1,d=!1;function f(){let e=c.getState();!l&&e.projects.find(e=>e.id===`protocole_casino`)?.purchased&&(a.style.display=``,fe(a),l=!0),!u&&e.projects.find(e=>e.id===`protocole_precision`)?.purchased&&(o.style.display=``,ye(o),u=!0),!d&&e.projects.find(e=>e.id===`protocole_arcade`)?.purchased&&(s.style.display=``,ke(s),d=!0)}c.subscribe(f),f();function p(e){let t=document.createElement(`div`);t.className=`achievement-toast`,t.innerHTML=`
      <div class="achievement-toast__icon">🏆</div>
      <div class="achievement-toast__body">
        <div class="achievement-toast__title">${e.name}</div>
        <div class="achievement-toast__desc">${e.description}</div>
        <div class="achievement-toast__reward">+${i(e.reward)} bits</div>
      </div>
    `,document.body.appendChild(t),requestAnimationFrame(()=>t.classList.add(`achievement-toast--show`)),setTimeout(()=>t.classList.remove(`achievement-toast--show`),3200),setTimeout(()=>t.remove(),3700)}document.addEventListener(`bitstream:achievement`,e=>{p(e.detail)});let m=t.querySelector(`#stat-total`),h=t.querySelector(`#stat-bps`),g=t.querySelector(`#stat-bpc`),_=t.querySelector(`#stat-multi`),v=t.querySelector(`#burst-row`),y=t.querySelector(`#stat-burst`),b=t.querySelector(`#stat-phase`),x=t.querySelector(`#label-total`),S=t.querySelector(`#label-bps`),C=t.querySelector(`#label-bpc`),w=t.querySelector(`#label-multi`),T=t.querySelector(`#label-burst`),E=t.querySelector(`#label-phase`),D=[``,`I`,`II`,`III`,`IV`,`V`];function O(){x.textContent=$(`stat.total_earned`),S.textContent=$(`stat.bps`),C.textContent=$(`stat.bpc`),w.textContent=$(`stat.global_multi`),T.textContent=$(`stat.burst`),E.textContent=$(`stat.phase`)}function k(){let t=c.getState(),n=t.multipliers,r=c.getCurrentPhase(),a=e.phases.find(e=>e.id===r);m.textContent=i(t.totalBitsEarned),h.textContent=i(c.getEffectiveBPS())+` b/s`,g.textContent=i(c.getEffectiveBPC())+` /click`,b.textContent=`${D[r]} — ${a.title}`,_.textContent=i(c.getPassiveMultiplier())+`×`;let o=c.isMinigameActive();if(v.style.display=o?`flex`:`none`,o){let e=Math.max(0,Math.ceil((n.minigameEndsAt-Date.now())/1e3));y.textContent=`×${n.minigame} · ${e}s`}}let A=t.querySelector(`#bps-graph`),j=A.getContext(`2d`),M=[],N=0;function P(){let e=Date.now();if(e-N<3e3)return;N=e,M.push(c.getEffectiveBPS()),M.length>60&&M.shift();let t=A.width,n=A.height;if(j.clearRect(0,0,t,n),M.length<2)return;let r=Math.max(...M,.001);j.beginPath(),M.forEach((e,i)=>{let a=i/59*t,o=n-e/r*(n-2)-1;i===0?j.moveTo(a,o):j.lineTo(a,o)}),j.lineTo((M.length-1)/59*t,n),j.lineTo(0,n),j.closePath(),j.fillStyle=`rgba(255,255,255,0.04)`,j.fill(),j.beginPath(),M.forEach((e,i)=>{let a=i/59*t,o=n-e/r*(n-2)-1;i===0?j.moveTo(a,o):j.lineTo(a,o)}),j.strokeStyle=`rgba(255,255,255,0.5)`,j.lineWidth=1.5,j.stroke()}c.subscribe(P),c.subscribe(O),c.subscribe(k),O(),k(),window.store=c}var it=0;function at(e){it===0&&(it=e);let t=Math.min((e-it)/1e3,1);it=e;let n=c.getEffectiveBPS();n>0&&c.addBits(n*t),requestAnimationFrame(at)}function ot(){it=0,requestAnimationFrame(at)}function st(e){let t=document.createElement(`div`);t.className=`mg-overlay`,t.innerHTML=`
    <div class="mg-modal offline-modal" role="dialog" aria-modal="true">
      <div class="offline-modal__icon">💤</div>
      <h2 class="offline-modal__title">De retour !</h2>
      <p class="offline-modal__desc">
        Pendant ton absence de <strong>${a(e.seconds)}</strong>,<br/>
        tes générateurs ont produit
      </p>
      <div class="offline-modal__amount mono">+${i(e.bitsEarned)} bits</div>
      <button class="upg-btn offline-modal__btn" id="offline-close">Récupérer</button>
    </div>
  `,document.body.appendChild(t),t.querySelector(`#offline-close`).addEventListener(`click`,()=>{t.classList.add(`mg-overlay--out`);let e=()=>t.remove();t.addEventListener(`animationend`,e,{once:!0}),setTimeout(e,500)})}function ct(){if(A())return;let e=document.createElement(`div`);e.className=`username-modal-overlay`,e.innerHTML=`
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
  `,document.body.appendChild(e);let t=e.querySelector(`#username-input`),n=e.querySelector(`#username-confirm`),r=e.querySelector(`#username-error`);requestAnimationFrame(()=>t.focus());function i(){let n=t.value.trim();if(n.length<2){r.textContent=`Pseudo trop court (2 caractères minimum).`,t.classList.add(`username-modal__input--error`);return}j(n),e.classList.add(`username-modal-overlay--out`),e.addEventListener(`animationend`,()=>e.remove(),{once:!0}),setTimeout(()=>e.remove(),400),v()&&x(n,0).catch(()=>{})}n.addEventListener(`click`,i),t.addEventListener(`keydown`,e=>{e.key===`Enter`&&i(),r.textContent=``,t.classList.remove(`username-modal__input--error`)})}window.__TWITCH_TOKEN__=`94bmgl4v8skd5nfbqlgsbqitssrf3t`;var lt=document.getElementById(`app`);p();var ut=d();rt(lt,{twitchClientId:`73u1zjxog6q27ehere4n1exf2ke5pv`,twitchChannel:`cireericfr`}),ot(),h(),requestAnimationFrame(()=>{ct(),ut&&ut.bitsEarned>1&&st(ut)});