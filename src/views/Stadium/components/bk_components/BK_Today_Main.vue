<template>
	<div>
		<van-loading color="#1989fa" class="loading-position" v-if="loading" size="40" />
		<div style="text-align: center;" v-if="changedBKDataList.length === 0 && !loading">没有数据</div>
		<div class="game_list" v-for="(item, index) in changedBKDataList" :key="index + 100">
			<div class="divide-background"></div>
			<div class="center_title" @click="showDetail(item['lid'])">
				<span>{{ item.name }}</span>
				<img :src="item.icon" alt="" v-if="item.icon !== ''">
			</div>
			<div class="center_item" :class="{ detail_show: item['show'], detail_hide: !item['show'] }"
				v-for="(data, index) in item.gameList" :key="index">
				<div class="table_title table_list">
					<div v-for="(title, index) in data.titleList" :key="index">
						<span v-if="title.text">{{ title.text }}</span>
						<span v-if="(title).text2 === null ? false : true">{{ (title).text2 }}</span>
					</div>
				</div>
				<div class="table_text table_list" v-for="(datalist, scoreIndex) in data.scoreList" :key="scoreIndex">
					<div class="table_text_l">
						<span>{{ datalist.goalsScored }}</span>
						<span>{{ datalist.name }}</span>
					</div>
					<div class="table_text_r" v-for="(num, numIndex) in datalist.nums" :key="numIndex">
						<div v-if="num.type == 1" @click="handleModal(item, data, datalist, num, numIndex)"
							:class="{ item_background_up: num.colorChangeUp, item_background_down: num.colorChangeDown }"
							class="item-background">
							<span v-if="num.text">{{ num.text }}</span>
							<span v-if="num.num">{{ num.num }}</span>
						</div>
						<div class="lock" v-if="num.type == 2">
							<img src="@/assets/images/stadiums/lock.png" alt="">
						</div>
					</div>
				</div>
				<div class="store_up">
					<img v-if="!data.collection" src="@/assets/images/stadiums/store_up.png" alt=""
						@click="saveFavorite(item.lid, data.id, data.ecid)">
					<img v-if="data.collection" src="@/assets/images/stadiums/store_in.png" alt=""
						@click="removeFavorite(item.lid, data.id)">
				</div>
			</div>
		</div>
		<OrderModal v-if="openModal" :bettingOrderData="bettingOrderData" :bettingType="bettingType" @close="closeModal" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { showToast } from 'vant';
import { bettingStore } from "@/stores/betting";
import { useAuthStore } from "@/stores/auth";
import OrderModal from "@/views/Stadium/components/Ordermodal.vue"
import router from "@/router";
export default defineComponent({
	name: "BK_Today_Main",
	setup() {
		const { setFavoriteBKList, removeFavoriteBKList } = bettingStore();
		return { setFavoriteBKList, removeFavoriteBKList };
	},
	props: {
		todayGids: "",
		field: ""
	},
	components: {
		OrderModal
	},
	data() {
		return {
			loading: true as boolean,
			openModal: false,
			bettingType: "Today",
			bettingOrderData: {
				showType: "Today",
				mID: 0,
				rate: 0,
				title: "",
				mbTeam: "",
				tgTeam: "",
				league: "",
				selectedTeam: "",
				lineType: 9,
				selectedType: "H", // "H", "C", "N"
				gameType: "BK",
				oddFType: "H",
				active: 2,
				r_type: "",
				text: "",
				m_date: "",
				m_start: "",
				m_ball: 0,
				t_ball: 0,
				mType: ""
			},
			changedBKDataList: [],
			tempBKDataList: [],
		}
	},
	sockets: {
		connect: function () {
			console.log('socket to notification channel connected')
		},
		receivedBKTodayMessage: function (data: any) {
			this.loading = false;
			console.log('receivedBKTodayData', data);
			if (data == null || data.length == 0) return;
			var bkDataList = [];
			let lidArray: Array<any> = data.map(function (item: any) {
				return item["LID"];
			});
			var uniqueLIDArray = [...new Set(lidArray)].filter(item => item != null);
			uniqueLIDArray.forEach(LID => {
				let dataByLID = data.filter(item => item["LID"] == LID);
				bkDataList.push(dataByLID);
			});

			this.bkDataChange(bkDataList);

			let totalCount = this.tempBKDataList.length > this.tempBKDataList.length ? this.changedBKDataList.length : this.tempBKDataList.length;

			for (let i = 0; i < totalCount; i++) {
				let subCount = this.tempBKDataList[i]["gameList"].length > this.changedBKDataList[i]["gameList"].length ? this.changedBKDataList[i]["gameList"].length : this.tempBKDataList[i]["gameList"].length;
				// console.log(subCount);
				for (let j = 0; j < subCount; j++) {

					// console.log("1111111111111", this.tempBKDataList[i]["gameList"][j]["scoreList"][0]["nums"][0].num, this.changedBKDataList[i]["gameList"][j]["scoreList"][0]["nums"][0].num);

					if ((this.tempBKDataList[i]["gameList"][j]["scoreList"][0]["nums"][0].num - this.changedBKDataList[i]["gameList"][j]["scoreList"][0]["nums"][0].num) > 0) {
						this.changedBKDataList[i]["gameList"][j]["scoreList"][0]["nums"][0].colorChangeDown = true;
					} else if ((this.tempBKDataList[i]["gameList"][j]["scoreList"][0]["nums"][0].num - this.changedBKDataList[i]["gameList"][j]["scoreList"][0]["nums"][0].num) < 0) {
						this.changedBKDataList[i]["gameList"][j]["scoreList"][0]["nums"][0].colorChangeUp = true;
					}
					if ((this.tempBKDataList[i]["gameList"][j]["scoreList"][0]["nums"][1].num - this.changedBKDataList[i]["gameList"][j]["scoreList"][0]["nums"][1].num) > 0) {
						this.changedBKDataList[i]["gameList"][j]["scoreList"][0]["nums"][1].colorChangeDown = true;
					} else if ((this.tempBKDataList[i]["gameList"][j]["scoreList"][0]["nums"][1].num - this.changedBKDataList[i]["gameList"][j]["scoreList"][0]["nums"][1].num) < 0) {
						this.changedBKDataList[i]["gameList"][j]["scoreList"][0]["nums"][1].colorChangeUp = true;
					}
					if ((this.tempBKDataList[i]["gameList"][j]["scoreList"][0]["nums"][2].num - this.changedBKDataList[i]["gameList"][j]["scoreList"][0]["nums"][2].num) > 0) {
						this.changedBKDataList[i]["gameList"][j]["scoreList"][0]["nums"][2].colorChangeDown = true;
					} else if ((this.tempBKDataList[i]["gameList"][j]["scoreList"][0]["nums"][2].num - this.changedBKDataList[i]["gameList"][j]["scoreList"][0]["nums"][2].num) < 0) {
						this.changedBKDataList[i]["gameList"][j]["scoreList"][0]["nums"][2].colorChangeUp = true;
					}

					if ((this.tempBKDataList[i]["gameList"][j]["scoreList"][1]["nums"][0].num - this.changedBKDataList[i]["gameList"][j]["scoreList"][1]["nums"][0].num) > 0) {
						this.changedBKDataList[i]["gameList"][j]["scoreList"][1]["nums"][0].colorChangeDown = true;
					} else if ((this.tempBKDataList[i]["gameList"][j]["scoreList"][1]["nums"][0].num - this.changedBKDataList[i]["gameList"][j]["scoreList"][1]["nums"][0].num) < 0) {
						this.changedBKDataList[i]["gameList"][j]["scoreList"][1]["nums"][0].colorChangeUp = true;
					}
					if ((this.tempBKDataList[i]["gameList"][j]["scoreList"][1]["nums"][1].num - this.changedBKDataList[i]["gameList"][j]["scoreList"][1]["nums"][1].num) > 0) {
						this.changedBKDataList[i]["gameList"][j]["scoreList"][1]["nums"][1].colorChangeDown = true;
					} else if ((this.tempBKDataList[i]["gameList"][j]["scoreList"][1]["nums"][1].num - this.changedBKDataList[i]["gameList"][j]["scoreList"][1]["nums"][1].num) < 0) {
						this.changedBKDataList[i]["gameList"][j]["scoreList"][1]["nums"][1].colorChangeUp = true;
					}
					if ((this.tempBKDataList[i]["gameList"][j]["scoreList"][1]["nums"][2].num - this.changedBKDataList[i]["gameList"][j]["scoreList"][1]["nums"][2].num) > 0) {
						this.changedBKDataList[i]["gameList"][j]["scoreList"][1]["nums"][2].colorChangeDown = true;
					} else if ((this.tempBKDataList[i]["gameList"][j]["scoreList"][1]["nums"][2].num - this.changedBKDataList[i]["gameList"][j]["scoreList"][1]["nums"][2].num) < 0) {
						this.changedBKDataList[i]["gameList"][j]["scoreList"][1]["nums"][2].colorChangeUp = true;
					}

				}
			}

		}
	},
	computed: {
		user: function () {
			const { getUser } = useAuthStore();
			return getUser;
		}
	},
	watch: {

	},
	methods: {
		saveFavorite: function (lid, id, ecid) {
			console.log(lid);
			this.changedBKDataList.forEach(element => {
				if (element["lid"] === lid) {
					element["gameList"].forEach(item => {
						if (item["id"] === id) {
							item.collection = true;
						}
					})
				}
			});
			this.setFavoriteBKList({ gid: id, ecid: ecid });
			showToast('已加入我的赛事。');
		},
		removeFavorite: function (lid, id) {
			console.log(lid);
			this.changedBKDataList.forEach(element => {
				if (element["lid"] === lid) {
					element["gameList"].forEach(item => {
						if (item["id"] === id) {
							item.collection = false;
						}
					})
				}
			});
			this.removeFavoriteBKList(id);
		},
		showDetail: function (lid) {
			console.log(lid);
			this.changedBKDataList.forEach(element => {
				if (element["lid"] === lid) {
					console.log(element);
					element["show"] = !element['show'];
				}
			});
		},
		bkDataChange: function (bkDataList) {
			this.tempBKDataList = this.changedBKDataList;
			this.changedBKDataList = [];
			bkDataList.forEach(bkData => {
				let data = {} as object;
				data["lid"] = bkData[0]["LID"];
				data["name"] = bkData[0]["M_League"].length > 25 ? bkData[0]["M_League"].substring(0, 23) + "..." : bkData[0]["M_League"];
				if (this.tempBKDataList.length > 0) {
					this.tempBKDataList.forEach(item => {
						if (item["lid"] == data["lid"]) {
							data["show"] = item['show'];
						}
					})
				} else {
					data["show"] = false;
				}
				if (bkData[0]["FLAG_CLASS"] == null || bkData[0]["FLAG_CLASS"] == "" || bkData[0]["FLAG_CLASS"] == undefined) {
					data["icon"] = "";
				} else {
					console.log(bkData[0]["FLAG_CLASS"]);
					data["icon"] = `https://www.hga030.com/images/flag/${bkData[0]["FLAG_CLASS"]}.svg`;
				}
				let gameList = [];
				bkData.forEach(item => {
					let titleList = [
						{
							text: "今日 " + item["M_Time"]
						},
						{
							text: '让球'
						},
						{
							text: '大小'
						},
						{
							text: '单/双'
						},
					];

					console.log(item.ShowTypeR);

					let handicap_sign_m = item["ShowTypeR"] == "H" ? "-" : "+";
					let handicap_sign_t = item["ShowTypeR"] == "H" ? "+" : "-";

					let gameData = {
						id: item["MID"],
						ecid: item["ECID"],
						m_date: item["M_Date"],
						m_start: item["M_Start"],
						titleList: titleList,
						collection: false,
						scoreList: [
							{
								goalsScored: item["MB_Ball"],
								name: item["MB_Team"],
								nums: [
									{
										lineType: 2,
										mType: "RH",
										bettingType: "H",
										type: item["MB_LetB_Rate"] == 0 ? 2 : 1,
										colorChangeUp: false,
										colorChangeDOwn: false,
										text: item["M_LetB"] !== "" ? handicap_sign_m + item["M_LetB"] : "",
										num: item["MB_LetB_Rate"] == 0 ? 0 : (Number(item["MB_LetB_Rate"])).toFixed(2)
									},
									{
										lineType: 3,
										mType: "OUH",
										bettingType: "H",
										type: item["MB_Dime_Rate"] == 0 ? 2 : 1,
										colorChangeUp: false,
										colorChangeDOwn: false,
										text: item["MB_Dime"] == "" ? "" : "大 " + item["MB_Dime"].toString().split("O")[1],
										num: item["MB_Dime_Rate"] == 0 ? 0 : (Number(item['MB_Dime_Rate'])).toFixed(2)
									},
									{
										lineType: 105,
										r_type: "ODD",
										mType: "",
										bettingType: "H",
										type: item["S_Single_Rate"] == 0 ? 2 : 1,
										colorChangeUp: false,
										colorChangeDOwn: false,
										text: "单",
										num: item["S_Single_Rate"] == 0 ? 0 : (Number(item["S_Single_Rate"])).toFixed(2)
									},
									// {
									// 	lineType: 3,
									// 	bettingType: "H",
									// 	oddFType: "E",
									// 	type: item["MB_Points_Rate_1"] == 0 ? 2 : 1,
									// 	colorChangeUp: false,
									// 	colorChangeDOwn: false,
									// 	text: item["MB_Points_1"],
									// 	num: (Number(item["MB_Points_Rate_1"])).toFixed(2)
									// },
									// {
									// 	lineType: 4,
									// 	bettingType: "H",
									// 	oddFType: "E",
									// 	type: item["MB_Points_Rate_2"] == 0 ? 2 : 1,
									// 	colorChangeUp: false,
									// 	colorChangeDOwn: false,
									// 	text: item["MB_Points_2"],
									// 	num: (Number(item["MB_Points_Rate_2"])).toFixed(2)
									// },
								]
							},
							{
								goalsScored: item["TG_Ball"],
								name: item["TG_Team"],
								nums: [
									{
										lineType: 2,
										mType: "RC",
										bettingType: "C",
										type: item["TG_LetB_Rate"] == 0 ? 2 : 1,
										colorChangeUp: false,
										colorChangeDOwn: false,
										text: item["M_LetB"] !== "" ? handicap_sign_t + item["M_LetB"] : "",
										num: item["TG_LetB_Rate"] == 0 ? 0 : (Number(item["TG_LetB_Rate"])).toFixed(2)
									},
									{
										lineType: 3,
										mType: "OUC",
										bettingType: "C",
										type: item["TG_Dime_Rate"] == 0 ? 2 : 1,
										colorChangeUp: false,
										colorChangeDOwn: false,
										text: item["TG_Dime"] == "" ? "" : "小 " + item["TG_Dime"].toString().split("U")[1],
										num: item["TG_Dime_Rate"] == 0 ? 0 : (Number(item['TG_Dime_Rate'])).toFixed(2)
									},
									{
										lineType: 105,
										mType: "",
										r_type: "EVEN",
										bettingType: "C",
										type: item["S_Double_Rate"] == 0 ? 2 : 1,
										colorChangeUp: false,
										colorChangeDOwn: false,
										text: "双",
										num: item["S_Double_Rate"] == 0 ? 0 : (Number(item["S_Double_Rate"])).toFixed(2)
									},
									// {
									// 	lineType: 3,
									// 	bettingType: "H",
									// 	oddFType: "E",
									// 	type: item["TG_Points_Rate_1"] == 0 ? 2 : 1,
									// 	colorChangeUp: false,
									// 	colorChangeDOwn: false,
									// 	text: item["TG_Points_1"],
									// 	num: Number(item["TG_Points_Rate_1"]).toFixed(2)
									// },
									// {
									// 	lineType: 4,
									// 	bettingType: "H",
									// 	oddFType: "E",
									// 	type: item["TG_Points_Rate_2"] == 0 ? 2 : 1,
									// 	colorChangeUp: false,
									// 	colorChangeDOwn: false,
									// 	text: item["TG_Points_2"],
									// 	num: Number(item["TG_Points_Rate_2"]).toFixed(2)
									// },
								]
							},
						],
					}
					gameList.push(gameData);
				})
				data["gameList"] = gameList;
				this.changedBKDataList.push(data);
			});
		},
		handleModal: function (leagueData, gameData, dataList, rateData, numIndex) {
			if (this.user.id == undefined) {
				router.push({ name: "login" });
				return;
			}
			this.bettingOrderData["mID"] = gameData["id"];
			this.bettingOrderData["m_date"] = gameData["m_date"];
			this.bettingOrderData["m_start"] = gameData["m_start"];
			this.bettingOrderData["mbTeam"] = gameData.scoreList[0].name;
			this.bettingOrderData["tgTeam"] = gameData.scoreList[1].name;
			this.bettingOrderData["m_ball"] = 0;
			this.bettingOrderData["t_ball"] = 0;
			this.bettingOrderData['r_type'] = rateData.r_type;
			this.bettingOrderData["rate"] = rateData.num;
			this.bettingOrderData["lineType"] = rateData.lineType;
			this.bettingOrderData["mType"] = rateData.mType;
			this.bettingOrderData['selectedType'] = rateData.bettingType;
			this.bettingOrderData["league"] = leagueData.name;
			this.bettingOrderData["title"] = gameData.titleList[numIndex + 1].text;
			this.bettingOrderData["selectedTeam"] = dataList.name;
			this.bettingOrderData["text"] = rateData.text
			this.bettingOrderData["show_type"] = gameData.ShowTypeR;
			if (this.bettingOrderData["title"] == "让球" && this.user.BK_R_Bet == 0) {
				showToast("对不起,本场有下注金额最高:  RMB 0");
				return;
			}
			if (this.bettingOrderData["title"] == "大小" && this.user.BK_OU_Bet == 0) {
				showToast("对不起,本场有下注金额最高:  RMB 0");
				return;
			}
			if (this.bettingOrderData["title"] == "单/双" && this.user.BK_EO_Bet == 0) {
				showToast("对不起,本场有下注金额最高:  RMB 0");
				return;
			}
			if (this.bettingOrderData["rate"] == 0 || this.bettingOrderData["rate"] == null) this.openModal = false;
			else this.openModal = true;
		},
		closeModal: function () {
			this.openModal = false;
		},
	},
	mounted() {
		this.loading = true;
		console.log(this.todayGids);
		this.$socket.emit("sendBKTodayMessage", { lids: this.todayGids, field: this.field });
	},
	unmounted() {
		this.$socket.emit("stopBKTodayMessage");
	}
})
</script>

<style scoped lang="scss">
.item_background_up {
	animation-iteration-count: 1;
	animation: 2s bgcolorchange_up;
}

.item-background:hover {
	background-color: orange;
	cursor: pointer;
}

.item_background_down {
	animation-iteration-count: 1;
	animation: 2s bgcolorchange_down;
}

.divide-background {
	background: white;
	padding-bottom: 3px
}

@keyframes bgcolorchange_up {
	0% {
		background-color: green;
	}

	100% {
		background-color: white;
	}
}

@keyframes bgcolorchange_down {
	0% {
		background-color: orange;
	}

	100% {
		background-color: white;
	}
}

.loading-position {
	margin-top: 200px;
	position: absolute;
	left: 50%;
}

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

.detail_show {
	display: block;
}

.detail_hide {
	display: none
}


.center_item {
	padding-left: 13px;
	font-size: 12px;
	background-color: #FFFFFF;
	color: #5C546A;

	.table_list {
		display: flex;
		text-align: center;

		div {
			width: 61px;
			margin-right: 5px;
		}

		div:first-child {
			width: 130px;
			margin-right: 13px;
			text-align: left;
		}

		div:last-child {
			margin-right: 0;
		}
	}

	.table_title {
		min-height: 32px;

		div {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-top: 7px;
		}
	}

	.table_text {
		height: 41px;
		align-items: center;
		margin-top: 6px;

		.table_text_r {

			div {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: 59px;
				height: 42px;
				border: 1px solid #CECECE;
				border-radius: 5px;

				span {
					color: #000000;
				}

				span:last-child {
					color: #E80909;
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

		.table_text_l {
			display: flex;

			span:first-child {
				color: #FF7100;
				margin-right: 8px;
			}
		}
	}

	.store_up {
		height: 34px;
		display: flex;
		align-items: center;

		img {
			width: 17px;
			height: 17px;
			margin-left: 72px;
		}
	}
}

.center_item:last-child {
	border-top: 12px solid #F3FAFF !important;
}
</style>
