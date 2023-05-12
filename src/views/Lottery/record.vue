<template>
	<van-dropdown-menu class="header-fixed">
		<van-dropdown-item v-model="sportValue" :options="gameList" />
	</van-dropdown-menu>
	<div v-if="sportValue == 1">
		<MainTable v-if="showMainTable" @showSubTable="showSubTable" />
		<SubTable v-else :period="period" @showMain="showMain"/>
	</div>
	<div v-else>
		<AlwaysColorMainTable v-if="showAlwaysColorMainTable" @showAlwaysColorSubTable="showAlwaysColorSubTable" @showSubTableByStatus="showSubTableByStatus"/>
		<AlwaysColorSubTable v-else :g_type="g_type" :status="status" :s_time="s_time" @showAlwaysColorMain="showAlwaysColorMain" />
	</div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';
import MainTable from "./components/trend/six_mark/MainTable.vue";
import SubTable from "./components/trend/six_mark/SubTable.vue";
import AlwaysColorMainTable from "./components/trend/always_color/AlwaysColorMainTable.vue";
import AlwaysColorSubTable from "./components/trend/always_color/AlwaysColorSubTable.vue";
const sportValue = ref(1);
const period = ref("");
const showMainTable = ref(true);
const g_type = ref("CQ");
const s_time = ref("");
const status = ref("all");
const showAlwaysColorMainTable = ref(true);
const gameList = ref([
	{
		text: '香港六合彩',
		value: 1
	},
	{
		text: '彩票游戏',
		value: 2
	},
]);
const showMain = () => {
	showMainTable.value = true;
}
const showAlwaysColorMain = () => {
	showAlwaysColorMainTable.value = true;
}
const showSubTable = (data: number) => {
	period.value = data;
	showMainTable.value = false;
}
const showAlwaysColorSubTable = (data: any) => {
	g_type.value = data.g_type;
	s_time.value = data.s_time;
	status.value = "all";
	showAlwaysColorMainTable.value = false;
}
const showSubTableByStatus = (data: any) => {
	status.value = 0;
	s_time.value = data.s_time;
	showAlwaysColorMainTable.value = false;
}
</script>
<style scoped>
.header-fixed {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 2000;
}
</style>