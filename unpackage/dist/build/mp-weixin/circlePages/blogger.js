(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["circlePages/blogger"],{"0093":function(t,e,n){"use strict";var o=n("f1c1"),a=n.n(o);a.a},"488e":function(t,e,n){"use strict";n.r(e);var o=n("b441"),a=n.n(o);for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=a.a},"95ea":function(t,e,n){"use strict";n.r(e);var o=n("b6ea"),a=n("488e");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("0093");var i=n("f0c5"),u=Object(i["a"])(a["default"],o["b"],o["c"],!1,null,"5f65e119",null,!1,o["a"],void 0);e["default"]=u.exports},b441:function(t,e,n){"use strict";(function(t,o){var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("2eee")),i=a(n("c973")),u=a(n("88ff")),c={name:"TemplateBlogger",components:{Loading:function(){Promise.all([n.e("common/vendor"),n.e("components/loading/loading")]).then(function(){return resolve(n("52ef"))}.bind(null,n)).catch(n.oe)}},mixins:[u.default],data:function(){return{contentHideShowHeight:0,userId:"",user:{},loading:!0,show:!1,commentsCount:0,userInfo:{username:"",avatar:""},tipsDataMessage:{latestMessageUserAvatar:"https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg",messageCount:3,likeCount:1290,hotReviewsCount:896,fansCount:962,focusCount:86},content:[],adAutoplay:!1}},onLoad:function(){var e=this;this.initContentData(),this.contentHideShowHeight=3*t.upx2px(56),this.queryUserById(),this.getFridensList(),this.getUp(),this.getCommentByUserId(),setTimeout((function(){e.loading=!1,e.show=!0}),1200)},onReady:function(){var t=this;this.$nextTick((function(){t.getContentRectInfo()}))},onShow:function(){this.adAutoplay=!0},onHide:function(){this.adAutoplay=!1},methods:{handlePublishTimeDesc:function(t){var e=new Date,n=new Date(t),o=e.getTime()-n.getTime(),a=Math.floor(o/6048e5),r=Math.floor(o/864e5),i=Math.floor(o/36e5),u=Math.floor(o/6e4);return a>0?t:r<7&&r>0?r+"天前":i<24&&i>0?i+"小时前":u+"分钟前"},getUp:function(){var e=this;return(0,i.default)(r.default.mark((function n(){var o,a;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$http.get("/userInfo/getUserInfoById?userId="+t.getStorageSync("userId"));case 2:o=n.sent,a=o.data,e.user=a.data;case 5:case"end":return n.stop()}}),n)})))()},getCommentByUserId:function(){var e=this;return(0,i.default)(r.default.mark((function n(){var o,a;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$http.get("/comments/getCommentByUserId");case 2:o=n.sent,a=o.data,e.commentsCount=a.data;case 5:case"end":return n.stop()}}),n)})))()},queryUserById:function(){var e=this;return(0,i.default)(r.default.mark((function n(){var o,a;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$http.get("/user/queryUserById?userId="+t.getStorageSync("userId"));case 2:o=n.sent,a=o.data,e.userInfo.username=a.data.username,e.userInfo.avatar=a.data.avatar;case 6:case"end":return n.stop()}}),n)})))()},getFridensList:function(){var e=this;return(0,i.default)(r.default.mark((function n(){var o,a,i;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$http.get("/follow/friendCircle");case 2:o=n.sent,a=o.data,1===a.code&&(i=a.data.map((function(t){return t.mainImage=t.images.split(","),t.label=t.tag.split(","),t})),e.content=i);case 5:case"end":return n.stop()}}),n)})))()},tn:function(e){t.navigateTo({url:e})},navEdit:function(e){o.vibrateLong(),t.navigateTo({url:"/circlePages/edit"})},initContentData:function(){var t=this;this.content.forEach((function(e,n){e.hideContent=!1,e.showAllContent=!1,e.contentContainerHeight=0,e.contentContainerInit=!1,t.$set(t.content,n,e)}))},getContentRectInfo:function(){var e=this,n={},o=t.createSelectorQuery().in(this);this.content.forEach((function(t,e){null!==t&&void 0!==t&&t.content&&(o.select("#blogger__content--".concat(e)).boundingClientRect(),n[e]=t)})),o.exec((function(t){t?t.map((function(t){var n=t.id,o=/blogger__content--(\d)/.exec(n)[1],a=e.content[o];a.hideContent=t.height>e.contentHideShowHeight,a.showAllContent=!1,a.contentContainerHeight=t.height,a.contentContainerInit=!0,e.$set(e.content,o,a)})):setTimeout((function(){e.getContentRectInfo()}),10)}))},switchContentShowStatus:function(t){var e=this.content[t];e.showAllContent=!e.showAllContent,this.$set(this.content,t,e)}}};e.default=c}).call(this,n("543d")["default"],n("bc2e")["default"])},b6ea:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}));var o={tnNavBar:function(){return Promise.all([n.e("common/vendor"),n.e("tuniao-ui/components/tn-nav-bar/tn-nav-bar")]).then(n.bind(null,"aa86"))},tnAvatar:function(){return Promise.all([n.e("common/vendor"),n.e("tuniao-ui/components/tn-avatar/tn-avatar")]).then(n.bind(null,"4693"))},uAlbum:function(){return Promise.all([n.e("common/vendor"),n.e("node-modules/uview-ui/components/u-album/u-album")]).then(n.bind(null,"f41d"))},uIcon:function(){return Promise.all([n.e("common/vendor"),n.e("node-modules/uview-ui/components/u-icon/u-icon")]).then(n.bind(null,"cc7a"))},tnEmpty:function(){return n.e("tuniao-ui/components/tn-empty/tn-empty").then(n.bind(null,"c9e6"))}},a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.show?t.__map(t.content,(function(e,n){var o=t.__get_orig(e),a=t.handlePublishTimeDesc(e.createTime);return{$orig:o,m0:a}})):null),o=t.show?t.content.length:null;t.$mp.data=Object.assign({},{$root:{l0:n,g0:o}})},r=[]},b90c:function(t,e,n){"use strict";(function(t,e){var o=n("4ea4");n("1827");o(n("66fd"));var a=o(n("95ea"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(a.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},f1c1:function(t,e,n){}},[["b90c","common/runtime","common/vendor"]]]);