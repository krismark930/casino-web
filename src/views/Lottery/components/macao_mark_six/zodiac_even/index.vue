<template>
  <div>
    <div class="animated fadeInLeft overflow-y-auto" style="height: calc(100vh - 320px)">
      <div class="m-[6px] py-[3px] px-[15px] flex items-center justify-center">
        <div class="w-full grid grid-cols-1 gap-1">
          <div
            v-for="(item, index) in fastItemMultiList"
            :key="index"
            @click="singleMultiItemSelect(item.id)"
          >
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
const props = defineProps<{
  betAmount: any;
  class1: string;
  class2: string;
  initialize: boolean;
}>();
const { betAmount, class1, class2, initialize } = toRefs(props);
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
  fastItemMultiList.value.map((fastMultiItem: any) => {
    if (fastMultiItem.id === id) {
      if (fastMultiItem.selected) {
        fastMultiItem.selected = !fastMultiItem.selected;
      } else {
        let selectedItem = fastItemMultiList.value.filter((item: any) => item.selected);
        if (selectedItem.length >= 8) {
          if (class2.value === "二肖连中" || class2.value === "二肖连不中") {
            showToast("对不起，请选择二-八个生肖!");
          } else if (class2.value === "三肖连中" || class2.value === "三肖连不中") {
            showToast("对不起，请选择三-八个生肖!");
          } else if (class2.value === "四肖连中" || class2.value === "四肖连不中") {
            showToast("对不起，请选择四-八个生肖!");
          } else if (class2.value === "五肖连中") {
            showToast("对不起，请选择五-八个生肖!");
          }
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
    fastItemMultiList.value.map((item) => {
      item.selected = false;
    });
  },
  { deep: true }
);
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
    await dispatchKablData({ class1: class1.value, class2: class2.value });
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

  let combination_array = [];

  if (class2.value === "二肖连中" || class2.value === "二肖连不中") {
    let temp_array: any[] = [];
    let temp_rate_array: any[] = [];

    fastItemMultiList.value.map((item: any) => {
      if (item.selected) {
        temp_array.push(item.name);
        temp_rate_array.push(item.rate);
      }
    });

    if (temp_array.length >= 2 && temp_array.length <= 8) {
      for (let i = 0; i < temp_array.length - 1; i++) {
        for (let j = i + 1; j < temp_array.length; j++) {
          combination_array.push(temp_array[i] + "," + temp_array[j]);
        }
      }

      combination_array.map((item) => {
        if (betAmount.value !== "") {
          selectedCount.value++;
          selectedBetAmount.value += Number(betAmount.value);
          winAmount.value +=
            Number(betAmount.value) * Math.min(...temp_rate_array) - betAmount.value;
          selectedAmount.value += betAmount.value + ",";
          let data = {
            class1: class1.value,
            class2: class2.value,
            num: item,
            odds: Math.min(...temp_rate_array),
            betAmount: betAmount.value,
            winableAmount: (
              Number(betAmount.value) * Math.min(...temp_rate_array) -
              betAmount.value
            ).toFixed(2),
          };
          selectedItemList.value = [...selectedItemList.value, data];
        }
      });
    }
  } else if (class2.value === "三肖连中" || class2.value === "三肖连不中") {
    let temp_array: any[] = [];
    let temp_rate_array: any[] = [];

    fastItemMultiList.value.map((item: any) => {
      if (item.selected) {
        temp_array.push(item.name);
        temp_rate_array.push(item.rate);
      }
    });

    if (temp_array.length >= 3) {
      for (let i = 0; i < temp_array.length - 2; i++) {
        for (let j = i + 1; j < temp_array.length - 1; j++) {
          for (let k = j + 1; k < temp_array.length; k++) {
            combination_array.push(
              temp_array[i] + "," + temp_array[j] + "," + temp_array[k]
            );
          }
        }
      }

      combination_array.map((item) => {
        if (betAmount.value !== "") {
          selectedCount.value++;
          selectedBetAmount.value += Number(betAmount.value);
          winAmount.value +=
            Number(betAmount.value) * Math.min(...temp_rate_array) - betAmount.value;
          selectedAmount.value += betAmount.value + ",";
          let data = {
            class1: class1.value,
            class2: class2.value,
            num: item,
            odds: Math.min(...temp_rate_array),
            betAmount: betAmount.value,
            winableAmount: (
              Number(betAmount.value) * Math.min(...temp_rate_array) -
              betAmount.value
            ).toFixed(2),
          };
          selectedItemList.value = [...selectedItemList.value, data];
        }
      });
    }
  } else if (class2.value === "四肖连中" || class2.value === "四肖连不中") {
    let temp_array: any[] = [];
    let temp_rate_array: any[] = [];

    fastItemMultiList.value.map((item: any) => {
      if (item.selected) {
        temp_array.push(item.name);
        temp_rate_array.push(item.rate);
      }
    });

    if (temp_array.length >= 4) {
      for (let i = 0; i < temp_array.length - 3; i++) {
        for (let j = i + 1; j < temp_array.length - 2; j++) {
          for (let k = j + 1; k < temp_array.length - 1; k++) {
            for (let l = k + 1; l < temp_array.length; l++) {
              combination_array.push(
                temp_array[i] +
                  "," +
                  temp_array[j] +
                  "," +
                  temp_array[k] +
                  "," +
                  temp_array[l]
              );
            }
          }
        }
      }

      combination_array.map((item) => {
        if (betAmount.value !== "") {
          selectedCount.value++;
          selectedBetAmount.value += Number(betAmount.value);
          winAmount.value +=
            Number(betAmount.value) * Math.min(...temp_rate_array) - betAmount.value;
          selectedAmount.value += betAmount.value + ",";
          let data = {
            class1: class1.value,
            class2: class2.value,
            num: item,
            odds: Math.min(...temp_rate_array),
            betAmount: betAmount.value,
            winableAmount: (
              Number(betAmount.value) * Math.min(...temp_rate_array) -
              betAmount.value
            ).toFixed(2),
          };
          selectedItemList.value = [...selectedItemList.value, data];
        }
      });
    }
  } else if (class2.value === "五肖连中") {
    let temp_array: any[] = [];
    let temp_rate_array: any[] = [];

    fastItemMultiList.value.map((item: any) => {
      if (item.selected) {
        temp_array.push(item.name);
        temp_rate_array.push(item.rate);
      }
    });

    if (temp_array.length >= 5) {
      for (let i = 0; i < temp_array.length - 4; i++) {
        for (let j = i + 1; j < temp_array.length - 3; j++) {
          for (let k = j + 1; k < temp_array.length - 2; k++) {
            for (let l = k + 1; l < temp_array.length - 1; l++) {
              for (let m = l + 1; m < temp_array.length; m++) {
                combination_array.push(
                  temp_array[i] +
                    "," +
                    temp_array[j] +
                    "," +
                    temp_array[k] +
                    "," +
                    temp_array[l] +
                    "," +
                    temp_array[m]
                );
              }
            }
          }
        }
      }

      console.log(combination_array);

      combination_array.map((item) => {
        if (betAmount.value !== "") {
          selectedCount.value++;
          selectedBetAmount.value += Number(betAmount.value);
          winAmount.value +=
            Number(betAmount.value) * Math.min(...temp_rate_array) - betAmount.value;
          selectedAmount.value += betAmount.value + ",";
          let data = {
            class1: class1.value,
            class2: class2.value,
            num: item,
            odds: Math.min(...temp_rate_array),
            betAmount: betAmount.value,
            winableAmount: (
              Number(betAmount.value) * Math.min(...temp_rate_array) -
              betAmount.value
            ).toFixed(2),
          };
          selectedItemList.value = [...selectedItemList.value, data];
        }
      });
    }
  }

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

onMounted(async () => {
  await dispatchKablData({ class1: class1.value, class2: class2.value });
  console.log(kablList.value);
});
</script>

<style scoped>
</style>
