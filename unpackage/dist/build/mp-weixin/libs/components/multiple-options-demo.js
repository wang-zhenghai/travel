(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["libs/components/multiple-options-demo"],{3601:function(t,n,i){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"multiple-options-demo",props:{list:{type:Array,default:function(){return[]}}},data:function(){return{tuniaoColorList:["red","purplered","purple","bluepurple","aquablue","blue","indigo","cyan","teal","green","orange","orangered"],listData:[]}},watch:{list:function(t){this.initList()}},created:function(){this.initList()},methods:{initList:function(){var t=this;this.listData=this.list.map((function(n,i){return n.bgColorIndex=t.getBgNum(),n.mainIcon=(null===n||void 0===n?void 0:n.mainIcon)||"computer-fill",n.subIcon=(null===n||void 0===n?void 0:n.subIcon)||"share",n}))},navOptionsPage:function(n){t.navigateTo({url:n})},getBgNum:function(){return Math.floor(Math.random()*this.tuniaoColorList.length)}}};n.default=i}).call(this,i("543d")["default"])},7759:function(t,n,i){},"943c":function(t,n,i){"use strict";var e=i("7759"),o=i.n(e);o.a},ac4f:function(t,n,i){"use strict";i.d(n,"b",(function(){return e})),i.d(n,"c",(function(){return o})),i.d(n,"a",(function(){}));var e=function(){var t=this.$createElement;this._self._c},o=[]},c554:function(t,n,i){"use strict";i.r(n);var e=i("ac4f"),o=i("e794");for(var u in o)["default"].indexOf(u)<0&&function(t){i.d(n,t,(function(){return o[t]}))}(u);i("943c");var a=i("f0c5"),r=Object(a["a"])(o["default"],e["b"],e["c"],!1,null,"111e78d5",null,!1,e["a"],void 0);n["default"]=r.exports},e794:function(t,n,i){"use strict";i.r(n);var e=i("3601"),o=i.n(e);for(var u in e)["default"].indexOf(u)<0&&function(t){i.d(n,t,(function(){return e[t]}))}(u);n["default"]=o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'libs/components/multiple-options-demo-create-component',
    {
        'libs/components/multiple-options-demo-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("c554"))
        })
    },
    [['libs/components/multiple-options-demo-create-component']]
]);
