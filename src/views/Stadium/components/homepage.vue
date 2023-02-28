<script lang="ts">
    import { defineComponent } from 'vue';
	import axios from "axios";
	import config from "@/config";
	import {ref} from 'vue';
    export default defineComponent({
        data() {
            return {
                sportData: [],
				sportCount: [],
				projectList:[
					[{
						url: new URL("@/assets/images/stadiums/football.png", import.meta.url).href,
						name: '足球',
						num: 0,
						id: 1
					},
					{
						url: new URL("@/assets/images/stadiums/basketball.png", import.meta.url).href,
						name: '篮球',
						num: 0,
						id: 2
					},
					{
						url: new URL("@/assets/images/stadiums/tennis.png", import.meta.url).href,
						name: '网球',
						num: 0,
						id: 3
					},
					{
						url: new URL("@/assets/images/stadiums/pingpong.png", import.meta.url).href,
						name: '乒乓球',
						num: 0,
						id: 4
					},
					{
						url: new URL("@/assets/images/stadiums/snooker.png", import.meta.url).href,
						name: '斯诺克英式台球',
						num: 0,
						id: 5
					}
					],
					[{
						url: new URL("@/assets/images/stadiums/football.png", import.meta.url).href,
						name: '足球',
						num: 0,
						id: 1
					},
					{
						url: new URL("@/assets/images/stadiums/basketball.png", import.meta.url).href,
						name: '篮球',
						num: 0,
						id: 2
					},
					{
						url: new URL("@/assets/images/stadiums/tennis.png", import.meta.url).href,
						name: '网球',
						num: 0,
						id: 3
					},
					{
						url: new URL("@/assets/images/stadiums/pingpong.png", import.meta.url).href,
						name: '乒乓球',
						num: 0,
						id: 4
					},
					{
						url: new URL("@/assets/images/stadiums/snooker.png", import.meta.url).href,
						name: '斯诺克英式台球',
						num: 4,
						id: 5
					}
					],
					[{
						url: new URL("@/assets/images/stadiums/football.png", import.meta.url).href,
						name: '足球',
						num: 132,
						id: 1
					},
					{
						url: new URL("@/assets/images/stadiums/basketball.png", import.meta.url).href,
						name: '篮球',
						num: 165,
						id: 2
					},
					{
						url: new URL("@/assets/images/stadiums/tennis.png", import.meta.url).href,
						name: '网球',
						num: 132,
						id: 3
					},
					{
						url: new URL("@/assets/images/stadiums/pingpong.png", import.meta.url).href,
						name: '乒乓球',
						num: 79,
						id: 4
					}
					],
					[{
						url: new URL("@/assets/images/stadiums/football.png", import.meta.url).href,
						name: '足球',
						num: 132,
						id: 1
					},
					{
						url: new URL("@/assets/images/stadiums/basketball.png", import.meta.url).href,
						name: '篮球',
						num: 165,
						id: 2
					}
					],
					[{
						url: new URL("@/assets/images/stadiums/football.png", import.meta.url).href,
						name: '足球',
						num: 132,
						id: 1
					},
					{
						url: new URL("@/assets/images/stadiums/basketball.png", import.meta.url).href,
						name: '篮球',
						num: 165,
						id: 2
					},
					{
						url: new URL("@/assets/images/stadiums/tennis.png", import.meta.url).href,
						name: '网球',
						num: 132,
						id: 3
					},
					{
						url: new URL("@/assets/images/stadiums/pingpong.png", import.meta.url).href,
						name: '乒乓球',
						num: 79,
						id: 4
					}
					],
					[{
						url: new URL("@/assets/images/stadiums/football.png", import.meta.url).href,
						name: '足球',
						num: 132,
						id: 1
					},
					{
						url: new URL("@/assets/images/stadiums/basketball.png", import.meta.url).href,
						name: '篮球',
						num: 165,
						id: 2
					},
					{
						url: new URL("@/assets/images/stadiums/tennis.png", import.meta.url).href,
						name: '网球',
						num: 132,
						id: 3
					},
					]
				],
				dataList: [{
					id: 1,
					name: '今日',
					num: 0
				},
				{
					id: 2,
					name: '滚球中',
					num: 0
				},
				{
					id: 3,
					name: '早盘',
					num: 0
				},
				{
					id: 4,
					name: '热门',
					num: 0
				},
				{
					id: 5,
					name: '冠军',
					num: 0
				}],
            }
        },
        mounted() {	
			this.get_sports_data();
			
        },
		methods:{
			async get_sports_data() {
				try {
					console.log('conutOfSports_Success');
					let url = config.api.GET_SPORTS_DATA;
					let data = {
					type: '',
					m_date: '',
					get_type: '',
					}
					let header;
					const response = (await axios.post(url, data, header)).data;
					const cateData: Cate[] = response;
					this.sportData['FT'] = cateData.filter((Cate) => Cate.Type == 'FT')
					console.log('sport_FT_data', cateData.filter((Cate) => Cate.M_date == '2021-07-10').length);

					this.sportData['BK'] = cateData.filter((Cate) => Cate.Type == 'BK')
					this.dataList[0].num = cateData.filter((Cate) => Cate.M_Date == '2021-07-11').length //add current date
					//other sports
					// this.sportData['VB'] = cateData.filter((Cate) => Cate.Type == 'VB')
					// this.sportData['TN'] = cateData.filter((Cate) => Cate.Type == 'TN')
					// this.sportData['OP'] = cateData.filter((Cate) => Cate.Type == 'OP')
					this.projectList[0][0].num = this.sportData['FT'].length
					this.projectList[0][1].num = this.sportData['BK'].length
					
					return response;
				} catch (e) {
					console.log(e);
					return e;
				}
			},
		}
	});
</script>
<template>
	<div class="stadium_bottom animated fadeInLeft">
		<div class="broadcast">
			<img src="@/assets/images/stadiums/broadcast.png" alt="">
			<div class="text">
				<span>欢迎来到皇冠体育，中国队马上就要和日本的干翻 了中国队马上就要和日本的干翻</span>
			</div>
		</div>
		<div class="game_list">
			<div class="game_item" v-for="(item, index) in gameList" :key="item.id">
				<img :src="item.icon" alt="">
				<span>{{ item.name }}</span>
			</div>
		</div>
		<div class="data_list">
			<div class="data_title" @click="selectTab(0)">
				<div class="data_title_l" :class="{ select: active == 0 }">
					<span class="text_top">全部</span>
					<span>体育</span>
				</div>
				<div class="data_title_r"></div>
			</div>
			<div class="data_item" v-for="(item, index) in dataList" :key="item.name" @click="selectTab(item.id)">
				<div class="data_item_l" :class="{ select: active == item.id }">
					<span class="text_top">{{ item.name }}</span>
					<span>{{ item.num }}</span>
				</div>
				<div class="data_item_r" v-if="index + 1 !== dataList.length"></div>
			</div>
		</div>
		<div class="tab_list animated fadeInLeft">
			<div class="tab_list_item" v-for="(item, index) in projectList[active]" @click="goDetail">
				<img class="tab_back" :src="item.url" alt="">
				<img class="collection" src="@/assets/images/stadiums/collection.png" alt="">
				<span class="tab_text1">{{ item.name }}</span>
				<span class="tab_text2">{{ item.num }}</span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import router from '@/router';
import { ref } from 'vue'

const active = ref(0)
const gameList = ref([{
	id: 1,
	name: '*FIFA世界杯2022(在卡塔尔)',
	icon: new URL("@/assets/images/stadiums/icon1.png", import.meta.url).href
},
{
	id: 2,
	name: '*欧洲冠军联赛',
	icon: new URL("@/assets/images/stadiums/icon2.png", import.meta.url).href
},
{
	id: 3,
	name: '*英格兰超级联赛',
	icon: new URL("@/assets/images/stadiums/icon3.png", import.meta.url).href
}
])
// const dataList = ref([{
// 	id: 1,
// 	name: '今日',
// 	num: 543
// },
// {
// 	id: 2,
// 	name: '滚球中',
// 	num: 85
// },
// {
// 	id: 3,
// 	name: '早盘',
// 	num: 697
// },
// {
// 	id: 4,
// 	name: '热门',
// 	num: 30
// },
// {
// 	id: 5,
// 	name: '冠军',
// 	num: 241
// }
// ])
// const projectList = ref([
// 	[{
// 		url: new URL("@/assets/images/stadiums/football.png", import.meta.url).href,
// 		name: '足球',
// 		num: 132,
// 		id: 1
// 	},
// 	{
// 		url: new URL("@/assets/images/stadiums/basketball.png", import.meta.url).href,
// 		name: '篮球',
// 		num: 165,
// 		id: 2
// 	},
// 	{
// 		url: new URL("@/assets/images/stadiums/tennis.png", import.meta.url).href,
// 		name: '网球',
// 		num: 132,
// 		id: 3
// 	},
// 	{
// 		url: new URL("@/assets/images/stadiums/pingpong.png", import.meta.url).href,
// 		name: '乒乓球',
// 		num: 79,
// 		id: 4
// 	},
// 	{
// 		url: new URL("@/assets/images/stadiums/snooker.png", import.meta.url).href,
// 		name: '斯诺克英式台球',
// 		num: 4,
// 		id: 5
// 	}
// 	],
// 	[{
// 		url: new URL("@/assets/images/stadiums/football.png", import.meta.url).href,
// 		name: '足球',
// 		num: 132,
// 		id: 1
// 	},
// 	{
// 		url: new URL("@/assets/images/stadiums/basketball.png", import.meta.url).href,
// 		name: '篮球',
// 		num: 165,
// 		id: 2
// 	},
// 	{
// 		url: new URL("@/assets/images/stadiums/tennis.png", import.meta.url).href,
// 		name: '网球',
// 		num: 132,
// 		id: 3
// 	},
// 	{
// 		url: new URL("@/assets/images/stadiums/pingpong.png", import.meta.url).href,
// 		name: '乒乓球',
// 		num: 79,
// 		id: 4
// 	},
// 	{
// 		url: new URL("@/assets/images/stadiums/snooker.png", import.meta.url).href,
// 		name: '斯诺克英式台球',
// 		num: 4,
// 		id: 5
// 	}
// 	],
// 	[{
// 		url: new URL("@/assets/images/stadiums/football.png", import.meta.url).href,
// 		name: '足球',
// 		num: 132,
// 		id: 1
// 	},
// 	{
// 		url: new URL("@/assets/images/stadiums/basketball.png", import.meta.url).href,
// 		name: '篮球',
// 		num: 165,
// 		id: 2
// 	},
// 	{
// 		url: new URL("@/assets/images/stadiums/tennis.png", import.meta.url).href,
// 		name: '网球',
// 		num: 132,
// 		id: 3
// 	},
// 	{
// 		url: new URL("@/assets/images/stadiums/pingpong.png", import.meta.url).href,
// 		name: '乒乓球',
// 		num: 79,
// 		id: 4
// 	}
// 	],
// 	[{
// 		url: new URL("@/assets/images/stadiums/football.png", import.meta.url).href,
// 		name: '足球',
// 		num: 132,
// 		id: 1
// 	},
// 	{
// 		url: new URL("@/assets/images/stadiums/basketball.png", import.meta.url).href,
// 		name: '篮球',
// 		num: 165,
// 		id: 2
// 	}
// 	],
// 	[{
// 		url: new URL("@/assets/images/stadiums/football.png", import.meta.url).href,
// 		name: '足球',
// 		num: 132,
// 		id: 1
// 	},
// 	{
// 		url: new URL("@/assets/images/stadiums/basketball.png", import.meta.url).href,
// 		name: '篮球',
// 		num: 165,
// 		id: 2
// 	},
// 	{
// 		url: new URL("@/assets/images/stadiums/tennis.png", import.meta.url).href,
// 		name: '网球',
// 		num: 132,
// 		id: 3
// 	},
// 	{
// 		url: new URL("@/assets/images/stadiums/pingpong.png", import.meta.url).href,
// 		name: '乒乓球',
// 		num: 79,
// 		id: 4
// 	}
// 	],
// 	[{
// 		url: new URL("@/assets/images/stadiums/football.png", import.meta.url).href,
// 		name: '足球',
// 		num: 132,
// 		id: 1
// 	},
// 	{
// 		url: new URL("@/assets/images/stadiums/basketball.png", import.meta.url).href,
// 		name: '篮球',
// 		num: 165,
// 		id: 2
// 	},
// 	{
// 		url: new URL("@/assets/images/stadiums/tennis.png", import.meta.url).href,
// 		name: '网球',
// 		num: 132,
// 		id: 3
// 	},
// 	]
// ])
const selectTab = (id: number) => {
	active.value = id
}
const goDetail = () => {
	router.push({ name: 'stadiumsDetail' })
}

</script>

<style lang="scss" scoped>
.broadcast {
	display: flex;
	align-items: center;
	height: 22px;
	background-color: #FFFFFF;
	padding: 0 13px;
	margin-top: 5px;

	img {
		width: 17px;
		height: 16px;
		margin-right: 8px;
	}

	.text {
		width: 323px;
		overflow: hidden;
		height: 22px;
		display: flex;
		align-items: center;

		span {

			font-size: 14px;
			color: #56565A;
			white-space: nowrap;
			width: 323px;
		}
	}

}

.game_list {
	// width: 375px;
	width: inherit;
	overflow-x: scroll;
	display: flex;
	align-items: center;
	height: 49px;
	padding-left: 13px;

	.game_item {
		display: flex;
		align-items: center;
		padding-right: 35px;
		margin-right: 12px;
		background-color: #F3F3F3;
		height: 33px;
		border-radius: 17px;

		img {
			height: 26px;
			margin-left: 6px;
		}

		span {
			font-size: 13px;
			white-space: nowrap;
			color: #676782;
		}
	}
}

.game_list::-webkit-scrollbar {
	display: none;
}

.data_list {
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #FFFFFF;
	height: 58px;
	padding: 0 19px;

	span {
		font-size: 13px;
		color: #676782;
	}

	.text_top {
		margin-bottom: 5px;
	}

	.data_title {
		display: flex;
		align-items: center;
		margin-left: 7px;

		.data_title_l {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.data_title_r {
			background-color: #676782;
			width: 2px;
			height: 33px;
			margin-left: 19px;
		}
	}

	.data_item {
		display: flex;
		align-items: center;

		.data_item_l {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.data_item_r {
			background-color: #676782;
			width: 1px;
			height: 12px;
			margin-left: 19px;
		}
	}

	.select {
		span {
			color: #4EABFF;
		}
	}
}

.tab_list {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 23px;

	.tab_list_item {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		width: 361px;
		height: 96px;

		.tab_back {
			width: 361px;
			height: 96px;
			position: absolute;
			top: 0;
			left: 0;
		}

		.collection {
			width: 16px;
			height: 16px;
			position: absolute;
			right: 13px;
			top: 22px;
			z-index: 2;
		}

		span {
			position: relative;
			z-index: 2;
		}

		.tab_text1 {
			font-size: 17px;
			font-family: FZDaHei-B02;
			font-weight: 400;
			color: #FFFFFF;
			margin-right: 13px;
		}

		.tab_text2 {
			font-size: 27px;
			font-family: Adobe Heiti Std;
			font-weight: normal;
			color: #FFFFFF;
			margin-right: 40px;
		}
	}
}
</style>