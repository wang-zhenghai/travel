(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["activityPages-study"],{4436:function(t,e,n){"use strict";var i=n("e86e"),a=n.n(i);a.a},"5cd7":function(t,e,n){"use strict";n("7a82");var i=n("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("88ff")),s={name:"TemplateStudy",mixins:[a.default],data:function(){return{cardCur:0,swiperList:[{id:0,type:"image",title:"一起学习",name:"文案之类的",text:"小文案小文案小文案",url:"https://resource.tuniaokj.com/images/swiper/banner-animate3.png",pngurl:"https://resource.tuniaokj.com/images/login/1/login_top3.png"},{id:1,type:"image",title:"图鸟南南",name:"欢迎加入东东们",text:"如果你也有不错的作品",url:"https://resource.tuniaokj.com/images/swiper/banner-animate2.png",pngurl:"https://resource.tuniaokj.com/images/swiper/c4d1.png"},{id:2,type:"image",title:"图鸟西西",name:"一起玩转scss",text:"用最少的代码做最骚的效果",url:"https://resource.tuniaokj.com/images/swiper/deer.jpg",pngurl:"https://resource.tuniaokj.com/images/swiper/c4d1.png"},{id:3,type:"image",title:"图鸟北北",name:"微信号 tnkewo",text:"商业合作请联系作者",url:"https://resource.tuniaokj.com/images/swiper/banner-animate.png",pngurl:"https://resource.tuniaokj.com/images/swiper/c4d1.png"},{id:4,type:"image",title:"图鸟猪猪",name:"努力成为大佬",text:"一起加油吖",url:"https://resource.tuniaokj.com/images/shop/banner2.jpg",pngurl:"https://resource.tuniaokj.com/images/swiper/c4d1.png"}],groupList:[{src:"https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg"},{src:"https://resource.tuniaokj.com/images/blogger/blogger_beibei.jpg"}]}},methods:{cardSwiper:function(t){this.cardCur=t.detail.current}}};e.default=s},7539:function(t,e,n){"use strict";n.r(e);var i=n("5cd7"),a=n.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},7705:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var i={tnNavBar:n("aa86").default,tnAvatarGroup:n("126a").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"template-study tn-safe-area-inset-bottom"},[n("tn-nav-bar",{attrs:{fixed:!0,alpha:!0,customBack:!0}},[n("v-uni-view",{staticClass:"tn-custom-nav-bar__back",attrs:{slot:"back"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}},slot:"back"},[n("v-uni-text",{staticClass:"icon tn-icon-left"}),n("v-uni-text",{staticClass:"icon tn-icon-home-capsule-fill"})],1)],1),n("v-uni-swiper",{staticClass:"card-swiper",attrs:{circular:!0,autoplay:!0,duration:"500",interval:"18000"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.cardSwiper.apply(void 0,arguments)}}},t._l(t.swiperList,(function(e,i){return n("v-uni-swiper-item",{key:i,class:t.cardCur==i?"cur":""},[n("v-uni-view",{staticClass:"swiper-item image-banner"},["image"==e.type?n("v-uni-image",{attrs:{src:e.url,mode:"aspectFill"}}):t._e()],1),n("v-uni-view",{staticClass:"swiper-item2 image-banner"},["image"==e.type?n("v-uni-image",{staticClass:"png-sussuspension",attrs:{src:e.pngurl,mode:"heightFix"}}):t._e()],1),n("v-uni-view",{staticClass:"swiper-item-text"},[n("v-uni-view",{staticClass:"text-sussuspension"},[n("v-uni-view",{staticClass:"tn-text-xxl tn-text-bold tn-color-white"},[t._v(t._s(e.title))]),n("v-uni-view",{staticClass:"tn-text-bold tn-color-white tn-padding-top-xs",staticStyle:{"font-size":"60rpx"}},[t._v(t._s(e.name))]),n("v-uni-view",{staticClass:"tn-text-sm tn-text-bold tn-color-white tn-padding-top-sm tn-padding-bottom-sm"},[t._v(t._s(e.text))])],1)],1)],1)})),1),n("v-uni-view",{staticClass:"indication"},[t._l(t.swiperList,(function(e,i){return[n("v-uni-view",{key:i+"_0",staticClass:"spot",class:t.cardCur==i?"active":""})]}))],2),n("v-uni-view",{staticClass:"tn-flex tn-margin-top"},[n("v-uni-view",{staticClass:"tn-flex-1 tn-padding-sm tn-radius tn-margin-xs"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center"},[n("v-uni-view",{staticClass:"icon10__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-blue tn-color-white"},[n("v-uni-view",{staticClass:"tn-icon-gloves-fill"})],1),n("v-uni-view",{staticClass:"tn-color-black tn-text-df tn-text-center tn-padding-top-xs"},[n("v-uni-text",{staticClass:"tn-text-ellipsis"},[t._v("学习")])],1)],1)],1),n("v-uni-view",{staticClass:"tn-flex-1 tn-padding-sm tn-radius tn-margin-xs"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center"},[n("v-uni-view",{staticClass:"icon10__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-red tn-color-white"},[n("v-uni-view",{staticClass:"tn-icon-live-stream-fill"})],1),n("v-uni-view",{staticClass:"tn-color-black tn-text-df tn-text-center tn-padding-top-xs"},[n("v-uni-text",{staticClass:"tn-text-ellipsis"},[t._v("视频")])],1)],1)],1),n("v-uni-view",{staticClass:"tn-flex-1 tn-padding-sm tn-radius tn-margin-xs"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center"},[n("v-uni-view",{staticClass:"icon10__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-orange tn-color-white"},[n("v-uni-view",{staticClass:"tn-icon-image-text-fill"})],1),n("v-uni-view",{staticClass:"tn-color-black tn-text-df tn-text-center tn-padding-top-xs"},[n("v-uni-text",{staticClass:"tn-text-ellipsis"},[t._v("日志")])],1)],1)],1),n("v-uni-view",{staticClass:"tn-flex-1 tn-padding-sm tn-radius tn-margin-xs"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center"},[n("v-uni-view",{staticClass:"icon10__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-purple tn-color-white"},[n("v-uni-view",{staticClass:"tn-icon-topics-fill"})],1),n("v-uni-view",{staticClass:"tn-color-black tn-text-df tn-text-center tn-padding-top-xs"},[n("v-uni-text",{staticClass:"tn-text-ellipsis"},[t._v("话题")])],1)],1)],1),n("v-uni-view",{staticClass:"tn-flex-1 tn-padding-sm tn-radius tn-margin-xs"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center"},[n("v-uni-view",{staticClass:"icon10__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-cyan tn-color-white"},[n("v-uni-view",{staticClass:"tn-icon-chemistry"})],1),n("v-uni-view",{staticClass:"tn-color-black tn-text-df tn-text-center tn-padding-top-xs"},[n("v-uni-text",{staticClass:"tn-text-ellipsis"},[t._v("沉淀")])],1)],1)],1)],1),t._l(6,(function(e,i){return n("v-uni-view",{key:i,staticClass:"tn-margin study-shadow"},[n("v-uni-view",{staticClass:"tn-padding tn-flex tn-flex-col-center"},[n("v-uni-view",{staticClass:"tn-tag-content tn-shadow-blur tn-cool-bg-color-15 tn-margin-right tn-text-sm tn-text-bold"},[n("v-uni-text",{staticClass:"tn-padding-right-sm"},[t._v("#")]),t._v("前端")],1),n("v-uni-view",{staticClass:"tn-text-bold tn-text-lg"},[t._v("Flex前端基础布局知识一览")])],1),n("v-uni-view",{staticClass:"tn-flex tn-flex-col-center tn-flex-row-between tn-padding"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-2 justify-content-item tn-text-bold tn-text-lg"},[n("v-uni-view",{},[n("tn-avatar-group",{attrs:{lists:t.groupList,size:"sm"}})],1),n("v-uni-view",{staticClass:"tn-padding-left-sm"},[n("v-uni-text",[t._v("286人已学习")])],1)],1),n("v-uni-view",{staticClass:"tn-flex-1 justify-content-item tn-text-lg tn-text-right"},[n("v-uni-view",{staticClass:"tn-padding-bottom-xs tn-color-gray"},[t._v("免费")])],1)],1)],1)}))],2)},s=[]},"7bcd":function(t,e,n){"use strict";n.r(e);var i=n("7705"),a=n("7539");for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("4436");var r=n("f0c5"),o=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"00c267dc",null,!1,i["a"],void 0);e["default"]=o.exports},"867a":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 胶囊*/.tn-custom-nav-bar__back[data-v-00c267dc]{width:100%;height:100%;position:relative;display:flex;justify-content:space-evenly;align-items:center;box-sizing:border-box;background-color:rgba(0,0,0,.15);border-radius:%?1000?%;border:%?1?% solid hsla(0,0%,100%,.5);color:#fff;font-size:18px}.tn-custom-nav-bar__back .icon[data-v-00c267dc]{display:block;flex:1;margin:auto;text-align:center}.tn-custom-nav-bar__back[data-v-00c267dc]:before{content:" ";width:%?1?%;height:110%;position:absolute;top:22.5%;left:0;right:0;margin:auto;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;pointer-events:none;box-sizing:border-box;opacity:.7;background-color:#fff}\n/* 内容 */.study-wrap[data-v-00c267dc]{position:relative;z-index:1;margin-top:%?-90?%}\n/* 阴影 start*/.study-shadow[data-v-00c267dc]{border-radius:%?15?%;box-shadow:%?0?% %?0?% %?50?% %?0?% rgba(0,0,0,.07)}\n/* 悬浮 */.png-sussuspension[data-v-00c267dc]{-webkit-animation:suspension-data-v-00c267dc 3s ease-in-out infinite;animation:suspension-data-v-00c267dc 3s ease-in-out infinite}@-webkit-keyframes suspension-data-v-00c267dc{0%, 100%{-webkit-transform:translate(0);transform:translate(0)}50%{-webkit-transform:translate(-.8rem,1rem);transform:translate(-.8rem,1rem)}}@keyframes suspension-data-v-00c267dc{0%, 100%{-webkit-transform:translate(0);transform:translate(0)}50%{-webkit-transform:translate(-.8rem,1rem);transform:translate(-.8rem,1rem)}}.text-sussuspension[data-v-00c267dc]{-webkit-animation:suspension2-data-v-00c267dc 4s ease-in-out infinite;animation:suspension2-data-v-00c267dc 4s ease-in-out infinite}@-webkit-keyframes suspension2-data-v-00c267dc{0%, 100%{-webkit-transform:translate(0);transform:translate(0)}50%{-webkit-transform:translateY(1rem);transform:translateY(1rem)}}@keyframes suspension2-data-v-00c267dc{0%, 100%{-webkit-transform:translate(0);transform:translate(0)}50%{-webkit-transform:translateY(1rem);transform:translateY(1rem)}}\n/* 轮播视觉差 start */.card-swiper[data-v-00c267dc]{height:%?800?%!important}.card-swiper uni-swiper-item[data-v-00c267dc]{width:%?750?%!important;left:%?0?%;box-sizing:border-box;overflow:initial}.card-swiper uni-swiper-item .swiper-item[data-v-00c267dc]{width:100%;display:block;height:100%;-webkit-transform:scale(1);transform:scale(1);transition:all .2s ease-in 0s;will-change:transform;overflow:hidden}.card-swiper uni-swiper-item.cur .swiper-item[data-v-00c267dc]{-webkit-transform:none;transform:none;transition:all .2s ease-in 0s;will-change:transform}.card-swiper uni-swiper-item .swiper-item2[data-v-00c267dc]{margin-top:%?-540?%;width:100%;display:block;height:100%;border-radius:%?0?%;-webkit-transform:translate(%?140?%,%?20?%) scale(.3);transform:translate(%?140?%,%?20?%) scale(.3);transition:all .6s ease 0s;will-change:transform;overflow:hidden}.card-swiper uni-swiper-item.cur .swiper-item2[data-v-00c267dc]{margin-top:%?-650?%;width:100%;-webkit-transform:translate(%?180?%,%?0?%) scale(.5);transform:translate(%?180?%,%?0?%) scale(.5);transition:all .6s ease 0s;will-change:transform}.card-swiper uni-swiper-item .swiper-item-text[data-v-00c267dc]{margin-top:%?-550?%;width:100%;display:block;height:50%;border-radius:%?10?%;-webkit-transform:translate(%?100?%,%?-60?%) scale(.9);transform:translate(%?100?%,%?-60?%) scale(.9);transition:all .6s ease 0s;will-change:transform;overflow:hidden}.card-swiper uni-swiper-item.cur .swiper-item-text[data-v-00c267dc]{margin-top:%?-610?%;width:100%;-webkit-transform:translate(%?0?%,%?60?%) scale(.9);transform:translate(%?0?%,%?60?%) scale(.9);transition:all .6s ease 0s;will-change:transform}.image-banner[data-v-00c267dc]{display:flex;align-items:center;justify-content:center}.image-banner uni-image[data-v-00c267dc]{width:100%;height:100%}\n/* 轮播指示点 start*/.indication[data-v-00c267dc]{z-index:9999;width:100%;height:%?36?%;position:absolute;display:flex;flex-direction:row;align-items:center;justify-content:center}.spot[data-v-00c267dc]{background-color:#fff;opacity:.6;width:%?10?%;height:%?10?%;border-radius:%?20?%;left:%?-265?%;top:%?-150?%;margin:0 %?8?%!important;position:relative}.spot.active[data-v-00c267dc]{opacity:1;width:%?30?%;background-color:#fff}\n/* 圆角*/.study-radius[data-v-00c267dc]{border-radius:%?15?%}\n/* 阴影*/.study-shadow[data-v-00c267dc]{box-shadow:%?0?% %?0?% %?80?% %?0?% rgba(0,0,0,.07)}\n/* 图标容器10 start */.icon10__item[data-v-00c267dc]{width:30%;background-color:#fff;border-radius:%?10?%;padding:%?30?%;margin:%?20?% %?10?%;-webkit-transform:scale(1);transform:scale(1);transition:-webkit-transform .3s linear;transition:transform .3s linear;transition:transform .3s linear,-webkit-transform .3s linear;will-change:transform;-webkit-transform-origin:center center;transform-origin:center center}.icon10__item--icon[data-v-00c267dc]{width:%?84?%;height:%?65?%;font-size:%?45?%;border-radius:%?200?%;margin-bottom:%?18?%;position:relative;z-index:1}.icon10__item--icon[data-v-00c267dc]::after{content:" ";position:absolute;z-index:-1;width:100%;height:100%;left:0;bottom:0;border-radius:inherit;opacity:1;-webkit-transform:scale(1);transform:scale(1);background-size:100% 100%;background-image:url(https://resource.tuniaokj.com/images/cool_bg_image/icon_bg6.png)}\n/* 图标容器10 end */\n/* 标签内容 start*/.tn-tag-content[data-v-00c267dc]{border-radius:%?8?% %?25?% %?25?% %?8?%;display:inline-block;line-height:%?35?%;padding:%?8?% %?25?%;color:hsla(0,0%,100%,.8)}',""]),t.exports=e},e86e:function(t,e,n){var i=n("867a");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("a89a0c32",i,!0,{sourceMap:!1,shadowMode:!1})}}]);