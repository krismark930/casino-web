<template>
    <div class="">
        <div class="flex justify-between h-[39px] bg-[#e8f6ff] px-2 shadow-md text-[12px] z-10">
            <button :class="[item.id === subActive? 'bg-[#2674ff] text-white':'bg-white text-[#2674ff]']" class="text-white rounded-sm  px-[6px] my-[5px] border-blue-300 border min-w-[60px]" v-for="(item, index) in doubleSideList" :key="index"
            @click="chageSubActive(item.id)">
                {{item.name}}
            </button>
        </div>
        <armed-forces-size v-if="subActive === 1"/>
        <round-dice v-if="subActive === 2"/>
        <points v-if="subActive === 3"/>
        <long-and-short-cards v-if="subActive === 4"/>
        <FishShrimpCrab v-if="subActive === 5"/>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import ArmedForcesSize from './DoubleSideDisk/ArmedForcesSize.vue';
import RoundDice from './DoubleSideDisk/RoundDice.vue';
import Points from './DoubleSideDisk/Points.vue';
import LongAndShortCards from './DoubleSideDisk/LongAndShortCards.vue';
import FishShrimpCrab from './DoubleSideDisk/FishShrimpCrab.vue';
const subActive = ref(1);
const doubleSideList = ref([
    {
        id: 1,
        name: '三军 大小'
    },
    {
        id: 2,
        name: '围骰 全骰'
    },
    {
        id: 3,
        name: '点数'
    },
    {
        id: 4,
        name: '长短牌'
    },
    {
        id: 5,
        name: '鱼虾蟹'
    },
])
const chageSubActive = (id:number) => {
    subActive.value = id;
}

</script>

<style>
.van-popup{
    z-index: 0 !important;
}
.van-overlay{
    z-index: 0 !important;
}
</style>