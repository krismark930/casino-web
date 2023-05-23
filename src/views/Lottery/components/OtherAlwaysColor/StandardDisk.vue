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
    <!-- 五星 -->
    <div v-if="parentButtonActive === 1">
        <!-- 五星直选复式 -->
        <circle-item-with-title v-if="subButtonActive == 1" :data="fiveStarDuplexData" :has-location="false"/>
        <!-- 五星直选单式 -->
        <direct-menu v-if="subButtonActive == 2"  :has-location="false" :button-list="buttonList"/>
        <!-- 五星直选组合 -->
        <circle-item-with-title v-if="subButtonActive == 3" :data="fiveStarSelectionData" :has-location="false"/>
        <!-- 五星组选120 -->
        <circle-item  v-if="subButtonActive == 4" :data="fiveStar120" :has-location="false"/>
        <!-- 五星组选60 -->
        <circle-item-with-title v-if="subButtonActive == 5" :data="fiveStar60" :has-location="false"/>
        <!-- 五星组选30 -->
        <circle-item-with-title v-if="subButtonActive == 6" :data="fiveStar30" :has-location="false"/>
        <!-- 五星组选20 -->
        <circle-item-with-title v-if="subButtonActive == 7" :data="fiveStar20" :has-location="false"/>
        <!-- 五星组选10 -->
        <circle-item-with-title v-if="subButtonActive == 8" :data="fiveStar10" :has-location="false"/>
        <!-- 五星组选5 -->
        <circle-item-with-title v-if="subButtonActive == 9" :data="fiveStar5" :has-location="false"/>
    </div>
    <!-- 四星 -->
    <div v-if="parentButtonActive === 2">
        <!-- 前四直选复式 -->
        <circle-item-with-title v-if="subButtonActive == 1" :data="firstFourDuplex" :has-location="false"/>
        <!-- 前四直选单式 -->
        <direct-menu v-if="subButtonActive == 2"  :has-location="false" :button-list="buttonList"/>
        <!-- 前四直选组合 -->
        <circle-item-with-title v-if="subButtonActive == 3" :data="firstFourDuplex" :has-location="false"/>
        <!-- 前四组选24 -->
        <circle-item  v-if="subButtonActive == 4" :data="afterTwoSpanData" :has-location="false"/>
        <!-- 前四组选12 -->
        <circle-item-with-title v-if="subButtonActive == 5" :data="fiveStar60" :has-location="false"/>
        <!-- 前四组选6 -->
        <circle-item  v-if="subButtonActive == 6" :data="afterTwoSpanData" :has-location="false"/>
        <!-- 前四组选4 -->
        <circle-item-with-title  v-if="subButtonActive == 7" :data="fiveStar60" :has-location="false"/>
        <!-- 后四直选复式 -->
        <circle-item-with-title v-if="subButtonActive == 8" :data="fiveStarSelectionData" :has-location="false"/>
        <!-- 后四直选单式 -->
        <direct-menu v-if="subButtonActive == 9"   :has-location="false" :button-list="buttonList"/>
        <!-- 后四直选组合 -->
        <circle-item-with-title v-if="subButtonActive == 10" :data="fiveStarSelectionData" :has-location="false"/>
        <!-- 后四组合24 -->
        <circle-item  v-if="subButtonActive == 11" :data="afterTwoSpanData" :has-location="false"/>
        <!-- 后四组合12 -->
        <circle-item-with-title  v-if="subButtonActive == 12" :data="fiveStar60" :has-location="false"/>
        <!-- 后四组合6 -->
        <circle-item  v-if="subButtonActive == 13" :data="afterTwoSpanData" :has-location="false"/>
        <!-- 后四组合4 -->
        <circle-item-with-title  v-if="subButtonActive == 14" :data="fiveStar60" :has-location="false"/>
    </div>
    <!-- 前三 -->
    <div v-if="parentButtonActive === 3">
        <!-- 前三直选复式 -->
        <circle-item-with-title v-if="subButtonActive == 1" :data="firstThreeElectionData" :has-location="false"/>
        <!-- 前三直选单式 -->
        <direct-menu v-if="subButtonActive == 2" :has-location="false" :button-list="buttonList"/>
        <!-- 前三直选组合 direct selection combinations -->
        <circle-item-with-title v-if="subButtonActive == 3" :data="firstThreeCombinationsData" :has-location="false"/>
        <!-- 前三直选和值 direct selections sum -->
        <circle-item  v-if="subButtonActive == 4" :data="firstThreeSumData" :has-location="false"/>
        <!-- 前三直选跨度 direct election spans -->
        <circle-item  v-if="subButtonActive == 5" :data="firstThreeSpanData" :has-location="false"/>
        <!-- 前三组选三 groups choose three -->
        <circle-item  v-if="subButtonActive == 6" :data="firstThreeChooseThreeData" :has-location="false"/>
        <!-- 前三组选六 groups choose six -->
        <circle-item  v-if="subButtonActive == 7" :data="firstThreeChooseSixData" :has-location="false"/>
        <!-- 前三混合组选 top three mix -->
        <direct-menu v-if="subButtonActive == 8"  :has-location="false" :button-list="buttonList" />
        <!-- 前三组选和值  groups of options and values -->
        <circle-item v-if="subButtonActive == 9"  :data="firstThreeOptionsData" :has-location="false"/>
        <!-- 前三组三单式 sets of triple singles -->
        <direct-menu v-if="subButtonActive == 10"   :has-location="false" :button-list="buttonList"/>
        <!-- 前三组六单式  groups of six singles -->
        <direct-menu v-if="subButtonActive == 11"  :has-location="false" :button-list="buttonList" />
        <!-- 前三组选包胆 groups choose to pack gallbladder -->
        <circle-item v-if="subButtonActive == 12" :data="firstThreeGallbladderData" :has-location="false"/>
        <!-- 前三和值尾数 sum value mantissa -->
        <circle-item v-if="subButtonActive == 13" :data="firstThreeMantissaData" :has-location="false"/>
    </div>
    <!-- 中三 -->
    <div v-if="parentButtonActive === 4">
        <!-- 中三直选复式 -->
        <circle-item-with-title v-if="subButtonActive == 1" :data="firstFourDuplex" :has-location="false"/>
        <!-- 中三直选单式 -->
        <direct-menu v-if="subButtonActive == 2"   :has-location="false" :button-list="buttonList"/>
        <!-- 中三直选组合 -->
        <circle-item-with-title v-if="subButtonActive == 3" :data="firstFourDuplex" :has-location="false"/>
        <!-- 中三直选和值 -->
        <circle-item  v-if="subButtonActive == 4" :data="firstThreeSumData" :has-location="false"/>
        <!-- 中三直选跨度 -->
        <circle-item  v-if="subButtonActive == 5" :data="afterTwoSpanData" :has-location="false"/>
        <!-- 中三组选三 -->
        <circle-item  v-if="subButtonActive == 6" :data="afterTwoSpanData" :has-location="false"/>
        <!-- 中三组选六 -->
        <circle-item  v-if="subButtonActive == 7" :data="afterTwoSpanData" :has-location="false"/>
        <!-- 中三混合组选 -->
        <direct-menu v-if="subButtonActive == 8"   :has-location="false" :button-list="buttonList"/>
        <!-- 中三组选和值 -->
        <circle-item  v-if="subButtonActive == 9" :data="firstThreeSumData" :has-location="false"/>
        <!-- 中三组三单式 -->
        <direct-menu v-if="subButtonActive == 10"  :has-location="false" :button-list="buttonList" />
        <!-- 中三组六单式 -->
        <direct-menu v-if="subButtonActive == 11"   :has-location="false" :button-list="buttonList"/>
        <!-- 中三组选包胆 -->
        <circle-item  v-if="subButtonActive == 12" :data="afterTwoSpanData" :has-location="false"/>
        <!-- 中三和值尾数 -->
        <circle-item  v-if="subButtonActive == 13" :data="afterTwoSpanData" :has-location="false"/>
    </div>
    <!-- 后三 -->
    <div v-if="parentButtonActive === 5">
        <direct-selection-duplex v-if="subButtonActive === 1" />
        <direct-options v-if="subButtonActive === 2" />
        <direct-selection-combinations v-if="subButtonActive === 3" />
        <direct-selections-sum v-if="subButtonActive === 4"/>
        <direct-election-spans v-if="subButtonActive === 5"/>
        <choose-groups v-if="subButtonActive === 6"/>
        <groups-choose-six v-if="subButtonActive === 7" />
        <mixed-group-selection v-if="subButtonActive === 8" />
        <groups-options-and-values v-if="subButtonActive === 9" />
        <groups-triple-singles v-if="subButtonActive === 10" />
        <groups-six-singles v-if="subButtonActive === 11"/>
        <groups-choose-pack-gallbladder v-if="subButtonActive === 12"/>
        <sum-value-mantissa v-if="subButtonActive === 13"/>
    </div>
    <!-- 前二 -->
    <div v-if="parentButtonActive === 6">
        <first-two-direct-elections v-if="subButtonActive === 1"/>
        <straight-menus v-if="subButtonActive === 2"/>
        <first-two-direct-options-and-values v-if="subButtonActive === 3"/>
        <first-two-direct-election-spans v-if="subButtonActive === 4"/>
        <first-two-groups-choose-multiple v-if="subButtonActive === 5"/>
        <first-two-groups-menus v-if="subButtonActive === 6"/>
        <first-two-groups-options-and-value v-if="subButtonActive === 7"/>
        <first-two-groups-choose-pack-gallbladder v-if="subButtonActive === 8"/>
    </div>
    <!-- 后二 -->
    <div v-if="parentButtonActive === 7">
        <circle-item-with-title v-if="subButtonActive == 1" :data="afterTwoDublexData" :has-location="false"/>
        <direct-menu v-if="subButtonActive == 2" :has-location="false" :button-list="buttonList"/>
        <circle-item  v-if="subButtonActive == 3" :data="afterTwoCombinationData" :has-location="false"/>
        <circle-item  v-if="subButtonActive == 4" :data="afterTwoSpanData" :has-location="false"/>
        <circle-item  v-if="subButtonActive == 5" :data="afterTwoMultipleData" :has-location="false"/>
        <direct-menu v-if="subButtonActive == 6"   :has-location="false" :button-list="buttonList"/>
        <circle-item v-if="subButtonActive == 7"  :data="afterTwoOptionsData" :has-location="false"/>
        <circle-item v-if="subButtonActive == 8" :data="afterTwoGallbladderData" :has-location="false"/>
    </div>
    <!-- 定位胆 -->
    <div v-if="parentButtonActive === 8">
        <circle-item-with-title :data="positionGallData" :has-location="false"/>
    </div>
    <!-- 不定胆 -->
    <div v-if="parentButtonActive === 9">
        <circle-item  :data="afterTwoSpanData" :has-location="false"/>
    </div>
    <!-- 大小单双 -->
    <div v-if="parentButtonActive === 10">
        <single-first-two v-if="subButtonActive == 1"/>
        <single-first-three v-if="subButtonActive == 2"/>
        <single-last-two v-if="subButtonActive == 3"/>
        <single-latter-three v-if="subButtonActive == 4"/>
        <single-five-star v-if="subButtonActive == 5"/>
        <single-three-star v-if="subButtonActive == 6"/>
    </div>
    <!-- 趣味 -->
    <div v-if="parentButtonActive === 11">
        <!-- 一帆风顺 -->
        <circle-item  v-if="subButtonActive == 1" :data="afterTwoSpanData" :has-location="false"/>
        <!-- 好事成双 -->
        <circle-item  v-if="subButtonActive == 2" :data="afterTwoSpanData" :has-location="false"/>
        <!-- 三星报喜 -->
        <circle-item  v-if="subButtonActive == 3" :data="afterTwoSpanData" :has-location="false"/>
        <!-- 四季发财 -->
        <circle-item  v-if="subButtonActive == 4" :data="afterTwoSpanData" :has-location="false"/>
    </div>
    <!-- 任选二 -->
    <div v-if="parentButtonActive === 12">
        <!-- 任二直选复式 direct election duplex -->
        <circle-item-with-title v-if="subButtonActive == 1" :data="fiveStarDuplexData" :has-location="false"/>
        <!-- 任二直选单式 direct selection -->
        <direct-menu v-if="subButtonActive == 2" :hasLocation="true" :button-list="buttonList"/>
        <!-- 任二直选和值 direct selection sums -->
        <circle-item  v-if="subButtonActive == 3" :data="afterTwoCombinationData" :hasLocation="true"/>
        <!-- 任二组选复式 groups choose compound -->
        <circle-item  v-if="subButtonActive == 4" :data="afterTwoSpanData" :hasLocation="true"/>
        <!-- 任二组选单式 group menu -->
        <direct-menu v-if="subButtonActive == 5" :hasLocation="true" :button-list="buttonList"/>
        <!-- 任二组选和值 group options and values -->
        <circle-item  v-if="subButtonActive == 6" :data="afterTwoCombinationData" :hasLocation="true"/>
        <!-- 任二组选包胆 groups choose bile -->
        <circle-item  v-if="subButtonActive == 7" :data="afterTwoSpanData" :hasLocation="true"/>
    </div>
    <!-- 任选三  -->
    <div v-if="parentButtonActive === 13">
        <!-- 任三直选复式 direct election duplex -->
        <circle-item-with-title v-if="subButtonActive == 1" :data="fiveStarDuplexData" :has-location="false"/>
        <!-- 任三直选单式 direct selection -->
        <direct-menu v-if="subButtonActive == 2" :hasLocation="true" :button-list="buttonList"/>
        <!-- 任三直选和值 direct selection sums -->
        <circle-item  v-if="subButtonActive == 3" :data="firstThreeSumData" :hasLocation="true"/>
        <!-- 任三组选复式 groups choose compound -->
        <circle-item  v-if="subButtonActive == 4" :data="afterTwoSpanData" :hasLocation="true"/>
        <!-- 任三组选单式 group menu -->
        <direct-menu v-if="subButtonActive == 5" :hasLocation="true" :button-list="buttonList"/>
        <!-- 任三组选和值 group options and values -->
        <circle-item  v-if="subButtonActive == 6" :data="firstThreeSumData" :hasLocation="true"/>
        <!-- 任三组选包胆 groups choose bile -->
        <circle-item  v-if="subButtonActive == 7" :data="afterTwoSpanData" :hasLocation="true"/>
    </div>
    <!-- 任选四 -->
    <div v-if="parentButtonActive === 14">
        <!-- 任四直选复式 -->
        <circle-item-with-title v-if="subButtonActive == 1" :data="fiveStarDuplexData" :has-location="false"/>
        <!-- 任四直选单式 -->
        <direct-menu v-if="subButtonActive == 2" :hasLocation="true" :button-list="buttonList"/>
        <!-- 任四组选24 -->
        <circle-item  v-if="subButtonActive == 3" :data="afterTwoSpanData" :hasLocation="true"/>
        <!-- 任选组选12 -->
        <circle-item-with-title v-if="subButtonActive == 4" :data="fiveStar60" :hasLocation="true"/>
        <!-- 任四组选6 -->
        <circle-item  v-if="subButtonActive == 5" :data="afterTwoSpanData" :hasLocation="true"/>
        <!-- 任四组选4 -->
        <circle-item-with-title v-if="subButtonActive == 6" :data="fiveStar60" :hasLocation="true"/>
    </div>
    <!-- 其它玩法 -->
    <div v-if="parentButtonActive === 15">
        <!-- 龙虎 -->
        <squre-items-with-title v-if="subButtonActive == 1" :col-number="3" :data="drgonTiger" :has-location="false" :is-p-k10="false"/>
        <!-- 梭哈 -->
        <squre-items v-if="subButtonActive == 2" :data="studData" :has-location="false"/>
        <!-- 炸金花 -->
        <squre-items-with-top-title v-if="subButtonActive == 3" :data="goldenFlowerData" :has-location="false"/>
        <!-- 牛牛 -->
        <squre-items v-if="subButtonActive == 4" :data="niuNiuData" :has-location="false"/>
    </div>
</template>

<script setup lang="ts">
//后三
import {toRefs, ref } from 'vue';
import DirectSelectionDuplex from './StandardDisk/LatterThree/DirectSelectionDuplex.vue';
import DirectSelectionCombinations from './StandardDisk/LatterThree/DirectSelectionCombinations.vue';
import DirectOptions from './StandardDisk/LatterThree/DirectOptions.vue';
import DirectElectionSpans from './StandardDisk/LatterThree/DirectElectionSpans.vue';
import DirectSelectionsSum from './StandardDisk/LatterThree/DirectSelectionsSum.vue';
import GroupsChoosePackGallbladder from './StandardDisk/LatterThree/GroupsChoosePackGallbladder.vue';
import GroupsChooseSix from './StandardDisk/LatterThree/GroupsChooseSix.vue';
import GroupsOptionsAndValues from './StandardDisk/LatterThree/GroupsOptionsAndValues.vue';
import GroupsTripleSingles from './StandardDisk/LatterThree/GroupsTripleSingles.vue';
import GroupsSixSingles from './StandardDisk/LatterThree/GroupsSixSingles.vue';
import MixedGroupSelection from './StandardDisk/LatterThree/MixedGroupSelection.vue';
import ChooseGroups from './StandardDisk/LatterThree/ChooseGroups.vue';
import SumValueMantissa from './StandardDisk/LatterThree/SumValueMantissa.vue';

//前二 first two
import StraightMenus from './StandardDisk/FirstTwo/StraightMenus.vue';
import FirstTwoDirectElections from './StandardDisk/FirstTwo/DirectElections.vue';
import FirstTwoDirectElectionSpans from './StandardDisk/FirstTwo/DirectElectionSpans.vue';
import FirstTwoDirectOptionsAndValues from './StandardDisk/FirstTwo/DirectOptionsAndValues.vue';
import FirstTwoGroupsChooseMultiple from './StandardDisk/FirstTwo/GroupsChooseMultiple.vue';
import FirstTwoGroupsChoosePackGallbladder from './StandardDisk/FirstTwo/GroupsChoosePackGallbladder.vue';
import FirstTwoGroupsMenus from './StandardDisk/FirstTwo/GroupsMenus.vue';
import FirstTwoGroupsOptionsAndValue from './StandardDisk/FirstTwo/GroupsOptionsAndValue.vue';

//大小单双 Single and double size
import SingleFirstTwo from './StandardDisk/SingleAndDoubleSize/FirstTwo.vue';
import SingleFirstThree from './StandardDisk/SingleAndDoubleSize/FirstThree.vue';
import SingleFiveStar from './StandardDisk/SingleAndDoubleSize/FiveStar.vue';
import SingleLastTwo from './StandardDisk/SingleAndDoubleSize/LastTwo.vue';
import SingleLatterThree from './StandardDisk/SingleAndDoubleSize/LatterThree.vue';
import SingleThreeStar from './StandardDisk/SingleAndDoubleSize/ThreeStar.vue';

//后二 after two
import CircleItem from '../CircleItems.vue';
import CircleItemWithTitle from '../CircleItemsWithTitle.vue';
import DirectMenu from '../DirectMenu.vue';
import SqureItemsWithTitle from '../SqureItemsWithTitle.vue';
import SqureItems from '../SqureItems.vue';
import SqureItemsWithTopTitle from '../SqureItemsWithTopTitle.vue';
const state = defineProps<{doubleSideList:Array<any>, parentButtonActive:number, subButtonActive:number}>();
const { doubleSideList, parentButtonActive,subButtonActive } = toRefs(state);
console.log(doubleSideList);
const emit = defineEmits(['showSlide'])
const showSlide = (value: boolean) => {
    emit('showSlide', value);
}

const selectButton = () => {
    showSlide(true);
}
const buttonList = ref([
    {
        id: 1,
        title: '万位'
    },
    {
        id: 2,
        title: '千位'
    },
    {
        id: 3,
        title: '百位'
    },
    {
        id: 4,
        title: '十位'
    },
    {
        id: 5,
        title: '个位'
    },
])

//后二直选复式
const afterTwoDublexData = ref([
    {
        title: '十位',
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
        title: '个位',
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
//后二直选组合
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
//后二直选跨度
const afterTwoSpanData = ref([
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
]);
//后二组选复式
const afterTwoMultipleData = ref([
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
]);
//后二组选和值
const afterTwoOptionsData = ref([
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
    }
]);
//后二组选包胆
const afterTwoGallbladderData = ref([
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
]);
//前三直选复式
const firstThreeElectionData = ref([
    {
        title: '万位',
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
        title: '千位',
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
        title: '百位',
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
//前三直选组合
const firstThreeCombinationsData = ref([
    {
        title: '万位',
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
        title: '千位',
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
        title: '百位',
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
//前三直选和值
const firstThreeSumData = ref([
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
    },
    {
        id: 19,
        value: 19
    },
    {
        id: 20,
        value: 20
    },
    {
        id: 21,
        value: 21
    },
    {
        id: 22,
        value: 22
    },
    {
        id: 23,
        value: 23
    },
    {
        id: 24,
        value: 24
    },
    {
        id: 25,
        value: 25
    },
    {
        id: 26,
        value: 26
    },
    {
        id: 27,
        value: 27
    }
]);
//前三直选跨度
const firstThreeSpanData = ref([
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
]);
//前三组选三
const firstThreeChooseThreeData = ref([
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
]);
//前三组选六
const firstThreeChooseSixData = ref([
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
]);
//前三组选和值
const firstThreeOptionsData = ref([
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
    },
    {
        id: 19,
        value: 19
    },
    {
        id: 20,
        value: 20
    },
    {
        id: 21,
        value: 21
    },
    {
        id: 22,
        value: 22
    },
    {
        id: 23,
        value: 23
    },
    {
        id: 24,
        value: 24
    },
    {
        id: 25,
        value: 25
    },
    {
        id: 26,
        value: 26
    },
    {
        id: 27,
        value: 27
    }
]);
//前三组选包胆
const firstThreeGallbladderData = ref([
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
]);
//前三和值尾数
const firstThreeMantissaData = ref([
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
]);
//五星直选复式
const fiveStarDuplexData = ref([
    {
        title: '万位',
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
        title: '千位',
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
        title: '百位',
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
        title: '十位',
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
        title: '个位',
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
//五星直选单式
const fiveStarSelectionData = ref([
    {
        title: '万位',
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
        title: '千位',
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
        title: '百位',
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
        title: '十位',
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
        title: '个位',
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
//五星组选120
const fiveStar120 = ref([
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
]);
//五星组选60 
const fiveStar60 = ref([
    {
        title: '二重号',
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
        title: '单号',
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
//五星组选30 
const fiveStar30 = ref([
    {
        title: '二重号',
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
        title: '单号',
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
//五星组选20 
const fiveStar20 = ref([
    {
        title: '二重号',
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
        title: '单号',
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
//五星组选10 
const fiveStar10 = ref([
    {
        title: '二重号',
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
        title: '单号',
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
//五星组选5
const fiveStar5 = ref([
    {
        title: '二重号',
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
        title: '单号',
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

// 前四直选复式
const firstFourDuplex = ref([
    {
        title: '万位',
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
        title: '千位',
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
        title: '百位',
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
        title: '十位',
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
// 定位胆
const positionGallData = ref([
    {
        title: '万位',
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
        title: '千位',
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
        title: '百位',
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
        title: '十位',
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
        title: '个位',
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
        title: '通选',
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
//龙虎
const drgonTiger = ref([
    {
        title:"万千",
        buttonList: [
            {
                id: 1,
                title: "龙", 
                value: "0.0021"
            },
            {
                id: 2,
                title: "虎", 
                value: "0.0021"
            },
            {
                id: 3,
                title: "和", 
                value: "0.0021"
            }
        ]
    },
    {
        title:"万百",
        buttonList: [
            {
                id: 1,
                title: "龙", 
                value: "0.0021"
            },
            {
                id: 2,
                title: "虎", 
                value: "0.0021"
            },
            {
                id: 3,
                title: "和", 
                value: "0.0021"
            }
        ]
    },
    {
        title:"万十",
        buttonList: [
            {
                id: 1,
                title: "龙", 
                value: "0.0021"
            },
            {
                id: 2,
                title: "虎", 
                value: "0.0021"
            },
            {
                id: 3,
                title: "和", 
                value: "0.0021"
            }
        ]
    },
    {
        title:"万个",
        buttonList: [
            {
                id: 1,
                title: "龙", 
                value: "0.0021"
            },
            {
                id: 2,
                title: "虎", 
                value: "0.0021"
            },
            {
                id: 3,
                title: "和", 
                value: "0.0021"
            }
        ]
    },
    {
        title:"千百",
        buttonList: [
            {
                id: 1,
                title: "龙", 
                value: "0.0021"
            },
            {
                id: 2,
                title: "虎", 
                value: "0.0021"
            },
            {
                id: 3,
                title: "和", 
                value: "0.0021"
            }
        ]
    },
    {
        title:"千十",
        buttonList: [
            {
                id: 1,
                title: "龙", 
                value: "0.0021"
            },
            {
                id: 2,
                title: "虎", 
                value: "0.0021"
            },
            {
                id: 3,
                title: "和", 
                value: "0.0021"
            }
        ]
    },
    {
        title:"千个",
        buttonList: [
            {
                id: 1,
                title: "龙", 
                value: "0.0021"
            },
            {
                id: 2,
                title: "虎", 
                value: "0.0021"
            },
            {
                id: 3,
                title: "和", 
                value: "0.0021"
            }
        ]
    },
    {
        title:"百十",
        buttonList: [
            {
                id: 1,
                title: "龙", 
                value: "0.0021"
            },
            {
                id: 2,
                title: "虎", 
                value: "0.0021"
            },
            {
                id: 3,
                title: "和", 
                value: "0.0021"
            }
        ]
    },
    {
        title:"百个",
        buttonList: [
            {
                id: 1,
                title: "龙", 
                value: "0.0021"
            },
            {
                id: 2,
                title: "虎", 
                value: "0.0021"
            },
            {
                id: 3,
                title: "和", 
                value: "0.0021"
            }
        ]
    },
    {
        title:"十个",
        buttonList: [
            {
                id: 1,
                title: "龙", 
                value: "0.0021"
            },
            {
                id: 2,
                title: "虎", 
                value: "0.0021"
            },
            {
                id: 3,
                title: "和", 
                value: "0.0021"
            }
        ]
    }
])
const studData = ref([
    {
        id: 1,
        title: "四条", 
        value: "0.0021"
    },
    {
        id: 2,
        title: "葫芦", 
        value: "0.0021"
    },
    {
        id: 3,
        title: "顺子", 
        value: "0.0021"
    },
    {
        id: 4,
        title: "三条", 
        value: "0.0021"
    },
    {
        id: 5,
        title: "两对", 
        value: "0.0021"
    },
    {
        id: 6,
        title: "一对", 
        value: "0.0021"
    },
    {
        id: 7,
        title: "单牌", 
        value: "0.0021"
    }
])
const goldenFlowerData = ref([
        {
        title: "前三",
        buttonList:[
            {
                id: 1,
                value: 0.099,
                title: "豹子",
            },
            {
                id: 2,
                value: 1.98,
                title: "顺子",
            },
            {
                id: 3,
                value: 1.98,
                title: "对子",
            },
            {
                id: 4,
                value: 1.98,
                title: "半顺",
            },
            {
                id: 5,
                value: 1.98,
                title: "杂六",
            }
        ]},
        {
        title: "中三",
        buttonList:[
            {
                id: 1,
                value: 1.98,
                title: "豹子",
            },
            {
                id: 2,
                value: 1.98,
                title: "顺子",
            },
            {
                id: 3,
                value: 1.98,
                title: "对子",
            },
            {
                id: 4,
                value: 1.98,
                title: "半顺 ",
            },
            {
                id: 5,
                value: 1.98,
                title: "杂六",
            }
        ]},
        {
        title: "后三",
        buttonList:[
        {
                id: 1,
                value: 1.98,
                title: "豹子",
            },
            {
                id: 2,
                value: 1.98,
                title: "顺子",
            },
            {
                id: 3,
                value: 1.98,
                title: "对子",
            },
            {
                id: 4,
                value: 1.98,
                title: "半顺 ",
            },
            {
                id: 5,
                value: 1.98,
                title: "杂六",
            }
        ]}
])
const niuNiuData = ref([
    {
        id: 1,
        title: "牛大", 
        value: "0.0021"
    },
    {
        id: 2,
        title: "牛小", 
        value: "0.0021"
    },
    {
        id: 3,
        title: "牛单", 
        value: "0.0021"
    },
    {
        id: 4,
        title: "牛双", 
        value: "0.0021"
    },
    {
        id: 5,
        title: "牛一", 
        value: "0.0021"
    },
    {
        id: 6,
        title: "牛二", 
        value: "0.0021"
    },
    {
        id: 7,
        title: "牛三", 
        value: "0.0021"
    },
    {
        id: 8,
        title: "牛四", 
        value: "0.0021"
    },
    {
        id: 9,
        title: "牛五", 
        value: "0.0021"
    },
    {
        id: 10,
        title: "牛六", 
        value: "0.0021"
    },
    {
        id: 11,
        title: "牛七", 
        value: "0.0021"
    },
    {
        id: 12,
        title: "牛八", 
        value: "0.0021"
    },
    {
        id: 13,
        title: "牛九", 
        value: "0.0021"
    },
    {
        id: 14,
        title: "牛牛", 
        value: "0.0021"
    },
    {
        id: 15,
        title: "牛牛", 
        value: "0.0021"
    }
])

</script>

<style></style>
