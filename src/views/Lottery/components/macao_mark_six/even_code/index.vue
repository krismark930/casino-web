<template>
  <div>
    <div class="flex justify-start gap-1 h-[39px] bg-[#e8f6ff] px-2 shadow-md text-[12px] z-10 overflow-y-scroll">
      <el-select v-model="class2" class="my-[4px]">
        <el-option v-for="item in class2_array" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <el-select v-model="class3" class="my-[4px]">
        <el-option v-for="item in class3_array" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </div>
    <div class="animated fadeInLeft overflow-y-auto" style="height: calc(100vh - 320px)">
      <div class="m-[6px] py-[3px] px-[15px] flex items-center justify-center">
        <div class="w-full grid gap-1" :class="[gridColNumber]" v-if="class3 == '单选/复式' || class3 == '拖胆'">
          <div v-for="(item, index) in fastItemList" :key="index" @click="singleItemSelect(item.id)">
            <LotteryFastItem :item="item" />
          </div>
        </div>
        <div class="w-full grid grid-cols-1 gap-1" v-else>
          <div v-for="(item, index) in fastItemMultiList" :key="index"
            @click="singleMultiItemSelect(item.id, item.group)">
            <LotteryFastMultiItem :item="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, toRefs, defineEmits, watch, computed } from "vue";
import LotteryFastItem from "@/components/global/lotteryFastItem.vue";
import LotteryFastMultiItem from "@/components/global/lotteryFastMultiItem.vue";
import { macaoKatanStore } from "@/stores/macao_katan";
import { storeToRefs } from "pinia";
import { showToast } from "vant";
const props = defineProps<{ betAmount: any; class1: string; initialize: boolean }>();
const { betAmount, class1, initialize } = toRefs(props);
const emit = defineEmits<{
  (e: "changeBetItem", data: any): void;
  (e: "submitItemList", selectedItemList: any): void;
}>();
const class2 = ref("三全中");
const class3 = ref("单选/复式");
const gridColNumber = ref("grid-cols-3");
const class2_array = ref([
  {
    value: "三全中",
    label: "三全中",
  },
  {
    value: "三中二",
    label: "三中二",
  },
  {
    value: "二全中",
    label: "二全中",
  },
  {
    value: "二中特",
    label: "二中特",
  },
  {
    value: "特串",
    label: "特串",
  },
  {
    value: '四中一',
    label: '四中一'
  },
]);
const class3_array = ref([
  {
    label: "单选/复式",
    value: "单选/复式",
  },
  {
    label: "拖胆",
    value: "拖胆",
  },
]);
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
const fastItemMultiList = ref([
  {
    id: 1,
    name: "鼠",
    rate: 10.0,
    group: 1,
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
    group: 1,
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
    group: 1,
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
    group: 1,
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
    group: 1,
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
    group: 1,
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
    group: 1,
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
    group: 1,
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
    group: 1,
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
    group: 1,
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
    group: 1,
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
    group: 1,
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
  fastItemList.value.map((item: any) => {
    if (
      getKablList.value.length > 0 &&
      (class2.value == "三全中" || class2.value == "二全中" || class2.value == "特串")
    ) {
      item["rate"] = getKablList.value[0]["rate"];
      item["locked"] = getKablList.value[0]["locked"];
      item["rate_1"] = null;
      item["locked_1"] = null;
    }
    if (
      getKablList.value.length > 0 &&
      (class2.value == "三中二" || class2.value == "二中特")
    ) {
      item["rate"] = getKablList.value[0]["rate"];
      item["locked"] = getKablList.value[0]["locked"];
      item["rate_1"] = getKablList.value[1]["rate"];
      item["locked_1"] = getKablList.value[1]["locked"];
    }
  });
  fastItemMultiList.value.map((fastMultiItem) => {
    fastMultiItem["rate"] = getKablList.value[0]["rate"];
    fastMultiItem["locked"] = getKablList.value[0]["locked"];
  });
  switch (class2.value) {
    case "三全中":
      gridColNumber.value = "grid-cols-3";
      break;
    case "三中二":
      gridColNumber.value = "grid-cols-2";
      break;
    case "二全中":
      gridColNumber.value = "grid-cols-3";
      break;
    case "二中特":
      gridColNumber.value = "grid-cols-2";
      break;
    case "特串":
      gridColNumber.value = "grid-cols-3";
      break;
  }
  return getKablList.value;
});

const singleItemSelect = (id: number) => {
  fastItemList.value.map((fastItem) => {
    if (fastItem.id == id) {
      fastItem.selected = !fastItem.selected;
      if (fastItem.selected) {
        order_array.value.push(fastItem.num);
      } else {
        order_array.value = order_array.value.filter((item) => item != fastItem.num);
      }
    }
  });

  betResult();
};

const singleMultiItemSelect = (id: number, group: number) => {
  fastItemMultiList.value.map((fastMultiItem) => {
    if (fastMultiItem.id == id) {
      if (fastMultiItem.selected) {
        fastMultiItem.selected = !fastMultiItem.selected;
      } else {
        let selectedItem = fastItemMultiList.value.filter((item) => item.selected);
        if (selectedItem.length >= 2) {
          showToast("最多选2个! 您可以取消选中的重新选择");
        } else {
          if (class3.value === "混合/对碰") {
            let selectedItem = fastItemMultiList.value.filter(
              (item) => item.selected && item.group === group
            );
            if (selectedItem.length >= 1) {
              showToast("对不起!请重新选择两个不一样的！");
            } else {
              fastMultiItem.selected = !fastMultiItem.selected;
            }
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
    fastItemMultiList.value.map((item) => {
      item.selected = false;
    });
    order_array.value = [];
  },
  { deep: true }
);

watch(
  class2,
  async () => {
    order_array.value = [];
    if (class2.value === "三全中" || class2.value === "三中二" || class2.value === "四中一") {
      class3.value = "单选/复式";
      class3_array.value = [
        {
          label: "单选/复式",
          value: "单选/复式",
        },
        {
          label: "拖胆",
          value: "拖胆",
        },
      ];
    } else {
      class3_array.value = [
        {
          label: "单选/复式",
          value: "单选/复式",
        },
        {
          label: "拖胆",
          value: "拖胆",
        },
        {
          label: "生肖/对碰",
          value: "生肖/对碰",
        },
        {
          label: "尾数/对碰",
          value: "尾数/对碰",
        },
        {
          label: "混合/对碰",
          value: "混合/对碰",
        },
      ];
    }
    await dispatchKablData({ class1: class1.value, class2: class2.value });
    console.log(kablList.value);
    fastItemList.value.map((item) => {
      item.selected = false;
    });
    fastItemMultiList.value.map((item) => {
      item.selected = false;
    });
  },
  { deep: true }
);

watch(
  class3,
  async () => {
    order_array.value = [];
    switch (class3.value) {
      case "生肖/对碰":
        fastItemMultiList.value = [
          {
            id: 1,
            name: "鼠",
            rate: 10.0,
            group: 1,
            itemIcons: [
              {
                icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
                num: 4,
              },
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 16,
              },
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
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
            group: 1,
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
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 27,
              },
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 39,
              },
            ],
          },
          {
            id: 3,
            name: "虎",
            rate: 10.0,
            group: 1,
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
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 38,
              },
            ],
          },
          {
            id: 4,
            name: "兔",
            rate: 10.0,
            group: 1,
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
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 49,
              },
            ],
          },
          {
            id: 5,
            name: "龙",
            rate: 10.0,
            group: 1,
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
            group: 1,
            itemIcons: [
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
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
            group: 1,
            itemIcons: [
              {
                icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
                num: 10,
              },
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
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
            group: 1,
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
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 45,
              },
            ],
          },
          {
            id: 9,
            name: "猴",
            rate: 10.0,
            group: 1,
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
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 32,
              },
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 44,
              },
            ],
          },
          {
            id: 10,
            name: "鸡",
            rate: 10.0,
            group: 1,
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
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 43,
              },
            ],
          },
          {
            id: 11,
            name: "狗",
            rate: 10.0,
            group: 1,
            itemIcons: [
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
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
            group: 1,
            itemIcons: [
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 5,
              },
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
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
        ];
        break;
      case "尾数/对碰":
        fastItemMultiList.value = [
          {
            id: 1,
            name: "1尾",
            rate: 10.0,
            group: 2,
            itemIcons: [
              {
                icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
                num: 1,
              },
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 11,
              },
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 21,
              },
              {
                icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
                num: 31,
              },
              {
                icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
                num: 41,
              },
            ],
          },
          {
            id: 2,
            name: "2尾",
            rate: 10.0,
            group: 2,
            itemIcons: [
              {
                icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
                num: 2,
              },
              {
                icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
                num: 12,
              },
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 22,
              },
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 32,
              },
              {
                icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
                num: 42,
              },
            ],
          },
          {
            id: 3,
            name: "3尾",
            rate: 10.0,
            group: 2,
            itemIcons: [
              {
                icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
                num: 3,
              },
              {
                icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
                num: 13,
              },
              {
                icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
                num: 23,
              },
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 33,
              },
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 43,
              },
            ],
          },
          {
            id: 4,
            name: "4尾",
            rate: 10.0,
            group: 2,
            itemIcons: [
              {
                icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
                num: 4,
              },
              {
                icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
                num: 14,
              },
              {
                icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
                num: 24,
              },
              {
                icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
                num: 34,
              },
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 44,
              },
            ],
          },
          {
            id: 5,
            name: "5尾",
            rate: 10.0,
            group: 2,
            itemIcons: [
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 5,
              },
              {
                icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
                num: 15,
              },
              {
                icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
                num: 25,
              },
              {
                icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
                num: 35,
              },
              {
                icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
                num: 45,
              },
            ],
          },
          {
            id: 6,
            name: "6尾",
            rate: 10.0,
            group: 2,
            itemIcons: [
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 6,
              },
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 16,
              },
              {
                icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
                num: 26,
              },
              {
                icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
                num: 36,
              },
              {
                icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
                num: 46,
              },
            ],
          },
          {
            id: 7,
            name: "7尾",
            rate: 10.0,
            group: 2,
            itemIcons: [
              {
                icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
                num: 7,
              },
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 17,
              },
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 27,
              },
              {
                icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
                num: 37,
              },
              {
                icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
                num: 47,
              },
            ],
          },
          {
            id: 8,
            name: "8尾",
            rate: 10.0,
            group: 2,
            itemIcons: [
              {
                icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
                num: 8,
              },
              {
                icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
                num: 18,
              },
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 28,
              },
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 38,
              },
              {
                icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
                num: 48,
              },
            ],
          },
          {
            id: 9,
            name: "9尾",
            rate: 10.0,
            group: 2,
            itemIcons: [
              {
                icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
                num: 9,
              },
              {
                icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
                num: 19,
              },
              {
                icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
                num: 29,
              },
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 39,
              },
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 49,
              },
            ],
          },
          {
            id: 10,
            name: "0尾",
            rate: 10.0,
            group: 2,
            itemIcons: [
              {
                icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
                num: 10,
              },
              {
                icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
                num: 20,
              },
              {
                icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
                num: 30,
              },
              {
                icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
                num: 40,
              },
            ],
          },
        ];
        break;
      case "混合/对碰":
        fastItemMultiList.value = [
          {
            id: 1,
            name: "鼠",
            rate: 10.0,
            group: 1,
            itemIcons: [
              {
                icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
                num: 4,
              },
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 16,
              },
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
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
            group: 1,
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
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 27,
              },
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 39,
              },
            ],
          },
          {
            id: 3,
            name: "虎",
            rate: 10.0,
            group: 1,
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
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 38,
              },
            ],
          },
          {
            id: 4,
            name: "兔",
            rate: 10.0,
            group: 1,
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
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 49,
              },
            ],
          },
          {
            id: 5,
            name: "龙",
            rate: 10.0,
            group: 1,
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
            group: 1,
            itemIcons: [
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
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
            group: 1,
            itemIcons: [
              {
                icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
                num: 10,
              },
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
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
            group: 1,
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
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 45,
              },
            ],
          },
          {
            id: 9,
            name: "猴",
            rate: 10.0,
            group: 1,
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
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 32,
              },
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 44,
              },
            ],
          },
          {
            id: 10,
            name: "鸡",
            rate: 10.0,
            group: 1,
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
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 43,
              },
            ],
          },
          {
            id: 11,
            name: "狗",
            rate: 10.0,
            group: 1,
            itemIcons: [
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
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
            group: 1,
            itemIcons: [
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 5,
              },
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
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
          {
            id: 13,
            name: "1尾",
            rate: 10.0,
            group: 2,
            itemIcons: [
              {
                icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
                num: 1,
              },
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 11,
              },
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 21,
              },
              {
                icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
                num: 31,
              },
              {
                icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
                num: 41,
              },
            ],
          },
          {
            id: 14,
            name: "2尾",
            rate: 10.0,
            group: 2,
            itemIcons: [
              {
                icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
                num: 2,
              },
              {
                icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
                num: 12,
              },
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 22,
              },
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 32,
              },
              {
                icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
                num: 42,
              },
            ],
          },
          {
            id: 15,
            name: "3尾",
            rate: 10.0,
            group: 2,
            itemIcons: [
              {
                icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
                num: 3,
              },
              {
                icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
                num: 13,
              },
              {
                icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
                num: 23,
              },
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 33,
              },
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 43,
              },
            ],
          },
          {
            id: 16,
            name: "4尾",
            rate: 10.0,
            group: 2,
            itemIcons: [
              {
                icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
                num: 4,
              },
              {
                icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
                num: 14,
              },
              {
                icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
                num: 24,
              },
              {
                icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
                num: 34,
              },
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 44,
              },
            ],
          },
          {
            id: 17,
            name: "5尾",
            rate: 10.0,
            group: 2,
            itemIcons: [
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 5,
              },
              {
                icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
                num: 15,
              },
              {
                icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
                num: 25,
              },
              {
                icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
                num: 35,
              },
              {
                icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
                num: 45,
              },
            ],
          },
          {
            id: 18,
            name: "6尾",
            rate: 10.0,
            group: 2,
            itemIcons: [
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 6,
              },
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 16,
              },
              {
                icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
                num: 26,
              },
              {
                icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
                num: 36,
              },
              {
                icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
                num: 46,
              },
            ],
          },
          {
            id: 19,
            name: "7尾",
            rate: 10.0,
            group: 2,
            itemIcons: [
              {
                icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
                num: 7,
              },
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 17,
              },
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 27,
              },
              {
                icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
                num: 37,
              },
              {
                icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
                num: 47,
              },
            ],
          },
          {
            id: 20,
            name: "8尾",
            rate: 10.0,
            group: 2,
            itemIcons: [
              {
                icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
                num: 8,
              },
              {
                icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
                num: 18,
              },
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 28,
              },
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 38,
              },
              {
                icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
                num: 48,
              },
            ],
          },
          {
            id: 21,
            name: "9尾",
            rate: 10.0,
            group: 2,
            itemIcons: [
              {
                icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
                num: 9,
              },
              {
                icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
                num: 19,
              },
              {
                icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
                num: 29,
              },
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 39,
              },
              {
                icon: new URL("@/assets/images/fastthree/green.png", import.meta.url)
                  .href,
                num: 49,
              },
            ],
          },
          {
            id: 22,
            name: "0尾",
            rate: 10.0,
            group: 2,
            itemIcons: [
              {
                icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
                num: 10,
              },
              {
                icon: new URL("@/assets/images/fastthree/blue.png", import.meta.url).href,
                num: 20,
              },
              {
                icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
                num: 30,
              },
              {
                icon: new URL("@/assets/images/fastthree/red.png", import.meta.url).href,
                num: 40,
              },
            ],
          },
        ];
        break;
    }
    fastItemMultiList.value.map((fastMultiItem) => {
      fastMultiItem["rate"] = kablList.value[0]["rate"];
      fastMultiItem["locked"] = kablList.value[0]["locked"];
    });
    fastItemList.value.map((item) => {
      item.selected = false;
    });
    fastItemMultiList.value.map((item) => {
      item.selected = false;
    });
  },
  { deep: true }
);

const betResult = () => {
  console.log(order_array.value);
  selectedItemList.value = [];
  selectedCount.value = 0;
  selectedBetAmount.value = 0;
  winAmount.value = 0;
  selectedAmount.value = "";

  let combination_array = [];

  if (
    (class2.value === "三全中" || class2.value === "三中二") &&
    class3.value == "单选/复式"
  ) {
    let temp_array = [];

    fastItemList.value.map((item) => {
      if (item.selected) {
        temp_array.push(item.num);
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

      console.log(combination_array);

      combination_array.map((item) => {
        if (betAmount.value !== "") {
          selectedCount.value++;
          selectedBetAmount.value += Number(betAmount.value);
          winAmount.value +=
            Number(betAmount.value) * fastItemList.value[0].rate - betAmount.value;
          selectedAmount.value += betAmount.value + ",";
          let data = {
            class1: class1.value,
            class2: class2.value,
            num: item,
            odds: fastItemList.value[0].rate,
            betAmount: betAmount.value,
            winableAmount:
              Number(betAmount.value) * fastItemList.value[0].rate - betAmount.value,
          };
          selectedItemList.value = [...selectedItemList.value, data];
        }
      });
    }
  } else if (class2.value === "四中一" && class3.value == "单选/复式") {
    let temp_array: any[] = [];

    fastItemList.value.map((item: any) => {
      if (item.selected) {
        temp_array.push(item.num);
      }
    });

    if (temp_array.length >= 4) {
      for (let i = 0; i < temp_array.length - 3; i++) {
        for (let j = i + 1; j < temp_array.length - 2; j++) {
          for (let k = j + 1; k < temp_array.length - 1; k++) {
            for (let l = k + 1; l < temp_array.length; l++) {
              combination_array.push(
                temp_array[i] + "," + temp_array[j] + "," + temp_array[k] + "," + temp_array[l]
              );
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
            Number(betAmount.value) * fastItemList.value[0].rate - betAmount.value;
          selectedAmount.value += betAmount.value + ",";
          let data = {
            class1: class1.value,
            class2: class2.value,
            num: item,
            odds: fastItemList.value[0].rate,
            betAmount: betAmount.value,
            winableAmount:
              Number(betAmount.value) * fastItemList.value[0].rate - betAmount.value,
          };
          selectedItemList.value = [...selectedItemList.value, data];
        }
      });
    }
  } else if (
    (class2.value === "三全中" || class2.value === "三中二") &&
    class3.value == "拖胆"
  ) {
    if (order_array.value.length >= 3) {
      let first_array = order_array.value.slice(0, 2);
      let second_array = order_array.value.slice(2, order_array.length);
      console.log(second_array);
      for (let i = 0; i < second_array.length; i++) {
        combination_array.push(
          first_array[0] + "," + first_array[1] + "," + second_array[i]
        );
      }

      combination_array.map((item) => {
        if (betAmount.value !== "") {
          selectedCount.value++;
          selectedBetAmount.value += Number(betAmount.value);
          winAmount.value +=
            Number(betAmount.value) * fastItemList.value[0].rate - betAmount.value;
          selectedAmount.value += betAmount.value + ",";
          let data = {
            class1: class1.value,
            class2: class2.value,
            num: item,
            odds: fastItemList.value[0].rate,
            betAmount: betAmount.value,
            winableAmount:
              Number(betAmount.value) * fastItemList.value[0].rate - betAmount.value,
          };
          selectedItemList.value = [...selectedItemList.value, data];
        }
      });
    }
  } else if (class2.value === "四中一" && class3.value == "拖胆") {
    if (order_array.value.length >= 4) {
      let first_array = order_array.value.slice(0, 3);
      let second_array = order_array.value.slice(3, order_array.length);
      console.log(second_array);
      for (let i = 0; i < second_array.length; i++) {
        combination_array.push(
          first_array[0] + "," + first_array[1] + "," + first_array[2] + "," + second_array[i]
        );
      }

      combination_array.map((item) => {
        if (betAmount.value !== "") {
          selectedCount.value++;
          selectedBetAmount.value += Number(betAmount.value);
          winAmount.value +=
            Number(betAmount.value) * fastItemList.value[0].rate - betAmount.value;
          selectedAmount.value += betAmount.value + ",";
          let data = {
            class1: class1.value,
            class2: class2.value,
            num: item,
            odds: fastItemList.value[0].rate,
            betAmount: betAmount.value,
            winableAmount:
              Number(betAmount.value) * fastItemList.value[0].rate - betAmount.value,
          };
          selectedItemList.value = [...selectedItemList.value, data];
        }
      });
    }
  } else if (
    (class2.value === "二全中" || class2.value === "二中特" || class2.value === "特串") &&
    class3.value == "单选/复式"
  ) {
    let temp_array = [];

    fastItemList.value.map((item) => {
      if (item.selected) {
        temp_array.push(item.num);
      }
    });

    if (temp_array.length >= 2) {
      for (let i = 0; i < temp_array.length - 1; i++) {
        for (let j = i + 1; j < temp_array.length; j++) {
          combination_array.push(temp_array[i] + "," + temp_array[j]);
        }
      }

      console.log(combination_array);

      combination_array.map((item) => {
        if (betAmount.value !== "") {
          selectedCount.value++;
          selectedBetAmount.value += Number(betAmount.value);
          winAmount.value +=
            Number(betAmount.value) * fastItemList.value[0].rate - betAmount.value;
          selectedAmount.value += betAmount.value + ",";
          let data = {
            class1: class1.value,
            class2: class2.value,
            num: item,
            odds: fastItemList.value[0].rate,
            betAmount: betAmount.value,
            winableAmount:
              Number(betAmount.value) * fastItemList.value[0].rate - betAmount.value,
          };
          selectedItemList.value = [...selectedItemList.value, data];
        }
      });
    }
  } else if (
    (class2.value === "二全中" || class2.value === "二中特" || class2.value === "特串") &&
    class3.value === "拖胆"
  ) {
    if (order_array.value.length >= 2) {
      let first_array = order_array.value.slice(0, 1);
      let second_array = order_array.value.slice(1, order_array.length);

      for (let i = 0; i < second_array.length; i++) {
        combination_array.push(first_array[0] + "," + second_array[i]);
      }

      combination_array.map((item) => {
        if (betAmount.value !== "") {
          selectedCount.value++;
          selectedBetAmount.value += Number(betAmount.value);
          winAmount.value +=
            Number(betAmount.value) * fastItemList.value[0].rate - betAmount.value;
          selectedAmount.value += betAmount.value + ",";
          let data = {
            class1: class1.value,
            class2: class2.value,
            num: item,
            odds: fastItemList.value[0].rate,
            betAmount: betAmount.value,
            winableAmount:
              Number(betAmount.value) * fastItemList.value[0].rate - betAmount.value,
          };
          selectedItemList.value = [...selectedItemList.value, data];
        }
      });
    }
  } else if (
    class3.value == "生肖/对碰" ||
    class3.value == "尾数/对碰" ||
    class3.value == "混合/对碰"
  ) {
    let temp_array = [];

    fastItemMultiList.value.map((fastMultiItem) => {
      if (fastMultiItem.selected) {
        temp_array.push(fastMultiItem.itemIcons);
      }
    });

    if (temp_array.length >= 2) {
      for (var i = 0; i < temp_array[0].length; i++) {
        for (var j = 0; j < temp_array[1].length; j++) {
          if (temp_array[0][i].num !== temp_array[1][j].num) {
            combination_array.push(temp_array[0][i].num + "," + temp_array[1][j].num);
          }
        }
      }

      console.log(combination_array);

      combination_array.map((item) => {
        if (betAmount.value !== "") {
          selectedCount.value++;
          selectedBetAmount.value += Number(betAmount.value);
          winAmount.value +=
            Number(betAmount.value) * fastItemMultiList.value[0].rate - betAmount.value;
          selectedAmount.value += betAmount.value + ",";
          let data = {
            class1: class1.value,
            class2: class2.value,
            num: item,
            odds: fastItemMultiList.value[0].rate,
            betAmount: betAmount.value,
            winableAmount:
              Number(betAmount.value) * fastItemMultiList.value[0].rate - betAmount.value,
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
