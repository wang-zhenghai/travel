<template>
	<view>
		<tn-nav-bar :isBack="true" :bottomShadow="true" backgroundColor="#fff" backTitle=" ">
			<view class="custom-nav tn-flex tn-flex-col-center tn-flex-row-left">
				<view class="tn-margin-top tn-margin-left"
					style="text-shadow:  1rpx 0 0 #FFF, 0 1rpx 0 #FFF, -1rpx 0 0 #FFF , 0 -1rpx 0 #FFF;">
				</view>
			</view>
		</tn-nav-bar>
		<view>
			<video :src="videoInfo.url" :show-center-play-btn="true" :autoplay="true" loop
				style="height:89vh;width: 100vw;" :show-fullscreen-btn="false" :enable-play-gesture="true"></video>
			<view style="position: absolute;top: 752rpx;left:640rpx" @click="goBack">
				<tn-avatar :src="videoInfo.avatar" backgroundColor="tn-color-white" size="lg" border
					borderColor="#2b7dcb"></tn-avatar>
			</view>
			<view @click="likeVideo(videoInfo.id,videoInfo.isLike)"
				style="position: absolute;top: 870rpx;left:650rpx;display: flex;flex-direction: column;align-videoInfos: center;">
				<text class="tn-icon-like-fill" style="font-size: 36px;"
					:style="{color:videoInfo.isLike?color:color1}"></text>
				<text style="font-size: 11px;color: #FFF;margin-top: 6rpx;" v-if="videoInfo.liked<1">赞</text>
				<text style="font-size: 12px;color: #FFF;margin-top: 6rpx;text-align: center;"
					v-if="videoInfo.liked>0&&videoInfo.liked<9999">{{videoInfo.liked}}</text>
				<text style="font-size: 12px;color: #FFF;margin-top: 6rpx;margin-left: 12rpx;"
					v-if="videoInfo.liked>9999&&videoInfo.liked<99999">{{(Math.floor(videoInfo.liked/1000)/10) + '万'}}</text>
				<text style="font-size: 12px;color: #FFF;margin-top: 6rpx;margin-left: 3rpx;"
					v-if="videoInfo.liked>99999">{{(Math.floor(videoInfo.liked/1000)/10) + '万'}}</text>
			</view>
			<view @click="openComment(videoInfo.id,videoInfo.comment,videoInfo.userId)"
				style="position: absolute;top: 1000rpx;left:650rpx;display: flex;flex-direction: column;align-videoInfos: center;">
				<text class="tn-icon-comment" style="font-size: 35px;color: #fff;"></text>
				<text style="font-size: 10px;color: #FFF;margin-top: 6rpx;margin-left: 10rpx;"
					v-if="videoInfo.comment<1">抢首评</text>
				<text style="font-size: 12px;color: #FFF;margin-top: 6rpx;margin-left: 24rpx;"
					v-if="videoInfo.comment>0&&videoInfo.comment<9999">{{videoInfo.comment}}</text>
				<text style="font-size: 12px;color: #FFF;margin-top: 6rpx;margin-left: 12rpx;"
					v-if="videoInfo.comment>9999&&videoInfo.comment<99999">{{(Math.floor(videoInfo.comment/1000)/10) + '万'}}</text>
				<text style="font-size: 12px;color: #FFF;margin-top: 6rpx;margin-left: 3rpx;"
					v-if="videoInfo.comment>99999">{{(Math.floor(videoInfo.comment/1000)/10) + '万'}}</text>
			</view>
			<view @click="collectionVideo(videoInfo.id,videoInfo.isCollection)"
				style="position: absolute;top: 1125rpx;left:652rpx;display: flex;flex-direction: column;align-videoInfos: center;">
				<text class="tn-icon-star-fill" style="font-size: 33px;"
					:style="{color:videoInfo.isCollection?'#fdba13':'#ffffff'}"></text>
				<text style="font-size: 11px;color: #FFF;margin-top: 6rpx;" v-if="videoInfo.collection<1">收藏</text>
				<text style="font-size: 12px;color: #FFF;margin-top: 6rpx;text-align: center;"
					v-if="videoInfo.collection>0&&videoInfo.collection<9999">{{videoInfo.collection}}</text>
				<text style="font-size: 12px;color: #FFF;margin-top: 6rpx;margin-left: 12rpx;"
					v-if="videoInfo.collection>9999&&videoInfo.collection<99999">{{(Math.floor(videoInfo.collection/1000)/10) + '万'}}</text>
				<text style="font-size: 12px;color: #FFF;margin-top: 6rpx;margin-left: 3rpx;"
					v-if="videoInfo.collection>99999">{{(Math.floor(videoInfo.collection/1000)/10) + '万'}}</text>
			</view>
			<view style="position: absolute;top: 1260rpx;left: 10rpx;">
				<text style="color: #fff;margin-left: 10rpx;">@{{videoInfo.username}}</text>
				<view style="margin-top: 10rpx;">
					<text style="color: #fff;margin-left: 10rpx;" class="u-line-2">
						{{videoInfo.title}}
					</text>
					<view>
						<text style="color: #fff;margin-left: 10rpx;" class="u-line-1">
							{{videoInfo.tag?'#'+videoInfo.tag:''}}
						</text>
					</view>
				</view>
			</view>
		</view>
		<view>
			<tn-popup v-model="showCommentList" mode="bottom" width="750rpx" :safeAreaInsetBottom="true" height="950rpx"
				:closeBtn="true" @open="loadComment" @close="closeComment">
				<view style="margin-left: 310rpx;margin-top: 20rpx;"><text>{{commentTotal}}条评论</text></view>
				<!-- 评论 -->
				<scroll-view :scroll-y="true" style="height: 1100rpx;">
					<view v-if="commentList.length===0" style="margin-top: 200rpx;">
						<tn-empty mode="comment"></tn-empty>
					</view>
					<view class="tn-margin" v-for="item of commentList" :key="item.id"
						style="margin-top: 30rpx;margin-bottom: 10rpx;">
						<!-- 图标logo/头像 -->
						<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin-top-xl">
							<view class="justify-content-item">
								<view class="tn-flex tn-flex-col-center tn-flex-row-left">
									<view class="logo-pic tn-shadow">
										<view class="logo-image">
											<view class="tn-shadow-blur" @click="goUserHome(item.userId)"
												:style="{backgroundImage: 'url(' + item.avatar + ')',backgroundSize:'cover',width:'70rpx',height:'70rpx'}">
											</view>
										</view>
									</view>
									<view class="tn-padding-right tn-padding-left-sm">
										<view class="tn-padding-right tn-text-df tn-text-bold tn-color-black"
											style="display: flex;" @click="goUserHome(item.userId)">
											{{item.username}}
											<view style="margin-left: 6rpx;" v-if="item.userId===videoUserId">
												<tn-tag backgroundColor="#ff007f" fontColor="#FFF" size="sm"
													width="100%" shape="circleLeft">作者</tn-tag>
											</view>
										</view>
									</view>
								</view>
							</view>
							<view class="justify-content-item tn-flex-row-center tn-flex-col-center tn-color-gray">
								<view class="tn-text-center">
									<text class="tn-icon-like-fill tn-padding-xs"
										:style="{color:item.isLike?'#fe3157':''}"
										@click="likeComment(item.id,item.isLike)"></text>
								</view>
								<view class="tn-text-center">
									<text class="tn-text-xs"
										@click="likeComment(item.id,item.isLike)">{{item.liked}}</text>
								</view>
							</view>
						</view>
						<view class="" style="margin: 20rpx 20rpx 20rpx 80rpx;">
							{{item.content}}
							<view class="justify-content-item tn-text-xs tn-color-gray" style="margin-top: 12rpx;">
								{{handlePublishTimeDesc(item.createTime)}}
								<text style="font-size: 12px;margin-left: 22rpx;font-weight: 700;">· {{item.province}}</text>
								<text style="font-size: 12px;margin-left: 22rpx;font-weight: 500;color: black;"
									@click="reply(item.username,item.id)">回复</text>
									<text style="font-size: 12px;margin-left: 10rpx;font-weight: 500;color: black;" @click="report" v-if="item.userId!=userId">举报</text>
							</view>
						</view>
						<view class="tn-bg-gray--light tn-padding-sm" v-for="children of item.children"
							:key="children.id"
							style="margin: 20rpx 30rpx 30rpx 80rpx;border-radius: 10rpx;margin-bottom: 10rpx;">
							<tn-avatar :src="children.avatar" backgroundColor="tn-color-white" size="sm"
								@click="goUserHome(children.userId)" border borderColor="#2b7dcb"
								shape="square"></tn-avatar>
							<text style="color: deepskyblue;font-size: 14px;margin-left: 8rpx;margin-right: 8rpx;"
								@click="goUserHome(children.userId)">{{children.username}}</text>
							<tn-tag backgroundColor="#ff007f" fontColor="#FFF" size="sm" width="80rpx"
								shape="circleLeft" v-if="children.userId===videoUserId">作者</tn-tag>
							<text class="tn-text-bold tn-padding-right-xs" style="margin-left: 8rpx;line-height: 40rpx;">回复{{children.target}}: {{children.content}}</text>
							<view class="tn-flex tn-flex-row-between tn-margin-top-xs">
								<view class="justify-content-item tn-text-xs tn-color-gray" style="padding-top: 5rpx;">
									{{handlePublishTimeDesc(children.createTime)}}
									<text style="font-size: 12px;margin-left: 22rpx;font-weight: 700;">· {{children.province}}</text>
									<text style="font-size: 12px;margin-left: 22rpx;font-weight: 500;color: black;"
										@click="reply(children.username,item.id)">回复</text>
										<text style="font-size: 12px;margin-left: 10rpx;font-weight: 500;color: black;" @click="report" v-if="children.userId!=userId">举报</text>
								</view>
								<view class="justify-content-item tn-text-xs tn-color-gray">
									<text class="tn-padding-xs" style="font-size: 12px;"
										@click="likeComment(children.id,children.isLike)">{{children.liked}}</text>
									<text class="tn-icon-like-fill" style="font-size: 14px;"
										:style="{color:children.isLike?'#fe3157':''}"
										@click="likeComment(children.id,children.isLike)"></text>
								</view>
							</view>
						</view>
					</view>
					<view class="tn-tabbar-height"></view>
					<view style="position: fixed;bottom: 30rpx;border-top: 1px solid #bcbcbc;width: 100vw;">
						<view style="padding: 6rpx 20rpx 20rpx 10rpx;" @click="submitComment">
							<u--input placeholder="善语结善缘,恶言伤人心" border="surround" shape="circle" disabled
								disabledColor="#f8f7f8"></u--input>
						</view>
					</view>
					<view class="tn-tabbar-height"></view>
					<view class="tn-tabbar-height"></view>
				</scroll-view>
			</tn-popup>
		</view>
		<view>
			<tn-popup v-model="showSubmitPopup" @close="closeSubmitPopup" @open="openSubmitPopup" mode="bottom"
				width="750rpx" :height="height+'rpx'">
				<view style="display: flex;;">
					<view style="padding: 10rpx 20rpx 20rpx 10rpx;" :style="{flex:userComment===''?'1':'0.85'}">
						<u--textarea height="200" :cursorSpacing="100" v-model="userComment" ref="textarea"
							placeholder="善语结善缘,恶言伤人心" :autoHeight="true" maxlength="520" :showConfirmBar="false"
							:adjustPosition="false">
						</u--textarea>
					</view>
					<view style="position: fixed;right: 10rpx;" v-if="userComment"
						:style="{top:userComment.length>85?'80rpx':'40rpx'}">
						<tn-button backgroundColor="#fe3157" fontColor="#ffffff" size="sm" shape="round"
							@click="sendComment">发送</tn-button>
					</view>
				</view>
			</tn-popup>
		</view>
		<view style="border-radius: 30%;">
			<tn-popup v-model="showReport"  mode="bottom" 
			height="550rpx" width="750rpx" closeBtn borderRadius="30" @close="closeshowReport">
				<view style="margin-top: 22rpx;font-weight: 700;margin-left: 20rpx;margin-bottom: 28rpx;">评论举报</view>
				<u-line></u-line>
				<view style="margin-top: 18rpx;margin-left: 20rpx;">
					<text style="margin-right: 8rpx;font-size: 600;">举报原因</text>
					<text style="color: red;margin-top: 30rpx;font-size: 22rpx;">*</text>
				</view>
				<view style="margin-top: 10rpx;display: flex;flex-wrap: wrap;">
					<view  v-for="item of reportList" :key="item.id" style="padding: 20rpx;">
						<tn-tag :backgroundColor="item.backgroundColor" fontColor="#080808" width="200rpx" @click="selectReports(item.id-1)">{{item.title}}</tn-tag>
					</view>
				</view>
				<view class="footerfixed dd-glass tn-padding-left-sm tn-padding-right tn-padding-top-xs tn-padding-bottom-sm">
					<tn-button backgroundColor="tn-bg-red" fontColor="tn-color-white" width="100%"
						@click="submitReport">提交</tn-button>
				</view>
			</tn-popup>
		</view>
		<!-- 回复弹窗 -->
		<view>
			<tn-popup v-model="showReplyPopup" @close="closeReplyPopup" @open="openSubmitPopup" mode="bottom"
				width="750rpx" :height="height+'rpx'">
				<view style="display: flex;;">
					<view style="padding: 10rpx 20rpx 20rpx 10rpx;" :style="{flex:userComment===''?'1':'0.85'}">
						<u--textarea height="200" :cursorSpacing="100" v-model="userComment" ref="textarea"
							:placeholder="placeholder" :autoHeight="true" maxlength="520" :showConfirmBar="false"
							:adjustPosition="false">
						</u--textarea>
					</view>
					<view style="position: fixed;right: 10rpx;" v-if="userComment"
						:style="{top:userComment.length>85?'80rpx':'40rpx'}">
						<tn-button backgroundColor="#fe3157" fontColor="#ffffff" size="sm" shape="round"
							@click="sendReplyComment">发送</tn-button>
					</view>
				</view>
			</tn-popup>
		</view>
		<view class="tn-tabbar-height"></view>
	</view>
</template>

<script>
	import {
		onLoad
	} from '../../libs/mixin/template_page_mixin'
	export default {
		data() {
			return {
				videoId: '',
				color: '#fe3157',
				color1: '#ffffff',
				userComment: '',
				height: 800,
				showReport:false,
				reportList:[
					{id:1,
					backgroundColor:'#fffef9',
					title:'谩骂攻击'},
					{id:2,
					backgroundColor:'#fffef9',
					title:'色情低俗'},
					{id:3,
					backgroundColor:'#fffef9',
					title:'网络暴力'},
					{id:4,
					backgroundColor:'#fffef9',
					title:'违法违规'},
					{id:5,
					backgroundColor:'#fffef9',
					title:'政治敏感'},
					{id:6,
					backgroundColor:'#fffef9',
					title:'垃圾广告'},
					{id:7,
					backgroundColor:'#fffef9',
					title:'危害人身安全'},
					{id:8,
					backgroundColor:'#fffef9',
					title:'未成年相关'},
					{id:9,
					backgroundColor:'#fffef9',
					title:'其他'},
					],
				target: '',
				placeholder: '',
				parentId: '',
				commentList: [],
				videoInfo: {},
				commentTotal: 0,
				userId:uni.getStorageSync('userId'),
				videoUserId: '',
				showCommentList: false,
				showSubmitPopup: false,
				showReplyPopup: false,
				ip:'',
				longitude: '', //经度
				latitude: '', //纬度
			}
		},
		watch: {
			userComment(newValue, oldValue) {
				if (newValue.length > 85) {
					this.height = 1000
				}
				if (newValue.length > 100) {
					this.height = 1025
				}
			}
		},
		onShow() {
		 	this.getVideoInfo()
		},
		methods: {
			closeshowReport(){
				for(var i=0;i<this.reportList.length;i++){
					this.reportList[i].backgroundColor="#fffef9"
				}
			},
			selectReports(index){
				if(this.reportList[index].backgroundColor==='#fffef9'){
					this.reportList[index].backgroundColor='#fe3157'
				}else{
					this.reportList[index].backgroundColor='#fffef9'
				}
			},
			goUserHome(userId) {
				uni.navigateTo({
					url: '/searchPages/userHome?userId=' + userId
				})
			},
			//举报评论
			report(){
				this.showReport=true
			},
			submitReport(){
				if (!uni.getStorageSync('token')) {
					uni.navigateTo({
						url: '/pages/login/login?index=1'
					})
					uni.$showMsg('亲，先登录才能举报哦~')
					return
				}
				if(!this.reportList.map(item=>item.backgroundColor).includes('#fe3157')){
					uni.$showMsg('亲，请选择举报原因！')
					return
				}
				uni.showToast({
					title: '感谢您的举报~',
					icon: 'success'
				})
				setTimeout(()=>{
					this.showReport=false
				},1000)
			},
			async sendComment() {
				const saveCommentDTO = {
					content: this.userComment.trim(),
					foreignId: this.videoId,
					longitude: this.longitude,
					latitude: this.latitude
				}
				const {
					data
				} = await uni.$http.post('/video/comments/saveVideoComment', saveCommentDTO)
				if (data.code === 1) {
					this.commentTotal++
					this.loadComment()
					this.showSubmitPopup = false
				} else {
					// uni.navigateTo({
					// 	url: '/pages/login/login?index=1'
					// })
					// uni.showToast({
					// 	title: data.msg,
					// 	icon: 'fail'
					// })
					uni.$showMsg(data.msg)
				}
			},
			async sendReplyComment() {
				const saveCommentDTO = {
					content: this.userComment.trim(),
					foreignId: this.videoId,
					target: this.target,
					parentId: this.parentId,
					longitude: this.longitude,
					latitude: this.latitude
				}
				const {
					data
				} = await uni.$http.post('/video/comments/saveVideoComment', saveCommentDTO)
				if (data.code === 1) {
					this.commentTotal++
					this.loadComment()
					this.showReplyPopup = false
				} else {
					// uni.navigateTo({
					// 	url: '/pages/login/login?index=1'
					// })
					// uni.showToast({
					// 	title: data.msg,
					// 	icon: 'fail'
					// })
					uni.$showMsg(data.msg)
				}
			},
			openSubmitPopup() {

			},
			closeSubmitPopup() {
				this.userComment = ''
				this.height = 700
			},
			closeReplyPopup() {
				this.userComment = ''
				this.height = 700
			},
			//发布评论
			submitComment() {
				this.showSubmitPopup = true
				this.$nextTick(() => {
					this.$refs.textarea.focus()
				})
			},
			//回复别人
			async reply(target, parentId) {
				this.placeholder = '回复 @' + target
				this.$nextTick(() => {
					this.target = target
					this.parentId = parentId
				})
				this.showReplyPopup = true
			},
			//加载最新评论
			async loadComment() {
				const {
					data
				} = await uni.$http.get('/video/comments/getVideoCommentsList/' + this.videoId)
				if (data.code === 1) {
					this.commentList = data.data
				} else {
					uni.$showMsg('获取评论数据失败！')
				}
			},
			handlePublishTimeDesc(createTime) {
				var curTime = new Date();
				var postTime = new Date(createTime);
				var timeDiff = curTime.getTime() - postTime.getTime();

				// 单位换算
				var min = 60 * 1000;
				var hour = min * 60;
				var day = hour * 24;
				var week = day * 7;

				// 计算发布时间距离当前时间的周、天、时、分
				var exceedWeek = Math.floor(timeDiff / week);
				var exceedDay = Math.floor(timeDiff / day);
				var exceedHour = Math.floor(timeDiff / hour);
				var exceedMin = Math.floor(timeDiff / min);

				// 最后判断时间差到底是属于哪个区间，然后return
				if (exceedWeek > 0) {
					return createTime;
				} else {
					if (exceedDay < 7 && exceedDay > 0) {
						return exceedDay + '天前';
					} else {
						if (exceedHour < 24 && exceedHour > 0) {
							return exceedHour + '小时前';
						} else {
							return exceedMin + '分钟前';
						}
					}
				}
			},
			//点赞评论
			async likeComment(commentId, isLike) {
				const {
					data
				} = await uni.$http.put('/video/comments/like/' + commentId)
				if (data.code === 1) {
					if (isLike) {
						this.loadComment()
					} else {
						this.loadComment()
					}
				} else {
					uni.navigateTo({
						url: '/pages/login/login?index=1'
					})
					uni.$showMsg('请先登录后在操作哦！~')
				}
			},
			//关闭后
			closeComment() {
				this.getVideoInfo()
			},
			//查看评论列表
			openComment(videoId, commentTotal, videoUserId) {
				this.$nextTick(() => {
					this.videoId = videoId
					this.videoUserId = videoUserId
				})
				this.showCommentList = true
			},
			async likeVideo(videoId, isLike) {
				const {
					data
				} = await uni.$http.put('/video/like/' + videoId)
				if (data.code === 1) {
					if (isLike) {
						this.getVideoInfo()
						uni.showToast({
							title: '取消点赞成功~',
							icon: 'success',
							duration: 500
						})
					} else {
						this.getVideoInfo()
						uni.showToast({
							title: '点赞成功~',
							icon: 'success',
							duration: 500
						})
					}
				} else {
					uni.navigateTo({
						url: '/pages/login/login?index=1'
					})
					uni.$showMsg('请先登录后在操作哦！~')
				}
			},
			async collectionVideo(videoId, isCollection) {
				const {
					data
				} = await uni.$http.put('/video/collection/' + videoId)
				if (data.code === 1) {
					if (isCollection) {
						this.getVideoInfo()
						uni.showToast({
							title: '取消收藏成功~',
							icon: 'success',
							duration: 600
						})
					} else {
						this.getVideoInfo()
						uni.showToast({
							title: '收藏成功~',
							icon: 'success',
							duration: 600
						})
					}
				} else {
					uni.navigateTo({
						url: '/pages/login/login?index=1'
					})
					uni.$showMsg('请先登录后在操作哦！~')
				}
			},
			goBack() {
				uni.navigateBack()
			},
			async getVideoInfo() {
				const {
					data
				} = await uni.$http.get('/video/getVideoInfo/' + this.videoId)
				if (data.code === 1) {
					this.videoInfo = data.data
					this.commentTotal = data.data.comment
				} else {
					uni.navigateBack()
					uni.$showMsg('视频已被删除啦！')
				}
			}
		},
		created() {
			var _this = this
			uni.getLocation({
				type: 'wgs84',
				altitude: true,
				success: function(res) {
					_this.longitude = res.longitude
					_this.latitude = res.latitude
				}
			});
		},
		onLoad(options) {
			this.videoId = options.videoId
			this.getVideoInfo()
		}
	}
</script>

<style scoped lang="scss">
	.tn-tabbar-height {
		min-height: 120rpx;
		height: calc(100rpx + env(safe-area-inset-bottom) / 2);
	}
</style>