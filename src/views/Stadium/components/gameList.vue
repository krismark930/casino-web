<template>
	<div>
		<div v-if="bettingList" class="game_list">
			<div class="game_list_item" v-for="(item, index) in bettingList" :key="index + 200">
				<div class="game_title">
					<div class="black">
						<span>{{ item.title }}</span>
						<span>{{ item.type }}</span>
					</div>
					<div>
						<span>{{ item.text }}</span>
						<span class="score">{{ item.score }}</span>
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
				<div class="total">
					<span>
						总共：
					</span>
					<span>
						{{ item.all }}
					</span>
				</div>
			</div>
		</div>
		<div v-if="!bettingList" class="not">
			<img src="@/assets/images/stadiums/not.png" alt="">
		</div>
	</div>
</template>

<script lang="ts">
import axios from 'axios';
import { ref } from 'vue';
import { defineComponent } from 'vue';
import axios from "axios";
import config from "@/config";
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/stores/auth';
export default defineComponent({
	data() {
		return {
			bettingList : [],
			userData : []
		}
	},
	mounted() {
		const {
          getToken,
          getUser,
		} = storeToRefs(useAuthStore());
		this.userData=getUser.value;
		this.get_gameList()
	},
	methods: {
		async get_gameList() {
			try {
				let url = config.api.GET_BETTING_RECORDS;
				let data = {
					m_name: this.userData.UserName
				}
				const response = (await axios.post(url, data)).data;
				console.log(response.data[1])
				let result = []
				for (let i = 0; i< response.count; i++) {
					let winner;
					let w_type = response.data[i].Mtype.substr(response.data[i].Mtype.length-1)
					switch (w_type) {
						case 'H': 
							winner = response.data[i].sport.MB_Team
							break;
						case 'C':
							winner = response.data[i].sport.MB_Team
							break;
						default:
							winner = "和局"

					}

					result = [
						...result,
						{
							title: '足球',
							type: '滚球',
							text: response.data[i].sport.MB_Team + "VS" + response.data[i].sport.TG_Team,
							score: response.data[i].sport.GetScore,
							typeName: response.data[i].BetType,
							winner: winner,
							Odds: response.data[i].M_Rate,
							money: response.data[i].BetScore,
							winMoney: response.data[i].Gwin,
							number: response.data[i].OrderID,
							time: '02:01:19',
							place: '欧洲盘',
							all: response.data[i].BetScore
						}
					]
				}
				this.bettingList = [...result]
				console.log(this.bettingList) 
			} catch (e) {
				return e;
			}
		}
	}
})
// const bettingList = ref([
// 	{
// 		title: '足球',
// 		type: '滚球',
// 		text: '日本VS加拿大',
// 		score: 1,
// 		typeName: '让球',
// 		winner: '日本',
// 		Odds: 1.96,
// 		money: 50.00,
// 		winMoney: 41.00,
// 		number: 'OU16046542166',
// 		time: '02:01:19',
// 		place: '欧洲盘',
// 		all: 50.00
// 	}
// ])
</script>

<style scoped lang="scss">
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

		.total {
			width: 100%;
			height: 46px;
			padding: 0 23px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			background-color: #FFFFFF;
		}
	}
}
</style>