<template>
    <div class="">
        <div class="flex justify-between gap-[4px] h-[39px] bg-[#e8f6ff] px-2 shadow-md text-[12px] z-10">
            <button :class="[item.id === subActive? 'bg-[#2674ff] text-white':'bg-white text-[#2674ff]']" class="text-white rounded-sm  px-[1px] my-[5px] border-blue-300 border min-w-[55px]" 
            v-for="(item, index) in doubleSideList" :key="index"
            @click="chageSubActive(item.id)">
                {{item.name}}
            </button>
        </div>

        <!-- 快捷 -->
        <squre-items-with-buttons-vue v-if="subActive === 1" :button-list="fastButtonList" :data="fastData"/>
        <!-- 双面 -->
        <squre-items-with-top-title-gray v-if="subActive == 2" :data="doutbleSided" :has-location="false"/>
        <!-- 选号 -->
        <squre-items-with-top-title-gray v-if="subActive == 3" :data="doutbleSided" :has-location="false"/>
        <!-- 任选 -->
        <circle-items-with-buttons v-if="subActive === 4" :button-list="optionalButtonList" :data="data"/>
        <!-- 组选 -->
        <circle-items-with-buttons v-if="subActive === 5" :button-list="buttonList" :data="data"/>
        <!-- 直选 -->
        <circle-items-with-buttons v-if="subActive === 6" :button-list="buttonList" :data="dataWithTitle"/>
        
        <!-- <quick-fast v-if="subActive === 1" :buttonList="locationButtonData" :data="fastData" :has-location="true"/>
        <square-items-with-title v-if="subActive === 2" :data="doubleSide" :col-number="4" :has-location="false" :isPK10="true"/>
        <square-items-with-title v-if="subActive === 3" :data="drgonTiger" :col-number="4" :has-location="false" :isPK10="true"/>
        <square-items-with-title v-if="subActive === 4" :data="crown" :col-number="4" :has-location="false" :isPK10="true"/>
        <dragon-tiger v-if="subActive === 5" :data="dragonTiger"  :isPK10="true"/>
         -->
        <!-- <fast-disk v-if="subActive === 1"/>
        <double-slide v-if="subActive === 2"/>
        <pick-number v-if="subActive === 3"/>
        <front-middle-back-three v-if="subActive === 4"/> -->
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import CircleItemsWithButtons from './components/CircleItemsWithButtons.vue';
import SqureItemsWithButtonsVue from '../SqureItemsWithButtons.vue';
import SqureItemsWithTopTitleGray from '../SqureItemsWithTopTitleGray.vue';
// import SquareItemsWithTitle from '../SqureItemsWithTitle.vue';
// import DragonTiger from './component/DragonTiger.vue';
// import QuickFast from './component/QuickFast.vue';
// import FastDisk from './DoubleSideDisk/FastDisk.vue';
// import DoubleSlide from './DoubleSideDisk/DoubleSlide.vue';
// import PickNumber from './DoubleSideDisk/PickNumber.vue';
// import FrontMiddleBackThree from './DoubleSideDisk/FrontMiddleBackThree.vue';

const subActive = ref(1);
const doubleSideList = ref([
    {
        id: 1,
        name: '快捷'
    },
    {
        id: 2,
        name: '双面'
    },
    {
        id: 3,
        name: '选号'
    },
    {
        id: 4,
        name: '任选'
    },
    {
        id: 5,
        name: '组选'
    },
    {
        id: 6,
        name: '直选'
    }
])
const buttonList = ref([
{
        id:1,
        title:'前二组选'
    },
    {
        id:2,
        title:'前三组选'
    }
])
const fastButtonList = ref([
    {
        id:1,
        title:'第一球'
    },
    {
        id:2,
        title:'第二球'
    },
    {
        id:3,
        title:'第三球'
    },
    {
        id:4,
        title:'第四球'
    },
    {
        id:5,
        title:'第五球'
    }
])
const optionalButtonList = ref([
    {
        id:1,
        title:'任选一'
    },
    {
        id:2,
        title:'任选二'
    },
    {
        id:3,
        title:'任选三'
    },
    {
        id:4,
        title:'任选四'
    },
    {
        id:5,
        title:'任选五'
    },
    {
        id:6,
        title:'任选六中五'
    },
    {
        id:7,
        title:'任选七中五'
    },
    {
        id:8,
        title:'任选八中五'
    }
])
const chageSubActive = (id:number) => {
    subActive.value = id;
}

const data = ref([
    {
        title:'',
        buttonList:[
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
        title:'',
        buttonList:[
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
const dataWithTitle = ref([
    {
        title:'第一球',
        buttonList:[
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
        title:'第一球',
        buttonList:[
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
const fastData = ref([
    {
        id: 1,
        title: "大", 
        value: 1.905
    },
    {
        id: 2,
        title: "小", 
        value: 1.905

    },
    {
        id: 3,
        title: "单", 
        value: 1.905
    },
    {
        id: 4,
        title: "双", 
        value: 1.905
    },
    {
        id: 5,
        title: "01", 
        value: 1.905
    },
    {
        id: 6,
        title: "02", 
        value: 1.905
    },
    {
        id: 7,
        title: "03", 
        value: 1.905
    },
    {
        id: 8,
        title: "04", 
        value: 1.905
    },
    {
        id: 9,
        title: "05", 
        value: 1.905
    },
    {
        id: 10,
        title: "06", 
        value: 1.905
    },
    {
        id: 11,
        title: "07", 
        value: 1.905
    },
    {
        id: 12,
        title: "08", 
        value: 1.905
    },
    {
        id: 13,
        title: "09", 
        value: 1.905
    },
    {
        id: 14,
        title: "10", 
        value: 1.905
    },
    {
        id: 15,
        title: "11", 
        value: 1.905
    }
])

const doutbleSided = ref([
        {
        title: "总和",
        buttonList:[
        {
            id: 1,
            title: "大", 
            value: 1.905
        },
        {
            id: 2,
            title: "小", 
            value: 1.905

        },
        {
            id: 3,
            title: "单", 
            value: 1.905
        },
        {
            id: 4,
            title: "双", 
            value: 1.905
        },
        {
            id: 5,
            title: "龙", 
            value: 1.905
        },
        {
            id: 6,
            title: "虎", 
            value: 1.905

        },
        {
            id: 7,
            title: "尾大", 
            value: 1.905
        },
        {
            id: 8,
            title: "尾小", 
            value: 1.905
        },
    ]},
        {
        title: "第一球",
        buttonList:[
            {
                id: 1,
                value: 1.98,
                title: "大 拷贝",
            },
            {
                id: 2,
                value: 1.98,
                title: "小 拷贝",
            },
            {
                id: 3,
                value: 1.98,
                title: "单 拷贝",
            },
            {
                id: 4,
                value: 1.98,
                title: "双 拷贝 ",
            }
        ]},
        {
        title: "第二球",
        buttonList:[
        {
                id: 1,
                value: 1.98,
                title: "大 拷贝",
            },
            {
                id: 2,
                value: 1.98,
                title: "小 拷贝",
            },
            {
                id: 3,
                value: 1.98,
                title: "单 拷贝",
            },
            {
                id: 4,
                value: 1.98,
                title: "双 拷贝",
            }
        ]}
])

// const drgonTiger = ref([
//     {
//         title:"冠军",
//         buttonList: [
//             {
//                 id: 1,
//                 title: 1, 
//                 value: "9.925"
//             },
//             {
//                 id: 2,
//                 title: 2, 
//                 value: "9.925"
//             },
//             {
//                 id: 3,
//                 title: 3, 
//                 value: "9.925"
//             },
//             {
//                 id: 4,
//                 title: 4, 
//                 value: "9.925"
//             },
//             {
//                 id: 5,
//                 title: 5, 
//                 value: "9.925"
//             },
//             {
//                 id: 6,
//                 title: 6, 
//                 value: "9.925"
//             },
//             {
//                 id: 7,
//                 title: 7, 
//                 value: "9.925"
//             },
//             {
//                 id: 8,
//                 title: 8, 
//                 value: "9.925"
//             },
//             {
//                 id: 9,
//                 title: 9, 
//                 value: "9.925"
//             },
//             {
//                 id: 10,
//                 title: 10, 
//                 value: "9.925"
//             }
//         ]
//     },
//     {
//         title:"亚军",
//         buttonList: [
//         {
//                 id: 1,
//                 title: 1, 
//                 value: "9.925"
//             },
//             {
//                 id: 2,
//                 title: 2, 
//                 value: "9.925"
//             },
//             {
//                 id: 3,
//                 title: 3, 
//                 value: "9.925"
//             },
//             {
//                 id: 4,
//                 title: 4, 
//                 value: "9.925"
//             },
//             {
//                 id: 5,
//                 title: 5, 
//                 value: "9.925"
//             },
//             {
//                 id: 6,
//                 title: 6, 
//                 value: "9.925"
//             },
//             {
//                 id: 7,
//                 title: 7, 
//                 value: "9.925"
//             },
//             {
//                 id: 8,
//                 title: 8, 
//                 value: "9.925"
//             },
//             {
//                 id: 9,
//                 title: 9, 
//                 value: "9.925"
//             },
//             {
//                 id: 10,
//                 title: 10, 
//                 value: "9.925"
//             }
//         ]
//     },
//     {
//         title:"",
//         buttonList: [
//         {
//                 id: 1,
//                 title: 1, 
//                 value: "9.925"
//             },
//             {
//                 id: 2,
//                 title: 2, 
//                 value: "9.925"
//             },
//             {
//                 id: 3,
//                 title: 3, 
//                 value: "9.925"
//             },
//             {
//                 id: 4,
//                 title: 4, 
//                 value: "9.925"
//             },
//             {
//                 id: 5,
//                 title: 5, 
//                 value: "9.925"
//             },
//             {
//                 id: 6,
//                 title: 6, 
//                 value: "9.925"
//             },
//             {
//                 id: 7,
//                 title: 7, 
//                 value: "9.925"
//             },
//             {
//                 id: 8,
//                 title: 8, 
//                 value: "9.925"
//             },
//             {
//                 id: 9,
//                 title: 9, 
//                 value: "9.925"
//             },
//             {
//                 id: 10,
//                 title: 10, 
//                 value: "9.925"
//             }
//         ]
//     },
//     {
//         title:"",
//         buttonList: [
//         {
//                 id: 1,
//                 title: 1, 
//                 value: "9.925"
//             },
//             {
//                 id: 2,
//                 title: 2, 
//                 value: "9.925"
//             },
//             {
//                 id: 3,
//                 title: 3, 
//                 value: "9.925"
//             },
//             {
//                 id: 4,
//                 title: 4, 
//                 value: "9.925"
//             },
//             {
//                 id: 5,
//                 title: 5, 
//                 value: "9.925"
//             },
//             {
//                 id: 6,
//                 title: 6, 
//                 value: "9.925"
//             },
//             {
//                 id: 7,
//                 title: 7, 
//                 value: "9.925"
//             },
//             {
//                 id: 8,
//                 title: 8, 
//                 value: "9.925"
//             },
//             {
//                 id: 9,
//                 title: 9, 
//                 value: "9.925"
//             },
//             {
//                 id: 10,
//                 title: 10, 
//                 value: "9.925"
//             }
//         ]
//     },
//     {
//         title:"第七名",
//         buttonList: [
//         {
//                 id: 1,
//                 title: 1, 
//                 value: "9.925"
//             },
//             {
//                 id: 2,
//                 title: 2, 
//                 value: "9.925"
//             },
//             {
//                 id: 3,
//                 title: 3, 
//                 value: "9.925"
//             },
//             {
//                 id: 4,
//                 title: 4, 
//                 value: "9.925"
//             },
//             {
//                 id: 5,
//                 title: 5, 
//                 value: "9.925"
//             },
//             {
//                 id: 6,
//                 title: 6, 
//                 value: "9.925"
//             },
//             {
//                 id: 7,
//                 title: 7, 
//                 value: "9.925"
//             },
//             {
//                 id: 8,
//                 title: 8, 
//                 value: "9.925"
//             },
//             {
//                 id: 9,
//                 title: 9, 
//                 value: "9.925"
//             },
//             {
//                 id: 10,
//                 title: 10, 
//                 value: "9.925"
//             }
//         ]
//     },
//     {
//         title:"第九名",
//         buttonList: [
//         {
//                 id: 1,
//                 title: 1, 
//                 value: "9.925"
//             },
//             {
//                 id: 2,
//                 title: 2, 
//                 value: "9.925"
//             },
//             {
//                 id: 3,
//                 title: 3, 
//                 value: "9.925"
//             },
//             {
//                 id: 4,
//                 title: 4, 
//                 value: "9.925"
//             },
//             {
//                 id: 5,
//                 title: 5, 
//                 value: "9.925"
//             },
//             {
//                 id: 6,
//                 title: 6, 
//                 value: "9.925"
//             },
//             {
//                 id: 7,
//                 title: 7, 
//                 value: "9.925"
//             },
//             {
//                 id: 8,
//                 title: 8, 
//                 value: "9.925"
//             },
//             {
//                 id: 9,
//                 title: 9, 
//                 value: "9.925"
//             },
//             {
//                 id: 10,
//                 title: 10, 
//                 value: "9.925"
//             }
//         ]
//     },
//     {
//         title:"第十名",
//         buttonList: [
//         {
//                 id: 1,
//                 title: 1, 
//                 value: "9.925"
//             },
//             {
//                 id: 2,
//                 title: 2, 
//                 value: "9.925"
//             },
//             {
//                 id: 3,
//                 title: 3, 
//                 value: "9.925"
//             },
//             {
//                 id: 4,
//                 title: 4, 
//                 value: "9.925"
//             },
//             {
//                 id: 5,
//                 title: 5, 
//                 value: "9.925"
//             },
//             {
//                 id: 6,
//                 title: 6, 
//                 value: "9.925"
//             },
//             {
//                 id: 7,
//                 title: 7, 
//                 value: "9.925"
//             },
//             {
//                 id: 8,
//                 title: 8, 
//                 value: "9.925"
//             },
//             {
//                 id: 9,
//                 title: 9, 
//                 value: "9.925"
//             },
//             {
//                 id: 10,
//                 title: 10, 
//                 value: "9.925"
//             }
//         ]
//     }
// ])
// const dragonTiger = ref([
//     {
//         title:"冠军 VS 第十名",
//         buttonList: [
//             {
//                 id: 1,
//                 title: "龙", 
//                 value: "44.662"
//             },
//             {
//                 id: 2,
//                 title: "虎", 
//                 value: "44.662"
//             }
//         ]
//     },
//     {
//         title:"亚军 VS 第九名",
//         buttonList: [
//             {
//                 id: 1,
//                 title: "龙", 
//                 value: "44.662"
//             },
//             {
//                 id: 2,
//                 title: "虎", 
//                 value: "44.662"
//             }
//         ]
//     },
//     {
//         title:"第三名 VS 第八名",
//         buttonList: [
//             {
//                 id: 1,
//                 title: "龙", 
//                 value: "44.662"
//             },
//             {
//                 id: 2,
//                 title: "虎", 
//                 value: "44.662"
//             }
//         ]
//     },
//     {
//         title:"第四名 VS 第七名",
//         buttonList: [
//             {
//                 id: 1,
//                 title: "龙", 
//                 value: "44.662"
//             },
//             {
//                 id: 2,
//                 title: "虎", 
//                 value: "44.662"
//             }
//         ]
//     },
//     {
//         title:"第五名 VS 第六名",
//         buttonList: [
//             {
//                 id: 1,
//                 title: "龙", 
//                 value: "44.662"
//             },
//             {
//                 id: 2,
//                 title: "虎", 
//                 value: "44.662"
//             }
//         ]
//     },
// ])
// const doubleSide = ref([
//     {
//         title:"冠亚和",
//         buttonList: [
//             {
//                 id: 1,
//                 title: "冠亚大", 
//                 value: "9.925"
//             },
//             {
//                 id: 2,
//                 title: "冠亚小", 
//                 value: "9.925"
//             },
//             {
//                 id: 3,
//                 title: "冠亚单", 
//                 value: "9.925"
//             },
//             {
//                 id: 4,
//                 title: "冠亚双", 
//                 value: "9.925"
//             }
//         ]
//     },
//     {
//         title:"冠军",
//         buttonList: [
//         {
//                 id: 1,
//                 title: "大", 
//                 value: "9.925"
//             },
//             {
//                 id: 2,
//                 title: "小",
//                 value: "9.925"
//             },
//             {
//                 id: 3,
//                 title: "单",
//                 value: "9.925"
//             },
//             {
//                 id: 4,
//                 title: "双",
//                 value: "9.925"
//             },
//             {
//                 id: 5,
//                 title: "龙",
//                 value: "9.925"
//             },
//             {
//                 id: 6,
//                 title: "虎",
//                 value: "9.925"
//             }
//         ]
//     },
//     {
//         title:"亚军",
//         buttonList: [
//         {
//                 id: 1,
//                 title: "大", 
//                 value: "9.925"
//             },
//             {
//                 id: 2,
//                 title: "小",
//                 value: "9.925"
//             },
//             {
//                 id: 3,
//                 title: "单",
//                 value: "9.925"
//             },
//             {
//                 id: 4,
//                 title: "双",
//                 value: "9.925"
//             },
//             {
//                 id: 5,
//                 title: "龙",
//                 value: "9.925"
//             },
//             {
//                 id: 6,
//                 title: "虎",
//                 value: "9.925"
//             }
//         ]
//     },
//     {
//         title:"第三名",
//         buttonList: [
//         {
//                 id: 1,
//                 title: "大", 
//                 value: "9.925"
//             },
//             {
//                 id: 2,
//                 title: "小",
//                 value: "9.925"
//             },
//             {
//                 id: 3,
//                 title: "单",
//                 value: "9.925"
//             },
//             {
//                 id: 4,
//                 title: "双",
//                 value: "9.925"
//             },
//             {
//                 id: 5,
//                 title: "龙",
//                 value: "9.925"
//             },
//             {
//                 id: 6,
//                 title: "虎",
//                 value: "9.925"
//             }
//         ]
//     },
//     {
//         title:"第四名",
//         buttonList: [
//         {
//                 id: 1,
//                 title: "大", 
//                 value: "9.925"
//             },
//             {
//                 id: 2,
//                 title: "小",
//                 value: "9.925"
//             },
//             {
//                 id: 3,
//                 title: "单",
//                 value: "9.925"
//             },
//             {
//                 id: 4,
//                 title: "双",
//                 value: "9.925"
//             },
//             {
//                 id: 5,
//                 title: "龙",
//                 value: "9.925"
//             },
//             {
//                 id: 6,
//                 title: "虎",
//                 value: "9.925"
//             }
//         ]
//     },
//     {
//         title:"第五名",
//         buttonList: [
//         {
//                 id: 1,
//                 title: "大", 
//                 value: "9.925"
//             },
//             {
//                 id: 2,
//                 title: "小",
//                 value: "9.925"
//             },
//             {
//                 id: 3,
//                 title: "单",
//                 value: "9.925"
//             },
//             {
//                 id: 4,
//                 title: "双",
//                 value: "9.925"
//             },
//             {
//                 id: 5,
//                 title: "龙",
//                 value: "9.925"
//             },
//             {
//                 id: 6,
//                 title: "虎",
//                 value: "9.925"
//             }
//         ]
//     },
//     {
//         title:"第六名",
//         buttonList: [
//         {
//                 id: 1,
//                 title: "大", 
//                 value: "9.925"
//             },
//             {
//                 id: 2,
//                 title: "小",
//                 value: "9.925"
//             },
//             {
//                 id: 3,
//                 title: "单",
//                 value: "9.925"
//             },
//             {
//                 id: 4,
//                 title: "双",
//                 value: "9.925"
//             }
//         ]
//     }
// ])
// const crown = ref([
// {
//         title:"冠亚军 组合",
//         buttonList: [
//             {
//                 id: 1,
//                 title: 1, 
//                 value: "9.925"
//             },
//             {
//                 id: 2,
//                 title: 2, 
//                 value: "9.925"
//             },
//             {
//                 id: 3,
//                 title: 3, 
//                 value: "9.925"
//             },
//             {
//                 id: 4,
//                 title: 4, 
//                 value: "9.925"
//             },
//             {
//                 id: 5,
//                 title: 5, 
//                 value: "9.925"
//             },
//             {
//                 id: 6,
//                 title: 6, 
//                 value: "9.925"
//             },
//             {
//                 id: 7,
//                 title: 7, 
//                 value: "9.925"
//             },
//             {
//                 id: 8,
//                 title: 8, 
//                 value: "9.925"
//             },
//             {
//                 id: 9,
//                 title: 9, 
//                 value: "9.925"
//             },
//             {
//                 id: 10,
//                 title: 10, 
//                 value: "9.925"
//             },
//             {
//                 id: 11,
//                 title: 11, 
//                 value: "9.925"
//             },
//             {
//                 id: 12,
//                 title: 12, 
//                 value: "9.925"
//             },
//             {
//                 id: 13,
//                 title: 13, 
//                 value: "9.925"
//             },
//             {
//                 id: 14,
//                 title: 14, 
//                 value: "9.925"
//             },
//             {
//                 id: 15,
//                 title: 15, 
//                 value: "9.925"
//             },
//             {
//                 id: 16,
//                 title: 16, 
//                 value: "9.925"
//             },
//             {
//                 id: 17,
//                 title: 17, 
//                 value: "9.925"
//             },
//             {
//                 id: 18,
//                 title: 18, 
//                 value: "9.925"
//             },
//             {
//                 id: 19,
//                 title: 19, 
//                 value: "9.925"
//             }
//         ]
//     }
// ]);
</script>

<style>
.van-popup{
    z-index: 0 !important;
}
.van-overlay{
    z-index: 0 !important;
}
</style>