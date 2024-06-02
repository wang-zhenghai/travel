<template>
	<view>
		<tn-nav-bar fixed backgroundColor="#00aaff" :isBack="true" :bottomShadow="true" backTitle=" ">
			<view>
				<text class="tn-text-lg" style="font-weight: bold;">我的关注</text>
				<text class="tn-text-xl tn-padding-left-sm tn-icon-my-add"></text>
			</view>
		</tn-nav-bar>
		<view class="" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
			<view class="u-page">
				<view v-show="friendsList.length==0">
					<u-empty mode="list" icon="http://cdn.uviewui.com/uview/empty/list.png">
					</u-empty>
				</view>
				<u-list>
					<u-list-item v-for="(item, index) in friendsList" :key="item.id">
						<u-cell :title="item.username">
							<u-avatar slot="icon" shape="square" size="35" :src="item.avatar"
								customStyle="margin: -3px 5px -3px 0" @click="seeInfo(item.id)"></u-avatar>
							<u-button type="error" size="mini" text="取消关注" slot="right-icon"
								@click="showCancelModal(item.id)"></u-button>
						</u-cell>
					</u-list-item>
				</u-list>
			</view>
			<view>
				<u-modal :show="cancelFollow" title="亲,确定要取消关注Ta吗?" @confirm="cancelFollowById" :asyncClose="true"
					:showCancelButton="true" @cancel="cancelFollow=false" cancelColor="#ff0000"
					confirmColor="#4c99fe"></u-modal>
			</view>
		</view>
		<view class="tn-tabbar-height"></view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				friendsList: [],
				cancelFollow: false,
				targetId: '',
			}
		},
		onLoad() {
			this.getFriendList()
		},
		methods: {
			showCancelModal(targetId, username) {
				this.cancelFollow = true
				this.$nextTick(() => {
					this.targetId = targetId
				})
			},
			async cancelFollowById() {
				const {
					data
				} = await uni.$http.delete('/follow/cancelFollow/' + this.targetId)
				if (data.code === 1) {
					this.cancelFollow = false
					this.getFriendList()
					uni.showToast({
						title: data.data,
						icon: 'success'
					})
				} else {
					this.cancelFollow = false
					uni.showToast({
						title: '取关失败！',
						icon: 'error'
					})
				}
			},
			seeInfo(userId) {
				uni.navigateTo({
					url: '/searchPages/userHome?userId=' + userId
				})
			},
			async getFriendList() {
				const {
					data
				} = await uni.$http.get('/follow/common?userId=' + uni.getStorageSync('userId'))
				if (data.code === 1) {
					this.friendsList = data.data.users
				} else {
					uni.showToast({
						title: '获取好友数据失败~',
						icon: 'error'
					})
				}
			},
		}
	}
</script>

<style lang="scss" scoped>

</style>