<template>
    <div class="text-center h-[30px] bg-[#e8f6ff] px-2 shadow-md text-[20px] font-bold">
        跨度
    </div>
    <div class="animated fadeInLeft">
        <div class="m-[6px] py-[3px] px-[15px] flex items-center justify-center">
            <div class="w-full grid grid-cols-3 gap-1">
                <div v-for="(item, index) in span_list" :key="index">
                    <LotteryAlwaysColorItem :item="item" :disabled="disabled" @changeItem="changeItem" @betResult="betResult" />
                </div>
            </div>
        </div>
    </div>
    <van-number-keyboard v-model="singleGold" :show="keyboardShow" :maxlength="20" @blur="keyboardShow = false" />
</template>
<script setup lang="ts">
import { ref, computed, onMounted, watch, toRefs, defineEmits } from "vue";
import LotteryAlwaysColorItem from "@/components/global/LotteryAlwaysColorItem.vue";
const props = defineProps<{ lotteryOddsList: any, initialize: boolean, disabled: boolean }>();
const emit = defineEmits<{
    (e: "submitItem4", data: any): void;
}>();
const { lotteryOddsList, initialize, disabled } = toRefs(props);
const keyboardShow = ref(false);
const selectedId = ref(0);
const singleGold = ref("");
const selectedCount = ref(0);
const selectedBetAmount = ref(0);
const winAmount = ref(0);
const selectedItemList = ref([]);

const span_list = ref([
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

    span_list.value.map((item: any) => {
        if (item.value !== "") {
            selectedCount.value++;
            selectedBetAmount.value += Number(item.value);
            winAmount.value += Number(item.value) * item.rate - item.value;
            let data = {
                quick_type: "跨度",
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
    emit("submitItem4", emitData);
};

watch(singleGold, () => {
    span_list.value.map((item: any) => {
        if (item.id === selectedId.value) {
            item.value = singleGold.value;
        }
    });
}, { deep: true });

watch(lotteryOddsList, () => {
    lotteryOddsList.value.map((item: any) => {
        if (item.sub_type == "跨度") {
            span_list.value[0].rate = item.h0;
            span_list.value[1].rate = item.h1;
            span_list.value[2].rate = item.h2;
            span_list.value[3].rate = item.h3;
            span_list.value[4].rate = item.h4;
            span_list.value[5].rate = item.h5;
            span_list.value[6].rate = item.h6;
            span_list.value[7].rate = item.h7;
            span_list.value[8].rate = item.h8;
            span_list.value[9].rate = item.h9;
        }
    })
})

watch(initialize, () => {
    span_list.value.map((item: any) => {
        item.value = "";
    })
}, { deep: true });
onMounted(() => {
});
</script>
  
<style></style>
  