<template>
	<view>
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed :bottomShadow="true" backTitle=" ">
			<view>
				<text class="tn-text-lg">游记详情</text>
				<text class="tn-text-xl tn-padding-left-sm tn-icon-service"></text>
			</view>
		</tn-nav-bar>
		<view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
			<!-- <u-swiper :list="swiperList" indicator indicatorMode="dot" height="540rpx" rcular :autoplay="false"
				:displayMultipleItems="0" imgMode="aspectFit" bgColor="#ffffff"></u-swiper> -->
			<u-swiper :list="swiperList" indicator indicatorMode="dot" height="800rpx" rcular :autoplay="true"
				:displayMultipleItems="0" bgColor="#ffffff" interval="2000" :circular="true"></u-swiper>
		</view>
		<view class="userInfo">
			<view>
				<navigator :url="'/searchPages/userHome?userId='+blogData.userId">
					<image :src="blogData.avatar" class="avatar"></image>
				</navigator>
			</view>
			<view>
				<view>
					<navigator :url="'/searchPages/userHome?userId='+blogData.userId">
						<text>{{ blogData.username }}</text>
					</navigator>
				</view>
				<text class="time">{{ blogData.createTime}} 发布</text>
			</view>
			<view class="btn" v-show="blogData.userId!=loginUserId">
				<u-button color="linear-gradient(to right, #ff6034, #ee0a24)" shape="circle"
					@click="goFollow">{{ isFollow ? '取消关注' : '关注Ta' }}</u-button>
			</view>
		</view>
		<view style="display: flex;" class="tag">
			<u-tag :text="tag" v-for="tag of tagList" shape="circle" :key="tag.id"
				icon="https://cdn.uviewui.com/uview/example/tag.png" bgColor="#fcd912" color="#000000"></u-tag>
		</view>
		<view class="content">
			<text class="u-line-1"
				style="font-weight: 1000;font-size: 20px;margin-bottom: 8px;text-indent: 0.5em;">{{blogData.title}}</text>
			<u-read-more :toggle="true" ref="uReadMore" showHeight="200">
				<u-parse :content="blogData.content" @load="load"></u-parse>
			</u-read-more>
		</view>
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
						<text style="font-size: 12px;margin-left: 13rpx;font-weight: 500;color: black;" @click="report"
							v-if="item.userId!=loginUserId">举报</text>
							<text style="font-size: 12px;margin-left: 13rpx;font-weight: 500;color: red;"
								@click="openDelShow(item.id)" v-if="item.userId==loginUserId">删除</text>
					</view>
				</view>
				<view class="tn-bg-gray--light tn-padding-sm" v-for="children of item.children" :key="children.id"
					style="margin: 20rpx 30rpx 30rpx 80rpx;border-radius: 10rpx;margin-bottom: 10rpx;">
					<tn-avatar :src="children.avatar" backgroundColor="tn-color-white" size="sm"
						@click="goUserHome(children.userId)" border borderColor="#2b7dcb" shape="square"></tn-avatar>
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
		
		<view style="height: 200rpx;"></view>
		<view>
			<u-modal :show="delShow" @confirm="delComment" :asyncClose="true" title="确定删除评论？" :showCancelButton="true"
				@cancel="delShow=false"></u-modal>
		</view>
		<view>
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
		</view>
		<view style="border-radius: 30%;">
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
		</view>
		<view style="position: fixed;bottom: 0rpx;left: 0rpx;">
			<u-tabbar :placeholder="false" activeColor="#EE0A24" :value="selected">
				<view @click="publishComment" style="margin-top: 8rpx;margin-left: 10rpx;">
					<u--input placeholder="谈谈你的感受吧..." border="surround" shape="circle" :disabled="true"
						disabledColor="#fff"></u--input>
				</view>
				<u-tabbar-item :text="blogData.liked" icon="thumb-up" @click="goLiked"></u-tabbar-item>
				<u-tabbar-item :text="commentCount" icon="chat"></u-tabbar-item>
				<u-tabbar-item :text="browse>10000?1+'w+':browse" icon="eye"></u-tabbar-item>
			</u-tabbar>
		</view>
	</view>

</template>

<script>
	import NavIndexButton from '@/libs/components/nav-index-button.vue'
	export default {
		name: 'Blog',
		components: {
			NavIndexButton
		},
		data() {
			return {
				showChildrenComment: false,
				blogData: '',
				backgroundColor: '#90d7ec',
				placeholder: '亲,请输入你想说的吧...',
				delShow: false,
				showReport: false,
				swiperList: [],
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
				tagList: '', //标签集合
				commentsList: '', //评论列表
				blogUserId: '', //博主ID
				uId: '', //博主ID	
				commentCount: 0, //评论数量
				liked: false, //是否点赞过
				isFollow: false, //是否关注博主
				show: false, //遮罩层
				userId: '', //当前登录用户ID
				browse: 0, //当前博客浏览量
				comment: '', //顶级评论
				commentsForm: {}, //评论表单
				selected: 0, //点赞状态
				publishTimeDesc: '', //发布时间描述
				delId: 0, //删除评论的ID
				bId: '', //博客ID
				longitude: '', //经度
				latitude: '', //纬度
				id: ''
			}
		},
		onShow() {
			this.queryBlogById()
			this.getComments()
			this.getBlogUserId()
		},
		methods: {
			load() {
				this.$refs.uReadMore.init();
			},
			openChildrenComment() {
				if (this.showChildrenComment === false) {
					this.showChildrenComment = true
				} else {
					this.showChildrenComment = false
				}
			},
			rightClick() {
				uni.navigateBack();
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
			goUserHome(userId) {
				uni.navigateTo({
					url: '/searchPages/userHome?userId=' + userId
				})
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
			closeShow() {
				this.placeholder = '亲,请输入你想说的吧...'
				this.show = false
				this.comment = ''
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
			//删除评论
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

			async queryBlogById() {
				const {
					data
				} = await uni.$http.get('/blog/queryBlogById?id=' + this.bId)
				if (data.code === 1) {
					data.data.isLike ? this.selected = 0 : this.selected = 3
					this.swiperList = data.data.images.split(',')
					this.tagList = data.data.tag.split(',')
					this.liked = data.data.isLike
					this.blogUserId = data.data.userId
					this.isFollowed()
					this.blogData = data.data
				} else {
					return uni.$showMsg()
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
				} = await uni.$http.get('/blog/queryBrowse?blogId=' + this.bId + '&id=' + this.id)
				this.browse = data.data.browse.toString()
			},

			async getComments() {
				const {
					data
				} = await uni.$http.get('/comments/getComments?foreignId=' + this.bId)
				if (data.code === 1) {
					this.commentCount = data.data.count.toString()
					this.commentsList = data.data.comments
					this.commentsList.createTime = this.handlePublishTimeDesc(data.data.comments.createTime)
				} else {
					return uni.$showMsg()
				}
			},
			goSee(userId) {
				uni.navigateTo({
					url: "/searchPages/userHome?userId=" + userId
				})
			},
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
							title: this.isFollow ? "已取消关注" : "关注成功"
						})
						this.isFollow = !this.isFollow
						this.queryBlogById()
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
				} = await uni.$http.put("/blog/like?id=" + this.bId)
				if (data.code === 1) {
					this.queryBlogById()
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
					foreignId: this.bId,
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
					foreignId: this.bId,
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
				} else {
					
					uni.$showMsg(data.msg)
				}
			},

			async getBlogUserId() {
				const {
					data
				} = await uni.$http.get('/blog/getBlogUserId?blogId=' + this.bId)
				if (data.code === 1) {
					this.uId = data.data.userId
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
			this.bId = options.blogId
			uni.startPullDownRefresh()
			this.queryBlogById()
			this.getComments()
			this.getBlogUserId()
			this.queryBrowse()
			this.loginUserId = uni.getStorageSync('userId')
		},
		onPullDownRefresh() {
			setTimeout(() => {
				this.queryBlogById()
				this.getComments()
				this.getBlogUserId()
				uni.stopPullDownRefresh();
			}, 1200)
		}
	}
</script>

<style lang="scss" scoped>
	.userInfo {
		display: flex;
		margin-top: 8px;
		margin-bottom: -15px;

		.btn {
			width: 140px;
			margin-top: 5px;
			padding-left: 90rpx;

		}

		.tn-tabbar-height {
			min-height: 120rpx;
			height: calc(100rpx + env(safe-area-inset-bottom) / 2);
		}

		text {
			font-size: 18px;
			color: #009ad6;
			margin-left: 5px;
			margin-top: 5px;
		}

		.time {
			font-size: 12px;
			color: #939393;
			margin-left: 5px;
		}

		.avatar {
			width: 50px;
			height: 50px;
			border-radius: 50%;
			margin-left: 5px;
			margin-top: -2px;
		}
	}

	.tag {
		margin-top: 20px;
	}

	::v-deep .u-tag--medium.data-v-2fd891bb {
		margin-left: 2px !important;
	}

	.content {
		margin-top: 8px;
	}

	.comment {}

	::v-deep .u-tabbar-item.data-v-e01cdc2c {
		flex: none !important;
		width: 60px !important;
	}

	::v-deep .u-icon__icon.data-v-ac70166d.uicon-search {
		font-size: 0px !important;
	}

	::v-deep .u-tag--primary.data-v-1481d46d {
		border-color: #fff !important;
	}

	::v-deep .u-search__content__input.data-v-e082a34a {
		flex: none !important;
	}

	::v-deep .u-text__value.data-v-0a574502 {
		margin-right: 16rpx;
	}

	::v-deep .u-text__value.data-v-15831087 {
		padding-right: 10rpx;
	}

	.item {
		display: flex;
		border-bottom: 1px solid #e6e6e8;
		margin-top: 5px;

		.btn {
			position: relative;
			top: 0rpx;
			left: 20rpx;

		}

		.avatar {
			width: 45px;
			height: 45px;
			vertical-align: middle;
			border-radius: 50%;
			display: flex;
		}

		.content {
			font-size: 15px;
			color: #333333;
			font-weight: 400;
			margin-left: 5px;
			margin-bottom: 20rpx;
			width: 400rpx;
		}

		.username {
			margin-right: 6rpx;
			color: #EE0A24;
			font-size: 16px;
			margin-left: 5px;
		}

		.time {
			font-size: 15px;
			color: #939393;
			margin-left: 5px;
		}
	}

	.sub {
		margin-top: 5rpx;

		.content {
			margin-left: 5px;
		}

		.time {
			font-size: 14px;
			color: #939393;
			margin-left: 5px;
			float: left;
			font-weight: 800;
			margin-bottom: 10rpx;
			margin-top: 5rpx;
		}

		.ava {
			width: 25px;
			height: 25px;
			border-radius: 50%;
			margin-right: 5px;
			vertical-align: middle;
		}

		text {
			font-size: 15px;
		}
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
</style>