<template>
	<div>
		<van-loading color="#1989fa" class="loading-position" v-if="loading" size="40" />
		<div style="text-align: center;" v-if="ftChampionDataList.length === 0 && !loading">没有数据</div>
		<div v-for="(lidItem, lidItemIndex) in ftChampionDataList" :key="lidItemIndex + 100">
			<div class="divide-background"></div>
			<div class="center_title">
				<span>{{ lidItem.league }}</span>
				<span>{{ lidItem.datetime }}</span>
			</div>
			<div class="score_box" v-for="(teamItem, teamIndex) in lidItem.teamItems" :key="teamIndex">
				<van-cell style="text-align: center;" :title=teamItem.teamsname
					@click="showDetail(lidItemIndex, teamIndex)" />
				<div v-for="(subTeamItem, subTeamIndex) in teamItem.rtypes" :key="subTeamIndex">
					<div v-if="teamItem['show'] && subTeamItem.ioratio !== 0" class="score_other"
						@click="handleModal(lidItem.league, lidItem.datetime, teamItem.gid, teamItem.teamsname, subTeamItem)">
						<span>{{ subTeamItem.teams }}</span>
						<span>{{ subTeamItem.ioratio }}</span>
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
import { showToast } from 'vant';
import { useAuthStore } from "@/stores/auth";
import router from "@/router";

export default defineComponent({
	name: "BK_Champion_Main",
	setup() {
	},
	props: {
		championLid: "",
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
			bettingType: "Champion",
			bettingOrderData: {
				showType: "Champion",
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
				m_date: "",
				m_start: "",
				m_ball: "",
				t_ball: ""
			},
			openModal: false,
			tempFTChampionDataList: [],
			ftChampionDataList: []
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
	sockets: {
		connect: function () {
			console.log('socket to notification channel connected')
		},
		receivedBKChampionMainMessage(data: any) {
			let tempReceivedData = [];
			this.loading = false;
			console.log('receivedBKChampionMainMessage', data);
			if (data.length == 0) return;
			if (!Array.isArray(data)) {
				tempReceivedData.push(data);
			} else {
				tempReceivedData = data;
			}
			this.tempFTChampionDataList = this.ftChampionDataList;
			this.ftChampionDataList = [];
			let timeArray: Array<any> = tempReceivedData.map(function (item: object) {
				return item["datetime"];
			});
			var uniqueTimeArray = [...new Set(timeArray)];
			console.log(uniqueTimeArray);
			uniqueTimeArray.forEach(time => {
				let sameTimeChampionArray = tempReceivedData.filter(item => item["datetime"] == time);
				sameTimeChampionArray.map(item => {
					item["show"] = false
				})
				let tempData = {
					datetime: time,
					league: sameTimeChampionArray[0].league,
					teamItems: sameTimeChampionArray
				}
				this.ftChampionDataList.push(tempData);
			});
			let totalCount = this.tempFTChampionDataList.length > this.ftChampionDataList.length ? this.ftChampionDataList.length : this.tempFTChampionDataList.length;
		}
	},
	mounted() {
		this.$socket.emit("sendBKChampionMainMessage", { lid: this.championLid })
	},
	unmounted() {
		this.$socket.emit("stopBKChampionMessage")
	},
	methods: {
		showDetail(lidItemIndex: any, teamIndex: any): void {
			this.ftChampionDataList[lidItemIndex].teamItems[teamIndex]["show"] = !this.ftChampionDataList[lidItemIndex].teamItems[teamIndex]["show"];
		},
		handleModal: function (leagueName: string, datetime: any, gid: any, teamName: string, teamItem: any) {
			if (this.user.id == undefined) {
				router.push({ name: "login" });
				return;
			}
			this.bettingOrderData["lineType"] = 16;
			this.bettingOrderData["r_type"] = teamItem.rtype
			this.bettingOrderData["mID"] = gid;
			this.bettingOrderData["gameType"] = "BK";
			this.bettingOrderData["mbTeam"] = teamName;
			this.bettingOrderData["tgTeam"] = "";
			this.bettingOrderData["rate"] = teamItem.ioratio;
			this.bettingOrderData["league"] = leagueName;
			this.bettingOrderData["title"] = "冠军";
			this.bettingOrderData["selectedTeam"] = teamItem.teams;
			this.bettingOrderData["m_date"] = datetime;
			this.bettingOrderData["m_start"] = datetime;
			this.bettingOrderData["m_ball"] = 0;
			this.bettingOrderData["t_ball"] = 0;
			if (this.user.FS_FS_Bet == 0) {
				showToast("对不起,本场有下注金额最高:  RMB 0");
				return;
			}
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
		width: 80%;
		font-size: 15px;
		margin: auto;
		margin-top: 4px;
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
