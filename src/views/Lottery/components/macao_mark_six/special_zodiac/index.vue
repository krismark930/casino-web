<template>
  <div class="animated fadeInLeft overflow-y-auto" style="height: calc(100vh - 240px)">
    <div class="m-[6px] py-[3px] px-[15px] flex items-center justify-center">
      <div class="w-full grid grid-cols-1 gap-1">
        <div v-for="(item, index) in generalItemList" :key="index">
          <LotteryGeneralSpecialItem :item="item" @changeItem="changeItem" />
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
import LotteryGeneralSpecialItem from "@/components/global/lotteryGeneralSpecialItem.vue";
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
    name: "鼠",
    rate: 10.0,
    value: "",
    itemIcons: [
      {
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: 4,
      },
      {
        icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
        num: 16,
      },
      {
        icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
        num: 28,
      },
      {
        icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
        num: 40,
      },
    ],
  },
  {
    id: 2,
    name: "虎",
    rate: 10.0,
    value: "",
    itemIcons: [
      {
        icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
        num: 2,
      },
      {
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: 14,
      },
      {
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: 26,
      },
      {
        icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
        num: 38,
      },
    ],
  },
  {
    id: 3,
    name: "龙",
    rate: 10.0,
    value: "",
    itemIcons: [
      {
        icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
        num: 12,
      },
      {
        icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
        num: 24,
      },
      {
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: 36,
      },
      {
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: 48,
      },
    ],
  },
  {
    id: 4,
    name: "马",
    rate: 10.0,
    value: "",
    itemIcons: [
      {
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: 10,
      },
      {
        icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
        num: 22,
      },
      {
        icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
        num: 34,
      },
      {
        icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
        num: 46,
      },
    ],
  },
  {
    id: 5,
    name: "猴",
    rate: 10.0,
    value: "",
    itemIcons: [
      {
        icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
        num: 8,
      },
      {
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: 20,
      },
      {
        icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
        num: 32,
      },
      {
        icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
        num: 44,
      },
    ],
  },
  {
    id: 6,
    name: "狗",
    rate: 10.0,
    value: "",
    itemIcons: [
      {
        icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
        num: 6,
      },
      {
        icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
        num: 18,
      },
      {
        icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
        num: 30,
      },
      {
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: 42,
      },
    ],
  },
  {
    id: 7,
    name: "牛",
    rate: 10.0,
    value: "",
    itemIcons: [
      {
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: 3,
      },
      {
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: 15,
      },
      {
        icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
        num: 27,
      },
      {
        icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
        num: 39,
      },
    ],
  },
  {
    id: 8,
    name: "兔",
    rate: 10.0,
    value: "",
    itemIcons: [
      {
        icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
        num: 1,
      },
      {
        icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
        num: 13,
      },
      {
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: 25,
      },
      {
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: 37,
      },
      {
        icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
        num: 49,
      },
    ],
  },
  {
    id: 9,
    name: "蛇",
    rate: 10.0,
    value: "",
    itemIcons: [
      {
        icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
        num: 11,
      },
      {
        icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
        num: 23,
      },
      {
        icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
        num: 35,
      },
      {
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: 47,
      },
    ],
  },
  {
    id: 10,
    name: "羊",
    rate: 10.0,
    value: "",
    itemIcons: [
      {
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: 9,
      },
      {
        icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
        num: 21,
      },
      {
        icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
        num: 33,
      },
      {
        icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
        num: 45,
      },
    ],
  },
  {
    id: 11,
    name: "鸡",
    rate: 10.0,
    value: "",
    itemIcons: [
      {
        icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
        num: 7,
      },
      {
        icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
        num: 19,
      },
      {
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: 31,
      },
      {
        icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
        num: 43,
      },
    ],
  },
  {
    id: 12,
    name: "猪",
    rate: 10.0,
    value: "",
    itemIcons: [
      {
        icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
        num: 5,
      },
      {
        icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
        num: 17,
      },
      {
        icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
        num: 29,
      },
      {
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: 41,
      },
    ],
  },
]);
const kablList = computed(() => {
  const { getKablList } = storeToRefs(macaoKatanStore());
  generalItemList.value.map((item) => {
    if (getKablList.value.length > 0) {
      getKablList.value.map((kablItem) => {
        if (kablItem.class3 == item.name) {
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
    if (item.value !== "" && item.value != 0) {
      selectedCount.value++;
      selectedBetAmount.value += Number(item.value);
      winAmount.value += Number(item.value) * item.rate - item.value;
      class3.value += item.id + ",";
      selectedAmount.value += item.value + ",";
      let data = {
        class2: class2.value,
        num: item.name,
        odds: item.rate,
        betAmount: item.value,
        winableAmount: (Number(item.value) * item.rate - item.value).toFixed(2),
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

onMounted(async () => {
  await dispatchKablData({ class1: "生肖", class2: class2.value });
  console.log(kablList.value);
});
</script>

<style></style>
