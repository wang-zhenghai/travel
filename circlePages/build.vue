<template>
	<view class="template-build tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed alpha customBack>
			<view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
				<text class='icon tn-icon-left'></text>
				<text class='icon tn-icon-home-capsule-fill'></text>
			</view>
		</tn-nav-bar>

		<view class="tn-safe-area-inset-bottom" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
			<view class="tn-flex justify-content-item">
				<view class="tn-bg-black tn-color-white tn-text-center"
					style="border-radius: 100rpx;margin-right: 8rpx;width: 45rpx;height: 45rpx;line-height: 45rpx;margin-left: 22rpx;">
					<text class="tn-icon-topics" style="font-size: 30rpx;"></text>
				</view>
				<view class="tn-text-lg tn-padding-right-xs tn-text-bold">想说点什么</view>
			</view>
			<view class="tn-margin tn-bg-gray--light" style="border-radius: 10rpx;padding: 20rpx 30rpx;">
				<input placeholder="请填写视频标题" name="input" maxlength="80" placeholder-style="color:#AAAAAA"
					v-model="title"></input>
			</view>
			<view class="tn-margin tn-bg-gray--light tn-padding" style="border-radius: 10rpx;">
				<textarea maxlength="500" placeholder="请输入视频介绍 (500字内)" placeholder-style="color:#AAAAAA"
					v-model="content" @blur="getTagList"></textarea>
			</view>
			<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-top-xl tn-margin">
				<view class="tn-flex justify-content-item">
					<view class="tn-bg-black tn-color-white tn-text-center"
						style="border-radius: 100rpx;margin-right: 8rpx;width: 45rpx;height: 45rpx;line-height: 45rpx;">
						<text class="tn-icon-image" style="font-size: 30rpx;"></text>
					</view>
					<view class="">
						<text class="tn-text-lg tn-padding-right-xs tn-text-bold">上传视频</text>
					</view>
				</view>
				<view class="justify-content-item tn-text-df tn-color-grey" @click="clear">
					<text class="tn-padding-xs">清空上传</text>
					<text class="tn-icon-delete"></text>
				</view>
			</view>
			<view class="tn-margin-left tn-padding-top-sm" v-if="uploadShow">
				<u-upload @afterRead="afterRead" maxCount="1" accept="video" uploadText="上传视频"></u-upload>
			</view>
			<view class="tn-margin-left tn-padding-top-xs" v-if="videoShow">
				<!-- <video :src="uploadFilePath" :show-fullscreen-btn="false" :enable-play-gesture="true"></video> -->
				<video :src="uploadFilePath" :enable-play-gesture="true" :show-fullscreen-btn="false"
					object-fit="fill" :poster="uploadFilePath+'?x-oss-process=video/snapshot,t_1000,f_jpg'" controls></video>
					<!-- <u--image :showLoading="true" :src="uploadFilePath+'?x-oss-process=video/snapshot,t_1000,f_jpg'"
					 width="160px" height="80px" mode="widthFix"></u--image> -->
			</view>
			<view v-if="seletedTagList.length>0">
				<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-top-sm tn-margin">
					<view class="tn-flex justify-content-item">
						<view class="tn-bg-black tn-color-white tn-text-center"
							style="border-radius: 100rpx;margin-right: 8rpx;width: 45rpx;height: 45rpx;line-height: 45rpx;">
							<text class="tn-icon-assort" style="font-size: 30rpx;"></text>
						</view>
						<view class="tn-text-lg tn-padding-right-xs tn-text-bold">已选标签</view>
					</view>
					<view class="justify-content-item tn-text-df tn-color-grey" @click="delTagList">
						<text class="tn-padding-xs">清空全部</text>
						<text class="tn-icon-delete"></text>
					</view>
				</view>
				<view>
					<view class="selectTagList">
						<u-tag :text="item" v-for="(item,index) of seletedTagList" :key="index" color="#FFFFFF"
							bgColor="#ad0000" closable @close="close(item)" :show="showTag"></u-tag>
					</view>
				</view>
			</view>

			<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-top-sm tn-margin">
				<view class="tn-flex justify-content-item">
					<view class="tn-bg-black tn-color-white tn-text-center"
						style="border-radius: 100rpx;margin-right: 8rpx;width: 45rpx;height: 45rpx;line-height: 45rpx;">
						<text class="tn-icon-assort" style="font-size: 30rpx;"></text>
					</view>
					<view class="tn-text-lg tn-padding-right-xs tn-text-bold">推荐标签</view>
				</view>
				<view class="justify-content-item tn-text-df tn-color-grey" @click="show=true">
					<text class="tn-padding-xs">自定义标签</text>
					<text class="tn-icon-right"></text>
				</view>
			</view>
			<view>
				<tn-popup v-model="show" mode="center" width="520rpx" height="180rpx">
					<view style="border-bottom: 1px soild grey;"><tn-input v-model="tag" placeholder="请输入自定义标签(10个字内)~"
							maxlength="10" :focus="true" type="text" :border="true"></tn-input></view>
					<view style="margin-top: 20rpx;width: 300rpx;display: flex;margin-left:116rpx;">
						<tn-button backgroundColor="tn-bg-blue" fontColor="tn-color-white"
							@click="show=false">取消</tn-button>
						<tn-button backgroundColor="#00ff00" fontColor="#080808" style="margin-left: 30rpx;"
							@click="confirmTag">确定</tn-button>
					</view>
				</tn-popup>
			</view>

			<u-overlay :show="progress" :opacity="0.7">
				<view style="position: absolute;top: 650rpx;left:270rpx;">
					<tn-circle-progress :percent="percent" activeColor="#31E749" :showPercent="true">
						<view class="tn-color-white">发布中...</view>
					</tn-circle-progress>
				</view>
			</u-overlay>

			<view class="tn-tag-content tn-margin tn-text-justify tn-padding-bottom">
				<view v-for="(item, index) in tagList" :key="index" @click="selectTag(item)"
					class="tn-tag-content__item tn-margin-right tn-round tn-text-sm tn-text-bold"
					:class="[`tn-bg-grey--light tn-color-grey`]">
					<text class="tn-tag-content__item--prefix">#</text> {{ item }}
				</view>
				<view v-if="tagList.length===0" @click="show=true"
					class="tn-tag-content__item tn-margin-right tn-round tn-text-sm tn-text-bold"
					:class="[`tn-bg-red--light tn-color-red`]">
					<text class="tn-tag-content__item--prefix">+</text>添加自定义标签
				</view>
			</view>

			<!-- 悬浮按钮-->
			<view class="tn-flex tn-footerfixed">
				<view class="tn-flex-1 justify-content-item tn-margin-sm tn-text-center">
					<tn-button backgroundColor="#00FFC6" padding="40rpx 0" width="60%" shadow fontBold @click="submit">
						<text class="tn-color-black">发 布</text>
						<text class="tn-icon-topics tn-padding-left-xs tn-color-black"></text>
					</tn-button>
				</view>
			</view>
		</view>
		<view class='tn-tabbar-height'></view>
	</view>
</template>

<script>
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	export default {
		name: 'TemplateBuild',
		mixins: [template_page_mixin],
		data() {
			return {
				progress: false,
				percent: 20,
				tagList: [],
				uploadFilePath: '',
				title: '',
				content: '',
				tempPath: '',
				uploadShow: true,
				showTag: true,
				videoShow: false,
				show: false,
				seletedTagList: [],
				tag: ''
			}
		},
		watch: {
			seletedTagList: function(newValue, oldValue) {
				if (newValue.length > 5) {
					uni.$showMsg('亲，最多可以添加5个标签哦~')
					this.seletedTagList.splice(5)
				}
			}
		},
		methods: {
			async getTagList() {
				if(this.content!==''){
					const {
						data
					} = await uni.$http.get('/api/getTagList?text=' + this.content)
					if (data.code === 1) {
						this.tagList = data.data
					}
				}
			},
			confirmTag() {
				if (this.tag === '') {
					uni.$showMsg('自定义标签不能为空')
					return
				}
				let index = this.seletedTagList.indexOf(this.tag);
				if (index != -1) {
					uni.$showMsg('已存在相同标签啦！')
					this.tag = ''
				} else {
					this.seletedTagList.push(this.tag)
					this.show = false
					this.tag = ''
					uni.$showMsg('添加成功！')
				}
			},
			selectTag(tag) {
				let index = this.seletedTagList.indexOf(tag);
				if (index != -1) {
					uni.$showMsg('相同标签只能存在一个哦')
				} else {
					this.seletedTagList.push(tag)
				}
			},
			close(tag) {
				let index = this.seletedTagList.indexOf(tag)
				this.seletedTagList.splice(index, 1)
			},
			//清空已选标签
			delTagList() {
				this.seletedTagList = []
			},
			//提交视频表单
			async submit() {
				if (!uni.getStorageSync('token')) {
					uni.navigateTo({
						url: '/pages/login/login'
					})
					uni.$showMsg('亲，先登录才能发表哦~')
					return
				}
				if (this.title === '') {
					uni.$showMsg('亲,视频标题不能为空哦~')
					return
				}
				if (this.content === '') {
					uni.$showMsg('亲,视频内容不能为空哦~')
					return
				}
				if (this.uploadFilePath === '') {
					uni.$showMsg('亲,请上传你的视频~')
					return
				}
				if (this.title === '' && this.content == '' && this.uploadFilePath === '') {
					uni.$showMsg('亲,标题和内容与视频都不能为空哦~')
					return
				}
				const tags = this.seletedTagList.join("#")
				const {
					data
				} = await uni.$http.post('/video/save', {
					title: this.title,
					url: this.uploadFilePath,
					content: this.content,
					tag: tags
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
						uni.navigateBack()
					}, 3000)
					this.uploadFilePath = ''
					this.title = ''
					this.content = ''
					this.seletedTagList = []
					this.videoShow = false
					this.uploadShow = true
				} else {
					// uni.navigateTo({
					// 	url: '/pages/login/login'
					// })
					uni.$showMsg(data.msg)
				}
			},
			afterRead(event) {
				var _this = this
				const uploadTask = uni.uploadFile({
					header: {
						'Content-Type': 'multipart/form-data' // 请求体的编码格式
					},
					url: 'https://www.wangzh.work/upload', // 后端接口文档上的接口地址
					filePath: event.file.url, // 路径
					name: 'file',
					// 上传成功回调
					success: function(res) {
						const data = JSON.parse(res.data)
						_this.uploadFilePath = data.data
						_this.uploadShow = false
						_this.videoShow = true
					},
					// 上传失败回调
					fail: function(err) {
						console.log(err);
						uni.navigateTo({
							url: '/pages/login/login'
						})
						uni.$showMsg('登录失效,请重新登录')
					}
				})
				uploadTask.onProgressUpdate((res) => {
					uni.showLoading({
						title: '已上传' + res.progress + '%',
					})
					if (res.progress === 100) {
						setTimeout(() => {
							uni.hideLoading()
							uni.$showMsg('上传视频成功~')
						}, 2000)
					}
				})
			},
			clear() {
				this.uploadFilePath = ''
				this.videoShow = false
				this.uploadShow = true
			},
			// 跳转
			tn(e) {
				uni.navigateTo({
					url: e,
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.template-edit {}

	.selectTagList {
		display: flex;
		margin-top: 12rpx;
		margin-left: 26rpx;
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

	/* 底部悬浮按钮 start*/
	.tn-tabbar-height {
		min-height: 100rpx;
		height: calc(120rpx + env(safe-area-inset-bottom) / 2);
	}

	.tn-footerfixed {
		position: fixed;
		width: 100%;
		bottom: calc(30rpx + env(safe-area-inset-bottom));
		z-index: 1024;
		box-shadow: 0 1rpx 6rpx rgba(0, 0, 0, 0);

	}

	/* 底部悬浮按钮 end*/

	/* 标签内容 start*/
	.tn-tag-content {
		&__item {
			display: inline-block;
			line-height: 45rpx;
			padding: 10rpx 30rpx;
			margin: 20rpx 20rpx 5rpx 0rpx;

			&--prefix {
				padding-right: 10rpx;
			}
		}
	}

	/* 标签内容 end*/
</style>