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
            <div class="flex justify-between text-[15px] px-2 items-center py-3">
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
            <div v-for="(item, index) in itemList" :key="index" class="bg-gray-100 pt-2">
                <p class="text-center text-[16px]">步骤{{index+1}}/{{itemList.length}}</p>
                <div class=" w-full flex justify-center px-4">
                    <img class="" :src="item.img" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router';
const item = ref(null);

const active = ref(0)

const onClickLeft = () => {
    router.go(-1)
}
const itemList = ref([
    {
        img: new URL('@/assets/images/account/deposit-1.png', import.meta.url).href,
    },
    {
        img: new URL('@/assets/images/account/deposit-2.png', import.meta.url).href,
    },
    {
        img: new URL('@/assets/images/account/deposit-3.png', import.meta.url).href,
    },
    {
        img: new URL('@/assets/images/account/deposit-4.png', import.meta.url).href,
    }
]);
</script>
<style>

</style>