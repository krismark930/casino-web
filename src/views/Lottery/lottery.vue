<!-- 彩票首页 -->
<template>
	<div style="background-color: #DCF4FF;">
		<div class="header">
			<van-nav-bar title="新葡京彩票" @click-left="onClickLeft" fixed left-arrow />
		</div>
		<div class="lottery_box animated fadeInLeft">
			<div class="banner_box">
				<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
					<van-swipe-item v-for="(item, index) in 3" :key='index + 50'>
						<img class="banner_img" src="@/assets/images/lottery/banner-img.png" alt="">
					</van-swipe-item>
				</van-swipe>
			</div>
			<div class="advertising_top">
				<img class="l_img" src="../../assets/images/lottery/icon-2.png" alt="">
				<div class="advertising_text">
					<span>通知：收到回复个我后果和偶无公害断开连接的回复的非官</span>
				</div>
			</div>
			<div class="user_box">
				<div class="user_left">
					<span class="s1">欢迎您，</span>
					<span class="s1">{{ user.UserName }}</span>
				</div>
				<div class="user_right">
					<span class="t1">￥</span>
					<span class="t2">{{ user.Money == undefined ? "0.00" : user.Money }}</span>
					<img src="@/assets/images/lottery/looding.png" alt="">
				</div>
			</div>
			<div class="hall_box animated fadeInLeft">
				<div class="tab_bottom">
					<div class="tab_bottom_box">
						<div v-for="(item, index) in tabItemList" :key='index'>
							<div class="tab_bottom_item" v-if="item.hide != 1" @click="goDetail(item.path)">
								<span v-if="item.name">{{ item.name }}</span>
								<img v-if="item.img" class="item_icon" :src="(item as any).img" alt="">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import { useSysConfigStore } from '@/stores/sysConfig';
import { useRouter } from "vue-router";
import { ref, computed, onMounted } from "vue";
import { storeToRefs } from "pinia";
const router = useRouter();
const { getSysConfigValue } = useSysConfigStore();

const tabItemList = ref([
	{
		name: '重庆时时彩',
		img: new URL("@/assets/images/lottery/CQSSC.png", import.meta.url).href,
		path: "CQSSC",
		hide: 0,
	},
	{
		name: '河内五分彩',
		img: new URL("@/assets/images/lottery/FFC5.png", import.meta.url).href,
		path: "FFC5",
		hide: 0,
	},
	// {
	// 	name: '腾讯时时彩',
	// 	img: new URL("@/assets/images/lottery/kuaisan3.png", import.meta.url).href,
	// 	path: "TXSSC"
	// },
	// {
	// 	name: '台湾时时彩',
	// 	img: new URL("@/assets/images/lottery/kuaisan4.png", import.meta.url).href,
	// 	path: "TWSSC"
	// },
	{
		name: '澳洲幸运5',
		img: new URL("@/assets/images/lottery/AZXY5.png", import.meta.url).href,
		path: "AZXY5",
		hide: 0,
	},
	{
		name: '澳洲幸运10',
		img: new URL("@/assets/images/lottery/AZXY10.png", import.meta.url).href,
		path: "AZXY10",
		hide: 0,
	},
	{
		name: '幸运飞艇',
		img: new URL("@/assets/images/lottery/XYFT.png", import.meta.url).href,
		path: "XYFT",
		hide: 0,
	},
	{
		name: '北京PK拾',
		img: new URL("@/assets/images/lottery/BJPK.png", import.meta.url).href,
		path: "BJPK",
		hide: 0,
	},
	{
		name: '天津时时彩',
		img: new URL("@/assets/images/lottery/TJSSC.png", import.meta.url).href,
		path: "TJSSC",
		hide: 0,
	},
	{
		name: '新疆时时彩',
		img: new URL("@/assets/images/lottery/JXSSC.png", import.meta.url).href,
		path: "JXSSC",
		hide: 0,
	},
	{
		name: '重庆十分彩',
		img: new URL("@/assets/images/lottery/CQSF.png", import.meta.url).href,
		path: "CQSF",
		hide: 0,
	},
	{
		name: '广东十分彩',
		img: new URL("@/assets/images/lottery/GDSF.png", import.meta.url).href,
		path: "GDSF",
		hide: 0,
	},
	{
		name: '广西十分彩',
		img: new URL("@/assets/images/lottery/GXSF.png", import.meta.url).href,
		path: "GXSF",
		hide: 0,
	},
	{
		name: '天津十分彩',
		img: new URL("@/assets/images/lottery/TJSF.png", import.meta.url).href,
		path: "TJSF",
		hide: 0,
	},
	{
		name: '上海时时乐',
		img: new URL("@/assets/images/lottery/SHSSL.png", import.meta.url).href,
		path: "SHSSL",
		hide: 0,
	},
	{
		name: '广东11选5',
		img: new URL("@/assets/images/lottery/GD11.png", import.meta.url).href,
		path: "GD11",
		hide: 0,
	},
	{
		name: '福彩3D',
		img: new URL("@/assets/images/lottery/D3.png", import.meta.url).href,
		path: "D3",
		hide: 0,
	},
	{
		name: '排列3',
		img: new URL("@/assets/images/lottery/P3.png", import.meta.url).href,
		path: "P3",
		hide: 0,
	},
	// {
	// 	name: '江苏快三',
	// 	img: new URL("@/assets/images/lottery/kuaisan6.png", import.meta.url).href
	// },
	// {
	// 	name: '五分时时彩',
	// 	img: new URL("@/assets/images/lottery/shishi5.png", import.meta.url).href
	// },
	// {
	// 	name: '天津时时彩',
	// 	img: new URL("@/assets/images/lottery/shishi6.png", import.meta.url).href
	// },
	// {
	// 	name: '好运飞艇',
	// 	img: new URL("@/assets/images/lottery/pk10-3.png", import.meta.url).href
	// },
	// {
	// 	name: '马耳他飞艇',
	// 	img: new URL("@/assets/images/lottery/pk10-4.png", import.meta.url).href
	// },
	// {
	// 	name: '新疆快三',
	// 	img: new URL("@/assets/images/lottery/kuaisan7.png", import.meta.url).href
	// },
	// {
	// 	name: '四川快三',
	// 	img: new URL("@/assets/images/lottery/kuaisan8.png", import.meta.url).href
	// },
	// {
	// 	name: '湖北快三',
	// 	img: new URL("@/assets/images/lottery/kuaisan9.png", import.meta.url).href
	// },
	// {
	// 	name: '湖南快三',
	// 	img: new URL("@/assets/images/lottery/kuaisan10.png", import.meta.url).href
	// },
	// {
	// 	name: '河北快三',
	// 	img: new URL("@/assets/images/lottery/kuaisan11.png", import.meta.url).href
	// },
	// {
	// 	name: '广西快三',
	// 	img: new URL("@/assets/images/lottery/kuaisan12.png", import.meta.url).href
	// },
	// {
	// 	name: '甘肃快三',
	// 	img: new URL("@/assets/images/lottery/kuaisan13.png", import.meta.url).href
	// },
	// {
	// 	name: '极速六合彩',
	// 	img: new URL("@/assets/images/lottery/liuhe1.png", import.meta.url).href
	// },
	// {
	// 	name: '5分六合彩',
	// 	img: new URL("@/assets/images/lottery/liuhe2.png", import.meta.url).href
	// },
	{
		name: '香港六合彩',
		img: new URL("@/assets/images/lottery/MarkSix.png", import.meta.url).href,
		path: 'MarkSix',
		hide: 0,
	},
	{
		name: '澳门六合彩',
		img: new URL("@/assets/images/lottery/MacaoMarkSix.png", import.meta.url).href,
		path: 'MacaoMarkSix',
		hide: 0,
	},
])
const onClickLeft = () => {
	router.push({ name: 'home' })
}
const sysConfigItem = computed(() => {
	const { getSysConfig } = storeToRefs(useSysConfigStore());
	return getSysConfig.value;
})
const user = computed(() => {
	const { getUser } = storeToRefs(useAuthStore());
	return getUser.value;
})
const goDetail = (path: string) => {
	console.log(path);
	router.push({ name: path })
}
onMounted(async () => {
	await getSysConfigValue();
	console.log(JSON.parse(sysConfigItem.value.Lottery_Config))
	let lotteryConfig = JSON.parse(sysConfigItem.value.Lottery_Config);
	tabItemList.value.map((item: any) => {
		if (item.path == "CQSSC") {
			item.hide = lotteryConfig.cq.hide
		}
		if (item.path == "FFC5") {
			item.hide = lotteryConfig.ffc5.hide
		}
		if (item.path == "AZXY5") {
			item.hide = lotteryConfig.azxy5.hide
		}
		if (item.path == "AZXY10") {
			item.hide = lotteryConfig.azxy10.hide
		}
		if (item.path == "XYFT") {
			item.hide = lotteryConfig.xyft.hide
		}
		if (item.path == "BJPK") {
			item.hide = lotteryConfig.pk10.hide
		}
		if (item.path == "TJSSC") {
			item.hide = lotteryConfig.tj.hide
		}
		if (item.path == "JXSSC") {
			item.hide = lotteryConfig.jx.hide
		}
		if (item.path == "CQSF") {
			item.hide = lotteryConfig.cq.hide
		}
		if (item.path == "GDSF") {
			item.hide = lotteryConfig.cqsf.hide
		}
		if (item.path == "GXSF") {
			item.hide = lotteryConfig.gxsf.hide
		}
		if (item.path == "TJSF") {
			item.hide = lotteryConfig.tjsf.hide
		}
		if (item.path == "SHSSL") {
			item.hide = lotteryConfig.t3.hide
		}
		if (item.path == "GD11") {
			item.hide = lotteryConfig.gd11.hide
		}
		if (item.path == "D3") {
			item.hide = lotteryConfig.d3.hide
		}
		if (item.path == "P3") {
			item.hide = lotteryConfig.p3.hide
		}
	})
})
</script>

<style lang="scss" scoped>
::v-deep .van-ellipsis {
	color: #454558;
	font-size: 17px;
}

::v-deep .van-nav-bar .van-icon {
	color: #454558;
}

.header {
	position: relative;
}

.lottery_box {
	background-color: #DCF4FF;
	padding-top: 46px;
	padding-bottom: 60px;
}

.banner_box {
	.my-swipe .van-swipe-item {
		color: #fff;
		font-size: 20px;
		width: 354px;
		text-align: center;
	}

	.banner_img {
		height: 163px;
		width: 100%;
	}
}

.advertising_top {
	width: 100%;
	display: flex;
	align-items: center;
	height: 30px;
	border-bottom: 1px solid #74A7CE;

	.l_img {
		width: 15px;
		height: 11px;
		margin: 0 11px 0 16px;
	}

	.advertising_text {
		height: 20px;
		width: 308px;
		display: flex;
		align-items: center;
		overflow: hidden;

		span {
			white-space: nowrap;
			width: 100%;
			font-size: 12px;
			color: #757392;
		}
	}
}

.user_box {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px 0 15px 0;

	.user_left {
		margin-left: 15px;
		display: flex;

		.s1 {
			font-size: 13px;
			color: #2674FF;
		}
	}

	.user_right {
		display: flex;
		align-items: center;
		margin-right: 16px;

		span {
			color: #1E2D49;
		}

		.t1 {
			font-size: 9px;

		}

		.t2 {
			font-size: 11px;
		}

		img {
			margin-left: 18px;
			width: 19px;
			height: 19px;
		}
	}
}

.hall_box {
	width: 100%;
	padding-top: 8px;
	padding-bottom: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #EFF2F5;
}

.tab_top {
	display: flex;
	margin: 11px 0 9px 0;
	border-bottom: 4px solid #D3E4EE;

	.tab_item {
		position: relative;
		display: flex;
		align-items: center;
		width: 72px;
		height: 37px;

		.icon_img {
			width: 19px;
			height: 14px;
			position: relative;
			z-index: 2;
			margin: 0 4px 0 7px;
		}

		.back_img {
			position: absolute;
			z-index: 1;
			width: 72px;
			height: 37px;
		}

		span {
			font-size: 12px;
			position: relative;
			z-index: 2;
		}

		.select {
			color: #FFFFFF;
		}
	}
}

.tab_bottom {
	height: 500px;
	.tab_bottom_box {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;

		.tab_bottom_item {
			background-image: url('../../assets/images/lottery/back-r.png');
			background-size: cover;
			width: 89px;
			height: 73px;
			display: flex;
			flex-direction: column;
			position: relative;

			span {
				font-size: 12px;
				color: #1E2D49;
				margin: 9px 0 0 10px;
			}

			.item_icon {
				height: 37px;
				width: fit-content;
				margin-top: 10px;
				position: absolute;
				right: 6px;
				bottom: 6px;
			}
		}
	}

	.hall {
		width: 271px;
		height: 128px;
	}
}
</style>
