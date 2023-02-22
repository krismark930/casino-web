<template>
    <div class="animated fadeInLeft">
        <div v-if="hasLocation" class="mb-1">
            <div class=" pt-[15px]  rounded-sm px-1 text-[11px]">
                <div class="flex z-0  text-[11px] grid grid-cols-5 gap-[6px]">
                    <button
                        class="text-gray-400 rounded-sm px-[10px] py-[5px] border-gray-400 border w-full whitespace-nowrap mr-1"
                        v-for="(item, index) in buttonList"
                        :key="index"
                        @click="selectButton()"
                    >
                        {{ item.title }}
                    </button>
                </div>
            </div>
        </div>
        <div class=" grid grid-cols-4 gap-1 px-2 bg-white m-[6px] p-[8px] flex items-center justify-between">
            <div  v-for="(item, index) in data" :key="index" class="">
                <lottery-always-color-item :item="item" :isImg="false" :isActive="false" :class="[item.value? 'bg-white text-blue-500':'bg-white text-blue-500']"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref, toRefs} from 'vue';
import LotteryAlwaysColorItem from '@/components/global/lotteryAlwaysColorItem.vue';
import lotteryItem from '@/components/global/lotteryItem.vue';
const state = defineProps<{data:Array<any>, hasLocation:boolean, buttonList:Array<any> }>();
const { data, hasLocation, buttonList } = toRefs(state);
const selectButton = () => {

}
</script>
<style>
</style>