import App from './App'
import store from './store'
import {
	$http
} from '@escook/request-miniprogram'
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
import uView from "uview-ui";
Vue.use(uView);
// 引入全局TuniaoUI
import TuniaoUI from 'tuniao-ui'
Vue.use(TuniaoUI)
uni.$http = $http
$http.baseUrl = 'https://localhost'
// 引入TuniaoUI提供的vuex简写方法
let vuexStore = require('@/store/$t.mixin.js')
Vue.mixin(vuexStore)

// 引入TuniaoUI对小程序分享的mixin封装
let mpShare = require('tuniao-ui/libs/mixin/mpShare.js')
Vue.mixin(mpShare)
$http.beforeRequest = function(options) {
	uni.showLoading({
		title: "加载中..."
	})
	options.header = {
		'token': uni.getStorageSync('token'),
	}
}

Vue.prototype.ScanAudio = function(path) {
	var music = null;
	music = uni.createInnerAudioContext(); //创建播放器对象 
	music.src = path;  
	music.play();
	music.onEnded(() => {
		music = null;	
	});
}
$http.afterRequest = function(options) {
	if (options.statusCode === 401) {
		uni.removeStorageSync('token');
		uni.removeStorageSync('userId');
		uni.redirectTo({
			url: '/pages/login/login'
		})
		uni.showToast({
			title: '登录失效~',
			icon: 'error'
		})
	}
	uni.hideLoading()
}
uni.$showMsg = function(title = '数据加载失败', duration = 1500) {
	uni.showToast({
		title,
		duration,
		icon: 'none'
	})
}
const app = new Vue({
	store,
	...App
})

app.$mount()	