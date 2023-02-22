<template>
	<div>
		<div>
			<van-nav-bar title="赔率转换" @click-left="onClickLeft" fixed left-arrow>
			</van-nav-bar>
		</div>
		<div class="content animated fadeInLeft">
			<div></div>
			<div class="table_b">
				<p>赔率转换表格</p>
				<div>
					<span>欧洲盘</span>
					<span>欧洲盘</span>
					<span>欧洲盘</span>
				</div>
				<div v-for="(item, index) in tableList" :key="index" :class="{ back: index % 2 == 0 }">
					<span :class="{ isred: num < 0 }" v-for="(num, i) in item">{{ num.toFixed(2) }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router';
const onClickLeft = () => {
	router.go(-1)
}
const tableList = ref([
	[0.10, 0.10, -10.00],
	[0.20, 0.20, -5.00],
	[0.35, 0.35, -2.85],
	[0.40, 0.40, -2.50],
	[0.50, 0.50, -2.00],
	[0.65, 0.65, -1.53],
	[0.75, 0.75, -1.33],
	[0.83, 0.83, -1.20],
	[0.96, 0.96, -1.04],
	[1.00, -1.00, -1.00],
	[1.15, -0.86, -1.15],
	[1.35, -0.74, -1.35],
	[1.45, -0.68, 1.45],
	[1.55, -0.64, 1.55],
	[1.65, -0.60, 1.65],
	[1.74, -0.57, 1.74],
	[1.97, -0.50, 1.97],
	[2.05, -0.48, 2.05],
	[3.45, -0.28, 3.45],
	[4.25, -0.23, 4.25],
	[5.00, -0.20, 5.00],
	[8.00, -1.12, 8.00],
	[10.00, -0.10, 10.00],
])
</script>

<style scoped lang="scss">
.content {
	padding-top: 46px;
	background-color: #F1FAFF;
	min-height: -moz-calc(100vh - 46px);
	min-height: -webkit-calc(100vh - 46px);
	min-height: calc(100vh - 46px);

	.table_b {
		font-size: 17px;

		p {
			background-color: #4EABFF;
			width: 100%;
			line-height: 47px;
			text-align: center;
		}

		div {
			height: 47px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			background-color: #FFFFFF;

			span {
				width: 30%;
				color: #5C546A;
				text-align: center;
			}

			.isred {
				color: #EA1616;
			}
		}

		div:first-child {
			span {
				color: #000000;
			}
		}

		.back {
			background-color: #F3FAFF;
		}
	}
}
</style>