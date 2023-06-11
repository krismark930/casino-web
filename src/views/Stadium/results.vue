<template>
	<div>
		<div class="results_title">
			<div class="select_title" @click="goBeforePage">
				<van-icon class="select_icon" name="arrow-down" />
				<span>注单</span>
			</div>
			<div class="game_box">
				<div class="game_title">{{ typetext }}</div>
				<div class="game_item">
					<van-dropdown-menu>
						<van-dropdown-item v-model="sportValue" :options="gameList" />
					</van-dropdown-menu>
				</div>
			</div>
			<div class="select_title delete" v-if="betSlipList.length > 0">
				<van-icon name="delete-o" @click="deleteBetSlip" color="#FFFFFF" />
			</div>
		</div>
		<van-loading color="#1989fa" class="loading-position" v-if="loading" size="40" />
		<div class="results_center">
			<div v-if="betSlipList.length > 0">
				<div class="center_list" v-for="(item, index) in betSlipList" :key="index">
					<div>
						<span class="grey" v-if="item.g_type === 'FT'">足球</span>
						<span class="grey" v-if="item.g_type === 'BK'">篮球</span>
						<span class="grey">{{ item.title }}</span>
						<van-icon name="cross" size="25" style="position:absolute; right: 20px"
							@click="deleteBetSlipByIndex(item['m_id'])" />
					</div>
					<div>
						<span>{{ item.league }}</span>
					</div>
					<div v-if="item.title.includes('让球')">
						<span class="grey">{{ item.m_team}}</span>
						<Font color="red">{{ item.text.replace("+", "").replace("-", "") }}</Font>
						<span class="grey">{{  item.t_team }}</span>
						<span class="orange">({{ item.m_ball == "" ? 0 : item.m_ball }}:{{ item.t_ball == "" ? 0 : item.t_ball }})</span>
					</div>
					<div v-else>
						<span class="grey">{{ item.m_team + ' VS ' + item.t_team }}</span>
						<span class="orange">({{ item.m_ball == "" ? 0 : item.m_ball }}:{{ item.t_ball == "" ? 0 : item.t_ball }})</span>
					</div>
					<div v-if="item.title.includes('大小') || item.title.includes('大/小')">
						<Font color="red">{{ item['text'] }}</Font>
						<p>&nbsp;&nbsp;@</p>
						<span class="orange">{{ item.order_rate }}</span>
					</div>
					<div v-else-if="item.title.includes('单双') || item.title.includes('单/双')">
						<Font color="red">{{ item['text'] }}</Font>
						<p>&nbsp;&nbsp;@</p>
						<span class="orange">{{ item.order_rate }}</span>
					</div>
					<div v-else-if="item.title.includes('独赢')">
						<template v-if="item['select_team'] != undefined && item.select_team != ''">
							<Font color="red">{{ item['select_team'] }}</Font>
						</template>
						<template v-else>
							<Font color="red">{{ item['text'] }}</Font>
						</template>
						<p>&nbsp;&nbsp;@</p>
						<span class="orange">{{ item.order_rate }}</span>
					</div>
					<div v-else>
						<Font color="red">{{ item['select_team'] }}</Font>
						<p>&nbsp;&nbsp;@</p>
						<span class="orange">{{ item.order_rate }}</span>
					</div>
					<div class="list_input">
						<input type="text" placeholder="输入投注金额" @input="goldHandler($event, index)" v-model="item.gold"
							@mousedown="showSingleNumberKey(item['m_id'])">
						<div>
							<span v-if="item.gold" class="grey">可赢额</span>
							<span v-if="item.gold" class="win_text green">{{ item.order_rate > 1 ? (Number(item.gold) *
								(item.order_rate
									- 1)).toFixed(2) : (Number(item.gold) * (item.order_rate)).toFixed(2) }}</span>
							<span v-if="!item.gold" class="max">最大投注金额</span>
						</div>
					</div>
				</div>
				<div class="center_list_b" v-if="betSlipList.length > 2">
					<span class="input_top">综合过关 @ {{ allOdds.toFixed(2) }}</span>
					<div class="list_input">
						<div class="list_input_left">
							<input type="text" placeholder="输入投注金额" v-model="parlayGold" @mousedown="showParlayNumberKey">
						</div>
						<div>
							<span class="grey">可赢额</span>
							<span class="win_text green">{{ (parlayGold * allOdds).toFixed(2) }}</span>
							<!-- <span class="max">最大投注金额</span> -->
						</div>
					</div>
				</div>
				<div class="center_list_b">
					<span class="input_top">单注</span>
					<div class="list_input">
						<div class="list_input_left">
							<input type="text" placeholder="输入投注金额" v-model="singleGold" @mousedown="showTotalNumberKey">
						</div>
					</div>
				</div>
			</div>
			<div v-if="betSlipList.length === 0" class="notList">
				<img src="@/assets/images/stadiums/notList.png" alt="">
				<span>您的投注单为空</span>
			</div>
			<div class="estimate" :class="{ notlist_s: betSlipList.length === 0 }">
				<div>
					<span>下注总额</span>
					<span>{{ totalGold.toFixed(2) }} RMB</span>
				</div>
				<div>
					<span>预估可赢</span>
					<span class="green">{{ totalWiningGold.toFixed(2) }}
						RMB</span>
				</div>
			</div>
			<button class="btn" @click="multiBetSlip">
				<span>下注</span>
				<span>{{ totalWiningGold.toFixed(2) }} RMB</span>
			</button>
		</div>
		<van-number-keyboard v-model="singleValue" :show="singleShow" :maxlength="20" @blur="singleShow = false" />
		<van-number-keyboard v-model="parlayGold" :show="parlayShow" :maxlength="20" @blur="parlayShow = false" />
		<van-number-keyboard v-model="singleGold" :show="totalShow" :maxlength="20" @blur="totalShow = false" />
	</div>
</template>

<script lang="ts">
import router from "@/router";
import { showConfirmDialog } from 'vant';
import { bettingStore } from "@/stores/betting";
import { useAuthStore } from '@/stores/auth';
import { showToast } from 'vant';

export default {
	setup() {
		const { dispatchUserMoney } = useAuthStore();
		const { deleteAllBetSlip, settingGold, dispatchBetSlipListSelect, dispatchDeleteBetSlip, dispatchMultiBetSlip, dispatchBetSlipParlay } = bettingStore();
		return {
			dispatchUserMoney,
			dispatchBetSlipListSelect,
			deleteAllBetSlip,
			settingGold,
			dispatchDeleteBetSlip,
			dispatchMultiBetSlip,
			dispatchBetSlipParlay
		};
	},
	data() {
		return {
			sportValue: 1,
			gameList: [
				{
					text: '足球',
					value: 1
				},
				{
					text: '篮球',
					value: 2
				},
			],
			singleShow: false,
			totalShow: false,
			parlayShow: false,
			totalGold: 0,
			totalWiningGold: 0,
			allOdds: 1,
			parlayGold: "",
			singleGold: "",
			itemSingleGold: 0,
			itemWinGold: 0,
			loading: false,
			singleValue: "",
			selectedMID: 0,
		}
	},
	computed: {
		success: function () {
			const { getSuccess } = bettingStore();
			return getSuccess;
		},
		token: function () {
			const { getToken } = useAuthStore();
			return getToken;
		},
		user: function () {
			const { getUser } = useAuthStore();
			return getUser;
		},
		totalGold: {
			get: function () {
				let totalGold = 0;
				if (this.itemSingleGold !== 0) {
					let parlayGold = this.parlayGold === "" ? 0 : this.parlayGold;
					totalGold = Number(parlayGold) + this.itemSingleGold;
				} else {
					let parlayGold = this.parlayGold === "" ? 0 : this.parlayGold;
					let singleGold = this.singleGold === "" ? 0 : this.singleGold;
					totalGold = Number(parlayGold) + (Number(singleGold) * this.betSlipList.length);
				}
				this.totalDisplayGold = totalGold
				return totalGold
			}
		},
		totalWiningGold: function () {
			let totalWinGold = 0;
			if (this.itemWinGold !== 0) {
				let parlayGold = this.parlayGold === "" ? 0 : this.parlayGold;
				totalWinGold = Number(parlayGold) * this.allOdds + this.itemWinGold;
			} else {
				let parlayGold = this.parlayGold === "" ? 0 : this.parlayGold;
				let singleGold = this.singleGold === "" ? 0 : this.singleGold;
				let singleWinGold = 0;
				this.betSlipList.map(item => {
					let order_rate = item["order_rate"] > 1 ? Number(item["order_rate"]) : Number(item["order_rate"]) + 1
					singleWinGold += singleGold * (order_rate - 1);
				})
				totalWinGold = Number(parlayGold) * this.allOdds + singleWinGold;
			}
			this.totalWiningDisplayGold = totalWinGold.toFixed(2);
			return totalWinGold;
		},
		betSlipList: function () {
			this.allOdds = 1;
			const { getSelectedBetSlipList } = bettingStore();
			getSelectedBetSlipList.map(item => {
				let order_rate = item["order_rate"] > 1 ? Number(item["order_rate"]) : Number(item["order_rate"]) + 1
				this.allOdds *= order_rate;
			})
			this.allOdds -= 1
			console.log(getSelectedBetSlipList)
			return getSelectedBetSlipList.reverse()
		}
	},
	watch: {
		singleGold: function (newValue) {
			this.itemSingleGold = 0;
			this.itemWinGold = 0;
			this.settingGold(newValue);
		},
		betSlipList: function (newList) {
			console.log(newList);
			this.itemSingleGold = 0;
			this.itemWinGold = 0;
			newList.map(item => {
				this.itemSingleGold += Number(item["gold"]);
				let order_rate = Number(item["order_rate"]) > 1 ? Number(item["order_rate"]) : Number(item["order_rate"]) + 1
				this.itemWinGold += Number(item["gold"]) * (order_rate - 1);
			})
		},
		singleValue: function (newValue) {
			console.log(newValue);
			this.betSlipList.map(item => {
				if (item["m_id"] === this.selectedMID) {
					console.log(this.selectedMID);
					item.gold = newValue;
				}
			})
		},
		sportValue: function (newValue: number) {
			let g_type = newValue == 1 ? "FT" : "BK";
			console.log(g_type);
			this.dispatchBetSlipListSelect(g_type);
		}
	},
	mounted() {
		this.settingGold("");
		let g_type = this.sportValue == 1 ? "FT" : "BK";
		this.dispatchBetSlipListSelect(g_type);
	},
	methods: {
		showParlayNumberKey() {
			this.parlayShow = true;
		},
		showTotalNumberKey() {
			this.totalShow = true;
		},
		showSingleNumberKey(mid) {
			if (this.selectedMID != mid) {
				this.singleValue = "";
			}
			this.selectedMID = mid;
			this.singleShow = true;
		},
		deleteBetSlipByIndex(m_id: number) {
			let g_type = this.sportValue == 1 ? "FT" : "BK";
			this.dispatchDeleteBetSlip(m_id, g_type);
		},
		goldHandler(event, index) {
			this.itemSingleGold = 0;
			this.itemWinGold = 0;
			this.betSlipList.map(item => {
				this.itemSingleGold += Number(item["gold"]);
				let order_rate = Number(item["order_rate"]) > 1 ? Number(item["order_rate"]) : Number(item["order_rate"]) + 1
				this.itemWinGold += Number(item["gold"]) * (order_rate - 1);
			})
		},
		goBeforePage() {
			router.go(-1)
		},
		deleteBetSlip() {
			showConfirmDialog({
				message: '是否确认删除该注单？',
			}).then(() => {
				// on confirm
				let g_type = this.sportValue == 1 ? "FT" : "BK";
				this.deleteAllBetSlip(g_type);
			}).catch(() => {
				// on cancel
			});
		},
		async multiBetSlip() {
			this.loading = true;
			await this.dispatchMultiBetSlip(this.betSlipList, this.token);
			if (this.parlayGold !== "" && this.parlayGold !== 0) {
				Number(this.parlayGold) * this.allOdds
				let data = {
					id: this.user.id,
					gold: this.parlayGold,
					m_id: "",
					type: "",
					line_type: 8,
					order_rate: "",
					r_type: "",
					text: "",
					league: "",
					m_team: "",
					t_team: "",
					selected_team: "",
					m_date: "",
					m_start: "",
					m_ball: "",
					t_ball: "",
					title: "",
					odd_f_type: "E",
					g_type: "FT",
					g_win: (Number(this.parlayGold) * this.allOdds).toFixed(2),
					bettingCount: this.betSlipList.length,
					active: 1,
					m_type: ""
				}
				if (this.betSlipList.length > 10) {
					showToast("不接受" + this.betSlipList.length + "串过关投注!!");
					return;
				}
				this.betSlipList.map(item => {
					data["m_id"] += item["m_id"] + ","
					data["type"] += item["type"] + ","
					data["order_rate"] += item["order_rate"] + ","
					data["r_type"] += item["r_type"] + ","
					if (item["text"].substring(0, 2) === "大 ") {
						item["text"] = "O" + item["text"].split("大 ")[1];
						data["text"] += item["text"] + ","
					} else if (item["text"].substring(0, 2) === "小 ") {
						item["text"] = "U" + item["text"].split("小 ")[1];
						data["text"] += item["text"] + ","
					} else if (item["text"].substring(0, 1) == "+" || item["text"].substring(0, 1) == "-") {
						data["text"] += item["text"].substring(1, item["text"].length) + ","
					} else {
						data["text"] += item["text"] + ",";
					}
					data["m_team"] += item["m_team"] + ","
					data["t_team"] += item["t_team"] + ","
					data["selected_team"] += item["select_team"] + ","
					data["m_date"] = item["m_date"]
					data["m_start"] = item["m_start"]
					data["m_ball"] += item["m_ball"] + ","
					data["t_ball"] += item["t_ball"] + ","
					data["league"] += item["league"] + ","
					data["g_type"] = item["g_type"]
					data["active"] = item["active"]
					if (item["r_type"] != undefined && item["r_type"] != "") {
						data["m_type"] += item["r_type"] + ","
					} else {
						data["m_type"] += item["m_type"] + ","
					}
				})

				data["title"] = this.betSlipList.length + "串1";

				await this.dispatchBetSlipParlay(data, this.token);
			}
			if (this.success) {
				this.dispatchUserMoney(this.totalDisplayGold);
				showToast('操作成功。')
			} else {
				showToast('操作失败')
			}
			this.loading = false;
		}
	}
}
</script>

<style scoped lang="scss">
.loading-position {
	position: absolute;
	left: 50%;
	bottom: 20%;
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

.results_title {
	font-size: 17px;
	height: 43px;
	padding: 0 19px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #4EABFF;
	position: relative;

	.select_title {
		display: flex;
		align-items: center;
		width: 75px;

		.select_icon {
			margin-right: 8px;
			font-size: 20px;
			font-weight: 600;
			// transform:rotate(270deg);
		}
	}

	.delete {
		display: flex;
		justify-content: flex-end;
	}

	.title_text {
		color: #FFFFFF;
		// width: 50%;
	}

	.select_box {
		position: absolute;
		top: 41px;
		left: 0px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		background-color: #FFFFFF;
		border: 1px solid #4EABFF;
		z-index: 2;

		span {
			width: 94px;
			text-align: center;
			line-height: 30px;
			border-bottom: 1px solid #4EABFF;
		}
	}
}

.results_center {
	background-color: #F1FAFF;
	min-height: 80vh;

	.orange {
		color: #FF0000;
	}

	.grey {
		color: #5C546A;
	}

	.green {
		color: #005C2B;
	}

	.center_list {
		display: flex;
		flex-direction: column;
		font-size: 13px;
		padding: 18px 24px 11px 20px;
		border-bottom: 11px solid #F1FAFF;

		div {
			display: flex;
			align-items: center;
			margin-bottom: 9px;
		}

		span {
			margin-right: 8px;
		}

		p {
			margin-right: 8px;
		}

	}

	.center_list_b {
		padding: 12px 24px 10px 20px;
		background-color: #CCE1F5;

		.input_top {
			font-size: 17px;
			color: #000000;
		}
	}

	.center_list_b:first-child {
		border-bottom: 2px solid #F1FAFF;
	}

	.notList {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-top: 105px;

		span {
			color: #5C546A;
			font-size: 13px;
		}

		img {
			width: 230px;
			height: 196px;
			margin-bottom: 38px;
		}
	}

	.estimate {
		padding: 12px 24px 10px 20px;
		background-color: #FFFFFF;

		div {
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 17px;
		}

		div:first-child {
			margin-bottom: 8px;
		}
	}

	.notlist_s {
		position: fixed;
		bottom: 53px;
		background-color: #FFFFFF;
		z-index: 100;
		width: 100%;
	}

	.btn {
		width: 100%;
		height: 53px;
		font-size: 17px;
		color: #FFFFFF;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #4EABFF;
		position: fixed;
		bottom: 0;
		z-index: 100;
	}

	.n_btn {
		background-color: #949494;
	}

	.list_input {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 8px;
		margin-bottom: 0;

		input {
			width: 152px;
			padding: 13px 0 13px 7px;
			background: #FFFFFF;
			border: 1px solid #E3E3E3;
			border-radius: 5px;
			font-size: 17px;
		}

		div {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin: 0;
			font-size: 13px;

			.win_text {
				margin-top: 8px;
			}

			.max {
				color: #4EABFF;
			}
		}

		.list_input_left {
			flex-direction: row;
			align-items: center;

			span {
				font-size: 17px;
				margin-left: 5px;
			}
		}
	}
}
</style>
