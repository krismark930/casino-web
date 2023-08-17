<template>
	<div>
		<div>
			<van-nav-bar title="个人讯息" @click-left="onClickLeft" fixed left-arrow>
			</van-nav-bar>
		</div>
		<div class="content animated fadeInLeft">
			<div class="select_box">
				<p v-for="(item, index) in selectList" :key="index" :class="{ select: active == item.id }"
					@click="selection(item.id)">
					{{ item.name }}
				</p>
			</div>
			<div class="content_text">
				<div class="content_item" v-for="(item, index) in contentList" :key="index + 100">
					<span>{{ item.time }}</span>
					<p>{{ item.text }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router';
const active = ref(1);
const selectList = ref([
	{
		name: '全部',
		id: 1
	},
	{
		name: '今日',
		id: 2
	},
	{
		name: '昨日',
		id: 3
	}
]);
const contentList = ref([
	{
		time: '今日',
		text: '足球赛事:11月16日 伦比亚甲组联赛-附加赛 （曼特寧独立  VS 里奥内格罗阿古拉斯） 赛事已延赛11月17日开赛, 所有'
	},
	{
		time: '昨日',
		text: '足球赛事:11月16日 伦比亚甲组联赛-附加赛 （曼特寧独立  VS 里奥内格罗阿古拉斯） 赛事已延赛11月17日开赛, 所有'
	},
	{
		time: '2022-11-09',
		text: '足球赛事:11月16日 伦比亚甲组联赛-附加赛 （曼特寧独立  VS 里奥内格罗阿古拉斯） 赛事已延赛11月17日开赛, 所有'
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
		justify-content: center;
		padding: 13px 0;

		p {
			width: 74px;
			line-height: 33px;
			text-align: center;
			background: #F3F3F3;
			border: 1px solid #E3E3E3;
			border-radius: 17px;
			font-size: 13px;
			color: #5C546A;

			&:nth-child(2) {
				margin: 0 24px;
			}
		}

		.select {
			background: #4EABFF;
			color: #FFFFFF;
		}
	}

	.content_text {
		background-color: #FFFFFF;

		.content_item {
			border-bottom: 2px solid #EEFAFF;
		}

		p {
			width: 333px;
			font-size: 13px;
			font-family: Adobe Heiti Std;
			font-weight: normal;
			color: #666666;
			line-height: 21px;
			margin-left: 21px;
		}

		span {
			font-size: 17px;
			font-family: Adobe Heiti Std;
			font-weight: normal;
			color: #000000;
			margin-left: 15px;
		}
	}
}
</style>