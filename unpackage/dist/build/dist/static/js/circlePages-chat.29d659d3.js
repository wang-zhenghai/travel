(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["circlePages-chat"],{1992:function(t,e,n){var i=n("a852");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("198d12fd",i,!0,{sourceMap:!1,shadowMode:!1})},"1faf":function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("c7eb")),r=i(n("1da1"));n("a9e3");var s=i(n("9edb")),o={name:"tn-nav-bar",mixins:[s.default],props:{zIndex:{type:Number,default:0},height:{type:Number,default:0},unit:{type:String,default:"px"},isBack:{type:Boolean,default:!0},backIcon:{type:String,default:"left"},backTitle:{type:String,default:"返回"},alpha:{type:Boolean,default:!1},fixed:{type:Boolean,default:!0},bottomShadow:{type:Boolean,default:!0},customBack:{type:Boolean,default:!1},beforeBack:{type:Function,default:null}},computed:{navBarStyle:function(){var t={};return t.height=0===this.height?this.customBarHeight+this.unit:this.height+this.unit,this.fixed&&(t.position="fixed"),t.zIndex=this.elZIndex,t},barClass:function(){var t="";return this.backgroundColorClass&&(t+=" ".concat(this.backgroundColorClass)),this.fontColorClass&&(t+="".concat(this.fontColorClass)),this.fixed&&(t+=" tn-custom-nav-bar__bar--fixed"),this.alpha&&(t+=" tn-custom-nav-bar__bar--alpha"),this.bottomShadow&&(t+=" tn-custom-nav-bar__bar--bottom-shadow"),t},barStyle:function(){var t={};return t.height=0===this.height?this.customBarHeight+this.unit:this.height+this.unit,this.fixed&&(t.paddingTop=this.statusBarHeight+"px"),this.backgroundColorClass||(t.backgroundColor=""!==this.backgroundColor?this.backgroundColor:"#FFFFFF"),!this.fontColorClass&&this.fontColor&&(t.color=this.fontColor),t.zIndex=this.elZIndex,t},contentStyle:function(){var t={};if(t.top=this.fixed?this.statusBarHeight+"px":"0px",t.height=0===this.height?this.customBarHeight-this.statusBarHeight+this.unit:this.height+this.unit,t.lineHeight=t.height,this.isBack)if(this.customBack){var e=2*(this.customBackStyleInfo.width+this.customBackStyleInfo.left);t.width="calc(100% - ".concat(e,"px)")}else t.width="calc(100% - 340rpx)";else t.width="100%";return t},elZIndex:function(){return this.zIndex?this.zIndex:this.$t.zIndex.navbar}},data:function(){return{statusBarHeight:0,customBarHeight:0,customBackStyleInfo:{width:86,height:32,left:15}}},mounted:function(){this.updateNavBarInfo()},created:function(){},methods:{updateNavBarInfo:function(){var t=this;return(0,r.default)((0,a.default)().mark((function e(){var n,i,r;return(0,a.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.vuex_custom_bar_height,i=t.vuex_status_bar_height,n){e.next=15;break}return e.prev=3,e.next=6,t.$t.updateCustomBar();case 6:r=e.sent,n=r.customBarHeight,i=r.statusBarHeight,e.next=15;break;case 11:return e.prev=11,e.t0=e["catch"](3),setTimeout((function(){t.updateNavBarInfo()}),10),e.abrupt("return");case 15:t&&t.$t.vuex("vuex_status_bar_height",i),t&&t.$t.vuex("vuex_custom_bar_height",n),t.customBarHeight=n,t.statusBarHeight=i;case 19:case"end":return e.stop()}}),e,null,[[3,11]])})))()},handlerBack:function(){var t=this;return(0,r.default)((0,a.default)().mark((function e(){var n;return(0,a.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.beforeBack||"function"!==typeof t.beforeBack){e.next=10;break}if(n=t.beforeBack.bind(t.$t.$parent.call(t))(),!n||"function"!==typeof n.then){e.next=7;break}return e.next=5,n.then((function(e){t.navBack()})).catch((function(t){}));case 5:e.next=8;break;case 7:!0===n&&t.navBack();case 8:e.next=11;break;case 10:t.navBack();case 11:case"end":return e.stop()}}),e)})))()},navBack:function(){var t=getCurrentPages();if(t&&t.length>0){var e=t[0];1!=t.length||e.route&&"pages/index/index"==e.route?uni.navigateBack({delta:1}):uni.reLaunch({url:"/pages/index/index"})}else uni.reLaunch({url:"/pages/index/index"})}}};e.default=o},"2e85":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={tnNavBar:n("aa86").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"template-content"},[n("tn-nav-bar",{attrs:{fixed:!0,alpha:!0,customBack:!0}},[n("v-uni-view",{staticClass:"tn-custom-nav-bar__back",attrs:{slot:"back"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}},slot:"back"},[n("v-uni-text",{staticClass:"icon tn-icon-left"}),n("v-uni-text",{staticClass:"icon tn-icon-home-capsule-fill"})],1)],1),n("v-uni-view",{style:{paddingTop:t.vuex_custom_bar_height+"px"}},[n("v-uni-view",{staticClass:"tn-text-justify"},[n("v-uni-view",{staticClass:"tn-margin"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-row-between tn-flex-col-center"},[n("v-uni-view",{staticClass:"justify-content-item"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-col-top tn-flex-row-left"},[n("v-uni-view",{staticClass:"logo-pic tn-shadow-blur tn-margin-top-sm",staticStyle:{"background-image":"url('https://resource.tuniaokj.com/images/blogger/blogger_beibei.jpg')"}},[n("v-uni-view",{staticClass:"logo-image"})],1),n("v-uni-view",{staticClass:"tn-padding-right tn-color-black"},[n("v-uni-view",{staticClass:"tn-padding-left-sm tn-text-bold tn-margin-top-sm",staticStyle:{"max-width":"62vw"}},[t._v("图鸟_北北")]),n("v-uni-view",{staticClass:"tn-flex tn-flex-col-center"},[n("v-uni-view",{staticClass:"tn-bg-gray--light tn-margin-sm tn-padding-sm",staticStyle:{"max-width":"62vw","border-radius":"0 15rpx 15rpx 15rpx"}},[n("v-uni-text",{},[t._v("???? 今天给大家安排个任务")])],1),n("v-uni-view",{})],1)],1)],1)],1),n("v-uni-view",{staticClass:"justify-content-item"})],1)],1),n("v-uni-view",{staticClass:"tn-margin"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-row-between tn-flex-col-center"},[n("v-uni-view",{staticClass:"justify-content-item"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-col-top tn-flex-row-left"},[n("v-uni-view",{staticClass:"logo-pic tn-shadow-blur tn-margin-top-sm",staticStyle:{"background-image":"url('https://resource.tuniaokj.com/images/blogger/blogger_beibei.jpg')"}},[n("v-uni-view",{staticClass:"logo-image"})],1),n("v-uni-view",{staticClass:"tn-padding-right tn-color-black"},[n("v-uni-view",{staticClass:"tn-padding-left-sm tn-text-bold tn-margin-top-sm",staticStyle:{"max-width":"62vw"}},[t._v("图鸟_北北")]),n("v-uni-view",{staticClass:"tn-flex tn-flex-col-center"},[n("v-uni-view",{staticClass:"tn-bg-gray--light tn-margin-sm tn-padding-sm",staticStyle:{"max-width":"62vw","border-radius":"0 15rpx 15rpx 15rpx"}},[n("v-uni-text",{},[t._v("广东省广州市番禺区祈福新村129号")])],1),n("v-uni-view",{},[n("v-uni-text",{staticClass:"tn-icon-location-fill tn-color-blue tn-text-xxl"})],1)],1)],1)],1)],1),n("v-uni-view",{staticClass:"justify-content-item"})],1)],1),n("v-uni-view",{staticClass:"tn-margin"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-row-between tn-flex-col-center"},[n("v-uni-view",{staticClass:"justify-content-item"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-col-top tn-flex-row-left"},[n("v-uni-view",{staticClass:"logo-pic tn-shadow-blur tn-margin-top-sm",staticStyle:{"background-image":"url('https://resource.tuniaokj.com/images/blogger/blogger_beibei.jpg')"}},[n("v-uni-view",{staticClass:"logo-image"})],1),n("v-uni-view",{staticClass:"tn-padding-right tn-color-black"},[n("v-uni-view",{staticClass:"tn-padding-left-sm tn-text-bold tn-margin-top-sm",staticStyle:{"max-width":"62vw"}},[t._v("图鸟_北北")]),n("v-uni-view",{staticClass:"tn-flex tn-flex-col-center"},[n("v-uni-view",{staticClass:"tnchat2 tn-margin-sm",staticStyle:{"max-width":"62vw"}},[n("v-uni-text",{},[t._v("给我抓住那只猪，站在树下那只粉色猪，不是小猪佩奇那只。立刻马上，收到请回答，OVER")])],1),n("v-uni-view",{})],1)],1)],1)],1),n("v-uni-view",{staticClass:"justify-content-item"})],1)],1),n("v-uni-view",{staticClass:"tn-margin"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-row-between tn-flex-col-center"},[n("v-uni-view",{staticClass:"justify-content-item"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-col-top tn-flex-row-left"},[n("v-uni-view",{staticClass:"logo-pic tn-shadow-blur tn-margin-top-sm",staticStyle:{"background-image":"url('https://resource.tuniaokj.com/images/blogger/content_1.jpeg')"}},[n("v-uni-view",{staticClass:"logo-image"})],1),n("v-uni-view",{staticClass:"tn-padding-right tn-color-black"},[n("v-uni-view",{staticClass:"tn-padding-left-sm tn-text-bold tn-margin-top-sm",staticStyle:{"max-width":"62vw"}},[t._v("图鸟_锋哥")]),n("v-uni-view",{staticClass:"tn-flex tn-flex-col-center"},[n("v-uni-view",{staticClass:"tnchat3 tn-margin-sm",staticStyle:{"max-width":"62vw"}},[n("v-uni-text",{},[t._v("遵命")])],1),n("v-uni-view",{})],1)],1)],1)],1),n("v-uni-view",{staticClass:"justify-content-item"})],1)],1),n("v-uni-view",{staticClass:"tn-margin"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-row-between tn-flex-col-center"},[n("v-uni-view",{staticClass:"justify-content-item"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-col-top tn-flex-row-left"},[n("v-uni-view",{staticClass:"logo-pic tn-shadow-blur tn-margin-top-sm",staticStyle:{"background-image":"url('https://resource.tuniaokj.com/images/blogger/content_1.jpeg')"}},[n("v-uni-view",{staticClass:"logo-image"})],1),n("v-uni-view",{staticClass:"tn-padding-right tn-color-black"},[n("v-uni-view",{staticClass:"tn-padding-left-sm tn-text-bold tn-margin-top-sm",staticStyle:{"max-width":"62vw"}},[t._v("图鸟_锋哥")]),n("v-uni-view",{staticClass:"tn-flex tn-flex-col-center"},[n("v-uni-view",{staticClass:"tnchat3 tn-margin-sm",staticStyle:{"max-width":"62vw"}},[n("v-uni-text",{staticClass:"tn-icon-sound tn-text-lg"}),n("v-uni-text",{staticClass:"tn-padding-left-xs"},[t._v("12 ''")])],1),n("v-uni-view",{},[n("v-uni-text",{staticClass:"tn-icon-font tn-color-black tn-text-xxl"})],1)],1)],1)],1)],1),n("v-uni-view",{staticClass:"justify-content-item"})],1)],1),n("v-uni-view",{staticClass:"tn-margin"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-row-between tn-flex-col-center"},[n("v-uni-view",{staticClass:"justify-content-item"}),n("v-uni-view",{staticClass:"justify-content-item"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-col-top tn-flex-row-left"},[n("v-uni-view",{staticClass:"tn-padding-left tn-color-black"},[n("v-uni-view",{staticClass:"tn-padding-right tn-text-bold tn-margin-top-sm tn-text-right",staticStyle:{"max-width":"62vw"}},[t._v("图鸟_东东")]),n("v-uni-view",{staticClass:"tn-flex tn-flex-col-center"},[n("v-uni-view",{},[n("v-uni-text",{staticClass:"tn-icon-warning-fill tn-color-purplered tn-text-xxl"})],1),n("v-uni-view",{staticClass:"tnchat4 tn-margin-sm",staticStyle:{"max-width":"62vw"}},[n("v-uni-text",{},[t._v("遵命大人")])],1)],1)],1),n("v-uni-view",{staticClass:"logo-pic tn-shadow-blur tn-margin-top-sm",staticStyle:{"background-image":"url('https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg')"}},[n("v-uni-view",{staticClass:"logo-image"})],1)],1)],1)],1)],1),n("v-uni-view",{staticClass:"tn-margin"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-row-between tn-flex-col-center"},[n("v-uni-view",{staticClass:"justify-content-item"}),n("v-uni-view",{staticClass:"justify-content-item"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-col-top tn-flex-row-left"},[n("v-uni-view",{staticClass:"tn-padding-left tn-color-black"},[n("v-uni-view",{staticClass:"tn-padding-right tn-text-bold tn-margin-top-sm tn-text-right",staticStyle:{"max-width":"62vw"}},[t._v("图鸟_东东")]),n("v-uni-view",{staticClass:"tn-flex tn-flex-col-center"},[n("v-uni-view",{}),n("v-uni-view",{staticClass:"tnchat4 tn-margin-sm",staticStyle:{"max-width":"62vw"}},[n("v-uni-text",{},[t._v("现在就去抓")])],1)],1)],1),n("v-uni-view",{staticClass:"logo-pic tn-shadow-blur tn-margin-top-sm",staticStyle:{"background-image":"url('https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg')"}},[n("v-uni-view",{staticClass:"logo-image"})],1)],1)],1)],1)],1),n("v-uni-view",{staticClass:"tn-text-center"},[n("v-uni-text",{staticClass:"tn-bg-gray--light tn-text-xs",staticStyle:{"border-radius":"6rpx",padding:"10rpx 14rpx"}},[t._v("晚上7:02")])],1),n("v-uni-view",{staticClass:"tn-margin"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-row-between tn-flex-col-center"},[n("v-uni-view",{staticClass:"justify-content-item"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-col-top tn-flex-row-left"},[n("v-uni-view",{staticClass:"logo-pic tn-shadow-blur tn-margin-top-sm",staticStyle:{"background-image":"url('https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg')"}},[n("v-uni-view",{staticClass:"logo-image"})],1),n("v-uni-view",{staticClass:"tn-padding-right tn-color-black"},[n("v-uni-view",{staticClass:"tn-padding-left-sm tn-text-bold tn-margin-top-sm",staticStyle:{"max-width":"62vw"}},[t._v("图鸟_静言")]),n("v-uni-view",{staticClass:"tn-flex tn-flex-col-center"},[n("v-uni-view",{staticClass:"tnchat5 tn-margin-sm",staticStyle:{"max-width":"62vw"}},[n("v-uni-text",{},[t._v("猪猪贼那么可爱，怎么可以吃猪猪（哽咽）。烤乳猪吗？我得补一补了")])],1),n("v-uni-view",{},[n("v-uni-text",{staticClass:"tn-icon-warning-fill tn-color-purplered tn-text-xxl"})],1)],1)],1)],1)],1),n("v-uni-view",{staticClass:"justify-content-item"})],1)],1),n("v-uni-view",{staticClass:"tn-margin"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-row-between tn-flex-col-center"},[n("v-uni-view",{staticClass:"justify-content-item"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-col-top tn-flex-row-left"},[n("v-uni-view",{staticClass:"logo-pic tn-shadow-blur tn-margin-top-sm",staticStyle:{"background-image":"url('https://resource.tuniaokj.com/images/blogger/avatar_5.png')"}},[n("v-uni-view",{staticClass:"logo-image"})],1),n("v-uni-view",{staticClass:"tn-padding-right tn-color-black"},[n("v-uni-view",{staticClass:"tn-padding-left-sm tn-text-bold tn-margin-top-sm",staticStyle:{"max-width":"62vw"}},[t._v("图鸟_西西")]),n("v-uni-view",{staticClass:"tn-flex tn-flex-col-center"},[n("v-uni-view",{staticClass:"tnchat6 tn-margin-sm",staticStyle:{"max-width":"62vw"}},[n("v-uni-text",{},[t._v("我是最骚的西西，就连气泡都与众不同")])],1),n("v-uni-view",{},[n("v-uni-text",{staticClass:"tn-icon-warning-fill tn-color-purplered tn-text-xxl"})],1)],1)],1)],1)],1),n("v-uni-view",{staticClass:"justify-content-item"})],1)],1),n("v-uni-view",{staticClass:"tn-margin"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-row-between tn-flex-col-center"},[n("v-uni-view",{staticClass:"justify-content-item"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-col-top tn-flex-row-left"},[n("v-uni-view",{staticClass:"logo-pic tn-shadow-blur tn-margin-top-sm",staticStyle:{"background-image":"url('https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg')"}},[n("v-uni-view",{staticClass:"logo-image"})],1),n("v-uni-view",{staticClass:"tn-padding-right tn-color-black"},[n("v-uni-view",{staticClass:"tn-padding-left-sm tn-text-bold tn-margin-top-sm",staticStyle:{"max-width":"62vw"}},[t._v("图鸟_Jaylen")]),n("v-uni-view",{staticClass:"tn-flex tn-flex-col-center"},[n("v-uni-view",{staticClass:"tnchat7 tn-margin-sm",staticStyle:{"max-width":"62vw"}},[n("v-uni-text",{},[t._v("我的气泡，骚气十足")])],1),n("v-uni-view",{},[n("v-uni-text",{staticClass:"tn-icon-warning-fill tn-color-purplered tn-text-xxl"})],1)],1)],1)],1)],1),n("v-uni-view",{staticClass:"justify-content-item"})],1)],1),n("v-uni-view",{staticClass:"tn-margin"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-row-between tn-flex-col-center"},[n("v-uni-view",{staticClass:"justify-content-item"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-col-top tn-flex-row-left"},[n("v-uni-view",{staticClass:"logo-pic tn-shadow-blur tn-margin-top-sm",staticStyle:{"background-image":"url('https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg')"}},[n("v-uni-view",{staticClass:"logo-image"})],1),n("v-uni-view",{staticClass:"tn-padding-right tn-color-black"},[n("v-uni-view",{staticClass:"tn-padding-left-sm tn-text-bold tn-margin-top-sm",staticStyle:{"max-width":"62vw"}},[t._v("图鸟_Jaylen")]),n("v-uni-view",{staticClass:"tn-flex tn-flex-col-center"},[n("v-uni-view",{staticClass:"tn-margin-sm",staticStyle:{"max-width":"62vw"}},[n("v-uni-view",{staticClass:"bg-img-cont tn-shadow-blur",staticStyle:{"background-image":"url('https://resource.tuniaokj.com/images/content/rodion.jpg')"}})],1),n("v-uni-view",{},[n("v-uni-text",{staticClass:"tn-icon-warning-fill tn-color-purplered tn-text-xxl"})],1)],1)],1)],1)],1),n("v-uni-view",{staticClass:"justify-content-item"})],1)],1),n("v-uni-view",{staticClass:"tn-margin"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-row-between tn-flex-col-center"},[n("v-uni-view",{staticClass:"justify-content-item"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-col-top tn-flex-row-left"},[n("v-uni-view",{staticClass:"logo-pic tn-shadow-blur tn-margin-top-sm",staticStyle:{"background-image":"url('https://resource.tuniaokj.com/images/blogger/content_1.jpeg')"}},[n("v-uni-view",{staticClass:"logo-image"})],1),n("v-uni-view",{staticClass:"tn-padding-right tn-color-black"},[n("v-uni-view",{staticClass:"tn-padding-left-sm tn-text-bold tn-margin-top-sm",staticStyle:{"max-width":"62vw"}},[t._v("图鸟_锋哥")]),n("v-uni-view",{staticClass:"tn-flex tn-flex-col-center"},[n("v-uni-view",{staticClass:"tnchat3 tn-margin-sm",staticStyle:{"max-width":"62vw"}},[n("v-uni-text",{},[t._v("已抓到")])],1),n("v-uni-view",{},[n("v-uni-text",{staticClass:"tn-icon-warning-fill tn-color-purplered tn-text-xxl"})],1)],1)],1)],1)],1),n("v-uni-view",{staticClass:"justify-content-item"})],1)],1),n("v-uni-view",{staticClass:"tn-margin"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-row-between tn-flex-col-center"},[n("v-uni-view",{staticClass:"justify-content-item"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-col-top tn-flex-row-left"},[n("v-uni-view",{staticClass:"logo-pic tn-shadow-blur tn-margin-top-sm",staticStyle:{"background-image":"url('https://resource.tuniaokj.com/images/shop/phonecase1.jpg')"}},[n("v-uni-view",{staticClass:"logo-image"})],1),n("v-uni-view",{staticClass:"tn-padding-right tn-color-black"},[n("v-uni-view",{staticClass:"tn-padding-left-sm tn-text-bold tn-margin-top-sm",staticStyle:{"max-width":"62vw"}},[t._v("图鸟_肯德")]),n("v-uni-view",{staticClass:"tn-flex tn-flex-col-center"},[n("v-uni-view",{staticClass:"tn-margin-sm tn-padding-sm",staticStyle:{"max-width":"62vw","border-radius":"0 15rpx 15rpx 15rpx","background-color":"#FFF00D"}},[n("v-uni-text",{},[t._v("给锋哥奖猪腿")])],1),n("v-uni-view",{},[n("v-uni-text",{staticClass:"tn-icon-warning-fill tn-color-purplered tn-text-xxl"})],1)],1)],1)],1)],1),n("v-uni-view",{staticClass:"justify-content-item"})],1)],1),n("v-uni-view",{staticClass:"tn-margin"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-row-between tn-flex-col-center"},[n("v-uni-view",{staticClass:"justify-content-item"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-col-top tn-flex-row-left"},[n("v-uni-view",{staticClass:"logo-pic tn-shadow-blur tn-margin-top-sm",staticStyle:{"background-image":"url('https://resource.tuniaokj.com/images/shop/phonecase1.jpg')"}},[n("v-uni-view",{staticClass:"logo-image"})],1),n("v-uni-view",{staticClass:"tn-padding-right tn-color-black"},[n("v-uni-view",{staticClass:"tn-padding-left-sm tn-text-bold tn-margin-top-sm",staticStyle:{"max-width":"62vw"}},[t._v("图鸟_肯德")]),n("v-uni-view",{staticClass:"tn-flex tn-flex-col-center"},[n("v-uni-view",{staticClass:"tn-margin-sm tn-padding-sm",staticStyle:{"max-width":"62vw","border-radius":"0 15rpx 15rpx 15rpx","background-color":"#00FFC6"}},[n("v-uni-text",{},[t._v("气泡切换术，变")])],1),n("v-uni-view",{},[n("v-uni-text",{staticClass:"tn-icon-warning-fill tn-color-purplered tn-text-xxl"})],1)],1)],1)],1)],1),n("v-uni-view",{staticClass:"justify-content-item"})],1)],1)],1)],1),n("v-uni-view",{staticClass:"tn-tabbar-height"})],1)},r=[]},"68ff":function(t,e,n){"use strict";n.r(e);var i=n("2e85"),a=n("e571");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("db8c");var s=n("f0c5"),o=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"2216aff8",null,!1,i["a"],void 0);e["default"]=o.exports},"74d7":function(t,e,n){var i=n("76e7");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("24b4d4ef",i,!0,{sourceMap:!1,shadowMode:!1})},"76e7":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 胶囊*/.tn-custom-nav-bar__back[data-v-2216aff8]{width:100%;height:100%;position:relative;display:flex;justify-content:space-evenly;align-items:center;box-sizing:border-box;background-color:rgba(0,0,0,.15);border-radius:%?1000?%;border:%?1?% solid hsla(0,0%,100%,.5);color:#fff;font-size:18px}.tn-custom-nav-bar__back .icon[data-v-2216aff8]{display:block;flex:1;margin:auto;text-align:center}.tn-custom-nav-bar__back[data-v-2216aff8]:before{content:" ";width:%?1?%;height:110%;position:absolute;top:22.5%;left:0;right:0;margin:auto;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;pointer-events:none;box-sizing:border-box;opacity:.7;background-color:#fff}.tn-tabbar-height[data-v-2216aff8]{min-height:%?100?%;height:calc(%?120?% + env(safe-area-inset-bottom) / 2)}\n/* 用户头像 start */.logo-image[data-v-2216aff8]{width:%?80?%;height:%?80?%;position:relative}.logo-pic[data-v-2216aff8]{background-size:cover;background-repeat:no-repeat;background-position:top;border-radius:50%}.bg-img-cont[data-v-2216aff8]{background-size:cover;background-position:50%;background-repeat:no-repeat;height:%?260?%;width:55vw;margin:%?10?% 0 0 0;border-radius:%?12?%}\n/* 聊天*/.tnchat1[data-v-2216aff8]{border-style:solid;border-width:%?71?%;border-image-source:url(https://cdn.nlark.com/yuque/0/2022/png/280373/1656388937089-assets/web-upload/9d92dfd6-3486-4be9-a933-0ae160bdfc86.png);border-image-slice:71 71 71 71 fill;border-image-repeat:repeat;word-break:break-word;width:-webkit-fit-content;width:fit-content}.tnchat2[data-v-2216aff8]{border-style:solid;border-width:%?26?% %?43?%;border-image-source:url(https://cdn.nlark.com/yuque/0/2022/png/280373/1656471916508-assets/web-upload/e2305ffa-d1c7-435c-adae-2b3f0bc0da41.png);border-image-slice:26 43 26 43 fill;border-image-repeat:repeat;word-break:break-word;width:-webkit-fit-content;width:fit-content}.tnchat3[data-v-2216aff8]{border-style:solid;border-width:%?26?% %?43?%;border-image-source:url(https://cdn.nlark.com/yuque/0/2022/png/280373/1656562395500-assets/web-upload/2662c10c-061b-403d-9289-1165d9ee9e7b.png);border-image-slice:26 43 26 43 fill;border-image-repeat:repeat;word-break:break-word;width:-webkit-fit-content;width:fit-content}.tnchat4[data-v-2216aff8]{border-style:solid;border-width:%?26?% %?43?%;border-image-source:url(https://cdn.nlark.com/yuque/0/2022/png/280373/1656562336904-assets/web-upload/ad050d7f-3bdd-4de5-9e67-500f778b20e4.png);border-image-slice:26 43 26 43 fill;border-image-repeat:repeat;word-break:break-word;width:-webkit-fit-content;width:fit-content}.tnchat5[data-v-2216aff8]{border-style:solid;border-width:%?26?% %?43?%;border-image-source:url(https://cdn.nlark.com/yuque/0/2022/png/280373/1656562607434-assets/web-upload/cf008270-2a2c-4fac-82b1-b558d8a92230.png);border-image-slice:26 43 26 43 fill;border-image-repeat:repeat;word-break:break-word;width:-webkit-fit-content;width:fit-content}.tnchat6[data-v-2216aff8]{border-style:solid;border-width:%?26?% %?43?%;border-image-source:url(https://cdn.nlark.com/yuque/0/2022/png/280373/1656598070402-assets/web-upload/e123a1e3-6235-4d39-81d5-33d221d7a960.png);border-image-slice:26 43 26 43 fill;border-image-repeat:repeat;word-break:break-word;width:-webkit-fit-content;width:fit-content}.tnchat7[data-v-2216aff8]{border-style:solid;border-width:%?26?% %?43?%;border-image-source:url(https://cdn.nlark.com/yuque/0/2022/png/280373/1656602660855-assets/web-upload/9c698bba-af80-47bf-9ee4-3a78e0288fc4.png);border-image-slice:26 43 26 43 fill;border-image-repeat:repeat;word-break:break-word;width:-webkit-fit-content;width:fit-content}',""]),t.exports=e},"7ec2":function(t,e,n){n("7a82"),n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("b636"),n("944a"),n("0c47"),n("23dc"),n("3410"),n("d9e2"),n("d401"),n("14d9"),n("159b"),n("131a"),n("26e9"),n("fb6a");var i=n("7037")["default"];function a(){"use strict";
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t.exports=a=function(){return e},t.exports.__esModule=!0,t.exports["default"]=t.exports;var e={},n=Object.prototype,r=n.hasOwnProperty,s=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},c=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function v(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{v({},"")}catch(O){v=function(t,e,n){return t[e]=n}}function f(t,e,n,i){var a=e&&e.prototype instanceof h?e:h,r=Object.create(a.prototype),o=new L(i||[]);return s(r,"_invoke",{value:k(t,n,o)}),r}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(O){return{type:"throw",arg:O}}}e.wrap=f;var g={};function h(){}function p(){}function w(){}var m={};v(m,c,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(I([])));x&&x!==n&&r.call(x,c)&&(m=x);var y=w.prototype=h.prototype=Object.create(m);function C(t){["next","throw","return"].forEach((function(e){v(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){var n;s(this,"_invoke",{value:function(a,s){function o(){return new e((function(n,o){(function n(a,s,o,c){var l=d(t[a],t,s);if("throw"!==l.type){var u=l.arg,v=u.value;return v&&"object"==i(v)&&r.call(v,"__await")?e.resolve(v.__await).then((function(t){n("next",t,o,c)}),(function(t){n("throw",t,o,c)})):e.resolve(v).then((function(t){u.value=t,o(u)}),(function(t){return n("throw",t,o,c)}))}c(l.arg)})(a,s,n,o)}))}return n=n?n.then(o,o):o()}})}function k(t,e,n){var i="suspendedStart";return function(a,r){if("executing"===i)throw new Error("Generator is already running");if("completed"===i){if("throw"===a)throw r;return E()}for(n.method=a,n.arg=r;;){var s=n.delegate;if(s){var o=S(s,n);if(o){if(o===g)continue;return o}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===i)throw i="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i="executing";var c=d(t,e,n);if("normal"===c.type){if(i=n.done?"completed":"suspendedYield",c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i="completed",n.method="throw",n.arg=c.arg)}}}function S(t,e){var n=e.method,i=t.iterator[n];if(void 0===i)return e.delegate=null,"throw"===n&&t.iterator["return"]&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=d(i,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,g;var r=a.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,g):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function B(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function I(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:E}}function E(){return{value:void 0,done:!0}}return p.prototype=w,s(y,"constructor",{value:w,configurable:!0}),s(w,"constructor",{value:p,configurable:!0}),p.displayName=v(w,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,v(t,u,"GeneratorFunction")),t.prototype=Object.create(y),t},e.awrap=function(t){return{__await:t}},C(_.prototype),v(_.prototype,l,(function(){return this})),e.AsyncIterator=_,e.async=function(t,n,i,a,r){void 0===r&&(r=Promise);var s=new _(f(t,n,i,a),r);return e.isGeneratorFunction(n)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},C(y),v(y,u,"Generator"),v(y,c,(function(){return this})),v(y,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var i in e)n.push(i);return n.reverse(),function t(){for(;n.length;){var i=n.pop();if(i in e)return t.value=i,t.done=!1,t}return t.done=!0,t}},e.values=I,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(B),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,i){return s.type="throw",s.arg=t,e.next=n,i&&(e.method="next",e.arg=void 0),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var o=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(o&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(o){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var s=a?a.completion:{};return s.type=t,s.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),B(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var a=i.arg;B(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:I(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),g}},e}t.exports=a,t.exports.__esModule=!0,t.exports["default"]=t.exports},"88ff":function(t,e,n){var i=n("7ec2").default,a=n("c973").default;t.exports={data:function(){return{}},onLoad:function(){this.updateCustomBarInfo()},methods:{goBack:function(){var t=getCurrentPages();if(t&&t.length>0){var e=t[0];1!=t.length||e.route&&"pages/index"==e.route?uni.navigateBack({delta:1}):uni.reLaunch({url:"/pages/index"})}else uni.reLaunch({url:"/pages/index"})},updateCustomBarInfo:function(){var t=this;return a(i().mark((function e(){var n,a,r;return i().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.vuex_custom_bar_height,a=t.vuex_status_bar_height,n){e.next=15;break}return e.prev=3,e.next=6,t.$t.updateCustomBar();case 6:r=e.sent,n=r.customBarHeight,a=r.statusBarHeight,e.next=15;break;case 11:return e.prev=11,e.t0=e["catch"](3),setTimeout((function(){t.updateCustomBarInfo()}),10),e.abrupt("return");case 15:t.$t.vuex("vuex_status_bar_height",a),t.$t.vuex("vuex_custom_bar_height",n);case 17:case"end":return e.stop()}}),e,null,[[3,11]])})))()}}}},"8a3b":function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("88ff")),r={name:"TemplateContent",mixins:[a.default],data:function(){return{}},methods:{}};e.default=r},"9edb":function(t,e,n){n("a9e3"),t.exports={data:function(){},props:{backgroundColor:{type:String,default:""},fontColor:{type:String,default:""},fontSize:{type:Number,default:0},fontUnit:{type:String,default:"rpx"}},computed:{backgroundColorStyle:function(){return this.$t.color.getBackgroundColorStyle(this.backgroundColor)},backgroundColorClass:function(){return this.$t.color.getBackgroundColorInternalClass(this.backgroundColor)},fontColorStyle:function(){return this.$t.color.getFontColorStyle(this.fontColor)},fontColorClass:function(){return this.$t.color.getFontColorInternalClass(this.fontColor)},fontSizeStyle:function(){return this.$t.string.getLengthUnitValue(this.fontSize,this.fontUnit)}},methods:{}}},a852:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.tn-custom-nav-bar[data-v-1863a3a8]{display:block;position:relative}.tn-custom-nav-bar__bar[data-v-1863a3a8]{display:flex;position:relative;align-items:center;min-height:%?100?%;justify-content:space-between;min-height:0;box-shadow:%?0?% %?0?% %?0?%;z-index:9999}.tn-custom-nav-bar__bar--fixed[data-v-1863a3a8]{position:fixed;width:100%;top:0}.tn-custom-nav-bar__bar--alpha[data-v-1863a3a8]{background:transparent!important;box-shadow:none!important}.tn-custom-nav-bar__bar--bottom-shadow[data-v-1863a3a8]{box-shadow:%?0?% %?0?% %?80?% %?0?% rgba(0,0,0,.05)}.tn-custom-nav-bar__bar__action[data-v-1863a3a8]{display:flex;align-items:center;height:100%;justify-content:center;max-width:100%}.tn-custom-nav-bar__bar__action--nav-back[data-v-1863a3a8]{\n  /* position: absolute; */\n  /* top: 50%; */\n  /* left: 20rpx; */\n  /* margin-top: -15rpx; */padding:%?20?%;font-size:%?38?%;line-height:100%}.tn-custom-nav-bar__bar__action--nav-back-text[data-v-1863a3a8]{padding:%?20?% %?20?% %?20?% %?0?%}.tn-custom-nav-bar__bar__content[data-v-1863a3a8]{position:absolute;text-align:center;left:0;right:0;bottom:0;margin:auto;font-size:%?32?%;cursor:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}',""]),t.exports=e},a884:function(t,e,n){"use strict";var i=n("1992"),a=n.n(i);a.a},aa86:function(t,e,n){"use strict";n.r(e);var i=n("ea6c"),a=n("b1ec");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("a884");var s=n("f0c5"),o=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"1863a3a8",null,!1,i["a"],void 0);e["default"]=o.exports},b1ec:function(t,e,n){"use strict";n.r(e);var i=n("1faf"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},c973:function(t,e,n){function i(t,e,n,i,a,r,s){try{var o=t[r](s),c=o.value}catch(l){return void n(l)}o.done?e(c):Promise.resolve(c).then(i,a)}n("d3b7"),t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var s=t.apply(e,n);function o(t){i(s,a,r,o,c,"next",t)}function c(t){i(s,a,r,o,c,"throw",t)}o(void 0)}))}},t.exports.__esModule=!0,t.exports["default"]=t.exports},db8c:function(t,e,n){"use strict";var i=n("74d7"),a=n.n(i);a.a},e571:function(t,e,n){"use strict";n.r(e);var i=n("8a3b"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},ea6c:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"tn-custom-nav-bar-class tn-custom-nav-bar",style:[t.navBarStyle]},[n("v-uni-view",{staticClass:"tn-custom-nav-bar__bar",class:[t.barClass],style:[t.barStyle]},[t.isBack?n("v-uni-view",[t.customBack?n("v-uni-view",[n("v-uni-view",{style:{width:t.customBackStyleInfo.width+"px",height:t.customBackStyleInfo.height+"px",marginLeft:t.customBackStyleInfo.left+"px"}},[t._t("back")],2)],1):n("v-uni-view",{staticClass:"tn-custom-nav-bar__bar__action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlerBack.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"tn-custom-nav-bar__bar__action--nav-back",class:["tn-icon-"+t.backIcon]}),t.backTitle?n("v-uni-text",{staticClass:"tn-custom-nav-bar__bar__action--nav-back-text"},[t._v(t._s(t.backTitle))]):t._e()],1)],1):t._e(),n("v-uni-view",{staticClass:"tn-custom-nav-bar__bar__content",style:[t.contentStyle]},[t._t("default")],2),n("v-uni-view",[t._t("right")],2)],1)],1)},a=[]}}]);