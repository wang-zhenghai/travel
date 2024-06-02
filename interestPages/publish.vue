<template>
	<view class="template-preferred tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed :bottomShadow="true" backTitle=" ">
			<view>
				<text class="tn-text-lg">我的发布</text>
				<text class="tn-text-xl tn-padding-left-sm tn-icon-share"></text>
			</view>
		</tn-nav-bar>
		<view class="" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
			<view class="" style="width: 78vw;overflow: hidden;">
				<tn-tabs :list="scrollList" :current="current" @change="tabChange" activeColor="#000" :bold="true"
					:isScroll="false" :fontSize="36" :gutter="100"></tn-tabs>
			</view>
			<view style="margin-top: 10rpx;" v-if="current==0">
				<view v-show="blogList.length==0">
					<tn-empty mode="list"></tn-empty>
				</view>
				<view class="u-page">
					<view class="u-demo-block">
						<view class="u-demo-block__content">
							<view class="album" v-for="item of blogList" :key="item.id">
								<view class="album__avatar">
									<image :src="avatar" style="width: 50px;height: 50px;">
									</image>
								</view>
								<view class="album__content">
									<navigator :url="'/minePages/blog/blog?blogId='+item.id">
										<u--text :text="username" type="primary" bold size="17"></u--text>
									</navigator>
									<navigator :url="'/minePages/blog/blog?blogId='+item.id">
										<u--text margin="0 0 8px 0" :text="item.title"></u--text>
									</navigator>
									<u-album :urls="item.images" multipleSize="90" singleSize="100"></u-album>
									<view style="margin-top: 15rpx;"><u--text
											:text="handlePublishTimeDesc(item.createTime)" size="15"></u--text></view>
									<view style="display: flex;margin-top: 6rpx;margin-bottom: 10rpx;">
										<u-icon name="thumb-up" size="20" color="#ff0000"></u-icon>
										<text style="margin-right: 10rpx;margin-top: 5rpx;">{{item.liked}}</text>
										<text class="tn-icon-more-horizontal"
											style="position: absolute;right: 42rpx;font-size: 30px;background-color: #eae8e7;line-height: 40rpx;"
											@click="openShow(item)"></text>
									</view>
								</view>
							</view>
							<view>
								<tn-action-sheet :borderRadius="30" :safeAreaInsetBottomsafeAreaInsetBottom="true"
									v-model="actionShow" :list="list" @click="click"></tn-action-sheet>
								<u-modal :show="deleteShow" title="亲,确定要删除这篇游记吗?" @confirm="deleteById"
									:asyncClose="true" :showCancelButton="true" @cancel="deleteShow=false"
									cancelColor="#ff0000" confirmColor="#4c99fe"></u-modal>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 2-->
		<view v-if="current==2" style="margin-top: 10rpx;">
			<view v-show="videoList.length==0" style="margin-top: 50rpx;">
				<tn-empty mode="list"></tn-empty>
			</view>
			<view class="container">
				<view @click="seeVideoById(item.id)" class="list" style="position: relative;" v-for="item of videoList"
					:key="item.id">
					<video :src="item.url" :autoplay="false" :show-center-play-btn="false" :show-fullscreen-btn="false"
						object-fit="fill" style="width: 222rpx;height: 400rpx;" :show-play-btn="false"
						:poster="item.url+'?x-oss-process=video/snapshot,t_1000,f_jpg'" controls></video>
					<view style="position: absolute;left: 42rpx;bottom: 14rpx;">
						<text class="tn-icon-like" style="font-size: 17px;color: #fff;margin-left: 8rpx;"></text>
						<text style="font-size: 13px;color: #FFF;margin-left: 8rpx;" v-if="item.liked<1">赞</text>
						<text style="font-size: 13px;color: #FFF;margin-left: 8rpx;"
							v-if="item.liked>0&&item.liked<9999">{{item.liked}}</text>
						<text style="font-size: 13px;color: #FFF;margin-left: 8rpx;"
							v-if="item.liked>9999&&item.liked<99999">{{(Math.floor(item.liked/1000)/10) + '万'}}</text>
						<text style="font-size: 13px;color: #FFF;margin-left: 8rpx;"
							v-if="item.liked>99999">{{(Math.floor(item.liked/1000)/10) + '万'}}</text>
					</view>
				</view>
			</view>
		</view>
		<view v-if="current===1">
			<view v-show="strategyList.length==0" style="margin-top: 50rpx;">
				<tn-empty mode="list"></tn-empty>
			</view>
			<view class="uni-list">
			    <view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value,key) in strategyList" :key="key"
			        @click="goDetail(value.id)">
			        <view class="uni-media-list">
			            <image class="uni-media-list-logo" :src="value.images"></image>
			            <view class="uni-media-list-body">
			                <view class="uni-media-list-text-top u-line-2">{{value.title}}</view>
			                <view class="uni-media-list-text-bottom">
			                    <text>{{value.username}}</text>
			                    <text>{{value.createTime}}</text>
			                </view>
			            </view>
			        </view>
			    </view>
			</view>
		</view>
		<!-- 3-->
		<view v-if="current==3">
			<view v-show="activityList.length==0" style="margin-top: 50rpx;">
				<tn-empty mode="list"></tn-empty>
			</view>
			<view class="">
				<view class="tn-flex tn-flex-direction-column tn-margin-top-sm tn-margin-bottom">
					<view class="tn-margin-bottom-lg">
						<block v-for="(item,index) in activityList" :key="index">
							<view class="blogger__item">
								<view class="blogger__author tn-flex tn-flex-row-between tn-flex-col-center">
									<view class="justify__author__info">
										<view class="tn-flex tn-flex-row-center">
											<view class="tn-flex tn-flex-row-center tn-flex-col-center">
												<view class="">
													<tn-avatar class="" shape="circle" :src="item.userAvatar"
														size="lg"></tn-avatar>
												</view>
												<view class="tn-padding-right tn-text-ellipsis">
													<view
														class="tn-padding-right tn-padding-left-sm tn-text-bold tn-text-lg">
														{{ item.username }}
													</view>
													<view
														class="tn-padding-right tn-padding-left-sm tn-padding-top-xs tn-color-gray">
														{{ handlePublishTimeDesc(item.createTime) }}发布
													</view>
												</view>
											</view>
										</view>
									</view>
									<view @click="openShowActivity(item)"
										class="blogger__author__btn justify-content-item tn-flex-col-center tn-flex-row-center">
										<text class="tn-icon-delete tn-color-gray tn-text-bold tn-text-xxl"></text>
									</view>
								</view>
								<view>
									<u-modal :show="showDeleteShowActivity" title="确定要删除你发布这个活动吗?"
										@confirm="deleteActivityId" :asyncClose="true" :showCancelButton="true"
										@cancel="showDeleteShowActivity=false" cancelColor="#ff0000"
										confirmColor="#4c99fe"></u-modal>
								</view>
								<view
									class="blogger__desc tn-margin-top-sm tn-margin-bottom-sm tn-text-justify tn-flex-col-center tn-flex-row-left"
									@click="tn('/circlePages/reserve?id='+item.id)">
									<text style="font-weight: 800;margin-left: 5rpx;margin-top: -20rpx;"
										class="text-show">{{ item.activityTitle }}</text>
									<view>
										<view style="display: flex;align-items: center;font-weight: 540;"><text
												class="tn-icon-time-fill"
												style="color: green;font-size: 30rpx;margin-right: 6rpx;"></text>结伴时间:
											{{item.activityTime}}
										</view>
										<view style="display: flex;align-items: center;font-weight: 540;"><text
												class="tn-icon-location-fill"
												style="color: green;font-size: 34rpx;"></text>结伴地点:
											{{item.activityAddress}}
										</view>
										<view style="display: flex;align-items: center;font-weight: 540;"><text
												class="tn-icon-flower-fill"
												style="color: green;font-size: 34rpx;margin-right: 2rpx;"></text>希望结伴:
											{{item.wishCount}}人
										</view>
									</view>
								</view>
								<!-- 不用限制长度了，因为发布的时候限制长度了-->
								<block v-if="item.mainImage">
									<view v-if="[1,2,4].indexOf(item.mainImage.length) != -1" class="tn-padding-top-xs"
										@click="tn('/circlePages/reserve?id='+item.id)">
										<image v-for="(image_item,image_index) in item.mainImage" :key="image_index"
											class="blogger__main-image" :class="{
				            'blogger__main-image--1 tn-margin-bottom-sm': item.mainImage.length === 1,
				            'blogger__main-image--2 tn-margin-right-sm tn-margin-bottom-sm': item.mainImage.length === 2 || item.mainImage.length === 4
				          }" :src="image_item" mode="aspectFill"></image>
									</view>
									<view v-else class="tn-padding-top-xs"
										@click="tn('/circlePages/reserve?id='+item.id)">
										<tn-grid hoverClass="none" :col="3">
											<block v-for="(image_item,image_index) in item.mainImage"
												:key="image_index">
												<!-- #ifndef MP-WEIXIN -->
												<tn-grid-item style="width: 30%;margin: 10rpx;">
													<image class="blogger__main-image blogger__main-image--3"
														:src="image_item" mode="aspectFill"></image>
												</tn-grid-item>
												<!-- #endif-->
												<!-- #ifdef MP-WEIXIN -->
												<tn-grid-item style="width: 30%;margin: 10rpx;">
													<image class="blogger__main-image blogger__main-image--3"
														:src="image_item" mode="aspectFill"></image>
												</tn-grid-item>
												<!-- #endif-->
											</block>
										</tn-grid>
									</view>
								</block>
								<view class="justify-content-item tn-text-center tn-flex" style="margin-left: 6rpx;"
									@click="tn('/circlePages/reserve?id='+item.id)">
									<text class="tn-padding-xs">{{item.joinCount}} 人已参与</text>
								</view>
							</view>
						</block>
					</view>
					<view class='tn-tabbar-height'></view>
				</view>
			</view>
		</view>
		<view class='tn-tabbar-height'></view>
	</view>
</template>

<script>
	 var dateUtils = require('@/utils/util.js').dateUtils;
	export default {
		name: 'Preferred',
		data() {
			return {
				cardCur: 0,
				userId: '',
				username: '',
				strategyList:[],
				avatar: '',
				deleteShow: false,
				deleteId: '',
				editId: '',
				showDeleteShowActivity: false,
				activityId: '',
				blogList: [],
				videoList: [],
				list: [ {
					color: 'red',
					text: '删除',
					fontSize: 28,
				}],
				actionShow: false,
				activityList: [],
				current: 0,
				scrollList: [{
						name: '游记',
						count: ''
					},
					{
						name: '攻略',
						count: ''
					},
					{
						name: '视频',
						count: ''
					},
					{
						name: '结伴',
						count: ''
					},
				],
			}
		},
		onLoad() {
			this.userId = uni.getStorageSync('userId')
			this.$nextTick(() => {
				this.queryBlogAll();
				this.searchStrategy();
				this.getUserInfo();
				this.getActivityList();
			})
		},
		methods: {
			openShowActivity(item) {
				this.showDeleteShowActivity = true
				this.$nextTick(() => {
					this.activityId = item.id
				})
			},
			async deleteActivityId() {
				const {
					data
				} = await uni.$http.delete('/activity/deleteById/' + this.activityId)
				if (data.code === 1) {
					this.getActivityList()
					this.showDeleteShowActivity = false
					uni.$showMsg('删除成功啦！')
				}
			},
			async getActivityList() {
				const {
					data
				} = await uni.$http.get('/activity/getActivityListByUserId/' + this.userId)
				const obj = data.data.activityList.map(item => {
					item.mainImage = item.activityImage.split(',')
					return item
				})
				this.activityList = obj
				this.scrollList[3].count=data.data.total
			},

			seeVideoById(id) {
				uni.navigateTo({
					url: '/minePages/video/video?videoId=' + id
				})
			},
			click(index) {
				if (index === 1) {
					//编辑
					console.log('编辑');
				} else {
					//删除
					this.deleteShow = true
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
			async getUserInfo() {
				const {
					data
				} = await uni.$http.get('/user/queryUserById?userId=' + this.userId)
				if (data.code === 1) {
					this.username = data.data.username
					this.avatar = data.data.avatar
				}
			},
			async queryBlogAll() {
				const {
					data
				} = await uni.$http.get('/blog/queryById?userId=' + this.userId +
					'&pageNum=1' + '&pageSize=100')
				if (data.code === 1) {
					const obj = data.data.records.map(item => {
						item.images = item.images.split(',')
						return item
					})
					this.scrollList[0].count = data.data.total
					this.blogList = obj
				}
			},
			async queryVideoAll() {
				const {
					data
				} = await uni.$http.get('/video/queryVideoByUserId/' + this.userId)
				if (data.code === 1) {
					this.scrollList[2].count = data.data.count
					this.videoList = data.data.list
				}
			},
			async searchStrategy() {
				const {
					data
				} = await uni.$http.get('/blog/queryStrategyById?userId=' +uni.getStorageSync('userId'))
				if (data.code === 1) {
					data.data.data.forEach(item=>item.createTime=dateUtils.format(item.createTime))
					this.scrollList[1].count = data.data.total
					this.strategyList = data.data.data
				} else {
					uni.$showMsg('获取数据失败！')
				}
			},
			goDetail(id){
				uni.navigateTo({
					url:'/homePages/Strategy/Strategy?id='+id
				})
			},
			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			openShow(item) {
				this.actionShow = true
				this.$nextTick(() => {
					this.deleteId = item.id
				})
			},
			async deleteById() {
				const {
					data
				} = await uni.$http.delete('/blog/deleteById/' + this.deleteId)
				if (data.code === 1) {
					this.queryBlogAll()
					this.deleteShow = false
					uni.$showMsg('删除成功啦！')
				}
			},
			// tab选项卡切换
			tabChange(index) {
				this.current = index
				if (this.current === 0) {
					this.queryBlogAll();
					this.getUserInfo()
				} else if (this.current === 1) {
					this.queryVideoAll()
				} else {
					this.getActivityList()
				}
			},
			// 跳转
			tn(e) {
				uni.navigateTo({
					url: e,
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
	.uni-list {
	    background-color: #FFFFFF;
	    position: relative;
	    width: 100%;
	    display: flex;
	    flex-direction: column;
	}
	
	.uni-list:after {
	    position: absolute;
	    z-index: 10;
	    right: 0;
	    bottom: 0;
	    left: 0;
	    height: 1px;
	    content: '';
	    -webkit-transform: scaleY(.5);
	    transform: scaleY(.5);
	    background-color: #c8c7cc;
	}
	
	.uni-list::before {
	    position: absolute;
	    z-index: 10;
	    right: 0;
	    top: 0;
	    left: 0;
	    height: 1px;
	    content: '';
	    -webkit-transform: scaleY(.5);
	    transform: scaleY(.5);
	    background-color: #c8c7cc;
	}
	
	.uni-list-cell {
	    position: relative;
	    display: flex;
	    flex-direction: row;
	    justify-content: space-between;
	    align-items: center;
	}
	
	.uni-list-cell-hover {
	    background-color: #eee;
	}
	
	.uni-list-cell::after {
	    position: absolute;
	    z-index: 3;
	    right: 0;
	    bottom: 0;
	    left: 30upx;
	    height: 1px;
	    content: '';
	    -webkit-transform: scaleY(.5);
	    transform: scaleY(.5);
	    background-color: #c8c7cc;
	}
	
	.uni-list .uni-list-cell:last-child::after {
	    height: 0upx;
	}
	
	/* 图文列表 */
	.uni-media-list {
	    padding: 22upx 30upx;
	    box-sizing: border-box;
	    display: flex;
	    width: 100%;
	    flex-direction: row;
	}
	
	.uni-navigate-right.uni-media-list {
	    padding-right: 74upx;
	}
	
	.uni-pull-right {
	    flex-direction: row-reverse;
	}
	
	.uni-pull-right>.uni-media-list-logo {
	    margin-right: 0upx;
	    margin-left: 20upx;
	}
	
	.uni-media-list-logo image {
	    height: 100%;
	    width: 100%;
	}
	
	
	.uni-media-list-text-bottom {
	    width: 100%;
	    line-height: 30upx;
	    font-size: 26upx;
	    color: #8f8f94;
	}
	
	.uni-media-list-logo {
	    width: 180upx;
	    height: 140upx;
	    margin-right: 20upx;
	}
	
	.uni-media-list-body {
	    display: flex;
	    flex: 1;
	    flex-direction: column;
	    justify-content: space-between;
	    align-items: flex-start;
	    overflow: hidden;
	    height: auto;
	}
	
	.uni-media-list-text-top {
	    width: 100%;
	    line-height: 36upx;
	    font-size: 30upx;
	    height: 74upx;
	    font-size: 28upx;
	    overflow: hidden;
	}
	
	.uni-media-list-text-bottom {
	    display: flex;
	    flex-direction: row;
	    justify-content: space-between;
	}
	.container {
		display: flex;
		flex-wrap: wrap;

		.list {
			width: 230rpx;
			height: 400rpx;
			margin-left: -2rpx;
			margin-top: 5rpx;
		}
	}

	.container::after {
		content: "";
		width: 254rpx;
	}

	.list:nth-child(1n) {
		padding-left: 32rpx
	}

	.album {
		@include flex;
		align-items: flex-start;

		&__avatar {
			background-color: $u-bg-color;
			padding: 5px;
			border-radius: 3px;
		}

		&__content {
			margin-left: 10px;
			flex: 1;
		}
	}

	.template-preferred {
		// background-color: $tn-bg-gray-color;
		max-height: 100vh;
	}

	.tn-tabbar-height {
		min-height: 120rpx;
		height: calc(140rpx + env(safe-area-inset-bottom) / 2);
	}


	/* 商家 start */
	.card-swiper {
		height: 260rpx !important;
		overflow: hidden;
		// background-color: #00C3FF;
	}

	.card-swiper swiper-item {
		width: 632rpx !important;
		left: -10rpx;
		box-sizing: border-box;
		overflow: initial;
		padding: 0 0rpx 40rpx 0;
	}

	.card-swiper swiper-item .swiper-item {
		width: 100%;
		display: block;
		height: 100%;
		transform: scale(1);
		transition: all 0.2s ease-in 0s;
	}

	.card-swiper swiper-item.cur .swiper-item {
		transform: none;
		transition: all 0.2s ease-in 0s;
	}

	.card-swiper swiper-item .swiper-item-text {
		margin-top: -210rpx;
		width: 100%;
		display: block;
		height: 100%;
		border-radius: 10rpx;
		transform: translate(30rpx, -80rpx) scale(0.8, 0.8);
		transition: all 0.6s ease 0s;
		overflow: hidden;
	}

	.card-swiper swiper-item.cur .swiper-item-text {
		margin-top: -270rpx;
		width: 100%;
		transform: translate(20rpx, 0rpx) scale(0.9, 0.9);
		transition: all 0.6s ease 0s;
	}


	/* 图标容器5 start */
	.icon5 {
		&__item {
			// width: 30%;
			background-color: #FFFFFF;
			border-radius: 10rpx;
			padding: 0rpx;
			margin: 0rpx;
			transform: scale(1);
			transition: transform 0.3s linear;
			transform-origin: center center;

			&--icon {
				width: 100rpx;
				height: 100rpx;
				border-radius: 50%;
				margin-bottom: 18rpx;
				position: relative;
				z-index: 1;
			}
		}
	}

	/* 图标容器11 start */
	.icon11 {
		&__item {
			width: 30%;
			background-color: #FFFFFF;
			border-radius: 10rpx;
			padding: 30rpx;
			margin: 20rpx 10rpx;
			transform: scale(1);
			transition: transform 0.3s linear;
			transform-origin: center center;

			&--icon {
				width: 100rpx;
				height: 100rpx;
				font-size: 60rpx;
				border-radius: 50%;
				margin-bottom: 18rpx;
				position: relative;
				z-index: 1;

				&::after {
					content: " ";
					position: absolute;
					z-index: -1;
					width: 100%;
					height: 100%;
					left: 0;
					bottom: 0;
					border-radius: inherit;
					opacity: 1;
					transform: scale(1, 1);
					background-size: 100% 100%;
					background-image: url(https://resource.tuniaokj.com/images/cool_bg_image/icon_bg.png);
				}
			}
		}
	}

	/* 瀑布流商品*/
	.product__item {
		background-color: #FFFFFF;
		border-radius: 15rpx;
		overflow: hidden;
		margin: 0 15rpx 30rpx 15rpx;
		box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);

		.item {

			/* 图片 start */
			&__image {
				width: 100%;
				height: auto;
				background-color: #FFFFFF;
			}

			/* 图片 end */

			/* 内容 start */
			&__data {
				padding: 20rpx 20rpx;
			}

			/* 标题 start */
			&__title-container {
				text-align: justify;
				line-height: 38rpx;
				vertical-align: middle;
			}

			&__store-type {
				height: 28rpx;
				font-size: 20rpx;
				position: relative;
				display: inline-flex;
				align-items: center;
				justify-content: center;
				padding: 0 4rpx;
				border-radius: 6rpx;
				white-space: nowrap;
				text-align: center;
				top: -2rpx;
				margin-right: 6rpx;
			}

			&__title {}

			/* 标题 end */

			/* 标签 start */
			&__tags-container {
				display: flex;
				flex-direction: row;
				flex-wrap: nowrap;
				align-items: center;
				justify-content: flex-start;
			}

			&__tag {
				margin: 10rpx;
				color: #FF7043;
				border: 2rpx solid #FF7043;
				padding: 0 6rpx;
				border-radius: 10rpx;
				font-size: 20rpx;

				&:first-child {
					margin-left: 0rpx !important;
				}
			}

			/* 标签 end */

			/* 价格 start */
			&__price-container {
				padding: 10rpx 0;
				font-size: 24rpx;
				font-weight: bold;
			}

			&__price {
				&--unit {}

				&--integer {
					font-size: 38rpx;
				}

				&--decimal {}
			}

			/* 价格 end */
			/* 内容 end */
		}
	}

	/* 商家商品 start*/
	.tn-blogger-content {
		&__wrap {
			box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
			border-radius: 20rpx;
			margin: 15rpx;
		}

		&__info {
			&__btn {
				margin-right: -12rpx;
				opacity: 0.5;
			}
		}

		&__label {
			&__item {
				line-height: 45rpx;
				padding: 0 10rpx;
				margin: 5rpx 18rpx 0 0;

				&--prefix {
					color: #E83A30;
					padding-right: 10rpx;
				}
			}

			&__desc {
				line-height: 35rpx;
			}
		}

		&__main-image {
			border-radius: 16rpx 16rpx 0 0;

			&--1 {
				max-width: 690rpx;
				min-width: 690rpx;
				max-height: 400rpx;
				min-height: 400rpx;
			}

			&--2 {
				max-width: 260rpx;
				max-height: 260rpx;
			}

			&--3 {
				height: 212rpx;
				width: 100%;
			}
		}

		&__count-icon {
			font-size: 24rpx;
			padding-right: 5rpx;
		}
	}

	.image-book {
		padding: 150rpx 0rpx;
		font-size: 16rpx;
		font-weight: 300;
		position: relative;
	}

	.image-picbook {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 15rpx 15rpx 0 0;
	}


	/* 商家头像 start */
	.logo-image {
		width: 40rpx;
		height: 40rpx;
		position: relative;
	}

	.logo-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border: 2rpx solid rgba(255, 255, 255, 0.05);
		box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.15);
		border-radius: 50%;
		overflow: hidden;
		// background-color: #FFFFFF;
	}

	.blogger {
		&__item {
			padding: 30rpx;
		}

		&__author {
			&__btn {
				margin-right: -12rpx;
				opacity: 0.5;
			}
		}

		&__desc {
			line-height: 55rpx;

			&__label {
				padding: 0 20rpx;
				margin: 0rpx 18rpx 0 0;

				&--prefix {
					color: #00FFC8;
					padding-right: 10rpx;
				}
			}

			&__content {}
		}

		&__content {
			margin-top: 18rpx;
			padding-right: 18rpx;

			&__data {
				line-height: 46rpx;
				text-align: justify;
				overflow: hidden;
				transition: all 0.25s ease-in-out;

			}

			&__status {
				margin-top: 10rpx;
				font-size: 26rpx;
				color: #82B2FF;
			}
		}

		&__main-image {
			border-radius: 16rpx;

			&--1 {
				max-width: 80%;
				max-height: 300rpx;
			}

			&--2 {
				max-width: 260rpx;
				max-height: 260rpx;
			}

			&--3 {
				height: 212rpx;
				width: 100%;
			}
		}

		&__count-icon {
			font-size: 40rpx;
			padding-right: 5rpx;
		}

		&__ad {
			width: 100%;
			height: 500rpx;
			transform: translate3d(0px, 0px, 0px) !important;

			::v-deep .uni-swiper-slide-frame {
				transform: translate3d(0px, 0px, 0px) !important;
			}

			.uni-swiper-slide-frame {
				transform: translate3d(0px, 0px, 0px) !important;
			}

			&__item {
				position: absolute;
				width: 100%;
				height: 100%;
				transform-origin: left center;
				transform: translate3d(100%, 0px, 0px) scale(1) !important;
				transition: transform 0.25s ease-in-out;
				z-index: 1;

				&--0 {
					transform: translate3d(0%, 0px, 0px) scale(1) !important;
					z-index: 4;
				}

				&--1 {
					transform: translate3d(13%, 0px, 0px) scale(0.9) !important;
					z-index: 3;
				}

				&--2 {
					transform: translate3d(26%, 0px, 0px) scale(0.8) !important;
					z-index: 2;
				}
			}

			&__content {
				border-radius: 40rpx;
				width: 640rpx;
				height: 500rpx;
				overflow: hidden;
			}

			&__image {
				width: 100%;
				height: 100%;
			}
		}
	}

	/* 商家商品 end*/
</style>