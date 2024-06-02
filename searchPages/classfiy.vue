<template>
	<view>
		<tn-nav-bar fixed :bottomShadow="true" backTitle=" ">
			<view>
				<text class="tn-text-lg">{{key}}</text>
				<text class="tn-text-xl tn-padding-left-sm tn-icon-service"></text>
			</view>
		</tn-nav-bar>
		<view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
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
									<tn-tag backgroundColor="#ffc20e" width="60rpx" height="32rpx" fontColor="#080808">{{item.type}}</tn-tag>
								</view>
							</view>
							<view class="listtitle">
								<view class="listtitle1">{{ item.title }}</view>
								<view class="user">
									<image :src="item.avatar" class="image" @click="goHome(item.userId)"></image>
									<text class="username">{{ item.username }}</text>
								</view>
							</view>
						</view>
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
				list: [],
				key: '',
			}
		},
		onLoad(options) {
			this.key = options.searkey
			this.getBlogByKey()
		},
		methods: {
			goHome(userId){
				uni.navigateTo({
					url:'/searchPages/userHome?userId='+userId
				})
			},
			async getBlogByKey() {
				const {
					data
				} = await uni.$http.get('/blog/getBlogByKey/' + this.key)
				if (data.code === 1) {
					data.data.forEach(item => item.images = item.images.split(",")[0]);
					this.list = data.data
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #eee;
		height: 100%;
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
	.text-show {
			display: -webkit-box;
			text-overflow: ellipsis;
			overflow: hidden;
			-webkit-line-clamp: 1;
			-webkit-box-orient: vertical;
		}

	.listtitle {
		padding-left: 22rpx;
		font-size: 24rpx;
		padding-bottom: 22rpx;

		.listtitle1 {
			line-height: 39rpx;
			text-overflow: -o-ellipsis-lastline;
			overflow: hidden;
			font-size: 16px;
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
			font-size: 13px;
			font-weight: 490;
			color: black;
		}
	}

	.template-index {
		max-height: 100vh;
	}
</style>