<template>
    <div class="animated fadeInLeft">
        <van-nav-bar class="border-b-2 border-gray-300" fixed @click-left="onClickLeft" @click-right="() => $router.push('guidTransfer')">
            <template #left>
                <img class="w-1" referrerpolicy="no-referrer" src="@/assets/images/my/arrow-left.png" />
            </template>
            <template #title>
                <span class="pt-[10px] text-[#454558]">转账</span>
            </template>
            <template #right>教程 
                <img class="w-[15px] h-[15px] ml-1" referrerpolicy="no-referrer"
                            src="@/assets/images/withdraw/icon-help.png" />
            </template>
        </van-nav-bar>

        <div class="pt-[40px] pb-[60px] bg-[#f7f7ff] h-screen">
            <div class=" px-2 bg-white  text-[13px] mt-2">
                <div class="flex justify-between mt-1 pt-[10px]">
                    <div class="flex items-center">
                        <p>钱包金额</p>
                        <img class="w-[15px] h-[15px] ml-1" referrerpolicy="no-referrer"
                            src="@/assets/images/withdraw/icon-refresh.png" />
                    </div>
                    <div class="text-blue-400">
                        一键回收
                    </div>
                </div>
                <p class="w-full h-[0.5px] bg-[#CBCBCB] my-[10px]"></p>
                <div class="flex justify-around text-[12px]">
                    <div class="" v-for="(item, index) in moneyList" :key="index">
                        <div class="flex items-center">
                            <img class="w-[15px] h-[13px] mr-1" referrerpolicy="no-referrer"
                            src="@/assets/images/withdraw/icon-wallet.png" />
                            <p class="text-[#454558]">{{item.name}}</p>
                        </div>
                        <p class="text-blue-400 text-center">{{item.value}}</p>
                    </div>
                </div>
                <div class="flex justify-between text-[12px] py-[5px]">
                    <div class="w-full grid grid-cols-4">
                        <div class="col-span-1" v-for="(item, index) in itemList" :key="index">
                            <div class="flex justify-center">
                                <p>{{item.name}}</p>
                            </div>
                            <p class="text-center text-[#454558]">{{item.value}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-1 py-2 px-2 bg-white flex justify-between text-[13px]">
                <p>自动转账</p>
                <van-switch v-model="checked" size="20px"/>
            </div>
            <div class=" px-2  flex  text-[10px] mt-2 flex justify-center">
                <p>如需帮助，请 <span class="text-blue-500">联系客服</span></p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import router from '@/router';
import { ref } from 'vue';
import { Switch } from 'vant';
const tokenActive = ref(1);
const active = ref(1);
const checked = ref(true);
const tokenList = ref([
    {
        id: 1,
        name: '预约取款',
        disccount: true
    },
    {
        id: 2,
        name: '即时取款',
        disccount: false
    }
]);

const moneyList = ref([
    {
        name: '中心钱包',
        value: 0.00
    },
    {
        name: '锁定钱包',
        value: 0.00
    },
    {
        name: '福利中心',
        value: 0.00
    },
])
const itemList = ref([
    {
        name: '皇冠体育',
        value: 0.00
    },
    {
        name: 'OG东方馆',
        value: 0.00
    },
    {
        name: 'AG国际厅',
        value: 0.00
    },
    {
        name: 'AG旗舰厅',
        value: 0.00
    },
    {
        name: 'AG VIP厅',
        value: 0.00
    },
    {
        name: 'BBIN 馆',
        value: 0.00
    },
    {
        name: '开元棋牌',
        value: 0.00
    },
    {
        name: 'AG 电子',
        value: 0.00
    },
    {
        name: 'BBIN 电子',
        value: 0.00
    },
    {
        name: 'PT 电子',
        value: 0.00
    },
    {
        name: 'MG 电子',
        value: 0.00
    },
    {
        name: '新葡京彩票',
        value: 0.00
    },
    {
        name: '六合彩',
        value: 0.00
    },
    {
        name: '赛车',
        value: 0.00
    },
    {
        name: '飞艇PK10',
        value: 0.00
    },
    {
        name: '5分快3',
        value: 0.00
    },

])
const selectList = ref([
    {
        name: '极速取款',
        id: 1
    },
    {
        name: 'USDT提币',
        id: 2
    }
]);
const onClick_1 = () => {
    //alert(1);
};
const selectToken = (id: number) => {
    tokenActive.value = id;
};
const onClickLeft = () => {
    router.go(-1);
};
const selectCategory = (id: number) => {
    active.value = id;
};
const selectTime = (id:number) => {
    active.value = id;
}
</script>
