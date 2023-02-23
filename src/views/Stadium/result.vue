<script lang="ts">
import axios from 'axios'
import {formatDate} from '../../utils/util'


export default {
	data(){
		return {
			selectedDay: 0,
			index : 0,
			selectedDate : new Date(),
			collapseList:[],
			dayList:[],
			openSelect : false,
			active : 0,
			count : 1
		}
	},
	mounted(){
		for(var i = 0; i < 7 ; i ++){
			var date = new Date()
			date.setTime(date.getTime() - 24 * 60 * 60 * 1000 * i);
			this.dayList.push({date:date,name: date.getMonth() + 1 +'/' + date.getDate()})
		}
		console.log(this.dayList)
		this.resultData(0,new Date());
	},
	methods: {
		selectResult () {
			this.openSelect = !this.openSelect
		},
		select (value: number) {
			this.index = value
			console.log(this.index)
			this.openSelect = !this.openSelect
			this.resultData(this.index, this.selectedDate)
		},
		selectDate (e) {
			this.selectedDate=this.dayList[e].date
			// console.log(this.Date)
			this.resultData(this.index, this.selectedDate)
		},
		resultData (gametype:any, selectedDate:any) {
			if (gametype == 0) {
				console.log(selectedDate)
				axios.post("http://127.0.0.1:8000/api/result/get_result_ft", {
				date:formatDate(selectedDate) 
				// date:"2021-06-29" //  Test Mode  //
				})
				.then(response => {
					const tmpCollapseList = [...response.data.data];
					const duplicatedLeagueNames = tmpCollapseList.map(item => item.M_League);
					const leagueNames = duplicatedLeagueNames.filter((item, index) => duplicatedLeagueNames.indexOf(item) === index)
					this.count = response.data.count
					this.collapseList = leagueNames.map(item => {
						return	{
							name: item,
							gameList: []
						}
					})
					tmpCollapseList.map(item => {
						const idx = leagueNames.indexOf(item.M_League);
						console.log(idx)
						this.collapseList[idx].gameList.push(
							{
								titletext: [item.M_Start, '上半场', '全场'],
								scoreList: [{
									name: item.MB_Team,
									nums: [item.MB_Inball_HR, item.MB_Inball]
								},
								{
									name: item.TG_Team,
									nums: [item.TG_Inball_HR, item.TG_Inball]
								},
								],
							}
						)
					})
				})
			}
			if (gametype == 1) {
				this.count = 1
				this.collapseList = [{
					name: 'NBA美国职业篮球联赛',
					gameList: [{
						titletext: ['11月22日 03：00', '全场', '上半场', '下半场'],
						scoreList: [{
							name: '金州勇士',
							nums: [129, 59, 70]
						},
						{
							name: '金州勇士',
							nums: [129, 59, 70]
						},
						],
					},
					{
						titletext: ['11月22日 00:00', '第一节', '第二节', '第三节'],
						scoreList: [{
							name: '洛杉矶快船',
							nums: [23, 22, 38]
						},
						{
							name: '丹佛掘金',
							nums: [37, 28, 35]
						},
						],
					},
					{
						titletext: ['11月22日 03：00', '第四节', '加时', '上半场'],
						scoreList: [{
							name: '萨达姆',
							nums: [35, , 59]
						},
						{
							name: '拜登',
							nums: [32, , 51]
						},
						],
					},

					]
				},
				{
					name: '土耳其篮球超级联赛',
					gameList: [{
						titletext: ['11月22日 03：00', '全场', '上半场', '下半场'],
						scoreList: [{
							name: '金州勇士',
							nums: [129, 59, 70]
						},
						{
							name: '金州勇士',
							nums: [129, 59, 70]
						},
						],
					},
					{
						titletext: ['11月22日 00:00', '第一节', '第二节', '第三节'],
						scoreList: [{
							name: '洛杉矶快船',
							nums: [23, 22, 38]
						},
						{
							name: '丹佛掘金',
							nums: [37, 28, 35]
						},
						],
					},
					{
						titletext: ['11月22日 03：00', '第四节', '加时', '上半场'],
						scoreList: [{
							name: '萨达姆',
							nums: [35, , 59]
						},
						{
							name: '拜登',
							nums: [32, , 51]
						},
						],
					},

					]
				},
				]
			}
		}
	}
}
</script>

<!-- 赛果 -->
<template>
	<div>
		<div class="top_tab">
			<van-tabs color='#4EABFF' title-active-color='#4EABFF' v-model="active">
				<van-tab v-for="(item, index) in tabList" :title="item.name"></van-tab>
			</van-tabs>
		</div>
		<div class="calendar">
			<van-tabs background='#F3FAFF' color='#4EABFF' title-active-color='#4EABFF' v-model:active="selectedDay" @change="selectDate">
				<van-tab v-for="(item, index) in dayList" :title="item.name" :key="index"></van-tab>
			</van-tabs>
		</div>
		<div class="results_title">
			<div class="select_title" @click="selectResult">
				<span>{{ gameList[index].name }}</span>
				<van-icon class="select_icon" name="arrow-down" />
			</div>
			<div class="select_box" v-show="openSelect">
				<span v-for="(item, index) in gameList" @click="select(index)">{{ item.name }}</span>
			</div>
		</div>
		
		<div v-if="this.count!==0">
			<van-collapse v-model="activeNames">
				<van-collapse-item v-for="(item, index) in collapseList" :key="index + 200" :title="item.name"
					:name="index + 1">
					<div v-for="(list, i) in item.gameList" :key="i + 400">
						<div class="collapse_title">
							<p v-for="(title, k) in list.titletext" :key="k + 600">{{ title }}</p>
						</div>
						<div class="collapse_content">
							<div class="collapse_box" v-for="(score, y) in list.scoreList" :key="y + 800">
								<p>{{ score.name }}</p>
								<div v-for="(num, z) in score.nums" :key="z + 800">
									<span>{{ num }}</span>
								</div>
							</div>

						</div>
					</div>
				</van-collapse-item>
			</van-collapse>
		</div>
		<div v-else class="temp">
				<p>没有符合的数据</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'


// const openSelect = ref(false)
// const index = ref(0)
// const active = ref(0)
const activeNames = ref([1])
const tabList = ref([{
	name: '滚球中',
	id: 1
},
{
	name: '完成',
	id: 2
},
{
	name: '冠军',
	id: 3
}
])
// const dayList = ref([{
// 	name: '11/22',
// },
// {
// 	name: '11/21',
// },
// {
// 	name: '11/20',
// },
// {
// 	name: '11/19',
// },
// {
// 	name: '11/18',
// },
// {
// 	name: '11/17',
// }
// ])
const gameList = ref([{
	name: '足球',
	id: 1
},
{
	name: '篮球',
	id: 2
},
{
	name: '乒乓球',
	id: 3
}
])
// const collapseList1 = ref([{
// 	name: 'NBA美国职业篮球联赛',
// 	gameList: [{
// 		titletext: ['11月22日 03：00', '全场', '上半场', '下半场'],
// 		scoreList: [{
// 			name: '金州勇士',
// 			nums: [129, 59, 70]
// 		},
// 		{
// 			name: '金州勇士',
// 			nums: [129, 59, 70]
// 		},
// 		],
// 	},
// 	{
// 		titletext: ['11月22日 00:00', '第一节', '第二节', '第三节'],
// 		scoreList: [{
// 			name: '洛杉矶快船',
// 			nums: [23, 22, 38]
// 		},
// 		{
// 			name: '丹佛掘金',
// 			nums: [37, 28, 35]
// 		},
// 		],
// 	},
// 	{
// 		titletext: ['11月22日 03：00', '第四节', '加时', '上半场'],
// 		scoreList: [{
// 			name: '萨达姆',
// 			nums: [35, , 59]
// 		},
// 		{
// 			name: '拜登',
// 			nums: [32, , 51]
// 		},
// 		],
// 	},

// 	]
// },
// {
// 	name: '土耳其篮球超级联赛',
// 	gameList: [{
// 		titletext: ['11月22日 03：00', '全场', '上半场', '下半场'],
// 		scoreList: [{
// 			name: '金州勇士',
// 			nums: [129, 59, 70]
// 		},
// 		{
// 			name: '金州勇士',
// 			nums: [129, 59, 70]
// 		},
// 		],
// 	},
// 	{
// 		titletext: ['11月22日 00:00', '第一节', '第二节', '第三节'],
// 		scoreList: [{
// 			name: '洛杉矶快船',
// 			nums: [23, 22, 38]
// 		},
// 		{
// 			name: '丹佛掘金',
// 			nums: [37, 28, 35]
// 		},
// 		],
// 	},
// 	{
// 		titletext: ['11月22日 03：00', '第四节', '加时', '上半场'],
// 		scoreList: [{
// 			name: '萨达姆',
// 			nums: [35, , 59]
// 		},
// 		{
// 			name: '拜登',
// 			nums: [32, , 51]
// 		},
// 		],
// 	},

// 	]
// },
// {
// 	name: '斯洛文尼亚SKL',
// 	gameList: [{
// 		titletext: ['11月22日 03：00', '全场', '上半场', '下半场'],
// 		scoreList: [{
// 			name: 'KK波德切特泰克',
// 			nums: [100, 26, 74]
// 		},
// 		{
// 			name: 'KK罗加什卡',
// 			nums: [100, 62, 38]
// 		},
// 		],
// 	}

// 	]
// },
// {
// 	name: '马来西亚篮球联赛',
// 	gameList: [{
// 		titletext: ['11月22日 03：00', '全场', '上半场', '下半场'],
// 		scoreList: [{
// 			name: 'KK波德切特泰克',
// 			nums: [100, 26, 74]
// 		},
// 		{
// 			name: 'KK罗加什卡',
// 			nums: [100, 62, 38]
// 		},
// 		],
// 	}

// 	]
// }
// ])

// const selectResult = () => {
// 	openSelect.value = !openSelect.value
// }
// const select = (value: number) => {
// 	index.value = value
// 	openSelect.value = !openSelect.value
// }
</script>

<style scoped lang="scss">
.top_tab {
	padding: 0 100px;
}
.temp {
	display: flex;
	margin: 120px auto;
	width: 140px;
	font-size: 20px;
	align-items: center;
	position: relative;
	justify-content: space-between;
	color: #5C546A;
}

.results_title {
	width: 136px;
	font-size: 13px;
	height: 25px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #F3FAFF;
	position: relative;
	margin: 6px auto;
	color: #5C546A;

	.select_title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 136px;
		border-radius: 5px;

		span {
			margin-left: 55px;
			// margin-right: 35px;
		}

		.select_icon {
			margin-right: 8px;
			font-size: 17px;
			font-weight: 600;
			// transform:rotate(270deg);
		}
	}

	.select_box {
		position: absolute;
		top: 25px;
		left: 0px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		background-color: #FFFFFF;
		border: 1px solid #F3FAFF;
		z-index: 2;

		span {
			width: 134px;
			text-align: center;
			line-height: 30px;
			border-bottom: 1px solid #F3FAFF;
		}
	}
}


.collapse_title {
	display: flex;
	margin-top: 10px;
	margin-bottom: 8px;

	p {
		width: 61px;
		text-align: center;
		margin-left: 6px;
	}

	p:first-child {
		width: 170px;
		margin-left: 8px;
		text-align: left;
	}
}

.collapse_content {
	border-bottom: 1px solid #D0D8DE;

	.collapse_box {
		display: flex;
		margin-bottom: 7px;

		p {
			width: 170px;
			margin-left: 8px;
			color: #000000;
		}

		div {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 59px;
			height: 42px;
			background: #F3FAFF;
			border: 1px solid #CECECE;
			border-radius: 5px;
			margin-left: 6px;
		}
	}
}
</style>
