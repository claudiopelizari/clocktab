(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){"use strict";n.d(t,"c",(function(){return g})),n.d(t,"b",(function(){return v})),n.d(t,"a",(function(){return h}));var r=n(1),a=n.n(r),o=n(100),i=n.n(o);function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance");return e}var s=0;function l(e){return"__private_"+s+++"_"+e}var f=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Object.defineProperty(this,d,{writable:!0,value:[]}),Object.defineProperty(this,m,{writable:!0,value:null})}var t,n,r;return t=e,(n=[{key:"has_val",value:function(e){return p(e),this.ensure_store(),e in u(this,m)[m]}},{key:"get_val",value:function(e){return p(e),this.ensure_store(),u(this,m)[m][e]}},{key:"set_val",value:function(e,t){p(e),this.ensure_store(),u(this,m)[m][e]=t,this.save_store(),u(this,d)[d].forEach((function(n){return n(e,t)}))}},{key:"add_store_change_listener",value:function(e){u(this,d)[d].push(e)}},{key:"migrate__rename_keys",value:function(e){for(var t in this.ensure_store(),e)if(t in u(this,m)[m]){var n=u(this,m)[m][t];delete u(this,m)[m][t];var r=e[t];u(this,m)[m][r]=n}this.save_store()}},{key:"get_schema_version",value:function(){this.ensure_store();var e=u(this,m)[m]._schema_version||new Date("1986");return a()(e.constructor===Date),e}},{key:"set_schema_version",value:function(e){a()(e.constructor===Date),this.ensure_store(),u(this,m)[m]._schema_version=e,this.save_store()}},{key:"backup__dump",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.readable,n=void 0!==t&&t;this.ensure_store();var r=this.get_storage_data_string();return n&&(r=v(h(r),{readable:!0})),r}},{key:"backup__restore",value:function(e){console.log(e);try{h(e)}catch(e){throw e}this.set_storage_data_string(e)}},{key:"set_storage_data_string",value:function(e){window.localStorage.setItem("tab_storage",e)}},{key:"get_storage_data_string",value:function(){var e=window.localStorage.getItem("tab_storage");return a()(null===e||e.constructor===String),e}},{key:"load_store",value:function(){var e=this.get_storage_data_string();if(null!==e){var t;try{t=h(e)}catch(e){throw a()(!1,"Couldn't parse store data string",e),e}a()(t.constructor===Object),u(this,m)[m]=t}else u(this,m)[m]={}}},{key:"ensure_store",value:function(){null===u(this,m)[m]&&this.load_store(),a()(u(this,m)[m].constructor===Object)}},{key:"save_store",value:function(){a()(u(this,m)[m].constructor===Object);var e=v(u(this,m)[m]);this.set_storage_data_string(e),this.load_store()}}])&&c(t.prototype,n),r&&c(t,r),e}(),d=l("listeners"),m=l("store_data");function p(e){a()(e.constructor===String,{key:e}),a()(!e.startsWith("_"),"key `"+e+"` is reserved")}function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.readable,r=void 0!==n&&n;return r?i.a.stringify(e,null,2):i.a.stringify(e)}function h(e){return i.a.parse(e)}var g=new f},179:function(e,t,n){e.exports=n.p+"logo.hash_e002a36d3cec1cf076515e58d6847415.svg"},2:function(e,t,n){"use strict";n.d(t,"f",(function(){return d})),n.d(t,"h",(function(){return m})),n.d(t,"g",(function(){return p})),n.d(t,"e",(function(){return v})),n.d(t,"d",(function(){return h})),n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return b})),n.d(t,"a",(function(){return w}));var r,a,o,i=n(179),c=n.n(i),u=n(1),s=n.n(u),l=n(0),f=n.n(l),d="Clock Tab",m="https://www.clocktab.com",p="https://github.com/brillout/clocktab",v=(r="clocktab",a=String.fromCharCode(64),o=r+a+"brillout.com",s()("@"===a),o),h=c.a,g="UA-5263303-5",b=[{link_url:"/countdown",link_name:"Countdown"},{link_url:"/world-clock",link_name:"World Clock"},{link_url:"/history",link_name:"History"},{link_url:"https://www.timer-tab.com",link_name:"Timer Tab",link_target:"_blank"},{link_url:"/msg-tab",link_name:"Msg Tab"}],w=function(){return f.a.createElement(f.a.Fragment,null,f.a.createElement("li",null,"Make Clock Tab more robust. (Less bugs, more resilient, and please"," ",f.a.createElement("a",{href:"/repair"},"report any bug")," you may find!)"),f.a.createElement("li",null,"Make Clock Tab work offline."),f.a.createElement("li",null,"Remove memory leak. (Clock Tab can sometimes consumes a lot of CPU and RAM.)"),f.a.createElement("li",null,"Detect and adapt to browser dark theme mode."),f.a.createElement("li",null,"Improve theme customization."),f.a.createElement("li",null,"More themes."),f.a.createElement("li",null,"Beautiful analog clock."),f.a.createElement("li",null,"Option to move position of Clock, e.g. in the top left corner."),f.a.createElement("li",null,"Option to set YouTube live stream as background."),f.a.createElement("li",null,"Make Clock Tab load faster."))}},25:function(e,t,n){"use strict";n.r(t);n(426);var r=n(32),a=n(2),o=n(68);function i(e,t,n,r,a,o,i){try{var c=e[o](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,a)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){i(o,r,a,c,u,"next",e)}function u(e){i(o,r,a,c,u,"throw",e)}c(void 0)}))}}function u(){return(u=c(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,Object(o.b)(),e.next=4,t.page.on_page_load(t);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),s(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function s(e){console.error(e),Object(r.a)(),Object(r.c)({name:"init",err:e}),setTimeout((function(){alert("Something went wrong. Your "+a.f+' seems to be broken; click on "Bug Repair" in the footer below to fix the problem.')}),2e3)}t.default=function(e){return u.apply(this,arguments)}},32:function(e,t,n){"use strict";n.d(t,"a",(function(){return y})),n.d(t,"d",(function(){return R})),n.d(t,"c",(function(){return E})),n.d(t,"b",(function(){return M}));var r=n(1),a=n.n(r),o=n(2),i=n(180),c=n.n(i),u=n(68),s=n(96),l=n(183),f=n.n(l),d=n(13);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function g(e,t,n,r,a,o,i){try{var c=e[o](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,a)}function b(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){g(o,r,a,i,c,"next",e)}function c(e){g(o,r,a,i,c,"throw",e)}i(void 0)}))}}var w="undefined"!=typeof window&&"localhost"===window.location.hostname;!function(){if("undefined"==typeof window)return;(function(){window.ga=window.ga||function(){(window.ga.q=window.ga.q||[]).push(arguments)},window.ga.l=+new Date;var e=o.b;a()(e&&e.startsWith("UA-")),window.ga("create",e,"auto")})(),window.ga("send","pageview"),window.addEventListener("click",(function(e){var t=e.target,n=t.id,r=t.getAttribute("class"),a=t.href,o=t.value,i=t.textContent.slice(0,100);R({name:"user_click",value:n||r||a||o||i||"null",data:{target_id:n,target_class:r,target_href:a,target_value:o,target_textContent:i}})}),{passive:!1}),window.onerror=D(function(){var e=b(regeneratorRuntime.mark((function e(){var t,n,r,a,o,i,c,u,s,l=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(y(),t=l.length,n=new Array(t),r=0;r<t;r++)n[r]=l[r];return a=n[0],o=n[1],i=n[2],c=n[3],u=n[4],(s=u||{}).message=s.message||a,s.stack||Object.assign(s,{filename:o,lineno:i,colno:c,noErrorObj:!0}),e.next=8,j({name:"[error][window.onerror]",err:s});case 8:return e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),window.addEventListener("error",D(function(){var e=b(regeneratorRuntime.mark((function e(t){var n,r,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(),(n=t.error||{}).message=n.message||t.message,n.stack||(r=t.filename,a=t.lineno,o=t.colno,Object.assign(n,{filename:r,lineno:a,colno:o,noErrorObj:!0})),e.next=6,j({name:"[error][ErrorEvent]",err:n});case 6:return e.abrupt("return",!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),{useCapture:!0,passive:!1}),window.addEventListener("unhandledrejection",D(function(){var e=b(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(),n=t.reason,e.next=4,j({name:"[error][unhandledrejection]",err:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),e=f()((function(e,t){R({name:"storage_change",value:"["+e+"]: "+t,data:{localstorage__keys:Object.keys(window.localStorage),store_dump:d.c.backup__dump({readable:!0})}})}),2e3),d.c.add_store_change_listener(e),setTimeout((function(){R({name:"five_minute_stay",nonInteraction:!1})}),3e5);var e}();var _=!1;function y(){return k.apply(this,arguments)}function k(){return(k=b(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!_){e.next=2;break}return e.abrupt("return");case 2:_=!0,T("//www.google-analytics.com/analytics.js");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){return O.apply(this,arguments)}function O(){return(O=b(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,r=t.err,e.next=3,j({err:r,name:"[error]["+n+"]"});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return x.apply(this,arguments)}function x(){return(x=b(regeneratorRuntime.mark((function e(t){var n,r,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.name,r=t.err,a=(r||{}).message||"no_error_message",o={},r){e.next=7;break}o.no_error_object=!0,e.next=15;break;case 7:if(r.stack||r.stack__original){e.next=12;break}o.no_error_stack=!0,o.err_obj=JSON.stringify(r,Object.getOwnPropertyNames(r)),e.next=15;break;case 12:return e.next=14,A(r,r.stack__original||r.stack);case 14:o.source_mapped_stack=e.sent;case 15:R({name:n,value:a,data:o}),w&&alert(o.source_mapped_stack);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e){return C.apply(this,arguments)}function C(){return(C=b(regeneratorRuntime.mark((function e(t){var n,r,o,i,c,u,s,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.name,r=t.value,o=t.data,i=void 0===o?{}:o,c=t.nonInteraction,u=void 0===c||c,s=S(P(i,n,r)),a()(s.startsWith("name:")),l={eventCategory:n,eventAction:n+" - "+r,nonInteraction:u},window.ga("send",p({hitType:"event",eventLabel:s},l));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e,t,n){var r=Object(u.a)(),o=window.location.href,i={name:t,value:n,browser:Object(s.a)(),tab_user_id:r,url:o,screen:window.innerWidth+"x"+window.innerHeight+" / "+window.screen.availWidth+"x"+window.screen.availHeight+" / "+window.screen.width+"x"+window.screen.height};return Object.entries(e).forEach((function(e){var t=h(e,2),n=t[0],r=t[1];a()(!(n in i)),i[n]=r})),i}function S(e){return Object.entries(e).map((function(e){var t=h(e,2);return t[0]+": "+t[1]})).join("\n\n=====\n\n")}function T(e){var t=document.createElement("script");return t.src=e,t.async=!0,document.getElementsByTagName("head")[0].appendChild(t),t}function A(e,t){return L.apply(this,arguments)}function L(){return(L=b(regeneratorRuntime.mark((function e(t,n){var r,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new Error(t.message)).stack=n,e.prev=2,e.next=5,c.a.fromError(r);case 5:a=e.sent,e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(2),e.abrupt("return","[Failed applying source map to error stack trace] "+e.t0.message);case 11:return o=a.map((function(e){return e.toString()})).join("\n"),e.abrupt("return","[Error: "+t.message+"]\n"+o);case 13:case"end":return e.stop()}}),e,null,[[2,8]])})))).apply(this,arguments)}function D(e){return function(){var t=b(regeneratorRuntime.mark((function t(){var n=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.apply(void 0,n);case 3:t.next=10;break;case 5:return t.prev=5,t.t0=t.catch(0),w&&alert("[infinite-loop-catcher]\n"+t.t0.stack),console&&console.error&&console.error(t.t0),t.abrupt("return",!1);case 10:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(){return t.apply(this,arguments)}}()}var I=!1;function M(e){try{e()}catch(e){!1===I&&(I=!0,E({name:"dom_heart_beat",err:e})),console.error(e)}}},391:function(e,t,n){},395:function(e,t,n){},426:function(e,t,n){},5:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=(n(391),n(2));function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(){return a.a.createElement("a",{id:"header-logo",href:"/"},a.a.createElement("img",{src:o.d}),a.a.createElement("h1",null,o.f))}function u(e){return a.a.createElement("a",i({className:"header-link"},e))}t.a=function(){return a.a.createElement("div",{id:"header-container",className:"glass-background"},a.a.createElement("div",{id:"header-content"},a.a.createElement(c,null),o.c.map((function(e,t){var n=e.link_name,r=e.link_url,o=e.link_target;return a.a.createElement(u,{href:r,target:o,key:t},n)}))))}},6:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=(n(395),n(2));function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e){var t=e.children;return a.a.createElement("div",{id:"footer_container"},t)}function u(e){var t=e.children;return a.a.createElement("div",{className:"footer_section"},t)}function s(e){var t=e.children;return a.a.createElement("h4",{className:"footer-section-title",style:{marginBottom:7,fontWeight:"normal"}},t)}function l(e){var t=Object.assign({},e);return a.a.createElement("a",i({style:{display:"block",textDecoration:"none",color:"inherit"}},t))}t.a=function(){return a.a.createElement(c,null,a.a.createElement(u,null,a.a.createElement(s,null,"Support"),a.a.createElement(l,{href:"/repair"},"Bug Repair"),a.a.createElement(l,{href:"/suggest"},"Suggest a Feature"),a.a.createElement(l,{href:"/support"},"Get help & support")),a.a.createElement(u,null,a.a.createElement(s,null,"Get Involved"),a.a.createElement(l,{href:"/donate"},"Donate"),a.a.createElement(l,{href:"/contribute"},"Contribute")),a.a.createElement(u,null,a.a.createElement(s,null,o.f),a.a.createElement(l,{href:"/roadmap"},"Roadmap"),a.a.createElement(l,{href:o.g,target:"_blank"},"Source Code"),a.a.createElement(l,{href:"/contact"},"Contact"),a.a.createElement(l,{href:"/about"},"About")),a.a.createElement(u,null,a.a.createElement(s,null,"Legal & conduct"),a.a.createElement(l,{href:"/conduct"},"Code of Conduct"),a.a.createElement(l,{href:"/terms"},"Terms of Service"),a.a.createElement(l,{href:"/privacy-policy"},"Privacy Policy")))}},68:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));var r=n(181),a=n(13);function o(){return i(),a.c.get_val("tab_user_uid")}function i(){a.c.has_val("tab_user_uid")||a.c.set_val("tab_user_uid",Object(r.a)("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",12)())}},7:function(e,t,n){"use strict";var r=n(2),a=function(){Array.from(document.querySelectorAll("a.contact-address")).forEach((function(e){e.innerHTML=e.innerHTML||r.e,e.setAttribute("target","_blank"),e.setAttribute("href",function(e){var t="mailto:"+r.e,n=e.getAttribute("data-subject"),a=e.getAttribute("data-body");if(!n&&!a)return t;t+="?",n&&(t+="subject="+encodeURIComponent(n),a&&(t+="&"));a&&(t+="body="+encodeURIComponent(a));return t}(e))}))};var o=function(){document.documentElement.classList.remove("hideApp")};var i=n(32);function c(e,t,n,r,a,o,i){try{var c=e[o](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,a)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){c(o,r,a,i,u,"next",e)}function u(e){c(o,r,a,i,u,"throw",e)}i(void 0)}))}}var s=function(){l(),e=l,document.addEventListener("visibilitychange",(function(){"visible"===document.visibilityState&&e()}));var e};function l(){return f.apply(this,arguments)}function f(){return(f=u(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.wakeLock.request("screen");case 3:t=e.sent,e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:if(t){e.next=11;break}return e.abrupt("return");case 11:t.addEventListener("release",(function(){}));case 13:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}t.a=function(){a(),o();try{s()}catch(e){}Object(i.a)()}},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(182),a=n.n(r);function o(){var e=a.a.parse(window.navigator.userAgent),t=e.os.versionName||e.os.version,n=e.browser.name+" "+e.browser.version+", "+e.os.name;return t&&(n+=" "+t),n}}}]);
//# sourceMappingURL=about~~c330eded.hash_549375eaf05d71afa35e.js.map