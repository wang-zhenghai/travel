<template>
	<view>
		<view class="tn-navbg" :style="{height: vuex_custom_bar_height + 'px'}">
			<!-- 顶部自定义导航 -->
			<tn-nav-bar fixed alpha customBack>
				<view slot="back" class='tn-custom-nav-bar__back' @click="cancle">
					<text class='icon tn-icon-left-arrow'></text>
				</view>
				<text style="font-weight: 600;" class="u-line-1">景点详情</text>
			</tn-nav-bar>
		</view>
		<view :style="{marginTop: vuex_custom_bar_height + 'px'}">
			<tn-swiper :list="swiperList" height="480"></tn-swiper>
			<view style="display: flex;">
				<view style="color: black;font-weight: 600;flex: 0.90;margin-top: 24rpx;margin-left: 38rpx;">
					{{attractionInfo.name}}
				</view>
				<view style="display: flex;flex-direction: column;align-items: center;">
					<text style="color: #FA3534;">{{attractionInfo.rate}}.0分</text>
					<u-rate count="5" :value="attractionInfo.rate" :readonly="true"></u-rate>
				</view>
			</view>
			<view style="margin-top: 14rpx;"><u-gap height="1" bgColor="#bbb"></u-gap></view>
			<view style="display: flex;margin-left: 38rpx;margin-top: 14rpx;" @click="openMap(attractionInfo.location)">
				<view style="margin-top: 3rpx;"><u-icon name="map-fill"></u-icon></view>
				<view style="flex: 1;font-size: 27rpx;" class="u-line-1">{{attractionInfo.address}}</view>
				<view><u-icon name="arrow-right"></u-icon></view>
			</view>
			<view>
				<u-divider text="景点简介" lineColor="#33a3dc"></u-divider>
				<u-read-more :toggle="true" ref="uReadMore" showHeight="200">
					<u-parse :content="attractionInfo.introduce" @load="load"></u-parse>
				</u-read-more>
			</view>
			<view>
				<u-divider text="景点参考价格" lineColor="#33a3dc"></u-divider>
				<view>
					<text style="color: #33a3dc;font-size: 35rpx;">{{attractionInfo.price}}</text>
				</view>
			</view>
		</view>
		<view class='tn-tabbar-height'></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				attractionInfo: '',
				swiperList: []
			};
		},
		methods: {
			cancle() {
				uni.navigateBack()
			},
			load() {
				this.$refs.uReadMore.init();
			},
			async getAttractionsById(attractionId) {
				const {
					data
				} = await uni.$http.get('/attractions/getAttractionsById/' + attractionId)
				if (data.code === 1) {
					const images = data.data.image.split(',')
					for (var i = 0; i < images.length; i++) {
						this.swiperList.push({
							image: images[i]
						})
					}
					this.attractionInfo = data.data
				} else {
					uni.$showMsg('获取景点详情失败！')
				}
			},
			openMap(location) {
				const locations = location.split(',')
				console.log("获取经纬度", locations[0], locations[1]);
				const lon = locations[0]
				const lat = locations[1]
				//打开地图，并将位置传入
				uni.getLocation({
					success: res => {
						console.log('location success', parseFloat(lon), parseFloat(lat))
						uni.openLocation({
							latitude: parseFloat(lat),
							longitude: parseFloat(lon),
							scale: 18
						})
					}
				})
			},
		},
		onLoad(options) {
			this.getAttractionsById(options.attractionId)
		}
	}
</script>

<style lang="scss">
	.tn-tabbar-height {
		min-height: 70rpx;
		height: calc(70rpx + env(safe-area-inset-bottom) / 2);
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
		background: linear-gradient(-120deg, #00aa7f, #aaff00, #00ffff, #ea7e0a);
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