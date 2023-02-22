<template>
    <div class="">
        <div class="flex justify-start gap-1 h-[39px] bg-[#e8f6ff] px-2 shadow-md text-[12px] z-10">
            <button :class="[item.id === subActive? 'bg-[#2674ff] text-white':'bg-white text-[#2674ff]']" class="text-white rounded-sm  px-[6px] my-[5px] border-blue-300 border min-w-[60px]" v-for="(item, index) in doubleSideList" :key="index"
            @click="chageSubActive(item.id)">
                {{item.name}}
            </button>
        </div>
        <fast-disk v-if="subActive === 1"/>
        <double-slide v-if="subActive === 2"/>
        <pick-number v-if="subActive === 3"/>
        <front-middle-back-three v-if="subActive === 4"/>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import FastDisk from './DoubleSideDisk/FastDisk.vue';
import DoubleSlide from './DoubleSideDisk/DoubleSlide.vue';
import PickNumber from './DoubleSideDisk/PickNumber.vue';
import FrontMiddleBackThree from './DoubleSideDisk/FrontMiddleBackThree.vue';
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
        name: '前中后三'
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