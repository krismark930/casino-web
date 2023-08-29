<template>
    <div class="animated fadeInLeft">
        <van-nav-bar class="border-b-2 border-gray-300" fixed @click-left="onClickLeft">
            <template #left>
                <img class="w-1" referrerpolicy="no-referrer" src="@/assets/images/my/arrow-left.png" />
            </template>
            <template #title>
                <span class="pt-[10px] text-[#454558]">{{ t('bank_add_3.text_1') }}</span>
            </template>
            <template #right> </template>
        </van-nav-bar>
        <div class="py-3 pt-[46px] pb-[60px] text-[13px] bg-blue-50 h-screen">
            <div class=" pt-1 bg-white">
                <div class="px-2 mt-[14px]">
                    <label for="name" class="block font-semibold text-[#454558] ">{{ t('bank_add_3.text_2') }}</label>
                    <div class="mt-[7px] border-b border-gray-300 focus-within:border-gray-500 pb-[15px] flex justify-between items-center"
                        @click="() => show = true">
                        <input type="text" v-model="bankAddress" :placeholder="t('bank_add_3.text_3')" name="name" id="name"
                            class="block w-full border-0 border-b border-transparent placeholder-[#CBCBCB]" />
                        <img class="w-[10px] h-[13px] mr-2" src="@/assets/images/my/arrow-right.png" alt="arrow" />
                    </div>
                    <div class="text-[12px]  text-red-500 pt-[5px] pb-1">
                        {{ t('bank_add_3.text_4') }}
                    </div>
                </div>
            </div>
            <div class="mx-2 mt-8">
                <button
                    :class="[[bankAddress ? 'bg-blue-400' : 'bg-blue-200'], ' text-white px-2 py-[10px] w-full text-[17px]']"
                    @click="submit">
                    {{ t('bank_add.text_8') }}
                </button>
            </div>
            <div class="mx-2 mt-2 text-[#CBCBCB] text-[12px] flex justify-center">
                {{ t('bank_add_3.text_6') }}
                <span class="text-blue-400">{{ t('bank_add_3.text_7') }}</span>
            </div>
        </div>{{ addressValue }}
        <van-popup v-model:show="show" position="bottom" class="rounded-t-md">
            <van-area v-model="addressValue" @cancel="cancel" @confirm="selectBankAddress"
                :cancel-button-text="t('bank_add_3.text_8')" :confirm-button-text="t('bank_add_3.text_9')"
                :area-list="areaList" />
        </van-popup>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router';
import { areaList } from '@vant/area-data';
import { useAuthStore } from '@/stores/auth';
import { useBankAccountStore } from '@/stores/bankAccount';
import { showToast } from "vant";
const { setBankAdd, bankAdd, addBankAccount } = useBankAccountStore();
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const { user } = useAuthStore();
const bankAddress = ref('');
const addressValue = ref('');
const verifyCode = ref('');
const active = ref(1);
const show = ref(false);
const bankList = ref([
    {
        id: 1,
        img: new URL('@/assets/images/my/crypto.png', import.meta.url).href,
        name: 'TRC20',
    },
    {
        id: 2,
        img: new URL('@/assets/images/my/crypto.png', import.meta.url).href,
        name: 'TRC20',
    }
])
const selectBankAddress = ({ selectedOptions }: any) => {
    let temp = '';
    selectedOptions.map((item: any) => {
        temp = temp + item.text + ' '
    })
    bankAddress.value = temp.trim();
    show.value = false;
}
const cancel = () => {
    show.value = false;
}
const submit = async () => {
    if (bankAddress.value !== '' && bankAdd.bankCardOwner) {
        setBankAdd({ bankCardOwner: bankAdd.bankCardOwner, bankCardType: bankAdd.bankCardType, bankType: bankAdd.bankType, bankAccount: bankAdd.bankAccount, bankAddress: bankAddress })
        // router.push({ name: 'addBank' });
        const result = await addBankAccount(user.id);
        if (result.success) {
            showToast(result.message);
            router.push({ name: 'myAccount' })
        } else {
            showToast(result.message);
        }
    }
}
const onClickLeft = () => {
    router.go(-1);
};
</script>
<style>
.van-picker__cancel {
    font-size: 20px;
    color: rgb(25, 141, 229);
}

.van-picker__confirm {
    font-size: 20px;
    color: rgb(25, 141, 229);
}</style>