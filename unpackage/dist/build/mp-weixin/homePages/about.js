(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["homePages/about"],{3128:function(t,e,n){"use strict";(function(t){var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("88ff")),r={name:"TemplateAbout",mixins:[a.default],data:function(){return{windowHeight:0,windowWidth:0,actionTimer:null,animationTimer:null,queue:{},ctx:null}},onLoad:function(){this.getSystemInfo()},onReady:function(){var e=this;this.$nextTick((function(){e.queue={},e.ctx=t.createCanvasContext("bubble",e),setTimeout((function(){e.actionTimer=setInterval((function(){e.generateBubble()}),500)}),1e3)}))},onUnload:function(){this.clearActionTimer(),this.clearAnimationTimer()},methods:{getSystemInfo:function(){var e=this,n=t.getSystemInfoSync();n?(this.windowHeight=n.safeArea.height,this.windowWidth=n.safeArea.width):setTimeout((function(){e.getSystemInfo()}),50)},generateBubble:function(){var e=this,n="https://resource.tuniaokj.com/images/bubble/"+this.$t.number.randomInt(1,33)+".png";t.getImageInfo({src:n,success:function(t){if("getImageInfo:ok"===t.errMsg){var n={id:(new Date).getTime(),timer:0,opacity:0,pathData:e.generatePathData(),image:t.path,factor:{speed:6e-4,t:.1}};Object.keys(e.queue).length>0?e.queue[n.id]=n:(e.queue[n.id]=n,e.bubbleAnimate())}}})},generatePathData:function(){var t=this.windowWidth,e=this.windowHeight,n={x:.72*t,y:e},i={x:this.$t.number.random(.22*t,.33*t),y:this.$t.number.random(.5*e,.75*e)},a={x:this.$t.number.random(0,.88*t),y:this.$t.number.random(.25*e,.5*e)},r={x:this.$t.number.random(0,.88*t),y:this.$t.number.random(0,.125*e)};return[n,i,a,r]},updatePath:function(t,e){var n=t[0],i=t[1],a=t[2],r=t[3],o=e.t,u=3*(i.x-n.x),c=3*(a.x-i.x)-u,s=r.x-n.x-u-c,f=3*(i.y-n.y),d=3*(a.y-i.y)-f,m=r.y-n.y-f-d,h=s*(o*o*o)+c*(o*o)+u*o+n.x,l=m*(o*o*o)+d*(o*o)+f*o+n.y;return{x:h,y:l}},bubbleAnimate:function(){var t=this,e=(this.windowWidth,this.windowHeight);Object.keys(this.queue).forEach((function(n){var i=t.queue[+n],a=t.updatePath(i.pathData,i.factor),r=a.x,o=a.y,u=i.factor.speed;i.factor.t+=u;var c=30;c=(e-o)/1.5,c=Math.min(30,c);var s=i.opacity;s=o/(.3*e),s=Math.min(1,s),t.ctx.globalAlpha=s,t.ctx.drawImage(i.image,r-c/2,o,c,c),i.factor.t>1&&delete t.queue[i.id],o>e&&delete t.queue[i.id]})),this.ctx.draw(),Object.keys(this.queue).length>0?this.animationTimer=setTimeout((function(){t.bubbleAnimate()}),5):(this.clearAnimationTimer()(),this.ctx.draw())},clearActionTimer:function(){this.actionTimer&&clearInterval(this.actionTimer)},clearAnimationTimer:function(){this.animationTimer&&clearTimeout(this.animationTimer)}}};e.default=r}).call(this,n("543d")["default"])},"6d0e":function(t,e,n){"use strict";var i=n("8451"),a=n.n(i);a.a},8451:function(t,e,n){},"8bef":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={tnNavBar:function(){return Promise.all([n.e("common/vendor"),n.e("tuniao-ui/components/tn-nav-bar/tn-nav-bar")]).then(n.bind(null,"aa86"))}},a=function(){var t=this.$createElement;this._self._c},r=[]},dc2b:function(t,e,n){"use strict";n.r(e);var i=n("8bef"),a=n("e51c");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("6d0e");var o=n("f0c5"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"c84c5346",null,!1,i["a"],void 0);e["default"]=u.exports},e51c:function(t,e,n){"use strict";n.r(e);var i=n("3128"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},eea1:function(t,e,n){"use strict";(function(t,e){var i=n("4ea4");n("1827");i(n("66fd"));var a=i(n("dc2b"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(a.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])}},[["eea1","common/runtime","common/vendor"]]]);