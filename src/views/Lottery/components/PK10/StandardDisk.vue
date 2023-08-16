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
    <!-- 猜名次 -->
    <div v-if="parentButtonActive === 1">
        <!-- 猜冠军直选复式 -->
        <standard-circle-items-with-title v-if="subButtonActive == 1" :data="standardData" :has-location="false" :content="content"/>
        <!-- 猜前二直选复式 -->
        <standard-circle-items-with-title v-if="subButtonActive == 2" :data="standardData" :has-location="false" :content="content"/>
        <!-- 猜前二直选单式 -->
        <standard-circle-items-with-title v-if="subButtonActive == 3" :data="[]" :has-location="false" :content="content"/>
        <!-- 猜前三直选复式 -->
        <standard-circle-items-with-title v-if="subButtonActive == 4" :data="standardData" :has-location="false" :content="content"/>
        <!-- 猜前三直选单式 -->
        <standard-circle-items-with-title v-if="subButtonActive == 5" :data="[]" :has-location="false" :content="content"/>
        <!-- 猜前四直选复式 -->
        <standard-circle-items-with-title v-if="subButtonActive == 6" :data="standardData" :has-location="false" :content="content"/>
        <!-- 猜前四直选单式 -->
        <standard-circle-items-with-title v-if="subButtonActive == 7" :data="[]" :has-location="false" :content="content"/>
        <!-- 猜前五直选复式 -->
        <standard-circle-items-with-title v-if="subButtonActive == 8" :data="standardData" :has-location="false" :content="content"/>
        <!-- 猜前五直选单式 -->
        <standard-circle-items-with-title v-if="subButtonActive == 9" :data="[]" :has-location="false" :content="content"/>
    </div>
    <!-- 定位胆 -->
    <div v-if="parentButtonActive === 2">
        <!-- 前五定位胆   -->
        <circle-item-with-title v-if="subButtonActive == 1" :data="positionGallData" :has-location="false"/>
        <!-- 后五定位胆 -->
        <circle-item-with-title v-if="subButtonActive == 2" :data="positionGallData" :has-location="false"/>
    </div>
    <!-- 龙虎 -->
    <div v-if="parentButtonActive === 3">
        <dragon-tiger :data="dragonTiger" :isPK10="false"/>
    </div>  
    <!-- 任选 -->
    <div v-if="parentButtonActive === 4">
        <!-- 任二直选复式 -->
        <circle-item-with-title v-if="subButtonActive == 1" :data="electionDuplexData" :has-location="false"/>
        <!-- 任二直选单式 -->
        <direct-menu v-if="subButtonActive == 2" :has-location="true" :buttonList="locationButtonData"/>
        <!-- 任三直选复式 -->
        <circle-item-with-title v-if="subButtonActive == 3" :data="electionDuplexData" :has-location="false"/>
        <!-- 任三直选单式 -->
        <direct-menu v-if="subButtonActive == 4" :has-location="true" :button-list="locationButtonData"/>
    </div>
    <!-- 大小单双 -->
    <div v-if="parentButtonActive === 5">
        <!-- 前五大小单双 -->
        <direct-menu v-if="subButtonActive == 1" :has-location="true" :button-list="locationButtonData"/>
        <!-- 冠亚和值大小单双 -->
        <squre-items-with-title v-if="subButtonActive == 2" :data="drgonTiger" :col-number="4" :has-location="false" :is-p-k10="false"/>
    </div>
    <!-- 和值 -->
    <div v-if="parentButtonActive === 6">
        <!-- 冠亚和值 -->
        <circle-item  v-if="subButtonActive == 1" :data="afterTwoCombinationData" :has-location="false"/>
        <!-- 前三和值 -->
        <squre-items  v-if="subButtonActive == 2" :data="studData" />
    </div>
    
</template>

<script setup lang="ts">

import {toRefs, ref } from 'vue';
//后二 after two
import CircleItem from '../CircleItems.vue';
import CircleItemWithTitle from '../CircleItemsWithTitle.vue';
import DirectMenu from '../DirectMenu.vue';
import SqureItemsWithTitle from '../SqureItemsWithTitle.vue';
import SqureItems from '../SqureItems.vue';
import SqureItemsWithTopTitle from '../SqureItemsWithTopTitle.vue';
import StandardCircleItemsWithTitle from '../StandardCircleItemsWithTitle.vue';
import DragonTiger from './component/DragonTiger.vue';
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
        title:"冠军",
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
        title:"冠军",
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
const electionDuplexData = ref([
    {
        title: '冠军',
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
        }
        ]
    },
    {
        title: '亚军',
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
        }
        ]
    },
    {
        title: '第三名',
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
        }
        ]
    },
    {
        title: '第四名',
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
        }
        ]
    },
    {
        title: '第五名',
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
        }
        ]
    },
    {
        title: '第六名',
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
        }
        ]
    },
    {
        title: '第七名',
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
        }
        ]
    },
    {
        title: '第八名',
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
        }
        ]
    },
    {
        title: '第九名',
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
        }
        ]
    },
    {
        title: '第十名',
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
        }
        ]
    }
]);
const afterTwoCombinationData = ref([
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
    },
    {
        id: 12,
        value: 12
    },
    {
        id: 13,
        value: 13
    },
    {
        id: 14,
        value: 14
    },
    {
        id: 15,
        value: 15
    },
    {
        id: 16,
        value: 16
    },
    {
        id: 17,
        value: 17
    },
    {
        id: 18,
        value: 18
    }
]);
const studData = ref([
    {
        id: 1,
        title: "大", 
    },
    {
        id: 2,
        title: "小", 
    },
    {
        id: 3,
        title: "单", 
    },
    {
        id: 4,
        title: "双", 
    }
])
// 定位胆
const positionGallData = ref([
    {
        title: '冠军',
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
        }
        ]
    },
    {
        title: '亚军',
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
        }
        ]
    },
    {
        title: '第三名',
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
        }
        ]
    },
    {
        title: '第四名',
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
        }
        ]
    },
    {
        title: '第五名',
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
        }
        ]
    }
]);
const dragonTiger = ref([
    {
        title:"冠军 VS 第十名",
        buttonList: [
            {
                id: 1,
                title: "龙", 
            },
            {
                id: 2,
                title: "虎", 
            }
        ]
    },
    {
        title:"亚军 VS 第九名",
        buttonList: [
            {
                id: 1,
                title: "龙", 
            },
            {
                id: 2,
                title: "虎", 
            }
        ]
    },
    {
        title:"第三名 VS 第八名",
        buttonList: [
            {
                id: 1,
                title: "龙", 
            },
            {
                id: 2,
                title: "虎", 
            }
        ]
    },
    {
        title:"第四名 VS 第七名",
        buttonList: [
            {
                id: 1,
                title: "龙", 
            },
            {
                id: 2,
                title: "虎", 
            }
        ]
    },
    {
        title:"第五名 VS 第六名",
        buttonList: [
            {
                id: 1,
                title: "龙", 
            },
            {
                id: 2,
                title: "虎", 
            }
        ]
    },
])
const drgonTiger = ref([
    {
        title:"冠军",
        buttonList: [
            {
                id: 1,
                title: "大", 
            },
            {
                id: 2,
                title: "小", 
            },
            {
                id: 3,
                title: "单", 
            },
            {
                id: 4,
                title: "双", 
            }
        ]
    },
    {
        title:"亚军",
        buttonList: [
            {
                id: 1,
                title: "大", 
            },
            {
                id: 2,
                title: "小", 
            },
            {
                id: 3,
                title: "单", 
            },
            {
                id: 4,
                title: "双", 
            }
        ]
    },
    {
        title:"第三名",
        buttonList: [
            {
                id: 1,
                title: "大", 
            },
            {
                id: 2,
                title: "小", 
            },
            {
                id: 3,
                title: "单", 
            },
            {
                id: 4,
                title: "双", 
            }
        ]
    },
    {
        title:"第四名",
        buttonList: [
            {
                id: 1,
                title: "大", 
            },
            {
                id: 2,
                title: "小", 
            },
            {
                id: 3,
                title: "单", 
            },
            {
                id: 4,
                title: "双", 
            }
        ]
    },
    {
        title:"第五名",
        buttonList: [
            {
                id: 1,
                title: "大", 
            },
            {
                id: 2,
                title: "小", 
            },
            {
                id: 3,
                title: "单", 
            },
            {
                id: 4,
                title: "双", 
            }
        ]
    }
])

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

</script>

<style></style>
