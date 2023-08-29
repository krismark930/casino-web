<template>
    <div class="animated fadeInLeft">
        <van-nav-bar class="border-b-2 border-gray-300" fixed @click-left="onClickLeft">
            <template #left>
                <img class="w-1" referrerpolicy="no-referrer" src="@/assets/images/my/arrow-left.png" />
            </template>
            <template #title>
                <span class="pt-[10px] text-[#454558]">{{ editCrypto.id ? t('currency_add.text_1') :
                    t('currency_add.text_2') }}</span>
            </template>
            <template #right>
                <img class="w-[12px]" referrerpolicy="no-referrer" src="@/assets/images/account/icon-delete.png"
                    @click="deleteItem" />
            </template>
        </van-nav-bar>
        <div class="p-3 pt-[46px] pb-[60px]">
            <div class="pt-3 text-[16px]">
                <!-- <div class="">
                    <label for="name" class="block font-semibold text-[#454558]">别名</label>
                    <div class="mt-[7px] border-b border-gray-300 focus-within:border-gray-500 pb-[12px]">
                        <input type="text" v-model="bankAccount" placeholder="别名能便于区分您名下的虚拟币账户" name="name" id="name"
                            class="block w-full border-0 border-b border-transparent placeholder-[#CBCBCB]" />
                    </div>
                </div> -->
                <div class="mt-[14px]">
                    <label for="name" class="block font-semibold text-[#454558]">{{ t('currency_add.text_3') }}</label>
                    <div class="mt-[7px] border-b border-gray-300 focus-within:border-gray-500 pb-[12px]">
                        <input type="text" v-model="bankAddress" :placeholder="t('currency_add.text_4')" name="name" id="name"
                            class="block w-full border-0 border-b border-transparent placeholder-[#CBCBCB]" />
                    </div>
                </div>

                <div class="mt-[15px]">
                    <span class="font-semibold text-[#454558]">{{ t('currency_add.text_5') }}</span>
                    <div
                        class="relative flex justify-center items-center mt-[8px] w-[90px] px-[6px] py-[3px] border border-blue-800 rounded-sm">
                        <img class="w-[22px] h-[22px] mr-[5px]" referrerpolicy="no-referrer"
                            src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps9xz1js7glvd8r521mkenkk0enfsxu9220qd658acb8-e3c0-4a5a-8e9d-8aae2caab87a" />
                        <span class="text-blue-700">USDT</span>
                        <div class="absolute right-0 bottom-0 image-text_1">
                            <img class="w-[15px] h-[15px]" referrerpolicy="no-referrer"
                                src="https://lanhu.oss-cn-beijing.aliyuncs.com/psar0m8wrggrj43h4jglt2a1pbq77if1jnf79e9304-f10e-4ff2-9724-bb196a573e26" />
                        </div>
                    </div>
                </div>
                <p class="w-full h-[1px] bg-[#CBCBCB] my-2">{{ t('currency_add.text_6') }}</p>
                <div class="mt-[10px]">
                    <span class="font-semibold text-[#454558]"></span>
                    <div class="flex">
                        <div @click="() => cryptoType = 'TRC20'"
                            :class="[cryptoType === 'TRC20' ? 'border-blue-600' : 'border-gray-300 ']"
                            class="relative flex justify-center items-center mr-3 mt-[6px] w-[90px] px-[6px] py-[3px] border  rounded-sm">
                            <img class="w-[22px] h-[22px] mr-[5px]" src="@/assets/images/deposit/usdttrc20.svg" />
                            <span class="text-blue-700">TRC20</span>
                            <div v-if="cryptoType === 'TRC20'" class="absolute right-0 bottom-0 image-text_1">
                                <img class="w-[15px] h-[15px]" referrerpolicy="no-referrer"
                                    src="https://lanhu.oss-cn-beijing.aliyuncs.com/psar0m8wrggrj43h4jglt2a1pbq77if1jnf79e9304-f10e-4ff2-9724-bb196a573e26" />
                            </div>
                        </div>
                        <div @click="() => cryptoType = 'ERC20'"
                            :class="[cryptoType === 'ERC20' ? 'border-blue-600' : 'border-gray-300 ']"
                            class="relative flex justify-center items-center mt-[6px] w-[90px] px-[6px] py-[3px] border rounded-sm">
                            <img class="w-[22px] h-[22px] mr-[5px]" src="@/assets/images/deposit/usdterc20.svg" />
                            <span class="text-blue-700">ERC20</span>
                            <div v-if="cryptoType === 'ERC20'" class="absolute right-0 bottom-0 image-text_1">
                                <img class="w-[15px] h-[15px]" referrerpolicy="no-referrer"
                                    src="https://lanhu.oss-cn-beijing.aliyuncs.com/psar0m8wrggrj43h4jglt2a1pbq77if1jnf79e9304-f10e-4ff2-9724-bb196a573e26" />
                            </div>
                        </div>
                    </div>
                </div>
                <p class="w-full h-[1px] bg-[#CBCBCB] my-2"></p>
                <!-- <div class="text-[15px] font-semibold text-[#454558]">
                    {{ t('currency_add.text_7') }}
                </div>
                <div class="text-[18px] font-bold">188****8888</div>
                <p class="w-full h-[1px] bg-[#CBCBCB] my-1"></p>
                <div class="text-[16px] font-bold text-[#454558]">{{ t('currency_add.text_8') }}</div>
                <div class="text-[15px] flex justify-between">
                    <input type="text" v-model="verifyCode" :placeholder="t('currency_add.text_9')" name="name"
                        id="name" class="block w-1/2 border-0 border-b border-transparent placeholder-[#CBCBCB]" />
                    <button class="bg-blue-500 rounded-sm text-white px-2 py-[2px]" @click=" onClick_1 ">
                        <span class="text_13">{{ t('currency_add.text_10') }}</span>
                    </button>
                </div> -->
            </div>
            <div class="my-6">
                <button
                    :class=" [{ 'bg-blue-200': !bankAddress }, 'bg-blue-500 text-white px-2 py-[10px] w-full text-[17px]'] "
                    @click="onClick_2">
                    {{ t('currency_add.text_11') }}
                </button>
            </div>
            <div class="text-[#CBCBCB] text-[12px]">
                {{ t('currency_add.text_12') }}<br/>{{ t('currency_add.text_13') }}
            </div>
        </div>
        <van-overlay :show="deleteShow">
            <div class="wrapper" @click.stop>
                <div class="wrapper_box rounded">
                    <p class="text-center w-full py-2 border-b">{{ t('currency_add.text_14') }}</p>
                    <div class="flex items-center justify-between w-full h-full">
                        <button @click="() => deleteShow = false" class="border-r h-full w-full">{{ t('currency_add.text_15') }}</button>
                        <button @click="commit" class="w-full text-blue-500">{{ t('currency_add.text_16') }}</button>
                    </div>
                </div>
            </div>
        </van-overlay>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import router from '@/router';
import { useBankAccountStore } from '@/stores/bankAccount';
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';
import { showToast } from 'vant';
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const { user } = storeToRefs(useAuthStore());
const { editCrypto } = storeToRefs(useBankAccountStore());
const { addCryptoAccount, editCryptoAccount, deleteCrypto } = useBankAccountStore();
const bankAccount = ref('');
const bankAddress = ref('');
const verifyCode = ref('');
const cryptoType = ref('TRC20');
const deleteShow = ref(false);
const onClick_1 = () => {
}
const onClick_2 = async () => {
    if (bankAddress.value) {
        if (editCrypto.value.id) {
            const result = await editCryptoAccount(user.value.id, editCrypto.value.id, 'USDT', cryptoType.value, bankAddress.value);
            if (result.success) {
                router.push({ name: 'myAccount' });
            }
        } else {
            const result = await addCryptoAccount(user.value.id, 'USDT', cryptoType.value, bankAddress.value);
            if (result.success) {
                router.push({ name: 'myAccount' });
            }
        }
    }
}
const onClickLeft = () => {
    router.go(-1);
};
const deleteItem = () => {
    deleteShow.value = true;
}
const commit = async () => {
    const response = await deleteCrypto(editCrypto.value.id, user.value.id);
    if (response.success) {
        deleteShow.value = false
        showToast({
            message: t('currency_add.text_17'),
            icon: new URL('@/assets/images/account/icon-success.png', import.meta.url).href,
        })
    } else {
        deleteShow.value = false
        showToast(response.message)
    }
}
onMounted(async () => {
    if (editCrypto.value.id) {
        bankAccount.value = editCrypto.value.bank_account;
        bankAddress.value = editCrypto.value.bank_address;
        cryptoType.value = editCrypto.value.bank.split('-')[1];
    }
})
</script>
<style scoped lang="scss">
.wrapper {
    width: 100%;
    display: flex;
    justify-content: center;

    .wrapper_box {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        font-size: 16px;
        width: 280px;
        height: 150px;
        background-color: #FFFFFF;
        margin-top: 250px;
        padding-left: 0px;
        padding-top: 10px;
        padding-bottom: 0px;
        border-radius: 10px;

        span {
            line-height: 45px;
            width: 100%;
            border-bottom: 1px solid #e9e9e9;
            text-align: start;
        }

        .button {
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;

            button {
                color: #4EABFF;
                width: 50%;
                height: 100%;
                background-color: #FFFFFF;
                padding: 0;
                margin: 0;
                border: 0;
            }

            .bt1 {
                color: rgb(60, 58, 58);
                border-right: 1px solid #e9e9e9;
            }
        }
    }
}
</style>