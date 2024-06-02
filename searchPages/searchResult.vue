<template>
	<view>
		<view class="template-search tn-safe-area-inset-bottom">
			<view class="tn-navbg" :style="{height: vuex_custom_bar_height + 'px'}">
				<!-- 顶部自定义导航 -->
				<tn-nav-bar fixed alpha customBack>
					<view slot="back" class='tn-custom-nav-bar__back' @click="cancle">
						<text class='icon tn-icon-left-arrow'></text>
					</view>
				</tn-nav-bar>
			</view>
			<view class="tn-search-fixed">
				<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin"
					:style="{marginTop: vuex_custom_bar_height + 'px'}">
					<view style="width: 520rpx;">
						<u-search v-model="searchKey" placeholderColor="#AAAAAA" :showAction="false" :clearabled="false"
							disabled @click="cancle"></u-search>
					</view>
					<view class="align-content-item">
						<view class="justify-content-item tn-text-center">
							<tn-button backgroundColor="#AAA" shape="round" padding="20rpx 20rpx" width="150rpx" shadow
								fontBold @tap="" @click="cancle">
								<text class="tn-color-white">取 消</text>
							</tn-button>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view>
			<tn-tabs :list="list" :isScroll="false" :current="current" barStyle="{color:'#ffd400'}"
				activeColor="#000" :bold="true" @change="change" :top="130"></tn-tabs>
		</view>
		<view>
			<view>
				<view v-if="current===5" >
					<view v-show="dataList.length===0" style="margin-top: 100rpx;">
						<tn-empty mode="search"></tn-empty>
					</view>
					<view class="Index">
						<view class="pubuBox">
							<view class="pubuItem">
								<view class="item-masonry" v-for="(item, index) in dataList" :key="item.id">
									<navigator :url="'/minePages/blog/blog?blogId='+item.id">
										<image :src="item.images" mode="widthFix"></image>
									</navigator>
									<view
										style="display: flex;align-items: center;padding-left: 18rpx;padding-bottom: 10rpx;padding-top: 12rpx;position: relative;">
										<text class="tn-icon-location-fill"
											style="color:black;font-size: 18px;margin-right: 8rpx;"></text>
										<text class="text-show"
											style="color: black;font-weight: 650">{{ item.location }}</text>
										<view
											style="position: absolute;left: 18rpx;bottom:30rpx;padding-bottom: 18rpx;">
											<tn-tag backgroundColor="#ffc20e" width="60rpx" height="32rpx"
												fontColor="#080808">{{item.type}}</tn-tag>
										</view>
									</view>
									<view class="listtitle">
										<view class="listtitle1">{{ item.title }}</view>
										<view class="user">
											<image :src="item.avatar" class="image" @click="goHome(item.userId)">
											</image>
											<text class="username">{{ item.username }}</text>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view>
					<view v-if="current===0">
						<view v-show="attractions.length===0" style="margin-top: 100rpx;">
							<tn-empty mode="search"></tn-empty>
						</view>
						<view v-for="(item,index) of attractions" :key="item.id">
							<view style="display: flex;margin-left: 4rpx;margin-top: 8rpx;"
								@click="seeAttractionInfo(item.id)">
								<view class="left">
									<u--image :src="item.image" width="120px" height="90px" :lazy-load="true" radius="5">
										<template v-slot:loading>
											<u-loading-icon color="red"></u-loading-icon>
										</template>
									</u--image>
								</view>
								<view class="right" style="margin-left:10rpx;" @click="seeAttractionInfo(item.id)">
									<view class="u-line-1" style="color: black;font-weight: 700;">
										{{item.name}}
									</view>
									<view style="margin-top: 8rpx;">
										<u-rate count="5" :value="item.rate" :readonly="true"></u-rate>
									</view>
									<view class="u-line-2" style="margin-top: 8rpx;">
										{{item.address}}
									</view>
								</view>
							</view>
							<view style="margin-top: 5rpx;" v-if="attractions.length!==index+1"><u-gap height="2"
									bgColor="#bbb"></u-gap></view>
						</view>
					</view>
					<view v-if="current===1">
						<view v-show="dataList.length===0" style="margin-top: 100rpx;">
							<tn-empty mode="search"></tn-empty>
						</view>
						<waterFall :list="dataList"></waterFall>
					</view>
				</view>
				<view>
					<view v-if="current===2">
						<view v-show="strategyList.length===0" style="margin-top: 100rpx;">
							<tn-empty mode="search"></tn-empty>
						</view>
						<view class="uni-list">
						    <view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value,key) in strategyList" :key="key"
						        @click="goDetail(value.id)">
						        <view class="uni-media-list">
						            <image class="uni-media-list-logo" :src="value.images"></image>
						            <view class="uni-media-list-body">
						                <view class="uni-media-list-text-top">{{value.title}}</view>
						                <view class="uni-media-list-text-bottom">
						                    <text>{{value.username}}</text>
						                    <text>{{value.createTime}}</text>
						                </view>
						            </view>
						        </view>
						    </view>
						</view>
					</view>
				</view>
				<view>
					<view v-if="current===3 ">
						<view v-show="userList.length===0" style="margin-top: 100rpx;">
							<tn-empty mode="search"></tn-empty>
						</view>
						<view class="u-page">
							<u-list>
								<u-list-item v-for="(item, index) in userList" :key="item.id">
									<u-cell @click="seeInfo(item.id)">
										<u-avatar slot="icon" shape="square" size="35" :src="item.avatar"
											customStyle="margin: -3px 5px -3px 0"></u-avatar>
											<view slot="title">
												<text style="font-weight: 700;">
													{{item.username}}
												</text>
											</view>
											<view style="display: flex;align-items: center;" slot="title">
												<text style="font-weight: 500;">
													{{item.follow}}关注
												</text>
												<text style="margin-left: 10rpx;font-weight: 500;">
													{{item.fans}}粉丝
												</text>
											</view>
										<tn-tag slot="right-icon" backgroundColor="#ffc20e"
											fontColor="#080808">SVIP{{item.level}}</tn-tag>
									</u-cell>
								</u-list-item>
							</u-list>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="tn-tabbar-height"></view>
	</view>
</template>

<script>
	 var dateUtils = require('@/utils/util.js').dateUtils;
	import waterFall from '@/components/waterFall/waterFall.vue'
	export default {
		components: {
			waterFall
		},
		data() {
			return {
				searchKey: '',
				current: 0,
				type: '',
				attractions:[],
				dataList: [],
				strategyList: [],
				userList: [],
				list: [
				{
					name:'景点'
				},{
					name: '游记'
				}, {
					name: '攻略'
				}, {
					name: '用户'
				}]
			}
		},
		onLoad(options) {
			this.searchKey = options.searchKey
			this.getAttractions()
		},
		methods: {
			cancle() {
				uni.navigateBack()
			},
			seeInfo(userId) {
				uni.navigateTo({
					url: '/searchPages/userHome?userId=' + userId
				})
			},
			goDetail(id){
				uni.navigateTo({
					url:'/homePages/Strategy/Strategy?id='+id
				})
			},
			seeAttractionInfo(attractionId) {
				uni.navigateTo({
					url: '/searchPages/attractionInfo?attractionId=' + attractionId
				})
			},
			async getAttractions() {
				const {
					data
				} = await uni.$http.get('/attractions/getAttractionByName/' + this.searchKey)
				data.data.forEach(item => item.image = item.image.split(",")[0]);
				this.attractions = data.data
			},
			change(index) {
				this.current = index;
				if (this.current === 0) {
					this.getAttractions()
				}
				if (this.current === 1) {
					this.type = '游记'
					this.searchBlog()
				}
				
				if (this.current === 2) {
					this.type = '攻略'
					this.searchStrategy()
				}
				if (this.current === 3) {
					this.searchUser()
				}
			},
			async searchBlog() {
				const {
					data
				} = await uni.$http.get('/queryAll/searchByKey?key=' + this.searchKey + '&type=' + this.type)
				if (data.code === 1) {
					data.data.forEach(item => item.images = item.images.split(",")[0]);
					this.dataList = data.data
				} else {
					uni.$showMsg('获取数据失败！')
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
			async searchStrategy() {
				const {
					data
				} = await uni.$http.get('/queryAll/searStrategychByKey?key=' + this.searchKey + '&type=' + this.type)
				if (data.code === 1) {
					data.data.forEach(item=>item.createTime=this.handlePublishTimeDesc(item.createTime))
					this.strategyList = data.data
				} else {
					uni.$showMsg('获取数据失败！')
				}
			},
			async getAll() {
				const {
					data
				} = await uni.$http.get('/queryAll/getAll?key=' + this.searchKey)
				if (data.code === 1) {
					data.data.forEach(item => item.images = item.images.split(",")[0]);
					this.dataList = data.data
				} else {
					uni.$showMsg('获取数据失败！')
				}
			},
			async searchUser() {
				const {
					data
				} = await uni.$http.get('/queryAll/searchUser?key=' + this.searchKey)
				if (data.code === 1) {
					this.userList = data.data
				} else {
					uni.$showMsg('获取用户数据失败！')
				}
			},
		}
	}
</script>

<style lang="scss">
	::v-deep .u-cell__title-text.data-v-913eaa32 {
		font-weight: 700;
	}

	.tn-search-fixed {
		position: fixed;
		top: 25rpx;
		width: 100%;
		transition: all 0.25s ease-out;
		z-index: 1;
	}

	.tn-tabs-fixed {
		position: fixed;
		top: 300rpx;
		width: 100%;
		transition: all 0.25s ease-out;
		z-index: 1;
	}

	.tn-tabbar-height {
		min-height: 60rpx;
		height: calc(60rpx + env(safe-area-inset-bottom) / 2);
	}

	/* 胶囊*/
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
		// background: linear-gradient(-120deg,  #9A5CE5, #01BEFF, #00F5D4, #43e97b);
		/* background: linear-gradient(-120deg,#c471f5, #ec008c, #ff4e50,#f9d423); */
		// background: linear-gradient(-120deg, #0976ea, #c471f5, #f956b6, #ea7e0a);
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

	/* 搜索标签 start*/
	.tn-tag-search {
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

	page {
		height: 100%;
	}

	.pubuBox {
		padding: 22rpx;
	}

	.pubuItem {
		column-count: 2;
		column-gap: 20rpx;
	}

	.item-masonry {
		box-sizing: border-box;
		border-radius: 15rpx;
		overflow: hidden;
		background-color: #fff;
		break-inside: avoid;
		/*避免在元素内部插入分页符*/
		box-sizing: border-box;
		margin-bottom: 20rpx;
		box-shadow: 0px 0px 28rpx 1rpx rgba(78, 101, 153, 0.14);
	}

	.item-masonry image {
		width: 100%;
	}

	.text-show {
		display: -webkit-box;
		text-overflow: ellipsis;
		overflow: hidden;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}

	.listtitle {
		padding-left: 22rpx;
		font-size: 24rpx;
		padding-bottom: 22rpx;

		.listtitle1 {
			line-height: 39rpx;
			text-overflow: -o-ellipsis-lastline;
			overflow: hidden;
			font-size: 16px;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			line-clamp: 2;
			-webkit-box-orient: vertical;
			min-height: 39rpx;
			max-height: 78rpx;
			color: black;
			font-weight: 300;
		}

		.listtitle2 {
			color: #ff0000;
			font-size: 32rpx;
			line-height: 32rpx;
			font-weight: bold;
			padding-top: 22rpx;

			.listtitle2son {
				font-size: 32rpx;
			}
		}

		.listtitle3 {
			font-size: 28rpx;
			color: #909399;
			line-height: 32rpx;
			padding-top: 22rpx;
		}
	}

	.Index {
		width: 100%;
		height: 100%;
	}

	.user {
		margin-top: 6rpx;

		image {
			border-radius: 50%;
			width: 30px;
			height: 30px;
			margin-right: 4px;
			vertical-align: middle;
		}

		.username {
			vertical-align: middle;
			font-size: 13px;
			font-weight: 490;
			color: black;
		}
	}

	.template-index {
		max-height: 100vh;
	}
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
</style>