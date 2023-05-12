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
						v-if="regionItem.flag_class != 'icon_flag'">
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
	name: "FT_LEAGUE_TODAY",
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
		receivedLeagueTodayMessage(data: any) {
			this.coupon = [];
			this.region = [];
			this.loading = false;
			console.log(data);
			if (data == null || data["coupons"] == undefined) return;
			if (data["code"] === "error") return;
			console.log(data["coupons"]);
			if (Array.isArray(data["coupons"]["coupon"])) {
				this.coupon = data["coupons"]["coupon"];
			} else {
				this.coupon.push(data["coupons"]["coupon"]);
			}
			if (Array.isArray(data["classifier"]["region"])) {
				this.region = data["classifier"]["region"];
			} else {
				this.region.push(data["classifier"]["region"]);
			}
			this.region.map(item => {
				item["show"] = false;
			})
		}
	},
	methods: {
		showCouponDetail: function (lids, couponIndex) {
			switch (couponIndex) {
				case 0:
					this.$emit("showTodayMain", lids, "cp1");
					break;
				case 1:
					this.$emit("showTodayMain", lids, "HotGame_FT_lid_4");
					break;
				case 2:
					this.$emit("showTodayMain", lids, "HotGame_FT_lid_10");
					break;
				case 3:
					this.$emit("showTodayMain", lids, "HotGame_FT_lid_14");
					break;
			}
		},
		showLIDDetail: function (lids) {
			this.$emit("showTodayMain", lids, "");
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
		this.$socket.emit("sendLeagueTodayMessage");
	},
	unmounted() {
		this.$socket.emit("stopLeagueTodayMessage");
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
