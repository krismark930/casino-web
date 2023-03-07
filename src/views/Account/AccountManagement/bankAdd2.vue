<template>
    <div class="animated fadeInLeft">
        <van-nav-bar class="border-b-2 border-gray-300" fixed @click-left="onClickLeft">
            <template #left>
                <img class="w-1" referrerpolicy="no-referrer" src="@/assets/images/my/arrow-left.png" />
            </template>
            <template #title>
                <span class="pt-[10px] text-[#454558]">添加银行卡</span>
            </template>
            <template #right> </template>
        </van-nav-bar>
        <div class="py-3 pt-[46px] pb-[60px] text-[13px] bg-blue-50 h-screen">
            <div class=" pt-1 bg-white">
                <div>
                    <label for="name" class="px-2 block font-semibold text-[#454558]">持卡人姓名</label>
                    <div class=" px-2 mt-[7px]  pb-[12px]">
                        <input type="text" v-model="bankCardOwner" placeholder="请输入持卡人姓名，仅支持中文、英文、符号“.”" name="name" id="name"
                            class=" text-[13px] block w-full border-0 border-b border-transparent placeholder-[#CBCBCB]" />
                    </div>
                    <p class="px-2 py-[5px] text-[12px] text-red-500 bg-gray-100">
                        为了您的资金能够迅速到账，请确保填写的姓名与银行卡的 开户姓名一致。
                    </p>
                </div>

                <div class="px-2 mt-[10px]">
                    <span class="font-semibold text-[#454558]">银行卡类型</span>
                    <div class="flex">
                        <div v-for="(item, index) in bankList" :key="index" @click="setBank(item)"
                            :class="[active === item.id? 'border border-blue-600':'border border-gray-300']"
                            class="relative flex justify-center items-center mr-1 mt-[6px] w-[90px] px-[6px] py-[7px]  rounded-sm">
                            <img :src="item.img" class="w-[18px] mr-1" alt="bank"/>
                            <span class="text-blue-700">{{item.name}}</span>
                            <div v-if="active === item.id" class="absolute right-0 bottom-0 image-text_1">
                                <img class="w-[15px] h-[15px]" referrerpolicy="no-referrer"
                                    src="https://lanhu.oss-cn-beijing.aliyuncs.com/psar0m8wrggrj43h4jglt2a1pbq77if1jnf79e9304-f10e-4ff2-9724-bb196a573e26" />
                            </div>
                        </div>
                    </div>
                    <p class="w-full h-[0.5px] bg-[#CBCBCB] mt-[15px]"></p>
                </div>
                <div class="px-2 mt-[14px]">
                    <label for="name" class="block font-semibold text-[#454558] ">所属银行</label>
                    <div class="mt-[5px] border-b border-gray-300 focus-within:border-gray-500 pb-[5px] flex justify-between items-center" @click="selectBank">
                        <input type="text" v-model="bankType" placeholder="请选择银行" name="name" id="name"
                            class="block w-full border-0 border-b border-transparent placeholder-[#CBCBCB]" />
                            <img class="w-[10px] h-[13px] mr-2" src="@/assets/images/my/arrow-right.png" alt="arrow" />
                    </div>
                </div>
                
                <div class="px-2 mt-[14px]">
                    <label for="name" class="block font-semibold text-[#454558] ">银行卡号</label>
                    <div class="mt-[7px] border-b border-gray-300 focus-within:border-gray-500 pb-[5px] flex justify-between items-center">
                        <input type="text" v-model="bankAccount" placeholder="请输入银行卡号" name="name" id="name"
                            class="block w-full border-0 border-b border-transparent placeholder-[#CBCBCB]" />
                        <img class="w-[10px] h-[13px] mr-2" src="@/assets/images/my/arrow-right.png" alt="arrow"/>
                    </div>
                    <div class="text-[12px]  text-[#454558] pt-[5px] pb-1">
                        请认真校对银行卡号，卡号错误资金将无法到账
                    </div>
                </div>
            </div>
            <div class="mx-2 mt-6">
                <button
                    :class="[[ bankCardOwner && bankType && bankAccount ?'bg-blue-400': 'bg-blue-200'], ' text-white px-2 py-[10px] w-full text-[17px]']"
                    @click="goNextStep">
                    下一步
                </button>
            </div>
            <div class="mx-2 mt-2 text-[#CBCBCB] text-[12px] flex justify-center">
                如需帮助，请
                <span class="text-blue-400">联系客服</span>
            </div>
        </div>
        <van-popup v-model:show="show" position="bottom" class="rounded-t-md">
			<div class="rounded-t-md">
				<div class="text-[16px] p-2 flex justify-between">
					<span class="text-blue-400" @click="() => show = false">取消</span>
					<span class="font-bold">选择所属银行</span>
                    <span></span>
				</div>
				<p class="bg-gray-400 h-[1px] "></p>
                <div class="px-2 relative">
                    <input v-model="search" class="rounded-full h-[30px] bg-gray-300 flex justify-center w-full pl-4 my-1 placeholder:text-[15px] placeholder:pb-1 items-center" placeholder="">
                    <img src="@/assets/images/account/icon-search.png" class="w-[20px] absolute top-[5px] left-3"/>
                </div>
                <div v-for="(item, index) in bankCardList" :key="index" class="flex px-2 items-center" @click="selectBankType(item)">
                    <div v-if="search === '' || search===item.name" class="flex px-2 items-center">
                        <img :src="item.img" class="w-[20px]"/>
                        <p class="pl-1 text-[14px] font-bold py-1">{{ item.name }}</p>
                    </div>
                </div>
			</div>
		</van-popup>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router';
import { useBankAccountStore } from '@/stores/bankAccount';
const { setBankAdd } = useBankAccountStore();
const bankCardOwner = ref('');
const bankType = ref('');
const bankAccount = ref('');
const bankCardType = ref('储蓄卡');
const verifyCode = ref('');
const search = ref('');
const active = ref(1);
const show = ref(false);
const selectBank = () => {
    search.value = '';
    show.value = true
}
const cancel = () => {
	show.value = false
}
const commit = () => {
	show.value = false
	router.go(-1)
}
const bankList = ref([
    {
        id: 1,
        img: new URL('@/assets/images/account/icon-wallet.png', import.meta.url).href,
        name: '储蓄卡',
    },
    {
        id: 2,
        img: new URL('@/assets/images/account/icon-bank.png', import.meta.url).href,
        name: '信用卡',
    }
])
const bankCardList = ref([
    {
        id: 1,
        img: new URL('@/assets/images/account/icon-bank1.png', import.meta.url).href,
        name: '中国银行',
    },
    {
        id: 2,
        img: new URL('@/assets/images/account/icon-bank2.png', import.meta.url).href,
        name: '建设银行',
    },
    {
        id: 3,
        img: new URL('@/assets/images/account/icon-bank3.png', import.meta.url).href,
        name: '农业银行',
    },
    {
        id: 4,
        img: new URL('@/assets/images/account/icon-bank4.png', import.meta.url).href,
        name: '工商银行',
    },
    {
        id: 5,
        img: new URL('@/assets/images/account/icon-bank5.png', import.meta.url).href,
        name: '中国邮政储蓄银行',
    },
    {
        id: 6,
        img: new URL('@/assets/images/account/icon-bank6.png', import.meta.url).href,
        name: '招商银行',
    },
    {
        id: 7,
        img: new URL('@/assets/images/account/icon-bank7.png', import.meta.url).href,
        name: '交通银行',
    },
    {
        id: 8,
        img: new URL('@/assets/images/account/icon-bank8.png', import.meta.url).href,
        name: '中信银行',
    },
    {
        id: 9,
        img: new URL('@/assets/images/account/icon-bank9.png', import.meta.url).href,
        name: '光大银行',
    },
    {
        id: 10,
        img: new URL('@/assets/images/account/icon-bank10.png', import.meta.url).href,
        name: '浦发银行',
    },
    {
        id: 11,
        img: new URL('@/assets/images/account/icon-bank11.png', import.meta.url).href,
        name: '广发银行',
    },
    {
        id: 12,
        img: new URL('@/assets/images/account/icon-bank12.png', import.meta.url).href,
        name: '华夏银行',
    },
    {
        id: 13,
        img: new URL('@/assets/images/account/icon-bank13.png', import.meta.url).href,
        name: '兴业银行',
    }
])
const setBank = (item:any) => {
    active.value = item.id;
    bankCardType.value = item.name
}
const goNextStep = () => {
    if( bankCardOwner.value !== "" && bankType.value !== "" && bankAccount.value !== ""){
        setBankAdd({bankCardOwner:bankCardOwner, bankCardType: bankCardType,  bankType:bankType,bankAccount:bankAccount ,bankAddress:''})
        router.push({ name: 'addBank3' });
    }
}
const onClickLeft = () => {
    router.go(-1);
};
const selectBankType = (item:any) => {
    show.value = false
    bankType.value = item.name;
}
</script>
