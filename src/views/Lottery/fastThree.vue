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
                                <p>竞速快三</p>
                            </div>
                            
                            <div>271003期</div>
                            
                            <div class="flex">
                                <p>投注中</p>
                                <seven-segment value="8" :rounded="false" :segment-width="25" :segment-height="5" on-color="#ffffff" off-color="transparent"/>
                                <div class="bg-[#d0dfed] border-2 border-white rounded-sm px-[2px] text-[10px] ml-1 text-black py-[3px]">00:00:47</div>
                            </div>
                        </div>
                        <div class="flex justify-between items-center mt-[17px] px-1">
                            <p class="text-[10px]">2710002d</p>
                            <div class="w-full flex justify-around px-5">
                                <img src="@/assets/images/fastthree/dice1.png" class="w-[25px]" alt="dice1"/>
                                <img src="@/assets/images/fastthree/dice3.png" class="w-[25px]" alt="dice3"/>
                                <img src="@/assets/images/fastthree/dice3.png" class="w-[25px]" alt="dice3"/>
                            </div>
                            <img src="@/assets/images/fastthree/icon-down.png" class="w-[9px] h-[7px]"/>
                        </div>
                        <div class="mx-2 absolute bottom-[-7px] left-0" @click="selectMainActive">
                            <img src="@/assets/images/fastthree/bg-drop.png" alt="bg" class="w-screen" />
                        </div>
                    </div>
                    <div class="absolute top-0">
                        <img src="@/assets/images/fastthree/lottery-bg.png" class="w-screen"/>
                    </div>
                </div>
            </div>
            
            <div v-if="mainActive === true">
                <div class="relative  flex justify-between mt-[16px] bg-white h-[37px] px-2 text-[12px]">
                    <div class="flex">
                        <button :class="[item.id === activeTap? 'bg-[#2674ff] text-white':'bg-[#e8f6ff]']" class="  my-[5px] rounded-sm text-center mr-1 border-blue-300 border px-[10px] min-w-[65px]" v-for="(item, index) in tapItems" :key="index" @click="changeTap(item.id)">
                            {{item.name}}
                        </button>
                    </div>
                    <div class="flex items-center" @click="() => helpShow = true">
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
                :buttonList="doubleTrendList"
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
            <van-overlay v-model:show="show" class="mt-[180px] h-[632px]">
                <div class="flex bg-white ml-[150px] h-full text-[11px] text-gray-600">
                    <div class="px-1 w-full py-[5px]">
                        <div
                            class="text-black font-bold"
                            @click="() => (show = false)"
                        >
                            <p>号码</p>
                        </div>
                        <div class="flex py-1 grid grid-cols-3">
                            <button 
                            @click="selectTrendButton(1)"
                            :class="[parentButtonActive === 1? 'bg-[#2674ff] text-white':'bg-[#e8f6ff] text-black']" class="bg-blue-200 px-[6px] py-[4px] rounded-sm  mr-1 border-blue-300 border">
                                开奖号码
                            </button>
                            <button 
                            @click="selectTrendButton(2)" 
                            :class="[parentButtonActive === 2? 'bg-[#2674ff] text-white':'bg-[#e8f6ff] text-black']" class="bg-blue-200 px-[6px] py-[4px] rounded-sm  mr-1 border-blue-300 border">
                                号码分布
                            </button>
                        </div>
                        <p class="w-full h-[1px] bg-gray-200 mb-1 mt-[5px]"></p>
                        <div
                            class="text-black font-bold"
                            @click="() => (show = false)"
                        >
                            <p>形态</p>
                        </div>
                        <div class="flex py-1 grid grid-cols-3">
                            <button
                            @click="selectTrendButton(4)"
                            :class="[parentButtonActive === 4? 'bg-[#2674ff] text-white':'bg-[#e8f6ff] text-black']" class="bg-blue-200 px-[6px] py-[4px] rounded-sm  mr-1 border-blue-300 border">
                                形态
                            </button>
                            <button
                            @click="selectTrendButton(3)"
                            :class="[parentButtonActive === 3? 'bg-[#2674ff] text-white':'bg-[#e8f6ff] text-black']" class="bg-blue-200 px-[6px] py-[4px] rounded-sm  mr-1 border-blue-300 border">
                                和值形态
                            </button>
                            <button
                            @click="selectTrendButton(5)"
                            :class="[parentButtonActive === 5? 'bg-[#2674ff] text-white':'bg-[#e8f6ff] text-black']" class="bg-blue-200 px-[6px] py-[4px] rounded-sm  mr-1 border-blue-300 border">
                                鱼虾蟹
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
        <div class="z-40 relative">
            <van-popup v-model:show="helpShow" position="bottom" class="rounded-t-md h-[calc(100vh-150px)] overflow-y-hidden">
                <div class="relative rounded-t-md  z-30">
                    <div class="flex justify-between items-center p-[15px] text-[11px]">
                        <div @click="() => helpShow = false">
                            <img src="@/assets/images/fastthree/icon-down-black.png" alt="down" class=" w-1 "/>
                        </div>
                        <div>
                            玩法说明
                        </div>
                        <div>

                        </div>
                    </div>
                    <div class="w-full bg-gray-300 h-[1px]"></div>
                    <van-collapse v-model="activeNames">
                        <van-collapse-item title="竞速快三" class="text-[10px]" name="1">
                            <div class="text-[10px]">
                                <div class="pb-1">
                                    <div class="font-bold text-black pb-[5px]">
                                        1.三军
                                    </div>
                                    <div>
                                        选择1个号码组成1注，开奖号码包含所选号码，即中奖。 举例：开奖号码1,1,3,投注 &lt; 1 >,即中奖。 总和大小：开奖号码之
                                    </div>
                                </div>
                                <div class="pb-1">
                                    <div class="font-bold text-black pb-[5px]">
                                        2.总和大小
                                    </div>
                                    <div>
                                        选择1个号码组成1注，开奖号码包含所选号码，即中奖。 举例：开奖号码1,1,3,投注 &lt; 1 >,即中奖。 总和大小：开奖号码之
                                    </div>
                                </div>
                                <div class="pb-1">
                                    <div class="font-bold text-black pb-[5px]">
                                        3.总和点数
                                    </div>
                                    <div>
                                        选择1个号码组成1注，开奖号码包含所选号码，即中奖。 举例：开奖号码1,1,3,投注 &lt; 1 >,即中奖。 总和大小：开奖号码之
                                    </div>
                                </div>
                                <div class="pb-1">
                                    <div class="font-bold text-black pb-[5px]">
                                        4.围骰全骰
                                    </div>
                                    <div>
                                        选择1个号码组成1注，开奖号码包含所选号码，即中奖。 举例：开奖号码1,1,3,投注 &lt; 1 >,即中奖。 总和大小：开奖号码之
                                    </div>
                                </div>
                                <div class="pb-1">
                                    <div class="font-bold text-black pb-[5px]">
                                        5.长牌短牌
                                    </div>
                                    <div>
                                        选择1个号码组成1注，开奖号码包含所选号码，即中奖。 举例：开奖号码1,1,3,投注 &lt; 1 >,即中奖。 总和大小：开奖号码之
                                    </div>
                                </div>
                                <div class="pb-1">
                                    <div class="font-bold text-black pb-[5px]">
                                        6.鱼虾蟹
                                    </div>
                                    <div>
                                        选择1个号码组成1注，开奖号码包含所选号码，即中奖。 举例：开奖号码1,1,3,投注 &lt; 1 >,即中奖。 总和大小：开奖号码之
                                    </div>
                                </div>
                            </div>
                        </van-collapse-item>
                        <div class="px-[15px] w-full py-[5px] border-t text-[10px]">
                            <div
                                v-for="(item, index) in helpButtons" :key="index"
                                class="text-black pb-[15px]"
                                @click="selectHelp(item)"
                            >
                                <p class="pb-[3px]">{{item.title}}</p>

                                <div class="flex grid grid-cols-4 gap-1">
                                <button 
                                v-for="(subItem, index) in item.buttonList" :key="index"
                                @click="selectTrendButton(1)"
                                :class="[trendButtonActive === subItem.id? 'bg-[#2674ff] text-white':'bg-[#e8f6ff] text-black']" class="bg-blue-200 px-[2px] py-[4px] rounded-sm   border-blue-300 border">
                                    {{ subItem.title }}
                                </button>
                            </div>
                            </div>
                        </div>
                    </van-collapse>
                </div>
            </van-popup>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import DoubleSideDisk from './components/FastThree/DoubleSideDisk.vue';
import StandardDisk from './components/FastThree/StandardDisk.vue';
import Trend from './components/FastThree/Trend.vue';
import router from '@/router';
const show = ref(false);
const helpShow = ref(false);
const mainActive = ref(true);
const activeTap = ref(1);
const activeNames = ref([0]);
const trendButtonActive = ref(1);
const onClickLeft = () => {
    router.go(-1);
}
const onClickRight = () => {
    
}
const showSlide = (value:boolean) => {
    show.value = value;
}
const selectHelp = (item:any) => {

}
const changeTap = (id:number) => {
    activeTap.value = id;
}
const selectMainActive = () => {
    mainActive.value = !mainActive.value;
}
const helpButtons = ref ([
    {
        title:"即开彩",
        buttonList: [
            {
                id: 1,
                title:'竞速快三'
            },
            {
                id: 2,
                title:'竞速PK10'
            },
            {
                id: 3,
                title:'竞速时时彩'
            },
            {
                id: 4,
                title:'竞速11选5'
            }
        ]
    },
    {
        title:"PK10",
        buttonList: [
            {
                id: 5,
                title:'官方飞艇'
            },
            {
                id: 6,
                title:'竞速PK10'
            },
            {
                id: 7,
                title:'极速赛车'
            },
            {
                id: 8,
                title:'极速飞艇'
            },
            {
                id: 9,
                title:'幸运飞艇'
            },
            {
                id: 10,
                title:'马耳他飞艇'
            },
            {
                id: 11,
                title:'北京PK10'
            }
        ]
    },
    {
        title:"时时彩",
        buttonList: [
            {
                id: 12,
                title:'竞速时时彩'
            },
            {
                id: 13,
                title:'极速时时彩'
            },
            {
                id: 14,
                title:'澳门时时彩'
            },
            {
                id: 15,
                title:'幸运分分彩'
            },
            {
                id: 16,
                title:'幸运5分彩'
            },
            {
                id: 17,
                title:'腾讯分分彩'
            },
            {
                id: 18,
                title:'QQ分分彩'
            },
            {
                id: 19,
                title:'河内5分彩'
            },
            {
                id: 20,
                title:'河内1分彩'
            },
            {
                id: 21,
                title:'香港时时彩'
            },
            {
                id: 22,
                title:'澳洲幸运彩'
            }
        ]
    },
    {
        title:"六合彩",
        buttonList: [
            {
                id: 23,
                title:'极速六合彩'
            },
            {
                id: 24,
                title:'香港六合彩'
            },
            {
                id: 25,
                title:'澳门六合彩'
            },
            {
                id: 26,
                title:'六合5分彩'
            }
        ]
    },
    {
        title:"11选5",
        buttonList: [
            {
                id: 27,
                title:'竞速11选5'
            },
            {
                id: 28,
                title:'极速11选5'
            },
            {
                id: 29,
                title:'幸运11选5'
            }
        ]
    },
    {
        title:"快三",
        buttonList: [
            {
                id: 30,
                title:'竞速快三'
            },
            {
                id: 31,
                title:'极速快三'
            },
            {
                id: 32,
                title:'幸运快三'
            },
            {
                id: 33,
                title:'好运快三'
            }
        ]
    }
])
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
const parentButtonActive = ref(0);
const subButtonActive = ref(0);
const doubleSideList = ref([
{
        id: 1,
        name: '和值大小单双',
        subButtons: [
            {
                subId: 1,
                name: '和值大小单双'
            }
        ]
    },
    {
        id: 2,
        name: '和值',
        subButtons: [
            {
                subId: 2,
                name: '和值'
            }
        ]
    },
    {
        id: 3,
        name: '三同号',
        subButtons: [
            {
                subId: 3,
                name: '三同号'
            }
        ]
    },
    {
        id: 4,
        name: '三不同号',
        subButtons: [
            {
                subId: 4,
                name: '三不同号单选'
            },
            {
                subId: 5,
                name: '三不同号复选'
            },
            {
                subId: 6,
                name: '三连号'
            },
            {
                subId: 7,
                name: '半顺'
            },
            {
                subId: 8,
                name: '杂六'
            }
        ]
    },
    {
        id: 5,
        name: '二同号',
        subButtons: [
            {
                subId: 9,
                name: '二同号单选单式'
            },
            {
                subId: 10,
                name: '二同号单选复式'
            },
            {
                subId: 11,
                name: '二同号复选'
            }
        ]
    },
    {
        id: 6,
        name: '二不同号',
        subButtons: [
            {
                subId: 12,
                name: '二不同号复选'
            },
            {
                subId: 13,
                name: '二不同号单选'
            }
        ]
    },
    {
        id: 7,
        name: '猜一个号',
        subButtons: [
            {
                subId: 14,
                name: '猜一个号'
            }
        ]
    }
]);
const parentButtonList = ref([
    {
        id: 1,
        name: '和值大小单双',
        subButtons: [
            {
                subId: 1,
                name: '和值大小单双'
            }
        ]
    },
    {
        id: 2,
        name: '和值',
        subButtons: [
            {
                subId: 2,
                name: '和值'
            }
        ]
    },
    {
        id: 3,
        name: '三同号',
        subButtons: [
            {
                subId: 3,
                name: '三同号'
            }
        ]
    },
    {
        id: 4,
        name: '三不同号',
        subButtons: [
            {
                subId: 4,
                name: '三不同号单选'
            },
            {
                subId: 5,
                name: '三不同号复选'
            },
            {
                subId: 6,
                name: '三连号'
            },
            {
                subId: 7,
                name: '半顺'
            },
            {
                subId: 8,
                name: '杂六'
            }
        ]
    },
    {
        id: 5,
        name: '二同号',
        subButtons: [
            {
                subId: 9,
                name: '二同号单选单式'
            },
            {
                subId: 10,
                name: '二同号单选复式'
            },
            {
                subId: 11,
                name: '二同号复选'
            }
        ]
    },
    {
        id: 6,
        name: '二不同号',
        subButtons: [
            {
                subId: 12,
                name: '二不同号复选'
            },
            {
                subId: 13,
                name: '二不同号单选'
            }
        ]
    },
    {
        id: 7,
        name: '猜一个号',
        subButtons: [
            {
                subId: 14,
                name: '猜一个号'
            }
        ]
    }
]);
const doubleTrendList = ref([
    {
        id: 1,
        name: '开奖号码',
       
    },
    {
        id: 2,
        name: '号码分布',
       
    },
    {
        id: 3,
        name: '和值形态',
      
    },
    {
        id: 4,
        name: '形态',
       
    },
    {
        id: 5,
        name: '鱼虾蟹',
    }
   
]);
const parentTrendButtonList = ref([
{
        id: 1,
        name: '开奖号码',
       
    },
    {
        id: 2,
        name: '号码分布',
       
    },
    {
        id: 3,
        name: '和值形态',
      
    },
    {
        id: 4,
        name: '形态',
       
    },
    {
        id: 5,
        name: '鱼虾蟹',
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
    const selectedObject = doubleTrendList.value.map((obj, index) => {
        if (obj.id === id) {
            tempIndex = index;
            return obj;
        }
    });

    const tempList = doubleTrendList.value;
    const temp = tempList[0];

    tempList[0] = tempList[tempIndex];
    tempList[tempIndex] = temp;
    doubleTrendList.value = tempList;
}
</script>

<style>
.van-collapse-item__title{
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 152px;
    padding-right: 150px;
    font-size: 11px;
}
</style>