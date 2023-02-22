<template>
    <div class="">
        <div class="flex justify-start gap-[4px] h-[39px] bg-[#e8f6ff] px-2 shadow-md text-[12px] z-10">
            <button :class="[item.id === subActive? 'bg-[#2674ff] text-white':'bg-white text-[#2674ff]']" class="text-white rounded-sm  px-[2px] my-[5px] border-blue-300 border min-w-[63px]" 
            v-for="(item, index) in doubleSideList" :key="index"
            @click="chageSubActive(item.id)">
                {{item.name}}
            </button>
        </div>
        <quick-fast v-if="subActive === 1" :buttonList="locationButtonData" :data="fastData" :has-location="true"/>
        <square-items-with-title v-if="subActive === 2" :data="doubleSide" :col-number="4" :has-location="false" :isPK10="true"/>
        <square-items-with-title v-if="subActive === 3" :data="drgonTiger" :col-number="4" :has-location="false" :isPK10="true"/>
        <square-items-with-title v-if="subActive === 4" :data="crown" :col-number="4" :has-location="false" :isPK10="true"/>
        <!-- 龙虎 -->
        <dragon-tiger v-if="subActive === 5" :data="dragonTiger"  :isPK10="true"/>
        
        <!-- <fast-disk v-if="subActive === 1"/>
        <double-slide v-if="subActive === 2"/>
        <pick-number v-if="subActive === 3"/>
        <front-middle-back-three v-if="subActive === 4"/> -->
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import SquareItemsWithTitle from '../SqureItemsWithTitle.vue';
import DragonTiger from './component/DragonTiger.vue';
import QuickFast from './component/QuickFast.vue';
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
        name: '冠亚和值'
    },
    {
        id: 5,
        name: '龙虎'
    },
])

const chageSubActive = (id:number) => {
    subActive.value = id;
}
const locationButtonData = ref([
    {
        id:1,
        title:'冠军'
    },
    {
        id:2,
        title:'亚军'
    },
    {
        id:3,
        title:'第三名'
    },
    {
        id:4,
        title:'第四名'
    },
    {
        id:5,
        title:'第五名'
    },
    {
        id:6,
        title:'第六名'
    },
    {
        id:7,
        title:'第七名'
    },
    {
        id:8,
        title:'第八名'
    },
    {
        id:9,
        title:'第九名'
    },
    {
        id:10,
        title:'第十名'
    },
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
        title: 1, 
        value: 1.905
    },
    {
        id: 6,
        title: 2, 
        value: 1.905
    },
    {
        id: 7,
        title: 3, 
        value: 1.905
    },
    {
        id: 8,
        title: 4, 
        value: 1.905
    },
    {
        id: 9,
        title: 5, 
        value: 1.905
    },
    {
        id: 10,
        title: 6, 
        value: 1.905
    },
    {
        id: 11,
        title: 7, 
        value: 1.905
    },
    {
        id: 12,
        title: 8, 
        value: 1.905
    },
    {
        id: 13,
        title: 9, 
        value: 1.905
    },
    {
        id: 14,
        title: 10, 
        value: 1.905
    },
    {
        id: 15,
        title: 11, 
        value: 1.905
    },
    {
        id: 16,
        title: 12, 
        value: 1.905
    }
])
const drgonTiger = ref([
    {
        title:"冠军",
        buttonList: [
            {
                id: 1,
                title: 1, 
                value: "9.925"
            },
            {
                id: 2,
                title: 2, 
                value: "9.925"
            },
            {
                id: 3,
                title: 3, 
                value: "9.925"
            },
            {
                id: 4,
                title: 4, 
                value: "9.925"
            },
            {
                id: 5,
                title: 5, 
                value: "9.925"
            },
            {
                id: 6,
                title: 6, 
                value: "9.925"
            },
            {
                id: 7,
                title: 7, 
                value: "9.925"
            },
            {
                id: 8,
                title: 8, 
                value: "9.925"
            },
            {
                id: 9,
                title: 9, 
                value: "9.925"
            },
            {
                id: 10,
                title: 10, 
                value: "9.925"
            }
        ]
    },
    {
        title:"亚军",
        buttonList: [
        {
                id: 1,
                title: 1, 
                value: "9.925"
            },
            {
                id: 2,
                title: 2, 
                value: "9.925"
            },
            {
                id: 3,
                title: 3, 
                value: "9.925"
            },
            {
                id: 4,
                title: 4, 
                value: "9.925"
            },
            {
                id: 5,
                title: 5, 
                value: "9.925"
            },
            {
                id: 6,
                title: 6, 
                value: "9.925"
            },
            {
                id: 7,
                title: 7, 
                value: "9.925"
            },
            {
                id: 8,
                title: 8, 
                value: "9.925"
            },
            {
                id: 9,
                title: 9, 
                value: "9.925"
            },
            {
                id: 10,
                title: 10, 
                value: "9.925"
            }
        ]
    },
    {
        title:"",
        buttonList: [
        {
                id: 1,
                title: 1, 
                value: "9.925"
            },
            {
                id: 2,
                title: 2, 
                value: "9.925"
            },
            {
                id: 3,
                title: 3, 
                value: "9.925"
            },
            {
                id: 4,
                title: 4, 
                value: "9.925"
            },
            {
                id: 5,
                title: 5, 
                value: "9.925"
            },
            {
                id: 6,
                title: 6, 
                value: "9.925"
            },
            {
                id: 7,
                title: 7, 
                value: "9.925"
            },
            {
                id: 8,
                title: 8, 
                value: "9.925"
            },
            {
                id: 9,
                title: 9, 
                value: "9.925"
            },
            {
                id: 10,
                title: 10, 
                value: "9.925"
            }
        ]
    },
    {
        title:"",
        buttonList: [
        {
                id: 1,
                title: 1, 
                value: "9.925"
            },
            {
                id: 2,
                title: 2, 
                value: "9.925"
            },
            {
                id: 3,
                title: 3, 
                value: "9.925"
            },
            {
                id: 4,
                title: 4, 
                value: "9.925"
            },
            {
                id: 5,
                title: 5, 
                value: "9.925"
            },
            {
                id: 6,
                title: 6, 
                value: "9.925"
            },
            {
                id: 7,
                title: 7, 
                value: "9.925"
            },
            {
                id: 8,
                title: 8, 
                value: "9.925"
            },
            {
                id: 9,
                title: 9, 
                value: "9.925"
            },
            {
                id: 10,
                title: 10, 
                value: "9.925"
            }
        ]
    },
    {
        title:"第七名",
        buttonList: [
        {
                id: 1,
                title: 1, 
                value: "9.925"
            },
            {
                id: 2,
                title: 2, 
                value: "9.925"
            },
            {
                id: 3,
                title: 3, 
                value: "9.925"
            },
            {
                id: 4,
                title: 4, 
                value: "9.925"
            },
            {
                id: 5,
                title: 5, 
                value: "9.925"
            },
            {
                id: 6,
                title: 6, 
                value: "9.925"
            },
            {
                id: 7,
                title: 7, 
                value: "9.925"
            },
            {
                id: 8,
                title: 8, 
                value: "9.925"
            },
            {
                id: 9,
                title: 9, 
                value: "9.925"
            },
            {
                id: 10,
                title: 10, 
                value: "9.925"
            }
        ]
    },
    {
        title:"第九名",
        buttonList: [
        {
                id: 1,
                title: 1, 
                value: "9.925"
            },
            {
                id: 2,
                title: 2, 
                value: "9.925"
            },
            {
                id: 3,
                title: 3, 
                value: "9.925"
            },
            {
                id: 4,
                title: 4, 
                value: "9.925"
            },
            {
                id: 5,
                title: 5, 
                value: "9.925"
            },
            {
                id: 6,
                title: 6, 
                value: "9.925"
            },
            {
                id: 7,
                title: 7, 
                value: "9.925"
            },
            {
                id: 8,
                title: 8, 
                value: "9.925"
            },
            {
                id: 9,
                title: 9, 
                value: "9.925"
            },
            {
                id: 10,
                title: 10, 
                value: "9.925"
            }
        ]
    },
    {
        title:"第十名",
        buttonList: [
        {
                id: 1,
                title: 1, 
                value: "9.925"
            },
            {
                id: 2,
                title: 2, 
                value: "9.925"
            },
            {
                id: 3,
                title: 3, 
                value: "9.925"
            },
            {
                id: 4,
                title: 4, 
                value: "9.925"
            },
            {
                id: 5,
                title: 5, 
                value: "9.925"
            },
            {
                id: 6,
                title: 6, 
                value: "9.925"
            },
            {
                id: 7,
                title: 7, 
                value: "9.925"
            },
            {
                id: 8,
                title: 8, 
                value: "9.925"
            },
            {
                id: 9,
                title: 9, 
                value: "9.925"
            },
            {
                id: 10,
                title: 10, 
                value: "9.925"
            }
        ]
    }
])
const dragonTiger = ref([
    {
        title:"冠军 VS 第十名",
        buttonList: [
            {
                id: 1,
                title: "龙", 
                value: "44.662"
            },
            {
                id: 2,
                title: "虎", 
                value: "44.662"
            }
        ]
    },
    {
        title:"亚军 VS 第九名",
        buttonList: [
            {
                id: 1,
                title: "龙", 
                value: "44.662"
            },
            {
                id: 2,
                title: "虎", 
                value: "44.662"
            }
        ]
    },
    {
        title:"第三名 VS 第八名",
        buttonList: [
            {
                id: 1,
                title: "龙", 
                value: "44.662"
            },
            {
                id: 2,
                title: "虎", 
                value: "44.662"
            }
        ]
    },
    {
        title:"第四名 VS 第七名",
        buttonList: [
            {
                id: 1,
                title: "龙", 
                value: "44.662"
            },
            {
                id: 2,
                title: "虎", 
                value: "44.662"
            }
        ]
    },
    {
        title:"第五名 VS 第六名",
        buttonList: [
            {
                id: 1,
                title: "龙", 
                value: "44.662"
            },
            {
                id: 2,
                title: "虎", 
                value: "44.662"
            }
        ]
    },
])
const doubleSide = ref([
    {
        title:"冠亚和",
        buttonList: [
            {
                id: 1,
                title: "冠亚大", 
                value: "9.925"
            },
            {
                id: 2,
                title: "冠亚小", 
                value: "9.925"
            },
            {
                id: 3,
                title: "冠亚单", 
                value: "9.925"
            },
            {
                id: 4,
                title: "冠亚双", 
                value: "9.925"
            }
        ]
    },
    {
        title:"冠军",
        buttonList: [
        {
                id: 1,
                title: "大", 
                value: "9.925"
            },
            {
                id: 2,
                title: "小",
                value: "9.925"
            },
            {
                id: 3,
                title: "单",
                value: "9.925"
            },
            {
                id: 4,
                title: "双",
                value: "9.925"
            },
            {
                id: 5,
                title: "龙",
                value: "9.925"
            },
            {
                id: 6,
                title: "虎",
                value: "9.925"
            }
        ]
    },
    {
        title:"亚军",
        buttonList: [
        {
                id: 1,
                title: "大", 
                value: "9.925"
            },
            {
                id: 2,
                title: "小",
                value: "9.925"
            },
            {
                id: 3,
                title: "单",
                value: "9.925"
            },
            {
                id: 4,
                title: "双",
                value: "9.925"
            },
            {
                id: 5,
                title: "龙",
                value: "9.925"
            },
            {
                id: 6,
                title: "虎",
                value: "9.925"
            }
        ]
    },
    {
        title:"第三名",
        buttonList: [
        {
                id: 1,
                title: "大", 
                value: "9.925"
            },
            {
                id: 2,
                title: "小",
                value: "9.925"
            },
            {
                id: 3,
                title: "单",
                value: "9.925"
            },
            {
                id: 4,
                title: "双",
                value: "9.925"
            },
            {
                id: 5,
                title: "龙",
                value: "9.925"
            },
            {
                id: 6,
                title: "虎",
                value: "9.925"
            }
        ]
    },
    {
        title:"第四名",
        buttonList: [
        {
                id: 1,
                title: "大", 
                value: "9.925"
            },
            {
                id: 2,
                title: "小",
                value: "9.925"
            },
            {
                id: 3,
                title: "单",
                value: "9.925"
            },
            {
                id: 4,
                title: "双",
                value: "9.925"
            },
            {
                id: 5,
                title: "龙",
                value: "9.925"
            },
            {
                id: 6,
                title: "虎",
                value: "9.925"
            }
        ]
    },
    {
        title:"第五名",
        buttonList: [
        {
                id: 1,
                title: "大", 
                value: "9.925"
            },
            {
                id: 2,
                title: "小",
                value: "9.925"
            },
            {
                id: 3,
                title: "单",
                value: "9.925"
            },
            {
                id: 4,
                title: "双",
                value: "9.925"
            },
            {
                id: 5,
                title: "龙",
                value: "9.925"
            },
            {
                id: 6,
                title: "虎",
                value: "9.925"
            }
        ]
    },
    {
        title:"第六名",
        buttonList: [
        {
                id: 1,
                title: "大", 
                value: "9.925"
            },
            {
                id: 2,
                title: "小",
                value: "9.925"
            },
            {
                id: 3,
                title: "单",
                value: "9.925"
            },
            {
                id: 4,
                title: "双",
                value: "9.925"
            }
        ]
    }
])
const crown = ref([
{
        title:"冠亚军 组合",
        buttonList: [
            {
                id: 1,
                title: 1, 
                value: "9.925"
            },
            {
                id: 2,
                title: 2, 
                value: "9.925"
            },
            {
                id: 3,
                title: 3, 
                value: "9.925"
            },
            {
                id: 4,
                title: 4, 
                value: "9.925"
            },
            {
                id: 5,
                title: 5, 
                value: "9.925"
            },
            {
                id: 6,
                title: 6, 
                value: "9.925"
            },
            {
                id: 7,
                title: 7, 
                value: "9.925"
            },
            {
                id: 8,
                title: 8, 
                value: "9.925"
            },
            {
                id: 9,
                title: 9, 
                value: "9.925"
            },
            {
                id: 10,
                title: 10, 
                value: "9.925"
            },
            {
                id: 11,
                title: 11, 
                value: "9.925"
            },
            {
                id: 12,
                title: 12, 
                value: "9.925"
            },
            {
                id: 13,
                title: 13, 
                value: "9.925"
            },
            {
                id: 14,
                title: 14, 
                value: "9.925"
            },
            {
                id: 15,
                title: 15, 
                value: "9.925"
            },
            {
                id: 16,
                title: 16, 
                value: "9.925"
            },
            {
                id: 17,
                title: 17, 
                value: "9.925"
            },
            {
                id: 18,
                title: 18, 
                value: "9.925"
            },
            {
                id: 19,
                title: 19, 
                value: "9.925"
            }
        ]
    }
]);
</script>

<style>
.van-popup{
    z-index: 0 !important;
}
.van-overlay{
    z-index: 0 !important;
}
</style>