<template>
	<div>
		<van-loading color="#1989fa" class="loading-position" v-if="loading" size="40" />
		<div style="text-align: center;" v-if="coupon.length === 0 && !loading">您选择的项目暂时没有赛事。请修改您的选项或迟些再返回。</div>
		<div class="popular" v-if="!loading && coupon.length > 0">
			<div class="divide-background"></div>
			<div class="center-title">
				<span>最火</span>
			</div>
			<van-cell :title=couponItem.name._text v-for="(couponItem, couponIndex) in coupon" :key="couponIndex"
				@click="showCouponDetail(couponItem.lid._text, couponItem.name._text)" />
		</div>
		<div class="region">
			<div v-for="(regionItem, regionIndex) in region" :key="regionIndex">
				<div class="divide-background"></div>
				<div class="center-title" @click="showItem(regionIndex, regionItem._attributes.id)">
					<span>{{ regionItem._attributes.name }}</span>
					<img :src="`../../../../../src/assets/flags/${regionItem._attributes.flag_class.split(' ')[1]}.svg`"
						v-if="regionItem._attributes.flag_class.split(' ')[1] != ''">
				</div>
				<div v-if="regionItem['show']">
					<div v-if="Array.isArray(regionItem.league)">
						<van-cell :title=leagueItem._attributes.name v-for="(leagueItem, leagueIndex) in regionItem.league"
							:key="leagueIndex" @click="showLIDDetail(leagueItem._attributes.id)" />
					</div>
					<div v-else>
						<van-cell :title=regionItem.league._attributes.name
							@click="showLIDDetail(regionItem.league._attributes.id)" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
	name: "BK_Parlay_League",
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
		receivedBKLeagueParlayMessage(data: any) {
			this.loading = false;
			this.coupon = [];
			this.region = [];
			console.log(data);
			if (data == null) return;
			if (data["code"]["_text"] === "error") return;
			console.log(data["coupons"]);
			if (!Array.isArray(data["coupons"]["coupon"])) {
				this.coupon.push(data["coupons"]["coupon"]);
			} else {
				this.coupon = data["coupons"]["coupon"];
			}
			if (!Array.isArray(data["classifier"]["region"])) {
				this.region.push(data["classifier"]["region"]);
			} else {
				this.region = data["classifier"]["region"];
			}
			this.region.map(item => {
				item["show"] = false;
			})
		}
	},
	methods: {
		showCouponDetail: function (lids, name) {
			console.log(lids);
			switch (name) {
				case "滚球赛事":
					this.$emit("showParlayMain", lids, "cp1");
					break;
				case "今日赛事":
					this.$emit("showParlayMain", lids, "cp2");
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
		this.$socket.emit("sendBKLeagueParlayMessage");
	},
	unmounted() {
		this.$socket.emit("stopBKLeagueParlayMessage");
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
