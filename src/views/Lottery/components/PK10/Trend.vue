<template>
    <div class="relative w-screen mt-[18px]">
        <div>
            <div
                class="flex z-20 h-[37px] bg-[#e8f6ff] px-2 py-[1.5px] shadow-md text-[12px] overflow-y-none  gap-[9px]"
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
                    @click="selectButton(item)"
                >
                    {{ item.name }}
                </button>
            </div>
        </div>
        <winning-number v-if="trendButtonActive === 1"/>
        <single-and-double v-if="trendButtonActive === 2"/>
        <dragon-tiger v-if="trendButtonActive === 3"/>
        <and-value v-if="trendButtonActive === 4"/>
    </div>
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue';
import WinningNumber from './Trend/WinningNumber.vue';
import SingleAndDouble from './Trend/SingleAndDouble.vue';
import DragonTiger from './Trend/DragonTiger.vue';
import AndValue from './Trend/AndValue.vue';
// import NumberDistribution from './Trend/NumberDistribution.vue';
// import AndValueForm from './Trend/AndValueForm.vue';
// import ValueForm from './Trend/ValueForm.vue';
// import FishShrimpCrab from './Trend/FishShrimpCrab.vue';

const state = defineProps<{buttonList:Array<any>, trendButtonActive:number}>();
const { buttonList, trendButtonActive } = toRefs(state);
const emit = defineEmits(['showSlide'])
console.log(trendButtonActive.value+"=============");
const showSlide = (value: boolean) => {
    emit('showSlide', value);
}

const selectButton = (item: any) => {
    showSlide(true)
};

</script>

<style></style>
