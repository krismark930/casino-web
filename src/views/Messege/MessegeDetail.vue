<template>
	<div>
		<div class="header">
			<van-nav-bar title="消息中心" @click-left="onClickLeft" @click-right="onClickRight" fixed left-arrow>
				<template #right>
					<img class="menu" src="@/assets/images/messege/delete.png" alt="">
				</template>
			</van-nav-bar>
		</div>
		<div class="center_box animated fadeInLeft">
			<div class="text_box">
				<div class="title_box">
					<div class="news_l">
						<img src="@/assets/images/messege/icon.png" alt="">
					</div>
					<div class="news_r">
						<span class="title">【热门赛事快报】</span>
						<span class="time">2022-11-13 15:05:34</span>
					</div>
				</div>
				<div class="content_box">
					<span>
						温馨提示：热门赛事旗舰充提渠道繁忙，会给哦韩国hi都是 二的哥特人干活的分公司打发时光的辐射热豆腐干地方是告 诉对方的身份个人
					</span>
				</div>
			</div>

		</div>
		<van-overlay :show="show">
			<div class="wrapper" @click.stop>
				<div class="wrapper_box">
					<span>您确定要删除吗？</span>
					<div class="button">
						<button @click="cancel" class="bt1">取消</button>
						<button @click="commit">确定</button>
					</div>
				</div>
			</div>
		</van-overlay>
	</div>
</template>

<script setup lang="ts">
import { showToast } from 'vant'
import { ref } from 'vue'
import router from '@/router';

const show = ref(false)
const onClickLeft = () => {
	router.go(-1)
}
const onClickRight = () => {
	show.value = true
}
const cancel = () => {
	show.value = false
}
const commit = () => {
	show.value = false
	showToast('删除成功！');
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

.menu {
	width: 18px;
	height: 16px;
}

.center_box {
	padding-top: 46px;

	.text_box {
		border-top: 2px solid #e9e9e9;

		.title_box {
			display: flex;
			align-items: center;
			height: 58px;
			margin: 0 14px;
			border-bottom: 1px solid #e9e9e9;

			.news_l {
				img {
					width: 32px;
					height: 32px;
					margin-right: 16px;
				}
			}

			.news_r {
				display: flex;
				flex-direction: column;

				.title {
					font-size: 15px;
					color: #1B1B1B;
					margin-bottom: 6px;
				}

				.time {
					font-size: 11px;
					color: #A8ABAD;
					margin-left: 5px;
				}
			}
		}

		.content_box {
			margin: 19px 14px 0 14px;

			span {
				color: #1B1B1B;
				font-size: 14px;
				line-height: 18px;
			}
		}
	}
}

.wrapper {
	width: 100%;
	display: flex;
	justify-content: center;

	.wrapper_box {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 17px;
		width: 258px;
		height: 90px;
		background-color: #FFFFFF;
		margin-top: 250px;

		span {
			line-height: 45px;
			width: 100%;
			border-bottom: 1px solid #e9e9e9;
			text-align: center;
		}

		.button {
			width: 100%;
			height: 44px;
			display: flex;
			align-items: center;

			button {
				color: #4EABFF;
				width: 50%;
				height: 100%;
				background-color: #FFFFFF;
				padding: 0;
				margin: 0;
				border: 0;
			}

			.bt1 {
				border-right: 1px solid #e9e9e9;
			}
		}
	}
}
</style>