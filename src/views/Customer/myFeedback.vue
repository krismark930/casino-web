<template>
    <div class="animated fadeInLeft">
        <van-nav-bar class="border-b-2 border-gray-300" fixed @click-left="onClickLeft">
            <template #left>
                <img class="w-1" referrerpolicy="no-referrer" src="@/assets/images/my/arrow-left.png" />
            </template>
            <template #title>
                <span class="pt-[10px] text-[#454558]">我的反馈</span>
            </template>
            <template #right> </template>
        </van-nav-bar>
        <div class="pt-[35px] pb-[60px] px-2">
            <div class="flex justify-start text-[15px] items-center pt-3" @click="goDetail('feedbackdetail')">
                <img class="w-[25px] h-[25px]" referrerpolicy="no-referrer"
                                    src="@/assets/images/account/icon-deposit.png" />
                <div class="w-full">
                    <div class="pl-2 flex justify-between w-full">
                        <p class="">取款问题</p>
                        <p class="text-gray-400">2022-11-21</p>
                    </div>
                    <div  class="pl-2 flex justify-between w-full">
                        <p class="text-gray-400">存款问题，请帮忙解决！</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router';

const onClickLeft = () => {
    router.go(-1);
};
const goDetail = (value:string) => {
    router.push(value)
}
</script>
