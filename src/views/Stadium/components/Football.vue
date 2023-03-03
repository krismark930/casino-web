<script lang="ts">
import { defineComponent } from 'vue';
import axios from "axios";
import config from "@/config";
import { ref } from 'vue';
import OrderModal from "@/views/Stadium/components/Ordermodal.vue"
import { number } from '@intlify/core-base';
export default defineComponent({
	data() {
		return {
			type: "FT",
			title: "",
			rate: 0,
			m_team: "",
			t_team: "",
			select_team: "",
			league: "",
      		mid: 0,
			line: 0,
			g_type: '',
			openModal: false,
			sportData: [],
			tableList: [
				{
					name: '国际友谊联赛',
					icon: new URL("@/assets/images/stadiums/title-icon.png", import.meta.url).href,
					gameList: [
						{
							titletext: [{
								text1: '半场'
							},
							{
								text1: '让球'
							},
							{
								text1: '得分大小'
							},
							{
								text1: '独赢'
							},
							{
								text1: '下一个进球'
							}
							],
							scoreList: [{
								goalsScored: 1,
								name: '日本',

								nums: [{
									type: 'H',
									text: '',
									num: '1.00'
								},
								{
									type: 'H',
									text: '大1/1.5',
									num: '1.95'
								},
								{
									type: 'H',
									text: '',
									num: '5.9'
								},
								{
									type: 'H',
									text: '第一个',
									num: '4.35'
								}
								]
							},
							{
								goalsScored: 1,
								name: '加拿大',
								nums: [{
									type: 'C',
									text: '0.5',
									num: '1.86'
								},
								{
									type: 'C',
									text: '小1/1.5',
									num: '1.95'
								},
								{
									type: 'C',
									text: '',
									num: '1.92'
								},
								{
									type: 'C',
									text: '第一个',
									num: '1.64'
								}
								]
							},
							{
								Collection: false,
								nums: [{},
								{},
								{
									type: 'N',
									text: '和',
									num: '2.47'
								},
								{
									type: 'N',
									text: '无',
									num: '3.35'
								}
								]
							}
							],
							tepe: [
								{
									name: '让球&大/小',
									type: 'H'
								},
								{
									name: '角球',
									type: 'H'
								}
							]
						},
						{
							titletext: [{
								text1: '半场'
							},
							{
								text1: '让球'
							},
							{
								text1: '得分大小'
							},
							{
								text1: '独赢'
							},
							{
								text1: '下一个进球'
							}
							],
							scoreList: [
								{
									goalsScored: 1,
									name: '瓜达卢佩',

									nums: [{
										type: "H",
										text: '',
										num: '1.96'
									},
									{
										type: "H",
										text: '大1/1.5',
										num: '1.95'
									},
									{
										type: "H",
										text: '',
										num: '5.9'
									},
									{
										type: "H",
										text: '第一个',
										num: '4.35'
									}
									],

								},
								{
									goalsScored: 1,
									name: '朋塔雷纳斯',
									nums: [{
										type: '',
										text: '0.5',
										num: '1.86'
									},
									{
										type: '',
										text: '小1/1.5',
										num: '1.95'
									},
									{
										type: '',
										text: '',
										num: '1.92'
									},
									{
										type: '',
										text: '第一个',
										num: '1.84'
									}
									],

								},
								{
									Collection: true,
									nums: [{},
									{},
									{
										type: '',
										text: '和',
										num: '2.47'
									},
									{
										type: '',
										text: '无',
										num: '3.35'
									}
									]
								}
							],
							tepe: [
								{
									name: '让球&大/小',
									type: 2
								}
							]
						}],
					fullCourt1: {
						title: '让球',
						data: [
							{
								name: '瓜达卢佩',
								goalsScored: 1,
								nums: [
									{
										text: '0/0.5',
										num: 0.5
									},
									{
										text: '0.5',
										num: 2.53
									},
									{},
									{}
								]
							},
							{
								name: '瓜达卢佩',
								goalsScored: 1,
								nums: [
									{
										text: '',
										num: 1.75
									},
									{
										text: '',
										num: 1.47
									},
									{},
									{}
								]
							}
						]
					},
					fullCourt2: {
						title: '得分大小',
						data: [
							{
								nums: [
									{
										text: '大2.5',
										num: 1.97
									},
									{
										text: '大2.5/3',
										num: 1.65
									},
									{},
									{}
								]
							},
							{
								nums: [
									{
										text: '小2.5',
										num: 1.82
									},
									{
										text: '小',
										num: 1.72
									},
									{},
									{}
								]
							}
						]
					}
				}

			]

		}
	},
	mounted() {
		this.get_sports_data()
	},
	methods: {
		async get_sports_data() {
			try {
				console.log('Football_Detail');
				let url = config.api.GET_SPORTS_DATA;
				let data = {
					type: '',
					m_date: '2021-07-11',
					get_type: '',
				}
				const response = (await axios.post(url, data)).data;
				const cateData: Cate[] = response;
				this.sportData = cateData.filter((Cate) => Cate.Type == 'FT')
				let result = [];
				let titleTextTemp = [
					{
						text1: '半场'
					},
					{
						text1: '让球'
					},
					{
						text1: '得分大小'
					},
					{
						text1: '独赢'
					},
					{
						text1: '下一个进球'
					}
				]

				for (let i = 0; i < this.sportData.length; i++) {
					let existing = result.filter((r) => r.name == this.sportData[i].M_League)
					//let scorelist = []
					let scoreList = [
						{
							goalsScored: 1,
							mid: this.sportData[i].MID,
							name: this.sportData[i].MB_Team,
							nums: [
								{
									type: "H",
									text: this.sportData[i].M_LetB_H,
									num: this.sportData[i].MB_LetB_Rate_H
								},
								{
									type: "H",
									text: this.sportData[i].MB_Dime_H,
									num: this.sportData[i].MB_Dime_Rate_H
								},
								{
									type: "H",
									text: ' ',
									num: this.sportData[i].MB_Win_Rate_H
								},
								{
									type: "H",
									text: ' ',
									num: this.sportData[i].o
								},
							]
						},
						{
							goalsScored: 1,
							mid: this.sportData[i].MID,
							name: this.sportData[i].TG_Team,
							nums: [
								{
									type: "C",
									text: this.sportData[i].M_LetB_H,
									num: this.sportData[i].MB_LetB_Rate_H
								},
								{
									type: "C",
									text: this.sportData[i].TG_Dime_H,
									num: this.sportData[i].TG_Dime_Rate_H
								},
								{
									type: "C",
									text: this.sportData[i].M_LetB_H,
									num: this.sportData[i].TG_Win_Rate_H
								},
								{
									type: "C",
									text: this.sportData[i].M_LetB_H,
									num: this.sportData[i].e
								},
							]
						},
						{
							Collection: false,
							nums: [
								{},
								{},
								{
									type: "N",
									text: '和',
									num: this.sportData[i].M_Flat_Rate_H
								},
								{
									type: "N",
									text: '无',
									num: '3.35'
								}
							]
						}
					]
					let tepe = [
						{
							name: '让球&大/小',
							type: 'H'
						},
						{
							name: '角球',
							type: 'H'
						}
					]
					let fullCourt1 = {
						title: '让球',
						data: [
							{
								name: this.sportData[i].MB_Team,
								goalsScored: 1,
								nums: [
									{
										text: this.sportData[i].hratio,
										num: this.sportData[i].MB_LetB_Rate
									},
									{
										text: '0.5',
										num: this.sportData[i].MB_LetB_Rate
									}
								]
							},
							{
								name: this.sportData[i].TG_Team,
								goalsScored: 1,
								nums: [
									{
										text: this.sportData[i].hratio,
										num: this.sportData[i].TG_LetB_Rate
									},
									{
										text: '0.5',
										num: this.sportData[i].TG_LetB_Rate
									}
								]
							},
						]
					}
					let fullCourt2 = {
						title: '得分大小',
						data: [
							{
								nums: [
									{
										text: this.sportData[i].hratio,
										num: this.sportData[i].TG_Dime_Rate
									},
									{
										text: '0.5',
										num: this.sportData[i].TG_Dime_Rate
									}
								]
							},
							{
								nums: [
									{
										text: this.sportData[i].hratio,
										num: this.sportData[i].MB_Dime_Rate
									},
									{
										text: '0.5',
										num: this.sportData[i].MB_Dime_Rate
									}
								]
							},
						]
					}
					if (existing.length == 0) {
						//let scorelist = []

						result = [
							...result,
							{
								name: this.sportData[i].M_League,
								gameList: [{
									mid: this.sportData[i].MID,
									titletext: [...titleTextTemp],
									scoreList: [...scoreList],
									tepe: [...tepe]
								}],
								fullCourt1: fullCourt1,
								fullCourt2: fullCourt2
							}
						]
					} else {
						existing[0].gameList = [
							...existing[0].gameList,
							{
								titletext: [...titleTextTemp],
								scoreList: [...scoreList],
								tepe: [...tepe]
							}
						]
					}
				}
				this.tableList = [...result];

				return response;
			} catch (e) {
				console.log(e);
				return e;
			}
		},
		handleModal(table_id: number, game_id: number, score_id: number, num_id: number) {
			console.log(this.tableList[table_id])
			if (num_id == 0) this.line = 12
			if (num_id == 1) this.line = 13
			if (num_id == 2) this.line = 11
			if (num_id == 3) this.line = 14			
			this.g_type = this.tableList[table_id].gameList[game_id].scoreList[score_id].nums[num_id].type
			this.mid = this.tableList[table_id].gameList[game_id].mid
			this.m_team = this.tableList[table_id].gameList[game_id].scoreList[0].name
			this.t_team = this.tableList[table_id].gameList[game_id].scoreList[1].name
			this.select_team = this.tableList[table_id].gameList[game_id].scoreList[score_id].name
			this.league = this.sportData[table_id].M_League
			this.title = this.tableList[table_id].gameList[game_id].titletext[num_id + 1].text1
			this.rate = this.tableList[table_id].gameList[game_id].scoreList[score_id].nums[num_id]
			console.log( this.rate)
			if (this.rate.num==0 || this.rate.num==null) this.openModal = false
			else this.openModal = true
		},
		handleModal1(table_id: number, key: number, k: number) {
			console.log(this.tableList[table_id])
			console.log(this.tableList[table_id].fullCourt1.data[key])
			this.line = 2
			// if (k == 0 ) this.line = 2
			// if (k == 1 ) this.line = 7
			if (key == 0) this.g_type = "H"			
			if (key == 1) this.g_type = "C"			
			this.mid = this.tableList[table_id].gameList[0].mid
			this.m_team = this.tableList[table_id].fullCourt1.data[0].name
			this.t_team = this.tableList[table_id].fullCourt1.data[1].name
			this.select_team = this.tableList[table_id].fullCourt1.data[key].name
			console.log(this.select_team)
			this.league = this.sportData[table_id].M_League
			this.title = this.tableList[table_id].fullCourt1.title
			this.rate = this.tableList[table_id].fullCourt1.data[key].nums[k]
			console.log( this.rate)
			if (this.rate.num==0 || this.rate.num==null) this.openModal = false
			else this.openModal = true
		},
		handleModal2(table_id: number, key: number, k: number) {
			console.log(this.tableList[table_id])
			console.log(this.tableList[table_id].fullCourt2.data[key])
			this.line = 3
			// if (k == 0 ) this.line = 3
			// if (k == 1 ) this.line = 5
			if (key == 0) this.g_type = "H"			
			if (key == 1) this.g_type = "C"			
			this.mid = this.tableList[table_id].gameList[0].mid
			this.m_team = this.tableList[table_id].fullCourt1.data[0].name
			this.t_team = this.tableList[table_id].fullCourt1.data[1].name
			this.select_team = this.tableList[table_id].fullCourt1.data[key].name
			console.log(this.select_team)
			this.league = this.sportData[table_id].M_League
			this.title = this.tableList[table_id].fullCourt2.title
			this.rate = this.tableList[table_id].fullCourt2.data[key].nums[k]
			console.log( this.rate)
			if (this.rate.num==0 || this.rate.num==null) this.openModal = false
			else this.openModal = true
		},
		closeModal() {
			this.openModal = false
		}
	}
})

</script>

<template>
	<div>
		<!-- <div class="game_list" v-for="(item, index) in tableList" :key="index + 100">
				<div class="center_title">
					<span>{{ item.name }}</span>
					<img :src="item.icon" alt="">
				</div>
				<div class="center_item" v-for="(data, indexs) in item.gameList" :key="indexs + 300">
					<div class="table_title table_list">
						<div v-for="(title, k) in data.titletext" :key="k + 400">
							<span v-if="title.text1">{{ title.text1 }}</span>
							<span v-if="(title as any).text2===null?false:true">{{ (title as any).text2 }}</span>
						</div>
					</div>
					<div class="table_text table_list" v-for="(datalist, idx) in data.scoreList" :key="idx + 300">
						<div class="table_text_l" v-if="datalist.name">
							<span>{{ datalist.goalsScored }}</span>
							<span>{{ datalist.name }}</span>
						</div>
						<div class="store_up" v-if="!datalist.name">
							<img v-if="!datalist.Collection" src="@/assets/images/stadiums/store_up.png" alt="">
							<img v-if="datalist.Collection" src="@/assets/images/stadiums/store_in.png" alt="">
						</div>
						<div class="table_text_r" v-for="(num, idx) in datalist.nums" :key="idx + 200">
							<div v-if="num.type == 1">
								<span v-if="num.text">{{ num.text }}</span>
								<span v-if="num.num">{{ num.num }}</span>
							</div>
							<div class="lock" v-if="num.type == 2">
								<img src="@/assets/images/stadiums/lock.png" alt="">
							</div>
						</div>
					</div>
					<div class="table_type">
						<button :class="{ btnSelect: btn.type == 2 }" v-for="(btn, i) in data.tepe" :key="i + 800">
							{{ btn.name }}
						</button>
					</div>
				</div>

				<div class="summary">
					<div class="summary_top">全场</div>
					<div class="summary_center">
						<div class="summary_title">{{ item.fullCourt1.title }}</div>
						<div class="summary_item" v-for="(summary, key) in item.fullCourt1.data" :key="key + 600">
							<div class="summary_item_l">
								<span>{{ summary.goalsScored }}</span>
								<span>{{ summary.name }}</span>
							</div>
							<div class="summary_item_r" v-for="(summaryitem, k) in summary.nums" :key="k + 650">
								<span>{{ summaryitem.text }}</span>
								<span>{{ summaryitem.num }}</span>
							</div>
						</div>
					</div>
					<div class="summary_center">
						<div class="summary_title">{{ item.fullCourt2.title }}</div>
						<div class="summary_item" v-for="(summary2, s) in item.fullCourt2.data" :key="s + 700">
							<div class="summary_item_r summary_bottom" v-for="(h, k) in summary2.nums" :key="k + 750">

								<span>{{ h.text }}</span>
								<span>{{ h.num }}</span>
							</div>
						</div>
					</div>
					<div class="summary_over">
						所有玩法
					</div>
				</div>

			</div> -->
		<div class="game_list" v-for="(item, index) in tableList" :key="index + 100">
			<div class="center_title">
				<span>{{ item.name }}</span>
				<img :src="item.icon" alt="">
			</div>
			<div class="center_item" v-for="(data, indexs) in item.gameList" :key="indexs + 300">
				<div class="table_title table_list">
					<div v-for="(title, k) in data.titletext" :key="k + 400">
						<span v-if="title.text1">{{ title.text1 }}</span>
						<span v-if="(title as any).text2 === null ? false : true">{{ (title as any).text2 }}</span>
					</div>
				</div>
				<div class="table_text table_list" v-for="(datalist, idx) in data.scoreList" :key="idx + 300">
					<div class="table_text_l" v-if="datalist.name">
						<span>{{ datalist.goalsScored }}</span>
						<span>{{ datalist.name }}</span>
					</div>
					<div class="store_up" v-if="!datalist.name">
						<img v-if="!datalist.Collection" src="@/assets/images/stadiums/store_up.png" alt="">
						<img v-if="datalist.Collection" src="@/assets/images/stadiums/store_in.png" alt="">
					</div>
					<div class="table_text_r" v-for="(num, idx_sub) in datalist.nums" :key="idx_sub + 200">
						<div v-if="num.type == 'H' || num.type == 'C' || num.type == 'N'" @click="handleModal(index, indexs, idx, idx_sub)">
							<span v-if="num.text">{{ num.text }}</span>
							<span v-if="num.num">{{ num.num }}</span>
						</div>
						<div class="lock" v-if="num.type == 2">
							<img src="@/assets/images/stadiums/lock.png" alt="">
						</div>
					</div>
				</div>
				<div class="table_type">
					<button :class="{ btnSelect: btn.type == 2 }" v-for="(btn, i) in data.tepe" :key="i + 800">
						{{ btn.name }}
					</button>
				</div>
			</div>

			<div class="summary">
				<div class="summary_top">全场</div>
				<div class="summary_center">
					<div class="summary_title">{{ item.fullCourt1.title }}</div>
					<div class="summary_item" v-for="(summary, key) in item.fullCourt1.data" :key="key + 600">
						<div class="summary_item_l">
							<span>{{ summary.goalsScored }}</span>
							<span>{{ summary.name }}</span>
						</div>
						<div class="summary_item_r" v-for="(summaryitem, k) in summary.nums" :key="k + 650" @click="handleModal1(index, key, k)">
							<span>{{ summaryitem.text }}</span>
							<span>{{ summaryitem.num }}</span>
						</div>
					</div>
				</div>
				<div class="summary_center">
					<div class="summary_title">{{ item.fullCourt2.title }}</div>
					<div class="summary_item" v-for="(summary2, s) in item.fullCourt2.data" :key="s + 700">
						<div class="summary_item_r summary_bottom" v-for="(h, k) in summary2.nums" :key="k + 750" @click="handleModal2(index, s , k)">

							<span>{{ h.text }}</span>
							<span>{{ h.num }}</span>
						</div>
					</div>
				</div>
				<div class="summary_over">
					所有玩法
				</div>
			</div>

		</div>
		<OrderModal v-if="openModal" :type="this.type" :title="this.title" :m_team="this.m_team" :t_team="this.t_team"
			:league="this.league" :rate="this.rate" :mid="this.mid" :select_team="this.select_team" :line="this.line" :g_type="this.g_type" @close="closeModal" />
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
/*
const tableList = ref([
	{
	name: '国际友谊联赛',
	icon: new URL("@/assets/images/stadiums/title-icon.png", import.meta.url).href,
	gameList: [
		{
		titletext: [{
			text1: '半场'
		},
		{
			text1: '让球'
		},
		{
			text1: '得分大小'
		},
		{
			text1: '独赢'
		},
		{
			text1: '下一个进球'
		}
		],
		scoreList: [{
			goalsScored: 1,
			name: '日本',

			nums: [{
				type: 1,
				text: '',
				num: '1.00'
			},
			{
				type: 1,
				text: '大1/1.5',
				num: '1.95'
			},
			{
				type: 1,
				text: '',
				num: '5.9'
			},
			{
				type: 1,
				text: '第一个',
				num: '4.35'
			}
			]
		},
		{
			goalsScored: 1,
			name: '加拿大',
			nums: [{
				type: 1,
				text: '0.5',
				num: '1.86'
			},
			{
				type: 1,
				text: '小1/1.5',
				num: '1.95'
			},
			{
				type: 1,
				text: '',
				num: '1.92'
			},
			{
				type: 1,
				text: '第一个',
				num: '1.64'
			}
			]
		},
		{
			Collection: false,
			nums: [{},
			{},
			{
				type: 1,
				text: '和',
				num: '2.47'
			},
			{
				type: 1,
				text: '无',
				num: '3.35'
			}
			]
		}
		],
		tepe: [
			{
				name: '让球&大/小',
				type: 1
			},
			{
				name: '角球',
				type: 1
			}
		]
	},
	{
		titletext: [{
			text1: '半场'
		},
		{
			text1: '让球'
		},
		{
			text1: '得分大小'
		},
		{
			text1: '独赢'
		},
		{
			text1: '下一个进球'
		}
		],
		scoreList: [
			{
				goalsScored: 1,
				name: '瓜达卢佩',

				nums: [{
					type: 1,
					text: '',
					num: '1.96'
				},
				{
					type: 1,
					text: '大1/1.5',
					num: '1.95'
				},
				{
					type: 1,
					text: '',
					num: '5.9'
				},
				{
					type: 1,
					text: '第一个',
					num: '4.35'
				}
				],

			},
			{
				goalsScored: 1,
				name: '朋塔雷纳斯',
				nums: [{
					type: 1,
					text: '0.5',
					num: '1.86'
				},
				{
					type: 1,
					text: '小1/1.5',
					num: '1.95'
				},
				{
					type: 1,
					text: '',
					num: '1.92'
				},
				{
					type: 1,
					text: '第一个',
					num: '1.84'
				}
				],

			},
			{
				Collection: true,
				nums: [{},
				{},
				{
					type: 1,
					text: '和',
					num: '2.47'
				},
				{
					type: 1,
					text: '无',
					num: '3.35'
				}
				]
			}
		],
		tepe: [
			{
				name: '让球&大/小',
				type: 2
			}
		]
	}],
	fullCourt1: {
		title: '让球',
		data: [
			{
				name: '瓜达卢佩',
				goalsScored: 1,
				nums: [
					{
						text: '0/0.5',
						num: 0.5
					},
					{
						text: '0.5',
						num: 2.53
					},
					{},
					{}
				]
			},
			{
				name: '瓜达卢佩',
				goalsScored: 1,
				nums: [
					{
						text: '',
						num: 1.75
					},
					{
						text: '',
						num: 1.47
					},
					{},
					{}
				]
			}
		]
	},
	fullCourt2: {
		title: '得分大小',
		data: [
			{
				nums: [
					{
						text: '大2.5',
						num: 1.97
					},
					{
						text: '大2.5/3',
						num: 1.65
					},
					{},
					{}
				]
			},
			{
				nums: [
					{
						text: '小2.5',
						num: 1.82
					},
					{
						text: '小',
						num: 1.72
					},
					{},
					{}
				]
			}
		]
	}
}

])
*/
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


.center_item {

	font-size: 12px;
	background-color: #FFFFFF;
	color: #5C546A;

	.table_list {
		display: flex;
		text-align: center;
		padding-left: 13px;

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
		height: 32px;

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
			span:first-child {
				color: #FF7100;
				margin-right: 8px;
			}
		}
	}

	.table_type {
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

.summary {
	background-color: #FFFFFF;
	padding: 0 13px;

	.summary_top {
		font-size: 12px;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #FF5A00;
		line-height: 38px;
		text-align: center;
	}

	.summary_center {
		border-right: 1px solid #E3E3E3;

		.summary_title {
			background-color: #D6E0E6;
			font-size: 12px;
			line-height: 15px;
			text-align: center;
		}

		.summary_item {
			display: flex;
			align-items: center;
			font-size: 12px;

			div {
				display: flex;
				align-items: center;

			}

			.summary_item_l {
				width: 100px;
				height: 33px;

				span:first-child {
					color: #FF7100;
					margin-right: 8px;
				}
			}

			.summary_item_r {
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

			.summary_bottom {
				width: 86px;
			}
		}
	}

	.summary_over {
		height: 33px;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #4EABFF;
		font-size: 12px;
	}
}

// .center_item:last-child {
// 	border-top: 12px solid #F3FAFF !important;
// }
</style>
