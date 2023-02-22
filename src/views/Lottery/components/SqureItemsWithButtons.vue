<template>
    <div class="animated fadeInLeft">
        <div class="">
            <div class="  py-[7px] rounded-sm px-2 text-[11px]">
                <div class="flex z-0 text-[10px] grid grid-cols-5 gap-[5px]">
                    <button
                        :class="[active === item.id? 'text-blue-500 bg-blue-50':'text-black bg-white']"
                        class=" rounded-sm px-[2px] py-[5px] border-blue-300 border w-full whitespace-nowrap mr-1"
                        v-for="(item, index) in buttonList"
                        :key="index"
                        @click="selectButton(item.id)"
                    >
                        {{ item.title }}
                    </button>
                </div>
            </div>
        </div>
        <div class="px-2">
            <p class="h-[1px] w-full bg-gray-200"> </p>
        </div>
        <div class=" grid grid-cols-4 gap-1 px-2  p-[8px] flex items-center justify-between">
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

const active = ref(1);

const selectButton = (id:number) => {
    active.value = id;
}
const state = defineProps<{data:Array<any>, buttonList:Array<any>}>();
const { data , buttonList } = toRefs(state);


</script>

<style>
</style>