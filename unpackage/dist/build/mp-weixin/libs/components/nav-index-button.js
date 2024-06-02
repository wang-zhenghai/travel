(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["libs/components/nav-index-button"],{"1cf3":function(t,e,n){"use strict";n.r(e);var u=n("4d9f"),a=n("ab2e");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("9619");var i=n("f0c5"),c=Object(i["a"])(a["default"],u["b"],u["c"],!1,null,"d861986e",null,!1,u["a"],void 0);e["default"]=c.exports},"4d9f":function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var u=function(){var t=this.$createElement;this._self._c},a=[]},"85c1":function(t,e,n){},9619:function(t,e,n){"use strict";var u=n("85c1"),a=n.n(u);a.a},ab2e:function(t,e,n){"use strict";n.r(e);var u=n("e64c"),a=n.n(u);for(var r in u)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return u[t]}))}(r);e["default"]=a.a},e64c:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"nav-index-button",props:{bottom:{type:[Number,String],default:300},right:{type:[Number,String],default:75},indexPath:{type:String,default:"/pages/index"}},methods:{navIndex:function(){var e=getCurrentPages();if(e&&e.length>0){var n=this.indexPath||"/pages/index",u=e[0];1!=e.length||u.route&&u.route==n.substring(1,n.length)?t.navigateBack({delta:1}):t.reLaunch({url:n})}else t.reLaunch({url:indexPath})}}};e.default=n}).call(this,n("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'libs/components/nav-index-button-create-component',
    {
        'libs/components/nav-index-button-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1cf3"))
        })
    },
    [['libs/components/nav-index-button-create-component']]
]);
