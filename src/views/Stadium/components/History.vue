<template>
	<div>
		<van-loading color="#1989fa" class="loading-position" v-if="loading" size="40" />
		<div>
			<div class="time_box">
				<div @click="showFromDatePicker">
					<span>从</span>
					<span>{{ fromDate }}</span>
				</div>
				<div @click="showEndDatePicker">
					<span>直到</span>
					<span>{{ endDate }}</span>
				</div>
				<img src="@/assets/images/stadiums/searchs.png" alt="" @click="searchHistoryByDate">
			</div>
			<div class="history_list" v-if="historyList.length !== 0">
				<div class="history_title">
					<div class="history_data">
						<p>日期</p>
					</div>
					<span>投注金额</span>
					<span>有效金额</span>
					<span>派彩結果</span>
				</div>
				<div class="history_center">
					<div class="history_item" v-for="(item, index) in historyList" :key="index">
						<div class="history_data">
							<p>{{ item.m_date }}</p>
							<p>{{ item.week }}</p>
						</div>
						<span>{{ item.betscore }}</span>
						<span>{{ Number(item.v_gold).toFixed(2) }}</span>
						<span>{{ Number(item.m_result).toFixed(2) }}</span>
					</div>
				</div>
				<div class="history_footer">
					<div class="history_data">
						<p>总共</p>
					</div>
					<span>{{ totalBetScore }}</span>
					<span>{{ Number(totalVGold).toFixed(2) }}</span>
					<span>{{ Number(totalMResult).toFixed(2) }}</span>
				</div>
			</div>
		</div>
		<div v-if="historyList.length == 0" class="not">
			<img src="@/assets/images/stadiums/not.png" alt="">
		</div>
		<div>
			<van-popup position='bottom' v-model:show="fromDateType" :style="{ height: '50%' }">
				<van-date-picker v-model="fromDatePicker" title="选择年月日" :min-date="minDate" :max-date="maxDate"
					@confirm='startConfirm' />
			</van-popup>
			<van-popup position='bottom' v-model:show="endDateType" :style="{ height: '50%' }">
				<van-date-picker v-model="endDatePicker" title="选择年月日" :min-date="minDate" :max-date="maxDate"
					@confirm='endConfirm' />
			</van-popup>
		</div>
	</div>
</template>

<script setup lang="ts">
import moment from 'moment-timezone';
import { ref, onBeforeMount, computed, defineProps, toRefs, watch } from 'vue';
import { bettingStore } from '@/stores/betting';
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';
const { dispatchBetHistory } = bettingStore();
const { getToken } = storeToRefs(useAuthStore());
const { getHistoryList, getSuccess } = storeToRefs(bettingStore());
const props = defineProps({
	sportValue: String,
});
const { sportValue } = toRefs(props);

const fromDateType = ref(false);
const endDateType = ref(false);
const fromDate = ref(moment().tz('America/New_York').format("YYYY-MM-DD"));
const endDate = ref(moment().tz('America/New_York').format("YYYY-MM-DD"));
const fromDatePicker = ref([moment().tz('America/New_York').format("YYYY-MM-DD").split("-")[0], moment().tz('America/New_York').format("YYYY-MM-DD").split("-")[1], moment().tz('America/New_York').format("YYYY-MM-DD").split("-")[2]]);
const endDatePicker = ref([moment().tz('America/New_York').format("YYYY-MM-DD").split("-")[0], moment().tz('America/New_York').format("YYYY-MM-DD").split("-")[1], moment().tz('America/New_York').format("YYYY-MM-DD").split("-")[2]]);
const minDate = new Date(2020, 0, 1);
const maxDate = new Date(2025, 12, 31);
const loading = ref(false);
const totalBetScore = ref(0);
const totalMResult = ref(0);
const totalVGold = ref(0);
const dayOfWeek = ref(["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"])
const searchHistoryByDate = async () => {
	loading.value = true;
	await dispatchBetHistory({ fromDate: fromDate.value, endDate: endDate.value, gameType: sportValue.value == 1 ? "FT" : "BK" }, getToken.value);
	loading.value = false
}
const historyList = computed(() => {
	totalBetScore.value = 0;
	totalMResult.value = 0;
	totalVGold.value = 0;
	getHistoryList.value.map(item => {
		totalBetScore.value += Number(item["betscore"]);
		totalMResult.value += Number(item["m_result"]);
		totalVGold.value += Number(item["v_gold"]);
		let day = moment(item['m_date']).day();
		item["week"] = dayOfWeek.value[day - 1];
	})
	return getHistoryList.value;
})
const success = computed(() => {
	return getSuccess.value;
})
const showFromDatePicker = () => {
	fromDateType.value = true
};
const showEndDatePicker = () => {
	endDateType.value = true
};
const startConfirm = (result: any) => {
	fromDatePicker.value = result.selectedValues;
	fromDateType.value = false;
	fromDate.value = result.selectedValues[0] + "-" + result.selectedValues[1] + "-" + result.selectedValues[2]
};
const endConfirm = (result: any) => {
	endDateType.value = false
	endDatePicker.value = result.selectedValues;
	endDate.value = result.selectedValues[0] + "-" + result.selectedValues[1] + "-" + result.selectedValues[2]
};
watch(sportValue, async (newValue: number) => {
	console.log(sportValue.value);
	loading.value = true;
	let data = {
		fromDate: fromDate.value,
		endDate: endDate.value,
		gameType: sportValue.value == 1 ? "FT" : "BK"
	}
	await dispatchBetHistory(data, getToken.value);
	loading.value = false
}, { deep: true });
onBeforeMount(async () => {
	console.log(sportValue.value);
	loading.value = true;
	let data = {
		fromDate: fromDate.value,
		endDate: endDate.value,
		gameType: sportValue.value == 1 ? "FT" : "BK"
	}
	await dispatchBetHistory(data, getToken.value);
	loading.value = false;
})
</script>

<style scoped lang="scss">
.loading-position {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}

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