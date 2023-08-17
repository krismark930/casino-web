<template>
    <div class="relative w-screen">
        <div
            class="flex z-0 h-[37px] bg-[#e8f6ff] px-2 shadow-md text-[12px] overflow-y-scroll"
        >
            <button
                :class="[
                    item.id === parentButtonActive
                        ? 'bg-[#2674ff] text-white'
                        : 'bg-white text-[#2674ff]'
                ]"
                class="text-white rounded-sm px-[10px] my-[5px] border-blue-300 border w-full whitespace-nowrap mr-1"
                v-for="(item, index) in doubleSideList"
                :key="index"
                @click="selectButton()"
            >
                {{ item.name }}
            </button>
        </div>
        <div
            class="absolute top-0 right-0 flex bg-[#e8f3ff] items-center justify-center px-[12px] h-[39px] pr-[20px] shadow-[-5px_0px_5px_-3px_rgba(0,0,0,0.3)]"
            @click="showSlide(true)"
        >
            <img
                src="@/assets/images/fastthree/icon-7.png"
                class="w-[20px] h-[20px] mr-[5px] mb-[2px]"
            />
            <p class="text-[8px] text-[#2674ff]">全部<br />玩法</p>
        </div>
    </div>
    <!-- 三星 -->
    <div v-if="parentButtonActive === 1">
        <!-- 前三直选复式 -->
        <standard-circle-items-with-title v-if="subButtonActive == 1" :data="standardData" :has-location="false" :content="content"/>
        <!-- 前三直选单式 -->
        <standard-circle-items-with-title v-if="subButtonActive == 2" :data="[]" :has-location="false" :content="content"/>
        <!-- 前三组选复式 -->
        <standard-circle-items-with-title v-if="subButtonActive == 3" :data="standardDataNotitle" :has-location="false" :content="content"/>
        <!-- 前三组选单式 -->
        <standard-circle-items-with-title v-if="subButtonActive == 4" :data="[]" :has-location="false" :content="content"/>
    </div>
    <!-- 二星 -->
    <div v-if="parentButtonActive === 2">
        <!-- 前二直选复式   -->
        <standard-circle-items-with-title v-if="subButtonActive == 1" :data="standardData" :has-location="false" :content="content"/>
        <!-- 前二直选单式 -->
        <standard-circle-items-with-title v-if="subButtonActive == 2" :data="[]" :has-location="false" :content="content"/>
        <!-- 前二组选复式 -->
        <standard-circle-items-with-title v-if="subButtonActive == 3" :data="standardDataNotitle" :has-location="false" :content="content"/>
        <!-- 前二组选单式 -->
        <standard-circle-items-with-title v-if="subButtonActive == 4" :data="[]" :has-location="false" :content="content"/>
    </div>

    <!-- 不定胆 -->
    <div v-if="parentButtonActive === 3">
        <!-- 前三不定胆 -->
        <standard-circle-items-with-title :data="standardDataNotitle" :has-location="false" :content="content"/>
    </div>
    <!-- 定位胆 -->
    <div v-if="parentButtonActive === 4">
        <!-- 定位胆 -->
        <standard-circle-items-with-title :data="standardData" :has-location="false" :content="content"/>
    </div>
    <!-- 任选 -->
    <div v-if="parentButtonActive === 5">
        <!-- 任选 -->
        <circle-items-with-buttons  :button-list="buttonList" :data="standardDataNotitle"/>
    </div>
    <!-- 趣味 -->
    <div v-if="parentButtonActive === 6">
        <!-- 趣味定单双 -->
        <interesting-order v-if="subButtonActive === 1" :data="taste"/>
        <!-- 趣味猜中位 -->
        <guess-median v-if="subButtonActive === 2" :data="guessMedian"/>
    </div>
</template>

<script setup lang="ts">

import {toRefs, ref } from 'vue';
//后二 after two
import CircleItem from '../CircleItems.vue';
import CircleItemsWithButtons from './components/CircleItemsWithButtons.vue';
import InterestingOrder from './components/InterestingOrder.vue';
import GuessMedian from './components/GuessMedian.vue';
import CircleItemWithTitle from '../CircleItemsWithTitle.vue';
import DirectMenu from '../DirectMenu.vue';
import SqureItemsWithTitle from '../SqureItemsWithTitle.vue';
import SqureItems from '../SqureItems.vue';
import SqureItemsWithTopTitle from '../SqureItemsWithTopTitle.vue';
import StandardCircleItemsWithTitle from '../StandardCircleItemsWithTitle.vue';
const state = defineProps<{doubleSideList:Array<any>, parentButtonActive:number, subButtonActive:number}>();
const { doubleSideList, parentButtonActive,subButtonActive } = toRefs(state);
console.log(doubleSideList);
const emit = defineEmits(['showSlide'])
const content = ref('')

const showSlide = (value: boolean) => {
    emit('showSlide', value);
}

const selectButton = () => {
    showSlide(true);
}

const standardData = ref([
    {
        title:"第一位",
        buttonList: [
        {
            id: 1,
            value: 1
        },
        {
            id: 2,
            value: 2
        },
        {
            id: 3,
            value: 3
        },
        {
            id: 4,
            value: 4
        },
        {
            id: 5,
            value: 5
        },
        {
            id: 6,
            value: 6
        },
        {
            id: 7,
            value: 7
        },
        {
            id: 8,
            value: 8
        },
        {
            id: 9,
            value: 9
        },
        {
            id: 10,
            value: 10
        },
        {
            id: 11,
            value: 11
        }
        ]
    },
    {
        title:"第二位",
        buttonList: [
        {
            id: 1,
            value: 1
        },
        {
            id: 2,
            value: 2
        },
        {
            id: 3,
            value: 3
        },
        {
            id: 4,
            value: 4
        },
        {
            id: 5,
            value: 5
        },
        {
            id: 6,
            value: 6
        },
        {
            id: 7,
            value: 7
        },
        {
            id: 8,
            value: 8
        },
        {
            id: 9,
            value: 9
        },
        {
            id: 10,
            value: 10
        },
        {
            id: 11,
            value: 11
        }
        ]
    },
    {
        title:"第三位",
        buttonList: [
        {
            id: 1,
            value: 1
        },
        {
            id: 2,
            value: 2
        },
        {
            id: 3,
            value: 3
        },
        {
            id: 4,
            value: 4
        },
        {
            id: 5,
            value: 5
        },
        {
            id: 6,
            value: 6
        },
        {
            id: 7,
            value: 7
        },
        {
            id: 8,
            value: 8
        },
        {
            id: 9,
            value: 9
        },
        {
            id: 10,
            value: 10
        },
        {
            id: 11,
            value: 11
        }
        ]
    }
])
const standardDataNotitle = ref([
{
        title:"",
        buttonList: [
        {
            id: 1,
            value: 1
        },
        {
            id: 2,
            value: 2
        },
        {
            id: 3,
            value: 3
        },
        {
            id: 4,
            value: 4
        },
        {
            id: 5,
            value: 5
        },
        {
            id: 6,
            value: 6
        },
        {
            id: 7,
            value: 7
        },
        {
            id: 8,
            value: 8
        },
        {
            id: 9,
            value: 9
        },
        {
            id: 10,
            value: 10
        },
        {
            id: 11,
            value: 11
        }
        ]
    }
])
const buttonList = ref([
    {
        id:1,
        title:'任选复式一中一'
    },
    {
        id:2,
        title:'任选复式二中二'
    },
    {
        id:3,
        title:'任选复式三中三'
    },
    {
        id:4,
        title:'任选复式四中四'
    },
    {
        id:5,
        title:'任选复式五中五'
    },
    {
        id:6,
        title:'任选复式六中五'
    },
    {
        id:7,
        title:'任选复式七中五'
    },
    {
        id:8,
        title:'任选复制八中五'
    }
])
const taste = ref([
    {
        title:"",
        buttonList: [
            {
                id: 1,
                title: "5单0双", 
                value: "0.0752"
            },
            {
                id: 2,
                title: "4单1双", 
                value: "0.006"
            },
            {
                id: 3,
                title: "3单2双", 
                value: "0.006"
            },
            {
                id: 4,
                title: "2单3双", 
                value: "0.006"
            },
            {
                id: 5,
                title: "1单4双", 
                value: "0.006"
            },
            {
                id: 6,
                title: "0单5双", 
                value: "0.006"
            }
        ]
    }
])
const guessMedian = ref([
        {
            id: 1,
            value: "03"
        },
        {
            id: 2,
            value: "04"
        },
        {
            id: 3,
            value: "05"
        },
        {
            id: 4,
            value: "06"
        },
        {
            id: 5,
            value: "07"
        },
        {
            id: 6,
            value: "08"
        },
        {
            id: 7,
            value: "09"
        }
        ])
</script>

<style></style>
