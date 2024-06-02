<template>
	<view>
		<view v-for="item of suggestionData" :key="item.id">
			<u-cell icon="search" @click="goToResult(item.location)">
				<view v-html="item.location" slot="title"></view>
			</u-cell>
		</view>
	</view>
</template>

<script>
	export default {
		name: "suggestion",
		props: {
			searchKey: {
				type: String,
				require: true
			}
		},
		watch: {
			searchKey: {
				handler: function(newValue, oldValue) {
					clearTimeout(this.timer)
					this.timer = setTimeout(() => {
						this.key = newValue
						this.getSuggestion()
					}, 500)
				},
				immediate: true
			},
		},
		data() {
			return {
				key: '',
				suggestionData: []
			};
		},
		methods: {
			async getSuggestion() {
				const {
					data
				} = await uni.$http.get('/queryAll/getSuggestion?key=' + this.key)
				if (data.code === 1) {
					const exp = new RegExp(this.key, 'gi');
					data.data.forEach(item => {
						item.location = item.location.replace(exp, "<span  style='color: red;'>" + this.key +
							"</span>")
					})
					this.suggestionData = data.data
				} else {
					uni.$showMsg(data.msg)
				}
			},
			removeHtmlTags(htmlString) {
				var reg = /<[^>]*>/g;
				return htmlString.replace(reg, '');
			},
			goToResult(searchKey) {
				var text = this.removeHtmlTags(searchKey);
				uni.navigateTo({
					url: '/searchPages/searchResult?searchKey=' + text
				})
			},
		},
	}
</script>

<style lang="scss">

</style>