<template>
	<view class="template-reserve tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed alpha customBack>
			<view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
				<text class='icon tn-icon-left'></text>
				<text class='icon tn-icon-home-capsule-fill'></text>
			</view>
		</tn-nav-bar>
		<!-- 页面内容 -->
		<view class="slideshow">
			<view v-for="(item,index) in slideshowImage" :key="index" class="slideshow-image"
				:style="'background-image:url('+ item +')'"></view>
		</view>
		<view class="reserve tn-safe-area-inset-bottom" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
			<view class="reserve-content tn-padding tn-color-black tn-text-lg dd-glass2"
				style="margin:18vh 30rpx 20vh 30rpx">
				<view class="tn-text-center tn-text-bold tn-padding-top tn-padding-bottom">
					活动详情
				</view>
				<view class="">
					<view
						class="blogger__desc tn-margin-top-sm tn-margin-bottom-sm tn-text-justify tn-flex-col-center tn-flex-row-left">
						<!-- 不用限制长度了，因为发布的时候限制长度了-->
						<text class="blogger__desc__content tn-flex-1 tn-text-justify tn-text-df">
							{{activityContent}}
						</text>
					</view>
				</view>
				<view class="tn-padding-top-sm">
					集合时间：{{activityTime}}
				</view>
				<view class="">
					集合地点：{{activityAddress}}
				</view>
				<view class="tn-text-center tn-text-bold tn-padding-top-xl" v-if="groupList.length!=0">
					活动参与者
				</view>
				<tn-read-more :closeBtn="true" openText="查看更多参与者" openIcon="more-circle" closeText="折叠起来"
					closeIcon="close" :showHeight="300">
					<view class="tn-flex tn-flex-wrap tn-margin-top-xl">
						<block v-for="(item, index) in groupList" :key="index">
							<view class="tn-padding-bottom tn-padding-left" style="width: 20%;">
								<view class="tn-flex tn-flex-row-left tn-flex-col-center" style="">
									<view class="user-pic">
										<view class="user-image">
											<view class="tn-shadow-blur"
												:style="'background-image:url('+ item +');width: 70rpx;height: 70rpx;background-size: cover;'">
											</view>
										</view>
									</view>
								</view>
							</view>
						</block>
					</view>
				</tn-read-more>
			</view>
			<tn-popup v-model="show" mode="bottom" width="750rpx" height="1000rpx" @close="closeSubmitPopup">
				<view style="margin-top: 20rpx;">
					<view style="display: flex;align-items: center;">
						<text style="margin-left: 20rpx;font-weight: 600;margin-right: 28rpx;">联系方式</text>
						<tn-input v-model="telephone" :showConfirmBar="false" placeholder="请输入手机号或微信号,仅发起人可见"
							style="flex: 1;"></tn-input>
					</view>
					<u-line></u-line>
					<view style="display: flex;align-items: center;margin-top: 28rpx;">
						<text style="margin-left: 20rpx;font-weight: 600;margin-right: 28rpx;">真实性别</text>
						<view
							style="width: 130rpx;height: 50rpx;margin-right: 50rpx;text-align:center;padding-top: 6rpx;"
							:style="{backgroundColor:bgColor1}" @click="changeSex('男')">男</view>
						<view style="width: 130rpx;height: 50rpx;text-align: center;padding-top: 6rpx"
							:style="{backgroundColor:bgColor2}" @click="changeSex('女')">女</view>
					</view>
					<view style="margin-top: 32rpx;">
						<u--textarea v-model="introduce" placeholder="自我介绍,发起人会通过你的自我介绍来判断是否与你同行,请认真的介绍下自己" count
							maxlength="100" height="120" border="bottom"></u--textarea>
					</view>
					<view style="margin-top: 32rpx;margin-left: 250rpx;">
						<tn-button shape="round" backgroundColor="#ffc20e" padding="10rpx 0" width="50%" shadow fontBold
							@click="submitApply ">
							<text class="tn-color-black">提交</text>
						</tn-button>
					</view>
				</view>
			</tn-popup>
			<tn-modal v-model="showSuccess" title="活动提示" :content="content" :button="button"
				@click="message"></tn-modal>
			<u-modal :show="errShow" title="系统提示" :content='errContent' @cancel="errShow=false" confirmText="前去认证"
				cancelText="下次认证" showCancelButton @confirm="goFace" cancelColor="#dc423c"></u-modal>
			<view
				class="tn-footerfixed tn-flex tn-flex-row-between tn-flex-col-center tn-padding tn-safe-area-inset-bottom dd-glass">
				<view class="justify-content-item tn-padding-bottom">
					<view class="tn-flex tn-flex-col-center tn-flex-row-left">
						<!-- 	<view class="user-pic">
							<view class="user-image">
								<view class="tn-shadow-blur"
									:style="'background-image:url('+userAvatar+');width: 70rpx;height: 70rpx;background-size: cover;'">
								</view>
							</view>
						</view> -->
					</view>
				</view>
				<!-- 按钮-->
				<view
					class="justify-content-item tn-flex-col-center tn-flex-row-center tn-text-center tn-padding-bottom">
					<view class="tn-flex tn-flex-row-between">
						<view class="justify-content-item tn-margin-xs tn-text-center" style="width: 300rpx;">
							<tn-button shape="round" backgroundColor="#00FFC6" padding="10rpx 0" width="90%"
								style="margin-left: -390rpx;" shadow fontBold @click="joinActivity"
								v-if="userId!=activityUserId">
								<text class="tn-icon-topic tn-padding-right-xs tn-color-black"></text>
								<text class="tn-color-black">参与活动</text>
							</tn-button>
							<tn-button shape="round" backgroundColor="#d71345" padding="10rpx 0" width="90%"
								style="margin-left: -390rpx;" shadow fontBold @click="managerActivity"
								v-if="userId==activityUserId">
								<text class="tn-icon-set tn-padding-right-xs tn-color-black"></text>
								<text class="tn-color-black">活动管理</text>
							</tn-button>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	export default {
		name: 'TemplateReserve',
		mixins: [template_page_mixin],
		data() {
			return {
				groupList: [""],
				activityContent: '',
				errShow: false,
				errContent: '',
				telephone: '',
				userAvatar: '',
				introduce: '',
				showSuccess: false,
				button: [{
					text: '确定',
					backgroundColor: 'tn-bg-indigo',
					fontColor: '#FFFFFF'
				}],
				content: '',
				sex: '',
				userId: '', //登录用户id
				activityUserId: '', //活动发起人id
				bgColor1: '#f7f7f7',
				bgColor2: '#f7f7f7',
				activityAddress: '',
				show: false,
				activityTime: '',
				slideshowImage: [],
			}
		},
		onLoad(options) {
			this.activityId = options.id
			this.userId = uni.getStorageSync('userId')
			this.getActivityInfo()
		},
		onShow() {
			this.userId = uni.getStorageSync('userId')
			this.getActivityInfo()
		},
		methods: {
			message(item) {
				if (item.index === 0) {
					this.showSuccess = false
				}
			},
			managerActivity() {
				uni.navigateTo({
					url: '/partnerPages/applyManagement?activityId=' + this.activityId
				})
			},
			closeSubmitPopup() {
				this.telephone = ''
				this.sex = ''
				this.bgColor1 = '#f7f7f7'
				this.bgColor2 = '#f7f7f7'
				this.introduce = ''
				this.getActivityInfo()
			},
			changeSex(sex) {
				if (sex === '男') {
					this.bgColor1 = '#ffc20e'
					this.bgColor2 = '#f7f7f7'
					this.sex = '男'
				} else {
					this.bgColor2 = '#ffc20e'
					this.bgColor1 = '#f7f7f7'
					this.sex = '女'
				}
			},
			//提交申请
			async submitApply() {
				if (!this.telephone) {
					uni.$showMsg('请填写联系方式！')
					return
				}
				if (!this.sex) {
					uni.$showMsg('请选择真实性别！')
					return
				}
				if (!this.introduce) {
					uni.$showMsg('请填写个人简介！')
					return
				}
				const applyDTO = {
					applyActivityId: this.activityId,
					telephone: this.telephone,
					sex: this.sex,
					introduce: this.introduce
				}
				const {
					data
				} = await uni.$http.post('/activityApply/apply', applyDTO)
				if (data.code === 1) {
					this.content = '提交成功,请耐心等待发起人同意！'
					setTimeout(() => {
						this.show = false
					}, 500)
					setTimeout(() => {
						this.showSuccess = true
					}, 1000)
				} else {
					this.show = false
					this.errContent = data.msg
					this.errShow = true
				}
			},
			goFace() {
				this.errShow=false
				uni.navigateTo({
					url: '/minePages/face-authentication/face-authentication?index=2'
				})
			},
			async getActivityInfo() {
				const {
					data
				} = await uni.$http.get('/activity/getActivityInfo/' + this.activityId)
				if (data.code === 1) {
					this.activityContent = data.data.activityContent
					this.activityAddress = data.data.activityAddress
					this.activityTime = data.data.activityTime
					this.userAvatar = data.data.userAvatar
					this.joinCount = data.data.joinCount
					this.groupList = data.data.joinUserAvatar
					this.activityUserId = data.data.userId
					this.slideshowImage = data.data.activityImage.split(",")
				}
			},
			async joinActivity() {
				if (uni.getStorageSync('token')) {
					const {
						data
					} = await uni.$http.get('/activityApply/joinedCount/' + this.activityId)
					if (data.code === 1) {
						const {
							data
						} = await uni.$http.get('/activityApply/joinSelectUserIsFace')
						if (data.code === 1) {
							this.show = true
						} else {
							//未认证
							this.errContent = data.msg
							this.errShow = true
						}
					} else {
						this.content = data.msg
						this.$nextTick(() => {
							this.showSuccess = true
						})
					}
				} else {
					uni.navigateTo({
						url: '/pages/login/login?index=1'
					})
					uni.$showMsg('请先登录在操作！')
				}
			},
		},
	}
</script>

<style lang="scss" scoped>
	.template-reserve {}

	/* 胶囊*/
	.tn-custom-nav-bar__back {
		width: 100%;
		height: 100%;
		position: relative;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		box-sizing: border-box;
		background-color: rgba(0, 0, 0, 0.15);
		border-radius: 1000rpx;
		border: 1rpx solid rgba(255, 255, 255, 0.5);
		color: #FFFFFF;
		font-size: 18px;

		.icon {
			display: block;
			flex: 1;
			margin: auto;
			text-align: center;
		}

		&:before {
			content: " ";
			width: 1rpx;
			height: 110%;
			position: absolute;
			top: 22.5%;
			left: 0;
			right: 0;
			margin: auto;
			transform: scale(0.5);
			transform-origin: 0 0;
			pointer-events: none;
			box-sizing: border-box;
			opacity: 0.7;
			background-color: #FFFFFF;
		}
	}

	/* 内容*/
	.reserve {
		position: relative;
		z-index: 99;
	}

	.reserve-content {
		background-color: rgba(255, 255, 255, 0.7);
		border-radius: 30rpx;
	}


	/* 标签 */
	.blogger {
		&__item {
			padding: 30rpx;
		}

		&__desc {
			line-height: 55rpx;

			&__label {
				padding: 0 20rpx;
				margin: 0rpx 18rpx 0 0;

				&--prefix {
					color: #00FFC8;
					padding-right: 10rpx;
				}
			}
		}

	}


	/* 文字截取*/
	.clamp-text-1 {
		-webkit-line-clamp: 1;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.clamp-text-2 {
		-webkit-line-clamp: 2;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	/* 毛玻璃*/
	.dd-glass {
		width: 100%;
		backdrop-filter: blur(20rpx);
		-webkit-backdrop-filter: blur(20rpx);
	}

	/* 毛玻璃*/
	.dd-glass2 {
		// width: 100%;
		backdrop-filter: blur(8rpx);
		-webkit-backdrop-filter: blur(8rpx);
	}

	/* 用户头像 start */
	.user-image {
		width: 70rpx;
		height: 70rpx;
		position: relative;
	}

	.user-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 100rpx;
		overflow: hidden;
		background-color: #FFFFFF;
	}

	/* 底部悬浮按钮 start*/
	.tn-tabbar-height {
		min-height: 120rpx;
		height: calc(140rpx + env(safe-area-inset-bottom) / 2);
	}

	.tn-footerfixed {
		position: fixed;
		background-color: rgba(255, 255, 255, 0.5);
		box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
		bottom: 0;
		width: 100%;
		transition: all 0.25s ease-out;
		z-index: 100;
	}


	/* 相册 start*/
	.slideshow {
		top: 0;
		position: fixed;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		z-index: 0;
	}

	.slideshow-image {
		position: absolute;
		width: 100%;
		height: 100%;
		background: no-repeat 50% 50%;
		background-size: cover;
		-webkit-animation-name: kenburns;
		animation-name: kenburns;
		-webkit-animation-timing-function: linear;
		animation-timing-function: linear;
		-webkit-animation-iteration-count: infinite;
		animation-iteration-count: infinite;
		-webkit-animation-duration: 16s;
		animation-duration: 16s;
		opacity: 1;
		transform: scale(1.2);
	}

	.slideshow-image:nth-child(1) {
		-webkit-animation-name: kenburns-1;
		animation-name: kenburns-1;
		z-index: 3;
	}

	.slideshow-image:nth-child(2) {
		-webkit-animation-name: kenburns-2;
		animation-name: kenburns-2;
		z-index: 2;
	}

	.slideshow-image:nth-child(3) {
		-webkit-animation-name: kenburns-3;
		animation-name: kenburns-3;
		z-index: 1;
	}

	.slideshow-image:nth-child(4) {
		-webkit-animation-name: kenburns-4;
		animation-name: kenburns-4;
		z-index: 0;
	}

	@-webkit-keyframes kenburns-1 {
		0% {
			opacity: 1;
			transform: scale(1.2);
		}

		1.5625% {
			opacity: 1;
		}

		23.4375% {
			opacity: 1;
		}

		26.5625% {
			opacity: 0;
			transform: scale(1);
		}

		100% {
			opacity: 0;
			transform: scale(1.2);
		}

		98.4375% {
			opacity: 0;
			transform: scale(1.2117647059);
		}

		100% {
			opacity: 1;
		}
	}

	@keyframes kenburns-1 {
		0% {
			opacity: 1;
			transform: scale(1.2);
		}

		1.5625% {
			opacity: 1;
		}

		23.4375% {
			opacity: 1;
		}

		26.5625% {
			opacity: 0;
			transform: scale(1);
		}

		100% {
			opacity: 0;
			transform: scale(1.2);
		}

		98.4375% {
			opacity: 0;
			transform: scale(1.2117647059);
		}

		100% {
			opacity: 1;
		}
	}

	@-webkit-keyframes kenburns-2 {
		23.4375% {
			opacity: 1;
			transform: scale(1.2);
		}

		26.5625% {
			opacity: 1;
		}

		48.4375% {
			opacity: 1;
		}

		51.5625% {
			opacity: 0;
			transform: scale(1);
		}

		100% {
			opacity: 0;
			transform: scale(1.2);
		}
	}

	@keyframes kenburns-2 {
		23.4375% {
			opacity: 1;
			transform: scale(1.2);
		}

		26.5625% {
			opacity: 1;
		}

		48.4375% {
			opacity: 1;
		}

		51.5625% {
			opacity: 0;
			transform: scale(1);
		}

		100% {
			opacity: 0;
			transform: scale(1.2);
		}
	}

	@-webkit-keyframes kenburns-3 {
		48.4375% {
			opacity: 1;
			transform: scale(1.2);
		}

		51.5625% {
			opacity: 1;
		}

		73.4375% {
			opacity: 1;
		}

		76.5625% {
			opacity: 0;
			transform: scale(1);
		}

		100% {
			opacity: 0;
			transform: scale(1.2);
		}
	}

	@keyframes kenburns-3 {
		48.4375% {
			opacity: 1;
			transform: scale(1.2);
		}

		51.5625% {
			opacity: 1;
		}

		73.4375% {
			opacity: 1;
		}

		76.5625% {
			opacity: 0;
			transform: scale(1);
		}

		100% {
			opacity: 0;
			transform: scale(1.2);
		}
	}

	@-webkit-keyframes kenburns-4 {
		73.4375% {
			opacity: 1;
			transform: scale(1.2);
		}

		76.5625% {
			opacity: 1;
		}

		98.4375% {
			opacity: 1;
		}

		100% {
			opacity: 0;
			transform: scale(1);
		}
	}

	@keyframes kenburns-4 {
		73.4375% {
			opacity: 1;
			transform: scale(1.2);
		}

		76.5625% {
			opacity: 1;
		}

		98.4375% {
			opacity: 1;
		}

		100% {
			opacity: 0;
			transform: scale(1);
		}
	}

	/* 相册 end*/
</style>