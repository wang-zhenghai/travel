(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["tuniao-ui/components/tn-swiper/tn-swiper"],{"0064":function(t,e,i){"use strict";i.r(e);var n=i("6017"),o=i("f79b");for(var r in o)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(r);i("3a8b");var a=i("f0c5"),u=Object(a["a"])(o["default"],n["b"],n["c"],!1,null,"46c9ad4f",null,!1,n["a"],void 0);e["default"]=u.exports},"3a8b":function(t,e,i){"use strict";var n=i("df54"),o=i.n(n);o.a},6017:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=(t._self._c,t.__get_style([t.swiperStyle])),n=t.__map(t.list,(function(e,i){var n=t.__get_orig(e),o=t.title&&e[t.titleName]?t.__get_style([t.titleStyle]):null;return{$orig:n,s1:o}})),o=t.__get_style([t.indicatorStyle]),r="number"===t.mode?t.list.length:null;t.$mp.data=Object.assign({},{$root:{s0:i,l0:n,s2:o,g0:r}})},o=[]},b2e5:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"tn-swiper",props:{list:{type:Array,default:function(){return[]}},current:{type:Number,default:0},height:{type:Number,default:250},backgroundColor:{type:String,default:"transparent"},name:{type:String,default:"image"},title:{type:Boolean,default:!1},titleName:{type:String,default:"title"},titleStyle:{type:Object,default:function(){return{}}},radius:{type:Number,default:8},mode:{type:String,default:"round"},indicatorPosition:{type:String,default:"bottomCenter"},effect3d:{type:Boolean,default:!1},effect3dPreviousSpacing:{type:Number,default:50},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},duration:{type:Number,default:500},circular:{type:Boolean,default:!0},imageMode:{type:String,default:"aspectFill"}},computed:{backgroundColorStyle:function(){return this.$t.color.getBackgroundColorStyle(this.backgroundColor)},backgroundColorClass:function(){return this.$t.color.getBackgroundColorInternalClass(this.backgroundColor)},swiperStyle:function(){var t={};return this.backgroundColorStyle&&(t.backgroundColor=this.backgroundColorStyle),this.height&&(t.height=this.height+"rpx"),t},indicatorStyle:function(){var t={};return"topLeft"!==this.indicatorPosition&&"bottomLeft"!==this.indicatorPosition||(t.justifyContent="flex-start"),"topCenter"!==this.indicatorPosition&&"bottomCenter"!==this.indicatorPosition||(t.justifyContent="center"),"topRight"!==this.indicatorPosition&&"bottomRight"!==this.indicatorPosition||(t.justifyContent="flex-end"),["topLeft","topCenter","topRight"].indexOf(this.indicatorPosition)>=0?(t.top="12rpx",t.bottom="auto"):(t.top="auto",t.bottom="12rpx"),t.padding="0 ".concat(this.effect3d?"74rpx":"24rpx"),t},swiperTitleStyle:function(){var t={};return"none"!==this.mode&&""!==this.mode||(t.paddingBottom="12rpx"),["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPosition)>=0&&"number"===this.mode?t.paddingBottom="60rpx":["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPosition)>=0&&"number"!==this.mode?t.paddingBottom="40rpx":t.paddingBottom="12rpx",t=Object.assign(t,this.titleStyle),t}},data:function(){return{swiperIndex:this.current}},watch:{list:function(t,e){t.length!==e.length&&(this.swiperIndex=0)},current:function(t){this.swiperIndex=t}},methods:{click:function(t){this.$emit("click",t)},change:function(t){var e=t.detail.current;this.swiperIndex=e,this.$emit("change",e)}}};e.default=n},df54:function(t,e,i){},f79b:function(t,e,i){"use strict";i.r(e);var n=i("b2e5"),o=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'tuniao-ui/components/tn-swiper/tn-swiper-create-component',
    {
        'tuniao-ui/components/tn-swiper/tn-swiper-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("0064"))
        })
    },
    [['tuniao-ui/components/tn-swiper/tn-swiper-create-component']]
]);
