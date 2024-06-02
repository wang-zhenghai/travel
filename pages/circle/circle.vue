<template>
	<view class="template-circle tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar :isBack="false" :bottomShadow="false" backgroundColor="none">
			<view class="custom-nav tn-flex tn-flex-col-center tn-flex-row-left">
				<image v-if="userAvatar" :src="userAvatar"
					style="width: 40px;height: 40px;border-radius: 50%;margin-left: 16rpx;"></image>
				<view class="tn-margin-top tn-margin-left"
					style="text-shadow:  1rpx 0 0 #FFF, 0 1rpx 0 #FFF, -1rpx 0 0 #FFF , 0 -1rpx 0 #FFF;">
					<tn-tabs :list="scrollList" :current="current" @change="tabChange" activeColor="#000" :bold="true"
						:fontSize="36"></tn-tabs>
				</view>
			</view>
		</tn-nav-bar>
		<!-- 发现 -->
		<view class="" v-if="current==0">
			<view class="tn-margin-top-sm" :style="{paddingTop: vuex_custom_bar_height + 'px'}"
				@click="tn('/circlePages/ranking')">
				<view class="tn-flex tn-flex-row-between tn-bg-yellow  tn-round tn-padding-xs tn-margin">
					<view class="justify-content-item tn-text-center tn-flex" style="padding: 25rpx 30rpx">
						<tn-avatar-group :lists="latestUserAvatar" size="sm"></tn-avatar-group>
						<text class="tn-padding-xs">{{totalCount}} 人</text>
					</view>
					<view class="justify-content-item tn-text-right tn-padding-top-sm">
						<view class="tn-text-bold">
							人气 · 排行榜
						</view>
						<view class="tn-text-xs tn-color-gray--dark tn-padding-top-xs">
							积分可兑换精美周边
						</view>
					</view>
					<view class="justify-content-item tn-text-right tn-margin-right tn-padding-top-lg">
						<text class="tn-icon-right tn-color-gray--dark"></text>
					</view>
				</view>
			</view>
			<!-- 精选VR全景 -->
			<view class="tn-flex tn-flex-row-between tn-margin-top">
				<view class="justify-content-item tn-margin tn-text-bold tn-text-xl">
					精选VR全景
				</view>
			</view>
			<view class="tn-strip-bottom">
				<vrList :list="vrList"></vrList>
			</view>
			<!-- 精选目的地 -->
			<view class="tn-flex tn-flex-row-between tn-margin-top-xs">
				<view class="justify-content-item tn-margin tn-text-bold tn-text-xl">
					精选目的地
				</view>
			</view>
			<view class="tn-strip-bottom">
				<view class="hot_top">
					<view v-for="item of hotList" :key="item.id" class="hotImgList"
						@click="tn('/minePages/found/found?address='+item.city)">
						<image :src="item.url" class="img" style="height: 120px;width: 85px;"></image>
						<text class="city">{{item.city}}</text>
					</view>
				</view>
			</view>
			<view class="tn-flex tn-flex-direction-column tn-margin-top-sm tn-margin-bottom">
				<view class="title_love">
					<image src="https://image3.suning.cn/uimg/cms/img/157793128909842388.png"></image>
				</view>
				<scroll-view class="custom-tabbar-page" scroll-y enable-back-to-top
					@scrolltolower="tabbarPageScrollLower">
					<waterFall :list="list"></waterFall>
				</scroll-view>
			</view>
			<view class='tn-tabbar-height'></view>
		</view>

		<!-- 视频，采用轮播形式，放10个视频左右-->
		<view class="" v-if="current==1">
			<swiper class="card-swiper" :circular="true" vertical="true" :autoplay="false" duration="500"
				interval="5000" @change="cardSwiper">
				<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
					<view class="swiper-item image-banner">
						<video :id="`video-${item.id}`" :src="item.url" :show-center-play-btn="true" loop
							:autoplay="false" style="height: 89vh;width: 100vw;" :show-fullscreen-btn="false"
							:enable-play-gesture="true"></video>
						<view style="position: absolute;top: 752rpx;left:640rpx" @click="goUserHome(item.userId)">
							<tn-avatar :src="item.avatar" backgroundColor="tn-color-white" size="lg" border
								borderColor="#2b7dcb"></tn-avatar>
						</view>
						<view @click="likeVideo(item.id,item.isLike)"
							style="position: absolute;top: 870rpx;left:650rpx;display: flex;flex-direction: column;align-items: center;">
							<text class="tn-icon-like-fill" style="font-size: 36px;"
								:style="{color:item.isLike?color:color1}"></text>
							<text style="font-size: 11px;color: #FFF;margin-top: 6rpx;" v-if="item.liked<1">赞</text>
							<text style="font-size: 12px;color: #FFF;margin-top: 6rpx;"
								v-if="item.liked>0&&item.liked<9999">{{item.liked}}</text>
							<text style="font-size: 12px;color: #FFF;margin-top: 6rpx;margin-left: 12rpx;"
								v-if="item.liked>9999&&item.liked<99999">{{(Math.floor(item.liked/1000)/10) + '万'}}</text>
							<text style="font-size: 12px;color: #FFF;margin-top: 6rpx;margin-left: 3rpx;"
								v-if="item.liked>99999">{{(Math.floor(item.liked/1000)/10) + '万'}}</text>
						</view>
						<view @click="openComment(item.id,item.comment,item.userId)"
							style="position: absolute;top: 1000rpx;left:650rpx;display: flex;flex-direction: column;align-items: center;">
							<text class="tn-icon-comment" style="font-size: 35px;color: #fff;"></text>
							<text style="font-size: 10px;color: #FFF;margin-top: 6rpx;" v-if="item.comment<1">抢首评</text>
							<text style="font-size: 12px;color: #FFF;margin-top: 6rpx;"
								v-if="item.comment>0&&item.comment<9999">{{item.comment}}</text>
							<text style="font-size: 12px;color: #FFF;margin-top: 6rpx;margin-left: 12rpx;"
								v-if="item.comment>9999&&item.comment<99999">{{(Math.floor(item.comment/1000)/10) + '万'}}</text>
							<text style="font-size: 12px;color: #FFF;margin-top: 6rpx;margin-left: 3rpx;"
								v-if="item.comment>99999">{{(Math.floor(item.comment/1000)/10) + '万'}}</text>
						</view>
						<view @click="collectionVideo(item.id,item.isCollection)"
							style="position: absolute;top: 1125rpx;left:652rpx;display: flex;flex-direction: column;align-items: center;">
							<text class="tn-icon-star-fill" style="font-size: 33px;"
								:style="{color:item.isCollection?'#fdba13':'#ffffff'}"></text>
							<text style="font-size: 11px;color: #FFF;margin-top: 6rpx;"
								v-if="item.collection<1">收藏</text>
							<text style="font-size: 12px;color: #FFF;margin-top: 6rpx;"
								v-if="item.collection>0&&item.collection<9999">{{item.collection}}</text>
							<text style="font-size: 12px;color: #FFF;margin-top: 6rpx;margin-left: 12rpx;"
								v-if="item.collection>9999&&item.collection<99999">{{(Math.floor(item.collection/1000)/10) + '万'}}</text>
							<text style="font-size: 12px;color: #FFF;margin-top: 6rpx;margin-left: 3rpx;"
								v-if="item.collection>99999">{{(Math.floor(item.collection/1000)/10) + '万'}}</text>
						</view>
						<view style="position: absolute;top: 1260rpx;left: 10rpx;">
							<text style="color: #fff;margin-left: 10rpx;">@{{item.username}}</text>
							<view style="margin-top: 10rpx;">
								<text style="color: #fff;margin-left: 10rpx;" class="u-line-2">
									{{item.title}}
								</text>
								<view>
									<text style="color: #fff;margin-left: 10rpx;" class="u-line-1">
										{{item.tag?'#'+item.tag:''}}
									</text>
								</view>
							</view>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view>
			<tn-popup v-model="showCommentList" mode="bottom" width="750rpx" :safeAreaInsetBottom="true"
				height="1100rpx" :closeBtn="true" @open="loadComment" @close="closeComment">
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
								<text
									style="font-size: 12px;margin-left: 22rpx;font-weight: 700;">·{{item.province}}</text><text
									style="font-size: 12px;margin-left: 22rpx;font-weight: 500;color: black;"
									@click="reply(item.username,item.id)">回复</text>
								<text style="font-size: 12px;margin-left: 10rpx;font-weight: 500;color: black;"
									@click="report" v-if="item.userId!=userId">举报</text>
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
							<text class="tn-text-bold tn-padding-right-xs"
								style="margin-left: 8rpx;">回复{{children.target}}:</text><text
								style="line-height: 40rpx;">{{children.content}}</text>
							<view class="tn-flex tn-flex-row-between tn-margin-top-xs">
								<view class="justify-content-item tn-text-xs tn-color-gray" style="padding-top: 5rpx;">
									{{handlePublishTimeDesc(children.createTime)}}<text
										style="font-size: 12px;margin-left: 22rpx;font-weight: 700;">·{{children.province}}</text>
									<text style="font-size: 12px;margin-left: 22rpx;font-weight: 500;color: black;"
										@click="reply(children.username,item.id)">回复</text>
									<text style="font-size: 12px;margin-left: 10rpx;font-weight: 500;color: black;"
										@click="report" v-if="children.userId!=userId">举报</text>
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
							<u--input placeholder="善语结善缘,恶言伤人心" border="surround" shape="circle" disabled></u--input>
						</view>
					</view>
					<view class="tn-tabbar-height"></view>
				</scroll-view>
			</tn-popup>
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
		<!-- 活动 -->
		<view class="" v-if="current==2">
			<view class="tn-flex tn-flex-direction-column tn-margin-top-sm tn-margin-bottom">
				<view class="tn-margin-bottom-lg" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
					<block v-for="(item,index) in content" :key="index">
						<view class="blogger__item">
							<view class="blogger__author tn-flex tn-flex-row-between tn-flex-col-center">
								<view class="justify__author__info">
									<view class="tn-flex tn-flex-row-center">
										<view class="tn-flex tn-flex-row-center tn-flex-col-center">
											<view class="" @click="goUserHome(item.userId)">
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
								<view @click="openShow(item)" v-if="userId===item.userId"
									class="blogger__author__btn justify-content-item tn-flex-col-center tn-flex-row-center">
									<text class="tn-icon-delete tn-color-gray tn-text-bold tn-text-xxl"></text>
								</view>
							</view>
							<view>
								<u-modal :show="deleteShow" title="确定要删除你发布这个活动吗?" @confirm="deleteById"
									:asyncClose="true" :showCancelButton="true" @cancel="deleteShow=false"
									cancelColor="#ff0000" confirmColor="#4c99fe"></u-modal>
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
											style="color: green;font-size: 34rpx;"></text>结伴地点: {{item.activityAddress}}
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
								<view v-else class="tn-padding-top-xs" @click="tn('/circlePages/reserve?id='+item.id)">
									<tn-grid hoverClass="none" :col="3">
										<block v-for="(image_item,image_index) in item.mainImage" :key="image_index">
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

		<!-- 压屏窗-->
		<tn-landscape :show="show2" @close="closeLandscape" closePosition="bottom" :closeSize="60">

			<!-- 方式9 start-->
			<view class="tn-flex" style="margin-bottom: 80rpx;padding-top: 46vh;">
				<view class="tn-flex-1 tn-margin-xs tn-radius" @click="navEdit">
					<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
						<view
							class="icon9__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-red tn-color-white">
							<view class="tn-icon-camera-fill"></view>
						</view>
						<view class="tn-color-white tn-text-sm tn-text-center">
							<text class="tn-text-ellipsis">发游记</text>
						</view>
					</view>
				</view>
				<view class="tn-flex-1 tn-margin-xs tn-radius" @click="navStrategy">
					<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
						<view
							class="icon9__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-green tn-color-white">
							<view class="tn-icon-theme-fill"></view>
						</view>
						<view class="tn-color-white tn-text-sm tn-text-center">
							<text class="tn-text-ellipsis">发攻略</text>
						</view>
					</view>
				</view>
				<view class="tn-flex-1 tn-margin-xs tn-radius" @click="navBuild">
					<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
						<view
							class="icon9__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-cyan tn-color-white">
							<view class="tn-icon-video-fill"></view>
						</view>
						<view class="tn-color-white tn-text-sm tn-text-center">
							<text class="tn-text-ellipsis">发视频</text>
						</view>
					</view>
				</view>
				<view class="tn-flex-1 tn-margin-xs tn-radius" @click="navCreate">
					<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
						<view
							class="icon9__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-blue tn-color-white">
							<view class="tn-icon-activity"></view>
						</view>
						<view class="tn-color-white tn-text-sm tn-text-center">
							<text class="tn-text-ellipsis">发结伴</text>
						</view>
					</view>
				</view>
			</view>
		</tn-landscape>
		<u-modal :show="faceShow" title="系统提示" :content='content' @cancel="faceShow=false" confirmText="前去认证"
			cancelText="下次认证" showCancelButton @confirm="goFace" cancelColor="#dc423c"></u-modal>
		<view class="edit tnxuanfu" @tap="showLandscape">
			<view class="bg0 pa">
				<view class="bg1">
					<image src="https://resource.tuniaokj.com/images/my/my6.png" class="button-shop shadow"></image>
				</view>
			</view>
			<view class="hx-box pa">
				<view class="pr">
					<view class="hx-k1 pa0">
						<view class="span"></view>
					</view>
					<view class="hx-k2 pa0">
						<view class="span"></view>
					</view>
					<view class="hx-k3 pa0">
						<view class="span"></view>
					</view>
					<view class="hx-k4 pa0">
						<view class="span"></view>
					</view>
					<view class="hx-k5 pa0">
						<view class="span"></view>
					</view>
					<view class="hx-k6 pa0">
						<view class="span"></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import userLoginVue from '../../components/user-login/user-login.vue';
	export default {
		name: 'CirclePage',
		data() {
			return {
				cardCur: 0,
				height: 800,
				swiperList: [],
				vrList: [],
				showReport: false,
				placeholder: '',
				showSubmitPopup: false,
				showReplyPopup: false,
				hotList: [],
				list: [],
				showCommentList: false,
				focus: true,
				current: 0,
				deleteShow: false,
				faceShow: false,
				content: '',
				deleteId: '',
				userComment: '',
				pageNum: 1,
				pageSize: 6,
				pageSwiperNum: 1,
				pageSwiperSize: 100,
				videoUserId: '',
				joinedUserAvatar: [],
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
				scrollList: [{
						name: '游记'
					},
					{
						name: '视频'
					},
					{
						name: '结伴'
					}
				],
				options: [{
					text: '删除',
					style: {
						backgroundColor: '#dc423c',
					},
				}],
				content: [],
				uId: '',
				totalCount: '',
				latestUserAvatar: [],
				// 内容默认隐藏显示的高度
				contentHideShowHeight: 0,
				adAutoplay: false,
				/* 压屏窗*/
				show2: false,
				liked: false,
				like: false,
				hideen: false,
				maskCloseable: true,
				userId: '',
				userAvatar: '',
				color: '#fe3157',
				color1: '#ffffff',
				likeList: [],
				commentList: [],
				commentTotal: 0,
				videoId: '',
				activityKey: '',
				parentId: '',
				target: '',
				longitude: '', //经度
				latitude: '', //纬度
			}
		},
		onLoad() {
			this.initContentData()
			this.contentHideShowHeight = uni.upx2px(56) * 3
		},
		created() {
			this.userId = uni.getStorageSync('userId');
			this.getTotalUserCount();
			this.queryUserById();
			this.getHotCity()
			this.getLocation()
			this.getAuthorize()
			this.getVrList()
		},
		onShow() {
			this.adAutoplay = true;
		},
		onHide() {
			this.adAutoplay = false
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
		methods: {
			getAuthorize() {
				// #ifdef MP-WEIXIN
				uni.authorize({
					scope: 'scope.userLocation',
					success() { //1.1 允许授权
						uni.getLocation()
					},
					fail() { //1.2 拒绝授权
						uni.showModal({
							content: '检测到您没打开获取信息功能权限，是否去设置打开？',
							confirmText: "确认",
							cancelText: '取消',
							success: (res) => {
								if (res.confirm) {
									uni.openSetting({
										success: (res) => {
											console.log(res);
											this.getLocation();
										}
									})
								} else {
									console.log('取消');
									return false;
								}
							}
						})
						return false;
					}
				})
				// #endif
			},
			getLocation() {
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
			//举报评论
			report() {
				this.showReport = true
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
			//回复别人
			async reply(target, parentId) {
				this.placeholder = '回复 @' + target
				this.$nextTick(() => {
					this.target = target
					this.parentId = parentId
				})
				this.showReplyPopup = true
			},
			//删除评论
			async deleteComment(id) {
				const {
					data
				} = await uni.$http.delete('/video/comment/deleteComment/' + id)
				if (data.code === 1) {}
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
					this.loadComment()
					this.commentTotal++
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
					this.loadComment()
					this.commentTotal++
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
			closeSubmitPopup() {
				this.userComment = ''
				this.height = 800
			},
			closeReplyPopup() {
				this.userComment = ''
				this.height = 800
			},
			openSubmitPopup() {

			},
			//发布评论
			submitComment() {
				this.showSubmitPopup = true
				this.$nextTick(() => {
					this.$refs.textarea.focus()
				})
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
			tn(e) {
				uni.navigateTo({
					url: e,
				});
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
			openShow(item) {
				this.deleteShow = true
				this.$nextTick(() => {
					this.deleteId = item.id
				})
			},
			goUserHome(userId) {
				uni.navigateTo({
					url: '/searchPages/userHome?userId=' + userId
				})
			},
			//用户自己删除自己发表的活动
			async deleteById() {
				const {
					data
				} = await uni.$http.delete('/activity/deleteById/' + this.deleteId)
				if (data.code === 1) {
					this.getActivityList()
					this.deleteShow = false
					uni.$showMsg('删除成功啦！')
				}
			},
			//关闭评论后
			closeComment() {
				// #ifdef MP-WEIXIN
				this.$parent.showTabbar()
				// #endif
				setTimeout(() => {
					this.getVideoList()
				}, 200)
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
			//查看评论列表
			openComment(videoId, commentTotal, videoUserId) {
				this.$nextTick(() => {
					this.videoId = videoId
					this.commentTotal = commentTotal
					this.videoUserId = videoUserId
				})
				// #ifdef MP-WEIXIN
				this.$parent.hiddenTabbar()
				// #endif
				this.showCommentList = true
			},
			async getActivityList() {
				const {
					data
				} = await uni.$http.get(`/activity/getActivityList?pageNum=1&pageSize=100&activityName=${this.activityKey}`)
				const obj = data.data.activityList.map(item => {
					item.mainImage = item.activityImage.split(',')
					return item
				})
				this.content = obj
			},

			//获取用户信息展示
			async queryUserById() {
				const {
					data
				} = await uni.$http.get('/user/queryUserById?userId=' + this.userId)
				this.userAvatar = data.data.avatar
			},
			async getHotCity() {
				const {
					data
				} = await uni.$http.get('/scenic/getHotCity')
				if (data.code === 1) {
					this.hotList = data.data.records
				} else {
					uni.$showMsg('获取目的地失败~')
				}
			},
			async getBlogList() {
				if (!uni.getStorageSync('userId')) {
					this.uId = 0
				} else {
					this.uId = uni.getStorageSync('userId')
				}
				const {
					data
				} = await uni.$http.get('/getRecommend/recommend/' + this.uId)
				data.data.forEach(item => item.images = item.images.split(",")[0]);
				this.list = data.data

			},
			async getVrList() {
				const {
					data
				} = await uni.$http.get('/vr/getVrList')
				this.vrList = data.data
			},
			async getTotalUserCount() {
				const {
					data
				} = await uni.$http.get('/user/getTotalUserCount')
				this.totalCount = data.data.total
				for (let index = 0; index < data.data.avatar.length; index++) {
					this.latestUserAvatar.push({
						src: data.data.avatar[index]
					})
				}
			},
			//获取视频列表
			async getVideoList() {
				// this.pageSwiperNum=1
				const {
					data
				} = await uni.$http.get('/video/getVideoList?pageNum=' + this.pageSwiperNum + '&pageSize=' +
					this.pageSwiperSize)
				this.swiperList = data.data
			},
			async likeVideo(videoId, isLike) {
				const {
					data
				} = await uni.$http.put('/video/like/' + videoId)
				if (data.code === 1) {
					if (isLike) {
						this.getVideoList()
						uni.showToast({
							title: '取消点赞成功~',
							icon: 'success',
							duration: 500
						})
					} else {
						this.getVideoList()
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
						this.getVideoList()
						uni.showToast({
							title: '取消收藏成功~',
							icon: 'success',
							duration: 600
						})
					} else {
						this.getVideoList()
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
			// cardSwiper
			async cardSwiper(e) {
				this.cardCur = e.detail.current
				// if (this.cardCur / 4 === 0) {
				// 	this.pageSwiperNum += 1
				// 	const {
				// 		data
				// 	} = await uni.$http.get('/video/getVideoList?pageNum=' + this.pageSwiperNum +
				// 		'&pageSize=' +
				// 		this
				// 		.pageSwiperSize)
				// 	this.swiperList = [...this.swiperList, ...data.data]
				// }
				for (let i = 0; i < this.swiperList.length; i++) {
					const videoContext = uni.createVideoContext(`video-${this.swiperList[i]['id']}`, this)
					if (i === this.cardCur) {
						// #ifdef H5
						videoContext.play()
						// #endif
						// #ifndef H5
						videoContext.play()
						// #endif
					} else {
						// #ifdef MP-WEIXIN
						videoContext.stop()
						// #endif
						// #ifndef MP-WEIXIN
						videoContext.pause()
						// #endif
					}
				}
			},
			// 暂停所有视频
			stopAllVideo() {
				this.current = 0
			},

			// tab选项卡切换
			tabChange(index) {
				this.current = index
				if (this.current === 0) {
					this.getBlogList()
					this.getVrList()
					this.getHotCity()
				} else if (this.current === 1) {
					this.getVideoList();
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
			// 震动跳转
			navEdit(e) {
				if (!uni.getStorageSync('token')) {
					uni.navigateTo({
						url: '/pages/login/login?index=1'
					})
					uni.$showMsg('亲，先登录哦~')
					return
				}
				wx.vibrateLong();
				uni.navigateTo({
					url: '/circlePages/edit'
				})
			},
			navStrategy(e) {
				if (!uni.getStorageSync('token')) {
					uni.navigateTo({
						url: '/pages/login/login?index=1'
					})
					uni.$showMsg('亲，先登录哦~')
					return
				}
				wx.vibrateLong();
				uni.navigateTo({
					url: '/activityPages/editor/editor'
				})
			},
			// 震动跳转
			async navCreate(e) {
				if (!uni.getStorageSync('token')) {
					uni.navigateTo({
						url: '/pages/login/login?index=1'
					})
					uni.$showMsg('亲，先登录哦~')
					return
				}
				const {
					data
				} = await uni.$http.get('/activityApply/selectUserIsFace')
				if (data.code === 1) {
					wx.vibrateLong();
					uni.navigateTo({
						url: '/circlePages/create'
					})
				} else {
					//未认证
					this.content = data.msg
					this.show2 = false
					this.faceShow = true
				}
			},
			goFace() {
				this.faceShow = false
				uni.navigateTo({
					url: '/minePages/face-authentication/face-authentication?index=1'
				})
			},
			// 震动跳转
			navBuild(e) {
				if (!uni.getStorageSync('token')) {
					uni.navigateTo({
						url: '/pages/login/login?index=1'
					})
					uni.$showMsg('亲，先登录哦~')
					return
				}
				wx.vibrateLong();
				uni.navigateTo({
					url: '/circlePages/build'
				})
			},
			// 处理内容，给内容添加对应的标识信息
			initContentData() {
				this.content.forEach((item, index) => {
					// 是否需要隐藏内容
					item.hideContent = false
					// 显示所有内容
					item.showAllContent = false
					// 内容容器的实际高度
					item.contentContainerHeight = 0
					// 内容容器是否初始化完成
					item.contentContainerInit = false
					this.$set(this.content, index, item)
				})
			},
			// 获取内容容器的信息
			getContentRectInfo() {
				let contentRect = {}
				const query = uni.createSelectorQuery().in(this)
				// 筛选出存在内容的数据
				this.content.forEach((item, index) => {
					if (item?.content) {
						query.select(`#blogger__content--${index}`).boundingClientRect()
						contentRect[index] = item
					}
				})
				// 获取所有内容的宽高信息
				query.exec(res => {
					if (!res) {
						setTimeout(() => {
							this.getContentRectInfo()
						}, 10)
						return
					}
					res.map((item) => {
						// console.log(item.height, this.contentHideShowHeight);
						// 获取对应的标号
						const id = item.id
						const idIndex = /blogger__content--(\d)/.exec(id)[1]
						let contentItem = this.content[idIndex]
						contentItem.hideContent = item.height > this.contentHideShowHeight
						contentItem.showAllContent = false
						contentItem.contentContainerHeight = item.height
						contentItem.contentContainerInit = true
						this.$set(this.content, idIndex, contentItem)

						// console.log(/blogger__content--(\d)/.exec(id)[1]);
					})
				})
			},
			// 切换内容的显示与隐藏
			switchContentShowStatus(index) {
				const contentItem = this.content[index]
				contentItem.showAllContent = !contentItem.showAllContent
				this.$set(this.content, index, contentItem)
			},

			// 弹出压屏窗
			showLandscape() {
				this.openLandscape()
			},
			// 打开压屏窗
			openLandscape() {
				// wx.vibrateLong();
				this.show2 = true
			},
			// 关闭压屏窗
			closeLandscape() {
				this.show2 = false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.template-circle {
		max-height: 100vh;
	}

	.text-show {
		display: -webkit-box;
		text-overflow: ellipsis;
		overflow: hidden;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.tag {
		margin-top: 20px;
	}

	::v-deep .u-tag--medium.data-v-2fd891bb {
		margin-left: 2px !important;
	}

	.u-page {
		padding: 0;
	}

	.u-demo-block__title {
		padding: 2px 0 2px 2px;
	}

	.swipe-action {
		&__content {
			padding: 5rpx 0;

			&__text {
				font-size: 15px;
				color: $u-main-color;
				padding-left: 30rpx;
			}
		}
	}

	.title_love {
		color: white;
		padding: 4px 0;
		margin-top: 10rpx;

		image {
			width: 100%;
			height: 32px;
		}
	}

	.tn-tabbar-height {
		min-height: 130rpx;
		height: calc(140rpx + env(safe-area-inset-bottom) / 2);
	}

	/* 自定义导航栏内容 start */
	.custom-nav {
		height: 100%;

		&__back {
			margin: auto 5rpx;
			font-size: 40rpx;
			margin-right: 10rpx;
			margin-left: 30rpx;
			flex-basis: 5%;
		}

		&__search {
			flex-basis: 60%;
			width: 100%;
			height: 100%;

			&__box {
				width: 100%;
				height: 70%;
				padding: 10rpx 0;
				margin: 0 30rpx;
				border-radius: 60rpx 60rpx 0 60rpx;
				font-size: 24rpx;
			}

			&__icon {
				padding-right: 10rpx;
				margin-left: 20rpx;
				font-size: 30rpx;
			}

			&__text {
				color: #AAAAAA;
			}
		}
	}

	.logo-image {
		width: 60rpx;
		height: 60rpx;
		position: relative;
		margin-top: -15rpx;
	}

	.logo-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 50%;
	}

	/* 自定义导航栏内容 end */
	/* 博主头像 start*/
	.image-circle {
		// padding: 95rpx;
		width: 190rpx;
		height: 190rpx;
		font-size: 40rpx;
		font-weight: 300;
		position: relative;
	}

	.image-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 10rpx;
	}

	//本月热门
	.hot_top {
		margin-top: 10rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		margin-left: 10rpx;

		.hotImgList {
			position: relative;
		}

		.img {
			width: 40%;
			background-color: white;
			border-radius: 10px;
			overflow: hidden;
			margin-top: 10rpx;
		}

		.city {
			position: absolute;
			bottom: 13px;
			left: 25px;
			color: #fff;
		}
	}

	/* 文章内容 start*/
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

	/* 游记展示 start */
	.shopList {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;

		.showListItem {
			width: 45%;
			background-color: white;
			border-radius: 5px;
			overflow: hidden;
			margin-bottom: 8px;

			.title {
				font-size: 15px;
				line-height: 18px;
				font-weight: bold;
				color: #333;
				width: 100%;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 1;
				overflow: hidden;
				padding: 0 2px;
				box-sizing: border-box;
				margin-bottom: 2px;
			}
		}

		image {
			width: 100%;
			border-radius: 5%;
			height: 260px;
		}
	}

	.user {
		image {
			border-radius: 50%;
			width: 30px;
			height: 30px;
			margin-right: 4px;
			vertical-align: middle;
		}

		.username {
			vertical-align: middle;
		}
	}

	/* 文章内容 end*/

	/* 间隔线 start*/
	.tn-strip-bottom {
		width: 100%;
		border-bottom: 20rpx solid rgba(241, 241, 241, 0.8);
	}

	/* 间隔线 end*/

	/* 广告内容 start */
	.ad-image {
		width: 80rpx;
		height: 80rpx;
		position: relative;
	}

	.ad-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 20%;
	}

	/* 自定义导航栏内容 end */


	/* 全屏轮播  start*/
	.card-swiper {
		height: 100vh !important;
	}

	.card-swiper swiper-item {
		width: 750rpx !important;
		left: 0rpx;
		box-sizing: border-box;
		overflow: initial;
	}

	.card-swiper swiper-item .swiper-item {
		width: 100%;
		display: block;
		height: 100vh;
		border-radius: 0rpx;
		transform: scale(1);
		transition: all 0.2s ease-in 0s;
		overflow: hidden;
	}

	.card-swiper swiper-item.cur .swiper-item {
		transform: none;
		transition: all 0.2s ease-in 0s;
	}

	.card-swiper swiper-item .swiper-item-png {
		margin-top: -50vh;
		width: 100%;
		display: block;
		border-radius: 0rpx;
		transform: translate(1040rpx, 20rpx) scale(0.5, 0.5);
		transition: all 0.6s ease 0s;
		// overflow: hidden;
	}

	.card-swiper swiper-item.cur .swiper-item-png {
		margin-top: -100vh;
		width: 900rpx;
		transform: translate(-80rpx, 0rpx) scale(1, 1);
		transition: all 0.6s ease 0s;
	}

	.image-banner {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.image-banner image {
		width: 100%;
	}

	/* 轮播指示点 start*/
	.indication {
		z-index: 9999;
		width: 100%;
		height: 36rpx;
		position: fixed;
		// display:flex;
		display: block;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.spot {
		background-color: #000;
		opacity: 0.3;
		width: 10rpx;
		height: 10rpx;
		border-radius: 20rpx;
		margin: 20rpx 0 !important;
		left: 95vw;
		top: -60vh;
		position: relative;
	}

	.spot.active {
		opacity: 0.6;
		height: 30rpx;
		background-color: #000;
	}

	/* 资讯主图 start*/
	.image-article {
		border-radius: 8rpx;
		border: 1rpx solid #F8F7F8;
		width: 200rpx;
		height: 200rpx;
		position: relative;
	}

	.image-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 10rpx;
	}

	.article-shadow {
		border-radius: 15rpx;
		box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
	}

	/* 文字截取*/
	.clamp-text-1 {
		-webkit-line-clamp: 1;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.clamp-text-2 {
		-webkit-line-clamp: 2;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	/* 标签内容 start*/
	.tn-tag-content {
		&__item {
			display: inline-block;
			line-height: 35rpx;
			padding: 5rpx 25rpx;

			&--prefix {
				padding-right: 10rpx;
			}
		}
	}


	/* 图标容器9 start */
	.icon9 {
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
				width: 110rpx;
				height: 110rpx;
				font-size: 65rpx;
				border-radius: 50%;
				margin: 20rpx 40rpx;
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
					background-image: url(https://resource.tuniaokj.com/images/cool_bg_image/icon_bg5.png);
				}
			}
		}
	}


	/* 悬浮 */
	.tnxuanfu {
		animation: suspension 3s ease-in-out infinite;
	}

	@keyframes suspension {

		0%,
		100% {
			transform: translateY(0);
		}

		50% {
			transform: translateY(-0.8rem);
		}
	}

	/* 悬浮按钮 */
	.button-shop {
		width: 90rpx;
		height: 90rpx;
		display: flex;
		flex-direction: row;
		position: fixed;
		/* bottom:200rpx;
      right: 20rpx; */
		left: 5rpx;
		top: 5rpx;
		z-index: 1001;
		border-radius: 100px;
		opacity: 0.9;
	}


	/* 按钮 */
	.edit {
		bottom: 300rpx;
		right: 75rpx;
		position: fixed;
		z-index: 9999;
	}


	.pa,
	.pa0 {
		position: absolute
	}

	.pa0 {
		left: 0;
		top: 0
	}


	.bg0 {
		width: 100rpx;
		height: 100rpx;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.bg1 {
		width: 100%;
		height: 100%;
	}




	.hx-box {
		top: 50%;
		left: 50%;
		width: 100rpx;
		height: 100rpx;
		transform-style: preserve-3d;
		transform: translate(-50%, -50%) rotateY(75deg) rotateZ(10deg);
	}

	.hx-box .pr {
		width: 100rpx;
		height: 100rpx;
		transform-style: preserve-3d;
		animation: hxz 20s linear infinite;
	}

	@keyframes hxz {
		0% {
			transform: rotateX(0deg);
		}

		100% {
			transform: rotateX(-360deg);
		}
	}



	.hx-box .pr .pa0 {
		width: 100rpx;
		height: 100rpx;
		/* border: 4px solid #5ec0ff; */
		border-radius: 1000px;
	}

	.hx-box .pr .pa0 .span {
		display: block;
		width: 100%;
		height: 100%;
		background: url(https://resource.tuniaokj.com/images/cool_bg_image/arc4.png) no-repeat center center;
		background-size: 100% 100%;
		animation: hx 4s linear infinite;
	}

	@keyframes hx {
		to {
			transform: rotate(360deg);
		}
	}

	.hx-k1 {
		transform: rotateX(-60deg) rotateZ(-60deg)
	}

	.hx-k2 {
		transform: rotateX(-30deg) rotateZ(-30deg)
	}

	.hx-k3 {
		transform: rotateX(0deg) rotateZ(0deg)
	}

	.hx-k4 {
		transform: rotateX(30deg) rotateZ(30deg)
	}

	.hx-k5 {
		transform: rotateX(60deg) rotateZ(60deg)
	}

	.hx-k6 {
		transform: rotateX(90deg) rotateZ(90deg)
	}
</style>