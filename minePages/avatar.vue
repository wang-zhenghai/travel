<template>
	<view class="template-avatar tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed>头像</tn-nav-bar>

		<view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
			<view class="cropper-options">
				<view class="cropper-options__item" @click="chooseImage">选择图片</view>
				<view class="cropper-options__item" @click="switchBorderRect">{{ switchText }}</view>
			</view>
		</view>
		<tn-cropper :imageUrl="imageUrl" :isRound="isRound" @cropper="cropperFinish"></tn-cropper>
		<tn-popup v-model="showCropperImage" :marginTop="vuex_custom_bar_height" length="80%" mode="center"
			:closeBtn="true">
			<view class="tn-flex tn-flex-col-center tn-flex-row-center" style="margin: 40rpx 60rpx;">
				<image :src="cropperImageUrl" style="width: 80%;" mode="widthFix"></image>
			</view>
		</tn-popup>
	</view>
</template>

<script>
	import multipleOptionsDemo from '@/libs/components/multiple-options-demo'
	export default {
		name: 'TemplateAvatar',
		components: {
			multipleOptionsDemo
		},
		data() {
			return {
				imageUrl: '',
				isRound: true,
				switchText: '切换为正方形裁剪框',
				showCropperImage: false,
				cropperImageUrl: '',
			}
		},
		methods: {
			// 选择图片
			chooseImage() {
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'],
					sourceType: ['album', 'camera'],
					success: (res) => {
						const tempFilePaths = res.tempFilePaths[0]
						this.imageUrl = tempFilePaths
					},
					fail: (err) => {
						console.log('chooseImage fail', err)
					}
				})
			},
			// 切换裁剪框形状
			switchBorderRect() {
				this.isRound = !this.isRound
				if (this.isRound) {
					this.switchText = '切换为正方形裁剪框'
				} else {
					this.switchText = '切换为圆形裁剪框'
				}
			},
			// 裁剪完成
			cropperFinish(res) {
				this.showCropperImage = true
				uni.uploadFile({
					url: 'https://www.wangzh.work/upload', 
					filePath: res.url,
					name: 'file',
					success: (resp) => {
						const updateAvatarFrom={userId:uni.getStorageSync('userId'),avatar:JSON.parse(resp.data).data}
						uni.$http.put("/user/updateAvatar",updateAvatarFrom).then((res)=>{
							if(res.data.code===1){
								uni.showToast({
									title: '更新头像成功',
									icon: 'success',
									duration: 1000
								})
								setTimeout(()=>{
									uni.reLaunch({
										url:'/pages/index'
									})
								},1000)
							}else{
								uni.showToast({
									title: '更新头像失败',
									icon: 'error',
									duration: 1000
								})
							}
						})
					},
					fail: (err) => {
						console.log('uploadImage fail', err);
						uni.showModal({
							content: err.errMsg,
							showCancel: false
						});
					},
				});
				if (res.url) {
					this.cropperImageUrl = res.url
				}
				if (res.base64) {
					this.cropperImageUrl = `${res.base64}`
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cropper-options {
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
		margin-top: 90rpx;

		&__item {
			color: #FFFFFF;
			font-size: 28rpx;
			padding: 18rpx 56rpx;
			border: 2rpx solid #FFFFFF;
			z-index: 1000;

			&:nth-child(1) {
				border-right: none;
			}
		}
	}
</style>