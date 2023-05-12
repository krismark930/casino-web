<template>
	<div>
		<van-loading color="#1989fa" class="loading-position" v-if="loading" size="40" />
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
		<div v-if="getBetHistoryList.length > 0" class="game_list">
			<div style="margin: 10px 0px" v-for="(item, index) in betHistoryList" :key="index">
				<van-cell-group inset>
					<van-cell title="编号:">
						<template #value>
							<div style="font-weight: bold;">{{ item.ID }}</div>
						</template>
					</van-cell>
					<van-cell title="交易时间:">
						<template #value>
							<div style="font-weight: bold;">{{ item.OrderID }}</div>
							<div>{{ item.BetTime }}</div>
						</template>
					</van-cell>
					<van-cell title="方式:">
						<template #value>
							<div>
								{{ (item.Gtype === "FT") || (item.Gtype === "FS" && item.Ptype === "FT") ? "足球" : "篮球" }} :
								{{ item.BetType }}
							</div>
						</template>
					</van-cell>
					<van-cell title="内容:" value-class="cell-flex-70">
						<template #value>
							<p v-html="item.Middle"></p>
						</template>
					</van-cell>
					<van-cell title="投注:">
						<template #value>
							<div>{{ item.BetScore }}</div>
						</template>
					</van-cell>
					<van-cell title="可赢:">
						<template #value>
							<div>{{ Number(item.Gwin).toFixed(2) }}</div>
						</template>
					</van-cell>
					<van-cell title="派彩結果:" v-if="item.Checked == 1">
						<template #value>
							<div>{{ Number(item.M_Result).toFixed(2) }}</div>
						</template>
					</van-cell>
					<van-cell title="注单状态:">
						<template #value>
							<div v-if="item.Checked == 1 && Number(item.M_Result) > 0">赢</div>
							<div v-if="item.Checked == 1 && Number(item.M_Result) < 0">输</div>
							<div v-if="item.Checked == 0">未结算</div>
						</template>
					</van-cell>
				</van-cell-group>
			</div>
			<div class="pagination-padding-20">
				<van-pagination v-model="currentPage" :page-count="pageCount" mode="simple" />
			</div>
		</div>
		<div v-else class="not">
			<img src="@/assets/images/stadiums/not.png" alt="">
		</div>
		<div>
			<van-popup position='bottom' v-model:show="fromDateType" :style="{ height: '90%' }">
				<van-date-picker v-model="fromDatePicker" title="选择年月日" :min-date="minDate" :max-date="maxDate"
					@confirm='startConfirm' />
			</van-popup>
			<van-popup position='bottom' v-model:show="endDateType" :style="{ height: '90%' }">
				<van-date-picker v-model="endDatePicker" title="选择年月日" :min-date="minDate" :max-date="maxDate"
					@confirm='endConfirm' />
			</van-popup>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, defineProps, toRefs, watch } from 'vue';
import moment from 'moment-timezone';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/stores/auth';
import { bettingStore } from '@/stores/betting';
const { getToken, getUser } = storeToRefs(useAuthStore());
const { dispatchBetSlip } = bettingStore();
const { getBetHistoryList, getBetSlipCount, getSuccess } = storeToRefs(bettingStore());

const props = defineProps({
	sportValue: String,
});
const { sportValue } = toRefs(props);
const loading = ref(false);
const currentPage = ref(1);
const pageNumber = ref(4);
const pageCount = computed(() => {
	console.log(getBetSlipCount.value);
	return Math.ceil(getBetSlipCount.value / pageNumber.value);
});
const fromDateType = ref(false);
const endDateType = ref(false);
const fromDate = ref(moment().tz('America/New_York').format("YYYY-MM-DD"));
const endDate = ref(moment().tz('America/New_York').format("YYYY-MM-DD"));
const fromDatePicker = ref([moment().tz('America/New_York').format("YYYY-MM-DD").split("-")[0], moment().tz('America/New_York').format("YYYY-MM-DD").split("-")[1], moment().tz('America/New_York').format("YYYY-MM-DD").split("-")[2]]);
const endDatePicker = ref([moment().tz('America/New_York').format("YYYY-MM-DD").split("-")[0], moment().tz('America/New_York').format("YYYY-MM-DD").split("-")[1], moment().tz('America/New_York').format("YYYY-MM-DD").split("-")[2]]);
const minDate = new Date(2020, 0, 1);
const maxDate = new Date(2025, 12, 31);
const totalBetScore = ref(0);
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
const searchHistoryByDate = async () => {
	loading.value = true;
	let data = {
		fromDate: fromDate.value,
		endDate: endDate.value,
		m_name: getUser.value.UserName,
		gameType: sportValue.value == 1 ? "FT" : "BK",
		page_no: currentPage.value
	}
	await dispatchBetSlip(data, getToken.value);
	loading.value = false;
}
const betHistoryList = computed(() => {
	totalBetScore.value = 0;
	getBetHistoryList.value.map(item => {
		totalBetScore.value += item["BetScore"];
	})
	return getBetHistoryList.value;
})

watch(sportValue, async (newValue: number) => {
	loading.value = true;
	let data = {
		fromDate: fromDate.value,
		endDate: endDate.value,
		m_name: getUser.value.UserName,
		gameType: newValue == 1 ? "FT" : "BK",
		page_no: currentPage.value
	}
	await dispatchBetSlip(data, getToken.value);
	loading.value = false;
}, { deep: true });
watch(currentPage, async (newValue: number) => {
	loading.value = true;
	let data = {
		fromDate: fromDate.value,
		endDate: endDate.value,
		m_name: getUser.value.UserName,
		gameType: sportValue.value == 1 ? "FT" : "BK",
		page_no: newValue
	}
	await dispatchBetSlip(data, getToken.value);
	loading.value = false;
}, { deep: true });
onMounted(async () => {
	loading.value = true;
	let data = {
		fromDate: fromDate.value,
		endDate: endDate.value,
		m_name: getUser.value.UserName,
		gameType: sportValue.value == 1 ? "FT" : "BK",
		page_no: currentPage.value
	}
	await dispatchBetSlip(data, getToken.value);
	loading.value = false;
})
</script>

<style lang="scss">
.cell-flex-70 {
	flex: 70%;
}

.loading-position {
	margin-top: 200px;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
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

.game_list {

	padding-bottom: 20px;

	.pagination-padding-20 {
		margin: 0px 20px;
	}

	.total {
		width: 100%;
		height: 46px;
		padding: 0 23px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #FFFFFF;
	}

	font-size: 13px;

	.game_list_item {

		color: #5C546A;

		.black {
			color: #000000;
		}

		.score {
			color: #FF0000;
		}

		.green {
			color: #005E30;
		}

		.trans {
			color: #B8BAC0;
			margin-right: 8px;
		}

		.game_title {
			padding-top: 7px;
			background-color: #FFFFFF;
			padding: 7px 23px;

			div {
				margin-bottom: 7px;
				display: flex;
				align-items: center;

			}

		}

		.Betting {
			margin-top: 11px;
			padding: 0 23px 7px 023px;

			div {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-top: 7px;
			}

			.winner {
				p {
					margin: 0 8px;
				}
			}
		}
	}
}
</style>