<template>
	<view class="message tn-safe-area-inset-bottom">
		<tn-nav-bar :isBack="false" :bottomShadow="false" backgroundColor="none">
			<view class="custom-nav tn-flex tn-flex-col-center tn-flex-row-left">
				<text class="tn-icon-scan tn-color-cat" style="font-size: 50rpx;margin-left:80rpx;"
					@click="openScan"></text>
				<view slots="right" class="custom-nav__back" style="width: 320rpx;margin-left: 60rpx;">
					<tn-tabs :list="list" :isScroll="false" :current="current" name="tabName" @change="change"
						activeColor="#000" :bold="true" backgroundColor="#FFFFFF99"></tn-tabs>
				</view>
			</view>
		</tn-nav-bar>
		<view class="tn-margin-top-sm tn-padding-bottom-lg" v-if="current===0">
			<view class="tn-flex tn-message-fixed" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
				<view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius">
					<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
						<view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur"
							style="background-image:repeating-linear-gradient(45deg,#ed1c24,#fece12);color: #FFFFFF;">
							<view class="tn-icon-reply">
								<tn-badge backgroundColor="#E72F8C" fontColor="#FFFFFF" :absolute="true" :fontSize="16">
									<text>16</text>
								</tn-badge>
							</view>
						</view>
						<view class="tn-color-black tn-text-center">
							<text class="tn-text-ellipsis">互 动</text>
						</view>
					</view>
				</view>
				<view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius">
					<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
						<view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur"
							style="background-image: repeating-linear-gradient(45deg,#ca26ff,#f360a7);color: #FFFFFF;">
							<view class="tn-icon-like">
								<tn-badge backgroundColor="#E72F8C" fontColor="#FFFFFF" :absolute="true" :fontSize="16">
									<text>12</text>
								</tn-badge>
							</view>
						</view>
						<view class="tn-color-black tn-text-center">
							<text class="tn-text-ellipsis">爱 心</text>
						</view>
					</view>
				</view>
				<view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius">
					<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
						<view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur"
							style="background-image: repeating-linear-gradient(45deg,#209cff,#68e0cf);color: #FFFFFF;">
							<view class="tn-icon-star">
								<tn-badge backgroundColor="#E72F8C" fontColor="#FFFFFF" :absolute="true" :fontSize="16">
									<text>39</text>
								</tn-badge>
							</view>
						</view>
						<view class="tn-color-black tn-text-center">
							<text class="tn-text-ellipsis">收 藏</text>
						</view>
					</view>
				</view>
				<view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius">
					<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
						<view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur"
							style="background-image: repeating-linear-gradient(45deg,#00c3ff,#58fff5);color: #FFFFFF;">
							<view class="tn-icon-notice">
								<tn-badge backgroundColor="#E72F8C" fontColor="#FFFFFF" :absolute="true" :fontSize="16">
									<text>99+</text>
								</tn-badge>
							</view>
						</view>
						<view class="tn-color-black tn-text-center">
							<text class="tn-text-ellipsis">通 知</text>
						</view>
					</view>
				</view>
			</view>
			<!-- 方式1 end-->
			<view class="tn-safe-area-inset-bottom tn-margin-bottom-sm">
				<scroll-view class="conversations" scroll-y="true">
					<view v-if="conversations.length > 0">
						<view class="scroll-item" v-for="(conversation, key) in conversations" :key="key">
							<view class="item-head">
								<image :src="conversation.data.avatar" class="head-icon"></image>
								<view class="item-head_unread" v-if="conversation.unread">{{ conversation.unread }}
								</view>
							</view>
							<view class="scroll-item_info" @click="chat(conversation)">
								<view class="item-info-top">
									<text class="item-info-top_name">{{ conversation.data.name }}</text>
									<view class="item-info-top_time">
										{{ formatDate(conversation.lastMessage.timestamp) }}
									</view>
								</view>
								<view class="item-info-bottom">
									<view class="item-info-bottom-item">
										<view class="item-info-top_content" v-if="!conversation.lastMessage.recalled">
											<text class="unread-text">
												{{ conversation.lastMessage.read === false && conversation.lastMessage.senderId === currentUser.userId.toString() ? '[未读]' : '' }}
											</text>
											<text
												v-if="conversation.lastMessage.senderId === currentUser.userId.toString()">我:
											</text>
											<text
												v-else>{{ conversation.type === 'group' ? conversation.lastMessage.senderData.name : conversation.data.name }}:
											</text>
											<text
												v-if="conversation.lastMessage.type === 'text'">{{ conversation.lastMessage.payload.text }}</text>
											<text v-else-if="conversation.lastMessage.type === 'video'">[视频消息]</text>
											<text v-else-if="conversation.lastMessage.type === 'audio'">[语音消息]</text>
											<text v-else-if="conversation.lastMessage.type === 'image'">[图片消息]</text>
											<text v-else-if="conversation.lastMessage.type === 'file'">[文件消息]</text>
											<text v-else>[[未识别内容]]</text>
										</view>
										<view class="item-info-top_content" v-else>
											<text>
												{{conversation.lastMessage.recaller.id === currentUser.userId.toString() ? '你' : conversation.lastMessage.recaller.data.name}}撤回了一条消息
											</text>
										</view>
										<view class="item-info-bottom_action" @click.stop="showAction(conversation)">
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
					<view class="no-conversation" v-else>当前没有会话</view>
					<view class="action-container" v-if="actionPopup.visible">
						<view class="layer" @click="actionPopup.visible = false"></view>
						<view class="action-box">
							<view class="action-item" @click="topConversation">
								{{ actionPopup.conversation.top ? '取消置顶' : '置顶聊天' }}
							</view>
							<view class="action-item" @click="deleteConversation">删除聊天</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<view v-if="current===1">
			<view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
				<liu-indexed-list :dataList="friendsList"></liu-indexed-list>
			</view>
		</view>
		<view v-if="current===2">
			<view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
				<view class="contacts">
					<view class="contacts-container">
						<view class="user-list">
							<view class="user-list-item" v-for="(group, id) in groups" :key="id" @click="groupChat(group)">
								<view class="user-item-avatar">
									<image :src="group.avatar" />
								</view>
								<view class="user-item-info">
									<span class="user-item-info__name">{{ group.name }}</span>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<style lang="scss" scoped>
	::v-deep .tn-custom-nav-bar__bar__action--nav-back.data-v-1748c37c {
		font-size: 0 !important;
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
		background: linear-gradient(-120deg, #ffaa7f, #55aaff);
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
	
	.template-message {}
	
	.tn-message-fixed {
		background-color: rgba(255, 255, 255, 1);
		box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
		width: 100%;
		transition: all 0.25s ease-out;
	}
	
	/* 图标容器1 start */
	.icon1 {
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
				width: 90rpx;
				height: 90rpx;
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
					background-image: url(https://resource.tuniaokj.com/images/cool_bg_image/icon_bg5.png);
				}
			}
		}
	}
	
	/* 用户头像 start */
	.logo-image {
		width: 90rpx;
		height: 90rpx;
		position: relative;
	}
	
	.logo-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		// box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.15);
		border-radius: 50%;
		overflow: hidden;
		// background-color: #FFFFFF;
	}
	
	page {
		height: 100%;
	}
	
	.conversations {
		width: 750rpx;
		overflow-x: hidden;
		display: flex;
		flex-direction: column;
	}
	
	
	.conversations .scroll-item {
		height: 152rpx;
		display: flex;
		align-items: center;
		padding-left: 32rpx;
	}
	
	.conversations .scroll-item .head-icon {
		width: 100rpx;
		height: 100rpx;
		margin-right: 28rpx;
	}
	
	.conversations .scroll-item_info {
		height: 151rpx;
		width: 590rpx;
		padding-right: 32rpx;
		border-bottom: 1px solid #EFEFEF;
	}
	
	.conversations .scroll-item_info .item-info-top {
		padding-top: 20rpx;
		height: 60rpx;
		line-height: 60rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	
	}
	
	.conversations .item-info-top_name {
		font-size: 34rpx;
		color: #262628;
	}
	
	.conversations .item-info-top_time {
		font-size: 34rpx;
		color: rgba(179, 179, 179, 0.8);
	}
	
	.conversations .item-info-bottom {
		height: 40rpx;
		line-height: 40rpx;
		overflow: hidden;
	}
	
	.conversations .item-info-bottom-item {
		display: flex;
		justify-content: space-between;
	}
	
	.item-info-bottom .item-info-top_content {
		font-size: 34rpx;
		color: #b3b3b3;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	
	}
	
	.item-info-bottom .item-info-bottom_action {
		width: 50rpx;
		height: 50rpx;
		font-size: 34rpx;
		background: url("https://wangzhenghai-oss.oss-cn-hangzhou.aliyuncs.com/b77c367a-d5bf-4f6f-ac2a-caec8d538019.png") no-repeat center;
		background-size: 28rpx 30rpx;
	}
	
	.no-conversation {
		width: 100%;
		text-align: center;
		height: 80rpx;
		line-height: 80rpx;
		font-size: 34rpx;
		color: #9D9D9D;
	}
	
	.item-head {
		position: relative;
	}
	
	.item-head .item-head_unread {
		padding: 6rpx;
		background-color: #EE593C;
		color: #FFFFFF;
		font-size: 34rpx;
		line-height: 28rpx;
		border-radius: 24rpx;
		min-width: 24rpx;
		min-height: 24rpx;
		text-align: center;
		position: absolute;
		top: 0;
		right: 15rpx;
	}
	
	.action-container {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.action-container .layer {
		position: absolute;
		top: 0;
		left: 0;
		background: rgba(51, 51, 51, 0.5);
		width: 100%;
		height: 100%;
		z-index: 99;
	}
	
	.action-box {
		width: 400rpx;
		height: 240rpx;
		background: #ffffff;
		position: relative;
		z-index: 100;
		border-radius: 20rpx;
		overflow: hidden;
	}
	
	.action-item {
		text-align: center;
		line-height: 120rpx;
		font-size: 34rpx;
		color: #262628;
		border-bottom: 1px solid #EFEFEF;
	}
	
	.unread-text {
		color: #d02129;
	}
	.contacts {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}d
	
	.contacts .contacts-container {
		width: 100%;
		height: 100%;
		overflow: auto;
	}
	
	.contacts .user-list-item {
		height: 132rpx;
		padding-left: 32rpx;
		display: flex;
		align-items: center;
	}
	
	.contacts .contacts-title {
		height: 80rpx;
		line-height: 100rpx;
		font-size: 34rpx;
		color: #666666;
		background: #F3F4F7;
		text-indent: 44rpx;
	}
	
	.contacts .user-list {
		flex-grow: 1;
		background: #ffffff;
		display: flex;
		flex-direction: column;
	}
	
	.contacts .user-item-avatar {
		width: 96rpx;
		height: 96rpx;
		margin-right: 32rpx;
		overflow: hidden;
		position: relative;
	}
	
	.contacts .user-item-avatar image {
		width: 100%;
		height: 100%;
		display: block;
	}
	
	.contacts .user-item-info {
		height: 130rpx;
		padding-right: 32rpx;
		line-height: 88rpx;
		flex-grow: 1;
		border-bottom: 1px solid #EFEFEF;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.contacts .user-item-info__name {
		font-size: 34rpx;
		font-style: normal;
		font-weight: bold;
		color: #262628;
	}
</style>