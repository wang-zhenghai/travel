<template>
	<view>
		<view class="tn-navbg" :style="{height: vuex_custom_bar_height + 'px'}">
			<!-- 顶部自定义导航 -->
			<tn-nav-bar fixed alpha customBack>
				<view slot="back" class='tn-custom-nav-bar__back' @click="cancle">
					<text class='icon tn-icon-left-arrow'></text>
				</view>
				<view slot="right" style="letter-spacing: 5px;margin-bottom: 6rpx;">
					<u-button icon="share" color="#2585a6" text="发布攻略" @click="submitStrategy"></u-button>
				</view>
			</tn-nav-bar>
		</view>
		<view class="container" :style="{marginTop: vuex_custom_bar_height + 'px'}">
			<view style="margin: 10rpx 10rpx 10rpx 10rpx;">
				<u--input placeholder="亲,在这输入攻略的标题(如:贵州一日游)" border="surround" v-model="title"></u--input>
			</view>
			<view class="page-body">
				<view class='wrapper'>
					<editor @input="editText" id="editor" class="ql-container" :placeholder="placeholder" showImgSize
						showImgToolbar showImgResize @statuschange="onStatusChange" :read-only="readOnly"
						@ready="onEditorReady">
					</editor>
					<view class='toolbar' @tap="format">
						<view :class="formats.bold ? 'ql-active' : ''" class="iconfont icon-zitijiacu" data-name="bold">
						</view>
						<view :class="formats.italic ? 'ql-active' : ''" class="iconfont icon-zitixieti"
							data-name="italic">
						</view>
						<view :class="formats.underline ? 'ql-active' : ''" class="iconfont icon-zitixiahuaxian"
							data-name="underline"></view>
						<view :class="formats.strike ? 'ql-active' : ''" class="iconfont icon-zitishanchuxian"
							data-name="strike"></view>
						<view :class="formats.align === 'left' ? 'ql-active' : ''" class="iconfont icon-zuoduiqi"
							data-name="align" data-value="left"></view>
						<view :class="formats.align === 'center' ? 'ql-active' : ''" class="iconfont icon-juzhongduiqi"
							data-name="align" data-value="center"></view>
						<view :class="formats.align === 'right' ? 'ql-active' : ''" class="iconfont icon-youduiqi"
							data-name="align" data-value="right"></view>
						<view :class="formats.align === 'justify' ? 'ql-active' : ''" class="iconfont icon-zuoyouduiqi"
							data-name="align" data-value="justify"></view>
						<view :class="formats.lineHeight ? 'ql-active' : ''" class="iconfont icon-line-height"
							data-name="lineHeight" data-value="2"></view>
						<view :class="formats.letterSpacing ? 'ql-active' : ''" class="iconfont icon-Character-Spacing"
							data-name="letterSpacing" data-value="2em"></view>
						<view :class="formats.marginTop ? 'ql-active' : ''" class="iconfont icon-722bianjiqi_duanqianju"
							data-name="marginTop" data-value="20px"></view>
						<view :class="formats.previewarginBottom ? 'ql-active' : ''"
							class="iconfont icon-723bianjiqi_duanhouju" data-name="marginBottom" data-value="20px">
						</view>
						<view class="iconfont icon-clearedformat" @tap="removeFormat"></view>
						<view :class="formats.fontFamily ? 'ql-active' : ''" class="iconfont icon-font"
							data-name="fontFamily" data-value="Pacifico"></view>
						<view :class="formats.fontSize === '24px' ? 'ql-active' : ''" class="iconfont icon-fontsize"
							data-name="fontSize" data-value="24px"></view>

						<view :class="formats.color === '#0000ff' ? 'ql-active' : ''" class="iconfont icon-text_color"
							data-name="color" data-value="#0000ff"></view>
						<view :class="formats.backgroundColor === '#00ff00' ? 'ql-active' : ''"
							class="iconfont icon-fontbgcolor" data-name="backgroundColor" data-value="#00ff00"></view>

						<view class="iconfont icon-date" @tap="insertDate"></view>
						<view class="iconfont icon--checklist" data-name="list" data-value="check"></view>
						<view :class="formats.list === 'ordered' ? 'ql-active' : ''" class="iconfont icon-youxupailie"
							data-name="list" data-value="ordered"></view>
						<view :class="formats.list === 'bullet' ? 'ql-active' : ''" class="iconfont icon-wuxupailie"
							data-name="list" data-value="bullet"></view>
						<view class="iconfont icon-undo" @tap="undo"></view>
						<view class="iconfont icon-redo" @tap="redo"></view>

						<view class="iconfont icon-outdent" data-name="indent" data-value="-1"></view>
						<view class="iconfont icon-indent" data-name="indent" data-value="+1"></view>
						<view class="iconfont icon-fengexian" @tap="insertDivider"></view>
						<view class="iconfont icon-charutupian" @tap="insertImage"></view>
						<view :class="formats.header === 1 ? 'ql-active' : ''" class="iconfont icon-format-header-1"
							data-name="header" :data-value="1"></view>
						<view :class="formats.script === 'sub' ? 'ql-active' : ''" class="iconfont icon-zitixiabiao"
							data-name="script" data-value="sub"></view>
						<view :class="formats.script === 'super' ? 'ql-active' : ''" class="iconfont icon-zitishangbiao"
							data-name="script" data-value="super"></view>
						<view class="iconfont icon-shanchu" @tap="clear"></view>
						<view :class="formats.direction === 'rtl' ? 'ql-active' : ''"
							class="iconfont icon-direction-rtl" data-name="direction" data-value="rtl"></view>
					</view>
				</view>
			</view>
		</view>
		<u-overlay :show="progress" :opacity="0.7">
			<view style="position: absolute;top: 650rpx;left:270rpx;">
				<tn-circle-progress :percent="percent" activeColor="#31E749" :showPercent="true">
					<view class="tn-color-white">发布中...</view>
				</tn-circle-progress>
			</view>
		</u-overlay>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				readOnly: false,
				progress: false,
				percent: 20,
				formats: {},
				content: '',
				placeholder: '亲，在这里输入内容...',
				title: '',
			}
		},
		methods: {
			async submitStrategy() {
				if (!uni.getStorageSync('token')) {
					uni.navigateTo({
						url: '/pages/login/login'
					})
					uni.$showMsg('亲，先登录才能发表哦~')
					return
				}
				if (this.title == '') {
					uni.$showMsg('亲，输入攻略标题更方便别人能看到你哦~')
					return
				}
				if (this.content == '' || this.content == '<p><br></p>') {
					uni.$showMsg('亲，请输入内容哦~')
					return
				}
				const {
					data
				} = await uni.$http.post('/blog/save', {
					title: this.title,
					images: '',
					location: '',
					content: this.content,
					tag: '',
					type: '攻略'
				})
				if (data.code === 1) {
					this.progress = true
					clearInterval(this.timer)
					this.timer = setInterval(() => {
						this.percent += 20
						if (this.percent === 100) {
							this.progress = false
						}
					}, 450)
					setTimeout(() => {
						uni.redirectTo({
							url: '/activityPages/strategyPages/strategyPages'
						})
					}, 3000)
				} else {
					uni.$showMsg(data.msg)
				}
			},
			cancle() {
				uni.navigateBack()
			},
			editText(res) {
				this.content = res.detail.html
			},
			readOnlyChange() {
				this.readOnly = !this.readOnly
			},
			onEditorReady() {
				uni.createSelectorQuery().select('#editor').context((res) => {
					this.editorCtx = res.context
					this.editorCtx.setContents({
						html: this.value //初始化赋值内容。    
					})
				}).exec()
			},
			undo() {
				this.editorCtx.undo()
			},
			redo() {
				this.editorCtx.redo()
			},
			format(e) {
				let {
					name,
					value
				} = e.target.dataset
				if (!name) return
				this.editorCtx.format(name, value)
			},
			onStatusChange(e) {
				const formats = e.detail
				this.formats = formats
			},
			insertDivider() {
				this.editorCtx.insertDivider({
					success: function() {
						console.log('insert divider success')
					}
				})
			},
			clear() {
				this.editorCtx.clear({
					success: function(res) {
						console.log("clear success")
					}
				})
			},
			removeFormat() {
				this.editorCtx.removeFormat()
			},
			insertDate() {
				const date = new Date()
				const formatDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
				this.editorCtx.insertText({
					text: formatDate
				})
			},
			insertImage() {
				uni.chooseImage({
					count: 1,
					success: (res) => {
						uni.uploadFile({
							url: 'https://www.wangzh.work/upload',
							filePath: res.tempFilePaths[0],
							name: 'file',
							success: (resp) => {
								this.editorCtx.insertImage({
									src: JSON.parse(resp.data).data,
									alt: '图像',
									success: function() {
										
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
						})
					}
				})
			}
		},
		onLoad() {
			uni.loadFontFace({
				family: 'Pacifico',
				source: 'url("./Pacifico.ttf")'
			})
		},
	}
</script>

<style lang="scss" scoped>
	@import "./cs.css";

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
		background: linear-gradient(-120deg, #00aa7f, #aaff00, #00ffff, #ea7e0a);
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


	.wrapper {
		padding: 5px;
	}

	.toolbar {
		border: 1upx #000 solid;
	}

	.iconfont {
		display: inline-block;
		padding: 8px 8px;
		width: 24px;
		height: 24px;
		cursor: pointer;
		font-size: 20px;
	}

	.toolbar {
		box-sizing: border-box;
		border-bottom: 0;
		font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
	}

	.ql-container {
		box-sizing: border-box;
		padding: 12px 15px;
		width: 100%;
		min-height: 30vh;
		height: auto;
		background: #fff;
		font-size: 16px;
		line-height: 1.5;
		border: 1px #000 solid;
	}

	.ql-active {
		color: #06c;
	}
</style>