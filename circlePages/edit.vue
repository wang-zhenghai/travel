<template>
	<view class="template-edit tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed alpha customBack>
			<view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
				<text class='icon tn-icon-left'></text>
				<text class='icon tn-icon-home-capsule-fill'></text>
			</view>
		</tn-nav-bar>

		<view class="tn-safe-area-inset-bottom" :style="{paddingTop: vuex_custom_bar_height + 'px'}">

			<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-top tn-margin">
				<view class="tn-flex justify-content-item">
					<view class="tn-bg-black tn-color-white tn-text-center"
						style="border-radius: 100rpx;margin-right: 8rpx;width: 45rpx;height: 45rpx;line-height: 45rpx;">
						<text class="tn-icon-topics" style="font-size: 30rpx;"></text>
					</view>
					<view class="tn-text-lg tn-padding-right-xs tn-text-bold">想说点什么</view>
				</view>
				<!-- <view class="justify-content-item tn-text-df tn-color-grey">
					<text class="tn-padding-xs">1000字内</text>
					<text class="tn-icon-keyboard-circle"></text>
				</view> -->
			</view>
			<view class="tn-margin tn-bg-gray--light" style="border-radius: 10rpx;padding: 20rpx 30rpx;">
				<input placeholder="写下一句简短的标题" name="input" placeholder-style="color:#AAAAAA" v-model="title"></input>
			</view>
			<view class="tn-margin tn-bg-gray--light tn-padding" style="border-radius: 10rpx;">
				<textarea maxlength="1000" placeholder="说点什么 , 万一火了呢(1000字内)" placeholder-style="color:#AAAAAA"
					v-model="content" @blur="getTagList"></textarea>
			</view>

			<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-top-xl tn-margin">
				<view class="tn-flex justify-content-item">
					<view class="tn-bg-black tn-color-white tn-text-center"
						style="border-radius: 100rpx;margin-right: 8rpx;width: 45rpx;height: 45rpx;line-height: 45rpx;">
						<text class="tn-icon-image" style="font-size: 30rpx;"></text>
					</view>
					<view class="tn-text-lg tn-padding-right-xs tn-text-bold">发点什么图咧</view>
				</view>
				<view class="justify-content-item tn-text-df tn-color-grey" @tap="clear">
					<text class="tn-padding-xs">清空上传</text>
					<text class="tn-icon-delete"></text>
				</view>
			</view>

			<view class="tn-margin-left tn-padding-top-xs">
				<tn-image-upload-drag ref="imageUpload" :action="action" :width="236" :height="236" :fileList="fileList"
					:disabled="disabled" :autoUpload="autoUpload" :maxCount="maxCount" :showUploadList="showUploadList"
					:showProgress="showProgress" :customBtn="customBtn" :deleteable="false"
					@on-success="uploadSuccess" />
			</view>
			<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-top-sm tn-margin"
				@click="getLocation">
				<view class="tn-flex justify-content-item">
					<view class="tn-bg-black tn-color-white tn-text-center"
						style="border-radius: 100rpx;margin-right: 8rpx;width: 45rpx;height: 45rpx;line-height: 45rpx;">
						<text class="tn-icon-location" style="font-size: 30rpx;"></text>
					</view>
					<text class="tn-padding-right-xs tn-text-bold" style="width: 200rpx;font-size:33rpx;">拍摄地点</text>
				</view>
				<view class="justify-content-item tn-text-df tn-color-grey" v-if="location==='请选择拍摄地点'">
					<text class="tn-padding-xs">{{location}}</text>
					<text class="tn-icon-right"></text>
				</view>
				<text style="color: #fcd225;font-size: 31rpx;" class="text-show"
					v-if="location!='请选择拍摄地点'">{{location}}</text>
				<text class="tn-icon-right" v-if="location!='请选择拍摄地点'"></text>
			</view>
			<view v-if="seletedTagList.length>0">
				<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-top-xl tn-margin">
					<view class="tn-flex justify-content-item">
						<view class="tn-bg-black tn-color-white tn-text-center"
							style="border-radius: 100rpx;margin-right: 8rpx;width: 45rpx;height: 45rpx;line-height: 45rpx;">
							<text class="tn-icon-tag" style="font-size: 30rpx;"></text>
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
							bgColor="#ed7098" closable @close="close(item)" :show="showTag" shape="circle"></u-tag>
					</view>
				</view>
			</view>
			<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-top-sm tn-margin">
				<view class="tn-flex justify-content-item">
					<view class="tn-bg-black tn-color-white tn-text-center"
						style="border-radius: 100rpx;margin-right: 8rpx;width: 45rpx;height: 45rpx;line-height: 45rpx;">
						<text class="tn-icon-tag" style="font-size: 30rpx;"></text>
					</view>
					<view class="tn-text-lg tn-padding-right-xs tn-text-bold">推荐标签</view>
				</view>
				<view class="justify-content-item tn-text-df tn-color-grey" @click="show=true">
					<text class="tn-padding-xs">自定义</text>
					<text class="tn-icon-right"></text>
				</view>
			</view>
			<view>
				<tn-popup v-model="show" mode="center" width="520rpx" height="180rpx">
					<view style="border-bottom: 1px soild grey;"><tn-input v-model="tag" placeholder="请输入自定义标签(10个字内)~"
							maxlength="10"  type="text" :border="true"></tn-input></view>
					<view style="margin-top: 20rpx;width: 300rpx;display: flex;margin-left:116rpx;">
						<tn-button backgroundColor="tn-bg-blue" fontColor="tn-color-white"
							@click="show=false">取消</tn-button>
						<tn-button backgroundColor="#00ff00" fontColor="#080808" style="margin-left: 30rpx;"
							@click="confirmTag">确定</tn-button>
					</view>
				</tn-popup>
			</view>
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
			<u-overlay :show="progress" :opacity="0.7">
				<view style="position: absolute;top: 650rpx;left:270rpx;">
					<tn-circle-progress :percent="percent" activeColor="#31E749" :showPercent="true">
						<view class="tn-color-white">发布中...</view>
					</tn-circle-progress>
				</view>
			</u-overlay>
			<!-- 悬浮按钮-->
			<view class="tn-flex tn-footerfixed">
				<view class="tn-flex-1 justify-content-item tn-margin-sm tn-text-center">
					<tn-button backgroundColor="#00FFC6" padding="40rpx 0" width="60%" shadow fontBold @click="submit">
						<text class="tn-color-black">发 布</text>
						<text class="tn-icon-camera tn-padding-left-xs tn-color-black"></text>
					</tn-button>
				</view>
			</view>
		</view>
		<view class='tn-tabbar-height'></view>
	</view>
</template>

<script>
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	import userLoginVue from '../components/user-login/user-login.vue';
	export default {
		name: 'TemplateEdit',
		mixins: [template_page_mixin],
		data() {
			return {
				title: '',
				percent: 20,
				content: '',
				show: false,
				progress: false,
				showTag: true,
				tag: '',
				tagList: [],
				action: 'https://www.wangzh.work/upload',
				fileList: [],
				showUploadList: true,
				customBtn: false,
				showType: false,
				autoUpload: true,
				showProgress: true,
				maxCount: 15,
				location: '请选择拍摄地点',
				type: '请选择类型',
				typeList: [{
					text: '游记',
					color: '#009ad6'
				}, {
					text: '攻略',
					color: '#2a5caa'
				}],
				disabled: false,
				uploadFilePath: [],
				seletedTagList: []
			}
		},
		onLoad() {

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
			submitType(index) {
				if (index === 0) {
					this.type = '游记'
				} else {
					this.type = '攻略'
				}
			},
			getLocation() {
				let _this = this
				uni.chooseLocation({
					success: function(res) {
						if (res.name != '') {
							_this.location = res.name
						}
					}
				});
			},
			async getTagList() {
				if (this.content !== '') {
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
			//文件上传成功
			uploadSuccess(data) {
				this.uploadFilePath.push(data.data)
			},
			//提交游记表单
			async submit() {
				if (!uni.getStorageSync('token')) {
					uni.navigateTo({
						url: '/pages/login/login'
					})
					uni.$showMsg('亲，先登录才能发表哦~')
					return
				}
				if (this.title === '') {
					uni.$showMsg('亲,标题不能为空哦~')
					return
				}
				if (this.content === '') {
					uni.$showMsg('亲,内容不能为空哦~')
					return
				}
				if (this.uploadFilePath.length === 0) {
					uni.$showMsg('亲,照片至少上传一张哦~')
					return
				}
				if (this.location === '请选择拍摄地点') {
					uni.$showMsg('亲,请选择拍摄地点哦~')
					return
				}
				if (this.title === '' && this.content == '' && this.uploadFilePath.length === 0) {
					uni.$showMsg('亲,标题和内容与照片都不能为空哦~')
					return
				}
				const imageList = this.uploadFilePath.join(",")
				const tags = this.seletedTagList.join(",")
				const {
					data
				} = await uni.$http.post('/blog/save', {
					title: this.title,
					images: imageList,
					location: this.location,
					content: this.content,
					tag: tags,
					type: '游记'
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
							url: '/activityPages/travelPages/travelPages'
						})
					}, 3000)
					this.$refs.imageUpload.clear()
					this.title = ''
					this.content = ''
					this.location = ''
					this.type = ''
					this.seletedTagList = []
				} else {
					// uni.navigateTo({
					// 	url: '/pages/login/login'
					// })
					uni.$showMsg(data.msg)
				}
			},
			// 跳转
			tn(e) {
				uni.navigateTo({
					url: e,
				});
			},
			// 手动上传文件
			upload() {
				this.$refs.imageUpload.upload()
			},
			// 手动清空列表
			clear() {
				this.$refs.imageUpload.clear()
				this.uploadFilePath = []
			},
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

	.text-show {
		display: -webkit-box;
		text-overflow: ellipsis;
		overflow: hidden;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
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

	.tn-submitfixed {
		position: fixed;
		width: 100%;
		bottom: calc(30rpx + env(safe-area-inset-bottom));
		z-index: 500;
		box-shadow: 0 1rpx 6rpx rgba(0, 0, 0, 0);
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