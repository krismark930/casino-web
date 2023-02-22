<template>
	<div>
		<div v-if="historyList">
			<div class="time_box">
				<div @click="getstartTime">
					<span>从</span>
					<span>{{ startTime }}</span>
				</div>
				<div @click="getendTime">
					<span>从</span>
					<span>{{ endTime }}</span>
				</div>
				<img src="@/assets/images/stadiums/searchs.png" alt="">
			</div>
			<div class="history_list">
				<div class="history_title">
					<div class="history_data">
						<p>日期</p>
					</div>
					<span>投注金额</span>
					<span>有效金额</span>
					<span>赢/输</span>
				</div>
				<div class="history_center">
					<div class="history_item" v-for="(item, index) in historyList" :key="index">
						<div class="history_data">
							<p>{{ item.date }}</p>
							<p>{{ item.week }}</p>
						</div>
						<span>{{ item.amount }}</span>
						<span>{{ item.eAmount }}</span>
						<span>{{ item.lose }}</span>
					</div>
				</div>
				<div class="history_footer">
					<div class="history_data">
						<p>总共</p>
					</div>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</div>
		<div v-if="!historyList" class="not">
			<img src="@/assets/images/stadiums/not.png" alt="">
		</div>
		<div>
			<van-popup position='bottom' v-model="startTimeType">
				<van-datetime-picker v-model="currentDate" type="date" title="选择年月日" :min-date="minDate"
					:max-date="maxDate" @confirm='startconfirm' />
			</van-popup>
			<van-popup position='bottom' v-model="endTimeType">
				<van-datetime-picker v-model="currentDate1" type="date" title="选择年月日" :min-date="minDate1"
					:max-date="maxDate1" @confirm='endconfirm' />
			</van-popup>
		</div>
	</div>
</template>

<script setup lang="ts">

import { date } from '@/utils/util';
import { ref } from 'vue';
const startTime = ref(date('Y-m-d', new Date().getTime() / 1000));
const endTime = ref(date('Y-m-d', new Date().getTime() / 1000));
const startTimeType = ref(false);
const endTimeType = ref(false);
const minDate = ref(new Date(2020, 0, 1));
const maxDate = ref(new Date(2025, 10, 1));
const currentDate = ref(new Date().getTime());
const currentDate1 = ref(new Date().getTime());
const minDate1 = ref(new Date(2020, 0, 1));
const maxDate1 = ref(new Date(2025, 10, 1));
const historyList = ref([
	{
		date: '11月18日',
		week: '星期五',
		amount: '50.00',
		eAmount: '50.00',
		lose: '输'
	},
	{
		date: '11月17日',
		week: '星期四',
		amount: '50.00',
		eAmount: '50.00',
		lose: '赢'
	},
	{
		date: '11月16日',
		week: '星期三',
		amount: '50.00',
		eAmount: '50.00',
		lose: '输'
	},
	{
		date: '11月15日',
		week: '星期二',
		amount: '50.00',
		eAmount: '50.00',
		lose: '输'
	}
])
const getstartTime = () => {
	startTimeType.value = true
};
const getendTime = () => {
	startTimeType.value = true
};
const startconfirm = (time:Date) => {
	startTimeType.value = false
	startTime.value = date('Y-m-d', time.getTime() / 1000)
};
const endconfirm = (time:Date) => {
	endTimeType.value = false
	endTime.value = date('Y-m-d', time.getTime() / 1000)
};

</script>

<style scoped lang="scss">
.time_box {
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #FFFFFF;
	// height: 36px;
	padding: 5px 21px;

	div {
		width: 119px;
		height: 39px;
		font-size: 13px;
		color: #454558;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding-left: 19px;
		background-color: #F7F7FF;
	}

	img {
		width: 38px;
		height: 38px;
	}
}

.not {
	background-color: #F3FAFF;
	width: 100%;
	display: flex;
	justify-content: center;
	margin-top: 87px;

	img {
		width: 153px;
		height: 130px;
	}
}

.history_list {
	div {
		display: flex;
		align-items: center;
	}

	.history_title,
	.history_footer {
		font-size: 17px;
		color: #000000;
		height: 46px;
		background-color: #D8E0E6;
		justify-content: space-between;
	}

	.history_title,
	.history_footer,
	.history_center {
		.history_data {
			width: 25%;
			display: flex;
			justify-content: center;

			p {
				text-align: center;
			}

		}

		span {
			width: 25%;
			text-align: center;
		}
	}

	.history_center {
		display: flex;
		flex-direction: column;
		font-size: 13px;
		color: #454558;

		// padding: 0 21px;
		div {
			display: flex;
		}

		.history_item {
			height: 46px;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.history_data {
				display: flex;
				flex-direction: column;
			}

			// span{
			// 	text-align: center;
			// }
		}

	}
}
</style>