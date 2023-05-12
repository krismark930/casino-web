<template>
    <van-tabs v-model:active="activeName">
        <van-tab title="1V10 龙虎" name="dragon_tiger_1">
            <div class="animated fadeInLeft">
                <div class="m-[6px] py-[3px] px-[15px] flex items-center justify-center">
                    <div class="w-full grid grid-cols-3 gap-1">
                        <div v-for="(item, index) in dragon_tiger_list_1" :key="index">
                            <lotteryAlwaysColorItem1 :item="item" :disabled="disabled" @changeItem="changeItem"
                                @betResult="betResult" />
                        </div>
                    </div>
                </div>
            </div>
        </van-tab>
        <van-tab title="2V9 龙虎" name="dragon_tiger_2">
            <div class="animated fadeInLeft">
                <div class="m-[6px] py-[3px] px-[15px] flex items-center justify-center">
                    <div class="w-full grid grid-cols-3 gap-1">
                        <div v-for="(item, index) in dragon_tiger_list_2" :key="index">
                            <lotteryAlwaysColorItem1 :item="item" :disabled="disabled" @changeItem="changeItem"
                                @betResult="betResult" />
                        </div>
                    </div>
                </div>
            </div>
        </van-tab>
        <van-tab title="3V8 龙虎" name="dragon_tiger_3">
            <div class="animated fadeInLeft">
                <div class="m-[6px] py-[3px] px-[15px] flex items-center justify-center">
                    <div class="w-full grid grid-cols-3 gap-1">
                        <div v-for="(item, index) in dragon_tiger_list_3" :key="index">
                            <lotteryAlwaysColorItem1 :item="item" :disabled="disabled" @changeItem="changeItem"
                                @betResult="betResult" />
                        </div>
                    </div>
                </div>
            </div>
        </van-tab>
        <van-tab title="4V7 龙虎" name="dragon_tiger_4">
            <div class="animated fadeInLeft">
                <div class="m-[6px] py-[3px] px-[15px] flex items-center justify-center">
                    <div class="w-full grid grid-cols-3 gap-1">
                        <div v-for="(item, index) in dragon_tiger_list_4" :key="index">
                            <lotteryAlwaysColorItem1 :item="item" :disabled="disabled" @changeItem="changeItem"
                                @betResult="betResult" />
                        </div>
                    </div>
                </div>
            </div>
        </van-tab>
        <van-tab title="5V6 龙虎" name="dragon_tiger_5">
            <div class="animated fadeInLeft">
                <div class="m-[6px] py-[3px] px-[15px] flex items-center justify-center">
                    <div class="w-full grid grid-cols-3 gap-1">
                        <div v-for="(item, index) in dragon_tiger_list_5" :key="index">
                            <lotteryAlwaysColorItem1 :item="item" :disabled="disabled" @changeItem="changeItem"
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
import lotteryAlwaysColorItem1 from "@/components/global/lotteryAlwaysColorItem1.vue";
const props = defineProps<{ lotteryOddsList: any, initialize: boolean, disabled: boolean }>();
const emit = defineEmits<{
    (e: "submitItem3", emitItem: any): void;
}>();
const { lotteryOddsList, initialize, disabled } = toRefs(props);
const keyboardShow = ref(false);
const activeName = ref("dragon_tiger_1");
const selectedId = ref(0);
const singleGold = ref("");
const selectedCount = ref(0);
const selectedBetAmount = ref(0);
const winAmount = ref(0);
const selectedItemList = ref([]);

const dragon_tiger_list_1 = ref([
    {
        id: 1,
        icon: "",
        num: "",
        name: "龙",
        rate: "10.00",
        value: "",
    },
    {
        id: 2,
        icon: "",
        num: "",
        name: "虎",
        rate: "10.00",
        value: "",
    },
]);

const dragon_tiger_list_2 = ref([
    {
        id: 3,
        icon: "",
        num: "",
        name: "龙",
        rate: "10.00",
        value: "",
    },
    {
        id: 4,
        icon: "",
        num: "",
        name: "虎",
        rate: "10.00",
        value: "",
    },
]);

const dragon_tiger_list_3 = ref([
    {
        id: 5,
        icon: "",
        num: "",
        name: "龙",
        rate: "10.00",
        value: "",
    },
    {
        id: 6,
        icon: "",
        num: "",
        name: "虎",
        rate: "10.00",
        value: "",
    },
]);

const dragon_tiger_list_4 = ref([
    {
        id: 7,
        icon: "",
        num: "",
        name: "龙",
        rate: "10.00",
        value: "",
    },
    {
        id: 8,
        icon: "",
        num: "",
        name: "虎",
        rate: "10.00",
        value: "",
    },
]);

const dragon_tiger_list_5 = ref([
    {
        id: 9,
        icon: "",
        num: "",
        name: "龙",
        rate: "10.00",
        value: "",
    },
    {
        id: 10,
        icon: "",
        num: "",
        name: "虎",
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

    dragon_tiger_list_1.value.map((item: any) => {
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

    dragon_tiger_list_2.value.map((item: any) => {
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

    dragon_tiger_list_3.value.map((item: any) => {
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

    dragon_tiger_list_4.value.map((item: any) => {
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

    dragon_tiger_list_5.value.map((item: any) => {
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

    let emitData = {
        selectedCount: selectedCount.value,
        selectedBetAmount: selectedBetAmount.value,
        winAmount: winAmount.value,
        selectedItemList: selectedItemList.value
    };
    emit("submitItem3", emitData);
};

watch(singleGold, () => {
    dragon_tiger_list_1.value.map((item: any) => {
        if (item.id === selectedId.value) {
            item.value = singleGold.value;
        }
    });
    dragon_tiger_list_2.value.map((item: any) => {
        if (item.id === selectedId.value) {
            item.value = singleGold.value;
        }
    });
    dragon_tiger_list_3.value.map((item: any) => {
        if (item.id === selectedId.value) {
            item.value = singleGold.value;
        }
    });
    dragon_tiger_list_4.value.map((item: any) => {
        if (item.id === selectedId.value) {
            item.value = singleGold.value;
        }
    });
    dragon_tiger_list_5.value.map((item: any) => {
        if (item.id === selectedId.value) {
            item.value = singleGold.value;
        }
    });
}, { deep: true });

watch(lotteryOddsList, () => {
    lotteryOddsList.value.map((item: any) => {
        if (item.sub_type == "主盘势" && item.ball_type == "ball_1") {
            dragon_tiger_list_1.value[0].rate = item.h5;
            dragon_tiger_list_1.value[1].rate = item.h6;
        }
        if (item.sub_type == "主盘势" && item.ball_type == "ball_2") {
            dragon_tiger_list_2.value[0].rate = item.h5;
            dragon_tiger_list_2.value[1].rate = item.h6;
        }
        if (item.sub_type == "主盘势" && item.ball_type == "ball_3") {
            dragon_tiger_list_3.value[0].rate = item.h5;
            dragon_tiger_list_3.value[1].rate = item.h6;
        }
        if (item.sub_type == "主盘势" && item.ball_type == "ball_4") {
            dragon_tiger_list_4.value[0].rate = item.h5;
            dragon_tiger_list_4.value[1].rate = item.h6;
        }
        if (item.sub_type == "主盘势" && item.ball_type == "ball_5") {
            dragon_tiger_list_5.value[0].rate = item.h5;
            dragon_tiger_list_5.value[1].rate = item.h6;
        }
    })
})

watch(initialize, () => {
    dragon_tiger_list_1.value.map((item: any) => {
        item.value = "";
    })
    dragon_tiger_list_2.value.map((item: any) => {
        item.value = "";
    })
    dragon_tiger_list_3.value.map((item: any) => {
        item.value = "";
    })
    dragon_tiger_list_4.value.map((item: any) => {
        item.value = "";
    })
    dragon_tiger_list_5.value.map((item: any) => {
        item.value = "";
    })
}, { deep: true });
onMounted(() => {
});
</script>
  
<style></style>
  