<template>
    <p class="text-[11px] px-2 py-[8px]">奖金：<span class="text-orange-600">0.0352~0.2116</span> 元 </p>
    <div class="animated fadeInLeft px-1">
        <div class="bg-white  py-[12px]  flex items-center justify-center rounded-sm">
            <div class=" grid grid-cols-7 gap-[15px]">
                <div v-for="(item, index) in data" :key="index" @click="() => active = item.id">
                    <lottery-circle-item :item="item" :isImg="true" :isActive="false" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref, toRefs} from 'vue';
import LotteryCircleItem from '@/components/global/lotteryCircleItem.vue';
const active = ref(1);

// const textActive = ref(0);
const state = defineProps<{data:Array<any>}>();
const { data } = toRefs(state);

</script>