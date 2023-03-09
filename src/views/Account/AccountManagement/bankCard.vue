<template>
    <div v-for="(item, index) in bankList" :key="index"
        class="bg-white flex justify-between items-center mt-[10px] px-3 py-[15px]">
        <div class="flex w-[90px]">
            <img class="w-[25px] h-[24px]" src="@/assets/images/my/bank-mark.png" />
            <div class="text-[12px] text-bold pl-1">{{ item.bank_type }}</div>
        </div>
        <span class="text-[13px] text-bold">{{ item.bank_account.substring(0, 7)+'*******'+ item.bank_account.substring(item.bank_account.length-7,item.bank_account.length) }}</span>
        <span class="text-[12px] text-[#4EABFF]" @click="editBank(item)">编辑</span>
    </div>
    <!-- <div 
        v-if="user.Bank_Account"
        class="bg-white flex justify-between items-center mt-[10px] px-3 py-[15px]">
        <div class="image-text_1 flex justify-between items-center">
            <img class="w-[25px]" referrerpolicy="no-referrer" src="@/assets/images/my/bank-mark.png" />
            <span class="text-[12px] pl-1">{{ user.Bank_Address }}</span>
        </div>
        <span class="text-[13px] text-bold">{{ user.Bank_Account.substring(0, 7)+'*******'+ user.Bank_Account.substring(user.Bank_Account.length-7,user.Bank_Account.length) }}</span>
        <span class="text-[12px] text-[#4EABFF]" @click="editBank(item)">编辑</span>
    </div> -->
    <div v-if="user.Bank_Account === null || user.Bank_Account === ''">
        <img class="p-4" referrerpolicy="no-referrer" src="@/assets/images/my/bg-account.png" />
    </div>

    <div  :class="[bankList && bankList.length > 3 ? 'mt-1':'absolute top-[450px]']">
        <button
            class="flex justify-center w-[335px] bg-white py-2 ml-2 rounded-sm focus:border focus:border-gray-900 focus:rounded-none"
            @click="addBank">
            <div class="w-full flex justify-center items-center">
                <img class="w-[15px] h-[15px]" referrerpolicy="no-referrer" src="@/assets/images/my/icon-plus.png" />
                <span class="text-[15px] pl-1 text-[#454558]">添加银行卡</span>
            </div>
        </button>
        <div class="mt-[30px]  text-[#C0C4CD] bg-transparent text-[13px]  w-full flex justify-center">
            最多支持添加10张银行卡
        </div>
    </div>

    <!-- <button
        class="absolute top-[350px] flex justify-center w-[335px] bg-white py-2 ml-2 rounded-sm focus:border focus:border-gray-900 focus:rounded-none"
        @click="addBank">
        <div class="w-full flex justify-center items-center">
            <img class="w-[15px] h-[15px]" referrerpolicy="no-referrer" src="@/assets/images/my/icon-plus.png" />
            <span class="text-[15px] pl-1 text-[#454558]">添加银行卡</span>
        </div>
    </button> -->
    <!-- <div class="text-[#C0C4CD] text-[13px] absolute top-[450px] w-full flex justify-center">
        最多支持添加10张银行卡
    </div> -->
</template>
<script setup lang="ts">
import router from '@/router';
import {ref, onMounted} from 'vue';
import {useAuthStore} from '@/stores/auth';
import { storeToRefs } from 'pinia';
import { useBankAccountStore } from '@/stores/bankAccount';
const {user} = storeToRefs(useAuthStore());
const { getBankList, bankAccounts, setEditBank } = useBankAccountStore();
const bankList = ref([])
onMounted(async ()=>{
    const result = await getBankList(user.value.id);
    bankList.value = result.bankList;
})

const addBank = () => {
	router.push({ name: 'addBank2' })
}
const editBank = (item: any) => {
    setEditBank(item);
    router.push({name: 'editBankCard'});
}
</script>