<template>
    <div class="w-full text-[10px]">
        <div class="flex h-[34px] w-full border-b border-gray-300">
            <div class=" w-[100px] flex items-center justify-center  border-r border-gray-300">期号</div>
            <div class="w-full  flex-cols items-center justify-between">
                <p class="border-b border-gray-300 w-full text-center py-[1.5px]">猜中位</p>
                <div class="flex justify-between">
                    <div v-for="(item, index) in 7" :key="index" class="w-full h-full border-r border-gray-300 text-center">
                        {{index+3}}
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full text-[10px] ">
            <div class="flex justify-between" 
            :class="[index%2===1?' bg-white':'bg-[#f4faff]']"
            v-for="(index) in 16" :key="index">
                <div class="w-[100px] h-[23px]   border-r border-gray-300">
                    <div v-if="dataList[index-1]" class="w-full flex items-center justify-center  h-[23px]">
                        {{dataList[index-1].day}}
                    </div>
                </div>
                <div class="w-full ">
                    <div v-if="dataList.length > (index-1)" class="flex justify-between h-[23px] ">
                        <p class="w-full h-full border-r border-gray-300  flex items-center justify-center" v-for="(subItem,subIndex) in dataList[index-1].values" :key="subIndex">
                            <span 
                            :style="{ 'color': subItem.color==='black' ? '#000000' :subItem.color }"
                           :class="[subItem.color==='black' ? 'text-black':'text-white']"
                            class="rounded-full p-[1px] px-[2.5px]">{{subItem.color==='black' ?'':'0'}}{{subItem.value}} </span>
                        </p>
                    </div>
                   
                    <div v-else class="flex justify-between h-[23px] ">
                        <p class="w-full h-full border-r border-gray-300  flex items-center justify-center" v-for="(subItem,subIndex) in 7" :key="subIndex" >
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
const dataList = ref([
    {
        id: 1,
        day: "271002",
        values: [
            {
                value: 3,
                color:'black'
            },
            {
                value: 3,
                color:'black'
            },
            {
                value: 3,
                color:'black'
            },
            {
                value: 3,
                color:'black'
            },
            {
                value: 7,
                color:'#4d0fa6'
            },
            {
                value: 2,
                color:'black'
            },
            {
                value: 3,
                color:'black'
            }
        ]
    },{
        id: 2,
        day: "271001",
        values: [
            {
                value: 3,
                color:'black'
            },
            {
                value: 3,
                color:'black'
            },
            {
                value: 3,
                color:'black'
            },
            {
                value: 2,
                color:'black'
            },
            {
                value: 7,
                color:'#4d0fa6'
            },
            {
                value: 2,
                color:'black'
            },
            {
                value: 3,
                color:'black'
            }
        ]
    },{
        id: 3,
        day: "271000",
        values: [
        {
                value: 1,
                color:'black'
            },
            {
                value: 2,
                color:'black'
            },
            {
                value: 3,
                color:'black'
            },
            {
                value: 1,
                color:'black'
            },
            {
                value: 1,
                color:'black'
            },
            {
                value: 8,
                color:'#ce151d'
            },
            {
                value: 1,
                color:'black'
            }
        ]
    },{
        id: 3,
        day: "",
        values: [
        {
                value: 3,
                color:'#3778e5'
            },
            {
                value: 4,
                color:'#ea6f24'
            },
            {
                value: 5,
                color:'#29d2f5'
            },
            {
                value: 6,
                color:'#12a021'
            },
            {
                value: 7,
                color:'#4d0fa6'
            },
            {
                value: 8,
                color:'#ce151d'
            },
            {
                value: 9,
                color:'#b71a9a'
            }
        ]
    }
])
const bottomDataList = ref([
    {
        id: 1,
        day: "271001",
        values:[2, 2, 0, 2, 3, 2]
    },
    {
        id: 2,
        day: "271002",
        values:[2, 2, 0, 2, 3, 2]
    },
    {
        id: 3,
        day: "271003",
        values:[2, 2, 0, 2, 3, 2]
    },
    {
        id: 4,
        day: "271002",
        values:[2, 2, 0, 2, 3, 2]
    }
]);
</script>
