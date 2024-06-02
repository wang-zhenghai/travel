<template>
	<view class="template-create tn-safe-area-inset-bottom">
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
					style="border-radius: 100rpx;margin-right: 8rpx;width: 45rpx;height: 45rpx;line-height: 45rpx;margin-left: 20rpx;">
					<text class="tn-icon-topics" style="font-size: 30rpx;"></text>
				</view>
				<view class="tn-text-lg tn-padding-right-xs tn-text-bold">想说点什么</view>
			</view>
			<view class="tn-margin tn-bg-gray--light" style="border-radius: 10rpx;padding: 20rpx 30rpx;">
				<input placeholder="请填写结伴标题吖(30字以内)" name="input" placeholder-style="color:#AAAAAA" maxlength="30"
					v-model="title"></input>
			</view>
			<view class="tn-margin tn-bg-gray--light tn-padding" style="border-radius: 10rpx;">
				<textarea maxlength="600" placeholder="说出你的结伴旅行计划吧,比如时间安排,出行方式,旅途亮点等等(600字以内)"
					placeholder-style="color:#AAAAAA" v-model="content"></textarea>
			</view>
			<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-top-xl tn-margin">
				<view class="tn-flex justify-content-item">
					<view class="tn-bg-black tn-color-white tn-text-center"
						style="border-radius: 100rpx;margin-right: 8rpx;width: 45rpx;height: 45rpx;line-height: 45rpx;">
						<text class="tn-icon-image" style="font-size: 30rpx;"></text>
					</view>
					<view class="tn-text-lg tn-padding-right-xs tn-text-bold">结伴图片</view>
				</view>
				<view class="justify-content-item tn-text-df tn-color-grey" @tap="clear">
					<text class="tn-padding-xs">清空上传</text>
					<text class="tn-icon-delete"></text>
				</view>
			</view>
			<view class="tn-margin-left tn-padding-top-xs">
				<tn-image-upload-drag ref="imageUpload" :action="action" :width="236" :height="236" :fileList="fileList"
					:disabled="disabled" :autoUpload="autoUpload" :maxCount="maxCount" :showUploadList="showUploadList"
					:showProgress="showProgress" :deleteable="false" :customBtn="customBtn"
					@on-success="uploadSuccess" />
			</view>
			<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-top-sm tn-margin">
				<view class="tn-flex justify-content-item">
					<view class="tn-bg-black tn-color-white tn-text-center"
						style="border-radius: 100rpx;margin-right: 8rpx;width: 45rpx;height: 45rpx;line-height: 45rpx;">
						<text class="tn-icon-time" style="font-size: 30rpx;"></text>
					</view>
					<view class="tn-text-lg tn-padding-right-xs tn-text-bold">结伴时间</view>
				</view>
				<view class="justify-content-item tn-text-df tn-color-grey" @click="showDate=true">
					<text class="tn-padding-xs">{{activityTime}}</text>
					<text class="tn-icon-right"></text>
				</view>
			</view>
			<tn-picker mode="time" v-model="showDate" :params="params" @cancel="cancelTime"
				:startYear="new Date().getFullYear()" @confirm="confirmTime"></tn-picker>
			<u-overlay :show="progress" :opacity="0.7">
				<view style="position: absolute;top: 650rpx;left:270rpx;">
					<tn-circle-progress :percent="percent" activeColor="#31E749" :showPercent="true">
						<view class="tn-color-white">发布中...</view>
					</tn-circle-progress>
				</view>
			</u-overlay>
			<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-top-sm tn-margin"
				@click="getLocation">
				<view class="tn-flex justify-content-item">
					<view class="tn-bg-black tn-color-white tn-text-center"
						style="border-radius: 100rpx;margin-right: 8rpx;width: 45rpx;height: 45rpx;line-height: 45rpx;">
						<text class="tn-icon-location" style="font-size: 30rpx;"></text>
					</view>
					<text class="tn-padding-right-xs tn-text-bold" style="width: 200rpx;font-size:33rpx;">目的地</text>
				</view>
				<view class="justify-content-item tn-text-df tn-color-grey" v-if="activityAddress==='请选择目的地'">
					<text class="tn-padding-xs">{{activityAddress}}</text>
					<text class="tn-icon-right"></text>
				</view>
				<text style="color: #fcd225;font-size: 31rpx;" class="text-show"
					v-if="activityAddress!='请选择目的地'">{{activityAddress}}</text>
				<text class="tn-icon-right" v-if="activityAddress!='请选择目的地'"></text>
			</view>
			<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-top-sm tn-margin"
				@click="showWishCount=true">
				<view class="tn-flex justify-content-item">
					<view class="tn-bg-black tn-color-white tn-text-center"
						style="border-radius: 100rpx;margin-right: 8rpx;width: 45rpx;height: 45rpx;line-height: 45rpx;">
						<text class="tn-icon-fire" style="font-size: 30rpx;"></text>
					</view>
					<view class="tn-text-lg tn-padding-right-xs tn-text-bold">希望人数</view>
				</view>
				<view class="justify-content-item tn-text-df tn-color-grey">
					<text class="tn-padding-xs" v-if="wishCount=='请选择希望人数'">{{wishCount}}</text>
					<text class="tn-padding-xs" v-if="wishCount!='请选择希望人数'">{{wishCount}}人</text>
					<text class="tn-icon-right"></text>
				</view>
			</view>
			<view style="margin-top: -30rpx;">
				<u-picker :show="showWishCount" :columns="columns" @cancel="showWishCount=false"
					@confirm="confirmWishCount" :closeOnClickOverlay="true" title="选择希望人数"></u-picker>
			</view>
	<!-- 		<view v-if="seletedTagList.length>0">
				<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-top-sm tn-margin">
					<view class="tn-flex justify-content-item">
						<view class="tn-bg-black tn-color-white tn-text-center"
							style="border-radius: 100rpx;margin-right: 8rpx;width: 45rpx;height: 45rpx;line-height: 45rpx;">
							<text class="tn-icon-tag" style="font-size: 30rpx;"></text>
						</view>
						<view class="tn-text-lg tn-padding-right-xs tn-text-bold">已选主题</view>
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
			</view> -->
			<!-- <view>
				<tn-popup v-model="show" mode="center" width="520rpx" height="180rpx">
					<view style="border-bottom: 1px soild grey;"><tn-input v-model="tag" placeholder="请输入自定义主题(10个字内)~"
							maxlength="10" :focus="true" type="text" :border="true"></tn-input></view>
					<view style="margin-top: 20rpx;width: 300rpx;display: flex;margin-left:116rpx;">
						<tn-button backgroundColor="tn-bg-blue" fontColor="tn-color-white"
							@click="show=false">取消</tn-button>
						<tn-button backgroundColor="#00ff00" fontColor="#080808" style="margin-left: 30rpx;"
							@click="confirmTag">确定</tn-button>
					</view>
				</tn-popup>
			</view> -->
	<!-- 		<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-top-sm tn-margin">
				<view class="tn-flex justify-content-item">
					<view class="tn-bg-black tn-color-white tn-text-center"
						style="border-radius: 100rpx;margin-right: 8rpx;width: 45rpx;height: 45rpx;line-height: 45rpx;">
						<text class="tn-icon-tag" style="font-size: 30rpx;"></text>
					</view>
					<view class="tn-text-lg tn-padding-right-xs tn-text-bold">推荐主题</view>
				</view>
				<view class="justify-content-item tn-text-df tn-color-grey" @click="show=true">
					<text class="tn-padding-xs">自定义主题</text>
					<text class="tn-icon-right"></text>
				</view>
			</view> -->
		<!-- 	<view class="tn-tag-content tn-margin tn-text-justify tn-padding-bottom">
				<view v-for="(item, index) in tagList" :key="index" @click="selectTag(item)"
					class="tn-tag-content__item tn-margin-right tn-round tn-text-sm tn-text-bold"
					:class="[`tn-bg-grey--light tn-color-grey`]">
					<text class="tn-tag-content__item--prefix">#</text> {{ item }}
				</view>
				<view v-if="tagList.length===0" @click="show=true"
					class="tn-tag-content__item tn-margin-right tn-round tn-text-sm tn-text-bold"
					:class="[`tn-bg-red--light tn-color-red`]">
					<text class="tn-tag-content__item--prefix">+</text>添加自定义主题
				</view>
			</view> -->
			<!-- 悬浮按钮-->
			<view class="tn-flex tn-footerfixed">
				<view class="tn-flex-1 justify-content-item tn-margin-sm tn-text-center">
					<tn-button backgroundColor="#00FFC6" padding="40rpx 0" width="60%" shadow fontBold @click="submit">
						<text class="tn-color-black">发 起</text>
						<text class="tn-icon-flag tn-padding-left-xs tn-color-black"></text>
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
		name: 'TemplateCreate',
		mixins: [template_page_mixin],
		data() {
			return {
				showDate: false,
				title: '',
				content: '',
				activityTime: '请选择结伴时间',
				activityAddress: '请选择目的地',
				seletedTagList: [],
				showTag: true,
				show: false,
				progress: false,
				percent: 20,
				wishCount: '请选择希望人数', //希望人数
				tag: '',
				address: '',
				tagList: [],
				action: 'https://www.wangzh.work/upload',
				fileList: [],
				showUploadList: true,
				customBtn: false,
				showWishCount: false,
				columns: [
					[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
				],
				autoUpload: true,
				showProgress: true,
				showAddress: false,
				maxCount: 9,
				disabled: false,
				imageList: [],
				activityImg: '',
				activityForm: {},
				activityTag: '',
				params: {
					year: true,
					month: true,
					day: true,
					hour: true,
					minute: true
				},
			}
		},
		// watch: {
		// 	seletedTagList: function(newValue, oldValue) {
		// 		if (newValue.length > 2) {
		// 			uni.$showMsg('亲，最多可以添加2个标签哦~')
		// 			this.seletedTagList.splice(2)
		// 		}
		// 	}
		// },
		methods: {
			// async getTagList() {
			// 	if (this.content !== '') {
			// 		const {
			// 			data
			// 		} = await uni.$http.get('/api/getTagList?text=' + this.content)
			// 		if (data.code === 1) {
			// 			this.tagList = data.data
			// 		}
			// 	}
			// },
			confirmWishCount(item) {
				this.wishCount = item.value.pop()
				this.showWishCount = false
			},
			getLocation() {
				let _this = this
				uni.chooseLocation({
					success: function(res) {
						if (res.name != '') {
							_this.activityAddress = res.name
						}
					}
				});
			},
			async submit() {
				if (!this.title) {
					uni.$showMsg('结伴标题不能为空哦！')
					return
				}
				if (!this.content) {
					uni.$showMsg('结伴内容不能为空哦！')
					return
				}

				if (this.activityTime === '请选择结伴时间') {
					uni.$showMsg('结伴时间不能为空哦！')
					return
				}

				if (this.activityAddress === '请选择目的地') {
					uni.$showMsg('目的地不能为空哦！')
					return
				}

				if (this.wishCount === '请选择希望人数') {
					uni.$showMsg('希望人数至少一个哦！')
					return
				}

				// if (this.seletedTagList.length === 0) {
				// 	uni.$showMsg('结伴标签至少一个哦！')
				// 	return
				// }

				if (this.imageList.length === 0) {
					uni.$showMsg('结伴图片至少一张哦！')
					return
				}

				this.activityImage = this.imageList.join(',')
				// this.activityTag = this.seletedTagList.join('#')
				const userId = uni.getStorageSync('userId')
				this.activityForm = {
					userId: userId,
					activityTitle: this.title,
					activityContent: this.content,
					activityTime: this.activityTime,
					// activityTag: this.activityTag,
					activityAddress: this.activityAddress,
					activityImage: this.activityImage,
					wishCount: this.wishCount
				}
				const {
					data
				} = await uni.$http.post('/activity/createActivity', this.activityForm)
				if (data.code === 1) {
					// uni.showToast({
					// 	title:'发布结伴活动成功！',
					// 	icon:'success'
					// })
					// setTimeout(()=>{
					// 	uni.navigateTo({
					// 		url:'/pages/publish/publish'
					// 	})
					// },400)
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
							url: '/pages/index?index=1'
						})
					}, 3000)
					this.$refs.imageUpload.clear()
					// this.seletedTagList = []
					this.title = ''
					this.content = ''
					this.activityTime = ''
					this.activityAddress = ''
				} else {
					// uni.navigateTo({
					// 	url: '/pages/login/login'
					// })
					// uni.showToast({
					// 	title:'登录失效,请重新登录~',
					// 	icon:'error'
					// })
					uni.$showMsg(data.msg)
				}
			},
			//文件上传成功
			uploadSuccess(e) {
				this.imageList.push(e.data)
			},
			cancelTime() {
				this.showDate = false
			},
			confirmTime(e) {
				this.showDate = false
				this.activityTime = e.year + '年' + e.month + '月' + e.day + '日' + e.hour + '时' + e.minute + '分'
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
				this.imageList=[]
				this.$refs.imageUpload.clear()
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