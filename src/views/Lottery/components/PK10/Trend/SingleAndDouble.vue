<template>
    <div class="text-[10px]">
        <div class="w-screen  overflow-x-auto">
            <div class="flex h-[34px] border-b border-gray-300  ">
                <div class=" flex items-center justify-between">
                    <div class=" w-[80px] h-full flex items-center justify-center  border-r border-gray-300">期号</div>
                    <div class="flex justify-between items-center h-full">
                        <div v-for="(item, index) in headList" :key="index" class="w-[60px] h-full border-r border-gray-300 text-center">
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
            <div class="text-[10px] ">
                <div class="flex justify-between" 
                :class="[index%2===1?' bg-white':'bg-[#f4faff]']"
                v-for="(index) in 16" :key="index">
                    <div class="flex"> 
                        <div class="w-[80px] h-[23px]   border-r border-gray-300">
                            <div v-if="dataList[index-1]" class="w-full flex items-center justify-center  h-[23px]">
                                {{dataList[index-1].day}}
                            </div>
                        </div>
                        <div class="">
                            <div v-if="dataList.length > (index-1)" class="flex justify-between h-[23px]">
                                <div 
                                    :style="{'color': subItem.color}"
                                class="w-[30px] h-full border-r border-gray-300  flex items-center justify-center" v-for="(subItem,subIndex) in dataList[index-1].values" :key="subIndex">
                                        <span 
                                    class="rounded-full px-[4px]">{{subItem.value}}</span>
                                </div>
                            </div>
                            <div v-else class="flex justify-between h-[23px] ">
                                <p class="w-[30px] h-full border-r border-gray-300  flex items-center justify-center" v-for="(subItem,subIndex) in 20" :key="subIndex">
                                </p>
                            </div>
                        </div>
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
        title:"冠军",
        subTitle:["大小","单双"]
    },
    {
        title:"亚军",
        subTitle:["大小","单双"]
    },
    {
        title:"第三",
        subTitle:["大小","单双"]
    },
    {
        title:"第四",
        subTitle:["大小","单双"]
    },
    {
        title:"第五",
        subTitle:["大小","单双"]
    },
    {
        title:"第六",
        subTitle:["大小","单双"]
    },
    {
        title:"第七",
        subTitle:["大小","单双"]
    },
    {
        title:"第八",
        subTitle:["大小","单双"]
    },
    {
        title:"第九",
        subTitle:["大小","单双"]
    },
    {
        title:"第六",
        subTitle:["大小","单双"]
    }
])
const dataList = ref([
    {
        id: 1,
        day: "271002",
        values: [
            {
                value: "大",
                color: "#ff8d3c"
            },
            {
                value: "双",
                color: "#3a7fff"
            },
            {
                value: "小",
                color: "#3a7fff"
            },
            {
                value: "单",
                color: "#ff8d3c"
            },
            {
                value: "大",
                color: "#ff8d3c"
            },
            {
                value: "双",
                color: "#3a7fff"
            },
            {
                value: "小",
                color: "#3a7fff"
            },
            {
                value: "单",
                color: "#ff8d3c"
            },
            {
                value: "大",
                color: "#ff8d3c"
            },
            {
                value: "双",
                color: "#3a7fff"
            },
            {
                value: "小",
                color: "#3a7fff"
            },
            {
                value: "单",
                color: "#ff8d3c"
            },
            {
                value: "大",
                color: "#ff8d3c"
            },
            {
                value: "双",
                color: "#3a7fff"
            },
            {
                value: "小",
                color: "#3a7fff"
            },
            {
                value: "单",
                color: "#ff8d3c"
            },
            {
                value: "大",
                color: "#ff8d3c"
            },
            {
                value: "双",
                color: "#3a7fff"
            },
            {
                value: "小",
                color: "#3a7fff"
            },
            {
                value: "单",
                color: "#ff8d3c"
            }
        ]
    },{
        id: 2,
        day: "271001",
        values: [
        {
                value: "大",
                color: "#ff8d3c"
            },
            {
                value: "双",
                color: "#3a7fff"
            },
            {
                value: "小",
                color: "#3a7fff"
            },
            {
                value: "单",
                color: "#ff8d3c"
            },
            {
                value: "大",
                color: "#ff8d3c"
            },
            {
                value: "双",
                color: "#3a7fff"
            },
            {
                value: "小",
                color: "#3a7fff"
            },
            {
                value: "单",
                color: "#ff8d3c"
            },
            {
                value: "大",
                color: "#ff8d3c"
            },
            {
                value: "双",
                color: "#3a7fff"
            },
            {
                value: "小",
                color: "#3a7fff"
            },
            {
                value: "单",
                color: "#ff8d3c"
            },
            {
                value: "大",
                color: "#ff8d3c"
            },
            {
                value: "双",
                color: "#3a7fff"
            },
            {
                value: "小",
                color: "#3a7fff"
            },
            {
                value: "单",
                color: "#ff8d3c"
            },
            {
                value: "大",
                color: "#ff8d3c"
            },
            {
                value: "双",
                color: "#3a7fff"
            },
            {
                value: "小",
                color: "#3a7fff"
            },
            {
                value: "单",
                color: "#ff8d3c"
            }
        ]
    },{
        id: 3,
        day: "271000",
        values: [
            {
                value: "大",
                color: "#ff8d3c"
            },
            {
                value: "双",
                color: "#3a7fff"
            },
            {
                value: "小",
                color: "#3a7fff"
            },
            {
                value: "单",
                color: "#ff8d3c"
            },
            {
                value: "大",
                color: "#ff8d3c"
            },
            {
                value: "双",
                color: "#3a7fff"
            },
            {
                value: "小",
                color: "#3a7fff"
            },
            {
                value: "单",
                color: "#ff8d3c"
            },
            {
                value: "大",
                color: "#ff8d3c"
            },
            {
                value: "双",
                color: "#3a7fff"
            },
            {
                value: "小",
                color: "#3a7fff"
            },
            {
                value: "单",
                color: "#ff8d3c"
            },
            {
                value: "大",
                color: "#ff8d3c"
            },
            {
                value: "双",
                color: "#3a7fff"
            },
            {
                value: "小",
                color: "#3a7fff"
            },
            {
                value: "单",
                color: "#ff8d3c"
            },
            {
                value: "大",
                color: "#ff8d3c"
            },
            {
                value: "双",
                color: "#3a7fff"
            },
            {
                value: "小",
                color: "#3a7fff"
            },
            {
                value: "单",
                color: "#ff8d3c"
            }
        ]
    }
])

</script>
