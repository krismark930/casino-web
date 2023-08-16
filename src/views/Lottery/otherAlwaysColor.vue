<template>
    <div class="animated fadeInLeft">
        <van-nav-bar class="border-b-2 border-gray-300" fixed @click-left="onClickLeft" @click-right="onClickRight">
            <template #left>
                <img class="w-1" referrerpolicy="no-referrer" src="@/assets/images/my/arrow-left.png" />
            </template>
            <template #title>
                <span class="pt-[1px]">彩票</span>
            </template>
            <template #right> 
                <div class="text-[7px] p-[2px] bg-gray-100 rounded-full flex items-center h-[17px]">
                    <img src="@/assets/images/fastthree/icon-yarn.png" class="w-[12px]"/>
                    1,000,00
                </div>
            </template>
        </van-nav-bar>
        <div class="pt-[47px] pb-[60px] h-screen  bg-gray-100 text-[15px]">
            <div class="">
                <div class="relative text-white ">
                    <div class="px-2 pt-[15px] relative z-10">
                        <div class="flex justify-between items-center">
                            <div class="flex items-center">
                                <img src="@/assets/images/fastthree/arrow-left.png" class="w-[10px] h-[15px] mr-1"/>
                                <p>竞速时时彩</p>
                            </div>
                            
                            <div>31143期</div>
                            
                            <div class="flex">
                                <p>投注中</p>
                                <seven-segment value="8" :rounded="false" :segment-width="25" :segment-height="5" on-color="#ffffff" off-color="transparent"/>
                                <div class="bg-[#d0dfed] border-2 border-white rounded-sm px-[2px] text-[10px] ml-1 text-black py-[3px]">00:00:47</div>
                            </div>
                        </div>
                        <div class="flex justify-between items-center mt-[10px] px-1 h-[40px]">
                            <p class="text-[10px]">2710002d</p>
                            <div class="w-full flex justify-around px-3">
                                <div class="relative " v-for="(item, index) in [1,9,0,5,0]" :key="index">
                                    <div class="flex justify-center items-center ">
                                        <img v-if="true" alt="bg" src="@/assets/images/fastthree/icon-circle-active-red.png" class="w-6 " />
                                        <div class="absolute text-black font-bold bottom-[11px] right-[20px]">
                                            {{item}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img src="@/assets/images/fastthree/icon-down.png" class="w-[9px] h-[7px]"/>
                        </div>
                        <div class="mx-2 absolute bottom-[3px] left-0"  @click="selectMainActive">  <!-- @click="selectMainActive" -->
                            <img src="@/assets/images/fastthree/bg-drop.png" alt="bg" class="w-screen" />
                        </div>
                    </div>
                    <div class="absolute top-0">
                        <img src="@/assets/images/fastthree/lottery-bg.png" class="w-screen"/>
                    </div>
                </div>
            </div>
            <div v-if="mainActive === true">
                <div class="relative  flex justify-between mt-[8px] bg-white h-[37px] px-2 text-[12px]">
                    <div class="flex">
                        <button :class="[item.id === activeTap? 'bg-[#2674ff] text-white':'bg-[#e8f6ff]']" class="  my-[5px] rounded-sm text-center mr-1 border-blue-300 border px-[10px] min-w-[65px]" v-for="(item, index) in tapItems" :key="index" @click="changeTap(item.id)">
                            {{item.name}}
                        </button>
                    </div>
                    <div class="flex items-center">
                        <p class="text-[10px] pt-[2px]">玩法说明</p>
                        <img src="@/assets/images/fastthree/icon-help.png" alt="help" class="w-[13px] ml-1"/>
                    </div>
                </div>
                <double-side-disk v-if="activeTap === 1" />
                <standard-disk v-if="activeTap === 2" 
                @showSlide="showSlide" 
                :doubleSideList="doubleSideList" 
                :parentButtonActive="parentButtonActive" 
                :subButtonActive="subButtonActive"/>
            </div>
            <div v-if="mainActive !== true">
                <trend 
                @showSlide="showSlide" 
                :buttonList="doubleButtonList"
                :trendButtonActive="trendButtonActive"
                />
            </div>
            <div class="rounded-t-md bg-white absolute bottom-0 right-0 w-full">
                <div class="relative rounded-t-md">
                    <div class="text-[16px] px-2 py-1 flex ">
                        <span class="">详情:</span>
                        <span class="text-red-500 ml-1">已选0注</span>
                        <span></span>
                    </div>
                    <p class="bg-[#e8f6ff] h-[10px] "></p>
                    <div class="flex justify-between h-[39px]  px-2 text-[12px] items-center my-1">
                        <div class="flex w-10 text-gray-400 items-center w-[50px]">
                            <img src="@/assets/images/fastthree/icon-delete.png" alt="remove icon" class="w-[12px] h-[13px] mr-[5px]"/>
                            <p>清空</p>
                        </div>
                        <div class="w-[180px] flex rounded-sm shadow-sm bg-[#e8f6ff] text-[12px] text-[#2674ff]" >
                            <button type="button" class="px-[5px] py-[6px] w-full bg-transparent border border-[#2674ff] rounded-l-sm ">
                                10
                            </button>
                            <button type="button" class="px-[5px] py-[6px] w-full  bg-transparent border-t border-r border-b border-[#2674ff] ">
                                50
                            </button>
                            <button type="button" class="px-[5px] py-[6px] w-full  bg-transparent border-t border-r border-b border-[#2674ff] ">
                                100
                            </button>
                            <button type="button" class="px-[5px] py-[6px] w-full  bg-transparent border-t border-b border-[#2674ff] ">
                                500
                            </button>
                            <button type="button" class="px-[5px] py-[6px] w-full  bg-transparent border border-[#2674ff] rounded-r-sm ">
                                梭哈
                            </button>
                        </div>
                        <div class="w-[90px] h-[30px] inline-flex items-center rounded-sm shadow-sm text-[14px] border border-1 border-[#2674ff]">
                            <div class="bg-[#e8f6ff] w-[23px] h-full pt-[7px] px-[3px] border-r border-1 border-[#2674ff] rounded-sm">
                                <img src="@/assets/images/fastthree/icon-pen.png" class="w-full" />
                            </div>
                            <p class="text-[11px] ml-[5px] text-gray-400">输入金额</p>
                        </div>
                    </div>
                    <div class="flex justify-between text-[12px] px-2 mb-4">
                        <div class="w-12">
                            <p class="text-end text-red-500">0注，0.00元</p>
                            <p class="text-end">可赢金额：<span class="text-green-500">0.00元</span></p>
                        </div>
                        <button class="bg-gray-300 text-gray-400 border border-gray-400 rounded-sm w-16 m-[]">
                            立即投注
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="mainActive !== true" class="z-20 relative">
            <van-overlay v-model:show="show" class="mt-[178px] h-[632px]">
                <div class="flex bg-white ml-[150px] h-full text-[11px] text-gray-600">
                    <div class="px-1 w-full py-[5px]">
                        <div
                            class="text-black font-bold"
                            @click="() => (show = false)"
                        >
                            <p>号码</p>
                        </div>
                        <div class="flex grid grid-cols-3 gap-1">
                            <button 
                            @click="selectTrendButton(1)"
                            :class="[trendButtonActive === 1? 'bg-[#2674ff] text-white':'bg-[#e8f6ff] text-black']" class="bg-blue-200 px-[2px] py-[4px] rounded-sm   border-blue-300 border">
                                开奖号码
                            </button>
                            <button 
                            @click="selectTrendButton(2)"
                            :class="[trendButtonActive === 2? 'bg-[#2674ff] text-white':'bg-[#e8f6ff] text-black']" class="bg-blue-200 px-[2px] py-[4px] rounded-sm   border-blue-300 border">
                            后二
                            </button>
                            <button 
                            @click="selectTrendButton(3)"
                            :class="[trendButtonActive === 3? 'bg-[#2674ff] text-white':'bg-[#e8f6ff] text-black']" class="bg-blue-200 px-[2px] py-[4px] rounded-sm   border-blue-300 border">
                            后三
                            </button>
                            <button 
                            @click="selectTrendButton(4)"
                            :class="[trendButtonActive === 4? 'bg-[#2674ff] text-white':'bg-[#e8f6ff] text-black']" class="bg-blue-200 px-[2px] py-[4px] rounded-sm  border-blue-300 border">
                            后四
                            </button>
                            <button 
                            @click="selectTrendButton(5)"
                            :class="[trendButtonActive === 5? 'bg-[#2674ff] text-white':'bg-[#e8f6ff] text-black']" class="bg-blue-200 px-[2px] py-[4px] rounded-sm  border-blue-300 border">
                            后二双面
                            </button>
                            <button 
                            @click="selectTrendButton(6)"
                            :class="[trendButtonActive === 6? 'bg-[#2674ff] text-white':'bg-[#e8f6ff] text-black']" class="bg-blue-200 px-[2px] py-[4px] rounded-sm  border-blue-300 border">
                            万位走势
                            </button>
                            <button 
                            @click="selectTrendButton(7)"
                            :class="[trendButtonActive === 7? 'bg-[#2674ff] text-white':'bg-[#e8f6ff] text-black']" class="bg-blue-200 px-[2px] py-[4px] rounded-sm  border-blue-300 border">
                            千位走势
                            </button>
                            <button 
                            @click="selectTrendButton(8)"
                            :class="[trendButtonActive === 8? 'bg-[#2674ff] text-white':'bg-[#e8f6ff] text-black']" class="bg-blue-200 px-[2px] py-[4px] rounded-sm  border-blue-300 border">
                            百位走势
                            </button>
                            <button 
                            @click="selectTrendButton(9)"
                            :class="[trendButtonActive === 9? 'bg-[#2674ff] text-white':'bg-[#e8f6ff] text-black']" class="bg-blue-200 px-[2px] py-[4px] rounded-sm  border-blue-300 border">
                            个位走势
                            </button>
                            <button 
                            @click="selectTrendButton(10)"
                            :class="[trendButtonActive === 10? 'bg-[#2674ff] text-white':'bg-[#e8f6ff] text-black']" class="bg-blue-200 px-[2px] py-[4px] rounded-sm  border-blue-300 border">
                            前三
                            </button>
                            <button 
                            @click="selectTrendButton(11)"
                            :class="[trendButtonActive === 11? 'bg-[#2674ff] text-white':'bg-[#e8f6ff] text-black']" class="bg-blue-200 px-[2px] py-[4px] rounded-sm  border-blue-300 border">
                            前三双面
                            </button>
                            <button 
                            @click="selectTrendButton(12)"
                            :class="[trendButtonActive === 12? 'bg-[#2674ff] text-white':'bg-[#e8f6ff] text-black']" class="bg-blue-200 px-[2px] py-[4px] rounded-sm  border-blue-300 border">
                            前二
                            </button>
                            <button 
                            @click="selectTrendButton(13)"
                            :class="[trendButtonActive === 13? 'bg-[#2674ff] text-white':'bg-[#e8f6ff] text-black']" class="bg-blue-200 px-[2px] py-[4px] rounded-sm  border-blue-300 border">
                            前四
                            </button>
                            <button 
                            @click="selectTrendButton(14)"
                            :class="[trendButtonActive === 14? 'bg-[#2674ff] text-white':'bg-[#e8f6ff] text-black']" class="bg-blue-200 px-[2px] py-[4px] rounded-sm  border-blue-300 border">
                            中三
                            </button>
                            <button 
                            @click="selectTrendButton(15)"
                            :class="[trendButtonActive === 15? 'bg-[#2674ff] text-white':'bg-[#e8f6ff] text-black']" class="bg-blue-200 px-[2px] py-[4px] rounded-sm  border-blue-300 border">
                            龙虎和
                            </button>
                            <button 
                            @click="selectTrendButton(16)"
                            :class="[trendButtonActive === 16? 'bg-[#2674ff] text-white':'bg-[#e8f6ff] text-black']" class="bg-blue-200 px-[2px] py-[4px] rounded-sm  border-blue-300 border">
                            梭哈 
                            </button>
                            <button 
                            @click="selectTrendButton(17)"
                            :class="[trendButtonActive === 17? 'bg-[#2674ff] text-white':'bg-[#e8f6ff] text-black']" class="bg-blue-200 px-[2px] py-[4px] rounded-sm  border-blue-300 border">
                            炸金花
                            </button>
                            <button 
                            @click="selectTrendButton(18)"
                            :class="[trendButtonActive === 18? 'bg-[#2674ff] text-white':'bg-[#e8f6ff] text-black']" class="bg-blue-200 px-[2px] py-[4px] rounded-sm  border-blue-300 border">
                            五星
                            </button>
                        </div>
                        <p class="w-full h-[1px] bg-gray-200 mb-1 mt-[5px]"></p>
                        <div
                            class="text-black font-bold"
                            @click="() => (show = false)"
                        >
                            <p>形态</p>
                        </div>
                        <div class="flex py-1 grid grid-cols-3 gap-1">
                            <button
                            @click="selectTrendButton(19)"
                            :class="[trendButtonActive === 19? 'bg-[#2674ff] text-white':'bg-[#e8f6ff] text-black']" class="bg-blue-200 px-[2px] py-[4px] rounded-sm border-blue-300 border">
                            牛牛
                            </button>
                            <button
                            @click="selectTrendButton(20)"
                            :class="[trendButtonActive === 20? 'bg-[#2674ff] text-white':'bg-[#e8f6ff] text-black']" class="bg-blue-200 px-[2px] py-[4px] rounded-sm border-blue-300 border">
                            十位走势
                            </button>
                            <button
                            @click="selectTrendButton(21)"
                            :class="[trendButtonActive === 21? 'bg-[#2674ff] text-white':'bg-[#e8f6ff] text-black']" class="bg-blue-200 px-[2px] py-[4px] rounded-sm border-blue-300 border">
                            前中后三
                            </button>
                        </div>
                    </div>
                </div>
            </van-overlay>
        </div>
        <div v-else class="z-20 relative">
            <van-overlay v-model:show="show" class="mt-[183px] h-[629px]">
                <div class="relative flex bg-white ml-[80px] h-full text-[10px] text-gray-600  z-50">
                    <div class="w-[200px] bg-gray-200 pt-[15px] px-1 gap-x-1 gap-y-0">
                        <div class="grid grid-cols-2 gap-1">
                            <div
                                @click="selectSubBotton(item)"
                                v-for="(item, index) in subButtonList"
                                :key="index"
                                class="bg-white rounded-sm h-[25px] flex justify-center border border-blue-300 items-center col-span-1"
                            >
                                {{ (item as any).name }}
                            </div>
                        </div>
                    </div>
                    <div class="w-[95px]">
                        <div
                            class="flex justify-center w-full gap-1 my-1 items-center"
                            @click="() => (show = false)"
                        >
                            <p>全部玩法</p>
                            <img
                                src="@/assets/images/fastthree/icon-8.png"
                                class="w-[13px] h-[13px]"
                            />
                        </div>
                        <div
                            @click="selectButton(item)"
                            v-for="(item, index) in parentButtonList"
                            :key="index"
                            class="py-1"
                            :class="[
                                item.id === parentButtonActive
                                    ? 'bg-[#2674ff] text-white'
                                    : 'bg-white text-gray-500'
                            ]"
                        >
                            <p class="text-center">{{ item.name }}</p>
                        </div>
                    </div>
                </div>
            </van-overlay>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import DoubleSideDisk from './components/AlwaysColor/DoubleSideDisk.vue';
import StandardDisk from './components/AlwaysColor/StandardDisk.vue';
import Trend from './components/AlwaysColor/Trend.vue';
import router from '@/router';
const show = ref(false);
const mainActive = ref(true);
const activeTap = ref(1);
const trendButtonActive = ref(1);
const showSlide = (value:boolean) => {
    show.value = value;
}
const onClickLeft = () => {
    router.go(-1);
}
const onClickRight = () => {
    
}
const tapItems = ref([
    {
        id : 1,
        name: '双面盘'
    },
    {
        id : 2,
        name: '标准盘'
    },
]);
const changeTap = (id:number) => {
    show.value = false;
    activeTap.value = id;
}
const selectMainActive = () => {
    mainActive.value = !mainActive.value;
}
const doubleButtonList = ref([
    {
        id: 1,
        name: '开奖号码'
    },
    {
        id: 2,
        name: '后二'
    },
    {
        id: 3,
        name: '后三'
    },
    {
        id: 4,
        name: '后四'
    }
    ,
    {
        id: 5,
        name: '后二双面'
    },
    {
        id: 6,
        name: '万位走势'
    },
    {
        id: 7,
        name: '千位走势'
    },
    {
        id: 8,
        name: '百位走势'
    },
    {
        id: 9,
        name: '个位走势'
    },
    {
        id: 10,
        name: '前三'
    },
    {
        id: 11,
        name: '前三双面'
    },
    {
        id: 12,
        name: '前二'
    },
    {
        id: 12,
        name: '前四'
    },
    {
        id: 12,
        name: '中三'
    },
    {
        id: 12,
        name: '龙虎和'
    },
    {
        id: 12,
        name: '梭哈'
    },
    {
        id: 12,
        name: '炸金花'
    },
    {
        id: 12,
        name: '五星'
    },
    {
        id: 12,
        name: '牛牛'
    },
    {
        id: 12,
        name: '十位走势'
    },
    {
        id: 12,
        name: '前中后三'
    }
])
const parentButtonActive = ref(0);
const subButtonActive = ref(0);
const doubleSideList = ref([
{
        id: 1,
        name: '五星',
        subButtons: [
            {
                subId: 1,
                name: '五星直选复式'
            },
            {
                subId: 2,
                name: '五星直选单式'
            },
            {
                subId: 3,
                name: '五星直选组合'
            },
            {
                subId: 4,
                name: '五星组选120'
            },
            {
                subId: 5,
                name: '五星组选60'
            },
            {
                subId: 6,
                name: '五星组选30'
            },
            {
                subId: 7,
                name: '五星组选20'
            },
            
            {
                subId: 8,
                name: '五星组选10'
            },
            
            {
                subId: 9,
                name: '五星组选5'
            },
        ]
    },
    {
        id: 2,
        name: '四星',
        subButtons: [
            {
                subId: 1,
                name: '前四直选复式'
            },
            {
                subId: 2,
                name: '前四直选单式'
            },
            {
                subId: 3,
                name: '前四直选组合'
            },
            {
                subId: 4,
                name: '前四组选24'
            },
            {
                subId: 5,
                name: '前四组选12'
            },
            {
                subId: 6,
                name: '前四组选6'
            },
            {
                subId: 7,
                name: '前四组选4'
            },
            {
                subId: 8,
                name: '后四直选复式'
            },
            {
                subId: 9,
                name: '后四直选单式'
            },
            {
                subId: 10,
                name: '后四直选组合'
            },
            {
                subId: 11,
                name: '后四组合24'
            },
            {
                subId: 12,
                name: '后四组合12'
            },
            {
                subId: 13,
                name: '后四组合6'
            },
            {
                subId: 14,
                name: '后四组合4'
            },
        ]
    },
    {
        id: 3,
        name: '前三',
        subButtons: [
            {
                subId: 1,
                name: '前三直选复式'
            },
            {
                subId: 2,
                name: '前三直选单式'
            }
            ,
            {
                subId: 3,
                name: '前三直选组合'
            }
            ,
            {
                subId: 4,
                name: '前三直选和值'
            }
            ,
            {
                subId: 5,
                name: '前三直选跨度'
            }
            ,
            {
                subId: 6,
                name: '前三组选三'
            }
            ,
            {
                subId: 7,
                name: '前三组选六'
            }
            ,
            {
                subId: 8,
                name: '前三混合组选'
            }
            ,
            {
                subId: 9,
                name: '前三组选和值'
            },
            {
                subId: 10,
                name: '前三组三单式'
            },
            {
                subId: 11,
                name: '前三组六单式'
            },
            {
                subId: 12,
                name: '前三组选包胆'
            },
            {
                subId: 13,
                name: '前三和值尾数'
            }
        ]
    },
    {
        id: 4,
        name: '中三',
        subButtons: [
            {
                subId: 1,
                name: '中三直选复式'
            },
            {
                subId: 2,
                name: '中三直选单式'
            },
            {
                subId: 3,
                name: '中三直选组合'
            },
            {
                subId: 4,
                name: '中三直选和值'
            },
            {
                subId: 5,
                name: '中三直选跨度'
            },
            {
                subId: 6,
                name: '中三组选三'
            },
            {
                subId: 7,
                name: '中三组选六'
            },
            {
                subId: 8,
                name: '中三混合组选'
            },
            {
                subId: 9,
                name: '中三组选和值'
            },
            {
                subId: 10,
                name: '中三组三单式'
            },
            {
                subId: 11,
                name: '中三组六单式'
            },
            {
                subId: 12,
                name: '中三组选包胆'
            },
            {
                subId: 13,
                name: '中三和值尾数'
            }
        ]
    },
    {
        id: 5,
        name: '后三',
        subButtons: [
            {
                subId: 1,
                name: '后三直选复式'
            },
            {
                subId: 2,
                name: '后三直选单式'
            },
            {
                subId: 3,
                name: '后三直选组合'
            },
            {
                subId: 4,
                name: '后三直选和值'
            },
            {
                subId: 5,
                name: '后三直选跨度'
            },
            {
                subId: 6,
                name: '后三组选三'
            },
            {
                subId: 7,
                name: '后三组选六'
            },
            {
                subId: 8,
                name: '后三混合组选'
            },
            {
                subId: 9,
                name: '后三组选和值'
            },
            {
                subId: 10,
                name: '后三组三单式'
            },
            {
                subId: 11,
                name: '后三组六单式'
            },
            {
                subId: 12,
                name: '后三组选包胆'
            },
            {
                subId: 13,
                name: '后三和值尾数'
            }
        ]
    },
    {
        id: 6,
        name: '前二',
        subButtons: [
            {
                subId: 1,
                name: '前二直选复式'
            },
            {
                subId: 2,
                name: '前二直选单式'
            },
            {
                subId: 3,
                name: '前二直选和值'
            },
            {
                subId: 4,
                name: '前二直选跨度'
            },
            {
                subId: 5,
                name: '前二组选复式'
            },
            {
                subId: 6,
                name: '前二组选单式'
            },
            {
                subId: 7,
                name: '前二组选和值'
            },
            {
                subId: 8,
                name: '前二组选包胆'
            }
        ]
    },
    {
        id: 7,
        name: '后二',
        subButtons: [
            {
                subId: 1,
                name: '后二直选复式'
            },
            {
                subId: 2,
                name: '后二直选单式'
            },
            {
                subId: 3,
                name: '后二直选组合'
            },
            {
                subId: 4,
                name: '后二直选跨度'
            },
            {
                subId: 5,
                name: '后二组选复式'
            },
            {
                subId: 6,
                name: '后二组选单式'
            },
            {
                subId: 7,
                name: '后二组选和值'
            },
            {
                subId: 8,
                name: '后二组选包胆'
            }
        ]
    },
    {
        id: 8,
        name: '定位胆',
        subButtons: [
            {
                subId: 1,
                name: '定位胆'
            }
        ]
    },
    {
        id: 9,
        name: '不定胆',
        subButtons: [
            {
                subId: 1,
                name: '前三一码不定胆'
            },
            {
                subId: 2,
                name: '前三二码不定胆'
            },
            {
                subId: 3,
                name: '中三一码不定胆'
            },
            {
                subId: 4,
                name: '中三二码不定胆'
            },
            {
                subId: 5,
                name: '后三一码不定胆'
            },
            {
                subId: 6,
                name: '后三二码不定胆'
            },
            {
                subId: 7,
                name: '前四一码不定胆'
            },
            {
                subId: 8,
                name: '前四二码不定胆'
            },
            {
                subId: 9,
                name: '前四三码不定胆'
            },
            {
                subId: 10,
                name: '后四一码不定胆'
            },
            {
                subId: 11,
                name: '后四二码不定胆'
            },
            {
                subId: 12,
                name: '后四三码不定胆'
            },
            {
                subId: 13,
                name: '五星一码不定胆'
            },
            {
                subId: 14,
                name: '五星二码不定胆'
            },
            {
                subId: 15,
                name: '五星三码不定胆'
            }
        ]
    },
    {
        id: 10,
        name: '大小单双',
        subButtons: [
            {
                subId: 1,
                name: '前二大小单双组合'
            },
            {
                subId: 2,
                name: '前三大小单双组合'
            },
            {
                subId: 3,
                name: '后二大小单双组合'
            },
            {
                subId: 4,
                name: '后三大小单双组合'
            },
            {
                subId: 5,
                name: '五星和值大小单双'
            },
            {
                subId: 6,
                name: '三星和值大小单双'
            }
        ]
    },
    {
        id: 11,
        name: '趣味',
        subButtons: [
            {
                subId: 1,
                name: '一帆风顺'
            },
            {
                subId: 2,
                name: '好事成双'
            },
            {
                subId: 3,
                name: '三星报喜'
            },
            {
                subId: 4,
                name: '四季发财'
            }
        ]
    },
    {
        id: 12,
        name: '任选二',
        subButtons: [
            {
                subId: 1,
                name: '任二直选复式'
            },
            {
                subId: 2,
                name: '任二直选单式'
            },
            {
                subId: 3,
                name: '任二直选和值'
            },
            {
                subId: 4,
                name: '任二组选复式'
            },
            {
                subId: 5,
                name: '任二组选单式'
            },
            {
                subId: 6,
                name: '任二组选和值'
            },
            {
                subId: 7,
                name: '任二组选包胆'
            }
        ]
    },
    {
        id: 13,
        name: '任选三',
        subButtons: [
            {
                subId: 1,
                name: '任三直选复式'
            },
            {
                subId: 2,
                name: '任三直选单式'
            },
            {
                subId: 3,
                name: '任三直选和值'
            },
            {
                subId: 4,
                name: '任三组选复式'
            },
            {
                subId: 5,
                name: '任三组选单式'
            },
            {
                subId: 6,
                name: '任三组选和值'
            },
            {
                subId: 7,
                name: '任三组选包胆'
            }
        ]
    },
    {
        id: 14,
        name: '任选四',
        subButtons: [
            {
                subId: 1,
                name: '任四直选复式'
            },
            {
                subId: 2,
                name: '任四直选单式'
            },
            {
                subId: 3,
                name: '任四组选24'
            },
            {
                subId: 4,
                name: '任选组选12'
            },
            {
                subId: 5,
                name: '任四组选6'
            },
            {
                subId: 6,
                name: '任四组选4'
            }
        ]
    },
    {
        id: 15,
        name: '其它玩法',
        subButtons: [
            {
                subId: 1,
                name: '龙虎'
            },
            {
                subId: 2,
                name: '梭哈'
            },
            {
                subId: 3,
                name: '炸金花'
            },
            {
                subId: 4,
                name: '牛牛'
            }
        ]
    }
]);

const parentButtonList = ref([
    {
        id: 1,
        name: '五星',
        subButtons: [
            {
                subId: 1,
                name: '五星直选复式'
            },
            {
                subId: 2,
                name: '五星直选单式'
            },
            {
                subId: 3,
                name: '五星直选组合'
            },
            {
                subId: 4,
                name: '五星组选120'
            },
            {
                subId: 5,
                name: '五星组选60'
            },
            {
                subId: 6,
                name: '五星组选30'
            },
            {
                subId: 7,
                name: '五星组选20'
            },
            
            {
                subId: 8,
                name: '五星组选10'
            },
            
            {
                subId: 9,
                name: '五星组选5'
            },
        ]
    },
    {
        id: 2,
        name: '四星',
        subButtons: [
            {
                subId: 1,
                name: '前四直选复式'
            },
            {
                subId: 2,
                name: '前四直选单式'
            },
            {
                subId: 3,
                name: '前四直选组合'
            },
            {
                subId: 4,
                name: '前四组选24'
            },
            {
                subId: 5,
                name: '前四组选12'
            },
            {
                subId: 6,
                name: '前四组选6'
            },
            {
                subId: 7,
                name: '前四组选4'
            },
            {
                subId: 8,
                name: '后四直选复式'
            },
            {
                subId: 9,
                name: '后四直选单式'
            },
            {
                subId: 10,
                name: '后四直选组合'
            },
            {
                subId: 11,
                name: '后四组合24'
            },
            {
                subId: 12,
                name: '后四组合12'
            },
            {
                subId: 13,
                name: '后四组合6'
            },
            {
                subId: 14,
                name: '后四组合4'
            },
        ]
    },
    {
        id: 3,
        name: '前三',
        subButtons: [
            {
                subId: 1,
                name: '前三直选复式'
            },
            {
                subId: 2,
                name: '前三直选单式'
            }
            ,
            {
                subId: 3,
                name: '前三直选组合'
            }
            ,
            {
                subId: 4,
                name: '前三直选和值'
            }
            ,
            {
                subId: 5,
                name: '前三直选跨度'
            }
            ,
            {
                subId: 6,
                name: '前三组选三'
            }
            ,
            {
                subId: 7,
                name: '前三组选六'
            }
            ,
            {
                subId: 8,
                name: '前三混合组选'
            }
            ,
            {
                subId: 9,
                name: '前三组选和值'
            },
            {
                subId: 10,
                name: '前三组三单式'
            },
            {
                subId: 11,
                name: '前三组六单式'
            },
            {
                subId: 12,
                name: '前三组选包胆'
            },
            {
                subId: 13,
                name: '前三和值尾数'
            }
        ]
    },
    {
        id: 4,
        name: '中三',
        subButtons: [
            {
                subId: 1,
                name: '中三直选复式'
            },
            {
                subId: 2,
                name: '中三直选单式'
            },
            {
                subId: 3,
                name: '中三直选组合'
            },
            {
                subId: 4,
                name: '中三直选和值'
            },
            {
                subId: 5,
                name: '中三直选跨度'
            },
            {
                subId: 6,
                name: '中三组选三'
            },
            {
                subId: 7,
                name: '中三组选六'
            },
            {
                subId: 8,
                name: '中三混合组选'
            },
            {
                subId: 9,
                name: '中三组选和值'
            },
            {
                subId: 10,
                name: '中三组三单式'
            },
            {
                subId: 11,
                name: '中三组六单式'
            },
            {
                subId: 12,
                name: '中三组选包胆'
            },
            {
                subId: 13,
                name: '中三和值尾数'
            }
        ]
    },
    {
        id: 5,
        name: '后三',
        subButtons: [
            {
                subId: 1,
                name: '后三直选复式'
            },
            {
                subId: 2,
                name: '后三直选单式'
            },
            {
                subId: 3,
                name: '后三直选组合'
            },
            {
                subId: 4,
                name: '后三直选和值'
            },
            {
                subId: 5,
                name: '后三直选跨度'
            },
            {
                subId: 6,
                name: '后三组选三'
            },
            {
                subId: 7,
                name: '后三组选六'
            },
            {
                subId: 8,
                name: '后三混合组选'
            },
            {
                subId: 9,
                name: '后三组选和值'
            },
            {
                subId: 10,
                name: '后三组三单式'
            },
            {
                subId: 11,
                name: '后三组六单式'
            },
            {
                subId: 12,
                name: '后三组选包胆'
            },
            {
                subId: 13,
                name: '后三和值尾数'
            }
        ]
    },
    {
        id: 6,
        name: '前二',
        subButtons: [
            {
                subId: 1,
                name: '前二直选复式'
            },
            {
                subId: 2,
                name: '前二直选单式'
            },
            {
                subId: 3,
                name: '前二直选和值'
            },
            {
                subId: 4,
                name: '前二直选跨度'
            },
            {
                subId: 5,
                name: '前二组选复式'
            },
            {
                subId: 6,
                name: '前二组选单式'
            },
            {
                subId: 7,
                name: '前二组选和值'
            },
            {
                subId: 8,
                name: '前二组选包胆'
            }
        ]
    },
    {
        id: 7,
        name: '后二',
        subButtons: [
            {
                subId: 1,
                name: '后二直选复式'
            },
            {
                subId: 2,
                name: '后二直选单式'
            },
            {
                subId: 3,
                name: '后二直选组合'
            },
            {
                subId: 4,
                name: '后二直选跨度'
            },
            {
                subId: 5,
                name: '后二组选复式'
            },
            {
                subId: 6,
                name: '后二组选单式'
            },
            {
                subId: 7,
                name: '后二组选和值'
            },
            {
                subId: 8,
                name: '后二组选包胆'
            }
        ]
    },
    {
        id: 8,
        name: '定位胆',
        subButtons: [
            {
                subId: 1,
                name: '定位胆'
            }
        ]
    },
    {
        id: 9,
        name: '不定胆',
        subButtons: [
            {
                subId: 1,
                name: '前三一码不定胆'
            },
            {
                subId: 2,
                name: '前三二码不定胆'
            },
            {
                subId: 3,
                name: '中三一码不定胆'
            },
            {
                subId: 4,
                name: '中三二码不定胆'
            },
            {
                subId: 5,
                name: '后三一码不定胆'
            },
            {
                subId: 6,
                name: '后三二码不定胆'
            },
            {
                subId: 7,
                name: '前四一码不定胆'
            },
            {
                subId: 8,
                name: '前四二码不定胆'
            },
            {
                subId: 9,
                name: '前四三码不定胆'
            },
            {
                subId: 10,
                name: '后四一码不定胆'
            },
            {
                subId: 11,
                name: '后四二码不定胆'
            },
            {
                subId: 12,
                name: '后四三码不定胆'
            },
            {
                subId: 13,
                name: '五星一码不定胆'
            },
            {
                subId: 14,
                name: '五星二码不定胆'
            },
            {
                subId: 15,
                name: '五星三码不定胆'
            }
        ]
    },
    {
        id: 10,
        name: '大小单双',
        subButtons: [
            {
                subId: 1,
                name: '前二大小单双组合'
            },
            {
                subId: 2,
                name: '前三大小单双组合'
            },
            {
                subId: 3,
                name: '后二大小单双组合'
            },
            {
                subId: 4,
                name: '后三大小单双组合'
            },
            {
                subId: 5,
                name: '五星和值大小单双'
            },
            {
                subId: 6,
                name: '三星和值大小单双'
            }
        ]
    },
    {
        id: 11,
        name: '趣味',
        subButtons: [
            {
                subId: 1,
                name: '一帆风顺'
            },
            {
                subId: 2,
                name: '好事成双'
            },
            {
                subId: 3,
                name: '三星报喜'
            },
            {
                subId: 4,
                name: '四季发财'
            }
        ]
    },
    {
        id: 12,
        name: '任选二',
        subButtons: [
            {
                subId: 1,
                name: '任二直选复式'
            },
            {
                subId: 2,
                name: '任二直选单式'
            },
            {
                subId: 3,
                name: '任二直选和值'
            },
            {
                subId: 4,
                name: '任二组选复式'
            },
            {
                subId: 5,
                name: '任二组选单式'
            },
            {
                subId: 6,
                name: '任二组选和值'
            },
            {
                subId: 7,
                name: '任二组选包胆'
            }
        ]
    },
    {
        id: 13,
        name: '任选三',
        subButtons: [
            {
                subId: 1,
                name: '任三直选复式'
            },
            {
                subId: 2,
                name: '任三直选单式'
            },
            {
                subId: 3,
                name: '任三直选和值'
            },
            {
                subId: 4,
                name: '任三组选复式'
            },
            {
                subId: 5,
                name: '任三组选单式'
            },
            {
                subId: 6,
                name: '任三组选和值'
            },
            {
                subId: 7,
                name: '任三组选包胆'
            }
        ]
    },
    {
        id: 14,
        name: '任选四',
        subButtons: [
            {
                subId: 1,
                name: '任四直选复式'
            },
            {
                subId: 2,
                name: '任四直选单式'
            },
            {
                subId: 3,
                name: '任四组选24'
            },
            {
                subId: 4,
                name: '任选组选12'
            },
            {
                subId: 5,
                name: '任四组选6'
            },
            {
                subId: 6,
                name: '任四组选4'
            }
        ]
    },
    {
        id: 15,
        name: '其它玩法',
        subButtons: [
            {
                subId: 1,
                name: '龙虎'
            },
            {
                subId: 2,
                name: '梭哈'
            },
            {
                subId: 3,
                name: '炸金花'
            },
            {
                subId: 4,
                name: '牛牛'
            }
        ]
    }
]);

const subButtonList = ref([] as Array<{ subId: number; name: string }>);
const selectButton = (item: any) => {
    console.log(item)
    show.value = true;
    subButtonList.value = item.subButtons;
    parentButtonActive.value = item.id;
};
const selectSubBotton = (item: any) => {
    show.value = false
    
    let tempIndex = 0;
    const selectedParentObject = doubleSideList.value.map((obj, index) => {
        if (obj.id === parentButtonActive.value) {
            tempIndex = index;
            return obj;
        }
    });

    const tempList = doubleSideList.value;
    const temp = tempList[0];
    // for(var i = tempList.length-1; i >=0; i--){
    //     tempList[i] = tempList[i-1];
    // }
    tempList[0] = tempList[tempIndex];
    tempList[tempIndex] = temp;
    doubleSideList.value = tempList;

    console.log(item)
    subButtonActive.value = item.subId;
};

const selectTrendButton = (id: number) => {
    trendButtonActive.value = id;
    show.value = false;

    let tempIndex = 0;
    const selectedObject = doubleButtonList.value.map((obj, index) => {
        if (obj.id === id) {
            tempIndex = index;
            return obj;
        }
    });

    const tempList = doubleButtonList.value;
    const temp = tempList[0];

    tempList[0] = tempList[tempIndex];
    tempList[tempIndex] = temp;
    doubleButtonList.value = tempList;
}
</script>

<style>
</style>