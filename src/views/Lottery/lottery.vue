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
					<span class="s1">AC123456</span>
				</div>
				<div class="user_right">
					<span class="t1">￥</span>
					<span class="t2">0.00</span>
					<img src="@/assets/images/lottery/looding.png" alt="">
				</div>
			</div>
			<div class="tab_box">
				<div class="tab_left">
					<div class="tab_item" v-for="(item) in tabList" @click="getTab(item.id)" :key='item.name'>
						<img class="icon_img" :src="active == item.id ? item.activeImg : item.img" alt="">
						<span :class="{ select: active == item.id }">{{ item.name }}</span>
						<img class="back_img" :src="active == item.id ? backImg : backImgo" alt="">

					</div>
				</div>
				<div class="tab_right">
					<div class="tab_right_box">
						<div class="tab_right_item" v-for="(item, index) in tabItemList[active - 1]" :key='index' @click="goDetail(item.path)">
							<span v-if="item.name">{{ item.name }}</span>
							<img v-if="item.img" class="item_icon" :src="item.img" alt="">
						</div>
					</div>
					<img @click="goHall" class="hall" src="@/assets/images/lottery/hall.png" alt="">
				</div>
			</div>
			<div class="winning_list">
				<div class="win_title">
					<img src="@/assets/images/lottery/win.png" alt="">
					<h3>最新中奖榜</h3>
				</div>
				<div class="win_box">
					<div class="win_box_item" v-for="(item, index) in 4" :key="index">
						<div class="win_item_left">
							<span class="phone">185****152</span>
							<span>安徽快三</span>
						</div>
						<div class="win_item_right">
							喜中
							<span>1,000,00</span>
							元
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import router from "@/router";
import { ref } from "vue";
const active = ref(1);
const backImg = ref(new URL("@/assets/images/lottery/back-o.png", import.meta.url).href)
const backImgo = ref(new URL("@/assets/images/lottery/back.png", import.meta.url).href)
const tabList = ref([
	{
		id: 1,
		img: new URL("@/assets/images/lottery/kuaisan.png", import.meta.url).href,
		activeImg: new URL("@/assets/images/lottery/kuaisan-o.png", import.meta.url).href,
		name: '快三'
	},
	{
		id: 2,
		img: new URL("@/assets/images/lottery/shishi.png", import.meta.url).href,
		activeImg: new URL("@/assets/images/lottery/shishi-o.png", import.meta.url).href,
		name: '时时彩'
	},
	{
		id: 3,
		img: new URL("@/assets/images/lottery/pk10.png", import.meta.url).href,
		activeImg: new URL("@/assets/images/lottery/pk10-o.png", import.meta.url).href,
		name: 'PK10'
	},
	{
		id: 4,
		img: new URL("@/assets/images/lottery/xuanwu.png", import.meta.url).href,
		activeImg: new URL("@/assets/images/lottery/xuanwu.png", import.meta.url).href,
		name: '11选5'
	},
	{
		id: 5,
		img: new URL("@/assets/images/lottery/liuhe.png", import.meta.url).href,
		activeImg: new URL("@/assets/images/lottery/liuhe-o.png", import.meta.url).href,
		name: '六合彩'
	}
])
const tabItemList = ref([
	[
		{
			name: '好运快三',
			img: new URL("@/assets/images/lottery/kuaisan1.png", import.meta.url).href,
			path: 'fastthree'
		},
		{
			name: '欢乐快三',
			img: new URL("@/assets/images/lottery/kuaisan2.png", import.meta.url).href,
			path: 'fastthree'
		},
		{
			name: '安徽快三',
			img: new URL("@/assets/images/lottery/kuaisan3.png", import.meta.url).href,
			path: 'fastthree'
		},
		{
			name: '上海快三',
			img: new URL("@/assets/images/lottery/kuaisan4.png", import.meta.url).href,
			path: 'fastthree'
		},
		{
			name: '重庆快三',
			img: new URL("@/assets/images/lottery/kuaisan5.png", import.meta.url).href,
			path: 'fastthree'
		},
		{
			name: '江苏快三',
			img: new URL("@/assets/images/lottery/kuaisan6.png", import.meta.url).href,
			path: 'fastthree'
		}
	],
	[
		{
			name: '江西时时彩',
			img: new URL("@/assets/images/lottery/shishi1.png", import.meta.url).href,
			path: 'alwayscolor'
		},
		{
			name: '腾讯分分彩',
			img: new URL("@/assets/images/lottery/shishi2.png", import.meta.url).href,
			path: 'alwayscolor'
		},
		{
			name: '幸运时时彩',
			img: new URL("@/assets/images/lottery/shishi3.png", import.meta.url).href,
			path: 'alwayscolor'
		},
		{
			name: '10分时时彩',
			img: new URL("@/assets/images/lottery/shishi4.png", import.meta.url).href,
			path: 'alwayscolor'
		},
		{
			name: '天津时时彩',
			img: new URL("@/assets/images/lottery/shishi5.png", import.meta.url).href,
			path: 'alwayscolor'
		},
		{
			name: '五分时时彩',
			img: new URL("@/assets/images/lottery/shishi6.png", import.meta.url).href,
			path: 'alwayscolor'
		}
	],
	[
		{
			name: '北京PK10',
			img: new URL("@/assets/images/lottery/pk10-1.png", import.meta.url).href,
			path: 'pk10'
		},
		{
			name: '幸运飞艇',
			img: new URL("@/assets/images/lottery/pk10-2.png", import.meta.url).href,
			path: 'pk10'
		},
		{
			name: '好运飞艇',
			img: new URL("@/assets/images/lottery/pk10-3.png", import.meta.url).href,
			path: 'pk10'
		},
		{
			name: '马耳他飞艇',
			img: new URL("@/assets/images/lottery/pk10-4.png", import.meta.url).href,
			path: 'pk10'
		},
		{
			name: '急速飞艇',
			img: new URL("@/assets/images/lottery/pk10-5.png", import.meta.url).href,
			path: 'pk10'
		},
		{
			name: '五分PK10',
			img: new URL("@/assets/images/lottery/pk10-6.png", import.meta.url).href,
			path: 'pk10'
		}
	],
	[
		{
			name: '极速11选5',
			img: new URL("@/assets/images/lottery/xuanwu1.png", import.meta.url).href,
			path: 'choosefive'
		},
		{
			name: '幸运11选5',
			img: new URL("@/assets/images/lottery/xuanwu2.png", import.meta.url).href,
			path: 'choosefive'
		},
		{
			name: '竞速11选5',
			img: new URL("@/assets/images/lottery/xuanwu3.png", import.meta.url).href,
			path: 'choosefive'
		},
		{
			name: '',
			img: '',
			path: 'choosefive'
		},
		{
			name: '',
			img: '',
			path: 'choosefive'
		},
		{
			name: '',
			img: '',
			path: 'choosefive'
		}
	],
	[
		{
			name: '极速六合彩',
			img: new URL("@/assets/images/lottery/liuhe1.png", import.meta.url).href,
			path: 'alwayscolor'
		},
		{
			name: '5分六合彩',
			img: new URL("@/assets/images/lottery/liuhe2.png", import.meta.url).href,
			path: 'alwayscolor'
		},
		{
			name: '香港六合彩',
			img: new URL("@/assets/images/lottery/liuhe3.png", import.meta.url).href,
			path: 'alwayscolor'
		},
		{
			name: '澳门六合彩',
			img: new URL("@/assets/images/lottery/liuhe4.png", import.meta.url).href,
			path: 'alwayscolor'
		},
		{
			name: '',
			img: '',
			path: 'alwayscolor'
		},
		{
			name: '',
			img: '',
			path: 'alwayscolor'
		}
	],
])
const getTab = (id: number) => {
	active.value = id
}
const onClickLeft = () => {
	router.push({ name: 'home' })
}
const goHall = () => {
	router.push({ name: 'hall' })
}
const goDetail = (path:string) => {
	router.push({ name: path })
}
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

.tab_box {
	display: flex;

	.tab_left {
		display: flex;
		flex-direction: column;
		margin-left: 14px;

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

	.tab_right {
		margin-left: 3px;

		.tab_right_box {
			display: flex;
			flex-wrap: wrap;

			.tab_right_item {
				background-image: url('../../assets/images/lottery/back-r.png');
				background-size: cover;
				width: 91px;
				height: 74px;
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
}

.winning_list {

	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 18px;
	overflow: hidden;

	.win_title {
		width: 334px;
		height: 60px;
		display: flex;
		align-items: center;
		background-color: #FFFFFF;
		border-radius: 10px 10px 0 0;
		margin-bottom: 6px;

		img {
			width: 25px;
			height: 36px;
			margin: 0 4px 0 11px;
		}

		h3 {
			font-size: 17px;
			color: #1E2D49;
		}
	}

	.win_box {
		width: 334px;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #FFFFFF;
		border-radius: 0 0 10px 10px;

		.win_box_item {
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;
			border-bottom: 1px solid #74A7CE;

			.win_item_left {
				display: flex;
				flex-direction: column;
				margin: 11px 0 13px 12px;

				span {
					font-size: 13px;
					color: #74A7CE;
				}

				.phone {
					margin-bottom: 9px;
				}
			}

			.win_item_right {
				margin-right: 13px;
				display: flex;
				align-items: center;
				font-size: 13px;
				color: #1E2D49;

				span {
					color: red;
				}
			}
		}

		.win_box_item:last-child {
			border-bottom: none;
		}
	}
}
</style>
