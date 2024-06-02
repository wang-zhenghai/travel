<template>
	<view>
		<view>
			<tn-nav-bar fixed :bottomShadow="true" backTitle=" ">
				<view>
					<text class="tn-text-lg">活动管理</text>
					<text class="tn-text-xl tn-padding-left-sm tn-icon-set"></text>
				</view>
			</tn-nav-bar>
		</view>
		<view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
			<u-cell-group>
				<u-cell icon="account-fill" title="成员管理" isLink @click="goAccount"></u-cell>
				<u-cell icon="pushpin-fill" title="审核管理" isLink @click="goApply"></u-cell>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activityId: ''
			};
		},
		onLoad(options) {
			this.activityId = options.activityId
		},
		methods: {
			goAccount() {
				uni.navigateTo({
					url: '/partnerPages/accountManagement?activityId=' + this.activityId
				})
			},
			goApply() {
				uni.navigateTo({
					url: '/partnerPages/activityOderation?activityId=' + this.activityId
				})
			},
		}
	}
</script>

<style lang="scss">

</style>