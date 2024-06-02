<template>
	<view>
		<view>
			<tn-nav-bar fixed :bottomShadow="true" backTitle=" ">
				<view>
					<text class="tn-text-lg">审核管理</text>
					<text class="tn-text-xl tn-padding-left-sm tn-icon-filter"></text>
				</view>
			</tn-nav-bar>
		</view>
		<view>
			<view v-if="applyUserList.length===0" style="margin-top: 300rpx;">
				<tn-empty mode="data" text="暂无需审核的用户申请"></tn-empty>
			</view>
		</view>
		<view style="margin-left: 30rpx;">
			<view class="tn-flex tn-flex-direction-column tn-margin-top-sm tn-margin-bottom">
				<view class="tn-margin-bottom-lg" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
					<view v-for="(item,index) in applyUserList" :key="item.id">
						<view class="blogger__item">
							<view class="blogger__author tn-flex tn-flex-row-between tn-flex-col-center">
								<view class="justify__author__info">
									<view class="tn-flex tn-flex-row-center">
										<view class="tn-flex tn-flex-row-center tn-flex-col-center">
											<view class="" @click="goUserHome(item.applyUserId)">
												<tn-avatar class="" shape="circle" :src="item.avatar"
													size="lg"></tn-avatar>
											</view>
											<view class="tn-padding-right tn-text-ellipsis">
												<view
													class="tn-padding-right tn-padding-left-sm tn-text-bold tn-text-lg"
													style="color: #82B2FF;">
													{{ item.username }}
												</view>
												<view
													class="tn-padding-right tn-padding-left-sm tn-padding-top-xs tn-color-gray">
													{{ handlePublishTimeDesc(item.createTime) }}申请
												</view>
											</view>
										</view>
									</view>
								</view>
							</view>
						</view>
						<view
							class="blogger__desc tn-margin-top-sm tn-margin-bottom-sm tn-text-justify tn-flex-col-center tn-flex-row-left">
							<view style="display: flex;align-items: center;font-weight: 600;"><text
									class="tn-icon-phone-fill"
									style="color: #FBBD12;font-size: 30rpx;margin-right: 6rpx;"></text>联系方式:
								{{item.telephone}}
							</view>
							<view style="display: flex;align-items: center;font-weight: 600;margin-top: 12rpx;"><text
									class="tn-icon-sex-female" style="color: #FBBD12;font-size: 34rpx;"></text>真实性别:
								{{item.sex}}
							</view>
							<view style="display: flex;align-items: center;font-weight: 600;margin-top: 12rpx;"><text
									class="tn-icon-coupon-fill"
									style="color: #FBBD12;font-size: 34rpx;margin-right: 2rpx;"></text>申请理由:
								{{item.introduce}}
							</view>
							<view style="margin-top: 10rpx;">
								<tn-button backgroundColor="tn-bg-red" fontColor="tn-color-white" size="sm"
									style="margin-right: 20rpx;" @click="refuseApply(item.id)">拒绝</tn-button>
								<tn-button backgroundColor="tn-bg-indigo" fontColor="tn-color-white" size="sm"
									@click="agreeApply(item.id)">同意</tn-button>
							</view>
							<view style="margin-top: 20rpx;"><u-line></u-line></view>
						</view>
					</view>
					<tn-modal v-model="showErr" title="温馨提示" :content="content" :button="button"
						@click="closeMessageTips"></tn-modal>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activityId: '',
				showErr: false,
				content: '',
				applyUserList: [],
				button: [{
					text: '确定',
					backgroundColor: 'tn-bg-indigo',
					fontColor: '#FFFFFF'
				}],
			};
		},
		onLoad(options) {
			this.activityId = options.activityId
			this.getJoinActivityUserList()
		},
		methods: {
			closeMessageTips(item) {
				if (item.index === 0) {
					this.showErr = false
				}
			},
			async getJoinActivityUserList() {
				const {
					data
				} = await uni.$http.get('/activityApply/getJoinActivityUserList/' + this.activityId)
				if (data.code === 1) {
					this.applyUserList = data.data
				}
			},
			goUserHome(userId) {
				uni.navigateTo({
					url: '/searchPages/userHome?userId=' + userId
				})
			},
			//同意用户申请
			async agreeApply(applyId) {
				const {
					data
				} = await uni.$http.put('/activityApply/agreeApply/' + applyId)
				if (data.code === 1) {
					setTimeout(() => {
						this.getJoinActivityUserList()
					}, 300)
					setTimeout(() => {
						uni.showToast({
							title: '操作成功！',
							icon: 'success'
						})
					}, 1000)
				} else {
					this.content = data.msg
					this.$nextTick(() => {
						this.showErr = true
					})
				}
			},
			//拒绝用户申请
			async refuseApply(applyId) {
				const {
					data
				} = await uni.$http.put('/activityApply/refuseApply/' + applyId)
				if (data.code === 1) {
					setTimeout(() => {
						this.getJoinActivityUserList()
					}, 300)
					setTimeout(() => {
						uni.showToast({
							title: '操作成功！',
							icon: 'success'
						})
					}, 1000)
				} else {
					this.content = data.msg
					this.$nextTick(() => {
						this.showErr = true
					})
				}
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
		}
	}
</script>

<style lang="scss">
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

	.tn-navbg {
		background: linear-gradient(-120deg, #9A5CE5, #01BEFF, #00F5D4, #43e97b);
		/* background: linear-gradient(-120deg,#c471f5, #ec008c, #ff4e50,#f9d423); */
		/* background: linear-gradient(-120deg, #0976ea, #c471f5, #f956b6, #ea7e0a); */
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