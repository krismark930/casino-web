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
        <div class="pt-[50px] pb-[60px] ">
            <div class="flex justify-start text-[15px] items-center py-1 px-2">
                <img class="w-[25px] h-[25px]" referrerpolicy="no-referrer"
                                    src="@/assets/images/account/icon-deposit.png" />
                <div class="w-full">
                    <div class="pl-2 flex justify-between w-full">
                        <p class="font-medium">取款问题</p>
                    </div>
                </div>
            </div>
            <p class="h-[5px] bg-gray-100"></p>
            <div class="flex px-2 py-1">
                <div>
                    <img class=" w-[30px]" src="@/assets/images/stadiums/user.png"/>
                </div>
                <div class="pl-2 w-full">
                    <p>ACC123456</p>
                    <p class="text-[16px] font-medium">取款国有国法福hi偶尔玩够额外交官姐姐</p>
                    <div class="flex">
                        <img class="w-[30px] mr-[5px]" src="@/assets/images/customer/icon-avatar.png"/>
                        <img class="w-[30px]" src="@/assets/images/customer/icon-avatar.png"/>
                    </div>
                    <div class="pt-3 border-b text-gray-400">
                        <p>2022-11-21 16:36:54</p>
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

</script>
