<template>
    <div class="w-full text-[10px]">
        <div class="flex h-[34px] w-full border-b border-gray-300">
            <div class=" w-[100px] flex items-center justify-center  border-r border-gray-300">期号</div>
            <div class="w-full  flex-cols items-center justify-between">
                <p class="border-b border-gray-300 w-full text-center py-[1.5px]">定单双</p>
                <div class="flex justify-between">
                    <div v-for="(item, index) in headList" :key="index" class="w-full h-full border-r border-gray-300 text-center">
                        {{item}}
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
                            class="rounded-full p-[1px] px-[2.5px]">{{subItem.value}} </span>
                        </p>
                    </div>
                   
                    <div v-else class="flex justify-between h-[23px] ">
                        <p class="w-full h-full border-r border-gray-300  flex items-center justify-center" v-for="(subItem,subIndex) in 6" :key="subIndex" >
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
    "5单0双",
    "4单1双",
    "3单2双",
    "2单3双",
    "1单4双",
    "0单5双",
])
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
                value: "4单1双",
                color:'#2674FF'
            },
            {
                value: 1,
                color:'black'
            },
            {
                value: 4,
                color:'black'
            },
            {
                value: 5,
                color:'black'
            },
            {
                value: 6,
                color:'black'
            }
        ]
    },{
        id: 2,
        day: "271001",
        values: [
            {
                value: 2,
                color:'black'
            },
            {
                value: 5,
                color:'black'
            },
            {
                value: "3单2双",
                color:'#00C32E'
            },
            {
                value: 3,
                color:'black'
            },
            {
                value: 4,
                color:'black'
            },
            {
                value: 5,
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
                value: 4,
                color:'black'
            },
            {
                value: "3单2双",
                color:'#00C32E'
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
                value: 4,
                color:'black'
            }
        ]
    },{
        id: 4,
        day: "",
        values: [
        {
                value: "5单0双",
                color:'#FF5400 '
            },
            {
                value: "",
                color:'#ea6f24'
            },
            {
                value: "",
                color:'#29d2f5'
            },
            {
                value: "",
                color:'#12a021'
            },
            {
                value: "",
                color:'#4d0fa6'
            },
            {
                value: "",
                color:'#ce151d'
            }
        ]
    },{
        id: 5,
        day: "",
        values: [
        {
                value: "",
                color:'#FF5400 '
            },
            {
                value: "",
                color:'#ea6f24'
            },
            {
                value: "",
                color:'#29d2f5'
            },
            {
                value: "2单3双",
                color:'#8000B0'
            },
            {
                value: "",
                color:'#4d0fa6'
            },
            {
                value: "",
                color:'#ce151d'
            }
        ]
    },{
        id: 6,
        day: "",
        values: [
        {
                value: "",
                color:'#FF5400 '
            },
            {
                value: "",
                color:'#ea6f24'
            },
            {
                value: "",
                color:'#29d2f5'
            },
            {
                value: "",
                color:'#12a021'
            },
            {
                value: "1单4双",
                color:'#F00E0E'
            },
            {
                value: "",
                color:'#ce151d'
            }
        ]
    },{
        id: 4,
        day: "",
        values: [
        {
                value: "",
                color:'#FF5400 '
            },
            {
                value: "",
                color:'#ea6f24'
            },
            {
                value: "",
                color:'#29d2f5'
            },
            {
                value: "",
                color:'#12a021'
            },
            {
                value: "",
                color:'#F00E0E'
            },
            {
                value: "0单5双",
                color:'#00DBE3'
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
