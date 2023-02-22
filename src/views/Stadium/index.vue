<template>
	<div>
		<topHeader @openPopup='openPopup'></topHeader>
		<div class="content_box">
			<router-view />
		</div>
		<tabbar></tabbar>
		<van-popup v-model="show" position="right">
			<div class="search">
				<h3 class="title">联赛搜索/赛事搜索</h3>
				<div class="search_input">
					<van-search v-model="value" placeholder="请输入联赛/球队名称进行搜索" />
				</div>
				<div class="checkbok">
					<div class="all_check">
						<van-checkbox-group @change='changeAll' v-model="resultAll">
							<van-cell-group>
								<van-cell v-for="(item, index) in checkListAll" clickable :key="item.id"
									@click="toggles(index)" :border="false">
									<template #title>
										<div class="match_icon">
											<img :src="item.img" alt="">
											<span>{{ item.name }}</span>
										</div>
									</template>
									<template #right-icon>
										<van-checkbox :name="item" ref="checkboxesAll" />
									</template>
								</van-cell>
							</van-cell-group>
						</van-checkbox-group>
					</div>
					<p class="hot">热门联赛</p>
					<div class="check_item">
						<van-checkbox-group @change='change' v-model="result">

							<van-cell-group>
								<van-cell v-for="(item, index) in checkList" clickable :border="false" :key="item.id"
									@click="toggle(index)">
									<template #title>
										<div class="match_icon">
											<img :src="item.img" alt="">
											<span>{{ item.name }}</span>
										</div>
									</template>
									<template #right-icon>
										<van-checkbox :name="item" ref="checkboxes" />
									</template>
								</van-cell>
							</van-cell-group>
						</van-checkbox-group>
					</div>
				</div>
			</div>

		</van-popup>
	</div>
</template>

<script setup lang="ts">
import tabbar from '@/views/Stadium/tabbar.vue'
import topHeader from '@/views/Stadium/components/header.vue'
import { ref } from 'vue'

const show = ref(false)
const value = ref('')
const resultAll = ref([])
const result = ref([])
const checkListAll = ref([
	{
		img: new URL("@/assets/images/stadiums/match1.png", import.meta.url).href,
		name: '所有赛事',
		id: 1
	}
])
const checkList = ref([
	{
		img: new URL("@/assets/images/stadiums/match2.png", import.meta.url).href,
		name: '世界杯',
		id: 1
	},
	{
		img: new URL("@/assets/images/stadiums/match3.png", import.meta.url).href,
		name: '中国超级联赛',
		id: 2
	},
	{
		img: new URL("@/assets/images/stadiums/match4.png", import.meta.url).href,
		name: '英格兰足球杯',
		id: 3
	},
	{
		img: new URL("@/assets/images/stadiums/match5.png", import.meta.url).href,
		name: '西班牙乙级联赛',
		id: 4
	},
	{
		img: new URL("@/assets/images/stadiums/match6.png", import.meta.url).href,
		name: '意大利乙级联赛',
		id: 5
	},
	{
		img: new URL("@/assets/images/stadiums/match7.png", import.meta.url).href,
		name: '欧洲冠军联赛',
		id: 6
	},
	{
		img: new URL("@/assets/images/stadiums/match8.png", import.meta.url).href,
		name: '英格兰超级联赛',
		id: 7
	}
])
const openPopup = () =>{
	show.value = true
}
const toggle = (index:number) =>{

}
const toggles = (index:number) =>{

}
const change = () =>{
  console.log(result.value)
}
const changeAll = () =>{
  console.log(resultAll.value)
}
// export default {
// 	methods: {
// 		toggle(index) {
// 			this.$refs.checkboxes[index].toggle();
// 		},
// 		toggles(index) {
// 			this.$refs.checkboxesAll[index].toggle();
// 		},
// 	}
// }
</script>

<style scoped lang="scss">
.content_box {
	padding-top: 43px;
	padding-bottom: 80px;
}

.search {
	width: 297px;
	height: 100vh;
	background-color: #FFFFFF;
	display: flex;
	flex-direction: column;
	align-items: center;

	.title {
		font-size: 17px;
		margin: 15px 0 10px 0;
	}

	.search_input {
		width: 100%;
		height: 36px;

		.van-search {
			padding: 0;
		}

		.van-cell {
			background-color: #F1FAFF;
		}
	}

	.checkbok {
		width: 100%;

		// padding-left: 10px;
		// margin-left: 27px;
		.all_check {
			height: 65px;

			.van-cell {
				height: 65px;
				display: flex;
				align-items: center;
			}
		}

		.hot {
			font-size: 17px;
			color: #000000;
			margin: 16px 19px 0;
		}

		.match_icon {
			display: flex;
			align-items: center;

			img {
				width: 22px;
				margin-right: 10px;
			}

		}

		.van-cell-group {
			padding-left: 10px;
			border: none !important;
		}

		.check_item {
			.van-hairline--top-bottom::after {
				border: none !important;
			}
		}

	}
}
</style>