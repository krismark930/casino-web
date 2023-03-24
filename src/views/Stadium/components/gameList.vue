<template>
	<div>
		<van-loading color="#1989fa" class="loading-position" v-if="loading" size="40" />
		<div v-if="getBetHistoryList.length > 0" class="game_list">
			<div class="game_list_item" v-for="(item, index) in betHistoryList" :key="index + 200">
				<div class="game_title">
					<div class="black">
						<span>{{ item.title }}</span>
						<span>{{ item.type }}</span>
					</div>
					<div>
						<span>{{ item.text }}</span>
						<span class="score">&nbsp;{{ item.score }}</span>
					</div>
				</div>
				<div class="Betting">
					<div class="black">
						<span>{{ item.typeName }}</span>
					</div>
					<div>
						<div class="winner">
							<span>{{ item.winner }}</span>
							<p>@</p>
							<span class="score">{{ item.Odds }}</span>
						</div>
					</div>
					<div>
						<div>
							投注金额：
							<span class="black">{{ item.money }}</span>
						</div>
						<div>
							可赢金额：
							<span class="green">{{ item.winMoney }}</span>
						</div>
					</div>
					<div>
						<span class="trans">{{ item.number }}</span>
						<div>
							<span class="trans">{{ item.time }}</span>
							<span class="black">{{ item.place }}</span>
						</div>
					</div>
				</div>
			</div>
			<div class="total">
				<span>
					总共：
				</span>
				<span>
					{{ totalBetScore }}
				</span>
			</div>
		</div>
		<div v-if="getBetHistoryList.length === 0" class="not">
			<img src="@/assets/images/stadiums/not.png" alt="">
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/stores/auth';
import { bettingStore } from '@/stores/betting';
const { getToken, getUser } = storeToRefs(useAuthStore());
const { dispatchBetSlip } = bettingStore();
const { getBetHistoryList, getSuccess } = storeToRefs(bettingStore());
const loading = ref(false);
const totalBetScore = ref(0);
const betHistoryList = computed(() => {
	console.log(getBetHistoryList);
	getBetHistoryList.value.map(item => {
		totalBetScore.value += item["money"];
	})
	return getBetHistoryList.value;
})
onMounted(async () => {
	loading.value = true;
	await dispatchBetSlip({ m_name: getUser.value.UserName }, getToken.value);
	console.log(getBetHistoryList.value);
	loading.value = false;
})
</script>

<style scoped lang="scss">
.loading-position {
	margin-top: 200px;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
}

.not {
	background-color: #F3FAFF;
	width: 100%;
	display: flex;
	justify-content: center;
	margin-top: 87px;

	img {
		width: 153px;
		height: 130px;
	}
}

.game_list {

	.total {
		width: 100%;
		height: 46px;
		padding: 0 23px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #FFFFFF;
	}

	font-size: 13px;

	.game_list_item {

		color: #5C546A;

		.black {
			color: #000000;
		}

		.score {
			color: #FF0000;
		}

		.green {
			color: #005E30;
		}

		.trans {
			color: #B8BAC0;
			margin-right: 8px;
		}

		.game_title {
			padding-top: 7px;
			background-color: #FFFFFF;
			padding: 7px 23px;

			div {
				margin-bottom: 7px;
				display: flex;
				align-items: center;

			}

		}

		.Betting {
			margin-top: 11px;
			padding: 0 23px 7px 023px;

			div {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-top: 7px;
			}

			.winner {
				p {
					margin: 0 8px;
				}
			}
		}
	}
}
</style>