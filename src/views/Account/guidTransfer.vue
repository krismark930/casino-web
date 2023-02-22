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
                <span class="pt-[10px] text-[#454558]">转账教程</span>
            </template>
            <template #right> </template>
        </van-nav-bar>
        <div class=" pt-[50px] pb-[60px] h-screen text-[#454558] bg-gray-200">
            <!-- <div>
                <div class="flex justify-between text-[15px] items-center py-2  px-2">
                    <div class="flex">
                        <p class="text-[#454558]">如何转账</p>
                    </div>
                    <div class="flex items-center">
                        <img class="w-[7px] h-[13px] ml-1 " src="@/assets/images/my/arrow-right.png" alt="arrow"/>
                    </div>
                </div>
                <p class="w-full h-[0.5px] bg-[#CBCBCB] ml-2 "></p>
                <div class="pt-2 flex justify-between pl-2">
                    <div class="text-start text-[13px] w-[400px] pt-2">
                        <span>
                            1.第一次取款请先绑定银行卡，<br />绑定银行卡步骤：<br /><br />A.登录开云账号&nbsp;--&nbsp;我的页面&nbsp;--&nbsp;<br />账户管理&nbsp;--&nbsp;添加银行卡；<br /><br />B.登录开云账号&nbsp;--&nbsp;首页/我的钱<br />包&nbsp;--&nbsp;点击取款&nbsp;--&nbsp;添加银行卡。<br /><br />2.绑定完成后在取款金额输入<br />框输入金额，点击立即取款。</span
                            >
                    </div>
                    <div class=" w-full flex justify-end">
                        <img class="" src="@/assets/images/account/help-content.png" alt="arrow"/>
                    </div>
                </div>
            </div> -->
            
            <van-collapse v-model="activeNames" class="mt-1">
                <van-collapse-item title="如何转账" name="1">
                    <div class="pt-2 flex justify-between ">
                        <div class="text-start text-[12px] w-[450px] text-[#525252] pt-2">
                            <span class=""
                            >1.登录开云账号&nbsp;&gt;&nbsp;首页/我的钱包点
                            <br />击转账&nbsp;&gt;&nbsp;进入转账页面
                            <br />2.手动转账步骤：
                            <br />A.打开页面：登录开云账号&nbsp;--&nbsp;我的钱
                            <br />包&nbsp;--&nbsp;转账页；
                            <br />B.选择转出转入钱包；
                            <br />C.输入金额，或点击最大金额<br />D.点击立即转账；
                            <br />3.自动转账步骤：
                            <br />A.打开页面：登录开云账号&nbsp;--&nbsp;我的钱
                            <br />包&nbsp;--&nbsp;转账页<br />B.（向右）打开自动转账开关。</span
                            >
                        </div>
                        <div class=" w-full flex justify-end h-[250px]">
                            <img class="" src="@/assets/images/account/transfer-guid.png" alt="arrow"/>
                        </div>
                    </div>
                    <div>
                        <span class="text-[12px] text-red-500"
                        >进入某场馆时，中心钱包的金额自动带入到对应的游戏场馆中</span
                        >
                    </div>
                </van-collapse-item>
                <div class="h-[3px]"></div>
                <van-collapse-item title="开启自动转账后怎么取款？" name="2">
                    <div class="flex justify-between pb-1">
                        <div class="text-start text-[13px] text-[#525252] ">
                            开启自动转账模式后，当您进入取款页面时，会自动回收<br />所有场馆的余额，直接进行取款申请的操作即可，若因网<br />络原因造成场馆的余额没有及时回收到中心钱包，点击钱<br />包金额右方的“一键回收”按钮即可进行二次回收场馆余<br />额。
                        </div>
                    </div>
                </van-collapse-item>
                <div class="h-[3px]"></div>
                <van-collapse-item title="转账到场馆金额变少？" name="3">
                    <div class="flex justify-between pb-1">
                        <div class="text-start text-[13px] text-[#525252] ">
                            大部分金额变少或金额变负数是系统二次结算导致的结果， 若对该部分有异议可联系7*24小时在线客服进行详细咨询。
                        </div>
                    </div>
                </van-collapse-item>
                <div class="h-[3px]"></div>
                <van-collapse-item title="转账没有成功，但是钱却没了怎么办？" name="4">
                    <div class="flex justify-between pb-1">
                        <div class="text-start text-[13px] text-[#525252] ">
                            <span class="paragraph_4"
                                >1.转账时请先退出游戏平台再操作。<br />2.如转账出现金额丢失及时联系24小时在线客服，并提供<br />以下信息：<br />（1）会员账号<br />（2）丢失金额<br />（3）问题场馆</span
                            >
                        </div>
                    </div>
                </van-collapse-item>
                <div class="h-[3px]"></div>
                <van-collapse-item title="主账户/场馆，转场馆/主账户失败？" name="5">
                    <div class="flex justify-between pb-1">
                        <div class="text-start text-[13px] text-[#525252] ">
                            <span class="paragraph_5"
                                >1.查看场馆是否处于维护当中，若场馆处于维护状态是不<br />可以进行转账的。<br />2.是否存在频繁转账操作，因转账人数较多，单个账户若<br />频繁转账会增加数据交互负担，从而造成数据丢失或数据<br />错误。<br />3.请尝试转入整数。<br />4.联系24小时在线客服进行咨询。</span
                            >
                        </div>
                    </div>
                </van-collapse-item>
            </van-collapse>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router';
import { Collapse, CollapseItem } from 'vant';

const activeNames = ref(['1', '2']);

const onClickLeft = () => {
    router.go(-1)
}

</script>
<style>

</style>