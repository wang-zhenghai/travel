(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["homePages-profession"],{1992:function(t,n,e){var i=e("a852");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("198d12fd",i,!0,{sourceMap:!1,shadowMode:!1})},"1faf":function(t,n,e){"use strict";e("7a82");var i=e("ee27").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("f07e")),r=i(e("c964"));e("a9e3");var o=i(e("9edb")),s={name:"tn-nav-bar",mixins:[o.default],props:{zIndex:{type:Number,default:0},height:{type:Number,default:0},unit:{type:String,default:"px"},isBack:{type:Boolean,default:!0},backIcon:{type:String,default:"left"},backTitle:{type:String,default:"返回"},alpha:{type:Boolean,default:!1},fixed:{type:Boolean,default:!0},bottomShadow:{type:Boolean,default:!0},customBack:{type:Boolean,default:!1},beforeBack:{type:Function,default:null}},computed:{navBarStyle:function(){var t={};return t.height=0===this.height?this.customBarHeight+this.unit:this.height+this.unit,this.fixed&&(t.position="fixed"),t.zIndex=this.elZIndex,t},barClass:function(){var t="";return this.backgroundColorClass&&(t+=" ".concat(this.backgroundColorClass)),this.fontColorClass&&(t+="".concat(this.fontColorClass)),this.fixed&&(t+=" tn-custom-nav-bar__bar--fixed"),this.alpha&&(t+=" tn-custom-nav-bar__bar--alpha"),this.bottomShadow&&(t+=" tn-custom-nav-bar__bar--bottom-shadow"),t},barStyle:function(){var t={};return t.height=0===this.height?this.customBarHeight+this.unit:this.height+this.unit,this.fixed&&(t.paddingTop=this.statusBarHeight+"px"),this.backgroundColorClass||(t.backgroundColor=""!==this.backgroundColor?this.backgroundColor:"#FFFFFF"),!this.fontColorClass&&this.fontColor&&(t.color=this.fontColor),t.zIndex=this.elZIndex,t},contentStyle:function(){var t={};if(t.top=this.fixed?this.statusBarHeight+"px":"0px",t.height=0===this.height?this.customBarHeight-this.statusBarHeight+this.unit:this.height+this.unit,t.lineHeight=t.height,this.isBack)if(this.customBack){var n=2*(this.customBackStyleInfo.width+this.customBackStyleInfo.left);t.width="calc(100% - ".concat(n,"px)")}else t.width="calc(100% - 340rpx)";else t.width="100%";return t},elZIndex:function(){return this.zIndex?this.zIndex:this.$t.zIndex.navbar}},data:function(){return{statusBarHeight:0,customBarHeight:0,customBackStyleInfo:{width:86,height:32,left:15}}},mounted:function(){this.updateNavBarInfo()},created:function(){},methods:{updateNavBarInfo:function(){var t=this;return(0,r.default)((0,a.default)().mark((function n(){var e,i,r;return(0,a.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e=t.vuex_custom_bar_height,i=t.vuex_status_bar_height,e){n.next=15;break}return n.prev=3,n.next=6,t.$t.updateCustomBar();case 6:r=n.sent,e=r.customBarHeight,i=r.statusBarHeight,n.next=15;break;case 11:return n.prev=11,n.t0=n["catch"](3),setTimeout((function(){t.updateNavBarInfo()}),10),n.abrupt("return");case 15:t&&t.$t.vuex("vuex_status_bar_height",i),t&&t.$t.vuex("vuex_custom_bar_height",e),t.customBarHeight=e,t.statusBarHeight=i;case 19:case"end":return n.stop()}}),n,null,[[3,11]])})))()},handlerBack:function(){var t=this;return(0,r.default)((0,a.default)().mark((function n(){var e;return(0,a.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!t.beforeBack||"function"!==typeof t.beforeBack){n.next=10;break}if(e=t.beforeBack.bind(t.$t.$parent.call(t))(),!e||"function"!==typeof e.then){n.next=7;break}return n.next=5,e.then((function(n){t.navBack()})).catch((function(t){}));case 5:n.next=8;break;case 7:!0===e&&t.navBack();case 8:n.next=11;break;case 10:t.navBack();case 11:case"end":return n.stop()}}),n)})))()},navBack:function(){var t=getCurrentPages();if(t&&t.length>0){var n=t[0];1!=t.length||n.route&&"pages/index/index"==n.route?uni.navigateBack({delta:1}):uni.reLaunch({url:"/pages/index/index"})}else uni.reLaunch({url:"/pages/index/index"})}}};n.default=s},"5cd5":function(t,n,e){"use strict";e.r(n);var i=e("c7f3"),a=e.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=a.a},"5f83":function(t,n,e){var i=e("bd2d");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("3d7cce05",i,!0,{sourceMap:!1,shadowMode:!1})},"88ff":function(t,n,e){var i=e("9ffb").default,a=e("9705").default;t.exports={data:function(){return{}},onLoad:function(){this.updateCustomBarInfo()},methods:{goBack:function(){var t=getCurrentPages();if(t&&t.length>0){var n=t[0];1!=t.length||n.route&&"pages/index"==n.route?uni.navigateBack({delta:1}):uni.reLaunch({url:"/pages/index"})}else uni.reLaunch({url:"/pages/index"})},updateCustomBarInfo:function(){var t=this;return a(i().mark((function n(){var e,a,r;return i().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e=t.vuex_custom_bar_height,a=t.vuex_status_bar_height,e){n.next=15;break}return n.prev=3,n.next=6,t.$t.updateCustomBar();case 6:r=n.sent,e=r.customBarHeight,a=r.statusBarHeight,n.next=15;break;case 11:return n.prev=11,n.t0=n["catch"](3),setTimeout((function(){t.updateCustomBarInfo()}),10),n.abrupt("return");case 15:t.$t.vuex("vuex_status_bar_height",a),t.$t.vuex("vuex_custom_bar_height",e);case 17:case"end":return n.stop()}}),n,null,[[3,11]])})))()}}}},9705:function(t,n,e){function i(t,n,e,i,a,r,o){try{var s=t[r](o),c=s.value}catch(u){return void e(u)}s.done?n(c):Promise.resolve(c).then(i,a)}e("d3b7"),t.exports=function(t){return function(){var n=this,e=arguments;return new Promise((function(a,r){var o=t.apply(n,e);function s(t){i(o,a,r,s,c,"next",t)}function c(t){i(o,a,r,s,c,"throw",t)}s(void 0)}))}},t.exports.__esModule=!0,t.exports["default"]=t.exports},"9edb":function(t,n,e){e("a9e3"),t.exports={data:function(){},props:{backgroundColor:{type:String,default:""},fontColor:{type:String,default:""},fontSize:{type:Number,default:0},fontUnit:{type:String,default:"rpx"}},computed:{backgroundColorStyle:function(){return this.$t.color.getBackgroundColorStyle(this.backgroundColor)},backgroundColorClass:function(){return this.$t.color.getBackgroundColorInternalClass(this.backgroundColor)},fontColorStyle:function(){return this.$t.color.getFontColorStyle(this.fontColor)},fontColorClass:function(){return this.$t.color.getFontColorInternalClass(this.fontColor)},fontSizeStyle:function(){return this.$t.string.getLengthUnitValue(this.fontSize,this.fontUnit)}},methods:{}}},"9ffb":function(t,n,e){e("7a82"),e("a4d3"),e("e01a"),e("d3b7"),e("d28b"),e("3ca3"),e("ddb0"),e("b636"),e("944a"),e("0c47"),e("23dc"),e("3410"),e("d9e2"),e("d401"),e("14d9"),e("159b"),e("131a"),e("26e9"),e("fb6a");var i=e("62f5")["default"];function a(){"use strict";
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t.exports=a=function(){return n},t.exports.__esModule=!0,t.exports["default"]=t.exports;var n={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,n,e){t[n]=e.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",u=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function d(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{d({},"")}catch(O){d=function(t,n,e){return t[n]=e}}function f(t,n,e,i){var a=n&&n.prototype instanceof g?n:g,r=Object.create(a.prototype),s=new I(i||[]);return o(r,"_invoke",{value:C(t,e,s)}),r}function h(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(O){return{type:"throw",arg:O}}}n.wrap=f;var v={};function g(){}function p(){}function b(){}var x={};d(x,c,(function(){return this}));var m=Object.getPrototypeOf,w=m&&m(m(E([])));w&&w!==e&&r.call(w,c)&&(x=w);var y=b.prototype=g.prototype=Object.create(x);function _(t){["next","throw","return"].forEach((function(n){d(t,n,(function(t){return this._invoke(n,t)}))}))}function k(t,n){var e;o(this,"_invoke",{value:function(a,o){function s(){return new n((function(e,s){(function e(a,o,s,c){var u=h(t[a],t,o);if("throw"!==u.type){var l=u.arg,d=l.value;return d&&"object"==i(d)&&r.call(d,"__await")?n.resolve(d.__await).then((function(t){e("next",t,s,c)}),(function(t){e("throw",t,s,c)})):n.resolve(d).then((function(t){l.value=t,s(l)}),(function(t){return e("throw",t,s,c)}))}c(u.arg)})(a,o,e,s)}))}return e=e?e.then(s,s):s()}})}function C(t,n,e){var i="suspendedStart";return function(a,r){if("executing"===i)throw new Error("Generator is already running");if("completed"===i){if("throw"===a)throw r;return j()}for(e.method=a,e.arg=r;;){var o=e.delegate;if(o){var s=B(o,e);if(s){if(s===v)continue;return s}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===i)throw i="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);i="executing";var c=h(t,n,e);if("normal"===c.type){if(i=e.done?"completed":"suspendedYield",c.arg===v)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(i="completed",e.method="throw",e.arg=c.arg)}}}function B(t,n){var e=n.method,i=t.iterator[e];if(void 0===i)return n.delegate=null,"throw"===e&&t.iterator["return"]&&(n.method="return",n.arg=void 0,B(t,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),v;var a=h(i,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var r=a.arg;return r?r.done?(n[t.resultName]=r.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,v):r:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function S(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function L(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function E(t){if(t){var n=t[c];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,i=function n(){for(;++e<t.length;)if(r.call(t,e))return n.value=t[e],n.done=!1,n;return n.value=void 0,n.done=!0,n};return i.next=i}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=b,o(y,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:p,configurable:!0}),p.displayName=d(b,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===p||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,d(t,l,"GeneratorFunction")),t.prototype=Object.create(y),t},n.awrap=function(t){return{__await:t}},_(k.prototype),d(k.prototype,u,(function(){return this})),n.AsyncIterator=k,n.async=function(t,e,i,a,r){void 0===r&&(r=Promise);var o=new k(f(t,e,i,a),r);return n.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},_(y),d(y,l,"Generator"),d(y,c,(function(){return this})),d(y,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),e=[];for(var i in n)e.push(i);return e.reverse(),function t(){for(;e.length;){var i=e.pop();if(i in n)return t.value=i,t.done=!1,t}return t.done=!0,t}},n.values=E,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function e(e,i){return o.type="throw",o.arg=t,n.next=e,i&&(n.method="next",n.arg=void 0),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],o=a.completion;if("root"===a.tryLoc)return e("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return e(a.catchLoc,!0);if(this.prev<a.finallyLoc)return e(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return e(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return e(a.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=n&&n<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=n,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),v},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),L(e),v}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var i=e.completion;if("throw"===i.type){var a=i.arg;L(e)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:E(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),v}},n}t.exports=a,t.exports.__esModule=!0,t.exports["default"]=t.exports},a852:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.tn-custom-nav-bar[data-v-1863a3a8]{display:block;position:relative}.tn-custom-nav-bar__bar[data-v-1863a3a8]{display:flex;position:relative;align-items:center;min-height:%?100?%;justify-content:space-between;min-height:0;box-shadow:%?0?% %?0?% %?0?%;z-index:9999}.tn-custom-nav-bar__bar--fixed[data-v-1863a3a8]{position:fixed;width:100%;top:0}.tn-custom-nav-bar__bar--alpha[data-v-1863a3a8]{background:transparent!important;box-shadow:none!important}.tn-custom-nav-bar__bar--bottom-shadow[data-v-1863a3a8]{box-shadow:%?0?% %?0?% %?80?% %?0?% rgba(0,0,0,.05)}.tn-custom-nav-bar__bar__action[data-v-1863a3a8]{display:flex;align-items:center;height:100%;justify-content:center;max-width:100%}.tn-custom-nav-bar__bar__action--nav-back[data-v-1863a3a8]{\n  /* position: absolute; */\n  /* top: 50%; */\n  /* left: 20rpx; */\n  /* margin-top: -15rpx; */padding:%?20?%;font-size:%?38?%;line-height:100%}.tn-custom-nav-bar__bar__action--nav-back-text[data-v-1863a3a8]{padding:%?20?% %?20?% %?20?% %?0?%}.tn-custom-nav-bar__bar__content[data-v-1863a3a8]{position:absolute;text-align:center;left:0;right:0;bottom:0;margin:auto;font-size:%?32?%;cursor:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}',""]),t.exports=n},a884:function(t,n,e){"use strict";var i=e("1992"),a=e.n(i);a.a},aa86:function(t,n,e){"use strict";e.r(n);var i=e("ea6c"),a=e("b1ec");for(var r in a)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(r);e("a884");var o=e("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"1863a3a8",null,!1,i["a"],void 0);n["default"]=s.exports},b1ec:function(t,n,e){"use strict";e.r(n);var i=e("1faf"),a=e.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=a.a},bd2d:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 胶囊*/.tn-custom-nav-bar__back[data-v-4ca03910]{width:100%;height:100%;position:relative;display:flex;justify-content:space-evenly;align-items:center;box-sizing:border-box;background-color:rgba(0,0,0,.15);border-radius:%?1000?%;border:%?1?% solid hsla(0,0%,100%,.5);color:#fff;font-size:18px}.tn-custom-nav-bar__back .icon[data-v-4ca03910]{display:block;flex:1;margin:auto;text-align:center}.tn-custom-nav-bar__back[data-v-4ca03910]:before{content:" ";width:%?1?%;height:110%;position:absolute;top:22.5%;left:0;right:0;margin:auto;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;pointer-events:none;box-sizing:border-box;opacity:.7;background-color:#fff}\n/* 简历内容 */.king-list[data-v-4ca03910]{display:block;background-color:#fff}.king-list .king-icon[data-v-4ca03910]{width:100%;text-align:left;padding:%?20?% 0 %?20?% %?37?%;font-size:%?26?%;color:#888;display:block}.king-list > .king-item[data-v-4ca03910]{padding:%?30?% %?30?% %?30?% %?120?%;position:relative;display:block;z-index:0}.king-list > .king-item[data-v-4ca03910]::after{content:"";display:block;position:absolute;width:%?1?%;background-color:#e6e6e6;left:%?60?%;height:100%;top:0;z-index:8}.king-list > .king-item[data-v-4ca03910]::before{display:block;position:absolute;top:%?36?%;z-index:9;background-color:#fff;width:%?50?%;height:%?50?%;text-align:center;border:none;line-height:%?50?%;left:%?36?%}\n/* 名片微调 */.img-solid[data-v-4ca03910]{border:%?2?% solid #eee}.share-img[data-v-4ca03910]{position:fixed;\n  /* padding: 10rpx; */width:%?100?%;height:%?100?%;\n  /* top: 680rpx; */bottom:%?200?%;right:%?20?%;z-index:1024;opacity:.8;box-shadow:%?0?% %?8?% %?30?% %?0?% rgba(0,0,0,.3);border:none;border:%?6?% solid hsla(0,0%,100%,0)}.resume[data-v-4ca03910]{display:flex;justify-content:space-between;padding-top:%?10?%;border-radius:%?6?%;color:#666;line-height:1.6}.resume + .resume[data-v-4ca03910]{margin-top:%?20?%}.resume2[data-v-4ca03910]{padding-top:%?10?%;border-radius:%?6?%;display:block;color:#666;line-height:1.6;text-align:justify}\n/* 间隔线 start*/.tn-strip-bottom[data-v-4ca03910]{width:100%;border-bottom:%?20?% solid hsla(0,0%,94.5%,.8)}\n/* 间隔线 end*/.bg-img-cont[data-v-4ca03910]{background-size:cover;background-position:50%;background-repeat:no-repeat;height:%?350?%;margin:%?20?% 0;border-radius:%?8?%}\n/* 标签内容 start*/.tn-tag-content__item[data-v-4ca03910]{display:inline-block;line-height:%?45?%;padding:%?10?% %?30?%;margin:%?0?% %?20?% %?25?% %?0?%}.tn-tag-content__item--prefix[data-v-4ca03910]{padding-right:%?10?%}\n/* 标签内容 end*/.see[data-v-4ca03910]{display:flex;justify-content:space-between;padding-top:%?10?%;border-radius:%?6?%;color:#666;line-height:1.6}',""]),t.exports=n},be4a:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return i}));var i={tnNavBar:e("aa86").default},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"template-business tn-safe-area-inset-bottom"},[e("tn-nav-bar",{attrs:{fixed:!0,alpha:!0,customBack:!0}},[e("v-uni-view",{staticClass:"tn-custom-nav-bar__back",attrs:{slot:"back"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goBack.apply(void 0,arguments)}},slot:"back"},[e("v-uni-text",{staticClass:"icon tn-icon-left"}),e("v-uni-text",{staticClass:"icon tn-icon-home-capsule-fill"})],1)],1),e("v-uni-view",[e("v-uni-view",{staticClass:"king-list",style:{paddingTop:t.vuex_custom_bar_height+"px"}},[e("v-uni-view",{staticClass:"king-icon "},[e("v-uni-text",{staticClass:"tn-icon-clip tn-color-white tn-text-lg tn-bg-indigo tn-round tn-padding-xs"}),e("v-uni-text",{staticClass:"tn-text-xl tn-margin-left"},[t._v("前端开发")])],1),e("v-uni-view",{staticClass:"king-item tn-color-indigo tn-icon-science"},[e("v-uni-view",{staticClass:"resume2 tn-main-gradient-blue--light tn-shadow-blur",staticStyle:{padding:"20rpx 20rpx"}},[e("v-uni-text",{staticClass:"tn-margin-top-sm"},[t._v("基因图鸟UI进行开发，适配APP、微信小程序、H5的Uniapp应用")])],1)],1),e("v-uni-view",{staticClass:"king-icon"},[e("v-uni-text",{staticClass:"tn-icon-clip tn-color-white tn-text-lg tn-bg-indigo tn-round tn-padding-xs"}),e("v-uni-text",{staticClass:"tn-text-xl tn-margin-left"},[t._v("写在前面")])],1),e("v-uni-view",{staticClass:"king-item tn-color-indigo tn-icon-science"},[e("v-uni-view",{staticClass:"resume2 tn-main-gradient-blue--light tn-shadow-blur",staticStyle:{padding:"20rpx 20rpx"}},[e("v-uni-text",{staticClass:"tn-margin-top-sm"},[t._v("初步了解，主要是看能不能聊得来，聊不来给高价也不接，毕竟追求的是合作愉快以及长期合作")])],1)],1),e("v-uni-view",{staticClass:"king-item tn-color-indigo tn-icon-science"},[e("v-uni-view",{staticClass:"resume2 tn-main-gradient-blue--light tn-shadow-blur",staticStyle:{padding:"20rpx 20rpx"}},[e("v-uni-text",{staticClass:"tn-margin-top-sm"},[t._v("试稿？白嫖？请自重")])],1)],1),e("v-uni-view",{staticClass:"king-item tn-color-indigo tn-icon-science"},[e("v-uni-view",{staticClass:"resume2 tn-main-gradient-blue--light tn-shadow-blur",staticStyle:{padding:"20rpx 20rpx"}},[e("v-uni-text",{staticClass:"tn-margin-top-sm"},[t._v("如果当月业务已满，可以群里找群友们合作")])],1)],1),e("v-uni-view",{staticClass:"king-icon"},[e("v-uni-text",{staticClass:"tn-icon-clip tn-color-white tn-text-lg tn-bg-indigo tn-round tn-padding-xs"}),e("v-uni-text",{staticClass:"tn-text-xl tn-margin-left"},[t._v("初步沟通")])],1),e("v-uni-view",{staticClass:"king-item tn-color-indigo tn-icon-science"},[e("v-uni-view",{staticClass:"resume2 tn-main-gradient-blue--light tn-shadow-blur",staticStyle:{padding:"20rpx 20rpx"}},[e("v-uni-text",{staticClass:"tn-margin-top-sm"},[t._v("是否有需求原型？如果没有原型或参考，是无法写前端的")])],1)],1),e("v-uni-view",{staticClass:"king-icon"},[e("v-uni-text",{staticClass:"tn-icon-clip tn-color-white tn-text-lg tn-bg-indigo tn-round tn-padding-xs"}),e("v-uni-text",{staticClass:"tn-text-xl tn-margin-left"},[t._v("评估报价")])],1),e("v-uni-view",{staticClass:"king-item tn-color-indigo tn-icon-science"},[e("v-uni-view",{staticClass:"resume2 tn-main-gradient-blue--light tn-shadow-blur",staticStyle:{padding:"20rpx 20rpx"}},[e("v-uni-text",{staticClass:"tn-margin-top-sm"},[t._v("简单报价，大概一个页面300+，简单的页面可以送，交互复杂度较高的需沟通确认")])],1)],1),e("v-uni-view",{staticClass:"king-item tn-color-indigo tn-icon-science"},[e("v-uni-view",{staticClass:"resume2 tn-main-gradient-blue--light tn-shadow-blur",staticStyle:{padding:"20rpx 20rpx"}},[e("v-uni-text",{staticClass:"tn-margin-top-sm"},[t._v("时间开发周期")])],1)],1),e("v-uni-view",{staticClass:"king-icon"},[e("v-uni-text",{staticClass:"tn-icon-clip tn-color-white tn-text-lg tn-bg-indigo tn-round tn-padding-xs"}),e("v-uni-text",{staticClass:"tn-text-xl tn-margin-left"},[t._v("支付定金")])],1),e("v-uni-view",{staticClass:"king-item tn-color-indigo tn-icon-science"},[e("v-uni-view",{staticClass:"resume2 tn-main-gradient-blue--light tn-shadow-blur",staticStyle:{padding:"20rpx 20rpx"}},[e("v-uni-text",{staticClass:"tn-margin-top-sm"},[t._v("文字描述文字描述文字描述")])],1)],1),e("v-uni-view",{staticClass:"king-icon"},[e("v-uni-text",{staticClass:"tn-icon-clip tn-color-white tn-text-lg tn-bg-indigo tn-round tn-padding-xs"}),e("v-uni-text",{staticClass:"tn-text-xl tn-margin-left"},[t._v("开发测试")])],1),e("v-uni-view",{staticClass:"king-item tn-color-indigo tn-icon-science"},[e("v-uni-view",{staticClass:"resume2 tn-main-gradient-blue--light tn-shadow-blur",staticStyle:{padding:"20rpx 20rpx"}},[e("v-uni-text",{staticClass:"tn-margin-top-sm"},[t._v("文字描述文字描述文字描述")])],1)],1),e("v-uni-view",{staticClass:"king-icon"},[e("v-uni-text",{staticClass:"tn-icon-clip tn-color-white tn-text-lg tn-bg-indigo tn-round tn-padding-xs"}),e("v-uni-text",{staticClass:"tn-text-xl tn-margin-left"},[t._v("项目交付")])],1),e("v-uni-view",{staticClass:"king-item tn-color-indigo tn-icon-science"},[e("v-uni-view",{staticClass:"resume2 tn-main-gradient-blue--light tn-shadow-blur",staticStyle:{padding:"20rpx 20rpx"}},[e("v-uni-text",{staticClass:"tn-margin-top-sm"},[t._v("文字描述文字描述文字描述")])],1)],1),e("v-uni-view",{staticClass:"king-icon"},[e("v-uni-text",{staticClass:"tn-icon-clip tn-color-white tn-text-lg tn-bg-indigo tn-round tn-padding-xs"}),e("v-uni-text",{staticClass:"tn-text-xl tn-margin-left"},[t._v("项目交付")])],1),e("v-uni-view",{staticClass:"king-item tn-color-indigo tn-icon-science"},[e("v-uni-view",{staticClass:"resume2 tn-main-gradient-blue--light tn-shadow-blur",staticStyle:{padding:"20rpx 20rpx"}},[e("v-uni-text",{staticClass:"tn-margin-top-sm"},[t._v("文字描述文字描述文字描述")])],1)],1),e("v-uni-view",{staticClass:"king-icon"},[e("v-uni-text",{staticClass:"tn-icon-clip tn-color-white tn-text-lg tn-bg-indigo tn-round tn-padding-xs"}),e("v-uni-text",{staticClass:"tn-text-xl tn-margin-left"},[t._v("注意事项")])],1),e("v-uni-view",{staticClass:"king-item tn-color-indigo tn-icon-science"},[e("v-uni-view",{staticClass:"resume2 tn-main-gradient-blue--light tn-shadow-blur",staticStyle:{padding:"20rpx 20rpx"}},[e("v-uni-text",{staticClass:"tn-margin-top-sm"},[t._v("文字描述文字描述文字描述")])],1)],1),e("v-uni-view",{staticClass:"king-icon"},[e("v-uni-text",{staticClass:"tn-icon-clip tn-color-white tn-text-lg tn-bg-indigo tn-round tn-padding-xs"}),e("v-uni-text",{staticClass:"tn-text-xl tn-margin-left"},[t._v("支付尾款")])],1),e("v-uni-view",{staticClass:"king-item tn-color-indigo tn-icon-science"},[e("v-uni-view",{staticClass:"resume2 tn-main-gradient-blue--light tn-shadow-blur",staticStyle:{padding:"20rpx 20rpx"}},[e("v-uni-text",{staticClass:"tn-margin-top-sm"},[t._v("文字描述文字描述文字描述")])],1)],1)],1)],1)],1)},r=[]},c7f3:function(t,n,e){"use strict";e("7a82");var i=e("ee27").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("88ff")),r={name:"TemplateBusiness",mixins:[a.default],data:function(){return{tagList:[{color:"red",title:"萌新求带"},{color:"cyan",title:"简约美"},{color:"blue",title:"开心吃货"},{color:"green",title:"爱花草"},{color:"orange",title:"产品经理"},{color:"purplered",title:"手工王子"},{color:"purple",title:"创意设计"},{color:"brown",title:"腹黑"},{color:"yellowgreen",title:"水果控"},{color:"lime",title:"bug多多"},{color:"grey",title:"蠢萌蠢萌"}]}},methods:{}};n.default=r},c87d:function(t,n,e){"use strict";e.r(n);var i=e("be4a"),a=e("5cd5");for(var r in a)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(r);e("d95a");var o=e("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"4ca03910",null,!1,i["a"],void 0);n["default"]=s.exports},d95a:function(t,n,e){"use strict";var i=e("5f83"),a=e.n(i);a.a},ea6c:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"tn-custom-nav-bar-class tn-custom-nav-bar",style:[t.navBarStyle]},[e("v-uni-view",{staticClass:"tn-custom-nav-bar__bar",class:[t.barClass],style:[t.barStyle]},[t.isBack?e("v-uni-view",[t.customBack?e("v-uni-view",[e("v-uni-view",{style:{width:t.customBackStyleInfo.width+"px",height:t.customBackStyleInfo.height+"px",marginLeft:t.customBackStyleInfo.left+"px"}},[t._t("back")],2)],1):e("v-uni-view",{staticClass:"tn-custom-nav-bar__bar__action",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handlerBack.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"tn-custom-nav-bar__bar__action--nav-back",class:["tn-icon-"+t.backIcon]}),t.backTitle?e("v-uni-text",{staticClass:"tn-custom-nav-bar__bar__action--nav-back-text"},[t._v(t._s(t.backTitle))]):t._e()],1)],1):t._e(),e("v-uni-view",{staticClass:"tn-custom-nav-bar__bar__content",style:[t.contentStyle]},[t._t("default")],2),e("v-uni-view",[t._t("right")],2)],1)],1)},a=[]}}]);