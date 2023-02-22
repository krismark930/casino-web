<template>
    <div>
        
        <div class="mt-[10px] bg-white p-2">
            <div>
                <span class="font-medium text-[#454558]">存款金额</span>
            </div>
            <p class="w-full h-[1px] bg-gray-200 mt-[12px]"></p>
            <div class="flex mt-[10px] flex-wrap justify-between">
                <div v-for="(item, index) in currencyList" :key="index" @click="selectToken(item)"
                    :class="[tokenActive === item.id ? 'border border-blue-600' : 'border border-gray-200']"
                    class="relative flex justify-center items-center mt-[6px] w-[78px] px-[6px] py-[3px]  rounded-sm">
                    <span class="text-[12px] text-black">￥{{ item.value }}</span>
                    <div v-if="tokenActive === item.id" class="absolute right-0 bottom-0 image-text_1">
                        <img class="w-[15px] h-[15px]" referrerpolicy="no-referrer"
                            src="@/assets/images/deposit/active.png"/>
                    </div>
                </div>
            </div>
            <div class="text-wrapper_2 flex justify-start items-end mt-[20px]">
                <p class="text-[15px]">￥</p>
                <p class="block w-full border-0 border-b border-transparent placeholder-[#CBCBCB] placeholder:text-[12px] text-[25px] font-bold">{{ amount }}</p>
            </div>
        </div>
       
        <div class="flex-col bg-white">
            <div class="px-2 pt-2">
                <button :class="[amount ? 'bg-blue-500' : 'bg-blue-200']"
                    class="text-[18px] flex justify-center bg-blue-500 text-white rounded-sm w-full py-1"
                    @click="onClick_1">
                    <span class="text_20">立即存款</span>
                </button>
            </div>

            <div class="text-[12px] pb-[60px] flex justify-center pt-[30px]">
                <span class="text_21">存款遇到问题？联系</span>
                <span class="text-blue-300">人工客服</span>
                <span class="text_23">&nbsp;解决</span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router';

const tokenActive = ref(1);
const name = ref('');
const amount = ref(109);
const currencyList = ref([
    {
        id: 1,
        value: 109
    },
    {
        id: 2,
        value: 502
    },
    {
        id: 3,
        value: 1001
    },
    {
        id: 4,
        value: 2003
    },
    {
        id: 5,
        value: 4991
    },
])
const selectToken = (item: any) => {
    tokenActive.value = item.id;
    amount.value = item.value;
};

const onClick_1 = () => {
    router.push({ name: 'depositInformation' });
}
</script>

<!-- const { route, index, total, id } = defineProps<{ route: any, index: number, total: number, id:string }>()
const emit = defineEmits(['changeMenuDialog', 'changeChecked', 'deleteItem', 'editPopup', 'moveToPopup', 'changeStartPoint', 'changeFinishPoint'])
  emit('deleteItem', route.optimize_route_id) -->