<template>
	<div class="animated fadeInLeft">
		<div class="tab_box">
			<van-tabs v-model:active="active" color='#4EABFF' title-active-color="#4EABFF">
				<van-tab v-for="(item, index) in tabList" :key="index" :title="item.name"></van-tab>
			</van-tabs>
		</div>
		<van-row v-if="!todayLeagueShow && selectedTodayId == 1 && active == 1">
			<van-col span="12">
				<van-icon name="arrow-left" style="margin: 10px 0px 0px 20px" @click="showTodayLeague()" />
			</van-col>
			<van-col span="12">
				<van-dropdown-menu>
					<van-dropdown-item v-model="sportOptionValue" :options="sportOption" />
				</van-dropdown-menu>
			</van-col>
		</van-row>
		<van-row v-else-if="!earlyLeagueShow && selectedEarlyId == 1 && active == 2">
			<van-col span="12">
				<van-icon name="arrow-left" style="margin: 10px 0px 0px 20px" @click="showEarlyLeague()" />
			</van-col>
			<van-col span="12">
				<van-dropdown-menu>
					<van-dropdown-item v-model="sportOptionValue" :options="sportOption" />
				</van-dropdown-menu>
			</van-col>
		</van-row>
		<van-row v-else-if="!championLeagueShow && selectedChampionId == 1 && active == 3">
			<van-col span="12">
				<van-icon name="arrow-left" style="margin: 10px 0px 0px 20px" @click="showChampionLeague()" />
			</van-col>
			<van-col span="12">
				<van-dropdown-menu>
					<van-dropdown-item v-model="sportOptionValue" :options="sportOption" />
				</van-dropdown-menu>
			</van-col>
		</van-row>
		<!-- <van-row v-else-if="sportOptionValue == 1 && !earlyLeagueShow && selectedEarlyId == 1 && active == 3">
			<van-col span="12">
				<van-icon name="arrow-left" style="margin: 10px 0px 0px 20px" @click="showParlayLeague()" />
			</van-col>
			<van-col span="12">
				<van-dropdown-menu>
					<van-dropdown-item v-model="sportOptionValue" :options="sportOption" />
				</van-dropdown-menu>
			</van-col>
		</van-row> -->
		<van-row v-else-if="!parlayLeagueShow && selectedParlayId == 1 && active == 4">
			<van-col span="12">
				<van-icon name="arrow-left" style="margin: 10px 0px 0px 20px" @click="showParlayLeague()" />
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
		<div class="select_box" v-if="sportOptionValue == 0 && active == 0">
			<div :class="{ selects: selectedInplayId == select.id }" v-for="(select, idx) in selectList"
				@click="selectInplaySwitch(select.id)">
				{{ select.name }}
			</div>
		</div>
		<div class="select_box" v-if="sportOptionValue == 0 && active == 1 && !todayLeagueShow">
			<div :class="{ selects: selectedTodayId == select.id }" v-for="(select, idx) in selectList"
				@click="selectTodaySwitch(select.id)">
				{{ select.name }}
			</div>
		</div>
		<div class="select_box" v-if="sportOptionValue == 0 && active == 2 && !earlyLeagueShow">
			<div :class="{ selects: selectedEarlyId == select.id }" v-for="(select, idx) in selectList"
				@click="selectEarlySwitch(select.id)">
				{{ select.name }}
			</div>
		</div>
		<div class="select_box" v-if="sportOptionValue == 0 && active == 4 && !parlayLeagueShow">
			<div :class="{ selects: selectedParlayId == select.id }" v-for="(select, idx) in selectList"
				@click="selectParlaySwitch(select.id)">
				{{ select.name }}
			</div>
		</div>
		<div class="center_box">
			<!-- ================== FT Inplay ========================= -->

			<FT_InPlay_Main v-if="sportOptionValue == 0 && selectedInplayId == 1 && active == 0" />
			<FT_Inplay_Score v-if="sportOptionValue == 0 && selectedInplayId == 2 && active == 0" />

			<!-- ================== FT Today ========================= -->

			<FT_Today_League v-if="sportOptionValue == 0 && todayLeagueShow && active == 1"
				@showTodayMain="showTodayMain" />
			<FT_Today_Main v-if="sportOptionValue == 0 && !todayLeagueShow && selectedTodayId == 1 && active == 1"
				:todayGids="todayGids" :field="field" />
			<FT_Today_Score v-if="sportOptionValue == 0 && !todayLeagueShow && selectedTodayId == 2 && active == 1"
				:todayGids="todayGids" :field="field" />

			<!-- ================== FT Early ========================= -->

			<FT_Early_League v-if="sportOptionValue == 0 && earlyLeagueShow && active == 2"
				@showEarlyMain="showEarlyMain" />
			<FT_Early_Main v-if="sportOptionValue == 0 && !earlyLeagueShow && selectedEarlyId == 1 && active == 2"
				:earlyGids="earlyGids" :field="field" />
			<FT_Early_Score v-if="sportOptionValue == 0 && !earlyLeagueShow && selectedEarlyId == 2 && active == 2"
				:earlyGids="earlyGids" :field="field" />

			<!-- ================== FT Champion ========================= -->

			<FT_Champion_League v-if="sportOptionValue == 0 && championLeagueShow && active == 3"
				@showChampionMain="showChampionMain" />
			<FT_Champion_Main v-if="sportOptionValue == 0 && !championLeagueShow && active == 3"
				:championLid="championLid" />

			<!-- ================== FT Parlay ========================= -->

			<FT_Parlay_League v-if="sportOptionValue == 0 && parlayLeagueShow && active == 4"
				@showParlayMain="showParlayMain" />
			<FT_Parlay_Main v-if="sportOptionValue == 0 && !parlayLeagueShow && selectedParlayId == 1 && active == 4"
				:parlayGids="parlayGids" :field="field" />
			<FT_Parlay_Score v-if="sportOptionValue == 0 && !parlayLeagueShow && selectedParlayId == 2 && active == 4"
				:parlayGids="parlayGids" :field="field" />

			<!-- ================== BK Inplay ========================= -->

			<BK_Main v-if="sportOptionValue == 1 && active == 0" />

			<!-- ================== BK Today ========================= -->

			<BK_Today_League v-if="sportOptionValue == 1 && todayLeagueShow && active == 1"
				@showTodayMain="showTodayMain" />
			<BK_Today_Main v-if="sportOptionValue == 1 && !todayLeagueShow && active == 1" :todayGids="todayGids"
				:field="field" />

			<!-- ================== BK Early ========================= -->

			<BK_Early_League v-if="sportOptionValue == 1 && earlyLeagueShow && active == 2"
				@showEarlyMain="showEarlyMain" />
			<BK_Early_Main v-if="sportOptionValue == 1 && !earlyLeagueShow && active == 2" :earlyGids="earlyGids"
				:field="field" />

			<!-- ================== BK Champion ========================= -->

			<BK_Champion_League v-if="sportOptionValue == 1 && championLeagueShow && active == 3"
				@showChampionMain="showChampionMain" />
			<BK_Champion_Main v-if="sportOptionValue == 1 && !championLeagueShow && active == 3"
				:championLid="championLid" />

			<!-- ================== BK Parlay ========================= -->

			<BK_Parlay_League v-if="sportOptionValue == 1 && parlayLeagueShow && active == 4"
				@showParlayMain="showParlayMain" />
			<BK_Parlay_Main v-if="sportOptionValue == 1 && !parlayLeagueShow && active == 4" :parlayGids="parlayGids"
				:field="field" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { stadiumStore } from '@/stores/stadium';
// =========== Bk ================== //
import BK_Main from './bk_components/BK_Main.vue'

// =========== BK Today ============= //
import BK_Today_Main from './bk_components/BK_Today_Main.vue'
import BK_Today_League from './bk_components/BK_Today_League.vue'

// ========== BK Early ============= //
import BK_Early_Main from './bk_components/BK_Early_Main.vue'
import BK_Early_League from './bk_components/BK_Early_League.vue'

// ========== BK Early ============= //
import BK_Champion_League from './bk_components/BK_Champion_League.vue'
import BK_Champion_Main from './bk_components/BK_Champion_Main.vue'

// ========== BK Parlay ============= //
import BK_Parlay_League from './bk_components/BK_Parlay_League.vue'
import BK_Parlay_Main from './bk_components/BK_Parlay_Main.vue'

// ============ FT ================ //
import FT_InPlay_Main from './fk_components/FT_InPlay_Main.vue'
import FT_Inplay_Score from './fk_components/FT_Inplay_Score.vue'

// =========== FT Today ============= //
import FT_Today_League from './fk_components/FT_Today_League.vue'
import FT_Today_Main from './fk_components/FT_Today_Main.vue'
import FT_Today_Score from './fk_components/FT_Today_Score.vue'

// =========== FT Early ============= //
import FT_Early_League from './fk_components/FT_Early_League.vue'
import FT_Early_Main from './fk_components/FT_Early_Main.vue'
import FT_Early_Score from './fk_components/FT_Early_Score.vue'

// =========== FT Champion ============= //
import FT_Champion_League from './fk_components/FT_Champion_League.vue'
import FT_Champion_Main from './fk_components/FT_Champion_Main.vue'

// =========== FT Parlay ============= //
import FT_Parlay_League from './fk_components/FT_Parlay_League.vue'
import FT_Parlay_Main from './fk_components/FT_Parlay_Main.vue'
import FT_Parlay_Score from './fk_components/FT_Parlay_Score.vue'

import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const { setActive, setSportOption } = stadiumStore();
const active = ref(0);
const sportOptionValue = ref(1);

const selectedInplayId = ref(1)
const selectedTodayId = ref(1)
const selectedEarlyId = ref(1)
const selectedChampionId = ref(1);
const selectedParlayId = ref(1);

const todayLeagueShow = ref(true);
const earlyLeagueShow = ref(true);
const championLeagueShow = ref(true);
const parlayLeagueShow = ref(true);

const field = ref("");
const todayGids = ref("");
const earlyGids = ref("");
const championLid = ref("");
const parlayGids = ref("");

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
const sportOption = ref([
	{
		text: '足球',
		value: 0
	},
	{
		text: '篮球',
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
const selectChampionSwitch = (id: number) => {
	selectedChampionId.value = id
}
const selectParlaySwitch = (id: number) => {
	selectedParlayId.value = id;
}
const showTodayMain = (todayGID, fieldValue) => {
	console.log(todayGID);
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
const showChampionMain = (championLID, areaName) => {
	console.log(championLID);
	championLeagueShow.value = false;
	championLid.value = championLID;
}
const showParlayMain = (parlayGID, fieldValue) => {
	console.log(parlayGID);
	parlayLeagueShow.value = false;
	parlayGids.value = parlayGID;
	field.value = fieldValue;
}
const showTodayLeague = () => {
	todayLeagueShow.value = true;
}
const showEarlyLeague = () => {
	earlyLeagueShow.value = true;
}
const showChampionLeague = () => {
	championLeagueShow.value = true;
}
const showParlayLeague = () => {
	parlayLeagueShow.value = true;
}
watch(active, (newActive: number) => {
	console.log(newActive);
	switch (newActive) {
		case 1:
			todayLeagueShow.value = true;
			break;
		case 2:
			earlyLeagueShow.value = true;
			break;
		case 3:
			championLeagueShow.value = true;
			break;
		case 4:
			parlayLeagueShow.value = true;
			break;
	}
	setActive(newActive);
}, { deep: true });
watch(sportOptionValue, (newValue: number) => {
	console.log(newValue);
	earlyLeagueShow.value = true;
	todayLeagueShow.value = true;
	championLeagueShow.value = true;
	parlayLeagueShow.value = true;
	setSportOption(newValue);
}, { deep: true });
const route = useRoute();
onMounted(async () => {
	const { getActive, getSportOption } = storeToRefs(stadiumStore());
	active.value = getActive.value;
	const type = route.query.type;
	sportOptionValue.value = getSportOption.value;
	if (type) {
		sportOptionValue.value = type == 'ft' ? 0 : 1;
	}
}) 
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
