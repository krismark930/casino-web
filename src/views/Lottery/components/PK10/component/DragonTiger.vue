<template>
    <p class="text-[11px] px-2 py-[6px]">奖金：<span class="text-orange-600">0.0352~0.2116</span> 元 </p>
    <div class="animated fadeInLeft h-[380px] overflow-y-scroll">
        <div v-for="(item, index) in data" :key="index" class="bg-white m-[6px] p-[8px] flex items-center justify-between">
            <div class=" text-[10px] w-[120px]  items-center flex justify-center whitespace-nowrap">
                {{ item.title }}
            </div>
            <div class="w-full  gap-1 px-2 grid grid-cols-2 px-3 pr-5">
                <div v-for="(subItem, index) in item.buttonList" :key="index" class="">
                    <div v-if="isPK10">
                        <lottery-red-color-item :item="subItem" :isImg="false" :isActive="false"
                            :class="[subItem.value ? 'bg-white text-blue-500' : 'bg-white text-blue-500']" />
                    </div>
                    <div v-else>
                        <lottery-always-color-item :item="subItem" :isImg="false" :isActive="false"
                            :class="[subItem.value ? 'bg-white text-gray-800' : 'bg-white text-blue-500']" />
                    </div>
                </div>

            </div>
        </div>
        <!-- <div class="bg-white m-[6px] p-[8px] flex items-center justify-between">
            <div class="w-5 text-[10px]">
                短牌
            </div>
            <div class="w-full grid grid-cols-3 gap-1">
                <div v-for="(item, index) in shortDeck" :key="index" @click="() => deckActive = item.id">
                    <lottery-three-item :item="item" :isImg="true" :isActive="item.id === deckActive" :class="[item.id === deckActive? 'bg-[#2674ff] text-white':'bg-white text-gray-400']"/>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue';
import LotteryAlwaysColorItem from '@/components/global/LotteryAlwaysColorItem.vue';
import lotteryRedColorItem from '@/components/global/lotteryRedColorItem.vue';
const state = defineProps<{ data: Array<any>, isPK10: boolean }>();
const { data, isPK10 } = toRefs(state);

</script>

<style></style>