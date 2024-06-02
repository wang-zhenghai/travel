<template>
	<view>
		<view class="tn-navbg" :style="{height: vuex_custom_bar_height + 'px'}">
			<!-- 顶部自定义导航 -->
			<tn-nav-bar fixed alpha customBack>
				<view slot="back" class='tn-custom-nav-bar__back' @click="cancle">
					<text class='icon tn-icon-left-arrow'></text>
				</view>
				<text class="u-line-1">攻略详情</text>
			</tn-nav-bar>
		</view>
		<view class="article-title" :style="{paddingTop: vuex_custom_bar_height + 'px'}">{{articleInfo.title}}</view>
		<uni-list :border="false">
			<uni-list-item thumbSize="lg" :thumb="articleInfo.avatar" @tap="goUserHome(articleInfo.userId)">
				<!-- 通过body插槽定义作者信息内容 -->
				<template v-slot:body>
					<view class="header-content">
						<view class="uni-title">
							<text
								style="margin-top: 6rpx;font-size: 30rpx;margin-right: 8rpx;">{{articleInfo.username}}</text>
							<u-tag text="站长" size="mini" bgColor="#ba21a8" v-if="articleInfo.userId===1"></u-tag>
						</view>
						<view class="uni-note">更新于 {{articleInfo.createTime}} </view>
					</view>
				</template>
				<template v-slot:footer>
					<view class="footer" v-if="articleInfo.userId!==loginUserId">
						<button class="footer-button" :style="{backgroundColor:isFollow?'#ff0000':'#3c9cff'}" @click="goFollow">{{ isFollow ? '取消关注' : '关注' }}</button>
					</view>
				</template>
			</uni-list-item>
		</uni-list>
		<view class="article-content">
			<u-parse :content="articleInfo.content"></u-parse>
		</view>
		<view style="position: relative;bottom: 50rpx;">
			<view class="comment">
				<u-divider text="评论列表" textColor="#2979ff" lineColor="#ff0000"></u-divider>
				<view v-if="commentsList.length===0" style="margin-top: 50rpx;">
					<tn-empty mode="comment"></tn-empty>
				</view>
				<view class="tn-margin" v-for="item of commentsList" :key="item.id"
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
										<view style="margin-left: 6rpx;" v-if="item.userId===blogData.userId">
											<tn-tag backgroundColor="#ff007f" fontColor="#FFF" size="sm" width="100%"
												shape="circleLeft">作者</tn-tag>
										</view>
									</view>
								</view>
							</view>
						</view>
						<view class="justify-content-item tn-flex-row-center tn-flex-col-center tn-color-gray">
							<view class="tn-text-center">
								<text class="tn-icon-like-fill tn-padding-xs" :style="{color:item.isLike?'#fe3157':''}"
									@click="likeComment(item.id,item.isLike)"></text>
							</view>
							<view class="tn-text-center">
								<text class="tn-text-xs" @click="likeComment(item.id,item.isLike)">{{item.liked}}</text>
							</view>
						</view>
					</view>
					<view class="" style="margin: 20rpx 20rpx 20rpx 80rpx;">
						{{item.content}}
						<view class="justify-content-item tn-text-xs tn-color-gray" style="margin-top: 12rpx;">
							{{handlePublishTimeDesc(item.createTime)}}<text
								style="font-size: 12px;margin-left: 22rpx;font-weight: 700;">· {{item.province}}</text>
							<text style="font-size: 12px;margin-left: 22rpx;font-weight: 500;color: black;"
								@click="reply(item.username,item.id)">回复</text>
							<text style="font-size: 12px;margin-left: 13rpx;font-weight: 500;color: black;"
								@click="report" v-if="item.userId!=loginUserId">举报</text>
							<text style="font-size: 12px;margin-left: 13rpx;font-weight: 500;color: red;"
								@click="openDelShow(item.id)" v-if="item.userId==loginUserId">删除</text>
						</view>
					</view>
					<view class="tn-bg-gray--light tn-padding-sm" v-for="children of item.children" :key="children.id"
						style="margin: 20rpx 30rpx 30rpx 80rpx;border-radius: 10rpx;margin-bottom: 10rpx;">
						<tn-avatar :src="children.avatar" backgroundColor="tn-color-white" size="sm"
							@click="goUserHome(children.userId)" border borderColor="#2b7dcb"
							shape="square"></tn-avatar>
						<text style="color: deepskyblue;font-size: 14px;margin-left: 8rpx;margin-right: 8rpx;"
							@click="goUserHome(children.userId)">{{children.username}}</text>
						<tn-tag backgroundColor="#ff007f" fontColor="#FFF" size="sm" width="80rpx" shape="circleLeft"
							v-if="children.userId===blogData.userId">作者</tn-tag>
						<text class="tn-text-bold tn-padding-right-xs"
							style="margin-left: 8rpx;">回复{{children.target}}:</text>
						<text style="line-height: 40rpx;">{{children.content}}</text>
						<view class="tn-flex tn-flex-row-between tn-margin-top-xs">
							<view class="justify-content-item tn-text-xs tn-color-gray" style="padding-top: 5rpx;">
								{{handlePublishTimeDesc(children.createTime)}}<text
									style="font-size: 12px;margin-left: 22rpx;font-weight: 700;">·{{children.province}}</text>
								<text style="font-size: 12px;margin-left: 22rpx;font-weight: 500;color: black;"
									@click="reply(children.username,item.id)">回复</text>
								<text style="font-size: 12px;margin-left: 13rpx;font-weight: 500;color: black;"
									@click="report" v-if="children.userId!=loginUserId">举报</text>
								<text style="font-size: 12px;margin-left: 13rpx;font-weight: 500;color: red;"
									@click="openDelShow(children.id)" v-if="children.userId==loginUserId">删除</text>
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
			</view>
		</view>
		<view>
			<u-modal :show="delShow" @confirm="delComment" :asyncClose="true" title="确定删除评论？" :showCancelButton="true"
				@cancel="delShow=false" negativeTop="200"></u-modal>
		</view>
		<u-overlay :show="show">
			<view class="warp">
				<view class="rect" @tap.stop>
					<u--textarea v-model="comment" :placeholder="placeholder" height="200"></u--textarea>
					<view style="display: flex;">
						<u-button type="error" :plain="true" text="取消" @click="closeShow"></u-button>
						<u-button type="primary" :plain="true" text="发表" @click="saveReply"></u-button>
					</view>
				</view>
			</view>
		</u-overlay>
		<tn-popup v-model="showReport" mode="bottom" height="550rpx" width="750rpx" closeBtn borderRadius="30"
			@close="closeshowReport">
			<view style="margin-top: 22rpx;font-weight: 700;margin-left: 20rpx;margin-bottom: 28rpx;">评论举报</view>
			<u-line></u-line>
			<view style="margin-top: 18rpx;margin-left: 20rpx;">
				<text style="margin-right: 8rpx;font-size: 600;">举报原因</text>
				<text style="color: red;margin-top: 30rpx;font-size: 22rpx;">*</text>
			</view>
			<view style="margin-top: 10rpx;display: flex;flex-wrap: wrap;">
				<view v-for="item of reportList" :key="item.id" style="padding: 20rpx;">
					<tn-tag :backgroundColor="item.backgroundColor" fontColor="#080808" width="200rpx"
						@click="selectReports(item.id-1)">{{item.title}}</tn-tag>
				</view>
			</view>
			<view
				class="footerfixed dd-glass tn-padding-left-sm tn-padding-right tn-padding-top-xs tn-padding-bottom-sm">
				<tn-button backgroundColor="tn-bg-red" fontColor="tn-color-white" width="100%"
					@click="submitReport">提交</tn-button>
			</view>
		</tn-popup>
		<view class="tabbar footerfixed tn-bg-white">
			<view class="tn-flex tn-flex-row-between tn-flex-col-center">
				<view class="justify-content-item tn-margin-top">
					<view class="tn-flex tn-flex-row-center tn-flex-col-center">
						<view class="tn-flex tn-flex-row-center tn-flex-col-center tn-padding-right tn-padding-left-sm">
						</view>
						<view
							class="topic__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left ">
							<view class="topic__info__item__input__content" style="width: 440rpx;"
								@click="publishComment">
								<u--input placeholder="说点什么吧..." maxlength="60" shape="circle" :cursor-spacing="18"
									disabled></u--input>
							</view>
						</view>
					</view>
				</view>
				<view
					class="justify-content-item tn-flex-row-center tn-flex-col-center tn-margin-top tn-margin-right-xs">
					<view style="display: flex;">
						<view style="display: flex;flex-direction: column;align-items: center;margin-right: 12rpx;">
							<view><u-icon name="thumb-up" size="22" @click="goLiked"
									:color="blogData.isLike?'#fa3534':''"></u-icon></view>
							<view><text>{{blogData.liked>1000?1+'k+':blogData.liked}}</text></view>
						</view>
						<view style="display: flex;flex-direction: column;margin-left: 16rpx;align-items: center;">
							<view><u-icon name="chat" size="22"></u-icon></view>
							<view><text>{{commentCount>1000?1+'k+':commentCount}}</text></view>
						</view>
						<view style="display: flex;flex-direction: column;margin-left: 16rpx;align-items: center;">
							<view><u-icon name="eye" size="22"></u-icon></view>
							<view><text>{{browse>10000?1+'w+':browse}}</text></view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class='tn-tabbar-height'></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: '',
				articleInfo: '',
				show: false,
				delShow: false,
				strategyId: '',
				commentCount: 0, //评论数量
				commentsList: [],
				liked: false, //是否点赞过
				blogData: '',
				browse: 0,
				id: 0,
				reportList: [{
						id: 1,
						backgroundColor: '#fffef9',
						title: '谩骂攻击'
					},
					{
						id: 2,
						backgroundColor: '#fffef9',
						title: '色情低俗'
					},
					{
						id: 3,
						backgroundColor: '#fffef9',
						title: '网络暴力'
					},
					{
						id: 4,
						backgroundColor: '#fffef9',
						title: '违法违规'
					},
					{
						id: 5,
						backgroundColor: '#fffef9',
						title: '政治敏感'
					},
					{
						id: 6,
						backgroundColor: '#fffef9',
						title: '垃圾广告'
					},
					{
						id: 7,
						backgroundColor: '#fffef9',
						title: '危害人身安全'
					},
					{
						id: 8,
						backgroundColor: '#fffef9',
						title: '未成年相关'
					},
					{
						id: 9,
						backgroundColor: '#fffef9',
						title: '其他'
					},
				],
				loginUserId: '',
				placeholder: '请输入你想说的吧...',
				longitude: '',
				delId: '',
				latitude: '',
				comment: '', //顶级评论
				commentsForm: {}, //评论表单
				showReport: false,
				isFollow: false,
				blogUserId:'',
			}
		},
		created() {
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
			this.strategyId = options.id
			this.getStrategy(options.id)
			this.getComments()
			this.queryBrowse()
			this.loginUserId = uni.getStorageSync('userId')
		},
		methods: {
			async goFollow() {
				if (!uni.getStorageSync('token')) {
					uni.navigateTo({
						url: '/pages/login/login?index=1'
					})
					uni.$showMsg('亲，先登录哦~')
					return
				}
				uni.$http.put("/follow/" + this.blogUserId + "/" + !this.isFollow)
					.then(() => {
						uni.showToast({
							title: this.isFollow ? "已取消关注" : "关注成功",
							duration:3000
						})
						this.isFollow = !this.isFollow
						setTimeout(()=>{
							this.isFollowed()
						},1200)
					})
			},
			async isFollowed() {
				const {
					data
				} = await uni.$http.get('/follow/or/not?followUserId=' + this.blogUserId)
				if (data.code === 1) {
					this.isFollow = data.data
				} else {
					return uni.$showMsg()
				}
			},
			async goLiked() {
				if (!uni.getStorageSync('token')) {
					uni.navigateTo({
						url: '/pages/login/login?index=1'
					})
					uni.$showMsg('亲，先登录哦~')
					return
				}
				const {
					data
				} = await uni.$http.put("/blog/like?id=" + this.strategyId)
				if (data.code === 1) {
					this.getStrategy()
					uni.showToast({
						title: this.liked ? '取消点赞成功~' : '点赞成功~',
						icon: 'success',
						duration: 1500
					})
				} else {
					uni.showToast({
						title: '点赞失败~',
						icon: 'error'
					})
				}
			},
			openDelShow(id) {
				this.delId = id
				this.delShow = true
			},

			async delComment() {
				const {
					data
				} = await uni.$http.delete('/comments/delComment?commentId=' + this.delId)
				if (data.code === 1) {
					this.getComments()
					uni.showToast({
						title: '删除评论成功',
						icon: 'success'
					})
					this.delShow = false
				} else {
					uni.showToast({
						title: '删除评论失败',
						icon: 'error'
					})
				}
			},
			reply(target, pId) {
				if (!uni.getStorageSync('token')) {
					uni.navigateTo({
						url: '/pages/login/login?index=1'
					})
					uni.$showMsg('亲，先登录哦~')
					return
				}
				this.placeholder = '回复 @' + target
				this.commentsForm = {
					content: this.comment,
					foreignId: this.strategyId,
					target: target,
					parentId: pId,
					longitude: this.longitude,
					latitude: this.latitude
				}
				this.show = true
			},
			async publishComment() {
				if (!uni.getStorageSync('token')) {
					uni.navigateTo({
						url: '/pages/login/login?index=1'
					})
					uni.$showMsg('亲，先登录哦~')
					return
				}
				this.commentsForm = {
					content: this.comment,
					foreignId: this.strategyId,
					longitude: this.longitude,
					latitude: this.latitude
				}
				this.show = true
			},
			async saveReply() {
				if (this.comment === '') {
					uni.showToast({
						title: '亲，请输入评论内容~',
						icon: 'error'
					})
					return
				}
				this.commentsForm.content = this.comment
				const {
					data
				} = await uni.$http.post('/comments/save', this.commentsForm)
				if (data.code === 1) {
					uni.showToast({
						title: '回复成功~',
						icon: 'success'
					})
					this.show = false
					this.comment = ''
					this.getComments()
					uni.$showMsg('评论成功~')
				} else {
					uni.$showMsg(data.msg)
				}
			},
			async queryBrowse() {
				if (!uni.getStorageSync('userId')) {
					this.id = 0
				} else {
					this.id = uni.getStorageSync('userId')
				}
				const {
					data
				} = await uni.$http.get('/blog/queryBrowse?blogId=' + this.strategyId + '&id=' + this.id)
				this.browse = data.data.browse.toString()
			},

			closeShow() {
				this.placeholder = '亲,请输入你想说的吧...'
				this.show = false
				this.comment = ''
			},
			goUserHome(userId) {
				uni.navigateTo({
					url: '/searchPages/userHome?userId=' + userId
				})
			},
			closeshowReport() {
				for (var i = 0; i < this.reportList.length; i++) {
					this.reportList[i].backgroundColor = "#fffef9"
				}
			},
			selectReports(index) {
				if (this.reportList[index].backgroundColor === '#fffef9') {
					this.reportList[index].backgroundColor = '#fe3157'
				} else {
					this.reportList[index].backgroundColor = '#fffef9'
				}
			},
			submitReport() {
				if (!uni.getStorageSync('token')) {
					uni.navigateTo({
						url: '/pages/login/login?index=1'
					})
					uni.$showMsg('亲，先登录才能举报哦~')
					return
				}
				if (!this.reportList.map(item => item.backgroundColor).includes('#fe3157')) {
					uni.$showMsg('亲，请选择举报原因！')
					return
				}
				uni.showToast({
					title: '感谢您的举报~',
					icon: 'success'
				})
				setTimeout(() => {
					this.showReport = false
				}, 1000)
			},
			//举报评论
			report() {
				this.showReport = true
			},
			//点赞评论
			async likeComment(commentId, isLike) {
				const {
					data
				} = await uni.$http.put('/comments/likeComment/' + commentId)
				if (data.code === 1) {
					if (isLike) {
						this.getComments()
					} else {
						this.getComments()
					}
				} else {
					uni.navigateTo({
						url: '/pages/login/login?index=1'
					})
					uni.$showMsg('请先登录后在操作哦！~')
				}
			},
			async getComments() {
				const {
					data
				} = await uni.$http.get('/comments/getComments?foreignId=' + this.strategyId)
				if (data.code === 1) {
					this.commentsList = data.data.comments
					this.commentCount = data.data.count.toString()
					this.commentsList.createTime = this.handlePublishTimeDesc(data.data.comments.createTime)
				} else {
					return uni.$showMsg()
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
			async getStrategy(id) {
				const {
					data
				} = await uni.$http.get('/blog/queryBlogById?id=' + this.strategyId)
				if (data.code === 1) {
					this.articleInfo = data.data
					this.blogData = data.data
					this.blogUserId = data.data.userId
					this.liked = data.data.isLike
					this.isFollowed()
				}
			},
			cancle() {
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss" scoped>
	::v-deep .u-tabbar-item.data-v-b8fe2b06 {
		margin-right: -30rpx;
	}

	.u-content {
		padding: 24rpx;
	}

	.warp {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 500rpx;
	}

	.rect {
		width: 100%;
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

	.footerfixed {
		position: fixed;
		width: 100%;
		bottom: 0;
		z-index: 999;
		background-color: rgba(255, 255, 255, 0.5);
		box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
	}

	.tabbar {
		align-items: center;
		min-height: 102rpx;
		padding: 0;
		height: calc(102rpx + env(safe-area-inset-bottom) / 2);
		padding-bottom: calc(30rpx + env(safe-area-inset-bottom) / 2);
		padding-left: 10rpx;
		padding-right: 10rpx;
	}

	.tn-tabbar-height {
		min-height: 80rpx;
		height: calc(80rpx + env(safe-area-inset-bottom) / 2);
	}

	.header-content {
		flex: 1;
		display: flex;
		flex-direction: column;
		font-size: 14px;
	}

	/* 标题 */
	.uni-title {
		display: flex;
		margin-bottom: 5px;
		font-size: 14px;
		color: #3b4144;
	}

	/* 描述 额外文本 */
	.uni-note {
		color: #999;
		font-size: 12px;
	}

	.footer {
		display: flex;
		align-items: center;
	}

	.footer-button {
		display: flex;
		align-items: center;
		font-size: 12px;
		height: 30px;
		color: #fff;
	}

	.banner {
		position: relative;
		margin: 0 15px;
		height: 180px;
		overflow: hidden;
	}

	.banner-img {
		position: absolute;
		width: 100%;
	}

	.banner-title {
		display: flex;
		align-items: center;
		position: absolute;
		padding: 0 15px;
		width: 100%;
		bottom: 0;
		height: 30px;
		font-size: 14px;
		color: #fff;
		background: rgba(0, 0, 0, 0.4);
		overflow: hidden;
		box-sizing: border-box;
	}

	.uni-ellipsis {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.article-title {
		padding: 20px 15px;
		margin-top: 16rpx;
		padding-bottom: 0;
		font-size: 36rpx;
		line-height: 60rpx;
	}

	.article-content {
		padding: 10px;
		font-size: 15px;
		overflow: hidden;
	}
</style>