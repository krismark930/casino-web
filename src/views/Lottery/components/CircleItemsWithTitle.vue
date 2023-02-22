<template>
    <p class="text-[11px] px-2 py-[8px]"> 奖金：<span class="text-orange-600">0.0352~0.2116</span> 元 </p>
    <div class="animated fadeInLeft px-1 ">
        <div class="h-[380px] overflow-y-auto">
            <div v-if="hasLocation" class="mb-1">
                <div class="bg-white  pb-[5px]  rounded-sm px-1 text-[11px]">
                    <div class="flex items-center py-[2px]">
                        <div class="bg-blue-500 w-[2px] h-[10px] mr-[5px]" >
                        </div>
                        <p>位置选择</p>
                    </div>
                    <div class="flex z-0 h-[37px] text-[11px]">
                        <button
                            :class="[
                                item.id === 4 || item.id === 5  
                                    ? 'bg-[#2674ff] text-white'
                                    : 'bg-white text-black'
                            ]"
                            class="text-white rounded-sm px-[10px] my-[5px] border-blue-300 border w-full whitespace-nowrap mr-1"
                            v-for="(item, index) in buttonList"
                            :key="index"
                            @click="selectButton()"
                        >
                            {{ item.name }}
                        </button>
                    </div>
                    <div class="text-gray-400 py-[3px]">
                        温馨提示： <br/>
                        您选择了<span class="text-red-500">2</span>个位置
                    </div>
                </div>
            </div>
            <div v-for="(item, index) in data" :key="index" class="bg-white  py-[12px]  flex items-center justify-between rounded-sm mt-1">
                <div class="flex justify-start pl-1 text-[12px]">
                    {{item.title}}
                </div>
                <div class="w-[210px] grid grid-cols-5 gap-[10px]">
                    <div v-for="(subItem, index) in item.buttonList" :key="index" @click="() => active = subItem.id">
                        <lottery-circle-item :item="subItem" :isImg="true" :isActive="false"/>
                    </div>
                </div>
                <div class="bg-[#b0cef3] h-[50px] w-[8px] rounded-l-md">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref, toRefs} from 'vue';
import LotteryCircleItem from '@/components/global/lotteryCircleItem.vue';
const active = ref(1);
const buttonList = ref([
    {
        id: 1,
        name: '万位'
    },
    {
        id: 2,
        name: '千位'
    },
    {
        id: 3,
        name: '百位'
    },
    {
        id: 4,
        name: '十位'
    },
    {
        id: 5,
        name: '个位'
    },
])
const selectButton = () => {

}
// const textActive = ref(0);
const state = defineProps<{data:Array<any>, hasLocation:boolean}>();
const { data , hasLocation} = toRefs(state);

</script>