<template>
    <div class="text-center h-[30px] bg-[#e8f6ff] px-2 shadow-md text-[20px] font-bold">
        冠、亚军和（冠军车号+亚军车号）
    </div>
    <div class="animated fadeInLeft">
        <div class="m-[6px] py-[3px] px-[15px] flex items-center justify-center">
            <div class="w-full grid grid-cols-3 gap-1">
                <div v-for="(item, index) in champion_runner_list" :key="index">
                    <LotteryAlwaysColorItem1 :item="item" :disabled="disabled" @changeItem="changeItem" @betResult="betResult" />
                </div>
            </div>
        </div>
    </div>
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
const keyboardShow = ref(false);
const selectedId = ref(0);
const singleGold = ref("");
const selectedCount = ref(0);
const selectedBetAmount = ref(0);
const winAmount = ref(0);
const selectedItemList = ref([]);

const champion_runner_list = ref([
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
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: '19',
        name: "19",
        rate: "10.00",
        value: "",
    },
    {
        id: 20,
        icon: "",
        num: "",
        name: "冠亚大",
        rate: "10.00",
        value: "",
    },
    {
        id: 21,
        icon: "",
        num: "",
        name: "冠亚小",
        rate: "10.00",
        value: "",
    },
    {
        id: 22,
        icon: "",
        num: "",
        name: "冠亚单",
        rate: "10.00",
        value: "",
    },
    {
        id: 23,
        icon: "",
        num: "",
        name: "冠亚双",
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

    champion_runner_list.value.map((item: any) => {
        if (item.value !== "") {
            selectedCount.value++;
            selectedBetAmount.value += Number(item.value);
            winAmount.value += Number(item.value) * item.rate - item.value;
            let data = {
                quick_type: "冠亚军和",
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
    champion_runner_list.value.map((item: any) => {
        if (item.id === selectedId.value) {
            item.value = singleGold.value;
        }
    });
}, { deep: true });

watch(lotteryOddsList, () => {
    lotteryOddsList.value.map((item: any) => {
        if (item.sub_type == "冠亚军和-快速") {
            champion_runner_list.value[0].rate = item.h1;
            champion_runner_list.value[1].rate = item.h2;
            champion_runner_list.value[2].rate = item.h3;
            champion_runner_list.value[3].rate = item.h4;
            champion_runner_list.value[4].rate = item.h5;
            champion_runner_list.value[5].rate = item.h6;
            champion_runner_list.value[6].rate = item.h7;
            champion_runner_list.value[7].rate = item.h8;
            champion_runner_list.value[8].rate = item.h9;
            champion_runner_list.value[9].rate = item.h10;
            champion_runner_list.value[10].rate = item.h11;
            champion_runner_list.value[11].rate = item.h12;
            champion_runner_list.value[12].rate = item.h13;
            champion_runner_list.value[13].rate = item.h14;
            champion_runner_list.value[14].rate = item.h15;
            champion_runner_list.value[15].rate = item.h16;
            champion_runner_list.value[16].rate = item.h17;
            champion_runner_list.value[17].rate = item.h18;
            champion_runner_list.value[18].rate = item.h19;
            champion_runner_list.value[19].rate = item.h20;
            champion_runner_list.value[20].rate = item.h21;
        }
    })
})

watch(initialize, () => {
    champion_runner_list.value.map((item: any) => {
        item.value = "";
    })
}, { deep: true });
onMounted(() => {
});
</script>
  
<style></style>
  