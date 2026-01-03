const Au=()=>{};var Ao={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},vu=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],c=n[e++],u=n[e++],f=((i&7)<<18|(o&63)<<12|(c&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(f>>10)),t[r++]=String.fromCharCode(56320+(f&1023))}else{const o=n[e++],c=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|c&63)}}return t.join("")},La={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],c=i+1<n.length,u=c?n[i+1]:0,f=i+2<n.length,d=f?n[i+2]:0,T=o>>2,w=(o&3)<<4|u>>4;let R=(u&15)<<2|d>>6,P=d&63;f||(P=64,c||(R=64)),r.push(e[T],e[w],e[R],e[P])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Ma(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):vu(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],u=i<n.length?e[n.charAt(i)]:0;++i;const d=i<n.length?e[n.charAt(i)]:64;++i;const w=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||u==null||d==null||w==null)throw new Ru;const R=o<<2|u>>4;if(r.push(R),d!==64){const P=u<<4&240|d>>2;if(r.push(P),w!==64){const N=d<<6&192|w;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ru extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bu=function(n){const t=Ma(n);return La.encodeByteArray(t,!0)},ir=function(n){return bu(n).replace(/\./g,"")},Su=function(n){try{return La.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Cu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Pu=()=>Cu().__FIREBASE_DEFAULTS__,Du=()=>{if(typeof process>"u"||typeof Ao>"u")return;const n=Ao.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Vu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Su(n[1]);return t&&JSON.parse(t)},Os=()=>{try{return Au()||Pu()||Du()||Vu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Nu=n=>Os()?.emulatorHosts?.[n],Fa=n=>{const t=Nu(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Ua=()=>Os()?.config;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function vn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ba(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function ja(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[ir(JSON.stringify(e)),ir(JSON.stringify(c)),""].join(".")}const un={};function Ou(){const n={prod:[],emulator:[]};for(const t of Object.keys(un))un[t]?n.emulator.push(t):n.prod.push(t);return n}function xu(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let vo=!1;function $a(n,t){if(typeof window>"u"||typeof document>"u"||!vn(window.location.host)||un[n]===t||un[n]||vo)return;un[n]=t;function e(R){return`__firebase__banner__${R}`}const r="__firebase__banner",o=Ou().prod.length>0;function c(){const R=document.getElementById(r);R&&R.remove()}function u(R){R.style.display="flex",R.style.background="#7faaf0",R.style.position="fixed",R.style.bottom="5px",R.style.left="5px",R.style.padding=".5em",R.style.borderRadius="5px",R.style.alignItems="center"}function f(R,P){R.setAttribute("width","24"),R.setAttribute("id",P),R.setAttribute("height","24"),R.setAttribute("viewBox","0 0 24 24"),R.setAttribute("fill","none"),R.style.marginLeft="-6px"}function d(){const R=document.createElement("span");return R.style.cursor="pointer",R.style.marginLeft="16px",R.style.fontSize="24px",R.innerHTML=" &times;",R.onclick=()=>{vo=!0,c()},R}function T(R,P){R.setAttribute("id",P),R.innerText="Learn more",R.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",R.setAttribute("target","__blank"),R.style.paddingLeft="5px",R.style.textDecoration="underline"}function w(){const R=xu(r),P=e("text"),N=document.getElementById(P)||document.createElement("span"),O=e("learnmore"),D=document.getElementById(O)||document.createElement("a"),$=e("preprendIcon"),j=document.getElementById($)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(R.created){const F=R.element;u(F),T(D,O);const z=d();f(j,$),F.append(j,N,D,z),document.body.appendChild(F)}o?(N.innerText="Preview backend disconnected.",j.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(j.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Lu(){const n=Os()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Fu(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Uu(){return!Lu()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function qa(){try{return typeof indexedDB=="object"}catch{return!1}}function za(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{t(i.error?.message||"")}}catch(e){t(e)}})}function Bu(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju="FirebaseError";class Gt extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=ju,Object.setPrototypeOf(this,Gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Tr.prototype.create)}}class Tr{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],c=o?$u(o,r):"Error",u=`${this.serviceName}: ${c} (${i}).`;return new Gt(i,u,r)}}function $u(n,t){return n.replace(qu,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const qu=/\{\$([^}]+)}/g;function _n(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],c=t[i];if(Ro(o)&&Ro(c)){if(!_n(o,c))return!1}else if(o!==c)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function Ro(n){return n!==null&&typeof n=="object"}/**
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
 */const zu=1e3,Hu=2,Gu=14400*1e3,Ku=.5;function bo(n,t=zu,e=Hu){const r=t*Math.pow(e,n),i=Math.round(Ku*r*(Math.random()-.5)*2);return Math.min(Gu,r+i)}/**
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
 */function Pt(n){return n&&n._delegate?n._delegate:n}class Ft{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const de="[DEFAULT]";/**
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
 */class Wu{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new ku;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t?.identifier),r=t?.optional??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Xu(t))try{this.getOrInitializeService({instanceIdentifier:de})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=de){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=de){return this.instances.has(t)}getOptions(t=de){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,c]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&c.resolve(i)}return i}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),i=this.onInitCallbacks.get(r)??new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Qu(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=de){return this.component?this.component.multipleInstances?t:de:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qu(n){return n===de?void 0:n}function Xu(n){return n.instantiationMode==="EAGER"}/**
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
 */class Ju{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Wu(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var B;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(B||(B={}));const Yu={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},Zu=B.INFO,th={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},eh=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=th[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class xs{constructor(t){this.name=t,this._logLevel=Zu,this._logHandler=eh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in B))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Yu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...t),this._logHandler(this,B.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...t),this._logHandler(this,B.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,B.INFO,...t),this._logHandler(this,B.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,B.WARN,...t),this._logHandler(this,B.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...t),this._logHandler(this,B.ERROR,...t)}}const nh=(n,t)=>t.some(e=>n instanceof e);let So,Co;function rh(){return So||(So=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sh(){return Co||(Co=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ha=new WeakMap,ms=new WeakMap,Ga=new WeakMap,ns=new WeakMap,Ms=new WeakMap;function ih(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",c)},o=()=>{e(te(n.result)),i()},c=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",c)});return t.then(e=>{e instanceof IDBCursor&&Ha.set(e,n)}).catch(()=>{}),Ms.set(t,n),t}function oh(n){if(ms.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",c),n.removeEventListener("abort",c)},o=()=>{e(),i()},c=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",c),n.addEventListener("abort",c)});ms.set(n,t)}let gs={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return ms.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Ga.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return te(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function ah(n){gs=n(gs)}function ch(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(rs(this),t,...e);return Ga.set(r,t.sort?t.sort():[t]),te(r)}:sh().includes(n)?function(...t){return n.apply(rs(this),t),te(Ha.get(this))}:function(...t){return te(n.apply(rs(this),t))}}function lh(n){return typeof n=="function"?ch(n):(n instanceof IDBTransaction&&oh(n),nh(n,rh())?new Proxy(n,gs):n)}function te(n){if(n instanceof IDBRequest)return ih(n);if(ns.has(n))return ns.get(n);const t=lh(n);return t!==n&&(ns.set(n,t),Ms.set(t,n)),t}const rs=n=>Ms.get(n);function Ka(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const c=indexedDB.open(n,t),u=te(c);return r&&c.addEventListener("upgradeneeded",f=>{r(te(c.result),f.oldVersion,f.newVersion,te(c.transaction),f)}),e&&c.addEventListener("blocked",f=>e(f.oldVersion,f.newVersion,f)),u.then(f=>{o&&f.addEventListener("close",()=>o()),i&&f.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const uh=["get","getKey","getAll","getAllKeys","count"],hh=["put","add","delete","clear"],ss=new Map;function Po(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ss.get(t))return ss.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=hh.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||uh.includes(e)))return;const o=async function(c,...u){const f=this.transaction(c,i?"readwrite":"readonly");let d=f.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[e](...u),i&&f.done]))[0]};return ss.set(t,o),o}ah(n=>({...n,get:(t,e,r)=>Po(t,e)||n.get(t,e,r),has:(t,e)=>!!Po(t,e)||n.has(t,e)}));/**
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
 */class fh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(dh(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function dh(n){return n.getComponent()?.type==="VERSION"}const _s="@firebase/app",Do="0.14.6";/**
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
 */const zt=new xs("@firebase/app"),ph="@firebase/app-compat",mh="@firebase/analytics-compat",gh="@firebase/analytics",_h="@firebase/app-check-compat",yh="@firebase/app-check",Eh="@firebase/auth",Th="@firebase/auth-compat",wh="@firebase/database",Ih="@firebase/data-connect",Ah="@firebase/database-compat",vh="@firebase/functions",Rh="@firebase/functions-compat",bh="@firebase/installations",Sh="@firebase/installations-compat",Ch="@firebase/messaging",Ph="@firebase/messaging-compat",Dh="@firebase/performance",Vh="@firebase/performance-compat",Nh="@firebase/remote-config",kh="@firebase/remote-config-compat",Oh="@firebase/storage",xh="@firebase/storage-compat",Mh="@firebase/firestore",Lh="@firebase/ai",Fh="@firebase/firestore-compat",Uh="firebase",Bh="12.6.0";/**
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
 */const ys="[DEFAULT]",jh={[_s]:"fire-core",[ph]:"fire-core-compat",[gh]:"fire-analytics",[mh]:"fire-analytics-compat",[yh]:"fire-app-check",[_h]:"fire-app-check-compat",[Eh]:"fire-auth",[Th]:"fire-auth-compat",[wh]:"fire-rtdb",[Ih]:"fire-data-connect",[Ah]:"fire-rtdb-compat",[vh]:"fire-fn",[Rh]:"fire-fn-compat",[bh]:"fire-iid",[Sh]:"fire-iid-compat",[Ch]:"fire-fcm",[Ph]:"fire-fcm-compat",[Dh]:"fire-perf",[Vh]:"fire-perf-compat",[Nh]:"fire-rc",[kh]:"fire-rc-compat",[Oh]:"fire-gcs",[xh]:"fire-gcs-compat",[Mh]:"fire-fst",[Fh]:"fire-fst-compat",[Lh]:"fire-vertex","fire-js":"fire-js",[Uh]:"fire-js-all"};/**
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
 */const or=new Map,$h=new Map,Es=new Map;function Vo(n,t){try{n.container.addComponent(t)}catch(e){zt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Ht(n){const t=n.name;if(Es.has(t))return zt.debug(`There were multiple attempts to register component ${t}.`),!1;Es.set(t,n);for(const e of or.values())Vo(e,n);for(const e of $h.values())Vo(e,n);return!0}function je(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Wa(n){return n==null?!1:n.settings!==void 0}/**
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
 */const qh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ee=new Tr("app","Firebase",qh);/**
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
 */class zh{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ft("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ee.create("app-deleted",{appName:this._name})}}/**
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
 */const Qa=Bh;function Xa(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:ys,automaticDataCollectionEnabled:!0,...t},i=r.name;if(typeof i!="string"||!i)throw ee.create("bad-app-name",{appName:String(i)});if(e||(e=Ua()),!e)throw ee.create("no-options");const o=or.get(i);if(o){if(_n(e,o.options)&&_n(r,o.config))return o;throw ee.create("duplicate-app",{appName:i})}const c=new Ju(i);for(const f of Es.values())c.addComponent(f);const u=new zh(e,r,c);return or.set(i,u),u}function Ls(n=ys){const t=or.get(n);if(!t&&n===ys&&Ua())return Xa();if(!t)throw ee.create("no-app",{appName:n});return t}function Ct(n,t,e){let r=jh[n]??n;e&&(r+=`-${e}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const c=[`Unable to register library "${r}" with version "${t}":`];i&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),zt.warn(c.join(" "));return}Ht(new Ft(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const Hh="firebase-heartbeat-database",Gh=1,yn="firebase-heartbeat-store";let is=null;function Ja(){return is||(is=Ka(Hh,Gh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(yn)}catch(e){console.warn(e)}}}}).catch(n=>{throw ee.create("idb-open",{originalErrorMessage:n.message})})),is}async function Kh(n){try{const e=(await Ja()).transaction(yn),r=await e.objectStore(yn).get(Ya(n));return await e.done,r}catch(t){if(t instanceof Gt)zt.warn(t.message);else{const e=ee.create("idb-get",{originalErrorMessage:t?.message});zt.warn(e.message)}}}async function No(n,t){try{const r=(await Ja()).transaction(yn,"readwrite");await r.objectStore(yn).put(t,Ya(n)),await r.done}catch(e){if(e instanceof Gt)zt.warn(e.message);else{const r=ee.create("idb-set",{originalErrorMessage:e?.message});zt.warn(r.message)}}}function Ya(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Wh=1024,Qh=30;class Xh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Yh(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ko();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:e}),this._heartbeatsCache.heartbeats.length>Qh){const i=Zh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){zt.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ko(),{heartbeatsToSend:e,unsentEntries:r}=Jh(this._heartbeatsCache.heartbeats),i=ir(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return zt.warn(t),""}}}function ko(){return new Date().toISOString().substring(0,10)}function Jh(n,t=Wh){const e=[];let r=n.slice();for(const i of n){const o=e.find(c=>c.agent===i.agent);if(o){if(o.dates.push(i.date),Oo(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Oo(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Yh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qa()?za().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Kh(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return No(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return No(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Oo(n){return ir(JSON.stringify({version:2,heartbeats:n})).length}function Zh(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
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
 */function tf(n){Ht(new Ft("platform-logger",t=>new fh(t),"PRIVATE")),Ht(new Ft("heartbeat",t=>new Xh(t),"PRIVATE")),Ct(_s,Do,n),Ct(_s,Do,"esm2020"),Ct("fire-js","")}tf("");var ef="firebase",nf="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ct(ef,nf,"app");const Za="@firebase/installations",Fs="0.6.19";/**
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
 */const tc=1e4,ec=`w:${Fs}`,nc="FIS_v2",rf="https://firebaseinstallations.googleapis.com/v1",sf=3600*1e3,of="installations",af="Installations";/**
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
 */const cf={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ee=new Tr(of,af,cf);function rc(n){return n instanceof Gt&&n.code.includes("request-failed")}/**
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
 */function sc({projectId:n}){return`${rf}/projects/${n}/installations`}function ic(n){return{token:n.token,requestStatus:2,expiresIn:uf(n.expiresIn),creationTime:Date.now()}}async function oc(n,t){const r=(await t.json()).error;return Ee.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ac({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function lf(n,{refreshToken:t}){const e=ac(n);return e.append("Authorization",hf(t)),e}async function cc(n){const t=await n();return t.status>=500&&t.status<600?n():t}function uf(n){return Number(n.replace("s","000"))}function hf(n){return`${nc} ${n}`}/**
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
 */async function ff({appConfig:n,heartbeatServiceProvider:t},{fid:e}){const r=sc(n),i=ac(n),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const c={fid:e,authVersion:nc,appId:n.appId,sdkVersion:ec},u={method:"POST",headers:i,body:JSON.stringify(c)},f=await cc(()=>fetch(r,u));if(f.ok){const d=await f.json();return{fid:d.fid||e,registrationStatus:2,refreshToken:d.refreshToken,authToken:ic(d.authToken)}}else throw await oc("Create Installation",f)}/**
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
 */function lc(n){return new Promise(t=>{setTimeout(t,n)})}/**
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
 */function df(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const pf=/^[cdef][\w-]{21}$/,Ts="";function mf(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const e=gf(n);return pf.test(e)?e:Ts}catch{return Ts}}function gf(n){return df(n).substr(0,22)}/**
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
 */function wr(n){return`${n.appName}!${n.appId}`}/**
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
 */const uc=new Map;function hc(n,t){const e=wr(n);fc(e,t),_f(e,t)}function fc(n,t){const e=uc.get(n);if(e)for(const r of e)r(t)}function _f(n,t){const e=yf();e&&e.postMessage({key:n,fid:t}),Ef()}let pe=null;function yf(){return!pe&&"BroadcastChannel"in self&&(pe=new BroadcastChannel("[Firebase] FID Change"),pe.onmessage=n=>{fc(n.data.key,n.data.fid)}),pe}function Ef(){uc.size===0&&pe&&(pe.close(),pe=null)}/**
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
 */const Tf="firebase-installations-database",wf=1,Te="firebase-installations-store";let os=null;function Us(){return os||(os=Ka(Tf,wf,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(Te)}}})),os}async function ar(n,t){const e=wr(n),i=(await Us()).transaction(Te,"readwrite"),o=i.objectStore(Te),c=await o.get(e);return await o.put(t,e),await i.done,(!c||c.fid!==t.fid)&&hc(n,t.fid),t}async function dc(n){const t=wr(n),r=(await Us()).transaction(Te,"readwrite");await r.objectStore(Te).delete(t),await r.done}async function Ir(n,t){const e=wr(n),i=(await Us()).transaction(Te,"readwrite"),o=i.objectStore(Te),c=await o.get(e),u=t(c);return u===void 0?await o.delete(e):await o.put(u,e),await i.done,u&&(!c||c.fid!==u.fid)&&hc(n,u.fid),u}/**
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
 */async function Bs(n){let t;const e=await Ir(n.appConfig,r=>{const i=If(r),o=Af(n,i);return t=o.registrationPromise,o.installationEntry});return e.fid===Ts?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function If(n){const t=n||{fid:mf(),registrationStatus:0};return pc(t)}function Af(n,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ee.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=vf(n,e);return{installationEntry:e,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Rf(n)}:{installationEntry:t}}async function vf(n,t){try{const e=await ff(n,t);return ar(n.appConfig,e)}catch(e){throw rc(e)&&e.customData.serverCode===409?await dc(n.appConfig):await ar(n.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function Rf(n){let t=await xo(n.appConfig);for(;t.registrationStatus===1;)await lc(100),t=await xo(n.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:r}=await Bs(n);return r||e}return t}function xo(n){return Ir(n,t=>{if(!t)throw Ee.create("installation-not-found");return pc(t)})}function pc(n){return bf(n)?{fid:n.fid,registrationStatus:0}:n}function bf(n){return n.registrationStatus===1&&n.registrationTime+tc<Date.now()}/**
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
 */async function Sf({appConfig:n,heartbeatServiceProvider:t},e){const r=Cf(n,e),i=lf(n,e),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const c={installation:{sdkVersion:ec,appId:n.appId}},u={method:"POST",headers:i,body:JSON.stringify(c)},f=await cc(()=>fetch(r,u));if(f.ok){const d=await f.json();return ic(d)}else throw await oc("Generate Auth Token",f)}function Cf(n,{fid:t}){return`${sc(n)}/${t}/authTokens:generate`}/**
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
 */async function js(n,t=!1){let e;const r=await Ir(n.appConfig,o=>{if(!mc(o))throw Ee.create("not-registered");const c=o.authToken;if(!t&&Vf(c))return o;if(c.requestStatus===1)return e=Pf(n,t),o;{if(!navigator.onLine)throw Ee.create("app-offline");const u=kf(o);return e=Df(n,u),u}});return e?await e:r.authToken}async function Pf(n,t){let e=await Mo(n.appConfig);for(;e.authToken.requestStatus===1;)await lc(100),e=await Mo(n.appConfig);const r=e.authToken;return r.requestStatus===0?js(n,t):r}function Mo(n){return Ir(n,t=>{if(!mc(t))throw Ee.create("not-registered");const e=t.authToken;return Of(e)?{...t,authToken:{requestStatus:0}}:t})}async function Df(n,t){try{const e=await Sf(n,t),r={...t,authToken:e};return await ar(n.appConfig,r),e}catch(e){if(rc(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await dc(n.appConfig);else{const r={...t,authToken:{requestStatus:0}};await ar(n.appConfig,r)}throw e}}function mc(n){return n!==void 0&&n.registrationStatus===2}function Vf(n){return n.requestStatus===2&&!Nf(n)}function Nf(n){const t=Date.now();return t<n.creationTime||n.creationTime+n.expiresIn<t+sf}function kf(n){const t={requestStatus:1,requestTime:Date.now()};return{...n,authToken:t}}function Of(n){return n.requestStatus===1&&n.requestTime+tc<Date.now()}/**
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
 */async function xf(n){const t=n,{installationEntry:e,registrationPromise:r}=await Bs(t);return r?r.catch(console.error):js(t).catch(console.error),e.fid}/**
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
 */async function Mf(n,t=!1){const e=n;return await Lf(e),(await js(e,t)).token}async function Lf(n){const{registrationPromise:t}=await Bs(n);t&&await t}/**
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
 */function Ff(n){if(!n||!n.options)throw as("App Configuration");if(!n.name)throw as("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!n.options[e])throw as(e);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function as(n){return Ee.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc="installations",Uf="installations-internal",Bf=n=>{const t=n.getProvider("app").getImmediate(),e=Ff(t),r=je(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},jf=n=>{const t=n.getProvider("app").getImmediate(),e=je(t,gc).getImmediate();return{getId:()=>xf(e),getToken:i=>Mf(e,i)}};function $f(){Ht(new Ft(gc,Bf,"PUBLIC")),Ht(new Ft(Uf,jf,"PRIVATE"))}$f();Ct(Za,Fs);Ct(Za,Fs,"esm2020");/**
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
 */const cr="analytics",qf="firebase_id",zf="origin",Hf=60*1e3,Gf="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",$s="https://www.googletagmanager.com/gtag/js";/**
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
 */const wt=new xs("@firebase/analytics");/**
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
 */const Kf={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},St=new Tr("analytics","Analytics",Kf);/**
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
 */function Wf(n){if(!n.startsWith($s)){const t=St.create("invalid-gtag-resource",{gtagURL:n});return wt.warn(t.message),""}return n}function _c(n){return Promise.all(n.map(t=>t.catch(e=>e)))}function Qf(n,t){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy(n,t)),e}function Xf(n,t){const e=Qf("firebase-js-sdk-policy",{createScriptURL:Wf}),r=document.createElement("script"),i=`${$s}?l=${n}&id=${t}`;r.src=e?e?.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Jf(n){let t=[];return Array.isArray(window[n])?t=window[n]:window[n]=t,t}async function Yf(n,t,e,r,i,o){const c=r[i];try{if(c)await t[c];else{const f=(await _c(e)).find(d=>d.measurementId===i);f&&await t[f.appId]}}catch(u){wt.error(u)}n("config",i,o)}async function Zf(n,t,e,r,i){try{let o=[];if(i&&i.send_to){let c=i.send_to;Array.isArray(c)||(c=[c]);const u=await _c(e);for(const f of c){const d=u.find(w=>w.measurementId===f),T=d&&t[d.appId];if(T)o.push(T);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),n("event",r,i||{})}catch(o){wt.error(o)}}function td(n,t,e,r){async function i(o,...c){try{if(o==="event"){const[u,f]=c;await Zf(n,t,e,u,f)}else if(o==="config"){const[u,f]=c;await Yf(n,t,e,r,u,f)}else if(o==="consent"){const[u,f]=c;n("consent",u,f)}else if(o==="get"){const[u,f,d]=c;n("get",u,f,d)}else if(o==="set"){const[u]=c;n("set",u)}else n(o,...c)}catch(u){wt.error(u)}}return i}function ed(n,t,e,r,i){let o=function(...c){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=td(o,n,t,e),{gtagCore:o,wrappedGtag:window[i]}}function nd(n){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes($s)&&e.src.includes(n))return e;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd=30,sd=1e3;class id{constructor(t={},e=sd){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const yc=new id;function od(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function ad(n){const{appId:t,apiKey:e}=n,r={method:"GET",headers:od(e)},i=Gf.replace("{app-id}",t),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let c="";try{const u=await o.json();u.error?.message&&(c=u.error.message)}catch{}throw St.create("config-fetch-failed",{httpStatus:o.status,responseMessage:c})}return o.json()}async function cd(n,t=yc,e){const{appId:r,apiKey:i,measurementId:o}=n.options;if(!r)throw St.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw St.create("no-api-key")}const c=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},u=new hd;return setTimeout(async()=>{u.abort()},Hf),Ec({appId:r,apiKey:i,measurementId:o},c,u,t)}async function Ec(n,{throttleEndTimeMillis:t,backoffCount:e},r,i=yc){const{appId:o,measurementId:c}=n;try{await ld(r,t)}catch(u){if(c)return wt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u?.message}]`),{appId:o,measurementId:c};throw u}try{const u=await ad(n);return i.deleteThrottleMetadata(o),u}catch(u){const f=u;if(!ud(f)){if(i.deleteThrottleMetadata(o),c)return wt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${f?.message}]`),{appId:o,measurementId:c};throw u}const d=Number(f?.customData?.httpStatus)===503?bo(e,i.intervalMillis,rd):bo(e,i.intervalMillis),T={throttleEndTimeMillis:Date.now()+d,backoffCount:e+1};return i.setThrottleMetadata(o,T),wt.debug(`Calling attemptFetch again in ${d} millis`),Ec(n,T,r,i)}}function ld(n,t){return new Promise((e,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(e,i);n.addEventListener(()=>{clearTimeout(o),r(St.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function ud(n){if(!(n instanceof Gt)||!n.customData)return!1;const t=Number(n.customData.httpStatus);return t===429||t===500||t===503||t===504}class hd{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function fd(n,t,e,r,i){if(i&&i.global){n("event",e,r);return}else{const o=await t,c={...r,send_to:o};n("event",e,c)}}async function dd(n,t,e,r){if(r&&r.global){const i={};for(const o of Object.keys(e))i[`user_properties.${o}`]=e[o];return n("set",i),Promise.resolve()}else{const i=await t;n("config",i,{update:!0,user_properties:e})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pd(){if(qa())try{await za()}catch(n){return wt.warn(St.create("indexeddb-unavailable",{errorInfo:n?.toString()}).message),!1}else return wt.warn(St.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function md(n,t,e,r,i,o,c){const u=cd(n);u.then(R=>{e[R.measurementId]=R.appId,n.options.measurementId&&R.measurementId!==n.options.measurementId&&wt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${R.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(R=>wt.error(R)),t.push(u);const f=pd().then(R=>{if(R)return r.getId()}),[d,T]=await Promise.all([u,f]);nd(o)||Xf(o,d.measurementId),i("js",new Date);const w=c?.config??{};return w[zf]="firebase",w.update=!0,T!=null&&(w[qf]=T),i("config",d.measurementId,w),d.measurementId}/**
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
 */class gd{constructor(t){this.app=t}_delete(){return delete ke[this.app.options.appId],Promise.resolve()}}let ke={},Lo=[];const Fo={};let cs="dataLayer",_d="gtag",Uo,qs,Bo=!1;function yd(){const n=[];if(Fu()&&n.push("This is a browser extension environment."),Bu()||n.push("Cookies are not available."),n.length>0){const t=n.map((r,i)=>`(${i+1}) ${r}`).join(" "),e=St.create("invalid-analytics-context",{errorInfo:t});wt.warn(e.message)}}function Ed(n,t,e){yd();const r=n.options.appId;if(!r)throw St.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)wt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw St.create("no-api-key");if(ke[r]!=null)throw St.create("already-exists",{id:r});if(!Bo){Jf(cs);const{wrappedGtag:o,gtagCore:c}=ed(ke,Lo,Fo,cs,_d);qs=o,Uo=c,Bo=!0}return ke[r]=md(n,Lo,Fo,t,Uo,cs,e),new gd(n)}function Td(n=Ls()){n=Pt(n);const t=je(n,cr);return t.isInitialized()?t.getImmediate():wd(n)}function wd(n,t={}){const e=je(n,cr);if(e.isInitialized()){const i=e.getImmediate();if(_n(t,e.getOptions()))return i;throw St.create("already-initialized")}return e.initialize({options:t})}function Id(n,t,e){n=Pt(n),dd(qs,ke[n.app.options.appId],t,e).catch(r=>wt.error(r))}function Ad(n,t,e,r){n=Pt(n),fd(qs,ke[n.app.options.appId],t,e,r).catch(i=>wt.error(i))}const jo="@firebase/analytics",$o="0.10.19";function vd(){Ht(new Ft(cr,(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return Ed(r,i,e)},"PUBLIC")),Ht(new Ft("analytics-internal",n,"PRIVATE")),Ct(jo,$o),Ct(jo,$o,"esm2020");function n(t){try{const e=t.getProvider(cr).getImmediate();return{logEvent:(r,i,o)=>Ad(e,r,i,o),setUserProperties:(r,i)=>Id(e,r,i)}}catch(e){throw St.create("interop-component-reg-failed",{reason:e})}}}vd();var qo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zs;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(y,p){function g(){}g.prototype=p.prototype,y.F=p.prototype,y.prototype=new g,y.prototype.constructor=y,y.D=function(E,_,A){for(var m=Array(arguments.length-2),It=2;It<arguments.length;It++)m[It-2]=arguments[It];return p.prototype[_].apply(E,m)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(y,p,g){g||(g=0);const E=Array(16);if(typeof p=="string")for(var _=0;_<16;++_)E[_]=p.charCodeAt(g++)|p.charCodeAt(g++)<<8|p.charCodeAt(g++)<<16|p.charCodeAt(g++)<<24;else for(_=0;_<16;++_)E[_]=p[g++]|p[g++]<<8|p[g++]<<16|p[g++]<<24;p=y.g[0],g=y.g[1],_=y.g[2];let A=y.g[3],m;m=p+(A^g&(_^A))+E[0]+3614090360&4294967295,p=g+(m<<7&4294967295|m>>>25),m=A+(_^p&(g^_))+E[1]+3905402710&4294967295,A=p+(m<<12&4294967295|m>>>20),m=_+(g^A&(p^g))+E[2]+606105819&4294967295,_=A+(m<<17&4294967295|m>>>15),m=g+(p^_&(A^p))+E[3]+3250441966&4294967295,g=_+(m<<22&4294967295|m>>>10),m=p+(A^g&(_^A))+E[4]+4118548399&4294967295,p=g+(m<<7&4294967295|m>>>25),m=A+(_^p&(g^_))+E[5]+1200080426&4294967295,A=p+(m<<12&4294967295|m>>>20),m=_+(g^A&(p^g))+E[6]+2821735955&4294967295,_=A+(m<<17&4294967295|m>>>15),m=g+(p^_&(A^p))+E[7]+4249261313&4294967295,g=_+(m<<22&4294967295|m>>>10),m=p+(A^g&(_^A))+E[8]+1770035416&4294967295,p=g+(m<<7&4294967295|m>>>25),m=A+(_^p&(g^_))+E[9]+2336552879&4294967295,A=p+(m<<12&4294967295|m>>>20),m=_+(g^A&(p^g))+E[10]+4294925233&4294967295,_=A+(m<<17&4294967295|m>>>15),m=g+(p^_&(A^p))+E[11]+2304563134&4294967295,g=_+(m<<22&4294967295|m>>>10),m=p+(A^g&(_^A))+E[12]+1804603682&4294967295,p=g+(m<<7&4294967295|m>>>25),m=A+(_^p&(g^_))+E[13]+4254626195&4294967295,A=p+(m<<12&4294967295|m>>>20),m=_+(g^A&(p^g))+E[14]+2792965006&4294967295,_=A+(m<<17&4294967295|m>>>15),m=g+(p^_&(A^p))+E[15]+1236535329&4294967295,g=_+(m<<22&4294967295|m>>>10),m=p+(_^A&(g^_))+E[1]+4129170786&4294967295,p=g+(m<<5&4294967295|m>>>27),m=A+(g^_&(p^g))+E[6]+3225465664&4294967295,A=p+(m<<9&4294967295|m>>>23),m=_+(p^g&(A^p))+E[11]+643717713&4294967295,_=A+(m<<14&4294967295|m>>>18),m=g+(A^p&(_^A))+E[0]+3921069994&4294967295,g=_+(m<<20&4294967295|m>>>12),m=p+(_^A&(g^_))+E[5]+3593408605&4294967295,p=g+(m<<5&4294967295|m>>>27),m=A+(g^_&(p^g))+E[10]+38016083&4294967295,A=p+(m<<9&4294967295|m>>>23),m=_+(p^g&(A^p))+E[15]+3634488961&4294967295,_=A+(m<<14&4294967295|m>>>18),m=g+(A^p&(_^A))+E[4]+3889429448&4294967295,g=_+(m<<20&4294967295|m>>>12),m=p+(_^A&(g^_))+E[9]+568446438&4294967295,p=g+(m<<5&4294967295|m>>>27),m=A+(g^_&(p^g))+E[14]+3275163606&4294967295,A=p+(m<<9&4294967295|m>>>23),m=_+(p^g&(A^p))+E[3]+4107603335&4294967295,_=A+(m<<14&4294967295|m>>>18),m=g+(A^p&(_^A))+E[8]+1163531501&4294967295,g=_+(m<<20&4294967295|m>>>12),m=p+(_^A&(g^_))+E[13]+2850285829&4294967295,p=g+(m<<5&4294967295|m>>>27),m=A+(g^_&(p^g))+E[2]+4243563512&4294967295,A=p+(m<<9&4294967295|m>>>23),m=_+(p^g&(A^p))+E[7]+1735328473&4294967295,_=A+(m<<14&4294967295|m>>>18),m=g+(A^p&(_^A))+E[12]+2368359562&4294967295,g=_+(m<<20&4294967295|m>>>12),m=p+(g^_^A)+E[5]+4294588738&4294967295,p=g+(m<<4&4294967295|m>>>28),m=A+(p^g^_)+E[8]+2272392833&4294967295,A=p+(m<<11&4294967295|m>>>21),m=_+(A^p^g)+E[11]+1839030562&4294967295,_=A+(m<<16&4294967295|m>>>16),m=g+(_^A^p)+E[14]+4259657740&4294967295,g=_+(m<<23&4294967295|m>>>9),m=p+(g^_^A)+E[1]+2763975236&4294967295,p=g+(m<<4&4294967295|m>>>28),m=A+(p^g^_)+E[4]+1272893353&4294967295,A=p+(m<<11&4294967295|m>>>21),m=_+(A^p^g)+E[7]+4139469664&4294967295,_=A+(m<<16&4294967295|m>>>16),m=g+(_^A^p)+E[10]+3200236656&4294967295,g=_+(m<<23&4294967295|m>>>9),m=p+(g^_^A)+E[13]+681279174&4294967295,p=g+(m<<4&4294967295|m>>>28),m=A+(p^g^_)+E[0]+3936430074&4294967295,A=p+(m<<11&4294967295|m>>>21),m=_+(A^p^g)+E[3]+3572445317&4294967295,_=A+(m<<16&4294967295|m>>>16),m=g+(_^A^p)+E[6]+76029189&4294967295,g=_+(m<<23&4294967295|m>>>9),m=p+(g^_^A)+E[9]+3654602809&4294967295,p=g+(m<<4&4294967295|m>>>28),m=A+(p^g^_)+E[12]+3873151461&4294967295,A=p+(m<<11&4294967295|m>>>21),m=_+(A^p^g)+E[15]+530742520&4294967295,_=A+(m<<16&4294967295|m>>>16),m=g+(_^A^p)+E[2]+3299628645&4294967295,g=_+(m<<23&4294967295|m>>>9),m=p+(_^(g|~A))+E[0]+4096336452&4294967295,p=g+(m<<6&4294967295|m>>>26),m=A+(g^(p|~_))+E[7]+1126891415&4294967295,A=p+(m<<10&4294967295|m>>>22),m=_+(p^(A|~g))+E[14]+2878612391&4294967295,_=A+(m<<15&4294967295|m>>>17),m=g+(A^(_|~p))+E[5]+4237533241&4294967295,g=_+(m<<21&4294967295|m>>>11),m=p+(_^(g|~A))+E[12]+1700485571&4294967295,p=g+(m<<6&4294967295|m>>>26),m=A+(g^(p|~_))+E[3]+2399980690&4294967295,A=p+(m<<10&4294967295|m>>>22),m=_+(p^(A|~g))+E[10]+4293915773&4294967295,_=A+(m<<15&4294967295|m>>>17),m=g+(A^(_|~p))+E[1]+2240044497&4294967295,g=_+(m<<21&4294967295|m>>>11),m=p+(_^(g|~A))+E[8]+1873313359&4294967295,p=g+(m<<6&4294967295|m>>>26),m=A+(g^(p|~_))+E[15]+4264355552&4294967295,A=p+(m<<10&4294967295|m>>>22),m=_+(p^(A|~g))+E[6]+2734768916&4294967295,_=A+(m<<15&4294967295|m>>>17),m=g+(A^(_|~p))+E[13]+1309151649&4294967295,g=_+(m<<21&4294967295|m>>>11),m=p+(_^(g|~A))+E[4]+4149444226&4294967295,p=g+(m<<6&4294967295|m>>>26),m=A+(g^(p|~_))+E[11]+3174756917&4294967295,A=p+(m<<10&4294967295|m>>>22),m=_+(p^(A|~g))+E[2]+718787259&4294967295,_=A+(m<<15&4294967295|m>>>17),m=g+(A^(_|~p))+E[9]+3951481745&4294967295,y.g[0]=y.g[0]+p&4294967295,y.g[1]=y.g[1]+(_+(m<<21&4294967295|m>>>11))&4294967295,y.g[2]=y.g[2]+_&4294967295,y.g[3]=y.g[3]+A&4294967295}r.prototype.v=function(y,p){p===void 0&&(p=y.length);const g=p-this.blockSize,E=this.C;let _=this.h,A=0;for(;A<p;){if(_==0)for(;A<=g;)i(this,y,A),A+=this.blockSize;if(typeof y=="string"){for(;A<p;)if(E[_++]=y.charCodeAt(A++),_==this.blockSize){i(this,E),_=0;break}}else for(;A<p;)if(E[_++]=y[A++],_==this.blockSize){i(this,E),_=0;break}}this.h=_,this.o+=p},r.prototype.A=function(){var y=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);y[0]=128;for(var p=1;p<y.length-8;++p)y[p]=0;p=this.o*8;for(var g=y.length-8;g<y.length;++g)y[g]=p&255,p/=256;for(this.v(y),y=Array(16),p=0,g=0;g<4;++g)for(let E=0;E<32;E+=8)y[p++]=this.g[g]>>>E&255;return y};function o(y,p){var g=u;return Object.prototype.hasOwnProperty.call(g,y)?g[y]:g[y]=p(y)}function c(y,p){this.h=p;const g=[];let E=!0;for(let _=y.length-1;_>=0;_--){const A=y[_]|0;E&&A==p||(g[_]=A,E=!1)}this.g=g}var u={};function f(y){return-128<=y&&y<128?o(y,function(p){return new c([p|0],p<0?-1:0)}):new c([y|0],y<0?-1:0)}function d(y){if(isNaN(y)||!isFinite(y))return w;if(y<0)return D(d(-y));const p=[];let g=1;for(let E=0;y>=g;E++)p[E]=y/g|0,g*=4294967296;return new c(p,0)}function T(y,p){if(y.length==0)throw Error("number format error: empty string");if(p=p||10,p<2||36<p)throw Error("radix out of range: "+p);if(y.charAt(0)=="-")return D(T(y.substring(1),p));if(y.indexOf("-")>=0)throw Error('number format error: interior "-" character');const g=d(Math.pow(p,8));let E=w;for(let A=0;A<y.length;A+=8){var _=Math.min(8,y.length-A);const m=parseInt(y.substring(A,A+_),p);_<8?(_=d(Math.pow(p,_)),E=E.j(_).add(d(m))):(E=E.j(g),E=E.add(d(m)))}return E}var w=f(0),R=f(1),P=f(16777216);n=c.prototype,n.m=function(){if(O(this))return-D(this).m();let y=0,p=1;for(let g=0;g<this.g.length;g++){const E=this.i(g);y+=(E>=0?E:4294967296+E)*p,p*=4294967296}return y},n.toString=function(y){if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(N(this))return"0";if(O(this))return"-"+D(this).toString(y);const p=d(Math.pow(y,6));var g=this;let E="";for(;;){const _=z(g,p).g;g=$(g,_.j(p));let A=((g.g.length>0?g.g[0]:g.h)>>>0).toString(y);if(g=_,N(g))return A+E;for(;A.length<6;)A="0"+A;E=A+E}},n.i=function(y){return y<0?0:y<this.g.length?this.g[y]:this.h};function N(y){if(y.h!=0)return!1;for(let p=0;p<y.g.length;p++)if(y.g[p]!=0)return!1;return!0}function O(y){return y.h==-1}n.l=function(y){return y=$(this,y),O(y)?-1:N(y)?0:1};function D(y){const p=y.g.length,g=[];for(let E=0;E<p;E++)g[E]=~y.g[E];return new c(g,~y.h).add(R)}n.abs=function(){return O(this)?D(this):this},n.add=function(y){const p=Math.max(this.g.length,y.g.length),g=[];let E=0;for(let _=0;_<=p;_++){let A=E+(this.i(_)&65535)+(y.i(_)&65535),m=(A>>>16)+(this.i(_)>>>16)+(y.i(_)>>>16);E=m>>>16,A&=65535,m&=65535,g[_]=m<<16|A}return new c(g,g[g.length-1]&-2147483648?-1:0)};function $(y,p){return y.add(D(p))}n.j=function(y){if(N(this)||N(y))return w;if(O(this))return O(y)?D(this).j(D(y)):D(D(this).j(y));if(O(y))return D(this.j(D(y)));if(this.l(P)<0&&y.l(P)<0)return d(this.m()*y.m());const p=this.g.length+y.g.length,g=[];for(var E=0;E<2*p;E++)g[E]=0;for(E=0;E<this.g.length;E++)for(let _=0;_<y.g.length;_++){const A=this.i(E)>>>16,m=this.i(E)&65535,It=y.i(_)>>>16,ae=y.i(_)&65535;g[2*E+2*_]+=m*ae,j(g,2*E+2*_),g[2*E+2*_+1]+=A*ae,j(g,2*E+2*_+1),g[2*E+2*_+1]+=m*It,j(g,2*E+2*_+1),g[2*E+2*_+2]+=A*It,j(g,2*E+2*_+2)}for(y=0;y<p;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=p;y<2*p;y++)g[y]=0;return new c(g,0)};function j(y,p){for(;(y[p]&65535)!=y[p];)y[p+1]+=y[p]>>>16,y[p]&=65535,p++}function F(y,p){this.g=y,this.h=p}function z(y,p){if(N(p))throw Error("division by zero");if(N(y))return new F(w,w);if(O(y))return p=z(D(y),p),new F(D(p.g),D(p.h));if(O(p))return p=z(y,D(p)),new F(D(p.g),p.h);if(y.g.length>30){if(O(y)||O(p))throw Error("slowDivide_ only works with positive integers.");for(var g=R,E=p;E.l(y)<=0;)g=ct(g),E=ct(E);var _=rt(g,1),A=rt(E,1);for(E=rt(E,2),g=rt(g,2);!N(E);){var m=A.add(E);m.l(y)<=0&&(_=_.add(g),A=m),E=rt(E,1),g=rt(g,1)}return p=$(y,_.j(p)),new F(_,p)}for(_=w;y.l(p)>=0;){for(g=Math.max(1,Math.floor(y.m()/p.m())),E=Math.ceil(Math.log(g)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),A=d(g),m=A.j(p);O(m)||m.l(y)>0;)g-=E,A=d(g),m=A.j(p);N(A)&&(A=R),_=_.add(A),y=$(y,m)}return new F(_,y)}n.B=function(y){return z(this,y).h},n.and=function(y){const p=Math.max(this.g.length,y.g.length),g=[];for(let E=0;E<p;E++)g[E]=this.i(E)&y.i(E);return new c(g,this.h&y.h)},n.or=function(y){const p=Math.max(this.g.length,y.g.length),g=[];for(let E=0;E<p;E++)g[E]=this.i(E)|y.i(E);return new c(g,this.h|y.h)},n.xor=function(y){const p=Math.max(this.g.length,y.g.length),g=[];for(let E=0;E<p;E++)g[E]=this.i(E)^y.i(E);return new c(g,this.h^y.h)};function ct(y){const p=y.g.length+1,g=[];for(let E=0;E<p;E++)g[E]=y.i(E)<<1|y.i(E-1)>>>31;return new c(g,y.h)}function rt(y,p){const g=p>>5;p%=32;const E=y.g.length-g,_=[];for(let A=0;A<E;A++)_[A]=p>0?y.i(A+g)>>>p|y.i(A+g+1)<<32-p:y.i(A+g);return new c(_,y.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.B,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=d,c.fromString=T,zs=c}).apply(typeof qo<"u"?qo:typeof self<"u"?self:typeof window<"u"?window:{});var Gn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tc,ln,wc,tr,ws,Ic,Ac,vc;(function(){var n,t=Object.defineProperty;function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Gn=="object"&&Gn];for(var a=0;a<s.length;++a){var l=s[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function i(s,a){if(a)t:{var l=r;s=s.split(".");for(var h=0;h<s.length-1;h++){var I=s[h];if(!(I in l))break t;l=l[I]}s=s[s.length-1],h=l[s],a=a(h),a!=h&&a!=null&&t(l,s,{configurable:!0,writable:!0,value:a})}}i("Symbol.dispose",function(s){return s||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(s){return s||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(s){return s||function(a){var l=[],h;for(h in a)Object.prototype.hasOwnProperty.call(a,h)&&l.push([h,a[h]]);return l}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function u(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function f(s,a,l){return s.call.apply(s.bind,arguments)}function d(s,a,l){return d=f,d.apply(null,arguments)}function T(s,a){var l=Array.prototype.slice.call(arguments,1);return function(){var h=l.slice();return h.push.apply(h,arguments),s.apply(this,h)}}function w(s,a){function l(){}l.prototype=a.prototype,s.Z=a.prototype,s.prototype=new l,s.prototype.constructor=s,s.Ob=function(h,I,v){for(var C=Array(arguments.length-2),M=2;M<arguments.length;M++)C[M-2]=arguments[M];return a.prototype[I].apply(h,C)}}var R=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?s=>s&&AsyncContext.Snapshot.wrap(s):s=>s;function P(s){const a=s.length;if(a>0){const l=Array(a);for(let h=0;h<a;h++)l[h]=s[h];return l}return[]}function N(s,a){for(let h=1;h<arguments.length;h++){const I=arguments[h];var l=typeof I;if(l=l!="object"?l:I?Array.isArray(I)?"array":l:"null",l=="array"||l=="object"&&typeof I.length=="number"){l=s.length||0;const v=I.length||0;s.length=l+v;for(let C=0;C<v;C++)s[l+C]=I[C]}else s.push(I)}}class O{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return this.h>0?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function D(s){c.setTimeout(()=>{throw s},0)}function $(){var s=y;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class j{constructor(){this.h=this.g=null}add(a,l){const h=F.get();h.set(a,l),this.h?this.h.next=h:this.g=h,this.h=h}}var F=new O(()=>new z,s=>s.reset());class z{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let ct,rt=!1,y=new j,p=()=>{const s=Promise.resolve(void 0);ct=()=>{s.then(g)}};function g(){for(var s;s=$();){try{s.h.call(s.g)}catch(l){D(l)}var a=F;a.j(s),a.h<100&&(a.h++,s.next=a.g,a.g=s)}rt=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}_.prototype.h=function(){this.defaultPrevented=!0};var A=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};c.addEventListener("test",l,a),c.removeEventListener("test",l,a)}catch{}return s})();function m(s){return/^[\s\xa0]*$/.test(s)}function It(s,a){_.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s&&this.init(s,a)}w(It,_),It.prototype.init=function(s,a){const l=this.type=s.type,h=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget,a||(l=="mouseover"?a=s.fromElement:l=="mouseout"&&(a=s.toElement)),this.relatedTarget=a,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=s.pointerType,this.state=s.state,this.i=s,s.defaultPrevented&&It.Z.h.call(this)},It.prototype.h=function(){It.Z.h.call(this);const s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var ae="closure_listenable_"+(Math.random()*1e6|0),Hl=0;function Gl(s,a,l,h,I){this.listener=s,this.proxy=null,this.src=a,this.type=l,this.capture=!!h,this.ha=I,this.key=++Hl,this.da=this.fa=!1}function Vn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function Nn(s,a,l){for(const h in s)a.call(l,s[h],h,s)}function Kl(s,a){for(const l in s)a.call(void 0,s[l],l,s)}function wi(s){const a={};for(const l in s)a[l]=s[l];return a}const Ii="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ai(s,a){let l,h;for(let I=1;I<arguments.length;I++){h=arguments[I];for(l in h)s[l]=h[l];for(let v=0;v<Ii.length;v++)l=Ii[v],Object.prototype.hasOwnProperty.call(h,l)&&(s[l]=h[l])}}function kn(s){this.src=s,this.g={},this.h=0}kn.prototype.add=function(s,a,l,h,I){const v=s.toString();s=this.g[v],s||(s=this.g[v]=[],this.h++);const C=kr(s,a,h,I);return C>-1?(a=s[C],l||(a.fa=!1)):(a=new Gl(a,this.src,v,!!h,I),a.fa=l,s.push(a)),a};function Nr(s,a){const l=a.type;if(l in s.g){var h=s.g[l],I=Array.prototype.indexOf.call(h,a,void 0),v;(v=I>=0)&&Array.prototype.splice.call(h,I,1),v&&(Vn(a),s.g[l].length==0&&(delete s.g[l],s.h--))}}function kr(s,a,l,h){for(let I=0;I<s.length;++I){const v=s[I];if(!v.da&&v.listener==a&&v.capture==!!l&&v.ha==h)return I}return-1}var Or="closure_lm_"+(Math.random()*1e6|0),xr={};function vi(s,a,l,h,I){if(Array.isArray(a)){for(let v=0;v<a.length;v++)vi(s,a[v],l,h,I);return null}return l=Si(l),s&&s[ae]?s.J(a,l,u(h)?!!h.capture:!1,I):Wl(s,a,l,!1,h,I)}function Wl(s,a,l,h,I,v){if(!a)throw Error("Invalid event type");const C=u(I)?!!I.capture:!!I;let M=Lr(s);if(M||(s[Or]=M=new kn(s)),l=M.add(a,l,h,C,v),l.proxy)return l;if(h=Ql(),l.proxy=h,h.src=s,h.listener=l,s.addEventListener)A||(I=C),I===void 0&&(I=!1),s.addEventListener(a.toString(),h,I);else if(s.attachEvent)s.attachEvent(bi(a.toString()),h);else if(s.addListener&&s.removeListener)s.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Ql(){function s(l){return a.call(s.src,s.listener,l)}const a=Xl;return s}function Ri(s,a,l,h,I){if(Array.isArray(a))for(var v=0;v<a.length;v++)Ri(s,a[v],l,h,I);else h=u(h)?!!h.capture:!!h,l=Si(l),s&&s[ae]?(s=s.i,v=String(a).toString(),v in s.g&&(a=s.g[v],l=kr(a,l,h,I),l>-1&&(Vn(a[l]),Array.prototype.splice.call(a,l,1),a.length==0&&(delete s.g[v],s.h--)))):s&&(s=Lr(s))&&(a=s.g[a.toString()],s=-1,a&&(s=kr(a,l,h,I)),(l=s>-1?a[s]:null)&&Mr(l))}function Mr(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[ae])Nr(a.i,s);else{var l=s.type,h=s.proxy;a.removeEventListener?a.removeEventListener(l,h,s.capture):a.detachEvent?a.detachEvent(bi(l),h):a.addListener&&a.removeListener&&a.removeListener(h),(l=Lr(a))?(Nr(l,s),l.h==0&&(l.src=null,a[Or]=null)):Vn(s)}}}function bi(s){return s in xr?xr[s]:xr[s]="on"+s}function Xl(s,a){if(s.da)s=!0;else{a=new It(a,this);const l=s.listener,h=s.ha||s.src;s.fa&&Mr(s),s=l.call(h,a)}return s}function Lr(s){return s=s[Or],s instanceof kn?s:null}var Fr="__closure_events_fn_"+(Math.random()*1e9>>>0);function Si(s){return typeof s=="function"?s:(s[Fr]||(s[Fr]=function(a){return s.handleEvent(a)}),s[Fr])}function dt(){E.call(this),this.i=new kn(this),this.M=this,this.G=null}w(dt,E),dt.prototype[ae]=!0,dt.prototype.removeEventListener=function(s,a,l,h){Ri(this,s,a,l,h)};function yt(s,a){var l,h=s.G;if(h)for(l=[];h;h=h.G)l.push(h);if(s=s.M,h=a.type||a,typeof a=="string")a=new _(a,s);else if(a instanceof _)a.target=a.target||s;else{var I=a;a=new _(h,s),Ai(a,I)}I=!0;let v,C;if(l)for(C=l.length-1;C>=0;C--)v=a.g=l[C],I=On(v,h,!0,a)&&I;if(v=a.g=s,I=On(v,h,!0,a)&&I,I=On(v,h,!1,a)&&I,l)for(C=0;C<l.length;C++)v=a.g=l[C],I=On(v,h,!1,a)&&I}dt.prototype.N=function(){if(dt.Z.N.call(this),this.i){var s=this.i;for(const a in s.g){const l=s.g[a];for(let h=0;h<l.length;h++)Vn(l[h]);delete s.g[a],s.h--}}this.G=null},dt.prototype.J=function(s,a,l,h){return this.i.add(String(s),a,!1,l,h)},dt.prototype.K=function(s,a,l,h){return this.i.add(String(s),a,!0,l,h)};function On(s,a,l,h){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();let I=!0;for(let v=0;v<a.length;++v){const C=a[v];if(C&&!C.da&&C.capture==l){const M=C.listener,st=C.ha||C.src;C.fa&&Nr(s.i,C),I=M.call(st,h)!==!1&&I}}return I&&!h.defaultPrevented}function Jl(s,a){if(typeof s!="function")if(s&&typeof s.handleEvent=="function")s=d(s.handleEvent,s);else throw Error("Invalid listener argument");return Number(a)>2147483647?-1:c.setTimeout(s,a||0)}function Ci(s){s.g=Jl(()=>{s.g=null,s.i&&(s.i=!1,Ci(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class Yl extends E{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Ci(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ze(s){E.call(this),this.h=s,this.g={}}w(ze,E);var Pi=[];function Di(s){Nn(s.g,function(a,l){this.g.hasOwnProperty(l)&&Mr(a)},s),s.g={}}ze.prototype.N=function(){ze.Z.N.call(this),Di(this)},ze.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ur=c.JSON.stringify,Zl=c.JSON.parse,tu=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function Vi(){}function Ni(){}var He={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Br(){_.call(this,"d")}w(Br,_);function jr(){_.call(this,"c")}w(jr,_);var ce={},ki=null;function xn(){return ki=ki||new dt}ce.Ia="serverreachability";function Oi(s){_.call(this,ce.Ia,s)}w(Oi,_);function Ge(s){const a=xn();yt(a,new Oi(a))}ce.STAT_EVENT="statevent";function xi(s,a){_.call(this,ce.STAT_EVENT,s),this.stat=a}w(xi,_);function Et(s){const a=xn();yt(a,new xi(a,s))}ce.Ja="timingevent";function Mi(s,a){_.call(this,ce.Ja,s),this.size=a}w(Mi,_);function Ke(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},a)}function We(){this.g=!0}We.prototype.ua=function(){this.g=!1};function eu(s,a,l,h,I,v){s.info(function(){if(s.g)if(v){var C="",M=v.split("&");for(let H=0;H<M.length;H++){var st=M[H].split("=");if(st.length>1){const it=st[0];st=st[1];const xt=it.split("_");C=xt.length>=2&&xt[1]=="type"?C+(it+"="+st+"&"):C+(it+"=redacted&")}}}else C=null;else C=v;return"XMLHTTP REQ ("+h+") [attempt "+I+"]: "+a+`
`+l+`
`+C})}function nu(s,a,l,h,I,v,C){s.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+I+"]: "+a+`
`+l+`
`+v+" "+C})}function Ce(s,a,l,h){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+su(s,l)+(h?" "+h:"")})}function ru(s,a){s.info(function(){return"TIMEOUT: "+a})}We.prototype.info=function(){};function su(s,a){if(!s.g)return a;if(!a)return null;try{const v=JSON.parse(a);if(v){for(s=0;s<v.length;s++)if(Array.isArray(v[s])){var l=v[s];if(!(l.length<2)){var h=l[1];if(Array.isArray(h)&&!(h.length<1)){var I=h[0];if(I!="noop"&&I!="stop"&&I!="close")for(let C=1;C<h.length;C++)h[C]=""}}}}return Ur(v)}catch{return a}}var Mn={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Li={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Fi;function $r(){}w($r,Vi),$r.prototype.g=function(){return new XMLHttpRequest},Fi=new $r;function Qe(s){return encodeURIComponent(String(s))}function iu(s){var a=1;s=s.split(":");const l=[];for(;a>0&&s.length;)l.push(s.shift()),a--;return s.length&&l.push(s.join(":")),l}function Kt(s,a,l,h){this.j=s,this.i=a,this.l=l,this.S=h||1,this.V=new ze(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ui}function Ui(){this.i=null,this.g="",this.h=!1}var Bi={},qr={};function zr(s,a,l){s.M=1,s.A=Fn(Ot(a)),s.u=l,s.R=!0,ji(s,null)}function ji(s,a){s.F=Date.now(),Ln(s),s.B=Ot(s.A);var l=s.B,h=s.S;Array.isArray(h)||(h=[String(h)]),to(l.i,"t",h),s.C=0,l=s.j.L,s.h=new Ui,s.g=Eo(s.j,l?a:null,!s.u),s.P>0&&(s.O=new Yl(d(s.Y,s,s.g),s.P)),a=s.V,l=s.g,h=s.ba;var I="readystatechange";Array.isArray(I)||(I&&(Pi[0]=I.toString()),I=Pi);for(let v=0;v<I.length;v++){const C=vi(l,I[v],h||a.handleEvent,!1,a.h||a);if(!C)break;a.g[C.key]=C}a=s.J?wi(s.J):{},s.u?(s.v||(s.v="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.B,s.v,s.u,a)):(s.v="GET",s.g.ea(s.B,s.v,null,a)),Ge(),eu(s.i,s.v,s.B,s.l,s.S,s.u)}Kt.prototype.ba=function(s){s=s.target;const a=this.O;a&&Xt(s)==3?a.j():this.Y(s)},Kt.prototype.Y=function(s){try{if(s==this.g)t:{const M=Xt(this.g),st=this.g.ya(),H=this.g.ca();if(!(M<3)&&(M!=3||this.g&&(this.h.h||this.g.la()||ao(this.g)))){this.K||M!=4||st==7||(st==8||H<=0?Ge(3):Ge(2)),Hr(this);var a=this.g.ca();this.X=a;var l=ou(this);if(this.o=a==200,nu(this.i,this.v,this.B,this.l,this.S,M,a),this.o){if(this.U&&!this.L){e:{if(this.g){var h,I=this.g;if((h=I.g?I.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!m(h)){var v=h;break e}}v=null}if(s=v)Ce(this.i,this.l,s,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Gr(this,s);else{this.o=!1,this.m=3,Et(12),le(this),Xe(this);break t}}if(this.R){s=!0;let it;for(;!this.K&&this.C<l.length;)if(it=au(this,l),it==qr){M==4&&(this.m=4,Et(14),s=!1),Ce(this.i,this.l,null,"[Incomplete Response]");break}else if(it==Bi){this.m=4,Et(15),Ce(this.i,this.l,l,"[Invalid Chunk]"),s=!1;break}else Ce(this.i,this.l,it,null),Gr(this,it);if($i(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),M!=4||l.length!=0||this.h.h||(this.m=1,Et(16),s=!1),this.o=this.o&&s,!s)Ce(this.i,this.l,l,"[Invalid Chunked Response]"),le(this),Xe(this);else if(l.length>0&&!this.W){this.W=!0;var C=this.j;C.g==this&&C.aa&&!C.P&&(C.j.info("Great, no buffering proxy detected. Bytes received: "+l.length),ts(C),C.P=!0,Et(11))}}else Ce(this.i,this.l,l,null),Gr(this,l);M==4&&le(this),this.o&&!this.K&&(M==4?mo(this.j,this):(this.o=!1,Ln(this)))}else wu(this.g),a==400&&l.indexOf("Unknown SID")>0?(this.m=3,Et(12)):(this.m=0,Et(13)),le(this),Xe(this)}}}catch{}finally{}};function ou(s){if(!$i(s))return s.g.la();const a=ao(s.g);if(a==="")return"";let l="";const h=a.length,I=Xt(s.g)==4;if(!s.h.i){if(typeof TextDecoder>"u")return le(s),Xe(s),"";s.h.i=new c.TextDecoder}for(let v=0;v<h;v++)s.h.h=!0,l+=s.h.i.decode(a[v],{stream:!(I&&v==h-1)});return a.length=0,s.h.g+=l,s.C=0,s.h.g}function $i(s){return s.g?s.v=="GET"&&s.M!=2&&s.j.Aa:!1}function au(s,a){var l=s.C,h=a.indexOf(`
`,l);return h==-1?qr:(l=Number(a.substring(l,h)),isNaN(l)?Bi:(h+=1,h+l>a.length?qr:(a=a.slice(h,h+l),s.C=h+l,a)))}Kt.prototype.cancel=function(){this.K=!0,le(this)};function Ln(s){s.T=Date.now()+s.H,qi(s,s.H)}function qi(s,a){if(s.D!=null)throw Error("WatchDog timer not null");s.D=Ke(d(s.aa,s),a)}function Hr(s){s.D&&(c.clearTimeout(s.D),s.D=null)}Kt.prototype.aa=function(){this.D=null;const s=Date.now();s-this.T>=0?(ru(this.i,this.B),this.M!=2&&(Ge(),Et(17)),le(this),this.m=2,Xe(this)):qi(this,this.T-s)};function Xe(s){s.j.I==0||s.K||mo(s.j,s)}function le(s){Hr(s);var a=s.O;a&&typeof a.dispose=="function"&&a.dispose(),s.O=null,Di(s.V),s.g&&(a=s.g,s.g=null,a.abort(),a.dispose())}function Gr(s,a){try{var l=s.j;if(l.I!=0&&(l.g==s||Kr(l.h,s))){if(!s.L&&Kr(l.h,s)&&l.I==3){try{var h=l.Ba.g.parse(a)}catch{h=null}if(Array.isArray(h)&&h.length==3){var I=h;if(I[0]==0){t:if(!l.v){if(l.g)if(l.g.F+3e3<s.F)qn(l),jn(l);else break t;Zr(l),Et(18)}}else l.xa=I[1],0<l.xa-l.K&&I[2]<37500&&l.F&&l.A==0&&!l.C&&(l.C=Ke(d(l.Va,l),6e3));Gi(l.h)<=1&&l.ta&&(l.ta=void 0)}else he(l,11)}else if((s.L||l.g==s)&&qn(l),!m(a))for(I=l.Ba.g.parse(a),a=0;a<I.length;a++){let H=I[a];const it=H[0];if(!(it<=l.K))if(l.K=it,H=H[1],l.I==2)if(H[0]=="c"){l.M=H[1],l.ba=H[2];const xt=H[3];xt!=null&&(l.ka=xt,l.j.info("VER="+l.ka));const fe=H[4];fe!=null&&(l.za=fe,l.j.info("SVER="+l.za));const Jt=H[5];Jt!=null&&typeof Jt=="number"&&Jt>0&&(h=1.5*Jt,l.O=h,l.j.info("backChannelRequestTimeoutMs_="+h)),h=l;const Yt=s.g;if(Yt){const Hn=Yt.g?Yt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hn){var v=h.h;v.g||Hn.indexOf("spdy")==-1&&Hn.indexOf("quic")==-1&&Hn.indexOf("h2")==-1||(v.j=v.l,v.g=new Set,v.h&&(Wr(v,v.h),v.h=null))}if(h.G){const es=Yt.g?Yt.g.getResponseHeader("X-HTTP-Session-Id"):null;es&&(h.wa=es,K(h.J,h.G,es))}}l.I=3,l.l&&l.l.ra(),l.aa&&(l.T=Date.now()-s.F,l.j.info("Handshake RTT: "+l.T+"ms")),h=l;var C=s;if(h.na=yo(h,h.L?h.ba:null,h.W),C.L){Ki(h.h,C);var M=C,st=h.O;st&&(M.H=st),M.D&&(Hr(M),Ln(M)),h.g=C}else fo(h);l.i.length>0&&$n(l)}else H[0]!="stop"&&H[0]!="close"||he(l,7);else l.I==3&&(H[0]=="stop"||H[0]=="close"?H[0]=="stop"?he(l,7):Yr(l):H[0]!="noop"&&l.l&&l.l.qa(H),l.A=0)}}Ge(4)}catch{}}var cu=class{constructor(s,a){this.g=s,this.map=a}};function zi(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=s.length>0&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Hi(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Gi(s){return s.h?1:s.g?s.g.size:0}function Kr(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function Wr(s,a){s.g?s.g.add(a):s.h=a}function Ki(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}zi.prototype.cancel=function(){if(this.i=Wi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Wi(s){if(s.h!=null)return s.i.concat(s.h.G);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const l of s.g.values())a=a.concat(l.G);return a}return P(s.i)}var Qi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lu(s,a){if(s){s=s.split("&");for(let l=0;l<s.length;l++){const h=s[l].indexOf("=");let I,v=null;h>=0?(I=s[l].substring(0,h),v=s[l].substring(h+1)):I=s[l],a(I,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function Wt(s){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let a;s instanceof Wt?(this.l=s.l,Je(this,s.j),this.o=s.o,this.g=s.g,Ye(this,s.u),this.h=s.h,Qr(this,eo(s.i)),this.m=s.m):s&&(a=String(s).match(Qi))?(this.l=!1,Je(this,a[1]||"",!0),this.o=Ze(a[2]||""),this.g=Ze(a[3]||"",!0),Ye(this,a[4]),this.h=Ze(a[5]||"",!0),Qr(this,a[6]||"",!0),this.m=Ze(a[7]||"")):(this.l=!1,this.i=new en(null,this.l))}Wt.prototype.toString=function(){const s=[];var a=this.j;a&&s.push(tn(a,Xi,!0),":");var l=this.g;return(l||a=="file")&&(s.push("//"),(a=this.o)&&s.push(tn(a,Xi,!0),"@"),s.push(Qe(l).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.u,l!=null&&s.push(":",String(l))),(l=this.h)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(tn(l,l.charAt(0)=="/"?fu:hu,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",tn(l,pu)),s.join("")},Wt.prototype.resolve=function(s){const a=Ot(this);let l=!!s.j;l?Je(a,s.j):l=!!s.o,l?a.o=s.o:l=!!s.g,l?a.g=s.g:l=s.u!=null;var h=s.h;if(l)Ye(a,s.u);else if(l=!!s.h){if(h.charAt(0)!="/")if(this.g&&!this.h)h="/"+h;else{var I=a.h.lastIndexOf("/");I!=-1&&(h=a.h.slice(0,I+1)+h)}if(I=h,I==".."||I==".")h="";else if(I.indexOf("./")!=-1||I.indexOf("/.")!=-1){h=I.lastIndexOf("/",0)==0,I=I.split("/");const v=[];for(let C=0;C<I.length;){const M=I[C++];M=="."?h&&C==I.length&&v.push(""):M==".."?((v.length>1||v.length==1&&v[0]!="")&&v.pop(),h&&C==I.length&&v.push("")):(v.push(M),h=!0)}h=v.join("/")}else h=I}return l?a.h=h:l=s.i.toString()!=="",l?Qr(a,eo(s.i)):l=!!s.m,l&&(a.m=s.m),a};function Ot(s){return new Wt(s)}function Je(s,a,l){s.j=l?Ze(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function Ye(s,a){if(a){if(a=Number(a),isNaN(a)||a<0)throw Error("Bad port number "+a);s.u=a}else s.u=null}function Qr(s,a,l){a instanceof en?(s.i=a,mu(s.i,s.l)):(l||(a=tn(a,du)),s.i=new en(a,s.l))}function K(s,a,l){s.i.set(a,l)}function Fn(s){return K(s,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),s}function Ze(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function tn(s,a,l){return typeof s=="string"?(s=encodeURI(s).replace(a,uu),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function uu(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Xi=/[#\/\?@]/g,hu=/[#\?:]/g,fu=/[#\?]/g,du=/[#\?@]/g,pu=/#/g;function en(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function ue(s){s.g||(s.g=new Map,s.h=0,s.i&&lu(s.i,function(a,l){s.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}n=en.prototype,n.add=function(s,a){ue(this),this.i=null,s=Pe(this,s);let l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(a),this.h+=1,this};function Ji(s,a){ue(s),a=Pe(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function Yi(s,a){return ue(s),a=Pe(s,a),s.g.has(a)}n.forEach=function(s,a){ue(this),this.g.forEach(function(l,h){l.forEach(function(I){s.call(a,I,h,this)},this)},this)};function Zi(s,a){ue(s);let l=[];if(typeof a=="string")Yi(s,a)&&(l=l.concat(s.g.get(Pe(s,a))));else for(s=Array.from(s.g.values()),a=0;a<s.length;a++)l=l.concat(s[a]);return l}n.set=function(s,a){return ue(this),this.i=null,s=Pe(this,s),Yi(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},n.get=function(s,a){return s?(s=Zi(this,s),s.length>0?String(s[0]):a):a};function to(s,a,l){Ji(s,a),l.length>0&&(s.i=null,s.g.set(Pe(s,a),P(l)),s.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(let h=0;h<a.length;h++){var l=a[h];const I=Qe(l);l=Zi(this,l);for(let v=0;v<l.length;v++){let C=I;l[v]!==""&&(C+="="+Qe(l[v])),s.push(C)}}return this.i=s.join("&")};function eo(s){const a=new en;return a.i=s.i,s.g&&(a.g=new Map(s.g),a.h=s.h),a}function Pe(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function mu(s,a){a&&!s.j&&(ue(s),s.i=null,s.g.forEach(function(l,h){const I=h.toLowerCase();h!=I&&(Ji(this,h),to(this,I,l))},s)),s.j=a}function gu(s,a){const l=new We;if(c.Image){const h=new Image;h.onload=T(Qt,l,"TestLoadImage: loaded",!0,a,h),h.onerror=T(Qt,l,"TestLoadImage: error",!1,a,h),h.onabort=T(Qt,l,"TestLoadImage: abort",!1,a,h),h.ontimeout=T(Qt,l,"TestLoadImage: timeout",!1,a,h),c.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=s}else a(!1)}function _u(s,a){const l=new We,h=new AbortController,I=setTimeout(()=>{h.abort(),Qt(l,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:h.signal}).then(v=>{clearTimeout(I),v.ok?Qt(l,"TestPingServer: ok",!0,a):Qt(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(I),Qt(l,"TestPingServer: error",!1,a)})}function Qt(s,a,l,h,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),h(l)}catch{}}function yu(){this.g=new tu}function Xr(s){this.i=s.Sb||null,this.h=s.ab||!1}w(Xr,Vi),Xr.prototype.g=function(){return new Un(this.i,this.h)};function Un(s,a){dt.call(this),this.H=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}w(Un,dt),n=Un.prototype,n.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=s,this.D=a,this.readyState=1,rn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const a={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};s&&(a.body=s),(this.H||c).fetch(new Request(this.D,a)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,nn(this)),this.readyState=0},n.Pa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,rn(this)),this.g&&(this.readyState=3,rn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;no(this)}else s.text().then(this.Oa.bind(this),this.ga.bind(this))};function no(s){s.j.read().then(s.Ma.bind(s)).catch(s.ga.bind(s))}n.Ma=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.B.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?nn(this):rn(this),this.readyState==3&&no(this)}},n.Oa=function(s){this.g&&(this.response=this.responseText=s,nn(this))},n.Na=function(s){this.g&&(this.response=s,nn(this))},n.ga=function(){this.g&&nn(this)};function nn(s){s.readyState=4,s.l=null,s.j=null,s.B=null,rn(s)}n.setRequestHeader=function(s,a){this.A.append(s,a)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=a.next();return s.join(`\r
`)};function rn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Un.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function ro(s){let a="";return Nn(s,function(l,h){a+=h,a+=":",a+=l,a+=`\r
`}),a}function Jr(s,a,l){t:{for(h in l){var h=!1;break t}h=!0}h||(l=ro(l),typeof s=="string"?l!=null&&Qe(l):K(s,a,l))}function J(s){dt.call(this),this.headers=new Map,this.L=s||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}w(J,dt);var Eu=/^https?$/i,Tu=["POST","PUT"];n=J.prototype,n.Fa=function(s){this.H=s},n.ea=function(s,a,l,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Fi.g(),this.g.onreadystatechange=R(d(this.Ca,this));try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(v){so(this,v);return}if(s=l||"",l=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var I in h)l.set(I,h[I]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const v of h.keys())l.set(v,h.get(v));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(l.keys()).find(v=>v.toLowerCase()=="content-type"),I=c.FormData&&s instanceof c.FormData,!(Array.prototype.indexOf.call(Tu,a,void 0)>=0)||h||I||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[v,C]of l)this.g.setRequestHeader(v,C);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(s),this.v=!1}catch(v){so(this,v)}};function so(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.o=5,io(s),Bn(s)}function io(s){s.A||(s.A=!0,yt(s,"complete"),yt(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=s||7,yt(this,"complete"),yt(this,"abort"),Bn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Bn(this,!0)),J.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?oo(this):this.Xa())},n.Xa=function(){oo(this)};function oo(s){if(s.h&&typeof o<"u"){if(s.v&&Xt(s)==4)setTimeout(s.Ca.bind(s),0);else if(yt(s,"readystatechange"),Xt(s)==4){s.h=!1;try{const v=s.ca();t:switch(v){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var h;if(h=v===0){let C=String(s.D).match(Qi)[1]||null;!C&&c.self&&c.self.location&&(C=c.self.location.protocol.slice(0,-1)),h=!Eu.test(C?C.toLowerCase():"")}l=h}if(l)yt(s,"complete"),yt(s,"success");else{s.o=6;try{var I=Xt(s)>2?s.g.statusText:""}catch{I=""}s.l=I+" ["+s.ca()+"]",io(s)}}finally{Bn(s)}}}}function Bn(s,a){if(s.g){s.m&&(clearTimeout(s.m),s.m=null);const l=s.g;s.g=null,a||yt(s,"ready");try{l.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Xt(s){return s.g?s.g.readyState:0}n.ca=function(){try{return Xt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),Zl(a)}};function ao(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.F){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function wu(s){const a={};s=(s.g&&Xt(s)>=2&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<s.length;h++){if(m(s[h]))continue;var l=iu(s[h]);const I=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const v=a[I]||[];a[I]=v,v.push(l)}Kl(a,function(h){return h.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function sn(s,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||a}function co(s){this.za=0,this.i=[],this.j=new We,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=sn("failFast",!1,s),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=sn("baseRetryDelayMs",5e3,s),this.Za=sn("retryDelaySeedMs",1e4,s),this.Ta=sn("forwardChannelMaxRetries",2,s),this.va=sn("forwardChannelRequestTimeoutMs",2e4,s),this.ma=s&&s.xmlHttpFactory||void 0,this.Ua=s&&s.Rb||void 0,this.Aa=s&&s.useFetchStreams||!1,this.O=void 0,this.L=s&&s.supportsCrossDomainXhr||!1,this.M="",this.h=new zi(s&&s.concurrentRequestLimit),this.Ba=new yu,this.S=s&&s.fastHandshake||!1,this.R=s&&s.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=s&&s.Pb||!1,s&&s.ua&&this.j.ua(),s&&s.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&s&&s.detectBufferingProxy||!1,this.ia=void 0,s&&s.longPollingTimeout&&s.longPollingTimeout>0&&(this.ia=s.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=co.prototype,n.ka=8,n.I=1,n.connect=function(s,a,l,h){Et(0),this.W=s,this.H=a||{},l&&h!==void 0&&(this.H.OSID=l,this.H.OAID=h),this.F=this.X,this.J=yo(this,null,this.W),$n(this)};function Yr(s){if(lo(s),s.I==3){var a=s.V++,l=Ot(s.J);if(K(l,"SID",s.M),K(l,"RID",a),K(l,"TYPE","terminate"),on(s,l),a=new Kt(s,s.j,a),a.M=2,a.A=Fn(Ot(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(a.A.toString(),"")}catch{}!l&&c.Image&&(new Image().src=a.A,l=!0),l||(a.g=Eo(a.j,null),a.g.ea(a.A)),a.F=Date.now(),Ln(a)}_o(s)}function jn(s){s.g&&(ts(s),s.g.cancel(),s.g=null)}function lo(s){jn(s),s.v&&(c.clearTimeout(s.v),s.v=null),qn(s),s.h.cancel(),s.m&&(typeof s.m=="number"&&c.clearTimeout(s.m),s.m=null)}function $n(s){if(!Hi(s.h)&&!s.m){s.m=!0;var a=s.Ea;ct||p(),rt||(ct(),rt=!0),y.add(a,s),s.D=0}}function Iu(s,a){return Gi(s.h)>=s.h.j-(s.m?1:0)?!1:s.m?(s.i=a.G.concat(s.i),!0):s.I==1||s.I==2||s.D>=(s.Sa?0:s.Ta)?!1:(s.m=Ke(d(s.Ea,s,a),go(s,s.D)),s.D++,!0)}n.Ea=function(s){if(this.m)if(this.m=null,this.I==1){if(!s){this.V=Math.floor(Math.random()*1e5),s=this.V++;const I=new Kt(this,this.j,s);let v=this.o;if(this.U&&(v?(v=wi(v),Ai(v,this.U)):v=this.U),this.u!==null||this.R||(I.J=v,v=null),this.S)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var h=this.i[l];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(a+=h,a>4096){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=ho(this,I,a),l=Ot(this.J),K(l,"RID",s),K(l,"CVER",22),this.G&&K(l,"X-HTTP-Session-Id",this.G),on(this,l),v&&(this.R?a="headers="+Qe(ro(v))+"&"+a:this.u&&Jr(l,this.u,v)),Wr(this.h,I),this.Ra&&K(l,"TYPE","init"),this.S?(K(l,"$req",a),K(l,"SID","null"),I.U=!0,zr(I,l,null)):zr(I,l,a),this.I=2}}else this.I==3&&(s?uo(this,s):this.i.length==0||Hi(this.h)||uo(this))};function uo(s,a){var l;a?l=a.l:l=s.V++;const h=Ot(s.J);K(h,"SID",s.M),K(h,"RID",l),K(h,"AID",s.K),on(s,h),s.u&&s.o&&Jr(h,s.u,s.o),l=new Kt(s,s.j,l,s.D+1),s.u===null&&(l.J=s.o),a&&(s.i=a.G.concat(s.i)),a=ho(s,l,1e3),l.H=Math.round(s.va*.5)+Math.round(s.va*.5*Math.random()),Wr(s.h,l),zr(l,h,a)}function on(s,a){s.H&&Nn(s.H,function(l,h){K(a,h,l)}),s.l&&Nn({},function(l,h){K(a,h,l)})}function ho(s,a,l){l=Math.min(s.i.length,l);const h=s.l?d(s.l.Ka,s.l,s):null;t:{var I=s.i;let M=-1;for(;;){const st=["count="+l];M==-1?l>0?(M=I[0].g,st.push("ofs="+M)):M=0:st.push("ofs="+M);let H=!0;for(let it=0;it<l;it++){var v=I[it].g;const xt=I[it].map;if(v-=M,v<0)M=Math.max(0,I[it].g-100),H=!1;else try{v="req"+v+"_"||"";try{var C=xt instanceof Map?xt:Object.entries(xt);for(const[fe,Jt]of C){let Yt=Jt;u(Jt)&&(Yt=Ur(Jt)),st.push(v+fe+"="+encodeURIComponent(Yt))}}catch(fe){throw st.push(v+"type="+encodeURIComponent("_badmap")),fe}}catch{h&&h(xt)}}if(H){C=st.join("&");break t}}C=void 0}return s=s.i.splice(0,l),a.G=s,C}function fo(s){if(!s.g&&!s.v){s.Y=1;var a=s.Da;ct||p(),rt||(ct(),rt=!0),y.add(a,s),s.A=0}}function Zr(s){return s.g||s.v||s.A>=3?!1:(s.Y++,s.v=Ke(d(s.Da,s),go(s,s.A)),s.A++,!0)}n.Da=function(){if(this.v=null,po(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var s=4*this.T;this.j.info("BP detection timer enabled: "+s),this.B=Ke(d(this.Wa,this),s)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Et(10),jn(this),po(this))};function ts(s){s.B!=null&&(c.clearTimeout(s.B),s.B=null)}function po(s){s.g=new Kt(s,s.j,"rpc",s.Y),s.u===null&&(s.g.J=s.o),s.g.P=0;var a=Ot(s.na);K(a,"RID","rpc"),K(a,"SID",s.M),K(a,"AID",s.K),K(a,"CI",s.F?"0":"1"),!s.F&&s.ia&&K(a,"TO",s.ia),K(a,"TYPE","xmlhttp"),on(s,a),s.u&&s.o&&Jr(a,s.u,s.o),s.O&&(s.g.H=s.O);var l=s.g;s=s.ba,l.M=1,l.A=Fn(Ot(a)),l.u=null,l.R=!0,ji(l,s)}n.Va=function(){this.C!=null&&(this.C=null,jn(this),Zr(this),Et(19))};function qn(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function mo(s,a){var l=null;if(s.g==a){qn(s),ts(s),s.g=null;var h=2}else if(Kr(s.h,a))l=a.G,Ki(s.h,a),h=1;else return;if(s.I!=0){if(a.o)if(h==1){l=a.u?a.u.length:0,a=Date.now()-a.F;var I=s.D;h=xn(),yt(h,new Mi(h,l)),$n(s)}else fo(s);else if(I=a.m,I==3||I==0&&a.X>0||!(h==1&&Iu(s,a)||h==2&&Zr(s)))switch(l&&l.length>0&&(a=s.h,a.i=a.i.concat(l)),I){case 1:he(s,5);break;case 4:he(s,10);break;case 3:he(s,6);break;default:he(s,2)}}}function go(s,a){let l=s.Qa+Math.floor(Math.random()*s.Za);return s.isActive()||(l*=2),l*a}function he(s,a){if(s.j.info("Error code "+a),a==2){var l=d(s.bb,s),h=s.Ua;const I=!h;h=new Wt(h||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Je(h,"https"),Fn(h),I?gu(h.toString(),l):_u(h.toString(),l)}else Et(2);s.I=0,s.l&&s.l.pa(a),_o(s),lo(s)}n.bb=function(s){s?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function _o(s){if(s.I=0,s.ja=[],s.l){const a=Wi(s.h);(a.length!=0||s.i.length!=0)&&(N(s.ja,a),N(s.ja,s.i),s.h.i.length=0,P(s.i),s.i.length=0),s.l.oa()}}function yo(s,a,l){var h=l instanceof Wt?Ot(l):new Wt(l);if(h.g!="")a&&(h.g=a+"."+h.g),Ye(h,h.u);else{var I=c.location;h=I.protocol,a=a?a+"."+I.hostname:I.hostname,I=+I.port;const v=new Wt(null);h&&Je(v,h),a&&(v.g=a),I&&Ye(v,I),l&&(v.h=l),h=v}return l=s.G,a=s.wa,l&&a&&K(h,l,a),K(h,"VER",s.ka),on(s,h),h}function Eo(s,a,l){if(a&&!s.L)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Aa&&!s.ma?new J(new Xr({ab:l})):new J(s.ma),a.Fa(s.L),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function To(){}n=To.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function zn(){}zn.prototype.g=function(s,a){return new Rt(s,a)};function Rt(s,a){dt.call(this),this.g=new co(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.sa&&(s?s["X-WebChannel-Client-Profile"]=a.sa:s={"X-WebChannel-Client-Profile":a.sa}),this.g.U=s,(s=a&&a.Qb)&&!m(s)&&(this.g.u=s),this.A=a&&a.supportsCrossDomainXhr||!1,this.v=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!m(a)&&(this.g.G=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new De(this)}w(Rt,dt),Rt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){Yr(this.g)},Rt.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.v&&(l={},l.__data__=Ur(s),s=l);a.i.push(new cu(a.Ya++,s)),a.I==3&&$n(a)},Rt.prototype.N=function(){this.g.l=null,delete this.j,Yr(this.g),delete this.g,Rt.Z.N.call(this)};function wo(s){Br.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const l in a){s=l;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}w(wo,Br);function Io(){jr.call(this),this.status=1}w(Io,jr);function De(s){this.g=s}w(De,To),De.prototype.ra=function(){yt(this.g,"a")},De.prototype.qa=function(s){yt(this.g,new wo(s))},De.prototype.pa=function(s){yt(this.g,new Io)},De.prototype.oa=function(){yt(this.g,"b")},zn.prototype.createWebChannel=zn.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,vc=function(){return new zn},Ac=function(){return xn()},Ic=ce,ws={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Mn.NO_ERROR=0,Mn.TIMEOUT=8,Mn.HTTP_ERROR=6,tr=Mn,Li.COMPLETE="complete",wc=Li,Ni.EventType=He,He.OPEN="a",He.CLOSE="b",He.ERROR="c",He.MESSAGE="d",dt.prototype.listen=dt.prototype.J,ln=Ni,J.prototype.listenOnce=J.prototype.K,J.prototype.getLastError=J.prototype.Ha,J.prototype.getLastErrorCode=J.prototype.ya,J.prototype.getStatus=J.prototype.ca,J.prototype.getResponseJson=J.prototype.La,J.prototype.getResponseText=J.prototype.la,J.prototype.send=J.prototype.ea,J.prototype.setWithCredentials=J.prototype.Fa,Tc=J}).apply(typeof Gn<"u"?Gn:typeof self<"u"?self:typeof window<"u"?window:{});const zo="@firebase/firestore",Ho="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $e="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we=new xs("@firebase/firestore");function Ve(){return we.logLevel}function V(n,...t){if(we.logLevel<=B.DEBUG){const e=t.map(Hs);we.debug(`Firestore (${$e}): ${n}`,...e)}}function Ie(n,...t){if(we.logLevel<=B.ERROR){const e=t.map(Hs);we.error(`Firestore (${$e}): ${n}`,...e)}}function Ar(n,...t){if(we.logLevel<=B.WARN){const e=t.map(Hs);we.warn(`Firestore (${$e}): ${n}`,...e)}}function Hs(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(e){return JSON.stringify(e)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Rc(n,r,e)}function Rc(n,t,e){let r=`FIRESTORE (${$e}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw Ie(r),new Error(r)}function Y(n,t,e,r){let i="Unexpected state";typeof e=="string"?i=e:r=e,n||Rc(t,i,r)}function G(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends Gt{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Rd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(mt.UNAUTHENTICATED)))}shutdown(){}}class bd{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Sd{constructor(t){this.t=t,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Y(this.o===void 0,42304);let r=this.i;const i=f=>this.i!==r?(r=this.i,e(f)):Promise.resolve();let o=new ge;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ge,t.enqueueRetryable((()=>i(this.currentUser)))};const c=()=>{const f=o;t.enqueueRetryable((async()=>{await f.promise,await i(this.currentUser)}))},u=f=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((f=>u(f))),setTimeout((()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?u(f):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ge)}}),0),c()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((r=>this.i!==t?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Y(typeof r.accessToken=="string",31837,{l:r}),new bc(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Y(t===null||typeof t=="string",2055,{h:t}),new mt(t)}}class Cd{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Pd{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new Cd(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(mt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Go{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Dd{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Wa(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){Y(this.o===void 0,3512);const r=o=>{o.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const c=o.token!==this.m;return this.m=o.token,V("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable((()=>r(o)))};const i=o=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>i(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Go(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(Y(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Go(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Vd(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%62))}return r}}function q(n,t){return n<t?-1:n>t?1:0}function Is(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const i=n.charAt(r),o=t.charAt(r);if(i!==o)return ls(i)===ls(o)?q(i,o):ls(i)?1:-1}return q(n.length,t.length)}const Nd=55296,kd=57343;function ls(n){const t=n.charCodeAt(0);return t>=Nd&&t<=kd}function Me(n,t,e){return n.length===t.length&&n.every(((r,i)=>e(r,t[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko="__name__";class Mt{constructor(t,e,r){e===void 0?e=0:e>t.length&&L(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&L(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Mt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Mt?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=Mt.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return q(t.length,e.length)}static compareSegments(t,e){const r=Mt.isNumericId(t),i=Mt.isNumericId(e);return r&&!i?-1:!r&&i?1:r&&i?Mt.extractNumericId(t).compare(Mt.extractNumericId(e)):Is(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return zs.fromString(t.substring(4,t.length-2))}}class X extends Mt{construct(t,e,r){return new X(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new k(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((i=>i.length>0)))}return new X(e)}static emptyPath(){return new X([])}}const Od=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends Mt{construct(t,e,r){return new ht(t,e,r)}static isValidIdentifier(t){return Od.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ko}static keyField(){return new ht([Ko])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new k(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let c=!1;for(;i<t.length;){const u=t[i];if(u==="\\"){if(i+1===t.length)throw new k(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const f=t[i+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new k(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=f,i+=2}else u==="`"?(c=!c,i++):u!=="."||c?(r+=u,i++):(o(),i++)}if(o(),c)throw new k(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ht(e)}static emptyPath(){return new ht([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(t){this.path=t}static fromPath(t){return new x(X.fromString(t))}static fromName(t){return new x(X.fromString(t).popFirst(5))}static empty(){return new x(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new x(new X(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(n,t,e){if(!e)throw new k(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function xd(n,t,e,r){if(t===!0&&r===!0)throw new k(S.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Wo(n){if(!x.isDocumentKey(n))throw new k(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Qo(n){if(x.isDocumentKey(n))throw new k(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Cc(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ks(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":L(12329,{type:typeof n})}function Pc(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new k(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ks(n);throw new k(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */function nt(n,t){const e={typeString:n};return t&&(e.value=t),e}function Rn(n,t){if(!Cc(n))throw new k(S.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const i=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const c=n[r];if(i&&typeof c!==i){e=`JSON field '${r}' must be a ${i}.`;break}if(o!==void 0&&c!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new k(S.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo=-62135596800,Jo=1e6;class Q{static now(){return Q.fromMillis(Date.now())}static fromDate(t){return Q.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Jo);return new Q(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new k(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new k(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Xo)throw new k(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new k(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Jo}_compareTo(t){return this.seconds===t.seconds?q(this.nanoseconds,t.nanoseconds):q(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Q._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Rn(t,Q._jsonSchema))return new Q(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Xo;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Q._jsonSchemaVersion="firestore/timestamp/1.0",Q._jsonSchema={type:nt("string",Q._jsonSchemaVersion),seconds:nt("number"),nanoseconds:nt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{static fromTimestamp(t){return new W(t)}static min(){return new W(new Q(0,0))}static max(){return new W(new Q(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const En=-1;function Md(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=W.fromTimestamp(r===1e9?new Q(e+1,0):new Q(e,r));return new re(i,x.empty(),t)}function Ld(n){return new re(n.readTime,n.key,En)}class re{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new re(W.min(),x.empty(),En)}static max(){return new re(W.max(),x.empty(),En)}}function Fd(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=x.comparator(n.documentKey,t.documentKey),e!==0?e:q(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Bd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ws(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==Ud)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new b(((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof b?e:b.resolve(e)}catch(e){return b.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):b.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):b.reject(e)}static resolve(t){return new b(((e,r)=>{e(t)}))}static reject(t){return new b(((e,r)=>{r(t)}))}static waitFor(t){return new b(((e,r)=>{let i=0,o=0,c=!1;t.forEach((u=>{++i,u.next((()=>{++o,c&&o===i&&e()}),(f=>r(f)))})),c=!0,o===i&&e()}))}static or(t){let e=b.resolve(!1);for(const r of t)e=e.next((i=>i?b.resolve(i):r()));return e}static forEach(t,e){const r=[];return t.forEach(((i,o)=>{r.push(e.call(this,i,o))})),this.waitFor(r)}static mapArray(t,e){return new b(((r,i)=>{const o=t.length,c=new Array(o);let u=0;for(let f=0;f<o;f++){const d=f;e(t[d]).next((T=>{c[d]=T,++u,u===o&&r(c)}),(T=>i(T)))}}))}static doWhile(t,e){return new b(((r,i)=>{const o=()=>{t()===!0?e().next((()=>{o()}),i):r()};o()}))}}function jd(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function bn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Qs{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Qs.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs=-1;function Js(n){return n==null}function lr(n){return n===0&&1/n==-1/0}function $d(n){return typeof n=="number"&&Number.isInteger(n)&&!lr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc="";function qd(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Yo(t)),t=zd(n.get(e),t);return Yo(t)}function zd(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":e+="";break;case Dc:e+="";break;default:e+=o}}return e}function Yo(n){return n+Dc+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function qe(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Vc(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t,e){this.comparator=t,this.root=e||lt.EMPTY}insert(t,e){return new vt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(t){return new vt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,lt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Kn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Kn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Kn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Kn(this.root,t,this.comparator,!0)}}class Kn{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class lt{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??lt.RED,this.left=i??lt.EMPTY,this.right=o??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new lt(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return lt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw L(43730,{key:this.key,value:this.value});if(this.right.isRed())throw L(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw L(27949);return t+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw L(57766)}get value(){throw L(16141)}get color(){throw L(16727)}get left(){throw L(29726)}get right(){throw L(36894)}copy(t,e,r,i,o){return this}insert(t,e,r){return new lt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(t){this.comparator=t,this.data=new vt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,r)=>(t(e),!1)))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ta(this.data.getIterator())}getIteratorFrom(t){return new ta(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((r=>{e=e.add(r)})),e}isEqual(t){if(!(t instanceof ft)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new ft(this.comparator);return e.data=t,e}}class ta{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(t){this.fields=t,t.sort(ht.comparator)}static empty(){return new kt([])}unionWith(t){let e=new ft(ht.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new kt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Me(this.fields,t.fields,((e,r)=>e.isEqual(r)))}}/**
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
 */class Hd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Hd("Invalid base64 string: "+o):o}})(t);return new Ut(e)}static fromUint8Array(t){const e=(function(i){let o="";for(let c=0;c<i.length;++c)o+=String.fromCharCode(i[c]);return o})(t);return new Ut(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return q(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ut.EMPTY_BYTE_STRING=new Ut("");const Gd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ae(n){if(Y(!!n,39018),typeof n=="string"){let t=0;const e=Gd.exec(n);if(Y(!!e,46558,{timestamp:n}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ut(n.seconds),nanos:ut(n.nanos)}}function ut(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Le(n){return typeof n=="string"?Ut.fromBase64String(n):Ut.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc="server_timestamp",kc="__type__",Oc="__previous_value__",xc="__local_write_time__";function Ys(n){return(n?.mapValue?.fields||{})[kc]?.stringValue===Nc}function Zs(n){const t=n.mapValue.fields[Oc];return Ys(t)?Zs(t):t}function ur(n){const t=Ae(n.mapValue.fields[xc].timestampValue);return new Q(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(t,e,r,i,o,c,u,f,d,T){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=c,this.autoDetectLongPolling=u,this.longPollingOptions=f,this.useFetchStreams=d,this.isUsingEmulator=T}}const hr="(default)";class fr{constructor(t,e){this.projectId=t,this.database=e||hr}static empty(){return new fr("","")}get isDefaultDatabase(){return this.database===hr}isEqual(t){return t instanceof fr&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc="__type__",Wd="__max__",Wn={mapValue:{}},Lc="__vector__",As="value";function ve(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ys(n)?4:Xd(n)?9007199254740991:Qd(n)?10:11:L(28295,{value:n})}function Bt(n,t){if(n===t)return!0;const e=ve(n);if(e!==ve(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return ur(n).isEqual(ur(t));case 3:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const c=Ae(i.timestampValue),u=Ae(o.timestampValue);return c.seconds===u.seconds&&c.nanos===u.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(i,o){return Le(i.bytesValue).isEqual(Le(o.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(i,o){return ut(i.geoPointValue.latitude)===ut(o.geoPointValue.latitude)&&ut(i.geoPointValue.longitude)===ut(o.geoPointValue.longitude)})(n,t);case 2:return(function(i,o){if("integerValue"in i&&"integerValue"in o)return ut(i.integerValue)===ut(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const c=ut(i.doubleValue),u=ut(o.doubleValue);return c===u?lr(c)===lr(u):isNaN(c)&&isNaN(u)}return!1})(n,t);case 9:return Me(n.arrayValue.values||[],t.arrayValue.values||[],Bt);case 10:case 11:return(function(i,o){const c=i.mapValue.fields||{},u=o.mapValue.fields||{};if(Zo(c)!==Zo(u))return!1;for(const f in c)if(c.hasOwnProperty(f)&&(u[f]===void 0||!Bt(c[f],u[f])))return!1;return!0})(n,t);default:return L(52216,{left:n})}}function Tn(n,t){return(n.values||[]).find((e=>Bt(e,t)))!==void 0}function Fe(n,t){if(n===t)return 0;const e=ve(n),r=ve(t);if(e!==r)return q(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return q(n.booleanValue,t.booleanValue);case 2:return(function(o,c){const u=ut(o.integerValue||o.doubleValue),f=ut(c.integerValue||c.doubleValue);return u<f?-1:u>f?1:u===f?0:isNaN(u)?isNaN(f)?0:-1:1})(n,t);case 3:return ea(n.timestampValue,t.timestampValue);case 4:return ea(ur(n),ur(t));case 5:return Is(n.stringValue,t.stringValue);case 6:return(function(o,c){const u=Le(o),f=Le(c);return u.compareTo(f)})(n.bytesValue,t.bytesValue);case 7:return(function(o,c){const u=o.split("/"),f=c.split("/");for(let d=0;d<u.length&&d<f.length;d++){const T=q(u[d],f[d]);if(T!==0)return T}return q(u.length,f.length)})(n.referenceValue,t.referenceValue);case 8:return(function(o,c){const u=q(ut(o.latitude),ut(c.latitude));return u!==0?u:q(ut(o.longitude),ut(c.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return na(n.arrayValue,t.arrayValue);case 10:return(function(o,c){const u=o.fields||{},f=c.fields||{},d=u[As]?.arrayValue,T=f[As]?.arrayValue,w=q(d?.values?.length||0,T?.values?.length||0);return w!==0?w:na(d,T)})(n.mapValue,t.mapValue);case 11:return(function(o,c){if(o===Wn.mapValue&&c===Wn.mapValue)return 0;if(o===Wn.mapValue)return 1;if(c===Wn.mapValue)return-1;const u=o.fields||{},f=Object.keys(u),d=c.fields||{},T=Object.keys(d);f.sort(),T.sort();for(let w=0;w<f.length&&w<T.length;++w){const R=Is(f[w],T[w]);if(R!==0)return R;const P=Fe(u[f[w]],d[T[w]]);if(P!==0)return P}return q(f.length,T.length)})(n.mapValue,t.mapValue);default:throw L(23264,{he:e})}}function ea(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return q(n,t);const e=Ae(n),r=Ae(t),i=q(e.seconds,r.seconds);return i!==0?i:q(e.nanos,r.nanos)}function na(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=Fe(e[i],r[i]);if(o)return o}return q(e.length,r.length)}function Ue(n){return vs(n)}function vs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const r=Ae(e);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return Le(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return x.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=vs(o);return r+"]"})(n.arrayValue):"mapValue"in n?(function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const c of r)o?o=!1:i+=",",i+=`${c}:${vs(e.fields[c])}`;return i+"}"})(n.mapValue):L(61005,{value:n})}function er(n){switch(ve(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Zs(n);return t?16+er(t):16;case 5:return 2*n.stringValue.length;case 6:return Le(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((i,o)=>i+er(o)),0)})(n.arrayValue);case 10:case 11:return(function(r){let i=0;return qe(r.fields,((o,c)=>{i+=o.length+er(c)})),i})(n.mapValue);default:throw L(13486,{value:n})}}function Rs(n){return!!n&&"integerValue"in n}function ti(n){return!!n&&"arrayValue"in n}function nr(n){return!!n&&"mapValue"in n}function Qd(n){return(n?.mapValue?.fields||{})[Mc]?.stringValue===Lc}function hn(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return qe(n.mapValue.fields,((e,r)=>t.mapValue.fields[e]=hn(r))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=hn(n.arrayValue.values[e]);return t}return{...n}}function Xd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Wd}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this.value=t}static empty(){return new Vt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!nr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=hn(e)}setAll(t){let e=ht.emptyPath(),r={},i=[];t.forEach(((c,u)=>{if(!e.isImmediateParentOf(u)){const f=this.getFieldsMap(e);this.applyChanges(f,r,i),r={},i=[],e=u.popLast()}c?r[u.lastSegment()]=hn(c):i.push(u.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());nr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Bt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];nr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){qe(e,((i,o)=>t[i]=o));for(const i of r)delete t[i]}clone(){return new Vt(hn(this.value))}}function Fc(n){const t=[];return qe(n.fields,((e,r)=>{const i=new ht([e]);if(nr(r)){const o=Fc(r.mapValue).fields;if(o.length===0)t.push(i);else for(const c of o)t.push(i.child(c))}else t.push(i)})),new kt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(t,e,r,i,o,c,u){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=c,this.documentState=u}static newInvalidDocument(t){return new Dt(t,0,W.min(),W.min(),W.min(),Vt.empty(),0)}static newFoundDocument(t,e,r,i){return new Dt(t,1,e,W.min(),r,i,0)}static newNoDocument(t,e){return new Dt(t,2,e,W.min(),W.min(),Vt.empty(),0)}static newUnknownDocument(t,e){return new Dt(t,3,e,W.min(),W.min(),Vt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Dt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class dr{constructor(t,e){this.position=t,this.inclusive=e}}function ra(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],c=n.position[i];if(o.field.isKeyField()?r=x.comparator(x.fromName(c.referenceValue),e.key):r=Fe(c,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function sa(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Bt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class pr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Jd(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Uc{}class at extends Uc{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Zd(t,e,r):e==="array-contains"?new np(t,r):e==="in"?new rp(t,r):e==="not-in"?new sp(t,r):e==="array-contains-any"?new ip(t,r):new at(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new tp(t,r):new ep(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Fe(e,this.value)):e!==null&&ve(this.value)===ve(e)&&this.matchesComparison(Fe(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class se extends Uc{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new se(t,e)}matches(t){return Bc(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Bc(n){return n.op==="and"}function jc(n){return Yd(n)&&Bc(n)}function Yd(n){for(const t of n.filters)if(t instanceof se)return!1;return!0}function bs(n){if(n instanceof at)return n.field.canonicalString()+n.op.toString()+Ue(n.value);if(jc(n))return n.filters.map((t=>bs(t))).join(",");{const t=n.filters.map((e=>bs(e))).join(",");return`${n.op}(${t})`}}function $c(n,t){return n instanceof at?(function(r,i){return i instanceof at&&r.op===i.op&&r.field.isEqual(i.field)&&Bt(r.value,i.value)})(n,t):n instanceof se?(function(r,i){return i instanceof se&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((o,c,u)=>o&&$c(c,i.filters[u])),!0):!1})(n,t):void L(19439)}function qc(n){return n instanceof at?(function(e){return`${e.field.canonicalString()} ${e.op} ${Ue(e.value)}`})(n):n instanceof se?(function(e){return e.op.toString()+" {"+e.getFilters().map(qc).join(" ,")+"}"})(n):"Filter"}class Zd extends at{constructor(t,e,r){super(t,e,r),this.key=x.fromName(r.referenceValue)}matches(t){const e=x.comparator(t.key,this.key);return this.matchesComparison(e)}}class tp extends at{constructor(t,e){super(t,"in",e),this.keys=zc("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class ep extends at{constructor(t,e){super(t,"not-in",e),this.keys=zc("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function zc(n,t){return(t.arrayValue?.values||[]).map((e=>x.fromName(e.referenceValue)))}class np extends at{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ti(e)&&Tn(e.arrayValue,this.value)}}class rp extends at{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Tn(this.value.arrayValue,e)}}class sp extends at{constructor(t,e){super(t,"not-in",e)}matches(t){if(Tn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Tn(this.value.arrayValue,e)}}class ip extends at{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ti(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>Tn(this.value.arrayValue,r)))}}/**
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
 */class op{constructor(t,e=null,r=[],i=[],o=null,c=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=c,this.endAt=u,this.Te=null}}function ia(n,t=null,e=[],r=[],i=null,o=null,c=null){return new op(n,t,e,r,i,o,c)}function ei(n){const t=G(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((r=>bs(r))).join(","),e+="|ob:",e+=t.orderBy.map((r=>(function(o){return o.field.canonicalString()+o.dir})(r))).join(","),Js(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((r=>Ue(r))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((r=>Ue(r))).join(",")),t.Te=e}return t.Te}function ni(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Jd(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!$c(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!sa(n.startAt,t.startAt)&&sa(n.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(t,e=null,r=[],i=[],o=null,c="F",u=null,f=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=c,this.startAt=u,this.endAt=f,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function ap(n,t,e,r,i,o,c,u){return new vr(n,t,e,r,i,o,c,u)}function cp(n){return new vr(n)}function oa(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function lp(n){return n.collectionGroup!==null}function fn(n){const t=G(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(c){let u=new ft(ht.comparator);return c.filters.forEach((f=>{f.getFlattenedFilters().forEach((d=>{d.isInequality()&&(u=u.add(d.field))}))})),u})(t).forEach((o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new pr(o,r))})),e.has(ht.keyField().canonicalString())||t.Ie.push(new pr(ht.keyField(),r))}return t.Ie}function _e(n){const t=G(n);return t.Ee||(t.Ee=up(t,fn(n))),t.Ee}function up(n,t){if(n.limitType==="F")return ia(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((i=>{const o=i.dir==="desc"?"asc":"desc";return new pr(i.field,o)}));const e=n.endAt?new dr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new dr(n.startAt.position,n.startAt.inclusive):null;return ia(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Ss(n,t,e){return new vr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Hc(n,t){return ni(_e(n),_e(t))&&n.limitType===t.limitType}function Gc(n){return`${ei(_e(n))}|lt:${n.limitType}`}function an(n){return`Query(target=${(function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map((i=>qc(i))).join(", ")}]`),Js(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map((i=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(i))).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map((i=>Ue(i))).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map((i=>Ue(i))).join(",")),`Target(${r})`})(_e(n))}; limitType=${n.limitType})`}function ri(n,t){return t.isFoundDocument()&&(function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):x.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)})(n,t)&&(function(r,i){for(const o of fn(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0})(n,t)&&(function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0})(n,t)&&(function(r,i){return!(r.startAt&&!(function(c,u,f){const d=ra(c,u,f);return c.inclusive?d<=0:d<0})(r.startAt,fn(r),i)||r.endAt&&!(function(c,u,f){const d=ra(c,u,f);return c.inclusive?d>=0:d>0})(r.endAt,fn(r),i))})(n,t)}function hp(n){return(t,e)=>{let r=!1;for(const i of fn(n)){const o=fp(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function fp(n,t,e){const r=n.field.isKeyField()?x.comparator(t.key,e.key):(function(o,c,u){const f=c.data.field(o),d=u.data.field(o);return f!==null&&d!==null?Fe(f,d):L(42886)})(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return L(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){qe(this.inner,((e,r)=>{for(const[i,o]of r)t(i,o)}))}isEmpty(){return Vc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp=new vt(x.comparator);function mr(){return dp}const Kc=new vt(x.comparator);function Qn(...n){let t=Kc;for(const e of n)t=t.insert(e.key,e);return t}function Wc(n){let t=Kc;return n.forEach(((e,r)=>t=t.insert(e,r.overlayedDocument))),t}function me(){return dn()}function Qc(){return dn()}function dn(){return new be((n=>n.toString()),((n,t)=>n.isEqual(t)))}const pp=new vt(x.comparator),mp=new ft(x.comparator);function gt(...n){let t=mp;for(const e of n)t=t.add(e);return t}const gp=new ft(q);function _p(){return gp}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:lr(t)?"-0":t}}function Xc(n){return{integerValue:""+n}}function yp(n,t){return $d(t)?Xc(t):si(n,t)}/**
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
 */class Rr{constructor(){this._=void 0}}function Ep(n,t,e){return n instanceof wn?(function(i,o){const c={fields:{[kc]:{stringValue:Nc},[xc]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Ys(o)&&(o=Zs(o)),o&&(c.fields[Oc]=o),{mapValue:c}})(e,t):n instanceof In?Yc(n,t):n instanceof An?Zc(n,t):(function(i,o){const c=Jc(i,o),u=aa(c)+aa(i.Ae);return Rs(c)&&Rs(i.Ae)?Xc(u):si(i.serializer,u)})(n,t)}function Tp(n,t,e){return n instanceof In?Yc(n,t):n instanceof An?Zc(n,t):e}function Jc(n,t){return n instanceof gr?(function(r){return Rs(r)||(function(o){return!!o&&"doubleValue"in o})(r)})(t)?t:{integerValue:0}:null}class wn extends Rr{}class In extends Rr{constructor(t){super(),this.elements=t}}function Yc(n,t){const e=tl(t);for(const r of n.elements)e.some((i=>Bt(i,r)))||e.push(r);return{arrayValue:{values:e}}}class An extends Rr{constructor(t){super(),this.elements=t}}function Zc(n,t){let e=tl(t);for(const r of n.elements)e=e.filter((i=>!Bt(i,r)));return{arrayValue:{values:e}}}class gr extends Rr{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function aa(n){return ut(n.integerValue||n.doubleValue)}function tl(n){return ti(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(t,e){this.field=t,this.transform=e}}function Ip(n,t){return n.field.isEqual(t.field)&&(function(r,i){return r instanceof In&&i instanceof In||r instanceof An&&i instanceof An?Me(r.elements,i.elements,Bt):r instanceof gr&&i instanceof gr?Bt(r.Ae,i.Ae):r instanceof wn&&i instanceof wn})(n.transform,t.transform)}class Ap{constructor(t,e){this.version=t,this.transformResults=e}}class jt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new jt}static exists(t){return new jt(void 0,t)}static updateTime(t){return new jt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function rr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class br{}function el(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new rl(n.key,jt.none()):new Sn(n.key,n.data,jt.none());{const e=n.data,r=Vt.empty();let i=new ft(ht.comparator);for(let o of t.fields)if(!i.has(o)){let c=e.field(o);c===null&&o.length>1&&(o=o.popLast(),c=e.field(o)),c===null?r.delete(o):r.set(o,c),i=i.add(o)}return new Se(n.key,r,new kt(i.toArray()),jt.none())}}function vp(n,t,e){n instanceof Sn?(function(i,o,c){const u=i.value.clone(),f=la(i.fieldTransforms,o,c.transformResults);u.setAll(f),o.convertToFoundDocument(c.version,u).setHasCommittedMutations()})(n,t,e):n instanceof Se?(function(i,o,c){if(!rr(i.precondition,o))return void o.convertToUnknownDocument(c.version);const u=la(i.fieldTransforms,o,c.transformResults),f=o.data;f.setAll(nl(i)),f.setAll(u),o.convertToFoundDocument(c.version,f).setHasCommittedMutations()})(n,t,e):(function(i,o,c){o.convertToNoDocument(c.version).setHasCommittedMutations()})(0,t,e)}function pn(n,t,e,r){return n instanceof Sn?(function(o,c,u,f){if(!rr(o.precondition,c))return u;const d=o.value.clone(),T=ua(o.fieldTransforms,f,c);return d.setAll(T),c.convertToFoundDocument(c.version,d).setHasLocalMutations(),null})(n,t,e,r):n instanceof Se?(function(o,c,u,f){if(!rr(o.precondition,c))return u;const d=ua(o.fieldTransforms,f,c),T=c.data;return T.setAll(nl(o)),T.setAll(d),c.convertToFoundDocument(c.version,T).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((w=>w.field)))})(n,t,e,r):(function(o,c,u){return rr(o.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):u})(n,t,e)}function Rp(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),o=Jc(r.transform,i||null);o!=null&&(e===null&&(e=Vt.empty()),e.set(r.field,o))}return e||null}function ca(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Me(r,i,((o,c)=>Ip(o,c)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Sn extends br{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Se extends br{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function nl(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}})),t}function la(n,t,e){const r=new Map;Y(n.length===e.length,32656,{Re:e.length,Ve:n.length});for(let i=0;i<e.length;i++){const o=n[i],c=o.transform,u=t.data.field(o.field);r.set(o.field,Tp(c,u,e[i]))}return r}function ua(n,t,e){const r=new Map;for(const i of n){const o=i.transform,c=e.data.field(i.field);r.set(i.field,Ep(o,c,t))}return r}class rl extends br{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bp extends br{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&vp(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=pn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=pn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Qc();return this.mutations.forEach((i=>{const o=t.get(i.key),c=o.overlayedDocument;let u=this.applyToLocalView(c,o.mutatedFields);u=e.has(i.key)?null:u;const f=el(c,u);f!==null&&r.set(i.key,f),c.isValidDocument()||c.convertToNoDocument(W.min())})),r}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),gt())}isEqual(t){return this.batchId===t.batchId&&Me(this.mutations,t.mutations,((e,r)=>ca(e,r)))&&Me(this.baseMutations,t.baseMutations,((e,r)=>ca(e,r)))}}class ii{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){Y(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let i=(function(){return pp})();const o=t.mutations;for(let c=0;c<o.length;c++)i=i.insert(o[c].key,r[c].version);return new ii(t,e,r,i)}}/**
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
 */class Cp{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */var et,U;function Pp(n){switch(n){case S.OK:return L(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return L(15467,{code:n})}}function Dp(n){if(n===void 0)return Ie("GRPC error has no .code"),S.UNKNOWN;switch(n){case et.OK:return S.OK;case et.CANCELLED:return S.CANCELLED;case et.UNKNOWN:return S.UNKNOWN;case et.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case et.INTERNAL:return S.INTERNAL;case et.UNAVAILABLE:return S.UNAVAILABLE;case et.UNAUTHENTICATED:return S.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case et.NOT_FOUND:return S.NOT_FOUND;case et.ALREADY_EXISTS:return S.ALREADY_EXISTS;case et.PERMISSION_DENIED:return S.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case et.ABORTED:return S.ABORTED;case et.OUT_OF_RANGE:return S.OUT_OF_RANGE;case et.UNIMPLEMENTED:return S.UNIMPLEMENTED;case et.DATA_LOSS:return S.DATA_LOSS;default:return L(39323,{code:n})}}(U=et||(et={}))[U.OK=0]="OK",U[U.CANCELLED=1]="CANCELLED",U[U.UNKNOWN=2]="UNKNOWN",U[U.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",U[U.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",U[U.NOT_FOUND=5]="NOT_FOUND",U[U.ALREADY_EXISTS=6]="ALREADY_EXISTS",U[U.PERMISSION_DENIED=7]="PERMISSION_DENIED",U[U.UNAUTHENTICATED=16]="UNAUTHENTICATED",U[U.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",U[U.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",U[U.ABORTED=10]="ABORTED",U[U.OUT_OF_RANGE=11]="OUT_OF_RANGE",U[U.UNIMPLEMENTED=12]="UNIMPLEMENTED",U[U.INTERNAL=13]="INTERNAL",U[U.UNAVAILABLE=14]="UNAVAILABLE",U[U.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new zs([4294967295,4294967295],0);class Vp{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Cs(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Np(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function kp(n,t){return Cs(n,t.toTimestamp())}function Oe(n){return Y(!!n,49232),W.fromTimestamp((function(e){const r=Ae(e);return new Q(r.seconds,r.nanos)})(n))}function sl(n,t){return Ps(n,t).canonicalString()}function Ps(n,t){const e=(function(i){return new X(["projects",i.projectId,"databases",i.database])})(n).child("documents");return t===void 0?e:e.child(t)}function Op(n){const t=X.fromString(n);return Y($p(t),10190,{key:t.toString()}),t}function Ds(n,t){return sl(n.databaseId,t.path)}function xp(n){const t=Op(n);return t.length===4?X.emptyPath():Lp(t)}function Mp(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Lp(n){return Y(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function ha(n,t,e){return{name:Ds(n,t),fields:e.value.mapValue.fields}}function Fp(n,t){let e;if(t instanceof Sn)e={update:ha(n,t.key,t.value)};else if(t instanceof rl)e={delete:Ds(n,t.key)};else if(t instanceof Se)e={update:ha(n,t.key,t.data),updateMask:jp(t.fieldMask)};else{if(!(t instanceof bp))return L(16599,{Vt:t.type});e={verify:Ds(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((r=>(function(o,c){const u=c.transform;if(u instanceof wn)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof In)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof An)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof gr)return{fieldPath:c.field.canonicalString(),increment:u.Ae};throw L(20930,{transform:c.transform})})(0,r)))),t.precondition.isNone||(e.currentDocument=(function(i,o){return o.updateTime!==void 0?{updateTime:kp(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:L(27497)})(n,t.precondition)),e}function Up(n,t){return n&&n.length>0?(Y(t!==void 0,14353),n.map((e=>(function(i,o){let c=i.updateTime?Oe(i.updateTime):Oe(o);return c.isEqual(W.min())&&(c=Oe(o)),new Ap(c,i.transformResults||[])})(e,t)))):[]}function Bp(n){let t=xp(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){Y(r===1,65062);const T=e.from[0];T.allDescendants?i=T.collectionId:t=t.child(T.collectionId)}let o=[];e.where&&(o=(function(w){const R=il(w);return R instanceof se&&jc(R)?R.getFilters():[R]})(e.where));let c=[];e.orderBy&&(c=(function(w){return w.map((R=>(function(N){return new pr(Ne(N.field),(function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(N.direction))})(R)))})(e.orderBy));let u=null;e.limit&&(u=(function(w){let R;return R=typeof w=="object"?w.value:w,Js(R)?null:R})(e.limit));let f=null;e.startAt&&(f=(function(w){const R=!!w.before,P=w.values||[];return new dr(P,R)})(e.startAt));let d=null;return e.endAt&&(d=(function(w){const R=!w.before,P=w.values||[];return new dr(P,R)})(e.endAt)),ap(t,i,c,o,u,"F",f,d)}function il(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Ne(e.unaryFilter.field);return at.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ne(e.unaryFilter.field);return at.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ne(e.unaryFilter.field);return at.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Ne(e.unaryFilter.field);return at.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return L(61313);default:return L(60726)}})(n):n.fieldFilter!==void 0?(function(e){return at.create(Ne(e.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return L(58110);default:return L(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return se.create(e.compositeFilter.filters.map((r=>il(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return L(1026)}})(e.compositeFilter.op))})(n):L(30097,{filter:n})}function Ne(n){return ht.fromServerFormat(n.fieldPath)}function jp(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function $p(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(t){this.yt=t}}function zp(n){const t=Bp({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ss(t,t.limit,"L"):t}/**
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
 */class Hp{constructor(){this.Cn=new Gp}addToCollectionParentIndex(t,e){return this.Cn.add(e),b.resolve()}getCollectionParents(t,e){return b.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return b.resolve()}deleteFieldIndex(t,e){return b.resolve()}deleteAllFieldIndexes(t){return b.resolve()}createTargetIndexes(t,e){return b.resolve()}getDocumentsMatchingTarget(t,e){return b.resolve(null)}getIndexType(t,e){return b.resolve(0)}getFieldIndexes(t,e){return b.resolve([])}getNextCollectionGroupToUpdate(t){return b.resolve(null)}getMinOffset(t,e){return b.resolve(re.min())}getMinOffsetFromCollectionGroup(t,e){return b.resolve(re.min())}updateCollectionGroup(t,e,r){return b.resolve()}updateIndexEntries(t,e){return b.resolve()}}class Gp{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new ft(X.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new ft(X.comparator)).toArray()}}/**
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
 */const fa={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ol=41943040;class At{static withCacheSize(t){return new At(t,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */At.DEFAULT_COLLECTION_PERCENTILE=10,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,At.DEFAULT=new At(ol,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),At.DISABLED=new At(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new Be(0)}static cr(){return new Be(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da="LruGarbageCollector",Kp=1048576;function pa([n,t],[e,r]){const i=q(n,e);return i===0?q(t,r):i}class Wp{constructor(t){this.Ir=t,this.buffer=new ft(pa),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();pa(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Qp{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){V(da,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){bn(e)?V(da,"Ignoring IndexedDB error during garbage collection: ",e):await Ws(e)}await this.Vr(3e5)}))}}class Xp{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next((r=>Math.floor(e/100*r)))}nthSequenceNumber(t,e){if(e===0)return b.resolve(Qs.ce);const r=new Wp(e);return this.mr.forEachTarget(t,(i=>r.Ar(i.sequenceNumber))).next((()=>this.mr.pr(t,(i=>r.Ar(i))))).next((()=>r.maxValue))}removeTargets(t,e,r){return this.mr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(fa)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),fa):this.yr(t,e)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let r,i,o,c,u,f,d;const T=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((w=>(w>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),i=this.params.maximumSequenceNumbersToCollect):i=w,c=Date.now(),this.nthSequenceNumber(t,i)))).next((w=>(r=w,u=Date.now(),this.removeTargets(t,r,e)))).next((w=>(o=w,f=Date.now(),this.removeOrphanedDocuments(t,r)))).next((w=>(d=Date.now(),Ve()<=B.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-T}ms
	Determined least recently used ${i} in `+(u-c)+`ms
	Removed ${o} targets in `+(f-u)+`ms
	Removed ${w} documents in `+(d-f)+`ms
Total Duration: ${d-T}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:w}))))}}function Jp(n,t){return new Xp(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(){this.changes=new be((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Dt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?b.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Zp{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(r=i,this.remoteDocumentCache.getEntry(t,e)))).next((i=>(r!==null&&pn(r.mutation,i,kt.empty(),Q.now()),i)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.getLocalViewOfDocuments(t,r,gt()).next((()=>r))))}getLocalViewOfDocuments(t,e,r=gt()){const i=me();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,r).next((o=>{let c=Qn();return o.forEach(((u,f)=>{c=c.insert(u,f.overlayedDocument)})),c}))))}getOverlayedDocuments(t,e){const r=me();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,gt())))}populateOverlays(t,e,r){const i=[];return r.forEach((o=>{e.has(o)||i.push(o)})),this.documentOverlayCache.getOverlays(t,i).next((o=>{o.forEach(((c,u)=>{e.set(c,u)}))}))}computeViews(t,e,r,i){let o=mr();const c=dn(),u=(function(){return dn()})();return e.forEach(((f,d)=>{const T=r.get(d.key);i.has(d.key)&&(T===void 0||T.mutation instanceof Se)?o=o.insert(d.key,d):T!==void 0?(c.set(d.key,T.mutation.getFieldMask()),pn(T.mutation,d,T.mutation.getFieldMask(),Q.now())):c.set(d.key,kt.empty())})),this.recalculateAndSaveOverlays(t,o).next((f=>(f.forEach(((d,T)=>c.set(d,T))),e.forEach(((d,T)=>u.set(d,new Zp(T,c.get(d)??null)))),u)))}recalculateAndSaveOverlays(t,e){const r=dn();let i=new vt(((c,u)=>c-u)),o=gt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((c=>{for(const u of c)u.keys().forEach((f=>{const d=e.get(f);if(d===null)return;let T=r.get(f)||kt.empty();T=u.applyToLocalView(d,T),r.set(f,T);const w=(i.get(u.batchId)||gt()).add(f);i=i.insert(u.batchId,w)}))})).next((()=>{const c=[],u=i.getReverseIterator();for(;u.hasNext();){const f=u.getNext(),d=f.key,T=f.value,w=Qc();T.forEach((R=>{if(!o.has(R)){const P=el(e.get(R),r.get(R));P!==null&&w.set(R,P),o=o.add(R)}})),c.push(this.documentOverlayCache.saveOverlays(t,d,w))}return b.waitFor(c)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,e,r,i){return(function(c){return x.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):lp(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next((o=>{const c=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):b.resolve(me());let u=En,f=o;return c.next((d=>b.forEach(d,((T,w)=>(u<w.largestBatchId&&(u=w.largestBatchId),o.get(T)?b.resolve():this.remoteDocumentCache.getEntry(t,T).next((R=>{f=f.insert(T,R)}))))).next((()=>this.populateOverlays(t,d,o))).next((()=>this.computeViews(t,f,d,gt()))).next((T=>({batchId:u,changes:Wc(T)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new x(e)).next((r=>{let i=Qn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let c=Qn();return this.indexManager.getCollectionParents(t,o).next((u=>b.forEach(u,(f=>{const d=(function(w,R){return new vr(R,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)})(e,f.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,i).next((T=>{T.forEach(((w,R)=>{c=c.insert(w,R)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next((c=>(o=c,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i)))).next((c=>{o.forEach(((f,d)=>{const T=d.getKey();c.get(T)===null&&(c=c.insert(T,Dt.newInvalidDocument(T)))}));let u=Qn();return c.forEach(((f,d)=>{const T=o.get(f);T!==void 0&&pn(T.mutation,d,kt.empty(),Q.now()),ri(e,d)&&(u=u.insert(f,d))})),u}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return b.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,(function(i){return{id:i.id,version:i.version,createTime:Oe(i.createTime)}})(e)),b.resolve()}getNamedQuery(t,e){return b.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,(function(i){return{name:i.name,query:zp(i.bundledQuery),readTime:Oe(i.readTime)}})(e)),b.resolve()}}/**
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
 */class nm{constructor(){this.overlays=new vt(x.comparator),this.qr=new Map}getOverlay(t,e){return b.resolve(this.overlays.get(e))}getOverlays(t,e){const r=me();return b.forEach(e,(i=>this.getOverlay(t,i).next((o=>{o!==null&&r.set(i,o)})))).next((()=>r))}saveOverlays(t,e,r){return r.forEach(((i,o)=>{this.St(t,e,o)})),b.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach((o=>this.overlays=this.overlays.remove(o))),this.qr.delete(r)),b.resolve()}getOverlaysForCollection(t,e,r){const i=me(),o=e.length+1,c=new x(e.child("")),u=this.overlays.getIteratorFrom(c);for(;u.hasNext();){const f=u.getNext().value,d=f.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&f.largestBatchId>r&&i.set(f.getKey(),f)}return b.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new vt(((d,T)=>d-T));const c=this.overlays.getIterator();for(;c.hasNext();){const d=c.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let T=o.get(d.largestBatchId);T===null&&(T=me(),o=o.insert(d.largestBatchId,T)),T.set(d.getKey(),d)}}const u=me(),f=o.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach(((d,T)=>u.set(d,T))),!(u.size()>=i)););return b.resolve(u)}St(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const c=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,c)}this.overlays=this.overlays.insert(r.key,new Cp(e,r));let o=this.qr.get(e);o===void 0&&(o=gt(),this.qr.set(e,o)),this.qr.set(e,o.add(r.key))}}/**
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
 */class rm{constructor(){this.sessionToken=Ut.EMPTY_BYTE_STRING}getSessionToken(t){return b.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,b.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(){this.Qr=new ft(ot.$r),this.Ur=new ft(ot.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const r=new ot(t,e);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(t,e){t.forEach((r=>this.addReference(r,e)))}removeReference(t,e){this.Gr(new ot(t,e))}zr(t,e){t.forEach((r=>this.removeReference(r,e)))}jr(t){const e=new x(new X([])),r=new ot(e,t),i=new ot(e,t+1),o=[];return this.Ur.forEachInRange([r,i],(c=>{this.Gr(c),o.push(c.key)})),o}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new x(new X([])),r=new ot(e,t),i=new ot(e,t+1);let o=gt();return this.Ur.forEachInRange([r,i],(c=>{o=o.add(c.key)})),o}containsKey(t){const e=new ot(t,0),r=this.Qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class ot{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return x.comparator(t.key,e.key)||q(t.Yr,e.Yr)}static Kr(t,e){return q(t.Yr,e.Yr)||x.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new ft(ot.$r)}checkEmpty(t){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new Sp(o,e,r,i);this.mutationQueue.push(c);for(const u of i)this.Zr=this.Zr.add(new ot(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return b.resolve(c)}lookupMutationBatch(t,e){return b.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.ei(r),o=i<0?0:i;return b.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?Xs:this.tr-1)}getAllMutationBatches(t){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new ot(e,0),i=new ot(e,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([r,i],(c=>{const u=this.Xr(c.Yr);o.push(u)})),b.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ft(q);return e.forEach((i=>{const o=new ot(i,0),c=new ot(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,c],(u=>{r=r.add(u.Yr)}))})),b.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;x.isDocumentKey(o)||(o=o.child(""));const c=new ot(new x(o),0);let u=new ft(q);return this.Zr.forEachWhile((f=>{const d=f.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(u=u.add(f.Yr)),!0)}),c),b.resolve(this.ti(u))}ti(t){const e=[];return t.forEach((r=>{const i=this.Xr(r);i!==null&&e.push(i)})),e}removeMutationBatch(t,e){Y(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return b.forEach(e.mutations,(i=>{const o=new ot(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.Zr=r}))}ir(t){}containsKey(t,e){const r=new ot(e,0),i=this.Zr.firstAfterOrEqual(r);return b.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,b.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(t){this.ri=t,this.docs=(function(){return new vt(x.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,c=this.ri(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:c}),this.size+=c-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return b.resolve(r?r.document.mutableCopy():Dt.newInvalidDocument(e))}getEntries(t,e){let r=mr();return e.forEach((i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Dt.newInvalidDocument(i))})),b.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=mr();const c=e.path,u=new x(c.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(u);for(;f.hasNext();){const{key:d,value:{document:T}}=f.getNext();if(!c.isPrefixOf(d.path))break;d.path.length>c.length+1||Fd(Ld(T),r)<=0||(i.has(T.key)||ri(e,T))&&(o=o.insert(T.key,T.mutableCopy()))}return b.resolve(o)}getAllFromCollectionGroup(t,e,r,i){L(9500)}ii(t,e){return b.forEach(this.docs,(r=>e(r)))}newChangeBuffer(t){return new om(this)}getSize(t){return b.resolve(this.size)}}class om extends Yp{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?e.push(this.Nr.addEntry(t,i)):this.Nr.removeEntry(r)})),b.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(t){this.persistence=t,this.si=new be((e=>ei(e)),ni),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.oi=0,this._i=new oi,this.targetCount=0,this.ai=Be.ur()}forEachTarget(t,e){return this.si.forEach(((r,i)=>e(i))),b.resolve()}getLastRemoteSnapshotVersion(t){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return b.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.oi&&(this.oi=e),b.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new Be(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,b.resolve()}updateTargetData(t,e){return this.Pr(e),b.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,b.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.si.forEach(((c,u)=>{u.sequenceNumber<=e&&r.get(u.targetId)===null&&(this.si.delete(c),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),i++)})),b.waitFor(o).next((()=>i))}getTargetCount(t){return b.resolve(this.targetCount)}getTargetData(t,e){const r=this.si.get(e)||null;return b.resolve(r)}addMatchingKeys(t,e,r){return this._i.Wr(e,r),b.resolve()}removeMatchingKeys(t,e,r){this._i.zr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach((c=>{o.push(i.markPotentiallyOrphaned(t,c))})),b.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),b.resolve()}getMatchingKeysForTargetId(t,e){const r=this._i.Hr(e);return b.resolve(r)}containsKey(t,e){return b.resolve(this._i.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(t,e){this.ui={},this.overlays={},this.ci=new Qs(0),this.li=!1,this.li=!0,this.hi=new rm,this.referenceDelegate=t(this),this.Pi=new am(this),this.indexManager=new Hp,this.remoteDocumentCache=(function(i){return new im(i)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new qp(e),this.Ii=new em(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new nm,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ui[t.toKey()];return r||(r=new sm(e,this.referenceDelegate),this.ui[t.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,r){V("MemoryPersistence","Starting transaction:",t);const i=new cm(this.ci.next());return this.referenceDelegate.Ei(),r(i).next((o=>this.referenceDelegate.di(i).next((()=>o)))).toPromise().then((o=>(i.raiseOnCommittedEvent(),o)))}Ai(t,e){return b.or(Object.values(this.ui).map((r=>()=>r.containsKey(t,e))))}}class cm extends Bd{constructor(t){super(),this.currentSequenceNumber=t}}class ai{constructor(t){this.persistence=t,this.Ri=new oi,this.Vi=null}static mi(t){return new ai(t)}get fi(){if(this.Vi)return this.Vi;throw L(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.fi.delete(r.toString()),b.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.fi.add(r.toString()),b.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),b.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach((i=>this.fi.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next((i=>{i.forEach((o=>this.fi.add(o.toString())))})).next((()=>r.removeTargetData(t,e)))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.fi,(r=>{const i=x.fromPath(r);return this.gi(t,i).next((o=>{o||e.removeEntry(i,W.min())}))})).next((()=>(this.Vi=null,e.apply(t))))}updateLimboDocument(t,e){return this.gi(t,e).next((r=>{r?this.fi.delete(e.toString()):this.fi.add(e.toString())}))}Ti(t){return 0}gi(t,e){return b.or([()=>b.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class _r{constructor(t,e){this.persistence=t,this.pi=new be((r=>qd(r.path)),((r,i)=>r.isEqual(i))),this.garbageCollector=Jp(this,e)}static mi(t,e){return new _r(t,e)}Ei(){}di(t){return b.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>e.next((i=>r+i))))}wr(t){let e=0;return this.pr(t,(r=>{e++})).next((()=>e))}pr(t,e){return b.forEach(this.pi,((r,i)=>this.br(t,r,i).next((o=>o?b.resolve():e(i)))))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ii(t,(c=>this.br(t,c,e).next((u=>{u||(r++,o.removeEntry(c,W.min()))})))).next((()=>o.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),b.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),b.resolve()}removeReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),b.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),b.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=er(t.data.value)),e}br(t,e,r){return b.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.pi.get(e);return b.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.Es=r,this.ds=i}static As(t,e){let r=gt(),i=gt();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new ci(t,e.fromCache,r,i)}}/**
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
 */class lm{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class um{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Uu()?8:jd(Mu())>0?6:4})()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.ys(t,e).next((c=>{o.result=c})).next((()=>{if(!o.result)return this.ws(t,e,i,r).next((c=>{o.result=c}))})).next((()=>{if(o.result)return;const c=new lm;return this.Ss(t,e,c).next((u=>{if(o.result=u,this.Vs)return this.bs(t,e,c,u.size)}))})).next((()=>o.result))}bs(t,e,r,i){return r.documentReadCount<this.fs?(Ve()<=B.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",an(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),b.resolve()):(Ve()<=B.DEBUG&&V("QueryEngine","Query:",an(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(Ve()<=B.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",an(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,_e(e))):b.resolve())}ys(t,e){if(oa(e))return b.resolve(null);let r=_e(e);return this.indexManager.getIndexType(t,r).next((i=>i===0?null:(e.limit!==null&&i===1&&(e=Ss(e,null,"F"),r=_e(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next((o=>{const c=gt(...o);return this.ps.getDocuments(t,c).next((u=>this.indexManager.getMinOffset(t,r).next((f=>{const d=this.Ds(e,u);return this.Cs(e,d,c,f.readTime)?this.ys(t,Ss(e,null,"F")):this.vs(t,d,e,f)}))))})))))}ws(t,e,r,i){return oa(e)||i.isEqual(W.min())?b.resolve(null):this.ps.getDocuments(t,r).next((o=>{const c=this.Ds(e,o);return this.Cs(e,c,r,i)?b.resolve(null):(Ve()<=B.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),an(e)),this.vs(t,c,e,Md(i,En)).next((u=>u)))}))}Ds(t,e){let r=new ft(hp(t));return e.forEach(((i,o)=>{ri(t,o)&&(r=r.add(o))})),r}Cs(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ss(t,e,r){return Ve()<=B.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",an(e)),this.ps.getDocumentsMatchingQuery(t,e,re.min(),r)}vs(t,e,r,i){return this.ps.getDocumentsMatchingQuery(t,r,i).next((o=>(e.forEach((c=>{o=o.insert(c.key,c)})),o)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm="LocalStore";class fm{constructor(t,e,r,i){this.persistence=t,this.Fs=e,this.serializer=i,this.Ms=new vt(q),this.xs=new be((o=>ei(o)),ni),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(r)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new tm(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ms)))}}function dm(n,t,e,r){return new fm(n,t,e,r)}async function cl(n,t){const e=G(n);return await e.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next((o=>(i=o,e.Bs(t),e.mutationQueue.getAllMutationBatches(r)))).next((o=>{const c=[],u=[];let f=gt();for(const d of i){c.push(d.batchId);for(const T of d.mutations)f=f.add(T.key)}for(const d of o){u.push(d.batchId);for(const T of d.mutations)f=f.add(T.key)}return e.localDocuments.getDocuments(r,f).next((d=>({Ls:d,removedBatchIds:c,addedBatchIds:u})))}))}))}function pm(n,t){const e=G(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const i=t.batch.keys(),o=e.Ns.newChangeBuffer({trackRemovals:!0});return(function(u,f,d,T){const w=d.batch,R=w.keys();let P=b.resolve();return R.forEach((N=>{P=P.next((()=>T.getEntry(f,N))).next((O=>{const D=d.docVersions.get(N);Y(D!==null,48541),O.version.compareTo(D)<0&&(w.applyToRemoteDocument(O,d),O.isValidDocument()&&(O.setReadTime(d.commitVersion),T.addEntry(O)))}))})),P.next((()=>u.mutationQueue.removeMutationBatch(f,w)))})(e,r,t,o).next((()=>o.apply(r))).next((()=>e.mutationQueue.performConsistencyCheck(r))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(u){let f=gt();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(f=f.add(u.batch.mutations[d].key));return f})(t)))).next((()=>e.localDocuments.getDocuments(r,i)))}))}function mm(n){const t=G(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Pi.getLastRemoteSnapshotVersion(e)))}function gm(n,t){const e=G(n);return e.persistence.runTransaction("Get next mutation batch","readonly",(r=>(t===void 0&&(t=Xs),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t))))}class ma{constructor(){this.activeTargetIds=_p()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class _m{constructor(){this.Mo=new ma,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,r){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new ma,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class ym{Oo(t){}shutdown(){}}/**
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
 */const ga="ConnectivityMonitor";class _a{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){V(ga,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){V(ga,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Xn=null;function Vs(){return Xn===null?Xn=(function(){return 268435456+Math.round(2147483648*Math.random())})():Xn++,"0x"+Xn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us="RestConnection",Em={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Tm{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===hr?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(t,e,r,i,o){const c=Vs(),u=this.zo(t,e.toUriEncodedString());V(us,`Sending RPC '${t}' ${c}:`,u,r);const f={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(f,i,o);const{host:d}=new URL(u),T=vn(d);return this.Jo(t,u,f,r,T).then((w=>(V(us,`Received RPC '${t}' ${c}: `,w),w)),(w=>{throw Ar(us,`RPC '${t}' ${c} failed with error: `,w,"url: ",u,"request:",r),w}))}Ho(t,e,r,i,o,c){return this.Go(t,e,r,i,o)}jo(t,e,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+$e})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((i,o)=>t[o]=i)),r&&r.headers.forEach(((i,o)=>t[o]=i))}zo(t,e){const r=Em[t];return`${this.Uo}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection";class Im extends Tm{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,r,i,o){const c=Vs();return new Promise(((u,f)=>{const d=new Tc;d.setWithCredentials(!0),d.listenOnce(wc.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case tr.NO_ERROR:const w=d.getResponseJson();V(pt,`XHR for RPC '${t}' ${c} received:`,JSON.stringify(w)),u(w);break;case tr.TIMEOUT:V(pt,`RPC '${t}' ${c} timed out`),f(new k(S.DEADLINE_EXCEEDED,"Request time out"));break;case tr.HTTP_ERROR:const R=d.getStatus();if(V(pt,`RPC '${t}' ${c} failed with status:`,R,"response text:",d.getResponseText()),R>0){let P=d.getResponseJson();Array.isArray(P)&&(P=P[0]);const N=P?.error;if(N&&N.status&&N.message){const O=(function($){const j=$.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(j)>=0?j:S.UNKNOWN})(N.status);f(new k(O,N.message))}else f(new k(S.UNKNOWN,"Server responded with status "+d.getStatus()))}else f(new k(S.UNAVAILABLE,"Connection failed."));break;default:L(9055,{l_:t,streamId:c,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{V(pt,`RPC '${t}' ${c} completed.`)}}));const T=JSON.stringify(i);V(pt,`RPC '${t}' ${c} sending request:`,i),d.send(e,"POST",T,r,15)}))}T_(t,e,r){const i=Vs(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],c=vc(),u=Ac(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(f.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(f.useFetchStreams=!0),this.jo(f.initMessageHeaders,e,r),f.encodeInitMessageHeaders=!0;const T=o.join("");V(pt,`Creating RPC '${t}' stream ${i}: ${T}`,f);const w=c.createWebChannel(T,f);this.I_(w);let R=!1,P=!1;const N=new wm({Yo:D=>{P?V(pt,`Not sending because RPC '${t}' stream ${i} is closed:`,D):(R||(V(pt,`Opening RPC '${t}' stream ${i} transport.`),w.open(),R=!0),V(pt,`RPC '${t}' stream ${i} sending:`,D),w.send(D))},Zo:()=>w.close()}),O=(D,$,j)=>{D.listen($,(F=>{try{j(F)}catch(z){setTimeout((()=>{throw z}),0)}}))};return O(w,ln.EventType.OPEN,(()=>{P||(V(pt,`RPC '${t}' stream ${i} transport opened.`),N.o_())})),O(w,ln.EventType.CLOSE,(()=>{P||(P=!0,V(pt,`RPC '${t}' stream ${i} transport closed`),N.a_(),this.E_(w))})),O(w,ln.EventType.ERROR,(D=>{P||(P=!0,Ar(pt,`RPC '${t}' stream ${i} transport errored. Name:`,D.name,"Message:",D.message),N.a_(new k(S.UNAVAILABLE,"The operation could not be completed")))})),O(w,ln.EventType.MESSAGE,(D=>{if(!P){const $=D.data[0];Y(!!$,16349);const j=$,F=j?.error||j[0]?.error;if(F){V(pt,`RPC '${t}' stream ${i} received error:`,F);const z=F.status;let ct=(function(p){const g=et[p];if(g!==void 0)return Dp(g)})(z),rt=F.message;ct===void 0&&(ct=S.INTERNAL,rt="Unknown error status: "+z+" with message "+F.message),P=!0,N.a_(new k(ct,rt)),w.close()}else V(pt,`RPC '${t}' stream ${i} received:`,$),N.u_($)}})),O(u,Ic.STAT_EVENT,(D=>{D.stat===ws.PROXY?V(pt,`RPC '${t}' stream ${i} detected buffering proxy`):D.stat===ws.NOPROXY&&V(pt,`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{N.__()}),0),N}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((e=>e===t))}}function hs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(n){return new Vp(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(t,e,r=1e3,i=1.5,o=6e4){this.Mi=t,this.timerId=e,this.d_=r,this.A_=i,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,e-r);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya="PersistentStream";class Am{constructor(t,e,r,i,o,c,u,f){this.Mi=t,this.S_=r,this.b_=i,this.connection=o,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=u,this.listener=f,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ll(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(Ie(e.toString()),Ie("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.D_===e&&this.G_(r,i)}),(r=>{t((()=>{const i=new k(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)}))}))}G_(t,e){const r=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((i=>{r((()=>this.z_(i)))})),this.stream.onMessage((i=>{r((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return V(ya,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget((()=>this.D_===t?e():(V(ya,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class vm extends Am{constructor(t,e,r,i,o,c){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,c),this.serializer=o}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return Y(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Y(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){Y(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=Up(t.writeResults,t.commitTime),r=Oe(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=Mp(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map((r=>Fp(this.serializer,r)))};this.q_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{}class bm extends Rm{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new k(S.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.Go(t,Ps(e,r),i,o,c))).catch((o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new k(S.UNKNOWN,o.toString())}))}Ho(t,e,r,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,u])=>this.connection.Ho(t,Ps(e,r),i,c,u,o))).catch((c=>{throw c.name==="FirebaseError"?(c.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new k(S.UNKNOWN,c.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class Sm{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ie(e),this.aa=!1):V("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn="RemoteStore";class Cm{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo((c=>{r.enqueueAndForget((async()=>{Dn(this)&&(V(Cn,"Restarting streams for network reachability change."),await(async function(f){const d=G(f);d.Ea.add(4),await Pn(d),d.Ra.set("Unknown"),d.Ea.delete(4),await Cr(d)})(this))}))})),this.Ra=new Sm(r,i)}}async function Cr(n){if(Dn(n))for(const t of n.da)await t(!0)}async function Pn(n){for(const t of n.da)await t(!1)}function Dn(n){return G(n).Ea.size===0}async function ul(n,t,e){if(!bn(t))throw t;n.Ea.add(1),await Pn(n),n.Ra.set("Offline"),e||(e=()=>mm(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{V(Cn,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await Cr(n)}))}function hl(n,t){return t().catch((e=>ul(n,e,t)))}async function Pr(n){const t=G(n),e=ie(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Xs;for(;Pm(t);)try{const i=await gm(t.localStore,r);if(i===null){t.Ta.length===0&&e.L_();break}r=i.batchId,Dm(t,i)}catch(i){await ul(t,i)}fl(t)&&dl(t)}function Pm(n){return Dn(n)&&n.Ta.length<10}function Dm(n,t){n.Ta.push(t);const e=ie(n);e.O_()&&e.X_&&e.ea(t.mutations)}function fl(n){return Dn(n)&&!ie(n).x_()&&n.Ta.length>0}function dl(n){ie(n).start()}async function Vm(n){ie(n).ra()}async function Nm(n){const t=ie(n);for(const e of n.Ta)t.ea(e.mutations)}async function km(n,t,e){const r=n.Ta.shift(),i=ii.from(r,t,e);await hl(n,(()=>n.remoteSyncer.applySuccessfulWrite(i))),await Pr(n)}async function Om(n,t){t&&ie(n).X_&&await(async function(r,i){if((function(c){return Pp(c)&&c!==S.ABORTED})(i.code)){const o=r.Ta.shift();ie(r).B_(),await hl(r,(()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i))),await Pr(r)}})(n,t),fl(n)&&dl(n)}async function Ea(n,t){const e=G(n);e.asyncQueue.verifyOperationInProgress(),V(Cn,"RemoteStore received new credentials");const r=Dn(e);e.Ea.add(3),await Pn(e),r&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await Cr(e)}async function xm(n,t){const e=G(n);t?(e.Ea.delete(2),await Cr(e)):t||(e.Ea.add(2),await Pn(e),e.Ra.set("Unknown"))}function ie(n){return n.fa||(n.fa=(function(e,r,i){const o=G(e);return o.sa(),new vm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:Vm.bind(null,n),r_:Om.bind(null,n),ta:Nm.bind(null,n),na:km.bind(null,n)}),n.da.push((async t=>{t?(n.fa.B_(),await Pr(n)):(await n.fa.stop(),n.Ta.length>0&&(V(Cn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new ge,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const c=Date.now()+r,u=new li(t,e,c,i,o);return u.start(r),u}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pl(n,t){if(Ie("AsyncQueue",`${t}: ${n}`),bn(n))return new k(S.UNAVAILABLE,`${t}: ${n}`);throw n}class Mm{constructor(){this.queries=Ta(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const i=G(e),o=i.queries;i.queries=Ta(),o.forEach(((c,u)=>{for(const f of u.Sa)f.onError(r)}))})(this,new k(S.ABORTED,"Firestore shutting down"))}}function Ta(){return new be((n=>Gc(n)),Hc)}function Lm(n){n.Ca.forEach((t=>{t.next()}))}var wa,Ia;(Ia=wa||(wa={})).Ma="default",Ia.Cache="cache";const Fm="SyncEngine";class Um{constructor(t,e,r,i,o,c){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new be((u=>Gc(u)),Hc),this.Iu=new Map,this.Eu=new Set,this.du=new vt(x.comparator),this.Au=new Map,this.Ru=new oi,this.Vu={},this.mu=new Map,this.fu=Be.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Bm(n,t,e){const r=zm(n);try{const i=await(function(c,u){const f=G(c),d=Q.now(),T=u.reduce(((P,N)=>P.add(N.key)),gt());let w,R;return f.persistence.runTransaction("Locally write mutations","readwrite",(P=>{let N=mr(),O=gt();return f.Ns.getEntries(P,T).next((D=>{N=D,N.forEach((($,j)=>{j.isValidDocument()||(O=O.add($))}))})).next((()=>f.localDocuments.getOverlayedDocuments(P,N))).next((D=>{w=D;const $=[];for(const j of u){const F=Rp(j,w.get(j.key).overlayedDocument);F!=null&&$.push(new Se(j.key,F,Fc(F.value.mapValue),jt.exists(!0)))}return f.mutationQueue.addMutationBatch(P,d,$,u)})).next((D=>{R=D;const $=D.applyToLocalDocumentSet(w,O);return f.documentOverlayCache.saveOverlays(P,D.batchId,$)}))})).then((()=>({batchId:R.batchId,changes:Wc(w)})))})(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),(function(c,u,f){let d=c.Vu[c.currentUser.toKey()];d||(d=new vt(q)),d=d.insert(u,f),c.Vu[c.currentUser.toKey()]=d})(r,i.batchId,e),await Dr(r,i.changes),await Pr(r.remoteStore)}catch(i){const o=pl(i,"Failed to persist write");e.reject(o)}}function Aa(n,t,e){const r=G(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Tu.forEach(((o,c)=>{const u=c.view.va(t);u.snapshot&&i.push(u.snapshot)})),(function(c,u){const f=G(c);f.onlineState=u;let d=!1;f.queries.forEach(((T,w)=>{for(const R of w.Sa)R.va(u)&&(d=!0)})),d&&Lm(f)})(r.eventManager,t),i.length&&r.Pu.H_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function jm(n,t){const e=G(n),r=t.batch.batchId;try{const i=await pm(e.localStore,t);gl(e,r,null),ml(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Dr(e,i)}catch(i){await Ws(i)}}async function $m(n,t,e){const r=G(n);try{const i=await(function(c,u){const f=G(c);return f.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let T;return f.mutationQueue.lookupMutationBatch(d,u).next((w=>(Y(w!==null,37113),T=w.keys(),f.mutationQueue.removeMutationBatch(d,w)))).next((()=>f.mutationQueue.performConsistencyCheck(d))).next((()=>f.documentOverlayCache.removeOverlaysForBatchId(d,T,u))).next((()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,T))).next((()=>f.localDocuments.getDocuments(d,T)))}))})(r.localStore,t);gl(r,t,e),ml(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Dr(r,i)}catch(i){await Ws(i)}}function ml(n,t){(n.mu.get(t)||[]).forEach((e=>{e.resolve()})),n.mu.delete(t)}function gl(n,t,e){const r=G(n);let i=r.Vu[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),r.Vu[r.currentUser.toKey()]=i}}async function Dr(n,t,e){const r=G(n),i=[],o=[],c=[];r.Tu.isEmpty()||(r.Tu.forEach(((u,f)=>{c.push(r.pu(f,t,e).then((d=>{if((d||e)&&r.isPrimaryClient){const T=d?!d.fromCache:e?.targetChanges.get(f.targetId)?.current;r.sharedClientState.updateQueryState(f.targetId,T?"current":"not-current")}if(d){i.push(d);const T=ci.As(f.targetId,d);o.push(T)}})))})),await Promise.all(c),r.Pu.H_(i),await(async function(f,d){const T=G(f);try{await T.persistence.runTransaction("notifyLocalViewChanges","readwrite",(w=>b.forEach(d,(R=>b.forEach(R.Es,(P=>T.persistence.referenceDelegate.addReference(w,R.targetId,P))).next((()=>b.forEach(R.ds,(P=>T.persistence.referenceDelegate.removeReference(w,R.targetId,P)))))))))}catch(w){if(!bn(w))throw w;V(hm,"Failed to update sequence numbers: "+w)}for(const w of d){const R=w.targetId;if(!w.fromCache){const P=T.Ms.get(R),N=P.snapshotVersion,O=P.withLastLimboFreeSnapshotVersion(N);T.Ms=T.Ms.insert(R,O)}}})(r.localStore,o))}async function qm(n,t){const e=G(n);if(!e.currentUser.isEqual(t)){V(Fm,"User change. New user:",t.toKey());const r=await cl(e.localStore,t);e.currentUser=t,(function(o,c){o.mu.forEach((u=>{u.forEach((f=>{f.reject(new k(S.CANCELLED,c))}))})),o.mu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Dr(e,r.Ls)}}function zm(n){const t=G(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=jm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=$m.bind(null,t),t}class yr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Sr(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return dm(this.persistence,new um,t.initialUser,this.serializer)}Cu(t){return new al(ai.mi,this.serializer)}Du(t){return new _m}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}yr.provider={build:()=>new yr};class Hm extends yr{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){Y(this.persistence.referenceDelegate instanceof _r,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Qp(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?At.withCacheSize(this.cacheSizeBytes):At.DEFAULT;return new al((r=>_r.mi(r,e)),this.serializer)}}class Ns{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Aa(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=qm.bind(null,this.syncEngine),await xm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new Mm})()}createDatastore(t){const e=Sr(t.databaseInfo.databaseId),r=(function(o){return new Im(o)})(t.databaseInfo);return(function(o,c,u,f){return new bm(o,c,u,f)})(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return(function(r,i,o,c,u){return new Cm(r,i,o,c,u)})(this.localStore,this.datastore,t.asyncQueue,(e=>Aa(this.syncEngine,e,0)),(function(){return _a.v()?new _a:new ym})())}createSyncEngine(t,e){return(function(i,o,c,u,f,d,T){const w=new Um(i,o,c,u,f,d);return T&&(w.gu=!0),w})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){await(async function(e){const r=G(e);V(Cn,"RemoteStore shutting down."),r.Ea.add(5),await Pn(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Ns.provider={build:()=>new Ns};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe="FirestoreClient";class Gm{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=mt.UNAUTHENTICATED,this.clientId=Gs.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,(async c=>{V(oe,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(r,(c=>(V(oe,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ge;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=pl(e,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function fs(n,t){n.asyncQueue.verifyOperationInProgress(),V(oe,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await cl(t.localStore,i),r=i)})),t.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=t}async function va(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Km(n);V(oe,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((r=>Ea(t.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>Ea(t.remoteStore,i))),n._onlineComponents=t}async function Km(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V(oe,"Using user provided OfflineComponentProvider");try{await fs(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(i){return i.name==="FirebaseError"?i.code===S.FAILED_PRECONDITION||i.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(e))throw e;Ar("Error using user provided cache. Falling back to memory cache: "+e),await fs(n,new yr)}}else V(oe,"Using default OfflineComponentProvider"),await fs(n,new Hm(void 0));return n._offlineComponents}async function Wm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V(oe,"Using user provided OnlineComponentProvider"),await va(n,n._uninitializedComponentsProvider._online)):(V(oe,"Using default OnlineComponentProvider"),await va(n,new Ns))),n._onlineComponents}function Qm(n){return Wm(n).then((t=>t.syncEngine))}/**
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
 */function _l(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl="firestore.googleapis.com",ba=!0;class Sa{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new k(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=yl,this.ssl=ba}else this.host=t.host,this.ssl=t.ssl??ba;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=ol;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Kp)throw new k(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}xd("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_l(t.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new k(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new k(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new k(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Vr{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sa({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new k(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new k(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sa(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Rd;switch(r.type){case"firstParty":return new Pd(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new k(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=Ra.get(e);r&&(V("ComponentProvider","Removing Datastore"),Ra.delete(e),r.terminate())})(this),Promise.resolve()}}function Xm(n,t,e,r={}){n=Pc(n,Vr);const i=vn(t),o=n._getSettings(),c={...o,emulatorOptions:n._getEmulatorOptions()},u=`${t}:${e}`;i&&(Ba(`https://${u}`),$a("Firestore",!0)),o.host!==yl&&o.host!==u&&Ar("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f={...o,host:u,ssl:i,emulatorOptions:r};if(!_n(f,c)&&(n._setSettings(f),r.mockUserToken)){let d,T;if(typeof r.mockUserToken=="string")d=r.mockUserToken,T=mt.MOCK_USER;else{d=ja(r.mockUserToken,n._app?.options.projectId);const w=r.mockUserToken.sub||r.mockUserToken.user_id;if(!w)throw new k(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new mt(w)}n._authCredentials=new bd(new bc(d,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ui(this.firestore,t,this._query)}}class _t{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ne(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new _t(this.firestore,t,this._key)}toJSON(){return{type:_t._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(Rn(e,_t._jsonSchema))return new _t(t,r||null,new x(X.fromString(e.referencePath)))}}_t._jsonSchemaVersion="firestore/documentReference/1.0",_t._jsonSchema={type:nt("string",_t._jsonSchemaVersion),referencePath:nt("string")};class ne extends ui{constructor(t,e,r){super(t,e,cp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new _t(this.firestore,null,new x(t))}withConverter(t){return new ne(this.firestore,t,this._path)}}function b_(n,t,...e){if(n=Pt(n),Sc("collection","path",t),n instanceof Vr){const r=X.fromString(t,...e);return Qo(r),new ne(n,null,r)}{if(!(n instanceof _t||n instanceof ne))throw new k(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return Qo(r),new ne(n.firestore,null,r)}}function Jm(n,t,...e){if(n=Pt(n),arguments.length===1&&(t=Gs.newId()),Sc("doc","path",t),n instanceof Vr){const r=X.fromString(t,...e);return Wo(r),new _t(n,null,new x(r))}{if(!(n instanceof _t||n instanceof ne))throw new k(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return Wo(r),new _t(n.firestore,n instanceof ne?n.converter:null,new x(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca="AsyncQueue";class Pa{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new ll(this,"async_queue_retry"),this._c=()=>{const r=hs();r&&V(Ca,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=hs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=hs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new ge;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!bn(t))throw t;V(Ca,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((r=>{throw this.nc=r,this.rc=!1,Ie("INTERNAL UNHANDLED ERROR: ",Da(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const i=li.createAndSchedule(this,t,e,r,(o=>this.hc(o)));return this.tc.push(i),i}uc(){this.nc&&L(47125,{Pc:Da(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function Da(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class El extends Vr{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new Pa,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Pa(t),this._firestoreClient=void 0,await t}}}function Ym(n,t){const e=typeof n=="object"?n:Ls(),r=typeof n=="string"?n:hr,i=je(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Fa("firestore");o&&Xm(i,...o)}return i}function Zm(n){if(n._terminated)throw new k(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||tg(n),n._firestoreClient}function tg(n){const t=n._freezeSettings(),e=(function(i,o,c,u){return new Kd(i,o,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,_l(u.experimentalLongPollingOptions),u.useFetchStreams,u.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,t);n._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new Gm(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&(function(i){const o=i?._online.build();return{_offline:i?._offline.build(o),_online:o}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Nt(Ut.fromBase64String(t))}catch(e){throw new k(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Nt(Ut.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Nt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Rn(t,Nt._jsonSchema))return Nt.fromBase64String(t.bytes)}}Nt._jsonSchemaVersion="firestore/bytes/1.0",Nt._jsonSchema={type:nt("string",Nt._jsonSchemaVersion),bytes:nt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new k(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new k(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new k(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return q(this._lat,t._lat)||q(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:$t._jsonSchemaVersion}}static fromJSON(t){if(Rn(t,$t._jsonSchema))return new $t(t.latitude,t.longitude)}}$t._jsonSchemaVersion="firestore/geoPoint/1.0",$t._jsonSchema={type:nt("string",$t._jsonSchemaVersion),latitude:nt("number"),longitude:nt("number")};/**
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
 */class qt{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0})(this._values,t._values)}toJSON(){return{type:qt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Rn(t,qt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new qt(t.vectorValues);throw new k(S.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}qt._jsonSchemaVersion="firestore/vectorValue/1.0",qt._jsonSchema={type:nt("string",qt._jsonSchemaVersion),vectorValues:nt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg=/^__.*__$/;class ng{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Se(t,this.data,this.fieldMask,e,this.fieldTransforms):new Sn(t,this.data,e,this.fieldTransforms)}}function Tl(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L(40011,{Ac:n})}}class di{constructor(t,e,r,i,o,c){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new di({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const e=this.path?.child(t),r=this.Vc({path:e,fc:!1});return r.gc(t),r}yc(t){const e=this.path?.child(t),r=this.Vc({path:e,fc:!1});return r.Rc(),r}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return Er(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(Tl(this.Ac)&&eg.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class rg{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Sr(t)}Cc(t,e,r,i=!1){return new di({Ac:t,methodName:e,Dc:r,path:ht.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function sg(n){const t=n._freezeSettings(),e=Sr(n._databaseId);return new rg(n._databaseId,!!t.ignoreUndefinedProperties,e)}function ig(n,t,e,r,i,o={}){const c=n.Cc(o.merge||o.mergeFields?2:0,t,e,i);vl("Data must be an object, but it was:",c,r);const u=Il(r,c);let f,d;if(o.merge)f=new kt(c.fieldMask),d=c.fieldTransforms;else if(o.mergeFields){const T=[];for(const w of o.mergeFields){const R=og(t,w,e);if(!c.contains(R))throw new k(S.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);cg(T,R)||T.push(R)}f=new kt(T),d=c.fieldTransforms.filter((w=>f.covers(w.field)))}else f=null,d=c.fieldTransforms;return new ng(new Vt(u),f,d)}class pi extends fi{_toFieldTransform(t){return new wp(t.path,new wn)}isEqual(t){return t instanceof pi}}function wl(n,t){if(Al(n=Pt(n)))return vl("Unsupported field value:",t,n),Il(n,t);if(n instanceof fi)return(function(r,i){if(!Tl(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(r,i){const o=[];let c=0;for(const u of r){let f=wl(u,i.wc(c));f==null&&(f={nullValue:"NULL_VALUE"}),o.push(f),c++}return{arrayValue:{values:o}}})(n,t)}return(function(r,i){if((r=Pt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return yp(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Q.fromDate(r);return{timestampValue:Cs(i.serializer,o)}}if(r instanceof Q){const o=new Q(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Cs(i.serializer,o)}}if(r instanceof $t)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Nt)return{bytesValue:Np(i.serializer,r._byteString)};if(r instanceof _t){const o=i.databaseId,c=r.firestore._databaseId;if(!c.isEqual(o))throw i.Sc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:sl(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof qt)return(function(c,u){return{mapValue:{fields:{[Mc]:{stringValue:Lc},[As]:{arrayValue:{values:c.toArray().map((d=>{if(typeof d!="number")throw u.Sc("VectorValues must only contain numeric values.");return si(u.serializer,d)}))}}}}}})(r,i);throw i.Sc(`Unsupported field value: ${Ks(r)}`)})(n,t)}function Il(n,t){const e={};return Vc(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):qe(n,((r,i)=>{const o=wl(i,t.mc(r));o!=null&&(e[r]=o)})),{mapValue:{fields:e}}}function Al(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Q||n instanceof $t||n instanceof Nt||n instanceof _t||n instanceof fi||n instanceof qt)}function vl(n,t,e){if(!Al(e)||!Cc(e)){const r=Ks(e);throw r==="an object"?t.Sc(n+" a custom object"):t.Sc(n+" "+r)}}function og(n,t,e){if((t=Pt(t))instanceof hi)return t._internalPath;if(typeof t=="string")return Rl(n,t);throw Er("Field path arguments must be of type string or ",n,!1,void 0,e)}const ag=new RegExp("[~\\*/\\[\\]]");function Rl(n,t,e){if(t.search(ag)>=0)throw Er(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new hi(...t.split("."))._internalPath}catch{throw Er(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Er(n,t,e,r,i){const o=r&&!r.isEmpty(),c=i!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let f="";return(o||c)&&(f+=" (found",o&&(f+=` in field ${r}`),c&&(f+=` in document ${i}`),f+=")"),new k(S.INVALID_ARGUMENT,u+n+f)}function cg(n,t){return n.some((e=>e.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new _t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new lg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Sl("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class lg extends bl{data(){return super.data()}}function Sl(n,t){return typeof t=="string"?Rl(n,t):t instanceof hi?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class Jn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class xe extends bl{constructor(t,e,r,i,o,c){super(t,e,r,i,c),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new sr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Sl("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new k(S.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=xe._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}xe._jsonSchemaVersion="firestore/documentSnapshot/1.0",xe._jsonSchema={type:nt("string",xe._jsonSchemaVersion),bundleSource:nt("string","DocumentSnapshot"),bundleName:nt("string"),bundle:nt("string")};class sr extends xe{data(t={}){return super.data(t)}}class mn{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Jn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((r=>{t.call(e,new sr(this._firestore,this._userDataWriter,r.key,r,new Jn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new k(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(i,o){if(i._snapshot.oldDocs.isEmpty()){let c=0;return i._snapshot.docChanges.map((u=>{const f=new sr(i._firestore,i._userDataWriter,u.doc.key,u.doc,new Jn(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:f,oldIndex:-1,newIndex:c++}}))}{let c=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((u=>o||u.type!==3)).map((u=>{const f=new sr(i._firestore,i._userDataWriter,u.doc.key,u.doc,new Jn(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,T=-1;return u.type!==0&&(d=c.indexOf(u.doc.key),c=c.delete(u.doc.key)),u.type!==1&&(c=c.add(u.doc),T=c.indexOf(u.doc.key)),{type:hg(u.type),doc:f,oldIndex:d,newIndex:T}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new k(S.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=mn._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Gs.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],i=[];return this.docs.forEach((o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function hg(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L(61501,{type:n})}}mn._jsonSchemaVersion="firestore/querySnapshot/1.0",mn._jsonSchema={type:nt("string",mn._jsonSchemaVersion),bundleSource:nt("string","QuerySnapshot"),bundleName:nt("string"),bundle:nt("string")};function S_(n,t){const e=Pc(n.firestore,El),r=Jm(n),i=ug(n.converter,t);return fg(e,[ig(sg(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,jt.exists(!1))]).then((()=>r))}function fg(n,t){return(function(r,i){const o=new ge;return r.asyncQueue.enqueueAndForget((async()=>Bm(await Qm(r),i,o))),o.promise})(Zm(n),t)}function C_(){return new pi("serverTimestamp")}(function(t,e=!0){(function(i){$e=i})(Qa),Ht(new Ft("firestore",((r,{instanceIdentifier:i,options:o})=>{const c=r.getProvider("app").getImmediate(),u=new El(new Sd(r.getProvider("auth-internal")),new Dd(c,r.getProvider("app-check-internal")),(function(d,T){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new k(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fr(d.options.projectId,T)})(c,i),c);return o={useFetchStreams:e,...o},u._setSettings(o),u}),"PUBLIC").setMultipleInstances(!0)),Ct(zo,Ho,t),Ct(zo,Ho,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl="firebasestorage.googleapis.com",Pl="storageBucket",dg=120*1e3,pg=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt extends Gt{constructor(t,e,r=0){super(ds(t),`Firebase Storage: ${e} (${ds(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,tt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return ds(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Z;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Z||(Z={}));function ds(n){return"storage/"+n}function mi(){const n="An unknown error occurred, please check the error payload for server response.";return new tt(Z.UNKNOWN,n)}function mg(n){return new tt(Z.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function gg(n){return new tt(Z.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function _g(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new tt(Z.UNAUTHENTICATED,n)}function yg(){return new tt(Z.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Eg(n){return new tt(Z.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Tg(){return new tt(Z.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function wg(){return new tt(Z.CANCELED,"User canceled the upload/download.")}function Ig(n){return new tt(Z.INVALID_URL,"Invalid URL '"+n+"'.")}function Ag(n){return new tt(Z.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function vg(){return new tt(Z.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Pl+"' property when initializing the app?")}function Rg(){return new tt(Z.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function bg(){return new tt(Z.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Sg(n){return new tt(Z.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ks(n){return new tt(Z.INVALID_ARGUMENT,n)}function Dl(){return new tt(Z.APP_DELETED,"The Firebase app was deleted.")}function Cg(n){return new tt(Z.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function gn(n,t){return new tt(Z.INVALID_FORMAT,"String does not match format '"+n+"': "+t)}function cn(n){throw new tt(Z.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let r;try{r=bt.makeFromUrl(t,e)}catch{return new bt(t,"")}if(r.path==="")return r;throw Ag(t)}static makeFromUrl(t,e){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(z){z.path.charAt(z.path.length-1)==="/"&&(z.path_=z.path_.slice(0,-1))}const c="(/(.*))?$",u=new RegExp("^gs://"+i+c,"i"),f={bucket:1,path:3};function d(z){z.path_=decodeURIComponent(z.path)}const T="v[A-Za-z0-9_]+",w=e.replace(/[.]/g,"\\."),R="(/([^?#]*).*)?$",P=new RegExp(`^https?://${w}/${T}/b/${i}/o${R}`,"i"),N={bucket:1,path:3},O=e===Cl?"(?:storage.googleapis.com|storage.cloud.google.com)":e,D="([^?#]*)",$=new RegExp(`^https?://${O}/${i}/${D}`,"i"),F=[{regex:u,indices:f,postModify:o},{regex:P,indices:N,postModify:d},{regex:$,indices:{bucket:1,path:2},postModify:d}];for(let z=0;z<F.length;z++){const ct=F[z],rt=ct.regex.exec(t);if(rt){const y=rt[ct.indices.bucket];let p=rt[ct.indices.path];p||(p=""),r=new bt(y,p),ct.postModify(r);break}}if(r==null)throw Ig(t);return r}}class Pg{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(n,t,e){let r=1,i=null,o=null,c=!1,u=0;function f(){return u===2}let d=!1;function T(...D){d||(d=!0,t.apply(null,D))}function w(D){i=setTimeout(()=>{i=null,n(P,f())},D)}function R(){o&&clearTimeout(o)}function P(D,...$){if(d){R();return}if(D){R(),T.call(null,D,...$);return}if(f()||c){R(),T.call(null,D,...$);return}r<64&&(r*=2);let F;u===1?(u=2,F=0):F=(r+Math.random())*1e3,w(F)}let N=!1;function O(D){N||(N=!0,R(),!d&&(i!==null?(D||(u=2),clearTimeout(i),w(0)):D||(u=1)))}return w(0),o=setTimeout(()=>{c=!0,O(!0)},e),O}function Vg(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(n){return n!==void 0}function kg(n){return typeof n=="object"&&!Array.isArray(n)}function gi(n){return typeof n=="string"||n instanceof String}function Va(n){return _i()&&n instanceof Blob}function _i(){return typeof Blob<"u"}function Na(n,t,e,r){if(r<t)throw ks(`Invalid value for '${n}'. Expected ${t} or greater.`);if(r>e)throw ks(`Invalid value for '${n}'. Expected ${e} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(n,t,e){let r=t;return e==null&&(r=`https://${t}`),`${e}://${r}/v0${n}`}function Vl(n){const t=encodeURIComponent;let e="?";for(const r in n)if(n.hasOwnProperty(r)){const i=t(r)+"="+t(n[r]);e=e+i+"&"}return e=e.slice(0,-1),e}var ye;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(ye||(ye={}));/**
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
 */function Og(n,t){const e=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,o=t.indexOf(n)!==-1;return e||i||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(t,e,r,i,o,c,u,f,d,T,w,R=!0,P=!1){this.url_=t,this.method_=e,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=c,this.callback_=u,this.errorCallback_=f,this.timeout_=d,this.progressCallback_=T,this.connectionFactory_=w,this.retry=R,this.isUsingEmulator=P,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((N,O)=>{this.resolve_=N,this.reject_=O,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new Yn(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const c=u=>{const f=u.loaded,d=u.lengthComputable?u.total:-1;this.progressCallback_!==null&&this.progressCallback_(f,d)};this.progressCallback_!==null&&o.addUploadProgressListener(c),o.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(c),this.pendingConnection_=null;const u=o.getErrorCode()===ye.NO_ERROR,f=o.getStatus();if(!u||Og(f,this.additionalRetryCodes_)&&this.retry){const T=o.getErrorCode()===ye.ABORT;r(!1,new Yn(!1,null,T));return}const d=this.successCodes_.indexOf(f)!==-1;r(!0,new Yn(d,o))})},e=(r,i)=>{const o=this.resolve_,c=this.reject_,u=i.connection;if(i.wasSuccessCode)try{const f=this.callback_(u,u.getResponse());Ng(f)?o(f):o()}catch(f){c(f)}else if(u!==null){const f=mi();f.serverResponse=u.getErrorText(),this.errorCallback_?c(this.errorCallback_(u,f)):c(f)}else if(i.canceled){const f=this.appDelete_?Dl():wg();c(f)}else{const f=Tg();c(f)}};this.canceled_?e(!1,new Yn(!1,null,!0)):this.backoffId_=Dg(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Vg(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Yn{constructor(t,e,r){this.wasSuccessCode=t,this.connection=e,this.canceled=!!r}}function Mg(n,t){t!==null&&t.length>0&&(n.Authorization="Firebase "+t)}function Lg(n,t){n["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Fg(n,t){t&&(n["X-Firebase-GMPID"]=t)}function Ug(n,t){t!==null&&(n["X-Firebase-AppCheck"]=t)}function Bg(n,t,e,r,i,o,c=!0,u=!1){const f=Vl(n.urlParams),d=n.url+f,T=Object.assign({},n.headers);return Fg(T,t),Mg(T,e),Lg(T,o),Ug(T,r),new xg(d,n.method,T,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,c,u)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function $g(...n){const t=jg();if(t!==void 0){const e=new t;for(let r=0;r<n.length;r++)e.append(n[r]);return e.getBlob()}else{if(_i())return new Blob(n);throw new tt(Z.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function qg(n,t,e){return n.webkitSlice?n.webkitSlice(t,e):n.mozSlice?n.mozSlice(t,e):n.slice?n.slice(t,e):null}/**
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
 */function zg(n){if(typeof atob>"u")throw Sg("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ps{constructor(t,e){this.data=t,this.contentType=e||null}}function Hg(n,t){switch(n){case Lt.RAW:return new ps(Nl(t));case Lt.BASE64:case Lt.BASE64URL:return new ps(kl(n,t));case Lt.DATA_URL:return new ps(Kg(t),Wg(t))}throw mi()}function Nl(n){const t=[];for(let e=0;e<n.length;e++){let r=n.charCodeAt(e);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(e<n.length-1&&(n.charCodeAt(e+1)&64512)===56320))t.push(239,191,189);else{const o=r,c=n.charCodeAt(++e);r=65536|(o&1023)<<10|c&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function Gg(n){let t;try{t=decodeURIComponent(n)}catch{throw gn(Lt.DATA_URL,"Malformed data URL.")}return Nl(t)}function kl(n,t){switch(n){case Lt.BASE64:{const i=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(i||o)throw gn(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Lt.BASE64URL:{const i=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(i||o)throw gn(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let e;try{e=zg(t)}catch(i){throw i.message.includes("polyfill")?i:gn(n,"Invalid character found")}const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}class Ol{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(e===null)throw gn(Lt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=e[1]||null;r!=null&&(this.base64=Qg(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}}function Kg(n){const t=new Ol(n);return t.base64?kl(Lt.BASE64,t.rest):Gg(t.rest)}function Wg(n){return new Ol(n).contentType}function Qg(n,t){return n.length>=t.length?n.substring(n.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(t,e){let r=0,i="";Va(t)?(this.data_=t,r=t.size,i=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,e){if(Va(this.data_)){const r=this.data_,i=qg(r,t,e);return i===null?null:new Zt(i)}else{const r=new Uint8Array(this.data_.buffer,t,e-t);return new Zt(r,!0)}}static getBlob(...t){if(_i()){const e=t.map(r=>r instanceof Zt?r.data_:r);return new Zt($g.apply(null,e))}else{const e=t.map(c=>gi(c)?Hg(Lt.RAW,c).data:c.data_);let r=0;e.forEach(c=>{r+=c.byteLength});const i=new Uint8Array(r);let o=0;return e.forEach(c=>{for(let u=0;u<c.length;u++)i[o++]=c[u]}),new Zt(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(n){let t;try{t=JSON.parse(n)}catch{return null}return kg(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(n){if(n.length===0)return null;const t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function Jg(n,t){const e=t.split("/").filter(r=>r.length>0).join("/");return n.length===0?e:n+"/"+e}function Ml(n){const t=n.lastIndexOf("/",n.length-2);return t===-1?n:n.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yg(n,t){return t}class Tt{constructor(t,e,r,i){this.server=t,this.local=e||t,this.writable=!!r,this.xform=i||Yg}}let Zn=null;function Zg(n){return!gi(n)||n.length<2?n:Ml(n)}function Ll(){if(Zn)return Zn;const n=[];n.push(new Tt("bucket")),n.push(new Tt("generation")),n.push(new Tt("metageneration")),n.push(new Tt("name","fullPath",!0));function t(o,c){return Zg(c)}const e=new Tt("name");e.xform=t,n.push(e);function r(o,c){return c!==void 0?Number(c):c}const i=new Tt("size");return i.xform=r,n.push(i),n.push(new Tt("timeCreated")),n.push(new Tt("updated")),n.push(new Tt("md5Hash",null,!0)),n.push(new Tt("cacheControl",null,!0)),n.push(new Tt("contentDisposition",null,!0)),n.push(new Tt("contentEncoding",null,!0)),n.push(new Tt("contentLanguage",null,!0)),n.push(new Tt("contentType",null,!0)),n.push(new Tt("metadata","customMetadata",!0)),Zn=n,Zn}function t_(n,t){function e(){const r=n.bucket,i=n.fullPath,o=new bt(r,i);return t._makeStorageReference(o)}Object.defineProperty(n,"ref",{get:e})}function e_(n,t,e){const r={};r.type="file";const i=e.length;for(let o=0;o<i;o++){const c=e[o];r[c.local]=c.xform(r,t[c.server])}return t_(r,n),r}function Fl(n,t,e){const r=xl(t);return r===null?null:e_(n,r,e)}function n_(n,t,e,r){const i=xl(t);if(i===null||!gi(i.downloadTokens))return null;const o=i.downloadTokens;if(o.length===0)return null;const c=encodeURIComponent;return o.split(",").map(d=>{const T=n.bucket,w=n.fullPath,R="/b/"+c(T)+"/o/"+c(w),P=yi(R,e,r),N=Vl({alt:"media",token:d});return P+N})[0]}function r_(n,t){const e={},r=t.length;for(let i=0;i<r;i++){const o=t[i];o.writable&&(e[o.server]=n[o.local])}return JSON.stringify(e)}class Ul{constructor(t,e,r,i){this.url=t,this.method=e,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(n){if(!n)throw mi()}function s_(n,t){function e(r,i){const o=Fl(n,i,t);return Bl(o!==null),o}return e}function i_(n,t){function e(r,i){const o=Fl(n,i,t);return Bl(o!==null),n_(o,i,n.host,n._protocol)}return e}function jl(n){function t(e,r){let i;return e.getStatus()===401?e.getErrorText().includes("Firebase App Check token is invalid")?i=yg():i=_g():e.getStatus()===402?i=gg(n.bucket):e.getStatus()===403?i=Eg(n.path):i=r,i.status=e.getStatus(),i.serverResponse=r.serverResponse,i}return t}function o_(n){const t=jl(n);function e(r,i){let o=t(r,i);return r.getStatus()===404&&(o=mg(n.path)),o.serverResponse=i.serverResponse,o}return e}function a_(n,t,e){const r=t.fullServerUrl(),i=yi(r,n.host,n._protocol),o="GET",c=n.maxOperationRetryTime,u=new Ul(i,o,i_(n,e),c);return u.errorHandler=o_(t),u}function c_(n,t){return n&&n.contentType||t&&t.type()||"application/octet-stream"}function l_(n,t,e){const r=Object.assign({},e);return r.fullPath=n.path,r.size=t.size(),r.contentType||(r.contentType=c_(null,t)),r}function u_(n,t,e,r,i){const o=t.bucketOnlyServerUrl(),c={"X-Goog-Upload-Protocol":"multipart"};function u(){let F="";for(let z=0;z<2;z++)F=F+Math.random().toString().slice(2);return F}const f=u();c["Content-Type"]="multipart/related; boundary="+f;const d=l_(t,r,i),T=r_(d,e),w="--"+f+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+T+`\r
--`+f+`\r
Content-Type: `+d.contentType+`\r
\r
`,R=`\r
--`+f+"--",P=Zt.getBlob(w,r,R);if(P===null)throw Rg();const N={name:d.fullPath},O=yi(o,n.host,n._protocol),D="POST",$=n.maxUploadRetryTime,j=new Ul(O,D,s_(n,e),$);return j.urlParams=N,j.headers=c,j.body=P.uploadData(),j.errorHandler=jl(t),j}class h_{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ye.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ye.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ye.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,r,i,o){if(this.sent_)throw cn("cannot .send() more than once");if(vn(t)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(e,t,!0),o!==void 0)for(const c in o)o.hasOwnProperty(c)&&this.xhr_.setRequestHeader(c,o[c].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw cn("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw cn("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw cn("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw cn("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class f_ extends h_{initXhr(){this.xhr_.responseType="text"}}function $l(){return new f_}/**
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
 */class Re{constructor(t,e){this._service=t,e instanceof bt?this._location=e:this._location=bt.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new Re(t,e)}get root(){const t=new bt(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ml(this._location.path)}get storage(){return this._service}get parent(){const t=Xg(this._location.path);if(t===null)return null;const e=new bt(this._location.bucket,t);return new Re(this._service,e)}_throwIfRoot(t){if(this._location.path==="")throw Cg(t)}}function d_(n,t,e){n._throwIfRoot("uploadBytes");const r=u_(n.storage,n._location,Ll(),new Zt(t,!0),e);return n.storage.makeRequestWithTokens(r,$l).then(i=>({metadata:i,ref:n}))}function p_(n){n._throwIfRoot("getDownloadURL");const t=a_(n.storage,n._location,Ll());return n.storage.makeRequestWithTokens(t,$l).then(e=>{if(e===null)throw bg();return e})}function m_(n,t){const e=Jg(n._location.path,t),r=new bt(n._location.bucket,e);return new Re(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_(n){return/^[A-Za-z]+:\/\//.test(n)}function __(n,t){return new Re(n,t)}function ql(n,t){if(n instanceof Ei){const e=n;if(e._bucket==null)throw vg();const r=new Re(e,e._bucket);return t!=null?ql(r,t):r}else return t!==void 0?m_(n,t):n}function y_(n,t){if(t&&g_(t)){if(n instanceof Ei)return __(n,t);throw ks("To use ref(service, url), the first argument must be a Storage instance.")}else return ql(n,t)}function ka(n,t){const e=t?.[Pl];return e==null?null:bt.makeFromBucketSpec(e,n)}function E_(n,t,e,r={}){n.host=`${t}:${e}`;const i=vn(t);i&&(Ba(`https://${n.host}/b`),$a("Storage",!0)),n._isUsingEmulator=!0,n._protocol=i?"https":"http";const{mockUserToken:o}=r;o&&(n._overrideAuthToken=typeof o=="string"?o:ja(o,n.app.options.projectId))}class Ei{constructor(t,e,r,i,o,c=!1){this.app=t,this._authProvider=e,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._isUsingEmulator=c,this._bucket=null,this._host=Cl,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=dg,this._maxUploadRetryTime=pg,this._requests=new Set,i!=null?this._bucket=bt.makeFromBucketSpec(i,this._host):this._bucket=ka(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=bt.makeFromBucketSpec(this._url,t):this._bucket=ka(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Na("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Na("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(e!==null)return e.accessToken}return null}async _getAppCheckToken(){if(Wa(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Re(this,t)}_makeRequest(t,e,r,i,o=!0){if(this._deleted)return new Pg(Dl());{const c=Bg(t,this._appId,r,i,e,this._firebaseVersion,o,this._isUsingEmulator);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(t,e){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,r,i).getPromise()}}const Oa="@firebase/storage",xa="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl="storage";function P_(n,t,e){return n=Pt(n),d_(n,t,e)}function D_(n){return n=Pt(n),p_(n)}function V_(n,t){return n=Pt(n),y_(n,t)}function T_(n=Ls(),t){n=Pt(n);const r=je(n,zl).getImmediate({identifier:t}),i=Fa("storage");return i&&w_(r,...i),r}function w_(n,t,e,r={}){E_(n,t,e,r)}function I_(n,{instanceIdentifier:t}){const e=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new Ei(e,r,i,t,Qa)}function A_(){Ht(new Ft(zl,I_,"PUBLIC").setMultipleInstances(!0)),Ct(Oa,xa,""),Ct(Oa,xa,"esm2020")}A_();const v_={apiKey:"AIzaSyAtoCWn_tCjcPFrufPreujgb8m4jFIfHXk",authDomain:"quroixlab.firebaseapp.com",projectId:"quroixlab",storageBucket:"quroixlab.firebasestorage.app",messagingSenderId:"914619949576",appId:"1:914619949576:web:e82b28d953449d529667bd",measurementId:"G-5DE0HRXNHN"},Ti=Xa(v_);typeof window<"u"&&Td(Ti);const N_=Ym(Ti),k_=T_(Ti);export{S_ as a,k_ as b,b_ as c,N_ as d,D_ as g,V_ as r,C_ as s,P_ as u};
