<template>
	<view>
		<view class="tn-navbg" :style="{height: vuex_custom_bar_height + 'px'}">
			<tn-nav-bar fixed alpha customBack>
				<view slot="back" class='tn-custom-nav-bar__back' @click="cancle">
					<text class='icon tn-icon-left-arrow'></text>
				</view>
				<text style="font-weight: 600;">游记点赞</text>
			</tn-nav-bar>
		</view>
		<view style="margin-top: 180rpx;">
			<view v-show="list.length==0" style="margin-top: 50rpx;">
				<tn-empty mode="list"></tn-empty>
			</view>
			<view class="Index">
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
	export default {
		data() {
			return {
				list: []
			};
		},
		onLoad() {
			this.getBlogList()
		},
		methods: {
			//获取游记列表
			async getBlogList() {
				const {
					data
				} = await uni.$http.get('/blog/getUserLikeBlog')
				data.data.forEach(item => item.images = item.images.split(",")[0]);
				this.list = data.data
			},
			cancle() {
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss">
	//瀑布流
	page {
		background-color: #eee;
		height: 100%;
	}

	.tn-tabbar-height {
		min-height: 80rpx;
		height: calc(80rpx + env(safe-area-inset-bottom) / 2);
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