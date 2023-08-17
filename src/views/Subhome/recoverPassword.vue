<template>
    <div class="animated fadeInLeft">
        <van-nav-bar class="" fixed @click-left="onClickLeft">
            <template #left>
                <img class="w-1" referrerpolicy="no-referrer" src="@/assets/images/my/arrow-left.png" />
            </template>
            <template #title>
                <span class="pt-[10px] text-[#454558]">密码找回</span>
            </template>
            <template #right> </template>
        </van-nav-bar>
        <div class="py-3 pt-[40px] pb-[60px] text-[13px] bg-blue-50 h-screen relative">
            <div class="grid grid-cols-3 gap-1 px-1 bg-white pt-2 pb-2">
                <div class="relative" @click="selectStep(1)">
                    <div class="w-full h-[2px] bg-[#4eabff] mt-1"></div>
                    <p class="text-center pt-2 text-[#4eabff]">身份验证</p>
                    <div class="absolute right-[40px] top-0 bg-[#4eabff] transform rotate-45 w-[20px] h-[20px] text-white text-center">
                    </div>
                    <div class="absolute right-[41px] top-0  w-[20px] h-[20px] text-white text-center text-[15px]">
                        1
                    </div>
                </div>
                <div class="relative" @click="selectStep(3)">
                    <div :class="[step >= 3?' bg-[#4eabff]':' bg-gray-500']" class="w-full h-[2px] mt-1"></div>
                    <p :class="[step >= 3?' text-[#4eabff]':' text-gray-500']" class="text-center pt-2 ">修改密码</p>
                    <div :class="[step >= 3?' bg-[#4eabff]':' bg-gray-500']" class="absolute right-[40px] top-0 transform rotate-45 w-[20px] h-[20px] text-white text-center">
                    </div>
                    <div class="absolute right-[41px] top-0  w-[20px] h-[20px] text-white text-center text-[15px]">
                       2
                    </div>
                </div>
                <div class="relative" @click="selectStep(4)">
                    <div :class="[step === 4?' bg-[#4eabff]':' bg-gray-500']" class="w-full h-[2px] mt-1"></div>
                    <p :class="[step === 4?' text-[#4eabff]':' text-gray-500']" class="text-center pt-2 ">完成</p>
                    <div :class="[step === 4?' bg-[#4eabff]':' bg-gray-500']" class="absolute right-[40px] top-0 bg-[#4eabff] transform rotate-45 w-[20px] h-[20px] text-white text-center">
                    </div>
                    <div class="absolute right-[41px] top-0  w-[20px] h-[20px] text-white text-center text-[15px]">
                        3
                    </div>
                </div>
            </div>
            <div v-if="step === 1">
                <van-tabs v-model:active="active" class="bg-white mt-1">
                    <van-tab v-for="item, index in tabList" :title="item.name" :key="index" class="border">
                        <div class="px-2 mt-[26px] text-[15px]">
                            <label for="name" class="block text-[#454558] ">用户名</label>
                            <div class="mt-[5px] border-b border-gray-300 focus-within:border-gray-500 pb-[5px] flex justify-between items-center">
                                <input type="text" v-model="name"  placeholder="请输入用户名" name="name" id="name"
                                    class="block w-full border-0 border-b border-transparent placeholder-[#CBCBCB]" />
                            </div>
                        </div>
                        <div v-if="active === 0" class="px-2 mt-[14px] text-[15px]">
                            <label for="name" class="block text-[#454558] ">手机号码</label>
                            <div class="mt-[5px]  focus-within:border-gray-500 pb-[5px] flex justify-between items-center">
                                <input type="text" v-model="phoneNumber" placeholder="请输入绑定手机号码" name="name" id="name"
                                    class="block w-full border-0 border-b border-transparent placeholder-[#CBCBCB]" />
                            </div>
                        </div>
                        <div v-if="active === 1" class="px-2 mt-[14px] text-[15px]">
                            <label for="name" class="block text-[#454558] ">邮箱号码</label>
                            <div class="mt-[5px]  focus-within:border-gray-500 pb-[5px] flex justify-between items-center">
                                <input type="text" v-model="email" placeholder="请输入绑定邮箱号码" name="name" id="name"
                                    class="block w-full border-0 border-b border-transparent placeholder-[#CBCBCB]" />
                            </div>
                        </div>
                        <!-- <div class="text-[16px] font-bold text-[#454558]">验证码</div>
                        <div class="text-[15px] flex justify-between">
                            <input type="text"  placeholder="请输入验证码" name="name" id="name"
                                class="block w-1/2 border-0 border-b border-transparent placeholder-[#CBCBCB]" />
                            <button class="bg-[#4eabff] rounded-sm text-white px-2 py-[2px]" >
                                <span class="text_13">获取验证码</span>
                            </button>
                        </div>   -->
                    </van-tab>
                </van-tabs>
            </div>

            <div v-if="step === 2" class="bg-white mt-[7px]">
                <div class="px-2 pt-3 text-[15px]">
                    <label for="name" class="block text-[#454558] ">手机号码</label>
                    <div class="mt-[5px]  focus-within:border-gray-500 pb-[5px] flex justify-between items-center">
                        <input type="text" v-model="phoneNumber" placeholder="请输入绑定手机号码" name="name" id="name"
                            class="block w-full border-0 border-b border-transparent placeholder-[#CBCBCB]" />
                    </div>
                </div>

                <div class="px-2 text-[15px]  text-[#454558]">手机验证码</div>
                <div class="px-2 text-[15px] pb-1 flex justify-between">
                    <div class="relative w-[220px]">
                        <input type="text" v-model="verifyCode" placeholder="输入验证码" name="name" id="name"
                        class="block w-full border-0 border-b border-transparent placeholder-[#CBCBCB]" />
                        <img v-if="verifyCode" src="@/assets/images/account/icon-close.png" class="absolute right-0 top-[5px]"  @click="() => verifyCode = ''"/>
                    </div>
                    
                    <button class="bg-[#4eabff] rounded-sm text-white  py-[2px] w-[100px]" @click="sendCode">
                        <span class="text-[13px]">获取验证码</span>
                    </button>
                </div>  
            </div>
            <div v-if="step === 3" class="bg-white mt-[7px] px-2">
                <div class="text-[15px] pt-3">
                    <label for="name" class="block text-[#454558] ">输入新密码</label>
                    <div class="mt-[5px] border-b border-gray-300 focus-within:border-gray-500 pb-[5px] flex justify-between items-center relative">
                        <input type="text" v-model="password"  placeholder="输入密码" name="name" id="name"
                            class="block w-full border-0 border-b border-transparent placeholder-[#CBCBCB]" />
                        <img v-if="password" class="absolute top-[7px] right-0 w-[12px]" src="@/assets/images/login/clear.png" alt="remove" @click="() => password = ''"/>
                    </div>
                </div>
                <div class=" text-[15px] pt-1">
                    <label for="name" class="block text-[#454558] ">再次输入新密码</label>
                    <div class="mt-[5px] focus-within:border-gray-500 pb-[5px] flex justify-between items-center relative">
                        <input type="text" v-model="confirm"  placeholder="再次输入密码" name="name" id="name"
                            class="block w-full border-0 border-b border-transparent placeholder-[#CBCBCB]" />
                            <img  v-if="confirm" class="absolute top-[7px] right-0 w-[12px]" src="@/assets/images/login/clear.png" alt="remove" @click="() => confirm = ''"/>
                    </div>
                </div>
            </div>
            <div v-if="step === 4" class="bg-white mt-[7px] px-2 py-2">
                <p class="text-center text-[18px] pb-2">密码设置完成!</p>
                <div class="flex justify-center">
                    <img class="w-[80px] pb-1" src="@/assets/images/home/icon-success.png" alt="success"/>

                </div>
            </div>
            <div class="mx-2 my-3">
                <button
                    :class="[[(name && phoneNumber && step === 1 && active === 0) 
                    || (name && email && step === 1 && active === 1)
                    || (phoneNumber && step === 2 && verifyCode) 
                    || (password && step === 3 && confirm) ?'bg-gradient-to-r from-[#4caafe] to-[#1d58ff]': 'bg-gradient-to-r from-[#91c8ff] to-[#7596fc]'], ' text-white px-2 py-[10px] w-full text-[17px]  rounded-sm']"
                    @click="next">
                    {{step === 4? "完成":"下一步"}} 
                </button>
                <div class="absolute top-44 left-4 flex justify-center py-1 px-3 text-[15px]">
                    <p class="text-center">
                        如果用户没有绑定手机号码或邮箱，请 <br/><span class="text-[#4eabff]">联系客服</span>找回密码
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router'
import { stepperProps } from 'vant';
import { showToast } from 'vant';

const phoneNumber = ref('');
const name = ref('');
const step = ref(1);
const verifyCode = ref('');
const password = ref('');
const confirm = ref('');
const email = ref('');
const tabList = ref([
    {
        id: 1,
        name: "手机验证"
    },
    {
        id: 2,
        name: "邮箱验证"
    }
])
const active = ref(0)

const sendCode = () =>{
    showToast('发送成功！');
}
const next = () => {
    if(name.value && phoneNumber.value && step.value === 1){
        step.value = step.value+1;
    }else if(phoneNumber.value && verifyCode.value && step.value === 2){
        step.value = step.value+1;
    }else if(password.value && step.value === 3 && confirm.value){
        step.value = step.value+1;
    }
}

const onClickLeft = () => {
    router.go(-1);
};
const selectStep = (value:number) => {
    //step.value = value;
}

</script>
