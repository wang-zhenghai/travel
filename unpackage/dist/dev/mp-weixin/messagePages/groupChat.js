(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["messagePages/groupChat"],{

/***/ 228:
/*!***************************************************************************!*\
  !*** E:/uniapp项目/travel-demo/main.js?{"page":"messagePages%2FgroupChat"} ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _groupChat = _interopRequireDefault(__webpack_require__(/*! ./messagePages/groupChat.vue */ 229));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_groupChat.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 229:
/*!**********************************************************!*\
  !*** E:/uniapp项目/travel-demo/messagePages/groupChat.vue ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _groupChat_vue_vue_type_template_id_a124491a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./groupChat.vue?vue&type=template&id=a124491a& */ 230);
/* harmony import */ var _groupChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./groupChat.vue?vue&type=script&lang=js& */ 232);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _groupChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _groupChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _groupChat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./groupChat.vue?vue&type=style&index=0&lang=css& */ 234);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../微信小程序/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 35);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _groupChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _groupChat_vue_vue_type_template_id_a124491a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _groupChat_vue_vue_type_template_id_a124491a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _groupChat_vue_vue_type_template_id_a124491a___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "messagePages/groupChat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 230:
/*!*****************************************************************************************!*\
  !*** E:/uniapp项目/travel-demo/messagePages/groupChat.vue?vue&type=template&id=a124491a& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_groupChat_vue_vue_type_template_id_a124491a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../微信小程序/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../微信小程序/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../微信小程序/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../微信小程序/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../微信小程序/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../微信小程序/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./groupChat.vue?vue&type=template&id=a124491a& */ 231);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_groupChat_vue_vue_type_template_id_a124491a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_groupChat_vue_vue_type_template_id_a124491a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_groupChat_vue_vue_type_template_id_a124491a___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_groupChat_vue_vue_type_template_id_a124491a___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 231:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/uniapp项目/travel-demo/messagePages/groupChat.vue?vue&type=template&id=a124491a& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    "u-Image": function () {
      return Promise.all(/*! import() | node-modules/uview-ui/components/u--image/u--image */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/uview-ui/components/u--image/u--image")]).then(__webpack_require__.bind(null, /*! uview-ui/components/u--image/u--image.vue */ 708))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l0 = _vm.__map(_vm.history.messages, function (message, index) {
    var $orig = _vm.__get_orig(message)
    var m0 = _vm.renderMessageDate(message, index)
    var g0 = message.recalled ? _vm.currentUser.userId.toString() : null
    var g1 =
      message.recalled && message.recaller.id === g0
        ? message.type === "text" && Date.now() - message.timestamp < 60 * 1000
        : null
    var g2 = !message.recalled
      ? _vm.messageSelector.messages.includes(message)
      : null
    var g3 = !message.recalled ? _vm.currentUser.userId.toString() : null
    var g4 =
      !message.recalled && message.type === "text"
        ? _vm.currentUser.userId.toString()
        : null
    var m1 =
      !message.recalled && message.type === "text"
        ? _vm.renderTextMessage(message)
        : null
    var m2 =
      !message.recalled && message.type === "video"
        ? _vm.getImageHeight(
            message.payload.thumbnail.width,
            message.payload.thumbnail.height
          )
        : null
    var g5 =
      !message.recalled && message.type === "file"
        ? (message.payload.size / 1024).toFixed(2)
        : null
    var g6 =
      !message.recalled && message.type === "audio"
        ? Math.ceil(message.payload.duration)
        : null
    var g7 =
      !message.recalled && message.type === "audio"
        ? Math.ceil(message.payload.duration) || 1
        : null
    return {
      $orig: $orig,
      m0: m0,
      g0: g0,
      g1: g1,
      g2: g2,
      g3: g3,
      g4: g4,
      m1: m1,
      m2: m2,
      g5: g5,
      g6: g6,
      g7: g7,
    }
  })
  var l1 =
    !_vm.videoPlayer.visible &&
    !_vm.messageSelector.visible &&
    _vm.emoji.visible
      ? _vm.__map(_vm.emoji.map, function (emojiItem, emojiKey, index) {
          var $orig = _vm.__get_orig(emojiItem)
          return {
            $orig: $orig,
            $index: index,
          }
        })
      : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0,
        l1: l1,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 232:
/*!***********************************************************************************!*\
  !*** E:/uniapp项目/travel-demo/messagePages/groupChat.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_groupChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../微信小程序/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../微信小程序/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../微信小程序/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../微信小程序/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../微信小程序/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./groupChat.vue?vue&type=script&lang=js& */ 233);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_groupChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_groupChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_groupChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_groupChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_groupChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 233:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/uniapp项目/travel-demo/messagePages/groupChat.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 44));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 50));
var _EmojiDecoder = _interopRequireDefault(__webpack_require__(/*! ../lib/EmojiDecoder */ 224));
var _utils = __webpack_require__(/*! ../lib/utils */ 198);
var _RecorderManager = _interopRequireDefault(__webpack_require__(/*! ../lib/RecorderManager */ 225));
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var IMAGE_MAX_WIDTH = 200;
var IMAGE_MAX_HEIGHT = 150;
var recorderManager = new _RecorderManager.default();
var GoEasy = uni.$GoEasy;
var _default = {
  name: 'groupChat',
  data: function data() {
    // 定义表情
    var emojiUrl = 'https://imgcache.qq.com/open/qcloud/tim/assets/emoji/';
    var emojiMap = {
      '[NO]': 'emoji_0@2x.png',
      '[OK]': 'emoji_1@2x.png',
      '[下雨]': 'emoji_2@2x.png',
      '[么么哒]': 'emoji_3@2x.png',
      '[乒乓]': 'emoji_4@2x.png',
      '[便便]': 'emoji_5@2x.png',
      '[信封]': 'emoji_6@2x.png',
      '[偷笑]': 'emoji_7@2x.png',
      '[傲慢]': 'emoji_8@2x.png',
      '[再见]': 'emoji_9@2x.png',
      '[冷汗]': 'emoji_10@2x.png',
      '[凋谢]': 'emoji_11@2x.png',
      '[刀]': 'emoji_12@2x.png',
      '[删除]': 'emoji_13@2x.png',
      '[勾引]': 'emoji_14@2x.png',
      '[发呆]': 'emoji_15@2x.png',
      '[发抖]': 'emoji_16@2x.png',
      '[可怜]': 'emoji_17@2x.png',
      '[可爱]': 'emoji_18@2x.png',
      '[右哼哼]': 'emoji_19@2x.png',
      '[右太极]': 'emoji_20@2x.png',
      '[右车头]': 'emoji_21@2x.png',
      '[吐]': 'emoji_22@2x.png',
      '[吓]': 'emoji_23@2x.png',
      '[咒骂]': 'emoji_24@2x.png',
      '[咖啡]': 'emoji_25@2x.png',
      '[啤酒]': 'emoji_26@2x.png',
      '[嘘]': 'emoji_27@2x.png',
      '[回头]': 'emoji_28@2x.png',
      '[困]': 'emoji_29@2x.png',
      '[坏笑]': 'emoji_30@2x.png',
      '[多云]': 'emoji_31@2x.png',
      '[大兵]': 'emoji_32@2x.png',
      '[大哭]': 'emoji_33@2x.png',
      '[太阳]': 'emoji_34@2x.png',
      '[奋斗]': 'emoji_35@2x.png',
      '[奶瓶]': 'emoji_36@2x.png',
      '[委屈]': 'emoji_37@2x.png',
      '[害羞]': 'emoji_38@2x.png',
      '[尴尬]': 'emoji_39@2x.png',
      '[左哼哼]': 'emoji_40@2x.png',
      '[左太极]': 'emoji_41@2x.png',
      '[左车头]': 'emoji_42@2x.png',
      '[差劲]': 'emoji_43@2x.png',
      '[弱]': 'emoji_44@2x.png',
      '[强]': 'emoji_45@2x.png',
      '[彩带]': 'emoji_46@2x.png',
      '[彩球]': 'emoji_47@2x.png',
      '[得意]': 'emoji_48@2x.png',
      '[微笑]': 'emoji_49@2x.png',
      '[心碎了]': 'emoji_50@2x.png',
      '[快哭了]': 'emoji_51@2x.png',
      '[怄火]': 'emoji_52@2x.png',
      '[怒]': 'emoji_53@2x.png',
      '[惊恐]': 'emoji_54@2x.png',
      '[惊讶]': 'emoji_55@2x.png',
      '[憨笑]': 'emoji_56@2x.png',
      '[手枪]': 'emoji_57@2x.png',
      '[打哈欠]': 'emoji_58@2x.png',
      '[抓狂]': 'emoji_59@2x.png',
      '[折磨]': 'emoji_60@2x.png',
      '[抠鼻]': 'emoji_61@2x.png',
      '[抱抱]': 'emoji_62@2x.png',
      '[抱拳]': 'emoji_63@2x.png',
      '[拳头]': 'emoji_64@2x.png',
      '[挥手]': 'emoji_65@2x.png',
      '[握手]': 'emoji_66@2x.png',
      '[撇嘴]': 'emoji_67@2x.png',
      '[擦汗]': 'emoji_68@2x.png',
      '[敲打]': 'emoji_69@2x.png',
      '[晕]': 'emoji_70@2x.png',
      '[月亮]': 'emoji_71@2x.png',
      '[棒棒糖]': 'emoji_72@2x.png',
      '[汽车]': 'emoji_73@2x.png',
      '[沙发]': 'emoji_74@2x.png',
      '[流汗]': 'emoji_75@2x.png',
      '[流泪]': 'emoji_76@2x.png',
      '[激动]': 'emoji_77@2x.png',
      '[灯泡]': 'emoji_78@2x.png',
      '[炸弹]': 'emoji_79@2x.png',
      '[熊猫]': 'emoji_80@2x.png',
      '[爆筋]': 'emoji_81@2x.png',
      '[爱你]': 'emoji_82@2x.png',
      '[爱心]': 'emoji_83@2x.png',
      '[爱情]': 'emoji_84@2x.png',
      '[猪头]': 'emoji_85@2x.png',
      '[猫咪]': 'emoji_86@2x.png',
      '[献吻]': 'emoji_87@2x.png',
      '[玫瑰]': 'emoji_88@2x.png',
      '[瓢虫]': 'emoji_89@2x.png',
      '[疑问]': 'emoji_90@2x.png',
      '[白眼]': 'emoji_91@2x.png',
      '[皮球]': 'emoji_92@2x.png',
      '[睡觉]': 'emoji_93@2x.png',
      '[磕头]': 'emoji_94@2x.png',
      '[示爱]': 'emoji_95@2x.png',
      '[礼品袋]': 'emoji_96@2x.png',
      '[礼物]': 'emoji_97@2x.png',
      '[篮球]': 'emoji_98@2x.png',
      '[米饭]': 'emoji_99@2x.png',
      '[糗大了]': 'emoji_100@2x.png',
      '[红双喜]': 'emoji_101@2x.png',
      '[红灯笼]': 'emoji_102@2x.png',
      '[纸巾]': 'emoji_103@2x.png',
      '[胜利]': 'emoji_104@2x.png',
      '[色]': 'emoji_105@2x.png',
      '[药]': 'emoji_106@2x.png',
      '[菜刀]': 'emoji_107@2x.png',
      '[蛋糕]': 'emoji_108@2x.png',
      '[蜡烛]': 'emoji_109@2x.png',
      '[街舞]': 'emoji_110@2x.png',
      '[衰]': 'emoji_111@2x.png',
      '[西瓜]': 'emoji_112@2x.png',
      '[调皮]': 'emoji_113@2x.png',
      '[象棋]': 'emoji_114@2x.png',
      '[跳绳]': 'emoji_115@2x.png',
      '[跳跳]': 'emoji_116@2x.png',
      '[车厢]': 'emoji_117@2x.png',
      '[转圈]': 'emoji_118@2x.png',
      '[鄙视]': 'emoji_119@2x.png',
      '[酷]': 'emoji_120@2x.png',
      '[钞票]': 'emoji_121@2x.png',
      '[钻戒]': 'emoji_122@2x.png',
      '[闪电]': 'emoji_123@2x.png',
      '[闭嘴]': 'emoji_124@2x.png',
      '[闹钟]': 'emoji_125@2x.png',
      '[阴险]': 'emoji_126@2x.png',
      '[难过]': 'emoji_127@2x.png',
      '[雨伞]': 'emoji_128@2x.png',
      '[青蛙]': 'emoji_129@2x.png',
      '[面条]': 'emoji_130@2x.png',
      '[鞭炮]': 'emoji_131@2x.png',
      '[风车]': 'emoji_132@2x.png',
      '[飞吻]': 'emoji_133@2x.png',
      '[飞机]': 'emoji_134@2x.png',
      '[饥饿]': 'emoji_135@2x.png',
      '[香蕉]': 'emoji_136@2x.png',
      '[骷髅]': 'emoji_137@2x.png',
      '[麦克风]': 'emoji_138@2x.png',
      '[麻将]': 'emoji_139@2x.png',
      '[鼓掌]': 'emoji_140@2x.png',
      '[龇牙]': 'emoji_141@2x.png'
    };
    return {
      //聊天文本框
      text: '',
      group: null,
      to: {},
      // 作为createMessage的参数
      currentUser: null,
      //定义表情列表
      emoji: {
        url: emojiUrl,
        map: emojiMap,
        visible: false,
        decoder: new _EmojiDecoder.default(emojiUrl, emojiMap)
      },
      //是否展示‘其他消息类型面板’
      otherTypesMessagePanelVisible: false,
      orderList: {
        orders: [],
        visible: false
      },
      history: {
        messages: [],
        allLoaded: false,
        loading: false
      },
      recorderManager: recorderManager,
      audio: {
        //录音按钮展示
        visible: false
      },
      audioPlayer: {
        innerAudioContext: null,
        playingMessage: null
      },
      videoPlayer: {
        visible: false,
        url: '',
        context: null
      },
      // 展示消息删除弹出框
      actionPopup: {
        visible: false,
        message: null,
        recallable: false
      },
      groupMembers: [],
      groupId: '',
      // 消息选择
      messageSelector: {
        visible: false,
        messages: []
      },
      name: '',
      avatar: ''
    };
  },
  onLoad: function onLoad(options) {
    //聊天对象
    this.groupId = options.to;
    this.name = options.name;
    this.avatar = options.avatar;
    this.currentUser = uni.getStorageSync('currentUser');
    this.getGroupChatUserInfo();
    this.to = {
      id: this.groupId,
      type: GoEasy.IM_SCENE.GROUP,
      data: {
        name: this.name,
        avatar: this.avatar
      }
    };
    this.initGoEasyListeners();
    // 语音播放器
    this.initialAudioPlayer();
    // 录音监听器
    this.initRecorderListeners();
  },
  onShow: function onShow() {
    this.otherTypesMessagePanelVisible = false;
    this.emoji.visible = false;
  },
  onReady: function onReady() {
    this.loadHistoryMessage(true);
    this.videoPlayer.context = uni.createVideoContext('videoPlayer', this);
  },
  onPullDownRefresh: function onPullDownRefresh(e) {
    this.loadHistoryMessage(false);
  },
  onUnload: function onUnload() {
    //退出聊天页面之前，清空监听器
    GoEasy.im.off(GoEasy.IM_EVENT.GROUP_MESSAGE_RECEIVED, this.onMessageReceived);
    GoEasy.im.off(GoEasy.IM_EVENT.MESSAGE_DELETED, this.onMessageDeleted);
  },
  methods: {
    //获取群聊内的用户信息
    getGroupChatUserInfo: function getGroupChatUserInfo() {
      var _this = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var _yield$uni$$http$get, data;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return uni.$http.get('/groupChat/getGroupChatUserInfo/' + _this.groupId);
              case 2:
                _yield$uni$$http$get = _context.sent;
                data = _yield$uni$$http$get.data;
                if (data.code === 1) {
                  _this.groupMembers = data.data;
                  uni.setNavigationBarTitle({
                    title: _this.name + '(' + data.data.length + ')'
                  });
                } else {
                  uni.$showMsg("服务器错误！");
                }
              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    renderTextMessage: function renderTextMessage(message) {
      return '<span>' + this.emoji.decoder.decode(message.payload.text) + '</span>';
    },
    renderMessageDate: function renderMessageDate(message, index) {
      if (index === 0) {
        return (0, _utils.formatDate)(message.timestamp);
      } else {
        if (message.timestamp - this.history.messages[index - 1].timestamp > 5 * 60 * 1000) {
          return (0, _utils.formatDate)(message.timestamp);
        }
      }
      return '';
    },
    initGoEasyListeners: function initGoEasyListeners() {
      // 监听群聊消息
      GoEasy.im.on(GoEasy.IM_EVENT.GROUP_MESSAGE_RECEIVED, this.onMessageReceived);
      //监听消息删除
      GoEasy.im.on(GoEasy.IM_EVENT.MESSAGE_DELETED, this.onMessageDeleted);
    },
    onMessageReceived: function onMessageReceived(message) {
      var groupId = message.groupId;
      if (groupId === this.groupId) {
        this.history.messages.push(message);
        //聊天时，收到消息标记为已读
        this.markGroupMessageAsRead();
        //收到新消息，是滚动到最底部
        this.scrollToBottom();
      }
    },
    onMessageDeleted: function onMessageDeleted(deletedMessages) {
      var _this2 = this;
      deletedMessages.forEach(function (message) {
        var groupId = message.groupId;
        if (groupId && groupId === _this2.groupId) {
          var index = _this2.history.messages.indexOf(message);
          if (index > -1) {
            _this2.history.messages.splice(index, 1);
          }
        }
      });
    },
    initialAudioPlayer: function initialAudioPlayer() {
      var _this3 = this;
      this.audioPlayer.innerAudioContext = uni.createInnerAudioContext();
      this.audioPlayer.innerAudioContext.onEnded(function () {
        _this3.audioPlayer.playingMessage = null;
      });
      this.audioPlayer.innerAudioContext.onStop(function () {
        _this3.audioPlayer.playingMessage = null;
      });
    },
    initRecorderListeners: function initRecorderListeners() {
      var _this4 = this;
      recorderManager.onRecordComplete(function (file, duration) {
        if (duration < 1000) {
          uni.showToast({
            icon: 'none',
            title: '录音时间太短',
            duration: 500
          });
          return;
        }
        GoEasy.im.createAudioMessage({
          to: _this4.to,
          file: file,
          notification: {
            title: _this4.currentUser.username + '发来一段语音',
            body: '[语音消息]',
            // 字段最长 50 字符
            sound: 'message',
            badge: '+1'
          },
          onProgress: function onProgress(progress) {
            console.log(progress);
          },
          onSuccess: function onSuccess(message) {
            _this4.sendMessage(message);
          },
          onFailed: function onFailed(e) {
            console.log('error :', e);
          }
        });
      });
    },
    /**
     * 核心就是设置高度，产生明确占位
     *
     * 小  (宽度和高度都小于预设尺寸)
     *    设高=原始高度
     * 宽 (宽度>高度)
     *    高度= 根据宽度等比缩放
     * 窄  (宽度<高度)或方(宽度=高度)
     *    设高=MAX height
     *
     * @param width,height
     * @returns number
     */
    getImageHeight: function getImageHeight(width, height) {
      if (width < IMAGE_MAX_WIDTH && height < IMAGE_MAX_HEIGHT) {
        return height * 2;
      } else if (width > height) {
        return IMAGE_MAX_WIDTH / width * height * 2;
      } else if (width === height || width < height) {
        return IMAGE_MAX_HEIGHT * 2;
      }
    },
    sendMessage: function sendMessage(message) {
      this.history.messages.push(message);
      this.scrollToBottom();
      GoEasy.im.sendMessage({
        message: message,
        onSuccess: function onSuccess(message) {
          console.log('发送成功.', message);
        },
        onFailed: function onFailed(error) {
          if (error.code === 507) {
            console.log('发送语音/图片/视频/文件失败');
          } else {
            console.log('发送失败:', error);
          }
        }
      });
    },
    sendTextMessage: function sendTextMessage() {
      var _this5 = this;
      if (this.text.trim() !== '') {
        var body = this.text;
        if (this.text.length >= 50) {
          body = this.text.substring(0, 30) + '...';
        }
        GoEasy.im.createTextMessage({
          text: this.text,
          to: this.to,
          notification: {
            title: this.currentUser.username + '发来一段文字',
            body: body,
            sound: 'message',
            badge: '+1'
          },
          onSuccess: function onSuccess(message) {
            _this5.sendMessage(message);
          },
          onFailed: function onFailed(e) {
            console.log('error :', e);
          }
        });
      }
      this.text = '';
    },
    sendVideoMessage: function sendVideoMessage() {
      var _this6 = this;
      uni.chooseVideo({
        success: function success(res) {
          GoEasy.im.createVideoMessage({
            to: _this6.to,
            file: res,
            notification: {
              title: _this6.currentUser.username + '发来一个视频',
              body: '[视频消息]',
              // 字段最长 50 字符
              sound: 'message',
              badge: '+1'
            },
            onProgress: function onProgress(progress) {
              console.log(progress);
            },
            onSuccess: function onSuccess(message) {
              _this6.otherTypesMessagePanelVisible = false;
              _this6.sendMessage(message);
            },
            onFailed: function onFailed(e) {
              console.log('error :', e);
            }
          });
        }
      });
    },
    sendImageMessage: function sendImageMessage() {
      var _this7 = this;
      uni.chooseImage({
        count: 9,
        success: function success(res) {
          res.tempFiles.forEach(function (file) {
            GoEasy.im.createImageMessage({
              to: _this7.to,
              file: file,
              notification: {
                title: _this7.currentUser.username + '发来一张图片',
                body: '[图片消息]',
                // 字段最长 50 字符
                sound: 'message',
                badge: '+1'
              },
              onProgress: function onProgress(progress) {
                console.log(progress);
              },
              onSuccess: function onSuccess(message) {
                _this7.otherTypesMessagePanelVisible = false;
                _this7.sendMessage(message);
              },
              onFailed: function onFailed(e) {
                console.log('error :', e);
              }
            });
          });
        }
      });
    },
    showActionPopup: function showActionPopup(message) {
      var MAX_RECALLABLE_TIME = 3 * 60 * 1000; //3分钟以内的消息才可以撤回
      this.messageSelector.messages = [message];
      if (Date.now() - message.timestamp < MAX_RECALLABLE_TIME && message.senderId === this.currentUser.userId && message.status === 'success') {
        this.actionPopup.recallable = true;
      } else {
        this.actionPopup.recallable = false;
      }
      this.actionPopup.visible = true;
    },
    hideActionPopup: function hideActionPopup() {
      this.actionPopup.visible = false;
      this.actionPopup.message = null;
    },
    deleteSingleMessage: function deleteSingleMessage() {
      var _this8 = this;
      uni.showModal({
        content: '确认删除？',
        success: function success(res) {
          _this8.actionPopup.visible = false;
          if (res.confirm) {
            _this8.deleteMessage();
          }
        }
      });
    },
    deleteMultipleMessages: function deleteMultipleMessages() {
      var _this9 = this;
      if (this.messageSelector.messages.length > 0) {
        uni.showModal({
          content: '确认删除？',
          success: function success(res) {
            _this9.messageSelector.visible = false;
            if (res.confirm) {
              _this9.deleteMessage();
            }
          }
        });
      }
    },
    deleteMessage: function deleteMessage() {
      var _this10 = this;
      GoEasy.im.deleteMessage({
        messages: this.messageSelector.messages,
        onSuccess: function onSuccess(result) {
          _this10.messageSelector.messages.forEach(function (message) {
            var index = _this10.history.messages.indexOf(message);
            if (index > -1) {
              _this10.history.messages.splice(index, 1);
            }
          });
          _this10.messageSelector.messages = [];
        },
        onFailed: function onFailed(error) {
          console.log('error:', error);
        }
      });
    },
    recallMessage: function recallMessage() {
      this.actionPopup.visible = false;
      GoEasy.im.recallMessage({
        messages: this.messageSelector.messages,
        onSuccess: function onSuccess() {
          console.log('撤回成功');
        },
        onFailed: function onFailed(error) {
          console.log('撤回失败,error:', error);
        }
      });
    },
    editRecalledMessage: function editRecalledMessage(text) {
      if (this.audio.visible) {
        this.audio.visible = false;
      }
      this.text = text;
    },
    showCheckBox: function showCheckBox() {
      this.messageSelector.messages = [];
      this.messageSelector.visible = true;
      this.actionPopup.visible = false;
    },
    selectMessages: function selectMessages(e) {
      var selectedMessageIds = e.detail.value;
      var selectedMessages = [];
      this.history.messages.forEach(function (message) {
        if (selectedMessageIds.includes(message.messageId)) {
          selectedMessages.push(message);
        }
      });
      this.messageSelector.messages = selectedMessages;
    },
    loadHistoryMessage: function loadHistoryMessage(scrollToBottom) {
      var _this11 = this;
      //历史消息
      this.history.loading = true;
      var lastMessageTimeStamp = null;
      var lastMessage = this.history.messages[0];
      if (lastMessage) {
        lastMessageTimeStamp = lastMessage.timestamp;
      }
      GoEasy.im.history({
        groupId: this.groupId,
        lastTimestamp: lastMessageTimeStamp,
        limit: 10,
        onSuccess: function onSuccess(result) {
          uni.stopPullDownRefresh();
          _this11.history.loading = false;
          var messages = result.content;
          if (messages.length === 0) {
            _this11.history.allLoaded = true;
          } else {
            if (lastMessageTimeStamp) {
              _this11.history.messages = messages.concat(_this11.history.messages);
            } else {
              _this11.history.messages = messages;
            }
            if (messages.length < 10) {
              _this11.history.allLoaded = true;
            }
            if (scrollToBottom) {
              _this11.scrollToBottom();
              //收到的消息设置为已读
              _this11.markGroupMessageAsRead();
            }
          }
        },
        onFailed: function onFailed(error) {
          //获取失败
          console.log('获取历史消息失败:', error);
          uni.stopPullDownRefresh();
          _this11.history.loading = false;
        }
      });
    },
    showMembers: function showMembers() {
      //显示群成员
      uni.navigateTo({
        url: '/messagePages/members?members=' + encodeURIComponent(JSON.stringify(this.groupMembers))
      });
    },
    onRecordStart: function onRecordStart() {
      recorderManager.start();
    },
    onRecordEnd: function onRecordEnd() {
      recorderManager.stop();
    },
    showImageFullScreen: function showImageFullScreen(e) {
      var imagesUrl = [e.currentTarget.dataset.url];
      uni.previewImage({
        urls: imagesUrl
      });
    },
    //语音录制按钮和键盘输入的切换
    switchAudioKeyboard: function switchAudioKeyboard() {
      this.audio.visible = !this.audio.visible;
      if (this.audio.visible) {
        recorderManager.authorize().then(function () {
          console.log('录音权限获取成功');
        }).catch(function (err) {
          console.log('err:', err);
          uni.showModal({
            title: '获取录音权限失败',
            content: err
          });
        });
      }
    },
    playVideo: function playVideo(e) {
      var _this12 = this;
      this.videoPlayer.visible = true;
      this.videoPlayer.url = e.currentTarget.dataset.url;
      this.$nextTick(function () {
        _this12.videoPlayer.context.requestFullScreen({
          direction: 0
        });
        _this12.videoPlayer.context.play();
      });
    },
    playAudio: function playAudio(audioMessage) {
      var playingMessage = this.audioPlayer.playingMessage;
      if (playingMessage) {
        this.audioPlayer.innerAudioContext.stop();
        // 如果点击的消息正在播放，就认为是停止播放操作
        if (playingMessage === audioMessage) {
          return;
        }
      }
      this.audioPlayer.playingMessage = audioMessage;
      this.audioPlayer.innerAudioContext.src = audioMessage.payload.url;
      this.audioPlayer.innerAudioContext.play();
    },
    onVideoFullScreenChange: function onVideoFullScreenChange(e) {
      //当退出全屏播放时，隐藏播放器
      if (this.videoPlayer.visible && !e.detail.fullScreen) {
        this.videoPlayer.visible = false;
        this.videoPlayer.context.stop();
      }
    },
    messageInputFocusin: function messageInputFocusin() {
      this.otherTypesMessagePanelVisible = false;
      this.emoji.visible = false;
    },
    switchEmojiKeyboard: function switchEmojiKeyboard() {
      this.emoji.visible = !this.emoji.visible;
      this.otherTypesMessagePanelVisible = false;
    },
    showOtherTypesMessagePanel: function showOtherTypesMessagePanel() {
      this.otherTypesMessagePanelVisible = !this.otherTypesMessagePanelVisible;
      this.emoji.visible = false;
    },
    chooseEmoji: function chooseEmoji(emojiKey) {
      this.text += emojiKey;
    },
    hideOrderMessageList: function hideOrderMessageList() {
      this.orderList.visible = false;
    },
    scrollToBottom: function scrollToBottom() {
      this.$nextTick(function () {
        uni.pageScrollTo({
          scrollTop: 2000000,
          duration: 0
        });
      });
    },
    markGroupMessageAsRead: function markGroupMessageAsRead() {
      GoEasy.im.markMessageAsRead({
        id: this.to.id,
        type: this.to.type,
        onSuccess: function onSuccess() {
          console.log('标记群聊已读成功');
        },
        onFailed: function onFailed(error) {
          console.log('标记群聊已读失败:', error);
        }
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 234:
/*!*******************************************************************************************!*\
  !*** E:/uniapp项目/travel-demo/messagePages/groupChat.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_groupChat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../微信小程序/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../微信小程序/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../微信小程序/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../微信小程序/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../微信小程序/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../微信小程序/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../微信小程序/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./groupChat.vue?vue&type=style&index=0&lang=css& */ 235);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_groupChat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_groupChat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_groupChat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_groupChat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_groupChat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 235:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/uniapp项目/travel-demo/messagePages/groupChat.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[228,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/messagePages/groupChat.js.map