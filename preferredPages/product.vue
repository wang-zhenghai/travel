<template>
	<view class="template-product tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed alpha customBack>
			<view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
				<text class='icon tn-icon-left'></text>
				<text class='icon tn-icon-home-capsule-fill'></text>
			</view>
		</tn-nav-bar>

		<swiper class="card-swiper" :circular="true" :autoplay="true" duration="500" interval="5000"
			@change="cardSwiper">
			<swiper-item :class="cardCur==index?'cur':''">
				<view class="swiper-item image-banner">
					<image :src="image" mode="aspectFill"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="indication">
			<block v-for="(item,index) in swiperList" :key="index">
				<view class="spot" :class="cardCur==index?'active':''"></view>
			</block>
		</view>
		<view class="tn-margin">
			<view class="tn-flex tn-flex-row-between">
				<view class="justify-content-item tn-text-bold tn-text-xxl">
					{{goodsDesc}}
				</view>
			</view>
			<view class="tn-flex tn-flex-row-between tn-margin-top">
				<view class="justify-content-item tn-text-center">
					<view
						class="tn-blogger-content__label__item tn-float-left tn-margin-right tn-bg-gray--light tn-round tn-text-sm tn-text-bold">
						<text class="tn-icon-funds tn-padding-right-xs tn-color-indigo"></text> {{ price+'积分'}}
					</view>
				</view>
			</view>
		</view>
		<!-- 更多信息-->
		<view class="tn-padding-top-sm tn-padding-bottom-sm">
			<tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="34">
				<view class="tn-flex tn-flex-col-center">
					<view class="tn-flex-1">运费</view>
					<view class="tn-margin-left-sm" style="font-size: 28rpx;">0.00元</view>
				</view>
			</tn-list-cell>
			<tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="34">
				<view class="tn-flex tn-flex-col-center">
					<view class="tn-flex-1">库存</view>
					<view class="tn-margin-left-sm" style="font-size: 28rpx;" v-if="stock>0">{{stock}}{{unit}}</view>
					<view class="tn-margin-left-sm" style="font-size: 28rpx;" v-if="stock===0">商品已被抢光啦</view>
				</view>
			</tn-list-cell>
			<tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="34" @click="getLocation">
				<view class="tn-flex tn-flex-col-center">
					<view class="tn-flex-1">送至</view>
					<view class="tn-margin-left-sm" style="font-size: 28rpx;">{{address}}</view>
				</view>
			</tn-list-cell>
		</view>
		<view class="footerfixed dd-glass tn-padding-left-sm tn-padding-right tn-padding-top-xs tn-padding-bottom-sm">
			<tn-button backgroundColor="tn-bg-red" fontColor="tn-color-white" width="100%"
				@click="submit">立即兑换</tn-button>
		</view>
		<view class='tn-tabbar-height'></view>
	</view>
</template>

<script>
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	export default {
		name: 'TemplateProduct',
		mixins: [template_page_mixin],
		data() {
			return {
				cardCur: 0,
				id: 0,
				swiperList: [],
				goodsDesc: '',
				price: '',
				address: '请选择配送地址',
				unit: '',
				stock: '',
				image: '',
			}
		},
		onLoad(options) {
			this.id = options.id
			this.getGoodsInfoById()
		},
		methods: {
			async getGoodsInfoById() {
				const {
					data
				} = await uni.$http.get('/goods/getGoodsInfoById/' + this.id)
				if (data.code === 1) {
					this.image = data.data.image
					this.goodsDesc = data.data.goodsDesc
					this.price = data.data.price
					this.unit = data.data.unit
					this.stock = data.data.stock
				}
			},
			getLocation() {
				let _this = this
				uni.chooseLocation({
					success: function(res) {
						if (res.name != '') {
							_this.address = res.name
						}
					}
				});
			},
			async submit(){
				if (!uni.getStorageSync('token')) {
					uni.navigateTo({
						url: '/pages/login/login'
					})
					uni.$showMsg('亲，先登录才能兑换哦~')
					return
				}
				if(this.address==='请选择配送地址'){
					uni.$showMsg('请选择配送地址！')
					return
				}
				const orderDTO={goodsId:this.id,address:this.address}
				const {data}=await uni.$http.post('/order/createOrder',orderDTO)
				if(data.code===1){
					this.getGoodsInfoById()
					uni.showToast({
						title:'兑换成功！',
						icon:'success'
					})
				}else{
					uni.$showMsg(data.msg)
				}
			},
			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			// 跳转
			tn(e) {
				uni.navigateTo({
					url: e,
				});
			},
			// tab选项卡切换
			tabChange(index) {
				this.current = index
			},
			getRandomCoolBg() {
				return this.$t.colorUtils.getRandomCoolBgClass()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.template-product {}

	.tn-tabbar-height {
		min-height: 120rpx;
		height: calc(140rpx + env(safe-area-inset-bottom) / 2);
	}

	/* 用户头像 start */
	.logo-image {
		width: 110rpx;
		height: 110rpx;
		position: relative;
	}

	.logo-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.15);
		border-radius: 10rpx;
		overflow: hidden;
		// background-color: #FFFFFF;
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

	/* 轮播视觉差 start */
	.card-swiper {
		height: 750rpx !important;
	}

	.card-swiper swiper-item {
		width: 750rpx !important;
		left: 0rpx;
		box-sizing: border-box;
		// padding: 0rpx 30rpx 90rpx 30rpx;
		overflow: initial;
	}

	.card-swiper swiper-item .swiper-item {
		width: 100%;
		display: block;
		height: 100%;
		transform: scale(1);
		transition: all 0.2s ease-in 0s;
		overflow: hidden;
	}

	.card-swiper swiper-item.cur .swiper-item {
		transform: none;
		transition: all 0.2s ease-in 0s;
	}

	.image-banner {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.image-banner image {
		width: 100%;
		height: 100%;
	}

	/* 轮播指示点 start*/
	.indication {
		z-index: 9999;
		width: 100%;
		height: 36rpx;
		position: absolute;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.spot {
		background-color: #FFFFFF;
		opacity: 0.6;
		width: 10rpx;
		height: 10rpx;
		border-radius: 20rpx;
		top: -60rpx;
		margin: 0 8rpx !important;
		position: relative;
	}

	.spot.active {
		opacity: 1;
		width: 30rpx;
		background-color: #FFFFFF;
	}

	/* 间隔线 start*/
	.tn-strip-bottom-min {
		width: 100%;
		border-bottom: 1rpx solid #F8F9FB;
	}

	/* 间隔线 start*/
	.tn-strip-bottom {
		width: 100%;
		border-bottom: 20rpx solid rgba(241, 241, 241, 0.8);
	}

	/* 间隔线 end*/
	/* 标题 start */
	.nav_title {
		-webkit-background-clip: text;
		color: transparent;

		&--wrap {
			position: relative;
			display: flex;
			height: 120rpx;
			font-size: 46rpx;
			align-items: center;
			justify-content: center;
			font-weight: bold;
			background-image: url(https://resource.tuniaokj.com/images/title_bg/title44.png);
			background-size: cover;
		}
	}

	/* 标题 end */

	/* 底部tabbar start*/
	.footerfixed {
		position: fixed;
		width: 100%;
		bottom: 0;
		z-index: 999;
		background-color: #FFFFFF;
		box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
	}

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

	/* 内容图 start */
	.content-backgroup {
		z-index: -1;

		.backgroud-image {
			border-radius: 15rpx;
			width: 100%;
		}
	}

	/* 内容图 end */

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

	/* 毛玻璃*/
	.dd-glass {
		width: 100%;
		backdrop-filter: blur(20rpx);
		-webkit-backdrop-filter: blur(20rpx);
	}
</style>