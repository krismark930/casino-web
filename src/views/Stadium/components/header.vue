<template>
	<div class="header">
		<img @click="onClickLeft" class="back_icon" src="@/assets/images/stadiums/back.png" alt="">
		<div class="user_box">
			<img @click="goSubHome" src="@/assets/images/stadiums/user.png" alt="">
			<div class="money">
				<div>{{ userData.UserName }}</div>
				<div>{{ userData.Money }}</div>
			</div>
		</div>
		<img @click="openPopup" class="search" src="@/assets/images/stadiums/search.png" alt="">
	</div>
</template>

<script lang="ts">
import { useAuthStore } from '@/stores/auth';
import router from '@/router'
import { useRoute } from 'vue-router';

export default ({
	name: "Header",
	setup() {
		const route = useRoute();
		const { dispatchSetMoney } = useAuthStore();
		return {
			route,
			dispatchSetMoney
		}
	},
	data() {
		return {

		}
	},
	sockets: {
		connect: function () {
			console.log('socket to notification channel connected')
		},
		receivedMoney(money: any) {
			console.log(money);
			this.dispatchSetMoney(money);
		}
	},
	methods: {
		onClickLeft: function () {
			if (this.route.name == 'stadiumshomepage') {
				router.push({ name: 'home' })
			} else {
				router.go(-1)
			}
		},
		goSubHome: function () {
			router.push({ name: 'Subhome' })
		}
	},
	computed: {
		userData: function () {
			const { getUser } = useAuthStore();
			return getUser;
		}
	}
})
</script>

<style scoped lang="scss">
.header {
	height: 43px;
	padding: 0 13px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	top: 0;
	background-color: #F3FAFF;
	z-index: 5;

	.back_icon {
		width: 9px;
		height: 16px;
		margin-right: 26px;
	}

	.user_box {
		margin-top: 6px;
		display: flex;
		width: 293px;

		img {
			width: 33px;
			height: 33px;
		}

		.money {
			margin-left: 6px;
			display: flex;
			flex-direction: column;
			font-size: 14px;
			color: #000000;
			align-items: center;
		}
	}

	.search {
		width: 21px;
		height: 22px;
	}
}
</style>