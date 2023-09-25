<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router';
import AdvertisementItem from '@/components/invite/AdvertisementItem.vue';
import NotificationLine from '@/components/global/NotificationLine.vue'
import TabsItem from '@/components/invite/TabsItem.vue'
import { useAuthStore } from '@/stores/auth';
import { HOST_URL } from "@/config";
import { showToast } from 'vant';
const { user } = useAuthStore();
const advertisement = ref(new URL('@/assets/images/invite/InviteAdvertisement.png', import.meta.url).href)
const notification = ref({
    icon: new URL('@/assets/images/invite/NotificationLineIcon.png', import.meta.url).href,
    message: '恭喜会员XPJ***22，成功邀请XI**32，获得彩金13.0'
});
const onClickLeft = () => {
    router.go(-1)
}

const onCopyUrl = () => {
    navigator.clipboard.writeText(HOST_URL + "/#" + user.referral_url);
    showToast('复制!')
}

const onCopyCode = () => {
    navigator.clipboard.writeText(user.referral_code);
    showToast('复制!')
}

</script>

<template>
    <div class="bg-[#f7f7ff] min-h-screen">
        <van-nav-bar title="邀请好友" left-arrow @click-left="onClickLeft" class="drop-shadow-md" />
        <AdvertisementItem :image="advertisement" />
        <div class="px-2">
            <NotificationLine :notification="notification" />
            <!-- <TabsItem /> -->
            <div class="w-full rounded-md drop-shadow-lg p-1 bg-white my-1 relative">
                <!-- <div class="flex items-center justify-between text-[0.4rem]">
                    <img src="@/assets/images/invite/DesLine.png" alt="DesLine" class="w-[120px]">
                    <div>邀请链接</div>
                    <img src="@/assets/images/invite/DesLine.png" alt="DesLine" class="rotate-180 w-[120px]">
                </div> -->
                <div class="relative text-[12px] mt-[5px] mb-1">
                    <input :value="HOST_URL + '/#' + user.referral_url" disabled="true" type="text" placeholder="/register_url"
                        class="bg-[#F7F7FF] pl-[2px] w-full h-[35px] rounded-[7px] text-[10px]" readonly/>
                    <button
                        class="bg-[#4EABFF] absolute top-[0px] right-0 text-[10px] text-white rounded-[7px] px-1 h-[35px] flex items-center justify-center"
                        @click="onCopyUrl">复制</button>
                </div>
                <div class="relative text-[12px] mt-[5px] mb-1">
                    <input :value="user.referral_code" disabled="true" type="text" placeholder="/register_url"
                        class="bg-[#F7F7FF] pl-[2px] w-full h-[35px] rounded-[7px] text-[10px]" readonly/>
                    <button
                        class="bg-[#4EABFF] absolute top-[0px] right-0 text-[10px] text-white rounded-[7px] px-1 h-[35px] flex items-center justify-center"
                        @click="onCopyCode">复制</button>
                </div>
            </div>
            <div class="w-full rounded-md drop-shadow-lg p-1 bg-white my-1 relative">
                <div class="flex text-[14px]" style="justify-content: center; align-items: center;">
                    <div class="w-[50px] h-[5px] mr-[2px]" style="background: linear-gradient(266.49deg, rgba(255,188,0,1) 0.07%,rgba(255,255,255,0) 95.69%);"></div>
                    邀请攻略
                    <div class="w-[50px] h-[5px] ml-[2px]" style="background: linear-gradient(266.49deg, rgba(255,188,0,1) 0.07%,rgba(255,255,255,0) 95.69%); transform: rotate(180deg);"></div>
                </div>
                <div class="flex text-[14px] mt-[10px]" style="justify-content: center; align-items: center;">
                    <div style="width: 64px;">
                        <img src="@/assets/images/invite/3.svg" style="margin: auto;"/>
                        <div class="text-center mt-[6px]">分享链接给好友</div>
                    </div>
                    <div>
                        <img src="@/assets/images/invite/4.svg"/>
                    </div>
                    <div style="width: 64px;">
                        <img src="@/assets/images/invite/2.svg" style="margin: auto;"/>
                        <div class="text-center mt-[6px]">好友成功注册</div>
                    </div>
                    <div>
                        <img src="@/assets/images/invite/4.svg"/>
                    </div>
                    <div style="width: 64px;">
                        <img src="@/assets/images/invite/1.svg" style="margin: auto;"/>
                        <div class="text-center mt-[6px]">获得丰富彩金</div>
                    </div>
                </div>
            </div>
            <!-- <div class="w-full rounded-md drop-shadow-lg p-1 bg-white my-1 relative">
                <div class="text-[#454558] text-[0.4rem]">
                    <div>
                        <img src="@/assets/images/invite/DesTitle.png" alt="DesLine" class="w-full">
                    </div>
                    <div class="text-[10px] p-1">
                        活动对象：新葡京全站会员 <br/>活动时间：长期活动
                    </div>
                </div>
                <div class="text-[#454558] text-[0.4rem]">
                    <div>
                        <img src="@/assets/images/invite/DesTitle.png" alt="DesLine" class="w-full">
                    </div>
                    <div class="text-[10px] p-1">
                        ●您邀请的好友需要通过推广链接或二维码完成 注册，且被邀请的好友完成首次存款，即可获得 彩金奖励。邀请的好友人数越多，邀请彩金将逐 级增加，最高可获得40元/人邀请彩金； <br/>
                        ●被邀请的好友获得固定12元彩金； 注：邀请人与被邀请人需绑定手机号和银行卡才 可以获得彩金。 <br/>
                        ●若被邀请的好友当天完成有效投注≥3,000元， 邀请人可额外获得18元彩金！仅需1倍流水即可 取款！ 
                        <div class="mt-[15px]">
                            举例说明:
                            A用户成功邀请第一个用户1，A用户奖励彩金12元；用户1奖励彩金12元；<br/>
                            A用户成功邀请第二个用户2，A用户奖励彩金13元；用户2奖励彩金12元；<br/>
                            A用户成功邀请第三个用户3，A用户奖励彩金13元；用户3奖励彩金12元；<br/>
                            A用户共计获得邀请彩金：用户1+用户2+用户3=38元<br/>
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<style scoped lang="scss">
.van-nav-bar .van-icon {
    color: #454558 !important;
}

.van-tabs__nav--card {
    border-top-left-radius: 0px !important;
    border-top-right-radius: 0px !important;
}
</style>