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
        <div class=" pt-[50px] pb-[60px] h-screen text-[#454558]">
            <div>
                <div class="flex justify-between text-[15px] items-center py-2  px-2">
                    <div class="flex">
                        <p class="text-[#454558]">存款教程</p>
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
            </div>
            <p class="w-full h-[0.5px] bg-[#CBCBCB]"></p>
            <div>
                <div class="flex justify-between text-[15px] items-center py-2  px-2">
                    <div class="flex">
                        <p class="text-[#454558]">可以使用别人的银行卡进行取款吗？</p>
                    </div>
                    <div class="flex items-center">
                        <img class="w-[7px] h-[13px] ml-1 " src="@/assets/images/my/arrow-right.png" alt="arrow"/>
                    </div>
                </div>
                <p class="w-full h-[0.5px] bg-[#CBCBCB] ml-2 "></p>
                <div class="pt-2 flex justify-between px-2 pb-2">
                    <div class="text-start text-[13px] ">
                        为了确保客户的账户资金安全，取款需要使用账号本人的 银行卡才可以进行取款哦，且取款银行卡姓名必须与注册 姓名一致。
                    </div>
                </div>
            </div>
            <p class="w-full h-[0.5px] bg-[#CBCBCB]"></p>
            <div>
                <div class="flex justify-between text-[15px] items-center py-2  px-2">
                    <div class="flex">
                        <p class="text-[#454558]">申请取款需要注意些什么？</p>
                    </div>
                    <div class="flex items-center">
                        <img class="w-[7px] h-[13px] ml-1 " src="@/assets/images/my/arrow-right.png" alt="arrow"/>
                    </div>
                </div>
                <p class="w-full h-[0.5px] bg-[#CBCBCB] ml-2 "></p>
                <div class="pt-2 flex justify-between px-2 pb-2">
                    <div class="text-start text-[13px] ">
                        1&nbsp;绑定的银行卡姓名需与开云账户的注册姓名一致。 
                        <br />2&nbsp;绑定的银行卡信息需要正确。
                        <br />3&nbsp;若您未申请任何红利优惠，投注满一倍流水即可申请取<br />款。
                        <br />4&nbsp;若申请首存红利，则需要满足优惠活动写明的有效投注<br />额要求。
                        <br />5&nbsp;全天24小时都可进行取款申请。
                    </div>
                </div>
            </div>
            <p class="w-full h-[0.5px] bg-[#CBCBCB]"></p>
            <div>
                <div class="flex justify-between text-[15px] items-center py-2  px-2">
                    <div class="flex">
                        <p class="text-[#454558]">游戏账户里有钱为什么无法取款？</p>
                    </div>
                    <div class="flex items-center">
                        <img class="w-[7px] h-[13px] ml-1 " src="@/assets/images/my/arrow-right.png" alt="arrow"/>
                    </div>
                </div>
                <p class="w-full h-[0.5px] bg-[#CBCBCB] ml-2 "></p>
                <div class="pt-2 flex justify-between px-2 pb-2">
                    <div class="text-start text-[13px] ">
                        您需要先将资金从游戏平台钱包转至中心钱包后，才能进 行取款操作。
                    </div>
                </div>
            </div>
            <p class="w-full h-[0.5px] bg-[#CBCBCB]"></p>
            <div>
                <div class="flex justify-between text-[15px] items-center py-2  px-2">
                    <div class="flex">
                        <p class="text-[#454558]">可以绑定多张银行卡吗？</p>
                    </div>
                    <div class="flex items-center">
                        <img class="w-[7px] h-[13px] ml-1 " src="@/assets/images/my/arrow-right.png" alt="arrow"/>
                    </div>
                </div>
                <p class="w-full h-[0.5px] bg-[#CBCBCB] ml-2 "></p>
                <div class="pt-2 flex justify-between px-2 pb-2">
                    <div class="text-start text-[13px] ">
                        开云用户可以绑定10张银行卡进行取款操作，在我的页面 选择“账户管理”，按步骤添加银行卡即可。
                    </div>
                </div>
            </div>
            <p class="w-full h-[0.5px] bg-[#CBCBCB]"></p>
            <div>
                <div class="flex justify-between text-[15px] items-center py-2  px-2">
                    <div class="flex">
                        <p class="text-[#454558]">取款为什么还需要审核？</p>
                    </div>
                    <div class="flex items-center">
                        <img class="w-[7px] h-[13px] ml-1 " src="@/assets/images/my/arrow-right.png" alt="arrow"/>
                    </div>
                </div>
                <p class="w-full h-[0.5px] bg-[#CBCBCB] ml-2 "></p>
                <div class="pt-2 flex justify-between px-2 pb-2">
                    <div class="text-start text-[13px] ">
                        取款审核是相关部门在给您办理出款之前的一个简单的核 实步骤，是为了确保客户资金安全，所以需要核实相关信 息。
                    </div>
                </div>
            </div>
            <p class="w-full h-[0.5px] bg-[#CBCBCB]"></p>
            <div>
                <div class="flex justify-between text-[15px] items-center py-2  px-2">
                    <div class="flex">
                        <p class="text-[#454558]">取款要求（例：流水）</p>
                    </div>
                    <div class="flex items-center">
                        <img class="w-[7px] h-[13px] ml-1 " src="@/assets/images/my/arrow-right.png" alt="arrow"/>
                    </div>
                </div>
                <p class="w-full h-[0.5px] bg-[#CBCBCB] ml-2 "></p>
                <div class="pt-2 flex justify-between px-2 pb-2">
                    <div class="text-start text-[13px] ">
                        开云用户只要达到存款全额投注，可以随时申请取款。比 如，您存100元，在该笔存款后，您累计下注达到100元 的取款流水，即可办
                    </div>
                </div>
            </div>
            <p class="w-full h-[0.5px] bg-[#CBCBCB]"></p>
            <div>
                <div class="flex justify-between text-[15px] items-center py-2  px-2">
                    <div class="flex">
                        <p class="text-[#454558]">取款到账时间</p>
                    </div>
                    <div class="flex items-center">
                        <img class="w-[7px] h-[13px] ml-1 " src="@/assets/images/my/arrow-right.png" alt="arrow"/>
                    </div>
                </div>
                <p class="w-full h-[0.5px] bg-[#CBCBCB] ml-2 "></p>
                <div class="pt-2 flex justify-between px-2 pb-2">
                    <div class="text-start text-[13px] ">
                        开云用户取款一般10分钟内到账，如果30分钟还未到账可 以联系在线客服为您核查！
                    </div>
                </div>
            </div>
            <p class="w-full h-[0.5px] bg-[#CBCBCB]"></p>
            <div>
                <div class="flex justify-between text-[15px] items-center py-2  px-2">
                    <div class="flex">
                        <p class="text-[#454558]">取款支持的银行</p>
                    </div>
                    <div class="flex items-center">
                        <img class="w-[7px] h-[13px] ml-1 " src="@/assets/images/my/arrow-right.png" alt="arrow"/>
                    </div>
                </div>
                <p class="w-full h-[0.5px] bg-[#CBCBCB] ml-2 "></p>
                <div class="pt-2 flex justify-between px-2 pb-2">
                    <div class="text-start text-[13px] ">
                        目前为您提供15家取款银行：中国银行、工商银行、建设 银行、交通银行、农业银行、招商银行、民生银行、平安 银行、华夏银行、广东
                    </div>
                </div>
            </div>
            <p class="w-full h-[0.5px] bg-[#CBCBCB]"></p>
            <div>
                <div class="flex justify-between text-[15px] items-center py-2  px-2">
                    <div class="flex">
                        <p class="text-[#454558]">我流水还差多少？</p>
                    </div>
                    <div class="flex items-center">
                        <img class="w-[7px] h-[13px] ml-1 " src="@/assets/images/my/arrow-right.png" alt="arrow"/>
                    </div>
                </div>
                <p class="w-full h-[0.5px] bg-[#CBCBCB] ml-2 "></p>
                <div class="pt-2 flex justify-between px-2 pb-2">
                    <div class="text-start text-[13px] ">
                        首先确认自己是否有申请优惠活动，找到对应优惠活动查 看所需流水，再点击APP右下角【我的】一【投注记录】 查看流水，无申请优惠
                    </div>
                </div>
            </div>
            <p class="w-full h-[0.5px] bg-[#CBCBCB]"></p>
            <div>
                <div class="flex justify-between text-[15px] items-center py-2  px-2">
                    <div class="flex">
                        <p class="text-[#454558]">取款输入金额无法提交申请？</p>
                    </div>
                    <div class="flex items-center">
                        <img class="w-[7px] h-[13px] ml-1 " src="@/assets/images/my/arrow-right.png" alt="arrow"/>
                    </div>
                </div>
                <p class="w-full h-[0.5px] bg-[#CBCBCB] ml-2 "></p>
                <div class="pt-2 flex justify-between px-2 pb-2">
                    <div class="text-start text-[13px] ">
                        1 金额是否从场馆成功转出至中心钱包。 
                        <br/>2 若提示"您有订单尚未核实成功”请联系客服进行咨询。 若有其他取款问题请与7*24小
                    </div>
                </div>
            </div>
            <p class="w-full h-[0.5px] bg-[#CBCBCB]"></p>
            <div>
                <div class="flex justify-between text-[15px] items-center py-2  px-2">
                    <div class="flex">
                        <p class="text-[#454558]">我取款未到账？</p>
                    </div>
                    <div class="flex items-center">
                        <img class="w-[7px] h-[13px] ml-1 " src="@/assets/images/my/arrow-right.png" alt="arrow"/>
                    </div>
                </div>
                <p class="w-full h-[0.5px] bg-[#CBCBCB] ml-2 "></p>
                <div class="pt-2 flex justify-between px-2 pb-2">
                    <div class="text-start text-[13px] ">
                        <span class="paragraph_12"
                        >正常情况下10分钟以内即可到账，延迟原因一般是网络波
                        <br />动、风控审核等，耐心等待片刻即可，若30分钟以后未到
                        <br />账:联系7*24小时在线客服同时提供以下信息。
                        <br />（1）会员账号<br />（2）出款时间<br />（3）出款金额</span>
                    </div>
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