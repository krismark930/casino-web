<template>
    <div class="shadow-[0_0px_10px_-1px_rgba(0,0,0,0.3)] m-1 rounded-sm pb-[17px]">
        <div class="relative flex mt-1 ">
            <img class="w-full -z-10" src="@/assets/images/my/bg-1.png" alt="" />
        </div>
        <div class="px-3 pb-1 pt-[25px]  flex justify-between  text-[#56565A]">
            <div class="group_4 text-center justify-center" @click="goDetail('transaction')">
                <div class="flex justify-center w-full">
                    <img class="flex items-center w-[27px]" referrerpolicy="no-referrer"
                    src="@/assets/images/my/icon-1.png" />
                </div>
                <span class="block pt-[2px] text-[14px] text-[#56565A]">交易记录</span>
            </div>
            <div class="group_4 text-center justify-center" @click="goDetail('records')">
                <div class="flex justify-center w-full">
                    <img class="flex items-center w-[27px]" referrerpolicy="no-referrer"
                    src="@/assets/images/my/icon-2.png" />
                </div>
                <span class="block pt-[2px] text-[14px] text-[#56565A]">投注记录</span>
            </div>
            <div class="group_4 text-center justify-center">
                <div class="flex justify-center w-full">
                    <img class="flex items-center w-[27px]" referrerpolicy="no-referrer"
                    src="@/assets/images/my/icon-3.png" />
                </div>
                <span class="block pt-[2px] text-[14px]">兑奖记录</span>
            </div>
            <div class="group_4 text-center justify-center" @click="goDetail('account')">
                <div class="flex justify-center w-full">
                    <img class="flex items-center w-[27px]" referrerpolicy="no-referrer"
                    src="@/assets/images/my/icon-4.png" />
                </div>
                <span class="block pt-[2px] text-[14px]">账户管理</span>
            </div>
        </div> 
        <div class="px-3 py-1 flex justify-between text-[#56565A]">
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
            <div class="group_4 text-center justify-center" @click="goDetail('contact')">
                <div class="flex justify-center w-full">
                    <img class="flex items-center w-[27px]" referrerpolicy="no-referrer"
                    src="@/assets/images/my/icon-6.png" />
                </div>
                <span class="block pt-[2px] text-[14px]">联系我们</span>
            </div>
            <div class="group_4 text-center justify-center"  @click="goDetail('helpCenter')">
                <div class="flex justify-center w-full">
                    <img class="flex items-center w-[27px]" referrerpolicy="no-referrer"
                    src="@/assets/images/my/icon-7.png" />
                </div>
                <span class="block pt-[2px] text-[14px]">帮助中心</span>
            </div>
            <div class="group_4 text-center justify-center">
                <div class="flex justify-center w-full">
                    <img class="flex items-center w-[27px]" referrerpolicy="no-referrer"
                    src="@/assets/images/my/icon-8.png" />
                </div>
                <span class="block pt-[2px] text-[14px]">加入我们</span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import router from '@/router';
import { showToast } from 'vant';
const goDetail = (path: string) => {
    if (path) {
        router.push({ name: path });
    } else {
        showToast('正在开发!');
    }
};
  //const { num, stop, time, mile, assign } = defineProps<{ num:number, stop:number, time:string, mile:string, assign:boolean }>()
</script>
