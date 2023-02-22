<template>
    <p class="text-[11px] px-2 pt-[5px]">奖金：<span class="text-orange-600">0.0352~0.2116</span> 元 </p>
    <div class="animated fadeInLeft">
        <div class="bg-white mx-[6px] mt-[3px] py-[8px] px-[30px] flex items-center justify-between">
            <div class="w-full grid grid-cols-3 gap-[7px]">
                <div v-for="(item, index) in roundDiceList" :key="index" @click="() => active = item.id">
                    <lottery-three-item :item="item" :isImg="true" :isActive="item.id === active" :class="[item.id === active? 'bg-[#2674ff] text-white':'bg-white text-gray-400']"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import LotteryThreeItem from '@/components/global/lotteryThreeItem.vue';
const active = ref(1);
const roundDiceList = ref([
    {
        id: 1,
        isImg: true,
        icons: [
            new URL('@/assets/images/fastthree/dice1.png', import.meta.url).href,
            new URL('@/assets/images/fastthree/dice2.png', import.meta.url).href,
        ]
    },
    {
        id: 2,
        isImg: true,
        icons: [
            new URL('@/assets/images/fastthree/dice1.png', import.meta.url).href,
            new URL('@/assets/images/fastthree/dice3.png', import.meta.url).href,
        ]
    },
    {
        id: 3,
        isImg: true,
        icons: [
            new URL('@/assets/images/fastthree/dice3.png', import.meta.url).href,
            new URL('@/assets/images/fastthree/dice3.png', import.meta.url).href,
        ]
    },
    {
        id: 4,
        isImg: true,
        icons: [
            new URL('@/assets/images/fastthree/dice4.png', import.meta.url).href,
            new URL('@/assets/images/fastthree/dice6.png', import.meta.url).href,
        ]
    },
    {
        id: 5,
        isImg: true,
        icons: [
            new URL('@/assets/images/fastthree/dice5.png', import.meta.url).href,
            new URL('@/assets/images/fastthree/dice6.png', import.meta.url).href,
        ]
    },
    {
        id: 6,
        isImg: true,
        icons: [
            new URL('@/assets/images/fastthree/dice6.png', import.meta.url).href,
            new URL('@/assets/images/fastthree/dice6.png', import.meta.url).href,
        ]
    },
    {
        id: 7,
        isImg: true,
        icons: [
            new URL('@/assets/images/fastthree/dice6.png', import.meta.url).href,
            new URL('@/assets/images/fastthree/dice6.png', import.meta.url).href,
        ]
    },
    {
        id: 8,
        isImg: true,
        icons: [
            new URL('@/assets/images/fastthree/dice6.png', import.meta.url).href,
            new URL('@/assets/images/fastthree/dice6.png', import.meta.url).href,
        ]
    },
    {
        id: 9,
        isImg: true,
        icons: [
            new URL('@/assets/images/fastthree/dice6.png', import.meta.url).href,
            new URL('@/assets/images/fastthree/dice6.png', import.meta.url).href,
        ]
    },
    {
        id: 10,
        isImg: true,
        icons: [
            new URL('@/assets/images/fastthree/dice6.png', import.meta.url).href,
            new URL('@/assets/images/fastthree/dice6.png', import.meta.url).href,
        ]
    },
    {
        id: 11,
        isImg: true,
        icons: [
            new URL('@/assets/images/fastthree/dice6.png', import.meta.url).href,
            new URL('@/assets/images/fastthree/dice6.png', import.meta.url).href,
        ]
    },
    {
        id: 12,
        isImg: true,
        icons: [
            new URL('@/assets/images/fastthree/dice6.png', import.meta.url).href,
            new URL('@/assets/images/fastthree/dice6.png', import.meta.url).href,
        ]
    },
    {
        id: 13,
        isImg: true,
        icons: [
            new URL('@/assets/images/fastthree/dice6.png', import.meta.url).href,
            new URL('@/assets/images/fastthree/dice6.png', import.meta.url).href,
        ]
    },
    {
        id: 14,
        isImg: true,
        icons: [
            new URL('@/assets/images/fastthree/dice6.png', import.meta.url).href,
            new URL('@/assets/images/fastthree/dice6.png', import.meta.url).href,
        ]
    },
    {
        id: 14,
        isImg: true,
        icons: [
            new URL('@/assets/images/fastthree/dice6.png', import.meta.url).href,
            new URL('@/assets/images/fastthree/dice6.png', import.meta.url).href,
        ]
    }
   
]);

</script>

<style>
</style>