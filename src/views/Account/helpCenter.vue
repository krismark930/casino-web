<!-- 赛果 -->
<template>
    <div class="animated fadeInLeft">
        <van-nav-bar
            class="border-b-2 border-gray-300"
            fixed
            @click-left="onClickLeft"
        >
            <template #left>
                <img
                    class="w-1"
                    referrerpolicy="no-referrer"
                    src="@/assets/images/my/arrow-left.png"
                />
            </template>
            <template #title>
                <span class="pt-[10px] text-[#454558]">帮助中心</span>
            </template>
            <template #right> </template>
        </van-nav-bar>
        <div class=" pt-[50px] pb-[60px] h-screen">
            <div class="flex justify-between text-[15px] px-2 items-center pt-3" @click="goDetail('depositHelp')">
                <div class="flex">
                    <img class="w-[25px] h-[25px]" referrerpolicy="no-referrer"
                                    src="@/assets/images/account/icon-withdraw.png" />
                    <p class="pl-1">存款教程</p>
                </div>

                <div class="flex items-center">
                    <p class="text-gray-300">存款极速到账</p>
                    <img class="w-[7px] h-[13px] ml-1 " src="@/assets/images/my/arrow-right.png" alt="arrow"/>
                </div>
            </div>
            <div class="flex justify-between text-[15px] px-2 items-center pt-3" @click="goDetail('guidHelp')">
                <div class="flex">
                    <img class="w-[25px] h-[25px]" referrerpolicy="no-referrer"
                                    src="@/assets/images/account/icon-deposit.png" />
                    <p class="pl-1">取款教程</p>
                </div>

                <div class="flex items-center">
                    <p class="text-gray-300">极速提款仅需30秒</p>
                    <img class="w-[7px] h-[13px] ml-1 " src="@/assets/images/my/arrow-right.png" alt="arrow"/>
                </div>
            </div>
            <div class="flex justify-between text-[15px] px-2 items-center pt-3" @click="goDetail('')">
                <div class="flex">
                    <img class="w-[25px] h-[25px]" referrerpolicy="no-referrer"
                                    src="@/assets/images/account/icon-intro.png" />
                    <p class="pl-1">游戏介绍</p>
                </div>

                <div class="flex items-center">
                    <p class="text-gray-300">主流体育、彩票玩法</p>
                    <img class="w-[7px] h-[13px] ml-1 " src="@/assets/images/my/arrow-right.png" alt="arrow"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router';
import { showToast } from 'vant';
const item = ref(null);

const active = ref(0)

const onClickLeft = () => {
    router.go(-1)
}
const goDetail = (path: string) => {
    if (path) {
        router.push({ name: path });
    } else {
        showToast('正在开发!');
    }
};
</script>
<style>

</style>