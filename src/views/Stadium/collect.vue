<!-- 收藏 -->
<template>
	<div class="animated fadeInLeft">
		<div class="collect_title">
			<span>兴趣赛事</span>
		</div>
		<div class="game_box">
			<div :class="{ gameSelect: select == game.id }" v-for="(game, idx) in gameType" @click="selectGame(game.id)">
				{{ game.name }}
			</div>
		</div>
		<div class="select_box" v-if="select == 1">
			<div :class="{ selects: selectId == select.id }" v-for="(select, idx) in selectList"
				@click="selectSwitch(select.id)">
				{{ select.name }}
			</div>
		</div>
		<div class="collect_center" v-if="false">
			<div class="not">
				<div class="not_top">
					<div></div>
					<img src="@/assets/images/stadiums/store_in.png" alt="">
					<div></div>
				</div>
				<span>选择上面的图标，会将其添加到收藏中。您可以对其 进行分组并轻松访问您感兴趣的所有赛事。</span>
				<img src="@/assets/images/stadiums/not-icon.png" alt="">
			</div>
		</div>
		<div>
			<BK_Main v-if="select == 2" />
			<FT_Favorite_Main v-if="select == 1 && selectId == 1" />
			<FT_Favorite_Score v-if="select == 1 && selectId == 2" />
		</div>
	</div>
</template>

<script setup lang="ts">
import BK_Main from './components/bk_components/BK_Main.vue'
import FT_Favorite_Main from './components/fk_components/FT_Favorite_Main.vue'
import FT_Favorite_Score from './components/fk_components/FT_Favorite_Score.vue'
import { ref } from 'vue';
const list = ref([]);
const value1 = ref(1);
const selectId = ref(1);
const select = ref(1);
const selectList = ref([
	{
		name: '主要玩法',
		id: 1
	},
	{
		name: '波胆',
		id: 2
	}
]);
const gameType = ref([
	{
		name: '足球',
		id: 1
	},
	{
		name: '篮球',
		id: 2
	}
]);
const selectSwitch = (id: number) => {
	selectId.value = id
}
const selectGame = (id: number) => {
	select.value = id
}
</script>

<style scoped lang="scss">
.collect_title {
	width: 100%;
	height: 43px;
	font-size: 17px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #4EABFF;

}

.not {
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 13px;
	margin-top: 24px;

	.not_top {
		display: flex;
		align-items: center;
		justify-content: space-between;

		div {
			width: 120px;
			height: 1px;
			background-color: #FFAD56;
		}

		img {
			margin: 0 25px;
		}
	}

	img {
		width: 202px;
		height: 137px;
	}

	div {
		img {
			width: 41px;
			height: 41px;
		}
	}

	span {
		width: 302px;
		text-align: center;
		margin: 26px 0 32px 0;
	}
}

.select_box {
	display: flex;

	div {
		width: 50%;
		height: 39px;
		background-color: #FFFFFF;
		color: #5C546A;
		font-size: 17px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.selects {
		background-color: #4EABFF;
		color: #FFFFFF;
	}
}

.game_box {
	display: flex;
	justify-content: center;
	padding: 7px 0;
	background-color: #F3FAFF;

	div {
		width: 73px;
		height: 29px;
		border-radius: 29px;
		background-color: #D7D7D7;
		color: #5C546A;
		font-size: 17px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.gameSelect {
		background-color: #4EABFF;
		color: #FFFFFF;
	}
}
</style>