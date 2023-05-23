<template>
  <div>
    <div class="animated fadeInLeft overflow-y-auto" style="height: calc(100vh - 320px)">
      <div class="m-[6px] py-[3px] px-[15px] flex items-center justify-center">
        <div class="w-full grid grid-cols-1 gap-1">
          <div v-for="(item, index) in fastItemMultiList" :key="index" @click="singleMultiItemSelect(item.id)">
            <LotteryFastMultiItem :item="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, toRefs, defineEmits, watch, computed } from "vue";
import LotteryFastMultiItem from "@/components/global/lotteryFastMultiItem.vue";
import { macaoKatanStore } from "@/stores/macao_katan";
import { storeToRefs } from "pinia";
import { showToast } from "vant";
const props = defineProps<{ betAmount: any; class2: string; initialize: boolean, activeAnimal: any, allCompatible: boolean }>();
const { betAmount, class2, initialize, activeAnimal, allCompatible } = toRefs(props);
const emit = defineEmits<{
  (e: "changeBetItem", data: any): void;
  (e: "submitItemList", selectedItemList: any): void;
}>();
const class3 = ref("");
const fastItemMultiList = ref([
  {
    id: 1,
    name: "鼠",
    rate: 10.0,
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
    name: "牛",
    rate: 10.0,
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
    id: 3,
    name: "虎",
    rate: 10.0,
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
        num: 16,
      },
      {
        icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
        num: 38,
      },
    ],
  },
  {
    id: 4,
    name: "兔",
    rate: 10.0,
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
    id: 5,
    name: "龙",
    rate: 10.0,
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
    id: 6,
    name: "蛇",
    rate: 10.0,
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
    id: 7,
    name: "马",
    rate: 10.0,
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
    id: 8,
    name: "羊",
    rate: 10.0,
    itemIcons: [
      {
        icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
        num: 9,
      },
      {
        icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
        num: 21,
      },
      {
        icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
        num: 33,
      },
      {
        icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
        num: 45,
      },
    ],
  },
  {
    id: 9,
    name: "猴",
    rate: 10.0,
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
    id: 10,
    name: "鸡",
    rate: 10.0,
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
    id: 11,
    name: "狗",
    rate: 10.0,
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
    id: 12,
    name: "猪",
    rate: 10.0,
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
const { dispatchKablData } = macaoKatanStore();
const selectedCount = ref(0);
const selectedBetAmount = ref(0);
const winAmount = ref(0);
const selectedAmount = ref("");
const selectedItemList = ref([]);
const order_array = ref([]);

const kablList = computed(() => {
  const { getKablList } = storeToRefs(macaoKatanStore());
  fastItemMultiList.value.map((fastMultiItem: any) => {
    if (getKablList.value.length > 0) {
      getKablList.value.map((kablItem: any) => {
        if (kablItem.class3 == fastMultiItem.name) {
          fastMultiItem["rate"] = kablItem["rate"];
          fastMultiItem["locked"] = kablItem["locked"];
        }
      });
    }
  });
  return getKablList.value;
});

const singleMultiItemSelect = (id: number) => {
  let selectedList = fastItemMultiList.value.filter((item: any) => item.selected);

  fastItemMultiList.value.map((fastMultiItem: any) => {
    if (fastMultiItem.id == id && fastMultiItem.selected) {
      fastMultiItem.selected = !fastMultiItem.selected;
    } else if (fastMultiItem.id == id && !fastMultiItem.selected) {
      if (class2.value === "二肖") {
        if (selectedList.length >= 2) {
          showToast("最多选2个，您可以取消选中的重新选择");
        } else {
          fastMultiItem.selected = !fastMultiItem.selected;
        }
      } else if (class2.value === "三肖") {
        if (selectedList.length >= 3) {
          showToast("最多选3个，您可以取消选中的重新选择");
        } else {
          fastMultiItem.selected = !fastMultiItem.selected;
        }
      } else if (class2.value === "四肖") {
        if (selectedList.length >= 4) {
          showToast("最多选4个，您可以取消选中的重新选择");
        } else {
          fastMultiItem.selected = !fastMultiItem.selected;
        }
      } else if (class2.value === "五肖") {
        if (selectedList.length >= 5) {
          showToast("最多选5个，您可以取消选中的重新选择");
        } else {
          fastMultiItem.selected = !fastMultiItem.selected;
        }
      } else if (class2.value === "六肖") {
        if (selectedList.length >= 6) {
          showToast("最多选6个，您可以取消选中的重新选择");
        } else {
          fastMultiItem.selected = !fastMultiItem.selected;
        }
      } else if (class2.value === "七肖") {
        if (selectedList.length >= 7) {
          showToast("最多选7个，您可以取消选中的重新选择");
        } else {
          fastMultiItem.selected = !fastMultiItem.selected;
        }
      } else if (class2.value === "八肖") {
        if (selectedList.length >= 8) {
          showToast("最多选8个，您可以取消选中的重新选择");
        } else {
          fastMultiItem.selected = !fastMultiItem.selected;
        }
      } else if (class2.value === "九肖") {
        if (selectedList.length >= 9) {
          showToast("最多选9个，您可以取消选中的重新选择");
        } else {
          fastMultiItem.selected = !fastMultiItem.selected;
        }
      } else if (class2.value === "十肖") {
        if (selectedList.length >= 10) {
          showToast("最多选10个，您可以取消选中的重新选择");
        } else {
          fastMultiItem.selected = !fastMultiItem.selected;
        }
      } else if (class2.value === "十一肖") {
        if (selectedList.length >= 11) {
          showToast("最多选11个，您可以取消选中的重新选择");
        } else {
          fastMultiItem.selected = !fastMultiItem.selected;
        }
      }
    }
  });

  betResult();
};

watch(
  initialize,
  () => {
    fastItemMultiList.value.map((item: any) => {
      item.selected = false;
    });
  },
  { deep: true }
);

watch(activeAnimal, () => {
  fastItemMultiList.value.map((item: any) => {
    if (activeAnimal.value === 1) {
      if (item.name == "马" || item.name == "狗" || item.name == "牛" || item.name == "羊" || item.name == "鸡" || item.name == "猪") {
        item.selected = true;
      } else {
        item.selected = false;
      }
    }
    if (activeAnimal.value === 2) {
      if (item.name == "鼠" || item.name == "虎" || item.name == "龙" || item.name == "猴" || item.name == "兔" || item.name == "蛇") {
        item.selected = true;
      } else {
        item.selected = false;
      }
    }
  })
  betResult();
}, { deep: true });

watch(allCompatible, () => {
  fastItemMultiList.value.map((item: any) => {
    item.selected = !item.selected;
  })
  betResult()
}, { deep: true })

watch(
  betAmount,
  () => {
    betResult();
  },
  { deep: true }
);

watch(
  class2,
  async () => {
    await dispatchKablData({ class1: "生肖", class2: class2.value });
    console.log(kablList.value);
  },
  { deep: true }
);

const betResult = () => {
  selectedItemList.value = [];
  selectedCount.value = 0;
  selectedBetAmount.value = 0;
  winAmount.value = 0;
  class3.value = "";
  selectedAmount.value = "";

  let selectedList = fastItemMultiList.value.filter((item: any) => item.selected);

  let calFlag = false;

  if (class2.value === "二肖" && selectedList.length == 2) {
    calFlag = true;
  } else if (class2.value === "三肖" && selectedList.length == 3) {
    calFlag = true;
  } else if (class2.value === "四肖" && selectedList.length == 4) {
    calFlag = true;
  } else if (class2.value === "五肖" && selectedList.length == 5) {
    calFlag = true;
  } else if (class2.value === "六肖" && selectedList.length == 6) {
    calFlag = true;
  } else if (class2.value === "七肖" && selectedList.length == 7) {
    calFlag = true;
  } else if (class2.value === "八肖" && selectedList.length == 8) {
    calFlag = true;
  } else if (class2.value === "九肖" && selectedList.length == 9) {
    calFlag = true;
  } else if (class2.value === "十肖" && selectedList.length == 10) {
    calFlag = true;
  } else if (class2.value === "十一肖" && selectedList.length == 11) {
    calFlag = true;
  }

  if (calFlag) {
    selectedList.map((item: any) => {
      winAmount.value = Number(betAmount.value) * item.rate - betAmount.value;
      class3.value += item.name + ",";
    });

    let data = {
      class2: class2.value,
      num: class3.value,
      odds: selectedList[0].rate,
      betAmount: betAmount.value,
      winableAmount: Number(betAmount.value) * selectedList[0].rate - betAmount.value,
    };

    selectedItemList.value = [...selectedItemList.value, data];
  }

  let emitData = {
    selectedCount: calFlag ? 1 : 0,
    selectedBetAmount: betAmount.value,
    winAmount: winAmount.value,
    class3: class3.value,
    class2: class2.value,
    totalOdds: fastItemMultiList.value[0].rate,
    selectedAmount: betAmount.value,
  };

  if (calFlag) {

    emit("changeBetItem", emitData);
    emit("submitItemList", selectedItemList.value);

  }
};

onMounted(async () => {
  await dispatchKablData({ class1: "生肖", class2: class2.value });
  console.log(kablList.value);
});
</script>

<style scoped>
</style>
