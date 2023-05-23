<template>
  <div>
    <div class="animated fadeInLeft overflow-y-auto" style="height: calc(100vh - 320px)">
      <div class="m-[6px] py-[3px] px-[15px] flex items-center justify-center">
        <div class="w-full grid grid-cols-3 gap-1">
          <div
            v-for="(item, index) in fastItemList"
            :key="index"
            @click="singleItemSelect(item.id)"
          >
            <LotteryFastItem :item="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, toRefs, defineEmits, watch, computed } from "vue";
import LotteryFastItem from "@/components/global/lotteryFastItem.vue";
import { katanStore } from "@/stores/katan";
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
const fastItemList = ref([
  {
    id: 1,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 1,
    rate: 10.0,
  },
  {
    id: 2,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 2,
    rate: 10.0,
  },
  {
    id: 3,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 3,
    rate: 10.0,
  },
  {
    id: 4,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 4,
    rate: 10.0,
  },
  {
    id: 5,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 5,
    rate: 10.0,
  },
  {
    id: 6,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 6,
    rate: 10.0,
  },
  {
    id: 7,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 7,
    rate: 10.0,
  },
  {
    id: 8,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 8,
    rate: 10.0,
  },
  {
    id: 9,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 9,
    rate: 10.0,
  },
  {
    id: 10,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 10,
    rate: 10.0,
  },
  {
    id: 11,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 11,
    rate: 10.0,
  },
  {
    id: 12,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 12,
    rate: 10.0,
  },
  {
    id: 13,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 13,
    rate: 10.0,
  },
  {
    id: 14,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 14,
    rate: 10.0,
  },
  {
    id: 15,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 15,
    rate: 10.0,
  },
  {
    id: 16,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 16,
    rate: 10.0,
  },
  {
    id: 17,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 17,
    rate: 10.0,
  },
  {
    id: 18,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 18,
    rate: 10.0,
  },
  {
    id: 19,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 19,
    rate: 10.0,
  },
  {
    id: 20,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 20,
    rate: 10.0,
  },
  {
    id: 21,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 21,
    rate: 10.0,
  },
  {
    id: 22,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 22,
    rate: 10.0,
  },
  {
    id: 23,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 23,
    rate: 10.0,
  },
  {
    id: 24,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 24,
    rate: 10.0,
  },
  {
    id: 25,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 25,
    rate: 10.0,
  },
  {
    id: 26,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 26,
    rate: 10.0,
  },
  {
    id: 27,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 27,
    rate: 10.0,
  },
  {
    id: 28,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 28,
    rate: 10.0,
  },
  {
    id: 29,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 29,
    rate: 10.0,
  },
  {
    id: 30,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 30,
    rate: 10.0,
  },
  {
    id: 31,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 31,
    rate: 10.0,
  },
  {
    id: 32,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 32,
    rate: 10.0,
  },
  {
    id: 33,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 33,
    rate: 10.0,
  },
  {
    id: 34,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 34,
    rate: 10.0,
  },
  {
    id: 35,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 35,
    rate: 10.0,
  },
  {
    id: 36,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 36,
    rate: 10.0,
  },
  {
    id: 37,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 37,
    rate: 10.0,
  },
  {
    id: 38,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 38,
    rate: 10.0,
  },
  {
    id: 39,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 39,
    rate: 10.0,
  },
  {
    id: 40,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 40,
    rate: 10.0,
  },
  {
    id: 41,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 41,
    rate: 10.0,
  },
  {
    id: 42,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 42,
    rate: 10.0,
  },
  {
    id: 43,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 43,
    rate: 10.0,
  },
  {
    id: 44,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 44,
    rate: 10.0,
  },
  {
    id: 45,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 45,
    rate: 10.0,
  },
  {
    id: 46,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 46,
    rate: 10.0,
  },
  {
    id: 47,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 47,
    rate: 10.0,
  },
  {
    id: 48,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 48,
    rate: 10.0,
  },
  {
    id: 49,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 49,
    rate: 10.0,
  },
]);
const { dispatchKablData } = katanStore();
const selectedCount = ref(0);
const selectedBetAmount = ref(0);
const winAmount = ref(0);
const selectedAmount = ref("");
const selectedItemList = ref([]);
const order_array = ref([]);

const kablList = computed(() => {
  const { getKablList } = storeToRefs(katanStore());
  fastItemList.value.map((fastItem: any) => {
    if (getKablList.value.length > 0) {
      getKablList.value.map((kablItem: any) => {
        if (Number(kablItem.class3) == fastItem.num) {
          fastItem["rate"] = kablItem["rate"];
          fastItem["locked"] = kablItem["locked"];
        }
      });
    }
  });
  return getKablList.value;
});

const singleItemSelect = (id: number) => {
  fastItemList.value.map((fastMultiItem: any) => {
    if (fastMultiItem.id === id) {
      if (fastMultiItem.selected) {
        fastMultiItem.selected = !fastMultiItem.selected;
      } else {
        let selectedItem = fastItemList.value.filter((item: any) => item.selected);
        if (class2.value === "五不中") {
          if (selectedItem.length >= 10) {
            showToast("请选择五至十个号码!");
          } else {
            fastMultiItem.selected = !fastMultiItem.selected;
          }
        } else if (class2.value === "六不中") {
          if (selectedItem.length >= 10) {
            showToast("请选择六至十个号码!");
          } else {
            fastMultiItem.selected = !fastMultiItem.selected;
          }
        } else if (class2.value === "七不中") {
          if (selectedItem.length >= 10) {
            showToast("请选择七至十个号码!");
          } else {
            fastMultiItem.selected = !fastMultiItem.selected;
          }
        } else if (class2.value === "八不中") {
          if (selectedItem.length >= 10) {
            showToast("请选择八至十个号码!");
          } else {
            fastMultiItem.selected = !fastMultiItem.selected;
          }
        } else if (class2.value === "九不中") {
          if (selectedItem.length >= 11) {
            showToast("请选择九至十一个号码!");
          } else {
            fastMultiItem.selected = !fastMultiItem.selected;
          }
        } else if (class2.value === "十不中") {
          if (selectedItem.length >= 12) {
            showToast("请选择十至十二个号码!");
          } else {
            fastMultiItem.selected = !fastMultiItem.selected;
          }
        } else if (class2.value === "十一不中") {
          if (selectedItem.length >= 13) {
            showToast("请选择十一至十三个号码!");
          } else {
            fastMultiItem.selected = !fastMultiItem.selected;
          }
        } else if (class2.value === "十二不中") {
          if (selectedItem.length >= 14) {
            showToast("请选择十二至十四个号码!");
          } else {
            fastMultiItem.selected = !fastMultiItem.selected;
          }
        }
      }
    }
  });

  betResult();
};

watch(
  initialize,
  () => {
    fastItemList.value.map((item) => {
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

  if (class2.value === "五不中") {
    let temp_array: any[] = [];
    let temp_rate_array: any[] = [];

    fastItemList.value.map((item: any) => {
      if (item.selected) {
        temp_array.push(item.num);
        temp_rate_array.push(item.rate);
      }
    });

    if (temp_array.length >= 5 && temp_array.length <= 10) {
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
  } else if (class2.value === "六不中") {
    let temp_array: any[] = [];
    let temp_rate_array: any[] = [];

    fastItemList.value.map((item: any) => {
      if (item.selected) {
        temp_array.push(item.num);
        temp_rate_array.push(item.rate);
      }
    });

    if (temp_array.length >= 6 && temp_array.length <= 10) {
      for (let i = 0; i < temp_array.length - 5; i++) {
        for (let j = i + 1; j < temp_array.length - 4; j++) {
          for (let k = j + 1; k < temp_array.length - 3; k++) {
            for (let l = k + 1; l < temp_array.length - 2; l++) {
              for (let m = l + 1; m < temp_array.length - 1; m++) {
                for (let n = m + 1; n < temp_array.length; n++) {
                  combination_array.push(
                    temp_array[i] +
                      "," +
                      temp_array[j] +
                      "," +
                      temp_array[k] +
                      "," +
                      temp_array[l] +
                      "," +
                      temp_array[m] +
                      "," +
                      temp_array[n]
                  );
                }
              }
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
  } else if (class2.value === "七不中") {
    let temp_array: any[] = [];
    let temp_rate_array: any[] = [];

    fastItemList.value.map((item: any) => {
      if (item.selected) {
        temp_array.push(item.num);
        temp_rate_array.push(item.rate);
      }
    });

    if (temp_array.length >= 7 && temp_array.length <= 10) {
      for (let i = 0; i < temp_array.length - 6; i++) {
        for (let j = i + 1; j < temp_array.length - 5; j++) {
          for (let k = j + 1; k < temp_array.length - 4; k++) {
            for (let l = k + 1; l < temp_array.length - 3; l++) {
              for (let m = l + 1; m < temp_array.length - 2; m++) {
                for (let n = l + 1; n < temp_array.length - 1; n++) {
                  for (let o = n + 1; o < temp_array.length; o++) {
                    combination_array.push(
                      temp_array[i] +
                        "," +
                        temp_array[j] +
                        "," +
                        temp_array[k] +
                        "," +
                        temp_array[l] +
                        "," +
                        temp_array[m] +
                        "," +
                        temp_array[n] +
                        "," +
                        temp_array[o]
                    );
                  }
                }
              }
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
  } else if (class2.value === "八不中") {
    let temp_array: any[] = [];
    let temp_rate_array: any[] = [];

    fastItemList.value.map((item: any) => {
      if (item.selected) {
        temp_array.push(item.num);
        temp_rate_array.push(item.rate);
      }
    });

    if (temp_array.length >= 8 && temp_array.length <= 10) {
      for (let i = 0; i < temp_array.length - 7; i++) {
        for (let j = i + 1; j < temp_array.length - 6; j++) {
          for (let k = j + 1; k < temp_array.length - 5; k++) {
            for (let l = k + 1; l < temp_array.length - 4; l++) {
              for (let m = l + 1; m < temp_array.length - 3; m++) {
                for (let n = l + 1; n < temp_array.length - 2; n++) {
                  for (let o = n + 1; o < temp_array.length - 1; o++) {
                    for (let p = o + 1; p < temp_array.length; p++) {
                      combination_array.push(
                        temp_array[i] +
                          "," +
                          temp_array[j] +
                          "," +
                          temp_array[k] +
                          "," +
                          temp_array[l] +
                          "," +
                          temp_array[m] +
                          "," +
                          temp_array[n] +
                          "," +
                          temp_array[o] +
                          "," +
                          temp_array[p]
                      );
                    }
                  }
                }
              }
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
  } else if (class2.value === "九不中") {
    let temp_array: any[] = [];
    let temp_rate_array: any[] = [];

    fastItemList.value.map((item: any) => {
      if (item.selected) {
        temp_array.push(item.num);
        temp_rate_array.push(item.rate);
      }
    });

    if (temp_array.length >= 9 && temp_array.length <= 11) {
      for (let i = 0; i < temp_array.length - 8; i++) {
        for (let j = i + 1; j < temp_array.length - 7; j++) {
          for (let k = j + 1; k < temp_array.length - 6; k++) {
            for (let l = k + 1; l < temp_array.length - 5; l++) {
              for (let m = l + 1; m < temp_array.length - 4; m++) {
                for (let n = l + 1; n < temp_array.length - 3; n++) {
                  for (let o = n + 1; o < temp_array.length - 2; o++) {
                    for (let p = o + 1; p < temp_array.length - 1; p++) {
                      for (let q = p + 1; q < temp_array.length; q++) {
                        combination_array.push(
                          temp_array[i] +
                            "," +
                            temp_array[j] +
                            "," +
                            temp_array[k] +
                            "," +
                            temp_array[l] +
                            "," +
                            temp_array[m] +
                            "," +
                            temp_array[n] +
                            "," +
                            temp_array[o] +
                            "," +
                            temp_array[p] +
                            "," +
                            temp_array[q]
                        );
                      }
                    }
                  }
                }
              }
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
  } else if (class2.value === "十不中") {
    let temp_array: any[] = [];
    let temp_rate_array: any[] = [];

    fastItemList.value.map((item: any) => {
      if (item.selected) {
        temp_array.push(item.num);
        temp_rate_array.push(item.rate);
      }
    });

    if (temp_array.length >= 10 && temp_array.length <= 12) {
      for (let i = 0; i < temp_array.length - 9; i++) {
        for (let j = i + 1; j < temp_array.length - 8; j++) {
          for (let k = j + 1; k < temp_array.length - 7; k++) {
            for (let l = k + 1; l < temp_array.length - 6; l++) {
              for (let m = l + 1; m < temp_array.length - 5; m++) {
                for (let n = l + 1; n < temp_array.length - 4; n++) {
                  for (let o = n + 1; o < temp_array.length - 3; o++) {
                    for (let p = o + 1; p < temp_array.length - 2; p++) {
                      for (let q = p + 1; q < temp_array.length - 1; q++) {
                        for (let r = q + 1; r < temp_array.length; r++) {
                          combination_array.push(
                            temp_array[i] +
                              "," +
                              temp_array[j] +
                              "," +
                              temp_array[k] +
                              "," +
                              temp_array[l] +
                              "," +
                              temp_array[m] +
                              "," +
                              temp_array[n] +
                              "," +
                              temp_array[o] +
                              "," +
                              temp_array[p] +
                              "," +
                              temp_array[q] +
                              "," +
                              temp_array[r]
                          );
                        }
                      }
                    }
                  }
                }
              }
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
  } else if (class2.value === "十一不中") {
    let temp_array: any[] = [];
    let temp_rate_array: any[] = [];

    fastItemList.value.map((item: any) => {
      if (item.selected) {
        temp_array.push(item.num);
        temp_rate_array.push(item.rate);
      }
    });

    if (temp_array.length >= 11 && temp_array.length <= 13) {
      for (let i = 0; i < temp_array.length - 10; i++) {
        for (let j = i + 1; j < temp_array.length - 9; j++) {
          for (let k = j + 1; k < temp_array.length - 8; k++) {
            for (let l = k + 1; l < temp_array.length - 7; l++) {
              for (let m = l + 1; m < temp_array.length - 6; m++) {
                for (let n = l + 1; n < temp_array.length - 5; n++) {
                  for (let o = n + 1; o < temp_array.length - 4; o++) {
                    for (let p = o + 1; p < temp_array.length - 3; p++) {
                      for (let q = p + 1; q < temp_array.length - 2; q++) {
                        for (let r = q + 1; r < temp_array.length - 1; r++) {
                          for (let s = r + 1; s < temp_array.length; s++) {
                            combination_array.push(
                              temp_array[i] +
                                "," +
                                temp_array[j] +
                                "," +
                                temp_array[k] +
                                "," +
                                temp_array[l] +
                                "," +
                                temp_array[m] +
                                "," +
                                temp_array[n] +
                                "," +
                                temp_array[o] +
                                "," +
                                temp_array[p] +
                                "," +
                                temp_array[q] +
                                "," +
                                temp_array[r] +
                                "," +
                                temp_array[s]
                            );
                          }
                        }
                      }
                    }
                  }
                }
              }
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
  } else if (class2.value === "十二不中") {
    let temp_array: any[] = [];
    let temp_rate_array: any[] = [];

    fastItemList.value.map((item: any) => {
      if (item.selected) {
        temp_array.push(item.num);
        temp_rate_array.push(item.rate);
      }
    });

    if (temp_array.length >= 12 && temp_array.length <= 14) {
      for (let i = 0; i < temp_array.length - 11; i++) {
        for (let j = i + 1; j < temp_array.length - 10; j++) {
          for (let k = j + 1; k < temp_array.length - 9; k++) {
            for (let l = k + 1; l < temp_array.length - 8; l++) {
              for (let m = l + 1; m < temp_array.length - 7; m++) {
                for (let n = l + 1; n < temp_array.length - 6; n++) {
                  for (let o = n + 1; o < temp_array.length - 5; o++) {
                    for (let p = o + 1; p < temp_array.length - 4; p++) {
                      for (let q = p + 1; q < temp_array.length - 3; q++) {
                        for (let r = q + 1; r < temp_array.length - 2; r++) {
                          for (let s = r + 1; s < temp_array.length - 1; s++) {
                            for (let t = s + 1; t < temp_array.length; t++) {
                              combination_array.push(
                                temp_array[i] +
                                  "," +
                                  temp_array[j] +
                                  "," +
                                  temp_array[k] +
                                  "," +
                                  temp_array[l] +
                                  "," +
                                  temp_array[m] +
                                  "," +
                                  temp_array[n] +
                                  "," +
                                  temp_array[o] +
                                  "," +
                                  temp_array[p] +
                                  "," +
                                  temp_array[q] +
                                  "," +
                                  temp_array[r] +
                                  "," +
                                  temp_array[s]
                              );
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
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
