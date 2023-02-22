<!-- 投注记录 -->
<template>
	<div>
		<div class="record_box animated fadeInLeft">
			<div class="select_box">
				<div v-for="(item, index) in selectList" :ket='index' :class="{ select: active == item.id }"
					@click="selectType(item.id)">{{ item.name }}
				</div>
			</div>
			<div class="game_box">
				<div class="game_title">{{ typetext }}</div>
				<div class="game_item">
					<van-dropdown-menu>
						<van-dropdown-item v-model="value1" :options="gameList" />
					</van-dropdown-menu>
				</div>
			</div>
			<div>
				<gemeList v-if="active == 1"></gemeList>
				<History v-if="active == 2"></History>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import gemeList from './components/gameList.vue'
import History from './components/History.vue'

import { ref, computed } from 'vue';
const active = ref(2);
const value1 = ref(0);
const gameList = ref([
	{
		text: '所有体育',
		value: 0
	},
	{
		text: '篮球',
		value: 1
	},
	{
		text: '足球',
		value: 2
	},
]);

const selectList = ref([
	{
		name: '交易状态',
		id: 1
	},
	{
		name: '账户历史',
		id: 2
	}
])
const selectType = (id: number) => {
	active.value = id
}
const typetext = computed(() => {
	return active.value == 1 ? '交易状态' : '账户历史总览'
})

</script>

<style scoped lang="scss">
.record_box {
	min-height: 100vh;
	background-color: #F3FAFF;

	.select_box {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #FFFFFF;
		padding: 7px 0;

		div {
			width: 127px;
			height: 31px;
			font-size: 17px;
			color: #454558;
			background-color: #F7F7FF;
			border-radius: 31px;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.select {
			color: #FFFFFF;
			background-color: #00ADFF;
		}
	}
	.game_box {
		display: flex;
		background-color: #00ADFF;
		align-items: center;
		justify-content: space-between;
		padding: 0 24px;
		font-size: 17px;
		height: 40px;

		.game_item {
			::v-deep .van-dropdown-menu {
				width: 106px;
				height: 31px;
				border-radius: 31px;

				.van-dropdown-menu__bar {
					width: 106px;
					height: 31px;
					border-radius: 31px;
				}
			}
		}
	}
}
</style>