<template>
    <div class="animated fadeInLeft">
        <van-nav-bar class="border-b-2 border-gray-300" fixed @click-left="onClickLeft"  @click-right="() => router.push('guidHelp')">
            <template #left>
                <img class="w-1" referrerpolicy="no-referrer" src="@/assets/images/my/arrow-left.png" />
            </template>
            <template #title>
                <span class="pt-[10px] text-[#454558]">取款</span>
            </template>
            <template #right>教程 
                <img class="w-[15px] h-[15px] ml-1" referrerpolicy="no-referrer"
                            src="@/assets/images/withdraw/icon-help.png" />
            </template>
        </van-nav-bar>

        <div class="pt-[40px] pb-[60px] bg-[#f7f7ff] h-screen">
            <div class="flex justify-start text-[15px] px-1 pt-1 mt-1 bg-white text-[#454558]">
                <div v-for="(item, index) in selectList" :key="index" @click="selectCategory(item.id)" class="px-2">
                    {{ item.name }}
                    <div class="flex justify-center mt-1">
                        <div :class="{
                            'w-[36px] h-[2px] bg-[#01b3ff]':
                                active == item.id
                        }"></div>
                    </div>
                </div>
                <!-- <div class="text-wrapper_1 flex-row justify-between">
                    <span class="text_1">银行卡</span>
                    <span class="text_2">虚拟币账户</span>
                </div>
                <div class="image-wrapper_1 flex-row">
                    <img class="image_1" referrerpolicy="no-referrer"
                        src="@/assets/images/deposit/active.png" />
                </div> -->
            </div>
            <div class=" px-2 bg-white  text-[13px] ">
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
                            <p>{{item.name}}</p>
                        </div>
                        <p class="text-blue-400 text-center">{{item.value}}</p>
                    </div>
                </div>
                <p class="w-full h-[0.5px] bg-[#CBCBCB] my-[10px]"></p>
                <div class="flex justify-between text-[12px] px-2 py-[5px]">
                    <div class="w-[260px] grid grid-cols-3">
                        <div class="col-span-1" v-for="(item, index) in itemList" :key="index">
                            <div class="flex justify-center">
                                <p>{{item.name}}</p>
                            </div>
                            <p class="text-center">{{item.value}}</p>
                        </div>
                    </div>
                    <div class="text-center">
                        <p class="text-center">更多</p>
                        <div class="flex justify-center">
                            <img class="w-[15px] h-[15px] mt-[5px]" referrerpolicy="no-referrer"
                            src="@/assets/images/withdraw/icon-more.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div class=" px-2 bg-white  text-[12px] pb-1">
                <div class="flex justify-between mt-1 pt-[10px]">
                    <div class="flex">
                        <p>取款方式</p>
                    </div>
                </div>
                <p class="w-full h-[0.5px] bg-[#CBCBCB] my-[10px]"></p>
                <div class="flex justify-between mt-[10px]">
                    <div v-for="(item, index) in tokenList" :key="index" @click="selectToken(item.id)"
                        :class="[tokenActive === item.id ? 'border border-blue-600' : 'border border-gray-200']"
                        class="relative flex justify-center items-center mt-[6px] w-[200px] h-[40px] mx-[3px] py-[3px]  rounded-sm">
                        <span class="text-blue-700">{{ item.name }}</span>
                        <div v-if="tokenActive === item.id" class="absolute right-0 bottom-0 image-text_1">
                            <img class="w-[12px] h-[12px]" referrerpolicy="no-referrer"
                                src="@/assets/images/deposit/active.png"/>
                        </div>
                        <div v-if="item.disccount === true" class="absolute -top-1 left-1">
                            <div class="relative">
                                <img class=" w-[80px] h-[16px]" referrerpolicy="no-referrer"
                                src="@/assets/images/withdraw/icon-new.png" />
                                <div class="absolute top-[2px] left-[20px] text-white text-[8px]">最高加送0.8%</div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="flex justify-between mt-1 pt-[10px]">
                    <div class="flex">
                        <p>预约取款时间</p>
                    </div>
                </div>
                <p class="w-full h-[0.5px] bg-[#CBCBCB] my-[10px]"></p>
                <div class="flex justify-between mt-[10px] grid grid-cols-2">
                    <div v-for="(item, index) in timeList" :key="index" @click="selectTime(item.id)"
                        :class="[active === item.id ? 'border border-blue-600' : 'border border-gray-200']"
                        class="relative flex justify-center items-center mt-[6px] w-[160px] h-[40px] py-[3px]  rounded-sm col-span-1">
                        <span class="text-blue-700">{{ item.name }}</span>
                        <div v-if="active === item.id" class="absolute right-0 bottom-0 image-text_1">
                            <div class="relative">
                                <img class="w-[12px] h-[12px]" referrerpolicy="no-referrer"
                                src="@/assets/images/deposit/active.png"/>
                                <p></p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class=" px-2 bg-white  text-[12px] pb-1">
                <div class="flex justify-between mt-1 pt-[10px]">
                    <div class="flex">
                        <p>银行卡 </p>
                         <p>(0/10)</p>
                    </div>
                    <div class="flex border border-blue-400 px-[5px] items-center rounded-sm">
                        <!-- <img class="w-[10px] h-[10px] mr-1" referrerpolicy="no-referrer"
                            src="@/assets/images/deposit/active.png" /> -->
                            添加银行卡
                    </div>
                </div>
            </div>
            <div class=" px-2  flex  text-[10px] mt-2">
                <p>请先绑定一张银行卡，用于收款 </p>
            </div>
            <div class=" px-2  flex  text-[10px] mt-2 flex justify-center">
                <p>取款遇到问题？联系<span class="text-blue-500">人工客服</span>解决</p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import router from '@/router';
import { ref } from 'vue';
const tokenActive = ref(1);
const active = ref(1);
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
const timeList = ref([
    {
        id: 1,
        name: '0-9小时之内取款-加送0.2%',
    },
    {
        id: 2,
        name: '0-9小时之内取款-加送0.4%',
    },
    {
        id: 3,
        name: '0-9小时之内取款-加送0.6%',
    },
    {
        id: 4,
        name: '0-9小时之内取款-加送0.8%',
    },
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
        name: '皇冠体育 拷贝',
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
