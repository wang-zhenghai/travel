(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["circlePages-build"],{"028b":function(t,e,a){var n=a("1a43");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("4d8b943b",n,!0,{sourceMap:!1,shadowMode:!1})},"0e95":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={watch:{accept:{immediate:!0,handler:function(t){"all"!==t&&"media"!==t||uni.$u.error("只有微信小程序才支持把accept配置为all、media之一")}}}};e.default=n},"0fe6":function(t,e,a){"use strict";a.r(e);var n=a("3f1a"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"11f3":function(t,e,a){"use strict";var n=a("028b"),i=a.n(n);i.a},"12a3":function(t,e,a){"use strict";a.r(e);var n=a("1710"),i=a("0fe6");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("11f3");var s=a("f0c5"),u=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"04537735",null,!1,n["a"],void 0);e["default"]=u.exports},1710:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var n={tnNavBar:a("aa86").default,uUpload:a("2f48").default,tnButton:a("e6e0").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"template-build tn-safe-area-inset-bottom"},[a("tn-nav-bar",{attrs:{fixed:!0,alpha:!0,customBack:!0}},[a("v-uni-view",{staticClass:"tn-custom-nav-bar__back",attrs:{slot:"back"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}},slot:"back"},[a("v-uni-text",{staticClass:"icon tn-icon-left"}),a("v-uni-text",{staticClass:"icon tn-icon-home-capsule-fill"})],1)],1),a("v-uni-view",{staticClass:"tn-safe-area-inset-bottom",style:{paddingTop:t.vuex_custom_bar_height+"px"}},[a("v-uni-view",{staticClass:"tn-margin tn-bg-gray--light",staticStyle:{"border-radius":"10rpx",padding:"20rpx 30rpx"}},[a("v-uni-input",{attrs:{placeholder:"请填写视频标题 (12字内)",name:"input","placeholder-style":"color:#AAAAAA"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),a("v-uni-view",{staticClass:"tn-margin tn-bg-gray--light tn-padding",staticStyle:{"border-radius":"10rpx"}},[a("v-uni-textarea",{attrs:{maxlength:"500",placeholder:"请输入视频介绍 (500字内)","placeholder-style":"color:#AAAAAA"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),a("v-uni-view",{staticClass:"tn-flex tn-flex-row-between tn-flex-col-center tn-padding-top-xl tn-margin"},[a("v-uni-view",{staticClass:"tn-flex justify-content-item"},[a("v-uni-view",{staticClass:"tn-bg-black tn-color-white tn-text-center",staticStyle:{"border-radius":"100rpx","margin-right":"8rpx",width:"45rpx",height:"45rpx","line-height":"45rpx"}},[a("v-uni-text",{staticClass:"tn-icon-image",staticStyle:{"font-size":"30rpx"}})],1),a("v-uni-view",{},[a("v-uni-text",{staticClass:"tn-text-lg tn-padding-right-xs tn-text-bold"},[t._v("上传视频")])],1)],1),a("v-uni-view",{staticClass:"justify-content-item tn-text-df tn-color-grey",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"tn-padding-xs"},[t._v("清空上传")]),a("v-uni-text",{staticClass:"tn-icon-delete"})],1)],1),a("v-uni-view",{staticClass:"tn-margin-left tn-padding-top-xs"},[t.uploadFilePath?t._e():a("u-upload",{attrs:{fileList:t.fileList,maxCount:"1",accept:"video",uploadText:"上传视频"},on:{afterRead:function(e){arguments[0]=e=t.$handleEvent(e),t.afterRead.apply(void 0,arguments)}}}),t.uploadFilePath?a("v-uni-video",{attrs:{src:t.uploadFilePath,"show-fullscreen-btn":!0,"enable-play-gesture":!0}}):t._e()],1),a("v-uni-view",{staticClass:"tn-flex tn-flex-row-between tn-flex-col-center tn-padding-top-xl tn-margin"},[a("v-uni-view",{staticClass:"tn-flex justify-content-item"},[a("v-uni-view",{staticClass:"tn-bg-black tn-color-white tn-text-center",staticStyle:{"border-radius":"100rpx","margin-right":"8rpx",width:"45rpx",height:"45rpx","line-height":"45rpx"}},[a("v-uni-text",{staticClass:"tn-icon-assort",staticStyle:{"font-size":"30rpx"}})],1),a("v-uni-view",{staticClass:"tn-text-lg tn-padding-right-xs tn-text-bold"},[t._v("视频分类")])],1),a("v-uni-view",{staticClass:"justify-content-item tn-text-df tn-color-grey"},[a("v-uni-text",{staticClass:"tn-padding-xs"},[t._v("自定义")]),a("v-uni-text",{staticClass:"tn-icon-right"})],1)],1),a("v-uni-view",{staticClass:"tn-tag-content tn-margin tn-text-justify tn-padding-bottom"},t._l(t.tagList,(function(e,n){return a("v-uni-view",{key:n,staticClass:"tn-tag-content__item tn-margin-right tn-round tn-text-sm tn-text-bold",class:["tn-bg-"+e.color+"--light tn-color-"+e.color]},[a("v-uni-text",{staticClass:"tn-tag-content__item--prefix"},[t._v("#")]),t._v(t._s(e.title))],1)})),1),a("v-uni-view",{staticClass:"tn-flex tn-footerfixed"},[a("v-uni-view",{staticClass:"tn-flex-1 justify-content-item tn-margin-sm tn-text-center"},[a("tn-button",{attrs:{backgroundColor:"#00FFC6",padding:"40rpx 0",width:"60%",shadow:!0,fontBold:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"tn-color-black"},[t._v("发 布")]),a("v-uni-text",{staticClass:"tn-icon-topics tn-padding-left-xs tn-color-black"})],1)],1)],1)],1),a("v-uni-view",{staticClass:"tn-tabbar-height"})],1)},o=[]},"194e":function(t,e,a){"use strict";var n=a("26a8"),i=a.n(n);i.a},1992:function(t,e,a){var n=a("a852");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("198d12fd",n,!0,{sourceMap:!1,shadowMode:!1})},"1a43":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 胶囊*/.tn-custom-nav-bar__back[data-v-04537735]{width:100%;height:100%;position:relative;display:flex;justify-content:space-evenly;align-items:center;box-sizing:border-box;background-color:rgba(0,0,0,.15);border-radius:%?1000?%;border:%?1?% solid hsla(0,0%,100%,.5);color:#fff;font-size:18px}.tn-custom-nav-bar__back .icon[data-v-04537735]{display:block;flex:1;margin:auto;text-align:center}.tn-custom-nav-bar__back[data-v-04537735]:before{content:" ";width:%?1?%;height:110%;position:absolute;top:22.5%;left:0;right:0;margin:auto;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;pointer-events:none;box-sizing:border-box;opacity:.7;background-color:#fff}\n/* 底部悬浮按钮 start*/.tn-tabbar-height[data-v-04537735]{min-height:%?100?%;height:calc(%?120?% + env(safe-area-inset-bottom) / 2)}.tn-footerfixed[data-v-04537735]{position:fixed;width:100%;bottom:calc(%?30?% + env(safe-area-inset-bottom));z-index:1024;box-shadow:0 %?1?% %?6?% transparent}\n/* 底部悬浮按钮 end*/\n/* 标签内容 start*/.tn-tag-content__item[data-v-04537735]{display:inline-block;line-height:%?45?%;padding:%?10?% %?30?%;margin:%?20?% %?20?% %?5?% %?0?%}.tn-tag-content__item--prefix[data-v-04537735]{padding-right:%?10?%}\n/* 标签内容 end*/',""]),t.exports=e},"1faf":function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("c7eb")),o=n(a("1da1"));a("a9e3");var s=n(a("9edb")),u={name:"tn-nav-bar",mixins:[s.default],props:{zIndex:{type:Number,default:0},height:{type:Number,default:0},unit:{type:String,default:"px"},isBack:{type:Boolean,default:!0},backIcon:{type:String,default:"left"},backTitle:{type:String,default:"返回"},alpha:{type:Boolean,default:!1},fixed:{type:Boolean,default:!0},bottomShadow:{type:Boolean,default:!0},customBack:{type:Boolean,default:!1},beforeBack:{type:Function,default:null}},computed:{navBarStyle:function(){var t={};return t.height=0===this.height?this.customBarHeight+this.unit:this.height+this.unit,this.fixed&&(t.position="fixed"),t.zIndex=this.elZIndex,t},barClass:function(){var t="";return this.backgroundColorClass&&(t+=" ".concat(this.backgroundColorClass)),this.fontColorClass&&(t+="".concat(this.fontColorClass)),this.fixed&&(t+=" tn-custom-nav-bar__bar--fixed"),this.alpha&&(t+=" tn-custom-nav-bar__bar--alpha"),this.bottomShadow&&(t+=" tn-custom-nav-bar__bar--bottom-shadow"),t},barStyle:function(){var t={};return t.height=0===this.height?this.customBarHeight+this.unit:this.height+this.unit,this.fixed&&(t.paddingTop=this.statusBarHeight+"px"),this.backgroundColorClass||(t.backgroundColor=""!==this.backgroundColor?this.backgroundColor:"#FFFFFF"),!this.fontColorClass&&this.fontColor&&(t.color=this.fontColor),t.zIndex=this.elZIndex,t},contentStyle:function(){var t={};if(t.top=this.fixed?this.statusBarHeight+"px":"0px",t.height=0===this.height?this.customBarHeight-this.statusBarHeight+this.unit:this.height+this.unit,t.lineHeight=t.height,this.isBack)if(this.customBack){var e=2*(this.customBackStyleInfo.width+this.customBackStyleInfo.left);t.width="calc(100% - ".concat(e,"px)")}else t.width="calc(100% - 340rpx)";else t.width="100%";return t},elZIndex:function(){return this.zIndex?this.zIndex:this.$t.zIndex.navbar}},data:function(){return{statusBarHeight:0,customBarHeight:0,customBackStyleInfo:{width:86,height:32,left:15}}},mounted:function(){this.updateNavBarInfo()},created:function(){},methods:{updateNavBarInfo:function(){var t=this;return(0,o.default)((0,i.default)().mark((function e(){var a,n,o;return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.vuex_custom_bar_height,n=t.vuex_status_bar_height,a){e.next=15;break}return e.prev=3,e.next=6,t.$t.updateCustomBar();case 6:o=e.sent,a=o.customBarHeight,n=o.statusBarHeight,e.next=15;break;case 11:return e.prev=11,e.t0=e["catch"](3),setTimeout((function(){t.updateNavBarInfo()}),10),e.abrupt("return");case 15:t&&t.$t.vuex("vuex_status_bar_height",n),t&&t.$t.vuex("vuex_custom_bar_height",a),t.customBarHeight=a,t.statusBarHeight=n;case 19:case"end":return e.stop()}}),e,null,[[3,11]])})))()},handlerBack:function(){var t=this;return(0,o.default)((0,i.default)().mark((function e(){var a;return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.beforeBack||"function"!==typeof t.beforeBack){e.next=10;break}if(a=t.beforeBack.bind(t.$t.$parent.call(t))(),!a||"function"!==typeof a.then){e.next=7;break}return e.next=5,a.then((function(e){t.navBack()})).catch((function(t){}));case 5:e.next=8;break;case 7:!0===a&&t.navBack();case 8:e.next=11;break;case 10:t.navBack();case 11:case"end":return e.stop()}}),e)})))()},navBack:function(){var t=getCurrentPages();if(t&&t.length>0){var e=t[0];1!=t.length||e.route&&"pages/index/index"==e.route?uni.navigateBack({delta:1}):uni.reLaunch({url:"/pages/index/index"})}else uni.reLaunch({url:"/pages/index/index"})}}};e.default=u},"26a8":function(t,e,a){var n=a("4a91");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("5510b92a",n,!0,{sourceMap:!1,shadowMode:!1})},"2f48":function(t,e,a){"use strict";a.r(e);var n=a("7dfa"),i=a("9afa");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("194e");var s=a("f0c5"),u=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"4070810b",null,!1,n["a"],void 0);e["default"]=u.exports},"3f1a":function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("88ff")),o={name:"TemplateBuild",mixins:[i.default],data:function(){return{tagList:[{color:"red",title:"学校"},{color:"cyan",title:"情感"},{color:"blue",title:"电影"},{color:"green",title:"美食"},{color:"orange",title:"景点"},{color:"purplered",title:"旅游"},{color:"purple",title:"宠物"},{color:"brown",title:"设计"},{color:"yellowgreen",title:"摄影"},{color:"grey",title:"运动"},{color:"orangered",title:"其他"}],uploadFilePath:"",title:"",content:""}},onLoad:function(){},methods:{submit:function(){console.log(this.title),console.log(this.content)},afterRead:function(t){var e=uni.uploadFile({header:{"Content-Type":"multipart/form-data"},url:"https://www.wangzh.work:9999/upload",filePath:t.file[0].url,name:"file",success:function(t){var e=JSON.parse(t.data);this.uploadFilePath=e.data},fail:function(t){console.log(t),uni.$showMsg("上传视频失败~")}});e.onProgressUpdate((function(t){console.log("上传进度"+t.progress),uni.showLoading({title:"已上传"+t.progress+"%"}),100===t.progress&&(uni.hideLoading(),uni.$showMsg("上传视频成功~"))}))},clear:function(){this.uploadFilePath=""},tn:function(t){uni.navigateTo({url:t})}}};e.default=o},"3f5a":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3");var n={props:{accept:{type:String,default:uni.$u.props.upload.accept},capture:{type:[String,Array],default:uni.$u.props.upload.capture},compressed:{type:Boolean,default:uni.$u.props.upload.compressed},camera:{type:String,default:uni.$u.props.upload.camera},maxDuration:{type:Number,default:uni.$u.props.upload.maxDuration},uploadIcon:{type:String,default:uni.$u.props.upload.uploadIcon},uploadIconColor:{type:String,default:uni.$u.props.upload.uploadIconColor},useBeforeRead:{type:Boolean,default:uni.$u.props.upload.useBeforeRead},afterRead:{type:Function,default:null},beforeRead:{type:Function,default:null},previewFullImage:{type:Boolean,default:uni.$u.props.upload.previewFullImage},maxCount:{type:[String,Number],default:uni.$u.props.upload.maxCount},disabled:{type:Boolean,default:uni.$u.props.upload.disabled},imageMode:{type:String,default:uni.$u.props.upload.imageMode},name:{type:String,default:uni.$u.props.upload.name},sizeType:{type:Array,default:uni.$u.props.upload.sizeType},multiple:{type:Boolean,default:uni.$u.props.upload.multiple},deletable:{type:Boolean,default:uni.$u.props.upload.deletable},maxSize:{type:[String,Number],default:uni.$u.props.upload.maxSize},fileList:{type:Array,default:uni.$u.props.upload.fileList},uploadText:{type:String,default:uni.$u.props.upload.uploadText},width:{type:[String,Number],default:uni.$u.props.upload.width},height:{type:[String,Number],default:uni.$u.props.upload.height},previewImage:{type:Boolean,default:uni.$u.props.upload.previewImage}}};e.default=n},"4a91":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-view[data-v-4070810b], uni-scroll-view[data-v-4070810b], uni-swiper-item[data-v-4070810b]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-upload[data-v-4070810b]{display:flex;flex-direction:column;flex:1}.u-upload__wrap[data-v-4070810b]{display:flex;flex-direction:row;flex-wrap:wrap;flex:1}.u-upload__wrap__preview[data-v-4070810b]{border-radius:2px;margin:0 8px 8px 0;position:relative;overflow:hidden;display:flex;flex-direction:row}.u-upload__wrap__preview__image[data-v-4070810b]{width:80px;height:80px}.u-upload__wrap__preview__other[data-v-4070810b]{width:80px;height:80px;background-color:#f2f2f2;flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center}.u-upload__wrap__preview__other__text[data-v-4070810b]{font-size:11px;color:#909193;margin-top:2px}.u-upload__deletable[data-v-4070810b]{position:absolute;top:0;right:0;background-color:#373737;height:14px;width:14px;display:flex;flex-direction:row;border-bottom-left-radius:100px;align-items:center;justify-content:center;z-index:3}.u-upload__deletable__icon[data-v-4070810b]{position:absolute;-webkit-transform:scale(.7);transform:scale(.7);top:0;right:0;top:1px;right:0}.u-upload__success[data-v-4070810b]{position:absolute;bottom:0;right:0;display:flex;flex-direction:row;border-style:solid;border-top-color:transparent;border-left-color:transparent;border-bottom-color:#5ac725;border-right-color:#5ac725;border-width:9px;align-items:center;justify-content:center}.u-upload__success__icon[data-v-4070810b]{position:absolute;-webkit-transform:scale(.7);transform:scale(.7);bottom:-10px;right:-10px}.u-upload__status[data-v-4070810b]{position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.5);display:flex;flex-direction:column;align-items:center;justify-content:center}.u-upload__status__icon[data-v-4070810b]{position:relative;z-index:1}.u-upload__status__message[data-v-4070810b]{font-size:12px;color:#fff;margin-top:5px}.u-upload__button[data-v-4070810b]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:80px;height:80px;background-color:#f4f5f7;border-radius:2px;margin:0 8px 8px 0;box-sizing:border-box}.u-upload__button__text[data-v-4070810b]{font-size:11px;color:#909193;margin-top:2px}.u-upload__button--hover[data-v-4070810b]{background-color:#e6e7e9}.u-upload__button--disabled[data-v-4070810b]{opacity:.5}',""]),t.exports=e},5968:function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("d81d"),a("ac1f"),a("00b4"),a("d3b7"),a("4de4");var i=a("746e"),o=n(a("0e95")),s=n(a("3f5a")),u={name:"u-upload",mixins:[uni.$u.mpMixin,uni.$u.mixin,o.default,s.default],data:function(){return{lists:[],isInCount:!0}},watch:{fileList:{immediate:!0,handler:function(){this.formatFileList()}}},methods:{formatFileList:function(){var t=this,e=this.fileList,a=void 0===e?[]:e,n=this.maxCount,i=a.map((function(e){return Object.assign(Object.assign({},e),{isImage:"image"===t.accept||uni.$u.test.image(e.url||e.thumb),isVideo:"video"===t.accept||uni.$u.test.video(e.url||e.thumb),deletable:"boolean"===typeof e.deletable?e.deletable:t.deletable})}));this.lists=i,this.isInCount=i.length<n},chooseFile:function(){var t=this,e=this.maxCount,a=this.multiple,n=this.lists,o=this.disabled;if(!o){var s;try{s=uni.$u.test.array(this.capture)?this.capture:this.capture.split(",")}catch(u){s=[]}(0,i.chooseFile)(Object.assign({accept:this.accept,multiple:this.multiple,capture:s,compressed:this.compressed,maxDuration:this.maxDuration,sizeType:this.sizeType,camera:this.camera},{maxCount:e-n.length})).then((function(e){t.onBeforeRead(a?e:e[0])})).catch((function(e){t.$emit("error",e)}))}},onBeforeRead:function(t){var e=this,a=this.beforeRead,n=this.useBeforeRead,i=!0;uni.$u.test.func(a)&&(i=a(t,this.getDetail())),n&&(i=new Promise((function(a,n){e.$emit("beforeRead",Object.assign(Object.assign({file:t},e.getDetail()),{callback:function(t){t?a():n()}}))}))),i&&(uni.$u.test.promise(i)?i.then((function(a){return e.onAfterRead(a||t)})):this.onAfterRead(t))},getDetail:function(t){return{name:this.name,index:null==t?this.fileList.length:t}},onAfterRead:function(t){var e=this.maxSize,a=this.afterRead,n=Array.isArray(t)?t.some((function(t){return t.size>e})):t.size>e;n?this.$emit("oversize",Object.assign({file:t},this.getDetail())):("function"===typeof a&&a(t,this.getDetail()),this.$emit("afterRead",Object.assign({file:t},this.getDetail())))},deleteItem:function(t){this.$emit("delete",Object.assign(Object.assign({},this.getDetail(t)),{file:this.fileList[t]}))},onPreviewImage:function(t){var e=this;t.isImage&&this.previewFullImage&&uni.previewImage({urls:this.lists.filter((function(t){return"image"===e.accept||uni.$u.test.image(t.url||t.thumb)})).map((function(t){return t.url||t.thumb})),current:t.url||t.thumb,fail:function(){uni.$u.toast("预览图片失败")}})},onPreviewVideo:function(t){if(this.data.previewFullImage){var e=t.currentTarget.dataset.index,a=this.data.lists;wx.previewMedia({sources:a.filter((function(t){return isVideoFile(t)})).map((function(t){return Object.assign(Object.assign({},t),{type:"video"})})),current:e,fail:function(){uni.$u.toast("预览视频失败")}})}},onClickPreview:function(t){var e=t.currentTarget.dataset.index,a=this.data.lists[e];this.$emit("clickPreview",Object.assign(Object.assign({},a),this.getDetail(e)))}}};e.default=u},"746e":function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.chooseFile=function(t){var e=t.accept,a=t.multiple,n=t.capture,u=t.compressed,r=t.maxDuration,l=t.sizeType,c=t.camera,d=t.maxCount;return new Promise((function(t,f){switch(e){case"image":uni.chooseImage({count:a?Math.min(d,9):1,sourceType:n,sizeType:l,success:function(e){return t(function(t){return t.tempFiles.map((function(t){return(0,i.default)((0,i.default)({},o(t,["path"])),{},{type:"image",url:t.path,thumb:t.path,size:t.size,name:t.name})}))}(e))},fail:f});break;case"video":uni.chooseVideo({sourceType:n,compressed:u,maxDuration:r,camera:c,success:function(e){return t(function(t){return[(0,i.default)((0,i.default)({},o(t,["tempFilePath","thumbTempFilePath","errMsg"])),{},{type:"video",url:t.tempFilePath,thumb:t.thumbTempFilePath,size:t.size,name:t.name})]}(e))},fail:f});break;case"file":uni.chooseFile({count:a?d:1,type:e,success:function(e){return t(s(e))},fail:f});break;default:uni.chooseFile({count:a?d:1,type:"all",success:function(e){return t(s(e))},fail:f})}}))};var i=n(a("5530"));function o(t,e){return["[object Object]","[object File]"].includes(Object.prototype.toString.call(t))?Object.keys(t).reduce((function(a,n){return e.includes(n)||(a[n]=t[n]),a}),{}):{}}function s(t){return t.tempFiles.map((function(t){return(0,i.default)((0,i.default)({},o(t,["path"])),{},{url:t.path,size:t.size,name:t.name,type:t.type})}))}a("caad"),a("d3b7"),a("13d5"),a("b64b"),a("2532"),a("d81d")},"7dfa":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var n={uIcon:a("cc7a").default,uLoadingIcon:a("43c3").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"u-upload",style:[t.$u.addStyle(t.customStyle)]},[a("v-uni-view",{staticClass:"u-upload__wrap"},[t.previewImage?t._l(t.lists,(function(e,n){return a("v-uni-view",{key:n,staticClass:"u-upload__wrap__preview"},[e.isImage||e.type&&"image"===e.type?a("v-uni-image",{staticClass:"u-upload__wrap__preview__image",style:[{width:t.$u.addUnit(t.width),height:t.$u.addUnit(t.height)}],attrs:{src:e.thumb||e.url,mode:t.imageMode},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onPreviewImage(e)}}}):a("v-uni-view",{staticClass:"u-upload__wrap__preview__other"},[a("u-icon",{attrs:{color:"#80CBF9",size:"26",name:e.isVideo||e.type&&"video"===e.type?"movie":"folder"}}),a("v-uni-text",{staticClass:"u-upload__wrap__preview__other__text"},[t._v(t._s(e.isVideo||e.type&&"video"===e.type?"视频":"文件"))])],1),"uploading"===e.status||"failed"===e.status?a("v-uni-view",{staticClass:"u-upload__status"},[a("v-uni-view",{staticClass:"u-upload__status__icon"},["failed"===e.status?a("u-icon",{attrs:{name:"close-circle",color:"#ffffff",size:"25"}}):a("u-loading-icon",{attrs:{size:"22",mode:"circle",color:"#ffffff"}})],1),e.message?a("v-uni-text",{staticClass:"u-upload__status__message"},[t._v(t._s(e.message))]):t._e()],1):t._e(),"uploading"!==e.status&&(t.deletable||e.deletable)?a("v-uni-view",{staticClass:"u-upload__deletable",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.deleteItem(n)}}},[a("v-uni-view",{staticClass:"u-upload__deletable__icon"},[a("u-icon",{attrs:{name:"close",color:"#ffffff",size:"10"}})],1)],1):t._e(),"success"===e.status?a("v-uni-view",{staticClass:"u-upload__success"},[a("v-uni-view",{staticClass:"u-upload__success__icon"},[a("u-icon",{attrs:{name:"checkmark",color:"#ffffff",size:"12"}})],1)],1):t._e()],1)})):t._e(),t.isInCount?[t.$slots.default||t.$slots.$default?a("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseFile.apply(void 0,arguments)}}},[t._t("default")],2):a("v-uni-view",{staticClass:"u-upload__button",class:[t.disabled&&"u-upload__button--disabled"],style:[{width:t.$u.addUnit(t.width),height:t.$u.addUnit(t.height)}],attrs:{"hover-class":t.disabled?"":"u-upload__button--hover","hover-stay-time":"150"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseFile.apply(void 0,arguments)}}},[a("u-icon",{attrs:{name:t.uploadIcon,size:"26",color:t.uploadIconColor}}),t.uploadText?a("v-uni-text",{staticClass:"u-upload__button__text"},[t._v(t._s(t.uploadText))]):t._e()],1)]:t._e()],2)],1)},o=[]},"9afa":function(t,e,a){"use strict";a.r(e);var n=a("5968"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},a852:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.tn-custom-nav-bar[data-v-1863a3a8]{display:block;position:relative}.tn-custom-nav-bar__bar[data-v-1863a3a8]{display:flex;position:relative;align-items:center;min-height:%?100?%;justify-content:space-between;min-height:0;box-shadow:%?0?% %?0?% %?0?%;z-index:9999}.tn-custom-nav-bar__bar--fixed[data-v-1863a3a8]{position:fixed;width:100%;top:0}.tn-custom-nav-bar__bar--alpha[data-v-1863a3a8]{background:transparent!important;box-shadow:none!important}.tn-custom-nav-bar__bar--bottom-shadow[data-v-1863a3a8]{box-shadow:%?0?% %?0?% %?80?% %?0?% rgba(0,0,0,.05)}.tn-custom-nav-bar__bar__action[data-v-1863a3a8]{display:flex;align-items:center;height:100%;justify-content:center;max-width:100%}.tn-custom-nav-bar__bar__action--nav-back[data-v-1863a3a8]{\n  /* position: absolute; */\n  /* top: 50%; */\n  /* left: 20rpx; */\n  /* margin-top: -15rpx; */padding:%?20?%;font-size:%?38?%;line-height:100%}.tn-custom-nav-bar__bar__action--nav-back-text[data-v-1863a3a8]{padding:%?20?% %?20?% %?20?% %?0?%}.tn-custom-nav-bar__bar__content[data-v-1863a3a8]{position:absolute;text-align:center;left:0;right:0;bottom:0;margin:auto;font-size:%?32?%;cursor:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}',""]),t.exports=e},a884:function(t,e,a){"use strict";var n=a("1992"),i=a.n(n);i.a},aa86:function(t,e,a){"use strict";a.r(e);var n=a("ea6c"),i=a("b1ec");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("a884");var s=a("f0c5"),u=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"1863a3a8",null,!1,n["a"],void 0);e["default"]=u.exports},b1ec:function(t,e,a){"use strict";a.r(e);var n=a("1faf"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},ea6c:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"tn-custom-nav-bar-class tn-custom-nav-bar",style:[t.navBarStyle]},[a("v-uni-view",{staticClass:"tn-custom-nav-bar__bar",class:[t.barClass],style:[t.barStyle]},[t.isBack?a("v-uni-view",[t.customBack?a("v-uni-view",[a("v-uni-view",{style:{width:t.customBackStyleInfo.width+"px",height:t.customBackStyleInfo.height+"px",marginLeft:t.customBackStyleInfo.left+"px"}},[t._t("back")],2)],1):a("v-uni-view",{staticClass:"tn-custom-nav-bar__bar__action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlerBack.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"tn-custom-nav-bar__bar__action--nav-back",class:["tn-icon-"+t.backIcon]}),t.backTitle?a("v-uni-text",{staticClass:"tn-custom-nav-bar__bar__action--nav-back-text"},[t._v(t._s(t.backTitle))]):t._e()],1)],1):t._e(),a("v-uni-view",{staticClass:"tn-custom-nav-bar__bar__content",style:[t.contentStyle]},[t._t("default")],2),a("v-uni-view",[t._t("right")],2)],1)],1)},i=[]}}]);