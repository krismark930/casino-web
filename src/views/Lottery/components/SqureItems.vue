<template>
    <p class="text-[11px] px-2 pt-[6px]">奖金：<span class="text-orange-600">0.0352~0.2116</span> 元 </p>
    <div class="animated fadeInLeft">
        <div class=" grid grid-cols-4 gap-1 px-2 bg-white m-[6px] p-[8px] flex items-center justify-between">
            <div  v-for="(item, index) in data" :key="index" class="">
                <lottery-always-color-item :item="item" :isImg="false" :isActive="false" :class="[item.value? 'bg-white text-gray-800':'bg-white text-blue-500']"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref, toRefs} from 'vue';
import LotteryAlwaysColorItem from '@/components/global/lotteryAlwaysColorItem.vue';
import lotteryItem from '@/components/global/lotteryItem.vue';
const state = defineProps<{data:Array<any>}>();
const { data } = toRefs(state);

</script>

<style>
</style>