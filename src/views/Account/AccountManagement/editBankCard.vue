<template>
    <div class="animated fadeInLeft">
        <van-nav-bar class="border-b-2 border-gray-300" fixed @click-left="onClickLeft">
            <template #left>
                <img class="w-1" referrerpolicy="no-referrer" src="@/assets/images/my/arrow-left.png" />
            </template>
            <template #title>
                <span class="pt-[10px] text-[#454558]">编辑银行卡</span>
            </template>
            <template #right> </template>
        </van-nav-bar>

        <div class="pt-[46px] pb-[60px] bg-[#f7f7ff] h-screen">
            <div class=" px-2 bg-white  text-[12px] pb-1">
                <div class="flex justify-between mt-1 pt-[10px]">
                    <div class="flex">
                        <p>银行卡 </p>
                         <p>(1/10)</p>
                         <h1><font-awesome-icon icon=”hat-wizard” /></h1>
                    </div>
                    <div class="flex border border-blue-400 px-[5px] items-center rounded-sm" @click="() => router.push('addBank')">
                            添加银行卡
                    </div>
                </div>
                <p class="w-full h-[0.5px] bg-[#CBCBCB] mt-[15px]"></p>
            </div>
            <div 
                class="bg-white flex justify-between items-center px-2 py-[10px]">
                <div class="image-text_1 flex justify-between items-center">
                    <img class="w-[20px]" referrerpolicy="no-referrer" src="@/assets/images/my/bank-mark.png" />
                    <span class="text-[12px] pl-1">农业银行</span>
                </div>
                <span class="text-[13px] font-bold">622848******888</span>
                <img class="w-[12px]" referrerpolicy="no-referrer" src="@/assets/images/account/icon-delete.png" @click="deleteBank"/>
            </div>
            
            <div class="px-2  bg-white py-1 ">
                <div class="text-[12px] text-[#454558] pb-1">持卡人姓名</div>
                <div class="text-[15px] flex justify-between">
                    <input type="text" v-model="cardName" placeholder="" name="name" id="name"
                        class="block w-1/2 border-0 border-b border-transparent placeholder-[#CBCBCB]" />
                        <img v-if="cardName" @click="()=> cardName = ''" class="w-[12px] h-[12px] mt-[5px]" referrerpolicy="no-referrer" src="@/assets/images/account/icon-close.png" />
                </div>
            </div>
            <p class="w-full h-[1px] bg-[#CBCBCB] ml-2"></p>
            <p  class="px-2  bg-white text-[12px] pt-1">银行卡类型 </p>
            <div 
                class="bg-white flex justify-between items-center px-2 py-[10px]">
                <div class="image-text_1 items-center">
                    
                    <div class="image-text_1 flex justify-between items-center">
                        <img class="w-[20px]" referrerpolicy="no-referrer" src="@/assets/images/my/bank-mark.png" />
                        <span class="text-[12px] pl-1">农业银行</span>
                    </div>
                </div>
                <img class="w-[7px] h-[13px] ml-1 " src="@/assets/images/my/arrow-right.png" alt="arrow"/>
            </div>
            <p class="w-full h-[0.5px] bg-[#CBCBCB] ml-2"></p>
            <div class="px-2  bg-white py-1 ">
                <div class="text-[12px] text-[#454558] pb-1">银行卡号</div>
                <div class="text-[15px] flex justify-between">
                    <input type="text" v-model="cardNumber" placeholder="" name="name" id="name"
                        class="block w-1/2 border-0 border-b border-transparent placeholder-[#CBCBCB]" />
                        <img v-if="cardNumber" @click="()=> cardNumber = ''" class="w-[12px] h-[12px] mt-[5px]" referrerpolicy="no-referrer" src="@/assets/images/account/icon-close.png" />
                </div>
                <p class="w-screen h-[0.5px] bg-[#CBCBCB] my-1"></p>
                <p class="text-[12px] text-gray-500">
                    请认真校对银行卡号，卡号错误资金将无法到账
                </p>
            </div>
            <div class="my-3 mx-2">
                <button
                    :class="[{ 'bg-blue-400': !cardNumber || !cardName }, 'bg-blue-400 text-white px-2 py-[10px] w-full text-[17px]']"
                    @click="submit">
                    提交
                </button>
            </div>
            <div class="text-[#8289AB] text-[12px] flex justify-center">
                如需帮助，请 <span class="text-blue-500">联系客服</span>
            </div>
        </div>
        <van-overlay :show="show">
			<div class="wrapper" @click.stop>
				<div class="wrapper_box">
					<div class=" flex justify-center w-full py-3">确定删除该银行卡？</div>
					<p class="bg-gray-500 h-[1px] w-full mt-1"></p>
                    <div class="button rounded-md">
						<button @click="cancel" class="bt1  rounded-bl-md">我再想想</button>
						<button @click="commit" class="rounded-b-md">确定删除</button>
					</div>
				</div>
			</div>
		</van-overlay>
    </div>
</template>
<script setup lang="ts">
import router from '@/router';
import {ref} from 'vue';
import { showToast } from 'vant';
const cardNumber = ref('62284888888888888');
const cardName = ref('黄川');
const show = ref(false)
const onClickLeft = () => {
    router.go(-1);
};
const deleteBank = () => {
    show.value = true;
}
const submit = () => {
	//router.push({ name: 'addBank' })
}
const cancel = () => {
	show.value = false
}
const commit = () => {
	show.value = false
	showToast({
        message: "删除成功",
        icon: new URL('@/assets/images/account/icon-success.png', import.meta.url).href,
    })
}

</script>
<style scoped lang="scss">
.wrapper {
	width: 100%;
	display: flex;
	justify-content: center;
	.wrapper_box {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
        justify-content: flex-start;
		font-size: 16px;
		width: 280px;
		height: 150px;
		background-color: #FFFFFF;
		margin-top: 250px;
        padding-left: 0px;
        padding-top: 10px;
        padding-bottom: 0px;
        border-radius: 10px;

		span {
			line-height: 45px;
			width: 100%;
			border-bottom: 1px solid #e9e9e9;
			text-align: start;
		}

		.button {
			width: 100%;
			height: 100px;
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
                color: rgb(60, 58, 58);
				border-right: 1px solid #e9e9e9;
			}
		}
	}
}
</style>