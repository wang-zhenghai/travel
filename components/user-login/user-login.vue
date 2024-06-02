<template>
	<view class="login-container">
		<u-icon name="account-fill" color="#AFAFAF" size="100"></u-icon>
		<view style="width: 80%;">
			<u-button type="success" shape="circle" text="去登录" class="btn-login" @click="goLogin"></u-button>
		</view>
		<text class="tips-text">您还未登录,登录后尽享更多功能</text>
	</view>
</template>

<script>
	export default {
		name:'Login',
		methods:{
			goLogin(){
				uni.navigateTo({
					url: '/pages/login/login'
				})
			},
			rightClick(){
				uni.navigateBack()
			}
		}
	}
	
</script>

<style lang="scss" scoped>
	.login-container {
		height: 750rpx;
		background-color: #F8F8F8;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
		overflow: hidden;

		&::after {
			content: '';
			display: block;
			width: 100%;
			height: 40px;
			position: absolute;
			background-color: white;
			bottom: 0;
			left: 0;
			border-radius: 100%;
			transform: translateY(50%);
		}

		.btn-login {
			border-radius: 100px;
			margin: 15px 0;
		}

		.tips-text {
			font-size: 16px;
			color: gray;
			margin-top: 5px;
		}
	}

	.loginForm {
		margin-top: 200px;
	}
</style>