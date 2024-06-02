<template>
	<view>
		<view class="tn-navbg" :style="{height: vuex_custom_bar_height + 'px'}">
			<!-- 顶部自定义导航 -->
			<tn-nav-bar fixed alpha customBack>
				<view slot="back" class='tn-custom-nav-bar__back' @click="cancle">
					<text class='icon tn-icon-left-arrow'></text>
				</view>
				<text style="font-weight: 600;">视频收藏</text>
			</tn-nav-bar>
		</view>
		<view style="margin-top: 180rpx;">
			<view v-show="videoList.length==0" style="margin-top: 50rpx;">
				<tn-empty mode="list"></tn-empty>
			</view>
			<view class="container" style="margin-top: 180rpx;">
				<view @click="seeVideoById(item.id)" class="list" style="position: relative;" v-for="item of videoList"
					:key="item.id">
					<video :src="item.url" :autoplay="false" :show-center-play-btn="false" :show-fullscreen-btn="false"
						object-fit="fill" style="width: 222rpx;height: 400rpx;" :show-play-btn="false"
						:poster="item.url+'?x-oss-process=video/snapshot,t_1000,f_jpg'" controls></video>
					<view style="position: absolute;left: 42rpx;bottom: 14rpx;">
						<text class="tn-icon-like" style="font-size: 17px;color: #fff;margin-left: 8rpx;"></text>
						<text style="font-size: 13px;color: #FFF;margin-left: 8rpx;" v-if="item.liked<1">赞</text>
						<text style="font-size: 13px;color: #FFF;margin-left: 8rpx;"
							v-if="item.liked>0&&item.liked<9999">{{item.liked}}</text>
						<text style="font-size: 13px;color: #FFF;margin-left: 8rpx;"
							v-if="item.liked>9999&&item.liked<99999">{{(Math.floor(item.liked/1000)/10) + '万'}}</text>
						<text style="font-size: 13px;color: #FFF;margin-left: 8rpx;"
							v-if="item.liked>99999">{{(Math.floor(item.liked/1000)/10) + '万'}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="tn-tabbar-height"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				videoList: []
			};
		},
		onLoad() {
			this.queryVideoAll()
		},
		methods: {
			seeVideoById(id) {
				uni.navigateTo({
					url: '/minePages/video/video?videoId=' + id
				})
			},
			async queryVideoAll() {
				const {
					data
				} = await uni.$http.get('/video/getUserSaveVideo')
				if (data.code === 1) {
					this.videoList = data.data
				}
			},
			cancle(){
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss">
	.tn-tabbar-height {
		min-height: 80rpx;
		height: calc(80rpx + env(safe-area-inset-bottom) / 2);
	}
	.container {
		display: flex;
		flex-wrap: wrap;

		.list {
			width: 230rpx;
			height: 400rpx;
			margin-left: -2rpx;
			margin-top: 5rpx;
		}
	}

	.container::after {
		content: "";
		width: 254rpx;
	}

	.list:nth-child(1n) {
		padding-left: 32rpx
	}
	.tn-custom-nav-bar__back {
		width: 60%;
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
	
	}
	
	/* 顶部渐变*/
	.tn-navbg {
		background: linear-gradient(-120deg, #0976ea, #c471f5, #f956b6, #ea7e0a);
		background-size: 500% 500%;
		animation: gradientBG 15s ease infinite;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 100;
	}
	
	@keyframes gradientBG {
		0% {
			background-position: 0% 50%;
		}
	
		50% {
			background-position: 100% 50%;
		}
	
		100% {
			background-position: 0% 50%;
		}
	}
	
</style>