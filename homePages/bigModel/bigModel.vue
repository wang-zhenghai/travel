<template>
	<view class="template-edit tn-safe-area-inset-bottom">
		<view class="tn-navbg" :style="{height: vuex_custom_bar_height + 'px'}">
			<!-- 顶部自定义导航 -->
			<tn-nav-bar fixed alpha customBack>
				<view slot="back" class='tn-custom-nav-bar__back' @click="cancle">
					<text class='icon tn-icon-left-arrow'></text>
				</view>
				<text style="font-weight: 600;" class="u-line-1">智能助手</text>
			</tn-nav-bar>
		</view>
		<view class="tn-safe-area-inset-bottom" :style="{marginTop: vuex_custom_bar_height + 'px'}">
			<view class="container">
				<view class="cg-chat-content">
					<view v-for="(item, index) in chatList" :key="index">
						<block>
							<view class="cg-chat-left" v-if="item.userId == 'gpt'">
								<image
									src="https://wangzhenghai-oss.oss-cn-hangzhou.aliyuncs.com/2acf48e3-b763-455d-b21f-507f3a76f6f1.jpg"
									class="cg-user-pic cg-right"></image>
								<view class="cg-chatbox cg-chatbox-left">
									<text
										class="reply">{{ (index == chatList.length -1 && index != 0) ? reply : item.text}}</text>
								</view>
							</view>
							<view class="cg-chat-right" v-if="item.userId != 'gpt'">
								<view class="cg-chatbox cg-chatbox-right">
									<text class="reply">{{item.text}}</text>
								</view>
								<image :src="avatar" class="cg-user-pic cg-left"></image>
							</view>
						</block>
					</view>
				</view>
				<view class="cg-reply-tabbar" :style="{ marginBottom: `${keyboardHeight}px` }">
					<view class="cg-chat-tabbar">
						<textarea :hold-keyboard="false" auto-height class="cg-chat-input" @input="inputReply"
							:fixed="true" :adjust-position="false" maxlength="300" :value="content"
							:placeholderClass="placeholderClass" :class="textareaClass" @tap.stop="showKeyBoard(1)"
							ref="textarea" :placeholder="placeholder" cursor-spacing="-30px" :show-confirm-bar="false"></textarea>
					</view>
					<div style="margin-top: 18rpx;width: 120rpx;">
						<tn-button backgroundColor="#2a6ee9" fontColor="#FFF" @click="sendMsg">发送</tn-button>
					</div>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loadding: false,
				show: false,
				bottom: 0,
				keyboardHeight: 0,
				replyContainerH: uni.upx2px(500),
				platFormUserId: '1',
				roleDesc: '',
				content: '',
				avatar: '',
				isShow: false,
				textareaClass: "",
				placeholderClass: "",
				placeholder: "请输入内容",
				sendText: "发送",
				reply: '',
				chatList: [{
					type: 1, //1-文字 2-图片 3-语音，4-时间 5-提醒 ...
					userId: "gpt",
					text: '我是你的智能小助手，你可以试试问我问题！',
					src: ''
				}]
			};
		},
		onLoad: function(options) {
			let safeH = this.isPhoneX() ? 34 : 0;
			// 获取tabbar高度,单位px
			uni.getSystemInfo({
				success: (res) => {
					this.bottom = res.screenHeight - res.windowHeight - res.statusBarHeight;
					this.keyboardHeight = this.bottom / 2;
				}
			});
			// 监听键盘高度变化
			uni.onKeyboardHeightChange(res => {
				let h = res.height - safeH;
				this.keyboardHeight = h > 0 ? h : this.bottom / 2;
				//去除 完成那一栏高度影响
				setTimeout(() => {
					if (this.showIndex == 1 && this.keyboardHeight != 0) {
						this.replyContainerH = this.keyboardHeight;
					}
				}, 100);
			});
			this.queryUserById()
		},
		methods: {
			async queryUserById() {
				const {
					data
				} = await uni.$http.get('/user/queryUserById?userId=' + uni.getStorageSync('userId'))
				this.avatar = data.data.avatar
			},
			isPhoneX() {
				const res = uni.getSystemInfoSync();
				let iphonex = false;
				let models = ['iphonex', 'iphonexr', 'iphonexsmax', 'iphone11', 'iphone11pro', 'iphone11promax']
				const model = res.model.replace(/\s/g, "").toLowerCase()
				if (models.includes(model)) {
					iphonex = true;
				}
				return iphonex;
			},
			sendMsg() {
				if (!this.content) {
					uni.showToast({
						title: '请输入内容',
						icon: 'none'
					})
					return
				}
				var temp = this.content;
				// 清空输入框
				this.content = ''
				// 发送消息
				this.chatList.push({
					toId: 'gpt',
					type: 1,
					userId: "",
					text: temp,
					src: ''
				})
				setTimeout(() => {
					// 定位到聊天最底部
					this.toBottom();
				}, 0);
				uni.showLoading({
					title: '小助手正在思考中...'
				})
				// 请求接口
				uni.request({
					url: 'https://www.wangzh.work/bigModel/' + temp,
					method: 'GET',
					success: (res) => {
						uni.hideLoading();
						if (res.data != null) {
							this.chatList.push({
								type: 1,
								userId: "gpt",
								text: res.data,
								src: ''
							})
							this.showReply(res.data)
						} else {
							uni.showToast({
								title: '网络错误！',
								icon: 'none'
							})
						}
					},
					fail: (err) => {
						uni.hideLoading();
						console.log(err)
					}
				})
			},
			inputReply(e) {
				this.content = e.detail.value;
			},
			showKeyBoard(index) {},
			// 内容逐字显示，每个字显示间隔为0.1秒，并识别换行符
			showReply(content) {
				let reply = content
				let replyArr = reply.split('')
				let replyStr = ''
				let i = 0
				let timer = setInterval(() => {
					if (i < replyArr.length) {
						if (replyArr[i] == '\n') {
							replyStr += '\n'
						} else {
							replyStr += replyArr[i]
						}
						this.reply = replyStr
						i++
						// 定位到聊天最底部
						this.toBottom();
					} else {
						clearInterval(timer)
					}
				}, 100)

				// 判断是否显示完毕
				setTimeout(() => {
					this.isShow = true
				}, replyArr.length * 100)
			},

			toBottom() {
				this.$nextTick(() => {
					setTimeout(() => {
						uni.createSelectorQuery().select(".cg-chat-content").boundingClientRect(function(
							res) { //定位到你要的class的位置
							uni.pageScrollTo({
								scrollTop: res.height,
								duration: 0
							});
						}).exec()
					}, 0)
				})
			},
			cancle() {
				uni.navigateBack()
			},
		},
		onPageScroll(e) {
			if (e.scrollTop == 0 && !this.loadding) {
				this.loadding = true;
				setTimeout(() => {
					this.show = true;
					this.loadding = false;
				}, 1000);
			}
		},
	}
</script>

<style lang="scss">
	.tn-tabbar-height {
		min-height: 120rpx;
		height: calc(120rpx + env(safe-area-inset-bottom) / 2);
	}

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

	/* 顶部渐变*/
	.tn-navbg {
			background: linear-gradient(-120deg, #F15BB5, #9A5CE5, #01BEFF, #00F5D4);
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

	.container {
		padding-left: 20rpx;
		padding-right: 20rpx;
		padding-bottom: 146rpx;
		box-sizing: border-box;
	}


	/*chatbox*/
	.cg-chat-content {
		width: 100%;
	}

	.cg-chatbox {
		max-width: 66%;
		border-radius: 10rpx;
		position: relative;
		padding: 20rpx 22rpx;
		font-size: 32rpx;
		color: #333;
		word-break: break-all;
		word-wrap: break-word;
	}

	.cg-chatbox::before {
		content: "";
		position: absolute;
		width: 0;
		height: 0;
		top: 20rpx;
		border: 16rpx solid;
	}

	.cg-chatbox-left {
		background: #fff5d9;
		border: 1rpx solid #fff5d9;
		display: inline-block;
	}

	.cg-chatbox-left::before {
		right: 100%;
		border-color: transparent #fff5d9 transparent transparent;
	}

	.cg-chatbox-right {
		background: #a0d5f3;
		border: 1rpx solid #a0d5f3;
	}

	.cg-chatbox-right::before {
		left: 100%;
		border-color: transparent transparent transparent #a0d5f3;
	}

	/*chatbox*/

	.cg-chat-left,
	.cg-chat-right {
		display: flex;
		align-items: flex-start;
		padding-top: 36rpx;
	}

	.cg-user-pic {
		width: 80rpx;
		height: 80rpx;
		flex-shrink: 0;
		border-radius: 50%;
		display: block;
	}

	.cg-left {
		margin-left: 26rpx;
	}

	.cg-right {
		margin-right: 26rpx;
	}

	.cg-chat-right {
		justify-content: flex-end;
	}

	.cg-chat-center {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 28rpx;
		font-size: 28rpx;
		color: #666;
		padding-top: 36rpx;
	}

	.cg-label {
		display: inline-block;
		background: rgba(0, 0, 0, 0.4);
		color: #fff;
		font-size: 24rpx;
		line-height: 24rpx;
		margin-top: 36rpx;
		padding: 12rpx 16rpx;
		text-align: center;
		border-radius: 8rpx;
		margin-left: 50%;
		transform: translateX(-50%);
	}

	.cg-img-chatbox {
		position: relative;
	}

	.cg-img-chatbox::after {
		content: "";
		position: absolute;
		height: 200%;
		width: 200%;
		border: 1rpx solid #eaeef1;
		transform-origin: 0 0;
		-webkit-transform-origin: 0 0;
		-webkit-transform: scale(0.5);
		transform: scale(0.5);
		left: 0;
		top: 0;
		border-radius: 20rpx;
	}

	.cg-chat-img {
		max-width: 200rpx;
		/* min-height: 80rpx; */
		display: block;
		border-radius: 10rpx;
	}

	.cg-chat-flex {
		display: flex;
		align-items: center;
	}

	.cg-flex-center {
		display: flex;
		align-items: center;
	}

	.cg-chat-voice {
		width: 40rpx;
		height: 40rpx;
		display: block;
		flex-shrink: 0;
	}

	.cg-rotate {
		transform: rotate(180deg);
	}

	.cg-chat-fail {
		width: 50rpx;
		height: 50rpx;
		display: block;
		flex-shrink: 0;
	}

	.cg-send-box {
		width: 10%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		background-color: #fff;
	}

	.cg-mr {
		margin-right: 16rpx;
	}

	.cg-ml {
		margin-left: 16rpx;
	}

	.cg-flex-end {
		justify-content: flex-end;
	}

	.cg-flex-reverse {
		flex-direction: row-reverse;
	}

	.reply_view {
		background-color: #fff5d9;
		padding: 20rpx;
		width: 80%;
	}

	.reply {
		font-size: 24rpx;
		color: #333;
		line-height: 50rpx;
		/* 设置字间距 */
		letter-spacing: 2rpx;
	}

	.cg-reply-tabbar {
		width: 100%;
		position: fixed;
		left: 0;
		bottom: 2rpx;
		display: flex;
		flex-direction: row;
		box-sizing: border-box;
		z-index: 999;


		.cg-chat-tabbar {
			width: 82%;
			background-color: $uni-bg-color-grey;
			display: flex;
			align-items: flex-end;
			padding: 16rpx 24rpx;
			box-sizing: border-box;

			&::after {
				content: " ";
				position: absolute;
				top: 0;
				right: 0;
				left: 0;
				border-top: 1rpx solid $uni-text-color-placeholder;
				-webkit-transform: scaleY(0.5);
				transform: scaleY(0.5);
			}

			.cg-chat-input {
				flex: 1;
				/* #ifndef MP-WEIXIN */
				min-height: 46rpx;
				padding: $uni-spacing-col-base 0;
				/* #endif */
				/* #ifdef MP-WEIXIN */
				min-height: 78rpx;
				/* #endif */
				background-color: $uni-bg-color;
				border-radius: 8rpx;
				margin: 0;
				padding-left: 20rpx;
			}
		}
	}
</style>