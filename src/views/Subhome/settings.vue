<template>
	<div>
		<div>
			<van-nav-bar title="详细设定" @click-left="onClickLeft" fixed left-arrow>
			</van-nav-bar>
		</div>
		<div class="content animated fadeInLeft">
			<div class="select_box">
				<p v-for="(item, index) in selectList" :key="index" :class="{ select: active == item.id }"
					@click="selection(item.id)">
					{{ item.name }}
				</p>
			</div>
			<div class="table_box">
				<div class="table_title">
					<p>投注类型</p>
					<p>单场最高</p>
					<p>单注最高</p>
				</div>
				<div v-for="(item, index) in tableList" :key="index" :class="{ even: index % 2 !== 0 }">
					<p>{{ item.type }}</p>
					<p>{{ item.sHighest }}</p>
					<p>{{ item.bHighest }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import router from '@/router'
const active = ref(1);
const selectList = ref([
	{
		name: '足球',
		id: 1
	},
	{
		name: '篮球',
		id: 2
	},
	{
		name: '冠军',
		id: 3
	},
	{
		name: '其他',
		id: 4
	}
]);
const tableList = ref([
	{
		type: '让球、大小、单双',
		sHighest: '1.100.000',
		bHighest: '330.000'
	},
	{
		type: '滚球让球、滚球大小、滚球单双',
		sHighest: '1.100.000',
		bHighest: '330.000'
	},
	{
		type: '独赢、滚球独赢',
		sHighest: '1.100.000',
		bHighest: '330.000'
	},
	{
		type: '其他',
		sHighest: '1.100.000',
		bHighest: '330.000'
	},
	{
		type: '滚球其他',
		sHighest: '1.100.000',
		bHighest: '330.000'
	}
])

const onClickLeft = () => {
	router.go(-1)
}

const selection = (id: number) => {
	active.value = id
}

</script>

<style scoped lang="scss">
.content {
	padding-top: 46px;
	background-color: #F1FAFF;
	min-height: -moz-calc(100vh - 46px);
	min-height: -webkit-calc(100vh - 46px);
	min-height: calc(100vh - 46px);

	.select_box {
		display: flex;
		justify-content: space-between;
		padding: 13px 13px;

		p {
			width: 74px;
			line-height: 33px;
			text-align: center;
			background: #F3F3F3;
			border: 1px solid #E3E3E3;
			border-radius: 17px;
			font-size: 13px;
			color: #5C546A;
			// &:nth-child(2){
			// 	margin: 0 24px;
			// }
		}

		.select {
			background: #4EABFF;
			color: #FFFFFF;
		}
	}

	.table_box {
		div {
			height: 47px;
			padding: 0 20px;
			color: #5C546A;
			background-color: #FFFFFF;
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 13px;

			p {
				text-align: center;
				width: 90px;
			}

			p:first-child {
				width: 140px;
				text-align: left;
			}
		}

		.table_title {
			background-color: #4EABFF;
			color: #000000;
			font-size: 17px;
		}

		.even {
			background-color: #F3FAFF;
		}
	}
}
</style>