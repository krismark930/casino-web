<!-- 客服 -->
<template>
    <div class="w-full">
        <div class="border border-b-2">
            <van-nav-bar fixed>
                <template #left></template>
                <template #title>
                    <span class="text-[#8F8F9E]">我的</span>
                </template>
            </van-nav-bar>
        </div>
        <div class="pt-[46px] pb-[60px] animated fadeInLeft">
            <service/>
            <wallet :iconList="walletIconList" @goDetail="goDetail"/>
            <management/>
            <img
                class="w-full mr-1 px-1 rounded-sm"
                referrerpolicy="no-referrer"
                src="@/assets/images/my/bg-2.png"
            />
            <div
                class="shadow-[0_0px_10px_-1px_rgba(0,0,0,0.3)] m-1 rounded-sm p-2 text-[#3E4255]"
            >
                <div class="">
                    <div class="flex justify-start items-center">
                        <img
                            class="w-[23px] mr-1"
                            referrerpolicy="no-referrer"
                            src="@/assets/images/my/icon-warning.png"
                        />
                        <span class="text-[13px]">关于新葡京</span>
                    </div>
                    <div class="flex justify-start items-center mt-2">
                        <div class="flex justify-center pr-[14px] pl-[5px]">
                            <img
                                class="w-[14px]"
                                referrerpolicy="no-referrer"
                                src="@/assets/images/my/icon-phone.png"
                            />
                        </div>
                        <span class="text-[13px]">打开皇冠体育APP</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import router from '@/router';
import { showToast } from 'vant';
import { ref } from 'vue';
import Management from './components/management.vue';
import Wallet from './components/wallet.vue';
import Service from './components/service.vue';

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

<style scoped lang="scss"></style>
