<template>
	<div class="animated fadeInLeft">
		<div class="tab_box">
			<van-tabs v-model:active="active" color='#4EABFF' title-active-color="#4EABFF">
				<van-tab v-for="(item, index) in tabList" :key="index" :title="item.name"></van-tab>
			</van-tabs>
		</div>
		<van-row v-if="sportOptionValue == 1 && !todayLeagueShow && selectedTodayId == 1 && active == 1">
			<van-col span="12">
				<van-icon name="arrow-left" style="margin: 10px 0px 0px 20px" @click="showTodayLeague()" />
			</van-col>
			<van-col span="12">
				<van-dropdown-menu>
					<van-dropdown-item v-model="sportOptionValue" :options="sportOption" />
				</van-dropdown-menu>
			</van-col>
		</van-row>
		<van-row v-if="sportOptionValue == 1 && !earlyLeagueShow && selectedEarlyId == 1 && active == 2">
			<van-col span="12">
				<van-icon name="arrow-left" style="margin: 10px 0px 0px 20px" @click="showEarlyLeague()" />
			</van-col>
			<van-col span="12">
				<van-dropdown-menu>
					<van-dropdown-item v-model="sportOptionValue" :options="sportOption" />
				</van-dropdown-menu>
			</van-col>
		</van-row>
		<van-row v-else>
			<van-col span="24">
				<van-dropdown-menu>
					<van-dropdown-item v-model="sportOptionValue" :options="sportOption" />
				</van-dropdown-menu>
			</van-col>
		</van-row>
		<div class="select_box" v-if="sportOptionValue == 1 && active == 0">
			<div :class="{ selects: selectedInplayId == select.id }" v-for="(select, idx) in selectList"
				@click="selectInplaySwitch(select.id)">
				{{ select.name }}
			</div>
		</div>
		<div class="select_box" v-if="sportOptionValue == 1 && active == 1 && !todayLeagueShow">
			<div :class="{ selects: selectedTodayId == select.id }" v-for="(select, idx) in selectList"
				@click="selectTodaySwitch(select.id)">
				{{ select.name }}
			</div>
		</div>
		<div class="select_box" v-if="sportOptionValue == 1 && active == 2 && !earlyLeagueShow">
			<div :class="{ selects: selectedLearlyId == select.id }" v-for="(select, idx) in selectList"
				@click="selectEarlySwitch(select.id)">
				{{ select.name }}
			</div>
		</div>
		<div class="center_box">
			<Basketball v-if="sportOptionValue == 0"></Basketball>
			<FT_InPlay_Main v-if="sportOptionValue == 1 && selectedInplayId == 1 && active == 0" />
			<FT_Inplay_Score v-if="sportOptionValue == 1 && selectedInplayId == 2 && active == 0" />
			<FT_Today_League v-if="sportOptionValue == 1 && todayLeagueShow && active == 1"
				@showTodayMain="showTodayMain" />
			<FT_Today_Main v-if="sportOptionValue == 1 && !todayLeagueShow && selectedTodayId == 1 && active == 1"
				:todayGids="todayGids" :field="field" />
			<FT_Today_Score v-if="sportOptionValue == 1 && !todayLeagueShow && selectedTodayId == 2 && active == 1"
				:todayGids="todayGids" :field="field" />
			<FT_Early_League v-if="sportOptionValue == 1 && earlyLeagueShow && active == 2"
				@showEarlyMain="showEarlyMain" />
			<FT_Early_Main v-if="sportOptionValue == 1 && !earlyLeagueShow && selectedEarlyId == 1 && active == 2"
				:earlyGids="earlyGids" :field="field" />
			<FT_Early_Score v-if="sportOptionValue == 1 && !earlyLeagueShow && selectedEarlyId == 2 && active == 2"
				:earlyGids="earlyGids" :field="field" />
		</div>
	</div>
</template>

<script setup lang="ts">
import Basketball from './Basketball.vue'
import FT_InPlay_Main from './FT_InPlay_Main.vue'
import FT_Inplay_Score from './FT_Inplay_Score.vue'
import FT_Today_League from './FT_Today_League.vue'
import FT_Today_Main from './FT_Today_Main.vue'
import FT_Today_Score from './FT_Today_Score.vue'
import FT_Early_League from './FT_Early_League.vue'
import FT_Early_Main from './FT_Early_Main.vue'
import FT_Early_Score from './FT_Early_Score.vue'
import { ref, watch } from 'vue'

const active = ref('0')
const sportOptionValue = ref(1)
const selectedInplayId = ref(1)
const selectedTodayId = ref(1)
const selectedEarlyId = ref(1)
const todayLeagueShow = ref(true);
const earlyLeagueShow = ref(true);
const field = ref("");
const todayGids = ref("");
const earlyGids = ref("");
const selectList = ref([
	{
		name: '主要玩法',
		id: 1
	},
	{
		name: '波胆',
		id: 2
	}
])
const sportOption = ref([{
	text: '篮球',
	value: 0
},
{
	text: '足球',
	value: 1
},
])
const tabList = ref([
	// {
	// 	name: '所有体育',
	// },
	{
		name: '滚球中',
	},
	{
		name: '今日',
	},
	{
		name: '早盘',
	},
	{
		name: '冠军',
	},
	{
		name: '串关',
	}
])
const selectInplaySwitch = (id: number) => {
	selectedInplayId.value = id
}
const selectTodaySwitch = (id: number) => {
	selectedTodayId.value = id
}
const selectEarlySwitch = (id: number) => {
	selectedEarlyId.value = id
}
const showTodayMain = (todayGID, fieldValue) => {
	// console.log(todayGID);
	todayLeagueShow.value = false;
	todayGids.value = todayGID;
	field.value = fieldValue;
}
const showEarlyMain = (earlyGID, fieldValue) => {
	console.log(earlyGID);
	earlyLeagueShow.value = false;
	earlyGids.value = earlyGID;
	field.value = fieldValue;
}
const showTodayLeague = () => {
	todayLeagueShow.value = true;
}
const showEarlyLeague = () => {
	earlyLeagueShow.value = true;
}
watch(active, (newActive) => {
	if (newActive === 1) {
		todayLeagueShow.value = true;
	} else if (newActive === 2) {
		earlyLeagueShow.value = true;
	}
}, { deep: true });
</script>

<style scoped lang="scss">
::v-deep .van-tabs__nav {
	.van-tab {
		padding: 0;

		.van-tab__text {
			width: 100%;
			text-align: center;
			border-right: 1px solid #000000;
		}

		.van-tab__text:last-child {
			border-right: 0;
		}
	}
}

.tab_box {
	border-bottom: 1px solid #e9e9e9;
}

.select_box {
	display: flex;

	div {
		width: 50%;
		height: 39px;
		background-color: #B8BAC0;
		color: #000000;
		font-size: 17px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.selects {
		background-color: #4EABFF;
		color: #FFFFFF;
	}
}
</style>
