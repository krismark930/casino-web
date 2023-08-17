<template>
    <div class="animated fadeInLeft px-1">
        <div class="">
            <div class="  py-[10px] rounded-sm px-1 text-[11px]">
                <div class="flex z-0 text-[10px] grid grid-cols-4 gap-[5px]">
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
        <p class="w-full h-[1px] bg-blue-100 mx-1"></p>
        <div class="text-[12px] px-1 pt-[5px]">
            赔率：<span class="text-red-500">40</span>
        </div>
        <div  v-for="(item, index) in data" :key="index" >
            <div class=" py-[10px]  flex items-center justify-between rounded-sm">
                <div class="flex justify-start pl-1 text-[12px]">
                    {{ item.title }}
                </div>
                <div class="w-[200px] grid grid-cols-5 gap-[10px]">
                    <div v-for="(subItem, index) in item.buttonList" :key="index" >
                        <lottery-circle-item :item="subItem" :isImg="true" :isActive="false" />
                    </div>
                </div>
                <div class=" h-[50px] w-[8px] rounded-l-md">
                </div>
            </div>
            <p v-if="data.length > index+1" class="w-full h-[1px] bg-blue-100 mx-1"></p>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref, toRefs} from 'vue';
import LotteryCircleItem from '@/components/global/lotteryCircleItem.vue';
const active = ref(1);

const selectButton = (id:number) => {
    active.value = id;
}
// const textActive = ref(0);
const state = defineProps<{data:Array<any>, buttonList:Array<any>}>();
const { data , buttonList } = toRefs(state);

</script>