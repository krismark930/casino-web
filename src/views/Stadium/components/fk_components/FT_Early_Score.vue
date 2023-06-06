<template>
	<div>
		<van-loading color="#1989fa" class="loading-position" v-if="loading" size="40" />
		<div style="text-align: center;" v-if="changedFTScoreDataList.length === 0 && !loading">没有数据</div>
		<div v-for="(lidItem, lidItemIndex) in changedFTScoreDataList" :key="lidItemIndex + 100">
			<div class="divide-background"></div>
			<div class="center_title" @click="showDetail(lidItem['lid'])">
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
						<span></span>
						<span class="">{{ gameItem["time"] }}</span>
					</div>
				</div>
				<div class="score_box" v-for="(scoreItem, scoreListIndex) in gameItem['scoreList']" :key="scoreListIndex">
					<div class="score_in" :ref="'score' + scoreListIndex">
						<div class="score_list" v-for="(subItem, subItemIndex) in scoreItem['score']" :key="subItemIndex">
							<div class="score_item"
								:class="{ score_item_show: scores.type == 1, score_item_hide: scores.type == 2 }"
								v-for="(scores, scoresIndex) in subItem" :key="scoresIndex">
								<div class="item-background" v-if="scores.state == 1"
									:class="{ item_background_up: scores.colorChangeUp, item_background_down: scores.colorChangeDown }"
									@click="handleModal(lidItem, gameItem, scores)">
									<span>{{ scores.text }}</span>
									<span>{{ scores.num }}</span>
								</div>
								<div class="lock" v-if="scores.state == 2">
									<img src="@/assets/images/stadiums/lock.png" alt="">
								</div>
							</div>
						</div>
						<div class="score_other score_item" :class="{ score_item_hide: scoreItem.type == 2 }"
							@click="handleOtherModal(lidItem, gameItem, scoreItem)">
							<span>其他比分</span>
							<span>{{ scoreItem.other }}</span>
						</div>
					</div>
					<div class="more" @click="moreShow(lidItem['lid'], gameItemInex, scoreListIndex)">
						查看更多
					</div>
				</div>
			</div>
		</div>
		<OrderModal v-if="openModal" :bettingOrderData="bettingOrderData" :bettingType="bettingType" @close="closeModal" />
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
	props: {
		earlyGids: "",
		field: ""
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
			bettingType: "Early",
			bettingOrderData: {
				mID: 0,
				rate: 0,
				title: "",
				mbTeam: "",
				tgTeam: "",
				league: "",
				selectedTeam: "",
				lineType: 9,
				selectedType: "H", // "H", "C", "N"
				gameType: "FT",
				oddFType: "H",
				active: 1,
				r_type: ""
			},
			openModal: false,
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
		receivedFTEarlyScoreData(data: any) {
			this.loading = false;
			console.log('receiveFTData', data);
			if (data.length == 0) return;
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
			console.log("totalCount: ", totalCount);

			for (let i = 0; i < totalCount; i++) {
				// console.log("1111111111111111111", this.tempFTScoreDataList[i]);
				let subCount = this.tempFTScoreDataList[i]["gameList"].length > this.changedFTScoreDataList[i]["gameList"].length ? this.changedFTScoreDataList[i]["gameList"].length : this.changedFTScoreDataList[i]["gameList"].length;

				for (let j = 0; j < subCount; j++) {

					console.log("tempFTScoreDataList: ", this.tempFTScoreDataList);
					console.log("changedFTScoreDataList: ", this.changedFTScoreDataList[i]["gameList"][j]);

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
		this.$socket.emit("sendCorrectScoreEarly", { lids: this.earlyGids, field: this.field })
		// await this.getFTScoreInPlayDataList(this.conditionItem);
		// console.log(this.ftScoreDataList);
		// this.ftScoreDataChange(this.ftScoreDataList);
		// this.loading = false;
	},
	methods: {
		moreShow: function (lid: number, gameItemInex: number, scoreListIndex: number) {
			this.changedFTScoreDataList.map(item => {
				if (item["lid"] === lid) {
					item["gameList"][gameItemInex]['scoreList'][0]['type'] = item["gameList"][gameItemInex]['scoreList'][0]['type'] == 2 ? 1 : 2;
					item["gameList"][gameItemInex]['scoreList'][0]['score'][5][0]['type'] = item["gameList"][gameItemInex]['scoreList'][0]['score'][5][0]['type'] == 2 ? 1 : 2;
					item["gameList"][gameItemInex]['scoreList'][0]['score'][5][2]['type'] = item["gameList"][gameItemInex]['scoreList'][0]['score'][5][2]['type'] == 2 ? 1 : 2;
					item["gameList"][gameItemInex]['scoreList'][0]['score'][6][0]['type'] = item["gameList"][gameItemInex]['scoreList'][0]['score'][6][0]['type'] == 2 ? 1 : 2;
					item["gameList"][gameItemInex]['scoreList'][0]['score'][6][2]['type'] = item["gameList"][gameItemInex]['scoreList'][0]['score'][6][2]['type'] == 2 ? 1 : 2;
					item["gameList"][gameItemInex]['scoreList'][0]['score'][7][0]['type'] = item["gameList"][gameItemInex]['scoreList'][0]['score'][7][0]['type'] == 2 ? 1 : 2;
					item["gameList"][gameItemInex]['scoreList'][0]['score'][7][2]['type'] = item["gameList"][gameItemInex]['scoreList'][0]['score'][7][2]['type'] == 2 ? 1 : 2;
					item["gameList"][gameItemInex]['scoreList'][0]['score'][8][0]['type'] = item["gameList"][gameItemInex]['scoreList'][0]['score'][8][0]['type'] == 2 ? 1 : 2;
					item["gameList"][gameItemInex]['scoreList'][0]['score'][8][2]['type'] = item["gameList"][gameItemInex]['scoreList'][0]['score'][8][2]['type'] == 2 ? 1 : 2;
					item["gameList"][gameItemInex]['scoreList'][0]['score'][9][0]['type'] = item["gameList"][gameItemInex]['scoreList'][0]['score'][9][0]['type'] == 2 ? 1 : 2;
					item["gameList"][gameItemInex]['scoreList'][0]['score'][9][2]['type'] = item["gameList"][gameItemInex]['scoreList'][0]['score'][9][2]['type'] == 2 ? 1 : 2;
				}
			})
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
			this.tempFTScoreDataList = this.changedFTScoreDataList;
			console.log("function:========", this.tempFTScoreDataList);
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
				if (ftData[0]["FLAG_CLASS"] == null || ftData[0]["FLAG_CLASS"] == "") {
					data["icon"] = "";
				} else {
					data["icon"] = `https://www.hga030.com/images/flag/${ftData[0]["FLAG_CLASS"]}.svg`;
				}
				let gameList = [];
				ftData.forEach(item => {
					// console.log(item["RETIME_SET"].split(" ")[0]);
					let time = item["M_Time"];
					let mbTeam = item["MB_Team"];
					let tgTeam = item["TG_Team"];
					let gameData = {
						id: item["MID"],
						ecid: item["ECID"],
						mbTeam: mbTeam,
						tgTeam: tgTeam,
						time: time,
						MB_Ball: item["MB_Ball"],
						TG_Ball: item["TG_Ball"],
						scoreList: [
							{
								lineType: 4,
								type: 2,
								rType: "OVH",
								colorChangeUp: false,
								colorChangeDOwn: false,
								other: item["UP5"],
								state: item["UP5"] == 0 ? 2 : 1,
								score: [
									[
										{
											lineType: 4,
											type: 1,
											rType: "H1C0",
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '1-0',
											num: item["MB1TG0"],
											state: item["MB1TG0"] == 0 ? 2 : 1
										},
										{
											lineType: 4,
											type: 1,
											rType: "H0C0",
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '0-0',
											num: item["MB0TG0"],
											state: item["MB0TG0"] == 0 ? 2 : 1
										},
										{
											lineType: 4,
											type: 1,
											rType: "H0C1",
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '0-1',
											num: item["MB0TG1"],
											state: item["MB0TG1"] == 0 ? 2 : 1
										}
									],
									[
										{
											lineType: 4,
											type: 1,
											rType: "H2C0",
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '2-0',
											num: item["MB2TG0"],
											state: item["MB2TG0"] == 0 ? 2 : 1
										},
										{
											lineType: 4,
											type: 1,
											rType: "H1C1",
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '1-1',
											num: item["MB1TG1"],
											state: item["MB1TG1"] == 0 ? 2 : 1
										},
										{
											lineType: 4,
											type: 1,
											rType: "H0C2",
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '0-2',
											num: item["MB0TG2"],
											state: item["MB0TG2"] == 0 ? 2 : 1
										}
									],
									[
										{
											lineType: 4,
											type: 1,
											rType: "H2C1",
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '2-1',
											num: item["MB2TG1"],
											state: item["MB2TG1"] == 0 ? 2 : 1
										},
										{
											lineType: 4,
											type: 1,
											rType: "H2C2",
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '2-2',
											num: item["MB2TG2"],
											state: item["MB2TG2"] == 0 ? 2 : 1
										},
										{
											lineType: 4,
											type: 1,
											rType: "H1C2",
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '1-2',
											num: item["MB1TG2"],
											state: item["MB1TG2"] == 0 ? 2 : 1
										}
									],
									[
										{
											lineType: 4,
											type: 1,
											rType: "H3C0",
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '3-0',
											num: item["MB3TG0"],
											state: item["MB3TG0"] == 0 ? 2 : 1
										},
										{
											lineType: 4,
											type: 1,
											rType: "H3C3",
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '3-3',
											num: item["MB3TG3"],
											state: item["MB3TG3"] == 0 ? 2 : 1
										},
										{
											lineType: 4,
											type: 1,
											rType: "H0C3",
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '0-3',
											num: item["MB0TG3"],
											state: item["MB0TG3"] == 0 ? 2 : 1
										}
									],
									[
										{
											lineType: 4,
											type: 1,
											rType: "H3C1",
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '3-1',
											num: item["MB3TG1"],
											state: item["MB3TG1"] == 0 ? 2 : 1
										},
										{
											lineType: 4,
											type: 1,
											rType: "H4C4",
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '4-4',
											num: item["MB4TG4"],
											state: item["MB4TG4"] == 0 ? 2 : 1
										},
										{
											lineType: 4,
											type: 1,
											rType: "H1C3",
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '1-3',
											num: item["MB1TG3"],
											state: item["MB1TG3"] == 0 ? 2 : 1
										}
									],
									[
										{
											lineType: 4,
											type: 2,
											rType: "H3C2",
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '3-2',
											num: item["MB3TG2"],
											state: item["MB3TG2"] == 0 ? 2 : 1
										},
										{},
										{
											lineType: 4,
											type: 2,
											rType: "H2C3",
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '2-3',
											num: item["MB2TG3"],
											state: item["MB2TG3"] == 0 ? 2 : 1
										}
									],
									[
										{
											lineType: 4,
											type: 2,
											rType: "H4C0",
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '4-0',
											num: item["MB4TG0"],
											state: item["MB4TG0"] == 0 ? 2 : 1
										},
										{},
										{
											lineType: 4,
											type: 2,
											rType: "H1C3",
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '1-3',
											num: item["MB1TG3"],
											state: item["MB1TG3"] == 0 ? 2 : 1
										}
									],
									[
										{
											lineType: 4,
											type: 2,
											rType: "H4C1",
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '4-1',
											num: item["MB4TG1"],
											state: item["MB4TG1"] == 0 ? 2 : 1
										},
										{},
										{
											lineType: 4,
											type: 2,
											rType: "H1C4",
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '1-4',
											num: item["MB1TG4"],
											state: item["MB1TG4"] == 0 ? 2 : 1
										}
									],
									[
										{
											lineType: 4,
											type: 2,
											rType: "H4C2",
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '4-2',
											num: item["MB4TG2"],
											state: item["MB4TG2"] == 0 ? 2 : 1
										},
										{},
										{
											lineType: 4,
											type: 2,
											rType: "H2C4",
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '2-4',
											num: item["MB2TG4"],
											state: item["MB2TG4"] == 0 ? 2 : 1
										}
									],
									[
										{
											lineType: 4,
											type: 2,
											rType: "H4C3",
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '4-3',
											num: item["MB4TG3"],
											state: item["MB4TG3"] == 0 ? 2 : 1
										},
										{},
										{
											lineType: 4,
											type: 2,
											rType: "H3C4",
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: '3-4',
											num: item["MB3TG4"],
											state: item["MB3TG4"] == 0 ? 2 : 1
										}
									]
								]
							}
						],
					}

					gameList.push(gameData);
				})
				data["gameList"] = gameList;
				this.changedFTScoreDataList.push(data);
			});
		},
		handleModal: function (leagueData, gameData, score) {
			this.bettingOrderData["lineType"] = score["lineType"];
			this.bettingOrderData["r_type"] = score["rType"]
			this.bettingOrderData["mID"] = gameData["id"];
			this.bettingOrderData["gameType"] = "FT";
			this.bettingOrderData["mbTeam"] = gameData["mbTeam"];
			this.bettingOrderData["tgTeam"] = gameData["tgTeam"];
			this.bettingOrderData["m_ball"] = 0;
			this.bettingOrderData["t_ball"] = 0;
			this.bettingOrderData["rate"] = score.num;
			this.bettingOrderData["league"] = leagueData.name;
			this.bettingOrderData["title"] = " (滚球) 波胆";
			this.bettingOrderData["selectedTeam"] = score.text;
			if (this.bettingOrderData["rate"] == 0 || this.bettingOrderData["rate"] == null) this.openModal = false;
			else this.openModal = true;
		},
		handleOtherModal: function (leagueData, gameData, scoreItem) {
			console.log(scoreItem);
			console.log(this.bettingOrderData);
			this.bettingOrderData["lineType"] = scoreItem["lineType"];
			this.bettingOrderData["r_type"] = scoreItem["rType"]
			this.bettingOrderData["mID"] = gameData["id"];
			this.bettingOrderData["gameType"] = "FT";
			this.bettingOrderData["mbTeam"] = gameData["mbTeam"];
			this.bettingOrderData["tgTeam"] = gameData["tgTeam"];
			this.bettingOrderData["m_ball"] = 0;
			this.bettingOrderData["t_ball"] = 0;
			this.bettingOrderData["rate"] = scoreItem.other;
			this.bettingOrderData["league"] = leagueData.name;
			this.bettingOrderData["title"] = " (滚球) 波胆";
			this.bettingOrderData["selectedTeam"] = "其他比分";
			if (this.bettingOrderData["rate"] == 0 || this.bettingOrderData["rate"] == null) this.openModal = false;
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

.score_item_show {
	display: block !important;
}

.score_item_hide {
	display: none !important;
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

.item-background:hover {
	background-color: orange;
	cursor: pointer;
}

.item_background_up {
	animation-iteration-count: 1;
	animation: 2s bgcolorchange_up;
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

.score_box {
	transition: all 1s;

	.more {
		height: 30px;
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
