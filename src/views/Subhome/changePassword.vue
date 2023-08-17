<template>
	<div>
		<div>
			<van-nav-bar title="修改密码" @click-left="onClickLeft" fixed left-arrow>
			</van-nav-bar>
		</div>
		<div v-if="success" class="content animated fadeInLeft">
			<p>为了安全起见，您必须每30天改变一次密码。</p>
			<p>您的密码必须根据以下规则: <br>
				1. 至少要有两个大或小写英文字母和数字(0-9)组合, <br>
				字数最少6至12个。<br>
				2. 三个不同的字母数字。<br>
				3. 不准许有空格。<br>
			</p>
			<input type="text" v-model="password" placeholder="输入当前密码">
			<input type="text" v-model="newPassword" placeholder="新密码">
			<input type="text" v-model="repeatPassword" placeholder="确认新密码">
			<div class="btn">
				<button @clickt="onClickLeft">取消</button>
				<button @click="submit">提交</button>
			</div>
		</div>
		<div v-if="!success">
			<div class="flex justify-center px-5 py-5">
				<img src="@/assets/images/account/empty.png"/>
			</div>
			<p class="text-center text-blue-400">
				密码修改成功
			</p>
			<p class="text-center text-[15px] text-gray-500">
				success
			</p>
			<div class="mx-2 mt-8">
                <button
                    :class="[[true ?'bg-blue-400': 'bg-blue-200'], ' text-white px-2 py-[10px] w-full text-[17px]']"
                    @click="onClick_2">
                    下一步
                </button>
            </div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Dialog } from 'vant';
import { ref } from 'vue';
import router from '@/router';
import { showConfirmDialog } from 'vant';
const password = ref('');
const newPassword = ref('');
const repeatPassword = ref('');
const success = ref(false);
const onClickLeft = () => {
	router.go(-1)
}
const onClick_2 = () => {
	router.go(-1)
}
const submit = () => {
	showConfirmDialog({
		message: '是否确认提交？',
	}).then(() => {
		// on confirm
		success.value = true;
	})
	.catch(() => {
		// on cancel
	});
	// Dialog.confirm({
	// 	message: '是否确认提交？',
	// })
}

</script>

<style scopen lang="scss">
.content {
	padding-top: 46px;
	background-color: #F1FAFF;
	min-height: -moz-calc(100vh - 46px);
	min-height: -webkit-calc(100vh - 46px);
	min-height: calc(100vh - 46px);
	padding: 46px 20px 0 20px;

	p {
		font-size: 13px;
		color: #666666;
		line-height: 25px;
	}

	p:first-child {
		margin-bottom: 25px;
		margin-top: 20px;
	}

	input {
		width: 307px;
		height: 46px;
		font-size: 13px;
		padding-left: 23px;
		border: 0;
		margin-bottom: 19px;
		border: 1px solid #E3E3E3;
	}

	.btn {
		display: flex;
		justify-content: space-between;

		button {
			width: 153px;
			line-height: 46px;
			font-size: 17px;
			text-align: center;
			background-color: #9A9A9A;
			border: 1px solid #E3E3E3;
		}

		button:last-child {
			background-color: #00ADFF;
			color: #FFFFFF;
		}
	}
}
</style>