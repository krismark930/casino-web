<template>
    <div class="relative w-screen mt-[5px]">
        <div>
            <div
                class="flex z-20 h-[37px] bg-[#e8f6ff] px-2 pb-[1.5px] shadow-md text-[12px] overflow-y-none  gap-[9px]"
            >
                <button
                    :class="[
                        item.id === trendButtonActive
                            ? 'bg-[#2674ff] text-white'
                            : 'bg-white text-[#2674ff]'
                    ]"
                    class="text-white rounded-sm px-[10px] my-[4px] border-blue-300 border w-[80px] whitespace-nowrap"
                    v-for="(item, index) in buttonList"
                    :key="index"
                    @click="selectButton"
                >
                    {{ item.name }}
                </button>
            </div>
            <div
                class="absolute top-0 right-0 flex bg-[#e8f3ff] items-center justify-center px-[12px] h-[37px] pr-[20px] shadow-[-5px_0px_5px_-3px_rgba(0,0,0,0.3)]"
                @click="selectButton"
            >
                <img
                    src="@/assets/images/fastthree/icon-7.png"
                    class="w-[20px] h-[20px] mr-[5px] mb-[2px]"
                />
                <p class="text-[8px] text-[#2674ff]">全部<br />玩法</p>
            </div>
        </div>
        <!-- 开奖号码 -->
        <standard-trend v-if="trendButtonActive === 1" :data-list="winningNumber" :head-list="winningHeader"/>
        <!-- 后二 -->
        <standard-trend v-if="trendButtonActive === 2" :data-list="laterTwo" :head-list="laterTwoHeader"/>
        <!-- 后三 -->
        <standard-trend v-if="trendButtonActive === 3" :data-list="laterThree" :head-list="laterThreeHeader"/>
        <!-- 后四 -->
        <standard-trend v-if="trendButtonActive === 4" :data-list="laterFour" :head-list="laterFourHeader"/>
        <!-- 后二双面 -->
        <standard-trend v-if="trendButtonActive === 5" :data-list="laterTwoDouble" :head-list="laterTwoDoubleHeader"/>
        <!-- 万位走势 -->
        <trend-line
            v-if="trendButtonActive === 6"
            :data-list="unitTrend"
            :header-title="'个位走势'"
        />
        <!-- 千位走势 -->
        <trend-line
            v-if="trendButtonActive === 7"
            :data-list="unitTrend"
            :header-title="'个位走势'"
        />
        <!-- 百位走势 -->
        <trend-line
            v-if="trendButtonActive === 8"
            :data-list="unitTrend"
            :header-title="'个位走势'"
        />
        <!-- 个位走势 -->
        <trend-line
            v-if="trendButtonActive === 9"
            :data-list="unitTrend"
            :header-title="'个位走势'"
        />
        <!-- 前三 -->
        <standard-trend v-if="trendButtonActive === 10" :data-list="laterThree" :head-list="laterThreeHeader"/>
        <!-- 前三双面 -->
        <standard-trend v-if="trendButtonActive === 11" :data-list="laterTwoDouble" :head-list="laterTwoDoubleHeader"/>
        <!-- 前二 -->
        <standard-trend v-if="trendButtonActive === 12" :data-list="laterTwo" :head-list="laterTwoHeader"/>
        <!-- 前四 -->
        <standard-trend v-if="trendButtonActive === 13" :data-list="laterFour" :head-list="laterFourHeader"/>
        <!-- 中三 -->
        <standard-trend v-if="trendButtonActive === 14" :data-list="laterThree" :head-list="laterThreeHeader"/>
        <!-- 龙虎和  dragon tiger -->
        <standard-trend v-if="trendButtonActive === 15" :data-list="laterFour" :head-list="laterFourHeader"/>
        <!-- 梭哈 stud -->
        <standard-trend v-if="trendButtonActive === 16" :data-list="laterFour" :head-list="laterFourHeader"/>
        <!-- 炸金花   fried golden flower -->
        <standard-trend v-if="trendButtonActive === 17" :data-list="laterFour" :head-list="laterFourHeader"/>
        <!-- 五星 -->
        <standard-trend v-if="trendButtonActive === 18" :data-list="laterFour" :head-list="laterFourHeader"/>
        <!-- 牛牛 Niu Niu -->
        <standard-trend v-if="trendButtonActive === 19" :data-list="laterFour" :head-list="laterFourHeader"/>
        <!-- 十位走势 -->
        <trend-line
            v-if="trendButtonActive === 20"
            :data-list="unitTrend"
            :header-title="'个位走势'"
        />
        <!-- 前中后三 -->
        <standard-trend v-if="trendButtonActive === 21" :data-list="laterFour" :head-list="laterFourHeader"/>
        
    </div>
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue';
import StandardTrend from '../StandardTrend.vue';
import TrendLine from '../TrendLine.vue';
const state = defineProps<{buttonList:Array<any>, trendButtonActive:number}>();
const { buttonList, trendButtonActive } = toRefs(state);
const emit = defineEmits(['showSlide'])
const showSlide = (value: boolean) => {
    emit('showSlide', value);
}

const selectButton = () => {
    showSlide(true)
};
const winningHeader = ref([
    {
        title:"万位",
        color: '#0000FF',
        subTitle:[]
    },
    {
        title:"千位",
        color: '#000000',
        subTitle:[]
    },
    {
        title:"百位",
        color: '#000000',
        subTitle:[]
    },
    {
        title:"十位",
        color: '#000000',
        subTitle:[]
    },
    {
        title:"个位",
        color: '#000000',
        subTitle:[]
    }
])

const winningNumber = ref([
    {
        id: 1,
        day: "31143",
        values:[
            {
                value: "5",
                color: '#0000FF'
            },
            {
                value: "6",
                color: '#0000FF'
            },
            {
                value: "3",
                color: '#0000FF'
            },
            {
                value: "8",
                color: '#0000FF'
            },
            {
                value: "2",
                color: '#0000FF'
            }
        ]
    },
    {
        id: 1,
        day: "271001",
        values:[
            {
                value: "5",
                color: 'black'
            },
            {
                value: "5",
                color: 'black'
            },
            {
                value: "1",
                color: 'black'
            },
            {
                value: "4",
                color: 'black'
            },
            {
                value: "1",
                color: 'black'
            }
        ]
    },
    {
        id: 1,
        day: "271001",
        values:[
            {
                value: "7",
                color: 'black'
            },
            {
                value: "9",
                color: 'black'
            },
            {
                value: "2",
                color: 'black'
            },
            {
                value: "9",
                color: 'black'
            },
            {
                value: "8",
                color: 'black'
            }
        ]
    },
]);
const laterTwoHeader = ref([
  
    {
        title:"和值",
        color: 'black',
        subTitle:[]
    },
    {
        title:"跨度",
        color: 'black',
        subTitle:[]
    },
    {
        title:"和值尾数",
        color: 'black',
        subTitle:[]
    },
])
const laterFourHeader = ref([
    {
        title:"后四组态",
        color: 'black',
        subTitle:["组24", "组12", "组6", "组4"]
    }
])
const laterThreeHeader = ref([
    {
        title:"后三组态",
        color: 'black',
        subTitle:["组三", "组六"]
    },
    {
        title:"和值",
        color: 'black',
        subTitle:[]
    },
    {
        title:"跨度",
        color: 'black',
        subTitle:[]
    },
    {
        title:"和值尾数",
        color: 'black',
        subTitle:[]
    },
])
const laterTwoDoubleHeader = ref([
    {
        title:"第四球",
        subTitle:["大小","单双","质合"]
    },
    {
        title:"第五球",
        subTitle:["大小","单双", "质合"]
    },
    {
        title:"总和龙虎和",
        subTitle:["大小","单双", "龙虎"]
    }
])
const laterTwo = ref([
    {
        id: 1,
        day: "31143",
        values:[
            {
                value: "10",
                color: 'black'
            },
            {
                value: "6",
                color: '#0000FF'
            },
            {
                value: "0",
                color: 'black'
            }
        ]
    },
    {
        id: 1,
        day: "31143",
        values:[
            {
                value: "5",
                color: 'black'
            },
            {
                value: "3",
                color: 'black'
            },
            {
                value: "5",
                color: 'black'
            }
        ]
    },
    {
        id: 1,
        day: "31143",
        values:[
            {
                value: "17",
                color: 'black'
            },
            {
                value: "1",
                color: 'black'
            },
            {
                value: "7",
                color: 'black'
            }
        ]
    }
])
const laterTwoDouble = ref([
    {
        id: 1,
        day: "271002",
        values: [
            {
                value: "大",
                color: "#2674FF"
            },
            {
                value: "双",
                color: "#2674FF"
            },
            {
                value: "合",
                color: "#FF6000"
            },
            {
                value: "大",
                color: "#FF6000"
            },
            {
                value: "大",
                color: "#FF6000"
            },
            {
                value: "双",
                color: "#FF6000"
            },
            {
                value: "小",
                color: "#2674FF"
            },
            {
                value: "单",
                color: "#2674FF"
            },
            {
                value: "大",
                color: "#2674FF"
            }
        ]
    },{
        id: 2,
        day: "271001",
        values: [
        {
                value: "大",
                color: "#2674FF"
            },
            {
                value: "双",
                color: "#2674FF"
            },
            {
                value: "合",
                color: "#FF6000"
            },
            {
                value: "大",
                color: "#FF6000"
            },
            {
                value: "大",
                color: "#FF6000"
            },
            {
                value: "双",
                color: "#FF6000"
            },
            {
                value: "小",
                color: "#2674FF"
            },
            {
                value: "单",
                color: "#2674FF"
            },
            {
                value: "大",
                color: "#2674FF"
            }
        ]
    },{
        id: 3,
        day: "271000",
        values: [
        {
                value: "大",
                color: "#FF6000"
            },
            {
                value: "双",
                color: "#2674FF"
            },
            {
                value: "合",
                color: "#FF6000"
            },
            {
                value: "大",
                color: "#FF6000"
            },
            {
                value: "大",
                color: "#FF6000"
            },
            {
                value: "双",
                color: "#FF6000"
            },
            {
                value: "小",
                color: "#2674FF"
            },
            {
                value: "单",
                color: "#FF6000"
            },
            {
                value: "大",
                color: "#FF6000"
            }
        ]
    }
])
const laterThree = ref([
{
        id: 1,
        day: "31143",
        values:[
            {
                value: "1",
                color: 'black'
            },
            {
                value: "组六",
                color: '#0000FF'
            },
            {
                value: "3",
                color: 'black'
            },
            {
                value: "8",
                color: 'black'
            },
            {
                value: "3",
                color: 'black'
            }
        ]
    },
    {
        id: 1,
        day: "31143",
        values:[
            {
                value: "组三",
                color: '#FF6C00'
            },
            {
                value: "1",
                color: 'black'
            },
            {
                value: "1",
                color: 'black'
            },
            {
                value: "4",
                color: 'black'
            },
            {
                value: "4",
                color: 'black'
            }
        ]
    },
    {
        id: 1,
        day: "31143",
        values:[
            {
                value: "7",
                color: 'black'
            },
            {
                value: "组六",
                color: '#0000FF'
            },
            {
                value: "2",
                color: 'black'
            },
            {
                value: "9",
                color: 'black'
            },
            {
                value: "9",
                color: 'black'
            }
        ]
    }
])
const laterFour = ref([
{
        id: 1,
        day: "31143",
        values:[
            {
                value: "组24",
                color: '#0000FF'
            },
            {
                value: "1",
                color: 'black'
            },
            {
                value: "3",
                color: 'black'
            },
            {
                value: "8",
                color: 'black'
            }
        ]
    },
    {
        id: 1,
        day: "31143",
        values:[
            {
                value: "2",
                color: 'black'
            },
            {
                value: "组12",
                color: '#FF6C00'
            },
            {
                value: "1",
                color: 'black'
            },
            {
                value: "4",
                color: 'black'
            }
        ]
    },
    {
        id: 1,
        day: "31143",
        values:[
            {
                value: "7",
                color: 'black'
            },
            {
                value: "组12",
                color: '#FF6C00'
            },
            {
                value: "2",
                color: 'black'
            },
            {
                value: "9",
                color: 'black'
            }
        ]
    },
    {
        id: 1,
        day: "",
        values:[
            {
                value: "",
                color: 'black'
            },
            {
                value: "",
                color: 'black'
            },
            {
                value: "组6",
                color: '#5F00B7'
            },
            {
                value: "组4",
                color: '#00AA24'
            }
        ]
    }
])
const unitTrend = ref([
    {
        id: 1,
        day: '31143',
        values: [
            {
                value: 3,
                bg: 'transparent'
            },
            {
                value: 3,
                bg: 'transparent'
            },
            {
                value: 2,
                bg: '#FF0000'
            },
            {
                value: 3,
                bg: 'transparent'
            },
            {
                value: 3,
                bg: 'transparent'
            },
            {
                value: 3,
                bg: 'transparent'
            },
            {
                value: 3,
                bg: 'transparent'
            },
            {
                value: 3,
                bg: 'transparent'
            },
            {
                value: 3,
                bg: 'transparent'
            },
            {
                value: 2,
                bg: 'transparent'
            }
        ]
    },
    {
        id: 2,
        day: '31142',
        values: [
            {
                value: 2,
                bg: 'transparent'
            },
            {
                value: 1,
                bg: '#FF0000'
            },
            {
                value: 2,
                bg: 'transparent'
            },
            {
                value: 2,
                bg: 'transparent'
            },
            {
                value: 2,
                bg: 'transparent'
            },
            {
                value: 2,
                bg: 'transparent'
            },
            {
                value: 2,
                bg: 'transparent'
            },
            {
                value: 2,
                bg: 'transparent'
            },
            {
                value: 2,
                bg: 'transparent'
            },
            {
                value: 2,
                bg: 'transparent'
            }
        ]
    },
    {
        id: 3,
        day: '31141',
        values: [
            {
                value: 1,
                bg: 'transparent'
            },
            {
                value: 1,
                bg: 'transparent'
            },
            {
                value: 1,
                bg: 'transparent'
            },
            {
                value: 1,
                bg: 'transparent'
            },
            {
                value: 1,
                bg: 'transparent'
            },
            {
                value: 1,
                bg: 'transparent'
            },
            {
                value: 2,
                bg: 'transparent'
            },
            {
                value: 1,
                bg: 'transparent'
            },
            {
                value: 1,
                bg: 'transparent'
            },
            {
                value: 8,
                bg: '#FF0000'
            }
        ]
    }
]);
</script>

<style></style>
