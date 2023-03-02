<script lang="ts">
    import { defineComponent } from 'vue'
    import { storeToRefs } from 'pinia';
    import { useAuthStore } from '@/stores/auth';
    export default defineComponent({
        data() {
        return {
            userData: []
        }
    },
        mounted() {
            const {
                getToken,
                getUser,
            } = storeToRefs(useAuthStore());
            this.userData=getUser.value;
            // if(!getUser.value.id){
            //     router.push({name:'my'})
            // }
        },
        
    })
</script>
<template>
    <div class="animated fadeInLeft">
        <van-nav-bar class="border-b-2 border-gray-300" fixed @click-left="onClickLeft">
            <template #left>
                <img class="w-1" referrerpolicy="no-referrer" src="@/assets/images/my/arrow-left.png" />
            </template>
            <template #title>
                <span class="pt-[10px] text-[#454558]">设置</span>
            </template>
            <template #right> </template>
        </van-nav-bar>
        <div class="pt-[35px] pb-[60px] bg-blue-50 h-screen">
            <div class="flex justify-between">
                <div class="flex text-[15px] px-2 pb-1 items-center pt-3">
                    <div class="w-[80px]">
                        <img class="w-[60px] h-[60px]" referrerpolicy="no-referrer"
                                        src="@/assets/images/my/avatar.png" />
                    </div>
                    
                    <div class="w-full">
                        <div class="pl-2 flex ">
                            <p class="font-bold text-[17px]">{{userData.UserName}}</p>
                        </div>
                        <div  class="pl-2 flex text-[13px]">
                            <p class="text-gray-500">加入开运体育第22天</p>
                        </div>
                    </div>
                </div>
                <div class="flex px-2 pt-3">
                    <img class="w-[20px] h-[20px] " src="@/assets/images/my/icon-9.png" alt="">
                    <img class="w-[20px] h-[20px] ml-2" src="@/assets/images/my/icon-10.png" alt="">
                </div>
            </div>
            <div class="bg-white  m-1 p-1 rounded-sm shadow-[0_0px_10px_-1px_rgba(0,0,0,0.3)] m-1 rounded-sm pb-[17px] text-[12px]">
                <div class="bg-blue-50 rounded-sm border p-1">
                    <div class="flex justify-around items-center">
                        <img class="w-[50px] h-[20px]" src="@/assets/images/my/icon-vip0.png"/>
                        <div class="relative w-full h-[10px] bg-white rounded-full mx-1">
                            <div class="absolute bg-blue-500 h-[10px] w-[100px] rounded-full"></div>
                        </div>
                        <img class="w-[50px] h-[20px]" src="@/assets/images/my/icon-vip1.png"/>
                    </div>
                    <div class="flex justify-between py-1">
                        <p>晋级流水(元) 2,000.00/6,000.00</p>
                        <div class="flex items-center">
                            <span class="text-[11px] font-medium text-blue-400"
                                >更多VIP特权</span
                            >
                            <img
                                class="w-[10px] h-[10px] ml-1"
                                referrerpolicy="no-referrer"
                                src="@/assets/images/my/arrow-double-right.png"
                            />
                        </div>
                    </div>
                    <div class="flex justify-between">
                        <div class="flex items-center">
                            <img class="w-[16px]" src="@/assets/images/my/icon-11.png"/>
                            <p class="text-blue-400 text-[12px] pl-[3px] pt-[2px]">每周红包</p>
                        </div>
                        <div class="flex items-center">
                            <img class="w-[16px]" src="@/assets/images/my/icon-11.png"/>
                            <p class="text-blue-400 pl-[3px] pt-[2px]">晋级礼金</p>
                        </div>
                        <div class="flex items-center">
                            <img class="w-[16px]" src="@/assets/images/my/icon-12.png"/>
                            <p class="text-gray-400 pl-[3px] pt-[2px]">专享豪礼</p>
                        </div>
                        <div class="flex items-center">
                            <img class="w-[16px]" src="@/assets/images/my/icon-12.png"/>
                            <p class="text-gray-400 pl-[3px] pt-[2px]">生日礼金</p>
                        </div>
                    </div>
                </div>
                <div
                    class="m-1 rounded-sm pt-[15px] pb-[7px] flex justify-between"
                        >
                    <div class="">
                        <div class="text-[14px] text-[#7A7A7A] flex items-center">中心钱包
                            <img class="w-[15px] ml-1" src="@/assets/images/my/icon-eye.png"/>
                        </div>
                        <div class="text-[14px] pt-[10px] text-black flex items-center">
                            <span class="text-[16px] font-bold">￥</span>
                            <span class="text-[20px] font-bold">{{userData.Money}}</span>
                            <img class="w-[15px] ml-1" src="@/assets/images/withdraw/icon-refresh.png"/>
                        </div>
                    </div>
                    <div class="flex justify-between w-[150px]">
                        <div
                            @click="goDetail(item.path)"
                            class="image-text_1 flex-col justify-between"
                            v-for="(item, index) in walletIconList"
                            :key="index + 250"
                        >
                            <img class="w-[40px]" :src="item.icon" alt="" />
                            <div class="pl-[5px] text-[14px]">{{ item.name }}</div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            <div class="shadow-[0_0px_10px_-1px_rgba(0,0,0,0.3)] m-1 rounded-sm pb-[17px]">
                <div class="relative flex mt-1 ">
                    <img class="w-full z-10" src="@/assets/images/my/bg-1.png" alt="bg" />
                </div>
                <div class="px-3 pb-1 pt-[25px]  flex justify-between  text-[#56565A]">
                    <div class="group_4 text-center justify-center" @click="goDetail('transaction')">
                        <div class="flex justify-center w-full">
                            <img class="flex items-center w-[27px]" referrerpolicy="no-referrer"
                            src="@/assets/images/my/icon-1.png" />
                        </div>
                        <span class="block pt-[2px] text-[14px] text-[#56565A]">交易记录</span>
                    </div>
                    <div class="group_4 text-center justify-center" @click="goDetail('contact')">
                        <div class="flex justify-center w-full">
                            <img class="flex items-center w-[27px]" referrerpolicy="no-referrer"
                            src="@/assets/images/my/icon-6.png" />
                        </div>
                        <div class="block pt-[2px] text-[14px]">意见反馈</div>
                    </div>
                    <div class="relative text-center justify-center" @click="goDetail('invite')">
                        <div class="absolute -right-[28px] -top-[5px]">
                            <img class="flex items-center w-[42px]" referrerpolicy="no-referrer"
                            src="@/assets/images/my/alert.png" />
                        </div>
                        <div class="flex justify-center w-full">
                            <img class="flex items-center w-[27px]" referrerpolicy="no-referrer"
                            src="@/assets/images/my/icon-5.png" />
                        </div>
                        <span class="block pt-[2px] text-[14px]">邀请好友</span>
                    </div>
                    
                    <div class="group_4 text-center justify-center" @click="goDetail('account')">
                        <div class="flex justify-center w-full">
                            <img class="flex items-center w-[27px]" referrerpolicy="no-referrer"
                            src="@/assets/images/my/icon-4.png" />
                        </div>
                        <span class="block pt-[2px] text-[14px]">账户管理</span>
                    </div>
                </div> 
            </div>
            <img
                class="w-full mr-1 px-1 rounded-sm"
                referrerpolicy="no-referrer"
                src="@/assets/images/my/bg-2.png"
            />
        </div>
        
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router';
import { showToast } from 'vant';
const onClickLeft = () => {
    router.go(-1);
};
const walletIconList = ref([
    {
        id: 1,
        icon: new URL('@/assets/images/home/m-icon-1.png', import.meta.url)
            .href,
        name: '转账',
        path: 'transfer'
    },
    {
        id: 2,
        icon: new URL('@/assets/images/home/m-icon-2.png', import.meta.url)
            .href,
        name: '存款',
        path: 'deposit'
    },
    {
        id: 3,
        icon: new URL('@/assets/images/home/m-icon-3.png', import.meta.url)
            .href,
        name: '取款',
        path: 'withdraw'
    }
]);
const goDetail = (path: string) => {
    if (path) {
        router.push({ name: path });
    } else {
        showToast('正在开发!');
    }
};
</script>
