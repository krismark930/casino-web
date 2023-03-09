<template>
    <div v-for="(item, index) in bankList" :key="index"
        class="bg-white flex justify-between items-center mt-[10px] px-3 py-[15px]">
        <div class="text-center">
            <img class="w-[55px] h-[24px] px-2" src="@/assets/images/my/crypto.png" />
            <div class="text-[12px] text-bold">{{ item.bank.split('-')[1] }}</div>
        </div>
        <span class="text-[13px] text-bold">{{ item.bank_address.substring(0, 7)+'*******'+ item.bank_address.substring(item.bank_address.length-7,item.bank_address.length) }}</span>
        <span class="text-[12px] text-[#4EABFF]" @click="editCryptoAccount(item)">编辑</span>
    </div>
    <div v-if="bankList.length === 0">
        <img class="p-4" referrerpolicy="no-referrer" src="@/assets/images/my/bg-account.png" />
    </div>
    <div  :class="[bankList.length > 3 ? 'mt-1':'absolute top-[450px]']">
        <button
            class="flex justify-center w-[335px] bg-white py-2 ml-2 rounded-sm focus:border focus:border-gray-900 focus:rounded-none"
            @click="addCrypto">
            <div class="w-full flex justify-center items-center">
                <img class="w-[15px] h-[15px]" referrerpolicy="no-referrer" src="@/assets/images/my/icon-plus.png" />
                <span class="text-[15px] pl-1 text-[#454558]">添加银行卡</span>
            </div>
        </button>
        <div class="mt-[30px]  text-[#C0C4CD] bg-transparent text-[13px]  w-full flex justify-center">
            最多支持添加10张银行卡
        </div>
    </div>
    
</template>
<script setup lang="ts">
import router from '@/router';
import { ref, onMounted } from 'vue';
import { useBankAccountStore} from '@/stores/bankAccount';
import { storeToRefs } from 'pinia';
const bankList = ref([]);
const { cryptoAccounts } = storeToRefs(useBankAccountStore());
const { setEditCrypto } = useBankAccountStore();
onMounted( async ()=>{
    bankList.value = cryptoAccounts.value
});

const addCrypto = () => {
    router.push({ name: 'addCrypto' })
}

const editCryptoAccount = (item: any) => {
    setEditCrypto(item);
    router.push({ name: 'addCrypto' })
}
</script>