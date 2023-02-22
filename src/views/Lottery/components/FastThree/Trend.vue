<template>
    <div class="relative w-screen mt-[16px]">
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
        <winning-numbers v-if="trendButtonActive === 1"/>
        <number-distribution v-if="trendButtonActive === 2"/>
        <and-value-form v-if="trendButtonActive === 3"/>
        <value-form v-if="trendButtonActive === 4" />
        <fish-shrimp-crab  v-if="trendButtonActive === 5" />

    </div>
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue';
import WinningNumbers from './Trend/WinningNumbers.vue';
import NumberDistribution from './Trend/NumberDistribution.vue';
import AndValueForm from './Trend/AndValueForm.vue';
import ValueForm from './Trend/ValueForm.vue';
import FishShrimpCrab from './Trend/FishShrimpCrab.vue';
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

</script>

<style></style>
