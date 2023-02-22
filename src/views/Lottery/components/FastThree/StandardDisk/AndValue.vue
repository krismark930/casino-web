<template>
    <p class="text-[11px] px-2 pt-[5px]">奖金：<span class="text-orange-600">0.0352~0.2116</span> 元 </p>
    <div class="animated fadeInLeft">
        <div class="bg-white mt-[3px] py-[8px] pl-[60px] flex items-center justify-between">
            <div class="w-[200px] grid grid-cols-5 gap-[7px]">
                <div v-for="(item, index) in numberList" :key="index" @click="() => active = item.id">
                    <lottery-circle-item :item="item" :isImg="true" :isActive="item.id === active" />
                </div>
            </div>
            <div class="w-[150px] grid grid-cols-3 gap-[7px] px-2">
                <div v-for="(item, index) in textList" :key="index" @click="() => textActive = item.id">
                    <lottery-circle-item :item="item" :isImg="true" :isActive="item.id === textActive" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import LotteryCircleItem from '@/components/global/lotteryCircleItem.vue';
const active = ref(1);
const textActive = ref(0);
const numberList = ref([
    {
        id: 1,
        value: 3
    },
    {
        id: 2,
        value: 4
    },
    {
        id: 3,
        value: 5
    },
    {
        id: 4,
        value: 6
    },
    {
        id: 5,
        value: 7
    },
    {
        id: 6,
        value: 8
    },
    {
        id: 7,
        value: 9
    },
    {
        id: 8,
        value: 10
    },
    {
        id: 9,
        value: 11
    },
    {
        id: 10,
        value: 12
    },
    {
        id: 11,
        value: 13
    },
    {
        id: 12,
        value: 14
    },
    {
        id: 13,
        value: 15
    },
    {
        id: 14,
        value: 16
    },
    {
        id: 15,
        value: 17
    },
    {
        id: 16,
        value: 18
    }
]);
const textList = ref([
    {
        id: 1,
        value: "全"
    },
    {
        id: 2,
        value: "大"
    }
    ,
    {
        id: 3,
        value: "小"
    },
    {
        id: 4,
        value: "奇"
    },
    {
        id: 5,
        value: "偶"
    },
    {
        id: 6,
        value: "清"
    }
]);
</script>