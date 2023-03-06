<template>
    <div class="animated fadeInLeft">
        <van-nav-bar class="border-b-2 border-gray-300" fixed @click-left="onClickLeft">
            <template #left>
                <img class="w-1" referrerpolicy="no-referrer" src="@/assets/images/my/arrow-left.png" />
            </template>
            <template #title>
                <span class="pt-[10px] text-[#454558]">添加虚拟币账户</span>
            </template>
            <template #right> </template>
        </van-nav-bar>
        <div class="p-3 pt-[46px] pb-[60px]">
            <div class="pt-3 text-[16px]">
                <div class="">
                    <label for="name" class="block font-semibold text-[#454558]">别名</label>
                    <div class="mt-[7px] border-b border-gray-300 focus-within:border-gray-500 pb-[12px]">
                        <input type="text" v-model="bankAccount" placeholder="别名能便于区分您名下的虚拟币账户" name="name" id="name"
                            class="block w-full border-0 border-b border-transparent placeholder-[#CBCBCB]" />
                    </div>
                </div>
                <div class="mt-[14px]">
                    <label for="name" class="block font-semibold text-[#454558]">虚拟币账户</label>
                    <div class="mt-[7px] border-b border-gray-300 focus-within:border-gray-500 pb-[12px]">
                        <input type="text" v-model="bankAddress" placeholder="别名能便于区分您名下的虚拟币账户" name="name" id="name"
                            class="block w-full border-0 border-b border-transparent placeholder-[#CBCBCB]" />
                    </div>
                </div>

                <div class="mt-[15px]">
                    <span class="font-semibold text-[#454558]">虚拟币种类</span>
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
                <p class="w-full h-[1px] bg-[#CBCBCB] my-2"></p>
                <div class="mt-[10px]">
                    <span class="font-semibold text-[#454558]">虚拟币种类</span>
                    <div class="flex">
                        <div
                            @click="() => cryptoType = 'TRC20'"
                            :class="[cryptoType === 'TRC20'?'border-blue-600':'border-gray-300 ']"
                            class="relative flex justify-center items-center mr-3 mt-[6px] w-[90px] px-[6px] py-[3px] border  rounded-sm">
                            <span class="text-blue-700">TRC20</span>
                            <div v-if="cryptoType === 'TRC20'" class="absolute right-0 bottom-0 image-text_1">
                                <img class="w-[15px] h-[15px]" referrerpolicy="no-referrer"
                                    src="https://lanhu.oss-cn-beijing.aliyuncs.com/psar0m8wrggrj43h4jglt2a1pbq77if1jnf79e9304-f10e-4ff2-9724-bb196a573e26" />
                            </div>
                        </div>
                        <div
                            @click="() => cryptoType = 'ERC20'"
                            :class="[cryptoType === 'ERC20'?'border-blue-600':'border-gray-300 ']"
                            class="relative flex justify-center items-center mt-[6px] w-[90px] px-[6px] py-[3px] border rounded-sm">
                            <span class="text-blue-700">ERC20</span>
                            <div v-if="cryptoType === 'ERC20'" class="absolute right-0 bottom-0 image-text_1">
                                <img class="w-[15px] h-[15px]" referrerpolicy="no-referrer"
                                    src="https://lanhu.oss-cn-beijing.aliyuncs.com/psar0m8wrggrj43h4jglt2a1pbq77if1jnf79e9304-f10e-4ff2-9724-bb196a573e26" />
                            </div>
                        </div>
                    </div>
                </div>

                <p class="w-full h-[1px] bg-[#CBCBCB] my-2"></p>

                <div class="text-[15px] font-semibold text-[#454558]">
                    手机号码
                </div>
                <div class="text-[18px] font-bold">188****8888</div>
                <p class="w-full h-[1px] bg-[#CBCBCB] my-1"></p>

                <div class="text-[16px] font-bold text-[#454558]">验证码</div>
                <div class="text-[15px] flex justify-between">
                    <input type="text" v-model="verifyCode" placeholder="请输入验证码" name="name" id="name"
                        class="block w-1/2 border-0 border-b border-transparent placeholder-[#CBCBCB]" />
                    <button class="bg-blue-500 rounded-sm text-white px-2 py-[2px]" @click="onClick_1">
                        <span class="text_13">获取验证码</span>
                    </button>
                </div>
            </div>
            <div class="my-6">
                <button
                    :class="[{ 'bg-blue-200': !bankAccount  || !bankAddress }, 'bg-blue-500 text-white px-2 py-[10px] w-full text-[17px]']"
                    @click="onClick_2">
                    提交
                </button>
            </div>
            <div class="text-[#CBCBCB] text-[12px]">
                请认真校对虚拟币账户地址，账号错误资金将无法到账。<br />基本分布式云加密的虚拟币系统，全面报账您的资金安全。
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import router from '@/router';
import { useBankAccountStore } from '@/stores/bankAccount';
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';

const { user } = storeToRefs(useAuthStore());
const { editBank } = storeToRefs(useBankAccountStore());
const { addCryptoAccount , editCryptoAccount} = useBankAccountStore();
const bankAccount = ref('');
const bankAddress = ref('');
const verifyCode = ref('');
const cryptoType = ref('TRC20');
const onClick_1 = () => {

}
const onClick_2 = async () => {
    if(bankAccount.value  && bankAddress.value){
        if(editBank.value.id){
            const result = await editCryptoAccount(user.value.id , editBank.value.id,  'USDT-'+cryptoType.value, bankAccount.value, bankAddress.value );
            if(result.success){
                router.push({name: 'myAccount'});
            }
        }else{
            const result = await addCryptoAccount(user.value.id , 'USDT-'+cryptoType.value, bankAccount.value, bankAddress.value );
            if(result.success){
                router.push({name: 'myAccount'});
            }
        }
    }
}
const onClickLeft = () => {
    router.go(-1);
};
onMounted( async () => {
    if(editBank.value.id){
        console.log(editBank.value)
        bankAccount.value = editBank.value.bank_account;
        bankAddress.value = editBank.value.bank_address;
        cryptoType.value = editBank.value.bank.split('-')[1];
    }
})
</script>
