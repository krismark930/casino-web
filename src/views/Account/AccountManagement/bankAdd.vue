<template>
    <div class="animated fadeInLeft">
        <van-nav-bar class="border-b-2 border-gray-300" fixed @click-left="onClickLeft">
            <template #left>
                <img class="w-1" referrerpolicy="no-referrer" src="@/assets/images/my/arrow-left.png" />
            </template>
            <template #title>
                <span class="pt-[10px] text-[#454558]">添加银行卡</span>
            </template>
            <template #right> </template>
        </van-nav-bar>
        <div class="p-3 pt-[46px] pb-[60px]">
            <div class="pt-[10px] text-[16px]">
                <div>
                    <p class="text-[12px] text-red-500">
                        真实姓名与银行卡号不匹配
                    </p>
                    <div class="text-[15px] font-semibold text-[#454558] pt-1">
                        手机号码
                    </div>
                    <div class="text-[18px] font-bold text-[#454558] pt-1">188****8888</div>
                </div>
                <div class="mt-[30px]">
                    <div class="text-[16px] font-bold text-[#454558]">验证码</div>
                    <div class="text-[15px] flex justify-between">
                        <input type="text" v-model="verifyCode" placeholder="请输入验证码" name="name" id="name"
                            class="block w-1/2 border-0 border-b border-transparent placeholder-[#CBCBCB]" />
                        <button :class="[verifyCode ?'bg-gray-300 ':'bg-blue-500']" class="rounded-sm text-white px-2 py-[2px]" @click="onClick_1">
                            <span class="text_13">获取验证码</span>
                        </button>
                    </div>
                    <p class="w-full h-[1px] bg-[#CBCBCB] my-1"></p>
                    <p class="text-[12px] text-red-500">
                        手机号码将有助于您找回账号，同时也是客服人员确定您身 份的重要依据
                    </p>
                </div>
            </div>
            <div class="mt-6 mb-3">
                <button
                    :class="[{ 'bg-blue-200': !verifyCode }, 'bg-blue-400 text-white px-2 py-[10px] w-full text-[17px]']"
                    @click="submit">
                    提交
                </button>
            </div>
            <div class="text-[#CBCBCB] text-[12px] flex justify-center">
                请认真校对虚拟币账户地址
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router';
import { useBankAccountStore } from '@/stores/bankAccount';
import { useAuthStore } from '@/stores/auth';
import { showToast } from 'vant';
const { user } = useAuthStore(); 
const { bankAdd, addBankAccount } = useBankAccountStore();
const alias = ref('');
const cryptoAccount = ref('888888');
const verifyCode = ref('');
const onClick_1 = () => {
}
const submit = async () => {
    if(verifyCode.value){
        const result = await addBankAccount(user.id);
        if(result.success){
            showToast(result.message);
            router.push({ name: 'myAccount' })
        }else{
            showToast(result.message);
        }
    }
}
const onClickLeft = () => {
    router.go(-1);
};
</script>
