!function(t){function e(e){for(var o,a,s=e[0],l=e[1],u=e[2],d=0,f=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);for(c&&c(e);f.length;)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(o=!1)}o&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={22:0},i=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=l;i.push([478,1,0]),n()}({130:function(t,e,n){},131:function(t,e,n){},132:function(t,e,n){},133:function(t,e,n){},28:function(t,e,n){"use strict";n.d(e,"a",(function(){return w})),n.d(e,"b",(function(){return _})),n.d(e,"c",(function(){return E}));var o=n(0),r=n.n(o),i=n(5),a=n(6),s=(n(130),n(1)),l=n.n(s),u=n(29),c=n(7),d=n(46);function f(t,e,n,o,r,i,a){try{var s=t[i](a),l=s.value}catch(t){return void n(t)}s.done?e(l):Promise.resolve(l).then(o,r)}function p(t){return function(){var e=this,n=arguments;return new Promise((function(o,r){var i=t.apply(e,n);function a(t){f(i,o,r,a,s,"next",t)}function s(t){f(i,o,r,a,s,"throw",t)}a(void 0)}))}}var h=function(t,e){t((function(){Object(u.b)(),function(){var t=document.querySelector("#manual-scroll"),e=document.querySelector("#manual-fullscreen"),n=document.querySelector(".pretty_scroll_area__hide_scroll_element");t.onclick=r,e.onclick=function(){return a.apply(this,arguments)};var o=function(t){var e,n,o=t.do_scroll,r=document.querySelector("#auto-scroll");return Object(u.a)((function(t){document.fullscreenElement&&document.exitFullscreen(),0===t?i():a()}),{onlyUserScroll:!0,fireInitialScroll:!1}),i(),a;function i(){s(),n||(e=9,d(),l.a.internal(n))}function a(){c(),n&&(window.clearTimeout(n),n=null)}function s(){r.removeAttribute("data-disable-auto-scroll")}function c(){r.setAttribute("data-disable-auto-scroll","true")}function d(){l.a.internal(0<e&&e<=9),--e?s():c(),r.textContent="Auto-center "+e+"s",0===e?(o(),a(),l.a.internal(null===n)):n=window.setTimeout(d,1e3)}}({do_scroll:r});return;function r(){return i.apply(this,arguments)}function i(){return(i=p(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o(),t.next=3,Object(u.c)(n);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function a(){return(a=p(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,document.documentElement.requestFullscreen(),t.next=8;break;case 4:return t.prev=4,t.t0=t.catch(0),Object(d.a)("Your browser doesn't support fullscreen.",{is_error:!0,short_duration:!0}),t.abrupt("return");case 8:requestAnimationFrame(p(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r();case 2:case"end":return t.stop()}}),t)}))));case 9:case"end":return t.stop()}}),t,null,[[0,4]])})))).apply(this,arguments)}}(),Object(c.a)()}),e)};var m=n(2);function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function g(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function b(){return(b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function w(t){var e=t.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null),r.a.createElement("div",b({className:"pretty_scroll_area__hide_scroll_element load-area"},t),e,r.a.createElement("div",{id:"screen-buttons-wrapper"},r.a.createElement("div",{className:"screen-button glass-background",id:"manual-fullscreen"},"Fullscreen"),r.a.createElement("div",{className:"screen-button glass-background",id:"manual-scroll"},"Center"),r.a.createElement("div",{className:"screen-button glass-background",id:"auto-scroll"}," "))))}function _(t){var e=t.children;return r.a.createElement("div",{id:"more_panel"},r.a.createElement("div",{id:"more_panel_background",className:"glass-background"}),e,r.a.createElement(a.a,null))}function E(t){var e=t.onPageLoad,n=g(t,["onPageLoad"]);return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({renderToDom:!0,renderToHtml:!0,favicon:m.d},n,{on_page_load:function(t){return h(e,t)}})}},29:function(t,e,n){"use strict";n.d(e,"e",(function(){return g})),n.d(e,"c",(function(){return x})),n.d(e,"d",(function(){return S})),n.d(e,"a",(function(){return h}));n(131);var o=n(1),r=n.n(o);function i(t,e,n,o,r,i,a){try{var s=t[i](a),l=s.value}catch(t){return void n(t)}s.done?e(l):Promise.resolve(l).then(o,r)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(o,r){var a=t.apply(e,n);function s(t){i(a,o,r,s,l,"next",t)}function l(t){i(a,o,r,s,l,"throw",t)}s(void 0)}))}}e.b=d;var s,l={is_on_hide_scroll_element:null,enable_scroll_auto_hide:null,scrollbar_width_computed:null};function u(){var t=l.is_on_hide_scroll_element&&l.enable_scroll_auto_hide&&l.scrollbar_width_computed;s.classList[t?"add":"remove"]("hide_scroll")}var c=!1;function d(){if(!c){c=!0;var t=document.querySelectorAll(".pretty_scroll_area"),e=document.querySelectorAll(".pretty_scroll_area__parent"),n=document.querySelectorAll(".pretty_scroll_area__hide_scroll_element");r.a.usage(1===t.length&&1===e.length&&1===n.length),s=t[0];var o,i=n[0];o=function(){var t,e=document.createElement("div");(t=e).style.position="absolute",t.style.visibility="hidden",t.style.zIndex="-9999",e.style.overflow="scroll";var n=document.body;n.appendChild(e);var o=document.createElement("div");e.appendChild(o);var r=e.offsetWidth-o.offsetWidth;return n.removeChild(e),r}(),document.documentElement.style.setProperty("--scroll-bar-width",o+"px"),l.scrollbar_width_computed=!0,u(),h((function(t){var e=O(i);l.is_on_hide_scroll_element=t===e,u()}),{fireInitialScroll:!0}),setTimeout((function(){l.enable_scroll_auto_hide=!0,u()}),2e3)}}var f,p=[];function h(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.onlyUserScroll,o=void 0!==n&&n,r=e.fireInitialScroll,i=void 0!==r&&r;if(t.onlyUserScroll=o,p.push(t),v(),i){var a=y();t(a)}}var m=!1;function v(){m||(d(),m=!0,(s===document.documentElement?window:s).addEventListener("scroll",(function(){var t=y();p.forEach((function(e){e.onlyUserScroll&&f||e(t)}))}),{passive:!0}))}function y(){return s.scrollTop}function g(t){return b.apply(this,arguments)}function b(){return(b=a(regeneratorRuntime.mark((function t(e){var n,o,r=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=r.length>1&&void 0!==r[1]?r[1]:{},o=n.smooth,void 0!==o&&o){t.next=5;break}return t.abrupt("return",w(e));case 5:return t.abrupt("return",_(e));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t){s.scrollTop=t}function _(t){return E.apply(this,arguments)}function E(){return(E=a(regeneratorRuntime.mark((function t(e){var n,o,r,i,a,s,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l=function(t){return t*t*(3-2*t)},30,20,o=new Promise((function(t){return n=t})),r=y(),i=e-r,f=!0,a=0,s=setInterval((function(){w(r+i*l(a++/30)),a>30&&(clearInterval(s),window.requestAnimationFrame((function(){f=!1})),n())}),20),t.abrupt("return",o);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.smooth,o=void 0===n||n,r=O(t);return g(r,{smooth:o})}function O(t){return(t.constructor===String?document.querySelector(t):t).getBoundingClientRect().top+y()}function S(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.smooth,n=void 0===e||e,o=document.querySelectorAll(".pretty_scroll_area__hide_scroll_element");r.a.usage(1===o.length);var i=o[0];x(i,{smooth:n})}},46:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o=n(1),r=n.n(o),i=n(77),a=n.n(i);n(132),n(133);function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.is_error,o=void 0!==n&&n,i=e.short_duration,s=void 0!==i&&i;r()(t);var l=o?"linear-gradient(to right, #e83131, #dd4c4c)":"linear-gradient(to right, rgb(0, 176, 84), rgb(61, 201, 64))",u=s?4:8;a()({duration:1e3*u,text:t,position:"left",backgroundColor:l}).showToast()}},478:function(t,e,n){n(19),t.exports=n(479)},479:function(t,e,n){"use strict";var o,r=n(16);r.initFunctions={},r.initFunctions=r.initFunctions||{},r.initFunctions.hydratePage=!0===((o=n(22))||{}).__esModule?o.default:o,r.pageConfig=function(){var t=n(490);return!0===(t||{}).__esModule?t.default:t}(),r.router=function(){var t=n(23);return!0===(t||{}).__esModule?t.default:t}(),r.renderPageToDom=function(){var t=n(24);return!0===(t||{}).__esModule?t.default:t}(),r.domRender=function(){var t=n(25);return!0===(t||{}).__esModule?t.default:t}(),function(){var t=n(26);!0===(t||{}).__esModule&&t.default}()},480:function(t,e,n){},490:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),i=n(28),a=n(1),s=n.n(a);"undefined"!=typeof window&&(Element.prototype.hide=function(){this.style.visibility="hidden"},Element.prototype.show=function(){this.style.visibility="inherit"},Element.prototype.getStyle=function(t){return document.defaultView.getComputedStyle(this,null).getPropertyValue(t)},Element.prototype.getPosition=function(){var t=0,e=0,n=this;do{t+=n.offsetLeft,e+=n.offsetTop}while(n=n.offsetParent);return{x:t,y:e}},Element.prototype.setTextSize=function(t,e,n,o){s.a.warning("TEXTAREA"!==this.tagName),s.a.warning(t&&e);var r=document.createElement(this.tagName);r.style.fontSize="100px",r.style.display="inline-block",r.style.whiteSpace="nowrap",r.style.position="absolute",r.style.fontFamily=this.getStyle("font-family"),r.style.letterSpacing=this.getStyle("letter-spacing"),r.style.top="-9999px",r.style.zIndex="-1",r.style.visibility="hidden";var i=this.innerHTML;if(""===i)i="y";else if(o){var a;s.a.warning(this.innerHTML===this.textContent),s.a.warning(o.constructor===Array&&o.length>0);var l=-1;document.documentElement.appendChild(r);for(var u=0;u<o.length;u++){var c=o[u];r.innerHTML=c;var d=parseInt(r.getStyle("width"),10);d>l&&(l=d,a=c)}for(s.a.warning(a),i="",u=0;u<this.textContent.length;u++)i+=a}r.innerHTML=i,document.documentElement.appendChild(r);var f=parseInt(r.getStyle("width"),10),p=parseInt(r.getStyle("height"),10),h=Math.min(e/p,t/f);if(document.documentElement.removeChild(r),n)return{width:h*f,height:h*p,fontSize:100*h};this.style.fontSize=Math.floor(100*h)+"px",s.a.warning("block"===this.getStyle("display")||"inline-block"===this.getStyle("display")||"table-cell"===this.getStyle("display"),"this.getStyle('display')=="+this.getStyle("display"),1),this.hide(),s.a.warning(this.getStyle("font-size")===this.style.fontSize);for(var m=100;this.getStyle("width")<t&&this.getStyle("height")<e&&--m;)this.style.fontSize=parseInt(this.style.fontSize,10)+2+"px";for(;(this.getStyle("width")>t||this.getStyle("height")>e)&&--m;)this.style.fontSize=parseInt(this.style.fontSize,10)-1+"px";s.a.warning(m>0,"max===0"),this.show()});n(480);var l=function(){return r.a.createElement(u,null,r.a.createElement(c,null,"Use Cases"),r.a.createElement(d,null,"School & Universities - Communicate to students without speaking, e.g. during examination."),r.a.createElement(d,null,"At the library - You are forbidden to talk."),r.a.createElement(d,null,"Audio not working - Video call, or presentation with large audience."),r.a.createElement(d,null,"For Fun."))};function u(t){var e=t.children;return r.a.createElement("div",{style:{textAlign:"center",padding:"30px 0"}},r.a.createElement("div",{style:{textAlign:"left",display:"inline-block"}},e))}function c(t){var e=t.children;return r.a.createElement("span",{style:{textDecoration:"underline",fontSize:"1.2em"}},e)}function d(t){var e=t.children;return r.a.createElement("div",{style:{paddingLeft:7,marginTop:5}},"• ",e)}var f=n(29),p=n(60);function h(t,e,n,o,r,i,a){try{var s=t[i](a),l=s.value}catch(t){return void n(t)}s.done?e(l):Promise.resolve(l).then(o,r)}function m(t){return function(){var e=this,n=arguments;return new Promise((function(o,r){var i=t.apply(e,n);function a(t){h(i,o,r,a,s,"next",t)}function s(t){h(i,o,r,a,s,"throw",t)}a(void 0)}))}}var v,y=function(t){var e=t.text;function n(){e.setTextSize(window.innerWidth,window.innerHeight),e.style.paddingTop="0px";var t=window.innerHeight/2-parseInt(e.getStyle("height"))/2;e.style.paddingTop=t+"px"}e.onblur=function(){a()},document.body.onload=function(){n(),a(),function(){function t(){Object(f.e)(0),requestAnimationFrame((function(){return Object(f.e)(0)}))}t(),setTimeout(t,10)}()},window.onfocus=function(){a()};var o=String.fromCharCode(160);function r(t){var e=t.charCodeAt(0);return t&&[160,32].includes(e)}var i=e.textContent;function a(){e.focus(),requestAnimationFrame((function(){e.focus()}))}function l(t){var n=window.getSelection(),o=document.createRange();o.setStart(e,t),o.setEnd(e,t),n.removeAllRanges(),n.addRange(o)}e.oninput=function(){var t=e.textContent;""===t&&(t=e.textContent=o,l(0));var a=t.slice(0,t.length-o.length);r(i)&&r(t.slice(-1))&&t.length===1+o.length&&(s.a.warning(1===a.length),t=e.textContent=a,l(1)),s.a.warning(t.length>0);var u=r(t);document.getElementById("hint").style.opacity=u?"1":"0",document.title=u?"Msg Tab":t+" - Msg Tab",b(),n(),b(),i=t},window.onresize=n};var g=!1;function b(){return w.apply(this,arguments)}function w(){return(w=m(regeneratorRuntime.mark((function t(){var e,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=function(t){return t.getTime()},e=function(){return n(new Date)-n(v)},(o=function(){Object(f.d)({smooth:!1})})(),requestAnimationFrame(o),v=new Date,!g){t.next=8;break}return t.abrupt("return");case 8:g=!0;case 9:if(!(e()<100)){t.next=15;break}return t.next=12,Object(p.a)({milliseconds:10});case 12:o(),t.next=9;break;case 15:return g=!1,t.abrupt("return");case 17:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.default=Object(i.c)({route:"/msg-tab",title:"Msg Tab",view:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{id:"msg-container"},r.a.createElement("div",{id:"hint"},"Type something..."),r.a.createElement("div",{id:"text-container"},r.a.createElement("div",{id:"text",spellCheck:"false"}," "))),r.a.createElement(i.b,null,r.a.createElement(l,null)))},onPageLoad:function(t){t();var e=window.document.getElementById("text");e.setAttribute("contentEditable","true"),y({text:e})}})},60:function(t,e,n){"use strict";function o(t){var e=t.seconds,n=t.milliseconds;return n=n||1e3*e,new Promise((function(t){return window.setTimeout(t,n)}))}n.d(e,"a",(function(){return o}))},77:function(t,e,n){
/*!
 * Toastify js 1.7.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */
var o,r;o=this,r=function(t){var e=function(t){return new e.lib.init(t)};function n(t,e){return!(!t||"string"!=typeof e||!(t.className&&t.className.trim().split(/\s+/gi).indexOf(e)>-1))}return e.lib=e.prototype={toastify:"1.7.0",constructor:e,init:function(t){return t||(t={}),this.options={},this.toastElement=null,this.options.text=t.text||"Hi there!",this.options.duration=0===t.duration?0:t.duration||3e3,this.options.selector=t.selector,this.options.callback=t.callback||function(){},this.options.destination=t.destination,this.options.newWindow=t.newWindow||!1,this.options.close=t.close||!1,this.options.gravity="bottom"===t.gravity?"toastify-bottom":"toastify-top",this.options.positionLeft=t.positionLeft||!1,this.options.position=t.position||"",this.options.backgroundColor=t.backgroundColor,this.options.avatar=t.avatar||"",this.options.className=t.className||"",this.options.stopOnFocus=void 0===t.stopOnFocus||t.stopOnFocus,this.options.onClick=t.onClick,this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var t=document.createElement("div");if(t.className="toastify on "+this.options.className,this.options.position?t.className+=" toastify-"+this.options.position:!0===this.options.positionLeft?(t.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):t.className+=" toastify-right",t.className+=" "+this.options.gravity,this.options.backgroundColor&&(t.style.background=this.options.backgroundColor),t.innerHTML=this.options.text,""!==this.options.avatar){var e=document.createElement("img");e.src=this.options.avatar,e.className="toastify-avatar","left"==this.options.position||!0===this.options.positionLeft?t.appendChild(e):t.insertAdjacentElement("beforeend",e)}if(!0===this.options.close){var n=document.createElement("span");n.innerHTML="&#10006;",n.className="toast-close",n.addEventListener("click",function(t){t.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}.bind(this));var o=window.innerWidth>0?window.innerWidth:screen.width;("left"==this.options.position||!0===this.options.positionLeft)&&o>360?t.insertAdjacentElement("afterbegin",n):t.appendChild(n)}if(this.options.stopOnFocus&&this.options.duration>0){const e=this;t.addEventListener("mouseover",(function(e){window.clearTimeout(t.timeOutValue)})),t.addEventListener("mouseleave",(function(){t.timeOutValue=window.setTimeout((function(){e.removeElement(t)}),e.options.duration)}))}return void 0!==this.options.destination&&t.addEventListener("click",function(t){t.stopPropagation(),!0===this.options.newWindow?window.open(this.options.destination,"_blank"):window.location=this.options.destination}.bind(this)),"function"==typeof this.options.onClick&&void 0===this.options.destination&&t.addEventListener("click",function(t){t.stopPropagation(),this.options.onClick()}.bind(this)),t},showToast:function(){var t;if(this.toastElement=this.buildToast(),!(t=void 0===this.options.selector?document.body:document.getElementById(this.options.selector)))throw"Root element is not defined";return t.insertBefore(this.toastElement,t.firstChild),e.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout(function(){this.removeElement(this.toastElement)}.bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(t){t.className=t.className.replace(" on",""),window.setTimeout(function(){t.parentNode&&t.parentNode.removeChild(t),this.options.callback.call(t),e.reposition()}.bind(this),400)}},e.reposition=function(){for(var t,e={top:15,bottom:15},o={top:15,bottom:15},r={top:15,bottom:15},i=document.getElementsByClassName("toastify"),a=0;a<i.length;a++){t=!0===n(i[a],"toastify-top")?"toastify-top":"toastify-bottom";var s=i[a].offsetHeight;t=t.substr(9,t.length-1),(window.innerWidth>0?window.innerWidth:screen.width)<=360?(i[a].style[t]=r[t]+"px",r[t]+=s+15):!0===n(i[a],"toastify-left")?(i[a].style[t]=e[t]+"px",e[t]+=s+15):(i[a].style[t]=o[t]+"px",o[t]+=s+15)}return this},e.lib.init.prototype=e.lib,e},t.exports?t.exports=r():o.Toastify=r()}});
//# sourceMappingURL=msg-tab.hash_99d70d47f7eb77aa3c4d.js.map