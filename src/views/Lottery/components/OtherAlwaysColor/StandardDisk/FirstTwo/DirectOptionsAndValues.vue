<template>
    <p class="text-[11px] px-2 py-[8px]">奖金：<span class="text-orange-600">0.0352~0.2116</span> 元 </p>
    <div class="animated fadeInLeft px-1">
        <div class="bg-white  py-[12px]  flex items-center justify-between rounded-sm">
            <div class="flex justify-start pl-1 text-[12px]">
                
            </div>
            <div class="w-[200px] grid grid-cols-5 gap-[10px]">
                <div v-for="(item, index) in numberList" :key="index" @click="() => active = item.id">
                    <lottery-circle-item :item="item" :isImg="true" :isActive="false" />
                </div>
            </div>
            <div class="bg-[#b0cef3] h-[50px] w-[8px] rounded-l-md">
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
        value: 1
    },
    {
        id: 2,
        value: 2
    },
    {
        id: 3,
        value: 3
    },
    {
        id: 4,
        value: 4
    },
    {
        id: 5,
        value: 5
    },
    {
        id: 6,
        value: 6
    },
    {
        id: 7,
        value: 7
    },
    {
        id: 8,
        value: 8
    },
    {
        id: 9,
        value: 9
    },
    {
        id: 10,
        value: 10
    },
    {
        id: 11,
        value: 11
    },
    {
        id: 12,
        value: 12
    },
    {
        id: 13,
        value: 13
    },
    {
        id: 14,
        value: 14
    },
    {
        id: 15,
        value: 15
    },
    {
        id: 16,
        value: 16
    },
    {
        id: 17,
        value: 17
    },
    {
        id: 18,
        value: 18
    }
]);
</script>