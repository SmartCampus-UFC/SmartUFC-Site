/*! For license information please see module.js.LICENSE.txt */
define(["react","@grafana/ui","@grafana/data","@grafana/runtime"],(function(t,e,r,n){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=11)}([function(e,r){e.exports=t},function(t,r){t.exports=e},function(t,e){t.exports=r},function(t,e){t.exports=n},function(t,e,r){r(5),t.exports=self.fetch.bind(self)},function(t,e,r){"use strict";r.r(e),r.d(e,"Headers",(function(){return h})),r.d(e,"Request",(function(){return E})),r.d(e,"Response",(function(){return T})),r.d(e,"DOMException",(function(){return S})),r.d(e,"fetch",(function(){return x}));var n="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||void 0!==n&&n,o="URLSearchParams"in n,a="Symbol"in n&&"iterator"in Symbol,i="FileReader"in n&&"Blob"in n&&function(){try{return new Blob,!0}catch(t){return!1}}(),s="FormData"in n,u="ArrayBuffer"in n;if(u)var c=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],l=ArrayBuffer.isView||function(t){return t&&c.indexOf(Object.prototype.toString.call(t))>-1};function f(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t)||""===t)throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function p(t){return"string"!=typeof t&&(t=String(t)),t}function d(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return a&&(e[Symbol.iterator]=function(){return e}),e}function h(t){this.map={},t instanceof h?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function y(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function m(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function b(t){var e=new FileReader,r=m(e);return e.readAsArrayBuffer(t),r}function v(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function g(){return this.bodyUsed=!1,this._initBody=function(t){var e;this.bodyUsed=this.bodyUsed,this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:i&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:s&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:o&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():u&&i&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=v(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):u&&(ArrayBuffer.prototype.isPrototypeOf(t)||l(t))?this._bodyArrayBuffer=v(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):o&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},i&&(this.blob=function(){var t=y(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var t=y(this);return t||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}return this.blob().then(b)}),this.text=function(){var t,e,r,n=y(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=m(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},s&&(this.formData=function(){return this.text().then(w)}),this.json=function(){return this.text().then(JSON.parse)},this}h.prototype.append=function(t,e){t=f(t),e=p(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},h.prototype.delete=function(t){delete this.map[f(t)]},h.prototype.get=function(t){return t=f(t),this.has(t)?this.map[t]:null},h.prototype.has=function(t){return this.map.hasOwnProperty(f(t))},h.prototype.set=function(t,e){this.map[f(t)]=p(e)},h.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},h.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),d(t)},h.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),d(t)},h.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),d(t)},a&&(h.prototype[Symbol.iterator]=h.prototype.entries);var A=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function E(t,e){if(!(this instanceof E))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var r,n,o=(e=e||{}).body;if(t instanceof E){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new h(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new h(e.headers)),this.method=(r=e.method||this.method||"GET",n=r.toUpperCase(),A.indexOf(n)>-1?n:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(o),!("GET"!==this.method&&"HEAD"!==this.method||"no-store"!==e.cache&&"no-cache"!==e.cache)){var a=/([?&])_=[^&]*/;if(a.test(this.url))this.url=this.url.replace(a,"$1_="+(new Date).getTime());else{this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}}function w(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}})),e}function T(t,e){if(!(this instanceof T))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"",this.headers=new h(e.headers),this.url=e.url||"",this._initBody(t)}E.prototype.clone=function(){return new E(this,{body:this._bodyInit})},g.call(E.prototype),g.call(T.prototype),T.prototype.clone=function(){return new T(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new h(this.headers),url:this.url})},T.error=function(){var t=new T(null,{status:0,statusText:""});return t.type="error",t};var C=[301,302,303,307,308];T.redirect=function(t,e){if(-1===C.indexOf(e))throw new RangeError("Invalid status code");return new T(null,{status:e,headers:{location:t}})};var S=n.DOMException;try{new S}catch(t){(S=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),S.prototype.constructor=S}function x(t,e){return new Promise((function(r,o){var a=new E(t,e);if(a.signal&&a.signal.aborted)return o(new S("Aborted","AbortError"));var s=new XMLHttpRequest;function c(){s.abort()}s.onload=function(){var t,e,n={status:s.status,statusText:s.statusText,headers:(t=s.getAllResponseHeaders()||"",e=new h,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}})),e)};n.url="responseURL"in s?s.responseURL:n.headers.get("X-Request-URL");var o="response"in s?s.response:s.responseText;setTimeout((function(){r(new T(o,n))}),0)},s.onerror=function(){setTimeout((function(){o(new TypeError("Network request failed"))}),0)},s.ontimeout=function(){setTimeout((function(){o(new TypeError("Network request failed"))}),0)},s.onabort=function(){setTimeout((function(){o(new S("Aborted","AbortError"))}),0)},s.open(a.method,function(t){try{return""===t&&n.location.href?n.location.href:t}catch(e){return t}}(a.url),!0),"include"===a.credentials?s.withCredentials=!0:"omit"===a.credentials&&(s.withCredentials=!1),"responseType"in s&&(i?s.responseType="blob":u&&a.headers.get("Content-Type")&&-1!==a.headers.get("Content-Type").indexOf("application/octet-stream")&&(s.responseType="arraybuffer")),!e||"object"!=typeof e.headers||e.headers instanceof h?a.headers.forEach((function(t,e){s.setRequestHeader(e,t)})):Object.getOwnPropertyNames(e.headers).forEach((function(t){s.setRequestHeader(t,p(e.headers[t]))})),a.signal&&(a.signal.addEventListener("abort",c),s.onreadystatechange=function(){4===s.readyState&&a.signal.removeEventListener("abort",c)}),s.send(void 0===a._bodyInit?null:a._bodyInit)}))}x.polyfill=!0,n.fetch||(n.fetch=x,n.Headers=h,n.Request=E,n.Response=T)},function(t,e,r){var n=r(7);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(9)(n,o);n.locals&&(t.exports=n.locals)},function(t,e,r){(e=r(8)(!0)).push([t.i,"@-webkit-keyframes spin {\n  from {\n    transform: scale(1) rotate(0deg); }\n  to {\n    transform: scale(1) rotate(360deg); } }\n\n@keyframes spin {\n  from {\n    transform: scale(1) rotate(0deg); }\n  to {\n    transform: scale(1) rotate(360deg); } }\n\n.spinning > * > *:first-child {\n  -webkit-animation: spin 1s infinite linear;\n          animation: spin 1s infinite linear; }\n\n.center {\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.left {\n  float: left; }\n\n.right {\n  float: right; }\n","",{version:3,sources:["button-panel.css"],names:[],mappings:"AAAA;EACE;IACE,gCAAgC,EAAE;EACpC;IACE,kCAAkC,EAAE,EAAE;;AAJ1C;EACE;IACE,gCAAgC,EAAE;EACpC;IACE,kCAAkC,EAAE,EAAE;;AAE1C;EACE,0CAAkC;UAAlC,kCAAkC,EAAE;;AAEtC;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB,EAAE;;AAE3B;EACE,WAAW,EAAE;;AAEf;EACE,YAAY,EAAE",file:"button-panel.css",sourcesContent:["@keyframes spin {\n  from {\n    transform: scale(1) rotate(0deg); }\n  to {\n    transform: scale(1) rotate(360deg); } }\n\n.spinning > * > *:first-child {\n  animation: spin 1s infinite linear; }\n\n.center {\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.left {\n  float: left; }\n\n.right {\n  float: right; }\n"]}]),t.exports=e},function(t,e,r){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=function(t,e){var r=t[1]||"",n=t[3];if(!n)return r;if(e&&"function"==typeof btoa){var o=(i=n,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(u," */")),a=n.sources.map((function(t){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(t," */")}));return[r].concat(a).concat([o]).join("\n")}var i,s,u;return[r].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(t,r,n){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(n)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<t.length;s++){var u=[].concat(t[s]);n&&o[u[0]]||(r&&(u[2]?u[2]="".concat(r," and ").concat(u[2]):u[2]=r),e.push(u))}},e}},function(t,e,r){var n,o,a={},i=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=n.apply(this,arguments)),o}),s=function(t,e){return e?e.querySelector(t):document.querySelector(t)},u=function(t){var e={};return function(t,r){if("function"==typeof t)return t();if(void 0===e[t]){var n=s.call(this,t,r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),c=null,l=0,f=[],p=r(10);function d(t,e){for(var r=0;r<t.length;r++){var n=t[r],o=a[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(g(n.parts[i],e))}else{var s=[];for(i=0;i<n.parts.length;i++)s.push(g(n.parts[i],e));a[n.id]={id:n.id,refs:1,parts:s}}}}function h(t,e){for(var r=[],n={},o=0;o<t.length;o++){var a=t[o],i=e.base?a[0]+e.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};n[i]?n[i].parts.push(s):r.push(n[i]={id:i,parts:[s]})}return r}function y(t,e){var r=u(t.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=f[f.length-1];if("top"===t.insertAt)n?n.nextSibling?r.insertBefore(e,n.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),f.push(e);else if("bottom"===t.insertAt)r.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=u(t.insertAt.before,r);r.insertBefore(e,o)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=f.indexOf(t);e>=0&&f.splice(e,1)}function b(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var n=function(){0;return r.nc}();n&&(t.attrs.nonce=n)}return v(e,t.attrs),y(t,e),e}function v(t,e){Object.keys(e).forEach((function(r){t.setAttribute(r,e[r])}))}function g(t,e){var r,n,o,a;if(e.transform&&t.css){if(!(a="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=a}if(e.singleton){var i=l++;r=c||(c=b(e)),n=w.bind(null,r,i,!1),o=w.bind(null,r,i,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",v(e,t.attrs),y(t,e),e}(e),n=C.bind(null,r,e),o=function(){m(r),r.href&&URL.revokeObjectURL(r.href)}):(r=b(e),n=T.bind(null,r),o=function(){m(r)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var r=h(t,e);return d(r,e),function(t){for(var n=[],o=0;o<r.length;o++){var i=r[o];(s=a[i.id]).refs--,n.push(s)}t&&d(h(t,e),e);for(o=0;o<n.length;o++){var s;if(0===(s=n[o]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete a[s.id]}}}};var A,E=(A=[],function(t,e){return A[t]=e,A.filter(Boolean).join("\n")});function w(t,e,r,n){var o=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=E(e,o);else{var a=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}function T(t,e){var r=e.css,n=e.media;if(n&&t.setAttribute("media",n),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}function C(t,e,r){var n=r.css,o=r.sourceMap,a=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||a)&&(n=p(n)),o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([n],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var r=e.protocol+"//"+e.host,n=r+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var o,a=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?t:(o=0===a.indexOf("//")?a:0===a.indexOf("/")?r+a:n+a.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}},function(t,e,r){"use strict";r.r(e);var n=r(2),o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};function a(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,a=r.call(t),i=[];try{for(;(void 0===e||e-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i}r(4);var i=r(0),s=r.n(i),u=r(1),c=r(3),l=function(t){function e(e){var r=t.call(this,e)||this;return r.init(),r}return function(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}(e,t),e.prototype.init=function(){this.state={api_call:"READY",response:""}},e.prototype.apiStateIcon=function(){switch(this.state.api_call){case"IN_PROGRESS":return"fa fa-spinner";case"SUCCESS":return"check";case"ERROR":return"exclamation-triangle";case"READY":default:return this.props.options.icon}},e.prototype.apiStateClassName=function(){switch(this.state.api_call){case"IN_PROGRESS":return"spinning";default:return""}},e.prototype.getOrientation=function(){if(!this.props.options.orientation)return"center";switch(this.props.options.orientation){case"left":return"left";case"right":return"right";case"center":default:return"center"}},e.prototype.customStyle=function(){return"custom"===this.props.options.variant?{background:"none",border:"none",backgroundColor:this.props.options.backgroundColor,color:this.props.options.foregroundColor}:{}},e.prototype.variant=function(){return"custom"===this.props.options.variant?void 0:this.props.options.variant},e.prototype.buttonText=function(){return this.interpolateVariables(this.props.options.text)},e.prototype.interpolateVariables=function(t){var e;return Object(c.getTemplateSrv)().replace(t,null===(e=this.props.data.request)||void 0===e?void 0:e.scopedVars)},e.prototype.prepareFetchOpts=function(t){var e=this,r=this.props.options,n=new Headers;n.set("Accept","application/json");var o={method:r.method,mode:"cors",credentials:"include",cache:"no-cache",headers:n,redirect:"follow"};return"POST"===r.method&&(n.set("Content-Type",r.contentType),r.payload&&(o.body=this.interpolateVariables(r.payload))),r.isAuth&&n.set("Authorization","Basic "+btoa(r.username+":"+r.password)),r.params&&("header"===r.type?r.params.forEach((function(t){n.set(e.interpolateVariables(t[0]),e.interpolateVariables(t[1]))})):"query"===r.type?r.params.forEach((function(r){t.searchParams.append(e.interpolateVariables(r[0]),e.interpolateVariables(r[1]))})):console.error("Unknown params type",r.type)),o},e.prototype.render=function(){var t=this,e=this.props.options;return s.a.createElement("div",{className:this.getOrientation()},s.a.createElement(u.Button,{variant:this.variant(),title:this.state.response,size:"lg",className:this.apiStateClassName(),icon:this.apiStateIcon(),onClick:function(){t.setState({api_call:"IN_PROGRESS"});var r=new URL(t.interpolateVariables(e.url));console.log(e.method," to ",r," with params as ",e.type);var n=t.prepareFetchOpts(r);fetch(r.toString(),n).then((function(e){if("opaque"===e.type)t.setState({api_call:"READY",response:"CORS prevents access to the response"});else{if(!e.ok)throw console.log("Requeste failed: ",e),new Error(e.status+e.statusText);t.setState({api_call:"SUCCESS",response:e.statusText}),console.log("Requeste successful: ",e)}})).catch((function(e){t.setState({api_call:"ERROR",response:e.message}),console.error("Request error: ",e)}))},style:this.customStyle()},this.buttonText()))},e}(i.PureComponent),f=function(t){t.item;var e=t.value,r=t.onChange,n=(t.context,a(Object(i.useState)(""),2)),o=n[0],c=n[1],l=a(Object(i.useState)(""),2),f=l[0],p=l[1];return s.a.createElement("div",{className:"panel-container",style:{width:"auto"}},s.a.createElement(u.HorizontalGroup,null,s.a.createElement(u.Input,{css:"",placeholder:"Name",onChange:function(t){var e=t.target;c(e.value)},value:o}),s.a.createElement(u.Input,{css:"",placeholder:"Value",onChange:function(t){var e=t.target;p(e.value)},value:f}),s.a.createElement(u.IconButton,{onClick:function(t){return function(t){t.target;var n,a=o;(n=e?e.filter((function(t){return t[0]!==a})):[]).push([a,f]),n.sort((function(t,e){return t[0].localeCompare(e[0])})),console.log("Updated params: ",n),c(""),p(""),r(n)}(t)},name:"plus"})),s.a.createElement(u.VerticalGroup,null,Array.from(e||[]).map((function(t){return s.a.createElement(u.HorizontalGroup,null,s.a.createElement(u.Input,{css:"",disabled:!0,value:t[0]}),s.a.createElement(u.Input,{css:"",disabled:!0,value:t[1]}),s.a.createElement(u.IconButton,{onClick:(n=t[0],function(t){t.target,console.log("Removing "+n);var o=e.filter((function(t){return t[0]!==n}));console.log("Removed "+n+": ",o),r(o)}),name:"minus"}));var n}))))};r(6);r.d(e,"plugin",(function(){return p}));var p=new n.PanelPlugin(l).setPanelOptions((function(t){return t.addRadio({path:"method",name:"Method",category:["REST Integration"],description:"HTTP method used to communicate with the remote site",settings:{options:[{value:"GET",label:"GET"},{value:"POST",label:"POST"}]},defaultValue:"GET"}).addTextInput({path:"url",name:"URL",category:["REST Integration"],description:"The URL to call",defaultValue:"http://api.example.com/"}).addRadio({path:"type",name:"Type",category:["REST Integration"],description:"Defines how the parameters are sent to the server",settings:{options:[{value:"header",label:"Header",description:"Send the parameters as request HTTP headers"},{value:"query",label:"Query",description:"Send the parameters as `key=value` query parameter"}]},defaultValue:"header"}).addCustomEditor({id:"buttonParams",path:"params",name:"Parameters",category:["REST Integration"],description:"The parameters sent with the request",editor:f}).addTextInput({path:"contentType",name:"Content-Type",category:["REST Integration"],description:"Content-Type of the payload",defaultValue:"application/json",showIf:function(t){return"POST"===t.method}}).addTextInput({path:"payload",name:"Payload",category:["REST Integration"],description:"Optional payload to send with the request",settings:{useTextarea:!0,rows:5},showIf:function(t){return"POST"===t.method}}).addSelect({path:"variant",name:"Variant",description:"Button variant used to render",settings:{options:[{value:"primary",label:"Primary"},{value:"secondary",label:"Secondary"},{value:"destructive",label:"Destructive"},{value:"link",label:"Link"},{value:"custom",label:"Custom"}]},defaultValue:"primary"}).addColorPicker({path:"foregroundColor",name:"Fackground Color",description:"Foreground color of the button",settings:{disableNamedColors:!0},showIf:function(t){return"custom"===t.variant}}).addColorPicker({path:"backgroundColor",name:"Background Color",description:"Background color of the button",settings:{disableNamedColors:!0},showIf:function(t){return"custom"===t.variant}}).addRadio({path:"orientation",name:"Orientation",description:"Button orientation used to render",settings:{options:[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"}]},defaultValue:"center"}).addSelect({path:"icon",name:"Icon",description:"",settings:{options:Object(u.getAvailableIcons)().map((function(t){return{value:t,label:t}}))},defaultValue:"cog"}).addTextInput({path:"text",name:"Text",description:"The description of the button",defaultValue:"The default button label"}).addBooleanSwitch({path:"isAuth",name:"Authentication",category:["Authentication"],description:"Should basic authentication be used?",defaultValue:!1}).addTextInput({path:"username",name:"Username",category:["Authentication"],description:"ℹ️ The server MUST provide proper CORS Access-Control-Allow-* headers!",showIf:function(t){return t.isAuth}}).addTextInput({path:"password",name:"Password",category:["Authentication"],description:"⚠️ The password is NOT stored encrypted in Grafana!",showIf:function(t){return t.isAuth}})}))}])}));
//# sourceMappingURL=module.js.map