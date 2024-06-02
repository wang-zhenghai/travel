<template>
	<view>
		<view v-if="loading">
			<Loading></Loading>
		</view>
		<view v-if="show">
			<view class="tn-navbg" :style="{height: vuex_custom_bar_height + 'px'}">
				<!-- 顶部自定义导航 -->
				<tn-nav-bar fixed alpha customBack>
					<view slot="back" class='tn-custom-nav-bar__back' @click="cancle">
						<text class='icon tn-icon-left-arrow'></text>
					</view>
					<text style="font-weight: 600;">{{province}}</text>
				</tn-nav-bar>
			</view>
			<view style="margin-top: 93px;">
				<view v-for="(item,index) of attractions" :key="item.id">
					<view style="display: flex;margin-left: 4rpx;margin-top: 8rpx;"
						@click="seeAttractionInfo(item.id)">
						<view class="left">
							<u--image :src="item.image" width="120px" height="90px" :lazy-load="true" radius="5">
								<template v-slot:loading>
									<u-loading-icon color="red"></u-loading-icon>
								</template>
							</u--image>
						</view>
						<view class="right" style="margin-left:10rpx;" @click="seeAttractionInfo(item.id)">
							<view class="u-line-1" style="color: black;font-weight: 700;">
								{{item.name}}
							</view>
							<view style="margin-top: 8rpx;">
								<u-rate count="5" :value="item.rate" :readonly="true"></u-rate>
							</view>
							<view class="u-line-2" style="margin-top: 8rpx;">
								{{item.address}}
							</view>
						</view>
					</view>
					<view style="margin-top: 5rpx;" v-if="attractions.length!==index+1"><u-gap height="2"
							bgColor="#bbb"></u-gap></view>
				</view>
			</view>
			<view class='tn-tabbar-height'></view>
		</view>
	</view>
</template>

<script>
	import Loading from '@/components/loading/loading.vue'
	export default {
		components: {
			Loading
		},
		data() {
			return {
				rate: 3,
				province: '',
				longitude: '',
				latitude: '',
				attractions: [],
				loading: true,
				show: false,
			};
		},
		methods: {
			change(index) {
				this.current = index;
			},
			//获取景点
			async getAttractions() {
				const {
					data
				} = await uni.$http.get('/attractions/getAttractions/' + this.province)
				data.data.forEach(item => item.image = item.image.split(",")[0]);
				this.attractions = data.data
			},
			seeAttractionInfo(attractionId) {
				uni.navigateTo({
					url: '/searchPages/attractionInfo?attractionId=' + attractionId
				})
			},
			cancle() {
				uni.navigateBack()
			},
		},
		onLoad(options) {
			setTimeout(() => {
				this.loading = false
				this.show = true
			}, 1300)
			this.province = options.address
			this.getAttractions()
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