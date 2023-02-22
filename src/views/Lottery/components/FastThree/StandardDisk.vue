<template>
    <div class="relative w-screen">
        <div
            class="flex z-20 h-[37px] bg-[#e8f6ff] px-2 shadow-md text-[12px] overflow-y-scroll"
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
                @click="selectButton"
            >
                {{ item.name }}
            </button>
        </div>
        <div
            class="absolute top-0 right-0 flex bg-[#e8f3ff] items-center justify-center px-[12px] h-[39px] pr-[20px] shadow-[-5px_0px_5px_-3px_rgba(0,0,0,0.3)]"
            @click="selectButton"
        >
            <img
                src="@/assets/images/fastthree/icon-7.png"
                class="w-[20px] h-[20px] mr-[5px] mb-[2px]"
            />
            <p class="text-[8px] text-[#2674ff]">全部<br />玩法</p>
        </div>
    </div>
    
    <value-size-single-double v-if="subButtonActive === 1" />
    <and-value v-if="subButtonActive === 2" />
    <three-same-number v-if="subButtonActive === 3"/>
    <three-different-number-radio v-if="subButtonActive === 4"/>
    <three-different-number-check v-if="subButtonActive === 5"/>
    <triple-number v-if="subButtonActive === 6"/>
    <half-straight v-if="subButtonActive === 7"/>
    <miscellaneous-six v-if="subButtonActive === 8"/>
    <two-same-number-single-choice-single-type v-if="subButtonActive === 9"/>
    <two-same-number-single-choice  v-if="subButtonActive === 10"/>
    <two-same-number-multiple-choice v-if="subButtonActive === 11"/>
    <two-different-number-check v-if="subButtonActive === 12"/>
    <two-different-number-radio v-if="subButtonActive === 13"/>
    <guess-number v-if="subButtonActive === 14"/>

</template>

<script setup lang="ts">
import { ref , toRefs} from 'vue';
import GuessNumber from './StandardDisk/GuessNumber.vue';
import AndValue from './StandardDisk/AndValue.vue';
import ValueSizeSingleDouble from './StandardDisk/ValueSizeSingleDouble.vue';
import ThreeSameNumber from './StandardDisk/ThreeSameNumber.vue';
import TwoDifferentNumberRadio from './StandardDisk/TwoDifferentNumberRadio.vue';
import TwoDifferentNumberCheck from './StandardDisk/TwoDifferentNumberCheck.vue';
import ThreeDifferentNumberRadio from './StandardDisk/ThreeDifferentNumberRadio.vue';
import ThreeDifferentNumberCheck from './StandardDisk/ThreeDifferentNumberCheck.vue';
import TripleNumber from './StandardDisk/TripleNumber.vue';
import HalfStraight from './StandardDisk/HalfStraight.vue';
import MiscellaneousSix from './StandardDisk/MiscellaneousSix.vue';
import TwoSameNumberSingleChoiceSingleType from './StandardDisk/TwoSameNumberSingleChoiceSingleType.vue';
import TwoSameNumberSingleChoice from './StandardDisk/TwoSameNumberSingleChoice.vue';
import TwoSameNumberMultipleChoice from './StandardDisk/TwoSameNumberMultipleChoice.vue';
const state = defineProps<{doubleSideList:Array<any>, parentButtonActive:number, subButtonActive:number}>();
const { doubleSideList, parentButtonActive,subButtonActive } = toRefs(state);
const emit = defineEmits(['showSlide'])
const content = ref('')

const showSlide = (value: boolean) => {
    emit('showSlide', value);
}
const subButtonList = ref([] as Array<{ subId: number; name: string }>);
const selectButton = () => {
    showSlide(true);
};


</script>

<style></style>
