<template>
  <div class="overflow-y-auto" style="height: calc(100vh - 280px)">
    <div
      class="flex justify-start text-center gap-1 h-[30px] bg-[#e8f6ff] px-2 shadow-md text-[20px] font-bold z-10 overflow-y-scroll"
    >
      正码一
    </div>
    <div class="animated fadeInLeft">
      <div class="m-[6px] py-[3px] px-[15px] flex items-center justify-center">
        <div class="w-full grid grid-cols-3 gap-1">
          <div
            v-for="(item, index) in parlayItemList1"
            :key="index"
            @click="singleItemSelect1(item.id)"
          >
            <LotteryParlayItem :item="item" />
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex justify-start text-center gap-1 h-[30px] bg-[#e8f6ff] px-2 shadow-md text-[20px] font-bold z-10 overflow-y-scroll"
    >
      正码二
    </div>
    <div class="animated fadeInLeft">
      <div class="m-[6px] py-[3px] px-[15px] flex items-center justify-center">
        <div class="w-full grid grid-cols-3 gap-1">
          <div
            v-for="(item, index) in parlayItemList2"
            :key="index"
            @click="singleItemSelect2(item.id)"
          >
            <LotteryParlayItem :item="item" />
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex justify-start text-center gap-1 h-[30px] bg-[#e8f6ff] px-2 shadow-md text-[20px] font-bold z-10 overflow-y-scroll"
    >
      正码三
    </div>
    <div class="animated fadeInLeft">
      <div class="m-[6px] py-[3px] px-[15px] flex items-center justify-center">
        <div class="w-full grid grid-cols-3 gap-1">
          <div
            v-for="(item, index) in parlayItemList3"
            :key="index"
            @click="singleItemSelect3(item.id)"
          >
            <LotteryParlayItem :item="item" />
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex justify-start text-center gap-1 h-[30px] bg-[#e8f6ff] px-2 shadow-md text-[20px] font-bold z-10 overflow-y-scroll"
    >
      正码四
    </div>
    <div class="animated fadeInLeft">
      <div class="m-[6px] py-[3px] px-[15px] flex items-center justify-center">
        <div class="w-full grid grid-cols-3 gap-1">
          <div
            v-for="(item, index) in parlayItemList4"
            :key="index"
            @click="singleItemSelect4(item.id)"
          >
            <LotteryParlayItem :item="item" />
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex justify-start text-center gap-1 h-[30px] bg-[#e8f6ff] px-2 shadow-md text-[20px] font-bold z-10 overflow-y-scroll"
    >
      正码五
    </div>
    <div class="animated fadeInLeft">
      <div class="m-[6px] py-[3px] px-[15px] flex items-center justify-center">
        <div class="w-full grid grid-cols-3 gap-1">
          <div
            v-for="(item, index) in parlayItemList5"
            :key="index"
            @click="singleItemSelect5(item.id)"
          >
            <LotteryParlayItem :item="item" />
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex justify-start text-center gap-1 h-[30px] bg-[#e8f6ff] px-2 shadow-md text-[20px] font-bold z-10 overflow-y-scroll"
    >
      正码六
    </div>
    <div class="animated fadeInLeft">
      <div class="m-[6px] py-[3px] px-[15px] flex items-center justify-center">
        <div class="w-full grid grid-cols-3 gap-1">
          <div
            v-for="(item, index) in parlayItemList6"
            :key="index"
            @click="singleItemSelect6(item.id)"
          >
            <LotteryParlayItem :item="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, toRefs, defineEmits, watch, computed } from "vue";
import LotteryParlayItem from "@/components/global/lotteryParlayItem.vue";
import { katanStore } from "@/stores/katan";
import { storeToRefs } from "pinia";
const props = defineProps<{ betAmount: any; class1: string }>();
const { betAmount, class1 } = toRefs(props);
const emit = defineEmits<{
  (e: "changeBetItem", data: any): void;
  (e: "submitItemList", selectedItemList: any): void;
}>();
const class2 = ref("正码1");
const parlayItemList1 = ref([
  {
    id: 620,
    name: "单",
    rate: 10.0,
    locked: 0,
  },
  {},
  {
    id: 621,
    name: "双",
    rate: 10.0,
    locked: 0,
  },
  {
    id: 622,
    name: "大",
    rate: 10.0,
    locked: 0,
  },
  {},
  {
    id: 623,
    name: "小",
    rate: 10.0,
    locked: 0,
  },
  {
    id: 624,
    name: "红波",
    rate: 10.0,
    locked: 0,
  },
  {
    id: 625,
    name: "绿波",
    rate: 10.0,
    locked: 0,
  },
  {
    id: 626,
    name: "蓝波",
    rate: 10.0,
    locked: 0,
  },
]);

const parlayItemList2 = ref([
  {
    id: 627,
    name: "单",
    rate: 10.0,
    locked: 0,
  },
  {},
  {
    id: 628,
    name: "双",
    rate: 10.0,
    locked: 0,
  },
  {
    id: 629,
    name: "大",
    rate: 10.0,
    locked: 0,
  },
  {},
  {
    id: 630,
    name: "小",
    rate: 10.0,
    locked: 0,
  },
  {
    id: 631,
    name: "红波",
    rate: 10.0,
    locked: 0,
  },
  {
    id: 632,
    name: "绿波",
    rate: 10.0,
    locked: 0,
  },
  {
    id: 633,
    name: "蓝波",
    rate: 10.0,
    locked: 0,
  },
]);

const parlayItemList3 = ref([
  {
    id: 634,
    name: "单",
    rate: 10.0,
    locked: 0,
  },
  {},
  {
    id: 635,
    name: "双",
    rate: 10.0,
    locked: 0,
  },
  {
    id: 636,
    name: "大",
    rate: 10.0,
    locked: 0,
  },
  {},
  {
    id: 637,
    name: "小",
    rate: 10.0,
    locked: 0,
  },
  {
    id: 638,
    name: "红波",
    rate: 10.0,
    locked: 0,
  },
  {
    id: 639,
    name: "绿波",
    rate: 10.0,
    locked: 0,
  },
  {
    id: 640,
    name: "蓝波",
    rate: 10.0,
    locked: 0,
  },
]);

const parlayItemList4 = ref([
  {
    id: 641,
    name: "单",
    rate: 10.0,
    locked: 0,
  },
  {},
  {
    id: 642,
    name: "双",
    rate: 10.0,
    locked: 0,
  },
  {
    id: 643,
    name: "大",
    rate: 10.0,
    locked: 0,
  },
  {},
  {
    id: 644,
    name: "小",
    rate: 10.0,
    locked: 0,
  },
  {
    id: 645,
    name: "红波",
    rate: 10.0,
    locked: 0,
  },
  {
    id: 646,
    name: "绿波",
    rate: 10.0,
    locked: 0,
  },
  {
    id: 647,
    name: "蓝波",
    rate: 10.0,
    locked: 0,
  },
]);

const parlayItemList5 = ref([
  {
    id: 648,
    name: "单",
    rate: 10.0,
    locked: 0,
  },
  {},
  {
    id: 649,
    name: "双",
    rate: 10.0,
    locked: 0,
  },
  {
    id: 650,
    name: "大",
    rate: 10.0,
    locked: 0,
  },
  {},
  {
    id: 651,
    name: "小",
    rate: 10.0,
    locked: 0,
  },
  {
    id: 652,
    name: "红波",
    rate: 10.0,
    locked: 0,
  },
  {
    id: 653,
    name: "绿波",
    rate: 10.0,
    locked: 0,
  },
  {
    id: 654,
    name: "蓝波",
    rate: 10.0,
    locked: 0,
  },
]);

const parlayItemList6 = ref([
  {
    id: 655,
    name: "单",
    rate: 10.0,
    locked: 0,
  },
  {},
  {
    id: 656,
    name: "双",
    rate: 10.0,
    locked: 0,
  },
  {
    id: 657,
    name: "大",
    rate: 10.0,
    locked: 0,
  },
  {},
  {
    id: 658,
    name: "小",
    rate: 10.0,
    locked: 0,
  },
  {
    id: 659,
    name: "红波",
    rate: 10.0,
    locked: 0,
  },
  {
    id: 660,
    name: "绿波",
    rate: 10.0,
    locked: 0,
  },
  {
    id: 661,
    name: "蓝波",
    rate: 10.0,
    locked: 0,
  },
]);

const { dispatchKablData } = katanStore();
const selectedCount = ref(0);
const selectedBetAmount = ref(0);
const winAmount = ref(0);
const class3 = ref("");
const selectedAmount = ref("");
const selectedItemList = ref([]);
const totalOdds = ref(1);

const kablList = computed(() => {
  const { getKablList } = storeToRefs(katanStore());
  parlayItemList1.value.map((item) => {
    getKablList.value.map((kablItem) => {
      if (item.id === kablItem.id) {
        item.rate = kablItem.rate;
        item.locked = kablItem.locked;
      }
    });
  });

  parlayItemList2.value.map((item) => {
    getKablList.value.map((kablItem) => {
      if (item.id === kablItem.id) {
        item.rate = kablItem.rate;
        item.locked = kablItem.locked;
      }
    });
  });

  parlayItemList3.value.map((item) => {
    getKablList.value.map((kablItem) => {
      if (item.id === kablItem.id) {
        item.rate = kablItem.rate;
        item.locked = kablItem.locked;
      }
    });
  });

  parlayItemList4.value.map((item) => {
    getKablList.value.map((kablItem) => {
      if (item.id === kablItem.id) {
        item.rate = kablItem.rate;
        item.locked = kablItem.locked;
      }
    });
  });

  parlayItemList5.value.map((item) => {
    getKablList.value.map((kablItem) => {
      if (item.id === kablItem.id) {
        item.rate = kablItem.rate;
        item.locked = kablItem.locked;
      }
    });
  });

  parlayItemList6.value.map((item) => {
    getKablList.value.map((kablItem) => {
      if (item.id === kablItem.id) {
        item.rate = kablItem.rate;
        item.locked = kablItem.locked;
      }
    });
  });

  return getKablList.value;
});

const singleItemSelect1 = (id: number) => {
  let selected_620 = false;
  let selected_621 = false;
  let selected_622 = false;
  let selected_623 = false;
  let selected_624 = false;
  let selected_625 = false;
  let selected_626 = false;
  parlayItemList1.value.map((parlayItem) => {
    if (parlayItem.id === id) {
      parlayItem.selected = !parlayItem.selected;
      if (parlayItem.id == 620 && parlayItem.selected) {
        selected_620 = true;
      }
      if (parlayItem.id == 621 && parlayItem.selected) {
        selected_621 = true;
      }
      if (parlayItem.id == 622 && parlayItem.selected) {
        selected_622 = true;
      }
      if (parlayItem.id == 623 && parlayItem.selected) {
        selected_623 = true;
      }
      if (parlayItem.id == 624 && parlayItem.selected) {
        selected_624 = true;
      }
      if (parlayItem.id == 625 && parlayItem.selected) {
        selected_625 = true;
      }
      if (parlayItem.id == 626 && parlayItem.selected) {
        selected_626 = true;
      }
    }
  });

  parlayItemList1.value.map((parlayItem) => {
    if (selected_620 && parlayItem.id === 621) {
      parlayItem.selected = false;
    }
    if (selected_621 && parlayItem.id === 620) {
      parlayItem.selected = false;
    }
    if (selected_622 && parlayItem.id === 623) {
      parlayItem.selected = false;
    }
    if (selected_623 && parlayItem.id === 622) {
      parlayItem.selected = false;
    }
    if (selected_624 && parlayItem.id === 625) {
      parlayItem.selected = false;
    }
    if (selected_624 && parlayItem.id === 626) {
      parlayItem.selected = false;
    }
    if (selected_625 && parlayItem.id === 624) {
      parlayItem.selected = false;
    }
    if (selected_625 && parlayItem.id === 626) {
      parlayItem.selected = false;
    }
    if (selected_626 && parlayItem.id === 625) {
      parlayItem.selected = false;
    }
    if (selected_626 && parlayItem.id === 624) {
      parlayItem.selected = false;
    }
  });

  betResult();
};

const singleItemSelect2 = (id: number) => {
  let selected_627 = false;
  let selected_628 = false;
  let selected_629 = false;
  let selected_630 = false;
  let selected_631 = false;
  let selected_632 = false;
  let selected_633 = false;
  parlayItemList2.value.map((parlayItem) => {
    if (parlayItem.id === id) {
      parlayItem.selected = !parlayItem.selected;
      if (parlayItem.id == 627 && parlayItem.selected) {
        selected_627 = true;
      }
      if (parlayItem.id == 628 && parlayItem.selected) {
        selected_628 = true;
      }
      if (parlayItem.id == 629 && parlayItem.selected) {
        selected_629 = true;
      }
      if (parlayItem.id == 630 && parlayItem.selected) {
        selected_630 = true;
      }
      if (parlayItem.id == 631 && parlayItem.selected) {
        selected_631 = true;
      }
      if (parlayItem.id == 632 && parlayItem.selected) {
        selected_632 = true;
      }
      if (parlayItem.id == 633 && parlayItem.selected) {
        selected_633 = true;
      }
    }
  });

  parlayItemList2.value.map((parlayItem) => {
    if (selected_627 && parlayItem.id === 628) {
      parlayItem.selected = false;
    }
    if (selected_628 && parlayItem.id === 627) {
      parlayItem.selected = false;
    }
    if (selected_629 && parlayItem.id === 630) {
      parlayItem.selected = false;
    }
    if (selected_630 && parlayItem.id === 629) {
      parlayItem.selected = false;
    }
    if (selected_631 && parlayItem.id === 632) {
      parlayItem.selected = false;
    }
    if (selected_631 && parlayItem.id === 633) {
      parlayItem.selected = false;
    }
    if (selected_632 && parlayItem.id === 631) {
      parlayItem.selected = false;
    }
    if (selected_632 && parlayItem.id === 633) {
      parlayItem.selected = false;
    }
    if (selected_633 && parlayItem.id === 631) {
      parlayItem.selected = false;
    }
    if (selected_633 && parlayItem.id === 632) {
      parlayItem.selected = false;
    }
  });

  betResult();
};

const singleItemSelect3 = (id: number) => {
  let selected_634 = false;
  let selected_635 = false;
  let selected_636 = false;
  let selected_637 = false;
  let selected_638 = false;
  let selected_639 = false;
  let selected_640 = false;
  parlayItemList3.value.map((parlayItem) => {
    if (parlayItem.id === id) {
      parlayItem.selected = !parlayItem.selected;
      if (parlayItem.id == 634 && parlayItem.selected) {
        selected_634 = true;
      }
      if (parlayItem.id == 635 && parlayItem.selected) {
        selected_635 = true;
      }
      if (parlayItem.id == 636 && parlayItem.selected) {
        selected_636 = true;
      }
      if (parlayItem.id == 637 && parlayItem.selected) {
        selected_637 = true;
      }
      if (parlayItem.id == 638 && parlayItem.selected) {
        selected_638 = true;
      }
      if (parlayItem.id == 639 && parlayItem.selected) {
        selected_639 = true;
      }
      if (parlayItem.id == 640 && parlayItem.selected) {
        selected_640 = true;
      }
    }
  });

  parlayItemList3.value.map((parlayItem) => {
    if (selected_634 && parlayItem.id === 635) {
      parlayItem.selected = false;
    }
    if (selected_635 && parlayItem.id === 634) {
      parlayItem.selected = false;
    }
    if (selected_636 && parlayItem.id === 637) {
      parlayItem.selected = false;
    }
    if (selected_637 && parlayItem.id === 636) {
      parlayItem.selected = false;
    }
    if (selected_638 && parlayItem.id === 639) {
      parlayItem.selected = false;
    }
    if (selected_638 && parlayItem.id === 640) {
      parlayItem.selected = false;
    }
    if (selected_639 && parlayItem.id === 638) {
      parlayItem.selected = false;
    }
    if (selected_639 && parlayItem.id === 640) {
      parlayItem.selected = false;
    }
    if (selected_640 && parlayItem.id === 638) {
      parlayItem.selected = false;
    }
    if (selected_640 && parlayItem.id === 639) {
      parlayItem.selected = false;
    }
  });

  betResult();
};

const singleItemSelect4 = (id: number) => {
  let selected_641 = false;
  let selected_642 = false;
  let selected_643 = false;
  let selected_644 = false;
  let selected_645 = false;
  let selected_646 = false;
  let selected_647 = false;
  parlayItemList4.value.map((parlayItem) => {
    if (parlayItem.id === id) {
      parlayItem.selected = !parlayItem.selected;
      if (parlayItem.id == 641 && parlayItem.selected) {
        selected_641 = true;
      }
      if (parlayItem.id == 642 && parlayItem.selected) {
        selected_642 = true;
      }
      if (parlayItem.id == 643 && parlayItem.selected) {
        selected_643 = true;
      }
      if (parlayItem.id == 644 && parlayItem.selected) {
        selected_644 = true;
      }
      if (parlayItem.id == 645 && parlayItem.selected) {
        selected_645 = true;
      }
      if (parlayItem.id == 646 && parlayItem.selected) {
        selected_646 = true;
      }
      if (parlayItem.id == 647 && parlayItem.selected) {
        selected_647 = true;
      }
    }
  });

  parlayItemList4.value.map((parlayItem) => {
    if (selected_641 && parlayItem.id === 642) {
      parlayItem.selected = false;
    }
    if (selected_642 && parlayItem.id === 641) {
      parlayItem.selected = false;
    }
    if (selected_643 && parlayItem.id === 644) {
      parlayItem.selected = false;
    }
    if (selected_644 && parlayItem.id === 643) {
      parlayItem.selected = false;
    }
    if (selected_645 && parlayItem.id === 646) {
      parlayItem.selected = false;
    }
    if (selected_645 && parlayItem.id === 647) {
      parlayItem.selected = false;
    }
    if (selected_646 && parlayItem.id === 645) {
      parlayItem.selected = false;
    }
    if (selected_646 && parlayItem.id === 647) {
      parlayItem.selected = false;
    }
    if (selected_647 && parlayItem.id === 645) {
      parlayItem.selected = false;
    }
    if (selected_647 && parlayItem.id === 646) {
      parlayItem.selected = false;
    }
  });

  betResult();
};

const singleItemSelect5 = (id: number) => {
  let selected_648 = false;
  let selected_649 = false;
  let selected_650 = false;
  let selected_651 = false;
  let selected_652 = false;
  let selected_653 = false;
  let selected_654 = false;
  parlayItemList5.value.map((parlayItem) => {
    if (parlayItem.id === id) {
      parlayItem.selected = !parlayItem.selected;
      if (parlayItem.id == 648 && parlayItem.selected) {
        selected_648 = true;
      }
      if (parlayItem.id == 649 && parlayItem.selected) {
        selected_649 = true;
      }
      if (parlayItem.id == 650 && parlayItem.selected) {
        selected_650 = true;
      }
      if (parlayItem.id == 651 && parlayItem.selected) {
        selected_651 = true;
      }
      if (parlayItem.id == 652 && parlayItem.selected) {
        selected_652 = true;
      }
      if (parlayItem.id == 653 && parlayItem.selected) {
        selected_653 = true;
      }
      if (parlayItem.id == 654 && parlayItem.selected) {
        selected_654 = true;
      }
    }
  });

  parlayItemList5.value.map((parlayItem) => {
    if (selected_648 && parlayItem.id === 649) {
      parlayItem.selected = false;
    }
    if (selected_649 && parlayItem.id === 648) {
      parlayItem.selected = false;
    }
    if (selected_650 && parlayItem.id === 651) {
      parlayItem.selected = false;
    }
    if (selected_651 && parlayItem.id === 650) {
      parlayItem.selected = false;
    }
    if (selected_652 && parlayItem.id === 653) {
      parlayItem.selected = false;
    }
    if (selected_652 && parlayItem.id === 654) {
      parlayItem.selected = false;
    }
    if (selected_653 && parlayItem.id === 652) {
      parlayItem.selected = false;
    }
    if (selected_653 && parlayItem.id === 654) {
      parlayItem.selected = false;
    }
    if (selected_654 && parlayItem.id === 652) {
      parlayItem.selected = false;
    }
    if (selected_654 && parlayItem.id === 653) {
      parlayItem.selected = false;
    }
  });

  betResult();
};

const singleItemSelect6 = (id: number) => {
  let selected_654 = false;
  let selected_655 = false;
  let selected_656 = false;
  let selected_657 = false;
  let selected_658 = false;
  let selected_659 = false;
  let selected_660 = false;
  parlayItemList6.value.map((parlayItem) => {
    if (parlayItem.id === id) {
      parlayItem.selected = !parlayItem.selected;
      if (parlayItem.id == 654 && parlayItem.selected) {
        selected_654 = true;
      }
      if (parlayItem.id == 655 && parlayItem.selected) {
        selected_655 = true;
      }
      if (parlayItem.id == 656 && parlayItem.selected) {
        selected_656 = true;
      }
      if (parlayItem.id == 657 && parlayItem.selected) {
        selected_657 = true;
      }
      if (parlayItem.id == 658 && parlayItem.selected) {
        selected_658 = true;
      }
      if (parlayItem.id == 659 && parlayItem.selected) {
        selected_659 = true;
      }
      if (parlayItem.id == 660 && parlayItem.selected) {
        selected_660 = true;
      }
    }
  });

  parlayItemList6.value.map((parlayItem) => {
    if (selected_654 && parlayItem.id === 655) {
      parlayItem.selected = false;
    }
    if (selected_655 && parlayItem.id === 654) {
      parlayItem.selected = false;
    }
    if (selected_656 && parlayItem.id === 657) {
      parlayItem.selected = false;
    }
    if (selected_657 && parlayItem.id === 656) {
      parlayItem.selected = false;
    }
    if (selected_658 && parlayItem.id === 659) {
      parlayItem.selected = false;
    }
    if (selected_658 && parlayItem.id === 660) {
      parlayItem.selected = false;
    }
    if (selected_659 && parlayItem.id === 658) {
      parlayItem.selected = false;
    }
    if (selected_659 && parlayItem.id === 660) {
      parlayItem.selected = false;
    }
    if (selected_660 && parlayItem.id === 658) {
      parlayItem.selected = false;
    }
    if (selected_660 && parlayItem.id === 659) {
      parlayItem.selected = false;
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

const betResult = () => {
  selectedItemList.value = [];
  selectedCount.value = 0;
  selectedBetAmount.value = 0;
  winAmount.value = 0;
  class3.value = "";
  selectedAmount.value = "";
  totalOdds.value = 1;
  class2.value = "";

  parlayItemList1.value.map((item) => {
    if (item.selected && betAmount.value !== "") {
      selectedCount.value++;
      totalOdds.value *= item.rate;
      class2.value += "正码1" + ",";
      class3.value += item.name + "," + item.rate + ",";
      selectedAmount.value += betAmount.value + ",";
      let data = {
        class2: "正码1",
        name: item.name,
        odds: item.rate,
      };
      selectedItemList.value = [...selectedItemList.value, data];
    }
  });

  parlayItemList2.value.map((item) => {
    if (item.selected && betAmount.value !== "") {
      selectedCount.value++;
      totalOdds.value *= item.rate;
      class2.value += "正码2" + ",";
      class3.value += item.name + "," + item.rate + ",";
      selectedAmount.value += betAmount.value + ",";
      let data = {
        class2: "正码2",
        name: item.name,
        odds: item.rate,
      };
      selectedItemList.value = [...selectedItemList.value, data];
    }
  });

  parlayItemList3.value.map((item) => {
    if (item.selected && betAmount.value !== "") {
      selectedCount.value++;
      totalOdds.value *= item.rate;
      class2.value += "正码3" + ",";
      class3.value += item.name + "," + item.rate + ",";
      selectedAmount.value += betAmount.value + ",";
      let data = {
        class2: "正码3",
        name: item.name,
        odds: item.rate,
      };
      selectedItemList.value = [...selectedItemList.value, data];
    }
  });

  parlayItemList4.value.map((item) => {
    if (item.selected && betAmount.value !== "") {
      selectedCount.value++;
      totalOdds.value *= item.rate;
      class2.value += "正码4" + ",";
      class3.value += item.name + "," + item.rate + ",";
      selectedAmount.value += betAmount.value + ",";
      let data = {
        class2: "正码4",
        name: item.name,
        odds: item.rate,
      };
      selectedItemList.value = [...selectedItemList.value, data];
    }
  });

  parlayItemList5.value.map((item) => {
    if (item.selected && betAmount.value !== "") {
      selectedCount.value++;
      totalOdds.value *= item.rate;
      class2.value += "正码5" + ",";
      class3.value += item.name + "," + item.rate + ",";
      selectedAmount.value += betAmount.value + ",";
      let data = {
        class2: "正码5",
        name: item.name,
        odds: item.rate,
      };
      selectedItemList.value = [...selectedItemList.value, data];
    }
  });

  parlayItemList6.value.map((item) => {
    if (item.selected && betAmount.value !== "") {
      selectedCount.value++;
      totalOdds.value *= item.rate;
      class3.value += item.name + "," + item.rate + ",";
      class3.value += item.name + ",";
      selectedAmount.value += betAmount.value + ",";
      let data = {
        class2: "正码6",
        name: item.name,
        odds: item.rate,
      };
      selectedItemList.value = [...selectedItemList.value, data];
    }
  });

  let emitData = {
    selectedCount: selectedCount.value,
    selectedBetAmount: betAmount.value,
    winAmount: (totalOdds.value - 1) * Number(betAmount.value),
    class3: class3.value,
    class2: class2.value,
    totalOdds: totalOdds.value.toFixed(2),
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
