<template>
    <div class="w-full text-[10px]">
        <div class="flex h-[34px] w-full border-b border-gray-300">
            <div class=" w-[100px] flex items-center justify-center  border-r border-gray-300">期号</div>
            <div class="w-full  flex items-center justify-center">全部走势</div>
        </div>
        <div class="w-full text-[10px] ">
            <div class="flex justify-between" 
            :class="[index%2===1?' bg-white':'bg-[#f4faff]']"
            v-for="(index) in 16" :key="index">
                <div class="w-[100px] h-[23px]  flex items-center justify-center  border-r border-gray-300">
                    {{dataList[index-1]&&dataList[index-1].day}}
                </div>
                <div class="w-full ">
                    <div v-if="dataList.length > (index-1)" class=" flex items-center justify-center">
                        <p class="px-1" v-for="(subItem,subIndex) in dataList[index-1].values" :key="subIndex">{{subItem}} </p>
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
import {ref} from 'vue';
const dataList = ref([
    {
        id: 1,
        day: "271002",
        values: [
            1,3,3
        ]
    },{
        id: 2,
        day: "271001",
        values: [
            1,3,3
        ]
    },{
        id: 3,
        day: "271000",
        values: [
            1,3,3
        ]
    }
])
</script>
