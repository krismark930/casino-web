<template>
    <div class="relative w-screen mt-[5px]">
        <div>
            <div
                class="flex z-20 h-[37px] bg-[#e8f6ff] px-2 pb-[1.5px] shadow-md text-[12px] overflow-y-hidden gap-[9px]"
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
        <winning-number v-if="trendButtonActive === 1" />
        <trend-line
            v-if="trendButtonActive === 2"
            :data-list="firstBall"
            :header-title="'第一球走势'"
        />
        <trend-line
            v-if="trendButtonActive === 3"
            :data-list="firstBall"
            :header-title="'第二球走势'"
        />
        <trend-line
            v-if="trendButtonActive === 4"
            :data-list="firstBall"
            :header-title="'第三球走势'"
        />
        <trend-line
            v-if="trendButtonActive === 5"
            :data-list="firstBall"
            :header-title="'第四球走势'"
        />
        <trend-line
            v-if="trendButtonActive === 6"
            :data-list="firstBall"
            :header-title="'第五球走势'"
        />
        <first-three v-if="trendButtonActive === 7" />
        <first-three v-if="trendButtonActive === 8" />
        <winning-number v-if="trendButtonActive === 9" />
        <single-and-double v-if="trendButtonActive === 10" />
        <guess-right v-if="trendButtonActive === 11" />
        <order-double v-if="trendButtonActive === 12" />
    </div>
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue';
import WinningNumber from './Trend/WinningNumber.vue';
import FirstThree from './Trend/FirstThree.vue';
import SingleAndDouble from './Trend/SingleAndDouble.vue';
import GuessRight from './Trend/GuessRight.vue';
import OrderDouble from './Trend/OrderDouble.vue';
import TrendLine from '../TrendLine.vue';

// import DragonTiger from './Trend/DragonTiger.vue';
// import AndValue from './Trend/AndValue.vue';
// import NumberDistribution from './Trend/NumberDistribution.vue';
// import AndValueForm from './Trend/AndValueForm.vue';
// import ValueForm from './Trend/ValueForm.vue';
// import FishShrimpCrab from './Trend/FishShrimpCrab.vue';

const state = defineProps<{
    buttonList: Array<any>;
    trendButtonActive: number;
}>();
const { buttonList, trendButtonActive } = toRefs(state);
const emit = defineEmits(['showSlide']);
const showSlide = (value: boolean) => {
    emit('showSlide', value);
};

const selectButton = () => {
    showSlide(true);
};
const firstBall = ref([
    {
        id: 1,
        day: '271002',
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
                value: 3,
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
            },
            {
                value: 1,
                bg: 'transparent'
            }
        ]
    },
    {
        id: 2,
        day: '271001',
        values: [
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
                value: 9,
                bg: '#FF0000'
            }
        ]
    },
    {
        id: 3,
        day: '271000',
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
            },
            {
                value: 1,
                bg: 'transparent'
            }
        ]
    }
]);
</script>

<style></style>
