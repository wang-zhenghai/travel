<template>
	<view>
		<view style="margin-top: 10rpx;">
			<tn-swiper :list="list" :effect3d="true" height="800rpx"></tn-swiper>
		</view>
		<view class="search-box">
			<u-search placeholder="请输入结伴活动名称或地点" :showAction="false" v-model="activityName"></u-search>
			<tn-button backgroundColor="darkgrey" fontColor="#fff" style="margin-left: 6rpx;"
				@click="searchActivity">搜索</tn-button>
		</view>
		<view class="tn-flex tn-flex-row-between" style="margin-left: 28rpx;">
			<view class="justify-content-item  tn-text-bold tn-text-xl">
				活动报名
			</view>
		</view>
		<view style="margin-top: 8rpx;margin-left: 28rpx;">
			<text style="color: darkgray;font-size: 30rpx;">参与结伴活动和小伙伴一起嗨皮！</text>
		</view>
		<view style="margin-top: 22rpx;">
			<view v-if="content.length===0">
				 <tn-empty mode="search"></tn-empty>
			</view>
			<block v-for="(item,index) in content" :key="index">
				<view class="blogger__item">
					<view class="blogger__author tn-flex tn-flex-row-between tn-flex-col-center">
						<view class="justify__author__info">
							<view class="tn-flex tn-flex-row-center">
								<view class="tn-flex tn-flex-row-center tn-flex-col-center">
									<view class="" @click="goUserHome(item.userId)">
										<tn-avatar class="" shape="circle" :src="item.userAvatar" size="lg"></tn-avatar>
									</view>
									<view class="tn-padding-right tn-text-ellipsis">
										<view class="tn-padding-right tn-padding-left-sm tn-text-bold tn-text-lg">
											{{ item.username }}
										</view>
										<view
											class="tn-padding-right tn-padding-left-sm tn-padding-top-xs tn-color-gray">
											{{ handlePublishTimeDesc(item.createTime) }}发布
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
					<view
						class="blogger__desc tn-margin-top-sm tn-margin-bottom-sm tn-text-justify tn-flex-col-center tn-flex-row-left"
						@click="tn('/circlePages/reserve?id='+item.id)">
						<text style="font-weight: 800;margin-left: 5rpx;margin-top: -20rpx;"
							class="text-show">{{ item.activityTitle }}</text>
						<view>
							<view style="display: flex;align-items: center;font-weight: 540;"><text
									class="tn-icon-time-fill"
									style="color: green;font-size: 30rpx;margin-right: 6rpx;"></text>结伴时间:
								{{item.activityTime}}
							</view>
							<view style="display: flex;align-items: center;font-weight: 540;"><text
									class="tn-icon-location-fill" style="color: green;font-size: 34rpx;"></text>结伴地点:
								{{item.activityAddress}}
							</view>
							<view style="display: flex;align-items: center;font-weight: 540;"><text
									class="tn-icon-flower-fill"
									style="color: green;font-size: 34rpx;margin-right: 2rpx;"></text>希望人数:
								{{item.wishCount}}人
							</view>
						</view>
					</view>
					<!-- 不用限制长度了，因为发布的时候限制长度了-->
					<block v-if="item.mainImage">
						<view v-if="[1,2,4].indexOf(item.mainImage.length) != -1" class="tn-padding-top-xs"
							@click="tn('/circlePages/reserve?id='+item.id)">
							<image v-for="(image_item,image_index) in item.mainImage" :key="image_index"
								class="blogger__main-image" :class="{
			            'blogger__main-image--1 tn-margin-bottom-sm': item.mainImage.length === 1,
			            'blogger__main-image--2 tn-margin-right-sm tn-margin-bottom-sm': item.mainImage.length === 2 || item.mainImage.length === 4
			          }" :src="image_item" mode="aspectFill"></image>
						</view>
						<view v-else class="tn-padding-top-xs"@click="tn('/circlePages/reserve?id='+item.id)">
							<tn-grid hoverClass="none" :col="3">
								<block v-for="(image_item,image_index) in item.mainImage" :key="image_index">
									<!-- #ifndef MP-WEIXIN -->
									<tn-grid-item style="width: 30%;margin: 10rpx;">
										<image class="blogger__main-image blogger__main-image--3" :src="image_item"
											mode="aspectFill"></image>
									</tn-grid-item>
									<!-- #endif-->
									<!-- #ifdef MP-WEIXIN -->
									<tn-grid-item style="width: 30%;margin: 10rpx;">
										<image class="blogger__main-image blogger__main-image--3" :src="image_item"
											mode="aspectFill"></image>
									</tn-grid-item>
									<!-- #endif-->
								</block>
							</tn-grid>
						</view>
					</block>
					<view class="justify-content-item tn-text-center tn-flex" style="margin-left: 6rpx;"
						@click="tn('/circlePages/reserve?id='+item.id)">
						<text class="tn-padding-xs">{{item.joinCount}} 人已参与</text>
					</view>
				</view>
			</block>
		</view>
		<view class='tn-tabbar-height'></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pageNum: 1,
				pageSize: 2,
				activityName: '',
				list: [{
						image: 'https://ts3.cn.mm.bing.net/th?id=OIP-C.4XzV9mLkASafLL6m2kQSZgHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2'
					},
					{
						image: 'https://ts1.cn.mm.bing.net/th?id=OIP-C.sOomj6G-J50RJInOg61GlgHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2'
					},
					{
						image: 'https://ts3.cn.mm.bing.net/th?id=OIP-C.DIvzbgmWVKra9fEn7xo_GwHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2'
					}
				],
				content: []
			};
		},
		watch:{
			activityName:{
				handler(newValue){
					if(newValue===''){
						this.pageNum=1;
						this.getActivityList()
					}
				}
			}
		},
		methods: {
			goUserHome(userId) {
				uni.navigateTo({
					url: '/searchPages/userHome?userId=' + userId
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
			tn(e) {
				uni.navigateTo({
					url: e,
				});
			},
			//搜索活动
			async searchActivity() {
				if(this.activityName==''){
					uni.$showMsg('亲，请输入内容~')
					return
				}
				this.pageNum=1
				this.getActivityList()
			},
			async getActivityList() {
				const {
					data
				} = await uni.$http.get(`/activity/getActivityList?pageNum=${this.pageNum}&pageSize=${this.pageSize}&activityName=${this.activityName}`)
				const obj = data.data.activityList.map(item => {
					item.mainImage = item.activityImage.split(',')
					return item
				})
				this.content = obj
			},
		},
		created() {
			uni.setNavigationBarTitle({
				title: '活动列表'
			})
			this.getActivityList()
		},
		async onReachBottom() {
			this.pageNum++
			const {
				data
			} = await uni.$http.get(`/activity/getActivityList?pageNum=${this.pageNum}&pageSize=${this.pageSize}&activityName=${this.activityName}`)
			const obj = data.data.activityList.map(item => {
				item.mainImage = item.activityImage.split(',')
				return item
			})
			this.content = [...this.content, ...obj]
			if (data.data.activityList.length == 0) {
				uni.$showMsg('客官！暂时没有更多啦~')
			}
		},
		onPullDownRefresh() {
			this.pageNum = 1
			this.getActivityList()
			setTimeout(() => {
				uni.stopPullDownRefresh()
				uni.$showMsg('刷新成功~')
			}, 400)
		}
	}
</script>

<style lang="scss" scoped>
	.search-box {
		display: flex;
		align-items: center;
		margin: 0 24rpx;
		height: 44px;
		margin-top: 14rpx;
	}

	/* 底部安全边距 start*/
	.tn-tabbar-height {
		min-height: 120rpx;
		height: calc(140rpx + env(safe-area-inset-bottom) / 2);
		height: calc(140rpx + constant(safe-area-inset-bottom));
	}

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
</style>