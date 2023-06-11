<template>
	<div>
		<van-loading color="#1989fa" class="loading-position" v-if="loading" size="40" />
		<div style="text-align: center;" v-if="changedFTDataList.length === 0 && !loading">没有数据</div>
		<div class="game-list" v-for="(item, index) in changedFTDataList" :key="index">
			<div class="divide-background"></div>
			<div class="center-title" @click="showDetail(item['lid'])">
				<span>{{ item.name }}</span>
				<img :src="item.icon" alt="">
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
						<span>{{ datalist.goalsScored }}</span>
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
				<van-loading color="#1989fa" class="summary-loading-position"
					v-if="summaryLoading && data.tepe[0].type == 2" size="40" />
				<div v-else class="summary"
					:class="{ full_court_show: data.tepe[0].type == 2, full_court_hidden: data.tepe[0].type == 1 }">
					<div class="summary-top">全场</div>
					<div class="summary-center">
						<div class="summary-title">{{ data.fullCourt1.title }}</div>
						<div class="summary-item" v-for="(summary, fullCourtIndex1) in data.fullCourt1.data"
							:key="fullCourtIndex1 + 600">
							<div class="summary-item-l">
								<span>{{ summary.goalsScored }}</span>
								<span>{{ summary.name }}</span>
							</div>
							<div :class="{ summary_item_background: summaryitem.num == 0 }"
								v-for="(summaryitem, k) in summary.nums" :key="k + 650">
								<div class="summary-item-r" v-if="summaryitem.num != 0 && summaryitem.num != 'NaN'"
									@click="handleSummaryModal1(item, data, data['fullCourt1']['title'], summary, summaryitem)"
									:class="{ item_background_up: summaryitem.colorChangeUp, item_background_down: summaryitem.colorChangeDown }">
									<span>{{ summaryitem.text }}</span>
									<span>{{ summaryitem.num }}</span>
								</div>
								<div class="summary-item-r" v-if="summaryitem.num == 0 || summaryitem.num == 'NaN'">
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
									<div class="summary-item-r summary-bottom" v-if="h.num != 0 && h.num != 'NaN'"
										@click="handleSummaryModal2(item, data, data['fullCourt2']['title'], summary2, h)"
										:class="{ item_background_up: h.colorChangeUp, item_background_down: h.colorChangeDown }">
										<span>{{ h.text }}</span>
										<span>{{ h.num }}</span>
									</div>
									<div class="summary-item-r summary-bottom summary_item_background"
										v-if="h.num == 0 || h.num == 'NaN'">
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
							<span>{{ title[0] }}</span>
							<span>{{ title[1] }}</span>
						</div>
					</div>
					<div class="table-text corner-table-list" v-for="(cornerData, cornerIndex) in data.cornerList"
						:key="cornerIndex" style="padding-bottom: 10px; padding-right: 6px;">
						<div class="table-text-l" v-if="cornerData.name">
							<span>{{ cornerData.goalsScored }}</span>
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
				<div class="summary-over" @click="showMore(item['lid'], data.id)">
					查看更多
				</div>
				<div v-if="data.moreShow" style="margin-right: 6px;">
					<div class="table-title table-list">
						<div v-for="(title, index) in data.halfTitleList" :key="index">
							<span>{{ title }}</span>
						</div>
					</div>
					<div class="store-up">
					</div>
					<div class="table-text table-list" v-for="(halfDatalist, halfScoreIndex) in data.halfScoreList"
						:key="halfScoreIndex">
						<div class="table-text-l" v-if="halfDatalist.name">
							<span>{{ halfDatalist.goalsScored }}</span>
							<span>{{ halfDatalist.name }}</span>
						</div>
						<div class="store-up" v-if="!halfDatalist.name">
						</div>
						<div class="table-text-r" v-for="(num, numIndex) in halfDatalist.nums" :key="numIndex">
							<div v-if="num.type == 1" @click="handleModal1(item, data, halfDatalist, num, numIndex)"
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
	components: {
		OrderModal
	},
	data() {
		return {
			conditionItem: {
				type: "FT"
			},
			moreShow: false,
			loading: true,
			summaryLoading: false,
			openModal: false,
			bettingType: "Inplay",
			bettingOrderData: {
				showType: "Inplay",
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
				m_ball: "",
				t_ball: "",
				mType: ""
			},
			summaryGID: 0,
			summaryLID: 0,
			fullCourt1: {
				title: '让球',
				data: [
					{
						name: "",
						goalsScored: 0,
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
						goalsScored: 0,
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
					}
				]
			},
			fullCourt2: {
				title: '得分大小',
				data: [
					{
						name: "",
						goalsScored: 0,
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
						goalsScored: 0,
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
					}
				]
			},
			cornerList: [
				{
					goalsScored: 0,
					name: "",
					nums: [
						{
							lineType: 40,
							bettingType: "H",
							type: 2,
							colorChangeUp: false,
							colorChangeDOwn: false,
							text: "大",
							num: 0
						},
						{
							lineType: 41,
							bettingType: "H",
							type: 2,
							colorChangeUp: false,
							colorChangeDOwn: false,
							text: "单",
							num: 0
						},
						{
							lineType: 42,
							bettingType: "H",
							type: 2,
							colorChangeUp: false,
							colorChangeDOwn: false,
							text: "大",
							num: 0
						},
						{
							lineType: 43,
							bettingType: "H",
							type: 2,
							colorChangeUp: false,
							colorChangeDOwn: false,
							text: '单',
							num: 0
						}
					]
				},
				{
					goalsScored: 0,
					name: "",
					nums: [
						{
							lineType: 40,
							bettingType: "H",
							type: 2,
							colorChangeUp: false,
							colorChangeDOwn: false,
							text: "小",
							num: 0
						},
						{
							lineType: 41,
							bettingType: "H",
							type: 2,
							colorChangeUp: false,
							colorChangeDOwn: false,
							text: "双",
							num: 0
						},
						{
							lineType: 42,
							bettingType: "H",
							type: 2,
							colorChangeUp: false,
							colorChangeDOwn: false,
							text: "小",
							num: 0
						},
						{
							lineType: 43,
							bettingType: "H",
							type: 2,
							colorChangeUp: false,
							colorChangeDOwn: false,
							text: '双',
							num: 2
						}
					]
				},
			],
			cornerGID: 0,
			cornerLID: 0,
			cornerTitleList: [["", ""], ["角球", "大小"], ["角球", "单/双"], ["大小", "上半场"], ["角球", "上半场"]],
			changedFTDataList: [],
			tempFTDataList: []
		}
	},
	computed: {
	},
	sockets: {
		connect: function () {
			console.log('socket to notification channel connected')
		},
		receivedFTInPlayData: function (data: any) {
			this.loading = false
			console.log('receivedFTInPlayData', data);
			if (data == null || data.length == 0) return;
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

					// fullCourt1 Compare

					if ((this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][0].num - this.tempFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][0].num) > 0) {
						this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][0].colorChangeDown = true;
					} else if ((this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][0].num - this.tempFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][0].num) < 0) {
						this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][0].colorChangeUp = true;
					}

					if ((this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][0].num - this.tempFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][0].num) > 0) {
						this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][0].colorChangeDown = true;
					} else if ((this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][0].num - this.tempFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][0].num) < 0) {
						this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][0].colorChangeUp = true;
					}

					if ((this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][1].num - this.tempFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][1].num) > 0) {
						this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][1].colorChangeDown = true;
					} else if ((this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][1].num - this.tempFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][1].num) < 0) {
						this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][1].colorChangeUp = true;
					}

					if ((this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][1].num - this.tempFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][1].num) > 0) {
						this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][1].colorChangeDown = true;
					} else if ((this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][1].num - this.tempFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][1].num) < 0) {
						this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][1].colorChangeUp = true;
					}

					if ((this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][2].num - this.tempFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][2].num) > 0) {
						this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][2].colorChangeDown = true;
					} else if ((this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][2].num - this.tempFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][2].num) < 0) {
						this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][2].colorChangeUp = true;
					}

					if ((this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][2].num - this.tempFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][2].num) > 0) {
						this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][2].colorChangeDown = true;
					} else if ((this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][2].num - this.tempFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][2].num) < 0) {
						this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][2].colorChangeUp = true;
					}

					if ((this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][3].num - this.tempFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][3].num) > 0) {
						this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][3].colorChangeDown = true;
					} else if ((this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][3].num - this.tempFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][3].num) < 0) {
						this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][3].colorChangeUp = true;
					}

					if ((this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][3].num - this.tempFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][3].num) > 0) {
						this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][3].colorChangeDown = true;
					} else if ((this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][3].num - this.tempFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][3].num) < 0) {
						this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][3].colorChangeUp = true;
					}

					// fullCourt2 Compare

					if ((this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][0].num - this.tempFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][0].num) > 0) {
						this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][0].colorChangeDown = true;
					} else if ((this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][0].num - this.tempFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][0].num) < 0) {
						this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][0].colorChangeUp = true;
					}

					if ((this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][0].num - this.tempFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][0].num) > 0) {
						this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][0].colorChangeDown = true;
					} else if ((this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][0].num - this.tempFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][0].num) < 0) {
						this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][0].colorChangeUp = true;
					}

					if ((this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][1].num - this.tempFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][1].num) > 0) {
						this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][1].colorChangeDown = true;
					} else if ((this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][1].num - this.tempFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][1].num) < 0) {
						this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][1].colorChangeUp = true;
					}

					if ((this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][1].num - this.tempFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][1].num) > 0) {
						this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][1].colorChangeDown = true;
					} else if ((this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][1].num - this.tempFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][1].num) < 0) {
						this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][1].colorChangeUp = true;
					}

					if ((this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][2].num - this.tempFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][2].num) > 0) {
						this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][2].colorChangeDown = true;
					} else if ((this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][2].num - this.tempFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][2].num) < 0) {
						this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][2].colorChangeUp = true;
					}

					if ((this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][2].num - this.tempFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][2].num) > 0) {
						this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][2].colorChangeDown = true;
					} else if ((this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][2].num - this.tempFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][2].num) < 0) {
						this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][2].colorChangeUp = true;
					}

					if ((this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][3].num - this.tempFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][3].num) > 0) {
						this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][3].colorChangeDown = true;
					} else if ((this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][3].num - this.tempFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][3].num) < 0) {
						this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][3].colorChangeUp = true;
					}

					if ((this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][3].num - this.tempFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][3].num) > 0) {
						this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][3].colorChangeDown = true;
					} else if ((this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][3].num - this.tempFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][3].num) < 0) {
						this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][3].colorChangeUp = true;
					}

					// =============== cornerList Compare ====================== //

				}
			}

		},
		receivedFT_HDP_OU_Data: function (data: any) {
			this.summaryLoading = false;
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

							if ((this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][1].num - data["IOR_REH_HDP_1"]) > 0) {
								this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][1].colorChangeDown = true;
							} else if ((this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][1].num - data["IOR_REH_HDP_1"]) < 0) {
								this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][1].colorChangeUp = true;
							}

							if ((this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][1].num - data["IOR_REC_HDP_1"]) > 0) {
								this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][1].colorChangeDown = true;
							} else if ((this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][1].num - data["IOR_REC_HDP_1"]) < 0) {
								this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][1].colorChangeUp = true;
							}

							if ((this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][1].num - data["IOR_ROUC_HDP_1"]) > 0) {
								this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][1].colorChangeDown = true;
							} else if ((this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][1].num - data["IOR_ROUC_HDP_1"]) < 0) {
								this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][1].colorChangeUp = true;
							}

							if ((this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][1].num - data["IOR_ROUH_HDP_1"]) > 0) {
								this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][1].colorChangeDown = true;
							} else if ((this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][1].num - data["IOR_ROUH_HDP_1"]) < 0) {
								this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][1].colorChangeUp = true;
							}

							this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][0]["text"] = data["RATIO_RE_HDP_0"] != null && (Number(data["IOR_REH_HDP_0"])) > (Number(data["IOR_REC_HDP_0"])) ? "-" + data["RATIO_RE_HDP_0"] : "+" + data["RATIO_RE_HDP_0"];
							this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][0]["num"] = (Number(data["IOR_REH_HDP_0"])).toFixed(2)

							// this.changedFTDataList[i]["gameList"][j]["scoreList"][0]["nums"][0]["text"] = data["RATIO_RE_HDP_0"] != null && (Number(data["IOR_REH_HDP_0"])) > (Number(data["IOR_REC_HDP_0"])) ? "-" + data["RATIO_RE_HDP_0"] : "+" + data["RATIO_RE_HDP_0"];
							// this.changedFTDataList[i]["gameList"][j]["scoreList"][0]["nums"][0]["num"] = (Number(data["IOR_REH_HDP_0"])).toFixed(2);

							this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][1]["text"] = data["RATIO_RE_HDP_1"]
							this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][1]["num"] = (Number(data["IOR_REH_HDP_1"])).toFixed(2)
							this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][2]["text"] = data["RATIO_RE_HDP_2"]
							this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][2]["num"] = data["IOR_REH_HDP_2"] !== "" ? (Number(data["IOR_REH_HDP_2"])).toFixed(2) : 0;
							this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][3]["text"] = data["RATIO_RE_HDP_3"]
							this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["nums"][3]["num"] = data["IOR_REH_HDP_3"] !== "" ? (Number(data["IOR_REH_HDP_3"])).toFixed(2) : 0;

							this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][0]["text"] = data["RATIO_RE_HDP_0"] != null && (Number(data["IOR_REH_HDP_0"])) < (Number(data["IOR_REC_HDP_0"])) ? "-" + data["RATIO_RE_HDP_0"] : "+" + data["RATIO_RE_HDP_0"];
							this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][0]["num"] = (Number(data["IOR_REC_HDP_0"])).toFixed(2)

							// this.changedFTDataList[i]["gameList"][j]["scoreList"][1]["nums"][1]["text"] = data["RATIO_RE_HDP_0"] != null && (Number(data["IOR_REH_HDP_0"])) < (Number(data["IOR_REC_HDP_0"])) ? "-" + data["RATIO_RE_HDP_0"] : "+" + data["RATIO_RE_HDP_0"];
							// this.changedFTDataList[i]["gameList"][j]["scoreList"][1]["nums"][1]["num"] = (Number(data["IOR_REC_HDP_0"])).toFixed(2);

							this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][1]["text"] = data["RATIO_RE_HDP_1"]
							this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][1]["num"] = (Number(data["IOR_REC_HDP_1"])).toFixed(2)
							this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][2]["text"] = data["RATIO_RE_HDP_2"]
							this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][2]["num"] = data["IOR_REC_HDP_2"] !== "" ? (Number(data["IOR_REC_HDP_2"])).toFixed(2) : 0
							this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][3]["text"] = data["RATIO_RE_HDP_3"]
							this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["nums"][3]["num"] = data["IOR_REC_HDP_3"] !== "" ? (Number(data["IOR_REC_HDP_3"])).toFixed(2) : 0

							this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][0]["text"] = data["RATIO_ROUO_HDP_0"];
							this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][0]["num"] = (Number(data["IOR_ROUC_HDP_0"])).toFixed(2)


							// this.changedFTDataList[i]["gameList"][j]["scoreList"][0]["nums"][1]["text"] = data["RATIO_ROUO_HDP_0"];
							// this.changedFTDataList[i]["gameList"][j]["scoreList"][0]["nums"][1]["num"] = (Number(data["IOR_ROUC_HDP_0"])).toFixed(2);



							this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][1]["text"] = data["RATIO_ROUO_HDP_1"]
							this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][1]["num"] = (Number(data["IOR_ROUC_HDP_1"])).toFixed(2)
							this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][2]["text"] = data["RATIO_ROUO_HDP_2"]
							this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][2]["num"] = data["IOR_ROUC_HDP_2"] !== "" ? (Number(data["IOR_ROUC_HDP_2"])).toFixed(2) : 0
							this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][3]["text"] = data["RATIO_ROUO_HDP_3"]
							this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["nums"][3]["num"] = data["IOR_ROUC_HDP_3"] !== "" ? (Number(data["IOR_ROUC_HDP_3"])).toFixed(2) : 0

							this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][0]["text"] = data["RATIO_ROUU_HDP_0"];
							this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][0]["num"] = (Number(data["IOR_ROUH_HDP_0"])).toFixed(2)


							// this.changedFTDataList[i]["gameList"][j]["scoreList"][1]["nums"][1]["text"] = data["RATIO_ROUU_HDP_0"];
							// this.changedFTDataList[i]["gameList"][j]["scoreList"][1]["nums"][1]["num"] = (Number(data["IOR_ROUH_HDP_0"])).toFixed(2);


							this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][1]["text"] = data["RATIO_ROUU_HDP_1"]
							this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][1]["num"] = (Number(data["IOR_ROUH_HDP_1"])).toFixed(2)
							this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][2]["text"] = data["RATIO_ROUU_HDP_2"]
							this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][2]["num"] = data["IOR_ROUH_HDP_2"] !== "" ? (Number(data["IOR_ROUH_HDP_2"])).toFixed(2) : 0;
							this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][3]["text"] = data["RATIO_ROUU_HDP_3"]
							this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["nums"][3]["num"] = data["IOR_ROUH_HDP_3"] !== "" ? (Number(data["IOR_ROUH_HDP_3"])).toFixed(2) : 0;



							this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["name"] = this.changedFTDataList[i]["gameList"][j]["scoreList"][0]["name"];
							this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][0]["goalsScored"] = this.changedFTDataList[i]["gameList"][j]["scoreList"][0]["goalsScored"];
							this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["name"] = this.changedFTDataList[i]["gameList"][j]["scoreList"][1]["name"];
							this.changedFTDataList[i]["gameList"][j]["fullCourt1"]["data"][1]["goalsScored"] = this.changedFTDataList[i]["gameList"][j]["scoreList"][1]["goalsScored"];

							this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["name"] = this.changedFTDataList[i]["gameList"][j]["scoreList"][0]["name"];
							this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][0]["goalsScored"] = this.changedFTDataList[i]["gameList"][j]["scoreList"][0]["goalsScored"];
							this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["name"] = this.changedFTDataList[i]["gameList"][j]["scoreList"][1]["name"];
							this.changedFTDataList[i]["gameList"][j]["fullCourt2"]["data"][1]["goalsScored"] = this.changedFTDataList[i]["gameList"][j]["scoreList"][1]["goalsScored"];

							console.log(this.changedFTDataList[i]["gameList"][j]["scoreList"][1]["name"]);

							this.fullCourt1 = this.changedFTDataList[i]["gameList"][j]["fullCourt1"];
							this.fullCourt2 = this.changedFTDataList[i]["gameList"][j]["fullCourt2"];

						}
					}
				}
			}
		},
		receivedFT_CORNER_Data: function (data: any) {
			this.loading = false;

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
							this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][3].colorChangeUp = false;
							this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][3].colorChangeDown = false;
							this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][0].colorChangeUp = false;
							this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][0].colorChangeDown = false;
							this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][1].colorChangeUp = false;
							this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][1].colorChangeDown = false;
							this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][2].colorChangeUp = false;
							this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][2].colorChangeDown = false;
							this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][3].colorChangeUp = false;
							this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][3].colorChangeDown = false;

							if ((this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][0].num) - data["IOR_ROUC_CN"] > 0) {
								this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][0].colorChangeUp = true;
							} else if ((this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][0].num - data["IOR_ROUC_CN"]) < 0) {
								this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][0].colorChangeDown = true;
							}
							if ((this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][1].num - data["IOR_REOE_CN"]) > 0) {
								this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][1].colorChangeUp = true;
							} else if ((this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][1].num - data["IOR_REOE_CN"]) < 0) {
								this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][1].colorChangeDown = true;
							}
							if ((data["IOR_HROUC_CN"] - this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][2].num) > 0) {
								this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][2].colorChangeDown = true;
							} else if ((data["IOR_HROUC_CN"] - this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][2].num) < 0) {
								this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][2].colorChangeUp = true;
							}
							if ((data["IOR_HREOE_CN"] - this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][3].num) > 0) {
								this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][3].colorChangeDown = true;
							} else if ((data["IOR_HREOE_CN"] - this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][3].num) < 0) {
								this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][3].colorChangeUp = true;
							}

							if ((data["IOR_ROUH_CN"] - this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][0].num) > 0) {
								this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][0].colorChangeDown = true;
							} else if ((data["IOR_ROUH_CN"] - this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][0].num) < 0) {
								this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][0].colorChangeUp = true;
							}
							if ((data["IOR_HROUH_CN"] - this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][1].num) > 0) {
								this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][1].colorChangeDown = true;
							} else if ((data["IOR_HROUH_CN"] - this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][1].num) < 0) {
								this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][1].colorChangeUp = true;
							}
							if ((data["IOR_HROUH_CN"] - this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][2].num) > 0) {
								this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][2].colorChangeDown = true;
							} else if ((data["IOR_HROUH_CN"] - this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][2].num) < 0) {
								this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][2].colorChangeUp = true;
							}
							if ((data["IOR_HREOO_CN"] - this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][3].num) > 0) {
								this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][3].colorChangeDown = true;
							} else if ((data["IOR_HREOO_CN"] - this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][3].num) < 0) {
								this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][3].colorChangeUp = true;
							}

							this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][0]["type"] = data["IOR_ROUC_CN"] == 0 ? 2 : 1
							this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][0]["text"] = "大" + data["RATIO_ROUO_CN"].split("O")[1]
							this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][0]["num"] = data["IOR_ROUC_CN"] == 0 ? 0 : (Number(data["IOR_ROUC_CN"])).toFixed(2)
							this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][1]["type"] = data["IOR_REOE_CN"] == 0 ? 2 : 1
							this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][1]["num"] = data["IOR_REOE_CN"] == 0 ? 0 : (Number(data['IOR_REOE_CN'])).toFixed(2);
							this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][2]["type"] = data["IOR_HROUC_CN"] == 0 ? 2 : 1
							this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][2]["text"] = "大" + data["RATIO_HROUO_CN"].split("O")[1];
							this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][2]["num"] = data["IOR_HROUC_CN"] == 0 ? 0 : (Number(data["IOR_HROUC_CN"])).toFixed(2);
							this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][3]["type"] = data["IOR_HREOE_CN"] == 0 ? 2 : 1
							this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["nums"][3]["num"] = data["IOR_HREOE_CN"] == 0 ? 0 : Number(data['IOR_HREOE_CN']).toFixed(2)
							this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][0]["type"] = data["IOR_ROUH_CN"] == 0 ? 2 : 1
							this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][0]["text"] = "小" + data["RATIO_ROUU_CN"].split("U")[1]
							this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][0]["num"] = data["IOR_ROUH_CN"] == 0 ? 0 : (Number(data["IOR_ROUH_CN"])).toFixed(2)
							this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][1]["type"] = data["IOR_REOO_CN"] == 0 ? 2 : 1
							this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][1]["num"] = data["IOR_REOO_CN"] == 0 ? 0 : (Number(data['IOR_REOO_CN'])).toFixed(2)
							this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][2]["type"] = data["IOR_HROUH_CN"] == 0 ? 2 : 1
							this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][2]["text"] = "小" + data["RATIO_HROUU_CN"].split("U")[1]
							this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][2]["num"] = data["IOR_HROUH_CN"] == 0 ? 0 : Number(data["IOR_HROUH_CN"]).toFixed(2)
							this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][3]["type"] = data["IOR_HREOO_CN"] == 0 ? 2 : 1
							this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["nums"][3]["num"] = data["IOR_HREOO_CN"] == 0 ? 0 : Number(data['IOR_HREOO_CN']).toFixed(2)

							console.log(this.changedFTDataList[i]["gameList"][j]["scoreList"][0]["name"]);

							this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["name"] = this.changedFTDataList[i]["gameList"][j]["scoreList"][0]["name"];
							this.changedFTDataList[i]["gameList"][j]["cornerList"][0]["goalsScored"] = this.changedFTDataList[i]["gameList"][j]["scoreList"][0]["goalsScored"];
							this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["name"] = this.changedFTDataList[i]["gameList"][j]["scoreList"][1]["name"];
							this.changedFTDataList[i]["gameList"][j]["cornerList"][1]["goalsScored"] = this.changedFTDataList[i]["gameList"][j]["scoreList"][1]["goalsScored"];

							this.cornerList = this.changedFTDataList[i]["gameList"][j]["cornerList"];

						}
					}
				}
			}
		}
	},
	async created() {
		this.$socket.emit("sendFTInPlayMessage");
	},
	unmounted() {
		console.log("unmounted");
		this.$socket.emit("stopFT_INPLAY")
	},
	methods: {
		showMore: function (lid, id) {
			this.changedFTDataList.forEach(element => {
				if (element["lid"] === lid) {
					element["gameList"].forEach(item => {
						if (item["id"] === id) {
							item["moreShow"] = !item["moreShow"];
						}
					})
				}
			});
		},
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
			// this.summaryLoading = true;
			console.log(summaryData);
			this.summaryGID = id;
			this.summaryLID = lid;
			// this.$socket.emit('sendHDP_OUData', { ecid, id });
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
			// this.$socket.emit('sendCornerData', { ecid, id });
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
				data["name"] = ftData[0]["M_League"].length > 25 ? ftData[0]["M_League"].substring(0, 23) + "..." : ftData[0]["M_League"];
				if (this.tempFTDataList.length > 0) {
					this.tempFTDataList.forEach(item => {
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

					let handicap_sign_m = item["ShowTypeRB"] == "H" ? "-" : "+";
					let half_handicap_sign_m = item["ShowTypeHRB"] == "H" ? "-" : "+";
					let handicap_sign_t = item["ShowTypeRB"] == "H" ? "+" : "-";
					let half_handicap_sign_t = item["ShowTypeHRB"] == "H" ? "+" : "-";

					if (item["HDP_OU"] === 1) {

						this.fullCourt1 = {
							title: '让球',
							data: [
								{
									name: item["MB_Team"],
									goalsScored: item["MB_Ball"],
									nums: [
										{
											lineType: 9,
											mType: "RRH",
											bettingType: "H",
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: item["M_LetB_RB"] != "" && item["M_LetB_RB"] != undefined ? handicap_sign_m + item["M_LetB_RB"] : "",
											num: item["MB_LetB_Rate_RB"] == 0 || item["MB_LetB_Rate_RB"] == undefined ? 0 : (Number(item["MB_LetB_Rate_RB"])).toFixed(2),
										},
										{
											lineType: 50,
											mType: "RRH",
											bettingType: "H",
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: item["M_LetB_RB_1"] != "" && item["M_LetB_RB_1"] != undefined ? handicap_sign_m + item["M_LetB_RB_1"] : "",
											num: item["MB_LetB_Rate_RB_1"] == 0 ? 0 : (Number(item["MB_LetB_Rate_RB_1"])).toFixed(2),
										},
										{
											lineType: 51,
											mType: "RRH",
											bettingType: "H",
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: item["M_LetB_RB_2"] !== "" ? handicap_sign_m + item["M_LetB_RB_2"] : "",
											num: item["MB_LetB_Rate_RB_2"] == 0 ? 0 : (Number(item["MB_LetB_Rate_RB_2"])).toFixed(2),
										},
										{
											lineType: 52,
											mType: "RRH",
											bettingType: "H",
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: item["M_LetB_RB_3"] !== "" ? handicap_sign_m + item["M_LetB_RB_3"] : "",
											num: item["MB_LetB_Rate_RB_3"] == 0 ? 0 : (Number(item["MB_LetB_Rate_RB_3"])).toFixed(2),
										},
									]
								},
								{
									name: item["TG_Team"],
									goalsScored: item["TG_Ball"],
									nums: [
										{
											lineType: 9,
											mType: "RRC",
											bettingType: "H",
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: item["M_LetB_RB"] !== "" ? handicap_sign_t + item["M_LetB_RB"] : "",
											num: item["TG_LetB_Rate_RB"] == 0 ? 0 : (Number(item["TG_LetB_Rate_RB"])).toFixed(2),
										},
										{
											lineType: 50,
											mType: "RRC",
											bettingType: "H",
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: item["M_LetB_RB_1"] !== "" ? handicap_sign_t + item["M_LetB_RB_1"] : "",
											num: item["TG_LetB_Rate_RB_1"] == 0 ? 0 : (Number(item["TG_LetB_Rate_RB_1"])).toFixed(2),
										},
										{
											lineType: 51,
											mType: "RRC",
											bettingType: "H",
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: item["M_LetB_RB_2"] !== "" ? handicap_sign_t + item["M_LetB_RB_2"] : "",
											num: item["TG_LetB_Rate_RB_2"] == 0 ? 0 : (Number(item["TG_LetB_Rate_RB_2"])).toFixed(2),
										},
										{
											lineType: 52,
											mType: "RRC",
											bettingType: "H",
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: item["M_LetB_RB_3"] !== "" ? handicap_sign_t + item["M_LetB_RB_3"] : "",
											num: item["TG_LetB_Rate_RB_3"] == 0 ? 0 : (Number(item["TG_LetB_Rate_RB_3"])).toFixed(2),
										},
									]
								}
							]
						}

						this.fullCourt2 = {
							title: '得分大小',
							data: [
								{
									name: item["MB_Team"],
									goalsScored: item["MB_Ball"],
									nums: [
										{
											lineType: 10,
											mType: "ROUH",
											bettingType: "H",
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: item["MB_Dime_RB"] == "" || item["MB_Dime_RB"] == undefined ? "" : "大 " + item["MB_Dime_RB"].split("O")[1],
											num: item["MB_Dime_Rate_RB"] == 0 ? 0 : (Number(item['MB_Dime_Rate_RB'])).toFixed(2)
										},
										{
											lineType: 53,
											mType: "ROUH",
											bettingType: "H",
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: item["MB_Dime_RB_1"] == "" || item["MB_Dime_RB_1"] == undefined ? "" : "大 " + item["MB_Dime_RB_1"].split("O")[1],
											num: item["MB_Dime_Rate_RB_1"] == 0 ? 0 : (Number(item['MB_Dime_Rate_RB_1'])).toFixed(2)
										},
										{
											lineType: 54,
											mType: "ROUH",
											bettingType: "H",
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: item["MB_Dime_RB_2"] == "" || item["MB_Dime_RB_2"] == undefined ? "" : "大 " + item["MB_Dime_RB_2"].split("O")[1],
											num: item["MB_Dime_Rate_RB_2"] == 0 ? 0 : (Number(item['MB_Dime_Rate_RB_2'])).toFixed(2)
										},
										{
											lineType: 55,
											mType: "ROUH",
											bettingType: "H",
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: item["MB_Dime_RB_3"] == "" || item["MB_Dime_RB_3"] == undefined ? "" : "大 " + item["MB_Dime_RB_3"].split("O")[1],
											num: item["MB_Dime_Rate_RB_3"] == 0 ? 0 : (Number(item['MB_Dime_Rate_RB_3'])).toFixed(2)
										},
									]
								},
								{
									name: item["TG_Team"],
									goalsScored: item["TG_Ball"],
									nums: [
										{
											lineType: 10,
											mType: "ROUC",
											bettingType: "H",
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: item["TG_Dime_RB"] == "" || item["TG_Dime_RB"] == undefined ? "" : "小 " + item["TG_Dime_RB"].split("U")[1],
											num: item["TG_Dime_Rate_RB"] == 0 ? 0 : (Number(item['TG_Dime_Rate_RB'])).toFixed(2)
										},
										{
											lineType: 53,
											mType: "ROUC",
											bettingType: "H",
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: item["TG_Dime_RB_1"] == "" || item["TG_Dime_RB_1"] == undefined ? "" : "小 " + item["TG_Dime_RB_1"].split("U")[1],
											num: item["TG_Dime_Rate_RB_1"] == 0 ? 0 : (Number(item['TG_Dime_Rate_RB_1'])).toFixed(2)
										},
										{
											lineType: 54,
											mType: "ROUC",
											bettingType: "H",
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: item["TG_Dime_RB_2"] == "" || item["TG_Dime_RB_2"] == undefined ? "" : "小 " + item["TG_Dime_RB_2"].split("U")[1],
											num: item["TG_Dime_Rate_RB_2"] == 0 ? 0 : (Number(item['TG_Dime_Rate_RB_2'])).toFixed(2)
										},
										{
											lineType: 55,
											mType: "ROUC",
											bettingType: "H",
											colorChangeUp: false,
											colorChangeDOwn: false,
											text: item["TG_Dime_RB_3"] == "" || item["TG_Dime_RB_3"] == undefined ? "" : "小 " + item["TG_Dime_RB_3"].split("U")[1],
											num: item["TG_Dime_Rate_RB_3"] == 0 ? 0 : (Number(item['TG_Dime_Rate_RB_3'])).toFixed(2)
										},
									]
								}
							]
						}
					}

					if (item["CORNER"] === 1) {

						this.cornerList = [
							{
								goalsScored: item["MB_Ball_CN"],
								name: item["MB_Team"],
								nums: [
									{
										lineType: 10,
										mType: "ROUH",
										bettingType: "H",
										type: item["MB_Dime_Rate_RB_CN"] == 0 ? 2 : 1,
										colorChangeUp: false,
										colorChangeDOwn: false,
										text: item["MB_Dime_RB_CN"] == "" || item["MB_Dime_RB_CN"] == undefined ? "" : "大 " + item["MB_Dime_RB_CN"].split("O")[1],
										num: item["MB_Dime_Rate_RB_CN"] == 0 || item["MB_Dime_Rate_RB_CN"] == undefined ? 0 : (Number(item['MB_Dime_Rate_RB_CN'])).toFixed(2)
									},
									{
										lineType: 5,
										r_type: "ODD",
										bettingType: "H",
										type: item["S_Single_Rate_CN"] == 0 || item["S_Single_Rate_CN"] == undefined ? 2 : 1,
										colorChangeUp: false,
										colorChangeDOwn: false,
										text: "单",
										num: item["S_Single_Rate_CN"] == 0 || item["S_Single_Rate_CN"] == undefined ? 0 : (Number(item['S_Single_Rate_CN'])).toFixed(2)
									},
									{
										lineType: 20,
										mType: "VROUH",
										bettingType: "H",
										type: item["MB_Dime_Rate_RB_H_CN"] == 0 || item["MB_Dime_Rate_RB_H_CN"] == undefined ? 2 : 1,
										colorChangeUp: false,
										colorChangeDOwn: false,
										text: item["MB_Dime_RB_H_CN"] == "" || item["MB_Dime_RB_H_CN"] == undefined ? "" : "大 " + item["MB_Dime_RB_H_CN"].split("O")[1],
										num: item["MB_Dime_Rate_RB_H_CN"] == 0 || item["MB_Dime_Rate_RB_H_CN"] == undefined ? 0 : (Number(item['MB_Dime_Rate_RB_H_CN'])).toFixed(2)
									},
									{
										lineType: 15,
										r_type: "ODD",
										bettingType: "H",
										type: item["S_Single_Rate_H_CN"] == 0 || item["S_Single_Rate_H_CN"] == undefined ? 2 : 1,
										colorChangeUp: false,
										colorChangeDOwn: false,
										text: '单',
										num: item["S_Single_Rate_H_CN"] == 0 || item["S_Single_Rate_H_CN"] == undefined ? 0 : (Number(item['S_Single_Rate_H_CN'])).toFixed(2)
									}
								]
							},
							{
								goalsScored: item["TG_Ball_CN"],
								name: item["TG_Team"],
								nums: [
									{
										lineType: 10,
										mType: "ROUC",
										bettingType: "H",
										type: item["TG_Dime_Rate_RB_CN"] == 0 || item["TG_Dime_Rate_RB_CN"] == undefined ? 2 : 1,
										colorChangeUp: false,
										colorChangeDOwn: false,
										text: item["TG_Dime_RB_CN"] == "" || item["TG_Dime_RB_CN"] == undefined ? "" : "小 " + item["TG_Dime_RB_CN"].split("U")[1],
										num: item["TG_Dime_Rate_RB_CN"] == 0 || item["TG_Dime_Rate_RB_CN"] == undefined ? 0 : (Number(item['TG_Dime_Rate_RB_CN'])).toFixed(2)
									},
									{
										lineType: 5,
										r_type: "EVEN",
										bettingType: "H",
										type: item["S_Double_Rate_CN"] == 0 || item["S_Double_Rate_CN"] == undefined ? 2 : 1,
										colorChangeUp: false,
										colorChangeDOwn: false,
										text: "双",
										num: item["S_Double_Rate_CN"] == 0 || item["S_Double_Rate_CN"] == undefined ? 0 : (Number(item['S_Double_Rate_CN'])).toFixed(2)
									},
									{
										lineType: 20,
										bettingType: "H",
										mType: "VROUC",
										type: item["TG_Dime_Rate_RB_H_CN"] == 0 || item["TG_Dime_Rate_RB_H_CN"] == undefined ? 2 : 1,
										colorChangeUp: false,
										colorChangeDOwn: false,
										text: item["TG_Dime_RB_H_CN"] == "" || item["TG_Dime_RB_H_CN"] == undefined ? "" : "小 " + item["TG_Dime_RB_H_CN"].split("U")[1],
										num: item["TG_Dime_Rate_RB_H_CN"] == 0 || item["TG_Dime_Rate_RB_H_CN"] == undefined ? 0 : (Number(item['TG_Dime_Rate_RB_H_CN'])).toFixed(2)
									},
									{
										lineType: 15,
										r_type: "EVEN",
										bettingType: "H",
										type: item["S_Double_Rate_H_CN"] == 0 || item["S_Double_Rate_H_CN"] == undefined ? 2 : 1,
										colorChangeUp: false,
										colorChangeDOwn: false,
										text: '双',
										num: item["S_Double_Rate_H_CN"] == 0 || item["S_Double_Rate_H_CN"] == undefined ? 0 : (Number(item['S_Double_Rate_H_CN'])).toFixed(2)
									}
								]
							},
						]

					}

					let gameData = {
						id: item["MID"],
						cn_id: item["CN_MID"],
						ecid: item["ECID"],
						m_date: item["M_Date"],
						m_start: item["M_Start"],
						moreShow: false,
						hdpBtnShow: item["HDP_OU"] == 1 ? true : false,
						cornerBtnShow: item["CORNER"] == 1 ? true : false,
						titleList: [item["RETIME_SET"], '让球', '得分大小', '独赢'],
						halfTitleList: [item["RETIME_SET"], '半场让球', '半场大小', '半场独赢'],
						scoreList: [
							{
								goalsScored: item["MB_Ball"],
								name: item["MB_Team"],
								nums: [
									{
										lineType: 9,
										mType: "RRH",
										bettingType: "H",
										type: item["MB_LetB_Rate_RB"] == 0 ? 2 : 1,
										colorChangeUp: false,
										colorChangeDOwn: false,
										text: item["M_LetB_RB"] !== "" ? handicap_sign_m + item["M_LetB_RB"] : "",
										num: item["MB_LetB_Rate_RB"] == 0 ? 0 : (Number(item["MB_LetB_Rate_RB"])).toFixed(2)
									},
									{
										lineType: 10,
										mType: "ROUH",
										bettingType: "H",
										type: item["MB_Dime_Rate_RB"] == 0 ? 2 : 1,
										colorChangeUp: false,
										colorChangeDOwn: false,
										text: item["MB_Dime_RB"] == "" ? "" : "大 " + item["MB_Dime_RB"].split("O")[1],
										num: item["MB_Dime_Rate_RB"] == 0 ? 0 : (Number(item['MB_Dime_Rate_RB'])).toFixed(2)
									},
									{
										lineType: 21,
										mType: "RMH",
										bettingType: "H",
										type: item["MB_Win_Rate_RB"] == 0 ? 2 : 1,
										colorChangeUp: false,
										colorChangeDOwn: false,
										text: item["MB_Win_RB"],
										num: (Number(item["MB_Win_Rate_RB"])).toFixed(2)
									},
								]
							},
							{
								goalsScored: item["TG_Ball"],
								name: item["TG_Team"],
								nums: [
									{
										lineType: 9,
										mType: "RRC",
										bettingType: "H",
										type: item["TG_LetB_Rate_RB"] == 0 ? 2 : 1,
										colorChangeUp: false,
										colorChangeDOwn: false,
										text: item["M_LetB_RB"] !== "" ? handicap_sign_t + item["M_LetB_RB"] : "",
										num: item["TG_LetB_Rate_RB"] == 0 ? 0 : (Number(item["TG_LetB_Rate_RB"])).toFixed(2)
									},
									{
										lineType: 10,
										mType: "ROUC",
										bettingType: "H",
										type: item["TG_Dime_Rate_RB"] == 0 ? 2 : 1,
										colorChangeUp: false,
										colorChangeDOwn: false,
										text: item["TG_Dime_RB"] == "" ? "" : "小 " + item["TG_Dime_RB"].split("U")[1],
										num: item["TG_Dime_Rate_RB"] == 0 ? 0 : (Number(item['TG_Dime_Rate_RB'])).toFixed(2)
									},
									{
										lineType: 21,
										mType: "RMC",
										bettingType: "H",
										type: item["TG_Win_Rate_RB"] == 0 ? 2 : 1,
										colorChangeUp: false,
										colorChangeDOwn: false,
										text: item["TG_Win_RB"],
										num: Number(item["TG_Win_Rate_RB"]).toFixed(2)
									},
								]
							},
							{
								Collection: false,
								nums: [
									{},
									{},
									{
										lineType: 21,
										mType: "RMN",
										bettingType: "N",
										type: item["M_Flat_Rate_RB"] == 0 ? 2 : 1,
										colorChangeUp: false,
										colorChangeDOwn: false,
										text: '和',
										num: Number(item['M_Flat_Rate_RB']).toFixed(2)
									},
								]
							}
						],
						halfScoreList: [
							{
								goalsScored: item["MB_Ball"],
								name: item["MB_Team"],
								nums: [
									{
										lineType: 19,
										mType: "VRRH",
										bettingType: "H",
										type: item["MB_LetB_Rate_RB_H"] == 0 ? 2 : 1,
										colorChangeUp: false,
										colorChangeDOwn: false,
										text: item["M_LetB_RB_H"] !== "" ? half_handicap_sign_m + item["M_LetB_RB_H"] : "",
										num: item["MB_LetB_Rate_RB_H"] == 0 ? 0 : (Number(item["MB_LetB_Rate_RB_H"])).toFixed(2)
									},
									{
										lineType: 20,
										mType: "VROUH",
										bettingType: "H",
										type: item["MB_Dime_Rate_RB_H"] == 0 ? 2 : 1,
										colorChangeUp: false,
										colorChangeDOwn: false,
										text: item["MB_Dime_RB_H"] == "" ? "" : "大 " + item["MB_Dime_RB_H"].split("O")[1],
										num: item["MB_Dime_Rate_RB_H"] == 0 ? 0 : (Number(item['MB_Dime_Rate_RB_H'])).toFixed(2)
									},
									{
										lineType: 31,
										mType: "VRMH",
										bettingType: "H",
										type: item["MB_Win_Rate_RB_H"] == 0 ? 2 : 1,
										colorChangeUp: false,
										colorChangeDOwn: false,
										text: item["MB_Win_RB_H"],
										num: (Number(item["MB_Win_Rate_RB_H"])).toFixed(2)
									},
								]
							},
							{
								goalsScored: item["TG_Ball"],
								name: item["TG_Team"],
								nums: [
									{
										lineType: 19,
										mType: "VRRC",
										bettingType: "H",
										type: item["TG_LetB_Rate_RB_H"] == 0 ? 2 : 1,
										colorChangeUp: false,
										colorChangeDOwn: false,
										text: item["M_LetB_RB_H"] !== "" ? half_handicap_sign_t + item["M_LetB_RB_H"] : "",
										num: item["TG_LetB_Rate_RB_H"] == 0 ? 0 : (Number(item["TG_LetB_Rate_RB_H"])).toFixed(2)
									},
									{
										lineType: 20,
										mType: "VROUC",
										bettingType: "H",
										type: item["TG_Dime_Rate_RB_H"] == 0 ? 2 : 1,
										colorChangeUp: false,
										colorChangeDOwn: false,
										text: item["TG_Dime_RB_H"] == "" ? "" : "小 " + item["TG_Dime_RB_H"].split("U")[1],
										num: item["TG_Dime_Rate_RB_H"] == 0 ? 0 : (Number(item['TG_Dime_Rate_RB_H'])).toFixed(2)
									},
									{
										lineType: 31,
										mType: "VRMC",
										bettingType: "H",
										type: item["TG_Win_Rate_RB_H"] == 0 ? 2 : 1,
										colorChangeUp: false,
										colorChangeDOwn: false,
										text: item["TG_Win_RB_H"],
										num: Number(item["TG_Win_Rate_RB_H"]).toFixed(2)
									},
								]
							},
							{
								Collection: false,
								nums: [
									{},
									{},
									{
										lineType: 31,
										mType: "VRMN",
										bettingType: "N",
										type: item["M_Flat_Rate_RB_H"] == 0 ? 2 : 1,
										colorChangeUp: false,
										colorChangeDOwn: false,
										text: '和',
										num: Number(item['M_Flat_Rate_RB_H']).toFixed(2)
									},
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
						cornerList: this.cornerList,
					}

					gameList.push(gameData);
				})

				data["gameList"] = gameList;

				console.log(gameList);

				this.changedFTDataList.push(data);
			});
		},
		handleModal: function (leagueData, gameData, dataList, rateData, scoreIndex) {
			console.log(rateData);
			this.bettingOrderData["mID"] = gameData["id"];
			this.bettingOrderData["m_date"] = gameData["m_date"];
			this.bettingOrderData["m_start"] = gameData["m_start"];
			this.bettingOrderData["gameType"] = "FT";
			this.bettingOrderData["m_ball"] = gameData.scoreList[0].goalsScored;
			this.bettingOrderData["t_ball"] = gameData.scoreList[1].goalsScored;
			this.bettingOrderData["mbTeam"] = gameData.scoreList[0].name;
			this.bettingOrderData["tgTeam"] = gameData.scoreList[1].name;
			this.bettingOrderData["rate"] = rateData.num;
			this.bettingOrderData["lineType"] = rateData.lineType;
			this.bettingOrderData["mType"] = rateData.mType;
			this.bettingOrderData['selectedType'] = rateData.bettingType;
			this.bettingOrderData["league"] = leagueData.name;
			this.bettingOrderData["title"] = gameData.titleList[scoreIndex + 1];
			this.bettingOrderData["selectedTeam"] = dataList.name;
			this.bettingOrderData["show_type"] = gameData.ShowTypeRB;
			this.bettingOrderData["text"] = rateData.text
			if (this.bettingOrderData["rate"] == 0 || this.bettingOrderData["rate"] == null) this.openModal = false;
			else this.openModal = true;
		},
		handleModal1: function (leagueData, gameData, dataList, rateData, scoreIndex) {
			console.log(rateData);
			this.bettingOrderData["mID"] = gameData["id"];
			this.bettingOrderData["m_date"] = gameData["m_date"];
			this.bettingOrderData["m_start"] = gameData["m_start"];
			this.bettingOrderData["gameType"] = "FT";
			this.bettingOrderData["m_ball"] = gameData.scoreList[0].goalsScored;
			this.bettingOrderData["t_ball"] = gameData.scoreList[1].goalsScored;
			this.bettingOrderData["mbTeam"] = gameData.scoreList[0].name;
			this.bettingOrderData["tgTeam"] = gameData.scoreList[1].name;
			this.bettingOrderData["rate"] = rateData.num;
			this.bettingOrderData["lineType"] = rateData.lineType;
			this.bettingOrderData["mType"] = rateData.mType;
			this.bettingOrderData['selectedType'] = rateData.bettingType;
			this.bettingOrderData["league"] = leagueData.name;
			this.bettingOrderData["show_type"] = gameData.ShowTypeHRB;
			this.bettingOrderData["title"] = gameData.halfTitleList[scoreIndex + 1];
			this.bettingOrderData["selectedTeam"] = dataList.name;
			this.bettingOrderData["text"] = rateData.text
			if (this.bettingOrderData["rate"] == 0 || this.bettingOrderData["rate"] == null) this.openModal = false;
			else this.openModal = true;
		},
		handleCornerModal: function (leagueData, gameData, dataList, rateData, scoreIndex) {
			this.bettingOrderData["mID"] = gameData["cn_id"];
			this.bettingOrderData["gameType"] = "FT";
			this.bettingOrderData["m_ball"] = gameData.scoreList[0].goalsScored;
			this.bettingOrderData["t_ball"] = gameData.scoreList[1].goalsScored;
			this.bettingOrderData["mbTeam"] = gameData.scoreList[0].name;
			this.bettingOrderData["tgTeam"] = gameData.scoreList[1].name;
			this.bettingOrderData["rate"] = rateData.num;
			this.bettingOrderData["lineType"] = rateData.lineType;
			this.bettingOrderData['selectedType'] = rateData.bettingType;
			this.bettingOrderData['r_type'] = rateData.r_type;
			this.bettingOrderData["league"] = leagueData.name;
			this.bettingOrderData["text"] = rateData.text
			this.bettingOrderData["show_type"] = gameData.ShowTypeRB;
			this.bettingOrderData["title"] = this.cornerTitleList[scoreIndex + 1][0] + this.cornerTitleList[scoreIndex + 1][1];
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
			this.bettingOrderData["show_type"] = gameData.ShowTypeRB;
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
			this.bettingOrderData["show_type"] = gameData.ShowTypeRB;
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

.summary-loading-position {
	margin-top: 20px;
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
