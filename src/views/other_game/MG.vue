<!-- 彩票首页 -->
<template>
	<div style="background-color: #DCF4FF;">
		<div class="header">
			<van-nav-bar title="开元棋牌" @click-left="onClickLeft" fixed left-arrow />
		</div>
		<div class="lottery_box animated fadeInLeft">
			<div class="banner_box">
				<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
					<van-swipe-item v-for="(item, index) in swipeItemList" :key='index + 50'>
						<img class="banner_img" :src="item.icon" alt="">
					</van-swipe-item>
				</van-swipe>
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
						<div class="tab_bottom_item" v-for="(item, index) in mgGameList" :key='index' @click="goDetail(item.GameType)">
							<span v-if="item.GameName" class="font-bold">{{ item.GameName }}</span>
							<img v-if="item.ZH_Logo_File" class="item_icon" :src="(item as any).ZH_Logo_File" alt="">
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import { ElLoading } from "element-plus";
import { mgGameStore } from '@/stores/mg_game';
import {useRouter} from "vue-router";
import { ref, computed, onMounted } from "vue";
import {showToast} from "vant";
import { storeToRefs } from "pinia";
const router = useRouter();
const { dispatchMGGameAll } = mgGameStore();
const { dispatchRedirectMGUrl } = mgGameStore();
const swipeItemList = ref([
	{
		id: 1,
		icon: "http://pic.pj6678.com/mg/JungleJimandtheLostSphinx.png"	
	},
	{
		id: 2,
		icon: "http://pic.pj6678.com/mg/AstroLegendsLyraandErion.png"	
	},
	{
		id: 3,
		icon: "http://pic.pj6678.com/mg/theIncredibleBalloonMachine.png"	
	},
])
const onClickLeft = () => {
	router.push({ name: 'home' })
}
const user = computed(() => {
	const { getUser } = storeToRefs(useAuthStore());
	return getUser.value;
})
const token = computed(() => {
	const { getToken } = storeToRefs(useAuthStore());
	return getToken.value;
})
const redirectMGUrl = computed(() => {
	const {getRedirectUrl} = storeToRefs(mgGameStore());
	return getRedirectUrl.value;
})
const mgGameList = computed(() => {
	const {getMGGameList} = storeToRefs(mgGameStore());
	return getMGGameList.value
})
const success = computed(() => {
	const {getSuccess} = storeToRefs(mgGameStore());
	return getSuccess.value;
})
const goDetail = async (game_type: any) => {
	if (user.value.id == undefined) {
		showToast("您还没有登录或登录超时，请重新登录......");
		router.push({ name: "login" });
		return;
	}
	if (user.value.MG == 0) {
		showToast("开元棋牌维护中，请稍候再试......");
		return;
	}
    const loading = ElLoading.service({
        lock: true,
        text: "加载中...",
        background: "rgba(0, 0, 0, 0.7)",
    });
	await dispatchRedirectMGUrl({game_type}, token.value);
	loading.close();
    if (success.value) {
        if (redirectMGUrl.value != "") {
            window.open(redirectMGUrl.value, '_blank');
        }
    } else {
        showToast(errMessage.value);
    }
}
onMounted(async () => {
	await dispatchMGGameAll({});
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
				height: 40px;
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
