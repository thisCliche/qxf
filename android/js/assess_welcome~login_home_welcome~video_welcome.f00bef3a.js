(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["assess_welcome~login_home_welcome~video_welcome"],{"0c6d":function(t,e,r){"use strict";r.d(e,"b",(function(){return s})),r.d(e,"l",(function(){return f})),r.d(e,"j",(function(){return p})),r.d(e,"p",(function(){return h})),r.d(e,"d",(function(){return l})),r.d(e,"e",(function(){return d})),r.d(e,"k",(function(){return y})),r.d(e,"c",(function(){return m})),r.d(e,"g",(function(){return v})),r.d(e,"o",(function(){return w})),r.d(e,"n",(function(){return g})),r.d(e,"m",(function(){return x})),r.d(e,"a",(function(){return b})),r.d(e,"i",(function(){return L})),r.d(e,"h",(function(){return E})),r.d(e,"r",(function(){return T})),r.d(e,"q",(function(){return j})),r.d(e,"f",(function(){return C}));r("caad"),r("d3b7"),r("2532"),r("433b");var n=r("d399"),o=r("8bbf"),i=r.n(o),a=r("cebe"),c=r.n(a);i.a.use(n["a"]);var u=c.a.create({baseURL:"http://192.168.90.7:9527/",headers:{"Content-Type":"application/json;charset=utf-8"}});function s(t){return u({url:"appnews/jspaPhoto/getBanner?criCode=".concat(t),method:"post"})}function f(){return u({url:"appnews/jspaPolicy/getUserAvatar",method:"post"})}function p(t){return u({url:"appnews/jspaPhoto/getNewsPhone",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},data:t})}function h(t){return u({url:"appnews/jspaPolicy/getpolicy",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},data:t})}function l(t){return u({url:"appnews/jspaJspa/getJspaJspaQuery?criCode=".concat(t),method:"post"})}function d(t){return u({url:"appnews/jspaPolicy/getJspaPolicy",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},data:t})}function y(t){return u({url:"appnews/jspaRegionInfo/getRegion?criCode=".concat(t),method:"post"})}function m(t){return u({url:"appnews/jspaJspa/getJscodeOpen?criCode=".concat(t),method:"post"})}function v(t){return u({url:"appauth/cCustomerAssessmentType/getMyAssessmentList",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},data:t})}function w(){return u({url:"appvideo/cVideo/getVideoRadom",method:"post"})}function g(t){return u({url:"appvideo/cVideo/getVideoList",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},data:t})}function x(t){return u({url:"appvideo/cVideo/getVideo?id=".concat(t),method:"post"})}function b(t){return u({url:"appauth/cCustomerAssessment/createMyAssessment",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},data:t})}function L(t){return u({url:"appauth/cCustomerAssessmentQuestion/getMyQuestionList?assessmentId=".concat(t),method:"post"})}function E(t){return u({url:"appauth/cCustomerAssessmentQuestion/getMyQuestion",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},data:t})}function T(t){return u({url:"appauth/cCustomerAssessmentQuestion/submitMyAnswer",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},data:t})}function j(t){return u({url:"appauth/cCustomerAssessment/myAssessInfo?assessment=".concat(t),method:"post"})}function C(t){return u({url:"appnews/jspaPolicy/getJspaPolicyInfo?id=".concat(t),method:"post"})}u.interceptors.request.use((function(t){return t.headers["token"]=window.localStorage.getItem("token")||null,t})),u.interceptors.response.use((function(t){return t}),(function(t){if(t.message.includes("timeout"))n["a"].fail("网络连接超时");else{if(!t.message.includes("500"))return Promise.reject(t);n["a"].fail("服务器崩了...")}}))},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7");function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}},2532:function(t,e,r){"use strict";var n=r("23e7"),o=r("5a34"),i=r("1d80"),a=r("ab13");n({target:"String",proto:!0,forced:!a("includes")},{includes:function(t){return!!~String(i(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(t,e,r){var n=r("861d"),o=r("c6b6"),i=r("b622"),a=i("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==o(t))}},"5a34":function(t,e,r){var n=r("44e7");t.exports=function(t){if(n(t))throw TypeError("The method doesn't accept regular expressions");return t}},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(F){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new A(n||[]);return i._invoke=j(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(F){return{type:"throw",arg:F}}}t.wrap=s;var p="suspendedStart",h="suspendedYield",l="executing",d="completed",y={};function m(){}function v(){}function w(){}var g={};g[i]=function(){return this};var x=Object.getPrototypeOf,b=x&&x(x(O([])));b&&b!==r&&n.call(b,i)&&(g=b);var L=w.prototype=m.prototype=Object.create(g);function E(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function T(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,p=s.value;return p&&"object"===typeof p&&n.call(p,"__await")?e.resolve(p.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(p).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;function i(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function j(t,e,r){var n=p;return function(o,i){if(n===l)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return k()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var c=C(a,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===p)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=l;var u=f(t,e,r);if("normal"===u.type){if(n=r.done?d:h,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}function C(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,C(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function O(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:k}}function k(){return{value:e,done:!0}}return v.prototype=L.constructor=w,w.constructor=v,v.displayName=u(w,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,u(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},E(T.prototype),T.prototype[a]=function(){return this},t.AsyncIterator=T,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new T(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(L),u(L,c,"Generator"),L[i]=function(){return this},L.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:O(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},ab13:function(t,e,r){var n=r("b622"),o=n("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[o]=!1,"/./"[t](e)}catch(n){}}return!1}},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},caad:function(t,e,r){"use strict";var n=r("23e7"),o=r("4d64").includes,i=r("44d2"),a=r("ae40"),c=a("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:!c},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")}}]);