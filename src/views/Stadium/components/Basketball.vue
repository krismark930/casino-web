<template>
	<div>
		<div class="game_list" v-for="(item, index) in tableList" :key="index + 100">
			<div class="center_title">
				<span>{{ item.name }}</span>
				<img :src="item.icon" alt="">
			</div>
			<div class="center_item" v-for="(data, indexs) in item.gameList" :key="indexs + 300">
				<div class="table_title table_list">
					<div v-for="(title, k) in data.titletext" :key="k + 400">
						<span v-if="title.text1">{{ title.text1 }}</span>
						<span v-if="(title as any).text2===null?false:true">{{ (title as any).text2 }}</span>
					</div>
				</div>
				<div class="table_text table_list" v-for="(datalist, idx) in data.scoreList" :key="idx + 300">
					<div class="table_text_l">
						<span>{{ datalist.goalsScored }}</span>
						<span>{{ datalist.name }}</span>
					</div>
					<div class="table_text_r" v-for="(num, idx) in datalist.nums" :key="idx + 200">
						<div v-if="num.type == 1">
							<span v-if="num.text">{{ num.text }}</span>
							<span v-if="num.num">{{ num.num }}</span>
						</div>
						<div class="lock" v-if="num.type == 2">
							<img src="@/assets/images/stadiums/lock.png" alt="">
						</div>
					</div>
				</div>
				<div class="store_up">
					<img src="@/assets/images/stadiums/store_up.png" alt="">
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const tableList = ref([
	{
		name: 'NBA美国职业篮球联赛',
		icon: new URL("@/assets/images/stadiums/title-icon.png", import.meta.url).href,
		gameList: [
			{
				titletext: [{
					text1: '第三节 11:19 '
				},
				{
					text1: '让球'
				},
				{
					text1: '总分'
				},
				{
					text1: '第一队得分'
				},
				{
					text1: '第二队得分'
				}
				],
				scoreList: [{
					goalsScored: 64,
					name: '金州勇士',

					nums: [{
						type: 1,
						text: '12.5',
						num: '1.88'
					},
					{
						type: 1,
						text: '大217.5',
						num: '1.83'
					},
					{
						type: 1,
						text: '大115.5',
						num: '1.85'
					},
					{
						type: 1,
						text: '大100.5',
						num: '1.85'
					}
					]
				},
				{
					goalsScored: 52,
					name: '纽约尼克斯',
					nums: [{
						type: 1,
						num: '1.88'
					},
					{
						type: 1,
						text: '小215.5',
						num: '1.83'
					},
					{
						type: 1,
						text: '小115.5',
						num: '1.81'
					},
					{
						type: 1,
						text: '小100.5',
						num: '1.81'
					}
					]
				}
				],
			},
			{
				titletext: [{
					text1: '半场'
				},
				{
					text1: '让球',
					text2: '下半场'
				},
				{
					text1: '总分',
					text2: '下半场'
				},
				{
					text1: '让球',
					text2: '第4节'
				},
				{
					text1: '总分',
					text2: '第4节'
				}
				],
				scoreList: [{
					goalsScored: 64,
					name: '洛杉矶湖人',
					nums: [{
						type: 2,
						text: '12.5',
						num: '1.88'
					},
					{
						type: 2,
						text: '大217.5',
						num: '1.83'
					},
					{
						type: 2,
						text: '大115.5',
						num: '1.85'
					},
					{
						type: 2,
						text: '大100.5',
						num: '1.85'
					}
					]
				},
				{
					goalsScored: 52,
					name: '底特津活塞',
					type: 2,
					nums: [{
						type: 2,
						num: '1.88'
					},
					{
						type: 2,
						text: '小215.5',
						num: '1.83'
					},
					{
						type: 2,
						text: '小115.5',
						num: '1.81'
					},
					{
						type: 2,
						text: '小100.5',
						num: '1.81'
					}
					]
				}
				]
			}]
	},
	{
		name: 'NBA美国职业篮球联赛',
		icon: new URL("@/assets/images/stadiums/title-icon.png", import.meta.url).href,
		gameList: [
			{
			titletext: [{
				text1: '第三节 11:19 '
			},
			{
				text1: '让球'
			},
			{
				text1: '总分'
			},
			{
				text1: '第一队得分'
			},
			{
				text1: '第二队得分'
			}
			],
			scoreList: [{
				goalsScored: 64,
				name: '金州勇士',

				nums: [{
					type: 1,
					text: '12.5',
					num: '1.88'
				},
				{
					type: 1,
					text: '大217.5',
					num: '1.83'
				},
				{
					type: 1,
					text: '大115.5',
					num: '1.85'
				},
				{
					type: 1,
					text: '大100.5',
					num: '1.85'
				}
				]
			},
			{
				goalsScored: 52,
				name: '纽约尼克斯',
				nums: [{
					type: 1,
					num: '1.88'
				},
				{
					type: 1,
					text: '小215.5',
					num: '1.83'
				},
				{
					type: 1,
					text: '小115.5',
					num: '1.81'
				},
				{
					type: 1,
					text: '小100.5',
					num: '1.81'
				}
				]
			}
			],
		}, 
		{
			titletext: [{
				text1: '第三节 11:19 '
			},
			{
				text1: '让球'
			},
			{
				text1: '总分'
			},
			{
				text1: '第一队得分'
			},
			{
				text1: '第二队得分'
			}
			],
			scoreList: [{
				goalsScored: 64,
				name: '金州勇士',

				nums: [{
					type: 1,
					text: '12.5',
					num: '1.88'
				},
				{
					type: 1,
					text: '大217.5',
					num: '1.83'
				},
				{
					type: 1,
					text: '大115.5',
					num: '1.85'
				},
				{
					type: 1,
					text: '大100.5',
					num: '1.85'
				}
				]
			},
			{
				goalsScored: 52,
				name: '纽约尼克斯',
				nums: [{
					type: 1,
					num: '1.88'
				},
				{
					type: 1,
					text: '小215.5',
					num: '1.83'
				},
				{
					type: 1,
					text: '小115.5',
					num: '1.81'
				},
				{
					type: 1,
					text: '小100.5',
					num: '1.81'
				}
				]
			}
			],
		},]
	}

])
</script>

<style scoped lang="scss">
.center_title {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 40px;
	background-color: #F3FAFF;
	padding: 0 14px;

	span {
		font-size: 17px;
		color: #000000;
	}

	img {
		width: 28px;
		height: 28px;
	}
}


.center_item {
	padding-left: 13px;
	font-size: 12px;
	background-color: #FFFFFF;
	color: #5C546A;

	.table_list {
		display: flex;
		text-align: center;

		div {
			width: 61px;
			margin-right: 5px;
		}

		div:first-child {
			width: 83px;
			margin-right: 13px;
			text-align: left;
		}

		div:last-child {
			margin-right: 0;
		}
	}

	.table_title {
		min-height: 32px;

		div {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-top: 7px;
		}
	}

	.table_text {
		height: 41px;
		align-items: center;
		margin-top: 6px;

		.table_text_r {

			div {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: 59px;
				height: 42px;
				border: 1px solid #CECECE;
				border-radius: 5px;

				span {
					color: #000000;
				}

				span:last-child {
					color: #E80909;
				}
			}

			.lock {
				background-color: #F3FAFF;

				img {
					width: 13px;
					height: 18px;
				}
			}
		}

		.table_text_l {
			span:first-child {
				color: #FF7100;
				margin-right: 8px;
			}
		}
	}

	.store_up {
		height: 34px;
		display: flex;
		align-items: center;

		img {
			width: 17px;
			height: 17px;
			margin-left: 72px;
		}
	}
}

.center_item:last-child {
	border-top: 12px solid #F3FAFF !important;
}
</style>
