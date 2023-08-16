<template>
    <div>
        <div class="mt-[10px] bg-white p-2">
            <div class="font-medium text-[#454558] mt-0">{{ t('currency_recharge.text_1') }}</div>
            <div class="flex">
                <div v-for="(item, index) in tokenList" :key="index" @click=selectToken(item.id)
                    class="relative flex justify-center items-center mt-[18px] w-[90px] px-[6px] py-[3px] mx-[10px] border rounded-sm"
                    :class="[tokenActive === item.id ? 'border-blue-800' : '']">
                    <img class="w-[22px] h-[22px] mr-[5px]" referrerpolicy="no-referrer" :src="item.icon" />
                    <span class="text-blue-700">{{ item.name }}</span>
                    <div v-if="tokenActive === item.id" class="absolute right-0 bottom-0 image-text_1">
                        <img class="w-[15px] h-[15px]" referrerpolicy="no-referrer"
                            src="@/assets/images/deposit/active.png" />
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-[10px] bg-white py-1 px-2">
            <p class="mt-[10px] font-medium text-[#454558]">{{ t('currency_recharge.text_2') }}</p>
            <p class="w-full h-[1px] bg-gray-200 my-[7px]"></p>
            <div class="text-wrapper_2 flex justify-start items-end">
                <p class="text-[15px]">￥</p>
                <input type="text" v-model="amount" @input=" amountChange " :placeholder="t('currency_recharge.text_3')"
                    name="name" id="name"
                    class="block w-full border-0 border-b border-transparent placeholder-[#CBCBCB] placeholder:text-[12px] text-[25px] font-bold" />
            </div>
            <p class="w-full h-[1px] bg-gray-200 my-[7px]"></p>
            <p v-if=" amountFlag " class="px-2 py-[5px] text-[12px] text-red-500 bg-gray-100">
                {{ t('currency_recharge.text_4') }}
            </p>
            <div class="text-[12px] flex justify-between py-1">
                <p class="text_15"> {{ t('currency_recharge.text_5') }}≈{{ sysConfigItem.USDT?.toFixed(2) }}CNY</p>
                <div class="text-wrapper_3">
                    <span class="text_16">{{ t('currency_recharge.text_6') }}</span>
                    <span class="text-blue-300">{{ (Number(amount) / sysConfigItem.USDT).toFixed(2) }}</span>
                    <span class="text_18">USDT</span>
                </div>
            </div>
            <div class="text-[12px] flex justify-between py-1">
                <span class="text_19">{{ t('currency_recharge.text_7') }}</span>
                <div class="image-text_1 flex justify-between items-center">
                    <span class="text-blue-300 mr-1">{{ t('currency_recharge.text_8') }}</span>
                    <img class="w-[13px] h-[13px]" referrerpolicy="no-referrer"
                        src="@/assets/images/my/arrow-double-right.png" />
                </div>
            </div>
        </div>
        <div class="flex-col bg-white">
            <div class="px-2 pt-2">
                <button :class=" [amount ? 'bg-blue-500' : 'bg-blue-200'] "
                    class="text-[18px] flex justify-center bg-blue-500 text-white rounded-sm w-full py-1" @click=" onSubmit ">
                    <span class="text_20">{{ t('currency_recharge.text_9') }}</span>
                </button>
            </div>

            <div class="text-[12px] pb-[60px] flex justify-center pt-[30px]">
                <span class="text_21">{{ t('currency_recharge.text_10') }}</span>
                <span class="text-blue-300" @click=" goServicePage ">{{ t('currency_recharge.text_11') }}</span>
                <span class="text_23">&nbsp;{{ t('currency_recharge.text_12') }}</span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { toRefs, ref, computed, onMounted } from 'vue';
import router from '@/router';
import { storeToRefs } from "pinia";
import { useAuthStore } from '@/stores/auth';
import { useDepositStore } from '@/stores/deposit';
import { useSysConfigStore } from '@/stores/sysConfig';
import { showToast } from 'vant';
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const { dispatchGetCrypto } = useDepositStore();
const { getSysConfigValue } = useSysConfigStore();
const { getConfigValue } = useSysConfigStore();
const amountFlag = ref(false);
const amount = ref('');
const state = defineProps<{ tokenList: Array<any> }>();
const { tokenList } = toRefs(state);
const tokenActive = ref(1);
const emit = defineEmits(['selectToken']);
const token = computed(() => {
    const { getToken } = storeToRefs(useAuthStore());
    return getToken.value;
})
const crypto = computed(() => {
    const { getCrypto } = storeToRefs(useDepositStore());
    return getCrypto.value;
})
const sysConfigItem = computed(() => {
    const { getSysConfig } = storeToRefs(useSysConfigStore());
    return getSysConfig.value;
})
const config = computed(() => {
    const { getConfig } = storeToRefs(useSysConfigStore());
    return getConfig.value
})
const amountChange = () => {
    amountFlag.value = false;
}
const selectToken = async (id: number) => {
    tokenActive.value = id;
    await dispatchGetCrypto({ crypto_type: tokenList.value[tokenActive.value - 1].name }, token.value)
}
const goServicePage = () => {
    location.href = config.value.kf1;
}
const onSubmit = () => {
    let temp = {};
    tokenList.value.map((item: any) => {
        if (item.id === tokenActive.value) {
            temp = item;
        }
    })

    if (amount.value <= 100) {
        amountFlag.value = true;
    } else {
        console.log(crypto.value);
        if (crypto.value == null) {
            showToast(t('currency_recharge.text_13'));
            router.push({ name: "addCrypto" });
            return;
        }
        router.push({ name: 'depositInformation', params: { name: 'crypto', bankID: (temp as any).name, money: amount.value }, query: { bank: crypto.value.bank, bankAccount: crypto.value.bank_address, bankAddress: crypto.value.bank_account } });
    }
}
onMounted(async () => {
    await dispatchGetCrypto({ crypto_type: tokenList.value[tokenActive.value - 1].name }, token.value)
    await getSysConfigValue();
    await getConfigValue();
})
</script>