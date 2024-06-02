<template>
	<view>
		<tn-nav-bar fixed :bottomShadow="true" backTitle=" ">
			<view>
				<text class="tn-text-lg">查看主页</text>
				<text class="tn-text-xl tn-padding-left-sm tn-icon-footprint"></text>
			</view>
		</tn-nav-bar>
		<view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
			<view class="template-about tn-safe-area-inset-bottom">
				<view class="top-backgroup">
					<image
						src='https://wangzhenghai-oss.oss-cn-hangzhou.aliyuncs.com/a7b1a578-386e-4fd7-8a10-5158fff54191.jpg'
						mode='widthFix' class='backgroud-image'>
					</image>
				</view>
				<view class="tnwave waveAnimation">
					<view class="waveWrapperInner bgTop">
						<view class="wave waveTop"
							style="background-image: url('https://wangzhenghai-oss.oss-cn-hangzhou.aliyuncs.com/8510b513-0f81-47ff-9d27-817d961eea5e.png')">
						</view>
					</view>
					<view class="waveWrapperInner bgMiddle">
						<view class="wave waveMiddle"
							style="background-image: url('https://wangzhenghai-oss.oss-cn-hangzhou.aliyuncs.com/8510b513-0f81-47ff-9d27-817d961eea5e.png')">
						</view>
					</view>
					<view class="waveWrapperInner bgBottom">
						<view class="wave waveBottom"
							style="background-image: url('https://wangzhenghai-oss.oss-cn-hangzhou.aliyuncs.com/1ef8622f-31bb-4b38-9f86-41176113884b.png')">
						</view>
					</view>
				</view>

				<view class="about__wrap">
					<view
						class="user-info__container tn-flex tn-flex-direction-column tn-flex-col-center tn-flex-row-center">
						<view class="user-info__avatar tn-bg-grey--light tn-flex tn-flex-col-center tn-flex-row-center"
							style="margin-bottom: 10rpx;">
							<image :src="userData.avatar" style="width: 170rpx;height: 170rpx;background-size: cover;">
							</image>
						</view>
						<view class="user-info__nick-name" style="margin-top: 60rpx;">{{userData.username}}</view>
					</view>
					<!-- 消息&数据 -->
					<view class="tn-shadow-warp" style="margin-top: 100rpx;background-color: rgba(255,255,255,1);">
						<view class="tn-flex">
							<view class="tn-flex-1 tn-padding-sm tn-margin-xs">
								<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
									<view class="">
										<view class="tn-text-xxl tn-color-orange">{{getLiked}}</view>
									</view>
									<view class="tn-margin-top-xs tn-color-gray tn-text-df tn-text-center">
										<text class="tn-icon-praise"></text>
										<text class="tn-padding-left-xs">获赞</text>
									</view>
								</view>
							</view>
							<view class="tn-flex-1 tn-padding-sm tn-margin-xs">
								<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
									<view class="">
										<view class="tn-text-xxl tn-color-blue">{{follow}}</view>
									</view>
									<view class="tn-margin-top-xs tn-color-gray tn-text-df tn-text-center">
										<text class="tn-icon-my-add"></text>
										<text class="tn-padding-left-xs">关注</text>
									</view>
								</view>
							</view>
							<view class="tn-flex-1 tn-padding-sm tn-margin-xs">
								<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
									<view class="">
										<view class="tn-text-xxl tn-color-red">{{fans}}</view>
									</view>
									<view class="tn-margin-top-xs tn-color-gray tn-text-df tn-text-center">
										<text class="tn-icon-flower"></text>
										<text class="tn-padding-left-xs">粉丝</text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view>
			<u-sticky bgColor="#fff">
				<u-tabs :list="list" lineWidth="20" lineHeight="7" :lineColor="`url(${lineBg}) 100% 100%`" :activeStyle="{
				        color: '#303133',
				        fontWeight: 'bold',
				        transform: 'scale(1.05)'
				    }" :inactiveStyle="{
				        color: '#606266',
				        transform: 'scale(1)'
				    }" itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;" :scrollable="false" @click="click"
					:current="current">
				</u-tabs>
			</u-sticky>
		</view>
		<view v-if="current===0">
			<view v-show="publishList.length==0">
				<tn-empty mode="list"></tn-empty>
			</view>
			<view class="u-page">
				<view class="u-demo-block">
					<view class="u-demo-block__content">
						<view class="album" v-for="item of publishList" :key="item.id">
							<view class="album__avatar">
								<image :src="userData.avatar" style="width: 50px;height: 50px;">
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
								<view style="margin-top: 6rpx;"><u--text :text="handlePublishTimeDesc(item.createTime)"
										size="15"></u--text></view>
								<view style="display: flex;margin-top: 15rpx;margin-bottom: 10rpx;">
									<u-icon name="thumb-up" size="20" color="#ff0000"></u-icon>
									<text style="margin-right: 10rpx;margin-top: 6rpx;">{{item.liked}}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view style="height: 50rpx;"></view>
			<!-- 悬浮按钮-->
			<view class="tn-flex tn-flex-row-between tn-footerfixed" v-if="blogUserId!=userId">
				<view class="tn-flex-1 justify-content-item tn-margin-xs tn-text-center">
					<tn-button backgroundColor="#00FFC6" padding="40rpx 0" width="90%" shadow fontBold v-if="!isFollow"
						@click="goFollow">
						<text class="tn-icon-my-add tn-padding-right-xs tn-color-black"></text>
						<text class="tn-color-black">关 注Ta</text>
					</tn-button>
					<tn-button backgroundColor="#eb3941" padding="40rpx 0" width="90%" shadow fontBold v-if="isFollow"
						@click="goFollow">
						<text class="tn-icon-my-reduce tn-padding-right-xs tn-color-black"></text>
						<text class="tn-color-black">取 关Ta</text>
					</tn-button>
				</view>
				<view class="tn-flex-1 justify-content-item tn-margin-xs tn-text-center">
					<tn-button backgroundColor="#FFF00D" padding="40rpx 0" width="90%" shadow fontBold @click="goChat">
						<text class="tn-icon-message tn-padding-right-xs tn-color-black"></text>
						<text class="tn-color-black">私 信</text>
					</tn-button>
				</view>
			</view>
			<view class='tn-tabbar-height'></view>
		</view>
		<view v-if="current===1">
			<view v-show="strategyList.length==0">
				<tn-empty mode="list"></tn-empty>
			</view>
			<view class="uni-list">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value,key) in strategyList"
					:key="key">
					<view class="uni-media-list">
						<image class="uni-media-list-logo" :src="value.images" @click="goDetail(value.id)"></image>
						<view class="uni-media-list-body">
							<view class="uni-media-list-text-top" @click="goDetail(value.id)">{{value.title}}</view>
							<view class="uni-media-list-text-bottom">
								<text>{{value.username}}</text>
								<text @click="goDetail(value.id)">{{value.createTime}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view style="height: 50rpx;"></view>
			<!-- 悬浮按钮-->
			<view class="tn-flex tn-flex-row-between tn-footerfixed" v-if="blogUserId!=userId">
				<view class="tn-flex-1 justify-content-item tn-margin-xs tn-text-center">
					<tn-button backgroundColor="#00FFC6" padding="40rpx 0" width="90%" shadow fontBold v-if="!isFollow"
						@click="goFollow">
						<text class="tn-icon-my-add tn-padding-right-xs tn-color-black"></text>
						<text class="tn-color-black">关 注Ta</text>
					</tn-button>
					<tn-button backgroundColor="#eb3941" padding="40rpx 0" width="90%" shadow fontBold v-if="isFollow"
						@click="goFollow">
						<text class="tn-icon-my-reduce tn-padding-right-xs tn-color-black"></text>
						<text class="tn-color-black">取 关Ta</text>
					</tn-button>
				</view>
				<view class="tn-flex-1 justify-content-item tn-margin-xs tn-text-center">
					<tn-button backgroundColor="#FFF00D" padding="40rpx 0" width="90%" shadow fontBold @click="goChat">
						<text class="tn-icon-message tn-padding-right-xs tn-color-black"></text>
						<text class="tn-color-black">私 信</text>
					</tn-button>
				</view>
			</view>
			<view class='tn-tabbar-height'></view>
		</view>
		<view v-if="current===2">
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
			<view style="height: 50rpx;"></view>
			<view class="tn-flex tn-flex-row-between tn-footerfixed" v-if="blogUserId!=userId">
				<view class="tn-flex-1 justify-content-item tn-margin-xs tn-text-center">
					<tn-button backgroundColor="#00FFC6" padding="40rpx 0" width="90%" shadow fontBold v-if="!isFollow"
						@click="goFollow">
						<text class="tn-icon-my-add tn-padding-right-xs tn-color-black"></text>
						<text class="tn-color-black">关 注Ta</text>
					</tn-button>
					<tn-button backgroundColor="#eb3941" padding="40rpx 0" width="90%" shadow fontBold v-if="isFollow"
						@click="goFollow">
						<text class="tn-icon-my-reduce tn-padding-right-xs tn-color-black"></text>
						<text class="tn-color-black">取 关Ta</text>
					</tn-button>
				</view>
				<view class="tn-flex-1 justify-content-item tn-margin-xs tn-text-center">
					<tn-button backgroundColor="#FFF00D" padding="40rpx 0" width="90%" shadow fontBold @click="goChat">
						<text class="tn-icon-message tn-padding-right-xs tn-color-black"></text>
						<text class="tn-color-black">私 信</text>
					</tn-button>
				</view>
			</view>
			<view class='tn-tabbar-height'></view>
		</view>

		<view v-if="current===3">
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
									<view @click="openShowActivity(item)" v-if="userId===item.userId"
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
				<view style="height: 50rpx;"></view>
				<view class="tn-flex tn-flex-row-between tn-footerfixed" v-if="blogUserId!=userId">
					<view class="tn-flex-1 justify-content-item tn-margin-xs tn-text-center">
						<tn-button backgroundColor="#00FFC6" padding="40rpx 0" width="90%" shadow fontBold
							v-if="!isFollow" @click="goFollow">
							<text class="tn-icon-my-add tn-padding-right-xs tn-color-black"></text>
							<text class="tn-color-black">关 注Ta</text>
						</tn-button>
						<tn-button backgroundColor="#eb3941" padding="40rpx 0" width="90%" shadow fontBold
							v-if="isFollow" @click="goFollow">
							<text class="tn-icon-my-reduce tn-padding-right-xs tn-color-black"></text>
							<text class="tn-color-black">取 关Ta</text>
						</tn-button>
					</view>
					<view class="tn-flex-1 justify-content-item tn-margin-xs tn-text-center">
						<tn-button backgroundColor="#FFF00D" padding="40rpx 0" width="90%" shadow fontBold
							@click="goChat">
							<text class="tn-icon-message tn-padding-right-xs tn-color-black"></text>
							<text class="tn-color-black">私 信</text>
						</tn-button>
					</view>
				</view>
				<view class='tn-tabbar-height'></view>
			</view>
		</view>
		<view v-if="current===4">
			<view v-show="commonFollowList.length==0&&loginUserId!=null">
				<u-empty mode="list" icon="http://cdn.uviewui.com/uview/empty/list.png">
				</u-empty>
			</view>
			<view class="u-page">
				<u-list>
					<u-list-item v-for="(item, index) in commonFollowList" :key="item.id">
						<u-cell :title="item.username" @click="seeInfo(item.id)">
							<u-avatar slot="icon" shape="square" size="35" :src="item.avatar"
								customStyle="margin: -3px 5px -3px 0"></u-avatar>
						</u-cell>
					</u-list-item>
				</u-list>
			</view>
			<view style="height: 50rpx;"></view>
			<view class="tn-flex tn-flex-row-between tn-footerfixed" v-if="blogUserId!=userId">
				<view class="tn-flex-1 justify-content-item tn-margin-xs tn-text-center">
					<tn-button backgroundColor="#00FFC6" padding="40rpx 0" width="90%" shadow fontBold v-if="!isFollow"
						@click="goFollow">
						<text class="tn-icon-my-add tn-padding-right-xs tn-color-black"></text>
						<text class="tn-color-black">关 注Ta</text>
					</tn-button>
					<tn-button backgroundColor="#eb3941" padding="40rpx 0" width="90%" shadow fontBold v-if="isFollow"
						@click="goFollow">
						<text class="tn-icon-my-reduce tn-padding-right-xs tn-color-black"></text>
						<text class="tn-color-black">取 关Ta</text>
					</tn-button>
				</view>
				<view class="tn-flex-1 justify-content-item tn-margin-xs tn-text-center">
					<tn-button backgroundColor="#FFF00D" padding="40rpx 0" width="90%" shadow fontBold @click="goChat">
						<text class="tn-icon-message tn-padding-right-xs tn-color-black"></text>
						<text class="tn-color-black">私 信</text>
					</tn-button>
				</view>
			</view>
			<view class='tn-tabbar-height'></view>
		</view>
	</view>
</template>

<script>
	var dateUtils = require('@/utils/util.js').dateUtils;
	import NavIndexButton from '@/libs/components/nav-index-button.vue'
	const GoEasy = uni.$GoEasy;
	export default {
		name: 'userHome',
		components: {
			NavIndexButton
		},
		data() {
			return {
				urls: [],
				conversations: [],
				activityList: [],
				showDeleteShowActivity: false,
				activityId: '',
				blogUserId: '', //博客用户Id或者评论者的用户ID
				lineBg: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAOCAYAAABdC15GAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFxSURBVHgBzZNRTsJAEIb/WTW+lpiY+FZPIDew3ABP4GJ8hxsI9zBpOYHeQDwBPQI+mRiRvpLojtPdYhCorQqF/6GdbGd2vvwzBXZcNAt4oj1ANeUoAT5iqkUjbEFLHNmhD1YPEvpZ3ghkGlVDCkc94/BmHMq998I5ONiY1ZBfpKAyuOtgAc5yOEDmYEWNh32BHF91sGHZHmwW4azciN9aQwnz3SJEgOmte+R2tdLprTYoa50mvuomlLpD4Y3oQZnov6D2RzCqI93bWOHaEmAGqQUyRBlZR1WfarcD/EJ2z8DtzDGvsMCwpm8XOCfDUsVOCYhiqRxI/CTQo4UOvjzO7Pow18vfywneuUHHUUxLn55lLw5JFpZ8bEUcY8oXdOLWiHLTxvoGpLqoUmy6dBT15o/ox3znpoycAmxUsiJTbs1cmxeVKp+0zmFIS7bGWiVghC7Vwse8jFKAX9eljh4ggKLLv7uaQvG9/F59Oo2SouxPu7OTCxN/s8wAAAAASUVORK5CYII=',
				commonFollowCount: 0, //共同关注数量
				publishCount: 0, //发布作品数量
				current: 0, //表示默认展示动态页面
				userData: [], //博客的信息
				username: [], //用户名
				publishList: [], //发布全部作品的数据
				commonFollowList: [], //共同关注数据列表
				loginUserId: uni.getStorageSync('token'), //当前登录用户token
				userId: uni.getStorageSync('userId'), //当前登录用户Id
				pageNum: 1,
				videoList: [],
				currentUser: '',
				pageSize: 50,
				videoCount: 0,
				getLiked: 0, //获赞
				follow: 0, //关注
				fans: 0, //粉丝
				age: 18, //年龄
				sex: '不展示',
				strategyList: [],
				address: '', //地址
				school: '', //学校
				isFollow: '',
				signature: '', //个性签名
				list: [{
						name: '游记',
					},
					{
						name: '攻略',
					},
					{
						name: '视频',
					},
					{
						name: '结伴',
					},

				]
			}
		},
		onShareAppMessage() {
			return {
				title: '旅行攻略', //分享的名称
				path: 'pages/index',
				mpId: 'wx07bda3634bf25b85' //此处配置微信小程序的AppId
			}
		},
		onShow() {
			// this.getCommon()
			this.queryBlogAll()
			this.queryUserById()
			this.getUserInfoById()
			this.isFollowed()
			this.queryVideoAll()
			this.getActivityList()
			this.searchStrategy()
		},
		methods: {
			goChat() {
				if (!uni.getStorageSync('currentUser')) {
					uni.navigateTo({
						url: '/pages/login/login?index=1'
					})
					uni.$showMsg('亲，先登录哦~')
				} else {
					this.connectGoEasy()
					let path = '/messagePages/privateChat?to=' + this.userData.id + '&username=' + this.userData.username +
						'&avatar=' + this.userData.avatar;
					uni.navigateTo({
						url: path,
					});
				}
			},
			connectGoEasy() {
				this.currentUser = uni.getStorageSync('currentUser');
				GoEasy.connect({
					id: this.currentUser.userId.toString(),
					data: {
						name: this.currentUser.username,
						avatar: this.currentUser.avatar
					},
					onSuccess: () => {
						console.log('GoEasy connect successfully.')
					},
					onFailed: (error) => {
						console.log('Failed to connect GoEasy, code:' + error.code + ',error:' + error
							.content);
					},
					onProgress: (attempts) => {
						console.log('GoEasy is connecting', attempts);
					}
				});
			},
			seeVideoById(id) {
				uni.navigateTo({
					url: '/minePages/video/video?videoId=' + id
				})
			},
			goDetail(id) {
				uni.navigateTo({
					url: '/homePages/Strategy/Strategy?id=' + id
				})
			},
			async getActivityList() {
				const {
					data
				} = await uni.$http.get('/activity/getActivityListByUserId/' + this.blogUserId)
				const obj = data.data.activityList.map(item => {
					item.mainImage = item.activityImage.split(',')
					return item
				})
				this.activityList = obj
			},
			async searchStrategy() {
				const {
					data
				} = await uni.$http.get('/blog/queryStrategyById?userId=' + this.blogUserId)
				if (data.code === 1) {
					data.data.data.forEach(item => item.createTime = dateUtils.format(item.createTime))
					this.strategyList = data.data.data
				} else {
					uni.$showMsg('获取攻略数据失败！')
				}
			},
			tn(e) {
				uni.navigateTo({
					url: e,
				});
			},
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
			async queryVideoAll() {
				const {
					data
				} = await uni.$http.get('/video/queryVideoByUserId/' + this.blogUserId)
				if (data.code === 1) {
					// this.list[1].badge.value = data.data.count
					this.videoList = data.data.list
				}
			},
			seeInfo(userId) {
				uni.navigateTo({
					url: '/searchPages/userHome?userId=' + userId
				})
			},
			//关注Up
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
						this.isFollow = !this.isFollow
						// this.getCommon()
						this.queryBlogAll()
						this.queryUserById()
						this.getUserInfoById()
						uni.showToast({
							title: this.isFollow ? "关注成功" : "已取消关注"
						})
					})
			},
			//查看当前用户是否关注Up
			async isFollowed() {
				const {
					data
				} = await uni.$http.get('/follow/or/not?followUserId=' + this.blogUserId)
				if (data.code === 1) {
					this.isFollow = data.data
				} else {
					uni.$showMsg('服务器异常！')
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
			click(item) {
				this.current = item.index
				if (item.index === 0) {
					this.queryBlogAll()
				}
				if (item.index === 1) {
					this.searchStrategy()
				}
				if (item.index === 2) {
					this.queryVideoAll()
				}
				if (item.index === 3) {
					this.getActivityList()
				}
				if (item.index === 4) {
					this.getCommon()
				}
			},
			async getCommon() {
				const {
					data
				} = await uni.$http.get('/follow/common?userId=' + this.blogUserId)
				if (data.code === 1) {
					// this.list[3].badge.value = data.data.count
					this.commonFollowList = data.data.users
				} else {
					uni.showToast({
						title: '获取共同关注数据失败~',
						icon: 'error'
					})
				}
			},

			async queryBlogAll() {
				const {
					data
				} = await uni.$http.get('/blog/queryById?userId=' + this
					.blogUserId +
					'&pageNum=1' + '&pageSize=100')
				if (data.code === 1) {
					const obj = data.data.records.map(item => {
						item.images = item.images.split(',')
						return item
					})
					// this.list[1].badge.value = data.data.total
					// this.list[4].name = obj[1].userId === this.userId ? '我的关注' : '共同关注'
					this.publishList = obj
				}
			},

			async queryUserById() {
				const {
					data
				} = await uni.$http.get("/user/queryUserById?userId=" + this
					.blogUserId)
				this.username = data.data.username
				this.userData = data.data
			},

			async getUserInfoById() {
				const {
					data
				} = await uni.$http.get(
					'/userInfo/getUserInfoById?userId=' + this
					.blogUserId)
				this.sex = data.data.gender
				this.address = data.data.city
				this.school = data.data.school
				this.age = data.data.age
				this.signature = data.data.introduce
				this.fans = data.data.fans
				this.follow = data.data.follow
				this.getLiked = data.data.likedCount
			},
		},
		onLoad(options) {
			this.blogUserId = options.userId
			this.getCommon()
			this.queryBlogAll()
			this.queryUserById()
			this.getUserInfoById()
			this.isFollowed()
			this.queryVideoAll()
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

	::v-deep .u-tag--medium.data-v-2fd891bb {
		padding: 0 0;
	}

	::v-deep .u-tag.data-v-2fd891bb {
		margin-left: 8rpx;
	}

	.tn-tabbar-height {
		min-height: 100rpx;
		height: calc(120rpx + env(safe-area-inset-bottom) / 2);
	}

	/* 顶部背景图 start */
	.top-backgroup {
		height: 450rpx;
		z-index: -1;

		.backgroud-image {
			width: 100%;
			height: 450rpx;
			// z-index: -1;
		}
	}

	/* 顶部背景图 end */
	.tn-footerfixed {
		position: fixed;
		width: 100%;
		bottom: calc(30rpx + env(safe-area-inset-bottom));
		z-index: 1024;
		box-shadow: 0 1rpx 6rpx rgba(0, 0, 0, 0);
	}

	.tn-strip-bottom {
		width: 100%;
		border-bottom: 20rpx solid rgba(241, 241, 241, 0.8);
	}

	/* 波浪*/
	@keyframes move_wave {
		0% {
			transform: translateX(0) translateZ(0) scaleY(1)
		}

		50% {
			transform: translateX(-25%) translateZ(0) scaleY(1)
		}

		100% {
			transform: translateX(-50%) translateZ(0) scaleY(1)
		}
	}

	.tnwave {
		overflow: hidden;
		position: absolute;
		z-index: 9999;
		height: 200rpx;
		left: 0;
		right: 0;
		top: 290rpx;
		bottom: auto;
	}

	.waveWrapperInner {
		position: absolute;
		width: 100%;
		overflow: hidden;
		height: 100%;
	}

	.wave {
		position: absolute;
		left: 0;
		width: 200%;
		height: 100%;
		background-repeat: repeat no-repeat;
		background-position: 0 bottom;
		transform-origin: center bottom;
	}

	.bgTop {
		opacity: 0.4;
	}

	.waveTop {
		background-size: 50% 45px;
	}

	.waveAnimation .waveTop {
		animation: move_wave 4s linear infinite;
	}

	.bgMiddle {
		opacity: 0.6;
	}

	.waveMiddle {
		background-size: 50% 40px;
	}

	.waveAnimation .waveMiddle {
		animation: move_wave 3.5s linear infinite;
	}

	.bgBottom {
		opacity: 0.95;
	}

	.waveBottom {
		background-size: 50% 35px;
	}

	.waveAnimation .waveBottom {
		animation: move_wave 2s linear infinite;
	}

	/* 波浪*/

	/* 页面 start*/
	.about-shadow {
		border-radius: 15rpx;
		box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
	}

	.about {

		&__wrap {
			position: relative;
			z-index: 1;
			margin-top: -330rpx;
		}
	}

	/* 页面 end*/

	/* 用户信息 start */
	.user-info {
		&__container {}

		&__avatar {
			width: 170rpx;
			height: 170rpx;
			border: 8rpx solid rgba(255, 255, 255, 0.05);
			border-radius: 50%;
			overflow: hidden;
			box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.15);
		}

		&__nick-name {
			margin-top: 26rpx;
			font-size: 36rpx;
			font-weight: 600;
			text-align: center;
		}
	}

	/* 用户信息 end */
	/* 图标容器1 start */
	.icon1 {
		&__item {
			// width: 30%;
			background-color: #FFFFFF;
			border-radius: 10rpx;
			padding: 30rpx;
			margin: 20rpx 10rpx;
			transform: scale(1);
			transition: transform 0.3s linear;
			transform-origin: center center;

			&--icon {
				width: 40rpx;
				height: 40rpx;
				font-size: 28rpx;
				border-radius: 50%;
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
					background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg.png);
				}
			}
		}
	}

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
</style>