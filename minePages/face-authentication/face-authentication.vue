<template>
	<view class="template-avatar tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed>人脸认证</tn-nav-bar>
		<view>
			<view class="content">
				<view class="camera-box">
					<view class="camera-bg-box">
						<camera class="camera" device-position="front" flash="off" resolution="low"></camera>
					</view>
					<view v-show="tipsText" class="camera-tip">{{ tipsText }}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tipsText: '',
				index: 0
			};
		},
		onLoad(options) {
			let that = this
			this.index = options.index
			// 初始化相机引擎
			that.initData();
		},
		methods: {
			// 初始化相机引擎
			initData() {
				let that = this;
				// 1、初始化人脸识别
				wx.initFaceDetect();
				// 2、创建 camera 上下文 CameraContext 对象
				that.cameraEngine = wx.createCameraContext();
				// 3、获取 Camera 实时帧数据
				const listener = that.cameraEngine.onCameraFrame(frame => {
					// 4、人脸识别，使用前需要通过 wx.initFaceDetect 进行一次初始化，推荐使用相机接口返回的帧数据
					wx.faceDetect({
						frameBuffer: frame.data,
						width: frame.width,
						height: frame.height,
						enablePoint: true,
						enableConf: true,
						enableAngle: true,
						enableMultiFace: true,
						success: faceData => {
							let face = faceData.faceInfo[0];
							//人脸位置校验
							var centerWidth = 150;
							var centerHeight = 150;
							if (faceData.x == -1 || faceData.y == -1) {
								that.tipsText = '请将人脸放入取景框中';
								that.ScanAudio(
									'https://wangzhenghai-oss.oss-cn-hangzhou.aliyuncs.com/e37ef752-539b-49b7-94ea-1720f70fd390.mp3'
								)
								listener.stop();
								setTimeout(() => {
									listener.start();
								}, 2200)
							}

							if (faceData.faceInfo.length > 1) {
								that.tipsText = '请保证只有一个人';
							} else {
								const {
									pitch,
									roll,
									yaw
								} = face.angleArray;
								const standard = 0.5;
								if (Math.abs(pitch) >= standard || Math.abs(roll) >= standard || Math
									.abs(yaw) >= standard) {
									that.tipsText = '请平视摄像头';
								} else if (
									face.x < (frame.width - centerWidth) / 2 ||
									face.x > (frame.width - centerWidth) / 2 + centerWidth ||
									face.y < (frame.height - centerHeight) / 2 ||
									face.y > (frame.height - centerHeight) / 2 + centerHeight
								) {
									that.tipsText = '请将人脸对准中心位置';
									that.ScanAudio(
										'https://wangzhenghai-oss.oss-cn-hangzhou.aliyuncs.com/39c7a4ca-6697-471e-872b-581b58dcd92c.mp3'
									)
									listener.stop();
									setTimeout(() => {
										listener.start();
									}, 2200)
								} else if (
									face.confArray.global <= 0.8 ||
									face.confArray.leftEye <= 0.8 ||
									face.confArray.mouth <= 0.8 ||
									face.confArray.nose <= 0.8 ||
									face.confArray.rightEye <= 0.8
								) {
									that.tipsText = '请勿遮挡五官';
									that.ScanAudio(
										'https://wangzhenghai-oss.oss-cn-hangzhou.aliyuncs.com/45edf2b9-5363-478b-9a2e-dc5cd6307596.mp3'
									)
									listener.stop();
									setTimeout(() => {
										listener.start();
									}, 2200)
								} else {
									listener.stop();
									that.tipsText = '即将拍照，请保持！';
									that.ScanAudio(
										'https://wangzhenghai-oss.oss-cn-hangzhou.aliyuncs.com/6d86c4b4-2d48-4eb8-900e-e5b2f7660f0f.mp3'
									)
									setTimeout(function() {
										that.handleTakePhotoClick();
									}, 3000);
									return;
									let time = 3;
									that.tipsText = time + '秒后拍照，请保持！';
									let timer3 = setInterval(function() {
										time--;
										if (time <= 0) {
											clearInterval(timer3);
											// 拍照
											return that.handleTakePhotoClick();
										} else {
											that.tipsText = time + '秒后拍照，请保持！';
										}
									}, 1000);
								}
							}
						},
						fail: err => {
							if (err.x == -1 || err.y == -1) {
								that.tipsText = '请将人脸放入取景框中';
								that.ScanAudio(
									'https://wangzhenghai-oss.oss-cn-hangzhou.aliyuncs.com/e37ef752-539b-49b7-94ea-1720f70fd390.mp3'
								)
								listener.stop();
								setTimeout(() => {
									listener.start();
								}, 2200)
							} else {
								that.tipsText = err.errMsg || '网络错误，请退出页面重试';
							}
						}
					});
				});
				// 5、开始监听帧数据
				listener.start();
			},

			// 拍照
			handleTakePhotoClick() {
				this.tipsText = '人脸正在上传...';
				this.cameraEngine.takePhoto({
					quality: 'low',
					success: ({
						tempImagePath
					}) => {
						uni.uploadFile({
							url: 'https://www.wangzh.work/upload',
							filePath: tempImagePath,
							name: 'file',
							success: (res) => {
								const url = JSON.parse(res.data).data
								const faceInfo = {
									'imageUrl': url
								}
								uni.$http.post('/face/addFaceAuthenticationInfo', faceInfo)
								this.tipsText = '人脸认证成功'
								this.ScanAudio(
									'https://wangzhenghai-oss.oss-cn-hangzhou.aliyuncs.com/9e06868c-95f6-401d-bc36-f4b5bd5282ee.mp3'
									)
								setTimeout(()=>{
									uni.navigateBack()
								},2000)
							}
						});
					}
				});
				// 检测是否授权相机
				uni.getSetting({
					success: res => {
						if (!res.authSetting['scope.camera']) {
							this.isAuthCamera = false;
							uni.openSetting({
								success: res => {
									if (res.authSetting['scope.camera']) {
										this.isAuthCamera = true;
									}
								}
							});
						}
					}
				});
			}
		}
	};
</script>

<style lang="scss" scoped>
	.content {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;

		.camera-box {
			position: relative;
			width: 100%;
			height: 100%;
		}

		.camera-bg-box {
			position: relative;
			width: 100%;
			height: 100%;
			overflow: hidden;

			&::after {
				content: '';
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translateX(-50%) translateY(-50%);
				border-radius: 100%;
				width: 600rpx;
				height: 600rpx;
				// border: 1000rpx solid white;
				border: 1000rpx solid rgba(0, 0, 0, 0.5);
			}
		}

		.camera {
			width: 100%;
			height: 100%;
			border-top: 200rpx solid black;
			border-bottom: 200rpx solid black;
			box-sizing: border-box;
		}

		.camera-tip {
			position: absolute;
			bottom: 400rpx;
			left: 50%;
			transform: translateX(-50%);
			color: white;
		}
	}
</style>