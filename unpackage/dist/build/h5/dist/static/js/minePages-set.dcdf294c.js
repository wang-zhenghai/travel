(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["minePages-set"],{1992:function(t,n,a){var e=a("a852");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=a("4f06").default;i("198d12fd",e,!0,{sourceMap:!1,shadowMode:!1})},"1faf":function(t,n,a){"use strict";a("7a82");var e=a("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e(a("c7eb")),o=e(a("1da1"));a("a9e3");var s=e(a("9edb")),r={name:"tn-nav-bar",mixins:[s.default],props:{zIndex:{type:Number,default:0},height:{type:Number,default:0},unit:{type:String,default:"px"},isBack:{type:Boolean,default:!0},backIcon:{type:String,default:"left"},backTitle:{type:String,default:"返回"},alpha:{type:Boolean,default:!1},fixed:{type:Boolean,default:!0},bottomShadow:{type:Boolean,default:!0},customBack:{type:Boolean,default:!1},beforeBack:{type:Function,default:null}},computed:{navBarStyle:function(){var t={};return t.height=0===this.height?this.customBarHeight+this.unit:this.height+this.unit,this.fixed&&(t.position="fixed"),t.zIndex=this.elZIndex,t},barClass:function(){var t="";return this.backgroundColorClass&&(t+=" ".concat(this.backgroundColorClass)),this.fontColorClass&&(t+="".concat(this.fontColorClass)),this.fixed&&(t+=" tn-custom-nav-bar__bar--fixed"),this.alpha&&(t+=" tn-custom-nav-bar__bar--alpha"),this.bottomShadow&&(t+=" tn-custom-nav-bar__bar--bottom-shadow"),t},barStyle:function(){var t={};return t.height=0===this.height?this.customBarHeight+this.unit:this.height+this.unit,this.fixed&&(t.paddingTop=this.statusBarHeight+"px"),this.backgroundColorClass||(t.backgroundColor=""!==this.backgroundColor?this.backgroundColor:"#FFFFFF"),!this.fontColorClass&&this.fontColor&&(t.color=this.fontColor),t.zIndex=this.elZIndex,t},contentStyle:function(){var t={};if(t.top=this.fixed?this.statusBarHeight+"px":"0px",t.height=0===this.height?this.customBarHeight-this.statusBarHeight+this.unit:this.height+this.unit,t.lineHeight=t.height,this.isBack)if(this.customBack){var n=2*(this.customBackStyleInfo.width+this.customBackStyleInfo.left);t.width="calc(100% - ".concat(n,"px)")}else t.width="calc(100% - 340rpx)";else t.width="100%";return t},elZIndex:function(){return this.zIndex?this.zIndex:this.$t.zIndex.navbar}},data:function(){return{statusBarHeight:0,customBarHeight:0,customBackStyleInfo:{width:86,height:32,left:15}}},mounted:function(){this.updateNavBarInfo()},created:function(){},methods:{updateNavBarInfo:function(){var t=this;return(0,o.default)((0,i.default)().mark((function n(){var a,e,o;return(0,i.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a=t.vuex_custom_bar_height,e=t.vuex_status_bar_height,a){n.next=15;break}return n.prev=3,n.next=6,t.$t.updateCustomBar();case 6:o=n.sent,a=o.customBarHeight,e=o.statusBarHeight,n.next=15;break;case 11:return n.prev=11,n.t0=n["catch"](3),setTimeout((function(){t.updateNavBarInfo()}),10),n.abrupt("return");case 15:t&&t.$t.vuex("vuex_status_bar_height",e),t&&t.$t.vuex("vuex_custom_bar_height",a),t.customBarHeight=a,t.statusBarHeight=e;case 19:case"end":return n.stop()}}),n,null,[[3,11]])})))()},handlerBack:function(){var t=this;return(0,o.default)((0,i.default)().mark((function n(){var a;return(0,i.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!t.beforeBack||"function"!==typeof t.beforeBack){n.next=10;break}if(a=t.beforeBack.bind(t.$t.$parent.call(t))(),!a||"function"!==typeof a.then){n.next=7;break}return n.next=5,a.then((function(n){t.navBack()})).catch((function(t){}));case 5:n.next=8;break;case 7:!0===a&&t.navBack();case 8:n.next=11;break;case 10:t.navBack();case 11:case"end":return n.stop()}}),n)})))()},navBack:function(){var t=getCurrentPages();if(t&&t.length>0){var n=t[0];1!=t.length||n.route&&"pages/index/index"==n.route?uni.navigateBack({delta:1}):uni.reLaunch({url:"/pages/index/index"})}else uni.reLaunch({url:"/pages/index/index"})}}};n.default=r},"538d":function(t,n,a){"use strict";a.d(n,"b",(function(){return i})),a.d(n,"c",(function(){return o})),a.d(n,"a",(function(){return e}));var e={tnNavBar:a("aa86").default,tnButton:a("e6e0").default,uModal:a("8d90").default},i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"template-set"},[a("tn-nav-bar",{attrs:{fixed:!0,alpha:!0,customBack:!0}},[a("v-uni-view",{staticClass:"tn-custom-nav-bar__back",attrs:{slot:"back"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goBack.apply(void 0,arguments)}},slot:"back"},[a("v-uni-text",{staticClass:"icon tn-icon-left-arrow"})],1)],1),a("v-uni-view",{staticClass:"tn-margin-top",style:{paddingTop:t.vuex_custom_bar_height+"px"}},[a("v-uni-view",{staticClass:"tn-flex tn-flex-row-between tn-strip-bottom-min tn-padding",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.tn("/minePages/avatar")}}},[a("v-uni-view",{staticClass:"justify-content-item"},[a("v-uni-view",{staticClass:"tn-text-bold tn-text-lg"},[t._v("用户头像")]),a("v-uni-view",{staticClass:"tn-color-gray tn-padding-top-xs"},[t._v("有趣的头像，百里挑一")])],1),a("v-uni-view",{staticClass:"justify-content-item tn-text-lg tn-color-grey"},[a("v-uni-view",{staticClass:"tn-icon-right tn-padding-top"})],1)],1),a("v-uni-view",{staticClass:"tn-flex tn-flex-row-between tn-strip-bottom tn-padding",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.tn("/minePages/safety")}}},[a("v-uni-view",{staticClass:"justify-content-item"},[a("v-uni-view",{staticClass:"tn-text-bold tn-text-lg"},[t._v("账号安全")]),a("v-uni-view",{staticClass:"tn-color-gray tn-padding-top-xs"},[t._v("修改用户昵称、密码")])],1),a("v-uni-view",{staticClass:"justify-content-item tn-text-lg tn-color-grey"},[a("v-uni-view",{staticClass:"tn-icon-right tn-padding-top"})],1)],1),t._l(t.setList,(function(n,e){return a("v-uni-view",{key:e,staticClass:"tn-flex tn-flex-row-between tn-strip-bottom-min tn-padding tn-margin-top-xs",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tn(n.url)}}},[a("v-uni-view",{staticClass:"justify-content-item"},[a("v-uni-view",{staticClass:"tn-text-bold tn-text-lg"},[t._v(t._s(n.title))])],1),a("v-uni-view",{staticClass:"justify-content-item tn-text-lg tn-color-grey"},[a("v-uni-view",{staticClass:"tn-icon-right"})],1)],1)})),a("v-uni-view",{staticClass:"tn-flex  tn-footerfixed"},[a("v-uni-view",{staticClass:"tn-flex-1 justify-content-item tn-margin-sm tn-text-center",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.gologout.apply(void 0,arguments)}}},[a("tn-button",{attrs:{shape:"round",backgroundColor:"tn-cool-bg-color-15",padding:"40rpx 0",width:"60%",shadow:!0,fontBold:!0}},[a("v-uni-text",{staticClass:"tn-color-white"},[t._v("退出登录")])],1)],1)],1),a("v-uni-view",[a("u-modal",{attrs:{show:t.show,asyncClose:!0,title:"你确定要退出登录吗？",showCancelButton:!0,cancelColor:"#ff0000",confirmColor:"#4c99fe"},on:{confirm:function(n){arguments[0]=n=t.$handleEvent(n),t.confirm.apply(void 0,arguments)},cancel:function(n){arguments[0]=n=t.$handleEvent(n),t.show=!1}}})],1)],2)],1)},o=[]},"62d6":function(t,n,a){"use strict";var e=a("9307"),i=a.n(e);i.a},"856b":function(t,n,a){"use strict";a.r(n);var e=a("e7b8"),i=a.n(e);for(var o in e)["default"].indexOf(o)<0&&function(t){a.d(n,t,(function(){return e[t]}))}(o);n["default"]=i.a},9307:function(t,n,a){var e=a("f418");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=a("4f06").default;i("a357b8ec",e,!0,{sourceMap:!1,shadowMode:!1})},a852:function(t,n,a){var e=a("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.tn-custom-nav-bar[data-v-1863a3a8]{display:block;position:relative}.tn-custom-nav-bar__bar[data-v-1863a3a8]{display:flex;position:relative;align-items:center;min-height:%?100?%;justify-content:space-between;min-height:0;box-shadow:%?0?% %?0?% %?0?%;z-index:9999}.tn-custom-nav-bar__bar--fixed[data-v-1863a3a8]{position:fixed;width:100%;top:0}.tn-custom-nav-bar__bar--alpha[data-v-1863a3a8]{background:transparent!important;box-shadow:none!important}.tn-custom-nav-bar__bar--bottom-shadow[data-v-1863a3a8]{box-shadow:%?0?% %?0?% %?80?% %?0?% rgba(0,0,0,.05)}.tn-custom-nav-bar__bar__action[data-v-1863a3a8]{display:flex;align-items:center;height:100%;justify-content:center;max-width:100%}.tn-custom-nav-bar__bar__action--nav-back[data-v-1863a3a8]{\n  /* position: absolute; */\n  /* top: 50%; */\n  /* left: 20rpx; */\n  /* margin-top: -15rpx; */padding:%?20?%;font-size:%?38?%;line-height:100%}.tn-custom-nav-bar__bar__action--nav-back-text[data-v-1863a3a8]{padding:%?20?% %?20?% %?20?% %?0?%}.tn-custom-nav-bar__bar__content[data-v-1863a3a8]{position:absolute;text-align:center;left:0;right:0;bottom:0;margin:auto;font-size:%?32?%;cursor:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}',""]),t.exports=n},a884:function(t,n,a){"use strict";var e=a("1992"),i=a.n(e);i.a},aa86:function(t,n,a){"use strict";a.r(n);var e=a("ea6c"),i=a("b1ec");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(n,t,(function(){return i[t]}))}(o);a("a884");var s=a("f0c5"),r=Object(s["a"])(i["default"],e["b"],e["c"],!1,null,"1863a3a8",null,!1,e["a"],void 0);n["default"]=r.exports},b1ec:function(t,n,a){"use strict";a.r(n);var e=a("1faf"),i=a.n(e);for(var o in e)["default"].indexOf(o)<0&&function(t){a.d(n,t,(function(){return e[t]}))}(o);n["default"]=i.a},e7b8:function(t,n,a){"use strict";a("7a82");var e=a("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e(a("88ff")),o={name:"TemplateSet",mixins:[i.default],data:function(){return{show:!1,setList:[{title:"隐私政策",url:"/minePages/content"},{title:"帮助中心",url:"/minePages/help"}]}},methods:{gologout:function(){this.show=!0},confirm:function(){uni.removeStorageSync("userId"),uni.removeStorageSync("token"),uni.reLaunch({url:"/pages/index"}),uni.showToast({title:"退出成功",icon:"success"})},tn:function(t){try{uni.navigateTo({url:t})}catch(n){console.error(n),uni.showToast({title:"跳转失败",icon:"none",mask:!0})}}}};n.default=o},ea6c:function(t,n,a){"use strict";a.d(n,"b",(function(){return e})),a.d(n,"c",(function(){return i})),a.d(n,"a",(function(){}));var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"tn-custom-nav-bar-class tn-custom-nav-bar",style:[t.navBarStyle]},[a("v-uni-view",{staticClass:"tn-custom-nav-bar__bar",class:[t.barClass],style:[t.barStyle]},[t.isBack?a("v-uni-view",[t.customBack?a("v-uni-view",[a("v-uni-view",{style:{width:t.customBackStyleInfo.width+"px",height:t.customBackStyleInfo.height+"px",marginLeft:t.customBackStyleInfo.left+"px"}},[t._t("back")],2)],1):a("v-uni-view",{staticClass:"tn-custom-nav-bar__bar__action",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handlerBack.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"tn-custom-nav-bar__bar__action--nav-back",class:["tn-icon-"+t.backIcon]}),t.backTitle?a("v-uni-text",{staticClass:"tn-custom-nav-bar__bar__action--nav-back-text"},[t._v(t._s(t.backTitle))]):t._e()],1)],1):t._e(),a("v-uni-view",{staticClass:"tn-custom-nav-bar__bar__content",style:[t.contentStyle]},[t._t("default")],2),a("v-uni-view",[t._t("right")],2)],1)],1)},i=[]},f418:function(t,n,a){var e=a("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 胶囊*/.tn-custom-nav-bar__back[data-v-6d1f5d9a]{width:60%;height:100%;position:relative;display:flex;justify-content:space-evenly;align-items:center;box-sizing:border-box;background-color:rgba(0,0,0,.15);border-radius:%?1000?%;border:%?1?% solid hsla(0,0%,100%,.5);color:#fff;font-size:18px}.tn-custom-nav-bar__back .icon[data-v-6d1f5d9a]{display:block;flex:1;margin:auto;text-align:center}\n/* 间隔线 start*/.tn-strip-bottom-min[data-v-6d1f5d9a]{width:100%;border-bottom:%?1?% solid #f8f9fb}.tn-strip-bottom[data-v-6d1f5d9a]{width:100%;border-bottom:%?20?% solid hsla(0,0%,94.5%,.8)}\n/* 间隔线 end*/\n/* 底部悬浮按钮 start*/.tn-tabbar-height[data-v-6d1f5d9a]{min-height:%?100?%;height:calc(%?120?% + env(safe-area-inset-bottom) / 2)}.tn-footerfixed[data-v-6d1f5d9a]{position:fixed;width:100%;bottom:calc(%?30?% + env(safe-area-inset-bottom));z-index:1024;box-shadow:0 %?1?% %?6?% transparent}\n/* 底部悬浮按钮 end*/',""]),t.exports=n},fae0:function(t,n,a){"use strict";a.r(n);var e=a("538d"),i=a("856b");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(n,t,(function(){return i[t]}))}(o);a("62d6");var s=a("f0c5"),r=Object(s["a"])(i["default"],e["b"],e["c"],!1,null,"6d1f5d9a",null,!1,e["a"],void 0);n["default"]=r.exports}}]);