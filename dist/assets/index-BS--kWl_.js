(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const Qp=!1,Jp=(n,e)=>n===e,ji=Symbol("solid-proxy"),Ah=typeof Proxy=="function",Xp=Symbol("solid-track"),Bi={equals:Jp};let Sh=Dh;const er=1,zi=2,kh={owned:null,cleanups:null,context:null,owner:null};var Se=null;let oa=null,Yp=null,Ne=null,It=null,yn=null,go=0;function ks(n,e){const t=Ne,r=Se,s=n.length===0,i=e===void 0?r:e,a=s?kh:{owned:null,cleanups:null,context:i?i.context:null,owner:i},l=s?n:()=>n(()=>Lt(()=>Ds(a)));Se=a,Ne=null;try{return tr(l,!0)}finally{Ne=t,Se=r}}function H(n,e){e=e?Object.assign({},Bi,e):Bi;const t={value:n,observers:null,observerSlots:null,comparator:e.equals||void 0},r=s=>(typeof s=="function"&&(s=s(t.value)),Nh(t,s));return[Vh.bind(t),r]}function q(n,e,t){const r=nl(n,e,!1,er);Gs(r)}function Ch(n,e,t){Sh=rm;const r=nl(n,e,!1,er);r.user=!0,yn?yn.push(r):Gs(r)}function ke(n,e,t){t=t?Object.assign({},Bi,t):Bi;const r=nl(n,e,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=t.equals||void 0,Gs(r),Vh.bind(r)}function Zp(n){return tr(n,!1)}function Lt(n){if(Ne===null)return n();const e=Ne;Ne=null;try{return n()}finally{Ne=e}}function Za(n,e,t){const r=Array.isArray(n);let s,i=t&&t.defer;return a=>{let l;if(r){l=Array(n.length);for(let h=0;h<n.length;h++)l[h]=n[h]()}else l=n();if(i)return i=!1,a;const u=Lt(()=>e(l,s,a));return s=l,u}}function Hs(n){Ch(()=>Lt(n))}function _o(n){return Se===null||(Se.cleanups===null?Se.cleanups=[n]:Se.cleanups.push(n)),n}function Rh(){return Se}function Ph(n,e){const t=Se,r=Ne;Se=n,Ne=null;try{return tr(e,!0)}catch(s){rl(s)}finally{Se=t,Ne=r}}function em(n){const e=Ne,t=Se;return Promise.resolve().then(()=>{Ne=e,Se=t;let r;return tr(n,!1),Ne=Se=null,r?r.done:void 0})}const[xA,EA]=H(!1);function $h(n,e){const t=Symbol("context");return{id:t,Provider:im(t),defaultValue:n}}function el(n){let e;return Se&&Se.context&&(e=Se.context[n.id])!==void 0?e:n.defaultValue}function tl(n){const e=ke(n),t=ke(()=>xa(e()));return t.toArray=()=>{const r=t();return Array.isArray(r)?r:r!=null?[r]:[]},t}function Vh(){if(this.sources&&this.state)if(this.state===er)Gs(this);else{const n=It;It=null,tr(()=>Wi(this),!1),It=n}if(Ne){const n=this.observers?this.observers.length:0;Ne.sources?(Ne.sources.push(this),Ne.sourceSlots.push(n)):(Ne.sources=[this],Ne.sourceSlots=[n]),this.observers?(this.observers.push(Ne),this.observerSlots.push(Ne.sources.length-1)):(this.observers=[Ne],this.observerSlots=[Ne.sources.length-1])}return this.value}function Nh(n,e,t){let r=n.value;return(!n.comparator||!n.comparator(r,e))&&(n.value=e,n.observers&&n.observers.length&&tr(()=>{for(let s=0;s<n.observers.length;s+=1){const i=n.observers[s],a=oa&&oa.running;a&&oa.disposed.has(i),(a?!i.tState:!i.state)&&(i.pure?It.push(i):yn.push(i),i.observers&&Oh(i)),a||(i.state=er)}if(It.length>1e6)throw It=[],new Error},!1)),e}function Gs(n){if(!n.fn)return;Ds(n);const e=go;tm(n,n.value,e)}function tm(n,e,t){let r;const s=Se,i=Ne;Ne=Se=n;try{r=n.fn(e)}catch(a){return n.pure&&(n.state=er,n.owned&&n.owned.forEach(Ds),n.owned=null),n.updatedAt=t+1,rl(a)}finally{Ne=i,Se=s}(!n.updatedAt||n.updatedAt<=t)&&(n.updatedAt!=null&&"observers"in n?Nh(n,r):n.value=r,n.updatedAt=t)}function nl(n,e,t,r=er,s){const i={fn:n,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:Se,context:Se?Se.context:null,pure:t};return Se===null||Se!==kh&&(Se.owned?Se.owned.push(i):Se.owned=[i]),i}function qi(n){if(n.state===0)return;if(n.state===zi)return Wi(n);if(n.suspense&&Lt(n.suspense.inFallback))return n.suspense.effects.push(n);const e=[n];for(;(n=n.owner)&&(!n.updatedAt||n.updatedAt<go);)n.state&&e.push(n);for(let t=e.length-1;t>=0;t--)if(n=e[t],n.state===er)Gs(n);else if(n.state===zi){const r=It;It=null,tr(()=>Wi(n,e[0]),!1),It=r}}function tr(n,e){if(It)return n();let t=!1;e||(It=[]),yn?t=!0:yn=[],go++;try{const r=n();return nm(t),r}catch(r){t||(yn=null),It=null,rl(r)}}function nm(n){if(It&&(Dh(It),It=null),n)return;const e=yn;yn=null,e.length&&tr(()=>Sh(e),!1)}function Dh(n){for(let e=0;e<n.length;e++)qi(n[e])}function rm(n){let e,t=0;for(e=0;e<n.length;e++){const r=n[e];r.user?n[t++]=r:qi(r)}for(e=0;e<t;e++)qi(n[e])}function Wi(n,e){n.state=0;for(let t=0;t<n.sources.length;t+=1){const r=n.sources[t];if(r.sources){const s=r.state;s===er?r!==e&&(!r.updatedAt||r.updatedAt<go)&&qi(r):s===zi&&Wi(r,e)}}}function Oh(n){for(let e=0;e<n.observers.length;e+=1){const t=n.observers[e];t.state||(t.state=zi,t.pure?It.push(t):yn.push(t),t.observers&&Oh(t))}}function Ds(n){let e;if(n.sources)for(;n.sources.length;){const t=n.sources.pop(),r=n.sourceSlots.pop(),s=t.observers;if(s&&s.length){const i=s.pop(),a=t.observerSlots.pop();r<s.length&&(i.sourceSlots[a]=r,s[r]=i,t.observerSlots[r]=a)}}if(n.tOwned){for(e=n.tOwned.length-1;e>=0;e--)Ds(n.tOwned[e]);delete n.tOwned}if(n.owned){for(e=n.owned.length-1;e>=0;e--)Ds(n.owned[e]);n.owned=null}if(n.cleanups){for(e=n.cleanups.length-1;e>=0;e--)n.cleanups[e]();n.cleanups=null}n.state=0}function sm(n){return n instanceof Error?n:new Error(typeof n=="string"?n:"Unknown error",{cause:n})}function rl(n,e=Se){throw sm(n)}function xa(n){if(typeof n=="function"&&!n.length)return xa(n());if(Array.isArray(n)){const e=[];for(let t=0;t<n.length;t++){const r=xa(n[t]);Array.isArray(r)?e.push.apply(e,r):e.push(r)}return e}return n}function im(n,e){return function(r){let s;return q(()=>s=Lt(()=>(Se.context={...Se.context,[n]:r.value},tl(()=>r.children))),void 0),s}}const om=Symbol("fallback");function Dc(n){for(let e=0;e<n.length;e++)n[e]()}function am(n,e,t={}){let r=[],s=[],i=[],a=0,l=e.length>1?[]:null;return _o(()=>Dc(i)),()=>{let u=n()||[],h=u.length,f,m;return u[Xp],Lt(()=>{let E,$,R,C,V,S,M,U,Y;if(h===0)a!==0&&(Dc(i),i=[],r=[],s=[],a=0,l&&(l=[])),t.fallback&&(r=[om],s[0]=ks(D=>(i[0]=D,t.fallback())),a=1);else if(a===0){for(s=new Array(h),m=0;m<h;m++)r[m]=u[m],s[m]=ks(x);a=h}else{for(R=new Array(h),C=new Array(h),l&&(V=new Array(h)),S=0,M=Math.min(a,h);S<M&&r[S]===u[S];S++);for(M=a-1,U=h-1;M>=S&&U>=S&&r[M]===u[U];M--,U--)R[U]=s[M],C[U]=i[M],l&&(V[U]=l[M]);for(E=new Map,$=new Array(U+1),m=U;m>=S;m--)Y=u[m],f=E.get(Y),$[m]=f===void 0?-1:f,E.set(Y,m);for(f=S;f<=M;f++)Y=r[f],m=E.get(Y),m!==void 0&&m!==-1?(R[m]=s[f],C[m]=i[f],l&&(V[m]=l[f]),m=$[m],E.set(Y,m)):i[f]();for(m=S;m<h;m++)m in R?(s[m]=R[m],i[m]=C[m],l&&(l[m]=V[m],l[m](m))):s[m]=ks(x);s=s.slice(0,a=h),r=u.slice(0)}return s});function x(E){if(i[m]=E,l){const[$,R]=H(m);return l[m]=R,e(u[m],$)}return e(u[m])}}}function P(n,e){return Lt(()=>n(e||{}))}function Ei(){return!0}const Ea={get(n,e,t){return e===ji?t:n.get(e)},has(n,e){return e===ji?!0:n.has(e)},set:Ei,deleteProperty:Ei,getOwnPropertyDescriptor(n,e){return{configurable:!0,enumerable:!0,get(){return n.get(e)},set:Ei,deleteProperty:Ei}},ownKeys(n){return n.keys()}};function aa(n){return(n=typeof n=="function"?n():n)?n:{}}function lm(){for(let n=0,e=this.length;n<e;++n){const t=this[n]();if(t!==void 0)return t}}function Ta(...n){let e=!1;for(let a=0;a<n.length;a++){const l=n[a];e=e||!!l&&ji in l,n[a]=typeof l=="function"?(e=!0,ke(l)):l}if(Ah&&e)return new Proxy({get(a){for(let l=n.length-1;l>=0;l--){const u=aa(n[l])[a];if(u!==void 0)return u}},has(a){for(let l=n.length-1;l>=0;l--)if(a in aa(n[l]))return!0;return!1},keys(){const a=[];for(let l=0;l<n.length;l++)a.push(...Object.keys(aa(n[l])));return[...new Set(a)]}},Ea);const t={},r=Object.create(null);for(let a=n.length-1;a>=0;a--){const l=n[a];if(!l)continue;const u=Object.getOwnPropertyNames(l);for(let h=u.length-1;h>=0;h--){const f=u[h];if(f==="__proto__"||f==="constructor")continue;const m=Object.getOwnPropertyDescriptor(l,f);if(!r[f])r[f]=m.get?{enumerable:!0,configurable:!0,get:lm.bind(t[f]=[m.get.bind(l)])}:m.value!==void 0?m:void 0;else{const x=t[f];x&&(m.get?x.push(m.get.bind(l)):m.value!==void 0&&x.push(()=>m.value))}}}const s={},i=Object.keys(r);for(let a=i.length-1;a>=0;a--){const l=i[a],u=r[l];u&&u.get?Object.defineProperty(s,l,u):s[l]=u?u.value:void 0}return s}function cm(n,...e){const t=e.length;if(Ah&&ji in n){const s=t>1?e.flat():e[0],i=e.map(a=>new Proxy({get(l){return a.includes(l)?n[l]:void 0},has(l){return a.includes(l)&&l in n},keys(){return a.filter(l=>l in n)}},Ea));return i.push(new Proxy({get(a){return s.includes(a)?void 0:n[a]},has(a){return s.includes(a)?!1:a in n},keys(){return Object.keys(n).filter(a=>!s.includes(a))}},Ea)),i}const r=[];for(let s=0;s<=t;s++)r[s]={};for(const s of Object.getOwnPropertyNames(n)){let i=t;for(let u=0;u<e.length;u++)if(e[u].includes(s)){i=u;break}const a=Object.getOwnPropertyDescriptor(n,s);!a.get&&!a.set&&a.enumerable&&a.writable&&a.configurable?r[i][s]=a.value:Object.defineProperty(r[i],s,a)}return r}const um=n=>`Stale read from <${n}>.`;function Rt(n){const e="fallback"in n&&{fallback:()=>n.fallback};return ke(am(()=>n.each,n.children,e||void 0))}function te(n){const e=n.keyed,t=ke(()=>n.when,void 0,void 0),r=e?t:ke(t,void 0,{equals:(s,i)=>!s==!i});return ke(()=>{const s=r();if(s){const i=n.children;return typeof i=="function"&&i.length>0?Lt(()=>i(e?s:()=>{if(!Lt(r))throw um("Show");return t()})):i}return n.fallback},void 0,void 0)}const hm=["allowfullscreen","async","alpha","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected","adauctionheaders","browsingtopics","credentialless","defaultchecked","defaultmuted","defaultselected","defer","disablepictureinpicture","disableremoteplayback","preservespitch","shadowrootclonable","shadowrootcustomelementregistry","shadowrootdelegatesfocus","shadowrootserializable","sharedstoragewritable"],dm=new Set(["className","value","readOnly","noValidate","formNoValidate","isMap","noModule","playsInline","adAuctionHeaders","allowFullscreen","browsingTopics","defaultChecked","defaultMuted","defaultSelected","disablePictureInPicture","disableRemotePlayback","preservesPitch","shadowRootClonable","shadowRootCustomElementRegistry","shadowRootDelegatesFocus","shadowRootSerializable","sharedStorageWritable",...hm]),fm=new Set(["innerHTML","textContent","innerText","children"]),pm=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),mm=Object.assign(Object.create(null),{class:"className",novalidate:{$:"noValidate",FORM:1},formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1},adauctionheaders:{$:"adAuctionHeaders",IFRAME:1},allowfullscreen:{$:"allowFullscreen",IFRAME:1},browsingtopics:{$:"browsingTopics",IMG:1},defaultchecked:{$:"defaultChecked",INPUT:1},defaultmuted:{$:"defaultMuted",AUDIO:1,VIDEO:1},defaultselected:{$:"defaultSelected",OPTION:1},disablepictureinpicture:{$:"disablePictureInPicture",VIDEO:1},disableremoteplayback:{$:"disableRemotePlayback",AUDIO:1,VIDEO:1},preservespitch:{$:"preservesPitch",AUDIO:1,VIDEO:1},shadowrootclonable:{$:"shadowRootClonable",TEMPLATE:1},shadowrootdelegatesfocus:{$:"shadowRootDelegatesFocus",TEMPLATE:1},shadowrootserializable:{$:"shadowRootSerializable",TEMPLATE:1},sharedstoragewritable:{$:"sharedStorageWritable",IFRAME:1,IMG:1}});function gm(n,e){const t=mm[n];return typeof t=="object"?t[e]?t.$:void 0:t}const _m=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),rt=n=>ke(()=>n());function ym(n,e,t){let r=t.length,s=e.length,i=r,a=0,l=0,u=e[s-1].nextSibling,h=null;for(;a<s||l<i;){if(e[a]===t[l]){a++,l++;continue}for(;e[s-1]===t[i-1];)s--,i--;if(s===a){const f=i<r?l?t[l-1].nextSibling:t[i-l]:u;for(;l<i;)n.insertBefore(t[l++],f)}else if(i===l)for(;a<s;)(!h||!h.has(e[a]))&&e[a].remove(),a++;else if(e[a]===t[i-1]&&t[l]===e[s-1]){const f=e[--s].nextSibling;n.insertBefore(t[l++],e[a++].nextSibling),n.insertBefore(t[--i],f),e[s]=t[i]}else{if(!h){h=new Map;let m=l;for(;m<i;)h.set(t[m],m++)}const f=h.get(e[a]);if(f!=null)if(l<f&&f<i){let m=a,x=1,E;for(;++m<s&&m<i&&!((E=h.get(e[m]))==null||E!==f+x);)x++;if(x>f-l){const $=e[a];for(;l<f;)n.insertBefore(t[l++],$)}else n.replaceChild(t[l++],e[a++])}else a++;else e[a++].remove()}}}const Oc="_$DX_DELEGATE";function vm(n,e,t,r={}){let s;return ks(i=>{s=i,e===document?n():y(e,n(),e.firstChild?null:void 0,t)},r.owner),()=>{s(),e.textContent=""}}function N(n,e,t,r){let s;const i=()=>{const l=document.createElement("template");return l.innerHTML=n,l.content.firstChild},a=()=>(s||(s=i())).cloneNode(!0);return a.cloneNode=a,a}function Xt(n,e=window.document){const t=e[Oc]||(e[Oc]=new Set);for(let r=0,s=n.length;r<s;r++){const i=n[r];t.has(i)||(t.add(i),e.addEventListener(i,km))}}function ft(n,e,t){t==null?n.removeAttribute(e):n.setAttribute(e,t)}function bm(n,e,t){t?n.setAttribute(e,""):n.removeAttribute(e)}function Ae(n,e){e==null?n.removeAttribute("class"):n.className=e}function wm(n,e,t,r){if(r)Array.isArray(t)?(n[`$$${e}`]=t[0],n[`$$${e}Data`]=t[1]):n[`$$${e}`]=t;else if(Array.isArray(t)){const s=t[0];n.addEventListener(e,t[0]=i=>s.call(n,t[1],i))}else n.addEventListener(e,t,typeof t!="function"&&t)}function xm(n,e,t={}){const r=Object.keys(e||{}),s=Object.keys(t);let i,a;for(i=0,a=s.length;i<a;i++){const l=s[i];!l||l==="undefined"||e[l]||(Lc(n,l,!1),delete t[l])}for(i=0,a=r.length;i<a;i++){const l=r[i],u=!!e[l];!l||l==="undefined"||t[l]===u||!u||(Lc(n,l,!0),t[l]=u)}return t}function Em(n,e,t){if(!e)return t?ft(n,"style"):e;const r=n.style;if(typeof e=="string")return r.cssText=e;typeof t=="string"&&(r.cssText=t=void 0),t||(t={}),e||(e={});let s,i;for(i in t)e[i]==null&&r.removeProperty(i),delete t[i];for(i in e)s=e[i],s!==t[i]&&(r.setProperty(i,s),t[i]=s);return t}function Tm(n,e={},t,r){const s={};return q(()=>s.children=Os(n,e.children,s.children)),q(()=>typeof e.ref=="function"&&Im(e.ref,n)),q(()=>Am(n,e,t,!0,s,!0)),s}function Im(n,e,t){return Lt(()=>n(e,t))}function y(n,e,t,r){if(t!==void 0&&!r&&(r=[]),typeof e!="function")return Os(n,e,r,t);q(s=>Os(n,e(),s,t),r)}function Am(n,e,t,r,s={},i=!1){e||(e={});for(const a in s)if(!(a in e)){if(a==="children")continue;s[a]=Mc(n,a,null,s[a],t,i,e)}for(const a in e){if(a==="children")continue;const l=e[a];s[a]=Mc(n,a,l,s[a],t,i,e)}}function Sm(n){return n.toLowerCase().replace(/-([a-z])/g,(e,t)=>t.toUpperCase())}function Lc(n,e,t){const r=e.trim().split(/\s+/);for(let s=0,i=r.length;s<i;s++)n.classList.toggle(r[s],t)}function Mc(n,e,t,r,s,i,a){let l,u,h,f,m;if(e==="style")return Em(n,t,r);if(e==="classList")return xm(n,t,r);if(t===r)return r;if(e==="ref")i||t(n);else if(e.slice(0,3)==="on:"){const x=e.slice(3);r&&n.removeEventListener(x,r,typeof r!="function"&&r),t&&n.addEventListener(x,t,typeof t!="function"&&t)}else if(e.slice(0,10)==="oncapture:"){const x=e.slice(10);r&&n.removeEventListener(x,r,!0),t&&n.addEventListener(x,t,!0)}else if(e.slice(0,2)==="on"){const x=e.slice(2).toLowerCase(),E=_m.has(x);if(!E&&r){const $=Array.isArray(r)?r[0]:r;n.removeEventListener(x,$)}(E||t)&&(wm(n,x,t,E),E&&Xt([x]))}else e.slice(0,5)==="attr:"?ft(n,e.slice(5),t):e.slice(0,5)==="bool:"?bm(n,e.slice(5),t):(m=e.slice(0,5)==="prop:")||(h=fm.has(e))||(f=gm(e,n.tagName))||(u=dm.has(e))||(l=n.nodeName.includes("-")||"is"in a)?(m&&(e=e.slice(5),u=!0),e==="class"||e==="className"?Ae(n,t):l&&!u&&!h?n[Sm(e)]=t:n[f||e]=t):ft(n,pm[e]||e,t);return t}function km(n){let e=n.target;const t=`$$${n.type}`,r=n.target,s=n.currentTarget,i=u=>Object.defineProperty(n,"target",{configurable:!0,value:u}),a=()=>{const u=e[t];if(u&&!e.disabled){const h=e[`${t}Data`];if(h!==void 0?u.call(e,h,n):u.call(e,n),n.cancelBubble)return}return e.host&&typeof e.host!="string"&&!e.host._$host&&e.contains(n.target)&&i(e.host),!0},l=()=>{for(;a()&&(e=e._$host||e.parentNode||e.host););};if(Object.defineProperty(n,"currentTarget",{configurable:!0,get(){return e||document}}),n.composedPath){const u=n.composedPath();i(u[0]);for(let h=0;h<u.length-2&&(e=u[h],!!a());h++){if(e._$host){e=e._$host,l();break}if(e.parentNode===s)break}}else l();i(r)}function Os(n,e,t,r,s){for(;typeof t=="function";)t=t();if(e===t)return t;const i=typeof e,a=r!==void 0;if(n=a&&t[0]&&t[0].parentNode||n,i==="string"||i==="number"){if(i==="number"&&(e=e.toString(),e===t))return t;if(a){let l=t[0];l&&l.nodeType===3?l.data!==e&&(l.data=e):l=document.createTextNode(e),t=Cr(n,t,r,l)}else t!==""&&typeof t=="string"?t=n.firstChild.data=e:t=n.textContent=e}else if(e==null||i==="boolean")t=Cr(n,t,r);else{if(i==="function")return q(()=>{let l=e();for(;typeof l=="function";)l=l();t=Os(n,l,t,r)}),()=>t;if(Array.isArray(e)){const l=[],u=t&&Array.isArray(t);if(Ia(l,e,t,s))return q(()=>t=Os(n,l,t,r,!0)),()=>t;if(l.length===0){if(t=Cr(n,t,r),a)return t}else u?t.length===0?Uc(n,l,r):ym(n,t,l):(t&&Cr(n),Uc(n,l));t=l}else if(e.nodeType){if(Array.isArray(t)){if(a)return t=Cr(n,t,r,e);Cr(n,t,null,e)}else t==null||t===""||!n.firstChild?n.appendChild(e):n.replaceChild(e,n.firstChild);t=e}}return t}function Ia(n,e,t,r){let s=!1;for(let i=0,a=e.length;i<a;i++){let l=e[i],u=t&&t[n.length],h;if(!(l==null||l===!0||l===!1))if((h=typeof l)=="object"&&l.nodeType)n.push(l);else if(Array.isArray(l))s=Ia(n,l,u)||s;else if(h==="function")if(r){for(;typeof l=="function";)l=l();s=Ia(n,Array.isArray(l)?l:[l],Array.isArray(u)?u:[u])||s}else n.push(l),s=!0;else{const f=String(l);u&&u.nodeType===3&&u.data===f?n.push(u):n.push(document.createTextNode(f))}}return s}function Uc(n,e,t=null){for(let r=0,s=e.length;r<s;r++)n.insertBefore(e[r],t)}function Cr(n,e,t,r){if(t===void 0)return n.textContent="";const s=r||document.createTextNode("");if(e.length){let i=!1;for(let a=e.length-1;a>=0;a--){const l=e[a];if(s!==l){const u=l.parentNode===n;!i&&!a?u?n.replaceChild(s,l):n.insertBefore(s,t):u&&l.remove()}else i=!0}}else n.insertBefore(s,t);return[s]}const Cm=!1;function Lh(){let n=new Set;function e(s){return n.add(s),()=>n.delete(s)}let t=!1;function r(s,i){if(t)return!(t=!1);const a={to:s,options:i,defaultPrevented:!1,preventDefault:()=>a.defaultPrevented=!0};for(const l of n)l.listener({...a,from:l.location,retry:u=>{u&&(t=!0),l.navigate(s,{...i,resolve:!1})}});return!a.defaultPrevented}return{subscribe:e,confirm:r}}let Aa;function sl(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),Aa=window.history.state._depth}sl();function Rm(n){return{...n,_depth:window.history.state&&window.history.state._depth}}function Pm(n,e){let t=!1;return()=>{const r=Aa;sl();const s=r==null?null:Aa-r;if(t){t=!1;return}s&&e(s)?(t=!0,window.history.go(-s)):n()}}const $m=/^(?:[a-z0-9]+:)?\/\//i,Vm=/^\/+|(\/)\/+$/g,Mh="http://sr";function gr(n,e=!1){const t=n.replace(Vm,"$1");return t?e||/^[?#]/.test(t)?t:"/"+t:""}function Ri(n,e,t){if($m.test(e))return;const r=gr(n),s=t&&gr(t);let i="";return!s||e.startsWith("/")?i=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?i=r+s:i=s,(i||"/")+gr(e,!i)}function Nm(n,e){if(n==null)throw new Error(e);return n}function Dm(n,e){return gr(n).replace(/\/*(\*.*)?$/g,"")+gr(e)}function Uh(n){const e={};return n.searchParams.forEach((t,r)=>{e[r]=t}),e}function Om(n,e,t){const[r,s]=n.split("/*",2),i=r.split("/").filter(Boolean),a=i.length;return l=>{const u=l.split("/").filter(Boolean),h=u.length-a;if(h<0||h>0&&s===void 0&&!e)return null;const f={path:a?"":"/",params:{}},m=x=>t===void 0?void 0:t[x];for(let x=0;x<a;x++){const E=i[x],$=u[x],R=E[0]===":",C=R?E.slice(1):E;if(R&&la($,m(C)))f.params[C]=$;else if(R||!la($,E))return null;f.path+=`/${$}`}if(s){const x=h?u.slice(-h).join("/"):"";if(la(x,m(s)))f.params[s]=x;else return null}return f}}function la(n,e){const t=r=>r.localeCompare(n,void 0,{sensitivity:"base"})===0;return e===void 0?!0:typeof e=="string"?t(e):typeof e=="function"?e(n):Array.isArray(e)?e.some(t):e instanceof RegExp?e.test(n):!1}function Lm(n){const[e,t]=n.pattern.split("/*",2),r=e.split("/").filter(Boolean);return r.reduce((s,i)=>s+(i.startsWith(":")?2:3),r.length-(t===void 0?0:1))}function Fh(n){const e=new Map,t=Rh();return new Proxy({},{get(r,s){return e.has(s)||Ph(t,()=>e.set(s,ke(()=>n()[s]))),e.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(n())}})}function Mm(n,e){const t=new URLSearchParams(n);Object.entries(e).forEach(([s,i])=>{i==null||i===""?t.delete(s):t.set(s,String(i))});const r=t.toString();return r?`?${r}`:""}function jh(n){let e=/(\/?\:[^\/]+)\?/.exec(n);if(!e)return[n];let t=n.slice(0,e.index),r=n.slice(e.index+e[0].length);const s=[t,t+=e[1]];for(;e=/^(\/\:[^\/]+)\?/.exec(r);)s.push(t+=e[1]),r=r.slice(e[0].length);return jh(r).reduce((i,a)=>[...i,...s.map(l=>l+a)],[])}const Um=100,Bh=$h(),il=$h(),Qs=()=>Nm(el(Bh),"<A> and 'use' router primitives can be only used inside a Route."),Fm=()=>el(il)||Qs().base,jm=n=>{const e=Fm();return ke(()=>e.resolvePath(n()))},Bm=n=>{const e=Qs();return ke(()=>{const t=n();return t!==void 0?e.renderPath(t):t})},dn=()=>Qs().navigatorFactory(),zh=()=>Qs().location,qh=()=>Qs().params,zm=()=>{const n=zh(),e=dn(),t=(r,s)=>{const i=Lt(()=>n.pathname+Mm(n.search,r)+n.hash);e(i,{scroll:!1,resolve:!1,...s})};return[n.query,t]};function qm(n,e=""){const{component:t,load:r,children:s,info:i}=n,a=!s||Array.isArray(s)&&!s.length,l={key:n,component:t,load:r,info:i};return Wh(n.path).reduce((u,h)=>{for(const f of jh(h)){const m=Dm(e,f);let x=a?m:m.split("/*",1)[0];x=x.split("/").map(E=>E.startsWith(":")||E.startsWith("*")?E:encodeURIComponent(E)).join("/"),u.push({...l,originalPath:h,pattern:x,matcher:Om(x,!a,n.matchFilters)})}return u},[])}function Wm(n,e=0){return{routes:n,score:Lm(n[n.length-1])*1e4-e,matcher(t){const r=[];for(let s=n.length-1;s>=0;s--){const i=n[s],a=i.matcher(t);if(!a)return null;r.unshift({...a,route:i})}return r}}}function Wh(n){return Array.isArray(n)?n:[n]}function Kh(n,e="",t=[],r=[]){const s=Wh(n);for(let i=0,a=s.length;i<a;i++){const l=s[i];if(l&&typeof l=="object"){l.hasOwnProperty("path")||(l.path="");const u=qm(l,e);for(const h of u){t.push(h);const f=Array.isArray(l.children)&&l.children.length===0;if(l.children&&!f)Kh(l.children,h.pattern,t,r);else{const m=Wm([...t],r.length);r.push(m)}t.pop()}}}return t.length?r:r.sort((i,a)=>a.score-i.score)}function ca(n,e){for(let t=0,r=n.length;t<r;t++){const s=n[t].matcher(e);if(s)return s}return[]}function Km(n,e){const t=new URL(Mh),r=ke(u=>{const h=n();try{return new URL(h,t)}catch{return console.error(`Invalid path ${h}`),u}},t,{equals:(u,h)=>u.href===h.href}),s=ke(()=>r().pathname),i=ke(()=>r().search,!0),a=ke(()=>r().hash),l=()=>"";return{get pathname(){return s()},get search(){return i()},get hash(){return a()},get state(){return e()},get key(){return l()},query:Fh(Za(i,()=>Uh(r())))}}let pr;function Hm(){return pr}function Gm(n,e,t,r={}){const{signal:[s,i],utils:a={}}=n,l=a.parsePath||(p=>p),u=a.renderPath||(p=>p),h=a.beforeLeave||Lh(),f=Ri("",r.base||"");if(f===void 0)throw new Error(`${f} is not a valid base path`);f&&!s().value&&i({value:f,replace:!0,scroll:!1});const[m,x]=H(!1);let E;const $=(p,B)=>{B.value===R()&&B.state===V()||(E===void 0&&x(!0),pr=p,E=B,em(()=>{E===B&&(C(E.value),S(E.state),Y[1]([]))}).finally(()=>{E===B&&Zp(()=>{pr=void 0,p==="navigate"&&w(E),x(!1),E=void 0})}))},[R,C]=H(s().value),[V,S]=H(s().state),M=Km(R,V),U=[],Y=H([]),D=ke(()=>typeof r.transformUrl=="function"?ca(e(),r.transformUrl(M.pathname)):ca(e(),M.pathname)),b=Fh(()=>{const p=D(),B={};for(let Z=0;Z<p.length;Z++)Object.assign(B,p[Z].params);return B}),_={pattern:f,path:()=>f,outlet:()=>null,resolvePath(p){return Ri(f,p)}};return q(Za(s,p=>$("native",p),{defer:!0})),{base:_,location:M,params:b,isRouting:m,renderPath:u,parsePath:l,navigatorFactory:T,matches:D,beforeLeave:h,preloadRoute:I,singleFlight:r.singleFlight===void 0?!0:r.singleFlight,submissions:Y};function v(p,B,Z){Lt(()=>{if(typeof B=="number"){B&&(a.go?a.go(B):console.warn("Router integration does not support relative routing"));return}const{replace:Te,resolve:Re,scroll:Oe,state:je}={replace:!1,resolve:!0,scroll:!0,...Z},$e=Re?p.resolvePath(B):Ri("",B);if($e===void 0)throw new Error(`Path '${B}' is not a routable path`);if(U.length>=Um)throw new Error("Too many redirects");const Ye=R();($e!==Ye||je!==V())&&(Cm||h.confirm($e,Z)&&(U.push({value:Ye,replace:Te,scroll:Oe,state:V()}),$("navigate",{value:$e,state:je})))})}function T(p){return p=p||el(il)||_,(B,Z)=>v(p,B,Z)}function w(p){const B=U[0];B&&(i({...p,replace:B.replace,scroll:B.scroll}),U.length=0)}function I(p,B={}){const Z=ca(e(),p.pathname),Te=pr;pr="preload";for(let Re in Z){const{route:Oe,params:je}=Z[Re];Oe.component&&Oe.component.preload&&Oe.component.preload();const{load:$e}=Oe;B.preloadData&&$e&&Ph(t(),()=>$e({params:je,location:{pathname:p.pathname,search:p.search,hash:p.hash,query:Uh(p),state:null,key:""},intent:"preload"}))}pr=Te}}function Qm(n,e,t,r){const{base:s,location:i,params:a}=n,{pattern:l,component:u,load:h}=r().route,f=ke(()=>r().path);u&&u.preload&&u.preload();const m=h?h({params:a,location:i,intent:pr||"initial"}):void 0;return{parent:e,pattern:l,path:f,outlet:()=>u?P(u,{params:a,location:i,data:m,get children(){return t()}}):t(),resolvePath(E){return Ri(s.path(),E,f())}}}const Jm=n=>e=>{const{base:t}=e,r=tl(()=>e.children),s=ke(()=>Kh(r(),e.base||""));let i;const a=Gm(n,s,()=>i,{base:t,singleFlight:e.singleFlight,transformUrl:e.transformUrl});return n.create&&n.create(a),P(Bh.Provider,{value:a,get children(){return P(Xm,{routerState:a,get root(){return e.root},get load(){return e.rootLoad},get children(){return[rt(()=>(i=Rh())&&null),P(Ym,{routerState:a,get branches(){return s()}})]}})}})};function Xm(n){const e=n.routerState.location,t=n.routerState.params,r=ke(()=>n.load&&Lt(()=>{n.load({params:t,location:e,intent:Hm()||"initial"})}));return P(te,{get when(){return n.root},keyed:!0,get fallback(){return n.children},children:s=>P(s,{params:t,location:e,get data(){return r()},get children(){return n.children}})})}function Ym(n){const e=[];let t;const r=ke(Za(n.routerState.matches,(s,i,a)=>{let l=i&&s.length===i.length;const u=[];for(let h=0,f=s.length;h<f;h++){const m=i&&i[h],x=s[h];a&&m&&x.route.key===m.route.key?u[h]=a[h]:(l=!1,e[h]&&e[h](),ks(E=>{e[h]=E,u[h]=Qm(n.routerState,u[h-1]||n.routerState.base,Fc(()=>r()[h+1]),()=>n.routerState.matches()[h])}))}return e.splice(s.length).forEach(h=>h()),a&&l?a:(t=u[0],u)}));return Fc(()=>r()&&t)()}const Fc=n=>()=>P(te,{get when(){return n()},keyed:!0,children:e=>P(il.Provider,{value:e,get children(){return e.outlet()}})}),tn=n=>{const e=tl(()=>n.children);return Ta(n,{get children(){return e()}})};function Zm([n,e],t,r){return[n,r?s=>e(r(s)):e]}function eg(n){if(n==="#")return null;try{return document.querySelector(n)}catch{return null}}function tg(n){let e=!1;const t=s=>typeof s=="string"?{value:s}:s,r=Zm(H(t(n.get()),{equals:(s,i)=>s.value===i.value&&s.state===i.state}),void 0,s=>(!e&&n.set(s),s));return n.init&&_o(n.init((s=n.get())=>{e=!0,r[1](t(s)),e=!1})),Jm({signal:r,create:n.create,utils:n.utils})}function ng(n,e,t){return n.addEventListener(e,t),()=>n.removeEventListener(e,t)}function rg(n,e){const t=eg(`#${n}`);t?t.scrollIntoView():e&&window.scrollTo(0,0)}const sg=new Map;function ig(n=!0,e=!1,t="/_server",r){return s=>{const i=s.base.path(),a=s.navigatorFactory(s.base);let l={};function u(R){return R.namespaceURI==="http://www.w3.org/2000/svg"}function h(R){if(R.defaultPrevented||R.button!==0||R.metaKey||R.altKey||R.ctrlKey||R.shiftKey)return;const C=R.composedPath().find(D=>D instanceof Node&&D.nodeName.toUpperCase()==="A");if(!C||e&&!C.hasAttribute("link"))return;const V=u(C),S=V?C.href.baseVal:C.href;if((V?C.target.baseVal:C.target)||!S&&!C.hasAttribute("state"))return;const U=(C.getAttribute("rel")||"").split(/\s+/);if(C.hasAttribute("download")||U&&U.includes("external"))return;const Y=V?new URL(S,document.baseURI):new URL(S);if(!(Y.origin!==window.location.origin||i&&Y.pathname&&!Y.pathname.toLowerCase().startsWith(i.toLowerCase())))return[C,Y]}function f(R){const C=h(R);if(!C)return;const[V,S]=C,M=s.parsePath(S.pathname+S.search+S.hash),U=V.getAttribute("state");R.preventDefault(),a(M,{resolve:!1,replace:V.hasAttribute("replace"),scroll:!V.hasAttribute("noscroll"),state:U&&JSON.parse(U)})}function m(R){const C=h(R);if(!C)return;const[V,S]=C;typeof r=="function"&&(S.pathname=r(S.pathname)),l[S.pathname]||s.preloadRoute(S,{preloadData:V.getAttribute("preload")!=="false"})}function x(R){const C=h(R);if(!C)return;const[V,S]=C;typeof r=="function"&&(S.pathname=r(S.pathname)),!l[S.pathname]&&(l[S.pathname]=setTimeout(()=>{s.preloadRoute(S,{preloadData:V.getAttribute("preload")!=="false"}),delete l[S.pathname]},200))}function E(R){const C=h(R);if(!C)return;const[,V]=C;typeof r=="function"&&(V.pathname=r(V.pathname)),l[V.pathname]&&(clearTimeout(l[V.pathname]),delete l[V.pathname])}function $(R){if(R.defaultPrevented)return;let C=R.submitter&&R.submitter.hasAttribute("formaction")?R.submitter.getAttribute("formaction"):R.target.getAttribute("action");if(!C)return;if(!C.startsWith("https://action/")){const S=new URL(C,Mh);if(C=s.parsePath(S.pathname+S.search),!C.startsWith(t))return}if(R.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const V=sg.get(C);if(V){R.preventDefault();const S=new FormData(R.target);R.submitter&&R.submitter.name&&S.append(R.submitter.name,R.submitter.value),V.call({r:s,f:R.target},S)}}Xt(["click","submit"]),document.addEventListener("click",f),n&&(document.addEventListener("mouseover",x),document.addEventListener("mouseout",E),document.addEventListener("focusin",m),document.addEventListener("touchstart",m)),document.addEventListener("submit",$),_o(()=>{document.removeEventListener("click",f),n&&(document.removeEventListener("mouseover",x),document.removeEventListener("mouseout",E),document.removeEventListener("focusin",m),document.removeEventListener("touchstart",m)),document.removeEventListener("submit",$)})}}function og(n){const e=()=>{const r=window.location.pathname+window.location.search;return{value:n.transformUrl?n.transformUrl(r)+window.location.hash:r+window.location.hash,state:window.history.state}},t=Lh();return tg({get:e,set({value:r,replace:s,scroll:i,state:a}){s?window.history.replaceState(Rm(a),"",r):window.history.pushState(a,"",r),rg(decodeURIComponent(window.location.hash.slice(1)),i),sl()},init:r=>ng(window,"popstate",Pm(r,s=>{if(s&&s<0)return!t.confirm(s);{const i=e();return!t.confirm(i.value,{state:i.state})}})),create:ig(n.preload,n.explicitLinks,n.actionBase,n.transformUrl),utils:{go:r=>window.history.go(r),beforeLeave:t}})(n)}var ag=N("<a>");function Ee(n){n=Ta({inactiveClass:"inactive",activeClass:"active"},n);const[,e]=cm(n,["href","state","class","activeClass","inactiveClass","end"]),t=jm(()=>n.href),r=Bm(t),s=zh(),i=ke(()=>{const a=t();if(a===void 0)return[!1,!1];const l=gr(a.split(/[?#]/,1)[0]).toLowerCase(),u=gr(s.pathname).toLowerCase();return[n.end?l===u:u.startsWith(l+"/")||u===l,l===u]});return(()=>{var a=ag();return Tm(a,Ta(e,{get href(){return r()||n.href},get state(){return JSON.stringify(n.state)},get classList(){return{...n.class&&{[n.class]:!0},[n.inactiveClass]:!i()[0],[n.activeClass]:i()[0],...e.classList}},link:"",get"aria-current"(){return i()[1]?"page":void 0}}),!1),a})()}const lg=()=>{};var jc={};/**
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
 */const Hh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},cg=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Gh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,u=s+2<n.length,h=u?n[s+2]:0,f=i>>2,m=(i&3)<<4|l>>4;let x=(l&15)<<2|h>>6,E=h&63;u||(E=64,a||(x=64)),r.push(t[f],t[m],t[x],t[E])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Hh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):cg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||h==null||m==null)throw new ug;const x=i<<2|l>>4;if(r.push(x),h!==64){const E=l<<4&240|h>>2;if(r.push(E),m!==64){const $=h<<6&192|m;r.push($)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ug extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hg=function(n){const e=Hh(n);return Gh.encodeByteArray(e,!0)},Ki=function(n){return hg(n).replace(/\./g,"")},Qh=function(n){try{return Gh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const fg=()=>dg().__FIREBASE_DEFAULTS__,pg=()=>{if(typeof process>"u"||typeof jc>"u")return;const n=jc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},mg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Qh(n[1]);return e&&JSON.parse(e)},yo=()=>{try{return lg()||fg()||pg()||mg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Jh=n=>yo()?.emulatorHosts?.[n],gg=n=>{const e=Jh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Xh=()=>yo()?.config,Yh=n=>yo()?.[`_${n}`];/**
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
 */function yg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Ki(JSON.stringify(t)),Ki(JSON.stringify(a)),""].join(".")}/**
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
 */function At(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(At())}function bg(){const n=yo()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function wg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function xg(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Eg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Tg(){const n=At();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ig(){return!bg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ag(){try{return typeof indexedDB=="object"}catch{return!1}}function Sg(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
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
 */const kg="FirebaseError";class An extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=kg,Object.setPrototypeOf(this,An.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Js.prototype.create)}}class Js{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Cg(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new An(s,l,r)}}function Cg(n,e){return n.replace(Rg,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Rg=/\{\$([^}]+)}/g;function Pg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function wn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Bc(i)&&Bc(a)){if(!wn(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Bc(n){return n!==null&&typeof n=="object"}/**
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
 */function Xs(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xs(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Es(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function $g(n,e){const t=new Vg(n,e);return t.subscribe.bind(t)}class Vg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Ng(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=ua),s.error===void 0&&(s.error=ua),s.complete===void 0&&(s.complete=ua);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ng(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ua(){}/**
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
 */function pt(n){return n&&n._delegate?n._delegate:n}/**
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
 */function Ys(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Zh(n){return(await fetch(n,{credentials:"include"})).ok}class yr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const fr="[DEFAULT]";/**
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
 */class Dg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new _g;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Lg(e))try{this.getOrInitializeService({instanceIdentifier:fr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=fr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fr){return this.instances.has(e)}getOptions(e=fr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Og(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=fr){return this.component?this.component.multipleInstances?e:fr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Og(n){return n===fr?void 0:n}function Lg(n){return n.instantiationMode==="EAGER"}/**
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
 */var ye;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ye||(ye={}));const Ug={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},Fg=ye.INFO,jg={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},Bg=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=jg[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ol{constructor(e){this.name=e,this._logLevel=Fg,this._logHandler=Bg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ug[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const zg=(n,e)=>e.some(t=>n instanceof t);let zc,qc;function qg(){return zc||(zc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Wg(){return qc||(qc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ed=new WeakMap,Sa=new WeakMap,td=new WeakMap,ha=new WeakMap,al=new WeakMap;function Kg(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(jn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&ed.set(t,n)}).catch(()=>{}),al.set(e,n),e}function Hg(n){if(Sa.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Sa.set(n,e)}let ka={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Sa.get(n);if(e==="objectStoreNames")return n.objectStoreNames||td.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return jn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Gg(n){ka=n(ka)}function Qg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(da(this),e,...t);return td.set(r,e.sort?e.sort():[e]),jn(r)}:Wg().includes(n)?function(...e){return n.apply(da(this),e),jn(ed.get(this))}:function(...e){return jn(n.apply(da(this),e))}}function Jg(n){return typeof n=="function"?Qg(n):(n instanceof IDBTransaction&&Hg(n),zg(n,qg())?new Proxy(n,ka):n)}function jn(n){if(n instanceof IDBRequest)return Kg(n);if(ha.has(n))return ha.get(n);const e=Jg(n);return e!==n&&(ha.set(n,e),al.set(e,n)),e}const da=n=>al.get(n);function Xg(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=jn(a);return r&&a.addEventListener("upgradeneeded",u=>{r(jn(a.result),u.oldVersion,u.newVersion,jn(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Yg=["get","getKey","getAll","getAllKeys","count"],Zg=["put","add","delete","clear"],fa=new Map;function Wc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(fa.get(e))return fa.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Zg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Yg.includes(t)))return;const i=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),s&&u.done]))[0]};return fa.set(e,i),i}Gg(n=>({...n,get:(e,t,r)=>Wc(e,t)||n.get(e,t,r),has:(e,t)=>!!Wc(e,t)||n.has(e,t)}));/**
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
 */class e_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(t_(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function t_(n){return n.getComponent()?.type==="VERSION"}const Ca="@firebase/app",Kc="0.14.13";/**
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
 */const xn=new ol("@firebase/app"),n_="@firebase/app-compat",r_="@firebase/analytics-compat",s_="@firebase/analytics",i_="@firebase/app-check-compat",o_="@firebase/app-check",a_="@firebase/auth",l_="@firebase/auth-compat",c_="@firebase/database",u_="@firebase/data-connect",h_="@firebase/database-compat",d_="@firebase/functions",f_="@firebase/functions-compat",p_="@firebase/installations",m_="@firebase/installations-compat",g_="@firebase/messaging",__="@firebase/messaging-compat",y_="@firebase/performance",v_="@firebase/performance-compat",b_="@firebase/remote-config",w_="@firebase/remote-config-compat",x_="@firebase/storage",E_="@firebase/storage-compat",T_="@firebase/firestore",I_="@firebase/ai",A_="@firebase/firestore-compat",S_="firebase",k_="12.14.0";/**
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
 */const Ra="[DEFAULT]",C_={[Ca]:"fire-core",[n_]:"fire-core-compat",[s_]:"fire-analytics",[r_]:"fire-analytics-compat",[o_]:"fire-app-check",[i_]:"fire-app-check-compat",[a_]:"fire-auth",[l_]:"fire-auth-compat",[c_]:"fire-rtdb",[u_]:"fire-data-connect",[h_]:"fire-rtdb-compat",[d_]:"fire-fn",[f_]:"fire-fn-compat",[p_]:"fire-iid",[m_]:"fire-iid-compat",[g_]:"fire-fcm",[__]:"fire-fcm-compat",[y_]:"fire-perf",[v_]:"fire-perf-compat",[b_]:"fire-rc",[w_]:"fire-rc-compat",[x_]:"fire-gcs",[E_]:"fire-gcs-compat",[T_]:"fire-fst",[A_]:"fire-fst-compat",[I_]:"fire-vertex","fire-js":"fire-js",[S_]:"fire-js-all"};/**
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
 */const Hi=new Map,R_=new Map,Pa=new Map;function Hc(n,e){try{n.container.addComponent(e)}catch(t){xn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function zr(n){const e=n.name;if(Pa.has(e))return xn.debug(`There were multiple attempts to register component ${e}.`),!1;Pa.set(e,n);for(const t of Hi.values())Hc(t,n);for(const t of R_.values())Hc(t,n);return!0}function ll(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ut(n){return n==null?!1:n.settings!==void 0}/**
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
 */const P_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Bn=new Js("app","Firebase",P_);/**
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
 */class $_{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bn.create("app-deleted",{appName:this._name})}}/**
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
 */const Yr=k_;function nd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Ra,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Bn.create("bad-app-name",{appName:String(s)});if(t||(t=Xh()),!t)throw Bn.create("no-options");const i=Hi.get(s);if(i){if(wn(t,i.options)&&wn(r,i.config))return i;throw Bn.create("duplicate-app",{appName:s})}const a=new Mg(s);for(const u of Pa.values())a.addComponent(u);const l=new $_(t,r,a);return Hi.set(s,l),l}function rd(n=Ra){const e=Hi.get(n);if(!e&&n===Ra&&Xh())return nd();if(!e)throw Bn.create("no-app",{appName:n});return e}function zn(n,e,t){let r=C_[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xn.warn(a.join(" "));return}zr(new yr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const V_="firebase-heartbeat-database",N_=1,Ls="firebase-heartbeat-store";let pa=null;function sd(){return pa||(pa=Xg(V_,N_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ls)}catch(t){console.warn(t)}}}}).catch(n=>{throw Bn.create("idb-open",{originalErrorMessage:n.message})})),pa}async function D_(n){try{const t=(await sd()).transaction(Ls),r=await t.objectStore(Ls).get(id(n));return await t.done,r}catch(e){if(e instanceof An)xn.warn(e.message);else{const t=Bn.create("idb-get",{originalErrorMessage:e?.message});xn.warn(t.message)}}}async function Gc(n,e){try{const r=(await sd()).transaction(Ls,"readwrite");await r.objectStore(Ls).put(e,id(n)),await r.done}catch(t){if(t instanceof An)xn.warn(t.message);else{const r=Bn.create("idb-set",{originalErrorMessage:t?.message});xn.warn(r.message)}}}function id(n){return`${n.name}!${n.options.appId}`}/**
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
 */const O_=1024,L_=30;class M_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new F_(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Qc();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>L_){const s=j_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){xn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Qc(),{heartbeatsToSend:t,unsentEntries:r}=U_(this._heartbeatsCache.heartbeats),s=Ki(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return xn.warn(e),""}}}function Qc(){return new Date().toISOString().substring(0,10)}function U_(n,e=O_){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Jc(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Jc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class F_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ag()?Sg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await D_(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Gc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Gc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Jc(n){return Ki(JSON.stringify({version:2,heartbeats:n})).length}function j_(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function B_(n){zr(new yr("platform-logger",e=>new e_(e),"PRIVATE")),zr(new yr("heartbeat",e=>new M_(e),"PRIVATE")),zn(Ca,Kc,n),zn(Ca,Kc,"esm2020"),zn("fire-js","")}B_("");function od(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const z_=od,ad=new Js("auth","Firebase",od());/**
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
 */const Gi=new ol("@firebase/auth");function q_(n,...e){Gi.logLevel<=ye.WARN&&Gi.warn(`Auth (${Yr}): ${n}`,...e)}function Pi(n,...e){Gi.logLevel<=ye.ERROR&&Gi.error(`Auth (${Yr}): ${n}`,...e)}/**
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
 */function Gt(n,...e){throw cl(n,...e)}function rn(n,...e){return cl(n,...e)}function ld(n,e,t){const r={...z_(),[e]:t};return new Js("auth","Firebase",r).create(e,{appName:n.name})}function vn(n){return ld(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function cl(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ad.create(n,...e)}function oe(n,e,...t){if(!n)throw cl(e,...t)}function mn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Pi(e),new Error(e)}function En(n,e){n||mn(e)}/**
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
 */function $a(){return typeof self<"u"&&self.location?.href||""}function W_(){return Xc()==="http:"||Xc()==="https:"}function Xc(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */class Zs{constructor(e,t){this.shortDelay=e,this.longDelay=t,En(t>e,"Short delay should be less than long delay!"),this.isMobile=vg()||Eg()}get(){return K_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ul(n,e){En(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class cd{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Q_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],J_=new Zs(3e4,6e4);function Sn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function kn(n,e,t,r,s={}){return ud(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=Xs({key:n.config.apiKey,...a}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:u,...i};return wg()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&Ys(n.emulatorConfig.host)&&(h.credentials="include"),cd.fetch()(await hd(n,n.config.apiHost,t,l),h)})}async function ud(n,e,t){n._canInitEmulator=!1;const r={...G_,...e};try{const s=new Y_(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Ti(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ti(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Ti(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Ti(n,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw ld(n,f,h);Gt(n,f)}}catch(s){if(s instanceof An)throw s;Gt(n,"network-request-failed",{message:String(s)})}}async function ei(n,e,t,r,s={}){const i=await kn(n,e,t,r,s);return"mfaPendingCredential"in i&&Gt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function hd(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?ul(n.config,s):`${n.config.apiScheme}://${s}`;return Q_.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function X_(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Y_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(rn(this.auth,"network-request-failed")),J_.get())})}}function Ti(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=rn(n,e,r);return s.customData._tokenResponse=t,s}function Yc(n){return n!==void 0&&n.enterprise!==void 0}class Z_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return X_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function ey(n,e){return kn(n,"GET","/v2/recaptchaConfig",Sn(n,e))}/**
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
 */async function ty(n,e){return kn(n,"POST","/v1/accounts:delete",e)}async function Qi(n,e){return kn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Cs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ny(n,e=!1){const t=pt(n),r=await t.getIdToken(e),s=hl(r);oe(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i?.sign_in_provider;return{claims:s,token:r,authTime:Cs(ma(s.auth_time)),issuedAtTime:Cs(ma(s.iat)),expirationTime:Cs(ma(s.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function ma(n){return Number(n)*1e3}function hl(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Pi("JWT malformed, contained fewer than 3 sections"),null;try{const s=Qh(t);return s?JSON.parse(s):(Pi("Failed to decode base64 JWT payload"),null)}catch(s){return Pi("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Zc(n){const e=hl(n);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ms(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof An&&ry(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function ry({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Va{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Cs(this.lastLoginAt),this.creationTime=Cs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ji(n){const e=n.auth,t=await n.getIdToken(),r=await Ms(n,Qi(e,{idToken:t}));oe(r?.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=s.providerUserInfo?.length?dd(s.providerUserInfo):[],a=oy(n.providerData,i),l=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!a?.length,h=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Va(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,f)}async function iy(n){const e=pt(n);await Ji(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oy(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function dd(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function ay(n,e){const t=await ud(n,{},async()=>{const r=Xs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await hd(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return n.emulatorConfig&&Ys(n.emulatorConfig.host)&&(u.credentials="include"),cd.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ly(n,e){return kn(n,"POST","/v2/accounts:revokeToken",Sn(n,e))}/**
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
 */class Lr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Zc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){oe(e.length!==0,"internal-error");const t=Zc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await ay(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Lr;return r&&(oe(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(oe(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(oe(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Lr,this.toJSON())}_performRefresh(){return mn("not implemented")}}/**
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
 */function Dn(n,e){oe(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Wt{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new sy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Va(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Ms(this,this.stsTokenManager.getToken(this.auth,e));return oe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ny(this,e)}reload(){return iy(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Wt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ji(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ut(this.auth.app))return Promise.reject(vn(this.auth));const e=await this.getIdToken();return await Ms(this,ty(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,l=t.tenantId??void 0,u=t._redirectEventId??void 0,h=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:m,emailVerified:x,isAnonymous:E,providerData:$,stsTokenManager:R}=t;oe(m&&R,e,"internal-error");const C=Lr.fromJSON(this.name,R);oe(typeof m=="string",e,"internal-error"),Dn(r,e.name),Dn(s,e.name),oe(typeof x=="boolean",e,"internal-error"),oe(typeof E=="boolean",e,"internal-error"),Dn(i,e.name),Dn(a,e.name),Dn(l,e.name),Dn(u,e.name),Dn(h,e.name),Dn(f,e.name);const V=new Wt({uid:m,auth:e,email:s,emailVerified:x,displayName:r,isAnonymous:E,photoURL:a,phoneNumber:i,tenantId:l,stsTokenManager:C,createdAt:h,lastLoginAt:f});return $&&Array.isArray($)&&(V.providerData=$.map(S=>({...S}))),u&&(V._redirectEventId=u),V}static async _fromIdTokenResponse(e,t,r=!1){const s=new Lr;s.updateFromServerResponse(t);const i=new Wt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ji(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];oe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?dd(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!i?.length,l=new Lr;l.updateFromIdToken(r);const u=new Wt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Va(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(u,h),u}}/**
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
 */const eu=new Map;function gn(n){En(n instanceof Function,"Expected a class definition");let e=eu.get(n);return e?(En(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,eu.set(n,e),e)}/**
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
 */class fd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}fd.type="NONE";const tu=fd;/**
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
 */function $i(n,e,t){return`firebase:${n}:${e}:${t}`}class Mr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=$i(this.userKey,s.apiKey,i),this.fullPersistenceKey=$i("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Qi(this.auth,{idToken:e}).catch(()=>{});return t?Wt._fromGetAccountInfoResponse(this.auth,t,e):null}return Wt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Mr(gn(tu),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||gn(tu);const a=$i(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const f=await h._get(a);if(f){let m;if(typeof f=="string"){const x=await Qi(e,{idToken:f}).catch(()=>{});if(!x)break;m=await Wt._fromGetAccountInfoResponse(e,x,f)}else m=Wt._fromJSON(e,f);h!==i&&(l=m),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Mr(i,e,r):(i=u[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Mr(i,e,r))}}/**
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
 */function nu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_d(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vd(e))return"Blackberry";if(bd(e))return"Webos";if(md(e))return"Safari";if((e.includes("chrome/")||gd(e))&&!e.includes("edge/"))return"Chrome";if(yd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function pd(n=At()){return/firefox\//i.test(n)}function md(n=At()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gd(n=At()){return/crios\//i.test(n)}function _d(n=At()){return/iemobile/i.test(n)}function yd(n=At()){return/android/i.test(n)}function vd(n=At()){return/blackberry/i.test(n)}function bd(n=At()){return/webos/i.test(n)}function dl(n=At()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function cy(n=At()){return dl(n)&&!!window.navigator?.standalone}function uy(){return Tg()&&document.documentMode===10}function wd(n=At()){return dl(n)||yd(n)||bd(n)||vd(n)||/windows phone/i.test(n)||_d(n)}/**
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
 */function xd(n,e=[]){let t;switch(n){case"Browser":t=nu(At());break;case"Worker":t=`${nu(At())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Yr}/${r}`}/**
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
 */class hy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,l)=>{try{const u=e(i);a(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function dy(n,e={}){return kn(n,"GET","/v2/passwordPolicy",Sn(n,e))}/**
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
 */class my{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ru(this),this.idTokenSubscription=new ru(this),this.beforeStateQueue=new hy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ad,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=gn(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Mr.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Qi(this,{idToken:e}),r=await Wt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Ut(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,a=r?._redirectEventId,l=await this.tryRedirectSignIn(e);(!i||i===a)&&l?.user&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ji(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=H_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ut(this.app))return Promise.reject(vn(this));const t=e?pt(e):null;return t&&oe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ut(this.app)?Promise.reject(vn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ut(this.app)?Promise.reject(vn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await dy(this),t=new py(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Js("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await ly(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&gn(e)||this._popupRedirectResolver;oe(t,this,"argument-error"),this.redirectPersistenceManager=await Mr.create(this,[gn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Ut(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&q_(`Error while retrieving App Check token: ${e.error}`),e?.token}}function nr(n){return pt(n)}class ru{constructor(e){this.auth=e,this.observer=null,this.addObserver=$g(t=>this.observer=t)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let vo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function gy(n){vo=n}function Ed(n){return vo.loadJS(n)}function _y(){return vo.recaptchaEnterpriseScript}function yy(){return vo.gapiScript}function vy(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class by{constructor(){this.enterprise=new wy}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class wy{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const xy="recaptcha-enterprise",Td="NO_RECAPTCHA";class Ey{constructor(e){this.type=xy,this.auth=nr(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,l)=>{ey(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new Z_(u);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(u=>{l(u)})})}function s(i,a,l){const u=window.grecaptcha;Yc(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(Td)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new by().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(l=>{if(!t&&Yc(window.grecaptcha))s(l,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=_y();u.length!==0&&(u+=l),Ed(u).then(()=>{s(l,i,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function su(n,e,t,r=!1,s=!1){const i=new Ey(n);let a;if(s)a=Td;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const l={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Xi(n,e,t,r,s){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await su(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await su(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(i)})}/**
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
 */function Ty(n,e){const t=ll(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(wn(i,e??{}))return s;Gt(s,"already-initialized")}return t.initialize({options:e})}function Iy(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(gn);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Ay(n,e,t){const r=nr(n);oe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Id(e),{host:a,port:l}=Sy(e),u=l===null?"":`:${l}`,h={url:`${i}//${a}${u}/`},f=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){oe(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),oe(wn(h,r.config.emulator)&&wn(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Ys(a)?Zh(`${i}//${a}${u}`):ky()}function Id(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Sy(n){const e=Id(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:iu(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:iu(a)}}}function iu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ky(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class fl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return mn("not implemented")}_getIdTokenResponse(e){return mn("not implemented")}_linkToIdToken(e,t){return mn("not implemented")}_getReauthenticationResolver(e){return mn("not implemented")}}async function Cy(n,e){return kn(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Ry(n,e){return ei(n,"POST","/v1/accounts:signInWithPassword",Sn(n,e))}async function Py(n,e){return kn(n,"POST","/v1/accounts:sendOobCode",Sn(n,e))}async function $y(n,e){return Py(n,e)}/**
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
 */async function Vy(n,e){return ei(n,"POST","/v1/accounts:signInWithEmailLink",Sn(n,e))}async function Ny(n,e){return ei(n,"POST","/v1/accounts:signInWithEmailLink",Sn(n,e))}/**
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
 */class Us extends fl{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Us(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Us(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xi(e,t,"signInWithPassword",Ry);case"emailLink":return Vy(e,{email:this._email,oobCode:this._password});default:Gt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xi(e,r,"signUpPassword",Cy);case"emailLink":return Ny(e,{idToken:t,email:this._email,oobCode:this._password});default:Gt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ur(n,e){return ei(n,"POST","/v1/accounts:signInWithIdp",Sn(n,e))}/**
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
 */const Dy="http://localhost";class vr extends fl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Gt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new vr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Ur(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ur(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ur(e,t)}buildRequest(){const e={requestUri:Dy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Xs(t)}return e}}/**
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
 */function Oy(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ly(n){const e=xs(Es(n)).link,t=e?xs(Es(e)).deep_link_id:null,r=xs(Es(n)).deep_link_id;return(r?xs(Es(r)).link:null)||r||t||e||n}class pl{constructor(e){const t=xs(Es(e)),r=t.apiKey??null,s=t.oobCode??null,i=Oy(t.mode??null);oe(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Ly(e);try{return new pl(t)}catch{return null}}}/**
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
 */class Zr{constructor(){this.providerId=Zr.PROVIDER_ID}static credential(e,t){return Us._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=pl.parseLink(t);return oe(r,"argument-error"),Us._fromEmailAndCode(e,r.code,r.tenantId)}}Zr.PROVIDER_ID="password";Zr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ad{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ti extends Ad{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class On extends ti{constructor(){super("facebook.com")}static credential(e){return vr._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.FACEBOOK_SIGN_IN_METHOD="facebook.com";On.PROVIDER_ID="facebook.com";/**
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
 */class Ln extends ti{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return vr._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Ln.credential(t,r)}catch{return null}}}Ln.GOOGLE_SIGN_IN_METHOD="google.com";Ln.PROVIDER_ID="google.com";/**
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
 */class Mn extends ti{constructor(){super("github.com")}static credential(e){return vr._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mn.credential(e.oauthAccessToken)}catch{return null}}}Mn.GITHUB_SIGN_IN_METHOD="github.com";Mn.PROVIDER_ID="github.com";/**
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
 */class Un extends ti{constructor(){super("twitter.com")}static credential(e,t){return vr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Un.credential(t,r)}catch{return null}}}Un.TWITTER_SIGN_IN_METHOD="twitter.com";Un.PROVIDER_ID="twitter.com";/**
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
 */async function My(n,e){return ei(n,"POST","/v1/accounts:signUp",Sn(n,e))}/**
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
 */class br{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Wt._fromIdTokenResponse(e,r,s),a=ou(r);return new br({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=ou(r);return new br({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function ou(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Yi extends An{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Yi.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Yi(e,t,r,s)}}function Sd(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Yi._fromErrorAndOperation(n,i,e,r):i})}async function Uy(n,e,t=!1){const r=await Ms(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return br._forOperation(n,"link",r)}/**
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
 */async function Fy(n,e,t=!1){const{auth:r}=n;if(Ut(r.app))return Promise.reject(vn(r));const s="reauthenticate";try{const i=await Ms(n,Sd(r,s,e,n),t);oe(i.idToken,r,"internal-error");const a=hl(i.idToken);oe(a,r,"internal-error");const{sub:l}=a;return oe(n.uid===l,r,"user-mismatch"),br._forOperation(n,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Gt(r,"user-mismatch"),i}}/**
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
 */async function kd(n,e,t=!1){if(Ut(n.app))return Promise.reject(vn(n));const r="signIn",s=await Sd(n,r,e),i=await br._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function jy(n,e){return kd(nr(n),e)}/**
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
 */async function Cd(n){const e=nr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function By(n,e,t){const r=nr(n);await Xi(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",$y)}async function zy(n,e,t){if(Ut(n.app))return Promise.reject(vn(n));const r=nr(n),a=await Xi(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",My).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Cd(n),u}),l=await br._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function qy(n,e,t){return Ut(n.app)?Promise.reject(vn(n)):jy(pt(n),Zr.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Cd(n),r})}function Wy(n,e,t,r){return pt(n).onIdTokenChanged(e,t,r)}function Ky(n,e,t){return pt(n).beforeAuthStateChanged(e,t)}function Hy(n,e,t,r){return pt(n).onAuthStateChanged(e,t,r)}function Gy(n){return pt(n).signOut()}const Zi="__sak";/**
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
 */class Rd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Zi,"1"),this.storage.removeItem(Zi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Qy=1e3,Jy=10;class Pd extends Rd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=wd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);uy()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Jy):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Qy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Pd.type="LOCAL";const Xy=Pd;/**
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
 */class $d extends Rd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}$d.type="SESSION";const Vd=$d;/**
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
 */class bo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new bo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(t.origin,i)),u=await Yy(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bo.receivers=[];/**
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
 */function ml(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Zy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,u)=>{const h=ml("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(m){const x=m;if(x.data.eventId===h)switch(x.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(x.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function sn(){return window}function ev(n){sn().location.href=n}/**
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
 */function Nd(){return typeof sn().WorkerGlobalScope<"u"&&typeof sn().importScripts=="function"}async function tv(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nv(){return navigator?.serviceWorker?.controller||null}function rv(){return Nd()?self:null}/**
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
 */const Dd="firebaseLocalStorageDb",sv=1,eo="firebaseLocalStorage",Od="fbase_key";class ni{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function wo(n,e){return n.transaction([eo],e?"readwrite":"readonly").objectStore(eo)}function iv(){const n=indexedDB.deleteDatabase(Dd);return new ni(n).toPromise()}function Ld(){const n=indexedDB.open(Dd,sv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(eo,{keyPath:Od})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(eo)?e(r):(r.close(),await iv(),e(await Ld()))})})}async function au(n,e,t){const r=wo(n,!0).put({[Od]:e,value:t});return new ni(r).toPromise()}async function ov(n,e){const t=wo(n,!1).get(e),r=await new ni(t).toPromise();return r===void 0?null:r.value}function lu(n,e){const t=wo(n,!0).delete(e);return new ni(t).toPromise()}const av=800,lv=3;class Md{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=Ld(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>lv)throw r;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return Nd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bo._getInstance(rv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await tv(),!this.activeServiceWorker)return;this.sender=new Zy(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await au(e,Zi,"1"),await lu(e,Zi)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>au(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>ov(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>lu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=wo(s,!1).getAll();return new ni(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),av)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Md.type="LOCAL";const cv=Md;new Zs(3e4,6e4);/**
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
 */function uv(n,e){return e?gn(e):(oe(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class gl extends fl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ur(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ur(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ur(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function hv(n){return kd(n.auth,new gl(n),n.bypassAuthState)}function dv(n){const{auth:e,user:t}=n;return oe(t,e,"internal-error"),Fy(t,new gl(n),n.bypassAuthState)}async function fv(n){const{auth:e,user:t}=n;return oe(t,e,"internal-error"),Uy(t,new gl(n),n.bypassAuthState)}/**
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
 */class Ud{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hv;case"linkViaPopup":case"linkViaRedirect":return fv;case"reauthViaPopup":case"reauthViaRedirect":return dv;default:Gt(this.auth,"internal-error")}}resolve(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const pv=new Zs(2e3,1e4);class Nr extends Ud{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Nr.currentPopupAction&&Nr.currentPopupAction.cancel(),Nr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){En(this.filter.length===1,"Popup operations only handle one event");const e=ml();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Nr.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pv.get())};e()}}Nr.currentPopupAction=null;/**
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
 */const mv="pendingRedirect",Vi=new Map;class gv extends Ud{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Vi.get(this.auth._key());if(!e){try{const r=await _v(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Vi.set(this.auth._key(),e)}return this.bypassAuthState||Vi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _v(n,e){const t=bv(e),r=vv(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function yv(n,e){Vi.set(n._key(),e)}function vv(n){return gn(n._redirectPersistence)}function bv(n){return $i(mv,n.config.apiKey,n.name)}async function wv(n,e,t=!1){if(Ut(n.app))return Promise.reject(vn(n));const r=nr(n),s=uv(r,e),a=await new gv(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const xv=10*60*1e3;class Ev{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Tv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Fd(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(rn(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xv&&this.cachedEventUids.clear(),this.cachedEventUids.has(cu(e))}saveEventToCache(e){this.cachedEventUids.add(cu(e)),this.lastProcessedEventTime=Date.now()}}function cu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Fd({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Tv(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fd(n);default:return!1}}/**
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
 */async function Iv(n,e={}){return kn(n,"GET","/v1/projects",e)}/**
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
 */const Av=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Sv=/^https?/;async function kv(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Iv(n);for(const t of e)try{if(Cv(t))return}catch{}Gt(n,"unauthorized-domain")}function Cv(n){const e=$a(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Sv.test(t))return!1;if(Av.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Rv=new Zs(3e4,6e4);function uu(){const n=sn().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Pv(n){return new Promise((e,t)=>{function r(){uu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{uu(),t(rn(n,"network-request-failed"))},timeout:Rv.get()})}if(sn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(sn().gapi?.load)r();else{const s=vy("iframefcb");return sn()[s]=()=>{gapi.load?r():t(rn(n,"network-request-failed"))},Ed(`${yy()}?onload=${s}`).catch(i=>t(i))}}).catch(e=>{throw Ni=null,e})}let Ni=null;function $v(n){return Ni=Ni||Pv(n),Ni}/**
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
 */const Vv=new Zs(5e3,15e3),Nv="__/auth/iframe",Dv="emulator/auth/iframe",Ov={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Lv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Mv(n){const e=n.config;oe(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ul(e,Dv):`https://${n.config.authDomain}/${Nv}`,r={apiKey:e.apiKey,appName:n.name,v:Yr},s=Lv.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Xs(r).slice(1)}`}async function Uv(n){const e=await $v(n),t=sn().gapi;return oe(t,n,"internal-error"),e.open({where:document.body,url:Mv(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ov,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=rn(n,"network-request-failed"),l=sn().setTimeout(()=>{i(a)},Vv.get());function u(){sn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const Fv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jv=500,Bv=600,zv="_blank",qv="http://localhost";class hu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Wv(n,e,t,r=jv,s=Bv){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...Fv,width:r.toString(),height:s.toString(),top:i,left:a},h=At().toLowerCase();t&&(l=gd(h)?zv:t),pd(h)&&(e=e||qv,u.scrollbars="yes");const f=Object.entries(u).reduce((x,[E,$])=>`${x}${E}=${$},`,"");if(cy(h)&&l!=="_self")return Kv(e||"",l),new hu(null);const m=window.open(e||"",l,f);oe(m,n,"popup-blocked");try{m.focus()}catch{}return new hu(m)}function Kv(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Hv="__/auth/handler",Gv="emulator/auth/handler",Qv=encodeURIComponent("fac");async function du(n,e,t,r,s,i){oe(n.config.authDomain,n,"auth-domain-config-required"),oe(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Yr,eventId:s};if(e instanceof Ad){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Pg(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))a[f]=m}if(e instanceof ti){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await n._getAppCheckToken(),h=u?`#${Qv}=${encodeURIComponent(u)}`:"";return`${Jv(n)}?${Xs(l).slice(1)}${h}`}function Jv({config:n}){return n.emulator?ul(n,Gv):`https://${n.authDomain}/${Hv}`}/**
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
 */const ga="webStorageSupport";class Xv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vd,this._completeRedirectFn=wv,this._overrideRedirectResult=yv}async _openPopup(e,t,r,s){En(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await du(e,t,r,$a(),s);return Wv(e,i,ml())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await du(e,t,r,$a(),s);return ev(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(En(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Uv(e),r=new Ev(e);return t.register("authEvent",s=>(oe(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ga,{type:ga},s=>{const i=s?.[0]?.[ga];i!==void 0&&t(!!i),Gt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=kv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return wd()||md()||dl()}}const Yv=Xv;var fu="@firebase/auth",pu="1.13.2";/**
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
 */class Zv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function eb(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function tb(n){zr(new yr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;oe(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xd(n)},h=new my(r,s,i,u);return Iy(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),zr(new yr("auth-internal",e=>{const t=nr(e.getProvider("auth").getImmediate());return(r=>new Zv(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),zn(fu,pu,eb(n)),zn(fu,pu,"esm2020")}/**
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
 */const nb=5*60,rb=Yh("authIdTokenMaxAge")||nb;let mu=null;const sb=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>rb)return;const s=t?.token;mu!==s&&(mu=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ib(n=rd()){const e=ll(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Ty(n,{popupRedirectResolver:Yv,persistence:[cv,Xy,Vd]}),r=Yh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=sb(i.toString());Ky(t,a,()=>a(t.currentUser)),Wy(t,l=>a(l))}}const s=Jh("auth");return s&&Ay(t,`http://${s}`),t}function ob(){return document.getElementsByTagName("head")?.[0]??document}gy({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=rn("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",ob().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});tb("Browser");var gu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qn,jd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,_){function v(){}v.prototype=_.prototype,b.F=_.prototype,b.prototype=new v,b.prototype.constructor=b,b.D=function(T,w,I){for(var p=Array(arguments.length-2),B=2;B<arguments.length;B++)p[B-2]=arguments[B];return _.prototype[w].apply(T,p)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,_,v){v||(v=0);const T=Array(16);if(typeof _=="string")for(var w=0;w<16;++w)T[w]=_.charCodeAt(v++)|_.charCodeAt(v++)<<8|_.charCodeAt(v++)<<16|_.charCodeAt(v++)<<24;else for(w=0;w<16;++w)T[w]=_[v++]|_[v++]<<8|_[v++]<<16|_[v++]<<24;_=b.g[0],v=b.g[1],w=b.g[2];let I=b.g[3],p;p=_+(I^v&(w^I))+T[0]+3614090360&4294967295,_=v+(p<<7&4294967295|p>>>25),p=I+(w^_&(v^w))+T[1]+3905402710&4294967295,I=_+(p<<12&4294967295|p>>>20),p=w+(v^I&(_^v))+T[2]+606105819&4294967295,w=I+(p<<17&4294967295|p>>>15),p=v+(_^w&(I^_))+T[3]+3250441966&4294967295,v=w+(p<<22&4294967295|p>>>10),p=_+(I^v&(w^I))+T[4]+4118548399&4294967295,_=v+(p<<7&4294967295|p>>>25),p=I+(w^_&(v^w))+T[5]+1200080426&4294967295,I=_+(p<<12&4294967295|p>>>20),p=w+(v^I&(_^v))+T[6]+2821735955&4294967295,w=I+(p<<17&4294967295|p>>>15),p=v+(_^w&(I^_))+T[7]+4249261313&4294967295,v=w+(p<<22&4294967295|p>>>10),p=_+(I^v&(w^I))+T[8]+1770035416&4294967295,_=v+(p<<7&4294967295|p>>>25),p=I+(w^_&(v^w))+T[9]+2336552879&4294967295,I=_+(p<<12&4294967295|p>>>20),p=w+(v^I&(_^v))+T[10]+4294925233&4294967295,w=I+(p<<17&4294967295|p>>>15),p=v+(_^w&(I^_))+T[11]+2304563134&4294967295,v=w+(p<<22&4294967295|p>>>10),p=_+(I^v&(w^I))+T[12]+1804603682&4294967295,_=v+(p<<7&4294967295|p>>>25),p=I+(w^_&(v^w))+T[13]+4254626195&4294967295,I=_+(p<<12&4294967295|p>>>20),p=w+(v^I&(_^v))+T[14]+2792965006&4294967295,w=I+(p<<17&4294967295|p>>>15),p=v+(_^w&(I^_))+T[15]+1236535329&4294967295,v=w+(p<<22&4294967295|p>>>10),p=_+(w^I&(v^w))+T[1]+4129170786&4294967295,_=v+(p<<5&4294967295|p>>>27),p=I+(v^w&(_^v))+T[6]+3225465664&4294967295,I=_+(p<<9&4294967295|p>>>23),p=w+(_^v&(I^_))+T[11]+643717713&4294967295,w=I+(p<<14&4294967295|p>>>18),p=v+(I^_&(w^I))+T[0]+3921069994&4294967295,v=w+(p<<20&4294967295|p>>>12),p=_+(w^I&(v^w))+T[5]+3593408605&4294967295,_=v+(p<<5&4294967295|p>>>27),p=I+(v^w&(_^v))+T[10]+38016083&4294967295,I=_+(p<<9&4294967295|p>>>23),p=w+(_^v&(I^_))+T[15]+3634488961&4294967295,w=I+(p<<14&4294967295|p>>>18),p=v+(I^_&(w^I))+T[4]+3889429448&4294967295,v=w+(p<<20&4294967295|p>>>12),p=_+(w^I&(v^w))+T[9]+568446438&4294967295,_=v+(p<<5&4294967295|p>>>27),p=I+(v^w&(_^v))+T[14]+3275163606&4294967295,I=_+(p<<9&4294967295|p>>>23),p=w+(_^v&(I^_))+T[3]+4107603335&4294967295,w=I+(p<<14&4294967295|p>>>18),p=v+(I^_&(w^I))+T[8]+1163531501&4294967295,v=w+(p<<20&4294967295|p>>>12),p=_+(w^I&(v^w))+T[13]+2850285829&4294967295,_=v+(p<<5&4294967295|p>>>27),p=I+(v^w&(_^v))+T[2]+4243563512&4294967295,I=_+(p<<9&4294967295|p>>>23),p=w+(_^v&(I^_))+T[7]+1735328473&4294967295,w=I+(p<<14&4294967295|p>>>18),p=v+(I^_&(w^I))+T[12]+2368359562&4294967295,v=w+(p<<20&4294967295|p>>>12),p=_+(v^w^I)+T[5]+4294588738&4294967295,_=v+(p<<4&4294967295|p>>>28),p=I+(_^v^w)+T[8]+2272392833&4294967295,I=_+(p<<11&4294967295|p>>>21),p=w+(I^_^v)+T[11]+1839030562&4294967295,w=I+(p<<16&4294967295|p>>>16),p=v+(w^I^_)+T[14]+4259657740&4294967295,v=w+(p<<23&4294967295|p>>>9),p=_+(v^w^I)+T[1]+2763975236&4294967295,_=v+(p<<4&4294967295|p>>>28),p=I+(_^v^w)+T[4]+1272893353&4294967295,I=_+(p<<11&4294967295|p>>>21),p=w+(I^_^v)+T[7]+4139469664&4294967295,w=I+(p<<16&4294967295|p>>>16),p=v+(w^I^_)+T[10]+3200236656&4294967295,v=w+(p<<23&4294967295|p>>>9),p=_+(v^w^I)+T[13]+681279174&4294967295,_=v+(p<<4&4294967295|p>>>28),p=I+(_^v^w)+T[0]+3936430074&4294967295,I=_+(p<<11&4294967295|p>>>21),p=w+(I^_^v)+T[3]+3572445317&4294967295,w=I+(p<<16&4294967295|p>>>16),p=v+(w^I^_)+T[6]+76029189&4294967295,v=w+(p<<23&4294967295|p>>>9),p=_+(v^w^I)+T[9]+3654602809&4294967295,_=v+(p<<4&4294967295|p>>>28),p=I+(_^v^w)+T[12]+3873151461&4294967295,I=_+(p<<11&4294967295|p>>>21),p=w+(I^_^v)+T[15]+530742520&4294967295,w=I+(p<<16&4294967295|p>>>16),p=v+(w^I^_)+T[2]+3299628645&4294967295,v=w+(p<<23&4294967295|p>>>9),p=_+(w^(v|~I))+T[0]+4096336452&4294967295,_=v+(p<<6&4294967295|p>>>26),p=I+(v^(_|~w))+T[7]+1126891415&4294967295,I=_+(p<<10&4294967295|p>>>22),p=w+(_^(I|~v))+T[14]+2878612391&4294967295,w=I+(p<<15&4294967295|p>>>17),p=v+(I^(w|~_))+T[5]+4237533241&4294967295,v=w+(p<<21&4294967295|p>>>11),p=_+(w^(v|~I))+T[12]+1700485571&4294967295,_=v+(p<<6&4294967295|p>>>26),p=I+(v^(_|~w))+T[3]+2399980690&4294967295,I=_+(p<<10&4294967295|p>>>22),p=w+(_^(I|~v))+T[10]+4293915773&4294967295,w=I+(p<<15&4294967295|p>>>17),p=v+(I^(w|~_))+T[1]+2240044497&4294967295,v=w+(p<<21&4294967295|p>>>11),p=_+(w^(v|~I))+T[8]+1873313359&4294967295,_=v+(p<<6&4294967295|p>>>26),p=I+(v^(_|~w))+T[15]+4264355552&4294967295,I=_+(p<<10&4294967295|p>>>22),p=w+(_^(I|~v))+T[6]+2734768916&4294967295,w=I+(p<<15&4294967295|p>>>17),p=v+(I^(w|~_))+T[13]+1309151649&4294967295,v=w+(p<<21&4294967295|p>>>11),p=_+(w^(v|~I))+T[4]+4149444226&4294967295,_=v+(p<<6&4294967295|p>>>26),p=I+(v^(_|~w))+T[11]+3174756917&4294967295,I=_+(p<<10&4294967295|p>>>22),p=w+(_^(I|~v))+T[2]+718787259&4294967295,w=I+(p<<15&4294967295|p>>>17),p=v+(I^(w|~_))+T[9]+3951481745&4294967295,b.g[0]=b.g[0]+_&4294967295,b.g[1]=b.g[1]+(w+(p<<21&4294967295|p>>>11))&4294967295,b.g[2]=b.g[2]+w&4294967295,b.g[3]=b.g[3]+I&4294967295}r.prototype.v=function(b,_){_===void 0&&(_=b.length);const v=_-this.blockSize,T=this.C;let w=this.h,I=0;for(;I<_;){if(w==0)for(;I<=v;)s(this,b,I),I+=this.blockSize;if(typeof b=="string"){for(;I<_;)if(T[w++]=b.charCodeAt(I++),w==this.blockSize){s(this,T),w=0;break}}else for(;I<_;)if(T[w++]=b[I++],w==this.blockSize){s(this,T),w=0;break}}this.h=w,this.o+=_},r.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var _=1;_<b.length-8;++_)b[_]=0;_=this.o*8;for(var v=b.length-8;v<b.length;++v)b[v]=_&255,_/=256;for(this.v(b),b=Array(16),_=0,v=0;v<4;++v)for(let T=0;T<32;T+=8)b[_++]=this.g[v]>>>T&255;return b};function i(b,_){var v=l;return Object.prototype.hasOwnProperty.call(v,b)?v[b]:v[b]=_(b)}function a(b,_){this.h=_;const v=[];let T=!0;for(let w=b.length-1;w>=0;w--){const I=b[w]|0;T&&I==_||(v[w]=I,T=!1)}this.g=v}var l={};function u(b){return-128<=b&&b<128?i(b,function(_){return new a([_|0],_<0?-1:0)}):new a([b|0],b<0?-1:0)}function h(b){if(isNaN(b)||!isFinite(b))return m;if(b<0)return C(h(-b));const _=[];let v=1;for(let T=0;b>=v;T++)_[T]=b/v|0,v*=4294967296;return new a(_,0)}function f(b,_){if(b.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(b.charAt(0)=="-")return C(f(b.substring(1),_));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=h(Math.pow(_,8));let T=m;for(let I=0;I<b.length;I+=8){var w=Math.min(8,b.length-I);const p=parseInt(b.substring(I,I+w),_);w<8?(w=h(Math.pow(_,w)),T=T.j(w).add(h(p))):(T=T.j(v),T=T.add(h(p)))}return T}var m=u(0),x=u(1),E=u(16777216);n=a.prototype,n.m=function(){if(R(this))return-C(this).m();let b=0,_=1;for(let v=0;v<this.g.length;v++){const T=this.i(v);b+=(T>=0?T:4294967296+T)*_,_*=4294967296}return b},n.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if($(this))return"0";if(R(this))return"-"+C(this).toString(b);const _=h(Math.pow(b,6));var v=this;let T="";for(;;){const w=U(v,_).g;v=V(v,w.j(_));let I=((v.g.length>0?v.g[0]:v.h)>>>0).toString(b);if(v=w,$(v))return I+T;for(;I.length<6;)I="0"+I;T=I+T}},n.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function $(b){if(b.h!=0)return!1;for(let _=0;_<b.g.length;_++)if(b.g[_]!=0)return!1;return!0}function R(b){return b.h==-1}n.l=function(b){return b=V(this,b),R(b)?-1:$(b)?0:1};function C(b){const _=b.g.length,v=[];for(let T=0;T<_;T++)v[T]=~b.g[T];return new a(v,~b.h).add(x)}n.abs=function(){return R(this)?C(this):this},n.add=function(b){const _=Math.max(this.g.length,b.g.length),v=[];let T=0;for(let w=0;w<=_;w++){let I=T+(this.i(w)&65535)+(b.i(w)&65535),p=(I>>>16)+(this.i(w)>>>16)+(b.i(w)>>>16);T=p>>>16,I&=65535,p&=65535,v[w]=p<<16|I}return new a(v,v[v.length-1]&-2147483648?-1:0)};function V(b,_){return b.add(C(_))}n.j=function(b){if($(this)||$(b))return m;if(R(this))return R(b)?C(this).j(C(b)):C(C(this).j(b));if(R(b))return C(this.j(C(b)));if(this.l(E)<0&&b.l(E)<0)return h(this.m()*b.m());const _=this.g.length+b.g.length,v=[];for(var T=0;T<2*_;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(let w=0;w<b.g.length;w++){const I=this.i(T)>>>16,p=this.i(T)&65535,B=b.i(w)>>>16,Z=b.i(w)&65535;v[2*T+2*w]+=p*Z,S(v,2*T+2*w),v[2*T+2*w+1]+=I*Z,S(v,2*T+2*w+1),v[2*T+2*w+1]+=p*B,S(v,2*T+2*w+1),v[2*T+2*w+2]+=I*B,S(v,2*T+2*w+2)}for(b=0;b<_;b++)v[b]=v[2*b+1]<<16|v[2*b];for(b=_;b<2*_;b++)v[b]=0;return new a(v,0)};function S(b,_){for(;(b[_]&65535)!=b[_];)b[_+1]+=b[_]>>>16,b[_]&=65535,_++}function M(b,_){this.g=b,this.h=_}function U(b,_){if($(_))throw Error("division by zero");if($(b))return new M(m,m);if(R(b))return _=U(C(b),_),new M(C(_.g),C(_.h));if(R(_))return _=U(b,C(_)),new M(C(_.g),_.h);if(b.g.length>30){if(R(b)||R(_))throw Error("slowDivide_ only works with positive integers.");for(var v=x,T=_;T.l(b)<=0;)v=Y(v),T=Y(T);var w=D(v,1),I=D(T,1);for(T=D(T,2),v=D(v,2);!$(T);){var p=I.add(T);p.l(b)<=0&&(w=w.add(v),I=p),T=D(T,1),v=D(v,1)}return _=V(b,w.j(_)),new M(w,_)}for(w=m;b.l(_)>=0;){for(v=Math.max(1,Math.floor(b.m()/_.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),I=h(v),p=I.j(_);R(p)||p.l(b)>0;)v-=T,I=h(v),p=I.j(_);$(I)&&(I=x),w=w.add(I),b=V(b,p)}return new M(w,b)}n.B=function(b){return U(this,b).h},n.and=function(b){const _=Math.max(this.g.length,b.g.length),v=[];for(let T=0;T<_;T++)v[T]=this.i(T)&b.i(T);return new a(v,this.h&b.h)},n.or=function(b){const _=Math.max(this.g.length,b.g.length),v=[];for(let T=0;T<_;T++)v[T]=this.i(T)|b.i(T);return new a(v,this.h|b.h)},n.xor=function(b){const _=Math.max(this.g.length,b.g.length),v=[];for(let T=0;T<_;T++)v[T]=this.i(T)^b.i(T);return new a(v,this.h^b.h)};function Y(b){const _=b.g.length+1,v=[];for(let T=0;T<_;T++)v[T]=b.i(T)<<1|b.i(T-1)>>>31;return new a(v,b.h)}function D(b,_){const v=_>>5;_%=32;const T=b.g.length-v,w=[];for(let I=0;I<T;I++)w[I]=_>0?b.i(I+v)>>>_|b.i(I+v+1)<<32-_:b.i(I+v);return new a(w,b.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,jd=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,qn=a}).apply(typeof gu<"u"?gu:typeof self<"u"?self:typeof window<"u"?window:{});var Ii=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Bd,Ts,zd,Di,Na,qd,Wd,Kd;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ii=="object"&&Ii];for(var c=0;c<o.length;++c){var d=o[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,c){if(c)e:{var d=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var A=o[g];if(!(A in d))break e;d=d[A]}o=o[o.length-1],g=d[o],c=c(g),c!=g&&c!=null&&e(d,o,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(c){var d=[],g;for(g in c)Object.prototype.hasOwnProperty.call(c,g)&&d.push([g,c[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function l(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function u(o,c,d){return o.call.apply(o.bind,arguments)}function h(o,c,d){return h=u,h.apply(null,arguments)}function f(o,c){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function m(o,c){function d(){}d.prototype=c.prototype,o.Z=c.prototype,o.prototype=new d,o.prototype.constructor=o,o.Ob=function(g,A,k){for(var j=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)j[pe-2]=arguments[pe];return c.prototype[A].apply(g,j)}}var x=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function E(o){const c=o.length;if(c>0){const d=Array(c);for(let g=0;g<c;g++)d[g]=o[g];return d}return[]}function $(o,c){for(let g=1;g<arguments.length;g++){const A=arguments[g];var d=typeof A;if(d=d!="object"?d:A?Array.isArray(A)?"array":d:"null",d=="array"||d=="object"&&typeof A.length=="number"){d=o.length||0;const k=A.length||0;o.length=d+k;for(let j=0;j<k;j++)o[d+j]=A[j]}else o.push(A)}}class R{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function C(o){a.setTimeout(()=>{throw o},0)}function V(){var o=b;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class S{constructor(){this.h=this.g=null}add(c,d){const g=M.get();g.set(c,d),this.h?this.h.next=g:this.g=g,this.h=g}}var M=new R(()=>new U,o=>o.reset());class U{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Y,D=!1,b=new S,_=()=>{const o=Promise.resolve(void 0);Y=()=>{o.then(v)}};function v(){for(var o;o=V();){try{o.h.call(o.g)}catch(d){C(d)}var c=M;c.j(o),c.h<100&&(c.h++,o.next=c.g,c.g=o)}D=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function w(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}w.prototype.h=function(){this.defaultPrevented=!0};var I=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};a.addEventListener("test",d,c),a.removeEventListener("test",d,c)}catch{}return o}();function p(o){return/^[\s\xa0]*$/.test(o)}function B(o,c){w.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,c)}m(B,w),B.prototype.init=function(o,c){const d=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget,c||(d=="mouseover"?c=o.fromElement:d=="mouseout"&&(c=o.toElement)),this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&B.Z.h.call(this)},B.prototype.h=function(){B.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Z="closure_listenable_"+(Math.random()*1e6|0),Te=0;function Re(o,c,d,g,A){this.listener=o,this.proxy=null,this.src=c,this.type=d,this.capture=!!g,this.ha=A,this.key=++Te,this.da=this.fa=!1}function Oe(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function je(o,c,d){for(const g in o)c.call(d,o[g],g,o)}function $e(o,c){for(const d in o)c.call(void 0,o[d],d,o)}function Ye(o){const c={};for(const d in o)c[d]=o[d];return c}const St="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function He(o,c){let d,g;for(let A=1;A<arguments.length;A++){g=arguments[A];for(d in g)o[d]=g[d];for(let k=0;k<St.length;k++)d=St[k],Object.prototype.hasOwnProperty.call(g,d)&&(o[d]=g[d])}}function mt(o){this.src=o,this.g={},this.h=0}mt.prototype.add=function(o,c,d,g,A){const k=o.toString();o=this.g[k],o||(o=this.g[k]=[],this.h++);const j=it(o,c,g,A);return j>-1?(c=o[j],d||(c.fa=!1)):(c=new Re(c,this.src,k,!!g,A),c.fa=d,o.push(c)),c};function gt(o,c){const d=c.type;if(d in o.g){var g=o.g[d],A=Array.prototype.indexOf.call(g,c,void 0),k;(k=A>=0)&&Array.prototype.splice.call(g,A,1),k&&(Oe(c),o.g[d].length==0&&(delete o.g[d],o.h--))}}function it(o,c,d,g){for(let A=0;A<o.length;++A){const k=o[A];if(!k.da&&k.listener==c&&k.capture==!!d&&k.ha==g)return A}return-1}var ot="closure_lm_"+(Math.random()*1e6|0),we={};function Ze(o,c,d,g,A){if(Array.isArray(c)){for(let k=0;k<c.length;k++)Ze(o,c[k],d,g,A);return null}return d=ee(d),o&&o[Z]?o.J(c,d,l(g)?!!g.capture:!1,A):bt(o,c,d,!1,g,A)}function bt(o,c,d,g,A,k){if(!c)throw Error("Invalid event type");const j=l(A)?!!A.capture:!!A;let pe=F(o);if(pe||(o[ot]=pe=new mt(o)),d=pe.add(c,d,g,j,k),d.proxy)return d;if(g=Nt(),d.proxy=g,g.src=o,g.listener=d,o.addEventListener)I||(A=j),A===void 0&&(A=!1),o.addEventListener(c.toString(),g,A);else if(o.attachEvent)o.attachEvent(se(c.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Nt(){function o(d){return c.call(o.src,o.listener,d)}const c=G;return o}function kt(o,c,d,g,A){if(Array.isArray(c))for(var k=0;k<c.length;k++)kt(o,c[k],d,g,A);else g=l(g)?!!g.capture:!!g,d=ee(d),o&&o[Z]?(o=o.i,k=String(c).toString(),k in o.g&&(c=o.g[k],d=it(c,d,g,A),d>-1&&(Oe(c[d]),Array.prototype.splice.call(c,d,1),c.length==0&&(delete o.g[k],o.h--)))):o&&(o=F(o))&&(c=o.g[c.toString()],o=-1,c&&(o=it(c,d,g,A)),(d=o>-1?c[o]:null)&&Ct(d))}function Ct(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Z])gt(c.i,o);else{var d=o.type,g=o.proxy;c.removeEventListener?c.removeEventListener(d,g,o.capture):c.detachEvent?c.detachEvent(se(d),g):c.addListener&&c.removeListener&&c.removeListener(g),(d=F(c))?(gt(d,o),d.h==0&&(d.src=null,c[ot]=null)):Oe(o)}}}function se(o){return o in we?we[o]:we[o]="on"+o}function G(o,c){if(o.da)o=!0;else{c=new B(c,this);const d=o.listener,g=o.ha||o.src;o.fa&&Ct(o),o=d.call(g,c)}return o}function F(o){return o=o[ot],o instanceof mt?o:null}var z="__closure_events_fn_"+(Math.random()*1e9>>>0);function ee(o){return typeof o=="function"?o:(o[z]||(o[z]=function(c){return o.handleEvent(c)}),o[z])}function J(){T.call(this),this.i=new mt(this),this.M=this,this.G=null}m(J,T),J.prototype[Z]=!0,J.prototype.removeEventListener=function(o,c,d,g){kt(this,o,c,d,g)};function W(o,c){var d,g=o.G;if(g)for(d=[];g;g=g.G)d.push(g);if(o=o.M,g=c.type||c,typeof c=="string")c=new w(c,o);else if(c instanceof w)c.target=c.target||o;else{var A=c;c=new w(g,o),He(c,A)}A=!0;let k,j;if(d)for(j=d.length-1;j>=0;j--)k=c.g=d[j],A=ce(k,g,!0,c)&&A;if(k=c.g=o,A=ce(k,g,!0,c)&&A,A=ce(k,g,!1,c)&&A,d)for(j=0;j<d.length;j++)k=c.g=d[j],A=ce(k,g,!1,c)&&A}J.prototype.N=function(){if(J.Z.N.call(this),this.i){var o=this.i;for(const c in o.g){const d=o.g[c];for(let g=0;g<d.length;g++)Oe(d[g]);delete o.g[c],o.h--}}this.G=null},J.prototype.J=function(o,c,d,g){return this.i.add(String(o),c,!1,d,g)},J.prototype.K=function(o,c,d,g){return this.i.add(String(o),c,!0,d,g)};function ce(o,c,d,g){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();let A=!0;for(let k=0;k<c.length;++k){const j=c[k];if(j&&!j.da&&j.capture==d){const pe=j.listener,tt=j.ha||j.src;j.fa&&gt(o.i,j),A=pe.call(tt,g)!==!1&&A}}return A&&!g.defaultPrevented}function ie(o,c){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(o,c||0)}function ve(o){o.g=ie(()=>{o.g=null,o.i&&(o.i=!1,ve(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class fe extends T{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:ve(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _e(o){T.call(this),this.h=o,this.g={}}m(_e,T);var be=[];function Pe(o){je(o.g,function(c,d){this.g.hasOwnProperty(d)&&Ct(c)},o),o.g={}}_e.prototype.N=function(){_e.Z.N.call(this),Pe(this)},_e.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ne=a.JSON.stringify,he=a.JSON.parse,de=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Ie(){}function at(){}var Be={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ze(){w.call(this,"d")}m(ze,w);function lt(){w.call(this,"c")}m(lt,w);var ct={},Le=null;function wt(){return Le=Le||new J}ct.Ia="serverreachability";function Pt(o){w.call(this,ct.Ia,o)}m(Pt,w);function Mt(o){const c=wt();W(c,new Pt(c))}ct.STAT_EVENT="statevent";function ir(o,c){w.call(this,ct.STAT_EVENT,o),this.stat=c}m(ir,w);function Ge(o){const c=wt();W(c,new ir(c,o))}ct.Ja="timingevent";function os(o,c){w.call(this,ct.Ja,o),this.size=c}m(os,w);function fn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},c)}function Yt(){this.g=!0}Yt.prototype.ua=function(){this.g=!1};function as(o,c,d,g,A,k){o.info(function(){if(o.g)if(k){var j="",pe=k.split("&");for(let Ve=0;Ve<pe.length;Ve++){var tt=pe[Ve].split("=");if(tt.length>1){const ut=tt[0];tt=tt[1];const en=ut.split("_");j=en.length>=2&&en[1]=="type"?j+(ut+"="+tt+"&"):j+(ut+"=redacted&")}}}else j=null;else j=k;return"XMLHTTP REQ ("+g+") [attempt "+A+"]: "+c+`
`+d+`
`+j})}function zo(o,c,d,g,A,k,j){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+A+"]: "+c+`
`+d+`
`+k+" "+j})}function pn(o,c,d,g){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Wo(o,d)+(g?" "+g:"")})}function qo(o,c){o.info(function(){return"TIMEOUT: "+c})}Yt.prototype.info=function(){};function Wo(o,c){if(!o.g)return c;if(!c)return null;try{const k=JSON.parse(c);if(k){for(o=0;o<k.length;o++)if(Array.isArray(k[o])){var d=k[o];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var A=g[0];if(A!="noop"&&A!="stop"&&A!="close")for(let j=1;j<g.length;j++)g[j]=""}}}}return ne(k)}catch{return c}}var or={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},di={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},fi;function ls(){}m(ls,Ie),ls.prototype.g=function(){return new XMLHttpRequest},fi=new ls;function ar(o){return encodeURIComponent(String(o))}function Ko(o){var c=1;o=o.split(":");const d=[];for(;c>0&&o.length;)d.push(o.shift()),c--;return o.length&&d.push(o.join(":")),d}function X(o,c,d,g){this.j=o,this.i=c,this.l=d,this.S=g||1,this.V=new _e(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new et}function et(){this.i=null,this.g="",this.h=!1}var zt={},Cn={};function cs(o,c,d){o.M=1,o.A=mi(Zt(c)),o.u=d,o.R=!0,Ho(o,null)}function Ho(o,c){o.F=Date.now(),pi(o),o.B=Zt(o.A);var d=o.B,g=o.S;Array.isArray(g)||(g=[String(g)]),fc(d.i,"t",g),o.C=0,d=o.j.L,o.h=new et,o.g=Pc(o.j,d?c:null,!o.u),o.P>0&&(o.O=new fe(h(o.Y,o,o.g),o.P)),c=o.V,d=o.g,g=o.ba;var A="readystatechange";Array.isArray(A)||(A&&(be[0]=A.toString()),A=be);for(let k=0;k<A.length;k++){const j=Ze(d,A[k],g||c.handleEvent,!1,c.h||c);if(!j)break;c.g[j.key]=j}c=o.J?Ye(o.J):{},o.u?(o.v||(o.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,c)):(o.v="GET",o.g.ea(o.B,o.v,null,c)),Mt(),as(o.i,o.v,o.B,o.l,o.S,o.u)}X.prototype.ba=function(o){o=o.target;const c=this.O;c&&$n(o)==3?c.j():this.Y(o)},X.prototype.Y=function(o){try{if(o==this.g)e:{const pe=$n(this.g),tt=this.g.ya(),Ve=this.g.ca();if(!(pe<3)&&(pe!=3||this.g&&(this.h.h||this.g.la()||bc(this.g)))){this.K||pe!=4||tt==7||(tt==8||Ve<=0?Mt(3):Mt(2)),Qo(this);var c=this.g.ca();this.X=c;var d=Go(this);if(this.o=c==200,zo(this.i,this.v,this.B,this.l,this.S,pe,c),this.o){if(this.U&&!this.L){t:{if(this.g){var g,A=this.g;if((g=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!p(g)){var k=g;break t}}k=null}if(o=k)pn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Jo(this,o);else{this.o=!1,this.m=3,Ge(12),lr(this),us(this);break e}}if(this.R){o=!0;let ut;for(;!this.K&&this.C<d.length;)if(ut=Vp(this,d),ut==Cn){pe==4&&(this.m=4,Ge(14),o=!1),pn(this.i,this.l,null,"[Incomplete Response]");break}else if(ut==zt){this.m=4,Ge(15),pn(this.i,this.l,d,"[Invalid Chunk]"),o=!1;break}else pn(this.i,this.l,ut,null),Jo(this,ut);if(tc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pe!=4||d.length!=0||this.h.h||(this.m=1,Ge(16),o=!1),this.o=this.o&&o,!o)pn(this.i,this.l,d,"[Invalid Chunked Response]"),lr(this),us(this);else if(d.length>0&&!this.W){this.W=!0;var j=this.j;j.g==this&&j.aa&&!j.P&&(j.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),sa(j),j.P=!0,Ge(11))}}else pn(this.i,this.l,d,null),Jo(this,d);pe==4&&lr(this),this.o&&!this.K&&(pe==4?Sc(this.j,this):(this.o=!1,pi(this)))}else Hp(this.g),c==400&&d.indexOf("Unknown SID")>0?(this.m=3,Ge(12)):(this.m=0,Ge(13)),lr(this),us(this)}}}catch{}finally{}};function Go(o){if(!tc(o))return o.g.la();const c=bc(o.g);if(c==="")return"";let d="";const g=c.length,A=$n(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return lr(o),us(o),"";o.h.i=new a.TextDecoder}for(let k=0;k<g;k++)o.h.h=!0,d+=o.h.i.decode(c[k],{stream:!(A&&k==g-1)});return c.length=0,o.h.g+=d,o.C=0,o.h.g}function tc(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Vp(o,c){var d=o.C,g=c.indexOf(`
`,d);return g==-1?Cn:(d=Number(c.substring(d,g)),isNaN(d)?zt:(g+=1,g+d>c.length?Cn:(c=c.slice(g,g+d),o.C=g+d,c)))}X.prototype.cancel=function(){this.K=!0,lr(this)};function pi(o){o.T=Date.now()+o.H,nc(o,o.H)}function nc(o,c){if(o.D!=null)throw Error("WatchDog timer not null");o.D=fn(h(o.aa,o),c)}function Qo(o){o.D&&(a.clearTimeout(o.D),o.D=null)}X.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(qo(this.i,this.B),this.M!=2&&(Mt(),Ge(17)),lr(this),this.m=2,us(this)):nc(this,this.T-o)};function us(o){o.j.I==0||o.K||Sc(o.j,o)}function lr(o){Qo(o);var c=o.O;c&&typeof c.dispose=="function"&&c.dispose(),o.O=null,Pe(o.V),o.g&&(c=o.g,o.g=null,c.abort(),c.dispose())}function Jo(o,c){try{var d=o.j;if(d.I!=0&&(d.g==o||Xo(d.h,o))){if(!o.L&&Xo(d.h,o)&&d.I==3){try{var g=d.Ba.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var A=g;if(A[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<o.F)bi(d),yi(d);else break e;ra(d),Ge(18)}}else d.xa=A[1],0<d.xa-d.K&&A[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=fn(h(d.Va,d),6e3));ic(d.h)<=1&&d.ta&&(d.ta=void 0)}else ur(d,11)}else if((o.L||d.g==o)&&bi(d),!p(c))for(A=d.Ba.g.parse(c),c=0;c<A.length;c++){let Ve=A[c];const ut=Ve[0];if(!(ut<=d.K))if(d.K=ut,Ve=Ve[1],d.I==2)if(Ve[0]=="c"){d.M=Ve[1],d.ba=Ve[2];const en=Ve[3];en!=null&&(d.ka=en,d.j.info("VER="+d.ka));const hr=Ve[4];hr!=null&&(d.za=hr,d.j.info("SVER="+d.za));const Vn=Ve[5];Vn!=null&&typeof Vn=="number"&&Vn>0&&(g=1.5*Vn,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Nn=o.g;if(Nn){const xi=Nn.g?Nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(xi){var k=g.h;k.g||xi.indexOf("spdy")==-1&&xi.indexOf("quic")==-1&&xi.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(Yo(k,k.h),k.h=null))}if(g.G){const ia=Nn.g?Nn.g.getResponseHeader("X-HTTP-Session-Id"):null;ia&&(g.wa=ia,Me(g.J,g.G,ia))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-o.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var j=o;if(g.na=Rc(g,g.L?g.ba:null,g.W),j.L){oc(g.h,j);var pe=j,tt=g.O;tt&&(pe.H=tt),pe.D&&(Qo(pe),pi(pe)),g.g=j}else Ic(g);d.i.length>0&&vi(d)}else Ve[0]!="stop"&&Ve[0]!="close"||ur(d,7);else d.I==3&&(Ve[0]=="stop"||Ve[0]=="close"?Ve[0]=="stop"?ur(d,7):na(d):Ve[0]!="noop"&&d.l&&d.l.qa(Ve),d.A=0)}}Mt(4)}catch{}}var Np=class{constructor(o,c){this.g=o,this.map=c}};function rc(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function sc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function ic(o){return o.h?1:o.g?o.g.size:0}function Xo(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Yo(o,c){o.g?o.g.add(c):o.h=c}function oc(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}rc.prototype.cancel=function(){if(this.i=ac(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function ac(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const d of o.g.values())c=c.concat(d.G);return c}return E(o.i)}var lc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Dp(o,c){if(o){o=o.split("&");for(let d=0;d<o.length;d++){const g=o[d].indexOf("=");let A,k=null;g>=0?(A=o[d].substring(0,g),k=o[d].substring(g+1)):A=o[d],c(A,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Rn(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;o instanceof Rn?(this.l=o.l,hs(this,o.j),this.o=o.o,this.g=o.g,ds(this,o.u),this.h=o.h,Zo(this,pc(o.i)),this.m=o.m):o&&(c=String(o).match(lc))?(this.l=!1,hs(this,c[1]||"",!0),this.o=fs(c[2]||""),this.g=fs(c[3]||"",!0),ds(this,c[4]),this.h=fs(c[5]||"",!0),Zo(this,c[6]||"",!0),this.m=fs(c[7]||"")):(this.l=!1,this.i=new ms(null,this.l))}Rn.prototype.toString=function(){const o=[];var c=this.j;c&&o.push(ps(c,cc,!0),":");var d=this.g;return(d||c=="file")&&(o.push("//"),(c=this.o)&&o.push(ps(c,cc,!0),"@"),o.push(ar(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&o.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(ps(d,d.charAt(0)=="/"?Mp:Lp,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",ps(d,Fp)),o.join("")},Rn.prototype.resolve=function(o){const c=Zt(this);let d=!!o.j;d?hs(c,o.j):d=!!o.o,d?c.o=o.o:d=!!o.g,d?c.g=o.g:d=o.u!=null;var g=o.h;if(d)ds(c,o.u);else if(d=!!o.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var A=c.h.lastIndexOf("/");A!=-1&&(g=c.h.slice(0,A+1)+g)}if(A=g,A==".."||A==".")g="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){g=A.lastIndexOf("/",0)==0,A=A.split("/");const k=[];for(let j=0;j<A.length;){const pe=A[j++];pe=="."?g&&j==A.length&&k.push(""):pe==".."?((k.length>1||k.length==1&&k[0]!="")&&k.pop(),g&&j==A.length&&k.push("")):(k.push(pe),g=!0)}g=k.join("/")}else g=A}return d?c.h=g:d=o.i.toString()!=="",d?Zo(c,pc(o.i)):d=!!o.m,d&&(c.m=o.m),c};function Zt(o){return new Rn(o)}function hs(o,c,d){o.j=d?fs(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function ds(o,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);o.u=c}else o.u=null}function Zo(o,c,d){c instanceof ms?(o.i=c,jp(o.i,o.l)):(d||(c=ps(c,Up)),o.i=new ms(c,o.l))}function Me(o,c,d){o.i.set(c,d)}function mi(o){return Me(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function fs(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ps(o,c,d){return typeof o=="string"?(o=encodeURI(o).replace(c,Op),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Op(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var cc=/[#\/\?@]/g,Lp=/[#\?:]/g,Mp=/[#\?]/g,Up=/[#\?@]/g,Fp=/#/g;function ms(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function cr(o){o.g||(o.g=new Map,o.h=0,o.i&&Dp(o.i,function(c,d){o.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}n=ms.prototype,n.add=function(o,c){cr(this),this.i=null,o=Sr(this,o);let d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(c),this.h+=1,this};function uc(o,c){cr(o),c=Sr(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function hc(o,c){return cr(o),c=Sr(o,c),o.g.has(c)}n.forEach=function(o,c){cr(this),this.g.forEach(function(d,g){d.forEach(function(A){o.call(c,A,g,this)},this)},this)};function dc(o,c){cr(o);let d=[];if(typeof c=="string")hc(o,c)&&(d=d.concat(o.g.get(Sr(o,c))));else for(o=Array.from(o.g.values()),c=0;c<o.length;c++)d=d.concat(o[c]);return d}n.set=function(o,c){return cr(this),this.i=null,o=Sr(this,o),hc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=dc(this,o),o.length>0?String(o[0]):c):c};function fc(o,c,d){uc(o,c),d.length>0&&(o.i=null,o.g.set(Sr(o,c),E(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(let g=0;g<c.length;g++){var d=c[g];const A=ar(d);d=dc(this,d);for(let k=0;k<d.length;k++){let j=A;d[k]!==""&&(j+="="+ar(d[k])),o.push(j)}}return this.i=o.join("&")};function pc(o){const c=new ms;return c.i=o.i,o.g&&(c.g=new Map(o.g),c.h=o.h),c}function Sr(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function jp(o,c){c&&!o.j&&(cr(o),o.i=null,o.g.forEach(function(d,g){const A=g.toLowerCase();g!=A&&(uc(this,g),fc(this,A,d))},o)),o.j=c}function Bp(o,c){const d=new Yt;if(a.Image){const g=new Image;g.onload=f(Pn,d,"TestLoadImage: loaded",!0,c,g),g.onerror=f(Pn,d,"TestLoadImage: error",!1,c,g),g.onabort=f(Pn,d,"TestLoadImage: abort",!1,c,g),g.ontimeout=f(Pn,d,"TestLoadImage: timeout",!1,c,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else c(!1)}function zp(o,c){const d=new Yt,g=new AbortController,A=setTimeout(()=>{g.abort(),Pn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:g.signal}).then(k=>{clearTimeout(A),k.ok?Pn(d,"TestPingServer: ok",!0,c):Pn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(A),Pn(d,"TestPingServer: error",!1,c)})}function Pn(o,c,d,g,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),g(d)}catch{}}function qp(){this.g=new de}function ea(o){this.i=o.Sb||null,this.h=o.ab||!1}m(ea,Ie),ea.prototype.g=function(){return new gi(this.i,this.h)};function gi(o,c){J.call(this),this.H=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(gi,J),n=gi.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=c,this.readyState=1,_s(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(c.body=o),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,gs(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,_s(this)),this.g&&(this.readyState=3,_s(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;mc(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function mc(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?gs(this):_s(this),this.readyState==3&&mc(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,gs(this))},n.Na=function(o){this.g&&(this.response=o,gs(this))},n.ga=function(){this.g&&gs(this)};function gs(o){o.readyState=4,o.l=null,o.j=null,o.B=null,_s(o)}n.setRequestHeader=function(o,c){this.A.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=c.next();return o.join(`\r
`)};function _s(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(gi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function gc(o){let c="";return je(o,function(d,g){c+=g,c+=":",c+=d,c+=`\r
`}),c}function ta(o,c,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=gc(d),typeof o=="string"?d!=null&&ar(d):Me(o,c,d))}function qe(o){J.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(qe,J);var Wp=/^https?$/i,Kp=["POST","PUT"];n=qe.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,c,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():fi.g(),this.g.onreadystatechange=x(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(k){_c(this,k);return}if(o=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var A in g)d.set(A,g[A]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const k of g.keys())d.set(k,g.get(k));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(k=>k.toLowerCase()=="content-type"),A=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Kp,c,void 0)>=0)||g||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,j]of d)this.g.setRequestHeader(k,j);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(k){_c(this,k)}};function _c(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.o=5,yc(o),_i(o)}function yc(o){o.A||(o.A=!0,W(o,"complete"),W(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,W(this,"complete"),W(this,"abort"),_i(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),_i(this,!0)),qe.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?vc(this):this.Xa())},n.Xa=function(){vc(this)};function vc(o){if(o.h&&typeof i<"u"){if(o.v&&$n(o)==4)setTimeout(o.Ca.bind(o),0);else if(W(o,"readystatechange"),$n(o)==4){o.h=!1;try{const k=o.ca();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var g;if(g=k===0){let j=String(o.D).match(lc)[1]||null;!j&&a.self&&a.self.location&&(j=a.self.location.protocol.slice(0,-1)),g=!Wp.test(j?j.toLowerCase():"")}d=g}if(d)W(o,"complete"),W(o,"success");else{o.o=6;try{var A=$n(o)>2?o.g.statusText:""}catch{A=""}o.l=A+" ["+o.ca()+"]",yc(o)}}finally{_i(o)}}}}function _i(o,c){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const d=o.g;o.g=null,c||W(o,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function $n(o){return o.g?o.g.readyState:0}n.ca=function(){try{return $n(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),he(c)}};function bc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Hp(o){const c={};o=(o.g&&$n(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(p(o[g]))continue;var d=Ko(o[g]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const k=c[A]||[];c[A]=k,k.push(d)}$e(c,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ys(o,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||c}function wc(o){this.za=0,this.i=[],this.j=new Yt,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ys("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ys("baseRetryDelayMs",5e3,o),this.Za=ys("retryDelaySeedMs",1e4,o),this.Ta=ys("forwardChannelMaxRetries",2,o),this.va=ys("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new rc(o&&o.concurrentRequestLimit),this.Ba=new qp,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=wc.prototype,n.ka=8,n.I=1,n.connect=function(o,c,d,g){Ge(0),this.W=o,this.H=c||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=Rc(this,null,this.W),vi(this)};function na(o){if(xc(o),o.I==3){var c=o.V++,d=Zt(o.J);if(Me(d,"SID",o.M),Me(d,"RID",c),Me(d,"TYPE","terminate"),vs(o,d),c=new X(o,o.j,c),c.M=2,c.A=mi(Zt(d)),d=!1,a.navigator&&a.navigator.sendBeacon)try{d=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!d&&a.Image&&(new Image().src=c.A,d=!0),d||(c.g=Pc(c.j,null),c.g.ea(c.A)),c.F=Date.now(),pi(c)}Cc(o)}function yi(o){o.g&&(sa(o),o.g.cancel(),o.g=null)}function xc(o){yi(o),o.v&&(a.clearTimeout(o.v),o.v=null),bi(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function vi(o){if(!sc(o.h)&&!o.m){o.m=!0;var c=o.Ea;Y||_(),D||(Y(),D=!0),b.add(c,o),o.D=0}}function Gp(o,c){return ic(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=c.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=fn(h(o.Ea,o,c),kc(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const A=new X(this,this.j,o);let k=this.o;if(this.U&&(k?(k=Ye(k),He(k,this.U)):k=this.U),this.u!==null||this.R||(A.J=k,k=null),this.S)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,c>4096){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Tc(this,A,c),d=Zt(this.J),Me(d,"RID",o),Me(d,"CVER",22),this.G&&Me(d,"X-HTTP-Session-Id",this.G),vs(this,d),k&&(this.R?c="headers="+ar(gc(k))+"&"+c:this.u&&ta(d,this.u,k)),Yo(this.h,A),this.Ra&&Me(d,"TYPE","init"),this.S?(Me(d,"$req",c),Me(d,"SID","null"),A.U=!0,cs(A,d,null)):cs(A,d,c),this.I=2}}else this.I==3&&(o?Ec(this,o):this.i.length==0||sc(this.h)||Ec(this))};function Ec(o,c){var d;c?d=c.l:d=o.V++;const g=Zt(o.J);Me(g,"SID",o.M),Me(g,"RID",d),Me(g,"AID",o.K),vs(o,g),o.u&&o.o&&ta(g,o.u,o.o),d=new X(o,o.j,d,o.D+1),o.u===null&&(d.J=o.o),c&&(o.i=c.G.concat(o.i)),c=Tc(o,d,1e3),d.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Yo(o.h,d),cs(d,g,c)}function vs(o,c){o.H&&je(o.H,function(d,g){Me(c,g,d)}),o.l&&je({},function(d,g){Me(c,g,d)})}function Tc(o,c,d){d=Math.min(o.i.length,d);const g=o.l?h(o.l.Ka,o.l,o):null;e:{var A=o.i;let pe=-1;for(;;){const tt=["count="+d];pe==-1?d>0?(pe=A[0].g,tt.push("ofs="+pe)):pe=0:tt.push("ofs="+pe);let Ve=!0;for(let ut=0;ut<d;ut++){var k=A[ut].g;const en=A[ut].map;if(k-=pe,k<0)pe=Math.max(0,A[ut].g-100),Ve=!1;else try{k="req"+k+"_"||"";try{var j=en instanceof Map?en:Object.entries(en);for(const[hr,Vn]of j){let Nn=Vn;l(Vn)&&(Nn=ne(Vn)),tt.push(k+hr+"="+encodeURIComponent(Nn))}}catch(hr){throw tt.push(k+"type="+encodeURIComponent("_badmap")),hr}}catch{g&&g(en)}}if(Ve){j=tt.join("&");break e}}j=void 0}return o=o.i.splice(0,d),c.G=o,j}function Ic(o){if(!o.g&&!o.v){o.Y=1;var c=o.Da;Y||_(),D||(Y(),D=!0),b.add(c,o),o.A=0}}function ra(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=fn(h(o.Da,o),kc(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,Ac(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=fn(h(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ge(10),yi(this),Ac(this))};function sa(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Ac(o){o.g=new X(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var c=Zt(o.na);Me(c,"RID","rpc"),Me(c,"SID",o.M),Me(c,"AID",o.K),Me(c,"CI",o.F?"0":"1"),!o.F&&o.ia&&Me(c,"TO",o.ia),Me(c,"TYPE","xmlhttp"),vs(o,c),o.u&&o.o&&ta(c,o.u,o.o),o.O&&(o.g.H=o.O);var d=o.g;o=o.ba,d.M=1,d.A=mi(Zt(c)),d.u=null,d.R=!0,Ho(d,o)}n.Va=function(){this.C!=null&&(this.C=null,yi(this),ra(this),Ge(19))};function bi(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Sc(o,c){var d=null;if(o.g==c){bi(o),sa(o),o.g=null;var g=2}else if(Xo(o.h,c))d=c.G,oc(o.h,c),g=1;else return;if(o.I!=0){if(c.o)if(g==1){d=c.u?c.u.length:0,c=Date.now()-c.F;var A=o.D;g=wt(),W(g,new os(g,d)),vi(o)}else Ic(o);else if(A=c.m,A==3||A==0&&c.X>0||!(g==1&&Gp(o,c)||g==2&&ra(o)))switch(d&&d.length>0&&(c=o.h,c.i=c.i.concat(d)),A){case 1:ur(o,5);break;case 4:ur(o,10);break;case 3:ur(o,6);break;default:ur(o,2)}}}function kc(o,c){let d=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(d*=2),d*c}function ur(o,c){if(o.j.info("Error code "+c),c==2){var d=h(o.bb,o),g=o.Ua;const A=!g;g=new Rn(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||hs(g,"https"),mi(g),A?Bp(g.toString(),d):zp(g.toString(),d)}else Ge(2);o.I=0,o.l&&o.l.pa(c),Cc(o),xc(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Ge(2)):(this.j.info("Failed to ping google.com"),Ge(1))};function Cc(o){if(o.I=0,o.ja=[],o.l){const c=ac(o.h);(c.length!=0||o.i.length!=0)&&($(o.ja,c),$(o.ja,o.i),o.h.i.length=0,E(o.i),o.i.length=0),o.l.oa()}}function Rc(o,c,d){var g=d instanceof Rn?Zt(d):new Rn(d);if(g.g!="")c&&(g.g=c+"."+g.g),ds(g,g.u);else{var A=a.location;g=A.protocol,c=c?c+"."+A.hostname:A.hostname,A=+A.port;const k=new Rn(null);g&&hs(k,g),c&&(k.g=c),A&&ds(k,A),d&&(k.h=d),g=k}return d=o.G,c=o.wa,d&&c&&Me(g,d,c),Me(g,"VER",o.ka),vs(o,g),g}function Pc(o,c,d){if(c&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Aa&&!o.ma?new qe(new ea({ab:d})):new qe(o.ma),c.Fa(o.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function $c(){}n=$c.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function wi(){}wi.prototype.g=function(o,c){return new Dt(o,c)};function Dt(o,c){J.call(this),this.g=new wc(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(o?o["X-WebChannel-Client-Profile"]=c.sa:o={"X-WebChannel-Client-Profile":c.sa}),this.g.U=o,(o=c&&c.Qb)&&!p(o)&&(this.g.u=o),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!p(c)&&(this.g.G=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new kr(this)}m(Dt,J),Dt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){na(this.g)},Dt.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.v&&(d={},d.__data__=ne(o),o=d);c.i.push(new Np(c.Ya++,o)),c.I==3&&vi(c)},Dt.prototype.N=function(){this.g.l=null,delete this.j,na(this.g),delete this.g,Dt.Z.N.call(this)};function Vc(o){ze.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const d in c){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}m(Vc,ze);function Nc(){lt.call(this),this.status=1}m(Nc,lt);function kr(o){this.g=o}m(kr,$c),kr.prototype.ra=function(){W(this.g,"a")},kr.prototype.qa=function(o){W(this.g,new Vc(o))},kr.prototype.pa=function(o){W(this.g,new Nc)},kr.prototype.oa=function(){W(this.g,"b")},wi.prototype.createWebChannel=wi.prototype.g,Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,Kd=function(){return new wi},Wd=function(){return wt()},qd=ct,Na={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},or.NO_ERROR=0,or.TIMEOUT=8,or.HTTP_ERROR=6,Di=or,di.COMPLETE="complete",zd=di,at.EventType=Be,Be.OPEN="a",Be.CLOSE="b",Be.ERROR="c",Be.MESSAGE="d",J.prototype.listen=J.prototype.J,Ts=at,qe.prototype.listenOnce=qe.prototype.K,qe.prototype.getLastError=qe.prototype.Ha,qe.prototype.getLastErrorCode=qe.prototype.ya,qe.prototype.getStatus=qe.prototype.ca,qe.prototype.getResponseJson=qe.prototype.La,qe.prototype.getResponseText=qe.prototype.la,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Fa,Bd=qe}).apply(typeof Ii<"u"?Ii:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class Et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Et.UNAUTHENTICATED=new Et(null),Et.GOOGLE_CREDENTIALS=new Et("google-credentials-uid"),Et.FIRST_PARTY=new Et("first-party-uid"),Et.MOCK_USER=new Et("mock-user");/**
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
 */let es="12.14.0";function ab(n){es=n}/**
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
 */const wr=new ol("@firebase/firestore");function Rr(){return wr.logLevel}function K(n,...e){if(wr.logLevel<=ye.DEBUG){const t=e.map(_l);wr.debug(`Firestore (${es}): ${n}`,...t)}}function Tn(n,...e){if(wr.logLevel<=ye.ERROR){const t=e.map(_l);wr.error(`Firestore (${es}): ${n}`,...t)}}function xr(n,...e){if(wr.logLevel<=ye.WARN){const t=e.map(_l);wr.warn(`Firestore (${es}): ${n}`,...t)}}function _l(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function ae(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Hd(n,r,t)}function Hd(n,e,t){let r=`FIRESTORE (${es}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Tn(r),new Error(r)}function Ce(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Hd(e,s,r)}function ue(n,e){return n}/**
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
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends An{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class bn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Gd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class lb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Et.UNAUTHENTICATED))}shutdown(){}}class cb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class ub{constructor(e){this.t=e,this.currentUser=Et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ce(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new bn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new bn,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new bn)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ce(typeof r.accessToken=="string",31837,{l:r}),new Gd(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ce(e===null||typeof e=="string",2055,{h:e}),new Et(e)}}class hb{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Et.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class db{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new hb(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _u{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fb{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ut(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ce(this.o===void 0,3512);const r=i=>{i.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,K("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new _u(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ce(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new _u(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */class yl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=pb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function me(n,e){return n<e?-1:n>e?1:0}function Da(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return _a(s)===_a(i)?me(s,i):_a(s)?1:-1}return me(n.length,e.length)}const mb=55296,gb=57343;function _a(n){const e=n.charCodeAt(0);return e>=mb&&e<=gb}function qr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const yu="__name__";class nn{constructor(e,t,r){t===void 0?t=0:t>e.length&&ae(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&ae(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return nn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof nn?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=nn.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return me(e.length,t.length)}static compareSegments(e,t){const r=nn.isNumericId(e),s=nn.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?nn.extractNumericId(e).compare(nn.extractNumericId(t)):Da(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return qn.fromString(e.substring(4,e.length-2))}}class De extends nn{construct(e,t,r){return new De(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new Q(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new De(t)}static emptyPath(){return new De([])}}const _b=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends nn{construct(e,t,r){return new yt(e,t,r)}static isValidIdentifier(e){return _b.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===yu}static keyField(){return new yt([yu])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Q(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new Q(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new Q(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new Q(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new yt(t)}static emptyPath(){return new yt([])}}/**
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
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(De.fromString(e))}static fromName(e){return new re(De.fromString(e).popFirst(5))}static empty(){return new re(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return De.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new De(e.slice()))}}/**
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
 */function Qd(n,e,t){if(!t)throw new Q(O.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function yb(n,e,t,r){if(e===!0&&r===!0)throw new Q(O.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function vu(n){if(!re.isDocumentKey(n))throw new Q(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function bu(n){if(re.isDocumentKey(n))throw new Q(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Jd(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function xo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ae(12329,{type:typeof n})}function Qt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new Q(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=xo(n);throw new Q(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Xe(n,e){const t={typeString:n};return e&&(t.value=e),t}function ri(n,e){if(!Jd(n))throw new Q(O.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new Q(O.INVALID_ARGUMENT,t);return!0}/**
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
 */const wu=-62135596800,xu=1e6;class Ue{static now(){return Ue.fromMillis(Date.now())}static fromDate(e){return Ue.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*xu);return new Ue(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Q(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Q(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<wu)throw new Q(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Q(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/xu}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ue._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ri(e,Ue._jsonSchema))return new Ue(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-wu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ue._jsonSchemaVersion="firestore/timestamp/1.0",Ue._jsonSchema={type:Xe("string",Ue._jsonSchemaVersion),seconds:Xe("number"),nanoseconds:Xe("number")};/**
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
 */class le{static fromTimestamp(e){return new le(e)}static min(){return new le(new Ue(0,0))}static max(){return new le(new Ue(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Fs=-1;function vb(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=le.fromTimestamp(r===1e9?new Ue(t+1,0):new Ue(t,r));return new Kn(s,re.empty(),e)}function bb(n){return new Kn(n.readTime,n.key,Fs)}class Kn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Kn(le.min(),re.empty(),Fs)}static max(){return new Kn(le.max(),re.empty(),Fs)}}function wb(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=re.comparator(n.documentKey,e.documentKey),t!==0?t:me(n.largestBatchId,e.largestBatchId))}/**
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
 */async function ts(n){if(n.code!==O.FAILED_PRECONDITION||n.message!==xb)throw n;K("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ae(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new L((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof L?t:L.resolve(t)}catch(t){return L.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):L.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):L.reject(t)}static resolve(e){return new L((t,r)=>{t(e)})}static reject(e){return new L((t,r)=>{r(e)})}static waitFor(e){return new L((t,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=L.resolve(!1);for(const r of e)t=t.next(s=>s?L.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new L((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;t(e[h]).next(f=>{a[h]=f,++l,l===i&&r(a)},f=>s(f))}})}static doWhile(e,t){return new L((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function Tb(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ns(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Eo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Eo.ce=-1;/**
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
 */const vl=-1;function To(n){return n==null}function to(n){return n===0&&1/n==-1/0}function Ib(n){return typeof n=="number"&&Number.isInteger(n)&&!to(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Xd="";function Ab(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Eu(e)),e=Sb(n.get(t),e);return Eu(e)}function Sb(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Xd:t+="";break;default:t+=i}}return t}function Eu(n){return n+Xd+""}/**
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
 */function Tu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function rr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Yd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Fe{constructor(e,t){this.comparator=e,this.root=t||_t.EMPTY}insert(e,t){return new Fe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,_t.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_t.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ai(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ai(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ai(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ai(this.root,e,this.comparator,!0)}}class Ai{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class _t{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??_t.RED,this.left=s??_t.EMPTY,this.right=i??_t.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new _t(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return _t.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return _t.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ae(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ae(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ae(27949);return e+(this.isRed()?0:1)}}_t.EMPTY=null,_t.RED=!0,_t.BLACK=!1;_t.EMPTY=new class{constructor(){this.size=0}get key(){throw ae(57766)}get value(){throw ae(16141)}get color(){throw ae(16727)}get left(){throw ae(29726)}get right(){throw ae(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new _t(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class st{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Iu(this.data.getIterator())}getIteratorFrom(e){return new Iu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof st)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new st(this.comparator);return t.data=e,t}}class Iu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ot{constructor(e){this.fields=e,e.sort(yt.comparator)}static empty(){return new Ot([])}unionWith(e){let t=new st(yt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ot(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return qr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Zd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class vt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Zd("Invalid base64 string: "+i):i}}(e);return new vt(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new vt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}vt.EMPTY_BYTE_STRING=new vt("");const kb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hn(n){if(Ce(!!n,39018),typeof n=="string"){let e=0;const t=kb.exec(n);if(Ce(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:We(n.seconds),nanos:We(n.nanos)}}function We(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Gn(n){return typeof n=="string"?vt.fromBase64String(n):vt.fromUint8Array(n)}/**
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
 */const ef="server_timestamp",tf="__type__",nf="__previous_value__",rf="__local_write_time__";function bl(n){return(n?.mapValue?.fields||{})[tf]?.stringValue===ef}function Io(n){const e=n.mapValue.fields[nf];return bl(e)?Io(e):e}function js(n){const e=Hn(n.mapValue.fields[rf].timestampValue);return new Ue(e.seconds,e.nanos)}/**
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
 */class Cb{constructor(e,t,r,s,i,a,l,u,h,f,m){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=m}}const no="(default)";class Bs{constructor(e,t){this.projectId=e,this.database=t||no}static empty(){return new Bs("","")}get isDefaultDatabase(){return this.database===no}isEqual(e){return e instanceof Bs&&e.projectId===this.projectId&&e.database===this.database}}function Rb(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new Q(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bs(n.options.projectId,e)}/**
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
 */const sf="__type__",Pb="__max__",Si={mapValue:{}},of="__vector__",ro="value";function Qn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?bl(n)?4:Vb(n)?9007199254740991:$b(n)?10:11:ae(28295,{value:n})}function un(n,e){if(n===e)return!0;const t=Qn(n);if(t!==Qn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return js(n).isEqual(js(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Hn(s.timestampValue),l=Hn(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Gn(s.bytesValue).isEqual(Gn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return We(s.geoPointValue.latitude)===We(i.geoPointValue.latitude)&&We(s.geoPointValue.longitude)===We(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return We(s.integerValue)===We(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=We(s.doubleValue),l=We(i.doubleValue);return a===l?to(a)===to(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return qr(n.arrayValue.values||[],e.arrayValue.values||[],un);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Tu(a)!==Tu(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!un(a[u],l[u])))return!1;return!0}(n,e);default:return ae(52216,{left:n})}}function zs(n,e){return(n.values||[]).find(t=>un(t,e))!==void 0}function Wr(n,e){if(n===e)return 0;const t=Qn(n),r=Qn(e);if(t!==r)return me(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return me(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=We(i.integerValue||i.doubleValue),u=We(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return Au(n.timestampValue,e.timestampValue);case 4:return Au(js(n),js(e));case 5:return Da(n.stringValue,e.stringValue);case 6:return function(i,a){const l=Gn(i),u=Gn(a);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),u=a.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=me(l[h],u[h]);if(f!==0)return f}return me(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=me(We(i.latitude),We(a.latitude));return l!==0?l:me(We(i.longitude),We(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Su(n.arrayValue,e.arrayValue);case 10:return function(i,a){const l=i.fields||{},u=a.fields||{},h=l[ro]?.arrayValue,f=u[ro]?.arrayValue,m=me(h?.values?.length||0,f?.values?.length||0);return m!==0?m:Su(h,f)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===Si.mapValue&&a===Si.mapValue)return 0;if(i===Si.mapValue)return 1;if(a===Si.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=a.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const x=Da(u[m],f[m]);if(x!==0)return x;const E=Wr(l[u[m]],h[f[m]]);if(E!==0)return E}return me(u.length,f.length)}(n.mapValue,e.mapValue);default:throw ae(23264,{he:t})}}function Au(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return me(n,e);const t=Hn(n),r=Hn(e),s=me(t.seconds,r.seconds);return s!==0?s:me(t.nanos,r.nanos)}function Su(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Wr(t[s],r[s]);if(i)return i}return me(t.length,r.length)}function Kr(n){return Oa(n)}function Oa(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Hn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Gn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return re.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Oa(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Oa(t.fields[a])}`;return s+"}"}(n.mapValue):ae(61005,{value:n})}function Oi(n){switch(Qn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Io(n);return e?16+Oi(e):16;case 5:return 2*n.stringValue.length;case 6:return Gn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Oi(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return rr(r.fields,(i,a)=>{s+=i.length+Oi(a)}),s}(n.mapValue);default:throw ae(13486,{value:n})}}function ku(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function qs(n){return!!n&&"integerValue"in n}function af(n){return qs(n)||function(t){return!!t&&"doubleValue"in t}(n)}function wl(n){return!!n&&"arrayValue"in n}function Cu(n){return!!n&&"nullValue"in n}function Ru(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Li(n){return!!n&&"mapValue"in n}function $b(n){return(n?.mapValue?.fields||{})[sf]?.stringValue===of}function Rs(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return rr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Rs(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Rs(n.arrayValue.values[t]);return e}return{...n}}function Vb(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Pb}/**
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
 */class Vt{constructor(e){this.value=e}static empty(){return new Vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Li(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Rs(t)}setAll(e){let t=yt.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=Rs(a):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Li(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return un(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Li(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){rr(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Vt(Rs(this.value))}}function lf(n){const e=[];return rr(n.fields,(t,r)=>{const s=new yt([t]);if(Li(r)){const i=lf(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Ot(e)}/**
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
 */class Tt{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Tt(e,0,le.min(),le.min(),le.min(),Vt.empty(),0)}static newFoundDocument(e,t,r,s){return new Tt(e,1,t,le.min(),r,s,0)}static newNoDocument(e,t){return new Tt(e,2,t,le.min(),le.min(),Vt.empty(),0)}static newUnknownDocument(e,t){return new Tt(e,3,t,le.min(),le.min(),Vt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class so{constructor(e,t){this.position=e,this.inclusive=t}}function Pu(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=re.comparator(re.fromName(a.referenceValue),t.key):r=Wr(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function $u(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!un(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class io{constructor(e,t="asc"){this.field=e,this.dir=t}}function Nb(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class cf{}class Je extends cf{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Ob(e,t,r):t==="array-contains"?new Ub(e,r):t==="in"?new Fb(e,r):t==="not-in"?new jb(e,r):t==="array-contains-any"?new Bb(e,r):new Je(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Lb(e,r):new Mb(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Wr(t,this.value)):t!==null&&Qn(this.value)===Qn(t)&&this.matchesComparison(Wr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ae(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Jt extends cf{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Jt(e,t)}matches(e){return uf(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function uf(n){return n.op==="and"}function hf(n){return Db(n)&&uf(n)}function Db(n){for(const e of n.filters)if(e instanceof Jt)return!1;return!0}function La(n){if(n instanceof Je)return n.field.canonicalString()+n.op.toString()+Kr(n.value);if(hf(n))return n.filters.map(e=>La(e)).join(",");{const e=n.filters.map(t=>La(t)).join(",");return`${n.op}(${e})`}}function df(n,e){return n instanceof Je?function(r,s){return s instanceof Je&&r.op===s.op&&r.field.isEqual(s.field)&&un(r.value,s.value)}(n,e):n instanceof Jt?function(r,s){return s instanceof Jt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&df(a,s.filters[l]),!0):!1}(n,e):void ae(19439)}function ff(n){return n instanceof Je?function(t){return`${t.field.canonicalString()} ${t.op} ${Kr(t.value)}`}(n):n instanceof Jt?function(t){return t.op.toString()+" {"+t.getFilters().map(ff).join(" ,")+"}"}(n):"Filter"}class Ob extends Je{constructor(e,t,r){super(e,t,r),this.key=re.fromName(r.referenceValue)}matches(e){const t=re.comparator(e.key,this.key);return this.matchesComparison(t)}}class Lb extends Je{constructor(e,t){super(e,"in",t),this.keys=pf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Mb extends Je{constructor(e,t){super(e,"not-in",t),this.keys=pf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function pf(n,e){return(e.arrayValue?.values||[]).map(t=>re.fromName(t.referenceValue))}class Ub extends Je{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return wl(t)&&zs(t.arrayValue,this.value)}}class Fb extends Je{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&zs(this.value.arrayValue,t)}}class jb extends Je{constructor(e,t){super(e,"not-in",t)}matches(e){if(zs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!zs(this.value.arrayValue,t)}}class Bb extends Je{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!wl(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>zs(this.value.arrayValue,r))}}/**
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
 */class zb{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Te=null}}function Vu(n,e=null,t=[],r=[],s=null,i=null,a=null){return new zb(n,e,t,r,s,i,a)}function xl(n){const e=ue(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>La(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),To(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Kr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Kr(r)).join(",")),e.Te=t}return e.Te}function El(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Nb(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!df(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!$u(n.startAt,e.startAt)&&$u(n.endAt,e.endAt)}function Ma(n){return re.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class si{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function qb(n,e,t,r,s,i,a,l){return new si(n,e,t,r,s,i,a,l)}function Tl(n){return new si(n)}function Nu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Wb(n){return re.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function mf(n){return n.collectionGroup!==null}function Ps(n){const e=ue(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new st(yt.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new io(i,r))}),t.has(yt.keyField().canonicalString())||e.Ie.push(new io(yt.keyField(),r))}return e.Ie}function on(n){const e=ue(n);return e.Ee||(e.Ee=Kb(e,Ps(n))),e.Ee}function Kb(n,e){if(n.limitType==="F")return Vu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new io(s.field,i)});const t=n.endAt?new so(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new so(n.startAt.position,n.startAt.inclusive):null;return Vu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ua(n,e){const t=n.filters.concat([e]);return new si(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Fa(n,e,t){return new si(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ao(n,e){return El(on(n),on(e))&&n.limitType===e.limitType}function gf(n){return`${xl(on(n))}|lt:${n.limitType}`}function Pr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>ff(s)).join(", ")}]`),To(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Kr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Kr(s)).join(",")),`Target(${r})`}(on(n))}; limitType=${n.limitType})`}function So(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):re.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Ps(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,u){const h=Pu(a,l,u);return a.inclusive?h<=0:h<0}(r.startAt,Ps(r),s)||r.endAt&&!function(a,l,u){const h=Pu(a,l,u);return a.inclusive?h>=0:h>0}(r.endAt,Ps(r),s))}(n,e)}function Hb(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function _f(n){return(e,t)=>{let r=!1;for(const s of Ps(n)){const i=Gb(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Gb(n,e,t){const r=n.field.isKeyField()?re.comparator(e.key,t.key):function(i,a,l){const u=a.data.field(i),h=l.data.field(i);return u!==null&&h!==null?Wr(u,h):ae(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ae(19790,{direction:n.dir})}}/**
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
 */class Er{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){rr(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Yd(this.inner)}size(){return this.innerSize}}/**
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
 */const Qb=new Fe(re.comparator);function In(){return Qb}const yf=new Fe(re.comparator);function Is(...n){let e=yf;for(const t of n)e=e.insert(t.key,t);return e}function vf(n){let e=yf;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function mr(){return $s()}function bf(){return $s()}function $s(){return new Er(n=>n.toString(),(n,e)=>n.isEqual(e))}const Jb=new Fe(re.comparator),Xb=new st(re.comparator);function ge(...n){let e=Xb;for(const t of n)e=e.add(t);return e}const Yb=new st(me);function Zb(){return Yb}/**
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
 */function ko(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:to(e)?"-0":e}}function Il(n){return{integerValue:""+n}}function ew(n,e){return Ib(e)?Il(e):ko(n,e)}/**
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
 */class Co{constructor(){this._=void 0}}function tw(n,e,t){return n instanceof Ws?function(s,i){const a={fields:{[tf]:{stringValue:ef},[rf]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&bl(i)&&(i=Io(i)),i&&(a.fields[nf]=i),{mapValue:a}}(t,e):n instanceof Hr?xf(n,e):n instanceof Gr?Ef(n,e):n instanceof Ks?function(s,i){const a=wf(s,i),l=lo(a)+lo(s.Ae);return qs(a)&&qs(s.Ae)?Il(l):ko(s.serializer,l)}(n,e):n instanceof oo?function(s,i){return Du(s,i,Math.min)}(n,e):n instanceof ao?function(s,i){return Du(s,i,Math.max)}(n,e):void 0}function nw(n,e,t){return n instanceof Hr?xf(n,e):n instanceof Gr?Ef(n,e):t}function wf(n,e){return n instanceof Ks?af(e)?e:{integerValue:0}:null}class Ws extends Co{}class Hr extends Co{constructor(e){super(),this.elements=e}}function xf(n,e){const t=Tf(e);for(const r of n.elements)t.some(s=>un(s,r))||t.push(r);return{arrayValue:{values:t}}}class Gr extends Co{constructor(e){super(),this.elements=e}}function Ef(n,e){let t=Tf(e);for(const r of n.elements)t=t.filter(s=>!un(s,r));return{arrayValue:{values:t}}}class Al extends Co{constructor(e,t){super(),this.serializer=e,this.Ae=t}}class Ks extends Al{}class oo extends Al{}class ao extends Al{}function Du(n,e,t){if(!af(e))return n.Ae;const r=t(lo(e),lo(n.Ae));return qs(e)&&qs(n.Ae)?Il(r):ko(n.serializer,r)}function lo(n){return We(n.integerValue||n.doubleValue)}function Tf(n){return wl(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Sl{constructor(e,t){this.field=e,this.transform=t}}function rw(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Hr&&s instanceof Hr||r instanceof Gr&&s instanceof Gr?qr(r.elements,s.elements,un):r instanceof Ks&&s instanceof Ks||r instanceof oo&&s instanceof oo||r instanceof ao&&s instanceof ao?un(r.Ae,s.Ae):r instanceof Ws&&s instanceof Ws}(n.transform,e.transform)}class sw{constructor(e,t){this.version=e,this.transformResults=t}}class jt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new jt}static exists(e){return new jt(void 0,e)}static updateTime(e){return new jt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Mi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ro{}function If(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new kl(n.key,jt.none()):new ii(n.key,n.data,jt.none());{const t=n.data,r=Vt.empty();let s=new st(yt.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new sr(n.key,r,new Ot(s.toArray()),jt.none())}}function iw(n,e,t){n instanceof ii?function(s,i,a){const l=s.value.clone(),u=Lu(s.fieldTransforms,i,a.transformResults);l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof sr?function(s,i,a){if(!Mi(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Lu(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(Af(s)),u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Vs(n,e,t,r){return n instanceof ii?function(i,a,l,u){if(!Mi(i.precondition,a))return l;const h=i.value.clone(),f=Mu(i.fieldTransforms,u,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof sr?function(i,a,l,u){if(!Mi(i.precondition,a))return l;const h=Mu(i.fieldTransforms,u,a),f=a.data;return f.setAll(Af(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(i,a,l){return Mi(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function ow(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=wf(r.transform,s||null);i!=null&&(t===null&&(t=Vt.empty()),t.set(r.field,i))}return t||null}function Ou(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&qr(r,s,(i,a)=>rw(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ii extends Ro{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class sr extends Ro{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Af(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Lu(n,e,t){const r=new Map;Ce(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,nw(a,l,t[s]))}return r}function Mu(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,tw(i,a,e))}return r}class kl extends Ro{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class aw extends Ro{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class lw{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&iw(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Vs(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Vs(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=bf();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const u=If(a,l);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(le.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ge())}isEqual(e){return this.batchId===e.batchId&&qr(this.mutations,e.mutations,(t,r)=>Ou(t,r))&&qr(this.baseMutations,e.baseMutations,(t,r)=>Ou(t,r))}}class Cl{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Ce(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return Jb}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Cl(e,t,r,s)}}/**
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
 */class cw{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class uw{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Qe,xe;function hw(n){switch(n){case O.OK:return ae(64938);case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return ae(15467,{code:n})}}function Sf(n){if(n===void 0)return Tn("GRPC error has no .code"),O.UNKNOWN;switch(n){case Qe.OK:return O.OK;case Qe.CANCELLED:return O.CANCELLED;case Qe.UNKNOWN:return O.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return O.INTERNAL;case Qe.UNAVAILABLE:return O.UNAVAILABLE;case Qe.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Qe.NOT_FOUND:return O.NOT_FOUND;case Qe.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Qe.ABORTED:return O.ABORTED;case Qe.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Qe.DATA_LOSS:return O.DATA_LOSS;default:return ae(39323,{code:n})}}(xe=Qe||(Qe={}))[xe.OK=0]="OK",xe[xe.CANCELLED=1]="CANCELLED",xe[xe.UNKNOWN=2]="UNKNOWN",xe[xe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",xe[xe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",xe[xe.NOT_FOUND=5]="NOT_FOUND",xe[xe.ALREADY_EXISTS=6]="ALREADY_EXISTS",xe[xe.PERMISSION_DENIED=7]="PERMISSION_DENIED",xe[xe.UNAUTHENTICATED=16]="UNAUTHENTICATED",xe[xe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",xe[xe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",xe[xe.ABORTED=10]="ABORTED",xe[xe.OUT_OF_RANGE=11]="OUT_OF_RANGE",xe[xe.UNIMPLEMENTED=12]="UNIMPLEMENTED",xe[xe.INTERNAL=13]="INTERNAL",xe[xe.UNAVAILABLE=14]="UNAVAILABLE",xe[xe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const fw=new qn([4294967295,4294967295],0);function Uu(n){const e=dw().encode(n),t=new jd;return t.update(e),new Uint8Array(t.digest())}function Fu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new qn([t,r],0),new qn([s,i],0)]}class Rl{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new As(`Invalid padding: ${t}`);if(r<0)throw new As(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new As(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new As(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=qn.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(qn.fromNumber(r)));return s.compare(fw)===1&&(s=new qn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Uu(e),[r,s]=Fu(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Rl(i,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.ge===0)return;const t=Uu(e),[r,s]=Fu(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class As extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class oi{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,ai.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new oi(le.min(),s,new Fe(me),In(),ge())}}class ai{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ai(r,t,ge(),ge(),ge())}}/**
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
 */class Ui{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class kf{constructor(e,t){this.targetId=e,this.Ce=t}}class Cf{constructor(e,t,r=vt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class ju{constructor(e){this.targetId=e,this.ve=0,this.Fe=Bu(),this.Me=vt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ge(),t=ge(),r=ge();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:ae(38017,{changeType:i})}}),new ai(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=Bu()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Ce(this.ve>=0,3241,{ve:this.ve,targetId:this.targetId})}Qe(){this.Oe=!0,this.xe=!0}}const bs="WatchChangeAggregator";class pw{constructor(e){this.Ge=e,this.ze=new Map,this.je=In(),this.Je=ki(),this.He=ki(),this.Ze=new Fe(me)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.ze.get(t);if(r)switch(e.state){case 0:this.nt(t)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Le(e.resumeToken));break;default:ae(56790,{state:e.state})}else K(bs,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.nt(s)&&t(s)})}it(e){const t=e.targetId,r=e.Ce.count,s=this.st(t);if(s){const i=s.target;if(Ma(i))if(r===0){const a=new re(i.path);this.et(t,a,Tt.newNoDocument(a,le.min()))}else Ce(r===1,20013,{expectedCount:r});else{const a=this.ot(t);if(a!==r){const l=this._t(e),u=l?this.ut(l,e,a):1;if(u!==0){this.rt(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}}}}}_t(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=Gn(r).toUint8Array()}catch(u){if(u instanceof Zd)return xr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Rl(a,s,i)}catch(u){return xr(u instanceof As?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ut(e,t,r){return t.Ce.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Ge.lt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(t,i,null),s++)}),s}Pt(e){const t=new Map;this.ze.forEach((i,a)=>{const l=this.st(a);if(l){if(i.current&&Ma(l.target)){const u=new re(l.target.path);this.Tt(u).has(a)||this.It(a,u)||this.et(a,u,Tt.newNoDocument(u,e))}i.Be&&(t.set(a,i.ke()),i.qe())}});let r=ge();this.He.forEach((i,a)=>{let l=!0;a.forEachWhile(u=>{const h=this.st(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,a)=>a.setReadTime(e));const s=new oi(e,t,this.Ze,this.je,r);return this.je=In(),this.Je=ki(),this.He=ki(),this.Ze=new Fe(me),s}Ye(e,t){const r=this.ze.get(e);if(!r||!this.nt(e))return void K(bs,`addDocumentToTarget received document for unknown inactive target (${e})`);const s=this.It(e,t.key)?2:0;r.Ke(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Tt(t.key).add(e)),this.He=this.He.insert(t.key,this.Et(t.key).add(e))}et(e,t,r){const s=this.ze.get(e);s&&this.nt(e)?(this.It(e,t)?s.Ke(t,1):s.Ue(t),this.He=this.He.insert(t,this.Et(t).delete(e)),this.He=this.He.insert(t,this.Et(t).add(e)),r&&(this.je=this.je.insert(t,r))):K(bs,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.ze.delete(e)}ot(e){const t=this.ze.get(e);if(!t)return 0;const r=t.ke();return this.Ge.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}$e(e){let t=this.ze.get(e);t||(K(bs,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new ju(e),this.ze.set(e,t)),t.$e()}Et(e){let t=this.He.get(e);return t||(t=new st(me),this.He=this.He.insert(e,t)),t}Tt(e){let t=this.Je.get(e);return t||(t=new st(me),this.Je=this.Je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||K(bs,"Detected inactive target",e),t}st(e){const t=this.ze.get(e);return t===void 0||t.Ne?null:this.Ge.Rt(e)}rt(e){this.ze.set(e,new ju(e)),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function ki(){return new Fe(re.comparator)}function Bu(){return new Fe(re.comparator)}const mw={asc:"ASCENDING",desc:"DESCENDING"},gw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_w={and:"AND",or:"OR"};class yw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ja(n,e){return n.useProto3Json||To(e)?e:{value:e}}function co(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Rf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function vw(n,e){return co(n,e.toTimestamp())}function an(n){return Ce(!!n,49232),le.fromTimestamp(function(t){const r=Hn(t);return new Ue(r.seconds,r.nanos)}(n))}function Pl(n,e){return Ba(n,e).canonicalString()}function Ba(n,e){const t=function(s){return new De(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Pf(n){const e=De.fromString(n);return Ce(Of(e),10190,{key:e.toString()}),e}function za(n,e){return Pl(n.databaseId,e.path)}function ya(n,e){const t=Pf(e);if(t.get(1)!==n.databaseId.projectId)throw new Q(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new Q(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new re(Vf(t))}function $f(n,e){return Pl(n.databaseId,e)}function bw(n){const e=Pf(n);return e.length===4?De.emptyPath():Vf(e)}function qa(n){return new De(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Vf(n){return Ce(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function zu(n,e,t){return{name:za(n,e),fields:t.value.mapValue.fields}}function ww(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ae(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Ce(f===void 0||typeof f=="string",58123),vt.fromBase64String(f||"")):(Ce(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),vt.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const f=h.code===void 0?O.UNKNOWN:Sf(h.code);return new Q(f,h.message||"")}(a);t=new Cf(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ya(n,r.document.name),i=an(r.document.updateTime),a=r.document.createTime?an(r.document.createTime):le.min(),l=new Vt({mapValue:{fields:r.document.fields}}),u=Tt.newFoundDocument(s,i,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];t=new Ui(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ya(n,r.document),i=r.readTime?an(r.readTime):le.min(),a=Tt.newNoDocument(s,i),l=r.removedTargetIds||[];t=new Ui([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ya(n,r.document),i=r.removedTargetIds||[];t=new Ui([],i,s,null)}else{if(!("filter"in e))return ae(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new uw(s,i),l=r.targetId;t=new kf(l,a)}}return t}function xw(n,e){let t;if(e instanceof ii)t={update:zu(n,e.key,e.value)};else if(e instanceof kl)t={delete:za(n,e.key)};else if(e instanceof sr)t={update:zu(n,e.key,e.data),updateMask:Pw(e.fieldMask)};else{if(!(e instanceof aw))return ae(16599,{Vt:e.type});t={verify:za(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof Ws)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Hr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Gr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ks)return{fieldPath:a.field.canonicalString(),increment:l.Ae};if(l instanceof oo)return{fieldPath:a.field.canonicalString(),minimum:l.Ae};if(l instanceof ao)return{fieldPath:a.field.canonicalString(),maximum:l.Ae};throw ae(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:vw(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ae(27497)}(n,e.precondition)),t}function Ew(n,e){return n&&n.length>0?(Ce(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?an(s.updateTime):an(i);return a.isEqual(le.min())&&(a=an(i)),new sw(a,s.transformResults||[])}(t,e))):[]}function Tw(n,e){return{documents:[$f(n,e.path)]}}function Iw(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=$f(n,s);const i=function(h){if(h.length!==0)return Df(Jt.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(x){return{field:$r(x.field),direction:kw(x.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=ja(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{dt:t,parent:s}}function Aw(n){let e=bw(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Ce(r===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(m){const x=Nf(m);return x instanceof Jt&&hf(x)?x.getFilters():[x]}(t.where));let a=[];t.orderBy&&(a=function(m){return m.map(x=>function($){return new io(Vr($.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}($.direction))}(x))}(t.orderBy));let l=null;t.limit&&(l=function(m){let x;return x=typeof m=="object"?m.value:m,To(x)?null:x}(t.limit));let u=null;t.startAt&&(u=function(m){const x=!!m.before,E=m.values||[];return new so(E,x)}(t.startAt));let h=null;return t.endAt&&(h=function(m){const x=!m.before,E=m.values||[];return new so(E,x)}(t.endAt)),qb(e,s,a,i,l,"F",u,h)}function Sw(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ae(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Nf(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Vr(t.unaryFilter.field);return Je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Vr(t.unaryFilter.field);return Je.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Vr(t.unaryFilter.field);return Je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Vr(t.unaryFilter.field);return Je.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ae(61313);default:return ae(60726)}}(n):n.fieldFilter!==void 0?function(t){return Je.create(Vr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ae(58110);default:return ae(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Jt.create(t.compositeFilter.filters.map(r=>Nf(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ae(1026)}}(t.compositeFilter.op))}(n):ae(30097,{filter:n})}function kw(n){return mw[n]}function Cw(n){return gw[n]}function Rw(n){return _w[n]}function $r(n){return{fieldPath:n.canonicalString()}}function Vr(n){return yt.fromServerFormat(n.fieldPath)}function Df(n){return n instanceof Je?function(t){if(t.op==="=="){if(Ru(t.value))return{unaryFilter:{field:$r(t.field),op:"IS_NAN"}};if(Cu(t.value))return{unaryFilter:{field:$r(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ru(t.value))return{unaryFilter:{field:$r(t.field),op:"IS_NOT_NAN"}};if(Cu(t.value))return{unaryFilter:{field:$r(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$r(t.field),op:Cw(t.op),value:t.value}}}(n):n instanceof Jt?function(t){const r=t.getFilters().map(s=>Df(s));return r.length===1?r[0]:{compositeFilter:{op:Rw(t.op),filters:r}}}(n):ae(54877,{filter:n})}function Pw(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Of(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Lf(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class _n{constructor(e,t,r,s,i=le.min(),a=le.min(),l=vt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new _n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new _n(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new _n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new _n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class $w{constructor(e){this.gt=e}}function Vw(n){const e=Aw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Fa(e,e.limit,"L"):e}/**
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
 */class Nw{constructor(){this.Sn=new Dw}addToCollectionParentIndex(e,t){return this.Sn.add(t),L.resolve()}getCollectionParents(e,t){return L.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return L.resolve()}deleteFieldIndex(e,t){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,t){return L.resolve()}getDocumentsMatchingTarget(e,t){return L.resolve(null)}getIndexType(e,t){return L.resolve(0)}getFieldIndexes(e,t){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,t){return L.resolve(Kn.min())}getMinOffsetFromCollectionGroup(e,t){return L.resolve(Kn.min())}updateCollectionGroup(e,t,r){return L.resolve()}updateIndexEntries(e,t){return L.resolve()}}class Dw{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new st(De.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new st(De.comparator)).toArray()}}/**
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
 */const qu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Mf=41943040;class $t{static withCacheSize(e){return new $t(e,$t.DEFAULT_COLLECTION_PERCENTILE,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */$t.DEFAULT_COLLECTION_PERCENTILE=10,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,$t.DEFAULT=new $t(Mf,$t.DEFAULT_COLLECTION_PERCENTILE,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),$t.DISABLED=new $t(-1,0,0);/**
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
 */class Jn{constructor(e){this.ir=e}next(){return this.ir+=2,this.ir}static sr(){return new Jn(0)}static _r(){return new Jn(-1)}}/**
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
 */const Wu="LruGarbageCollector",Ow=1048576;function Ku([n,e],[t,r]){const s=me(n,t);return s===0?me(e,r):s}class Lw{constructor(e){this.hr=e,this.buffer=new st(Ku),this.Pr=0}Tr(){return++this.Pr}Ir(e){const t=[e,this.Tr()];if(this.buffer.size<this.hr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Ku(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Mw{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Er=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Er&&(this.Er.cancel(),this.Er=null)}get started(){return this.Er!==null}Rr(e){K(Wu,`Garbage collection scheduled in ${e}ms`),this.Er=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Er=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ns(t)?K(Wu,"Ignoring IndexedDB error during garbage collection: ",t):await ts(t)}await this.Rr(3e5)})}}class Uw{constructor(e,t){this.Ar=e,this.params=t}calculateTargetCount(e,t){return this.Ar.Vr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return L.resolve(Eo.ce);const r=new Lw(t);return this.Ar.forEachTarget(e,s=>r.Ir(s.sequenceNumber)).next(()=>this.Ar.dr(e,s=>r.Ir(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Ar.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Ar.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(K("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(qu)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(K("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),qu):this.mr(e,t))}getCacheSize(e){return this.Ar.getCacheSize(e)}mr(e,t){let r,s,i,a,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(K("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,a=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,t))).next(m=>(i=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),Rr()<=ye.DEBUG&&K("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(h-u)+`ms
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
 */class jw{constructor(){this.changes=new Er(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Tt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?L.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Bw{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class zw{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Vs(r.mutation,s,Ot.empty(),Ue.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ge()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ge()){const s=mr();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Is();return i.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=mr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ge()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let i=In();const a=$s(),l=function(){return $s()}();return t.forEach((u,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof sr)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Vs(f.mutation,h,f.mutation.getFieldMask(),Ue.now())):a.set(h.key,Ot.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>l.set(h,new Bw(f,a.get(h)??null))),l))}recalculateAndSaveOverlays(e,t){const r=$s();let s=new Fe((a,l)=>a-l),i=ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(u=>{const h=t.get(u);if(h===null)return;let f=r.get(u)||Ot.empty();f=l.applyToLocalView(h,f),r.set(u,f);const m=(s.get(l.batchId)||ge()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,m=bf();f.forEach(x=>{if(!i.has(x)){const E=If(t.get(x),r.get(x));E!==null&&m.set(x,E),i=i.add(x)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,m))}return L.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return Wb(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):mf(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):L.resolve(mr());let l=Fs,u=i;return a.next(h=>L.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(x=>{u=u.insert(f,x)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,ge())).next(f=>({batchId:l,changes:vf(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new re(t)).next(r=>{let s=Is();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Is();return this.indexManager.getCollectionParents(e,i).next(l=>L.forEach(l,u=>{const h=function(m,x){return new si(x,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((m,x)=>{a=a.insert(m,x)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((u,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,Tt.newInvalidDocument(f)))});let l=Is();return a.forEach((u,h)=>{const f=i.get(u);f!==void 0&&Vs(f.mutation,h,Ot.empty(),Ue.now()),So(t,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class qw{constructor(e){this.serializer=e,this.Or=new Map,this.Nr=new Map}getBundleMetadata(e,t){return L.resolve(this.Or.get(t))}saveBundleMetadata(e,t){return this.Or.set(t.id,function(s){return{id:s.id,version:s.version,createTime:an(s.createTime)}}(t)),L.resolve()}getNamedQuery(e,t){return L.resolve(this.Nr.get(t))}saveNamedQuery(e,t){return this.Nr.set(t.name,function(s){return{name:s.name,query:Vw(s.bundledQuery),readTime:an(s.readTime)}}(t)),L.resolve()}}/**
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
 */class Ww{constructor(){this.overlays=new Fe(re.comparator),this.Br=new Map}getOverlay(e,t){return L.resolve(this.overlays.get(t))}getOverlays(e,t){const r=mr();return L.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.wt(e,t,i)}),L.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Br.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Br.delete(r)),L.resolve()}getOverlaysForCollection(e,t,r){const s=mr(),i=t.length+1,a=new re(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return L.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Fe((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=mr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=mr(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return L.resolve(l)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Br.get(s.largestBatchId).delete(r.key);this.Br.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new cw(t,r));let i=this.Br.get(t);i===void 0&&(i=ge(),this.Br.set(t,i)),this.Br.set(t,i.add(r.key))}}/**
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
 */class Kw{constructor(){this.sessionToken=vt.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,L.resolve()}}/**
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
 */class $l{constructor(){this.Lr=new st(ht.kr),this.qr=new st(ht.Kr)}isEmpty(){return this.Lr.isEmpty()}addReference(e,t){const r=new ht(e,t);this.Lr=this.Lr.add(r),this.qr=this.qr.add(r)}Ur(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.$r(new ht(e,t))}Wr(e,t){e.forEach(r=>this.removeReference(r,t))}Qr(e){const t=new re(new De([])),r=new ht(t,e),s=new ht(t,e+1),i=[];return this.qr.forEachInRange([r,s],a=>{this.$r(a),i.push(a.key)}),i}Gr(){this.Lr.forEach(e=>this.$r(e))}$r(e){this.Lr=this.Lr.delete(e),this.qr=this.qr.delete(e)}zr(e){const t=new re(new De([])),r=new ht(t,e),s=new ht(t,e+1);let i=ge();return this.qr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new ht(e,0),r=this.Lr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ht{constructor(e,t){this.key=e,this.jr=t}static kr(e,t){return re.comparator(e.key,t.key)||me(e.jr,t.jr)}static Kr(e,t){return me(e.jr,t.jr)||re.comparator(e.key,t.key)}}/**
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
 */class Hw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Xn=1,this.Jr=new st(ht.kr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Xn;this.Xn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new lw(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.Jr=this.Jr.add(new ht(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(a)}lookupMutationBatch(e,t){return L.resolve(this.Hr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Zr(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?vl:this.Xn-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ht(t,0),s=new ht(t,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],a=>{const l=this.Hr(a.jr);i.push(l)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new st(me);return t.forEach(s=>{const i=new ht(s,0),a=new ht(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,a],l=>{r=r.add(l.jr)})}),L.resolve(this.Xr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;re.isDocumentKey(i)||(i=i.child(""));const a=new ht(new re(i),0);let l=new st(me);return this.Jr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.jr)),!0)},a),L.resolve(this.Xr(l))}Xr(e){const t=[];return e.forEach(r=>{const s=this.Hr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Ce(this.Yr(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return L.forEach(t.mutations,s=>{const i=new ht(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Jr=r})}tr(e){}containsKey(e,t){const r=new ht(t,0),s=this.Jr.firstAfterOrEqual(r);return L.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Yr(e,t){return this.Zr(e)}Zr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Hr(e){const t=this.Zr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Gw{constructor(e){this.ei=e,this.docs=function(){return new Fe(re.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ei(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return L.resolve(r?r.document.mutableCopy():Tt.newInvalidDocument(t))}getEntries(e,t){let r=In();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Tt.newInvalidDocument(s))}),L.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=In();const a=t.path,l=new re(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||wb(bb(f),r)<=0||(s.has(f.key)||So(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,t,r,s){ae(9500)}ti(e,t){return L.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Qw(this)}getSize(e){return L.resolve(this.size)}}class Qw extends jw{constructor(e){super(),this.Fr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Fr.addEntry(e,s)):this.Fr.removeEntry(r)}),L.waitFor(t)}getFromCache(e,t){return this.Fr.getEntry(e,t)}getAllFromCache(e,t){return this.Fr.getEntries(e,t)}}/**
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
 */class Jw{constructor(e){this.persistence=e,this.ni=new Er(t=>xl(t),El),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this.ri=0,this.ii=new $l,this.targetCount=0,this.si=Jn.sr()}forEachTarget(e,t){return this.ni.forEach((r,s)=>t(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.ri)}allocateTargetId(e){return this.highestTargetId=this.si.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ri&&(this.ri=t),L.resolve()}cr(e){this.ni.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.si=new Jn(t),this.highestTargetId=t),e.sequenceNumber>this.ri&&(this.ri=e.sequenceNumber)}addTargetData(e,t){return this.cr(t),this.targetCount+=1,L.resolve()}updateTargetData(e,t){return this.cr(t),L.resolve()}removeTargetData(e,t){return this.ni.delete(t.target),this.ii.Qr(t.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ni.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.ni.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),L.waitFor(i).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,t){const r=this.ni.get(t)||null;return L.resolve(r)}addMatchingKeys(e,t,r){return this.ii.Ur(t,r),L.resolve()}removeMatchingKeys(e,t,r){this.ii.Wr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),L.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ii.Qr(t),L.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ii.zr(t);return L.resolve(r)}containsKey(e,t){return L.resolve(this.ii.containsKey(t))}}/**
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
 */class Uf{constructor(e,t){this.oi={},this.overlays={},this._i=new Eo(0),this.ai=!1,this.ai=!0,this.ui=new Kw,this.referenceDelegate=e(this),this.ci=new Jw(this),this.indexManager=new Nw,this.remoteDocumentCache=function(s){return new Gw(s)}(r=>this.referenceDelegate.li(r)),this.serializer=new $w(t),this.hi=new qw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ai=!1,Promise.resolve()}get started(){return this.ai}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ww,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.oi[e.toKey()];return r||(r=new Hw(t,this.referenceDelegate),this.oi[e.toKey()]=r),r}getGlobalsCache(){return this.ui}getTargetCache(){return this.ci}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.hi}runTransaction(e,t,r){K("MemoryPersistence","Starting transaction:",e);const s=new Xw(this._i.next());return this.referenceDelegate.Pi(),r(s).next(i=>this.referenceDelegate.Ti(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ii(e,t){return L.or(Object.values(this.oi).map(r=>()=>r.containsKey(e,t)))}}class Xw extends Eb{constructor(e){super(),this.currentSequenceNumber=e}}class Vl{constructor(e){this.persistence=e,this.Ei=new $l,this.Ri=null}static Ai(e){return new Vl(e)}get Vi(){if(this.Ri)return this.Ri;throw ae(60996)}addReference(e,t,r){return this.Ei.addReference(r,t),this.Vi.delete(r.toString()),L.resolve()}removeReference(e,t,r){return this.Ei.removeReference(r,t),this.Vi.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,t){return this.Vi.add(t.toString()),L.resolve()}removeTarget(e,t){this.Ei.Qr(t.targetId).forEach(s=>this.Vi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Vi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Pi(){this.Ri=new Set}Ti(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Vi,r=>{const s=re.fromPath(r);return this.di(e,s).next(i=>{i||t.removeEntry(s,le.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.di(e,t).next(r=>{r?this.Vi.delete(t.toString()):this.Vi.add(t.toString())})}li(e){return 0}di(e,t){return L.or([()=>L.resolve(this.Ei.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class uo{constructor(e,t){this.persistence=e,this.mi=new Er(r=>Ab(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Fw(this,t)}static Ai(e,t){return new uo(e,t)}Pi(){}Ti(e){return L.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Vr(e){const t=this.gr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}gr(e){let t=0;return this.dr(e,r=>{t++}).next(()=>t)}dr(e,t){return L.forEach(this.mi,(r,s)=>this.yr(e,r,s).next(i=>i?L.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ti(e,a=>this.yr(e,a,t).next(l=>{l||(r++,i.removeEntry(a,le.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.mi.set(t,e.currentSequenceNumber),L.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.mi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,t,r){return this.mi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,t){return this.mi.set(t,e.currentSequenceNumber),L.resolve()}li(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Oi(e.data.value)),t}yr(e,t,r){return L.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.mi.get(t);return L.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Nl{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Ps=r,this.Ts=s}static Is(e,t){let r=ge(),s=ge();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Nl(e,t.fromCache,r,s)}}/**
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
 */class Zw{constructor(){this.Es=!1,this.Rs=!1,this.As=100,this.Vs=function(){return Ig()?8:Tb(At())>0?6:4}()}initialize(e,t){this.ds=e,this.indexManager=t,this.Es=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.fs(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.gs(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Yw;return this.ps(e,t,a).next(l=>{if(i.result=l,this.Rs)return this.ys(e,t,a,l.size)})}).next(()=>i.result)}ys(e,t,r,s){return r.documentReadCount<this.As?(Rr()<=ye.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",Pr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.As,"documents"),L.resolve()):(Rr()<=ye.DEBUG&&K("QueryEngine","Query:",Pr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Vs*s?(Rr()<=ye.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",Pr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,on(t))):L.resolve())}fs(e,t){if(Nu(t))return L.resolve(null);let r=on(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Fa(t,null,"F"),r=on(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=ge(...i);return this.ds.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ws(t,l);return this.Ss(t,h,a,u.readTime)?this.fs(e,Fa(t,null,"F")):this.bs(e,h,t,u)}))})))}gs(e,t,r,s){return Nu(t)||s.isEqual(le.min())?L.resolve(null):this.ds.getDocuments(e,r).next(i=>{const a=this.ws(t,i);return this.Ss(t,a,r,s)?L.resolve(null):(Rr()<=ye.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Pr(t)),this.bs(e,a,t,vb(s,Fs)).next(l=>l))})}ws(e,t){let r=new st(_f(e));return t.forEach((s,i)=>{So(e,i)&&(r=r.add(i))}),r}Ss(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ps(e,t,r){return Rr()<=ye.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",Pr(t)),this.ds.getDocumentsMatchingQuery(e,t,Kn.min(),r)}bs(e,t,r,s){return this.ds.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const Dl="LocalStore",ex=3e8;class tx{constructor(e,t,r,s){this.persistence=e,this.Ds=t,this.serializer=s,this.Cs=new Fe(me),this.vs=new Er(i=>xl(i),El),this.Fs=new Map,this.Ms=e.getRemoteDocumentCache(),this.ci=e.getTargetCache(),this.hi=e.getBundleCache(),this.xs(r)}xs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zw(this.Ms,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ms.setIndexManager(this.indexManager),this.Ds.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Cs))}}function nx(n,e,t,r){return new tx(n,e,t,r)}async function Ff(n,e){const t=ue(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.xs(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let u=ge();for(const h of s){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(h=>({Os:h,removedBatchIds:a,addedBatchIds:l}))})})}function rx(n,e){const t=ue(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Ms.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const m=h.batch,x=m.keys();let E=L.resolve();return x.forEach($=>{E=E.next(()=>f.getEntry(u,$)).next(R=>{const C=h.docVersions.get($);Ce(C!==null,48541),R.version.compareTo(C)<0&&(m.applyToRemoteDocument(R,h),R.isValidDocument()&&(R.setReadTime(h.commitVersion),f.addEntry(R)))})}),E.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ge();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function jf(n){const e=ue(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ci.getLastRemoteSnapshotVersion(t))}function sx(n,e){const t=ue(n),r=e.snapshotVersion;let s=t.Cs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.Ms.newChangeBuffer({trackRemovals:!0});s=t.Cs;const l=[];e.targetChanges.forEach((f,m)=>{const x=s.get(m);if(!x)return;l.push(t.ci.removeMatchingKeys(i,f.removedDocuments,m).next(()=>t.ci.addMatchingKeys(i,f.addedDocuments,m)));let E=x.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?E=E.withResumeToken(vt.EMPTY_BYTE_STRING,le.min()).withLastLimboFreeSnapshotVersion(le.min()):f.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(f.resumeToken,r)),s=s.insert(m,E),function(R,C,V){return R.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=ex?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(x,E,f)&&l.push(t.ci.updateTargetData(i,E))});let u=In(),h=ge();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(ix(i,a,e.documentUpdates).next(f=>{u=f.Ns,h=f.Bs})),!r.isEqual(le.min())){const f=t.ci.getLastRemoteSnapshotVersion(i).next(m=>t.ci.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return L.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(t.Cs=s,i))}function ix(n,e,t){let r=ge(),s=ge();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=In();return t.forEach((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(le.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):K(Dl,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ns:a,Bs:s}})}function ox(n,e){const t=ue(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=vl),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ax(n,e){const t=ue(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.ci.getTargetData(r,e).next(i=>i?(s=i,L.resolve(s)):t.ci.allocateTargetId(r).next(a=>(s=new _n(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.ci.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Cs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Cs=t.Cs.insert(r.targetId,r),t.vs.set(e,r.targetId)),r})}async function Wa(n,e,t){const r=ue(n),s=r.Cs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!ns(a))throw a;K(Dl,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Cs=r.Cs.remove(e),r.vs.delete(s.target)}function Hu(n,e,t){const r=ue(n);let s=le.min(),i=ge();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,f){const m=ue(u),x=m.vs.get(f);return x!==void 0?L.resolve(m.Cs.get(x)):m.ci.getTargetData(h,f)}(r,a,on(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.ci.getMatchingKeysForTargetId(a,l.targetId).next(u=>{i=u})}).next(()=>r.Ds.getDocumentsMatchingQuery(a,e,t?s:le.min(),t?i:ge())).next(l=>(lx(r,Hb(e),l),{documents:l,Ls:i})))}function lx(n,e,t){let r=n.Fs.get(e)||le.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Fs.set(e,r)}class Gu{constructor(){this.activeTargetIds=Zb()}Ws(e){this.activeTargetIds=this.activeTargetIds.add(e)}Qs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}$s(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class cx{constructor(){this.Co=new Gu,this.vo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Co.Ws(e),this.vo[e]||"not-current"}updateQueryState(e,t,r){this.vo[e]=t}removeLocalQueryTarget(e){this.Co.Qs(e)}isLocalQueryTarget(e){return this.Co.activeTargetIds.has(e)}clearQueryState(e){delete this.vo[e]}getAllActiveQueryTargets(){return this.Co.activeTargetIds}isActiveQueryTarget(e){return this.Co.activeTargetIds.has(e)}start(){return this.Co=new Gu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class ux{Fo(e){}shutdown(){}}/**
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
 */const Qu="ConnectivityMonitor";class Ju{constructor(){this.Mo=()=>this.xo(),this.Oo=()=>this.No(),this.Bo=[],this.Lo()}Fo(e){this.Bo.push(e)}shutdown(){window.removeEventListener("online",this.Mo),window.removeEventListener("offline",this.Oo)}Lo(){window.addEventListener("online",this.Mo),window.addEventListener("offline",this.Oo)}xo(){K(Qu,"Network connectivity changed: AVAILABLE");for(const e of this.Bo)e(0)}No(){K(Qu,"Network connectivity changed: UNAVAILABLE");for(const e of this.Bo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ci=null;function Ka(){return Ci===null?Ci=function(){return 268435456+Math.round(2147483648*Math.random())}():Ci++,"0x"+Ci.toString(16)}/**
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
 */const va="RestConnection",hx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class dx{get ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Uo=this.databaseId.database===no?`project_id=${r}`:`project_id=${r}&database_id=${s}`}$o(e,t,r,s,i){const a=Ka(),l=this.Wo(e,t.toUriEncodedString());K(va,`Sending RPC '${e}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Uo};this.Qo(u,s,i);const{host:h}=new URL(l),f=Ys(h);return this.Go(e,l,u,r,f).then(m=>(K(va,`Received RPC '${e}' ${a}: `,m),m),m=>{throw xr(va,`RPC '${e}' ${a} failed with error: `,m,"url: ",l,"request:",r),m})}zo(e,t,r,s,i,a){return this.$o(e,t,r,s,i)}Qo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+es}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Wo(e,t){const r=hx[e];let s=`${this.qo}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */const xt="WebChannelConnection",ws=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Fr extends dx{constructor(e){super(e),this.__=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static a_(){if(!Fr.u_){const e=Wd();ws(e,qd.STAT_EVENT,t=>{t.stat===Na.PROXY?K(xt,"STAT_EVENT: detected buffering proxy"):t.stat===Na.NOPROXY&&K(xt,"STAT_EVENT: detected no buffering proxy")}),Fr.u_=!0}}Go(e,t,r,s,i){const a=Ka();return new Promise((l,u)=>{const h=new Bd;h.setWithCredentials(!0),h.listenOnce(zd.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Di.NO_ERROR:const m=h.getResponseJson();K(xt,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(m)),l(m);break;case Di.TIMEOUT:K(xt,`RPC '${e}' ${a} timed out`),u(new Q(O.DEADLINE_EXCEEDED,"Request time out"));break;case Di.HTTP_ERROR:const x=h.getStatus();if(K(xt,`RPC '${e}' ${a} failed with status:`,x,"response text:",h.getResponseText()),x>0){let E=h.getResponseJson();Array.isArray(E)&&(E=E[0]);const $=E?.error;if($&&$.status&&$.message){const R=function(V){const S=V.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(S)>=0?S:O.UNKNOWN}($.status);u(new Q(R,$.message))}else u(new Q(O.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new Q(O.UNAVAILABLE,"Connection failed."));break;default:ae(9055,{c_:e,streamId:a,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{K(xt,`RPC '${e}' ${a} completed.`)}});const f=JSON.stringify(s);K(xt,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",f,r,15)})}P_(e,t,r){const s=Ka(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Qo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const h=i.join("");K(xt,`Creating RPC '${e}' stream ${s}: ${h}`,l);const f=a.createWebChannel(h,l);this.T_(f);let m=!1,x=!1;const E=new fx({jo:$=>{x?K(xt,`Not sending because RPC '${e}' stream ${s} is closed:`,$):(m||(K(xt,`Opening RPC '${e}' stream ${s} transport.`),f.open(),m=!0),K(xt,`RPC '${e}' stream ${s} sending:`,$),f.send($))},Jo:()=>f.close()});return ws(f,Ts.EventType.OPEN,()=>{x||(K(xt,`RPC '${e}' stream ${s} transport opened.`),E.r_())}),ws(f,Ts.EventType.CLOSE,()=>{x||(x=!0,K(xt,`RPC '${e}' stream ${s} transport closed`),E.s_(),this.I_(f))}),ws(f,Ts.EventType.ERROR,$=>{x||(x=!0,xr(xt,`RPC '${e}' stream ${s} transport errored. Name:`,$.name,"Message:",$.message),E.s_(new Q(O.UNAVAILABLE,"The operation could not be completed")))}),ws(f,Ts.EventType.MESSAGE,$=>{if(!x){const R=$.data[0];Ce(!!R,16349);const C=R,V=C?.error||C[0]?.error;if(V){K(xt,`RPC '${e}' stream ${s} received error:`,V);const S=V.status;let M=function(D){const b=Qe[D];if(b!==void 0)return Sf(b)}(S),U=V.message;S==="NOT_FOUND"&&U.includes("database")&&U.includes("does not exist")&&U.includes(this.databaseId.database)&&xr(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),M===void 0&&(M=O.INTERNAL,U="Unknown error status: "+S+" with message "+V.message),x=!0,E.s_(new Q(M,U)),f.close()}else K(xt,`RPC '${e}' stream ${s} received:`,R),E.o_(R)}}),Fr.a_(),setTimeout(()=>{E.i_()},0),E}terminate(){this.__.forEach(e=>e.close()),this.__=[]}T_(e){this.__.push(e)}I_(e){this.__=this.__.filter(t=>t===e)}Qo(e,t,r){super.Qo(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Kd()}}/**
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
 */function px(n){return new Fr(n)}function ba(){return typeof document<"u"?document:null}/**
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
 */function Po(n){return new yw(n,!0)}/**
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
 */Fr.u_=!1;class Bf{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Di=e,this.timerId=t,this.E_=r,this.R_=s,this.A_=i,this.V_=0,this.d_=null,this.m_=Date.now(),this.reset()}reset(){this.V_=0}f_(){this.V_=this.A_}g_(e){this.cancel();const t=Math.floor(this.V_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&K("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.d_=this.Di.enqueueAfterDelay(this.timerId,s,()=>(this.m_=Date.now(),e())),this.V_*=this.R_,this.V_<this.E_&&(this.V_=this.E_),this.V_>this.A_&&(this.V_=this.A_)}y_(){this.d_!==null&&(this.d_.skipDelay(),this.d_=null)}cancel(){this.d_!==null&&(this.d_.cancel(),this.d_=null)}p_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Xu="PersistentStream";class zf{constructor(e,t,r,s,i,a,l,u){this.Di=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.C_=null,this.stream=null,this.v_=0,this.F_=new Bf(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Di.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}async close(e,t){this.q_(),this.K_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===O.RESOURCE_EXHAUSTED?(Tn(t.toString()),Tn("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.e_(t)}U_(){}auth(){this.state=1;const e=this.W_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.b_===t&&this.Q_(r,s)},r=>{e(()=>{const s=new Q(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)})})}Q_(e,t){const r=this.W_(this.b_);this.stream=this.z_(e,t),this.stream.Ho(()=>{r(()=>this.listener.Ho())}),this.stream.Xo(()=>{r(()=>(this.state=2,this.C_=this.Di.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.Xo()))}),this.stream.e_(s=>{r(()=>this.G_(s))}),this.stream.onMessage(s=>{r(()=>++this.v_==1?this.j_(s):this.onNext(s))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return K(Xu,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Di.enqueueAndForget(()=>this.b_===e?t():(K(Xu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mx extends zf{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=ww(this.serializer,e),r=function(i){if(!("targetChange"in i))return le.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?le.min():a.readTime?an(a.readTime):le.min()}(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=qa(this.serializer),t.addTarget=function(i,a){let l;const u=a.target;if(l=Ma(u)?{documents:Tw(i,u)}:{query:Iw(i,u).dt},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Rf(i,a.resumeToken);const h=ja(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(le.min())>0){l.readTime=co(i,a.snapshotVersion.toTimestamp());const h=ja(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=Sw(this.serializer,e);r&&(t.labels=r),this.k_(t)}Z_(e){const t={};t.database=qa(this.serializer),t.removeTarget=e,this.k_(t)}}class gx extends zf{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get X_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.X_&&this.Y_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Ce(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ce(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Ce(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=Ew(e.writeResults,e.commitTime),r=an(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=qa(this.serializer),this.k_(e)}Y_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>xw(this.serializer,r))};this.k_(t)}}/**
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
 */class _x{}class yx extends _x{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new Q(O.FAILED_PRECONDITION,"The client has already been terminated.")}$o(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.$o(e,Ba(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Q(O.UNKNOWN,i.toString())})}zo(e,t,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.zo(e,Ba(t,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new Q(O.UNKNOWN,a.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}function vx(n,e,t,r){return new yx(n,e,t,r)}class bx{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Tn(t),this._a=!1):K("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const hn="RemoteStore";class wx{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Map,this.Ea=new Map,this.Ra=new Jn(1e3),this.Aa=new Jn(1001),this.Va=new Set,this.da=[],this.ma=i,this.ma.Fo(a=>{r.enqueueAndForget(async()=>{Tr(this)&&(K(hn,"Restarting streams for network reachability change."),await async function(u){const h=ue(u);h.Va.add(4),await li(h),h.fa.set("Unknown"),h.Va.delete(4),await $o(h)}(this))})}),this.fa=new bx(r,s)}}async function $o(n){if(Tr(n))for(const e of n.da)await e(!0)}async function li(n){for(const e of n.da)await e(!1)}function Ha(n,e){return n.Ia.get(e)||void 0}function qf(n,e){const t=ue(n),r=Ha(t,e.targetId);if(r!==void 0&&t.Ta.has(r))return;const s=function(l,u){const h=Ha(l,u);h!==void 0&&l.Ea.delete(h);const f=function(x,E){return E%2!=0?x.Aa.next():x.Ra.next()}(l,u);return l.Ia.set(u,f),l.Ea.set(f,u),f}(t,e.targetId);K(hn,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new _n(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.Ta.set(s,i),Ul(t)?Ml(t):rs(t).x_()&&Ll(t,i)}function Ol(n,e){const t=ue(n),r=rs(t),s=Ha(t,e);K(hn,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t.Ta.delete(s),t.Ia.delete(e),t.Ea.delete(s),r.x_()&&Wf(t,s),t.Ta.size===0&&(r.x_()?r.B_():Tr(t)&&t.fa.set("Unknown"))}function Ll(n,e){if(n.ga.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(le.min())>0){const t=n.Ea.get(e.targetId);if(t===void 0)return void K(hn,"SDK target ID not found for remote ID: "+e.targetId);const r=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(r)}rs(n).H_(e)}function Wf(n,e){n.ga.$e(e),rs(n).Z_(e)}function Ml(n){n.ga=new pw({getRemoteKeysForTarget:e=>{const t=n.Ea.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):ge()},Rt:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),rs(n).start(),n.fa.aa()}function Ul(n){return Tr(n)&&!rs(n).M_()&&n.Ta.size>0}function Tr(n){return ue(n).Va.size===0}function Kf(n){n.ga=void 0}async function xx(n){n.fa.set("Online")}async function Ex(n){n.Ta.forEach((e,t)=>{Ll(n,e)})}async function Tx(n,e){Kf(n),Ul(n)?(n.fa.la(e),Ml(n)):n.fa.set("Unknown")}async function Ix(n,e,t){if(n.fa.set("Online"),e instanceof Cf&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds){if(s.Ta.has(l)){const u=s.Ea.get(l);u!==void 0&&(await s.remoteSyncer.rejectListen(u,a),s.Ia.delete(u),s.Ea.delete(l)),s.Ta.delete(l)}s.ga.removeTarget(l)}}(n,e)}catch(r){K(hn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ho(n,r)}else if(e instanceof Ui?n.ga.Xe(e):e instanceof kf?n.ga.it(e):n.ga.tt(e),!t.isEqual(le.min()))try{const r=await jf(n.localStore);t.compareTo(r)>=0&&await function(i,a){const l=i.ga.Pt(a);l.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const m=i.Ta.get(f);m&&i.Ta.set(f,m.withResumeToken(h.resumeToken,a))}}),l.targetMismatches.forEach((h,f)=>{const m=i.Ta.get(h);if(!m)return;i.Ta.set(h,m.withResumeToken(vt.EMPTY_BYTE_STRING,m.snapshotVersion)),Wf(i,h);const x=new _n(m.target,h,f,m.sequenceNumber);Ll(i,x)});const u=function(f,m){const x=new Map;m.targetChanges.forEach(($,R)=>{const C=f.Ea.get(R);C!==void 0&&x.set(C,$)});let E=new Fe(me);return m.targetMismatches.forEach(($,R)=>{const C=f.Ea.get($);C!==void 0&&(E=E.insert(C,R))}),new oi(m.snapshotVersion,x,E,m.documentUpdates,m.resolvedLimboDocuments)}(i,l);return i.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){K(hn,"Failed to raise snapshot:",r),await ho(n,r)}}async function ho(n,e,t){if(!ns(e))throw e;n.Va.add(1),await li(n),n.fa.set("Offline"),t||(t=()=>jf(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{K(hn,"Retrying IndexedDB access"),await t(),n.Va.delete(1),await $o(n)})}function Hf(n,e){return e().catch(t=>ho(n,t,e))}async function Vo(n){const e=ue(n),t=Xn(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:vl;for(;Ax(e);)try{const s=await ox(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,Sx(e,s)}catch(s){await ho(e,s)}Gf(e)&&Qf(e)}function Ax(n){return Tr(n)&&n.Pa.length<10}function Sx(n,e){n.Pa.push(e);const t=Xn(n);t.x_()&&t.X_&&t.Y_(e.mutations)}function Gf(n){return Tr(n)&&!Xn(n).M_()&&n.Pa.length>0}function Qf(n){Xn(n).start()}async function kx(n){Xn(n).na()}async function Cx(n){const e=Xn(n);for(const t of n.Pa)e.Y_(t.mutations)}async function Rx(n,e,t){const r=n.Pa.shift(),s=Cl.from(r,e,t);await Hf(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Vo(n)}async function Px(n,e){e&&Xn(n).X_&&await async function(r,s){if(function(a){return hw(a)&&a!==O.ABORTED}(s.code)){const i=r.Pa.shift();Xn(r).N_(),await Hf(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Vo(r)}}(n,e),Gf(n)&&Qf(n)}async function Yu(n,e){const t=ue(n);t.asyncQueue.verifyOperationInProgress(),K(hn,"RemoteStore received new credentials");const r=Tr(t);t.Va.add(3),await li(t),r&&t.fa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Va.delete(3),await $o(t)}async function $x(n,e){const t=ue(n);e?(t.Va.delete(2),await $o(t)):e||(t.Va.add(2),await li(t),t.fa.set("Unknown"))}function rs(n){return n.pa||(n.pa=function(t,r,s){const i=ue(t);return i.ia(),new mx(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Ho:xx.bind(null,n),Xo:Ex.bind(null,n),e_:Tx.bind(null,n),J_:Ix.bind(null,n)}),n.da.push(async e=>{e?(n.pa.N_(),Ul(n)?Ml(n):n.fa.set("Unknown")):(await n.pa.stop(),Kf(n))})),n.pa}function Xn(n){return n.ya||(n.ya=function(t,r,s){const i=ue(t);return i.ia(),new gx(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Ho:()=>Promise.resolve(),Xo:kx.bind(null,n),e_:Px.bind(null,n),ea:Cx.bind(null,n),ta:Rx.bind(null,n)}),n.da.push(async e=>{e?(n.ya.N_(),await Vo(n)):(await n.ya.stop(),n.Pa.length>0&&(K(hn,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))})),n.ya}/**
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
 */class Fl{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new bn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new Fl(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jl(n,e){if(Tn("AsyncQueue",`${e}: ${n}`),ns(n))return new Q(O.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class jr{static emptySet(e){return new jr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||re.comparator(t.key,r.key):(t,r)=>re.comparator(t.key,r.key),this.keyedMap=Is(),this.sortedSet=new Fe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof jr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new jr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Zu{constructor(){this.wa=new Fe(re.comparator)}track(e){const t=e.doc.key,r=this.wa.get(t);r?e.type!==0&&r.type===3?this.wa=this.wa.insert(t,e):e.type===3&&r.type!==1?this.wa=this.wa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.wa=this.wa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.wa=this.wa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.wa=this.wa.remove(t):e.type===1&&r.type===2?this.wa=this.wa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.wa=this.wa.insert(t,{type:2,doc:e.doc}):ae(63341,{At:e,Sa:r}):this.wa=this.wa.insert(t,e)}ba(){const e=[];return this.wa.inorderTraversal((t,r)=>{e.push(r)}),e}}class Qr{constructor(e,t,r,s,i,a,l,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new Qr(e,t,jr.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ao(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Vx{constructor(){this.Da=void 0,this.Ca=[]}va(){return this.Ca.some(e=>e.Fa())}}class Nx{constructor(){this.queries=eh(),this.onlineState="Unknown",this.Ma=new Set}terminate(){(function(t,r){const s=ue(t),i=s.queries;s.queries=eh(),i.forEach((a,l)=>{for(const u of l.Ca)u.onError(r)})})(this,new Q(O.ABORTED,"Firestore shutting down"))}}function eh(){return new Er(n=>gf(n),Ao)}async function Jf(n,e){const t=ue(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.va()&&e.Fa()&&(r=2):(i=new Vx,r=e.Fa()?0:1);try{switch(r){case 0:i.Da=await t.onListen(s,!0);break;case 1:i.Da=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=jl(a,`Initialization of query '${Pr(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.Ca.push(e),e.xa(t.onlineState),i.Da&&e.Oa(i.Da)&&Bl(t)}async function Xf(n,e){const t=ue(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.Ca.indexOf(e);a>=0&&(i.Ca.splice(a,1),i.Ca.length===0?s=e.Fa()?0:1:!i.va()&&e.Fa()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Dx(n,e){const t=ue(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.Ca)l.Oa(s)&&(r=!0);a.Da=s}}r&&Bl(t)}function Ox(n,e,t){const r=ue(n),s=r.queries.get(e);if(s)for(const i of s.Ca)i.onError(t);r.queries.delete(e)}function Bl(n){n.Ma.forEach(e=>{e.next()})}var Ga,th;(th=Ga||(Ga={})).Na="default",th.Cache="cache";class Yf{constructor(e,t,r){this.query=e,this.Ba=t,this.La=!1,this.ka=null,this.onlineState="Unknown",this.options=r||{}}Oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Qr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.La?this.qa(e)&&(this.Ba.next(e),t=!0):this.Ka(e,this.onlineState)&&(this.Ua(e),t=!0),this.ka=e,t}onError(e){this.Ba.error(e)}xa(e){this.onlineState=e;let t=!1;return this.ka&&!this.La&&this.Ka(this.ka,e)&&(this.Ua(this.ka),t=!0),t}Ka(e,t){if(!e.fromCache||!this.Fa())return!0;const r=t!=="Offline";return(!this.options.$a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const t=this.ka&&this.ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ua(e){e=Qr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.La=!0,this.Ba.next(e)}Fa(){return this.options.source!==Ga.Cache}}/**
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
 */class Zf{constructor(e){this.key=e}}class ep{constructor(e){this.key=e}}class Lx{constructor(e,t){this.query=e,this.eu=t,this.tu=null,this.hasCachedResults=!1,this.current=!1,this.nu=ge(),this.mutatedKeys=ge(),this.ru=_f(e),this.iu=new jr(this.ru)}get su(){return this.eu}ou(e,t){const r=t?t._u:new Zu,s=t?t.iu:this.iu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const x=s.get(f),E=So(this.query,m)?m:null,$=!!x&&this.mutatedKeys.has(x.key),R=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let C=!1;x&&E?x.data.isEqual(E.data)?$!==R&&(r.track({type:3,doc:E}),C=!0):this.au(x,E)||(r.track({type:2,doc:E}),C=!0,(u&&this.ru(E,u)>0||h&&this.ru(E,h)<0)&&(l=!0)):!x&&E?(r.track({type:0,doc:E}),C=!0):x&&!E&&(r.track({type:1,doc:x}),C=!0,(u||h)&&(l=!0)),C&&(E?(a=a.add(E),i=R?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{iu:a,_u:r,Ss:l,mutatedKeys:i}}au(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.iu;this.iu=e.iu,this.mutatedKeys=e.mutatedKeys;const a=e._u.ba();a.sort((f,m)=>function(E,$){const R=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ae(20277,{At:C})}};return R(E)-R($)}(f.type,m.type)||this.ru(f.doc,m.doc)),this.uu(r),s=s??!1;const l=t&&!s?this.cu():[],u=this.nu.size===0&&this.current&&!s?1:0,h=u!==this.tu;return this.tu=u,a.length!==0||h?{snapshot:new Qr(this.query,e.iu,i,a,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),lu:l}:{lu:l}}xa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({iu:this.iu,_u:new Zu,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{lu:[]}}hu(e){return!this.eu.has(e)&&!!this.iu.has(e)&&!this.iu.get(e).hasLocalMutations}uu(e){e&&(e.addedDocuments.forEach(t=>this.eu=this.eu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.eu=this.eu.delete(t)),this.current=e.current)}cu(){if(!this.current)return[];const e=this.nu;this.nu=ge(),this.iu.forEach(r=>{this.hu(r.key)&&(this.nu=this.nu.add(r.key))});const t=[];return e.forEach(r=>{this.nu.has(r)||t.push(new ep(r))}),this.nu.forEach(r=>{e.has(r)||t.push(new Zf(r))}),t}Pu(e){this.eu=e.Ls,this.nu=ge();const t=this.ou(e.documents);return this.applyChanges(t,!0)}Tu(){return Qr.fromInitialDocuments(this.query,this.iu,this.mutatedKeys,this.tu===0,this.hasCachedResults)}}const zl="SyncEngine";class Mx{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Ux{constructor(e){this.key=e,this.Iu=!1}}class Fx{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Eu={},this.Ru=new Er(l=>gf(l),Ao),this.Au=new Map,this.Vu=new Set,this.du=new Fe(re.comparator),this.mu=new Map,this.fu=new $l,this.gu={},this.pu=new Map,this.yu=Jn._r(),this.onlineState="Unknown",this.wu=void 0}get isPrimaryClient(){return this.wu===!0}}async function jx(n,e,t=!0){const r=op(n);let s;const i=r.Ru.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Tu()):s=await tp(r,e,t,!0),s}async function Bx(n,e){const t=op(n);await tp(t,e,!0,!1)}async function tp(n,e,t,r){const s=await ax(n.localStore,on(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await zx(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&qf(n.remoteStore,s),l}async function zx(n,e,t,r,s){n.Su=(m,x,E)=>async function(R,C,V,S){let M=C.view.ou(V);M.Ss&&(M=await Hu(R.localStore,C.query,!1).then(({documents:b})=>C.view.ou(b,M)));const U=S&&S.targetChanges.get(C.targetId),Y=S&&S.targetMismatches.get(C.targetId)!=null,D=C.view.applyChanges(M,R.isPrimaryClient,U,Y);return rh(R,C.targetId,D.lu),D.snapshot}(n,m,x,E);const i=await Hu(n.localStore,e,!0),a=new Lx(e,i.Ls),l=a.ou(i.documents),u=ai.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(l,n.isPrimaryClient,u);rh(n,t,h.lu);const f=new Mx(e,t,a);return n.Ru.set(e,f),n.Au.has(t)?n.Au.get(t).push(e):n.Au.set(t,[e]),h.snapshot}async function qx(n,e,t){const r=ue(n),s=r.Ru.get(e),i=r.Au.get(s.targetId);if(i.length>1)return r.Au.set(s.targetId,i.filter(a=>!Ao(a,e))),void r.Ru.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Wa(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Ol(r.remoteStore,s.targetId),Qa(r,s.targetId)}).catch(ts)):(Qa(r,s.targetId),await Wa(r.localStore,s.targetId,!0))}async function Wx(n,e){const t=ue(n),r=t.Ru.get(e),s=t.Au.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Ol(t.remoteStore,r.targetId))}async function Kx(n,e,t){const r=Zx(n);try{const s=await function(a,l){const u=ue(a),h=Ue.now(),f=l.reduce((E,$)=>E.add($.key),ge());let m,x;return u.persistence.runTransaction("Locally write mutations","readwrite",E=>{let $=In(),R=ge();return u.Ms.getEntries(E,f).next(C=>{$=C,$.forEach((V,S)=>{S.isValidDocument()||(R=R.add(V))})}).next(()=>u.localDocuments.getOverlayedDocuments(E,$)).next(C=>{m=C;const V=[];for(const S of l){const M=ow(S,m.get(S.key).overlayedDocument);M!=null&&V.push(new sr(S.key,M,lf(M.value.mapValue),jt.exists(!0)))}return u.mutationQueue.addMutationBatch(E,h,V,l)}).next(C=>{x=C;const V=C.applyToLocalDocumentSet(m,R);return u.documentOverlayCache.saveOverlays(E,C.batchId,V)})}).then(()=>({batchId:x.batchId,changes:vf(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,u){let h=a.gu[a.currentUser.toKey()];h||(h=new Fe(me)),h=h.insert(l,u),a.gu[a.currentUser.toKey()]=h}(r,s.batchId,t),await ci(r,s.changes),await Vo(r.remoteStore)}catch(s){const i=jl(s,"Failed to persist write");t.reject(i)}}async function np(n,e){const t=ue(n);try{const r=await sx(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.mu.get(i);a&&(Ce(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.Iu=!0:s.modifiedDocuments.size>0?Ce(a.Iu,14607):s.removedDocuments.size>0&&(Ce(a.Iu,42227),a.Iu=!1))}),await ci(t,r,e)}catch(r){await ts(r)}}function nh(n,e,t){const r=ue(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Ru.forEach((i,a)=>{const l=a.view.xa(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const u=ue(a);u.onlineState=l;let h=!1;u.queries.forEach((f,m)=>{for(const x of m.Ca)x.xa(l)&&(h=!0)}),h&&Bl(u)}(r.eventManager,e),s.length&&r.Eu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Hx(n,e,t){const r=ue(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.mu.get(e),i=s&&s.key;if(i){let a=new Fe(re.comparator);a=a.insert(i,Tt.newNoDocument(i,le.min()));const l=ge().add(i),u=new oi(le.min(),new Map,new Fe(me),a,l);await np(r,u),r.du=r.du.remove(i),r.mu.delete(e),ql(r)}else await Wa(r.localStore,e,!1).then(()=>Qa(r,e,t)).catch(ts)}async function Gx(n,e){const t=ue(n),r=e.batch.batchId;try{const s=await rx(t.localStore,e);sp(t,r,null),rp(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ci(t,s)}catch(s){await ts(s)}}async function Qx(n,e,t){const r=ue(n);try{const s=await function(a,l){const u=ue(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(Ce(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);sp(r,e,t),rp(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ci(r,s)}catch(s){await ts(s)}}function rp(n,e){(n.pu.get(e)||[]).forEach(t=>{t.resolve()}),n.pu.delete(e)}function sp(n,e,t){const r=ue(n);let s=r.gu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.gu[r.currentUser.toKey()]=s}}function Qa(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Au.get(e))n.Ru.delete(r),t&&n.Eu.bu(r,t);n.Au.delete(e),n.isPrimaryClient&&n.fu.Qr(e).forEach(r=>{n.fu.containsKey(r)||ip(n,r)})}function ip(n,e){n.Vu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Ol(n.remoteStore,t),n.du=n.du.remove(e),n.mu.delete(t),ql(n))}function rh(n,e,t){for(const r of t)r instanceof Zf?(n.fu.addReference(r.key,e),Jx(n,r)):r instanceof ep?(K(zl,"Document no longer in limbo: "+r.key),n.fu.removeReference(r.key,e),n.fu.containsKey(r.key)||ip(n,r.key)):ae(19791,{Du:r})}function Jx(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Vu.has(r)||(K(zl,"New document in limbo: "+t),n.Vu.add(r),ql(n))}function ql(n){for(;n.Vu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Vu.values().next().value;n.Vu.delete(e);const t=new re(De.fromString(e)),r=n.yu.next();n.mu.set(r,new Ux(t)),n.du=n.du.insert(t,r),qf(n.remoteStore,new _n(on(Tl(t.path)),r,"TargetPurposeLimboResolution",Eo.ce))}}async function ci(n,e,t){const r=ue(n),s=[],i=[],a=[];r.Ru.isEmpty()||(r.Ru.forEach((l,u)=>{a.push(r.Su(u,e,t).then(h=>{if((h||t)&&r.isPrimaryClient){const f=h?!h.fromCache:t?.targetChanges.get(u.targetId)?.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(h){s.push(h);const f=Nl.Is(u.targetId,h);i.push(f)}}))}),await Promise.all(a),r.Eu.J_(s),await async function(u,h){const f=ue(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>L.forEach(h,x=>L.forEach(x.Ps,E=>f.persistence.referenceDelegate.addReference(m,x.targetId,E)).next(()=>L.forEach(x.Ts,E=>f.persistence.referenceDelegate.removeReference(m,x.targetId,E)))))}catch(m){if(!ns(m))throw m;K(Dl,"Failed to update sequence numbers: "+m)}for(const m of h){const x=m.targetId;if(!m.fromCache){const E=f.Cs.get(x),$=E.snapshotVersion,R=E.withLastLimboFreeSnapshotVersion($);f.Cs=f.Cs.insert(x,R)}}}(r.localStore,i))}async function Xx(n,e){const t=ue(n);if(!t.currentUser.isEqual(e)){K(zl,"User change. New user:",e.toKey());const r=await Ff(t.localStore,e);t.currentUser=e,function(i,a){i.pu.forEach(l=>{l.forEach(u=>{u.reject(new Q(O.CANCELLED,a))})}),i.pu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ci(t,r.Os)}}function Yx(n,e){const t=ue(n),r=t.mu.get(e);if(r&&r.Iu)return ge().add(r.key);{let s=ge();const i=t.Au.get(e);if(!i)return s;for(const a of i){const l=t.Ru.get(a);s=s.unionWith(l.view.su)}return s}}function op(n){const e=ue(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=np.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Yx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Hx.bind(null,e),e.Eu.J_=Dx.bind(null,e.eventManager),e.Eu.bu=Ox.bind(null,e.eventManager),e}function Zx(n){const e=ue(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Gx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Qx.bind(null,e),e}class fo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Po(e.databaseInfo.databaseId),this.sharedClientState=this.Fu(e),this.persistence=this.Mu(e),await this.persistence.start(),this.localStore=this.xu(e),this.gcScheduler=this.Ou(e,this.localStore),this.indexBackfillerScheduler=this.Nu(e,this.localStore)}Ou(e,t){return null}Nu(e,t){return null}xu(e){return nx(this.persistence,new Zw,e.initialUser,this.serializer)}Mu(e){return new Uf(Vl.Ai,this.serializer)}Fu(e){return new cx}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}fo.provider={build:()=>new fo};class eE extends fo{constructor(e){super(),this.cacheSizeBytes=e}Ou(e,t){Ce(this.persistence.referenceDelegate instanceof uo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Mw(r,e.asyncQueue,t)}Mu(e){const t=this.cacheSizeBytes!==void 0?$t.withCacheSize(this.cacheSizeBytes):$t.DEFAULT;return new Uf(r=>uo.Ai(r,t),this.serializer)}}class Ja{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>nh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Xx.bind(null,this.syncEngine),await $x(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Nx}()}createDatastore(e){const t=Po(e.databaseInfo.databaseId),r=px(e.databaseInfo);return vx(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,l){return new wx(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>nh(this.syncEngine,t,0),function(){return Ju.v()?new Ju:new ux}())}createSyncEngine(e,t){return function(s,i,a,l,u,h,f){const m=new Fx(s,i,a,l,u,h);return f&&(m.wu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(t){const r=ue(t);K(hn,"RemoteStore shutting down."),r.Va.add(5),await li(r),r.ma.shutdown(),r.fa.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Ja.provider={build:()=>new Ja};/**
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
 */class ap{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Lu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Lu(this.observer.error,e):Tn("Uncaught Error in snapshot listener:",e.toString()))}ku(){this.muted=!0}Lu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const Yn="FirestoreClient";class tE{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=Et.UNAUTHENTICATED,this.clientId=yl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{K(Yn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(K(Yn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new bn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=jl(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function wa(n,e){n.asyncQueue.verifyOperationInProgress(),K(Yn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Ff(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function sh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await nE(n);K(Yn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Yu(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Yu(e.remoteStore,s)),n._onlineComponents=e}async function nE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){K(Yn,"Using user provided OfflineComponentProvider");try{await wa(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===O.FAILED_PRECONDITION||s.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;xr("Error using user provided cache. Falling back to memory cache: "+t),await wa(n,new fo)}}else K(Yn,"Using default OfflineComponentProvider"),await wa(n,new eE(void 0));return n._offlineComponents}async function lp(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(K(Yn,"Using user provided OnlineComponentProvider"),await sh(n,n._uninitializedComponentsProvider._online)):(K(Yn,"Using default OnlineComponentProvider"),await sh(n,new Ja))),n._onlineComponents}function rE(n){return lp(n).then(e=>e.syncEngine)}async function cp(n){const e=await lp(n),t=e.eventManager;return t.onListen=jx.bind(null,e.syncEngine),t.onUnlisten=qx.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Bx.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Wx.bind(null,e.syncEngine),t}function sE(n,e,t={}){const r=new bn;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,u,h){const f=new ap({next:x=>{f.ku(),a.enqueueAndForget(()=>Xf(i,m));const E=x.docs.has(l);!E&&x.fromCache?h.reject(new Q(O.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&x.fromCache&&u&&u.source==="server"?h.reject(new Q(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(x)},error:x=>h.reject(x)}),m=new Yf(Tl(l.path),f,{includeMetadataChanges:!0,$a:!0});return Jf(i,m)}(await cp(n),n.asyncQueue,e,t,r)),r.promise}function iE(n,e,t={}){const r=new bn;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,u,h){const f=new ap({next:x=>{f.ku(),a.enqueueAndForget(()=>Xf(i,m)),x.fromCache&&u.source==="server"?h.reject(new Q(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(x)},error:x=>h.reject(x)}),m=new Yf(l,f,{includeMetadataChanges:!0,$a:!0});return Jf(i,m)}(await cp(n),n.asyncQueue,e,t,r)),r.promise}function oE(n,e){const t=new bn;return n.asyncQueue.enqueueAndForget(async()=>Kx(await rE(n),e,t)),t.promise}/**
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
 */function up(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const aE="ComponentProvider",ih=new Map;function lE(n,e,t,r,s){return new Cb(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,up(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const hp="firestore.googleapis.com",oh=!0;class ah{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Q(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=hp,this.ssl=oh}else this.host=e.host,this.ssl=e.ssl??oh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Mf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Ow)throw new Q(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}yb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=up(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Q(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Q(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Q(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class No{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ah({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Q(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Q(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ah(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new lb;switch(r.type){case"firstParty":return new db(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Q(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=ih.get(t);r&&(K(aE,"Removing Datastore"),ih.delete(t),r.terminate())}(this),Promise.resolve()}}function cE(n,e,t,r={}){n=Qt(n,No);const s=Ys(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;s&&Zh(`https://${l}`),i.host!==hp&&i.host!==l&&xr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!wn(u,a)&&(n._setSettings(u),r.mockUserToken)){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=Et.MOCK_USER;else{h=yg(r.mockUserToken,n._app?.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new Q(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Et(m)}n._authCredentials=new cb(new Gd(h,f))}}/**
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
 */class ss{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ss(this.firestore,e,this._query)}}class Ke{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ke(this.firestore,e,this._key)}toJSON(){return{type:Ke._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(ri(t,Ke._jsonSchema))return new Ke(e,r||null,new re(De.fromString(t.referencePath)))}}Ke._jsonSchemaVersion="firestore/documentReference/1.0",Ke._jsonSchema={type:Xe("string",Ke._jsonSchemaVersion),referencePath:Xe("string")};class Wn extends ss{constructor(e,t,r){super(e,t,Tl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ke(this.firestore,null,new re(e))}withConverter(e){return new Wn(this.firestore,e,this._path)}}function Zn(n,e,...t){if(n=pt(n),Qd("collection","path",e),n instanceof No){const r=De.fromString(e,...t);return bu(r),new Wn(n,null,r)}{if(!(n instanceof Ke||n instanceof Wn))throw new Q(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(De.fromString(e,...t));return bu(r),new Wn(n.firestore,null,r)}}function Bt(n,e,...t){if(n=pt(n),arguments.length===1&&(e=yl.newId()),Qd("doc","path",e),n instanceof No){const r=De.fromString(e,...t);return vu(r),new Ke(n,null,new re(r))}{if(!(n instanceof Ke||n instanceof Wn))throw new Q(O.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(De.fromString(e,...t));return vu(r),new Ke(n.firestore,n instanceof Wn?n.converter:null,new re(r))}}/**
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
 */const lh="AsyncQueue";class ch{constructor(e=Promise.resolve()){this.nc=[],this.rc=!1,this.sc=[],this.oc=null,this._c=!1,this.ac=!1,this.uc=[],this.F_=new Bf(this,"async_queue_retry"),this.cc=()=>{const r=ba();r&&K(lh,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this.lc=e;const t=ba();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.cc)}get isShuttingDown(){return this.rc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.hc(),this.Pc(e)}enterRestrictedMode(e){if(!this.rc){this.rc=!0,this.ac=e||!1;const t=ba();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.cc)}}enqueue(e){if(this.hc(),this.rc)return new Promise(()=>{});const t=new bn;return this.Pc(()=>this.rc&&this.ac?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.nc.push(e),this.Tc()))}async Tc(){if(this.nc.length!==0){try{await this.nc[0](),this.nc.shift(),this.F_.reset()}catch(e){if(!ns(e))throw e;K(lh,"Operation failed with retryable error: "+e)}this.nc.length>0&&this.F_.g_(()=>this.Tc())}}Pc(e){const t=this.lc.then(()=>(this._c=!0,e().catch(r=>{throw this.oc=r,this._c=!1,Tn("INTERNAL UNHANDLED ERROR: ",uh(r)),r}).then(r=>(this._c=!1,r))));return this.lc=t,t}enqueueAfterDelay(e,t,r){this.hc(),this.uc.indexOf(e)>-1&&(t=0);const s=Fl.createAndSchedule(this,e,t,r,i=>this.Ic(i));return this.sc.push(s),s}hc(){this.oc&&ae(47125,{Ec:uh(this.oc)})}verifyOperationInProgress(){}async Rc(){let e;do e=this.lc,await e;while(e!==this.lc)}Ac(e){for(const t of this.sc)if(t.timerId===e)return!0;return!1}Vc(e){return this.Rc().then(()=>{this.sc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.sc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Rc()})}dc(e){this.uc.push(e)}Ic(e){const t=this.sc.indexOf(e);this.sc.splice(t,1)}}function uh(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Ir extends No{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new ch,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ch(e),this._firestoreClient=void 0,await e}}}function uE(n,e){const t=typeof n=="object"?n:rd(),r=typeof n=="string"?n:no,s=ll(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=gg("firestore");i&&cE(s,...i)}return s}function Wl(n){if(n._terminated)throw new Q(O.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||hE(n),n._firestoreClient}function hE(n){const e=n._freezeSettings(),t=lE(n._databaseId,n._app?.options.appId||"",n._persistenceKey,n._app?.options.apiKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new tE(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}}(n._componentsProvider))}/**
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
 */class Ft{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ft(vt.fromBase64String(e))}catch(t){throw new Q(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ft(vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ft._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ri(e,Ft._jsonSchema))return Ft.fromBase64String(e.bytes)}}Ft._jsonSchemaVersion="firestore/bytes/1.0",Ft._jsonSchema={type:Xe("string",Ft._jsonSchemaVersion),bytes:Xe("string")};/**
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
 */class Kl{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Q(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class is{constructor(e){this._methodName=e}}/**
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
 */class ln{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Q(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Q(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ln._jsonSchemaVersion}}static fromJSON(e){if(ri(e,ln._jsonSchema))return new ln(e.latitude,e.longitude)}}ln._jsonSchemaVersion="firestore/geoPoint/1.0",ln._jsonSchema={type:Xe("string",ln._jsonSchemaVersion),latitude:Xe("number"),longitude:Xe("number")};/**
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
 */class Kt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Kt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ri(e,Kt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Kt(e.vectorValues);throw new Q(O.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Kt._jsonSchemaVersion="firestore/vectorValue/1.0",Kt._jsonSchema={type:Xe("string",Kt._jsonSchemaVersion),vectorValues:Xe("object")};/**
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
 */const dE=/^__.*__$/;class fE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new sr(e,this.data,this.fieldMask,t,this.fieldTransforms):new ii(e,this.data,t,this.fieldTransforms)}}class dp{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new sr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function fp(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ae(40011,{dataSource:n})}}class Do{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.mc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Do({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}gc(e){const t=this.path?.child(e),r=this.i({path:t,arrayElement:!1});return r.yc(e),r}wc(e){const t=this.path?.child(e),r=this.i({path:t,arrayElement:!1});return r.mc(),r}Sc(e){return this.i({path:void 0,arrayElement:!0})}bc(e){return po(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}mc(){if(this.path)for(let e=0;e<this.path.length;e++)this.yc(this.path.get(e))}yc(e){if(e.length===0)throw this.bc("Document fields must not be empty");if(fp(this.dataSource)&&dE.test(e))throw this.bc('Document fields cannot begin and end with "__"')}}class pE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Po(e)}V(e,t,r,s=!1){return new Do({dataSource:e,methodName:t,targetDoc:r,path:yt.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Oo(n){const e=n._freezeSettings(),t=Po(n._databaseId);return new pE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function pp(n,e,t,r,s,i={}){const a=n.V(i.merge||i.mergeFields?2:0,e,t,s);Jl("Data must be an object, but it was:",a,r);const l=gp(r,a);let u,h;if(i.merge)u=new Ot(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const x=Jr(e,m,t);if(!a.contains(x))throw new Q(O.INVALID_ARGUMENT,`Field '${x}' is specified in your field mask but missing from your input data.`);vp(f,x)||f.push(x)}u=new Ot(f),h=a.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=a.fieldTransforms;return new fE(new Vt(l),u,h)}class Lo extends is{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.bc(`${this._methodName}() can only appear at the top level of your update data`):e.bc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Lo}}function mp(n,e,t){return new Do({dataSource:3,targetDoc:e.settings.targetDoc,methodName:n._methodName,arrayElement:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Hl extends is{_toFieldTransform(e){return new Sl(e.path,new Ws)}isEqual(e){return e instanceof Hl}}class Gl extends is{constructor(e,t){super(e),this.Cc=t}_toFieldTransform(e){const t=mp(this,e,!0),r=this.Cc.map(i=>Ar(i,t)),s=new Hr(r);return new Sl(e.path,s)}isEqual(e){return e instanceof Gl&&wn(this.Cc,e.Cc)}}class Ql extends is{constructor(e,t){super(e),this.Cc=t}_toFieldTransform(e){const t=mp(this,e,!0),r=this.Cc.map(i=>Ar(i,t)),s=new Gr(r);return new Sl(e.path,s)}isEqual(e){return e instanceof Ql&&wn(this.Cc,e.Cc)}}function mE(n,e,t,r){const s=n.V(1,e,t);Jl("Data must be an object, but it was:",s,r);const i=[],a=Vt.empty();rr(r,(u,h)=>{const f=yp(e,u,t);h=pt(h);const m=s.wc(f);if(h instanceof Lo)i.push(f);else{const x=Ar(h,m);x!=null&&(i.push(f),a.set(f,x))}});const l=new Ot(i);return new dp(a,l,s.fieldTransforms)}function gE(n,e,t,r,s,i){const a=n.V(1,e,t),l=[Jr(e,r,t)],u=[s];if(i.length%2!=0)throw new Q(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let x=0;x<i.length;x+=2)l.push(Jr(e,i[x])),u.push(i[x+1]);const h=[],f=Vt.empty();for(let x=l.length-1;x>=0;--x)if(!vp(h,l[x])){const E=l[x];let $=u[x];$=pt($);const R=a.wc(E);if($ instanceof Lo)h.push(E);else{const C=Ar($,R);C!=null&&(h.push(E),f.set(E,C))}}const m=new Ot(h);return new dp(f,m,a.fieldTransforms)}function _E(n,e,t,r=!1){return Ar(t,n.V(r?4:3,e))}function Ar(n,e){if(_p(n=pt(n)))return Jl("Unsupported field value:",e,n),gp(n,e);if(n instanceof is)return function(r,s){if(!fp(s.dataSource))throw s.bc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.bc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.bc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let u=Ar(l,s.Sc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=pt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ew(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ue.fromDate(r);return{timestampValue:co(s.serializer,i)}}if(r instanceof Ue){const i=new Ue(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:co(s.serializer,i)}}if(r instanceof ln)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ft)return{bytesValue:Rf(s.serializer,r._byteString)};if(r instanceof Ke){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.bc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Pl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Kt)return function(a,l){const u=a instanceof Kt?a.toArray():a;return{mapValue:{fields:{[sf]:{stringValue:of},[ro]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.bc("VectorValues must only contain numeric values.");return ko(l.serializer,f)})}}}}}}(r,s);if(Lf(r))return r._toProto(s.serializer);throw s.bc(`Unsupported field value: ${xo(r)}`)}(n,e)}function gp(n,e){const t={};return Yd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):rr(n,(r,s)=>{const i=Ar(s,e.gc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function _p(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ue||n instanceof ln||n instanceof Ft||n instanceof Ke||n instanceof is||n instanceof Kt||Lf(n))}function Jl(n,e,t){if(!_p(t)||!Jd(t)){const r=xo(t);throw r==="an object"?e.bc(n+" a custom object"):e.bc(n+" "+r)}}function Jr(n,e,t){if((e=pt(e))instanceof Kl)return e._internalPath;if(typeof e=="string")return yp(n,e);throw po("Field path arguments must be of type string or ",n,!1,void 0,t)}const yE=new RegExp("[~\\*/\\[\\]]");function yp(n,e,t){if(e.search(yE)>=0)throw po(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Kl(...e.split("."))._internalPath}catch{throw po(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function po(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new Q(O.INVALID_ARGUMENT,l+n+u)}function vp(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class vE{convertValue(e,t="none"){switch(Qn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return We(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Gn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ae(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return rr(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){const t=e.fields?.[ro].arrayValue?.values?.map(r=>We(r.doubleValue));return new Kt(t)}convertGeoPoint(e){return new ln(We(e.latitude),We(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Io(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(js(e));default:return null}}convertTimestamp(e){const t=Hn(e);return new Ue(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=De.fromString(e);Ce(Of(r),9688,{name:e});const s=new Bs(r.get(1),r.get(3)),i=new re(r.popFirst(5));return s.isEqual(t)||Tn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */class bp extends vE{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ft(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ke(this.firestore,null,t)}}function Ns(){return new Hl("serverTimestamp")}function bE(...n){return new Gl("arrayUnion",n)}function wE(...n){return new Ql("arrayRemove",n)}const hh="@firebase/firestore",dh="4.15.0";/**
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
 */class wp{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new xE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const t=this._document.data.field(Jr("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class xE extends wp{data(){return super.data()}}/**
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
 */function EE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new Q(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Xl{}class TE extends Xl{}function xp(n,e,...t){let r=[];e instanceof Xl&&r.push(e),r=r.concat(t),function(i){const a=i.filter(u=>u instanceof Yl).length,l=i.filter(u=>u instanceof Mo).length;if(a>1||a>0&&l>0)throw new Q(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Mo extends TE{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Mo(e,t,r)}_apply(e){const t=this._parse(e);return Tp(e._query,t),new ss(e.firestore,e.converter,Ua(e._query,t))}_parse(e){const t=Oo(e.firestore);return function(i,a,l,u,h,f,m){let x;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new Q(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){ph(m,f);const $=[];for(const R of m)$.push(fh(u,i,R));x={arrayValue:{values:$}}}else x=fh(u,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||ph(m,f),x=_E(l,a,m,f==="in"||f==="not-in");return Je.create(h,f,x)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Ep(n,e,t){const r=e,s=Jr("where",n);return Mo._create(s,r,t)}class Yl extends Xl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Yl(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Jt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const l=i.getFlattenedFilters();for(const u of l)Tp(a,u),a=Ua(a,u)}(e._query,t),new ss(e.firestore,e.converter,Ua(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function fh(n,e,t){if(typeof(t=pt(t))=="string"){if(t==="")throw new Q(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!mf(e)&&t.indexOf("/")!==-1)throw new Q(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(De.fromString(t));if(!re.isDocumentKey(r))throw new Q(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ku(n,new re(r))}if(t instanceof Ke)return ku(n,t._key);throw new Q(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${xo(t)}.`)}function ph(n,e){if(!Array.isArray(n)||n.length===0)throw new Q(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Tp(n,e){const t=function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new Q(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Q(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function Ip(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class Ss{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _r extends wp{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Fi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Jr("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Q(O.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=_r._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}_r._jsonSchemaVersion="firestore/documentSnapshot/1.0",_r._jsonSchema={type:Xe("string",_r._jsonSchemaVersion),bundleSource:Xe("string","DocumentSnapshot"),bundleName:Xe("string"),bundle:Xe("string")};class Fi extends _r{data(e={}){return super.data(e)}}class Br{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Ss(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Fi(this._firestore,this._userDataWriter,r.key,r,new Ss(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Q(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const u=new Fi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ss(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Fi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ss(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:IE(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Q(O.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Br._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=yl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function IE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ae(61501,{type:n})}}/**
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
 */Br._jsonSchemaVersion="firestore/querySnapshot/1.0",Br._jsonSchema={type:Xe("string",Br._jsonSchemaVersion),bundleSource:Xe("string","QuerySnapshot"),bundleName:Xe("string"),bundle:Xe("string")};/**
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
 */function Zl(n){n=Qt(n,Ke);const e=Qt(n.firestore,Ir),t=Wl(e);return sE(t,n._key).then(r=>kE(e,n,r))}function ui(n){n=Qt(n,ss);const e=Qt(n.firestore,Ir),t=Wl(e),r=new bp(e);return EE(n._query),iE(t,n._query).then(s=>new Br(e,r,n,s))}function AE(n,e,t){n=Qt(n,Ke);const r=Qt(n.firestore,Ir),s=Ip(n.converter,e),i=Oo(r);return Uo(r,[pp(i,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,jt.none())])}function Xr(n,e,t,...r){n=Qt(n,Ke);const s=Qt(n.firestore,Ir),i=Oo(s);let a;return a=typeof(e=pt(e))=="string"||e instanceof Kl?gE(i,"updateDoc",n._key,e,t,r):mE(i,"updateDoc",n._key,e),Uo(s,[a.toMutation(n._key,jt.exists(!0))])}function SE(n){return Uo(Qt(n.firestore,Ir),[new kl(n._key,jt.none())])}function Xa(n,e){const t=Qt(n.firestore,Ir),r=Bt(n),s=Ip(n.converter,e),i=Oo(n.firestore);return Uo(t,[pp(i,"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,jt.exists(!1))]).then(()=>r)}function Uo(n,e){const t=Wl(n);return oE(t,e)}function kE(n,e,t){const r=t.docs.get(e._key),s=new bp(n);return new _r(n,s,e._key,r,new Ss(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){ab(Yr),zr(new yr("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new Ir(new ub(r.getProvider("auth-internal")),new fb(a,r.getProvider("app-check-internal")),Rb(a,s),a);return i={useFetchStreams:t,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),zn(hh,dh,e),zn(hh,dh,"esm2020")})();var CE="firebase",RE="12.14.0";/**
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
 */zn(CE,RE,"app");const PE={apiKey:"AIzaSyDkR00qL4A-yMP5Ehta3RYowC2d-vR8I78",authDomain:"aurumvault-def8b.firebaseapp.com",projectId:"aurumvault-def8b",storageBucket:"aurumvault-def8b.firebasestorage.app",messagingSenderId:"646887449279",appId:"1:646887449279:web:12705de1dc6aa9df5a9c0a"},Ap=nd(PE),hi=ib(Ap),nt=uE(Ap),[cn,mh]=H(!1),[dt,Ya]=H(null),[Fo,gh]=H(!1),[IA,$E]=H(!0);Hy(hi,async n=>{if(n){const e=await Zl(Bt(nt,"users",n.uid)),t=e.exists()?e.data():{};Ya({uid:n.uid,email:n.email,name:t.name||n.email,role:t.role||"user"}),mh(!0),gh(t.role==="admin")}else Ya(null),mh(!1),gh(!1);$E(!1)});async function VE(n,e,t){const s=(await zy(hi,e,t)).user;return await AE(Bt(nt,"users",s.uid),{name:n,email:e,role:"user",address:"",wishlist:[],createdAt:Ns()}),s}async function NE(n,e){return(await qy(hi,n,e)).user}async function Dr(){await Gy(hi)}async function DE(n){await By(hi,n)}async function OE(n){const e=dt();e&&(await Xr(Bt(nt,"users",e.uid),n),Ya({...e,...n}))}const[AA,LE]=H(!1),ME="aurum2025",[Ht,UE]=H([]),[_h,yh]=H(!1);async function Fn(){yh(!0);try{const e=(await ui(Zn(nt,"products"))).docs.map(t=>({id:t.id,...t.data()}));UE(e)}catch(n){console.error("Greška pri dohvaćanju proizvoda:",n)}yh(!1)}const FE=["All","Rings","Necklaces","Watches","Accessories","Art Objects"],[qt,jo]=H([]);function Sp(n,e=1){jo(t=>t.find(s=>s.id===n.id)?t.map(s=>s.id===n.id?{...s,quantity:s.quantity+e}:s):[...t,{...n,quantity:e}])}function kp(n){jo(e=>e.filter(t=>t.id!==n))}function vh(n,e){if(e<=0){kp(n);return}jo(t=>t.map(r=>r.id===n?{...r,quantity:e}:r))}function jE(){jo([])}function dr(){return qt().reduce((n,e)=>n+(e.price||0)*e.quantity,0)}function bh(){return qt().reduce((n,e)=>n+e.quantity,0)}const[Or,Cp]=H([]);async function BE(){const n=dt();if(n)try{const e=await ui(xp(Zn(nt,"orders"),Ep("userId","==",n.uid)));Cp(e.docs.map(t=>({id:t.id,...t.data()})))}catch(e){console.error(e)}}async function wh(){try{const n=await ui(Zn(nt,"orders"));Cp(n.docs.map(e=>({id:e.id,...e.data()})))}catch(n){console.error(n)}}async function zE(n){const e=dt();return(await Xa(Zn(nt,"orders"),{...n,userId:e?.uid||null,createdAt:Ns()})).id}async function qE(n){const e=await Zl(Bt(nt,"coupons",n.toUpperCase()));if(!e.exists())throw new Error("Kupon ne postoji.");const t=e.data();if(!t.active)throw new Error("Kupon nije aktivan.");return t}const[mo,Rp]=H([]);async function Pp(){const n=dt();if(n)try{const e=await Zl(Bt(nt,"users",n.uid));Rp(e.data()?.wishlist||[])}catch(e){console.error(e)}}async function $p(n){const e=dt();if(!e)return!1;const t=mo().includes(n);try{return await Xr(Bt(nt,"users",e.uid),{wishlist:t?wE(n):bE(n)}),Rp(r=>t?r.filter(s=>s!==n):[...r,n]),!t}catch(r){return console.error(r),!1}}async function WE(n){try{return(await ui(xp(Zn(nt,"reviews"),Ep("productId","==",n)))).docs.map(t=>({id:t.id,...t.data()}))}catch(e){return console.error(e),[]}}var KE=N('<div class="min-h-screen bg-aurum-black flex flex-col"><div class="flex items-center justify-between px-6 py-4 border-b border-aurum-border"><div class="flex items-center gap-2"><div class="w-8 h-8 bg-aurum-gold rounded-full flex items-center justify-center"><span class="text-aurum-black font-display font-black text-sm">A</span></div><span class="font-display font-bold text-aurum-gold tracking-widest text-lg gold-glow">AurumVault</span></div><div class="flex items-center gap-6 text-xs text-aurum-muted"><span class="flex items-center gap-2">Pristupačnost<span class="w-8 h-4 bg-aurum-gold rounded-full inline-block"></span></span><span class="hidden sm:block">Visoki kontrast</span><span class="hidden sm:block">Veći tekst</span></div></div><div class="flex-1 flex items-center justify-center px-4 py-12"><div class="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-8 items-center page-enter"><div class="hidden lg:block"><div class="relative rounded-xl overflow-hidden aspect-square"><img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500"alt=Trezor class="w-full h-full object-cover"><div class="absolute inset-0 bg-gradient-to-t from-aurum-black via-transparent to-transparent pointer-events-none"></div></div></div><div class="gold-border-anim bg-aurum-card rounded-2xl p-8"><div class="text-center mb-8"><span class="badge-exclusive mb-3 inline-block">Ekskluzivno</span><h1 class="font-display text-2xl font-bold text-white leading-tight mt-2">Ekskluzivni pristup —<br>unesite lozinku</h1><p class="text-aurum-muted text-sm mt-3 leading-relaxed">Ova stranica dostupna je samo odobrenim članovima. Unesite lozinku za pristup privatnom katalogu AurumVaulta.</p></div><form><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-2">Lozinka za pristup</label><input type=password placeholder="Unesite lozinku"><button type=submit class="btn-gold w-full py-3 rounded-lg text-sm mt-2"></button></form><p class="text-center text-aurum-muted text-xs mt-4">🔒 Ova lozinka štiti sve stranice AurumVaulta.</p><p class="text-center mt-3 text-xs text-aurum-muted">Demo lozinka: <span class="text-aurum-gold font-mono">aurum2025</span></p></div><div class="flex flex-col gap-4"><div class="card-dark p-4"><h3 class="text-aurum-gold text-sm font-bold font-display tracking-wider mb-2">Uvjeti pristupa</h3><p class="text-aurum-muted text-xs leading-relaxed">Samo za članove. Unosom lozinke potvrđujete da ste ovlašteni za pregledavanje sadržaja AurumVaulta i prihvaćate naše uvjete povjerljivosti.</p></div><div class="card-dark p-4"><h3 class="text-aurum-gold text-sm font-bold font-display tracking-wider mb-2">Zadnja izmjena</h3><p class="text-aurum-muted text-xs leading-relaxed">3. ožujka 2025. — Rotaciju lozinke proveo sigurnosni tim.</p></div><div class="card-dark p-4"><h3 class="text-aurum-gold text-sm font-bold font-display tracking-wider mb-2">Radno vrijeme podrške</h3><p class="text-aurum-muted text-xs leading-relaxed">Pon–Pet 09:00–18:00 po GMT-u. Za hitne slučajeve pišite na <a href=mailto:support@aurumvault.com class="text-aurum-gold hover:underline">support@aurumvault.com</a>.</p></div></div></div></div><div class="border-t border-aurum-border px-6 py-4 flex justify-between items-center text-xs text-aurum-muted"><span>© 2025 AurumVault. Sva prava pridržana.</span><span>Kontakt: <a href=mailto:contact@aurumvault.com class="text-aurum-gold hover:underline">contact@aurumvault.com'),HE=N('<div class="flex items-center justify-between mb-4"><p class="text-red-400 text-xs flex items-center gap-1"><span>⚠</span> Pogrešna lozinka. Pokušajte ponovo.</p><a href=# class="text-aurum-gold text-xs hover:underline">Trebate pomoć?');function GE(){const n=dn(),[e,t]=H(""),[r,s]=H(!1),[i,a]=H(!1);async function l(u){u.preventDefault(),a(!0),s(!1),await new Promise(h=>setTimeout(h,800)),e()===ME?(LE(!0),n("/catalog")):s(!0),a(!1)}return(()=>{var u=KE(),h=u.firstChild,f=h.nextSibling,m=f.firstChild,x=m.firstChild,E=x.nextSibling,$=E.firstChild,R=$.nextSibling,C=R.firstChild,V=C.nextSibling,S=V.nextSibling;return R.addEventListener("submit",l),V.$$input=M=>{t(M.target.value),s(!1)},y(R,(()=>{var M=rt(()=>!!r());return()=>M()&&HE()})(),S),y(S,()=>i()?"Provjera...":"Otključaj trezor"),q(M=>{var U=`input-dark w-full px-4 py-3 text-sm mb-3 ${r()?"border-red-500":""}`,Y=i();return U!==M.e&&Ae(V,M.e=U),Y!==M.t&&(S.disabled=M.t=Y),M},{e:void 0,t:void 0}),q(()=>V.value=e()),u})()}Xt(["input"]);var QE=N('<div class="w-8 h-8 bg-aurum-gold rounded-full flex items-center justify-center"><span class="text-aurum-black font-display font-black text-sm">A'),JE=N('<span class="font-display font-bold text-lg text-aurum-gold tracking-widest gold-glow">AurumVault'),XE=N('<form class="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2 bg-aurum-dark border border-aurum-gold rounded-lg px-3 py-1.5"style=min-width:220px><input type=text placeholder="Pretraži proizvode..."autofocus class="bg-transparent text-aurum-text text-sm outline-none flex-1"><button type=submit class="text-aurum-gold text-xs">→</button><button type=button class="text-aurum-muted hover:text-aurum-gold">×'),YE=N('<button class="text-aurum-muted hover:text-aurum-gold transition-colors p-1"><svg class="w-5 h-5"fill=none viewBox="0 0 24 24"stroke=currentColor><path stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">'),ZE=N('<div class="w-7 h-7 bg-aurum-gold rounded-full flex items-center justify-center"><span class="text-aurum-black font-bold text-xs">'),eT=N('<span class="hidden sm:block text-sm">'),tT=N('<div class="flex items-center gap-2"><button class="nav-link text-xs opacity-50 hover:opacity-100">Odjava'),nT=N('<svg class="w-5 h-5"fill=none viewBox="0 0 24 24"stroke=currentColor><path stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">'),rT=N('<svg xmlns=http://www.w3.org/2000/svg class="w-5 h-5"fill=none viewBox="0 0 24 24"stroke=currentColor><path stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.3 2.3A1 1 0 006 17h12M10 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z">'),sT=N('<span class="absolute -top-1 -right-1 bg-aurum-gold text-aurum-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">'),iT=N('<div class="md:hidden bg-aurum-dark border-t border-aurum-border px-4 py-4 flex flex-col gap-4"><form class="flex gap-2"><input type=text placeholder=Pretraži... class="input-dark flex-1 px-3 py-2 text-sm"><button type=submit class="btn-gold px-3 py-2 text-sm rounded">Traži'),oT=N('<nav class="sticky top-0 z-50 bg-aurum-black border-b border-aurum-border"><div class="max-w-7xl mx-auto px-4 flex items-center justify-between h-16"><div class="hidden md:flex items-center gap-8"></div><div class="flex items-center gap-3"><div class=relative></div><button class="md:hidden text-aurum-text hover:text-aurum-gold"><svg class="w-6 h-6"fill=none viewBox="0 0 24 24"stroke=currentColor><path stroke-linecap=round stroke-linejoin=round stroke-width=2>');function Bo(){const n=dn(),[e,t]=H(!1),[r,s]=H(!1),[i,a]=H("");function l(){Dr(),n("/login")}function u(h){h.preventDefault(),i().trim()&&(n(`/catalog?search=${encodeURIComponent(i().trim())}`),s(!1),a(""))}return(()=>{var h=oT(),f=h.firstChild,m=f.firstChild,x=m.nextSibling,E=x.firstChild,$=E.nextSibling,R=$.firstChild,C=R.firstChild;return y(f,P(Ee,{href:"/catalog",class:"flex items-center gap-2 group flex-shrink-0",get children(){return[QE(),JE()]}}),m),y(m,P(Ee,{href:"/catalog",class:"nav-link",children:"Kolekcije"}),null),y(m,P(Ee,{href:"/catalog?filter=new",class:"nav-link",children:"Novi dolasci"}),null),y(m,P(Ee,{href:"/catalog?filter=exclusive",class:"nav-link text-aurum-gold",children:"Ekskluzivno"}),null),y(E,P(te,{get when(){return r()},get children(){var V=XE(),S=V.firstChild,M=S.nextSibling,U=M.nextSibling;return V.addEventListener("submit",u),S.$$input=Y=>a(Y.target.value),U.$$click=()=>s(!1),q(()=>S.value=i()),V}}),null),y(E,P(te,{get when(){return!r()},get children(){var V=YE();return V.$$click=()=>s(!0),V}}),null),y(x,P(te,{get when(){return Fo()},get children(){return P(Ee,{href:"/admin",class:"nav-link text-aurum-gold text-xs border border-aurum-gold px-3 py-1 rounded hover:bg-aurum-gold hover:text-aurum-black transition-all",children:"Admin"})}}),$),y(x,P(te,{get when(){return cn()},get fallback(){return P(Ee,{href:"/login",class:"nav-link text-sm",children:"Račun"})},get children(){var V=tT(),S=V.firstChild;return y(V,P(Ee,{href:"/profile",class:"nav-link flex items-center gap-1",get children(){return[(()=>{var M=ZE(),U=M.firstChild;return y(U,()=>dt()?.name?.charAt(0)||"K"),M})(),(()=>{var M=eT();return y(M,()=>dt()?.name?.split(" ")[0]),M})()]}}),S),S.$$click=l,V}}),$),y(x,P(te,{get when(){return cn()},get children(){return P(Ee,{href:"/profile?tab=wishlist",class:"p-2 text-aurum-muted hover:text-aurum-gold transition-colors",title:"Lista želja",get children(){return nT()}})}}),$),y(x,P(Ee,{href:"/checkout",class:"relative p-2 text-aurum-text hover:text-aurum-gold transition-colors",get children(){return[rT(),P(te,{get when(){return bh()>0},get children(){var V=sT();return y(V,bh),V}})]}}),$),$.$$click=()=>t(!e()),y(h,P(te,{get when(){return e()},get children(){var V=iT(),S=V.firstChild,M=S.firstChild;return y(V,P(Ee,{href:"/catalog",class:"nav-link",onclick:()=>t(!1),children:"Kolekcije"}),S),y(V,P(Ee,{href:"/catalog?filter=new",class:"nav-link",onclick:()=>t(!1),children:"Novi dolasci"}),S),y(V,P(Ee,{href:"/catalog?filter=exclusive",class:"nav-link text-aurum-gold",onclick:()=>t(!1),children:"Ekskluzivno"}),S),S.addEventListener("submit",U=>{u(U),t(!1)}),M.$$input=U=>a(U.target.value),q(()=>M.value=i()),V}}),null),q(()=>ft(C,"d",e()?"M6 18L18 6M6 6l12 12":"M4 6h16M4 12h16M4 18h16")),h})()}Xt(["input","click"]);var aT=N('<footer class="bg-aurum-dark border-t border-aurum-border mt-20"><div class="max-w-7xl mx-auto px-4 py-12"><div class="grid grid-cols-1 md:grid-cols-4 gap-10"><div><div class="flex items-center gap-2 mb-4"><div class="w-8 h-8 bg-aurum-gold rounded-full flex items-center justify-center"><span class="text-aurum-black font-display font-black text-sm">A</span></div><span class="font-display font-bold text-aurum-gold tracking-widest">AurumVault</span></div><p class="text-aurum-muted text-sm leading-relaxed">Pažljivo odabrano blago s sigurnom dostavom i vrhunskom uslugom.</p></div><div><h4 class="font-display text-sm font-bold text-aurum-gold tracking-widest uppercase mb-4">Istraži</h4><ul class="space-y-2 text-sm text-aurum-muted"><li></li><li></li><li></li><li><a href=# class="hover:text-aurum-gold transition-colors">Novosti</a></li></ul></div><div><h4 class="font-display text-sm font-bold text-aurum-gold tracking-widest uppercase mb-4">Podrška</h4><ul class="space-y-2 text-sm text-aurum-muted"><li><a href=# class="hover:text-aurum-gold transition-colors">Kontaktirajte nas</a></li><li><a href=# class="hover:text-aurum-gold transition-colors">Dostava i povrat</a></li><li><a href=# class="hover:text-aurum-gold transition-colors">Jamstvo</a></li><li><a href=# class="hover:text-aurum-gold transition-colors">Česta pitanja</a></li></ul></div><div><h4 class="font-display text-sm font-bold text-aurum-gold tracking-widest uppercase mb-4">Povežite se</h4><div class="flex gap-3 mb-4"></div><p class="text-aurum-muted text-xs">Kontakt: concierge@aurumvault.com</p><div class=mt-4><p class="text-aurum-muted text-xs mb-2">Pretplatite se za ekskluzivne preglede</p><div class="flex gap-2"><input type=email placeholder="Email adresa"class="input-dark text-xs px-3 py-2 flex-1 min-w-0"><button class="btn-gold px-3 py-2 text-xs rounded">→</button></div></div></div></div><div class="border-t border-aurum-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4"><p class="text-aurum-muted text-xs">© 2025 AurumVault. Sva prava pridržana.</p><div class="flex gap-6 text-xs text-aurum-muted"><a href=# class="hover:text-aurum-gold transition-colors">Pravila privatnosti</a><a href=# class="hover:text-aurum-gold transition-colors">Uvjeti korištenja</a><a href=# class="hover:text-aurum-gold transition-colors">Sigurnost'),lT=N('<a href=# class="w-8 h-8 border border-aurum-border rounded flex items-center justify-center text-xs text-aurum-muted hover:border-aurum-gold hover:text-aurum-gold transition-all">');function ec(){return(()=>{var n=aT(),e=n.firstChild,t=e.firstChild,r=t.firstChild,s=r.nextSibling,i=s.firstChild,a=i.nextSibling,l=a.firstChild,u=l.nextSibling,h=u.nextSibling,f=s.nextSibling,m=f.nextSibling,x=m.firstChild,E=x.nextSibling;return y(l,P(Ee,{href:"/catalog",class:"hover:text-aurum-gold transition-colors",children:"Kolekcije"})),y(u,P(Ee,{href:"/catalog?filter=exclusive",class:"hover:text-aurum-gold transition-colors",children:"Ekskluzivno"})),y(h,P(Ee,{href:"/login",class:"hover:text-aurum-gold transition-colors",children:"Prijava / Registracija"})),y(E,()=>["IG","TW","YT"].map($=>(()=>{var R=lT();return y(R,$),R})())),n})()}var cT=N('<div class="product-card group"><div class="relative overflow-hidden aspect-square bg-aurum-dark"><img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"><div class="absolute inset-0 bg-gradient-to-t from-aurum-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div><div class="absolute top-2 left-2 flex flex-col gap-1"></div><div class="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2"><button class="flex-1 bg-aurum-dark/90 text-aurum-gold text-xs py-2 rounded border border-aurum-gold hover:bg-aurum-gold hover:text-aurum-black transition-all">Brzi pregled</button></div></div><div class=p-4><h3 class="font-display text-sm font-semibold text-aurum-text group-hover:text-aurum-gold transition-colors leading-snug mb-1"></h3><p class="text-aurum-muted text-xs mb-3">...</p><div class="flex items-center justify-between"><div><p class="text-aurum-muted text-xs">Šifra: </p></div><button>'),uT=N("<span>"),hT=N('<div class="absolute top-2 right-2"><span class="bg-red-600/80 text-white text-xs px-2 py-0.5 rounded-full">Ostalo: '),dT=N('<div class="flex items-center gap-2"><span class="text-aurum-gold font-bold">$</span><span class="text-aurum-muted text-xs line-through">$'),fT=N('<span class="text-aurum-gold font-bold">$'),pT=N('<div class="flex artikala-center justify-center py-20"><div class="text-aurum-gold text-sm animate-pulse">Učitavanje proizvoda...'),mT=N('<div class="flex artikala-center justify-between mb-6"><div><h2 class="section-title text-lg"></h2><p class="text-aurum-muted text-sm mt-1">Prikazuje se <!> artikala</p></div><div class="flex artikala-center gap-3"><select class="input-dark px-3 py-1.5 text-xs"><option>Istaknuto</option><option>Najnovije</option><option>Cijena: Niža</option><option>Cijena: Viša'),gT=N("<div>"),_T=N('<div class="min-h-screen bg-aurum-black"><div class="relative bg-aurum-dark border-b border-aurum-border overflow-hidden"><div class="absolute inset-0 opacity-10 pointer-events-none"style="background:radial-gradient(ellipse at 70% 50%, rgba(240,192,64,0.4) 0%, transparent 70%)"></div><div class="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6 artikala-center"><div class=md:col-span-2><span class="badge-exclusive mb-2 inline-block">Odabrana kolekcija</span><h1 class="font-display text-3xl font-bold text-white leading-tight mt-2">Aurum Noir —<br><span class="text-aurum-gold gold-glow">Serija Ponoćnih Skulptura</span></h1><p class="text-aurum-muted mt-3 text-sm leading-relaxed max-w-lg">Ekskluzivna limitirana serija ručno izrađenih skulptura. Članovi imaju rani pristup i besplatne certifikate autentičnosti.</p><button class="btn-gold mt-5 px-6 py-3 rounded-lg text-xs">Istraži kolekciju</button></div></div></div><div class="max-w-7xl mx-auto px-4 py-8 flex gap-8"><aside class="hidden lg:block w-56 flex-shrink-0"><div class="sticky top-24 space-y-6"><div><h3 class="text-xs font-bold text-aurum-gold uppercase tracking-widest mb-3">Filtri</h3></div><div><h4 class="text-xs text-aurum-muted uppercase tracking-widest mb-2">Kategorija</h4><select class="input-dark w-full px-3 py-2 text-sm"></select></div><div><h4 class="text-xs text-aurum-muted uppercase tracking-widest mb-2">Raspon cijena</h4><div class="flex artikala-center gap-2"><input type=number class="input-dark w-full px-2 py-1.5 text-xs"placeholder=Min><span class=text-aurum-muted>–</span><input type=number class="input-dark w-full px-2 py-1.5 text-xs"placeholder=Maks></div></div><div><label class="flex artikala-center gap-2 cursor-pointer"><input type=checkbox class="checkbox checkbox-warning checkbox-sm"><span class="text-xs text-aurum-text">Samo za članove</span></label></div><button class="text-xs text-aurum-muted hover:text-aurum-gold transition-colors underline">Poništi filtere</button></div></aside><main class=flex-1>'),yT=N("<option>"),vT=N('<div class="text-center py-20 text-aurum-muted"><p class="text-lg mb-2">Nema pronađenih proizvoda</p><p class=text-sm>Pokušajte prilagoditi filtere');const bT={Sve:"Sve kategorije",Rings:"Prstenje",Necklaces:"Ogrlice",Watches:"Satovi",Accessories:"Dodaci","Art Objects":"Umjetnički predmeti"},wT={Exclusive:"Ekskluzivno","Members Only":"Samo za članove",Limited:"Ograničeno",Sale:"Rasprodaja"};function xT({product:n}){const e=dn(),[t,r]=H(!1),i=!(n.membersOnly===!0)||cn();function a(u){if(u.stopPropagation(),!i){e("/login");return}Sp(n),r(!0),setTimeout(()=>r(!1),1500)}const l=n.badge?wT[n.badge]||n.badge:null;return(()=>{var u=cT(),h=u.firstChild,f=h.firstChild,m=f.nextSibling,x=m.nextSibling,E=x.nextSibling,$=E.firstChild,R=h.nextSibling,C=R.firstChild,V=C.nextSibling,S=V.firstChild,M=V.nextSibling,U=M.firstChild,Y=U.firstChild;Y.firstChild;var D=U.nextSibling;return u.$$click=()=>e(`/product/${n.id}`),y(x,l&&(()=>{var b=uT();return y(b,l),q(()=>Ae(b,`text-xs font-bold px-2 py-0.5 rounded-full ${n.badge==="Sale"?"bg-green-600 text-white":n.badge?.startsWith("Limited")?"bg-red-600 text-white":"badge-exclusive"}`)),b})()),y(h,(()=>{var b=rt(()=>n.stock<=3);return()=>b()&&(()=>{var _=hT(),v=_.firstChild;return v.firstChild,y(v,()=>n.stock,null),_})()})(),E),$.$$click=b=>{b.stopPropagation(),e(`/product/${n.id}`)},y(C,()=>n.name),y(V,()=>n.description?.substring(0,60),S),y(U,(()=>{var b=rt(()=>!!n.salePrice);return()=>b()?(()=>{var _=dT(),v=_.firstChild;v.firstChild;var T=v.nextSibling;return T.firstChild,y(v,()=>n.salePrice.toLocaleString(),null),y(T,()=>n.price?.toLocaleString(),null),_})():(()=>{var _=fT();return _.firstChild,y(_,()=>n.price?.toLocaleString(),null),_})()})(),Y),y(Y,()=>n.sku,null),D.$$click=a,y(D,()=>i?t()?"✓ Dodano":"U košaricu":"👑 Prijava"),q(b=>{var _=n.images?.[0],v=n.name,T=`text-xs px-3 py-2 rounded border transition-all ${i?t()?"bg-green-600 border-green-600 text-white":"border-aurum-gold text-aurum-gold hover:bg-aurum-gold hover:text-aurum-black":"border-aurum-border text-aurum-muted cursor-not-allowed opacity-70"}`;return _!==b.e&&ft(f,"src",b.e=_),v!==b.t&&ft(f,"alt",b.t=v),T!==b.a&&Ae(D,b.a=T),b},{e:void 0,t:void 0,a:void 0}),u})()}function ET(){const[n]=zm(),[e,t]=H("All"),[r,s]=H(0),[i,a]=H(15e3),[l,u]=H(!1),[h,f]=H("Istaknuto"),[m,x]=H("grid"),[E,$]=H("");Hs(()=>Fn()),Ch(()=>{t("All"),u(!1),$(""),f("Istaknuto"),n.search&&$(n.search),n.filter==="exclusive"&&u(!0),n.filter==="new"&&f("Najnovije")});const R=ke(()=>n.search?`Rezultati za "${n.search}"`:n.filter==="exclusive"?"Ekskluzivno":n.filter==="new"?"Novi dolasci":"Sve kolekcije"),C=ke(()=>{let V=Ht();if(E()){const S=E().toLowerCase();V=V.filter(M=>M.name?.toLowerCase().includes(S)||M.description?.toLowerCase().includes(S)||M.category?.toLowerCase().includes(S)||M.sku?.toLowerCase().includes(S))}return e()!=="All"&&(V=V.filter(S=>S.category===e())),l()&&(V=V.filter(S=>S.membersOnly)),V=V.filter(S=>{const M=S.salePrice||S.price;return M>=r()&&M<=i()}),h()==="Cijena: Niža"&&(V=[...V].sort((S,M)=>(S.salePrice||S.price)-(M.salePrice||M.price))),h()==="Cijena: Viša"&&(V=[...V].sort((S,M)=>(M.salePrice||M.price)-(S.salePrice||S.price))),h()==="Najnovije"&&(V=[...V].sort((S,M)=>(M.createdAt?.seconds||0)-(S.createdAt?.seconds||0))),V});return(()=>{var V=_T(),S=V.firstChild,M=S.firstChild,U=M.nextSibling,Y=U.firstChild,D=Y.firstChild,b=D.nextSibling,_=b.nextSibling,v=_.nextSibling,T=S.nextSibling,w=T.firstChild,I=w.firstChild,p=I.firstChild,B=p.nextSibling,Z=B.firstChild,Te=Z.nextSibling,Re=B.nextSibling,Oe=Re.firstChild,je=Oe.nextSibling,$e=je.firstChild,Ye=$e.nextSibling,St=Ye.nextSibling,He=Re.nextSibling,mt=He.firstChild,gt=mt.firstChild,it=He.nextSibling,ot=w.nextSibling;return y(V,P(Bo,{}),S),v.$$click=()=>u(!0),Te.addEventListener("change",we=>t(we.target.value)),y(Te,P(Rt,{each:FE,children:we=>(()=>{var Ze=yT();return Ze.value=we,y(Ze,()=>bT[we]||we),Ze})()})),$e.$$input=we=>s(+we.target.value),St.$$input=we=>a(+we.target.value),gt.addEventListener("change",we=>u(we.target.checked)),it.$$click=()=>{t("All"),s(0),a(15e3),u(!1)},y(ot,P(te,{get when(){return _h()},get children(){return pT()}}),null),y(ot,P(te,{get when(){return!_h()},get children(){return[(()=>{var we=mT(),Ze=we.firstChild,bt=Ze.firstChild,Nt=bt.nextSibling,kt=Nt.firstChild,Ct=kt.nextSibling;Ct.nextSibling;var se=Ze.nextSibling,G=se.firstChild;return y(bt,R),y(Nt,()=>C().length,Ct),G.addEventListener("change",F=>f(F.target.value)),q(()=>G.value=h()),we})(),(()=>{var we=gT();return y(we,P(Rt,{get each(){return C()},children:Ze=>P(xT,{product:Ze})})),q(()=>Ae(we,`grid gap-5 ${m()==="grid"?"grid-cols-1 sm:grid-cols-2 xl:grid-cols-3":"grid-cols-1"}`)),we})(),rt(()=>rt(()=>C().length===0)()&&vT())]}}),null),y(V,P(ec,{}),null),q(()=>Te.value=e()),q(()=>$e.value=r()),q(()=>St.value=i()),q(()=>gt.checked=l()),V})()}Xt(["click","input"]);var TT=N('<div class="min-h-screen bg-aurum-black"><div class="border-b border-aurum-border"><div class="max-w-7xl mx-auto px-4 py-3 flex items-center gap-2 text-xs text-aurum-muted"><span>›</span><span>›</span><span class=text-aurum-text></span></div></div><div class="max-w-7xl mx-auto px-4 py-10 page-enter"><div class="grid grid-cols-1 lg:grid-cols-2 gap-12"><div class=space-y-3><div class="relative rounded-xl overflow-hidden bg-aurum-dark aspect-square"><img class="w-full h-full object-cover"></div><div class="flex gap-2"></div><div class="grid grid-cols-3 gap-3 mt-4"></div></div><div class=space-y-6><div><h1 class="font-display text-3xl font-bold text-white leading-tight"></h1><div class="flex items-center gap-3 mt-3"><span class="text-2xl font-bold text-aurum-gold">$</span><span class="text-aurum-muted text-sm">s PDV-om</span></div></div><div class="flex items-center gap-2"><span class="w-2 h-2 bg-green-400 rounded-full"></span><span class="text-sm text-aurum-text">Na zalihi — <!> komada</span><span class="text-aurum-muted text-xs ml-auto">Dostava: 3–5 radnih dana</span></div><p class="text-aurum-muted text-sm leading-relaxed"></p><div><h3 class="text-xs text-aurum-muted uppercase tracking-widest mb-2">Količina</h3><div class="flex items-center gap-3"><button class="w-9 h-9 border border-aurum-border rounded text-aurum-text hover:border-aurum-gold transition-colors text-lg">−</button><span class="w-12 text-center font-bold text-aurum-text text-lg"></span><button class="w-9 h-9 border border-aurum-border rounded text-aurum-text hover:border-aurum-gold transition-colors text-lg">+</button><span class="text-aurum-muted text-xs">Maks. 5 po kupcu</span></div></div><div class="flex gap-3"><button></button><button>Kupi odmah</button><button><svg class="w-5 h-5"viewBox="0 0 24 24"stroke=currentColor><path stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></button></div><div class="grid grid-cols-2 gap-3">'),IT=N('<div class="min-h-screen bg-aurum-black flex items-center justify-center"><div class=text-center><p class="text-aurum-muted mb-4">Proizvod nije pronađen'),AT=N('<div class="absolute top-3 left-3"><span class=badge-exclusive>'),ST=N('<button><img alt class="w-full h-full object-cover">'),kT=N('<div class="card-dark p-3"><p class="text-aurum-muted text-xs"></p><p class="text-aurum-text text-xs font-medium mt-0.5">'),CT=N('<span class="badge-exclusive mb-3 inline-block">'),RT=N('<span class="text-aurum-muted line-through">$'),PT=N('<div class="flex items-start gap-2 text-xs text-aurum-muted"><span></span><span>');function $T(){const n=qh(),e=dn(),[t,r]=H([]),[s,i]=H(!1),[a,l]=H(5),[u,h]=H(""),[f,m]=H(!1),[x,E]=H(!1),[$,R]=H(""),[C,V]=H(1),[S,M]=H(0),[U,Y]=H(!1);Hs(async()=>{Ht().length===0&&await Fn(),cn()&&await Pp();const w=await WE(n.id);r(w)});const D=ke(()=>{const w=Ht().find(I=>I.id===n.id||I.id===+n.id);return w&&i(mo().includes(w.id)),w}),b=ke(()=>D()?.membersOnly===!0),_=ke(()=>!b()||cn());ke(()=>Ht().filter(w=>w.id!==n.id&&w.category===D()?.category).slice(0,4));async function v(){if(!cn()){e("/login");return}const w=await $p(D().id);i(w)}function T(){if(D()){if(!_()){e("/login");return}Sp({...D(),selectedSize:$()},C()),Y(!0),setTimeout(()=>Y(!1),2e3)}}return P(te,{get when(){return D()},get fallback(){return(()=>{var w=IT(),I=w.firstChild;return I.firstChild,y(I,P(Ee,{href:"/catalog",class:"btn-gold px-6 py-2 rounded",children:"Nazad na katalog"}),null),w})()},get children(){var w=TT(),I=w.firstChild,p=I.firstChild,B=p.firstChild,Z=B.nextSibling,Te=Z.nextSibling,Re=I.nextSibling,Oe=Re.firstChild,je=Oe.firstChild,$e=je.firstChild,Ye=$e.firstChild,St=$e.nextSibling,He=St.nextSibling,mt=je.nextSibling,gt=mt.firstChild,it=gt.firstChild,ot=it.nextSibling,we=ot.firstChild;we.firstChild;var Ze=we.nextSibling,bt=gt.nextSibling,Nt=bt.firstChild,kt=Nt.nextSibling,Ct=kt.firstChild,se=Ct.nextSibling;se.nextSibling;var G=bt.nextSibling,F=G.nextSibling,z=F.firstChild,ee=z.nextSibling,J=ee.firstChild,W=J.nextSibling,ce=W.nextSibling,ie=F.nextSibling,ve=ie.firstChild,fe=ve.nextSibling,_e=fe.nextSibling,be=_e.firstChild,Pe=ie.nextSibling;return y(w,P(Bo,{}),I),y(p,P(Ee,{href:"/catalog",class:"hover:text-aurum-gold",children:"AurumVault"}),B),y(p,P(Ee,{href:"/catalog",class:"hover:text-aurum-gold",children:"Katalog"}),Z),y(Te,()=>D()?.category),y($e,(()=>{var ne=rt(()=>!!D()?.badge);return()=>ne()&&(()=>{var he=AT(),de=he.firstChild;return y(de,()=>D()?.badge),he})()})(),null),y($e,P(te,{get when(){return Fo()},get children(){return P(Ee,{get href(){return`/admin/products/edit/${D()?.id}`},class:"absolute top-3 right-3 bg-aurum-gold text-aurum-black text-xs font-bold px-3 py-1 rounded",children:"Uredi"})}}),null),y(St,P(Rt,{get each(){return D()?.images},children:(ne,he)=>(()=>{var de=ST(),Ie=de.firstChild;return de.$$click=()=>M(he()),ft(Ie,"src",ne),q(()=>Ae(de,`w-16 h-16 rounded overflow-hidden border-2 transition-colors ${S()===he()?"border-aurum-gold":"border-aurum-border"}`)),de})()})),y(He,()=>[{label:"Šifra",value:D()?.sku||"—"},{label:"Materijali",value:"18k Pozlata na srebru"},{label:"Dostava",value:"Iz Zagreba"}].map(ne=>(()=>{var he=kT(),de=he.firstChild,Ie=de.nextSibling;return y(de,()=>ne.label),y(Ie,()=>ne.value),he})())),y(gt,(()=>{var ne=rt(()=>!!D()?.badge);return()=>ne()&&(()=>{var he=CT();return y(he,()=>D()?.badge),he})()})(),it),y(it,()=>D()?.name),y(we,()=>(D()?.salePrice||D()?.price)?.toLocaleString(),null),y(ot,(()=>{var ne=rt(()=>!!D()?.salePrice);return()=>ne()&&(()=>{var he=RT();return he.firstChild,y(he,()=>D()?.price?.toLocaleString(),null),he})()})(),Ze),y(kt,()=>D()?.stock,se),y(G,()=>D()?.description),J.$$click=()=>V(ne=>Math.max(1,ne-1)),y(W,C),ce.$$click=()=>V(ne=>Math.min(D()?.stock||10,ne+1)),ve.$$click=T,y(ve,(()=>{var ne=rt(()=>!_());return()=>ne()?"👑 Prijava potrebna":U()?"✓ Dodano u košaricu":"Dodaj u košaricu"})()),fe.$$click=()=>{if(!_()){e("/login");return}T(),e("/checkout")},_e.$$click=v,y(Pe,()=>[{icon:"🚚",text:"Besplatna dostava za narudžbe iznad 100$"},{icon:"↩",text:"Povrat do 30 dana. Bez komplikacija."},{icon:"🔒",text:"Sigurna kupovina"},{icon:"✋",text:"Ručno provjerena kvaliteta"}].map(ne=>(()=>{var he=PT(),de=he.firstChild,Ie=de.nextSibling;return y(de,()=>ne.icon),y(Ie,()=>ne.text),he})())),y(w,P(ec,{}),null),q(ne=>{var he=D()?.images?.[S()],de=D()?.name,Ie=!_(),at=`flex-1 py-3 rounded-lg font-bold text-sm transition-all ${_()?U()?"bg-green-600 text-white":"btn-gold":"bg-gray-700 text-gray-400 cursor-not-allowed"}`,Be=!_(),ze=`flex-1 py-3 rounded-lg font-bold text-sm border border-aurum-gold text-aurum-gold hover:bg-aurum-gold hover:text-aurum-black transition-all ${_()?"":"cursor-not-allowed opacity-50"}`,lt=`p-3 rounded-lg border transition-all ${s()?"border-red-400 text-red-400 bg-red-900/20":"border-aurum-border text-aurum-muted hover:border-red-400 hover:text-red-400"}`,ct=s()?"currentColor":"none";return he!==ne.e&&ft(Ye,"src",ne.e=he),de!==ne.t&&ft(Ye,"alt",ne.t=de),Ie!==ne.a&&(ve.disabled=ne.a=Ie),at!==ne.o&&Ae(ve,ne.o=at),Be!==ne.i&&(fe.disabled=ne.i=Be),ze!==ne.n&&Ae(fe,ne.n=ze),lt!==ne.s&&Ae(_e,ne.s=lt),ct!==ne.h&&ft(be,"fill",ne.h=ct),ne},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0}),w}})}Xt(["click"]);var VT=N('<div class="w-8 h-8 bg-aurum-gold rounded-full flex items-center justify-center"><span class="text-aurum-black font-display font-black text-sm">A'),NT=N('<span class="font-display font-bold text-aurum-gold tracking-widest gold-glow">AurumVault'),DT=N('<div class="text-center mb-6"><h1 class="font-display text-xl font-bold text-white">Dobrodošli nazad</h1><p class="text-aurum-muted text-sm mt-1">Prijavite se u vaš AurumVault račun'),OT=N('<div class="text-center mb-6"><h1 class="font-display text-xl font-bold text-white">Kreirajte račun</h1><p class="text-aurum-muted text-sm mt-1">Pridružite se AurumVault zajednici'),LT=N('<div class="text-center mb-6"><h1 class="font-display text-xl font-bold text-white">Oporavak lozinke</h1><p class="text-aurum-muted text-sm mt-1">Unesite email za slanje uputa'),MT=N('<div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Ime i prezime</label><input type=text placeholder="Vaše ime"class="input-dark w-full px-4 py-3 text-sm">'),UT=N('<div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Lozinka</label><input type=password placeholder=•••••••• class="input-dark w-full px-4 py-3 text-sm">'),FT=N('<p class="text-red-400 text-xs flex items-center gap-1">⚠ '),jT=N('<p class="text-green-400 text-xs flex items-center gap-1">✓ '),BT=N('<div class="text-center mt-4"><button class="text-xs text-aurum-muted hover:text-aurum-gold transition-colors underline">Zaboravili ste lozinku?'),zT=N('<div class="text-center mt-4"><button class="text-xs text-aurum-muted hover:text-aurum-gold">← Nazad na prijavu'),qT=N('<div class="mt-6 pt-4 border-t border-aurum-border"><p class="text-xs text-aurum-muted text-center mb-3">Prednosti registracije:</p><div class=space-y-2>'),WT=N('<div class="min-h-screen bg-aurum-black flex flex-col"><div class="border-b border-aurum-border px-6 py-4 flex items-center justify-between"></div><div class="flex-1 flex items-center justify-center px-4 py-12"><div class="w-full max-w-md page-enter"><div class="gold-border-anim bg-aurum-card rounded-2xl p-8"><div class="flex mb-8 border-b border-aurum-border"><button>PRIJAVA</button><button>REGISTRACIJA</button></div><form class=space-y-4><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Email</label><input type=email placeholder=vas@email.com class="input-dark w-full px-4 py-3 text-sm"></div><button type=submit class="btn-gold w-full py-3 rounded-lg text-sm mt-2">'),KT=N('<div class="flex items-center gap-2 text-xs text-aurum-muted"><span class=text-aurum-gold>✓</span> ');function HT(){const n=dn(),[e,t]=H("login"),[r,s]=H(""),[i,a]=H(""),[l,u]=H(""),[h,f]=H(""),[m,x]=H(""),[E,$]=H(!1);async function R(C){C.preventDefault(),f(""),x(""),$(!0);try{if(e()==="login")await NE(r(),i()),n("/catalog");else if(e()==="register"){if(!l()){f("Unesite ime i prezime."),$(!1);return}await VE(l(),r(),i()),n("/catalog")}else e()==="forgot"&&(await DE(r()),x(`Upute za oporavak lozinke poslane su na ${r()}`))}catch(V){f({"auth/invalid-email":"Nevažeća email adresa.","auth/user-not-found":"Korisnik s tim emailom ne postoji.","auth/wrong-password":"Pogrešna lozinka.","auth/email-already-in-use":"Email je već registriran.","auth/weak-password":"Lozinka mora imati najmanje 6 znakova.","auth/too-many-requests":"Previše pokušaja. Pokušajte kasnije.","auth/invalid-credential":"Pogrešan email ili lozinka."}[V.code]||V.message)}$(!1)}return(()=>{var C=WT(),V=C.firstChild,S=V.nextSibling,M=S.firstChild,U=M.firstChild,Y=U.firstChild,D=Y.firstChild,b=D.nextSibling,_=Y.nextSibling,v=_.firstChild,T=v.firstChild,w=T.nextSibling,I=v.nextSibling;return y(V,P(Ee,{href:"/catalog",class:"flex items-center gap-2",get children(){return[VT(),NT()]}}),null),y(V,P(Ee,{href:"/catalog",class:"text-aurum-muted text-xs hover:text-aurum-gold transition-colors",children:"← Nazad na katalog"}),null),D.$$click=()=>{t("login"),f(""),x("")},b.$$click=()=>{t("register"),f(""),x("")},y(U,P(te,{get when(){return e()==="login"},get children(){return DT()}}),_),y(U,P(te,{get when(){return e()==="register"},get children(){return OT()}}),_),y(U,P(te,{get when(){return e()==="forgot"},get children(){return LT()}}),_),_.addEventListener("submit",R),y(_,P(te,{get when(){return e()==="register"},get children(){var p=MT(),B=p.firstChild,Z=B.nextSibling;return Z.$$input=Te=>u(Te.target.value),q(()=>Z.value=l()),p}}),v),w.$$input=p=>s(p.target.value),y(_,P(te,{get when(){return e()!=="forgot"},get children(){var p=UT(),B=p.firstChild,Z=B.nextSibling;return Z.$$input=Te=>a(Te.target.value),q(()=>Z.value=i()),p}}),I),y(_,P(te,{get when(){return h()},get children(){var p=FT();return p.firstChild,y(p,h,null),p}}),I),y(_,P(te,{get when(){return m()},get children(){var p=jT();return p.firstChild,y(p,m,null),p}}),I),y(I,(()=>{var p=rt(()=>!!E());return()=>p()?"Učitavanje...":rt(()=>e()==="login")()?"Prijava":e()==="register"?"Registracija":"Pošalji upute"})()),y(U,P(te,{get when(){return e()==="login"},get children(){var p=BT(),B=p.firstChild;return B.$$click=()=>{t("forgot"),f(""),x("")},p}}),null),y(U,P(te,{get when(){return e()==="forgot"},get children(){var p=zT(),B=p.firstChild;return B.$$click=()=>t("login"),p}}),null),y(U,P(te,{get when(){return e()==="register"},get children(){var p=qT(),B=p.firstChild,Z=B.nextSibling;return y(Z,()=>["Spremi adresu i podatke o plaćanju","Pristup kuponima za popust","Ekskluzivne ponude i rani pristup","Povijest narudžbi"].map(Te=>(()=>{var Re=KT(),Oe=Re.firstChild;return Oe.nextSibling,y(Re,Te,null),Re})())),p}}),null),q(p=>{var B=`flex-1 pb-3 text-sm font-display tracking-wider transition-colors ${e()==="login"?"text-aurum-gold border-b-2 border-aurum-gold":"text-aurum-muted hover:text-aurum-text"}`,Z=`flex-1 pb-3 text-sm font-display tracking-wider transition-colors ${e()==="register"?"text-aurum-gold border-b-2 border-aurum-gold":"text-aurum-muted hover:text-aurum-text"}`,Te=E();return B!==p.e&&Ae(D,p.e=B),Z!==p.t&&Ae(b,p.t=Z),Te!==p.a&&(I.disabled=p.a=Te),p},{e:void 0,t:void 0,a:void 0}),q(()=>w.value=r()),C})()}Xt(["click","input"]);var GT=N('<div class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center px-4"><div class="bg-aurum-card border border-aurum-gold rounded-2xl p-8 max-w-md w-full text-center"style="box-shadow:0 0 60px rgba(240,192,64,0.4);animation:fadeIn 0.3s ease"><div class="w-20 h-20 bg-aurum-gold rounded-full flex items-center justify-center mx-auto mb-5"style="box-shadow:0 0 30px rgba(240,192,64,0.6)"><span class="text-4xl text-aurum-black font-bold">✓</span></div><h2 class="font-display text-2xl font-bold text-aurum-gold mb-1">Narudžba je na putu!</h2><p class="text-aurum-muted text-sm mb-6">Uspješno smo zaprimili vašu narudžbu. Uskoro ćete primiti potvrdu.</p><div class="bg-aurum-dark rounded-xl p-4 text-left mb-6 space-y-2 border border-aurum-border"><div class="flex justify-between text-sm"><span class=text-aurum-muted>Broj narudžbe</span><span class="text-aurum-gold font-bold font-mono tracking-wider">#</span></div><div class="flex justify-between text-sm"><span class=text-aurum-muted>Status</span><span class="text-yellow-400 bg-yellow-900/30 px-2 py-0.5 rounded-full text-xs">🚚 U obradi</span></div><div class="flex justify-between text-sm"><span class=text-aurum-muted>Ime</span><span class=text-aurum-text></span></div><div class="flex justify-between text-sm"><span class=text-aurum-muted>Grad</span><span class=text-aurum-text></span></div><div class="flex justify-between text-sm pt-2 border-t border-aurum-border"><span class="text-aurum-text font-bold">Ukupno plaćeno</span><span class="text-aurum-gold font-bold text-base">$</span></div></div><div class="flex flex-col gap-3">'),QT=N('<div class="text-center py-8 text-aurum-muted"><p>Košarica je prazna'),JT=N('<div class="card-dark p-6"><h2 class="font-display text-lg font-bold text-aurum-gold mb-4">Vaša košarica'),XT=N('<p class="text-red-400 text-xs mt-2">⚠ '),YT=N('<p class="text-green-400 text-xs mt-2">✓ Kupon AURUM10 primijenjen — 10% popusta'),ZT=N('<p class="text-aurum-muted text-xs mt-2">Kuponi su dostupni samo prijavljenim korisnicima. '),eI=N('<div class="card-dark p-6"><div class="flex items-center gap-3"><input type=text placeholder="Promo kod"><button class="btn-gold px-4 py-2 text-sm rounded">Primijeni'),tI=N('<button class="btn-gold w-full py-3 rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed">Nastavi na dostavu →'),nI=N('<div class="card-dark p-6"><h2 class="font-display text-lg font-bold text-aurum-gold mb-4">Podaci za dostavu</h2><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Ime i prezime</label><input type=text class="input-dark w-full px-4 py-2.5 text-sm"placeholder="Ivan Horvat"></div><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Telefon</label><input type=tel class="input-dark w-full px-4 py-2.5 text-sm"placeholder="+385 91 234 5678"></div><div class=sm:col-span-2><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Adresa</label><input type=text class="input-dark w-full px-4 py-2.5 text-sm"placeholder="Ulica i broj"></div><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Grad</label><input type=text class="input-dark w-full px-4 py-2.5 text-sm"placeholder=Zagreb></div><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Poštanski broj</label><input type=text class="input-dark w-full px-4 py-2.5 text-sm"placeholder=10000></div></div><div class=mt-6><h3 class="text-xs text-aurum-muted uppercase tracking-widest mb-3">Metoda dostave</h3><div class=space-y-2>'),rI=N('<div class="flex gap-3"><button class="flex-1 py-3 border border-aurum-border text-aurum-muted rounded-lg text-sm hover:border-aurum-gold transition-colors">← Nazad</button><button class="flex-1 btn-gold py-3 rounded-lg text-sm">Nastavi na plaćanje →'),sI=N('<div class="card-dark p-6"><h2 class="font-display text-lg font-bold text-aurum-gold mb-4">Način plaćanja</h2><div class="space-y-3 mb-6"></div><div class="border-t border-aurum-border pt-4"><h3 class="text-xs text-aurum-muted uppercase tracking-widest mb-3">Dodaj novu karticu</h3><div class="grid grid-cols-1 gap-3"><input placeholder="Ime na kartici"class="input-dark px-4 py-2.5 text-sm"><input placeholder="Broj kartice"class="input-dark px-4 py-2.5 text-sm"><div class="grid grid-cols-2 gap-3"><input placeholder="MM / YY"class="input-dark px-4 py-2.5 text-sm"><input placeholder=CVC class="input-dark px-4 py-2.5 text-sm"></div></div></div><p class="text-center text-aurum-muted text-xs mt-4">🔒 PCI-SSL zaštita. Vaši podaci su sigurni.'),iI=N('<div class="flex gap-3"><button class="flex-1 py-3 border border-aurum-border text-aurum-muted rounded-lg text-sm hover:border-aurum-gold transition-colors">← Nazad</button><button class="flex-1 btn-gold py-3 rounded-lg text-sm">Pregled narudžbe →'),oI=N('<div class="card-dark p-6"><h2 class="font-display text-lg font-bold text-aurum-gold mb-4">Potvrda narudžbe</h2><div class=space-y-3><div class="flex justify-between text-sm"><span class=text-aurum-muted>Ime:</span><span class=text-aurum-text></span></div><div class="flex justify-between text-sm"><span class=text-aurum-muted>Adresa:</span><span class="text-aurum-text text-right">, </span></div><div class="flex justify-between text-sm"><span class=text-aurum-muted>Dostava:</span><span class=text-aurum-text></span></div><div class="flex justify-between text-sm"><span class=text-aurum-muted>Plaćanje:</span><span class="text-aurum-text capitalize"></span></div><div class="flex justify-between text-sm pt-3 border-t border-aurum-border"><span class="text-aurum-muted font-bold">Ukupno:</span><span class="text-aurum-gold font-bold">$'),aI=N('<div class="bg-red-900/30 border border-red-500 rounded-lg p-3 text-red-400 text-xs">⚠ '),lI=N('<div class="flex gap-3"><button class="flex-1 py-3 border border-aurum-border text-aurum-muted rounded-lg text-sm hover:border-aurum-gold transition-colors">← Nazad</button><button class="flex-1 btn-gold py-3 rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed">'),cI=N('<div class="flex justify-between text-green-400"><span>Popust (10%)</span><span>−$'),uI=N('<div class="min-h-screen bg-aurum-black"><div class="max-w-6xl mx-auto px-4 py-8 page-enter"><div class="flex items-center justify-center mb-10"></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-8"><div class="lg:col-span-2 space-y-6"></div><div class=lg:col-span-1><div class="card-dark p-6 sticky top-24"><h3 class="font-display text-sm font-bold text-aurum-gold uppercase tracking-widest mb-4">Sažetak narudžbe</h3><div class="text-xs text-aurum-muted mb-2"> </div><div class="border-t border-aurum-border mt-4 pt-4 space-y-2 text-sm"><div class="flex justify-between text-aurum-muted"><span>Subtotal</span><span>$</span></div><div class="flex justify-between text-aurum-muted"><span>Dostava</span><span></span></div><div class="flex justify-between text-aurum-muted"><span>PDV</span><span>$</span></div><div class="flex justify-between text-aurum-gold font-bold text-base pt-2 border-t border-aurum-border"><span>Ukupno</span><span>$'),hI=N('<div class="flex items-center"><div class="flex flex-col items-center"><div></div><span>'),dI=N("<div>"),fI=N('<div class="flex items-center gap-4 py-4 border-b border-aurum-border last:border-0"><img class="w-16 h-16 rounded object-cover bg-aurum-dark"><div class=flex-1><p class="text-aurum-text text-sm font-medium"></p><p class="text-aurum-muted text-xs"></p></div><div class="flex items-center gap-2"><button class="w-6 h-6 border border-aurum-border rounded text-xs hover:border-aurum-gold text-aurum-text">−</button><span class="text-sm text-aurum-text w-6 text-center"></span><button class="w-6 h-6 border border-aurum-border rounded text-xs hover:border-aurum-gold text-aurum-text">+</button></div><span class="text-aurum-gold font-bold text-sm w-20 text-right">$</span><button class="text-aurum-muted hover:text-red-400 text-lg">×'),pI=N('<label><input type=radio name=shipping class="radio radio-warning radio-sm"><div class=flex-1><p class="text-sm text-aurum-text"></p></div><span class="text-aurum-gold text-sm font-bold">'),mI=N('<label><input type=radio name=payment class="radio radio-warning radio-sm"><div class="w-10 h-6 bg-aurum-muted rounded flex items-center justify-center text-xs text-white"></div><div class=flex-1><p class="text-sm text-aurum-text"></p><p class="text-xs text-aurum-muted">'),gI=N('<div class="flex items-center gap-2 mb-2 text-xs"><img alt class="w-8 h-8 rounded object-cover"><span class="flex-1 text-aurum-text truncate"></span><span class=text-aurum-gold>$'),_I=N("<span class=text-green-400>Besplatno");function xh(){dn();const[n,e]=H(1),[t,r]=H(""),[s,i]=H(!1),[a,l]=H(""),[u,h]=H(null),[f,m]=H("visa"),[x,E]=H(!1),[$,R]=H(""),[C,V]=H(!1),[S,M]=H({fullName:dt()?.name||"",phone:"",address:"",city:"",state:"",postal:"",country:"Croatia",shipping:"standard"}),U=ke(()=>!s()||!u()?0:u().type==="percent"?dr()*(u().discount/100):u().discount),Y=ke(()=>S().shipping==="express"?12:dr()>100?0:12),D=ke(()=>(dr()-U())*.075),b=ke(()=>dr()-U()+Y()+D());async function _(){l("");try{const p=await qE(t());console.log("couponData:",p),h(p),i(!0)}catch(p){l(p.message)}}const[v,T]=H("");async function w(){if(qt().length===0){T("Košarica je prazna — ne možeš naručiti.");return}if(!S().fullName||!S().address||!S().city){T("Molimo popuni sve podatke za dostavu.");return}V(!0),T("");try{const p={items:qt().map(Z=>({id:Z.id,name:Z.name,price:Z.price,quantity:Z.quantity,sku:Z.sku||"",image:Z.images?.[0]||""})),total:b(),subtotal:dr(),discount:U(),shipping:Y(),tax:D(),status:"U obradi",paymentMethod:f(),coupon:s()?t():null,shippingAddress:{fullName:S().fullName,phone:S().phone,address:S().address,city:S().city,postal:S().postal,country:S().country}};console.log("Šaljem narudžbu:",p);const B=await zE(p);R(B),jE(),E(!0)}catch(p){T("Greška pri narudžbi: "+p.message),console.error("createOrder greška:",p)}V(!1)}const I=["Košarica","Dostava","Plaćanje","Potvrda"];return(()=>{var p=uI(),B=p.firstChild,Z=B.firstChild,Te=Z.nextSibling,Re=Te.firstChild,Oe=Re.nextSibling,je=Oe.firstChild,$e=je.firstChild,Ye=$e.nextSibling,St=Ye.firstChild,He=Ye.nextSibling,mt=He.firstChild,gt=mt.firstChild,it=gt.nextSibling;it.firstChild;var ot=mt.nextSibling,we=ot.firstChild,Ze=we.nextSibling,bt=ot.nextSibling,Nt=bt.firstChild,kt=Nt.nextSibling;kt.firstChild;var Ct=bt.nextSibling,se=Ct.firstChild,G=se.nextSibling;return G.firstChild,y(p,P(Bo,{}),B),y(p,P(te,{get when(){return x()},get children(){var F=GT(),z=F.firstChild,ee=z.firstChild,J=ee.nextSibling,W=J.nextSibling,ce=W.nextSibling,ie=ce.firstChild,ve=ie.firstChild,fe=ve.nextSibling;fe.firstChild;var _e=ie.nextSibling,be=_e.nextSibling,Pe=be.firstChild,ne=Pe.nextSibling,he=be.nextSibling,de=he.firstChild,Ie=de.nextSibling,at=he.nextSibling,Be=at.firstChild,ze=Be.nextSibling;ze.firstChild;var lt=ce.nextSibling;return y(fe,()=>$().slice(0,8).toUpperCase(),null),y(ne,()=>S().fullName),y(Ie,()=>S().city),y(ze,()=>b().toFixed(2),null),y(lt,P(Ee,{href:"/profile",class:"w-full btn-gold py-3 rounded-lg text-sm font-bold",children:"📦 Pogledaj narudžbu"}),null),y(lt,P(Ee,{href:"/catalog",class:"w-full border border-aurum-border text-aurum-muted py-3 rounded-lg text-sm hover:border-aurum-gold hover:text-aurum-gold transition-all",children:"← Natrag na katalog"}),null),F}}),B),y(Z,P(Rt,{each:I,children:(F,z)=>(()=>{var ee=hI(),J=ee.firstChild,W=J.firstChild,ce=W.nextSibling;return y(W,(()=>{var ie=rt(()=>n()>z()+1);return()=>ie()?"✓":z()+1})()),y(ce,F),y(ee,(()=>{var ie=rt(()=>z()<I.length-1);return()=>ie()&&(()=>{var ve=dI();return q(()=>Ae(ve,`w-16 sm:w-24 h-px mx-2 mb-4 transition-all ${n()>z()+1?"bg-aurum-gold":"bg-aurum-border"}`)),ve})()})(),null),q(ie=>{var ve=`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${n()>z()+1?"bg-green-600 text-white":n()===z()+1?"bg-aurum-gold text-aurum-black":"bg-aurum-dark border border-aurum-border text-aurum-muted"}`,fe=`text-xs mt-1 ${n()===z()+1?"text-aurum-gold":"text-aurum-muted"}`;return ve!==ie.e&&Ae(W,ie.e=ve),fe!==ie.t&&Ae(ce,ie.t=fe),ie},{e:void 0,t:void 0}),ee})()})),y(Re,P(te,{get when(){return n()===1},get children(){return[(()=>{var F=JT();return F.firstChild,y(F,P(te,{get when(){return qt().length===0},get children(){var z=QT();return z.firstChild,y(z,P(Ee,{href:"/catalog",class:"text-aurum-gold text-sm hover:underline mt-2 inline-block",children:"Idi na katalog"}),null),z}}),null),y(F,P(Rt,{get each(){return qt()},children:z=>(()=>{var ee=fI(),J=ee.firstChild,W=J.nextSibling,ce=W.firstChild,ie=ce.nextSibling,ve=W.nextSibling,fe=ve.firstChild,_e=fe.nextSibling,be=_e.nextSibling,Pe=ve.nextSibling;Pe.firstChild;var ne=Pe.nextSibling;return y(ce,()=>z.name),y(ie,()=>z.sku),fe.$$click=()=>vh(z.id,z.quantity-1),y(_e,()=>z.quantity),be.$$click=()=>vh(z.id,z.quantity+1),y(Pe,()=>(z.price*z.quantity).toLocaleString(),null),ne.$$click=()=>kp(z.id),q(he=>{var de=z.images?.[0],Ie=z.name;return de!==he.e&&ft(J,"src",he.e=de),Ie!==he.t&&ft(J,"alt",he.t=Ie),he},{e:void 0,t:void 0}),ee})()}),null),F})(),(()=>{var F=eI(),z=F.firstChild,ee=z.firstChild,J=ee.nextSibling;return ee.$$input=W=>r(W.target.value),J.$$click=_,y(F,P(te,{get when(){return a()},get children(){var W=XT();return W.firstChild,y(W,a,null),W}}),null),y(F,P(te,{get when(){return s()},get children(){return YT()}}),null),y(F,P(te,{get when(){return!cn()},get children(){var W=ZT();return W.firstChild,y(W,P(Ee,{href:"/login",class:"text-aurum-gold hover:underline",children:"Prijavi se"}),null),W}}),null),q(W=>{var ce=`input-dark flex-1 px-4 py-2 text-sm ${cn()?"":"opacity-50 cursor-not-allowed"}`,ie=!cn();return ce!==W.e&&Ae(ee,W.e=ce),ie!==W.t&&(ee.disabled=W.t=ie),W},{e:void 0,t:void 0}),q(()=>ee.value=t()),F})(),(()=>{var F=tI();return F.$$click=()=>e(2),q(()=>F.disabled=qt().length===0),F})()]}}),null),y(Re,P(te,{get when(){return n()===2},get children(){return[(()=>{var F=nI(),z=F.firstChild,ee=z.nextSibling,J=ee.firstChild,W=J.firstChild,ce=W.nextSibling,ie=J.nextSibling,ve=ie.firstChild,fe=ve.nextSibling,_e=ie.nextSibling,be=_e.firstChild,Pe=be.nextSibling,ne=_e.nextSibling,he=ne.firstChild,de=he.nextSibling,Ie=ne.nextSibling,at=Ie.firstChild,Be=at.nextSibling,ze=ee.nextSibling,lt=ze.firstChild,ct=lt.nextSibling;return ce.$$input=Le=>M({...S(),fullName:Le.target.value}),fe.$$input=Le=>M({...S(),phone:Le.target.value}),Pe.$$input=Le=>M({...S(),address:Le.target.value}),de.$$input=Le=>M({...S(),city:Le.target.value}),Be.$$input=Le=>M({...S(),postal:Le.target.value}),y(ct,()=>[{value:"standard",label:"Standard — 3–5 radnih dana",price:dr()>100?"Besplatno":"$12.00"},{value:"express",label:"Express — 1–2 radna dana",price:"$12.00 extra"}].map(Le=>(()=>{var wt=pI(),Pt=wt.firstChild,Mt=Pt.nextSibling,ir=Mt.firstChild,Ge=Mt.nextSibling;return Pt.addEventListener("change",()=>M({...S(),shipping:Le.value})),y(ir,()=>Le.label),y(Ge,()=>Le.price),q(()=>Ae(wt,`flex items-center gap-3 p-3 rounded border cursor-pointer transition-colors ${S().shipping===Le.value?"border-aurum-gold bg-aurum-dark":"border-aurum-border hover:border-aurum-muted"}`)),q(()=>Pt.value=Le.value),q(()=>Pt.checked=S().shipping===Le.value),wt})())),q(()=>ce.value=S().fullName),q(()=>fe.value=S().phone),q(()=>Pe.value=S().address),q(()=>de.value=S().city),q(()=>Be.value=S().postal),F})(),(()=>{var F=rI(),z=F.firstChild,ee=z.nextSibling;return z.$$click=()=>e(1),ee.$$click=()=>e(3),F})()]}}),null),y(Re,P(te,{get when(){return n()===3},get children(){return[(()=>{var F=sI(),z=F.firstChild,ee=z.nextSibling;return y(ee,()=>[{value:"visa",label:"Visa završava 4242",sub:"Nikad ne ističe"},{value:"mc",label:"Mastercard završava 8828",sub:"Expires 12/2026"},{value:"amex",label:"American Express završava 3358",sub:"Expires 09/2025"}].map(J=>(()=>{var W=mI(),ce=W.firstChild,ie=ce.nextSibling,ve=ie.nextSibling,fe=ve.firstChild,_e=fe.nextSibling;return ce.addEventListener("change",()=>m(J.value)),y(ie,(()=>{var be=rt(()=>J.value==="visa");return()=>be()?"Visa":J.value==="mc"?"MC":"Amex"})()),y(fe,()=>J.label),y(_e,()=>J.sub),q(()=>Ae(W,`flex items-center gap-3 p-4 rounded border cursor-pointer transition-colors ${f()===J.value?"border-aurum-gold bg-aurum-dark":"border-aurum-border hover:border-aurum-muted"}`)),q(()=>ce.checked=f()===J.value),W})())),F})(),(()=>{var F=iI(),z=F.firstChild,ee=z.nextSibling;return z.$$click=()=>e(2),ee.$$click=()=>e(4),F})()]}}),null),y(Re,P(te,{get when(){return n()===4},get children(){return[(()=>{var F=oI(),z=F.firstChild,ee=z.nextSibling,J=ee.firstChild,W=J.firstChild,ce=W.nextSibling,ie=J.nextSibling,ve=ie.firstChild,fe=ve.nextSibling,_e=fe.firstChild,be=ie.nextSibling,Pe=be.firstChild,ne=Pe.nextSibling,he=be.nextSibling,de=he.firstChild,Ie=de.nextSibling,at=he.nextSibling,Be=at.firstChild,ze=Be.nextSibling;return ze.firstChild,y(ce,()=>S().fullName),y(fe,()=>S().address,_e),y(fe,()=>S().city,null),y(ne,()=>S().shipping==="express"?"Express":"Standard"),y(Ie,f),y(ze,()=>b().toFixed(2),null),F})(),P(te,{get when(){return v()},get children(){var F=aI();return F.firstChild,y(F,v,null),F}}),(()=>{var F=lI(),z=F.firstChild,ee=z.nextSibling;return z.$$click=()=>e(3),ee.$$click=w,y(ee,()=>C()?"⏳ Obrađujem...":"✓ Potvrdi narudžbu"),q(()=>ee.disabled=C()||qt().length===0),F})()]}}),null),y(Ye,()=>qt().length,St),y(Ye,()=>qt().length===1?"artikl":"artikala",null),y(je,P(Rt,{get each(){return qt()},children:F=>(()=>{var z=gI(),ee=z.firstChild,J=ee.nextSibling,W=J.nextSibling;return W.firstChild,y(J,()=>F.name),y(W,()=>(F.price*F.quantity).toLocaleString(),null),q(()=>ft(ee,"src",F.images?.[0])),z})()}),He),y(it,()=>dr().toLocaleString(),null),y(He,P(te,{get when(){return s()},get children(){var F=cI(),z=F.firstChild,ee=z.nextSibling;return ee.firstChild,y(ee,()=>U().toFixed(2),null),F}}),ot),y(Ze,(()=>{var F=rt(()=>Y()===0);return()=>F()?_I():`$${Y().toFixed(2)}`})()),y(kt,()=>D().toFixed(2),null),y(G,()=>b().toFixed(2),null),p})()}Xt(["input","click"]);var yI=N('<button type=submit class="btn-gold w-full py-2.5 rounded-lg text-sm">Spremi promjene'),vI=N('<p class="text-green-400 text-xs text-center">✓ Promjene su spremljene'),bI=N('<div class="card-dark p-6 max-w-lg"><div class="flex items-center justify-between mb-6"><h2 class="section-title text-base">Osobni podaci</h2><button class="text-xs text-aurum-gold border border-aurum-gold px-3 py-1.5 rounded hover:bg-aurum-gold hover:text-aurum-black transition-all"></button></div><form class=space-y-4>'),wI=N('<p class="text-aurum-muted text-sm">Nemaš još narudžbi.'),xI=N('<div class=space-y-4><h2 class="section-title text-base mb-4">Povijest narudžbi'),EI=N('<div class="card-dark p-10 text-center"><p class="text-aurum-muted mb-3">Lista želja je prazna.'),TI=N('<div><h2 class="section-title text-base mb-4">♥ Lista želja</h2><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">'),II=N('<div class="card-dark p-6 max-w-lg"><h2 class="section-title text-base mb-4">Adrese dostave</h2><div class="border border-aurum-gold rounded-lg p-4 mb-4"><div class="flex items-center justify-between mb-2"><span class="text-xs badge-exclusive">Zadana</span></div><p class="text-aurum-text text-sm"></p><p class="text-aurum-muted text-sm">Ilica 1, Zagreb, 10000, Croatia</p></div><button class="text-aurum-gold text-xs border border-aurum-border px-4 py-2 rounded hover:border-aurum-gold transition-colors">+ Dodaj novu adresu'),AI=N('<div class="card-dark p-6 max-w-lg"><h2 class="section-title text-base mb-6">Sigurnost</h2><div class=space-y-4><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Trenutna lozinka</label><input type=password class="input-dark w-full px-4 py-2.5 text-sm"placeholder=••••••••></div><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Nova lozinka</label><input type=password class="input-dark w-full px-4 py-2.5 text-sm"placeholder=••••••••></div><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Potvrdi novu lozinku</label><input type=password class="input-dark w-full px-4 py-2.5 text-sm"placeholder=••••••••></div><button class="btn-gold w-full py-2.5 rounded-lg text-sm">Promijeni lozinku</button></div><div class="mt-6 pt-6 border-t border-aurum-border"><button class="text-red-400 text-sm hover:text-red-300 transition-colors">Odjava s računa →'),SI=N('<div class="min-h-screen bg-aurum-black"><div class="max-w-5xl mx-auto px-4 py-10 page-enter"><div class="flex items-center gap-4 mb-8"><div class="w-16 h-16 bg-aurum-gold rounded-full flex items-center justify-center"><span class="text-aurum-black font-display font-black text-2xl"></span></div><div><h1 class="font-display text-2xl font-bold text-white"></h1><p class="text-aurum-muted text-sm"></p><span></span></div></div><div class="flex border-b border-aurum-border mb-8 overflow-x-auto">'),kI=N("<button>"),CI=N('<div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5"></label><input type=text>'),RI=N('<div class="card-dark p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"><div><p class="font-bold text-aurum-gold">#</p><p class="text-aurum-muted text-sm"></p><p class="text-aurum-muted text-xs"></p></div><div class=text-right><p class="text-aurum-gold font-bold">$</p><span>'),PI=N('<div class="aspect-square overflow-hidden bg-aurum-dark relative"><img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"><button class="absolute top-2 right-2 w-8 h-8 bg-aurum-black/70 rounded-full flex items-center justify-center text-red-400 hover:bg-red-900/50 transition-colors">♥'),$I=N('<div class=p-3><p class="text-xs font-display text-aurum-text"></p><p class="text-aurum-gold text-sm font-bold mt-1">$');function VI(){const n=dn(),[e,t]=H("profile"),[r,s]=H(!1),[i,a]=H(!1);if(!cn())return n("/login"),null;Hs(()=>{BE(),Pp(),Ht().length===0&&Fn()});const[l,u]=H({name:dt()?.name||"",email:dt()?.email||"",phone:"",address:""});async function h(x){x.preventDefault();try{await OE({name:l().name,address:l().address}),a(!0),s(!1),setTimeout(()=>a(!1),2e3)}catch(E){console.error("Greška pri ažuriranju:",E)}}const f=["profile","orders","wishlist","addresses","security"],m={profile:"Profil",orders:"Narudžbe",wishlist:"♥ Lista želja",addresses:"Adrese",security:"Sigurnost"};return(()=>{var x=SI(),E=x.firstChild,$=E.firstChild,R=$.firstChild,C=R.firstChild,V=R.nextSibling,S=V.firstChild,M=S.nextSibling,U=M.nextSibling,Y=$.nextSibling;return y(x,P(Bo,{}),E),y(C,()=>dt()?.name?.charAt(0)),y(S,()=>dt()?.name),y(M,()=>dt()?.email),y(U,()=>dt()?.role==="admin"?"Administrator":"Korisnik"),y(Y,()=>f.map(D=>(()=>{var b=kI();return b.$$click=()=>t(D),y(b,()=>m[D]),q(()=>Ae(b,`px-5 py-3 text-sm font-display tracking-wider whitespace-nowrap transition-colors ${e()===D?"text-aurum-gold border-b-2 border-aurum-gold":"text-aurum-muted hover:text-aurum-text"}`)),b})())),y(E,P(te,{get when(){return e()==="profile"},get children(){var D=bI(),b=D.firstChild,_=b.firstChild,v=_.nextSibling,T=b.nextSibling;return v.$$click=()=>s(!r()),y(v,()=>r()?"Odustani":"Uredi"),T.addEventListener("submit",h),y(T,()=>[{key:"name",label:"Ime i prezime"},{key:"email",label:"Email"},{key:"phone",label:"Telefon"},{key:"address",label:"Adresa"}].map(w=>(()=>{var I=CI(),p=I.firstChild,B=p.nextSibling;return y(p,()=>w.label),B.$$input=Z=>u({...l(),[w.key]:Z.target.value}),q(Z=>{var Te=!r(),Re=`input-dark w-full px-4 py-2.5 text-sm ${r()?"":"opacity-60 cursor-not-allowed"}`;return Te!==Z.e&&(B.disabled=Z.e=Te),Re!==Z.t&&Ae(B,Z.t=Re),Z},{e:void 0,t:void 0}),q(()=>B.value=l()[w.key]),I})()),null),y(T,P(te,{get when(){return r()},get children(){return yI()}}),null),y(T,P(te,{get when(){return i()},get children(){return vI()}}),null),D}}),null),y(E,P(te,{get when(){return e()==="orders"},get children(){var D=xI();return D.firstChild,y(D,P(te,{get when(){return Or().length===0},get children(){return wI()}}),null),y(D,P(Rt,{get each(){return Or()},children:b=>(()=>{var _=RI(),v=_.firstChild,T=v.firstChild;T.firstChild;var w=T.nextSibling,I=w.nextSibling,p=v.nextSibling,B=p.firstChild;B.firstChild;var Z=B.nextSibling;return y(T,()=>b.id?.slice(0,8).toUpperCase(),null),y(w,()=>b.items?.map(Te=>Te.name).join(", ")||"Artikli"),y(I,()=>b.shippingAddress?.city||""),y(B,()=>Number(b.total||0).toFixed(2),null),y(Z,()=>b.status||"Processing"),q(()=>Ae(Z,`text-xs px-2 py-0.5 rounded-full ${b.status==="Delivered"?"bg-green-900 text-green-400":b.status==="Processing"?"bg-yellow-900 text-yellow-400":b.status==="Shipped"?"bg-blue-900 text-blue-400":"bg-aurum-dark text-aurum-muted"}`)),_})()}),null),D}}),null),y(E,P(te,{get when(){return e()==="wishlist"},get children(){var D=TI(),b=D.firstChild,_=b.nextSibling;return y(D,P(te,{get when(){return mo().length===0},get children(){var v=EI();return v.firstChild,y(v,P(Ee,{href:"/catalog",class:"btn-gold px-6 py-2.5 rounded-lg text-sm inline-block",children:"Istraži katalog"}),null),v}}),_),y(_,P(Rt,{get each(){return Ht().filter(v=>mo().includes(v.id))},children:v=>P(Ee,{get href(){return`/product/${v.id}`},class:"card-dark overflow-hidden group hover:border-aurum-gold transition-all duration-300",get children(){return[(()=>{var T=PI(),w=T.firstChild,I=w.nextSibling;return I.$$click=async p=>{p.preventDefault(),await $p(v.id)},q(p=>{var B=v.images?.[0],Z=v.name;return B!==p.e&&ft(w,"src",p.e=B),Z!==p.t&&ft(w,"alt",p.t=Z),p},{e:void 0,t:void 0}),T})(),(()=>{var T=$I(),w=T.firstChild,I=w.nextSibling;return I.firstChild,y(w,()=>v.name),y(I,()=>v.price?.toLocaleString(),null),T})()]}})})),D}}),null),y(E,P(te,{get when(){return e()==="addresses"},get children(){var D=II(),b=D.firstChild,_=b.nextSibling,v=_.firstChild,T=v.nextSibling;return y(T,()=>dt()?.name),D}}),null),y(E,P(te,{get when(){return e()==="security"},get children(){var D=AI(),b=D.firstChild,_=b.nextSibling,v=_.nextSibling,T=v.firstChild;return T.$$click=()=>{Dr(),n("/login")},D}}),null),y(x,P(ec,{}),null),q(()=>Ae(U,`text-xs px-2 py-0.5 rounded-full mt-1 inline-block ${dt()?.role==="admin"?"bg-aurum-gold text-aurum-black font-bold":"bg-aurum-dark border border-aurum-border text-aurum-muted"}`)),x})()}Xt(["click","input"]);var NI=N('<div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">'),DI=N('<div class="grid grid-cols-1 xl:grid-cols-3 gap-6"><div class="xl:col-span-2 card-dark p-5"><h2 class="section-title text-base mb-4">Najnovije transakcije</h2><div class=space-y-3></div></div><div class=space-y-4><div class="card-dark p-5"><h3 class="section-title text-sm mb-4">Brze radnje</h3><div class=space-y-2><button class="flex items-center gap-2 border border-aurum-border text-aurum-text text-sm px-4 py-2.5 rounded w-full hover:border-aurum-gold transition-colors">🏷 Kreiraj promociju</button><button class="flex items-center gap-2 border border-aurum-border text-aurum-text text-sm px-4 py-2.5 rounded w-full hover:border-aurum-gold transition-colors">👥 Upravljaj ulogama</button></div></div><div class="card-dark p-5"><div class="flex items-center justify-between mb-3"><h3 class="section-title text-sm">Revizijski trag</h3><span class="text-xs text-aurum-muted"> events</span></div><div class=space-y-3>'),OI=N('<p class="text-aurum-muted text-sm">Sve zalihe su uredne.'),LI=N('<div class="card-dark p-5 mt-6"><h2 class="section-title text-base mb-4">Artikli koji trebaju dopunu'),MI=N('<h2 class="section-title mb-6">Sve narudžbe'),UI=N('<p class="text-aurum-muted text-sm text-center py-10">Nema narudžbi.'),Eh=N('<div class="card-dark p-5">'),FI=N('<h2 class="section-title mb-6">Korisnici'),jI=N('<p class="text-aurum-muted text-sm text-center py-10 animate-pulse">Učitavanje korisnika...'),BI=N('<p class="text-aurum-muted text-sm text-center py-10">Nema korisnika.'),zI=N('<h2 class="section-title mb-6">Promocije i kuponi'),qI=N('<div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="card-dark p-6"><h3 class="text-aurum-gold font-display text-sm font-bold uppercase tracking-widest mb-4">Aktivni kuponi</h3><div class=space-y-3><div class="flex items-center justify-between p-3 bg-aurum-dark rounded-lg border border-aurum-border"><div><p class="text-aurum-gold font-bold font-mono">AURUM10</p><p class="text-aurum-muted text-xs">10% popust · Samo prijavljeni</p></div><span class="text-green-400 text-xs bg-green-900/30 px-2 py-0.5 rounded-full">Aktivan</span></div></div></div><div class="card-dark p-6"><h3 class="text-aurum-gold font-display text-sm font-bold uppercase tracking-widest mb-4">Dodaj novi kupon</h3><div class=space-y-3><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Kod kupona</label><input type=text placeholder="npr. SUMMER20"class="input-dark w-full px-4 py-2.5 text-sm"></div><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Popust (%)</label><input type=number placeholder=10 class="input-dark w-full px-4 py-2.5 text-sm"></div><button class="btn-gold w-full py-2.5 rounded text-sm">Kreiraj kupon'),WI=N('<h2 class="section-title mb-6">Postavke'),KI=N('<div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="card-dark p-6"><h3 class="text-aurum-gold font-display text-sm font-bold uppercase tracking-widest mb-4">Lozinka za ulaz</h3><p class="text-aurum-muted text-xs mb-4">Promijeni lozinku koja se traži na Password Gate stranici.</p><div class=space-y-3><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Nova lozinka</label><input type=text placeholder=nova-lozinka class="input-dark w-full px-4 py-2.5 text-sm"></div><button class="btn-gold w-full py-2.5 rounded text-sm">Spremi lozinku</button></div></div><div class="card-dark p-6"><h3 class="text-aurum-gold font-display text-sm font-bold uppercase tracking-widest mb-4">Session postavke</h3><p class="text-aurum-muted text-xs mb-4">Trenutno preostalo: <span></span></p><button class="btn-gold w-full py-2.5 rounded text-sm mb-3">+ Produži session za 15 min</button><button class="w-full border border-red-500/30 text-red-400 py-2.5 rounded text-sm hover:bg-red-900/20 transition-colors">Odjavi se odmah</button></div><div class="card-dark p-6"><h3 class="text-aurum-gold font-display text-sm font-bold uppercase tracking-widest mb-4">Informacije o shopu</h3><div class=space-y-3><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Naziv shopa</label><input type=text value=AurumVault class="input-dark w-full px-4 py-2.5 text-sm"></div><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Email za kontakt</label><input type=email value=contact@aurumvault.com class="input-dark w-full px-4 py-2.5 text-sm"></div><button class="btn-gold w-full py-2.5 rounded text-sm">Spremi postavke</button></div></div><div class="card-dark p-6"><h3 class="text-aurum-gold font-display text-sm font-bold uppercase tracking-widest mb-4">Administracija</h3><div class=space-y-3><div class="flex items-center justify-between py-2 border-b border-aurum-border"><span class="text-sm text-aurum-text">Maintenance mode</span><div class="w-8 h-4 bg-aurum-muted rounded-full cursor-pointer hover:bg-aurum-gold transition-colors"></div></div><div class="flex items-center justify-between py-2 border-b border-aurum-border"><span class="text-sm text-aurum-text">Password Gate</span><div class="w-8 h-4 bg-aurum-gold rounded-full cursor-pointer"></div></div><div class="flex items-center justify-between py-2"><span class="text-sm text-aurum-text">Members only mode</span><div class="w-8 h-4 bg-aurum-muted rounded-full cursor-pointer hover:bg-aurum-gold transition-colors">'),HI=N('<p class="text-xs text-red-400 mb-2 animate-pulse">⚠ Session uskoro ističe!'),GI=N('<div class="min-h-screen bg-aurum-black flex flex-col"><div class="bg-aurum-dark border-b border-aurum-border px-4 py-2 flex items-center justify-between text-xs flex-wrap gap-2"><div class="flex items-center gap-3 flex-wrap"><div class="flex items-center gap-2"><div class="w-6 h-6 bg-aurum-gold rounded-full flex items-center justify-center"><span class="text-aurum-black font-black text-xs">A</span></div><span class="font-display font-bold text-aurum-gold tracking-widest hidden sm:block">AurumVault</span></div><span class="text-red-400 border border-red-400/30 px-2 py-0.5 rounded">🔒 Sigurno admin područje</span><span class="text-aurum-muted hidden md:block">Dvofaktorska provjera: Aktivna</span><span>Session active • Expires in <span class=font-bold></span></span></div><div class="flex items-center gap-4"><div class=text-right><p class="text-aurum-text font-bold"></p><p class="text-aurum-gold text-xs">Uloga: Super Administrator</p></div><button class="border border-aurum-border text-aurum-muted px-3 py-1 rounded hover:border-red-400 hover:text-red-400 transition-colors">Logout</button></div></div><div class="flex flex-1 overflow-hidden"><aside class="w-48 bg-aurum-dark border-r border-aurum-border flex flex-col p-4 flex-shrink-0"><div class="text-xs text-aurum-muted uppercase tracking-widest mb-3">Navigation <span class=text-aurum-gold>v1.3</span></div><div class="mt-6 pt-4 border-t border-aurum-border"><div class="text-xs text-aurum-muted uppercase tracking-widest mb-2">Security</div><div class="flex items-center gap-2 text-xs text-green-400 mb-3"><span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>Revizijski trag uživo</div><div class="text-xs text-aurum-muted uppercase tracking-widest mb-2">Quick Role Controls</div></div></aside><main class="flex-1 overflow-y-auto p-6"></main><div class="w-48 bg-aurum-dark border-l border-aurum-border p-4 hidden xl:block flex-shrink-0"><h4 class="text-xs text-aurum-muted uppercase tracking-widest mb-3">Role-Based Controls</h4><div class="mt-6 pt-4 border-t border-aurum-border card-dark p-3"><h4 class="text-xs text-aurum-muted uppercase tracking-widest mb-2">Istek sesije</h4><p class="text-xs text-aurum-muted leading-relaxed mb-3">Ističe za: <span></span></p><div class="flex flex-col gap-2"><button class="btn-gold py-1.5 rounded text-xs">Produži sesiju</button><button class="border border-aurum-border text-aurum-muted py-1.5 rounded text-xs hover:border-red-400 hover:text-red-400 transition-colors">Odjavi se odmah'),QI=N("<button><span></span> "),JI=N('<div class="flex items-center justify-between mb-2"><span class="text-xs text-aurum-text"></span><div>'),XI=N('<div class="card-dark p-5 flex items-start justify-between"><div><p class="text-aurum-muted text-xs uppercase tracking-widest"></p><p></p><p class="text-aurum-muted text-xs mt-1"></p></div><span class=text-2xl>'),YI=N('<p class="text-aurum-muted text-sm text-center py-6">Nema narudžbi'),ZI=N('<div class="flex items-center gap-3 py-3 border-b border-aurum-border last:border-0"><div class="w-10 h-10 bg-aurum-muted rounded flex items-center justify-center text-xs flex-shrink-0">📦</div><div class="flex-1 min-w-0"><p class="text-aurum-text text-sm font-bold truncate">Order #</p><p class="text-aurum-muted text-xs"></p></div><span class="text-aurum-gold font-bold text-sm">$</span><select class="input-dark text-xs px-2 py-1 rounded flex-shrink-0">'),Th=N("<option>"),eA=N('<div><p class=leading-relaxed></p><p class="text-aurum-muted mt-0.5">'),tA=N('<img alt class="w-full h-full object-cover">'),nA=N('<div class="flex items-center gap-4 py-3 border-b border-aurum-border last:border-0"><div class="w-10 h-10 rounded overflow-hidden flex-shrink-0 bg-aurum-muted"></div><div class=flex-1><p class="text-aurum-text text-sm font-medium"></p><p class="text-aurum-muted text-xs">SKU: <!> · <!> jedinica</p></div><span>'),rA=N('<div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 py-4 border-b border-aurum-border last:border-0"><div class="flex-1 min-w-0"><p class="text-aurum-gold font-bold font-mono text-sm">#</p><p class="text-aurum-text text-sm"></p><p class="text-aurum-muted text-xs">, </p><p class="text-aurum-muted text-xs mt-1">Artikli: </p></div><div class="flex items-center gap-3 flex-shrink-0"><span class="text-aurum-gold font-bold">$</span><select class="input-dark text-xs px-2 py-1.5 rounded">'),sA=N('<div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 py-4 border-b border-aurum-border last:border-0"><div class="w-10 h-10 bg-aurum-gold rounded-full flex items-center justify-center flex-shrink-0"><span class="text-aurum-black font-bold"></span></div><div class="flex-1 min-w-0"><p class="text-aurum-text text-sm font-bold"></p><p class="text-aurum-muted text-xs"></p><p class="text-aurum-muted text-xs">UID: <!>...</p></div><div class="flex items-center gap-2 flex-shrink-0"><span></span><select class="input-dark text-xs px-2 py-1.5 rounded"><option value=user>user</option><option value=admin>admin'),iA=N('<div class="flex items-center justify-between mb-3"><span class="text-xs text-aurum-text leading-tight pr-2"></span><div>');function oA(){const n=dn(),[e,t]=H("dashboard");if(!Fo())return n("/login"),null;const r=1*60,[s,i]=H(r),[a,l]=H(!1);function u(U){const Y=Math.floor(U/60),D=U%60;return`${Y}m ${String(D).padStart(2,"0")}s`}const h=setInterval(()=>{i(U=>U<=1?(clearInterval(h),Dr().then(()=>n("/login")),0):(U<=60&&l(!0),U-1))},1e3);_o(()=>clearInterval(h));function f(){i(U=>U+15*60),l(!1)}Hs(()=>{wh(),Fn()});const[m,x]=H([]),[E,$]=H(!1);async function R(){$(!0);try{const U=await ui(Zn(nt,"users"));x(U.docs.map(Y=>({id:Y.id,...Y.data()})))}catch(U){console.error(U)}$(!1)}async function C(U,Y){await Xr(Bt(nt,"orders",U),{status:Y}),await wh()}async function V(U,Y){await Xr(Bt(nt,"users",U),{role:Y}),await R()}const S=[{key:"dashboard",icon:"📊",label:"Nadzorna ploča"},{key:"orders",icon:"📦",label:"Narudžbe"},{key:"customers",icon:"👥",label:"Kupci"},{key:"promotions",icon:"🏷",label:"Promocije"},{key:"settings",icon:"⚙",label:"Postavke"}],M=[{text:`${dt()?.name} logged in`,time:"Just now",type:"info"},{text:"Promjena uloge: Leila Morgan postala Menadžer",time:"28 Feb 2026 · 0:01",type:"warning"},{text:"Sustav: Blokiran neuspjeli pokušaj prijave (3 attempts)",time:"28 Feb 2026 · 03:05",type:"error"}];return(()=>{var U=GI(),Y=U.firstChild,D=Y.firstChild,b=D.firstChild,_=b.nextSibling,v=_.nextSibling,T=v.nextSibling,w=T.firstChild,I=w.nextSibling,p=D.nextSibling,B=p.firstChild,Z=B.firstChild,Te=B.nextSibling,Re=Y.nextSibling,Oe=Re.firstChild,je=Oe.firstChild,$e=je.nextSibling,Ye=$e.firstChild,St=Ye.nextSibling;St.nextSibling;var He=Oe.nextSibling,mt=He.nextSibling,gt=mt.firstChild,it=gt.nextSibling,ot=it.firstChild,we=ot.nextSibling,Ze=we.firstChild,bt=Ze.nextSibling,Nt=we.nextSibling,kt=Nt.firstChild,Ct=kt.nextSibling;return y(I,()=>u(s())),y(D,P(Ee,{href:"/catalog",class:"text-aurum-muted border border-aurum-border px-2 py-0.5 rounded hover:border-aurum-gold hover:text-aurum-gold transition-colors",children:"← Na stranicu"}),null),y(Z,()=>dt()?.name),Te.$$click=()=>Dr().then(()=>n("/login")),y(Oe,P(Rt,{each:S,children:se=>(()=>{var G=QI(),F=G.firstChild;return F.nextSibling,G.$$click=()=>{t(se.key),se.key==="customers"&&R()},y(F,()=>se.icon),y(G,()=>se.label,null),q(()=>Ae(G,`flex items-center gap-2 px-3 py-2.5 rounded text-sm mb-1 transition-colors w-full text-left ${e()===se.key?"bg-aurum-gold text-aurum-black font-bold":"text-aurum-muted hover:text-aurum-text hover:bg-aurum-card"}`)),G})()}),$e),y($e,()=>[{role:"Manager",active:!0},{role:"Auditor",active:!1}].map(se=>(()=>{var G=JI(),F=G.firstChild,z=F.nextSibling;return y(F,()=>se.role),q(()=>Ae(z,`w-8 h-4 rounded-full cursor-pointer ${se.active?"bg-aurum-gold":"bg-aurum-muted"}`)),G})()),null),y(He,P(te,{get when(){return e()==="dashboard"},get children(){return[(()=>{var se=NI();return y(se,()=>[{label:"Prodaja danas",value:"$18,742",change:"+8.6% vs yesterday",icon:"💰",color:"text-aurum-gold"},{label:"Narudžbe na čekanju",value:Or().filter(G=>G.status==="Processing").length||"0",change:"U obradi",icon:"📦",color:"text-yellow-400"},{label:"Upozorenja zaliha",value:Ht().filter(G=>G.stock<=3).length||"0",change:"Niska zaliha",icon:"⚠",color:"text-red-400"}].map(G=>(()=>{var F=XI(),z=F.firstChild,ee=z.firstChild,J=ee.nextSibling,W=J.nextSibling,ce=z.nextSibling;return y(ee,()=>G.label),y(J,()=>G.value),y(W,()=>G.change),y(ce,()=>G.icon),q(()=>Ae(J,`font-display text-2xl font-bold mt-1 ${G.color}`)),F})())),se})(),(()=>{var se=DI(),G=se.firstChild,F=G.firstChild,z=F.nextSibling,ee=G.nextSibling,J=ee.firstChild,W=J.firstChild,ce=W.nextSibling,ie=ce.firstChild,ve=ie.nextSibling,fe=J.nextSibling,_e=fe.firstChild,be=_e.firstChild,Pe=be.nextSibling,ne=Pe.firstChild,he=_e.nextSibling;return y(z,P(Rt,{get each(){return Or().slice(0,5)},get fallback(){return YI()},children:de=>(()=>{var Ie=ZI(),at=Ie.firstChild,Be=at.nextSibling,ze=Be.firstChild;ze.firstChild;var lt=ze.nextSibling,ct=Be.nextSibling;ct.firstChild;var Le=ct.nextSibling;return y(ze,()=>de.id?.slice(0,8).toUpperCase(),null),y(lt,()=>de.shippingAddress?.fullName||"Gost"),y(ct,()=>Number(de.total||0).toFixed(2),null),Le.addEventListener("change",wt=>C(de.id,wt.target.value)),y(Le,()=>["U obradi","Čeka pripremu","Poslano","Dostavljeno","Otkazano"].map(wt=>(()=>{var Pt=Th();return Pt.value=wt,y(Pt,wt),Pt})())),q(()=>Le.value=de.status||"U obradi"),Ie})()})),y(ce,P(Ee,{href:"/admin/products/new",class:"flex items-center gap-2 bg-aurum-gold text-aurum-black text-sm font-bold px-4 py-2.5 rounded w-full hover:bg-yellow-300 transition-colors",children:"+ Dodaj novi proizvod"}),ie),ie.$$click=()=>t("promotions"),ve.$$click=()=>{t("customers"),R()},y(Pe,()=>M.length,ne),y(he,()=>M.map(de=>(()=>{var Ie=eA(),at=Ie.firstChild,Be=at.nextSibling;return y(at,()=>de.text),y(Be,()=>de.time),q(()=>Ae(Ie,`text-xs border-l-2 pl-3 ${de.type==="error"?"border-red-500 text-red-400":de.type==="warning"?"border-yellow-500 text-yellow-400":"border-aurum-gold text-aurum-text"}`)),Ie})())),se})(),(()=>{var se=LI();return se.firstChild,y(se,P(te,{get when(){return Ht().filter(G=>G.stock<=5).length===0},get children(){return OI()}}),null),y(se,P(Rt,{get each(){return Ht().filter(G=>G.stock<=5)},children:G=>(()=>{var F=nA(),z=F.firstChild,ee=z.nextSibling,J=ee.firstChild,W=J.nextSibling,ce=W.firstChild,ie=ce.nextSibling,ve=ie.nextSibling,fe=ve.nextSibling;fe.nextSibling;var _e=ee.nextSibling;return y(z,P(te,{get when(){return G.images?.[0]},get children(){var be=tA();return q(()=>ft(be,"src",G.images[0])),be}})),y(J,()=>G.name),y(W,()=>G.sku,ie),y(W,()=>G.stock,fe),y(_e,()=>G.stock<=2?"KRITIČNO":"NISKO"),y(F,P(Ee,{get href(){return`/admin/products/edit/${G.id}`},class:"text-xs text-aurum-gold border border-aurum-gold px-2 py-1 rounded hover:bg-aurum-gold hover:text-aurum-black transition-all",children:"Uredi"}),null),q(()=>Ae(_e,`text-xs font-bold px-2 py-0.5 rounded-full ${G.stock<=2?"text-red-400 bg-red-900/30":"text-yellow-400 bg-yellow-900/30"}`)),F})()}),null),se})()]}}),null),y(He,P(te,{get when(){return e()==="orders"},get children(){return[MI(),(()=>{var se=Eh();return y(se,P(te,{get when(){return Or().length===0},get children(){return UI()}}),null),y(se,P(Rt,{get each(){return Or()},children:G=>(()=>{var F=rA(),z=F.firstChild,ee=z.firstChild;ee.firstChild;var J=ee.nextSibling,W=J.nextSibling,ce=W.firstChild,ie=W.nextSibling;ie.firstChild;var ve=z.nextSibling,fe=ve.firstChild;fe.firstChild;var _e=fe.nextSibling;return y(ee,()=>G.id?.slice(0,8).toUpperCase(),null),y(J,()=>G.shippingAddress?.fullName||"Gost"),y(W,()=>G.shippingAddress?.address,ce),y(W,()=>G.shippingAddress?.city,null),y(ie,()=>G.items?.map(be=>`${be.name} x${be.quantity}`).join(", ")||"—",null),y(fe,()=>Number(G.total||0).toFixed(2),null),_e.addEventListener("change",be=>C(G.id,be.target.value)),y(_e,()=>["U obradi","Čeka pripremu","Poslano","Dostavljeno","Otkazano"].map(be=>(()=>{var Pe=Th();return Pe.value=be,y(Pe,be),Pe})())),q(()=>_e.value=G.status||"U obradi"),F})()}),null),se})()]}}),null),y(He,P(te,{get when(){return e()==="customers"},get children(){return[FI(),(()=>{var se=Eh();return y(se,P(te,{get when(){return E()},get children(){return jI()}}),null),y(se,P(te,{get when(){return rt(()=>!E())()&&m().length===0},get children(){return BI()}}),null),y(se,P(Rt,{get each(){return m()},children:G=>(()=>{var F=sA(),z=F.firstChild,ee=z.firstChild,J=z.nextSibling,W=J.firstChild,ce=W.nextSibling,ie=ce.nextSibling,ve=ie.firstChild,fe=ve.nextSibling;fe.nextSibling;var _e=J.nextSibling,be=_e.firstChild,Pe=be.nextSibling;return y(ee,()=>G.name?.charAt(0)||"?"),y(W,()=>G.name||"Bez imena"),y(ce,()=>G.email),y(ie,()=>G.id?.slice(0,12),fe),y(be,()=>G.role||"user"),Pe.addEventListener("change",ne=>V(G.id,ne.target.value)),q(()=>Ae(be,`text-xs px-2 py-0.5 rounded-full ${G.role==="admin"?"bg-aurum-gold text-aurum-black font-bold":"bg-aurum-dark text-aurum-muted border border-aurum-border"}`)),q(()=>Pe.value=G.role||"user"),F})()}),null),se})()]}}),null),y(He,P(te,{get when(){return e()==="promotions"},get children(){return[zI(),qI()]}}),null),y(He,P(te,{get when(){return e()==="settings"},get children(){return[WI(),(()=>{var se=KI(),G=se.firstChild,F=G.nextSibling,z=F.firstChild,ee=z.nextSibling,J=ee.firstChild,W=J.nextSibling,ce=ee.nextSibling,ie=ce.nextSibling;return y(W,()=>u(s())),ce.$$click=f,ie.$$click=()=>Dr().then(()=>n("/login")),q(()=>Ae(W,`font-bold ${a()?"text-red-400":"text-aurum-gold"}`)),se})()]}}),null),y(mt,()=>[{label:"Odobrenje uređivanja proizvoda",active:!0},{label:"Dozvola kreiranja promocija",active:!1}].map(se=>(()=>{var G=iA(),F=G.firstChild,z=F.nextSibling;return y(F,()=>se.label),q(()=>Ae(z,`w-8 h-4 rounded-full flex-shrink-0 cursor-pointer ${se.active?"bg-aurum-gold":"bg-aurum-muted"}`)),G})()),it),y(bt,()=>u(s())),y(it,P(te,{get when(){return a()},get children(){return HI()}}),Nt),kt.$$click=f,Ct.$$click=()=>Dr().then(()=>n("/login")),q(se=>{var G=`font-medium ${a()?"text-red-400 animate-pulse":"text-green-400"}`,F=`font-bold ${a()?"text-red-400 animate-pulse":"text-aurum-gold"}`;return G!==se.e&&Ae(T,se.e=G),F!==se.t&&Ae(bt,se.t=F),se},{e:void 0,t:void 0}),U})()}Xt(["click"]);var aA=N('<div class="w-6 h-6 bg-aurum-gold rounded-full flex items-center justify-center"><span class="text-aurum-black font-black text-xs">A'),lA=N('<span class="font-display font-bold text-aurum-gold tracking-widest hidden sm:block">AurumVault'),cA=N('<div class="border-2 border-dashed border-aurum-border rounded-lg p-8 text-center text-aurum-muted text-sm">Dodaj URL slike gore ↑'),uA=N('<div class="bg-red-900/30 border border-red-500 rounded-lg p-3 text-red-400 text-xs">⚠ '),hA=N('<div class="bg-green-900/30 border border-green-500 rounded-lg p-3 text-green-400 text-xs">✓ Proizvod je spremljen kao draft.'),dA=N('<img alt class="w-full h-full object-cover">'),fA=N('<span class="badge-exclusive mb-2 inline-block">'),pA=N('<button class="w-full border border-red-500/30 text-red-400 py-2.5 rounded text-sm hover:bg-red-900/20 transition-colors disabled:opacity-50">'),mA=N('<div class="min-h-screen bg-aurum-black"><div class="bg-aurum-dark border-b border-aurum-border px-4 py-3 flex items-center justify-between"><div class="flex items-center gap-4 text-sm"><span class=text-aurum-muted>›</span><span class=text-aurum-muted>›</span><span class="text-aurum-text text-xs"></span></div></div><div class="max-w-7xl mx-auto px-4 py-8"><div class="flex items-center gap-4 mb-8"><h1 class="font-display text-2xl font-bold text-white"></h1><span class="text-xs border border-yellow-500 text-yellow-500 px-2 py-0.5 rounded">⚠ Provjera uključena</span></div><div class="grid grid-cols-1 xl:grid-cols-3 gap-8"><div class="xl:col-span-2 space-y-6"><div class="card-dark p-6"><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Naziv proizvoda <span class=text-red-400>*</span></label><input type=text class="input-dark w-full px-4 py-3 text-sm font-medium"placeholder="Unesi naziv proizvoda"></div><div class="card-dark p-6"><div class="grid grid-cols-2 gap-4"><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">SKU</label><input type=text class="input-dark w-full px-4 py-2.5 text-sm"placeholder=AV-XXX-000></div><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Cijena (USD) <span class=text-red-400>*</span></label><input type=number class="input-dark w-full px-4 py-2.5 text-sm"placeholder=0></div><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Cijena na rasprodaji</label><input type=number class="input-dark w-full px-4 py-2.5 text-sm"placeholder="Ostavi prazno ako nema"></div><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Zaliha</label><input type=number class="input-dark w-full px-4 py-2.5 text-sm"placeholder=0></div></div></div><div class="card-dark p-6"><div class="grid grid-cols-1 sm:grid-cols-2 gap-6"><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-2">Tagovi / Badge</label><div class="flex flex-wrap gap-2 mb-3"></div><input type=text placeholder="Dodaj tag i pritisni Enter"class="input-dark w-full px-4 py-2.5 text-sm"></div><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-2">Primarna kategorija</label><select class="input-dark w-full px-3 py-2.5 text-sm"></select><label class="flex items-center gap-2 mt-4 cursor-pointer"><input type=checkbox class="checkbox checkbox-warning checkbox-sm"><span class="text-sm text-aurum-text">Samo za članove</span></label></div></div></div><div class="card-dark p-6"><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-2">Opis proizvoda</label><textarea rows=5 class="input-dark w-full px-4 py-3 text-sm resize-none"placeholder="Opiši proizvod s detaljima, materijalima..."></textarea></div><div class="card-dark p-6"><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-3">Slike (URL)</label><div class="flex gap-2 mb-4"><input type=url placeholder="https://... URL slike"class="input-dark flex-1 px-4 py-2.5 text-sm"><button class="btn-gold px-4 py-2.5 text-sm rounded">Dodaj</button></div><div class="grid grid-cols-3 gap-3"></div></div></div><div class=space-y-4><div class="card-dark p-4"><h3 class="text-xs text-aurum-muted uppercase tracking-widest mb-3">Preview</h3><div class="bg-aurum-dark rounded-lg overflow-hidden"><div class="aspect-square bg-aurum-muted flex items-center justify-center overflow-hidden"></div><div class=p-3><p class="text-aurum-text text-xs font-medium"></p><p class="text-aurum-muted text-xs"></p><div class="flex items-center gap-2 mt-1"><span class="text-aurum-gold font-bold text-sm">$</span></div></div></div></div><div class="card-dark p-4 space-y-3"><button class="w-full border border-aurum-border text-aurum-text py-2.5 rounded text-sm hover:border-aurum-gold transition-colors disabled:opacity-50"></button><button class="w-full btn-gold py-2.5 rounded text-sm disabled:opacity-50"></button></div><div class="card-dark p-4 text-xs text-aurum-muted space-y-2"><p>📦 Kategorija: <span class=text-aurum-text></span></p><p>👥 Samo članovi: <span class=text-aurum-text></span></p><p>🖼 Slike: <span class=text-aurum-text>'),gA=N('<span class="badge-exclusive flex items-center gap-1"><button class="hover:text-red-300 ml-1">×'),_A=N("<option>"),yA=N('<div class="relative group"><img alt class="w-full aspect-square object-cover rounded border border-aurum-border"><button class="absolute top-1 right-1 bg-red-600 text-white w-5 h-5 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity">×'),vA=N('<p class="text-aurum-muted text-xs">Nema slike'),bA=N('<span class="text-aurum-muted text-xs line-through">$');function Ih(){const n=qh(),e=dn(),t=!!n.id;if(!Fo())return e("/login"),null;const[r,s]=H(!1),[i,a]=H(!1),[l,u]=H(!1),[h,f]=H(!1),[m,x]=H(""),[E,$]=H({title:"",sku:"",price:"",salePrice:"",inventory:"",description:"",tags:[],primaryCat:"Accessories",images:[],membersOnly:!1});Hs(async()=>{if(t){Ht().length===0&&await Fn();const D=Ht().find(b=>b.id===n.id);D&&$({title:D.name||"",sku:D.sku||"",price:D.price||"",salePrice:D.salePrice||"",inventory:D.stock||"",description:D.description||"",tags:D.badge?[D.badge]:[],primaryCat:D.category||"Accessories",images:D.images||[],membersOnly:D.membersOnly||!1})}});async function R(){f(!0),x("");try{const D=S();t?await Xr(Bt(nt,"products",n.id),D):await Xa(Zn(nt,"products"),{...D,createdAt:Ns()}),s(!0),await Fn(),setTimeout(()=>s(!1),2e3)}catch(D){x("Greška pri spremanju: "+D.message)}f(!1)}async function C(){f(!0),x("");try{const D={...S(),published:!0};t?await Xr(Bt(nt,"products",n.id),D):await Xa(Zn(nt,"products"),{...D,createdAt:Ns()}),a(!0),await Fn(),setTimeout(()=>e("/admin"),1500)}catch(D){x("Greška pri objavi: "+D.message)}f(!1)}async function V(){if(confirm("Jesi li siguran/na da želiš obrisati ovaj proizvod?")){u(!0);try{await SE(Bt(nt,"products",n.id)),await Fn(),e("/admin")}catch(D){x("Greška pri brisanju: "+D.message)}u(!1)}}function S(){return{name:E().title,sku:E().sku,price:Number(E().price)||0,salePrice:E().salePrice?Number(E().salePrice):null,stock:Number(E().inventory)||0,description:E().description,badge:E().tags[0]||null,category:E().primaryCat,images:E().images,membersOnly:E().membersOnly,sizes:[],updatedAt:Ns()}}const[M,U]=H("");function Y(){M().trim()&&($({...E(),images:[...E().images,M().trim()]}),U(""))}return(()=>{var D=mA(),b=D.firstChild,_=b.firstChild,v=_.firstChild,T=v.nextSibling,w=T.nextSibling,I=b.nextSibling,p=I.firstChild,B=p.firstChild,Z=p.nextSibling,Te=Z.firstChild,Re=Te.firstChild,Oe=Re.firstChild,je=Oe.nextSibling,$e=Re.nextSibling,Ye=$e.firstChild,St=Ye.firstChild,He=St.firstChild,mt=He.nextSibling,gt=St.nextSibling,it=gt.firstChild,ot=it.nextSibling,we=gt.nextSibling,Ze=we.firstChild,bt=Ze.nextSibling,Nt=we.nextSibling,kt=Nt.firstChild,Ct=kt.nextSibling,se=$e.nextSibling,G=se.firstChild,F=G.firstChild,z=F.firstChild,ee=z.nextSibling,J=ee.nextSibling,W=F.nextSibling,ce=W.firstChild,ie=ce.nextSibling,ve=ie.nextSibling,fe=ve.firstChild,_e=se.nextSibling,be=_e.firstChild,Pe=be.nextSibling,ne=_e.nextSibling,he=ne.firstChild,de=he.nextSibling,Ie=de.firstChild,at=Ie.nextSibling,Be=de.nextSibling,ze=Te.nextSibling,lt=ze.firstChild,ct=lt.firstChild,Le=ct.nextSibling,wt=Le.firstChild,Pt=wt.nextSibling,Mt=Pt.firstChild,ir=Mt.nextSibling,Ge=ir.nextSibling,os=Ge.firstChild;os.firstChild;var fn=lt.nextSibling,Yt=fn.firstChild,as=Yt.nextSibling,zo=fn.nextSibling,pn=zo.firstChild,qo=pn.firstChild,Wo=qo.nextSibling,or=pn.nextSibling,di=or.firstChild,fi=di.nextSibling,ls=or.nextSibling,ar=ls.firstChild,Ko=ar.nextSibling;return y(_,P(Ee,{href:"/admin",class:"flex items-center gap-2",get children(){return[aA(),lA()]}}),v),y(_,P(Ee,{href:"/admin",class:"text-aurum-muted hover:text-aurum-gold text-xs",children:"Admin"}),T),y(w,t?"Uredi proizvod":"Novi proizvod"),y(b,P(Ee,{href:"/admin",class:"text-xs text-aurum-muted hover:text-aurum-gold transition-colors",children:"← Nazad"}),null),y(B,t?"Uredi proizvod":"Dodaj novi proizvod"),je.$$input=X=>$({...E(),title:X.target.value}),mt.$$input=X=>$({...E(),sku:X.target.value}),ot.$$input=X=>$({...E(),price:X.target.value}),bt.$$input=X=>$({...E(),salePrice:X.target.value}),Ct.$$input=X=>$({...E(),inventory:X.target.value}),y(ee,P(Rt,{get each(){return E().tags},children:X=>(()=>{var et=gA(),zt=et.firstChild;return y(et,X,zt),zt.$$click=()=>$({...E(),tags:E().tags.filter(Cn=>Cn!==X)}),et})()})),J.$$keydown=X=>{X.key==="Enter"&&X.target.value.trim()&&($({...E(),tags:[...E().tags,X.target.value.trim()]}),X.target.value="",X.preventDefault())},ie.addEventListener("change",X=>$({...E(),primaryCat:X.target.value})),y(ie,()=>["Rings","Necklaces","Watches","Accessories","Art Objects"].map(X=>(()=>{var et=_A();return et.value=X,y(et,X),et})())),fe.addEventListener("change",X=>$({...E(),membersOnly:X.target.checked})),Pe.$$input=X=>$({...E(),description:X.target.value}),Ie.$$input=X=>U(X.target.value),at.$$click=Y,y(Be,P(Rt,{get each(){return E().images},children:(X,et)=>(()=>{var zt=yA(),Cn=zt.firstChild,cs=Cn.nextSibling;return ft(Cn,"src",X),cs.$$click=()=>$({...E(),images:E().images.filter((Ho,Go)=>Go!==et())}),zt})()})),y(ne,P(te,{get when(){return E().images.length===0},get children(){return cA()}}),null),y(ze,P(te,{get when(){return m()},get children(){var X=uA();return X.firstChild,y(X,m,null),X}}),lt),y(ze,P(te,{get when(){return r()},get children(){return hA()}}),lt),y(wt,P(te,{get when(){return E().images[0]},get fallback(){return vA()},get children(){var X=dA();return q(()=>ft(X,"src",E().images[0])),X}})),y(Pt,P(te,{get when(){return E().tags.length>0},get children(){var X=fA();return y(X,()=>E().tags[0]),X}}),Mt),y(Mt,()=>E().title||"Naziv proizvoda"),y(ir,()=>E().sku),y(os,()=>E().salePrice||E().price||"0",null),y(Ge,(()=>{var X=rt(()=>!!E().salePrice);return()=>X()&&(()=>{var et=bA();return et.firstChild,y(et,()=>E().price,null),et})()})(),null),Yt.$$click=R,y(Yt,()=>h()?"Sprema...":"💾 Spremi draft"),as.$$click=C,y(as,(()=>{var X=rt(()=>!!i());return()=>X()?"✓ Objavljeno!":h()?"Objavljuje...":"🚀 Objavi"})()),y(fn,P(te,{when:t,get children(){var X=pA();return X.$$click=V,y(X,()=>l()?"Briše...":"🗑 Obriši proizvod"),q(()=>X.disabled=l()),X}}),null),y(Wo,()=>E().primaryCat),y(fi,()=>E().membersOnly?"Da":"Ne"),y(Ko,()=>E().images.length),q(X=>{var et=h(),zt=h();return et!==X.e&&(Yt.disabled=X.e=et),zt!==X.t&&(as.disabled=X.t=zt),X},{e:void 0,t:void 0}),q(()=>je.value=E().title),q(()=>mt.value=E().sku),q(()=>ot.value=E().price),q(()=>bt.value=E().salePrice),q(()=>Ct.value=E().inventory),q(()=>ie.value=E().primaryCat),q(()=>fe.checked=E().membersOnly),q(()=>Pe.value=E().description),q(()=>Ie.value=M()),D})()}Xt(["input","keydown","click"]);function wA(){return P(og,{get children(){return[P(tn,{path:"/",component:GE}),P(tn,{path:"/catalog",component:ET}),P(tn,{path:"/product/:id",component:$T}),P(tn,{path:"/login",component:HT}),P(tn,{path:"/checkout",component:xh}),P(tn,{path:"/cart",component:xh}),P(tn,{path:"/profile",component:VI}),P(tn,{path:"/admin",component:oA}),P(tn,{path:"/admin/products/new",component:Ih}),P(tn,{path:"/admin/products/edit/:id",component:Ih})]}})}vm(()=>P(wA,{}),document.getElementById("root"));
