<template>
	<view class="template-about">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed alpha customBack>
			<view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
				<text class='icon tn-icon-left'></text>
				<text class='icon tn-icon-home-capsule-fill'></text>
			</view>
		</tn-nav-bar>
		<canvas canvas-id="bubble" id="bubble" class="bubble"
			:style="{width: `${windowWidth}px`, height: `${windowHeight}px`}"></canvas>
		<view style="padding-top: 480rpx;margin-left: 160rpx;">
			<view style="display: flex;align-items: center;">
				<tn-avatar backgroundColor="tn-bg-blue" fontColor="tn-color-white" :src="QRCodeInfo.avatar"
					shape="square" size="lg"></tn-avatar>
				<text style="margin-left: 14px;">{{QRCodeInfo.username}}</text>
			</view>
		</view>
		<view style="text-align: center;padding-top: 30rpx;">
			<view>
				<image :src="QRCodeInfo.url" style="width: 480rpx;height: 480rpx;"></image>
			</view>
			<view style="margin-top: 18rpx;">
				<text style="font-size: 25rpx;">扫一扫上面的二维码图案，加我为朋友。</text>
			</view>
		</view>
		<view style="position: fixed;bottom: 140rpx;left: 210rpx;">
			<view style="display: flex;">
				<view style="margin-right: 126rpx;" @click="goToScan"><text>扫一扫</text></view>
				<view @click="saveBase64Img(QRCodeInfo.url)"><text>保存图片</text></view>
			</view>
		</view>
	</view>
</template>

<script>
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	export default {
		name: 'TemplateQRCode',
		mixins: [template_page_mixin],
		data() {
			return {
				windowHeight: 0,
				windowWidth: 0,
				actionTimer: null,
				animationTimer: null,
				queue: {},
				QRCodeInfo: {},
				ctx: null
			}
		},
		onLoad() {
			this.getSystemInfo()
			this.getMyQRCode()
		},
		onReady() {
			this.$nextTick(() => {
				this.queue = {}
				this.ctx = uni.createCanvasContext("bubble", this)

				setTimeout(() => {
					this.actionTimer = setInterval(() => {
						this.generateBubble()
					}, 500)
				}, 1000)
			})
		},
		onUnload() {
			this.clearActionTimer()
			this.clearAnimationTimer()
		},
		methods: {
			saveBase64Img(url) {
				let base64 = url.replace(/^data:image\/\w+;base64,/, "");
				let filePath = wx.env.USER_DATA_PATH + this.QRCodeInfo.username + '_qrcode.png';
				var save = uni.getFileSystemManager();
				var number = Math.random();
				save.writeFile({
					filePath: filePath,
					data: base64,
					encoding: 'base64',
					success: res => {
						console.log(669699, res)
						uni.saveImageToPhotosAlbum({
							filePath: filePath,
							success: function(res) {
								uni.showToast({
									title: '保存成功',
									icon: "success",
									duration: 1000
								})
							},
							fail: function(err) {
								uni.showToast({
									title: '保存失败',
									icon: "error",
									duration: 1000
								})
								console.log(err)
							}
						})
						console.log(res)
					},
					fail: err => {
						console.log(err)
					}
				})
			},
			goToScan() {
				uni.scanCode({
					autoDecodeCharSet: true,
					success: (res) => {
						uni.navigateTo({
							url: '/searchPages/userHome?userId=' + res.result
						})
					},
					fail: (error) => {
						uni.$showMsg(error)
					}
				})
			},
			async getMyQRCode() {
				const {
					data
				} = await uni.$http.get('/QRCode/getMyQRCode/' + uni.getStorageSync('userId'))
				this.QRCodeInfo = data.data
			},
			// 获取系统信息
			getSystemInfo() {
				const systemInfo = uni.getSystemInfoSync()
				if (!systemInfo) {
					setTimeout(() => {
						this.getSystemInfo()
					}, 50)
					return
				}

				this.windowHeight = systemInfo.safeArea.height
				this.windowWidth = systemInfo.safeArea.width
			},

			// 生成泡泡
			generateBubble() {
				const image = "https://resource.tuniaokj.com/images/bubble/" + this.$t.number.randomInt(1, 33) + ".png"
				uni.getImageInfo({
					src: image,
					success: (res) => {
						if (res.errMsg === 'getImageInfo:ok') {
							const anmationData = {
								id: new Date().getTime(),
								timer: 0,
								opacity: 0,
								pathData: this.generatePathData(),
								image: res.path,
								factor: {
									speed: 0.0006, // 运动速度，值越小越慢
									t: 0.1 //  贝塞尔函数系数，当为0，就是从无到有，这时候屏幕高度也要调一下
								}
							}
							if (Object.keys(this.queue).length > 0) {
								this.queue[anmationData.id] = anmationData
							} else {
								this.queue[anmationData.id] = anmationData
								this.bubbleAnimate()
							}
						}
					}
				})
			},

			/* 动画相关 */
			// 生成运动的路径数据
			generatePathData() {
				let width = this.windowWidth,
					height = this.windowHeight;
				const p0 = {
					x: 0.72 * width,
					y: height
				}
				const p1 = {
					x: this.$t.number.random(0.22 * width, 0.33 * width),
					y: this.$t.number.random(0.5 * height, 0.75 * height)
				}
				const p2 = {
					x: this.$t.number.random(0, 0.88 * width),
					y: this.$t.number.random(0.25 * height, 0.5 * height)
				}
				const p3 = {
					x: this.$t.number.random(0, 0.88 * width),
					y: this.$t.number.random(0, 0.125 * height)
				}
				return [p0, p1, p2, p3]
			},
			// 更新运动的路径
			updatePath(data, factor) {
				const p0 = data[0]
				const p1 = data[1]
				const p2 = data[2]
				const p3 = data[3]
				const t = factor.t
				const cx1 = 3 * (p1.x - p0.x)
				const bx1 = 3 * (p2.x - p1.x) - cx1
				const ax1 = p3.x - p0.x - cx1 - bx1

				const cy1 = 3 * (p1.y - p0.y)
				const by1 = 3 * (p2.y - p1.y) - cy1
				const ay1 = p3.y - p0.y - cy1 - by1

				const x = ax1 * (t * t * t) + bx1 * (t * t) + cx1 * t + p0.x
				const y = ay1 * (t * t * t) + by1 * (t * t) + cy1 * t + p0.y
				return {
					x,
					y
				}
			},
			// 执行泡泡动画
			bubbleAnimate() {
				let width = this.windowWidth,
					height = this.windowHeight;
				Object.keys(this.queue).forEach(key => {
					const anmationData = this.queue[+key];
					const {
						x,
						y
					} = this.updatePath(
						anmationData.pathData,
						anmationData.factor
					)
					const speed = anmationData.factor.speed
					anmationData.factor.t += speed

					var curWidth = 30
					curWidth = (height - y) / 1.5
					curWidth = Math.min(30, curWidth)

					var curAlpha = anmationData.opacity
					curAlpha = y / (0.3 * height) //消失的高度适当调一下
					curAlpha = Math.min(1, curAlpha)
					this.ctx.globalAlpha = curAlpha
					this.ctx.drawImage(anmationData.image, x - curWidth / 2, y, curWidth, curWidth)
					// this.ctx.setFillStyle('red')
					// this.ctx.fillRect(x - curWidth / 2, y, 50, 50)
					if (anmationData.factor.t > 1) {
						delete this.queue[anmationData.id]
					}
					if (y > height) {
						delete this.queue[anmationData.id]
					}
				})
				this.ctx.draw()
				if (Object.keys(this.queue).length > 0) {
					this.animationTimer = setTimeout(() => {
						this.bubbleAnimate()
					}, 5)
				} else {
					this.clearAnimationTimer()()
					this.ctx.draw() // 清空画面
				}
			},

			// 清除定时器
			clearActionTimer() {
				if (this.actionTimer) {
					clearInterval(this.actionTimer)
				}
			},
			clearAnimationTimer() {
				if (this.animationTimer) {
					clearTimeout(this.animationTimer)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.template-about {
		margin: 0;
		width: 100%;
		height: 100vh;
		color: #fff;
		background: linear-gradient(-120deg, #F15BB5, #9A5CE5, #01BEFF, #00F5D4);
		background-size: 500% 500%;
		animation: gradientBG 15s ease infinite;

		position: relative;

		.bubble {
			position: fixed;
			bottom: -10vh;
			right: 0;
			z-index: 1024;
			pointer-events: none;
			// background-color: red;
		}
	}


	.about-bg {
		background-size: cover;
		width: 100vw;
		height: 100vh;
		justify-content: center;
		flex-direction: column;
		color: #fff;
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

	.container {
		width: 100%;
		position: absolute;
		text-align: center;
	}

	/* 胶囊*/
	.tn-custom-nav-bar__back {
		width: 100%;
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

		&:before {
			content: " ";
			width: 1rpx;
			height: 110%;
			position: absolute;
			top: 22.5%;
			left: 0;
			right: 0;
			margin: auto;
			transform: scale(0.5);
			transform-origin: 0 0;
			pointer-events: none;
			box-sizing: border-box;
			opacity: 0.7;
			background-color: #FFFFFF;
		}
	}

	/* 悬浮 */
	.tnxuanfu {
		animation: suspension 3s ease-in-out infinite;
	}

	@keyframes suspension {

		0%,
		100% {
			transform: translateY(0);
		}

		50% {
			transform: translateY(-0.8rem);
		}
	}

	/* 悬浮按钮 */
	.button-shop {
		width: 90rpx;
		height: 90rpx;
		display: flex;
		flex-direction: row;
		position: fixed;
		/* bottom:200rpx;
      right: 20rpx; */
		left: 5rpx;
		top: 5rpx;
		z-index: 1001;
		border-radius: 100px;
		opacity: 0.9;
	}


	/* 按钮 */
	.wechat {
		bottom: 300rpx;
		right: 75rpx;
		position: fixed;
		z-index: 9999;
	}


	.pa,
	.pa0 {
		position: absolute
	}

	.pa0 {
		left: 0;
		top: 0
	}


	.bg0 {
		width: 100rpx;
		height: 100rpx;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.bg1 {
		width: 100%;
		height: 100%;
	}




	.hx-box {
		top: 50%;
		left: 50%;
		width: 100rpx;
		height: 100rpx;
		transform-style: preserve-3d;
		transform: translate(-50%, -50%) rotateY(75deg) rotateZ(10deg);
	}

	.hx-box .pr {
		width: 100rpx;
		height: 100rpx;
		transform-style: preserve-3d;
		animation: hxz 20s linear infinite;
	}

	@keyframes hxz {
		0% {
			transform: rotateX(0deg);
		}

		100% {
			transform: rotateX(-360deg);
		}
	}

	.hx-box .pr .pa0 {
		width: 100rpx;
		height: 100rpx;
		border-radius: 1000px;
	}

	.hx-box .pr .pa0 .span {
		display: block;
		width: 100%;
		height: 100%;
		background: url(https://resource.tuniaokj.com/images/cool_bg_image/arc4.png) no-repeat center center;
		background-size: 100% 100%;
		animation: hx 4s linear infinite;
	}
</style>