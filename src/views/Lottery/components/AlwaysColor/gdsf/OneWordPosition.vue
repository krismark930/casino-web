<template>
    <van-tabs v-model:active="activeName">
        <van-tab title="第一球" name="ball_1">
            <div class="animated fadeInLeft">
                <div class="m-[6px] py-[3px] px-[15px] flex items-center justify-center">
                    <div class="w-full grid grid-cols-3 gap-1">
                        <div v-for="(item, index) in ball_1_list" :key="index">
                            <LotteryAlwaysColorItem1 :item="item" :disabled="disabled" @changeItem="changeItem"  @betResult="betResult"/>
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
                            <LotteryAlwaysColorItem1 :item="item" :disabled="disabled" @changeItem="changeItem"  @betResult="betResult"/>
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
                            <LotteryAlwaysColorItem1 :item="item" :disabled="disabled" @changeItem="changeItem"  @betResult="betResult"/>
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
                            <LotteryAlwaysColorItem1 :item="item" :disabled="disabled" @changeItem="changeItem"  @betResult="betResult"/>
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
                            <LotteryAlwaysColorItem1 :item="item" :disabled="disabled" @changeItem="changeItem" @betResult="betResult"/>
                        </div>
                    </div>
                </div>
            </div>
        </van-tab>
        <van-tab title="第六球" name="ball_6">
            <div class="animated fadeInLeft">
                <div class="m-[6px] py-[3px] px-[15px] flex items-center justify-center">
                    <div class="w-full grid grid-cols-3 gap-1">
                        <div v-for="(item, index) in ball_6_list" :key="index">
                            <LotteryAlwaysColorItem1 :item="item" :disabled="disabled" @changeItem="changeItem" @betResult="betResult"/>
                        </div>
                    </div>
                </div>
            </div>
        </van-tab>
        <van-tab title="第七球" name="ball_7">
            <div class="animated fadeInLeft">
                <div class="m-[6px] py-[3px] px-[15px] flex items-center justify-center">
                    <div class="w-full grid grid-cols-3 gap-1">
                        <div v-for="(item, index) in ball_7_list" :key="index">
                            <LotteryAlwaysColorItem1 :item="item" :disabled="disabled" @changeItem="changeItem" @betResult="betResult"/>
                        </div>
                    </div>
                </div>
            </div>
        </van-tab>
        <van-tab title="第八球" name="ball_8">
            <div class="animated fadeInLeft">
                <div class="m-[6px] py-[3px] px-[15px] flex items-center justify-center">
                    <div class="w-full grid grid-cols-3 gap-1">
                        <div v-for="(item, index) in ball_8_list" :key="index">
                            <LotteryAlwaysColorItem1 :item="item" :disabled="disabled" @changeItem="changeItem" @betResult="betResult"/>
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
import LotteryAlwaysColorItem1 from "@/components/global/LotteryAlwaysColorItem1.vue";
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
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '1',
        name: "1",
        rate: "10.00",
        value: "",
    },
    {
        id: 2,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '2',
        name: "2",
        rate: "10.00",
        value: "",
    },
    {
        id: 3,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '3',
        name: "3",
        rate: "10.00",
        value: "",
    },
    {
        id: 4,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '4',
        name: "4",
        rate: "10.00",
        value: "",
    },
    {
        id: 5,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '5',
        name: "5",
        rate: "10.00",
        value: "",
    },
    {
        id: 6,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '6',
        name: "6",
        rate: "10.00",
        value: "",
    },
    {
        id: 7,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '7',
        name: "7",
        rate: "10.00",
        value: "",
    },
    {
        id: 8,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '8',
        name: "8",
        rate: "10.00",
        value: "",
    },
    {
        id: 9,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '9',
        name: "9",
        rate: "10.00",
        value: "",
    },
    {
        id: 10,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '10',
        name: "10",
        rate: "10.00",
        value: "",
    },
    {
        id: 11,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '11',
        name: "11",
        rate: "10.00",
        value: "",
    },
    {
        id: 12,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '12',
        name: "12",
        rate: "10.00",
        value: "",
    },
    {
        id: 13,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '13',
        name: "13",
        rate: "10.00",
        value: "",
    },
    {
        id: 14,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '14',
        name: "14",
        rate: "10.00",
        value: "",
    },
    {
        id: 15,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '15',
        name: "15",
        rate: "10.00",
        value: "",
    },
    {
        id: 16,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '16',
        name: "16",
        rate: "10.00",
        value: "",
    },
    {
        id: 17,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '17',
        name: "17",
        rate: "10.00",
        value: "",
    },
    {
        id: 18,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '18',
        name: "18",
        rate: "10.00",
        value: "",
    },
    {
        id: 19,
        icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
        num: '19',
        name: "19",
        rate: "10.00",
        value: "",
    },
    {
        id: 20,
        icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
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
    {
        id: 25,
        icon: "",
        num: "",
        name: "尾大",
        rate: "10.00",
        value: "",
    },
    {
        id: 26,
        icon: "",
        num: "",
        name: "尾小",
        rate: "10.00",
        value: "",
    },
    {
        id: 27,
        icon: "",
        num: "",
        name: "合单",
        rate: "10.00",
        value: "",
    },
    {
        id: 28,
        icon: "",
        num: "",
        name: "	合双",
        rate: "10.00",
        value: "",
    },
    {
        id: 29,
        icon: "",
        num: "",
        name: "东",
        rate: "10.00",
        value: "",
    },
    {
        id: 30,
        icon: "",
        num: "",
        name: "南",
        rate: "10.00",
        value: "",
    },
    {
        id: 31,
        icon: "",
        num: "",
        name: "西",
        rate: "10.00",
        value: "",
    },
    {
        id: 32,
        icon: "",
        num: "",
        name: "北",
        rate: "10.00",
        value: "",
    },
    {
        id: 33,
        icon: "",
        num: "",
        name: "中",
        rate: "10.00",
        value: "",
    },
    {
        id: 34,
        icon: "",
        num: "",
        name: "发",
        rate: "10.00",
        value: "",
    },
    {
        id: 35,
        icon: "",
        num: "",
        name: "白",
        rate: "10.00",
        value: "",
    },
]);

const ball_2_list = ref([
    {
        id: 36,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '1',
        name: "1",
        rate: "10.00",
        value: "",
    },
    {
        id: 37,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '2',
        name: "2",
        rate: "10.00",
        value: "",
    },
    {
        id: 38,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '3',
        name: "3",
        rate: "10.00",
        value: "",
    },
    {
        id: 39,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '4',
        name: "4",
        rate: "10.00",
        value: "",
    },
    {
        id: 40,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '5',
        name: "5",
        rate: "10.00",
        value: "",
    },
    {
        id: 41,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '6',
        name: "6",
        rate: "10.00",
        value: "",
    },
    {
        id: 42,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '7',
        name: "7",
        rate: "10.00",
        value: "",
    },
    {
        id: 43,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '8',
        name: "8",
        rate: "10.00",
        value: "",
    },
    {
        id: 44,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '9',
        name: "9",
        rate: "10.00",
        value: "",
    },
    {
        id: 45,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '10',
        name: "10",
        rate: "10.00",
        value: "",
    },
    {
        id: 46,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '11',
        name: "11",
        rate: "10.00",
        value: "",
    },
    {
        id: 47,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '12',
        name: "12",
        rate: "10.00",
        value: "",
    },
    {
        id: 48,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '13',
        name: "13",
        rate: "10.00",
        value: "",
    },
    {
        id: 49,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '14',
        name: "14",
        rate: "10.00",
        value: "",
    },
    {
        id: 50,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '15',
        name: "15",
        rate: "10.00",
        value: "",
    },
    {
        id: 51,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '16',
        name: "16",
        rate: "10.00",
        value: "",
    },
    {
        id: 52,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '17',
        name: "17",
        rate: "10.00",
        value: "",
    },
    {
        id: 53,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '18',
        name: "18",
        rate: "10.00",
        value: "",
    },
    {
        id: 54,
        icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
        num: '19',
        name: "19",
        rate: "10.00",
        value: "",
    },
    {
        id: 55,
        icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
        num: '20',
        name: "20",
        rate: "10.00",
        value: "",
    },
    {
        id: 56,
        icon: "",
        num: "",
        name: "大",
        rate: "10.00",
        value: "",
    },
    {
        id: 57,
        icon: "",
        num: "",
        name: "小",
        rate: "10.00",
        value: "",
    },
    {
        id: 58,
        icon: "",
        num: "",
        name: "单",
        rate: "10.00",
        value: "",
    },
    {
        id: 59,
        icon: "",
        num: "",
        name: "双",
        rate: "10.00",
        value: "",
    },
    {
        id: 60,
        icon: "",
        num: "",
        name: "尾大",
        rate: "10.00",
        value: "",
    },
    {
        id: 61,
        icon: "",
        num: "",
        name: "尾小",
        rate: "10.00",
        value: "",
    },
    {
        id: 62,
        icon: "",
        num: "",
        name: "合单",
        rate: "10.00",
        value: "",
    },
    {
        id: 63,
        icon: "",
        num: "",
        name: "	合双",
        rate: "10.00",
        value: "",
    },
    {
        id: 64,
        icon: "",
        num: "",
        name: "东",
        rate: "10.00",
        value: "",
    },
    {
        id: 65,
        icon: "",
        num: "",
        name: "南",
        rate: "10.00",
        value: "",
    },
    {
        id: 66,
        icon: "",
        num: "",
        name: "西",
        rate: "10.00",
        value: "",
    },
    {
        id: 67,
        icon: "",
        num: "",
        name: "北",
        rate: "10.00",
        value: "",
    },
    {
        id: 68,
        icon: "",
        num: "",
        name: "中",
        rate: "10.00",
        value: "",
    },
    {
        id: 69,
        icon: "",
        num: "",
        name: "发",
        rate: "10.00",
        value: "",
    },
    {
        id: 70,
        icon: "",
        num: "",
        name: "白",
        rate: "10.00",
        value: "",
    },
]);

const ball_3_list = ref([
    {
        id: 71,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '1',
        name: "1",
        rate: "10.00",
        value: "",
    },
    {
        id: 72,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '2',
        name: "2",
        rate: "10.00",
        value: "",
    },
    {
        id: 73,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '3',
        name: "3",
        rate: "10.00",
        value: "",
    },
    {
        id: 74,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '4',
        name: "4",
        rate: "10.00",
        value: "",
    },
    {
        id: 75,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '5',
        name: "5",
        rate: "10.00",
        value: "",
    },
    {
        id: 76,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '6',
        name: "6",
        rate: "10.00",
        value: "",
    },
    {
        id: 77,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '7',
        name: "7",
        rate: "10.00",
        value: "",
    },
    {
        id: 78,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '8',
        name: "8",
        rate: "10.00",
        value: "",
    },
    {
        id: 79,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '9',
        name: "9",
        rate: "10.00",
        value: "",
    },
    {
        id: 80,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '10',
        name: "10",
        rate: "10.00",
        value: "",
    },
    {
        id: 81,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '11',
        name: "11",
        rate: "10.00",
        value: "",
    },
    {
        id: 82,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '12',
        name: "12",
        rate: "10.00",
        value: "",
    },
    {
        id: 83,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '13',
        name: "13",
        rate: "10.00",
        value: "",
    },
    {
        id: 84,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '14',
        name: "14",
        rate: "10.00",
        value: "",
    },
    {
        id: 85,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '15',
        name: "15",
        rate: "10.00",
        value: "",
    },
    {
        id: 86,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '16',
        name: "16",
        rate: "10.00",
        value: "",
    },
    {
        id: 87,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '17',
        name: "17",
        rate: "10.00",
        value: "",
    },
    {
        id: 88,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '18',
        name: "18",
        rate: "10.00",
        value: "",
    },
    {
        id: 89,
        icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
        num: '19',
        name: "19",
        rate: "10.00",
        value: "",
    },
    {
        id: 90,
        icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
        num: '20',
        name: "20",
        rate: "10.00",
        value: "",
    },
    {
        id: 91,
        icon: "",
        num: "",
        name: "大",
        rate: "10.00",
        value: "",
    },
    {
        id: 92,
        icon: "",
        num: "",
        name: "小",
        rate: "10.00",
        value: "",
    },
    {
        id: 93,
        icon: "",
        num: "",
        name: "单",
        rate: "10.00",
        value: "",
    },
    {
        id: 94,
        icon: "",
        num: "",
        name: "双",
        rate: "10.00",
        value: "",
    },
    {
        id: 95,
        icon: "",
        num: "",
        name: "尾大",
        rate: "10.00",
        value: "",
    },
    {
        id: 96,
        icon: "",
        num: "",
        name: "尾小",
        rate: "10.00",
        value: "",
    },
    {
        id: 97,
        icon: "",
        num: "",
        name: "合单",
        rate: "10.00",
        value: "",
    },
    {
        id: 98,
        icon: "",
        num: "",
        name: "	合双",
        rate: "10.00",
        value: "",
    },
    {
        id: 99,
        icon: "",
        num: "",
        name: "东",
        rate: "10.00",
        value: "",
    },
    {
        id: 100,
        icon: "",
        num: "",
        name: "南",
        rate: "10.00",
        value: "",
    },
    {
        id: 101,
        icon: "",
        num: "",
        name: "西",
        rate: "10.00",
        value: "",
    },
    {
        id: 102,
        icon: "",
        num: "",
        name: "北",
        rate: "10.00",
        value: "",
    },
    {
        id: 103,
        icon: "",
        num: "",
        name: "中",
        rate: "10.00",
        value: "",
    },
    {
        id: 104,
        icon: "",
        num: "",
        name: "发",
        rate: "10.00",
        value: "",
    },
    {
        id: 105,
        icon: "",
        num: "",
        name: "白",
        rate: "10.00",
        value: "",
    },
]);

const ball_4_list = ref([
    {
        id: 106,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '1',
        name: "1",
        rate: "10.00",
        value: "",
    },
    {
        id: 107,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '2',
        name: "2",
        rate: "10.00",
        value: "",
    },
    {
        id: 108,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '3',
        name: "3",
        rate: "10.00",
        value: "",
    },
    {
        id: 109,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '4',
        name: "4",
        rate: "10.00",
        value: "",
    },
    {
        id: 110,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '5',
        name: "5",
        rate: "10.00",
        value: "",
    },
    {
        id: 111,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '6',
        name: "6",
        rate: "10.00",
        value: "",
    },
    {
        id: 112,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '7',
        name: "7",
        rate: "10.00",
        value: "",
    },
    {
        id: 113,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '8',
        name: "8",
        rate: "10.00",
        value: "",
    },
    {
        id: 114,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '9',
        name: "9",
        rate: "10.00",
        value: "",
    },
    {
        id: 115,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '10',
        name: "10",
        rate: "10.00",
        value: "",
    },
    {
        id: 116,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '11',
        name: "11",
        rate: "10.00",
        value: "",
    },
    {
        id: 117,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '12',
        name: "12",
        rate: "10.00",
        value: "",
    },
    {
        id: 118,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '13',
        name: "13",
        rate: "10.00",
        value: "",
    },
    {
        id: 119,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '14',
        name: "14",
        rate: "10.00",
        value: "",
    },
    {
        id: 120,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '15',
        name: "15",
        rate: "10.00",
        value: "",
    },
    {
        id: 121,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '16',
        name: "16",
        rate: "10.00",
        value: "",
    },
    {
        id: 122,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '17',
        name: "17",
        rate: "10.00",
        value: "",
    },
    {
        id: 123,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '18',
        name: "18",
        rate: "10.00",
        value: "",
    },
    {
        id: 124,
        icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
        num: '19',
        name: "19",
        rate: "10.00",
        value: "",
    },
    {
        id: 125,
        icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
        num: '20',
        name: "20",
        rate: "10.00",
        value: "",
    },
    {
        id: 126,
        icon: "",
        num: "",
        name: "大",
        rate: "10.00",
        value: "",
    },
    {
        id: 127,
        icon: "",
        num: "",
        name: "小",
        rate: "10.00",
        value: "",
    },
    {
        id: 128,
        icon: "",
        num: "",
        name: "单",
        rate: "10.00",
        value: "",
    },
    {
        id: 129,
        icon: "",
        num: "",
        name: "双",
        rate: "10.00",
        value: "",
    },
    {
        id: 130,
        icon: "",
        num: "",
        name: "尾大",
        rate: "10.00",
        value: "",
    },
    {
        id: 131,
        icon: "",
        num: "",
        name: "尾小",
        rate: "10.00",
        value: "",
    },
    {
        id: 132,
        icon: "",
        num: "",
        name: "合单",
        rate: "10.00",
        value: "",
    },
    {
        id: 133,
        icon: "",
        num: "",
        name: "	合双",
        rate: "10.00",
        value: "",
    },
    {
        id: 134,
        icon: "",
        num: "",
        name: "东",
        rate: "10.00",
        value: "",
    },
    {
        id: 135,
        icon: "",
        num: "",
        name: "南",
        rate: "10.00",
        value: "",
    },
    {
        id: 136,
        icon: "",
        num: "",
        name: "西",
        rate: "10.00",
        value: "",
    },
    {
        id: 137,
        icon: "",
        num: "",
        name: "北",
        rate: "10.00",
        value: "",
    },
    {
        id: 138,
        icon: "",
        num: "",
        name: "中",
        rate: "10.00",
        value: "",
    },
    {
        id: 139,
        icon: "",
        num: "",
        name: "发",
        rate: "10.00",
        value: "",
    },
    {
        id: 140,
        icon: "",
        num: "",
        name: "白",
        rate: "10.00",
        value: "",
    },
]);

const ball_5_list = ref([
    {
        id: 141,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '1',
        name: "1",
        rate: "10.00",
        value: "",
    },
    {
        id: 142,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '2',
        name: "2",
        rate: "10.00",
        value: "",
    },
    {
        id: 143,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '3',
        name: "3",
        rate: "10.00",
        value: "",
    },
    {
        id: 144,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '4',
        name: "4",
        rate: "10.00",
        value: "",
    },
    {
        id: 145,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '5',
        name: "5",
        rate: "10.00",
        value: "",
    },
    {
        id: 146,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '6',
        name: "6",
        rate: "10.00",
        value: "",
    },
    {
        id: 147,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '7',
        name: "7",
        rate: "10.00",
        value: "",
    },
    {
        id: 148,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '8',
        name: "8",
        rate: "10.00",
        value: "",
    },
    {
        id: 149,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '9',
        name: "9",
        rate: "10.00",
        value: "",
    },
    {
        id: 150,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '10',
        name: "10",
        rate: "10.00",
        value: "",
    },
    {
        id: 151,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '11',
        name: "11",
        rate: "10.00",
        value: "",
    },
    {
        id: 152,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '12',
        name: "12",
        rate: "10.00",
        value: "",
    },
    {
        id: 153,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '13',
        name: "13",
        rate: "10.00",
        value: "",
    },
    {
        id: 154,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '14',
        name: "14",
        rate: "10.00",
        value: "",
    },
    {
        id: 155,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '15',
        name: "15",
        rate: "10.00",
        value: "",
    },
    {
        id: 156,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '16',
        name: "16",
        rate: "10.00",
        value: "",
    },
    {
        id: 157,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '17',
        name: "17",
        rate: "10.00",
        value: "",
    },
    {
        id: 158,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '18',
        name: "18",
        rate: "10.00",
        value: "",
    },
    {
        id: 159,
        icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
        num: '19',
        name: "19",
        rate: "10.00",
        value: "",
    },
    {
        id: 160,
        icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
        num: '20',
        name: "20",
        rate: "10.00",
        value: "",
    },
    {
        id: 161,
        icon: "",
        num: "",
        name: "大",
        rate: "10.00",
        value: "",
    },
    {
        id: 162,
        icon: "",
        num: "",
        name: "小",
        rate: "10.00",
        value: "",
    },
    {
        id: 163,
        icon: "",
        num: "",
        name: "单",
        rate: "10.00",
        value: "",
    },
    {
        id: 164,
        icon: "",
        num: "",
        name: "双",
        rate: "10.00",
        value: "",
    },
    {
        id: 165,
        icon: "",
        num: "",
        name: "尾大",
        rate: "10.00",
        value: "",
    },
    {
        id: 166,
        icon: "",
        num: "",
        name: "尾小",
        rate: "10.00",
        value: "",
    },
    {
        id: 167,
        icon: "",
        num: "",
        name: "合单",
        rate: "10.00",
        value: "",
    },
    {
        id: 168,
        icon: "",
        num: "",
        name: "	合双",
        rate: "10.00",
        value: "",
    },
    {
        id: 169,
        icon: "",
        num: "",
        name: "东",
        rate: "10.00",
        value: "",
    },
    {
        id: 170,
        icon: "",
        num: "",
        name: "南",
        rate: "10.00",
        value: "",
    },
    {
        id: 171,
        icon: "",
        num: "",
        name: "西",
        rate: "10.00",
        value: "",
    },
    {
        id: 172,
        icon: "",
        num: "",
        name: "北",
        rate: "10.00",
        value: "",
    },
    {
        id: 173,
        icon: "",
        num: "",
        name: "中",
        rate: "10.00",
        value: "",
    },
    {
        id: 174,
        icon: "",
        num: "",
        name: "发",
        rate: "10.00",
        value: "",
    },
    {
        id: 175,
        icon: "",
        num: "",
        name: "白",
        rate: "10.00",
        value: "",
    },
]);

const ball_6_list = ref([
    {
        id: 176,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '1',
        name: "1",
        rate: "10.00",
        value: "",
    },
    {
        id: 177,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '2',
        name: "2",
        rate: "10.00",
        value: "",
    },
    {
        id: 178,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '3',
        name: "3",
        rate: "10.00",
        value: "",
    },
    {
        id: 179,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '4',
        name: "4",
        rate: "10.00",
        value: "",
    },
    {
        id: 180,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '5',
        name: "5",
        rate: "10.00",
        value: "",
    },
    {
        id: 181,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '6',
        name: "6",
        rate: "10.00",
        value: "",
    },
    {
        id: 182,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '7',
        name: "7",
        rate: "10.00",
        value: "",
    },
    {
        id: 183,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '8',
        name: "8",
        rate: "10.00",
        value: "",
    },
    {
        id: 184,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '9',
        name: "9",
        rate: "10.00",
        value: "",
    },
    {
        id: 185,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '10',
        name: "10",
        rate: "10.00",
        value: "",
    },
    {
        id: 186,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '11',
        name: "11",
        rate: "10.00",
        value: "",
    },
    {
        id: 187,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '12',
        name: "12",
        rate: "10.00",
        value: "",
    },
    {
        id: 188,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '13',
        name: "13",
        rate: "10.00",
        value: "",
    },
    {
        id: 189,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '14',
        name: "14",
        rate: "10.00",
        value: "",
    },
    {
        id: 190,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '15',
        name: "15",
        rate: "10.00",
        value: "",
    },
    {
        id: 191,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '16',
        name: "16",
        rate: "10.00",
        value: "",
    },
    {
        id: 192,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '17',
        name: "17",
        rate: "10.00",
        value: "",
    },
    {
        id: 193,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '18',
        name: "18",
        rate: "10.00",
        value: "",
    },
    {
        id: 194,
        icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
        num: '19',
        name: "19",
        rate: "10.00",
        value: "",
    },
    {
        id: 195,
        icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
        num: '20',
        name: "20",
        rate: "10.00",
        value: "",
    },
    {
        id: 196,
        icon: "",
        num: "",
        name: "大",
        rate: "10.00",
        value: "",
    },
    {
        id: 197,
        icon: "",
        num: "",
        name: "小",
        rate: "10.00",
        value: "",
    },
    {
        id: 198,
        icon: "",
        num: "",
        name: "单",
        rate: "10.00",
        value: "",
    },
    {
        id: 199,
        icon: "",
        num: "",
        name: "双",
        rate: "10.00",
        value: "",
    },
    {
        id: 200,
        icon: "",
        num: "",
        name: "尾大",
        rate: "10.00",
        value: "",
    },
    {
        id: 201,
        icon: "",
        num: "",
        name: "尾小",
        rate: "10.00",
        value: "",
    },
    {
        id: 202,
        icon: "",
        num: "",
        name: "合单",
        rate: "10.00",
        value: "",
    },
    {
        id: 203,
        icon: "",
        num: "",
        name: "	合双",
        rate: "10.00",
        value: "",
    },
    {
        id: 204,
        icon: "",
        num: "",
        name: "东",
        rate: "10.00",
        value: "",
    },
    {
        id: 205,
        icon: "",
        num: "",
        name: "南",
        rate: "10.00",
        value: "",
    },
    {
        id: 206,
        icon: "",
        num: "",
        name: "西",
        rate: "10.00",
        value: "",
    },
    {
        id: 207,
        icon: "",
        num: "",
        name: "北",
        rate: "10.00",
        value: "",
    },
    {
        id: 208,
        icon: "",
        num: "",
        name: "中",
        rate: "10.00",
        value: "",
    },
    {
        id: 209,
        icon: "",
        num: "",
        name: "发",
        rate: "10.00",
        value: "",
    },
    {
        id: 210,
        icon: "",
        num: "",
        name: "白",
        rate: "10.00",
        value: "",
    },
]);

const ball_7_list = ref([
    {
        id: 211,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '1',
        name: "1",
        rate: "10.00",
        value: "",
    },
    {
        id: 212,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '2',
        name: "2",
        rate: "10.00",
        value: "",
    },
    {
        id: 213,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '3',
        name: "3",
        rate: "10.00",
        value: "",
    },
    {
        id: 214,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '4',
        name: "4",
        rate: "10.00",
        value: "",
    },
    {
        id: 215,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '5',
        name: "5",
        rate: "10.00",
        value: "",
    },
    {
        id: 216,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '6',
        name: "6",
        rate: "10.00",
        value: "",
    },
    {
        id: 217,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '7',
        name: "7",
        rate: "10.00",
        value: "",
    },
    {
        id: 218,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '8',
        name: "8",
        rate: "10.00",
        value: "",
    },
    {
        id: 219,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '9',
        name: "9",
        rate: "10.00",
        value: "",
    },
    {
        id: 220,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '10',
        name: "10",
        rate: "10.00",
        value: "",
    },
    {
        id: 221,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '11',
        name: "11",
        rate: "10.00",
        value: "",
    },
    {
        id: 222,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '12',
        name: "12",
        rate: "10.00",
        value: "",
    },
    {
        id: 223,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '13',
        name: "13",
        rate: "10.00",
        value: "",
    },
    {
        id: 224,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '14',
        name: "14",
        rate: "10.00",
        value: "",
    },
    {
        id: 225,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '15',
        name: "15",
        rate: "10.00",
        value: "",
    },
    {
        id: 226,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '16',
        name: "16",
        rate: "10.00",
        value: "",
    },
    {
        id: 227,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '17',
        name: "17",
        rate: "10.00",
        value: "",
    },
    {
        id: 228,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '18',
        name: "18",
        rate: "10.00",
        value: "",
    },
    {
        id: 229,
        icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
        num: '19',
        name: "19",
        rate: "10.00",
        value: "",
    },
    {
        id: 230,
        icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
        num: '20',
        name: "20",
        rate: "10.00",
        value: "",
    },
    {
        id: 231,
        icon: "",
        num: "",
        name: "大",
        rate: "10.00",
        value: "",
    },
    {
        id: 232,
        icon: "",
        num: "",
        name: "小",
        rate: "10.00",
        value: "",
    },
    {
        id: 233,
        icon: "",
        num: "",
        name: "单",
        rate: "10.00",
        value: "",
    },
    {
        id: 234,
        icon: "",
        num: "",
        name: "双",
        rate: "10.00",
        value: "",
    },
    {
        id: 235,
        icon: "",
        num: "",
        name: "尾大",
        rate: "10.00",
        value: "",
    },
    {
        id: 236,
        icon: "",
        num: "",
        name: "尾小",
        rate: "10.00",
        value: "",
    },
    {
        id: 237,
        icon: "",
        num: "",
        name: "合单",
        rate: "10.00",
        value: "",
    },
    {
        id: 238,
        icon: "",
        num: "",
        name: "	合双",
        rate: "10.00",
        value: "",
    },
    {
        id: 239,
        icon: "",
        num: "",
        name: "东",
        rate: "10.00",
        value: "",
    },
    {
        id: 240,
        icon: "",
        num: "",
        name: "南",
        rate: "10.00",
        value: "",
    },
    {
        id: 241,
        icon: "",
        num: "",
        name: "西",
        rate: "10.00",
        value: "",
    },
    {
        id: 242,
        icon: "",
        num: "",
        name: "北",
        rate: "10.00",
        value: "",
    },
    {
        id: 243,
        icon: "",
        num: "",
        name: "中",
        rate: "10.00",
        value: "",
    },
    {
        id: 244,
        icon: "",
        num: "",
        name: "发",
        rate: "10.00",
        value: "",
    },
    {
        id: 245,
        icon: "",
        num: "",
        name: "白",
        rate: "10.00",
        value: "",
    },
]);

const ball_8_list = ref([
    {
        id: 246,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '1',
        name: "1",
        rate: "10.00",
        value: "",
    },
    {
        id: 247,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '2',
        name: "2",
        rate: "10.00",
        value: "",
    },
    {
        id: 248,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '3',
        name: "3",
        rate: "10.00",
        value: "",
    },
    {
        id: 249,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '4',
        name: "4",
        rate: "10.00",
        value: "",
    },
    {
        id: 250,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '5',
        name: "5",
        rate: "10.00",
        value: "",
    },
    {
        id: 251,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '6',
        name: "6",
        rate: "10.00",
        value: "",
    },
    {
        id: 252,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '7',
        name: "7",
        rate: "10.00",
        value: "",
    },
    {
        id: 253,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '8',
        name: "8",
        rate: "10.00",
        value: "",
    },
    {
        id: 254,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '9',
        name: "9",
        rate: "10.00",
        value: "",
    },
    {
        id: 255,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '10',
        name: "10",
        rate: "10.00",
        value: "",
    },
    {
        id: 256,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '11',
        name: "11",
        rate: "10.00",
        value: "",
    },
    {
        id: 257,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '12',
        name: "12",
        rate: "10.00",
        value: "",
    },
    {
        id: 258,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '13',
        name: "13",
        rate: "10.00",
        value: "",
    },
    {
        id: 259,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '14',
        name: "14",
        rate: "10.00",
        value: "",
    },
    {
        id: 260,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '15',
        name: "15",
        rate: "10.00",
        value: "",
    },
    {
        id: 261,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '16',
        name: "16",
        rate: "10.00",
        value: "",
    },
    {
        id: 262,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '17',
        name: "17",
        rate: "10.00",
        value: "",
    },
    {
        id: 263,
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '18',
        name: "18",
        rate: "10.00",
        value: "",
    },
    {
        id: 264,
        icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
        num: '19',
        name: "19",
        rate: "10.00",
        value: "",
    },
    {
        id: 265,
        icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
        num: '20',
        name: "20",
        rate: "10.00",
        value: "",
    },
    {
        id: 266,
        icon: "",
        num: "",
        name: "大",
        rate: "10.00",
        value: "",
    },
    {
        id: 267,
        icon: "",
        num: "",
        name: "小",
        rate: "10.00",
        value: "",
    },
    {
        id: 268,
        icon: "",
        num: "",
        name: "单",
        rate: "10.00",
        value: "",
    },
    {
        id: 269,
        icon: "",
        num: "",
        name: "双",
        rate: "10.00",
        value: "",
    },
    {
        id: 270,
        icon: "",
        num: "",
        name: "尾大",
        rate: "10.00",
        value: "",
    },
    {
        id: 271,
        icon: "",
        num: "",
        name: "尾小",
        rate: "10.00",
        value: "",
    },
    {
        id: 272,
        icon: "",
        num: "",
        name: "合单",
        rate: "10.00",
        value: "",
    },
    {
        id: 273,
        icon: "",
        num: "",
        name: "	合双",
        rate: "10.00",
        value: "",
    },
    {
        id: 274,
        icon: "",
        num: "",
        name: "东",
        rate: "10.00",
        value: "",
    },
    {
        id: 275,
        icon: "",
        num: "",
        name: "南",
        rate: "10.00",
        value: "",
    },
    {
        id: 276,
        icon: "",
        num: "",
        name: "西",
        rate: "10.00",
        value: "",
    },
    {
        id: 277,
        icon: "",
        num: "",
        name: "北",
        rate: "10.00",
        value: "",
    },
    {
        id: 278,
        icon: "",
        num: "",
        name: "中",
        rate: "10.00",
        value: "",
    },
    {
        id: 279,
        icon: "",
        num: "",
        name: "发",
        rate: "10.00",
        value: "",
    },
    {
        id: 280,
        icon: "",
        num: "",
        name: "白",
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

    ball_6_list.value.map((item: any) => {
        if (item.value !== "") {
            selectedCount.value++;
            selectedBetAmount.value += Number(item.value);
            winAmount.value += Number(item.value) * item.rate - item.value;
            let data = {
                quick_type: "第六球",
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
                quick_type: "第七球",
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
                quick_type: "第八球",
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
}, { deep: true });

watch(lotteryOddsList, () => {
    lotteryOddsList.value.map((item: any) => {
        if (item.sub_type == "单面双码" && item.ball_type == "ball_1") {
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
            ball_1_list.value[24].rate = item.h25;
            ball_1_list.value[25].rate = item.h26;
            ball_1_list.value[26].rate = item.h27;
            ball_1_list.value[27].rate = item.h28;
        }
        if (item.sub_type == "方位中发白" && item.ball_type == "ball_1") {
            ball_1_list.value[28].rate = item.h1;
            ball_1_list.value[29].rate = item.h2;
            ball_1_list.value[30].rate = item.h3;
            ball_1_list.value[31].rate = item.h4;
            ball_1_list.value[32].rate = item.h5;
            ball_1_list.value[33].rate = item.h6;
            ball_1_list.value[34].rate = item.h7;
        }
        if (item.sub_type == "单面双码" && item.ball_type == "ball_2") {
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
            ball_2_list.value[24].rate = item.h25;
            ball_2_list.value[25].rate = item.h26;
            ball_2_list.value[26].rate = item.h27;
            ball_2_list.value[27].rate = item.h28;
        }
        if (item.sub_type == "方位中发白" && item.ball_type == "ball_2") {
            ball_2_list.value[28].rate = item.h1;
            ball_2_list.value[29].rate = item.h2;
            ball_2_list.value[30].rate = item.h3;
            ball_2_list.value[31].rate = item.h4;
            ball_2_list.value[32].rate = item.h5;
            ball_2_list.value[33].rate = item.h6;
            ball_2_list.value[34].rate = item.h7;
        }
        if (item.sub_type == "单面双码" && item.ball_type == "ball_3") {
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
            ball_3_list.value[24].rate = item.h25;
            ball_3_list.value[25].rate = item.h26;
            ball_3_list.value[26].rate = item.h27;
            ball_3_list.value[27].rate = item.h28;
        }
        if (item.sub_type == "方位中发白" && item.ball_type == "ball_3") {
            ball_3_list.value[28].rate = item.h1;
            ball_3_list.value[29].rate = item.h2;
            ball_3_list.value[30].rate = item.h3;
            ball_3_list.value[31].rate = item.h4;
            ball_3_list.value[32].rate = item.h5;
            ball_3_list.value[33].rate = item.h6;
            ball_3_list.value[34].rate = item.h7;
        }
        if (item.sub_type == "单面双码" && item.ball_type == "ball_4") {
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
            ball_4_list.value[24].rate = item.h25;
            ball_4_list.value[25].rate = item.h26;
            ball_4_list.value[26].rate = item.h27;
            ball_4_list.value[27].rate = item.h28;
        }
        if (item.sub_type == "方位中发白" && item.ball_type == "ball_4") {
            ball_4_list.value[28].rate = item.h1;
            ball_4_list.value[29].rate = item.h2;
            ball_4_list.value[30].rate = item.h3;
            ball_4_list.value[31].rate = item.h4;
            ball_4_list.value[32].rate = item.h5;
            ball_4_list.value[33].rate = item.h6;
            ball_4_list.value[34].rate = item.h7;
        }
        if (item.sub_type == "单面双码" && item.ball_type == "ball_5") {
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
            ball_5_list.value[24].rate = item.h25;
            ball_5_list.value[25].rate = item.h26;
            ball_5_list.value[26].rate = item.h27;
            ball_5_list.value[27].rate = item.h28;
        }
        if (item.sub_type == "方位中发白" && item.ball_type == "ball_5") {
            ball_5_list.value[28].rate = item.h1;
            ball_5_list.value[29].rate = item.h2;
            ball_5_list.value[30].rate = item.h3;
            ball_5_list.value[31].rate = item.h4;
            ball_5_list.value[32].rate = item.h5;
            ball_5_list.value[33].rate = item.h6;
            ball_5_list.value[34].rate = item.h7;
        }
        if (item.sub_type == "单面双码" && item.ball_type == "ball_6") {
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
            ball_6_list.value[10].rate = item.h11;
            ball_6_list.value[11].rate = item.h12;
            ball_6_list.value[12].rate = item.h13;
            ball_6_list.value[13].rate = item.h14;
            ball_6_list.value[14].rate = item.h15;
            ball_6_list.value[15].rate = item.h16;
            ball_6_list.value[16].rate = item.h17;
            ball_6_list.value[17].rate = item.h18;
            ball_6_list.value[18].rate = item.h19;
            ball_6_list.value[19].rate = item.h20;
            ball_6_list.value[20].rate = item.h21;
            ball_6_list.value[21].rate = item.h22;
            ball_6_list.value[22].rate = item.h23;
            ball_6_list.value[23].rate = item.h24;
            ball_6_list.value[24].rate = item.h25;
            ball_6_list.value[25].rate = item.h26;
            ball_6_list.value[26].rate = item.h27;
            ball_6_list.value[27].rate = item.h28;
        }
        if (item.sub_type == "方位中发白" && item.ball_type == "ball_6") {
            ball_6_list.value[28].rate = item.h1;
            ball_6_list.value[29].rate = item.h2;
            ball_6_list.value[30].rate = item.h3;
            ball_6_list.value[31].rate = item.h4;
            ball_6_list.value[32].rate = item.h5;
            ball_6_list.value[33].rate = item.h6;
            ball_6_list.value[34].rate = item.h7;
        }
        if (item.sub_type == "单面双码" && item.ball_type == "ball_7") {
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
            ball_7_list.value[10].rate = item.h11;
            ball_7_list.value[11].rate = item.h12;
            ball_7_list.value[12].rate = item.h13;
            ball_7_list.value[13].rate = item.h14;
            ball_7_list.value[14].rate = item.h15;
            ball_7_list.value[15].rate = item.h16;
            ball_7_list.value[16].rate = item.h17;
            ball_7_list.value[17].rate = item.h18;
            ball_7_list.value[18].rate = item.h19;
            ball_7_list.value[19].rate = item.h20;
            ball_7_list.value[20].rate = item.h21;
            ball_7_list.value[21].rate = item.h22;
            ball_7_list.value[22].rate = item.h23;
            ball_7_list.value[23].rate = item.h24;
            ball_7_list.value[24].rate = item.h25;
            ball_7_list.value[25].rate = item.h26;
            ball_7_list.value[26].rate = item.h27;
            ball_7_list.value[27].rate = item.h28;
        }
        if (item.sub_type == "方位中发白" && item.ball_type == "ball_7") {
            ball_7_list.value[28].rate = item.h1;
            ball_7_list.value[29].rate = item.h2;
            ball_7_list.value[30].rate = item.h3;
            ball_7_list.value[31].rate = item.h4;
            ball_7_list.value[32].rate = item.h5;
            ball_7_list.value[33].rate = item.h6;
            ball_7_list.value[34].rate = item.h7;
        }
        if (item.sub_type == "单面双码" && item.ball_type == "ball_8") {
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
            ball_8_list.value[10].rate = item.h11;
            ball_8_list.value[11].rate = item.h12;
            ball_8_list.value[12].rate = item.h13;
            ball_8_list.value[13].rate = item.h14;
            ball_8_list.value[14].rate = item.h15;
            ball_8_list.value[15].rate = item.h16;
            ball_8_list.value[16].rate = item.h17;
            ball_8_list.value[17].rate = item.h18;
            ball_8_list.value[18].rate = item.h19;
            ball_8_list.value[19].rate = item.h20;
            ball_8_list.value[20].rate = item.h21;
            ball_8_list.value[21].rate = item.h22;
            ball_8_list.value[22].rate = item.h23;
            ball_8_list.value[23].rate = item.h24;
            ball_8_list.value[24].rate = item.h25;
            ball_8_list.value[25].rate = item.h26;
            ball_8_list.value[26].rate = item.h27;
            ball_8_list.value[27].rate = item.h28;
        }
        if (item.sub_type == "方位中发白" && item.ball_type == "ball_8") {
            ball_8_list.value[28].rate = item.h1;
            ball_8_list.value[29].rate = item.h2;
            ball_8_list.value[30].rate = item.h3;
            ball_8_list.value[31].rate = item.h4;
            ball_8_list.value[32].rate = item.h5;
            ball_8_list.value[33].rate = item.h6;
            ball_8_list.value[34].rate = item.h7;
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
}, { deep: true });
onMounted(() => {
});
</script>
  
<style></style>
  