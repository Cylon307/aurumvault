(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const Cp=!1,Rp=(n,e)=>n===e,Ni=Symbol("solid-proxy"),fh=typeof Proxy=="function",Pp=Symbol("solid-track"),Di={equals:Rp};let ph=wh;const zn=1,Oi=2,mh={owned:null,cleanups:null,context:null,owner:null};var ve=null;let Qo=null,kp=null,Ae=null,at=null,ln=null,ao=0;function bs(n,e){const t=Ae,r=ve,s=n.length===0,i=e===void 0?r:e,a=s?mh:{owned:null,cleanups:null,context:i?i.context:null,owner:i},l=s?n:()=>n(()=>St(()=>Ss(a)));ve=a,Ae=null;try{return Wn(l,!0)}finally{Ae=t,ve=r}}function X(n,e){e=e?Object.assign({},Di,e):Di;const t={value:n,observers:null,observerSlots:null,comparator:e.equals||void 0},r=s=>(typeof s=="function"&&(s=s(t.value)),bh(t,s));return[vh.bind(t),r]}function K(n,e,t){const r=Qa(n,e,!1,zn);js(r)}function $p(n,e,t){ph=Lp;const r=Qa(n,e,!1,zn);r.user=!0,ln?ln.push(r):js(r)}function Ee(n,e,t){t=t?Object.assign({},Di,t):Di;const r=Qa(n,e,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=t.equals||void 0,js(r),vh.bind(r)}function Vp(n){return Wn(n,!1)}function St(n){if(Ae===null)return n();const e=Ae;Ae=null;try{return n()}finally{Ae=e}}function Wa(n,e,t){const r=Array.isArray(n);let s,i=t&&t.defer;return a=>{let l;if(r){l=Array(n.length);for(let h=0;h<n.length;h++)l[h]=n[h]()}else l=n();if(i)return i=!1,a;const u=St(()=>e(l,s,a));return s=l,u}}function Us(n){$p(()=>St(n))}function Ha(n){return ve===null||(ve.cleanups===null?ve.cleanups=[n]:ve.cleanups.push(n)),n}function gh(){return ve}function _h(n,e){const t=ve,r=Ae;ve=n,Ae=null;try{return Wn(e,!0)}catch(s){Ya(s)}finally{ve=t,Ae=r}}function Np(n){const e=Ae,t=ve;return Promise.resolve().then(()=>{Ae=e,ve=t;let r;return Wn(n,!1),Ae=ve=null,r?r.done:void 0})}const[UI,jI]=X(!1);function yh(n,e){const t=Symbol("context");return{id:t,Provider:Fp(t),defaultValue:n}}function Ga(n){let e;return ve&&ve.context&&(e=ve.context[n.id])!==void 0?e:n.defaultValue}function Ka(n){const e=Ee(n),t=Ee(()=>ha(e()));return t.toArray=()=>{const r=t();return Array.isArray(r)?r:r!=null?[r]:[]},t}function vh(){if(this.sources&&this.state)if(this.state===zn)js(this);else{const n=at;at=null,Wn(()=>Mi(this),!1),at=n}if(Ae){const n=this.observers?this.observers.length:0;Ae.sources?(Ae.sources.push(this),Ae.sourceSlots.push(n)):(Ae.sources=[this],Ae.sourceSlots=[n]),this.observers?(this.observers.push(Ae),this.observerSlots.push(Ae.sources.length-1)):(this.observers=[Ae],this.observerSlots=[Ae.sources.length-1])}return this.value}function bh(n,e,t){let r=n.value;return(!n.comparator||!n.comparator(r,e))&&(n.value=e,n.observers&&n.observers.length&&Wn(()=>{for(let s=0;s<n.observers.length;s+=1){const i=n.observers[s],a=Qo&&Qo.running;a&&Qo.disposed.has(i),(a?!i.tState:!i.state)&&(i.pure?at.push(i):ln.push(i),i.observers&&Eh(i)),a||(i.state=zn)}if(at.length>1e6)throw at=[],new Error},!1)),e}function js(n){if(!n.fn)return;Ss(n);const e=ao;Dp(n,n.value,e)}function Dp(n,e,t){let r;const s=ve,i=Ae;Ae=ve=n;try{r=n.fn(e)}catch(a){return n.pure&&(n.state=zn,n.owned&&n.owned.forEach(Ss),n.owned=null),n.updatedAt=t+1,Ya(a)}finally{Ae=i,ve=s}(!n.updatedAt||n.updatedAt<=t)&&(n.updatedAt!=null&&"observers"in n?bh(n,r):n.value=r,n.updatedAt=t)}function Qa(n,e,t,r=zn,s){const i={fn:n,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:ve,context:ve?ve.context:null,pure:t};return ve===null||ve!==mh&&(ve.owned?ve.owned.push(i):ve.owned=[i]),i}function Li(n){if(n.state===0)return;if(n.state===Oi)return Mi(n);if(n.suspense&&St(n.suspense.inFallback))return n.suspense.effects.push(n);const e=[n];for(;(n=n.owner)&&(!n.updatedAt||n.updatedAt<ao);)n.state&&e.push(n);for(let t=e.length-1;t>=0;t--)if(n=e[t],n.state===zn)js(n);else if(n.state===Oi){const r=at;at=null,Wn(()=>Mi(n,e[0]),!1),at=r}}function Wn(n,e){if(at)return n();let t=!1;e||(at=[]),ln?t=!0:ln=[],ao++;try{const r=n();return Op(t),r}catch(r){t||(ln=null),at=null,Ya(r)}}function Op(n){if(at&&(wh(at),at=null),n)return;const e=ln;ln=null,e.length&&Wn(()=>ph(e),!1)}function wh(n){for(let e=0;e<n.length;e++)Li(n[e])}function Lp(n){let e,t=0;for(e=0;e<n.length;e++){const r=n[e];r.user?n[t++]=r:Li(r)}for(e=0;e<t;e++)Li(n[e])}function Mi(n,e){n.state=0;for(let t=0;t<n.sources.length;t+=1){const r=n.sources[t];if(r.sources){const s=r.state;s===zn?r!==e&&(!r.updatedAt||r.updatedAt<ao)&&Li(r):s===Oi&&Mi(r,e)}}}function Eh(n){for(let e=0;e<n.observers.length;e+=1){const t=n.observers[e];t.state||(t.state=Oi,t.pure?at.push(t):ln.push(t),t.observers&&Eh(t))}}function Ss(n){let e;if(n.sources)for(;n.sources.length;){const t=n.sources.pop(),r=n.sourceSlots.pop(),s=t.observers;if(s&&s.length){const i=s.pop(),a=t.observerSlots.pop();r<s.length&&(i.sourceSlots[a]=r,s[r]=i,t.observerSlots[r]=a)}}if(n.tOwned){for(e=n.tOwned.length-1;e>=0;e--)Ss(n.tOwned[e]);delete n.tOwned}if(n.owned){for(e=n.owned.length-1;e>=0;e--)Ss(n.owned[e]);n.owned=null}if(n.cleanups){for(e=n.cleanups.length-1;e>=0;e--)n.cleanups[e]();n.cleanups=null}n.state=0}function Mp(n){return n instanceof Error?n:new Error(typeof n=="string"?n:"Unknown error",{cause:n})}function Ya(n,e=ve){throw Mp(n)}function ha(n){if(typeof n=="function"&&!n.length)return ha(n());if(Array.isArray(n)){const e=[];for(let t=0;t<n.length;t++){const r=ha(n[t]);Array.isArray(r)?e.push.apply(e,r):e.push(r)}return e}return n}function Fp(n,e){return function(r){let s;return K(()=>s=St(()=>(ve.context={...ve.context,[n]:r.value},Ka(()=>r.children))),void 0),s}}const Up=Symbol("fallback");function Tc(n){for(let e=0;e<n.length;e++)n[e]()}function jp(n,e,t={}){let r=[],s=[],i=[],a=0,l=e.length>1?[]:null;return Ha(()=>Tc(i)),()=>{let u=n()||[],h=u.length,f,g;return u[Pp],St(()=>{let y,S,R,P,L,k,B,F,W;if(h===0)a!==0&&(Tc(i),i=[],r=[],s=[],a=0,l&&(l=[])),t.fallback&&(r=[Up],s[0]=bs(O=>(i[0]=O,t.fallback())),a=1);else if(a===0){for(s=new Array(h),g=0;g<h;g++)r[g]=u[g],s[g]=bs(x);a=h}else{for(R=new Array(h),P=new Array(h),l&&(L=new Array(h)),k=0,B=Math.min(a,h);k<B&&r[k]===u[k];k++);for(B=a-1,F=h-1;B>=k&&F>=k&&r[B]===u[F];B--,F--)R[F]=s[B],P[F]=i[B],l&&(L[F]=l[B]);for(y=new Map,S=new Array(F+1),g=F;g>=k;g--)W=u[g],f=y.get(W),S[g]=f===void 0?-1:f,y.set(W,g);for(f=k;f<=B;f++)W=r[f],g=y.get(W),g!==void 0&&g!==-1?(R[g]=s[f],P[g]=i[f],l&&(L[g]=l[f]),g=S[g],y.set(W,g)):i[f]();for(g=k;g<h;g++)g in R?(s[g]=R[g],i[g]=P[g],l&&(l[g]=L[g],l[g](g))):s[g]=bs(x);s=s.slice(0,a=h),r=u.slice(0)}return s});function x(y){if(i[g]=y,l){const[S,R]=X(g);return l[g]=R,e(u[g],S)}return e(u[g])}}}function N(n,e){return St(()=>n(e||{}))}function gi(){return!0}const da={get(n,e,t){return e===Ni?t:n.get(e)},has(n,e){return e===Ni?!0:n.has(e)},set:gi,deleteProperty:gi,getOwnPropertyDescriptor(n,e){return{configurable:!0,enumerable:!0,get(){return n.get(e)},set:gi,deleteProperty:gi}},ownKeys(n){return n.keys()}};function Yo(n){return(n=typeof n=="function"?n():n)?n:{}}function Bp(){for(let n=0,e=this.length;n<e;++n){const t=this[n]();if(t!==void 0)return t}}function fa(...n){let e=!1;for(let a=0;a<n.length;a++){const l=n[a];e=e||!!l&&Ni in l,n[a]=typeof l=="function"?(e=!0,Ee(l)):l}if(fh&&e)return new Proxy({get(a){for(let l=n.length-1;l>=0;l--){const u=Yo(n[l])[a];if(u!==void 0)return u}},has(a){for(let l=n.length-1;l>=0;l--)if(a in Yo(n[l]))return!0;return!1},keys(){const a=[];for(let l=0;l<n.length;l++)a.push(...Object.keys(Yo(n[l])));return[...new Set(a)]}},da);const t={},r=Object.create(null);for(let a=n.length-1;a>=0;a--){const l=n[a];if(!l)continue;const u=Object.getOwnPropertyNames(l);for(let h=u.length-1;h>=0;h--){const f=u[h];if(f==="__proto__"||f==="constructor")continue;const g=Object.getOwnPropertyDescriptor(l,f);if(!r[f])r[f]=g.get?{enumerable:!0,configurable:!0,get:Bp.bind(t[f]=[g.get.bind(l)])}:g.value!==void 0?g:void 0;else{const x=t[f];x&&(g.get?x.push(g.get.bind(l)):g.value!==void 0&&x.push(()=>g.value))}}}const s={},i=Object.keys(r);for(let a=i.length-1;a>=0;a--){const l=i[a],u=r[l];u&&u.get?Object.defineProperty(s,l,u):s[l]=u?u.value:void 0}return s}function qp(n,...e){const t=e.length;if(fh&&Ni in n){const s=t>1?e.flat():e[0],i=e.map(a=>new Proxy({get(l){return a.includes(l)?n[l]:void 0},has(l){return a.includes(l)&&l in n},keys(){return a.filter(l=>l in n)}},da));return i.push(new Proxy({get(a){return s.includes(a)?void 0:n[a]},has(a){return s.includes(a)?!1:a in n},keys(){return Object.keys(n).filter(a=>!s.includes(a))}},da)),i}const r=[];for(let s=0;s<=t;s++)r[s]={};for(const s of Object.getOwnPropertyNames(n)){let i=t;for(let u=0;u<e.length;u++)if(e[u].includes(s)){i=u;break}const a=Object.getOwnPropertyDescriptor(n,s);!a.get&&!a.set&&a.enumerable&&a.writable&&a.configurable?r[i][s]=a.value:Object.defineProperty(r[i],s,a)}return r}const zp=n=>`Stale read from <${n}>.`;function Et(n){const e="fallback"in n&&{fallback:()=>n.fallback};return Ee(jp(()=>n.each,n.children,e||void 0))}function ae(n){const e=n.keyed,t=Ee(()=>n.when,void 0,void 0),r=e?t:Ee(t,void 0,{equals:(s,i)=>!s==!i});return Ee(()=>{const s=r();if(s){const i=n.children;return typeof i=="function"&&i.length>0?St(()=>i(e?s:()=>{if(!St(r))throw zp("Show");return t()})):i}return n.fallback},void 0,void 0)}const Wp=["allowfullscreen","async","alpha","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected","adauctionheaders","browsingtopics","credentialless","defaultchecked","defaultmuted","defaultselected","defer","disablepictureinpicture","disableremoteplayback","preservespitch","shadowrootclonable","shadowrootcustomelementregistry","shadowrootdelegatesfocus","shadowrootserializable","sharedstoragewritable"],Hp=new Set(["className","value","readOnly","noValidate","formNoValidate","isMap","noModule","playsInline","adAuctionHeaders","allowFullscreen","browsingTopics","defaultChecked","defaultMuted","defaultSelected","disablePictureInPicture","disableRemotePlayback","preservesPitch","shadowRootClonable","shadowRootCustomElementRegistry","shadowRootDelegatesFocus","shadowRootSerializable","sharedStorageWritable",...Wp]),Gp=new Set(["innerHTML","textContent","innerText","children"]),Kp=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Qp=Object.assign(Object.create(null),{class:"className",novalidate:{$:"noValidate",FORM:1},formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1},adauctionheaders:{$:"adAuctionHeaders",IFRAME:1},allowfullscreen:{$:"allowFullscreen",IFRAME:1},browsingtopics:{$:"browsingTopics",IMG:1},defaultchecked:{$:"defaultChecked",INPUT:1},defaultmuted:{$:"defaultMuted",AUDIO:1,VIDEO:1},defaultselected:{$:"defaultSelected",OPTION:1},disablepictureinpicture:{$:"disablePictureInPicture",VIDEO:1},disableremoteplayback:{$:"disableRemotePlayback",AUDIO:1,VIDEO:1},preservespitch:{$:"preservesPitch",AUDIO:1,VIDEO:1},shadowrootclonable:{$:"shadowRootClonable",TEMPLATE:1},shadowrootdelegatesfocus:{$:"shadowRootDelegatesFocus",TEMPLATE:1},shadowrootserializable:{$:"shadowRootSerializable",TEMPLATE:1},sharedstoragewritable:{$:"sharedStorageWritable",IFRAME:1,IMG:1}});function Yp(n,e){const t=Qp[n];return typeof t=="object"?t[e]?t.$:void 0:t}const Jp=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Le=n=>Ee(()=>n());function Xp(n,e,t){let r=t.length,s=e.length,i=r,a=0,l=0,u=e[s-1].nextSibling,h=null;for(;a<s||l<i;){if(e[a]===t[l]){a++,l++;continue}for(;e[s-1]===t[i-1];)s--,i--;if(s===a){const f=i<r?l?t[l-1].nextSibling:t[i-l]:u;for(;l<i;)n.insertBefore(t[l++],f)}else if(i===l)for(;a<s;)(!h||!h.has(e[a]))&&e[a].remove(),a++;else if(e[a]===t[i-1]&&t[l]===e[s-1]){const f=e[--s].nextSibling;n.insertBefore(t[l++],e[a++].nextSibling),n.insertBefore(t[--i],f),e[s]=t[i]}else{if(!h){h=new Map;let g=l;for(;g<i;)h.set(t[g],g++)}const f=h.get(e[a]);if(f!=null)if(l<f&&f<i){let g=a,x=1,y;for(;++g<s&&g<i&&!((y=h.get(e[g]))==null||y!==f+x);)x++;if(x>f-l){const S=e[a];for(;l<f;)n.insertBefore(t[l++],S)}else n.replaceChild(t[l++],e[a++])}else a++;else e[a++].remove()}}}const Ic="_$DX_DELEGATE";function Zp(n,e,t,r={}){let s;return bs(i=>{s=i,e===document?n():w(e,n(),e.firstChild?null:void 0,t)},r.owner),()=>{s(),e.textContent=""}}function $(n,e,t,r){let s;const i=()=>{const l=document.createElement("template");return l.innerHTML=n,l.content.firstChild},a=()=>(s||(s=i())).cloneNode(!0);return a.cloneNode=a,a}function Mt(n,e=window.document){const t=e[Ic]||(e[Ic]=new Set);for(let r=0,s=n.length;r<s;r++){const i=n[r];t.has(i)||(t.add(i),e.addEventListener(i,lm))}}function Je(n,e,t){t==null?n.removeAttribute(e):n.setAttribute(e,t)}function em(n,e,t){t?n.setAttribute(e,""):n.removeAttribute(e)}function Ie(n,e){e==null?n.removeAttribute("class"):n.className=e}function tm(n,e,t,r){if(r)Array.isArray(t)?(n[`$$${e}`]=t[0],n[`$$${e}Data`]=t[1]):n[`$$${e}`]=t;else if(Array.isArray(t)){const s=t[0];n.addEventListener(e,t[0]=i=>s.call(n,t[1],i))}else n.addEventListener(e,t,typeof t!="function"&&t)}function nm(n,e,t={}){const r=Object.keys(e||{}),s=Object.keys(t);let i,a;for(i=0,a=s.length;i<a;i++){const l=s[i];!l||l==="undefined"||e[l]||(Ac(n,l,!1),delete t[l])}for(i=0,a=r.length;i<a;i++){const l=r[i],u=!!e[l];!l||l==="undefined"||t[l]===u||!u||(Ac(n,l,!0),t[l]=u)}return t}function rm(n,e,t){if(!e)return t?Je(n,"style"):e;const r=n.style;if(typeof e=="string")return r.cssText=e;typeof t=="string"&&(r.cssText=t=void 0),t||(t={}),e||(e={});let s,i;for(i in t)e[i]==null&&r.removeProperty(i),delete t[i];for(i in e)s=e[i],s!==t[i]&&(r.setProperty(i,s),t[i]=s);return t}function sm(n,e={},t,r){const s={};return K(()=>s.children=Cs(n,e.children,s.children)),K(()=>typeof e.ref=="function"&&im(e.ref,n)),K(()=>om(n,e,t,!0,s,!0)),s}function im(n,e,t){return St(()=>n(e,t))}function w(n,e,t,r){if(t!==void 0&&!r&&(r=[]),typeof e!="function")return Cs(n,e,r,t);K(s=>Cs(n,e(),s,t),r)}function om(n,e,t,r,s={},i=!1){e||(e={});for(const a in s)if(!(a in e)){if(a==="children")continue;s[a]=Sc(n,a,null,s[a],t,i,e)}for(const a in e){if(a==="children")continue;const l=e[a];s[a]=Sc(n,a,l,s[a],t,i,e)}}function am(n){return n.toLowerCase().replace(/-([a-z])/g,(e,t)=>t.toUpperCase())}function Ac(n,e,t){const r=e.trim().split(/\s+/);for(let s=0,i=r.length;s<i;s++)n.classList.toggle(r[s],t)}function Sc(n,e,t,r,s,i,a){let l,u,h,f,g;if(e==="style")return rm(n,t,r);if(e==="classList")return nm(n,t,r);if(t===r)return r;if(e==="ref")i||t(n);else if(e.slice(0,3)==="on:"){const x=e.slice(3);r&&n.removeEventListener(x,r,typeof r!="function"&&r),t&&n.addEventListener(x,t,typeof t!="function"&&t)}else if(e.slice(0,10)==="oncapture:"){const x=e.slice(10);r&&n.removeEventListener(x,r,!0),t&&n.addEventListener(x,t,!0)}else if(e.slice(0,2)==="on"){const x=e.slice(2).toLowerCase(),y=Jp.has(x);if(!y&&r){const S=Array.isArray(r)?r[0]:r;n.removeEventListener(x,S)}(y||t)&&(tm(n,x,t,y),y&&Mt([x]))}else e.slice(0,5)==="attr:"?Je(n,e.slice(5),t):e.slice(0,5)==="bool:"?em(n,e.slice(5),t):(g=e.slice(0,5)==="prop:")||(h=Gp.has(e))||(f=Yp(e,n.tagName))||(u=Hp.has(e))||(l=n.nodeName.includes("-")||"is"in a)?(g&&(e=e.slice(5),u=!0),e==="class"||e==="className"?Ie(n,t):l&&!u&&!h?n[am(e)]=t:n[f||e]=t):Je(n,Kp[e]||e,t);return t}function lm(n){let e=n.target;const t=`$$${n.type}`,r=n.target,s=n.currentTarget,i=u=>Object.defineProperty(n,"target",{configurable:!0,value:u}),a=()=>{const u=e[t];if(u&&!e.disabled){const h=e[`${t}Data`];if(h!==void 0?u.call(e,h,n):u.call(e,n),n.cancelBubble)return}return e.host&&typeof e.host!="string"&&!e.host._$host&&e.contains(n.target)&&i(e.host),!0},l=()=>{for(;a()&&(e=e._$host||e.parentNode||e.host););};if(Object.defineProperty(n,"currentTarget",{configurable:!0,get(){return e||document}}),n.composedPath){const u=n.composedPath();i(u[0]);for(let h=0;h<u.length-2&&(e=u[h],!!a());h++){if(e._$host){e=e._$host,l();break}if(e.parentNode===s)break}}else l();i(r)}function Cs(n,e,t,r,s){for(;typeof t=="function";)t=t();if(e===t)return t;const i=typeof e,a=r!==void 0;if(n=a&&t[0]&&t[0].parentNode||n,i==="string"||i==="number"){if(i==="number"&&(e=e.toString(),e===t))return t;if(a){let l=t[0];l&&l.nodeType===3?l.data!==e&&(l.data=e):l=document.createTextNode(e),t=xr(n,t,r,l)}else t!==""&&typeof t=="string"?t=n.firstChild.data=e:t=n.textContent=e}else if(e==null||i==="boolean")t=xr(n,t,r);else{if(i==="function")return K(()=>{let l=e();for(;typeof l=="function";)l=l();t=Cs(n,l,t,r)}),()=>t;if(Array.isArray(e)){const l=[],u=t&&Array.isArray(t);if(pa(l,e,t,s))return K(()=>t=Cs(n,l,t,r,!0)),()=>t;if(l.length===0){if(t=xr(n,t,r),a)return t}else u?t.length===0?Cc(n,l,r):Xp(n,t,l):(t&&xr(n),Cc(n,l));t=l}else if(e.nodeType){if(Array.isArray(t)){if(a)return t=xr(n,t,r,e);xr(n,t,null,e)}else t==null||t===""||!n.firstChild?n.appendChild(e):n.replaceChild(e,n.firstChild);t=e}}return t}function pa(n,e,t,r){let s=!1;for(let i=0,a=e.length;i<a;i++){let l=e[i],u=t&&t[n.length],h;if(!(l==null||l===!0||l===!1))if((h=typeof l)=="object"&&l.nodeType)n.push(l);else if(Array.isArray(l))s=pa(n,l,u)||s;else if(h==="function")if(r){for(;typeof l=="function";)l=l();s=pa(n,Array.isArray(l)?l:[l],Array.isArray(u)?u:[u])||s}else n.push(l),s=!0;else{const f=String(l);u&&u.nodeType===3&&u.data===f?n.push(u):n.push(document.createTextNode(f))}}return s}function Cc(n,e,t=null){for(let r=0,s=e.length;r<s;r++)n.insertBefore(e[r],t)}function xr(n,e,t,r){if(t===void 0)return n.textContent="";const s=r||document.createTextNode("");if(e.length){let i=!1;for(let a=e.length-1;a>=0;a--){const l=e[a];if(s!==l){const u=l.parentNode===n;!i&&!a?u?n.replaceChild(s,l):n.insertBefore(s,t):u&&l.remove()}else i=!0}}else n.insertBefore(s,t);return[s]}const cm=!1;function xh(){let n=new Set;function e(s){return n.add(s),()=>n.delete(s)}let t=!1;function r(s,i){if(t)return!(t=!1);const a={to:s,options:i,defaultPrevented:!1,preventDefault:()=>a.defaultPrevented=!0};for(const l of n)l.listener({...a,from:l.location,retry:u=>{u&&(t=!0),l.navigate(s,{...i,resolve:!1})}});return!a.defaultPrevented}return{subscribe:e,confirm:r}}let ma;function Ja(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),ma=window.history.state._depth}Ja();function um(n){return{...n,_depth:window.history.state&&window.history.state._depth}}function hm(n,e){let t=!1;return()=>{const r=ma;Ja();const s=r==null?null:ma-r;if(t){t=!1;return}s&&e(s)?(t=!0,window.history.go(-s)):n()}}const dm=/^(?:[a-z0-9]+:)?\/\//i,fm=/^\/+|(\/)\/+$/g,Th="http://sr";function or(n,e=!1){const t=n.replace(fm,"$1");return t?e||/^[?#]/.test(t)?t:"/"+t:""}function xi(n,e,t){if(dm.test(e))return;const r=or(n),s=t&&or(t);let i="";return!s||e.startsWith("/")?i=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?i=r+s:i=s,(i||"/")+or(e,!i)}function pm(n,e){if(n==null)throw new Error(e);return n}function mm(n,e){return or(n).replace(/\/*(\*.*)?$/g,"")+or(e)}function Ih(n){const e={};return n.searchParams.forEach((t,r)=>{e[r]=t}),e}function gm(n,e,t){const[r,s]=n.split("/*",2),i=r.split("/").filter(Boolean),a=i.length;return l=>{const u=l.split("/").filter(Boolean),h=u.length-a;if(h<0||h>0&&s===void 0&&!e)return null;const f={path:a?"":"/",params:{}},g=x=>t===void 0?void 0:t[x];for(let x=0;x<a;x++){const y=i[x],S=u[x],R=y[0]===":",P=R?y.slice(1):y;if(R&&Jo(S,g(P)))f.params[P]=S;else if(R||!Jo(S,y))return null;f.path+=`/${S}`}if(s){const x=h?u.slice(-h).join("/"):"";if(Jo(x,g(s)))f.params[s]=x;else return null}return f}}function Jo(n,e){const t=r=>r.localeCompare(n,void 0,{sensitivity:"base"})===0;return e===void 0?!0:typeof e=="string"?t(e):typeof e=="function"?e(n):Array.isArray(e)?e.some(t):e instanceof RegExp?e.test(n):!1}function _m(n){const[e,t]=n.pattern.split("/*",2),r=e.split("/").filter(Boolean);return r.reduce((s,i)=>s+(i.startsWith(":")?2:3),r.length-(t===void 0?0:1))}function Ah(n){const e=new Map,t=gh();return new Proxy({},{get(r,s){return e.has(s)||_h(t,()=>e.set(s,Ee(()=>n()[s]))),e.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(n())}})}function Sh(n){let e=/(\/?\:[^\/]+)\?/.exec(n);if(!e)return[n];let t=n.slice(0,e.index),r=n.slice(e.index+e[0].length);const s=[t,t+=e[1]];for(;e=/^(\/\:[^\/]+)\?/.exec(r);)s.push(t+=e[1]),r=r.slice(e[0].length);return Sh(r).reduce((i,a)=>[...i,...s.map(l=>l+a)],[])}const ym=100,Ch=yh(),Xa=yh(),Bs=()=>pm(Ga(Ch),"<A> and 'use' router primitives can be only used inside a Route."),vm=()=>Ga(Xa)||Bs().base,bm=n=>{const e=vm();return Ee(()=>e.resolvePath(n()))},wm=n=>{const e=Bs();return Ee(()=>{const t=n();return t!==void 0?e.renderPath(t):t})},gn=()=>Bs().navigatorFactory(),Em=()=>Bs().location,Rh=()=>Bs().params;function xm(n,e=""){const{component:t,load:r,children:s,info:i}=n,a=!s||Array.isArray(s)&&!s.length,l={key:n,component:t,load:r,info:i};return Ph(n.path).reduce((u,h)=>{for(const f of Sh(h)){const g=mm(e,f);let x=a?g:g.split("/*",1)[0];x=x.split("/").map(y=>y.startsWith(":")||y.startsWith("*")?y:encodeURIComponent(y)).join("/"),u.push({...l,originalPath:h,pattern:x,matcher:gm(x,!a,n.matchFilters)})}return u},[])}function Tm(n,e=0){return{routes:n,score:_m(n[n.length-1])*1e4-e,matcher(t){const r=[];for(let s=n.length-1;s>=0;s--){const i=n[s],a=i.matcher(t);if(!a)return null;r.unshift({...a,route:i})}return r}}}function Ph(n){return Array.isArray(n)?n:[n]}function kh(n,e="",t=[],r=[]){const s=Ph(n);for(let i=0,a=s.length;i<a;i++){const l=s[i];if(l&&typeof l=="object"){l.hasOwnProperty("path")||(l.path="");const u=xm(l,e);for(const h of u){t.push(h);const f=Array.isArray(l.children)&&l.children.length===0;if(l.children&&!f)kh(l.children,h.pattern,t,r);else{const g=Tm([...t],r.length);r.push(g)}t.pop()}}}return t.length?r:r.sort((i,a)=>a.score-i.score)}function Xo(n,e){for(let t=0,r=n.length;t<r;t++){const s=n[t].matcher(e);if(s)return s}return[]}function Im(n,e){const t=new URL(Th),r=Ee(u=>{const h=n();try{return new URL(h,t)}catch{return console.error(`Invalid path ${h}`),u}},t,{equals:(u,h)=>u.href===h.href}),s=Ee(()=>r().pathname),i=Ee(()=>r().search,!0),a=Ee(()=>r().hash),l=()=>"";return{get pathname(){return s()},get search(){return i()},get hash(){return a()},get state(){return e()},get key(){return l()},query:Ah(Wa(i,()=>Ih(r())))}}let sr;function Am(){return sr}function Sm(n,e,t,r={}){const{signal:[s,i],utils:a={}}=n,l=a.parsePath||(m=>m),u=a.renderPath||(m=>m),h=a.beforeLeave||xh(),f=xi("",r.base||"");if(f===void 0)throw new Error(`${f} is not a valid base path`);f&&!s().value&&i({value:f,replace:!0,scroll:!1});const[g,x]=X(!1);let y;const S=(m,q)=>{q.value===R()&&q.state===L()||(y===void 0&&x(!0),sr=m,y=q,Np(()=>{y===q&&(P(y.value),k(y.state),W[1]([]))}).finally(()=>{y===q&&Vp(()=>{sr=void 0,m==="navigate"&&b(y),x(!1),y=void 0})}))},[R,P]=X(s().value),[L,k]=X(s().state),B=Im(R,L),F=[],W=X([]),O=Ee(()=>typeof r.transformUrl=="function"?Xo(e(),r.transformUrl(B.pathname)):Xo(e(),B.pathname)),E=Ah(()=>{const m=O(),q={};for(let Z=0;Z<m.length;Z++)Object.assign(q,m[Z].params);return q}),_={pattern:f,path:()=>f,outlet:()=>null,resolvePath(m){return xi(f,m)}};return K(Wa(s,m=>S("native",m),{defer:!0})),{base:_,location:B,params:E,isRouting:g,renderPath:u,parsePath:l,navigatorFactory:T,matches:O,beforeLeave:h,preloadRoute:I,singleFlight:r.singleFlight===void 0?!0:r.singleFlight,submissions:W};function v(m,q,Z){St(()=>{if(typeof q=="number"){q&&(a.go?a.go(q):console.warn("Router integration does not support relative routing"));return}const{replace:me,resolve:ce,scroll:he,state:ye}={replace:!1,resolve:!0,scroll:!0,...Z},$e=ce?m.resolvePath(q):xi("",q);if($e===void 0)throw new Error(`Path '${q}' is not a routable path`);if(F.length>=ym)throw new Error("Too many redirects");const He=R();($e!==He||ye!==L())&&(cm||h.confirm($e,Z)&&(F.push({value:He,replace:me,scroll:he,state:L()}),S("navigate",{value:$e,state:ye})))})}function T(m){return m=m||Ga(Xa)||_,(q,Z)=>v(m,q,Z)}function b(m){const q=F[0];q&&(i({...m,replace:q.replace,scroll:q.scroll}),F.length=0)}function I(m,q={}){const Z=Xo(e(),m.pathname),me=sr;sr="preload";for(let ce in Z){const{route:he,params:ye}=Z[ce];he.component&&he.component.preload&&he.component.preload();const{load:$e}=he;q.preloadData&&$e&&_h(t(),()=>$e({params:ye,location:{pathname:m.pathname,search:m.search,hash:m.hash,query:Ih(m),state:null,key:""},intent:"preload"}))}sr=me}}function Cm(n,e,t,r){const{base:s,location:i,params:a}=n,{pattern:l,component:u,load:h}=r().route,f=Ee(()=>r().path);u&&u.preload&&u.preload();const g=h?h({params:a,location:i,intent:sr||"initial"}):void 0;return{parent:e,pattern:l,path:f,outlet:()=>u?N(u,{params:a,location:i,data:g,get children(){return t()}}):t(),resolvePath(y){return xi(s.path(),y,f())}}}const Rm=n=>e=>{const{base:t}=e,r=Ka(()=>e.children),s=Ee(()=>kh(r(),e.base||""));let i;const a=Sm(n,s,()=>i,{base:t,singleFlight:e.singleFlight,transformUrl:e.transformUrl});return n.create&&n.create(a),N(Ch.Provider,{value:a,get children(){return N(Pm,{routerState:a,get root(){return e.root},get load(){return e.rootLoad},get children(){return[Le(()=>(i=gh())&&null),N(km,{routerState:a,get branches(){return s()}})]}})}})};function Pm(n){const e=n.routerState.location,t=n.routerState.params,r=Ee(()=>n.load&&St(()=>{n.load({params:t,location:e,intent:Am()||"initial"})}));return N(ae,{get when(){return n.root},keyed:!0,get fallback(){return n.children},children:s=>N(s,{params:t,location:e,get data(){return r()},get children(){return n.children}})})}function km(n){const e=[];let t;const r=Ee(Wa(n.routerState.matches,(s,i,a)=>{let l=i&&s.length===i.length;const u=[];for(let h=0,f=s.length;h<f;h++){const g=i&&i[h],x=s[h];a&&g&&x.route.key===g.route.key?u[h]=a[h]:(l=!1,e[h]&&e[h](),bs(y=>{e[h]=y,u[h]=Cm(n.routerState,u[h-1]||n.routerState.base,Rc(()=>r()[h+1]),()=>n.routerState.matches()[h])}))}return e.splice(s.length).forEach(h=>h()),a&&l?a:(t=u[0],u)}));return Rc(()=>r()&&t)()}const Rc=n=>()=>N(ae,{get when(){return n()},keyed:!0,children:e=>N(Xa.Provider,{value:e,get children(){return e.outlet()}})}),zt=n=>{const e=Ka(()=>n.children);return fa(n,{get children(){return e()}})};function $m([n,e],t,r){return[n,r?s=>e(r(s)):e]}function Vm(n){if(n==="#")return null;try{return document.querySelector(n)}catch{return null}}function Nm(n){let e=!1;const t=s=>typeof s=="string"?{value:s}:s,r=$m(X(t(n.get()),{equals:(s,i)=>s.value===i.value&&s.state===i.state}),void 0,s=>(!e&&n.set(s),s));return n.init&&Ha(n.init((s=n.get())=>{e=!0,r[1](t(s)),e=!1})),Rm({signal:r,create:n.create,utils:n.utils})}function Dm(n,e,t){return n.addEventListener(e,t),()=>n.removeEventListener(e,t)}function Om(n,e){const t=Vm(`#${n}`);t?t.scrollIntoView():e&&window.scrollTo(0,0)}const Lm=new Map;function Mm(n=!0,e=!1,t="/_server",r){return s=>{const i=s.base.path(),a=s.navigatorFactory(s.base);let l={};function u(R){return R.namespaceURI==="http://www.w3.org/2000/svg"}function h(R){if(R.defaultPrevented||R.button!==0||R.metaKey||R.altKey||R.ctrlKey||R.shiftKey)return;const P=R.composedPath().find(O=>O instanceof Node&&O.nodeName.toUpperCase()==="A");if(!P||e&&!P.hasAttribute("link"))return;const L=u(P),k=L?P.href.baseVal:P.href;if((L?P.target.baseVal:P.target)||!k&&!P.hasAttribute("state"))return;const F=(P.getAttribute("rel")||"").split(/\s+/);if(P.hasAttribute("download")||F&&F.includes("external"))return;const W=L?new URL(k,document.baseURI):new URL(k);if(!(W.origin!==window.location.origin||i&&W.pathname&&!W.pathname.toLowerCase().startsWith(i.toLowerCase())))return[P,W]}function f(R){const P=h(R);if(!P)return;const[L,k]=P,B=s.parsePath(k.pathname+k.search+k.hash),F=L.getAttribute("state");R.preventDefault(),a(B,{resolve:!1,replace:L.hasAttribute("replace"),scroll:!L.hasAttribute("noscroll"),state:F&&JSON.parse(F)})}function g(R){const P=h(R);if(!P)return;const[L,k]=P;typeof r=="function"&&(k.pathname=r(k.pathname)),l[k.pathname]||s.preloadRoute(k,{preloadData:L.getAttribute("preload")!=="false"})}function x(R){const P=h(R);if(!P)return;const[L,k]=P;typeof r=="function"&&(k.pathname=r(k.pathname)),!l[k.pathname]&&(l[k.pathname]=setTimeout(()=>{s.preloadRoute(k,{preloadData:L.getAttribute("preload")!=="false"}),delete l[k.pathname]},200))}function y(R){const P=h(R);if(!P)return;const[,L]=P;typeof r=="function"&&(L.pathname=r(L.pathname)),l[L.pathname]&&(clearTimeout(l[L.pathname]),delete l[L.pathname])}function S(R){if(R.defaultPrevented)return;let P=R.submitter&&R.submitter.hasAttribute("formaction")?R.submitter.getAttribute("formaction"):R.target.getAttribute("action");if(!P)return;if(!P.startsWith("https://action/")){const k=new URL(P,Th);if(P=s.parsePath(k.pathname+k.search),!P.startsWith(t))return}if(R.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const L=Lm.get(P);if(L){R.preventDefault();const k=new FormData(R.target);R.submitter&&R.submitter.name&&k.append(R.submitter.name,R.submitter.value),L.call({r:s,f:R.target},k)}}Mt(["click","submit"]),document.addEventListener("click",f),n&&(document.addEventListener("mouseover",x),document.addEventListener("mouseout",y),document.addEventListener("focusin",g),document.addEventListener("touchstart",g)),document.addEventListener("submit",S),Ha(()=>{document.removeEventListener("click",f),n&&(document.removeEventListener("mouseover",x),document.removeEventListener("mouseout",y),document.removeEventListener("focusin",g),document.removeEventListener("touchstart",g)),document.removeEventListener("submit",S)})}}function Fm(n){const e=()=>{const r=window.location.pathname+window.location.search;return{value:n.transformUrl?n.transformUrl(r)+window.location.hash:r+window.location.hash,state:window.history.state}},t=xh();return Nm({get:e,set({value:r,replace:s,scroll:i,state:a}){s?window.history.replaceState(um(a),"",r):window.history.pushState(a,"",r),Om(decodeURIComponent(window.location.hash.slice(1)),i),Ja()},init:r=>Dm(window,"popstate",hm(r,s=>{if(s&&s<0)return!t.confirm(s);{const i=e();return!t.confirm(i.value,{state:i.state})}})),create:Mm(n.preload,n.explicitLinks,n.actionBase,n.transformUrl),utils:{go:r=>window.history.go(r),beforeLeave:t}})(n)}var Um=$("<a>");function be(n){n=fa({inactiveClass:"inactive",activeClass:"active"},n);const[,e]=qp(n,["href","state","class","activeClass","inactiveClass","end"]),t=bm(()=>n.href),r=wm(t),s=Em(),i=Ee(()=>{const a=t();if(a===void 0)return[!1,!1];const l=or(a.split(/[?#]/,1)[0]).toLowerCase(),u=or(s.pathname).toLowerCase();return[n.end?l===u:u.startsWith(l+"/")||u===l,l===u]});return(()=>{var a=Um();return sm(a,fa(e,{get href(){return r()||n.href},get state(){return JSON.stringify(n.state)},get classList(){return{...n.class&&{[n.class]:!0},[n.inactiveClass]:!i()[0],[n.activeClass]:i()[0],...e.classList}},link:"",get"aria-current"(){return i()[1]?"page":void 0}}),!1),a})()}const jm=()=>{};var Pc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Bm=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Vh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,u=s+2<n.length,h=u?n[s+2]:0,f=i>>2,g=(i&3)<<4|l>>4;let x=(l&15)<<2|h>>6,y=h&63;u||(y=64,a||(x=64)),r.push(t[f],t[g],t[x],t[y])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray($h(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Bm(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||h==null||g==null)throw new qm;const x=i<<2|l>>4;if(r.push(x),h!==64){const y=l<<4&240|h>>2;if(r.push(y),g!==64){const S=h<<6&192|g;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class qm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zm=function(n){const e=$h(n);return Vh.encodeByteArray(e,!0)},Fi=function(n){return zm(n).replace(/\./g,"")},Nh=function(n){try{return Vh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm=()=>Wm().__FIREBASE_DEFAULTS__,Gm=()=>{if(typeof process>"u"||typeof Pc>"u")return;const n=Pc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Km=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Nh(n[1]);return e&&JSON.parse(e)},lo=()=>{try{return jm()||Hm()||Gm()||Km()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Dh=n=>lo()?.emulatorHosts?.[n],Qm=n=>{const e=Dh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Oh=()=>lo()?.config,Lh=n=>lo()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Fi(JSON.stringify(t)),Fi(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function Zm(){const n=lo()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function eg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function tg(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ng(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rg(){const n=lt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function sg(){return!Zm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ig(){try{return typeof indexedDB=="object"}catch{return!1}}function og(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag="FirebaseError";class _n extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=ag,Object.setPrototypeOf(this,_n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qs.prototype.create)}}class qs{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?lg(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new _n(s,l,r)}}function lg(n,e){return n.replace(cg,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const cg=/\{\$([^}]+)}/g;function ug(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function cr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(kc(i)&&kc(a)){if(!cr(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function kc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ps(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ms(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function hg(n,e){const t=new dg(n,e);return t.subscribe.bind(t)}class dg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");fg(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Zo),s.error===void 0&&(s.error=Zo),s.complete===void 0&&(s.complete=Zo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Zo(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Mh(n){return(await fetch(n,{credentials:"include"})).ok}class ur{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Ym;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gg(e))try{this.getOrInitializeService({instanceIdentifier:rr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=rr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=rr){return this.instances.has(e)}getOptions(e=rr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:mg(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=rr){return this.component?this.component.multipleInstances?e:rr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mg(n){return n===rr?void 0:n}function gg(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new pg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(de||(de={}));const yg={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},vg=de.INFO,bg={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},wg=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=bg[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Za{constructor(e){this.name=e,this._logLevel=vg,this._logHandler=wg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const Eg=(n,e)=>e.some(t=>n instanceof t);let $c,Vc;function xg(){return $c||($c=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Tg(){return Vc||(Vc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fh=new WeakMap,ga=new WeakMap,Uh=new WeakMap,ea=new WeakMap,el=new WeakMap;function Ig(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Vn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Fh.set(t,n)}).catch(()=>{}),el.set(e,n),e}function Ag(n){if(ga.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});ga.set(n,e)}let _a={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ga.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Uh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Vn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Sg(n){_a=n(_a)}function Cg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(ta(this),e,...t);return Uh.set(r,e.sort?e.sort():[e]),Vn(r)}:Tg().includes(n)?function(...e){return n.apply(ta(this),e),Vn(Fh.get(this))}:function(...e){return Vn(n.apply(ta(this),e))}}function Rg(n){return typeof n=="function"?Cg(n):(n instanceof IDBTransaction&&Ag(n),Eg(n,xg())?new Proxy(n,_a):n)}function Vn(n){if(n instanceof IDBRequest)return Ig(n);if(ea.has(n))return ea.get(n);const e=Rg(n);return e!==n&&(ea.set(n,e),el.set(e,n)),e}const ta=n=>el.get(n);function Pg(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=Vn(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Vn(a.result),u.oldVersion,u.newVersion,Vn(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const kg=["get","getKey","getAll","getAllKeys","count"],$g=["put","add","delete","clear"],na=new Map;function Nc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(na.get(e))return na.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=$g.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||kg.includes(t)))return;const i=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),s&&u.done]))[0]};return na.set(e,i),i}Sg(n=>({...n,get:(e,t,r)=>Nc(e,t)||n.get(e,t,r),has:(e,t)=>!!Nc(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ng(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Ng(n){return n.getComponent()?.type==="VERSION"}const ya="@firebase/app",Dc="0.14.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn=new Za("@firebase/app"),Dg="@firebase/app-compat",Og="@firebase/analytics-compat",Lg="@firebase/analytics",Mg="@firebase/app-check-compat",Fg="@firebase/app-check",Ug="@firebase/auth",jg="@firebase/auth-compat",Bg="@firebase/database",qg="@firebase/data-connect",zg="@firebase/database-compat",Wg="@firebase/functions",Hg="@firebase/functions-compat",Gg="@firebase/installations",Kg="@firebase/installations-compat",Qg="@firebase/messaging",Yg="@firebase/messaging-compat",Jg="@firebase/performance",Xg="@firebase/performance-compat",Zg="@firebase/remote-config",e_="@firebase/remote-config-compat",t_="@firebase/storage",n_="@firebase/storage-compat",r_="@firebase/firestore",s_="@firebase/ai",i_="@firebase/firestore-compat",o_="firebase",a_="12.12.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va="[DEFAULT]",l_={[ya]:"fire-core",[Dg]:"fire-core-compat",[Lg]:"fire-analytics",[Og]:"fire-analytics-compat",[Fg]:"fire-app-check",[Mg]:"fire-app-check-compat",[Ug]:"fire-auth",[jg]:"fire-auth-compat",[Bg]:"fire-rtdb",[qg]:"fire-data-connect",[zg]:"fire-rtdb-compat",[Wg]:"fire-fn",[Hg]:"fire-fn-compat",[Gg]:"fire-iid",[Kg]:"fire-iid-compat",[Qg]:"fire-fcm",[Yg]:"fire-fcm-compat",[Jg]:"fire-perf",[Xg]:"fire-perf-compat",[Zg]:"fire-rc",[e_]:"fire-rc-compat",[t_]:"fire-gcs",[n_]:"fire-gcs-compat",[r_]:"fire-fst",[i_]:"fire-fst-compat",[s_]:"fire-vertex","fire-js":"fire-js",[o_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=new Map,c_=new Map,ba=new Map;function Oc(n,e){try{n.container.addComponent(e)}catch(t){dn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Lr(n){const e=n.name;if(ba.has(e))return dn.debug(`There were multiple attempts to register component ${e}.`),!1;ba.set(e,n);for(const t of Ui.values())Oc(t,n);for(const t of c_.values())Oc(t,n);return!0}function tl(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Tt(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nn=new qs("app","Firebase",u_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ur("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=a_;function jh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:va,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Nn.create("bad-app-name",{appName:String(s)});if(t||(t=Oh()),!t)throw Nn.create("no-options");const i=Ui.get(s);if(i){if(cr(t,i.options)&&cr(r,i.config))return i;throw Nn.create("duplicate-app",{appName:s})}const a=new _g(s);for(const u of ba.values())a.addComponent(u);const l=new h_(t,r,a);return Ui.set(s,l),l}function Bh(n=va){const e=Ui.get(n);if(!e&&n===va&&Oh())return jh();if(!e)throw Nn.create("no-app",{appName:n});return e}function Dn(n,e,t){let r=l_[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dn.warn(a.join(" "));return}Lr(new ur(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_="firebase-heartbeat-database",f_=1,Rs="firebase-heartbeat-store";let ra=null;function qh(){return ra||(ra=Pg(d_,f_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Rs)}catch(t){console.warn(t)}}}}).catch(n=>{throw Nn.create("idb-open",{originalErrorMessage:n.message})})),ra}async function p_(n){try{const t=(await qh()).transaction(Rs),r=await t.objectStore(Rs).get(zh(n));return await t.done,r}catch(e){if(e instanceof _n)dn.warn(e.message);else{const t=Nn.create("idb-get",{originalErrorMessage:e?.message});dn.warn(t.message)}}}async function Lc(n,e){try{const r=(await qh()).transaction(Rs,"readwrite");await r.objectStore(Rs).put(e,zh(n)),await r.done}catch(t){if(t instanceof _n)dn.warn(t.message);else{const r=Nn.create("idb-set",{originalErrorMessage:t?.message});dn.warn(r.message)}}}function zh(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_=1024,g_=30;class __{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new v_(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Mc();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>g_){const s=b_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){dn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Mc(),{heartbeatsToSend:t,unsentEntries:r}=y_(this._heartbeatsCache.heartbeats),s=Fi(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return dn.warn(e),""}}}function Mc(){return new Date().toISOString().substring(0,10)}function y_(n,e=m_){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Fc(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Fc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class v_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ig()?og().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await p_(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Lc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Lc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Fc(n){return Fi(JSON.stringify({version:2,heartbeats:n})).length}function b_(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(n){Lr(new ur("platform-logger",e=>new Vg(e),"PRIVATE")),Lr(new ur("heartbeat",e=>new __(e),"PRIVATE")),Dn(ya,Dc,n),Dn(ya,Dc,"esm2020"),Dn("fire-js","")}w_("");function Wh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const E_=Wh,Hh=new qs("auth","Firebase",Wh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji=new Za("@firebase/auth");function x_(n,...e){ji.logLevel<=de.WARN&&ji.warn(`Auth (${Wr}): ${n}`,...e)}function Ti(n,...e){ji.logLevel<=de.ERROR&&ji.error(`Auth (${Wr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(n,...e){throw nl(n,...e)}function Ht(n,...e){return nl(n,...e)}function Gh(n,e,t){const r={...E_(),[e]:t};return new qs("auth","Firebase",r).create(e,{appName:n.name})}function cn(n){return Gh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function nl(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Hh.create(n,...e)}function re(n,e,...t){if(!n)throw nl(e,...t)}function on(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ti(e),new Error(e)}function fn(n,e){n||on(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(){return typeof self<"u"&&self.location?.href||""}function T_(){return Uc()==="http:"||Uc()==="https:"}function Uc(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(T_()||tg()||"connection"in navigator)?navigator.onLine:!0}function A_(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,t){this.shortDelay=e,this.longDelay=t,fn(t>e,"Short delay should be less than long delay!"),this.isMobile=Xm()||ng()}get(){return I_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(n,e){fn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;on("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;on("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;on("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],R_=new Hs(3e4,6e4);function yn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function vn(n,e,t,r,s={}){return Qh(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=zs({key:n.config.apiKey,...a}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:u,...i};return eg()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&Ws(n.emulatorConfig.host)&&(h.credentials="include"),Kh.fetch()(await Yh(n,n.config.apiHost,t,l),h)})}async function Qh(n,e,t){n._canInitEmulator=!1;const r={...S_,...e};try{const s=new k_(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw _i(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw _i(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw _i(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw _i(n,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Gh(n,f,h);Dt(n,f)}}catch(s){if(s instanceof _n)throw s;Dt(n,"network-request-failed",{message:String(s)})}}async function Gs(n,e,t,r,s={}){const i=await vn(n,e,t,r,s);return"mfaPendingCredential"in i&&Dt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Yh(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?rl(n.config,s):`${n.config.apiScheme}://${s}`;return C_.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function P_(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class k_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ht(this.auth,"network-request-failed")),R_.get())})}}function _i(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Ht(n,e,r);return s.customData._tokenResponse=t,s}function jc(n){return n!==void 0&&n.enterprise!==void 0}class $_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return P_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function V_(n,e){return vn(n,"GET","/v2/recaptchaConfig",yn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N_(n,e){return vn(n,"POST","/v1/accounts:delete",e)}async function Bi(n,e){return vn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function D_(n,e=!1){const t=Xe(n),r=await t.getIdToken(e),s=sl(r);re(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i?.sign_in_provider;return{claims:s,token:r,authTime:ws(sa(s.auth_time)),issuedAtTime:ws(sa(s.iat)),expirationTime:ws(sa(s.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function sa(n){return Number(n)*1e3}function sl(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ti("JWT malformed, contained fewer than 3 sections"),null;try{const s=Nh(t);return s?JSON.parse(s):(Ti("Failed to decode base64 JWT payload"),null)}catch(s){return Ti("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Bc(n){const e=sl(n);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ps(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof _n&&O_(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function O_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ws(this.lastLoginAt),this.creationTime=ws(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qi(n){const e=n.auth,t=await n.getIdToken(),r=await Ps(n,Bi(e,{idToken:t}));re(r?.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=s.providerUserInfo?.length?Jh(s.providerUserInfo):[],a=F_(n.providerData,i),l=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!a?.length,h=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ea(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,f)}async function M_(n){const e=Xe(n);await qi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function F_(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Jh(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U_(n,e){const t=await Qh(n,{},async()=>{const r=zs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await Yh(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return n.emulatorConfig&&Ws(n.emulatorConfig.host)&&(u.credentials="include"),Kh.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function j_(n,e){return vn(n,"POST","/v2/accounts:revokeToken",yn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){re(e.length!==0,"internal-error");const t=Bc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await U_(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Pr;return r&&(re(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(re(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(re(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Pr,this.toJSON())}_performRefresh(){return on("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(n,e){re(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Vt{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new L_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ea(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Ps(this,this.stsTokenManager.getToken(this.auth,e));return re(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return D_(this,e)}reload(){return M_(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Vt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await qi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tt(this.auth.app))return Promise.reject(cn(this.auth));const e=await this.getIdToken();return await Ps(this,N_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,l=t.tenantId??void 0,u=t._redirectEventId??void 0,h=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:g,emailVerified:x,isAnonymous:y,providerData:S,stsTokenManager:R}=t;re(g&&R,e,"internal-error");const P=Pr.fromJSON(this.name,R);re(typeof g=="string",e,"internal-error"),Sn(r,e.name),Sn(s,e.name),re(typeof x=="boolean",e,"internal-error"),re(typeof y=="boolean",e,"internal-error"),Sn(i,e.name),Sn(a,e.name),Sn(l,e.name),Sn(u,e.name),Sn(h,e.name),Sn(f,e.name);const L=new Vt({uid:g,auth:e,email:s,emailVerified:x,displayName:r,isAnonymous:y,photoURL:a,phoneNumber:i,tenantId:l,stsTokenManager:P,createdAt:h,lastLoginAt:f});return S&&Array.isArray(S)&&(L.providerData=S.map(k=>({...k}))),u&&(L._redirectEventId=u),L}static async _fromIdTokenResponse(e,t,r=!1){const s=new Pr;s.updateFromServerResponse(t);const i=new Vt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await qi(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];re(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Jh(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!i?.length,l=new Pr;l.updateFromIdToken(r);const u=new Vt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ea(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc=new Map;function an(n){fn(n instanceof Function,"Expected a class definition");let e=qc.get(n);return e?(fn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,qc.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Xh.type="NONE";const zc=Xh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(n,e,t){return`firebase:${n}:${e}:${t}`}class kr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ii(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ii("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Bi(this.auth,{idToken:e}).catch(()=>{});return t?Vt._fromGetAccountInfoResponse(this.auth,t,e):null}return Vt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new kr(an(zc),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||an(zc);const a=Ii(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const f=await h._get(a);if(f){let g;if(typeof f=="string"){const x=await Bi(e,{idToken:f}).catch(()=>{});if(!x)break;g=await Vt._fromGetAccountInfoResponse(e,x,f)}else g=Vt._fromJSON(e,f);h!==i&&(l=g),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new kr(i,e,r):(i=u[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new kr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Zh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sd(e))return"Blackberry";if(id(e))return"Webos";if(ed(e))return"Safari";if((e.includes("chrome/")||td(e))&&!e.includes("edge/"))return"Chrome";if(rd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Zh(n=lt()){return/firefox\//i.test(n)}function ed(n=lt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function td(n=lt()){return/crios\//i.test(n)}function nd(n=lt()){return/iemobile/i.test(n)}function rd(n=lt()){return/android/i.test(n)}function sd(n=lt()){return/blackberry/i.test(n)}function id(n=lt()){return/webos/i.test(n)}function il(n=lt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function B_(n=lt()){return il(n)&&!!window.navigator?.standalone}function q_(){return rg()&&document.documentMode===10}function od(n=lt()){return il(n)||rd(n)||id(n)||sd(n)||/windows phone/i.test(n)||nd(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(n,e=[]){let t;switch(n){case"Browser":t=Wc(lt());break;case"Worker":t=`${Wc(lt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Wr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,l)=>{try{const u=e(i);a(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W_(n,e={}){return vn(n,"GET","/v2/passwordPolicy",yn(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_=6;class G_{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??H_,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hc(this),this.idTokenSubscription=new Hc(this),this.beforeStateQueue=new z_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=an(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await kr.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Bi(this,{idToken:e}),r=await Vt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Tt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,a=r?._redirectEventId,l=await this.tryRedirectSignIn(e);(!i||i===a)&&l?.user&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await qi(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=A_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Tt(this.app))return Promise.reject(cn(this));const t=e?Xe(e):null;return t&&re(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Tt(this.app)?Promise.reject(cn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Tt(this.app)?Promise.reject(cn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(an(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await W_(this),t=new G_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new qs("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await j_(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&an(e)||this._popupRedirectResolver;re(t,this,"argument-error"),this.redirectPersistenceManager=await kr.create(this,[an(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ad(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Tt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&x_(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Hn(n){return Xe(n)}class Hc{constructor(e){this.auth=e,this.observer=null,this.addObserver=hg(t=>this.observer=t)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let co={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Q_(n){co=n}function ld(n){return co.loadJS(n)}function Y_(){return co.recaptchaEnterpriseScript}function J_(){return co.gapiScript}function X_(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Z_{constructor(){this.enterprise=new ey}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class ey{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const ty="recaptcha-enterprise",cd="NO_RECAPTCHA";class ny{constructor(e){this.type=ty,this.auth=Hn(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,l)=>{V_(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new $_(u);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(u=>{l(u)})})}function s(i,a,l){const u=window.grecaptcha;jc(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(cd)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Z_().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(l=>{if(!t&&jc(window.grecaptcha))s(l,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Y_();u.length!==0&&(u+=l),ld(u).then(()=>{s(l,i,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function Gc(n,e,t,r=!1,s=!1){const i=new ny(n);let a;if(s)a=cd;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const l={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function zi(n,e,t,r,s){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Gc(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Gc(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ry(n,e){const t=tl(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(cr(i,e??{}))return s;Dt(s,"already-initialized")}return t.initialize({options:e})}function sy(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(an);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function iy(n,e,t){const r=Hn(n);re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=ud(e),{host:a,port:l}=oy(e),u=l===null?"":`:${l}`,h={url:`${i}//${a}${u}/`},f=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){re(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),re(cr(h,r.config.emulator)&&cr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Ws(a)?Mh(`${i}//${a}${u}`):ay()}function ud(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function oy(n){const e=ud(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Kc(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Kc(a)}}}function Kc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ay(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return on("not implemented")}_getIdTokenResponse(e){return on("not implemented")}_linkToIdToken(e,t){return on("not implemented")}_getReauthenticationResolver(e){return on("not implemented")}}async function ly(n,e){return vn(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cy(n,e){return Gs(n,"POST","/v1/accounts:signInWithPassword",yn(n,e))}async function uy(n,e){return vn(n,"POST","/v1/accounts:sendOobCode",yn(n,e))}async function hy(n,e){return uy(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dy(n,e){return Gs(n,"POST","/v1/accounts:signInWithEmailLink",yn(n,e))}async function fy(n,e){return Gs(n,"POST","/v1/accounts:signInWithEmailLink",yn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks extends ol{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new ks(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ks(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zi(e,t,"signInWithPassword",cy);case"emailLink":return dy(e,{email:this._email,oobCode:this._password});default:Dt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zi(e,r,"signUpPassword",ly);case"emailLink":return fy(e,{idToken:t,email:this._email,oobCode:this._password});default:Dt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $r(n,e){return Gs(n,"POST","/v1/accounts:signInWithIdp",yn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py="http://localhost";class hr extends ol{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new hr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Dt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new hr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return $r(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,$r(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,$r(e,t)}buildRequest(){const e={requestUri:py,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=zs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function gy(n){const e=ps(ms(n)).link,t=e?ps(ms(e)).deep_link_id:null,r=ps(ms(n)).deep_link_id;return(r?ps(ms(r)).link:null)||r||t||e||n}class al{constructor(e){const t=ps(ms(e)),r=t.apiKey??null,s=t.oobCode??null,i=my(t.mode??null);re(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=gy(e);try{return new al(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(){this.providerId=Hr.PROVIDER_ID}static credential(e,t){return ks._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=al.parseLink(t);return re(r,"argument-error"),ks._fromEmailAndCode(e,r.code,r.tenantId)}}Hr.PROVIDER_ID="password";Hr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Hr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks extends hd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends Ks{constructor(){super("facebook.com")}static credential(e){return hr._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends Ks{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return hr._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Rn.credential(t,r)}catch{return null}}}Rn.GOOGLE_SIGN_IN_METHOD="google.com";Rn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends Ks{constructor(){super("github.com")}static credential(e){return hr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pn.credential(e.oauthAccessToken)}catch{return null}}}Pn.GITHUB_SIGN_IN_METHOD="github.com";Pn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends Ks{constructor(){super("twitter.com")}static credential(e,t){return hr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return kn.credential(t,r)}catch{return null}}}kn.TWITTER_SIGN_IN_METHOD="twitter.com";kn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _y(n,e){return Gs(n,"POST","/v1/accounts:signUp",yn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Vt._fromIdTokenResponse(e,r,s),a=Qc(r);return new dr({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Qc(r);return new dr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Qc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi extends _n{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Wi.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Wi(e,t,r,s)}}function dd(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Wi._fromErrorAndOperation(n,i,e,r):i})}async function yy(n,e,t=!1){const r=await Ps(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return dr._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vy(n,e,t=!1){const{auth:r}=n;if(Tt(r.app))return Promise.reject(cn(r));const s="reauthenticate";try{const i=await Ps(n,dd(r,s,e,n),t);re(i.idToken,r,"internal-error");const a=sl(i.idToken);re(a,r,"internal-error");const{sub:l}=a;return re(n.uid===l,r,"user-mismatch"),dr._forOperation(n,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Dt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fd(n,e,t=!1){if(Tt(n.app))return Promise.reject(cn(n));const r="signIn",s=await dd(n,r,e),i=await dr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function by(n,e){return fd(Hn(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pd(n){const e=Hn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function wy(n,e,t){const r=Hn(n);await zi(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",hy)}async function Ey(n,e,t){if(Tt(n.app))return Promise.reject(cn(n));const r=Hn(n),a=await zi(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",_y).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&pd(n),u}),l=await dr._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function xy(n,e,t){return Tt(n.app)?Promise.reject(cn(n)):by(Xe(n),Hr.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&pd(n),r})}function Ty(n,e,t,r){return Xe(n).onIdTokenChanged(e,t,r)}function Iy(n,e,t){return Xe(n).beforeAuthStateChanged(e,t)}function Ay(n,e,t,r){return Xe(n).onAuthStateChanged(e,t,r)}function Sy(n){return Xe(n).signOut()}const Hi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Hi,"1"),this.storage.removeItem(Hi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy=1e3,Ry=10;class gd extends md{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=od(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);q_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ry):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Cy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}gd.type="LOCAL";const Py=gd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d extends md{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}_d.type="SESSION";const yd=_d;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ky(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new uo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(t.origin,i)),u=await ky(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}uo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,u)=>{const h=ll("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const x=g;if(x.data.eventId===h)switch(x.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(x.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(){return window}function Vy(n){Gt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(){return typeof Gt().WorkerGlobalScope<"u"&&typeof Gt().importScripts=="function"}async function Ny(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Dy(){return navigator?.serviceWorker?.controller||null}function Oy(){return vd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd="firebaseLocalStorageDb",Ly=1,Gi="firebaseLocalStorage",wd="fbase_key";class Qs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ho(n,e){return n.transaction([Gi],e?"readwrite":"readonly").objectStore(Gi)}function My(){const n=indexedDB.deleteDatabase(bd);return new Qs(n).toPromise()}function xa(){const n=indexedDB.open(bd,Ly);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Gi,{keyPath:wd})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Gi)?e(r):(r.close(),await My(),e(await xa()))})})}async function Yc(n,e,t){const r=ho(n,!0).put({[wd]:e,value:t});return new Qs(r).toPromise()}async function Fy(n,e){const t=ho(n,!1).get(e),r=await new Qs(t).toPromise();return r===void 0?null:r.value}function Jc(n,e){const t=ho(n,!0).delete(e);return new Qs(t).toPromise()}const Uy=800,jy=3;class Ed{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xa(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>jy)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=uo._getInstance(Oy()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Ny(),!this.activeServiceWorker)return;this.sender=new $y(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Dy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xa();return await Yc(e,Hi,"1"),await Jc(e,Hi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Yc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Fy(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Jc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ho(s,!1).getAll();return new Qs(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Uy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ed.type="LOCAL";const By=Ed;new Hs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(n,e){return e?an(e):(re(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl extends ol{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $r(e,this._buildIdpRequest())}_linkToIdToken(e,t){return $r(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return $r(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function zy(n){return fd(n.auth,new cl(n),n.bypassAuthState)}function Wy(n){const{auth:e,user:t}=n;return re(t,e,"internal-error"),vy(t,new cl(n),n.bypassAuthState)}async function Hy(n){const{auth:e,user:t}=n;return re(t,e,"internal-error"),yy(t,new cl(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zy;case"linkViaPopup":case"linkViaRedirect":return Hy;case"reauthViaPopup":case"reauthViaRedirect":return Wy;default:Dt(this.auth,"internal-error")}}resolve(e){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy=new Hs(2e3,1e4);class Cr extends xd{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Cr.currentPopupAction&&Cr.currentPopupAction.cancel(),Cr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){fn(this.filter.length===1,"Popup operations only handle one event");const e=ll();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Cr.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ht(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Gy.get())};e()}}Cr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky="pendingRedirect",Ai=new Map;class Qy extends xd{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ai.get(this.auth._key());if(!e){try{const r=await Yy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ai.set(this.auth._key(),e)}return this.bypassAuthState||Ai.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Yy(n,e){const t=Zy(e),r=Xy(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Jy(n,e){Ai.set(n._key(),e)}function Xy(n){return an(n._redirectPersistence)}function Zy(n){return Ii(Ky,n.config.apiKey,n.name)}async function ev(n,e,t=!1){if(Tt(n.app))return Promise.reject(cn(n));const r=Hn(n),s=qy(r,e),a=await new Qy(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv=10*60*1e3;class nv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Td(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Ht(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tv&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xc(e))}saveEventToCache(e){this.cachedEventUids.add(Xc(e)),this.lastProcessedEventTime=Date.now()}}function Xc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Td({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function rv(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Td(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sv(n,e={}){return vn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ov=/^https?/;async function av(n){if(n.config.emulator)return;const{authorizedDomains:e}=await sv(n);for(const t of e)try{if(lv(t))return}catch{}Dt(n,"unauthorized-domain")}function lv(n){const e=wa(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!ov.test(t))return!1;if(iv.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv=new Hs(3e4,6e4);function Zc(){const n=Gt().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function uv(n){return new Promise((e,t)=>{function r(){Zc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zc(),t(Ht(n,"network-request-failed"))},timeout:cv.get()})}if(Gt().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Gt().gapi?.load)r();else{const s=X_("iframefcb");return Gt()[s]=()=>{gapi.load?r():t(Ht(n,"network-request-failed"))},ld(`${J_()}?onload=${s}`).catch(i=>t(i))}}).catch(e=>{throw Si=null,e})}let Si=null;function hv(n){return Si=Si||uv(n),Si}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv=new Hs(5e3,15e3),fv="__/auth/iframe",pv="emulator/auth/iframe",mv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _v(n){const e=n.config;re(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?rl(e,pv):`https://${n.config.authDomain}/${fv}`,r={apiKey:e.apiKey,appName:n.name,v:Wr},s=gv.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${zs(r).slice(1)}`}async function yv(n){const e=await hv(n),t=Gt().gapi;return re(t,n,"internal-error"),e.open({where:document.body,url:_v(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mv,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Ht(n,"network-request-failed"),l=Gt().setTimeout(()=>{i(a)},dv.get());function u(){Gt().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bv=500,wv=600,Ev="_blank",xv="http://localhost";class eu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Tv(n,e,t,r=bv,s=wv){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...vv,width:r.toString(),height:s.toString(),top:i,left:a},h=lt().toLowerCase();t&&(l=td(h)?Ev:t),Zh(h)&&(e=e||xv,u.scrollbars="yes");const f=Object.entries(u).reduce((x,[y,S])=>`${x}${y}=${S},`,"");if(B_(h)&&l!=="_self")return Iv(e||"",l),new eu(null);const g=window.open(e||"",l,f);re(g,n,"popup-blocked");try{g.focus()}catch{}return new eu(g)}function Iv(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av="__/auth/handler",Sv="emulator/auth/handler",Cv=encodeURIComponent("fac");async function tu(n,e,t,r,s,i){re(n.config.authDomain,n,"auth-domain-config-required"),re(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Wr,eventId:s};if(e instanceof hd){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",ug(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))a[f]=g}if(e instanceof Ks){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await n._getAppCheckToken(),h=u?`#${Cv}=${encodeURIComponent(u)}`:"";return`${Rv(n)}?${zs(l).slice(1)}${h}`}function Rv({config:n}){return n.emulator?rl(n,Sv):`https://${n.authDomain}/${Av}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia="webStorageSupport";class Pv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yd,this._completeRedirectFn=ev,this._overrideRedirectResult=Jy}async _openPopup(e,t,r,s){fn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await tu(e,t,r,wa(),s);return Tv(e,i,ll())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await tu(e,t,r,wa(),s);return Vy(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(fn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await yv(e),r=new nv(e);return t.register("authEvent",s=>(re(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ia,{type:ia},s=>{const i=s?.[0]?.[ia];i!==void 0&&t(!!i),Dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=av(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return od()||ed()||il()}}const kv=Pv;var nu="@firebase/auth",ru="1.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Nv(n){Lr(new ur("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;re(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ad(n)},h=new K_(r,s,i,u);return sy(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Lr(new ur("auth-internal",e=>{const t=Hn(e.getProvider("auth").getImmediate());return(r=>new $v(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dn(nu,ru,Vv(n)),Dn(nu,ru,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv=5*60,Ov=Lh("authIdTokenMaxAge")||Dv;let su=null;const Lv=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Ov)return;const s=t?.token;su!==s&&(su=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Mv(n=Bh()){const e=tl(n,"auth");if(e.isInitialized())return e.getImmediate();const t=ry(n,{popupRedirectResolver:kv,persistence:[By,Py,yd]}),r=Lh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=Lv(i.toString());Iy(t,a,()=>a(t.currentUser)),Ty(t,l=>a(l))}}const s=Dh("auth");return s&&iy(t,`http://${s}`),t}function Fv(){return document.getElementsByTagName("head")?.[0]??document}Q_({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Ht("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",Fv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Nv("Browser");var iu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var On,Id;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,_){function v(){}v.prototype=_.prototype,E.F=_.prototype,E.prototype=new v,E.prototype.constructor=E,E.D=function(T,b,I){for(var m=Array(arguments.length-2),q=2;q<arguments.length;q++)m[q-2]=arguments[q];return _.prototype[b].apply(T,m)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,_,v){v||(v=0);const T=Array(16);if(typeof _=="string")for(var b=0;b<16;++b)T[b]=_.charCodeAt(v++)|_.charCodeAt(v++)<<8|_.charCodeAt(v++)<<16|_.charCodeAt(v++)<<24;else for(b=0;b<16;++b)T[b]=_[v++]|_[v++]<<8|_[v++]<<16|_[v++]<<24;_=E.g[0],v=E.g[1],b=E.g[2];let I=E.g[3],m;m=_+(I^v&(b^I))+T[0]+3614090360&4294967295,_=v+(m<<7&4294967295|m>>>25),m=I+(b^_&(v^b))+T[1]+3905402710&4294967295,I=_+(m<<12&4294967295|m>>>20),m=b+(v^I&(_^v))+T[2]+606105819&4294967295,b=I+(m<<17&4294967295|m>>>15),m=v+(_^b&(I^_))+T[3]+3250441966&4294967295,v=b+(m<<22&4294967295|m>>>10),m=_+(I^v&(b^I))+T[4]+4118548399&4294967295,_=v+(m<<7&4294967295|m>>>25),m=I+(b^_&(v^b))+T[5]+1200080426&4294967295,I=_+(m<<12&4294967295|m>>>20),m=b+(v^I&(_^v))+T[6]+2821735955&4294967295,b=I+(m<<17&4294967295|m>>>15),m=v+(_^b&(I^_))+T[7]+4249261313&4294967295,v=b+(m<<22&4294967295|m>>>10),m=_+(I^v&(b^I))+T[8]+1770035416&4294967295,_=v+(m<<7&4294967295|m>>>25),m=I+(b^_&(v^b))+T[9]+2336552879&4294967295,I=_+(m<<12&4294967295|m>>>20),m=b+(v^I&(_^v))+T[10]+4294925233&4294967295,b=I+(m<<17&4294967295|m>>>15),m=v+(_^b&(I^_))+T[11]+2304563134&4294967295,v=b+(m<<22&4294967295|m>>>10),m=_+(I^v&(b^I))+T[12]+1804603682&4294967295,_=v+(m<<7&4294967295|m>>>25),m=I+(b^_&(v^b))+T[13]+4254626195&4294967295,I=_+(m<<12&4294967295|m>>>20),m=b+(v^I&(_^v))+T[14]+2792965006&4294967295,b=I+(m<<17&4294967295|m>>>15),m=v+(_^b&(I^_))+T[15]+1236535329&4294967295,v=b+(m<<22&4294967295|m>>>10),m=_+(b^I&(v^b))+T[1]+4129170786&4294967295,_=v+(m<<5&4294967295|m>>>27),m=I+(v^b&(_^v))+T[6]+3225465664&4294967295,I=_+(m<<9&4294967295|m>>>23),m=b+(_^v&(I^_))+T[11]+643717713&4294967295,b=I+(m<<14&4294967295|m>>>18),m=v+(I^_&(b^I))+T[0]+3921069994&4294967295,v=b+(m<<20&4294967295|m>>>12),m=_+(b^I&(v^b))+T[5]+3593408605&4294967295,_=v+(m<<5&4294967295|m>>>27),m=I+(v^b&(_^v))+T[10]+38016083&4294967295,I=_+(m<<9&4294967295|m>>>23),m=b+(_^v&(I^_))+T[15]+3634488961&4294967295,b=I+(m<<14&4294967295|m>>>18),m=v+(I^_&(b^I))+T[4]+3889429448&4294967295,v=b+(m<<20&4294967295|m>>>12),m=_+(b^I&(v^b))+T[9]+568446438&4294967295,_=v+(m<<5&4294967295|m>>>27),m=I+(v^b&(_^v))+T[14]+3275163606&4294967295,I=_+(m<<9&4294967295|m>>>23),m=b+(_^v&(I^_))+T[3]+4107603335&4294967295,b=I+(m<<14&4294967295|m>>>18),m=v+(I^_&(b^I))+T[8]+1163531501&4294967295,v=b+(m<<20&4294967295|m>>>12),m=_+(b^I&(v^b))+T[13]+2850285829&4294967295,_=v+(m<<5&4294967295|m>>>27),m=I+(v^b&(_^v))+T[2]+4243563512&4294967295,I=_+(m<<9&4294967295|m>>>23),m=b+(_^v&(I^_))+T[7]+1735328473&4294967295,b=I+(m<<14&4294967295|m>>>18),m=v+(I^_&(b^I))+T[12]+2368359562&4294967295,v=b+(m<<20&4294967295|m>>>12),m=_+(v^b^I)+T[5]+4294588738&4294967295,_=v+(m<<4&4294967295|m>>>28),m=I+(_^v^b)+T[8]+2272392833&4294967295,I=_+(m<<11&4294967295|m>>>21),m=b+(I^_^v)+T[11]+1839030562&4294967295,b=I+(m<<16&4294967295|m>>>16),m=v+(b^I^_)+T[14]+4259657740&4294967295,v=b+(m<<23&4294967295|m>>>9),m=_+(v^b^I)+T[1]+2763975236&4294967295,_=v+(m<<4&4294967295|m>>>28),m=I+(_^v^b)+T[4]+1272893353&4294967295,I=_+(m<<11&4294967295|m>>>21),m=b+(I^_^v)+T[7]+4139469664&4294967295,b=I+(m<<16&4294967295|m>>>16),m=v+(b^I^_)+T[10]+3200236656&4294967295,v=b+(m<<23&4294967295|m>>>9),m=_+(v^b^I)+T[13]+681279174&4294967295,_=v+(m<<4&4294967295|m>>>28),m=I+(_^v^b)+T[0]+3936430074&4294967295,I=_+(m<<11&4294967295|m>>>21),m=b+(I^_^v)+T[3]+3572445317&4294967295,b=I+(m<<16&4294967295|m>>>16),m=v+(b^I^_)+T[6]+76029189&4294967295,v=b+(m<<23&4294967295|m>>>9),m=_+(v^b^I)+T[9]+3654602809&4294967295,_=v+(m<<4&4294967295|m>>>28),m=I+(_^v^b)+T[12]+3873151461&4294967295,I=_+(m<<11&4294967295|m>>>21),m=b+(I^_^v)+T[15]+530742520&4294967295,b=I+(m<<16&4294967295|m>>>16),m=v+(b^I^_)+T[2]+3299628645&4294967295,v=b+(m<<23&4294967295|m>>>9),m=_+(b^(v|~I))+T[0]+4096336452&4294967295,_=v+(m<<6&4294967295|m>>>26),m=I+(v^(_|~b))+T[7]+1126891415&4294967295,I=_+(m<<10&4294967295|m>>>22),m=b+(_^(I|~v))+T[14]+2878612391&4294967295,b=I+(m<<15&4294967295|m>>>17),m=v+(I^(b|~_))+T[5]+4237533241&4294967295,v=b+(m<<21&4294967295|m>>>11),m=_+(b^(v|~I))+T[12]+1700485571&4294967295,_=v+(m<<6&4294967295|m>>>26),m=I+(v^(_|~b))+T[3]+2399980690&4294967295,I=_+(m<<10&4294967295|m>>>22),m=b+(_^(I|~v))+T[10]+4293915773&4294967295,b=I+(m<<15&4294967295|m>>>17),m=v+(I^(b|~_))+T[1]+2240044497&4294967295,v=b+(m<<21&4294967295|m>>>11),m=_+(b^(v|~I))+T[8]+1873313359&4294967295,_=v+(m<<6&4294967295|m>>>26),m=I+(v^(_|~b))+T[15]+4264355552&4294967295,I=_+(m<<10&4294967295|m>>>22),m=b+(_^(I|~v))+T[6]+2734768916&4294967295,b=I+(m<<15&4294967295|m>>>17),m=v+(I^(b|~_))+T[13]+1309151649&4294967295,v=b+(m<<21&4294967295|m>>>11),m=_+(b^(v|~I))+T[4]+4149444226&4294967295,_=v+(m<<6&4294967295|m>>>26),m=I+(v^(_|~b))+T[11]+3174756917&4294967295,I=_+(m<<10&4294967295|m>>>22),m=b+(_^(I|~v))+T[2]+718787259&4294967295,b=I+(m<<15&4294967295|m>>>17),m=v+(I^(b|~_))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+_&4294967295,E.g[1]=E.g[1]+(b+(m<<21&4294967295|m>>>11))&4294967295,E.g[2]=E.g[2]+b&4294967295,E.g[3]=E.g[3]+I&4294967295}r.prototype.v=function(E,_){_===void 0&&(_=E.length);const v=_-this.blockSize,T=this.C;let b=this.h,I=0;for(;I<_;){if(b==0)for(;I<=v;)s(this,E,I),I+=this.blockSize;if(typeof E=="string"){for(;I<_;)if(T[b++]=E.charCodeAt(I++),b==this.blockSize){s(this,T),b=0;break}}else for(;I<_;)if(T[b++]=E[I++],b==this.blockSize){s(this,T),b=0;break}}this.h=b,this.o+=_},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var _=1;_<E.length-8;++_)E[_]=0;_=this.o*8;for(var v=E.length-8;v<E.length;++v)E[v]=_&255,_/=256;for(this.v(E),E=Array(16),_=0,v=0;v<4;++v)for(let T=0;T<32;T+=8)E[_++]=this.g[v]>>>T&255;return E};function i(E,_){var v=l;return Object.prototype.hasOwnProperty.call(v,E)?v[E]:v[E]=_(E)}function a(E,_){this.h=_;const v=[];let T=!0;for(let b=E.length-1;b>=0;b--){const I=E[b]|0;T&&I==_||(v[b]=I,T=!1)}this.g=v}var l={};function u(E){return-128<=E&&E<128?i(E,function(_){return new a([_|0],_<0?-1:0)}):new a([E|0],E<0?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return g;if(E<0)return P(h(-E));const _=[];let v=1;for(let T=0;E>=v;T++)_[T]=E/v|0,v*=4294967296;return new a(_,0)}function f(E,_){if(E.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(E.charAt(0)=="-")return P(f(E.substring(1),_));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=h(Math.pow(_,8));let T=g;for(let I=0;I<E.length;I+=8){var b=Math.min(8,E.length-I);const m=parseInt(E.substring(I,I+b),_);b<8?(b=h(Math.pow(_,b)),T=T.j(b).add(h(m))):(T=T.j(v),T=T.add(h(m)))}return T}var g=u(0),x=u(1),y=u(16777216);n=a.prototype,n.m=function(){if(R(this))return-P(this).m();let E=0,_=1;for(let v=0;v<this.g.length;v++){const T=this.i(v);E+=(T>=0?T:4294967296+T)*_,_*=4294967296}return E},n.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(S(this))return"0";if(R(this))return"-"+P(this).toString(E);const _=h(Math.pow(E,6));var v=this;let T="";for(;;){const b=F(v,_).g;v=L(v,b.j(_));let I=((v.g.length>0?v.g[0]:v.h)>>>0).toString(E);if(v=b,S(v))return I+T;for(;I.length<6;)I="0"+I;T=I+T}},n.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function S(E){if(E.h!=0)return!1;for(let _=0;_<E.g.length;_++)if(E.g[_]!=0)return!1;return!0}function R(E){return E.h==-1}n.l=function(E){return E=L(this,E),R(E)?-1:S(E)?0:1};function P(E){const _=E.g.length,v=[];for(let T=0;T<_;T++)v[T]=~E.g[T];return new a(v,~E.h).add(x)}n.abs=function(){return R(this)?P(this):this},n.add=function(E){const _=Math.max(this.g.length,E.g.length),v=[];let T=0;for(let b=0;b<=_;b++){let I=T+(this.i(b)&65535)+(E.i(b)&65535),m=(I>>>16)+(this.i(b)>>>16)+(E.i(b)>>>16);T=m>>>16,I&=65535,m&=65535,v[b]=m<<16|I}return new a(v,v[v.length-1]&-2147483648?-1:0)};function L(E,_){return E.add(P(_))}n.j=function(E){if(S(this)||S(E))return g;if(R(this))return R(E)?P(this).j(P(E)):P(P(this).j(E));if(R(E))return P(this.j(P(E)));if(this.l(y)<0&&E.l(y)<0)return h(this.m()*E.m());const _=this.g.length+E.g.length,v=[];for(var T=0;T<2*_;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(let b=0;b<E.g.length;b++){const I=this.i(T)>>>16,m=this.i(T)&65535,q=E.i(b)>>>16,Z=E.i(b)&65535;v[2*T+2*b]+=m*Z,k(v,2*T+2*b),v[2*T+2*b+1]+=I*Z,k(v,2*T+2*b+1),v[2*T+2*b+1]+=m*q,k(v,2*T+2*b+1),v[2*T+2*b+2]+=I*q,k(v,2*T+2*b+2)}for(E=0;E<_;E++)v[E]=v[2*E+1]<<16|v[2*E];for(E=_;E<2*_;E++)v[E]=0;return new a(v,0)};function k(E,_){for(;(E[_]&65535)!=E[_];)E[_+1]+=E[_]>>>16,E[_]&=65535,_++}function B(E,_){this.g=E,this.h=_}function F(E,_){if(S(_))throw Error("division by zero");if(S(E))return new B(g,g);if(R(E))return _=F(P(E),_),new B(P(_.g),P(_.h));if(R(_))return _=F(E,P(_)),new B(P(_.g),_.h);if(E.g.length>30){if(R(E)||R(_))throw Error("slowDivide_ only works with positive integers.");for(var v=x,T=_;T.l(E)<=0;)v=W(v),T=W(T);var b=O(v,1),I=O(T,1);for(T=O(T,2),v=O(v,2);!S(T);){var m=I.add(T);m.l(E)<=0&&(b=b.add(v),I=m),T=O(T,1),v=O(v,1)}return _=L(E,b.j(_)),new B(b,_)}for(b=g;E.l(_)>=0;){for(v=Math.max(1,Math.floor(E.m()/_.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),I=h(v),m=I.j(_);R(m)||m.l(E)>0;)v-=T,I=h(v),m=I.j(_);S(I)&&(I=x),b=b.add(I),E=L(E,m)}return new B(b,E)}n.B=function(E){return F(this,E).h},n.and=function(E){const _=Math.max(this.g.length,E.g.length),v=[];for(let T=0;T<_;T++)v[T]=this.i(T)&E.i(T);return new a(v,this.h&E.h)},n.or=function(E){const _=Math.max(this.g.length,E.g.length),v=[];for(let T=0;T<_;T++)v[T]=this.i(T)|E.i(T);return new a(v,this.h|E.h)},n.xor=function(E){const _=Math.max(this.g.length,E.g.length),v=[];for(let T=0;T<_;T++)v[T]=this.i(T)^E.i(T);return new a(v,this.h^E.h)};function W(E){const _=E.g.length+1,v=[];for(let T=0;T<_;T++)v[T]=E.i(T)<<1|E.i(T-1)>>>31;return new a(v,E.h)}function O(E,_){const v=_>>5;_%=32;const T=E.g.length-v,b=[];for(let I=0;I<T;I++)b[I]=_>0?E.i(I+v)>>>_|E.i(I+v+1)<<32-_:E.i(I+v);return new a(b,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Id=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,On=a}).apply(typeof iu<"u"?iu:typeof self<"u"?self:typeof window<"u"?window:{});var yi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ad,gs,Sd,Ci,Ta,Cd,Rd,Pd;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof yi=="object"&&yi];for(var c=0;c<o.length;++c){var d=o[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,c){if(c)e:{var d=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var A=o[p];if(!(A in d))break e;d=d[A]}o=o[o.length-1],p=d[o],c=c(p),c!=p&&c!=null&&e(d,o,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(c){var d=[],p;for(p in c)Object.prototype.hasOwnProperty.call(c,p)&&d.push([p,c[p]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function l(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function u(o,c,d){return o.call.apply(o.bind,arguments)}function h(o,c,d){return h=u,h.apply(null,arguments)}function f(o,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function g(o,c){function d(){}d.prototype=c.prototype,o.Z=c.prototype,o.prototype=new d,o.prototype.constructor=o,o.Ob=function(p,A,C){for(var j=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)j[ue-2]=arguments[ue];return c.prototype[A].apply(p,j)}}var x=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function y(o){const c=o.length;if(c>0){const d=Array(c);for(let p=0;p<c;p++)d[p]=o[p];return d}return[]}function S(o,c){for(let p=1;p<arguments.length;p++){const A=arguments[p];var d=typeof A;if(d=d!="object"?d:A?Array.isArray(A)?"array":d:"null",d=="array"||d=="object"&&typeof A.length=="number"){d=o.length||0;const C=A.length||0;o.length=d+C;for(let j=0;j<C;j++)o[d+j]=A[j]}else o.push(A)}}class R{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function P(o){a.setTimeout(()=>{throw o},0)}function L(){var o=E;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class k{constructor(){this.h=this.g=null}add(c,d){const p=B.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var B=new R(()=>new F,o=>o.reset());class F{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let W,O=!1,E=new k,_=()=>{const o=Promise.resolve(void 0);W=()=>{o.then(v)}};function v(){for(var o;o=L();){try{o.h.call(o.g)}catch(d){P(d)}var c=B;c.j(o),c.h<100&&(c.h++,o.next=c.g,c.g=o)}O=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function b(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}b.prototype.h=function(){this.defaultPrevented=!0};var I=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};a.addEventListener("test",d,c),a.removeEventListener("test",d,c)}catch{}return o}();function m(o){return/^[\s\xa0]*$/.test(o)}function q(o,c){b.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,c)}g(q,b),q.prototype.init=function(o,c){const d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget,c||(d=="mouseover"?c=o.fromElement:d=="mouseout"&&(c=o.toElement)),this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&q.Z.h.call(this)},q.prototype.h=function(){q.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Z="closure_listenable_"+(Math.random()*1e6|0),me=0;function ce(o,c,d,p,A){this.listener=o,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=A,this.key=++me,this.da=this.fa=!1}function he(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ye(o,c,d){for(const p in o)c.call(d,o[p],p,o)}function $e(o,c){for(const d in o)c.call(void 0,o[d],d,o)}function He(o){const c={};for(const d in o)c[d]=o[d];return c}const mt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ct(o,c){let d,p;for(let A=1;A<arguments.length;A++){p=arguments[A];for(d in p)o[d]=p[d];for(let C=0;C<mt.length;C++)d=mt[C],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function rt(o){this.src=o,this.g={},this.h=0}rt.prototype.add=function(o,c,d,p,A){const C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);const j=Rt(o,c,p,A);return j>-1?(c=o[j],d||(c.fa=!1)):(c=new ce(c,this.src,C,!!p,A),c.fa=d,o.push(c)),c};function ht(o,c){const d=c.type;if(d in o.g){var p=o.g[d],A=Array.prototype.indexOf.call(p,c,void 0),C;(C=A>=0)&&Array.prototype.splice.call(p,A,1),C&&(he(c),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Rt(o,c,d,p){for(let A=0;A<o.length;++A){const C=o[A];if(!C.da&&C.listener==c&&C.capture==!!d&&C.ha==p)return A}return-1}var gt="closure_lm_"+(Math.random()*1e6|0),ct={};function Ft(o,c,d,p,A){if(Array.isArray(c)){for(let C=0;C<c.length;C++)Ft(o,c[C],d,p,A);return null}return d=M(d),o&&o[Z]?o.J(c,d,l(p)?!!p.capture:!1,A):_t(o,c,d,!1,p,A)}function _t(o,c,d,p,A,C){if(!c)throw Error("Invalid event type");const j=l(A)?!!A.capture:!!A;let ue=H(o);if(ue||(o[gt]=ue=new rt(o)),d=ue.add(c,d,p,j,C),d.proxy)return d;if(p=xt(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)I||(A=j),A===void 0&&(A=!1),o.addEventListener(c.toString(),p,A);else if(o.attachEvent)o.attachEvent(ee(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function xt(){function o(d){return c.call(o.src,o.listener,d)}const c=U;return o}function Pt(o,c,d,p,A){if(Array.isArray(c))for(var C=0;C<c.length;C++)Pt(o,c[C],d,p,A);else p=l(p)?!!p.capture:!!p,d=M(d),o&&o[Z]?(o=o.i,C=String(c).toString(),C in o.g&&(c=o.g[C],d=Rt(c,d,p,A),d>-1&&(he(c[d]),Array.prototype.splice.call(c,d,1),c.length==0&&(delete o.g[C],o.h--)))):o&&(o=H(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Rt(c,d,p,A)),(d=o>-1?c[o]:null)&&yt(d))}function yt(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Z])ht(c.i,o);else{var d=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(d,p,o.capture):c.detachEvent?c.detachEvent(ee(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=H(c))?(ht(d,o),d.h==0&&(d.src=null,c[gt]=null)):he(o)}}}function ee(o){return o in ct?ct[o]:ct[o]="on"+o}function U(o,c){if(o.da)o=!0;else{c=new q(c,this);const d=o.listener,p=o.ha||o.src;o.fa&&yt(o),o=d.call(p,c)}return o}function H(o){return o=o[gt],o instanceof rt?o:null}var te="__closure_events_fn_"+(Math.random()*1e9>>>0);function M(o){return typeof o=="function"?o:(o[te]||(o[te]=function(c){return o.handleEvent(c)}),o[te])}function z(){T.call(this),this.i=new rt(this),this.M=this,this.G=null}g(z,T),z.prototype[Z]=!0,z.prototype.removeEventListener=function(o,c,d,p){Pt(this,o,c,d,p)};function Y(o,c){var d,p=o.G;if(p)for(d=[];p;p=p.G)d.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new b(c,o);else if(c instanceof b)c.target=c.target||o;else{var A=c;c=new b(p,o),Ct(c,A)}A=!0;let C,j;if(d)for(j=d.length-1;j>=0;j--)C=c.g=d[j],A=ie(C,p,!0,c)&&A;if(C=c.g=o,A=ie(C,p,!0,c)&&A,A=ie(C,p,!1,c)&&A,d)for(j=0;j<d.length;j++)C=c.g=d[j],A=ie(C,p,!1,c)&&A}z.prototype.N=function(){if(z.Z.N.call(this),this.i){var o=this.i;for(const c in o.g){const d=o.g[c];for(let p=0;p<d.length;p++)he(d[p]);delete o.g[c],o.h--}}this.G=null},z.prototype.J=function(o,c,d,p){return this.i.add(String(o),c,!1,d,p)},z.prototype.K=function(o,c,d,p){return this.i.add(String(o),c,!0,d,p)};function ie(o,c,d,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();let A=!0;for(let C=0;C<c.length;++C){const j=c[C];if(j&&!j.da&&j.capture==d){const ue=j.listener,ze=j.ha||j.src;j.fa&&ht(o.i,j),A=ue.call(ze,p)!==!1&&A}}return A&&!p.defaultPrevented}function ge(o,c){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(o,c||0)}function xe(o){o.g=ge(()=>{o.g=null,o.i&&(o.i=!1,xe(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Ge extends T{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:xe(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ke(o){T.call(this),this.h=o,this.g={}}g(ke,T);var Ze=[];function De(o){ye(o.g,function(c,d){this.g.hasOwnProperty(d)&&yt(c)},o),o.g={}}ke.prototype.N=function(){ke.Z.N.call(this),De(this)},ke.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Be=a.JSON.stringify,bn=a.JSON.parse,vr=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Xt(){}function br(){}var Zt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function en(){b.call(this,"d")}g(en,b);function Ce(){b.call(this,"c")}g(Ce,b);var vt={},tn=null;function Ut(){return tn=tn||new z}vt.Ia="serverreachability";function Qn(o){b.call(this,vt.Ia,o)}g(Qn,b);function kt(o){const c=Ut();Y(c,new Qn(c))}vt.STAT_EVENT="statevent";function Xr(o,c){b.call(this,vt.STAT_EVENT,o),this.stat=c}g(Xr,b);function Ke(o){const c=Ut();Y(c,new Xr(c,o))}vt.Ja="timingevent";function Zr(o,c){b.call(this,vt.Ja,o),this.size=c}g(Zr,b);function nn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},c)}function jt(){this.g=!0}jt.prototype.ua=function(){this.g=!1};function es(o,c,d,p,A,C){o.info(function(){if(o.g)if(C){var j="",ue=C.split("&");for(let Te=0;Te<ue.length;Te++){var ze=ue[Te].split("=");if(ze.length>1){const Qe=ze[0];ze=ze[1];const qt=Qe.split("_");j=qt.length>=2&&qt[1]=="type"?j+(Qe+"="+ze+"&"):j+(Qe+"=redacted&")}}}else j=null;else j=C;return"XMLHTTP REQ ("+p+") [attempt "+A+"]: "+c+`
`+d+`
`+j})}function $o(o,c,d,p,A,C,j){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+A+"]: "+c+`
`+d+`
`+C+" "+j})}function rn(o,c,d,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+No(o,d)+(p?" "+p:"")})}function Vo(o,c){o.info(function(){return"TIMEOUT: "+c})}jt.prototype.info=function(){};function No(o,c){if(!o.g)return c;if(!c)return null;try{const C=JSON.parse(c);if(C){for(o=0;o<C.length;o++)if(Array.isArray(C[o])){var d=C[o];if(!(d.length<2)){var p=d[1];if(Array.isArray(p)&&!(p.length<1)){var A=p[0];if(A!="noop"&&A!="stop"&&A!="close")for(let j=1;j<p.length;j++)p[j]=""}}}}return Be(C)}catch{return c}}var Yn={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ii={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},oi;function ts(){}g(ts,Xt),ts.prototype.g=function(){return new XMLHttpRequest},oi=new ts;function Jn(o){return encodeURIComponent(String(o))}function Do(o){var c=1;o=o.split(":");const d=[];for(;c>0&&o.length;)d.push(o.shift()),c--;return o.length&&d.push(o.join(":")),d}function J(o,c,d,p){this.j=o,this.i=c,this.l=d,this.S=p||1,this.V=new ke(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new qe}function qe(){this.i=null,this.g="",this.h=!1}var $t={},wn={};function ns(o,c,d){o.M=1,o.A=li(Bt(c)),o.u=d,o.R=!0,Oo(o,null)}function Oo(o,c){o.F=Date.now(),ai(o),o.B=Bt(o.A);var d=o.B,p=o.S;Array.isArray(p)||(p=[String(p)]),nc(d.i,"t",p),o.C=0,d=o.j.L,o.h=new qe,o.g=bc(o.j,d?c:null,!o.u),o.P>0&&(o.O=new Ge(h(o.Y,o,o.g),o.P)),c=o.V,d=o.g,p=o.ba;var A="readystatechange";Array.isArray(A)||(A&&(Ze[0]=A.toString()),A=Ze);for(let C=0;C<A.length;C++){const j=Ft(d,A[C],p||c.handleEvent,!1,c.h||c);if(!j)break;c.g[j.key]=j}c=o.J?He(o.J):{},o.u?(o.v||(o.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,c)):(o.v="GET",o.g.ea(o.B,o.v,null,c)),kt(),es(o.i,o.v,o.B,o.l,o.S,o.u)}J.prototype.ba=function(o){o=o.target;const c=this.O;c&&Tn(o)==3?c.j():this.Y(o)},J.prototype.Y=function(o){try{if(o==this.g)e:{const ue=Tn(this.g),ze=this.g.ya(),Te=this.g.ca();if(!(ue<3)&&(ue!=3||this.g&&(this.h.h||this.g.la()||cc(this.g)))){this.K||ue!=4||ze==7||(ze==8||Te<=0?kt(3):kt(2)),Mo(this);var c=this.g.ca();this.X=c;var d=Lo(this);if(this.o=c==200,$o(this.i,this.v,this.B,this.l,this.S,ue,c),this.o){if(this.U&&!this.L){t:{if(this.g){var p,A=this.g;if((p=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!m(p)){var C=p;break t}}C=null}if(o=C)rn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Fo(this,o);else{this.o=!1,this.m=3,Ke(12),Xn(this),rs(this);break e}}if(this.R){o=!0;let Qe;for(;!this.K&&this.C<d.length;)if(Qe=dp(this,d),Qe==wn){ue==4&&(this.m=4,Ke(14),o=!1),rn(this.i,this.l,null,"[Incomplete Response]");break}else if(Qe==$t){this.m=4,Ke(15),rn(this.i,this.l,d,"[Invalid Chunk]"),o=!1;break}else rn(this.i,this.l,Qe,null),Fo(this,Qe);if(zl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ue!=4||d.length!=0||this.h.h||(this.m=1,Ke(16),o=!1),this.o=this.o&&o,!o)rn(this.i,this.l,d,"[Invalid Chunked Response]"),Xn(this),rs(this);else if(d.length>0&&!this.W){this.W=!0;var j=this.j;j.g==this&&j.aa&&!j.P&&(j.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Go(j),j.P=!0,Ke(11))}}else rn(this.i,this.l,d,null),Fo(this,d);ue==4&&Xn(this),this.o&&!this.K&&(ue==4?gc(this.j,this):(this.o=!1,ai(this)))}else Ap(this.g),c==400&&d.indexOf("Unknown SID")>0?(this.m=3,Ke(12)):(this.m=0,Ke(13)),Xn(this),rs(this)}}}catch{}finally{}};function Lo(o){if(!zl(o))return o.g.la();const c=cc(o.g);if(c==="")return"";let d="";const p=c.length,A=Tn(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return Xn(o),rs(o),"";o.h.i=new a.TextDecoder}for(let C=0;C<p;C++)o.h.h=!0,d+=o.h.i.decode(c[C],{stream:!(A&&C==p-1)});return c.length=0,o.h.g+=d,o.C=0,o.h.g}function zl(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function dp(o,c){var d=o.C,p=c.indexOf(`
`,d);return p==-1?wn:(d=Number(c.substring(d,p)),isNaN(d)?$t:(p+=1,p+d>c.length?wn:(c=c.slice(p,p+d),o.C=p+d,c)))}J.prototype.cancel=function(){this.K=!0,Xn(this)};function ai(o){o.T=Date.now()+o.H,Wl(o,o.H)}function Wl(o,c){if(o.D!=null)throw Error("WatchDog timer not null");o.D=nn(h(o.aa,o),c)}function Mo(o){o.D&&(a.clearTimeout(o.D),o.D=null)}J.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Vo(this.i,this.B),this.M!=2&&(kt(),Ke(17)),Xn(this),this.m=2,rs(this)):Wl(this,this.T-o)};function rs(o){o.j.I==0||o.K||gc(o.j,o)}function Xn(o){Mo(o);var c=o.O;c&&typeof c.dispose=="function"&&c.dispose(),o.O=null,De(o.V),o.g&&(c=o.g,o.g=null,c.abort(),c.dispose())}function Fo(o,c){try{var d=o.j;if(d.I!=0&&(d.g==o||Uo(d.h,o))){if(!o.L&&Uo(d.h,o)&&d.I==3){try{var p=d.Ba.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var A=p;if(A[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<o.F)fi(d),hi(d);else break e;Ho(d),Ke(18)}}else d.xa=A[1],0<d.xa-d.K&&A[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=nn(h(d.Va,d),6e3));Kl(d.h)<=1&&d.ta&&(d.ta=void 0)}else er(d,11)}else if((o.L||d.g==o)&&fi(d),!m(c))for(A=d.Ba.g.parse(c),c=0;c<A.length;c++){let Te=A[c];const Qe=Te[0];if(!(Qe<=d.K))if(d.K=Qe,Te=Te[1],d.I==2)if(Te[0]=="c"){d.M=Te[1],d.ba=Te[2];const qt=Te[3];qt!=null&&(d.ka=qt,d.j.info("VER="+d.ka));const tr=Te[4];tr!=null&&(d.za=tr,d.j.info("SVER="+d.za));const In=Te[5];In!=null&&typeof In=="number"&&In>0&&(p=1.5*In,d.O=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const An=o.g;if(An){const mi=An.g?An.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(mi){var C=p.h;C.g||mi.indexOf("spdy")==-1&&mi.indexOf("quic")==-1&&mi.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(jo(C,C.h),C.h=null))}if(p.G){const Ko=An.g?An.g.getResponseHeader("X-HTTP-Session-Id"):null;Ko&&(p.wa=Ko,Re(p.J,p.G,Ko))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-o.F,d.j.info("Handshake RTT: "+d.T+"ms")),p=d;var j=o;if(p.na=vc(p,p.L?p.ba:null,p.W),j.L){Ql(p.h,j);var ue=j,ze=p.O;ze&&(ue.H=ze),ue.D&&(Mo(ue),ai(ue)),p.g=j}else pc(p);d.i.length>0&&di(d)}else Te[0]!="stop"&&Te[0]!="close"||er(d,7);else d.I==3&&(Te[0]=="stop"||Te[0]=="close"?Te[0]=="stop"?er(d,7):Wo(d):Te[0]!="noop"&&d.l&&d.l.qa(Te),d.A=0)}}kt(4)}catch{}}var fp=class{constructor(o,c){this.g=o,this.map=c}};function Hl(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Gl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Kl(o){return o.h?1:o.g?o.g.size:0}function Uo(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function jo(o,c){o.g?o.g.add(c):o.h=c}function Ql(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Hl.prototype.cancel=function(){if(this.i=Yl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Yl(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const d of o.g.values())c=c.concat(d.G);return c}return y(o.i)}var Jl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pp(o,c){if(o){o=o.split("&");for(let d=0;d<o.length;d++){const p=o[d].indexOf("=");let A,C=null;p>=0?(A=o[d].substring(0,p),C=o[d].substring(p+1)):A=o[d],c(A,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function En(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;o instanceof En?(this.l=o.l,ss(this,o.j),this.o=o.o,this.g=o.g,is(this,o.u),this.h=o.h,Bo(this,rc(o.i)),this.m=o.m):o&&(c=String(o).match(Jl))?(this.l=!1,ss(this,c[1]||"",!0),this.o=os(c[2]||""),this.g=os(c[3]||"",!0),is(this,c[4]),this.h=os(c[5]||"",!0),Bo(this,c[6]||"",!0),this.m=os(c[7]||"")):(this.l=!1,this.i=new ls(null,this.l))}En.prototype.toString=function(){const o=[];var c=this.j;c&&o.push(as(c,Xl,!0),":");var d=this.g;return(d||c=="file")&&(o.push("//"),(c=this.o)&&o.push(as(c,Xl,!0),"@"),o.push(Jn(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&o.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(as(d,d.charAt(0)=="/"?_p:gp,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",as(d,vp)),o.join("")},En.prototype.resolve=function(o){const c=Bt(this);let d=!!o.j;d?ss(c,o.j):d=!!o.o,d?c.o=o.o:d=!!o.g,d?c.g=o.g:d=o.u!=null;var p=o.h;if(d)is(c,o.u);else if(d=!!o.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var A=c.h.lastIndexOf("/");A!=-1&&(p=c.h.slice(0,A+1)+p)}if(A=p,A==".."||A==".")p="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){p=A.lastIndexOf("/",0)==0,A=A.split("/");const C=[];for(let j=0;j<A.length;){const ue=A[j++];ue=="."?p&&j==A.length&&C.push(""):ue==".."?((C.length>1||C.length==1&&C[0]!="")&&C.pop(),p&&j==A.length&&C.push("")):(C.push(ue),p=!0)}p=C.join("/")}else p=A}return d?c.h=p:d=o.i.toString()!=="",d?Bo(c,rc(o.i)):d=!!o.m,d&&(c.m=o.m),c};function Bt(o){return new En(o)}function ss(o,c,d){o.j=d?os(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function is(o,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);o.u=c}else o.u=null}function Bo(o,c,d){c instanceof ls?(o.i=c,bp(o.i,o.l)):(d||(c=as(c,yp)),o.i=new ls(c,o.l))}function Re(o,c,d){o.i.set(c,d)}function li(o){return Re(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function os(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function as(o,c,d){return typeof o=="string"?(o=encodeURI(o).replace(c,mp),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function mp(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Xl=/[#\/\?@]/g,gp=/[#\?:]/g,_p=/[#\?]/g,yp=/[#\?@]/g,vp=/#/g;function ls(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function Zn(o){o.g||(o.g=new Map,o.h=0,o.i&&pp(o.i,function(c,d){o.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}n=ls.prototype,n.add=function(o,c){Zn(this),this.i=null,o=wr(this,o);let d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(c),this.h+=1,this};function Zl(o,c){Zn(o),c=wr(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function ec(o,c){return Zn(o),c=wr(o,c),o.g.has(c)}n.forEach=function(o,c){Zn(this),this.g.forEach(function(d,p){d.forEach(function(A){o.call(c,A,p,this)},this)},this)};function tc(o,c){Zn(o);let d=[];if(typeof c=="string")ec(o,c)&&(d=d.concat(o.g.get(wr(o,c))));else for(o=Array.from(o.g.values()),c=0;c<o.length;c++)d=d.concat(o[c]);return d}n.set=function(o,c){return Zn(this),this.i=null,o=wr(this,o),ec(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=tc(this,o),o.length>0?String(o[0]):c):c};function nc(o,c,d){Zl(o,c),d.length>0&&(o.i=null,o.g.set(wr(o,c),y(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(let p=0;p<c.length;p++){var d=c[p];const A=Jn(d);d=tc(this,d);for(let C=0;C<d.length;C++){let j=A;d[C]!==""&&(j+="="+Jn(d[C])),o.push(j)}}return this.i=o.join("&")};function rc(o){const c=new ls;return c.i=o.i,o.g&&(c.g=new Map(o.g),c.h=o.h),c}function wr(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function bp(o,c){c&&!o.j&&(Zn(o),o.i=null,o.g.forEach(function(d,p){const A=p.toLowerCase();p!=A&&(Zl(this,p),nc(this,A,d))},o)),o.j=c}function wp(o,c){const d=new jt;if(a.Image){const p=new Image;p.onload=f(xn,d,"TestLoadImage: loaded",!0,c,p),p.onerror=f(xn,d,"TestLoadImage: error",!1,c,p),p.onabort=f(xn,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=f(xn,d,"TestLoadImage: timeout",!1,c,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function Ep(o,c){const d=new jt,p=new AbortController,A=setTimeout(()=>{p.abort(),xn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(C=>{clearTimeout(A),C.ok?xn(d,"TestPingServer: ok",!0,c):xn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(A),xn(d,"TestPingServer: error",!1,c)})}function xn(o,c,d,p,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),p(d)}catch{}}function xp(){this.g=new vr}function qo(o){this.i=o.Sb||null,this.h=o.ab||!1}g(qo,Xt),qo.prototype.g=function(){return new ci(this.i,this.h)};function ci(o,c){z.call(this),this.H=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(ci,z),n=ci.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=c,this.readyState=1,us(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(c.body=o),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,cs(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,us(this)),this.g&&(this.readyState=3,us(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;sc(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function sc(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?cs(this):us(this),this.readyState==3&&sc(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,cs(this))},n.Na=function(o){this.g&&(this.response=o,cs(this))},n.ga=function(){this.g&&cs(this)};function cs(o){o.readyState=4,o.l=null,o.j=null,o.B=null,us(o)}n.setRequestHeader=function(o,c){this.A.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=c.next();return o.join(`\r
`)};function us(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ci.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function ic(o){let c="";return ye(o,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function zo(o,c,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=ic(d),typeof o=="string"?d!=null&&Jn(d):Re(o,c,d))}function Ne(o){z.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(Ne,z);var Tp=/^https?$/i,Ip=["POST","PUT"];n=Ne.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():oi.g(),this.g.onreadystatechange=x(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(C){oc(this,C);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var A in p)d.set(A,p[A]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const C of p.keys())d.set(C,p.get(C));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(C=>C.toLowerCase()=="content-type"),A=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Ip,c,void 0)>=0)||p||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,j]of d)this.g.setRequestHeader(C,j);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(C){oc(this,C)}};function oc(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.o=5,ac(o),ui(o)}function ac(o){o.A||(o.A=!0,Y(o,"complete"),Y(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,Y(this,"complete"),Y(this,"abort"),ui(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ui(this,!0)),Ne.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?lc(this):this.Xa())},n.Xa=function(){lc(this)};function lc(o){if(o.h&&typeof i<"u"){if(o.v&&Tn(o)==4)setTimeout(o.Ca.bind(o),0);else if(Y(o,"readystatechange"),Tn(o)==4){o.h=!1;try{const C=o.ca();e:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var p;if(p=C===0){let j=String(o.D).match(Jl)[1]||null;!j&&a.self&&a.self.location&&(j=a.self.location.protocol.slice(0,-1)),p=!Tp.test(j?j.toLowerCase():"")}d=p}if(d)Y(o,"complete"),Y(o,"success");else{o.o=6;try{var A=Tn(o)>2?o.g.statusText:""}catch{A=""}o.l=A+" ["+o.ca()+"]",ac(o)}}finally{ui(o)}}}}function ui(o,c){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const d=o.g;o.g=null,c||Y(o,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Tn(o){return o.g?o.g.readyState:0}n.ca=function(){try{return Tn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),bn(c)}};function cc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Ap(o){const c={};o=(o.g&&Tn(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(m(o[p]))continue;var d=Do(o[p]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const C=c[A]||[];c[A]=C,C.push(d)}$e(c,function(p){return p.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function hs(o,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||c}function uc(o){this.za=0,this.i=[],this.j=new jt,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=hs("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=hs("baseRetryDelayMs",5e3,o),this.Za=hs("retryDelaySeedMs",1e4,o),this.Ta=hs("forwardChannelMaxRetries",2,o),this.va=hs("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Hl(o&&o.concurrentRequestLimit),this.Ba=new xp,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=uc.prototype,n.ka=8,n.I=1,n.connect=function(o,c,d,p){Ke(0),this.W=o,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.J=vc(this,null,this.W),di(this)};function Wo(o){if(hc(o),o.I==3){var c=o.V++,d=Bt(o.J);if(Re(d,"SID",o.M),Re(d,"RID",c),Re(d,"TYPE","terminate"),ds(o,d),c=new J(o,o.j,c),c.M=2,c.A=li(Bt(d)),d=!1,a.navigator&&a.navigator.sendBeacon)try{d=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!d&&a.Image&&(new Image().src=c.A,d=!0),d||(c.g=bc(c.j,null),c.g.ea(c.A)),c.F=Date.now(),ai(c)}yc(o)}function hi(o){o.g&&(Go(o),o.g.cancel(),o.g=null)}function hc(o){hi(o),o.v&&(a.clearTimeout(o.v),o.v=null),fi(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function di(o){if(!Gl(o.h)&&!o.m){o.m=!0;var c=o.Ea;W||_(),O||(W(),O=!0),E.add(c,o),o.D=0}}function Sp(o,c){return Kl(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=c.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=nn(h(o.Ea,o,c),_c(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const A=new J(this,this.j,o);let C=this.o;if(this.U&&(C?(C=He(C),Ct(C,this.U)):C=this.U),this.u!==null||this.R||(A.J=C,C=null),this.S)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,c>4096){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=fc(this,A,c),d=Bt(this.J),Re(d,"RID",o),Re(d,"CVER",22),this.G&&Re(d,"X-HTTP-Session-Id",this.G),ds(this,d),C&&(this.R?c="headers="+Jn(ic(C))+"&"+c:this.u&&zo(d,this.u,C)),jo(this.h,A),this.Ra&&Re(d,"TYPE","init"),this.S?(Re(d,"$req",c),Re(d,"SID","null"),A.U=!0,ns(A,d,null)):ns(A,d,c),this.I=2}}else this.I==3&&(o?dc(this,o):this.i.length==0||Gl(this.h)||dc(this))};function dc(o,c){var d;c?d=c.l:d=o.V++;const p=Bt(o.J);Re(p,"SID",o.M),Re(p,"RID",d),Re(p,"AID",o.K),ds(o,p),o.u&&o.o&&zo(p,o.u,o.o),d=new J(o,o.j,d,o.D+1),o.u===null&&(d.J=o.o),c&&(o.i=c.G.concat(o.i)),c=fc(o,d,1e3),d.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),jo(o.h,d),ns(d,p,c)}function ds(o,c){o.H&&ye(o.H,function(d,p){Re(c,p,d)}),o.l&&ye({},function(d,p){Re(c,p,d)})}function fc(o,c,d){d=Math.min(o.i.length,d);const p=o.l?h(o.l.Ka,o.l,o):null;e:{var A=o.i;let ue=-1;for(;;){const ze=["count="+d];ue==-1?d>0?(ue=A[0].g,ze.push("ofs="+ue)):ue=0:ze.push("ofs="+ue);let Te=!0;for(let Qe=0;Qe<d;Qe++){var C=A[Qe].g;const qt=A[Qe].map;if(C-=ue,C<0)ue=Math.max(0,A[Qe].g-100),Te=!1;else try{C="req"+C+"_"||"";try{var j=qt instanceof Map?qt:Object.entries(qt);for(const[tr,In]of j){let An=In;l(In)&&(An=Be(In)),ze.push(C+tr+"="+encodeURIComponent(An))}}catch(tr){throw ze.push(C+"type="+encodeURIComponent("_badmap")),tr}}catch{p&&p(qt)}}if(Te){j=ze.join("&");break e}}j=void 0}return o=o.i.splice(0,d),c.G=o,j}function pc(o){if(!o.g&&!o.v){o.Y=1;var c=o.Da;W||_(),O||(W(),O=!0),E.add(c,o),o.A=0}}function Ho(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=nn(h(o.Da,o),_c(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,mc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=nn(h(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ke(10),hi(this),mc(this))};function Go(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function mc(o){o.g=new J(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var c=Bt(o.na);Re(c,"RID","rpc"),Re(c,"SID",o.M),Re(c,"AID",o.K),Re(c,"CI",o.F?"0":"1"),!o.F&&o.ia&&Re(c,"TO",o.ia),Re(c,"TYPE","xmlhttp"),ds(o,c),o.u&&o.o&&zo(c,o.u,o.o),o.O&&(o.g.H=o.O);var d=o.g;o=o.ba,d.M=1,d.A=li(Bt(c)),d.u=null,d.R=!0,Oo(d,o)}n.Va=function(){this.C!=null&&(this.C=null,hi(this),Ho(this),Ke(19))};function fi(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function gc(o,c){var d=null;if(o.g==c){fi(o),Go(o),o.g=null;var p=2}else if(Uo(o.h,c))d=c.G,Ql(o.h,c),p=1;else return;if(o.I!=0){if(c.o)if(p==1){d=c.u?c.u.length:0,c=Date.now()-c.F;var A=o.D;p=Ut(),Y(p,new Zr(p,d)),di(o)}else pc(o);else if(A=c.m,A==3||A==0&&c.X>0||!(p==1&&Sp(o,c)||p==2&&Ho(o)))switch(d&&d.length>0&&(c=o.h,c.i=c.i.concat(d)),A){case 1:er(o,5);break;case 4:er(o,10);break;case 3:er(o,6);break;default:er(o,2)}}}function _c(o,c){let d=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(d*=2),d*c}function er(o,c){if(o.j.info("Error code "+c),c==2){var d=h(o.bb,o),p=o.Ua;const A=!p;p=new En(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||ss(p,"https"),li(p),A?wp(p.toString(),d):Ep(p.toString(),d)}else Ke(2);o.I=0,o.l&&o.l.pa(c),yc(o),hc(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Ke(2)):(this.j.info("Failed to ping google.com"),Ke(1))};function yc(o){if(o.I=0,o.ja=[],o.l){const c=Yl(o.h);(c.length!=0||o.i.length!=0)&&(S(o.ja,c),S(o.ja,o.i),o.h.i.length=0,y(o.i),o.i.length=0),o.l.oa()}}function vc(o,c,d){var p=d instanceof En?Bt(d):new En(d);if(p.g!="")c&&(p.g=c+"."+p.g),is(p,p.u);else{var A=a.location;p=A.protocol,c=c?c+"."+A.hostname:A.hostname,A=+A.port;const C=new En(null);p&&ss(C,p),c&&(C.g=c),A&&is(C,A),d&&(C.h=d),p=C}return d=o.G,c=o.wa,d&&c&&Re(p,d,c),Re(p,"VER",o.ka),ds(o,p),p}function bc(o,c,d){if(c&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Aa&&!o.ma?new Ne(new qo({ab:d})):new Ne(o.ma),c.Fa(o.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function wc(){}n=wc.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function pi(){}pi.prototype.g=function(o,c){return new bt(o,c)};function bt(o,c){z.call(this),this.g=new uc(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(o?o["X-WebChannel-Client-Profile"]=c.sa:o={"X-WebChannel-Client-Profile":c.sa}),this.g.U=o,(o=c&&c.Qb)&&!m(o)&&(this.g.u=o),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!m(c)&&(this.g.G=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Er(this)}g(bt,z),bt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},bt.prototype.close=function(){Wo(this.g)},bt.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.v&&(d={},d.__data__=Be(o),o=d);c.i.push(new fp(c.Ya++,o)),c.I==3&&di(c)},bt.prototype.N=function(){this.g.l=null,delete this.j,Wo(this.g),delete this.g,bt.Z.N.call(this)};function Ec(o){en.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const d in c){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}g(Ec,en);function xc(){Ce.call(this),this.status=1}g(xc,Ce);function Er(o){this.g=o}g(Er,wc),Er.prototype.ra=function(){Y(this.g,"a")},Er.prototype.qa=function(o){Y(this.g,new Ec(o))},Er.prototype.pa=function(o){Y(this.g,new xc)},Er.prototype.oa=function(){Y(this.g,"b")},pi.prototype.createWebChannel=pi.prototype.g,bt.prototype.send=bt.prototype.o,bt.prototype.open=bt.prototype.m,bt.prototype.close=bt.prototype.close,Pd=function(){return new pi},Rd=function(){return Ut()},Cd=vt,Ta={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Yn.NO_ERROR=0,Yn.TIMEOUT=8,Yn.HTTP_ERROR=6,Ci=Yn,ii.COMPLETE="complete",Sd=ii,br.EventType=Zt,Zt.OPEN="a",Zt.CLOSE="b",Zt.ERROR="c",Zt.MESSAGE="d",z.prototype.listen=z.prototype.J,gs=br,Ne.prototype.listenOnce=Ne.prototype.K,Ne.prototype.getLastError=Ne.prototype.Ha,Ne.prototype.getLastErrorCode=Ne.prototype.ya,Ne.prototype.getStatus=Ne.prototype.ca,Ne.prototype.getResponseJson=Ne.prototype.La,Ne.prototype.getResponseText=Ne.prototype.la,Ne.prototype.send=Ne.prototype.ea,Ne.prototype.setWithCredentials=Ne.prototype.Fa,Ad=Ne}).apply(typeof yi<"u"?yi:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gr="12.12.0";function Uv(n){Gr=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=new Za("@firebase/firestore");function Tr(){return fr.logLevel}function Q(n,...e){if(fr.logLevel<=de.DEBUG){const t=e.map(ul);fr.debug(`Firestore (${Gr}): ${n}`,...t)}}function pn(n,...e){if(fr.logLevel<=de.ERROR){const t=e.map(ul);fr.error(`Firestore (${Gr}): ${n}`,...t)}}function pr(n,...e){if(fr.logLevel<=de.WARN){const t=e.map(ul);fr.warn(`Firestore (${Gr}): ${n}`,...t)}}function ul(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,kd(n,r,t)}function kd(n,e,t){let r=`FIRESTORE (${Gr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw pn(r),new Error(r)}function we(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||kd(e,s,r)}function le(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends _n{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(it.UNAUTHENTICATED))}shutdown(){}}class Bv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class qv{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){we(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new un;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new un,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new un)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(we(typeof r.accessToken=="string",31837,{l:r}),new $d(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return we(e===null||typeof e=="string",2055,{h:e}),new it(e)}}class zv{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=it.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Wv{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new zv(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ou{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Hv{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Tt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){we(this.o===void 0,3512);const r=i=>{i.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,Q("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ou(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(we(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new ou(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gv(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Gv(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function fe(n,e){return n<e?-1:n>e?1:0}function Ia(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return oa(s)===oa(i)?fe(s,i):oa(s)?1:-1}return fe(n.length,e.length)}const Kv=55296,Qv=57343;function oa(n){const e=n.charCodeAt(0);return e>=Kv&&e<=Qv}function Mr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au="__name__";class Wt{constructor(e,t,r){t===void 0?t=0:t>e.length&&se(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&se(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Wt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Wt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Wt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return fe(e.length,t.length)}static compareSegments(e,t){const r=Wt.isNumericId(e),s=Wt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Wt.extractNumericId(e).compare(Wt.extractNumericId(t)):Ia(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return On.fromString(e.substring(4,e.length-2))}}class Se extends Wt{construct(e,t,r){return new Se(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new Se(t)}static emptyPath(){return new Se([])}}const Yv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends Wt{construct(e,t,r){return new tt(e,t,r)}static isValidIdentifier(e){return Yv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===au}static keyField(){return new tt([au])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new G(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new G(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new G(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new G(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(t)}static emptyPath(){return new tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(Se.fromString(e))}static fromName(e){return new ne(Se.fromString(e).popFirst(5))}static empty(){return new ne(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Se.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new Se(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(n,e,t){if(!t)throw new G(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Jv(n,e,t,r){if(e===!0&&r===!0)throw new G(V.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function lu(n){if(!ne.isDocumentKey(n))throw new G(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function cu(n){if(ne.isDocumentKey(n))throw new G(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Nd(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function fo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":se(12329,{type:typeof n})}function Ot(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new G(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=fo(n);throw new G(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(n,e){const t={typeString:n};return e&&(t.value=e),t}function Ys(n,e){if(!Nd(n))throw new G(V.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new G(V.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu=-62135596800,hu=1e6;class Pe{static now(){return Pe.fromMillis(Date.now())}static fromDate(e){return Pe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*hu);return new Pe(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new G(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new G(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<uu)throw new G(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/hu}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Pe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ys(e,Pe._jsonSchema))return new Pe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-uu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Pe._jsonSchemaVersion="firestore/timestamp/1.0",Pe._jsonSchema={type:je("string",Pe._jsonSchemaVersion),seconds:je("number"),nanoseconds:je("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{static fromTimestamp(e){return new oe(e)}static min(){return new oe(new Pe(0,0))}static max(){return new oe(new Pe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s=-1;function Xv(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=oe.fromTimestamp(r===1e9?new Pe(t+1,0):new Pe(t,r));return new Mn(s,ne.empty(),e)}function Zv(n){return new Mn(n.readTime,n.key,$s)}class Mn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Mn(oe.min(),ne.empty(),$s)}static max(){return new Mn(oe.max(),ne.empty(),$s)}}function eb(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ne.comparator(n.documentKey,e.documentKey),t!==0?t:fe(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class nb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kr(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==tb)throw n;Q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&se(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new D((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof D?t:D.resolve(t)}catch(t){return D.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):D.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):D.reject(t)}static resolve(e){return new D((t,r)=>{t(e)})}static reject(e){return new D((t,r)=>{r(e)})}static waitFor(e){return new D((t,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=D.resolve(!1);for(const r of e)t=t.next(s=>s?D.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new D((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;t(e[h]).next(f=>{a[h]=f,++l,l===i&&r(a)},f=>s(f))}})}static doWhile(e,t){return new D((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function rb(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Qr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}po.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl=-1;function mo(n){return n==null}function Ki(n){return n===0&&1/n==-1/0}function sb(n){return typeof n=="number"&&Number.isInteger(n)&&!Ki(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd="";function ib(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=du(e)),e=ob(n.get(t),e);return du(e)}function ob(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Dd:t+="";break;default:t+=i}}return t}function du(n){return n+Dd+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Gn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Od(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,t){this.comparator=e,this.root=t||et.EMPTY}insert(e,t){return new Ve(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new Ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vi(this.root,e,this.comparator,!1)}getReverseIterator(){return new vi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vi(this.root,e,this.comparator,!0)}}class vi{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??et.RED,this.left=s??et.EMPTY,this.right=i??et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new et(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return et.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw se(43730,{key:this.key,value:this.value});if(this.right.isRed())throw se(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw se(27949);return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw se(57766)}get value(){throw se(16141)}get color(){throw se(16727)}get left(){throw se(29726)}get right(){throw se(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new et(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.comparator=e,this.data=new Ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new pu(this.data.getIterator())}getIteratorFrom(e){return new pu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof We)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new We(this.comparator);return t.data=e,t}}class pu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new wt([])}unionWith(e){let t=new We(tt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new wt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Mr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Ld("Invalid base64 string: "+i):i}}(e);return new nt(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new nt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nt.EMPTY_BYTE_STRING=new nt("");const ab=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Fn(n){if(we(!!n,39018),typeof n=="string"){let e=0;const t=ab.exec(n);if(we(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Oe(n.seconds),nanos:Oe(n.nanos)}}function Oe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Un(n){return typeof n=="string"?nt.fromBase64String(n):nt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md="server_timestamp",Fd="__type__",Ud="__previous_value__",jd="__local_write_time__";function fl(n){return(n?.mapValue?.fields||{})[Fd]?.stringValue===Md}function go(n){const e=n.mapValue.fields[Ud];return fl(e)?go(e):e}function Vs(n){const e=Fn(n.mapValue.fields[jd].timestampValue);return new Pe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e,t,r,s,i,a,l,u,h,f,g){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=g}}const Qi="(default)";class Ns{constructor(e,t){this.projectId=e,this.database=t||Qi}static empty(){return new Ns("","")}get isDefaultDatabase(){return this.database===Qi}isEqual(e){return e instanceof Ns&&e.projectId===this.projectId&&e.database===this.database}}function cb(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new G(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ns(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd="__type__",ub="__max__",bi={mapValue:{}},qd="__vector__",Yi="value";function jn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?fl(n)?4:db(n)?9007199254740991:hb(n)?10:11:se(28295,{value:n})}function Jt(n,e){if(n===e)return!0;const t=jn(n);if(t!==jn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Vs(n).isEqual(Vs(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Fn(s.timestampValue),l=Fn(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Un(s.bytesValue).isEqual(Un(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return Oe(s.geoPointValue.latitude)===Oe(i.geoPointValue.latitude)&&Oe(s.geoPointValue.longitude)===Oe(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Oe(s.integerValue)===Oe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Oe(s.doubleValue),l=Oe(i.doubleValue);return a===l?Ki(a)===Ki(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return Mr(n.arrayValue.values||[],e.arrayValue.values||[],Jt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(fu(a)!==fu(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!Jt(a[u],l[u])))return!1;return!0}(n,e);default:return se(52216,{left:n})}}function Ds(n,e){return(n.values||[]).find(t=>Jt(t,e))!==void 0}function Fr(n,e){if(n===e)return 0;const t=jn(n),r=jn(e);if(t!==r)return fe(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return fe(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=Oe(i.integerValue||i.doubleValue),u=Oe(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return mu(n.timestampValue,e.timestampValue);case 4:return mu(Vs(n),Vs(e));case 5:return Ia(n.stringValue,e.stringValue);case 6:return function(i,a){const l=Un(i),u=Un(a);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),u=a.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=fe(l[h],u[h]);if(f!==0)return f}return fe(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=fe(Oe(i.latitude),Oe(a.latitude));return l!==0?l:fe(Oe(i.longitude),Oe(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return gu(n.arrayValue,e.arrayValue);case 10:return function(i,a){const l=i.fields||{},u=a.fields||{},h=l[Yi]?.arrayValue,f=u[Yi]?.arrayValue,g=fe(h?.values?.length||0,f?.values?.length||0);return g!==0?g:gu(h,f)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===bi.mapValue&&a===bi.mapValue)return 0;if(i===bi.mapValue)return 1;if(a===bi.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=a.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let g=0;g<u.length&&g<f.length;++g){const x=Ia(u[g],f[g]);if(x!==0)return x;const y=Fr(l[u[g]],h[f[g]]);if(y!==0)return y}return fe(u.length,f.length)}(n.mapValue,e.mapValue);default:throw se(23264,{he:t})}}function mu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return fe(n,e);const t=Fn(n),r=Fn(e),s=fe(t.seconds,r.seconds);return s!==0?s:fe(t.nanos,r.nanos)}function gu(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Fr(t[s],r[s]);if(i)return i}return fe(t.length,r.length)}function Ur(n){return Aa(n)}function Aa(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Fn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Un(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ne.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Aa(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Aa(t.fields[a])}`;return s+"}"}(n.mapValue):se(61005,{value:n})}function Ri(n){switch(jn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=go(n);return e?16+Ri(e):16;case 5:return 2*n.stringValue.length;case 6:return Un(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ri(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Gn(r.fields,(i,a)=>{s+=i.length+Ri(a)}),s}(n.mapValue);default:throw se(13486,{value:n})}}function _u(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Sa(n){return!!n&&"integerValue"in n}function pl(n){return!!n&&"arrayValue"in n}function yu(n){return!!n&&"nullValue"in n}function vu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Pi(n){return!!n&&"mapValue"in n}function hb(n){return(n?.mapValue?.fields||{})[Bd]?.stringValue===qd}function Es(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Gn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Es(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Es(n.arrayValue.values[t]);return e}return{...n}}function db(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===ub}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.value=e}static empty(){return new ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Pi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Es(t)}setAll(e){let t=tt.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=Es(a):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Pi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Jt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Pi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Gn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ft(Es(this.value))}}function zd(n){const e=[];return Gn(n.fields,(t,r)=>{const s=new tt([t]);if(Pi(r)){const i=zd(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new wt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new ot(e,0,oe.min(),oe.min(),oe.min(),ft.empty(),0)}static newFoundDocument(e,t,r,s){return new ot(e,1,t,oe.min(),r,s,0)}static newNoDocument(e,t){return new ot(e,2,t,oe.min(),oe.min(),ft.empty(),0)}static newUnknownDocument(e,t){return new ot(e,3,t,oe.min(),oe.min(),ft.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,t){this.position=e,this.inclusive=t}}function bu(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=ne.comparator(ne.fromName(a.referenceValue),t.key):r=Fr(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function wu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Jt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,t="asc"){this.field=e,this.dir=t}}function fb(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{}class Ue extends Wd{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new mb(e,t,r):t==="array-contains"?new yb(e,r):t==="in"?new vb(e,r):t==="not-in"?new bb(e,r):t==="array-contains-any"?new wb(e,r):new Ue(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new gb(e,r):new _b(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Fr(t,this.value)):t!==null&&jn(this.value)===jn(t)&&this.matchesComparison(Fr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return se(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Lt extends Wd{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Lt(e,t)}matches(e){return Hd(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Hd(n){return n.op==="and"}function Gd(n){return pb(n)&&Hd(n)}function pb(n){for(const e of n.filters)if(e instanceof Lt)return!1;return!0}function Ca(n){if(n instanceof Ue)return n.field.canonicalString()+n.op.toString()+Ur(n.value);if(Gd(n))return n.filters.map(e=>Ca(e)).join(",");{const e=n.filters.map(t=>Ca(t)).join(",");return`${n.op}(${e})`}}function Kd(n,e){return n instanceof Ue?function(r,s){return s instanceof Ue&&r.op===s.op&&r.field.isEqual(s.field)&&Jt(r.value,s.value)}(n,e):n instanceof Lt?function(r,s){return s instanceof Lt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Kd(a,s.filters[l]),!0):!1}(n,e):void se(19439)}function Qd(n){return n instanceof Ue?function(t){return`${t.field.canonicalString()} ${t.op} ${Ur(t.value)}`}(n):n instanceof Lt?function(t){return t.op.toString()+" {"+t.getFilters().map(Qd).join(" ,")+"}"}(n):"Filter"}class mb extends Ue{constructor(e,t,r){super(e,t,r),this.key=ne.fromName(r.referenceValue)}matches(e){const t=ne.comparator(e.key,this.key);return this.matchesComparison(t)}}class gb extends Ue{constructor(e,t){super(e,"in",t),this.keys=Yd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class _b extends Ue{constructor(e,t){super(e,"not-in",t),this.keys=Yd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Yd(n,e){return(e.arrayValue?.values||[]).map(t=>ne.fromName(t.referenceValue))}class yb extends Ue{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return pl(t)&&Ds(t.arrayValue,this.value)}}class vb extends Ue{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ds(this.value.arrayValue,t)}}class bb extends Ue{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ds(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ds(this.value.arrayValue,t)}}class wb extends Ue{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!pl(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ds(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Te=null}}function Eu(n,e=null,t=[],r=[],s=null,i=null,a=null){return new Eb(n,e,t,r,s,i,a)}function ml(n){const e=le(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Ca(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),mo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Ur(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Ur(r)).join(",")),e.Te=t}return e.Te}function gl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!fb(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Kd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!wu(n.startAt,e.startAt)&&wu(n.endAt,e.endAt)}function Ra(n){return ne.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=u,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function xb(n,e,t,r,s,i,a,l){return new Js(n,e,t,r,s,i,a,l)}function _l(n){return new Js(n)}function xu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Tb(n){return ne.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Jd(n){return n.collectionGroup!==null}function xs(n){const e=le(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new We(tt.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new Xi(i,r))}),t.has(tt.keyField().canonicalString())||e.Ee.push(new Xi(tt.keyField(),r))}return e.Ee}function Kt(n){const e=le(n);return e.Ie||(e.Ie=Ib(e,xs(n))),e.Ie}function Ib(n,e){if(n.limitType==="F")return Eu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Xi(s.field,i)});const t=n.endAt?new Ji(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ji(n.startAt.position,n.startAt.inclusive):null;return Eu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Pa(n,e){const t=n.filters.concat([e]);return new Js(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ka(n,e,t){return new Js(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function _o(n,e){return gl(Kt(n),Kt(e))&&n.limitType===e.limitType}function Xd(n){return`${ml(Kt(n))}|lt:${n.limitType}`}function Ir(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Qd(s)).join(", ")}]`),mo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Ur(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Ur(s)).join(",")),`Target(${r})`}(Kt(n))}; limitType=${n.limitType})`}function yo(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ne.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of xs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,u){const h=bu(a,l,u);return a.inclusive?h<=0:h<0}(r.startAt,xs(r),s)||r.endAt&&!function(a,l,u){const h=bu(a,l,u);return a.inclusive?h>=0:h>0}(r.endAt,xs(r),s))}(n,e)}function Ab(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Zd(n){return(e,t)=>{let r=!1;for(const s of xs(n)){const i=Sb(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Sb(n,e,t){const r=n.field.isKeyField()?ne.comparator(e.key,t.key):function(i,a,l){const u=a.data.field(i),h=l.data.field(i);return u!==null&&h!==null?Fr(u,h):se(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return se(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Gn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Od(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb=new Ve(ne.comparator);function mn(){return Cb}const ef=new Ve(ne.comparator);function _s(...n){let e=ef;for(const t of n)e=e.insert(t.key,t);return e}function tf(n){let e=ef;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function ir(){return Ts()}function nf(){return Ts()}function Ts(){return new gr(n=>n.toString(),(n,e)=>n.isEqual(e))}const Rb=new Ve(ne.comparator),Pb=new We(ne.comparator);function pe(...n){let e=Pb;for(const t of n)e=e.add(t);return e}const kb=new We(fe);function $b(){return kb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ki(e)?"-0":e}}function rf(n){return{integerValue:""+n}}function Vb(n,e){return sb(e)?rf(e):yl(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(){this._=void 0}}function Nb(n,e,t){return n instanceof Os?function(s,i){const a={fields:{[Fd]:{stringValue:Md},[jd]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&fl(i)&&(i=go(i)),i&&(a.fields[Ud]=i),{mapValue:a}}(t,e):n instanceof Ls?of(n,e):n instanceof Ms?af(n,e):function(s,i){const a=sf(s,i),l=Tu(a)+Tu(s.Ae);return Sa(a)&&Sa(s.Ae)?rf(l):yl(s.serializer,l)}(n,e)}function Db(n,e,t){return n instanceof Ls?of(n,e):n instanceof Ms?af(n,e):t}function sf(n,e){return n instanceof Zi?function(r){return Sa(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Os extends vo{}class Ls extends vo{constructor(e){super(),this.elements=e}}function of(n,e){const t=lf(e);for(const r of n.elements)t.some(s=>Jt(s,r))||t.push(r);return{arrayValue:{values:t}}}class Ms extends vo{constructor(e){super(),this.elements=e}}function af(n,e){let t=lf(e);for(const r of n.elements)t=t.filter(s=>!Jt(s,r));return{arrayValue:{values:t}}}class Zi extends vo{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Tu(n){return Oe(n.integerValue||n.doubleValue)}function lf(n){return pl(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e,t){this.field=e,this.transform=t}}function Lb(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Ls&&s instanceof Ls||r instanceof Ms&&s instanceof Ms?Mr(r.elements,s.elements,Jt):r instanceof Zi&&s instanceof Zi?Jt(r.Ae,s.Ae):r instanceof Os&&s instanceof Os}(n.transform,e.transform)}class Mb{constructor(e,t){this.version=e,this.transformResults=t}}class At{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new At}static exists(e){return new At(void 0,e)}static updateTime(e){return new At(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ki(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class bo{}function cf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new vl(n.key,At.none()):new Xs(n.key,n.data,At.none());{const t=n.data,r=ft.empty();let s=new We(tt.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Kn(n.key,r,new wt(s.toArray()),At.none())}}function Fb(n,e,t){n instanceof Xs?function(s,i,a){const l=s.value.clone(),u=Au(s.fieldTransforms,i,a.transformResults);l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Kn?function(s,i,a){if(!ki(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Au(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(uf(s)),u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Is(n,e,t,r){return n instanceof Xs?function(i,a,l,u){if(!ki(i.precondition,a))return l;const h=i.value.clone(),f=Su(i.fieldTransforms,u,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof Kn?function(i,a,l,u){if(!ki(i.precondition,a))return l;const h=Su(i.fieldTransforms,u,a),f=a.data;return f.setAll(uf(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(n,e,t,r):function(i,a,l){return ki(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function Ub(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=sf(r.transform,s||null);i!=null&&(t===null&&(t=ft.empty()),t.set(r.field,i))}return t||null}function Iu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Mr(r,s,(i,a)=>Lb(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Xs extends bo{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Kn extends bo{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function uf(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Au(n,e,t){const r=new Map;we(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,Db(a,l,t[s]))}return r}function Su(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,Nb(i,a,e))}return r}class vl extends bo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jb extends bo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Fb(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Is(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Is(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=nf();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const u=cf(a,l);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(oe.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),pe())}isEqual(e){return this.batchId===e.batchId&&Mr(this.mutations,e.mutations,(t,r)=>Iu(t,r))&&Mr(this.baseMutations,e.baseMutations,(t,r)=>Iu(t,r))}}class bl{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){we(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return Rb}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new bl(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fe,_e;function Wb(n){switch(n){case V.OK:return se(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return se(15467,{code:n})}}function hf(n){if(n===void 0)return pn("GRPC error has no .code"),V.UNKNOWN;switch(n){case Fe.OK:return V.OK;case Fe.CANCELLED:return V.CANCELLED;case Fe.UNKNOWN:return V.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return V.INTERNAL;case Fe.UNAVAILABLE:return V.UNAVAILABLE;case Fe.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Fe.NOT_FOUND:return V.NOT_FOUND;case Fe.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Fe.ABORTED:return V.ABORTED;case Fe.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Fe.DATA_LOSS:return V.DATA_LOSS;default:return se(39323,{code:n})}}(_e=Fe||(Fe={}))[_e.OK=0]="OK",_e[_e.CANCELLED=1]="CANCELLED",_e[_e.UNKNOWN=2]="UNKNOWN",_e[_e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_e[_e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_e[_e.NOT_FOUND=5]="NOT_FOUND",_e[_e.ALREADY_EXISTS=6]="ALREADY_EXISTS",_e[_e.PERMISSION_DENIED=7]="PERMISSION_DENIED",_e[_e.UNAUTHENTICATED=16]="UNAUTHENTICATED",_e[_e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_e[_e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_e[_e.ABORTED=10]="ABORTED",_e[_e.OUT_OF_RANGE=11]="OUT_OF_RANGE",_e[_e.UNIMPLEMENTED=12]="UNIMPLEMENTED",_e[_e.INTERNAL=13]="INTERNAL",_e[_e.UNAVAILABLE=14]="UNAVAILABLE",_e[_e.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hb(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb=new On([4294967295,4294967295],0);function Cu(n){const e=Hb().encode(n),t=new Id;return t.update(e),new Uint8Array(t.digest())}function Ru(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new On([t,r],0),new On([s,i],0)]}class wl{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ys(`Invalid padding: ${t}`);if(r<0)throw new ys(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ys(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ys(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=On.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(On.fromNumber(r)));return s.compare(Gb)===1&&(s=new On([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Cu(e),[r,s]=Ru(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new wl(i,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.ge===0)return;const t=Cu(e),[r,s]=Ru(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ys extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Zs.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new wo(oe.min(),s,new Ve(fe),mn(),pe())}}class Zs{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Zs(r,t,pe(),pe(),pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class df{constructor(e,t){this.targetId=e,this.Ce=t}}class ff{constructor(e,t,r=nt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Pu{constructor(){this.ve=0,this.Fe=ku(),this.Me=nt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=pe(),t=pe(),r=pe();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:se(38017,{changeType:i})}}),new Zs(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=ku()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,we(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Kb{constructor(e){this.Ge=e,this.ze=new Map,this.je=mn(),this.Je=wi(),this.He=wi(),this.Ze=new Ve(fe)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:se(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(Ra(i))if(r===0){const a=new ne(i.path);this.et(t,a,ot.newNoDocument(a,oe.min()))}else we(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const l=this.ut(e),u=l?this.ct(l,e,a):1;if(u!==0){this.it(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=Un(r).toUint8Array()}catch(u){if(u instanceof Ld)return pr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new wl(a,s,i)}catch(u){return pr(u instanceof ys?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(t,i,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((i,a)=>{const l=this.ot(a);if(l){if(i.current&&Ra(l.target)){const u=new ne(l.target.path);this.Et(u).has(a)||this.It(a,u)||this.et(a,u,ot.newNoDocument(u,e))}i.Be&&(t.set(a,i.ke()),i.qe())}});let r=pe();this.He.forEach((i,a)=>{let l=!0;a.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,a)=>a.setReadTime(e));const s=new wo(e,t,this.Ze,this.je,r);return this.je=mn(),this.Je=wi(),this.He=wi(),this.Ze=new Ve(fe),s}Ye(e,t){if(!this.rt(e))return;const r=this.It(e,t.key)?2:0;this.nt(e).Ke(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.It(e,t)?s.Ke(t,1):s.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Pu,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new We(fe),this.He=this.He.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new We(fe),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||Q("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Pu),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function wi(){return new Ve(ne.comparator)}function ku(){return new Ve(ne.comparator)}const Qb={asc:"ASCENDING",desc:"DESCENDING"},Yb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Jb={and:"AND",or:"OR"};class Xb{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function $a(n,e){return n.useProto3Json||mo(e)?e:{value:e}}function eo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function pf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Zb(n,e){return eo(n,e.toTimestamp())}function Qt(n){return we(!!n,49232),oe.fromTimestamp(function(t){const r=Fn(t);return new Pe(r.seconds,r.nanos)}(n))}function El(n,e){return Va(n,e).canonicalString()}function Va(n,e){const t=function(s){return new Se(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function mf(n){const e=Se.fromString(n);return we(bf(e),10190,{key:e.toString()}),e}function Na(n,e){return El(n.databaseId,e.path)}function aa(n,e){const t=mf(e);if(t.get(1)!==n.databaseId.projectId)throw new G(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new G(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ne(_f(t))}function gf(n,e){return El(n.databaseId,e)}function ew(n){const e=mf(n);return e.length===4?Se.emptyPath():_f(e)}function Da(n){return new Se(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function _f(n){return we(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function $u(n,e,t){return{name:Na(n,e),fields:t.value.mapValue.fields}}function tw(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:se(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(we(f===void 0||typeof f=="string",58123),nt.fromBase64String(f||"")):(we(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),nt.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const f=h.code===void 0?V.UNKNOWN:hf(h.code);return new G(f,h.message||"")}(a);t=new ff(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=aa(n,r.document.name),i=Qt(r.document.updateTime),a=r.document.createTime?Qt(r.document.createTime):oe.min(),l=new ft({mapValue:{fields:r.document.fields}}),u=ot.newFoundDocument(s,i,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];t=new $i(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=aa(n,r.document),i=r.readTime?Qt(r.readTime):oe.min(),a=ot.newNoDocument(s,i),l=r.removedTargetIds||[];t=new $i([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=aa(n,r.document),i=r.removedTargetIds||[];t=new $i([],i,s,null)}else{if(!("filter"in e))return se(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new zb(s,i),l=r.targetId;t=new df(l,a)}}return t}function nw(n,e){let t;if(e instanceof Xs)t={update:$u(n,e.key,e.value)};else if(e instanceof vl)t={delete:Na(n,e.key)};else if(e instanceof Kn)t={update:$u(n,e.key,e.data),updateMask:hw(e.fieldMask)};else{if(!(e instanceof jb))return se(16599,{dt:e.type});t={verify:Na(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof Os)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ls)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ms)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Zi)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw se(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Zb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:se(27497)}(n,e.precondition)),t}function rw(n,e){return n&&n.length>0?(we(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?Qt(s.updateTime):Qt(i);return a.isEqual(oe.min())&&(a=Qt(i)),new Mb(a,s.transformResults||[])}(t,e))):[]}function sw(n,e){return{documents:[gf(n,e.path)]}}function iw(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=gf(n,s);const i=function(h){if(h.length!==0)return vf(Lt.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(x){return{field:Ar(x.field),direction:lw(x.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=$a(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:t,parent:s}}function ow(n){let e=ew(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){we(r===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(g){const x=yf(g);return x instanceof Lt&&Gd(x)?x.getFilters():[x]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(x=>function(S){return new Xi(Sr(S.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(x))}(t.orderBy));let l=null;t.limit&&(l=function(g){let x;return x=typeof g=="object"?g.value:g,mo(x)?null:x}(t.limit));let u=null;t.startAt&&(u=function(g){const x=!!g.before,y=g.values||[];return new Ji(y,x)}(t.startAt));let h=null;return t.endAt&&(h=function(g){const x=!g.before,y=g.values||[];return new Ji(y,x)}(t.endAt)),xb(e,s,a,i,l,"F",u,h)}function aw(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return se(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function yf(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Sr(t.unaryFilter.field);return Ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Sr(t.unaryFilter.field);return Ue.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Sr(t.unaryFilter.field);return Ue.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Sr(t.unaryFilter.field);return Ue.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return se(61313);default:return se(60726)}}(n):n.fieldFilter!==void 0?function(t){return Ue.create(Sr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return se(58110);default:return se(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Lt.create(t.compositeFilter.filters.map(r=>yf(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return se(1026)}}(t.compositeFilter.op))}(n):se(30097,{filter:n})}function lw(n){return Qb[n]}function cw(n){return Yb[n]}function uw(n){return Jb[n]}function Ar(n){return{fieldPath:n.canonicalString()}}function Sr(n){return tt.fromServerFormat(n.fieldPath)}function vf(n){return n instanceof Ue?function(t){if(t.op==="=="){if(vu(t.value))return{unaryFilter:{field:Ar(t.field),op:"IS_NAN"}};if(yu(t.value))return{unaryFilter:{field:Ar(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(vu(t.value))return{unaryFilter:{field:Ar(t.field),op:"IS_NOT_NAN"}};if(yu(t.value))return{unaryFilter:{field:Ar(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ar(t.field),op:cw(t.op),value:t.value}}}(n):n instanceof Lt?function(t){const r=t.getFilters().map(s=>vf(s));return r.length===1?r[0]:{compositeFilter:{op:uw(t.op),filters:r}}}(n):se(54877,{filter:n})}function hw(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function bf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function wf(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,t,r,s,i=oe.min(),a=oe.min(),l=nt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new $n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e){this.yt=e}}function fw(n){const e=ow({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ka(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(){this.bn=new mw}addToCollectionParentIndex(e,t){return this.bn.add(t),D.resolve()}getCollectionParents(e,t){return D.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return D.resolve()}deleteFieldIndex(e,t){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,t){return D.resolve()}getDocumentsMatchingTarget(e,t){return D.resolve(null)}getIndexType(e,t){return D.resolve(0)}getFieldIndexes(e,t){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,t){return D.resolve(Mn.min())}getMinOffsetFromCollectionGroup(e,t){return D.resolve(Mn.min())}updateCollectionGroup(e,t,r){return D.resolve()}updateIndexEntries(e,t){return D.resolve()}}class mw{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new We(Se.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new We(Se.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ef=41943040;class dt{static withCacheSize(e){return new dt(e,dt.DEFAULT_COLLECTION_PERCENTILE,dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dt.DEFAULT_COLLECTION_PERCENTILE=10,dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,dt.DEFAULT=new dt(Ef,dt.DEFAULT_COLLECTION_PERCENTILE,dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),dt.DISABLED=new dt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new jr(0)}static ar(){return new jr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu="LruGarbageCollector",gw=1048576;function Du([n,e],[t,r]){const s=fe(n,t);return s===0?fe(e,r):s}class _w{constructor(e){this.Pr=e,this.buffer=new We(Du),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Du(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class yw{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){Q(Nu,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Qr(t)?Q(Nu,"Ignoring IndexedDB error during garbage collection: ",t):await Kr(t)}await this.Ar(3e5)})}}class vw{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return D.resolve(po.ce);const r=new _w(t);return this.Vr.forEachTarget(e,s=>r.Ir(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Ir(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(Q("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(Vu)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Vu):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let r,s,i,a,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(Q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(e,s))).next(g=>(r=g,l=Date.now(),this.removeTargets(e,r,t))).next(g=>(i=g,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(g=>(h=Date.now(),Tr()<=de.DEBUG&&Q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${g} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g})))}}function bw(n,e){return new vw(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(){this.changes=new gr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ot.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?D.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Is(r.mutation,s,wt.empty(),Pe.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,pe()).next(()=>r))}getLocalViewOfDocuments(e,t,r=pe()){const s=ir();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=_s();return i.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=ir();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,pe()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let i=mn();const a=Ts(),l=function(){return Ts()}();return t.forEach((u,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Kn)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Is(f.mutation,h,f.mutation.getFieldMask(),Pe.now())):a.set(h.key,wt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>l.set(h,new Ew(f,a.get(h)??null))),l))}recalculateAndSaveOverlays(e,t){const r=Ts();let s=new Ve((a,l)=>a-l),i=pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(u=>{const h=t.get(u);if(h===null)return;let f=r.get(u)||wt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const g=(s.get(l.batchId)||pe()).add(u);s=s.insert(l.batchId,g)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,g=nf();f.forEach(x=>{if(!i.has(x)){const y=cf(t.get(x),r.get(x));y!==null&&g.set(x,y),i=i.add(x)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,g))}return D.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return Tb(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Jd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):D.resolve(ir());let l=$s,u=i;return a.next(h=>D.forEach(h,(f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(f)?D.resolve():this.remoteDocumentCache.getEntry(e,f).next(x=>{u=u.insert(f,x)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,pe())).next(f=>({batchId:l,changes:tf(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ne(t)).next(r=>{let s=_s();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=_s();return this.indexManager.getCollectionParents(e,i).next(l=>D.forEach(l,u=>{const h=function(g,x){return new Js(x,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((g,x)=>{a=a.insert(g,x)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((u,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,ot.newInvalidDocument(f)))});let l=_s();return a.forEach((u,h)=>{const f=i.get(u);f!==void 0&&Is(f.mutation,h,wt.empty(),Pe.now()),yo(t,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return D.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Qt(s.createTime)}}(t)),D.resolve()}getNamedQuery(e,t){return D.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,function(s){return{name:s.name,query:fw(s.bundledQuery),readTime:Qt(s.readTime)}}(t)),D.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(){this.overlays=new Ve(ne.comparator),this.Lr=new Map}getOverlay(e,t){return D.resolve(this.overlays.get(t))}getOverlays(e,t){const r=ir();return D.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.St(e,t,i)}),D.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),D.resolve()}getOverlaysForCollection(e,t,r){const s=ir(),i=t.length+1,a=new ne(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return D.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Ve((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=ir(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=ir(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return D.resolve(l)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new qb(t,r));let i=this.Lr.get(t);i===void 0&&(i=pe(),this.Lr.set(t,i)),this.Lr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(){this.sessionToken=nt.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,D.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(){this.kr=new We(Ye.qr),this.Kr=new We(Ye.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const r=new Ye(e,t);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new Ye(e,t))}Qr(e,t){e.forEach(r=>this.removeReference(r,t))}Gr(e){const t=new ne(new Se([])),r=new Ye(t,e),s=new Ye(t,e+1),i=[];return this.Kr.forEachInRange([r,s],a=>{this.Wr(a),i.push(a.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new ne(new Se([])),r=new Ye(t,e),s=new Ye(t,e+1);let i=pe();return this.Kr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Ye(e,0),r=this.kr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return ne.comparator(e.key,t.key)||fe(e.Jr,t.Jr)}static Ur(e,t){return fe(e.Jr,t.Jr)||ne.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new We(Ye.qr)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Bb(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.Hr=this.Hr.add(new Ye(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return D.resolve(a)}lookupMutationBatch(e,t){return D.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return D.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?dl:this.Yn-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ye(t,0),s=new Ye(t,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([r,s],a=>{const l=this.Zr(a.Jr);i.push(l)}),D.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new We(fe);return t.forEach(s=>{const i=new Ye(s,0),a=new Ye(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,a],l=>{r=r.add(l.Jr)})}),D.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;ne.isDocumentKey(i)||(i=i.child(""));const a=new Ye(new ne(i),0);let l=new We(fe);return this.Hr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.Jr)),!0)},a),D.resolve(this.Yr(l))}Yr(e){const t=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){we(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return D.forEach(t.mutations,s=>{const i=new Ye(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,t){const r=new Ye(t,0),s=this.Hr.firstAfterOrEqual(r);return D.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e){this.ti=e,this.docs=function(){return new Ve(ne.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ti(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return D.resolve(r?r.document.mutableCopy():ot.newInvalidDocument(t))}getEntries(e,t){let r=mn();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ot.newInvalidDocument(s))}),D.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=mn();const a=t.path,l=new ne(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||eb(Zv(f),r)<=0||(s.has(f.key)||yo(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return D.resolve(i)}getAllFromCollectionGroup(e,t,r,s){se(9500)}ni(e,t){return D.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Rw(this)}getSize(e){return D.resolve(this.size)}}class Rw extends ww{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),D.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e){this.persistence=e,this.ri=new gr(t=>ml(t),gl),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.ii=0,this.si=new xl,this.targetCount=0,this.oi=jr._r()}forEachTarget(e,t){return this.ri.forEach((r,s)=>t(s)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ii&&(this.ii=t),D.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new jr(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,D.resolve()}updateTargetData(e,t){return this.lr(t),D.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ri.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.ri.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),D.waitFor(i).next(()=>s)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,t){const r=this.ri.get(t)||null;return D.resolve(r)}addMatchingKeys(e,t,r){return this.si.$r(t,r),D.resolve()}removeMatchingKeys(e,t,r){this.si.Qr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),D.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),D.resolve()}getMatchingKeysForTargetId(e,t){const r=this.si.jr(t);return D.resolve(r)}containsKey(e,t){return D.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e,t){this._i={},this.overlays={},this.ai=new po(0),this.ui=!1,this.ui=!0,this.ci=new Aw,this.referenceDelegate=e(this),this.li=new Pw(this),this.indexManager=new pw,this.remoteDocumentCache=function(s){return new Cw(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new dw(t),this.Pi=new Tw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Iw,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this._i[e.toKey()];return r||(r=new Sw(t,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,r){Q("MemoryPersistence","Starting transaction:",e);const s=new kw(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ei(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ii(e,t){return D.or(Object.values(this._i).map(r=>()=>r.containsKey(e,t)))}}class kw extends nb{constructor(e){super(),this.currentSequenceNumber=e}}class Tl{constructor(e){this.persistence=e,this.Ri=new xl,this.Ai=null}static Vi(e){return new Tl(e)}get di(){if(this.Ai)return this.Ai;throw se(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.di.delete(r.toString()),D.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.di.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),D.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.di,r=>{const s=ne.fromPath(r);return this.mi(e,s).next(i=>{i||t.removeEntry(s,oe.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return D.or([()=>D.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class to{constructor(e,t){this.persistence=e,this.fi=new gr(r=>ib(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=bw(this,t)}static Vi(e,t){return new to(e,t)}Ti(){}Ei(e){return D.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}pr(e){let t=0;return this.mr(e,r=>{t++}).next(()=>t)}mr(e,t){return D.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?D.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,a=>this.wr(e,a,t).next(l=>{l||(r++,i.removeEntry(a,oe.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),D.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),D.resolve()}removeReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),D.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),D.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ri(e.data.value)),t}wr(e,t,r){return D.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return D.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Ts=r,this.Es=s}static Is(e,t){let r=pe(),s=pe();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Il(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return sg()?8:rb(lt())>0?6:4}()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.gs(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ps(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new $w;return this.ys(e,t,a).next(l=>{if(i.result=l,this.As)return this.ws(e,t,a,l.size)})}).next(()=>i.result)}ws(e,t,r,s){return r.documentReadCount<this.Vs?(Tr()<=de.DEBUG&&Q("QueryEngine","SDK will not create cache indexes for query:",Ir(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),D.resolve()):(Tr()<=de.DEBUG&&Q("QueryEngine","Query:",Ir(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Tr()<=de.DEBUG&&Q("QueryEngine","The SDK decides to create cache indexes for query:",Ir(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Kt(t))):D.resolve())}gs(e,t){if(xu(t))return D.resolve(null);let r=Kt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=ka(t,null,"F"),r=Kt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=pe(...i);return this.fs.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ss(t,l);return this.bs(t,h,a,u.readTime)?this.gs(e,ka(t,null,"F")):this.Ds(e,h,t,u)}))})))}ps(e,t,r,s){return xu(t)||s.isEqual(oe.min())?D.resolve(null):this.fs.getDocuments(e,r).next(i=>{const a=this.Ss(t,i);return this.bs(t,a,r,s)?D.resolve(null):(Tr()<=de.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ir(t)),this.Ds(e,a,t,Xv(s,$s)).next(l=>l))})}Ss(e,t){let r=new We(Zd(e));return t.forEach((s,i)=>{yo(e,i)&&(r=r.add(i))}),r}bs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,t,r){return Tr()<=de.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",Ir(t)),this.fs.getDocumentsMatchingQuery(e,t,Mn.min(),r)}Ds(e,t,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al="LocalStore",Nw=3e8;class Dw{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new Ve(fe),this.Fs=new gr(i=>ml(i),gl),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new xw(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}}function Ow(n,e,t,r){return new Dw(n,e,t,r)}async function Tf(n,e){const t=le(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Os(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let u=pe();for(const h of s){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(h=>({Ns:h,removedBatchIds:a,addedBatchIds:l}))})})}function Lw(n,e){const t=le(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const g=h.batch,x=g.keys();let y=D.resolve();return x.forEach(S=>{y=y.next(()=>f.getEntry(u,S)).next(R=>{const P=h.docVersions.get(S);we(P!==null,48541),R.version.compareTo(P)<0&&(g.applyToRemoteDocument(R,h),R.isValidDocument()&&(R.setReadTime(h.commitVersion),f.addEntry(R)))})}),y.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=pe();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function If(n){const e=le(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.li.getLastRemoteSnapshotVersion(t))}function Mw(n,e){const t=le(n),r=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const l=[];e.targetChanges.forEach((f,g)=>{const x=s.get(g);if(!x)return;l.push(t.li.removeMatchingKeys(i,f.removedDocuments,g).next(()=>t.li.addMatchingKeys(i,f.addedDocuments,g)));let y=x.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?y=y.withResumeToken(nt.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):f.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(f.resumeToken,r)),s=s.insert(g,y),function(R,P,L){return R.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=Nw?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(x,y,f)&&l.push(t.li.updateTargetData(i,y))});let u=mn(),h=pe();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(Fw(i,a,e.documentUpdates).next(f=>{u=f.Bs,h=f.Ls})),!r.isEqual(oe.min())){const f=t.li.getLastRemoteSnapshotVersion(i).next(g=>t.li.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return D.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(t.vs=s,i))}function Fw(n,e,t){let r=pe(),s=pe();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=mn();return t.forEach((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(oe.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):Q(Al,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Bs:a,Ls:s}})}function Uw(n,e){const t=le(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=dl),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function jw(n,e){const t=le(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.li.getTargetData(r,e).next(i=>i?(s=i,D.resolve(s)):t.li.allocateTargetId(r).next(a=>(s=new $n(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(r.targetId,r),t.Fs.set(e,r.targetId)),r})}async function Oa(n,e,t){const r=le(n),s=r.vs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Qr(a))throw a;Q(Al,`Failed to update sequence numbers for target ${e}: ${a}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function Ou(n,e,t){const r=le(n);let s=oe.min(),i=pe();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,f){const g=le(u),x=g.Fs.get(f);return x!==void 0?D.resolve(g.vs.get(x)):g.li.getTargetData(h,f)}(r,a,Kt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(a,l.targetId).next(u=>{i=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(a,e,t?s:oe.min(),t?i:pe())).next(l=>(Bw(r,Ab(e),l),{documents:l,ks:i})))}function Bw(n,e,t){let r=n.Ms.get(e)||oe.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Ms.set(e,r)}class Lu{constructor(){this.activeTargetIds=$b()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class qw{constructor(){this.vo=new Lu,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,r){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Lu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu="ConnectivityMonitor";class Fu{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){Q(Mu,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){Q(Mu,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ei=null;function La(){return Ei===null?Ei=function(){return 268435456+Math.round(2147483648*Math.random())}():Ei++,"0x"+Ei.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la="RestConnection",Ww={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Hw{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Qi?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const a=La(),l=this.Qo(e,t.toUriEncodedString());Q(la,`Sending RPC '${e}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,i);const{host:h}=new URL(l),f=Ws(h);return this.zo(e,l,u,r,f).then(g=>(Q(la,`Received RPC '${e}' ${a}: `,g),g),g=>{throw pr(la,`RPC '${e}' ${a} failed with error: `,g,"url: ",l,"request:",r),g})}jo(e,t,r,s,i,a){return this.Wo(e,t,r,s,i)}Go(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Gr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,t){const r=Ww[e];let s=`${this.Ko}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st="WebChannelConnection",fs=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Vr extends Hw{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Vr.c_){const e=Rd();fs(e,Cd.STAT_EVENT,t=>{t.stat===Ta.PROXY?Q(st,"STAT_EVENT: detected buffering proxy"):t.stat===Ta.NOPROXY&&Q(st,"STAT_EVENT: detected no buffering proxy")}),Vr.c_=!0}}zo(e,t,r,s,i){const a=La();return new Promise((l,u)=>{const h=new Ad;h.setWithCredentials(!0),h.listenOnce(Sd.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Ci.NO_ERROR:const g=h.getResponseJson();Q(st,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),l(g);break;case Ci.TIMEOUT:Q(st,`RPC '${e}' ${a} timed out`),u(new G(V.DEADLINE_EXCEEDED,"Request time out"));break;case Ci.HTTP_ERROR:const x=h.getStatus();if(Q(st,`RPC '${e}' ${a} failed with status:`,x,"response text:",h.getResponseText()),x>0){let y=h.getResponseJson();Array.isArray(y)&&(y=y[0]);const S=y?.error;if(S&&S.status&&S.message){const R=function(L){const k=L.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(k)>=0?k:V.UNKNOWN}(S.status);u(new G(R,S.message))}else u(new G(V.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new G(V.UNAVAILABLE,"Connection failed."));break;default:se(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{Q(st,`RPC '${e}' ${a} completed.`)}});const f=JSON.stringify(s);Q(st,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",f,r,15)})}T_(e,t,r){const s=La(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const h=i.join("");Q(st,`Creating RPC '${e}' stream ${s}: ${h}`,l);const f=a.createWebChannel(h,l);this.E_(f);let g=!1,x=!1;const y=new Gw({Jo:S=>{x?Q(st,`Not sending because RPC '${e}' stream ${s} is closed:`,S):(g||(Q(st,`Opening RPC '${e}' stream ${s} transport.`),f.open(),g=!0),Q(st,`RPC '${e}' stream ${s} sending:`,S),f.send(S))},Ho:()=>f.close()});return fs(f,gs.EventType.OPEN,()=>{x||(Q(st,`RPC '${e}' stream ${s} transport opened.`),y.i_())}),fs(f,gs.EventType.CLOSE,()=>{x||(x=!0,Q(st,`RPC '${e}' stream ${s} transport closed`),y.o_(),this.I_(f))}),fs(f,gs.EventType.ERROR,S=>{x||(x=!0,pr(st,`RPC '${e}' stream ${s} transport errored. Name:`,S.name,"Message:",S.message),y.o_(new G(V.UNAVAILABLE,"The operation could not be completed")))}),fs(f,gs.EventType.MESSAGE,S=>{if(!x){const R=S.data[0];we(!!R,16349);const P=R,L=P?.error||P[0]?.error;if(L){Q(st,`RPC '${e}' stream ${s} received error:`,L);const k=L.status;let B=function(O){const E=Fe[O];if(E!==void 0)return hf(E)}(k),F=L.message;k==="NOT_FOUND"&&F.includes("database")&&F.includes("does not exist")&&F.includes(this.databaseId.database)&&pr(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),B===void 0&&(B=V.INTERNAL,F="Unknown error status: "+k+" with message "+L.message),x=!0,y.o_(new G(B,F)),f.close()}else Q(st,`RPC '${e}' stream ${s} received:`,R),y.__(R)}}),Vr.u_(),setTimeout(()=>{y.s_()},0),y}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,r){super.Go(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Pd()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kw(n){return new Vr(n)}function ca(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(n){return new Xb(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vr.c_=!1;class Af{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&Q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu="PersistentStream";class Sf{constructor(e,t,r,s,i,a,l,u){this.Ci=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Af(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(pn(t.toString()),pn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===t&&this.G_(r,s)},r=>{e(()=>{const s=new G(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,t){const r=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return Q(Uu,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(Q(Uu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Qw extends Sf{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=tw(this.serializer,e),r=function(i){if(!("targetChange"in i))return oe.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?oe.min():a.readTime?Qt(a.readTime):oe.min()}(e);return this.listener.H_(t,r)}Z_(e){const t={};t.database=Da(this.serializer),t.addTarget=function(i,a){let l;const u=a.target;if(l=Ra(u)?{documents:sw(i,u)}:{query:iw(i,u).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=pf(i,a.resumeToken);const h=$a(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(oe.min())>0){l.readTime=eo(i,a.snapshotVersion.toTimestamp());const h=$a(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=aw(this.serializer,e);r&&(t.labels=r),this.q_(t)}X_(e){const t={};t.database=Da(this.serializer),t.removeTarget=e,this.q_(t)}}class Yw extends Sf{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return we(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,we(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){we(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=rw(e.writeResults,e.commitTime),r=Qt(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=Da(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>nw(this.serializer,r))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{}class Xw extends Jw{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new G(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Wo(e,Va(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new G(V.UNKNOWN,i.toString())})}jo(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.jo(e,Va(t,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new G(V.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function Zw(n,e,t,r){return new Xw(n,e,t,r)}class eE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(pn(t),this.aa=!1):Q("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr="RemoteStore";class tE{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(a=>{r.enqueueAndForget(async()=>{_r(this)&&(Q(mr,"Restarting streams for network reachability change."),await async function(u){const h=le(u);h.Ia.add(4),await ei(h),h.Va.set("Unknown"),h.Ia.delete(4),await xo(h)}(this))})}),this.Va=new eE(r,s)}}async function xo(n){if(_r(n))for(const e of n.Ra)await e(!0)}async function ei(n){for(const e of n.Ra)await e(!1)}function Cf(n,e){const t=le(n);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),Pl(t)?Rl(t):Yr(t).O_()&&Cl(t,e))}function Sl(n,e){const t=le(n),r=Yr(t);t.Ea.delete(e),r.O_()&&Rf(t,e),t.Ea.size===0&&(r.O_()?r.L_():_r(t)&&t.Va.set("Unknown"))}function Cl(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(oe.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Yr(n).Z_(e)}function Rf(n,e){n.da.$e(e),Yr(n).X_(e)}function Rl(n){n.da=new Kb({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ea.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Yr(n).start(),n.Va.ua()}function Pl(n){return _r(n)&&!Yr(n).x_()&&n.Ea.size>0}function _r(n){return le(n).Ia.size===0}function Pf(n){n.da=void 0}async function nE(n){n.Va.set("Online")}async function rE(n){n.Ea.forEach((e,t)=>{Cl(n,e)})}async function sE(n,e){Pf(n),Pl(n)?(n.Va.ha(e),Rl(n)):n.Va.set("Unknown")}async function iE(n,e,t){if(n.Va.set("Online"),e instanceof ff&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.Ea.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ea.delete(l),s.da.removeTarget(l))}(n,e)}catch(r){Q(mr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await no(n,r)}else if(e instanceof $i?n.da.Xe(e):e instanceof df?n.da.st(e):n.da.tt(e),!t.isEqual(oe.min()))try{const r=await If(n.localStore);t.compareTo(r)>=0&&await function(i,a){const l=i.da.Tt(a);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ea.get(h);f&&i.Ea.set(h,f.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,h)=>{const f=i.Ea.get(u);if(!f)return;i.Ea.set(u,f.withResumeToken(nt.EMPTY_BYTE_STRING,f.snapshotVersion)),Rf(i,u);const g=new $n(f.target,u,h,f.sequenceNumber);Cl(i,g)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){Q(mr,"Failed to raise snapshot:",r),await no(n,r)}}async function no(n,e,t){if(!Qr(e))throw e;n.Ia.add(1),await ei(n),n.Va.set("Offline"),t||(t=()=>If(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{Q(mr,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await xo(n)})}function kf(n,e){return e().catch(t=>no(n,t,e))}async function To(n){const e=le(n),t=Bn(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:dl;for(;oE(e);)try{const s=await Uw(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,aE(e,s)}catch(s){await no(e,s)}$f(e)&&Vf(e)}function oE(n){return _r(n)&&n.Ta.length<10}function aE(n,e){n.Ta.push(e);const t=Bn(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function $f(n){return _r(n)&&!Bn(n).x_()&&n.Ta.length>0}function Vf(n){Bn(n).start()}async function lE(n){Bn(n).ra()}async function cE(n){const e=Bn(n);for(const t of n.Ta)e.ea(t.mutations)}async function uE(n,e,t){const r=n.Ta.shift(),s=bl.from(r,e,t);await kf(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await To(n)}async function hE(n,e){e&&Bn(n).Y_&&await async function(r,s){if(function(a){return Wb(a)&&a!==V.ABORTED}(s.code)){const i=r.Ta.shift();Bn(r).B_(),await kf(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await To(r)}}(n,e),$f(n)&&Vf(n)}async function ju(n,e){const t=le(n);t.asyncQueue.verifyOperationInProgress(),Q(mr,"RemoteStore received new credentials");const r=_r(t);t.Ia.add(3),await ei(t),r&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await xo(t)}async function dE(n,e){const t=le(n);e?(t.Ia.delete(2),await xo(t)):e||(t.Ia.add(2),await ei(t),t.Va.set("Unknown"))}function Yr(n){return n.ma||(n.ma=function(t,r,s){const i=le(t);return i.sa(),new Qw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:nE.bind(null,n),Yo:rE.bind(null,n),t_:sE.bind(null,n),H_:iE.bind(null,n)}),n.Ra.push(async e=>{e?(n.ma.B_(),Pl(n)?Rl(n):n.Va.set("Unknown")):(await n.ma.stop(),Pf(n))})),n.ma}function Bn(n){return n.fa||(n.fa=function(t,r,s){const i=le(t);return i.sa(),new Yw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:lE.bind(null,n),t_:hE.bind(null,n),ta:cE.bind(null,n),na:uE.bind(null,n)}),n.Ra.push(async e=>{e?(n.fa.B_(),await To(n)):(await n.fa.stop(),n.Ta.length>0&&(Q(mr,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new un,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new kl(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $l(n,e){if(pn("AsyncQueue",`${e}: ${n}`),Qr(n))return new G(V.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{static emptySet(e){return new Nr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ne.comparator(t.key,r.key):(t,r)=>ne.comparator(t.key,r.key),this.keyedMap=_s(),this.sortedSet=new Ve(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Nr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Nr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(){this.ga=new Ve(ne.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):se(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class Br{constructor(e,t,r,s,i,a,l,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new Br(e,t,Nr.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_o(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class pE{constructor(){this.queries=qu(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=le(t),i=s.queries;s.queries=qu(),i.forEach((a,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new G(V.ABORTED,"Firestore shutting down"))}}function qu(){return new gr(n=>Xd(n),_o)}async function Nf(n,e){const t=le(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new fE,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=$l(a,`Initialization of query '${Ir(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&Vl(t)}async function Df(n,e){const t=le(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function mE(n,e){const t=le(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.Sa)l.Fa(s)&&(r=!0);a.wa=s}}r&&Vl(t)}function gE(n,e,t){const r=le(n),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);r.queries.delete(e)}function Vl(n){n.Ca.forEach(e=>{e.next()})}var Ma,zu;(zu=Ma||(Ma={})).Ma="default",zu.Cache="cache";class Of{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Br(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Br.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Ma.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(e){this.key=e}}class Mf{constructor(e){this.key=e}}class _E{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=pe(),this.mutatedKeys=pe(),this.eu=Zd(e),this.tu=new Nr(this.eu)}get nu(){return this.Za}ru(e,t){const r=t?t.iu:new Bu,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,g)=>{const x=s.get(f),y=yo(this.query,g)?g:null,S=!!x&&this.mutatedKeys.has(x.key),R=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let P=!1;x&&y?x.data.isEqual(y.data)?S!==R&&(r.track({type:3,doc:y}),P=!0):this.su(x,y)||(r.track({type:2,doc:y}),P=!0,(u&&this.eu(y,u)>0||h&&this.eu(y,h)<0)&&(l=!0)):!x&&y?(r.track({type:0,doc:y}),P=!0):x&&!y&&(r.track({type:1,doc:x}),P=!0,(u||h)&&(l=!0)),P&&(y?(a=a.add(y),i=R?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:a,iu:r,bs:l,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((f,g)=>function(y,S){const R=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return se(20277,{Vt:P})}};return R(y)-R(S)}(f.type,g.type)||this.eu(f.doc,g.doc)),this.ou(r),s=s??!1;const l=t&&!s?this._u():[],u=this.Ya.size===0&&this.current&&!s?1:0,h=u!==this.Xa;return this.Xa=u,a.length!==0||h?{snapshot:new Br(this.query,e.tu,i,a,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Bu,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Za=this.Za.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Za=this.Za.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=pe(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const t=[];return e.forEach(r=>{this.Ya.has(r)||t.push(new Mf(r))}),this.Ya.forEach(r=>{e.has(r)||t.push(new Lf(r))}),t}cu(e){this.Za=e.ks,this.Ya=pe();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Br.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Nl="SyncEngine";class yE{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class vE{constructor(e){this.key=e,this.hu=!1}}class bE{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new gr(l=>Xd(l),_o),this.Eu=new Map,this.Iu=new Set,this.Ru=new Ve(ne.comparator),this.Au=new Map,this.Vu=new xl,this.du={},this.mu=new Map,this.fu=jr.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function wE(n,e,t=!0){const r=zf(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Ff(r,e,t,!0),s}async function EE(n,e){const t=zf(n);await Ff(t,e,!0,!1)}async function Ff(n,e,t,r){const s=await jw(n.localStore,Kt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await xE(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Cf(n.remoteStore,s),l}async function xE(n,e,t,r,s){n.pu=(g,x,y)=>async function(R,P,L,k){let B=P.view.ru(L);B.bs&&(B=await Ou(R.localStore,P.query,!1).then(({documents:E})=>P.view.ru(E,B)));const F=k&&k.targetChanges.get(P.targetId),W=k&&k.targetMismatches.get(P.targetId)!=null,O=P.view.applyChanges(B,R.isPrimaryClient,F,W);return Hu(R,P.targetId,O.au),O.snapshot}(n,g,x,y);const i=await Ou(n.localStore,e,!0),a=new _E(e,i.ks),l=a.ru(i.documents),u=Zs.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(l,n.isPrimaryClient,u);Hu(n,t,h.au);const f=new yE(e,t,a);return n.Tu.set(e,f),n.Eu.has(t)?n.Eu.get(t).push(e):n.Eu.set(t,[e]),h.snapshot}async function TE(n,e,t){const r=le(n),s=r.Tu.get(e),i=r.Eu.get(s.targetId);if(i.length>1)return r.Eu.set(s.targetId,i.filter(a=>!_o(a,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Oa(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Sl(r.remoteStore,s.targetId),Fa(r,s.targetId)}).catch(Kr)):(Fa(r,s.targetId),await Oa(r.localStore,s.targetId,!0))}async function IE(n,e){const t=le(n),r=t.Tu.get(e),s=t.Eu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Sl(t.remoteStore,r.targetId))}async function AE(n,e,t){const r=VE(n);try{const s=await function(a,l){const u=le(a),h=Pe.now(),f=l.reduce((y,S)=>y.add(S.key),pe());let g,x;return u.persistence.runTransaction("Locally write mutations","readwrite",y=>{let S=mn(),R=pe();return u.xs.getEntries(y,f).next(P=>{S=P,S.forEach((L,k)=>{k.isValidDocument()||(R=R.add(L))})}).next(()=>u.localDocuments.getOverlayedDocuments(y,S)).next(P=>{g=P;const L=[];for(const k of l){const B=Ub(k,g.get(k.key).overlayedDocument);B!=null&&L.push(new Kn(k.key,B,zd(B.value.mapValue),At.exists(!0)))}return u.mutationQueue.addMutationBatch(y,h,L,l)}).next(P=>{x=P;const L=P.applyToLocalDocumentSet(g,R);return u.documentOverlayCache.saveOverlays(y,P.batchId,L)})}).then(()=>({batchId:x.batchId,changes:tf(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,u){let h=a.du[a.currentUser.toKey()];h||(h=new Ve(fe)),h=h.insert(l,u),a.du[a.currentUser.toKey()]=h}(r,s.batchId,t),await ti(r,s.changes),await To(r.remoteStore)}catch(s){const i=$l(s,"Failed to persist write");t.reject(i)}}async function Uf(n,e){const t=le(n);try{const r=await Mw(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Au.get(i);a&&(we(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?we(a.hu,14607):s.removedDocuments.size>0&&(we(a.hu,42227),a.hu=!1))}),await ti(t,r,e)}catch(r){await Kr(r)}}function Wu(n,e,t){const r=le(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach((i,a)=>{const l=a.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const u=le(a);u.onlineState=l;let h=!1;u.queries.forEach((f,g)=>{for(const x of g.Sa)x.va(l)&&(h=!0)}),h&&Vl(u)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function SE(n,e,t){const r=le(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let a=new Ve(ne.comparator);a=a.insert(i,ot.newNoDocument(i,oe.min()));const l=pe().add(i),u=new wo(oe.min(),new Map,new Ve(fe),a,l);await Uf(r,u),r.Ru=r.Ru.remove(i),r.Au.delete(e),Dl(r)}else await Oa(r.localStore,e,!1).then(()=>Fa(r,e,t)).catch(Kr)}async function CE(n,e){const t=le(n),r=e.batch.batchId;try{const s=await Lw(t.localStore,e);Bf(t,r,null),jf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ti(t,s)}catch(s){await Kr(s)}}async function RE(n,e,t){const r=le(n);try{const s=await function(a,l){const u=le(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(g=>(we(g!==null,37113),f=g.keys(),u.mutationQueue.removeMutationBatch(h,g))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);Bf(r,e,t),jf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ti(r,s)}catch(s){await Kr(s)}}function jf(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function Bf(n,e,t){const r=le(n);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function Fa(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Eu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Eu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach(r=>{n.Vu.containsKey(r)||qf(n,r)})}function qf(n,e){n.Iu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(Sl(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),Dl(n))}function Hu(n,e,t){for(const r of t)r instanceof Lf?(n.Vu.addReference(r.key,e),PE(n,r)):r instanceof Mf?(Q(Nl,"Document no longer in limbo: "+r.key),n.Vu.removeReference(r.key,e),n.Vu.containsKey(r.key)||qf(n,r.key)):se(19791,{wu:r})}function PE(n,e){const t=e.key,r=t.path.canonicalString();n.Ru.get(t)||n.Iu.has(r)||(Q(Nl,"New document in limbo: "+t),n.Iu.add(r),Dl(n))}function Dl(n){for(;n.Iu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new ne(Se.fromString(e)),r=n.fu.next();n.Au.set(r,new vE(t)),n.Ru=n.Ru.insert(t,r),Cf(n.remoteStore,new $n(Kt(_l(t.path)),r,"TargetPurposeLimboResolution",po.ce))}}async function ti(n,e,t){const r=le(n),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{a.push(r.pu(u,e,t).then(h=>{if((h||t)&&r.isPrimaryClient){const f=h?!h.fromCache:t?.targetChanges.get(u.targetId)?.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(h){s.push(h);const f=Il.Is(u.targetId,h);i.push(f)}}))}),await Promise.all(a),r.Pu.H_(s),await async function(u,h){const f=le(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>D.forEach(h,x=>D.forEach(x.Ts,y=>f.persistence.referenceDelegate.addReference(g,x.targetId,y)).next(()=>D.forEach(x.Es,y=>f.persistence.referenceDelegate.removeReference(g,x.targetId,y)))))}catch(g){if(!Qr(g))throw g;Q(Al,"Failed to update sequence numbers: "+g)}for(const g of h){const x=g.targetId;if(!g.fromCache){const y=f.vs.get(x),S=y.snapshotVersion,R=y.withLastLimboFreeSnapshotVersion(S);f.vs=f.vs.insert(x,R)}}}(r.localStore,i))}async function kE(n,e){const t=le(n);if(!t.currentUser.isEqual(e)){Q(Nl,"User change. New user:",e.toKey());const r=await Tf(t.localStore,e);t.currentUser=e,function(i,a){i.mu.forEach(l=>{l.forEach(u=>{u.reject(new G(V.CANCELLED,a))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ti(t,r.Ns)}}function $E(n,e){const t=le(n),r=t.Au.get(e);if(r&&r.hu)return pe().add(r.key);{let s=pe();const i=t.Eu.get(e);if(!i)return s;for(const a of i){const l=t.Tu.get(a);s=s.unionWith(l.view.nu)}return s}}function zf(n){const e=le(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Uf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$E.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=SE.bind(null,e),e.Pu.H_=mE.bind(null,e.eventManager),e.Pu.yu=gE.bind(null,e.eventManager),e}function VE(n){const e=le(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=CE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=RE.bind(null,e),e}class ro{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Eo(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Ow(this.persistence,new Vw,e.initialUser,this.serializer)}Cu(e){return new xf(Tl.Vi,this.serializer)}Du(e){return new qw}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ro.provider={build:()=>new ro};class NE extends ro{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){we(this.persistence.referenceDelegate instanceof to,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new yw(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?dt.withCacheSize(this.cacheSizeBytes):dt.DEFAULT;return new xf(r=>to.Vi(r,t),this.serializer)}}class Ua{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Wu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=kE.bind(null,this.syncEngine),await dE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new pE}()}createDatastore(e){const t=Eo(e.databaseInfo.databaseId),r=Kw(e.databaseInfo);return Zw(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,l){return new tE(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Wu(this.syncEngine,t,0),function(){return Fu.v()?new Fu:new zw}())}createSyncEngine(e,t){return function(s,i,a,l,u,h,f){const g=new bE(s,i,a,l,u,h);return f&&(g.gu=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(t){const r=le(t);Q(mr,"RemoteStore shutting down."),r.Ia.add(5),await ei(r),r.Aa.shutdown(),r.Va.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Ua.provider={build:()=>new Ua};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):pn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn="FirestoreClient";class DE{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=it.UNAUTHENTICATED,this.clientId=hl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{Q(qn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(Q(qn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new un;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=$l(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ua(n,e){n.asyncQueue.verifyOperationInProgress(),Q(qn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Tf(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Gu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await OE(n);Q(qn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>ju(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>ju(e.remoteStore,s)),n._onlineComponents=e}async function OE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){Q(qn,"Using user provided OfflineComponentProvider");try{await ua(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;pr("Error using user provided cache. Falling back to memory cache: "+t),await ua(n,new ro)}}else Q(qn,"Using default OfflineComponentProvider"),await ua(n,new NE(void 0));return n._offlineComponents}async function Hf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(Q(qn,"Using user provided OnlineComponentProvider"),await Gu(n,n._uninitializedComponentsProvider._online)):(Q(qn,"Using default OnlineComponentProvider"),await Gu(n,new Ua))),n._onlineComponents}function LE(n){return Hf(n).then(e=>e.syncEngine)}async function Gf(n){const e=await Hf(n),t=e.eventManager;return t.onListen=wE.bind(null,e.syncEngine),t.onUnlisten=TE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=EE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=IE.bind(null,e.syncEngine),t}function ME(n,e,t={}){const r=new un;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,u,h){const f=new Wf({next:x=>{f.Nu(),a.enqueueAndForget(()=>Df(i,g));const y=x.docs.has(l);!y&&x.fromCache?h.reject(new G(V.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&x.fromCache&&u&&u.source==="server"?h.reject(new G(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(x)},error:x=>h.reject(x)}),g=new Of(_l(l.path),f,{includeMetadataChanges:!0,qa:!0});return Nf(i,g)}(await Gf(n),n.asyncQueue,e,t,r)),r.promise}function FE(n,e,t={}){const r=new un;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,u,h){const f=new Wf({next:x=>{f.Nu(),a.enqueueAndForget(()=>Df(i,g)),x.fromCache&&u.source==="server"?h.reject(new G(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(x)},error:x=>h.reject(x)}),g=new Of(l,f,{includeMetadataChanges:!0,qa:!0});return Nf(i,g)}(await Gf(n),n.asyncQueue,e,t,r)),r.promise}function UE(n,e){const t=new un;return n.asyncQueue.enqueueAndForget(async()=>AE(await LE(n),e,t)),t.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE="ComponentProvider",Ku=new Map;function BE(n,e,t,r,s){return new lb(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Kf(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf="firestore.googleapis.com",Qu=!0;class Yu{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new G(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Qf,this.ssl=Qu}else this.host=e.host,this.ssl=e.ssl??Qu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Ef;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<gw)throw new G(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Jv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Kf(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new G(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new G(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new G(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Io{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new jv;switch(r.type){case"firstParty":return new Wv(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Ku.get(t);r&&(Q(jE,"Removing Datastore"),Ku.delete(t),r.terminate())}(this),Promise.resolve()}}function qE(n,e,t,r={}){n=Ot(n,Io);const s=Ws(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;s&&Mh(`https://${l}`),i.host!==Qf&&i.host!==l&&pr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!cr(u,a)&&(n._setSettings(u),r.mockUserToken)){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=it.MOCK_USER;else{h=Jm(r.mockUserToken,n._app?.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new G(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new it(g)}n._authCredentials=new Bv(new $d(h,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Jr(this.firestore,e,this._query)}}class Me{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ln(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Me(this.firestore,e,this._key)}toJSON(){return{type:Me._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Ys(t,Me._jsonSchema))return new Me(e,r||null,new ne(Se.fromString(t.referencePath)))}}Me._jsonSchemaVersion="firestore/documentReference/1.0",Me._jsonSchema={type:je("string",Me._jsonSchemaVersion),referencePath:je("string")};class Ln extends Jr{constructor(e,t,r){super(e,t,_l(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Me(this.firestore,null,new ne(e))}withConverter(e){return new Ln(this.firestore,e,this._path)}}function qr(n,e,...t){if(n=Xe(n),Vd("collection","path",e),n instanceof Io){const r=Se.fromString(e,...t);return cu(r),new Ln(n,null,r)}{if(!(n instanceof Me||n instanceof Ln))throw new G(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Se.fromString(e,...t));return cu(r),new Ln(n.firestore,null,r)}}function hn(n,e,...t){if(n=Xe(n),arguments.length===1&&(e=hl.newId()),Vd("doc","path",e),n instanceof Io){const r=Se.fromString(e,...t);return lu(r),new Me(n,null,new ne(r))}{if(!(n instanceof Me||n instanceof Ln))throw new G(V.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Se.fromString(e,...t));return lu(r),new Me(n.firestore,n instanceof Ln?n.converter:null,new ne(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju="AsyncQueue";class Xu{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Af(this,"async_queue_retry"),this._c=()=>{const r=ca();r&&Q(Ju,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=ca();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=ca();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new un;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Qr(e))throw e;Q(Ju,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,pn("INTERNAL UNHANDLED ERROR: ",Zu(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=kl.createAndSchedule(this,e,t,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&se(47125,{Pc:Zu(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Zu(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class yr extends Io{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Xu,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Xu(e),this._firestoreClient=void 0,await e}}}function zE(n,e){const t=typeof n=="object"?n:Bh(),r=typeof n=="string"?n:Qi,s=tl(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Qm("firestore");i&&qE(s,...i)}return s}function Ol(n){if(n._terminated)throw new G(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||WE(n),n._firestoreClient}function WE(n){const e=n._freezeSettings(),t=BE(n._databaseId,n._app?.options.appId||"",n._persistenceKey,n._app?.options.apiKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new DE(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this._byteString=e}static fromBase64String(e){try{return new It(nt.fromBase64String(e))}catch(t){throw new G(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new It(nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:It._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ys(e,It._jsonSchema))return It.fromBase64String(e.bytes)}}It._jsonSchemaVersion="firestore/bytes/1.0",It._jsonSchema={type:je("string",It._jsonSchemaVersion),bytes:je("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new G(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new G(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new G(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Yt._jsonSchemaVersion}}static fromJSON(e){if(Ys(e,Yt._jsonSchema))return new Yt(e.latitude,e.longitude)}}Yt._jsonSchemaVersion="firestore/geoPoint/1.0",Yt._jsonSchema={type:je("string",Yt._jsonSchemaVersion),latitude:je("number"),longitude:je("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Nt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ys(e,Nt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Nt(e.vectorValues);throw new G(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Nt._jsonSchemaVersion="firestore/vectorValue/1.0",Nt._jsonSchema={type:je("string",Nt._jsonSchemaVersion),vectorValues:je("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE=/^__.*__$/;class GE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Kn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Xs(e,this.data,t,this.fieldTransforms)}}class Yf{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Kn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Jf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw se(40011,{dataSource:n})}}class Ml{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Ml({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){const t=this.path?.child(e),r=this.i({path:t,arrayElement:!1});return r.mc(e),r}fc(e){const t=this.path?.child(e),r=this.i({path:t,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return so(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(Jf(this.dataSource)&&HE.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class KE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Eo(e)}I(e,t,r,s=!1){return new Ml({dataSource:e,methodName:t,targetDoc:r,path:tt.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function So(n){const e=n._freezeSettings(),t=Eo(n._databaseId);return new KE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Xf(n,e,t,r,s,i={}){const a=n.I(i.merge||i.mergeFields?2:0,e,t,s);Ul("Data must be an object, but it was:",a,r);const l=Zf(r,a);let u,h;if(i.merge)u=new wt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const g of i.mergeFields){const x=zr(e,g,t);if(!a.contains(x))throw new G(V.INVALID_ARGUMENT,`Field '${x}' is specified in your field mask but missing from your input data.`);np(f,x)||f.push(x)}u=new wt(f),h=a.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,h=a.fieldTransforms;return new GE(new ft(l),u,h)}class Co extends Ao{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Co}}class Fl extends Ao{_toFieldTransform(e){return new Ob(e.path,new Os)}isEqual(e){return e instanceof Fl}}function QE(n,e,t,r){const s=n.I(1,e,t);Ul("Data must be an object, but it was:",s,r);const i=[],a=ft.empty();Gn(r,(u,h)=>{const f=tp(e,u,t);h=Xe(h);const g=s.fc(f);if(h instanceof Co)i.push(f);else{const x=ni(h,g);x!=null&&(i.push(f),a.set(f,x))}});const l=new wt(i);return new Yf(a,l,s.fieldTransforms)}function YE(n,e,t,r,s,i){const a=n.I(1,e,t),l=[zr(e,r,t)],u=[s];if(i.length%2!=0)throw new G(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let x=0;x<i.length;x+=2)l.push(zr(e,i[x])),u.push(i[x+1]);const h=[],f=ft.empty();for(let x=l.length-1;x>=0;--x)if(!np(h,l[x])){const y=l[x];let S=u[x];S=Xe(S);const R=a.fc(y);if(S instanceof Co)h.push(y);else{const P=ni(S,R);P!=null&&(h.push(y),f.set(y,P))}}const g=new wt(h);return new Yf(f,g,a.fieldTransforms)}function JE(n,e,t,r=!1){return ni(t,n.I(r?4:3,e))}function ni(n,e){if(ep(n=Xe(n)))return Ul("Unsupported field value:",e,n),Zf(n,e);if(n instanceof Ao)return function(r,s){if(!Jf(s.dataSource))throw s.yc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.yc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let u=ni(l,s.gc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Xe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Vb(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Pe.fromDate(r);return{timestampValue:eo(s.serializer,i)}}if(r instanceof Pe){const i=new Pe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:eo(s.serializer,i)}}if(r instanceof Yt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof It)return{bytesValue:pf(s.serializer,r._byteString)};if(r instanceof Me){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.yc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:El(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Nt)return function(a,l){const u=a instanceof Nt?a.toArray():a;return{mapValue:{fields:{[Bd]:{stringValue:qd},[Yi]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.yc("VectorValues must only contain numeric values.");return yl(l.serializer,f)})}}}}}}(r,s);if(wf(r))return r._toProto(s.serializer);throw s.yc(`Unsupported field value: ${fo(r)}`)}(n,e)}function Zf(n,e){const t={};return Od(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gn(n,(r,s)=>{const i=ni(s,e.dc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function ep(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Pe||n instanceof Yt||n instanceof It||n instanceof Me||n instanceof Ao||n instanceof Nt||wf(n))}function Ul(n,e,t){if(!ep(t)||!Nd(t)){const r=fo(t);throw r==="an object"?e.yc(n+" a custom object"):e.yc(n+" "+r)}}function zr(n,e,t){if((e=Xe(e))instanceof Ll)return e._internalPath;if(typeof e=="string")return tp(n,e);throw so("Field path arguments must be of type string or ",n,!1,void 0,t)}const XE=new RegExp("[~\\*/\\[\\]]");function tp(n,e,t){if(e.search(XE)>=0)throw so(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ll(...e.split("."))._internalPath}catch{throw so(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function so(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new G(V.INVALID_ARGUMENT,l+n+u)}function np(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{convertValue(e,t="none"){switch(jn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Un(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw se(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Gn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){const t=e.fields?.[Yi].arrayValue?.values?.map(r=>Oe(r.doubleValue));return new Nt(t)}convertGeoPoint(e){return new Yt(Oe(e.latitude),Oe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=go(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Vs(e));default:return null}}convertTimestamp(e){const t=Fn(e);return new Pe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Se.fromString(e);we(bf(r),9688,{name:e});const s=new Ns(r.get(1),r.get(3)),i=new ne(r.popFirst(5));return s.isEqual(t)||pn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp extends ZE{constructor(e){super(),this.firestore=e}convertBytes(e){return new It(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Me(this.firestore,null,t)}}function As(){return new Fl("serverTimestamp")}const eh="@firebase/firestore",th="4.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ex(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const t=this._document.data.field(zr("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class ex extends sp{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tx(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new G(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class jl{}class nx extends jl{}function nh(n,e,...t){let r=[];e instanceof jl&&r.push(e),r=r.concat(t),function(i){const a=i.filter(u=>u instanceof Bl).length,l=i.filter(u=>u instanceof Ro).length;if(a>1||a>0&&l>0)throw new G(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Ro extends nx{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Ro(e,t,r)}_apply(e){const t=this._parse(e);return ip(e._query,t),new Jr(e.firestore,e.converter,Pa(e._query,t))}_parse(e){const t=So(e.firestore);return function(i,a,l,u,h,f,g){let x;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new G(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){sh(g,f);const S=[];for(const R of g)S.push(rh(u,i,R));x={arrayValue:{values:S}}}else x=rh(u,i,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||sh(g,f),x=JE(l,a,g,f==="in"||f==="not-in");return Ue.create(h,f,x)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function rx(n,e,t){const r=e,s=zr("where",n);return Ro._create(s,r,t)}class Bl extends jl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Bl(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Lt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const l=i.getFlattenedFilters();for(const u of l)ip(a,u),a=Pa(a,u)}(e._query,t),new Jr(e.firestore,e.converter,Pa(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function rh(n,e,t){if(typeof(t=Xe(t))=="string"){if(t==="")throw new G(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Jd(e)&&t.indexOf("/")!==-1)throw new G(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Se.fromString(t));if(!ne.isDocumentKey(r))throw new G(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return _u(n,new ne(r))}if(t instanceof Me)return _u(n,t._key);throw new G(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${fo(t)}.`)}function sh(n,e){if(!Array.isArray(n)||n.length===0)throw new G(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ip(n,e){const t=function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new G(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new G(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function op(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class vs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ar extends sp{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Vi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(zr("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new G(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ar._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ar._jsonSchemaVersion="firestore/documentSnapshot/1.0",ar._jsonSchema={type:je("string",ar._jsonSchemaVersion),bundleSource:je("string","DocumentSnapshot"),bundleName:je("string"),bundle:je("string")};class Vi extends ar{data(e={}){return super.data(e)}}class Dr{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new vs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Vi(this._firestore,this._userDataWriter,r.key,r,new vs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new G(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const u=new Vi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new vs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Vi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new vs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:sx(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new G(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Dr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=hl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function sx(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return se(61501,{type:n})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dr._jsonSchemaVersion="firestore/querySnapshot/1.0",Dr._jsonSchema={type:je("string",Dr._jsonSchemaVersion),bundleSource:je("string","QuerySnapshot"),bundleName:je("string"),bundle:je("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ap(n){n=Ot(n,Me);const e=Ot(n.firestore,yr),t=Ol(e);return ME(t,n._key).then(r=>ax(e,n,r))}function lp(n){n=Ot(n,Jr);const e=Ot(n.firestore,yr),t=Ol(e),r=new rp(e);return tx(n._query),FE(t,n._query).then(s=>new Dr(e,r,n,s))}function ix(n,e,t){n=Ot(n,Me);const r=Ot(n.firestore,yr),s=op(n.converter,e),i=So(r);return Po(r,[Xf(i,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,At.none())])}function io(n,e,t,...r){n=Ot(n,Me);const s=Ot(n.firestore,yr),i=So(s);let a;return a=typeof(e=Xe(e))=="string"||e instanceof Ll?YE(i,"updateDoc",n._key,e,t,r):QE(i,"updateDoc",n._key,e),Po(s,[a.toMutation(n._key,At.exists(!0))])}function ox(n){return Po(Ot(n.firestore,yr),[new vl(n._key,At.none())])}function ja(n,e){const t=Ot(n.firestore,yr),r=hn(n),s=op(n.converter,e),i=So(n.firestore);return Po(t,[Xf(i,"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,At.exists(!1))]).then(()=>r)}function Po(n,e){const t=Ol(n);return UE(t,e)}function ax(n,e,t){const r=t.docs.get(e._key),s=new rp(n);return new ar(n,s,e._key,r,new vs(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){Uv(Wr),Lr(new ur("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new yr(new qv(r.getProvider("auth-internal")),new Hv(a,r.getProvider("app-check-internal")),cb(a,s),a);return i={useFetchStreams:t,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Dn(eh,th,e),Dn(eh,th,"esm2020")})();var lx="firebase",cx="12.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dn(lx,cx,"app");const ux={apiKey:"AIzaSyDkR00qL4A-yMP5Ehta3RYowC2d-vR8I78",authDomain:"aurumvault-def8b.firebaseapp.com",projectId:"aurumvault-def8b",storageBucket:"aurumvault-def8b.firebasestorage.app",messagingSenderId:"646887449279",appId:"1:646887449279:web:12705de1dc6aa9df5a9c0a"},cp=jh(ux),ri=Mv(cp),pt=zE(cp),[Or,ih]=X(!1),[ut,Ba]=X(null),[si,oh]=X(!1),[qI,hx]=X(!0);Ay(ri,async n=>{if(n){const e=await ap(hn(pt,"users",n.uid)),t=e.exists()?e.data():{};Ba({uid:n.uid,email:n.email,name:t.name||n.email,role:t.role||"user"}),ih(!0),oh(t.role==="admin")}else Ba(null),ih(!1),oh(!1);hx(!1)});async function dx(n,e,t){const s=(await Ey(ri,e,t)).user;return await ix(hn(pt,"users",s.uid),{name:n,email:e,role:"user",address:"",createdAt:As()}),s}async function fx(n,e){return(await xy(ri,n,e)).user}async function oo(){await Sy(ri)}async function px(n){await wy(ri,n)}async function mx(n){const e=ut();e&&(await io(hn(pt,"users",e.uid),n),Ba({...e,...n}))}const[zI,gx]=X(!1),_x="aurum2025",[lr,yx]=X([]),[ah,lh]=X(!1);async function Rr(){lh(!0);try{const e=(await lp(qr(pt,"products"))).docs.map(t=>({id:t.id,...t.data()}));yx(e)}catch(n){console.error("Greška pri dohvaćanju proizvoda:",n)}lh(!1)}const vx=["All","Rings","Necklaces","Watches","Accessories","Art Objects"],[sn,ko]=X([]);function up(n,e=1){ko(t=>t.find(s=>s.id===n.id)?t.map(s=>s.id===n.id?{...s,quantity:s.quantity+e}:s):[...t,{...n,quantity:e}])}function hp(n){ko(e=>e.filter(t=>t.id!==n))}function ch(n,e){if(e<=0){hp(n);return}ko(t=>t.map(r=>r.id===n?{...r,quantity:e}:r))}function bx(){ko([])}function nr(){return sn().reduce((n,e)=>n+e.price*e.quantity,0)}function uh(){return sn().reduce((n,e)=>n+e.quantity,0)}const[qa,wx]=X([]);async function za(){try{const n=ut();let e;if(si())e=nh(qr(pt,"orders"));else if(n)e=nh(qr(pt,"orders"),rx("userId","==",n.uid));else return;const r=(await lp(e)).docs.map(s=>({id:s.id,...s.data()}));wx(r)}catch(n){console.error("Greška pri dohvaćanju narudžbi:",n)}}async function Ex(n){const e=ut(),t={...n,userId:e?.uid||null,status:"Processing",createdAt:As()};return(await ja(qr(pt,"orders"),t)).id}async function xx(n){if(!Or())throw new Error("Kuponi su dostupni samo prijavljenim korisnicima.");const e=await ap(hn(pt,"coupons",n));if(!e.exists())throw new Error("Nevažeći kupon kod.");const t=e.data();if(!t.active)throw new Error("Ovaj kupon više nije aktivan.");return t}var Tx=$(`<div class="min-h-screen bg-aurum-black flex flex-col"><div class="flex items-center justify-between px-6 py-4 border-b border-aurum-border"><div class="flex items-center gap-2"><div class="w-8 h-8 bg-aurum-gold rounded-full flex items-center justify-center"><span class="text-aurum-black font-display font-black text-sm">A</span></div><span class="font-display font-bold text-aurum-gold tracking-widest text-lg gold-glow">AurumVault</span></div><div class="flex items-center gap-6 text-xs text-aurum-muted"><span class="flex items-center gap-2">Accessibility<span class="w-8 h-4 bg-aurum-gold rounded-full inline-block"></span></span><span class="hidden sm:block">High Contrast</span><span class="hidden sm:block">Larger Text</span></div></div><div class="flex-1 flex items-center justify-center px-4 py-12"><div class="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-8 items-center page-enter"><div class="hidden lg:block"><div class="relative rounded-xl overflow-hidden aspect-square"><img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500"alt=Vault class="w-full h-full object-cover"><div class="absolute inset-0 bg-gradient-to-t from-aurum-black via-transparent to-transparent pointer-events-none"></div></div></div><div class="gold-border-anim bg-aurum-card rounded-2xl p-8"><div class="text-center mb-8"><span class="badge-exclusive mb-3 inline-block">Exclusive</span><h1 class="font-display text-2xl font-bold text-white leading-tight mt-2">Exclusive access —<br>enter passcode</h1><p class="text-aurum-muted text-sm mt-3 leading-relaxed">This site is restricted to approved members. Enter the site-wide passcode to continue to AurumVault's private catalog.</p></div><form><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-2">Site passcode</label><input type=password placeholder="Enter passcode"><button type=submit class="btn-gold w-full py-3 rounded-lg text-sm mt-2"></button></form><p class="text-center text-aurum-muted text-xs mt-4">🔒 This passcode protects all AurumVault catalog pages.</p><p class="text-center mt-3 text-xs text-aurum-muted">Demo passcode: <span class="text-aurum-gold font-mono">aurum2025</span></p></div><div class="flex flex-col gap-4"><div class="card-dark p-4"><h3 class="text-aurum-gold text-sm font-bold font-display tracking-wider mb-2">Access Terms</h3><p class="text-aurum-muted text-xs leading-relaxed">Members only. By entering you confirm you are authorized to view AurumVault content and agree to our confidentiality terms.</p></div><div class="card-dark p-4"><h3 class="text-aurum-gold text-sm font-bold font-display tracking-wider mb-2">Last Updated</h3><p class="text-aurum-muted text-xs leading-relaxed">March 3, 2025 — Passcode rotation performed by security team.</p></div><div class="card-dark p-4"><h3 class="text-aurum-gold text-sm font-bold font-display tracking-wider mb-2">Support Hours</h3><p class="text-aurum-muted text-xs leading-relaxed">Mon–Fri 09:00–18:00 GMT. For urgent access issues email <a href=mailto:support@aurumvault.com class="text-aurum-gold hover:underline">support@aurumvault.com</a> or use the assistant link.</p></div></div></div></div><div class="border-t border-aurum-border px-6 py-4 flex justify-between items-center text-xs text-aurum-muted"><span>© 2025 AurumVault. All rights reserved.</span><span>Contact: <a href=mailto:contact@aurumvault.com class="text-aurum-gold hover:underline">contact@aurumvault.com`),Ix=$('<div class="flex items-center justify-between mb-4"><p class="text-red-400 text-xs flex items-center gap-1"><span>⚠</span> Passcode incorrect. Please try again.</p><a href=# class="text-aurum-gold text-xs hover:underline">Need help? Contact support');function Ax(){const n=gn(),[e,t]=X(""),[r,s]=X(!1),[i,a]=X(!1);async function l(u){u.preventDefault(),a(!0),s(!1),await new Promise(h=>setTimeout(h,800)),e()===_x?(gx(!0),n("/catalog")):s(!0),a(!1)}return(()=>{var u=Tx(),h=u.firstChild,f=h.nextSibling,g=f.firstChild,x=g.firstChild,y=x.nextSibling,S=y.firstChild,R=S.nextSibling,P=R.firstChild,L=P.nextSibling,k=L.nextSibling;return R.addEventListener("submit",l),L.$$input=B=>{t(B.target.value),s(!1)},w(R,(()=>{var B=Le(()=>!!r());return()=>B()&&Ix()})(),k),w(k,()=>i()?"Verifying...":"Unlock Vault"),K(B=>{var F=`input-dark w-full px-4 py-3 text-sm mb-3 ${r()?"border-red-500":""}`,W=i();return F!==B.e&&Ie(L,B.e=F),W!==B.t&&(k.disabled=B.t=W),B},{e:void 0,t:void 0}),K(()=>L.value=e()),u})()}Mt(["input"]);var Sx=$('<div class="w-8 h-8 bg-aurum-gold rounded-full flex items-center justify-center"><span class="text-aurum-black font-display font-black text-sm">A'),Cx=$('<span class="font-display font-bold text-lg text-aurum-gold tracking-widest gold-glow">AurumVault'),Rx=$('<div class="w-7 h-7 bg-aurum-gold rounded-full flex items-center justify-center"><span class="text-aurum-black font-bold text-xs">'),Px=$('<span class="hidden sm:block">'),kx=$('<div class="flex items-center gap-3"><button class="nav-link text-xs opacity-50 hover:opacity-100">Odjava'),$x=$('<svg xmlns=http://www.w3.org/2000/svg class="w-5 h-5"fill=none viewBox="0 0 24 24"stroke=currentColor><path stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.3 2.3A1 1 0 006 17h12M10 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z">'),Vx=$('<span class="absolute -top-1 -right-1 bg-aurum-gold text-aurum-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">'),Nx=$('<div class="md:hidden bg-aurum-dark border-t border-aurum-border px-4 py-4 flex flex-col gap-4">'),Dx=$('<nav class="sticky top-0 z-50 bg-aurum-black border-b border-aurum-border"><div class="max-w-7xl mx-auto px-4 flex items-center justify-between h-16"><div class="hidden md:flex items-center gap-8"></div><div class="flex items-center gap-4"><button class="md:hidden text-aurum-text hover:text-aurum-gold"><svg class="w-6 h-6"fill=none viewBox="0 0 24 24"stroke=currentColor><path stroke-linecap=round stroke-linejoin=round stroke-width=2>');function Fs(){const n=gn(),[e,t]=X(!1);function r(){oo(),n("/login")}return(()=>{var s=Dx(),i=s.firstChild,a=i.firstChild,l=a.nextSibling,u=l.firstChild,h=u.firstChild,f=h.firstChild;return w(i,N(be,{href:"/catalog",class:"flex items-center gap-2 group",get children(){return[Sx(),Cx()]}}),a),w(a,N(be,{href:"/catalog",class:"nav-link",children:"Collections"}),null),w(a,N(be,{href:"/catalog?filter=new",class:"nav-link",children:"New Arrivals"}),null),w(a,N(be,{href:"/catalog?filter=exclusive",class:"nav-link text-aurum-gold",children:"Exclusives"}),null),w(l,N(ae,{get when(){return si()},get children(){return N(be,{href:"/admin",class:"nav-link text-aurum-gold text-xs border border-aurum-gold px-3 py-1 rounded hover:bg-aurum-gold hover:text-aurum-black transition-all",children:"Admin"})}}),u),w(l,N(ae,{get when(){return Or()},get fallback(){return N(be,{href:"/login",class:"nav-link",children:"Account"})},get children(){var g=kx(),x=g.firstChild;return w(g,N(be,{href:"/profile",class:"nav-link flex items-center gap-1",get children(){return[(()=>{var y=Rx(),S=y.firstChild;return w(S,()=>ut()?.name?.charAt(0)||"U"),y})(),(()=>{var y=Px();return w(y,()=>ut()?.name),y})()]}}),x),x.$$click=r,g}}),u),w(l,N(be,{href:"/cart",class:"relative p-2 text-aurum-text hover:text-aurum-gold transition-colors",get children(){return[$x(),N(ae,{get when(){return uh()>0},get children(){var g=Vx();return w(g,uh),g}})]}}),u),u.$$click=()=>t(!e()),w(s,N(ae,{get when(){return e()},get children(){var g=Nx();return w(g,N(be,{href:"/catalog",class:"nav-link",onclick:()=>t(!1),children:"Collections"}),null),w(g,N(be,{href:"/catalog?filter=new",class:"nav-link",onclick:()=>t(!1),children:"New Arrivals"}),null),w(g,N(be,{href:"/catalog?filter=exclusive",class:"nav-link text-aurum-gold",onclick:()=>t(!1),children:"Exclusives"}),null),g}}),null),K(()=>Je(f,"d",e()?"M6 18L18 6M6 6l12 12":"M4 6h16M4 12h16M4 18h16")),s})()}Mt(["click"]);var Ox=$('<footer class="bg-aurum-dark border-t border-aurum-border mt-20"><div class="max-w-7xl mx-auto px-4 py-12"><div class="grid grid-cols-1 md:grid-cols-4 gap-10"><div><div class="flex items-center gap-2 mb-4"><div class="w-8 h-8 bg-aurum-gold rounded-full flex items-center justify-center"><span class="text-aurum-black font-display font-black text-sm">A</span></div><span class="font-display font-bold text-aurum-gold tracking-widest">AurumVault</span></div><p class="text-aurum-muted text-sm leading-relaxed">Curating rare, authenticated treasures with secure checkout and white-glove shipping.</p></div><div><h4 class="font-display text-sm font-bold text-aurum-gold tracking-widest uppercase mb-4">Explore</h4><ul class="space-y-2 text-sm text-aurum-muted"><li></li><li></li><li></li><li><a href=# class="hover:text-aurum-gold transition-colors">Press</a></li></ul></div><div><h4 class="font-display text-sm font-bold text-aurum-gold tracking-widest uppercase mb-4">Support</h4><ul class="space-y-2 text-sm text-aurum-muted"><li><a href=# class="hover:text-aurum-gold transition-colors">Contact Us</a></li><li><a href=# class="hover:text-aurum-gold transition-colors">Shipping & Returns</a></li><li><a href=# class="hover:text-aurum-gold transition-colors">Warranty</a></li><li><a href=# class="hover:text-aurum-gold transition-colors">FAQ</a></li></ul></div><div><h4 class="font-display text-sm font-bold text-aurum-gold tracking-widest uppercase mb-4">Connect</h4><div class="flex gap-3 mb-4"></div><p class="text-aurum-muted text-xs">Contact: concierge@aurumvault.com</p><div class=mt-4><p class="text-aurum-muted text-xs mb-2">Subscribe for exclusive previews</p><div class="flex gap-2"><input type=email placeholder="Email address"class="input-dark text-xs px-3 py-2 flex-1 min-w-0"><button class="btn-gold px-3 py-2 text-xs rounded">→</button></div></div></div></div><div class="border-t border-aurum-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4"><p class="text-aurum-muted text-xs">© 2025 AurumVault. All rights reserved.</p><div class="flex gap-6 text-xs text-aurum-muted"><a href=# class="hover:text-aurum-gold transition-colors">Privacy Policy</a><a href=# class="hover:text-aurum-gold transition-colors">Admin Terms</a><a href=# class="hover:text-aurum-gold transition-colors">Security Practices'),Lx=$('<a href=# class="w-8 h-8 border border-aurum-border rounded flex items-center justify-center text-xs text-aurum-muted hover:border-aurum-gold hover:text-aurum-gold transition-all">');function ql(){return(()=>{var n=Ox(),e=n.firstChild,t=e.firstChild,r=t.firstChild,s=r.nextSibling,i=s.firstChild,a=i.nextSibling,l=a.firstChild,u=l.nextSibling,h=u.nextSibling,f=s.nextSibling,g=f.nextSibling,x=g.firstChild,y=x.nextSibling;return w(l,N(be,{href:"/catalog",class:"hover:text-aurum-gold transition-colors",children:"Collections"})),w(u,N(be,{href:"/catalog?filter=exclusive",class:"hover:text-aurum-gold transition-colors",children:"Exclusives"})),w(h,N(be,{href:"/login",class:"hover:text-aurum-gold transition-colors",children:"Autentifikacija"})),w(y,()=>["IG","TW","YT"].map(S=>(()=>{var R=Lx();return w(R,S),R})())),n})()}var Mx=$('<div class="product-card group"><div class="relative overflow-hidden aspect-square bg-aurum-dark"><img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"><div class="absolute inset-0 bg-gradient-to-t from-aurum-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div><div class="absolute top-2 left-2 flex flex-col gap-1"></div><div class="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2"><button class="flex-1 bg-aurum-dark/90 text-aurum-gold text-xs py-2 rounded border border-aurum-gold hover:bg-aurum-gold hover:text-aurum-black transition-all">Quick View</button></div></div><div class=p-4><h3 class="font-display text-sm font-semibold text-aurum-text group-hover:text-aurum-gold transition-colors leading-snug mb-1"></h3><p class="text-aurum-muted text-xs mb-3">...</p><div class="flex items-center justify-between"><div><p class="text-aurum-muted text-xs">SKU: </p></div><button>'),Fx=$("<span class=badge-exclusive>"),Ux=$("<span class=badge-exclusive>Members Only"),jx=$("<span class=badge-limited>Limited"),Bx=$("<span class=badge-limited>"),qx=$('<span class="bg-green-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">Sale'),zx=$('<div class="absolute top-2 right-2"><span class="bg-red-600/80 text-white text-xs px-2 py-0.5 rounded-full">Only <!> left'),Wx=$('<div class="flex items-center gap-2"><span class="text-aurum-gold font-bold">$</span><span class="text-aurum-muted text-xs line-through">$'),Hx=$('<span class="text-aurum-gold font-bold">$'),Gx=$('<div class="flex-1 flex items-center justify-center py-20"><div class="text-aurum-gold text-sm animate-pulse">Učitavanje proizvoda...'),Kx=$('<aside class="hidden lg:block w-56 flex-shrink-0"><div class="sticky top-24 space-y-6"><div><h3 class="text-xs font-bold text-aurum-gold uppercase tracking-widest mb-3">Filters</h3></div><div><h4 class="text-xs text-aurum-muted uppercase tracking-widest mb-2">Category</h4><select class="input-dark w-full px-3 py-2 text-sm"></select></div><div><h4 class="text-xs text-aurum-muted uppercase tracking-widest mb-2">Price Range</h4><div class="flex items-center gap-2"><input type=number class="input-dark w-full px-2 py-1.5 text-xs"placeholder=Min><span class=text-aurum-muted>–</span><input type=number class="input-dark w-full px-2 py-1.5 text-xs"placeholder=Max></div></div><div><label class="flex items-center gap-2 cursor-pointer"><input type=checkbox class="checkbox checkbox-warning checkbox-sm"><span class="text-xs text-aurum-text">Members only</span></label></div><button class="text-xs text-aurum-muted hover:text-aurum-gold transition-colors underline">Reset</button><div class="border-t border-aurum-border pt-4"><h4 class="text-xs text-aurum-muted uppercase tracking-widest mb-3">Curated Picks'),Qx=$('<main class=flex-1><div class="flex items-center justify-between mb-6"><p class="text-aurum-muted text-sm">Showing <!> items</p><div class="flex items-center gap-3"><select class="input-dark px-3 py-1.5 text-xs"><option>Featured</option><option>Price: Low</option><option>Price: High</option></select><div class="flex border border-aurum-border rounded overflow-hidden"><button>Grid</button><button>List</button></div></div></div><div>'),Yx=$('<div class="min-h-screen bg-aurum-black"><div class="relative bg-aurum-dark border-b border-aurum-border overflow-hidden"><div class="absolute inset-0 opacity-10 pointer-events-none"style="background:radial-gradient(ellipse at 70% 50%, rgba(240,192,64,0.4) 0%, transparent 70%)"></div><div class="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center"><div class=md:col-span-2><span class="badge-exclusive mb-2 inline-block">Curated Drop</span><h1 class="font-display text-3xl font-bold text-white leading-tight mt-2">Aurum Noir —<br><span class="text-aurum-gold gold-glow">Midnight Sculpture Series</span></h1><p class="text-aurum-muted mt-3 text-sm leading-relaxed max-w-lg">An exclusive limited-run of hand-finished sculptures. Members receive early access and complimentary authentication certificates.</p><button class="btn-gold mt-5 px-6 py-3 rounded-lg text-xs">Explore Collection</button></div><div class="hidden md:flex flex-col gap-3"><div class="card-dark p-4"><span class="text-aurum-gold text-xs font-bold">Flash Offer</span><p class="text-aurum-text text-sm mt-1">24-hour Members Preview</p></div><div class="card-dark p-4"><span class="text-aurum-gold text-xs font-bold">Certificate of Authenticity</span><p class="text-aurum-muted text-xs mt-1">Free with select purchases</p></div></div></div></div><div class="max-w-7xl mx-auto px-4 py-8 flex gap-8">'),Jx=$("<option>"),Xx=$('<img class="w-10 h-10 rounded object-cover">'),Zx=$('<div><p class="text-xs text-aurum-text leading-tight"></p><p class="text-xs text-aurum-muted">Exclusive drop'),eT=$('<div class="text-center py-20 text-aurum-muted"><p class="text-lg mb-2">No products found</p><p class=text-sm>Try adjusting your filters');function tT({product:n}){const e=gn(),[t,r]=X(!1);function s(i){i.stopPropagation(),up(n),r(!0),setTimeout(()=>r(!1),1500)}return(()=>{var i=Mx(),a=i.firstChild,l=a.firstChild,u=l.nextSibling,h=u.nextSibling,f=h.nextSibling,g=f.firstChild,x=a.nextSibling,y=x.firstChild,S=y.nextSibling,R=S.firstChild,P=S.nextSibling,L=P.firstChild,k=L.firstChild;k.firstChild;var B=L.nextSibling;return i.$$click=()=>e(`/product/${n.id}`),w(h,(()=>{var F=Le(()=>n.badge==="Exclusive");return()=>F()&&(()=>{var W=Fx();return w(W,()=>n.badge),W})()})(),null),w(h,(()=>{var F=Le(()=>n.badge==="Members Only");return()=>F()&&Ux()})(),null),w(h,(()=>{var F=Le(()=>n.badge==="Limited");return()=>F()&&jx()})(),null),w(h,(()=>{var F=Le(()=>!!(n.badge?.startsWith("Limited")&&n.badge!=="Limited"));return()=>F()&&(()=>{var W=Bx();return w(W,()=>n.badge),W})()})(),null),w(h,(()=>{var F=Le(()=>n.badge==="Sale");return()=>F()&&qx()})(),null),w(a,(()=>{var F=Le(()=>n.stock<=3);return()=>F()&&(()=>{var W=zx(),O=W.firstChild,E=O.firstChild,_=E.nextSibling;return _.nextSibling,w(O,()=>n.stock,_),W})()})(),f),g.$$click=F=>{F.stopPropagation(),e(`/product/${n.id}`)},w(y,()=>n.name),w(S,()=>n.description.substring(0,60),R),w(L,(()=>{var F=Le(()=>!!n.salePrice);return()=>F()?(()=>{var W=Wx(),O=W.firstChild;O.firstChild;var E=O.nextSibling;return E.firstChild,w(O,()=>n.salePrice.toLocaleString(),null),w(E,()=>n.price.toLocaleString(),null),W})():(()=>{var W=Hx();return W.firstChild,w(W,()=>n.price.toLocaleString(),null),W})()})(),k),w(k,()=>n.sku,null),B.$$click=s,w(B,()=>t()?"✓ Added":"Add to Cart"),K(F=>{var W=n.images[0],O=n.name,E=`text-xs px-3 py-2 rounded border transition-all ${t()?"bg-green-600 border-green-600 text-white":"border-aurum-gold text-aurum-gold hover:bg-aurum-gold hover:text-aurum-black"}`;return W!==F.e&&Je(l,"src",F.e=W),O!==F.t&&Je(l,"alt",F.t=O),E!==F.a&&Ie(B,F.a=E),F},{e:void 0,t:void 0,a:void 0}),i})()}function nT(){const[n,e]=X("All"),[t,r]=X(0),[s,i]=X(15e3),[a,l]=X(!1),[u,h]=X("Featured"),[f,g]=X("grid");Us(()=>Rr());const x=Ee(()=>{let y=lr();return n()!=="All"&&(y=y.filter(S=>S.category===n())),a()&&(y=y.filter(S=>S.membersOnly)),y=y.filter(S=>{const R=S.salePrice||S.price;return R>=t()&&R<=s()}),u()==="Price: Low"&&(y=[...y].sort((S,R)=>(S.salePrice||S.price)-(R.salePrice||R.price))),u()==="Price: High"&&(y=[...y].sort((S,R)=>(R.salePrice||R.price)-(S.salePrice||S.price))),y});return(()=>{var y=Yx(),S=y.firstChild,R=S.nextSibling;return w(y,N(Fs,{}),S),w(R,N(ae,{get when(){return ah()},get children(){return Gx()}}),null),w(R,N(ae,{get when(){return!ah()},get children(){return[(()=>{var P=Kx(),L=P.firstChild,k=L.firstChild,B=k.nextSibling,F=B.firstChild,W=F.nextSibling,O=B.nextSibling,E=O.firstChild,_=E.nextSibling,v=_.firstChild,T=v.nextSibling,b=T.nextSibling,I=O.nextSibling,m=I.firstChild,q=m.firstChild,Z=I.nextSibling,me=Z.nextSibling;return me.firstChild,W.addEventListener("change",ce=>e(ce.target.value)),w(W,N(Et,{each:vx,children:ce=>(()=>{var he=Jx();return he.value=ce,w(he,ce),he})()})),v.$$input=ce=>r(+ce.target.value),b.$$input=ce=>i(+ce.target.value),q.addEventListener("change",ce=>l(ce.target.checked)),Z.$$click=()=>{e("All"),r(0),i(15e3),l(!1)},w(me,N(Et,{get each(){return lr().slice(0,2)},children:ce=>N(be,{get href(){return`/product/${ce.id}`},class:"flex items-center gap-3 mb-3 hover:opacity-80 transition-opacity",get children(){return[(()=>{var he=Xx();return K(ye=>{var $e=ce.images[0],He=ce.name;return $e!==ye.e&&Je(he,"src",ye.e=$e),He!==ye.t&&Je(he,"alt",ye.t=He),ye},{e:void 0,t:void 0}),he})(),(()=>{var he=Zx(),ye=he.firstChild;return w(ye,()=>ce.name),he})()]}})}),null),K(()=>W.value=n()),K(()=>v.value=t()),K(()=>b.value=s()),K(()=>q.checked=a()),P})(),(()=>{var P=Qx(),L=P.firstChild,k=L.firstChild,B=k.firstChild,F=B.nextSibling;F.nextSibling;var W=k.nextSibling,O=W.firstChild,E=O.nextSibling,_=E.firstChild,v=_.nextSibling,T=L.nextSibling;return w(k,()=>x().length,F),O.addEventListener("change",b=>h(b.target.value)),_.$$click=()=>g("grid"),v.$$click=()=>g("list"),w(T,N(Et,{get each(){return x()},children:b=>N(tT,{product:b})})),w(P,(()=>{var b=Le(()=>x().length===0);return()=>b()&&eT()})(),null),K(b=>{var I=`px-3 py-1.5 text-xs transition-colors ${f()==="grid"?"bg-aurum-gold text-aurum-black":"text-aurum-muted hover:text-aurum-gold"}`,m=`px-3 py-1.5 text-xs transition-colors ${f()==="list"?"bg-aurum-gold text-aurum-black":"text-aurum-muted hover:text-aurum-gold"}`,q=`grid gap-5 ${f()==="grid"?"grid-cols-1 sm:grid-cols-2 xl:grid-cols-3":"grid-cols-1"}`;return I!==b.e&&Ie(_,b.e=I),m!==b.t&&Ie(v,b.t=m),q!==b.a&&Ie(T,b.a=q),b},{e:void 0,t:void 0,a:void 0}),K(()=>O.value=u()),P})()]}}),null),w(y,N(ql,{}),null),y})()}Mt(["click","input"]);var rT=$('<div><h3 class="text-xs text-aurum-muted uppercase tracking-widest mb-2">Size</h3><div class="flex gap-2 flex-wrap">'),sT=$('<div class=mt-16><div class="flex items-center justify-between mb-6"><h2 class=section-title>You might also like</h2><span class="text-xs text-aurum-muted">Inspired picks for you</span></div><div class="grid grid-cols-2 md:grid-cols-4 gap-4">'),iT=$('<div class="min-h-screen bg-aurum-black"><div class="border-b border-aurum-border"><div class="max-w-7xl mx-auto px-4 py-3 flex items-center gap-2 text-xs text-aurum-muted"><span>›</span><span>›</span><span class=text-aurum-text></span></div></div><div class="max-w-7xl mx-auto px-4 py-10 page-enter"><div class="grid grid-cols-1 lg:grid-cols-2 gap-12"><div class=space-y-3><div class="relative rounded-xl overflow-hidden bg-aurum-dark aspect-square"><img class="w-full h-full object-cover"><div class="absolute bottom-3 right-3 bg-aurum-black/70 text-aurum-muted text-xs px-2 py-1 rounded">Zoom</div></div><div class="flex gap-2"></div><div class="grid grid-cols-3 gap-3 mt-4"></div></div><div class=space-y-6><div><div class="flex items-center justify-between mb-2"></div><h1 class="font-display text-3xl font-bold text-white leading-tight"></h1><div class="flex items-center gap-3 mt-3"><span class="text-2xl font-bold text-aurum-gold">$</span><span class="text-aurum-muted text-sm">incl. taxes</span></div></div><div class="flex items-center gap-2"><span class="w-2 h-2 bg-green-400 rounded-full"></span><span class="text-sm text-aurum-text">In stock — <!> units</span><span class="text-aurum-muted text-xs ml-auto">Est. delivery: Mar 23 – Mar 24</span></div><p class="text-aurum-muted text-sm leading-relaxed"></p><div><h3 class="text-xs text-aurum-muted uppercase tracking-widest mb-2">Quantity</h3><div class="flex items-center gap-3"><button class="w-9 h-9 border border-aurum-border rounded text-aurum-text hover:border-aurum-gold transition-colors text-lg">−</button><span class="w-12 text-center font-bold text-aurum-text"></span><button class="w-9 h-9 border border-aurum-border rounded text-aurum-text hover:border-aurum-gold transition-colors text-lg">+</button><span class="text-aurum-muted text-xs">Max 5 per customer</span></div></div><div class="flex gap-3"><button></button><button class="flex-1 py-3 rounded-lg font-bold text-sm border border-aurum-gold text-aurum-gold hover:bg-aurum-gold hover:text-aurum-black transition-all">Buy Now</button></div><div class="grid grid-cols-2 gap-3"></div></div></div><div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">'),oT=$('<div class="min-h-screen bg-aurum-black flex items-center justify-center"><div class=text-center><p class="text-aurum-muted mb-4">Product not found'),aT=$('<div class="absolute top-3 left-3"><span class=badge-exclusive>'),lT=$('<button><img alt class="w-full h-full object-cover">'),cT=$('<div class="card-dark p-3"><p class="text-aurum-muted text-xs"></p><p class="text-aurum-text text-xs font-medium mt-0.5">'),uT=$('<span class="badge-exclusive mb-3 inline-block">'),hT=$('<span class="text-aurum-muted line-through">$'),dT=$("<button>"),fT=$('<div class="flex items-start gap-2 text-xs text-aurum-muted"><span></span><span>'),pT=$('<div class="aspect-square overflow-hidden bg-aurum-dark"><img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">'),mT=$('<div class=p-3><p class="text-xs font-display text-aurum-text"></p><p class="text-aurum-gold text-sm font-bold mt-1">$'),gT=$('<div><h3 class="section-title text-base mb-3"></h3><p class="text-aurum-muted text-sm leading-relaxed whitespace-pre-line">');function _T(){const n=Rh(),e=gn();Us(()=>{lr().length===0&&Rr()});const t=Ee(()=>lr().find(y=>y.id===n.id||y.id===+n.id)),r=Ee(()=>lr().filter(y=>y.id!==n.id&&y.category===t()?.category).slice(0,4)),[s,i]=X(""),[a,l]=X(1),[u,h]=X(0),[f,g]=X(!1);function x(){t()&&(up({...t(),selectedSize:s()},a()),g(!0),setTimeout(()=>g(!1),2e3))}return N(ae,{get when(){return t()},get fallback(){return(()=>{var y=oT(),S=y.firstChild;return S.firstChild,w(S,N(be,{href:"/catalog",class:"btn-gold px-6 py-2 rounded",children:"Back to Catalog"}),null),y})()},get children(){var y=iT(),S=y.firstChild,R=S.firstChild,P=R.firstChild,L=P.nextSibling,k=L.nextSibling,B=S.nextSibling,F=B.firstChild,W=F.firstChild,O=W.firstChild,E=O.firstChild,_=E.nextSibling,v=O.nextSibling,T=v.nextSibling,b=W.nextSibling,I=b.firstChild,m=I.firstChild,q=m.nextSibling,Z=q.nextSibling,me=Z.firstChild;me.firstChild;var ce=me.nextSibling,he=I.nextSibling,ye=he.firstChild,$e=ye.nextSibling,He=$e.firstChild,mt=He.nextSibling;mt.nextSibling;var Ct=he.nextSibling,rt=Ct.nextSibling,ht=rt.firstChild,Rt=ht.nextSibling,gt=Rt.firstChild,ct=gt.nextSibling,Ft=ct.nextSibling,_t=rt.nextSibling,xt=_t.firstChild,Pt=xt.nextSibling,yt=_t.nextSibling,ee=F.nextSibling;return w(y,N(Fs,{}),S),w(R,N(be,{href:"/catalog",class:"hover:text-aurum-gold transition-colors",children:"AurumVault"}),P),w(R,N(be,{href:"/catalog",class:"hover:text-aurum-gold transition-colors",children:"Catalog"}),L),w(k,()=>t()?.category),w(O,(()=>{var U=Le(()=>!!t()?.badge);return()=>U()&&(()=>{var H=aT(),te=H.firstChild;return w(te,()=>t()?.badge),H})()})(),_),w(O,N(ae,{get when(){return si()},get children(){return N(be,{get href(){return`/admin/products/edit/${t()?.id}`},class:"absolute top-3 right-3 bg-aurum-gold text-aurum-black text-xs font-bold px-3 py-1 rounded",children:"Edit"})}}),_),w(v,N(Et,{get each(){return t()?.images},children:(U,H)=>(()=>{var te=lT(),M=te.firstChild;return te.$$click=()=>h(H()),Je(M,"src",U),K(()=>Ie(te,`w-16 h-16 rounded overflow-hidden border-2 transition-colors ${u()===H()?"border-aurum-gold":"border-aurum-border"}`)),te})()})),w(T,()=>[{label:"SKU",value:t()?.sku},{label:"Materials",value:"18k Gold Plating over Sterling"},{label:"Availability",value:"Ships from New York"}].map(U=>(()=>{var H=cT(),te=H.firstChild,M=te.nextSibling;return w(te,()=>U.label),w(M,()=>U.value),H})())),w(m,N(be,{href:"/catalog",class:"text-xs text-aurum-muted hover:text-aurum-gold",children:"Aurum.SignetClassic ↗"})),w(I,(()=>{var U=Le(()=>!!t()?.badge);return()=>U()&&(()=>{var H=uT();return w(H,()=>t()?.badge),H})()})(),q),w(q,()=>t()?.name),w(me,()=>(t()?.salePrice||t()?.price)?.toLocaleString(),null),w(Z,(()=>{var U=Le(()=>!!t()?.salePrice);return()=>U()&&(()=>{var H=hT();return H.firstChild,w(H,()=>t()?.price?.toLocaleString(),null),H})()})(),ce),w($e,()=>t()?.stock,mt),w(Ct,()=>t()?.description),w(b,N(ae,{get when(){return t()?.sizes?.length>0},get children(){var U=rT(),H=U.firstChild,te=H.nextSibling;return w(te,N(Et,{get each(){return t()?.sizes},children:M=>(()=>{var z=dT();return z.$$click=()=>i(M),w(z,M),K(()=>Ie(z,`w-10 h-10 rounded border text-sm font-bold transition-all ${s()===M?"border-aurum-gold bg-aurum-gold text-aurum-black":"border-aurum-border text-aurum-text hover:border-aurum-gold"}`)),z})()})),U}}),rt),gt.$$click=()=>l(U=>Math.max(1,U-1)),w(ct,a),Ft.$$click=()=>l(U=>Math.min(t()?.stock||10,U+1)),xt.$$click=x,w(xt,()=>f()?"✓ Added to Cart":"Add to Cart"),Pt.$$click=()=>{x(),e("/checkout")},w(yt,()=>[{icon:"🚚",text:"Free shipping over $100"},{icon:"↩",text:"30-day returns. Hassle-free returns within 30 days"},{icon:"🔒",text:"Secure checkout"},{icon:"✋",text:"Hand-inspected quality"}].map(U=>(()=>{var H=fT(),te=H.firstChild,M=te.nextSibling;return w(te,()=>U.icon),w(M,()=>U.text),H})())),w(B,N(ae,{get when(){return r().length>0},get children(){var U=sT(),H=U.firstChild,te=H.nextSibling;return w(te,N(Et,{get each(){return r()},children:M=>N(be,{get href(){return`/product/${M.id}`},class:"card-dark overflow-hidden group hover:border-aurum-gold transition-all duration-300",get children(){return[(()=>{var z=pT(),Y=z.firstChild;return K(ie=>{var ge=M.images[0],xe=M.name;return ge!==ie.e&&Je(Y,"src",ie.e=ge),xe!==ie.t&&Je(Y,"alt",ie.t=xe),ie},{e:void 0,t:void 0}),z})(),(()=>{var z=mT(),Y=z.firstChild,ie=Y.nextSibling;return ie.firstChild,w(Y,()=>M.name),w(ie,()=>M.price.toLocaleString(),null),z})()]}})})),U}}),ee),w(ee,()=>[{title:"Product Details",content:t()?.description},{title:"Specifications",content:`Material: 18k Gold Plating over Sterling Silver
Weight: 8.5g (size 8)
Width: 5mm face
Finish: Brushed face, polished bezel`},{title:"Care",content:"Wipe with a soft cloth. Avoid harsh chemicals. Keep in provided AurumVault pouch."}].map(U=>(()=>{var H=gT(),te=H.firstChild,M=te.nextSibling;return w(te,()=>U.title),w(M,()=>U.content),H})())),w(y,N(ql,{}),null),K(U=>{var H=t()?.images[u()],te=t()?.name,M=`flex-1 py-3 rounded-lg font-bold text-sm transition-all ${f()?"bg-green-600 text-white border-green-600":"btn-gold"}`;return H!==U.e&&Je(E,"src",U.e=H),te!==U.t&&Je(E,"alt",U.t=te),M!==U.a&&Ie(xt,U.a=M),U},{e:void 0,t:void 0,a:void 0}),y}})}Mt(["click"]);var yT=$('<div class="w-8 h-8 bg-aurum-gold rounded-full flex items-center justify-center"><span class="text-aurum-black font-display font-black text-sm">A'),vT=$('<span class="font-display font-bold text-aurum-gold tracking-widest gold-glow">AurumVault'),bT=$('<div class="text-center mb-6"><h1 class="font-display text-xl font-bold text-white">Dobrodošli nazad</h1><p class="text-aurum-muted text-sm mt-1">Prijavite se u vaš AurumVault račun'),wT=$('<div class="text-center mb-6"><h1 class="font-display text-xl font-bold text-white">Kreirajte račun</h1><p class="text-aurum-muted text-sm mt-1">Pridružite se AurumVault zajednici'),ET=$('<div class="text-center mb-6"><h1 class="font-display text-xl font-bold text-white">Oporavak lozinke</h1><p class="text-aurum-muted text-sm mt-1">Unesite email za slanje uputa'),xT=$('<div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Ime i prezime</label><input type=text placeholder="Vaše ime"class="input-dark w-full px-4 py-3 text-sm">'),TT=$('<div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Lozinka</label><input type=password placeholder=•••••••• class="input-dark w-full px-4 py-3 text-sm">'),IT=$('<p class="text-red-400 text-xs flex items-center gap-1">⚠ '),AT=$('<p class="text-green-400 text-xs flex items-center gap-1">✓ '),ST=$('<div class="text-center mt-4"><button class="text-xs text-aurum-muted hover:text-aurum-gold transition-colors underline">Zaboravili ste lozinku?'),CT=$('<div class="text-center mt-4"><button class="text-xs text-aurum-muted hover:text-aurum-gold transition-colors">← Nazad na prijavu'),RT=$('<div class="mt-6 pt-4 border-t border-aurum-border"><p class="text-xs text-aurum-muted text-center mb-3">Prednosti registracije:</p><div class=space-y-2>'),PT=$('<div class="min-h-screen bg-aurum-black flex flex-col"><div class="border-b border-aurum-border px-6 py-4 flex items-center justify-between"></div><div class="flex-1 flex items-center justify-center px-4 py-12"><div class="w-full max-w-md page-enter"><div class="gold-border-anim bg-aurum-card rounded-2xl p-8"><div class="flex mb-8 border-b border-aurum-border"><button>PRIJAVA</button><button>REGISTRACIJA</button></div><form class=space-y-4><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Email</label><input type=email placeholder=vas@email.com class="input-dark w-full px-4 py-3 text-sm"></div><button type=submit class="btn-gold w-full py-3 rounded-lg text-sm mt-2">'),kT=$('<div class="flex items-center gap-2 text-xs text-aurum-muted"><span class=text-aurum-gold>✓</span> ');function $T(){const n=gn(),[e,t]=X("login"),[r,s]=X(""),[i,a]=X(""),[l,u]=X(""),[h,f]=X(""),[g,x]=X(""),[y,S]=X(!1);async function R(P){P.preventDefault(),f(""),x(""),S(!0);try{if(e()==="login")await fx(r(),i()),n("/catalog");else if(e()==="register"){if(!l()){f("Unesite ime i prezime."),S(!1);return}await dx(l(),r(),i()),n("/catalog")}else e()==="forgot"&&(await px(r()),x(`Upute za oporavak lozinke poslane su na ${r()}`))}catch(L){f({"auth/invalid-email":"Nevažeća email adresa.","auth/user-not-found":"Korisnik s tim emailom ne postoji.","auth/wrong-password":"Pogrešna lozinka.","auth/email-already-in-use":"Email je već registriran.","auth/weak-password":"Lozinka mora imati najmanje 6 znakova.","auth/too-many-requests":"Previše pokušaja. Pokušajte kasnije.","auth/invalid-credential":"Pogrešan email ili lozinka."}[L.code]||L.message)}S(!1)}return(()=>{var P=PT(),L=P.firstChild,k=L.nextSibling,B=k.firstChild,F=B.firstChild,W=F.firstChild,O=W.firstChild,E=O.nextSibling,_=W.nextSibling,v=_.firstChild,T=v.firstChild,b=T.nextSibling,I=v.nextSibling;return w(L,N(be,{href:"/catalog",class:"flex items-center gap-2",get children(){return[yT(),vT()]}}),null),w(L,N(be,{href:"/catalog",class:"text-aurum-muted text-xs hover:text-aurum-gold transition-colors",children:"← Nazad na katalog"}),null),O.$$click=()=>{t("login"),f(""),x("")},E.$$click=()=>{t("register"),f(""),x("")},w(F,N(ae,{get when(){return e()==="login"},get children(){return bT()}}),_),w(F,N(ae,{get when(){return e()==="register"},get children(){return wT()}}),_),w(F,N(ae,{get when(){return e()==="forgot"},get children(){return ET()}}),_),_.addEventListener("submit",R),w(_,N(ae,{get when(){return e()==="register"},get children(){var m=xT(),q=m.firstChild,Z=q.nextSibling;return Z.$$input=me=>u(me.target.value),K(()=>Z.value=l()),m}}),v),b.$$input=m=>s(m.target.value),w(_,N(ae,{get when(){return e()!=="forgot"},get children(){var m=TT(),q=m.firstChild,Z=q.nextSibling;return Z.$$input=me=>a(me.target.value),K(()=>Z.value=i()),m}}),I),w(_,N(ae,{get when(){return h()},get children(){var m=IT();return m.firstChild,w(m,h,null),m}}),I),w(_,N(ae,{get when(){return g()},get children(){var m=AT();return m.firstChild,w(m,g,null),m}}),I),w(I,(()=>{var m=Le(()=>!!y());return()=>m()?"Učitavanje...":Le(()=>e()==="login")()?"Prijava":e()==="register"?"Registracija":"Pošalji upute"})()),w(F,N(ae,{get when(){return e()==="login"},get children(){var m=ST(),q=m.firstChild;return q.$$click=()=>{t("forgot"),f(""),x("")},m}}),null),w(F,N(ae,{get when(){return e()==="forgot"},get children(){var m=CT(),q=m.firstChild;return q.$$click=()=>t("login"),m}}),null),w(F,N(ae,{get when(){return e()==="register"},get children(){var m=RT(),q=m.firstChild,Z=q.nextSibling;return w(Z,()=>["Spremi adresu i podatke o plaćanju","Pristup kuponima za popust","Ekskluzivne ponude i rani pristup","Povijest narudžbi"].map(me=>(()=>{var ce=kT(),he=ce.firstChild;return he.nextSibling,w(ce,me,null),ce})())),m}}),null),K(m=>{var q=`flex-1 pb-3 text-sm font-display tracking-wider transition-colors ${e()==="login"?"text-aurum-gold border-b-2 border-aurum-gold":"text-aurum-muted hover:text-aurum-text"}`,Z=`flex-1 pb-3 text-sm font-display tracking-wider transition-colors ${e()==="register"?"text-aurum-gold border-b-2 border-aurum-gold":"text-aurum-muted hover:text-aurum-text"}`,me=y();return q!==m.e&&Ie(O,m.e=q),Z!==m.t&&Ie(E,m.t=Z),me!==m.a&&(I.disabled=m.a=me),m},{e:void 0,t:void 0,a:void 0}),K(()=>b.value=r()),P})()}Mt(["click","input"]);var VT=$('<div class="min-h-screen bg-aurum-black flex flex-col"><div class="flex-1 flex items-center justify-center px-4"><div class="text-center page-enter"><div class="w-20 h-20 bg-aurum-gold rounded-full flex items-center justify-center mx-auto mb-6"><span class="text-4xl text-aurum-black">✓</span></div><h1 class="font-display text-3xl font-bold text-aurum-gold mb-3">Narudžba potvrđena!</h1><p class="text-aurum-muted mb-2">Hvala na kupovini. Potvrda je poslana na vaš email.</p><p class="text-aurum-muted text-sm mb-8">Broj narudžbe: <span class="text-aurum-gold font-bold">#'),NT=$('<div class="text-center py-8 text-aurum-muted"><p>Košarica je prazna'),DT=$('<div class="card-dark p-6"><h2 class="font-display text-lg font-bold text-aurum-gold mb-4">Vaša košarica'),OT=$('<p class="text-red-400 text-xs mt-2">⚠ '),LT=$('<p class="text-green-400 text-xs mt-2">✓ Kupon AURUM10 primijenjen — 10% popusta'),MT=$('<p class="text-aurum-muted text-xs mt-2">Kuponi su dostupni samo prijavljenim korisnicima. '),FT=$('<div class="card-dark p-6"><div class="flex items-center gap-3"><input type=text placeholder="Promo kod"><button class="btn-gold px-4 py-2 text-sm rounded">Primijeni'),UT=$('<button class="btn-gold w-full py-3 rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed">Nastavi na dostavu →'),jT=$('<div class="card-dark p-6"><h2 class="font-display text-lg font-bold text-aurum-gold mb-4">Podaci za dostavu</h2><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Ime i prezime</label><input type=text class="input-dark w-full px-4 py-2.5 text-sm"placeholder="Ivan Horvat"></div><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Telefon</label><input type=tel class="input-dark w-full px-4 py-2.5 text-sm"placeholder="+385 91 234 5678"></div><div class=sm:col-span-2><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Adresa</label><input type=text class="input-dark w-full px-4 py-2.5 text-sm"placeholder="Ulica i broj"></div><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Grad</label><input type=text class="input-dark w-full px-4 py-2.5 text-sm"placeholder=Zagreb></div><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Poštanski broj</label><input type=text class="input-dark w-full px-4 py-2.5 text-sm"placeholder=10000></div></div><div class=mt-6><h3 class="text-xs text-aurum-muted uppercase tracking-widest mb-3">Metoda dostave</h3><div class=space-y-2>'),BT=$('<div class="flex gap-3"><button class="flex-1 py-3 border border-aurum-border text-aurum-muted rounded-lg text-sm hover:border-aurum-gold transition-colors">← Nazad</button><button class="flex-1 btn-gold py-3 rounded-lg text-sm">Nastavi na plaćanje →'),qT=$('<div class="card-dark p-6"><h2 class="font-display text-lg font-bold text-aurum-gold mb-4">Način plaćanja</h2><div class="space-y-3 mb-6"></div><div class="border-t border-aurum-border pt-4"><h3 class="text-xs text-aurum-muted uppercase tracking-widest mb-3">Dodaj novu karticu</h3><div class="grid grid-cols-1 gap-3"><input placeholder="Ime na kartici"class="input-dark px-4 py-2.5 text-sm"><input placeholder="Broj kartice"class="input-dark px-4 py-2.5 text-sm"><div class="grid grid-cols-2 gap-3"><input placeholder="MM / YY"class="input-dark px-4 py-2.5 text-sm"><input placeholder=CVC class="input-dark px-4 py-2.5 text-sm"></div></div></div><p class="text-center text-aurum-muted text-xs mt-4">🔒 PCI-SSL compliant. Vaši podaci su sigurni.'),zT=$('<div class="flex gap-3"><button class="flex-1 py-3 border border-aurum-border text-aurum-muted rounded-lg text-sm hover:border-aurum-gold transition-colors">← Nazad</button><button class="flex-1 btn-gold py-3 rounded-lg text-sm">Pregled narudžbe →'),WT=$('<div class="card-dark p-6"><h2 class="font-display text-lg font-bold text-aurum-gold mb-4">Potvrda narudžbe</h2><div class=space-y-3><div class="flex justify-between text-sm"><span class=text-aurum-muted>Adresa:</span><span class="text-aurum-text text-right">, </span></div><div class="flex justify-between text-sm"><span class=text-aurum-muted>Dostava:</span><span class=text-aurum-text></span></div><div class="flex justify-between text-sm"><span class=text-aurum-muted>Plaćanje:</span><span class="text-aurum-text capitalize">'),HT=$('<div class="flex gap-3"><button class="flex-1 py-3 border border-aurum-border text-aurum-muted rounded-lg text-sm hover:border-aurum-gold transition-colors">← Nazad</button><button class="flex-1 btn-gold py-3 rounded-lg text-sm">'),GT=$('<div class="flex justify-between text-green-400"><span>Popust (10%)</span><span>−$'),KT=$('<div class="min-h-screen bg-aurum-black"><div class="max-w-6xl mx-auto px-4 py-8 page-enter"><div class="flex items-center justify-center mb-10"></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-8"><div class="lg:col-span-2 space-y-6"></div><div class=lg:col-span-1><div class="card-dark p-6 sticky top-24"><h3 class="font-display text-sm font-bold text-aurum-gold uppercase tracking-widest mb-4">Sažetak narudžbe</h3><div class="text-xs text-aurum-muted mb-2"> </div><div class="border-t border-aurum-border mt-4 pt-4 space-y-2 text-sm"><div class="flex justify-between text-aurum-muted"><span>Subtotal</span><span>$</span></div><div class="flex justify-between text-aurum-muted"><span>Dostava</span><span></span></div><div class="flex justify-between text-aurum-muted"><span>PDV</span><span>$</span></div><div class="flex justify-between text-aurum-gold font-bold text-base pt-2 border-t border-aurum-border"><span>Ukupno</span><span>$'),QT=$('<div class="flex items-center"><div class="flex flex-col items-center"><div></div><span>'),YT=$("<div>"),JT=$('<div class="flex items-center gap-4 py-4 border-b border-aurum-border last:border-0"><img class="w-16 h-16 rounded object-cover bg-aurum-dark"><div class=flex-1><p class="text-aurum-text text-sm font-medium"></p><p class="text-aurum-muted text-xs"></p></div><div class="flex items-center gap-2"><button class="w-6 h-6 border border-aurum-border rounded text-xs hover:border-aurum-gold text-aurum-text">−</button><span class="text-sm text-aurum-text w-6 text-center"></span><button class="w-6 h-6 border border-aurum-border rounded text-xs hover:border-aurum-gold text-aurum-text">+</button></div><span class="text-aurum-gold font-bold text-sm w-20 text-right">$</span><button class="text-aurum-muted hover:text-red-400 text-lg">×'),XT=$('<label><input type=radio name=shipping class="radio radio-warning radio-sm"><div class=flex-1><p class="text-sm text-aurum-text"></p></div><span class="text-aurum-gold text-sm font-bold">'),ZT=$('<label><input type=radio name=payment class="radio radio-warning radio-sm"><div class="w-10 h-6 bg-aurum-muted rounded flex items-center justify-center text-xs text-white"></div><div class=flex-1><p class="text-sm text-aurum-text"></p><p class="text-xs text-aurum-muted">'),eI=$('<div class="flex items-center gap-2 mb-2 text-xs"><img alt class="w-8 h-8 rounded object-cover"><span class="flex-1 text-aurum-text truncate"></span><span class=text-aurum-gold>$'),tI=$("<span class=text-green-400>Besplatno");function hh(){gn();const[n,e]=X(1),[t,r]=X(""),[s,i]=X(!1),[a,l]=X(""),[u,h]=X(null),[f,g]=X("visa"),[x,y]=X(!1),[S,R]=X(""),[P,L]=X(!1),[k,B]=X({fullName:ut()?.name||"",phone:"",address:"",city:"",state:"",postal:"",country:"Croatia",shipping:"standard"}),F=Ee(()=>!s()||!u()?0:u().type==="percent"?nr()*(u().discount/100):u().discount),W=Ee(()=>k().shipping==="express"?12:nr()>100?0:12),O=Ee(()=>(nr()-F())*.075),E=Ee(()=>nr()-F()+W()+O());async function _(){l("");try{const b=await xx(t());h(b),i(!0)}catch(b){l(b.message)}}async function v(){L(!0);try{const b=await Ex({items:sn().map(I=>({id:I.id,name:I.name,price:I.price,quantity:I.quantity,sku:I.sku||""})),total:E(),subtotal:nr(),discount:F(),shipping:W(),tax:O(),status:"Processing",paymentMethod:f(),coupon:s()?t():null,shippingAddress:{fullName:k().fullName,phone:k().phone,address:k().address,city:k().city,postal:k().postal,country:k().country}});R(b),y(!0),bx()}catch(b){console.error("Greška pri narudžbi:",b)}L(!1)}const T=["Košarica","Dostava","Plaćanje","Potvrda"];return x()?(()=>{var b=VT(),I=b.firstChild,m=I.firstChild,q=m.firstChild,Z=q.nextSibling,me=Z.nextSibling,ce=me.nextSibling,he=ce.firstChild,ye=he.nextSibling;return ye.firstChild,w(b,N(Fs,{}),I),w(ye,()=>S().slice(0,8).toUpperCase(),null),w(m,N(be,{href:"/catalog",class:"btn-gold px-8 py-3 rounded-lg inline-block",children:"Nastavi kupovinu"}),null),b})():(()=>{var b=KT(),I=b.firstChild,m=I.firstChild,q=m.nextSibling,Z=q.firstChild,me=Z.nextSibling,ce=me.firstChild,he=ce.firstChild,ye=he.nextSibling,$e=ye.firstChild,He=ye.nextSibling,mt=He.firstChild,Ct=mt.firstChild,rt=Ct.nextSibling;rt.firstChild;var ht=mt.nextSibling,Rt=ht.firstChild,gt=Rt.nextSibling,ct=ht.nextSibling,Ft=ct.firstChild,_t=Ft.nextSibling;_t.firstChild;var xt=ct.nextSibling,Pt=xt.firstChild,yt=Pt.nextSibling;return yt.firstChild,w(b,N(Fs,{}),I),w(m,N(Et,{each:T,children:(ee,U)=>(()=>{var H=QT(),te=H.firstChild,M=te.firstChild,z=M.nextSibling;return w(M,(()=>{var Y=Le(()=>n()>U()+1);return()=>Y()?"✓":U()+1})()),w(z,ee),w(H,(()=>{var Y=Le(()=>U()<T.length-1);return()=>Y()&&(()=>{var ie=YT();return K(()=>Ie(ie,`w-16 sm:w-24 h-px mx-2 mb-4 transition-all ${n()>U()+1?"bg-aurum-gold":"bg-aurum-border"}`)),ie})()})(),null),K(Y=>{var ie=`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${n()>U()+1?"bg-green-600 text-white":n()===U()+1?"bg-aurum-gold text-aurum-black":"bg-aurum-dark border border-aurum-border text-aurum-muted"}`,ge=`text-xs mt-1 ${n()===U()+1?"text-aurum-gold":"text-aurum-muted"}`;return ie!==Y.e&&Ie(M,Y.e=ie),ge!==Y.t&&Ie(z,Y.t=ge),Y},{e:void 0,t:void 0}),H})()})),w(Z,N(ae,{get when(){return n()===1},get children(){return[(()=>{var ee=DT();return ee.firstChild,w(ee,N(ae,{get when(){return sn().length===0},get children(){var U=NT();return U.firstChild,w(U,N(be,{href:"/catalog",class:"text-aurum-gold text-sm hover:underline mt-2 inline-block",children:"Idi na katalog"}),null),U}}),null),w(ee,N(Et,{get each(){return sn()},children:U=>(()=>{var H=JT(),te=H.firstChild,M=te.nextSibling,z=M.firstChild,Y=z.nextSibling,ie=M.nextSibling,ge=ie.firstChild,xe=ge.nextSibling,Ge=xe.nextSibling,ke=ie.nextSibling;ke.firstChild;var Ze=ke.nextSibling;return w(z,()=>U.name),w(Y,()=>U.sku),ge.$$click=()=>ch(U.id,U.quantity-1),w(xe,()=>U.quantity),Ge.$$click=()=>ch(U.id,U.quantity+1),w(ke,()=>(U.price*U.quantity).toLocaleString(),null),Ze.$$click=()=>hp(U.id),K(De=>{var Be=U.images?.[0],bn=U.name;return Be!==De.e&&Je(te,"src",De.e=Be),bn!==De.t&&Je(te,"alt",De.t=bn),De},{e:void 0,t:void 0}),H})()}),null),ee})(),(()=>{var ee=FT(),U=ee.firstChild,H=U.firstChild,te=H.nextSibling;return H.$$input=M=>r(M.target.value),te.$$click=_,w(ee,N(ae,{get when(){return a()},get children(){var M=OT();return M.firstChild,w(M,a,null),M}}),null),w(ee,N(ae,{get when(){return s()},get children(){return LT()}}),null),w(ee,N(ae,{get when(){return!Or()},get children(){var M=MT();return M.firstChild,w(M,N(be,{href:"/login",class:"text-aurum-gold hover:underline",children:"Prijavi se"}),null),M}}),null),K(M=>{var z=`input-dark flex-1 px-4 py-2 text-sm ${Or()?"":"opacity-50 cursor-not-allowed"}`,Y=!Or();return z!==M.e&&Ie(H,M.e=z),Y!==M.t&&(H.disabled=M.t=Y),M},{e:void 0,t:void 0}),K(()=>H.value=t()),ee})(),(()=>{var ee=UT();return ee.$$click=()=>e(2),K(()=>ee.disabled=sn().length===0),ee})()]}}),null),w(Z,N(ae,{get when(){return n()===2},get children(){return[(()=>{var ee=jT(),U=ee.firstChild,H=U.nextSibling,te=H.firstChild,M=te.firstChild,z=M.nextSibling,Y=te.nextSibling,ie=Y.firstChild,ge=ie.nextSibling,xe=Y.nextSibling,Ge=xe.firstChild,ke=Ge.nextSibling,Ze=xe.nextSibling,De=Ze.firstChild,Be=De.nextSibling,bn=Ze.nextSibling,vr=bn.firstChild,Xt=vr.nextSibling,br=H.nextSibling,Zt=br.firstChild,en=Zt.nextSibling;return z.$$input=Ce=>B({...k(),fullName:Ce.target.value}),ge.$$input=Ce=>B({...k(),phone:Ce.target.value}),ke.$$input=Ce=>B({...k(),address:Ce.target.value}),Be.$$input=Ce=>B({...k(),city:Ce.target.value}),Xt.$$input=Ce=>B({...k(),postal:Ce.target.value}),w(en,()=>[{value:"standard",label:"Standard — 3–5 business days",price:nr()>100?"Besplatno":"$12.00"},{value:"express",label:"Express — 1–2 business days",price:"$12.00 extra"}].map(Ce=>(()=>{var vt=XT(),tn=vt.firstChild,Ut=tn.nextSibling,Qn=Ut.firstChild,kt=Ut.nextSibling;return tn.addEventListener("change",()=>B({...k(),shipping:Ce.value})),w(Qn,()=>Ce.label),w(kt,()=>Ce.price),K(()=>Ie(vt,`flex items-center gap-3 p-3 rounded border cursor-pointer transition-colors ${k().shipping===Ce.value?"border-aurum-gold bg-aurum-dark":"border-aurum-border hover:border-aurum-muted"}`)),K(()=>tn.value=Ce.value),K(()=>tn.checked=k().shipping===Ce.value),vt})())),K(()=>z.value=k().fullName),K(()=>ge.value=k().phone),K(()=>ke.value=k().address),K(()=>Be.value=k().city),K(()=>Xt.value=k().postal),ee})(),(()=>{var ee=BT(),U=ee.firstChild,H=U.nextSibling;return U.$$click=()=>e(1),H.$$click=()=>e(3),ee})()]}}),null),w(Z,N(ae,{get when(){return n()===3},get children(){return[(()=>{var ee=qT(),U=ee.firstChild,H=U.nextSibling;return w(H,()=>[{value:"visa",label:"Visa ending 4242",sub:"Nikad ne ističe"},{value:"mc",label:"Mastercard ending 8828",sub:"Expires 12/2026"},{value:"amex",label:"American Express ending 3358",sub:"Expires 09/2025"}].map(te=>(()=>{var M=ZT(),z=M.firstChild,Y=z.nextSibling,ie=Y.nextSibling,ge=ie.firstChild,xe=ge.nextSibling;return z.addEventListener("change",()=>g(te.value)),w(Y,(()=>{var Ge=Le(()=>te.value==="visa");return()=>Ge()?"VISA":te.value==="mc"?"MC":"AMEX"})()),w(ge,()=>te.label),w(xe,()=>te.sub),K(()=>Ie(M,`flex items-center gap-3 p-4 rounded border cursor-pointer transition-colors ${f()===te.value?"border-aurum-gold bg-aurum-dark":"border-aurum-border hover:border-aurum-muted"}`)),K(()=>z.checked=f()===te.value),M})())),ee})(),(()=>{var ee=zT(),U=ee.firstChild,H=U.nextSibling;return U.$$click=()=>e(2),H.$$click=()=>e(4),ee})()]}}),null),w(Z,N(ae,{get when(){return n()===4},get children(){return[(()=>{var ee=WT(),U=ee.firstChild,H=U.nextSibling,te=H.firstChild,M=te.firstChild,z=M.nextSibling,Y=z.firstChild,ie=te.nextSibling,ge=ie.firstChild,xe=ge.nextSibling,Ge=ie.nextSibling,ke=Ge.firstChild,Ze=ke.nextSibling;return w(z,()=>k().address,Y),w(z,()=>k().city,null),w(xe,()=>k().shipping==="express"?"Express":"Standard"),w(Ze,f),ee})(),(()=>{var ee=HT(),U=ee.firstChild,H=U.nextSibling;return U.$$click=()=>e(3),H.$$click=v,w(H,()=>P()?"Obrađujem...":"✓ Naruči"),K(()=>H.disabled=P()),ee})()]}}),null),w(ye,()=>sn().length,$e),w(ye,()=>sn().length===1?"artikl":"artikala",null),w(ce,N(Et,{get each(){return sn()},children:ee=>(()=>{var U=eI(),H=U.firstChild,te=H.nextSibling,M=te.nextSibling;return M.firstChild,w(te,()=>ee.name),w(M,()=>(ee.price*ee.quantity).toLocaleString(),null),K(()=>Je(H,"src",ee.images?.[0])),U})()}),He),w(rt,()=>nr().toLocaleString(),null),w(He,N(ae,{get when(){return s()},get children(){var ee=GT(),U=ee.firstChild,H=U.nextSibling;return H.firstChild,w(H,()=>F().toFixed(2),null),ee}}),ht),w(gt,(()=>{var ee=Le(()=>W()===0);return()=>ee()?tI():`$${W().toFixed(2)}`})()),w(_t,()=>O().toFixed(2),null),w(yt,()=>E().toFixed(2),null),b})()}Mt(["input","click"]);var nI=$('<button type=submit class="btn-gold w-full py-2.5 rounded-lg text-sm">Spremi promjene'),rI=$('<p class="text-green-400 text-xs text-center">✓ Promjene su spremljene'),sI=$('<div class="card-dark p-6 max-w-lg"><div class="flex items-center justify-between mb-6"><h2 class="section-title text-base">Osobni podaci</h2><button class="text-xs text-aurum-gold border border-aurum-gold px-3 py-1.5 rounded hover:bg-aurum-gold hover:text-aurum-black transition-all"></button></div><form class=space-y-4>'),iI=$('<p class="text-aurum-muted text-sm">Nemaš još narudžbi.'),oI=$('<div class=space-y-4><h2 class="section-title text-base mb-4">Povijest narudžbi'),aI=$('<div class="card-dark p-6 max-w-lg"><h2 class="section-title text-base mb-4">Adrese dostave</h2><div class="border border-aurum-gold rounded-lg p-4 mb-4"><div class="flex items-center justify-between mb-2"><span class="text-xs badge-exclusive">Zadana</span></div><p class="text-aurum-text text-sm"></p><p class="text-aurum-muted text-sm">Ilica 1, Zagreb, 10000, Croatia</p></div><button class="text-aurum-gold text-xs border border-aurum-border px-4 py-2 rounded hover:border-aurum-gold transition-colors">+ Dodaj novu adresu'),lI=$('<div class="card-dark p-6 max-w-lg"><h2 class="section-title text-base mb-6">Sigurnost</h2><div class=space-y-4><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Trenutna lozinka</label><input type=password class="input-dark w-full px-4 py-2.5 text-sm"placeholder=••••••••></div><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Nova lozinka</label><input type=password class="input-dark w-full px-4 py-2.5 text-sm"placeholder=••••••••></div><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Potvrdi novu lozinku</label><input type=password class="input-dark w-full px-4 py-2.5 text-sm"placeholder=••••••••></div><button class="btn-gold w-full py-2.5 rounded-lg text-sm">Promijeni lozinku</button></div><div class="mt-6 pt-6 border-t border-aurum-border"><button class="text-red-400 text-sm hover:text-red-300 transition-colors">Odjava s računa →'),cI=$('<div class="min-h-screen bg-aurum-black"><div class="max-w-5xl mx-auto px-4 py-10 page-enter"><div class="flex items-center gap-4 mb-8"><div class="w-16 h-16 bg-aurum-gold rounded-full flex items-center justify-center"><span class="text-aurum-black font-display font-black text-2xl"></span></div><div><h1 class="font-display text-2xl font-bold text-white"></h1><p class="text-aurum-muted text-sm"></p><span></span></div></div><div class="flex border-b border-aurum-border mb-8 overflow-x-auto">'),uI=$("<button>"),hI=$('<div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5"></label><input type=text>'),dI=$('<div class="card-dark p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"><div><p class="font-bold text-aurum-gold">#</p><p class="text-aurum-muted text-sm"></p><p class="text-aurum-muted text-xs"></p></div><div class=text-right><p class="text-aurum-gold font-bold">$</p><span>');function fI(){const n=gn(),[e,t]=X("profile"),[r,s]=X(!1),[i,a]=X(!1);if(!Or())return n("/login"),null;Us(()=>za());const[l,u]=X({name:ut()?.name||"",email:ut()?.email||"",phone:"",address:""});async function h(x){x.preventDefault();try{await mx({name:l().name,address:l().address}),a(!0),s(!1),setTimeout(()=>a(!1),2e3)}catch(y){console.error("Greška pri ažuriranju:",y)}}const f=["profile","orders","addresses","security"],g={profile:"Profil",orders:"Narudžbe",addresses:"Adrese",security:"Sigurnost"};return(()=>{var x=cI(),y=x.firstChild,S=y.firstChild,R=S.firstChild,P=R.firstChild,L=R.nextSibling,k=L.firstChild,B=k.nextSibling,F=B.nextSibling,W=S.nextSibling;return w(x,N(Fs,{}),y),w(P,()=>ut()?.name?.charAt(0)),w(k,()=>ut()?.name),w(B,()=>ut()?.email),w(F,()=>ut()?.role==="admin"?"Administrator":"Korisnik"),w(W,()=>f.map(O=>(()=>{var E=uI();return E.$$click=()=>t(O),w(E,()=>g[O]),K(()=>Ie(E,`px-5 py-3 text-sm font-display tracking-wider whitespace-nowrap transition-colors ${e()===O?"text-aurum-gold border-b-2 border-aurum-gold":"text-aurum-muted hover:text-aurum-text"}`)),E})())),w(y,N(ae,{get when(){return e()==="profile"},get children(){var O=sI(),E=O.firstChild,_=E.firstChild,v=_.nextSibling,T=E.nextSibling;return v.$$click=()=>s(!r()),w(v,()=>r()?"Odustani":"Uredi"),T.addEventListener("submit",h),w(T,()=>[{key:"name",label:"Ime i prezime"},{key:"email",label:"Email"},{key:"phone",label:"Telefon"},{key:"address",label:"Adresa"}].map(b=>(()=>{var I=hI(),m=I.firstChild,q=m.nextSibling;return w(m,()=>b.label),q.$$input=Z=>u({...l(),[b.key]:Z.target.value}),K(Z=>{var me=!r(),ce=`input-dark w-full px-4 py-2.5 text-sm ${r()?"":"opacity-60 cursor-not-allowed"}`;return me!==Z.e&&(q.disabled=Z.e=me),ce!==Z.t&&Ie(q,Z.t=ce),Z},{e:void 0,t:void 0}),K(()=>q.value=l()[b.key]),I})()),null),w(T,N(ae,{get when(){return r()},get children(){return nI()}}),null),w(T,N(ae,{get when(){return i()},get children(){return rI()}}),null),O}}),null),w(y,N(ae,{get when(){return e()==="orders"},get children(){var O=oI();return O.firstChild,w(O,N(ae,{get when(){return qa().length===0},get children(){return iI()}}),null),w(O,N(Et,{get each(){return qa()},children:E=>(()=>{var _=dI(),v=_.firstChild,T=v.firstChild;T.firstChild;var b=T.nextSibling,I=b.nextSibling,m=v.nextSibling,q=m.firstChild;q.firstChild;var Z=q.nextSibling;return w(T,()=>E.id?.slice(0,8).toUpperCase(),null),w(b,()=>E.items?.map(me=>me.name).join(", ")||"Artikli"),w(I,()=>E.shippingAddress?.city||""),w(q,()=>Number(E.total||0).toFixed(2),null),w(Z,()=>E.status||"Processing"),K(()=>Ie(Z,`text-xs px-2 py-0.5 rounded-full ${E.status==="Delivered"?"bg-green-900 text-green-400":E.status==="Processing"?"bg-yellow-900 text-yellow-400":E.status==="Shipped"?"bg-blue-900 text-blue-400":"bg-aurum-dark text-aurum-muted"}`)),_})()}),null),O}}),null),w(y,N(ae,{get when(){return e()==="addresses"},get children(){var O=aI(),E=O.firstChild,_=E.nextSibling,v=_.firstChild,T=v.nextSibling;return w(T,()=>ut()?.name),O}}),null),w(y,N(ae,{get when(){return e()==="security"},get children(){var O=lI(),E=O.firstChild,_=E.nextSibling,v=_.nextSibling,T=v.firstChild;return T.$$click=()=>{oo(),n("/login")},O}}),null),w(x,N(ql,{}),null),K(()=>Ie(F,`text-xs px-2 py-0.5 rounded-full mt-1 inline-block ${ut()?.role==="admin"?"bg-aurum-gold text-aurum-black font-bold":"bg-aurum-dark border border-aurum-border text-aurum-muted"}`)),x})()}Mt(["click","input"]);var pI=$('<div class="min-h-screen bg-aurum-black flex flex-col"><div class="bg-aurum-dark border-b border-aurum-border px-4 py-2 flex items-center justify-between text-xs"><div class="flex items-center gap-3"><div class="flex items-center gap-2"><div class="w-6 h-6 bg-aurum-gold rounded-full flex items-center justify-center"><span class="text-aurum-black font-black text-xs">A</span></div><span class="font-display font-bold text-aurum-gold tracking-widest">AurumVault</span></div><span class="text-red-400 border border-red-400/30 px-2 py-0.5 rounded">🔒 Secure Admin Area</span><span class=text-aurum-muted>2-Step Verification: Enabled</span><span class=text-green-400>Session active • Expires in <span class=font-bold></span></span></div><div class="flex items-center gap-4"><div class=text-right><p class="text-aurum-text font-bold"></p><p class="text-aurum-gold text-xs">Role: Super Admin</p></div><button class="border border-aurum-border text-aurum-muted px-3 py-1 rounded hover:border-red-400 hover:text-red-400 transition-colors">Logout</button></div></div><div class="flex flex-1 overflow-hidden"><aside class="w-48 bg-aurum-dark border-r border-aurum-border flex flex-col p-4"><div class="text-xs text-aurum-muted uppercase tracking-widest mb-3">Navigation <span class=text-aurum-gold>v1.3</span></div><div class="mt-6 pt-4 border-t border-aurum-border"><div class="text-xs text-aurum-muted uppercase tracking-widest mb-2">Security</div><div class="flex items-center gap-2 text-xs text-green-400 mb-3"><span class="w-2 h-2 bg-green-400 rounded-full"></span>Audit Trail Live</div><div class="text-xs text-aurum-muted uppercase tracking-widest mb-2">Quick Role Controls</div></div></aside><main class="flex-1 overflow-y-auto p-6"><div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6"></div><div class="grid grid-cols-1 xl:grid-cols-3 gap-6"><div class="xl:col-span-2 card-dark p-5"><div class="flex items-center justify-between mb-4"><h2 class="section-title text-base">Latest transactions</h2><span class="text-aurum-muted text-xs">Showing 4 of 48</span></div><div class=space-y-3></div></div><div class=space-y-4><div class="card-dark p-5"><h3 class="section-title text-sm mb-4">Quick Actions</h3><div class=space-y-2><button class="flex items-center gap-2 border border-aurum-border text-aurum-text text-sm px-4 py-2.5 rounded w-full hover:border-aurum-gold transition-colors">🏷 Create Promotion</button><button class="flex items-center gap-2 border border-aurum-border text-aurum-text text-sm px-4 py-2.5 rounded w-full hover:border-aurum-gold transition-colors">👥 Manage Roles</button></div></div><div class="card-dark p-5"><div class="flex items-center justify-between mb-3"><h3 class="section-title text-sm">Audit Trail</h3><span class="text-xs text-aurum-muted">5 events</span></div><div class=space-y-3></div></div></div></div><div class="card-dark p-5 mt-6"><div class="flex items-center justify-between mb-4"><h2 class="section-title text-base">Items needing restock</h2><span class="text-aurum-muted text-xs">Last updated 5m ago</span></div><div class=space-y-3></div></div><div class="mt-6 border border-aurum-gold/30 bg-aurum-gold/5 rounded-lg p-4 text-xs text-aurum-muted"><span class="text-aurum-gold font-bold">Security Notice</span><p class="mt-1 leading-relaxed">This admin area requires a separate admin password and two-factor authentication. All actions are logged and changes to roles trigger audit notifications. If you did not initiate recent changes, contact Security at <a href=mailto:security@aurumvault.com class="text-aurum-gold hover:underline">security@aurumvault.com</a> immediately.</p></div></main><div class="w-48 bg-aurum-dark border-l border-aurum-border p-4 hidden xl:block"><h4 class="text-xs text-aurum-muted uppercase tracking-widest mb-3">Role-Based Controls</h4><div class="mt-6 pt-4 border-t border-aurum-border card-dark p-3"><h4 class="text-xs text-aurum-muted uppercase tracking-widest mb-2">Session Timeout</h4><p class="text-xs text-aurum-muted leading-relaxed">Your session will expire in <span class="text-aurum-gold font-bold"></span> and be logged out automatically for inactivity.</p><div class="flex flex-col gap-2 mt-3"><button class="btn-gold py-1.5 rounded text-xs">Extend Session</button><button class="border border-aurum-border text-aurum-muted py-1.5 rounded text-xs hover:border-red-400 hover:text-red-400 transition-colors">Logout Now'),mI=$("<button><span></span> "),gI=$('<div class="flex items-center justify-between mb-2"><span class="text-xs text-aurum-text"></span><div>'),_I=$('<div class="card-dark p-5 flex items-start justify-between"><div><p class="text-aurum-muted text-xs uppercase tracking-widest"></p><p></p><p class="text-aurum-muted text-xs mt-1"></p></div><span class=text-2xl>'),yI=$('<p class="text-aurum-muted text-sm text-center py-6">Nema narudžbi'),vI=$('<div class="flex items-center gap-3 py-3 border-b border-aurum-border last:border-0"><div class="w-10 h-10 bg-aurum-muted rounded overflow-hidden flex items-center justify-center"><span class=text-xs>📦</span></div><div class=flex-1><p class="text-aurum-text text-sm font-bold">Order #</p><p class="text-aurum-muted text-xs"> · </p></div><span class="text-aurum-gold font-bold text-sm">$</span><select class="input-dark text-xs px-2 py-1 rounded">'),bI=$("<option>"),wI=$('<div><p class=leading-relaxed></p><p class="text-aurum-muted mt-0.5">'),EI=$('<div class="flex items-center gap-4"><div class="w-10 h-10 bg-aurum-muted rounded flex items-center justify-center text-xs">📦</div><div class=flex-1><p class="text-aurum-text text-sm font-medium"></p><p class="text-aurum-muted text-xs">SKU: <!> · <!> units left</p></div><span>'),xI=$('<div class="flex items-center justify-between mb-3"><span class="text-xs text-aurum-text leading-tight pr-2"></span><div>');function TI(){const n=gn(),[e,t]=X("dashboard"),[r]=X("12m 34s");if(!si())return n("/login"),null;Us(()=>za());async function s(u,h){await io(hn(pt,"orders",u),{status:h}),await za()}const i=[{label:"Sales Today",value:"$18,742",change:"+8.6% vs yesterday",icon:"💰",color:"text-aurum-gold"},{label:"Orders Pending",value:"48",change:"3 high priority",icon:"📦",color:"text-yellow-400"},{label:"Inventory Alerts",value:"7",change:"4 critical",icon:"⚠",color:"text-red-400"}],a=[{name:"Auric Wireless Headphones",sku:"AW-233",stock:2,level:"CRITICAL"},{name:"Goldline Charging Dock",sku:"GL-10",stock:3,level:"LOW"},{name:"Lumen Smart Lamp",sku:"SL-L-11",stock:5,level:"LOW"}],l=[{text:"Sabrina Ortega updated product: Auric Wireless Headphones",time:"28 Feb 2026 · 0:02 · IP 192.168.2.14",type:"info"},{text:"Role change: Leila Morgan promoted to Manager",time:"28 Feb 2026 · 0:01 · IP 192.168.5.235",type:"warning"},{text:"System: Failed login attempt blocked (3 attempts)",time:"28 Feb 2026 · 03:05 · IP 87.240.23.10",type:"error"}];return(()=>{var u=pI(),h=u.firstChild,f=h.firstChild,g=f.firstChild,x=g.nextSibling,y=x.nextSibling,S=y.nextSibling,R=S.firstChild,P=R.nextSibling,L=f.nextSibling,k=L.firstChild,B=k.firstChild,F=k.nextSibling,W=h.nextSibling,O=W.firstChild,E=O.firstChild,_=E.nextSibling,v=_.firstChild,T=v.nextSibling;T.nextSibling;var b=O.nextSibling,I=b.firstChild,m=I.nextSibling,q=m.firstChild,Z=q.firstChild,me=Z.nextSibling,ce=q.nextSibling,he=ce.firstChild,ye=he.firstChild,$e=ye.nextSibling,He=$e.firstChild,mt=he.nextSibling,Ct=mt.firstChild,rt=Ct.nextSibling,ht=m.nextSibling,Rt=ht.firstChild,gt=Rt.nextSibling,ct=b.nextSibling,Ft=ct.firstChild,_t=Ft.nextSibling,xt=_t.firstChild,Pt=xt.nextSibling,yt=Pt.firstChild,ee=yt.nextSibling,U=Pt.nextSibling,H=U.firstChild,te=H.nextSibling;return w(P,r),w(B,()=>ut()?.name),F.$$click=()=>{oo(),n("/login")},w(O,()=>[{key:"dashboard",icon:"📊",label:"Products"},{key:"orders",icon:"📦",label:"Orders"},{key:"customers",icon:"👥",label:"Customers"},{key:"promotions",icon:"🏷",label:"Promotions"},{key:"settings",icon:"⚙",label:"Settings"}].map(M=>(()=>{var z=mI(),Y=z.firstChild;return Y.nextSibling,z.$$click=()=>t(M.key),w(Y,()=>M.icon),w(z,()=>M.label,null),K(()=>Ie(z,`flex items-center gap-2 px-3 py-2.5 rounded text-sm mb-1 transition-colors w-full text-left ${e()===M.key?"bg-aurum-gold text-aurum-black font-bold":"text-aurum-muted hover:text-aurum-text hover:bg-aurum-card"}`)),z})()),_),w(_,()=>[{role:"Manager",active:!0},{role:"Auditor",active:!1}].map(M=>(()=>{var z=gI(),Y=z.firstChild,ie=Y.nextSibling;return w(Y,()=>M.role),K(()=>Ie(ie,`w-8 h-4 rounded-full ${M.active?"bg-aurum-gold":"bg-aurum-muted"}`)),z})()),null),w(I,()=>i.map(M=>(()=>{var z=_I(),Y=z.firstChild,ie=Y.firstChild,ge=ie.nextSibling,xe=ge.nextSibling,Ge=Y.nextSibling;return w(ie,()=>M.label),w(ge,()=>M.value),w(xe,()=>M.change),w(Ge,()=>M.icon),K(()=>Ie(ge,`font-display text-2xl font-bold mt-1 ${M.color}`)),z})())),w(me,N(Et,{get each(){return qa()},get fallback(){return yI()},children:M=>(()=>{var z=vI(),Y=z.firstChild,ie=Y.nextSibling,ge=ie.firstChild;ge.firstChild;var xe=ge.nextSibling,Ge=xe.firstChild,ke=ie.nextSibling;ke.firstChild;var Ze=ke.nextSibling;return w(ge,()=>M.id?.slice(0,8).toUpperCase(),null),w(xe,()=>M.shippingAddress?.fullName||"Gost",Ge),w(xe,()=>M.shippingAddress?.city||"",null),w(ke,()=>Number(M.total||0).toFixed(2),null),Ze.addEventListener("change",De=>s(M.id,De.target.value)),w(Ze,()=>["Processing","Awaiting Fulfillment","Shipped","Delivered","Cancelled"].map(De=>(()=>{var Be=bI();return Be.value=De,w(Be,De),Be})())),K(()=>Ze.value=M.status||"Processing"),z})()})),w($e,N(be,{href:"/admin/products/new",class:"flex items-center gap-2 bg-aurum-gold text-aurum-black text-sm font-bold px-4 py-2.5 rounded w-full hover:bg-yellow-300 transition-colors",children:"+ Add New Product"}),He),w(rt,()=>l.map(M=>(()=>{var z=wI(),Y=z.firstChild,ie=Y.nextSibling;return w(Y,()=>M.text),w(ie,()=>M.time),K(()=>Ie(z,`text-xs border-l-2 pl-3 ${M.type==="error"?"border-red-500 text-red-400":M.type==="warning"?"border-yellow-500 text-yellow-400":"border-aurum-gold text-aurum-text"}`)),z})())),w(gt,()=>a.map(M=>(()=>{var z=EI(),Y=z.firstChild,ie=Y.nextSibling,ge=ie.firstChild,xe=ge.nextSibling,Ge=xe.firstChild,ke=Ge.nextSibling,Ze=ke.nextSibling,De=Ze.nextSibling;De.nextSibling;var Be=ie.nextSibling;return w(ge,()=>M.name),w(xe,()=>M.sku,ke),w(xe,()=>M.stock,De),w(Be,()=>M.level),K(()=>Ie(Be,`text-xs font-bold px-2 py-0.5 rounded-full ${M.level==="CRITICAL"?"text-red-400 bg-red-900/30":"text-yellow-400 bg-yellow-900/30"}`)),z})())),w(ct,()=>[{label:"Grant product edit",active:!0},{label:"Allow promotions create",active:!1}].map(M=>(()=>{var z=xI(),Y=z.firstChild,ie=Y.nextSibling;return w(Y,()=>M.label),K(()=>Ie(ie,`w-8 h-4 rounded-full flex-shrink-0 ${M.active?"bg-aurum-gold":"bg-aurum-muted"}`)),z})()),_t),w(ee,r),te.$$click=()=>{oo(),n("/login")},u})()}Mt(["click"]);var II=$('<div class="w-6 h-6 bg-aurum-gold rounded-full flex items-center justify-center"><span class="text-aurum-black font-black text-xs">A'),AI=$('<span class="font-display font-bold text-aurum-gold tracking-widest hidden sm:block">AurumVault'),SI=$('<div class="border-2 border-dashed border-aurum-border rounded-lg p-8 text-center text-aurum-muted text-sm">Dodaj URL slike gore ↑'),CI=$('<div class="bg-red-900/30 border border-red-500 rounded-lg p-3 text-red-400 text-xs">⚠ '),RI=$('<div class="bg-green-900/30 border border-green-500 rounded-lg p-3 text-green-400 text-xs">✓ Proizvod je spremljen kao draft.'),PI=$('<img alt class="w-full h-full object-cover">'),kI=$('<span class="badge-exclusive mb-2 inline-block">'),$I=$('<button class="w-full border border-red-500/30 text-red-400 py-2.5 rounded text-sm hover:bg-red-900/20 transition-colors disabled:opacity-50">'),VI=$('<div class="min-h-screen bg-aurum-black"><div class="bg-aurum-dark border-b border-aurum-border px-4 py-3 flex items-center justify-between"><div class="flex items-center gap-4 text-sm"><span class=text-aurum-muted>›</span><span class=text-aurum-muted>›</span><span class="text-aurum-text text-xs"></span></div></div><div class="max-w-7xl mx-auto px-4 py-8"><div class="flex items-center gap-4 mb-8"><h1 class="font-display text-2xl font-bold text-white"></h1><span class="text-xs border border-yellow-500 text-yellow-500 px-2 py-0.5 rounded">⚠ Inline validation enabled</span></div><div class="grid grid-cols-1 xl:grid-cols-3 gap-8"><div class="xl:col-span-2 space-y-6"><div class="card-dark p-6"><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Naziv proizvoda <span class=text-red-400>*</span></label><input type=text class="input-dark w-full px-4 py-3 text-sm font-medium"placeholder="Unesi naziv proizvoda"></div><div class="card-dark p-6"><div class="grid grid-cols-2 gap-4"><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">SKU</label><input type=text class="input-dark w-full px-4 py-2.5 text-sm"placeholder=AV-XXX-000></div><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Cijena (USD) <span class=text-red-400>*</span></label><input type=number class="input-dark w-full px-4 py-2.5 text-sm"placeholder=0></div><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Cijena na rasprodaji</label><input type=number class="input-dark w-full px-4 py-2.5 text-sm"placeholder="Ostavi prazno ako nema"></div><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Zaliha</label><input type=number class="input-dark w-full px-4 py-2.5 text-sm"placeholder=0></div></div></div><div class="card-dark p-6"><div class="grid grid-cols-1 sm:grid-cols-2 gap-6"><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-2">Tagovi / Badge</label><div class="flex flex-wrap gap-2 mb-3"></div><input type=text placeholder="Dodaj tag i pritisni Enter"class="input-dark w-full px-4 py-2.5 text-sm"></div><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-2">Primarna kategorija</label><select class="input-dark w-full px-3 py-2.5 text-sm"></select><label class="flex items-center gap-2 mt-4 cursor-pointer"><input type=checkbox class="checkbox checkbox-warning checkbox-sm"><span class="text-sm text-aurum-text">Samo za članove</span></label></div></div></div><div class="card-dark p-6"><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-2">Opis proizvoda</label><textarea rows=5 class="input-dark w-full px-4 py-3 text-sm resize-none"placeholder="Opiši proizvod s detaljima, materijalima..."></textarea></div><div class="card-dark p-6"><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-3">Slike (URL)</label><div class="flex gap-2 mb-4"><input type=url placeholder="https://... URL slike"class="input-dark flex-1 px-4 py-2.5 text-sm"><button class="btn-gold px-4 py-2.5 text-sm rounded">Dodaj</button></div><div class="grid grid-cols-3 gap-3"></div></div></div><div class=space-y-4><div class="card-dark p-4"><h3 class="text-xs text-aurum-muted uppercase tracking-widest mb-3">Preview</h3><div class="bg-aurum-dark rounded-lg overflow-hidden"><div class="aspect-square bg-aurum-muted flex items-center justify-center overflow-hidden"></div><div class=p-3><p class="text-aurum-text text-xs font-medium"></p><p class="text-aurum-muted text-xs"></p><div class="flex items-center gap-2 mt-1"><span class="text-aurum-gold font-bold text-sm">$</span></div></div></div></div><div class="card-dark p-4 space-y-3"><button class="w-full border border-aurum-border text-aurum-text py-2.5 rounded text-sm hover:border-aurum-gold transition-colors disabled:opacity-50"></button><button class="w-full btn-gold py-2.5 rounded text-sm disabled:opacity-50"></button></div><div class="card-dark p-4 text-xs text-aurum-muted space-y-2"><p>📦 Kategorija: <span class=text-aurum-text></span></p><p>👥 Samo članovi: <span class=text-aurum-text></span></p><p>🖼 Slike: <span class=text-aurum-text>'),NI=$('<span class="badge-exclusive flex items-center gap-1"><button class="hover:text-red-300 ml-1">×'),DI=$("<option>"),OI=$('<div class="relative group"><img alt class="w-full aspect-square object-cover rounded border border-aurum-border"><button class="absolute top-1 right-1 bg-red-600 text-white w-5 h-5 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity">×'),LI=$('<p class="text-aurum-muted text-xs">Nema slike'),MI=$('<span class="text-aurum-muted text-xs line-through">$');function dh(){const n=Rh(),e=gn(),t=!!n.id;if(!si())return e("/login"),null;const[r,s]=X(!1),[i,a]=X(!1),[l,u]=X(!1),[h,f]=X(!1),[g,x]=X(""),[y,S]=X({title:"",sku:"",price:"",salePrice:"",inventory:"",description:"",tags:[],primaryCat:"Accessories",images:[],membersOnly:!1});Us(async()=>{if(t){lr().length===0&&await Rr();const O=lr().find(E=>E.id===n.id);O&&S({title:O.name||"",sku:O.sku||"",price:O.price||"",salePrice:O.salePrice||"",inventory:O.stock||"",description:O.description||"",tags:O.badge?[O.badge]:[],primaryCat:O.category||"Accessories",images:O.images||[],membersOnly:O.membersOnly||!1})}});async function R(){f(!0),x("");try{const O=k();t?await io(hn(pt,"products",n.id),O):await ja(qr(pt,"products"),{...O,createdAt:As()}),s(!0),await Rr(),setTimeout(()=>s(!1),2e3)}catch(O){x("Greška pri spremanju: "+O.message)}f(!1)}async function P(){f(!0),x("");try{const O={...k(),published:!0};t?await io(hn(pt,"products",n.id),O):await ja(qr(pt,"products"),{...O,createdAt:As()}),a(!0),await Rr(),setTimeout(()=>e("/admin"),1500)}catch(O){x("Greška pri objavi: "+O.message)}f(!1)}async function L(){if(confirm("Jesi li siguran/na da želiš obrisati ovaj proizvod?")){u(!0);try{await ox(hn(pt,"products",n.id)),await Rr(),e("/admin")}catch(O){x("Greška pri brisanju: "+O.message)}u(!1)}}function k(){return{name:y().title,sku:y().sku,price:Number(y().price)||0,salePrice:y().salePrice?Number(y().salePrice):null,stock:Number(y().inventory)||0,description:y().description,badge:y().tags[0]||null,category:y().primaryCat,images:y().images,membersOnly:y().membersOnly,sizes:[],updatedAt:As()}}const[B,F]=X("");function W(){B().trim()&&(S({...y(),images:[...y().images,B().trim()]}),F(""))}return(()=>{var O=VI(),E=O.firstChild,_=E.firstChild,v=_.firstChild,T=v.nextSibling,b=T.nextSibling,I=E.nextSibling,m=I.firstChild,q=m.firstChild,Z=m.nextSibling,me=Z.firstChild,ce=me.firstChild,he=ce.firstChild,ye=he.nextSibling,$e=ce.nextSibling,He=$e.firstChild,mt=He.firstChild,Ct=mt.firstChild,rt=Ct.nextSibling,ht=mt.nextSibling,Rt=ht.firstChild,gt=Rt.nextSibling,ct=ht.nextSibling,Ft=ct.firstChild,_t=Ft.nextSibling,xt=ct.nextSibling,Pt=xt.firstChild,yt=Pt.nextSibling,ee=$e.nextSibling,U=ee.firstChild,H=U.firstChild,te=H.firstChild,M=te.nextSibling,z=M.nextSibling,Y=H.nextSibling,ie=Y.firstChild,ge=ie.nextSibling,xe=ge.nextSibling,Ge=xe.firstChild,ke=ee.nextSibling,Ze=ke.firstChild,De=Ze.nextSibling,Be=ke.nextSibling,bn=Be.firstChild,vr=bn.nextSibling,Xt=vr.firstChild,br=Xt.nextSibling,Zt=vr.nextSibling,en=me.nextSibling,Ce=en.firstChild,vt=Ce.firstChild,tn=vt.nextSibling,Ut=tn.firstChild,Qn=Ut.nextSibling,kt=Qn.firstChild,Xr=kt.nextSibling,Ke=Xr.nextSibling,Zr=Ke.firstChild;Zr.firstChild;var nn=Ce.nextSibling,jt=nn.firstChild,es=jt.nextSibling,$o=nn.nextSibling,rn=$o.firstChild,Vo=rn.firstChild,No=Vo.nextSibling,Yn=rn.nextSibling,ii=Yn.firstChild,oi=ii.nextSibling,ts=Yn.nextSibling,Jn=ts.firstChild,Do=Jn.nextSibling;return w(_,N(be,{href:"/admin",class:"flex items-center gap-2",get children(){return[II(),AI()]}}),v),w(_,N(be,{href:"/admin",class:"text-aurum-muted hover:text-aurum-gold text-xs",children:"Admin"}),T),w(b,t?"Uredi proizvod":"Novi proizvod"),w(E,N(be,{href:"/admin",class:"text-xs text-aurum-muted hover:text-aurum-gold transition-colors",children:"← Nazad"}),null),w(q,t?"Uredi proizvod":"Dodaj novi proizvod"),ye.$$input=J=>S({...y(),title:J.target.value}),rt.$$input=J=>S({...y(),sku:J.target.value}),gt.$$input=J=>S({...y(),price:J.target.value}),_t.$$input=J=>S({...y(),salePrice:J.target.value}),yt.$$input=J=>S({...y(),inventory:J.target.value}),w(M,N(Et,{get each(){return y().tags},children:J=>(()=>{var qe=NI(),$t=qe.firstChild;return w(qe,J,$t),$t.$$click=()=>S({...y(),tags:y().tags.filter(wn=>wn!==J)}),qe})()})),z.$$keydown=J=>{J.key==="Enter"&&J.target.value.trim()&&(S({...y(),tags:[...y().tags,J.target.value.trim()]}),J.target.value="",J.preventDefault())},ge.addEventListener("change",J=>S({...y(),primaryCat:J.target.value})),w(ge,()=>["Rings","Necklaces","Watches","Accessories","Art Objects"].map(J=>(()=>{var qe=DI();return qe.value=J,w(qe,J),qe})())),Ge.addEventListener("change",J=>S({...y(),membersOnly:J.target.checked})),De.$$input=J=>S({...y(),description:J.target.value}),Xt.$$input=J=>F(J.target.value),br.$$click=W,w(Zt,N(Et,{get each(){return y().images},children:(J,qe)=>(()=>{var $t=OI(),wn=$t.firstChild,ns=wn.nextSibling;return Je(wn,"src",J),ns.$$click=()=>S({...y(),images:y().images.filter((Oo,Lo)=>Lo!==qe())}),$t})()})),w(Be,N(ae,{get when(){return y().images.length===0},get children(){return SI()}}),null),w(en,N(ae,{get when(){return g()},get children(){var J=CI();return J.firstChild,w(J,g,null),J}}),Ce),w(en,N(ae,{get when(){return r()},get children(){return RI()}}),Ce),w(Ut,N(ae,{get when(){return y().images[0]},get fallback(){return LI()},get children(){var J=PI();return K(()=>Je(J,"src",y().images[0])),J}})),w(Qn,N(ae,{get when(){return y().tags.length>0},get children(){var J=kI();return w(J,()=>y().tags[0]),J}}),kt),w(kt,()=>y().title||"Naziv proizvoda"),w(Xr,()=>y().sku),w(Zr,()=>y().salePrice||y().price||"0",null),w(Ke,(()=>{var J=Le(()=>!!y().salePrice);return()=>J()&&(()=>{var qe=MI();return qe.firstChild,w(qe,()=>y().price,null),qe})()})(),null),jt.$$click=R,w(jt,()=>h()?"Sprema...":"💾 Spremi draft"),es.$$click=P,w(es,(()=>{var J=Le(()=>!!i());return()=>J()?"✓ Objavljeno!":h()?"Objavljuje...":"🚀 Objavi"})()),w(nn,N(ae,{when:t,get children(){var J=$I();return J.$$click=L,w(J,()=>l()?"Briše...":"🗑 Obriši proizvod"),K(()=>J.disabled=l()),J}}),null),w(No,()=>y().primaryCat),w(oi,()=>y().membersOnly?"Da":"Ne"),w(Do,()=>y().images.length),K(J=>{var qe=h(),$t=h();return qe!==J.e&&(jt.disabled=J.e=qe),$t!==J.t&&(es.disabled=J.t=$t),J},{e:void 0,t:void 0}),K(()=>ye.value=y().title),K(()=>rt.value=y().sku),K(()=>gt.value=y().price),K(()=>_t.value=y().salePrice),K(()=>yt.value=y().inventory),K(()=>ge.value=y().primaryCat),K(()=>Ge.checked=y().membersOnly),K(()=>De.value=y().description),K(()=>Xt.value=B()),O})()}Mt(["input","keydown","click"]);function FI(){return N(Fm,{get children(){return[N(zt,{path:"/",component:Ax}),N(zt,{path:"/catalog",component:nT}),N(zt,{path:"/product/:id",component:_T}),N(zt,{path:"/login",component:$T}),N(zt,{path:"/checkout",component:hh}),N(zt,{path:"/cart",component:hh}),N(zt,{path:"/profile",component:fI}),N(zt,{path:"/admin",component:TI}),N(zt,{path:"/admin/products/new",component:dh}),N(zt,{path:"/admin/products/edit/:id",component:dh})]}})}Zp(()=>N(FI,{}),document.getElementById("root"));
