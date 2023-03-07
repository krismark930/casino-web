<!-- 赛果 -->
<template>
    <div class="animated fadeInLeft">
        <van-nav-bar
            class="border-b-2 border-gray-300"
            fixed
            @click-left="onClickLeft"
        >
            <template #left>
                <img
                    class="w-1"
                    referrerpolicy="no-referrer"
                    src="@/assets/images/my/arrow-left.png"
                />
            </template>
            <template #title>
                <span class="pt-[10px] text-[#454558]">交易记录</span>
            </template>
            <template #right> </template>
        </van-nav-bar>
        <div class="pt-[55px] pb-[60px] h-screen bg-gray-50 overflow-y-scroll">
            <van-dropdown-menu>
                <van-dropdown-item title="存款" ref="item">
                    <div
                        class="bg-white grid grid-cols-4 gap-1 px-[10px] py-[10px]"
                    >
                        <div
                            v-for="(item, index) in categoryList"
                            :key="index"
                            :class="[
                                'rounded-[50px] border border-[#cccccc] text-[14px] col-span-1  py-[4px] flex justify-center items-center',
                                active.id === item.id
                                    ? 'bg-blue-400 text-white'
                                    : 'bg-whie text-[#cccccc]'
                            ]"
                            @click="selectCategory(item)"
                        >
                            {{ item.title }}
                        </div>
                    </div>
                </van-dropdown-item>
                <van-dropdown-item title="近7日" ref="item">
                    <div
                        class="bg-white grid grid-cols-4 gap-1 px-[10px] py-[10px] relative"
                    >
                        <div
                            v-for="(item, index) in DateList"
                            :key="index"
                            :class="[
                                'rounded-[50px] border border-[#cccccc] text-[14px] col-span-1  py-[4px] flex justify-center items-center ',
                                dateActive === item.id
                                    ? 'bg-blue-400 text-white'
                                    : 'bg-whie text-[#cccccc]'
                            ]"
                            @click="setDateActive(item.id)"
                        >
                            {{ item.title }}
                        </div>
                    </div>
                    <div v-if="dateActive === 5">
                        <p class="w-full h-[1px] bg-[#CBCBCB] my-1"></p>
                        <div
                            class="flex justify-between text-[16px] px-2 items-center"
                        >
                            <p>开始日期</p>
                            <div class="flex items-center">
                                {{
                                    currentDate[0] +
                                    '-' +
                                    currentDate[1] +
                                    '-' +
                                    currentDate[2]
                                }}
                                <img
                                    class="w-[10px] h-[13px] ml-1"
                                    src="@/assets/images/my/arrow-right.png"
                                    alt="arrow"
                                />
                            </div>
                        </div>
                        <van-date-picker
                            :option-height="30"
                            v-model="currentDate"
                            title="Choose Date"
                            :min-date="minDate"
                            :max-date="maxDate"
                            :confirm="false"
                        />
                        <p class="w-full h-[0.5px] bg-[#CBCBCB] my-1"></p>
                        <div
                            class="flex justify-between text-[16px] px-2 items-center"
                        >
                            <p>结束日期</p>
                            <div class="flex items-center">
                                {{
                                    new Date().getFullYear() +
                                    '-' +
                                    (new Date().getMonth() + 1) +
                                    '-' +
                                    new Date().getDay()
                                }}
                                <img
                                    class="w-[10px] h-[13px] ml-1"
                                    src="@/assets/images/my/arrow-right.png"
                                    alt="arrow"
                                />
                            </div>
                        </div>
                        <p class="px-2 text-[16px] py-1 text-gray-300">
                            *当前系统支持查询最近30日的交易记录
                        </p>
                        <div class="flex text-[16px]">
                            <button class="w-full bg-gray-200 h-[60px] text-blue-400">
                                取消
                            </button>
                            <button class="w-full bg-blue-400 text-white">确定</button>
                        </div>
                    </div>
                </van-dropdown-item>
            </van-dropdown-menu>
            <div v-for="(item, index) in historyList" :key="index">
                <div v-if="index === 0 || item.AddDate !== historyList[index-1].AddDate" class="px-2 text-[16px] font-bold py-[15px]">
                    <p>{{new Date(item.AddDate).getFullYear() +'年'+ (new Date(item.AddDate).getMonth()+1) + '月'+new Date(item.AddDate).getDate()+'日' }}</p>
                </div>
                <div
                    class="flex justify-between text-[15px] px-2 items-center pt-2 bg-white"
                    @click="gotoDetail(item)"
                >
                    <div class="w-[40px]">
                        <img
                            class="w-[30px] h-[30px] mb-1"
                            referrerpolicy="no-referrer"
                            src="@/assets/images/withdraw/icon-circle-wallet.png"
                        />
                    </div>
                    <div
                        class="flex justify-between w-full border-b-gray-200 border-b-2 pb-1"
                    >
                        <div class="flex items-center">
                            <div class="pl-1">
                                <p>{{ (item.Type === 'T' && item.Type2 === 1)? '取款':''  }}</p>
                                <p class="text-gray-300">{{ item.Date.replace(item.AddDate, '') }}</p>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <div>
                                <p class="text-gray-800">{{ item.Gold }}</p>
                                <p class="text-gray-300">
                                    {{ item.Checked === 0 ?'待办的':'成功' }}
                                </p>
                            </div>
                            <img
                                class="w-[7px] h-[13px] ml-2"
                                src="@/assets/images/my/arrow-right.png"
                                alt="arrow"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="false" class="px-8 py-16">
                <img src="@/assets/images/account/empty.png"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import router from '@/router';
import { useAuthStore } from '@/stores/auth';
import { useWithdrawStore } from '@/stores/withdraw';
import { storeToRefs } from 'pinia';
const item = ref(null);
const { user } = useAuthStore();
const { getTransactionHistory,  setHistoryDetail } = useWithdrawStore();
const { historyList } = storeToRefs(useWithdrawStore());
onMounted(async ()=>{
  await getTransactionHistory(user.UserName, 'S', 1);
})

const DateList = ref([
    {
        id: 1,
        title: '今日'
    },
    {
        id: 2,
        title: '昨天'
    },
    {
        id: 3,
        title: '近7日'
    },
    {
        id: 4,
        title: '近30日'
    },
    {
        id: 5,
        title: '自定义'
    }
]);

const categoryList = ref([
    {
        id: 1,
        title: '存款',
        type: 'S',
        type2: 1
    },
    {
        id: 2,
        title: '取款',
        type: 'T',
        type2: 1
    },
    {
        id: 3,
        title: '转账',
        type: 'transfer',
        type2: 3
    },
    {
        id: 4,
        title: '红利',
        type: '',
        type2: 1
        
    },
    {
        id: 5,
        title: '返水',
        type: '',
        type2: 1
    },
    {
        id: 6,
        title: '加币',
        type: '',
        type2: 1
    },
    {
        id: 7,
        title: '减币',
        type: '',
        type2: 1
    },
    {
        id: 8,
        title: '调整',
        type: '',
        type2: 1
    },
    {
        id: 9,
        title: '买料',
        type: '',
        type2: 1
    },
    {
        id: 10,
        title: '礼物',
        type: '',
        type2: 1
    },
    {
        id: 11,
        title: '其他',
        type: '',
        type2: 1
    }
]);

const active = ref(categoryList.value[0]);
const dateActive = ref(1);

const selectCategory = async (item : any) => {
    active.value = item;
    await getTransactionHistory(user.UserName, item.type, item.type2);
    //if(item.type === 'deposit'){
        //await getTransactionHistory(user.UserName, 'T', 1);
    //}else if(item.type === 'withdraw'){
        //await getTransactionHistory(user.UserName, 'T', 1);
    //}else if(item.type === 'transfer'){

    //}
}

const setDateActive = (value: number) => {
    dateActive.value = value;
};
const onClickLeft = () => {
    router.go(-1);
};
const gotoDetail = (item:string) => {
    setHistoryDetail(item)
    router.push("transactionDetail");
}
const currentDate = ref(['2021', '01', '01']);
const minDate = new Date(2020, 0, 1);
const maxDate = new Date(2025, 5, 1);
</script>
<style>
.van-dropdown-menu__bar {
    padding-right: 150px !important;
}
.van-dropdown-menu__item {
    width: 2px !important;
    background: rgb(235, 231, 231);
    margin: 10px;
    border-radius: 50px;
    color: #000;
}
.van-picker__toolbar {
    display: none;
}
</style>
