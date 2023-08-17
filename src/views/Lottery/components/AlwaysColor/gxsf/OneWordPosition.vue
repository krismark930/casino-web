<template>
    <van-tabs v-model:active="activeName">
        <van-tab title="第一球" name="ball_1">
            <div class="animated fadeInLeft">
                <div class="m-[6px] py-[3px] px-[15px] flex items-center justify-center">
                    <div class="w-full grid grid-cols-3 gap-1">
                        <div v-for="(item, index) in ball_1_list" :key="index">
                            <lotteryAlwaysColorItem :item="item" :disabled="disabled" @changeItem="changeItem"  @betResult="betResult"/>
                        </div>
                    </div>
                </div>
            </div>
        </van-tab>
        <van-tab title="第二球" name="ball_2">
            <div class="animated fadeInLeft">
                <div class="m-[6px] py-[3px] px-[15px] flex items-center justify-center">
                    <div class="w-full grid grid-cols-3 gap-1">
                        <div v-for="(item, index) in ball_2_list" :key="index">
                            <lotteryAlwaysColorItem :item="item" :disabled="disabled" @changeItem="changeItem"  @betResult="betResult"/>
                        </div>
                    </div>
                </div>
            </div>
        </van-tab>
        <van-tab title="第三球" name="ball_3">
            <div class="animated fadeInLeft">
                <div class="m-[6px] py-[3px] px-[15px] flex items-center justify-center">
                    <div class="w-full grid grid-cols-3 gap-1">
                        <div v-for="(item, index) in ball_3_list" :key="index">
                            <lotteryAlwaysColorItem :item="item" :disabled="disabled" @changeItem="changeItem"  @betResult="betResult"/>
                        </div>
                    </div>
                </div>
            </div>
        </van-tab>
        <van-tab title="第四球" name="ball_4">
            <div class="animated fadeInLeft">
                <div class="m-[6px] py-[3px] px-[15px] flex items-center justify-center">
                    <div class="w-full grid grid-cols-3 gap-1">
                        <div v-for="(item, index) in ball_4_list" :key="index">
                            <lotteryAlwaysColorItem :item="item" :disabled="disabled" @changeItem="changeItem"  @betResult="betResult"/>
                        </div>
                    </div>
                </div>
            </div>
        </van-tab>
        <van-tab title="第五球" name="ball_5">
            <div class="animated fadeInLeft">
                <div class="m-[6px] py-[3px] px-[15px] flex items-center justify-center">
                    <div class="w-full grid grid-cols-3 gap-1">
                        <div v-for="(item, index) in ball_5_list" :key="index">
                            <lotteryAlwaysColorItem :item="item" :disabled="disabled" @changeItem="changeItem" @betResult="betResult"/>
                        </div>
                    </div>
                </div>
            </div>
        </van-tab>
    </van-tabs>
    <van-number-keyboard v-model="singleGold" :show="keyboardShow" :maxlength="20" @blur="keyboardShow = false" />
</template>
<script setup lang="ts">
import { ref, computed, onMounted, watch, toRefs, defineEmits } from "vue";
import lotteryAlwaysColorItem from "@/components/global/lotteryAlwaysColorItem.vue";
const props = defineProps<{ lotteryOddsList: any, initialize: boolean, disabled: boolean }>();
const emit = defineEmits<{
    (e: "submitItem1", emitItem: any): void;
}>();
const { lotteryOddsList, initialize, disabled } = toRefs(props);
const activeName = ref("ball_1");
const keyboardShow = ref(false);
const selectedId = ref(0);
const singleGold = ref("");
const selectedCount = ref(0);
const selectedBetAmount = ref(0);
const winAmount = ref(0);
const selectedItemList = ref([]);

const ball_1_list = ref([
    {
        id: 1,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '1',
        name: "1",
        rate: "10.00",
        value: "",
    },
    {
        id: 2,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '2',
        name: "2",
        rate: "10.00",
        value: "",
    },
    {
        id: 3,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '3',
        name: "3",
        rate: "10.00",
        value: "",
    },
    {
        id: 4,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '4',
        name: "4",
        rate: "10.00",
        value: "",
    },
    {
        id: 5,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '5',
        name: "5",
        rate: "10.00",
        value: "",
    },
    {
        id: 6,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '6',
        name: "6",
        rate: "10.00",
        value: "",
    },
    {
        id: 7,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '7',
        name: "7",
        rate: "10.00",
        value: "",
    },
    {
        id: 8,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '8',
        name: "8",
        rate: "10.00",
        value: "",
    },
    {
        id: 9,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '9',
        name: "9",
        rate: "10.00",
        value: "",
    },
    {
        id: 10,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '10',
        name: "10",
        rate: "10.00",
        value: "",
    },
    {
        id: 11,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '11',
        name: "11",
        rate: "10.00",
        value: "",
    },
    {
        id: 12,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '12',
        name: "12",
        rate: "10.00",
        value: "",
    },
    {
        id: 13,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '13',
        name: "13",
        rate: "10.00",
        value: "",
    },
    {
        id: 14,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '14',
        name: "14",
        rate: "10.00",
        value: "",
    },
    {
        id: 15,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '15',
        name: "15",
        rate: "10.00",
        value: "",
    },
    {
        id: 16,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '16',
        name: "16",
        rate: "10.00",
        value: "",
    },
    {
        id: 17,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '17',
        name: "17",
        rate: "10.00",
        value: "",
    },
    {
        id: 18,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '18',
        name: "18",
        rate: "10.00",
        value: "",
    },
    {
        id: 19,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '19',
        name: "19",
        rate: "10.00",
        value: "",
    },
    {
        id: 20,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '20',
        name: "20",
        rate: "10.00",
        value: "",
    },
    {
        id: 21,
        icon: "",
        num: "",
        name: "大",
        rate: "10.00",
        value: "",
    },
    {
        id: 22,
        icon: "",
        num: "",
        name: "小",
        rate: "10.00",
        value: "",
    },
    {
        id: 23,
        icon: "",
        num: "",
        name: "单",
        rate: "10.00",
        value: "",
    },
    {
        id: 24,
        icon: "",
        num: "",
        name: "双",
        rate: "10.00",
        value: "",
    },
]);

const ball_2_list = ref([
    {
        id: 25,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '1',
        name: "1",
        rate: "10.00",
        value: "",
    },
    {
        id: 26,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '2',
        name: "2",
        rate: "10.00",
        value: "",
    },
    {
        id: 27,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '3',
        name: "3",
        rate: "10.00",
        value: "",
    },
    {
        id: 28,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '4',
        name: "4",
        rate: "10.00",
        value: "",
    },
    {
        id: 29,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '5',
        name: "5",
        rate: "10.00",
        value: "",
    },
    {
        id: 30,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '6',
        name: "6",
        rate: "10.00",
        value: "",
    },
    {
        id: 31,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '7',
        name: "7",
        rate: "10.00",
        value: "",
    },
    {
        id: 32,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '8',
        name: "8",
        rate: "10.00",
        value: "",
    },
    {
        id: 33,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '9',
        name: "9",
        rate: "10.00",
        value: "",
    },
    {
        id: 34,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '10',
        name: "10",
        rate: "10.00",
        value: "",
    },
    {
        id: 35,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '11',
        name: "11",
        rate: "10.00",
        value: "",
    },
    {
        id: 36,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '12',
        name: "12",
        rate: "10.00",
        value: "",
    },
    {
        id: 37,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '13',
        name: "13",
        rate: "10.00",
        value: "",
    },
    {
        id: 38,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '14',
        name: "14",
        rate: "10.00",
        value: "",
    },
    {
        id: 39,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '15',
        name: "15",
        rate: "10.00",
        value: "",
    },
    {
        id: 40,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '16',
        name: "16",
        rate: "10.00",
        value: "",
    },
    {
        id: 41,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '17',
        name: "17",
        rate: "10.00",
        value: "",
    },
    {
        id: 42,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '18',
        name: "18",
        rate: "10.00",
        value: "",
    },
    {
        id: 43,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '19',
        name: "19",
        rate: "10.00",
        value: "",
    },
    {
        id: 44,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '20',
        name: "20",
        rate: "10.00",
        value: "",
    },
    {
        id: 45,
        icon: "",
        num: "",
        name: "大",
        rate: "10.00",
        value: "",
    },
    {
        id: 46,
        icon: "",
        num: "",
        name: "小",
        rate: "10.00",
        value: "",
    },
    {
        id: 47,
        icon: "",
        num: "",
        name: "单",
        rate: "10.00",
        value: "",
    },
    {
        id: 48,
        icon: "",
        num: "",
        name: "双",
        rate: "10.00",
        value: "",
    },
]);

const ball_3_list = ref([
    {
        id: 49,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '1',
        name: "1",
        rate: "10.00",
        value: "",
    },
    {
        id: 50,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '2',
        name: "2",
        rate: "10.00",
        value: "",
    },
    {
        id: 51,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '3',
        name: "3",
        rate: "10.00",
        value: "",
    },
    {
        id: 52,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '4',
        name: "4",
        rate: "10.00",
        value: "",
    },
    {
        id: 53,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '5',
        name: "5",
        rate: "10.00",
        value: "",
    },
    {
        id: 54,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '6',
        name: "6",
        rate: "10.00",
        value: "",
    },
    {
        id: 55,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '7',
        name: "7",
        rate: "10.00",
        value: "",
    },
    {
        id: 56,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '8',
        name: "8",
        rate: "10.00",
        value: "",
    },
    {
        id: 57,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '9',
        name: "9",
        rate: "10.00",
        value: "",
    },
    {
        id: 58,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '10',
        name: "10",
        rate: "10.00",
        value: "",
    },
    {
        id: 59,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '11',
        name: "11",
        rate: "10.00",
        value: "",
    },
    {
        id: 60,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '12',
        name: "12",
        rate: "10.00",
        value: "",
    },
    {
        id: 61,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '13',
        name: "13",
        rate: "10.00",
        value: "",
    },
    {
        id: 62,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '14',
        name: "14",
        rate: "10.00",
        value: "",
    },
    {
        id: 63,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '15',
        name: "15",
        rate: "10.00",
        value: "",
    },
    {
        id: 64,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '16',
        name: "16",
        rate: "10.00",
        value: "",
    },
    {
        id: 65,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '17',
        name: "17",
        rate: "10.00",
        value: "",
    },
    {
        id: 66,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '18',
        name: "18",
        rate: "10.00",
        value: "",
    },
    {
        id: 67,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '19',
        name: "19",
        rate: "10.00",
        value: "",
    },
    {
        id: 68,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '20',
        name: "20",
        rate: "10.00",
        value: "",
    },
    {
        id: 69,
        icon: "",
        num: "",
        name: "大",
        rate: "10.00",
        value: "",
    },
    {
        id: 70,
        icon: "",
        num: "",
        name: "小",
        rate: "10.00",
        value: "",
    },
    {
        id: 71,
        icon: "",
        num: "",
        name: "单",
        rate: "10.00",
        value: "",
    },
    {
        id: 72,
        icon: "",
        num: "",
        name: "双",
        rate: "10.00",
        value: "",
    },
]);

const ball_4_list = ref([
    {
        id: 73,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '1',
        name: "1",
        rate: "10.00",
        value: "",
    },
    {
        id: 74,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '2',
        name: "2",
        rate: "10.00",
        value: "",
    },
    {
        id: 75,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '3',
        name: "3",
        rate: "10.00",
        value: "",
    },
    {
        id: 76,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '4',
        name: "4",
        rate: "10.00",
        value: "",
    },
    {
        id: 77,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '5',
        name: "5",
        rate: "10.00",
        value: "",
    },
    {
        id: 78,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '6',
        name: "6",
        rate: "10.00",
        value: "",
    },
    {
        id: 79,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '7',
        name: "7",
        rate: "10.00",
        value: "",
    },
    {
        id: 80,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '8',
        name: "8",
        rate: "10.00",
        value: "",
    },
    {
        id: 81,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '9',
        name: "9",
        rate: "10.00",
        value: "",
    },
    {
        id: 82,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '10',
        name: "10",
        rate: "10.00",
        value: "",
    },
    {
        id: 83,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '11',
        name: "11",
        rate: "10.00",
        value: "",
    },
    {
        id: 84,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '12',
        name: "12",
        rate: "10.00",
        value: "",
    },
    {
        id: 85,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '13',
        name: "13",
        rate: "10.00",
        value: "",
    },
    {
        id: 86,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '14',
        name: "14",
        rate: "10.00",
        value: "",
    },
    {
        id: 87,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '15',
        name: "15",
        rate: "10.00",
        value: "",
    },
    {
        id: 88,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '16',
        name: "16",
        rate: "10.00",
        value: "",
    },
    {
        id: 89,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '17',
        name: "17",
        rate: "10.00",
        value: "",
    },
    {
        id: 90,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '18',
        name: "18",
        rate: "10.00",
        value: "",
    },
    {
        id: 91,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '19',
        name: "19",
        rate: "10.00",
        value: "",
    },
    {
        id: 92,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '20',
        name: "20",
        rate: "10.00",
        value: "",
    },
    {
        id: 93,
        icon: "",
        num: "",
        name: "大",
        rate: "10.00",
        value: "",
    },
    {
        id: 94,
        icon: "",
        num: "",
        name: "小",
        rate: "10.00",
        value: "",
    },
    {
        id: 95,
        icon: "",
        num: "",
        name: "单",
        rate: "10.00",
        value: "",
    },
    {
        id: 96,
        icon: "",
        num: "",
        name: "双",
        rate: "10.00",
        value: "",
    },
]);

const ball_5_list = ref([
    {
        id: 97,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '1',
        name: "1",
        rate: "10.00",
        value: "",
    },
    {
        id: 98,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '2',
        name: "2",
        rate: "10.00",
        value: "",
    },
    {
        id: 99,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '3',
        name: "3",
        rate: "10.00",
        value: "",
    },
    {
        id: 100,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '4',
        name: "4",
        rate: "10.00",
        value: "",
    },
    {
        id: 101,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '5',
        name: "5",
        rate: "10.00",
        value: "",
    },
    {
        id: 102,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '6',
        name: "6",
        rate: "10.00",
        value: "",
    },
    {
        id: 103,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '7',
        name: "7",
        rate: "10.00",
        value: "",
    },
    {
        id: 104,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '8',
        name: "8",
        rate: "10.00",
        value: "",
    },
    {
        id: 105,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '9',
        name: "9",
        rate: "10.00",
        value: "",
    },
    {
        id: 106,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '10',
        name: "10",
        rate: "10.00",
        value: "",
    },
    {
        id: 107,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '11',
        name: "11",
        rate: "10.00",
        value: "",
    },
    {
        id: 108,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '12',
        name: "12",
        rate: "10.00",
        value: "",
    },
    {
        id: 109,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '13',
        name: "13",
        rate: "10.00",
        value: "",
    },
    {
        id: 110,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '14',
        name: "14",
        rate: "10.00",
        value: "",
    },
    {
        id: 111,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '15',
        name: "15",
        rate: "10.00",
        value: "",
    },
    {
        id: 112,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '16',
        name: "16",
        rate: "10.00",
        value: "",
    },
    {
        id: 113,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '17',
        name: "17",
        rate: "10.00",
        value: "",
    },
    {
        id: 114,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '18',
        name: "18",
        rate: "10.00",
        value: "",
    },
    {
        id: 115,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '19',
        name: "19",
        rate: "10.00",
        value: "",
    },
    {
        id: 116,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '20',
        name: "20",
        rate: "10.00",
        value: "",
    },
    {
        id: 117,
        icon: "",
        num: "",
        name: "大",
        rate: "10.00",
        value: "",
    },
    {
        id: 118,
        icon: "",
        num: "",
        name: "小",
        rate: "10.00",
        value: "",
    },
    {
        id: 119,
        icon: "",
        num: "",
        name: "单",
        rate: "10.00",
        value: "",
    },
    {
        id: 120,
        icon: "",
        num: "",
        name: "双",
        rate: "10.00",
        value: "",
    },
]);

const changeItem = (data: any) => {
    keyboardShow.value = data.keyboardShow;
    selectedId.value = data.selectedId;
    singleGold.value = "";
};

const betResult = () => {
    selectedItemList.value = [];
    selectedCount.value = 0;
    selectedBetAmount.value = 0;
    winAmount.value = 0;

    ball_1_list.value.map((item: any) => {
        if (item.value !== "") {
            selectedCount.value++;
            selectedBetAmount.value += Number(item.value);
            winAmount.value += Number(item.value) * item.rate - item.value;
            let data = {
                quick_type: "第一球",
                number: item.name,
                odds: item.rate,
                betAmount: item.value,
                winableAmount: Number(item.value) * item.rate - item.value,
            };
            selectedItemList.value = [...selectedItemList.value, data];
        }
    });

    ball_2_list.value.map((item: any) => {
        if (item.value !== "") {
            selectedCount.value++;
            selectedBetAmount.value += Number(item.value);
            winAmount.value += Number(item.value) * item.rate - item.value;
            let data = {
                quick_type: "第二球",
                number: item.name,
                odds: item.rate,
                betAmount: item.value,
                winableAmount: Number(item.value) * item.rate - item.value,
            };
            selectedItemList.value = [...selectedItemList.value, data];
        }
    });

    ball_3_list.value.map((item: any) => {
        if (item.value !== "") {
            selectedCount.value++;
            selectedBetAmount.value += Number(item.value);
            winAmount.value += Number(item.value) * item.rate - item.value;
            let data = {
                quick_type: "第三球",
                number: item.name,
                odds: item.rate,
                betAmount: item.value,
                winableAmount: Number(item.value) * item.rate - item.value,
            };
            selectedItemList.value = [...selectedItemList.value, data];
        }
    });

    ball_4_list.value.map((item: any) => {
        if (item.value !== "") {
            selectedCount.value++;
            selectedBetAmount.value += Number(item.value);
            winAmount.value += Number(item.value) * item.rate - item.value;
            let data = {
                quick_type: "第四球",
                number: item.name,
                odds: item.rate,
                betAmount: item.value,
                winableAmount: Number(item.value) * item.rate - item.value,
            };
            selectedItemList.value = [...selectedItemList.value, data];
        }
    });

    ball_5_list.value.map((item: any) => {
        if (item.value !== "") {
            selectedCount.value++;
            selectedBetAmount.value += Number(item.value);
            winAmount.value += Number(item.value) * item.rate - item.value;
            let data = {
                quick_type: "第五球",
                number: item.name,
                odds: item.rate,
                betAmount: item.value,
                winableAmount: Number(item.value) * item.rate - item.value,
            };
            selectedItemList.value = [...selectedItemList.value, data];
        }
    });

    let emitData = {
        selectedCount: selectedCount.value,
        selectedBetAmount: selectedBetAmount.value,
        winAmount: winAmount.value,
        selectedItemList: selectedItemList.value
    };
    emit("submitItem1", emitData);
};

watch(singleGold, () => {
    ball_1_list.value.map((item: any) => {
        if (item.id === selectedId.value) {
            item.value = singleGold.value;
        }
    });
    ball_2_list.value.map((item: any) => {
        if (item.id === selectedId.value) {
            item.value = singleGold.value;
        }
    });
    ball_3_list.value.map((item: any) => {
        if (item.id === selectedId.value) {
            item.value = singleGold.value;
        }
    });
    ball_4_list.value.map((item: any) => {
        if (item.id === selectedId.value) {
            item.value = singleGold.value;
        }
    });
    ball_5_list.value.map((item: any) => {
        if (item.id === selectedId.value) {
            item.value = singleGold.value;
        }
    });
}, { deep: true });

watch(lotteryOddsList, () => {
    lotteryOddsList.value.map((item: any) => {
        if (item.sub_type == "正码和特别号" && item.ball_type == "ball_1") {
            ball_1_list.value[0].rate = item.h1;
            ball_1_list.value[1].rate = item.h2;
            ball_1_list.value[2].rate = item.h3;
            ball_1_list.value[3].rate = item.h4;
            ball_1_list.value[4].rate = item.h5;
            ball_1_list.value[5].rate = item.h6;
            ball_1_list.value[6].rate = item.h7;
            ball_1_list.value[7].rate = item.h8;
            ball_1_list.value[8].rate = item.h9;
            ball_1_list.value[9].rate = item.h10;
            ball_1_list.value[10].rate = item.h11;
            ball_1_list.value[11].rate = item.h12;
            ball_1_list.value[12].rate = item.h13;
            ball_1_list.value[13].rate = item.h14;
            ball_1_list.value[14].rate = item.h15;
            ball_1_list.value[15].rate = item.h16;
            ball_1_list.value[16].rate = item.h17;
            ball_1_list.value[17].rate = item.h18;
            ball_1_list.value[18].rate = item.h19;
            ball_1_list.value[19].rate = item.h20;
            ball_1_list.value[20].rate = item.h21;
            ball_1_list.value[21].rate = item.h22;
            ball_1_list.value[22].rate = item.h23;
            ball_1_list.value[23].rate = item.h24;
        }
        if (item.sub_type == "正码和特别号" && item.ball_type == "ball_2") {
            ball_2_list.value[0].rate = item.h1;
            ball_2_list.value[1].rate = item.h2;
            ball_2_list.value[2].rate = item.h3;
            ball_2_list.value[3].rate = item.h4;
            ball_2_list.value[4].rate = item.h5;
            ball_2_list.value[5].rate = item.h6;
            ball_2_list.value[6].rate = item.h7;
            ball_2_list.value[7].rate = item.h8;
            ball_2_list.value[8].rate = item.h9;
            ball_2_list.value[9].rate = item.h10;
            ball_2_list.value[10].rate = item.h11;
            ball_2_list.value[11].rate = item.h12;
            ball_2_list.value[12].rate = item.h13;
            ball_2_list.value[13].rate = item.h14;
            ball_2_list.value[14].rate = item.h15;
            ball_2_list.value[15].rate = item.h16;
            ball_2_list.value[16].rate = item.h17;
            ball_2_list.value[17].rate = item.h18;
            ball_2_list.value[18].rate = item.h19;
            ball_2_list.value[19].rate = item.h20;
            ball_2_list.value[20].rate = item.h21;
            ball_2_list.value[21].rate = item.h22;
            ball_2_list.value[22].rate = item.h23;
            ball_2_list.value[23].rate = item.h24;
        }
        if (item.sub_type == "正码和特别号" && item.ball_type == "ball_3") {
            ball_3_list.value[0].rate = item.h1;
            ball_3_list.value[1].rate = item.h2;
            ball_3_list.value[2].rate = item.h3;
            ball_3_list.value[3].rate = item.h4;
            ball_3_list.value[4].rate = item.h5;
            ball_3_list.value[5].rate = item.h6;
            ball_3_list.value[6].rate = item.h7;
            ball_3_list.value[7].rate = item.h8;
            ball_3_list.value[8].rate = item.h9;
            ball_3_list.value[9].rate = item.h10;
            ball_3_list.value[10].rate = item.h11;
            ball_3_list.value[11].rate = item.h12;
            ball_3_list.value[12].rate = item.h13;
            ball_3_list.value[13].rate = item.h14;
            ball_3_list.value[14].rate = item.h15;
            ball_3_list.value[15].rate = item.h16;
            ball_3_list.value[16].rate = item.h17;
            ball_3_list.value[17].rate = item.h18;
            ball_3_list.value[18].rate = item.h19;
            ball_3_list.value[19].rate = item.h20;
            ball_3_list.value[20].rate = item.h21;
            ball_3_list.value[21].rate = item.h22;
            ball_3_list.value[22].rate = item.h23;
            ball_3_list.value[23].rate = item.h24;
        }
        if (item.sub_type == "正码和特别号" && item.ball_type == "ball_4") {
            ball_4_list.value[0].rate = item.h1;
            ball_4_list.value[1].rate = item.h2;
            ball_4_list.value[2].rate = item.h3;
            ball_4_list.value[3].rate = item.h4;
            ball_4_list.value[4].rate = item.h5;
            ball_4_list.value[5].rate = item.h6;
            ball_4_list.value[6].rate = item.h7;
            ball_4_list.value[7].rate = item.h8;
            ball_4_list.value[8].rate = item.h9;
            ball_4_list.value[9].rate = item.h10;
            ball_4_list.value[10].rate = item.h11;
            ball_4_list.value[11].rate = item.h12;
            ball_4_list.value[12].rate = item.h13;
            ball_4_list.value[13].rate = item.h14;
            ball_4_list.value[14].rate = item.h15;
            ball_4_list.value[15].rate = item.h16;
            ball_4_list.value[16].rate = item.h17;
            ball_4_list.value[17].rate = item.h18;
            ball_4_list.value[18].rate = item.h19;
            ball_4_list.value[19].rate = item.h20;
            ball_4_list.value[20].rate = item.h21;
            ball_4_list.value[21].rate = item.h22;
            ball_4_list.value[22].rate = item.h23;
            ball_4_list.value[23].rate = item.h24;
        }
        if (item.sub_type == "正码和特别号" && item.ball_type == "ball_5") {
            ball_5_list.value[0].rate = item.h1;
            ball_5_list.value[1].rate = item.h2;
            ball_5_list.value[2].rate = item.h3;
            ball_5_list.value[3].rate = item.h4;
            ball_5_list.value[4].rate = item.h5;
            ball_5_list.value[5].rate = item.h6;
            ball_5_list.value[6].rate = item.h7;
            ball_5_list.value[7].rate = item.h8;
            ball_5_list.value[8].rate = item.h9;
            ball_5_list.value[9].rate = item.h10;
            ball_5_list.value[10].rate = item.h11;
            ball_5_list.value[11].rate = item.h12;
            ball_5_list.value[12].rate = item.h13;
            ball_5_list.value[13].rate = item.h14;
            ball_5_list.value[14].rate = item.h15;
            ball_5_list.value[15].rate = item.h16;
            ball_5_list.value[16].rate = item.h17;
            ball_5_list.value[17].rate = item.h18;
            ball_5_list.value[18].rate = item.h19;
            ball_5_list.value[19].rate = item.h20;
            ball_5_list.value[20].rate = item.h21;
            ball_5_list.value[21].rate = item.h22;
            ball_5_list.value[22].rate = item.h23;
            ball_5_list.value[23].rate = item.h24;
        }
    })
})

watch(initialize, () => {
    ball_1_list.value.map((item: any) => {
        item.value = "";
    })
    ball_2_list.value.map((item: any) => {
        item.value = "";
    })
    ball_3_list.value.map((item: any) => {
        item.value = "";
    })
    ball_4_list.value.map((item: any) => {
        item.value = "";
    })
    ball_5_list.value.map((item: any) => {
        item.value = "";
    })
}, { deep: true });
onMounted(() => {
});
</script>
  
<style></style>
  