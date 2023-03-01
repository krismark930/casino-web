<template>
    <div class="animated fadeInLeft h-screen">
        <van-nav-bar class="border-b-2 border-gray-300" fixed @click-left="onClickLeft">
            <template #left>
                <img class="w-1" referrerpolicy="no-referrer" src="@/assets/images/my/arrow-left.png" />
            </template>
            <template #title>
                <p class="pt-[10px] text-[#454558]">存款信息</p>
            </template>
            <template #right> </template>
        </van-nav-bar>
        <div class="pt-[30px] pb-[60px] bg-gray-100">
            <div class="text-[16px]">
                <div class="bg-white pt-[50px] pb-[20px]">
                    <div class="flex justify-center items-end">
                        <p class="pb-[2px]">￥</p>
                        <p class="text-[25px] font-bold">{{money}}</p>
                    </div>
                    <div class="flex justify-center">
                        <p class="font-bold">壹仟圆整</p>
                    </div>
                    <div class="flex justify-center text-[11px] pt-[10px] tracking-[2px]">
                        <p class="">请在</p>
                        <p class=""></p>
                        <p class="text-blue-400"> 00:29:59</p>
                        <p class="">内完成支付</p>
                    </div>
                    <div class="flex justify-center text-[11px] pt-[10px] tracking-[2px]">
                        
                        <p>如已完成支付，请</p>
                        <p class="text-blue-400">联系客服</p>
                        <p class="">确认</p>
                    </div>
                </div>
                <div class="bg-white mt-[30px] mx-2 px-3 py-3 pb-[20px] text-[12px]">
                    <div class="flex justify-between">
                        <p class="">存款方式</p>
                        <p class="">易币付虚拟币</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="">{{isCrypto ?  'Wallet Address' :'订单号'}}</p>
                        <div class="flex items-center">
                            <p class="pr-1"
                                >{{isCrypto ? bank?.bankaddress: bank?.bankno }}</p
                            >
                            <img
                                class="w-[10px] h-[13px]"
                                referrerpolicy="no-referrer"
                                src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps61ydhsyzpds0ikxbmjp1vzjmlvwq0jdx1c7d35c83-8844-4270-a31f-ccbec7996ef5"
                            />
                        </div>
                    </div>
                </div>
                <div class="fixed bottom-0 w-full  border-t-2 border-gray-300 py-1 px-[15px]  rounded-[7px]">
                    <div class="w-full flex justify-center gap-1">
                        <button class="button_1 flex w-full justify-center  py-1 border-2 border-blue-500 rounded-sm" @click="deleteResult">
                            <p class="text-blue-500">取消存款申请</p>
                        </button>

                        <button class="button_1 flex w-full justify-center  py-1 border-2 border-blue-500 rounded-sm bg-blue-500" @click="submitResult">
                            <p class="text-white">确定</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <van-overlay :show="show">
			<div class="wrapper" @click.stop>
				<div class="wrapper_box">
					<div class="font-bold flex justify-center w-full pt-2">是否取消本次申请？</div>
                    <div class="flex justify-start text-[13px] pr-2 pt-1 pl-2 text-[#454558]">如果您已完成存款，请勿取消，我们将尽快为您处理！</div>
					<p class="bg-gray-400 h-[1px] w-full mt-1"></p>
                    <div class="button rounded-md">
						<button @click="cancel" class="bt1 font-bold rounded-b-md">我再想想</button>
						<button @click="commit" class="rounded-b-md">确定取消</button>
					</div>
				</div>
			</div>
		</van-overlay>
    </div>
</template>
<script setup lang="ts">
import {ref, onMounted} from 'vue';
import router from '@/router';
import { useRoute } from 'vue-router';
import { showToast } from 'vant';
import { storeToRefs } from "pinia";
import { useDepositStore } from '@/stores/deposit';
import {useAuthStore } from '@/stores/auth';
const route = useRoute();
const show = ref(false);
const bank = ref();
const money = ref(0);
const name = ref('');
const {
    getBanks,
    isCrypto
} = storeToRefs(useDepositStore());
const {
    sumbitDeposit
} = useDepositStore();
const {
    user,
} = storeToRefs(useAuthStore());

onMounted(() => {
    let bankID  = route.params.bankID;
    money.value = route.params.money;
    name.value = route.params.name;
    getBanks.value.map((item:any) => {
        if(item.ID === parseInt(bankID.toString())){
            bank.value = item;
        }
    })
})
const onClick_1 = () => {
    router.push({ name: 'depositInformation' });
}

const onClickLeft = () => {
    router.go(-1);
}
const cancel = () => {
	show.value = false
}
const commit = () => {
	show.value = false
    showToast({
        message: "订单已取消",
        icon: new URL('@/assets/images/account/icon-success.png', import.meta.url).href,
    })
    router.go(-1)
}
const deleteResult = () => {
    show.value = true;
}
const submitResult = async () => {
    let response = await sumbitDeposit(user.value.id, bank.value, money.value, name.value);
    if(response.success){
        showToast({
            message: "存款成功",
            icon: new URL('@/assets/images/account/icon-success.png', import.meta.url).href,
        })
        router.go(-1)
    }
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
		height: 160px;
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