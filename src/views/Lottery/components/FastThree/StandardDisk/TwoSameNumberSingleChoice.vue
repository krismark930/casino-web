<template>
    <p class="text-[11px] px-2 pt-[5px]">奖金：<span class="text-orange-600">0.0352~0.2116</span> 元 </p>
    <div class="animated fadeInLeft">
        <div class="bg-white mx-[6px] mt-[3px] p-[8px] flex items-center justify-between">
            <div class="w-5 text-[10px]">
                同号
            </div>
            <div class="w-full grid grid-cols-3 gap-1">
                <div v-for="(item, index) in sameNumberList" :key="index" @click="() => sameNumberActive = item.id">
                    <lottery-three-item :item="item" :isImg="true" :isActive="item.id === sameNumberActive" :class="[item.id === sameNumberActive? 'bg-[#2674ff] text-white':'bg-white text-gray-400']"/>
                </div>
            </div>
        </div>
        <div class="bg-white m-[6px] mt-[8px] p-[8px] flex items-center justify-start">
            <div class="w-[42px] text-[10px]">
                不同号
            </div>
            <div class="w-full grid grid-cols-3 gap-1">
                <div v-for="(item, index) in differentList" :key="index" @click="() => differentActive = item.id">
                    <lottery-three-item :item="item" :isImg="true" :isActive="item.id === differentActive" :class="[item.id === differentActive? 'bg-[#2674ff] text-white':'bg-white text-gray-400']"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import LotteryThreeItem from '@/components/global/lotteryThreeItem.vue';
const sameNumberActive = ref(1);
const differentActive = ref(1);
const sameNumberList = ref([
    {
        id: 1,
        isImg: true,
        icons: [
            new URL('@/assets/images/fastthree/dice1.png', import.meta.url).href,
            new URL('@/assets/images/fastthree/dice1.png', import.meta.url).href,
        ]
    },
    {
        id: 2,
        isImg: true,
        icons: [
            new URL('@/assets/images/fastthree/dice2.png', import.meta.url).href,
            new URL('@/assets/images/fastthree/dice2.png', import.meta.url).href,
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
            new URL('@/assets/images/fastthree/dice4.png', import.meta.url).href,
        ]
    },
    {
        id: 5,
        isImg: true,
        icons: [
            new URL('@/assets/images/fastthree/dice5.png', import.meta.url).href,
            new URL('@/assets/images/fastthree/dice5.png', import.meta.url).href,
        ]
    },
    {
        id: 6,
        isImg: true,
        icons: [
            new URL('@/assets/images/fastthree/dice6.png', import.meta.url).href,
            new URL('@/assets/images/fastthree/dice6.png', import.meta.url).href,
        ]
    }
]);
const differentList = ref([
    {
        id: 1,
        isImg: true,
        icons: [
            new URL('@/assets/images/fastthree/dice1.png', import.meta.url).href,
        ]
    },
    {
        id: 2,
        isImg: true,
        icons: [
            new URL('@/assets/images/fastthree/dice2.png', import.meta.url).href,
        ]
    },
    {
        id: 3,
        isImg: true,
        icons: [
            new URL('@/assets/images/fastthree/dice3.png', import.meta.url).href,
        ]
    },
    {
        id: 4,
        isImg: true,
        icons: [
            new URL('@/assets/images/fastthree/dice4.png', import.meta.url).href,
        ]
    },
    {
        id: 5,
        isImg: true,
        icons: [
            new URL('@/assets/images/fastthree/dice5.png', import.meta.url).href,
        ]
    },
    {
        id: 6,
        isImg: true,
        icons: [
            new URL('@/assets/images/fastthree/dice6.png', import.meta.url).href,
        ]
    }
]);
</script>

<style>
</style>