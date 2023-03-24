<template>
	<div>
		<van-loading color="#1989fa" class="loading-position" v-if="loading" size="40" />
		<div style="text-align: center;" v-if="changedBKDataList.length === 0 && !loading">没有数据</div>
		<div class="game_list" v-for="(item, index) in changedBKDataList" :key="index + 100">
			<div class="divide-background"></div>
			<div class="center_title" @click="showDetail(item['lid'])">
				<span>{{ item.name }}</span>
				<img :src="item.icon" alt="">
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
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { bettingStore } from '@/stores/betting';
import { showToast } from 'vant';
export default defineComponent({
	name: "BK_Parlay_Main",
	setup() {
		const { setBetSlip, setFavoriteBKList, removeFavoriteBKList } = bettingStore();
		return { setBetSlip, setFavoriteBKList, removeFavoriteBKList };
	},
	props: {
		parlayGids: "",
		field: ""
	},
	data() {
		return {
			loading: true as boolean,
			openModal: false,
			bettingType: "Parlay",
			bettingOrderData: {
				showType: "Parlay",
				mID: 0,
				rate: 0,
				title: "",
				mbTeam: "",
				tgTeam: "",
				league: "",
				selectedTeam: "",
				lineType: 9,
				selectedType: "H", // "H", "C"
				gameType: "BK",
				oddFType: "H",
				active: 1,
				r_type: "",
				text: "",
				m_date: "",
				m_start: "",
				m_ball: 0,
				t_ball: 0
			},
			changedBKDataList: [],
			tempBKDataList: [],
		}
	}, sockets: {
		connect: function () {
			console.log('socket to notification channel connected')
		},
		receivedBKParlayMessage: function (data: any) {
			this.loading = false;
			console.log('receivedBKParlayMessage', data);
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
					if ((this.tempBKDataList[i]["gameList"][j]["scoreList"][0]["nums"][3].num - this.changedBKDataList[i]["gameList"][j]["scoreList"][0]["nums"][3].num) > 0) {
						this.changedBKDataList[i]["gameList"][j]["scoreList"][0]["nums"][3].colorChangeDown = true;
					} else if ((this.tempBKDataList[i]["gameList"][j]["scoreList"][0]["nums"][3].num - this.changedBKDataList[i]["gameList"][j]["scoreList"][0]["nums"][3].num) < 0) {
						this.changedBKDataList[i]["gameList"][j]["scoreList"][0]["nums"][3].colorChangeUp = true;
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
					if ((this.tempBKDataList[i]["gameList"][j]["scoreList"][1]["nums"][3].num - this.changedBKDataList[i]["gameList"][j]["scoreList"][1]["nums"][3].num) > 0) {
						this.changedBKDataList[i]["gameList"][j]["scoreList"][1]["nums"][3].colorChangeDown = true;
					} else if ((this.tempBKDataList[i]["gameList"][j]["scoreList"][1]["nums"][3].num - this.changedBKDataList[i]["gameList"][j]["scoreList"][1]["nums"][3].num) < 0) {
						this.changedBKDataList[i]["gameList"][j]["scoreList"][1]["nums"][3].colorChangeUp = true;
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
				if (bkData[0]["FLAG_CLASS"] == null) {
					data["icon"] = "";
				} else {
					let flag_url = `../../../../../src/assets/flags/${bkData[0]["FLAG_CLASS"]}.svg`;
					data["icon"] = new URL(flag_url, import.meta.url).href;
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
							text: '总分'
						},
						{
							text: '第一队得分'
						},
						{
							text: '第二队得分'
						}
					];
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
										lineType: 51,
										bettingType: "H",
										oddFType: "H",
										type: item["MB_P_LetB_Rate"] == 0 ? 2 : 1,
										colorChangeUp: false,
										colorChangeDOwn: false,
										text: (Number(item["MB_P_LetB_Rate"])) > (Number(item["TG_P_LetB_Rate"])) ? "-" + item["M_P_LetB"] : "+" + item["M_P_LetB"],
										num: item["MB_P_LetB_Rate"] == 0 ? 0 : (Number(item["MB_P_LetB_Rate"])).toFixed(2)
									},
									{
										lineType: 52,
										bettingType: "H",
										oddFType: "H",
										type: item["MB_P_Dime_Rate"] == 0 ? 2 : 1,
										colorChangeUp: false,
										colorChangeDOwn: false,
										text: item['MB_P_Dime'],
										num: item["MB_P_Dime_Rate"] == 0 ? 0 : (Number(item['MB_P_Dime_Rate'])).toFixed(2)
									},
									{
										lineType: 53,
										bettingType: "H",
										oddFType: "E",
										type: item["MB_P_Points_Rate_1"] == 0 ? 2 : 1,
										colorChangeUp: false,
										colorChangeDOwn: false,
										text: item["MB_P_Points_1"],
										num: (Number(item["MB_P_Points_Rate_1"])).toFixed(2)
									},
									{
										lineType: 54,
										bettingType: "H",
										oddFType: "E",
										type: item["MB_P_Points_Rate_2"] == 0 ? 2 : 1,
										colorChangeUp: false,
										colorChangeDOwn: false,
										text: item["MB_P_Points_2"],
										num: (Number(item["MB_P_Points_Rate_2"])).toFixed(2)
									},
								]
							},
							{
								goalsScored: item["TG_Ball"],
								name: item["TG_Team"],
								nums: [
									{
										lineType: 51,
										bettingType: "C",
										oddFType: "H",
										type: item["TG_P_LetB_Rate"] == 0 ? 2 : 1,
										colorChangeUp: false,
										colorChangeDOwn: false,
										text: (Number(item["MB_P_LetB_Rate"])) < (Number(item["TG_P_LetB_Rate"])) ? "-" + item["M_P_LetB"] : "+" + item["M_P_LetB"],
										num: item["TG_P_LetB_Rate"] == 0 ? 0 : (Number(item["TG_P_LetB_Rate"])).toFixed(2)
									},
									{
										lineType: 52,
										bettingType: "C",
										oddFType: "H",
										type: item["TG_P_Dime_Rate"] == 0 ? 2 : 1,
										colorChangeUp: false,
										colorChangeDOwn: false,
										text: item['TG_P_Dime'],
										num: item["TG_P_Dime_Rate"] == 0 ? 0 : (Number(item['TG_P_Dime_Rate'])).toFixed(2)
									},
									{
										lineType: 53,
										bettingType: "C",
										oddFType: "E",
										type: item["TG_P_Points_Rate_1"] == 0 ? 2 : 1,
										colorChangeUp: false,
										colorChangeDOwn: false,
										text: item["TG_P_Points_1"],
										num: Number(item["TG_P_Points_Rate_1"]).toFixed(2)
									},
									{
										lineType: 54,
										bettingType: "C",
										oddFType: "E",
										type: item["TG_P_Points_Rate_2"] == 0 ? 2 : 1,
										colorChangeUp: false,
										colorChangeDOwn: false,
										text: item["TG_P_Points_2"],
										num: Number(item["TG_P_Points_Rate_2"]).toFixed(2)
									},
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
			this.bettingOrderData["mID"] = gameData["id"];
			this.bettingOrderData["m_date"] = gameData["m_date"];
			this.bettingOrderData["m_start"] = gameData["m_start"];
			this.bettingOrderData["m_ball"] = 0;
			this.bettingOrderData["t_ball"] = 0;
			this.bettingOrderData["mbTeam"] = gameData.scoreList[0].name;
			this.bettingOrderData["tgTeam"] = gameData.scoreList[1].name;
			this.bettingOrderData["rate"] = rateData.num;
			this.bettingOrderData["lineType"] = rateData.lineType;
			this.bettingOrderData['selectedType'] = rateData.bettingType;
			this.bettingOrderData["league"] = leagueData.name;
			this.bettingOrderData["title"] = gameData.titleList[numIndex + 1].text;
			this.bettingOrderData["selectedTeam"] = dataList.name;
			this.bettingOrderData["oddFType"] = rateData.oddFType;
			this.bettingOrderData["text"] = rateData.text

			let data = {
				showType: this.bettingType,
				type: this.bettingOrderData["selectedType"],
				title: this.bettingOrderData["title"],
				league: this.bettingOrderData["league"],
				m_team: this.bettingOrderData["mbTeam"],
				t_team: this.bettingOrderData["tgTeam"],
				select_team: this.bettingOrderData["selectedTeam"],
				text: this.bettingOrderData["text"],
				order_rate: this.bettingOrderData["rate"],
				odd_f_type: this.bettingOrderData['oddFType'],
				gold: 0,
				m_win: 0,
				id: this.user.id,
				m_id: this.bettingOrderData["mID"],
				g_type: this.bettingOrderData["gameType"],
				line_type: this.bettingOrderData["lineType"],
				active: 1,
				r_type: this.bettingOrderData['r_type'],
				m_date: this.bettingOrderData['m_date'],
				m_start: this.bettingOrderData['m_start'],
				m_ball: this.bettingOrderData["m_ball"],
				t_ball: this.bettingOrderData["t_ball"]
			}
			if (this.user.id == undefined) {
				showToast('你必须先登录。')
				router.push("login")
				return;
			}
			this.setBetSlip(data);
		},
		closeModal: function () {
			this.openModal = false;
		},
	},
	mounted() {
		this.loading = true;
		console.log(this.parlayGids);
		this.$socket.emit("sendBKParlayMessage", { lids: this.parlayGids, field: this.field });
	},
	unmounted() {
		this.$socket.emit("stopBKParlayMessage");
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
			width: 83px;
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
