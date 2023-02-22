<template>
    
    <div v-for="(item, index) in backList" :key="index"
        class="bg-white flex justify-between items-center mt-[10px] px-3 py-[15px]">
        <div class="image-text_1 flex justify-between items-center">
            <img class="w-[25px]" referrerpolicy="no-referrer" :src="item.img" />
            <span class="text-[12px] pl-1">{{ item.name }}</span>
        </div>
        <span class="text-[13px] text-bold">{{ item.number }}</span>
        <span class="text-[12px] text-[#4EABFF]" @click="editBank(item)">{{
            item.control
        }}</span>
    </div>
    <div v-if="backList.length === 0">
        <img class="p-4" referrerpolicy="no-referrer" src="@/assets/images/my/bg-account.png" />
    </div>
    <button
        class="absolute top-[350px] flex justify-center w-[335px] bg-white py-2 ml-2 rounded-sm focus:border focus:border-gray-900 focus:rounded-none"
        @click="addBank">
        <div class="w-full flex justify-center items-center">
            <img class="w-[15px] h-[15px]" referrerpolicy="no-referrer" src="@/assets/images/my/icon-plus.png" />
            <span class="text-[15px] pl-1 text-[#454558]">添加银行卡</span>
        </div>
    </button>
    <div class="text-[#C0C4CD] text-[13px] absolute top-[450px] w-full flex justify-center">
        最多支持添加10张银行卡
    </div>
</template>
<script setup lang="ts">
import router from '@/router';
import {ref} from 'vue';
const backList = ref([
    {
        img: new URL('@/assets/images/my/bank-mark.png', import.meta.url).href,
        name: '农业银行',
        number: '622848******888',
        control: '编辑'
    }
]);

const addBank = () => {
	router.push({ name: 'addBank' })
}
const editBank = (item: any) => {
    router.push({name: 'editBankCard'});
}
</script>