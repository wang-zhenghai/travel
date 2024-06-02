<template>
	<view>
		<view class="tn-navbg" :style="{height: vuex_custom_bar_height + 'px'}">
			<!-- 顶部自定义导航 -->
			<tn-nav-bar fixed alpha customBack>
				<view slot="back" class='tn-custom-nav-bar__back' @click="cancle">
					<text class='icon tn-icon-left-arrow'></text>
				</view>
				<text style="font-weight: 600;">{{targetUsername}}</text>
			</tn-nav-bar>
		</view>
		<view class="chat" :style="{marginTop: vuex_custom_bar_height + 'px'}">
			<scroll-view :style="{height: `${windowHeight-inputHeight}rpx`}" id="scrollview" scroll-y="true"
				:scroll-top="scrollTop" class="scroll-view">
				<!-- 聊天主体 -->
				<!-- 消息列表：绑定id，用于滚动到该元素  -->
				<view id="msglistview" class="chat-body">
					<!-- 聊天记录 -->
					<view v-for="(item,index) in msgList" :key="item.id">
						<!-- 自己发的消息 -->
						<view class="item self" v-if="item.from===userId">
							<!-- 文字内容 -->
							<view class="content right">
								{{item.content}}
							</view>
							<!-- 头像 -->
							<view class="avatar">
								<tn-avatar :src="item.avatar" shape="square" size="lg"></tn-avatar>
							</view>
						</view>
						<!-- 对方发的消息 -->
						<view class="item Ai" v-if="item.from!=userId">
							<!-- 头像 -->
							<view class="avatar">
								<tn-avatar :src="item.avatar" shape="square" size="lg"></tn-avatar>
							</view>
							<!-- 文字内容 -->
							<view class="content left">
								{{item.content}}
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
			<!-- 底部消息发送栏 -->
			<!-- 用来占位，防止聊天消息被发送框遮挡 -->
			<view class="chat-bottom" :style="{height: `${inputHeight}rpx`}">
				<view class="send-msg" :style="{bottom:`${keyboardHeight}rpx`}">
					<view class="uni-textarea">
						<textarea v-model="chatMsg" maxlength="300" confirm-type="send" @confirm="handleSend"
							:show-confirm-bar="false" :adjust-position="false" @linechange="sendHeight" @focus="focus"
							@blur="blur" auto-height></textarea>
					</view>
					<button @click="handleSend" class="send-btn">发送</button>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import $time from '@/utils/time.js'
	import GoEasy from 'goeasy'
	export default {
		data() {
			return {
				//键盘高度
				keyboardHeight: 0,
				//底部消息发送高度
				bottomHeight: 0,
				username: uni.getStorageSync('username'),
				targetUsername: '',
				avatar: '',
				targetUserAvatar: '',
				//滚动距离
				scrollTop: 0,
				userId: uni.getStorageSync('userId'),
				toUserId: '',
				//发送的消息
				chatMsg: "",
				msgList: []
			}
		},
		updated() {
			//页面更新时调用聊天消息定位到最底部
			this.scrollToBottom();
		},
		computed: {
			windowHeight() {
				return this.rpxTopx(uni.getSystemInfoSync().windowHeight)
			},
			// 键盘弹起来的高度+发送框高度
			inputHeight() {
				return this.bottomHeight + this.keyboardHeight
			}
		},
		created() {
			this.concatGoEasy()
		},
		onLoad(options) {
			this.targetUsername = options.username
			this.targetUserAvatar = options.avatar
			this.toUserId = options.toUserId
			this.$nextTick(() => {
				this.getMessageList()
			})
			uni.onKeyboardHeightChange(res => {
				//这里正常来讲代码直接写
				//this.keyboardHeight=this.rpxTopx(res.height)就行了
				//但是之前界面ui设计聊天框的高度有点高,为了不让键盘和聊天输入框之间距离差太大所以我改动了一下。
				this.keyboardHeight = this.rpxTopx(res.height - 30)
				if (this.keyboardHeight < 0) this.keyboardHeight = 0;
			})
		},
		onUnload() {
			uni.offKeyboardHeightChange()
		},
		methods: {
			concatGoEasy() {
				const goEasy = GoEasy.getInstance({
					host: 'hangzhou.goeasy.io',
					appkey: "BC-e6007929793d4dd588eca98b9f07cd6c", //替换为您的应用appkey
					modules: ['pubsub']
				});
				//建立连接
				goEasy.connect({
					onSuccess: function() { //连接成功
						console.log("GoEasy connect successfully.") //连接成功
					},
					onFailed: function(error) { //连接失败
						console.log("Failed to connect GoEasy, code:" + error.code + ",error:" + error
							.content);
					}
				});
				var _this = this
				//订阅消息
				goEasy.pubsub.subscribe({
					channel: "im-channel",
					onMessage: function(message) {
						if (JSON.parse(message.content).from === _this.targetUsername) {
							wx.vibrateLong()
							_this.getMessageList()
						}
						if (JSON.parse(message.content).to === _this.targetUsername) {
							_this.getMessageList()
						}
					},
					onSuccess: function() {
						console.log("Channel订阅成功。");
					},
					onFailed: function(error) {
						console.log("Channel订阅失败, 错误编码：" + error.code + " 错误信息：" + error.content)
					}
				});
			},
			async getMessageList() {
				const {
					data
				} = await uni.$http.get('/message/getMessageList/' + uni.getStorageSync('userId') + '/' + this
					.toUserId)
				this.msgList = data.data
				this.msgList.forEach(item => {
					item.createTime = this.formatTime(item.createTime)
				})
			},
			formatTime(createTime) {
				return $time.getChatTime(new Date(createTime).getTime())
			},
			cancle() {
				uni.navigateBack()
			},
			focus() {
				this.scrollToBottom()
			},
			blur() {
				this.scrollToBottom()
			},
			// px转换成rpx
			rpxTopx(px) {
				let deviceWidth = wx.getSystemInfoSync().windowWidth
				let rpx = (750 / deviceWidth) * Number(px)
				return Math.floor(rpx)
			},
			// 监视聊天发送栏高度
			sendHeight() {
				setTimeout(() => {
					let query = uni.createSelectorQuery();
					query.select('.send-msg').boundingClientRect()
					query.exec(res => {
						this.bottomHeight = this.rpxTopx(res[0].height)
					})
				}, 5)
			},
			// 滚动至聊天底部
			scrollToBottom(e) {
				setTimeout(() => {
					let query = uni.createSelectorQuery().in(this);
					query.select('#scrollview').boundingClientRect();
					query.select('#msglistview').boundingClientRect();
					query.exec((res) => {
						if (res[1].height > res[0].height) {
							this.scrollTop = this.rpxTopx(res[1].height - res[0].height)
						}
					})
				}, 5)
			},
			// 发送消息
			handleSend() {
				if (this.chatMsg === '') {
					uni.$showMsg('不能发送空白消息')
					return
				}
				//如果消息不为空
				if (!this.chatMsg || !/^\s+$/.test(this.chatMsg)) {
					//4.推送消息到服务端
					uni.$http.get('/imserver/send?from=' + this.username + '&to=' + this.targetUsername + '&content=' +
						this.chatMsg)
					this.chatMsg = '';
					this.scrollToBottom()
				}
			},
		}
	}
</script>
<style lang="scss" scoped>
	$chatContentbgc: #00ff7f;
	$sendBtnbgc: #4F7DF5;

	view,
	button,
	text,
	input,
	textarea {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
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
		background: linear-gradient(-120deg, #0976ea, #c471f5, #f956b6, #ea7e0a);
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

	/* 聊天消息 */
	.chat {
		.scroll-view {
			::-webkit-scrollbar {
				display: none;
				width: 0 !important;
				height: 0 !important;
				-webkit-appearance: none;
				background: transparent;
				color: transparent;
			}

			background-color: #F6F6F6;

			.chat-body {
				display: flex;
				flex-direction: column;
				padding-top: 23rpx;

				.self {
					justify-content: flex-end;
				}

				.item {
					display: flex;
					padding: 23rpx 30rpx;

					.right {
						background-color: $chatContentbgc;
					}

					.left {
						background-color: #FFFFFF;
					}

					// 聊天消息的三角形
					.right::after {
						position: absolute;
						display: inline-block;
						content: '';
						width: 0;
						height: 0;
						left: 100%;
						top: 10px;
						border: 12rpx solid transparent;
						border-left: 12rpx solid $chatContentbgc;
					}

					.left::after {
						position: absolute;
						display: inline-block;
						content: '';
						width: 0;
						height: 0;
						top: 10px;
						right: 100%;
						border: 12rpx solid transparent;
						border-right: 12rpx solid #FFFFFF;
					}

					.content {
						position: relative;
						max-width: 486rpx;
						border-radius: 8rpx;
						word-wrap: break-word;
						padding: 24rpx 24rpx;
						margin: 0 24rpx;
						border-radius: 5px;
						font-size: 32rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #333333;
						line-height: 42rpx;
					}

					.avatar {
						display: flex;
						justify-content: center;
						width: 78rpx;
						height: 78rpx;
						overflow: hidden;

						image {
							align-self: center;
						}
					}
				}
			}
		}

		/* 底部聊天发送栏 */
		.chat-bottom {
			width: 100%;
			height: 177rpx;
			background: #F4F5F7;
			transition: all 0.1s ease;
            

			.send-msg {
				display: flex;
				align-items: flex-end;
				padding: 16rpx 30rpx;
				width: 100%;
				min-height: 177rpx;
				position: fixed;
				bottom: 0;
				background: #EDEDED;
				transition: all 0.1s ease;
				z-index: 999;
			}

			.uni-textarea {
				padding-bottom: 70rpx;

				textarea {
					width: 537rpx;
					min-height: 75rpx;
					max-height: 500rpx;
					background: #FFFFFF;
					border-radius: 8rpx;
					font-size: 32rpx;
					font-family: PingFang SC;
					color: #333333;
					line-height: 43rpx;
					padding: 5rpx 8rpx;
				}
			}

			.send-btn {
				display: flex;
				align-items: center;
				justify-content: center;
				margin-bottom: 70rpx;
				margin-left: 25rpx;
				width: 128rpx;
				height: 75rpx;
				background: $sendBtnbgc;
				border-radius: 8rpx;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #FFFFFF;
				line-height: 28rpx;
			}
		}
	}
</style>