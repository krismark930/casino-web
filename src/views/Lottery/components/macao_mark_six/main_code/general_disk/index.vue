<template>
  <div class="animated fadeInLeft overflow-y-auto" style="height: calc(100vh - 280px)">
    <div class="m-[6px] py-[3px] px-[15px] flex items-center justify-center">
      <div class="w-full grid grid-cols-3 gap-1">
        <div v-for="(item, index) in generalItemList" :key="index">
          <LotteryGeneralItem :item="item" @changeItem="changeItem" />
        </div>
      </div>
    </div>
  </div>
  <van-number-keyboard
    v-model="singleGold"
    :show="keyboardShow"
    :maxlength="20"
    @blur="keyboardShow = false"
  />
</template>
<script setup lang="ts">
import { ref, computed, onMounted, watch, toRefs, defineEmits } from "vue";
import { storeToRefs } from "pinia";
import { macaoKatanStore } from "@/stores/macao_katan";
import LotteryGeneralItem from "@/components/global/lotteryGeneralItem.vue";
const props = defineProps<{ class1: string; class2: string }>();
const emit = defineEmits<{
  (e: "changeBetItem", data: any): void;
  (e: "submitItemList", selectedItemList: any): void;
}>();
const { class1, class2 } = toRefs(props);
const { dispatchKablData } = macaoKatanStore();
const keyboardShow = ref(false);
const selectedId = ref(0);
const singleGold = ref("");
const selectedCount = ref(0);
const selectedBetAmount = ref(0);
const winAmount = ref(0);
const class3 = ref("");
const selectedAmount = ref("");
const selectedItemList = ref([]);

const generalItemList = ref([
  {
    id: 1,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 1,
    rate: 10.0,
    value: "",
  },
  {
    id: 2,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 2,
    rate: 10.0,
    value: "",
  },
  {
    id: 3,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 3,
    rate: 10.0,
    value: "",
  },
  {
    id: 4,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 4,
    rate: 10.0,
    value: "",
  },
  {
    id: 5,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 5,
    rate: 10.0,
    value: "",
  },
  {
    id: 6,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 6,
    rate: 10.0,
    value: "",
  },
  {
    id: 7,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 7,
    rate: 10.0,
    value: "",
  },
  {
    id: 8,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 8,
    rate: 10.0,
    value: "",
  },
  {
    id: 9,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 9,
    rate: 10.0,
    value: "",
  },
  {
    id: 10,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 10,
    rate: 10.0,
    value: "",
  },
  {
    id: 11,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 11,
    rate: 10.0,
    value: "",
  },
  {
    id: 12,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 12,
    rate: 10.0,
    value: "",
  },
  {
    id: 13,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 13,
    rate: 10.0,
    value: "",
  },
  {
    id: 14,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 14,
    rate: 10.0,
    value: "",
  },
  {
    id: 15,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 15,
    rate: 10.0,
    value: "",
  },
  {
    id: 16,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 16,
    rate: 10.0,
    value: "",
  },
  {
    id: 17,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 17,
    rate: 10.0,
    value: "",
  },
  {
    id: 18,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 18,
    rate: 10.0,
    value: "",
  },
  {
    id: 19,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 19,
    rate: 10.0,
    value: "",
  },
  {
    id: 20,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 20,
    rate: 10.0,
    value: "",
  },
  {
    id: 21,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 21,
    rate: 10.0,
    value: "",
  },
  {
    id: 22,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 22,
    rate: 10.0,
    value: "",
  },
  {
    id: 23,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 23,
    rate: 10.0,
    value: "",
  },
  {
    id: 24,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 24,
    rate: 10.0,
    value: "",
  },
  {
    id: 25,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 25,
    rate: 10.0,
    value: "",
  },
  {
    id: 26,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 26,
    rate: 10.0,
    value: "",
  },
  {
    id: 27,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 27,
    rate: 10.0,
    value: "",
  },
  {
    id: 28,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 28,
    rate: 10.0,
    value: "",
  },
  {
    id: 29,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 29,
    rate: 10.0,
    value: "",
  },
  {
    id: 30,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 30,
    rate: 10.0,
    value: "",
  },
  {
    id: 31,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 31,
    rate: 10.0,
    value: "",
  },
  {
    id: 32,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 32,
    rate: 10.0,
    value: "",
  },
  {
    id: 33,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 33,
    rate: 10.0,
    value: "",
  },
  {
    id: 34,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 34,
    rate: 10.0,
    value: "",
  },
  {
    id: 35,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 35,
    rate: 10.0,
    value: "",
  },
  {
    id: 36,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 36,
    rate: 10.0,
    value: "",
  },
  {
    id: 37,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 37,
    rate: 10.0,
    value: "",
  },
  {
    id: 38,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 38,
    rate: 10.0,
    value: "",
  },
  {
    id: 39,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 39,
    rate: 10.0,
    value: "",
  },
  {
    id: 40,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 40,
    rate: 10.0,
    value: "",
  },
  {
    id: 41,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 41,
    rate: 10.0,
    value: "",
  },
  {
    id: 42,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 42,
    rate: 10.0,
    value: "",
  },
  {
    id: 43,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 43,
    rate: 10.0,
    value: "",
  },
  {
    id: 44,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 44,
    rate: 10.0,
    value: "",
  },
  {
    id: 45,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 45,
    rate: 10.0,
    value: "",
  },
  {
    id: 46,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 46,
    rate: 10.0,
    value: "",
  },
  {
    id: 47,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 47,
    rate: 10.0,
    value: "",
  },
  {
    id: 48,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 48,
    rate: 10.0,
    value: "",
  },
  {
    id: 49,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 49,
    rate: 10.0,
    value: "",
  },
  {
    id: 50,
    icon: "",
    num: 50,
    name: "总和单",
    real_name: "总单",
    rate: 10.0,
    value: "",
  },
  {
    id: 51,
    icon: "",
    num: 51,
    name: "总和双",
    real_name: "总双",
    rate: 10.0,
    value: "",
  },
  {
    id: 52,
    icon: "",
    num: 52,
    name: "总和大",
    real_name: "总大",
    rate: 10.0,
    value: "",
  },
  {
    id: 53,
    icon: "",
    num: 53,
    name: "总和小",
    real_name: "总小",
    rate: 10.0,
    value: "",
  },
]);
const kablList = computed(() => {
  const { getKablList } = storeToRefs(macaoKatanStore());
  generalItemList.value.map((item) => {
    if (getKablList.value.length > 0) {
      getKablList.value.map((kablItem) => {
        if (Number(kablItem.class3) === Number(item.num)) {
          item["rate"] = kablItem["rate"];
          item["locked"] = kablItem["locked"];
        }
        if (Number(item.num) > 49 && kablItem.class3 == item.real_name) {
          item["rate"] = kablItem["rate"];
          item["locked"] = kablItem["locked"];
        }
      });
    }
  });

  return getKablList.value;
});
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
  class3.value = "";
  selectedAmount.value = "";

  generalItemList.value.map((item) => {
    if (item.value !== "") {
      selectedCount.value++;
      selectedBetAmount.value += Number(item.value);
      winAmount.value += Number(item.value) * item.rate - item.value;
      class3.value += item.num + ",";
      selectedAmount.value += item.value + ",";
      let data = {
        class2: class2.value,
        num: item.num > 49 ? item.name : item.num,
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
    class3: class3.value,
    class2: class2.value,
    selectedAmount: selectedAmount.value,
  };

  emit("changeBetItem", emitData);
  emit("submitItemList", selectedItemList.value);
};
watch(
  singleGold,
  () => {
    generalItemList.value.map((item) => {
      if (item.id === selectedId.value) {
        item.value = singleGold.value;
      }
    });
    betResult();
  },
  { deep: true }
);
watch(
  class2,
  async () => {
    await dispatchKablData({ class1: class1.value, class2: class2.value });
    console.log(kablList.value);
  },
  { deep: true }
);
onMounted(() => {
  console.log(kablList.value);
});
</script>

<style></style>
