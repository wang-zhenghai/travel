(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["tuniao-ui/components/tn-button/tn-button"],{"1d5e":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i("9edb")),a={mixins:[o.default],name:"tn-button",behaviors:["wx://form-field-button"],props:{index:{type:[Number,String],default:0},shape:{type:String,default:"default"},shadow:{type:Boolean,default:!1},width:{type:String,default:"auto"},height:{type:String,default:""},size:{type:String,default:""},fontBold:{type:Boolean,default:!1},padding:{type:String,default:"0 30rpx"},margin:{type:String,default:""},plain:{type:Boolean,default:!1},border:{type:Boolean,default:!0},borderBold:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},formType:{type:String,default:""},openType:{type:String,default:""},blockRepeatClick:{type:Boolean,default:!1}},computed:{buttonClass:function(){var t="";switch(this.shape){case"icon":case"round":t+=" tn-round";break}if(this.shadow)if(""!==this.backgroundColorClass&&-1!=this.backgroundColorClass.indexOf("tn-bg")){var e=this.backgroundColor.slice(this.backgroundColor.lastIndexOf("-")+1);t+=" tn-shadow-".concat(e)}else t+=" tn-shadow-blur";if(this.fontBold&&(t+=" tn-text-bold"),this.plain&&(t+=" tn-btn--plain",this.border&&(t+=" tn-border-solid",this.borderBold&&(t+=" tn-bold-border"),""!==this.backgroundColor&&this.backgroundColor.includes("tn-bg")))){var i=this.backgroundColor.slice(this.backgroundColor.lastIndexOf("-")+1);t+=" tn-border-".concat(i)}return t},buttonStyle:function(){var t={};switch(this.size){case"sm":t.padding="0 20rpx",t.fontSize="22rpx",t.height=this.height||"48rpx";break;case"lg":t.padding="0 40rpx",t.fontSize="32rpx",t.height=this.height||"80rpx";break;default:t.padding="0 30rpx",t.fontSize="28rpx",t.height=this.height||"64rpx"}return this.padding&&(t.padding=this.padding),this.margin&&(t.margin=this.margin),this.fontSize&&(t.fontSize=this.fontSize+this.fontUnit),t.width="icon"===this.shape?t.height:this.width,t.padding="icon"===this.shape?"0":t.padding,this.fontColorStyle&&(t.color=this.fontColorStyle),this.backgroundColorClass||(this.plain?t.borderColor=this.backgroundColorStyle||"#080808":t.backgroundColor=this.backgroundColorStyle||"#FFFFFF"),this.shadow&&!this.backgroundColorClass&&(-1!=this.backgroundColorStyle.indexOf("#")?t.boxShadow="6rpx 6rpx 8rpx ".concat(this.backgroundColorStyle||"#000000","10"):-1==this.backgroundColorStyle.indexOf("rgb")&&-1==this.backgroundColorStyle.indexOf("rgba")&&this.backgroundColorStyle||(t.boxShadow="6rpx 6rpx 8rpx ".concat(this.backgroundColorStyle||"rgba(0, 0, 0, 0.1)"))),t}},data:function(){return{clickTime:0,clickIntervalTime:200}},methods:{handleClick:function(){var t=this;if(!this.disabled){if(this.blockRepeatClick){var e=(new Date).getTime();if(e-this.clickTime<=this.clickIntervalTime)return;this.clickTime=e,setTimeout((function(){t.clickTime=0}),this.clickIntervalTime)}this.$emit("click",{index:Number(this.index)}),this.$emit("tap",{index:Number(this.index)})}},handleGetUserInfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,i=void 0===e?{}:e;this.$emit("getuserinfo",i)},handleContact:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,i=void 0===e?{}:e;this.$emit("contact",i)},handleGetPhoneNumber:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,i=void 0===e?{}:e;this.$emit("getphonenumber",i)},handleError:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,i=void 0===e?{}:e;this.$emit("error",i)}}};e.default=a},"4f78":function(t,e,i){},"88ef":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=(this._self._c,this.__get_style([this.buttonStyle]));this.$mp.data=Object.assign({},{$root:{s0:e}})},o=[]},a86d:function(t,e,i){"use strict";var n=i("4f78"),o=i.n(n);o.a},d5a8:function(t,e,i){"use strict";i.r(e);var n=i("1d5e"),o=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},e6e0:function(t,e,i){"use strict";i.r(e);var n=i("88ef"),o=i("d5a8");for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("a86d");var r=i("f0c5"),d=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"307ede4b",null,!1,n["a"],void 0);e["default"]=d.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'tuniao-ui/components/tn-button/tn-button-create-component',
    {
        'tuniao-ui/components/tn-button/tn-button-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("e6e0"))
        })
    },
    [['tuniao-ui/components/tn-button/tn-button-create-component']]
]);
