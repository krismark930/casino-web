<template>
	<div>
		<div v-for="(item, index) in dataList" :key="index + 100">
			<div class="center_title">
				<span>{{ item.name }}</span>
				<img :src="item.icon" alt="">
			</div>
			<div class="ranks">
				<div class="ranks_l">
					<div class="ranks_item">
						<span>0</span>
						大连人
					</div>
					<div class="ranks_item">
						<span>1</span>
						浙江
					</div>
				</div>
				<div class="ranks_r">
					<span>下半场</span>
					<span class="">82：17</span>
					<img src="@/assets/images/stadiums/c-icon.png" alt="">
				</div>
			</div>
			<div class="score_box" v-for="(score, index) in scoreList" :key="index">
				<div class="score_in" :ref="'score' + index">
					<div class="score_list" v-for="(item, k) in score.score" :key="k + 100">
						<div class="score_item" v-for="(scores, y) in item" :key="y + 200">
							<div v-if="scores.state == 1">
								<span>{{ scores.text }}</span>
								<span>{{ scores.num }}</span>
							</div>
							<div class="lock" v-if="scores.state == 2">
								<img src="@/assets/images/stadiums/lock.png" alt="">
							</div>
						</div>
					</div>
					<div class="score_other score_item">
						<span>其他比分</span>
						<span>{{ score.other }}</span>
					</div>
				</div>
				<div class="more" @click="more(index)">
					{{ getMore(index) }}
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
const boxHeight = ref(0);
const dataList = ref([{
	name: '中国足协杯',
	icon: new URL("@/assets/images/stadiums/China.png", import.meta.url).href,
	list: []
}])
const scoreList = [{
	other: 201,
	score: [
		[{
			text: '1-0',
			num: 7.3,
			state: 1
		},
		{
			text: '0-0',
			num: 2.08,
			state: 1
		},
		{
			text: '0-1',
			num: 3.2,
			state: 1
		}
		],
		[{
			text: '2-0',
			num: 5.1,
			state: 1
		},
		{
			text: '1-1',
			num: 12.5,
			state: 1
		},
		{
			text: '0-2',
			num: 11.0,
			state: 1
		}
		],
		[{
			text: '2-1',
			num: 86,
			state: 1
		},
		{
			text: '2-2',
			num: 201,
			state: 1
		},
		{
			text: '1-2',
			num: 41,
			state: 1
		}
		],
		[{
			text: '3-0',
			num: 201,
			state: 1
		},
		{
			text: '3-3',
			num: 201,
			state: 1
		},
		{
			text: '0-1',
			num: 3.2,
			state: 2
		}
		],
		[{
			text: '3-1',
			num: 201,
			state: 1
		},
		{
			text: '4-4',
			num: 201,
			state: 1
		},
		{
			text: '1-3',
			num: 201,
			state: 1
		}
		],
		[{
			text: '3-2',
			num: 201,
			state: 1
		},
		{},
		{
			text: '2-3',
			num: 201,
			state: 1
		}
		],
		[{
			text: '4-0',
			num: 201,
			state: 1
		},
		{},
		{
			text: '1-3',
			num: 201,
			state: 2
		}
		],
		[{
			text: '4-1',
			num: 201,
			state: 1
		},
		{},
		{
			text: '1-4',
			num: 201,
			state: 1
		}
		],
		[{
			text: '4-2',
			num: 201,
			state: 1
		},
		{},
		{
			text: '2-4',
			num: 201,
			state: 1
		}
		],
		[{
			text: '4-3',
			num: 201,
			state: 1
		},
		{},
		{
			text: '3-1',
			num: 201,
			state: 1
		}
		]
	]
}]
const more = (index: number) => {

	var x = document.getElementsByClassName('score_in')
	if ((x[0] as any).style.height !== 'auto') {
		(x[0] as any).style.height = 'auto'
	} else {
		var h = boxHeight.value + 'px';
		(x[0] as any).style.height = h
	}
}
onMounted(() => {
	boxHeight.value = document.documentElement.clientWidth * 0.85;
});

const getMore = computed(() => {
	return function (val: any) {
		console.log(val, "11111111111")
		return '查看更多'
	}
})

</script>

<style scoped lang="scss">
.center_title {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 40px;
	background-color: #F3FAFF;
	padding: 0 14px;

	span {
		font-size: 17px;
		color: #000000;
	}

	img {
		width: 28px;
		height: 28px;
	}
}

.ranks {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 65px;
	background-color: #D8E0E6;
	font-size: 12px;
	padding: 8px 13px;

	.ranks_l {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		height: 100%;

		.ranks_item {
			display: flex;
			align-items: center;

			span {
				margin-right: 10px;
				color: #FF6600;
			}
		}
	}

	.ranks_r {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: #FF6600;

		span {
			margin-bottom: 2px;
		}

		img {
			width: 11px;
			height: 11px;
		}
	}
}

.score_box {
	transition: all 1s;

	.more {
		height: 67px;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 12px;
	}

	.score_in {
		display: flex;
		flex-direction: column;
		font-size: 12px;
		padding: 16px 15px 13px 13px;
		height: 280px;
		overflow: hidden;
	}

	.score_list {
		width: 100%;
		margin-bottom: 9px;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.score_item {

			div {
				width: 108px;
				height: 45px;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				border: 1px solid #cecece;

				span {
					color: #000000;
				}

				span:last-child {
					color: #E80909;
					margin-top: 2px;
				}
			}

			.lock {
				background-color: #F3FAFF;

				img {
					width: 13px;
					height: 18px;
				}
			}
		}
	}

	.score_other {
		width: 100%;
		height: 45px;
		border: 1px solid #cecece;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		span:last-child {
			color: #E80909;
			margin-top: 6px;
		}
	}
}

</style>
