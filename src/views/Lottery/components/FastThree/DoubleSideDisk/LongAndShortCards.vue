<template>
    <div class="animated fadeInLeft">
        <div class="bg-white m-[6px] p-[8px] flex items-center justify-between">
            <div class="w-5 text-[10px]">
                围骰 <br/>全骰
            </div>
            <div class="w-full grid grid-cols-3 gap-1">
                <div v-for="(item, index) in roundDiceList" :key="index" @click="() => active = item.id">
                    <lottery-three-item :item="item" :isImg="true" :isActive="item.id === active" :class="[item.id === active? 'bg-[#2674ff] text-white':'bg-white text-gray-400']"/>
                </div>
            </div>
        </div>
        <div class="bg-white m-[6px] p-[8px] flex items-center justify-between">
            <div class="w-5 text-[10px]">
                短牌
            </div>
            <div class="w-full grid grid-cols-3 gap-1">
                <div v-for="(item, index) in shortDeck" :key="index" @click="() => deckActive = item.id">
                    <lottery-three-item :item="item" :isImg="true" :isActive="item.id === deckActive" :class="[item.id === deckActive? 'bg-[#2674ff] text-white':'bg-white text-gray-400']"/>
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
        value: 5.8,
        isImg: true,
        icons: [
            new URL('@/assets/images/fastthree/dice1.png', import.meta.url).href,
            new URL('@/assets/images/fastthree/dice2.png', import.meta.url).href,
        ]
    },
    {
        id: 2,
        value: 5.8,
        isImg: true,
        icons: [
            new URL('@/assets/images/fastthree/dice1.png', import.meta.url).href,
            new URL('@/assets/images/fastthree/dice3.png', import.meta.url).href,
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
    },
    {
        id: 7,
        value: 5.8,
        isImg: true,
        icons: [
            new URL('@/assets/images/fastthree/dice6.png', import.meta.url).href,
            new URL('@/assets/images/fastthree/dice6.png', import.meta.url).href,
        ]
    },
    {
        id: 8,
        value: 5.8,
        isImg: true,
        icons: [
            new URL('@/assets/images/fastthree/dice6.png', import.meta.url).href,
            new URL('@/assets/images/fastthree/dice6.png', import.meta.url).href,
        ]
    },
    {
        id: 9,
        value: 5.8,
        isImg: true,
        icons: [
            new URL('@/assets/images/fastthree/dice6.png', import.meta.url).href,
            new URL('@/assets/images/fastthree/dice6.png', import.meta.url).href,
        ]
    },
    {
        id: 10,
        value: 5.8,
        isImg: true,
        icons: [
            new URL('@/assets/images/fastthree/dice6.png', import.meta.url).href,
            new URL('@/assets/images/fastthree/dice6.png', import.meta.url).href,
        ]
    },
    {
        id: 11,
        value: 5.8,
        isImg: true,
        icons: [
            new URL('@/assets/images/fastthree/dice6.png', import.meta.url).href,
            new URL('@/assets/images/fastthree/dice6.png', import.meta.url).href,
        ]
    },
    {
        id: 12,
        value: 5.8,
        isImg: true,
        icons: [
            new URL('@/assets/images/fastthree/dice6.png', import.meta.url).href,
            new URL('@/assets/images/fastthree/dice6.png', import.meta.url).href,
        ]
    },
    {
        id: 13,
        value: 5.8,
        isImg: true,
        icons: [
            new URL('@/assets/images/fastthree/dice6.png', import.meta.url).href,
            new URL('@/assets/images/fastthree/dice6.png', import.meta.url).href,
        ]
    },
    {
        id: 17,
        value: 5.8,
        isImg: true,
        icons: [
            new URL('@/assets/images/fastthree/dice6.png', import.meta.url).href,
            new URL('@/assets/images/fastthree/dice6.png', import.meta.url).href,
        ]
    },
    {
        id: 18,
        value: 5.8,
        isImg: true,
        icons: [
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