<template>
	<view>
		<view class="template-search tn-safe-area-inset-bottom">
			<view class="tn-navbg" :style="{height: vuex_custom_bar_height + 'px'}">
				<!-- 顶部自定义导航 -->
				<tn-nav-bar fixed alpha customBack>
					<view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
						<text class='icon tn-icon-left-arrow'></text>
					</view>
				</tn-nav-bar>
			</view>
			<view class="tn-search-fixed">
				<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin"
					:style="{marginTop: vuex_custom_bar_height + 'px'}">
					<view>
						<view style="width: 520rpx;">
							<u-search v-model="searchKey" placeholder="搜索目的地/景点/攻略" :showAction="false" placeholder-style="color:#AAAAAA"></u-search>
						</view>
					</view>
					<view class="align-content-item">
						<view class="justify-content-item tn-text-center">
							<tn-button backgroundColor="#82B2FF" shape="round" padding="20rpx 20rpx" width="150rpx"
								shadow fontBold @tap="" @click="goSearch">
								<text class="tn-color-white">搜 索</text>
							</tn-button>
						</view>
					</view>
				</view>
			</view>
			<!-- 搜索历史 -->
			<view v-if="showSearchHistory">
				<view class="" style="margin-top: 130rpx;" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
					<view class="tn-flex tn-flex-row-between tn-margin">
						<view class="justify-content-item tn-text-bold">
							<text class="tn-text-df tn-color-black">历史记录</text>
						</view>
						<view class="justify-content-item tn-text-df tn-color-grey" @click="deleteHistory">
							<text class="tn-padding-xs">删除</text>
							<text class="tn-icon-delete"></text>
						</view>
					</view>
				</view>
				<view>
					<view class="tn-tag-search tn-margin tn-text-justify" style="margin-top: -20rpx;">
						<view v-for="(item, index) in searchHistory" :key="index" @click="goToResult(item)"
							class="tn-tag-search__item tn-margin-right tn-round tn-text-sm tn-bg-gray--light tn-color-gray">
							{{item}}
						</view>
					</view>
				</view>
			</view>
			<!-- 删除模态框 -->
			<view>
				<u-modal :show="delShow" @confirm="delHistory" :asyncClose="true" title="确定删除搜索历史？"
					:showCancelButton="true" @cancel="delShow=false"></u-modal>
			</view>
		</view>
		<view v-if="showSuggestion" style="padding-top: 280rpx">
			<suggestion :search-key="searchKey"></suggestion>
		</view>
		<!-- 热门搜索 -->
		<view v-if="showHotSearch" :style="{paddingTop: showSearchHistory?'0'+'px':vuex_custom_bar_height + 'px',marginTop:showSearchHistory?'0'+'px':vuex_custom_bar_height+'px'}">
			<view>
				<view class="tn-flex tn-flex-row-between tn-margin">
					<view class="justify-content-item tn-text-bold">
						<text class="tn-text-df tn-color-black">搜索热门</text>
					</view>
				</view>
			</view>
			<view style="margin-top: -20rpx;">
				<view class="tn-tag-search tn-margin tn-text-justify">
					<view style="display: flex;justify-items: center;align-items: center;flex-wrap: wrap;">
						<view v-for="(item,index) of hotSearch" :key="item.id" style="margin-top: 24rpx;" @click="goToResult(item.city)"
							:style="{marginLeft:index>=9?'-4'+'rpx':'0'+'rpx'}">
							<text
								:style="{color:index===0?'#fe3157':'#AAAAAA',marginRight:index>=9?'10'+'rpx':'20'+'rpx'}"
								v-if="index!==1&&index!==2">{{index+1}}</text>
							<text
								:style="{color:index===1?'#d17846':'#AAAAAA',marginRight:index>=9?'10'+'rpx':'20'+'rpx'}"
								v-if="index===1">{{index+1}}</text>
							<text
								:style="{color:index===2?'#fec937':'#AAAAAA',marginRight:index>=9?'10'+'rpx':'20'+'rpx'}"
								v-if="index===2">{{index+1}}</text>
							<text style="color: black;font-weight: 600;margin-right: 250rpx;">{{item.city}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	import suggestion from '@/components/suggestion/suggestion.vue'
	export default {
		name: 'TemplateSearch',
		mixins: [template_page_mixin],
		components: {
			suggestion
		},
		data() {
			return {
				searchKey: '',
				delShow: false,
				showSuggestion: false,
				showSearchHistory: false,
				showHotSearch: true,
				searchHistory: [],
				hotSearch: [],
			}
		},
		watch: {
			searchKey(newValue, oldValue) {
				if (newValue != '') {
					this.showHotSearch = false
					this.showSearchHistory = false
					this.showSuggestion = true
				} else {
					this.showHotSearch = true
					this.showSuggestion = false
					if (this.searchHistory.length>0) {
						this.showSearchHistory = true
					}
				}
			}
		},
		onLoad() {
			this.searchHistory = JSON.parse(uni.getStorageSync('history'))
			if (this.searchHistory.length > 0) {
				this.showSearchHistory = true
			}
		},
		created() {
			this.getHotSearch()
		},
		methods: {
			async getHotSearch() {
				const {
					data
				} = await uni.$http.get('/scenic/getHotCity')
				if (data.code === 1) {
					this.hotSearch = data.data.records
				} else {
					uni.$showMsg('获取热门搜索失败~')
				}
			},
			goToResult(searchKey){
				uni.navigateTo({
					url:'/searchPages/searchResult?searchKey='+searchKey
				})
			},
			goBack() {
				setTimeout(() => {
					uni.redirectTo({
						url: '/pages/index'
					})
				})
			},
			// 跳转
			tn(e) {
				uni.navigateTo({
					url: e,
				});
			},
			//搜索
			goSearch() {
				if(this.searchKey===''){
					uni.$showMsg('搜索内容不能为空！')
					return
				}
				this.searchHistory.unshift(this.searchKey)
				uni.setStorageSync('history', JSON.stringify(this.searchHistory))
				this.showHotSearch = true
				this.showSearchHistory=true
				this.showSuggestion=false
				uni.navigateTo({
					url:'/searchPages/searchResult?searchKey='+this.searchKey
				})
			},
			//删除历史
			delHistory() {
				uni.removeStorageSync('history')
				this.searchHistory=[]
				this.showSearchHistory=false
				setTimeout(() => {
					this.delShow = false
				}, 200)
			},
			deleteHistory() {
				this.delShow = true
			},
		}
	}
</script>

<style lang="scss" scoped>
	.tn-search-fixed {
		position: fixed;
		top: 25rpx;
		width: 100%;
		transition: all 0.25s ease-out;
		z-index: 1;
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
		/* background: linear-gradient(-120deg,  #9A5CE5, #01BEFF, #00F5D4, #43e97b); */
		/* background: linear-gradient(-120deg,#c471f5, #ec008c, #ff4e50,#f9d423); */
		/* background: linear-gradient(-120deg, #0976ea, #c471f5, #f956b6, #ea7e0a); */
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

	/* 标签内容 end*/

	/* 标题 start */
	.nav_title {
		-webkit-background-clip: text;
		color: transparent;

		&--wrap {
			position: relative;
			display: flex;
			height: 120rpx;
			font-size: 42rpx;
			align-items: center;
			justify-content: center;
			font-weight: bold;
			background-image: url(https://resource.tuniaokj.com/images/title_bg/title00.png);
			background-size: cover;
		}
	}

	/* 标题 end */

	/* 富文本图示意 start */
	.news-img {
		z-index: -1;
		padding-bottom: 40rpx;

		image {
			width: 100%;
			margin: 20rpx 0;
			// height: 3373rpx;
			// z-index: -1;
		}
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
			padding: 7rpx 25rpx 5rpx 25rpx;

			&--prefix {
				padding-right: 10rpx;
			}
		}
	}

	/* 标签内容 end*/
</style>