<template>
    <p class="text-[11px] px-2 pt-[5px]">奖金：<span class="text-orange-600">0.0352~0.2116</span> 元 </p>
    <div class="animated fadeInLeft">
        <div class="bg-white mx-[6px] mt-[3px] p-[8px] flex items-center justify-between">
            <div class="w-5 text-[10px]">
                单选
            </div>
            <div class="w-full grid grid-cols-3 gap-1">
                <div v-for="(item, index) in roundDiceList" :key="index" @click="() => active = item.id">
                    <lottery-three-item :item="item" :isImg="true" :isActive="item.id === active" :class="[item.id === active? 'bg-[#2674ff] text-white':'bg-white text-gray-400']"/>
                </div>
            </div>
        </div>
        <div class="bg-white m-[6px] mt-[8px] p-[8px] flex items-center justify-start">
            <div class="w-[42px] text-[10px]">
                单选
            </div>
            <div class="m-[2px] w-[93px] border-[#2674ff] border rounded-sm py-[12px]">
                <div class="flex justify-start">
                    <div class="flex justify-start w-full px-[15px]">
                        <div class="flex justify-center w-full px-[5px] gap-[5px] shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] bg-white rounded-sm text-[10px] p-[3px]">
                            <div>三同号通选</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import LotteryThreeItem from '@/components/global/lotteryThreeItem.vue';
const active = ref(1);
const deckActive = ref(1);
const roundDiceList = ref([
    {
        id: 1,
        isImg: true,
        icons: [
            new URL('@/assets/images/fastthree/dice1.png', import.meta.url).href,
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
            new URL('@/assets/images/fastthree/dice2.png', import.meta.url).href,
        ]
    },
    {
        id: 3,
        isImg: true,
        icons: [
            new URL('@/assets/images/fastthree/dice3.png', import.meta.url).href,
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
            new URL('@/assets/images/fastthree/dice4.png', import.meta.url).href,
        ]
    },
    {
        id: 5,
        isImg: true,
        icons: [
            new URL('@/assets/images/fastthree/dice5.png', import.meta.url).href,
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
            new URL('@/assets/images/fastthree/dice6.png', import.meta.url).href,
        ]
    }
   
]);

const shortDeck = ref([
    {
        id: 1,
        value: 5.8,
        isImg: true,
        icons: [
            new URL('@/assets/images/fastthree/dice1.png', import.meta.url).href,
            new URL('@/assets/images/fastthree/dice1.png', import.meta.url).href,
        ]
    },
    {
        id: 2,
        value: 5.8,
        isImg: true,
        icons: [
            new URL('@/assets/images/fastthree/dice2.png', import.meta.url).href,
            new URL('@/assets/images/fastthree/dice2.png', import.meta.url).href,
        ]
    },
    {
        id: 3,
        value: 5.8,
        isImg: true,
        icons: [
            new URL('@/assets/images/fastthree/dice3.png', import.meta.url).href,
            new URL('@/assets/images/fastthree/dice3.png', import.meta.url).href,
        ]
    },
    {
        id: 4,
        value: 5.8,
        isImg: true,
        icons: [
            new URL('@/assets/images/fastthree/dice4.png', import.meta.url).href,
            new URL('@/assets/images/fastthree/dice4.png', import.meta.url).href,
        ]
    },
    {
        id: 5,
        value: 5.8,
        isImg: true,
        icons: [
            new URL('@/assets/images/fastthree/dice5.png', import.meta.url).href,
            new URL('@/assets/images/fastthree/dice5.png', import.meta.url).href,
        ]
    },
    {
        id: 6,
        value: 5.8,
        isImg: true,
        icons: [
            new URL('@/assets/images/fastthree/dice6.png', import.meta.url).href,
            new URL('@/assets/images/fastthree/dice6.png', import.meta.url).href,
        ]
    }
])
</script>

<style>
</style>