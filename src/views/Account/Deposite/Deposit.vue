<template>
    <div style="background-color: #DCF4FF;">
        <div class="header">
            <van-nav-bar title="存款" @click-left="onClickLeft" fixed left-arrow />
        </div>
        <div class="animated fadeInLeft">
            <div class="pt-[40px] bg-gray-100 h-screen overflow-scroll">
                <div class="text-[16px] mt-[12px] w-full">
                    <div class="bg-white p-2">
                        <span class="text-[#454558]">支付方式</span>
                        <p class="w-full h-[1px] bg-gray-200 my-[5px]"></p>

                        <div class="box_1">
                            <div class="flex justify-start gap-1">
                                <div v-for="(item, index) in cryptoList" :key="index" @click="selectCategory(index,item)"
                                    :class="[
                                        active === index
                                            ? 'border border-blue-600'
                                            : 'border border-gray-200'
                                    ]"
                                    class="relative flex justify-center items-center mt-[6px] w-[80px] h-[60px] py-[3px] rounded-sm">
                                    <div class="">
                                        <div class="flex justify-center">
                                            <img class="w-[25px] h-[25px] flex justify-center" referrerpolicy="no-referrer"
                                                :src="item.icon"/>
                                        </div>
                                        <p class="text-blue-700 text-[11px] pt-[5px]">
                                            {{ item.name }}
                                        </p>
                                    </div>
                                    <div v-if="active === index" class="absolute right-0 bottom-0 image-text_1">
                                        <img class="w-[15px] h-[15px]" referrerpolicy="no-referrer"
                                            src="@/assets/images/deposit/active.png"/>
                                    </div>

                                    <img v-if="item.new" class="absolute w-[25px] h-[25px] top-0 right-0"
                                        referrerpolicy="no-referrer"
                                        src="@/assets/images/deposit/new.png"/>

                                </div>
                            </div>
                        </div>
                    </div>

                    <currency-recharge v-if="active === 0" :tokenList="tokenList"
                       />
                    <!-- <yebi-currency v-if="active === 1" :tokenList="tokenList" :tokenActive="tokenActive"
                        @selectToken="selectToken" /> -->
                    <bank-card v-if="active === 1" :bank="cryptoList[active]"/>
                    <!-- <alipay-currency v-if="active === 4" /> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import router from '@/router';
import AlipayCurrency from './AlipayCurrency.vue';
import BankCard from './BankCard.vue';
import CurrencyRecharge from './CurrencyRecharge.vue';
import YebiCurrency from './YebiCurrency.vue';
import { useDepositStore } from '@/stores/deposit';
import { storeToRefs } from "pinia";
const active = ref(0);
const tokenActive = ref(1);

const {
    getBanks,
    isCrypto
} = storeToRefs(useDepositStore());
const {
    getBankList,
    setIsCrypto
} = useDepositStore();
const cryptoList = ref([
    {
        id: 1,
        icon: new URL('@/assets/images/my/crypto.png', import.meta.url)
            .href,
        name: '虚拟币种类',
        new: true
    },
    // {
    //     id: 2,
    //     icon: new URL('@/assets/images/deposit/virtual-currency.png', import.meta.url)
    //         .href,
    //     name: '易币付虚拟币',
    //     new: true
    // },
    {
        id: 2,
        icon: new URL('@/assets/images/deposit/bank-card.png', import.meta.url)
            .href,
        name: '银行卡转账',
        new: false
    },
    // {
    //     id: 4,
    //     icon: new URL('@/assets/images/deposit/alipay.png', import.meta.url)
    //         .href,
    //     name: '支付宝',
    //     new: false
    // }
]);
onMounted(async () => {
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
    active.value = index;
    if(bank.name === "虚拟币种类"){
        setIsCrypto(true)
    }else{
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
