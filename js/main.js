(()=>{var e={208:()=>{function e(e){var t=!0,n=!1,i=null,s={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function o(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function r(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function a(e){t=!1}function l(){document.addEventListener("mousemove",h),document.addEventListener("mousedown",h),document.addEventListener("mouseup",h),document.addEventListener("pointermove",h),document.addEventListener("pointerdown",h),document.addEventListener("pointerup",h),document.addEventListener("touchmove",h),document.addEventListener("touchstart",h),document.addEventListener("touchend",h)}function h(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",h),document.removeEventListener("mousedown",h),document.removeEventListener("mouseup",h),document.removeEventListener("pointermove",h),document.removeEventListener("pointerdown",h),document.removeEventListener("pointerup",h),document.removeEventListener("touchmove",h),document.removeEventListener("touchstart",h),document.removeEventListener("touchend",h))}document.addEventListener("keydown",(function(n){n.metaKey||n.altKey||n.ctrlKey||(o(e.activeElement)&&r(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",a,!0),document.addEventListener("pointerdown",a,!0),document.addEventListener("touchstart",a,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(n&&(t=!0),l())}),!0),l(),e.addEventListener("focus",(function(e){var n,i,a;o(e.target)&&(t||(i=(n=e.target).type,"INPUT"===(a=n.tagName)&&s[i]&&!n.readOnly||"TEXTAREA"===a&&!n.readOnly||n.isContentEditable))&&r(e.target)}),!0),e.addEventListener("blur",(function(e){var t;o(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(i),i=window.setTimeout((function(){n=!1}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,n),o.exports}(()=>{"use strict";n(208),window,document,document.documentElement,document.body;const e={svg:"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/xmlns/",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",ct:"http://gionkunz.github.com/chartist-js/ct"},t=8,i={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"};function s(e,t){return"number"==typeof e?e+t:e}function o(e){if("string"==typeof e){const t=/^(\d+)\s*(.*)$/g.exec(e);return{value:t?+t[1]:0,unit:(null==t?void 0:t[2])||void 0}}return{value:Number(e)}}const r=2221e-19;function a(e,t,n){return t/n.range*e}function l(e,n){const i=Math.pow(10,n||t);return Math.round(e*i)/i}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];for(let t=0;t<n.length;t++){const i=n[t];for(const t in i){const n=i[t];e[t]="object"!=typeof n||null===n||n instanceof Array?n:h(e[t],n)}}return e}const c=e=>e;function d(e,t){return Array.from({length:e},t?(e,n)=>t(n):()=>{})}function u(e,t){return null!==e&&"object"==typeof e&&Reflect.has(e,t)}function m(e){return null!==e&&isFinite(e)}function p(e){return m(e)?Number(e):void 0}function f(e,t){const n=Array.isArray(e)?e[t]:u(e,"data")?e.data[t]:null;return u(n,"meta")?n.meta:void 0}function v(e){return null==e||"number"==typeof e&&isNaN(e)}function g(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"y";return function(e){return"object"==typeof e&&null!==e&&(Reflect.has(e,"x")||Reflect.has(e,"y"))}(e)&&u(e,t)?p(e[t]):p(e)}function y(e,t){if(!v(e))return t?function(e,t){let n,i;if("object"!=typeof e){const s=p(e);"x"===t?n=s:i=s}else u(e,"x")&&(n=p(e.x)),u(e,"y")&&(i=p(e.y));if(void 0!==n||void 0!==i)return{x:n,y:i}}(e,t):p(e)}function x(e,t){return Array.isArray(e)?e.map((e=>u(e,"value")?y(e.value,t):y(e,t))):x(e.data,t)}function w(e,t,n){if(i=e,Array.isArray(i)&&i.every((e=>Array.isArray(e)||u(e,"data"))))return e.map((e=>x(e,t)));var i;const s=x(e,t);return n?s.map((e=>[e])):s}function E(e,t,n){const i={increasingX:!1,fillHoles:!1,...n},s=[];let o=!0;for(let n=0;n<e.length;n+=2)void 0===g(t[n/2].value)?i.fillHoles||(o=!0):(i.increasingX&&n>=2&&e[n]<=e[n-2]&&(o=!0),o&&(s.push({pathCoordinates:[],valueData:[]}),o=!1),s[s.length-1].pathCoordinates.push(e[n],e[n+1]),s[s.length-1].valueData.push(t[n/2]));return s}function b(e){let t="";return null==e?e:(t="number"==typeof e?""+e:"object"==typeof e?JSON.stringify({data:e}):String(e),Object.keys(i).reduce(((e,t)=>e.replaceAll(t,i[t])),t))}class L{call(e,t){return this.svgElements.forEach((n=>Reflect.apply(n[e],n,t))),this}attr(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.call("attr",t)}elem(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.call("elem",t)}root(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.call("root",t)}getNode(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.call("getNode",t)}foreignObject(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.call("foreignObject",t)}text(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.call("text",t)}empty(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.call("empty",t)}remove(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.call("remove",t)}addClass(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.call("addClass",t)}removeClass(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.call("removeClass",t)}removeAllClasses(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.call("removeAllClasses",t)}animate(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.call("animate",t)}constructor(e){this.svgElements=[];for(let t=0;t<e.length;t++)this.svgElements.push(new M(e[t]))}}const A={easeInSine:[.47,0,.745,.715],easeOutSine:[.39,.575,.565,1],easeInOutSine:[.445,.05,.55,.95],easeInQuad:[.55,.085,.68,.53],easeOutQuad:[.25,.46,.45,.94],easeInOutQuad:[.455,.03,.515,.955],easeInCubic:[.55,.055,.675,.19],easeOutCubic:[.215,.61,.355,1],easeInOutCubic:[.645,.045,.355,1],easeInQuart:[.895,.03,.685,.22],easeOutQuart:[.165,.84,.44,1],easeInOutQuart:[.77,0,.175,1],easeInQuint:[.755,.05,.855,.06],easeOutQuint:[.23,1,.32,1],easeInOutQuint:[.86,0,.07,1],easeInExpo:[.95,.05,.795,.035],easeOutExpo:[.19,1,.22,1],easeInOutExpo:[1,0,0,1],easeInCirc:[.6,.04,.98,.335],easeOutCirc:[.075,.82,.165,1],easeInOutCirc:[.785,.135,.15,.86],easeInBack:[.6,-.28,.735,.045],easeOutBack:[.175,.885,.32,1.275],easeInOutBack:[.68,-.55,.265,1.55]};function C(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=arguments.length>4?arguments[4]:void 0;const{easing:a,...l}=n,h={};let c,d;a&&(c=Array.isArray(a)?a:A[a]),l.begin=s(l.begin,"ms"),l.dur=s(l.dur,"ms"),c&&(l.calcMode="spline",l.keySplines=c.join(" "),l.keyTimes="0;1"),i&&(l.fill="freeze",h[t]=l.from,e.attr(h),d=o(l.begin||0).value,l.begin="indefinite");const u=e.elem("animate",{attributeName:t,...l});i&&setTimeout((()=>{try{u._node.beginElement()}catch(n){h[t]=l.to,e.attr(h),u.remove()}}),d);const m=u.getNode();r&&m.addEventListener("beginEvent",(()=>r.emit("animationBegin",{element:e,animate:m,params:n}))),m.addEventListener("endEvent",(()=>{r&&r.emit("animationEnd",{element:e,animate:m,params:n}),i&&(h[t]=l.to,e.attr(h),u.remove())}))}class M{attr(t,n){return"string"==typeof t?n?this._node.getAttributeNS(n,t):this._node.getAttribute(t):(Object.keys(t).forEach((n=>{if(void 0!==t[n])if(-1!==n.indexOf(":")){const i=n.split(":");this._node.setAttributeNS(e[i[0]],n,String(t[n]))}else this._node.setAttribute(n,String(t[n]))})),this)}elem(e,t,n){return new M(e,t,n,this,arguments.length>3&&void 0!==arguments[3]&&arguments[3])}parent(){return this._node.parentNode instanceof SVGElement?new M(this._node.parentNode):null}root(){let e=this._node;for(;"svg"!==e.nodeName&&e.parentElement;)e=e.parentElement;return new M(e)}querySelector(e){const t=this._node.querySelector(e);return t?new M(t):null}querySelectorAll(e){const t=this._node.querySelectorAll(e);return new L(t)}getNode(){return this._node}foreignObject(t,n,i){let s,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if("string"==typeof t){const e=document.createElement("div");e.innerHTML=t,s=e.firstChild}else s=t;s instanceof Element&&s.setAttribute("xmlns",e.xmlns);const r=this.elem("foreignObject",n,i,o);return r._node.appendChild(s),r}text(e){return this._node.appendChild(document.createTextNode(e)),this}empty(){for(;this._node.firstChild;)this._node.removeChild(this._node.firstChild);return this}remove(){var e;return null===(e=this._node.parentNode)||void 0===e||e.removeChild(this._node),this.parent()}replace(e){var t;return null===(t=this._node.parentNode)||void 0===t||t.replaceChild(e._node,this._node),e}append(e){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&this._node.firstChild?this._node.insertBefore(e._node,this._node.firstChild):this._node.appendChild(e._node),this}classes(){const e=this._node.getAttribute("class");return e?e.trim().split(/\s+/):[]}addClass(e){return this._node.setAttribute("class",this.classes().concat(e.trim().split(/\s+/)).filter((function(e,t,n){return n.indexOf(e)===t})).join(" ")),this}removeClass(e){const t=e.trim().split(/\s+/);return this._node.setAttribute("class",this.classes().filter((e=>-1===t.indexOf(e))).join(" ")),this}removeAllClasses(){return this._node.setAttribute("class",""),this}height(){return this._node.getBoundingClientRect().height}width(){return this._node.getBoundingClientRect().width}animate(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2?arguments[2]:void 0;return Object.keys(e).forEach((i=>{const s=e[i];Array.isArray(s)?s.forEach((e=>C(this,i,e,!1,n))):C(this,i,s,t,n)})),this}constructor(t,n,i,s,o=!1){t instanceof Element?this._node=t:(this._node=document.createElementNS(e.svg,t),"svg"===t&&this.attr({"xmlns:ct":e.ct})),n&&this.attr(n),i&&this.addClass(i),s&&(o&&s._node.firstChild?s._node.insertBefore(this._node,s._node.firstChild):s._node.appendChild(this._node))}}function O(e,t,n){let i;const s=[];function o(s){const o=i;i=h({},e),t&&t.forEach((e=>{window.matchMedia(e[0]).matches&&(i=h(i,e[1]))})),n&&s&&n.emit("optionsChanged",{previousOptions:o,currentOptions:i})}if(!window.matchMedia)throw new Error("window.matchMedia not found! Make sure you're using a polyfill.");return t&&t.forEach((e=>{const t=window.matchMedia(e[0]);t.addEventListener("change",o),s.push(t)})),o(),{removeMediaQueryListeners:function(){s.forEach((e=>e.removeEventListener("change",o)))},getCurrentOptions:()=>i}}M.Easing=A;const N={m:["x","y"],l:["x","y"],c:["x1","y1","x2","y2","x","y"],a:["rx","ry","xAr","lAf","sf","x","y"]},_={accuracy:3};function S(e,t,n,i,s,o){const r={command:s?e.toLowerCase():e.toUpperCase(),...t,...o?{data:o}:{}};n.splice(i,0,r)}function I(e,t){e.forEach(((n,i)=>{N[n.command.toLowerCase()].forEach(((s,o)=>{t(n,s,i,o,e)}))}))}class j{static join(e){const t=new j(arguments.length>1&&void 0!==arguments[1]&&arguments[1],arguments.length>2?arguments[2]:void 0);for(let n=0;n<e.length;n++){const i=e[n];for(let e=0;e<i.pathElements.length;e++)t.pathElements.push(i.pathElements[e])}return t}position(e){return void 0!==e?(this.pos=Math.max(0,Math.min(this.pathElements.length,e)),this):this.pos}remove(e){return this.pathElements.splice(this.pos,e),this}move(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3?arguments[3]:void 0;return S("M",{x:+e,y:+t},this.pathElements,this.pos++,n,i),this}line(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3?arguments[3]:void 0;return S("L",{x:+e,y:+t},this.pathElements,this.pos++,n,i),this}curve(e,t,n,i,s,o){let r=arguments.length>6&&void 0!==arguments[6]&&arguments[6],a=arguments.length>7?arguments[7]:void 0;return S("C",{x1:+e,y1:+t,x2:+n,y2:+i,x:+s,y:+o},this.pathElements,this.pos++,r,a),this}arc(e,t,n,i,s,o,r){let a=arguments.length>7&&void 0!==arguments[7]&&arguments[7],l=arguments.length>8?arguments[8]:void 0;return S("A",{rx:e,ry:t,xAr:n,lAf:i,sf:s,x:o,y:r},this.pathElements,this.pos++,a,l),this}parse(e){const t=e.replace(/([A-Za-z])(-?[0-9])/g,"$1 $2").replace(/([0-9])([A-Za-z])/g,"$1 $2").split(/[\s,]+/).reduce(((e,t)=>(t.match(/[A-Za-z]/)&&e.push([]),e[e.length-1].push(t),e)),[]);"Z"===t[t.length-1][0].toUpperCase()&&t.pop();const n=t.map((e=>{const t=e.shift(),n=N[t.toLowerCase()];return{command:t,...n.reduce(((t,n,i)=>(t[n]=+e[i],t)),{})}}));return this.pathElements.splice(this.pos,0,...n),this.pos+=n.length,this}stringify(){const e=Math.pow(10,this.options.accuracy);return this.pathElements.reduce(((t,n)=>{const i=N[n.command.toLowerCase()].map((t=>{const i=n[t];return this.options.accuracy?Math.round(i*e)/e:i}));return t+n.command+i.join(",")}),"")+(this.close?"Z":"")}scale(e,t){return I(this.pathElements,((n,i)=>{n[i]*="x"===i[0]?e:t})),this}translate(e,t){return I(this.pathElements,((n,i)=>{n[i]+="x"===i[0]?e:t})),this}transform(e){return I(this.pathElements,((t,n,i,s,o)=>{const r=e(t,n,i,s,o);(r||0===r)&&(t[n]=r)})),this}clone(){const e=new j(arguments.length>0&&void 0!==arguments[0]&&arguments[0]||this.close);return e.pos=this.pos,e.pathElements=this.pathElements.slice().map((e=>({...e}))),e.options={...this.options},e}splitByCommand(e){const t=[new j];return this.pathElements.forEach((n=>{n.command===e.toUpperCase()&&0!==t[t.length-1].pathElements.length&&t.push(new j),t[t.length-1].pathElements.push(n)})),t}constructor(e=!1,t){this.close=e,this.pathElements=[],this.pos=0,this.options={..._,...t}}}function T(e){const t={fillHoles:!1,...e};return function(e,n){const i=new j;let s=!0;for(let o=0;o<e.length;o+=2){const r=e[o],a=e[o+1],l=n[o/2];void 0!==g(l.value)?(s?i.move(r,a,!1,l):i.line(r,a,!1,l),s=!1):t.fillHoles||(s=!0)}return i}}function k(e){const t={fillHoles:!1,...e};return function e(n,i){const s=E(n,i,{fillHoles:t.fillHoles,increasingX:!0});if(s.length){if(s.length>1)return j.join(s.map((t=>e(t.pathCoordinates,t.valueData))));{if(n=s[0].pathCoordinates,i=s[0].valueData,n.length<=4)return T()(n,i);const e=[],t=[],o=n.length/2,r=[],a=[],l=[],h=[];for(let i=0;i<o;i++)e[i]=n[2*i],t[i]=n[2*i+1];for(let n=0;n<o-1;n++)l[n]=t[n+1]-t[n],h[n]=e[n+1]-e[n],a[n]=l[n]/h[n];r[0]=a[0],r[o-1]=a[o-2];for(let e=1;e<o-1;e++)0===a[e]||0===a[e-1]||a[e-1]>0!=a[e]>0?r[e]=0:(r[e]=3*(h[e-1]+h[e])/((2*h[e]+h[e-1])/a[e-1]+(h[e]+2*h[e-1])/a[e]),isFinite(r[e])||(r[e]=0));const c=(new j).move(e[0],t[0],!1,i[0]);for(let n=0;n<o-1;n++)c.curve(e[n]+h[n]/3,t[n]+r[n]*h[n]/3,e[n+1]-h[n]/3,t[n+1]-r[n+1]*h[n]/3,e[n+1],t[n+1],!1,i[n+1]);return c}}return T()([],[])}}var B=Object.freeze({__proto__:null,none:T,simple:function(e){const t={divisor:2,fillHoles:!1,...e},n=1/Math.max(1,t.divisor);return function(e,i){const s=new j;let o,r=0,a=0;for(let l=0;l<e.length;l+=2){const h=e[l],c=e[l+1],d=(h-r)*n,u=i[l/2];void 0!==u.value?(void 0===o?s.move(h,c,!1,u):s.curve(r+d,a,h-d,c,h,c,!1,u),r=h,a=c,o=u):t.fillHoles||(r=a=0,o=void 0)}return s}},step:function(e){const t={postpone:!0,fillHoles:!1,...e};return function(e,n){const i=new j;let s,o=0,r=0;for(let a=0;a<e.length;a+=2){const l=e[a],h=e[a+1],c=n[a/2];void 0!==c.value?(void 0===s?i.move(l,h,!1,c):(t.postpone?i.line(l,r,!1,s):i.line(o,h,!1,c),i.line(l,h,!1,c)),o=l,r=h,s=c):t.fillHoles||(o=r=0,s=void 0)}return i}},cardinal:function(e){const t={tension:1,fillHoles:!1,...e},n=Math.min(1,Math.max(0,t.tension)),i=1-n;return function e(s,o){const r=E(s,o,{fillHoles:t.fillHoles});if(r.length){if(r.length>1)return j.join(r.map((t=>e(t.pathCoordinates,t.valueData))));{if(s=r[0].pathCoordinates,o=r[0].valueData,s.length<=4)return T()(s,o);const e=(new j).move(s[0],s[1],!1,o[0]),t=!1;for(let r=0,a=s.length;a-2*Number(!t)>r;r+=2){const t=[{x:+s[r-2],y:+s[r-1]},{x:+s[r],y:+s[r+1]},{x:+s[r+2],y:+s[r+3]},{x:+s[r+4],y:+s[r+5]}];a-4===r?t[3]=t[2]:r||(t[0]={x:+s[r],y:+s[r+1]}),e.curve(n*(-t[0].x+6*t[1].x+t[2].x)/6+i*t[2].x,n*(-t[0].y+6*t[1].y+t[2].y)/6+i*t[2].y,n*(t[1].x+6*t[2].x-t[3].x)/6+i*t[2].x,n*(t[1].y+6*t[2].y-t[3].y)/6+i*t[2].y,t[2].x,t[2].y,!1,o[(r+2)/2])}return e}}return T()([],[])}},monotoneCubic:k});class H{on(e,t){const{allListeners:n,listeners:i}=this;"*"===e?n.add(t):(i.has(e)||i.set(e,new Set),i.get(e).add(t))}off(e,t){const{allListeners:n,listeners:i}=this;if("*"===e)t?n.delete(t):n.clear();else if(i.has(e)){const n=i.get(e);t?n.delete(t):n.clear(),n.size||i.delete(e)}}emit(e,t){const{allListeners:n,listeners:i}=this;i.has(e)&&i.get(e).forEach((e=>e(t))),n.forEach((n=>n(e,t)))}constructor(){this.listeners=new Map,this.allListeners=new Set}}const X=new WeakMap;class z{update(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];var i;return e&&(this.data=e||{},this.data.labels=this.data.labels||[],this.data.series=this.data.series||[],this.eventEmitter.emit("data",{type:"update",data:this.data})),t&&(this.options=h({},n?this.options:this.defaultOptions,t),this.initializeTimeoutId||(null===(i=this.optionsProvider)||void 0===i||i.removeMediaQueryListeners(),this.optionsProvider=O(this.options,this.responsiveOptions,this.eventEmitter))),!this.initializeTimeoutId&&this.optionsProvider&&this.createChart(this.optionsProvider.getCurrentOptions()),this}detach(){var e;return this.initializeTimeoutId?window.clearTimeout(this.initializeTimeoutId):(window.removeEventListener("resize",this.resizeListener),null===(e=this.optionsProvider)||void 0===e||e.removeMediaQueryListeners()),X.delete(this.container),this}on(e,t){return this.eventEmitter.on(e,t),this}off(e,t){return this.eventEmitter.off(e,t),this}initialize(){window.addEventListener("resize",this.resizeListener),this.optionsProvider=O(this.options,this.responsiveOptions,this.eventEmitter),this.eventEmitter.on("optionsChanged",(()=>this.update())),this.options.plugins&&this.options.plugins.forEach((e=>{Array.isArray(e)?e[0](this,e[1]):e(this)})),this.eventEmitter.emit("data",{type:"initial",data:this.data}),this.createChart(this.optionsProvider.getCurrentOptions()),this.initializeTimeoutId=null}constructor(e,t,n,i,s){this.data=t,this.defaultOptions=n,this.options=i,this.responsiveOptions=s,this.eventEmitter=new H,this.resizeListener=()=>this.update(),this.initializeTimeoutId=setTimeout((()=>this.initialize()),0);const o="string"==typeof e?document.querySelector(e):e;if(!o)throw new Error("Target element is not found");this.container=o;const r=X.get(o);r&&r.detach(),X.set(o,this)}}const R={x:{pos:"x",len:"width",dir:"horizontal",rectStart:"x1",rectEnd:"x2",rectOffset:"y2"},y:{pos:"y",len:"height",dir:"vertical",rectStart:"y2",rectEnd:"y1",rectOffset:"x1"}};class Y{createGridAndLabels(e,t,n,i){const s="x"===this.units.pos?n.axisX:n.axisY,o=this.ticks.map(((e,t)=>this.projectValue(e,t))),r=this.ticks.map(s.labelInterpolationFnc);o.forEach(((a,l)=>{const h=r[l],c={x:0,y:0};let d;var u;d=o[l+1]?o[l+1]-a:Math.max(this.axisLength-a,this.axisLength/this.ticks.length),""!==h&&(!(u=h)&&0!==u)||("x"===this.units.pos?(a=this.chartRect.x1+a,c.x=n.axisX.labelOffset.x,"start"===n.axisX.position?c.y=this.chartRect.padding.top+n.axisX.labelOffset.y+5:c.y=this.chartRect.y1+n.axisX.labelOffset.y+5):(a=this.chartRect.y1-a,c.y=n.axisY.labelOffset.y-d,"start"===n.axisY.position?c.x=this.chartRect.padding.left+n.axisY.labelOffset.x:c.x=this.chartRect.x2+n.axisY.labelOffset.x+10),s.showGrid&&function(e,t,n,i,s,o,r,a){const l={["".concat(n.units.pos,"1")]:e,["".concat(n.units.pos,"2")]:e,["".concat(n.counterUnits.pos,"1")]:i,["".concat(n.counterUnits.pos,"2")]:i+s},h=o.elem("line",l,r.join(" "));a.emit("draw",{type:"grid",axis:n,index:t,group:o,element:h,...l})}(a,l,this,this.gridOffset,this.chartRect[this.counterUnits.len](),e,[n.classNames.grid,n.classNames[this.units.dir]],i),s.showLabel&&function(e,t,n,i,s,o,r,a,l,h){const c={[s.units.pos]:e+r[s.units.pos],[s.counterUnits.pos]:r[s.counterUnits.pos],[s.units.len]:t,[s.counterUnits.len]:Math.max(0,o-10)},d=Math.round(c[s.units.len]),u=Math.round(c[s.counterUnits.len]),m=document.createElement("span");m.className=l.join(" "),m.style[s.units.len]=d+"px",m.style[s.counterUnits.len]=u+"px",m.textContent=String(i);const p=a.foreignObject(m,{style:"overflow: visible;",...c});h.emit("draw",{type:"label",axis:s,index:n,group:a,element:p,text:i,...c})}(a,d,l,h,this,s.offset,c,t,[n.classNames.label,n.classNames[this.units.dir],"start"===s.position?n.classNames[s.position]:n.classNames.end],i))}))}constructor(e,t,n){this.units=e,this.chartRect=t,this.ticks=n,this.counterUnits=e===R.x?R.y:R.x,this.axisLength=t[this.units.rectEnd]-t[this.units.rectStart],this.gridOffset=t[this.units.rectOffset]}}class D extends Y{projectValue(e){const t=Number(g(e,this.units.pos));return this.axisLength*(t-this.bounds.min)/this.bounds.range}constructor(e,t,n,i){const s=i.highLow||function(e,t,n){const i={high:void 0===(t={...t,...n?"x"===n?t.axisX:t.axisY:{}}).high?-Number.MAX_VALUE:+t.high,low:void 0===t.low?Number.MAX_VALUE:+t.low},s=void 0===t.high,o=void 0===t.low;return(s||o)&&function e(t){if(!v(t))if(Array.isArray(t))for(let n=0;n<t.length;n++)e(t[n]);else{const e=Number(n&&u(t,n)?t[n]:t);s&&e>i.high&&(i.high=e),o&&e<i.low&&(i.low=e)}}(e),(t.referenceValue||0===t.referenceValue)&&(i.high=Math.max(t.referenceValue,i.high),i.low=Math.min(t.referenceValue,i.low)),i.high<=i.low&&(0===i.low?i.high=1:i.low<0?i.high=0:(i.high>0||(i.high=1),i.low=0)),i}(t,i,e.pos),o=function(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const s={high:t.high,low:t.low,valueRange:0,oom:0,step:0,min:0,max:0,range:0,numberOfSteps:0,values:[]};var o;s.valueRange=s.high-s.low,s.oom=(o=s.valueRange,Math.floor(Math.log(Math.abs(o))/Math.LN10)),s.step=Math.pow(10,s.oom),s.min=Math.floor(s.low/s.step)*s.step,s.max=Math.ceil(s.high/s.step)*s.step,s.range=s.max-s.min,s.numberOfSteps=Math.round(s.range/s.step);const h=a(e,s.step,s)<n,c=i?function(e){if(1===e)return e;function t(e,n){return e%n==0?n:t(n,e%n)}function n(e){return e*e+1}let i,s=2,o=2;if(e%2==0)return 2;do{s=n(s)%e,o=n(n(o))%e,i=t(Math.abs(s-o),e)}while(1===i);return i}(s.range):0;if(i&&a(e,1,s)>=n)s.step=1;else if(i&&c<s.step&&a(e,c,s)>=n)s.step=c;else{let t=0;for(;;){if(h&&a(e,s.step,s)<=n)s.step*=2;else{if(h||!(a(e,s.step/2,s)>=n))break;if(s.step/=2,i&&s.step%1!=0){s.step*=2;break}}if(t++>1e3)throw new Error("Exceeded maximum number of iterations while optimizing scale step!")}}function d(e,t){return e===(e+=t)&&(e*=1+(t>0?r:-r)),e}s.step=Math.max(s.step,r);let u=s.min,m=s.max;for(;u+s.step<=s.low;)u=d(u,s.step);for(;m-s.step>=s.high;)m=d(m,-s.step);s.min=u,s.max=m,s.range=s.max-s.min;const p=[];for(let e=s.min;e<=s.max;e=d(e,s.step)){const t=l(e);t!==p[p.length-1]&&p.push(t)}return s.values=p,s}(n[e.rectEnd]-n[e.rectStart],s,i.scaleMinSpace||20,i.onlyInteger),h={min:o.min,max:o.max};super(e,n,o.values),this.bounds=o,this.range=h}}class U extends Y{projectValue(e,t){return this.stepLength*t}constructor(e,t,n,i){const s=i.ticks||[];super(e,n,s);const o=Math.max(1,s.length-(i.stretch?1:0));this.stepLength=this.axisLength/o,this.stretch=Boolean(i.stretch)}}function G(e,t,n){var i;if(u(e,"name")&&e.name&&(null===(i=t.series)||void 0===i?void 0:i[e.name])){const i=(null==t?void 0:t.series[e.name])[n];return void 0===i?t[n]:i}return t[n]}const P={axisX:{offset:30,position:"end",labelOffset:{x:0,y:0},showLabel:!0,showGrid:!0,labelInterpolationFnc:c,type:void 0},axisY:{offset:40,position:"start",labelOffset:{x:0,y:0},showLabel:!0,showGrid:!0,labelInterpolationFnc:c,type:void 0,scaleMinSpace:20,onlyInteger:!1},width:void 0,height:void 0,showLine:!0,showPoint:!0,showArea:!1,areaBase:0,lineSmooth:!0,showGridBackground:!1,low:void 0,high:void 0,chartPadding:{top:15,right:15,bottom:5,left:10},fullWidth:!1,reverseData:!1,classNames:{chart:"ct-chart-line",label:"ct-label",labelGroup:"ct-labels",series:"ct-series",line:"ct-line",point:"ct-point",area:"ct-area",grid:"ct-grid",gridGroup:"ct-grids",gridBackground:"ct-grid-background",vertical:"ct-vertical",horizontal:"ct-horizontal",start:"ct-start",end:"ct-end"}};class q extends z{createChart(t){const{data:n}=this,i=function(e){let t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2?arguments[2]:void 0,s=arguments.length>3?arguments[3]:void 0;const o={labels:(e.labels||[]).slice(),series:w(e.series,i,s)},r=o.labels.length;return function(e){return!!Array.isArray(e)&&e.every(Array.isArray)}(o.series)?(t=Math.max(r,...o.series.map((e=>e.length))),o.series.forEach((e=>{e.push(...d(Math.max(0,t-e.length)))}))):t=o.series.length,o.labels.push(...d(Math.max(0,t-r),(()=>""))),n&&function(e){var t;null===(t=e.labels)||void 0===t||t.reverse(),e.series.reverse();for(const t of e.series)u(t,"data")?t.data.reverse():Array.isArray(t)&&t.reverse()}(o),o}(n,t.reverseData,!0),s=function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"100%",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"100%",s=arguments.length>3?arguments[3]:void 0;Array.from(t.querySelectorAll("svg")).filter((t=>t.getAttributeNS(e.xmlns,"ct"))).forEach((e=>t.removeChild(e)));const o=new M("svg").attr({width:n,height:i}).attr({style:"width: ".concat(n,"; height: ").concat(i,";")});return s&&o.addClass(s),t.appendChild(o.getNode()),o}(this.container,t.width,t.height,t.classNames.chart);this.svg=s;const r=s.elem("g").addClass(t.classNames.gridGroup),a=s.elem("g"),l=s.elem("g").addClass(t.classNames.labelGroup),h=function(e,t){var n,i,s,r;const a=Boolean(t.axisX||t.axisY),l=(null===(n=t.axisY)||void 0===n?void 0:n.offset)||0,h=(null===(i=t.axisX)||void 0===i?void 0:i.offset)||0,c=null===(s=t.axisY)||void 0===s?void 0:s.position,d=null===(r=t.axisX)||void 0===r?void 0:r.position;let u=e.width()||o(t.width).value||0,m=e.height()||o(t.height).value||0;const p="number"==typeof(f=t.chartPadding)?{top:f,right:f,bottom:f,left:f}:void 0===f?{top:0,right:0,bottom:0,left:0}:{top:"number"==typeof f.top?f.top:0,right:"number"==typeof f.right?f.right:0,bottom:"number"==typeof f.bottom?f.bottom:0,left:"number"==typeof f.left?f.left:0};var f;u=Math.max(u,l+p.left+p.right),m=Math.max(m,h+p.top+p.bottom);const v={x1:0,x2:0,y1:0,y2:0,padding:p,width(){return this.x2-this.x1},height(){return this.y1-this.y2}};return a?("start"===d?(v.y2=p.top+h,v.y1=Math.max(m-p.bottom,v.y2+1)):(v.y2=p.top,v.y1=Math.max(m-p.bottom-h,v.y2+1)),"start"===c?(v.x1=p.left+l,v.x2=Math.max(u-p.right,v.x1+1)):(v.x1=p.left,v.x2=Math.max(u-p.right-l,v.x1+1))):(v.x1=p.left,v.x2=Math.max(u-p.right,v.x1+1),v.y2=p.top,v.y1=Math.max(m-p.bottom,v.y2+1)),v}(s,t);let c,p;c=void 0===t.axisX.type?new U(R.x,i.series,h,{...t.axisX,ticks:i.labels,stretch:t.fullWidth}):new t.axisX.type(R.x,i.series,h,t.axisX),p=void 0===t.axisY.type?new D(R.y,i.series,h,{...t.axisY,high:m(t.high)?t.high:t.axisY.high,low:m(t.low)?t.low:t.axisY.low}):new t.axisY.type(R.y,i.series,h,t.axisY),c.createGridAndLabels(r,l,t,this.eventEmitter),p.createGridAndLabels(r,l,t,this.eventEmitter),t.showGridBackground&&function(e,t,n,i){const s=e.elem("rect",{x:t.x1,y:t.y2,width:t.width(),height:t.height()},n,!0);i.emit("draw",{type:"gridBackground",group:e,element:s})}(r,h,t.classNames.gridBackground,this.eventEmitter),function(e,t){let n=0;e[arguments.length>2&&void 0!==arguments[2]&&arguments[2]?"reduceRight":"reduce"](((e,i,s)=>t(i,n++,s)),void 0)}(n.series,((e,n)=>{const s=a.elem("g"),o=u(e,"name")&&e.name,r=u(e,"className")&&e.className,l=u(e,"meta")?e.meta:void 0;var d;o&&s.attr({"ct:series-name":o}),l&&s.attr({"ct:meta":b(l)}),s.addClass([t.classNames.series,r||"".concat(t.classNames.series,"-").concat((d=n,String.fromCharCode(97+d%26)))].join(" "));const v=[],g=[];i.series[n].forEach(((t,s)=>{const o={x:h.x1+c.projectValue(t,s,i.series[n]),y:h.y1-p.projectValue(t,s,i.series[n])};v.push(o.x,o.y),g.push({value:t,valueIndex:s,meta:f(e,s)})}));const y={lineSmooth:G(e,t,"lineSmooth"),showPoint:G(e,t,"showPoint"),showLine:G(e,t,"showLine"),showArea:G(e,t,"showArea"),areaBase:G(e,t,"areaBase")};let x;x="function"==typeof y.lineSmooth?y.lineSmooth:y.lineSmooth?k():T();const w=x(v,g);if(y.showPoint&&w.pathElements.forEach((i=>{const{data:o}=i,r=s.elem("line",{x1:i.x,y1:i.y,x2:i.x+.01,y2:i.y},t.classNames.point);if(o){let e,t;u(o.value,"x")&&(e=o.value.x),u(o.value,"y")&&(t=o.value.y),r.attr({"ct:value":[e,t].filter(m).join(","),"ct:meta":b(o.meta)})}this.eventEmitter.emit("draw",{type:"point",value:null==o?void 0:o.value,index:(null==o?void 0:o.valueIndex)||0,meta:null==o?void 0:o.meta,series:e,seriesIndex:n,axisX:c,axisY:p,group:s,element:r,x:i.x,y:i.y,chartRect:h})})),y.showLine){const o=s.elem("path",{d:w.stringify()},t.classNames.line,!0);this.eventEmitter.emit("draw",{type:"line",values:i.series[n],path:w.clone(),chartRect:h,index:n,series:e,seriesIndex:n,meta:l,axisX:c,axisY:p,group:s,element:o})}if(y.showArea&&p.range){const o=Math.max(Math.min(y.areaBase,p.range.max),p.range.min),r=h.y1-p.projectValue(o);w.splitByCommand("M").filter((e=>e.pathElements.length>1)).map((e=>{const t=e.pathElements[0],n=e.pathElements[e.pathElements.length-1];return e.clone(!0).position(0).remove(1).move(t.x,r).line(t.x,t.y).position(e.pathElements.length+1).line(n.x,r)})).forEach((o=>{const r=s.elem("path",{d:o.stringify()},t.classNames.area,!0);this.eventEmitter.emit("draw",{type:"area",values:i.series[n],path:o.clone(),series:e,seriesIndex:n,axisX:c,axisY:p,chartRect:h,index:n,group:s,element:r,meta:l})}))}}),t.reverseData),this.eventEmitter.emit("created",{chartRect:h,axisX:c,axisY:p,svg:s,options:t})}constructor(e,t,n,i){super(e,t,P,h({},P,n),i),this.data=t}}let V=document.querySelectorAll("._anim-items");if(V.length>0){function Z(){for(let e=0;e<V.length;e++){const t=V[e],n=t.offsetHeight,i=J(t).top,s=2;let o=window.innerHeight-n/s;n>window.innerHeight&&(o=window.innerHeight-window.innerHeight/s),pageYOffset>i-o&&pageYOffset<i+n?t.classList.add("_active"):t.classList.contains("_anim-no-hide")||t.classList.remove("_active")}}function J(e){const t=e.getBoundingClientRect(),n=window.pageXOffset||document.documentElement.scrollLeft,i=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+i,left:t.left+n}}window.addEventListener("scroll",Z),setTimeout((()=>{Z()}),800)}const Q=document.querySelector(".burger"),F=document.querySelector(".nav");if(Q.addEventListener("click",(()=>{Q.classList.toggle("_remove")?F.style.maxHeight=F.scrollHeight+"px":F.style.maxHeight=0})),window.addEventListener("resize",(()=>{Q.classList.contains("_remove")&&(F.style.maxHeight=F.scrollHeight+"px")})),document.querySelector(".timer")){const W=new Date("2024-02-13T23:59:01");function K(){const e=new Date,t=W-e,n=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),s=Math.floor(t%36e5/6e4),o=Math.floor(t%6e4/1e3);document.getElementById("days").innerText=n.toString().padStart(2,"0"),document.getElementById("hours").innerText=i.toString().padStart(2,"0"),document.getElementById("minutes").innerText=s.toString().padStart(2,"0"),document.getElementById("seconds").innerText=o.toString().padStart(2,"0"),t<=0&&(clearInterval(ee),document.getElementById("timer").innerText="Время истекло")}K();const ee=setInterval(K,1e3)}if(null!==(document.querySelector("#chart")||null)){new q("#chart",{labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],series:[[50,60,50,40,50,60,50,40,50,60,50,40],[20,50,70,50,30,50,70,50,20,50,70,50],[30,70,50,30,70,50,30,70,50,30,70,50]]},{axisX:{labelInterpolationFnc:function(e,t){return e},showGrid:!1,showLabel:!0},axisY:{labelInterpolationFnc:function(e){return e%10==0?e:null},showGrid:!0,showLabel:!0,low:0,high:80},lineSmooth:B.cardinal({tension:1}),showPoint:!1,fullWidth:!0});const te=document?.querySelector(".loader"),ne=document?.querySelector("body");window.addEventListener("load",(()=>{te?.classList.add("_hide"),ne?.classList.remove("_load"),te&&setTimeout((()=>{te.style.display="none"}),500)}))}const $=document.querySelectorAll("._number");if($.length>0)for(const ie of $)ie.addEventListener("input",(function(){let e=ie.value;/^\d*[1-9]\d*$/.test(e)||(ie.value=e.slice(0,-1))}))})()})();