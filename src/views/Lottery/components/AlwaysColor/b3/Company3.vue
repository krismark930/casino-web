<template>
    <div class="text-center h-[30px] bg-[#e8f6ff] px-2 shadow-md text-[20px] font-bold">
        3连
    </div>
    <div class="animated fadeInLeft">
        <div class="m-[6px] py-[3px] px-[15px] flex items-center justify-center">
            <div class="w-full grid grid-cols-3 gap-1">
                <div v-for="(item, index) in company_list" :key="index">
                    <LotteryAlwaysColorItem :item="item" :disabled="disabled" @changeItem="changeItem"
                        @betResult="betResult" />
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
    (e: "submitItem3", data: any): void;
}>();
const { lotteryOddsList, initialize, disabled } = toRefs(props);
const activeName = ref("top");
const keyboardShow = ref(false);
const selectedId = ref(0);
const singleGold = ref("");
const selectedCount = ref(0);
const selectedBetAmount = ref(0);
const winAmount = ref(0);
const selectedItemList = ref([]);

const company_list = ref([
    {
        id: 1,
        icon: "",
        num: "",
        name: "豹子",
        rate: "10.00",
        value: "",
    },
    {
        id: 2,
        icon: "",
        num: "",
        name: "顺子",
        rate: "10.00",
        value: "",
    },
    {
        id: 3,
        icon: "",
        num: "",
        name: "对子",
        rate: "10.00",
        value: "",
    },
    {
        id: 4,
        icon: "",
        num: "",
        name: "半顺",
        rate: "10.00",
        value: "",
    },
    {
        id: 5,
        icon: "",
        num: "",
        name: "杂六",
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

    company_list.value.map((item: any) => {
        if (item.value !== "") {
            selectedCount.value++;
            selectedBetAmount.value += Number(item.value);
            winAmount.value += Number(item.value) * item.rate - item.value;
            let data = {
                quick_type: "3连",
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
    company_list.value.map((item: any) => {
        if (item.id === selectedId.value) {
            item.value = singleGold.value;
        }
    });
}, { deep: true });

watch(lotteryOddsList, () => {
    lotteryOddsList.value.map((item: any) => {
        if (item.sub_type == "3连") {
            company_list.value[0].rate = item.h0;
            company_list.value[1].rate = item.h1;
            company_list.value[2].rate = item.h2;
            company_list.value[3].rate = item.h3;
            company_list.value[4].rate = item.h4;
        }
    })
})

watch(initialize, () => {
    company_list.value.map((item: any) => {
        item.value = "";
    })
}, { deep: true });

onMounted(() => {
});
</script>
  
<style></style>
  