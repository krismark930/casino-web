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
                <span class="pt-[10px] text-[#454558]">交易详情</span>
            </template>
            <template #right> </template>
        </van-nav-bar>
        <div class="pt-[55px] pb-[60px] h-screen bg-gray-50 px-3">
            <div class="flex justify-center text-[25px] font-bold pt-1 items-end pb-2"><span class="text-[17px] pb-[4px]">￥</span>{{historyDetail.Gold}}</div>
            <div class="flex justify-between text-[15px] py-1">
                <p>交易类型</p>
                <p>{{(historyDetail.Type === 'T' && historyDetail.Type2 === 1) ? '取款' : ''}}</p>
            </div>
            <div class="flex justify-between text-[15px] py-1">
                <p>交易方式</p>
                <p>{{historyDetail.Bank_Address}}</p>
            </div>
            <div class="flex justify-between text-[15px] py-1">
                <p>状态</p>
                <p class="text-blue-400">{{historyDetail.Checked === 0? '待办的': '成功'}}</p>
            </div>
            <div class="flex justify-between text-[15px] py-1">
                <p>交易时间</p>
                <p>{{historyDetail.Date}}</p>
            </div>
            <div class="flex justify-between text-[15px] py-1">
                <p>订单号码</p>
                <p>{{historyDetail.Order_Code}}</p>
            </div>
            <div class="flex justify-center text-[13px] py-3">
                <p class="text-gray-400">如需帮助，请 <span class="text-blue-400">联系客服</span></p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router';
import { useWithdrawStore } from '@/stores/withdraw';
const { historyDetail } = useWithdrawStore();
console.log(historyDetail);
const onClickLeft = () => {
    router.go(-1);
};
</script>
<style>

</style>
