<template>
  <div>
    <!-- <div class="flex justify-start gap-1 h-[39px] bg-[#e8f6ff] px-2 shadow-md text-[12px] z-10 overflow-y-scroll">
            <button :class="[item.selected ? 'bg-[#2674ff] text-white' : 'bg-white text-[#2674ff]']"
                class="text-white rounded-sm my-[5px] border-blue-300 border min-w-[60px]"
                v-for="(item, index) in fastItemSelectList" :key="index" @click="fastItemSelect(item.id)">
                {{ item.name }}
            </button>
        </div> -->
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
import { macaoKatanStore } from "@/stores/macao_katan";
import { storeToRefs } from "pinia";
const props = defineProps<{
  betAmount: any;
  class2: string;
  class1: string;
  initialize: boolean;
}>();
const { betAmount, class2, class1, initialize } = toRefs(props);
const emit = defineEmits<{
  (e: "changeBetItem", data: any): void;
  (e: "submitItemList", selectedItemList: any): void;
}>();
const initialItem = ref("兔");
const fastItemSelectList = ref([
  {
    id: 1,
    name: "鼠",
    selected: false,
    value: 4,
  },
  {
    id: 2,
    name: "牛",
    selected: false,
    value: 3,
  },
  {
    id: 3,
    name: "虎",
    selected: false,
    value: 2,
  },
  {
    id: 4,
    name: "兔",
    selected: false,
    value: 1,
  },
  {
    id: 5,
    name: "龙",
    selected: false,
    value: 12,
  },
  {
    id: 6,
    name: "蛇",
    selected: false,
    value: 11,
  },
  {
    id: 7,
    name: "马",
    selected: false,
    value: 10,
  },
  {
    id: 8,
    name: "羊",
    selected: false,
    value: 9,
  },
  {
    id: 9,
    name: "猴",
    selected: false,
    value: 8,
  },
  {
    id: 10,
    name: "鸡",
    selected: false,
    value: 7,
  },
  {
    id: 11,
    name: "狗",
    selected: false,
    value: 6,
  },
  {
    id: 12,
    name: "猪",
    selected: false,
    value: 5,
  },
  {
    id: 13,
    name: "红波",
    selected: false,
    value: "",
  },
  {
    id: 14,
    name: "蓝波",
    selected: false,
    value: "",
  },
  {
    id: 15,
    name: "绿波",
    selected: false,
    value: "",
  },
  {
    id: 16,
    name: "单",
    selected: false,
    value: "",
  },
  {
    id: 17,
    name: "双",
    selected: false,
    value: "",
  },
  {
    id: 18,
    name: "大",
    selected: false,
    value: "",
  },
  {
    id: 19,
    name: "小",
    selected: false,
    value: "",
  },
  {
    id: 20,
    name: "猪合数单",
    selected: false,
    value: "",
  },
  {
    id: 21,
    name: "合数双",
    selected: false,
    value: "",
  },
  {
    id: 22,
    name: "反选",
    selected: false,
    value: "",
  },
  {
    id: 23,
    name: "取消",
    selected: false,
    value: "",
  },
  {
    id: 24,
    name: "大单",
    selected: false,
    value: "",
  },
  {
    id: 25,
    name: "小单",
    selected: false,
    value: "",
  },
  {
    id: 26,
    name: "大双",
    selected: false,
    value: "",
  },
  {
    id: 27,
    name: "小双",
    selected: false,
    value: "",
  },
  {
    id: 28,
    name: "尾大",
    selected: false,
    value: "",
  },
  {
    id: 29,
    name: "尾小",
    selected: false,
    value: "",
  },
  {
    id: 30,
    name: "家禽",
    selected: false,
    value: "",
  },
  {
    id: 31,
    name: "野兽",
    selected: false,
    value: "",
  },
  // {
  //     id: 32,
  //     name: '更多',
  //     selected: false,
  //     value: ""
  // },
]);
const fastItemList = ref([
  {
    id: 1,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 1,
    rate: 10.0,
    color: "red",
  },
  {
    id: 2,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 2,
    rate: 10.0,
    color: "red",
  },
  {
    id: 3,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 3,
    rate: 10.0,
    color: "blue",
  },
  {
    id: 4,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 4,
    rate: 10.0,
    color: "blue",
  },
  {
    id: 5,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 5,
    rate: 10.0,
    color: "green",
  },
  {
    id: 6,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 6,
    rate: 10.0,
    color: "green",
  },
  {
    id: 7,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 7,
    rate: 10.0,
    color: "red",
  },
  {
    id: 8,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 8,
    rate: 10.0,
    color: "red",
  },
  {
    id: 9,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 9,
    rate: 10.0,
    color: "blue",
  },
  {
    id: 10,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 10,
    rate: 10.0,
    color: "blue",
  },
  {
    id: 11,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 11,
    rate: 10.0,
    color: "green",
  },
  {
    id: 12,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 12,
    rate: 10.0,
    color: "red",
  },
  {
    id: 13,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 13,
    rate: 10.0,
    color: "red",
  },
  {
    id: 14,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 14,
    rate: 10.0,
    color: "blue",
  },
  {
    id: 15,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 15,
    rate: 10.0,
    color: "blue",
  },
  {
    id: 16,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 16,
    rate: 10.0,
    color: "green",
  },
  {
    id: 17,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 17,
    rate: 10.0,
    color: "green",
  },
  {
    id: 18,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 18,
    rate: 10.0,
    color: "red",
  },
  {
    id: 19,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 19,
    rate: 10.0,
    color: "red",
  },
  {
    id: 20,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 20,
    rate: 10.0,
    color: "blue",
  },
  {
    id: 21,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 21,
    rate: 10.0,
    color: "green",
  },
  {
    id: 22,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 22,
    rate: 10.0,
    color: "green",
  },
  {
    id: 23,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 23,
    rate: 10.0,
    color: "red",
  },
  {
    id: 24,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 24,
    rate: 10.0,
    color: "red",
  },
  {
    id: 25,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 25,
    rate: 10.0,
    color: "blue",
  },
  {
    id: 26,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 26,
    rate: 10.0,
    color: "blue",
  },
  {
    id: 27,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 27,
    rate: 10.0,
    color: "green",
  },
  {
    id: 28,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 28,
    rate: 10.0,
    color: "green",
  },
  {
    id: 29,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 29,
    rate: 10.0,
    color: "red",
  },
  {
    id: 30,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 30,
    rate: 10.0,
    color: "red",
  },
  {
    id: 31,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 31,
    rate: 10.0,
    color: "blue",
  },
  {
    id: 32,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 32,
    rate: 10.0,
    color: "green",
  },
  {
    id: 33,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 33,
    rate: 10.0,
    color: "green",
  },
  {
    id: 34,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 34,
    rate: 10.0,
    color: "red",
  },
  {
    id: 35,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 35,
    rate: 10.0,
    color: "red",
  },
  {
    id: 36,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 36,
    rate: 10.0,
    color: "blue",
  },
  {
    id: 37,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 37,
    rate: 10.0,
    color: "blue",
  },
  {
    id: 38,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 38,
    rate: 10.0,
    color: "green",
  },
  {
    id: 39,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 39,
    rate: 10.0,
    color: "green",
  },
  {
    id: 40,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 40,
    rate: 10.0,
    color: "red",
  },
  {
    id: 41,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 41,
    rate: 10.0,
    color: "blue",
  },
  {
    id: 42,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 42,
    rate: 10.0,
    color: "blue",
  },
  {
    id: 43,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 43,
    rate: 10.0,
    color: "green",
  },
  {
    id: 44,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 44,
    rate: 10.0,
    color: "green",
  },
  {
    id: 45,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 45,
    rate: 10.0,
    color: "red",
  },
  {
    id: 46,
    icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
    num: 46,
    rate: 10.0,
    color: "red",
  },
  {
    id: 47,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 47,
    rate: 10.0,
    color: "blue",
  },
  {
    id: 48,
    icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
    num: 48,
    rate: 10.0,
    color: "blue",
  },
  {
    id: 49,
    icon: new URL("@/assets/images/fastthree/green.png", import.meta.url).href,
    num: 49,
    rate: 10.0,
    color: "green",
  },
]);
const { dispatchKablData } = macaoKatanStore();
const selectedCount = ref(0);
const selectedBetAmount = ref(0);
const winAmount = ref(0);
const class3 = ref("");
const selectedAmount = ref("");
const selectedItemList = ref([]);

const kablList = computed(() => {
  const { getKablList } = storeToRefs(macaoKatanStore());
  fastItemList.value.map((item) => {
    if (getKablList.value.length > 0) {
      getKablList.value.map((kablItem) => {
        if (Number(kablItem.class3) === Number(item.num)) {
          item["rate"] = kablItem["rate"];
          item["locked"] = kablItem["locked"];
        }
      });
    }
  });

  return getKablList.value;
});

const fastItemSelect = (id: number) => {
  var show = true;
  if (id == 22) {
    fastItemSelectList.value.map((item) => {
      if (item.id == id) {
        item.selected = true;
      } else {
        if (item.id !== 23) {
          item.selected = true;
        } else {
          item.selected = false;
        }
      }
    });
    fastItemList.value.map((fastItem) => {
      fastItem.selected = true;
    });
  } else if (id == 23) {
    fastItemSelectList.value.map((item) => {
      if (item.id == id) {
        item.selected = true;
      } else {
        item.selected = false;
      }
    });
    fastItemList.value.map((item) => {
      item.selected = false;
    });
  } else {
    let selectedValue = "";
    fastItemSelectList.value.map((item) => {
      if (item.id == id) {
        selectedValue = item.value;
        item.selected = !item.selected;
        show = item.selected ? true : false;
      } else if (item.id == 22 || item.id == 23) {
        item.selected = false;
      }
    });
    // animal
    if (selectedValue != "") {
      fastItemList.value.map((fastItem) => {
        if (
          fastItem.num == selectedValue ||
          fastItem.num == selectedValue + 12 ||
          fastItem.num == selectedValue + 24 ||
          fastItem.num == selectedValue + 36 ||
          fastItem.num == selectedValue + 48
        ) {
          fastItem.selected = show ? true : false;
        }
      });
    }

    if (id == 13) {
      fastItemList.value.map((fastItem) => {
        if (fastItem.color == "red") {
          fastItem.selected = show ? true : false;
        }
      });
    }

    if (id == 14) {
      fastItemList.value.map((fastItem) => {
        if (fastItem.color == "blue") {
          fastItem.selected = show ? true : false;
        }
      });
    }

    if (id == 15) {
      fastItemList.value.map((fastItem) => {
        if (fastItem.color == "green") {
          fastItem.selected = show ? true : false;
        }
      });
    }

    if (id == 16) {
      fastItemList.value.map((fastItem) => {
        if (fastItem.num % 2 != 0) {
          fastItem.selected = show ? true : false;
        }
      });
    }

    if (id == 17) {
      fastItemList.value.map((fastItem) => {
        if (fastItem.num % 2 == 0) {
          fastItem.selected = show ? true : false;
        }
      });
    }

    if (id == 18) {
      fastItemList.value.map((fastItem) => {
        if (fastItem.num >= 25) {
          fastItem.selected = show ? true : false;
        }
      });
    }

    if (id == 19) {
      fastItemList.value.map((fastItem) => {
        if (fastItem.num < 25) {
          fastItem.selected = show ? true : false;
        }
      });
    }

    if (id == 20) {
      fastItemList.value.map((fastItem) => {
        var sum = 0;
        var value = fastItem.num;
        while (value) {
          sum += value % 10;
          value = Math.floor(value / 10);
        }
        if (sum % 2 !== 0) {
          fastItem.selected = show ? true : false;
        }
      });
    }

    if (id == 21) {
      fastItemList.value.map((fastItem) => {
        var sum = 0;
        var value = fastItem.num;
        while (value) {
          sum += value % 10;
          value = Math.floor(value / 10);
        }
        if (sum % 2 === 0) {
          fastItem.selected = show ? true : false;
        }
      });
    }

    if (id == 24) {
      fastItemList.value.map((fastItem) => {
        if (fastItem.num >= 25 && fastItem.num % 2 != 0) {
          fastItem.selected = show ? true : false;
        }
      });
    }

    if (id == 25) {
      fastItemList.value.map((fastItem) => {
        if (fastItem.num < 25 && fastItem.num % 2 != 0) {
          fastItem.selected = show ? true : false;
        }
      });
    }

    if (id == 26) {
      fastItemList.value.map((fastItem) => {
        if (fastItem.num >= 25 && fastItem.num % 2 == 0) {
          fastItem.selected = show ? true : false;
        }
      });
    }

    if (id == 27) {
      fastItemList.value.map((fastItem) => {
        if (fastItem.num < 25 && fastItem.num % 2 == 0) {
          fastItem.selected = show ? true : false;
        }
      });
    }

    if (id == 28) {
      fastItemList.value.map((fastItem) => {
        if (fastItem.num == 5) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 15) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 25) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 35) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 45) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 6) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 16) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 26) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 36) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 46) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 7) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 17) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 27) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 37) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 47) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 8) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 18) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 28) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 38) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 48) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 9) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 19) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 29) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 39) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 49) {
          fastItem.selected = show ? true : false;
        }
      });
    }

    if (id == 29) {
      fastItemList.value.map((fastItem) => {
        if (fastItem.num == 10) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 20) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 30) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 40) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 1) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 11) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 21) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 31) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 41) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 2) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 12) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 22) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 32) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 42) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 3) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 13) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 23) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 33) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 43) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 4) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 14) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 24) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 34) {
          fastItem.selected = show ? true : false;
        }
        if (fastItem.num == 44) {
          fastItem.selected = show ? true : false;
        }
      });
    }

    if (id == 30) {
      fastItemSelectList.value.map((item) => {
        if (item.value !== "") {
          if (
            item.name == "牛" ||
            item.name == "兔" ||
            item.name == "羊" ||
            item.name == "鸡" ||
            item.name == "狗" ||
            item.name == "猪"
          ) {
            fastItemList.value.map((fastItem) => {
              if (
                fastItem.num == item.value ||
                fastItem.num == item.value + 12 ||
                fastItem.num == item.value + 24 ||
                fastItem.num == item.value + 36 ||
                fastItem.num == item.value + 48
              ) {
                fastItem.selected = show ? true : false;
              }
            });
          }
        }
      });
    }

    if (id == 31) {
      fastItemSelectList.value.map((item) => {
        if (item.value !== "") {
          if (
            item.name == "鼠" ||
            item.name == "虎" ||
            item.name == "龙" ||
            item.name == "蛇" ||
            item.name == "马" ||
            item.name == "猴"
          ) {
            fastItemList.value.map((fastItem) => {
              if (
                fastItem.num == item.value ||
                fastItem.num == item.value + 12 ||
                fastItem.num == item.value + 24 ||
                fastItem.num == item.value + 36 ||
                fastItem.num == item.value + 48
              ) {
                fastItem.selected = show ? true : false;
              }
            });
          }
        }
      });
    }

    let selected = true;

    for (let i = 0; i < fastItemList.value.length; i++) {
      if (fastItemList.value[i].selected) {
        selected = true;
      } else {
        selected = false;
        break;
      }
    }

    if (selected) {
      fastItemSelectList.value[21].selected = true;
    } else {
      fastItemSelectList.value[21].selected = false;
    }
  }

  betResult();
};

const singleItemSelect = (id: number) => {
  fastItemList.value.map((fastItem) => {
    if (fastItem.id == id) {
      fastItem.selected = !fastItem.selected;
    }
  });

  fastItemSelectList.value.map((item) => {
    if (item.value !== "") {
      var selected = false;
      for (let i = 0; i < fastItemList.value.length; i++) {
        if (fastItemList.value[i].num == item.value && fastItemList.value[i].selected) {
          selected = true;
        } else if (
          fastItemList.value[i].num == item.value &&
          !fastItemList.value[i].selected
        ) {
          selected = false;
          break;
        }
        if (
          fastItemList.value[i].num == item.value + 12 &&
          fastItemList.value[i].selected
        ) {
          selected = true;
        } else if (
          fastItemList.value[i].num == item.value + 12 &&
          !fastItemList.value[i].selected
        ) {
          selected = false;
          break;
        }
        if (
          fastItemList.value[i].num == item.value + 24 &&
          fastItemList.value[i].selected
        ) {
          selected = true;
        } else if (
          fastItemList.value[i].num == item.value + 24 &&
          !fastItemList.value[i].selected
        ) {
          selected = false;
          break;
        }
        if (
          fastItemList.value[i].num == item.value + 36 &&
          fastItemList.value[i].selected
        ) {
          selected = true;
        } else if (
          fastItemList.value[i].num == item.value + 36 &&
          !fastItemList.value[i].selected
        ) {
          selected = false;
          break;
        }
        if (
          fastItemList.value[i].num <= 49 &&
          fastItemList.value[i].num == item.value + 48 &&
          fastItemList.value[i].selected
        ) {
          selected = true;
        } else if (
          fastItemList.value[i].num <= 49 &&
          fastItemList.value[i].num == item.value + 48 &&
          !fastItemList.value[i].selected
        ) {
          selected = false;
          break;
        }
      }
      if (selected) {
        item.selected = true;
      } else {
        item.selected = false;
      }
    }
  });

  let allSelected = true;

  for (let i = 0; i < fastItemList.value.length; i++) {
    if (fastItemList.value[i].selected) {
      allSelected = true;
    } else {
      allSelected = false;
      break;
    }
  }

  if (allSelected) {
    fastItemSelectList.value[21].selected = true;
  } else {
    fastItemSelectList.value[21].selected = false;
  }

  betResult();
};

watch(
  betAmount,
  () => {
    betResult();
  },
  { deep: true }
);

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

  fastItemList.value.map((item) => {
    if (item.selected && betAmount.value !== "") {
      selectedCount.value++;
      selectedBetAmount.value += Number(betAmount.value);
      winAmount.value += Number(betAmount.value) * item.rate - betAmount.value;
      class3.value += item.num + ",";
      selectedAmount.value += betAmount.value + ",";
      let data = {
        class2: class2.value,
        num: item.num,
        odds: item.rate,
        betAmount: betAmount.value,
        winableAmount: Number(betAmount.value) * item.rate - betAmount.value,
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

onMounted(async () => {
  const index = fastItemSelectList.value.findIndex(
    (item) => item.name === initialItem.value
  );
  for (let i = index + 1; i > 0; i--) {
    fastItemSelectList.value[index + 1 - i].value = i;
  }
  for (let j = 12; j > index + 1; j--) {
    fastItemSelectList.value[12 - (j - (index + 1))].value = j;
  }
  console.log("class2: ", class2.value);
  await dispatchKablData({ class1: class1.value, class2: class2.value });
  console.log(kablList.value);
});
</script>

<style scoped>
</style>
