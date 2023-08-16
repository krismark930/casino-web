<template>
    <div class="w-full text-[10px]">
        <div class="flex h-[34px] w-full border-b border-gray-300">
            <div class=" w-[100px] flex items-center justify-center  border-r border-gray-300">期号</div>
            <div class="w-full  flex-cols items-center justify-between">
                <div class="flex justify-between  h-[34px] items-center">
                    <div v-for="(item, index) in 6" :key="index" class="w-full h-full border-r border-gray-300 text-center flex items-center justify-center">
                        {{index+1}}
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
                        <p class="w-full h-full border-r border-gray-300  flex items-center justify-center" v-for="(subItem,subIndex) in 6" :key="subIndex">
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
import {ref} from 'vue';
const headList = ref([
    "和值",
    "和值 大小单双",
    "三同号",
    "三不同号",
    "三连号",
    "二同号",
])

const dataList = ref([
    {
        id: 1,
        day: "271001",
        values:[
            {
                value: 7,
                color: 'black'
            },
            {
                value: "小单",
                color: '#0000FF'
            },
            {
                value: 3,
                color: 'black'
            },
            {
                value: 3,
                color: 'black'
            },
            {
                value: 3,
                color: 'black'
            },
            {
                value: "二同",
                color: '#0000FF'
            }
        ]
    },
    {
        id: 1,
        day: "271001",
        values:[
            {
                value: 7,
                color: 'black'
            },
            {
                value: "小单",
                color: '#0000FF'
            },
            {
                value: 3,
                color: 'black'
            },
            {
                value: 3,
                color: 'black'
            },
            {
                value: 3,
                color: 'black'
            },
            {
                value: 3,
                color: 'black'
            }
        ]
    },
    {
        id: 1,
        day: "271001",
        values:[
            {
                value: 7,
                color: 'black'
            },
            {
                value: "小单",
                color: '#0000FF'
            },
            {
                value: 3,
                color: 'black'
            },
            {
                value: 3,
                color: 'black'
            },
            {
                value: 3,
                color: 'black'
            },
            {
                value: 3,
                color: 'black'
            }
        ]
    },
]);
</script>
