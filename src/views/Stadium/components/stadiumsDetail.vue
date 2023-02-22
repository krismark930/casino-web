<template>
	<div class="animated fadeInLeft">
		<div class="tab_box">
			<van-tabs v-model="active" color='#4EABFF' title-active-color="#4EABFF">
				<van-tab v-for="(item, index) in tabList" :key="index" :title="item.name"></van-tab>
			</van-tabs>
		</div>
		<div>
			<van-dropdown-menu>
				<van-dropdown-item v-model="value1" :options="option1" />
			</van-dropdown-menu>

		</div>
		<div class="select_box" v-if="value1 == 1">
			<div :class="{ selects: selectId == select.id }" v-for="(select, idx) in selectList" @click="Select(select.id)">
				{{ select.name }}
			</div>
		</div>
		<div class="center_box">
			<Basketball v-if="value1 == 0"></Basketball>
			<Football v-if="value1 == 1 && selectId == 1" />
			<other v-if="value1 == 1 && selectId == 2"></other>
		</div>
	</div>
</template>

<script setup lang="ts">
import Basketball from './Basketball.vue'
import Football from './Football.vue'
import other from './other.vue'
import { ref } from 'vue'

const active = ref('0')
const value1 = ref(1)
const selectId = ref(2)
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
const option1 = ref([{
	text: '篮球',
	value: 0
},
{
	text: '足球',
	value: 1
},
])
const tabList = ref([{
	name: '所有体育',
},
{
	name: '今日',
},
{
	name: '滚球中',
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
const Select = (id: number) => {
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
