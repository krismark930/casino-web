<template>
	<van-tabbar class="van_tabbar" route inactive-color="#AEADC4">
		<!-- badge="3" -->
		<van-tabbar-item v-for="(item, index) in footerList" :key="index" :to="item.path">
			<span>{{ item.name }}</span>
			<template #icon="props">
				<img :src="props.active ? item.icon.active : item.icon.inactive" />
			</template>
		</van-tabbar-item>
	</van-tabbar>
</template>

<script setup lang="ts">
import { ref } from "vue";
const active = ref(1);
const footerList = ref([{
	name: '首页',
	path: '/lottery',
	icon: {
		active: new URL("@/assets/images/lottery/footer1.png", import.meta.url).href,
		inactive: new URL("@/assets/images/lottery/footer1.png", import.meta.url).href,
	},
},
{
	name: '投注记录',
	path: '/record',
	icon: {
		active: new URL("@/assets/images/lottery/footer2.png", import.meta.url).href,
		inactive: new URL("@/assets/images/lottery/footer2.png", import.meta.url).href,
	},
},
{
	name: '走势',
	path: '/trend',
	icon: {
		active: new URL("@/assets/images/lottery/footer3.png", import.meta.url).href,
		inactive: new URL("@/assets/images/lottery/footer3.png", import.meta.url).href,
	},
},
{
	name: '我的',
	path: '/lotteryMy',
	icon: {
		active: new URL("@/assets/images/lottery/footer4.png", import.meta.url).href,
		inactive: new URL("@/assets/images/lottery/footer4.png", import.meta.url).href,
	},
}
])
</script>

<style lang="scss">
.van_tabbar {
	z-index: 5;
	border-radius: 16px 16px 0 0;
	box-shadow: 0px -6px 5px 0px #75739229;
}
</style>