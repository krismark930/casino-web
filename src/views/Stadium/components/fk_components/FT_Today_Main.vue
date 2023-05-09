<template>
	<div>
		<van-loading color="#1989fa" class="loading-position" v-if="loading" size="40" />
		<div style="text-align: center;" v-if="changedFTDataList.length === 0 && !loading">没有数据</div>
		<div class="game-list" v-for="(item, index) in changedFTDataList" :key="index">
			<div class="divide-background"></div>
			<div class="center-title" @click="showDetail(item['lid'])">
				<span>{{ item.name }}</span>
				<img :src="item.icon" alt="" v-if="item.icon !== ''">
			</div>
			<div class="center-item" :class="{ detail_show: item['show'], detail_hide: !item['show'] }"
				v-for="(data, index) in item.gameList" :key="index">
				<div class="table-title table-list">
					<div v-for="(title, index) in data.titleList" :key="index">
						<span>{{ title }}</span>
					</div>
				</div>
				<div class="table-text table-list" v-for="(datalist, scoreIndex) in data.scoreList" :key="scoreIndex">
					<div class="table-text-l" v-if="datalist.name">
						<!-- <span>{{ datalist.goalsScored }}</span> -->
						<span>0</span>
						<span>{{ datalist.name }}</span>
					</div>
					<div class="store-up" v-if="!datalist.name">
						<img v-if="!datalist.Collection" src="@/assets/images/stadiums/store_up.png" alt=""
							@click="saveFavorite(item.lid, data.id, data.ecid)">
						<img v-if="datalist.Collection" src="@/assets/images/stadiums/store_in.png" alt=""
							@click="removeFavorite(item.lid, data.id)">
					</div>
					<div class="table-text-r" v-for="(num, numIndex) in datalist.nums" :key="numIndex">
						<div v-if="num.type == 1" @click="handleModal(item, data, datalist, num, numIndex)"
							:class="{ item_background_up: num.colorChangeUp, item_background_down: num.colorChangeDown }"
							class="item-background">
							<span>{{ num.text }}</span>
							<span>{{ num.num }}</span>
						</div>
						<div class="lock" v-if="num.type == 2">
							<img src="@/assets/images/stadiums/lock.png" alt="">
						</div>
					</div>
				</div>
				<div class="table-type">
					<button
						:class="{ btnSelect: data.tepe[0].type == 2, btn_show: data['hdpBtnShow'], btn_hide: !data['hdpBtnShow'] }"
						@click="showSummary(item['lid'], data['id'], data['ecid'], data)">
						{{ data.tepe[0].name }}
					</button>
					<button
						:class="{ btnSelect: data.tepe[1].type == 2, btn_show: data['cornerBtnShow'], btn_hide: !data['cornerBtnShow'] }"
						@click="showCorner(item['lid'], data['id'], data['ecid'], data)">
						{{ data.tepe[1].name }}
					</button>
				</div>
				<div class="summary"
					:class="{ full_court_show: data.tepe[0].type == 2, full_court_hidden: data.tepe[0].type == 1 }">
					<div class="summary-top">全场</div>
					<div class="summary-center">
						<div class="summary-title">{{ data.fullCourt1.title }}</div>
						<div class="summary-item" v-for="(summary, fullCourtIndex1) in data.fullCourt1.data"
							:key="fullCourtIndex1 + 600">
							<div class="summary-item-l">
								<!-- <span>{{ summary.goalsScored }}</span> -->
								<span>0</span>
								<span>{{ summary.name }}</span>
							</div>
							<div :class="{ summary_item_background: summaryitem.num == 0 }"
								v-for="(summaryitem, k) in summary.nums" :key="k + 650">
								<div class="summary-item-r" v-if="summaryitem.num != 0"
									@click="handleSummaryModal1(item, data, data['fullCourt1']['title'], summary, summaryitem)"
									:class="{ item_background_up: summaryitem.colorChangeUp, item_background_down: summaryitem.colorChangeDown }">
									<span>{{ summaryitem.text }}</span>
									<span>{{ summaryitem.num }}</span>
								</div>
								<div class="summary-item-r" v-if="summaryitem.num == 0">
									<img style="width: 13px" src="@/assets/images/stadiums/lock.png" alt="">
								</div>
							</div>
						</div>
					</div>
					<div class="summary-center">
						<div class="summary-title">{{ data.fullCourt2.title }}</div>
						<div v-for="(summary2, s) in data.fullCourt2.data" :key="s + 700">
							<div class="summary-item">
								<div v-for="(h, k) in summary2.nums" :key="k + 750">
									<div class="summary-item-r summary-bottom" v-if="h.num != 0"
										@click="handleSummaryModal2(item, data, data['fullCourt2']['title'], summary2, h)"
										:class="{ item_background_up: h.colorChangeUp, item_background_down: h.colorChangeDown }">
										<span>{{ h.text }}</span>
										<span>{{ h.num }}</span>
									</div>
									<div class="summary-item-r summary-bottom summary_item_background" v-if="h.num == 0">
										<img style="width: 13px" src="@/assets/images/stadiums/lock.png" alt="">
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div style="background: #ededed"
					:class="{ corner_table_show: data.tepe[1].type == 2, corner_table_hide: data.tepe[1].type == 1 }">
					<div class="table-title corner-table-list" style="margin-bottom: 20px; padding-right: 15px">
						<div v-for="(title, index) in 	cornerTitleList" :key="index">
							<span>{{ title }}</span>
						</div>
					</div>
					<div class="table-text corner-table-list" v-for="(cornerData, cornerIndex) in data.cornerList"
						:key="cornerIndex" style="padding-bottom: 10px; padding-right: 6px;">
						<div class="table-text-l" v-if="cornerData.name">
							<!-- <span>{{ cornerData.goalsScored }}</span> -->
							<span>0</span>
							<span>{{ cornerData.name }}</span>
						</div>
						<div class="table-text-r" v-for="(num, numIndex) in cornerData.nums" :key="numIndex">
							<div v-if="num.type == 1" @click="handleCornerModal(item, data, cornerData, num, numIndex)"
								:class="{ item_background_up: num.colorChangeUp, item_background_down: num.colorChangeDown }"
								class="item-background">
								<span>{{ num.text }}</span>
								<span>{{ num.num }}</span>
							</div>
							<div class="lock" v-if="num.type == 2">
								<img src="@/assets/images/stadiums/lock.png" alt="">
							</div>
						</div>
					</div>
				</div>
				<div class="summary-over">
					所有玩法
				</div>
			</div>
		</div>
		<OrderModal v-if="openModal" :bettingOrderData="bettingOrderData" :bettingType="bettingType" @close="closeModal" />
	</div>
</template>
<script lang="ts">
import OrderModal from "@/views/Stadium/components/Ordermodal.vue"
import { defineComponent } from 'vue';
import { bettingStore } from "@/stores/betting";
import { storeToRefs } from "pinia";
import { showToast } from 'vant';
export default defineComponent({
	name: "Football",
	setup() {
		const { setFavoriteList, removeFavoriteList } = bettingStore();
		return { setFavoriteList, removeFavoriteList };
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
			conditionItem: {
				type: "FT"
			},
			value: "ok",
			loading: true,
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
				gameType: "FT",
				oddFType: "H",
				active: 1,
				r_type: "",
				text: "",
				m_date: "",
				m_start: "",
				m_ball: 0,
				t_ball: 0
			},
			summaryGID: 0,
			summaryLID: 0,
			fullCourt1: {
				title: '让球',
				data: [
					{
						name: "",
						// goalsScored: 0,
						nums: [
							{
								lineType: 22,
								bettingType: "H",
								colorChangeUp: false,
								colorChangeDOwn: false,
								text: "",
								num: 0,
							},
							{
								lineType: 23,
								bettingType: "H",
								colorChangeUp: false,
								colorChangeDOwn: false,
								text: "",
								num: 0,
							},
							{
								lineType: 24,
								bettingType: "H",
								colorChangeUp: false,
								colorChangeDOwn: false,
								text: "",
								num: 0,
							},
							{
								lineType: 25,
								bettingType: "H",
								colorChangeUp: false,
								colorChangeDOwn: false,
								text: "",
								num: 0,
							},
						]
					},
					{
						name: "",
						// goalsScored: 0,
						nums: [
							{
								lineType: 22,
								bettingType: "C",
								colorChangeUp: false,
								colorChangeDOwn: false,
								text: "",
								num: 0,
							},
							{
								lineType: 23,
								bettingType: "C",
								colorChangeUp: false,
								colorChangeDOwn: false,
								text: "",
								num: 0,
							},
							{
								lineType: 24,
								bettingType: "C",
								colorChangeUp: false,
								colorChangeDOwn: false,
								text: "",
								num: 0,
							},
							{
								lineType: 25,
								bettingType: "C",
								colorChangeUp: false,
								colorChangeDOwn: false,
								text: "",
								num: 0,
							},
						]
					}
				]
			},
			fullCourt2: {
				title: '得分大小',
				data: [
					{
						name: "",
						// goalsScored: 0,
						nums: [
							{
								lineType: 26,
								bettingType: "H",
								colorChangeUp: false,
								colorChangeDOwn: false,
								text: "",
								num: 0,
							},
							{
								lineType: 27,
								bettingType: "H",
								colorChangeUp: false,
								colorChangeDOwn: false,
								text: "",
								num: 0,
							},
							{
								lineType: 28,
								bettingType: "H",
								colorChangeUp: false,
								colorChangeDOwn: false,
								text: "",
								num: 0,
							},
							{
								lineType: 29,
								bettingType: "H",
								colorChangeUp: false,
								colorChangeDOwn: false,
								text: "",
								num: 0,
							},
						]
					},
					{
						name: "",
						// goalsScored: 0,
						nums: [
							{
								lineType: 26,
								bettingType: "C",
								colorChangeUp: false,
								colorChangeDOwn: false,
								text: "",
								num: 0,
							},
							{
								lineType: 27,
								bettingType: "C",
								colorChangeUp: false,
								colorChangeDOwn: false,
								text: "",
								num: 0,
							},
							{
								lineType: 28,
								bettingType: "C",
								colorChangeUp: false,
								colorChangeDOwn: false,
								text: "",
								num: 0,
							},
							{
								lineType: 29,
								bettingType: "C",
								colorChangeUp: false,
								colorChangeDOwn: false,
								text: "",
								num: 0,
							},
						]
					}
				]
			},
			cornerList: [
				{
					// goalsScored: 0,
					name: "",
					nums: [
						{
							lineType: 30,
							bettingType: "H",
							type: 2,
							colorChangeUp: false,
							colorChangeDOwn: false,
							text: "",
							num: 0
						},
						{
							lineType: 31,
							bettingType: "H",
							type: 2,
							colorChangeUp: false,
							colorChangeDOwn: false,
							text: "大",
							num: 0
						},
						{
							lineType: 32,
							bettingType: "H",
							type: 2,
							colorChangeUp: false,
							colorChangeDOwn: false,
							text: "",
							num: 0
						},
					]
				},
				{
					// goalsScored: 0,
					name: "",
					nums: [
						{
							lineType: 30,
							bettingType: "C",
							type: 2,
							colorChangeUp: false,
							colorChangeDOwn: false,
							text: "",
							num: 0
						},
						{
							lineType: 31,
							bettingType: "C",
							type: 2,
							colorChangeUp: false,
							colorChangeDOwn: false,
							text: "大",
							num: 0
						},
						{
							lineType: 32,
							bettingType: "C",
							type: 2,
							colorChangeUp: false,
							colorChangeDOwn: false,
							text: "",
							num: 0
						},
					]
				},

				{
					name: "",
					nums: [
						{},
						{},
						{},
						{
							lineType: 32,
							bettingType: "N",
							type: 2,
							colorChangeUp: false,
							colorChangeDOwn: false,
							text: "和",
							num: 0
						},
					]
				},
			],
			cornerGID: 0,
			cornerLID: 0,
			cornerTitleList: ["", "角球让分", "角球大/小", "角球独赢"],
			// titleList: ['半场', '让球', '得分大小', '独赢', '下一个进球'],
			changedFTDataList: [],
			tempFTDataList: []
		}
	},
	computed: {
	},
	watch: {
		changedFTDataList: function (newDataList: any) {
		},
	},
	sockets: {
		connect: function () {
			console.log('socket to notification channel connected')
		},
		receivedFTTodayMessage: function (data: any) {
			this.loading = false;
			// console.log('receivedFTTodayMessage', data);
			var ftDataList = [];
			let lidArray: Array<any> = data.map(function (item: object) {
				return item["LID"];
			});
			var uniqueLIDArray = [...new Set(lidArray)].filter(item => item != null);
			uniqueLIDArray.forEach(LID => {
				let dataByLID = data.filter(item => item["LID"] == LID);
				ftDataList.push(dataByLID);
			});
			this.ftDataChange(ftDataList);
			let totalCount = this.tempFTDataList.length > this.changedFTDataList.length ? this.changedFTDataList.length : this.tempFTDataList.length;

			for (let i = 0; i < totalCount; i++) {
				let subCount = this.tempFTDataList[i]["gameList"].length > this.changedFTDataList[i]["gameList"].length ? this.changedFTDataList[i]["gameList"].length : this.tempFTDataList[i]["gameList"].length;
				// console.log(subCount);
				for (let j = 0; j < subCount; j++) {

					// console.log("1111111111111", this.tempFTDataList[i]["gameList"][j]["scoreList"][0]["nums"][0].num, this.changedFTDataList[i]["gameList"][j]["scoreList"][0]["nums"][0].num);

					if ((this.tempFTDataList[i]["gameList"][j]["scoreList"][0]["nums"][0].num - this.changedFTDataList[i]["gameList"][j]["scoreList"][0]["nums"][0].num) > 0) {
						this.changedFTDataList[i]["gameList"][j]["scoreList"][0]["nums"][0].colorChangeDown = true;
					} else if ((this.tempFTDataList[i]["gameList"][j]["scoreList"][0]["nums"][0].num - this.changedFTDataList[i]["gameList"][j]["scoreList"][0]["nums"][0].num) < 0) {
						this.changedFTDataList[i]["gameList"][j]["scoreList"][0]["nums"][0].colorChangeUp = true;
					}
					if ((this.tempFTDataList[i]["gameList"][j]["scoreList"][0]["nums"][1].num - this.changedFTDataList[i]["gameList"][j]["scoreList"][0]["nums"][1].num) > 0) {
						this.changedFTDataList[i]["gameList"][j]["scoreList"][0]["nums"][1].colorChangeDown = true;
					} else if ((this.tempFTDataList[i]["gameList"][j]["scoreList"][0]["nums"][1].num - this.changedFTDataList[i]["gameList"][j]["scoreList"][0]["nums"][1].num) < 0) {
						this.changedFTDataList[i]["gameList"][j]["scoreList"][0]["nums"][1].colorChangeUp = true;
					}
					if ((this.tempFTDataList[i]["gameList"][j]["scoreList"][0]["nums"][2].num - this.changedFTDataList[i]["gameList"][j]["scoreList"][0]["nums"][2].num) > 0) {
						this.changedFTDataList[i]["gameList"][j]["scoreList"][0]["nums"][2].colorChangeDown = true;
					} else if ((this.tempFTDataList[i]["gameList"][j]["scoreList"][0]["nums"][2].num - this.changedFTDataList[i]["gameList"][j]["scoreList"][0]["nums"][2].num) < 0) {
						this.changedFTDataList[i]["gameList"][j]["scoreList"][0]["nums"][2].colorChangeUp = true;
					}

					if ((this.tempFTDataList[i]["gameList"][j]["scoreList"][1]["nums"][0].num - this.changedFTDataList[i]["gameList"][j]["scoreList"][1]["nums"][0].num) > 0) {
						this.changedFTDataList[i]["gameList"][j]["scoreList"][1]["nums"][0].colorChangeDown = true;
					} else if ((this.tempFTDataList[i]["gameList"][j]["scoreList"][1]["nums"][0].num - this.changedFTDataList[i]["gameList"][j]["scoreList"][1]["nums"][0].num) < 0) {
						this.changedFTDataList[i]["gameList"][j]["scoreList"][1]["nums"][0].colorChangeUp = true;
					}
					if ((this.tempFTDataList[i]["gameList"][j]["scoreList"][1]["nums"][1].num - this.changedFTDataList[i]["gameList"][j]["scoreList"][1]["nums"][1].num) > 0) {
						this.changedFTDataList[i]["gameList"][j]["scoreList"][1]["nums"][1].colorChangeDown = true;
					} else if ((this.tempFTDataList[i]["gameList"][j]["scoreList"][1]["nums"][1].num - this.changedFTDataList[i]["gameList"][j]["scoreList"][1]["nums"][1].num) < 0) {
						this.changedFTDataList[i]["gameList"][j]["scoreList"][1]["nums"][1].colorChangeUp = true;
					}
					if ((this.tempFTDataList[i]["gameList"][j]["scoreList"][1]["nums"][2].num - this.changedFTDataList[i]["gameList"][j]["scoreList"][1]["nums"][2].num) > 0) {
						this.changedFTDataList[i]["gameList"][j]["scoreList"][1]["nums"][2].colorChangeDown = true;
					} else if ((this.tempFTDataList[i]["gameList"][j]["scoreList"][1]["nums"][2].num - this.changedFTDataList[i]["gameList"][j]["scoreList"][1]["nums"][2].num) < 0) {
						this.changedFTDataList[i]["gameList"][j]["scoreList"][1]["nums"][2].colorChangeUp = true;
					}


					if ((this.tempFTDataList[i]["gameList"][j]["scoreList"][2]["nums"][2].num - this.changedFTDataList[i]["gameList"][j]["scoreList"][2]["nums"][2].num) > 0) {
						this.changedFTDataList[i]["gameList"][j]["scoreList"][2]["nums"][2].colorChangeDown = true;
					} else if ((this.tempFTDataList[i]["gameList"][j]["scoreList"][2]["nums"][2].num - this.changedFTDataList[i]["gameList"][j]["scoreList"][2]["nums"][2].num) < 0) {
						this.changedFTDataList[i]["gameList"][j]["scoreList"][2]["nums"][2].colorChangeUp = true;
					}
					if ((this.tempFTDataList[i]["gameList"][j]["scoreList"][2]["nums"][2].num - this.changedFTDataList[i]["gameList"][j]["scoreList"][2]["nums"][2].num) > 0) {
						this.changedFTDataList[i]["gameList"][j]["scoreList"][2]["nums"][2].colorChangeDown = true;
					} else if ((this.tempFTDataList[i]["gameList"][j]["scoreList"][2]["nums"][2].num - this.changedFTDataList[i]["gameList"][j]["scoreList"][2]["nums"][2].num) < 0) {
						this.changedFTDataList[i]["gameList"][j]["scoreList"][2]["nums"][2].colorChangeUp = true;
					}
					// console.log("1111111111111111111111111", this.tempFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][3])

				}
			}

		},
		receivedFT_HDP_OU_TODAY: function (data: any) {
			this.loading = false;

			for (let i = 0; i < this.changedFTDataList.length; i++) {
				if (this.changedFTDataList[i]["lid"] === this.summaryLID) {
					for (let j = 0; j < this.changedFTDataList[i]["gameList"].length; j++) {
						if (this.changedFTDataList[i]["gameList"][j]["id"] === this.summaryGID) {

							this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][0].colorChangeUp = false;
							this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][0].colorChangeUp = true;
							this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][1].colorChangeDown = false;
							this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][1].colorChangeUp = false;
							this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][0].colorChangeUp = false;
							this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][0].colorChangeDown = false;
							this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][1].colorChangeUp = false;
							this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][1].colorChangeDown = false;
							this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][0].colorChangeUp = false;
							this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][0].colorChangeDown = false;
							this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][1].colorChangeUp = false;
							this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][1].colorChangeDown = false;
							this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][0].colorChangeUp = false;
							this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][0].colorChangeDown = false;
							this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][1].colorChangeUp = false;
							this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][1].colorChangeDown = false;

							if ((this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][0].num - data["IOR_REH_HDP_0"]) > 0) {
								this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][0].colorChangeDown = true;
							} else if ((this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][0].num - data["IOR_REH_HDP_0"]) < 0) {
								this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][0].colorChangeUp = true;
							}
							if ((this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][1].num - data["IOR_REH_HDP_1"]) > 0) {
								this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][1].colorChangeDown = true;
							} else if ((this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][1].num - data["IOR_REH_HDP_1"]) < 0) {
								this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][1].colorChangeUp = true;
							}

							if ((this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][0].num - data["IOR_REC_HDP_0"]) > 0) {
								this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][0].colorChangeDown = true;
							} else if ((this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][0].num - data["IOR_REC_HDP_0"]) < 0) {
								this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][0].colorChangeUp = true;
							}
							if ((this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][1].num - data["IOR_REC_HDP_1"]) > 0) {
								this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][1].colorChangeDown = true;
							} else if ((this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][1].num - data["IOR_REC_HDP_1"]) < 0) {
								this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][1].colorChangeUp = true;
							}

							if ((this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][0].num - data["IOR_ROUC_HDP_0"]) > 0) {
								this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][0].colorChangeDown = true;
							} else if ((this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][0].num - data["IOR_ROUC_HDP_0"]) < 0) {
								this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][0].colorChangeUp = true;
							}
							if ((this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][1].num - data["IOR_ROUC_HDP_1"]) > 0) {
								this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][1].colorChangeDown = true;
							} else if ((this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][1].num - data["IOR_ROUC_HDP_1"]) < 0) {
								this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][1].colorChangeUp = true;
							}

							if ((this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][0].num - data["IOR_ROUH_HDP_0"]) > 0) {
								this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][0].colorChangeDown = true;
							} else if ((this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][0].num - data["IOR_ROUH_HDP_0"]) < 0) {
								this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][0].colorChangeUp = true;
							}
							if ((this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][1].num - data["IOR_ROUH_HDP_1"]) > 0) {
								this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][1].colorChangeDown = true;
							} else if ((this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][1].num - data["IOR_ROUH_HDP_1"]) < 0) {
								this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][1].colorChangeUp = true;
							}

							this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][0]["text"] = data["RATIO_RE_HDP_0"] != null && (Number(data["IOR_REH_HDP_0"])) > (Number(data["IOR_REC_HDP_0"])) ? "-" + data["RATIO_RE_HDP_0"] : "+" + data["RATIO_RE_HDP_0"];
							this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][0]["num"] = (Number(data["IOR_REH_HDP_0"])).toFixed(2)
							this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][1]["text"] = data["RATIO_RE_HDP_1"]
							this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][1]["num"] = (Number(data["IOR_REH_HDP_1"])).toFixed(2)
							this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][2]["text"] = data["RATIO_RE_HDP_2"]
							this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][2]["num"] = data["IOR_REH_HDP_2"] !== undefined ? (Number(data["IOR_REH_HDP_2"])).toFixed(2) : 0;
							this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][3]["text"] = data["RATIO_RE_HDP_3"]
							this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][3]["num"] = data["IOR_REH_HDP_3"] !== undefined ? (Number(data["IOR_REH_HDP_3"])).toFixed(2) : 0;

							this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][0]["text"] = data["RATIO_RE_HDP_0"] != null && (Number(data["IOR_REH_HDP_0"])) < (Number(data["IOR_REC_HDP_0"])) ? "-" + data["RATIO_RE_HDP_0"] : "+" + data["RATIO_RE_HDP_0"];
							this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][0]["num"] = (Number(data["IOR_REC_HDP_0"])).toFixed(2)
							this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][1]["text"] = data["RATIO_RE_HDP_1"]
							this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][1]["num"] = (Number(data["IOR_REC_HDP_1"])).toFixed(2)
							this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][2]["text"] = data["RATIO_RE_HDP_2"]
							this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][2]["num"] = data["IOR_REC_HDP_2"] !== undefined ? (Number(data["IOR_REC_HDP_2"])).toFixed(2) : 0
							this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][3]["text"] = data["RATIO_RE_HDP_3"]
							this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][3]["num"] = data["IOR_REC_HDP_3"] !== undefined ? (Number(data["IOR_REC_HDP_3"])).toFixed(2) : 0

							this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][0]["text"] = data["RATIO_ROUO_HDP_0"];
							this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][0]["num"] = (Number(data["IOR_ROUC_HDP_0"])).toFixed(2)
							this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][1]["text"] = data["RATIO_ROUO_HDP_1"]
							this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][1]["num"] = (Number(data["IOR_ROUC_HDP_1"])).toFixed(2)
							this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][2]["text"] = data["RATIO_ROUO_HDP_2"]
							this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][2]["num"] = data["IOR_ROUC_HDP_2"] !== undefined ? (Number(data["IOR_ROUC_HDP_2"])).toFixed(2) : 0
							this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][3]["text"] = data["RATIO_ROUO_HDP_3"]
							this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][3]["num"] = data["IOR_ROUC_HDP_3"] !== undefined ? (Number(data["IOR_ROUC_HDP_3"])).toFixed(2) : 0

							this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][0]["text"] = data["RATIO_ROUU_HDP_0"];
							this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][0]["num"] = (Number(data["IOR_ROUH_HDP_0"])).toFixed(2)
							this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][1]["text"] = data["RATIO_ROUU_HDP_1"]
							this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][1]["num"] = (Number(data["IOR_ROUH_HDP_1"])).toFixed(2)
							this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][2]["text"] = data["RATIO_ROUU_HDP_2"]
							this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][2]["num"] = data["IOR_ROUH_HDP_2"] !== undefined ? (Number(data["IOR_ROUH_HDP_2"])).toFixed(2) : 0;
							this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][3]["text"] = data["RATIO_ROUU_HDP_3"]
							this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][3]["num"] = data["IOR_ROUH_HDP_3"] !== undefined ? (Number(data["IOR_ROUH_HDP_3"])).toFixed(2) : 0;

							this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["name"] = this.changedFTDataList[i]["gameList"][j]["scoreList"][0]["name"];
							// this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["goalsScored"] = this.changedFTDataList[i]["gameList"][j]["scoreList"][0]["goalsScored"];
							this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["name"] = this.changedFTDataList[i]["gameList"][j]["scoreList"][1]["name"];
							// this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["goalsScored"] = this.changedFTDataList[i]["gameList"][j]["scoreList"][1]["goalsScored"];

							this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["name"] = this.changedFTDataList[i]["gameList"][j]["scoreList"][0]["name"];
							// this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["goalsScored"] = this.changedFTDataList[i]["gameList"][j]["scoreList"][0]["goalsScored"];
							this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["name"] = this.changedFTDataList[i]["gameList"][j]["scoreList"][1]["name"];
							// this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["goalsScored"] = this.changedFTDataList[i]["gameList"][j]["scoreList"][1]["goalsScored"];

							console.log(this.changedFTDataList[i]["gameList"][j]["scoreList"][1]["name"]);

							this.fullCourt1 = this.changedFTDataList[i]["gameList"][j]["fullCourt1"];
							this.fullCourt2 = this.changedFTDataList[i]["gameList"][j]["fullCourt2"];

						}
					}
				}
			}
		},
		receivedFT_CORNER_TODAY: function (data: any) {
			this.loading = false;
			console.log(data);
			for (let i = 0; i < this.changedFTDataList.length; i++) {
				if (this.changedFTDataList[i]["lid"] === this.cornerLID) {
					for (let j = 0; j < this.changedFTDataList[i]["gameList"].length; j++) {

						if (this.changedFTDataList[i]["gameList"][j]["id"] === this.cornerGID) {

							this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][0].colorChangeUp = false;
							this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][0].colorChangeUp = true;
							this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][1].colorChangeDown = false;
							this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][1].colorChangeUp = false;
							this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][2].colorChangeUp = false;
							this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][2].colorChangeDown = false;
							this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][0].colorChangeUp = false;
							this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][0].colorChangeDown = false;
							this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][1].colorChangeUp = false;
							this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][1].colorChangeDown = false;
							this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][2].colorChangeUp = false;
							this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][2].colorChangeDown = false;
							this.changedFTDataList[i]["gameList"][j]["cornerList"][2]["nums"][2].colorChangeUp = false;
							this.changedFTDataList[i]["gameList"][j]["cornerList"][2]["nums"][2].colorChangeDown = false;

							if ((this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][0].num) - data["IOR_RH_CN"] > 0) {
								this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][0].colorChangeUp = true;
							} else if ((this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][0].num - data["IOR_RH_CN"]) < 0) {
								this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][0].colorChangeDown = true;
							}
							if ((this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][1].num - data["IOR_RC_CN"]) > 0) {
								this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][1].colorChangeUp = true;
							} else if ((this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][1].num - data["IOR_RC_CN"]) < 0) {
								this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][1].colorChangeDown = true;
							}
							if ((data["IOR_HRH_CN"] - this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][2].num) > 0) {
								this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][2].colorChangeDown = true;
							} else if ((data["IOR_HRH_CN"] - this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][2].num) < 0) {
								this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][2].colorChangeUp = true;
							}

							if ((data["IOR_HRC_CN"] - this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][0].num) > 0) {
								this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][0].colorChangeDown = true;
							} else if ((data["IOR_HRC_CN"] - this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][0].num) < 0) {
								this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][0].colorChangeUp = true;
							}
							if ((data["IOR_MH_CN"] - this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][1].num) > 0) {
								this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][1].colorChangeDown = true;
							} else if ((data["IOR_MH_CN"] - this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][1].num) < 0) {
								this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][1].colorChangeUp = true;
							}
							if ((data["IOR_MC_CN"] - this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][2].num) > 0) {
								this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][2].colorChangeDown = true;
							} else if ((data["IOR_MC_CN"] - this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][2].num) < 0) {
								this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][2].colorChangeUp = true;
							}

							if ((data["IOR_MN_CN"] - this.changedFTDataList[i]["gameList"][j]["cornerList"][2]["nums"][3].num) > 0) {
								this.changedFTDataList[i]["gameList"][j]["cornerList"][2]["nums"][3].colorChangeDown = true;
							} else if ((data["IOR_MN_CN"] - this.changedFTDataList[i]["gameList"][j]["cornerList"][2]["nums"][3].num) < 0) {
								this.changedFTDataList[i]["gameList"][j]["cornerList"][2]["nums"][3].colorChangeUp = true;
							}

							this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][0]["type"] = data["IOR_RH_CN"] == 0 ? 2 : 1
							this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][0]["text"] = "+" + data["RATIO_R_CN"]
							this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][0]["num"] = data["IOR_RH_CN"] == 0 ? 0 : (Number(data["IOR_RH_CN"])).toFixed(2)
							this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][1]["type"] = data["IOR_HRH_CN"] == 0 ? 2 : 1
							this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][1]["text"] = "大" + data["RATIO_OUO_CN"].split("O")[1]
							this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][1]["num"] = data["IOR_HRH_CN"] == 0 ? 0 : (Number(data['IOR_HRH_CN'])).toFixed(2);
							this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][2]["type"] = data["IOR_MH_CN"] == 0 ? 2 : 1
							this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][2]["num"] = data["IOR_MH_CN"] == 0 ? 0 : (Number(data["IOR_MH_CN"])).toFixed(2);
							this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][0]["type"] = data["IOR_RC_CN"] == 0 ? 2 : 1
							this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][0]["text"] = "-" + data["RATIO_R_CN"]
							this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][0]["num"] = data["IOR_RC_CN"] == 0 ? 0 : Number(data['IOR_RC_CN']).toFixed(2)
							this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][1]["type"] = data["IOR_HRC_CN"] == 0 ? 2 : 1
							this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][1]["text"] = "小" + data["RATIO_OUU_CN"].split("U")[1]
							this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][1]["num"] = data["IOR_HRC_CN"] == 0 ? 0 : (Number(data["IOR_HRC_CN"])).toFixed(2)
							this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][2]["type"] = data["IOR_MC_CN"] == 0 ? 2 : 1
							this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][2]["num"] = data["IOR_MC_CN"] == 0 ? 0 : (Number(data['IOR_MC_CN'])).toFixed(2)
							this.changedFTDataList[i]["gameList"][j]["cornerList"][2]["nums"][3]["type"] = data["IOR_MN_CN"] == 0 ? 2 : 1
							this.changedFTDataList[i]["gameList"][j]["cornerList"][2]["nums"][3]["num"] = data["IOR_MN_CN"] == 0 ? 0 : Number(data["IOR_MN_CN"]).toFixed(2)

							console.log(this.changedFTDataList[i]["gameList"][j]["scoreList"][0]["name"]);

							this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["name"] = this.changedFTDataList[i]["gameList"][j]["scoreList"][0]["name"];
							// this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["goalsScored"] = this.changedFTDataList[i]["gameList"][j]["scoreList"][0]["goalsScored"];
							this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["name"] = this.changedFTDataList[i]["gameList"][j]["scoreList"][1]["name"];
							// this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["goalsScored"] = this.changedFTDataList[i]["gameList"][j]["scoreList"][1]["goalsScored"];

							this.cornerList = this.changedFTDataList[i]["gameList"][j]["cornerList"];

						}
					}
				}
			}
		}
	},
	mounted() {
		console.log(this.todayGids);
		this.$socket.emit("sendFTTodayMessage", { lids: this.todayGids, field: this.field });
	},
	unmounted() {
		console.log("unmounted");
		this.$socket.emit("stopFTTodayMessage")
	},
	methods: {
		saveFavorite: function (lid, id, ecid) {
			console.log(lid);
			this.changedFTDataList.forEach(element => {
				if (element["lid"] === lid) {
					element["gameList"].forEach(item => {
						if (item["id"] === id) {
							item["scoreList"][2].Collection = true;
						}
					})
				}
			});
			this.setFavoriteList({ gid: id, ecid: ecid });
			showToast('已加入我的赛事。');
		},
		removeFavorite: function (lid, id) {
			console.log(lid);
			this.changedFTDataList.forEach(element => {
				if (element["lid"] === lid) {
					element["gameList"].forEach(item => {
						if (item["id"] === id) {
							item["scoreList"][2].Collection = false;
						}
					})
				}
			});
			this.removeFavoriteList(id);
		},
		showSummary: function (lid, id, ecid, summaryData) {
			console.log(summaryData);
			this.summaryGID = id;
			this.summaryLID = lid;
			this.$socket.emit('sendHDP_OU_TODAY', { ecid: ecid, id: id, showtype: "today" });
			this.changedFTDataList.forEach(element => {
				if (element["lid"] === lid) {
					element["gameList"].forEach(item => {
						if (item["id"] === id) {
							// item["tepe"][0].type = item["tepe"][0].type == 1 ? 2 : 1;
							item["tepe"][0].type = 2
							item["tepe"][1].type = 1;
						} else {
							item["tepe"][0].type = 1;
							item["tepe"][1].type = 1;
						}
					})
				} else {
					element["gameList"].forEach(item => {
						item["tepe"][0].type = 1;
						item["tepe"][1].type = 1;
					})
				}
			});
		},
		showCorner: function (lid, id, ecid, cornerData) {
			this.cornerData = cornerData;
			this.cornerGID = id;
			this.cornerLID = lid;
			this.$socket.emit('sendCornerToday', { ecid, id });
			this.changedFTDataList.forEach(element => {
				if (element["lid"] === lid) {
					element["gameList"].forEach(item => {
						if (item["id"] === id) {
							// item["tepe"][0].type = item["tepe"][0].type == 1 ? 2 : 1;
							item["tepe"][1].type = 2
							item["tepe"][0].type = 1;
						} else {
							item["tepe"][1].type = 1;
							item["tepe"][0].type = 1;
						}
					})
				} else {
					element["gameList"].forEach(item => {
						item["tepe"][1].type = 1;
						item["tepe"][0].type = 1;
					})
				}
			});
		},
		showDetail: function (lid) {
			console.log(lid);
			this.changedFTDataList.forEach(element => {
				if (element["lid"] === lid) {
					console.log(element);
					element["show"] = !element['show'];
				}
			});
		},
		ftDataChange: function (ftDataList) {
			this.tempFTDataList = this.changedFTDataList;
			this.changedFTDataList = [];
			ftDataList.forEach(ftData => {
				let data = {} as object;
				data["lid"] = ftData[0]["LID"];
				data["name"] = ftData[0]["M_League"];
				if (this.tempFTDataList.length > 0) {
					this.tempFTDataList.forEach(item => {
						if (item["lid"] == data["lid"]) {
							data["show"] = item['show'];
						}
					})
				} else {
					data["show"] = false;
				}
				if (ftData[0]["FLAG_CLASS"] != null && ftData[0]["FLAG_CLASS"].includes("flag_GB")) {
					data["icon"] = new URL('@/assets/flags/flag_GB.svg', import.meta.url).href;
				} else if (ftData[0]["FLAG_CLASS"] == null || ftData[0]["FLAG_CLASS"] == "") {
					data["icon"] = "";
				} else {
					let flag_url = `../../../../../src/assets/flags/${ftData[0]["FLAG_CLASS"]}.svg`;
					data["icon"] = new URL(flag_url, import.meta.url).href;
				}
				let gameList = [];
				ftData.forEach(item => {
					let type1 = 1;
					let type2 = 1;
					if (this.tempFTDataList.length > 0) {
						this.tempFTDataList.forEach(tempItem => {
							tempItem["gameList"].forEach(gameItem => {
								if (gameItem["id"] === item["MID"]) {
									type1 = gameItem["tepe"][0]["type"];
									type2 = gameItem["tepe"][1]["type"];
								}
							})
						})
					}
					let gameData = {
						id: item["MID"],
						ecid: item["ECID"],
						m_date: item["M_Date"],
						m_start: item["M_Start"],
						hdpBtnShow: item["HDP_OU"] == 1 ? true : false,
						cornerBtnShow: item["CORNER"] == 1 ? true : false,
						titleList: ["今日 " + item["M_Time"], '让球', '得分大小', '独赢'],
						scoreList: [
							{
								// goalsScored: item["MB_Ball"],
								name: item["MB_Team"],
								nums: [
									{
										lineType: 2,
										bettingType: "H",
										type: item["MB_LetB_Rate"] == 0 ? 2 : 1,
										colorChangeUp: false,
										colorChangeDOwn: false,
										text: (Number(item["MB_LetB_Rate"])) > (Number(item["TG_LetB_Rate"])) ? "-" + item["M_LetB"] : "+" + item["M_LetB"],
										num: item["MB_LetB_Rate"] == 0 ? 0 : (Number(item["MB_LetB_Rate"])).toFixed(2)
									},
									{
										lineType: 3,
										bettingType: "H",
										type: item["MB_Dime_Rate"] == 0 ? 2 : 1,
										colorChangeUp: false,
										colorChangeDOwn: false,
										text: item['MB_Dime'],
										num: item["MB_Dime_Rate"] == 0 ? 0 : (Number(item['MB_Dime_Rate'])).toFixed(2)
									},
									{
										lineType: 1,
										bettingType: "H",
										type: item["MB_Win_Rate"] == 0 ? 2 : 1,
										colorChangeUp: false,
										colorChangeDOwn: false,
										text: "",
										num: (Number(item["MB_Win_Rate"])).toFixed(2)
									},
									// {
									// 	type: item["MB_Win_Rate_RB_H"] == 0 ? 2 : 1,
									// 	colorChangeUp: false,
									// 	colorChangeDOwn: false,
									// 	text: '第一个',
									// 	num: Number(item['MB_Win_Rate_RB_H']).toFixed(2)
									// }
								]
							},
							{
								// goalsScored: item["TG_Ball"],
								name: item["TG_Team"],
								nums: [
									{
										lineType: 2,
										bettingType: "C",
										type: item["TG_LetB_Rate"] == 0 ? 2 : 1,
										colorChangeUp: false,
										colorChangeDOwn: false,
										text: (Number(item["MB_LetB_Rate"])) < (Number(item["TG_LetB_Rate"])) ? "-" + item["M_LetB"] : "+" + item["M_LetB"],
										num: item["TG_LetB_Rate"] == 0 ? 0 : (Number(item["TG_LetB_Rate"])).toFixed(2)
									},
									{
										lineType: 3,
										bettingType: "C",
										type: item["TG_Dime_Rate"] == 0 ? 2 : 1,
										colorChangeUp: false,
										colorChangeDOwn: false,
										text: item['TG_Dime'],
										num: item["TG_Dime_Rate"] == 0 ? 0 : (Number(item['TG_Dime_Rate'])).toFixed(2)
									},
									{
										lineType: 1,
										bettingType: "C",
										type: item["TG_Win_Rate"] == 0 ? 2 : 1,
										colorChangeUp: false,
										colorChangeDOwn: false,
										text: "",
										num: Number(item["TG_Win_Rate"]).toFixed(2)
									},
									// {
									// 	type: item["TG_Win_Rate_RB_H"] == 0 ? 2 : 1,
									// 	colorChangeUp: false,
									// 	colorChangeDOwn: false,
									// 	text: '第一个',
									// 	num: Number(item['TG_Win_Rate_RB_H']).toFixed(2)
									// }
								]
							},
							{
								Collection: false,
								nums: [
									{},
									{},
									{
										lineType: 1,
										bettingType: "N",
										type: item["M_Flat_Rate"] == 0 ? 2 : 1,
										colorChangeUp: false,
										colorChangeDOwn: false,
										text: '和',
										num: Number(item['M_Flat_Rate']).toFixed(2)
									},
									// {
									// 	type: item["M_Flat_Rate_RB_H"] == 0 ? 2 : 1,
									// 	colorChangeUp: false,
									// 	colorChangeDOwn: false,
									// 	text: '无',
									// 	num: Number(item['M_Flat_Rate_RB_H']).toFixed(2)
									// }
								]
							}
						],
						tepe: [
							{
								name: '让球&大/小',
								type: type1
							},
							{
								name: '角球',
								type: type2
							}
						],
						fullCourt1: this.fullCourt1,
						fullCourt2: this.fullCourt2,
						cornerList: this.cornerList
					}
					gameList.push(gameData);
				})
				data["gameList"] = gameList;
				this.changedFTDataList.push(data);
			});
		},
		handleModal: function (leagueData, gameData, dataList, rateData, scoreIndex) {
			console.log(rateData);
			this.bettingOrderData["mID"] = gameData["id"];
			this.bettingOrderData["m_date"] = gameData["m_date"];
			this.bettingOrderData["m_start"] = gameData["m_start"];
			this.bettingOrderData["gameType"] = "FT";
			this.bettingOrderData["mbTeam"] = gameData.scoreList[0].name;
			this.bettingOrderData["tgTeam"] = gameData.scoreList[1].name;
			this.bettingOrderData["m_ball"] = 0;
			this.bettingOrderData["t_ball"] = 0;
			this.bettingOrderData["rate"] = rateData.num;
			this.bettingOrderData["lineType"] = rateData.lineType;
			this.bettingOrderData['selectedType'] = rateData.bettingType;
			this.bettingOrderData["league"] = leagueData.name;
			this.bettingOrderData["title"] = gameData.titleList[scoreIndex + 1];
			this.bettingOrderData["selectedTeam"] = dataList.name;
			this.bettingOrderData["text"] = rateData.text
			if (this.bettingOrderData["rate"] == 0 || this.bettingOrderData["rate"] == null) this.openModal = false;
			else this.openModal = true;
		},
		handleCornerModal: function (leagueData, gameData, dataList, rateData, scoreIndex) {
			this.bettingOrderData["mID"] = gameData["id"];
			this.bettingOrderData["gameType"] = "FT";
			this.bettingOrderData["mbTeam"] = gameData.scoreList[0].name;
			this.bettingOrderData["tgTeam"] = gameData.scoreList[1].name;
			this.bettingOrderData["rate"] = rateData.num;
			this.bettingOrderData["lineType"] = rateData.lineType;
			this.bettingOrderData['selectedType'] = rateData.bettingType;
			this.bettingOrderData["league"] = leagueData.name;
			this.bettingOrderData["text"] = rateData.text
			this.bettingOrderData["title"] = this.cornerTitleList[scoreIndex + 1];
			this.bettingOrderData["selectedTeam"] = dataList.name;
			if (this.bettingOrderData["rate"] == 0 || this.bettingOrderData["rate"] == null) this.openModal = false;
			else this.openModal = true;
		},
		handleSummaryModal1: function (leagueData, gameData, title, dataList, rateData) {
			console.log(rateData)
			this.bettingOrderData["mID"] = gameData["id"];
			this.bettingOrderData["gameType"] = "FT";
			this.bettingOrderData["mbTeam"] = gameData.scoreList[0].name;
			this.bettingOrderData["tgTeam"] = gameData.scoreList[1].name;
			this.bettingOrderData["rate"] = rateData.num;
			this.bettingOrderData["lineType"] = rateData.lineType;
			this.bettingOrderData['selectedType'] = rateData.bettingType;
			this.bettingOrderData["league"] = leagueData.name;
			this.bettingOrderData["title"] = title;
			this.bettingOrderData["text"] = rateData.text
			this.bettingOrderData["selectedTeam"] = dataList.name;
			if (this.bettingOrderData["rate"] == 0 || this.bettingOrderData["rate"] == null) this.openModal = false;
			else this.openModal = true;
		},
		handleSummaryModal2: function (leagueData, gameData, title, dataList, rateData) {
			this.bettingOrderData["mID"] = gameData["id"];
			this.bettingOrderData["gameType"] = "FT";
			this.bettingOrderData["mbTeam"] = gameData.scoreList[0].name;
			this.bettingOrderData["tgTeam"] = gameData.scoreList[1].name;
			this.bettingOrderData["rate"] = rateData.num;
			this.bettingOrderData["lineType"] = rateData.lineType;
			this.bettingOrderData['selectedType'] = rateData.bettingType;
			this.bettingOrderData["league"] = leagueData.name;
			this.bettingOrderData["title"] = title;
			this.bettingOrderData["text"] = rateData.text
			this.bettingOrderData["selectedTeam"] = dataList.name;
			if (this.bettingOrderData["rate"] == 0 || this.bettingOrderData["rate"] == null) this.openModal = false;
			else this.openModal = true;
		},
		closeModal: function () {
			this.openModal = false;
		},
	}
})
</script>
<style scoped lang="scss">
.loading-position {
	margin-top: 200px;
	position: absolute;
	left: 50%;
}

.detail_show {
	display: block;
}

.detail_hide {
	display: none
}

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


.full_court_show {
	display: block;
}

.full_court_hidden {
	display: none;
}

.btn_show {
	display: block;
}

.btn_hide {
	display: none;
}

.center-title {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 40px;
	background-color: #F3FAFF;
	padding: 0 14px;
	border-bottom: 1px solid #E3E3E3;

	span {
		font-size: 17px;
		color: #000000;
	}

	img {
		width: 28px;
		height: 28px;
	}
}

.summary_item_background {
	background-color: #F3FAFF;
}

.center-item {
	font-size: 12px;
	background-color: #FFFFFF;
	color: #5C546A;

	.table-list {
		display: flex;
		text-align: center;
		padding-left: 13px;

		div {
			width: 61px;
			margin-right: 5px;
		}

		div:first-child {
			width: 120px;
			margin-right: 13px;
			text-align: left;
		}

		div:last-child {
			margin-right: 0;
		}
	}

	.corner_table_hide {
		display: none;
	}

	.corner_table_show {
		display: block;
	}

	.corner-table-list {
		display: flex;
		text-align: center;
		padding-left: 13px;

		div {
			width: 61px;
			margin-right: 5px;
		}

		div:first-child {
			width: 80px;
			margin-right: 13px;
			text-align: left;
		}

		div:last-child {
			margin-right: 0;
		}
	}

	.table-title {
		height: 32px;

		div {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-top: 7px;
		}
	}

	.table-text {
		height: 41px;
		align-items: center;
		margin-top: 6px;
		margin-bottom: 4px;

		.store-up {
			height: 34px;
			display: flex;
			align-items: center;

			img {
				width: 17px;
				height: 17px;
				margin-left: 72px;
			}
		}

		.table-text-r {

			margin-right: 10px;

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

		.table-text-l {
			display: flex;

			span:first-child {
				color: #FF7100;
				margin-right: 8px;
			}
		}
	}

	.table-type {
		display: flex;
		align-items: center;
		background-color: #F3FAFF;
		padding: 4px 5px;

		button {
			padding: 6px 13px;
			font-size: 13px;
			border-radius: 25px;
			color: #000000;
			border: none;
			margin-left: 9px;
			background-color: #FFFFFF;
		}

		.btnSelect {
			background-color: #00ADFF;
			color: #FFFFFF;
		}
	}


}

.summary-over {
	height: 33px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #4EABFF;
	font-size: 12px;
}

.summary {
	background-color: #FFFFFF;
	padding: 0 13px;

	.summary-top {
		font-size: 12px;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #FF5A00;
		line-height: 38px;
		text-align: center;
	}

	.summary-center {
		margin-bottom: 2px;
		border-right: 1px solid #E3E3E3;

		.summary-title {
			background-color: #D6E0E6;
			font-size: 12px;
			line-height: 15px;
			text-align: center;
		}

		.summary-item {
			display: flex;
			align-items: center;
			font-size: 12px;

			div {
				display: flex;
				align-items: center;

			}

			.summary-item-l {
				width: 100px;
				height: 33px;

				span:first-child {
					color: #FF7100;
					margin-right: 8px;
				}
			}

			.summary-item-r {
				flex-direction: column;
				justify-content: center;
				width: 61px;
				height: 33px;
				border-left: 1px solid #E3E3E3;
				border-bottom: 1px solid #E3E3E3;

				span:last-child {
					color: #E80909;
				}
			}

			.summary-bottom {
				width: 86px;
			}
		}
	}
}
</style>
