<template>
	<div>
		<van-loading color="#1989fa" class="loading-position" v-if="loading" size="40" />
		<div v-for="(lidItem, lidItemIndex) in changedFTScoreDataList" :key="lidItemIndex + 100">
			<div class="divide-background"></div>
			<div class="center_title">
				<span>{{ lidItem.name }}</span>
				<img :src="lidItem.icon" alt="">
			</div>
			<div :class="{ detail_show: lidItem['show'], detail_hide: !lidItem['show'] }"
				v-for="(gameItem, gameItemInex) in lidItem['gameList']" :key="gameItemInex">
				<div class="ranks">
					<div class="ranks_l">
						<div class="ranks_item">
							<span>{{ gameItem["MB_Ball"] }}</span>
							{{ gameItem["mbTeam"] }}
						</div>
						<div class="ranks_item">
							<span>{{ gameItem["TG_Ball"] }}</span>
							{{ gameItem["tgTeam"] }}
						</div>
					</div>
					<div class="ranks_r">
						<span>{{ gameItem["playTitle"] }}</span>
						<span class="">{{ gameItem["time"] }}</span>
						<img src="@/assets/images/stadiums/c-icon.png" alt="">
					</div>
				</div>
				<div class="score_box" v-for="(scoreItem, scoreListIndex) in gameItem['scoreList']" :key="scoreListIndex">
					<div class="score_in" :ref="'score' + scoreListIndex">
						<div class="score_list" v-for="(subItem, subItemIndex) in scoreItem['score']" :key="subItemIndex">
							<div class="score_item" v-for="(scores, scoresIndex) in subItem" :key="scoresIndex">
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
							<span>{{ scoreItem.other }}</span>
						</div>
					</div>
					<div class="more" @click="more(scoreListIndex)">
						查看更多
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import OrderModal from "@/views/Stadium/components/Ordermodal.vue"
import { defineComponent } from "vue";
import { stadiumStore } from "@/stores/stadium";
import { storeToRefs } from "pinia";
export default defineComponent({
	name: "other",
	setup() {
		const { getFTScoreInPlayDataList } = stadiumStore();
		const { getFTScoreInPlayLists } = storeToRefs(stadiumStore());
		const ftScoreDataList = getFTScoreInPlayLists.value;
		return { getFTScoreInPlayDataList, ftScoreDataList }
	},
	components: {
		OrderModal
	},
	data() {
		return {
			conditionItem: {
				type: "FT"
			},
			loading: true,
			title: "",
			rate: 0,
			m_team: "",
			t_team: "",
			league: "",
			select_team: "",
			openModal: false,
			boxHeight: 0,
			tempFTScoreDataList: [],
			changedFTScoreDataList: []
		}
	},
	computed: {
	},
	watch: {
	},
	sockets: {
		connect: function () {
			console.log('socket to notification channel connected')
		},
		receivedFTInPlayScoreData(data: any) {
			console.log('receiveFTData', data);
			var ftScoreDataList = [];
			let lidArray: Array<any> = data.map(function (item: object) {
				return item["LID"];
			});
			var uniqueLIDArray = [...new Set(lidArray)].filter(item => item != null);
			uniqueLIDArray.forEach(LID => {
				let dataByLID = data.filter(item => item["LID"] == LID);
				ftScoreDataList.push(dataByLID);
			});
			this.ftScoreDataChange(ftScoreDataList);
			let totalCount = this.tempFTScoreDataList.length > this.changedFTScoreDataList.length ? this.changedFTScoreDataList.length : this.tempFTScoreDataList.length;

			for (let i = 0; i < totalCount; i++) {
				let subCount = this.tempFTScoreDataList[i]["gameList"].length > this.changedFTScoreDataList[i]["gameList"].length ? this.changedFTScoreDataList[i]["gameList"].length : this.changedFTScoreDataList[i]["gameList"].length;
				// console.log(subCount);
				for (let j = 0; j < subCount; j++) {

					// console.log("1111111111111", this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["nums"][0].num, this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["nums"][0].num);

					if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"]["other"] - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"]["other"]) > 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"]["other"].colorChangeDown = true;
					} else if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"]["other"] - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"]["other"]) < 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"]["other"].colorChangeUp = true;
					}

					if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][0][0].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][0][0].num) > 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][0][0].colorChangeDown = true;
					} else if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][0][0].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][0][0].num) < 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][0][0].colorChangeUp = true;
					}
					if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][0][1].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][0][1].num) > 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][0][1].colorChangeDown = true;
					} else if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][0][1].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][0][1].num) < 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][0][1].colorChangeUp = true;
					}
					if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][0][2].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][0][2].num) > 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][0][2].colorChangeDown = true;
					} else if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][0][2].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][0][2].num) < 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][0][2].colorChangeUp = true;
					}

					if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][1][0].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][1][0].num) > 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][1][0].colorChangeDown = true;
					} else if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][1][0].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][1][0].num) < 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][1][0].colorChangeUp = true;
					}
					if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][1][1].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][1][1].num) > 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][1][1].colorChangeDown = true;
					} else if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][1][1].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][1][1].num) < 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][1][1].colorChangeUp = true;
					}
					if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][1][2].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][1][2].num) > 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][1][2].colorChangeDown = true;
					} else if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][1][2].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][1][2].num) < 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][1][2].colorChangeUp = true;
					}

					if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][2][0].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][2][0].num) > 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][2][0].colorChangeDown = true;
					} else if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][2][0].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][2][0].num) < 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][2][0].colorChangeUp = true;
					}
					if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][2][1].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][2][1].num) > 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][2][1].colorChangeDown = true;
					} else if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][2][1].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][2][1].num) < 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][2][1].colorChangeUp = true;
					}
					if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][2][2].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][2][2].num) > 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][2][2].colorChangeDown = true;
					} else if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][2][2].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][2][2].num) < 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][2][2].colorChangeUp = true;
					}

					if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][3][0].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][3][0].num) > 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][3][0].colorChangeDown = true;
					} else if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][3][0].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][3][0].num) < 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][3][0].colorChangeUp = true;
					}
					if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][3][1].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][3][1].num) > 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][3][1].colorChangeDown = true;
					} else if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][3][1].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][3][1].num) < 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][3][1].colorChangeUp = true;
					}
					if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][3][2].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][3][2].num) > 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][3][2].colorChangeDown = true;
					} else if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][3][2].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][3][2].num) < 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][3][2].colorChangeUp = true;
					}

					if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][4][0].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][4][0].num) > 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][4][0].colorChangeDown = true;
					} else if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][4][0].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][4][0].num) < 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][4][0].colorChangeUp = true;
					}
					if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][4][1].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][4][1].num) > 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][4][1].colorChangeDown = true;
					} else if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][3][1].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][4][1].num) < 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][4][1].colorChangeUp = true;
					}
					if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][4][2].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][4][2].num) > 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][4][2].colorChangeDown = true;
					} else if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][4][2].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][4][2].num) < 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][4][2].colorChangeUp = true;
					}

					if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][5][0].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][5][0].num) > 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][5][0].colorChangeDown = true;
					} else if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][5][0].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][5][0].num) < 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][5][0].colorChangeUp = true;
					}
					if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][5][2].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][5][2].num) > 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][5][2].colorChangeDown = true;
					} else if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][5][2].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][5][2].num) < 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][5][2].colorChangeUp = true;
					}

					if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][6][0].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][6][0].num) > 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][6][0].colorChangeDown = true;
					} else if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][6][0].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][6][0].num) < 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][6][0].colorChangeUp = true;
					}
					if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][6][2].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][6][2].num) > 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][6][2].colorChangeDown = true;
					} else if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][6][2].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][6][2].num) < 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][6][2].colorChangeUp = true;
					}

					if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][7][0].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][7][0].num) > 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][7][0].colorChangeDown = true;
					} else if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][7][0].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][7][0].num) < 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][7][0].colorChangeUp = true;
					}
					if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][5][2].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][7][2].num) > 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][5][2].colorChangeDown = true;
					} else if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][5][2].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][7][2].num) < 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][5][2].colorChangeUp = true;
					}

					if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][8][0].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][8][0].num) > 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][8][0].colorChangeDown = true;
					} else if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][8][0].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][8][0].num) < 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][8][0].colorChangeUp = true;
					}
					if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][8][2].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][8][2].num) > 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][8][2].colorChangeDown = true;
					} else if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][8][2].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][8][2].num) < 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][8][2].colorChangeUp = true;
					}

					if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][9][0].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][9][0].num) > 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][9][0].colorChangeDown = true;
					} else if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][9][0].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][9][0].num) < 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][9][0].colorChangeUp = true;
					}
					if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][9][2].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][9][2].num) > 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][9][2].colorChangeDown = true;
					} else if ((this.tempFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][9][2].num - this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][9][2].num) < 0) {
						this.changedFTScoreDataList[i]["gameList"][j]["scoreList"][0]["score"][9][2].colorChangeUp = true;
					}
				}
			}

		}
	},
	async mounted() {
		this.$socket.emit("sendCorrectScoreMessage")
		await this.getFTScoreInPlayDataList(this.conditionItem);
		console.log(this.ftScoreDataList);
		this.ftScoreDataChange(this.ftScoreDataList);
		this.loading = false;
		this.boxHeight = document.documentElement.clientWidth * 0.85;
		this.$socket.emit('userJoined', 'user');
	},
	methods: {
		more: function (index: number) {
			var x = document.getElementsByClassName('score_in')
			if ((x[0] as any).style.height !== 'auto') {
				(x[0] as any).style.height = 'auto'
			} else {
				var h = this.boxHeight + 'px';
				(x[0] as any).style.height = h
			}
		},
		showSummary: function (lid, id, ecid) {
			this.$socket.emit('sendHDP_OUData', { ecid, id });
		},
		showCorner: function (lid, id, ecid) {
			this.$socket.emit('sendCornerData', { ecid, id });
		},
		showDetail: function (lid) {
			console.log(lid);
			this.changedFTScoreDataList.forEach(element => {
				if (element["lid"] === lid) {
					console.log(element);
					element["show"] = !element['show'];
				}
			});
		},
		ftScoreDataChange: function (ftScoreDataList) {
			this.tempFTScoreDataList = this.ftScoreDataList;
			this.changedFTScoreDataList = [];
			ftScoreDataList.forEach(ftData => {
				let data = {} as object;
				data["lid"] = ftData[0]["LID"];
				data["name"] = ftData[0]["M_League"];
				if (this.tempFTScoreDataList.length > 0) {
					this.tempFTScoreDataList.forEach(item => {
						if (item["lid"] == data["lid"]) {
							data["show"] = item['show'];
						}
					})
				} else {
					data["show"] = false;
				}
				if (ftData[0]["FLAG_CLASS"] != null && ftData[0]["FLAG_CLASS"].includes("flag_GB")) {
					data["icon"] = new URL('@/assets/flags/flag_GB.svg', import.meta.url).href;
				} else if (ftData[0]["FLAG_CLASS"] == null) {
					data["icon"] = "";
				} else {
					let flag_url = `../../../../src/assets/flags/${ftData[0]["FLAG_CLASS"]}.svg`;
					data["icon"] = new URL(flag_url, import.meta.url).href;
				}
				let gameList = [];
				ftData.forEach(item => {
					console.log(item["RETIME_SET"].split(" ")[0]);
					let playTitle = item["RETIME_SET"] == "半场" ? item["RETIME_SET"] : item["RETIME_SET"].split(" ")[1].split(":")[0] > 45 ? "下半场" : "上半场";
					let time = item["RETIME_SET"] == "HT" ? "" : item["RETIME_SET"].split(" ")[1];
					let mbTeam = item["MB_Team"];
					let tgTeam = item["TG_Team"];
					let gameData = {
						id: item["MID"],
						ecid: item["ECID"],
						mbTeam: mbTeam,
						tgTeam: tgTeam,
						playTitle: playTitle,
						time: time,
						MB_Ball: item["MB_Ball"],
						TG_Ball: item["TG_Ball"],
						scoreList: [
							{
								colorChangeUp: false,
								colorChangeDOwn: false,
								other: item["UP5"],
								state: item["UP5"] == 0 ? 2 : 1,
								score: [
									[
										{
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '1-0',
											num: item["MB1TG0"],
											state: item["MB1TG0"] == 0 ? 2 : 1
										},
										{
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '0-0',
											num: item["MB0TG0"],
											state: item["MB0TG0"] == 0 ? 2 : 1
										},
										{
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '0-1',
											num: item["MB0TG1"],
											state: item["MB0TG1"] == 0 ? 2 : 1
										}
									],
									[
										{
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '2-0',
											num: item["MB2TG0"],
											state: item["MB2TG0"] == 0 ? 2 : 1
										},
										{
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '1-1',
											num: item["MB1TG1"],
											state: item["MB1TG1"] == 0 ? 2 : 1
										},
										{
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '0-2',
											num: item["MB0TG2"],
											state: item["MB0TG2"] == 0 ? 2 : 1
										}
									],
									[
										{
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '2-1',
											num: item["MB2TG1"],
											state: item["MB2TG1"] == 0 ? 2 : 1
										},
										{
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '2-2',
											num: item["MB2TG2"],
											state: item["MB2TG2"] == 0 ? 2 : 1
										},
										{
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '1-2',
											num: item["MB1TG2"],
											state: item["MB1TG2"] == 0 ? 2 : 1
										}
									],
									[
										{
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '3-0',
											num: item["MB3TG0"],
											state: item["MB3TG0"] == 0 ? 2 : 1
										},
										{
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '3-3',
											num: item["MB3TG3"],
											state: item["MB3TG3"] == 0 ? 2 : 1
										},
										{
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '0-3',
											num: item["MB0TG3"],
											state: item["MB0TG3"] == 0 ? 2 : 1
										}
									],
									[
										{
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '3-1',
											num: item["MB3TG1"],
											state: item["MB3TG1"] == 0 ? 2 : 1
										},
										{
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '4-4',
											num: item["MB4TG4"],
											state: item["MB4TG4"] == 0 ? 2 : 1
										},
										{
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '1-3',
											num: item["MB1TG3"],
											state: item["MB1TG3"] == 0 ? 2 : 1
										}
									],
									[
										{
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '3-2',
											num: item["MB3TG2"],
											state: item["MB3TG2"] == 0 ? 2 : 1
										},
										{},
										{
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '2-3',
											num: item["MB2TG3"],
											state: item["MB2TG3"] == 0 ? 2 : 1
										}
									],
									[
										{
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '4-0',
											num: item["MB4TG0"],
											state: item["MB4TG0"] == 0 ? 2 : 1
										},
										{},
										{
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '1-3',
											num: item["MB1TG3"],
											state: item["MB1TG3"] == 0 ? 2 : 1
										}
									],
									[
										{
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '4-1',
											num: item["MB4TG1"],
											state: item["MB4TG1"] == 0 ? 2 : 1
										},
										{},
										{
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '1-4',
											num: item["MB1TG4"],
											state: item["MB1TG4"] == 0 ? 2 : 1
										}
									],
									[
										{
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '4-2',
											num: item["MB4TG2"],
											state: item["MB4TG2"] == 0 ? 2 : 1
										},
										{},
										{
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '2-4',
											num: item["MB2TG4"],
											state: item["MB2TG4"] == 0 ? 2 : 1
										}
									],
									[
										{
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '4-3',
											num: item["MB4TG3"],
											state: item["MB4TG3"] == 0 ? 2 : 1
										},
										{},
										{
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '3-1',
											num: item["MB3TG1"],
											state: item["MB3TG1"] == 0 ? 2 : 1
										}
									]
								]
							}
						]

					}

					gameList.push(gameData);
				})
				data["gameList"] = gameList;
				this.changedFTScoreDataList.push(data);
			});
		},
		handleModal: function (leagueData, gameData, dataList, rateData, scoreIndex) {
			this.m_team = gameData.scoreList[0].name;
			this.t_team = gameData.scoreList[1].name;
			this.league = leagueData.name;
			this.title = gameData.titleList[scoreIndex];
			this.rate = rateData.num;
			this.select_team = dataList.name
			if (this.rate == 0 || this.rate == null) this.openModal = false;
			else this.openModal = true;
		},
		closeModal: function () {
			this.openModal = false;
		}
	}
})

</script>

<style scoped lang="scss">
.detail_show {
	display: block;
}

.detail_hide {
	display: none
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

.divide-background {
	background: white;
	padding-bottom: 3px
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
