<template>
    <div class="animated fadeInLeft">
        <div class="bg-white m-[6px] p-[8px] flex items-center justify-between">
            <div class="w-5 text-[10px]">
                三军
            </div>
            <div class="w-full grid grid-cols-4 gap-1">
                <div v-for="(item, index) in itemList" :key="index" @click="() => active = item.id">
                    <lottery-item :item="item" :isImg="true" :isActive="item.id === active" :class="[item.id === active? 'bg-[#2674ff] text-white':'bg-white text-gray-400']"/>
                </div>
            </div>
        </div>

        <div class="bg-white m-[6px] p-[8px] flex items-center justify-between">
            <div class="w-5 text-[10px]">
                总和大小
            </div>
            <div class="w-full flex justify-center px-[78px]">
                <div class="w-full grid grid-cols-2 gap-1">
                    <div v-for="(item, index) in totalSizeList" :key="index" @click="() => sizeActive = item.id" class="">
                        <lottery-item :item="item" :isImg="false" :isActive="item.id === sizeActive" :class="[item.id === sizeActive? 'bg-[#2674ff] text-white':'bg-white text-[#2674ff]']"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import LotteryItem from '@/components/global/lotteryItem.vue';
const active = ref(1);
const sizeActive = ref(1);
const itemList = ref([
    {
        id: 1,
        value: 1.98,
        icon: new URL('@/assets/images/fastthree/dice1.png', import.meta.url).href,
    },
    {
        id: 2,
        value: 1.98,
        icon: new URL('@/assets/images/fastthree/dice2.png', import.meta.url).href,
    },
    {
        id: 3,
        value: 1.98,
        icon: new URL('@/assets/images/fastthree/dice3.png', import.meta.url).href,
    },
    {
        id: 4,
        value: 1.98,
        icon: new URL('@/assets/images/fastthree/dice4.png', import.meta.url).href,
    },
    {
        id: 5,
        value: 1.98,
        icon: new URL('@/assets/images/fastthree/dice5.png', import.meta.url).href,
    },
    {
        id: 6,
        value: 1.98,
        icon: new URL('@/assets/images/fastthree/dice6.png', import.meta.url).href,
    }
])
const changeActive = (id:number) => {
    active.value = id;
}
const totalSizeList = ref([
    {
        id: 1,
        value: 1.98,
        title: '大'
    },
    {
        id: 2,
        value: 1.98,
        title: '小',
    },
])
</script>

<style>
</style>