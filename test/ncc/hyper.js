module.exports=function(e){var t={};function __webpack_require__(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,__webpack_require__),r.l=!0,r.exports}return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,n){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(__webpack_require__.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)__webpack_require__.d(n,r,function(t){return e[t]}.bind(null,r));return n},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=16)}([function(e,t){var n=this||{};try{n.WeakMap=WeakMap}catch(e){n.WeakMap=function(e,t){"use strict";var n=t.defineProperty,r=t.hasOwnProperty,o=WeakMap.prototype;return o.delete=function(e){return this.has(e)&&delete e[this._]},o.get=function(e){return this.has(e)?e[this._]:void 0},o.has=function(e){return r.call(e,this._)},o.set=function(e,t){return n(e,this._,{configurable:!0,value:t}),this},WeakMap;function WeakMap(t){n(this,"_",{value:"_@ungap/weakmap"+e++}),t&&t.forEach(add,this)}function add(e){this.set(e[0],e[1])}}(Math.random(),Object)}e.exports=n.WeakMap},function(e,t,n){"use strict";const r=document.defaultView;t.G=r;t.ELEMENT_NODE=1;t.DOCUMENT_FRAGMENT_NODE=11;t.OWNER_SVG_ELEMENT="ownerSVGElement";t.CONNECTED="connected";t.DISCONNECTED="disconnected"},function(e,t,n){"use strict";const r=(e=>e.__esModule?e.default:e)(n(25)),o=e=>e.ownerDocument||e;t.doc=o;const a=e=>o(e).createDocumentFragment();t.fragment=a;t.text=((e,t)=>o(e).createTextNode(t));const i="append"in a(document)?(e,t)=>{e.append.apply(e,t)}:(e,t)=>{const n=t.length;for(let r=0;r<n;r++)e.appendChild(t[r])};t.append=i;t.reArguments=function(e){const t=[r(e)];for(let e=1,n=arguments.length;e<n;e++)t[e]=arguments[e];return t};const s=[].slice;t.slice=s},function(e,t){var n=this||{};try{n.Map=Map}catch(e){n.Map=function Map(){var e=0,t=[],n=[];return{delete:function(r){var o=contains(r);return o&&(t.splice(e,1),n.splice(e,1)),o},get:function get(t){return contains(t)?n[e]:void 0},has:function has(e){return contains(e)},set:function set(r,o){return n[contains(r)?e:t.push(r)-1]=o,this}};function contains(n){return-1<(e=t.indexOf(n))}}}e.exports=n.Map},function(e,t,n){"use strict";const r=(e=>e.__esModule?e.default:e)(n(8)),o=(e=>e.__esModule?e.default:e)(n(3)),a=(e=>e.__esModule?e.default:e)(n(0));function Component(){return this}Object.defineProperty(t,"__esModule",{value:!0}).default=Component,t.setup=function setup(e){const t=new a,n=Object.create,s=(e,t)=>{const n={w:null,p:null};return t.set(e,n),n};Object.defineProperties(Component,{for:{configurable:!0,value(e,r){return((e,t,r,o)=>{const i=t.get(e)||s(e,t);switch(typeof o){case"object":case"function":const t=i.w||(i.w=new a);return t.get(o)||((e,t,n)=>(e.set(t,n),n))(t,o,new e(r));default:const s=i.p||(i.p=n(null));return s[o]||(s[o]=new e(r))}})(this,t.get(e)||(e=>{const n=new o;return t.set(e,n),n})(e),e,null==r?"default":r)}}}),Object.defineProperties(Component.prototype,{handleEvent:{value(e){const t=e.currentTarget;this["getAttribute"in t&&t.getAttribute("data-call")||"on"+e.type](e)}},html:i("html",e),svg:i("svg",e),state:i("state",function(){return this.defaultState}),defaultState:{get:()=>({})},dispatch:{value(e,t){const{_wire$:n}=this;if(n){const o=new r(e,{bubbles:!0,cancelable:!0,detail:t});return o.component=this,(n.dispatchEvent?n:n.childNodes[0]).dispatchEvent(o)}return!1}},setState:{value(e,t){const n=this.state,r="function"==typeof e?e.call(this,n):e;for(const e in r)n[e]=r[e];return!1!==t&&this.render(),this}}})};const i=(e,t)=>{const n="_"+e+"$";return{get(){return this[n]||s(this,n,t.call(this,e))},set(e){s(this,n,e)}}},s=(e,t,n)=>Object.defineProperty(e,t,{configurable:!0,value:"function"==typeof n?function(){return e._wire$=n.apply(this,arguments)}:n})[t]},function(e,t,n){"use strict";const r=(e=>e.__esModule?e.default:e)(n(8)),o=(e=>e.__esModule?e.default:e)(n(6)),a=(e=>e.__esModule?e.default:e)(n(18)),i=(e=>e.__esModule?e.default:e)(n(10)),s=(e=>e.__esModule?e.default:e)(n(19)),u=(e=>e.__esModule?e.default:e)(n(7)),c=(e=>e.__esModule?e.default:e)(n(20)),l=(e=>e.__esModule?e.default:e)(n(24)),{CONNECTED:d,DISCONNECTED:f,DOCUMENT_FRAGMENT_NODE:p,OWNER_SVG_ELEMENT:h}=n(1),_=(e=>e.__esModule?e.default:e)(n(4)),v=(e=>e.__esModule?e.default:e)(n(13)),g=(e=>e.__esModule?e.default:e)(n(9)),{slice:b,text:m}=n(2),y=s({Event:r,WeakSet:o});t.Tagger=Tagger,t.observe=y;const E=e=>({html:e}),N=(e,t)=>"ELEMENT_NODE"in e?e:e.constructor===v?1/t<0?t?e.remove():e.last:t?e.valueOf(!0):e.first:N(e.render(),t),w=(e,t)=>{t(e.placeholder),"text"in e?Promise.resolve(e.text).then(String).then(t):"any"in e?Promise.resolve(e.any).then(t):"html"in e?Promise.resolve(e.html).then(E).then(t):Promise.resolve(g.invoke(e,t)).then(t)},M=e=>null!=e&&"then"in e,O=/^(?:form|list)$/i;function Tagger(e){return this.type=e,c(this)}Tagger.prototype={attribute(e,t,n){const r=h in e;let o;if("style"===t)return l(e,n,r);if(/^on/.test(t)){let n=t.slice(2);return n===d||n===f?y(e):t.toLowerCase()in e&&(n=n.toLowerCase()),t=>{o!==t&&(o&&e.removeEventListener(n,o,!1),o=t,t&&e.addEventListener(n,t,!1))}}if("data"===t||!r&&t in e&&!O.test(t))return n=>{o!==n&&(o=n,e[t]!==n&&(e[t]=n,null==n&&e.removeAttribute(t)))};if(t in g.attributes)return n=>{o=g.attributes[t](e,n),e.setAttribute(t,null==o?"":o)};{let t=!1;const r=n.cloneNode(!0);return n=>{o!==n&&(o=n,r.value!==n&&(null==n?(t&&(t=!1,e.removeAttributeNode(r)),r.value=n):(r.value=n,t||(t=!0,e.setAttributeNode(r)))))}}},any(e,t){const n={node:N,before:e},r=h in e?"svg":"html";let o,s=!1;const c=l=>{switch(typeof l){case"string":case"number":case"boolean":s?o!==l&&(o=l,t[0].textContent=l):(s=!0,o=l,t=u(e.parentNode,t,[m(e,l)],n));break;case"function":c(l(e));break;case"object":case"undefined":if(null==l){s=!1,t=u(e.parentNode,t,[],n);break}default:if(s=!1,o=l,a(l))if(0===l.length)t.length&&(t=u(e.parentNode,t,[],n));else switch(typeof l[0]){case"string":case"number":case"boolean":c({html:l});break;case"object":if(a(l[0])&&(l=l.concat.apply([],l)),M(l[0])){Promise.all(l).then(c);break}default:t=u(e.parentNode,t,l,n)}else(e=>"ELEMENT_NODE"in e||e instanceof v||e instanceof _)(l)?t=u(e.parentNode,t,l.nodeType===p?b.call(l.childNodes):[l],n):M(l)?l.then(c):"placeholder"in l?w(l,c):"text"in l?c(String(l.text)):"any"in l?c(l.any):"html"in l?t=u(e.parentNode,t,b.call(i([].concat(l.html).join(""),r).childNodes),n):c("length"in l?b.call(l):g.invoke(l,c))}};return c},text(e){let t;const n=r=>{if(t!==r){t=r;const o=typeof r;"object"===o&&r?M(r)?r.then(n):"placeholder"in r?w(r,n):n("text"in r?String(r.text):"any"in r?r.any:"html"in r?[].concat(r.html).join(""):"length"in r?b.call(r).join(""):g.invoke(r,n)):"function"===o?n(r(e)):e.textContent=null==r?"":r}};return n}}},function(e,t){var n=this||{};try{n.WeakSet=WeakSet}catch(e){!function(e,t){var r=WeakSet.prototype;function WeakSet(){"use strict";t(this,"_",{value:"_@ungap/weakmap"+e++})}r.add=function(e){return this.has(e)||t(e,this._,{value:!0,configurable:!0}),this},r.has=function(e){return this.hasOwnProperty.call(e,this._)},r.delete=function(e){return this.has(e)&&delete e[this._]},n.WeakSet=WeakSet}(Math.random(),Object.defineProperty)}e.exports=n.WeakSet},function(e,t,n){"use strict";const{eqeq:r,identity:o,indexOf:a,isReversed:i,next:s,append:u,remove:c,smartDiff:l}=n(17);Object.defineProperty(t,"__esModule",{value:!0}).default=((e,t,n,d)=>{d||(d={});const f=d.compare||r,p=d.node||o,h=null==d.before?null:p(d.before,0),_=t.length;let v=_,g=0,b=n.length,m=0;for(;g<v&&m<b&&f(t[g],n[m]);)g++,m++;for(;g<v&&m<b&&f(t[v-1],n[b-1]);)v--,b--;const y=g===v,E=m===b;if(y&&E)return n;if(y&&m<b)return u(p,e,n,m,b,s(p,t,g,_,h)),n;if(E&&g<v)return c(p,e,t,g,v),n;const N=v-g,w=b-m;let M=-1;if(N<w){if(-1<(M=a(n,m,b,t,g,v,f)))return u(p,e,n,m,M,p(t[g],0)),u(p,e,n,M+N,b,s(p,t,v,_,h)),n}else if(w<N&&-1<(M=a(t,g,v,n,m,b,f)))return c(p,e,t,g,M),c(p,e,t,M+w,v),n;return N<2||w<2?(u(p,e,n,m,b,p(t[g],0)),c(p,e,t,g,v),n):N===w&&i(n,b,t,g,v,f)?(u(p,e,n,m,b,s(p,t,v,_,h)),n):(l(p,e,n,m,b,w,t,g,v,N,_,f,h),n)})},function(e,t){var n=this||{};try{n.CustomEvent=new CustomEvent(".").constructor}catch(e){n.CustomEvent=function CustomEvent(e,t){t||(t={});var n=!!t.bubbles,r=!!t.cancelable,o=document.createEvent("Event");o.initEvent(e,n,r),o.detail=t.detail;try{o.bubbles=n,o.cancelable=r}catch(o){}return o}}e.exports=n.CustomEvent},function(e,t,n){"use strict";const r={},o={},a=[],i=o.hasOwnProperty;let s=0;Object.defineProperty(t,"__esModule",{value:!0}).default={attributes:r,define:(e,t)=>{e.indexOf("-")<0?(e in o||(s=a.push(e)),o[e]=t):r[e]=t},invoke:(e,t)=>{for(let n=0;n<s;n++){let r=a[n];if(i.call(e,r))return o[r](e[r],t)}}}},function(e,t){var n=function(e){"use strict";var t="fragment",n="content"in create("template")?function(e){var t=create("template");return t.innerHTML=e,t.content}:function(e){var n=create(t),r=create("template"),o=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var a=RegExp.$1;r.innerHTML="<table>"+e+"</table>",o=r.querySelectorAll(a)}else r.innerHTML=e,o=r.childNodes;return append(n,o),n};return function createContent(e,r){return("svg"===r?function createSVG(e){var n=create(t),r=create("div");return r.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",append(n,r.firstChild.childNodes),n}:n)(e)};function append(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function create(n){return n===t?e.createDocumentFragment():e.createElement(n)}}(document);e.exports=n},function(e,t,n){"use strict";var r,o="-"+Math.random().toFixed(6)+"%";"content"in(r=document.createElement("template"))&&(r.innerHTML='<p tabindex="'+o+'"></p>',r.content.childNodes[0].getAttribute("tabindex")==o)||(o="_dt: "+o.slice(1,-1)+";");var a="\x3c!--"+o+"--\x3e";t.UID=o,t.UIDC=a,t.COMMENT_NODE=8,t.DOCUMENT_FRAGMENT_NODE=11,t.ELEMENT_NODE=1,t.TEXT_NODE=3,t.SHOULD_USE_TEXT_CONTENT=/^(?:style|textarea)$/i,t.VOID_ELEMENTS=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i},function(e,t){var n="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")};e.exports=n},function(e,t,n){"use strict";const{append:r,doc:o,fragment:a}=n(2);function Wire(e){this.childNodes=e,this.length=e.length,this.first=e[0],this.last=e[this.length-1],this._=null}Object.defineProperty(t,"__esModule",{value:!0}).default=Wire,Wire.prototype.valueOf=function valueOf(e){const t=null==this._;return t&&(this._=a(this.first)),(t||e)&&r(this._,this.childNodes),this._},Wire.prototype.remove=function remove(){this._=null;const e=this.first,t=this.last;if(2===this.length)t.parentNode.removeChild(t);else{const n=o(e).createRange();n.setStartBefore(this.childNodes[1]),n.setEndAfter(t),n.deleteContents()}return e}},function(e,t,n){"use strict";const r=(e=>e.__esModule?e.default:e)(n(0)),o=(e=>e.__esModule?e.default:e)(n(12)),{ELEMENT_NODE:a}=n(1),i=(e=>e.__esModule?e.default:e)(n(13)),{Tagger:s}=n(5),{reArguments:u}=n(2),c=new r,l=e=>{let t,n,r;return function(){const o=u.apply(null,arguments);return r!==o[0]?(r=o[0],n=new s(e),t=f(n.apply(n,o))):n.apply(n,o),t}},d=(e,t)=>{const n=t.indexOf(":");let r=c.get(e),o=t;return-1<n&&(o=t.slice(n+1),t=t.slice(0,n)||"html"),r||c.set(e,r={}),r[o]||(r[o]=l(t))},f=e=>{const t=e.childNodes,n=t.length,r=[];for(let e=0;e<n;e++){let n=t[e];n.nodeType!==a&&0===o.call(n.textContent).length||r.push(n)}return 1===r.length?r[0]:new i(r)};t.content=l,t.weakly=d,Object.defineProperty(t,"__esModule",{value:!0}).default=((e,t)=>null==e?l(t||"html"):d(e,t||"html"))},function(e,t,n){"use strict";const r=(e=>e.__esModule?e.default:e)(n(0)),o=(e=>e.__esModule?e.default:e)(n(6)),a=(e=>e.__esModule?e.default:e)(n(7)),i=(e=>e.__esModule?e.default:e)(n(4)),{setup:s}=n(4),u=(e=>e.__esModule?e.default:e)(n(9)),{observe:c,Tagger:l}=n(5),d=(e=>e.__esModule?e.default:e)(n(14)),{content:f,weakly:p}=n(14),h=(e=>e.__esModule?e.default:e)(n(26)),{G:_}=n(1),v=e=>h.bind(e),g=u.define,b=l.prototype;function hyper(e){return arguments.length<2?null==e?f("html"):"string"==typeof e?hyper.wire(null,e):"raw"in e?f("html")(e):"nodeType"in e?hyper.bind(e):p(e,"html"):("raw"in e?f("html"):hyper.wire).apply(null,arguments)}hyper.Component=i,hyper.bind=v,hyper.define=g,hyper.diff=a,hyper.hyper=hyper,hyper.observe=c,hyper.tagger=b,hyper.wire=d,hyper._={global:_,WeakMap:r,WeakSet:o},s(f),t.Component=i,t.bind=v,t.define=g,t.diff=a,t.hyper=hyper,t.observe=c,t.tagger=b,t.wire=d,Object.defineProperty(t,"__esModule",{value:!0}).default=hyper},function(e,t,n){"use strict";n.r(t);var r=n(15);Object(r.bind)(document.body)`
<p style=${"font-family:sans-serif;"}>
  Hello <strong>World</strong>!
</p>`},function(e,t,n){"use strict";const r=n(3),o=(e,t,n,r,o,a)=>{if(o-r<2)t.insertBefore(e(n[r],1),a);else{const i=t.ownerDocument.createDocumentFragment();for(;r<o;)i.appendChild(e(n[r++],1));t.insertBefore(i,a)}};t.append=o;t.eqeq=((e,t)=>e==t);t.identity=(e=>e);t.indexOf=((e,t,n,r,o,a,i)=>{const s=a-o;if(s<1)return-1;for(;n-t>=s;){let s=t,u=o;for(;s<n&&u<a&&i(e[s],r[u]);)s++,u++;if(u===a)return t;t=s+1}return-1});t.isReversed=((e,t,n,r,o,a)=>{for(;r<o&&a(n[r],e[t-1]);)r++,t--;return 0===t});t.next=((e,t,n,r,o)=>n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:o);const a=(e,t,n,r,o)=>{if(o-r<2)t.removeChild(e(n[r],-1));else{const a=t.ownerDocument.createRange();a.setStartBefore(e(n[r],-1)),a.setEndAfter(e(n[o-1],-1)),a.deleteContents()}};t.remove=a;const i=(e,t,n)=>{let r=1,o=t;for(;r<o;){const t=(r+o)/2>>>0;n<e[t]?o=t:r=t+1}return r};t.smartDiff=((e,t,n,s,u,c,l,d,f,p,h,_,v)=>{((e,t,n,i,s,u,c,l,d)=>{const f=new r,p=e.length;let h=c,_=0;for(;_<p;)switch(e[_++]){case 0:s++,h++;break;case 1:f.set(i[s],1),o(t,n,i,s++,s,h<l?t(u[h],1):d);break;case-1:h++}for(_=0;_<p;)switch(e[_++]){case 0:c++;break;case-1:f.has(u[c])?c++:a(t,n,u,c++,c)}})(((e,t,n,r,o,a,i)=>{const s=n+a,u=[];let c,l,d,f,p,h,_;e:for(c=0;c<=s;c++){if(c>50)return null;for(_=c-1,p=c?u[c-1]:[0,0],h=u[c]=[],l=-c;l<=c;l+=2){for(d=(f=l===-c||l!==c&&p[_+l-1]<p[_+l+1]?p[_+l+1]:p[_+l-1]+1)-l;f<a&&d<n&&i(r[o+f],e[t+d]);)f++,d++;if(f===a&&d===n)break e;h[c+l]=f}}const v=Array(c/2+s/2);let g=v.length-1;for(c=u.length-1;c>=0;c--){for(;f>0&&d>0&&i(r[o+f-1],e[t+d-1]);)v[g--]=0,f--,d--;if(!c)break;_=c-1,p=c?u[c-1]:[0,0],(l=f-d)==-c||l!==c&&p[_+l-1]<p[_+l+1]?(d--,v[g--]=1):(f--,v[g--]=-1)}return v})(n,s,c,l,d,p,_)||((e,t,n,o,a,s,u,c)=>{let l=0,d=o<c?o:c;const f=Array(d++),p=Array(d);p[0]=-1;for(let e=1;e<d;e++)p[e]=u;const h=new r;for(let e=s;e<u;e++)h.set(a[e],e);for(let r=t;r<n;r++){const t=h.get(e[r]);null!=t&&-1<(l=i(p,d,t))&&(p[l]=t,f[l]={newi:r,oldi:t,prev:f[l-1]})}for(l=--d,--u;p[l]>u;)--l;d=c+o-l;const _=Array(d);let v=f[l];for(--n;v;){const{newi:e,oldi:t}=v;for(;n>e;)_[--d]=1,--n;for(;u>t;)_[--d]=-1,--u;_[--d]=0,--n,--u,v=v.prev}for(;n>=t;)_[--d]=1,--n;for(;u>=s;)_[--d]=-1,--u;return _})(n,s,u,c,l,d,f,p),e,t,n,s,l,d,h,v)})},function(e,t){var n,r,o=Array.isArray||(r=(n={}.toString).call([]),function isArray(e){return n.call(e)===r});e.exports=o},function(e,t){e.exports=function disconnected(e){"use strict";var t="connected",n="dis"+t,r=e.Event,o=e.WeakSet,a=!0,i=new o;return function observe(e){return a&&(a=!a,function startObserving(e){var a=null;try{new MutationObserver(changes).observe(e,{subtree:!0,childList:!0})}catch(t){var s=0,u=[],c=function(e){u.push(e),clearTimeout(s),s=setTimeout(function(){changes(u.splice(s=0,u.length))},0)};e.addEventListener("DOMNodeRemoved",function(e){c({addedNodes:[],removedNodes:[e.target]})},!0),e.addEventListener("DOMNodeInserted",function(e){c({addedNodes:[e.target],removedNodes:[]})},!0)}function changes(e){a=new Tracker;for(var r,o=e.length,i=0;i<o;i++)dispatchAll((r=e[i]).removedNodes,n,t),dispatchAll(r.addedNodes,t,n);a=null}function dispatchAll(e,t,n){for(var o,a=new r(t),i=e.length,s=0;s<i;1===(o=e[s++]).nodeType&&dispatchTarget(o,a,t,n));}function dispatchTarget(e,t,n,r){i.has(e)&&!a[n].has(e)&&(a[r].delete(e),a[n].add(e),e.dispatchEvent(t));for(var o=e.children||[],s=o.length,u=0;u<s;dispatchTarget(o[u++],t,n,r));}function Tracker(){this[t]=new o,this[n]=new o}}(e.ownerDocument)),i.add(e),e}}},function(e,t,n){"use strict";const r=(e=>e.__esModule?e.default:e)(n(0)),o=(e=>e.__esModule?e.default:e)(n(10)),a=(e=>e.__esModule?e.default:e)(n(21)),i=(e=>e.__esModule?e.default:e)(n(22)),{find:s,parse:u}=n(23);Object.defineProperty(t,"__esModule",{value:!0}).default=function domtagger(e){return function(t){var n=l.get(e);return null!=n&&n.template===t||(n=function createDetails(e,t){var n=c.get(t)||function createInfo(e,t){var n=i(t),r=e.transform;r&&(n=r(n));var a=o(n,e.type),l=[];u(a,l,t.slice(0));var d={content:a,updates:function(n){for(var r=[],o=l.length,a=0;a<o;){var i=l[a++],u=s(n,i.path);switch(i.type){case"any":r.push(e.any(u,[]));break;case"attr":r.push(e.attribute(u,i.name,i.node));break;case"text":r.push(e.text(u)),u.textContent=""}}return function(){var e=arguments.length,a=e-1,i=1;if(o!==a)throw new Error(a+" values instead of "+o+"\n"+t.join(", "));for(;i<e;)r[i-1](arguments[i++]);return n}}};return c.set(t,d),d}(e,t),r=a.call(document,n.content,!0),d={content:r,template:t,updates:n.updates(r)};return l.set(e,d),d}(e,t)),n.updates.apply(null,arguments),n.content}};var c=new r,l=new r},function(e,t){var n=function(e,t,n,r,o){var a="importNode"in e,i=e.createDocumentFragment();return i.appendChild(e.createTextNode("g")),i.appendChild(e.createTextNode("")),(a?e.importNode(i,!0):i.cloneNode(!0)).childNodes.length<2?function importNode(e,t){for(var n=e.cloneNode(),r=e.childNodes||[],o=r.length,a=0;t&&a<o;a++)n.appendChild(importNode(r[a],t));return n}:a?e.importNode:function(e,t){return e.cloneNode(!!t)}}(document);e.exports=n},function(e,t,n){"use strict";const{UID:r,UIDC:o,VOID_ELEMENTS:a}=n(11);Object.defineProperty(t,"__esModule",{value:!0}).default=function(e){return e.join(o).replace(d,fullClosing).replace(l,attrReplacer)};var i=" \\f\\n\\r\\t",s="[ "+i+"]+[^  \\f\\n\\r\\t\\/>\"'=]+",u="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",c="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|[^  \\f\\n\\r\\t\\/>\"'=]+))?)",l=new RegExp(u+s+c+"+)([ "+i+"]*/?>)","g"),d=new RegExp(u+s+c+"*)([ "+i+"]*/>)","g"),f=new RegExp("("+s+"\\s*=\\s*)(['\"]?)"+o+"\\2","gi");function attrReplacer(e,t,n,r){return"<"+t+n.replace(f,replaceAttributes)+r}function replaceAttributes(e,t,n){return t+(n||'"')+r+(n||'"')}function fullClosing(e,t,n){return a.test(t)?e:"<"+t+n+"></"+t+">"}},function(e,t,n){"use strict";const r=(e=>e.__esModule?e.default:e)(n(3)),o=(e=>e.__esModule?e.default:e)(n(12)),{UID:a,UIDC:i,COMMENT_NODE:s,DOCUMENT_FRAGMENT_NODE:u,ELEMENT_NODE:c,SHOULD_USE_TEXT_CONTENT:l,TEXT_NODE:d}=n(11);function create(e,t,n){return{type:e,name:n,node:t,path:createPath(t)}}function createPath(e){var t,n=[];switch(e.nodeType){case c:case u:t=e;break;case s:prepend(n,t=e.parentNode,e);break;default:t=e.ownerElement}for(;t=(e=t).parentNode;)prepend(n,t,e);return n}function parseAttributes(e,t,n){for(var o=new r,i=e.attributes,s=[],u=s.slice.call(i,0),c=u.length,l=0;l<c;){var d=u[l++];if(d.value===a){var f=d.name;if(!o.has(f)){var p=n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*['"]?$/,"$1"),h=i[p]||i[p.toLowerCase()];o.set(f,h),t.push(create("attr",h,p))}s.push(d)}}for(c=s.length,l=0;l<c;){var _=s[l++];/^id$/i.test(_.name)?e.removeAttribute(_.name):e.removeAttributeNode(_)}var v=e.nodeName;if(/^script$/i.test(v)){var g=document.createElement(v);for(c=i.length,l=0;l<c;)g.setAttributeNode(i[l++].cloneNode(!0));g.textContent=e.textContent,e.parentNode.replaceChild(g,e)}}function prepend(e,t,n){e.unshift(e.indexOf.call(t.childNodes,n))}t.find=function find(e,t){var n=t.length,r=0;for(;r<n;)e=e.childNodes[t[r++]];return e},t.parse=function parse(e,t,n){var r=e.childNodes;var u=r.length;var f=0;for(;f<u;){var p=r[f++];switch(p.nodeType){case c:parseAttributes(p,t,n),parse(p,t,n);break;case s:p.textContent===a&&(n.shift(),t.push(l.test(e.nodeName)?create("text",e):create("any",p)));break;case d:l.test(e.nodeName)&&o.call(p.textContent)===i&&(n.shift(),t.push(create("text",e)))}}}},function(e,t){var n=function(){"use strict";var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function hyperStyle(e,t){return"ownerSVGElement"in e?function svg(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),update(n,!0)}(e,t):update(e.style,!1)};function ized(e,t,n){return t+"-"+n.toLowerCase()}function update(n,r){var o,a;return function(i){var s,u,c,l;switch(typeof i){case"object":if(i){if("object"===o){if(!r&&a!==i)for(u in a)u in i||(n[u]="")}else r?n.value="":n.cssText="";for(u in s=r?{}:n,i)c="number"!=typeof(l=i[u])||e.test(u)?l:l+"px",!r&&/^--/.test(u)?s.setProperty(u,c):s[u]=c;o="object",r?n.value=function toStyle(e){var n,r=[];for(n in e)r.push(n.replace(t,ized),":",e[n],";");return r.join("")}(a=s):a=i;break}default:a!=i&&(o="string",a=i,r?n.value=i||"":n.cssText=i||"")}}}}();e.exports=n},function(e,t){var n=function(){"use strict";var e=!1,t=function(n){if(!("raw"in n)||n.propertyIsEnumerable("raw")||!Object.isFrozen(n.raw)||/Firefox\/(\d+)/.test((document.defaultView.navigator||{}).userAgent)&&parseFloat(RegExp.$1)<55){var r={};return(t=function(e){var t="raw"+e.join("raw");return r[t]||(r[t]=e)})(n)}return e=!0,n};return function(n){return e?n:t(n)}}();e.exports=n},function(e,t,n){"use strict";const r=(e=>e.__esModule?e.default:e)(n(0)),{OWNER_SVG_ELEMENT:o}=n(1),{Tagger:a}=n(5),{reArguments:i}=n(2),s=new r;Object.defineProperty(t,"__esModule",{value:!0}).default=function render(){const e=s.get(this),t=i.apply(null,arguments);return e&&e.template===t[0]?e.tagger.apply(null,t):function upgrade(){const e=i.apply(null,arguments),t=new a(o in this?"svg":"html");s.set(this,{tagger:t,template:e[0]}),this.textContent="",this.appendChild(t.apply(null,e))}.apply(this,t),this}}]);