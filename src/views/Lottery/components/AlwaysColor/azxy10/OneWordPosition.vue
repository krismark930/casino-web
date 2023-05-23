<template>
    <van-tabs v-model:active="activeName">
        <van-tab title="冠军" name="ball_1">
            <div class="animated fadeInLeft">
                <div class="m-[6px] py-[3px] px-[15px] flex items-center justify-center">
                    <div class="w-full grid grid-cols-3 gap-1">
                        <div v-for="(item, index) in ball_1_list" :key="index">
                            <lotteryAlwaysColorItem2 :item="item" :disabled="disabled" @changeItem="changeItem"
                                @betResult="betResult" />
                        </div>
                    </div>
                </div>
            </div>
        </van-tab>
        <van-tab title="亚军" name="ball_2">
            <div class="animated fadeInLeft">
                <div class="m-[6px] py-[3px] px-[15px] flex items-center justify-center">
                    <div class="w-full grid grid-cols-3 gap-1">
                        <div v-for="(item, index) in ball_2_list" :key="index">
                            <lotteryAlwaysColorItem2 :item="item" :disabled="disabled" @changeItem="changeItem"
                                @betResult="betResult" />
                        </div>
                    </div>
                </div>
            </div>
        </van-tab>
        <van-tab title="第三名" name="ball_3">
            <div class="animated fadeInLeft">
                <div class="m-[6px] py-[3px] px-[15px] flex items-center justify-center">
                    <div class="w-full grid grid-cols-3 gap-1">
                        <div v-for="(item, index) in ball_3_list" :key="index">
                            <lotteryAlwaysColorItem2 :item="item" :disabled="disabled" @changeItem="changeItem"
                                @betResult="betResult" />
                        </div>
                    </div>
                </div>
            </div>
        </van-tab>
        <van-tab title="第四名" name="ball_4">
            <div class="animated fadeInLeft">
                <div class="m-[6px] py-[3px] px-[15px] flex items-center justify-center">
                    <div class="w-full grid grid-cols-3 gap-1">
                        <div v-for="(item, index) in ball_4_list" :key="index">
                            <lotteryAlwaysColorItem2 :item="item" :disabled="disabled" @changeItem="changeItem"
                                @betResult="betResult" />
                        </div>
                    </div>
                </div>
            </div>
        </van-tab>
        <van-tab title="第五名" name="ball_5">
            <div class="animated fadeInLeft">
                <div class="m-[6px] py-[3px] px-[15px] flex items-center justify-center">
                    <div class="w-full grid grid-cols-3 gap-1">
                        <div v-for="(item, index) in ball_5_list" :key="index">
                            <lotteryAlwaysColorItem2 :item="item" :disabled="disabled" @changeItem="changeItem"
                                @betResult="betResult" />
                        </div>
                    </div>
                </div>
            </div>
        </van-tab>
        <van-tab title="第六名" name="ball_6">
            <div class="animated fadeInLeft">
                <div class="m-[6px] py-[3px] px-[15px] flex items-center justify-center">
                    <div class="w-full grid grid-cols-3 gap-1">
                        <div v-for="(item, index) in ball_6_list" :key="index">
                            <lotteryAlwaysColorItem2 :item="item" :disabled="disabled" @changeItem="changeItem"
                                @betResult="betResult" />
                        </div>
                    </div>
                </div>
            </div>
        </van-tab>
        <van-tab title="第七名" name="ball_7">
            <div class="animated fadeInLeft">
                <div class="m-[6px] py-[3px] px-[15px] flex items-center justify-center">
                    <div class="w-full grid grid-cols-3 gap-1">
                        <div v-for="(item, index) in ball_7_list" :key="index">
                            <lotteryAlwaysColorItem2 :item="item" :disabled="disabled" @changeItem="changeItem"
                                @betResult="betResult" />
                        </div>
                    </div>
                </div>
            </div>
        </van-tab>
        <van-tab title="第八名" name="ball_8">
            <div class="animated fadeInLeft">
                <div class="m-[6px] py-[3px] px-[15px] flex items-center justify-center">
                    <div class="w-full grid grid-cols-3 gap-1">
                        <div v-for="(item, index) in ball_8_list" :key="index">
                            <lotteryAlwaysColorItem2 :item="item" :disabled="disabled" @changeItem="changeItem"
                                @betResult="betResult" />
                        </div>
                    </div>
                </div>
            </div>
        </van-tab>
        <van-tab title="第九名" name="ball_9">
            <div class="animated fadeInLeft">
                <div class="m-[6px] py-[3px] px-[15px] flex items-center justify-center">
                    <div class="w-full grid grid-cols-3 gap-1">
                        <div v-for="(item, index) in ball_9_list" :key="index">
                            <lotteryAlwaysColorItem2 :item="item" :disabled="disabled" @changeItem="changeItem"
                                @betResult="betResult" />
                        </div>
                    </div>
                </div>
            </div>
        </van-tab>
        <van-tab title="第十名" name="ball_10">
            <div class="animated fadeInLeft">
                <div class="m-[6px] py-[3px] px-[15px] flex items-center justify-center">
                    <div class="w-full grid grid-cols-3 gap-1">
                        <div v-for="(item, index) in ball_10_list" :key="index">
                            <lotteryAlwaysColorItem2 :item="item" :disabled="disabled" @changeItem="changeItem"
                                @betResult="betResult" />
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
import lotteryAlwaysColorItem2 from "@/components/global/lotteryAlwaysColorItem2.vue";
const props = defineProps<{ lotteryOddsList: any, initialize: boolean, disabled: boolean }>();
const emit = defineEmits<{
    (e: "submitItem2", emitItem: any): void;
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
        num: '1',
        name: "1",
        color: "#f8f02b",
        rate: "10.00",
        value: "",
    },
    {
        id: 2,
        num: '2',
        name: "2",
        color: "#00a5ff",
        rate: "10.00",
        value: "",
    },
    {
        id: 3,
        num: '3',
        name: "3",
        color: "#535351",
        rate: "10.00",
        value: "",
    },
    {
        id: 4,
        num: '4',
        name: "4",
        color: "#d15000",
        rate: "10.00",
        value: "",
    },
    {
        id: 5,
        num: '5',
        name: "5",
        color: "#2da695",
        rate: "10.00",
        value: "",
    },
    {
        id: 6,
        num: '6',
        name: "6",
        color: "#1600ca",
        rate: "10.00",
        value: "",
    },
    {
        id: 7,
        num: '7',
        name: "7",
        color: "#cecdd2",
        rate: "10.00",
        value: "",
    },
    {
        id: 8,
        num: '8',
        name: "8",
        color: "#f10104",
        rate: "10.00",
        value: "",
    },
    {
        id: 9,
        num: '9',
        name: "9",
        color: "#af0600",
        rate: "10.00",
        value: "",
    },
    {
        id: 10,
        num: '10',
        name: "10",
        color: "#166410",
        rate: "10.00",
        value: "",
    },
    {
        id: 11,
        num: "",
        name: "大",
        rate: "10.00",
        value: "",
    },
    {
        id: 12,
        num: "",
        name: "小",
        rate: "10.00",
        value: "",
    },
    {
        id: 13,
        num: "",
        name: "单",
        rate: "10.00",
        value: "",
    },
    {
        id: 14,
        num: "",
        name: "双",
        rate: "10.00",
        value: "",
    },
]);

const ball_2_list = ref([
    {
        id: 15,
        num: '1',
        name: "1",
        color: "#f8f02b",
        rate: "10.00",
        value: "",
    },
    {
        id: 16,
        num: '2',
        name: "2",
        color: "#00a5ff",
        rate: "10.00",
        value: "",
    },
    {
        id: 17,
        num: '3',
        name: "3",
        color: "#535351",
        rate: "10.00",
        value: "",
    },
    {
        id: 18,
        num: '4',
        name: "4",
        color: "#d15000",
        rate: "10.00",
        value: "",
    },
    {
        id: 19,
        num: '5',
        name: "5",
        color: "#2da695",
        rate: "10.00",
        value: "",
    },
    {
        id: 20,
        num: '6',
        name: "6",
        color: "#1600ca",
        rate: "10.00",
        value: "",
    },
    {
        id: 21,
        num: '7',
        name: "7",
        color: "#cecdd2",
        rate: "10.00",
        value: "",
    },
    {
        id: 22,
        num: '8',
        name: "8",
        color: "#f10104",
        rate: "10.00",
        value: "",
    },
    {
        id: 23,
        num: '9',
        name: "9",
        color: "#af0600",
        rate: "10.00",
        value: "",
    },
    {
        id: 24,
        num: '10',
        name: "10",
        color: "#166410",
        rate: "10.00",
        value: "",
    },
    {
        id: 25,
        num: "",
        name: "大",
        rate: "10.00",
        value: "",
    },
    {
        id: 26,
        num: "",
        name: "小",
        rate: "10.00",
        value: "",
    },
    {
        id: 27,
        num: "",
        name: "单",
        rate: "10.00",
        value: "",
    },
    {
        id: 28,
        num: "",
        name: "双",
        rate: "10.00",
        value: "",
    },
]);

const ball_3_list = ref([
    {
        id: 29,
        num: '1',
        name: "1",
        color: "#f8f02b",
        rate: "10.00",
        value: "",
    },
    {
        id: 30,
        num: '2',
        name: "2",
        color: "#00a5ff",
        rate: "10.00",
        value: "",
    },
    {
        id: 31,
        num: '3',
        name: "3",
        color: "#535351",
        rate: "10.00",
        value: "",
    },
    {
        id: 32,
        num: '4',
        name: "4",
        color: "#d15000",
        rate: "10.00",
        value: "",
    },
    {
        id: 33,
        num: '5',
        name: "5",
        color: "#2da695",
        rate: "10.00",
        value: "",
    },
    {
        id: 34,
        num: '6',
        name: "6",
        color: "#1600ca",
        rate: "10.00",
        value: "",
    },
    {
        id: 35,
        num: '7',
        name: "7",
        color: "#cecdd2",
        rate: "10.00",
        value: "",
    },
    {
        id: 36,
        num: '8',
        name: "8",
        color: "#f10104",
        rate: "10.00",
        value: "",
    },
    {
        id: 37,
        num: '9',
        name: "9",
        color: "#af0600",
        rate: "10.00",
        value: "",
    },
    {
        id: 38,
        num: '10',
        name: "10",
        color: "#166410",
        rate: "10.00",
        value: "",
    },
    {
        id: 39,
        num: "",
        name: "大",
        rate: "10.00",
        value: "",
    },
    {
        id: 40,
        num: "",
        name: "小",
        rate: "10.00",
        value: "",
    },
    {
        id: 41,
        num: "",
        name: "单",
        rate: "10.00",
        value: "",
    },
    {
        id: 42,
        num: "",
        name: "双",
        rate: "10.00",
        value: "",
    },
]);

const ball_4_list = ref([
    {
        id: 43,
        num: '1',
        name: "1",
        color: "#f8f02b",
        rate: "10.00",
        value: "",
    },
    {
        id: 44,
        num: '2',
        name: "2",
        color: "#00a5ff",
        rate: "10.00",
        value: "",
    },
    {
        id: 45,
        num: '3',
        name: "3",
        color: "#535351",
        rate: "10.00",
        value: "",
    },
    {
        id: 46,
        num: '4',
        name: "4",
        color: "#d15000",
        rate: "10.00",
        value: "",
    },
    {
        id: 47,
        num: '5',
        name: "5",
        color: "#2da695",
        rate: "10.00",
        value: "",
    },
    {
        id: 48,
        num: '6',
        name: "6",
        color: "#1600ca",
        rate: "10.00",
        value: "",
    },
    {
        id: 49,
        num: '7',
        name: "7",
        color: "#cecdd2",
        rate: "10.00",
        value: "",
    },
    {
        id: 50,
        num: '8',
        name: "8",
        color: "#f10104",
        rate: "10.00",
        value: "",
    },
    {
        id: 51,
        num: '9',
        name: "9",
        color: "#af0600",
        rate: "10.00",
        value: "",
    },
    {
        id: 52,
        num: '10',
        name: "10",
        color: "#166410",
        rate: "10.00",
        value: "",
    },
    {
        id: 53,
        num: "",
        name: "大",
        rate: "10.00",
        value: "",
    },
    {
        id: 54,
        num: "",
        name: "小",
        rate: "10.00",
        value: "",
    },
    {
        id: 55,
        num: "",
        name: "单",
        rate: "10.00",
        value: "",
    },
    {
        id: 56,
        num: "",
        name: "双",
        rate: "10.00",
        value: "",
    },
]);

const ball_5_list = ref([
    {
        id: 57,
        num: '1',
        name: "1",
        color: "#f8f02b",
        rate: "10.00",
        value: "",
    },
    {
        id: 58,
        num: '2',
        name: "2",
        color: "#00a5ff",
        rate: "10.00",
        value: "",
    },
    {
        id: 59,
        num: '3',
        name: "3",
        color: "#535351",
        rate: "10.00",
        value: "",
    },
    {
        id: 60,
        num: '4',
        name: "4",
        color: "#d15000",
        rate: "10.00",
        value: "",
    },
    {
        id: 61,
        num: '5',
        name: "5",
        color: "#2da695",
        rate: "10.00",
        value: "",
    },
    {
        id: 62,
        num: '6',
        name: "6",
        color: "#1600ca",
        rate: "10.00",
        value: "",
    },
    {
        id: 63,
        num: '7',
        name: "7",
        color: "#cecdd2",
        rate: "10.00",
        value: "",
    },
    {
        id: 64,
        num: '8',
        name: "8",
        color: "#f10104",
        rate: "10.00",
        value: "",
    },
    {
        id: 65,
        num: '9',
        name: "9",
        color: "#af0600",
        rate: "10.00",
        value: "",
    },
    {
        id: 66,
        num: '10',
        name: "10",
        color: "#166410",
        rate: "10.00",
        value: "",
    },
    {
        id: 67,
        num: "",
        name: "大",
        rate: "10.00",
        value: "",
    },
    {
        id: 68,
        num: "",
        name: "小",
        rate: "10.00",
        value: "",
    },
    {
        id: 69,
        num: "",
        name: "单",
        rate: "10.00",
        value: "",
    },
    {
        id: 70,
        num: "",
        name: "双",
        rate: "10.00",
        value: "",
    },
]);

const ball_6_list = ref([
    {
        id: 71,
        num: '1',
        name: "1",
        color: "#f8f02b",
        rate: "10.00",
        value: "",
    },
    {
        id: 72,
        num: '2',
        name: "2",
        color: "#00a5ff",
        rate: "10.00",
        value: "",
    },
    {
        id: 73,
        num: '3',
        name: "3",
        color: "#535351",
        rate: "10.00",
        value: "",
    },
    {
        id: 74,
        num: '4',
        name: "4",
        color: "#d15000",
        rate: "10.00",
        value: "",
    },
    {
        id: 75,
        num: '5',
        name: "5",
        color: "#2da695",
        rate: "10.00",
        value: "",
    },
    {
        id: 76,
        num: '6',
        name: "6",
        color: "#1600ca",
        rate: "10.00",
        value: "",
    },
    {
        id: 77,
        num: '7',
        name: "7",
        color: "#cecdd2",
        rate: "10.00",
        value: "",
    },
    {
        id: 78,
        num: '8',
        name: "8",
        color: "#f10104",
        rate: "10.00",
        value: "",
    },
    {
        id: 79,
        num: '9',
        name: "9",
        color: "#af0600",
        rate: "10.00",
        value: "",
    },
    {
        id: 80,
        num: '10',
        name: "10",
        color: "#166410",
        rate: "10.00",
        value: "",
    },
    {
        id: 81,
        num: "",
        name: "大",
        rate: "10.00",
        value: "",
    },
    {
        id: 82,
        num: "",
        name: "小",
        rate: "10.00",
        value: "",
    },
    {
        id: 83,
        num: "",
        name: "单",
        rate: "10.00",
        value: "",
    },
    {
        id: 84,
        num: "",
        name: "双",
        rate: "10.00",
        value: "",
    },
]);

const ball_7_list = ref([
    {
        id: 85,
        num: '1',
        name: "1",
        color: "#f8f02b",
        rate: "10.00",
        value: "",
    },
    {
        id: 86,
        num: '2',
        name: "2",
        color: "#00a5ff",
        rate: "10.00",
        value: "",
    },
    {
        id: 87,
        num: '3',
        name: "3",
        color: "#535351",
        rate: "10.00",
        value: "",
    },
    {
        id: 88,
        num: '4',
        name: "4",
        color: "#d15000",
        rate: "10.00",
        value: "",
    },
    {
        id: 89,
        num: '5',
        name: "5",
        color: "#2da695",
        rate: "10.00",
        value: "",
    },
    {
        id: 90,
        num: '6',
        name: "6",
        color: "#1600ca",
        rate: "10.00",
        value: "",
    },
    {
        id: 91,
        num: '7',
        name: "7",
        color: "#cecdd2",
        rate: "10.00",
        value: "",
    },
    {
        id: 92,
        num: '8',
        name: "8",
        color: "#f10104",
        rate: "10.00",
        value: "",
    },
    {
        id: 93,
        num: '9',
        name: "9",
        color: "#af0600",
        rate: "10.00",
        value: "",
    },
    {
        id: 94,
        num: '10',
        name: "10",
        color: "#166410",
        rate: "10.00",
        value: "",
    },
    {
        id: 95,
        num: "",
        name: "大",
        rate: "10.00",
        value: "",
    },
    {
        id: 96,
        num: "",
        name: "小",
        rate: "10.00",
        value: "",
    },
    {
        id: 97,
        num: "",
        name: "单",
        rate: "10.00",
        value: "",
    },
    {
        id: 98,
        num: "",
        name: "双",
        rate: "10.00",
        value: "",
    },
]);

const ball_8_list = ref([
    {
        id: 99,
        num: '1',
        name: "1",
        color: "#f8f02b",
        rate: "10.00",
        value: "",
    },
    {
        id: 100,
        num: '2',
        name: "2",
        color: "#00a5ff",
        rate: "10.00",
        value: "",
    },
    {
        id: 101,
        num: '3',
        name: "3",
        color: "#535351",
        rate: "10.00",
        value: "",
    },
    {
        id: 102,
        num: '4',
        name: "4",
        color: "#d15000",
        rate: "10.00",
        value: "",
    },
    {
        id: 103,
        num: '5',
        name: "5",
        color: "#2da695",
        rate: "10.00",
        value: "",
    },
    {
        id: 104,
        num: '6',
        name: "6",
        color: "#1600ca",
        rate: "10.00",
        value: "",
    },
    {
        id: 105,
        num: '7',
        name: "7",
        color: "#cecdd2",
        rate: "10.00",
        value: "",
    },
    {
        id: 106,
        num: '8',
        name: "8",
        color: "#f10104",
        rate: "10.00",
        value: "",
    },
    {
        id: 107,
        num: '9',
        name: "9",
        color: "#af0600",
        rate: "10.00",
        value: "",
    },
    {
        id: 108,
        num: '10',
        name: "10",
        color: "#166410",
        rate: "10.00",
        value: "",
    },
    {
        id: 109,
        num: "",
        name: "大",
        rate: "10.00",
        value: "",
    },
    {
        id: 110,
        num: "",
        name: "小",
        rate: "10.00",
        value: "",
    },
    {
        id: 111,
        num: "",
        name: "单",
        rate: "10.00",
        value: "",
    },
    {
        id: 112,
        num: "",
        name: "双",
        rate: "10.00",
        value: "",
    },
]);

const ball_9_list = ref([
    {
        id: 113,
        num: '1',
        name: "1",
        color: "#f8f02b",
        rate: "10.00",
        value: "",
    },
    {
        id: 114,
        num: '2',
        name: "2",
        color: "#00a5ff",
        rate: "10.00",
        value: "",
    },
    {
        id: 115,
        num: '3',
        name: "3",
        color: "#535351",
        rate: "10.00",
        value: "",
    },
    {
        id: 116,
        num: '4',
        name: "4",
        color: "#d15000",
        rate: "10.00",
        value: "",
    },
    {
        id: 117,
        num: '5',
        name: "5",
        color: "#2da695",
        rate: "10.00",
        value: "",
    },
    {
        id: 118,
        num: '6',
        name: "6",
        color: "#1600ca",
        rate: "10.00",
        value: "",
    },
    {
        id: 119,
        num: '7',
        name: "7",
        color: "#cecdd2",
        rate: "10.00",
        value: "",
    },
    {
        id: 120,
        num: '8',
        name: "8",
        color: "#f10104",
        rate: "10.00",
        value: "",
    },
    {
        id: 121,
        num: '9',
        name: "9",
        color: "#af0600",
        rate: "10.00",
        value: "",
    },
    {
        id: 122,
        num: '10',
        name: "10",
        color: "#166410",
        rate: "10.00",
        value: "",
    },
    {
        id: 123,
        num: "",
        name: "大",
        rate: "10.00",
        value: "",
    },
    {
        id: 124,
        num: "",
        name: "小",
        rate: "10.00",
        value: "",
    },
    {
        id: 125,
        num: "",
        name: "单",
        rate: "10.00",
        value: "",
    },
    {
        id: 126,
        num: "",
        name: "双",
        rate: "10.00",
        value: "",
    },
]);

const ball_10_list = ref([
    {
        id: 127,
        num: '1',
        name: "1",
        color: "#f8f02b",
        rate: "10.00",
        value: "",
    },
    {
        id: 128,
        num: '2',
        name: "2",
        color: "#00a5ff",
        rate: "10.00",
        value: "",
    },
    {
        id: 129,
        num: '3',
        name: "3",
        color: "#535351",
        rate: "10.00",
        value: "",
    },
    {
        id: 130,
        num: '4',
        name: "4",
        color: "#d15000",
        rate: "10.00",
        value: "",
    },
    {
        id: 131,
        num: '5',
        name: "5",
        color: "#2da695",
        rate: "10.00",
        value: "",
    },
    {
        id: 132,
        num: '6',
        name: "6",
        color: "#1600ca",
        rate: "10.00",
        value: "",
    },
    {
        id: 133,
        num: '7',
        name: "7",
        color: "#cecdd2",
        rate: "10.00",
        value: "",
    },
    {
        id: 134,
        num: '8',
        name: "8",
        color: "#f10104",
        rate: "10.00",
        value: "",
    },
    {
        id: 135,
        num: '9',
        name: "9",
        color: "#af0600",
        rate: "10.00",
        value: "",
    },
    {
        id: 136,
        num: '10',
        name: "10",
        color: "#166410",
        rate: "10.00",
        value: "",
    },
    {
        id: 137,
        num: "",
        name: "大",
        rate: "10.00",
        value: "",
    },
    {
        id: 138,
        num: "",
        name: "小",
        rate: "10.00",
        value: "",
    },
    {
        id: 139,
        num: "",
        name: "单",
        rate: "10.00",
        value: "",
    },
    {
        id: 140,
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
                quick_type: "冠军",
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
                quick_type: "亚军",
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
                quick_type: "第三名",
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
                quick_type: "第四名",
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
                quick_type: "第五名",
                number: item.name,
                odds: item.rate,
                betAmount: item.value,
                winableAmount: Number(item.value) * item.rate - item.value,
            };
            selectedItemList.value = [...selectedItemList.value, data];
        }
    });

    ball_6_list.value.map((item: any) => {
        if (item.value !== "") {
            selectedCount.value++;
            selectedBetAmount.value += Number(item.value);
            winAmount.value += Number(item.value) * item.rate - item.value;
            let data = {
                quick_type: "第六名",
                number: item.name,
                odds: item.rate,
                betAmount: item.value,
                winableAmount: Number(item.value) * item.rate - item.value,
            };
            selectedItemList.value = [...selectedItemList.value, data];
        }
    });

    ball_7_list.value.map((item: any) => {
        if (item.value !== "") {
            selectedCount.value++;
            selectedBetAmount.value += Number(item.value);
            winAmount.value += Number(item.value) * item.rate - item.value;
            let data = {
                quick_type: "第七名",
                number: item.name,
                odds: item.rate,
                betAmount: item.value,
                winableAmount: Number(item.value) * item.rate - item.value,
            };
            selectedItemList.value = [...selectedItemList.value, data];
        }
    });

    ball_8_list.value.map((item: any) => {
        if (item.value !== "") {
            selectedCount.value++;
            selectedBetAmount.value += Number(item.value);
            winAmount.value += Number(item.value) * item.rate - item.value;
            let data = {
                quick_type: "第八名",
                number: item.name,
                odds: item.rate,
                betAmount: item.value,
                winableAmount: Number(item.value) * item.rate - item.value,
            };
            selectedItemList.value = [...selectedItemList.value, data];
        }
    });

    ball_9_list.value.map((item: any) => {
        if (item.value !== "") {
            selectedCount.value++;
            selectedBetAmount.value += Number(item.value);
            winAmount.value += Number(item.value) * item.rate - item.value;
            let data = {
                quick_type: "第九名",
                number: item.name,
                odds: item.rate,
                betAmount: item.value,
                winableAmount: Number(item.value) * item.rate - item.value,
            };
            selectedItemList.value = [...selectedItemList.value, data];
        }
    });

    ball_10_list.value.map((item: any) => {
        if (item.value !== "") {
            selectedCount.value++;
            selectedBetAmount.value += Number(item.value);
            winAmount.value += Number(item.value) * item.rate - item.value;
            let data = {
                quick_type: "第十名",
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
    emit("submitItem2", emitData);
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
    ball_6_list.value.map((item: any) => {
        if (item.id === selectedId.value) {
            item.value = singleGold.value;
        }
    });
    ball_7_list.value.map((item: any) => {
        if (item.id === selectedId.value) {
            item.value = singleGold.value;
        }
    });
    ball_8_list.value.map((item: any) => {
        if (item.id === selectedId.value) {
            item.value = singleGold.value;
        }
    });
    ball_9_list.value.map((item: any) => {
        if (item.id === selectedId.value) {
            item.value = singleGold.value;
        }
    });
    ball_10_list.value.map((item: any) => {
        if (item.id === selectedId.value) {
            item.value = singleGold.value;
        }
    });
}, { deep: true });

watch(lotteryOddsList, () => {
    lotteryOddsList.value.map((item: any) => {
        if (item.sub_type == "定位" && item.ball_type == "ball_1") {
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
        }
        if (item.sub_type == "主盘势" && item.ball_type == "ball_1") {
            ball_1_list.value[10].rate = item.h1;
            ball_1_list.value[11].rate = item.h2;
            ball_1_list.value[12].rate = item.h3;
            ball_1_list.value[13].rate = item.h4;
        }
        if (item.sub_type == "定位" && item.ball_type == "ball_2") {
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
        }
        if (item.sub_type == "主盘势" && item.ball_type == "ball_2") {
            ball_2_list.value[10].rate = item.h1;
            ball_2_list.value[11].rate = item.h2;
            ball_2_list.value[12].rate = item.h3;
            ball_2_list.value[13].rate = item.h4;
        }
        if (item.sub_type == "定位" && item.ball_type == "ball_3") {
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
        }
        if (item.sub_type == "主盘势" && item.ball_type == "ball_3") {
            ball_3_list.value[10].rate = item.h1;
            ball_3_list.value[11].rate = item.h2;
            ball_3_list.value[12].rate = item.h3;
            ball_3_list.value[13].rate = item.h4;
        }
        if (item.sub_type == "定位" && item.ball_type == "ball_4") {
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
        }
        if (item.sub_type == "主盘势" && item.ball_type == "ball_4") {
            ball_4_list.value[10].rate = item.h1;
            ball_4_list.value[11].rate = item.h2;
            ball_4_list.value[12].rate = item.h3;
            ball_4_list.value[13].rate = item.h4;
        }
        if (item.sub_type == "定位" && item.ball_type == "ball_5") {
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
        }
        if (item.sub_type == "主盘势" && item.ball_type == "ball_5") {
            ball_5_list.value[10].rate = item.h1;
            ball_5_list.value[11].rate = item.h2;
            ball_5_list.value[12].rate = item.h3;
            ball_5_list.value[13].rate = item.h4;
        }
        if (item.sub_type == "定位" && item.ball_type == "ball_6") {
            ball_6_list.value[0].rate = item.h1;
            ball_6_list.value[1].rate = item.h2;
            ball_6_list.value[2].rate = item.h3;
            ball_6_list.value[3].rate = item.h4;
            ball_6_list.value[4].rate = item.h5;
            ball_6_list.value[5].rate = item.h6;
            ball_6_list.value[6].rate = item.h7;
            ball_6_list.value[7].rate = item.h8;
            ball_6_list.value[8].rate = item.h9;
            ball_6_list.value[9].rate = item.h10;
        }
        if (item.sub_type == "主盘势" && item.ball_type == "ball_6") {
            ball_6_list.value[10].rate = item.h1;
            ball_6_list.value[11].rate = item.h2;
            ball_6_list.value[12].rate = item.h3;
            ball_6_list.value[13].rate = item.h4;
        }
        if (item.sub_type == "定位" && item.ball_type == "ball_7") {
            ball_7_list.value[0].rate = item.h1;
            ball_7_list.value[1].rate = item.h2;
            ball_7_list.value[2].rate = item.h3;
            ball_7_list.value[3].rate = item.h4;
            ball_7_list.value[4].rate = item.h5;
            ball_7_list.value[5].rate = item.h6;
            ball_7_list.value[6].rate = item.h7;
            ball_7_list.value[7].rate = item.h8;
            ball_7_list.value[8].rate = item.h9;
            ball_7_list.value[9].rate = item.h10;
        }
        if (item.sub_type == "主盘势" && item.ball_type == "ball_7") {
            ball_7_list.value[10].rate = item.h1;
            ball_7_list.value[11].rate = item.h2;
            ball_7_list.value[12].rate = item.h3;
            ball_7_list.value[13].rate = item.h4;
        }
        if (item.sub_type == "定位" && item.ball_type == "ball_8") {
            ball_8_list.value[0].rate = item.h1;
            ball_8_list.value[1].rate = item.h2;
            ball_8_list.value[2].rate = item.h3;
            ball_8_list.value[3].rate = item.h4;
            ball_8_list.value[4].rate = item.h5;
            ball_8_list.value[5].rate = item.h6;
            ball_8_list.value[6].rate = item.h7;
            ball_8_list.value[7].rate = item.h8;
            ball_8_list.value[8].rate = item.h9;
            ball_8_list.value[9].rate = item.h10;
        }
        if (item.sub_type == "主盘势" && item.ball_type == "ball_8") {
            ball_8_list.value[10].rate = item.h1;
            ball_8_list.value[11].rate = item.h2;
            ball_8_list.value[12].rate = item.h3;
            ball_8_list.value[13].rate = item.h4;
        }
        if (item.sub_type == "定位" && item.ball_type == "ball_9") {
            ball_9_list.value[0].rate = item.h1;
            ball_9_list.value[1].rate = item.h2;
            ball_9_list.value[2].rate = item.h3;
            ball_9_list.value[3].rate = item.h4;
            ball_9_list.value[4].rate = item.h5;
            ball_9_list.value[5].rate = item.h6;
            ball_9_list.value[6].rate = item.h7;
            ball_9_list.value[7].rate = item.h8;
            ball_9_list.value[8].rate = item.h9;
            ball_9_list.value[9].rate = item.h10;
        }
        if (item.sub_type == "主盘势" && item.ball_type == "ball_9") {
            ball_9_list.value[10].rate = item.h1;
            ball_9_list.value[11].rate = item.h2;
            ball_9_list.value[12].rate = item.h3;
            ball_9_list.value[13].rate = item.h4;
        }
        if (item.sub_type == "定位" && item.ball_type == "ball_10") {
            ball_10_list.value[0].rate = item.h1;
            ball_10_list.value[1].rate = item.h2;
            ball_10_list.value[2].rate = item.h3;
            ball_10_list.value[3].rate = item.h4;
            ball_10_list.value[4].rate = item.h5;
            ball_10_list.value[5].rate = item.h6;
            ball_10_list.value[6].rate = item.h7;
            ball_10_list.value[7].rate = item.h8;
            ball_10_list.value[8].rate = item.h9;
            ball_10_list.value[9].rate = item.h10;
        }
        if (item.sub_type == "主盘势" && item.ball_type == "ball_10") {
            ball_10_list.value[10].rate = item.h1;
            ball_10_list.value[11].rate = item.h2;
            ball_10_list.value[12].rate = item.h3;
            ball_10_list.value[13].rate = item.h4;
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
    ball_6_list.value.map((item: any) => {
        item.value = "";
    })
    ball_7_list.value.map((item: any) => {
        item.value = "";
    })
    ball_8_list.value.map((item: any) => {
        item.value = "";
    })
    ball_9_list.value.map((item: any) => {
        item.value = "";
    })
    ball_10_list.value.map((item: any) => {
        item.value = "";
    })
}, { deep: true });
onMounted(() => {
});
</script>
  
<style></style>
  