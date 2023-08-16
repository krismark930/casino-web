<template>
	<div>
		<van-loading color="#1989fa" class="loading-position" v-if="loading" size="40" />
		<div style="text-align: center;" v-if="coupon.length === 0 && !loading">您选择的项目暂时没有赛事。请修改您的选项或迟些再返回。</div>
		<div class="popular" v-if="!loading && coupon.length > 0">
			<div class="divide-background"></div>
			<div class="center-title">
				<span>最火</span>
			</div>
			<van-cell :title=couponItem.name v-for="(couponItem, couponIndex) in coupon" :key="couponIndex"
				@click="showCouponDetail(couponItem.lid, couponIndex)" />
		</div>
		<div class="region">
			<div v-for="(regionItem, regionIndex) in region" :key="regionIndex">
				<div class="divide-background"></div>
				<div class="center-title" @click="showItem(regionIndex, regionItem.id)">
					<span>{{ regionItem.name }}</span>
					<img :src="`https://www.hga030.com/images/flag/${regionItem.flag_class.split(' ')[1]}.svg`"
						v-if="regionItem.flag_class.split(' ')[1] != ''">
				</div>
				<div v-if="regionItem['show']">
					<div v-if="Array.isArray(regionItem.league)">
						<van-cell :title=leagueItem.name v-for="(leagueItem, leagueIndex) in regionItem.league"
							:key="leagueIndex" @click="showLIDDetail(leagueItem.id)" />
					</div>
					<div v-else>
						<van-cell :title=regionItem.league.name @click="showLIDDetail(regionItem.league.id)" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
	name: "FT_LEAGUE_PARLAY",
	setup() {

	},
	data() {
		return {
			loading: false,
			coupon: [],
			region: []
		}
	},
	sockets: {
		connect: function () {
			console.log('socket to notification channel connected')
		},
		receivedLeagueParlayMessage(data: any) {
			this.loading = false;
			console.log(data);
			if (data["code"] === "error") return;
			console.log(data["coupons"]);
			this.coupon = data["coupons"]["coupon"];
			this.region = data["classifier"]["region"];
			this.region.map(item => {
				item["show"] = false;
			})
			console.log(this.region[2].league[0].name);
		}
	},
	methods: {
		showCouponDetail: function (lids, index) {
			switch (index) {
				case 0:
					this.$emit("showParlayMain", lids, "cp1");
					break;
				case 1:
					this.$emit("showParlayMain", lids, "cp2");
					break;
				case 2:
					this.$emit("showParlayMain", lids, "HotGame_FT_lid_1");
					break;
				case 3:
					this.$emit("showParlayMain", lids, "HotGame_FT_lid_2");
					break;
			}
		},
		showLIDDetail: function (lids) {
			this.$emit("showParlayMain", lids, "");
		},
		showDetail: function () {
			console.log("ok");
		},
		showItem: function (regionIndex) {
			this.region[regionIndex]["show"] = this.region[regionIndex]["show"] ? false : true;
		}
	},
	created() {
		this.loading = true;
		this.$socket.emit("sendLeagueParlayMessage");
	},
	unmounted() {
		this.$socket.emit("stopLeagueParlayMessage");
	}
})
</script>
<style scoped lang="scss">
.loading-position {
	margin-top: 200px;
	position: absolute;
	left: 50%;
}

.divide-background {
	background: white;
	padding-bottom: 3px
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
</style>
