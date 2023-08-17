<template>
    <div class="text-center h-[30px] bg-[#e8f6ff] px-2 shadow-md text-[20px] font-bold">
        一字定位
    </div>
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
        num: '0',
        name: "0",
        rate: "10.00",
        value: "",
    },
    {
        id: 2,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '1',
        name: "1",
        rate: "10.00",
        value: "",
    },
    {
        id: 3,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '2',
        name: "2",
        rate: "10.00",
        value: "",
    },
    {
        id: 4,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '3',
        name: "3",
        rate: "10.00",
        value: "",
    },
    {
        id: 5,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '4',
        name: "4",
        rate: "10.00",
        value: "",
    },
    {
        id: 6,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '5',
        name: "5",
        rate: "10.00",
        value: "",
    },
    {
        id: 7,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '6',
        name: "6",
        rate: "10.00",
        value: "",
    },
    {
        id: 8,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '7',
        name: "7",
        rate: "10.00",
        value: "",
    },
    {
        id: 9,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '8',
        name: "8",
        rate: "10.00",
        value: "",
    },
    {
        id: 10,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '9',
        name: "9",
        rate: "10.00",
        value: "",
    },
    {
        id: 11,
        icon: "",
        num: "",
        name: "大",
        rate: "10.00",
        value: "",
    },
    {
        id: 12,
        icon: "",
        num: "",
        name: "小",
        rate: "10.00",
        value: "",
    },
    {
        id: 13,
        icon: "",
        num: "",
        name: "单",
        rate: "10.00",
        value: "",
    },
    {
        id: 14,
        icon: "",
        num: "",
        name: "双",
        rate: "10.00",
        value: "",
    },
]);

const ball_2_list = ref([
    {
        id: 15,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '0',
        name: "0",
        rate: "10.00",
        value: "",
    },
    {
        id: 16,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '1',
        name: "1",
        rate: "10.00",
        value: "",
    },
    {
        id: 17,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '2',
        name: "2",
        rate: "10.00",
        value: "",
    },
    {
        id: 18,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '3',
        name: "3",
        rate: "10.00",
        value: "",
    },
    {
        id: 19,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '4',
        name: "4",
        rate: "10.00",
        value: "",
    },
    {
        id: 20,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '5',
        name: "5",
        rate: "10.00",
        value: "",
    },
    {
        id: 21,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '6',
        name: "6",
        rate: "10.00",
        value: "",
    },
    {
        id: 22,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '7',
        name: "7",
        rate: "10.00",
        value: "",
    },
    {
        id: 23,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '8',
        name: "8",
        rate: "10.00",
        value: "",
    },
    {
        id: 24,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '9',
        name: "9",
        rate: "10.00",
        value: "",
    },
    {
        id: 25,
        icon: "",
        num: "",
        name: "大",
        rate: "10.00",
        value: "",
    },
    {
        id: 26,
        icon: "",
        num: "",
        name: "小",
        rate: "10.00",
        value: "",
    },
    {
        id: 27,
        icon: "",
        num: "",
        name: "单",
        rate: "10.00",
        value: "",
    },
    {
        id: 28,
        icon: "",
        num: "",
        name: "双",
        rate: "10.00",
        value: "",
    },
]);

const ball_3_list = ref([
    {
        id: 29,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '0',
        name: "0",
        rate: "10.00",
        value: "",
    },
    {
        id: 30,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '1',
        name: "1",
        rate: "10.00",
        value: "",
    },
    {
        id: 31,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '2',
        name: "2",
        rate: "10.00",
        value: "",
    },
    {
        id: 32,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '3',
        name: "3",
        rate: "10.00",
        value: "",
    },
    {
        id: 33,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '4',
        name: "4",
        rate: "10.00",
        value: "",
    },
    {
        id: 34,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '5',
        name: "5",
        rate: "10.00",
        value: "",
    },
    {
        id: 35,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '6',
        name: "6",
        rate: "10.00",
        value: "",
    },
    {
        id: 36,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '7',
        name: "7",
        rate: "10.00",
        value: "",
    },
    {
        id: 37,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '8',
        name: "8",
        rate: "10.00",
        value: "",
    },
    {
        id: 38,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '9',
        name: "9",
        rate: "10.00",
        value: "",
    },
    {
        id: 39,
        icon: "",
        num: "",
        name: "大",
        rate: "10.00",
        value: "",
    },
    {
        id: 40,
        icon: "",
        num: "",
        name: "小",
        rate: "10.00",
        value: "",
    },
    {
        id: 41,
        icon: "",
        num: "",
        name: "单",
        rate: "10.00",
        value: "",
    },
    {
        id: 42,
        icon: "",
        num: "",
        name: "双",
        rate: "10.00",
        value: "",
    },
]);

const ball_4_list = ref([
    {
        id: 43,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '0',
        name: "0",
        rate: "10.00",
        value: "",
    },
    {
        id: 44,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '1',
        name: "1",
        rate: "10.00",
        value: "",
    },
    {
        id: 45,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '2',
        name: "2",
        rate: "10.00",
        value: "",
    },
    {
        id: 46,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '3',
        name: "3",
        rate: "10.00",
        value: "",
    },
    {
        id: 47,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '4',
        name: "4",
        rate: "10.00",
        value: "",
    },
    {
        id: 48,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '5',
        name: "5",
        rate: "10.00",
        value: "",
    },
    {
        id: 49,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '6',
        name: "6",
        rate: "10.00",
        value: "",
    },
    {
        id: 50,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '7',
        name: "7",
        rate: "10.00",
        value: "",
    },
    {
        id: 51,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '8',
        name: "8",
        rate: "10.00",
        value: "",
    },
    {
        id: 52,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '9',
        name: "9",
        rate: "10.00",
        value: "",
    },
    {
        id: 53,
        icon: "",
        num: "",
        name: "大",
        rate: "10.00",
        value: "",
    },
    {
        id: 54,
        icon: "",
        num: "",
        name: "小",
        rate: "10.00",
        value: "",
    },
    {
        id: 55,
        icon: "",
        num: "",
        name: "单",
        rate: "10.00",
        value: "",
    },
    {
        id: 56,
        icon: "",
        num: "",
        name: "双",
        rate: "10.00",
        value: "",
    },
]);

const ball_5_list = ref([
    {
        id: 57,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '0',
        name: "0",
        rate: "10.00",
        value: "",
    },
    {
        id: 58,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '1',
        name: "1",
        rate: "10.00",
        value: "",
    },
    {
        id: 59,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '2',
        name: "2",
        rate: "10.00",
        value: "",
    },
    {
        id: 60,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '3',
        name: "3",
        rate: "10.00",
        value: "",
    },
    {
        id: 61,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '4',
        name: "4",
        rate: "10.00",
        value: "",
    },
    {
        id: 62,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '5',
        name: "5",
        rate: "10.00",
        value: "",
    },
    {
        id: 63,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '6',
        name: "6",
        rate: "10.00",
        value: "",
    },
    {
        id: 64,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '7',
        name: "7",
        rate: "10.00",
        value: "",
    },
    {
        id: 65,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '8',
        name: "8",
        rate: "10.00",
        value: "",
    },
    {
        id: 66,
        icon: new URL("@/assets/images/fastthree/icon-circle-active-red.png", import.meta.url).href,
        num: '9',
        name: "9",
        rate: "10.00",
        value: "",
    },
    {
        id: 67,
        icon: "",
        num: "",
        name: "大",
        rate: "10.00",
        value: "",
    },
    {
        id: 68,
        icon: "",
        num: "",
        name: "小",
        rate: "10.00",
        value: "",
    },
    {
        id: 69,
        icon: "",
        num: "",
        name: "单",
        rate: "10.00",
        value: "",
    },
    {
        id: 70,
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
        if (item.sub_type == "万定位") {
            ball_1_list.value[0].rate = item.h0;
            ball_1_list.value[1].rate = item.h1;
            ball_1_list.value[2].rate = item.h2;
            ball_1_list.value[3].rate = item.h3;
            ball_1_list.value[4].rate = item.h4;
            ball_1_list.value[5].rate = item.h5;
            ball_1_list.value[6].rate = item.h6;
            ball_1_list.value[7].rate = item.h7;
            ball_1_list.value[8].rate = item.h8;
            ball_1_list.value[9].rate = item.h9;
        }
        if (item.sub_type == "两面" && item.ball_type == "part1") {
            ball_1_list.value[10].rate = item.h2
            ball_1_list.value[11].rate = item.h3
            ball_1_list.value[12].rate = item.h0
            ball_1_list.value[13].rate = item.h1

            ball_2_list.value[10].rate = item.h8
            ball_2_list.value[11].rate = item.h9
            ball_2_list.value[12].rate = item.h6
            ball_2_list.value[13].rate = item.h7
            
            ball_3_list.value[10].rate = item.h14
            ball_3_list.value[11].rate = item.h15
            ball_3_list.value[12].rate = item.h12
            ball_3_list.value[13].rate = item.h13
            
            ball_4_list.value[10].rate = item.h20
            ball_4_list.value[11].rate = item.h21
            ball_4_list.value[12].rate = item.h18
            ball_4_list.value[13].rate = item.h19
            
            ball_5_list.value[10].rate = item.h26
            ball_5_list.value[11].rate = item.h27
            ball_5_list.value[12].rate = item.h24
            ball_5_list.value[13].rate = item.h25
        }
        if (item.sub_type == "仟定位") {
            ball_2_list.value[0].rate = item.h0;
            ball_2_list.value[1].rate = item.h1;
            ball_2_list.value[2].rate = item.h2;
            ball_2_list.value[3].rate = item.h3;
            ball_2_list.value[4].rate = item.h4;
            ball_2_list.value[5].rate = item.h5;
            ball_2_list.value[6].rate = item.h6;
            ball_2_list.value[7].rate = item.h7;
            ball_2_list.value[8].rate = item.h8;
            ball_2_list.value[9].rate = item.h9;
        }
        if (item.sub_type == "佰定位") {
            ball_3_list.value[0].rate = item.h0;
            ball_3_list.value[1].rate = item.h1;
            ball_3_list.value[2].rate = item.h2;
            ball_3_list.value[3].rate = item.h3;
            ball_3_list.value[4].rate = item.h4;
            ball_3_list.value[5].rate = item.h5;
            ball_3_list.value[6].rate = item.h6;
            ball_3_list.value[7].rate = item.h7;
            ball_3_list.value[8].rate = item.h8;
            ball_3_list.value[9].rate = item.h9;
        }
        if (item.sub_type == "拾定位") {
            ball_4_list.value[0].rate = item.h0;
            ball_4_list.value[1].rate = item.h1;
            ball_4_list.value[2].rate = item.h2;
            ball_4_list.value[3].rate = item.h3;
            ball_4_list.value[4].rate = item.h4;
            ball_4_list.value[5].rate = item.h5;
            ball_4_list.value[6].rate = item.h6;
            ball_4_list.value[7].rate = item.h7;
            ball_4_list.value[8].rate = item.h8;
            ball_4_list.value[9].rate = item.h9;
        }
        if (item.sub_type == "个定位") {
            ball_5_list.value[0].rate = item.h0;
            ball_5_list.value[1].rate = item.h1;
            ball_5_list.value[2].rate = item.h2;
            ball_5_list.value[3].rate = item.h3;
            ball_5_list.value[4].rate = item.h4;
            ball_5_list.value[5].rate = item.h5;
            ball_5_list.value[6].rate = item.h6;
            ball_5_list.value[7].rate = item.h7;
            ball_5_list.value[8].rate = item.h8;
            ball_5_list.value[9].rate = item.h9;
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
  