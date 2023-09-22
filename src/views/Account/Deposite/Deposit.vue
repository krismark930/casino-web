<template>
    <div style="background-color: #DCF4FF;">
        <div class="header">
            <van-nav-bar :title="t('deposit.text_2')" @click-left="onClickLeft" fixed left-arrow />
        </div>
        <div class="animated fadeInLeft">
            <div class="pt-[40px] bg-gray-100 h-screen overflow-scroll">
                <div class="text-[16px] mt-[12px] w-full">
                    <div class="bg-white p-2">
                        <span class="text-[#454558]">{{ t('deposit.text_1') }}</span>
                        <p class="w-full h-[1px] bg-gray-200 my-[5px]"></p>

                        <div class="box_1">
                            <div class="flex justify-start gap-1">
                                <div v-for="(item, index) in cryptoList" :key="index" @click="selectCategory(index, item)"
                                    :class="[
                                        active === index
                                            ? 'border border-blue-600'
                                            : 'border border-gray-200'
                                    ]"
                                    class="relative flex justify-center items-center mt-[6px] w-[80px] h-[60px] py-[3px] rounded-sm">
                                    <div class="">
                                        <div class="flex justify-center">
                                            <img class="w-[25px] h-[25px] flex justify-center" referrerpolicy="no-referrer"
                                                :src="item.icon" />
                                        </div>
                                        <p class="text-blue-700 text-[11px] pt-[5px]">
                                            {{ item.name }}
                                        </p>
                                    </div>
                                    <div v-if="active === index" class="absolute right-0 bottom-0 image-text_1">
                                        <img class="w-[15px] h-[15px]" referrerpolicy="no-referrer"
                                            src="@/assets/images/deposit/active.png" />
                                    </div>

                                    <img v-if="item.new" class="absolute w-[25px] h-[25px] top-0 right-0"
                                        referrerpolicy="no-referrer" src="@/assets/images/deposit/new.png" />

                                </div>
                            </div>
                        </div>
                        <div style="margin-top: 10px; display: flex;" v-if="active === 1">
                            <div class="font-bold">开户人姓名: </div>
                            <div>{{ selectedAdminBank.alias }}</div>
                        </div>
                        <div style="display: flex;" :style="{ marginTop: active == 1 ? '2px' : '10px' }">
                            <div class="font-bold">银行名称: </div>
                            <div>{{ selectedAdminBank.bankname }}</div>
                        </div>
                        <div style="margin-top: 2px; display: flex;">
                            <div class="font-bold">银行账号: </div>
                            <div>{{ selectedAdminBank.bankno }}</div>
                        </div>
                    </div>

                    <currency-recharge v-if="active === 0" :tokenList="tokenList"
                        @changeCurrencyType="changeCurrencyType" />
                    <!-- <yebi-currency v-if="active === 1" :tokenList="tokenList" :tokenActive="tokenActive"
                        @selectToken="selectToken" /> -->
                    <bank-card v-if="active === 1" :bank="cryptoList[active]" />
                    <ly-currency v-if="active === 2" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue';
import router from '@/router';
import LyCurrency from './LYPayCurrency.vue';
import BankCard from './BankCard.vue';
import CurrencyRecharge from './CurrencyRecharge.vue';
import YebiCurrency from './YebiCurrency.vue';
import { useDepositStore } from '@/stores/deposit';
import { useAuthStore } from '@/stores/auth';
import { useSysConfigStore } from '@/stores/sysConfig';
import { storeToRefs } from "pinia";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const active = ref(0);
const tokenActive = ref(1);
const currencyType = ref(1);

const {
    getAdminBank,
    getBanks,
    isCrypto,
} = storeToRefs(useDepositStore());
const {
    getBankList,
    setIsCrypto,
    dispatchAdminBank
} = useDepositStore();
const selectedAdminBank = ref({});
const cryptoList = ref([
    {
        id: 1,
        icon: new URL('@/assets/images/my/crypto.png', import.meta.url)
            .href,
        name: t('deposit.text_3'),
        new: true
    },
    // {
    //     id: 2,
    //     icon: new URL('@/assets/images/deposit/virtual-currency.png', import.meta.url)
    //         .href,
    //     name: t('deposit.text_6'),
    //     new: true
    // },
    {
        id: 2,
        icon: new URL('@/assets/images/deposit/bank-card.png', import.meta.url).href,
        name: t('deposit.text_4'),
        new: false
    },
    {
        id: 4,
        icon: new URL('@/assets/images/deposit/alipay.png', import.meta.url).href,
        // name: t('deposit.text_5'),
        name: t('currency_recharge.text_11'),
        new: false
    }
]);
const token = computed(() => {
    const { getToken } = storeToRefs(useAuthStore());
    return getToken.value
})
const adminBankList = computed(() => {
    const { getAdminBank } = storeToRefs(useDepositStore());
    if (active.value == 0) {
        selectedAdminBank.value = currencyType.value == 1 ? getAdminBank.value[0] : getAdminBank.value[1];
    } else {
        selectedAdminBank.value = getAdminBank.value[2]
    }
    return getAdminBank.value
})
const config = computed(() => {
    const { getConfig } = storeToRefs(useSysConfigStore());
    return getConfig.value
})
const changeCurrencyType = (type: number) => {
    currencyType.value = type;
}
watch(currencyType, (value: number) => {
    selectedAdminBank.value = value == 1 ? adminBankList.value[0] : adminBankList.value[1];
}, { deep: true });
watch(active, (value: number) => {
    selectedAdminBank.value = value == 0 ? adminBankList.value[0] : adminBankList.value[2];
}, { deep: true });
onMounted(async () => {
    await dispatchAdminBank(token.value);
    console.log(adminBankList.value);
});

const tokenList = ref([
    {
        id: 1,
        name: 'TRC20',
        icon: new URL("@/assets/images/deposit/usdttrc20.svg", import.meta.url).href
    },
    {
        id: 2,
        name: 'ERC20',
        icon: new URL("@/assets/images/deposit/usdterc20.svg", import.meta.url).href
    }
]);
const selectCategory = (index: number, bank: any) => {
    if (bank.name === t('currency_recharge.text_11')) {
        location.href = config.value.kf1;
    } else if (bank.name === t('deposit.text_3')) {
        active.value = index;
        setIsCrypto(true)
    } else {
        active.value = index;
        setIsCrypto(false)
    }
};
const selectToken = (id: number) => {
    tokenActive.value = id;
};
const onClickLeft = () => {
    router.go(-1);
};
const onClick_1 = () => {
    //alert(1);
};
</script>
<style lang="scss" scoped>
::v-deep .van-ellipsis {
    color: #454558;
    font-size: 17px;
}

::v-deep .van-nav-bar .van-icon {
    color: #454558;
}

.header {
    position: relative;
}
</style>
