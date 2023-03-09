<template>
	<div>
		<div class="results_title">
			<div class="select_title" @click="selectResult">
				<van-icon class="select_icon" name="arrow-down" />
				<span>{{selectList[index].name}}</span>
			</div>
			<div class="title_text">
				{{resultList.allMoney.toFixed(2)}} RMB
			</div>
			<div class="select_title delete">
				<van-icon name="delete-o" @click="deleteResult" color="#FFFFFF" />
			</div>
			<div class="select_box" v-show="openSelect">
				<span v-for="(item,index) in selectList" @click="select(index)">{{item.name}}</span>
			</div>
		</div>
		<div class="results_center">
			<div v-if="selectList">
				<div class="center_list" v-for="(item,index) in resultList.list" :key="index">
					<div>
						<span class="grey">{{item.game}}</span>
						<span class="grey">{{item.type}}</span>
					</div>
					<div>
						<span>{{item.gameName}}</span>
					</div>
					<div>
						<span class="grey">{{item.ranks}}</span>
						<span class="orange">{{item.scoro}}</span>
					</div>
					<div>
						<span>{{item.win}}</span>
						<span class="orange">{{item.win}}</span>
						<p>@</p>
						<span class="orange">{{item.Odds}}</span>
					</div>
					<div class="list_input">
						<input type="text" placeholder="输入投注金额" v-model="item.money">
						<div>
							<span v-if="item.money" class="grey">可赢额</span>
							<span v-if="item.money" class="win_text green">{{Number(item.money)*(item.rate)}}</span>
							<span v-if="!item.money" class="max">最大投注金额</span>
						</div>
					</div>
				</div>
				<div class="center_list_b">
					<span class="input_top">综合过关 @ {{resultList.allOdds}}</span>
					<div class="list_input">
						<div class="list_input_left">
							<input type="text" placeholder="输入投注金额" v-model="resultList.allMoney">
							<span>×1</span>
						</div>
						<div>
							<span v-if="resultList.allMoney" class="grey">可赢额</span>
							<span v-if="resultList.allMoney" class="win_text green">{{resultList.allMoney*0.82}}</span>
							<span v-if="!resultList.allMoney" class="max">最大投注金额</span>
						</div>
					</div>
				</div>
				<div class="center_list_b">
					<span class="input_top">单注</span>
					<div class="list_input">
						<div class="list_input_left">
							<input type="text" placeholder="输入投注金额" v-model="resultList.aloneMoney">
							<span>×1</span>
						</div>
					</div>
				</div>
			</div>
			<div v-if="!selectList" class="notList">
				<img src="@/assets/images/stadiums/notList.png" alt="">
				<span>您的投注单为空</span>
			</div>
			<div class="estimate" :class="{notlist_s:!selectList}">
				<div>
					<span>下注总额</span>
					<span>{{selectList.length==0?resultList.allMoney.toFixed(2):'0.00'}} RMB</span>
				</div>
				<div>
					<span>预估可赢</span>
					<span class="green">{{selectList.length==0?(resultList.allMoney*4.7).toFixed(2):'0.00'}} RMB</span>
				</div>
			</div>
			<div v-if="selectList" class="btn" @click="multiBetting">
				<span>下注</span>
				<span>{{resultList.allMoney.toFixed(2)}} RMB</span>
			</div>
			<div v-if="!selectList" class="btn n_btn">
				<span>下注</span>
				<span>0.00 RMB</span>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import config from "@/config"
import axios from 'axios';
import { showConfirmDialog } from 'vant';

export default {
	data () {
		return {
			openSelect : false,
			index : 0,
			all_money: 0,
			show: true,
			selectList : [
				{
					name: '注单1',
					id: 1
				},
				{
					name: '注单2',
					id: 2
				},
				{
					name: '注单3',
					id: 3
				}
			],
			resultList : {
				allMoney: 1000.00,
				aloneMoney: '',
				allOdds: 5.71,
				list: []
			}
		}
	},
	mounted() {
		this.get_temps()
	},
	methods: {
		async get_temps() {
			try {
				let url = config.api.GET_TEMPS
				const response = (await axios.get(url)).data.data
				console.log(response)
				let list = []
				let game = ""
				for (let i = 0; i< response.length; i++)
				{
					this.all_money += response[i].gold
					if (response[i].type == 'FT') {game = '足球'}
					if (response[i].type == 'BK') {game = '篮球'}
					let data = {
						game: game,
						type: response[i].title,
						gameName: response[i].league,
						ranks: response[i].m_team + 'VS' + response[i].t_team,
						win: response[i].select_team,
						size: response[i].text,
						scoro: 1,
						Odds: response[i].rate,
						rate: Number(response[i].m_win)/(response[i].gold),
						money: response[i].gold
					}
					list.push(data)
					this.resultList = {
						allMoney: this.all_money,
						aloneMoney: '',
						allOdds: 5.71,
						list: [...list]
					}
				}
				console.log(this.resultList)
			} catch (e) {
				return e
			}
		},
		selectResult() {
			this.openSelect = !this.openSelect
		},
		select (value:number) {
			this.index = value
			this.openSelect = !this.openSelect
		},
		deleteResult () {
			showConfirmDialog({
					message: '是否确认删除该注单？',
				})
				.then(() => {
					// on confirm
					this.deleteList ();
				})
				.catch(() => {
					// on cancel
				});
		},
		async deleteList(){
			try {
					let url = config.api.DELETE_TEMPS
					const response = (await axios.get(url)).data.message
					console.log(response)
			} catch(e) {
				return e
			}
		},
		async multiBetting() {
			try {
				let url = config.api.MULTI_BET_FT
				const response = (await axios.get(config.api.GET_TEMPS)).data.data
				let list = []
				console.log(response)
				for (let i = 0; i< response.length; i++) {
					let temp = {
						gold : response[i].gold,
						id : response[i].uid,
						gid : response[i].gid,
						line_type : response[i].line_type,
						type : response[i].g_type,
						active : response[i].active,
					}
					list.push(temp)
				}
				let data = {
					data : list,
					count : list.length
				}
				console.log(data)
				const response1 = (await axios.post(url, data)).data.data
				console.log(response1)
				await axios.get(config.api.GET_TEMPS)
			} catch(e) {
				return e
			}
		}
	}
}
</script>

<style scoped lang="scss">
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
			width: -moz-calc(100% - (24px + 20px));
			width: -webkit-calc(100% - (24px + 20px));
			width: calc(100% - (24px + 20px));

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
