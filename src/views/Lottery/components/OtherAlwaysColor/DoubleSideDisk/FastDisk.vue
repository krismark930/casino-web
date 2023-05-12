<template>
    <div class="animated fadeInLeft">
        <div class="mx-[6px] mt-[3px] py-[8px] px-[15px] flex items-center justify-center mt-[20px]">
            <div class="w-full grid grid-cols-5 gap-1">
                <div v-for="(item, index) in titleList" :key="index" @click="() => sizeActive = item.id" class="bg-white">
                    <div class=" w-full  border rounded-sm py-[3px]" :class="[sizeActive === item.id ?'border-[#2674ff]':'border-gray-300']">
                        <p v-if="item.title" class="text-center text-[10px] mt-[1px]" :class="[sizeActive === item.id ?'text-blue-500':'text-gray-400']">{{ item.title }}</p>
                    </div>
                </div>
            </div>
        </div>
        <p class="h-[1px] bg-gray-200 mx-2"></p>
        <div class="m-[6px] py-[3px] px-[15px] flex items-center justify-center">
            <div class="w-full grid grid-cols-4 gap-1">
                <div v-for="(item, index) in textist" :key="index" @click="() => sizeActive = item.id" class="">
                    <LotteryAlwaysColorItem :item="item" :isImg="false" :isActive="false" :class="[false? 'bg-[#2674ff] text-white':'bg-white text-[#2674ff]']"/>
                </div>
            </div>
        </div>
        <p class="h-[1px] bg-gray-200 mx-2"></p>
        <div class="m-[6px] py-[3px] px-[15px] flex items-center justify-center">
            <div class="w-full grid grid-cols-4 gap-1">
                <div v-for="(item, index) in itemList" :key="index" @click="() => sizeActive = item.id" class="">
                    <LotteryAlwaysColorItem :item="item" :isImg="false" :isActive="false" :class="[false? 'bg-[#2674ff] text-white':'bg-white text-[#2674ff]']"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import {ref} from 'vue';
import LotteryAlwaysColorItem from '@/components/global/lotteryAlwaysColorItem.vue';

const active = ref(1);
const sizeActive = ref(1);
const itemList = ref([
    {
        id: 1,
        value: 1.98,
        title: 0,
    },
    {
        id: 2,
        value: 1.98,
        title: 1,
    },
    {
        id: 3,
        value: 1.98,
        title: 2,
    },
    {
        id: 4,
        value: 1.98,
        title: 3,
    },
    {
        id: 5,
        value: 1.98,
        title: 4,
    },
    {
        id: 6,
        value: 1.98,
        title: 5,
    }
    ,
    {
        id: 7,
        value: 1.98,
        title: 6,
    }
    ,
    {
        id: 8,
        value: 1.98,
        title: 7,
    }
    ,
    {
        id: 9,
        value: 1.98,
        title: 8,
    }
    ,
    {
        id: 10,
        value: 1.98,
        title: 9,
    }
])
const titleList = ref([
    {
        id: 1,
        title: "第一球",
    },
    {
        id: 2,
        title: "第二球",
    },
    {
        id: 3,
        title: "第三球",
    },
    {
        id: 4,
        title: "第四球",
    },
    {
        id: 5,
        title: "第五球",
    },
])
const textist = ref([
    {
        id: 1,
        title: '大',
        value:'1.985'
    },
    {
        id: 2,
        title: '小',
        value:'1.985'
    },
    {
        id: 3,
        title: '单',
        value:'1.985'
    },
    {
        id: 4,
        title: '双',
        value:'1.985'
    },
    {
        id: 5,
        title: '质',
        value:'1.985'
    },
    {
        id: 6,
        title: '合',
        value:'1.985'
    }
])
</script>

<style>
</style>