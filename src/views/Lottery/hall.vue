<template>
	<div>
		<div class="header">
			<van-nav-bar title="彩种大厅" @click-left="onClickLeft" fixed left-arrow />
		</div>
		<div class="hall_box animated fadeInLeft">
			<div class="tab_top">
				<div class="tab_item" v-for="(item) in tabList" @click="getTab(item.id)" :key='item.name'>
					<img class="icon_img" :src="active == item.id ? item.activeImg : item.img" alt="">
					<span :class="{ select: active == item.id }">{{ item.name }}</span>
					<img class="back_img" :src="active == item.id ? backImg : backImgo" alt="">

				</div>
			</div>
			<div class="tab_bottom">
				<div class="tab_bottom_box">
					<div class="tab_bottom_item" v-for="(item, index) in tabItemList" :key='index'>
						<span v-if="item.name">{{ item.name }}</span>
						<img v-if="item.img" class="item_icon" :src="(item as any).img" alt="">
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
const tabList = ref([{
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
const tabItemList = ref([{
	name: '好运快三',
	img: new URL("@/assets/images/lottery/kuaisan1.png", import.meta.url).href
},
{
	name: '欢乐快三',
	img: new URL("@/assets/images/lottery/kuaisan2.png", import.meta.url).href
},
{
	name: '安徽快三',
	img: new URL("@/assets/images/lottery/kuaisan3.png", import.meta.url).href
},
{
	name: '上海快三',
	img: new URL("@/assets/images/lottery/kuaisan4.png", import.meta.url).href
},
{
	name: '江西时时彩',
	img: new URL("@/assets/images/lottery/shishi1.png", import.meta.url).href
},
{
	name: '腾讯分分彩',
	img: new URL("@/assets/images/lottery/shishi2.png", import.meta.url).href
},
{
	name: '幸运时时彩',
	img: new URL("@/assets/images/lottery/shishi3.png", import.meta.url).href
},
{
	name: '10分时时彩',
	img: new URL("@/assets/images/lottery/shishi4.png", import.meta.url).href
},
{
	name: '北京PK10',
	img: new URL("@/assets/images/lottery/pk10-1.png", import.meta.url).href
},
{
	name: '五分PK10',
	img: new URL("@/assets/images/lottery/pk10-6.png", import.meta.url).href
},
{
	name: '幸运飞艇',
	img: new URL("@/assets/images/lottery/pk10-2.png", import.meta.url).href
},
{
	name: '急速飞艇',
	img: new URL("@/assets/images/lottery/pk10-5.png", import.meta.url).href
},
{
	name: '极速11选5',
	img: new URL("@/assets/images/lottery/xuanwu1.png", import.meta.url).href
},
{
	name: '幸运11选5',
	img: new URL("@/assets/images/lottery/xuanwu2.png", import.meta.url).href
},
{
	name: '竞速11选5',
	img: new URL("@/assets/images/lottery/xuanwu3.png", import.meta.url).href
},
{
	name: '重庆快三',
	img: new URL("@/assets/images/lottery/kuaisan5.png", import.meta.url).href
},

{
	name: '极速六合彩',
	img: new URL("@/assets/images/lottery/liuhe1.png", import.meta.url).href
},
{
	name: '5分六合彩',
	img: new URL("@/assets/images/lottery/liuhe2.png", import.meta.url).href
},
{
	name: '香港六合彩',
	img: new URL("@/assets/images/lottery/liuhe3.png", import.meta.url).href
},
{
	name: '澳门六合彩',
	img: new URL("@/assets/images/lottery/liuhe4.png", import.meta.url).href
},
{
	name: '江苏快三',
	img: new URL("@/assets/images/lottery/kuaisan6.png", import.meta.url).href
},
{
	name: '五分时时彩',
	img: new URL("@/assets/images/lottery/shishi5.png", import.meta.url).href
},
{
	name: '天津时时彩',
	img: new URL("@/assets/images/lottery/shishi6.png", import.meta.url).href
},
{
	name: '好运飞艇',
	img: new URL("@/assets/images/lottery/pk10-3.png", import.meta.url).href
},
{
	name: '马耳他飞艇',
	img: new URL("@/assets/images/lottery/pk10-4.png", import.meta.url).href
},
{
	name: '新疆快三',
	img: new URL("@/assets/images/lottery/kuaisan7.png", import.meta.url).href
},
{
	name: '四川快三',
	img: new URL("@/assets/images/lottery/kuaisan8.png", import.meta.url).href
},
{
	name: '湖北快三',
	img: new URL("@/assets/images/lottery/kuaisan9.png", import.meta.url).href
},
{
	name: '湖南快三',
	img: new URL("@/assets/images/lottery/kuaisan10.png", import.meta.url).href
},
{
	name: '河北快三',
	img: new URL("@/assets/images/lottery/kuaisan11.png", import.meta.url).href
},
{
	name: '广西快三',
	img: new URL("@/assets/images/lottery/kuaisan12.png", import.meta.url).href
},
{
	name: '甘肃快三',
	img: new URL("@/assets/images/lottery/kuaisan13.png", import.meta.url).href
},
])
const getTab = (id: number) => {
	active.value = id
}
const onClickLeft = () => {
	router.go(-1)
}
</script>

<style scoped lang="scss">
::v-deep .van-ellipsis {
	color: #454558;
	font-size: 17px;
}

::v-deep .van-nav-bar .van-icon {
	color: #454558;

}

.van-nav-bar {
	background-color: #E8E8E8 !important;
}

.hall_box {
	width: 100%;
	padding-top: 46px;
	padding-bottom: 120px;
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
