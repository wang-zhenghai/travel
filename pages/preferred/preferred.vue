<template>
  <view class="template-preferred tn-safe-area-inset-bottom">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar :isBack="false" :bottomShadow="false" backgroundColor="#FFFFFF">
      <view style="font-weight: bold;">积分商场</view>
    </tn-nav-bar>
    <view  :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      <view class="tn-flex tn-flex-wrap tn-margin-sm">
        <block v-for="(item, index) in content" :key="item.id">
          <view class="" style="width: 50%;" @click="tn('/preferredPages/product?id='+item.id)">
            <view class="tn-blogger-content__wrap" style="background-color: rgba(255,255,255,0.6);">
              <view class="image-picbook" :style="'background-image:url(' + item.image + ')'">
                <view class="image-book">
                </view>
              </view> 
              <view class="tn-blogger-content__label tn-text-justify tn-padding-sm">
                <text class="u-line-2">{{ item.goodsDesc }}</text>  
              </view>
              <view class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-left-sm tn-padding-right-sm tn-padding-bottom-sm">
                <view class="justify-content-item tn-text-center">
                  <view class="tn-blogger-content__label__item tn-float-left tn-margin-right tn-bg-gray--light tn-round tn-text-sm tn-text-bold">
                    <text class="tn-icon-funds tn-padding-right-xs tn-color-indigo"></text> {{ item.price+'积分'}}
                  </view>
                </view>
              </view>
            </view>
          </view>
        </block>
      </view>
    </view>
    <view class='tn-tabbar-height'></view>
  </view>
</template>

<script>
  export default {
    name: 'Preferred',
    data() {
      return {
        content: []
      }
    },
	created() {
		this.getGoodsList()
	},
    methods: {
      // 跳转
      tn(e) {
      	uni.navigateTo({
      		url: e,
      	});
      },
	 async getGoodsList(){
		const {data} =await uni.$http.get('/goods/getGoodsList')
		if(data.code===1){
			this.content=data.data
		}
	  }
    }
  }
</script>

<style lang="scss" scoped>
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
      &__title {
        
      }
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
        &--unit {
          
        }
        &--integer {
          font-size: 38rpx;
        }
        &--decimal {
          
        }
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
  
  .image-book{
    padding: 150rpx 0rpx;
    font-size: 16rpx;
    font-weight: 300;
    position: relative;
  }
  .image-picbook{
    background-size: cover;
    background-repeat:no-repeat;
    // background-attachment:fixed;
    background-position:top;
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
    border: 2rpx solid rgba(255,255,255,0.05);
    box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.15);
    border-radius: 50%;
    overflow: hidden;
    // background-color: #FFFFFF;
  }
  
  /* 商家商品 end*/
  
</style>

