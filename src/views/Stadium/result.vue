<template>
	<div>
		<div class="top_tab">
			<van-tabs color='#4EABFF' title-active-color='#4EABFF' v-model:active="active">
				<van-tab v-for="(tabItem, tabIndex) in tabList" :title="tabItem.name"></van-tab>
			</van-tabs>
		</div>
		<div class="calendar">
			<van-tabs background='#F3FAFF' color='#4EABFF' title-active-color='#4EABFF' v-model:active="selectedDay"
				@change="selectDate">
				<van-tab v-for="(dayItem, dayIndex) in dayList" :title="dayItem.name" :key="dayIndex"></van-tab>
			</van-tabs>
		</div>
		<div class="results_title">
			<div class="select_title" @click="selectResult">
				<span>{{ gameList[gameIndex].name }}</span>
				<van-icon class="select_icon" name="arrow-down" />
			</div>
			<div class="select_box" v-show="openSelect">
				<span v-for="(gameItem, gameIndex) in gameList" @click="selectGameIndex(gameIndex)">{{ gameItem.name
				}}</span>
			</div>
		</div>
		<div v-if="collapseList.length > 0">
			<van-collapse v-model="collapseActiveIndex" accordion>
				<van-collapse-item v-for="(collapseItem, collapseIndex) in collapseList" :key="collapseIndex"
					:title="collapseItem.name" :name="collapseIndex + 1">
					<div v-for="(gameResultItem, gameResultIndex) in collapseItem.gameResultList" :key="gameResultIndex">
						<div class="collapse_title">
							<p v-for="(title, titleIdex) in gameResultItem.titletext" :key="titleIdex">{{ title }}</p>
						</div>
						<div class="collapse_content">
							<div class="collapse_box" v-for="(score, scoreIndex) in gameResultItem.scoreList"
								:key="scoreIndex">
								<p>{{ score.name }}</p>
								<div v-for="(num, numIndex) in score.nums" :key="numIndex">
									<span>{{ num === "" ? 0 : num }}</span>
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
<script lang="ts">
import { gameResultStore } from "@/stores/gameResult";
export default {
	setup() {
		const { dispatchGameResult } = gameResultStore();
		return {
			dispatchGameResult
		}
	},
	data() {
		return {
			selectedDay: 0,
			gameIndex: 0,
			selectedDate: new Date(),
			dayList: [],
			openSelect: false,
			active: 0,
			collapseActiveIndex: 1,
			tabList: [
				{
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
			],
			gameList: [
				{
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
			]
		}
	},
	computed: {
		collapseList: function () {
			const { getCollapseList } = gameResultStore();
			console.log(getCollapseList);
			return getCollapseList;
		}
	},
	watch: {
		active: async function (newActive) {
			await this.dispatchGameResult(this.gameIndex, this.selectedDate, newActive)
		}
	},
	methods: {
		selectResult() {
			this.openSelect = !this.openSelect
		},
		async selectGameIndex(gameIndex: number) {
			this.gameIndex = gameIndex
			this.openSelect = !this.openSelect
			await this.dispatchGameResult(this.gameIndex, this.selectedDate, this.active)
		},
		async selectDate(index) {
			this.selectedDate = this.dayList[index].date
			await this.dispatchGameResult(this.gameIndex, this.selectedDate, this.active)
		},
	},
	async mounted() {
		for (var i = 0; i < 7; i++) {
			var date = new Date()
			date.setTime(date.getTime() - 24 * 60 * 60 * 1000 * i);
			this.dayList.push({ date: date, name: date.getMonth() + 1 + '/' + date.getDate() })
		}
		await this.dispatchGameResult(this.gameIndex, new Date(), this.active)
	},
}
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
