<template>
	<view class="start-index">
		<view v-if="tabberPageLoadFlag[0]" :style="{display: currentIndex === 0 ? '' : 'none'}">
			<scroll-view class="custom-tabbar-page" scroll-y enable-back-to-top @scrolltolower="tabbarPageScrollLower">
				<home ref="home"></home>
			</scroll-view>
		</view>
		<view v-if="tabberPageLoadFlag[1]" :style="{display: currentIndex === 1 ? '' : 'none'}">
			<scroll-view class="custom-tabbar-page" scroll-y enable-back-to-top @scrolltolower="tabbarPageScrollLower">
				<circle-page ref="circleRef"></circle-page>
			</scroll-view>
		</view>
		<view v-if="tabberPageLoadFlag[2]" :style="{display: currentIndex === 2 ? '' : 'none'}">
			<scroll-view class="custom-tabbar-page" scroll-y enable-back-to-top @scrolltolower="tabbarPageScrollLower">
				<message ref="message"></message>
			</scroll-view>
		</view>
		<view v-if="tabberPageLoadFlag[3]" :style="{display: currentIndex === 3 ? '' : 'none'}">
			<scroll-view class="custom-tabbar-page" scroll-y enable-back-to-top @scrolltolower="tabbarPageScrollLower">
				<preferred ref="preferredRef"></preferred>
			</scroll-view>
		</view>
		<view v-if="tabberPageLoadFlag[4]" :style="{display: currentIndex === 4 ? '' : 'none'}">
			<scroll-view class="custom-tabbar-page" scroll-y enable-back-to-top @scrolltolower="tabbarPageScrollLower">
				<mine ref="mine"></mine>
			</scroll-view>
		</view>
		<tn-tabbar v-model="currentIndex" :list="tabbarList" activeColor="#838383" inactiveColor="#AAAAAA"
			activeIconColor="#FBBD12" :animation="true" :safeAreaInsetBottom="true" @change="switchTabbar"
			v-if="hiddenTabbarStatus"></tn-tabbar>
	</view>
</template>

<script>
	import Home from './home/home.vue'
	import CirclePage from './circle/circle.vue'
	import Message from '@/pages/message/message.vue'
	import Mine from './mine/mine.vue'
	import Preferred from './preferred/preferred.vue'

	export default {
		components: {
			Home,
			CirclePage,
			Message,
			Mine,
			Preferred
		},
		data() {
			return {
				hiddenTabbarStatus: true,
				// 底部tabbar菜单数据
				tabbarList: [{
						title: '首页',
						activeIcon: 'https://wangzhenghai-oss.oss-cn-hangzhou.aliyuncs.com/eee705da-cfa4-46e9-99fd-196735f49752.png',
						inactiveIcon: 'https://wangzhenghai-oss.oss-cn-hangzhou.aliyuncs.com/d4fd713a-1a7b-45c3-b457-a9e2f6e7c0bb.png'
					},
					{
						title: '圈子',
						activeIcon: 'https://wangzhenghai-oss.oss-cn-hangzhou.aliyuncs.com/a7c61afa-78f8-47d4-8dc5-cbc7bf2225ab.png',
						inactiveIcon: 'https://wangzhenghai-oss.oss-cn-hangzhou.aliyuncs.com/7baa0814-e60c-4111-9068-7eb55996bc1d.png',
					},
					{
						title: '消息',
						activeIcon: 'menu-circle',
						inactiveIcon: 'message',
						activeIconColor: '#FFFFFF',
						inactiveIconColor: '#FFFFFF',
						iconSize: 50,
						out: true
					},
					{
						title: '周边',
						activeIcon: 'https://wangzhenghai-oss.oss-cn-hangzhou.aliyuncs.com/d93f1343-aa6a-4571-9c00-185af2c285b3.png',
						inactiveIcon: 'https://wangzhenghai-oss.oss-cn-hangzhou.aliyuncs.com/22c5e20b-f176-4963-989a-10bf2537eb3a.png',
					},
					{
						title: '我的',
						activeIcon: 'https://wangzhenghai-oss.oss-cn-hangzhou.aliyuncs.com/891bd57c-b3bc-4bd1-b434-24af869dbaee.png',
						inactiveIcon: 'https://wangzhenghai-oss.oss-cn-hangzhou.aliyuncs.com/df820914-cd79-426e-aca6-ecf9d0209c71.png'
					}
				],
				// tabbar当前被选中的序号
				currentIndex: 0,
				// 自定义底栏对应页面的加载情况
				tabberPageLoadFlag: [],
				index: ''
			}
		},
		onLoad(options) {
			const index = Number(options.index || 0)
			// 根据底部tabbar菜单列表设置对应页面的加载情况
			this.tabberPageLoadFlag = this.tabbarList.map((item, tabbar_index) => {
				return index === tabbar_index
			})
			this.switchTabbar(index)
		},
		methods: {
			hiddenTabbar() {
				this.hiddenTabbarStatus = false
			},
			showTabbar() {
				this.hiddenTabbarStatus = true
			},
			// 切换导航
			switchTabbar(index) {
				this._switchTabbarPage(index)
				if (index !== 2) {
					this.$refs?.circleRef?.stopAllVideo()
				}
				if (index === 2) {
					 this.$refs.message.flushed()
				}
				if (index === 1) {
					this.$nextTick(() => {
						this.$refs.circleRef.getBlogList() && this.$refs.circleRef.getHotCity()
					})
				}
				if (index === 3) {
					this.$nextTick(() => {
						this.$refs.preferredRef.getGoodsList()
					})
				}
				if (index === 0) {
					this.$nextTick(() => {
						this.$refs.home.getBlogList() && this.$refs.home.getRecommendUp()
					})
				}
				if (index === 4) {
					if (!uni.getStorageSync('token')) {
						uni.redirectTo({
							url: '/pages/login/login'
						})
						return
					}
					this.$nextTick(() => {
						this.$refs.mine.queryUserById() && this.$refs.mine.getUserInfoById()
					})
				}
			},

			// 导航页面滚动到底部
			tabbarPageScrollLower(e) {
				if (this.currentIndex === 3) {
					// this.$refs.preferredRef.getRandomData && this.$refs.preferredRef.getRandomData()
				}
			},

			// 切换导航页面
			_switchTabbarPage(index) {
				const selectPageFlag = this.tabberPageLoadFlag[index]
				if (selectPageFlag === undefined) {
					return
				}
				if (selectPageFlag === false) {
					this.tabberPageLoadFlag[index] = true
				}
				this.currentIndex = index
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>