<template>
	<div class="sub_box animated fadeInLeft">
		<div style="position: absolute; top: 20px; left: 30px;">
			<van-icon name="arrow-left" size="1rem" @click="goBeforePage" />
		</div>
		<div class="user_box">
			<img src="@/assets/images/my/avatar.png" alt="">
			<span>你好，中国赌王</span>
			<span>{{ moment().tz("Asia/Hong_Kong").format("YYYY-MM-DD HH:mm:ss") }}</span>
		</div>
		<div class="money">
			<div>
				<span>余额</span>
				<span>RMB {{ getUser.id != undefined ? getUser.total_money.toFixed(2) : 0 }}</span>
			</div>
			<div>
				<span>未结算注单</span>
				<span>RMB {{ Number(notBetScore).toFixed(2) }}</span>
			</div>
		</div>
		<div class="configure">
			<!-- <div v-for="(item, index) in configureList" :key="index"
				class="flex text-[13px] px-2 py-1 items-center bg-white border-b">
				<img class="w-[20px] h-[20px]" referrerpolicy="no-referrer" :src="item.icon" />
				<div class="w-full">
					<div class="pl-2 flex w-full justify-between items-center">
						<p class="">
							{{ item.name }}
							<span v-if="item.name === '语言'" class="text-orange-100">
								（{{ lang.title }}）
							</span>
						</p>
					</div>
				</div>
			</div> -->
			<van-cell is-link @click="goDetail((item as any).path, item.name)" v-for="(item, index) in configureList"
				:key="index">
				<template #title>
					<div class="configure_left relative">
						<img :src="item.icon" alt="">
						<span>{{ item.name }}</span>
						<p v-if="item.name == '语言'">({{ langName }})</p>
					</div>
				</template>
			</van-cell>
			<div class="language-position bg-gray-500 text-white rounded-sm" v-show="show">
				<div v-for="(item, index) in langList" :key="index" @click="selectLang(item)"
					:class="[lang.id === item.id ? ' bg-blue-400 ' : '']"
					class="flex text-[13px] px-2 py-1 items-center w-[280px] rounded-sm">
					<img class="w-[30px] h-[30px]" referrerpolicy="no-referrer" :src="item.icon" />
					<div class="w-full pl-2">
						<p class="text-[15px]">{{ item.title }}</p>
						<p class="text-[10px]">{{ item.name }}</p>
					</div>
				</div>
				<p class="bg-gray-400 h-[0.5px]"></p>
			</div>
		</div>
		<!-- <van-popup v-model:show="show" position="bottom">
			<div class="pupop_box">
				<div class="pupop_title">
					<span>语言设置</span>
					<span>（{{ langName }}）</span>
				</div>
				<div class="pupop_item" v-for="(item, index) in langList" :class='{ select: lang == item.lang }'
					@click="selectLang(item)">
					<img src="@/assets/images/subhome/select1.png" alt="">
					<div>
						<span>{{ item.name }}</span>
						<span>{{ item.subName }}</span>
					</div>
				</div>
			</div>
		</van-popup> -->
	</div>
</template>

<script setup lang="ts">
import moment from 'moment-timezone';
import { ref, onMounted, computed } from "vue";
import router from "@/router";
import { storeToRefs } from 'pinia';
import { useI18n } from "vue-i18n";
import { useAuthStore } from "@/stores/auth";
import { subHomeStore } from "@/stores/subHome";

const { getUser, getToken } = storeToRefs(useAuthStore());
const { getNotBetScore } = storeToRefs(subHomeStore());

const i18n = useI18n()
const show = ref(false);
const langName = ref('简体中文');
const configureList = ref([
	{
		name: '语言',
		icon: new URL("@/assets/images/subhome/icon1.png", import.meta.url).href
	},
	{
		name: '个人讯息',
		icon: new URL("@/assets/images/subhome/icon2.png", import.meta.url).href,
		path: 'personal'
	},
	{
		name: '修改密码',
		icon: new URL("@/assets/images/subhome/icon3.png", import.meta.url).href,
		path: 'changePassword'
	},
	{
		name: '体育玩法规则',
		icon: new URL("@/assets/images/subhome/icon4.png", import.meta.url).href,
		path: 'sports'
	},
	{
		name: '规则与条款',
		icon: new URL("@/assets/images/subhome/icon5.png", import.meta.url).href,
		path: 'rules'
	},
	{
		name: '详情设定',
		icon: new URL("@/assets/images/subhome/icon6.png", import.meta.url).href,
		path: 'settings'
	},
	{
		name: '赔率转换',
		icon: new URL("@/assets/images/subhome/icon7.png", import.meta.url).href,
		path: 'conversion'
	},
	{
		name: '系统需求',
		icon: new URL("@/assets/images/subhome/icon8.png", import.meta.url).href,
		path: 'system'
	},
	{
		name: '联系我们',
		icon: new URL("@/assets/images/subhome/icon9.png", import.meta.url).href
	}
]);
const lang = ref({
	id: 1,
	icon: new URL("@/assets/images/subhome/select1.png", import.meta.url).href,
	title: '简体中文',
	name: '简体中文',
	lang: 'cn'
});
const langList = ref([
	{
		id: 1,
		icon: new URL("@/assets/images/subhome/select1.png", import.meta.url).href,
		title: '简体中文',
		name: '简体中文',
		lang: 'cn'
	},
	{
		id: 2,
		icon: new URL("@/assets/images/subhome/select2.png", import.meta.url).href,
		title: '繁軆中文',
		name: '繁軆中文',
		lang: 'tc'
	},
	{
		id: 3,
		icon: new URL("@/assets/images/subhome/select3.png", import.meta.url).href,
		title: 'English',
		name: '英文',
		lang: 'en'
	}
])
const goDetail = (path: string, subName: string) => {
	if (path) {
		router.push({ name: path })
	} else {
		if (subName == '语言') {
			show.value = true
		}
	}
}
const notBetScore = computed(() => {
	return getNotBetScore.value;
})
const goBeforePage = () => {
	router.go(-1);
}
const selectLang = (item: any) => {
	lang.value = item.lang
	langName.value = item.name
	i18n.locale.value = item.lang
	console.log(i18n.t('home.text'))
	show.value = false
}
onMounted(async () => {
	const { dispatchNotBetScore } = subHomeStore();
	console.log(getUser);
	if (getUser.id != undefined) {
		await dispatchNotBetScore(getToken.value);
	}
})
</script>

<style scoped lang="scss">
.sub_box {
	background-color: #F1FAFF;
	padding: 0 13px;
	font-size: 13px;
	min-height: 100vh;

	.user_box {
		color: #676782;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-bottom: 11px;

		img {
			width: 38px;
			height: 38px;
			margin-top: 17px;
		}

		span {
			margin-top: 11px;
		}
	}

	.money {
		display: flex;
		justify-content: space-between;
		padding: 9px 54px;
		background-color: #FFFFFF;
		border: 1px solid #E3E3E3;
		border-radius: 10px;
		margin-bottom: 15px;

		div {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			span:first-child {
				color: #676782;
			}

			span:last-child {
				font-weight: 600;
			}
		}
	}

	.configure {
		.configure_left {
			display: flex;
			align-items: center;

			img {
				width: 20px;
				margin-right: 7px;
			}

			span {
				font-size: 13px;
				color: #676782;
			}

			p {
				color: #FF5200;
				margin-left: 8px;
			}
		}
	}

	.pupop_box {
		font-size: 13px;
		height: 182px;
		background: #FFFFFF;
		box-shadow: 0px 0px 10px 0px rgba(87, 127, 173, 0.63);
		border-radius: 10px;
		margin-bottom: 10px;

		div {
			display: flex;
			align-items: center;
		}

		.pupop_title {
			height: 48px;
			padding-left: 13px;

			span:last-child {
				color: #FF5200;
			}
		}

		.pupop_item {
			height: 44px;
			padding-left: 13px;
			border-bottom: 1px solid #CACACA;

			img {
				width: 21px;
				margin-right: 14px;
			}

			div {
				height: 44px;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: flex-start;

				span:first-child {
					font-weight: 600;
				}

				span:last-child {
					font-size: 10px;
				}
			}

			// 
		}

		.pupop_item:last-child {
			margin-bottom: 10px;
		}

		.select {
			background-color: #00ADFF;
			color: #FFFFFF;
		}
	}
}

.language-position {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>