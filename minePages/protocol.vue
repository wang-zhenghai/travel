<template>
  <view class="template-protocol">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back'
        @click="goBack">
        <text class='icon tn-icon-left'></text>
        <text class='icon tn-icon-home-capsule-fill'></text>
      </view>
    </tn-nav-bar>
    
    <view class="tn-text-center tn-margin tn-text-lg plus-box" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      <view class="plus-text">
        <view class="tn-text-bold">首先感谢你的使用</view>
        <view class="tn-margin-bottom-xl">如果你有好的想法希望你可以联系作者！</view>
      </view>
      
      <view class="plus-text">
        <view class="tn-text-bold">微信号：<text class="tn-text-bold tn-text-xxl" @click="copyWechat">wang1302662981</text> </view>
        <view class="">（如需合作，可备注：商业合作）</view>
      </view>
      
      <view class="plus-text">
        <view class="tn-text-bold">也希望大家能喜欢这个项目</view>
        <view class="tn-margin-bottom-xl">（不喜勿喷，作者还在努力成长）</view>
      </view>
      <view class="plus-text">
        <view class="tn-text-bold">感恩你的支持</view>
        <view class="tn-margin-bottom-xl"></view>
      </view>
    </view>
    <view class="tn-padding-bottom"></view>
  </view>
</template>

<script>
  import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
  export default {
    name: 'TemplatePlus',
    mixins: [template_page_mixin],
    data(){
      return {}
    },
    methods: {
      // 复制微信号
      copyWechat() {
        uni.setClipboardData({
          data: "tnkewo",
        })
      },
    }
  }
</script>

<style lang="scss" scoped>
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
  /* 内容 开始 */
  .plus-box {
    counter-reset: index;  
    padding: 0;
    max-width: 100vw;
    background-image: linear-gradient(to top, #FFA726 , #2DE8BD);
    background-attachment: fixed;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .plus-text {
    counter-increment: index; 
    display: initial;
    align-items: center;
    padding: 12px 0;
    box-sizing: border-box;

  }
  
  
  .plus-text::before {
    content: counters(index, ".", decimal-leading-zero);
    font-size: 1.5rem;
    font-weight: bold;
    font-feature-settings: "tnum";
    font-variant-numeric: tabular-nums;
    align-self: flex-start;
  }
  
</style>
