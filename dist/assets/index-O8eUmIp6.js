(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const Qp=!1,Jp=(n,e)=>n===e,zi=Symbol("solid-proxy"),kh=typeof Proxy=="function",Xp=Symbol("solid-track"),Bi={equals:Jp};let Ch=Lh;const nr=1,qi=2,Rh={owned:null,cleanups:null,context:null,owner:null};var Re=null;let ao=null,Yp=null,je=null,Pt=null,bn=null,_a=0;function Rs(n,e){const t=je,r=Re,s=n.length===0,i=e===void 0?r:e,o=s?Rh:{owned:null,cleanups:null,context:i?i.context:null,owner:i},l=s?n:()=>n(()=>Ft(()=>Os(o)));Re=o,je=null;try{return rr(l,!0)}finally{je=t,Re=r}}function Q(n,e){e=e?Object.assign({},Bi,e):Bi;const t={value:n,observers:null,observerSlots:null,comparator:e.equals||void 0},r=s=>(typeof s=="function"&&(s=s(t.value)),Oh(t,s));return[Dh.bind(t),r]}function z(n,e,t){const r=sl(n,e,!1,nr);Qs(r)}function Ph(n,e,t){Ch=rm;const r=sl(n,e,!1,nr);r.user=!0,bn?bn.push(r):Qs(r)}function De(n,e,t){t=t?Object.assign({},Bi,t):Bi;const r=sl(n,e,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=t.equals||void 0,Qs(r),Dh.bind(r)}function Zp(n){return rr(n,!1)}function Ft(n){if(je===null)return n();const e=je;je=null;try{return n()}finally{je=e}}function tl(n,e,t){const r=Array.isArray(n);let s,i=t&&t.defer;return o=>{let l;if(r){l=Array(n.length);for(let h=0;h<n.length;h++)l[h]=n[h]()}else l=n();if(i)return i=!1,o;const c=Ft(()=>e(l,s,o));return s=l,c}}function Gs(n){Ph(()=>Ft(n))}function ya(n){return Re===null||(Re.cleanups===null?Re.cleanups=[n]:Re.cleanups.push(n)),n}function $h(){return Re}function Vh(n,e){const t=Re,r=je;Re=n,je=null;try{return rr(e,!0)}catch(s){il(s)}finally{Re=t,je=r}}function em(n){const e=je,t=Re;return Promise.resolve().then(()=>{je=e,Re=t;let r;return rr(n,!1),je=Re=null,r?r.done:void 0})}const[LA,MA]=Q(!1);function Nh(n,e){const t=Symbol("context");return{id:t,Provider:im(t),defaultValue:n}}function nl(n){let e;return Re&&Re.context&&(e=Re.context[n.id])!==void 0?e:n.defaultValue}function rl(n){const e=De(n),t=De(()=>Eo(e()));return t.toArray=()=>{const r=t();return Array.isArray(r)?r:r!=null?[r]:[]},t}function Dh(){if(this.sources&&this.state)if(this.state===nr)Qs(this);else{const n=Pt;Pt=null,rr(()=>Ki(this),!1),Pt=n}if(je){const n=this.observers?this.observers.length:0;je.sources?(je.sources.push(this),je.sourceSlots.push(n)):(je.sources=[this],je.sourceSlots=[n]),this.observers?(this.observers.push(je),this.observerSlots.push(je.sources.length-1)):(this.observers=[je],this.observerSlots=[je.sources.length-1])}return this.value}function Oh(n,e,t){let r=n.value;return(!n.comparator||!n.comparator(r,e))&&(n.value=e,n.observers&&n.observers.length&&rr(()=>{for(let s=0;s<n.observers.length;s+=1){const i=n.observers[s],o=ao&&ao.running;o&&ao.disposed.has(i),(o?!i.tState:!i.state)&&(i.pure?Pt.push(i):bn.push(i),i.observers&&Mh(i)),o||(i.state=nr)}if(Pt.length>1e6)throw Pt=[],new Error},!1)),e}function Qs(n){if(!n.fn)return;Os(n);const e=_a;tm(n,n.value,e)}function tm(n,e,t){let r;const s=Re,i=je;je=Re=n;try{r=n.fn(e)}catch(o){return n.pure&&(n.state=nr,n.owned&&n.owned.forEach(Os),n.owned=null),n.updatedAt=t+1,il(o)}finally{je=i,Re=s}(!n.updatedAt||n.updatedAt<=t)&&(n.updatedAt!=null&&"observers"in n?Oh(n,r):n.value=r,n.updatedAt=t)}function sl(n,e,t,r=nr,s){const i={fn:n,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:Re,context:Re?Re.context:null,pure:t};return Re===null||Re!==Rh&&(Re.owned?Re.owned.push(i):Re.owned=[i]),i}function Wi(n){if(n.state===0)return;if(n.state===qi)return Ki(n);if(n.suspense&&Ft(n.suspense.inFallback))return n.suspense.effects.push(n);const e=[n];for(;(n=n.owner)&&(!n.updatedAt||n.updatedAt<_a);)n.state&&e.push(n);for(let t=e.length-1;t>=0;t--)if(n=e[t],n.state===nr)Qs(n);else if(n.state===qi){const r=Pt;Pt=null,rr(()=>Ki(n,e[0]),!1),Pt=r}}function rr(n,e){if(Pt)return n();let t=!1;e||(Pt=[]),bn?t=!0:bn=[],_a++;try{const r=n();return nm(t),r}catch(r){t||(bn=null),Pt=null,il(r)}}function nm(n){if(Pt&&(Lh(Pt),Pt=null),n)return;const e=bn;bn=null,e.length&&rr(()=>Ch(e),!1)}function Lh(n){for(let e=0;e<n.length;e++)Wi(n[e])}function rm(n){let e,t=0;for(e=0;e<n.length;e++){const r=n[e];r.user?n[t++]=r:Wi(r)}for(e=0;e<t;e++)Wi(n[e])}function Ki(n,e){n.state=0;for(let t=0;t<n.sources.length;t+=1){const r=n.sources[t];if(r.sources){const s=r.state;s===nr?r!==e&&(!r.updatedAt||r.updatedAt<_a)&&Wi(r):s===qi&&Ki(r,e)}}}function Mh(n){for(let e=0;e<n.observers.length;e+=1){const t=n.observers[e];t.state||(t.state=qi,t.pure?Pt.push(t):bn.push(t),t.observers&&Mh(t))}}function Os(n){let e;if(n.sources)for(;n.sources.length;){const t=n.sources.pop(),r=n.sourceSlots.pop(),s=t.observers;if(s&&s.length){const i=s.pop(),o=t.observerSlots.pop();r<s.length&&(i.sourceSlots[o]=r,s[r]=i,t.observerSlots[r]=o)}}if(n.tOwned){for(e=n.tOwned.length-1;e>=0;e--)Os(n.tOwned[e]);delete n.tOwned}if(n.owned){for(e=n.owned.length-1;e>=0;e--)Os(n.owned[e]);n.owned=null}if(n.cleanups){for(e=n.cleanups.length-1;e>=0;e--)n.cleanups[e]();n.cleanups=null}n.state=0}function sm(n){return n instanceof Error?n:new Error(typeof n=="string"?n:"Unknown error",{cause:n})}function il(n,e=Re){throw sm(n)}function Eo(n){if(typeof n=="function"&&!n.length)return Eo(n());if(Array.isArray(n)){const e=[];for(let t=0;t<n.length;t++){const r=Eo(n[t]);Array.isArray(r)?e.push.apply(e,r):e.push(r)}return e}return n}function im(n,e){return function(r){let s;return z(()=>s=Ft(()=>(Re.context={...Re.context,[n]:r.value},rl(()=>r.children))),void 0),s}}const am=Symbol("fallback");function Lu(n){for(let e=0;e<n.length;e++)n[e]()}function om(n,e,t={}){let r=[],s=[],i=[],o=0,l=e.length>1?[]:null;return ya(()=>Lu(i)),()=>{let c=n()||[],h=c.length,f,m;return c[Xp],Ft(()=>{let x,N,P,$,D,S,M,U,K;if(h===0)o!==0&&(Lu(i),i=[],r=[],s=[],o=0,l&&(l=[])),t.fallback&&(r=[am],s[0]=Rs(V=>(i[0]=V,t.fallback())),o=1);else if(o===0){for(s=new Array(h),m=0;m<h;m++)r[m]=c[m],s[m]=Rs(w);o=h}else{for(P=new Array(h),$=new Array(h),l&&(D=new Array(h)),S=0,M=Math.min(o,h);S<M&&r[S]===c[S];S++);for(M=o-1,U=h-1;M>=S&&U>=S&&r[M]===c[U];M--,U--)P[U]=s[M],$[U]=i[M],l&&(D[U]=l[M]);for(x=new Map,N=new Array(U+1),m=U;m>=S;m--)K=c[m],f=x.get(K),N[m]=f===void 0?-1:f,x.set(K,m);for(f=S;f<=M;f++)K=r[f],m=x.get(K),m!==void 0&&m!==-1?(P[m]=s[f],$[m]=i[f],l&&(D[m]=l[f]),m=N[m],x.set(K,m)):i[f]();for(m=S;m<h;m++)m in P?(s[m]=P[m],i[m]=$[m],l&&(l[m]=D[m],l[m](m))):s[m]=Rs(w);s=s.slice(0,o=h),r=c.slice(0)}return s});function w(x){if(i[m]=x,l){const[N,P]=Q(m);return l[m]=P,e(c[m],N)}return e(c[m])}}}function k(n,e){return Ft(()=>n(e||{}))}function Ti(){return!0}const To={get(n,e,t){return e===zi?t:n.get(e)},has(n,e){return e===zi?!0:n.has(e)},set:Ti,deleteProperty:Ti,getOwnPropertyDescriptor(n,e){return{configurable:!0,enumerable:!0,get(){return n.get(e)},set:Ti,deleteProperty:Ti}},ownKeys(n){return n.keys()}};function oo(n){return(n=typeof n=="function"?n():n)?n:{}}function lm(){for(let n=0,e=this.length;n<e;++n){const t=this[n]();if(t!==void 0)return t}}function Io(...n){let e=!1;for(let o=0;o<n.length;o++){const l=n[o];e=e||!!l&&zi in l,n[o]=typeof l=="function"?(e=!0,De(l)):l}if(kh&&e)return new Proxy({get(o){for(let l=n.length-1;l>=0;l--){const c=oo(n[l])[o];if(c!==void 0)return c}},has(o){for(let l=n.length-1;l>=0;l--)if(o in oo(n[l]))return!0;return!1},keys(){const o=[];for(let l=0;l<n.length;l++)o.push(...Object.keys(oo(n[l])));return[...new Set(o)]}},To);const t={},r=Object.create(null);for(let o=n.length-1;o>=0;o--){const l=n[o];if(!l)continue;const c=Object.getOwnPropertyNames(l);for(let h=c.length-1;h>=0;h--){const f=c[h];if(f==="__proto__"||f==="constructor")continue;const m=Object.getOwnPropertyDescriptor(l,f);if(!r[f])r[f]=m.get?{enumerable:!0,configurable:!0,get:lm.bind(t[f]=[m.get.bind(l)])}:m.value!==void 0?m:void 0;else{const w=t[f];w&&(m.get?w.push(m.get.bind(l)):m.value!==void 0&&w.push(()=>m.value))}}}const s={},i=Object.keys(r);for(let o=i.length-1;o>=0;o--){const l=i[o],c=r[l];c&&c.get?Object.defineProperty(s,l,c):s[l]=c?c.value:void 0}return s}function um(n,...e){const t=e.length;if(kh&&zi in n){const s=t>1?e.flat():e[0],i=e.map(o=>new Proxy({get(l){return o.includes(l)?n[l]:void 0},has(l){return o.includes(l)&&l in n},keys(){return o.filter(l=>l in n)}},To));return i.push(new Proxy({get(o){return s.includes(o)?void 0:n[o]},has(o){return s.includes(o)?!1:o in n},keys(){return Object.keys(n).filter(o=>!s.includes(o))}},To)),i}const r=[];for(let s=0;s<=t;s++)r[s]={};for(const s of Object.getOwnPropertyNames(n)){let i=t;for(let c=0;c<e.length;c++)if(e[c].includes(s)){i=c;break}const o=Object.getOwnPropertyDescriptor(n,s);!o.get&&!o.set&&o.enumerable&&o.writable&&o.configurable?r[i][s]=o.value:Object.defineProperty(r[i],s,o)}return r}const cm=n=>`Stale read from <${n}>.`;function at(n){const e="fallback"in n&&{fallback:()=>n.fallback};return De(om(()=>n.each,n.children,e||void 0))}function ee(n){const e=n.keyed,t=De(()=>n.when,void 0,void 0),r=e?t:De(t,void 0,{equals:(s,i)=>!s==!i});return De(()=>{const s=r();if(s){const i=n.children;return typeof i=="function"&&i.length>0?Ft(()=>i(e?s:()=>{if(!Ft(r))throw cm("Show");return t()})):i}return n.fallback},void 0,void 0)}const hm=["allowfullscreen","async","alpha","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected","adauctionheaders","browsingtopics","credentialless","defaultchecked","defaultmuted","defaultselected","defer","disablepictureinpicture","disableremoteplayback","preservespitch","shadowrootclonable","shadowrootcustomelementregistry","shadowrootdelegatesfocus","shadowrootserializable","sharedstoragewritable"],dm=new Set(["className","value","readOnly","noValidate","formNoValidate","isMap","noModule","playsInline","adAuctionHeaders","allowFullscreen","browsingTopics","defaultChecked","defaultMuted","defaultSelected","disablePictureInPicture","disableRemotePlayback","preservesPitch","shadowRootClonable","shadowRootCustomElementRegistry","shadowRootDelegatesFocus","shadowRootSerializable","sharedStorageWritable",...hm]),fm=new Set(["innerHTML","textContent","innerText","children"]),pm=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),mm=Object.assign(Object.create(null),{class:"className",novalidate:{$:"noValidate",FORM:1},formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1},adauctionheaders:{$:"adAuctionHeaders",IFRAME:1},allowfullscreen:{$:"allowFullscreen",IFRAME:1},browsingtopics:{$:"browsingTopics",IMG:1},defaultchecked:{$:"defaultChecked",INPUT:1},defaultmuted:{$:"defaultMuted",AUDIO:1,VIDEO:1},defaultselected:{$:"defaultSelected",OPTION:1},disablepictureinpicture:{$:"disablePictureInPicture",VIDEO:1},disableremoteplayback:{$:"disableRemotePlayback",AUDIO:1,VIDEO:1},preservespitch:{$:"preservesPitch",AUDIO:1,VIDEO:1},shadowrootclonable:{$:"shadowRootClonable",TEMPLATE:1},shadowrootdelegatesfocus:{$:"shadowRootDelegatesFocus",TEMPLATE:1},shadowrootserializable:{$:"shadowRootSerializable",TEMPLATE:1},sharedstoragewritable:{$:"sharedStorageWritable",IFRAME:1,IMG:1}});function gm(n,e){const t=mm[n];return typeof t=="object"?t[e]?t.$:void 0:t}const _m=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Xe=n=>De(()=>n());function ym(n,e,t){let r=t.length,s=e.length,i=r,o=0,l=0,c=e[s-1].nextSibling,h=null;for(;o<s||l<i;){if(e[o]===t[l]){o++,l++;continue}for(;e[s-1]===t[i-1];)s--,i--;if(s===o){const f=i<r?l?t[l-1].nextSibling:t[i-l]:c;for(;l<i;)n.insertBefore(t[l++],f)}else if(i===l)for(;o<s;)(!h||!h.has(e[o]))&&e[o].remove(),o++;else if(e[o]===t[i-1]&&t[l]===e[s-1]){const f=e[--s].nextSibling;n.insertBefore(t[l++],e[o++].nextSibling),n.insertBefore(t[--i],f),e[s]=t[i]}else{if(!h){h=new Map;let m=l;for(;m<i;)h.set(t[m],m++)}const f=h.get(e[o]);if(f!=null)if(l<f&&f<i){let m=o,w=1,x;for(;++m<s&&m<i&&!((x=h.get(e[m]))==null||x!==f+w);)w++;if(w>f-l){const N=e[o];for(;l<f;)n.insertBefore(t[l++],N)}else n.replaceChild(t[l++],e[o++])}else o++;else e[o++].remove()}}}const Mu="_$DX_DELEGATE";function vm(n,e,t,r={}){let s;return Rs(i=>{s=i,e===document?n():_(e,n(),e.firstChild?null:void 0,t)},r.owner),()=>{s(),e.textContent=""}}function C(n,e,t,r){let s;const i=()=>{const l=document.createElement("template");return l.innerHTML=n,l.content.firstChild},o=()=>(s||(s=i())).cloneNode(!0);return o.cloneNode=o,o}function en(n,e=window.document){const t=e[Mu]||(e[Mu]=new Set);for(let r=0,s=n.length;r<s;r++){const i=n[r];t.has(i)||(t.add(i),e.addEventListener(i,km))}}function He(n,e,t){t==null?n.removeAttribute(e):n.setAttribute(e,t)}function bm(n,e,t){t?n.setAttribute(e,""):n.removeAttribute(e)}function Ie(n,e){e==null?n.removeAttribute("class"):n.className=e}function wm(n,e,t,r){if(r)Array.isArray(t)?(n[`$$${e}`]=t[0],n[`$$${e}Data`]=t[1]):n[`$$${e}`]=t;else if(Array.isArray(t)){const s=t[0];n.addEventListener(e,t[0]=i=>s.call(n,t[1],i))}else n.addEventListener(e,t,typeof t!="function"&&t)}function xm(n,e,t={}){const r=Object.keys(e||{}),s=Object.keys(t);let i,o;for(i=0,o=s.length;i<o;i++){const l=s[i];!l||l==="undefined"||e[l]||(Uu(n,l,!1),delete t[l])}for(i=0,o=r.length;i<o;i++){const l=r[i],c=!!e[l];!l||l==="undefined"||t[l]===c||!c||(Uu(n,l,!0),t[l]=c)}return t}function Em(n,e,t){if(!e)return t?He(n,"style"):e;const r=n.style;if(typeof e=="string")return r.cssText=e;typeof t=="string"&&(r.cssText=t=void 0),t||(t={}),e||(e={});let s,i;for(i in t)e[i]==null&&r.removeProperty(i),delete t[i];for(i in e)s=e[i],s!==t[i]&&(r.setProperty(i,s),t[i]=s);return t}function Tm(n,e={},t,r){const s={};return z(()=>s.children=Ls(n,e.children,s.children)),z(()=>typeof e.ref=="function"&&Im(e.ref,n)),z(()=>Am(n,e,t,!0,s,!0)),s}function Im(n,e,t){return Ft(()=>n(e,t))}function _(n,e,t,r){if(t!==void 0&&!r&&(r=[]),typeof e!="function")return Ls(n,e,r,t);z(s=>Ls(n,e(),s,t),r)}function Am(n,e,t,r,s={},i=!1){e||(e={});for(const o in s)if(!(o in e)){if(o==="children")continue;s[o]=Fu(n,o,null,s[o],t,i,e)}for(const o in e){if(o==="children")continue;const l=e[o];s[o]=Fu(n,o,l,s[o],t,i,e)}}function Sm(n){return n.toLowerCase().replace(/-([a-z])/g,(e,t)=>t.toUpperCase())}function Uu(n,e,t){const r=e.trim().split(/\s+/);for(let s=0,i=r.length;s<i;s++)n.classList.toggle(r[s],t)}function Fu(n,e,t,r,s,i,o){let l,c,h,f,m;if(e==="style")return Em(n,t,r);if(e==="classList")return xm(n,t,r);if(t===r)return r;if(e==="ref")i||t(n);else if(e.slice(0,3)==="on:"){const w=e.slice(3);r&&n.removeEventListener(w,r,typeof r!="function"&&r),t&&n.addEventListener(w,t,typeof t!="function"&&t)}else if(e.slice(0,10)==="oncapture:"){const w=e.slice(10);r&&n.removeEventListener(w,r,!0),t&&n.addEventListener(w,t,!0)}else if(e.slice(0,2)==="on"){const w=e.slice(2).toLowerCase(),x=_m.has(w);if(!x&&r){const N=Array.isArray(r)?r[0]:r;n.removeEventListener(w,N)}(x||t)&&(wm(n,w,t,x),x&&en([w]))}else e.slice(0,5)==="attr:"?He(n,e.slice(5),t):e.slice(0,5)==="bool:"?bm(n,e.slice(5),t):(m=e.slice(0,5)==="prop:")||(h=fm.has(e))||(f=gm(e,n.tagName))||(c=dm.has(e))||(l=n.nodeName.includes("-")||"is"in o)?(m&&(e=e.slice(5),c=!0),e==="class"||e==="className"?Ie(n,t):l&&!c&&!h?n[Sm(e)]=t:n[f||e]=t):He(n,pm[e]||e,t);return t}function km(n){let e=n.target;const t=`$$${n.type}`,r=n.target,s=n.currentTarget,i=c=>Object.defineProperty(n,"target",{configurable:!0,value:c}),o=()=>{const c=e[t];if(c&&!e.disabled){const h=e[`${t}Data`];if(h!==void 0?c.call(e,h,n):c.call(e,n),n.cancelBubble)return}return e.host&&typeof e.host!="string"&&!e.host._$host&&e.contains(n.target)&&i(e.host),!0},l=()=>{for(;o()&&(e=e._$host||e.parentNode||e.host););};if(Object.defineProperty(n,"currentTarget",{configurable:!0,get(){return e||document}}),n.composedPath){const c=n.composedPath();i(c[0]);for(let h=0;h<c.length-2&&(e=c[h],!!o());h++){if(e._$host){e=e._$host,l();break}if(e.parentNode===s)break}}else l();i(r)}function Ls(n,e,t,r,s){for(;typeof t=="function";)t=t();if(e===t)return t;const i=typeof e,o=r!==void 0;if(n=o&&t[0]&&t[0].parentNode||n,i==="string"||i==="number"){if(i==="number"&&(e=e.toString(),e===t))return t;if(o){let l=t[0];l&&l.nodeType===3?l.data!==e&&(l.data=e):l=document.createTextNode(e),t=$r(n,t,r,l)}else t!==""&&typeof t=="string"?t=n.firstChild.data=e:t=n.textContent=e}else if(e==null||i==="boolean")t=$r(n,t,r);else{if(i==="function")return z(()=>{let l=e();for(;typeof l=="function";)l=l();t=Ls(n,l,t,r)}),()=>t;if(Array.isArray(e)){const l=[],c=t&&Array.isArray(t);if(Ao(l,e,t,s))return z(()=>t=Ls(n,l,t,r,!0)),()=>t;if(l.length===0){if(t=$r(n,t,r),o)return t}else c?t.length===0?ju(n,l,r):ym(n,t,l):(t&&$r(n),ju(n,l));t=l}else if(e.nodeType){if(Array.isArray(t)){if(o)return t=$r(n,t,r,e);$r(n,t,null,e)}else t==null||t===""||!n.firstChild?n.appendChild(e):n.replaceChild(e,n.firstChild);t=e}}return t}function Ao(n,e,t,r){let s=!1;for(let i=0,o=e.length;i<o;i++){let l=e[i],c=t&&t[n.length],h;if(!(l==null||l===!0||l===!1))if((h=typeof l)=="object"&&l.nodeType)n.push(l);else if(Array.isArray(l))s=Ao(n,l,c)||s;else if(h==="function")if(r){for(;typeof l=="function";)l=l();s=Ao(n,Array.isArray(l)?l:[l],Array.isArray(c)?c:[c])||s}else n.push(l),s=!0;else{const f=String(l);c&&c.nodeType===3&&c.data===f?n.push(c):n.push(document.createTextNode(f))}}return s}function ju(n,e,t=null){for(let r=0,s=e.length;r<s;r++)n.insertBefore(e[r],t)}function $r(n,e,t,r){if(t===void 0)return n.textContent="";const s=r||document.createTextNode("");if(e.length){let i=!1;for(let o=e.length-1;o>=0;o--){const l=e[o];if(s!==l){const c=l.parentNode===n;!i&&!o?c?n.replaceChild(s,l):n.insertBefore(s,t):c&&l.remove()}else i=!0}}else n.insertBefore(s,t);return[s]}const Cm=!1;function Uh(){let n=new Set;function e(s){return n.add(s),()=>n.delete(s)}let t=!1;function r(s,i){if(t)return!(t=!1);const o={to:s,options:i,defaultPrevented:!1,preventDefault:()=>o.defaultPrevented=!0};for(const l of n)l.listener({...o,from:l.location,retry:c=>{c&&(t=!0),l.navigate(s,{...i,resolve:!1})}});return!o.defaultPrevented}return{subscribe:e,confirm:r}}let So;function al(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),So=window.history.state._depth}al();function Rm(n){return{...n,_depth:window.history.state&&window.history.state._depth}}function Pm(n,e){let t=!1;return()=>{const r=So;al();const s=r==null?null:So-r;if(t){t=!1;return}s&&e(s)?(t=!0,window.history.go(-s)):n()}}const $m=/^(?:[a-z0-9]+:)?\/\//i,Vm=/^\/+|(\/)\/+$/g,Fh="http://sr";function vr(n,e=!1){const t=n.replace(Vm,"$1");return t?e||/^[?#]/.test(t)?t:"/"+t:""}function Pi(n,e,t){if($m.test(e))return;const r=vr(n),s=t&&vr(t);let i="";return!s||e.startsWith("/")?i=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?i=r+s:i=s,(i||"/")+vr(e,!i)}function Nm(n,e){if(n==null)throw new Error(e);return n}function Dm(n,e){return vr(n).replace(/\/*(\*.*)?$/g,"")+vr(e)}function jh(n){const e={};return n.searchParams.forEach((t,r)=>{e[r]=t}),e}function Om(n,e,t){const[r,s]=n.split("/*",2),i=r.split("/").filter(Boolean),o=i.length;return l=>{const c=l.split("/").filter(Boolean),h=c.length-o;if(h<0||h>0&&s===void 0&&!e)return null;const f={path:o?"":"/",params:{}},m=w=>t===void 0?void 0:t[w];for(let w=0;w<o;w++){const x=i[w],N=c[w],P=x[0]===":",$=P?x.slice(1):x;if(P&&lo(N,m($)))f.params[$]=N;else if(P||!lo(N,x))return null;f.path+=`/${N}`}if(s){const w=h?c.slice(-h).join("/"):"";if(lo(w,m(s)))f.params[s]=w;else return null}return f}}function lo(n,e){const t=r=>r.localeCompare(n,void 0,{sensitivity:"base"})===0;return e===void 0?!0:typeof e=="string"?t(e):typeof e=="function"?e(n):Array.isArray(e)?e.some(t):e instanceof RegExp?e.test(n):!1}function Lm(n){const[e,t]=n.pattern.split("/*",2),r=e.split("/").filter(Boolean);return r.reduce((s,i)=>s+(i.startsWith(":")?2:3),r.length-(t===void 0?0:1))}function zh(n){const e=new Map,t=$h();return new Proxy({},{get(r,s){return e.has(s)||Vh(t,()=>e.set(s,De(()=>n()[s]))),e.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(n())}})}function Mm(n,e){const t=new URLSearchParams(n);Object.entries(e).forEach(([s,i])=>{i==null||i===""?t.delete(s):t.set(s,String(i))});const r=t.toString();return r?`?${r}`:""}function Bh(n){let e=/(\/?\:[^\/]+)\?/.exec(n);if(!e)return[n];let t=n.slice(0,e.index),r=n.slice(e.index+e[0].length);const s=[t,t+=e[1]];for(;e=/^(\/\:[^\/]+)\?/.exec(r);)s.push(t+=e[1]),r=r.slice(e[0].length);return Bh(r).reduce((i,o)=>[...i,...s.map(l=>l+o)],[])}const Um=100,qh=Nh(),ol=Nh(),Js=()=>Nm(nl(qh),"<A> and 'use' router primitives can be only used inside a Route."),Fm=()=>nl(ol)||Js().base,jm=n=>{const e=Fm();return De(()=>e.resolvePath(n()))},zm=n=>{const e=Js();return De(()=>{const t=n();return t!==void 0?e.renderPath(t):t})},mn=()=>Js().navigatorFactory(),Wh=()=>Js().location,Kh=()=>Js().params,Bm=()=>{const n=Wh(),e=mn(),t=(r,s)=>{const i=Ft(()=>n.pathname+Mm(n.search,r)+n.hash);e(i,{scroll:!1,resolve:!1,...s})};return[n.query,t]};function qm(n,e=""){const{component:t,load:r,children:s,info:i}=n,o=!s||Array.isArray(s)&&!s.length,l={key:n,component:t,load:r,info:i};return Hh(n.path).reduce((c,h)=>{for(const f of Bh(h)){const m=Dm(e,f);let w=o?m:m.split("/*",1)[0];w=w.split("/").map(x=>x.startsWith(":")||x.startsWith("*")?x:encodeURIComponent(x)).join("/"),c.push({...l,originalPath:h,pattern:w,matcher:Om(w,!o,n.matchFilters)})}return c},[])}function Wm(n,e=0){return{routes:n,score:Lm(n[n.length-1])*1e4-e,matcher(t){const r=[];for(let s=n.length-1;s>=0;s--){const i=n[s],o=i.matcher(t);if(!o)return null;r.unshift({...o,route:i})}return r}}}function Hh(n){return Array.isArray(n)?n:[n]}function Gh(n,e="",t=[],r=[]){const s=Hh(n);for(let i=0,o=s.length;i<o;i++){const l=s[i];if(l&&typeof l=="object"){l.hasOwnProperty("path")||(l.path="");const c=qm(l,e);for(const h of c){t.push(h);const f=Array.isArray(l.children)&&l.children.length===0;if(l.children&&!f)Gh(l.children,h.pattern,t,r);else{const m=Wm([...t],r.length);r.push(m)}t.pop()}}}return t.length?r:r.sort((i,o)=>o.score-i.score)}function uo(n,e){for(let t=0,r=n.length;t<r;t++){const s=n[t].matcher(e);if(s)return s}return[]}function Km(n,e){const t=new URL(Fh),r=De(c=>{const h=n();try{return new URL(h,t)}catch{return console.error(`Invalid path ${h}`),c}},t,{equals:(c,h)=>c.href===h.href}),s=De(()=>r().pathname),i=De(()=>r().search,!0),o=De(()=>r().hash),l=()=>"";return{get pathname(){return s()},get search(){return i()},get hash(){return o()},get state(){return e()},get key(){return l()},query:zh(tl(i,()=>jh(r())))}}let _r;function Hm(){return _r}function Gm(n,e,t,r={}){const{signal:[s,i],utils:o={}}=n,l=o.parsePath||(p=>p),c=o.renderPath||(p=>p),h=o.beforeLeave||Uh(),f=Pi("",r.base||"");if(f===void 0)throw new Error(`${f} is not a valid base path`);f&&!s().value&&i({value:f,replace:!0,scroll:!1});const[m,w]=Q(!1);let x;const N=(p,j)=>{j.value===P()&&j.state===D()||(x===void 0&&w(!0),_r=p,x=j,em(()=>{x===j&&($(x.value),S(x.state),K[1]([]))}).finally(()=>{x===j&&Zp(()=>{_r=void 0,p==="navigate"&&E(x),w(!1),x=void 0})}))},[P,$]=Q(s().value),[D,S]=Q(s().state),M=Km(P,D),U=[],K=Q([]),V=De(()=>typeof r.transformUrl=="function"?uo(e(),r.transformUrl(M.pathname)):uo(e(),M.pathname)),b=zh(()=>{const p=V(),j={};for(let re=0;re<p.length;re++)Object.assign(j,p[re].params);return j}),y={pattern:f,path:()=>f,outlet:()=>null,resolvePath(p){return Pi(f,p)}};return z(tl(s,p=>N("native",p),{defer:!0})),{base:y,location:M,params:b,isRouting:m,renderPath:c,parsePath:l,navigatorFactory:T,matches:V,beforeLeave:h,preloadRoute:I,singleFlight:r.singleFlight===void 0?!0:r.singleFlight,submissions:K};function v(p,j,re){Ft(()=>{if(typeof j=="number"){j&&(o.go?o.go(j):console.warn("Router integration does not support relative routing"));return}const{replace:Ae,resolve:Oe,scroll:Ue,state:Ge}={replace:!1,resolve:!0,scroll:!0,...re},Be=Oe?p.resolvePath(j):Pi("",j);if(Be===void 0)throw new Error(`Path '${j}' is not a routable path`);if(U.length>=Um)throw new Error("Too many redirects");const Ye=P();(Be!==Ye||Ge!==D())&&(Cm||h.confirm(Be,re)&&(U.push({value:Ye,replace:Ae,scroll:Ue,state:D()}),N("navigate",{value:Be,state:Ge})))})}function T(p){return p=p||nl(ol)||y,(j,re)=>v(p,j,re)}function E(p){const j=U[0];j&&(i({...p,replace:j.replace,scroll:j.scroll}),U.length=0)}function I(p,j={}){const re=uo(e(),p.pathname),Ae=_r;_r="preload";for(let Oe in re){const{route:Ue,params:Ge}=re[Oe];Ue.component&&Ue.component.preload&&Ue.component.preload();const{load:Be}=Ue;j.preloadData&&Be&&Vh(t(),()=>Be({params:Ge,location:{pathname:p.pathname,search:p.search,hash:p.hash,query:jh(p),state:null,key:""},intent:"preload"}))}_r=Ae}}function Qm(n,e,t,r){const{base:s,location:i,params:o}=n,{pattern:l,component:c,load:h}=r().route,f=De(()=>r().path);c&&c.preload&&c.preload();const m=h?h({params:o,location:i,intent:_r||"initial"}):void 0;return{parent:e,pattern:l,path:f,outlet:()=>c?k(c,{params:o,location:i,data:m,get children(){return t()}}):t(),resolvePath(x){return Pi(s.path(),x,f())}}}const Jm=n=>e=>{const{base:t}=e,r=rl(()=>e.children),s=De(()=>Gh(r(),e.base||""));let i;const o=Gm(n,s,()=>i,{base:t,singleFlight:e.singleFlight,transformUrl:e.transformUrl});return n.create&&n.create(o),k(qh.Provider,{value:o,get children(){return k(Xm,{routerState:o,get root(){return e.root},get load(){return e.rootLoad},get children(){return[Xe(()=>(i=$h())&&null),k(Ym,{routerState:o,get branches(){return s()}})]}})}})};function Xm(n){const e=n.routerState.location,t=n.routerState.params,r=De(()=>n.load&&Ft(()=>{n.load({params:t,location:e,intent:Hm()||"initial"})}));return k(ee,{get when(){return n.root},keyed:!0,get fallback(){return n.children},children:s=>k(s,{params:t,location:e,get data(){return r()},get children(){return n.children}})})}function Ym(n){const e=[];let t;const r=De(tl(n.routerState.matches,(s,i,o)=>{let l=i&&s.length===i.length;const c=[];for(let h=0,f=s.length;h<f;h++){const m=i&&i[h],w=s[h];o&&m&&w.route.key===m.route.key?c[h]=o[h]:(l=!1,e[h]&&e[h](),Rs(x=>{e[h]=x,c[h]=Qm(n.routerState,c[h-1]||n.routerState.base,zu(()=>r()[h+1]),()=>n.routerState.matches()[h])}))}return e.splice(s.length).forEach(h=>h()),o&&l?o:(t=c[0],c)}));return zu(()=>r()&&t)()}const zu=n=>()=>k(ee,{get when(){return n()},keyed:!0,children:e=>k(ol.Provider,{value:e,get children(){return e.outlet()}})}),sn=n=>{const e=rl(()=>n.children);return Io(n,{get children(){return e()}})};function Zm([n,e],t,r){return[n,r?s=>e(r(s)):e]}function eg(n){if(n==="#")return null;try{return document.querySelector(n)}catch{return null}}function tg(n){let e=!1;const t=s=>typeof s=="string"?{value:s}:s,r=Zm(Q(t(n.get()),{equals:(s,i)=>s.value===i.value&&s.state===i.state}),void 0,s=>(!e&&n.set(s),s));return n.init&&ya(n.init((s=n.get())=>{e=!0,r[1](t(s)),e=!1})),Jm({signal:r,create:n.create,utils:n.utils})}function ng(n,e,t){return n.addEventListener(e,t),()=>n.removeEventListener(e,t)}function rg(n,e){const t=eg(`#${n}`);t?t.scrollIntoView():e&&window.scrollTo(0,0)}const sg=new Map;function ig(n=!0,e=!1,t="/_server",r){return s=>{const i=s.base.path(),o=s.navigatorFactory(s.base);let l={};function c(P){return P.namespaceURI==="http://www.w3.org/2000/svg"}function h(P){if(P.defaultPrevented||P.button!==0||P.metaKey||P.altKey||P.ctrlKey||P.shiftKey)return;const $=P.composedPath().find(V=>V instanceof Node&&V.nodeName.toUpperCase()==="A");if(!$||e&&!$.hasAttribute("link"))return;const D=c($),S=D?$.href.baseVal:$.href;if((D?$.target.baseVal:$.target)||!S&&!$.hasAttribute("state"))return;const U=($.getAttribute("rel")||"").split(/\s+/);if($.hasAttribute("download")||U&&U.includes("external"))return;const K=D?new URL(S,document.baseURI):new URL(S);if(!(K.origin!==window.location.origin||i&&K.pathname&&!K.pathname.toLowerCase().startsWith(i.toLowerCase())))return[$,K]}function f(P){const $=h(P);if(!$)return;const[D,S]=$,M=s.parsePath(S.pathname+S.search+S.hash),U=D.getAttribute("state");P.preventDefault(),o(M,{resolve:!1,replace:D.hasAttribute("replace"),scroll:!D.hasAttribute("noscroll"),state:U&&JSON.parse(U)})}function m(P){const $=h(P);if(!$)return;const[D,S]=$;typeof r=="function"&&(S.pathname=r(S.pathname)),l[S.pathname]||s.preloadRoute(S,{preloadData:D.getAttribute("preload")!=="false"})}function w(P){const $=h(P);if(!$)return;const[D,S]=$;typeof r=="function"&&(S.pathname=r(S.pathname)),!l[S.pathname]&&(l[S.pathname]=setTimeout(()=>{s.preloadRoute(S,{preloadData:D.getAttribute("preload")!=="false"}),delete l[S.pathname]},200))}function x(P){const $=h(P);if(!$)return;const[,D]=$;typeof r=="function"&&(D.pathname=r(D.pathname)),l[D.pathname]&&(clearTimeout(l[D.pathname]),delete l[D.pathname])}function N(P){if(P.defaultPrevented)return;let $=P.submitter&&P.submitter.hasAttribute("formaction")?P.submitter.getAttribute("formaction"):P.target.getAttribute("action");if(!$)return;if(!$.startsWith("https://action/")){const S=new URL($,Fh);if($=s.parsePath(S.pathname+S.search),!$.startsWith(t))return}if(P.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const D=sg.get($);if(D){P.preventDefault();const S=new FormData(P.target);P.submitter&&P.submitter.name&&S.append(P.submitter.name,P.submitter.value),D.call({r:s,f:P.target},S)}}en(["click","submit"]),document.addEventListener("click",f),n&&(document.addEventListener("mouseover",w),document.addEventListener("mouseout",x),document.addEventListener("focusin",m),document.addEventListener("touchstart",m)),document.addEventListener("submit",N),ya(()=>{document.removeEventListener("click",f),n&&(document.removeEventListener("mouseover",w),document.removeEventListener("mouseout",x),document.removeEventListener("focusin",m),document.removeEventListener("touchstart",m)),document.removeEventListener("submit",N)})}}function ag(n){const e=()=>{const r=window.location.pathname+window.location.search;return{value:n.transformUrl?n.transformUrl(r)+window.location.hash:r+window.location.hash,state:window.history.state}},t=Uh();return tg({get:e,set({value:r,replace:s,scroll:i,state:o}){s?window.history.replaceState(Rm(o),"",r):window.history.pushState(o,"",r),rg(decodeURIComponent(window.location.hash.slice(1)),i),al()},init:r=>ng(window,"popstate",Pm(r,s=>{if(s&&s<0)return!t.confirm(s);{const i=e();return!t.confirm(i.value,{state:i.state})}})),create:ig(n.preload,n.explicitLinks,n.actionBase,n.transformUrl),utils:{go:r=>window.history.go(r),beforeLeave:t}})(n)}var og=C("<a>");function we(n){n=Io({inactiveClass:"inactive",activeClass:"active"},n);const[,e]=um(n,["href","state","class","activeClass","inactiveClass","end"]),t=jm(()=>n.href),r=zm(t),s=Wh(),i=De(()=>{const o=t();if(o===void 0)return[!1,!1];const l=vr(o.split(/[?#]/,1)[0]).toLowerCase(),c=vr(s.pathname).toLowerCase();return[n.end?l===c:c.startsWith(l+"/")||c===l,l===c]});return(()=>{var o=og();return Tm(o,Io(e,{get href(){return r()||n.href},get state(){return JSON.stringify(n.state)},get classList(){return{...n.class&&{[n.class]:!0},[n.inactiveClass]:!i()[0],[n.activeClass]:i()[0],...e.classList}},link:"",get"aria-current"(){return i()[1]?"page":void 0}}),!1),o})()}const lg=()=>{};var Bu={};/**
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
 */const Qh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},ug=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],l=n[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Jh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,l=o?n[s+1]:0,c=s+2<n.length,h=c?n[s+2]:0,f=i>>2,m=(i&3)<<4|l>>4;let w=(l&15)<<2|h>>6,x=h&63;c||(x=64,o||(w=64)),r.push(t[f],t[m],t[w],t[x])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Qh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ug(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||h==null||m==null)throw new cg;const w=i<<2|l>>4;if(r.push(w),h!==64){const x=l<<4&240|h>>2;if(r.push(x),m!==64){const N=h<<6&192|m;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class cg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hg=function(n){const e=Qh(n);return Jh.encodeByteArray(e,!0)},Hi=function(n){return hg(n).replace(/\./g,"")},Xh=function(n){try{return Jh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function dg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const fg=()=>dg().__FIREBASE_DEFAULTS__,pg=()=>{if(typeof process>"u"||typeof Bu>"u")return;const n=Bu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},mg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Xh(n[1]);return e&&JSON.parse(e)},va=()=>{try{return lg()||fg()||pg()||mg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Yh=n=>va()?.emulatorHosts?.[n],gg=n=>{const e=Yh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Zh=()=>va()?.config,ed=n=>va()?.[`_${n}`];/**
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
 */class _g{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function yg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Hi(JSON.stringify(t)),Hi(JSON.stringify(o)),""].join(".")}/**
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
 */function $t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($t())}function bg(){const n=va()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function wg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function xg(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Eg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Tg(){const n=$t();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ig(){return!bg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ag(){try{return typeof indexedDB=="object"}catch{return!1}}function Sg(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
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
 */const kg="FirebaseError";class Cn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=kg,Object.setPrototypeOf(this,Cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xs.prototype.create)}}class Xs{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Cg(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Cn(s,l,r)}}function Cg(n,e){return n.replace(Rg,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Rg=/\{\$([^}]+)}/g;function Pg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function En(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(qu(i)&&qu(o)){if(!En(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function qu(n){return n!==null&&typeof n=="object"}/**
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
 */function Ys(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ts(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Is(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function $g(n,e){const t=new Vg(n,e);return t.subscribe.bind(t)}class Vg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Ng(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=co),s.error===void 0&&(s.error=co),s.complete===void 0&&(s.complete=co);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ng(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function co(){}/**
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
 */function xt(n){return n&&n._delegate?n._delegate:n}/**
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
 */function Zs(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function td(n){return(await fetch(n,{credentials:"include"})).ok}class wr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const gr="[DEFAULT]";/**
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
 */class Dg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new _g;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Lg(e))try{this.getOrInitializeService({instanceIdentifier:gr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=gr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gr){return this.instances.has(e)}getOptions(e=gr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Og(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=gr){return this.component?this.component.multipleInstances?e:gr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Og(n){return n===gr?void 0:n}function Lg(n){return n.instantiationMode==="EAGER"}/**
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
 */class Mg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Dg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var xe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(xe||(xe={}));const Ug={debug:xe.DEBUG,verbose:xe.VERBOSE,info:xe.INFO,warn:xe.WARN,error:xe.ERROR,silent:xe.SILENT},Fg=xe.INFO,jg={[xe.DEBUG]:"log",[xe.VERBOSE]:"log",[xe.INFO]:"info",[xe.WARN]:"warn",[xe.ERROR]:"error"},zg=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=jg[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ll{constructor(e){this.name=e,this._logLevel=Fg,this._logHandler=zg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in xe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ug[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,xe.DEBUG,...e),this._logHandler(this,xe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,xe.VERBOSE,...e),this._logHandler(this,xe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,xe.INFO,...e),this._logHandler(this,xe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,xe.WARN,...e),this._logHandler(this,xe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,xe.ERROR,...e),this._logHandler(this,xe.ERROR,...e)}}const Bg=(n,e)=>e.some(t=>n instanceof t);let Wu,Ku;function qg(){return Wu||(Wu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Wg(){return Ku||(Ku=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nd=new WeakMap,ko=new WeakMap,rd=new WeakMap,ho=new WeakMap,ul=new WeakMap;function Kg(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(qn(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&nd.set(t,n)}).catch(()=>{}),ul.set(e,n),e}function Hg(n){if(ko.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});ko.set(n,e)}let Co={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ko.get(n);if(e==="objectStoreNames")return n.objectStoreNames||rd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return qn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Gg(n){Co=n(Co)}function Qg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(fo(this),e,...t);return rd.set(r,e.sort?e.sort():[e]),qn(r)}:Wg().includes(n)?function(...e){return n.apply(fo(this),e),qn(nd.get(this))}:function(...e){return qn(n.apply(fo(this),e))}}function Jg(n){return typeof n=="function"?Qg(n):(n instanceof IDBTransaction&&Hg(n),Bg(n,qg())?new Proxy(n,Co):n)}function qn(n){if(n instanceof IDBRequest)return Kg(n);if(ho.has(n))return ho.get(n);const e=Jg(n);return e!==n&&(ho.set(n,e),ul.set(e,n)),e}const fo=n=>ul.get(n);function Xg(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),l=qn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(qn(o.result),c.oldVersion,c.newVersion,qn(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Yg=["get","getKey","getAll","getAllKeys","count"],Zg=["put","add","delete","clear"],po=new Map;function Hu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(po.get(e))return po.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Zg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Yg.includes(t)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),s&&c.done]))[0]};return po.set(e,i),i}Gg(n=>({...n,get:(e,t,r)=>Hu(e,t)||n.get(e,t,r),has:(e,t)=>!!Hu(e,t)||n.has(e,t)}));/**
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
 */class e_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(t_(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function t_(n){return n.getComponent()?.type==="VERSION"}const Ro="@firebase/app",Gu="0.14.13";/**
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
 */const Tn=new ll("@firebase/app"),n_="@firebase/app-compat",r_="@firebase/analytics-compat",s_="@firebase/analytics",i_="@firebase/app-check-compat",a_="@firebase/app-check",o_="@firebase/auth",l_="@firebase/auth-compat",u_="@firebase/database",c_="@firebase/data-connect",h_="@firebase/database-compat",d_="@firebase/functions",f_="@firebase/functions-compat",p_="@firebase/installations",m_="@firebase/installations-compat",g_="@firebase/messaging",__="@firebase/messaging-compat",y_="@firebase/performance",v_="@firebase/performance-compat",b_="@firebase/remote-config",w_="@firebase/remote-config-compat",x_="@firebase/storage",E_="@firebase/storage-compat",T_="@firebase/firestore",I_="@firebase/ai",A_="@firebase/firestore-compat",S_="firebase",k_="12.14.0";/**
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
 */const Po="[DEFAULT]",C_={[Ro]:"fire-core",[n_]:"fire-core-compat",[s_]:"fire-analytics",[r_]:"fire-analytics-compat",[a_]:"fire-app-check",[i_]:"fire-app-check-compat",[o_]:"fire-auth",[l_]:"fire-auth-compat",[u_]:"fire-rtdb",[c_]:"fire-data-connect",[h_]:"fire-rtdb-compat",[d_]:"fire-fn",[f_]:"fire-fn-compat",[p_]:"fire-iid",[m_]:"fire-iid-compat",[g_]:"fire-fcm",[__]:"fire-fcm-compat",[y_]:"fire-perf",[v_]:"fire-perf-compat",[b_]:"fire-rc",[w_]:"fire-rc-compat",[x_]:"fire-gcs",[E_]:"fire-gcs-compat",[T_]:"fire-fst",[A_]:"fire-fst-compat",[I_]:"fire-vertex","fire-js":"fire-js",[S_]:"fire-js-all"};/**
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
 */const Gi=new Map,R_=new Map,$o=new Map;function Qu(n,e){try{n.container.addComponent(e)}catch(t){Tn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Hr(n){const e=n.name;if($o.has(e))return Tn.debug(`There were multiple attempts to register component ${e}.`),!1;$o.set(e,n);for(const t of Gi.values())Qu(t,n);for(const t of R_.values())Qu(t,n);return!0}function cl(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function zt(n){return n==null?!1:n.settings!==void 0}/**
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
 */const P_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wn=new Xs("app","Firebase",P_);/**
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
 */class $_{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wn.create("app-deleted",{appName:this._name})}}/**
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
 */const ns=k_;function sd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Po,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Wn.create("bad-app-name",{appName:String(s)});if(t||(t=Zh()),!t)throw Wn.create("no-options");const i=Gi.get(s);if(i){if(En(t,i.options)&&En(r,i.config))return i;throw Wn.create("duplicate-app",{appName:s})}const o=new Mg(s);for(const c of $o.values())o.addComponent(c);const l=new $_(t,r,o);return Gi.set(s,l),l}function id(n=Po){const e=Gi.get(n);if(!e&&n===Po&&Zh())return sd();if(!e)throw Wn.create("no-app",{appName:n});return e}function Kn(n,e,t){let r=C_[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tn.warn(o.join(" "));return}Hr(new wr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const V_="firebase-heartbeat-database",N_=1,Ms="firebase-heartbeat-store";let mo=null;function ad(){return mo||(mo=Xg(V_,N_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ms)}catch(t){console.warn(t)}}}}).catch(n=>{throw Wn.create("idb-open",{originalErrorMessage:n.message})})),mo}async function D_(n){try{const t=(await ad()).transaction(Ms),r=await t.objectStore(Ms).get(od(n));return await t.done,r}catch(e){if(e instanceof Cn)Tn.warn(e.message);else{const t=Wn.create("idb-get",{originalErrorMessage:e?.message});Tn.warn(t.message)}}}async function Ju(n,e){try{const r=(await ad()).transaction(Ms,"readwrite");await r.objectStore(Ms).put(e,od(n)),await r.done}catch(t){if(t instanceof Cn)Tn.warn(t.message);else{const r=Wn.create("idb-set",{originalErrorMessage:t?.message});Tn.warn(r.message)}}}function od(n){return`${n.name}!${n.options.appId}`}/**
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
 */const O_=1024,L_=30;class M_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new F_(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Xu();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>L_){const s=j_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Tn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Xu(),{heartbeatsToSend:t,unsentEntries:r}=U_(this._heartbeatsCache.heartbeats),s=Hi(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Tn.warn(e),""}}}function Xu(){return new Date().toISOString().substring(0,10)}function U_(n,e=O_){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Yu(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Yu(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class F_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ag()?Sg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await D_(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ju(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ju(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Yu(n){return Hi(JSON.stringify({version:2,heartbeats:n})).length}function j_(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function z_(n){Hr(new wr("platform-logger",e=>new e_(e),"PRIVATE")),Hr(new wr("heartbeat",e=>new M_(e),"PRIVATE")),Kn(Ro,Gu,n),Kn(Ro,Gu,"esm2020"),Kn("fire-js","")}z_("");function ld(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const B_=ld,ud=new Xs("auth","Firebase",ld());/**
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
 */const Qi=new ll("@firebase/auth");function q_(n,...e){Qi.logLevel<=xe.WARN&&Qi.warn(`Auth (${ns}): ${n}`,...e)}function $i(n,...e){Qi.logLevel<=xe.ERROR&&Qi.error(`Auth (${ns}): ${n}`,...e)}/**
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
 */function Xt(n,...e){throw hl(n,...e)}function on(n,...e){return hl(n,...e)}function cd(n,e,t){const r={...B_(),[e]:t};return new Xs("auth","Firebase",r).create(e,{appName:n.name})}function wn(n){return cd(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hl(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ud.create(n,...e)}function ue(n,e,...t){if(!n)throw hl(e,...t)}function _n(n){const e="INTERNAL ASSERTION FAILED: "+n;throw $i(e),new Error(e)}function In(n,e){n||_n(e)}/**
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
 */function Vo(){return typeof self<"u"&&self.location?.href||""}function W_(){return Zu()==="http:"||Zu()==="https:"}function Zu(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function K_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(W_()||xg()||"connection"in navigator)?navigator.onLine:!0}function H_(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ei{constructor(e,t){this.shortDelay=e,this.longDelay=t,In(t>e,"Short delay should be less than long delay!"),this.isMobile=vg()||Eg()}get(){return K_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function dl(n,e){In(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class hd{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const G_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Q_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],J_=new ei(3e4,6e4);function Rn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Pn(n,e,t,r,s={}){return dd(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Ys({key:n.config.apiKey,...o}).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:c,...i};return wg()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&Zs(n.emulatorConfig.host)&&(h.credentials="include"),hd.fetch()(await fd(n,n.config.apiHost,t,l),h)})}async function dd(n,e,t){n._canInitEmulator=!1;const r={...G_,...e};try{const s=new Y_(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ii(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ii(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ii(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ii(n,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw cd(n,f,h);Xt(n,f)}}catch(s){if(s instanceof Cn)throw s;Xt(n,"network-request-failed",{message:String(s)})}}async function ti(n,e,t,r,s={}){const i=await Pn(n,e,t,r,s);return"mfaPendingCredential"in i&&Xt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function fd(n,e,t,r){const s=`${e}${t}?${r}`,i=n,o=i.config.emulator?dl(n.config,s):`${n.config.apiScheme}://${s}`;return Q_.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function X_(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Y_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(on(this.auth,"network-request-failed")),J_.get())})}}function Ii(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=on(n,e,r);return s.customData._tokenResponse=t,s}function ec(n){return n!==void 0&&n.enterprise!==void 0}class Z_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return X_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function ey(n,e){return Pn(n,"GET","/v2/recaptchaConfig",Rn(n,e))}/**
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
 */async function ty(n,e){return Pn(n,"POST","/v1/accounts:delete",e)}async function Ji(n,e){return Pn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ps(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ny(n,e=!1){const t=xt(n),r=await t.getIdToken(e),s=fl(r);ue(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:Ps(go(s.auth_time)),issuedAtTime:Ps(go(s.iat)),expirationTime:Ps(go(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function go(n){return Number(n)*1e3}function fl(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return $i("JWT malformed, contained fewer than 3 sections"),null;try{const s=Xh(t);return s?JSON.parse(s):($i("Failed to decode base64 JWT payload"),null)}catch(s){return $i("Caught error parsing JWT payload as JSON",s?.toString()),null}}function tc(n){const e=fl(n);return ue(e,"internal-error"),ue(typeof e.exp<"u","internal-error"),ue(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Us(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Cn&&ry(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function ry({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class sy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class No{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ps(this.lastLoginAt),this.creationTime=Ps(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Xi(n){const e=n.auth,t=await n.getIdToken(),r=await Us(n,Ji(e,{idToken:t}));ue(r?.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=s.providerUserInfo?.length?pd(s.providerUserInfo):[],o=ay(n.providerData,i),l=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!o?.length,h=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new No(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,f)}async function iy(n){const e=xt(n);await Xi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ay(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function pd(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function oy(n,e){const t=await dd(n,{},async()=>{const r=Ys({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=await fd(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return n.emulatorConfig&&Zs(n.emulatorConfig.host)&&(c.credentials="include"),hd.fetch()(o,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ly(n,e){return Pn(n,"POST","/v2/accounts:revokeToken",Rn(n,e))}/**
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
 */class Fr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ue(e.idToken,"internal-error"),ue(typeof e.idToken<"u","internal-error"),ue(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):tc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ue(e.length!==0,"internal-error");const t=tc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ue(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await oy(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new Fr;return r&&(ue(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ue(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ue(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fr,this.toJSON())}_performRefresh(){return _n("not implemented")}}/**
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
 */function Mn(n,e){ue(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Qt{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new sy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new No(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Us(this,this.stsTokenManager.getToken(this.auth,e));return ue(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ny(this,e)}reload(){return iy(this)}_assign(e){this!==e&&(ue(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Qt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Xi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(zt(this.auth.app))return Promise.reject(wn(this.auth));const e=await this.getIdToken();return await Us(this,ty(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,l=t.tenantId??void 0,c=t._redirectEventId??void 0,h=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:m,emailVerified:w,isAnonymous:x,providerData:N,stsTokenManager:P}=t;ue(m&&P,e,"internal-error");const $=Fr.fromJSON(this.name,P);ue(typeof m=="string",e,"internal-error"),Mn(r,e.name),Mn(s,e.name),ue(typeof w=="boolean",e,"internal-error"),ue(typeof x=="boolean",e,"internal-error"),Mn(i,e.name),Mn(o,e.name),Mn(l,e.name),Mn(c,e.name),Mn(h,e.name),Mn(f,e.name);const D=new Qt({uid:m,auth:e,email:s,emailVerified:w,displayName:r,isAnonymous:x,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:$,createdAt:h,lastLoginAt:f});return N&&Array.isArray(N)&&(D.providerData=N.map(S=>({...S}))),c&&(D._redirectEventId=c),D}static async _fromIdTokenResponse(e,t,r=!1){const s=new Fr;s.updateFromServerResponse(t);const i=new Qt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Xi(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];ue(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?pd(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,l=new Fr;l.updateFromIdToken(r);const c=new Qt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new No(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(c,h),c}}/**
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
 */const nc=new Map;function yn(n){In(n instanceof Function,"Expected a class definition");let e=nc.get(n);return e?(In(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,nc.set(n,e),e)}/**
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
 */class md{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}md.type="NONE";const rc=md;/**
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
 */function Vi(n,e,t){return`firebase:${n}:${e}:${t}`}class jr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Vi(this.userKey,s.apiKey,i),this.fullPersistenceKey=Vi("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ji(this.auth,{idToken:e}).catch(()=>{});return t?Qt._fromGetAccountInfoResponse(this.auth,t,e):null}return Qt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new jr(yn(rc),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||yn(rc);const o=Vi(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const f=await h._get(o);if(f){let m;if(typeof f=="string"){const w=await Ji(e,{idToken:f}).catch(()=>{});if(!w)break;m=await Qt._fromGetAccountInfoResponse(e,w,f)}else m=Qt._fromJSON(e,f);h!==i&&(l=m),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new jr(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new jr(i,e,r))}}/**
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
 */function sc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wd(e))return"Blackberry";if(xd(e))return"Webos";if(_d(e))return"Safari";if((e.includes("chrome/")||yd(e))&&!e.includes("edge/"))return"Chrome";if(bd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function gd(n=$t()){return/firefox\//i.test(n)}function _d(n=$t()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yd(n=$t()){return/crios\//i.test(n)}function vd(n=$t()){return/iemobile/i.test(n)}function bd(n=$t()){return/android/i.test(n)}function wd(n=$t()){return/blackberry/i.test(n)}function xd(n=$t()){return/webos/i.test(n)}function pl(n=$t()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function uy(n=$t()){return pl(n)&&!!window.navigator?.standalone}function cy(){return Tg()&&document.documentMode===10}function Ed(n=$t()){return pl(n)||bd(n)||xd(n)||wd(n)||/windows phone/i.test(n)||vd(n)}/**
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
 */function Td(n,e=[]){let t;switch(n){case"Browser":t=sc($t());break;case"Worker":t=`${sc($t())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ns}/${r}`}/**
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
 */class hy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function dy(n,e={}){return Pn(n,"GET","/v2/passwordPolicy",Rn(n,e))}/**
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
 */const fy=6;class py{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??fy,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class my{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ic(this),this.idTokenSubscription=new ic(this),this.beforeStateQueue=new hy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ud,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=yn(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await jr.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ji(this,{idToken:e}),r=await Qt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(zt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,l=await this.tryRedirectSignIn(e);(!i||i===o)&&l?.user&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Xi(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=H_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(zt(this.app))return Promise.reject(wn(this));const t=e?xt(e):null;return t&&ue(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ue(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return zt(this.app)?Promise.reject(wn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return zt(this.app)?Promise.reject(wn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await dy(this),t=new py(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Xs("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await ly(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&yn(e)||this._popupRedirectResolver;ue(t,this,"argument-error"),this.redirectPersistenceManager=await jr.create(this,[yn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ue(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Td(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(zt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&q_(`Error while retrieving App Check token: ${e.error}`),e?.token}}function sr(n){return xt(n)}class ic{constructor(e){this.auth=e,this.observer=null,this.addObserver=$g(t=>this.observer=t)}get next(){return ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ba={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function gy(n){ba=n}function Id(n){return ba.loadJS(n)}function _y(){return ba.recaptchaEnterpriseScript}function yy(){return ba.gapiScript}function vy(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class by{constructor(){this.enterprise=new wy}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class wy{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const xy="recaptcha-enterprise",Ad="NO_RECAPTCHA";class Ey{constructor(e){this.type=xy,this.auth=sr(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{ey(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new Z_(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;ec(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(Ad)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new by().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!t&&ec(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=_y();c.length!==0&&(c+=l),Id(c).then(()=>{s(l,i,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function ac(n,e,t,r=!1,s=!1){const i=new Ey(n);let o;if(s)o=Ad;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const l={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Yi(n,e,t,r,s){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await ac(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await ac(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(i)})}/**
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
 */function Ty(n,e){const t=cl(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(En(i,e??{}))return s;Xt(s,"already-initialized")}return t.initialize({options:e})}function Iy(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(yn);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Ay(n,e,t){const r=sr(n);ue(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Sd(e),{host:o,port:l}=Sy(e),c=l===null?"":`:${l}`,h={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ue(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ue(En(h,r.config.emulator)&&En(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Zs(o)?td(`${i}//${o}${c}`):ky()}function Sd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Sy(n){const e=Sd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:oc(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:oc(o)}}}function oc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ky(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class ml{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return _n("not implemented")}_getIdTokenResponse(e){return _n("not implemented")}_linkToIdToken(e,t){return _n("not implemented")}_getReauthenticationResolver(e){return _n("not implemented")}}async function Cy(n,e){return Pn(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Ry(n,e){return ti(n,"POST","/v1/accounts:signInWithPassword",Rn(n,e))}async function Py(n,e){return Pn(n,"POST","/v1/accounts:sendOobCode",Rn(n,e))}async function $y(n,e){return Py(n,e)}/**
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
 */async function Vy(n,e){return ti(n,"POST","/v1/accounts:signInWithEmailLink",Rn(n,e))}async function Ny(n,e){return ti(n,"POST","/v1/accounts:signInWithEmailLink",Rn(n,e))}/**
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
 */class Fs extends ml{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Fs(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Fs(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yi(e,t,"signInWithPassword",Ry);case"emailLink":return Vy(e,{email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yi(e,r,"signUpPassword",Cy);case"emailLink":return Ny(e,{idToken:t,email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function zr(n,e){return ti(n,"POST","/v1/accounts:signInWithIdp",Rn(n,e))}/**
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
 */const Dy="http://localhost";class xr extends ml{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new xr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Xt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const o=new xr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return zr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,zr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,zr(e,t)}buildRequest(){const e={requestUri:Dy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ys(t)}return e}}/**
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
 */function Oy(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ly(n){const e=Ts(Is(n)).link,t=e?Ts(Is(e)).deep_link_id:null,r=Ts(Is(n)).deep_link_id;return(r?Ts(Is(r)).link:null)||r||t||e||n}class gl{constructor(e){const t=Ts(Is(e)),r=t.apiKey??null,s=t.oobCode??null,i=Oy(t.mode??null);ue(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Ly(e);try{return new gl(t)}catch{return null}}}/**
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
 */class rs{constructor(){this.providerId=rs.PROVIDER_ID}static credential(e,t){return Fs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=gl.parseLink(t);return ue(r,"argument-error"),Fs._fromEmailAndCode(e,r.code,r.tenantId)}}rs.PROVIDER_ID="password";rs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";rs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class kd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ni extends kd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Un extends ni{constructor(){super("facebook.com")}static credential(e){return xr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.FACEBOOK_SIGN_IN_METHOD="facebook.com";Un.PROVIDER_ID="facebook.com";/**
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
 */class Fn extends ni{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return xr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Fn.credential(t,r)}catch{return null}}}Fn.GOOGLE_SIGN_IN_METHOD="google.com";Fn.PROVIDER_ID="google.com";/**
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
 */class jn extends ni{constructor(){super("github.com")}static credential(e){return xr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jn.credential(e.oauthAccessToken)}catch{return null}}}jn.GITHUB_SIGN_IN_METHOD="github.com";jn.PROVIDER_ID="github.com";/**
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
 */class zn extends ni{constructor(){super("twitter.com")}static credential(e,t){return xr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return zn.credential(t,r)}catch{return null}}}zn.TWITTER_SIGN_IN_METHOD="twitter.com";zn.PROVIDER_ID="twitter.com";/**
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
 */async function My(n,e){return ti(n,"POST","/v1/accounts:signUp",Rn(n,e))}/**
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
 */class Er{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Qt._fromIdTokenResponse(e,r,s),o=lc(r);return new Er({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=lc(r);return new Er({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function lc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Zi extends Cn{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Zi.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Zi(e,t,r,s)}}function Cd(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Zi._fromErrorAndOperation(n,i,e,r):i})}async function Uy(n,e,t=!1){const r=await Us(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Er._forOperation(n,"link",r)}/**
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
 */async function Fy(n,e,t=!1){const{auth:r}=n;if(zt(r.app))return Promise.reject(wn(r));const s="reauthenticate";try{const i=await Us(n,Cd(r,s,e,n),t);ue(i.idToken,r,"internal-error");const o=fl(i.idToken);ue(o,r,"internal-error");const{sub:l}=o;return ue(n.uid===l,r,"user-mismatch"),Er._forOperation(n,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Xt(r,"user-mismatch"),i}}/**
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
 */async function Rd(n,e,t=!1){if(zt(n.app))return Promise.reject(wn(n));const r="signIn",s=await Cd(n,r,e),i=await Er._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function jy(n,e){return Rd(sr(n),e)}/**
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
 */async function Pd(n){const e=sr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function zy(n,e,t){const r=sr(n);await Yi(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",$y)}async function By(n,e,t){if(zt(n.app))return Promise.reject(wn(n));const r=sr(n),o=await Yi(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",My).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Pd(n),c}),l=await Er._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function qy(n,e,t){return zt(n.app)?Promise.reject(wn(n)):jy(xt(n),rs.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Pd(n),r})}function Wy(n,e,t,r){return xt(n).onIdTokenChanged(e,t,r)}function Ky(n,e,t){return xt(n).beforeAuthStateChanged(e,t)}function Hy(n,e,t,r){return xt(n).onAuthStateChanged(e,t,r)}function Gy(n){return xt(n).signOut()}const ea="__sak";/**
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
 */class $d{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ea,"1"),this.storage.removeItem(ea),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Qy=1e3,Jy=10;class Vd extends $d{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ed(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);cy()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Jy):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Qy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vd.type="LOCAL";const Xy=Vd;/**
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
 */class Nd extends $d{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Nd.type="SESSION";const Dd=Nd;/**
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
 */function Yy(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class wa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new wa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(t.origin,i)),c=await Yy(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wa.receivers=[];/**
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
 */function _l(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Zy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const h=_l("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const w=m;if(w.data.eventId===h)switch(w.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(w.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ln(){return window}function ev(n){ln().location.href=n}/**
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
 */function Od(){return typeof ln().WorkerGlobalScope<"u"&&typeof ln().importScripts=="function"}async function tv(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nv(){return navigator?.serviceWorker?.controller||null}function rv(){return Od()?self:null}/**
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
 */const Ld="firebaseLocalStorageDb",sv=1,ta="firebaseLocalStorage",Md="fbase_key";class ri{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function xa(n,e){return n.transaction([ta],e?"readwrite":"readonly").objectStore(ta)}function iv(){const n=indexedDB.deleteDatabase(Ld);return new ri(n).toPromise()}function Ud(){const n=indexedDB.open(Ld,sv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ta,{keyPath:Md})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ta)?e(r):(r.close(),await iv(),e(await Ud()))})})}async function uc(n,e,t){const r=xa(n,!0).put({[Md]:e,value:t});return new ri(r).toPromise()}async function av(n,e){const t=xa(n,!1).get(e),r=await new ri(t).toPromise();return r===void 0?null:r.value}function cc(n,e){const t=xa(n,!0).delete(e);return new ri(t).toPromise()}const ov=800,lv=3;class Fd{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=Ud(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>lv)throw r;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return Od()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wa._getInstance(rv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await tv(),!this.activeServiceWorker)return;this.sender=new Zy(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await uc(e,ea,"1"),await cc(e,ea)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>uc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>av(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>cc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=xa(s,!1).getAll();return new ri(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ov)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fd.type="LOCAL";const uv=Fd;new ei(3e4,6e4);/**
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
 */function cv(n,e){return e?yn(e):(ue(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class yl extends ml{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return zr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return zr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function hv(n){return Rd(n.auth,new yl(n),n.bypassAuthState)}function dv(n){const{auth:e,user:t}=n;return ue(t,e,"internal-error"),Fy(t,new yl(n),n.bypassAuthState)}async function fv(n){const{auth:e,user:t}=n;return ue(t,e,"internal-error"),Uy(t,new yl(n),n.bypassAuthState)}/**
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
 */class jd{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hv;case"linkViaPopup":case"linkViaRedirect":return fv;case"reauthViaPopup":case"reauthViaRedirect":return dv;default:Xt(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const pv=new ei(2e3,1e4);class Lr extends jd{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Lr.currentPopupAction&&Lr.currentPopupAction.cancel(),Lr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ue(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=_l();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(on(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(on(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Lr.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(on(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pv.get())};e()}}Lr.currentPopupAction=null;/**
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
 */const mv="pendingRedirect",Ni=new Map;class gv extends jd{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ni.get(this.auth._key());if(!e){try{const r=await _v(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ni.set(this.auth._key(),e)}return this.bypassAuthState||Ni.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _v(n,e){const t=bv(e),r=vv(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function yv(n,e){Ni.set(n._key(),e)}function vv(n){return yn(n._redirectPersistence)}function bv(n){return Vi(mv,n.config.apiKey,n.name)}async function wv(n,e,t=!1){if(zt(n.app))return Promise.reject(wn(n));const r=sr(n),s=cv(r,e),o=await new gv(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const xv=10*60*1e3;class Ev{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Tv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!zd(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(on(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xv&&this.cachedEventUids.clear(),this.cachedEventUids.has(hc(e))}saveEventToCache(e){this.cachedEventUids.add(hc(e)),this.lastProcessedEventTime=Date.now()}}function hc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function zd({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Tv(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zd(n);default:return!1}}/**
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
 */async function Iv(n,e={}){return Pn(n,"GET","/v1/projects",e)}/**
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
 */const Av=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Sv=/^https?/;async function kv(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Iv(n);for(const t of e)try{if(Cv(t))return}catch{}Xt(n,"unauthorized-domain")}function Cv(n){const e=Vo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!Sv.test(t))return!1;if(Av.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Rv=new ei(3e4,6e4);function dc(){const n=ln().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Pv(n){return new Promise((e,t)=>{function r(){dc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dc(),t(on(n,"network-request-failed"))},timeout:Rv.get()})}if(ln().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(ln().gapi?.load)r();else{const s=vy("iframefcb");return ln()[s]=()=>{gapi.load?r():t(on(n,"network-request-failed"))},Id(`${yy()}?onload=${s}`).catch(i=>t(i))}}).catch(e=>{throw Di=null,e})}let Di=null;function $v(n){return Di=Di||Pv(n),Di}/**
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
 */const Vv=new ei(5e3,15e3),Nv="__/auth/iframe",Dv="emulator/auth/iframe",Ov={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Lv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Mv(n){const e=n.config;ue(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?dl(e,Dv):`https://${n.config.authDomain}/${Nv}`,r={apiKey:e.apiKey,appName:n.name,v:ns},s=Lv.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Ys(r).slice(1)}`}async function Uv(n){const e=await $v(n),t=ln().gapi;return ue(t,n,"internal-error"),e.open({where:document.body,url:Mv(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ov,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=on(n,"network-request-failed"),l=ln().setTimeout(()=>{i(o)},Vv.get());function c(){ln().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Fv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jv=500,zv=600,Bv="_blank",qv="http://localhost";class fc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Wv(n,e,t,r=jv,s=zv){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c={...Fv,width:r.toString(),height:s.toString(),top:i,left:o},h=$t().toLowerCase();t&&(l=yd(h)?Bv:t),gd(h)&&(e=e||qv,c.scrollbars="yes");const f=Object.entries(c).reduce((w,[x,N])=>`${w}${x}=${N},`,"");if(uy(h)&&l!=="_self")return Kv(e||"",l),new fc(null);const m=window.open(e||"",l,f);ue(m,n,"popup-blocked");try{m.focus()}catch{}return new fc(m)}function Kv(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Hv="__/auth/handler",Gv="emulator/auth/handler",Qv=encodeURIComponent("fac");async function pc(n,e,t,r,s,i){ue(n.config.authDomain,n,"auth-domain-config-required"),ue(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:ns,eventId:s};if(e instanceof kd){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Pg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof ni){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await n._getAppCheckToken(),h=c?`#${Qv}=${encodeURIComponent(c)}`:"";return`${Jv(n)}?${Ys(l).slice(1)}${h}`}function Jv({config:n}){return n.emulator?dl(n,Gv):`https://${n.authDomain}/${Hv}`}/**
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
 */const _o="webStorageSupport";class Xv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dd,this._completeRedirectFn=wv,this._overrideRedirectResult=yv}async _openPopup(e,t,r,s){In(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await pc(e,t,r,Vo(),s);return Wv(e,i,_l())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await pc(e,t,r,Vo(),s);return ev(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(In(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Uv(e),r=new Ev(e);return t.register("authEvent",s=>(ue(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(_o,{type:_o},s=>{const i=s?.[0]?.[_o];i!==void 0&&t(!!i),Xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=kv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ed()||_d()||pl()}}const Yv=Xv;var mc="@firebase/auth",gc="1.13.2";/**
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
 */class Zv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function eb(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function tb(n){Hr(new wr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ue(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Td(n)},h=new my(r,s,i,c);return Iy(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Hr(new wr("auth-internal",e=>{const t=sr(e.getProvider("auth").getImmediate());return(r=>new Zv(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kn(mc,gc,eb(n)),Kn(mc,gc,"esm2020")}/**
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
 */const nb=5*60,rb=ed("authIdTokenMaxAge")||nb;let _c=null;const sb=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>rb)return;const s=t?.token;_c!==s&&(_c=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ib(n=id()){const e=cl(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Ty(n,{popupRedirectResolver:Yv,persistence:[uv,Xy,Dd]}),r=ed("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=sb(i.toString());Ky(t,o,()=>o(t.currentUser)),Wy(t,l=>o(l))}}const s=Yh("auth");return s&&Ay(t,`http://${s}`),t}function ab(){return document.getElementsByTagName("head")?.[0]??document}gy({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=on("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",ab().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});tb("Browser");var yc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hn,Bd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,y){function v(){}v.prototype=y.prototype,b.F=y.prototype,b.prototype=new v,b.prototype.constructor=b,b.D=function(T,E,I){for(var p=Array(arguments.length-2),j=2;j<arguments.length;j++)p[j-2]=arguments[j];return y.prototype[E].apply(T,p)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,y,v){v||(v=0);const T=Array(16);if(typeof y=="string")for(var E=0;E<16;++E)T[E]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(E=0;E<16;++E)T[E]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=b.g[0],v=b.g[1],E=b.g[2];let I=b.g[3],p;p=y+(I^v&(E^I))+T[0]+3614090360&4294967295,y=v+(p<<7&4294967295|p>>>25),p=I+(E^y&(v^E))+T[1]+3905402710&4294967295,I=y+(p<<12&4294967295|p>>>20),p=E+(v^I&(y^v))+T[2]+606105819&4294967295,E=I+(p<<17&4294967295|p>>>15),p=v+(y^E&(I^y))+T[3]+3250441966&4294967295,v=E+(p<<22&4294967295|p>>>10),p=y+(I^v&(E^I))+T[4]+4118548399&4294967295,y=v+(p<<7&4294967295|p>>>25),p=I+(E^y&(v^E))+T[5]+1200080426&4294967295,I=y+(p<<12&4294967295|p>>>20),p=E+(v^I&(y^v))+T[6]+2821735955&4294967295,E=I+(p<<17&4294967295|p>>>15),p=v+(y^E&(I^y))+T[7]+4249261313&4294967295,v=E+(p<<22&4294967295|p>>>10),p=y+(I^v&(E^I))+T[8]+1770035416&4294967295,y=v+(p<<7&4294967295|p>>>25),p=I+(E^y&(v^E))+T[9]+2336552879&4294967295,I=y+(p<<12&4294967295|p>>>20),p=E+(v^I&(y^v))+T[10]+4294925233&4294967295,E=I+(p<<17&4294967295|p>>>15),p=v+(y^E&(I^y))+T[11]+2304563134&4294967295,v=E+(p<<22&4294967295|p>>>10),p=y+(I^v&(E^I))+T[12]+1804603682&4294967295,y=v+(p<<7&4294967295|p>>>25),p=I+(E^y&(v^E))+T[13]+4254626195&4294967295,I=y+(p<<12&4294967295|p>>>20),p=E+(v^I&(y^v))+T[14]+2792965006&4294967295,E=I+(p<<17&4294967295|p>>>15),p=v+(y^E&(I^y))+T[15]+1236535329&4294967295,v=E+(p<<22&4294967295|p>>>10),p=y+(E^I&(v^E))+T[1]+4129170786&4294967295,y=v+(p<<5&4294967295|p>>>27),p=I+(v^E&(y^v))+T[6]+3225465664&4294967295,I=y+(p<<9&4294967295|p>>>23),p=E+(y^v&(I^y))+T[11]+643717713&4294967295,E=I+(p<<14&4294967295|p>>>18),p=v+(I^y&(E^I))+T[0]+3921069994&4294967295,v=E+(p<<20&4294967295|p>>>12),p=y+(E^I&(v^E))+T[5]+3593408605&4294967295,y=v+(p<<5&4294967295|p>>>27),p=I+(v^E&(y^v))+T[10]+38016083&4294967295,I=y+(p<<9&4294967295|p>>>23),p=E+(y^v&(I^y))+T[15]+3634488961&4294967295,E=I+(p<<14&4294967295|p>>>18),p=v+(I^y&(E^I))+T[4]+3889429448&4294967295,v=E+(p<<20&4294967295|p>>>12),p=y+(E^I&(v^E))+T[9]+568446438&4294967295,y=v+(p<<5&4294967295|p>>>27),p=I+(v^E&(y^v))+T[14]+3275163606&4294967295,I=y+(p<<9&4294967295|p>>>23),p=E+(y^v&(I^y))+T[3]+4107603335&4294967295,E=I+(p<<14&4294967295|p>>>18),p=v+(I^y&(E^I))+T[8]+1163531501&4294967295,v=E+(p<<20&4294967295|p>>>12),p=y+(E^I&(v^E))+T[13]+2850285829&4294967295,y=v+(p<<5&4294967295|p>>>27),p=I+(v^E&(y^v))+T[2]+4243563512&4294967295,I=y+(p<<9&4294967295|p>>>23),p=E+(y^v&(I^y))+T[7]+1735328473&4294967295,E=I+(p<<14&4294967295|p>>>18),p=v+(I^y&(E^I))+T[12]+2368359562&4294967295,v=E+(p<<20&4294967295|p>>>12),p=y+(v^E^I)+T[5]+4294588738&4294967295,y=v+(p<<4&4294967295|p>>>28),p=I+(y^v^E)+T[8]+2272392833&4294967295,I=y+(p<<11&4294967295|p>>>21),p=E+(I^y^v)+T[11]+1839030562&4294967295,E=I+(p<<16&4294967295|p>>>16),p=v+(E^I^y)+T[14]+4259657740&4294967295,v=E+(p<<23&4294967295|p>>>9),p=y+(v^E^I)+T[1]+2763975236&4294967295,y=v+(p<<4&4294967295|p>>>28),p=I+(y^v^E)+T[4]+1272893353&4294967295,I=y+(p<<11&4294967295|p>>>21),p=E+(I^y^v)+T[7]+4139469664&4294967295,E=I+(p<<16&4294967295|p>>>16),p=v+(E^I^y)+T[10]+3200236656&4294967295,v=E+(p<<23&4294967295|p>>>9),p=y+(v^E^I)+T[13]+681279174&4294967295,y=v+(p<<4&4294967295|p>>>28),p=I+(y^v^E)+T[0]+3936430074&4294967295,I=y+(p<<11&4294967295|p>>>21),p=E+(I^y^v)+T[3]+3572445317&4294967295,E=I+(p<<16&4294967295|p>>>16),p=v+(E^I^y)+T[6]+76029189&4294967295,v=E+(p<<23&4294967295|p>>>9),p=y+(v^E^I)+T[9]+3654602809&4294967295,y=v+(p<<4&4294967295|p>>>28),p=I+(y^v^E)+T[12]+3873151461&4294967295,I=y+(p<<11&4294967295|p>>>21),p=E+(I^y^v)+T[15]+530742520&4294967295,E=I+(p<<16&4294967295|p>>>16),p=v+(E^I^y)+T[2]+3299628645&4294967295,v=E+(p<<23&4294967295|p>>>9),p=y+(E^(v|~I))+T[0]+4096336452&4294967295,y=v+(p<<6&4294967295|p>>>26),p=I+(v^(y|~E))+T[7]+1126891415&4294967295,I=y+(p<<10&4294967295|p>>>22),p=E+(y^(I|~v))+T[14]+2878612391&4294967295,E=I+(p<<15&4294967295|p>>>17),p=v+(I^(E|~y))+T[5]+4237533241&4294967295,v=E+(p<<21&4294967295|p>>>11),p=y+(E^(v|~I))+T[12]+1700485571&4294967295,y=v+(p<<6&4294967295|p>>>26),p=I+(v^(y|~E))+T[3]+2399980690&4294967295,I=y+(p<<10&4294967295|p>>>22),p=E+(y^(I|~v))+T[10]+4293915773&4294967295,E=I+(p<<15&4294967295|p>>>17),p=v+(I^(E|~y))+T[1]+2240044497&4294967295,v=E+(p<<21&4294967295|p>>>11),p=y+(E^(v|~I))+T[8]+1873313359&4294967295,y=v+(p<<6&4294967295|p>>>26),p=I+(v^(y|~E))+T[15]+4264355552&4294967295,I=y+(p<<10&4294967295|p>>>22),p=E+(y^(I|~v))+T[6]+2734768916&4294967295,E=I+(p<<15&4294967295|p>>>17),p=v+(I^(E|~y))+T[13]+1309151649&4294967295,v=E+(p<<21&4294967295|p>>>11),p=y+(E^(v|~I))+T[4]+4149444226&4294967295,y=v+(p<<6&4294967295|p>>>26),p=I+(v^(y|~E))+T[11]+3174756917&4294967295,I=y+(p<<10&4294967295|p>>>22),p=E+(y^(I|~v))+T[2]+718787259&4294967295,E=I+(p<<15&4294967295|p>>>17),p=v+(I^(E|~y))+T[9]+3951481745&4294967295,b.g[0]=b.g[0]+y&4294967295,b.g[1]=b.g[1]+(E+(p<<21&4294967295|p>>>11))&4294967295,b.g[2]=b.g[2]+E&4294967295,b.g[3]=b.g[3]+I&4294967295}r.prototype.v=function(b,y){y===void 0&&(y=b.length);const v=y-this.blockSize,T=this.C;let E=this.h,I=0;for(;I<y;){if(E==0)for(;I<=v;)s(this,b,I),I+=this.blockSize;if(typeof b=="string"){for(;I<y;)if(T[E++]=b.charCodeAt(I++),E==this.blockSize){s(this,T),E=0;break}}else for(;I<y;)if(T[E++]=b[I++],E==this.blockSize){s(this,T),E=0;break}}this.h=E,this.o+=y},r.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var y=1;y<b.length-8;++y)b[y]=0;y=this.o*8;for(var v=b.length-8;v<b.length;++v)b[v]=y&255,y/=256;for(this.v(b),b=Array(16),y=0,v=0;v<4;++v)for(let T=0;T<32;T+=8)b[y++]=this.g[v]>>>T&255;return b};function i(b,y){var v=l;return Object.prototype.hasOwnProperty.call(v,b)?v[b]:v[b]=y(b)}function o(b,y){this.h=y;const v=[];let T=!0;for(let E=b.length-1;E>=0;E--){const I=b[E]|0;T&&I==y||(v[E]=I,T=!1)}this.g=v}var l={};function c(b){return-128<=b&&b<128?i(b,function(y){return new o([y|0],y<0?-1:0)}):new o([b|0],b<0?-1:0)}function h(b){if(isNaN(b)||!isFinite(b))return m;if(b<0)return $(h(-b));const y=[];let v=1;for(let T=0;b>=v;T++)y[T]=b/v|0,v*=4294967296;return new o(y,0)}function f(b,y){if(b.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(b.charAt(0)=="-")return $(f(b.substring(1),y));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=h(Math.pow(y,8));let T=m;for(let I=0;I<b.length;I+=8){var E=Math.min(8,b.length-I);const p=parseInt(b.substring(I,I+E),y);E<8?(E=h(Math.pow(y,E)),T=T.j(E).add(h(p))):(T=T.j(v),T=T.add(h(p)))}return T}var m=c(0),w=c(1),x=c(16777216);n=o.prototype,n.m=function(){if(P(this))return-$(this).m();let b=0,y=1;for(let v=0;v<this.g.length;v++){const T=this.i(v);b+=(T>=0?T:4294967296+T)*y,y*=4294967296}return b},n.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(N(this))return"0";if(P(this))return"-"+$(this).toString(b);const y=h(Math.pow(b,6));var v=this;let T="";for(;;){const E=U(v,y).g;v=D(v,E.j(y));let I=((v.g.length>0?v.g[0]:v.h)>>>0).toString(b);if(v=E,N(v))return I+T;for(;I.length<6;)I="0"+I;T=I+T}},n.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function N(b){if(b.h!=0)return!1;for(let y=0;y<b.g.length;y++)if(b.g[y]!=0)return!1;return!0}function P(b){return b.h==-1}n.l=function(b){return b=D(this,b),P(b)?-1:N(b)?0:1};function $(b){const y=b.g.length,v=[];for(let T=0;T<y;T++)v[T]=~b.g[T];return new o(v,~b.h).add(w)}n.abs=function(){return P(this)?$(this):this},n.add=function(b){const y=Math.max(this.g.length,b.g.length),v=[];let T=0;for(let E=0;E<=y;E++){let I=T+(this.i(E)&65535)+(b.i(E)&65535),p=(I>>>16)+(this.i(E)>>>16)+(b.i(E)>>>16);T=p>>>16,I&=65535,p&=65535,v[E]=p<<16|I}return new o(v,v[v.length-1]&-2147483648?-1:0)};function D(b,y){return b.add($(y))}n.j=function(b){if(N(this)||N(b))return m;if(P(this))return P(b)?$(this).j($(b)):$($(this).j(b));if(P(b))return $(this.j($(b)));if(this.l(x)<0&&b.l(x)<0)return h(this.m()*b.m());const y=this.g.length+b.g.length,v=[];for(var T=0;T<2*y;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(let E=0;E<b.g.length;E++){const I=this.i(T)>>>16,p=this.i(T)&65535,j=b.i(E)>>>16,re=b.i(E)&65535;v[2*T+2*E]+=p*re,S(v,2*T+2*E),v[2*T+2*E+1]+=I*re,S(v,2*T+2*E+1),v[2*T+2*E+1]+=p*j,S(v,2*T+2*E+1),v[2*T+2*E+2]+=I*j,S(v,2*T+2*E+2)}for(b=0;b<y;b++)v[b]=v[2*b+1]<<16|v[2*b];for(b=y;b<2*y;b++)v[b]=0;return new o(v,0)};function S(b,y){for(;(b[y]&65535)!=b[y];)b[y+1]+=b[y]>>>16,b[y]&=65535,y++}function M(b,y){this.g=b,this.h=y}function U(b,y){if(N(y))throw Error("division by zero");if(N(b))return new M(m,m);if(P(b))return y=U($(b),y),new M($(y.g),$(y.h));if(P(y))return y=U(b,$(y)),new M($(y.g),y.h);if(b.g.length>30){if(P(b)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var v=w,T=y;T.l(b)<=0;)v=K(v),T=K(T);var E=V(v,1),I=V(T,1);for(T=V(T,2),v=V(v,2);!N(T);){var p=I.add(T);p.l(b)<=0&&(E=E.add(v),I=p),T=V(T,1),v=V(v,1)}return y=D(b,E.j(y)),new M(E,y)}for(E=m;b.l(y)>=0;){for(v=Math.max(1,Math.floor(b.m()/y.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),I=h(v),p=I.j(y);P(p)||p.l(b)>0;)v-=T,I=h(v),p=I.j(y);N(I)&&(I=w),E=E.add(I),b=D(b,p)}return new M(E,b)}n.B=function(b){return U(this,b).h},n.and=function(b){const y=Math.max(this.g.length,b.g.length),v=[];for(let T=0;T<y;T++)v[T]=this.i(T)&b.i(T);return new o(v,this.h&b.h)},n.or=function(b){const y=Math.max(this.g.length,b.g.length),v=[];for(let T=0;T<y;T++)v[T]=this.i(T)|b.i(T);return new o(v,this.h|b.h)},n.xor=function(b){const y=Math.max(this.g.length,b.g.length),v=[];for(let T=0;T<y;T++)v[T]=this.i(T)^b.i(T);return new o(v,this.h^b.h)};function K(b){const y=b.g.length+1,v=[];for(let T=0;T<y;T++)v[T]=b.i(T)<<1|b.i(T-1)>>>31;return new o(v,b.h)}function V(b,y){const v=y>>5;y%=32;const T=b.g.length-v,E=[];for(let I=0;I<T;I++)E[I]=y>0?b.i(I+v)>>>y|b.i(I+v+1)<<32-y:b.i(I+v);return new o(E,b.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Bd=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Hn=o}).apply(typeof yc<"u"?yc:typeof self<"u"?self:typeof window<"u"?window:{});var Ai=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qd,As,Wd,Oi,Do,Kd,Hd,Gd;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ai=="object"&&Ai];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(a,u){if(u)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var A=a[g];if(!(A in d))break e;d=d[A]}a=a[a.length-1],g=d[a],u=u(g),u!=g&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(u){var d=[],g;for(g in u)Object.prototype.hasOwnProperty.call(u,g)&&d.push([g,u[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function c(a,u,d){return a.call.apply(a.bind,arguments)}function h(a,u,d){return h=c,h.apply(null,arguments)}function f(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function m(a,u){function d(){}d.prototype=u.prototype,a.Z=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,A,R){for(var q=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)q[pe-2]=arguments[pe];return u.prototype[A].apply(g,q)}}var w=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function x(a){const u=a.length;if(u>0){const d=Array(u);for(let g=0;g<u;g++)d[g]=a[g];return d}return[]}function N(a,u){for(let g=1;g<arguments.length;g++){const A=arguments[g];var d=typeof A;if(d=d!="object"?d:A?Array.isArray(A)?"array":d:"null",d=="array"||d=="object"&&typeof A.length=="number"){d=a.length||0;const R=A.length||0;a.length=d+R;for(let q=0;q<R;q++)a[d+q]=A[q]}else a.push(A)}}class P{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function $(a){o.setTimeout(()=>{throw a},0)}function D(){var a=b;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class S{constructor(){this.h=this.g=null}add(u,d){const g=M.get();g.set(u,d),this.h?this.h.next=g:this.g=g,this.h=g}}var M=new P(()=>new U,a=>a.reset());class U{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let K,V=!1,b=new S,y=()=>{const a=Promise.resolve(void 0);K=()=>{a.then(v)}};function v(){for(var a;a=D();){try{a.h.call(a.g)}catch(d){$(d)}var u=M;u.j(a),u.h<100&&(u.h++,a.next=u.g,u.g=a)}V=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var I=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,u),o.removeEventListener("test",d,u)}catch{}return a}();function p(a){return/^[\s\xa0]*$/.test(a)}function j(a,u){E.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,u)}m(j,E),j.prototype.init=function(a,u){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget,u||(d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement)),this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&j.Z.h.call(this)},j.prototype.h=function(){j.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var re="closure_listenable_"+(Math.random()*1e6|0),Ae=0;function Oe(a,u,d,g,A){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!g,this.ha=A,this.key=++Ae,this.da=this.fa=!1}function Ue(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ge(a,u,d){for(const g in a)u.call(d,a[g],g,a)}function Be(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function Ye(a){const u={};for(const d in a)u[d]=a[d];return u}const St="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ze(a,u){let d,g;for(let A=1;A<arguments.length;A++){g=arguments[A];for(d in g)a[d]=g[d];for(let R=0;R<St.length;R++)d=St[R],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function _t(a){this.src=a,this.g={},this.h=0}_t.prototype.add=function(a,u,d,g,A){const R=a.toString();a=this.g[R],a||(a=this.g[R]=[],this.h++);const q=yt(a,u,g,A);return q>-1?(u=a[q],d||(u.fa=!1)):(u=new Oe(u,this.src,R,!!g,A),u.fa=d,a.push(u)),u};function Vt(a,u){const d=u.type;if(d in a.g){var g=a.g[d],A=Array.prototype.indexOf.call(g,u,void 0),R;(R=A>=0)&&Array.prototype.splice.call(g,A,1),R&&(Ue(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function yt(a,u,d,g){for(let A=0;A<a.length;++A){const R=a[A];if(!R.da&&R.listener==u&&R.capture==!!d&&R.ha==g)return A}return-1}var ct="closure_lm_"+(Math.random()*1e6|0),vt={};function Ee(a,u,d,g,A){if(Array.isArray(u)){for(let R=0;R<u.length;R++)Ee(a,u[R],d,g,A);return null}return d=Z(d),a&&a[re]?a.J(u,d,l(g)?!!g.capture:!1,A):Pe(a,u,d,!1,g,A)}function Pe(a,u,d,g,A,R){if(!u)throw Error("Invalid event type");const q=l(A)?!!A.capture:!!A;let pe=F(a);if(pe||(a[ct]=pe=new _t(a)),d=pe.add(u,d,g,q,R),d.proxy)return d;if(g=et(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)I||(A=q),A===void 0&&(A=!1),a.addEventListener(u.toString(),g,A);else if(a.attachEvent)a.attachEvent(ae(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function et(){function a(d){return u.call(a.src,a.listener,d)}const u=J;return a}function ht(a,u,d,g,A){if(Array.isArray(u))for(var R=0;R<u.length;R++)ht(a,u[R],d,g,A);else g=l(g)?!!g.capture:!!g,d=Z(d),a&&a[re]?(a=a.i,R=String(u).toString(),R in a.g&&(u=a.g[R],d=yt(u,d,g,A),d>-1&&(Ue(u[d]),Array.prototype.splice.call(u,d,1),u.length==0&&(delete a.g[R],a.h--)))):a&&(a=F(a))&&(u=a.g[u.toString()],a=-1,u&&(a=yt(u,d,g,A)),(d=a>-1?u[a]:null)&&Et(d))}function Et(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[re])Vt(u.i,a);else{var d=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(d,g,a.capture):u.detachEvent?u.detachEvent(ae(d),g):u.addListener&&u.removeListener&&u.removeListener(g),(d=F(u))?(Vt(d,a),d.h==0&&(d.src=null,u[ct]=null)):Ue(a)}}}function ae(a){return a in vt?vt[a]:vt[a]="on"+a}function J(a,u){if(a.da)a=!0;else{u=new j(u,this);const d=a.listener,g=a.ha||a.src;a.fa&&Et(a),a=d.call(g,u)}return a}function F(a){return a=a[ct],a instanceof _t?a:null}var W="__closure_events_fn_"+(Math.random()*1e9>>>0);function Z(a){return typeof a=="function"?a:(a[W]||(a[W]=function(u){return a.handleEvent(u)}),a[W])}function Y(){T.call(this),this.i=new _t(this),this.M=this,this.G=null}m(Y,T),Y.prototype[re]=!0,Y.prototype.removeEventListener=function(a,u,d,g){ht(this,a,u,d,g)};function B(a,u){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new E(u,a);else if(u instanceof E)u.target=u.target||a;else{var A=u;u=new E(g,a),Ze(u,A)}A=!0;let R,q;if(d)for(q=d.length-1;q>=0;q--)R=u.g=d[q],A=he(R,g,!0,u)&&A;if(R=u.g=a,A=he(R,g,!0,u)&&A,A=he(R,g,!1,u)&&A,d)for(q=0;q<d.length;q++)R=u.g=d[q],A=he(R,g,!1,u)&&A}Y.prototype.N=function(){if(Y.Z.N.call(this),this.i){var a=this.i;for(const u in a.g){const d=a.g[u];for(let g=0;g<d.length;g++)Ue(d[g]);delete a.g[u],a.h--}}this.G=null},Y.prototype.J=function(a,u,d,g){return this.i.add(String(a),u,!1,d,g)},Y.prototype.K=function(a,u,d,g){return this.i.add(String(a),u,!0,d,g)};function he(a,u,d,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();let A=!0;for(let R=0;R<u.length;++R){const q=u[R];if(q&&!q.da&&q.capture==d){const pe=q.listener,pt=q.ha||q.src;q.fa&&Vt(a.i,q),A=pe.call(pt,g)!==!1&&A}}return A&&!g.defaultPrevented}function oe(a,u){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:o.setTimeout(a,u||0)}function Se(a){a.g=oe(()=>{a.g=null,a.i&&(a.i=!1,Se(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class me extends T{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Se(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ge(a){T.call(this),this.h=a,this.g={}}m(ge,T);var be=[];function ke(a){Ge(a.g,function(u,d){this.g.hasOwnProperty(d)&&Et(u)},a),a.g={}}ge.prototype.N=function(){ge.Z.N.call(this),ke(this)},ge.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var tt=o.JSON.stringify,nt=o.JSON.parse,Ne=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Fe(){}function dt(){}var Qe={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function H(){E.call(this,"d")}m(H,E);function se(){E.call(this,"c")}m(se,E);var le={},ne=null;function _e(){return ne=ne||new Y}le.Ia="serverreachability";function Ce(a){E.call(this,le.Ia,a)}m(Ce,E);function $e(a){const u=_e();B(u,new Ce(u))}le.STAT_EVENT="statevent";function Nt(a,u){E.call(this,le.STAT_EVENT,a),this.stat=u}m(Nt,E);function Le(a){const u=_e();B(u,new Nt(u,a))}le.Ja="timingevent";function or(a,u){E.call(this,le.Ja,a),this.size=u}m(or,E);function jt(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},u)}function Dt(){this.g=!0}Dt.prototype.ua=function(){this.g=!1};function tn(a,u,d,g,A,R){a.info(function(){if(a.g)if(R){var q="",pe=R.split("&");for(let Me=0;Me<pe.length;Me++){var pt=pe[Me].split("=");if(pt.length>1){const bt=pt[0];pt=pt[1];const rn=bt.split("_");q=rn.length>=2&&rn[1]=="type"?q+(bt+"="+pt+"&"):q+(bt+"=redacted&")}}}else q=null;else q=R;return"XMLHTTP REQ ("+g+") [attempt "+A+"]: "+u+`
`+d+`
`+q})}function lr(a,u,d,g,A,R,q){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+A+"]: "+u+`
`+d+`
`+R+" "+q})}function gn(a,u,d,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Wa(a,d)+(g?" "+g:"")})}function qa(a,u){a.info(function(){return"TIMEOUT: "+u})}Dt.prototype.info=function(){};function Wa(a,u){if(!a.g)return u;if(!u)return null;try{const R=JSON.parse(u);if(R){for(a=0;a<R.length;a++)if(Array.isArray(R[a])){var d=R[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var A=g[0];if(A!="noop"&&A!="stop"&&A!="close")for(let q=1;q<g.length;q++)g[q]=""}}}}return tt(R)}catch{return u}}var ur={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},fi={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},pi;function cs(){}m(cs,Fe),cs.prototype.g=function(){return new XMLHttpRequest},pi=new cs;function cr(a){return encodeURIComponent(String(a))}function Ka(a){var u=1;a=a.split(":");const d=[];for(;u>0&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function te(a,u,d,g){this.j=a,this.i=u,this.l=d,this.S=g||1,this.V=new ge(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ft}function ft(){this.i=null,this.g="",this.h=!1}var Ht={},$n={};function hs(a,u,d){a.M=1,a.A=gi(nn(u)),a.u=d,a.R=!0,Ha(a,null)}function Ha(a,u){a.F=Date.now(),mi(a),a.B=nn(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),mu(d.i,"t",g),a.C=0,d=a.j.L,a.h=new ft,a.g=Vu(a.j,d?u:null,!a.u),a.P>0&&(a.O=new me(h(a.Y,a,a.g),a.P)),u=a.V,d=a.g,g=a.ba;var A="readystatechange";Array.isArray(A)||(A&&(be[0]=A.toString()),A=be);for(let R=0;R<A.length;R++){const q=Ee(d,A[R],g||u.handleEvent,!1,u.h||u);if(!q)break;u.g[q.key]=q}u=a.J?Ye(a.J):{},a.u?(a.v||(a.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,u)):(a.v="GET",a.g.ea(a.B,a.v,null,u)),$e(),tn(a.i,a.v,a.B,a.l,a.S,a.u)}te.prototype.ba=function(a){a=a.target;const u=this.O;u&&Dn(a)==3?u.j():this.Y(a)},te.prototype.Y=function(a){try{if(a==this.g)e:{const pe=Dn(this.g),pt=this.g.ya(),Me=this.g.ca();if(!(pe<3)&&(pe!=3||this.g&&(this.h.h||this.g.la()||xu(this.g)))){this.K||pe!=4||pt==7||(pt==8||Me<=0?$e(3):$e(2)),Qa(this);var u=this.g.ca();this.X=u;var d=Ga(this);if(this.o=u==200,lr(this.i,this.v,this.B,this.l,this.S,pe,u),this.o){if(this.U&&!this.L){t:{if(this.g){var g,A=this.g;if((g=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!p(g)){var R=g;break t}}R=null}if(a=R)gn(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ja(this,a);else{this.o=!1,this.m=3,Le(12),hr(this),ds(this);break e}}if(this.R){a=!0;let bt;for(;!this.K&&this.C<d.length;)if(bt=Vp(this,d),bt==$n){pe==4&&(this.m=4,Le(14),a=!1),gn(this.i,this.l,null,"[Incomplete Response]");break}else if(bt==Ht){this.m=4,Le(15),gn(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else gn(this.i,this.l,bt,null),Ja(this,bt);if(ru(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pe!=4||d.length!=0||this.h.h||(this.m=1,Le(16),a=!1),this.o=this.o&&a,!a)gn(this.i,this.l,d,"[Invalid Chunked Response]"),hr(this),ds(this);else if(d.length>0&&!this.W){this.W=!0;var q=this.j;q.g==this&&q.aa&&!q.P&&(q.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),so(q),q.P=!0,Le(11))}}else gn(this.i,this.l,d,null),Ja(this,d);pe==4&&hr(this),this.o&&!this.K&&(pe==4?Cu(this.j,this):(this.o=!1,mi(this)))}else Hp(this.g),u==400&&d.indexOf("Unknown SID")>0?(this.m=3,Le(12)):(this.m=0,Le(13)),hr(this),ds(this)}}}catch{}finally{}};function Ga(a){if(!ru(a))return a.g.la();const u=xu(a.g);if(u==="")return"";let d="";const g=u.length,A=Dn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return hr(a),ds(a),"";a.h.i=new o.TextDecoder}for(let R=0;R<g;R++)a.h.h=!0,d+=a.h.i.decode(u[R],{stream:!(A&&R==g-1)});return u.length=0,a.h.g+=d,a.C=0,a.h.g}function ru(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Vp(a,u){var d=a.C,g=u.indexOf(`
`,d);return g==-1?$n:(d=Number(u.substring(d,g)),isNaN(d)?Ht:(g+=1,g+d>u.length?$n:(u=u.slice(g,g+d),a.C=g+d,u)))}te.prototype.cancel=function(){this.K=!0,hr(this)};function mi(a){a.T=Date.now()+a.H,su(a,a.H)}function su(a,u){if(a.D!=null)throw Error("WatchDog timer not null");a.D=jt(h(a.aa,a),u)}function Qa(a){a.D&&(o.clearTimeout(a.D),a.D=null)}te.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(qa(this.i,this.B),this.M!=2&&($e(),Le(17)),hr(this),this.m=2,ds(this)):su(this,this.T-a)};function ds(a){a.j.I==0||a.K||Cu(a.j,a)}function hr(a){Qa(a);var u=a.O;u&&typeof u.dispose=="function"&&u.dispose(),a.O=null,ke(a.V),a.g&&(u=a.g,a.g=null,u.abort(),u.dispose())}function Ja(a,u){try{var d=a.j;if(d.I!=0&&(d.g==a||Xa(d.h,a))){if(!a.L&&Xa(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var A=g;if(A[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)wi(d),vi(d);else break e;ro(d),Le(18)}}else d.xa=A[1],0<d.xa-d.K&&A[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=jt(h(d.Va,d),6e3));ou(d.h)<=1&&d.ta&&(d.ta=void 0)}else fr(d,11)}else if((a.L||d.g==a)&&wi(d),!p(u))for(A=d.Ba.g.parse(u),u=0;u<A.length;u++){let Me=A[u];const bt=Me[0];if(!(bt<=d.K))if(d.K=bt,Me=Me[1],d.I==2)if(Me[0]=="c"){d.M=Me[1],d.ba=Me[2];const rn=Me[3];rn!=null&&(d.ka=rn,d.j.info("VER="+d.ka));const pr=Me[4];pr!=null&&(d.za=pr,d.j.info("SVER="+d.za));const On=Me[5];On!=null&&typeof On=="number"&&On>0&&(g=1.5*On,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Ln=a.g;if(Ln){const Ei=Ln.g?Ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ei){var R=g.h;R.g||Ei.indexOf("spdy")==-1&&Ei.indexOf("quic")==-1&&Ei.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Ya(R,R.h),R.h=null))}if(g.G){const io=Ln.g?Ln.g.getResponseHeader("X-HTTP-Session-Id"):null;io&&(g.wa=io,qe(g.J,g.G,io))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var q=a;if(g.na=$u(g,g.L?g.ba:null,g.W),q.L){lu(g.h,q);var pe=q,pt=g.O;pt&&(pe.H=pt),pe.D&&(Qa(pe),mi(pe)),g.g=q}else Su(g);d.i.length>0&&bi(d)}else Me[0]!="stop"&&Me[0]!="close"||fr(d,7);else d.I==3&&(Me[0]=="stop"||Me[0]=="close"?Me[0]=="stop"?fr(d,7):no(d):Me[0]!="noop"&&d.l&&d.l.qa(Me),d.A=0)}}$e(4)}catch{}}var Np=class{constructor(a,u){this.g=a,this.map=u}};function iu(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function au(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ou(a){return a.h?1:a.g?a.g.size:0}function Xa(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Ya(a,u){a.g?a.g.add(u):a.h=u}function lu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}iu.prototype.cancel=function(){if(this.i=uu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function uu(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.G);return u}return x(a.i)}var cu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Dp(a,u){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let A,R=null;g>=0?(A=a[d].substring(0,g),R=a[d].substring(g+1)):A=a[d],u(A,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Vn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;a instanceof Vn?(this.l=a.l,fs(this,a.j),this.o=a.o,this.g=a.g,ps(this,a.u),this.h=a.h,Za(this,gu(a.i)),this.m=a.m):a&&(u=String(a).match(cu))?(this.l=!1,fs(this,u[1]||"",!0),this.o=ms(u[2]||""),this.g=ms(u[3]||"",!0),ps(this,u[4]),this.h=ms(u[5]||"",!0),Za(this,u[6]||"",!0),this.m=ms(u[7]||"")):(this.l=!1,this.i=new _s(null,this.l))}Vn.prototype.toString=function(){const a=[];var u=this.j;u&&a.push(gs(u,hu,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(gs(u,hu,!0),"@"),a.push(cr(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(gs(d,d.charAt(0)=="/"?Mp:Lp,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",gs(d,Fp)),a.join("")},Vn.prototype.resolve=function(a){const u=nn(this);let d=!!a.j;d?fs(u,a.j):d=!!a.o,d?u.o=a.o:d=!!a.g,d?u.g=a.g:d=a.u!=null;var g=a.h;if(d)ps(u,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var A=u.h.lastIndexOf("/");A!=-1&&(g=u.h.slice(0,A+1)+g)}if(A=g,A==".."||A==".")g="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){g=A.lastIndexOf("/",0)==0,A=A.split("/");const R=[];for(let q=0;q<A.length;){const pe=A[q++];pe=="."?g&&q==A.length&&R.push(""):pe==".."?((R.length>1||R.length==1&&R[0]!="")&&R.pop(),g&&q==A.length&&R.push("")):(R.push(pe),g=!0)}g=R.join("/")}else g=A}return d?u.h=g:d=a.i.toString()!=="",d?Za(u,gu(a.i)):d=!!a.m,d&&(u.m=a.m),u};function nn(a){return new Vn(a)}function fs(a,u,d){a.j=d?ms(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function ps(a,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);a.u=u}else a.u=null}function Za(a,u,d){u instanceof _s?(a.i=u,jp(a.i,a.l)):(d||(u=gs(u,Up)),a.i=new _s(u,a.l))}function qe(a,u,d){a.i.set(u,d)}function gi(a){return qe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function ms(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function gs(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,Op),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Op(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var hu=/[#\/\?@]/g,Lp=/[#\?:]/g,Mp=/[#\?]/g,Up=/[#\?@]/g,Fp=/#/g;function _s(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function dr(a){a.g||(a.g=new Map,a.h=0,a.i&&Dp(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=_s.prototype,n.add=function(a,u){dr(this),this.i=null,a=Rr(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function du(a,u){dr(a),u=Rr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function fu(a,u){return dr(a),u=Rr(a,u),a.g.has(u)}n.forEach=function(a,u){dr(this),this.g.forEach(function(d,g){d.forEach(function(A){a.call(u,A,g,this)},this)},this)};function pu(a,u){dr(a);let d=[];if(typeof u=="string")fu(a,u)&&(d=d.concat(a.g.get(Rr(a,u))));else for(a=Array.from(a.g.values()),u=0;u<a.length;u++)d=d.concat(a[u]);return d}n.set=function(a,u){return dr(this),this.i=null,a=Rr(this,a),fu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},n.get=function(a,u){return a?(a=pu(this,a),a.length>0?String(a[0]):u):u};function mu(a,u,d){du(a,u),d.length>0&&(a.i=null,a.g.set(Rr(a,u),x(d)),a.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(let g=0;g<u.length;g++){var d=u[g];const A=cr(d);d=pu(this,d);for(let R=0;R<d.length;R++){let q=A;d[R]!==""&&(q+="="+cr(d[R])),a.push(q)}}return this.i=a.join("&")};function gu(a){const u=new _s;return u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),u}function Rr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function jp(a,u){u&&!a.j&&(dr(a),a.i=null,a.g.forEach(function(d,g){const A=g.toLowerCase();g!=A&&(du(this,g),mu(this,A,d))},a)),a.j=u}function zp(a,u){const d=new Dt;if(o.Image){const g=new Image;g.onload=f(Nn,d,"TestLoadImage: loaded",!0,u,g),g.onerror=f(Nn,d,"TestLoadImage: error",!1,u,g),g.onabort=f(Nn,d,"TestLoadImage: abort",!1,u,g),g.ontimeout=f(Nn,d,"TestLoadImage: timeout",!1,u,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function Bp(a,u){const d=new Dt,g=new AbortController,A=setTimeout(()=>{g.abort(),Nn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(R=>{clearTimeout(A),R.ok?Nn(d,"TestPingServer: ok",!0,u):Nn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(A),Nn(d,"TestPingServer: error",!1,u)})}function Nn(a,u,d,g,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),g(d)}catch{}}function qp(){this.g=new Ne}function eo(a){this.i=a.Sb||null,this.h=a.ab||!1}m(eo,Fe),eo.prototype.g=function(){return new _i(this.i,this.h)};function _i(a,u){Y.call(this),this.H=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(_i,Y),n=_i.prototype,n.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=u,this.readyState=1,vs(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(u.body=a),(this.H||o).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ys(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,vs(this)),this.g&&(this.readyState=3,vs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;_u(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function _u(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?ys(this):vs(this),this.readyState==3&&_u(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,ys(this))},n.Na=function(a){this.g&&(this.response=a,ys(this))},n.ga=function(){this.g&&ys(this)};function ys(a){a.readyState=4,a.l=null,a.j=null,a.B=null,vs(a)}n.setRequestHeader=function(a,u){this.A.append(a,u)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function vs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(_i.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function yu(a){let u="";return Ge(a,function(d,g){u+=g,u+=":",u+=d,u+=`\r
`}),u}function to(a,u,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=yu(d),typeof a=="string"?d!=null&&cr(d):qe(a,u,d))}function Je(a){Y.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(Je,Y);var Wp=/^https?$/i,Kp=["POST","PUT"];n=Je.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,u,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():pi.g(),this.g.onreadystatechange=w(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(R){vu(this,R);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var A in g)d.set(A,g[A]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const R of g.keys())d.set(R,g.get(R));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(R=>R.toLowerCase()=="content-type"),A=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Kp,u,void 0)>=0)||g||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,q]of d)this.g.setRequestHeader(R,q);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(R){vu(this,R)}};function vu(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.o=5,bu(a),yi(a)}function bu(a){a.A||(a.A=!0,B(a,"complete"),B(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,B(this,"complete"),B(this,"abort"),yi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),yi(this,!0)),Je.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?wu(this):this.Xa())},n.Xa=function(){wu(this)};function wu(a){if(a.h&&typeof i<"u"){if(a.v&&Dn(a)==4)setTimeout(a.Ca.bind(a),0);else if(B(a,"readystatechange"),Dn(a)==4){a.h=!1;try{const R=a.ca();e:switch(R){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var g;if(g=R===0){let q=String(a.D).match(cu)[1]||null;!q&&o.self&&o.self.location&&(q=o.self.location.protocol.slice(0,-1)),g=!Wp.test(q?q.toLowerCase():"")}d=g}if(d)B(a,"complete"),B(a,"success");else{a.o=6;try{var A=Dn(a)>2?a.g.statusText:""}catch{A=""}a.l=A+" ["+a.ca()+"]",bu(a)}}finally{yi(a)}}}}function yi(a,u){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,u||B(a,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Dn(a){return a.g?a.g.readyState:0}n.ca=function(){try{return Dn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),nt(u)}};function xu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Hp(a){const u={};a=(a.g&&Dn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(p(a[g]))continue;var d=Ka(a[g]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const R=u[A]||[];u[A]=R,R.push(d)}Be(u,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function bs(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function Eu(a){this.za=0,this.i=[],this.j=new Dt,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=bs("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=bs("baseRetryDelayMs",5e3,a),this.Za=bs("retryDelaySeedMs",1e4,a),this.Ta=bs("forwardChannelMaxRetries",2,a),this.va=bs("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new iu(a&&a.concurrentRequestLimit),this.Ba=new qp,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Eu.prototype,n.ka=8,n.I=1,n.connect=function(a,u,d,g){Le(0),this.W=a,this.H=u||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=$u(this,null,this.W),bi(this)};function no(a){if(Tu(a),a.I==3){var u=a.V++,d=nn(a.J);if(qe(d,"SID",a.M),qe(d,"RID",u),qe(d,"TYPE","terminate"),ws(a,d),u=new te(a,a.j,u),u.M=2,u.A=gi(nn(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(u.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=u.A,d=!0),d||(u.g=Vu(u.j,null),u.g.ea(u.A)),u.F=Date.now(),mi(u)}Pu(a)}function vi(a){a.g&&(so(a),a.g.cancel(),a.g=null)}function Tu(a){vi(a),a.v&&(o.clearTimeout(a.v),a.v=null),wi(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function bi(a){if(!au(a.h)&&!a.m){a.m=!0;var u=a.Ea;K||y(),V||(K(),V=!0),b.add(u,a),a.D=0}}function Gp(a,u){return ou(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=u.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=jt(h(a.Ea,a,u),Ru(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const A=new te(this,this.j,a);let R=this.o;if(this.U&&(R?(R=Ye(R),Ze(R,this.U)):R=this.U),this.u!==null||this.R||(A.J=R,R=null),this.S)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,u>4096){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Au(this,A,u),d=nn(this.J),qe(d,"RID",a),qe(d,"CVER",22),this.G&&qe(d,"X-HTTP-Session-Id",this.G),ws(this,d),R&&(this.R?u="headers="+cr(yu(R))+"&"+u:this.u&&to(d,this.u,R)),Ya(this.h,A),this.Ra&&qe(d,"TYPE","init"),this.S?(qe(d,"$req",u),qe(d,"SID","null"),A.U=!0,hs(A,d,null)):hs(A,d,u),this.I=2}}else this.I==3&&(a?Iu(this,a):this.i.length==0||au(this.h)||Iu(this))};function Iu(a,u){var d;u?d=u.l:d=a.V++;const g=nn(a.J);qe(g,"SID",a.M),qe(g,"RID",d),qe(g,"AID",a.K),ws(a,g),a.u&&a.o&&to(g,a.u,a.o),d=new te(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),u&&(a.i=u.G.concat(a.i)),u=Au(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Ya(a.h,d),hs(d,g,u)}function ws(a,u){a.H&&Ge(a.H,function(d,g){qe(u,g,d)}),a.l&&Ge({},function(d,g){qe(u,g,d)})}function Au(a,u,d){d=Math.min(a.i.length,d);const g=a.l?h(a.l.Ka,a.l,a):null;e:{var A=a.i;let pe=-1;for(;;){const pt=["count="+d];pe==-1?d>0?(pe=A[0].g,pt.push("ofs="+pe)):pe=0:pt.push("ofs="+pe);let Me=!0;for(let bt=0;bt<d;bt++){var R=A[bt].g;const rn=A[bt].map;if(R-=pe,R<0)pe=Math.max(0,A[bt].g-100),Me=!1;else try{R="req"+R+"_"||"";try{var q=rn instanceof Map?rn:Object.entries(rn);for(const[pr,On]of q){let Ln=On;l(On)&&(Ln=tt(On)),pt.push(R+pr+"="+encodeURIComponent(Ln))}}catch(pr){throw pt.push(R+"type="+encodeURIComponent("_badmap")),pr}}catch{g&&g(rn)}}if(Me){q=pt.join("&");break e}}q=void 0}return a=a.i.splice(0,d),u.G=a,q}function Su(a){if(!a.g&&!a.v){a.Y=1;var u=a.Da;K||y(),V||(K(),V=!0),b.add(u,a),a.A=0}}function ro(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=jt(h(a.Da,a),Ru(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,ku(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=jt(h(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Le(10),vi(this),ku(this))};function so(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function ku(a){a.g=new te(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var u=nn(a.na);qe(u,"RID","rpc"),qe(u,"SID",a.M),qe(u,"AID",a.K),qe(u,"CI",a.F?"0":"1"),!a.F&&a.ia&&qe(u,"TO",a.ia),qe(u,"TYPE","xmlhttp"),ws(a,u),a.u&&a.o&&to(u,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=gi(nn(u)),d.u=null,d.R=!0,Ha(d,a)}n.Va=function(){this.C!=null&&(this.C=null,vi(this),ro(this),Le(19))};function wi(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Cu(a,u){var d=null;if(a.g==u){wi(a),so(a),a.g=null;var g=2}else if(Xa(a.h,u))d=u.G,lu(a.h,u),g=1;else return;if(a.I!=0){if(u.o)if(g==1){d=u.u?u.u.length:0,u=Date.now()-u.F;var A=a.D;g=_e(),B(g,new or(g,d)),bi(a)}else Su(a);else if(A=u.m,A==3||A==0&&u.X>0||!(g==1&&Gp(a,u)||g==2&&ro(a)))switch(d&&d.length>0&&(u=a.h,u.i=u.i.concat(d)),A){case 1:fr(a,5);break;case 4:fr(a,10);break;case 3:fr(a,6);break;default:fr(a,2)}}}function Ru(a,u){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*u}function fr(a,u){if(a.j.info("Error code "+u),u==2){var d=h(a.bb,a),g=a.Ua;const A=!g;g=new Vn(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||fs(g,"https"),gi(g),A?zp(g.toString(),d):Bp(g.toString(),d)}else Le(2);a.I=0,a.l&&a.l.pa(u),Pu(a),Tu(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Le(2)):(this.j.info("Failed to ping google.com"),Le(1))};function Pu(a){if(a.I=0,a.ja=[],a.l){const u=uu(a.h);(u.length!=0||a.i.length!=0)&&(N(a.ja,u),N(a.ja,a.i),a.h.i.length=0,x(a.i),a.i.length=0),a.l.oa()}}function $u(a,u,d){var g=d instanceof Vn?nn(d):new Vn(d);if(g.g!="")u&&(g.g=u+"."+g.g),ps(g,g.u);else{var A=o.location;g=A.protocol,u=u?u+"."+A.hostname:A.hostname,A=+A.port;const R=new Vn(null);g&&fs(R,g),u&&(R.g=u),A&&ps(R,A),d&&(R.h=d),g=R}return d=a.G,u=a.wa,d&&u&&qe(g,d,u),qe(g,"VER",a.ka),ws(a,g),g}function Vu(a,u,d){if(u&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Aa&&!a.ma?new Je(new eo({ab:d})):new Je(a.ma),u.Fa(a.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Nu(){}n=Nu.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function xi(){}xi.prototype.g=function(a,u){return new Mt(a,u)};function Mt(a,u){Y.call(this),this.g=new Eu(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(a?a["X-WebChannel-Client-Profile"]=u.sa:a={"X-WebChannel-Client-Profile":u.sa}),this.g.U=a,(a=u&&u.Qb)&&!p(a)&&(this.g.u=a),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!p(u)&&(this.g.G=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Pr(this)}m(Mt,Y),Mt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Mt.prototype.close=function(){no(this.g)},Mt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=tt(a),a=d);u.i.push(new Np(u.Ya++,a)),u.I==3&&bi(u)},Mt.prototype.N=function(){this.g.l=null,delete this.j,no(this.g),delete this.g,Mt.Z.N.call(this)};function Du(a){H.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}m(Du,H);function Ou(){se.call(this),this.status=1}m(Ou,se);function Pr(a){this.g=a}m(Pr,Nu),Pr.prototype.ra=function(){B(this.g,"a")},Pr.prototype.qa=function(a){B(this.g,new Du(a))},Pr.prototype.pa=function(a){B(this.g,new Ou)},Pr.prototype.oa=function(){B(this.g,"b")},xi.prototype.createWebChannel=xi.prototype.g,Mt.prototype.send=Mt.prototype.o,Mt.prototype.open=Mt.prototype.m,Mt.prototype.close=Mt.prototype.close,Gd=function(){return new xi},Hd=function(){return _e()},Kd=le,Do={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ur.NO_ERROR=0,ur.TIMEOUT=8,ur.HTTP_ERROR=6,Oi=ur,fi.COMPLETE="complete",Wd=fi,dt.EventType=Qe,Qe.OPEN="a",Qe.CLOSE="b",Qe.ERROR="c",Qe.MESSAGE="d",Y.prototype.listen=Y.prototype.J,As=dt,Je.prototype.listenOnce=Je.prototype.K,Je.prototype.getLastError=Je.prototype.Ha,Je.prototype.getLastErrorCode=Je.prototype.ya,Je.prototype.getStatus=Je.prototype.ca,Je.prototype.getResponseJson=Je.prototype.La,Je.prototype.getResponseText=Je.prototype.la,Je.prototype.send=Je.prototype.ea,Je.prototype.setWithCredentials=Je.prototype.Fa,qd=Je}).apply(typeof Ai<"u"?Ai:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class Ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ct.UNAUTHENTICATED=new Ct(null),Ct.GOOGLE_CREDENTIALS=new Ct("google-credentials-uid"),Ct.FIRST_PARTY=new Ct("first-party-uid"),Ct.MOCK_USER=new Ct("mock-user");/**
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
 */let ss="12.14.0";function ob(n){ss=n}/**
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
 */const Tr=new ll("@firebase/firestore");function Vr(){return Tr.logLevel}function G(n,...e){if(Tr.logLevel<=xe.DEBUG){const t=e.map(vl);Tr.debug(`Firestore (${ss}): ${n}`,...t)}}function An(n,...e){if(Tr.logLevel<=xe.ERROR){const t=e.map(vl);Tr.error(`Firestore (${ss}): ${n}`,...t)}}function Ir(n,...e){if(Tr.logLevel<=xe.WARN){const t=e.map(vl);Tr.warn(`Firestore (${ss}): ${n}`,...t)}}function vl(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function ce(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Qd(n,r,t)}function Qd(n,e,t){let r=`FIRESTORE (${ss}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw An(r),new Error(r)}function Ve(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Qd(e,s,r)}function fe(n,e){return n}/**
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
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends Cn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class xn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Jd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class lb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ct.UNAUTHENTICATED))}shutdown(){}}class ub{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class cb{constructor(e){this.t=e,this.currentUser=Ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ve(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new xn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new xn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new xn)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ve(typeof r.accessToken=="string",31837,{l:r}),new Jd(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ve(e===null||typeof e=="string",2055,{h:e}),new Ct(e)}}class hb{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Ct.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class db{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new hb(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fb{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,zt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ve(this.o===void 0,3512);const r=i=>{i.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new vc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ve(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new vc(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function pb(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class bl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=pb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function ye(n,e){return n<e?-1:n>e?1:0}function Oo(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return yo(s)===yo(i)?ye(s,i):yo(s)?1:-1}return ye(n.length,e.length)}const mb=55296,gb=57343;function yo(n){const e=n.charCodeAt(0);return e>=mb&&e<=gb}function Gr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const bc="__name__";class an{constructor(e,t,r){t===void 0?t=0:t>e.length&&ce(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&ce(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return an.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof an?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=an.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return ye(e.length,t.length)}static compareSegments(e,t){const r=an.isNumericId(e),s=an.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?an.extractNumericId(e).compare(an.extractNumericId(t)):Oo(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Hn.fromString(e.substring(4,e.length-2))}}class ze extends an{construct(e,t,r){return new ze(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new X(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ze(t)}static emptyPath(){return new ze([])}}const _b=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class It extends an{construct(e,t,r){return new It(e,t,r)}static isValidIdentifier(e){return _b.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),It.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===bc}static keyField(){return new It([bc])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new X(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new X(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new X(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new X(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new It(t)}static emptyPath(){return new It([])}}/**
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
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie(ze.fromString(e))}static fromName(e){return new ie(ze.fromString(e).popFirst(5))}static empty(){return new ie(ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ze.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new ze(e.slice()))}}/**
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
 */function Xd(n,e,t){if(!t)throw new X(O.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function yb(n,e,t,r){if(e===!0&&r===!0)throw new X(O.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function wc(n){if(!ie.isDocumentKey(n))throw new X(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function xc(n){if(ie.isDocumentKey(n))throw new X(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Yd(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ea(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ce(12329,{type:typeof n})}function Yt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new X(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ea(n);throw new X(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function ut(n,e){const t={typeString:n};return e&&(t.value=e),t}function si(n,e){if(!Yd(n))throw new X(O.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(s&&typeof o!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new X(O.INVALID_ARGUMENT,t);return!0}/**
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
 */const Ec=-62135596800,Tc=1e6;class We{static now(){return We.fromMillis(Date.now())}static fromDate(e){return We.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Tc);return new We(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new X(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new X(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ec)throw new X(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Tc}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:We._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(si(e,We._jsonSchema))return new We(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ec;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}We._jsonSchemaVersion="firestore/timestamp/1.0",We._jsonSchema={type:ut("string",We._jsonSchemaVersion),seconds:ut("number"),nanoseconds:ut("number")};/**
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
 */class de{static fromTimestamp(e){return new de(e)}static min(){return new de(new We(0,0))}static max(){return new de(new We(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const js=-1;function vb(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=de.fromTimestamp(r===1e9?new We(t+1,0):new We(t,r));return new Qn(s,ie.empty(),e)}function bb(n){return new Qn(n.readTime,n.key,js)}class Qn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Qn(de.min(),ie.empty(),js)}static max(){return new Qn(de.max(),ie.empty(),js)}}function wb(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ie.comparator(n.documentKey,e.documentKey),t!==0?t:ye(n.largestBatchId,e.largestBatchId))}/**
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
 */const xb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Eb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function is(n){if(n.code!==O.FAILED_PRECONDITION||n.message!==xb)throw n;G("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ce(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new L((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof L?t:L.resolve(t)}catch(t){return L.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):L.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):L.reject(t)}static resolve(e){return new L((t,r)=>{t(e)})}static reject(e){return new L((t,r)=>{r(e)})}static waitFor(e){return new L((t,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&t()},c=>r(c))}),o=!0,i===s&&t()})}static or(e){let t=L.resolve(!1);for(const r of e)t=t.next(s=>s?L.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new L((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;t(e[h]).next(f=>{o[h]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,t){return new L((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function Tb(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function as(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ta{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ta.ce=-1;/**
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
 */const wl=-1;function Ia(n){return n==null}function na(n){return n===0&&1/n==-1/0}function Ib(n){return typeof n=="number"&&Number.isInteger(n)&&!na(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Zd="";function Ab(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Ic(e)),e=Sb(n.get(t),e);return Ic(e)}function Sb(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Zd:t+="";break;default:t+=i}}return t}function Ic(n){return n+Zd+""}/**
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
 */function Ac(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ir(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function ef(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Ke{constructor(e,t){this.comparator=e,this.root=t||Tt.EMPTY}insert(e,t){return new Ke(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Tt.BLACK,null,null))}remove(e){return new Ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Tt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Si(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Si(this.root,e,this.comparator,!1)}getReverseIterator(){return new Si(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Si(this.root,e,this.comparator,!0)}}class Si{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Tt{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Tt.RED,this.left=s??Tt.EMPTY,this.right=i??Tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Tt(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Tt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ce(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ce(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ce(27949);return e+(this.isRed()?0:1)}}Tt.EMPTY=null,Tt.RED=!0,Tt.BLACK=!1;Tt.EMPTY=new class{constructor(){this.size=0}get key(){throw ce(57766)}get value(){throw ce(16141)}get color(){throw ce(16727)}get left(){throw ce(29726)}get right(){throw ce(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Tt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class gt{constructor(e){this.comparator=e,this.data=new Ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Sc(this.data.getIterator())}getIteratorFrom(e){return new Sc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof gt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new gt(this.comparator);return t.data=e,t}}class Sc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ut{constructor(e){this.fields=e,e.sort(It.comparator)}static empty(){return new Ut([])}unionWith(e){let t=new gt(It.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ut(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Gr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class tf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class At{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new tf("Invalid base64 string: "+i):i}}(e);return new At(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new At(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}At.EMPTY_BYTE_STRING=new At("");const kb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jn(n){if(Ve(!!n,39018),typeof n=="string"){let e=0;const t=kb.exec(n);if(Ve(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:rt(n.seconds),nanos:rt(n.nanos)}}function rt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Xn(n){return typeof n=="string"?At.fromBase64String(n):At.fromUint8Array(n)}/**
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
 */const nf="server_timestamp",rf="__type__",sf="__previous_value__",af="__local_write_time__";function xl(n){return(n?.mapValue?.fields||{})[rf]?.stringValue===nf}function Aa(n){const e=n.mapValue.fields[sf];return xl(e)?Aa(e):e}function zs(n){const e=Jn(n.mapValue.fields[af].timestampValue);return new We(e.seconds,e.nanos)}/**
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
 */class Cb{constructor(e,t,r,s,i,o,l,c,h,f,m){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=m}}const ra="(default)";class Bs{constructor(e,t){this.projectId=e,this.database=t||ra}static empty(){return new Bs("","")}get isDefaultDatabase(){return this.database===ra}isEqual(e){return e instanceof Bs&&e.projectId===this.projectId&&e.database===this.database}}function Rb(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new X(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bs(n.options.projectId,e)}/**
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
 */const of="__type__",Pb="__max__",ki={mapValue:{}},lf="__vector__",sa="value";function Yn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?xl(n)?4:Vb(n)?9007199254740991:$b(n)?10:11:ce(28295,{value:n})}function fn(n,e){if(n===e)return!0;const t=Yn(n);if(t!==Yn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return zs(n).isEqual(zs(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Jn(s.timestampValue),l=Jn(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Xn(s.bytesValue).isEqual(Xn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return rt(s.geoPointValue.latitude)===rt(i.geoPointValue.latitude)&&rt(s.geoPointValue.longitude)===rt(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return rt(s.integerValue)===rt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=rt(s.doubleValue),l=rt(i.doubleValue);return o===l?na(o)===na(l):isNaN(o)&&isNaN(l)}return!1}(n,e);case 9:return Gr(n.arrayValue.values||[],e.arrayValue.values||[],fn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Ac(o)!==Ac(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!fn(o[c],l[c])))return!1;return!0}(n,e);default:return ce(52216,{left:n})}}function qs(n,e){return(n.values||[]).find(t=>fn(t,e))!==void 0}function Qr(n,e){if(n===e)return 0;const t=Yn(n),r=Yn(e);if(t!==r)return ye(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ye(n.booleanValue,e.booleanValue);case 2:return function(i,o){const l=rt(i.integerValue||i.doubleValue),c=rt(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return kc(n.timestampValue,e.timestampValue);case 4:return kc(zs(n),zs(e));case 5:return Oo(n.stringValue,e.stringValue);case 6:return function(i,o){const l=Xn(i),c=Xn(o);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=ye(l[h],c[h]);if(f!==0)return f}return ye(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ye(rt(i.latitude),rt(o.latitude));return l!==0?l:ye(rt(i.longitude),rt(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Cc(n.arrayValue,e.arrayValue);case 10:return function(i,o){const l=i.fields||{},c=o.fields||{},h=l[sa]?.arrayValue,f=c[sa]?.arrayValue,m=ye(h?.values?.length||0,f?.values?.length||0);return m!==0?m:Cc(h,f)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===ki.mapValue&&o===ki.mapValue)return 0;if(i===ki.mapValue)return 1;if(o===ki.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=o.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let m=0;m<c.length&&m<f.length;++m){const w=Oo(c[m],f[m]);if(w!==0)return w;const x=Qr(l[c[m]],h[f[m]]);if(x!==0)return x}return ye(c.length,f.length)}(n.mapValue,e.mapValue);default:throw ce(23264,{he:t})}}function kc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ye(n,e);const t=Jn(n),r=Jn(e),s=ye(t.seconds,r.seconds);return s!==0?s:ye(t.nanos,r.nanos)}function Cc(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Qr(t[s],r[s]);if(i)return i}return ye(t.length,r.length)}function Jr(n){return Lo(n)}function Lo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Jn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Xn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ie.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Lo(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Lo(t.fields[o])}`;return s+"}"}(n.mapValue):ce(61005,{value:n})}function Li(n){switch(Yn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Aa(n);return e?16+Li(e):16;case 5:return 2*n.stringValue.length;case 6:return Xn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Li(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return ir(r.fields,(i,o)=>{s+=i.length+Li(o)}),s}(n.mapValue);default:throw ce(13486,{value:n})}}function Rc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ws(n){return!!n&&"integerValue"in n}function uf(n){return Ws(n)||function(t){return!!t&&"doubleValue"in t}(n)}function El(n){return!!n&&"arrayValue"in n}function Pc(n){return!!n&&"nullValue"in n}function $c(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Mi(n){return!!n&&"mapValue"in n}function $b(n){return(n?.mapValue?.fields||{})[of]?.stringValue===lf}function $s(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return ir(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=$s(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=$s(n.arrayValue.values[t]);return e}return{...n}}function Vb(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Pb}/**
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
 */class Lt{constructor(e){this.value=e}static empty(){return new Lt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Mi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=$s(t)}setAll(e){let t=It.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=l.popLast()}o?r[l.lastSegment()]=$s(o):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Mi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return fn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Mi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){ir(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Lt($s(this.value))}}function cf(n){const e=[];return ir(n.fields,(t,r)=>{const s=new It([t]);if(Mi(r)){const i=cf(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ut(e)}/**
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
 */class Rt{constructor(e,t,r,s,i,o,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Rt(e,0,de.min(),de.min(),de.min(),Lt.empty(),0)}static newFoundDocument(e,t,r,s){return new Rt(e,1,t,de.min(),r,s,0)}static newNoDocument(e,t){return new Rt(e,2,t,de.min(),de.min(),Lt.empty(),0)}static newUnknownDocument(e,t){return new Rt(e,3,t,de.min(),de.min(),Lt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Lt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ia{constructor(e,t){this.position=e,this.inclusive=t}}function Vc(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=ie.comparator(ie.fromName(o.referenceValue),t.key):r=Qr(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Nc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!fn(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class aa{constructor(e,t="asc"){this.field=e,this.dir=t}}function Nb(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class hf{}class ot extends hf{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Ob(e,t,r):t==="array-contains"?new Ub(e,r):t==="in"?new Fb(e,r):t==="not-in"?new jb(e,r):t==="array-contains-any"?new zb(e,r):new ot(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Lb(e,r):new Mb(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Qr(t,this.value)):t!==null&&Yn(this.value)===Yn(t)&&this.matchesComparison(Qr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ce(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Zt extends hf{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Zt(e,t)}matches(e){return df(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function df(n){return n.op==="and"}function ff(n){return Db(n)&&df(n)}function Db(n){for(const e of n.filters)if(e instanceof Zt)return!1;return!0}function Mo(n){if(n instanceof ot)return n.field.canonicalString()+n.op.toString()+Jr(n.value);if(ff(n))return n.filters.map(e=>Mo(e)).join(",");{const e=n.filters.map(t=>Mo(t)).join(",");return`${n.op}(${e})`}}function pf(n,e){return n instanceof ot?function(r,s){return s instanceof ot&&r.op===s.op&&r.field.isEqual(s.field)&&fn(r.value,s.value)}(n,e):n instanceof Zt?function(r,s){return s instanceof Zt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&pf(o,s.filters[l]),!0):!1}(n,e):void ce(19439)}function mf(n){return n instanceof ot?function(t){return`${t.field.canonicalString()} ${t.op} ${Jr(t.value)}`}(n):n instanceof Zt?function(t){return t.op.toString()+" {"+t.getFilters().map(mf).join(" ,")+"}"}(n):"Filter"}class Ob extends ot{constructor(e,t,r){super(e,t,r),this.key=ie.fromName(r.referenceValue)}matches(e){const t=ie.comparator(e.key,this.key);return this.matchesComparison(t)}}class Lb extends ot{constructor(e,t){super(e,"in",t),this.keys=gf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Mb extends ot{constructor(e,t){super(e,"not-in",t),this.keys=gf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function gf(n,e){return(e.arrayValue?.values||[]).map(t=>ie.fromName(t.referenceValue))}class Ub extends ot{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return El(t)&&qs(t.arrayValue,this.value)}}class Fb extends ot{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&qs(this.value.arrayValue,t)}}class jb extends ot{constructor(e,t){super(e,"not-in",t)}matches(e){if(qs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!qs(this.value.arrayValue,t)}}class zb extends ot{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!El(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>qs(this.value.arrayValue,r))}}/**
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
 */class Bb{constructor(e,t=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function Dc(n,e=null,t=[],r=[],s=null,i=null,o=null){return new Bb(n,e,t,r,s,i,o)}function Tl(n){const e=fe(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Mo(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ia(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Jr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Jr(r)).join(",")),e.Te=t}return e.Te}function Il(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Nb(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!pf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Nc(n.startAt,e.startAt)&&Nc(n.endAt,e.endAt)}function Uo(n){return ie.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class ii{constructor(e,t=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function qb(n,e,t,r,s,i,o,l){return new ii(n,e,t,r,s,i,o,l)}function Al(n){return new ii(n)}function Oc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Wb(n){return ie.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function _f(n){return n.collectionGroup!==null}function Vs(n){const e=fe(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new gt(It.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new aa(i,r))}),t.has(It.keyField().canonicalString())||e.Ie.push(new aa(It.keyField(),r))}return e.Ie}function un(n){const e=fe(n);return e.Ee||(e.Ee=Kb(e,Vs(n))),e.Ee}function Kb(n,e){if(n.limitType==="F")return Dc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new aa(s.field,i)});const t=n.endAt?new ia(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ia(n.startAt.position,n.startAt.inclusive):null;return Dc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Fo(n,e){const t=n.filters.concat([e]);return new ii(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function jo(n,e,t){return new ii(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Sa(n,e){return Il(un(n),un(e))&&n.limitType===e.limitType}function yf(n){return`${Tl(un(n))}|lt:${n.limitType}`}function Nr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>mf(s)).join(", ")}]`),Ia(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Jr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Jr(s)).join(",")),`Target(${r})`}(un(n))}; limitType=${n.limitType})`}function ka(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ie.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Vs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const h=Vc(o,l,c);return o.inclusive?h<=0:h<0}(r.startAt,Vs(r),s)||r.endAt&&!function(o,l,c){const h=Vc(o,l,c);return o.inclusive?h>=0:h>0}(r.endAt,Vs(r),s))}(n,e)}function Hb(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function vf(n){return(e,t)=>{let r=!1;for(const s of Vs(n)){const i=Gb(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Gb(n,e,t){const r=n.field.isKeyField()?ie.comparator(e.key,t.key):function(i,o,l){const c=o.data.field(i),h=l.data.field(i);return c!==null&&h!==null?Qr(c,h):ce(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ce(19790,{direction:n.dir})}}/**
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
 */class Ar{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ir(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return ef(this.inner)}size(){return this.innerSize}}/**
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
 */const Qb=new Ke(ie.comparator);function Sn(){return Qb}const bf=new Ke(ie.comparator);function Ss(...n){let e=bf;for(const t of n)e=e.insert(t.key,t);return e}function wf(n){let e=bf;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function yr(){return Ns()}function xf(){return Ns()}function Ns(){return new Ar(n=>n.toString(),(n,e)=>n.isEqual(e))}const Jb=new Ke(ie.comparator),Xb=new gt(ie.comparator);function ve(...n){let e=Xb;for(const t of n)e=e.add(t);return e}const Yb=new gt(ye);function Zb(){return Yb}/**
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
 */function Ca(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:na(e)?"-0":e}}function Sl(n){return{integerValue:""+n}}function ew(n,e){return Ib(e)?Sl(e):Ca(n,e)}/**
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
 */class Ra{constructor(){this._=void 0}}function tw(n,e,t){return n instanceof Ks?function(s,i){const o={fields:{[rf]:{stringValue:nf},[af]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&xl(i)&&(i=Aa(i)),i&&(o.fields[sf]=i),{mapValue:o}}(t,e):n instanceof Xr?Tf(n,e):n instanceof Yr?If(n,e):n instanceof Hs?function(s,i){const o=Ef(s,i),l=ua(o)+ua(s.Ae);return Ws(o)&&Ws(s.Ae)?Sl(l):Ca(s.serializer,l)}(n,e):n instanceof oa?function(s,i){return Lc(s,i,Math.min)}(n,e):n instanceof la?function(s,i){return Lc(s,i,Math.max)}(n,e):void 0}function nw(n,e,t){return n instanceof Xr?Tf(n,e):n instanceof Yr?If(n,e):t}function Ef(n,e){return n instanceof Hs?uf(e)?e:{integerValue:0}:null}class Ks extends Ra{}class Xr extends Ra{constructor(e){super(),this.elements=e}}function Tf(n,e){const t=Af(e);for(const r of n.elements)t.some(s=>fn(s,r))||t.push(r);return{arrayValue:{values:t}}}class Yr extends Ra{constructor(e){super(),this.elements=e}}function If(n,e){let t=Af(e);for(const r of n.elements)t=t.filter(s=>!fn(s,r));return{arrayValue:{values:t}}}class kl extends Ra{constructor(e,t){super(),this.serializer=e,this.Ae=t}}class Hs extends kl{}class oa extends kl{}class la extends kl{}function Lc(n,e,t){if(!uf(e))return n.Ae;const r=t(ua(e),ua(n.Ae));return Ws(e)&&Ws(n.Ae)?Sl(r):Ca(n.serializer,r)}function ua(n){return rt(n.integerValue||n.doubleValue)}function Af(n){return El(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Cl{constructor(e,t){this.field=e,this.transform=t}}function rw(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Xr&&s instanceof Xr||r instanceof Yr&&s instanceof Yr?Gr(r.elements,s.elements,fn):r instanceof Hs&&s instanceof Hs||r instanceof oa&&s instanceof oa||r instanceof la&&s instanceof la?fn(r.Ae,s.Ae):r instanceof Ks&&s instanceof Ks}(n.transform,e.transform)}class sw{constructor(e,t){this.version=e,this.transformResults=t}}class qt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new qt}static exists(e){return new qt(void 0,e)}static updateTime(e){return new qt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ui(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Pa{}function Sf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Rl(n.key,qt.none()):new ai(n.key,n.data,qt.none());{const t=n.data,r=Lt.empty();let s=new gt(It.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ar(n.key,r,new Ut(s.toArray()),qt.none())}}function iw(n,e,t){n instanceof ai?function(s,i,o){const l=s.value.clone(),c=Uc(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):n instanceof ar?function(s,i,o){if(!Ui(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Uc(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(kf(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Ds(n,e,t,r){return n instanceof ai?function(i,o,l,c){if(!Ui(i.precondition,o))return l;const h=i.value.clone(),f=Fc(i.fieldTransforms,c,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof ar?function(i,o,l,c){if(!Ui(i.precondition,o))return l;const h=Fc(i.fieldTransforms,c,o),f=o.data;return f.setAll(kf(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(i,o,l){return Ui(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(n,e,t)}function aw(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Ef(r.transform,s||null);i!=null&&(t===null&&(t=Lt.empty()),t.set(r.field,i))}return t||null}function Mc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Gr(r,s,(i,o)=>rw(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ai extends Pa{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ar extends Pa{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function kf(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Uc(n,e,t){const r=new Map;Ve(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,nw(o,l,t[s]))}return r}function Fc(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,tw(i,o,e))}return r}class Rl extends Pa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ow extends Pa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class lw{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&iw(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Ds(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Ds(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=xf();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=t.has(s.key)?null:l;const c=Sf(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(de.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ve())}isEqual(e){return this.batchId===e.batchId&&Gr(this.mutations,e.mutations,(t,r)=>Mc(t,r))&&Gr(this.baseMutations,e.baseMutations,(t,r)=>Mc(t,r))}}class Pl{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Ve(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return Jb}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Pl(e,t,r,s)}}/**
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
 */class uw{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class cw{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var it,Te;function hw(n){switch(n){case O.OK:return ce(64938);case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return ce(15467,{code:n})}}function Cf(n){if(n===void 0)return An("GRPC error has no .code"),O.UNKNOWN;switch(n){case it.OK:return O.OK;case it.CANCELLED:return O.CANCELLED;case it.UNKNOWN:return O.UNKNOWN;case it.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case it.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case it.INTERNAL:return O.INTERNAL;case it.UNAVAILABLE:return O.UNAVAILABLE;case it.UNAUTHENTICATED:return O.UNAUTHENTICATED;case it.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case it.NOT_FOUND:return O.NOT_FOUND;case it.ALREADY_EXISTS:return O.ALREADY_EXISTS;case it.PERMISSION_DENIED:return O.PERMISSION_DENIED;case it.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case it.ABORTED:return O.ABORTED;case it.OUT_OF_RANGE:return O.OUT_OF_RANGE;case it.UNIMPLEMENTED:return O.UNIMPLEMENTED;case it.DATA_LOSS:return O.DATA_LOSS;default:return ce(39323,{code:n})}}(Te=it||(it={}))[Te.OK=0]="OK",Te[Te.CANCELLED=1]="CANCELLED",Te[Te.UNKNOWN=2]="UNKNOWN",Te[Te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Te[Te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Te[Te.NOT_FOUND=5]="NOT_FOUND",Te[Te.ALREADY_EXISTS=6]="ALREADY_EXISTS",Te[Te.PERMISSION_DENIED=7]="PERMISSION_DENIED",Te[Te.UNAUTHENTICATED=16]="UNAUTHENTICATED",Te[Te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Te[Te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Te[Te.ABORTED=10]="ABORTED",Te[Te.OUT_OF_RANGE=11]="OUT_OF_RANGE",Te[Te.UNIMPLEMENTED=12]="UNIMPLEMENTED",Te[Te.INTERNAL=13]="INTERNAL",Te[Te.UNAVAILABLE=14]="UNAVAILABLE",Te[Te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function dw(){return new TextEncoder}/**
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
 */const fw=new Hn([4294967295,4294967295],0);function jc(n){const e=dw().encode(n),t=new Bd;return t.update(e),new Uint8Array(t.digest())}function zc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Hn([t,r],0),new Hn([s,i],0)]}class $l{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ks(`Invalid padding: ${t}`);if(r<0)throw new ks(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ks(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ks(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Hn.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(Hn.fromNumber(r)));return s.compare(fw)===1&&(s=new Hn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=jc(e),[r,s]=zc(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new $l(i,s,t);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const t=jc(e),[r,s]=zc(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ks extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class oi{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,li.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new oi(de.min(),s,new Ke(ye),Sn(),ve())}}class li{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new li(r,t,ve(),ve(),ve())}}/**
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
 */class Fi{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class Rf{constructor(e,t){this.targetId=e,this.Ce=t}}class Pf{constructor(e,t,r=At.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Bc{constructor(e){this.targetId=e,this.ve=0,this.Fe=qc(),this.Me=At.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ve(),t=ve(),r=ve();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:ce(38017,{changeType:i})}}),new li(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=qc()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Ve(this.ve>=0,3241,{ve:this.ve,targetId:this.targetId})}Qe(){this.Oe=!0,this.xe=!0}}const xs="WatchChangeAggregator";class pw{constructor(e){this.Ge=e,this.ze=new Map,this.je=Sn(),this.Je=Ci(),this.He=Ci(),this.Ze=new Ke(ye)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.ze.get(t);if(r)switch(e.state){case 0:this.nt(t)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Le(e.resumeToken));break;default:ce(56790,{state:e.state})}else G(xs,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.nt(s)&&t(s)})}it(e){const t=e.targetId,r=e.Ce.count,s=this.st(t);if(s){const i=s.target;if(Uo(i))if(r===0){const o=new ie(i.path);this.et(t,o,Rt.newNoDocument(o,de.min()))}else Ve(r===1,20013,{expectedCount:r});else{const o=this.ot(t);if(o!==r){const l=this._t(e),c=l?this.ut(l,e,o):1;if(c!==0){this.rt(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}}}}}_t(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,l;try{o=Xn(r).toUint8Array()}catch(c){if(c instanceof tf)return Ir("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new $l(o,s,i)}catch(c){return Ir(c instanceof ks?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ut(e,t,r){return t.Ce.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.Ge.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(t,i,null),s++)}),s}Pt(e){const t=new Map;this.ze.forEach((i,o)=>{const l=this.st(o);if(l){if(i.current&&Uo(l.target)){const c=new ie(l.target.path);this.Tt(c).has(o)||this.It(o,c)||this.et(o,c,Rt.newNoDocument(c,e))}i.Be&&(t.set(o,i.ke()),i.qe())}});let r=ve();this.He.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const h=this.st(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new oi(e,t,this.Ze,this.je,r);return this.je=Sn(),this.Je=Ci(),this.He=Ci(),this.Ze=new Ke(ye),s}Ye(e,t){const r=this.ze.get(e);if(!r||!this.nt(e))return void G(xs,`addDocumentToTarget received document for unknown inactive target (${e})`);const s=this.It(e,t.key)?2:0;r.Ke(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Tt(t.key).add(e)),this.He=this.He.insert(t.key,this.Et(t.key).add(e))}et(e,t,r){const s=this.ze.get(e);s&&this.nt(e)?(this.It(e,t)?s.Ke(t,1):s.Ue(t),this.He=this.He.insert(t,this.Et(t).delete(e)),this.He=this.He.insert(t,this.Et(t).add(e)),r&&(this.je=this.je.insert(t,r))):G(xs,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.ze.delete(e)}ot(e){const t=this.ze.get(e);if(!t)return 0;const r=t.ke();return this.Ge.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}$e(e){let t=this.ze.get(e);t||(G(xs,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new Bc(e),this.ze.set(e,t)),t.$e()}Et(e){let t=this.He.get(e);return t||(t=new gt(ye),this.He=this.He.insert(e,t)),t}Tt(e){let t=this.Je.get(e);return t||(t=new gt(ye),this.Je=this.Je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||G(xs,"Detected inactive target",e),t}st(e){const t=this.ze.get(e);return t===void 0||t.Ne?null:this.Ge.Rt(e)}rt(e){this.ze.set(e,new Bc(e)),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Ci(){return new Ke(ie.comparator)}function qc(){return new Ke(ie.comparator)}const mw={asc:"ASCENDING",desc:"DESCENDING"},gw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_w={and:"AND",or:"OR"};class yw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function zo(n,e){return n.useProto3Json||Ia(e)?e:{value:e}}function ca(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $f(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function vw(n,e){return ca(n,e.toTimestamp())}function cn(n){return Ve(!!n,49232),de.fromTimestamp(function(t){const r=Jn(t);return new We(r.seconds,r.nanos)}(n))}function Vl(n,e){return Bo(n,e).canonicalString()}function Bo(n,e){const t=function(s){return new ze(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Vf(n){const e=ze.fromString(n);return Ve(Mf(e),10190,{key:e.toString()}),e}function qo(n,e){return Vl(n.databaseId,e.path)}function vo(n,e){const t=Vf(e);if(t.get(1)!==n.databaseId.projectId)throw new X(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new X(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ie(Df(t))}function Nf(n,e){return Vl(n.databaseId,e)}function bw(n){const e=Vf(n);return e.length===4?ze.emptyPath():Df(e)}function Wo(n){return new ze(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Df(n){return Ve(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Wc(n,e,t){return{name:qo(n,e),fields:t.value.mapValue.fields}}function ww(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ce(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Ve(f===void 0||typeof f=="string",58123),At.fromBase64String(f||"")):(Ve(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),At.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?O.UNKNOWN:Cf(h.code);return new X(f,h.message||"")}(o);t=new Pf(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=vo(n,r.document.name),i=cn(r.document.updateTime),o=r.document.createTime?cn(r.document.createTime):de.min(),l=new Lt({mapValue:{fields:r.document.fields}}),c=Rt.newFoundDocument(s,i,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];t=new Fi(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=vo(n,r.document),i=r.readTime?cn(r.readTime):de.min(),o=Rt.newNoDocument(s,i),l=r.removedTargetIds||[];t=new Fi([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=vo(n,r.document),i=r.removedTargetIds||[];t=new Fi([],i,s,null)}else{if(!("filter"in e))return ce(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new cw(s,i),l=r.targetId;t=new Rf(l,o)}}return t}function xw(n,e){let t;if(e instanceof ai)t={update:Wc(n,e.key,e.value)};else if(e instanceof Rl)t={delete:qo(n,e.key)};else if(e instanceof ar)t={update:Wc(n,e.key,e.data),updateMask:Pw(e.fieldMask)};else{if(!(e instanceof ow))return ce(16599,{Vt:e.type});t={verify:qo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Ks)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Xr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Yr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Hs)return{fieldPath:o.field.canonicalString(),increment:l.Ae};if(l instanceof oa)return{fieldPath:o.field.canonicalString(),minimum:l.Ae};if(l instanceof la)return{fieldPath:o.field.canonicalString(),maximum:l.Ae};throw ce(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:vw(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ce(27497)}(n,e.precondition)),t}function Ew(n,e){return n&&n.length>0?(Ve(e!==void 0,14353),n.map(t=>function(s,i){let o=s.updateTime?cn(s.updateTime):cn(i);return o.isEqual(de.min())&&(o=cn(i)),new sw(o,s.transformResults||[])}(t,e))):[]}function Tw(n,e){return{documents:[Nf(n,e.path)]}}function Iw(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Nf(n,s);const i=function(h){if(h.length!==0)return Lf(Zt.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(w){return{field:Dr(w.field),direction:kw(w.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=zo(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{dt:t,parent:s}}function Aw(n){let e=bw(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Ve(r===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(m){const w=Of(m);return w instanceof Zt&&ff(w)?w.getFilters():[w]}(t.where));let o=[];t.orderBy&&(o=function(m){return m.map(w=>function(N){return new aa(Or(N.field),function($){switch($){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(w))}(t.orderBy));let l=null;t.limit&&(l=function(m){let w;return w=typeof m=="object"?m.value:m,Ia(w)?null:w}(t.limit));let c=null;t.startAt&&(c=function(m){const w=!!m.before,x=m.values||[];return new ia(x,w)}(t.startAt));let h=null;return t.endAt&&(h=function(m){const w=!m.before,x=m.values||[];return new ia(x,w)}(t.endAt)),qb(e,s,o,i,l,"F",c,h)}function Sw(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ce(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Of(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Or(t.unaryFilter.field);return ot.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Or(t.unaryFilter.field);return ot.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Or(t.unaryFilter.field);return ot.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Or(t.unaryFilter.field);return ot.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ce(61313);default:return ce(60726)}}(n):n.fieldFilter!==void 0?function(t){return ot.create(Or(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ce(58110);default:return ce(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Zt.create(t.compositeFilter.filters.map(r=>Of(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ce(1026)}}(t.compositeFilter.op))}(n):ce(30097,{filter:n})}function kw(n){return mw[n]}function Cw(n){return gw[n]}function Rw(n){return _w[n]}function Dr(n){return{fieldPath:n.canonicalString()}}function Or(n){return It.fromServerFormat(n.fieldPath)}function Lf(n){return n instanceof ot?function(t){if(t.op==="=="){if($c(t.value))return{unaryFilter:{field:Dr(t.field),op:"IS_NAN"}};if(Pc(t.value))return{unaryFilter:{field:Dr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if($c(t.value))return{unaryFilter:{field:Dr(t.field),op:"IS_NOT_NAN"}};if(Pc(t.value))return{unaryFilter:{field:Dr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Dr(t.field),op:Cw(t.op),value:t.value}}}(n):n instanceof Zt?function(t){const r=t.getFilters().map(s=>Lf(s));return r.length===1?r[0]:{compositeFilter:{op:Rw(t.op),filters:r}}}(n):ce(54877,{filter:n})}function Pw(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Mf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Uf(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class vn{constructor(e,t,r,s,i=de.min(),o=de.min(),l=At.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new vn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new vn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class $w{constructor(e){this.gt=e}}function Vw(n){const e=Aw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?jo(e,e.limit,"L"):e}/**
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
 */class Nw{constructor(){this.Sn=new Dw}addToCollectionParentIndex(e,t){return this.Sn.add(t),L.resolve()}getCollectionParents(e,t){return L.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return L.resolve()}deleteFieldIndex(e,t){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,t){return L.resolve()}getDocumentsMatchingTarget(e,t){return L.resolve(null)}getIndexType(e,t){return L.resolve(0)}getFieldIndexes(e,t){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,t){return L.resolve(Qn.min())}getMinOffsetFromCollectionGroup(e,t){return L.resolve(Qn.min())}updateCollectionGroup(e,t,r){return L.resolve()}updateIndexEntries(e,t){return L.resolve()}}class Dw{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new gt(ze.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new gt(ze.comparator)).toArray()}}/**
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
 */const Kc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ff=41943040;class Ot{static withCacheSize(e){return new Ot(e,Ot.DEFAULT_COLLECTION_PERCENTILE,Ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Ot.DEFAULT_COLLECTION_PERCENTILE=10,Ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ot.DEFAULT=new Ot(Ff,Ot.DEFAULT_COLLECTION_PERCENTILE,Ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ot.DISABLED=new Ot(-1,0,0);/**
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
 */class Zn{constructor(e){this.ir=e}next(){return this.ir+=2,this.ir}static sr(){return new Zn(0)}static _r(){return new Zn(-1)}}/**
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
 */const Hc="LruGarbageCollector",Ow=1048576;function Gc([n,e],[t,r]){const s=ye(n,t);return s===0?ye(e,r):s}class Lw{constructor(e){this.hr=e,this.buffer=new gt(Gc),this.Pr=0}Tr(){return++this.Pr}Ir(e){const t=[e,this.Tr()];if(this.buffer.size<this.hr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Gc(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Mw{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Er=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Er&&(this.Er.cancel(),this.Er=null)}get started(){return this.Er!==null}Rr(e){G(Hc,`Garbage collection scheduled in ${e}ms`),this.Er=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Er=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){as(t)?G(Hc,"Ignoring IndexedDB error during garbage collection: ",t):await is(t)}await this.Rr(3e5)})}}class Uw{constructor(e,t){this.Ar=e,this.params=t}calculateTargetCount(e,t){return this.Ar.Vr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return L.resolve(Ta.ce);const r=new Lw(t);return this.Ar.forEachTarget(e,s=>r.Ir(s.sequenceNumber)).next(()=>this.Ar.dr(e,s=>r.Ir(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Ar.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Ar.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(G("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(Kc)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(G("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Kc):this.mr(e,t))}getCacheSize(e){return this.Ar.getCacheSize(e)}mr(e,t){let r,s,i,o,l,c,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(G("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,t))).next(m=>(i=m,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),Vr()<=xe.DEBUG&&G("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${m} documents in `+(h-c)+`ms
Total Duration: ${h-f}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function Fw(n,e){return new Uw(n,e)}/**
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
 */class jw{constructor(){this.changes=new Ar(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Rt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?L.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class zw{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Bw{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Ds(r.mutation,s,Ut.empty(),We.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ve()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ve()){const s=yr();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=Ss();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=yr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ve()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{t.set(o,l)})})}computeViews(e,t,r,s){let i=Sn();const o=Ns(),l=function(){return Ns()}();return t.forEach((c,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof ar)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Ds(f.mutation,h,f.mutation.getFieldMask(),We.now())):o.set(h.key,Ut.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,f)=>o.set(h,f)),t.forEach((h,f)=>l.set(h,new zw(f,o.get(h)??null))),l))}recalculateAndSaveOverlays(e,t){const r=Ns();let s=new Ke((o,l)=>o-l),i=ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const l of o)l.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let f=r.get(c)||Ut.empty();f=l.applyToLocalView(h,f),r.set(c,f);const m=(s.get(l.batchId)||ve()).add(c);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,m=xf();f.forEach(w=>{if(!i.has(w)){const x=Sf(t.get(w),r.get(w));x!==null&&m.set(w,x),i=i.add(w)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return Wb(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):_f(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):L.resolve(yr());let l=js,c=i;return o.next(h=>L.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(w=>{c=c.insert(f,w)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,ve())).next(f=>({batchId:l,changes:wf(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ie(t)).next(r=>{let s=Ss();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=Ss();return this.indexManager.getCollectionParents(e,i).next(l=>L.forEach(l,c=>{const h=function(m,w){return new ii(w,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((m,w)=>{o=o.insert(m,w)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>{i.forEach((c,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Rt.newInvalidDocument(f)))});let l=Ss();return o.forEach((c,h)=>{const f=i.get(c);f!==void 0&&Ds(f.mutation,h,Ut.empty(),We.now()),ka(t,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class qw{constructor(e){this.serializer=e,this.Or=new Map,this.Nr=new Map}getBundleMetadata(e,t){return L.resolve(this.Or.get(t))}saveBundleMetadata(e,t){return this.Or.set(t.id,function(s){return{id:s.id,version:s.version,createTime:cn(s.createTime)}}(t)),L.resolve()}getNamedQuery(e,t){return L.resolve(this.Nr.get(t))}saveNamedQuery(e,t){return this.Nr.set(t.name,function(s){return{name:s.name,query:Vw(s.bundledQuery),readTime:cn(s.readTime)}}(t)),L.resolve()}}/**
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
 */class Ww{constructor(){this.overlays=new Ke(ie.comparator),this.Br=new Map}getOverlay(e,t){return L.resolve(this.overlays.get(t))}getOverlays(e,t){const r=yr();return L.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.wt(e,t,i)}),L.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Br.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Br.delete(r)),L.resolve()}getOverlaysForCollection(e,t,r){const s=yr(),i=t.length+1,o=new ie(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return L.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Ke((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=yr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=yr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return L.resolve(l)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Br.get(s.largestBatchId).delete(r.key);this.Br.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new uw(t,r));let i=this.Br.get(t);i===void 0&&(i=ve(),this.Br.set(t,i)),this.Br.set(t,i.add(r.key))}}/**
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
 */class Kw{constructor(){this.sessionToken=At.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,L.resolve()}}/**
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
 */class Nl{constructor(){this.Lr=new gt(wt.kr),this.qr=new gt(wt.Kr)}isEmpty(){return this.Lr.isEmpty()}addReference(e,t){const r=new wt(e,t);this.Lr=this.Lr.add(r),this.qr=this.qr.add(r)}Ur(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.$r(new wt(e,t))}Wr(e,t){e.forEach(r=>this.removeReference(r,t))}Qr(e){const t=new ie(new ze([])),r=new wt(t,e),s=new wt(t,e+1),i=[];return this.qr.forEachInRange([r,s],o=>{this.$r(o),i.push(o.key)}),i}Gr(){this.Lr.forEach(e=>this.$r(e))}$r(e){this.Lr=this.Lr.delete(e),this.qr=this.qr.delete(e)}zr(e){const t=new ie(new ze([])),r=new wt(t,e),s=new wt(t,e+1);let i=ve();return this.qr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new wt(e,0),r=this.Lr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class wt{constructor(e,t){this.key=e,this.jr=t}static kr(e,t){return ie.comparator(e.key,t.key)||ye(e.jr,t.jr)}static Kr(e,t){return ye(e.jr,t.jr)||ie.comparator(e.key,t.key)}}/**
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
 */class Hw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Xn=1,this.Jr=new gt(wt.kr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Xn;this.Xn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new lw(i,t,r,s);this.mutationQueue.push(o);for(const l of s)this.Jr=this.Jr.add(new wt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,t){return L.resolve(this.Hr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Zr(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?wl:this.Xn-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new wt(t,0),s=new wt(t,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],o=>{const l=this.Hr(o.jr);i.push(l)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new gt(ye);return t.forEach(s=>{const i=new wt(s,0),o=new wt(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,o],l=>{r=r.add(l.jr)})}),L.resolve(this.Xr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;ie.isDocumentKey(i)||(i=i.child(""));const o=new wt(new ie(i),0);let l=new gt(ye);return this.Jr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.jr)),!0)},o),L.resolve(this.Xr(l))}Xr(e){const t=[];return e.forEach(r=>{const s=this.Hr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Ve(this.Yr(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return L.forEach(t.mutations,s=>{const i=new wt(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Jr=r})}tr(e){}containsKey(e,t){const r=new wt(t,0),s=this.Jr.firstAfterOrEqual(r);return L.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Yr(e,t){return this.Zr(e)}Zr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Hr(e){const t=this.Zr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Gw{constructor(e){this.ei=e,this.docs=function(){return new Ke(ie.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.ei(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return L.resolve(r?r.document.mutableCopy():Rt.newInvalidDocument(t))}getEntries(e,t){let r=Sn();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Rt.newInvalidDocument(s))}),L.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Sn();const o=t.path,l=new ie(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||wb(bb(f),r)<=0||(s.has(f.key)||ka(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,t,r,s){ce(9500)}ti(e,t){return L.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Qw(this)}getSize(e){return L.resolve(this.size)}}class Qw extends jw{constructor(e){super(),this.Fr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Fr.addEntry(e,s)):this.Fr.removeEntry(r)}),L.waitFor(t)}getFromCache(e,t){return this.Fr.getEntry(e,t)}getAllFromCache(e,t){return this.Fr.getEntries(e,t)}}/**
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
 */class Jw{constructor(e){this.persistence=e,this.ni=new Ar(t=>Tl(t),Il),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.ri=0,this.ii=new Nl,this.targetCount=0,this.si=Zn.sr()}forEachTarget(e,t){return this.ni.forEach((r,s)=>t(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.ri)}allocateTargetId(e){return this.highestTargetId=this.si.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ri&&(this.ri=t),L.resolve()}cr(e){this.ni.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.si=new Zn(t),this.highestTargetId=t),e.sequenceNumber>this.ri&&(this.ri=e.sequenceNumber)}addTargetData(e,t){return this.cr(t),this.targetCount+=1,L.resolve()}updateTargetData(e,t){return this.cr(t),L.resolve()}removeTargetData(e,t){return this.ni.delete(t.target),this.ii.Qr(t.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ni.forEach((o,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.ni.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),L.waitFor(i).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,t){const r=this.ni.get(t)||null;return L.resolve(r)}addMatchingKeys(e,t,r){return this.ii.Ur(t,r),L.resolve()}removeMatchingKeys(e,t,r){this.ii.Wr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),L.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ii.Qr(t),L.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ii.zr(t);return L.resolve(r)}containsKey(e,t){return L.resolve(this.ii.containsKey(t))}}/**
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
 */class jf{constructor(e,t){this.oi={},this.overlays={},this._i=new Ta(0),this.ai=!1,this.ai=!0,this.ui=new Kw,this.referenceDelegate=e(this),this.ci=new Jw(this),this.indexManager=new Nw,this.remoteDocumentCache=function(s){return new Gw(s)}(r=>this.referenceDelegate.li(r)),this.serializer=new $w(t),this.hi=new qw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ai=!1,Promise.resolve()}get started(){return this.ai}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ww,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.oi[e.toKey()];return r||(r=new Hw(t,this.referenceDelegate),this.oi[e.toKey()]=r),r}getGlobalsCache(){return this.ui}getTargetCache(){return this.ci}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.hi}runTransaction(e,t,r){G("MemoryPersistence","Starting transaction:",e);const s=new Xw(this._i.next());return this.referenceDelegate.Pi(),r(s).next(i=>this.referenceDelegate.Ti(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ii(e,t){return L.or(Object.values(this.oi).map(r=>()=>r.containsKey(e,t)))}}class Xw extends Eb{constructor(e){super(),this.currentSequenceNumber=e}}class Dl{constructor(e){this.persistence=e,this.Ei=new Nl,this.Ri=null}static Ai(e){return new Dl(e)}get Vi(){if(this.Ri)return this.Ri;throw ce(60996)}addReference(e,t,r){return this.Ei.addReference(r,t),this.Vi.delete(r.toString()),L.resolve()}removeReference(e,t,r){return this.Ei.removeReference(r,t),this.Vi.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,t){return this.Vi.add(t.toString()),L.resolve()}removeTarget(e,t){this.Ei.Qr(t.targetId).forEach(s=>this.Vi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Vi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Pi(){this.Ri=new Set}Ti(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Vi,r=>{const s=ie.fromPath(r);return this.di(e,s).next(i=>{i||t.removeEntry(s,de.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.di(e,t).next(r=>{r?this.Vi.delete(t.toString()):this.Vi.add(t.toString())})}li(e){return 0}di(e,t){return L.or([()=>L.resolve(this.Ei.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class ha{constructor(e,t){this.persistence=e,this.mi=new Ar(r=>Ab(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Fw(this,t)}static Ai(e,t){return new ha(e,t)}Pi(){}Ti(e){return L.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Vr(e){const t=this.gr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}gr(e){let t=0;return this.dr(e,r=>{t++}).next(()=>t)}dr(e,t){return L.forEach(this.mi,(r,s)=>this.yr(e,r,s).next(i=>i?L.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ti(e,o=>this.yr(e,o,t).next(l=>{l||(r++,i.removeEntry(o,de.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.mi.set(t,e.currentSequenceNumber),L.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.mi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,t,r){return this.mi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,t){return this.mi.set(t,e.currentSequenceNumber),L.resolve()}li(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Li(e.data.value)),t}yr(e,t,r){return L.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.mi.get(t);return L.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Ol{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Ps=r,this.Ts=s}static Is(e,t){let r=ve(),s=ve();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ol(e,t.fromCache,r,s)}}/**
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
 */class Yw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Zw{constructor(){this.Es=!1,this.Rs=!1,this.As=100,this.Vs=function(){return Ig()?8:Tb($t())>0?6:4}()}initialize(e,t){this.ds=e,this.indexManager=t,this.Es=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.fs(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.gs(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Yw;return this.ps(e,t,o).next(l=>{if(i.result=l,this.Rs)return this.ys(e,t,o,l.size)})}).next(()=>i.result)}ys(e,t,r,s){return r.documentReadCount<this.As?(Vr()<=xe.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",Nr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.As,"documents"),L.resolve()):(Vr()<=xe.DEBUG&&G("QueryEngine","Query:",Nr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Vs*s?(Vr()<=xe.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",Nr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,un(t))):L.resolve())}fs(e,t){if(Oc(t))return L.resolve(null);let r=un(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=jo(t,null,"F"),r=un(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ve(...i);return this.ds.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.ws(t,l);return this.Ss(t,h,o,c.readTime)?this.fs(e,jo(t,null,"F")):this.bs(e,h,t,c)}))})))}gs(e,t,r,s){return Oc(t)||s.isEqual(de.min())?L.resolve(null):this.ds.getDocuments(e,r).next(i=>{const o=this.ws(t,i);return this.Ss(t,o,r,s)?L.resolve(null):(Vr()<=xe.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Nr(t)),this.bs(e,o,t,vb(s,js)).next(l=>l))})}ws(e,t){let r=new gt(vf(e));return t.forEach((s,i)=>{ka(e,i)&&(r=r.add(i))}),r}Ss(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ps(e,t,r){return Vr()<=xe.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",Nr(t)),this.ds.getDocumentsMatchingQuery(e,t,Qn.min(),r)}bs(e,t,r,s){return this.ds.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const Ll="LocalStore",ex=3e8;class tx{constructor(e,t,r,s){this.persistence=e,this.Ds=t,this.serializer=s,this.Cs=new Ke(ye),this.vs=new Ar(i=>Tl(i),Il),this.Fs=new Map,this.Ms=e.getRemoteDocumentCache(),this.ci=e.getTargetCache(),this.hi=e.getBundleCache(),this.xs(r)}xs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Bw(this.Ms,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ms.setIndexManager(this.indexManager),this.Ds.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Cs))}}function nx(n,e,t,r){return new tx(n,e,t,r)}async function zf(n,e){const t=fe(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.xs(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=ve();for(const h of s){o.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(r,c).next(h=>({Os:h,removedBatchIds:o,addedBatchIds:l}))})})}function rx(n,e){const t=fe(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Ms.newChangeBuffer({trackRemovals:!0});return function(l,c,h,f){const m=h.batch,w=m.keys();let x=L.resolve();return w.forEach(N=>{x=x.next(()=>f.getEntry(c,N)).next(P=>{const $=h.docVersions.get(N);Ve($!==null,48541),P.version.compareTo($)<0&&(m.applyToRemoteDocument(P,h),P.isValidDocument()&&(P.setReadTime(h.commitVersion),f.addEntry(P)))})}),x.next(()=>l.mutationQueue.removeMutationBatch(c,m))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=ve();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Bf(n){const e=fe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ci.getLastRemoteSnapshotVersion(t))}function sx(n,e){const t=fe(n),r=e.snapshotVersion;let s=t.Cs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.Ms.newChangeBuffer({trackRemovals:!0});s=t.Cs;const l=[];e.targetChanges.forEach((f,m)=>{const w=s.get(m);if(!w)return;l.push(t.ci.removeMatchingKeys(i,f.removedDocuments,m).next(()=>t.ci.addMatchingKeys(i,f.addedDocuments,m)));let x=w.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?x=x.withResumeToken(At.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):f.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(f.resumeToken,r)),s=s.insert(m,x),function(P,$,D){return P.resumeToken.approximateByteSize()===0||$.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=ex?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(w,x,f)&&l.push(t.ci.updateTargetData(i,x))});let c=Sn(),h=ve();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(ix(i,o,e.documentUpdates).next(f=>{c=f.Ns,h=f.Bs})),!r.isEqual(de.min())){const f=t.ci.getLastRemoteSnapshotVersion(i).next(m=>t.ci.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return L.waitFor(l).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(t.Cs=s,i))}function ix(n,e,t){let r=ve(),s=ve();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=Sn();return t.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(de.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):G(Ll,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Ns:o,Bs:s}})}function ax(n,e){const t=fe(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=wl),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ox(n,e){const t=fe(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.ci.getTargetData(r,e).next(i=>i?(s=i,L.resolve(s)):t.ci.allocateTargetId(r).next(o=>(s=new vn(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.ci.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Cs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Cs=t.Cs.insert(r.targetId,r),t.vs.set(e,r.targetId)),r})}async function Ko(n,e,t){const r=fe(n),s=r.Cs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!as(o))throw o;G(Ll,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Cs=r.Cs.remove(e),r.vs.delete(s.target)}function Qc(n,e,t){const r=fe(n);let s=de.min(),i=ve();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,h,f){const m=fe(c),w=m.vs.get(f);return w!==void 0?L.resolve(m.Cs.get(w)):m.ci.getTargetData(h,f)}(r,o,un(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.ci.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.Ds.getDocumentsMatchingQuery(o,e,t?s:de.min(),t?i:ve())).next(l=>(lx(r,Hb(e),l),{documents:l,Ls:i})))}function lx(n,e,t){let r=n.Fs.get(e)||de.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Fs.set(e,r)}class Jc{constructor(){this.activeTargetIds=Zb()}Ws(e){this.activeTargetIds=this.activeTargetIds.add(e)}Qs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}$s(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ux{constructor(){this.Co=new Jc,this.vo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Co.Ws(e),this.vo[e]||"not-current"}updateQueryState(e,t,r){this.vo[e]=t}removeLocalQueryTarget(e){this.Co.Qs(e)}isLocalQueryTarget(e){return this.Co.activeTargetIds.has(e)}clearQueryState(e){delete this.vo[e]}getAllActiveQueryTargets(){return this.Co.activeTargetIds}isActiveQueryTarget(e){return this.Co.activeTargetIds.has(e)}start(){return this.Co=new Jc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class cx{Fo(e){}shutdown(){}}/**
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
 */const Xc="ConnectivityMonitor";class Yc{constructor(){this.Mo=()=>this.xo(),this.Oo=()=>this.No(),this.Bo=[],this.Lo()}Fo(e){this.Bo.push(e)}shutdown(){window.removeEventListener("online",this.Mo),window.removeEventListener("offline",this.Oo)}Lo(){window.addEventListener("online",this.Mo),window.addEventListener("offline",this.Oo)}xo(){G(Xc,"Network connectivity changed: AVAILABLE");for(const e of this.Bo)e(0)}No(){G(Xc,"Network connectivity changed: UNAVAILABLE");for(const e of this.Bo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ri=null;function Ho(){return Ri===null?Ri=function(){return 268435456+Math.round(2147483648*Math.random())}():Ri++,"0x"+Ri.toString(16)}/**
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
 */const bo="RestConnection",hx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class dx{get ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Uo=this.databaseId.database===ra?`project_id=${r}`:`project_id=${r}&database_id=${s}`}$o(e,t,r,s,i){const o=Ho(),l=this.Wo(e,t.toUriEncodedString());G(bo,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Uo};this.Qo(c,s,i);const{host:h}=new URL(l),f=Zs(h);return this.Go(e,l,c,r,f).then(m=>(G(bo,`Received RPC '${e}' ${o}: `,m),m),m=>{throw Ir(bo,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}zo(e,t,r,s,i,o){return this.$o(e,t,r,s,i)}Qo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ss}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Wo(e,t){const r=hx[e];let s=`${this.qo}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class fx{constructor(e){this.jo=e.jo,this.Jo=e.Jo}Ho(e){this.Zo=e}Xo(e){this.Yo=e}e_(e){this.t_=e}onMessage(e){this.n_=e}close(){this.Jo()}send(e){this.jo(e)}r_(){this.Zo()}i_(){this.Yo()}s_(e){this.t_(e)}o_(e){this.n_(e)}}/**
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
 */const kt="WebChannelConnection",Es=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Br extends dx{constructor(e){super(e),this.__=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static a_(){if(!Br.u_){const e=Hd();Es(e,Kd.STAT_EVENT,t=>{t.stat===Do.PROXY?G(kt,"STAT_EVENT: detected buffering proxy"):t.stat===Do.NOPROXY&&G(kt,"STAT_EVENT: detected no buffering proxy")}),Br.u_=!0}}Go(e,t,r,s,i){const o=Ho();return new Promise((l,c)=>{const h=new qd;h.setWithCredentials(!0),h.listenOnce(Wd.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Oi.NO_ERROR:const m=h.getResponseJson();G(kt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case Oi.TIMEOUT:G(kt,`RPC '${e}' ${o} timed out`),c(new X(O.DEADLINE_EXCEEDED,"Request time out"));break;case Oi.HTTP_ERROR:const w=h.getStatus();if(G(kt,`RPC '${e}' ${o} failed with status:`,w,"response text:",h.getResponseText()),w>0){let x=h.getResponseJson();Array.isArray(x)&&(x=x[0]);const N=x?.error;if(N&&N.status&&N.message){const P=function(D){const S=D.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(S)>=0?S:O.UNKNOWN}(N.status);c(new X(P,N.message))}else c(new X(O.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new X(O.UNAVAILABLE,"Connection failed."));break;default:ce(9055,{c_:e,streamId:o,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{G(kt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);G(kt,`RPC '${e}' ${o} sending request:`,s),h.send(t,"POST",f,r,15)})}P_(e,t,r){const s=Ho(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Qo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const h=i.join("");G(kt,`Creating RPC '${e}' stream ${s}: ${h}`,l);const f=o.createWebChannel(h,l);this.T_(f);let m=!1,w=!1;const x=new fx({jo:N=>{w?G(kt,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(m||(G(kt,`Opening RPC '${e}' stream ${s} transport.`),f.open(),m=!0),G(kt,`RPC '${e}' stream ${s} sending:`,N),f.send(N))},Jo:()=>f.close()});return Es(f,As.EventType.OPEN,()=>{w||(G(kt,`RPC '${e}' stream ${s} transport opened.`),x.r_())}),Es(f,As.EventType.CLOSE,()=>{w||(w=!0,G(kt,`RPC '${e}' stream ${s} transport closed`),x.s_(),this.I_(f))}),Es(f,As.EventType.ERROR,N=>{w||(w=!0,Ir(kt,`RPC '${e}' stream ${s} transport errored. Name:`,N.name,"Message:",N.message),x.s_(new X(O.UNAVAILABLE,"The operation could not be completed")))}),Es(f,As.EventType.MESSAGE,N=>{if(!w){const P=N.data[0];Ve(!!P,16349);const $=P,D=$?.error||$[0]?.error;if(D){G(kt,`RPC '${e}' stream ${s} received error:`,D);const S=D.status;let M=function(V){const b=it[V];if(b!==void 0)return Cf(b)}(S),U=D.message;S==="NOT_FOUND"&&U.includes("database")&&U.includes("does not exist")&&U.includes(this.databaseId.database)&&Ir(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),M===void 0&&(M=O.INTERNAL,U="Unknown error status: "+S+" with message "+D.message),w=!0,x.s_(new X(M,U)),f.close()}else G(kt,`RPC '${e}' stream ${s} received:`,P),x.o_(P)}}),Br.a_(),setTimeout(()=>{x.i_()},0),x}terminate(){this.__.forEach(e=>e.close()),this.__=[]}T_(e){this.__.push(e)}I_(e){this.__=this.__.filter(t=>t===e)}Qo(e,t,r){super.Qo(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Gd()}}/**
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
 */function px(n){return new Br(n)}function wo(){return typeof document<"u"?document:null}/**
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
 */function $a(n){return new yw(n,!0)}/**
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
 */Br.u_=!1;class qf{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Di=e,this.timerId=t,this.E_=r,this.R_=s,this.A_=i,this.V_=0,this.d_=null,this.m_=Date.now(),this.reset()}reset(){this.V_=0}f_(){this.V_=this.A_}g_(e){this.cancel();const t=Math.floor(this.V_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&G("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.d_=this.Di.enqueueAfterDelay(this.timerId,s,()=>(this.m_=Date.now(),e())),this.V_*=this.R_,this.V_<this.E_&&(this.V_=this.E_),this.V_>this.A_&&(this.V_=this.A_)}y_(){this.d_!==null&&(this.d_.skipDelay(),this.d_=null)}cancel(){this.d_!==null&&(this.d_.cancel(),this.d_=null)}p_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Zc="PersistentStream";class Wf{constructor(e,t,r,s,i,o,l,c){this.Di=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.C_=null,this.stream=null,this.v_=0,this.F_=new qf(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Di.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}async close(e,t){this.q_(),this.K_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===O.RESOURCE_EXHAUSTED?(An(t.toString()),An("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.e_(t)}U_(){}auth(){this.state=1;const e=this.W_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.b_===t&&this.Q_(r,s)},r=>{e(()=>{const s=new X(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)})})}Q_(e,t){const r=this.W_(this.b_);this.stream=this.z_(e,t),this.stream.Ho(()=>{r(()=>this.listener.Ho())}),this.stream.Xo(()=>{r(()=>(this.state=2,this.C_=this.Di.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.Xo()))}),this.stream.e_(s=>{r(()=>this.G_(s))}),this.stream.onMessage(s=>{r(()=>++this.v_==1?this.j_(s):this.onNext(s))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return G(Zc,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Di.enqueueAndForget(()=>this.b_===e?t():(G(Zc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mx extends Wf{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=ww(this.serializer,e),r=function(i){if(!("targetChange"in i))return de.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?de.min():o.readTime?cn(o.readTime):de.min()}(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=Wo(this.serializer),t.addTarget=function(i,o){let l;const c=o.target;if(l=Uo(c)?{documents:Tw(i,c)}:{query:Iw(i,c).dt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=$f(i,o.resumeToken);const h=zo(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(de.min())>0){l.readTime=ca(i,o.snapshotVersion.toTimestamp());const h=zo(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=Sw(this.serializer,e);r&&(t.labels=r),this.k_(t)}Z_(e){const t={};t.database=Wo(this.serializer),t.removeTarget=e,this.k_(t)}}class gx extends Wf{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get X_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.X_&&this.Y_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Ve(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ve(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Ve(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=Ew(e.writeResults,e.commitTime),r=cn(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=Wo(this.serializer),this.k_(e)}Y_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>xw(this.serializer,r))};this.k_(t)}}/**
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
 */class _x{}class yx extends _x{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new X(O.FAILED_PRECONDITION,"The client has already been terminated.")}$o(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.$o(e,Bo(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new X(O.UNKNOWN,i.toString())})}zo(e,t,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.zo(e,Bo(t,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new X(O.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}function vx(n,e,t,r){return new yx(n,e,t,r)}class bx{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(An(t),this._a=!1):G("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const pn="RemoteStore";class wx{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Map,this.Ea=new Map,this.Ra=new Zn(1e3),this.Aa=new Zn(1001),this.Va=new Set,this.da=[],this.ma=i,this.ma.Fo(o=>{r.enqueueAndForget(async()=>{Sr(this)&&(G(pn,"Restarting streams for network reachability change."),await async function(c){const h=fe(c);h.Va.add(4),await ui(h),h.fa.set("Unknown"),h.Va.delete(4),await Va(h)}(this))})}),this.fa=new bx(r,s)}}async function Va(n){if(Sr(n))for(const e of n.da)await e(!0)}async function ui(n){for(const e of n.da)await e(!1)}function Go(n,e){return n.Ia.get(e)||void 0}function Kf(n,e){const t=fe(n),r=Go(t,e.targetId);if(r!==void 0&&t.Ta.has(r))return;const s=function(l,c){const h=Go(l,c);h!==void 0&&l.Ea.delete(h);const f=function(w,x){return x%2!=0?w.Aa.next():w.Ra.next()}(l,c);return l.Ia.set(c,f),l.Ea.set(f,c),f}(t,e.targetId);G(pn,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new vn(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.Ta.set(s,i),jl(t)?Fl(t):os(t).x_()&&Ul(t,i)}function Ml(n,e){const t=fe(n),r=os(t),s=Go(t,e);G(pn,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t.Ta.delete(s),t.Ia.delete(e),t.Ea.delete(s),r.x_()&&Hf(t,s),t.Ta.size===0&&(r.x_()?r.B_():Sr(t)&&t.fa.set("Unknown"))}function Ul(n,e){if(n.ga.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const t=n.Ea.get(e.targetId);if(t===void 0)return void G(pn,"SDK target ID not found for remote ID: "+e.targetId);const r=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(r)}os(n).H_(e)}function Hf(n,e){n.ga.$e(e),os(n).Z_(e)}function Fl(n){n.ga=new pw({getRemoteKeysForTarget:e=>{const t=n.Ea.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):ve()},Rt:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),os(n).start(),n.fa.aa()}function jl(n){return Sr(n)&&!os(n).M_()&&n.Ta.size>0}function Sr(n){return fe(n).Va.size===0}function Gf(n){n.ga=void 0}async function xx(n){n.fa.set("Online")}async function Ex(n){n.Ta.forEach((e,t)=>{Ul(n,e)})}async function Tx(n,e){Gf(n),jl(n)?(n.fa.la(e),Fl(n)):n.fa.set("Unknown")}async function Ix(n,e,t){if(n.fa.set("Online"),e instanceof Pf&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds){if(s.Ta.has(l)){const c=s.Ea.get(l);c!==void 0&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.Ea.delete(l)),s.Ta.delete(l)}s.ga.removeTarget(l)}}(n,e)}catch(r){G(pn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await da(n,r)}else if(e instanceof Fi?n.ga.Xe(e):e instanceof Rf?n.ga.it(e):n.ga.tt(e),!t.isEqual(de.min()))try{const r=await Bf(n.localStore);t.compareTo(r)>=0&&await function(i,o){const l=i.ga.Pt(o);l.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const m=i.Ta.get(f);m&&i.Ta.set(f,m.withResumeToken(h.resumeToken,o))}}),l.targetMismatches.forEach((h,f)=>{const m=i.Ta.get(h);if(!m)return;i.Ta.set(h,m.withResumeToken(At.EMPTY_BYTE_STRING,m.snapshotVersion)),Hf(i,h);const w=new vn(m.target,h,f,m.sequenceNumber);Ul(i,w)});const c=function(f,m){const w=new Map;m.targetChanges.forEach((N,P)=>{const $=f.Ea.get(P);$!==void 0&&w.set($,N)});let x=new Ke(ye);return m.targetMismatches.forEach((N,P)=>{const $=f.Ea.get(N);$!==void 0&&(x=x.insert($,P))}),new oi(m.snapshotVersion,w,x,m.documentUpdates,m.resolvedLimboDocuments)}(i,l);return i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){G(pn,"Failed to raise snapshot:",r),await da(n,r)}}async function da(n,e,t){if(!as(e))throw e;n.Va.add(1),await ui(n),n.fa.set("Offline"),t||(t=()=>Bf(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{G(pn,"Retrying IndexedDB access"),await t(),n.Va.delete(1),await Va(n)})}function Qf(n,e){return e().catch(t=>da(n,t,e))}async function Na(n){const e=fe(n),t=er(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:wl;for(;Ax(e);)try{const s=await ax(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,Sx(e,s)}catch(s){await da(e,s)}Jf(e)&&Xf(e)}function Ax(n){return Sr(n)&&n.Pa.length<10}function Sx(n,e){n.Pa.push(e);const t=er(n);t.x_()&&t.X_&&t.Y_(e.mutations)}function Jf(n){return Sr(n)&&!er(n).M_()&&n.Pa.length>0}function Xf(n){er(n).start()}async function kx(n){er(n).na()}async function Cx(n){const e=er(n);for(const t of n.Pa)e.Y_(t.mutations)}async function Rx(n,e,t){const r=n.Pa.shift(),s=Pl.from(r,e,t);await Qf(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Na(n)}async function Px(n,e){e&&er(n).X_&&await async function(r,s){if(function(o){return hw(o)&&o!==O.ABORTED}(s.code)){const i=r.Pa.shift();er(r).N_(),await Qf(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Na(r)}}(n,e),Jf(n)&&Xf(n)}async function eh(n,e){const t=fe(n);t.asyncQueue.verifyOperationInProgress(),G(pn,"RemoteStore received new credentials");const r=Sr(t);t.Va.add(3),await ui(t),r&&t.fa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Va.delete(3),await Va(t)}async function $x(n,e){const t=fe(n);e?(t.Va.delete(2),await Va(t)):e||(t.Va.add(2),await ui(t),t.fa.set("Unknown"))}function os(n){return n.pa||(n.pa=function(t,r,s){const i=fe(t);return i.ia(),new mx(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Ho:xx.bind(null,n),Xo:Ex.bind(null,n),e_:Tx.bind(null,n),J_:Ix.bind(null,n)}),n.da.push(async e=>{e?(n.pa.N_(),jl(n)?Fl(n):n.fa.set("Unknown")):(await n.pa.stop(),Gf(n))})),n.pa}function er(n){return n.ya||(n.ya=function(t,r,s){const i=fe(t);return i.ia(),new gx(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Ho:()=>Promise.resolve(),Xo:kx.bind(null,n),e_:Px.bind(null,n),ea:Cx.bind(null,n),ta:Rx.bind(null,n)}),n.da.push(async e=>{e?(n.ya.N_(),await Na(n)):(await n.ya.stop(),n.Pa.length>0&&(G(pn,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))})),n.ya}/**
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
 */class zl{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new xn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,l=new zl(e,t,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Bl(n,e){if(An("AsyncQueue",`${e}: ${n}`),as(n))return new X(O.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class qr{static emptySet(e){return new qr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ie.comparator(t.key,r.key):(t,r)=>ie.comparator(t.key,r.key),this.keyedMap=Ss(),this.sortedSet=new Ke(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof qr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new qr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class th{constructor(){this.wa=new Ke(ie.comparator)}track(e){const t=e.doc.key,r=this.wa.get(t);r?e.type!==0&&r.type===3?this.wa=this.wa.insert(t,e):e.type===3&&r.type!==1?this.wa=this.wa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.wa=this.wa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.wa=this.wa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.wa=this.wa.remove(t):e.type===1&&r.type===2?this.wa=this.wa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.wa=this.wa.insert(t,{type:2,doc:e.doc}):ce(63341,{At:e,Sa:r}):this.wa=this.wa.insert(t,e)}ba(){const e=[];return this.wa.inorderTraversal((t,r)=>{e.push(r)}),e}}class Zr{constructor(e,t,r,s,i,o,l,c,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(l=>{o.push({type:0,doc:l})}),new Zr(e,t,qr.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Sa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Vx{constructor(){this.Da=void 0,this.Ca=[]}va(){return this.Ca.some(e=>e.Fa())}}class Nx{constructor(){this.queries=nh(),this.onlineState="Unknown",this.Ma=new Set}terminate(){(function(t,r){const s=fe(t),i=s.queries;s.queries=nh(),i.forEach((o,l)=>{for(const c of l.Ca)c.onError(r)})})(this,new X(O.ABORTED,"Firestore shutting down"))}}function nh(){return new Ar(n=>yf(n),Sa)}async function Yf(n,e){const t=fe(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.va()&&e.Fa()&&(r=2):(i=new Vx,r=e.Fa()?0:1);try{switch(r){case 0:i.Da=await t.onListen(s,!0);break;case 1:i.Da=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const l=Bl(o,`Initialization of query '${Nr(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.Ca.push(e),e.xa(t.onlineState),i.Da&&e.Oa(i.Da)&&ql(t)}async function Zf(n,e){const t=fe(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.Ca.indexOf(e);o>=0&&(i.Ca.splice(o,1),i.Ca.length===0?s=e.Fa()?0:1:!i.va()&&e.Fa()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Dx(n,e){const t=fe(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const l of o.Ca)l.Oa(s)&&(r=!0);o.Da=s}}r&&ql(t)}function Ox(n,e,t){const r=fe(n),s=r.queries.get(e);if(s)for(const i of s.Ca)i.onError(t);r.queries.delete(e)}function ql(n){n.Ma.forEach(e=>{e.next()})}var Qo,rh;(rh=Qo||(Qo={})).Na="default",rh.Cache="cache";class ep{constructor(e,t,r){this.query=e,this.Ba=t,this.La=!1,this.ka=null,this.onlineState="Unknown",this.options=r||{}}Oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Zr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.La?this.qa(e)&&(this.Ba.next(e),t=!0):this.Ka(e,this.onlineState)&&(this.Ua(e),t=!0),this.ka=e,t}onError(e){this.Ba.error(e)}xa(e){this.onlineState=e;let t=!1;return this.ka&&!this.La&&this.Ka(this.ka,e)&&(this.Ua(this.ka),t=!0),t}Ka(e,t){if(!e.fromCache||!this.Fa())return!0;const r=t!=="Offline";return(!this.options.$a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const t=this.ka&&this.ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ua(e){e=Zr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.La=!0,this.Ba.next(e)}Fa(){return this.options.source!==Qo.Cache}}/**
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
 */class tp{constructor(e){this.key=e}}class np{constructor(e){this.key=e}}class Lx{constructor(e,t){this.query=e,this.eu=t,this.tu=null,this.hasCachedResults=!1,this.current=!1,this.nu=ve(),this.mutatedKeys=ve(),this.ru=vf(e),this.iu=new qr(this.ru)}get su(){return this.eu}ou(e,t){const r=t?t._u:new th,s=t?t.iu:this.iu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const w=s.get(f),x=ka(this.query,m)?m:null,N=!!w&&this.mutatedKeys.has(w.key),P=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let $=!1;w&&x?w.data.isEqual(x.data)?N!==P&&(r.track({type:3,doc:x}),$=!0):this.au(w,x)||(r.track({type:2,doc:x}),$=!0,(c&&this.ru(x,c)>0||h&&this.ru(x,h)<0)&&(l=!0)):!w&&x?(r.track({type:0,doc:x}),$=!0):w&&!x&&(r.track({type:1,doc:w}),$=!0,(c||h)&&(l=!0)),$&&(x?(o=o.add(x),i=P?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{iu:o,_u:r,Ss:l,mutatedKeys:i}}au(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.iu;this.iu=e.iu,this.mutatedKeys=e.mutatedKeys;const o=e._u.ba();o.sort((f,m)=>function(x,N){const P=$=>{switch($){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ce(20277,{At:$})}};return P(x)-P(N)}(f.type,m.type)||this.ru(f.doc,m.doc)),this.uu(r),s=s??!1;const l=t&&!s?this.cu():[],c=this.nu.size===0&&this.current&&!s?1:0,h=c!==this.tu;return this.tu=c,o.length!==0||h?{snapshot:new Zr(this.query,e.iu,i,o,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),lu:l}:{lu:l}}xa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({iu:this.iu,_u:new th,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{lu:[]}}hu(e){return!this.eu.has(e)&&!!this.iu.has(e)&&!this.iu.get(e).hasLocalMutations}uu(e){e&&(e.addedDocuments.forEach(t=>this.eu=this.eu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.eu=this.eu.delete(t)),this.current=e.current)}cu(){if(!this.current)return[];const e=this.nu;this.nu=ve(),this.iu.forEach(r=>{this.hu(r.key)&&(this.nu=this.nu.add(r.key))});const t=[];return e.forEach(r=>{this.nu.has(r)||t.push(new np(r))}),this.nu.forEach(r=>{e.has(r)||t.push(new tp(r))}),t}Pu(e){this.eu=e.Ls,this.nu=ve();const t=this.ou(e.documents);return this.applyChanges(t,!0)}Tu(){return Zr.fromInitialDocuments(this.query,this.iu,this.mutatedKeys,this.tu===0,this.hasCachedResults)}}const Wl="SyncEngine";class Mx{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Ux{constructor(e){this.key=e,this.Iu=!1}}class Fx{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Eu={},this.Ru=new Ar(l=>yf(l),Sa),this.Au=new Map,this.Vu=new Set,this.du=new Ke(ie.comparator),this.mu=new Map,this.fu=new Nl,this.gu={},this.pu=new Map,this.yu=Zn._r(),this.onlineState="Unknown",this.wu=void 0}get isPrimaryClient(){return this.wu===!0}}async function jx(n,e,t=!0){const r=lp(n);let s;const i=r.Ru.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Tu()):s=await rp(r,e,t,!0),s}async function zx(n,e){const t=lp(n);await rp(t,e,!0,!1)}async function rp(n,e,t,r){const s=await ox(n.localStore,un(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await Bx(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&Kf(n.remoteStore,s),l}async function Bx(n,e,t,r,s){n.Su=(m,w,x)=>async function(P,$,D,S){let M=$.view.ou(D);M.Ss&&(M=await Qc(P.localStore,$.query,!1).then(({documents:b})=>$.view.ou(b,M)));const U=S&&S.targetChanges.get($.targetId),K=S&&S.targetMismatches.get($.targetId)!=null,V=$.view.applyChanges(M,P.isPrimaryClient,U,K);return ih(P,$.targetId,V.lu),V.snapshot}(n,m,w,x);const i=await Qc(n.localStore,e,!0),o=new Lx(e,i.Ls),l=o.ou(i.documents),c=li.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=o.applyChanges(l,n.isPrimaryClient,c);ih(n,t,h.lu);const f=new Mx(e,t,o);return n.Ru.set(e,f),n.Au.has(t)?n.Au.get(t).push(e):n.Au.set(t,[e]),h.snapshot}async function qx(n,e,t){const r=fe(n),s=r.Ru.get(e),i=r.Au.get(s.targetId);if(i.length>1)return r.Au.set(s.targetId,i.filter(o=>!Sa(o,e))),void r.Ru.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ko(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Ml(r.remoteStore,s.targetId),Jo(r,s.targetId)}).catch(is)):(Jo(r,s.targetId),await Ko(r.localStore,s.targetId,!0))}async function Wx(n,e){const t=fe(n),r=t.Ru.get(e),s=t.Au.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Ml(t.remoteStore,r.targetId))}async function Kx(n,e,t){const r=Zx(n);try{const s=await function(o,l){const c=fe(o),h=We.now(),f=l.reduce((x,N)=>x.add(N.key),ve());let m,w;return c.persistence.runTransaction("Locally write mutations","readwrite",x=>{let N=Sn(),P=ve();return c.Ms.getEntries(x,f).next($=>{N=$,N.forEach((D,S)=>{S.isValidDocument()||(P=P.add(D))})}).next(()=>c.localDocuments.getOverlayedDocuments(x,N)).next($=>{m=$;const D=[];for(const S of l){const M=aw(S,m.get(S.key).overlayedDocument);M!=null&&D.push(new ar(S.key,M,cf(M.value.mapValue),qt.exists(!0)))}return c.mutationQueue.addMutationBatch(x,h,D,l)}).next($=>{w=$;const D=$.applyToLocalDocumentSet(m,P);return c.documentOverlayCache.saveOverlays(x,$.batchId,D)})}).then(()=>({batchId:w.batchId,changes:wf(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let h=o.gu[o.currentUser.toKey()];h||(h=new Ke(ye)),h=h.insert(l,c),o.gu[o.currentUser.toKey()]=h}(r,s.batchId,t),await ci(r,s.changes),await Na(r.remoteStore)}catch(s){const i=Bl(s,"Failed to persist write");t.reject(i)}}async function sp(n,e){const t=fe(n);try{const r=await sx(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.mu.get(i);o&&(Ve(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.Iu=!0:s.modifiedDocuments.size>0?Ve(o.Iu,14607):s.removedDocuments.size>0&&(Ve(o.Iu,42227),o.Iu=!1))}),await ci(t,r,e)}catch(r){await is(r)}}function sh(n,e,t){const r=fe(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Ru.forEach((i,o)=>{const l=o.view.xa(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=fe(o);c.onlineState=l;let h=!1;c.queries.forEach((f,m)=>{for(const w of m.Ca)w.xa(l)&&(h=!0)}),h&&ql(c)}(r.eventManager,e),s.length&&r.Eu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Hx(n,e,t){const r=fe(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.mu.get(e),i=s&&s.key;if(i){let o=new Ke(ie.comparator);o=o.insert(i,Rt.newNoDocument(i,de.min()));const l=ve().add(i),c=new oi(de.min(),new Map,new Ke(ye),o,l);await sp(r,c),r.du=r.du.remove(i),r.mu.delete(e),Kl(r)}else await Ko(r.localStore,e,!1).then(()=>Jo(r,e,t)).catch(is)}async function Gx(n,e){const t=fe(n),r=e.batch.batchId;try{const s=await rx(t.localStore,e);ap(t,r,null),ip(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ci(t,s)}catch(s){await is(s)}}async function Qx(n,e,t){const r=fe(n);try{const s=await function(o,l){const c=fe(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next(m=>(Ve(m!==null,37113),f=m.keys(),c.mutationQueue.removeMutationBatch(h,m))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(r.localStore,e);ap(r,e,t),ip(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ci(r,s)}catch(s){await is(s)}}function ip(n,e){(n.pu.get(e)||[]).forEach(t=>{t.resolve()}),n.pu.delete(e)}function ap(n,e,t){const r=fe(n);let s=r.gu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.gu[r.currentUser.toKey()]=s}}function Jo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Au.get(e))n.Ru.delete(r),t&&n.Eu.bu(r,t);n.Au.delete(e),n.isPrimaryClient&&n.fu.Qr(e).forEach(r=>{n.fu.containsKey(r)||op(n,r)})}function op(n,e){n.Vu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Ml(n.remoteStore,t),n.du=n.du.remove(e),n.mu.delete(t),Kl(n))}function ih(n,e,t){for(const r of t)r instanceof tp?(n.fu.addReference(r.key,e),Jx(n,r)):r instanceof np?(G(Wl,"Document no longer in limbo: "+r.key),n.fu.removeReference(r.key,e),n.fu.containsKey(r.key)||op(n,r.key)):ce(19791,{Du:r})}function Jx(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Vu.has(r)||(G(Wl,"New document in limbo: "+t),n.Vu.add(r),Kl(n))}function Kl(n){for(;n.Vu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Vu.values().next().value;n.Vu.delete(e);const t=new ie(ze.fromString(e)),r=n.yu.next();n.mu.set(r,new Ux(t)),n.du=n.du.insert(t,r),Kf(n.remoteStore,new vn(un(Al(t.path)),r,"TargetPurposeLimboResolution",Ta.ce))}}async function ci(n,e,t){const r=fe(n),s=[],i=[],o=[];r.Ru.isEmpty()||(r.Ru.forEach((l,c)=>{o.push(r.Su(c,e,t).then(h=>{if((h||t)&&r.isPrimaryClient){const f=h?!h.fromCache:t?.targetChanges.get(c.targetId)?.current;r.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(h){s.push(h);const f=Ol.Is(c.targetId,h);i.push(f)}}))}),await Promise.all(o),r.Eu.J_(s),await async function(c,h){const f=fe(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>L.forEach(h,w=>L.forEach(w.Ps,x=>f.persistence.referenceDelegate.addReference(m,w.targetId,x)).next(()=>L.forEach(w.Ts,x=>f.persistence.referenceDelegate.removeReference(m,w.targetId,x)))))}catch(m){if(!as(m))throw m;G(Ll,"Failed to update sequence numbers: "+m)}for(const m of h){const w=m.targetId;if(!m.fromCache){const x=f.Cs.get(w),N=x.snapshotVersion,P=x.withLastLimboFreeSnapshotVersion(N);f.Cs=f.Cs.insert(w,P)}}}(r.localStore,i))}async function Xx(n,e){const t=fe(n);if(!t.currentUser.isEqual(e)){G(Wl,"User change. New user:",e.toKey());const r=await zf(t.localStore,e);t.currentUser=e,function(i,o){i.pu.forEach(l=>{l.forEach(c=>{c.reject(new X(O.CANCELLED,o))})}),i.pu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ci(t,r.Os)}}function Yx(n,e){const t=fe(n),r=t.mu.get(e);if(r&&r.Iu)return ve().add(r.key);{let s=ve();const i=t.Au.get(e);if(!i)return s;for(const o of i){const l=t.Ru.get(o);s=s.unionWith(l.view.su)}return s}}function lp(n){const e=fe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=sp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Yx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Hx.bind(null,e),e.Eu.J_=Dx.bind(null,e.eventManager),e.Eu.bu=Ox.bind(null,e.eventManager),e}function Zx(n){const e=fe(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Gx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Qx.bind(null,e),e}class fa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=$a(e.databaseInfo.databaseId),this.sharedClientState=this.Fu(e),this.persistence=this.Mu(e),await this.persistence.start(),this.localStore=this.xu(e),this.gcScheduler=this.Ou(e,this.localStore),this.indexBackfillerScheduler=this.Nu(e,this.localStore)}Ou(e,t){return null}Nu(e,t){return null}xu(e){return nx(this.persistence,new Zw,e.initialUser,this.serializer)}Mu(e){return new jf(Dl.Ai,this.serializer)}Fu(e){return new ux}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}fa.provider={build:()=>new fa};class eE extends fa{constructor(e){super(),this.cacheSizeBytes=e}Ou(e,t){Ve(this.persistence.referenceDelegate instanceof ha,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Mw(r,e.asyncQueue,t)}Mu(e){const t=this.cacheSizeBytes!==void 0?Ot.withCacheSize(this.cacheSizeBytes):Ot.DEFAULT;return new jf(r=>ha.Ai(r,t),this.serializer)}}class Xo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>sh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Xx.bind(null,this.syncEngine),await $x(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Nx}()}createDatastore(e){const t=$a(e.databaseInfo.databaseId),r=px(e.databaseInfo);return vx(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,l){return new wx(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,t=>sh(this.syncEngine,t,0),function(){return Yc.v()?new Yc:new cx}())}createSyncEngine(e,t){return function(s,i,o,l,c,h,f){const m=new Fx(s,i,o,l,c,h);return f&&(m.wu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(t){const r=fe(t);G(pn,"RemoteStore shutting down."),r.Va.add(5),await ui(r),r.ma.shutdown(),r.fa.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Xo.provider={build:()=>new Xo};/**
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
 */class up{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Lu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Lu(this.observer.error,e):An("Uncaught Error in snapshot listener:",e.toString()))}ku(){this.muted=!0}Lu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const tr="FirestoreClient";class tE{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=Ct.UNAUTHENTICATED,this.clientId=bl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{G(tr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(G(tr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new xn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Bl(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function xo(n,e){n.asyncQueue.verifyOperationInProgress(),G(tr,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await zf(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function ah(n,e){n.asyncQueue.verifyOperationInProgress();const t=await nE(n);G(tr,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>eh(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>eh(e.remoteStore,s)),n._onlineComponents=e}async function nE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){G(tr,"Using user provided OfflineComponentProvider");try{await xo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===O.FAILED_PRECONDITION||s.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Ir("Error using user provided cache. Falling back to memory cache: "+t),await xo(n,new fa)}}else G(tr,"Using default OfflineComponentProvider"),await xo(n,new eE(void 0));return n._offlineComponents}async function cp(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(G(tr,"Using user provided OnlineComponentProvider"),await ah(n,n._uninitializedComponentsProvider._online)):(G(tr,"Using default OnlineComponentProvider"),await ah(n,new Xo))),n._onlineComponents}function rE(n){return cp(n).then(e=>e.syncEngine)}async function hp(n){const e=await cp(n),t=e.eventManager;return t.onListen=jx.bind(null,e.syncEngine),t.onUnlisten=qx.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=zx.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Wx.bind(null,e.syncEngine),t}function sE(n,e,t={}){const r=new xn;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const f=new up({next:w=>{f.ku(),o.enqueueAndForget(()=>Zf(i,m));const x=w.docs.has(l);!x&&w.fromCache?h.reject(new X(O.UNAVAILABLE,"Failed to get document because the client is offline.")):x&&w.fromCache&&c&&c.source==="server"?h.reject(new X(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(w)},error:w=>h.reject(w)}),m=new ep(Al(l.path),f,{includeMetadataChanges:!0,$a:!0});return Yf(i,m)}(await hp(n),n.asyncQueue,e,t,r)),r.promise}function iE(n,e,t={}){const r=new xn;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const f=new up({next:w=>{f.ku(),o.enqueueAndForget(()=>Zf(i,m)),w.fromCache&&c.source==="server"?h.reject(new X(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(w)},error:w=>h.reject(w)}),m=new ep(l,f,{includeMetadataChanges:!0,$a:!0});return Yf(i,m)}(await hp(n),n.asyncQueue,e,t,r)),r.promise}function aE(n,e){const t=new xn;return n.asyncQueue.enqueueAndForget(async()=>Kx(await rE(n),e,t)),t.promise}/**
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
 */function dp(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const oE="ComponentProvider",oh=new Map;function lE(n,e,t,r,s){return new Cb(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,dp(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const fp="firestore.googleapis.com",lh=!0;class uh{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new X(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=fp,this.ssl=lh}else this.host=e.host,this.ssl=e.ssl??lh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Ff;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Ow)throw new X(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}yb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dp(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new X(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new X(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new X(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Da{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new X(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new X(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new lb;switch(r.type){case"firstParty":return new db(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=oh.get(t);r&&(G(oE,"Removing Datastore"),oh.delete(t),r.terminate())}(this),Promise.resolve()}}function uE(n,e,t,r={}){n=Yt(n,Da);const s=Zs(e),i=n._getSettings(),o={...i,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;s&&td(`https://${l}`),i.host!==fp&&i.host!==l&&Ir("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:s,emulatorOptions:r};if(!En(c,o)&&(n._setSettings(c),r.mockUserToken)){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=Ct.MOCK_USER;else{h=yg(r.mockUserToken,n._app?.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new X(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Ct(m)}n._authCredentials=new ub(new Jd(h,f))}}/**
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
 */class ls{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ls(this.firestore,e,this._query)}}class st{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new st(this.firestore,e,this._key)}toJSON(){return{type:st._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(si(t,st._jsonSchema))return new st(e,r||null,new ie(ze.fromString(t.referencePath)))}}st._jsonSchemaVersion="firestore/documentReference/1.0",st._jsonSchema={type:ut("string",st._jsonSchemaVersion),referencePath:ut("string")};class Gn extends ls{constructor(e,t,r){super(e,t,Al(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new st(this.firestore,null,new ie(e))}withConverter(e){return new Gn(this.firestore,e,this._path)}}function kn(n,e,...t){if(n=xt(n),Xd("collection","path",e),n instanceof Da){const r=ze.fromString(e,...t);return xc(r),new Gn(n,null,r)}{if(!(n instanceof st||n instanceof Gn))throw new X(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ze.fromString(e,...t));return xc(r),new Gn(n.firestore,null,r)}}function Wt(n,e,...t){if(n=xt(n),arguments.length===1&&(e=bl.newId()),Xd("doc","path",e),n instanceof Da){const r=ze.fromString(e,...t);return wc(r),new st(n,null,new ie(r))}{if(!(n instanceof st||n instanceof Gn))throw new X(O.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ze.fromString(e,...t));return wc(r),new st(n.firestore,n instanceof Gn?n.converter:null,new ie(r))}}/**
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
 */const ch="AsyncQueue";class hh{constructor(e=Promise.resolve()){this.nc=[],this.rc=!1,this.sc=[],this.oc=null,this._c=!1,this.ac=!1,this.uc=[],this.F_=new qf(this,"async_queue_retry"),this.cc=()=>{const r=wo();r&&G(ch,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this.lc=e;const t=wo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.cc)}get isShuttingDown(){return this.rc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.hc(),this.Pc(e)}enterRestrictedMode(e){if(!this.rc){this.rc=!0,this.ac=e||!1;const t=wo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.cc)}}enqueue(e){if(this.hc(),this.rc)return new Promise(()=>{});const t=new xn;return this.Pc(()=>this.rc&&this.ac?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.nc.push(e),this.Tc()))}async Tc(){if(this.nc.length!==0){try{await this.nc[0](),this.nc.shift(),this.F_.reset()}catch(e){if(!as(e))throw e;G(ch,"Operation failed with retryable error: "+e)}this.nc.length>0&&this.F_.g_(()=>this.Tc())}}Pc(e){const t=this.lc.then(()=>(this._c=!0,e().catch(r=>{throw this.oc=r,this._c=!1,An("INTERNAL UNHANDLED ERROR: ",dh(r)),r}).then(r=>(this._c=!1,r))));return this.lc=t,t}enqueueAfterDelay(e,t,r){this.hc(),this.uc.indexOf(e)>-1&&(t=0);const s=zl.createAndSchedule(this,e,t,r,i=>this.Ic(i));return this.sc.push(s),s}hc(){this.oc&&ce(47125,{Ec:dh(this.oc)})}verifyOperationInProgress(){}async Rc(){let e;do e=this.lc,await e;while(e!==this.lc)}Ac(e){for(const t of this.sc)if(t.timerId===e)return!0;return!1}Vc(e){return this.Rc().then(()=>{this.sc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.sc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Rc()})}dc(e){this.uc.push(e)}Ic(e){const t=this.sc.indexOf(e);this.sc.splice(t,1)}}function dh(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class kr extends Da{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new hh,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new hh(e),this._firestoreClient=void 0,await e}}}function cE(n,e){const t=typeof n=="object"?n:id(),r=typeof n=="string"?n:ra,s=cl(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=gg("firestore");i&&uE(s,...i)}return s}function Hl(n){if(n._terminated)throw new X(O.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||hE(n),n._firestoreClient}function hE(n){const e=n._freezeSettings(),t=lE(n._databaseId,n._app?.options.appId||"",n._persistenceKey,n._app?.options.apiKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new tE(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}}(n._componentsProvider))}/**
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
 */class Bt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Bt(At.fromBase64String(e))}catch(t){throw new X(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Bt(At.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Bt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(si(e,Bt._jsonSchema))return Bt.fromBase64String(e.bytes)}}Bt._jsonSchemaVersion="firestore/bytes/1.0",Bt._jsonSchema={type:ut("string",Bt._jsonSchemaVersion),bytes:ut("string")};/**
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
 */class Gl{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new X(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new It(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class us{constructor(e){this._methodName=e}}/**
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
 */class hn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new X(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new X(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:hn._jsonSchemaVersion}}static fromJSON(e){if(si(e,hn._jsonSchema))return new hn(e.latitude,e.longitude)}}hn._jsonSchemaVersion="firestore/geoPoint/1.0",hn._jsonSchema={type:ut("string",hn._jsonSchemaVersion),latitude:ut("number"),longitude:ut("number")};/**
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
 */class Jt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Jt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(si(e,Jt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Jt(e.vectorValues);throw new X(O.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Jt._jsonSchemaVersion="firestore/vectorValue/1.0",Jt._jsonSchema={type:ut("string",Jt._jsonSchemaVersion),vectorValues:ut("object")};/**
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
 */const dE=/^__.*__$/;class fE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new ar(e,this.data,this.fieldMask,t,this.fieldTransforms):new ai(e,this.data,t,this.fieldTransforms)}}class pp{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new ar(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function mp(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ce(40011,{dataSource:n})}}class Oa{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.mc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Oa({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}gc(e){const t=this.path?.child(e),r=this.i({path:t,arrayElement:!1});return r.yc(e),r}wc(e){const t=this.path?.child(e),r=this.i({path:t,arrayElement:!1});return r.mc(),r}Sc(e){return this.i({path:void 0,arrayElement:!0})}bc(e){return pa(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}mc(){if(this.path)for(let e=0;e<this.path.length;e++)this.yc(this.path.get(e))}yc(e){if(e.length===0)throw this.bc("Document fields must not be empty");if(mp(this.dataSource)&&dE.test(e))throw this.bc('Document fields cannot begin and end with "__"')}}class pE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||$a(e)}V(e,t,r,s=!1){return new Oa({dataSource:e,methodName:t,targetDoc:r,path:It.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function La(n){const e=n._freezeSettings(),t=$a(n._databaseId);return new pE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function gp(n,e,t,r,s,i={}){const o=n.V(i.merge||i.mergeFields?2:0,e,t,s);Yl("Data must be an object, but it was:",o,r);const l=yp(r,o);let c,h;if(i.merge)c=new Ut(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const w=es(e,m,t);if(!o.contains(w))throw new X(O.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);wp(f,w)||f.push(w)}c=new Ut(f),h=o.fieldTransforms.filter(m=>c.covers(m.field))}else c=null,h=o.fieldTransforms;return new fE(new Lt(l),c,h)}class Ma extends us{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.bc(`${this._methodName}() can only appear at the top level of your update data`):e.bc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ma}}function _p(n,e,t){return new Oa({dataSource:3,targetDoc:e.settings.targetDoc,methodName:n._methodName,arrayElement:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Ql extends us{_toFieldTransform(e){return new Cl(e.path,new Ks)}isEqual(e){return e instanceof Ql}}class Jl extends us{constructor(e,t){super(e),this.Cc=t}_toFieldTransform(e){const t=_p(this,e,!0),r=this.Cc.map(i=>Cr(i,t)),s=new Xr(r);return new Cl(e.path,s)}isEqual(e){return e instanceof Jl&&En(this.Cc,e.Cc)}}class Xl extends us{constructor(e,t){super(e),this.Cc=t}_toFieldTransform(e){const t=_p(this,e,!0),r=this.Cc.map(i=>Cr(i,t)),s=new Yr(r);return new Cl(e.path,s)}isEqual(e){return e instanceof Xl&&En(this.Cc,e.Cc)}}function mE(n,e,t,r){const s=n.V(1,e,t);Yl("Data must be an object, but it was:",s,r);const i=[],o=Lt.empty();ir(r,(c,h)=>{const f=bp(e,c,t);h=xt(h);const m=s.wc(f);if(h instanceof Ma)i.push(f);else{const w=Cr(h,m);w!=null&&(i.push(f),o.set(f,w))}});const l=new Ut(i);return new pp(o,l,s.fieldTransforms)}function gE(n,e,t,r,s,i){const o=n.V(1,e,t),l=[es(e,r,t)],c=[s];if(i.length%2!=0)throw new X(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<i.length;w+=2)l.push(es(e,i[w])),c.push(i[w+1]);const h=[],f=Lt.empty();for(let w=l.length-1;w>=0;--w)if(!wp(h,l[w])){const x=l[w];let N=c[w];N=xt(N);const P=o.wc(x);if(N instanceof Ma)h.push(x);else{const $=Cr(N,P);$!=null&&(h.push(x),f.set(x,$))}}const m=new Ut(h);return new pp(f,m,o.fieldTransforms)}function _E(n,e,t,r=!1){return Cr(t,n.V(r?4:3,e))}function Cr(n,e){if(vp(n=xt(n)))return Yl("Unsupported field value:",e,n),yp(n,e);if(n instanceof us)return function(r,s){if(!mp(s.dataSource))throw s.bc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.bc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.bc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=Cr(l,s.Sc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=xt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ew(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=We.fromDate(r);return{timestampValue:ca(s.serializer,i)}}if(r instanceof We){const i=new We(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ca(s.serializer,i)}}if(r instanceof hn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Bt)return{bytesValue:$f(s.serializer,r._byteString)};if(r instanceof st){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.bc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Vl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Jt)return function(o,l){const c=o instanceof Jt?o.toArray():o;return{mapValue:{fields:{[of]:{stringValue:lf},[sa]:{arrayValue:{values:c.map(f=>{if(typeof f!="number")throw l.bc("VectorValues must only contain numeric values.");return Ca(l.serializer,f)})}}}}}}(r,s);if(Uf(r))return r._toProto(s.serializer);throw s.bc(`Unsupported field value: ${Ea(r)}`)}(n,e)}function yp(n,e){const t={};return ef(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ir(n,(r,s)=>{const i=Cr(s,e.gc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function vp(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof We||n instanceof hn||n instanceof Bt||n instanceof st||n instanceof us||n instanceof Jt||Uf(n))}function Yl(n,e,t){if(!vp(t)||!Yd(t)){const r=Ea(t);throw r==="an object"?e.bc(n+" a custom object"):e.bc(n+" "+r)}}function es(n,e,t){if((e=xt(e))instanceof Gl)return e._internalPath;if(typeof e=="string")return bp(n,e);throw pa("Field path arguments must be of type string or ",n,!1,void 0,t)}const yE=new RegExp("[~\\*/\\[\\]]");function bp(n,e,t){if(e.search(yE)>=0)throw pa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Gl(...e.split("."))._internalPath}catch{throw pa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function pa(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new X(O.INVALID_ARGUMENT,l+n+c)}function wp(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class vE{convertValue(e,t="none"){switch(Yn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Xn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ce(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return ir(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){const t=e.fields?.[sa].arrayValue?.values?.map(r=>rt(r.doubleValue));return new Jt(t)}convertGeoPoint(e){return new hn(rt(e.latitude),rt(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Aa(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(zs(e));default:return null}}convertTimestamp(e){const t=Jn(e);return new We(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ze.fromString(e);Ve(Mf(r),9688,{name:e});const s=new Bs(r.get(1),r.get(3)),i=new ie(r.popFirst(5));return s.isEqual(t)||An(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */class xp extends vE{constructor(e){super(),this.firestore=e}convertBytes(e){return new Bt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new st(this.firestore,null,t)}}function Wr(){return new Ql("serverTimestamp")}function bE(...n){return new Jl("arrayUnion",n)}function wE(...n){return new Xl("arrayRemove",n)}const fh="@firebase/firestore",ph="4.15.0";/**
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
 */class Ep{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new st(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new xE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const t=this._document.data.field(es("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class xE extends Ep{data(){return super.data()}}/**
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
 */function EE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new X(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Zl{}class TE extends Zl{}function Yo(n,e,...t){let r=[];e instanceof Zl&&r.push(e),r=r.concat(t),function(i){const o=i.filter(c=>c instanceof eu).length,l=i.filter(c=>c instanceof Ua).length;if(o>1||o>0&&l>0)throw new X(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Ua extends TE{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Ua(e,t,r)}_apply(e){const t=this._parse(e);return Ip(e._query,t),new ls(e.firestore,e.converter,Fo(e._query,t))}_parse(e){const t=La(e.firestore);return function(i,o,l,c,h,f,m){let w;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new X(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){gh(m,f);const N=[];for(const P of m)N.push(mh(c,i,P));w={arrayValue:{values:N}}}else w=mh(c,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||gh(m,f),w=_E(l,o,m,f==="in"||f==="not-in");return ot.create(h,f,w)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Tp(n,e,t){const r=e,s=es("where",n);return Ua._create(s,r,t)}class eu extends Zl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new eu(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Zt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)Ip(o,c),o=Fo(o,c)}(e._query,t),new ls(e.firestore,e.converter,Fo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function mh(n,e,t){if(typeof(t=xt(t))=="string"){if(t==="")throw new X(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!_f(e)&&t.indexOf("/")!==-1)throw new X(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ze.fromString(t));if(!ie.isDocumentKey(r))throw new X(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Rc(n,new ie(r))}if(t instanceof st)return Rc(n,t._key);throw new X(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ea(t)}.`)}function gh(n,e){if(!Array.isArray(n)||n.length===0)throw new X(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ip(n,e){const t=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new X(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new X(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function Ap(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class Cs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class br extends Ep{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ji(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(es("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new X(O.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=br._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}br._jsonSchemaVersion="firestore/documentSnapshot/1.0",br._jsonSchema={type:ut("string",br._jsonSchemaVersion),bundleSource:ut("string","DocumentSnapshot"),bundleName:ut("string"),bundle:ut("string")};class ji extends br{data(e={}){return super.data(e)}}class Kr{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Cs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ji(this._firestore,this._userDataWriter,r.key,r,new Cs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new X(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new ji(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Cs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new ji(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Cs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:IE(l.type),doc:c,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new X(O.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Kr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=bl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function IE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ce(61501,{type:n})}}/**
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
 */Kr._jsonSchemaVersion="firestore/querySnapshot/1.0",Kr._jsonSchema={type:ut("string",Kr._jsonSchemaVersion),bundleSource:ut("string","QuerySnapshot"),bundleName:ut("string"),bundle:ut("string")};/**
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
 */function tu(n){n=Yt(n,st);const e=Yt(n.firestore,kr),t=Hl(e);return sE(t,n._key).then(r=>kE(e,n,r))}function Fa(n){n=Yt(n,ls);const e=Yt(n.firestore,kr),t=Hl(e),r=new xp(e);return EE(n._query),iE(t,n._query).then(s=>new Kr(e,r,n,s))}function AE(n,e,t){n=Yt(n,st);const r=Yt(n.firestore,kr),s=Ap(n.converter,e),i=La(r);return ja(r,[gp(i,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,qt.none())])}function ts(n,e,t,...r){n=Yt(n,st);const s=Yt(n.firestore,kr),i=La(s);let o;return o=typeof(e=xt(e))=="string"||e instanceof Gl?gE(i,"updateDoc",n._key,e,t,r):mE(i,"updateDoc",n._key,e),ja(s,[o.toMutation(n._key,qt.exists(!0))])}function SE(n){return ja(Yt(n.firestore,kr),[new Rl(n._key,qt.none())])}function ma(n,e){const t=Yt(n.firestore,kr),r=Wt(n),s=Ap(n.converter,e),i=La(n.firestore);return ja(t,[gp(i,"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,qt.exists(!1))]).then(()=>r)}function ja(n,e){const t=Hl(n);return aE(t,e)}function kE(n,e,t){const r=t.docs.get(e._key),s=new xp(n);return new br(n,s,e._key,r,new Cs(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){ob(ns),Hr(new wr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new kr(new cb(r.getProvider("auth-internal")),new fb(o,r.getProvider("app-check-internal")),Rb(o,s),o);return i={useFetchStreams:t,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Kn(fh,ph,e),Kn(fh,ph,"esm2020")})();var CE="firebase",RE="12.14.0";/**
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
 */Kn(CE,RE,"app");const PE={apiKey:"AIzaSyDkR00qL4A-yMP5Ehta3RYowC2d-vR8I78",authDomain:"aurumvault-def8b.firebaseapp.com",projectId:"aurumvault-def8b",storageBucket:"aurumvault-def8b.firebasestorage.app",messagingSenderId:"646887449279",appId:"1:646887449279:web:12705de1dc6aa9df5a9c0a"},Sp=sd(PE),hi=ib(Sp),lt=cE(Sp),[dn,_h]=Q(!1),[mt,Zo]=Q(null),[di,yh]=Q(!1),[FA,$E]=Q(!0);Hy(hi,async n=>{if(n){const e=await tu(Wt(lt,"users",n.uid)),t=e.exists()?e.data():{};Zo({uid:n.uid,email:n.email,name:t.name||n.email,role:t.role||"user"}),_h(!0),yh(t.role==="admin")}else Zo(null),_h(!1),yh(!1);$E(!1)});async function VE(n,e,t){const s=(await By(hi,e,t)).user;return await AE(Wt(lt,"users",s.uid),{name:n,email:e,role:"user",address:"",createdAt:Wr()}),s}async function NE(n,e){return(await qy(hi,n,e)).user}async function Mr(){await Gy(hi)}async function DE(n){await zy(hi,n)}async function OE(n){const e=mt();e&&(await ts(Wt(lt,"users",e.uid),n),Zo({...e,...n}))}const[jA,LE]=Q(!1),ME="aurum2025",[Kt,UE]=Q([]),[vh,bh]=Q(!1);async function Bn(){bh(!0);try{const e=(await Fa(kn(lt,"products"))).docs.map(t=>({id:t.id,...t.data()}));UE(e)}catch(n){console.error("Greška pri dohvaćanju proizvoda:",n)}bh(!1)}const FE=["All","Rings","Necklaces","Watches","Accessories","Art Objects"],[Gt,za]=Q([]);function kp(n,e=1){za(t=>t.find(s=>s.id===n.id)?t.map(s=>s.id===n.id?{...s,quantity:s.quantity+e}:s):[...t,{...n,quantity:e}])}function Cp(n){za(e=>e.filter(t=>t.id!==n))}function wh(n,e){if(e<=0){Cp(n);return}za(t=>t.map(r=>r.id===n?{...r,quantity:e}:r))}function jE(){za([])}function mr(){return Gt().reduce((n,e)=>n+e.price*e.quantity,0)}function xh(){return Gt().reduce((n,e)=>n+e.quantity,0)}const[Ur,zE]=Q([]);async function el(){try{const n=mt();let e;if(di())e=Yo(kn(lt,"orders"));else if(n)e=Yo(kn(lt,"orders"),Tp("userId","==",n.uid));else return;const r=(await Fa(e)).docs.map(s=>({id:s.id,...s.data()}));zE(r)}catch(n){console.error("Greška pri dohvaćanju narudžbi:",n)}}async function BE(n){const e=mt(),t={...n,userId:e?.uid||null,status:"U obradi",createdAt:Wr()};return(await ma(kn(lt,"orders"),t)).id}async function qE(n){if(!dn())throw new Error("Kuponi su dostupni samo prijavljenim korisnicima.");const e=await tu(Wt(lt,"coupons",n));if(!e.exists())throw new Error("Nevažeći kupon kod.");const t=e.data();if(!t.active)throw new Error("Ovaj kupon više nije aktivan.");return t}const[ga,Rp]=Q([]);async function Pp(){const n=mt();if(n)try{const e=await tu(Wt(lt,"users",n.uid));Rp(e.data()?.wishlist||[])}catch(e){console.error(e)}}async function $p(n){const e=mt();if(!e)return!1;const t=ga().includes(n);try{return await ts(Wt(lt,"users",e.uid),{wishlist:t?wE(n):bE(n)}),Rp(r=>t?r.filter(s=>s!==n):[...r,n]),!t}catch(r){return console.error(r),!1}}async function Eh(n){try{return(await Fa(Yo(kn(lt,"reviews"),Tp("productId","==",n)))).docs.map(t=>({id:t.id,...t.data()}))}catch(e){return console.error(e),[]}}async function WE(n,e,t){const r=mt();if(!r)throw new Error("Morate biti prijavljeni za recenziju.");await ma(kn(lt,"reviews"),{productId:n,userId:r.uid,userName:r.name,rating:Number(e),comment:t,createdAt:Wr()})}var KE=C('<div class="min-h-screen bg-aurum-black flex flex-col"><div class="flex items-center justify-between px-6 py-4 border-b border-aurum-border"><div class="flex items-center gap-2"><div class="w-8 h-8 bg-aurum-gold rounded-full flex items-center justify-center"><span class="text-aurum-black font-display font-black text-sm">A</span></div><span class="font-display font-bold text-aurum-gold tracking-widest text-lg gold-glow">AurumVault</span></div><div class="flex items-center gap-6 text-xs text-aurum-muted"><span class="flex items-center gap-2">Pristupačnost<span class="w-8 h-4 bg-aurum-gold rounded-full inline-block"></span></span><span class="hidden sm:block">Visoki kontrast</span><span class="hidden sm:block">Veći tekst</span></div></div><div class="flex-1 flex items-center justify-center px-4 py-12"><div class="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-8 items-center page-enter"><div class="hidden lg:block"><div class="relative rounded-xl overflow-hidden aspect-square"><img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500"alt=Trezor class="w-full h-full object-cover"><div class="absolute inset-0 bg-gradient-to-t from-aurum-black via-transparent to-transparent pointer-events-none"></div></div></div><div class="gold-border-anim bg-aurum-card rounded-2xl p-8"><div class="text-center mb-8"><span class="badge-exclusive mb-3 inline-block">Ekskluzivno</span><h1 class="font-display text-2xl font-bold text-white leading-tight mt-2">Ekskluzivni pristup —<br>unesite lozinku</h1><p class="text-aurum-muted text-sm mt-3 leading-relaxed">Ova stranica dostupna je samo odobrenim članovima. Unesite lozinku za pristup privatnom katalogu AurumVaulta.</p></div><form><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-2">Lozinka za pristup</label><input type=password placeholder="Unesite lozinku"><button type=submit class="btn-gold w-full py-3 rounded-lg text-sm mt-2"></button></form><p class="text-center text-aurum-muted text-xs mt-4">🔒 Ova lozinka štiti sve stranice AurumVaulta.</p><p class="text-center mt-3 text-xs text-aurum-muted">Demo lozinka: <span class="text-aurum-gold font-mono">aurum2025</span></p></div><div class="flex flex-col gap-4"><div class="card-dark p-4"><h3 class="text-aurum-gold text-sm font-bold font-display tracking-wider mb-2">Uvjeti pristupa</h3><p class="text-aurum-muted text-xs leading-relaxed">Samo za članove. Unosom lozinke potvrđujete da ste ovlašteni za pregledavanje sadržaja AurumVaulta i prihvaćate naše uvjete povjerljivosti.</p></div><div class="card-dark p-4"><h3 class="text-aurum-gold text-sm font-bold font-display tracking-wider mb-2">Zadnja izmjena</h3><p class="text-aurum-muted text-xs leading-relaxed">3. ožujka 2025. — Rotaciju lozinke proveo sigurnosni tim.</p></div><div class="card-dark p-4"><h3 class="text-aurum-gold text-sm font-bold font-display tracking-wider mb-2">Radno vrijeme podrške</h3><p class="text-aurum-muted text-xs leading-relaxed">Pon–Pet 09:00–18:00 po GMT-u. Za hitne slučajeve pišite na <a href=mailto:support@aurumvault.com class="text-aurum-gold hover:underline">support@aurumvault.com</a>.</p></div></div></div></div><div class="border-t border-aurum-border px-6 py-4 flex justify-between items-center text-xs text-aurum-muted"><span>© 2025 AurumVault. Sva prava pridržana.</span><span>Kontakt: <a href=mailto:contact@aurumvault.com class="text-aurum-gold hover:underline">contact@aurumvault.com'),HE=C('<div class="flex items-center justify-between mb-4"><p class="text-red-400 text-xs flex items-center gap-1"><span>⚠</span> Pogrešna lozinka. Pokušajte ponovo.</p><a href=# class="text-aurum-gold text-xs hover:underline">Trebate pomoć?');function GE(){const n=mn(),[e,t]=Q(""),[r,s]=Q(!1),[i,o]=Q(!1);async function l(c){c.preventDefault(),o(!0),s(!1),await new Promise(h=>setTimeout(h,800)),e()===ME?(LE(!0),n("/catalog")):s(!0),o(!1)}return(()=>{var c=KE(),h=c.firstChild,f=h.nextSibling,m=f.firstChild,w=m.firstChild,x=w.nextSibling,N=x.firstChild,P=N.nextSibling,$=P.firstChild,D=$.nextSibling,S=D.nextSibling;return P.addEventListener("submit",l),D.$$input=M=>{t(M.target.value),s(!1)},_(P,(()=>{var M=Xe(()=>!!r());return()=>M()&&HE()})(),S),_(S,()=>i()?"Provjera...":"Otključaj trezor"),z(M=>{var U=`input-dark w-full px-4 py-3 text-sm mb-3 ${r()?"border-red-500":""}`,K=i();return U!==M.e&&Ie(D,M.e=U),K!==M.t&&(S.disabled=M.t=K),M},{e:void 0,t:void 0}),z(()=>D.value=e()),c})()}en(["input"]);var QE=C('<div class="w-8 h-8 bg-aurum-gold rounded-full flex items-center justify-center"><span class="text-aurum-black font-display font-black text-sm">A'),JE=C('<span class="font-display font-bold text-lg text-aurum-gold tracking-widest gold-glow">AurumVault'),XE=C('<form class="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2 bg-aurum-dark border border-aurum-gold rounded-lg px-3 py-1.5"style=min-width:220px><input type=text placeholder="Pretraži proizvode..."autofocus class="bg-transparent text-aurum-text text-sm outline-none flex-1"><button type=submit class="text-aurum-gold text-xs">→</button><button type=button class="text-aurum-muted hover:text-aurum-gold">×'),YE=C('<button class="text-aurum-muted hover:text-aurum-gold transition-colors p-1"><svg class="w-5 h-5"fill=none viewBox="0 0 24 24"stroke=currentColor><path stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">'),ZE=C('<div class="w-7 h-7 bg-aurum-gold rounded-full flex items-center justify-center"><span class="text-aurum-black font-bold text-xs">'),eT=C('<span class="hidden sm:block text-sm">'),tT=C('<div class="flex items-center gap-2"><button class="nav-link text-xs opacity-50 hover:opacity-100">Odjava'),nT=C('<svg class="w-5 h-5"fill=none viewBox="0 0 24 24"stroke=currentColor><path stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">'),rT=C('<svg xmlns=http://www.w3.org/2000/svg class="w-5 h-5"fill=none viewBox="0 0 24 24"stroke=currentColor><path stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.3 2.3A1 1 0 006 17h12M10 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z">'),sT=C('<span class="absolute -top-1 -right-1 bg-aurum-gold text-aurum-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">'),iT=C('<div class="md:hidden bg-aurum-dark border-t border-aurum-border px-4 py-4 flex flex-col gap-4"><form class="flex gap-2"><input type=text placeholder=Pretraži... class="input-dark flex-1 px-3 py-2 text-sm"><button type=submit class="btn-gold px-3 py-2 text-sm rounded">Traži'),aT=C('<nav class="sticky top-0 z-50 bg-aurum-black border-b border-aurum-border"><div class="max-w-7xl mx-auto px-4 flex items-center justify-between h-16"><div class="hidden md:flex items-center gap-8"></div><div class="flex items-center gap-3"><div class=relative></div><button class="md:hidden text-aurum-text hover:text-aurum-gold"><svg class="w-6 h-6"fill=none viewBox="0 0 24 24"stroke=currentColor><path stroke-linecap=round stroke-linejoin=round stroke-width=2>');function Ba(){const n=mn(),[e,t]=Q(!1),[r,s]=Q(!1),[i,o]=Q("");function l(){Mr(),n("/login")}function c(h){h.preventDefault(),i().trim()&&(n(`/catalog?search=${encodeURIComponent(i().trim())}`),s(!1),o(""))}return(()=>{var h=aT(),f=h.firstChild,m=f.firstChild,w=m.nextSibling,x=w.firstChild,N=x.nextSibling,P=N.firstChild,$=P.firstChild;return _(f,k(we,{href:"/catalog",class:"flex items-center gap-2 group flex-shrink-0",get children(){return[QE(),JE()]}}),m),_(m,k(we,{href:"/catalog",class:"nav-link",children:"Kolekcije"}),null),_(m,k(we,{href:"/catalog?filter=new",class:"nav-link",children:"Novi dolasci"}),null),_(m,k(we,{href:"/catalog?filter=exclusive",class:"nav-link text-aurum-gold",children:"Ekskluzivno"}),null),_(x,k(ee,{get when(){return r()},get children(){var D=XE(),S=D.firstChild,M=S.nextSibling,U=M.nextSibling;return D.addEventListener("submit",c),S.$$input=K=>o(K.target.value),U.$$click=()=>s(!1),z(()=>S.value=i()),D}}),null),_(x,k(ee,{get when(){return!r()},get children(){var D=YE();return D.$$click=()=>s(!0),D}}),null),_(w,k(ee,{get when(){return di()},get children(){return k(we,{href:"/admin",class:"nav-link text-aurum-gold text-xs border border-aurum-gold px-3 py-1 rounded hover:bg-aurum-gold hover:text-aurum-black transition-all",children:"Admin"})}}),N),_(w,k(ee,{get when(){return dn()},get fallback(){return k(we,{href:"/login",class:"nav-link text-sm",children:"Račun"})},get children(){var D=tT(),S=D.firstChild;return _(D,k(we,{href:"/profile",class:"nav-link flex items-center gap-1",get children(){return[(()=>{var M=ZE(),U=M.firstChild;return _(U,()=>mt()?.name?.charAt(0)||"K"),M})(),(()=>{var M=eT();return _(M,()=>mt()?.name?.split(" ")[0]),M})()]}}),S),S.$$click=l,D}}),N),_(w,k(ee,{get when(){return dn()},get children(){return k(we,{href:"/profile?tab=wishlist",class:"p-2 text-aurum-muted hover:text-aurum-gold transition-colors",title:"Lista želja",get children(){return nT()}})}}),N),_(w,k(we,{href:"/checkout",class:"relative p-2 text-aurum-text hover:text-aurum-gold transition-colors",get children(){return[rT(),k(ee,{get when(){return xh()>0},get children(){var D=sT();return _(D,xh),D}})]}}),N),N.$$click=()=>t(!e()),_(h,k(ee,{get when(){return e()},get children(){var D=iT(),S=D.firstChild,M=S.firstChild;return _(D,k(we,{href:"/catalog",class:"nav-link",onclick:()=>t(!1),children:"Kolekcije"}),S),_(D,k(we,{href:"/catalog?filter=new",class:"nav-link",onclick:()=>t(!1),children:"Novi dolasci"}),S),_(D,k(we,{href:"/catalog?filter=exclusive",class:"nav-link text-aurum-gold",onclick:()=>t(!1),children:"Ekskluzivno"}),S),S.addEventListener("submit",U=>{c(U),t(!1)}),M.$$input=U=>o(U.target.value),z(()=>M.value=i()),D}}),null),z(()=>He($,"d",e()?"M6 18L18 6M6 6l12 12":"M4 6h16M4 12h16M4 18h16")),h})()}en(["input","click"]);var oT=C('<footer class="bg-aurum-dark border-t border-aurum-border mt-20"><div class="max-w-7xl mx-auto px-4 py-12"><div class="grid grid-cols-1 md:grid-cols-4 gap-10"><div><div class="flex items-center gap-2 mb-4"><div class="w-8 h-8 bg-aurum-gold rounded-full flex items-center justify-center"><span class="text-aurum-black font-display font-black text-sm">A</span></div><span class="font-display font-bold text-aurum-gold tracking-widest">AurumVault</span></div><p class="text-aurum-muted text-sm leading-relaxed">Pažljivo odabrano blago s sigurnom dostavom i vrhunskom uslugom.</p></div><div><h4 class="font-display text-sm font-bold text-aurum-gold tracking-widest uppercase mb-4">Istraži</h4><ul class="space-y-2 text-sm text-aurum-muted"><li></li><li></li><li></li><li><a href=# class="hover:text-aurum-gold transition-colors">Novosti</a></li></ul></div><div><h4 class="font-display text-sm font-bold text-aurum-gold tracking-widest uppercase mb-4">Podrška</h4><ul class="space-y-2 text-sm text-aurum-muted"><li><a href=# class="hover:text-aurum-gold transition-colors">Kontaktirajte nas</a></li><li><a href=# class="hover:text-aurum-gold transition-colors">Dostava i povrat</a></li><li><a href=# class="hover:text-aurum-gold transition-colors">Jamstvo</a></li><li><a href=# class="hover:text-aurum-gold transition-colors">Česta pitanja</a></li></ul></div><div><h4 class="font-display text-sm font-bold text-aurum-gold tracking-widest uppercase mb-4">Povežite se</h4><div class="flex gap-3 mb-4"></div><p class="text-aurum-muted text-xs">Kontakt: concierge@aurumvault.com</p><div class=mt-4><p class="text-aurum-muted text-xs mb-2">Pretplatite se za ekskluzivne preglede</p><div class="flex gap-2"><input type=email placeholder="Email adresa"class="input-dark text-xs px-3 py-2 flex-1 min-w-0"><button class="btn-gold px-3 py-2 text-xs rounded">→</button></div></div></div></div><div class="border-t border-aurum-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4"><p class="text-aurum-muted text-xs">© 2025 AurumVault. Sva prava pridržana.</p><div class="flex gap-6 text-xs text-aurum-muted"><a href=# class="hover:text-aurum-gold transition-colors">Pravila privatnosti</a><a href=# class="hover:text-aurum-gold transition-colors">Uvjeti korištenja</a><a href=# class="hover:text-aurum-gold transition-colors">Sigurnost'),lT=C('<a href=# class="w-8 h-8 border border-aurum-border rounded flex items-center justify-center text-xs text-aurum-muted hover:border-aurum-gold hover:text-aurum-gold transition-all">');function nu(){return(()=>{var n=oT(),e=n.firstChild,t=e.firstChild,r=t.firstChild,s=r.nextSibling,i=s.firstChild,o=i.nextSibling,l=o.firstChild,c=l.nextSibling,h=c.nextSibling,f=s.nextSibling,m=f.nextSibling,w=m.firstChild,x=w.nextSibling;return _(l,k(we,{href:"/catalog",class:"hover:text-aurum-gold transition-colors",children:"Kolekcije"})),_(c,k(we,{href:"/catalog?filter=exclusive",class:"hover:text-aurum-gold transition-colors",children:"Ekskluzivno"})),_(h,k(we,{href:"/login",class:"hover:text-aurum-gold transition-colors",children:"Prijava / Registracija"})),_(x,()=>["IG","TW","YT"].map(N=>(()=>{var P=lT();return _(P,N),P})())),n})()}var uT=C('<div class="product-card group"><div class="relative overflow-hidden aspect-square bg-aurum-dark"><img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"><div class="absolute inset-0 bg-gradient-to-t from-aurum-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div><div class="absolute top-2 left-2 flex flex-col gap-1"></div><div class="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2"><button class="flex-1 bg-aurum-dark/90 text-aurum-gold text-xs py-2 rounded border border-aurum-gold hover:bg-aurum-gold hover:text-aurum-black transition-all">Brzi pregled</button></div></div><div class=p-4><h3 class="font-display text-sm font-semibold text-aurum-text group-hover:text-aurum-gold transition-colors leading-snug mb-1"></h3><p class="text-aurum-muted text-xs mb-3">...</p><div class="flex artikala-center justify-between"><div><p class="text-aurum-muted text-xs">Šifra: </p></div><button>'),cT=C("<span>"),hT=C('<div class="absolute top-2 right-2"><span class="bg-red-600/80 text-white text-xs px-2 py-0.5 rounded-full">Ostalo: '),dT=C('<div class="flex artikala-center gap-2"><span class="text-aurum-gold font-bold">$</span><span class="text-aurum-muted text-xs line-through">$'),fT=C('<span class="text-aurum-gold font-bold">$'),pT=C('<div class="flex artikala-center justify-center py-20"><div class="text-aurum-gold text-sm animate-pulse">Učitavanje proizvoda...'),mT=C('<div class="flex artikala-center justify-between mb-6"><div><h2 class="section-title text-lg"></h2><p class="text-aurum-muted text-sm mt-1">Prikazuje se <!> artikala</p></div><div class="flex artikala-center gap-3"><select class="input-dark px-3 py-1.5 text-xs"><option>Istaknuto</option><option>Najnovije</option><option>Cijena: Niža</option><option>Cijena: Viša</option></select><div class="flex border border-aurum-border rounded overflow-hidden"><button>Mreža</button><button>Listaa'),gT=C("<div>"),_T=C('<div class="min-h-screen bg-aurum-black"><div class="relative bg-aurum-dark border-b border-aurum-border overflow-hidden"><div class="absolute inset-0 opacity-10 pointer-events-none"style="background:radial-gradient(ellipse at 70% 50%, rgba(240,192,64,0.4) 0%, transparent 70%)"></div><div class="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6 artikala-center"><div class=md:col-span-2><span class="badge-exclusive mb-2 inline-block">Odabrana kolekcija</span><h1 class="font-display text-3xl font-bold text-white leading-tight mt-2">Aurum Noir —<br><span class="text-aurum-gold gold-glow">Serija Ponoćnih Skulptura</span></h1><p class="text-aurum-muted mt-3 text-sm leading-relaxed max-w-lg">Ekskluzivna limitirana serija ručno izrađenih skulptura. Članovi imaju rani pristup i besplatne certifikate autentičnosti.</p><button class="btn-gold mt-5 px-6 py-3 rounded-lg text-xs">Istraži kolekciju</button></div><div class="hidden md:flex flex-col gap-3"><div class="card-dark p-4"><span class="text-aurum-gold text-xs font-bold">Brza ponuda</span><p class="text-aurum-text text-sm mt-1">24-satni pregled za članove</p></div><div class="card-dark p-4"><span class="text-aurum-gold text-xs font-bold">Certifikat autentičnosti</span><p class="text-aurum-muted text-xs mt-1">Besplatno uz odabrane kupovine</p></div></div></div></div><div class="max-w-7xl mx-auto px-4 py-8 flex gap-8"><aside class="hidden lg:block w-56 flex-shrink-0"><div class="sticky top-24 space-y-6"><div><h3 class="text-xs font-bold text-aurum-gold uppercase tracking-widest mb-3">Filtri</h3></div><div><h4 class="text-xs text-aurum-muted uppercase tracking-widest mb-2">Kategorija</h4><select class="input-dark w-full px-3 py-2 text-sm"></select></div><div><h4 class="text-xs text-aurum-muted uppercase tracking-widest mb-2">Raspon cijena</h4><div class="flex artikala-center gap-2"><input type=number class="input-dark w-full px-2 py-1.5 text-xs"placeholder=Min><span class=text-aurum-muted>–</span><input type=number class="input-dark w-full px-2 py-1.5 text-xs"placeholder=Maks></div></div><div><label class="flex artikala-center gap-2 cursor-pointer"><input type=checkbox class="checkbox checkbox-warning checkbox-sm"><span class="text-xs text-aurum-text">Samo za članove</span></label></div><button class="text-xs text-aurum-muted hover:text-aurum-gold transition-colors underline">Poništi filtere</button><div class="border-t border-aurum-border pt-4"><h4 class="text-xs text-aurum-muted uppercase tracking-widest mb-3">Odabrani proizvodi</h4></div></div></aside><main class=flex-1>'),yT=C("<option>"),vT=C('<img class="w-10 h-10 rounded object-cover">'),bT=C('<div><p class="text-xs text-aurum-text leading-tight"></p><p class="text-xs text-aurum-muted">Ekskluzivno'),wT=C('<div class="text-center py-20 text-aurum-muted"><p class="text-lg mb-2">Nema pronađenih proizvoda</p><p class=text-sm>Pokušajte prilagoditi filtere');const xT={Sve:"Sve kategorije",Rings:"Prstenje",Necklaces:"Ogrlice",Watches:"Satovi",Accessories:"Dodaci","Art Objects":"Umjetnički predmeti"},ET={Exclusive:"Ekskluzivno","Members Only":"Samo za članove",Limited:"Ograničeno",Sale:"Rasprodaja"};function TT({product:n}){const e=mn(),[t,r]=Q(!1);function s(o){o.stopPropagation(),kp(n),r(!0),setTimeout(()=>r(!1),1500)}const i=n.badge?ET[n.badge]||n.badge:null;return(()=>{var o=uT(),l=o.firstChild,c=l.firstChild,h=c.nextSibling,f=h.nextSibling,m=f.nextSibling,w=m.firstChild,x=l.nextSibling,N=x.firstChild,P=N.nextSibling,$=P.firstChild,D=P.nextSibling,S=D.firstChild,M=S.firstChild;M.firstChild;var U=S.nextSibling;return o.$$click=()=>e(`/product/${n.id}`),_(f,i&&(()=>{var K=cT();return _(K,i),z(()=>Ie(K,`text-xs font-bold px-2 py-0.5 rounded-full ${n.badge==="Sale"?"bg-green-600 text-white":n.badge?.startsWith("Limited")?"bg-red-600 text-white":"badge-exclusive"}`)),K})()),_(l,(()=>{var K=Xe(()=>n.stock<=3);return()=>K()&&(()=>{var V=hT(),b=V.firstChild;return b.firstChild,_(b,()=>n.stock,null),V})()})(),m),w.$$click=K=>{K.stopPropagation(),e(`/product/${n.id}`)},_(N,()=>n.name),_(P,()=>n.description?.substring(0,60),$),_(S,(()=>{var K=Xe(()=>!!n.salePrice);return()=>K()?(()=>{var V=dT(),b=V.firstChild;b.firstChild;var y=b.nextSibling;return y.firstChild,_(b,()=>n.salePrice.toLocaleString(),null),_(y,()=>n.price?.toLocaleString(),null),V})():(()=>{var V=fT();return V.firstChild,_(V,()=>n.price?.toLocaleString(),null),V})()})(),M),_(M,()=>n.sku,null),U.$$click=s,_(U,()=>t()?"✓ Dodano":"U košaricu"),z(K=>{var V=n.images?.[0],b=n.name,y=`text-xs px-3 py-2 rounded border transition-all ${t()?"bg-green-600 border-green-600 text-white":"border-aurum-gold text-aurum-gold hover:bg-aurum-gold hover:text-aurum-black"}`;return V!==K.e&&He(c,"src",K.e=V),b!==K.t&&He(c,"alt",K.t=b),y!==K.a&&Ie(U,K.a=y),K},{e:void 0,t:void 0,a:void 0}),o})()}function IT(){const[n]=Bm(),[e,t]=Q("Sve"),[r,s]=Q(0),[i,o]=Q(15e3),[l,c]=Q(!1),[h,f]=Q("Istaknuto"),[m,w]=Q("grid"),[x,N]=Q("");Gs(()=>Bn()),Ph(()=>{t("Sve"),c(!1),N(""),f("Istaknuto"),n.search&&N(n.search),n.filter==="exclusive"&&c(!0),n.filter==="new"&&f("Najnovije")});const P=De(()=>n.search?`Rezultati za "${n.search}"`:n.filter==="exclusive"?"Ekskluzivno":n.filter==="new"?"Novi dolasci":"Sve kolekcije"),$=De(()=>{let D=Kt();if(x()){const S=x().toLowerCase();D=D.filter(M=>M.name?.toLowerCase().includes(S)||M.description?.toLowerCase().includes(S)||M.category?.toLowerCase().includes(S)||M.sku?.toLowerCase().includes(S))}return e()!=="Sve"&&(D=D.filter(S=>S.category===e())),l()&&(D=D.filter(S=>S.membersOnly)),D=D.filter(S=>{const M=S.salePrice||S.price;return M>=r()&&M<=i()}),h()==="Cijena: Niža"&&(D=[...D].sort((S,M)=>(S.salePrice||S.price)-(M.salePrice||M.price))),h()==="Cijena: Viša"&&(D=[...D].sort((S,M)=>(M.salePrice||M.price)-(S.salePrice||S.price))),h()==="Najnovije"&&(D=[...D].sort((S,M)=>(M.createdAt?.seconds||0)-(S.createdAt?.seconds||0))),D});return(()=>{var D=_T(),S=D.firstChild,M=S.firstChild,U=M.nextSibling,K=U.firstChild,V=K.firstChild,b=V.nextSibling,y=b.nextSibling,v=y.nextSibling,T=S.nextSibling,E=T.firstChild,I=E.firstChild,p=I.firstChild,j=p.nextSibling,re=j.firstChild,Ae=re.nextSibling,Oe=j.nextSibling,Ue=Oe.firstChild,Ge=Ue.nextSibling,Be=Ge.firstChild,Ye=Be.nextSibling,St=Ye.nextSibling,Ze=Oe.nextSibling,_t=Ze.firstChild,Vt=_t.firstChild,yt=Ze.nextSibling,ct=yt.nextSibling;ct.firstChild;var vt=E.nextSibling;return _(D,k(Ba,{}),S),v.$$click=()=>c(!0),Ae.addEventListener("change",Ee=>t(Ee.target.value)),_(Ae,k(at,{each:FE,children:Ee=>(()=>{var Pe=yT();return Pe.value=Ee,_(Pe,()=>xT[Ee]||Ee),Pe})()})),Be.$$input=Ee=>s(+Ee.target.value),St.$$input=Ee=>o(+Ee.target.value),Vt.addEventListener("change",Ee=>c(Ee.target.checked)),yt.$$click=()=>{t("Sve"),s(0),o(15e3),c(!1)},_(ct,k(at,{get each(){return Kt().slice(0,2)},children:Ee=>k(we,{get href(){return`/product/${Ee.id}`},class:"flex artikala-center gap-3 mb-3 hover:opacity-80 transition-opacity",get children(){return[(()=>{var Pe=vT();return z(et=>{var ht=Ee.images?.[0],Et=Ee.name;return ht!==et.e&&He(Pe,"src",et.e=ht),Et!==et.t&&He(Pe,"alt",et.t=Et),et},{e:void 0,t:void 0}),Pe})(),(()=>{var Pe=bT(),et=Pe.firstChild;return _(et,()=>Ee.name),Pe})()]}})}),null),_(vt,k(ee,{get when(){return vh()},get children(){return pT()}}),null),_(vt,k(ee,{get when(){return!vh()},get children(){return[(()=>{var Ee=mT(),Pe=Ee.firstChild,et=Pe.firstChild,ht=et.nextSibling,Et=ht.firstChild,ae=Et.nextSibling;ae.nextSibling;var J=Pe.nextSibling,F=J.firstChild,W=F.nextSibling,Z=W.firstChild,Y=Z.nextSibling;return _(et,P),_(ht,()=>$().length,ae),F.addEventListener("change",B=>f(B.target.value)),Z.$$click=()=>w("grid"),Y.$$click=()=>w("list"),z(B=>{var he=`px-3 py-1.5 text-xs transition-colors ${m()==="grid"?"bg-aurum-gold text-aurum-black":"text-aurum-muted hover:text-aurum-gold"}`,oe=`px-3 py-1.5 text-xs transition-colors ${m()==="list"?"bg-aurum-gold text-aurum-black":"text-aurum-muted hover:text-aurum-gold"}`;return he!==B.e&&Ie(Z,B.e=he),oe!==B.t&&Ie(Y,B.t=oe),B},{e:void 0,t:void 0}),z(()=>F.value=h()),Ee})(),(()=>{var Ee=gT();return _(Ee,k(at,{get each(){return $()},children:Pe=>k(TT,{product:Pe})})),z(()=>Ie(Ee,`grid gap-5 ${m()==="grid"?"grid-cols-1 sm:grid-cols-2 xl:grid-cols-3":"grid-cols-1"}`)),Ee})(),Xe(()=>Xe(()=>$().length===0)()&&wT())]}}),null),_(D,k(nu,{}),null),z(()=>Ae.value=e()),z(()=>Be.value=r()),z(()=>St.value=i()),z(()=>Vt.checked=l()),D})()}en(["click","input"]);var AT=C('<div><h3 class="text-xs text-aurum-muted uppercase tracking-widest mb-2">Veličina</h3><div class="flex gap-2 flex-wrap">'),ST=C('<div class=mt-16><div class="flex items-center justify-between mb-6"><h2 class=section-title>Možda vam se sviđa</h2><span class="text-xs text-aurum-muted">Preporučeno za vas</span></div><div class="grid grid-cols-2 md:grid-cols-4 gap-4">'),kT=C('<div class="flex items-center gap-1"><span class="text-aurum-gold font-bold"></span><span class=text-aurum-gold></span><span class="text-aurum-muted text-xs">(<!>)'),CT=C('<p class="text-aurum-muted text-sm mb-6">Još nema recenzija. Budite prvi!'),RT=C('<p class="text-green-400 text-xs">✓ Recenzija je objavljena!'),PT=C('<div class="card-dark p-6"><h3 class="section-title text-base mb-4">Napišite recenziju</h3><form class=space-y-4><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-2">Ocjena</label><div class="flex gap-2"><span class="text-aurum-muted text-sm ml-2 self-center">/5</span></div></div><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-2">Komentar</label><textarea rows=3 class="input-dark w-full px-4 py-3 text-sm resize-none"placeholder="Podijelite svoje iskustvo s ovim proizvodom..."></textarea></div><button type=submit class="btn-gold px-6 py-2.5 rounded-lg text-sm disabled:opacity-50">'),$T=C('<div class="min-h-screen bg-aurum-black"><div class="border-b border-aurum-border"><div class="max-w-7xl mx-auto px-4 py-3 flex items-center gap-2 text-xs text-aurum-muted"><span>›</span><span>›</span><span class=text-aurum-text></span></div></div><div class="max-w-7xl mx-auto px-4 py-10 page-enter"><div class="grid grid-cols-1 lg:grid-cols-2 gap-12"><div class=space-y-3><div class="relative rounded-xl overflow-hidden bg-aurum-dark aspect-square"><img class="w-full h-full object-cover"><div class="absolute bottom-3 right-3 bg-aurum-black/70 text-aurum-muted text-xs px-2 py-1 rounded">Uvećaj</div></div><div class="flex gap-2"></div><div class="grid grid-cols-3 gap-3 mt-4"></div></div><div class=space-y-6><div><h1 class="font-display text-3xl font-bold text-white leading-tight"></h1><div class="flex items-center gap-3 mt-3"><span class="text-2xl font-bold text-aurum-gold">$</span><span class="text-aurum-muted text-sm">s PDV-om</span></div></div><div class="flex items-center gap-2"><span class="w-2 h-2 bg-green-400 rounded-full"></span><span class="text-sm text-aurum-text">Na zalihi — <!> komada</span><span class="text-aurum-muted text-xs ml-auto">Dostava: 3–5 radnih dana</span></div><p class="text-aurum-muted text-sm leading-relaxed"></p><div><h3 class="text-xs text-aurum-muted uppercase tracking-widest mb-2">Količina</h3><div class="flex items-center gap-3"><button class="w-9 h-9 border border-aurum-border rounded text-aurum-text hover:border-aurum-gold transition-colors text-lg">−</button><span class="w-12 text-center font-bold text-aurum-text"></span><button class="w-9 h-9 border border-aurum-border rounded text-aurum-text hover:border-aurum-gold transition-colors text-lg">+</button><span class="text-aurum-muted text-xs">Maks. 5 po kupcu</span></div></div><div class="flex gap-3"><button></button><button class="flex-1 py-3 rounded-lg font-bold text-sm border border-aurum-gold text-aurum-gold hover:bg-aurum-gold hover:text-aurum-black transition-all">Kupi odmah</button><button><svg class="w-5 h-5"viewBox="0 0 24 24"stroke=currentColor><path stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></button></div><div class="grid grid-cols-2 gap-3"></div></div></div><div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"></div><div class=mt-16><div class="flex items-center gap-4 mb-6"><h2 class=section-title>Recenzije</h2></div><div class="space-y-4 mb-10">'),VT=C('<div class="min-h-screen bg-aurum-black flex items-center justify-center"><div class=text-center><p class="text-aurum-muted mb-4">Proizvod nije pronađen'),NT=C('<div class="absolute top-3 left-3"><span class=badge-exclusive>'),DT=C('<button><img alt class="w-full h-full object-cover">'),OT=C('<div class="card-dark p-3"><p class="text-aurum-muted text-xs"></p><p class="text-aurum-text text-xs font-medium mt-0.5">'),LT=C('<span class="badge-exclusive mb-3 inline-block">'),MT=C('<span class="text-aurum-muted line-through">$'),UT=C("<button>"),FT=C('<div class="flex items-start gap-2 text-xs text-aurum-muted"><span></span><span>'),jT=C('<div class="aspect-square overflow-hidden bg-aurum-dark"><img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">'),zT=C('<div class=p-3><p class="text-xs font-display text-aurum-text"></p><p class="text-aurum-gold text-sm font-bold mt-1">$'),BT=C('<div><h3 class="section-title text-base mb-3"></h3><p class="text-aurum-muted text-sm leading-relaxed whitespace-pre-line">'),qT=C('<div class="card-dark p-5"><div class="flex items-center justify-between mb-2"><div class="flex items-center gap-2"><div class="w-8 h-8 bg-aurum-gold rounded-full flex items-center justify-center"><span class="text-aurum-black font-bold text-xs"></span></div><span class="text-aurum-text text-sm font-medium"></span></div><span class=text-aurum-gold></span></div><p class="text-aurum-muted text-sm leading-relaxed">'),WT=C('<div class="card-dark p-5 text-center"><p class="text-aurum-muted text-sm"> za pisanje recenzije.'),KT=C("<button type=button>★");function HT(){const n=Kh(),e=mn(),[t,r]=Q([]),[s,i]=Q(!1),[o,l]=Q(5),[c,h]=Q(""),[f,m]=Q(!1),[w,x]=Q(!1),[N,P]=Q(""),[$,D]=Q(1),[S,M]=Q(0),[U,K]=Q(!1);Gs(async()=>{Kt().length===0&&await Bn(),dn()&&await Pp();const I=await Eh(n.id);r(I)});const V=De(()=>{const I=Kt().find(p=>p.id===n.id||p.id===+n.id);return I&&i(ga().includes(I.id)),I}),b=De(()=>Kt().filter(I=>I.id!==n.id&&I.category===V()?.category).slice(0,4));async function y(){if(!dn()){e("/login");return}const I=await $p(V().id);i(I)}function v(){V()&&(kp({...V(),selectedSize:N()},$()),K(!0),setTimeout(()=>K(!1),2e3))}async function T(I){if(I.preventDefault(),!!c().trim()){m(!0);try{await WE(n.id,o(),c()),h(""),x(!0);const p=await Eh(n.id);r(p),setTimeout(()=>x(!1),3e3)}catch(p){console.error(p)}m(!1)}}function E(){return t().length?(t().reduce((I,p)=>I+p.rating,0)/t().length).toFixed(1):0}return k(ee,{get when(){return V()},get fallback(){return(()=>{var I=VT(),p=I.firstChild;return p.firstChild,_(p,k(we,{href:"/catalog",class:"btn-gold px-6 py-2 rounded",children:"Nazad na katalog"}),null),I})()},get children(){var I=$T(),p=I.firstChild,j=p.firstChild,re=j.firstChild,Ae=re.nextSibling,Oe=Ae.nextSibling,Ue=p.nextSibling,Ge=Ue.firstChild,Be=Ge.firstChild,Ye=Be.firstChild,St=Ye.firstChild,Ze=St.nextSibling,_t=Ye.nextSibling,Vt=_t.nextSibling,yt=Be.nextSibling,ct=yt.firstChild,vt=ct.firstChild,Ee=vt.nextSibling,Pe=Ee.firstChild;Pe.firstChild;var et=Pe.nextSibling,ht=ct.nextSibling,Et=ht.firstChild,ae=Et.nextSibling,J=ae.firstChild,F=J.nextSibling;F.nextSibling;var W=ht.nextSibling,Z=W.nextSibling,Y=Z.firstChild,B=Y.nextSibling,he=B.firstChild,oe=he.nextSibling,Se=oe.nextSibling,me=Z.nextSibling,ge=me.firstChild,be=ge.nextSibling,ke=be.nextSibling,tt=ke.firstChild,nt=me.nextSibling,Ne=Ge.nextSibling,Fe=Ne.nextSibling,dt=Fe.firstChild;dt.firstChild;var Qe=dt.nextSibling;return _(I,k(Ba,{}),p),_(j,k(we,{href:"/catalog",class:"hover:text-aurum-gold",children:"AurumVault"}),re),_(j,k(we,{href:"/catalog",class:"hover:text-aurum-gold",children:"Katalog"}),Ae),_(Oe,()=>V()?.category),_(Ye,(()=>{var H=Xe(()=>!!V()?.badge);return()=>H()&&(()=>{var se=NT(),le=se.firstChild;return _(le,(()=>{var ne=Xe(()=>V()?.badge==="Members Only");return()=>ne()?"Samo za članove":Xe(()=>V()?.badge==="Exclusive")()?"Ekskluzivno":V()?.badge})()),se})()})(),Ze),_(Ye,k(ee,{get when(){return di()},get children(){return k(we,{get href(){return`/admin/products/edit/${V()?.id}`},class:"absolute top-3 right-3 bg-aurum-gold text-aurum-black text-xs font-bold px-3 py-1 rounded",children:"Uredi"})}}),Ze),_(_t,k(at,{get each(){return V()?.images},children:(H,se)=>(()=>{var le=DT(),ne=le.firstChild;return le.$$click=()=>M(se()),He(ne,"src",H),z(()=>Ie(le,`w-16 h-16 rounded overflow-hidden border-2 transition-colors ${S()===se()?"border-aurum-gold":"border-aurum-border"}`)),le})()})),_(Vt,()=>[{label:"Šifra",value:V()?.sku},{label:"Materijali",value:"18k Pozlata na srebru"},{label:"Dostava",value:"Iz Zagreba"}].map(H=>(()=>{var se=OT(),le=se.firstChild,ne=le.nextSibling;return _(le,()=>H.label),_(ne,()=>H.value),se})())),_(ct,(()=>{var H=Xe(()=>!!V()?.badge);return()=>H()&&(()=>{var se=LT();return _(se,(()=>{var le=Xe(()=>V()?.badge==="Members Only");return()=>le()?"Samo za članove":Xe(()=>V()?.badge==="Exclusive")()?"Ekskluzivno":V()?.badge})()),se})()})(),vt),_(vt,()=>V()?.name),_(Pe,()=>(V()?.salePrice||V()?.price)?.toLocaleString(),null),_(Ee,(()=>{var H=Xe(()=>!!V()?.salePrice);return()=>H()&&(()=>{var se=MT();return se.firstChild,_(se,()=>V()?.price?.toLocaleString(),null),se})()})(),et),_(ae,()=>V()?.stock,F),_(W,()=>V()?.description),_(yt,k(ee,{get when(){return V()?.sizes?.length>0},get children(){var H=AT(),se=H.firstChild,le=se.nextSibling;return _(le,k(at,{get each(){return V()?.sizes},children:ne=>(()=>{var _e=UT();return _e.$$click=()=>P(ne),_(_e,ne),z(()=>Ie(_e,`w-10 h-10 rounded border text-sm font-bold transition-all ${N()===ne?"border-aurum-gold bg-aurum-gold text-aurum-black":"border-aurum-border text-aurum-text hover:border-aurum-gold"}`)),_e})()})),H}}),Z),he.$$click=()=>D(H=>Math.max(1,H-1)),_(oe,$),Se.$$click=()=>D(H=>Math.min(V()?.stock||10,H+1)),ge.$$click=v,_(ge,()=>U()?"✓ Dodano u košaricu":"Dodaj u košaricu"),be.$$click=()=>{v(),e("/checkout")},ke.$$click=y,_(nt,()=>[{icon:"🚚",text:"Besplatna dostava za narudžbe iznad 100$"},{icon:"↩",text:"Povrat do 30 dana. Bez komplikacija."},{icon:"🔒",text:"Sigurna kupovina"},{icon:"✋",text:"Ručno provjerena kvaliteta"}].map(H=>(()=>{var se=FT(),le=se.firstChild,ne=le.nextSibling;return _(le,()=>H.icon),_(ne,()=>H.text),se})())),_(Ue,k(ee,{get when(){return b().length>0},get children(){var H=ST(),se=H.firstChild,le=se.nextSibling;return _(le,k(at,{get each(){return b()},children:ne=>k(we,{get href(){return`/product/${ne.id}`},class:"card-dark overflow-hidden group hover:border-aurum-gold transition-all duration-300",get children(){return[(()=>{var _e=jT(),Ce=_e.firstChild;return z($e=>{var Nt=ne.images?.[0],Le=ne.name;return Nt!==$e.e&&He(Ce,"src",$e.e=Nt),Le!==$e.t&&He(Ce,"alt",$e.t=Le),$e},{e:void 0,t:void 0}),_e})(),(()=>{var _e=zT(),Ce=_e.firstChild,$e=Ce.nextSibling;return $e.firstChild,_(Ce,()=>ne.name),_($e,()=>ne.price?.toLocaleString(),null),_e})()]}})})),H}}),Ne),_(Ne,()=>[{title:"Detalji proizvoda",content:V()?.description},{title:"Specifikacije",content:`Materijal: 18k pozlata na Sterling srebru
Težina: 8.5g
Širina: 5mm
Obrada: Brušena površina, polirani okvir`},{title:"Njega",content:"Brišite mekom krpom. Izbjegavajte agresivna sredstva. Čuvajte u priloženoj torbici."}].map(H=>(()=>{var se=BT(),le=se.firstChild,ne=le.nextSibling;return _(le,()=>H.title),_(ne,()=>H.content),se})())),_(dt,k(ee,{get when(){return t().length>0},get children(){var H=kT(),se=H.firstChild,le=se.nextSibling,ne=le.nextSibling,_e=ne.firstChild,Ce=_e.nextSibling;return Ce.nextSibling,_(se,E),_(le,()=>"★".repeat(Math.round(E()))),_(ne,()=>t().length,Ce),H}}),null),_(Fe,k(ee,{get when(){return t().length===0},get children(){return CT()}}),Qe),_(Qe,k(at,{get each(){return t()},children:H=>(()=>{var se=qT(),le=se.firstChild,ne=le.firstChild,_e=ne.firstChild,Ce=_e.firstChild,$e=_e.nextSibling,Nt=ne.nextSibling,Le=le.nextSibling;return _(Ce,()=>H.userName?.charAt(0)),_($e,()=>H.userName),_(Nt,()=>"★".repeat(H.rating),null),_(Nt,()=>"☆".repeat(5-H.rating),null),_(Le,()=>H.comment),se})()})),_(Fe,k(ee,{get when(){return dn()},get fallback(){return(()=>{var H=WT(),se=H.firstChild,le=se.firstChild;return _(se,k(we,{href:"/login",class:"text-aurum-gold hover:underline",children:"Prijavite se"}),le),H})()},get children(){var H=PT(),se=H.firstChild,le=se.nextSibling,ne=le.firstChild,_e=ne.firstChild,Ce=_e.nextSibling,$e=Ce.firstChild,Nt=$e.firstChild,Le=ne.nextSibling,or=Le.firstChild,jt=or.nextSibling,Dt=Le.nextSibling;return le.addEventListener("submit",T),_(Ce,k(at,{each:[1,2,3,4,5],children:tn=>(()=>{var lr=KT();return lr.$$click=()=>l(tn),z(()=>Ie(lr,`text-2xl transition-colors ${tn<=o()?"text-aurum-gold":"text-aurum-muted"}`)),lr})()}),$e),_($e,o,Nt),jt.$$input=tn=>h(tn.target.value),_(le,k(ee,{get when(){return w()},get children(){return RT()}}),Dt),_(Dt,()=>f()?"Šalje...":"Objavi recenziju"),z(()=>Dt.disabled=f()),z(()=>jt.value=c()),H}}),null),_(I,k(nu,{}),null),z(H=>{var se=V()?.images?.[S()],le=V()?.name,ne=`flex-1 py-3 rounded-lg font-bold text-sm transition-all ${U()?"bg-green-600 text-white":"btn-gold"}`,_e=`p-3 rounded-lg border transition-all ${s()?"border-red-400 text-red-400 bg-red-900/20":"border-aurum-border text-aurum-muted hover:border-red-400 hover:text-red-400"}`,Ce=s()?"Ukloni iz liste želja":"Dodaj u listu želja",$e=s()?"currentColor":"none";return se!==H.e&&He(St,"src",H.e=se),le!==H.t&&He(St,"alt",H.t=le),ne!==H.a&&Ie(ge,H.a=ne),_e!==H.o&&Ie(ke,H.o=_e),Ce!==H.i&&He(ke,"title",H.i=Ce),$e!==H.n&&He(tt,"fill",H.n=$e),H},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0}),I}})}en(["click","input"]);var GT=C('<div class="w-8 h-8 bg-aurum-gold rounded-full flex items-center justify-center"><span class="text-aurum-black font-display font-black text-sm">A'),QT=C('<span class="font-display font-bold text-aurum-gold tracking-widest gold-glow">AurumVault'),JT=C('<div class="text-center mb-6"><h1 class="font-display text-xl font-bold text-white">Dobrodošli nazad</h1><p class="text-aurum-muted text-sm mt-1">Prijavite se u vaš AurumVault račun'),XT=C('<div class="text-center mb-6"><h1 class="font-display text-xl font-bold text-white">Kreirajte račun</h1><p class="text-aurum-muted text-sm mt-1">Pridružite se AurumVault zajednici'),YT=C('<div class="text-center mb-6"><h1 class="font-display text-xl font-bold text-white">Oporavak lozinke</h1><p class="text-aurum-muted text-sm mt-1">Unesite email za slanje uputa'),ZT=C('<div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Ime i prezime</label><input type=text placeholder="Vaše ime"class="input-dark w-full px-4 py-3 text-sm">'),eI=C('<div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Lozinka</label><input type=password placeholder=•••••••• class="input-dark w-full px-4 py-3 text-sm">'),tI=C('<p class="text-red-400 text-xs flex items-center gap-1">⚠ '),nI=C('<p class="text-green-400 text-xs flex items-center gap-1">✓ '),rI=C('<div class="text-center mt-4"><button class="text-xs text-aurum-muted hover:text-aurum-gold transition-colors underline">Zaboravili ste lozinku?'),sI=C('<div class="text-center mt-4"><button class="text-xs text-aurum-muted hover:text-aurum-gold">← Nazad na prijavu'),iI=C('<div class="mt-6 pt-4 border-t border-aurum-border"><p class="text-xs text-aurum-muted text-center mb-3">Prednosti registracije:</p><div class=space-y-2>'),aI=C('<div class="min-h-screen bg-aurum-black flex flex-col"><div class="border-b border-aurum-border px-6 py-4 flex items-center justify-between"></div><div class="flex-1 flex items-center justify-center px-4 py-12"><div class="w-full max-w-md page-enter"><div class="gold-border-anim bg-aurum-card rounded-2xl p-8"><div class="flex mb-8 border-b border-aurum-border"><button>PRIJAVA</button><button>REGISTRACIJA</button></div><form class=space-y-4><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Email</label><input type=email placeholder=vas@email.com class="input-dark w-full px-4 py-3 text-sm"></div><button type=submit class="btn-gold w-full py-3 rounded-lg text-sm mt-2">'),oI=C('<div class="flex items-center gap-2 text-xs text-aurum-muted"><span class=text-aurum-gold>✓</span> ');function lI(){const n=mn(),[e,t]=Q("login"),[r,s]=Q(""),[i,o]=Q(""),[l,c]=Q(""),[h,f]=Q(""),[m,w]=Q(""),[x,N]=Q(!1);async function P($){$.preventDefault(),f(""),w(""),N(!0);try{if(e()==="login")await NE(r(),i()),n("/catalog");else if(e()==="register"){if(!l()){f("Unesite ime i prezime."),N(!1);return}await VE(l(),r(),i()),n("/catalog")}else e()==="forgot"&&(await DE(r()),w(`Upute za oporavak lozinke poslane su na ${r()}`))}catch(D){f({"auth/invalid-email":"Nevažeća email adresa.","auth/user-not-found":"Korisnik s tim emailom ne postoji.","auth/wrong-password":"Pogrešna lozinka.","auth/email-already-in-use":"Email je već registriran.","auth/weak-password":"Lozinka mora imati najmanje 6 znakova.","auth/too-many-requests":"Previše pokušaja. Pokušajte kasnije.","auth/invalid-credential":"Pogrešan email ili lozinka."}[D.code]||D.message)}N(!1)}return(()=>{var $=aI(),D=$.firstChild,S=D.nextSibling,M=S.firstChild,U=M.firstChild,K=U.firstChild,V=K.firstChild,b=V.nextSibling,y=K.nextSibling,v=y.firstChild,T=v.firstChild,E=T.nextSibling,I=v.nextSibling;return _(D,k(we,{href:"/catalog",class:"flex items-center gap-2",get children(){return[GT(),QT()]}}),null),_(D,k(we,{href:"/catalog",class:"text-aurum-muted text-xs hover:text-aurum-gold transition-colors",children:"← Nazad na katalog"}),null),V.$$click=()=>{t("login"),f(""),w("")},b.$$click=()=>{t("register"),f(""),w("")},_(U,k(ee,{get when(){return e()==="login"},get children(){return JT()}}),y),_(U,k(ee,{get when(){return e()==="register"},get children(){return XT()}}),y),_(U,k(ee,{get when(){return e()==="forgot"},get children(){return YT()}}),y),y.addEventListener("submit",P),_(y,k(ee,{get when(){return e()==="register"},get children(){var p=ZT(),j=p.firstChild,re=j.nextSibling;return re.$$input=Ae=>c(Ae.target.value),z(()=>re.value=l()),p}}),v),E.$$input=p=>s(p.target.value),_(y,k(ee,{get when(){return e()!=="forgot"},get children(){var p=eI(),j=p.firstChild,re=j.nextSibling;return re.$$input=Ae=>o(Ae.target.value),z(()=>re.value=i()),p}}),I),_(y,k(ee,{get when(){return h()},get children(){var p=tI();return p.firstChild,_(p,h,null),p}}),I),_(y,k(ee,{get when(){return m()},get children(){var p=nI();return p.firstChild,_(p,m,null),p}}),I),_(I,(()=>{var p=Xe(()=>!!x());return()=>p()?"Učitavanje...":Xe(()=>e()==="login")()?"Prijava":e()==="register"?"Registracija":"Pošalji upute"})()),_(U,k(ee,{get when(){return e()==="login"},get children(){var p=rI(),j=p.firstChild;return j.$$click=()=>{t("forgot"),f(""),w("")},p}}),null),_(U,k(ee,{get when(){return e()==="forgot"},get children(){var p=sI(),j=p.firstChild;return j.$$click=()=>t("login"),p}}),null),_(U,k(ee,{get when(){return e()==="register"},get children(){var p=iI(),j=p.firstChild,re=j.nextSibling;return _(re,()=>["Spremi adresu i podatke o plaćanju","Pristup kuponima za popust","Ekskluzivne ponude i rani pristup","Povijest narudžbi"].map(Ae=>(()=>{var Oe=oI(),Ue=Oe.firstChild;return Ue.nextSibling,_(Oe,Ae,null),Oe})())),p}}),null),z(p=>{var j=`flex-1 pb-3 text-sm font-display tracking-wider transition-colors ${e()==="login"?"text-aurum-gold border-b-2 border-aurum-gold":"text-aurum-muted hover:text-aurum-text"}`,re=`flex-1 pb-3 text-sm font-display tracking-wider transition-colors ${e()==="register"?"text-aurum-gold border-b-2 border-aurum-gold":"text-aurum-muted hover:text-aurum-text"}`,Ae=x();return j!==p.e&&Ie(V,p.e=j),re!==p.t&&Ie(b,p.t=re),Ae!==p.a&&(I.disabled=p.a=Ae),p},{e:void 0,t:void 0,a:void 0}),z(()=>E.value=r()),$})()}en(["click","input"]);var uI=C('<div class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center px-4"><div class="bg-aurum-card border border-aurum-gold rounded-2xl p-8 max-w-md w-full text-center"style="box-shadow:0 0 60px rgba(240,192,64,0.4);animation:fadeIn 0.3s ease"><div class="w-20 h-20 bg-aurum-gold rounded-full flex items-center justify-center mx-auto mb-5"style="box-shadow:0 0 30px rgba(240,192,64,0.6)"><span class="text-4xl text-aurum-black font-bold">✓</span></div><h2 class="font-display text-2xl font-bold text-aurum-gold mb-1">Narudžba je na putu!</h2><p class="text-aurum-muted text-sm mb-6">Uspješno smo zaprimili vašu narudžbu. Uskoro ćete primiti potvrdu.</p><div class="bg-aurum-dark rounded-xl p-4 text-left mb-6 space-y-2 border border-aurum-border"><div class="flex justify-between text-sm"><span class=text-aurum-muted>Broj narudžbe</span><span class="text-aurum-gold font-bold font-mono tracking-wider">#</span></div><div class="flex justify-between text-sm"><span class=text-aurum-muted>Status</span><span class="text-yellow-400 bg-yellow-900/30 px-2 py-0.5 rounded-full text-xs">🚚 U obradi</span></div><div class="flex justify-between text-sm"><span class=text-aurum-muted>Ime</span><span class=text-aurum-text></span></div><div class="flex justify-between text-sm"><span class=text-aurum-muted>Grad</span><span class=text-aurum-text></span></div><div class="flex justify-between text-sm pt-2 border-t border-aurum-border"><span class="text-aurum-text font-bold">Ukupno plaćeno</span><span class="text-aurum-gold font-bold text-base">$</span></div></div><div class="flex flex-col gap-3">'),cI=C('<div class="text-center py-8 text-aurum-muted"><p>Košarica je prazna'),hI=C('<div class="card-dark p-6"><h2 class="font-display text-lg font-bold text-aurum-gold mb-4">Vaša košarica'),dI=C('<p class="text-red-400 text-xs mt-2">⚠ '),fI=C('<p class="text-green-400 text-xs mt-2">✓ Kupon AURUM10 primijenjen — 10% popusta'),pI=C('<p class="text-aurum-muted text-xs mt-2">Kuponi su dostupni samo prijavljenim korisnicima. '),mI=C('<div class="card-dark p-6"><div class="flex items-center gap-3"><input type=text placeholder="Promo kod"><button class="btn-gold px-4 py-2 text-sm rounded">Primijeni'),gI=C('<button class="btn-gold w-full py-3 rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed">Nastavi na dostavu →'),_I=C('<div class="card-dark p-6"><h2 class="font-display text-lg font-bold text-aurum-gold mb-4">Podaci za dostavu</h2><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Ime i prezime</label><input type=text class="input-dark w-full px-4 py-2.5 text-sm"placeholder="Ivan Horvat"></div><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Telefon</label><input type=tel class="input-dark w-full px-4 py-2.5 text-sm"placeholder="+385 91 234 5678"></div><div class=sm:col-span-2><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Adresa</label><input type=text class="input-dark w-full px-4 py-2.5 text-sm"placeholder="Ulica i broj"></div><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Grad</label><input type=text class="input-dark w-full px-4 py-2.5 text-sm"placeholder=Zagreb></div><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Poštanski broj</label><input type=text class="input-dark w-full px-4 py-2.5 text-sm"placeholder=10000></div></div><div class=mt-6><h3 class="text-xs text-aurum-muted uppercase tracking-widest mb-3">Metoda dostave</h3><div class=space-y-2>'),yI=C('<div class="flex gap-3"><button class="flex-1 py-3 border border-aurum-border text-aurum-muted rounded-lg text-sm hover:border-aurum-gold transition-colors">← Nazad</button><button class="flex-1 btn-gold py-3 rounded-lg text-sm">Nastavi na plaćanje →'),vI=C('<div class="card-dark p-6"><h2 class="font-display text-lg font-bold text-aurum-gold mb-4">Način plaćanja</h2><div class="space-y-3 mb-6"></div><div class="border-t border-aurum-border pt-4"><h3 class="text-xs text-aurum-muted uppercase tracking-widest mb-3">Dodaj novu karticu</h3><div class="grid grid-cols-1 gap-3"><input placeholder="Ime na kartici"class="input-dark px-4 py-2.5 text-sm"><input placeholder="Broj kartice"class="input-dark px-4 py-2.5 text-sm"><div class="grid grid-cols-2 gap-3"><input placeholder="MM / YY"class="input-dark px-4 py-2.5 text-sm"><input placeholder=CVC class="input-dark px-4 py-2.5 text-sm"></div></div></div><p class="text-center text-aurum-muted text-xs mt-4">🔒 PCI-SSL zaštita. Vaši podaci su sigurni.'),bI=C('<div class="flex gap-3"><button class="flex-1 py-3 border border-aurum-border text-aurum-muted rounded-lg text-sm hover:border-aurum-gold transition-colors">← Nazad</button><button class="flex-1 btn-gold py-3 rounded-lg text-sm">Pregled narudžbe →'),wI=C('<div class="card-dark p-6"><h2 class="font-display text-lg font-bold text-aurum-gold mb-4">Potvrda narudžbe</h2><div class=space-y-3><div class="flex justify-between text-sm"><span class=text-aurum-muted>Ime:</span><span class=text-aurum-text></span></div><div class="flex justify-between text-sm"><span class=text-aurum-muted>Adresa:</span><span class="text-aurum-text text-right">, </span></div><div class="flex justify-between text-sm"><span class=text-aurum-muted>Dostava:</span><span class=text-aurum-text></span></div><div class="flex justify-between text-sm"><span class=text-aurum-muted>Plaćanje:</span><span class="text-aurum-text capitalize"></span></div><div class="flex justify-between text-sm pt-3 border-t border-aurum-border"><span class="text-aurum-muted font-bold">Ukupno:</span><span class="text-aurum-gold font-bold">$'),xI=C('<div class="bg-red-900/30 border border-red-500 rounded-lg p-3 text-red-400 text-xs">⚠ '),EI=C('<div class="flex gap-3"><button class="flex-1 py-3 border border-aurum-border text-aurum-muted rounded-lg text-sm hover:border-aurum-gold transition-colors">← Nazad</button><button class="flex-1 btn-gold py-3 rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed">'),TI=C('<div class="flex justify-between text-green-400"><span>Popust (10%)</span><span>−$'),II=C('<div class="min-h-screen bg-aurum-black"><div class="max-w-6xl mx-auto px-4 py-8 page-enter"><div class="flex items-center justify-center mb-10"></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-8"><div class="lg:col-span-2 space-y-6"></div><div class=lg:col-span-1><div class="card-dark p-6 sticky top-24"><h3 class="font-display text-sm font-bold text-aurum-gold uppercase tracking-widest mb-4">Sažetak narudžbe</h3><div class="text-xs text-aurum-muted mb-2"> </div><div class="border-t border-aurum-border mt-4 pt-4 space-y-2 text-sm"><div class="flex justify-between text-aurum-muted"><span>Subtotal</span><span>$</span></div><div class="flex justify-between text-aurum-muted"><span>Dostava</span><span></span></div><div class="flex justify-between text-aurum-muted"><span>PDV</span><span>$</span></div><div class="flex justify-between text-aurum-gold font-bold text-base pt-2 border-t border-aurum-border"><span>Ukupno</span><span>$'),AI=C('<div class="flex items-center"><div class="flex flex-col items-center"><div></div><span>'),SI=C("<div>"),kI=C('<div class="flex items-center gap-4 py-4 border-b border-aurum-border last:border-0"><img class="w-16 h-16 rounded object-cover bg-aurum-dark"><div class=flex-1><p class="text-aurum-text text-sm font-medium"></p><p class="text-aurum-muted text-xs"></p></div><div class="flex items-center gap-2"><button class="w-6 h-6 border border-aurum-border rounded text-xs hover:border-aurum-gold text-aurum-text">−</button><span class="text-sm text-aurum-text w-6 text-center"></span><button class="w-6 h-6 border border-aurum-border rounded text-xs hover:border-aurum-gold text-aurum-text">+</button></div><span class="text-aurum-gold font-bold text-sm w-20 text-right">$</span><button class="text-aurum-muted hover:text-red-400 text-lg">×'),CI=C('<label><input type=radio name=shipping class="radio radio-warning radio-sm"><div class=flex-1><p class="text-sm text-aurum-text"></p></div><span class="text-aurum-gold text-sm font-bold">'),RI=C('<label><input type=radio name=payment class="radio radio-warning radio-sm"><div class="w-10 h-6 bg-aurum-muted rounded flex items-center justify-center text-xs text-white"></div><div class=flex-1><p class="text-sm text-aurum-text"></p><p class="text-xs text-aurum-muted">'),PI=C('<div class="flex items-center gap-2 mb-2 text-xs"><img alt class="w-8 h-8 rounded object-cover"><span class="flex-1 text-aurum-text truncate"></span><span class=text-aurum-gold>$'),$I=C("<span class=text-green-400>Besplatno");function Th(){mn();const[n,e]=Q(1),[t,r]=Q(""),[s,i]=Q(!1),[o,l]=Q(""),[c,h]=Q(null),[f,m]=Q("visa"),[w,x]=Q(!1),[N,P]=Q(""),[$,D]=Q(!1),[S,M]=Q({fullName:mt()?.name||"",phone:"",address:"",city:"",state:"",postal:"",country:"Croatia",shipping:"standard"}),U=De(()=>!s()||!c()?0:c().type==="percent"?mr()*(c().discount/100):c().discount),K=De(()=>S().shipping==="express"?12:mr()>100?0:12),V=De(()=>(mr()-U())*.075),b=De(()=>mr()-U()+K()+V());async function y(){l("");try{const p=await qE(t());h(p),i(!0)}catch(p){l(p.message)}}const[v,T]=Q("");async function E(){if(Gt().length===0){T("Košarica je prazna — ne možeš naručiti.");return}if(!S().fullName||!S().address||!S().city){T("Molimo popuni sve podatke za dostavu.");return}D(!0),T("");try{const p=await BE({items:Gt().map(j=>({id:j.id,name:j.name,price:j.price,quantity:j.quantity,sku:j.sku||""})),total:b(),subtotal:mr(),discount:U(),shipping:K(),tax:V(),status:"U obradi",paymentMethod:f(),coupon:s()?t():null,shippingAddress:{fullName:S().fullName,phone:S().phone,address:S().address,city:S().city,postal:S().postal,country:S().country}});P(p),jE(),x(!0)}catch(p){T("Greška pri narudžbi: "+p.message),console.error(p)}D(!1)}const I=["Košarica","Dostava","Plaćanje","Potvrda"];return(()=>{var p=II(),j=p.firstChild,re=j.firstChild,Ae=re.nextSibling,Oe=Ae.firstChild,Ue=Oe.nextSibling,Ge=Ue.firstChild,Be=Ge.firstChild,Ye=Be.nextSibling,St=Ye.firstChild,Ze=Ye.nextSibling,_t=Ze.firstChild,Vt=_t.firstChild,yt=Vt.nextSibling;yt.firstChild;var ct=_t.nextSibling,vt=ct.firstChild,Ee=vt.nextSibling,Pe=ct.nextSibling,et=Pe.firstChild,ht=et.nextSibling;ht.firstChild;var Et=Pe.nextSibling,ae=Et.firstChild,J=ae.nextSibling;return J.firstChild,_(p,k(Ba,{}),j),_(p,k(ee,{get when(){return w()},get children(){var F=uI(),W=F.firstChild,Z=W.firstChild,Y=Z.nextSibling,B=Y.nextSibling,he=B.nextSibling,oe=he.firstChild,Se=oe.firstChild,me=Se.nextSibling;me.firstChild;var ge=oe.nextSibling,be=ge.nextSibling,ke=be.firstChild,tt=ke.nextSibling,nt=be.nextSibling,Ne=nt.firstChild,Fe=Ne.nextSibling,dt=nt.nextSibling,Qe=dt.firstChild,H=Qe.nextSibling;H.firstChild;var se=he.nextSibling;return _(me,()=>N().slice(0,8).toUpperCase(),null),_(tt,()=>S().fullName),_(Fe,()=>S().city),_(H,()=>b().toFixed(2),null),_(se,k(we,{href:"/profile",class:"w-full btn-gold py-3 rounded-lg text-sm font-bold",children:"📦 Pogledaj narudžbu"}),null),_(se,k(we,{href:"/catalog",class:"w-full border border-aurum-border text-aurum-muted py-3 rounded-lg text-sm hover:border-aurum-gold hover:text-aurum-gold transition-all",children:"← Natrag na katalog"}),null),F}}),j),_(re,k(at,{each:I,children:(F,W)=>(()=>{var Z=AI(),Y=Z.firstChild,B=Y.firstChild,he=B.nextSibling;return _(B,(()=>{var oe=Xe(()=>n()>W()+1);return()=>oe()?"✓":W()+1})()),_(he,F),_(Z,(()=>{var oe=Xe(()=>W()<I.length-1);return()=>oe()&&(()=>{var Se=SI();return z(()=>Ie(Se,`w-16 sm:w-24 h-px mx-2 mb-4 transition-all ${n()>W()+1?"bg-aurum-gold":"bg-aurum-border"}`)),Se})()})(),null),z(oe=>{var Se=`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${n()>W()+1?"bg-green-600 text-white":n()===W()+1?"bg-aurum-gold text-aurum-black":"bg-aurum-dark border border-aurum-border text-aurum-muted"}`,me=`text-xs mt-1 ${n()===W()+1?"text-aurum-gold":"text-aurum-muted"}`;return Se!==oe.e&&Ie(B,oe.e=Se),me!==oe.t&&Ie(he,oe.t=me),oe},{e:void 0,t:void 0}),Z})()})),_(Oe,k(ee,{get when(){return n()===1},get children(){return[(()=>{var F=hI();return F.firstChild,_(F,k(ee,{get when(){return Gt().length===0},get children(){var W=cI();return W.firstChild,_(W,k(we,{href:"/catalog",class:"text-aurum-gold text-sm hover:underline mt-2 inline-block",children:"Idi na katalog"}),null),W}}),null),_(F,k(at,{get each(){return Gt()},children:W=>(()=>{var Z=kI(),Y=Z.firstChild,B=Y.nextSibling,he=B.firstChild,oe=he.nextSibling,Se=B.nextSibling,me=Se.firstChild,ge=me.nextSibling,be=ge.nextSibling,ke=Se.nextSibling;ke.firstChild;var tt=ke.nextSibling;return _(he,()=>W.name),_(oe,()=>W.sku),me.$$click=()=>wh(W.id,W.quantity-1),_(ge,()=>W.quantity),be.$$click=()=>wh(W.id,W.quantity+1),_(ke,()=>(W.price*W.quantity).toLocaleString(),null),tt.$$click=()=>Cp(W.id),z(nt=>{var Ne=W.images?.[0],Fe=W.name;return Ne!==nt.e&&He(Y,"src",nt.e=Ne),Fe!==nt.t&&He(Y,"alt",nt.t=Fe),nt},{e:void 0,t:void 0}),Z})()}),null),F})(),(()=>{var F=mI(),W=F.firstChild,Z=W.firstChild,Y=Z.nextSibling;return Z.$$input=B=>r(B.target.value),Y.$$click=y,_(F,k(ee,{get when(){return o()},get children(){var B=dI();return B.firstChild,_(B,o,null),B}}),null),_(F,k(ee,{get when(){return s()},get children(){return fI()}}),null),_(F,k(ee,{get when(){return!dn()},get children(){var B=pI();return B.firstChild,_(B,k(we,{href:"/login",class:"text-aurum-gold hover:underline",children:"Prijavi se"}),null),B}}),null),z(B=>{var he=`input-dark flex-1 px-4 py-2 text-sm ${dn()?"":"opacity-50 cursor-not-allowed"}`,oe=!dn();return he!==B.e&&Ie(Z,B.e=he),oe!==B.t&&(Z.disabled=B.t=oe),B},{e:void 0,t:void 0}),z(()=>Z.value=t()),F})(),(()=>{var F=gI();return F.$$click=()=>e(2),z(()=>F.disabled=Gt().length===0),F})()]}}),null),_(Oe,k(ee,{get when(){return n()===2},get children(){return[(()=>{var F=_I(),W=F.firstChild,Z=W.nextSibling,Y=Z.firstChild,B=Y.firstChild,he=B.nextSibling,oe=Y.nextSibling,Se=oe.firstChild,me=Se.nextSibling,ge=oe.nextSibling,be=ge.firstChild,ke=be.nextSibling,tt=ge.nextSibling,nt=tt.firstChild,Ne=nt.nextSibling,Fe=tt.nextSibling,dt=Fe.firstChild,Qe=dt.nextSibling,H=Z.nextSibling,se=H.firstChild,le=se.nextSibling;return he.$$input=ne=>M({...S(),fullName:ne.target.value}),me.$$input=ne=>M({...S(),phone:ne.target.value}),ke.$$input=ne=>M({...S(),address:ne.target.value}),Ne.$$input=ne=>M({...S(),city:ne.target.value}),Qe.$$input=ne=>M({...S(),postal:ne.target.value}),_(le,()=>[{value:"standard",label:"Standard — 3–5 radnih dana",price:mr()>100?"Besplatno":"$12.00"},{value:"express",label:"Express — 1–2 radna dana",price:"$12.00 extra"}].map(ne=>(()=>{var _e=CI(),Ce=_e.firstChild,$e=Ce.nextSibling,Nt=$e.firstChild,Le=$e.nextSibling;return Ce.addEventListener("change",()=>M({...S(),shipping:ne.value})),_(Nt,()=>ne.label),_(Le,()=>ne.price),z(()=>Ie(_e,`flex items-center gap-3 p-3 rounded border cursor-pointer transition-colors ${S().shipping===ne.value?"border-aurum-gold bg-aurum-dark":"border-aurum-border hover:border-aurum-muted"}`)),z(()=>Ce.value=ne.value),z(()=>Ce.checked=S().shipping===ne.value),_e})())),z(()=>he.value=S().fullName),z(()=>me.value=S().phone),z(()=>ke.value=S().address),z(()=>Ne.value=S().city),z(()=>Qe.value=S().postal),F})(),(()=>{var F=yI(),W=F.firstChild,Z=W.nextSibling;return W.$$click=()=>e(1),Z.$$click=()=>e(3),F})()]}}),null),_(Oe,k(ee,{get when(){return n()===3},get children(){return[(()=>{var F=vI(),W=F.firstChild,Z=W.nextSibling;return _(Z,()=>[{value:"visa",label:"Visa završava 4242",sub:"Nikad ne ističe"},{value:"mc",label:"Mastercard završava 8828",sub:"Expires 12/2026"},{value:"amex",label:"American Express završava 3358",sub:"Expires 09/2025"}].map(Y=>(()=>{var B=RI(),he=B.firstChild,oe=he.nextSibling,Se=oe.nextSibling,me=Se.firstChild,ge=me.nextSibling;return he.addEventListener("change",()=>m(Y.value)),_(oe,(()=>{var be=Xe(()=>Y.value==="visa");return()=>be()?"Visa":Y.value==="mc"?"MC":"Amex"})()),_(me,()=>Y.label),_(ge,()=>Y.sub),z(()=>Ie(B,`flex items-center gap-3 p-4 rounded border cursor-pointer transition-colors ${f()===Y.value?"border-aurum-gold bg-aurum-dark":"border-aurum-border hover:border-aurum-muted"}`)),z(()=>he.checked=f()===Y.value),B})())),F})(),(()=>{var F=bI(),W=F.firstChild,Z=W.nextSibling;return W.$$click=()=>e(2),Z.$$click=()=>e(4),F})()]}}),null),_(Oe,k(ee,{get when(){return n()===4},get children(){return[(()=>{var F=wI(),W=F.firstChild,Z=W.nextSibling,Y=Z.firstChild,B=Y.firstChild,he=B.nextSibling,oe=Y.nextSibling,Se=oe.firstChild,me=Se.nextSibling,ge=me.firstChild,be=oe.nextSibling,ke=be.firstChild,tt=ke.nextSibling,nt=be.nextSibling,Ne=nt.firstChild,Fe=Ne.nextSibling,dt=nt.nextSibling,Qe=dt.firstChild,H=Qe.nextSibling;return H.firstChild,_(he,()=>S().fullName),_(me,()=>S().address,ge),_(me,()=>S().city,null),_(tt,()=>S().shipping==="express"?"Express":"Standard"),_(Fe,f),_(H,()=>b().toFixed(2),null),F})(),k(ee,{get when(){return v()},get children(){var F=xI();return F.firstChild,_(F,v,null),F}}),(()=>{var F=EI(),W=F.firstChild,Z=W.nextSibling;return W.$$click=()=>e(3),Z.$$click=E,_(Z,()=>$()?"⏳ Obrađujem...":"✓ Potvrdi narudžbu"),z(()=>Z.disabled=$()||Gt().length===0),F})()]}}),null),_(Ye,()=>Gt().length,St),_(Ye,()=>Gt().length===1?"artikl":"artikala",null),_(Ge,k(at,{get each(){return Gt()},children:F=>(()=>{var W=PI(),Z=W.firstChild,Y=Z.nextSibling,B=Y.nextSibling;return B.firstChild,_(Y,()=>F.name),_(B,()=>(F.price*F.quantity).toLocaleString(),null),z(()=>He(Z,"src",F.images?.[0])),W})()}),Ze),_(yt,()=>mr().toLocaleString(),null),_(Ze,k(ee,{get when(){return s()},get children(){var F=TI(),W=F.firstChild,Z=W.nextSibling;return Z.firstChild,_(Z,()=>U().toFixed(2),null),F}}),ct),_(Ee,(()=>{var F=Xe(()=>K()===0);return()=>F()?$I():`$${K().toFixed(2)}`})()),_(ht,()=>V().toFixed(2),null),_(J,()=>b().toFixed(2),null),p})()}en(["input","click"]);var VI=C('<button type=submit class="btn-gold w-full py-2.5 rounded-lg text-sm">Spremi promjene'),NI=C('<p class="text-green-400 text-xs text-center">✓ Promjene su spremljene'),DI=C('<div class="card-dark p-6 max-w-lg"><div class="flex items-center justify-between mb-6"><h2 class="section-title text-base">Osobni podaci</h2><button class="text-xs text-aurum-gold border border-aurum-gold px-3 py-1.5 rounded hover:bg-aurum-gold hover:text-aurum-black transition-all"></button></div><form class=space-y-4>'),OI=C('<p class="text-aurum-muted text-sm">Nemaš još narudžbi.'),LI=C('<div class=space-y-4><h2 class="section-title text-base mb-4">Povijest narudžbi'),MI=C('<div class="card-dark p-10 text-center"><p class="text-aurum-muted mb-3">Lista želja je prazna.'),UI=C('<div><h2 class="section-title text-base mb-4">♥ Lista želja</h2><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">'),FI=C('<div class="card-dark p-6 max-w-lg"><h2 class="section-title text-base mb-4">Adrese dostave</h2><div class="border border-aurum-gold rounded-lg p-4 mb-4"><div class="flex items-center justify-between mb-2"><span class="text-xs badge-exclusive">Zadana</span></div><p class="text-aurum-text text-sm"></p><p class="text-aurum-muted text-sm">Ilica 1, Zagreb, 10000, Croatia</p></div><button class="text-aurum-gold text-xs border border-aurum-border px-4 py-2 rounded hover:border-aurum-gold transition-colors">+ Dodaj novu adresu'),jI=C('<div class="card-dark p-6 max-w-lg"><h2 class="section-title text-base mb-6">Sigurnost</h2><div class=space-y-4><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Trenutna lozinka</label><input type=password class="input-dark w-full px-4 py-2.5 text-sm"placeholder=••••••••></div><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Nova lozinka</label><input type=password class="input-dark w-full px-4 py-2.5 text-sm"placeholder=••••••••></div><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Potvrdi novu lozinku</label><input type=password class="input-dark w-full px-4 py-2.5 text-sm"placeholder=••••••••></div><button class="btn-gold w-full py-2.5 rounded-lg text-sm">Promijeni lozinku</button></div><div class="mt-6 pt-6 border-t border-aurum-border"><button class="text-red-400 text-sm hover:text-red-300 transition-colors">Odjava s računa →'),zI=C('<div class="min-h-screen bg-aurum-black"><div class="max-w-5xl mx-auto px-4 py-10 page-enter"><div class="flex items-center gap-4 mb-8"><div class="w-16 h-16 bg-aurum-gold rounded-full flex items-center justify-center"><span class="text-aurum-black font-display font-black text-2xl"></span></div><div><h1 class="font-display text-2xl font-bold text-white"></h1><p class="text-aurum-muted text-sm"></p><span></span></div></div><div class="flex border-b border-aurum-border mb-8 overflow-x-auto">'),BI=C("<button>"),qI=C('<div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5"></label><input type=text>'),WI=C('<div class="card-dark p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"><div><p class="font-bold text-aurum-gold">#</p><p class="text-aurum-muted text-sm"></p><p class="text-aurum-muted text-xs"></p></div><div class=text-right><p class="text-aurum-gold font-bold">$</p><span>'),KI=C('<div class="aspect-square overflow-hidden bg-aurum-dark relative"><img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"><button class="absolute top-2 right-2 w-8 h-8 bg-aurum-black/70 rounded-full flex items-center justify-center text-red-400 hover:bg-red-900/50 transition-colors">♥'),HI=C('<div class=p-3><p class="text-xs font-display text-aurum-text"></p><p class="text-aurum-gold text-sm font-bold mt-1">$');function GI(){const n=mn(),[e,t]=Q("profile"),[r,s]=Q(!1),[i,o]=Q(!1);if(!dn())return n("/login"),null;Gs(()=>{el(),Pp(),Kt().length===0&&Bn()});const[l,c]=Q({name:mt()?.name||"",email:mt()?.email||"",phone:"",address:""});async function h(w){w.preventDefault();try{await OE({name:l().name,address:l().address}),o(!0),s(!1),setTimeout(()=>o(!1),2e3)}catch(x){console.error("Greška pri ažuriranju:",x)}}const f=["profile","orders","wishlist","addresses","security"],m={profile:"Profil",orders:"Narudžbe",wishlist:"♥ Lista želja",addresses:"Adrese",security:"Sigurnost"};return(()=>{var w=zI(),x=w.firstChild,N=x.firstChild,P=N.firstChild,$=P.firstChild,D=P.nextSibling,S=D.firstChild,M=S.nextSibling,U=M.nextSibling,K=N.nextSibling;return _(w,k(Ba,{}),x),_($,()=>mt()?.name?.charAt(0)),_(S,()=>mt()?.name),_(M,()=>mt()?.email),_(U,()=>mt()?.role==="admin"?"Administrator":"Korisnik"),_(K,()=>f.map(V=>(()=>{var b=BI();return b.$$click=()=>t(V),_(b,()=>m[V]),z(()=>Ie(b,`px-5 py-3 text-sm font-display tracking-wider whitespace-nowrap transition-colors ${e()===V?"text-aurum-gold border-b-2 border-aurum-gold":"text-aurum-muted hover:text-aurum-text"}`)),b})())),_(x,k(ee,{get when(){return e()==="profile"},get children(){var V=DI(),b=V.firstChild,y=b.firstChild,v=y.nextSibling,T=b.nextSibling;return v.$$click=()=>s(!r()),_(v,()=>r()?"Odustani":"Uredi"),T.addEventListener("submit",h),_(T,()=>[{key:"name",label:"Ime i prezime"},{key:"email",label:"Email"},{key:"phone",label:"Telefon"},{key:"address",label:"Adresa"}].map(E=>(()=>{var I=qI(),p=I.firstChild,j=p.nextSibling;return _(p,()=>E.label),j.$$input=re=>c({...l(),[E.key]:re.target.value}),z(re=>{var Ae=!r(),Oe=`input-dark w-full px-4 py-2.5 text-sm ${r()?"":"opacity-60 cursor-not-allowed"}`;return Ae!==re.e&&(j.disabled=re.e=Ae),Oe!==re.t&&Ie(j,re.t=Oe),re},{e:void 0,t:void 0}),z(()=>j.value=l()[E.key]),I})()),null),_(T,k(ee,{get when(){return r()},get children(){return VI()}}),null),_(T,k(ee,{get when(){return i()},get children(){return NI()}}),null),V}}),null),_(x,k(ee,{get when(){return e()==="orders"},get children(){var V=LI();return V.firstChild,_(V,k(ee,{get when(){return Ur().length===0},get children(){return OI()}}),null),_(V,k(at,{get each(){return Ur()},children:b=>(()=>{var y=WI(),v=y.firstChild,T=v.firstChild;T.firstChild;var E=T.nextSibling,I=E.nextSibling,p=v.nextSibling,j=p.firstChild;j.firstChild;var re=j.nextSibling;return _(T,()=>b.id?.slice(0,8).toUpperCase(),null),_(E,()=>b.items?.map(Ae=>Ae.name).join(", ")||"Artikli"),_(I,()=>b.shippingAddress?.city||""),_(j,()=>Number(b.total||0).toFixed(2),null),_(re,()=>b.status||"Processing"),z(()=>Ie(re,`text-xs px-2 py-0.5 rounded-full ${b.status==="Delivered"?"bg-green-900 text-green-400":b.status==="Processing"?"bg-yellow-900 text-yellow-400":b.status==="Shipped"?"bg-blue-900 text-blue-400":"bg-aurum-dark text-aurum-muted"}`)),y})()}),null),V}}),null),_(x,k(ee,{get when(){return e()==="wishlist"},get children(){var V=UI(),b=V.firstChild,y=b.nextSibling;return _(V,k(ee,{get when(){return ga().length===0},get children(){var v=MI();return v.firstChild,_(v,k(we,{href:"/catalog",class:"btn-gold px-6 py-2.5 rounded-lg text-sm inline-block",children:"Istraži katalog"}),null),v}}),y),_(y,k(at,{get each(){return Kt().filter(v=>ga().includes(v.id))},children:v=>k(we,{get href(){return`/product/${v.id}`},class:"card-dark overflow-hidden group hover:border-aurum-gold transition-all duration-300",get children(){return[(()=>{var T=KI(),E=T.firstChild,I=E.nextSibling;return I.$$click=async p=>{p.preventDefault(),await $p(v.id)},z(p=>{var j=v.images?.[0],re=v.name;return j!==p.e&&He(E,"src",p.e=j),re!==p.t&&He(E,"alt",p.t=re),p},{e:void 0,t:void 0}),T})(),(()=>{var T=HI(),E=T.firstChild,I=E.nextSibling;return I.firstChild,_(E,()=>v.name),_(I,()=>v.price?.toLocaleString(),null),T})()]}})})),V}}),null),_(x,k(ee,{get when(){return e()==="addresses"},get children(){var V=FI(),b=V.firstChild,y=b.nextSibling,v=y.firstChild,T=v.nextSibling;return _(T,()=>mt()?.name),V}}),null),_(x,k(ee,{get when(){return e()==="security"},get children(){var V=jI(),b=V.firstChild,y=b.nextSibling,v=y.nextSibling,T=v.firstChild;return T.$$click=()=>{Mr(),n("/login")},V}}),null),_(w,k(nu,{}),null),z(()=>Ie(U,`text-xs px-2 py-0.5 rounded-full mt-1 inline-block ${mt()?.role==="admin"?"bg-aurum-gold text-aurum-black font-bold":"bg-aurum-dark border border-aurum-border text-aurum-muted"}`)),w})()}en(["click","input"]);var QI=C('<div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">'),JI=C('<div class="grid grid-cols-1 xl:grid-cols-3 gap-6"><div class="xl:col-span-2 card-dark p-5"><h2 class="section-title text-base mb-4">Najnovije transakcije</h2><div class=space-y-3></div></div><div class=space-y-4><div class="card-dark p-5"><h3 class="section-title text-sm mb-4">Brze radnje</h3><div class=space-y-2><button class="flex items-center gap-2 border border-aurum-border text-aurum-text text-sm px-4 py-2.5 rounded w-full hover:border-aurum-gold transition-colors">🏷 Kreiraj promociju</button><button class="flex items-center gap-2 border border-aurum-border text-aurum-text text-sm px-4 py-2.5 rounded w-full hover:border-aurum-gold transition-colors">👥 Upravljaj ulogama</button></div></div><div class="card-dark p-5"><div class="flex items-center justify-between mb-3"><h3 class="section-title text-sm">Revizijski trag</h3><span class="text-xs text-aurum-muted"> events</span></div><div class=space-y-3>'),XI=C('<p class="text-aurum-muted text-sm">Sve zalihe su uredne.'),YI=C('<div class="card-dark p-5 mt-6"><h2 class="section-title text-base mb-4">Artikli koji trebaju dopunu'),ZI=C('<h2 class="section-title mb-6">Sve narudžbe'),eA=C('<p class="text-aurum-muted text-sm text-center py-10">Nema narudžbi.'),Ih=C('<div class="card-dark p-5">'),tA=C('<h2 class="section-title mb-6">Korisnici'),nA=C('<p class="text-aurum-muted text-sm text-center py-10 animate-pulse">Učitavanje korisnika...'),rA=C('<p class="text-aurum-muted text-sm text-center py-10">Nema korisnika.'),sA=C('<h2 class="section-title mb-6">Promocije i kuponi'),iA=C('<div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="card-dark p-6"><h3 class="text-aurum-gold font-display text-sm font-bold uppercase tracking-widest mb-4">Aktivni kuponi</h3><div class=space-y-3><div class="flex items-center justify-between p-3 bg-aurum-dark rounded-lg border border-aurum-border"><div><p class="text-aurum-gold font-bold font-mono">AURUM10</p><p class="text-aurum-muted text-xs">10% popust · Samo prijavljeni</p></div><span class="text-green-400 text-xs bg-green-900/30 px-2 py-0.5 rounded-full">Aktivan</span></div></div></div><div class="card-dark p-6"><h3 class="text-aurum-gold font-display text-sm font-bold uppercase tracking-widest mb-4">Dodaj novi kupon</h3><div class=space-y-3><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Kod kupona</label><input type=text placeholder="npr. SUMMER20"class="input-dark w-full px-4 py-2.5 text-sm"></div><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Popust (%)</label><input type=number placeholder=10 class="input-dark w-full px-4 py-2.5 text-sm"></div><button class="btn-gold w-full py-2.5 rounded text-sm">Kreiraj kupon'),aA=C('<h2 class="section-title mb-6">Postavke'),oA=C('<div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="card-dark p-6"><h3 class="text-aurum-gold font-display text-sm font-bold uppercase tracking-widest mb-4">Lozinka za ulaz</h3><p class="text-aurum-muted text-xs mb-4">Promijeni lozinku koja se traži na Password Gate stranici.</p><div class=space-y-3><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Nova lozinka</label><input type=text placeholder=nova-lozinka class="input-dark w-full px-4 py-2.5 text-sm"></div><button class="btn-gold w-full py-2.5 rounded text-sm">Spremi lozinku</button></div></div><div class="card-dark p-6"><h3 class="text-aurum-gold font-display text-sm font-bold uppercase tracking-widest mb-4">Session postavke</h3><p class="text-aurum-muted text-xs mb-4">Trenutno preostalo: <span></span></p><button class="btn-gold w-full py-2.5 rounded text-sm mb-3">+ Produži session za 15 min</button><button class="w-full border border-red-500/30 text-red-400 py-2.5 rounded text-sm hover:bg-red-900/20 transition-colors">Odjavi se odmah</button></div><div class="card-dark p-6"><h3 class="text-aurum-gold font-display text-sm font-bold uppercase tracking-widest mb-4">Informacije o shopu</h3><div class=space-y-3><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Naziv shopa</label><input type=text value=AurumVault class="input-dark w-full px-4 py-2.5 text-sm"></div><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Email za kontakt</label><input type=email value=contact@aurumvault.com class="input-dark w-full px-4 py-2.5 text-sm"></div><button class="btn-gold w-full py-2.5 rounded text-sm">Spremi postavke</button></div></div><div class="card-dark p-6"><h3 class="text-aurum-gold font-display text-sm font-bold uppercase tracking-widest mb-4">Administracija</h3><div class=space-y-3><div class="flex items-center justify-between py-2 border-b border-aurum-border"><span class="text-sm text-aurum-text">Maintenance mode</span><div class="w-8 h-4 bg-aurum-muted rounded-full cursor-pointer hover:bg-aurum-gold transition-colors"></div></div><div class="flex items-center justify-between py-2 border-b border-aurum-border"><span class="text-sm text-aurum-text">Password Gate</span><div class="w-8 h-4 bg-aurum-gold rounded-full cursor-pointer"></div></div><div class="flex items-center justify-between py-2"><span class="text-sm text-aurum-text">Members only mode</span><div class="w-8 h-4 bg-aurum-muted rounded-full cursor-pointer hover:bg-aurum-gold transition-colors">'),lA=C('<p class="text-xs text-red-400 mb-2 animate-pulse">⚠ Session uskoro ističe!'),uA=C('<div class="min-h-screen bg-aurum-black flex flex-col"><div class="bg-aurum-dark border-b border-aurum-border px-4 py-2 flex items-center justify-between text-xs flex-wrap gap-2"><div class="flex items-center gap-3 flex-wrap"><div class="flex items-center gap-2"><div class="w-6 h-6 bg-aurum-gold rounded-full flex items-center justify-center"><span class="text-aurum-black font-black text-xs">A</span></div><span class="font-display font-bold text-aurum-gold tracking-widest hidden sm:block">AurumVault</span></div><span class="text-red-400 border border-red-400/30 px-2 py-0.5 rounded">🔒 Sigurno admin područje</span><span class="text-aurum-muted hidden md:block">Dvofaktorska provjera: Aktivna</span><span>Session active • Expires in <span class=font-bold></span></span></div><div class="flex items-center gap-4"><div class=text-right><p class="text-aurum-text font-bold"></p><p class="text-aurum-gold text-xs">Uloga: Super Administrator</p></div><button class="border border-aurum-border text-aurum-muted px-3 py-1 rounded hover:border-red-400 hover:text-red-400 transition-colors">Logout</button></div></div><div class="flex flex-1 overflow-hidden"><aside class="w-48 bg-aurum-dark border-r border-aurum-border flex flex-col p-4 flex-shrink-0"><div class="text-xs text-aurum-muted uppercase tracking-widest mb-3">Navigation <span class=text-aurum-gold>v1.3</span></div><div class="mt-6 pt-4 border-t border-aurum-border"><div class="text-xs text-aurum-muted uppercase tracking-widest mb-2">Security</div><div class="flex items-center gap-2 text-xs text-green-400 mb-3"><span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>Revizijski trag uživo</div><div class="text-xs text-aurum-muted uppercase tracking-widest mb-2">Quick Role Controls</div></div></aside><main class="flex-1 overflow-y-auto p-6"></main><div class="w-48 bg-aurum-dark border-l border-aurum-border p-4 hidden xl:block flex-shrink-0"><h4 class="text-xs text-aurum-muted uppercase tracking-widest mb-3">Role-Based Controls</h4><div class="mt-6 pt-4 border-t border-aurum-border card-dark p-3"><h4 class="text-xs text-aurum-muted uppercase tracking-widest mb-2">Istek sesije</h4><p class="text-xs text-aurum-muted leading-relaxed mb-3">Ističe za: <span></span></p><div class="flex flex-col gap-2"><button class="btn-gold py-1.5 rounded text-xs">Produži sesiju</button><button class="border border-aurum-border text-aurum-muted py-1.5 rounded text-xs hover:border-red-400 hover:text-red-400 transition-colors">Odjavi se odmah'),cA=C("<button><span></span> "),hA=C('<div class="flex items-center justify-between mb-2"><span class="text-xs text-aurum-text"></span><div>'),dA=C('<div class="card-dark p-5 flex items-start justify-between"><div><p class="text-aurum-muted text-xs uppercase tracking-widest"></p><p></p><p class="text-aurum-muted text-xs mt-1"></p></div><span class=text-2xl>'),fA=C('<p class="text-aurum-muted text-sm text-center py-6">Nema narudžbi'),pA=C('<div class="flex items-center gap-3 py-3 border-b border-aurum-border last:border-0"><div class="w-10 h-10 bg-aurum-muted rounded flex items-center justify-center text-xs flex-shrink-0">📦</div><div class="flex-1 min-w-0"><p class="text-aurum-text text-sm font-bold truncate">Order #</p><p class="text-aurum-muted text-xs"></p></div><span class="text-aurum-gold font-bold text-sm">$</span><select class="input-dark text-xs px-2 py-1 rounded flex-shrink-0">'),Ah=C("<option>"),mA=C('<div><p class=leading-relaxed></p><p class="text-aurum-muted mt-0.5">'),gA=C('<img alt class="w-full h-full object-cover">'),_A=C('<div class="flex items-center gap-4 py-3 border-b border-aurum-border last:border-0"><div class="w-10 h-10 rounded overflow-hidden flex-shrink-0 bg-aurum-muted"></div><div class=flex-1><p class="text-aurum-text text-sm font-medium"></p><p class="text-aurum-muted text-xs">SKU: <!> · <!> jedinica</p></div><span>'),yA=C('<div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 py-4 border-b border-aurum-border last:border-0"><div class="flex-1 min-w-0"><p class="text-aurum-gold font-bold font-mono text-sm">#</p><p class="text-aurum-text text-sm"></p><p class="text-aurum-muted text-xs">, </p><p class="text-aurum-muted text-xs mt-1">Artikli: </p></div><div class="flex items-center gap-3 flex-shrink-0"><span class="text-aurum-gold font-bold">$</span><select class="input-dark text-xs px-2 py-1.5 rounded">'),vA=C('<div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 py-4 border-b border-aurum-border last:border-0"><div class="w-10 h-10 bg-aurum-gold rounded-full flex items-center justify-center flex-shrink-0"><span class="text-aurum-black font-bold"></span></div><div class="flex-1 min-w-0"><p class="text-aurum-text text-sm font-bold"></p><p class="text-aurum-muted text-xs"></p><p class="text-aurum-muted text-xs">UID: <!>...</p></div><div class="flex items-center gap-2 flex-shrink-0"><span></span><select class="input-dark text-xs px-2 py-1.5 rounded"><option value=user>user</option><option value=admin>admin'),bA=C('<div class="flex items-center justify-between mb-3"><span class="text-xs text-aurum-text leading-tight pr-2"></span><div>');function wA(){const n=mn(),[e,t]=Q("dashboard");if(!di())return n("/login"),null;const r=1*60,[s,i]=Q(r),[o,l]=Q(!1);function c(U){const K=Math.floor(U/60),V=U%60;return`${K}m ${String(V).padStart(2,"0")}s`}const h=setInterval(()=>{i(U=>U<=1?(clearInterval(h),Mr().then(()=>n("/login")),0):(U<=60&&l(!0),U-1))},1e3);ya(()=>clearInterval(h));function f(){i(U=>U+15*60),l(!1)}Gs(()=>{el(),Bn()});const[m,w]=Q([]),[x,N]=Q(!1);async function P(){N(!0);try{const U=await Fa(kn(lt,"users"));w(U.docs.map(K=>({id:K.id,...K.data()})))}catch(U){console.error(U)}N(!1)}async function $(U,K){await ts(Wt(lt,"orders",U),{status:K}),await el()}async function D(U,K){await ts(Wt(lt,"users",U),{role:K}),await P()}const S=[{key:"dashboard",icon:"📊",label:"Dashboard"},{key:"orders",icon:"📦",label:"Orders"},{key:"customers",icon:"👥",label:"Customers"},{key:"promotions",icon:"🏷",label:"Promotions"},{key:"settings",icon:"⚙",label:"Settings"}],M=[{text:`${mt()?.name} logged in`,time:"Just now",type:"info"},{text:"Promjena uloge: Leila Morgan postala Menadžer",time:"28 Feb 2026 · 0:01",type:"warning"},{text:"Sustav: Blokiran neuspjeli pokušaj prijave (3 attempts)",time:"28 Feb 2026 · 03:05",type:"error"}];return(()=>{var U=uA(),K=U.firstChild,V=K.firstChild,b=V.firstChild,y=b.nextSibling,v=y.nextSibling,T=v.nextSibling,E=T.firstChild,I=E.nextSibling,p=V.nextSibling,j=p.firstChild,re=j.firstChild,Ae=j.nextSibling,Oe=K.nextSibling,Ue=Oe.firstChild,Ge=Ue.firstChild,Be=Ge.nextSibling,Ye=Be.firstChild,St=Ye.nextSibling;St.nextSibling;var Ze=Ue.nextSibling,_t=Ze.nextSibling,Vt=_t.firstChild,yt=Vt.nextSibling,ct=yt.firstChild,vt=ct.nextSibling,Ee=vt.firstChild,Pe=Ee.nextSibling,et=vt.nextSibling,ht=et.firstChild,Et=ht.nextSibling;return _(I,()=>c(s())),_(V,k(we,{href:"/catalog",class:"text-aurum-muted border border-aurum-border px-2 py-0.5 rounded hover:border-aurum-gold hover:text-aurum-gold transition-colors",children:"← Na stranicu"}),null),_(re,()=>mt()?.name),Ae.$$click=()=>Mr().then(()=>n("/login")),_(Ue,k(at,{each:S,children:ae=>(()=>{var J=cA(),F=J.firstChild;return F.nextSibling,J.$$click=()=>{t(ae.key),ae.key==="customers"&&P()},_(F,()=>ae.icon),_(J,()=>ae.label,null),z(()=>Ie(J,`flex items-center gap-2 px-3 py-2.5 rounded text-sm mb-1 transition-colors w-full text-left ${e()===ae.key?"bg-aurum-gold text-aurum-black font-bold":"text-aurum-muted hover:text-aurum-text hover:bg-aurum-card"}`)),J})()}),Be),_(Be,()=>[{role:"Manager",active:!0},{role:"Auditor",active:!1}].map(ae=>(()=>{var J=hA(),F=J.firstChild,W=F.nextSibling;return _(F,()=>ae.role),z(()=>Ie(W,`w-8 h-4 rounded-full cursor-pointer ${ae.active?"bg-aurum-gold":"bg-aurum-muted"}`)),J})()),null),_(Ze,k(ee,{get when(){return e()==="dashboard"},get children(){return[(()=>{var ae=QI();return _(ae,()=>[{label:"Prodaja danas",value:"$18,742",change:"+8.6% vs yesterday",icon:"💰",color:"text-aurum-gold"},{label:"Narudžbe na čekanju",value:Ur().filter(J=>J.status==="Processing").length||"0",change:"U obradi",icon:"📦",color:"text-yellow-400"},{label:"Upozorenja zaliha",value:Kt().filter(J=>J.stock<=3).length||"0",change:"Niska zaliha",icon:"⚠",color:"text-red-400"}].map(J=>(()=>{var F=dA(),W=F.firstChild,Z=W.firstChild,Y=Z.nextSibling,B=Y.nextSibling,he=W.nextSibling;return _(Z,()=>J.label),_(Y,()=>J.value),_(B,()=>J.change),_(he,()=>J.icon),z(()=>Ie(Y,`font-display text-2xl font-bold mt-1 ${J.color}`)),F})())),ae})(),(()=>{var ae=JI(),J=ae.firstChild,F=J.firstChild,W=F.nextSibling,Z=J.nextSibling,Y=Z.firstChild,B=Y.firstChild,he=B.nextSibling,oe=he.firstChild,Se=oe.nextSibling,me=Y.nextSibling,ge=me.firstChild,be=ge.firstChild,ke=be.nextSibling,tt=ke.firstChild,nt=ge.nextSibling;return _(W,k(at,{get each(){return Ur().slice(0,5)},get fallback(){return fA()},children:Ne=>(()=>{var Fe=pA(),dt=Fe.firstChild,Qe=dt.nextSibling,H=Qe.firstChild;H.firstChild;var se=H.nextSibling,le=Qe.nextSibling;le.firstChild;var ne=le.nextSibling;return _(H,()=>Ne.id?.slice(0,8).toUpperCase(),null),_(se,()=>Ne.shippingAddress?.fullName||"Gost"),_(le,()=>Number(Ne.total||0).toFixed(2),null),ne.addEventListener("change",_e=>$(Ne.id,_e.target.value)),_(ne,()=>["U obradi","Čeka pripremu","Poslano","Dostavljeno","Otkazano"].map(_e=>(()=>{var Ce=Ah();return Ce.value=_e,_(Ce,_e),Ce})())),z(()=>ne.value=Ne.status||"U obradi"),Fe})()})),_(he,k(we,{href:"/admin/products/new",class:"flex items-center gap-2 bg-aurum-gold text-aurum-black text-sm font-bold px-4 py-2.5 rounded w-full hover:bg-yellow-300 transition-colors",children:"+ Dodaj novi proizvod"}),oe),oe.$$click=()=>t("promotions"),Se.$$click=()=>{t("customers"),P()},_(ke,()=>M.length,tt),_(nt,()=>M.map(Ne=>(()=>{var Fe=mA(),dt=Fe.firstChild,Qe=dt.nextSibling;return _(dt,()=>Ne.text),_(Qe,()=>Ne.time),z(()=>Ie(Fe,`text-xs border-l-2 pl-3 ${Ne.type==="error"?"border-red-500 text-red-400":Ne.type==="warning"?"border-yellow-500 text-yellow-400":"border-aurum-gold text-aurum-text"}`)),Fe})())),ae})(),(()=>{var ae=YI();return ae.firstChild,_(ae,k(ee,{get when(){return Kt().filter(J=>J.stock<=5).length===0},get children(){return XI()}}),null),_(ae,k(at,{get each(){return Kt().filter(J=>J.stock<=5)},children:J=>(()=>{var F=_A(),W=F.firstChild,Z=W.nextSibling,Y=Z.firstChild,B=Y.nextSibling,he=B.firstChild,oe=he.nextSibling,Se=oe.nextSibling,me=Se.nextSibling;me.nextSibling;var ge=Z.nextSibling;return _(W,k(ee,{get when(){return J.images?.[0]},get children(){var be=gA();return z(()=>He(be,"src",J.images[0])),be}})),_(Y,()=>J.name),_(B,()=>J.sku,oe),_(B,()=>J.stock,me),_(ge,()=>J.stock<=2?"KRITIČNO":"NISKO"),_(F,k(we,{get href(){return`/admin/products/edit/${J.id}`},class:"text-xs text-aurum-gold border border-aurum-gold px-2 py-1 rounded hover:bg-aurum-gold hover:text-aurum-black transition-all",children:"Uredi"}),null),z(()=>Ie(ge,`text-xs font-bold px-2 py-0.5 rounded-full ${J.stock<=2?"text-red-400 bg-red-900/30":"text-yellow-400 bg-yellow-900/30"}`)),F})()}),null),ae})()]}}),null),_(Ze,k(ee,{get when(){return e()==="orders"},get children(){return[ZI(),(()=>{var ae=Ih();return _(ae,k(ee,{get when(){return Ur().length===0},get children(){return eA()}}),null),_(ae,k(at,{get each(){return Ur()},children:J=>(()=>{var F=yA(),W=F.firstChild,Z=W.firstChild;Z.firstChild;var Y=Z.nextSibling,B=Y.nextSibling,he=B.firstChild,oe=B.nextSibling;oe.firstChild;var Se=W.nextSibling,me=Se.firstChild;me.firstChild;var ge=me.nextSibling;return _(Z,()=>J.id?.slice(0,8).toUpperCase(),null),_(Y,()=>J.shippingAddress?.fullName||"Gost"),_(B,()=>J.shippingAddress?.address,he),_(B,()=>J.shippingAddress?.city,null),_(oe,()=>J.items?.map(be=>`${be.name} x${be.quantity}`).join(", ")||"—",null),_(me,()=>Number(J.total||0).toFixed(2),null),ge.addEventListener("change",be=>$(J.id,be.target.value)),_(ge,()=>["U obradi","Čeka pripremu","Poslano","Dostavljeno","Otkazano"].map(be=>(()=>{var ke=Ah();return ke.value=be,_(ke,be),ke})())),z(()=>ge.value=J.status||"U obradi"),F})()}),null),ae})()]}}),null),_(Ze,k(ee,{get when(){return e()==="customers"},get children(){return[tA(),(()=>{var ae=Ih();return _(ae,k(ee,{get when(){return x()},get children(){return nA()}}),null),_(ae,k(ee,{get when(){return Xe(()=>!x())()&&m().length===0},get children(){return rA()}}),null),_(ae,k(at,{get each(){return m()},children:J=>(()=>{var F=vA(),W=F.firstChild,Z=W.firstChild,Y=W.nextSibling,B=Y.firstChild,he=B.nextSibling,oe=he.nextSibling,Se=oe.firstChild,me=Se.nextSibling;me.nextSibling;var ge=Y.nextSibling,be=ge.firstChild,ke=be.nextSibling;return _(Z,()=>J.name?.charAt(0)||"?"),_(B,()=>J.name||"Bez imena"),_(he,()=>J.email),_(oe,()=>J.id?.slice(0,12),me),_(be,()=>J.role||"user"),ke.addEventListener("change",tt=>D(J.id,tt.target.value)),z(()=>Ie(be,`text-xs px-2 py-0.5 rounded-full ${J.role==="admin"?"bg-aurum-gold text-aurum-black font-bold":"bg-aurum-dark text-aurum-muted border border-aurum-border"}`)),z(()=>ke.value=J.role||"user"),F})()}),null),ae})()]}}),null),_(Ze,k(ee,{get when(){return e()==="promotions"},get children(){return[sA(),iA()]}}),null),_(Ze,k(ee,{get when(){return e()==="settings"},get children(){return[aA(),(()=>{var ae=oA(),J=ae.firstChild,F=J.nextSibling,W=F.firstChild,Z=W.nextSibling,Y=Z.firstChild,B=Y.nextSibling,he=Z.nextSibling,oe=he.nextSibling;return _(B,()=>c(s())),he.$$click=f,oe.$$click=()=>Mr().then(()=>n("/login")),z(()=>Ie(B,`font-bold ${o()?"text-red-400":"text-aurum-gold"}`)),ae})()]}}),null),_(_t,()=>[{label:"Odobrenje uređivanja proizvoda",active:!0},{label:"Dozvola kreiranja promocija",active:!1}].map(ae=>(()=>{var J=bA(),F=J.firstChild,W=F.nextSibling;return _(F,()=>ae.label),z(()=>Ie(W,`w-8 h-4 rounded-full flex-shrink-0 cursor-pointer ${ae.active?"bg-aurum-gold":"bg-aurum-muted"}`)),J})()),yt),_(Pe,()=>c(s())),_(yt,k(ee,{get when(){return o()},get children(){return lA()}}),et),ht.$$click=f,Et.$$click=()=>Mr().then(()=>n("/login")),z(ae=>{var J=`font-medium ${o()?"text-red-400 animate-pulse":"text-green-400"}`,F=`font-bold ${o()?"text-red-400 animate-pulse":"text-aurum-gold"}`;return J!==ae.e&&Ie(T,ae.e=J),F!==ae.t&&Ie(Pe,ae.t=F),ae},{e:void 0,t:void 0}),U})()}en(["click"]);var xA=C('<div class="w-6 h-6 bg-aurum-gold rounded-full flex items-center justify-center"><span class="text-aurum-black font-black text-xs">A'),EA=C('<span class="font-display font-bold text-aurum-gold tracking-widest hidden sm:block">AurumVault'),TA=C('<div class="border-2 border-dashed border-aurum-border rounded-lg p-8 text-center text-aurum-muted text-sm">Dodaj URL slike gore ↑'),IA=C('<div class="bg-red-900/30 border border-red-500 rounded-lg p-3 text-red-400 text-xs">⚠ '),AA=C('<div class="bg-green-900/30 border border-green-500 rounded-lg p-3 text-green-400 text-xs">✓ Proizvod je spremljen kao draft.'),SA=C('<img alt class="w-full h-full object-cover">'),kA=C('<span class="badge-exclusive mb-2 inline-block">'),CA=C('<button class="w-full border border-red-500/30 text-red-400 py-2.5 rounded text-sm hover:bg-red-900/20 transition-colors disabled:opacity-50">'),RA=C('<div class="min-h-screen bg-aurum-black"><div class="bg-aurum-dark border-b border-aurum-border px-4 py-3 flex items-center justify-between"><div class="flex items-center gap-4 text-sm"><span class=text-aurum-muted>›</span><span class=text-aurum-muted>›</span><span class="text-aurum-text text-xs"></span></div></div><div class="max-w-7xl mx-auto px-4 py-8"><div class="flex items-center gap-4 mb-8"><h1 class="font-display text-2xl font-bold text-white"></h1><span class="text-xs border border-yellow-500 text-yellow-500 px-2 py-0.5 rounded">⚠ Provjera uključena</span></div><div class="grid grid-cols-1 xl:grid-cols-3 gap-8"><div class="xl:col-span-2 space-y-6"><div class="card-dark p-6"><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Naziv proizvoda <span class=text-red-400>*</span></label><input type=text class="input-dark w-full px-4 py-3 text-sm font-medium"placeholder="Unesi naziv proizvoda"></div><div class="card-dark p-6"><div class="grid grid-cols-2 gap-4"><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">SKU</label><input type=text class="input-dark w-full px-4 py-2.5 text-sm"placeholder=AV-XXX-000></div><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Cijena (USD) <span class=text-red-400>*</span></label><input type=number class="input-dark w-full px-4 py-2.5 text-sm"placeholder=0></div><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Cijena na rasprodaji</label><input type=number class="input-dark w-full px-4 py-2.5 text-sm"placeholder="Ostavi prazno ako nema"></div><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Zaliha</label><input type=number class="input-dark w-full px-4 py-2.5 text-sm"placeholder=0></div></div></div><div class="card-dark p-6"><div class="grid grid-cols-1 sm:grid-cols-2 gap-6"><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-2">Tagovi / Badge</label><div class="flex flex-wrap gap-2 mb-3"></div><input type=text placeholder="Dodaj tag i pritisni Enter"class="input-dark w-full px-4 py-2.5 text-sm"></div><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-2">Primarna kategorija</label><select class="input-dark w-full px-3 py-2.5 text-sm"></select><label class="flex items-center gap-2 mt-4 cursor-pointer"><input type=checkbox class="checkbox checkbox-warning checkbox-sm"><span class="text-sm text-aurum-text">Samo za članove</span></label></div></div></div><div class="card-dark p-6"><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-2">Opis proizvoda</label><textarea rows=5 class="input-dark w-full px-4 py-3 text-sm resize-none"placeholder="Opiši proizvod s detaljima, materijalima..."></textarea></div><div class="card-dark p-6"><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-3">Slike (URL)</label><div class="flex gap-2 mb-4"><input type=url placeholder="https://... URL slike"class="input-dark flex-1 px-4 py-2.5 text-sm"><button class="btn-gold px-4 py-2.5 text-sm rounded">Dodaj</button></div><div class="grid grid-cols-3 gap-3"></div></div></div><div class=space-y-4><div class="card-dark p-4"><h3 class="text-xs text-aurum-muted uppercase tracking-widest mb-3">Preview</h3><div class="bg-aurum-dark rounded-lg overflow-hidden"><div class="aspect-square bg-aurum-muted flex items-center justify-center overflow-hidden"></div><div class=p-3><p class="text-aurum-text text-xs font-medium"></p><p class="text-aurum-muted text-xs"></p><div class="flex items-center gap-2 mt-1"><span class="text-aurum-gold font-bold text-sm">$</span></div></div></div></div><div class="card-dark p-4 space-y-3"><button class="w-full border border-aurum-border text-aurum-text py-2.5 rounded text-sm hover:border-aurum-gold transition-colors disabled:opacity-50"></button><button class="w-full btn-gold py-2.5 rounded text-sm disabled:opacity-50"></button></div><div class="card-dark p-4 text-xs text-aurum-muted space-y-2"><p>📦 Kategorija: <span class=text-aurum-text></span></p><p>👥 Samo članovi: <span class=text-aurum-text></span></p><p>🖼 Slike: <span class=text-aurum-text>'),PA=C('<span class="badge-exclusive flex items-center gap-1"><button class="hover:text-red-300 ml-1">×'),$A=C("<option>"),VA=C('<div class="relative group"><img alt class="w-full aspect-square object-cover rounded border border-aurum-border"><button class="absolute top-1 right-1 bg-red-600 text-white w-5 h-5 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity">×'),NA=C('<p class="text-aurum-muted text-xs">Nema slike'),DA=C('<span class="text-aurum-muted text-xs line-through">$');function Sh(){const n=Kh(),e=mn(),t=!!n.id;if(!di())return e("/login"),null;const[r,s]=Q(!1),[i,o]=Q(!1),[l,c]=Q(!1),[h,f]=Q(!1),[m,w]=Q(""),[x,N]=Q({title:"",sku:"",price:"",salePrice:"",inventory:"",description:"",tags:[],primaryCat:"Accessories",images:[],membersOnly:!1});Gs(async()=>{if(t){Kt().length===0&&await Bn();const V=Kt().find(b=>b.id===n.id);V&&N({title:V.name||"",sku:V.sku||"",price:V.price||"",salePrice:V.salePrice||"",inventory:V.stock||"",description:V.description||"",tags:V.badge?[V.badge]:[],primaryCat:V.category||"Accessories",images:V.images||[],membersOnly:V.membersOnly||!1})}});async function P(){f(!0),w("");try{const V=S();t?await ts(Wt(lt,"products",n.id),V):await ma(kn(lt,"products"),{...V,createdAt:Wr()}),s(!0),await Bn(),setTimeout(()=>s(!1),2e3)}catch(V){w("Greška pri spremanju: "+V.message)}f(!1)}async function $(){f(!0),w("");try{const V={...S(),published:!0};t?await ts(Wt(lt,"products",n.id),V):await ma(kn(lt,"products"),{...V,createdAt:Wr()}),o(!0),await Bn(),setTimeout(()=>e("/admin"),1500)}catch(V){w("Greška pri objavi: "+V.message)}f(!1)}async function D(){if(confirm("Jesi li siguran/na da želiš obrisati ovaj proizvod?")){c(!0);try{await SE(Wt(lt,"products",n.id)),await Bn(),e("/admin")}catch(V){w("Greška pri brisanju: "+V.message)}c(!1)}}function S(){return{name:x().title,sku:x().sku,price:Number(x().price)||0,salePrice:x().salePrice?Number(x().salePrice):null,stock:Number(x().inventory)||0,description:x().description,badge:x().tags[0]||null,category:x().primaryCat,images:x().images,membersOnly:x().membersOnly,sizes:[],updatedAt:Wr()}}const[M,U]=Q("");function K(){M().trim()&&(N({...x(),images:[...x().images,M().trim()]}),U(""))}return(()=>{var V=RA(),b=V.firstChild,y=b.firstChild,v=y.firstChild,T=v.nextSibling,E=T.nextSibling,I=b.nextSibling,p=I.firstChild,j=p.firstChild,re=p.nextSibling,Ae=re.firstChild,Oe=Ae.firstChild,Ue=Oe.firstChild,Ge=Ue.nextSibling,Be=Oe.nextSibling,Ye=Be.firstChild,St=Ye.firstChild,Ze=St.firstChild,_t=Ze.nextSibling,Vt=St.nextSibling,yt=Vt.firstChild,ct=yt.nextSibling,vt=Vt.nextSibling,Ee=vt.firstChild,Pe=Ee.nextSibling,et=vt.nextSibling,ht=et.firstChild,Et=ht.nextSibling,ae=Be.nextSibling,J=ae.firstChild,F=J.firstChild,W=F.firstChild,Z=W.nextSibling,Y=Z.nextSibling,B=F.nextSibling,he=B.firstChild,oe=he.nextSibling,Se=oe.nextSibling,me=Se.firstChild,ge=ae.nextSibling,be=ge.firstChild,ke=be.nextSibling,tt=ge.nextSibling,nt=tt.firstChild,Ne=nt.nextSibling,Fe=Ne.firstChild,dt=Fe.nextSibling,Qe=Ne.nextSibling,H=Ae.nextSibling,se=H.firstChild,le=se.firstChild,ne=le.nextSibling,_e=ne.firstChild,Ce=_e.nextSibling,$e=Ce.firstChild,Nt=$e.nextSibling,Le=Nt.nextSibling,or=Le.firstChild;or.firstChild;var jt=se.nextSibling,Dt=jt.firstChild,tn=Dt.nextSibling,lr=jt.nextSibling,gn=lr.firstChild,qa=gn.firstChild,Wa=qa.nextSibling,ur=gn.nextSibling,fi=ur.firstChild,pi=fi.nextSibling,cs=ur.nextSibling,cr=cs.firstChild,Ka=cr.nextSibling;return _(y,k(we,{href:"/admin",class:"flex items-center gap-2",get children(){return[xA(),EA()]}}),v),_(y,k(we,{href:"/admin",class:"text-aurum-muted hover:text-aurum-gold text-xs",children:"Admin"}),T),_(E,t?"Uredi proizvod":"Novi proizvod"),_(b,k(we,{href:"/admin",class:"text-xs text-aurum-muted hover:text-aurum-gold transition-colors",children:"← Nazad"}),null),_(j,t?"Uredi proizvod":"Dodaj novi proizvod"),Ge.$$input=te=>N({...x(),title:te.target.value}),_t.$$input=te=>N({...x(),sku:te.target.value}),ct.$$input=te=>N({...x(),price:te.target.value}),Pe.$$input=te=>N({...x(),salePrice:te.target.value}),Et.$$input=te=>N({...x(),inventory:te.target.value}),_(Z,k(at,{get each(){return x().tags},children:te=>(()=>{var ft=PA(),Ht=ft.firstChild;return _(ft,te,Ht),Ht.$$click=()=>N({...x(),tags:x().tags.filter($n=>$n!==te)}),ft})()})),Y.$$keydown=te=>{te.key==="Enter"&&te.target.value.trim()&&(N({...x(),tags:[...x().tags,te.target.value.trim()]}),te.target.value="",te.preventDefault())},oe.addEventListener("change",te=>N({...x(),primaryCat:te.target.value})),_(oe,()=>["Rings","Necklaces","Watches","Accessories","Art Objects"].map(te=>(()=>{var ft=$A();return ft.value=te,_(ft,te),ft})())),me.addEventListener("change",te=>N({...x(),membersOnly:te.target.checked})),ke.$$input=te=>N({...x(),description:te.target.value}),Fe.$$input=te=>U(te.target.value),dt.$$click=K,_(Qe,k(at,{get each(){return x().images},children:(te,ft)=>(()=>{var Ht=VA(),$n=Ht.firstChild,hs=$n.nextSibling;return He($n,"src",te),hs.$$click=()=>N({...x(),images:x().images.filter((Ha,Ga)=>Ga!==ft())}),Ht})()})),_(tt,k(ee,{get when(){return x().images.length===0},get children(){return TA()}}),null),_(H,k(ee,{get when(){return m()},get children(){var te=IA();return te.firstChild,_(te,m,null),te}}),se),_(H,k(ee,{get when(){return r()},get children(){return AA()}}),se),_(_e,k(ee,{get when(){return x().images[0]},get fallback(){return NA()},get children(){var te=SA();return z(()=>He(te,"src",x().images[0])),te}})),_(Ce,k(ee,{get when(){return x().tags.length>0},get children(){var te=kA();return _(te,()=>x().tags[0]),te}}),$e),_($e,()=>x().title||"Naziv proizvoda"),_(Nt,()=>x().sku),_(or,()=>x().salePrice||x().price||"0",null),_(Le,(()=>{var te=Xe(()=>!!x().salePrice);return()=>te()&&(()=>{var ft=DA();return ft.firstChild,_(ft,()=>x().price,null),ft})()})(),null),Dt.$$click=P,_(Dt,()=>h()?"Sprema...":"💾 Spremi draft"),tn.$$click=$,_(tn,(()=>{var te=Xe(()=>!!i());return()=>te()?"✓ Objavljeno!":h()?"Objavljuje...":"🚀 Objavi"})()),_(jt,k(ee,{when:t,get children(){var te=CA();return te.$$click=D,_(te,()=>l()?"Briše...":"🗑 Obriši proizvod"),z(()=>te.disabled=l()),te}}),null),_(Wa,()=>x().primaryCat),_(pi,()=>x().membersOnly?"Da":"Ne"),_(Ka,()=>x().images.length),z(te=>{var ft=h(),Ht=h();return ft!==te.e&&(Dt.disabled=te.e=ft),Ht!==te.t&&(tn.disabled=te.t=Ht),te},{e:void 0,t:void 0}),z(()=>Ge.value=x().title),z(()=>_t.value=x().sku),z(()=>ct.value=x().price),z(()=>Pe.value=x().salePrice),z(()=>Et.value=x().inventory),z(()=>oe.value=x().primaryCat),z(()=>me.checked=x().membersOnly),z(()=>ke.value=x().description),z(()=>Fe.value=M()),V})()}en(["input","keydown","click"]);function OA(){return k(ag,{get children(){return[k(sn,{path:"/",component:GE}),k(sn,{path:"/catalog",component:IT}),k(sn,{path:"/product/:id",component:HT}),k(sn,{path:"/login",component:lI}),k(sn,{path:"/checkout",component:Th}),k(sn,{path:"/cart",component:Th}),k(sn,{path:"/profile",component:GI}),k(sn,{path:"/admin",component:wA}),k(sn,{path:"/admin/products/new",component:Sh}),k(sn,{path:"/admin/products/edit/:id",component:Sh})]}})}vm(()=>k(OA,{}),document.getElementById("root"));
