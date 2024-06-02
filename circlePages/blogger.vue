<template>
	<view>
		<view v-if="loading">
			<Loading></Loading>
		</view>
		<view class="template-blogger tn-safe-area-inset-bottom" v-if="show">
			<!-- 顶部自定义导航 -->
			<tn-nav-bar fixed alpha customBack>
				<view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
					<text class='icon tn-icon-left'></text>
					<text class='icon tn-icon-home-capsule-fill'></text>
				</view>
			</tn-nav-bar>
		
			<!-- 立体头像-->
			<view class='cube'>
				<view class="cube__container">
					<view class="cube__container__body">
						<view class="cube__container__body__item cube__container__body__item--front"
							:style="{backgroundImage: `url(${userInfo.avatar})`}"></view>
						<view class="cube__container__body__item cube__container__body__item--back"
							:style="{backgroundImage: `url(${userInfo.avatar})`}"></view>
						<view class="cube__container__body__item cube__container__body__item--right"
							:style="{backgroundImage: `url(${userInfo.avatar})`}"></view>
						<view class="cube__container__body__item cube__container__body__item--left"
							:style="{backgroundImage: `url(${userInfo.avatar})`}"></view>
						<view class="cube__container__body__item cube__container__body__item--top"
							:style="{backgroundImage: `url(${userInfo.avatar})`}"></view>
						<view class="cube__container__body__item cube__container__body__item--bottom"
							:style="{backgroundImage: `url(${userInfo.avatar})`}"></view>
					</view>
				</view>
				<view class='tn-text-center tn-margin-top-lg'>
					<view class="tn-padding tn-text-bold tn-text-lg">{{ userInfo.username }}</view>
				</view>
			</view>
			<!-- 消息&数据 -->
			<view class="blogger-tips-data">
				<view class="blogger-tips-data__wrap tn-bg-white">
					<view class="blogger-tips-data__message tn-flex tn-flex-row-center">
						<!-- <view
							class="blogger-tips-data__message__container tn-flex tn-flex-row-center tn-flex-col-center tn-bg-gray--light">
							<view class="blogger-tips-data__message__avatar">
								<tn-avatar class="" :src="tipsDataMessage.latestMessageUserAvatar" size="sm">
								</tn-avatar>
							</view>
							<view class="tn-padding-right tn-padding-left">{{ tipsDataMessage.messageCount }} 条新消息</view>
						</view> -->
					</view>
					<view class="blogger-tips-data__info tn-flex">
						<view class="tn-flex-1 tn-padding-sm tn-margin-xs">
							<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
								<view class="">
									<view class="tn-text-xxl tn-color-orange">
										{{ user.likedCount }}
									</view>
								</view>
								<view class="tn-margin-top-xs tn-color-gray tn-text-df tn-text-center">
									<text class="tn-icon-like"></text>
									<text class="tn-padding-left-xs">获赞</text>
								</view>
							</view>
						</view>
						<view class="tn-flex-1 tn-padding-sm tn-margin-xs">
							<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
								<view class="">
									<view class="tn-text-xxl tn-color-blue">
										{{commentsCount}}
									</view>
								</view>
								<view class="tn-margin-top-xs tn-color-gray tn-text-df tn-text-center">
									<text class="tn-icon-message"></text>
									<text class="tn-padding-left-xs">热评</text>
								</view>
							</view>
						</view>
						<view class="tn-flex-1 tn-padding-sm tn-margin-xs">
							<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
								<view class="">
									<view class="tn-text-xxl tn-color-red">
										{{ user.fans }}
									</view>
								</view>
								<view class="tn-margin-top-xs tn-color-gray tn-text-df tn-text-center">
									<text class="tn-icon-vip"></text>
									<text class="tn-padding-left-xs">粉丝</text>
								</view>
							</view>
						</view>
						<view class="tn-flex-1 tn-padding-sm tn-margin-xs">
							<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
								<view class="">
									<view class="tn-text-xxl tn-color-cyan">
										{{ user.follow }}
									</view>
								</view>
								<view class="tn-margin-top-xs tn-color-gray tn-text-df tn-text-center">
									<text class="tn-icon-star"></text>
									<text class="tn-padding-left-xs">关注</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			</block>
			<view>
				<view>
					<block v-for="(item,index) in content" :key="index">
						<view class="blogger__item">
							<view class="blogger__author tn-flex tn-flex-row-between tn-flex-col-center">
								<view class="justify__author__info">
									<view class="tn-flex tn-flex-row-center">
										<view class="tn-flex tn-flex-row-center tn-flex-col-center">
											<view class="">
												<tn-avatar class="" shape="circle" :src="item.avatar" size="lg"
													@click="tn('/searchPages/userHome?userId='+item.userId)">
												</tn-avatar>
											</view>
											<view class="tn-padding-right tn-text-ellipsis">
												<view class="tn-padding-right tn-padding-left-sm tn-text-bold tn-text-lg">
													{{ item.username }}
												</view>
												<view
													class="tn-padding-right tn-padding-left-sm tn-padding-top-xs tn-color-gray">
													{{ handlePublishTimeDesc(item.createTime) }}
												</view>
											</view>
										</view>
									</view>
								</view>
							</view>
							<!-- @click="tn('/pages/blog/blog?blogId='+item.id)" -->
							<view
								class="blogger__desc tn-margin-top-sm tn-margin-bottom-sm tn-text-justify tn-flex-col-center tn-flex-row-left">
								<view v-for="(label_item,label_index) in item.label" :key="label_index"
									class="blogger__desc__label tn-float-left tn-margin-right tn-bg-gray--light tn-round tn-text-sm tn-text-bold">
									<text class="blogger__desc__label--prefix">#</text>
									<text class="tn-text-df">{{ label_item }}</text>
								</view>
								<view>
									<text
										class="blogger__desc__content  tn-text-justify tn-text-df tn-text-ellipsis-4">{{ item.content }}</text>
								</view>
							</view>
							<block v-if="item.mainImage">
								<u-album :urls="item.mainImage" multipleSize="100" singleSize="300" space="9"></u-album>
								<view style="display: flex;margin-top: 12rpx;margin-bottom: 10rpx;">
									<u-icon name="thumb-up" size="20" color="#ff0000"></u-icon>
									<text style="margin-right: 10rpx;margin-top: 6rpx;">{{item.liked}}</text>
								</view>
							</block>
						</view>
					</block>
					<view v-if="content.length===0" style="margin-top: 100rpx;">
						<tn-empty mode="data"></tn-empty>
						<view style="text-align: center;">你还没有关注任何好友哦！</view>
					</view>
				</view>
				<view class='tn-tabbar-height'></view>
			</view>
		</view>
		</view>
	</view>
</template>

<script>
	import Loading from '../components/loading/loading.vue'
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	export default {
		name: 'TemplateBlogger',
		components:{Loading},
		mixins: [template_page_mixin],
		data() {
			return {
				// 内容默认隐藏显示的高度
				contentHideShowHeight: 0,
				userId: '',
				user: {},
				loading:true,
				show:false,
				commentsCount: 0,
				userInfo: {
					username: '',
					avatar: ''
				},
				tipsDataMessage: {
					latestMessageUserAvatar: 'https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg',
					messageCount: 3,
					likeCount: 1290,
					hotReviewsCount: 896,
					fansCount: 962,
					focusCount: 86
				},
				content: [],
				adAutoplay: false
			}
		},
		onLoad() {
			this.initContentData()
			this.contentHideShowHeight = uni.upx2px(56) * 3
			this.queryUserById()
			this.getFridensList()
			this.getUp()
			this.getCommentByUserId()
           setTimeout(()=>{
			   this.loading=false
			   this.show=true
		   },1200)
		},
		onReady() {
			this.$nextTick(() => {
				this.getContentRectInfo()
			})
		},
		onShow() {
			this.adAutoplay = true
		},
		onHide() {
			this.adAutoplay = false
		},
		methods: {
			handlePublishTimeDesc(createTime) {
				var curTime = new Date();
				var postTime = new Date(createTime);
				var timeDiff = curTime.getTime() - postTime.getTime();

				// 单位换算
				var min = 60 * 1000;
				var hour = min * 60;
				var day = hour * 24;
				var week = day * 7;

				// 计算发布时间距离当前时间的周、天、时、分
				var exceedWeek = Math.floor(timeDiff / week);
				var exceedDay = Math.floor(timeDiff / day);
				var exceedHour = Math.floor(timeDiff / hour);
				var exceedMin = Math.floor(timeDiff / min);

				// 最后判断时间差到底是属于哪个区间，然后return
				if (exceedWeek > 0) {
					return createTime;
				} else {
					if (exceedDay < 7 && exceedDay > 0) {
						return exceedDay + '天前';
					} else {
						if (exceedHour < 24 && exceedHour > 0) {
							return exceedHour + '小时前';
						} else {
							return exceedMin + '分钟前';
						}
					}
				}
			},
			async getUp() {
				const {
					data
				} = await uni.$http.get('/userInfo/getUserInfoById?userId=' + uni.getStorageSync('userId'))
				this.user = data.data
			},
			async getCommentByUserId() {
				const {
					data
				} = await uni.$http.get('/comments/getCommentByUserId')
				this.commentsCount = data.data
			},
			async queryUserById() {
				const {
					data
				} = await uni.$http.get('/user/queryUserById?userId=' + uni.getStorageSync('userId'))
				this.userInfo.username = data.data.username
				this.userInfo.avatar = data.data.avatar
			},
			async getFridensList() {
				const {
					data
				} = await uni.$http.get('/follow/friendCircle')
				if (data.code === 1) {
					const obj = data.data.map(item => {
						item.mainImage = item.images.split(',')
						item.label = item.tag.split(',')
						return item
					})
					this.content = obj
				}
			},
			// 跳转
			tn(e) {
				uni.navigateTo({
					url: e,
				});
			},
			// 震动跳转
			navEdit(e) {
				wx.vibrateLong();
				uni.navigateTo({
					url: '/circlePages/edit'
				})
			},
			// 处理内容，给内容添加对应的标识信息
			initContentData() {
				this.content.forEach((item, index) => {
					// 是否需要隐藏内容
					item.hideContent = false
					// 显示所有内容
					item.showAllContent = false
					// 内容容器的实际高度
					item.contentContainerHeight = 0
					// 内容容器是否初始化完成
					item.contentContainerInit = false
					this.$set(this.content, index, item)
				})
			},
			// 获取内容容器的信息
			getContentRectInfo() {
				let contentRect = {}
				const query = uni.createSelectorQuery().in(this)
				// 筛选出存在内容的数据
				this.content.forEach((item, index) => {
					if (item?.content) {
						query.select(`#blogger__content--${index}`).boundingClientRect()
						contentRect[index] = item
					}
				})
				// 获取所有内容的宽高信息
				query.exec(res => {
					if (!res) {
						setTimeout(() => {
							this.getContentRectInfo()
						}, 10)
						return
					}
					// console.log(res);
					res.map((item) => {
						const id = item.id
						const idIndex = /blogger__content--(\d)/.exec(id)[1]
						let contentItem = this.content[idIndex]
						contentItem.hideContent = item.height > this.contentHideShowHeight
						contentItem.showAllContent = false
						contentItem.contentContainerHeight = item.height
						contentItem.contentContainerInit = true
						this.$set(this.content, idIndex, contentItem)
					})
				})
			},
			// 切换内容的显示与隐藏
			switchContentShowStatus(index) {
				const contentItem = this.content[index]
				contentItem.showAllContent = !contentItem.showAllContent
				this.$set(this.content, index, contentItem)
			},
		}
	}
</script>

<style lang="scss" scoped>
	.template-blogger {}

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

	$cube-size: 120rpx;
	$cube-split: 60rpx;

	/* 立体头像 start*/

	.cube {
		background: #fff;
		background: linear-gradient(-120deg, #00aa7f, #e5e15c, #01BEFF, #00F5D4);
		background-size: 100% 100%;
		animation: gradientBG 5s ease infinite;
		background-repeat: no-repeat;
		background-size: cover;
		height: 550rpx;
		display: flex;
		justify-content: center;
		padding-top: 40rpx;
		overflow: hidden;
		position: relative;
		flex-direction: column;
		align-items: center;
		font-weight: 300;

		&__container {
			margin-top: 180rpx;
			position: relative;
			width: $cube-size;
			height: $cube-size;
			-webkit-perspective: 500px;
			perspective: 500px; //透视太大会超过屏幕就不好了吖

			&:before {
				content: '';
				width: $cube-size;
				height: $cube-size;
				position: absolute;
				// top: calc(50% - ($cube-split - 30px));
				// left: calc(50% - $cube-split);
				background-color: #3c6496;
				filter: blur(60px);
				opacity: .8;
			}

			&__body {
				position: absolute;
				width: 100%;
				height: 100%;
				transform-style: preserve-3d;
				transform: translateZ(-75px);
				animation: cubeFrame 35s cubic-bezier(0.36, -0.03, 0.46, 0.95) infinite alternate;
				will-change: transform;

				&__item {
					position: absolute;
					display: block;
					display: flex;
					align-items: center;
					justify-content: center;
					width: $cube-size;
					height: $cube-size;
					font-size: 30px;
					background-repeat: no-repeat;
					background-size: cover;

					&--front {
						transform: rotateY(0deg) translateZ($cube-split);
						background-color: #BEEBFF;
					}

					&--back {
						transform: rotateX(180deg) translateZ($cube-split);
						background-color: #BEEBFF;
					}

					&--right {
						transform: rotateY(90deg) translateZ($cube-split);
						background-color: #BEEBFF;
					}

					&--left {
						transform: rotateY(-90deg) translateZ($cube-split);
						background-color: #BEEBFF;
					}

					&--top {
						transform: rotateX(90deg) translateZ($cube-split);
						background-color: #BEEBFF;
					}

					&--bottom {
						transform: rotateX(-90deg) translateZ($cube-split);
						background-color: #BEEBFF;
					}
				}
			}
		}
	}

	@keyframes cubeFrame {
		10% {
			transform: translateZ(-75px) rotateX(40deg) rotateY(60deg);
		}

		15% {
			transform: translateZ(-75px) rotateX(80deg) rotateY(20deg);
		}

		20% {
			transform: translateZ(-75px) rotateX(-180deg) rotateY(-70deg);
		}

		30% {
			transform: translateZ(-75px) rotateX(90deg) rotateY(180deg);
		}

		40% {
			transform: translateZ(-75px) rotateX(-10deg) rotateY(-140deg);
		}

		45% {
			transform: translateZ(-75px) rotateX(-100deg) rotateY(20deg);
		}

		55% {
			transform: translateZ(-75px) rotateX(-10deg) rotateY(-35deg);
		}

		60% {
			transform: translateZ(-75px) rotateX(180deg) rotateY(360deg);
		}

		70% {
			transform: translateZ(-75px) rotateX(-180deg) rotateY(-360deg);
		}

		80% {
			transform: translateZ(-75px) rotateX(45deg) rotateY(-70deg);
		}

		90% {
			transform: translateZ(-75px) rotateX(-45deg) rotateY(70deg);
		}

		100% {
			transform: translateZ(-75px) rotateX(-360deg) rotateY(360deg);
		}
	}

	/* 立体头像 end*/

	/* 信息提示 start */
	.blogger-tips-data {
		background-color: #F8F7F3;

		&__wrap {
			border-radius: 60rpx 60rpx 0 0;
		}

		&__message {
			padding-top: 60rpx;

			&__container {
				padding: 5rpx;
				border-radius: 100rpx;
			}

			&__avatar {
				margin: 6rpx 0 0 6rpx;
			}
		}

		&__info {
			padding: 40rpx 0 0 0;
		}
	}

	/* 信息提示 end */

	/* 文章内容 start*/
	.blogger {
		&__item {
			padding: 30rpx;
		}

		&__author {
			&__btn {
				margin-right: -12rpx;
				opacity: 0.5;
			}
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

			&__content {}
		}

		&__content {
			margin-top: 18rpx;
			padding-right: 18rpx;

			&__data {
				line-height: 46rpx;
				text-align: justify;
				overflow: hidden;
				transition: all 0.25s ease-in-out;
			}

			&__status {
				margin-top: 10rpx;
				font-size: 26rpx;
				color: #82B2FF;
			}
		}

		&__main-image {
			border-radius: 16rpx;

			&--1 {
				max-width: 80%;
				max-height: 300rpx;
			}

			&--2 {
				max-width: 260rpx;
				max-height: 260rpx;
			}

			&--3 {
				height: 212rpx;
				width: 100%;
			}
		}

		&__count-icon {
			font-size: 40rpx;
			padding-right: 5rpx;
		}

		&__ad {
			width: 100%;
			height: 500rpx;
			transform: translate3d(0px, 0px, 0px) !important;

			::v-deep .uni-swiper-slide-frame {
				transform: translate3d(0px, 0px, 0px) !important;
			}

			.uni-swiper-slide-frame {
				transform: translate3d(0px, 0px, 0px) !important;
			}

			&__item {
				position: absolute;
				width: 100%;
				height: 100%;
				transform-origin: left center;
				transform: translate3d(100%, 0px, 0px) scale(1) !important;
				transition: transform 0.25s ease-in-out;
				z-index: 1;

				&--0 {
					transform: translate3d(0%, 0px, 0px) scale(1) !important;
					z-index: 4;
				}

				&--1 {
					transform: translate3d(13%, 0px, 0px) scale(0.9) !important;
					z-index: 3;
				}

				&--2 {
					transform: translate3d(26%, 0px, 0px) scale(0.8) !important;
					z-index: 2;
				}
			}

			&__content {
				border-radius: 40rpx;
				width: 640rpx;
				height: 500rpx;
				overflow: hidden;
			}

			&__image {
				width: 100%;
				height: 100%;
			}
		}
	}

	/* 文章内容 end*/

	/* 间隔线 start*/
	.tn-strip-bottom {
		width: 100%;
		border-bottom: 20rpx solid rgba(241, 241, 241, 0.8);
	}

	/* 间隔线 end*/
	/* 底部悬浮按钮 start*/
	.tn-tabbar-height {
		min-height: 100rpx;
		height: calc(120rpx + env(safe-area-inset-bottom) / 2);
	}

	.tn-footerfixed {
		position: fixed;
		width: 100%;
		bottom: calc(30rpx + env(safe-area-inset-bottom));
		z-index: 1024;
		box-shadow: 0 1rpx 6rpx rgba(0, 0, 0, 0);

	}

	/* 底部悬浮按钮 end*/

	/* 广告内容 start */
	.ad-image {
		width: 80rpx;
		height: 80rpx;
		position: relative;
	}

	.ad-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 20%;
	}

	/* 自定义导航栏内容 end */

	/* 悬浮 */
	.tnxuanfu {
		animation: suspension 3s ease-in-out infinite;
	}

	@keyframes suspension {

		0%,
		100% {
			transform: translateY(0);
		}

		50% {
			transform: translateY(-0.8rem);
		}
	}

	/* 悬浮按钮 */
	.button-shop {
		width: 90rpx;
		height: 90rpx;
		display: flex;
		flex-direction: row;
		position: fixed;
		/* bottom:200rpx;
      right: 20rpx; */
		left: 5rpx;
		top: 5rpx;
		z-index: 1001;
		border-radius: 100px;
		opacity: 0.9;
	}


	/* 按钮 */
	.edit {
		bottom: 300rpx;
		right: 75rpx;
		position: fixed;
		z-index: 9999;
	}


	.pa,
	.pa0 {
		position: absolute
	}

	.pa0 {
		left: 0;
		top: 0
	}


	.bg0 {
		width: 100rpx;
		height: 100rpx;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.bg1 {
		width: 100%;
		height: 100%;
	}




	.hx-box {
		top: 50%;
		left: 50%;
		width: 100rpx;
		height: 100rpx;
		transform-style: preserve-3d;
		transform: translate(-50%, -50%) rotateY(75deg) rotateZ(10deg);
	}

	.hx-box .pr {
		width: 100rpx;
		height: 100rpx;
		transform-style: preserve-3d;
		animation: hxz 20s linear infinite;
	}

	@keyframes hxz {
		0% {
			transform: rotateX(0deg);
		}

		100% {
			transform: rotateX(-360deg);
		}
	}



	.hx-box .pr .pa0 {
		width: 100rpx;
		height: 100rpx;
		/* border: 4px solid #5ec0ff; */
		border-radius: 1000px;
	}

	.hx-box .pr .pa0 .span {
		display: block;
		width: 100%;
		height: 100%;
		background: url(https://resource.tuniaokj.com/images/cool_bg_image/arc4.png) no-repeat center center;
		background-size: 100% 100%;
		animation: hx 4s linear infinite;
	}

	@keyframes hx {
		to {
			transform: rotate(360deg);
		}
	}

	.hx-k1 {
		transform: rotateX(-60deg) rotateZ(-60deg)
	}

	.hx-k2 {
		transform: rotateX(-30deg) rotateZ(-30deg)
	}

	.hx-k3 {
		transform: rotateX(0deg) rotateZ(0deg)
	}

	.hx-k4 {
		transform: rotateX(30deg) rotateZ(30deg)
	}

	.hx-k5 {
		transform: rotateX(60deg) rotateZ(60deg)
	}

	.hx-k6 {
		transform: rotateX(90deg) rotateZ(90deg)
	}
</style>