<template>
    <div>
        <div class="mt-[10px] bg-white p-2">
            <div class="font-medium text-[#454558] mt-0">虚拟币种类</div>
            <div
                class="relative flex justify-center items-center mt-[18px] w-[90px] px-[6px] py-[3px] border border-blue-800 rounded-sm">
                <img class="w-[22px] h-[22px] mr-[5px]" referrerpolicy="no-referrer"
                    src="@/assets/images/deposit/usdt.png"/>
                <span class="text-blue-700">USDT</span>
                <div class="absolute right-0 bottom-0 image-text_1">
                    <img class="w-[15px] h-[15px]" referrerpolicy="no-referrer"
                        src="@/assets/images/deposit/active.png"/>
                </div>
            </div>
        </div>
        <div class="mt-[10px] bg-white p-2">
            <span class="font-medium text-[#454558]">虚拟币种类</span>
            <div class="flex mt-[10px]">
                <div v-for="(item, index) in tokenList" :key="index" @click="selectToken(item.id)"
                    :class="[tokenActive === item.id ? 'border border-blue-600' : 'border border-gray-200']"
                    class="relative flex justify-center items-center mr-3 mt-[6px] w-[90px] px-[6px] py-[3px]  rounded-sm">
                    <span class="text-blue-700">{{ item.name }}</span>
                    <div v-if="tokenActive === item.id" class="absolute right-0 bottom-0 image-text_1">
                        <img class="w-[15px] h-[15px]" referrerpolicy="no-referrer"
                            src="@/assets/images/deposit/active.png"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-[10px] bg-white py-1 px-2">
            <p class="mt-[10px] font-medium text-[#454558]">存款金额</p>
            <p class="w-full h-[1px] bg-gray-200 my-[7px]"></p>
            <div class="text-wrapper_2 flex justify-start items-end">
                <p class="text-[15px]">￥</p>
                <input type="text" v-model="amount" placeholder="请输入￥100~￥1000000" name="name" id="name"
                    class="block w-full border-0 border-b border-transparent placeholder-[#CBCBCB] placeholder:text-[12px] text-[25px] font-bold" />
            </div>
            <p class="w-full h-[1px] bg-gray-200 my-[7px]"></p>
            <div class="text-[12px] flex justify-between py-1">
                <p class="text_15">参考汇率1USDT≈7.22000CNY</p>
                <div class="text-wrapper_3">
                    <span class="text_16">预计支付</span>
                    <span class="text-blue-300">1,347.7088</span>
                    <span class="text_18">USDT</span>
                </div>
            </div>
            <div class="text-[12px] flex justify-between py-1">
                <span class="text_19">实际到账金额将以支付时的汇率计算</span>
                <div class="image-text_1 flex justify-between items-center">
                    <span class="text-blue-300 mr-1">了解虚拟币</span>
                    <img class="w-[13px] h-[13px]" referrerpolicy="no-referrer"
                        src="@/assets/images/my/arrow-double-right.png" />
                </div>
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
import { toRefs , ref} from 'vue';
import router from '@/router';
const amount = ref('');
const state = defineProps<{tokenList:Array<any>, tokenActive:number}>();
const { tokenList, tokenActive } = toRefs(state);
const emit = defineEmits(['selectToken'])
const selectToken = (id: number) => {
    emit('selectToken', id);
}
const onClick_1 = () => {
    router.push({ name: 'depositInformation' });
}
</script>

<!-- const { route, index, total, id } = defineProps<{ route: any, index: number, total: number, id:string }>()
const emit = defineEmits(['changeMenuDialog', 'changeChecked', 'deleteItem', 'editPopup', 'moveToPopup', 'changeStartPoint', 'changeFinishPoint'])
  emit('deleteItem', route.optimize_route_id) -->