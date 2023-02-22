<template>
    <div class="w-full text-[10px]">
        <div class="flex h-[34px] w-full border-b border-gray-300">
            <div class=" w-[100px] flex items-center justify-center  border-r border-gray-300">期号</div>
            <div class="w-full  flex-cols items-center justify-between">
                <div class="flex justify-between items-center h-full">
                    <div v-for="(item, index) in headList" :key="index" class="w-full h-full border-r border-gray-300 text-center">
                        <div :class="[item.subTitle?'':'h-full']" class="w-full  flex items-center justify-center">
                            {{item.title}}
                        </div>
                        <div v-if="item.subTitle" class="w-full text-center py-[1.5px] flex justify-between">
                            <p v-for="(subItem, index) in item.subTitle" :key="index" 
                            :class="item.subTitle.length - index !== 2? '':' border-r'"
                            class="w-full h-full flex items-center justify-center border-t border-gray-300 ">
                                {{ subItem }}
                            </p>
                        </div>
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
                        <div class="w-full h-full border-r border-gray-300  flex items-center justify-center" v-for="(subItem,subIndex) in 3" :key="subIndex">
                            <div v-if="subIndex===0">
                                <span 
                             class="rounded-full px-[4px]">2,3,3 </span>
                            </div>
                            <div v-if="subIndex===1" class="flex justify-between w-full">
                                <p class="w-full text-center">8</p>
                                <p class="w-full text-center text-blue-500">单</p>
                            </div>
                            <div v-if="subIndex===2" class="flex justify-between w-full">
                                <p class="w-full text-center text-[#4C007D]">虾</p>
                                <p class="w-full text-center text-[#D50000]">葫芦</p>
                                <p class="w-full text-center text-[#D40000]">葫芦</p>
                            </div>
                        </div>
                    </div>
                    <div v-else class="flex justify-between h-[23px] ">
                        <p class="w-full h-full border-r border-gray-300  flex items-center justify-center" v-for="(subItem,subIndex) in 3" :key="subIndex" >
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
    {
        title:"全部走势"
    },
    {
        title:"总和",
        subTitle:["和值","单双"]
    },
    {
        title:"鱼虾蟹"
    }
])
const dataList = ref([
    {
        id: 1,
        day: "271002",
        values: [
            {
                value: "2,3,3"
            },
            {
                value: 2,
                bg:'#009611'
            },
            {
                value: 3,
                bg:'#c20000'
            },
            {
                value: 1,
                bg:'#fe6300'
            },
            {
                value: 3,
                bg:'transparent'
            },
            {
                value: 2,
                bg:'transparent'
            }
        ]
    },{
        id: 2,
        day: "271001",
        values: [
            {
                value: 1,
                bg:'transparent'
            },
            {
                value: 2,
                bg:'#009611'
            },
            {
                value: 3,
                bg:'#c20000'
            },
            {
                value: 1,
                bg:'#fe6300'
            },
            {
                value: 3,
                bg:'transparent'
            },
            {
                value: 2,
                bg:'transparent'
            }
        ]
    },{
        id: 3,
        day: "271000",
        values: [
        {
                value: 1,
                bg:'transparent'
            },
            {
                value: 2,
                bg:'#009611'
            },
            {
                value: 3,
                bg:'#c20000'
            },
            {
                value: 1,
                bg:'#fe6300'
            },
            {
                value: 3,
                bg:'transparent'
            },
            {
                value: 2,
                bg:'transparent'
            }
        ]
    }
])

</script>
