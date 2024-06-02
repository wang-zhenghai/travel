<template>
	<view class="template-order">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed :isBack="false" :bottomShadow="false" backgroundColor="#FFFFFF">
			<view class="custom-nav tn-flex tn-flex-col-center tn-flex-row-left">
				<!-- 返回按钮 -->
				<view class="custom-nav__back" @tap.stop="goBack">
					<view class="tn-icon-left"></view>
				</view>
				<text style="font-weight: 600;margin-left: 186rpx;">我的兑换</text>
			</view>
		</tn-nav-bar>
		<view class="order--wrap" :style="{top: vuex_custom_bar_height + 'px'}">
			<!-- 顶部标签 -->
			<view class="tn-bg-white">
				<tn-tabs-swiper class="order__tabs" ref="tabs" activeColor="#3165CC" inactiveColor="#080808"
					:list="list" :current="tabsIndex" :isScroll="false" @change="tabsChange"></tn-tabs-swiper>
			</view>
			<!-- 标签内容 -->
			<swiper class="order__swiper" :style="{top: `${swiperTop}px`, height: `${swiperHeight}px`}"
				:current="swiperIndex" @transition="swiperTransition" @animationfinish="swiperAnimationFinish">
				<swiper-item class="order__swiper__item">
					<scroll-view :style="{height: `${swiperHeight}px`}" scroll-y>
						<view v-if="orderList.length===0" style="margin-top: 300rpx;">
							<tn-empty mode="order"></tn-empty>
						</view>
						<view v-for="item in orderList" :key="item.id" class="order__item">
							<view
								class="order__item__head tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-between">
								<view class="order__item__head__title">旅行攻略官方<text
										class="order__item__head__title--right-icon tn-icon-right"></text></view>
								<view class="order__item__head__status" v-if="item.status===0">待发货</view>
								<view class="order__item__head__status" v-if="item.status===1">运输中</view>
								<view class="order__item__head__status" v-if="item.status===2">待收货</view>
								<view class="order__item__head__status" v-if="item.status===3">完成</view>
							</view>
							<view
								class="order__item__content tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-center">
								<view class="order__item__content__image">
									<image :src="item.image" mode="scaleToFill"></image>
								</view>
								<view class="order__item__content__title">
									{{item.goodsDesc}}
								</view>
								<view
									class="order__item__content__info tn-flex tn-flex-direction-column tn-flex-col-center tn-flex-row-center">
									<view class="order__item__content__info__price">
										<text class="order__item__content__info__price--unit">￥</text>
										<text
											class="order__item__content__info__price__value--integer">{{item.price}}</text>
										<text class="order__item__content__info__price__value--decimal">.00</text>
									</view>
									<view class="order__item__content__info__count">
										<text>共1{{item.unit}}</text>
									</view>
								</view>
							</view>
							<view
								class="order__item__operation tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-between">
								<view class="order__item__operaation__left" v-if="item.status===3">
									<text class="order__item__operaation__left--text"
										@click="deleteOrder(item.orderNo)">更多</text>
								</view>
								<view class="order__item__operaation__left" v-if="item.status!==3">
									<text class="order__item__operaation__left--text"></text>
								</view>
								<view
									class="order__item__operation__right tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-right">
									<view class="order__item__operaation__right__button" v-if="item.status===3">
										<tn-button shadow shape="round" fontColor="#080808" backgroundColor="#E6E6E6"
											:fontSize="24" height="auto" padding="10rpx 18rpx" @click="seeInvoice(item.createTime,item.orderNo)">查看发票</tn-button>
									</view>
									<view class="order__item__operation__right__button" v-if="item.status===3">
										<tn-button shadow shape="round" fontColor="tn-color-white"
											backgroundColor="tn-cool-bg-color-1" :fontSize="24" height="auto"
											padding="10rpx 18rpx"
											@click="tn('/preferredPages/product?id='+item.goodsId)">再次兑换</tn-button>
									</view>
									<view class="order__item__operation__right__button" v-if="item.status===2">
										<tn-button shadow shape="round" fontColor="tn-color-white"
											backgroundColor="tn-cool-bg-color-1" :fontSize="24" height="auto"
											padding="10rpx 18rpx"
											@click="ConfirmReceipt1(item.goodsId)">确认收货</tn-button>
									</view>
									<view class="order__item__operaation__right__button" v-if="item.status===0">
										<tn-button shadow shape="round" fontColor="#080808" backgroundColor="#E6E6E6"
											:fontSize="24" height="auto" padding="10rpx 18rpx"
											@click="goOut">催发货</tn-button>
									</view>
									<view class="order__item__operaation__right__button" v-if="item.status===1">
										<tn-button shadow shape="round" fontColor="#080808" backgroundColor="#E6E6E6"
											:fontSize="24" height="auto" padding="10rpx 18rpx"
											@click="seeStream">查看物流</tn-button>
									</view>
								</view>
							</view>
						</view>
						<view class="tn-padding-bottom"></view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="order__swiper__item">
					<scroll-view :style="{height: `${swiperHeight}px`}" scroll-y>
						<view v-if="orderList1.length===0" style="margin-top: 300rpx;">
							<tn-empty mode="order"></tn-empty>
						</view>
						<view v-for="item in orderList1" :key="item.id" class="order__item">
							<view
								class="order__item__head tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-between">
								<view class="order__item__head__title">旅行攻略官方<text
										class="order__item__head__title--right-icon tn-icon-right"></text></view>
								<view class="order__item__head__status" v-if="item.status===0">待发货</view>
								<view class="order__item__head__status" v-if="item.status===1">运输中</view>
								<view class="order__item__head__status" v-if="item.status===2">待收货</view>
								<view class="order__item__head__status" v-if="item.status===3">完成</view>
							</view>
							<view
								class="order__item__content tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-center">
								<view class="order__item__content__image">
									<image :src="item.image" mode="scaleToFill"></image>
								</view>
								<view class="order__item__content__title">
									{{item.goodsDesc}}
								</view>
								<view
									class="order__item__content__info tn-flex tn-flex-direction-column tn-flex-col-center tn-flex-row-center">
									<view class="order__item__content__info__price">
										<text class="order__item__content__info__price--unit">￥</text>
										<text
											class="order__item__content__info__price__value--integer">{{item.price}}</text>
										<text class="order__item__content__info__price__value--decimal">.00</text>
									</view>
									<view class="order__item__content__info__count">
										<text>共1{{item.unit}}</text>
									</view>
								</view>
							</view>
							<view
								class="order__item__operation tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-between">
								<view class="order__item__operaation__left">
									<text class="order__item__operaation__left--text"></text>
								</view>
								<view
									class="order__item__operation__right tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-right">
									<view class="order__item__operaation__right__button">
										<tn-button shadow shape="round" fontColor="#080808" backgroundColor="#E6E6E6"
											:fontSize="24" height="auto" padding="10rpx 18rpx"
											@click="goOut">催发货</tn-button>
									</view>
								</view>
							</view>
						</view>
						<view class="tn-padding-bottom"></view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="order__swiper__item">
					<scroll-view :style="{height: `${swiperHeight}px`}" scroll-y>
						<view v-if="orderList2.length===0" style="margin-top: 300rpx;">
							<tn-empty mode="order"></tn-empty>
						</view>
						<view v-for="item in orderList2" :key="item.id" class="order__item">
							<view
								class="order__item__head tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-between">
								<view class="order__item__head__title">旅行攻略官方<text
										class="order__item__head__title--right-icon tn-icon-right"></text></view>
								<view class="order__item__head__status" v-if="item.status===0">待发货</view>
								<view class="order__item__head__status" v-if="item.status===1">运输中</view>
								<view class="order__item__head__status" v-if="item.status===2">待收货</view>
								<view class="order__item__head__status" v-if="item.status===3">完成</view>
							</view>
							<view
								class="order__item__content tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-center">
								<view class="order__item__content__image">
									<image :src="item.image" mode="scaleToFill"></image>
								</view>
								<view class="order__item__content__title">
									{{item.goodsDesc}}
								</view>
								<view
									class="order__item__content__info tn-flex tn-flex-direction-column tn-flex-col-center tn-flex-row-center">
									<view class="order__item__content__info__price">
										<text class="order__item__content__info__price--unit">￥</text>
										<text
											class="order__item__content__info__price__value--integer">{{item.price}}</text>
										<text class="order__item__content__info__price__value--decimal">.00</text>
									</view>
									<view class="order__item__content__info__count">
										<text>共1{{item.unit}}</text>
									</view>
								</view>
							</view>
							<view
								class="order__item__operation tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-between">
								<view class="order__item__operaation__left">
									<text class="order__item__operaation__left--text"></text>
								</view>
								<view
									class="order__item__operation__right tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-right">
									<view class="order__item__operaation__right__button">
										<tn-button shadow shape="round" fontColor="#080808" backgroundColor="#E6E6E6"
											:fontSize="24" height="auto" padding="10rpx 18rpx"
											@click="seeStream">查看物流</tn-button>
									</view>
								</view>
							</view>
						</view>
						<view class="tn-padding-bottom"></view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="order__swiper__item">
					<scroll-view :style="{height: `${swiperHeight}px`}" scroll-y>
						<view v-if="orderList3.length===0" style="margin-top: 300rpx;">
							<tn-empty mode="order"></tn-empty>
						</view>
						<view v-for="item in orderList3" :key="item.id" class="order__item">
							<view
								class="order__item__head tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-between">
								<view class="order__item__head__title">旅行攻略官方<text
										class="order__item__head__title--right-icon tn-icon-right"></text></view>
								<view class="order__item__head__status" v-if="item.status===0">待发货</view>
								<view class="order__item__head__status" v-if="item.status===1">运输中</view>
								<view class="order__item__head__status" v-if="item.status===2">待收货</view>
								<view class="order__item__head__status" v-if="item.status===3">完成</view>
							</view>
							<view
								class="order__item__content tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-center">
								<view class="order__item__content__image">
									<image :src="item.image" mode="scaleToFill"></image>
								</view>
								<view class="order__item__content__title">
									{{item.goodsDesc}}
								</view>
								<view
									class="order__item__content__info tn-flex tn-flex-direction-column tn-flex-col-center tn-flex-row-center">
									<view class="order__item__content__info__price">
										<text class="order__item__content__info__price--unit">￥</text>
										<text
											class="order__item__content__info__price__value--integer">{{item.price}}</text>
										<text class="order__item__content__info__price__value--decimal">.00</text>
									</view>
									<view class="order__item__content__info__count">
										<text>共1{{item.unit}}</text>
									</view>
								</view>
							</view>
							<view
								class="order__item__operation tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-between">
								<view class="order__item__operaation__left">
									<text class="order__item__operaation__left--text"></text>
								</view>
								<view
									class="order__item__operation__right tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-right">
									<view class="order__item__operation__right__button">
										<tn-button shadow shape="round" fontColor="tn-color-white"
											backgroundColor="tn-cool-bg-color-1" :fontSize="24" height="auto"
											padding="10rpx 18rpx"
											@click="ConfirmReceipt2(item.goodsId)">确认收货</tn-button>
									</view>
								</view>
							</view>
						</view>
						<view class="tn-padding-bottom"></view>
					</scroll-view>
				</swiper-item>
			</swiper>
			<tn-modal v-model="show" :title="title" :content="content" :button="button" @click="confirm"></tn-modal>
			<tn-modal v-model="show1" :title="title" :content="content" :button="button" @click="confirm1"></tn-modal>
			<tn-action-sheet v-model="showAction" :list="list1" @click="clickAction"></tn-action-sheet>
		</view>
	</view>
</template>

<script>
	import templatePageMixin from '@/libs/mixin/template_page_mixin.js'
	export default {
		name: 'TemplateOrder',
		mixins: [templatePageMixin],
		data() {
			return {
				list1: [{
					text: '删除订单',
					color: 'red',
				}],
				list: [{
						name: '全部'
					},
					{
						name: '待发货'
					},
					{
						name: '运输中'
					},
					{
						name: '待收货'
					}
				],
				orderList: [],
				orderList1: [],
				orderList2: [],
				orderList3: [],
				show: false,
				show1: false,
				showAction: false,
				title: '提示信息',
				content: '您确定要确认收货?',
				button: [{
						text: '取消',
						backgroundColor: '#9ee931',
						fontColor: '#FFFFFF',
					},
					{
						text: '确定',
						backgroundColor: 'tn-bg-indigo',
						fontColor: '#FFFFFF'
					}
				],
				tabsIndex: 0,
				swiperIndex: 0,
				swiperTop: 0,
				swiperHeight: 0,
				goodsId: '',
				orderNo: ''
			}
		},
		onLoad() {
			this.getOrderByUserId()
		},
		onReady() {
			this.$nextTick(() => {
				this.updateSwiperInfo()
			})
		},
		methods: {
			//查看发票
			seeInvoice(creaTime,orderNo){
			  console.log(creaTime,orderNo);	
			  uni.$showMsg('暂未开通此功能！')
			},
			//删除订单
			async clickAction(index) {
				if (index === 0) {
					const {
						data
					} = await uni.$http.delete('/order/deleteOrder/' + this.orderNo)
					if (data.code === 1) {
						uni.showToast({
							title: '删除订单完成！',
							icon: 'success'
						})
						this.getOrderByUserId()
						this.showAction=false
					} else {
						uni.$showMsg(data.msg)
						this.showAction=false
					}
				}
			},
			async confirm(options) {
				if (options.index === 0) {
					this.show = false
				} else {
					await uni.$http.put('/order/updateOrderStatus/' + this.goodsId)
					this.getOrderByUserId()
					this.show = false
				}
			},
			async confirm1(options) {
				if (options.index === 0) {
					this.show1 = false
				} else {
					await uni.$http.put('/order/updateOrderStatus/' + this.goodsId)
					const {
						data
					} = await uni.$http.get('/order/getOrderByUserId?status=2')
					this.orderList3 = data.data
					this.show1 = false
				}
			},
			//删除已完成订单
			async deleteOrder(orderNo) {
				this.$nextTick(() => {
					this.orderNo = orderNo
				})
				this.showAction = true
			},
			//确认收货
			ConfirmReceipt1(goodsId) {
				this.$nextTick(() => {
					this.goodsId = goodsId
				})
				this.show = true
			},
			//确认收货
			ConfirmReceipt2(goodsId) {
				this.$nextTick(() => {
					this.goodsId = goodsId
				})
				this.show1 = true
			},
			//查看物流
			seeStream() {
				uni.navigateTo({
					url: '/preferredPages/stream/stream'
				})
			},
			//催发货
			goOut() {
				setTimeout(() => {
					uni.showToast({
						title: '催单成功！',
						icon: 'success'
					})
				}, 500)
			},
			async getOrderByUserId() {
				const {
					data
				} = await uni.$http.get('/order/getOrderByUserId')
				this.orderList = data.data
			},
			tn(e) {
				uni.navigateTo({
					url: e,
				});
			},
			// 计算可滑动区域的高度信息
			updateSwiperInfo() {
				// 获取可滑动菜单的信息
				this._tGetRect('.order__tabs').then(res => {
					if (!res) {
						setTimeout(() => {
							this.updateSwiperInfo()
						}, 10)
						return
					}
					const systemInfo = uni.getSystemInfoSync()
					this.swiperTop = res.bottom - this.vuex_custom_bar_height
					this.swiperHeight = systemInfo.safeArea.height - res.bottom + systemInfo.statusBarHeight
				})
			},
			// 标签栏值发生改变
			async tabsChange(index) {
				this.swiperIndex = index
				if (index === 0) {
					this.getOrderByUserId()
				}
				if (index === 1) {
					const {
						data
					} = await uni.$http.get('/order/getOrderByUserId?status=0')
					this.orderList1 = data.data
				}
				if (index === 2) {
					const {
						data
					} = await uni.$http.get('/order/getOrderByUserId?status=1')
					this.orderList2 = data.data
				}
				if (index === 3) {
					const {
						data
					} = await uni.$http.get('/order/getOrderByUserId?status=2')
					this.orderList3 = data.data
				}
			},
			// swiper-item位置发生改变
			swiperTransition(event) {
				this.$refs.tabs.setDx(event.detail.dx)
			},
			// swiper动画结束
			swiperAnimationFinish(event) {
				const current = event.detail.current
				this.$refs.tabs.setFinishCurrent(current)
				this.swiperIndex = current
				this.tabsIndex = current
			}
		}
	}
</script>

<style lang="scss" scoped>
	.template-order {
		background-color: #F7F7F7CC;
	}

	/* 自定义导航栏内容 start */
	.custom-nav {
		height: 100%;

		&__back {
			// margin: auto 5rpx;
			font-size: 40rpx;
			flex-basis: 5%;
			padding: 20rpx 40rpx 20rpx 30rpx;
		}

		&__search {
			flex-basis: 55%;
			width: 100%;
			height: 100%;

			&__box {
				width: 100%;
				height: 60%;
				padding: 28rpx 0;
				margin: 0 30rpx;
				border-radius: 60rpx;
				font-size: 24rpx;
				background-color: #FFFFFF;
				border: 1rpx solid #F8F7F8;
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

	/* 自定义导航栏内容 end */

	.order {
		&--wrap {
			position: fixed;
			left: 0;
			right: 0;
			width: 100%;
			background-color: inherit;
		}

		/* 导航栏 start */
		&__tabs {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			background-color: inherit;
		}

		/* 导航栏 end */

		/* swiper start */
		&__swiper {
			position: absolute;
			left: 0;
			right: 0;
			width: 100%;
			background-color: inherit;
			// padding: 0 16rpx;
		}

		/* swiper end */

		/* 订单内容 start */
		&__item {
			margin: 20rpx;
			padding: 36rpx 26rpx;
			background-color: #FFFFFF;
			border-radius: 18rpx;

			&:first-child {
				margin-top: 40rpx;
			}

			&:last-child {
				margin-bottom: 0;
			}

			/* 头部 start */
			&__head {

				&__title {
					font-weight: bold;
					line-height: normal;

					&--right-icon {
						font-size: 24rpx;
						margin-left: 8rpx;
					}
				}

				&__status {
					font-size: 22rpx;
					color: #AAAAAA;
				}
			}

			/* 头部 end */

			/* 内容 start */
			&__content {

				margin-top: 20rpx;

				&__image {
					margin-right: 20rpx;

					image {
						width: 140rpx;
						height: 140rpx;
						border-radius: 10rpx;
					}
				}

				&__title {
					padding-right: 40rpx;
					display: -webkit-box;
					overflow: hidden;
					white-space: normal !important;
					text-overflow: ellipsis;
					word-wrap: break-word;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}

				&__info {

					&__price {
						&--unit {
							font-size: 20rpx;
						}

						&__value--integer,
						&__value--decimal {
							font-weight: bold;
						}

						&__value--decimal {
							font-size: 20rpx;
						}
					}

					&__count {
						color: #AAAAAA;
						font-size: 24rpx;
					}
				}
			}

			/* 内容 end */

			/* 操作按钮 start */
			&__operation {
				margin-top: 30rpx;

				&__right {
					&__button {
						margin-left: 10rpx;
					}
				}
			}

			/* 操作按钮 end */
		}

		/* 订单内容 end */
	}
</style>