<template>
	<view>
		<view class="tn-navbg" :style="{height: vuex_custom_bar_height + 'px'}">
			<!-- 顶部自定义导航 -->
			<tn-nav-bar fixed alpha customBack>
				<view slot="back" class='tn-custom-nav-bar__back' @click="cancle">
					<text class='icon tn-icon-left-arrow'></text>
				</view>
				<text>更多攻略</text>
			</tn-nav-bar>
		</view>
		<view :style="{marginTop: vuex_custom_bar_height + 'px'}">
			<view class="uni-list">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value,key) in strategyList"
					:key="key">
					<view class="uni-media-list" @click="goDetail(value.id)">
						<image class="uni-media-list-logo" :src="value.images" ></image>
						<view class="uni-media-list-body">
							<view class="uni-media-list-text-top">{{value.title}}</view>
							<view class="uni-media-list-text-bottom">
								<text @click="goSee(value.userId)">{{value.username}}</text>
								<text>{{value.createTime}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var dateUtils = require('@/utils/util.js').dateUtils;
	export default {
		data() {
			return {
				strategyList: []
			};
		},
		onLoad() {
			this.searchStrategy()
		},
		onPullDownRefresh() {
			this.searchStrategy()
			setTimeout(() => {
				uni.$showMsg('刷新成功！')
				uni.stopPullDownRefresh()
			}, 1500)
		},
		methods: {
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
				} = await uni.$http.get('/queryAll/getStrategyList')
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
			cancle() {
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss">
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