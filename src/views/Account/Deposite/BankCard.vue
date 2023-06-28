<template>
    <div>
        <div class="mt-[10px] bg-white p-2">
            <div class="flex items-start">
                <span class="font-medium text-[#EB2020] text-[25px] ">*</span>
                <span class="font-medium text-[#454558] w-[130px] pt-[5px]">存款人姓名</span>
                <input type="text" v-model="name" placeholder="请输入存款人姓名" name="name" id="name"
                    class="block w-full border-0 border-b border-transparent placeholder-[#CBCBCB] placeholder:text-[15px] text-[20px] font-bold" />
            </div>
            <p class="w-full h-[1px] bg-gray-200 mb-[2px]"></p>
            <span class="font-medium text-[#EB2020] text-[12px] ">为及时到账，请务必输入正确的存款人姓名</span>
        </div>
        <div class="px-2 bg-white mt-[10px]">
            <span class="font-semibold text-[#454558]">银行卡类型</span>
            <div class="flex">
                <div v-for="(item, index) in bankList" :key="index" @click="setBank(item)"
                    :class="[active === item.id ? 'border border-blue-600' : 'border border-gray-300']"
                    class="relative flex justify-center items-center mr-1 mt-[6px] w-[90px] px-[6px] py-[7px]  rounded-sm">
                    <img :src="item.img" class="w-[18px] mr-1" alt="bank" />
                    <span class="text-blue-700">{{ item.name }}</span>
                    <div v-if="active === item.id" class="absolute right-0 bottom-0 image-text_1">
                        <img class="w-[15px] h-[15px]" referrerpolicy="no-referrer"
                            src="https://lanhu.oss-cn-beijing.aliyuncs.com/psar0m8wrggrj43h4jglt2a1pbq77if1jnf79e9304-f10e-4ff2-9724-bb196a573e26" />
                    </div>
                </div>
            </div>
            <p class="w-full h-[0.5px] bg-[#CBCBCB] mt-[15px]"></p>
        </div>
        <div class="px-2 bg-white mt-[14px]">
            <label for="name" class="block font-semibold text-[#454558] ">所属银行</label>
            <div class="mt-[5px] border-b border-gray-300 focus-within:border-gray-500 pb-[5px] flex justify-between items-center"
                @click="selectBank">
                <input type="text" v-model="bankType" placeholder="请选择银行" name="name" id="name"
                    class="block w-full border-0 border-b border-transparent placeholder-[#CBCBCB]" />
                <img class="w-[10px] h-[13px] mr-2" src="@/assets/images/my/arrow-right.png" alt="arrow" />
            </div>
        </div>
        <div class="mt-[10px] bg-white p-2">
            <div>
                <span class="font-medium text-[#454558]">存款金额</span>
            </div>
            <p class="w-full h-[1px] bg-gray-200 mt-[12px]"></p>
            <div class="flex mt-[10px] flex-wrap justify-between">
                <div v-for="(item, index) in currencyList" :key="index" @click="selectToken(item)"
                    :class="[tokenActive === item.id ? 'border border-blue-600' : 'border border-gray-200']"
                    class="relative flex justify-center items-center mt-[6px] w-[78px] px-[6px] py-[3px]  rounded-sm">
                    <span class="text-[12px] text-black">￥{{ item.value }}</span>
                    <div v-if="tokenActive === item.id" class="absolute right-0 bottom-0 image-text_1">
                        <img class="w-[15px] h-[15px]" referrerpolicy="no-referrer"
                            src="@/assets/images/deposit/active.png" />
                    </div>
                </div>
            </div>
            <div class="text-wrapper_2 flex justify-start items-end mt-[20px]">
                <p class="text-[15px]">￥</p>
                <p
                    class="block w-full border-0 border-b border-transparent placeholder-[#CBCBCB] placeholder:text-[12px] text-[25px] font-bold">
                    {{ amount }}</p>
            </div>
        </div>
        <div class="flex-col bg-white">
            <div class="px-2 pt-2">
                <button :class="[name ? 'bg-blue-500' : 'bg-blue-200']"
                    class="text-[18px] flex justify-center bg-blue-500 text-white rounded-sm w-full py-1"
                    @click="onClick_1">
                    <span class="text_20">立即存款</span>
                </button>
            </div>

            <div class="text-[12px] pb-[60px] flex justify-center pt-[30px]">
                <span class="text_21">存款遇到问题？联系</span>
                <span class="text-blue-300" @click="goServicePage">人工客服</span>
                <span class="text_23">&nbsp;解决</span>
            </div>
        </div>
        <van-popup v-model:show="show" position="bottom" :style="{ height: '60%' }" class="rounded-t-md">
            <div class="rounded-t-md">
                <div class="text-[16px] p-2 flex justify-between">
                    <span class="text-blue-400" @click="() => show = false">取消</span>
                    <span class="font-bold">选择所属银行</span>
                    <span></span>
                </div>
                <p class="bg-gray-400 h-[1px] "></p>
                <div class="px-2 relative">
                    <input v-model="search"
                        class="rounded-full h-[30px] bg-gray-300 flex justify-center w-full pl-4 my-1 placeholder:text-[15px] placeholder:pb-1 items-center"
                        placeholder="">
                    <img src="@/assets/images/account/icon-search.png" class="w-[20px] absolute top-[5px] left-3" />
                </div>
                <div v-for="(item, index) in userBankList" :key="index" class="flex px-2 items-center"
                    @click="selectBankType(item)">
                    <div v-if="search === '' || search === item.name" class="flex px-2 items-center">
                        <img :src="item.img" class="w-[20px]" />
                        <p class="pl-1 text-[14px] font-bold py-1">{{ item.name }}</p>
                    </div>
                </div>
            </div>
        </van-popup>
    </div>
</template>
<script setup lang="ts">
import { ref, computed, toRefs, onMounted } from 'vue';
import { storeToRefs } from "pinia";
import { useDepositStore } from '@/stores/deposit';
import { useAuthStore } from '@/stores/auth';
import { showToast } from 'vant';
import router from '@/router';
const { getBankList } = useDepositStore();

const tokenActive = ref(1);
const active = ref(1);
const bankType = ref('');
const bankCardType = ref('储蓄卡');
const name = ref('');
const amount = ref(109);
const state = defineProps<{ bank: any }>();
const { bank } = toRefs(state);
const show = ref(false);
const bankNo = ref("");
const bankAccount = ref("");
const bankAddress = ref("");
const search = ref('');
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
const currencyList = ref([
    {
        id: 1,
        value: 109
    },
    {
        id: 2,
        value: 502
    },
    {
        id: 3,
        value: 1001
    },
    {
        id: 4,
        value: 2003
    },
    {
        id: 5,
        value: 4991
    },
])
const userBankList = ref([]);
const banks = computed(() => {
    userBankList.value = [];
    const { getBanks } = storeToRefs(useDepositStore());
    getBanks.value.map((item: any) => {
        bankCardList.value.map((data: any) => {
            if (item.bank_type == data.name) {
                userBankList.value = [...userBankList.value, data];
            }
        })
    })
    return getBanks.value
})
const token = computed(() => {
    const { getToken } = storeToRefs(useAuthStore());
    return getToken.value;
})
const selectBankType = (item: any) => {
    show.value = false
    let temp = banks.value.filter((data: any) => data.bank_type == item.name);
    console.log(temp);
    bankType.value = item.name;
    bankNo.value = temp[0].bank_card_type;
    bankAccount.value = temp[0].bank_account;
    bankAddress.value = temp[0].bank_type;
}
const goServicePage = () => {
    location.href = import.meta.env.VITE_SERVICE_URL + "/kefu.php";
    // window.open(import.meta.env.VITE_SERVICE_URL + "/kefu.php", '_blank');
}
const selectBank = () => {
    search.value = '';
    show.value = true
}
const selectToken = (item: any) => {
    tokenActive.value = item.id;
    amount.value = item.value;
};
const setBank = async (item: any) => {
    active.value = item.id;
    bankCardType.value = item.name
    await getBankList({ bank_card_type: bankCardType.value }, token.value);
    console.log(banks.value);
}
const onClick_1 = () => {
    if (name.value) {
        console.log(search.value);
        if (search.value == "") {
            showToast("请添加银行");
            router.push({ name: "addBank2" });
            return;
        }
        router.push({ name: 'depositInformation', params: { name: name.value, bankID: bank.value.id, money: amount.value }, query: { bank: bankNo.value, bankAccount: bankAccount.value, bankAddress: bankAddress.value } });
    }
}
onMounted(async () => {
    await getBankList({ bank_card_type: bankCardType.value }, token.value);
    console.log(banks.value);
})
</script>