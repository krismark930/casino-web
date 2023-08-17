<template>
    <p class="text-[11px] px-2 pt-[5px]">奖金：<span class="text-orange-600">0.0352~0.2116</span> 元 </p>
    <div class="animated fadeInLeft">
        <div class="bg-white  mx-[6px] mt-[3px] py-[8px] px-[15px] flex items-center justify-center mt-[20px]">
            <div class="w-full grid grid-cols-4 gap-1">
                <div v-for="(item, index) in itemList" :key="index" @click="() => sizeActive = item.id" class="">
                    <lottery-item :item="item" :isImg="false" :isActive="item.id === sizeActive" :class="[item.id === sizeActive? 'bg-[#2674ff] text-white':'bg-white text-[#2674ff]']"/>
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
        title: "大",
    },
    {
        id: 2,
        title: "小",
    },
    {
        id: 3,
        title: "单",
    },
    {
        id: 4,
        title: "双",
    },
])

</script>

<style>
</style>