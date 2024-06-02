<template>
	<view>
		<view v-if="!token">
			<user-login></user-login>
		</view>
		<view v-else>
			<view class="template-mine tn-safe-area-inset-bottom">
				<!-- 顶部自定义导航 -->
				<tn-nav-bar :isBack="false" :bottomShadow="false" backgroundColor="none">
				</tn-nav-bar>
				<view class="top-backgroup">
					<image src='https://resource.tuniaokj.com/images/my/my-bg2.png' mode='widthFix'
						class='backgroud-image'></image>
				</view>
				<view class="about__wrap">
					<!-- 图标logo/头像 -->
					<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin-bottom">
						<view class="justify-content-item">
							<view class="tn-flex tn-flex-col-center tn-flex-row-left" @click="toSet">
								<view class="logo-pic tn-shadow">
									<view class="logo-image">
										<view class="tn-shadow-blur"
											:style="{backgroundImage: 'url(' + avatar + ')', backgroundSize:'cover',width:'110rpx',height:'100rpx'}">
										</view>
									</view>
								</view>
								<view class="tn-padding-right">
									<view class="tn-padding-right tn-padding-left-sm tn-text-xl tn-text-bold">
										<text class="tn-color-brown--dark">{{username}}</text>
									</view>
									<!-- <view
										class="tn-padding-right tn-padding-top-xs tn-padding-left-sm tn-text-ellipsis">
										<text class="tn-color-brown" style="opacity: 0.5;">认证会员</text>
										<text
											class="tn-color-brown tn-text-bold tn-padding-left-sm">SVIP{{level}}</text>
									</view> -->	
									 <view
										class="tn-padding-right tn-padding-top-xs tn-padding-left-sm tn-text-ellipsis">
										<text class="tn-color-red" style="opacity: 0.8;">{{isFace?'已人脸认证':'未人脸认证'}}</text>
											<text class="tn-icon-success-circle-fill tn-padding-left-xs" style="color: green;" v-if="isFace"></text>
											<text class="tn-icon-close-fill tn-padding-left-xs" style="color: red;" v-if="isFace===false"></text>
									</view>
								</view>
							</view>
						</view>
					</view>
					<view class="tn-flex">
						<view class="tn-flex-1 about-shadow tn-bg-white" @click="goToMyPulish"
							style="margin: 30rpx 15rpx 0 0;padding: 30rpx 0;">
							<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
								<view
									class="icon20__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-orangered tn-color-white">
									<view class="tn-icon-send"></view>
								</view>
								<view class="tn-text-center" style="font-size: 30rpx;">
									<view class="tn-text-ellipsis">我的发布</view>
								</view>
							</view>
						</view>
						<view class="tn-flex-1 about-shadow tn-bg-white" @click="tn('/preferredPages/order')"
							style="margin: 30rpx 0 0 15rpx;padding: 30rpx 0;">
							<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
								<view
									class="icon20__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-purplered tn-color-white">
									<view class="tn-icon-order"></view>
								</view>
								<view class="tn-text-center" style="font-size: 30rpx;">
									<view class="tn-text-ellipsis">我的兑换</view>
								</view>
							</view>
						</view>
					</view>

					<!-- 更多信息-->
					<view class="about-shadow tn-margin-top-xl tn-padding-top-sm tn-padding-bottom-sm tn-bg-white">

						<view class="tn-flex tn-flex-row-center tn-radius tn-padding-top">
							<view class="tn-padding-sm tn-margin-xs tn-radius" @click="tn('/circlePages/blogger')">
								<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
									<view
										class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-bg-orange">
										<view class="tn-icon-caring" style="color: #080808;"></view>
									</view>
									<view class="tn-text-center">
										<text class="tn-text-ellipsis">朋友圈</text>
									</view>
								</view>
							</view>
							<view class="tn-padding-sm tn-margin-xs tn-radius" @click="seeMyLike">
								<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
									<view
										class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-bg-orange">
										<view class="tn-icon-star" style="color: #080808;"></view>
									</view>
									<view class="tn-text-center">
										<text class="tn-text-ellipsis">游记点赞</text>
									</view>
								</view>
							</view>
							<view class="tn-padding-sm tn-margin-xs tn-radius" @click="seeMySave">
								<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
									<view
										class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-bg-orange">
										<view class="tn-icon-video" style="color: #080808;"></view>
									</view>
									<view class="tn-text-center">
										<text class="tn-text-ellipsis">视频收藏</text>
									</view>
								</view>
							</view>
							<view class="tn-padding-sm tn-margin-xs tn-radius" @click="tn('/minePages/set')">
								<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
									<view
										class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-bg-orange">
										<view class="tn-icon-set" style="color: #080808;"></view>
									</view>
									<view class="tn-text-center">
										<text class="tn-text-ellipsis">全局设置</text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- @click="tn('/homePages/about')" -->
			<view class="about-shadow tn-margin-top-xl tn-padding-top-sm tn-padding-bottom-sm tn-tabbar-height">
				<tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30"
					  @click="tn('/homePages/bigModel/bigModel')">
					<view class="tn-flex tn-flex-col-center">
						<view
							class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-cool-bg-color-15 tn-color-white">
							<view class="tn-icon-share"></view>
						</view>
						<view class="tn-margin-left-sm tn-flex-1">智能助手</view>
						<view class="tn-color-cyan--light tn-icon-link"></view>
					</view>
				</tn-list-cell>
				<tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30"  @click="tn('/minePages/integral')">
					<view class="tn-flex tn-flex-col-center">
						<view
							class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-cool-bg-color-2 tn-color-white">
							<view class="tn-icon-light-fill"></view>
						</view>
						<view class="tn-margin-left-sm tn-flex-1">我的积分</view>
						<view class="tn-color-blue--light tn-icon-copy"></view>
					</view>
				</tn-list-cell>
				<tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30" @click="goToQRCode">
					<button class="tn-flex tn-flex-col-center tn-button--clear-style">
						<view
							class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-cool-bg-color-7 tn-color-white">
							<view class="tn-icon-qr-code"></view>
						</view>
						<view class="tn-flex tn-flex-row-between" style="width: 100%;">
							<view class="tn-margin-left-sm">二维码名片</view>
							<view class="tn-color-green--light tn-icon-code"></view>
						</view>
					</button>
				</tn-list-cell>
				<tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30">
					<button class="tn-flex tn-flex-col-center tn-button--clear-style" open-type="feedback">
						<view
							class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-cool-bg-color-7 tn-color-white">
							<view class="tn-icon-comment-fill"></view>
						</view>
						<view class="tn-flex tn-flex-row-between" style="width: 100%;">
							<view class="tn-margin-left-sm">问题反馈</view>
							<view class="tn-color-green--light tn-icon-edit"></view>
						</view>
					</button>
				</tn-list-cell>
				<tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30" @click="cache">
					<button class="tn-flex tn-flex-col-center tn-button--clear-style">
						<view
							class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-cool-bg-color-5 tn-color-white">
							<view class="tn-icon-refresh-simple"></view>
						</view>
						<view class="tn-flex tn-flex-row-between" style="width: 100%;">
							<view class="tn-margin-left-sm">清理缓存</view>
							<view class="tn-color-orange--light tn-icon-trust"></view>
						</view>
					</button>
				</tn-list-cell>
				<tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30" @click="callPhoneNumber" 
					data-number="17585826546">
					<view class="tn-flex tn-flex-col-center">
						<view
							class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-cool-bg-color-9 tn-color-white">
							<view class="tn-icon-phone-fill"></view>
						</view>
						<view class="tn-margin-left-sm tn-flex-1">技术支持</view>
						<view
							class="tn-margin-left-sm tn-color-orangered tn-text-sm tn-padding-left-xs tn-padding-right-xs tn-bg-orange--disabled tn-round">
							175****6546</view>
					</view>
				</tn-list-cell>
			</view>
		</view>
	</view>
	</view>
	</view>
</template>

<script>
	export default {
		name: 'Mine',
		data() {
			return {
				token: '',
				username: '',
				avatar: '',
				level: '',
				isFace:false
			}
		},
		created() {
			this.token = uni.getStorageSync('token')
			this.queryUserById()
			this.getUserInfoById()
			this.selectUserIsFace()
		},
		methods: {
			toSet(){
				uni.redirectTo({
					url:'/minePages/set?isFace='+this.isFace
				})
			},
			seeMySave(){
                 uni.navigateTo({
                 	url:'/interestPages/my-save-video'
                 })
			},
			async selectUserIsFace(){
				const {
					data
				} = await uni.$http.get('/face/selectUserIsFace')
				if(data.code===1){
					//已认证
					this.isFace=true
				}else{
					//未认证
					this.isFace=false
				}
			},
			seeMyLike(){
				uni.navigateTo({
					url:'/interestPages/my-like-blog'
				})
			},
			goToMyPulish(){
				wx.vibrateLong()
				uni.navigateTo({
					url:'/interestPages/publish'
				})
			},
			cache() {
				uni.showToast({
					title: '清理成功!',
					icon: 'success'
				})
			},
			// 查看我的二维码名片
			goToQRCode() {
			    uni.navigateTo({
			    	url:'/searchPages/myQRCode'
			    })
			},
			public() {
				uni.$showMsg('暂不考虑开源！后期也许会开源，望理解！')
			},
			async queryUserById() {
				const {
					data
				} = await uni.$http.get('/user/queryUserById?userId=' + uni.getStorageSync('userId'))
				this.username = data.data.username
				this.avatar = data.data.avatar
			},
			async getUserInfoById() {
				const {
					data
				} = await uni.$http.get('/userInfo/getUserInfoById?userId=' + uni.getStorageSync('userId'))
				this.level = data.data.level
			},
			// 跳转
			tn(e) {
				uni.navigateTo({
					url: e,
				});
			},
			//拨打固定电话
			callPhoneNumber() {
				uni.makePhoneCall({
					phoneNumber: "17585826546",
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
	::v-deep .tn-safe-area-inset-bottom {
		padding-bottom: 0;
	}

	.template-mine {
		max-height: 100vh;
	}

	.tn-tabbar-height {
		min-height: 500rpx;
		height: calc(140rpx + env(safe-area-inset-bottom) / 2);
	}

	/* 自定义导航栏内容 start */
	.custom-nav {
		height: 100%;

		&__back {
			margin: auto 5rpx;
			font-size: 40rpx;
			margin-right: 10rpx;
			flex-basis: 5%;
			width: 100rpx;
			position: absolute;
		}
	}

	/* 自定义导航栏内容 end */

	/* 顶部背景图 start */
	.top-backgroup {
		height: 450rpx;
		z-index: -1;

		.backgroud-image {
			width: 100%;
			height: 450rpx;
			// z-index: -1;
		}
	}

	/* 顶部背景图 end */

	/* 标题 start */
	.nav_title {
		-webkit-background-clip: text;
		color: #0E122A;


		&--wrap {
			position: relative;
			display: flex;
			height: 120rpx;
			align-items: center;
			justify-content: center;
			font-weight: bold;
			background-image: url(https://resource.tuniaokj.com/images/title_bg/title44.png);
			background-size: cover;
		}
	}

	/* 标题 end */

	/* 用户头像 start */
	.logo-image {
		width: 110rpx;
		height: 110rpx;
		position: relative;
	}

	.logo-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border: 8rpx solid rgba(255, 255, 255, 0.05);
		box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.15);
		border-radius: 50%;
		overflow: hidden;
		// background-color: #FFFFFF;
	}

	/* 页面 start*/
	.about-shadow {
		border-radius: 15rpx;
		box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
	}

	.about {

		&__wrap {
			position: relative;
			z-index: 1;
			margin: 20rpx 30rpx;
			margin-top: -230rpx;
		}
	}

	/* 页面 end*/

	/* 图标容器12 start */
	.tn-three {
		position: absolute;
		top: 50%;
		right: 50%;
		bottom: 50%;
		left: 50%;
		transform: translate(-38rpx, -16rpx) rotateX(30deg) rotateY(20deg) rotateZ(-30deg);
		text-shadow: -1rpx 2rpx 0 #f0f0f0, -2rpx 4rpx 0 #f0f0f0, -10rpx 20rpx 30rpx rgba(0, 0, 0, 0.2);
	}

	.icon20 {
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
					background-image: url(https://resource.tuniaokj.com/images/cool_bg_image/icon_bg.png);
				}
			}
		}
	}

	/* 图标容器12 start */
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
				width: 15rpx;
				height: 15rpx;
				font-size: 50rpx;
				border-radius: 50%;
				margin-bottom: 38rpx;
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

				}
			}
		}
	}

	/* 图标容器1 start */
	.icon1 {
		&__item {
			// width: 30%;
			background-color: #FFFFFF;
			border-radius: 10rpx;
			padding: 30rpx;
			margin: 20rpx 10rpx;
			transform: scale(1);
			transition: transform 0.3s linear;
			transform-origin: center center;

			&--icon {
				width: 40rpx;
				height: 40rpx;
				font-size: 28rpx;
				border-radius: 50%;
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
					background-image: url(https://resource.tuniaokj.com/images/cool_bg_image/icon_bg.png);
				}
			}
		}
	}

	/* 图标容器1 end */

	/* 大嘴鸟*/
	.dong {
		z-index: 9999;
		position: fixed;
		top: -40px;
		right: -80px;
		transform: scale(0.24);
		-webkit-transform: scale(0.24);
		-moz-transform: scale(0.24);

	}

	.monster {
		transform: rotate(-50deg);
		-ms-transform: rotate(-50deg);
		/* IE 9 */
		-moz-transform: rotate(-50deg);
		/* Firefox */
		-webkit-transform: rotate(-50deg);
		/* Safari 和 Chrome */
		-o-transform: rotate(-50deg);
		/* Opera */
		display: flex;
		justify-content: center;
		position: relative;
		width: 170px;
		height: 400px;
		border-top-left-radius: 200px;
		border-top-right-radius: 200px;
		background-color: #3C47D7;
		box-shadow: 20px 20px 60px #4650E5;
	}

	.monster__face {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		position: absolute;
		top: 14%;
		width: 75%;
		height: 160px;
	}

	.monster__noses {
		top: 50%;
		display: flex;
		justify-content: space-between;
		width: 28%;
		height: auto;
		margin-bottom: 10px;
	}

	.monster__nose {
		width: 8px;
		height: 12px;
		border-radius: 20px;
		background: rgba(0, 0, 0, 0.5);
		box-shadow: 4px 8px 5px rgba(0, 0, 0, 0.1);
	}

	.monster__mouth {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		width: 100%;
		height: 0%;
		overflow: hidden;
		border: 25px solid #FFC333;
		border-radius: 100px;
		background-color: #810332;
		animation: mouth 1.75s infinite;
		box-shadow: 4px 8px 5px rgba(0, 0, 0, 0.2);
		box-sizing: border-box;
	}

	.monster__mouth::before {
		content: '';
		position: absolute;
		width: 150px;
		height: 80px;
		border-radius: 100px;
		background-color: #400018;
	}

	.monster__mouth::after {
		content: '';
		position: absolute;
		bottom: -80px;
		width: 160px;
		height: 80px;
		border-top-left-radius: 50%;
		border-top-right-radius: 50%;
		background-color: #DC1B50;
		animation: tongue 1.75s infinite;
	}

	.monster__top {
		position: absolute;
		top: -30px;
		width: 170px;
		height: 30px;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
		background-color: #ffffff;
		z-index: 100;
		animation: t 1.75s infinite;
	}

	.monster__bottom {
		position: absolute;
		bottom: 0;
		width: 100px;
		height: 30px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		background-color: #ffffff;
		z-index: 100;
		animation: b 1.75s infinite;
	}


	.avatar-eye {
		position: absolute;
		top: -10%;
		width: 65px;
		height: 65px;
		background: linear-gradient(105deg, white, #cb87f4);
		border-radius: 100%;
		box-shadow: 4px 8px 5px rgba(0, 0, 0, 0.2);
		margin: 3px;
		-webkit-transform: translateX(-50%);
		transform: translateX(-50%);
	}


	.avatar-eye--green {
		background: linear-gradient(to bottom, #fdfdfd, #c3efea);
	}

	.avatar-eye--violet {
		background: linear-gradient(to bottom, #fdfdfd, #e6d6f6);
	}


	.eye--left {
		left: 10%;
	}

	.eye--right {
		left: 85%;
	}

	.eye--center {
		left: 45%;
		top: 10%;
	}

	.avatar-eye-pupil {
		position: absolute;
		width: 55%;
		height: 55%;
		left: 50%;
		top: 25%;
		-webkit-transform: translate(-50%);
		transform: translate(-50%);
		z-index: 100;
		border-radius: 100%;
	}


	.pupil--green {
		background: linear-gradient(135deg, rgba(188, 248, 177, 0.7), #2fa38c 75%);
	}

	.pupil--pink {
		background: linear-gradient(135deg, #f1a183, #8535cd);
	}


	.avatar-eye-pupil-blackThing {
		position: absolute;
		width: 55%;
		height: 55%;
		left: 50%;
		top: 25%;
		background: #2c2f32;
		-webkit-transform: translate(-50%);
		transform: translate(-50%);
		border-radius: 100%;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
	}

	.avatar-eye-pupil-lightReflection {
		position: absolute;
		width: 7px;
		height: 7px;
		left: 25%;
		top: 10%;
		background: #ebebeb;
		-webkit-transform: translate(-50%);
		transform: translate(-50%);
		border-radius: 100%;
		box-shadow: 10px 10px 10px rgba(255, 255, 255, 0.2);
	}

	/*大嘴动起来*/
	@keyframes t {

		0%,
		10%,
		80%,
		100% {
			top: -30px;
		}

		20% {
			top: 0px;
		}

		30% {
			top: -20px;
		}

		40% {
			top: -0px;
		}

		50% {
			top: -25px;
		}

		70% {
			top: 0px;
		}
	}

	@keyframes b {

		0%,
		10%,
		80%,
		100% {
			bottom: -30px;
		}

		20% {
			bottom: 0px;
		}

		30% {
			bottom: -20px;
		}

		40% {
			bottom: -0px;
		}

		50% {
			bottom: -25px;
		}

		70% {
			bottom: 0px;
		}
	}

	@keyframes mouth {

		0%,
		10%,
		100% {
			width: 100%;
			height: 0%;
		}

		15% {
			width: 90%;
			height: 30%;
		}

		20% {
			width: 50%;
			height: 70%;
		}

		25% {
			width: 70%;
			height: 70%;
		}

		30% {
			width: 80%;
			height: 60%;
		}

		35% {
			width: 60%;
			height: 70%;
		}

		40% {
			width: 55%;
			height: 75%;
		}

		45% {
			width: 50%;
			height: 90%;
		}

		50% {
			width: 40%;
			height: 70%;
		}

		55% {
			width: 70%;
			height: 95%;
		}

		60% {
			width: 40%;
			height: 50%;
		}

		65% {
			width: 100%;
			height: 60%;
		}

		70% {
			width: 100%;
			height: 70%;
		}

		75% {
			width: 90%;
			height: 70%;
		}

		80% {
			width: 50%;
			height: 70%;
		}

		85% {
			width: 90%;
			height: 50%;
		}

		85% {
			width: 40%;
			height: 70%;
		}

		90% {
			width: 90%;
			height: 30%;
		}

		95% {
			width: 100%;
			height: 10%;
		}
	}

	@keyframes tongue {

		0%,
		20%,
		100% {
			bottom: -80px;
		}

		30%,
		90% {
			bottom: -40px;
		}

		40% {
			bottom: -45px;
		}

		50% {
			bottom: -50px;
		}

		70% {
			bottom: -80px;
		}

		90% {
			bottom: -40px;
		}
	}
</style>