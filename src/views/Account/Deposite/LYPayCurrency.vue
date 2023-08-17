<template>
    <div>
        <div class="mt-[10px] bg-white p-2">
            <div>
                <span class="font-medium text-[#454558]">{{ t('ly_pay.text_1') }}</span>
            </div>
            <p class="w-full h-[1px] bg-gray-200 mt-[12px]"></p>
            <!-- <div class="flex mt-[10px] flex-wrap justify-between">
                <div v-for="(item, index) in currencyList" :key="index" @click="selectToken(item)"
                    :class="[tokenActive === item.id ? 'border border-blue-600' : 'border border-gray-200']"
                    class="relative flex justify-center items-center mt-[6px] w-[78px] px-[6px] py-[3px]  rounded-sm">
                    <span class="text-[12px] text-black">￥{{ item.value }}</span>
                    <div v-if="tokenActive === item.id" class="absolute right-0 bottom-0 image-text_1">
                        <img class="w-[15px] h-[15px]" referrerpolicy="no-referrer"
                            src="@/assets/images/deposit/active.png"/>
                    </div>
                </div>
            </div> -->
            <div class="px-2 mt-[14px]">
                <label for="name" class="block font-semibold text-[#454558] ">{{ t('ly_pay.text_2') }}</label>
                <div class="mt-[5px] border-b border-gray-300 focus-within:border-gray-500 pb-[5px] flex justify-between items-center"
                    @click="selectBank">
                    <input type="text" v-model="bankType" placeholder="请选择银行" name="name" id="name"
                        class="block w-full border-0 border-b border-transparent placeholder-[#CBCBCB]" />
                    <img class="w-[10px] h-[13px] mr-2" src="@/assets/images/my/arrow-right.png" alt="arrow" />
                </div>
            </div>
            <div class="text-wrapper_2 flex justify-start items-end">
                <p class="text-[15px]">￥</p>
                <input type="text" v-model="amount" @input="amountChange" :placeholder="t('ly_pay.text_3')" name="name"
                    id="name"
                    class="block w-full border-0 border-b border-transparent placeholder-[#CBCBCB] placeholder:text-[12px] text-[25px] font-bold" />
            </div>
            <p class="w-full h-[1px] bg-gray-200 mt-[12px]"></p>
        </div>
        <div class="flex-col bg-white">
            <div class="px-2 pt-2">
                <button :class="[amount ? 'bg-blue-500' : 'bg-blue-200']"
                    class="text-[18px] flex justify-center bg-blue-500 text-white rounded-sm w-full py-1"
                    @click="requestPayment">
                    <span class="text_20">{{ t('ly_pay.text_4') }}</span>
                </button>
            </div>

            <div class="text-[12px] pb-[60px] flex justify-center pt-[30px]">
                <span class="text_21">{{ t('ly_pay.text_5') }}</span>
                <span class="text-blue-300">{{ t('ly_pay.text_6') }}</span>
                <span class="text_23">&nbsp;{{ t('ly_pay.text_7') }}</span>
            </div>
        </div>
        <van-popup v-model:show="show" position="bottom" class="rounded-t-md">
            <div class="rounded-t-md">
                <div class="text-[16px] p-2 flex justify-between">
                    <span class="text-blue-400" @click="() => show = false">{{ t('ly_pay.text_8') }}</span>
                    <span class="font-bold">{{ t('ly_pay.text_9') }}</span>
                    <span></span>
                </div>
                <p class="bg-gray-400 h-[1px] "></p>
                <div class="px-2 relative">
                    <input v-model="search"
                        class="rounded-full h-[30px] bg-gray-300 flex justify-center w-full pl-4 my-1 placeholder:text-[15px] placeholder:pb-1 items-center"
                        placeholder="">
                    <img src="@/assets/images/account/icon-search.png" class="w-[20px] absolute top-[5px] left-3" />
                </div>
                <div v-for="(item, index) in bankCardList" :key="index" class="flex px-2 items-center"
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
import { ref, computed } from 'vue';
import router from '@/router';
import { thirdpartyPaymentStore } from "@/stores/thirdparty_payment";
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';
import socket from '@/utils/socket';
import { ElLoading } from "element-plus";
import { showToast } from 'vant';
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const tokenActive = ref(1);
const name = ref('');
const amountFlag = ref(false);
const amount = ref('');
const search = ref('');
const show = ref(false);
const bankType = ref('');
const { dispatchLYPay } = thirdpartyPaymentStore();

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

const bankCardList = ref([
    {
        id: 1,
        img: new URL('@/assets/images/account/icon-bank1.png', import.meta.url).href,
        name: t('bank_add_2.text_18')
    },
    {
        id: 2,
        img: new URL('@/assets/images/account/icon-bank2.png', import.meta.url).href,
        name: t('bank_add_2.text_19')
    },
    {
        id: 3,
        img: new URL('@/assets/images/account/icon-bank3.png', import.meta.url).href,
        name: t('bank_add_2.text_20')
    },
    {
        id: 4,
        img: new URL('@/assets/images/account/icon-bank4.png', import.meta.url).href,
        name: t('bank_add_2.text_21')
    },
    {
        id: 5,
        img: new URL('@/assets/images/account/icon-bank5.png', import.meta.url).href,
        name: t('bank_add_2.text_22')
    },
    {
        id: 6,
        img: new URL('@/assets/images/account/icon-bank6.png', import.meta.url).href,
        name: t('bank_add_2.text_23')
    },
    {
        id: 7,
        img: new URL('@/assets/images/account/icon-bank7.png', import.meta.url).href,
        name: t('bank_add_2.text_24')
    },
    {
        id: 8,
        img: new URL('@/assets/images/account/icon-bank8.png', import.meta.url).href,
        name: t('bank_add_2.text_25')
    },
    {
        id: 9,
        img: new URL('@/assets/images/account/icon-bank9.png', import.meta.url).href,
        name: t('bank_add_2.text_26')
    },
    {
        id: 10,
        img: new URL('@/assets/images/account/icon-bank10.png', import.meta.url).href,
        name: t('bank_add_2.text_27')
    },
    {
        id: 11,
        img: new URL('@/assets/images/account/icon-bank11.png', import.meta.url).href,
        name: t('bank_add_2.text_28')
    },
    {
        id: 12,
        img: new URL('@/assets/images/account/icon-bank12.png', import.meta.url).href,
        name: t('bank_add_2.text_29')
    },
    {
        id: 13,
        img: new URL('@/assets/images/account/icon-bank13.png', import.meta.url).href,
        name: t('bank_add_2.text_30')
    }
])
const user = computed(() => {
    const { getUser } = storeToRefs(useAuthStore());
    return getUser.value;
})
const payFormData = computed(() => {
    const { getPayFormData } = storeToRefs(thirdpartyPaymentStore());
    return getPayFormData.value
})
const selectToken = (item: any) => {
    tokenActive.value = item.id;
    amount.value = item.value;
};
const selectBank = () => {
    search.value = '';
    show.value = true
}
const selectBankType = (item: any) => {
    show.value = false
    bankType.value = item.name;
}
const amountChange = () => {
    amountFlag.value = false;
}

const redirectToHTMLContent = (htmlContent: string): void => {
    // console.log(import.meta.env.VITE_LY_PAY_URL);
    const newWindow = window.open("", "_blank");
    newWindow?.document.write(htmlContent);
    newWindow?.document.close();
}

const requestPayment = async () => {
    if (amount.value == "") {
        showToast(t('ly_pay.text_10'));
    }
    const loading = ElLoading.service({
        lock: true,
        text: t('ly_pay.text_11'),
        background: "rgba(0, 0, 0, 0.7)",
    });
    await dispatchLYPay({
        amount: amount.value,
        username: user.value.UserName,
        bankcode: "ICBC",
        PayID: 6
    })
    loading.close();
    if (payFormData.value != "") {        
        socket.io.emit("submitDepositAlert");
        redirectToHTMLContent(payFormData.value);
    }
}
</script>