(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["preferredPages-redeem"],{1992:function(t,e,a){var n=a("a852");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("4f06").default;r("198d12fd",n,!0,{sourceMap:!1,shadowMode:!1})},"1faf":function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("c7eb")),o=n(a("1da1"));a("a9e3");var i=n(a("9edb")),s={name:"tn-nav-bar",mixins:[i.default],props:{zIndex:{type:Number,default:0},height:{type:Number,default:0},unit:{type:String,default:"px"},isBack:{type:Boolean,default:!0},backIcon:{type:String,default:"left"},backTitle:{type:String,default:"返回"},alpha:{type:Boolean,default:!1},fixed:{type:Boolean,default:!0},bottomShadow:{type:Boolean,default:!0},customBack:{type:Boolean,default:!1},beforeBack:{type:Function,default:null}},computed:{navBarStyle:function(){var t={};return t.height=0===this.height?this.customBarHeight+this.unit:this.height+this.unit,this.fixed&&(t.position="fixed"),t.zIndex=this.elZIndex,t},barClass:function(){var t="";return this.backgroundColorClass&&(t+=" ".concat(this.backgroundColorClass)),this.fontColorClass&&(t+="".concat(this.fontColorClass)),this.fixed&&(t+=" tn-custom-nav-bar__bar--fixed"),this.alpha&&(t+=" tn-custom-nav-bar__bar--alpha"),this.bottomShadow&&(t+=" tn-custom-nav-bar__bar--bottom-shadow"),t},barStyle:function(){var t={};return t.height=0===this.height?this.customBarHeight+this.unit:this.height+this.unit,this.fixed&&(t.paddingTop=this.statusBarHeight+"px"),this.backgroundColorClass||(t.backgroundColor=""!==this.backgroundColor?this.backgroundColor:"#FFFFFF"),!this.fontColorClass&&this.fontColor&&(t.color=this.fontColor),t.zIndex=this.elZIndex,t},contentStyle:function(){var t={};if(t.top=this.fixed?this.statusBarHeight+"px":"0px",t.height=0===this.height?this.customBarHeight-this.statusBarHeight+this.unit:this.height+this.unit,t.lineHeight=t.height,this.isBack)if(this.customBack){var e=2*(this.customBackStyleInfo.width+this.customBackStyleInfo.left);t.width="calc(100% - ".concat(e,"px)")}else t.width="calc(100% - 340rpx)";else t.width="100%";return t},elZIndex:function(){return this.zIndex?this.zIndex:this.$t.zIndex.navbar}},data:function(){return{statusBarHeight:0,customBarHeight:0,customBackStyleInfo:{width:86,height:32,left:15}}},mounted:function(){this.updateNavBarInfo()},created:function(){},methods:{updateNavBarInfo:function(){var t=this;return(0,o.default)((0,r.default)().mark((function e(){var a,n,o;return(0,r.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.vuex_custom_bar_height,n=t.vuex_status_bar_height,a){e.next=15;break}return e.prev=3,e.next=6,t.$t.updateCustomBar();case 6:o=e.sent,a=o.customBarHeight,n=o.statusBarHeight,e.next=15;break;case 11:return e.prev=11,e.t0=e["catch"](3),setTimeout((function(){t.updateNavBarInfo()}),10),e.abrupt("return");case 15:t&&t.$t.vuex("vuex_status_bar_height",n),t&&t.$t.vuex("vuex_custom_bar_height",a),t.customBarHeight=a,t.statusBarHeight=n;case 19:case"end":return e.stop()}}),e,null,[[3,11]])})))()},handlerBack:function(){var t=this;return(0,o.default)((0,r.default)().mark((function e(){var a;return(0,r.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.beforeBack||"function"!==typeof t.beforeBack){e.next=10;break}if(a=t.beforeBack.bind(t.$t.$parent.call(t))(),!a||"function"!==typeof a.then){e.next=7;break}return e.next=5,a.then((function(e){t.navBack()})).catch((function(t){}));case 5:e.next=8;break;case 7:!0===a&&t.navBack();case 8:e.next=11;break;case 10:t.navBack();case 11:case"end":return e.stop()}}),e)})))()},navBack:function(){var t=getCurrentPages();if(t&&t.length>0){var e=t[0];1!=t.length||e.route&&"pages/index/index"==e.route?uni.navigateBack({delta:1}):uni.reLaunch({url:"/pages/index/index"})}else uni.reLaunch({url:"/pages/index/index"})}}};e.default=s},"256f":function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var n={tnNavBar:a("aa86").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"template-money tn-safe-area-inset-bottom"},[a("tn-nav-bar",{attrs:{fixed:!0,alpha:!0,customBack:!0}},[a("v-uni-view",{staticClass:"tn-custom-nav-bar__back",attrs:{slot:"back"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}},slot:"back"},[a("v-uni-text",{staticClass:"icon tn-icon-left"}),a("v-uni-text",{staticClass:"icon tn-icon-home-capsule-fill"})],1)],1),a("v-uni-view",{staticClass:"tn-flex tn-flex-wrap tn-padding-xs tn-margin-top-xl",style:{paddingTop:t.vuex_custom_bar_height+"px"}},[a("v-uni-view",{staticClass:" ",staticStyle:{width:"100%"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tn("/minePages/signed")}}},[a("v-uni-view",{staticClass:"image-pic tn-shadow-blur",staticStyle:{"background-image":"url('https://resource.tuniaokj.com/images/new/integral.png')"}},[a("v-uni-view",{staticClass:"image-capsule"})],1)],1)],1),a("v-uni-view",{staticClass:"tn-margin-top"},[a("v-uni-view",{staticClass:"nav_title--wrap"},[a("v-uni-view",{staticClass:"nav_title tn-cool-bg-color-15"},[a("v-uni-text",{staticClass:"tn-icon-gift tn-padding-right-sm"}),t._v("周 / 边 / 兑 / 换"),a("v-uni-text",{staticClass:"tn-icon-gift tn-padding-left-sm"})],1)],1)],1),a("v-uni-view",{staticClass:"tn-flex tn-flex-wrap tn-margin-sm"},[t._l(t.content,(function(e,n){return[a("v-uni-view",{key:n+"_0",staticStyle:{width:"50%"}},[a("v-uni-view",{staticClass:"tn-blogger-content__wrap",staticStyle:{"background-color":"rgba(255,255,255,0.6)"}},[a("v-uni-view",{staticClass:"image-pic",style:"background-image:url("+e.mainImage+")"},[a("v-uni-view",{staticClass:"image-year"})],1),a("v-uni-view",{staticClass:"tn-blogger-content__label tn-text-justify tn-padding-sm"},[a("v-uni-text",{staticClass:"tn-blogger-content__label__desc"},[t._v(t._s(e.desc))])],1),a("v-uni-view",{staticClass:"tn-flex tn-flex-row-between tn-flex-col-center tn-padding-left-sm tn-padding-right-sm tn-padding-bottom-sm"},[a("v-uni-view",{staticClass:"justify-content-item tn-text-center"},t._l(e.label,(function(e,n){return a("v-uni-view",{key:n,staticClass:"tn-blogger-content__label__item tn-float-left tn-margin-right tn-bg-gray--light tn-round tn-text-sm tn-text-bold"},[a("v-uni-text",{staticClass:"tn-icon-funds tn-padding-right-xs tn-color-indigo"}),t._v(t._s(e))],1)})),1)],1)],1)],1)]}))],2)],1)},o=[]},"5a6e":function(t,e,a){var n=a("f21e");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("4f06").default;r("3aca733a",n,!0,{sourceMap:!1,shadowMode:!1})},"5b3c":function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("88ff")),o={name:"TemplateRedeem",mixins:[r.default],data:function(){return{content:[{userAvatar:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",userName:"可我会像",date:"2021年12月20日",label:["99积分"],desc:"开源可商用组件",mainImage:"https://resource.tuniaokj.com/images/shop/prototype2.jpg",viewUser:{latestUserAvatar:[{src:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg"}],viewUserCount:129},collectionCount:999,commentCount:999,likeCount:999},{userAvatar:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",userName:"可我会像",date:"2021年12月20日",label:["66积分"],desc:"开源可商用组件",mainImage:"https://resource.tuniaokj.com/images/shop/prototype1.jpg",viewUser:{latestUserAvatar:[{src:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg"}],viewUserCount:129},collectionCount:265,commentCount:22,likeCount:62},{userAvatar:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",userName:"可我会像",date:"2021年12月20日",label:["1266积分"],desc:"开源可商用组件",mainImage:"https://resource.tuniaokj.com/images/shop/computer2.jpg",viewUser:{latestUserAvatar:[{src:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg"}],viewUserCount:129},collectionCount:265,commentCount:22,likeCount:62},{userAvatar:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",userName:"可我会像",date:"2021年12月20日",label:["9999积分"],desc:"开源可商用组件",mainImage:"https://resource.tuniaokj.com/images/shop/phonecase1.jpg",viewUser:{latestUserAvatar:[{src:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg"}],viewUserCount:129},collectionCount:265,commentCount:22,likeCount:62},{userAvatar:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",userName:"可我会像",date:"2021年12月20日",label:["6666积分"],desc:"开源可商用组件",mainImage:"https://resource.tuniaokj.com/images/shop/phonecase2.jpg",viewUser:{latestUserAvatar:[{src:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg"}],viewUserCount:129},collectionCount:265,commentCount:22,likeCount:62},{userAvatar:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",userName:"可我会像",date:"2021年12月20日",label:["888积分"],desc:"我们都是好孩子",mainImage:"https://resource.tuniaokj.com/images/shop/watch1.jpg",viewUser:{latestUserAvatar:[{src:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg"}],viewUserCount:129},collectionCount:265,commentCount:22,likeCount:62},{userAvatar:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",userName:"可我会像",date:"2021年12月20日",label:["299积分"],desc:"开源可商用组件",mainImage:"https://resource.tuniaokj.com/images/shop/sticker.jpg",viewUser:{latestUserAvatar:[{src:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg"}],viewUserCount:129},collectionCount:265,commentCount:22,likeCount:62},{userAvatar:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",userName:"可我会像",date:"2021年12月20日",label:["899积分"],desc:"开源可商用组件",mainImage:"https://resource.tuniaokj.com/images/shop/card.jpg",viewUser:{latestUserAvatar:[{src:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg"}],viewUserCount:129},collectionCount:265,commentCount:22,likeCount:62}]}},methods:{cardSwiper:function(t){this.cardCur=t.detail.current},tn:function(t){uni.navigateTo({url:t})}}};e.default=o},"7d88":function(t,e,a){"use strict";var n=a("5a6e"),r=a.n(n);r.a},"7ec2":function(t,e,a){a("7a82"),a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("b636"),a("944a"),a("0c47"),a("23dc"),a("3410"),a("d9e2"),a("d401"),a("14d9"),a("159b"),a("131a"),a("26e9"),a("fb6a");var n=a("7037")["default"];function r(){"use strict";
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t.exports=r=function(){return e},t.exports.__esModule=!0,t.exports["default"]=t.exports;var e={},a=Object.prototype,o=a.hasOwnProperty,i=Object.defineProperty||function(t,e,a){t[e]=a.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",u=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function d(t,e,a){return Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(z){d=function(t,e,a){return t[e]=a}}function g(t,e,a,n){var r=e&&e.prototype instanceof p?e:p,o=Object.create(r.prototype),s=new S(n||[]);return i(o,"_invoke",{value:j(t,a,s)}),o}function h(t,e,a){try{return{type:"normal",arg:t.call(e,a)}}catch(z){return{type:"throw",arg:z}}}e.wrap=g;var f={};function p(){}function v(){}function m(){}var b={};d(b,c,(function(){return this}));var _=Object.getPrototypeOf,k=_&&_(_(L([])));k&&k!==a&&o.call(k,c)&&(b=k);var w=m.prototype=p.prototype=Object.create(b);function x(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function y(t,e){var a;i(this,"_invoke",{value:function(r,i){function s(){return new e((function(a,s){(function a(r,i,s,c){var u=h(t[r],t,i);if("throw"!==u.type){var l=u.arg,d=l.value;return d&&"object"==n(d)&&o.call(d,"__await")?e.resolve(d.__await).then((function(t){a("next",t,s,c)}),(function(t){a("throw",t,s,c)})):e.resolve(d).then((function(t){l.value=t,s(l)}),(function(t){return a("throw",t,s,c)}))}c(u.arg)})(r,i,a,s)}))}return a=a?a.then(s,s):s()}})}function j(t,e,a){var n="suspendedStart";return function(r,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw o;return U()}for(a.method=r,a.arg=o;;){var i=a.delegate;if(i){var s=C(i,a);if(s){if(s===f)continue;return s}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var c=h(t,e,a);if("normal"===c.type){if(n=a.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(n="completed",a.method="throw",a.arg=c.arg)}}}function C(t,e){var a=e.method,n=t.iterator[a];if(void 0===n)return e.delegate=null,"throw"===a&&t.iterator["return"]&&(e.method="return",e.arg=void 0,C(t,e),"throw"===e.method)||"return"!==a&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+a+"' method")),f;var r=h(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,f;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function B(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(B,this),this.reset(!0)}function L(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,n=function e(){for(;++a<t.length;)if(o.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:U}}function U(){return{value:void 0,done:!0}}return v.prototype=m,i(w,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:v,configurable:!0}),v.displayName=d(m,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,d(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},x(y.prototype),d(y.prototype,u,(function(){return this})),e.AsyncIterator=y,e.async=function(t,a,n,r,o){void 0===o&&(o=Promise);var i=new y(g(t,a,n,r),o);return e.isGeneratorFunction(a)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(w),d(w,l,"Generator"),d(w,c,(function(){return this})),d(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),a=[];for(var n in e)a.push(n);return a.reverse(),function t(){for(;a.length;){var n=a.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=L,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(I),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(a,n){return i.type="throw",i.arg=t,e.next=a,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n],i=r.completion;if("root"===r.tryLoc)return a("end");if(r.tryLoc<=this.prev){var s=o.call(r,"catchLoc"),c=o.call(r,"finallyLoc");if(s&&c){if(this.prev<r.catchLoc)return a(r.catchLoc,!0);if(this.prev<r.finallyLoc)return a(r.finallyLoc)}else if(s){if(this.prev<r.catchLoc)return a(r.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return a(r.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var r=n;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var i=r?r.completion:{};return i.type=t,i.arg=e,r?(this.method="next",this.next=r.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),I(a),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===t){var n=a.completion;if("throw"===n.type){var r=n.arg;I(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,a){return this.delegate={iterator:L(t),resultName:e,nextLoc:a},"next"===this.method&&(this.arg=void 0),f}},e}t.exports=r,t.exports.__esModule=!0,t.exports["default"]=t.exports},"88ff":function(t,e,a){var n=a("7ec2").default,r=a("c973").default;t.exports={data:function(){return{}},onLoad:function(){this.updateCustomBarInfo()},methods:{goBack:function(){var t=getCurrentPages();if(t&&t.length>0){var e=t[0];1!=t.length||e.route&&"pages/index"==e.route?uni.navigateBack({delta:1}):uni.reLaunch({url:"/pages/index"})}else uni.reLaunch({url:"/pages/index"})},updateCustomBarInfo:function(){var t=this;return r(n().mark((function e(){var a,r,o;return n().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.vuex_custom_bar_height,r=t.vuex_status_bar_height,a){e.next=15;break}return e.prev=3,e.next=6,t.$t.updateCustomBar();case 6:o=e.sent,a=o.customBarHeight,r=o.statusBarHeight,e.next=15;break;case 11:return e.prev=11,e.t0=e["catch"](3),setTimeout((function(){t.updateCustomBarInfo()}),10),e.abrupt("return");case 15:t.$t.vuex("vuex_status_bar_height",r),t.$t.vuex("vuex_custom_bar_height",a);case 17:case"end":return e.stop()}}),e,null,[[3,11]])})))()}}}},"9edb":function(t,e,a){a("a9e3"),t.exports={data:function(){},props:{backgroundColor:{type:String,default:""},fontColor:{type:String,default:""},fontSize:{type:Number,default:0},fontUnit:{type:String,default:"rpx"}},computed:{backgroundColorStyle:function(){return this.$t.color.getBackgroundColorStyle(this.backgroundColor)},backgroundColorClass:function(){return this.$t.color.getBackgroundColorInternalClass(this.backgroundColor)},fontColorStyle:function(){return this.$t.color.getFontColorStyle(this.fontColor)},fontColorClass:function(){return this.$t.color.getFontColorInternalClass(this.fontColor)},fontSizeStyle:function(){return this.$t.string.getLengthUnitValue(this.fontSize,this.fontUnit)}},methods:{}}},a852:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.tn-custom-nav-bar[data-v-1863a3a8]{display:block;position:relative}.tn-custom-nav-bar__bar[data-v-1863a3a8]{display:flex;position:relative;align-items:center;min-height:%?100?%;justify-content:space-between;min-height:0;box-shadow:%?0?% %?0?% %?0?%;z-index:9999}.tn-custom-nav-bar__bar--fixed[data-v-1863a3a8]{position:fixed;width:100%;top:0}.tn-custom-nav-bar__bar--alpha[data-v-1863a3a8]{background:transparent!important;box-shadow:none!important}.tn-custom-nav-bar__bar--bottom-shadow[data-v-1863a3a8]{box-shadow:%?0?% %?0?% %?80?% %?0?% rgba(0,0,0,.05)}.tn-custom-nav-bar__bar__action[data-v-1863a3a8]{display:flex;align-items:center;height:100%;justify-content:center;max-width:100%}.tn-custom-nav-bar__bar__action--nav-back[data-v-1863a3a8]{\n  /* position: absolute; */\n  /* top: 50%; */\n  /* left: 20rpx; */\n  /* margin-top: -15rpx; */padding:%?20?%;font-size:%?38?%;line-height:100%}.tn-custom-nav-bar__bar__action--nav-back-text[data-v-1863a3a8]{padding:%?20?% %?20?% %?20?% %?0?%}.tn-custom-nav-bar__bar__content[data-v-1863a3a8]{position:absolute;text-align:center;left:0;right:0;bottom:0;margin:auto;font-size:%?32?%;cursor:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}',""]),t.exports=e},a884:function(t,e,a){"use strict";var n=a("1992"),r=a.n(n);r.a},aa86:function(t,e,a){"use strict";a.r(e);var n=a("ea6c"),r=a("b1ec");for(var o in r)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(o);a("a884");var i=a("f0c5"),s=Object(i["a"])(r["default"],n["b"],n["c"],!1,null,"1863a3a8",null,!1,n["a"],void 0);e["default"]=s.exports},b1ec:function(t,e,a){"use strict";a.r(e);var n=a("1faf"),r=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=r.a},c68e:function(t,e,a){"use strict";a.r(e);var n=a("256f"),r=a("d0c2");for(var o in r)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(o);a("7d88");var i=a("f0c5"),s=Object(i["a"])(r["default"],n["b"],n["c"],!1,null,"5d382348",null,!1,n["a"],void 0);e["default"]=s.exports},c973:function(t,e,a){function n(t,e,a,n,r,o,i){try{var s=t[o](i),c=s.value}catch(u){return void a(u)}s.done?e(c):Promise.resolve(c).then(n,r)}a("d3b7"),t.exports=function(t){return function(){var e=this,a=arguments;return new Promise((function(r,o){var i=t.apply(e,a);function s(t){n(i,r,o,s,c,"next",t)}function c(t){n(i,r,o,s,c,"throw",t)}s(void 0)}))}},t.exports.__esModule=!0,t.exports["default"]=t.exports},d0c2:function(t,e,a){"use strict";a.r(e);var n=a("5b3c"),r=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=r.a},ea6c:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"tn-custom-nav-bar-class tn-custom-nav-bar",style:[t.navBarStyle]},[a("v-uni-view",{staticClass:"tn-custom-nav-bar__bar",class:[t.barClass],style:[t.barStyle]},[t.isBack?a("v-uni-view",[t.customBack?a("v-uni-view",[a("v-uni-view",{style:{width:t.customBackStyleInfo.width+"px",height:t.customBackStyleInfo.height+"px",marginLeft:t.customBackStyleInfo.left+"px"}},[t._t("back")],2)],1):a("v-uni-view",{staticClass:"tn-custom-nav-bar__bar__action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlerBack.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"tn-custom-nav-bar__bar__action--nav-back",class:["tn-icon-"+t.backIcon]}),t.backTitle?a("v-uni-text",{staticClass:"tn-custom-nav-bar__bar__action--nav-back-text"},[t._v(t._s(t.backTitle))]):t._e()],1)],1):t._e(),a("v-uni-view",{staticClass:"tn-custom-nav-bar__bar__content",style:[t.contentStyle]},[t._t("default")],2),a("v-uni-view",[t._t("right")],2)],1)],1)},r=[]},f21e:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 胶囊*/.tn-custom-nav-bar__back[data-v-5d382348]{width:100%;height:100%;position:relative;display:flex;justify-content:space-evenly;align-items:center;box-sizing:border-box;background-color:rgba(0,0,0,.15);border-radius:%?1000?%;border:%?1?% solid hsla(0,0%,100%,.5);color:#fff;font-size:18px}.tn-custom-nav-bar__back .icon[data-v-5d382348]{display:block;flex:1;margin:auto;text-align:center}.tn-custom-nav-bar__back[data-v-5d382348]:before{content:" ";width:%?1?%;height:110%;position:absolute;top:22.5%;left:0;right:0;margin:auto;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;pointer-events:none;box-sizing:border-box;opacity:.7;background-color:#fff}\n/* 顶部背景图 start */.top-backgroup[data-v-5d382348]{position:fixed;height:100vh;z-index:-1}.top-backgroup .backgroud-image[data-v-5d382348]{width:100%;height:100vh}\n/* 标题 start */.nav_title[data-v-5d382348]{-webkit-background-clip:text;color:transparent}.nav_title--wrap[data-v-5d382348]{position:relative;display:flex;height:%?120?%;font-size:%?46?%;align-items:center;justify-content:center;font-weight:700;background-image:url(https://resource.tuniaokj.com/images/title_bg/title44.png);background-size:cover}\n/* 标题 end */\n/* 文章内容 start*/.tn-blogger-content__wrap[data-v-5d382348]{box-shadow:%?0?% %?0?% %?50?% %?0?% rgba(0,0,0,.12);border-radius:%?20?%;margin:%?15?%}.tn-blogger-content__info__btn[data-v-5d382348]{margin-right:%?-12?%;opacity:.5}.tn-blogger-content__label__item[data-v-5d382348]{line-height:%?45?%;padding:0 %?20?%;margin:%?5?% %?18?% 0 0}.tn-blogger-content__label__desc[data-v-5d382348]{line-height:%?35?%}.tn-blogger-content__main-image[data-v-5d382348]{border-radius:%?16?% %?16?% 0 0}.tn-blogger-content__main-image--1[data-v-5d382348]{max-width:%?690?%;min-width:%?690?%;max-height:%?400?%;min-height:%?400?%}.tn-blogger-content__main-image--2[data-v-5d382348]{max-width:%?260?%;max-height:%?260?%}.tn-blogger-content__main-image--3[data-v-5d382348]{height:%?212?%;width:100%}.tn-blogger-content__count-icon[data-v-5d382348]{font-size:%?30?%;padding-right:%?5?%}.image-year[data-v-5d382348]{padding:%?150?% %?0?%;font-size:%?16?%;font-weight:300;position:relative}.image-capsule[data-v-5d382348]{padding:%?80?% %?0?%;font-size:%?40?%;font-weight:300;position:relative}.image-pic[data-v-5d382348]{background-size:cover;background-repeat:no-repeat;background-position:top;border-radius:%?20?% %?20?% 0 0}\n/* 文章内容 end*/\n/* 底部tabbar start*/.footerfixed[data-v-5d382348]{position:fixed;width:100%;bottom:0;z-index:999;background-color:#fff;box-shadow:%?0?% %?0?% %?30?% %?0?% rgba(0,0,0,.07)}.tabbar[data-v-5d382348]{display:flex;align-items:center;min-height:%?110?%;justify-content:space-between;padding:0;height:calc(%?110?% + env(safe-area-inset-bottom) / 2);padding-bottom:calc(env(safe-area-inset-bottom) / 2)}.tabbar .action[data-v-5d382348]{font-size:%?22?%;position:relative;flex:1;text-align:center;padding:0;display:block;height:auto;line-height:1;margin:0;overflow:initial}.bar-center[data-v-5d382348]{-webkit-animation:suspension-data-v-5d382348 3s ease-in-out infinite;animation:suspension-data-v-5d382348 3s ease-in-out infinite}@-webkit-keyframes suspension-data-v-5d382348{0%, 100%{-webkit-transform:translateY(0);transform:translateY(0)}50%{-webkit-transform:translateY(-.8rem);transform:translateY(-.8rem)}}.tabbar .action .bar-icon[data-v-5d382348]{width:%?100?%;position:relative;display:block;height:auto;margin:0 auto %?10?%;text-align:center;font-size:%?42?%}.tabbar .action .bar-icon uni-image[data-v-5d382348]{width:%?50?%;height:%?50?%;display:inline-block}.tabbar .action .bar-circle[data-v-5d382348]{position:relative;display:block;margin:%?0?% auto %?0?%;text-align:center;font-size:%?52?%;line-height:%?90?%;width:%?130?%!important;height:%?130?%!important;overflow:hidden}.tabbar .action .bar-circle uni-image[data-v-5d382348]{width:%?130?%;height:%?130?%;display:inline-block;margin:%?0?% auto %?0?%}\n/* 流星+悬浮 */.nav-index-button[data-v-5d382348]{-webkit-animation:suspension-data-v-5d382348 3s ease-in-out infinite;animation:suspension-data-v-5d382348 3s ease-in-out infinite;z-index:999999}.nav-index-button__content[data-v-5d382348]{position:absolute;width:%?130?%;height:%?130?%;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.nav-index-button__content--icon[data-v-5d382348]{width:%?130?%;height:%?130?%;font-size:%?60?%;border-radius:50%;margin-bottom:%?18?%;position:relative;z-index:1;-webkit-transform:scale(.85);transform:scale(.85)}.nav-index-button__content--icon[data-v-5d382348]::after{content:" ";position:absolute;z-index:-1;width:100%;height:100%;left:0;bottom:0;border-radius:inherit;opacity:1;-webkit-transform:scale(1);transform:scale(1);background-size:100% 100%;background-image:url(https://resource.tuniaokj.com/images/cool_bg_image/icon_bg6.png)}.nav-index-button__meteor[data-v-5d382348]{position:absolute;top:50%;left:50%;width:%?100?%;height:%?100?%;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform:translate(-50%,-50%) rotateY(75deg) rotate(10deg);transform:translate(-50%,-50%) rotateY(75deg) rotate(10deg)}.nav-index-button__meteor__wrapper[data-v-5d382348]{width:%?100?%;height:%?100?%;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-animation:spin-data-v-5d382348 20s linear infinite;animation:spin-data-v-5d382348 20s linear infinite}.nav-index-button__meteor__item[data-v-5d382348]{position:absolute;width:%?100?%;height:%?100?%;border-radius:%?1000?%;left:0;top:0}.nav-index-button__meteor__item--pic[data-v-5d382348]{display:block;width:100%;height:100%;background:url(https://resource.tuniaokj.com/images/cool_bg_image/arc2.png) no-repeat 50%;background-size:100% 100%;-webkit-animation:arc-data-v-5d382348 4s linear infinite;animation:arc-data-v-5d382348 4s linear infinite}@keyframes suspension-data-v-5d382348{0%, 100%{-webkit-transform:translateY(0);transform:translateY(0)}50%{-webkit-transform:translateY(-.6rem);transform:translateY(-.6rem)}}@-webkit-keyframes spin-data-v-5d382348{0%{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}100%{-webkit-transform:rotateX(-1turn);transform:rotateX(-1turn)}}@keyframes spin-data-v-5d382348{0%{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}100%{-webkit-transform:rotateX(-1turn);transform:rotateX(-1turn)}}@-webkit-keyframes arc-data-v-5d382348{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes arc-data-v-5d382348{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""]),t.exports=e}}]);