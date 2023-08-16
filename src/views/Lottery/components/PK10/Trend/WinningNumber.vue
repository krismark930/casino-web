<template>
    <div class="w-full text-[10px]">
        <div class="flex h-[34px] w-full border-b border-gray-300">
            <div class=" w-[100px] flex items-center justify-center  border-r border-gray-300">期号</div>
            <div class="w-full  flex-cols items-center justify-between">
                <div class="flex justify-between items-center h-full">
                    <div v-for="(item, index) in headList" :key="index" class="w-full h-full border-r border-gray-300 text-center flex items-center justify-center">
                        <p class="w-[15px] h-full flex items-center">
                        {{item}}
                        </p>
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
                            :style="{ 'background-color': subItem.color}"
                            class="rounded-sm w-[20px] h-[20px] text-white flex items-center justify-center text-[13px]">{{subItem.value}} </span>
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
    "冠 军",
    "亚 军",
    "第 三",
    "第 四",
    "第 五",
    "第 六",
    "第 七",
    "第 八",
    "第 九",
    "第 六"
])

const dataList = ref([
            {
                id: 1,
                day: "271001",
                values:[
                {
                id: 1,
                value: 10,
                color: '#00b816'
            },
            {
                id: 2,
                value: 3,
                color: '#292929'
            },
            {
                id: 3,
                value: 2,
                color: '#0043bb'
            },
            {
                id: 4,
                value: 6,
                color: '#37008a'
            },
            {
                id: 5,
                value: 4,
                color: '#ff6c00'
            },
            {
                id: 6,
                value: 5,
                color: '#00bdf4'
            },
            {
                id: 7,
                value: 1,
                color: '#e4d100'
            },
            {
                id: 8,
                value: 9,
                color: '#3c000b'
            },
            {
                id: 9,
                value: 7,
                color: '#e100e9'
            },
            {
                id: 10,
                value: 8,
                color: '#f70000'
            }
        ]
    },
    {
        id: 1,
        day: "271001",
        values:[
            {
                id: 1,
                value: 10,
                color: '#00b816'
            },
            {
                id: 2,
                value: 3,
                color: '#292929'
            },
            {
                id: 3,
                value: 2,
                color: '#0043bb'
            },
            {
                id: 4,
                value: 6,
                color: '#37008a'
            },
            {
                id: 5,
                value: 4,
                color: '#ff6c00'
            },
            {
                id: 6,
                value: 5,
                color: '#00bdf4'
            },
            {
                id: 7,
                value: 1,
                color: '#e4d100'
            },
            {
                id: 8,
                value: 9,
                color: '#3c000b'
            },
            {
                id: 9,
                value: 7,
                color: '#e100e9'
            },
            {
                id: 10,
                value: 8,
                color: '#f70000'
            }
        ]
    },
    {
        id: 1,
        day: "271001",
        values:[
            {
                id: 1,
                value: 10,
                color: '#00b816'
            },
            {
                id: 2,
                value: 3,
                color: '#292929'
            },
            {
                id: 3,
                value: 2,
                color: '#0043bb'
            },
            {
                id: 4,
                value: 6,
                color: '#37008a'
            },
            {
                id: 5,
                value: 4,
                color: '#ff6c00'
            },
            {
                id: 6,
                value: 5,
                color: '#00bdf4'
            },
            {
                id: 7,
                value: 1,
                color: '#e4d100'
            },
            {
                id: 8,
                value: 9,
                color: '#3c000b'
            },
            {
                id: 9,
                value: 7,
                color: '#e100e9'
            },
            {
                id: 10,
                value: 8,
                color: '#f70000'
            }
        ]
    },
]);
</script>
