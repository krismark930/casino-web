<template>
    <div class="w-full text-[10px]">
        <div class="flex h-[34px] w-full border-b border-gray-300">
            <div class=" w-[100px] flex items-center justify-center  border-r border-gray-300">期号</div>
            <div class="w-full  flex-cols items-center justify-between">
                <div class="flex justify-between  h-[34px] items-center">
                    <div v-for="(item, index) in headList" :key="index" class="w-full h-full border-r border-gray-300 text-center items-center justify-center">
                        <div :class="[item.subTitle.length > 0? 'h-1/2':'h-full']" class=" border-b border-gray-300 flex items-center justify-center">
                            {{item.title}}
                        </div>
                        <div class="flex w-full justify-between h-1/2">
                            <div v-for="(subItem, index) in item.subTitle" :key="index" :class="[index === 0? 'w-full h-full':'border-l border-gray-300 w-full h-full']">
                            {{ subItem }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full text-[10px] ">
            <div class="flex justify-between" 
            :class="[index%2===1?' bg-white':'bg-[#f4faff]']"
            v-for="(index) in 16" :key="index">
                <div class="w-[100px] h-[23px]  border-r border-gray-300 ">
                    <div v-if="dataList[index-1]" class="w-full flex items-center justify-center  h-[23px]">
                        {{dataList[index-1].day}}
                    </div>
                </div>
                <div class="w-full ">
                    <div v-if="dataList.length > (index-1)" class="flex justify-between h-[23px] ">
                        <p class="w-full h-full border-r border-gray-300  flex items-center justify-center" v-for="(subItem,subIndex) in dataList[index-1].values" :key="subIndex">
                            <span 
                            :style="{ 'color': subItem.color}"
                            class="rounded-full px-[4px]">{{subItem.value}} </span>
                        </p>
                    </div>
                    <div v-else class="flex justify-between h-[23px] ">
                        <p class="w-full h-full border-r border-gray-300  flex items-center justify-center" v-for="(subItem,subIndex) in dataList[0].values.length" :key="subIndex">
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="h-[34px] bg-[#2674ff] justify-center flex items-center text-white rounded-b-md shadow-lg">
            关闭
        </div>
    </div>
</template>
<script setup lang="ts">
import {ref, toRefs} from 'vue';
const state = defineProps<{headList:Array<any>, dataList:Array<any>}>();
const {headList, dataList} = toRefs(state);

</script>
