<template>
    <div class="animated fadeInLeft overflow-y-auto" style="height: calc(100vh - 250px);">
        <div class="m-[6px] py-[3px] px-[15px] flex items-center justify-center">
            <div class="w-full grid grid-cols-3 gap-1">
                <div v-for="(item, index) in generalItemList" :key="index">
                    <LotteryGeneralItem :item="item" @changeItem="changeItem" />
                </div>
            </div>
        </div>
    </div>
    <van-number-keyboard v-model="singleGold" :show="keyboardShow" :maxlength="20" @blur="keyboardShow = false" />
</template>
<script setup lang="ts">
import { ref, computed, onMounted, watch, toRefs, defineEmits } from 'vue';
import { storeToRefs } from 'pinia';
import { katanStore } from '@/stores/katan';
import LotteryGeneralItem from '@/components/global/lotteryGeneralItem.vue';
const props = defineProps<{ class1: string, class2: string }>();
const emit = defineEmits<{
    (e: 'changeBetItem', data: any): void,
    (e: 'submitItemList', selectedItemList: any): void,
}>()
const { class1, class2 } = toRefs(props);
const { dispatchKablData } = katanStore();
const keyboardShow = ref(false);
const selectedId = ref(0);
const singleGold = ref("");
const selectedCount = ref(0);
const selectedBetAmount = ref(0);
const winAmount = ref(0);
const class3 = ref("");
const selectedAmount = ref("");
const selectedItemList = ref([]);
const generalItemList = ref([])
const generalInitItemList = ref([
    {
        id: 1,
        icon: "",
        num: 50,
        name: "大",
        real_name: "大",
        rate: 10.00,
        value: ""
    },
    {
        id: 2,
        icon: "",
        num: 51,
        name: "小",
        real_name: "小",
        rate: 10.00,
        value: ""
    },
    {
        id: 3,
        icon: "",
        num: 52,
        name: "单",
        real_name: "单",
        rate: 10.00,
        value: ""
    },
    {
        id: 4,
        icon: "",
        num: 53,
        name: "双",
        real_name: "双",
        rate: 10.00,
        value: ""
    },
    {
        id: 5,
        icon: "",
        num: 54,
        name: "红波",
        real_name: "红波",
        rate: 10.00,
        value: ""
    },
    {
        id: 6,
        icon: "",
        num: 55,
        name: "绿波",
        real_name: "绿波",
        rate: 10.00,
        value: ""
    },
    {
        id: 7,
        icon: "",
        num: 56,
        name: "蓝波",
        real_name: "蓝波",
        rate: 10.00,
        value: ""
    },
    {
        id: 8,
        icon: "",
        num: 57,
        name: "合大",
        real_name: "合大",
        rate: 10.00,
        value: ""
    },
    {
        id: 9,
        icon: "",
        num: 58,
        name: "合小",
        real_name: "合小",
        rate: 10.00,
        value: ""
    },
    {
        id: 10,
        icon: "",
        num: 59,
        name: "合单",
        real_name: "合单",
        rate: 10.00,
        value: ""
    },
    {
        id: 11,
        icon: "",
        num: 60,
        name: "合双",
        real_name: "合双",
        rate: 10.00,
        value: ""
    },
    {
        id: 12,
        icon: "",
        num: 61,
        name: "尾大",
        real_name: "尾大",
        rate: 10.00,
        value: ""
    },
    {
        id: 13,
        icon: "",
        num: 62,
        name: "尾小",
        real_name: "尾小",
        rate: 10.00,
        value: ""
    },
])
const kablList = computed(() => {
    generalItemList.value = generalInitItemList.value
    const { getKablList } = storeToRefs(katanStore());
    generalItemList.value.map(item => {
        if (getKablList.value.length > 0) {
            getKablList.value.map(kablItem => {
                if (kablItem.class3 == item.real_name) {
                    if (class2.value == "正码2") {
                        item.id += 13;
                    } else if (class2.value == "正码3") {
                        item.id += 26;
                    } else if (class2.value == "正码4") {
                        item.id += 39;
                    } else if (class2.value == "正码5") {
                        item.id += 52;
                    } else if (class2.value == "正码6") {
                        item.id += 65;
                    }
                    item["rate"] = kablItem["rate"];
                    item["locked"] = kablItem["locked"];
                }
            })
        }
    })

    return getKablList.value;
})
const changeItem = (data: any) => {
    keyboardShow.value = data.keyboardShow;
    selectedId.value = data.selectedId;
    singleGold.value = "";
}
const betResult = () => {
    selectedItemList.value = [];
    selectedCount.value = 0;
    selectedBetAmount.value = 0;
    winAmount.value = 0;
    class3.value = "";
    selectedAmount.value = "";

    generalItemList.value.map(item => {
        if (item.value !== "") {
            selectedCount.value++;
            selectedBetAmount.value += Number(item.value)
            winAmount.value += (Number(item.value) * item.rate - item.value);
            class3.value += item.id + ",";
            selectedAmount.value += item.value + ",";
            let data = {
                class2: class2.value,
                num: item.name,
                odds: item.rate,
                betAmount: item.value,
                winableAmount: (Number(item.value) * item.rate - item.value).toFixed(2)
            }
            selectedItemList.value = [...selectedItemList.value, data];
        }
    })

    let emitData = {
        selectedCount: selectedCount.value,
        selectedBetAmount: selectedBetAmount.value,
        winAmount: winAmount.value,
        class3: class3.value,
        class2: class2.value,
        selectedAmount: selectedAmount.value
    }

    emit('changeBetItem', emitData);
    emit('submitItemList', selectedItemList.value);

}
watch(singleGold, () => {
    generalItemList.value.map(item => {
        if (item.id === selectedId.value) {
            item.value = singleGold.value;
        }
    });
    betResult();
}, { deep: true });
watch(class2, async () => {
    await dispatchKablData({ class1: class1.value, class2: class2.value });
    console.log(kablList.value);
}, { deep: true });
onMounted(async () => {
    await dispatchKablData({ class1: class1.value, class2: class2.value });
    console.log(kablList.value);
})
</script>

<style></style>