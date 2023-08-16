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
						<span class="title">【{{messageItem.Subject}}】</span>
						<span class="time">{{messageItem.Time}}</span>
					</div>
				</div>
				<div class="content_box">
					<span>
						{{ messageItem.Message }}
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
import { ref, computed, onMounted } from 'vue'
import { messageStore } from '@/stores/message';
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';
import router from '@/router';
import { useRoute } from 'vue-router';

const route = useRoute();
const {dispatchMessageItemByID} = messageStore();
const {dispatchDeleteMessageItemByID} = messageStore();

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
const commit = async () => {
	await dispatchDeleteMessageItemByID({ID: messageItem.value.ID}, token.value);
	show.value = false
	showToast('删除成功！');
	router.go(-1)
}
const token = computed(() => {
	const {getToken} = storeToRefs(useAuthStore());
	return getToken.value;
})
const messageItem = computed(() => {
	const {getMessageItem} = storeToRefs(messageStore());
	return getMessageItem.value;
})
onMounted(async () => {
	let id = route.query.id;
	await dispatchMessageItemByID({ID: id}, token.value);
})
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