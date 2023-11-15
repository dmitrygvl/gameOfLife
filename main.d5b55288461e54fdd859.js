!function(){var e,r,n={579:function(e,r,n){const{createGameOfLife:t}=n(618),o=document.createElement("div"),i=document.createElement("div");document.body.appendChild(o),document.body.appendChild(i),t(3,3,o),t(10,10,i)},618:function(e,r,n){"use strict";function t(e,r,n){const t=`<table border=1>${r.map(((e,r)=>`<tr>${e.map(((e,n)=>1===e?`<td \n        data-x=${n}\n        data-y=${r}\n        class="cell alive" \n        style="background-color:#FA58D0; height:10px; width:10px;"></td>`:`<td \n      data-x=${n}\n      data-y=${r}\n      class="cell dead" \n      style="background-color:#FFFFFF; height:10px; width:10px;"></td>`)).join("")}</tr>`)).join("")}</table>`;e.innerHTML=t,e.querySelector("table").addEventListener("click",(e=>{const r=e.target,t=r.getAttribute("data-x"),o=r.getAttribute("data-y");t>=0&&o>=0&&n(Number(t),Number(o))}))}function o(e,r,n){const t=e[n];if(void 0===t)return 0;const o=t[r];return void 0===o?0:o}function i(e,r,n){let i,c=!1;n.innerHTML='<div class="field-wrapper"></div><button>Start</button>';const a=n.querySelector(".field-wrapper"),d=n.querySelector("button");let u=Array.from({length:r}).map((()=>Array.from({length:e}).fill(0)));const l=(e,r)=>{u[r][e]=0===u[r][e]?1:0,t(a,u,l)};function f(){c=!1,d.innerHTML="Start",clearInterval(i)}t(a,u,l),d.addEventListener("click",(()=>{c?f():(c=!0,d.innerHTML="Stop",i=setInterval((()=>{u=function(e){return e.map(((r,n)=>r.map(((r,t)=>{const i=function(e,r,n){let t=0;for(let i=e-1;i<=e+1;i+=1)t+=Number(o(n,i,r-1));for(let i=e-1;i<=e+1;i+=1)t+=Number(o(n,i,r+1));return t+=Number(o(n,e-1,r)),t+=Number(o(n,e+1,r)),t}(t,n,e),c=o(e,t,n);var a;return 3===(a=i)?1:a>3||a<2?0:2===a&&1===c?1:0}))))}(u),t(a,u,l),function(e){for(let r=0;r<e.length;r+=1){const n=e[r];for(let e=0;e<n.length;e+=1)if(n[e])return!0}return!1}(u)||(alert("Death on the block"),f())}),1e3))}))}n.r(r),n.d(r,{createGameOfLife:function(){return i}})}},t={};function o(e){var r=t[e];if(void 0!==r){if(void 0!==r.error)throw r.error;return r.exports}var i=t[e]={exports:{}};try{var c={id:e,module:i,factory:n[e],require:o};o.i.forEach((function(e){e(c)})),i=c.module,c.factory.call(i.exports,i,i.exports,c.require)}catch(e){throw i.error=e,e}return i.exports}o.m=n,o.c=t,o.i=[],o.d=function(e,r){for(var n in r)o.o(r,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o.hu=function(e){return e+"."+o.h()+".hot-update.js"},o.miniCssF=function(e){},o.hmrF=function(){return"main."+o.h()+".hot-update.json"},o.h=function(){return"d5b55288461e54fdd859"},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},e={},r="gameoflife:",o.l=function(n,t,i,c){if(e[n])e[n].push(t);else{var a,d;if(void 0!==i)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var f=u[l];if(f.getAttribute("src")==n||f.getAttribute("data-webpack")==r+i){a=f;break}}a||(d=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",r+i),a.src=n),e[n]=[t];var s=function(r,t){a.onerror=a.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(t)})),r)return r(t)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),d&&document.head.appendChild(a)}},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e,r,n,t={},i=o.c,c=[],a=[],d="idle",u=0,l=[];function f(e){d=e;for(var r=[],n=0;n<a.length;n++)r[n]=a[n].call(null,e);return Promise.all(r)}function s(){0==--u&&f("ready").then((function(){if(0===u){var e=l;l=[];for(var r=0;r<e.length;r++)e[r]()}}))}function p(e){if("idle"!==d)throw new Error("check() is only allowed in idle status");return f("check").then(o.hmrM).then((function(n){return n?f("prepare").then((function(){var t=[];return r=[],Promise.all(Object.keys(o.hmrC).reduce((function(e,i){return o.hmrC[i](n.c,n.r,n.m,e,r,t),e}),[])).then((function(){return r=function(){return e?m(e):f("ready").then((function(){return t}))},0===u?r():new Promise((function(e){l.push((function(){e(r())}))}));var r}))})):f(v()?"ready":"idle").then((function(){return null}))}))}function h(e){return"ready"!==d?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status (state: "+d+")")})):m(e)}function m(e){e=e||{},v();var t=r.map((function(r){return r(e)}));r=void 0;var o=t.map((function(e){return e.error})).filter(Boolean);if(o.length>0)return f("abort").then((function(){throw o[0]}));var i=f("dispose");t.forEach((function(e){e.dispose&&e.dispose()}));var c,a=f("apply"),d=function(e){c||(c=e)},u=[];return t.forEach((function(e){if(e.apply){var r=e.apply(d);if(r)for(var n=0;n<r.length;n++)u.push(r[n])}})),Promise.all([i,a]).then((function(){return c?f("fail").then((function(){throw c})):n?m(e).then((function(e){return u.forEach((function(r){e.indexOf(r)<0&&e.push(r)})),e})):f("idle").then((function(){return u}))}))}function v(){if(n)return r||(r=[]),Object.keys(o.hmrI).forEach((function(e){n.forEach((function(n){o.hmrI[e](n,r)}))})),n=void 0,!0}o.hmrD=t,o.i.push((function(l){var m,v,y,g,b=l.module,E=function(r,n){var t=i[n];if(!t)return r;var o=function(o){if(t.hot.active){if(i[o]){var a=i[o].parents;-1===a.indexOf(n)&&a.push(n)}else c=[n],e=o;-1===t.children.indexOf(o)&&t.children.push(o)}else console.warn("[HMR] unexpected require("+o+") from disposed module "+n),c=[];return r(o)},a=function(e){return{configurable:!0,enumerable:!0,get:function(){return r[e]},set:function(n){r[e]=n}}};for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&"e"!==l&&Object.defineProperty(o,l,a(l));return o.e=function(e){return function(e){switch(d){case"ready":f("prepare");case"prepare":return u++,e.then(s,s),e;default:return e}}(r.e(e))},o}(l.require,l.id);b.hot=(m=l.id,v=b,g={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:y=e!==m,_requireSelf:function(){c=v.parents.slice(),e=y?void 0:m,o(m)},active:!0,accept:function(e,r,n){if(void 0===e)g._selfAccepted=!0;else if("function"==typeof e)g._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)g._acceptedDependencies[e[t]]=r||function(){},g._acceptedErrorHandlers[e[t]]=n;else g._acceptedDependencies[e]=r||function(){},g._acceptedErrorHandlers[e]=n},decline:function(e){if(void 0===e)g._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)g._declinedDependencies[e[r]]=!0;else g._declinedDependencies[e]=!0},dispose:function(e){g._disposeHandlers.push(e)},addDisposeHandler:function(e){g._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=g._disposeHandlers.indexOf(e);r>=0&&g._disposeHandlers.splice(r,1)},invalidate:function(){switch(this._selfInvalidated=!0,d){case"idle":r=[],Object.keys(o.hmrI).forEach((function(e){o.hmrI[e](m,r)})),f("ready");break;case"ready":Object.keys(o.hmrI).forEach((function(e){o.hmrI[e](m,r)}));break;case"prepare":case"check":case"dispose":case"apply":(n=n||[]).push(m)}},check:p,apply:h,status:function(e){if(!e)return d;a.push(e)},addStatusHandler:function(e){a.push(e)},removeStatusHandler:function(e){var r=a.indexOf(e);r>=0&&a.splice(r,1)},data:t[m]},e=void 0,g),b.parents=c,b.children=[],c=[],l.require=E})),o.hmrC={},o.hmrI={}}(),function(){var e;o.g.importScripts&&(e=o.g.location+"");var r=o.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");if(n.length)for(var t=n.length-1;t>-1&&!e;)e=n[t--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e}(),function(){if("undefined"!=typeof document){var e=[],r=[],n=function(n){return{dispose:function(){for(var r=0;r<e.length;r++){var n=e[r];n.parentNode&&n.parentNode.removeChild(n)}e.length=0},apply:function(){for(var e=0;e<r.length;e++)r[e].rel="stylesheet";r.length=0}}};o.hmrC.miniCss=function(t,i,c,a,d,u){d.push(n),t.forEach((function(n){var t=o.miniCssF(n),i=o.p+t,c=function(e,r){for(var n=document.getElementsByTagName("link"),t=0;t<n.length;t++){var o=(c=n[t]).getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(o===e||o===r))return c}var i=document.getElementsByTagName("style");for(t=0;t<i.length;t++){var c;if((o=(c=i[t]).getAttribute("data-href"))===e||o===r)return c}}(t,i);c&&a.push(new Promise((function(t,o){var a=function(e,r,n,t,o){var i=document.createElement("link");return i.rel="stylesheet",i.type="text/css",i.onerror=i.onload=function(n){if(i.onerror=i.onload=null,"load"===n.type)t();else{var c=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.href||r,d=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=c,d.request=a,i.parentNode&&i.parentNode.removeChild(i),o(d)}},i.href=r,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i}(n,i,c,(function(){a.as="style",a.rel="preload",t()}),o);e.push(c),r.push(a)})))}))}}}(),function(){var e,r,n,t,i,c=o.hmrS_jsonp=o.hmrS_jsonp||{179:0},a={};function d(r,n){return e=n,new Promise((function(e,n){a[r]=e;var t=o.p+o.hu(r),i=new Error;o.l(t,(function(e){if(a[r]){a[r]=void 0;var t=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;i.message="Loading hot update chunk "+r+" failed.\n("+t+": "+o+")",i.name="ChunkLoadError",i.type=t,i.request=o,n(i)}}))}))}function u(e){function a(e){for(var r=[e],n={},t=r.map((function(e){return{chain:[e],id:e}}));t.length>0;){var i=t.pop(),c=i.id,a=i.chain,u=o.c[c];if(u&&(!u.hot._selfAccepted||u.hot._selfInvalidated)){if(u.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:c};if(u.hot._main)return{type:"unaccepted",chain:a,moduleId:c};for(var l=0;l<u.parents.length;l++){var f=u.parents[l],s=o.c[f];if(s){if(s.hot._declinedDependencies[c])return{type:"declined",chain:a.concat([f]),moduleId:c,parentId:f};-1===r.indexOf(f)&&(s.hot._acceptedDependencies[c]?(n[f]||(n[f]=[]),d(n[f],[c])):(delete n[f],r.push(f),t.push({chain:a.concat([f]),id:f})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:n}}function d(e,r){for(var n=0;n<r.length;n++){var t=r[n];-1===e.indexOf(t)&&e.push(t)}}o.f&&delete o.f.jsonpHmr,r=void 0;var u={},l=[],f={},s=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var p in n)if(o.o(n,p)){var h,m=n[p],v=!1,y=!1,g=!1,b="";switch((h=m?a(p):{type:"disposed",moduleId:p}).chain&&(b="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":e.onDeclined&&e.onDeclined(h),e.ignoreDeclined||(v=new Error("Aborted because of self decline: "+h.moduleId+b));break;case"declined":e.onDeclined&&e.onDeclined(h),e.ignoreDeclined||(v=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+b));break;case"unaccepted":e.onUnaccepted&&e.onUnaccepted(h),e.ignoreUnaccepted||(v=new Error("Aborted because "+p+" is not accepted"+b));break;case"accepted":e.onAccepted&&e.onAccepted(h),y=!0;break;case"disposed":e.onDisposed&&e.onDisposed(h),g=!0;break;default:throw new Error("Unexception type "+h.type)}if(v)return{error:v};if(y)for(p in f[p]=m,d(l,h.outdatedModules),h.outdatedDependencies)o.o(h.outdatedDependencies,p)&&(u[p]||(u[p]=[]),d(u[p],h.outdatedDependencies[p]));g&&(d(l,[h.moduleId]),f[p]=s)}n=void 0;for(var E,w=[],_=0;_<l.length;_++){var I=l[_],D=o.c[I];D&&(D.hot._selfAccepted||D.hot._main)&&f[I]!==s&&!D.hot._selfInvalidated&&w.push({module:I,require:D.hot._requireSelf,errorHandler:D.hot._selfAccepted})}return{dispose:function(){var e;t.forEach((function(e){delete c[e]})),t=void 0;for(var r,n=l.slice();n.length>0;){var i=n.pop(),a=o.c[i];if(a){var d={},f=a.hot._disposeHandlers;for(_=0;_<f.length;_++)f[_].call(null,d);for(o.hmrD[i]=d,a.hot.active=!1,delete o.c[i],delete u[i],_=0;_<a.children.length;_++){var s=o.c[a.children[_]];s&&(e=s.parents.indexOf(i))>=0&&s.parents.splice(e,1)}}}for(var p in u)if(o.o(u,p)&&(a=o.c[p]))for(E=u[p],_=0;_<E.length;_++)r=E[_],(e=a.children.indexOf(r))>=0&&a.children.splice(e,1)},apply:function(r){for(var n in f)o.o(f,n)&&(o.m[n]=f[n]);for(var t=0;t<i.length;t++)i[t](o);for(var c in u)if(o.o(u,c)){var a=o.c[c];if(a){E=u[c];for(var d=[],s=[],p=[],h=0;h<E.length;h++){var m=E[h],v=a.hot._acceptedDependencies[m],y=a.hot._acceptedErrorHandlers[m];if(v){if(-1!==d.indexOf(v))continue;d.push(v),s.push(y),p.push(m)}}for(var g=0;g<d.length;g++)try{d[g].call(null,E)}catch(n){if("function"==typeof s[g])try{s[g](n,{moduleId:c,dependencyId:p[g]})}catch(t){e.onErrored&&e.onErrored({type:"accept-error-handler-errored",moduleId:c,dependencyId:p[g],error:t,originalError:n}),e.ignoreErrored||(r(t),r(n))}else e.onErrored&&e.onErrored({type:"accept-errored",moduleId:c,dependencyId:p[g],error:n}),e.ignoreErrored||r(n)}}}for(var b=0;b<w.length;b++){var _=w[b],I=_.module;try{_.require(I)}catch(n){if("function"==typeof _.errorHandler)try{_.errorHandler(n,{moduleId:I,module:o.c[I]})}catch(t){e.onErrored&&e.onErrored({type:"self-accept-error-handler-errored",moduleId:I,error:t,originalError:n}),e.ignoreErrored||(r(t),r(n))}else e.onErrored&&e.onErrored({type:"self-accept-errored",moduleId:I,error:n}),e.ignoreErrored||r(n)}}return l}}}self.webpackHotUpdategameoflife=function(r,t,c){for(var d in t)o.o(t,d)&&(n[d]=t[d],e&&e.push(d));c&&i.push(c),a[r]&&(a[r](),a[r]=void 0)},o.hmrI.jsonp=function(e,r){n||(n={},i=[],t=[],r.push(u)),o.o(n,e)||(n[e]=o.m[e])},o.hmrC.jsonp=function(e,a,l,f,s,p){s.push(u),r={},t=a,n=l.reduce((function(e,r){return e[r]=!1,e}),{}),i=[],e.forEach((function(e){o.o(c,e)&&void 0!==c[e]?(f.push(d(e,p)),r[e]=!0):r[e]=!1})),o.f&&(o.f.jsonpHmr=function(e,n){r&&o.o(r,e)&&!r[e]&&(n.push(d(e)),r[e]=!0)})},o.hmrM=function(){if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(o.p+o.hmrF()).then((function(e){if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}}(),o(579)}();