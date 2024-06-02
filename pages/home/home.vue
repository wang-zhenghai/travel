<template>
	<view class="template-index tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed alpha :isBack="false" :bottomShadow="false">
			<view class="custom-nav tn-flex tn-flex-col-center tn-flex-row-left">
				<!-- 图标logo -->
				<view class="custom-nav__back">
					<view class="logo-pic tn-shadow-blur"
						style="background-image:url('https://wangzhenghai-oss.oss-cn-hangzhou.aliyuncs.com/5d61615a-4a36-4c5b-ace6-d3ffde8e1ba4.png')">
						<view class="logo-image">
						</view>
					</view>
				</view>
				<!-- 搜索框 -->
				<view class="custom-nav__search tn-flex tn-flex-col-center tn-flex-row-center"
					@click="tn('/homePages/search')">
					<view class="custom-nav__search__box tn-flex tn-flex-col-center tn-flex-row-left"
						style="background-color: rgba(230,230,230,0.3);">
						<view class="custom-nav__search__icon tn-icon-search tn-color-white"></view>
						<view class="custom-nav__search__text tn-padding-left-xs tn-color-white">搜索目的地/景点/攻略</view>
					</view>
				</view>
			</view>
		</tn-nav-bar>
		<swiper class="card-swiper" :circular="true" :autoplay="true" duration="500" interval="2000"
			@change="cardSwiper">
			<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
				<view class="swiper-item image-banner" @click="seeAttractionInfo(item.id)">
					<image :src="item.url" mode="aspectFill"></image>
				</view>
			</swiper-item>
		</swiper>

		<view class="indication">
			<block v-for="(item,index) in swiperList" :key="index">
				<view class="spot" :class="cardCur==index?'active':''"></view>
			</block>
		</view>
		<view  class="tn-flex tn-margin-xs tn-padding-top-sm">
			<view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius"
				@click="tn('/searchPages/classfiy?searkey=结伴')">
				<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
					<view
						class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-main-gradient-purplered--light tn-color-purplered">
						<view class="tn-icon-fire-fill tn-three"></view>
					</view>
					<view class="tn-color-black tn-text-center">
						<text class="tn-text-ellipsis">结伴</text>
					</view>
				</view>
			</view>
			<view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius"
				@click="tn('/searchPages/classfiy?searkey=徒步')">
				<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
					<view
						class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-main-gradient-indigo--light tn-color-indigo">
						<view class="tn-icon-sport-run tn-three"></view>
					</view>
					<view class="tn-color-black tn-text-center">
						<text class="tn-text-ellipsis">徒步</text>
					</view>
				</view>
			</view>
			<view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius"
				@click="tn('/searchPages/classfiy?searkey=摄影')">
				<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
					<view
						class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-main-gradient-purple--light tn-color-purple">
						<view class="tn-icon-camera tn-three"></view>
					</view>
					<view class="tn-color-black tn-text-center">
						<text class="tn-text-ellipsis">摄影</text>
					</view>
				</view>
			</view>
			<view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius"
				@click="tn('/activityPages/activity')">
				<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
					<view
						class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-main-gradient-orange--light tn-color-orange">
						<view class="tn-icon-footprint tn-three"></view>
					</view>
					<view class="tn-color-black tn-text-center">
						<text class="tn-text-ellipsis">参与活动</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 方式12 end-->
		<view class="tn-flex tn-flex-row-between tn-margin-top">
			<view class="justify-content-item tn-margin tn-text-bold tn-text-xxl">
				推荐UP
			</view>
		</view>
		<swiper class="card-swiper2 tn-margin-top-sm" :circular="true" :autoplay="false" duration="500" interval="5000"
			@change="resume">
			<swiper-item v-for="(item,index) in resumeList" :key="index" :class="cardCur2==index?'cur':''" @click="goSee(item.userId)">
				<view class="swiper-item1 image-banner tn-shadow-blur"
					style="background-image:url('https://resource.tuniaokj.com/images/resume/resume-bg2.jpg');width: 660rpx;height: 100%;background-size: cover;border-radius: 15rpx;">
				</view>
				<view class="swiper-item2 image-banner tn-shadow-blur"
					:style="'background-image:url('+ item.avatar +');width: 120rpx;height: 120rpx;background-size: cover;'">
				</view>
				<view class="swiper-item-text tn-text-shadow-indigo">
					<view class="tn-text-bold tn-color-blue--dark" style="font-size: 45rpx;"
						>{{item.username}}</view>
					<view class="tn-color-blue--dark tn-padding-top-sm">
						{{item.introduce}}
					</view>
					<view class="tn-flex tn-padding-top-xl" style="margin-left: -50rpx;">
						<view class="tn-flex-1 tn-padding-sm tn-margin-right">
							<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
								<view class="">
									<view class="tn-text-xxl tn-color-blue">{{item.likedCount}}</view>
								</view>
								<view class="tn-margin-top-xs tn-color-grey tn-text-df tn-text-center">
									<text class="tn-icon-praise"></text>
									<text class="tn-padding-left-xs">获赞</text>
								</view>
							</view>
						</view>
						<view class="tn-flex-1 tn-padding-sm tn-margin-left tn-margin-right">
							<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
								<view class="">
									<view class="tn-text-xxl tn-color-orange">{{item.follow}}</view>
								</view>
								<view class="tn-margin-top-xs tn-color-grey tn-text-df tn-text-center">
									<text class="tn-icon-my-add"></text>
									<text class="tn-padding-left-xs">关注</text>
								</view>
							</view>
						</view>
						<view class="tn-flex-1 tn-padding-sm tn-margin-left">
							<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
								<view class="">
									<view class="tn-text-xxl tn-color-red">{{item.fans}}</view>
								</view>
								<view class="tn-margin-top-xs tn-color-grey tn-text-df tn-text-center">
									<text class="tn-icon-flower"></text>
									<text class="tn-padding-left-xs">粉丝</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</swiper-item>
		</swiper>

		<!-- 攻略 -->
		<view class="">
			<view class="tn-flex tn-flex-row-between">
				<view class="justify-content-item tn-margin tn-text-bold tn-text-xxl">
					热门攻略
				</view>
				<view class="justify-content-item tn-margin tn-text-lg tn-color-grey" @click="goStrategy">
					<text class="tn-padding-xs">查看更多</text>
					<text class="tn-icon-topics"></text>
				</view>
			</view>
			<view class="uni-list">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value,key) in strategyList"
					:key="key">
					<view class="uni-media-list">
						<image class="uni-media-list-logo" :src="value.images" @click="goDetail(value.id)"></image>
						<view class="uni-media-list-body" @click="goDetail(value.id)">
							<view class="uni-media-list-text-top">{{value.title}}</view>
							<view class="uni-media-list-text-bottom">
								<text>{{value.username}}</text>
								<text >{{value.createTime}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="">
			<view class="tn-flex tn-flex-row-between">
				<view class="justify-content-item tn-margin tn-text-bold tn-text-xxl">
					热门游记
				</view>
				<view class="justify-content-item tn-margin tn-text-lg tn-color-grey" @click="goTravel">
					<text class="tn-padding-xs">查看更多</text>
					<text class="tn-icon-topics"></text>
				</view>
			</view>
			<view class="Index">
				<!-- 瀑布流布局列表 -->
				<view class="pubuBox">
					<view class="pubuItem">
						<view class="item-masonry" v-for="(item, index) in list" :key="item.id">
							<navigator :url="'/minePages/blog/blog?blogId='+item.id">
								<image :src="item.images" mode="widthFix"></image>
							</navigator>
							<view
								style="display: flex;align-items: center;padding-left: 18rpx;padding-bottom: 10rpx;padding-top: 12rpx;position: relative;">
								<text class="tn-icon-location-fill"
									style="color:black;font-size: 18px;margin-right: 8rpx;"></text>
								<text class="text-show" style="color: black;font-weight: 650">{{ item.location }}</text>
								<view style="position: absolute;left: 18rpx;bottom:30rpx;padding-bottom: 18rpx;">
									<tn-tag backgroundColor="#ffc20e" width="60rpx" height="32rpx"
										fontColor="#080808">{{item.type}}</tn-tag>
								</view>
							</view>
							<view class="listtitle">
								<view class="listtitle1">{{ item.content }}</view>
								<view class="user">
									<image :src="item.avatar" class="image"
										@click="tn('/searchPages/userHome?userId='+item.userId)"></image>
									<text class="username">{{ item.username }}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="tn-tabbar-height"></view>
		</view>
	</view>
</template>

<script>
	var dateUtils = require('@/utils/util.js').dateUtils;
	export default {
		name: 'Index',
		data() {
			return {
				cardCur: 0,
				isAndroid: true,
				swiperList: [{
						id: 1,
						url: 'http://store.is.autonavi.com/showpic/5034b3c2f0e8dae92dd2467e4fbc21fe?type=pic',
					}, {
						id: 11,
						url: 'https://aos-comment.amap.com/B0FFHMS3CA/headerImg/e7174a9224e1fd979e955482b2fe61cc_2048_2048_80.jpg?type=pic',
					}, {
						id: 16,
						url: 'http://store.is.autonavi.com/showpic/149ebcc3b083e4f296b7b9450a1c95f3?type=pic',
					}, {
						id: 24,
						url: 'https://iknow-pic.cdn.bcebos.com/060828381f30e9244db7b1a542086e061d95f717',
					},
					{
						id: 32,
						url: 'https://pic4.zhimg.com/80/v2-d1c477cac4f61e373ea95593b45ef253_1440w.webp',
					}
				],
				cardCur2: 0,
				resumeList: [],
				list: [],
				strategyList: [],
			}
		},
		created() {
			const systemInfo = uni.getSystemInfoSync()
			if (systemInfo.system.toLocaleLowerCase().includes('ios')) {
				this.isAndroid = false
			} else {
				this.isAndroid = true
			}
			this.getBlogList()
			this.getRecommendUp()
			this.searchStrategy()
		},
		methods: {
			goStrategy(){
				uni.navigateTo({
					url:'/activityPages/strategyPages/strategyPages'
				})
			},
			goTravel(){
				uni.navigateTo({
					url:'/activityPages/travelPages/travelPages'
				})
			},
			seeAttractionInfo(attractionId) {
				uni.navigateTo({
					url: '/searchPages/attractionInfo?attractionId=' + attractionId
				})
			},
			goDetail(id) {
				uni.navigateTo({
					url: '/homePages/Strategy/Strategy?id=' + id
				})
			},
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
			async searchStrategy() {
				const {
					data
				} = await uni.$http.get('/queryAll/getStrategy')
				if (data.code === 1) {
					data.data.forEach(item => item.createTime = this.handlePublishTimeDesc(item.createTime))
					this.strategyList = data.data
				} else {
					uni.$showMsg('获取攻略数据失败！')
				}
			},
			goSee(userId) {
				uni.navigateTo({
					url: "/searchPages/userHome?userId=" + userId
				})
			},
			seeAll() {
				uni.navigateTo({
					url: '/pages/circle/circle'
				})
			},
			//获取游记列表
			async getBlogList() {
				const {
					data
				} = await uni.$http.get('/blog/hot?pageNum=1' + '&pageSize=7')
				data.data.forEach(item => item.images = item.images.split(",")[0]);
				this.list = data.data
			},
			//获取推荐UP
			async getRecommendUp() {
				const {
					data
				} = await uni.$http.get('/userInfo/getRecommendUp?pageNum=1' + '&pageSize=5')
				this.resumeList = data.data
			},
			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			// resume
			resume(e) {
				this.cardCur2 = e.detail.current
			},
			// 跳转
			tn(e) {
				uni.navigateTo({
					url: e,
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
	//瀑布流
	page {
		background-color: #eee;
		height: 100%;
	}

	.text-show {
		display: -webkit-box;
		text-overflow: ellipsis;
		overflow: hidden;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}

	.pubuBox {
		padding: 22rpx;
	}

	.pubuItem {
		column-count: 2;
		column-gap: 20rpx;
	}

	.item-masonry {
		box-sizing: border-box;
		border-radius: 15rpx;
		overflow: hidden;
		background-color: #fff;
		break-inside: avoid;
		/*避免在元素内部插入分页符*/
		box-sizing: border-box;
		margin-bottom: 20rpx;
		box-shadow: 0px 0px 28rpx 1rpx rgba(78, 101, 153, 0.14);
	}

	.item-masonry image {
		width: 100%;
	}

	.listtitle {
		padding-left: 22rpx;
		font-size: 24rpx;
		padding-bottom: 22rpx;

		.listtitle1 {
			line-height: 39rpx;
			text-overflow: -o-ellipsis-lastline;
			overflow: hidden;
			font-size: 14px;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			line-clamp: 2;
			-webkit-box-orient: vertical;
			min-height: 39rpx;
			max-height: 78rpx;
			color: black;
			font-weight: 300;
		}

		.listtitle2 {
			color: #ff0000;
			font-size: 32rpx;
			line-height: 32rpx;
			font-weight: bold;
			padding-top: 22rpx;

			.listtitle2son {
				font-size: 32rpx;
			}
		}

		.listtitle3 {
			font-size: 28rpx;
			color: #909399;
			line-height: 32rpx;
			padding-top: 22rpx;
		}
	}

	.Index {
		width: 100%;
		height: 100%;
	}

	.user {
		margin-top: 6rpx;

		image {
			border-radius: 50%;
			width: 30px;
			height: 30px;
			margin-right: 4px;
			vertical-align: middle;
		}

		.username {
			vertical-align: middle;
			font-size: 13px
		}
	}

	.template-index {
		max-height: 100vh;
	}

	.tn-tabbar-height {
		min-height: 100rpx;
		height: calc(120rpx + env(safe-area-inset-bottom) / 2);
	}


	/* 轮播视觉差 start */
	.card-swiper {
		height: 540rpx !important;
	}

	.card-swiper swiper-item {
		width: 750rpx !important;
		left: 0rpx;
		box-sizing: border-box;
		// padding: 0rpx 30rpx 90rpx 30rpx;
		overflow: initial;
	}

	.card-swiper swiper-item .swiper-item {
		width: 100%;
		display: block;
		height: 100%;
		transform: scale(1);
		transition: all 0.2s ease-in 0s;
		will-change: transform;
		overflow: hidden;
	}

	.card-swiper swiper-item.cur .swiper-item {
		transform: none;
		transition: all 0.2s ease-in 0s;
		will-change: transform;
	}

	.card-swiper swiper-item .swiper-item-text {
		margin-top: -320rpx;
		text-align: center;
		width: 100%;
		display: block;
		height: 50%;
		border-radius: 10rpx;
		transform: translate(100rpx, 0rpx) scale(0.9, 0.9);
		transition: all 0.6s ease 0s;
		will-change: transform;
		overflow: hidden;
	}

	.card-swiper swiper-item.cur .swiper-item-text {
		margin-top: -320rpx;
		width: 100%;
		transform: translate(0rpx, 0rpx) scale(0.9, 0.9);
		transition: all 0.6s ease 0s;
		will-change: transform;
	}

	.image-banner {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.image-banner image {
		width: 100%;
		height: 100%;
	}

	/* 轮播指示点 start*/
	.indication {
		z-index: 9999;
		width: 100%;
		height: 36rpx;
		position: absolute;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.spot {
		background-color: #FFFFFF;
		opacity: 0.6;
		width: 10rpx;
		height: 10rpx;
		border-radius: 20rpx;
		top: -60rpx;
		margin: 0 8rpx !important;
		position: relative;
	}

	.spot.active {
		opacity: 1;
		width: 30rpx;
		background-color: #FFFFFF;
	}

	/* 简历推荐 start */
	.card-swiper2 {
		height: 420rpx !important;
		overflow: hidden;
	}

	.card-swiper2 swiper-item {
		width: 680rpx !important;
		left: 30rpx;
		box-sizing: border-box;
		overflow: initial;
		padding: 0 0rpx 40rpx 0;
	}

	.card-swiper2 swiper-item .swiper-item1 {
		width: 100%;
		display: block;
		height: 100%;
		transform: scale(0.97);
		transition: all 0.2s ease-in 0s;
		will-change: transform;
		background-color: #E7FAFE;
	}

	.card-swiper2 swiper-item.cur .swiper-item1 {
		transform: none;
		transition: all 0.2s ease-in 0s;
		will-change: transform;
	}

	.card-swiper2 swiper-item .swiper-item2 {
		margin-top: -180rpx;
		width: 100%;
		display: block;
		height: 50%;
		border-radius: 50%;
		transform: translate(510rpx, -160rpx) scale(0.9, 0.9);
		transition: all 0.3s ease 0s;
		will-change: transform;
	}

	.card-swiper2 swiper-item.cur .swiper-item2 {
		margin-top: -180rpx;
		width: 100%;
		transform: translate(510rpx, -150rpx) scale(0.9, 0.9);
		transition: all 0.3s ease 0s;
		will-change: transform;
	}

	.card-swiper2 swiper-item .swiper-item-text {
		margin-top: -270rpx;
		width: 100%;
		display: block;
		height: 100%;
		border-radius: 10rpx;
		transform: translate(30rpx, -20rpx) scale(0.8, 0.8);
		transition: all 0.6s ease 0s;
		will-change: transform;
		overflow: hidden;
	}

	.card-swiper2 swiper-item.cur .swiper-item-text {
		margin-top: -270rpx;
		width: 100%;
		transform: translate(20rpx, 0rpx) scale(0.9, 0.9);
		transition: all 0.6s ease 0s;
		will-change: transform;
	}



	/* 底部tabbar假阴影 start*/
	.bg-tabbar-shadow {
		background-image: repeating-linear-gradient(to top, rgba(0, 0, 0, 0.1) 10rpx, #FFFFFF, #FFFFFF);
		position: fixed;
		bottom: 0;
		height: 450rpx;
		width: 100vw;
		z-index: -1;
	}

	/* 图标容器12 start */
	.tn-three {
		position: absolute;
		top: 50%;
		right: 50%;
		bottom: 50%;
		left: 50%;
		transform: translate(-38rpx, -20rpx) rotateX(20deg) rotateY(10deg) rotateZ(-20deg);
		text-shadow: -1rpx 2rpx 0 #f0f0f0, -2rpx 4rpx 0 #f0f0f0, -10rpx 20rpx 30rpx rgba(0, 0, 0, 0.2);
	}

	.icon12 {
		&__item {
			width: 30%;
			background-color: #FFFFFF;
			border-radius: 10rpx;
			padding: 30rpx;
			margin: 20rpx 10rpx;
			transform: scale(1);
			transition: transform 0.3s linear;
			transform-origin: center center;

			&--icon {
				width: 100rpx;
				height: 100rpx;
				font-size: 60rpx;
				border-radius: 50%;
				margin-bottom: 18rpx;
				position: relative;
				z-index: 1;

				&::after {
					content: " ";
					position: absolute;
					z-index: -1;
					width: 100%;
					height: 100%;
					left: 0;
					bottom: 0;
					border-radius: inherit;
					opacity: 1;
					transform: scale(1, 1);
					background-size: 100% 100%;
					background-image: url(https://resource.tuniaokj.com/images/cool_bg_image/icon_bg6.png);


				}
			}
		}
	}

	/* 自定义导航栏内容 start */
	.custom-nav {
		height: 100%;

		&__back {
			margin: auto 5rpx;
			font-size: 40rpx;
			margin-right: 10rpx;
			margin-left: 30rpx;
			flex-basis: 5%;
		}

		&__search {
			flex-basis: 60%;
			width: 100%;
			height: 100%;

			&__box {
				width: 100%;
				height: 70%;
				padding: 10rpx 0;
				margin: 0 30rpx;
				border-radius: 60rpx 60rpx 0 60rpx;
				font-size: 24rpx;
			}

			&__icon {
				padding-right: 10rpx;
				margin-left: 20rpx;
				font-size: 30rpx;
			}

			&__text {
				// color: #AAAAAA;
			}
		}
	}

	.logo-image {
		width: 65rpx;
		height: 65rpx;
		position: relative;
	}

	.logo-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 50%;
	}

	/* 自定义导航栏内容 end */


	/* 热门图片 start*/
	.image-tuniao1 {
		padding: 165rpx 0rpx;
		font-size: 40rpx;
		font-weight: 300;
		position: relative;
	}

	.image-tuniao2 {
		padding: 75rpx 0rpx;
		font-size: 40rpx;
		font-weight: 300;
		position: relative;
	}

	.image-tuniao3 {
		padding: 90rpx 0rpx;
		font-size: 40rpx;
		font-weight: 300;
		position: relative;
	}

	.image-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 10rpx;
	}

	/* 胶囊banner*/
	.image-capsule {
		padding: 100rpx 0rpx;
		font-size: 40rpx;
		font-weight: 300;
		position: relative;
	}

	.image-piccapsule {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 20rpx 20rpx 0 0;
	}

	/* 标题 start */
	.nav_title {
		-webkit-background-clip: text;
		color: transparent;

		&--wrap {
			position: relative;
			display: flex;
			height: 120rpx;
			font-size: 46rpx;
			align-items: center;
			justify-content: center;
			font-weight: bold;
			background-image: url(https://resource.tuniaokj.com/images/title_bg/title00.png);
			background-size: cover;
		}
	}

	/* 标题 end */

	/* 游记展示 start */
	.shopList {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;

		.showListItem {
			width: 46%;
			background-color: white;
			border-radius: 5px;
			overflow: hidden;
			margin-bottom: 8px;

			.title {
				font-size: 15px;
				line-height: 18px;
				font-weight: bold;
				color: #333;
				width: 100%;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 1;
				overflow: hidden;
				padding: 0 2px;
				box-sizing: border-box;
				margin-bottom: 2px;
			}
		}

		image {
			width: 100%;
			border-radius: 5%;
			height: 260px;
		}
	}

	.user {
		image {
			border-radius: 50%;
			width: 30px;
			height: 30px;
			margin-right: 4px;
			vertical-align: middle;
		}

		.username {
			vertical-align: middle;
			font-weight: 490;
			color: black;
		}
	}

	/* 业务展示 end */

	/* 底部tabbar start*/
	.footerfixed {
		position: fixed;
		width: 100%;
		bottom: 0;
		z-index: 999;
		background-color: #FFFFFF;
		box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
	}

	.tabbar {
		display: flex;
		align-items: center;
		min-height: 110rpx;
		justify-content: space-between;
		padding: 0;
		height: calc(110rpx + env(safe-area-inset-bottom) / 2);
		padding-bottom: calc(env(safe-area-inset-bottom) / 2);
	}

	.tabbar .action {
		font-size: 22rpx;
		position: relative;
		flex: 1;
		text-align: center;
		padding: 0;
		display: block;
		height: auto;
		line-height: 1;
		margin: 0;
		overflow: initial;
	}

	.bar-center {
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

	.uni-list {
		background-color: #FFFFFF;
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.uni-list:after {
		position: absolute;
		z-index: 10;
		right: 0;
		bottom: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.uni-list::before {
		position: absolute;
		z-index: 10;
		right: 0;
		top: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.uni-list-cell {
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.uni-list-cell-hover {
		background-color: #eee;
	}

	.uni-list-cell::after {
		position: absolute;
		z-index: 3;
		right: 0;
		bottom: 0;
		left: 30upx;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.uni-list .uni-list-cell:last-child::after {
		height: 0upx;
	}

	/* 图文列表 */
	.uni-media-list {
		padding: 22upx 30upx;
		box-sizing: border-box;
		display: flex;
		width: 100%;
		flex-direction: row;
	}

	.uni-navigate-right.uni-media-list {
		padding-right: 74upx;
	}

	.uni-pull-right {
		flex-direction: row-reverse;
	}

	.uni-pull-right>.uni-media-list-logo {
		margin-right: 0upx;
		margin-left: 20upx;
	}

	.uni-media-list-logo image {
		height: 100%;
		width: 100%;
	}


	.uni-media-list-text-bottom {
		width: 100%;
		line-height: 30upx;
		font-size: 26upx;
		color: #8f8f94;
	}

	.uni-media-list-logo {
		width: 180upx;
		height: 140upx;
		margin-right: 20upx;
	}

	.uni-media-list-body {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		overflow: hidden;
		height: auto;
	}

	.uni-media-list-text-top {
		width: 100%;
		line-height: 36upx;
		font-size: 30upx;
		height: 74upx;
		font-size: 28upx;
		overflow: hidden;
	}

	.uni-media-list-text-bottom {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.tabbar .action .bar-icon {
		width: 100rpx;
		position: relative;
		display: block;
		height: auto;
		margin: 0 auto 10rpx;
		text-align: center;
		font-size: 42rpx;
		// line-height: 50rpx;
	}

	.tabbar .action .bar-icon image {
		width: 50rpx;
		height: 50rpx;
		display: inline-block;
	}

	.tabbar .action .bar-circle {
		position: relative;
		display: block;
		margin: 0rpx auto 0rpx;
		text-align: center;
		font-size: 52rpx;
		line-height: 90rpx;
		// background-color: #01BEFF;
		width: 100rpx !important;
		height: 100rpx !important;
		overflow: hidden;
		// border-radius: 50%;
		// box-shadow: 0px 10px 30px rgba(70,23,129, 0.12),
		//   0px -8px 40px rgba(255, 255, 255, 1),
		//   inset 0px -10px 10px rgba(70,23,129, 0.05),
		//   inset 0px 10px 20px rgba(255, 255, 255, 1);
		// box-shadow: 0rpx 0rpx 20rpx 0rpx rgba(1, 190, 255, 0.5);
	}

	.tabbar .action .bar-circle image {
		width: 100rpx;
		height: 100rpx;
		display: inline-block;
		margin: 0rpx auto 0rpx;
	}

	/* 流星+悬浮 */
	.nav-index-button {
		animation: suspension 3s ease-in-out infinite;
		z-index: 999999;


		&__content {
			position: absolute;
			width: 100rpx;
			height: 100rpx;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);

			&--icon {
				width: 100rpx;
				height: 100rpx;
				font-size: 60rpx;
				border-radius: 50%;
				margin-bottom: 18rpx;
				position: relative;
				z-index: 1;
				transform: scale(0.85);

				&::after {
					content: " ";
					position: absolute;
					z-index: -1;
					width: 100%;
					height: 100%;
					left: 0;
					bottom: 0;
					border-radius: inherit;
					opacity: 1;
					transform: scale(1, 1);
					background-size: 100% 100%;
					// background-image: url(https://resource.tuniaokj.com/images/cool_bg_image/icon_bg6.png);
				}
			}
		}

		&__meteor {
			position: absolute;
			top: 50%;
			left: 50%;
			width: 100rpx;
			height: 100rpx;
			transform-style: preserve-3d;
			transform: translate(-50%, -50%) rotateY(75deg) rotateZ(10deg);

			&__wrapper {
				width: 100rpx;
				height: 100rpx;
				transform-style: preserve-3d;
				animation: spin 20s linear infinite;
			}

			&__item {
				position: absolute;
				width: 100rpx;
				height: 100rpx;
				border-radius: 1000rpx;
				left: 0;
				top: 0;

				&--pic {
					display: block;
					width: 100%;
					height: 100%;
					background: url(https://resource.tuniaokj.com/images/cool_bg_image/arc1.png) no-repeat center center;
					background-size: 100% 100%;
					animation: arc 4s linear infinite;
				}
			}
		}
	}


	@keyframes suspension {

		0%,
		100% {
			transform: translateY(0);
		}

		50% {
			transform: translateY(-0.6rem);
		}
	}

	@keyframes spin {
		0% {
			transform: rotateX(0deg);
		}

		100% {
			transform: rotateX(-360deg);
		}
	}

	@keyframes arc {
		to {
			transform: rotate(360deg);
		}
	}
</style>