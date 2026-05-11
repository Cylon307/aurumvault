(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const qm=!1,zm=(n,e)=>n===e,Ui=Symbol("solid-proxy"),Eh=typeof Proxy=="function",Wm=Symbol("solid-track"),Fi={equals:zm};let Th=$h;const sr=1,ji=2,Ih={owned:null,cleanups:null,context:null,owner:null};var ke=null;let ta=null,Hm=null,Be=null,Rt=null,wn=null,fo=0;function ks(n,e){const t=Be,r=ke,s=n.length===0,i=e===void 0?r:e,a=s?Ih:{owned:null,cleanups:null,context:i?i.context:null,owner:i},l=s?n:()=>n(()=>Bt(()=>Ds(a)));ke=a,Be=null;try{return ir(l,!0)}finally{Be=t,ke=r}}function H(n,e){e=e?Object.assign({},Fi,e):Fi;const t={value:n,observers:null,observerSlots:null,comparator:e.equals||void 0},r=s=>(typeof s=="function"&&(s=s(t.value)),Ph(t,s));return[Rh.bind(t),r]}function q(n,e,t){const r=el(n,e,!1,sr);Hs(r)}function Ah(n,e,t){Th=Ym;const r=el(n,e,!1,sr);r.user=!0,wn?wn.push(r):Hs(r)}function Ne(n,e,t){t=t?Object.assign({},Fi,t):Fi;const r=el(n,e,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=t.equals||void 0,Hs(r),Rh.bind(r)}function Gm(n){return ir(n,!1)}function Bt(n){if(Be===null)return n();const e=Be;Be=null;try{return n()}finally{Be=e}}function Ya(n,e,t){const r=Array.isArray(n);let s,i=t&&t.defer;return a=>{let l;if(r){l=Array(n.length);for(let h=0;h<n.length;h++)l[h]=n[h]()}else l=n();if(i)return i=!1,a;const u=Bt(()=>e(l,s,a));return s=l,u}}function Ws(n){Ah(()=>Bt(n))}function mo(n){return ke===null||(ke.cleanups===null?ke.cleanups=[n]:ke.cleanups.push(n)),n}function Sh(){return ke}function Ch(n,e){const t=ke,r=Be;ke=n,Be=null;try{return ir(e,!0)}catch(s){tl(s)}finally{ke=t,Be=r}}function Km(n){const e=Be,t=ke;return Promise.resolve().then(()=>{Be=e,ke=t;let r;return ir(n,!1),Be=ke=null,r?r.done:void 0})}const[VA,NA]=H(!1);function kh(n,e){const t=Symbol("context");return{id:t,Provider:Zm(t),defaultValue:n}}function Xa(n){let e;return ke&&ke.context&&(e=ke.context[n.id])!==void 0?e:n.defaultValue}function Za(n){const e=Ne(n),t=Ne(()=>_a(e()));return t.toArray=()=>{const r=t();return Array.isArray(r)?r:r!=null?[r]:[]},t}function Rh(){if(this.sources&&this.state)if(this.state===sr)Hs(this);else{const n=Rt;Rt=null,ir(()=>qi(this),!1),Rt=n}if(Be){const n=this.observers?this.observers.length:0;Be.sources?(Be.sources.push(this),Be.sourceSlots.push(n)):(Be.sources=[this],Be.sourceSlots=[n]),this.observers?(this.observers.push(Be),this.observerSlots.push(Be.sources.length-1)):(this.observers=[Be],this.observerSlots=[Be.sources.length-1])}return this.value}function Ph(n,e,t){let r=n.value;return(!n.comparator||!n.comparator(r,e))&&(n.value=e,n.observers&&n.observers.length&&ir(()=>{for(let s=0;s<n.observers.length;s+=1){const i=n.observers[s],a=ta&&ta.running;a&&ta.disposed.has(i),(a?!i.tState:!i.state)&&(i.pure?Rt.push(i):wn.push(i),i.observers&&Vh(i)),a||(i.state=sr)}if(Rt.length>1e6)throw Rt=[],new Error},!1)),e}function Hs(n){if(!n.fn)return;Ds(n);const e=fo;Qm(n,n.value,e)}function Qm(n,e,t){let r;const s=ke,i=Be;Be=ke=n;try{r=n.fn(e)}catch(a){return n.pure&&(n.state=sr,n.owned&&n.owned.forEach(Ds),n.owned=null),n.updatedAt=t+1,tl(a)}finally{Be=i,ke=s}(!n.updatedAt||n.updatedAt<=t)&&(n.updatedAt!=null&&"observers"in n?Ph(n,r):n.value=r,n.updatedAt=t)}function el(n,e,t,r=sr,s){const i={fn:n,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:ke,context:ke?ke.context:null,pure:t};return ke===null||ke!==Ih&&(ke.owned?ke.owned.push(i):ke.owned=[i]),i}function Bi(n){if(n.state===0)return;if(n.state===ji)return qi(n);if(n.suspense&&Bt(n.suspense.inFallback))return n.suspense.effects.push(n);const e=[n];for(;(n=n.owner)&&(!n.updatedAt||n.updatedAt<fo);)n.state&&e.push(n);for(let t=e.length-1;t>=0;t--)if(n=e[t],n.state===sr)Hs(n);else if(n.state===ji){const r=Rt;Rt=null,ir(()=>qi(n,e[0]),!1),Rt=r}}function ir(n,e){if(Rt)return n();let t=!1;e||(Rt=[]),wn?t=!0:wn=[],fo++;try{const r=n();return Jm(t),r}catch(r){t||(wn=null),Rt=null,tl(r)}}function Jm(n){if(Rt&&($h(Rt),Rt=null),n)return;const e=wn;wn=null,e.length&&ir(()=>Th(e),!1)}function $h(n){for(let e=0;e<n.length;e++)Bi(n[e])}function Ym(n){let e,t=0;for(e=0;e<n.length;e++){const r=n[e];r.user?n[t++]=r:Bi(r)}for(e=0;e<t;e++)Bi(n[e])}function qi(n,e){n.state=0;for(let t=0;t<n.sources.length;t+=1){const r=n.sources[t];if(r.sources){const s=r.state;s===sr?r!==e&&(!r.updatedAt||r.updatedAt<fo)&&Bi(r):s===ji&&qi(r,e)}}}function Vh(n){for(let e=0;e<n.observers.length;e+=1){const t=n.observers[e];t.state||(t.state=ji,t.pure?Rt.push(t):wn.push(t),t.observers&&Vh(t))}}function Ds(n){let e;if(n.sources)for(;n.sources.length;){const t=n.sources.pop(),r=n.sourceSlots.pop(),s=t.observers;if(s&&s.length){const i=s.pop(),a=t.observerSlots.pop();r<s.length&&(i.sourceSlots[a]=r,s[r]=i,t.observerSlots[r]=a)}}if(n.tOwned){for(e=n.tOwned.length-1;e>=0;e--)Ds(n.tOwned[e]);delete n.tOwned}if(n.owned){for(e=n.owned.length-1;e>=0;e--)Ds(n.owned[e]);n.owned=null}if(n.cleanups){for(e=n.cleanups.length-1;e>=0;e--)n.cleanups[e]();n.cleanups=null}n.state=0}function Xm(n){return n instanceof Error?n:new Error(typeof n=="string"?n:"Unknown error",{cause:n})}function tl(n,e=ke){throw Xm(n)}function _a(n){if(typeof n=="function"&&!n.length)return _a(n());if(Array.isArray(n)){const e=[];for(let t=0;t<n.length;t++){const r=_a(n[t]);Array.isArray(r)?e.push.apply(e,r):e.push(r)}return e}return n}function Zm(n,e){return function(r){let s;return q(()=>s=Bt(()=>(ke.context={...ke.context,[n]:r.value},Za(()=>r.children))),void 0),s}}const ep=Symbol("fallback");function $c(n){for(let e=0;e<n.length;e++)n[e]()}function tp(n,e,t={}){let r=[],s=[],i=[],a=0,l=e.length>1?[]:null;return mo(()=>$c(i)),()=>{let u=n()||[],h=u.length,f,p;return u[Wm],Bt(()=>{let x,S,$,V,N,C,M,O,z;if(h===0)a!==0&&($c(i),i=[],r=[],s=[],a=0,l&&(l=[])),t.fallback&&(r=[ep],s[0]=ks(U=>(i[0]=U,t.fallback())),a=1);else if(a===0){for(s=new Array(h),p=0;p<h;p++)r[p]=u[p],s[p]=ks(w);a=h}else{for($=new Array(h),V=new Array(h),l&&(N=new Array(h)),C=0,M=Math.min(a,h);C<M&&r[C]===u[C];C++);for(M=a-1,O=h-1;M>=C&&O>=C&&r[M]===u[O];M--,O--)$[O]=s[M],V[O]=i[M],l&&(N[O]=l[M]);for(x=new Map,S=new Array(O+1),p=O;p>=C;p--)z=u[p],f=x.get(z),S[p]=f===void 0?-1:f,x.set(z,p);for(f=C;f<=M;f++)z=r[f],p=x.get(z),p!==void 0&&p!==-1?($[p]=s[f],V[p]=i[f],l&&(N[p]=l[f]),p=S[p],x.set(z,p)):i[f]();for(p=C;p<h;p++)p in $?(s[p]=$[p],i[p]=V[p],l&&(l[p]=N[p],l[p](p))):s[p]=ks(w);s=s.slice(0,a=h),r=u.slice(0)}return s});function w(x){if(i[p]=x,l){const[S,$]=H(p);return l[p]=$,e(u[p],S)}return e(u[p])}}}function R(n,e){return Bt(()=>n(e||{}))}function wi(){return!0}const ya={get(n,e,t){return e===Ui?t:n.get(e)},has(n,e){return e===Ui?!0:n.has(e)},set:wi,deleteProperty:wi,getOwnPropertyDescriptor(n,e){return{configurable:!0,enumerable:!0,get(){return n.get(e)},set:wi,deleteProperty:wi}},ownKeys(n){return n.keys()}};function na(n){return(n=typeof n=="function"?n():n)?n:{}}function np(){for(let n=0,e=this.length;n<e;++n){const t=this[n]();if(t!==void 0)return t}}function va(...n){let e=!1;for(let a=0;a<n.length;a++){const l=n[a];e=e||!!l&&Ui in l,n[a]=typeof l=="function"?(e=!0,Ne(l)):l}if(Eh&&e)return new Proxy({get(a){for(let l=n.length-1;l>=0;l--){const u=na(n[l])[a];if(u!==void 0)return u}},has(a){for(let l=n.length-1;l>=0;l--)if(a in na(n[l]))return!0;return!1},keys(){const a=[];for(let l=0;l<n.length;l++)a.push(...Object.keys(na(n[l])));return[...new Set(a)]}},ya);const t={},r=Object.create(null);for(let a=n.length-1;a>=0;a--){const l=n[a];if(!l)continue;const u=Object.getOwnPropertyNames(l);for(let h=u.length-1;h>=0;h--){const f=u[h];if(f==="__proto__"||f==="constructor")continue;const p=Object.getOwnPropertyDescriptor(l,f);if(!r[f])r[f]=p.get?{enumerable:!0,configurable:!0,get:np.bind(t[f]=[p.get.bind(l)])}:p.value!==void 0?p:void 0;else{const w=t[f];w&&(p.get?w.push(p.get.bind(l)):p.value!==void 0&&w.push(()=>p.value))}}}const s={},i=Object.keys(r);for(let a=i.length-1;a>=0;a--){const l=i[a],u=r[l];u&&u.get?Object.defineProperty(s,l,u):s[l]=u?u.value:void 0}return s}function rp(n,...e){const t=e.length;if(Eh&&Ui in n){const s=t>1?e.flat():e[0],i=e.map(a=>new Proxy({get(l){return a.includes(l)?n[l]:void 0},has(l){return a.includes(l)&&l in n},keys(){return a.filter(l=>l in n)}},ya));return i.push(new Proxy({get(a){return s.includes(a)?void 0:n[a]},has(a){return s.includes(a)?!1:a in n},keys(){return Object.keys(n).filter(a=>!s.includes(a))}},ya)),i}const r=[];for(let s=0;s<=t;s++)r[s]={};for(const s of Object.getOwnPropertyNames(n)){let i=t;for(let u=0;u<e.length;u++)if(e[u].includes(s)){i=u;break}const a=Object.getOwnPropertyDescriptor(n,s);!a.get&&!a.set&&a.enumerable&&a.writable&&a.configurable?r[i][s]=a.value:Object.defineProperty(r[i],s,a)}return r}const sp=n=>`Stale read from <${n}>.`;function ut(n){const e="fallback"in n&&{fallback:()=>n.fallback};return Ne(tp(()=>n.each,n.children,e||void 0))}function Z(n){const e=n.keyed,t=Ne(()=>n.when,void 0,void 0),r=e?t:Ne(t,void 0,{equals:(s,i)=>!s==!i});return Ne(()=>{const s=r();if(s){const i=n.children;return typeof i=="function"&&i.length>0?Bt(()=>i(e?s:()=>{if(!Bt(r))throw sp("Show");return t()})):i}return n.fallback},void 0,void 0)}const ip=["allowfullscreen","async","alpha","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected","adauctionheaders","browsingtopics","credentialless","defaultchecked","defaultmuted","defaultselected","defer","disablepictureinpicture","disableremoteplayback","preservespitch","shadowrootclonable","shadowrootcustomelementregistry","shadowrootdelegatesfocus","shadowrootserializable","sharedstoragewritable"],op=new Set(["className","value","readOnly","noValidate","formNoValidate","isMap","noModule","playsInline","adAuctionHeaders","allowFullscreen","browsingTopics","defaultChecked","defaultMuted","defaultSelected","disablePictureInPicture","disableRemotePlayback","preservesPitch","shadowRootClonable","shadowRootCustomElementRegistry","shadowRootDelegatesFocus","shadowRootSerializable","sharedStorageWritable",...ip]),ap=new Set(["innerHTML","textContent","innerText","children"]),lp=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),cp=Object.assign(Object.create(null),{class:"className",novalidate:{$:"noValidate",FORM:1},formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1},adauctionheaders:{$:"adAuctionHeaders",IFRAME:1},allowfullscreen:{$:"allowFullscreen",IFRAME:1},browsingtopics:{$:"browsingTopics",IMG:1},defaultchecked:{$:"defaultChecked",INPUT:1},defaultmuted:{$:"defaultMuted",AUDIO:1,VIDEO:1},defaultselected:{$:"defaultSelected",OPTION:1},disablepictureinpicture:{$:"disablePictureInPicture",VIDEO:1},disableremoteplayback:{$:"disableRemotePlayback",AUDIO:1,VIDEO:1},preservespitch:{$:"preservesPitch",AUDIO:1,VIDEO:1},shadowrootclonable:{$:"shadowRootClonable",TEMPLATE:1},shadowrootdelegatesfocus:{$:"shadowRootDelegatesFocus",TEMPLATE:1},shadowrootserializable:{$:"shadowRootSerializable",TEMPLATE:1},sharedstoragewritable:{$:"sharedStorageWritable",IFRAME:1,IMG:1}});function up(n,e){const t=cp[n];return typeof t=="object"?t[e]?t.$:void 0:t}const hp=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),rt=n=>Ne(()=>n());function dp(n,e,t){let r=t.length,s=e.length,i=r,a=0,l=0,u=e[s-1].nextSibling,h=null;for(;a<s||l<i;){if(e[a]===t[l]){a++,l++;continue}for(;e[s-1]===t[i-1];)s--,i--;if(s===a){const f=i<r?l?t[l-1].nextSibling:t[i-l]:u;for(;l<i;)n.insertBefore(t[l++],f)}else if(i===l)for(;a<s;)(!h||!h.has(e[a]))&&e[a].remove(),a++;else if(e[a]===t[i-1]&&t[l]===e[s-1]){const f=e[--s].nextSibling;n.insertBefore(t[l++],e[a++].nextSibling),n.insertBefore(t[--i],f),e[s]=t[i]}else{if(!h){h=new Map;let p=l;for(;p<i;)h.set(t[p],p++)}const f=h.get(e[a]);if(f!=null)if(l<f&&f<i){let p=a,w=1,x;for(;++p<s&&p<i&&!((x=h.get(e[p]))==null||x!==f+w);)w++;if(w>f-l){const S=e[a];for(;l<f;)n.insertBefore(t[l++],S)}else n.replaceChild(t[l++],e[a++])}else a++;else e[a++].remove()}}}const Vc="_$DX_DELEGATE";function fp(n,e,t,r={}){let s;return ks(i=>{s=i,e===document?n():_(e,n(),e.firstChild?null:void 0,t)},r.owner),()=>{s(),e.textContent=""}}function k(n,e,t,r){let s;const i=()=>{const l=document.createElement("template");return l.innerHTML=n,l.content.firstChild},a=()=>(s||(s=i())).cloneNode(!0);return a.cloneNode=a,a}function nn(n,e=window.document){const t=e[Vc]||(e[Vc]=new Set);for(let r=0,s=n.length;r<s;r++){const i=n[r];t.has(i)||(t.add(i),e.addEventListener(i,xp))}}function Ze(n,e,t){t==null?n.removeAttribute(e):n.setAttribute(e,t)}function mp(n,e,t){t?n.setAttribute(e,""):n.removeAttribute(e)}function Ie(n,e){e==null?n.removeAttribute("class"):n.className=e}function pp(n,e,t,r){if(r)Array.isArray(t)?(n[`$$${e}`]=t[0],n[`$$${e}Data`]=t[1]):n[`$$${e}`]=t;else if(Array.isArray(t)){const s=t[0];n.addEventListener(e,t[0]=i=>s.call(n,t[1],i))}else n.addEventListener(e,t,typeof t!="function"&&t)}function gp(n,e,t={}){const r=Object.keys(e||{}),s=Object.keys(t);let i,a;for(i=0,a=s.length;i<a;i++){const l=s[i];!l||l==="undefined"||e[l]||(Nc(n,l,!1),delete t[l])}for(i=0,a=r.length;i<a;i++){const l=r[i],u=!!e[l];!l||l==="undefined"||t[l]===u||!u||(Nc(n,l,!0),t[l]=u)}return t}function _p(n,e,t){if(!e)return t?Ze(n,"style"):e;const r=n.style;if(typeof e=="string")return r.cssText=e;typeof t=="string"&&(r.cssText=t=void 0),t||(t={}),e||(e={});let s,i;for(i in t)e[i]==null&&r.removeProperty(i),delete t[i];for(i in e)s=e[i],s!==t[i]&&(r.setProperty(i,s),t[i]=s);return t}function yp(n,e={},t,r){const s={};return q(()=>s.children=Os(n,e.children,s.children)),q(()=>typeof e.ref=="function"&&vp(e.ref,n)),q(()=>bp(n,e,t,!0,s,!0)),s}function vp(n,e,t){return Bt(()=>n(e,t))}function _(n,e,t,r){if(t!==void 0&&!r&&(r=[]),typeof e!="function")return Os(n,e,r,t);q(s=>Os(n,e(),s,t),r)}function bp(n,e,t,r,s={},i=!1){e||(e={});for(const a in s)if(!(a in e)){if(a==="children")continue;s[a]=Dc(n,a,null,s[a],t,i,e)}for(const a in e){if(a==="children")continue;const l=e[a];s[a]=Dc(n,a,l,s[a],t,i,e)}}function wp(n){return n.toLowerCase().replace(/-([a-z])/g,(e,t)=>t.toUpperCase())}function Nc(n,e,t){const r=e.trim().split(/\s+/);for(let s=0,i=r.length;s<i;s++)n.classList.toggle(r[s],t)}function Dc(n,e,t,r,s,i,a){let l,u,h,f,p;if(e==="style")return _p(n,t,r);if(e==="classList")return gp(n,t,r);if(t===r)return r;if(e==="ref")i||t(n);else if(e.slice(0,3)==="on:"){const w=e.slice(3);r&&n.removeEventListener(w,r,typeof r!="function"&&r),t&&n.addEventListener(w,t,typeof t!="function"&&t)}else if(e.slice(0,10)==="oncapture:"){const w=e.slice(10);r&&n.removeEventListener(w,r,!0),t&&n.addEventListener(w,t,!0)}else if(e.slice(0,2)==="on"){const w=e.slice(2).toLowerCase(),x=hp.has(w);if(!x&&r){const S=Array.isArray(r)?r[0]:r;n.removeEventListener(w,S)}(x||t)&&(pp(n,w,t,x),x&&nn([w]))}else e.slice(0,5)==="attr:"?Ze(n,e.slice(5),t):e.slice(0,5)==="bool:"?mp(n,e.slice(5),t):(p=e.slice(0,5)==="prop:")||(h=ap.has(e))||(f=up(e,n.tagName))||(u=op.has(e))||(l=n.nodeName.includes("-")||"is"in a)?(p&&(e=e.slice(5),u=!0),e==="class"||e==="className"?Ie(n,t):l&&!u&&!h?n[wp(e)]=t:n[f||e]=t):Ze(n,lp[e]||e,t);return t}function xp(n){let e=n.target;const t=`$$${n.type}`,r=n.target,s=n.currentTarget,i=u=>Object.defineProperty(n,"target",{configurable:!0,value:u}),a=()=>{const u=e[t];if(u&&!e.disabled){const h=e[`${t}Data`];if(h!==void 0?u.call(e,h,n):u.call(e,n),n.cancelBubble)return}return e.host&&typeof e.host!="string"&&!e.host._$host&&e.contains(n.target)&&i(e.host),!0},l=()=>{for(;a()&&(e=e._$host||e.parentNode||e.host););};if(Object.defineProperty(n,"currentTarget",{configurable:!0,get(){return e||document}}),n.composedPath){const u=n.composedPath();i(u[0]);for(let h=0;h<u.length-2&&(e=u[h],!!a());h++){if(e._$host){e=e._$host,l();break}if(e.parentNode===s)break}}else l();i(r)}function Os(n,e,t,r,s){for(;typeof t=="function";)t=t();if(e===t)return t;const i=typeof e,a=r!==void 0;if(n=a&&t[0]&&t[0].parentNode||n,i==="string"||i==="number"){if(i==="number"&&(e=e.toString(),e===t))return t;if(a){let l=t[0];l&&l.nodeType===3?l.data!==e&&(l.data=e):l=document.createTextNode(e),t=$r(n,t,r,l)}else t!==""&&typeof t=="string"?t=n.firstChild.data=e:t=n.textContent=e}else if(e==null||i==="boolean")t=$r(n,t,r);else{if(i==="function")return q(()=>{let l=e();for(;typeof l=="function";)l=l();t=Os(n,l,t,r)}),()=>t;if(Array.isArray(e)){const l=[],u=t&&Array.isArray(t);if(ba(l,e,t,s))return q(()=>t=Os(n,l,t,r,!0)),()=>t;if(l.length===0){if(t=$r(n,t,r),a)return t}else u?t.length===0?Oc(n,l,r):dp(n,t,l):(t&&$r(n),Oc(n,l));t=l}else if(e.nodeType){if(Array.isArray(t)){if(a)return t=$r(n,t,r,e);$r(n,t,null,e)}else t==null||t===""||!n.firstChild?n.appendChild(e):n.replaceChild(e,n.firstChild);t=e}}return t}function ba(n,e,t,r){let s=!1;for(let i=0,a=e.length;i<a;i++){let l=e[i],u=t&&t[n.length],h;if(!(l==null||l===!0||l===!1))if((h=typeof l)=="object"&&l.nodeType)n.push(l);else if(Array.isArray(l))s=ba(n,l,u)||s;else if(h==="function")if(r){for(;typeof l=="function";)l=l();s=ba(n,Array.isArray(l)?l:[l],Array.isArray(u)?u:[u])||s}else n.push(l),s=!0;else{const f=String(l);u&&u.nodeType===3&&u.data===f?n.push(u):n.push(document.createTextNode(f))}}return s}function Oc(n,e,t=null){for(let r=0,s=e.length;r<s;r++)n.insertBefore(e[r],t)}function $r(n,e,t,r){if(t===void 0)return n.textContent="";const s=r||document.createTextNode("");if(e.length){let i=!1;for(let a=e.length-1;a>=0;a--){const l=e[a];if(s!==l){const u=l.parentNode===n;!i&&!a?u?n.replaceChild(s,l):n.insertBefore(s,t):u&&l.remove()}else i=!0}}else n.insertBefore(s,t);return[s]}const Ep=!1;function Nh(){let n=new Set;function e(s){return n.add(s),()=>n.delete(s)}let t=!1;function r(s,i){if(t)return!(t=!1);const a={to:s,options:i,defaultPrevented:!1,preventDefault:()=>a.defaultPrevented=!0};for(const l of n)l.listener({...a,from:l.location,retry:u=>{u&&(t=!0),l.navigate(s,{...i,resolve:!1})}});return!a.defaultPrevented}return{subscribe:e,confirm:r}}let wa;function nl(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),wa=window.history.state._depth}nl();function Tp(n){return{...n,_depth:window.history.state&&window.history.state._depth}}function Ip(n,e){let t=!1;return()=>{const r=wa;nl();const s=r==null?null:wa-r;if(t){t=!1;return}s&&e(s)?(t=!0,window.history.go(-s)):n()}}const Ap=/^(?:[a-z0-9]+:)?\/\//i,Sp=/^\/+|(\/)\/+$/g,Dh="http://sr";function vr(n,e=!1){const t=n.replace(Sp,"$1");return t?e||/^[?#]/.test(t)?t:"/"+t:""}function Ci(n,e,t){if(Ap.test(e))return;const r=vr(n),s=t&&vr(t);let i="";return!s||e.startsWith("/")?i=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?i=r+s:i=s,(i||"/")+vr(e,!i)}function Cp(n,e){if(n==null)throw new Error(e);return n}function kp(n,e){return vr(n).replace(/\/*(\*.*)?$/g,"")+vr(e)}function Oh(n){const e={};return n.searchParams.forEach((t,r)=>{e[r]=t}),e}function Rp(n,e,t){const[r,s]=n.split("/*",2),i=r.split("/").filter(Boolean),a=i.length;return l=>{const u=l.split("/").filter(Boolean),h=u.length-a;if(h<0||h>0&&s===void 0&&!e)return null;const f={path:a?"":"/",params:{}},p=w=>t===void 0?void 0:t[w];for(let w=0;w<a;w++){const x=i[w],S=u[w],$=x[0]===":",V=$?x.slice(1):x;if($&&ra(S,p(V)))f.params[V]=S;else if($||!ra(S,x))return null;f.path+=`/${S}`}if(s){const w=h?u.slice(-h).join("/"):"";if(ra(w,p(s)))f.params[s]=w;else return null}return f}}function ra(n,e){const t=r=>r.localeCompare(n,void 0,{sensitivity:"base"})===0;return e===void 0?!0:typeof e=="string"?t(e):typeof e=="function"?e(n):Array.isArray(e)?e.some(t):e instanceof RegExp?e.test(n):!1}function Pp(n){const[e,t]=n.pattern.split("/*",2),r=e.split("/").filter(Boolean);return r.reduce((s,i)=>s+(i.startsWith(":")?2:3),r.length-(t===void 0?0:1))}function Lh(n){const e=new Map,t=Sh();return new Proxy({},{get(r,s){return e.has(s)||Ch(t,()=>e.set(s,Ne(()=>n()[s]))),e.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(n())}})}function $p(n,e){const t=new URLSearchParams(n);Object.entries(e).forEach(([s,i])=>{i==null||i===""?t.delete(s):t.set(s,String(i))});const r=t.toString();return r?`?${r}`:""}function Mh(n){let e=/(\/?\:[^\/]+)\?/.exec(n);if(!e)return[n];let t=n.slice(0,e.index),r=n.slice(e.index+e[0].length);const s=[t,t+=e[1]];for(;e=/^(\/\:[^\/]+)\?/.exec(r);)s.push(t+=e[1]),r=r.slice(e[0].length);return Mh(r).reduce((i,a)=>[...i,...s.map(l=>l+a)],[])}const Vp=100,Uh=kh(),rl=kh(),Gs=()=>Cp(Xa(Uh),"<A> and 'use' router primitives can be only used inside a Route."),Np=()=>Xa(rl)||Gs().base,Dp=n=>{const e=Np();return Ne(()=>e.resolvePath(n()))},Op=n=>{const e=Gs();return Ne(()=>{const t=n();return t!==void 0?e.renderPath(t):t})},gn=()=>Gs().navigatorFactory(),Fh=()=>Gs().location,jh=()=>Gs().params,Lp=()=>{const n=Fh(),e=gn(),t=(r,s)=>{const i=Bt(()=>n.pathname+$p(n.search,r)+n.hash);e(i,{scroll:!1,resolve:!1,...s})};return[n.query,t]};function Mp(n,e=""){const{component:t,load:r,children:s,info:i}=n,a=!s||Array.isArray(s)&&!s.length,l={key:n,component:t,load:r,info:i};return Bh(n.path).reduce((u,h)=>{for(const f of Mh(h)){const p=kp(e,f);let w=a?p:p.split("/*",1)[0];w=w.split("/").map(x=>x.startsWith(":")||x.startsWith("*")?x:encodeURIComponent(x)).join("/"),u.push({...l,originalPath:h,pattern:w,matcher:Rp(w,!a,n.matchFilters)})}return u},[])}function Up(n,e=0){return{routes:n,score:Pp(n[n.length-1])*1e4-e,matcher(t){const r=[];for(let s=n.length-1;s>=0;s--){const i=n[s],a=i.matcher(t);if(!a)return null;r.unshift({...a,route:i})}return r}}}function Bh(n){return Array.isArray(n)?n:[n]}function qh(n,e="",t=[],r=[]){const s=Bh(n);for(let i=0,a=s.length;i<a;i++){const l=s[i];if(l&&typeof l=="object"){l.hasOwnProperty("path")||(l.path="");const u=Mp(l,e);for(const h of u){t.push(h);const f=Array.isArray(l.children)&&l.children.length===0;if(l.children&&!f)qh(l.children,h.pattern,t,r);else{const p=Up([...t],r.length);r.push(p)}t.pop()}}}return t.length?r:r.sort((i,a)=>a.score-i.score)}function sa(n,e){for(let t=0,r=n.length;t<r;t++){const s=n[t].matcher(e);if(s)return s}return[]}function Fp(n,e){const t=new URL(Dh),r=Ne(u=>{const h=n();try{return new URL(h,t)}catch{return console.error(`Invalid path ${h}`),u}},t,{equals:(u,h)=>u.href===h.href}),s=Ne(()=>r().pathname),i=Ne(()=>r().search,!0),a=Ne(()=>r().hash),l=()=>"";return{get pathname(){return s()},get search(){return i()},get hash(){return a()},get state(){return e()},get key(){return l()},query:Lh(Ya(i,()=>Oh(r())))}}let _r;function jp(){return _r}function Bp(n,e,t,r={}){const{signal:[s,i],utils:a={}}=n,l=a.parsePath||(m=>m),u=a.renderPath||(m=>m),h=a.beforeLeave||Nh(),f=Ci("",r.base||"");if(f===void 0)throw new Error(`${f} is not a valid base path`);f&&!s().value&&i({value:f,replace:!0,scroll:!1});const[p,w]=H(!1);let x;const S=(m,j)=>{j.value===$()&&j.state===N()||(x===void 0&&w(!0),_r=m,x=j,Km(()=>{x===j&&(V(x.value),C(x.state),z[1]([]))}).finally(()=>{x===j&&Gm(()=>{_r=void 0,m==="navigate"&&E(x),w(!1),x=void 0})}))},[$,V]=H(s().value),[N,C]=H(s().state),M=Fp($,N),O=[],z=H([]),U=Ne(()=>typeof r.transformUrl=="function"?sa(e(),r.transformUrl(M.pathname)):sa(e(),M.pathname)),b=Lh(()=>{const m=U(),j={};for(let re=0;re<m.length;re++)Object.assign(j,m[re].params);return j}),y={pattern:f,path:()=>f,outlet:()=>null,resolvePath(m){return Ci(f,m)}};return q(Ya(s,m=>S("native",m),{defer:!0})),{base:y,location:M,params:b,isRouting:p,renderPath:u,parsePath:l,navigatorFactory:T,matches:U,beforeLeave:h,preloadRoute:I,singleFlight:r.singleFlight===void 0?!0:r.singleFlight,submissions:z};function v(m,j,re){Bt(()=>{if(typeof j=="number"){j&&(a.go?a.go(j):console.warn("Router integration does not support relative routing"));return}const{replace:we,resolve:Ce,scroll:De,state:Fe}={replace:!1,resolve:!0,scroll:!0,...re},Le=Ce?m.resolvePath(j):Ci("",j);if(Le===void 0)throw new Error(`Path '${j}' is not a routable path`);if(O.length>=Vp)throw new Error("Too many redirects");const ze=$();(Le!==ze||Fe!==N())&&(Ep||h.confirm(Le,re)&&(O.push({value:ze,replace:we,scroll:De,state:N()}),S("navigate",{value:Le,state:Fe})))})}function T(m){return m=m||Xa(rl)||y,(j,re)=>v(m,j,re)}function E(m){const j=O[0];j&&(i({...m,replace:j.replace,scroll:j.scroll}),O.length=0)}function I(m,j={}){const re=sa(e(),m.pathname),we=_r;_r="preload";for(let Ce in re){const{route:De,params:Fe}=re[Ce];De.component&&De.component.preload&&De.component.preload();const{load:Le}=De;j.preloadData&&Le&&Ch(t(),()=>Le({params:Fe,location:{pathname:m.pathname,search:m.search,hash:m.hash,query:Oh(m),state:null,key:""},intent:"preload"}))}_r=we}}function qp(n,e,t,r){const{base:s,location:i,params:a}=n,{pattern:l,component:u,load:h}=r().route,f=Ne(()=>r().path);u&&u.preload&&u.preload();const p=h?h({params:a,location:i,intent:_r||"initial"}):void 0;return{parent:e,pattern:l,path:f,outlet:()=>u?R(u,{params:a,location:i,data:p,get children(){return t()}}):t(),resolvePath(x){return Ci(s.path(),x,f())}}}const zp=n=>e=>{const{base:t}=e,r=Za(()=>e.children),s=Ne(()=>qh(r(),e.base||""));let i;const a=Bp(n,s,()=>i,{base:t,singleFlight:e.singleFlight,transformUrl:e.transformUrl});return n.create&&n.create(a),R(Uh.Provider,{value:a,get children(){return R(Wp,{routerState:a,get root(){return e.root},get load(){return e.rootLoad},get children(){return[rt(()=>(i=Sh())&&null),R(Hp,{routerState:a,get branches(){return s()}})]}})}})};function Wp(n){const e=n.routerState.location,t=n.routerState.params,r=Ne(()=>n.load&&Bt(()=>{n.load({params:t,location:e,intent:jp()||"initial"})}));return R(Z,{get when(){return n.root},keyed:!0,get fallback(){return n.children},children:s=>R(s,{params:t,location:e,get data(){return r()},get children(){return n.children}})})}function Hp(n){const e=[];let t;const r=Ne(Ya(n.routerState.matches,(s,i,a)=>{let l=i&&s.length===i.length;const u=[];for(let h=0,f=s.length;h<f;h++){const p=i&&i[h],w=s[h];a&&p&&w.route.key===p.route.key?u[h]=a[h]:(l=!1,e[h]&&e[h](),ks(x=>{e[h]=x,u[h]=qp(n.routerState,u[h-1]||n.routerState.base,Lc(()=>r()[h+1]),()=>n.routerState.matches()[h])}))}return e.splice(s.length).forEach(h=>h()),a&&l?a:(t=u[0],u)}));return Lc(()=>r()&&t)()}const Lc=n=>()=>R(Z,{get when(){return n()},keyed:!0,children:e=>R(rl.Provider,{value:e,get children(){return e.outlet()}})}),on=n=>{const e=Za(()=>n.children);return va(n,{get children(){return e()}})};function Gp([n,e],t,r){return[n,r?s=>e(r(s)):e]}function Kp(n){if(n==="#")return null;try{return document.querySelector(n)}catch{return null}}function Qp(n){let e=!1;const t=s=>typeof s=="string"?{value:s}:s,r=Gp(H(t(n.get()),{equals:(s,i)=>s.value===i.value&&s.state===i.state}),void 0,s=>(!e&&n.set(s),s));return n.init&&mo(n.init((s=n.get())=>{e=!0,r[1](t(s)),e=!1})),zp({signal:r,create:n.create,utils:n.utils})}function Jp(n,e,t){return n.addEventListener(e,t),()=>n.removeEventListener(e,t)}function Yp(n,e){const t=Kp(`#${n}`);t?t.scrollIntoView():e&&window.scrollTo(0,0)}const Xp=new Map;function Zp(n=!0,e=!1,t="/_server",r){return s=>{const i=s.base.path(),a=s.navigatorFactory(s.base);let l={};function u($){return $.namespaceURI==="http://www.w3.org/2000/svg"}function h($){if($.defaultPrevented||$.button!==0||$.metaKey||$.altKey||$.ctrlKey||$.shiftKey)return;const V=$.composedPath().find(U=>U instanceof Node&&U.nodeName.toUpperCase()==="A");if(!V||e&&!V.hasAttribute("link"))return;const N=u(V),C=N?V.href.baseVal:V.href;if((N?V.target.baseVal:V.target)||!C&&!V.hasAttribute("state"))return;const O=(V.getAttribute("rel")||"").split(/\s+/);if(V.hasAttribute("download")||O&&O.includes("external"))return;const z=N?new URL(C,document.baseURI):new URL(C);if(!(z.origin!==window.location.origin||i&&z.pathname&&!z.pathname.toLowerCase().startsWith(i.toLowerCase())))return[V,z]}function f($){const V=h($);if(!V)return;const[N,C]=V,M=s.parsePath(C.pathname+C.search+C.hash),O=N.getAttribute("state");$.preventDefault(),a(M,{resolve:!1,replace:N.hasAttribute("replace"),scroll:!N.hasAttribute("noscroll"),state:O&&JSON.parse(O)})}function p($){const V=h($);if(!V)return;const[N,C]=V;typeof r=="function"&&(C.pathname=r(C.pathname)),l[C.pathname]||s.preloadRoute(C,{preloadData:N.getAttribute("preload")!=="false"})}function w($){const V=h($);if(!V)return;const[N,C]=V;typeof r=="function"&&(C.pathname=r(C.pathname)),!l[C.pathname]&&(l[C.pathname]=setTimeout(()=>{s.preloadRoute(C,{preloadData:N.getAttribute("preload")!=="false"}),delete l[C.pathname]},200))}function x($){const V=h($);if(!V)return;const[,N]=V;typeof r=="function"&&(N.pathname=r(N.pathname)),l[N.pathname]&&(clearTimeout(l[N.pathname]),delete l[N.pathname])}function S($){if($.defaultPrevented)return;let V=$.submitter&&$.submitter.hasAttribute("formaction")?$.submitter.getAttribute("formaction"):$.target.getAttribute("action");if(!V)return;if(!V.startsWith("https://action/")){const C=new URL(V,Dh);if(V=s.parsePath(C.pathname+C.search),!V.startsWith(t))return}if($.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const N=Xp.get(V);if(N){$.preventDefault();const C=new FormData($.target);$.submitter&&$.submitter.name&&C.append($.submitter.name,$.submitter.value),N.call({r:s,f:$.target},C)}}nn(["click","submit"]),document.addEventListener("click",f),n&&(document.addEventListener("mouseover",w),document.addEventListener("mouseout",x),document.addEventListener("focusin",p),document.addEventListener("touchstart",p)),document.addEventListener("submit",S),mo(()=>{document.removeEventListener("click",f),n&&(document.removeEventListener("mouseover",w),document.removeEventListener("mouseout",x),document.removeEventListener("focusin",p),document.removeEventListener("touchstart",p)),document.removeEventListener("submit",S)})}}function eg(n){const e=()=>{const r=window.location.pathname+window.location.search;return{value:n.transformUrl?n.transformUrl(r)+window.location.hash:r+window.location.hash,state:window.history.state}},t=Nh();return Qp({get:e,set({value:r,replace:s,scroll:i,state:a}){s?window.history.replaceState(Tp(a),"",r):window.history.pushState(a,"",r),Yp(decodeURIComponent(window.location.hash.slice(1)),i),nl()},init:r=>Jp(window,"popstate",Ip(r,s=>{if(s&&s<0)return!t.confirm(s);{const i=e();return!t.confirm(i.value,{state:i.state})}})),create:Zp(n.preload,n.explicitLinks,n.actionBase,n.transformUrl),utils:{go:r=>window.history.go(r),beforeLeave:t}})(n)}var tg=k("<a>");function _e(n){n=va({inactiveClass:"inactive",activeClass:"active"},n);const[,e]=rp(n,["href","state","class","activeClass","inactiveClass","end"]),t=Dp(()=>n.href),r=Op(t),s=Fh(),i=Ne(()=>{const a=t();if(a===void 0)return[!1,!1];const l=vr(a.split(/[?#]/,1)[0]).toLowerCase(),u=vr(s.pathname).toLowerCase();return[n.end?l===u:u.startsWith(l+"/")||u===l,l===u]});return(()=>{var a=tg();return yp(a,va(e,{get href(){return r()||n.href},get state(){return JSON.stringify(n.state)},get classList(){return{...n.class&&{[n.class]:!0},[n.inactiveClass]:!i()[0],[n.activeClass]:i()[0],...e.classList}},link:"",get"aria-current"(){return i()[1]?"page":void 0}}),!1),a})()}const ng=()=>{};var Mc={};/**
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
 */const zh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},rg=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Wh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,u=s+2<n.length,h=u?n[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let w=(l&15)<<2|h>>6,x=h&63;u||(x=64,a||(w=64)),r.push(t[f],t[p],t[w],t[x])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(zh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):rg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new sg;const w=i<<2|l>>4;if(r.push(w),h!==64){const x=l<<4&240|h>>2;if(r.push(x),p!==64){const S=h<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class sg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ig=function(n){const e=zh(n);return Wh.encodeByteArray(e,!0)},zi=function(n){return ig(n).replace(/\./g,"")},Hh=function(n){try{return Wh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function og(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ag=()=>og().__FIREBASE_DEFAULTS__,lg=()=>{if(typeof process>"u"||typeof Mc>"u")return;const n=Mc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},cg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Hh(n[1]);return e&&JSON.parse(e)},po=()=>{try{return ng()||ag()||lg()||cg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Gh=n=>po()?.emulatorHosts?.[n],ug=n=>{const e=Gh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Kh=()=>po()?.config,Qh=n=>po()?.[`_${n}`];/**
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
 */class hg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function dg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[zi(JSON.stringify(t)),zi(JSON.stringify(a)),""].join(".")}/**
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
 */function Pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pt())}function mg(){const n=po()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function pg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function gg(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function _g(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yg(){const n=Pt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function vg(){return!mg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function bg(){try{return typeof indexedDB=="object"}catch{return!1}}function wg(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
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
 */const xg="FirebaseError";class Rn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=xg,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ks.prototype.create)}}class Ks{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Eg(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Rn(s,l,r)}}function Eg(n,e){return n.replace(Tg,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Tg=/\{\$([^}]+)}/g;function Ig(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Tn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Uc(i)&&Uc(a)){if(!Tn(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Uc(n){return n!==null&&typeof n=="object"}/**
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
 */function Qs(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Es(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ts(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Ag(n,e){const t=new Sg(n,e);return t.subscribe.bind(t)}class Sg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Cg(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=ia),s.error===void 0&&(s.error=ia),s.complete===void 0&&(s.complete=ia);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Cg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ia(){}/**
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
 */function Et(n){return n&&n._delegate?n._delegate:n}/**
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
 */function Js(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Jh(n){return(await fetch(n,{credentials:"include"})).ok}class wr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class kg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new hg;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Pg(e))try{this.getOrInitializeService({instanceIdentifier:gr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=gr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gr){return this.instances.has(e)}getOptions(e=gr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Rg(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=gr){return this.component?this.component.multipleInstances?e:gr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rg(n){return n===gr?void 0:n}function Pg(n){return n.instantiationMode==="EAGER"}/**
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
 */class $g{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new kg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var be;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(be||(be={}));const Vg={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},Ng=be.INFO,Dg={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},Og=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Dg[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sl{constructor(e){this.name=e,this._logLevel=Ng,this._logHandler=Og,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}const Lg=(n,e)=>e.some(t=>n instanceof t);let Fc,jc;function Mg(){return Fc||(Fc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ug(){return jc||(jc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yh=new WeakMap,xa=new WeakMap,Xh=new WeakMap,oa=new WeakMap,il=new WeakMap;function Fg(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Hn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Yh.set(t,n)}).catch(()=>{}),il.set(e,n),e}function jg(n){if(xa.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});xa.set(n,e)}let Ea={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return xa.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Xh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Hn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Bg(n){Ea=n(Ea)}function qg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(aa(this),e,...t);return Xh.set(r,e.sort?e.sort():[e]),Hn(r)}:Ug().includes(n)?function(...e){return n.apply(aa(this),e),Hn(Yh.get(this))}:function(...e){return Hn(n.apply(aa(this),e))}}function zg(n){return typeof n=="function"?qg(n):(n instanceof IDBTransaction&&jg(n),Lg(n,Mg())?new Proxy(n,Ea):n)}function Hn(n){if(n instanceof IDBRequest)return Fg(n);if(oa.has(n))return oa.get(n);const e=zg(n);return e!==n&&(oa.set(n,e),il.set(e,n)),e}const aa=n=>il.get(n);function Wg(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=Hn(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Hn(a.result),u.oldVersion,u.newVersion,Hn(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Hg=["get","getKey","getAll","getAllKeys","count"],Gg=["put","add","delete","clear"],la=new Map;function Bc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(la.get(e))return la.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Gg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Hg.includes(t)))return;const i=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),s&&u.done]))[0]};return la.set(e,i),i}Bg(n=>({...n,get:(e,t,r)=>Bc(e,t)||n.get(e,t,r),has:(e,t)=>!!Bc(e,t)||n.has(e,t)}));/**
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
 */class Kg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Qg(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Qg(n){return n.getComponent()?.type==="VERSION"}const Ta="@firebase/app",qc="0.14.12";/**
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
 */const In=new sl("@firebase/app"),Jg="@firebase/app-compat",Yg="@firebase/analytics-compat",Xg="@firebase/analytics",Zg="@firebase/app-check-compat",e_="@firebase/app-check",t_="@firebase/auth",n_="@firebase/auth-compat",r_="@firebase/database",s_="@firebase/data-connect",i_="@firebase/database-compat",o_="@firebase/functions",a_="@firebase/functions-compat",l_="@firebase/installations",c_="@firebase/installations-compat",u_="@firebase/messaging",h_="@firebase/messaging-compat",d_="@firebase/performance",f_="@firebase/performance-compat",m_="@firebase/remote-config",p_="@firebase/remote-config-compat",g_="@firebase/storage",__="@firebase/storage-compat",y_="@firebase/firestore",v_="@firebase/ai",b_="@firebase/firestore-compat",w_="firebase",x_="12.13.0";/**
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
 */const Ia="[DEFAULT]",E_={[Ta]:"fire-core",[Jg]:"fire-core-compat",[Xg]:"fire-analytics",[Yg]:"fire-analytics-compat",[e_]:"fire-app-check",[Zg]:"fire-app-check-compat",[t_]:"fire-auth",[n_]:"fire-auth-compat",[r_]:"fire-rtdb",[s_]:"fire-data-connect",[i_]:"fire-rtdb-compat",[o_]:"fire-fn",[a_]:"fire-fn-compat",[l_]:"fire-iid",[c_]:"fire-iid-compat",[u_]:"fire-fcm",[h_]:"fire-fcm-compat",[d_]:"fire-perf",[f_]:"fire-perf-compat",[m_]:"fire-rc",[p_]:"fire-rc-compat",[g_]:"fire-gcs",[__]:"fire-gcs-compat",[y_]:"fire-fst",[b_]:"fire-fst-compat",[v_]:"fire-vertex","fire-js":"fire-js",[w_]:"fire-js-all"};/**
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
 */const Wi=new Map,T_=new Map,Aa=new Map;function zc(n,e){try{n.container.addComponent(e)}catch(t){In.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Gr(n){const e=n.name;if(Aa.has(e))return In.debug(`There were multiple attempts to register component ${e}.`),!1;Aa.set(e,n);for(const t of Wi.values())zc(t,n);for(const t of T_.values())zc(t,n);return!0}function ol(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function qt(n){return n==null?!1:n.settings!==void 0}/**
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
 */const I_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gn=new Ks("app","Firebase",I_);/**
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
 */class A_{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gn.create("app-deleted",{appName:this._name})}}/**
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
 */const ns=x_;function Zh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Ia,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Gn.create("bad-app-name",{appName:String(s)});if(t||(t=Kh()),!t)throw Gn.create("no-options");const i=Wi.get(s);if(i){if(Tn(t,i.options)&&Tn(r,i.config))return i;throw Gn.create("duplicate-app",{appName:s})}const a=new $g(s);for(const u of Aa.values())a.addComponent(u);const l=new A_(t,r,a);return Wi.set(s,l),l}function ed(n=Ia){const e=Wi.get(n);if(!e&&n===Ia&&Kh())return Zh();if(!e)throw Gn.create("no-app",{appName:n});return e}function Kn(n,e,t){let r=E_[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),In.warn(a.join(" "));return}Gr(new wr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const S_="firebase-heartbeat-database",C_=1,Ls="firebase-heartbeat-store";let ca=null;function td(){return ca||(ca=Wg(S_,C_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ls)}catch(t){console.warn(t)}}}}).catch(n=>{throw Gn.create("idb-open",{originalErrorMessage:n.message})})),ca}async function k_(n){try{const t=(await td()).transaction(Ls),r=await t.objectStore(Ls).get(nd(n));return await t.done,r}catch(e){if(e instanceof Rn)In.warn(e.message);else{const t=Gn.create("idb-get",{originalErrorMessage:e?.message});In.warn(t.message)}}}async function Wc(n,e){try{const r=(await td()).transaction(Ls,"readwrite");await r.objectStore(Ls).put(e,nd(n)),await r.done}catch(t){if(t instanceof Rn)In.warn(t.message);else{const r=Gn.create("idb-set",{originalErrorMessage:t?.message});In.warn(r.message)}}}function nd(n){return`${n.name}!${n.options.appId}`}/**
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
 */const R_=1024,P_=30;class $_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new N_(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Hc();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>P_){const s=D_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){In.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Hc(),{heartbeatsToSend:t,unsentEntries:r}=V_(this._heartbeatsCache.heartbeats),s=zi(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return In.warn(e),""}}}function Hc(){return new Date().toISOString().substring(0,10)}function V_(n,e=R_){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Gc(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Gc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class N_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bg()?wg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await k_(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Wc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Wc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Gc(n){return zi(JSON.stringify({version:2,heartbeats:n})).length}function D_(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function O_(n){Gr(new wr("platform-logger",e=>new Kg(e),"PRIVATE")),Gr(new wr("heartbeat",e=>new $_(e),"PRIVATE")),Kn(Ta,qc,n),Kn(Ta,qc,"esm2020"),Kn("fire-js","")}O_("");function rd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const L_=rd,sd=new Ks("auth","Firebase",rd());/**
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
 */const Hi=new sl("@firebase/auth");function M_(n,...e){Hi.logLevel<=be.WARN&&Hi.warn(`Auth (${ns}): ${n}`,...e)}function ki(n,...e){Hi.logLevel<=be.ERROR&&Hi.error(`Auth (${ns}): ${n}`,...e)}/**
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
 */function Zt(n,...e){throw al(n,...e)}function ln(n,...e){return al(n,...e)}function id(n,e,t){const r={...L_(),[e]:t};return new Ks("auth","Firebase",r).create(e,{appName:n.name})}function xn(n){return id(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function al(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return sd.create(n,...e)}function le(n,e,...t){if(!n)throw al(e,...t)}function yn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ki(e),new Error(e)}function An(n,e){n||yn(e)}/**
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
 */function Sa(){return typeof self<"u"&&self.location?.href||""}function U_(){return Kc()==="http:"||Kc()==="https:"}function Kc(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function F_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(U_()||gg()||"connection"in navigator)?navigator.onLine:!0}function j_(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Ys{constructor(e,t){this.shortDelay=e,this.longDelay=t,An(t>e,"Short delay should be less than long delay!"),this.isMobile=fg()||_g()}get(){return F_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ll(n,e){An(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class od{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const B_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const q_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],z_=new Ys(3e4,6e4);function Pn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function $n(n,e,t,r,s={}){return ad(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=Qs({key:n.config.apiKey,...a}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:u,...i};return pg()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&Js(n.emulatorConfig.host)&&(h.credentials="include"),od.fetch()(await ld(n,n.config.apiHost,t,l),h)})}async function ad(n,e,t){n._canInitEmulator=!1;const r={...B_,...e};try{const s=new H_(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw xi(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw xi(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw xi(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw xi(n,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw id(n,f,h);Zt(n,f)}}catch(s){if(s instanceof Rn)throw s;Zt(n,"network-request-failed",{message:String(s)})}}async function Xs(n,e,t,r,s={}){const i=await $n(n,e,t,r,s);return"mfaPendingCredential"in i&&Zt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function ld(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?ll(n.config,s):`${n.config.apiScheme}://${s}`;return q_.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function W_(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class H_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ln(this.auth,"network-request-failed")),z_.get())})}}function xi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=ln(n,e,r);return s.customData._tokenResponse=t,s}function Qc(n){return n!==void 0&&n.enterprise!==void 0}class G_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return W_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function K_(n,e){return $n(n,"GET","/v2/recaptchaConfig",Pn(n,e))}/**
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
 */async function Q_(n,e){return $n(n,"POST","/v1/accounts:delete",e)}async function Gi(n,e){return $n(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Rs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function J_(n,e=!1){const t=Et(n),r=await t.getIdToken(e),s=cl(r);le(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i?.sign_in_provider;return{claims:s,token:r,authTime:Rs(ua(s.auth_time)),issuedAtTime:Rs(ua(s.iat)),expirationTime:Rs(ua(s.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function ua(n){return Number(n)*1e3}function cl(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ki("JWT malformed, contained fewer than 3 sections"),null;try{const s=Hh(t);return s?JSON.parse(s):(ki("Failed to decode base64 JWT payload"),null)}catch(s){return ki("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Jc(n){const e=cl(n);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ms(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Rn&&Y_(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Y_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class X_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ca{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Rs(this.lastLoginAt),this.creationTime=Rs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ki(n){const e=n.auth,t=await n.getIdToken(),r=await Ms(n,Gi(e,{idToken:t}));le(r?.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=s.providerUserInfo?.length?cd(s.providerUserInfo):[],a=ey(n.providerData,i),l=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!a?.length,h=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ca(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,f)}async function Z_(n){const e=Et(n);await Ki(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ey(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function cd(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function ty(n,e){const t=await ad(n,{},async()=>{const r=Qs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await ld(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return n.emulatorConfig&&Js(n.emulatorConfig.host)&&(u.credentials="include"),od.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ny(n,e){return $n(n,"POST","/v2/accounts:revokeToken",Pn(n,e))}/**
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
 */class Fr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Jc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){le(e.length!==0,"internal-error");const t=Jc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(le(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await ty(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Fr;return r&&(le(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(le(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(le(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fr,this.toJSON())}_performRefresh(){return yn("not implemented")}}/**
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
 */function Fn(n,e){le(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Yt{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new X_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ca(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Ms(this,this.stsTokenManager.getToken(this.auth,e));return le(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return J_(this,e)}reload(){return Z_(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Yt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ki(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qt(this.auth.app))return Promise.reject(xn(this.auth));const e=await this.getIdToken();return await Ms(this,Q_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,l=t.tenantId??void 0,u=t._redirectEventId??void 0,h=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:p,emailVerified:w,isAnonymous:x,providerData:S,stsTokenManager:$}=t;le(p&&$,e,"internal-error");const V=Fr.fromJSON(this.name,$);le(typeof p=="string",e,"internal-error"),Fn(r,e.name),Fn(s,e.name),le(typeof w=="boolean",e,"internal-error"),le(typeof x=="boolean",e,"internal-error"),Fn(i,e.name),Fn(a,e.name),Fn(l,e.name),Fn(u,e.name),Fn(h,e.name),Fn(f,e.name);const N=new Yt({uid:p,auth:e,email:s,emailVerified:w,displayName:r,isAnonymous:x,photoURL:a,phoneNumber:i,tenantId:l,stsTokenManager:V,createdAt:h,lastLoginAt:f});return S&&Array.isArray(S)&&(N.providerData=S.map(C=>({...C}))),u&&(N._redirectEventId=u),N}static async _fromIdTokenResponse(e,t,r=!1){const s=new Fr;s.updateFromServerResponse(t);const i=new Yt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ki(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];le(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?cd(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!i?.length,l=new Fr;l.updateFromIdToken(r);const u=new Yt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ca(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(u,h),u}}/**
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
 */const Yc=new Map;function vn(n){An(n instanceof Function,"Expected a class definition");let e=Yc.get(n);return e?(An(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Yc.set(n,e),e)}/**
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
 */class ud{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ud.type="NONE";const Xc=ud;/**
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
 */function Ri(n,e,t){return`firebase:${n}:${e}:${t}`}class jr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ri(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ri("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Gi(this.auth,{idToken:e}).catch(()=>{});return t?Yt._fromGetAccountInfoResponse(this.auth,t,e):null}return Yt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new jr(vn(Xc),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||vn(Xc);const a=Ri(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const f=await h._get(a);if(f){let p;if(typeof f=="string"){const w=await Gi(e,{idToken:f}).catch(()=>{});if(!w)break;p=await Yt._fromGetAccountInfoResponse(e,w,f)}else p=Yt._fromJSON(e,f);h!==i&&(l=p),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new jr(i,e,r):(i=u[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new jr(i,e,r))}}/**
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
 */function Zc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(md(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gd(e))return"Blackberry";if(_d(e))return"Webos";if(dd(e))return"Safari";if((e.includes("chrome/")||fd(e))&&!e.includes("edge/"))return"Chrome";if(pd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function hd(n=Pt()){return/firefox\//i.test(n)}function dd(n=Pt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fd(n=Pt()){return/crios\//i.test(n)}function md(n=Pt()){return/iemobile/i.test(n)}function pd(n=Pt()){return/android/i.test(n)}function gd(n=Pt()){return/blackberry/i.test(n)}function _d(n=Pt()){return/webos/i.test(n)}function ul(n=Pt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ry(n=Pt()){return ul(n)&&!!window.navigator?.standalone}function sy(){return yg()&&document.documentMode===10}function yd(n=Pt()){return ul(n)||pd(n)||_d(n)||gd(n)||/windows phone/i.test(n)||md(n)}/**
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
 */function vd(n,e=[]){let t;switch(n){case"Browser":t=Zc(Pt());break;case"Worker":t=`${Zc(Pt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ns}/${r}`}/**
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
 */class iy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,l)=>{try{const u=e(i);a(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function oy(n,e={}){return $n(n,"GET","/v2/passwordPolicy",Pn(n,e))}/**
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
 */const ay=6;class ly{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??ay,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class cy{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new eu(this),this.idTokenSubscription=new eu(this),this.beforeStateQueue=new iy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=vn(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await jr.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Gi(this,{idToken:e}),r=await Yt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(qt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,a=r?._redirectEventId,l=await this.tryRedirectSignIn(e);(!i||i===a)&&l?.user&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ki(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=j_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(qt(this.app))return Promise.reject(xn(this));const t=e?Et(e):null;return t&&le(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return qt(this.app)?Promise.reject(xn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return qt(this.app)?Promise.reject(xn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(vn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await oy(this),t=new ly(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ks("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await ny(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&vn(e)||this._popupRedirectResolver;le(t,this,"argument-error"),this.redirectPersistenceManager=await jr.create(this,[vn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(qt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&M_(`Error while retrieving App Check token: ${e.error}`),e?.token}}function or(n){return Et(n)}class eu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ag(t=>this.observer=t)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let go={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function uy(n){go=n}function bd(n){return go.loadJS(n)}function hy(){return go.recaptchaEnterpriseScript}function dy(){return go.gapiScript}function fy(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class my{constructor(){this.enterprise=new py}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class py{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const gy="recaptcha-enterprise",wd="NO_RECAPTCHA";class _y{constructor(e){this.type=gy,this.auth=or(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,l)=>{K_(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new G_(u);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(u=>{l(u)})})}function s(i,a,l){const u=window.grecaptcha;Qc(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(wd)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new my().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(l=>{if(!t&&Qc(window.grecaptcha))s(l,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=hy();u.length!==0&&(u+=l),bd(u).then(()=>{s(l,i,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function tu(n,e,t,r=!1,s=!1){const i=new _y(n);let a;if(s)a=wd;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const l={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Qi(n,e,t,r,s){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await tu(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await tu(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(i)})}/**
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
 */function yy(n,e){const t=ol(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Tn(i,e??{}))return s;Zt(s,"already-initialized")}return t.initialize({options:e})}function vy(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(vn);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function by(n,e,t){const r=or(n);le(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=xd(e),{host:a,port:l}=wy(e),u=l===null?"":`:${l}`,h={url:`${i}//${a}${u}/`},f=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){le(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),le(Tn(h,r.config.emulator)&&Tn(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Js(a)?Jh(`${i}//${a}${u}`):xy()}function xd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function wy(n){const e=xd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:nu(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:nu(a)}}}function nu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function xy(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class hl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return yn("not implemented")}_getIdTokenResponse(e){return yn("not implemented")}_linkToIdToken(e,t){return yn("not implemented")}_getReauthenticationResolver(e){return yn("not implemented")}}async function Ey(n,e){return $n(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Ty(n,e){return Xs(n,"POST","/v1/accounts:signInWithPassword",Pn(n,e))}async function Iy(n,e){return $n(n,"POST","/v1/accounts:sendOobCode",Pn(n,e))}async function Ay(n,e){return Iy(n,e)}/**
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
 */async function Sy(n,e){return Xs(n,"POST","/v1/accounts:signInWithEmailLink",Pn(n,e))}async function Cy(n,e){return Xs(n,"POST","/v1/accounts:signInWithEmailLink",Pn(n,e))}/**
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
 */class Us extends hl{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Us(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Us(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qi(e,t,"signInWithPassword",Ty);case"emailLink":return Sy(e,{email:this._email,oobCode:this._password});default:Zt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qi(e,r,"signUpPassword",Ey);case"emailLink":return Cy(e,{idToken:t,email:this._email,oobCode:this._password});default:Zt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Br(n,e){return Xs(n,"POST","/v1/accounts:signInWithIdp",Pn(n,e))}/**
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
 */const ky="http://localhost";class xr extends hl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new xr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Zt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new xr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Br(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Br(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Br(e,t)}buildRequest(){const e={requestUri:ky,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Qs(t)}return e}}/**
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
 */function Ry(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Py(n){const e=Es(Ts(n)).link,t=e?Es(Ts(e)).deep_link_id:null,r=Es(Ts(n)).deep_link_id;return(r?Es(Ts(r)).link:null)||r||t||e||n}class dl{constructor(e){const t=Es(Ts(e)),r=t.apiKey??null,s=t.oobCode??null,i=Ry(t.mode??null);le(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Py(e);try{return new dl(t)}catch{return null}}}/**
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
 */class rs{constructor(){this.providerId=rs.PROVIDER_ID}static credential(e,t){return Us._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=dl.parseLink(t);return le(r,"argument-error"),Us._fromEmailAndCode(e,r.code,r.tenantId)}}rs.PROVIDER_ID="password";rs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";rs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ed{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Zs extends Ed{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class jn extends Zs{constructor(){super("facebook.com")}static credential(e){return xr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jn.credential(e.oauthAccessToken)}catch{return null}}}jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";jn.PROVIDER_ID="facebook.com";/**
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
 */class Bn extends Zs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return xr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Bn.credential(t,r)}catch{return null}}}Bn.GOOGLE_SIGN_IN_METHOD="google.com";Bn.PROVIDER_ID="google.com";/**
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
 */class qn extends Zs{constructor(){super("github.com")}static credential(e){return xr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.GITHUB_SIGN_IN_METHOD="github.com";qn.PROVIDER_ID="github.com";/**
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
 */class zn extends Zs{constructor(){super("twitter.com")}static credential(e,t){return xr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return zn.credential(t,r)}catch{return null}}}zn.TWITTER_SIGN_IN_METHOD="twitter.com";zn.PROVIDER_ID="twitter.com";/**
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
 */async function $y(n,e){return Xs(n,"POST","/v1/accounts:signUp",Pn(n,e))}/**
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
 */class Er{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Yt._fromIdTokenResponse(e,r,s),a=ru(r);return new Er({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=ru(r);return new Er({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function ru(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Ji extends Rn{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ji.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Ji(e,t,r,s)}}function Td(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ji._fromErrorAndOperation(n,i,e,r):i})}async function Vy(n,e,t=!1){const r=await Ms(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Er._forOperation(n,"link",r)}/**
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
 */async function Ny(n,e,t=!1){const{auth:r}=n;if(qt(r.app))return Promise.reject(xn(r));const s="reauthenticate";try{const i=await Ms(n,Td(r,s,e,n),t);le(i.idToken,r,"internal-error");const a=cl(i.idToken);le(a,r,"internal-error");const{sub:l}=a;return le(n.uid===l,r,"user-mismatch"),Er._forOperation(n,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Zt(r,"user-mismatch"),i}}/**
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
 */async function Id(n,e,t=!1){if(qt(n.app))return Promise.reject(xn(n));const r="signIn",s=await Td(n,r,e),i=await Er._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function Dy(n,e){return Id(or(n),e)}/**
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
 */async function Ad(n){const e=or(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Oy(n,e,t){const r=or(n);await Qi(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Ay)}async function Ly(n,e,t){if(qt(n.app))return Promise.reject(xn(n));const r=or(n),a=await Qi(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",$y).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Ad(n),u}),l=await Er._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function My(n,e,t){return qt(n.app)?Promise.reject(xn(n)):Dy(Et(n),rs.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ad(n),r})}function Uy(n,e,t,r){return Et(n).onIdTokenChanged(e,t,r)}function Fy(n,e,t){return Et(n).beforeAuthStateChanged(e,t)}function jy(n,e,t,r){return Et(n).onAuthStateChanged(e,t,r)}function By(n){return Et(n).signOut()}const Yi="__sak";/**
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
 */class Sd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Yi,"1"),this.storage.removeItem(Yi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const qy=1e3,zy=10;class Cd extends Sd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=yd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);sy()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,zy):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},qy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Cd.type="LOCAL";const Wy=Cd;/**
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
 */class kd extends Sd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}kd.type="SESSION";const Rd=kd;/**
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
 */function Hy(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class _o{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new _o(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(t.origin,i)),u=await Hy(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_o.receivers=[];/**
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
 */function fl(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Gy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,u)=>{const h=fl("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const w=p;if(w.data.eventId===h)switch(w.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(w.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function cn(){return window}function Ky(n){cn().location.href=n}/**
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
 */function Pd(){return typeof cn().WorkerGlobalScope<"u"&&typeof cn().importScripts=="function"}async function Qy(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Jy(){return navigator?.serviceWorker?.controller||null}function Yy(){return Pd()?self:null}/**
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
 */const $d="firebaseLocalStorageDb",Xy=1,Xi="firebaseLocalStorage",Vd="fbase_key";class ei{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function yo(n,e){return n.transaction([Xi],e?"readwrite":"readonly").objectStore(Xi)}function Zy(){const n=indexedDB.deleteDatabase($d);return new ei(n).toPromise()}function ka(){const n=indexedDB.open($d,Xy);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Xi,{keyPath:Vd})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Xi)?e(r):(r.close(),await Zy(),e(await ka()))})})}async function su(n,e,t){const r=yo(n,!0).put({[Vd]:e,value:t});return new ei(r).toPromise()}async function ev(n,e){const t=yo(n,!1).get(e),r=await new ei(t).toPromise();return r===void 0?null:r.value}function iu(n,e){const t=yo(n,!0).delete(e);return new ei(t).toPromise()}const tv=800,nv=3;class Nd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ka(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>nv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_o._getInstance(Yy()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Qy(),!this.activeServiceWorker)return;this.sender=new Gy(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Jy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ka();return await su(e,Yi,"1"),await iu(e,Yi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>su(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>ev(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>iu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=yo(s,!1).getAll();return new ei(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Nd.type="LOCAL";const rv=Nd;new Ys(3e4,6e4);/**
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
 */function sv(n,e){return e?vn(e):(le(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class ml extends hl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Br(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Br(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Br(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function iv(n){return Id(n.auth,new ml(n),n.bypassAuthState)}function ov(n){const{auth:e,user:t}=n;return le(t,e,"internal-error"),Ny(t,new ml(n),n.bypassAuthState)}async function av(n){const{auth:e,user:t}=n;return le(t,e,"internal-error"),Vy(t,new ml(n),n.bypassAuthState)}/**
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
 */class Dd{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return iv;case"linkViaPopup":case"linkViaRedirect":return av;case"reauthViaPopup":case"reauthViaRedirect":return ov;default:Zt(this.auth,"internal-error")}}resolve(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const lv=new Ys(2e3,1e4);class Lr extends Dd{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Lr.currentPopupAction&&Lr.currentPopupAction.cancel(),Lr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){An(this.filter.length===1,"Popup operations only handle one event");const e=fl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Lr.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ln(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,lv.get())};e()}}Lr.currentPopupAction=null;/**
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
 */const cv="pendingRedirect",Pi=new Map;class uv extends Dd{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Pi.get(this.auth._key());if(!e){try{const r=await hv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Pi.set(this.auth._key(),e)}return this.bypassAuthState||Pi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hv(n,e){const t=mv(e),r=fv(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function dv(n,e){Pi.set(n._key(),e)}function fv(n){return vn(n._redirectPersistence)}function mv(n){return Ri(cv,n.config.apiKey,n.name)}async function pv(n,e,t=!1){if(qt(n.app))return Promise.reject(xn(n));const r=or(n),s=sv(r,e),a=await new uv(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const gv=10*60*1e3;class _v{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Od(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(ln(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gv&&this.cachedEventUids.clear(),this.cachedEventUids.has(ou(e))}saveEventToCache(e){this.cachedEventUids.add(ou(e)),this.lastProcessedEventTime=Date.now()}}function ou(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Od({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function yv(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Od(n);default:return!1}}/**
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
 */async function vv(n,e={}){return $n(n,"GET","/v1/projects",e)}/**
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
 */const bv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wv=/^https?/;async function xv(n){if(n.config.emulator)return;const{authorizedDomains:e}=await vv(n);for(const t of e)try{if(Ev(t))return}catch{}Zt(n,"unauthorized-domain")}function Ev(n){const e=Sa(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!wv.test(t))return!1;if(bv.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Tv=new Ys(3e4,6e4);function au(){const n=cn().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Iv(n){return new Promise((e,t)=>{function r(){au(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{au(),t(ln(n,"network-request-failed"))},timeout:Tv.get()})}if(cn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(cn().gapi?.load)r();else{const s=fy("iframefcb");return cn()[s]=()=>{gapi.load?r():t(ln(n,"network-request-failed"))},bd(`${dy()}?onload=${s}`).catch(i=>t(i))}}).catch(e=>{throw $i=null,e})}let $i=null;function Av(n){return $i=$i||Iv(n),$i}/**
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
 */const Sv=new Ys(5e3,15e3),Cv="__/auth/iframe",kv="emulator/auth/iframe",Rv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Pv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $v(n){const e=n.config;le(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ll(e,kv):`https://${n.config.authDomain}/${Cv}`,r={apiKey:e.apiKey,appName:n.name,v:ns},s=Pv.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Qs(r).slice(1)}`}async function Vv(n){const e=await Av(n),t=cn().gapi;return le(t,n,"internal-error"),e.open({where:document.body,url:$v(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Rv,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=ln(n,"network-request-failed"),l=cn().setTimeout(()=>{i(a)},Sv.get());function u(){cn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const Nv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Dv=500,Ov=600,Lv="_blank",Mv="http://localhost";class lu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Uv(n,e,t,r=Dv,s=Ov){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...Nv,width:r.toString(),height:s.toString(),top:i,left:a},h=Pt().toLowerCase();t&&(l=fd(h)?Lv:t),hd(h)&&(e=e||Mv,u.scrollbars="yes");const f=Object.entries(u).reduce((w,[x,S])=>`${w}${x}=${S},`,"");if(ry(h)&&l!=="_self")return Fv(e||"",l),new lu(null);const p=window.open(e||"",l,f);le(p,n,"popup-blocked");try{p.focus()}catch{}return new lu(p)}function Fv(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const jv="__/auth/handler",Bv="emulator/auth/handler",qv=encodeURIComponent("fac");async function cu(n,e,t,r,s,i){le(n.config.authDomain,n,"auth-domain-config-required"),le(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:ns,eventId:s};if(e instanceof Ed){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Ig(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))a[f]=p}if(e instanceof Zs){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await n._getAppCheckToken(),h=u?`#${qv}=${encodeURIComponent(u)}`:"";return`${zv(n)}?${Qs(l).slice(1)}${h}`}function zv({config:n}){return n.emulator?ll(n,Bv):`https://${n.authDomain}/${jv}`}/**
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
 */const ha="webStorageSupport";class Wv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Rd,this._completeRedirectFn=pv,this._overrideRedirectResult=dv}async _openPopup(e,t,r,s){An(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await cu(e,t,r,Sa(),s);return Uv(e,i,fl())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await cu(e,t,r,Sa(),s);return Ky(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(An(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Vv(e),r=new _v(e);return t.register("authEvent",s=>(le(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ha,{type:ha},s=>{const i=s?.[0]?.[ha];i!==void 0&&t(!!i),Zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=xv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return yd()||dd()||ul()}}const Hv=Wv;var uu="@firebase/auth",hu="1.13.1";/**
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
 */class Gv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Kv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Qv(n){Gr(new wr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;le(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vd(n)},h=new cy(r,s,i,u);return vy(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Gr(new wr("auth-internal",e=>{const t=or(e.getProvider("auth").getImmediate());return(r=>new Gv(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kn(uu,hu,Kv(n)),Kn(uu,hu,"esm2020")}/**
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
 */const Jv=5*60,Yv=Qh("authIdTokenMaxAge")||Jv;let du=null;const Xv=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Yv)return;const s=t?.token;du!==s&&(du=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Zv(n=ed()){const e=ol(n,"auth");if(e.isInitialized())return e.getImmediate();const t=yy(n,{popupRedirectResolver:Hv,persistence:[rv,Wy,Rd]}),r=Qh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=Xv(i.toString());Fy(t,a,()=>a(t.currentUser)),Uy(t,l=>a(l))}}const s=Gh("auth");return s&&by(t,`http://${s}`),t}function eb(){return document.getElementsByTagName("head")?.[0]??document}uy({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=ln("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",eb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Qv("Browser");var fu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qn,Ld;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,y){function v(){}v.prototype=y.prototype,b.F=y.prototype,b.prototype=new v,b.prototype.constructor=b,b.D=function(T,E,I){for(var m=Array(arguments.length-2),j=2;j<arguments.length;j++)m[j-2]=arguments[j];return y.prototype[E].apply(T,m)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,y,v){v||(v=0);const T=Array(16);if(typeof y=="string")for(var E=0;E<16;++E)T[E]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(E=0;E<16;++E)T[E]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=b.g[0],v=b.g[1],E=b.g[2];let I=b.g[3],m;m=y+(I^v&(E^I))+T[0]+3614090360&4294967295,y=v+(m<<7&4294967295|m>>>25),m=I+(E^y&(v^E))+T[1]+3905402710&4294967295,I=y+(m<<12&4294967295|m>>>20),m=E+(v^I&(y^v))+T[2]+606105819&4294967295,E=I+(m<<17&4294967295|m>>>15),m=v+(y^E&(I^y))+T[3]+3250441966&4294967295,v=E+(m<<22&4294967295|m>>>10),m=y+(I^v&(E^I))+T[4]+4118548399&4294967295,y=v+(m<<7&4294967295|m>>>25),m=I+(E^y&(v^E))+T[5]+1200080426&4294967295,I=y+(m<<12&4294967295|m>>>20),m=E+(v^I&(y^v))+T[6]+2821735955&4294967295,E=I+(m<<17&4294967295|m>>>15),m=v+(y^E&(I^y))+T[7]+4249261313&4294967295,v=E+(m<<22&4294967295|m>>>10),m=y+(I^v&(E^I))+T[8]+1770035416&4294967295,y=v+(m<<7&4294967295|m>>>25),m=I+(E^y&(v^E))+T[9]+2336552879&4294967295,I=y+(m<<12&4294967295|m>>>20),m=E+(v^I&(y^v))+T[10]+4294925233&4294967295,E=I+(m<<17&4294967295|m>>>15),m=v+(y^E&(I^y))+T[11]+2304563134&4294967295,v=E+(m<<22&4294967295|m>>>10),m=y+(I^v&(E^I))+T[12]+1804603682&4294967295,y=v+(m<<7&4294967295|m>>>25),m=I+(E^y&(v^E))+T[13]+4254626195&4294967295,I=y+(m<<12&4294967295|m>>>20),m=E+(v^I&(y^v))+T[14]+2792965006&4294967295,E=I+(m<<17&4294967295|m>>>15),m=v+(y^E&(I^y))+T[15]+1236535329&4294967295,v=E+(m<<22&4294967295|m>>>10),m=y+(E^I&(v^E))+T[1]+4129170786&4294967295,y=v+(m<<5&4294967295|m>>>27),m=I+(v^E&(y^v))+T[6]+3225465664&4294967295,I=y+(m<<9&4294967295|m>>>23),m=E+(y^v&(I^y))+T[11]+643717713&4294967295,E=I+(m<<14&4294967295|m>>>18),m=v+(I^y&(E^I))+T[0]+3921069994&4294967295,v=E+(m<<20&4294967295|m>>>12),m=y+(E^I&(v^E))+T[5]+3593408605&4294967295,y=v+(m<<5&4294967295|m>>>27),m=I+(v^E&(y^v))+T[10]+38016083&4294967295,I=y+(m<<9&4294967295|m>>>23),m=E+(y^v&(I^y))+T[15]+3634488961&4294967295,E=I+(m<<14&4294967295|m>>>18),m=v+(I^y&(E^I))+T[4]+3889429448&4294967295,v=E+(m<<20&4294967295|m>>>12),m=y+(E^I&(v^E))+T[9]+568446438&4294967295,y=v+(m<<5&4294967295|m>>>27),m=I+(v^E&(y^v))+T[14]+3275163606&4294967295,I=y+(m<<9&4294967295|m>>>23),m=E+(y^v&(I^y))+T[3]+4107603335&4294967295,E=I+(m<<14&4294967295|m>>>18),m=v+(I^y&(E^I))+T[8]+1163531501&4294967295,v=E+(m<<20&4294967295|m>>>12),m=y+(E^I&(v^E))+T[13]+2850285829&4294967295,y=v+(m<<5&4294967295|m>>>27),m=I+(v^E&(y^v))+T[2]+4243563512&4294967295,I=y+(m<<9&4294967295|m>>>23),m=E+(y^v&(I^y))+T[7]+1735328473&4294967295,E=I+(m<<14&4294967295|m>>>18),m=v+(I^y&(E^I))+T[12]+2368359562&4294967295,v=E+(m<<20&4294967295|m>>>12),m=y+(v^E^I)+T[5]+4294588738&4294967295,y=v+(m<<4&4294967295|m>>>28),m=I+(y^v^E)+T[8]+2272392833&4294967295,I=y+(m<<11&4294967295|m>>>21),m=E+(I^y^v)+T[11]+1839030562&4294967295,E=I+(m<<16&4294967295|m>>>16),m=v+(E^I^y)+T[14]+4259657740&4294967295,v=E+(m<<23&4294967295|m>>>9),m=y+(v^E^I)+T[1]+2763975236&4294967295,y=v+(m<<4&4294967295|m>>>28),m=I+(y^v^E)+T[4]+1272893353&4294967295,I=y+(m<<11&4294967295|m>>>21),m=E+(I^y^v)+T[7]+4139469664&4294967295,E=I+(m<<16&4294967295|m>>>16),m=v+(E^I^y)+T[10]+3200236656&4294967295,v=E+(m<<23&4294967295|m>>>9),m=y+(v^E^I)+T[13]+681279174&4294967295,y=v+(m<<4&4294967295|m>>>28),m=I+(y^v^E)+T[0]+3936430074&4294967295,I=y+(m<<11&4294967295|m>>>21),m=E+(I^y^v)+T[3]+3572445317&4294967295,E=I+(m<<16&4294967295|m>>>16),m=v+(E^I^y)+T[6]+76029189&4294967295,v=E+(m<<23&4294967295|m>>>9),m=y+(v^E^I)+T[9]+3654602809&4294967295,y=v+(m<<4&4294967295|m>>>28),m=I+(y^v^E)+T[12]+3873151461&4294967295,I=y+(m<<11&4294967295|m>>>21),m=E+(I^y^v)+T[15]+530742520&4294967295,E=I+(m<<16&4294967295|m>>>16),m=v+(E^I^y)+T[2]+3299628645&4294967295,v=E+(m<<23&4294967295|m>>>9),m=y+(E^(v|~I))+T[0]+4096336452&4294967295,y=v+(m<<6&4294967295|m>>>26),m=I+(v^(y|~E))+T[7]+1126891415&4294967295,I=y+(m<<10&4294967295|m>>>22),m=E+(y^(I|~v))+T[14]+2878612391&4294967295,E=I+(m<<15&4294967295|m>>>17),m=v+(I^(E|~y))+T[5]+4237533241&4294967295,v=E+(m<<21&4294967295|m>>>11),m=y+(E^(v|~I))+T[12]+1700485571&4294967295,y=v+(m<<6&4294967295|m>>>26),m=I+(v^(y|~E))+T[3]+2399980690&4294967295,I=y+(m<<10&4294967295|m>>>22),m=E+(y^(I|~v))+T[10]+4293915773&4294967295,E=I+(m<<15&4294967295|m>>>17),m=v+(I^(E|~y))+T[1]+2240044497&4294967295,v=E+(m<<21&4294967295|m>>>11),m=y+(E^(v|~I))+T[8]+1873313359&4294967295,y=v+(m<<6&4294967295|m>>>26),m=I+(v^(y|~E))+T[15]+4264355552&4294967295,I=y+(m<<10&4294967295|m>>>22),m=E+(y^(I|~v))+T[6]+2734768916&4294967295,E=I+(m<<15&4294967295|m>>>17),m=v+(I^(E|~y))+T[13]+1309151649&4294967295,v=E+(m<<21&4294967295|m>>>11),m=y+(E^(v|~I))+T[4]+4149444226&4294967295,y=v+(m<<6&4294967295|m>>>26),m=I+(v^(y|~E))+T[11]+3174756917&4294967295,I=y+(m<<10&4294967295|m>>>22),m=E+(y^(I|~v))+T[2]+718787259&4294967295,E=I+(m<<15&4294967295|m>>>17),m=v+(I^(E|~y))+T[9]+3951481745&4294967295,b.g[0]=b.g[0]+y&4294967295,b.g[1]=b.g[1]+(E+(m<<21&4294967295|m>>>11))&4294967295,b.g[2]=b.g[2]+E&4294967295,b.g[3]=b.g[3]+I&4294967295}r.prototype.v=function(b,y){y===void 0&&(y=b.length);const v=y-this.blockSize,T=this.C;let E=this.h,I=0;for(;I<y;){if(E==0)for(;I<=v;)s(this,b,I),I+=this.blockSize;if(typeof b=="string"){for(;I<y;)if(T[E++]=b.charCodeAt(I++),E==this.blockSize){s(this,T),E=0;break}}else for(;I<y;)if(T[E++]=b[I++],E==this.blockSize){s(this,T),E=0;break}}this.h=E,this.o+=y},r.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var y=1;y<b.length-8;++y)b[y]=0;y=this.o*8;for(var v=b.length-8;v<b.length;++v)b[v]=y&255,y/=256;for(this.v(b),b=Array(16),y=0,v=0;v<4;++v)for(let T=0;T<32;T+=8)b[y++]=this.g[v]>>>T&255;return b};function i(b,y){var v=l;return Object.prototype.hasOwnProperty.call(v,b)?v[b]:v[b]=y(b)}function a(b,y){this.h=y;const v=[];let T=!0;for(let E=b.length-1;E>=0;E--){const I=b[E]|0;T&&I==y||(v[E]=I,T=!1)}this.g=v}var l={};function u(b){return-128<=b&&b<128?i(b,function(y){return new a([y|0],y<0?-1:0)}):new a([b|0],b<0?-1:0)}function h(b){if(isNaN(b)||!isFinite(b))return p;if(b<0)return V(h(-b));const y=[];let v=1;for(let T=0;b>=v;T++)y[T]=b/v|0,v*=4294967296;return new a(y,0)}function f(b,y){if(b.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(b.charAt(0)=="-")return V(f(b.substring(1),y));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=h(Math.pow(y,8));let T=p;for(let I=0;I<b.length;I+=8){var E=Math.min(8,b.length-I);const m=parseInt(b.substring(I,I+E),y);E<8?(E=h(Math.pow(y,E)),T=T.j(E).add(h(m))):(T=T.j(v),T=T.add(h(m)))}return T}var p=u(0),w=u(1),x=u(16777216);n=a.prototype,n.m=function(){if($(this))return-V(this).m();let b=0,y=1;for(let v=0;v<this.g.length;v++){const T=this.i(v);b+=(T>=0?T:4294967296+T)*y,y*=4294967296}return b},n.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(S(this))return"0";if($(this))return"-"+V(this).toString(b);const y=h(Math.pow(b,6));var v=this;let T="";for(;;){const E=O(v,y).g;v=N(v,E.j(y));let I=((v.g.length>0?v.g[0]:v.h)>>>0).toString(b);if(v=E,S(v))return I+T;for(;I.length<6;)I="0"+I;T=I+T}},n.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function S(b){if(b.h!=0)return!1;for(let y=0;y<b.g.length;y++)if(b.g[y]!=0)return!1;return!0}function $(b){return b.h==-1}n.l=function(b){return b=N(this,b),$(b)?-1:S(b)?0:1};function V(b){const y=b.g.length,v=[];for(let T=0;T<y;T++)v[T]=~b.g[T];return new a(v,~b.h).add(w)}n.abs=function(){return $(this)?V(this):this},n.add=function(b){const y=Math.max(this.g.length,b.g.length),v=[];let T=0;for(let E=0;E<=y;E++){let I=T+(this.i(E)&65535)+(b.i(E)&65535),m=(I>>>16)+(this.i(E)>>>16)+(b.i(E)>>>16);T=m>>>16,I&=65535,m&=65535,v[E]=m<<16|I}return new a(v,v[v.length-1]&-2147483648?-1:0)};function N(b,y){return b.add(V(y))}n.j=function(b){if(S(this)||S(b))return p;if($(this))return $(b)?V(this).j(V(b)):V(V(this).j(b));if($(b))return V(this.j(V(b)));if(this.l(x)<0&&b.l(x)<0)return h(this.m()*b.m());const y=this.g.length+b.g.length,v=[];for(var T=0;T<2*y;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(let E=0;E<b.g.length;E++){const I=this.i(T)>>>16,m=this.i(T)&65535,j=b.i(E)>>>16,re=b.i(E)&65535;v[2*T+2*E]+=m*re,C(v,2*T+2*E),v[2*T+2*E+1]+=I*re,C(v,2*T+2*E+1),v[2*T+2*E+1]+=m*j,C(v,2*T+2*E+1),v[2*T+2*E+2]+=I*j,C(v,2*T+2*E+2)}for(b=0;b<y;b++)v[b]=v[2*b+1]<<16|v[2*b];for(b=y;b<2*y;b++)v[b]=0;return new a(v,0)};function C(b,y){for(;(b[y]&65535)!=b[y];)b[y+1]+=b[y]>>>16,b[y]&=65535,y++}function M(b,y){this.g=b,this.h=y}function O(b,y){if(S(y))throw Error("division by zero");if(S(b))return new M(p,p);if($(b))return y=O(V(b),y),new M(V(y.g),V(y.h));if($(y))return y=O(b,V(y)),new M(V(y.g),y.h);if(b.g.length>30){if($(b)||$(y))throw Error("slowDivide_ only works with positive integers.");for(var v=w,T=y;T.l(b)<=0;)v=z(v),T=z(T);var E=U(v,1),I=U(T,1);for(T=U(T,2),v=U(v,2);!S(T);){var m=I.add(T);m.l(b)<=0&&(E=E.add(v),I=m),T=U(T,1),v=U(v,1)}return y=N(b,E.j(y)),new M(E,y)}for(E=p;b.l(y)>=0;){for(v=Math.max(1,Math.floor(b.m()/y.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),I=h(v),m=I.j(y);$(m)||m.l(b)>0;)v-=T,I=h(v),m=I.j(y);S(I)&&(I=w),E=E.add(I),b=N(b,m)}return new M(E,b)}n.B=function(b){return O(this,b).h},n.and=function(b){const y=Math.max(this.g.length,b.g.length),v=[];for(let T=0;T<y;T++)v[T]=this.i(T)&b.i(T);return new a(v,this.h&b.h)},n.or=function(b){const y=Math.max(this.g.length,b.g.length),v=[];for(let T=0;T<y;T++)v[T]=this.i(T)|b.i(T);return new a(v,this.h|b.h)},n.xor=function(b){const y=Math.max(this.g.length,b.g.length),v=[];for(let T=0;T<y;T++)v[T]=this.i(T)^b.i(T);return new a(v,this.h^b.h)};function z(b){const y=b.g.length+1,v=[];for(let T=0;T<y;T++)v[T]=b.i(T)<<1|b.i(T-1)>>>31;return new a(v,b.h)}function U(b,y){const v=y>>5;y%=32;const T=b.g.length-v,E=[];for(let I=0;I<T;I++)E[I]=y>0?b.i(I+v)>>>y|b.i(I+v+1)<<32-y:b.i(I+v);return new a(E,b.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Ld=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Qn=a}).apply(typeof fu<"u"?fu:typeof self<"u"?self:typeof window<"u"?window:{});var Ei=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Md,Is,Ud,Vi,Ra,Fd,jd,Bd;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ei=="object"&&Ei];for(var c=0;c<o.length;++c){var d=o[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,c){if(c)e:{var d=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var A=o[g];if(!(A in d))break e;d=d[A]}o=o[o.length-1],g=d[o],c=c(g),c!=g&&c!=null&&e(d,o,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(c){var d=[],g;for(g in c)Object.prototype.hasOwnProperty.call(c,g)&&d.push([g,c[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function l(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function u(o,c,d){return o.call.apply(o.bind,arguments)}function h(o,c,d){return h=u,h.apply(null,arguments)}function f(o,c){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function p(o,c){function d(){}d.prototype=c.prototype,o.Z=c.prototype,o.prototype=new d,o.prototype.constructor=o,o.Ob=function(g,A,P){for(var B=Array(arguments.length-2),me=2;me<arguments.length;me++)B[me-2]=arguments[me];return c.prototype[A].apply(g,B)}}var w=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function x(o){const c=o.length;if(c>0){const d=Array(c);for(let g=0;g<c;g++)d[g]=o[g];return d}return[]}function S(o,c){for(let g=1;g<arguments.length;g++){const A=arguments[g];var d=typeof A;if(d=d!="object"?d:A?Array.isArray(A)?"array":d:"null",d=="array"||d=="object"&&typeof A.length=="number"){d=o.length||0;const P=A.length||0;o.length=d+P;for(let B=0;B<P;B++)o[d+B]=A[B]}else o.push(A)}}class ${constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function V(o){a.setTimeout(()=>{throw o},0)}function N(){var o=b;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class C{constructor(){this.h=this.g=null}add(c,d){const g=M.get();g.set(c,d),this.h?this.h.next=g:this.g=g,this.h=g}}var M=new $(()=>new O,o=>o.reset());class O{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let z,U=!1,b=new C,y=()=>{const o=Promise.resolve(void 0);z=()=>{o.then(v)}};function v(){for(var o;o=N();){try{o.h.call(o.g)}catch(d){V(d)}var c=M;c.j(o),c.h<100&&(c.h++,o.next=c.g,c.g=o)}U=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var I=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};a.addEventListener("test",d,c),a.removeEventListener("test",d,c)}catch{}return o}();function m(o){return/^[\s\xa0]*$/.test(o)}function j(o,c){E.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,c)}p(j,E),j.prototype.init=function(o,c){const d=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget,c||(d=="mouseover"?c=o.fromElement:d=="mouseout"&&(c=o.toElement)),this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&j.Z.h.call(this)},j.prototype.h=function(){j.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var re="closure_listenable_"+(Math.random()*1e6|0),we=0;function Ce(o,c,d,g,A){this.listener=o,this.proxy=null,this.src=c,this.type=d,this.capture=!!g,this.ha=A,this.key=++we,this.da=this.fa=!1}function De(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Fe(o,c,d){for(const g in o)c.call(d,o[g],g,o)}function Le(o,c){for(const d in o)c.call(void 0,o[d],d,o)}function ze(o){const c={};for(const d in o)c[d]=o[d];return c}const mt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ke(o,c){let d,g;for(let A=1;A<arguments.length;A++){g=arguments[A];for(d in g)o[d]=g[d];for(let P=0;P<mt.length;P++)d=mt[P],Object.prototype.hasOwnProperty.call(g,d)&&(o[d]=g[d])}}function Ae(o){this.src=o,this.g={},this.h=0}Ae.prototype.add=function(o,c,d,g,A){const P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);const B=st(o,c,g,A);return B>-1?(c=o[B],d||(c.fa=!1)):(c=new Ce(c,this.src,P,!!g,A),c.fa=d,o.push(c)),c};function bt(o,c){const d=c.type;if(d in o.g){var g=o.g[d],A=Array.prototype.indexOf.call(g,c,void 0),P;(P=A>=0)&&Array.prototype.splice.call(g,A,1),P&&(De(c),o.g[d].length==0&&(delete o.g[d],o.h--))}}function st(o,c,d,g){for(let A=0;A<o.length;++A){const P=o[A];if(!P.da&&P.listener==c&&P.capture==!!d&&P.ha==g)return A}return-1}var et="closure_lm_"+(Math.random()*1e6|0),Re={};function Ye(o,c,d,g,A){if(Array.isArray(c)){for(let P=0;P<c.length;P++)Ye(o,c[P],d,g,A);return null}return d=te(d),o&&o[re]?o.J(c,d,l(g)?!!g.capture:!1,A):it(o,c,d,!1,g,A)}function it(o,c,d,g,A,P){if(!c)throw Error("Invalid event type");const B=l(A)?!!A.capture:!!A;let me=F(o);if(me||(o[et]=me=new Ae(o)),d=me.add(c,d,g,B,P),d.proxy)return d;if(g=$t(),d.proxy=g,g.src=o,g.listener=d,o.addEventListener)I||(A=B),A===void 0&&(A=!1),o.addEventListener(c.toString(),g,A);else if(o.attachEvent)o.attachEvent(ae(c.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function $t(){function o(d){return c.call(o.src,o.listener,d)}const c=Y;return o}function Vt(o,c,d,g,A){if(Array.isArray(c))for(var P=0;P<c.length;P++)Vt(o,c[P],d,g,A);else g=l(g)?!!g.capture:!!g,d=te(d),o&&o[re]?(o=o.i,P=String(c).toString(),P in o.g&&(c=o.g[P],d=st(c,d,g,A),d>-1&&(De(c[d]),Array.prototype.splice.call(c,d,1),c.length==0&&(delete o.g[P],o.h--)))):o&&(o=F(o))&&(c=o.g[c.toString()],o=-1,c&&(o=st(c,d,g,A)),(d=o>-1?c[o]:null)&&Ot(d))}function Ot(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[re])bt(c.i,o);else{var d=o.type,g=o.proxy;c.removeEventListener?c.removeEventListener(d,g,o.capture):c.detachEvent?c.detachEvent(ae(d),g):c.addListener&&c.removeListener&&c.removeListener(g),(d=F(c))?(bt(d,o),d.h==0&&(d.src=null,c[et]=null)):De(o)}}}function ae(o){return o in Re?Re[o]:Re[o]="on"+o}function Y(o,c){if(o.da)o=!0;else{c=new j(c,this);const d=o.listener,g=o.ha||o.src;o.fa&&Ot(o),o=d.call(g,c)}return o}function F(o){return o=o[et],o instanceof Ae?o:null}var W="__closure_events_fn_"+(Math.random()*1e9>>>0);function te(o){return typeof o=="function"?o:(o[W]||(o[W]=function(c){return o.handleEvent(c)}),o[W])}function X(){T.call(this),this.i=new Ae(this),this.M=this,this.G=null}p(X,T),X.prototype[re]=!0,X.prototype.removeEventListener=function(o,c,d,g){Vt(this,o,c,d,g)};function G(o,c){var d,g=o.G;if(g)for(d=[];g;g=g.G)d.push(g);if(o=o.M,g=c.type||c,typeof c=="string")c=new E(c,o);else if(c instanceof E)c.target=c.target||o;else{var A=c;c=new E(g,o),Ke(c,A)}A=!0;let P,B;if(d)for(B=d.length-1;B>=0;B--)P=c.g=d[B],A=de(P,g,!0,c)&&A;if(P=c.g=o,A=de(P,g,!0,c)&&A,A=de(P,g,!1,c)&&A,d)for(B=0;B<d.length;B++)P=c.g=d[B],A=de(P,g,!1,c)&&A}X.prototype.N=function(){if(X.Z.N.call(this),this.i){var o=this.i;for(const c in o.g){const d=o.g[c];for(let g=0;g<d.length;g++)De(d[g]);delete o.g[c],o.h--}}this.G=null},X.prototype.J=function(o,c,d,g){return this.i.add(String(o),c,!1,d,g)},X.prototype.K=function(o,c,d,g){return this.i.add(String(o),c,!0,d,g)};function de(o,c,d,g){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();let A=!0;for(let P=0;P<c.length;++P){const B=c[P];if(B&&!B.da&&B.capture==d){const me=B.listener,_t=B.ha||B.src;B.fa&&bt(o.i,B),A=me.call(_t,g)!==!1&&A}}return A&&!g.defaultPrevented}function oe(o,c){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(o,c||0)}function Se(o){o.g=oe(()=>{o.g=null,o.i&&(o.i=!1,Se(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class ge extends T{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Se(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xe(o){T.call(this),this.h=o,this.g={}}p(xe,T);var pe=[];function $e(o){Fe(o.g,function(c,d){this.g.hasOwnProperty(d)&&Ot(c)},o),o.g={}}xe.prototype.N=function(){xe.Z.N.call(this),$e(this)},xe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qe=a.JSON.stringify,ot=a.JSON.parse,Me=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function je(){}function pt(){}var Xe={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function tt(){E.call(this,"d")}p(tt,E);function K(){E.call(this,"c")}p(K,E);var se={},ne=null;function ue(){return ne=ne||new X}se.Ia="serverreachability";function Ee(o){E.call(this,se.Ia,o)}p(Ee,E);function Ve(o){const c=ue();G(c,new Ee(c))}se.STAT_EVENT="statevent";function We(o,c){E.call(this,se.STAT_EVENT,o),this.stat=c}p(We,E);function Oe(o){const c=ue();G(c,new We(c,o))}se.Ja="timingevent";function Lt(o,c){E.call(this,se.Ja,o),this.size=c}p(Lt,E);function Kt(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},c)}function Mt(){this.g=!0}Mt.prototype.ua=function(){this.g=!1};function _n(o,c,d,g,A,P){o.info(function(){if(o.g)if(P){var B="",me=P.split("&");for(let Ue=0;Ue<me.length;Ue++){var _t=me[Ue].split("=");if(_t.length>1){const wt=_t[0];_t=_t[1];const sn=wt.split("_");B=sn.length>=2&&sn[1]=="type"?B+(wt+"="+_t+"&"):B+(wt+"=redacted&")}}}else B=null;else B=P;return"XMLHTTP REQ ("+g+") [attempt "+A+"]: "+c+`
`+d+`
`+B})}function Vn(o,c,d,g,A,P,B){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+A+"]: "+c+`
`+d+`
`+P+" "+B})}function Ut(o,c,d,g){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Fo(o,d)+(g?" "+g:"")})}function Uo(o,c){o.info(function(){return"TIMEOUT: "+c})}Mt.prototype.info=function(){};function Fo(o,c){if(!o.g)return c;if(!c)return null;try{const P=JSON.parse(c);if(P){for(o=0;o<P.length;o++)if(Array.isArray(P[o])){var d=P[o];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var A=g[0];if(A!="noop"&&A!="stop"&&A!="close")for(let B=1;B<g.length;B++)g[B]=""}}}}return Qe(P)}catch{return c}}var cr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ui={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},hi;function us(){}p(us,je),us.prototype.g=function(){return new XMLHttpRequest},hi=new us;function ur(o){return encodeURIComponent(String(o))}function jo(o){var c=1;o=o.split(":");const d=[];for(;c>0&&o.length;)d.push(o.shift()),c--;return o.length&&d.push(o.join(":")),d}function ee(o,c,d,g){this.j=o,this.i=c,this.l=d,this.S=g||1,this.V=new xe(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new gt}function gt(){this.i=null,this.g="",this.h=!1}var Qt={},Nn={};function hs(o,c,d){o.M=1,o.A=fi(rn(c)),o.u=d,o.R=!0,Bo(o,null)}function Bo(o,c){o.F=Date.now(),di(o),o.B=rn(o.A);var d=o.B,g=o.S;Array.isArray(g)||(g=[String(g)]),uc(d.i,"t",g),o.C=0,d=o.j.L,o.h=new gt,o.g=Cc(o.j,d?c:null,!o.u),o.P>0&&(o.O=new ge(h(o.Y,o,o.g),o.P)),c=o.V,d=o.g,g=o.ba;var A="readystatechange";Array.isArray(A)||(A&&(pe[0]=A.toString()),A=pe);for(let P=0;P<A.length;P++){const B=Ye(d,A[P],g||c.handleEvent,!1,c.h||c);if(!B)break;c.g[B.key]=B}c=o.J?ze(o.J):{},o.u?(o.v||(o.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,c)):(o.v="GET",o.g.ea(o.B,o.v,null,c)),Ve(),_n(o.i,o.v,o.B,o.l,o.S,o.u)}ee.prototype.ba=function(o){o=o.target;const c=this.O;c&&Ln(o)==3?c.j():this.Y(o)},ee.prototype.Y=function(o){try{if(o==this.g)e:{const me=Ln(this.g),_t=this.g.ya(),Ue=this.g.ca();if(!(me<3)&&(me!=3||this.g&&(this.h.h||this.g.la()||_c(this.g)))){this.K||me!=4||_t==7||(_t==8||Ue<=0?Ve(3):Ve(2)),zo(this);var c=this.g.ca();this.X=c;var d=qo(this);if(this.o=c==200,Vn(this.i,this.v,this.B,this.l,this.S,me,c),this.o){if(this.U&&!this.L){t:{if(this.g){var g,A=this.g;if((g=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!m(g)){var P=g;break t}}P=null}if(o=P)Ut(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Wo(this,o);else{this.o=!1,this.m=3,Oe(12),hr(this),ds(this);break e}}if(this.R){o=!0;let wt;for(;!this.K&&this.C<d.length;)if(wt=Sm(this,d),wt==Nn){me==4&&(this.m=4,Oe(14),o=!1),Ut(this.i,this.l,null,"[Incomplete Response]");break}else if(wt==Qt){this.m=4,Oe(15),Ut(this.i,this.l,d,"[Invalid Chunk]"),o=!1;break}else Ut(this.i,this.l,wt,null),Wo(this,wt);if(Xl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),me!=4||d.length!=0||this.h.h||(this.m=1,Oe(16),o=!1),this.o=this.o&&o,!o)Ut(this.i,this.l,d,"[Invalid Chunked Response]"),hr(this),ds(this);else if(d.length>0&&!this.W){this.W=!0;var B=this.j;B.g==this&&B.aa&&!B.P&&(B.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Zo(B),B.P=!0,Oe(11))}}else Ut(this.i,this.l,d,null),Wo(this,d);me==4&&hr(this),this.o&&!this.K&&(me==4?Tc(this.j,this):(this.o=!1,di(this)))}else jm(this.g),c==400&&d.indexOf("Unknown SID")>0?(this.m=3,Oe(12)):(this.m=0,Oe(13)),hr(this),ds(this)}}}catch{}finally{}};function qo(o){if(!Xl(o))return o.g.la();const c=_c(o.g);if(c==="")return"";let d="";const g=c.length,A=Ln(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return hr(o),ds(o),"";o.h.i=new a.TextDecoder}for(let P=0;P<g;P++)o.h.h=!0,d+=o.h.i.decode(c[P],{stream:!(A&&P==g-1)});return c.length=0,o.h.g+=d,o.C=0,o.h.g}function Xl(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Sm(o,c){var d=o.C,g=c.indexOf(`
`,d);return g==-1?Nn:(d=Number(c.substring(d,g)),isNaN(d)?Qt:(g+=1,g+d>c.length?Nn:(c=c.slice(g,g+d),o.C=g+d,c)))}ee.prototype.cancel=function(){this.K=!0,hr(this)};function di(o){o.T=Date.now()+o.H,Zl(o,o.H)}function Zl(o,c){if(o.D!=null)throw Error("WatchDog timer not null");o.D=Kt(h(o.aa,o),c)}function zo(o){o.D&&(a.clearTimeout(o.D),o.D=null)}ee.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Uo(this.i,this.B),this.M!=2&&(Ve(),Oe(17)),hr(this),this.m=2,ds(this)):Zl(this,this.T-o)};function ds(o){o.j.I==0||o.K||Tc(o.j,o)}function hr(o){zo(o);var c=o.O;c&&typeof c.dispose=="function"&&c.dispose(),o.O=null,$e(o.V),o.g&&(c=o.g,o.g=null,c.abort(),c.dispose())}function Wo(o,c){try{var d=o.j;if(d.I!=0&&(d.g==o||Ho(d.h,o))){if(!o.L&&Ho(d.h,o)&&d.I==3){try{var g=d.Ba.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var A=g;if(A[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<o.F)yi(d),gi(d);else break e;Xo(d),Oe(18)}}else d.xa=A[1],0<d.xa-d.K&&A[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Kt(h(d.Va,d),6e3));nc(d.h)<=1&&d.ta&&(d.ta=void 0)}else fr(d,11)}else if((o.L||d.g==o)&&yi(d),!m(c))for(A=d.Ba.g.parse(c),c=0;c<A.length;c++){let Ue=A[c];const wt=Ue[0];if(!(wt<=d.K))if(d.K=wt,Ue=Ue[1],d.I==2)if(Ue[0]=="c"){d.M=Ue[1],d.ba=Ue[2];const sn=Ue[3];sn!=null&&(d.ka=sn,d.j.info("VER="+d.ka));const mr=Ue[4];mr!=null&&(d.za=mr,d.j.info("SVER="+d.za));const Mn=Ue[5];Mn!=null&&typeof Mn=="number"&&Mn>0&&(g=1.5*Mn,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Un=o.g;if(Un){const bi=Un.g?Un.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(bi){var P=g.h;P.g||bi.indexOf("spdy")==-1&&bi.indexOf("quic")==-1&&bi.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Go(P,P.h),P.h=null))}if(g.G){const ea=Un.g?Un.g.getResponseHeader("X-HTTP-Session-Id"):null;ea&&(g.wa=ea,He(g.J,g.G,ea))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-o.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var B=o;if(g.na=Sc(g,g.L?g.ba:null,g.W),B.L){rc(g.h,B);var me=B,_t=g.O;_t&&(me.H=_t),me.D&&(zo(me),di(me)),g.g=B}else xc(g);d.i.length>0&&_i(d)}else Ue[0]!="stop"&&Ue[0]!="close"||fr(d,7);else d.I==3&&(Ue[0]=="stop"||Ue[0]=="close"?Ue[0]=="stop"?fr(d,7):Yo(d):Ue[0]!="noop"&&d.l&&d.l.qa(Ue),d.A=0)}}Ve(4)}catch{}}var Cm=class{constructor(o,c){this.g=o,this.map=c}};function ec(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function tc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function nc(o){return o.h?1:o.g?o.g.size:0}function Ho(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Go(o,c){o.g?o.g.add(c):o.h=c}function rc(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}ec.prototype.cancel=function(){if(this.i=sc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function sc(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const d of o.g.values())c=c.concat(d.G);return c}return x(o.i)}var ic=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function km(o,c){if(o){o=o.split("&");for(let d=0;d<o.length;d++){const g=o[d].indexOf("=");let A,P=null;g>=0?(A=o[d].substring(0,g),P=o[d].substring(g+1)):A=o[d],c(A,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Dn(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;o instanceof Dn?(this.l=o.l,fs(this,o.j),this.o=o.o,this.g=o.g,ms(this,o.u),this.h=o.h,Ko(this,hc(o.i)),this.m=o.m):o&&(c=String(o).match(ic))?(this.l=!1,fs(this,c[1]||"",!0),this.o=ps(c[2]||""),this.g=ps(c[3]||"",!0),ms(this,c[4]),this.h=ps(c[5]||"",!0),Ko(this,c[6]||"",!0),this.m=ps(c[7]||"")):(this.l=!1,this.i=new _s(null,this.l))}Dn.prototype.toString=function(){const o=[];var c=this.j;c&&o.push(gs(c,oc,!0),":");var d=this.g;return(d||c=="file")&&(o.push("//"),(c=this.o)&&o.push(gs(c,oc,!0),"@"),o.push(ur(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&o.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(gs(d,d.charAt(0)=="/"?$m:Pm,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",gs(d,Nm)),o.join("")},Dn.prototype.resolve=function(o){const c=rn(this);let d=!!o.j;d?fs(c,o.j):d=!!o.o,d?c.o=o.o:d=!!o.g,d?c.g=o.g:d=o.u!=null;var g=o.h;if(d)ms(c,o.u);else if(d=!!o.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var A=c.h.lastIndexOf("/");A!=-1&&(g=c.h.slice(0,A+1)+g)}if(A=g,A==".."||A==".")g="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){g=A.lastIndexOf("/",0)==0,A=A.split("/");const P=[];for(let B=0;B<A.length;){const me=A[B++];me=="."?g&&B==A.length&&P.push(""):me==".."?((P.length>1||P.length==1&&P[0]!="")&&P.pop(),g&&B==A.length&&P.push("")):(P.push(me),g=!0)}g=P.join("/")}else g=A}return d?c.h=g:d=o.i.toString()!=="",d?Ko(c,hc(o.i)):d=!!o.m,d&&(c.m=o.m),c};function rn(o){return new Dn(o)}function fs(o,c,d){o.j=d?ps(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function ms(o,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);o.u=c}else o.u=null}function Ko(o,c,d){c instanceof _s?(o.i=c,Dm(o.i,o.l)):(d||(c=gs(c,Vm)),o.i=new _s(c,o.l))}function He(o,c,d){o.i.set(c,d)}function fi(o){return He(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function ps(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function gs(o,c,d){return typeof o=="string"?(o=encodeURI(o).replace(c,Rm),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Rm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var oc=/[#\/\?@]/g,Pm=/[#\?:]/g,$m=/[#\?]/g,Vm=/[#\?@]/g,Nm=/#/g;function _s(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function dr(o){o.g||(o.g=new Map,o.h=0,o.i&&km(o.i,function(c,d){o.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}n=_s.prototype,n.add=function(o,c){dr(this),this.i=null,o=Rr(this,o);let d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(c),this.h+=1,this};function ac(o,c){dr(o),c=Rr(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function lc(o,c){return dr(o),c=Rr(o,c),o.g.has(c)}n.forEach=function(o,c){dr(this),this.g.forEach(function(d,g){d.forEach(function(A){o.call(c,A,g,this)},this)},this)};function cc(o,c){dr(o);let d=[];if(typeof c=="string")lc(o,c)&&(d=d.concat(o.g.get(Rr(o,c))));else for(o=Array.from(o.g.values()),c=0;c<o.length;c++)d=d.concat(o[c]);return d}n.set=function(o,c){return dr(this),this.i=null,o=Rr(this,o),lc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=cc(this,o),o.length>0?String(o[0]):c):c};function uc(o,c,d){ac(o,c),d.length>0&&(o.i=null,o.g.set(Rr(o,c),x(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(let g=0;g<c.length;g++){var d=c[g];const A=ur(d);d=cc(this,d);for(let P=0;P<d.length;P++){let B=A;d[P]!==""&&(B+="="+ur(d[P])),o.push(B)}}return this.i=o.join("&")};function hc(o){const c=new _s;return c.i=o.i,o.g&&(c.g=new Map(o.g),c.h=o.h),c}function Rr(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Dm(o,c){c&&!o.j&&(dr(o),o.i=null,o.g.forEach(function(d,g){const A=g.toLowerCase();g!=A&&(ac(this,g),uc(this,A,d))},o)),o.j=c}function Om(o,c){const d=new Mt;if(a.Image){const g=new Image;g.onload=f(On,d,"TestLoadImage: loaded",!0,c,g),g.onerror=f(On,d,"TestLoadImage: error",!1,c,g),g.onabort=f(On,d,"TestLoadImage: abort",!1,c,g),g.ontimeout=f(On,d,"TestLoadImage: timeout",!1,c,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else c(!1)}function Lm(o,c){const d=new Mt,g=new AbortController,A=setTimeout(()=>{g.abort(),On(d,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:g.signal}).then(P=>{clearTimeout(A),P.ok?On(d,"TestPingServer: ok",!0,c):On(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(A),On(d,"TestPingServer: error",!1,c)})}function On(o,c,d,g,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),g(d)}catch{}}function Mm(){this.g=new Me}function Qo(o){this.i=o.Sb||null,this.h=o.ab||!1}p(Qo,je),Qo.prototype.g=function(){return new mi(this.i,this.h)};function mi(o,c){X.call(this),this.H=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(mi,X),n=mi.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=c,this.readyState=1,vs(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(c.body=o),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ys(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,vs(this)),this.g&&(this.readyState=3,vs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;dc(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function dc(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?ys(this):vs(this),this.readyState==3&&dc(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,ys(this))},n.Na=function(o){this.g&&(this.response=o,ys(this))},n.ga=function(){this.g&&ys(this)};function ys(o){o.readyState=4,o.l=null,o.j=null,o.B=null,vs(o)}n.setRequestHeader=function(o,c){this.A.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=c.next();return o.join(`\r
`)};function vs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(mi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function fc(o){let c="";return Fe(o,function(d,g){c+=g,c+=":",c+=d,c+=`\r
`}),c}function Jo(o,c,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=fc(d),typeof o=="string"?d!=null&&ur(d):He(o,c,d))}function nt(o){X.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(nt,X);var Um=/^https?$/i,Fm=["POST","PUT"];n=nt.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,c,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():hi.g(),this.g.onreadystatechange=w(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(P){mc(this,P);return}if(o=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var A in g)d.set(A,g[A]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const P of g.keys())d.set(P,g.get(P));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),A=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Fm,c,void 0)>=0)||g||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,B]of d)this.g.setRequestHeader(P,B);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(P){mc(this,P)}};function mc(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.o=5,pc(o),pi(o)}function pc(o){o.A||(o.A=!0,G(o,"complete"),G(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,G(this,"complete"),G(this,"abort"),pi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),pi(this,!0)),nt.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?gc(this):this.Xa())},n.Xa=function(){gc(this)};function gc(o){if(o.h&&typeof i<"u"){if(o.v&&Ln(o)==4)setTimeout(o.Ca.bind(o),0);else if(G(o,"readystatechange"),Ln(o)==4){o.h=!1;try{const P=o.ca();e:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var g;if(g=P===0){let B=String(o.D).match(ic)[1]||null;!B&&a.self&&a.self.location&&(B=a.self.location.protocol.slice(0,-1)),g=!Um.test(B?B.toLowerCase():"")}d=g}if(d)G(o,"complete"),G(o,"success");else{o.o=6;try{var A=Ln(o)>2?o.g.statusText:""}catch{A=""}o.l=A+" ["+o.ca()+"]",pc(o)}}finally{pi(o)}}}}function pi(o,c){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const d=o.g;o.g=null,c||G(o,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Ln(o){return o.g?o.g.readyState:0}n.ca=function(){try{return Ln(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),ot(c)}};function _c(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function jm(o){const c={};o=(o.g&&Ln(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(m(o[g]))continue;var d=jo(o[g]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=c[A]||[];c[A]=P,P.push(d)}Le(c,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function bs(o,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||c}function yc(o){this.za=0,this.i=[],this.j=new Mt,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=bs("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=bs("baseRetryDelayMs",5e3,o),this.Za=bs("retryDelaySeedMs",1e4,o),this.Ta=bs("forwardChannelMaxRetries",2,o),this.va=bs("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new ec(o&&o.concurrentRequestLimit),this.Ba=new Mm,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=yc.prototype,n.ka=8,n.I=1,n.connect=function(o,c,d,g){Oe(0),this.W=o,this.H=c||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=Sc(this,null,this.W),_i(this)};function Yo(o){if(vc(o),o.I==3){var c=o.V++,d=rn(o.J);if(He(d,"SID",o.M),He(d,"RID",c),He(d,"TYPE","terminate"),ws(o,d),c=new ee(o,o.j,c),c.M=2,c.A=fi(rn(d)),d=!1,a.navigator&&a.navigator.sendBeacon)try{d=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!d&&a.Image&&(new Image().src=c.A,d=!0),d||(c.g=Cc(c.j,null),c.g.ea(c.A)),c.F=Date.now(),di(c)}Ac(o)}function gi(o){o.g&&(Zo(o),o.g.cancel(),o.g=null)}function vc(o){gi(o),o.v&&(a.clearTimeout(o.v),o.v=null),yi(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function _i(o){if(!tc(o.h)&&!o.m){o.m=!0;var c=o.Ea;z||y(),U||(z(),U=!0),b.add(c,o),o.D=0}}function Bm(o,c){return nc(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=c.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=Kt(h(o.Ea,o,c),Ic(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const A=new ee(this,this.j,o);let P=this.o;if(this.U&&(P?(P=ze(P),Ke(P,this.U)):P=this.U),this.u!==null||this.R||(A.J=P,P=null),this.S)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,c>4096){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=wc(this,A,c),d=rn(this.J),He(d,"RID",o),He(d,"CVER",22),this.G&&He(d,"X-HTTP-Session-Id",this.G),ws(this,d),P&&(this.R?c="headers="+ur(fc(P))+"&"+c:this.u&&Jo(d,this.u,P)),Go(this.h,A),this.Ra&&He(d,"TYPE","init"),this.S?(He(d,"$req",c),He(d,"SID","null"),A.U=!0,hs(A,d,null)):hs(A,d,c),this.I=2}}else this.I==3&&(o?bc(this,o):this.i.length==0||tc(this.h)||bc(this))};function bc(o,c){var d;c?d=c.l:d=o.V++;const g=rn(o.J);He(g,"SID",o.M),He(g,"RID",d),He(g,"AID",o.K),ws(o,g),o.u&&o.o&&Jo(g,o.u,o.o),d=new ee(o,o.j,d,o.D+1),o.u===null&&(d.J=o.o),c&&(o.i=c.G.concat(o.i)),c=wc(o,d,1e3),d.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Go(o.h,d),hs(d,g,c)}function ws(o,c){o.H&&Fe(o.H,function(d,g){He(c,g,d)}),o.l&&Fe({},function(d,g){He(c,g,d)})}function wc(o,c,d){d=Math.min(o.i.length,d);const g=o.l?h(o.l.Ka,o.l,o):null;e:{var A=o.i;let me=-1;for(;;){const _t=["count="+d];me==-1?d>0?(me=A[0].g,_t.push("ofs="+me)):me=0:_t.push("ofs="+me);let Ue=!0;for(let wt=0;wt<d;wt++){var P=A[wt].g;const sn=A[wt].map;if(P-=me,P<0)me=Math.max(0,A[wt].g-100),Ue=!1;else try{P="req"+P+"_"||"";try{var B=sn instanceof Map?sn:Object.entries(sn);for(const[mr,Mn]of B){let Un=Mn;l(Mn)&&(Un=Qe(Mn)),_t.push(P+mr+"="+encodeURIComponent(Un))}}catch(mr){throw _t.push(P+"type="+encodeURIComponent("_badmap")),mr}}catch{g&&g(sn)}}if(Ue){B=_t.join("&");break e}}B=void 0}return o=o.i.splice(0,d),c.G=o,B}function xc(o){if(!o.g&&!o.v){o.Y=1;var c=o.Da;z||y(),U||(z(),U=!0),b.add(c,o),o.A=0}}function Xo(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=Kt(h(o.Da,o),Ic(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,Ec(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=Kt(h(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Oe(10),gi(this),Ec(this))};function Zo(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Ec(o){o.g=new ee(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var c=rn(o.na);He(c,"RID","rpc"),He(c,"SID",o.M),He(c,"AID",o.K),He(c,"CI",o.F?"0":"1"),!o.F&&o.ia&&He(c,"TO",o.ia),He(c,"TYPE","xmlhttp"),ws(o,c),o.u&&o.o&&Jo(c,o.u,o.o),o.O&&(o.g.H=o.O);var d=o.g;o=o.ba,d.M=1,d.A=fi(rn(c)),d.u=null,d.R=!0,Bo(d,o)}n.Va=function(){this.C!=null&&(this.C=null,gi(this),Xo(this),Oe(19))};function yi(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Tc(o,c){var d=null;if(o.g==c){yi(o),Zo(o),o.g=null;var g=2}else if(Ho(o.h,c))d=c.G,rc(o.h,c),g=1;else return;if(o.I!=0){if(c.o)if(g==1){d=c.u?c.u.length:0,c=Date.now()-c.F;var A=o.D;g=ue(),G(g,new Lt(g,d)),_i(o)}else xc(o);else if(A=c.m,A==3||A==0&&c.X>0||!(g==1&&Bm(o,c)||g==2&&Xo(o)))switch(d&&d.length>0&&(c=o.h,c.i=c.i.concat(d)),A){case 1:fr(o,5);break;case 4:fr(o,10);break;case 3:fr(o,6);break;default:fr(o,2)}}}function Ic(o,c){let d=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(d*=2),d*c}function fr(o,c){if(o.j.info("Error code "+c),c==2){var d=h(o.bb,o),g=o.Ua;const A=!g;g=new Dn(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||fs(g,"https"),fi(g),A?Om(g.toString(),d):Lm(g.toString(),d)}else Oe(2);o.I=0,o.l&&o.l.pa(c),Ac(o),vc(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Oe(2)):(this.j.info("Failed to ping google.com"),Oe(1))};function Ac(o){if(o.I=0,o.ja=[],o.l){const c=sc(o.h);(c.length!=0||o.i.length!=0)&&(S(o.ja,c),S(o.ja,o.i),o.h.i.length=0,x(o.i),o.i.length=0),o.l.oa()}}function Sc(o,c,d){var g=d instanceof Dn?rn(d):new Dn(d);if(g.g!="")c&&(g.g=c+"."+g.g),ms(g,g.u);else{var A=a.location;g=A.protocol,c=c?c+"."+A.hostname:A.hostname,A=+A.port;const P=new Dn(null);g&&fs(P,g),c&&(P.g=c),A&&ms(P,A),d&&(P.h=d),g=P}return d=o.G,c=o.wa,d&&c&&He(g,d,c),He(g,"VER",o.ka),ws(o,g),g}function Cc(o,c,d){if(c&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Aa&&!o.ma?new nt(new Qo({ab:d})):new nt(o.ma),c.Fa(o.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function kc(){}n=kc.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function vi(){}vi.prototype.g=function(o,c){return new Ft(o,c)};function Ft(o,c){X.call(this),this.g=new yc(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(o?o["X-WebChannel-Client-Profile"]=c.sa:o={"X-WebChannel-Client-Profile":c.sa}),this.g.U=o,(o=c&&c.Qb)&&!m(o)&&(this.g.u=o),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!m(c)&&(this.g.G=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Pr(this)}p(Ft,X),Ft.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ft.prototype.close=function(){Yo(this.g)},Ft.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.v&&(d={},d.__data__=Qe(o),o=d);c.i.push(new Cm(c.Ya++,o)),c.I==3&&_i(c)},Ft.prototype.N=function(){this.g.l=null,delete this.j,Yo(this.g),delete this.g,Ft.Z.N.call(this)};function Rc(o){tt.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const d in c){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}p(Rc,tt);function Pc(){K.call(this),this.status=1}p(Pc,K);function Pr(o){this.g=o}p(Pr,kc),Pr.prototype.ra=function(){G(this.g,"a")},Pr.prototype.qa=function(o){G(this.g,new Rc(o))},Pr.prototype.pa=function(o){G(this.g,new Pc)},Pr.prototype.oa=function(){G(this.g,"b")},vi.prototype.createWebChannel=vi.prototype.g,Ft.prototype.send=Ft.prototype.o,Ft.prototype.open=Ft.prototype.m,Ft.prototype.close=Ft.prototype.close,Bd=function(){return new vi},jd=function(){return ue()},Fd=se,Ra={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},cr.NO_ERROR=0,cr.TIMEOUT=8,cr.HTTP_ERROR=6,Vi=cr,ui.COMPLETE="complete",Ud=ui,pt.EventType=Xe,Xe.OPEN="a",Xe.CLOSE="b",Xe.ERROR="c",Xe.MESSAGE="d",X.prototype.listen=X.prototype.J,Is=pt,nt.prototype.listenOnce=nt.prototype.K,nt.prototype.getLastError=nt.prototype.Ha,nt.prototype.getLastErrorCode=nt.prototype.ya,nt.prototype.getStatus=nt.prototype.ca,nt.prototype.getResponseJson=nt.prototype.La,nt.prototype.getResponseText=nt.prototype.la,nt.prototype.send=nt.prototype.ea,nt.prototype.setWithCredentials=nt.prototype.Fa,Md=nt}).apply(typeof Ei<"u"?Ei:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */let ss="12.13.0";function tb(n){ss=n}/**
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
 */const Tr=new sl("@firebase/firestore");function Vr(){return Tr.logLevel}function Q(n,...e){if(Tr.logLevel<=be.DEBUG){const t=e.map(pl);Tr.debug(`Firestore (${ss}): ${n}`,...t)}}function Sn(n,...e){if(Tr.logLevel<=be.ERROR){const t=e.map(pl);Tr.error(`Firestore (${ss}): ${n}`,...t)}}function Ir(n,...e){if(Tr.logLevel<=be.WARN){const t=e.map(pl);Tr.warn(`Firestore (${ss}): ${n}`,...t)}}function pl(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function ce(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,qd(n,r,t)}function qd(n,e,t){let r=`FIRESTORE (${ss}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Sn(r),new Error(r)}function Pe(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||qd(e,s,r)}function fe(n,e){return n}/**
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
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends Rn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class En{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class zd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ct.UNAUTHENTICATED))}shutdown(){}}class rb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class sb{constructor(e){this.t=e,this.currentUser=Ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Pe(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new En;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new En,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new En)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Pe(typeof r.accessToken=="string",31837,{l:r}),new zd(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Pe(e===null||typeof e=="string",2055,{h:e}),new Ct(e)}}class ib{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Ct.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class ob{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new ib(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class mu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ab{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,qt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Pe(this.o===void 0,3512);const r=i=>{i.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,Q("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new mu(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Pe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new mu(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function lb(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class gl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=lb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function ye(n,e){return n<e?-1:n>e?1:0}function Pa(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return da(s)===da(i)?ye(s,i):da(s)?1:-1}return ye(n.length,e.length)}const cb=55296,ub=57343;function da(n){const e=n.charCodeAt(0);return e>=cb&&e<=ub}function Kr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const pu="__name__";class an{constructor(e,t,r){t===void 0?t=0:t>e.length&&ce(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&ce(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return an.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof an?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=an.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return ye(e.length,t.length)}static compareSegments(e,t){const r=an.isNumericId(e),s=an.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?an.extractNumericId(e).compare(an.extractNumericId(t)):Pa(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Qn.fromString(e.substring(4,e.length-2))}}class qe extends an{construct(e,t,r){return new qe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new J(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new qe(t)}static emptyPath(){return new qe([])}}const hb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class It extends an{construct(e,t,r){return new It(e,t,r)}static isValidIdentifier(e){return hb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),It.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===pu}static keyField(){return new It([pu])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new J(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new J(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new J(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new J(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new It(t)}static emptyPath(){return new It([])}}/**
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
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie(qe.fromString(e))}static fromName(e){return new ie(qe.fromString(e).popFirst(5))}static empty(){return new ie(qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return qe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new qe(e.slice()))}}/**
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
 */function Wd(n,e,t){if(!t)throw new J(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function db(n,e,t,r){if(e===!0&&r===!0)throw new J(D.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function gu(n){if(!ie.isDocumentKey(n))throw new J(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function _u(n){if(ie.isDocumentKey(n))throw new J(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Hd(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function vo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ce(12329,{type:typeof n})}function en(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new J(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=vo(n);throw new J(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function ft(n,e){const t={typeString:n};return e&&(t.value=e),t}function ti(n,e){if(!Hd(n))throw new J(D.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new J(D.INVALID_ARGUMENT,t);return!0}/**
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
 */const yu=-62135596800,vu=1e6;class Ge{static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*vu);return new Ge(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new J(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new J(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<yu)throw new J(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/vu}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ge._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ti(e,Ge._jsonSchema))return new Ge(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-yu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ge._jsonSchemaVersion="firestore/timestamp/1.0",Ge._jsonSchema={type:ft("string",Ge._jsonSchemaVersion),seconds:ft("number"),nanoseconds:ft("number")};/**
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
 */class he{static fromTimestamp(e){return new he(e)}static min(){return new he(new Ge(0,0))}static max(){return new he(new Ge(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Fs=-1;function fb(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=he.fromTimestamp(r===1e9?new Ge(t+1,0):new Ge(t,r));return new Yn(s,ie.empty(),e)}function mb(n){return new Yn(n.readTime,n.key,Fs)}class Yn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Yn(he.min(),ie.empty(),Fs)}static max(){return new Yn(he.max(),ie.empty(),Fs)}}function pb(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ie.comparator(n.documentKey,e.documentKey),t!==0?t:ye(n.largestBatchId,e.largestBatchId))}/**
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
 */const gb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _b{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function is(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==gb)throw n;Q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ce(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new L((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof L?t:L.resolve(t)}catch(t){return L.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):L.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):L.reject(t)}static resolve(e){return new L((t,r)=>{t(e)})}static reject(e){return new L((t,r)=>{r(e)})}static waitFor(e){return new L((t,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=L.resolve(!1);for(const r of e)t=t.next(s=>s?L.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new L((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;t(e[h]).next(f=>{a[h]=f,++l,l===i&&r(a)},f=>s(f))}})}static doWhile(e,t){return new L((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function yb(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function os(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class bo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}bo.ce=-1;/**
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
 */const _l=-1;function wo(n){return n==null}function Zi(n){return n===0&&1/n==-1/0}function vb(n){return typeof n=="number"&&Number.isInteger(n)&&!Zi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Gd="";function bb(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=bu(e)),e=wb(n.get(t),e);return bu(e)}function wb(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Gd:t+="";break;default:t+=i}}return t}function bu(n){return n+Gd+""}/**
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
 */function wu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ar(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Kd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Je{constructor(e,t){this.comparator=e,this.root=t||Tt.EMPTY}insert(e,t){return new Je(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Tt.BLACK,null,null))}remove(e){return new Je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Tt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ti(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ti(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ti(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ti(this.root,e,this.comparator,!0)}}class Ti{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Tt{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Tt.RED,this.left=s??Tt.EMPTY,this.right=i??Tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Tt(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Tt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ce(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ce(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ce(27949);return e+(this.isRed()?0:1)}}Tt.EMPTY=null,Tt.RED=!0,Tt.BLACK=!1;Tt.EMPTY=new class{constructor(){this.size=0}get key(){throw ce(57766)}get value(){throw ce(16141)}get color(){throw ce(16727)}get left(){throw ce(29726)}get right(){throw ce(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Tt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class vt{constructor(e){this.comparator=e,this.data=new Je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new xu(this.data.getIterator())}getIteratorFrom(e){return new xu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof vt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new vt(this.comparator);return t.data=e,t}}class xu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class jt{constructor(e){this.fields=e,e.sort(It.comparator)}static empty(){return new jt([])}unionWith(e){let t=new vt(It.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new jt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Kr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Qd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class At{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Qd("Invalid base64 string: "+i):i}}(e);return new At(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new At(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}At.EMPTY_BYTE_STRING=new At("");const xb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xn(n){if(Pe(!!n,39018),typeof n=="string"){let e=0;const t=xb.exec(n);if(Pe(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:at(n.seconds),nanos:at(n.nanos)}}function at(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Zn(n){return typeof n=="string"?At.fromBase64String(n):At.fromUint8Array(n)}/**
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
 */const Jd="server_timestamp",Yd="__type__",Xd="__previous_value__",Zd="__local_write_time__";function yl(n){return(n?.mapValue?.fields||{})[Yd]?.stringValue===Jd}function xo(n){const e=n.mapValue.fields[Xd];return yl(e)?xo(e):e}function js(n){const e=Xn(n.mapValue.fields[Zd].timestampValue);return new Ge(e.seconds,e.nanos)}/**
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
 */class Eb{constructor(e,t,r,s,i,a,l,u,h,f,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=p}}const eo="(default)";class Bs{constructor(e,t){this.projectId=e,this.database=t||eo}static empty(){return new Bs("","")}get isDefaultDatabase(){return this.database===eo}isEqual(e){return e instanceof Bs&&e.projectId===this.projectId&&e.database===this.database}}function Tb(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new J(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bs(n.options.projectId,e)}/**
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
 */const ef="__type__",Ib="__max__",Ii={mapValue:{}},tf="__vector__",to="value";function er(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?yl(n)?4:Sb(n)?9007199254740991:Ab(n)?10:11:ce(28295,{value:n})}function mn(n,e){if(n===e)return!0;const t=er(n);if(t!==er(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return js(n).isEqual(js(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Xn(s.timestampValue),l=Xn(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Zn(s.bytesValue).isEqual(Zn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return at(s.geoPointValue.latitude)===at(i.geoPointValue.latitude)&&at(s.geoPointValue.longitude)===at(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return at(s.integerValue)===at(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=at(s.doubleValue),l=at(i.doubleValue);return a===l?Zi(a)===Zi(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return Kr(n.arrayValue.values||[],e.arrayValue.values||[],mn);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(wu(a)!==wu(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!mn(a[u],l[u])))return!1;return!0}(n,e);default:return ce(52216,{left:n})}}function qs(n,e){return(n.values||[]).find(t=>mn(t,e))!==void 0}function Qr(n,e){if(n===e)return 0;const t=er(n),r=er(e);if(t!==r)return ye(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ye(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=at(i.integerValue||i.doubleValue),u=at(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return Eu(n.timestampValue,e.timestampValue);case 4:return Eu(js(n),js(e));case 5:return Pa(n.stringValue,e.stringValue);case 6:return function(i,a){const l=Zn(i),u=Zn(a);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),u=a.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ye(l[h],u[h]);if(f!==0)return f}return ye(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=ye(at(i.latitude),at(a.latitude));return l!==0?l:ye(at(i.longitude),at(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Tu(n.arrayValue,e.arrayValue);case 10:return function(i,a){const l=i.fields||{},u=a.fields||{},h=l[to]?.arrayValue,f=u[to]?.arrayValue,p=ye(h?.values?.length||0,f?.values?.length||0);return p!==0?p:Tu(h,f)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===Ii.mapValue&&a===Ii.mapValue)return 0;if(i===Ii.mapValue)return 1;if(a===Ii.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=a.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const w=Pa(u[p],f[p]);if(w!==0)return w;const x=Qr(l[u[p]],h[f[p]]);if(x!==0)return x}return ye(u.length,f.length)}(n.mapValue,e.mapValue);default:throw ce(23264,{he:t})}}function Eu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ye(n,e);const t=Xn(n),r=Xn(e),s=ye(t.seconds,r.seconds);return s!==0?s:ye(t.nanos,r.nanos)}function Tu(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Qr(t[s],r[s]);if(i)return i}return ye(t.length,r.length)}function Jr(n){return $a(n)}function $a(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Xn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Zn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ie.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=$a(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${$a(t.fields[a])}`;return s+"}"}(n.mapValue):ce(61005,{value:n})}function Ni(n){switch(er(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=xo(n);return e?16+Ni(e):16;case 5:return 2*n.stringValue.length;case 6:return Zn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ni(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return ar(r.fields,(i,a)=>{s+=i.length+Ni(a)}),s}(n.mapValue);default:throw ce(13486,{value:n})}}function Iu(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Va(n){return!!n&&"integerValue"in n}function vl(n){return!!n&&"arrayValue"in n}function Au(n){return!!n&&"nullValue"in n}function Su(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Di(n){return!!n&&"mapValue"in n}function Ab(n){return(n?.mapValue?.fields||{})[ef]?.stringValue===tf}function Ps(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return ar(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ps(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ps(n.arrayValue.values[t]);return e}return{...n}}function Sb(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Ib}/**
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
 */class Dt{constructor(e){this.value=e}static empty(){return new Dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Di(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ps(t)}setAll(e){let t=It.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=Ps(a):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Di(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return mn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Di(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){ar(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Dt(Ps(this.value))}}function nf(n){const e=[];return ar(n.fields,(t,r)=>{const s=new It([t]);if(Di(r)){const i=nf(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new jt(e)}/**
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
 */class kt{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new kt(e,0,he.min(),he.min(),he.min(),Dt.empty(),0)}static newFoundDocument(e,t,r,s){return new kt(e,1,t,he.min(),r,s,0)}static newNoDocument(e,t){return new kt(e,2,t,he.min(),he.min(),Dt.empty(),0)}static newUnknownDocument(e,t){return new kt(e,3,t,he.min(),he.min(),Dt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof kt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new kt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class no{constructor(e,t){this.position=e,this.inclusive=t}}function Cu(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=ie.comparator(ie.fromName(a.referenceValue),t.key):r=Qr(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ku(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!mn(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ro{constructor(e,t="asc"){this.field=e,this.dir=t}}function Cb(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class rf{}class ht extends rf{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Rb(e,t,r):t==="array-contains"?new Vb(e,r):t==="in"?new Nb(e,r):t==="not-in"?new Db(e,r):t==="array-contains-any"?new Ob(e,r):new ht(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Pb(e,r):new $b(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Qr(t,this.value)):t!==null&&er(this.value)===er(t)&&this.matchesComparison(Qr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ce(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tn extends rf{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new tn(e,t)}matches(e){return sf(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function sf(n){return n.op==="and"}function of(n){return kb(n)&&sf(n)}function kb(n){for(const e of n.filters)if(e instanceof tn)return!1;return!0}function Na(n){if(n instanceof ht)return n.field.canonicalString()+n.op.toString()+Jr(n.value);if(of(n))return n.filters.map(e=>Na(e)).join(",");{const e=n.filters.map(t=>Na(t)).join(",");return`${n.op}(${e})`}}function af(n,e){return n instanceof ht?function(r,s){return s instanceof ht&&r.op===s.op&&r.field.isEqual(s.field)&&mn(r.value,s.value)}(n,e):n instanceof tn?function(r,s){return s instanceof tn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&af(a,s.filters[l]),!0):!1}(n,e):void ce(19439)}function lf(n){return n instanceof ht?function(t){return`${t.field.canonicalString()} ${t.op} ${Jr(t.value)}`}(n):n instanceof tn?function(t){return t.op.toString()+" {"+t.getFilters().map(lf).join(" ,")+"}"}(n):"Filter"}class Rb extends ht{constructor(e,t,r){super(e,t,r),this.key=ie.fromName(r.referenceValue)}matches(e){const t=ie.comparator(e.key,this.key);return this.matchesComparison(t)}}class Pb extends ht{constructor(e,t){super(e,"in",t),this.keys=cf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class $b extends ht{constructor(e,t){super(e,"not-in",t),this.keys=cf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function cf(n,e){return(e.arrayValue?.values||[]).map(t=>ie.fromName(t.referenceValue))}class Vb extends ht{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return vl(t)&&qs(t.arrayValue,this.value)}}class Nb extends ht{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&qs(this.value.arrayValue,t)}}class Db extends ht{constructor(e,t){super(e,"not-in",t)}matches(e){if(qs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!qs(this.value.arrayValue,t)}}class Ob extends ht{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!vl(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>qs(this.value.arrayValue,r))}}/**
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
 */class Lb{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Te=null}}function Ru(n,e=null,t=[],r=[],s=null,i=null,a=null){return new Lb(n,e,t,r,s,i,a)}function bl(n){const e=fe(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Na(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),wo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Jr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Jr(r)).join(",")),e.Te=t}return e.Te}function wl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Cb(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!af(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!ku(n.startAt,e.startAt)&&ku(n.endAt,e.endAt)}function Da(n){return ie.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class ni{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Mb(n,e,t,r,s,i,a,l){return new ni(n,e,t,r,s,i,a,l)}function xl(n){return new ni(n)}function Pu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ub(n){return ie.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function uf(n){return n.collectionGroup!==null}function $s(n){const e=fe(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new vt(It.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new ro(i,r))}),t.has(It.keyField().canonicalString())||e.Ie.push(new ro(It.keyField(),r))}return e.Ie}function un(n){const e=fe(n);return e.Ee||(e.Ee=Fb(e,$s(n))),e.Ee}function Fb(n,e){if(n.limitType==="F")return Ru(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ro(s.field,i)});const t=n.endAt?new no(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new no(n.startAt.position,n.startAt.inclusive):null;return Ru(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Oa(n,e){const t=n.filters.concat([e]);return new ni(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function La(n,e,t){return new ni(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Eo(n,e){return wl(un(n),un(e))&&n.limitType===e.limitType}function hf(n){return`${bl(un(n))}|lt:${n.limitType}`}function Nr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>lf(s)).join(", ")}]`),wo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Jr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Jr(s)).join(",")),`Target(${r})`}(un(n))}; limitType=${n.limitType})`}function To(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ie.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of $s(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,u){const h=Cu(a,l,u);return a.inclusive?h<=0:h<0}(r.startAt,$s(r),s)||r.endAt&&!function(a,l,u){const h=Cu(a,l,u);return a.inclusive?h>=0:h>0}(r.endAt,$s(r),s))}(n,e)}function jb(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function df(n){return(e,t)=>{let r=!1;for(const s of $s(n)){const i=Bb(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Bb(n,e,t){const r=n.field.isKeyField()?ie.comparator(e.key,t.key):function(i,a,l){const u=a.data.field(i),h=l.data.field(i);return u!==null&&h!==null?Qr(u,h):ce(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ce(19790,{direction:n.dir})}}/**
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
 */class Ar{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ar(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Kd(this.inner)}size(){return this.innerSize}}/**
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
 */const qb=new Je(ie.comparator);function Cn(){return qb}const ff=new Je(ie.comparator);function As(...n){let e=ff;for(const t of n)e=e.insert(t.key,t);return e}function mf(n){let e=ff;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function yr(){return Vs()}function pf(){return Vs()}function Vs(){return new Ar(n=>n.toString(),(n,e)=>n.isEqual(e))}const zb=new Je(ie.comparator),Wb=new vt(ie.comparator);function ve(...n){let e=Wb;for(const t of n)e=e.add(t);return e}const Hb=new vt(ye);function Gb(){return Hb}/**
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
 */function El(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zi(e)?"-0":e}}function gf(n){return{integerValue:""+n}}function Kb(n,e){return vb(e)?gf(e):El(n,e)}/**
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
 */class Io{constructor(){this._=void 0}}function Qb(n,e,t){return n instanceof zs?function(s,i){const a={fields:{[Yd]:{stringValue:Jd},[Zd]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&yl(i)&&(i=xo(i)),i&&(a.fields[Xd]=i),{mapValue:a}}(t,e):n instanceof Yr?yf(n,e):n instanceof Xr?vf(n,e):function(s,i){const a=_f(s,i),l=$u(a)+$u(s.Ae);return Va(a)&&Va(s.Ae)?gf(l):El(s.serializer,l)}(n,e)}function Jb(n,e,t){return n instanceof Yr?yf(n,e):n instanceof Xr?vf(n,e):t}function _f(n,e){return n instanceof so?function(r){return Va(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class zs extends Io{}class Yr extends Io{constructor(e){super(),this.elements=e}}function yf(n,e){const t=bf(e);for(const r of n.elements)t.some(s=>mn(s,r))||t.push(r);return{arrayValue:{values:t}}}class Xr extends Io{constructor(e){super(),this.elements=e}}function vf(n,e){let t=bf(e);for(const r of n.elements)t=t.filter(s=>!mn(s,r));return{arrayValue:{values:t}}}class so extends Io{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function $u(n){return at(n.integerValue||n.doubleValue)}function bf(n){return vl(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Tl{constructor(e,t){this.field=e,this.transform=t}}function Yb(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Yr&&s instanceof Yr||r instanceof Xr&&s instanceof Xr?Kr(r.elements,s.elements,mn):r instanceof so&&s instanceof so?mn(r.Ae,s.Ae):r instanceof zs&&s instanceof zs}(n.transform,e.transform)}class Xb{constructor(e,t){this.version=e,this.transformResults=t}}class Wt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Wt}static exists(e){return new Wt(void 0,e)}static updateTime(e){return new Wt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Oi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ao{}function wf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Il(n.key,Wt.none()):new ri(n.key,n.data,Wt.none());{const t=n.data,r=Dt.empty();let s=new vt(It.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new lr(n.key,r,new jt(s.toArray()),Wt.none())}}function Zb(n,e,t){n instanceof ri?function(s,i,a){const l=s.value.clone(),u=Nu(s.fieldTransforms,i,a.transformResults);l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof lr?function(s,i,a){if(!Oi(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Nu(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(xf(s)),u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Ns(n,e,t,r){return n instanceof ri?function(i,a,l,u){if(!Oi(i.precondition,a))return l;const h=i.value.clone(),f=Du(i.fieldTransforms,u,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof lr?function(i,a,l,u){if(!Oi(i.precondition,a))return l;const h=Du(i.fieldTransforms,u,a),f=a.data;return f.setAll(xf(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(i,a,l){return Oi(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function ew(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=_f(r.transform,s||null);i!=null&&(t===null&&(t=Dt.empty()),t.set(r.field,i))}return t||null}function Vu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Kr(r,s,(i,a)=>Yb(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ri extends Ao{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class lr extends Ao{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function xf(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Nu(n,e,t){const r=new Map;Pe(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,Jb(a,l,t[s]))}return r}function Du(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,Qb(i,a,e))}return r}class Il extends Ao{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tw extends Ao{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class nw{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Zb(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Ns(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Ns(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=pf();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const u=wf(a,l);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(he.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ve())}isEqual(e){return this.batchId===e.batchId&&Kr(this.mutations,e.mutations,(t,r)=>Vu(t,r))&&Kr(this.baseMutations,e.baseMutations,(t,r)=>Vu(t,r))}}class Al{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Pe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return zb}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Al(e,t,r,s)}}/**
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
 */class rw{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class sw{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ct,Te;function iw(n){switch(n){case D.OK:return ce(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return ce(15467,{code:n})}}function Ef(n){if(n===void 0)return Sn("GRPC error has no .code"),D.UNKNOWN;switch(n){case ct.OK:return D.OK;case ct.CANCELLED:return D.CANCELLED;case ct.UNKNOWN:return D.UNKNOWN;case ct.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case ct.INTERNAL:return D.INTERNAL;case ct.UNAVAILABLE:return D.UNAVAILABLE;case ct.UNAUTHENTICATED:return D.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case ct.NOT_FOUND:return D.NOT_FOUND;case ct.ALREADY_EXISTS:return D.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return D.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case ct.ABORTED:return D.ABORTED;case ct.OUT_OF_RANGE:return D.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return D.UNIMPLEMENTED;case ct.DATA_LOSS:return D.DATA_LOSS;default:return ce(39323,{code:n})}}(Te=ct||(ct={}))[Te.OK=0]="OK",Te[Te.CANCELLED=1]="CANCELLED",Te[Te.UNKNOWN=2]="UNKNOWN",Te[Te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Te[Te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Te[Te.NOT_FOUND=5]="NOT_FOUND",Te[Te.ALREADY_EXISTS=6]="ALREADY_EXISTS",Te[Te.PERMISSION_DENIED=7]="PERMISSION_DENIED",Te[Te.UNAUTHENTICATED=16]="UNAUTHENTICATED",Te[Te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Te[Te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Te[Te.ABORTED=10]="ABORTED",Te[Te.OUT_OF_RANGE=11]="OUT_OF_RANGE",Te[Te.UNIMPLEMENTED=12]="UNIMPLEMENTED",Te[Te.INTERNAL=13]="INTERNAL",Te[Te.UNAVAILABLE=14]="UNAVAILABLE",Te[Te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function ow(){return new TextEncoder}/**
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
 */const aw=new Qn([4294967295,4294967295],0);function Ou(n){const e=ow().encode(n),t=new Ld;return t.update(e),new Uint8Array(t.digest())}function Lu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Qn([t,r],0),new Qn([s,i],0)]}class Sl{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ss(`Invalid padding: ${t}`);if(r<0)throw new Ss(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ss(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ss(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Qn.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(Qn.fromNumber(r)));return s.compare(aw)===1&&(s=new Qn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Ou(e),[r,s]=Lu(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Sl(i,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.ge===0)return;const t=Ou(e),[r,s]=Lu(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Ss extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class si{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,ii.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new si(he.min(),s,new Je(ye),Cn(),ve())}}class ii{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ii(r,t,ve(),ve(),ve())}}/**
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
 */class Li{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class Tf{constructor(e,t){this.targetId=e,this.Ce=t}}class If{constructor(e,t,r=At.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Mu{constructor(){this.ve=0,this.Fe=Uu(),this.Me=At.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ve(),t=ve(),r=ve();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:ce(38017,{changeType:i})}}),new ii(this.Me,this.xe,e,t,r)}Ke(){this.Oe=!1,this.Fe=Uu()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Pe(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class lw{constructor(e){this.Ge=e,this.ze=new Map,this.je=Cn(),this.Je=Ai(),this.He=Ai(),this.Ze=new Je(ye)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:ce(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(Da(i))if(r===0){const a=new ie(i.path);this.et(t,a,kt.newNoDocument(a,he.min()))}else Pe(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const l=this.ut(e),u=l?this.ct(l,e,a):1;if(u!==0){this.it(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=Zn(r).toUint8Array()}catch(u){if(u instanceof Qd)return Ir("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Sl(a,s,i)}catch(u){return Ir(u instanceof Ss?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(t,i,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((i,a)=>{const l=this.ot(a);if(l){if(i.current&&Da(l.target)){const u=new ie(l.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,kt.newNoDocument(u,e))}i.Be&&(t.set(a,i.ke()),i.Ke())}});let r=ve();this.He.forEach((i,a)=>{let l=!0;a.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,a)=>a.setReadTime(e));const s=new si(e,t,this.Ze,this.je,r);return this.je=Cn(),this.Je=Ai(),this.He=Ai(),this.Ze=new Je(ye),s}Ye(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.qe(t,1):s.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Mu,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new vt(ye),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new vt(ye),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||Q("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Mu),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Ai(){return new Je(ie.comparator)}function Uu(){return new Je(ie.comparator)}const cw={asc:"ASCENDING",desc:"DESCENDING"},uw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},hw={and:"AND",or:"OR"};class dw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ma(n,e){return n.useProto3Json||wo(e)?e:{value:e}}function io(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Af(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function fw(n,e){return io(n,e.toTimestamp())}function hn(n){return Pe(!!n,49232),he.fromTimestamp(function(t){const r=Xn(t);return new Ge(r.seconds,r.nanos)}(n))}function Cl(n,e){return Ua(n,e).canonicalString()}function Ua(n,e){const t=function(s){return new qe(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Sf(n){const e=qe.fromString(n);return Pe($f(e),10190,{key:e.toString()}),e}function Fa(n,e){return Cl(n.databaseId,e.path)}function fa(n,e){const t=Sf(e);if(t.get(1)!==n.databaseId.projectId)throw new J(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new J(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ie(kf(t))}function Cf(n,e){return Cl(n.databaseId,e)}function mw(n){const e=Sf(n);return e.length===4?qe.emptyPath():kf(e)}function ja(n){return new qe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function kf(n){return Pe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Fu(n,e,t){return{name:Fa(n,e),fields:t.value.mapValue.fields}}function pw(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ce(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Pe(f===void 0||typeof f=="string",58123),At.fromBase64String(f||"")):(Pe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),At.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const f=h.code===void 0?D.UNKNOWN:Ef(h.code);return new J(f,h.message||"")}(a);t=new If(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=fa(n,r.document.name),i=hn(r.document.updateTime),a=r.document.createTime?hn(r.document.createTime):he.min(),l=new Dt({mapValue:{fields:r.document.fields}}),u=kt.newFoundDocument(s,i,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];t=new Li(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=fa(n,r.document),i=r.readTime?hn(r.readTime):he.min(),a=kt.newNoDocument(s,i),l=r.removedTargetIds||[];t=new Li([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=fa(n,r.document),i=r.removedTargetIds||[];t=new Li([],i,s,null)}else{if(!("filter"in e))return ce(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new sw(s,i),l=r.targetId;t=new Tf(l,a)}}return t}function gw(n,e){let t;if(e instanceof ri)t={update:Fu(n,e.key,e.value)};else if(e instanceof Il)t={delete:Fa(n,e.key)};else if(e instanceof lr)t={update:Fu(n,e.key,e.data),updateMask:Iw(e.fieldMask)};else{if(!(e instanceof tw))return ce(16599,{dt:e.type});t={verify:Fa(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof zs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Yr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Xr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof so)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw ce(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:fw(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ce(27497)}(n,e.precondition)),t}function _w(n,e){return n&&n.length>0?(Pe(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?hn(s.updateTime):hn(i);return a.isEqual(he.min())&&(a=hn(i)),new Xb(a,s.transformResults||[])}(t,e))):[]}function yw(n,e){return{documents:[Cf(n,e.path)]}}function vw(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Cf(n,s);const i=function(h){if(h.length!==0)return Pf(tn.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(w){return{field:Dr(w.field),direction:xw(w.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Ma(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:t,parent:s}}function bw(n){let e=mw(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Pe(r===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(p){const w=Rf(p);return w instanceof tn&&of(w)?w.getFilters():[w]}(t.where));let a=[];t.orderBy&&(a=function(p){return p.map(w=>function(S){return new ro(Or(S.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(w))}(t.orderBy));let l=null;t.limit&&(l=function(p){let w;return w=typeof p=="object"?p.value:p,wo(w)?null:w}(t.limit));let u=null;t.startAt&&(u=function(p){const w=!!p.before,x=p.values||[];return new no(x,w)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const w=!p.before,x=p.values||[];return new no(x,w)}(t.endAt)),Mb(e,s,a,i,l,"F",u,h)}function ww(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ce(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Rf(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Or(t.unaryFilter.field);return ht.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Or(t.unaryFilter.field);return ht.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Or(t.unaryFilter.field);return ht.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Or(t.unaryFilter.field);return ht.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ce(61313);default:return ce(60726)}}(n):n.fieldFilter!==void 0?function(t){return ht.create(Or(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ce(58110);default:return ce(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return tn.create(t.compositeFilter.filters.map(r=>Rf(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ce(1026)}}(t.compositeFilter.op))}(n):ce(30097,{filter:n})}function xw(n){return cw[n]}function Ew(n){return uw[n]}function Tw(n){return hw[n]}function Dr(n){return{fieldPath:n.canonicalString()}}function Or(n){return It.fromServerFormat(n.fieldPath)}function Pf(n){return n instanceof ht?function(t){if(t.op==="=="){if(Su(t.value))return{unaryFilter:{field:Dr(t.field),op:"IS_NAN"}};if(Au(t.value))return{unaryFilter:{field:Dr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Su(t.value))return{unaryFilter:{field:Dr(t.field),op:"IS_NOT_NAN"}};if(Au(t.value))return{unaryFilter:{field:Dr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Dr(t.field),op:Ew(t.op),value:t.value}}}(n):n instanceof tn?function(t){const r=t.getFilters().map(s=>Pf(s));return r.length===1?r[0]:{compositeFilter:{op:Tw(t.op),filters:r}}}(n):ce(54877,{filter:n})}function Iw(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function $f(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Vf(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class bn{constructor(e,t,r,s,i=he.min(),a=he.min(),l=At.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new bn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new bn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Aw{constructor(e){this.yt=e}}function Sw(n){const e=bw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?La(e,e.limit,"L"):e}/**
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
 */class Cw{constructor(){this.bn=new kw}addToCollectionParentIndex(e,t){return this.bn.add(t),L.resolve()}getCollectionParents(e,t){return L.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return L.resolve()}deleteFieldIndex(e,t){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,t){return L.resolve()}getDocumentsMatchingTarget(e,t){return L.resolve(null)}getIndexType(e,t){return L.resolve(0)}getFieldIndexes(e,t){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,t){return L.resolve(Yn.min())}getMinOffsetFromCollectionGroup(e,t){return L.resolve(Yn.min())}updateCollectionGroup(e,t,r){return L.resolve()}updateIndexEntries(e,t){return L.resolve()}}class kw{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new vt(qe.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new vt(qe.comparator)).toArray()}}/**
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
 */const ju={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Nf=41943040;class Nt{static withCacheSize(e){return new Nt(e,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Nt.DEFAULT_COLLECTION_PERCENTILE=10,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Nt.DEFAULT=new Nt(Nf,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Nt.DISABLED=new Nt(-1,0,0);/**
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
 */class tr{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new tr(0)}static ar(){return new tr(-1)}}/**
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
 */const Bu="LruGarbageCollector",Rw=1048576;function qu([n,e],[t,r]){const s=ye(n,t);return s===0?ye(e,r):s}class Pw{constructor(e){this.Pr=e,this.buffer=new vt(qu),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();qu(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class $w{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){Q(Bu,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){os(t)?Q(Bu,"Ignoring IndexedDB error during garbage collection: ",t):await is(t)}await this.Ar(3e5)})}}class Vw{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return L.resolve(bo.ce);const r=new Pw(t);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(Q("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(ju)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ju):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let r,s,i,a,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(Q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,t))).next(p=>(i=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Vr()<=be.DEBUG&&Q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function Nw(n,e){return new Vw(n,e)}/**
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
 */class Dw{constructor(){this.changes=new Ar(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,kt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?L.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Ow{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Lw{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Ns(r.mutation,s,jt.empty(),Ge.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ve()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ve()){const s=yr();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=As();return i.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=yr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ve()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let i=Cn();const a=Vs(),l=function(){return Vs()}();return t.forEach((u,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof lr)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Ns(f.mutation,h,f.mutation.getFieldMask(),Ge.now())):a.set(h.key,jt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>l.set(h,new Ow(f,a.get(h)??null))),l))}recalculateAndSaveOverlays(e,t){const r=Vs();let s=new Je((a,l)=>a-l),i=ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(u=>{const h=t.get(u);if(h===null)return;let f=r.get(u)||jt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const p=(s.get(l.batchId)||ve()).add(u);s=s.insert(l.batchId,p)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,p=pf();f.forEach(w=>{if(!i.has(w)){const x=wf(t.get(w),r.get(w));x!==null&&p.set(w,x),i=i.add(w)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return L.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return Ub(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):uf(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):L.resolve(yr());let l=Fs,u=i;return a.next(h=>L.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(w=>{u=u.insert(f,w)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,ve())).next(f=>({batchId:l,changes:mf(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ie(t)).next(r=>{let s=As();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=As();return this.indexManager.getCollectionParents(e,i).next(l=>L.forEach(l,u=>{const h=function(p,w){return new ni(w,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,w)=>{a=a.insert(p,w)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((u,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,kt.newInvalidDocument(f)))});let l=As();return a.forEach((u,h)=>{const f=i.get(u);f!==void 0&&Ns(f.mutation,h,jt.empty(),Ge.now()),To(t,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class Mw{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return L.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:hn(s.createTime)}}(t)),L.resolve()}getNamedQuery(e,t){return L.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,function(s){return{name:s.name,query:Sw(s.bundledQuery),readTime:hn(s.readTime)}}(t)),L.resolve()}}/**
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
 */class Uw{constructor(){this.overlays=new Je(ie.comparator),this.Lr=new Map}getOverlay(e,t){return L.resolve(this.overlays.get(t))}getOverlays(e,t){const r=yr();return L.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.St(e,t,i)}),L.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),L.resolve()}getOverlaysForCollection(e,t,r){const s=yr(),i=t.length+1,a=new ie(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return L.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Je((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=yr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=yr(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return L.resolve(l)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new rw(t,r));let i=this.Lr.get(t);i===void 0&&(i=ve(),this.Lr.set(t,i)),this.Lr.set(t,i.add(r.key))}}/**
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
 */class Fw{constructor(){this.sessionToken=At.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,L.resolve()}}/**
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
 */class kl{constructor(){this.kr=new vt(xt.Kr),this.qr=new vt(xt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const r=new xt(e,t);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new xt(e,t))}Qr(e,t){e.forEach(r=>this.removeReference(r,t))}Gr(e){const t=new ie(new qe([])),r=new xt(t,e),s=new xt(t,e+1),i=[];return this.qr.forEachInRange([r,s],a=>{this.Wr(a),i.push(a.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new ie(new qe([])),r=new xt(t,e),s=new xt(t,e+1);let i=ve();return this.qr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new xt(e,0),r=this.kr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class xt{constructor(e,t){this.key=e,this.Jr=t}static Kr(e,t){return ie.comparator(e.key,t.key)||ye(e.Jr,t.Jr)}static Ur(e,t){return ye(e.Jr,t.Jr)||ie.comparator(e.key,t.key)}}/**
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
 */class jw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new vt(xt.Kr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new nw(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.Hr=this.Hr.add(new xt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(a)}lookupMutationBatch(e,t){return L.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?_l:this.Yn-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new xt(t,0),s=new xt(t,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([r,s],a=>{const l=this.Zr(a.Jr);i.push(l)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new vt(ye);return t.forEach(s=>{const i=new xt(s,0),a=new xt(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,a],l=>{r=r.add(l.Jr)})}),L.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;ie.isDocumentKey(i)||(i=i.child(""));const a=new xt(new ie(i),0);let l=new vt(ye);return this.Hr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.Jr)),!0)},a),L.resolve(this.Yr(l))}Yr(e){const t=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Pe(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return L.forEach(t.mutations,s=>{const i=new xt(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,t){const r=new xt(t,0),s=this.Hr.firstAfterOrEqual(r);return L.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Bw{constructor(e){this.ti=e,this.docs=function(){return new Je(ie.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ti(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return L.resolve(r?r.document.mutableCopy():kt.newInvalidDocument(t))}getEntries(e,t){let r=Cn();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():kt.newInvalidDocument(s))}),L.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Cn();const a=t.path,l=new ie(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||pb(mb(f),r)<=0||(s.has(f.key)||To(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,t,r,s){ce(9500)}ni(e,t){return L.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new qw(this)}getSize(e){return L.resolve(this.size)}}class qw extends Dw{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),L.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class zw{constructor(e){this.persistence=e,this.ri=new Ar(t=>bl(t),wl),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.ii=0,this.si=new kl,this.targetCount=0,this.oi=tr._r()}forEachTarget(e,t){return this.ri.forEach((r,s)=>t(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ii&&(this.ii=t),L.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new tr(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,L.resolve()}updateTargetData(e,t){return this.lr(t),L.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ri.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.ri.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),L.waitFor(i).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,t){const r=this.ri.get(t)||null;return L.resolve(r)}addMatchingKeys(e,t,r){return this.si.$r(t,r),L.resolve()}removeMatchingKeys(e,t,r){this.si.Qr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),L.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),L.resolve()}getMatchingKeysForTargetId(e,t){const r=this.si.jr(t);return L.resolve(r)}containsKey(e,t){return L.resolve(this.si.containsKey(t))}}/**
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
 */class Df{constructor(e,t){this._i={},this.overlays={},this.ai=new bo(0),this.ui=!1,this.ui=!0,this.ci=new Fw,this.referenceDelegate=e(this),this.li=new zw(this),this.indexManager=new Cw,this.remoteDocumentCache=function(s){return new Bw(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new Aw(t),this.Pi=new Mw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Uw,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this._i[e.toKey()];return r||(r=new jw(t,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,r){Q("MemoryPersistence","Starting transaction:",e);const s=new Ww(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,t){return L.or(Object.values(this._i).map(r=>()=>r.containsKey(e,t)))}}class Ww extends _b{constructor(e){super(),this.currentSequenceNumber=e}}class Rl{constructor(e){this.persistence=e,this.Ri=new kl,this.Ai=null}static Vi(e){return new Rl(e)}get di(){if(this.Ai)return this.Ai;throw ce(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.di.delete(r.toString()),L.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.di.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),L.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.di,r=>{const s=ie.fromPath(r);return this.mi(e,s).next(i=>{i||t.removeEntry(s,he.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return L.or([()=>L.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class oo{constructor(e,t){this.persistence=e,this.fi=new Ar(r=>bb(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Nw(this,t)}static Vi(e,t){return new oo(e,t)}Ti(){}Ii(e){return L.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}pr(e){let t=0;return this.mr(e,r=>{t++}).next(()=>t)}mr(e,t){return L.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?L.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,a=>this.wr(e,a,t).next(l=>{l||(r++,i.removeEntry(a,he.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),L.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),L.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ni(e.data.value)),t}wr(e,t,r){return L.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return L.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Pl{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Ts=r,this.Is=s}static Es(e,t){let r=ve(),s=ve();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Pl(e,t.fromCache,r,s)}}/**
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
 */class Hw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Gw{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return vg()?8:yb(Pt())>0?6:4}()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.gs(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ps(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Hw;return this.ys(e,t,a).next(l=>{if(i.result=l,this.As)return this.ws(e,t,a,l.size)})}).next(()=>i.result)}ws(e,t,r,s){return r.documentReadCount<this.Vs?(Vr()<=be.DEBUG&&Q("QueryEngine","SDK will not create cache indexes for query:",Nr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),L.resolve()):(Vr()<=be.DEBUG&&Q("QueryEngine","Query:",Nr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Vr()<=be.DEBUG&&Q("QueryEngine","The SDK decides to create cache indexes for query:",Nr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,un(t))):L.resolve())}gs(e,t){if(Pu(t))return L.resolve(null);let r=un(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=La(t,null,"F"),r=un(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=ve(...i);return this.fs.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ss(t,l);return this.bs(t,h,a,u.readTime)?this.gs(e,La(t,null,"F")):this.Ds(e,h,t,u)}))})))}ps(e,t,r,s){return Pu(t)||s.isEqual(he.min())?L.resolve(null):this.fs.getDocuments(e,r).next(i=>{const a=this.Ss(t,i);return this.bs(t,a,r,s)?L.resolve(null):(Vr()<=be.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Nr(t)),this.Ds(e,a,t,fb(s,Fs)).next(l=>l))})}Ss(e,t){let r=new vt(df(e));return t.forEach((s,i)=>{To(e,i)&&(r=r.add(i))}),r}bs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,t,r){return Vr()<=be.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",Nr(t)),this.fs.getDocumentsMatchingQuery(e,t,Yn.min(),r)}Ds(e,t,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const $l="LocalStore",Kw=3e8;class Qw{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new Je(ye),this.Fs=new Ar(i=>bl(i),wl),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Lw(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}}function Jw(n,e,t,r){return new Qw(n,e,t,r)}async function Of(n,e){const t=fe(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Os(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let u=ve();for(const h of s){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(h=>({Ns:h,removedBatchIds:a,addedBatchIds:l}))})})}function Yw(n,e){const t=fe(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const p=h.batch,w=p.keys();let x=L.resolve();return w.forEach(S=>{x=x.next(()=>f.getEntry(u,S)).next($=>{const V=h.docVersions.get(S);Pe(V!==null,48541),$.version.compareTo(V)<0&&(p.applyToRemoteDocument($,h),$.isValidDocument()&&($.setReadTime(h.commitVersion),f.addEntry($)))})}),x.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ve();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Lf(n){const e=fe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.li.getLastRemoteSnapshotVersion(t))}function Xw(n,e){const t=fe(n),r=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const l=[];e.targetChanges.forEach((f,p)=>{const w=s.get(p);if(!w)return;l.push(t.li.removeMatchingKeys(i,f.removedDocuments,p).next(()=>t.li.addMatchingKeys(i,f.addedDocuments,p)));let x=w.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?x=x.withResumeToken(At.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):f.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(f.resumeToken,r)),s=s.insert(p,x),function($,V,N){return $.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=Kw?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(w,x,f)&&l.push(t.li.updateTargetData(i,x))});let u=Cn(),h=ve();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(Zw(i,a,e.documentUpdates).next(f=>{u=f.Bs,h=f.Ls})),!r.isEqual(he.min())){const f=t.li.getLastRemoteSnapshotVersion(i).next(p=>t.li.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return L.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(t.vs=s,i))}function Zw(n,e,t){let r=ve(),s=ve();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=Cn();return t.forEach((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(he.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):Q($l,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Bs:a,Ls:s}})}function ex(n,e){const t=fe(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=_l),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function tx(n,e){const t=fe(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.li.getTargetData(r,e).next(i=>i?(s=i,L.resolve(s)):t.li.allocateTargetId(r).next(a=>(s=new bn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(r.targetId,r),t.Fs.set(e,r.targetId)),r})}async function Ba(n,e,t){const r=fe(n),s=r.vs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!os(a))throw a;Q($l,`Failed to update sequence numbers for target ${e}: ${a}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function zu(n,e,t){const r=fe(n);let s=he.min(),i=ve();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,f){const p=fe(u),w=p.Fs.get(f);return w!==void 0?L.resolve(p.vs.get(w)):p.li.getTargetData(h,f)}(r,a,un(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(a,l.targetId).next(u=>{i=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(a,e,t?s:he.min(),t?i:ve())).next(l=>(nx(r,jb(e),l),{documents:l,ks:i})))}function nx(n,e,t){let r=n.Ms.get(e)||he.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Ms.set(e,r)}class Wu{constructor(){this.activeTargetIds=Gb()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class rx{constructor(){this.vo=new Wu,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,r){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Wu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class sx{Mo(e){}shutdown(){}}/**
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
 */const Hu="ConnectivityMonitor";class Gu{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){Q(Hu,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){Q(Hu,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Si=null;function qa(){return Si===null?Si=function(){return 268435456+Math.round(2147483648*Math.random())}():Si++,"0x"+Si.toString(16)}/**
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
 */const ma="RestConnection",ix={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class ox{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===eo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const a=qa(),l=this.Qo(e,t.toUriEncodedString());Q(ma,`Sending RPC '${e}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,i);const{host:h}=new URL(l),f=Js(h);return this.zo(e,l,u,r,f).then(p=>(Q(ma,`Received RPC '${e}' ${a}: `,p),p),p=>{throw Ir(ma,`RPC '${e}' ${a} failed with error: `,p,"url: ",l,"request:",r),p})}jo(e,t,r,s,i,a){return this.Wo(e,t,r,s,i)}Go(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ss}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,t){const r=ix[e];let s=`${this.qo}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class ax{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const St="WebChannelConnection",xs=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(s){setTimeout(()=>{throw s},0)}})};class qr extends ox{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!qr.c_){const e=jd();xs(e,Fd.STAT_EVENT,t=>{t.stat===Ra.PROXY?Q(St,"STAT_EVENT: detected buffering proxy"):t.stat===Ra.NOPROXY&&Q(St,"STAT_EVENT: detected no buffering proxy")}),qr.c_=!0}}zo(e,t,r,s,i){const a=qa();return new Promise((l,u)=>{const h=new Md;h.setWithCredentials(!0),h.listenOnce(Ud.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Vi.NO_ERROR:const p=h.getResponseJson();Q(St,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),l(p);break;case Vi.TIMEOUT:Q(St,`RPC '${e}' ${a} timed out`),u(new J(D.DEADLINE_EXCEEDED,"Request time out"));break;case Vi.HTTP_ERROR:const w=h.getStatus();if(Q(St,`RPC '${e}' ${a} failed with status:`,w,"response text:",h.getResponseText()),w>0){let x=h.getResponseJson();Array.isArray(x)&&(x=x[0]);const S=x?.error;if(S&&S.status&&S.message){const $=function(N){const C=N.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(C)>=0?C:D.UNKNOWN}(S.status);u(new J($,S.message))}else u(new J(D.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new J(D.UNAVAILABLE,"Connection failed."));break;default:ce(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{Q(St,`RPC '${e}' ${a} completed.`)}});const f=JSON.stringify(s);Q(St,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",f,r,15)})}T_(e,t,r){const s=qa(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const h=i.join("");Q(St,`Creating RPC '${e}' stream ${s}: ${h}`,l);const f=a.createWebChannel(h,l);this.I_(f);let p=!1,w=!1;const x=new ax({Jo:S=>{w?Q(St,`Not sending because RPC '${e}' stream ${s} is closed:`,S):(p||(Q(St,`Opening RPC '${e}' stream ${s} transport.`),f.open(),p=!0),Q(St,`RPC '${e}' stream ${s} sending:`,S),f.send(S))},Ho:()=>f.close()});return xs(f,Is.EventType.OPEN,()=>{w||(Q(St,`RPC '${e}' stream ${s} transport opened.`),x.i_())}),xs(f,Is.EventType.CLOSE,()=>{w||(w=!0,Q(St,`RPC '${e}' stream ${s} transport closed`),x.o_(),this.E_(f))}),xs(f,Is.EventType.ERROR,S=>{w||(w=!0,Ir(St,`RPC '${e}' stream ${s} transport errored. Name:`,S.name,"Message:",S.message),x.o_(new J(D.UNAVAILABLE,"The operation could not be completed")))}),xs(f,Is.EventType.MESSAGE,S=>{if(!w){const $=S.data[0];Pe(!!$,16349);const V=$,N=V?.error||V[0]?.error;if(N){Q(St,`RPC '${e}' stream ${s} received error:`,N);const C=N.status;let M=function(U){const b=ct[U];if(b!==void 0)return Ef(b)}(C),O=N.message;C==="NOT_FOUND"&&O.includes("database")&&O.includes("does not exist")&&O.includes(this.databaseId.database)&&Ir(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),M===void 0&&(M=D.INTERNAL,O="Unknown error status: "+C+" with message "+N.message),w=!0,x.o_(new J(M,O)),f.close()}else Q(St,`RPC '${e}' stream ${s} received:`,$),x.__($)}}),qr.u_(),setTimeout(()=>{x.s_()},0),x}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,r){super.Go(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Bd()}}/**
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
 */function lx(n){return new qr(n)}function pa(){return typeof document<"u"?document:null}/**
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
 */function So(n){return new dw(n,!0)}/**
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
 */qr.c_=!1;class Mf{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&Q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const Ku="PersistentStream";class Uf{constructor(e,t,r,s,i,a,l,u){this.Ci=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Mf(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(Sn(t.toString()),Sn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===t&&this.G_(r,s)},r=>{e(()=>{const s=new J(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,t){const r=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return Q(Ku,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(Q(Ku,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cx extends Uf{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=pw(this.serializer,e),r=function(i){if(!("targetChange"in i))return he.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?he.min():a.readTime?hn(a.readTime):he.min()}(e);return this.listener.H_(t,r)}Z_(e){const t={};t.database=ja(this.serializer),t.addTarget=function(i,a){let l;const u=a.target;if(l=Da(u)?{documents:yw(i,u)}:{query:vw(i,u).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Af(i,a.resumeToken);const h=Ma(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(he.min())>0){l.readTime=io(i,a.snapshotVersion.toTimestamp());const h=Ma(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=ww(this.serializer,e);r&&(t.labels=r),this.K_(t)}X_(e){const t={};t.database=ja(this.serializer),t.removeTarget=e,this.K_(t)}}class ux extends Uf{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Pe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Pe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Pe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=_w(e.writeResults,e.commitTime),r=hn(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=ja(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>gw(this.serializer,r))};this.K_(t)}}/**
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
 */class hx{}class dx extends hx{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new J(D.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Wo(e,Ua(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new J(D.UNKNOWN,i.toString())})}jo(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.jo(e,Ua(t,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new J(D.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function fx(n,e,t,r){return new dx(n,e,t,r)}class mx{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Sn(t),this.aa=!1):Q("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const pn="RemoteStore";class px{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new tr(1e3),this.Va=new tr(1001),this.da=new Set,this.ma=[],this.fa=i,this.fa.Mo(a=>{r.enqueueAndForget(async()=>{Sr(this)&&(Q(pn,"Restarting streams for network reachability change."),await async function(u){const h=fe(u);h.da.add(4),await oi(h),h.ga.set("Unknown"),h.da.delete(4),await Co(h)}(this))})}),this.ga=new mx(r,s)}}async function Co(n){if(Sr(n))for(const e of n.ma)await e(!0)}async function oi(n){for(const e of n.ma)await e(!1)}function za(n,e){return n.Ea.get(e)||void 0}function Ff(n,e){const t=fe(n),r=za(t,e.targetId);if(r!==void 0&&t.Ia.has(r))return;const s=function(l,u){const h=za(l,u);h!==void 0&&l.Ra.delete(h);const f=function(w,x){return x%2!=0?w.Va.next():w.Aa.next()}(l,u);return l.Ea.set(u,f),l.Ra.set(f,u),f}(t,e.targetId);Q(pn,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new bn(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.Ia.set(s,i),Ol(t)?Dl(t):as(t).O_()&&Nl(t,i)}function Vl(n,e){const t=fe(n),r=as(t),s=za(t,e);Q(pn,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t.Ia.delete(s),t.Ea.delete(e),t.Ra.delete(s),r.O_()&&jf(t,s),t.Ia.size===0&&(r.O_()?r.L_():Sr(t)&&t.ga.set("Unknown"))}function Nl(n,e){if(n.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const t=n.Ra.get(e.targetId);if(t===void 0)return void Q(pn,"SDK target ID not found for remote ID: "+e.targetId);const r=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(r)}as(n).Z_(e)}function jf(n,e){n.pa.$e(e),as(n).X_(e)}function Dl(n){n.pa=new lw({getRemoteKeysForTarget:e=>{const t=n.Ra.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):ve()},At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),as(n).start(),n.ga.ua()}function Ol(n){return Sr(n)&&!as(n).x_()&&n.Ia.size>0}function Sr(n){return fe(n).da.size===0}function Bf(n){n.pa=void 0}async function gx(n){n.ga.set("Online")}async function _x(n){n.Ia.forEach((e,t)=>{Nl(n,e)})}async function yx(n,e){Bf(n),Ol(n)?(n.ga.ha(e),Dl(n)):n.ga.set("Unknown")}async function vx(n,e,t){if(n.ga.set("Online"),e instanceof If&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds){if(s.Ia.has(l)){const u=s.Ra.get(l);u!==void 0&&(await s.remoteSyncer.rejectListen(u,a),s.Ea.delete(u),s.Ra.delete(l)),s.Ia.delete(l)}s.pa.removeTarget(l)}}(n,e)}catch(r){Q(pn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ao(n,r)}else if(e instanceof Li?n.pa.Xe(e):e instanceof Tf?n.pa.st(e):n.pa.tt(e),!t.isEqual(he.min()))try{const r=await Lf(n.localStore);t.compareTo(r)>=0&&await function(i,a){const l=i.pa.Tt(a);l.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const p=i.Ia.get(f);p&&i.Ia.set(f,p.withResumeToken(h.resumeToken,a))}}),l.targetMismatches.forEach((h,f)=>{const p=i.Ia.get(h);if(!p)return;i.Ia.set(h,p.withResumeToken(At.EMPTY_BYTE_STRING,p.snapshotVersion)),jf(i,h);const w=new bn(p.target,h,f,p.sequenceNumber);Nl(i,w)});const u=function(f,p){const w=new Map;p.targetChanges.forEach((S,$)=>{const V=f.Ra.get($);V!==void 0&&w.set(V,S)});let x=new Je(ye);return p.targetMismatches.forEach((S,$)=>{const V=f.Ra.get(S);V!==void 0&&(x=x.insert(V,$))}),new si(p.snapshotVersion,w,x,p.documentUpdates,p.resolvedLimboDocuments)}(i,l);return i.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){Q(pn,"Failed to raise snapshot:",r),await ao(n,r)}}async function ao(n,e,t){if(!os(e))throw e;n.da.add(1),await oi(n),n.ga.set("Offline"),t||(t=()=>Lf(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{Q(pn,"Retrying IndexedDB access"),await t(),n.da.delete(1),await Co(n)})}function qf(n,e){return e().catch(t=>ao(n,t,e))}async function ko(n){const e=fe(n),t=nr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:_l;for(;bx(e);)try{const s=await ex(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,wx(e,s)}catch(s){await ao(e,s)}zf(e)&&Wf(e)}function bx(n){return Sr(n)&&n.Ta.length<10}function wx(n,e){n.Ta.push(e);const t=nr(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function zf(n){return Sr(n)&&!nr(n).x_()&&n.Ta.length>0}function Wf(n){nr(n).start()}async function xx(n){nr(n).ra()}async function Ex(n){const e=nr(n);for(const t of n.Ta)e.ea(t.mutations)}async function Tx(n,e,t){const r=n.Ta.shift(),s=Al.from(r,e,t);await qf(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await ko(n)}async function Ix(n,e){e&&nr(n).Y_&&await async function(r,s){if(function(a){return iw(a)&&a!==D.ABORTED}(s.code)){const i=r.Ta.shift();nr(r).B_(),await qf(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ko(r)}}(n,e),zf(n)&&Wf(n)}async function Qu(n,e){const t=fe(n);t.asyncQueue.verifyOperationInProgress(),Q(pn,"RemoteStore received new credentials");const r=Sr(t);t.da.add(3),await oi(t),r&&t.ga.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await Co(t)}async function Ax(n,e){const t=fe(n);e?(t.da.delete(2),await Co(t)):e||(t.da.add(2),await oi(t),t.ga.set("Unknown"))}function as(n){return n.ya||(n.ya=function(t,r,s){const i=fe(t);return i.sa(),new cx(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:gx.bind(null,n),Yo:_x.bind(null,n),t_:yx.bind(null,n),H_:vx.bind(null,n)}),n.ma.push(async e=>{e?(n.ya.B_(),Ol(n)?Dl(n):n.ga.set("Unknown")):(await n.ya.stop(),Bf(n))})),n.ya}function nr(n){return n.wa||(n.wa=function(t,r,s){const i=fe(t);return i.sa(),new ux(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:xx.bind(null,n),t_:Ix.bind(null,n),ta:Ex.bind(null,n),na:Tx.bind(null,n)}),n.ma.push(async e=>{e?(n.wa.B_(),await ko(n)):(await n.wa.stop(),n.Ta.length>0&&(Q(pn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.wa}/**
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
 */class Ll{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new En,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new Ll(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ml(n,e){if(Sn("AsyncQueue",`${e}: ${n}`),os(n))return new J(D.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class zr{static emptySet(e){return new zr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ie.comparator(t.key,r.key):(t,r)=>ie.comparator(t.key,r.key),this.keyedMap=As(),this.sortedSet=new Je(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof zr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new zr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Ju{constructor(){this.Sa=new Je(ie.comparator)}track(e){const t=e.doc.key,r=this.Sa.get(t);r?e.type!==0&&r.type===3?this.Sa=this.Sa.insert(t,e):e.type===3&&r.type!==1?this.Sa=this.Sa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Sa=this.Sa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Sa=this.Sa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Sa=this.Sa.remove(t):e.type===1&&r.type===2?this.Sa=this.Sa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Sa=this.Sa.insert(t,{type:2,doc:e.doc}):ce(63341,{Vt:e,ba:r}):this.Sa=this.Sa.insert(t,e)}Da(){const e=[];return this.Sa.inorderTraversal((t,r)=>{e.push(r)}),e}}class Zr{constructor(e,t,r,s,i,a,l,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new Zr(e,t,zr.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Eo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Sx{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some(e=>e.Ma())}}class Cx{constructor(){this.queries=Yu(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(t,r){const s=fe(t),i=s.queries;s.queries=Yu(),i.forEach((a,l)=>{for(const u of l.va)u.onError(r)})})(this,new J(D.ABORTED,"Firestore shutting down"))}}function Yu(){return new Ar(n=>hf(n),Eo)}async function Hf(n,e){const t=fe(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Fa()&&e.Ma()&&(r=2):(i=new Sx,r=e.Ma()?0:1);try{switch(r){case 0:i.Ca=await t.onListen(s,!0);break;case 1:i.Ca=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=Ml(a,`Initialization of query '${Nr(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.va.push(e),e.Oa(t.onlineState),i.Ca&&e.Na(i.Ca)&&Ul(t)}async function Gf(n,e){const t=fe(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.va.indexOf(e);a>=0&&(i.va.splice(a,1),i.va.length===0?s=e.Ma()?0:1:!i.Fa()&&e.Ma()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function kx(n,e){const t=fe(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.va)l.Na(s)&&(r=!0);a.Ca=s}}r&&Ul(t)}function Rx(n,e,t){const r=fe(n),s=r.queries.get(e);if(s)for(const i of s.va)i.onError(t);r.queries.delete(e)}function Ul(n){n.xa.forEach(e=>{e.next()})}var Wa,Xu;(Xu=Wa||(Wa={})).Ba="default",Xu.Cache="cache";class Kf{constructor(e,t,r){this.query=e,this.La=t,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=r||{}}Na(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Zr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ka?this.qa(e)&&(this.La.next(e),t=!0):this.Ua(e,this.onlineState)&&(this.$a(e),t=!0),this.Ka=e,t}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let t=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),t=!0),t}Ua(e,t){if(!e.fromCache||!this.Ma())return!0;const r=t!=="Offline";return(!this.options.Wa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const t=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}$a(e){e=Zr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==Wa.Cache}}/**
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
 */class Qf{constructor(e){this.key=e}}class Jf{constructor(e){this.key=e}}class Px{constructor(e,t){this.query=e,this.tu=t,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=ve(),this.mutatedKeys=ve(),this.iu=df(e),this.su=new zr(this.iu)}get ou(){return this.tu}_u(e,t){const r=t?t.au:new Ju,s=t?t.su:this.su;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const w=s.get(f),x=To(this.query,p)?p:null,S=!!w&&this.mutatedKeys.has(w.key),$=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let V=!1;w&&x?w.data.isEqual(x.data)?S!==$&&(r.track({type:3,doc:x}),V=!0):this.uu(w,x)||(r.track({type:2,doc:x}),V=!0,(u&&this.iu(x,u)>0||h&&this.iu(x,h)<0)&&(l=!0)):!w&&x?(r.track({type:0,doc:x}),V=!0):w&&!x&&(r.track({type:1,doc:w}),V=!0,(u||h)&&(l=!0)),V&&(x?(a=a.add(x),i=$?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{su:a,au:r,bs:l,mutatedKeys:i}}uu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const a=e.au.Da();a.sort((f,p)=>function(x,S){const $=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ce(20277,{Vt:V})}};return $(x)-$(S)}(f.type,p.type)||this.iu(f.doc,p.doc)),this.cu(r),s=s??!1;const l=t&&!s?this.lu():[],u=this.ru.size===0&&this.current&&!s?1:0,h=u!==this.nu;return this.nu=u,a.length!==0||h?{snapshot:new Zr(this.query,e.su,i,a,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),hu:l}:{hu:l}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new Ju,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach(t=>this.tu=this.tu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.tu=this.tu.delete(t)),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=ve(),this.su.forEach(r=>{this.Pu(r.key)&&(this.ru=this.ru.add(r.key))});const t=[];return e.forEach(r=>{this.ru.has(r)||t.push(new Jf(r))}),this.ru.forEach(r=>{e.has(r)||t.push(new Qf(r))}),t}Tu(e){this.tu=e.ks,this.ru=ve();const t=this._u(e.documents);return this.applyChanges(t,!0)}Iu(){return Zr.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const Fl="SyncEngine";class $x{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Vx{constructor(e){this.key=e,this.Eu=!1}}class Nx{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ru={},this.Au=new Ar(l=>hf(l),Eo),this.Vu=new Map,this.du=new Set,this.mu=new Je(ie.comparator),this.fu=new Map,this.gu=new kl,this.pu={},this.yu=new Map,this.wu=tr.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function Dx(n,e,t=!0){const r=nm(n);let s;const i=r.Au.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Iu()):s=await Yf(r,e,t,!0),s}async function Ox(n,e){const t=nm(n);await Yf(t,e,!0,!1)}async function Yf(n,e,t,r){const s=await tx(n.localStore,un(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await Lx(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Ff(n.remoteStore,s),l}async function Lx(n,e,t,r,s){n.bu=(p,w,x)=>async function($,V,N,C){let M=V.view._u(N);M.bs&&(M=await zu($.localStore,V.query,!1).then(({documents:b})=>V.view._u(b,M)));const O=C&&C.targetChanges.get(V.targetId),z=C&&C.targetMismatches.get(V.targetId)!=null,U=V.view.applyChanges(M,$.isPrimaryClient,O,z);return eh($,V.targetId,U.hu),U.snapshot}(n,p,w,x);const i=await zu(n.localStore,e,!0),a=new Px(e,i.ks),l=a._u(i.documents),u=ii.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(l,n.isPrimaryClient,u);eh(n,t,h.hu);const f=new $x(e,t,a);return n.Au.set(e,f),n.Vu.has(t)?n.Vu.get(t).push(e):n.Vu.set(t,[e]),h.snapshot}async function Mx(n,e,t){const r=fe(n),s=r.Au.get(e),i=r.Vu.get(s.targetId);if(i.length>1)return r.Vu.set(s.targetId,i.filter(a=>!Eo(a,e))),void r.Au.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ba(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Vl(r.remoteStore,s.targetId),Ha(r,s.targetId)}).catch(is)):(Ha(r,s.targetId),await Ba(r.localStore,s.targetId,!0))}async function Ux(n,e){const t=fe(n),r=t.Au.get(e),s=t.Vu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Vl(t.remoteStore,r.targetId))}async function Fx(n,e,t){const r=Gx(n);try{const s=await function(a,l){const u=fe(a),h=Ge.now(),f=l.reduce((x,S)=>x.add(S.key),ve());let p,w;return u.persistence.runTransaction("Locally write mutations","readwrite",x=>{let S=Cn(),$=ve();return u.xs.getEntries(x,f).next(V=>{S=V,S.forEach((N,C)=>{C.isValidDocument()||($=$.add(N))})}).next(()=>u.localDocuments.getOverlayedDocuments(x,S)).next(V=>{p=V;const N=[];for(const C of l){const M=ew(C,p.get(C.key).overlayedDocument);M!=null&&N.push(new lr(C.key,M,nf(M.value.mapValue),Wt.exists(!0)))}return u.mutationQueue.addMutationBatch(x,h,N,l)}).next(V=>{w=V;const N=V.applyToLocalDocumentSet(p,$);return u.documentOverlayCache.saveOverlays(x,V.batchId,N)})}).then(()=>({batchId:w.batchId,changes:mf(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,u){let h=a.pu[a.currentUser.toKey()];h||(h=new Je(ye)),h=h.insert(l,u),a.pu[a.currentUser.toKey()]=h}(r,s.batchId,t),await ai(r,s.changes),await ko(r.remoteStore)}catch(s){const i=Ml(s,"Failed to persist write");t.reject(i)}}async function Xf(n,e){const t=fe(n);try{const r=await Xw(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.fu.get(i);a&&(Pe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.Eu=!0:s.modifiedDocuments.size>0?Pe(a.Eu,14607):s.removedDocuments.size>0&&(Pe(a.Eu,42227),a.Eu=!1))}),await ai(t,r,e)}catch(r){await is(r)}}function Zu(n,e,t){const r=fe(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Au.forEach((i,a)=>{const l=a.view.Oa(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const u=fe(a);u.onlineState=l;let h=!1;u.queries.forEach((f,p)=>{for(const w of p.va)w.Oa(l)&&(h=!0)}),h&&Ul(u)}(r.eventManager,e),s.length&&r.Ru.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function jx(n,e,t){const r=fe(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.fu.get(e),i=s&&s.key;if(i){let a=new Je(ie.comparator);a=a.insert(i,kt.newNoDocument(i,he.min()));const l=ve().add(i),u=new si(he.min(),new Map,new Je(ye),a,l);await Xf(r,u),r.mu=r.mu.remove(i),r.fu.delete(e),jl(r)}else await Ba(r.localStore,e,!1).then(()=>Ha(r,e,t)).catch(is)}async function Bx(n,e){const t=fe(n),r=e.batch.batchId;try{const s=await Yw(t.localStore,e);em(t,r,null),Zf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ai(t,s)}catch(s){await is(s)}}async function qx(n,e,t){const r=fe(n);try{const s=await function(a,l){const u=fe(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(p=>(Pe(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);em(r,e,t),Zf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ai(r,s)}catch(s){await is(s)}}function Zf(n,e){(n.yu.get(e)||[]).forEach(t=>{t.resolve()}),n.yu.delete(e)}function em(n,e,t){const r=fe(n);let s=r.pu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.pu[r.currentUser.toKey()]=s}}function Ha(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Vu.get(e))n.Au.delete(r),t&&n.Ru.Du(r,t);n.Vu.delete(e),n.isPrimaryClient&&n.gu.Gr(e).forEach(r=>{n.gu.containsKey(r)||tm(n,r)})}function tm(n,e){n.du.delete(e.path.canonicalString());const t=n.mu.get(e);t!==null&&(Vl(n.remoteStore,t),n.mu=n.mu.remove(e),n.fu.delete(t),jl(n))}function eh(n,e,t){for(const r of t)r instanceof Qf?(n.gu.addReference(r.key,e),zx(n,r)):r instanceof Jf?(Q(Fl,"Document no longer in limbo: "+r.key),n.gu.removeReference(r.key,e),n.gu.containsKey(r.key)||tm(n,r.key)):ce(19791,{Cu:r})}function zx(n,e){const t=e.key,r=t.path.canonicalString();n.mu.get(t)||n.du.has(r)||(Q(Fl,"New document in limbo: "+t),n.du.add(r),jl(n))}function jl(n){for(;n.du.size>0&&n.mu.size<n.maxConcurrentLimboResolutions;){const e=n.du.values().next().value;n.du.delete(e);const t=new ie(qe.fromString(e)),r=n.wu.next();n.fu.set(r,new Vx(t)),n.mu=n.mu.insert(t,r),Ff(n.remoteStore,new bn(un(xl(t.path)),r,"TargetPurposeLimboResolution",bo.ce))}}async function ai(n,e,t){const r=fe(n),s=[],i=[],a=[];r.Au.isEmpty()||(r.Au.forEach((l,u)=>{a.push(r.bu(u,e,t).then(h=>{if((h||t)&&r.isPrimaryClient){const f=h?!h.fromCache:t?.targetChanges.get(u.targetId)?.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(h){s.push(h);const f=Pl.Es(u.targetId,h);i.push(f)}}))}),await Promise.all(a),r.Ru.H_(s),await async function(u,h){const f=fe(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(h,w=>L.forEach(w.Ts,x=>f.persistence.referenceDelegate.addReference(p,w.targetId,x)).next(()=>L.forEach(w.Is,x=>f.persistence.referenceDelegate.removeReference(p,w.targetId,x)))))}catch(p){if(!os(p))throw p;Q($l,"Failed to update sequence numbers: "+p)}for(const p of h){const w=p.targetId;if(!p.fromCache){const x=f.vs.get(w),S=x.snapshotVersion,$=x.withLastLimboFreeSnapshotVersion(S);f.vs=f.vs.insert(w,$)}}}(r.localStore,i))}async function Wx(n,e){const t=fe(n);if(!t.currentUser.isEqual(e)){Q(Fl,"User change. New user:",e.toKey());const r=await Of(t.localStore,e);t.currentUser=e,function(i,a){i.yu.forEach(l=>{l.forEach(u=>{u.reject(new J(D.CANCELLED,a))})}),i.yu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ai(t,r.Ns)}}function Hx(n,e){const t=fe(n),r=t.fu.get(e);if(r&&r.Eu)return ve().add(r.key);{let s=ve();const i=t.Vu.get(e);if(!i)return s;for(const a of i){const l=t.Au.get(a);s=s.unionWith(l.view.ou)}return s}}function nm(n){const e=fe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Xf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Hx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jx.bind(null,e),e.Ru.H_=kx.bind(null,e.eventManager),e.Ru.Du=Rx.bind(null,e.eventManager),e}function Gx(n){const e=fe(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Bx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=qx.bind(null,e),e}class lo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=So(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,t){return null}Bu(e,t){return null}Ou(e){return Jw(this.persistence,new Gw,e.initialUser,this.serializer)}xu(e){return new Df(Rl.Vi,this.serializer)}Mu(e){return new rx}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}lo.provider={build:()=>new lo};class Kx extends lo{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,t){Pe(this.persistence.referenceDelegate instanceof oo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new $w(r,e.asyncQueue,t)}xu(e){const t=this.cacheSizeBytes!==void 0?Nt.withCacheSize(this.cacheSizeBytes):Nt.DEFAULT;return new Df(r=>oo.Vi(r,t),this.serializer)}}class Ga{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Zu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Wx.bind(null,this.syncEngine),await Ax(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Cx}()}createDatastore(e){const t=So(e.databaseInfo.databaseId),r=lx(e.databaseInfo);return fx(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,l){return new px(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Zu(this.syncEngine,t,0),function(){return Gu.v()?new Gu:new sx}())}createSyncEngine(e,t){return function(s,i,a,l,u,h,f){const p=new Nx(s,i,a,l,u,h);return f&&(p.Su=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(t){const r=fe(t);Q(pn,"RemoteStore shutting down."),r.da.add(5),await oi(r),r.fa.shutdown(),r.ga.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Ga.provider={build:()=>new Ga};/**
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
 */class rm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):Sn("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const rr="FirestoreClient";class Qx{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=Ct.UNAUTHENTICATED,this.clientId=gl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{Q(rr,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(Q(rr,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new En;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ml(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ga(n,e){n.asyncQueue.verifyOperationInProgress(),Q(rr,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Of(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function th(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Jx(n);Q(rr,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Qu(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Qu(e.remoteStore,s)),n._onlineComponents=e}async function Jx(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){Q(rr,"Using user provided OfflineComponentProvider");try{await ga(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Ir("Error using user provided cache. Falling back to memory cache: "+t),await ga(n,new lo)}}else Q(rr,"Using default OfflineComponentProvider"),await ga(n,new Kx(void 0));return n._offlineComponents}async function sm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(Q(rr,"Using user provided OnlineComponentProvider"),await th(n,n._uninitializedComponentsProvider._online)):(Q(rr,"Using default OnlineComponentProvider"),await th(n,new Ga))),n._onlineComponents}function Yx(n){return sm(n).then(e=>e.syncEngine)}async function im(n){const e=await sm(n),t=e.eventManager;return t.onListen=Dx.bind(null,e.syncEngine),t.onUnlisten=Mx.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Ox.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Ux.bind(null,e.syncEngine),t}function Xx(n,e,t={}){const r=new En;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,u,h){const f=new rm({next:w=>{f.Ku(),a.enqueueAndForget(()=>Gf(i,p));const x=w.docs.has(l);!x&&w.fromCache?h.reject(new J(D.UNAVAILABLE,"Failed to get document because the client is offline.")):x&&w.fromCache&&u&&u.source==="server"?h.reject(new J(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(w)},error:w=>h.reject(w)}),p=new Kf(xl(l.path),f,{includeMetadataChanges:!0,Wa:!0});return Hf(i,p)}(await im(n),n.asyncQueue,e,t,r)),r.promise}function Zx(n,e,t={}){const r=new En;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,u,h){const f=new rm({next:w=>{f.Ku(),a.enqueueAndForget(()=>Gf(i,p)),w.fromCache&&u.source==="server"?h.reject(new J(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(w)},error:w=>h.reject(w)}),p=new Kf(l,f,{includeMetadataChanges:!0,Wa:!0});return Hf(i,p)}(await im(n),n.asyncQueue,e,t,r)),r.promise}function eE(n,e){const t=new En;return n.asyncQueue.enqueueAndForget(async()=>Fx(await Yx(n),e,t)),t.promise}/**
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
 */function om(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const tE="ComponentProvider",nh=new Map;function nE(n,e,t,r,s){return new Eb(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,om(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const am="firestore.googleapis.com",rh=!0;class sh{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new J(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=am,this.ssl=rh}else this.host=e.host,this.ssl=e.ssl??rh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Nf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Rw)throw new J(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}db("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=om(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new J(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new J(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new J(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ro{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new J(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new J(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new nb;switch(r.type){case"firstParty":return new ob(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new J(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=nh.get(t);r&&(Q(tE,"Removing Datastore"),nh.delete(t),r.terminate())}(this),Promise.resolve()}}function rE(n,e,t,r={}){n=en(n,Ro);const s=Js(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;s&&Jh(`https://${l}`),i.host!==am&&i.host!==l&&Ir("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!Tn(u,a)&&(n._setSettings(u),r.mockUserToken)){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=Ct.MOCK_USER;else{h=dg(r.mockUserToken,n._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new J(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Ct(p)}n._authCredentials=new rb(new zd(h,f))}}/**
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
 */class ls{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ls(this.firestore,e,this._query)}}class lt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new lt(this.firestore,e,this._key)}toJSON(){return{type:lt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(ti(t,lt._jsonSchema))return new lt(e,r||null,new ie(qe.fromString(t.referencePath)))}}lt._jsonSchemaVersion="firestore/documentReference/1.0",lt._jsonSchema={type:ft("string",lt._jsonSchemaVersion),referencePath:ft("string")};class Jn extends ls{constructor(e,t,r){super(e,t,xl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new lt(this.firestore,null,new ie(e))}withConverter(e){return new Jn(this.firestore,e,this._path)}}function kn(n,e,...t){if(n=Et(n),Wd("collection","path",e),n instanceof Ro){const r=qe.fromString(e,...t);return _u(r),new Jn(n,null,r)}{if(!(n instanceof lt||n instanceof Jn))throw new J(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(qe.fromString(e,...t));return _u(r),new Jn(n.firestore,null,r)}}function Ht(n,e,...t){if(n=Et(n),arguments.length===1&&(e=gl.newId()),Wd("doc","path",e),n instanceof Ro){const r=qe.fromString(e,...t);return gu(r),new lt(n,null,new ie(r))}{if(!(n instanceof lt||n instanceof Jn))throw new J(D.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(qe.fromString(e,...t));return gu(r),new lt(n.firestore,n instanceof Jn?n.converter:null,new ie(r))}}/**
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
 */const ih="AsyncQueue";class oh{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new Mf(this,"async_queue_retry"),this.lc=()=>{const r=pa();r&&Q(ih,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=e;const t=pa();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const t=pa();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise(()=>{});const t=new En;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.rc.push(e),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!os(e))throw e;Q(ih,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(e){const t=this.hc.then(()=>(this.ac=!0,e().catch(r=>{throw this._c=r,this.ac=!1,Sn("INTERNAL UNHANDLED ERROR: ",ah(r)),r}).then(r=>(this.ac=!1,r))));return this.hc=t,t}enqueueAfterDelay(e,t,r){this.Pc(),this.cc.indexOf(e)>-1&&(t=0);const s=Ll.createAndSchedule(this,e,t,r,i=>this.Ec(i));return this.oc.push(s),s}Pc(){this._c&&ce(47125,{Rc:ah(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const t of this.oc)if(t.timerId===e)return!0;return!1}dc(e){return this.Ac().then(()=>{this.oc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.oc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Ac()})}mc(e){this.cc.push(e)}Ec(e){const t=this.oc.indexOf(e);this.oc.splice(t,1)}}function ah(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Cr extends Ro{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new oh,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new oh(e),this._firestoreClient=void 0,await e}}}function sE(n,e){const t=typeof n=="object"?n:ed(),r=typeof n=="string"?n:eo,s=ol(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=ug("firestore");i&&rE(s,...i)}return s}function Bl(n){if(n._terminated)throw new J(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||iE(n),n._firestoreClient}function iE(n){const e=n._freezeSettings(),t=nE(n._databaseId,n._app?.options.appId||"",n._persistenceKey,n._app?.options.apiKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Qx(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}}(n._componentsProvider))}/**
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
 */class zt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zt(At.fromBase64String(e))}catch(t){throw new J(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new zt(At.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:zt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ti(e,zt._jsonSchema))return zt.fromBase64String(e.bytes)}}zt._jsonSchemaVersion="firestore/bytes/1.0",zt._jsonSchema={type:ft("string",zt._jsonSchemaVersion),bytes:ft("string")};/**
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
 */class ql{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new J(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new It(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class cs{constructor(e){this._methodName=e}}/**
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
 */class dn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new J(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new J(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:dn._jsonSchemaVersion}}static fromJSON(e){if(ti(e,dn._jsonSchema))return new dn(e.latitude,e.longitude)}}dn._jsonSchemaVersion="firestore/geoPoint/1.0",dn._jsonSchema={type:ft("string",dn._jsonSchemaVersion),latitude:ft("number"),longitude:ft("number")};/**
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
 */class Xt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Xt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ti(e,Xt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Xt(e.vectorValues);throw new J(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Xt._jsonSchemaVersion="firestore/vectorValue/1.0",Xt._jsonSchema={type:ft("string",Xt._jsonSchemaVersion),vectorValues:ft("object")};/**
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
 */const oE=/^__.*__$/;class aE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new lr(e,this.data,this.fieldMask,t,this.fieldTransforms):new ri(e,this.data,t,this.fieldTransforms)}}class lm{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new lr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function cm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ce(40011,{dataSource:n})}}class Po{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.fc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Po({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){const t=this.path?.child(e),r=this.i({path:t,arrayElement:!1});return r.wc(e),r}Sc(e){const t=this.path?.child(e),r=this.i({path:t,arrayElement:!1});return r.fc(),r}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return co(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(cm(this.dataSource)&&oE.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class lE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||So(e)}V(e,t,r,s=!1){return new Po({dataSource:e,methodName:t,targetDoc:r,path:It.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $o(n){const e=n._freezeSettings(),t=So(n._databaseId);return new lE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function um(n,e,t,r,s,i={}){const a=n.V(i.merge||i.mergeFields?2:0,e,t,s);Gl("Data must be an object, but it was:",a,r);const l=dm(r,a);let u,h;if(i.merge)u=new jt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const w=es(e,p,t);if(!a.contains(w))throw new J(D.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);pm(f,w)||f.push(w)}u=new jt(f),h=a.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=a.fieldTransforms;return new aE(new Dt(l),u,h)}class Vo extends cs{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.Dc(`${this._methodName}() can only appear at the top level of your update data`):e.Dc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Vo}}function hm(n,e,t){return new Po({dataSource:3,targetDoc:e.settings.targetDoc,methodName:n._methodName,arrayElement:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class zl extends cs{_toFieldTransform(e){return new Tl(e.path,new zs)}isEqual(e){return e instanceof zl}}class Wl extends cs{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=hm(this,e,!0),r=this.vc.map(i=>kr(i,t)),s=new Yr(r);return new Tl(e.path,s)}isEqual(e){return e instanceof Wl&&Tn(this.vc,e.vc)}}class Hl extends cs{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=hm(this,e,!0),r=this.vc.map(i=>kr(i,t)),s=new Xr(r);return new Tl(e.path,s)}isEqual(e){return e instanceof Hl&&Tn(this.vc,e.vc)}}function cE(n,e,t,r){const s=n.V(1,e,t);Gl("Data must be an object, but it was:",s,r);const i=[],a=Dt.empty();ar(r,(u,h)=>{const f=mm(e,u,t);h=Et(h);const p=s.Sc(f);if(h instanceof Vo)i.push(f);else{const w=kr(h,p);w!=null&&(i.push(f),a.set(f,w))}});const l=new jt(i);return new lm(a,l,s.fieldTransforms)}function uE(n,e,t,r,s,i){const a=n.V(1,e,t),l=[es(e,r,t)],u=[s];if(i.length%2!=0)throw new J(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<i.length;w+=2)l.push(es(e,i[w])),u.push(i[w+1]);const h=[],f=Dt.empty();for(let w=l.length-1;w>=0;--w)if(!pm(h,l[w])){const x=l[w];let S=u[w];S=Et(S);const $=a.Sc(x);if(S instanceof Vo)h.push(x);else{const V=kr(S,$);V!=null&&(h.push(x),f.set(x,V))}}const p=new jt(h);return new lm(f,p,a.fieldTransforms)}function hE(n,e,t,r=!1){return kr(t,n.V(r?4:3,e))}function kr(n,e){if(fm(n=Et(n)))return Gl("Unsupported field value:",e,n),dm(n,e);if(n instanceof cs)return function(r,s){if(!cm(s.dataSource))throw s.Dc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Dc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let u=kr(l,s.bc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Et(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Kb(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ge.fromDate(r);return{timestampValue:io(s.serializer,i)}}if(r instanceof Ge){const i=new Ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:io(s.serializer,i)}}if(r instanceof dn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof zt)return{bytesValue:Af(s.serializer,r._byteString)};if(r instanceof lt){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Dc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Cl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Xt)return function(a,l){const u=a instanceof Xt?a.toArray():a;return{mapValue:{fields:{[ef]:{stringValue:tf},[to]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.Dc("VectorValues must only contain numeric values.");return El(l.serializer,f)})}}}}}}(r,s);if(Vf(r))return r._toProto(s.serializer);throw s.Dc(`Unsupported field value: ${vo(r)}`)}(n,e)}function dm(n,e){const t={};return Kd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ar(n,(r,s)=>{const i=kr(s,e.yc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function fm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ge||n instanceof dn||n instanceof zt||n instanceof lt||n instanceof cs||n instanceof Xt||Vf(n))}function Gl(n,e,t){if(!fm(t)||!Hd(t)){const r=vo(t);throw r==="an object"?e.Dc(n+" a custom object"):e.Dc(n+" "+r)}}function es(n,e,t){if((e=Et(e))instanceof ql)return e._internalPath;if(typeof e=="string")return mm(n,e);throw co("Field path arguments must be of type string or ",n,!1,void 0,t)}const dE=new RegExp("[~\\*/\\[\\]]");function mm(n,e,t){if(e.search(dE)>=0)throw co(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ql(...e.split("."))._internalPath}catch{throw co(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function co(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new J(D.INVALID_ARGUMENT,l+n+u)}function pm(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class fE{convertValue(e,t="none"){switch(er(e)){case 0:return null;case 1:return e.booleanValue;case 2:return at(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Zn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ce(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return ar(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){const t=e.fields?.[to].arrayValue?.values?.map(r=>at(r.doubleValue));return new Xt(t)}convertGeoPoint(e){return new dn(at(e.latitude),at(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=xo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(js(e));default:return null}}convertTimestamp(e){const t=Xn(e);return new Ge(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=qe.fromString(e);Pe($f(r),9688,{name:e});const s=new Bs(r.get(1),r.get(3)),i=new ie(r.popFirst(5));return s.isEqual(t)||Sn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */class gm extends fE{constructor(e){super(),this.firestore=e}convertBytes(e){return new zt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new lt(this.firestore,null,t)}}function Wr(){return new zl("serverTimestamp")}function mE(...n){return new Wl("arrayUnion",n)}function pE(...n){return new Hl("arrayRemove",n)}const lh="@firebase/firestore",ch="4.14.1";/**
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
 */class _m{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const t=this._document.data.field(es("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class gE extends _m{data(){return super.data()}}/**
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
 */function _E(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new J(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Kl{}class yE extends Kl{}function Ka(n,e,...t){let r=[];e instanceof Kl&&r.push(e),r=r.concat(t),function(i){const a=i.filter(u=>u instanceof Ql).length,l=i.filter(u=>u instanceof No).length;if(a>1||a>0&&l>0)throw new J(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class No extends yE{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new No(e,t,r)}_apply(e){const t=this._parse(e);return vm(e._query,t),new ls(e.firestore,e.converter,Oa(e._query,t))}_parse(e){const t=$o(e.firestore);return function(i,a,l,u,h,f,p){let w;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new J(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){hh(p,f);const S=[];for(const $ of p)S.push(uh(u,i,$));w={arrayValue:{values:S}}}else w=uh(u,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||hh(p,f),w=hE(l,a,p,f==="in"||f==="not-in");return ht.create(h,f,w)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function ym(n,e,t){const r=e,s=es("where",n);return No._create(s,r,t)}class Ql extends Kl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ql(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:tn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const l=i.getFlattenedFilters();for(const u of l)vm(a,u),a=Oa(a,u)}(e._query,t),new ls(e.firestore,e.converter,Oa(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function uh(n,e,t){if(typeof(t=Et(t))=="string"){if(t==="")throw new J(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!uf(e)&&t.indexOf("/")!==-1)throw new J(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(qe.fromString(t));if(!ie.isDocumentKey(r))throw new J(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Iu(n,new ie(r))}if(t instanceof lt)return Iu(n,t._key);throw new J(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${vo(t)}.`)}function hh(n,e){if(!Array.isArray(n)||n.length===0)throw new J(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function vm(n,e){const t=function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new J(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new J(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function bm(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class Cs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class br extends _m{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Mi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(es("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new J(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=br._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}br._jsonSchemaVersion="firestore/documentSnapshot/1.0",br._jsonSchema={type:ft("string",br._jsonSchemaVersion),bundleSource:ft("string","DocumentSnapshot"),bundleName:ft("string"),bundle:ft("string")};class Mi extends br{data(e={}){return super.data(e)}}class Hr{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Cs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Mi(this._firestore,this._userDataWriter,r.key,r,new Cs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new J(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const u=new Mi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Cs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Mi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Cs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:vE(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new J(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Hr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=gl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function vE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ce(61501,{type:n})}}/**
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
 */Hr._jsonSchemaVersion="firestore/querySnapshot/1.0",Hr._jsonSchema={type:ft("string",Hr._jsonSchemaVersion),bundleSource:ft("string","QuerySnapshot"),bundleName:ft("string"),bundle:ft("string")};/**
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
 */function Jl(n){n=en(n,lt);const e=en(n.firestore,Cr),t=Bl(e);return Xx(t,n._key).then(r=>xE(e,n,r))}function Do(n){n=en(n,ls);const e=en(n.firestore,Cr),t=Bl(e),r=new gm(e);return _E(n._query),Zx(t,n._query).then(s=>new Hr(e,r,n,s))}function bE(n,e,t){n=en(n,lt);const r=en(n.firestore,Cr),s=bm(n.converter,e),i=$o(r);return Oo(r,[um(i,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Wt.none())])}function ts(n,e,t,...r){n=en(n,lt);const s=en(n.firestore,Cr),i=$o(s);let a;return a=typeof(e=Et(e))=="string"||e instanceof ql?uE(i,"updateDoc",n._key,e,t,r):cE(i,"updateDoc",n._key,e),Oo(s,[a.toMutation(n._key,Wt.exists(!0))])}function wE(n){return Oo(en(n.firestore,Cr),[new Il(n._key,Wt.none())])}function uo(n,e){const t=en(n.firestore,Cr),r=Ht(n),s=bm(n.converter,e),i=$o(n.firestore);return Oo(t,[um(i,"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Wt.exists(!1))]).then(()=>r)}function Oo(n,e){const t=Bl(n);return eE(t,e)}function xE(n,e,t){const r=t.docs.get(e._key),s=new gm(n);return new br(n,s,e._key,r,new Cs(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){tb(ns),Gr(new wr("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new Cr(new sb(r.getProvider("auth-internal")),new ab(a,r.getProvider("app-check-internal")),Tb(a,s),a);return i={useFetchStreams:t,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Kn(lh,ch,e),Kn(lh,ch,"esm2020")})();var EE="firebase",TE="12.13.0";/**
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
 */Kn(EE,TE,"app");const IE={apiKey:"AIzaSyDkR00qL4A-yMP5Ehta3RYowC2d-vR8I78",authDomain:"aurumvault-def8b.firebaseapp.com",projectId:"aurumvault-def8b",storageBucket:"aurumvault-def8b.firebasestorage.app",messagingSenderId:"646887449279",appId:"1:646887449279:web:12705de1dc6aa9df5a9c0a"},wm=Zh(IE),li=Zv(wm),dt=sE(wm),[fn,dh]=H(!1),[yt,Qa]=H(null),[ci,fh]=H(!1),[OA,AE]=H(!0);jy(li,async n=>{if(n){const e=await Jl(Ht(dt,"users",n.uid)),t=e.exists()?e.data():{};Qa({uid:n.uid,email:n.email,name:t.name||n.email,role:t.role||"user"}),dh(!0),fh(t.role==="admin")}else Qa(null),dh(!1),fh(!1);AE(!1)});async function SE(n,e,t){const s=(await Ly(li,e,t)).user;return await bE(Ht(dt,"users",s.uid),{name:n,email:e,role:"user",address:"",createdAt:Wr()}),s}async function CE(n,e){return(await My(li,n,e)).user}async function Mr(){await By(li)}async function kE(n){await Oy(li,n)}async function RE(n){const e=yt();e&&(await ts(Ht(dt,"users",e.uid),n),Qa({...e,...n}))}const[LA,PE]=H(!1),$E="aurum2025",[Gt,VE]=H([]),[mh,ph]=H(!1);async function Wn(){ph(!0);try{const e=(await Do(kn(dt,"products"))).docs.map(t=>({id:t.id,...t.data()}));VE(e)}catch(n){console.error("Greška pri dohvaćanju proizvoda:",n)}ph(!1)}const NE=["All","Rings","Necklaces","Watches","Accessories","Art Objects"],[Jt,Lo]=H([]);function xm(n,e=1){Lo(t=>t.find(s=>s.id===n.id)?t.map(s=>s.id===n.id?{...s,quantity:s.quantity+e}:s):[...t,{...n,quantity:e}])}function Em(n){Lo(e=>e.filter(t=>t.id!==n))}function gh(n,e){if(e<=0){Em(n);return}Lo(t=>t.map(r=>r.id===n?{...r,quantity:e}:r))}function DE(){Lo([])}function pr(){return Jt().reduce((n,e)=>n+e.price*e.quantity,0)}function _h(){return Jt().reduce((n,e)=>n+e.quantity,0)}const[Ur,OE]=H([]);async function Ja(){try{const n=yt();let e;if(ci())e=Ka(kn(dt,"orders"));else if(n)e=Ka(kn(dt,"orders"),ym("userId","==",n.uid));else return;const r=(await Do(e)).docs.map(s=>({id:s.id,...s.data()}));OE(r)}catch(n){console.error("Greška pri dohvaćanju narudžbi:",n)}}async function LE(n){const e=yt(),t={...n,userId:e?.uid||null,status:"Processing",createdAt:Wr()};return(await uo(kn(dt,"orders"),t)).id}async function ME(n){if(!fn())throw new Error("Kuponi su dostupni samo prijavljenim korisnicima.");const e=await Jl(Ht(dt,"coupons",n));if(!e.exists())throw new Error("Nevažeći kupon kod.");const t=e.data();if(!t.active)throw new Error("Ovaj kupon više nije aktivan.");return t}const[ho,Tm]=H([]);async function Im(){const n=yt();if(n)try{const e=await Jl(Ht(dt,"users",n.uid));Tm(e.data()?.wishlist||[])}catch(e){console.error(e)}}async function Am(n){const e=yt();if(!e)return!1;const t=ho().includes(n);try{return await ts(Ht(dt,"users",e.uid),{wishlist:t?pE(n):mE(n)}),Tm(r=>t?r.filter(s=>s!==n):[...r,n]),!t}catch(r){return console.error(r),!1}}async function yh(n){try{return(await Do(Ka(kn(dt,"reviews"),ym("productId","==",n)))).docs.map(t=>({id:t.id,...t.data()}))}catch(e){return console.error(e),[]}}async function UE(n,e,t){const r=yt();if(!r)throw new Error("Morate biti prijavljeni za recenziju.");await uo(kn(dt,"reviews"),{productId:n,userId:r.uid,userName:r.name,rating:Number(e),comment:t,createdAt:Wr()})}var FE=k(`<div class="min-h-screen bg-aurum-black flex flex-col"><div class="flex items-center justify-between px-6 py-4 border-b border-aurum-border"><div class="flex items-center gap-2"><div class="w-8 h-8 bg-aurum-gold rounded-full flex items-center justify-center"><span class="text-aurum-black font-display font-black text-sm">A</span></div><span class="font-display font-bold text-aurum-gold tracking-widest text-lg gold-glow">AurumVault</span></div><div class="flex items-center gap-6 text-xs text-aurum-muted"><span class="flex items-center gap-2">Accessibility<span class="w-8 h-4 bg-aurum-gold rounded-full inline-block"></span></span><span class="hidden sm:block">High Contrast</span><span class="hidden sm:block">Larger Text</span></div></div><div class="flex-1 flex items-center justify-center px-4 py-12"><div class="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-8 items-center page-enter"><div class="hidden lg:block"><div class="relative rounded-xl overflow-hidden aspect-square"><img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500"alt=Vault class="w-full h-full object-cover"><div class="absolute inset-0 bg-gradient-to-t from-aurum-black via-transparent to-transparent pointer-events-none"></div></div></div><div class="gold-border-anim bg-aurum-card rounded-2xl p-8"><div class="text-center mb-8"><span class="badge-exclusive mb-3 inline-block">Exclusive</span><h1 class="font-display text-2xl font-bold text-white leading-tight mt-2">Exclusive access —<br>enter passcode</h1><p class="text-aurum-muted text-sm mt-3 leading-relaxed">This site is restricted to approved members. Enter the site-wide passcode to continue to AurumVault's private catalog.</p></div><form><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-2">Site passcode</label><input type=password placeholder="Enter passcode"><button type=submit class="btn-gold w-full py-3 rounded-lg text-sm mt-2"></button></form><p class="text-center text-aurum-muted text-xs mt-4">🔒 This passcode protects all AurumVault catalog pages.</p><p class="text-center mt-3 text-xs text-aurum-muted">Demo passcode: <span class="text-aurum-gold font-mono">aurum2025</span></p></div><div class="flex flex-col gap-4"><div class="card-dark p-4"><h3 class="text-aurum-gold text-sm font-bold font-display tracking-wider mb-2">Access Terms</h3><p class="text-aurum-muted text-xs leading-relaxed">Members only. By entering you confirm you are authorized to view AurumVault content and agree to our confidentiality terms.</p></div><div class="card-dark p-4"><h3 class="text-aurum-gold text-sm font-bold font-display tracking-wider mb-2">Last Updated</h3><p class="text-aurum-muted text-xs leading-relaxed">March 3, 2025 — Passcode rotation performed by security team.</p></div><div class="card-dark p-4"><h3 class="text-aurum-gold text-sm font-bold font-display tracking-wider mb-2">Support Hours</h3><p class="text-aurum-muted text-xs leading-relaxed">Mon–Fri 09:00–18:00 GMT. For urgent access issues email <a href=mailto:support@aurumvault.com class="text-aurum-gold hover:underline">support@aurumvault.com</a> or use the assistant link.</p></div></div></div></div><div class="border-t border-aurum-border px-6 py-4 flex justify-between items-center text-xs text-aurum-muted"><span>© 2025 AurumVault. All rights reserved.</span><span>Contact: <a href=mailto:contact@aurumvault.com class="text-aurum-gold hover:underline">contact@aurumvault.com`),jE=k('<div class="flex items-center justify-between mb-4"><p class="text-red-400 text-xs flex items-center gap-1"><span>⚠</span> Passcode incorrect. Please try again.</p><a href=# class="text-aurum-gold text-xs hover:underline">Need help? Contact support');function BE(){const n=gn(),[e,t]=H(""),[r,s]=H(!1),[i,a]=H(!1);async function l(u){u.preventDefault(),a(!0),s(!1),await new Promise(h=>setTimeout(h,800)),e()===$E?(PE(!0),n("/catalog")):s(!0),a(!1)}return(()=>{var u=FE(),h=u.firstChild,f=h.nextSibling,p=f.firstChild,w=p.firstChild,x=w.nextSibling,S=x.firstChild,$=S.nextSibling,V=$.firstChild,N=V.nextSibling,C=N.nextSibling;return $.addEventListener("submit",l),N.$$input=M=>{t(M.target.value),s(!1)},_($,(()=>{var M=rt(()=>!!r());return()=>M()&&jE()})(),C),_(C,()=>i()?"Verifying...":"Unlock Vault"),q(M=>{var O=`input-dark w-full px-4 py-3 text-sm mb-3 ${r()?"border-red-500":""}`,z=i();return O!==M.e&&Ie(N,M.e=O),z!==M.t&&(C.disabled=M.t=z),M},{e:void 0,t:void 0}),q(()=>N.value=e()),u})()}nn(["input"]);var qE=k('<div class="w-8 h-8 bg-aurum-gold rounded-full flex items-center justify-center"><span class="text-aurum-black font-display font-black text-sm">A'),zE=k('<span class="font-display font-bold text-lg text-aurum-gold tracking-widest gold-glow">AurumVault'),WE=k('<form class="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2 bg-aurum-dark border border-aurum-gold rounded-lg px-3 py-1.5"style=min-width:220px><input type=text placeholder="Pretraži proizvode..."class="bg-transparent text-aurum-text text-sm outline-none flex-1"autofocus><button type=submit class="text-aurum-gold text-xs">→</button><button type=button class="text-aurum-muted hover:text-aurum-gold">×'),HE=k('<button class="text-aurum-muted hover:text-aurum-gold transition-colors p-1"><svg class="w-5 h-5"fill=none viewBox="0 0 24 24"stroke=currentColor><path stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">'),GE=k('<div class="w-7 h-7 bg-aurum-gold rounded-full flex items-center justify-center"><span class="text-aurum-black font-bold text-xs">'),KE=k('<span class="hidden sm:block text-sm">'),QE=k('<div class="flex items-center gap-2"><button class="nav-link text-xs opacity-50 hover:opacity-100">Odjava'),JE=k('<svg class="w-5 h-5"fill=none viewBox="0 0 24 24"stroke=currentColor><path stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">'),YE=k('<svg xmlns=http://www.w3.org/2000/svg class="w-5 h-5"fill=none viewBox="0 0 24 24"stroke=currentColor><path stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.3 2.3A1 1 0 006 17h12M10 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z">'),XE=k('<span class="absolute -top-1 -right-1 bg-aurum-gold text-aurum-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">'),ZE=k('<div class="md:hidden bg-aurum-dark border-t border-aurum-border px-4 py-4 flex flex-col gap-4"><form class="flex gap-2"><input type=text placeholder=Pretraži... class="input-dark flex-1 px-3 py-2 text-sm"><button type=submit class="btn-gold px-3 py-2 text-sm rounded">Traži'),eT=k('<nav class="sticky top-0 z-50 bg-aurum-black border-b border-aurum-border"><div class="max-w-7xl mx-auto px-4 flex items-center justify-between h-16"><div class="hidden md:flex items-center gap-8"></div><div class="flex items-center gap-3"><div class=relative></div><button class="md:hidden text-aurum-text hover:text-aurum-gold"><svg class="w-6 h-6"fill=none viewBox="0 0 24 24"stroke=currentColor><path stroke-linecap=round stroke-linejoin=round stroke-width=2>');function Mo(){const n=gn(),[e,t]=H(!1),[r,s]=H(!1),[i,a]=H("");function l(){Mr(),n("/login")}function u(h){h.preventDefault(),i().trim()&&(n(`/catalog?search=${encodeURIComponent(i().trim())}`),s(!1),a(""))}return(()=>{var h=eT(),f=h.firstChild,p=f.firstChild,w=p.nextSibling,x=w.firstChild,S=x.nextSibling,$=S.firstChild,V=$.firstChild;return _(f,R(_e,{href:"/catalog",class:"flex items-center gap-2 group flex-shrink-0",get children(){return[qE(),zE()]}}),p),_(p,R(_e,{href:"/catalog",class:"nav-link",children:"Collections"}),null),_(p,R(_e,{href:"/catalog?filter=new",class:"nav-link",children:"New Arrivals"}),null),_(p,R(_e,{href:"/catalog?filter=exclusive",class:"nav-link text-aurum-gold",children:"Exclusives"}),null),_(x,R(Z,{get when(){return r()},get children(){var N=WE(),C=N.firstChild,M=C.nextSibling,O=M.nextSibling;return N.addEventListener("submit",u),C.$$input=z=>a(z.target.value),O.$$click=()=>s(!1),q(()=>C.value=i()),N}}),null),_(x,R(Z,{get when(){return!r()},get children(){var N=HE();return N.$$click=()=>s(!0),N}}),null),_(w,R(Z,{get when(){return ci()},get children(){return R(_e,{href:"/admin",class:"nav-link text-aurum-gold text-xs border border-aurum-gold px-3 py-1 rounded hover:bg-aurum-gold hover:text-aurum-black transition-all",children:"Admin"})}}),S),_(w,R(Z,{get when(){return fn()},get fallback(){return R(_e,{href:"/login",class:"nav-link text-sm",children:"Account"})},get children(){var N=QE(),C=N.firstChild;return _(N,R(_e,{href:"/profile",class:"nav-link flex items-center gap-1",get children(){return[(()=>{var M=GE(),O=M.firstChild;return _(O,()=>yt()?.name?.charAt(0)||"U"),M})(),(()=>{var M=KE();return _(M,()=>yt()?.name?.split(" ")[0]),M})()]}}),C),C.$$click=l,N}}),S),_(w,R(Z,{get when(){return fn()},get children(){return R(_e,{href:"/profile?tab=wishlist",class:"p-2 text-aurum-muted hover:text-aurum-gold transition-colors",get children(){return JE()}})}}),S),_(w,R(_e,{href:"/checkout",class:"relative p-2 text-aurum-text hover:text-aurum-gold transition-colors",get children(){return[YE(),R(Z,{get when(){return _h()>0},get children(){var N=XE();return _(N,_h),N}})]}}),S),S.$$click=()=>t(!e()),_(h,R(Z,{get when(){return e()},get children(){var N=ZE(),C=N.firstChild,M=C.firstChild;return _(N,R(_e,{href:"/catalog",class:"nav-link",onclick:()=>t(!1),children:"Collections"}),C),_(N,R(_e,{href:"/catalog?filter=new",class:"nav-link",onclick:()=>t(!1),children:"New Arrivals"}),C),_(N,R(_e,{href:"/catalog?filter=exclusive",class:"nav-link text-aurum-gold",onclick:()=>t(!1),children:"Exclusives"}),C),C.addEventListener("submit",O=>{u(O),t(!1)}),M.$$input=O=>a(O.target.value),q(()=>M.value=i()),N}}),null),q(()=>Ze(V,"d",e()?"M6 18L18 6M6 6l12 12":"M4 6h16M4 12h16M4 18h16")),h})()}nn(["input","click"]);var tT=k('<footer class="bg-aurum-dark border-t border-aurum-border mt-20"><div class="max-w-7xl mx-auto px-4 py-12"><div class="grid grid-cols-1 md:grid-cols-4 gap-10"><div><div class="flex items-center gap-2 mb-4"><div class="w-8 h-8 bg-aurum-gold rounded-full flex items-center justify-center"><span class="text-aurum-black font-display font-black text-sm">A</span></div><span class="font-display font-bold text-aurum-gold tracking-widest">AurumVault</span></div><p class="text-aurum-muted text-sm leading-relaxed">Curating rare, authenticated treasures with secure checkout and white-glove shipping.</p></div><div><h4 class="font-display text-sm font-bold text-aurum-gold tracking-widest uppercase mb-4">Explore</h4><ul class="space-y-2 text-sm text-aurum-muted"><li></li><li></li><li></li><li><a href=# class="hover:text-aurum-gold transition-colors">Press</a></li></ul></div><div><h4 class="font-display text-sm font-bold text-aurum-gold tracking-widest uppercase mb-4">Support</h4><ul class="space-y-2 text-sm text-aurum-muted"><li><a href=# class="hover:text-aurum-gold transition-colors">Contact Us</a></li><li><a href=# class="hover:text-aurum-gold transition-colors">Shipping & Returns</a></li><li><a href=# class="hover:text-aurum-gold transition-colors">Warranty</a></li><li><a href=# class="hover:text-aurum-gold transition-colors">FAQ</a></li></ul></div><div><h4 class="font-display text-sm font-bold text-aurum-gold tracking-widest uppercase mb-4">Connect</h4><div class="flex gap-3 mb-4"></div><p class="text-aurum-muted text-xs">Contact: concierge@aurumvault.com</p><div class=mt-4><p class="text-aurum-muted text-xs mb-2">Subscribe for exclusive previews</p><div class="flex gap-2"><input type=email placeholder="Email address"class="input-dark text-xs px-3 py-2 flex-1 min-w-0"><button class="btn-gold px-3 py-2 text-xs rounded">→</button></div></div></div></div><div class="border-t border-aurum-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4"><p class="text-aurum-muted text-xs">© 2025 AurumVault. All rights reserved.</p><div class="flex gap-6 text-xs text-aurum-muted"><a href=# class="hover:text-aurum-gold transition-colors">Privacy Policy</a><a href=# class="hover:text-aurum-gold transition-colors">Admin Terms</a><a href=# class="hover:text-aurum-gold transition-colors">Security Practices'),nT=k('<a href=# class="w-8 h-8 border border-aurum-border rounded flex items-center justify-center text-xs text-aurum-muted hover:border-aurum-gold hover:text-aurum-gold transition-all">');function Yl(){return(()=>{var n=tT(),e=n.firstChild,t=e.firstChild,r=t.firstChild,s=r.nextSibling,i=s.firstChild,a=i.nextSibling,l=a.firstChild,u=l.nextSibling,h=u.nextSibling,f=s.nextSibling,p=f.nextSibling,w=p.firstChild,x=w.nextSibling;return _(l,R(_e,{href:"/catalog",class:"hover:text-aurum-gold transition-colors",children:"Collections"})),_(u,R(_e,{href:"/catalog?filter=exclusive",class:"hover:text-aurum-gold transition-colors",children:"Exclusives"})),_(h,R(_e,{href:"/login",class:"hover:text-aurum-gold transition-colors",children:"Autentifikacija"})),_(x,()=>["IG","TW","YT"].map(S=>(()=>{var $=nT();return _($,S),$})())),n})()}var rT=k('<div class="product-card group"><div class="relative overflow-hidden aspect-square bg-aurum-dark"><img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"><div class="absolute inset-0 bg-gradient-to-t from-aurum-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div><div class="absolute top-2 left-2 flex flex-col gap-1"></div><div class="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2"><button class="flex-1 bg-aurum-dark/90 text-aurum-gold text-xs py-2 rounded border border-aurum-gold hover:bg-aurum-gold hover:text-aurum-black transition-all">Quick View</button></div></div><div class=p-4><h3 class="font-display text-sm font-semibold text-aurum-text group-hover:text-aurum-gold transition-colors leading-snug mb-1"></h3><p class="text-aurum-muted text-xs mb-3">...</p><div class="flex items-center justify-between"><div><p class="text-aurum-muted text-xs">SKU: </p></div><button>'),sT=k("<span class=badge-exclusive>"),iT=k("<span class=badge-exclusive>Members Only"),oT=k("<span class=badge-limited>Limited"),aT=k("<span class=badge-limited>"),lT=k('<span class="bg-green-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">Sale'),cT=k('<div class="absolute top-2 right-2"><span class="bg-red-600/80 text-white text-xs px-2 py-0.5 rounded-full">Only <!> left'),uT=k('<div class="flex items-center gap-2"><span class="text-aurum-gold font-bold">$</span><span class="text-aurum-muted text-xs line-through">$'),hT=k('<span class="text-aurum-gold font-bold">$'),dT=k('<div class="flex-1 flex items-center justify-center py-20"><div class="text-aurum-gold text-sm animate-pulse">Učitavanje proizvoda...'),fT=k('<aside class="hidden lg:block w-56 flex-shrink-0"><div class="sticky top-24 space-y-6"><div><h3 class="text-xs font-bold text-aurum-gold uppercase tracking-widest mb-3">Filters</h3></div><div><h4 class="text-xs text-aurum-muted uppercase tracking-widest mb-2">Category</h4><select class="input-dark w-full px-3 py-2 text-sm"></select></div><div><h4 class="text-xs text-aurum-muted uppercase tracking-widest mb-2">Price Range</h4><div class="flex items-center gap-2"><input type=number class="input-dark w-full px-2 py-1.5 text-xs"placeholder=Min><span class=text-aurum-muted>–</span><input type=number class="input-dark w-full px-2 py-1.5 text-xs"placeholder=Max></div></div><div><label class="flex items-center gap-2 cursor-pointer"><input type=checkbox class="checkbox checkbox-warning checkbox-sm"><span class="text-xs text-aurum-text">Members only</span></label></div><button class="text-xs text-aurum-muted hover:text-aurum-gold transition-colors underline">Reset</button><div class="border-t border-aurum-border pt-4"><h4 class="text-xs text-aurum-muted uppercase tracking-widest mb-3">Curated Picks'),mT=k('<main class=flex-1><div class="flex items-center justify-between mb-6"><div><h2 class="section-title text-lg"></h2><p class="text-aurum-muted text-sm mt-1">Showing <!> items</p></div><div class="flex items-center gap-3"><select class="input-dark px-3 py-1.5 text-xs"><option>Featured</option><option>Newest</option><option>Price: Low</option><option>Price: High</option></select><div class="flex border border-aurum-border rounded overflow-hidden"><button>Grid</button><button>List</button></div></div></div><div>'),pT=k('<div class="min-h-screen bg-aurum-black"><div class="relative bg-aurum-dark border-b border-aurum-border overflow-hidden"><div class="absolute inset-0 opacity-10 pointer-events-none"style="background:radial-gradient(ellipse at 70% 50%, rgba(240,192,64,0.4) 0%, transparent 70%)"></div><div class="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center"><div class=md:col-span-2><span class="badge-exclusive mb-2 inline-block">Curated Drop</span><h1 class="font-display text-3xl font-bold text-white leading-tight mt-2">Aurum Noir —<br><span class="text-aurum-gold gold-glow">Midnight Sculpture Series</span></h1><p class="text-aurum-muted mt-3 text-sm leading-relaxed max-w-lg">An exclusive limited-run of hand-finished sculptures. Members receive early access and complimentary authentication certificates.</p><button class="btn-gold mt-5 px-6 py-3 rounded-lg text-xs">Explore Collection</button></div><div class="hidden md:flex flex-col gap-3"><div class="card-dark p-4"><span class="text-aurum-gold text-xs font-bold">Flash Offer</span><p class="text-aurum-text text-sm mt-1">24-hour Members Preview</p></div><div class="card-dark p-4"><span class="text-aurum-gold text-xs font-bold">Certificate of Authenticity</span><p class="text-aurum-muted text-xs mt-1">Free with select purchases</p></div></div></div></div><div class="max-w-7xl mx-auto px-4 py-8 flex gap-8">'),gT=k("<option>"),_T=k('<img class="w-10 h-10 rounded object-cover">'),yT=k('<div><p class="text-xs text-aurum-text leading-tight"></p><p class="text-xs text-aurum-muted">Exclusive drop'),vT=k('<div class="text-center py-20 text-aurum-muted"><p class="text-lg mb-2">No products found</p><p class=text-sm>Try adjusting your filters');function bT({product:n}){const e=gn(),[t,r]=H(!1);function s(i){i.stopPropagation(),xm(n),r(!0),setTimeout(()=>r(!1),1500)}return(()=>{var i=rT(),a=i.firstChild,l=a.firstChild,u=l.nextSibling,h=u.nextSibling,f=h.nextSibling,p=f.firstChild,w=a.nextSibling,x=w.firstChild,S=x.nextSibling,$=S.firstChild,V=S.nextSibling,N=V.firstChild,C=N.firstChild;C.firstChild;var M=N.nextSibling;return i.$$click=()=>e(`/product/${n.id}`),_(h,(()=>{var O=rt(()=>n.badge==="Exclusive");return()=>O()&&(()=>{var z=sT();return _(z,()=>n.badge),z})()})(),null),_(h,(()=>{var O=rt(()=>n.badge==="Members Only");return()=>O()&&iT()})(),null),_(h,(()=>{var O=rt(()=>n.badge==="Limited");return()=>O()&&oT()})(),null),_(h,(()=>{var O=rt(()=>!!(n.badge?.startsWith("Limited")&&n.badge!=="Limited"));return()=>O()&&(()=>{var z=aT();return _(z,()=>n.badge),z})()})(),null),_(h,(()=>{var O=rt(()=>n.badge==="Sale");return()=>O()&&lT()})(),null),_(a,(()=>{var O=rt(()=>n.stock<=3);return()=>O()&&(()=>{var z=cT(),U=z.firstChild,b=U.firstChild,y=b.nextSibling;return y.nextSibling,_(U,()=>n.stock,y),z})()})(),f),p.$$click=O=>{O.stopPropagation(),e(`/product/${n.id}`)},_(x,()=>n.name),_(S,()=>n.description.substring(0,60),$),_(N,(()=>{var O=rt(()=>!!n.salePrice);return()=>O()?(()=>{var z=uT(),U=z.firstChild;U.firstChild;var b=U.nextSibling;return b.firstChild,_(U,()=>n.salePrice.toLocaleString(),null),_(b,()=>n.price.toLocaleString(),null),z})():(()=>{var z=hT();return z.firstChild,_(z,()=>n.price.toLocaleString(),null),z})()})(),C),_(C,()=>n.sku,null),M.$$click=s,_(M,()=>t()?"✓ Added":"Add to Cart"),q(O=>{var z=n.images[0],U=n.name,b=`text-xs px-3 py-2 rounded border transition-all ${t()?"bg-green-600 border-green-600 text-white":"border-aurum-gold text-aurum-gold hover:bg-aurum-gold hover:text-aurum-black"}`;return z!==O.e&&Ze(l,"src",O.e=z),U!==O.t&&Ze(l,"alt",O.t=U),b!==O.a&&Ie(M,O.a=b),O},{e:void 0,t:void 0,a:void 0}),i})()}function wT(){const[n]=Lp(),[e,t]=H("All"),[r,s]=H(0),[i,a]=H(15e3),[l,u]=H(!1),[h,f]=H("Featured"),[p,w]=H("grid"),[x,S]=H("");Ws(()=>Wn()),Ah(()=>{t("All"),u(!1),S(""),f("Featured"),n.search&&S(n.search),n.filter==="exclusive"&&u(!0),n.filter==="new"&&f("Newest")});const $=Ne(()=>n.search?`Rezultati za "${n.search}"`:n.filter==="exclusive"?"Exclusives":n.filter==="new"?"New Arrivals":"All Collections"),V=Ne(()=>{let N=Gt();if(x()){const C=x().toLowerCase();N=N.filter(M=>M.name?.toLowerCase().includes(C)||M.description?.toLowerCase().includes(C)||M.category?.toLowerCase().includes(C)||M.sku?.toLowerCase().includes(C))}return e()!=="All"&&(N=N.filter(C=>C.category===e())),l()&&(N=N.filter(C=>C.membersOnly)),N=N.filter(C=>{const M=C.salePrice||C.price;return M>=r()&&M<=i()}),h()==="Price: Low"&&(N=[...N].sort((C,M)=>(C.salePrice||C.price)-(M.salePrice||M.price))),h()==="Price: High"&&(N=[...N].sort((C,M)=>(M.salePrice||M.price)-(C.salePrice||C.price))),h()==="Newest"&&(N=[...N].sort((C,M)=>(M.createdAt?.seconds||0)-(C.createdAt?.seconds||0))),N});return(()=>{var N=pT(),C=N.firstChild,M=C.firstChild,O=M.nextSibling,z=O.firstChild,U=z.firstChild,b=U.nextSibling,y=b.nextSibling,v=y.nextSibling,T=C.nextSibling;return _(N,R(Mo,{}),C),v.$$click=()=>u(!0),_(T,R(Z,{get when(){return mh()},get children(){return dT()}}),null),_(T,R(Z,{get when(){return!mh()},get children(){return[(()=>{var E=fT(),I=E.firstChild,m=I.firstChild,j=m.nextSibling,re=j.firstChild,we=re.nextSibling,Ce=j.nextSibling,De=Ce.firstChild,Fe=De.nextSibling,Le=Fe.firstChild,ze=Le.nextSibling,mt=ze.nextSibling,Ke=Ce.nextSibling,Ae=Ke.firstChild,bt=Ae.firstChild,st=Ke.nextSibling,et=st.nextSibling;return et.firstChild,we.addEventListener("change",Re=>t(Re.target.value)),_(we,R(ut,{each:NE,children:Re=>(()=>{var Ye=gT();return Ye.value=Re,_(Ye,Re),Ye})()})),Le.$$input=Re=>s(+Re.target.value),mt.$$input=Re=>a(+Re.target.value),bt.addEventListener("change",Re=>u(Re.target.checked)),st.$$click=()=>{t("All"),s(0),a(15e3),u(!1)},_(et,R(ut,{get each(){return Gt().slice(0,2)},children:Re=>R(_e,{get href(){return`/product/${Re.id}`},class:"flex items-center gap-3 mb-3 hover:opacity-80 transition-opacity",get children(){return[(()=>{var Ye=_T();return q(it=>{var $t=Re.images[0],Vt=Re.name;return $t!==it.e&&Ze(Ye,"src",it.e=$t),Vt!==it.t&&Ze(Ye,"alt",it.t=Vt),it},{e:void 0,t:void 0}),Ye})(),(()=>{var Ye=yT(),it=Ye.firstChild;return _(it,()=>Re.name),Ye})()]}})}),null),q(()=>we.value=e()),q(()=>Le.value=r()),q(()=>mt.value=i()),q(()=>bt.checked=l()),E})(),(()=>{var E=mT(),I=E.firstChild,m=I.firstChild,j=m.firstChild,re=j.nextSibling,we=re.firstChild,Ce=we.nextSibling;Ce.nextSibling;var De=m.nextSibling,Fe=De.firstChild,Le=Fe.nextSibling,ze=Le.firstChild,mt=ze.nextSibling,Ke=I.nextSibling;return _(j,$),_(re,()=>V().length,Ce),Fe.addEventListener("change",Ae=>f(Ae.target.value)),ze.$$click=()=>w("grid"),mt.$$click=()=>w("list"),_(Ke,R(ut,{get each(){return V()},children:Ae=>R(bT,{product:Ae})})),_(E,(()=>{var Ae=rt(()=>V().length===0);return()=>Ae()&&vT()})(),null),q(Ae=>{var bt=`px-3 py-1.5 text-xs transition-colors ${p()==="grid"?"bg-aurum-gold text-aurum-black":"text-aurum-muted hover:text-aurum-gold"}`,st=`px-3 py-1.5 text-xs transition-colors ${p()==="list"?"bg-aurum-gold text-aurum-black":"text-aurum-muted hover:text-aurum-gold"}`,et=`grid gap-5 ${p()==="grid"?"grid-cols-1 sm:grid-cols-2 xl:grid-cols-3":"grid-cols-1"}`;return bt!==Ae.e&&Ie(ze,Ae.e=bt),st!==Ae.t&&Ie(mt,Ae.t=st),et!==Ae.a&&Ie(Ke,Ae.a=et),Ae},{e:void 0,t:void 0,a:void 0}),q(()=>Fe.value=h()),E})()]}}),null),_(N,R(Yl,{}),null),N})()}nn(["click","input"]);var xT=k('<div><h3 class="text-xs text-aurum-muted uppercase tracking-widest mb-2">Size</h3><div class="flex gap-2 flex-wrap">'),ET=k('<div class=mt-16><div class="flex items-center justify-between mb-6"><h2 class=section-title>You might also like</h2><span class="text-xs text-aurum-muted">Inspired picks for you</span></div><div class="grid grid-cols-2 md:grid-cols-4 gap-4">'),TT=k('<div class="flex items-center gap-1"><span class="text-aurum-gold font-bold"></span><span class=text-aurum-gold></span><span class="text-aurum-muted text-xs">(<!>)'),IT=k('<p class="text-aurum-muted text-sm mb-6">Još nema recenzija. Budi prvi!'),AT=k('<p class="text-green-400 text-xs">✓ Recenzija je objavljena!'),ST=k('<div class="card-dark p-6"><h3 class="section-title text-base mb-4">Napiši recenziju</h3><form class=space-y-4><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-2">Ocjena</label><div class="flex gap-2"><span class="text-aurum-muted text-sm ml-2 self-center">/5</span></div></div><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-2">Komentar</label><textarea rows=3 class="input-dark w-full px-4 py-3 text-sm resize-none"placeholder="Podijeli svoje iskustvo s ovim proizvodom..."></textarea></div><button type=submit class="btn-gold px-6 py-2.5 rounded-lg text-sm disabled:opacity-50">'),CT=k('<div class="min-h-screen bg-aurum-black"><div class="border-b border-aurum-border"><div class="max-w-7xl mx-auto px-4 py-3 flex items-center gap-2 text-xs text-aurum-muted"><span>›</span><span>›</span><span class=text-aurum-text></span></div></div><div class="max-w-7xl mx-auto px-4 py-10 page-enter"><div class="grid grid-cols-1 lg:grid-cols-2 gap-12"><div class=space-y-3><div class="relative rounded-xl overflow-hidden bg-aurum-dark aspect-square"><img class="w-full h-full object-cover"><div class="absolute bottom-3 right-3 bg-aurum-black/70 text-aurum-muted text-xs px-2 py-1 rounded">Zoom</div></div><div class="flex gap-2"></div><div class="grid grid-cols-3 gap-3 mt-4"></div></div><div class=space-y-6><div><div class="flex items-center justify-between mb-2"></div><h1 class="font-display text-3xl font-bold text-white leading-tight"></h1><div class="flex items-center gap-3 mt-3"><span class="text-2xl font-bold text-aurum-gold">$</span><span class="text-aurum-muted text-sm">incl. taxes</span></div></div><div class="flex items-center gap-2"><span class="w-2 h-2 bg-green-400 rounded-full"></span><span class="text-sm text-aurum-text">In stock — <!> units</span><span class="text-aurum-muted text-xs ml-auto">Est. delivery: Mar 23 – Mar 24</span></div><p class="text-aurum-muted text-sm leading-relaxed"></p><div><h3 class="text-xs text-aurum-muted uppercase tracking-widest mb-2">Quantity</h3><div class="flex items-center gap-3"><button class="w-9 h-9 border border-aurum-border rounded text-aurum-text hover:border-aurum-gold transition-colors text-lg">−</button><span class="w-12 text-center font-bold text-aurum-text"></span><button class="w-9 h-9 border border-aurum-border rounded text-aurum-text hover:border-aurum-gold transition-colors text-lg">+</button><span class="text-aurum-muted text-xs">Max 5 per customer</span></div></div><div class="flex gap-3"><button></button><button class="flex-1 py-3 rounded-lg font-bold text-sm border border-aurum-gold text-aurum-gold hover:bg-aurum-gold hover:text-aurum-black transition-all">Buy Now</button><button><svg class="w-5 h-5"viewBox="0 0 24 24"stroke=currentColor><path stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></button></div><div class="grid grid-cols-2 gap-3"></div></div></div><div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"></div><div class=mt-16><div class="flex items-center gap-4 mb-6"><h2 class=section-title>Recenzije</h2></div><div class="space-y-4 mb-10">'),kT=k('<div class="min-h-screen bg-aurum-black flex items-center justify-center"><div class=text-center><p class="text-aurum-muted mb-4">Product not found'),RT=k('<div class="absolute top-3 left-3"><span class=badge-exclusive>'),PT=k('<button><img alt class="w-full h-full object-cover">'),$T=k('<div class="card-dark p-3"><p class="text-aurum-muted text-xs"></p><p class="text-aurum-text text-xs font-medium mt-0.5">'),VT=k('<span class="badge-exclusive mb-3 inline-block">'),NT=k('<span class="text-aurum-muted line-through">$'),DT=k("<button>"),OT=k('<div class="flex items-start gap-2 text-xs text-aurum-muted"><span></span><span>'),LT=k('<div class="aspect-square overflow-hidden bg-aurum-dark"><img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">'),MT=k('<div class=p-3><p class="text-xs font-display text-aurum-text"></p><p class="text-aurum-gold text-sm font-bold mt-1">$'),UT=k('<div><h3 class="section-title text-base mb-3"></h3><p class="text-aurum-muted text-sm leading-relaxed whitespace-pre-line">'),FT=k('<div class="card-dark p-5"><div class="flex items-center justify-between mb-2"><div class="flex items-center gap-2"><div class="w-8 h-8 bg-aurum-gold rounded-full flex items-center justify-center"><span class="text-aurum-black font-bold text-xs"></span></div><span class="text-aurum-text text-sm font-medium"></span></div><span class=text-aurum-gold></span></div><p class="text-aurum-muted text-sm leading-relaxed">'),jT=k('<div class="card-dark p-5 text-center"><p class="text-aurum-muted text-sm"> za pisanje recenzije.'),BT=k("<button type=button>★");function qT(){const n=jh(),e=gn(),[t,r]=H([]),[s,i]=H(!1),[a,l]=H(5),[u,h]=H(""),[f,p]=H(!1),[w,x]=H(!1);Ws(async()=>{Gt().length===0&&await Wn(),fn()&&await Im();const I=await yh(n.id);r(I)});const S=Ne(()=>{const I=Gt().find(m=>m.id===n.id||m.id===+n.id);return I&&i(ho().includes(I.id)),I}),$=Ne(()=>Gt().filter(I=>I.id!==n.id&&I.category===S()?.category).slice(0,4));async function V(){if(!fn()){e("/login");return}const I=await Am(S().id);i(I)}async function N(I){if(I.preventDefault(),!!u().trim()){p(!0);try{await UE(n.id,a(),u()),h(""),x(!0);const m=await yh(n.id);r(m),setTimeout(()=>x(!1),3e3)}catch(m){console.error(m)}p(!1)}}function C(){return t().length?(t().reduce((I,m)=>I+m.rating,0)/t().length).toFixed(1):0}const[M,O]=H(""),[z,U]=H(1),[b,y]=H(0),[v,T]=H(!1);function E(){S()&&(xm({...S(),selectedSize:M()},z()),T(!0),setTimeout(()=>T(!1),2e3))}return R(Z,{get when(){return S()},get fallback(){return(()=>{var I=kT(),m=I.firstChild;return m.firstChild,_(m,R(_e,{href:"/catalog",class:"btn-gold px-6 py-2 rounded",children:"Back to Catalog"}),null),I})()},get children(){var I=CT(),m=I.firstChild,j=m.firstChild,re=j.firstChild,we=re.nextSibling,Ce=we.nextSibling,De=m.nextSibling,Fe=De.firstChild,Le=Fe.firstChild,ze=Le.firstChild,mt=ze.firstChild,Ke=mt.nextSibling,Ae=ze.nextSibling,bt=Ae.nextSibling,st=Le.nextSibling,et=st.firstChild,Re=et.firstChild,Ye=Re.nextSibling,it=Ye.nextSibling,$t=it.firstChild;$t.firstChild;var Vt=$t.nextSibling,Ot=et.nextSibling,ae=Ot.firstChild,Y=ae.nextSibling,F=Y.firstChild,W=F.nextSibling;W.nextSibling;var te=Ot.nextSibling,X=te.nextSibling,G=X.firstChild,de=G.nextSibling,oe=de.firstChild,Se=oe.nextSibling,ge=Se.nextSibling,xe=X.nextSibling,pe=xe.firstChild,$e=pe.nextSibling,Qe=$e.nextSibling,ot=Qe.firstChild,Me=xe.nextSibling,je=Fe.nextSibling,pt=je.nextSibling,Xe=pt.firstChild;Xe.firstChild;var tt=Xe.nextSibling;return _(I,R(Mo,{}),m),_(j,R(_e,{href:"/catalog",class:"hover:text-aurum-gold transition-colors",children:"AurumVault"}),re),_(j,R(_e,{href:"/catalog",class:"hover:text-aurum-gold transition-colors",children:"Catalog"}),we),_(Ce,()=>S()?.category),_(ze,(()=>{var K=rt(()=>!!S()?.badge);return()=>K()&&(()=>{var se=RT(),ne=se.firstChild;return _(ne,()=>S()?.badge),se})()})(),Ke),_(ze,R(Z,{get when(){return ci()},get children(){return R(_e,{get href(){return`/admin/products/edit/${S()?.id}`},class:"absolute top-3 right-3 bg-aurum-gold text-aurum-black text-xs font-bold px-3 py-1 rounded",children:"Edit"})}}),Ke),_(Ae,R(ut,{get each(){return S()?.images},children:(K,se)=>(()=>{var ne=PT(),ue=ne.firstChild;return ne.$$click=()=>y(se()),Ze(ue,"src",K),q(()=>Ie(ne,`w-16 h-16 rounded overflow-hidden border-2 transition-colors ${b()===se()?"border-aurum-gold":"border-aurum-border"}`)),ne})()})),_(bt,()=>[{label:"SKU",value:S()?.sku},{label:"Materials",value:"18k Gold Plating over Sterling"},{label:"Availability",value:"Ships from New York"}].map(K=>(()=>{var se=$T(),ne=se.firstChild,ue=ne.nextSibling;return _(ne,()=>K.label),_(ue,()=>K.value),se})())),_(Re,R(_e,{href:"/catalog",class:"text-xs text-aurum-muted hover:text-aurum-gold",children:"Aurum.SignetClassic ↗"})),_(et,(()=>{var K=rt(()=>!!S()?.badge);return()=>K()&&(()=>{var se=VT();return _(se,()=>S()?.badge),se})()})(),Ye),_(Ye,()=>S()?.name),_($t,()=>(S()?.salePrice||S()?.price)?.toLocaleString(),null),_(it,(()=>{var K=rt(()=>!!S()?.salePrice);return()=>K()&&(()=>{var se=NT();return se.firstChild,_(se,()=>S()?.price?.toLocaleString(),null),se})()})(),Vt),_(Y,()=>S()?.stock,W),_(te,()=>S()?.description),_(st,R(Z,{get when(){return S()?.sizes?.length>0},get children(){var K=xT(),se=K.firstChild,ne=se.nextSibling;return _(ne,R(ut,{get each(){return S()?.sizes},children:ue=>(()=>{var Ee=DT();return Ee.$$click=()=>O(ue),_(Ee,ue),q(()=>Ie(Ee,`w-10 h-10 rounded border text-sm font-bold transition-all ${M()===ue?"border-aurum-gold bg-aurum-gold text-aurum-black":"border-aurum-border text-aurum-text hover:border-aurum-gold"}`)),Ee})()})),K}}),X),oe.$$click=()=>U(K=>Math.max(1,K-1)),_(Se,z),ge.$$click=()=>U(K=>Math.min(S()?.stock||10,K+1)),pe.$$click=E,_(pe,()=>v()?"✓ Dodano":"Add to Cart"),$e.$$click=()=>{E(),e("/checkout")},Qe.$$click=V,_(Me,()=>[{icon:"🚚",text:"Free shipping over $100"},{icon:"↩",text:"30-day returns. Hassle-free returns within 30 days"},{icon:"🔒",text:"Secure checkout"},{icon:"✋",text:"Hand-inspected quality"}].map(K=>(()=>{var se=OT(),ne=se.firstChild,ue=ne.nextSibling;return _(ne,()=>K.icon),_(ue,()=>K.text),se})())),_(De,R(Z,{get when(){return $().length>0},get children(){var K=ET(),se=K.firstChild,ne=se.nextSibling;return _(ne,R(ut,{get each(){return $()},children:ue=>R(_e,{get href(){return`/product/${ue.id}`},class:"card-dark overflow-hidden group hover:border-aurum-gold transition-all duration-300",get children(){return[(()=>{var Ee=LT(),Ve=Ee.firstChild;return q(We=>{var Oe=ue.images[0],Lt=ue.name;return Oe!==We.e&&Ze(Ve,"src",We.e=Oe),Lt!==We.t&&Ze(Ve,"alt",We.t=Lt),We},{e:void 0,t:void 0}),Ee})(),(()=>{var Ee=MT(),Ve=Ee.firstChild,We=Ve.nextSibling;return We.firstChild,_(Ve,()=>ue.name),_(We,()=>ue.price.toLocaleString(),null),Ee})()]}})})),K}}),je),_(je,()=>[{title:"Product Details",content:S()?.description},{title:"Specifications",content:`Material: 18k Gold Plating over Sterling Silver
Weight: 8.5g (size 8)
Width: 5mm face
Finish: Brushed face, polished bezel`},{title:"Care",content:"Wipe with a soft cloth. Avoid harsh chemicals. Keep in provided AurumVault pouch."}].map(K=>(()=>{var se=UT(),ne=se.firstChild,ue=ne.nextSibling;return _(ne,()=>K.title),_(ue,()=>K.content),se})())),_(Xe,R(Z,{get when(){return t().length>0},get children(){var K=TT(),se=K.firstChild,ne=se.nextSibling,ue=ne.nextSibling,Ee=ue.firstChild,Ve=Ee.nextSibling;return Ve.nextSibling,_(se,C),_(ne,()=>"★".repeat(Math.round(C()))),_(ue,()=>t().length,Ve),K}}),null),_(pt,R(Z,{get when(){return t().length===0},get children(){return IT()}}),tt),_(tt,R(ut,{get each(){return t()},children:K=>(()=>{var se=FT(),ne=se.firstChild,ue=ne.firstChild,Ee=ue.firstChild,Ve=Ee.firstChild,We=Ee.nextSibling,Oe=ue.nextSibling,Lt=ne.nextSibling;return _(Ve,()=>K.userName?.charAt(0)),_(We,()=>K.userName),_(Oe,()=>"★".repeat(K.rating),null),_(Oe,()=>"☆".repeat(5-K.rating),null),_(Lt,()=>K.comment),se})()})),_(pt,R(Z,{get when(){return fn()},get fallback(){return(()=>{var K=jT(),se=K.firstChild,ne=se.firstChild;return _(se,R(_e,{href:"/login",class:"text-aurum-gold hover:underline",children:"Prijavi se"}),ne),K})()},get children(){var K=ST(),se=K.firstChild,ne=se.nextSibling,ue=ne.firstChild,Ee=ue.firstChild,Ve=Ee.nextSibling,We=Ve.firstChild,Oe=We.firstChild,Lt=ue.nextSibling,Kt=Lt.firstChild,Mt=Kt.nextSibling,_n=Lt.nextSibling;return ne.addEventListener("submit",N),_(Ve,R(ut,{each:[1,2,3,4,5],children:Vn=>(()=>{var Ut=BT();return Ut.$$click=()=>l(Vn),q(()=>Ie(Ut,`text-2xl transition-colors ${Vn<=a()?"text-aurum-gold":"text-aurum-muted"}`)),Ut})()}),We),_(We,a,Oe),Mt.$$input=Vn=>h(Vn.target.value),_(ne,R(Z,{get when(){return w()},get children(){return AT()}}),_n),_(_n,()=>f()?"Šalje...":"Objavi recenziju"),q(()=>_n.disabled=f()),q(()=>Mt.value=u()),K}}),null),_(I,R(Yl,{}),null),q(K=>{var se=S()?.images[b()],ne=S()?.name,ue=`flex-1 py-3 rounded-lg font-bold text-sm transition-all ${v()?"bg-green-600 text-white":"btn-gold"}`,Ee=`p-3 rounded-lg border transition-all ${s()?"border-red-400 text-red-400 bg-red-900/20":"border-aurum-border text-aurum-muted hover:border-red-400 hover:text-red-400"}`,Ve=s()?"Ukloni iz wishlist":"Dodaj u wishlist",We=s()?"currentColor":"none";return se!==K.e&&Ze(mt,"src",K.e=se),ne!==K.t&&Ze(mt,"alt",K.t=ne),ue!==K.a&&Ie(pe,K.a=ue),Ee!==K.o&&Ie(Qe,K.o=Ee),Ve!==K.i&&Ze(Qe,"title",K.i=Ve),We!==K.n&&Ze(ot,"fill",K.n=We),K},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0}),I}})}nn(["click","input"]);var zT=k('<div class="w-8 h-8 bg-aurum-gold rounded-full flex items-center justify-center"><span class="text-aurum-black font-display font-black text-sm">A'),WT=k('<span class="font-display font-bold text-aurum-gold tracking-widest gold-glow">AurumVault'),HT=k('<div class="text-center mb-6"><h1 class="font-display text-xl font-bold text-white">Dobrodošli nazad</h1><p class="text-aurum-muted text-sm mt-1">Prijavite se u vaš AurumVault račun'),GT=k('<div class="text-center mb-6"><h1 class="font-display text-xl font-bold text-white">Kreirajte račun</h1><p class="text-aurum-muted text-sm mt-1">Pridružite se AurumVault zajednici'),KT=k('<div class="text-center mb-6"><h1 class="font-display text-xl font-bold text-white">Oporavak lozinke</h1><p class="text-aurum-muted text-sm mt-1">Unesite email za slanje uputa'),QT=k('<div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Ime i prezime</label><input type=text placeholder="Vaše ime"class="input-dark w-full px-4 py-3 text-sm">'),JT=k('<div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Lozinka</label><input type=password placeholder=•••••••• class="input-dark w-full px-4 py-3 text-sm">'),YT=k('<p class="text-red-400 text-xs flex items-center gap-1">⚠ '),XT=k('<p class="text-green-400 text-xs flex items-center gap-1">✓ '),ZT=k('<div class="text-center mt-4"><button class="text-xs text-aurum-muted hover:text-aurum-gold transition-colors underline">Zaboravili ste lozinku?'),eI=k('<div class="text-center mt-4"><button class="text-xs text-aurum-muted hover:text-aurum-gold transition-colors">← Nazad na prijavu'),tI=k('<div class="mt-6 pt-4 border-t border-aurum-border"><p class="text-xs text-aurum-muted text-center mb-3">Prednosti registracije:</p><div class=space-y-2>'),nI=k('<div class="min-h-screen bg-aurum-black flex flex-col"><div class="border-b border-aurum-border px-6 py-4 flex items-center justify-between"></div><div class="flex-1 flex items-center justify-center px-4 py-12"><div class="w-full max-w-md page-enter"><div class="gold-border-anim bg-aurum-card rounded-2xl p-8"><div class="flex mb-8 border-b border-aurum-border"><button>PRIJAVA</button><button>REGISTRACIJA</button></div><form class=space-y-4><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Email</label><input type=email placeholder=vas@email.com class="input-dark w-full px-4 py-3 text-sm"></div><button type=submit class="btn-gold w-full py-3 rounded-lg text-sm mt-2">'),rI=k('<div class="flex items-center gap-2 text-xs text-aurum-muted"><span class=text-aurum-gold>✓</span> ');function sI(){const n=gn(),[e,t]=H("login"),[r,s]=H(""),[i,a]=H(""),[l,u]=H(""),[h,f]=H(""),[p,w]=H(""),[x,S]=H(!1);async function $(V){V.preventDefault(),f(""),w(""),S(!0);try{if(e()==="login")await CE(r(),i()),n("/catalog");else if(e()==="register"){if(!l()){f("Unesite ime i prezime."),S(!1);return}await SE(l(),r(),i()),n("/catalog")}else e()==="forgot"&&(await kE(r()),w(`Upute za oporavak lozinke poslane su na ${r()}`))}catch(N){f({"auth/invalid-email":"Nevažeća email adresa.","auth/user-not-found":"Korisnik s tim emailom ne postoji.","auth/wrong-password":"Pogrešna lozinka.","auth/email-already-in-use":"Email je već registriran.","auth/weak-password":"Lozinka mora imati najmanje 6 znakova.","auth/too-many-requests":"Previše pokušaja. Pokušajte kasnije.","auth/invalid-credential":"Pogrešan email ili lozinka."}[N.code]||N.message)}S(!1)}return(()=>{var V=nI(),N=V.firstChild,C=N.nextSibling,M=C.firstChild,O=M.firstChild,z=O.firstChild,U=z.firstChild,b=U.nextSibling,y=z.nextSibling,v=y.firstChild,T=v.firstChild,E=T.nextSibling,I=v.nextSibling;return _(N,R(_e,{href:"/catalog",class:"flex items-center gap-2",get children(){return[zT(),WT()]}}),null),_(N,R(_e,{href:"/catalog",class:"text-aurum-muted text-xs hover:text-aurum-gold transition-colors",children:"← Nazad na katalog"}),null),U.$$click=()=>{t("login"),f(""),w("")},b.$$click=()=>{t("register"),f(""),w("")},_(O,R(Z,{get when(){return e()==="login"},get children(){return HT()}}),y),_(O,R(Z,{get when(){return e()==="register"},get children(){return GT()}}),y),_(O,R(Z,{get when(){return e()==="forgot"},get children(){return KT()}}),y),y.addEventListener("submit",$),_(y,R(Z,{get when(){return e()==="register"},get children(){var m=QT(),j=m.firstChild,re=j.nextSibling;return re.$$input=we=>u(we.target.value),q(()=>re.value=l()),m}}),v),E.$$input=m=>s(m.target.value),_(y,R(Z,{get when(){return e()!=="forgot"},get children(){var m=JT(),j=m.firstChild,re=j.nextSibling;return re.$$input=we=>a(we.target.value),q(()=>re.value=i()),m}}),I),_(y,R(Z,{get when(){return h()},get children(){var m=YT();return m.firstChild,_(m,h,null),m}}),I),_(y,R(Z,{get when(){return p()},get children(){var m=XT();return m.firstChild,_(m,p,null),m}}),I),_(I,(()=>{var m=rt(()=>!!x());return()=>m()?"Učitavanje...":rt(()=>e()==="login")()?"Prijava":e()==="register"?"Registracija":"Pošalji upute"})()),_(O,R(Z,{get when(){return e()==="login"},get children(){var m=ZT(),j=m.firstChild;return j.$$click=()=>{t("forgot"),f(""),w("")},m}}),null),_(O,R(Z,{get when(){return e()==="forgot"},get children(){var m=eI(),j=m.firstChild;return j.$$click=()=>t("login"),m}}),null),_(O,R(Z,{get when(){return e()==="register"},get children(){var m=tI(),j=m.firstChild,re=j.nextSibling;return _(re,()=>["Spremi adresu i podatke o plaćanju","Pristup kuponima za popust","Ekskluzivne ponude i rani pristup","Povijest narudžbi"].map(we=>(()=>{var Ce=rI(),De=Ce.firstChild;return De.nextSibling,_(Ce,we,null),Ce})())),m}}),null),q(m=>{var j=`flex-1 pb-3 text-sm font-display tracking-wider transition-colors ${e()==="login"?"text-aurum-gold border-b-2 border-aurum-gold":"text-aurum-muted hover:text-aurum-text"}`,re=`flex-1 pb-3 text-sm font-display tracking-wider transition-colors ${e()==="register"?"text-aurum-gold border-b-2 border-aurum-gold":"text-aurum-muted hover:text-aurum-text"}`,we=x();return j!==m.e&&Ie(U,m.e=j),re!==m.t&&Ie(b,m.t=re),we!==m.a&&(I.disabled=m.a=we),m},{e:void 0,t:void 0,a:void 0}),q(()=>E.value=r()),V})()}nn(["click","input"]);var iI=k('<div class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center px-4"><div class="bg-aurum-card border border-aurum-gold rounded-2xl p-8 max-w-md w-full text-center"style="box-shadow:0 0 60px rgba(240,192,64,0.4);animation:fadeIn 0.3s ease"><div class="w-20 h-20 bg-aurum-gold rounded-full flex items-center justify-center mx-auto mb-5"style="box-shadow:0 0 30px rgba(240,192,64,0.6)"><span class="text-4xl text-aurum-black font-bold">✓</span></div><h2 class="font-display text-2xl font-bold text-aurum-gold mb-1">Narudžba je na putu!</h2><p class="text-aurum-muted text-sm mb-6">Uspješno smo zaprimili vašu narudžbu. Uskoro ćete primiti potvrdu.</p><div class="bg-aurum-dark rounded-xl p-4 text-left mb-6 space-y-2 border border-aurum-border"><div class="flex justify-between text-sm"><span class=text-aurum-muted>Broj narudžbe</span><span class="text-aurum-gold font-bold font-mono tracking-wider">#</span></div><div class="flex justify-between text-sm"><span class=text-aurum-muted>Status</span><span class="text-yellow-400 bg-yellow-900/30 px-2 py-0.5 rounded-full text-xs">🚚 Processing</span></div><div class="flex justify-between text-sm"><span class=text-aurum-muted>Ime</span><span class=text-aurum-text></span></div><div class="flex justify-between text-sm"><span class=text-aurum-muted>Grad</span><span class=text-aurum-text></span></div><div class="flex justify-between text-sm pt-2 border-t border-aurum-border"><span class="text-aurum-text font-bold">Ukupno plaćeno</span><span class="text-aurum-gold font-bold text-base">$</span></div></div><div class="flex flex-col gap-3">'),oI=k('<div class="text-center py-8 text-aurum-muted"><p>Košarica je prazna'),aI=k('<div class="card-dark p-6"><h2 class="font-display text-lg font-bold text-aurum-gold mb-4">Vaša košarica'),lI=k('<p class="text-red-400 text-xs mt-2">⚠ '),cI=k('<p class="text-green-400 text-xs mt-2">✓ Kupon AURUM10 primijenjen — 10% popusta'),uI=k('<p class="text-aurum-muted text-xs mt-2">Kuponi su dostupni samo prijavljenim korisnicima. '),hI=k('<div class="card-dark p-6"><div class="flex items-center gap-3"><input type=text placeholder="Promo kod"><button class="btn-gold px-4 py-2 text-sm rounded">Primijeni'),dI=k('<button class="btn-gold w-full py-3 rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed">Nastavi na dostavu →'),fI=k('<div class="card-dark p-6"><h2 class="font-display text-lg font-bold text-aurum-gold mb-4">Podaci za dostavu</h2><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Ime i prezime</label><input type=text class="input-dark w-full px-4 py-2.5 text-sm"placeholder="Ivan Horvat"></div><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Telefon</label><input type=tel class="input-dark w-full px-4 py-2.5 text-sm"placeholder="+385 91 234 5678"></div><div class=sm:col-span-2><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Adresa</label><input type=text class="input-dark w-full px-4 py-2.5 text-sm"placeholder="Ulica i broj"></div><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Grad</label><input type=text class="input-dark w-full px-4 py-2.5 text-sm"placeholder=Zagreb></div><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Poštanski broj</label><input type=text class="input-dark w-full px-4 py-2.5 text-sm"placeholder=10000></div></div><div class=mt-6><h3 class="text-xs text-aurum-muted uppercase tracking-widest mb-3">Metoda dostave</h3><div class=space-y-2>'),mI=k('<div class="flex gap-3"><button class="flex-1 py-3 border border-aurum-border text-aurum-muted rounded-lg text-sm hover:border-aurum-gold transition-colors">← Nazad</button><button class="flex-1 btn-gold py-3 rounded-lg text-sm">Nastavi na plaćanje →'),pI=k('<div class="card-dark p-6"><h2 class="font-display text-lg font-bold text-aurum-gold mb-4">Način plaćanja</h2><div class="space-y-3 mb-6"></div><div class="border-t border-aurum-border pt-4"><h3 class="text-xs text-aurum-muted uppercase tracking-widest mb-3">Dodaj novu karticu</h3><div class="grid grid-cols-1 gap-3"><input placeholder="Ime na kartici"class="input-dark px-4 py-2.5 text-sm"><input placeholder="Broj kartice"class="input-dark px-4 py-2.5 text-sm"><div class="grid grid-cols-2 gap-3"><input placeholder="MM / YY"class="input-dark px-4 py-2.5 text-sm"><input placeholder=CVC class="input-dark px-4 py-2.5 text-sm"></div></div></div><p class="text-center text-aurum-muted text-xs mt-4">🔒 PCI-SSL compliant. Vaši podaci su sigurni.'),gI=k('<div class="flex gap-3"><button class="flex-1 py-3 border border-aurum-border text-aurum-muted rounded-lg text-sm hover:border-aurum-gold transition-colors">← Nazad</button><button class="flex-1 btn-gold py-3 rounded-lg text-sm">Pregled narudžbe →'),_I=k('<div class="card-dark p-6"><h2 class="font-display text-lg font-bold text-aurum-gold mb-4">Potvrda narudžbe</h2><div class=space-y-3><div class="flex justify-between text-sm"><span class=text-aurum-muted>Ime:</span><span class=text-aurum-text></span></div><div class="flex justify-between text-sm"><span class=text-aurum-muted>Adresa:</span><span class="text-aurum-text text-right">, </span></div><div class="flex justify-between text-sm"><span class=text-aurum-muted>Dostava:</span><span class=text-aurum-text></span></div><div class="flex justify-between text-sm"><span class=text-aurum-muted>Plaćanje:</span><span class="text-aurum-text capitalize"></span></div><div class="flex justify-between text-sm pt-3 border-t border-aurum-border"><span class="text-aurum-muted font-bold">Ukupno:</span><span class="text-aurum-gold font-bold">$'),yI=k('<div class="bg-red-900/30 border border-red-500 rounded-lg p-3 text-red-400 text-xs">⚠ '),vI=k('<div class="flex gap-3"><button class="flex-1 py-3 border border-aurum-border text-aurum-muted rounded-lg text-sm hover:border-aurum-gold transition-colors">← Nazad</button><button class="flex-1 btn-gold py-3 rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed">'),bI=k('<div class="flex justify-between text-green-400"><span>Popust (10%)</span><span>−$'),wI=k('<div class="min-h-screen bg-aurum-black"><div class="max-w-6xl mx-auto px-4 py-8 page-enter"><div class="flex items-center justify-center mb-10"></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-8"><div class="lg:col-span-2 space-y-6"></div><div class=lg:col-span-1><div class="card-dark p-6 sticky top-24"><h3 class="font-display text-sm font-bold text-aurum-gold uppercase tracking-widest mb-4">Sažetak narudžbe</h3><div class="text-xs text-aurum-muted mb-2"> </div><div class="border-t border-aurum-border mt-4 pt-4 space-y-2 text-sm"><div class="flex justify-between text-aurum-muted"><span>Subtotal</span><span>$</span></div><div class="flex justify-between text-aurum-muted"><span>Dostava</span><span></span></div><div class="flex justify-between text-aurum-muted"><span>PDV</span><span>$</span></div><div class="flex justify-between text-aurum-gold font-bold text-base pt-2 border-t border-aurum-border"><span>Ukupno</span><span>$'),xI=k('<div class="flex items-center"><div class="flex flex-col items-center"><div></div><span>'),EI=k("<div>"),TI=k('<div class="flex items-center gap-4 py-4 border-b border-aurum-border last:border-0"><img class="w-16 h-16 rounded object-cover bg-aurum-dark"><div class=flex-1><p class="text-aurum-text text-sm font-medium"></p><p class="text-aurum-muted text-xs"></p></div><div class="flex items-center gap-2"><button class="w-6 h-6 border border-aurum-border rounded text-xs hover:border-aurum-gold text-aurum-text">−</button><span class="text-sm text-aurum-text w-6 text-center"></span><button class="w-6 h-6 border border-aurum-border rounded text-xs hover:border-aurum-gold text-aurum-text">+</button></div><span class="text-aurum-gold font-bold text-sm w-20 text-right">$</span><button class="text-aurum-muted hover:text-red-400 text-lg">×'),II=k('<label><input type=radio name=shipping class="radio radio-warning radio-sm"><div class=flex-1><p class="text-sm text-aurum-text"></p></div><span class="text-aurum-gold text-sm font-bold">'),AI=k('<label><input type=radio name=payment class="radio radio-warning radio-sm"><div class="w-10 h-6 bg-aurum-muted rounded flex items-center justify-center text-xs text-white"></div><div class=flex-1><p class="text-sm text-aurum-text"></p><p class="text-xs text-aurum-muted">'),SI=k('<div class="flex items-center gap-2 mb-2 text-xs"><img alt class="w-8 h-8 rounded object-cover"><span class="flex-1 text-aurum-text truncate"></span><span class=text-aurum-gold>$'),CI=k("<span class=text-green-400>Besplatno");function vh(){gn();const[n,e]=H(1),[t,r]=H(""),[s,i]=H(!1),[a,l]=H(""),[u,h]=H(null),[f,p]=H("visa"),[w,x]=H(!1),[S,$]=H(""),[V,N]=H(!1),[C,M]=H({fullName:yt()?.name||"",phone:"",address:"",city:"",state:"",postal:"",country:"Croatia",shipping:"standard"}),O=Ne(()=>!s()||!u()?0:u().type==="percent"?pr()*(u().discount/100):u().discount),z=Ne(()=>C().shipping==="express"?12:pr()>100?0:12),U=Ne(()=>(pr()-O())*.075),b=Ne(()=>pr()-O()+z()+U());async function y(){l("");try{const m=await ME(t());h(m),i(!0)}catch(m){l(m.message)}}const[v,T]=H("");async function E(){if(Jt().length===0){T("Košarica je prazna — ne možeš naručiti.");return}if(!C().fullName||!C().address||!C().city){T("Molimo popuni sve podatke za dostavu.");return}N(!0),T("");try{const m=await LE({items:Jt().map(j=>({id:j.id,name:j.name,price:j.price,quantity:j.quantity,sku:j.sku||""})),total:b(),subtotal:pr(),discount:O(),shipping:z(),tax:U(),status:"Processing",paymentMethod:f(),coupon:s()?t():null,shippingAddress:{fullName:C().fullName,phone:C().phone,address:C().address,city:C().city,postal:C().postal,country:C().country}});$(m),DE(),x(!0)}catch(m){T("Greška pri narudžbi: "+m.message),console.error(m)}N(!1)}const I=["Košarica","Dostava","Plaćanje","Potvrda"];return(()=>{var m=wI(),j=m.firstChild,re=j.firstChild,we=re.nextSibling,Ce=we.firstChild,De=Ce.nextSibling,Fe=De.firstChild,Le=Fe.firstChild,ze=Le.nextSibling,mt=ze.firstChild,Ke=ze.nextSibling,Ae=Ke.firstChild,bt=Ae.firstChild,st=bt.nextSibling;st.firstChild;var et=Ae.nextSibling,Re=et.firstChild,Ye=Re.nextSibling,it=et.nextSibling,$t=it.firstChild,Vt=$t.nextSibling;Vt.firstChild;var Ot=it.nextSibling,ae=Ot.firstChild,Y=ae.nextSibling;return Y.firstChild,_(m,R(Mo,{}),j),_(m,R(Z,{get when(){return w()},get children(){var F=iI(),W=F.firstChild,te=W.firstChild,X=te.nextSibling,G=X.nextSibling,de=G.nextSibling,oe=de.firstChild,Se=oe.firstChild,ge=Se.nextSibling;ge.firstChild;var xe=oe.nextSibling,pe=xe.nextSibling,$e=pe.firstChild,Qe=$e.nextSibling,ot=pe.nextSibling,Me=ot.firstChild,je=Me.nextSibling,pt=ot.nextSibling,Xe=pt.firstChild,tt=Xe.nextSibling;tt.firstChild;var K=de.nextSibling;return _(ge,()=>S().slice(0,8).toUpperCase(),null),_(Qe,()=>C().fullName),_(je,()=>C().city),_(tt,()=>b().toFixed(2),null),_(K,R(_e,{href:"/profile",class:"w-full btn-gold py-3 rounded-lg text-sm font-bold",children:"📦 Pogledaj narudžbu"}),null),_(K,R(_e,{href:"/catalog",class:"w-full border border-aurum-border text-aurum-muted py-3 rounded-lg text-sm hover:border-aurum-gold hover:text-aurum-gold transition-all",children:"← Natrag na katalog"}),null),F}}),j),_(re,R(ut,{each:I,children:(F,W)=>(()=>{var te=xI(),X=te.firstChild,G=X.firstChild,de=G.nextSibling;return _(G,(()=>{var oe=rt(()=>n()>W()+1);return()=>oe()?"✓":W()+1})()),_(de,F),_(te,(()=>{var oe=rt(()=>W()<I.length-1);return()=>oe()&&(()=>{var Se=EI();return q(()=>Ie(Se,`w-16 sm:w-24 h-px mx-2 mb-4 transition-all ${n()>W()+1?"bg-aurum-gold":"bg-aurum-border"}`)),Se})()})(),null),q(oe=>{var Se=`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${n()>W()+1?"bg-green-600 text-white":n()===W()+1?"bg-aurum-gold text-aurum-black":"bg-aurum-dark border border-aurum-border text-aurum-muted"}`,ge=`text-xs mt-1 ${n()===W()+1?"text-aurum-gold":"text-aurum-muted"}`;return Se!==oe.e&&Ie(G,oe.e=Se),ge!==oe.t&&Ie(de,oe.t=ge),oe},{e:void 0,t:void 0}),te})()})),_(Ce,R(Z,{get when(){return n()===1},get children(){return[(()=>{var F=aI();return F.firstChild,_(F,R(Z,{get when(){return Jt().length===0},get children(){var W=oI();return W.firstChild,_(W,R(_e,{href:"/catalog",class:"text-aurum-gold text-sm hover:underline mt-2 inline-block",children:"Idi na katalog"}),null),W}}),null),_(F,R(ut,{get each(){return Jt()},children:W=>(()=>{var te=TI(),X=te.firstChild,G=X.nextSibling,de=G.firstChild,oe=de.nextSibling,Se=G.nextSibling,ge=Se.firstChild,xe=ge.nextSibling,pe=xe.nextSibling,$e=Se.nextSibling;$e.firstChild;var Qe=$e.nextSibling;return _(de,()=>W.name),_(oe,()=>W.sku),ge.$$click=()=>gh(W.id,W.quantity-1),_(xe,()=>W.quantity),pe.$$click=()=>gh(W.id,W.quantity+1),_($e,()=>(W.price*W.quantity).toLocaleString(),null),Qe.$$click=()=>Em(W.id),q(ot=>{var Me=W.images?.[0],je=W.name;return Me!==ot.e&&Ze(X,"src",ot.e=Me),je!==ot.t&&Ze(X,"alt",ot.t=je),ot},{e:void 0,t:void 0}),te})()}),null),F})(),(()=>{var F=hI(),W=F.firstChild,te=W.firstChild,X=te.nextSibling;return te.$$input=G=>r(G.target.value),X.$$click=y,_(F,R(Z,{get when(){return a()},get children(){var G=lI();return G.firstChild,_(G,a,null),G}}),null),_(F,R(Z,{get when(){return s()},get children(){return cI()}}),null),_(F,R(Z,{get when(){return!fn()},get children(){var G=uI();return G.firstChild,_(G,R(_e,{href:"/login",class:"text-aurum-gold hover:underline",children:"Prijavi se"}),null),G}}),null),q(G=>{var de=`input-dark flex-1 px-4 py-2 text-sm ${fn()?"":"opacity-50 cursor-not-allowed"}`,oe=!fn();return de!==G.e&&Ie(te,G.e=de),oe!==G.t&&(te.disabled=G.t=oe),G},{e:void 0,t:void 0}),q(()=>te.value=t()),F})(),(()=>{var F=dI();return F.$$click=()=>e(2),q(()=>F.disabled=Jt().length===0),F})()]}}),null),_(Ce,R(Z,{get when(){return n()===2},get children(){return[(()=>{var F=fI(),W=F.firstChild,te=W.nextSibling,X=te.firstChild,G=X.firstChild,de=G.nextSibling,oe=X.nextSibling,Se=oe.firstChild,ge=Se.nextSibling,xe=oe.nextSibling,pe=xe.firstChild,$e=pe.nextSibling,Qe=xe.nextSibling,ot=Qe.firstChild,Me=ot.nextSibling,je=Qe.nextSibling,pt=je.firstChild,Xe=pt.nextSibling,tt=te.nextSibling,K=tt.firstChild,se=K.nextSibling;return de.$$input=ne=>M({...C(),fullName:ne.target.value}),ge.$$input=ne=>M({...C(),phone:ne.target.value}),$e.$$input=ne=>M({...C(),address:ne.target.value}),Me.$$input=ne=>M({...C(),city:ne.target.value}),Xe.$$input=ne=>M({...C(),postal:ne.target.value}),_(se,()=>[{value:"standard",label:"Standard — 3–5 business days",price:pr()>100?"Besplatno":"$12.00"},{value:"express",label:"Express — 1–2 business days",price:"$12.00 extra"}].map(ne=>(()=>{var ue=II(),Ee=ue.firstChild,Ve=Ee.nextSibling,We=Ve.firstChild,Oe=Ve.nextSibling;return Ee.addEventListener("change",()=>M({...C(),shipping:ne.value})),_(We,()=>ne.label),_(Oe,()=>ne.price),q(()=>Ie(ue,`flex items-center gap-3 p-3 rounded border cursor-pointer transition-colors ${C().shipping===ne.value?"border-aurum-gold bg-aurum-dark":"border-aurum-border hover:border-aurum-muted"}`)),q(()=>Ee.value=ne.value),q(()=>Ee.checked=C().shipping===ne.value),ue})())),q(()=>de.value=C().fullName),q(()=>ge.value=C().phone),q(()=>$e.value=C().address),q(()=>Me.value=C().city),q(()=>Xe.value=C().postal),F})(),(()=>{var F=mI(),W=F.firstChild,te=W.nextSibling;return W.$$click=()=>e(1),te.$$click=()=>e(3),F})()]}}),null),_(Ce,R(Z,{get when(){return n()===3},get children(){return[(()=>{var F=pI(),W=F.firstChild,te=W.nextSibling;return _(te,()=>[{value:"visa",label:"Visa ending 4242",sub:"Nikad ne ističe"},{value:"mc",label:"Mastercard ending 8828",sub:"Expires 12/2026"},{value:"amex",label:"American Express ending 3358",sub:"Expires 09/2025"}].map(X=>(()=>{var G=AI(),de=G.firstChild,oe=de.nextSibling,Se=oe.nextSibling,ge=Se.firstChild,xe=ge.nextSibling;return de.addEventListener("change",()=>p(X.value)),_(oe,(()=>{var pe=rt(()=>X.value==="visa");return()=>pe()?"VISA":X.value==="mc"?"MC":"AMEX"})()),_(ge,()=>X.label),_(xe,()=>X.sub),q(()=>Ie(G,`flex items-center gap-3 p-4 rounded border cursor-pointer transition-colors ${f()===X.value?"border-aurum-gold bg-aurum-dark":"border-aurum-border hover:border-aurum-muted"}`)),q(()=>de.checked=f()===X.value),G})())),F})(),(()=>{var F=gI(),W=F.firstChild,te=W.nextSibling;return W.$$click=()=>e(2),te.$$click=()=>e(4),F})()]}}),null),_(Ce,R(Z,{get when(){return n()===4},get children(){return[(()=>{var F=_I(),W=F.firstChild,te=W.nextSibling,X=te.firstChild,G=X.firstChild,de=G.nextSibling,oe=X.nextSibling,Se=oe.firstChild,ge=Se.nextSibling,xe=ge.firstChild,pe=oe.nextSibling,$e=pe.firstChild,Qe=$e.nextSibling,ot=pe.nextSibling,Me=ot.firstChild,je=Me.nextSibling,pt=ot.nextSibling,Xe=pt.firstChild,tt=Xe.nextSibling;return tt.firstChild,_(de,()=>C().fullName),_(ge,()=>C().address,xe),_(ge,()=>C().city,null),_(Qe,()=>C().shipping==="express"?"Express":"Standard"),_(je,f),_(tt,()=>b().toFixed(2),null),F})(),R(Z,{get when(){return v()},get children(){var F=yI();return F.firstChild,_(F,v,null),F}}),(()=>{var F=vI(),W=F.firstChild,te=W.nextSibling;return W.$$click=()=>e(3),te.$$click=E,_(te,()=>V()?"⏳ Obrađujem...":"✓ Potvrdi narudžbu"),q(()=>te.disabled=V()||Jt().length===0),F})()]}}),null),_(ze,()=>Jt().length,mt),_(ze,()=>Jt().length===1?"artikl":"artikala",null),_(Fe,R(ut,{get each(){return Jt()},children:F=>(()=>{var W=SI(),te=W.firstChild,X=te.nextSibling,G=X.nextSibling;return G.firstChild,_(X,()=>F.name),_(G,()=>(F.price*F.quantity).toLocaleString(),null),q(()=>Ze(te,"src",F.images?.[0])),W})()}),Ke),_(st,()=>pr().toLocaleString(),null),_(Ke,R(Z,{get when(){return s()},get children(){var F=bI(),W=F.firstChild,te=W.nextSibling;return te.firstChild,_(te,()=>O().toFixed(2),null),F}}),et),_(Ye,(()=>{var F=rt(()=>z()===0);return()=>F()?CI():`$${z().toFixed(2)}`})()),_(Vt,()=>U().toFixed(2),null),_(Y,()=>b().toFixed(2),null),m})()}nn(["input","click"]);var kI=k('<button type=submit class="btn-gold w-full py-2.5 rounded-lg text-sm">Spremi promjene'),RI=k('<p class="text-green-400 text-xs text-center">✓ Promjene su spremljene'),PI=k('<div class="card-dark p-6 max-w-lg"><div class="flex items-center justify-between mb-6"><h2 class="section-title text-base">Osobni podaci</h2><button class="text-xs text-aurum-gold border border-aurum-gold px-3 py-1.5 rounded hover:bg-aurum-gold hover:text-aurum-black transition-all"></button></div><form class=space-y-4>'),$I=k('<p class="text-aurum-muted text-sm">Nemaš još narudžbi.'),VI=k('<div class=space-y-4><h2 class="section-title text-base mb-4">Povijest narudžbi'),NI=k('<div class="card-dark p-10 text-center"><p class="text-aurum-muted mb-3">Wishlist je prazan.'),DI=k('<div><h2 class="section-title text-base mb-4">♥ Wishlist</h2><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">'),OI=k('<div class="card-dark p-6 max-w-lg"><h2 class="section-title text-base mb-4">Adrese dostave</h2><div class="border border-aurum-gold rounded-lg p-4 mb-4"><div class="flex items-center justify-between mb-2"><span class="text-xs badge-exclusive">Zadana</span></div><p class="text-aurum-text text-sm"></p><p class="text-aurum-muted text-sm">Ilica 1, Zagreb, 10000, Croatia</p></div><button class="text-aurum-gold text-xs border border-aurum-border px-4 py-2 rounded hover:border-aurum-gold transition-colors">+ Dodaj novu adresu'),LI=k('<div class="card-dark p-6 max-w-lg"><h2 class="section-title text-base mb-6">Sigurnost</h2><div class=space-y-4><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Trenutna lozinka</label><input type=password class="input-dark w-full px-4 py-2.5 text-sm"placeholder=••••••••></div><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Nova lozinka</label><input type=password class="input-dark w-full px-4 py-2.5 text-sm"placeholder=••••••••></div><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Potvrdi novu lozinku</label><input type=password class="input-dark w-full px-4 py-2.5 text-sm"placeholder=••••••••></div><button class="btn-gold w-full py-2.5 rounded-lg text-sm">Promijeni lozinku</button></div><div class="mt-6 pt-6 border-t border-aurum-border"><button class="text-red-400 text-sm hover:text-red-300 transition-colors">Odjava s računa →'),MI=k('<div class="min-h-screen bg-aurum-black"><div class="max-w-5xl mx-auto px-4 py-10 page-enter"><div class="flex items-center gap-4 mb-8"><div class="w-16 h-16 bg-aurum-gold rounded-full flex items-center justify-center"><span class="text-aurum-black font-display font-black text-2xl"></span></div><div><h1 class="font-display text-2xl font-bold text-white"></h1><p class="text-aurum-muted text-sm"></p><span></span></div></div><div class="flex border-b border-aurum-border mb-8 overflow-x-auto">'),UI=k("<button>"),FI=k('<div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5"></label><input type=text>'),jI=k('<div class="card-dark p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"><div><p class="font-bold text-aurum-gold">#</p><p class="text-aurum-muted text-sm"></p><p class="text-aurum-muted text-xs"></p></div><div class=text-right><p class="text-aurum-gold font-bold">$</p><span>'),BI=k('<div class="aspect-square overflow-hidden bg-aurum-dark relative"><img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"><button class="absolute top-2 right-2 w-8 h-8 bg-aurum-black/70 rounded-full flex items-center justify-center text-red-400 hover:bg-red-900/50 transition-colors">♥'),qI=k('<div class=p-3><p class="text-xs font-display text-aurum-text"></p><p class="text-aurum-gold text-sm font-bold mt-1">$');function zI(){const n=gn(),[e,t]=H("profile"),[r,s]=H(!1),[i,a]=H(!1);if(!fn())return n("/login"),null;Ws(()=>{Ja(),Im(),Gt().length===0&&Wn()});const[l,u]=H({name:yt()?.name||"",email:yt()?.email||"",phone:"",address:""});async function h(w){w.preventDefault();try{await RE({name:l().name,address:l().address}),a(!0),s(!1),setTimeout(()=>a(!1),2e3)}catch(x){console.error("Greška pri ažuriranju:",x)}}const f=["profile","orders","wishlist","addresses","security"],p={profile:"Profil",orders:"Narudžbe",wishlist:"♥ Wishlist",addresses:"Adrese",security:"Sigurnost"};return(()=>{var w=MI(),x=w.firstChild,S=x.firstChild,$=S.firstChild,V=$.firstChild,N=$.nextSibling,C=N.firstChild,M=C.nextSibling,O=M.nextSibling,z=S.nextSibling;return _(w,R(Mo,{}),x),_(V,()=>yt()?.name?.charAt(0)),_(C,()=>yt()?.name),_(M,()=>yt()?.email),_(O,()=>yt()?.role==="admin"?"Administrator":"Korisnik"),_(z,()=>f.map(U=>(()=>{var b=UI();return b.$$click=()=>t(U),_(b,()=>p[U]),q(()=>Ie(b,`px-5 py-3 text-sm font-display tracking-wider whitespace-nowrap transition-colors ${e()===U?"text-aurum-gold border-b-2 border-aurum-gold":"text-aurum-muted hover:text-aurum-text"}`)),b})())),_(x,R(Z,{get when(){return e()==="profile"},get children(){var U=PI(),b=U.firstChild,y=b.firstChild,v=y.nextSibling,T=b.nextSibling;return v.$$click=()=>s(!r()),_(v,()=>r()?"Odustani":"Uredi"),T.addEventListener("submit",h),_(T,()=>[{key:"name",label:"Ime i prezime"},{key:"email",label:"Email"},{key:"phone",label:"Telefon"},{key:"address",label:"Adresa"}].map(E=>(()=>{var I=FI(),m=I.firstChild,j=m.nextSibling;return _(m,()=>E.label),j.$$input=re=>u({...l(),[E.key]:re.target.value}),q(re=>{var we=!r(),Ce=`input-dark w-full px-4 py-2.5 text-sm ${r()?"":"opacity-60 cursor-not-allowed"}`;return we!==re.e&&(j.disabled=re.e=we),Ce!==re.t&&Ie(j,re.t=Ce),re},{e:void 0,t:void 0}),q(()=>j.value=l()[E.key]),I})()),null),_(T,R(Z,{get when(){return r()},get children(){return kI()}}),null),_(T,R(Z,{get when(){return i()},get children(){return RI()}}),null),U}}),null),_(x,R(Z,{get when(){return e()==="orders"},get children(){var U=VI();return U.firstChild,_(U,R(Z,{get when(){return Ur().length===0},get children(){return $I()}}),null),_(U,R(ut,{get each(){return Ur()},children:b=>(()=>{var y=jI(),v=y.firstChild,T=v.firstChild;T.firstChild;var E=T.nextSibling,I=E.nextSibling,m=v.nextSibling,j=m.firstChild;j.firstChild;var re=j.nextSibling;return _(T,()=>b.id?.slice(0,8).toUpperCase(),null),_(E,()=>b.items?.map(we=>we.name).join(", ")||"Artikli"),_(I,()=>b.shippingAddress?.city||""),_(j,()=>Number(b.total||0).toFixed(2),null),_(re,()=>b.status||"Processing"),q(()=>Ie(re,`text-xs px-2 py-0.5 rounded-full ${b.status==="Delivered"?"bg-green-900 text-green-400":b.status==="Processing"?"bg-yellow-900 text-yellow-400":b.status==="Shipped"?"bg-blue-900 text-blue-400":"bg-aurum-dark text-aurum-muted"}`)),y})()}),null),U}}),null),_(x,R(Z,{get when(){return e()==="wishlist"},get children(){var U=DI(),b=U.firstChild,y=b.nextSibling;return _(U,R(Z,{get when(){return ho().length===0},get children(){var v=NI();return v.firstChild,_(v,R(_e,{href:"/catalog",class:"btn-gold px-6 py-2.5 rounded-lg text-sm inline-block",children:"Istraži katalog"}),null),v}}),y),_(y,R(ut,{get each(){return Gt().filter(v=>ho().includes(v.id))},children:v=>R(_e,{get href(){return`/product/${v.id}`},class:"card-dark overflow-hidden group hover:border-aurum-gold transition-all duration-300",get children(){return[(()=>{var T=BI(),E=T.firstChild,I=E.nextSibling;return I.$$click=async m=>{m.preventDefault(),await Am(v.id)},q(m=>{var j=v.images?.[0],re=v.name;return j!==m.e&&Ze(E,"src",m.e=j),re!==m.t&&Ze(E,"alt",m.t=re),m},{e:void 0,t:void 0}),T})(),(()=>{var T=qI(),E=T.firstChild,I=E.nextSibling;return I.firstChild,_(E,()=>v.name),_(I,()=>v.price?.toLocaleString(),null),T})()]}})})),U}}),null),_(x,R(Z,{get when(){return e()==="addresses"},get children(){var U=OI(),b=U.firstChild,y=b.nextSibling,v=y.firstChild,T=v.nextSibling;return _(T,()=>yt()?.name),U}}),null),_(x,R(Z,{get when(){return e()==="security"},get children(){var U=LI(),b=U.firstChild,y=b.nextSibling,v=y.nextSibling,T=v.firstChild;return T.$$click=()=>{Mr(),n("/login")},U}}),null),_(w,R(Yl,{}),null),q(()=>Ie(O,`text-xs px-2 py-0.5 rounded-full mt-1 inline-block ${yt()?.role==="admin"?"bg-aurum-gold text-aurum-black font-bold":"bg-aurum-dark border border-aurum-border text-aurum-muted"}`)),w})()}nn(["click","input"]);var WI=k('<div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">'),HI=k('<div class="grid grid-cols-1 xl:grid-cols-3 gap-6"><div class="xl:col-span-2 card-dark p-5"><h2 class="section-title text-base mb-4">Latest transactions</h2><div class=space-y-3></div></div><div class=space-y-4><div class="card-dark p-5"><h3 class="section-title text-sm mb-4">Quick Actions</h3><div class=space-y-2><button class="flex items-center gap-2 border border-aurum-border text-aurum-text text-sm px-4 py-2.5 rounded w-full hover:border-aurum-gold transition-colors">🏷 Create Promotion</button><button class="flex items-center gap-2 border border-aurum-border text-aurum-text text-sm px-4 py-2.5 rounded w-full hover:border-aurum-gold transition-colors">👥 Manage Roles</button></div></div><div class="card-dark p-5"><div class="flex items-center justify-between mb-3"><h3 class="section-title text-sm">Audit Trail</h3><span class="text-xs text-aurum-muted"> events</span></div><div class=space-y-3>'),GI=k('<p class="text-aurum-muted text-sm">Sve zalihe su uredne.'),KI=k('<div class="card-dark p-5 mt-6"><h2 class="section-title text-base mb-4">Items needing restock'),QI=k('<h2 class="section-title mb-6">Sve narudžbe'),JI=k('<p class="text-aurum-muted text-sm text-center py-10">Nema narudžbi.'),bh=k('<div class="card-dark p-5">'),YI=k('<h2 class="section-title mb-6">Korisnici'),XI=k('<p class="text-aurum-muted text-sm text-center py-10 animate-pulse">Učitavanje korisnika...'),ZI=k('<p class="text-aurum-muted text-sm text-center py-10">Nema korisnika.'),eA=k('<h2 class="section-title mb-6">Promocije i kuponi'),tA=k('<div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="card-dark p-6"><h3 class="text-aurum-gold font-display text-sm font-bold uppercase tracking-widest mb-4">Aktivni kuponi</h3><div class=space-y-3><div class="flex items-center justify-between p-3 bg-aurum-dark rounded-lg border border-aurum-border"><div><p class="text-aurum-gold font-bold font-mono">AURUM10</p><p class="text-aurum-muted text-xs">10% popust · Samo prijavljeni</p></div><span class="text-green-400 text-xs bg-green-900/30 px-2 py-0.5 rounded-full">Aktivan</span></div></div></div><div class="card-dark p-6"><h3 class="text-aurum-gold font-display text-sm font-bold uppercase tracking-widest mb-4">Dodaj novi kupon</h3><div class=space-y-3><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Kod kupona</label><input type=text placeholder="npr. SUMMER20"class="input-dark w-full px-4 py-2.5 text-sm"></div><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Popust (%)</label><input type=number placeholder=10 class="input-dark w-full px-4 py-2.5 text-sm"></div><button class="btn-gold w-full py-2.5 rounded text-sm">Kreiraj kupon'),nA=k('<h2 class="section-title mb-6">Postavke'),rA=k('<div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="card-dark p-6"><h3 class="text-aurum-gold font-display text-sm font-bold uppercase tracking-widest mb-4">Lozinka za ulaz</h3><p class="text-aurum-muted text-xs mb-4">Promijeni lozinku koja se traži na Password Gate stranici.</p><div class=space-y-3><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Nova lozinka</label><input type=text placeholder=nova-lozinka class="input-dark w-full px-4 py-2.5 text-sm"></div><button class="btn-gold w-full py-2.5 rounded text-sm">Spremi lozinku</button></div></div><div class="card-dark p-6"><h3 class="text-aurum-gold font-display text-sm font-bold uppercase tracking-widest mb-4">Session postavke</h3><p class="text-aurum-muted text-xs mb-4">Trenutno preostalo: <span></span></p><button class="btn-gold w-full py-2.5 rounded text-sm mb-3">+ Produži session za 15 min</button><button class="w-full border border-red-500/30 text-red-400 py-2.5 rounded text-sm hover:bg-red-900/20 transition-colors">Odjavi se odmah</button></div><div class="card-dark p-6"><h3 class="text-aurum-gold font-display text-sm font-bold uppercase tracking-widest mb-4">Informacije o shopu</h3><div class=space-y-3><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Naziv shopa</label><input type=text value=AurumVault class="input-dark w-full px-4 py-2.5 text-sm"></div><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Email za kontakt</label><input type=email value=contact@aurumvault.com class="input-dark w-full px-4 py-2.5 text-sm"></div><button class="btn-gold w-full py-2.5 rounded text-sm">Spremi postavke</button></div></div><div class="card-dark p-6"><h3 class="text-aurum-gold font-display text-sm font-bold uppercase tracking-widest mb-4">Administracija</h3><div class=space-y-3><div class="flex items-center justify-between py-2 border-b border-aurum-border"><span class="text-sm text-aurum-text">Maintenance mode</span><div class="w-8 h-4 bg-aurum-muted rounded-full cursor-pointer hover:bg-aurum-gold transition-colors"></div></div><div class="flex items-center justify-between py-2 border-b border-aurum-border"><span class="text-sm text-aurum-text">Password Gate</span><div class="w-8 h-4 bg-aurum-gold rounded-full cursor-pointer"></div></div><div class="flex items-center justify-between py-2"><span class="text-sm text-aurum-text">Members only mode</span><div class="w-8 h-4 bg-aurum-muted rounded-full cursor-pointer hover:bg-aurum-gold transition-colors">'),sA=k('<p class="text-xs text-red-400 mb-2 animate-pulse">⚠ Session uskoro ističe!'),iA=k('<div class="min-h-screen bg-aurum-black flex flex-col"><div class="bg-aurum-dark border-b border-aurum-border px-4 py-2 flex items-center justify-between text-xs flex-wrap gap-2"><div class="flex items-center gap-3 flex-wrap"><div class="flex items-center gap-2"><div class="w-6 h-6 bg-aurum-gold rounded-full flex items-center justify-center"><span class="text-aurum-black font-black text-xs">A</span></div><span class="font-display font-bold text-aurum-gold tracking-widest hidden sm:block">AurumVault</span></div><span class="text-red-400 border border-red-400/30 px-2 py-0.5 rounded">🔒 Secure Admin Area</span><span class="text-aurum-muted hidden md:block">2-Step Verification: Enabled</span><span>Session active • Expires in <span class=font-bold></span></span></div><div class="flex items-center gap-4"><div class=text-right><p class="text-aurum-text font-bold"></p><p class="text-aurum-gold text-xs">Role: Super Admin</p></div><button class="border border-aurum-border text-aurum-muted px-3 py-1 rounded hover:border-red-400 hover:text-red-400 transition-colors">Logout</button></div></div><div class="flex flex-1 overflow-hidden"><aside class="w-48 bg-aurum-dark border-r border-aurum-border flex flex-col p-4 flex-shrink-0"><div class="text-xs text-aurum-muted uppercase tracking-widest mb-3">Navigation <span class=text-aurum-gold>v1.3</span></div><div class="mt-6 pt-4 border-t border-aurum-border"><div class="text-xs text-aurum-muted uppercase tracking-widest mb-2">Security</div><div class="flex items-center gap-2 text-xs text-green-400 mb-3"><span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>Audit Trail Live</div><div class="text-xs text-aurum-muted uppercase tracking-widest mb-2">Quick Role Controls</div></div></aside><main class="flex-1 overflow-y-auto p-6"></main><div class="w-48 bg-aurum-dark border-l border-aurum-border p-4 hidden xl:block flex-shrink-0"><h4 class="text-xs text-aurum-muted uppercase tracking-widest mb-3">Role-Based Controls</h4><div class="mt-6 pt-4 border-t border-aurum-border card-dark p-3"><h4 class="text-xs text-aurum-muted uppercase tracking-widest mb-2">Session Timeout</h4><p class="text-xs text-aurum-muted leading-relaxed mb-3">Ističe za: <span></span></p><div class="flex flex-col gap-2"><button class="btn-gold py-1.5 rounded text-xs">Extend Session</button><button class="border border-aurum-border text-aurum-muted py-1.5 rounded text-xs hover:border-red-400 hover:text-red-400 transition-colors">Logout Now'),oA=k("<button><span></span> "),aA=k('<div class="flex items-center justify-between mb-2"><span class="text-xs text-aurum-text"></span><div>'),lA=k('<div class="card-dark p-5 flex items-start justify-between"><div><p class="text-aurum-muted text-xs uppercase tracking-widest"></p><p></p><p class="text-aurum-muted text-xs mt-1"></p></div><span class=text-2xl>'),cA=k('<p class="text-aurum-muted text-sm text-center py-6">Nema narudžbi'),uA=k('<div class="flex items-center gap-3 py-3 border-b border-aurum-border last:border-0"><div class="w-10 h-10 bg-aurum-muted rounded flex items-center justify-center text-xs flex-shrink-0">📦</div><div class="flex-1 min-w-0"><p class="text-aurum-text text-sm font-bold truncate">Order #</p><p class="text-aurum-muted text-xs"></p></div><span class="text-aurum-gold font-bold text-sm">$</span><select class="input-dark text-xs px-2 py-1 rounded flex-shrink-0">'),wh=k("<option>"),hA=k('<div><p class=leading-relaxed></p><p class="text-aurum-muted mt-0.5">'),dA=k('<img alt class="w-full h-full object-cover">'),fA=k('<div class="flex items-center gap-4 py-3 border-b border-aurum-border last:border-0"><div class="w-10 h-10 rounded overflow-hidden flex-shrink-0 bg-aurum-muted"></div><div class=flex-1><p class="text-aurum-text text-sm font-medium"></p><p class="text-aurum-muted text-xs">SKU: <!> · <!> jedinica</p></div><span>'),mA=k('<div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 py-4 border-b border-aurum-border last:border-0"><div class="flex-1 min-w-0"><p class="text-aurum-gold font-bold font-mono text-sm">#</p><p class="text-aurum-text text-sm"></p><p class="text-aurum-muted text-xs">, </p><p class="text-aurum-muted text-xs mt-1">Artikli: </p></div><div class="flex items-center gap-3 flex-shrink-0"><span class="text-aurum-gold font-bold">$</span><select class="input-dark text-xs px-2 py-1.5 rounded">'),pA=k('<div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 py-4 border-b border-aurum-border last:border-0"><div class="w-10 h-10 bg-aurum-gold rounded-full flex items-center justify-center flex-shrink-0"><span class="text-aurum-black font-bold"></span></div><div class="flex-1 min-w-0"><p class="text-aurum-text text-sm font-bold"></p><p class="text-aurum-muted text-xs"></p><p class="text-aurum-muted text-xs">UID: <!>...</p></div><div class="flex items-center gap-2 flex-shrink-0"><span></span><select class="input-dark text-xs px-2 py-1.5 rounded"><option value=user>user</option><option value=admin>admin'),gA=k('<div class="flex items-center justify-between mb-3"><span class="text-xs text-aurum-text leading-tight pr-2"></span><div>');function _A(){const n=gn(),[e,t]=H("dashboard");if(!ci())return n("/login"),null;const r=1*60,[s,i]=H(r),[a,l]=H(!1);function u(O){const z=Math.floor(O/60),U=O%60;return`${z}m ${String(U).padStart(2,"0")}s`}const h=setInterval(()=>{i(O=>O<=1?(clearInterval(h),Mr().then(()=>n("/login")),0):(O<=60&&l(!0),O-1))},1e3);mo(()=>clearInterval(h));function f(){i(O=>O+15*60),l(!1)}Ws(()=>{Ja(),Wn()});const[p,w]=H([]),[x,S]=H(!1);async function $(){S(!0);try{const O=await Do(kn(dt,"users"));w(O.docs.map(z=>({id:z.id,...z.data()})))}catch(O){console.error(O)}S(!1)}async function V(O,z){await ts(Ht(dt,"orders",O),{status:z}),await Ja()}async function N(O,z){await ts(Ht(dt,"users",O),{role:z}),await $()}const C=[{key:"dashboard",icon:"📊",label:"Dashboard"},{key:"orders",icon:"📦",label:"Orders"},{key:"customers",icon:"👥",label:"Customers"},{key:"promotions",icon:"🏷",label:"Promotions"},{key:"settings",icon:"⚙",label:"Settings"}],M=[{text:`${yt()?.name} logged in`,time:"Just now",type:"info"},{text:"Role change: Leila Morgan promoted to Manager",time:"28 Feb 2026 · 0:01",type:"warning"},{text:"System: Failed login attempt blocked (3 attempts)",time:"28 Feb 2026 · 03:05",type:"error"}];return(()=>{var O=iA(),z=O.firstChild,U=z.firstChild,b=U.firstChild,y=b.nextSibling,v=y.nextSibling,T=v.nextSibling,E=T.firstChild,I=E.nextSibling,m=U.nextSibling,j=m.firstChild,re=j.firstChild,we=j.nextSibling,Ce=z.nextSibling,De=Ce.firstChild,Fe=De.firstChild,Le=Fe.nextSibling,ze=Le.firstChild,mt=ze.nextSibling;mt.nextSibling;var Ke=De.nextSibling,Ae=Ke.nextSibling,bt=Ae.firstChild,st=bt.nextSibling,et=st.firstChild,Re=et.nextSibling,Ye=Re.firstChild,it=Ye.nextSibling,$t=Re.nextSibling,Vt=$t.firstChild,Ot=Vt.nextSibling;return _(I,()=>u(s())),_(U,R(_e,{href:"/catalog",class:"text-aurum-muted border border-aurum-border px-2 py-0.5 rounded hover:border-aurum-gold hover:text-aurum-gold transition-colors",children:"← Na stranicu"}),null),_(re,()=>yt()?.name),we.$$click=()=>Mr().then(()=>n("/login")),_(De,R(ut,{each:C,children:ae=>(()=>{var Y=oA(),F=Y.firstChild;return F.nextSibling,Y.$$click=()=>{t(ae.key),ae.key==="customers"&&$()},_(F,()=>ae.icon),_(Y,()=>ae.label,null),q(()=>Ie(Y,`flex items-center gap-2 px-3 py-2.5 rounded text-sm mb-1 transition-colors w-full text-left ${e()===ae.key?"bg-aurum-gold text-aurum-black font-bold":"text-aurum-muted hover:text-aurum-text hover:bg-aurum-card"}`)),Y})()}),Le),_(Le,()=>[{role:"Manager",active:!0},{role:"Auditor",active:!1}].map(ae=>(()=>{var Y=aA(),F=Y.firstChild,W=F.nextSibling;return _(F,()=>ae.role),q(()=>Ie(W,`w-8 h-4 rounded-full cursor-pointer ${ae.active?"bg-aurum-gold":"bg-aurum-muted"}`)),Y})()),null),_(Ke,R(Z,{get when(){return e()==="dashboard"},get children(){return[(()=>{var ae=WI();return _(ae,()=>[{label:"Sales Today",value:"$18,742",change:"+8.6% vs yesterday",icon:"💰",color:"text-aurum-gold"},{label:"Orders Pending",value:Ur().filter(Y=>Y.status==="Processing").length||"0",change:"U obradi",icon:"📦",color:"text-yellow-400"},{label:"Inventory Alerts",value:Gt().filter(Y=>Y.stock<=3).length||"0",change:"Niska zaliha",icon:"⚠",color:"text-red-400"}].map(Y=>(()=>{var F=lA(),W=F.firstChild,te=W.firstChild,X=te.nextSibling,G=X.nextSibling,de=W.nextSibling;return _(te,()=>Y.label),_(X,()=>Y.value),_(G,()=>Y.change),_(de,()=>Y.icon),q(()=>Ie(X,`font-display text-2xl font-bold mt-1 ${Y.color}`)),F})())),ae})(),(()=>{var ae=HI(),Y=ae.firstChild,F=Y.firstChild,W=F.nextSibling,te=Y.nextSibling,X=te.firstChild,G=X.firstChild,de=G.nextSibling,oe=de.firstChild,Se=oe.nextSibling,ge=X.nextSibling,xe=ge.firstChild,pe=xe.firstChild,$e=pe.nextSibling,Qe=$e.firstChild,ot=xe.nextSibling;return _(W,R(ut,{get each(){return Ur().slice(0,5)},get fallback(){return cA()},children:Me=>(()=>{var je=uA(),pt=je.firstChild,Xe=pt.nextSibling,tt=Xe.firstChild;tt.firstChild;var K=tt.nextSibling,se=Xe.nextSibling;se.firstChild;var ne=se.nextSibling;return _(tt,()=>Me.id?.slice(0,8).toUpperCase(),null),_(K,()=>Me.shippingAddress?.fullName||"Gost"),_(se,()=>Number(Me.total||0).toFixed(2),null),ne.addEventListener("change",ue=>V(Me.id,ue.target.value)),_(ne,()=>["Processing","Awaiting Fulfillment","Shipped","Delivered","Cancelled"].map(ue=>(()=>{var Ee=wh();return Ee.value=ue,_(Ee,ue),Ee})())),q(()=>ne.value=Me.status||"Processing"),je})()})),_(de,R(_e,{href:"/admin/products/new",class:"flex items-center gap-2 bg-aurum-gold text-aurum-black text-sm font-bold px-4 py-2.5 rounded w-full hover:bg-yellow-300 transition-colors",children:"+ Add New Product"}),oe),oe.$$click=()=>t("promotions"),Se.$$click=()=>{t("customers"),$()},_($e,()=>M.length,Qe),_(ot,()=>M.map(Me=>(()=>{var je=hA(),pt=je.firstChild,Xe=pt.nextSibling;return _(pt,()=>Me.text),_(Xe,()=>Me.time),q(()=>Ie(je,`text-xs border-l-2 pl-3 ${Me.type==="error"?"border-red-500 text-red-400":Me.type==="warning"?"border-yellow-500 text-yellow-400":"border-aurum-gold text-aurum-text"}`)),je})())),ae})(),(()=>{var ae=KI();return ae.firstChild,_(ae,R(Z,{get when(){return Gt().filter(Y=>Y.stock<=5).length===0},get children(){return GI()}}),null),_(ae,R(ut,{get each(){return Gt().filter(Y=>Y.stock<=5)},children:Y=>(()=>{var F=fA(),W=F.firstChild,te=W.nextSibling,X=te.firstChild,G=X.nextSibling,de=G.firstChild,oe=de.nextSibling,Se=oe.nextSibling,ge=Se.nextSibling;ge.nextSibling;var xe=te.nextSibling;return _(W,R(Z,{get when(){return Y.images?.[0]},get children(){var pe=dA();return q(()=>Ze(pe,"src",Y.images[0])),pe}})),_(X,()=>Y.name),_(G,()=>Y.sku,oe),_(G,()=>Y.stock,ge),_(xe,()=>Y.stock<=2?"CRITICAL":"LOW"),_(F,R(_e,{get href(){return`/admin/products/edit/${Y.id}`},class:"text-xs text-aurum-gold border border-aurum-gold px-2 py-1 rounded hover:bg-aurum-gold hover:text-aurum-black transition-all",children:"Uredi"}),null),q(()=>Ie(xe,`text-xs font-bold px-2 py-0.5 rounded-full ${Y.stock<=2?"text-red-400 bg-red-900/30":"text-yellow-400 bg-yellow-900/30"}`)),F})()}),null),ae})()]}}),null),_(Ke,R(Z,{get when(){return e()==="orders"},get children(){return[QI(),(()=>{var ae=bh();return _(ae,R(Z,{get when(){return Ur().length===0},get children(){return JI()}}),null),_(ae,R(ut,{get each(){return Ur()},children:Y=>(()=>{var F=mA(),W=F.firstChild,te=W.firstChild;te.firstChild;var X=te.nextSibling,G=X.nextSibling,de=G.firstChild,oe=G.nextSibling;oe.firstChild;var Se=W.nextSibling,ge=Se.firstChild;ge.firstChild;var xe=ge.nextSibling;return _(te,()=>Y.id?.slice(0,8).toUpperCase(),null),_(X,()=>Y.shippingAddress?.fullName||"Gost"),_(G,()=>Y.shippingAddress?.address,de),_(G,()=>Y.shippingAddress?.city,null),_(oe,()=>Y.items?.map(pe=>`${pe.name} x${pe.quantity}`).join(", ")||"—",null),_(ge,()=>Number(Y.total||0).toFixed(2),null),xe.addEventListener("change",pe=>V(Y.id,pe.target.value)),_(xe,()=>["Processing","Awaiting Fulfillment","Shipped","Delivered","Cancelled"].map(pe=>(()=>{var $e=wh();return $e.value=pe,_($e,pe),$e})())),q(()=>xe.value=Y.status||"Processing"),F})()}),null),ae})()]}}),null),_(Ke,R(Z,{get when(){return e()==="customers"},get children(){return[YI(),(()=>{var ae=bh();return _(ae,R(Z,{get when(){return x()},get children(){return XI()}}),null),_(ae,R(Z,{get when(){return rt(()=>!x())()&&p().length===0},get children(){return ZI()}}),null),_(ae,R(ut,{get each(){return p()},children:Y=>(()=>{var F=pA(),W=F.firstChild,te=W.firstChild,X=W.nextSibling,G=X.firstChild,de=G.nextSibling,oe=de.nextSibling,Se=oe.firstChild,ge=Se.nextSibling;ge.nextSibling;var xe=X.nextSibling,pe=xe.firstChild,$e=pe.nextSibling;return _(te,()=>Y.name?.charAt(0)||"?"),_(G,()=>Y.name||"Bez imena"),_(de,()=>Y.email),_(oe,()=>Y.id?.slice(0,12),ge),_(pe,()=>Y.role||"user"),$e.addEventListener("change",Qe=>N(Y.id,Qe.target.value)),q(()=>Ie(pe,`text-xs px-2 py-0.5 rounded-full ${Y.role==="admin"?"bg-aurum-gold text-aurum-black font-bold":"bg-aurum-dark text-aurum-muted border border-aurum-border"}`)),q(()=>$e.value=Y.role||"user"),F})()}),null),ae})()]}}),null),_(Ke,R(Z,{get when(){return e()==="promotions"},get children(){return[eA(),tA()]}}),null),_(Ke,R(Z,{get when(){return e()==="settings"},get children(){return[nA(),(()=>{var ae=rA(),Y=ae.firstChild,F=Y.nextSibling,W=F.firstChild,te=W.nextSibling,X=te.firstChild,G=X.nextSibling,de=te.nextSibling,oe=de.nextSibling;return _(G,()=>u(s())),de.$$click=f,oe.$$click=()=>Mr().then(()=>n("/login")),q(()=>Ie(G,`font-bold ${a()?"text-red-400":"text-aurum-gold"}`)),ae})()]}}),null),_(Ae,()=>[{label:"Grant product edit",active:!0},{label:"Allow promotions create",active:!1}].map(ae=>(()=>{var Y=gA(),F=Y.firstChild,W=F.nextSibling;return _(F,()=>ae.label),q(()=>Ie(W,`w-8 h-4 rounded-full flex-shrink-0 cursor-pointer ${ae.active?"bg-aurum-gold":"bg-aurum-muted"}`)),Y})()),st),_(it,()=>u(s())),_(st,R(Z,{get when(){return a()},get children(){return sA()}}),$t),Vt.$$click=f,Ot.$$click=()=>Mr().then(()=>n("/login")),q(ae=>{var Y=`font-medium ${a()?"text-red-400 animate-pulse":"text-green-400"}`,F=`font-bold ${a()?"text-red-400 animate-pulse":"text-aurum-gold"}`;return Y!==ae.e&&Ie(T,ae.e=Y),F!==ae.t&&Ie(it,ae.t=F),ae},{e:void 0,t:void 0}),O})()}nn(["click"]);var yA=k('<div class="w-6 h-6 bg-aurum-gold rounded-full flex items-center justify-center"><span class="text-aurum-black font-black text-xs">A'),vA=k('<span class="font-display font-bold text-aurum-gold tracking-widest hidden sm:block">AurumVault'),bA=k('<div class="border-2 border-dashed border-aurum-border rounded-lg p-8 text-center text-aurum-muted text-sm">Dodaj URL slike gore ↑'),wA=k('<div class="bg-red-900/30 border border-red-500 rounded-lg p-3 text-red-400 text-xs">⚠ '),xA=k('<div class="bg-green-900/30 border border-green-500 rounded-lg p-3 text-green-400 text-xs">✓ Proizvod je spremljen kao draft.'),EA=k('<img alt class="w-full h-full object-cover">'),TA=k('<span class="badge-exclusive mb-2 inline-block">'),IA=k('<button class="w-full border border-red-500/30 text-red-400 py-2.5 rounded text-sm hover:bg-red-900/20 transition-colors disabled:opacity-50">'),AA=k('<div class="min-h-screen bg-aurum-black"><div class="bg-aurum-dark border-b border-aurum-border px-4 py-3 flex items-center justify-between"><div class="flex items-center gap-4 text-sm"><span class=text-aurum-muted>›</span><span class=text-aurum-muted>›</span><span class="text-aurum-text text-xs"></span></div></div><div class="max-w-7xl mx-auto px-4 py-8"><div class="flex items-center gap-4 mb-8"><h1 class="font-display text-2xl font-bold text-white"></h1><span class="text-xs border border-yellow-500 text-yellow-500 px-2 py-0.5 rounded">⚠ Inline validation enabled</span></div><div class="grid grid-cols-1 xl:grid-cols-3 gap-8"><div class="xl:col-span-2 space-y-6"><div class="card-dark p-6"><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Naziv proizvoda <span class=text-red-400>*</span></label><input type=text class="input-dark w-full px-4 py-3 text-sm font-medium"placeholder="Unesi naziv proizvoda"></div><div class="card-dark p-6"><div class="grid grid-cols-2 gap-4"><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">SKU</label><input type=text class="input-dark w-full px-4 py-2.5 text-sm"placeholder=AV-XXX-000></div><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Cijena (USD) <span class=text-red-400>*</span></label><input type=number class="input-dark w-full px-4 py-2.5 text-sm"placeholder=0></div><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Cijena na rasprodaji</label><input type=number class="input-dark w-full px-4 py-2.5 text-sm"placeholder="Ostavi prazno ako nema"></div><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Zaliha</label><input type=number class="input-dark w-full px-4 py-2.5 text-sm"placeholder=0></div></div></div><div class="card-dark p-6"><div class="grid grid-cols-1 sm:grid-cols-2 gap-6"><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-2">Tagovi / Badge</label><div class="flex flex-wrap gap-2 mb-3"></div><input type=text placeholder="Dodaj tag i pritisni Enter"class="input-dark w-full px-4 py-2.5 text-sm"></div><div><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-2">Primarna kategorija</label><select class="input-dark w-full px-3 py-2.5 text-sm"></select><label class="flex items-center gap-2 mt-4 cursor-pointer"><input type=checkbox class="checkbox checkbox-warning checkbox-sm"><span class="text-sm text-aurum-text">Samo za članove</span></label></div></div></div><div class="card-dark p-6"><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-2">Opis proizvoda</label><textarea rows=5 class="input-dark w-full px-4 py-3 text-sm resize-none"placeholder="Opiši proizvod s detaljima, materijalima..."></textarea></div><div class="card-dark p-6"><label class="block text-xs text-aurum-muted uppercase tracking-widest mb-3">Slike (URL)</label><div class="flex gap-2 mb-4"><input type=url placeholder="https://... URL slike"class="input-dark flex-1 px-4 py-2.5 text-sm"><button class="btn-gold px-4 py-2.5 text-sm rounded">Dodaj</button></div><div class="grid grid-cols-3 gap-3"></div></div></div><div class=space-y-4><div class="card-dark p-4"><h3 class="text-xs text-aurum-muted uppercase tracking-widest mb-3">Preview</h3><div class="bg-aurum-dark rounded-lg overflow-hidden"><div class="aspect-square bg-aurum-muted flex items-center justify-center overflow-hidden"></div><div class=p-3><p class="text-aurum-text text-xs font-medium"></p><p class="text-aurum-muted text-xs"></p><div class="flex items-center gap-2 mt-1"><span class="text-aurum-gold font-bold text-sm">$</span></div></div></div></div><div class="card-dark p-4 space-y-3"><button class="w-full border border-aurum-border text-aurum-text py-2.5 rounded text-sm hover:border-aurum-gold transition-colors disabled:opacity-50"></button><button class="w-full btn-gold py-2.5 rounded text-sm disabled:opacity-50"></button></div><div class="card-dark p-4 text-xs text-aurum-muted space-y-2"><p>📦 Kategorija: <span class=text-aurum-text></span></p><p>👥 Samo članovi: <span class=text-aurum-text></span></p><p>🖼 Slike: <span class=text-aurum-text>'),SA=k('<span class="badge-exclusive flex items-center gap-1"><button class="hover:text-red-300 ml-1">×'),CA=k("<option>"),kA=k('<div class="relative group"><img alt class="w-full aspect-square object-cover rounded border border-aurum-border"><button class="absolute top-1 right-1 bg-red-600 text-white w-5 h-5 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity">×'),RA=k('<p class="text-aurum-muted text-xs">Nema slike'),PA=k('<span class="text-aurum-muted text-xs line-through">$');function xh(){const n=jh(),e=gn(),t=!!n.id;if(!ci())return e("/login"),null;const[r,s]=H(!1),[i,a]=H(!1),[l,u]=H(!1),[h,f]=H(!1),[p,w]=H(""),[x,S]=H({title:"",sku:"",price:"",salePrice:"",inventory:"",description:"",tags:[],primaryCat:"Accessories",images:[],membersOnly:!1});Ws(async()=>{if(t){Gt().length===0&&await Wn();const U=Gt().find(b=>b.id===n.id);U&&S({title:U.name||"",sku:U.sku||"",price:U.price||"",salePrice:U.salePrice||"",inventory:U.stock||"",description:U.description||"",tags:U.badge?[U.badge]:[],primaryCat:U.category||"Accessories",images:U.images||[],membersOnly:U.membersOnly||!1})}});async function $(){f(!0),w("");try{const U=C();t?await ts(Ht(dt,"products",n.id),U):await uo(kn(dt,"products"),{...U,createdAt:Wr()}),s(!0),await Wn(),setTimeout(()=>s(!1),2e3)}catch(U){w("Greška pri spremanju: "+U.message)}f(!1)}async function V(){f(!0),w("");try{const U={...C(),published:!0};t?await ts(Ht(dt,"products",n.id),U):await uo(kn(dt,"products"),{...U,createdAt:Wr()}),a(!0),await Wn(),setTimeout(()=>e("/admin"),1500)}catch(U){w("Greška pri objavi: "+U.message)}f(!1)}async function N(){if(confirm("Jesi li siguran/na da želiš obrisati ovaj proizvod?")){u(!0);try{await wE(Ht(dt,"products",n.id)),await Wn(),e("/admin")}catch(U){w("Greška pri brisanju: "+U.message)}u(!1)}}function C(){return{name:x().title,sku:x().sku,price:Number(x().price)||0,salePrice:x().salePrice?Number(x().salePrice):null,stock:Number(x().inventory)||0,description:x().description,badge:x().tags[0]||null,category:x().primaryCat,images:x().images,membersOnly:x().membersOnly,sizes:[],updatedAt:Wr()}}const[M,O]=H("");function z(){M().trim()&&(S({...x(),images:[...x().images,M().trim()]}),O(""))}return(()=>{var U=AA(),b=U.firstChild,y=b.firstChild,v=y.firstChild,T=v.nextSibling,E=T.nextSibling,I=b.nextSibling,m=I.firstChild,j=m.firstChild,re=m.nextSibling,we=re.firstChild,Ce=we.firstChild,De=Ce.firstChild,Fe=De.nextSibling,Le=Ce.nextSibling,ze=Le.firstChild,mt=ze.firstChild,Ke=mt.firstChild,Ae=Ke.nextSibling,bt=mt.nextSibling,st=bt.firstChild,et=st.nextSibling,Re=bt.nextSibling,Ye=Re.firstChild,it=Ye.nextSibling,$t=Re.nextSibling,Vt=$t.firstChild,Ot=Vt.nextSibling,ae=Le.nextSibling,Y=ae.firstChild,F=Y.firstChild,W=F.firstChild,te=W.nextSibling,X=te.nextSibling,G=F.nextSibling,de=G.firstChild,oe=de.nextSibling,Se=oe.nextSibling,ge=Se.firstChild,xe=ae.nextSibling,pe=xe.firstChild,$e=pe.nextSibling,Qe=xe.nextSibling,ot=Qe.firstChild,Me=ot.nextSibling,je=Me.firstChild,pt=je.nextSibling,Xe=Me.nextSibling,tt=we.nextSibling,K=tt.firstChild,se=K.firstChild,ne=se.nextSibling,ue=ne.firstChild,Ee=ue.nextSibling,Ve=Ee.firstChild,We=Ve.nextSibling,Oe=We.nextSibling,Lt=Oe.firstChild;Lt.firstChild;var Kt=K.nextSibling,Mt=Kt.firstChild,_n=Mt.nextSibling,Vn=Kt.nextSibling,Ut=Vn.firstChild,Uo=Ut.firstChild,Fo=Uo.nextSibling,cr=Ut.nextSibling,ui=cr.firstChild,hi=ui.nextSibling,us=cr.nextSibling,ur=us.firstChild,jo=ur.nextSibling;return _(y,R(_e,{href:"/admin",class:"flex items-center gap-2",get children(){return[yA(),vA()]}}),v),_(y,R(_e,{href:"/admin",class:"text-aurum-muted hover:text-aurum-gold text-xs",children:"Admin"}),T),_(E,t?"Uredi proizvod":"Novi proizvod"),_(b,R(_e,{href:"/admin",class:"text-xs text-aurum-muted hover:text-aurum-gold transition-colors",children:"← Nazad"}),null),_(j,t?"Uredi proizvod":"Dodaj novi proizvod"),Fe.$$input=ee=>S({...x(),title:ee.target.value}),Ae.$$input=ee=>S({...x(),sku:ee.target.value}),et.$$input=ee=>S({...x(),price:ee.target.value}),it.$$input=ee=>S({...x(),salePrice:ee.target.value}),Ot.$$input=ee=>S({...x(),inventory:ee.target.value}),_(te,R(ut,{get each(){return x().tags},children:ee=>(()=>{var gt=SA(),Qt=gt.firstChild;return _(gt,ee,Qt),Qt.$$click=()=>S({...x(),tags:x().tags.filter(Nn=>Nn!==ee)}),gt})()})),X.$$keydown=ee=>{ee.key==="Enter"&&ee.target.value.trim()&&(S({...x(),tags:[...x().tags,ee.target.value.trim()]}),ee.target.value="",ee.preventDefault())},oe.addEventListener("change",ee=>S({...x(),primaryCat:ee.target.value})),_(oe,()=>["Rings","Necklaces","Watches","Accessories","Art Objects"].map(ee=>(()=>{var gt=CA();return gt.value=ee,_(gt,ee),gt})())),ge.addEventListener("change",ee=>S({...x(),membersOnly:ee.target.checked})),$e.$$input=ee=>S({...x(),description:ee.target.value}),je.$$input=ee=>O(ee.target.value),pt.$$click=z,_(Xe,R(ut,{get each(){return x().images},children:(ee,gt)=>(()=>{var Qt=kA(),Nn=Qt.firstChild,hs=Nn.nextSibling;return Ze(Nn,"src",ee),hs.$$click=()=>S({...x(),images:x().images.filter((Bo,qo)=>qo!==gt())}),Qt})()})),_(Qe,R(Z,{get when(){return x().images.length===0},get children(){return bA()}}),null),_(tt,R(Z,{get when(){return p()},get children(){var ee=wA();return ee.firstChild,_(ee,p,null),ee}}),K),_(tt,R(Z,{get when(){return r()},get children(){return xA()}}),K),_(ue,R(Z,{get when(){return x().images[0]},get fallback(){return RA()},get children(){var ee=EA();return q(()=>Ze(ee,"src",x().images[0])),ee}})),_(Ee,R(Z,{get when(){return x().tags.length>0},get children(){var ee=TA();return _(ee,()=>x().tags[0]),ee}}),Ve),_(Ve,()=>x().title||"Naziv proizvoda"),_(We,()=>x().sku),_(Lt,()=>x().salePrice||x().price||"0",null),_(Oe,(()=>{var ee=rt(()=>!!x().salePrice);return()=>ee()&&(()=>{var gt=PA();return gt.firstChild,_(gt,()=>x().price,null),gt})()})(),null),Mt.$$click=$,_(Mt,()=>h()?"Sprema...":"💾 Spremi draft"),_n.$$click=V,_(_n,(()=>{var ee=rt(()=>!!i());return()=>ee()?"✓ Objavljeno!":h()?"Objavljuje...":"🚀 Objavi"})()),_(Kt,R(Z,{when:t,get children(){var ee=IA();return ee.$$click=N,_(ee,()=>l()?"Briše...":"🗑 Obriši proizvod"),q(()=>ee.disabled=l()),ee}}),null),_(Fo,()=>x().primaryCat),_(hi,()=>x().membersOnly?"Da":"Ne"),_(jo,()=>x().images.length),q(ee=>{var gt=h(),Qt=h();return gt!==ee.e&&(Mt.disabled=ee.e=gt),Qt!==ee.t&&(_n.disabled=ee.t=Qt),ee},{e:void 0,t:void 0}),q(()=>Fe.value=x().title),q(()=>Ae.value=x().sku),q(()=>et.value=x().price),q(()=>it.value=x().salePrice),q(()=>Ot.value=x().inventory),q(()=>oe.value=x().primaryCat),q(()=>ge.checked=x().membersOnly),q(()=>$e.value=x().description),q(()=>je.value=M()),U})()}nn(["input","keydown","click"]);function $A(){return R(eg,{get children(){return[R(on,{path:"/",component:BE}),R(on,{path:"/catalog",component:wT}),R(on,{path:"/product/:id",component:qT}),R(on,{path:"/login",component:sI}),R(on,{path:"/checkout",component:vh}),R(on,{path:"/cart",component:vh}),R(on,{path:"/profile",component:zI}),R(on,{path:"/admin",component:_A}),R(on,{path:"/admin/products/new",component:xh}),R(on,{path:"/admin/products/edit/:id",component:xh})]}})}fp(()=>R($A,{}),document.getElementById("root"));
