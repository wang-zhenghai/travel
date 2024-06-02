<template>
	<view>
		<view>
			<tn-nav-bar fixed :bottomShadow="true" backTitle=" ">
				<view>
					<text class="tn-text-lg">成员管理</text>
					<text class="tn-text-xl tn-padding-left-sm tn-icon-service"></text>
				</view>
			</tn-nav-bar>
		</view>
		<view>
			<view v-if="applyUserList.length===0" style="margin-top: 300rpx;">
				<tn-empty mode="data" text="暂无已加入成员"></tn-empty>
			</view>
		</view>
		<view style="margin-left: 30rpx;">
			<view class="" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
				<view class="u-page">
					<u-list>
						<u-list-item v-for="(item, index) in applyUserList" :key="item.id">
							<u-cell>
								<u-avatar slot="icon" shape="square" size="35" :src="item.avatar"
									@click="goUserHome(item.userId)"></u-avatar>
								<view slot="title">
									<text style="font-weight: 700;color: black">
										{{item.username}}
									</text>
								</view>
								<view slot="title">
									<text style="font-weight: 400;color: #A7A7A7;">
										{{handlePublishTimeDesc(item.createTime)}}加入
									</text>
								</view>
								<u-button type="error" size="mini" text="移除" slot="right-icon"
									@click="showRemoveTips(item.userId)" v-if=""></u-button>
							</u-cell>
						</u-list-item>
					</u-list>
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
				content: '确定要移除该成员吗？',
				applyUserList: [],
				userId: '',
				button: [{
						text: '取消',
						backgroundColor: 'tn-bg-indigo',
						fontColor: '#FFFFFF',
					},
					{
						text: '确定',
						backgroundColor: '#E83A30',
						fontColor: '#FFFFFF'
					}
				]
			};
		},
		onLoad(options) {
			this.activityId = options.activityId
			this.getJoinedUserInfo()
		},
		methods: {
			showRemoveTips(userId) {
				this.userId = userId
				this.$nextTick(() => {
					this.showErr = true
				})
			},
			async removeUser() {
				const {
					data
				} = await uni.$http.delete('/activity/removeJoinedUser?userId=' + this.userId + '&acticityId=' + this
					.activityId)
				if (data.code === 1) {
					this.getJoinedUserInfo()
					setTimeout(() => {
						uni.$showMsg('操作成功！')
					}, 600)
				} else {
					uni.$showMsg(data.msg)
				}
			},
			closeMessageTips(item) {
				if (item.index === 0) {
					this.showErr = false
				}
				if (item.index === 1) {
					//移除用户
					this.removeUser()
					setTimeout(() => {
						this.showErr = false
					}, 1000)
				}
			},
			async getJoinedUserInfo() {
				const {
					data
				} = await uni.$http.get('/activity/getJoinedUserInfo/' + this.activityId)
				if (data.code === 1) {
					this.applyUserList = data.data
				}
			},
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