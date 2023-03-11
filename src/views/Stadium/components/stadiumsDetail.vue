<template>
	<div class="animated fadeInLeft">
		<div class="tab_box">
			<van-tabs v-model:active="active" color='#4EABFF' title-active-color="#4EABFF">
				<van-tab v-for="(item, index) in tabList" :key="index" :title="item.name"></van-tab>
			</van-tabs>
		</div>
		<div>
			<van-dropdown-menu>
				<van-dropdown-item v-model="sportOptionValue" :options="sportOption" />
			</van-dropdown-menu>

		</div>
		<div class="select_box" v-if="sportOptionValue == 1">
			<div :class="{ selects: selectId == select.id }" v-for="(select, idx) in selectList"
				@click="selectSwitch(select.id)">
				{{ select.name }}
			</div>
		</div>
		<div class="center_box">
			<Basketball v-if="sportOptionValue == 0"></Basketball>
			<Football_Inplay v-if="sportOptionValue == 1 && selectId == 1 && active == 0" />
			<other v-if="sportOptionValue == 1 && selectId == 2"></other>
		</div>
	</div>
</template>

<script setup lang="ts">
import Basketball from './Basketball.vue'
import Football_Inplay from './Football_InPlay.vue'
import other from './other.vue'
import { ref } from 'vue'

const active = ref('0')
const sportOptionValue = ref(1)
const selectId = ref(1)
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
const selectSwitch = (id: number) => {
	selectId.value = id
}
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
