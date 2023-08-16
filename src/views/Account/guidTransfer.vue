<!-- 赛果 -->
<template>
    <div class="animated fadeInLeft">
        <van-nav-bar class="border-b-2 border-gray-300" fixed @click-left="onClickLeft">
            <template #left>
                <img class="w-1" referrerpolicy="no-referrer" src="@/assets/images/my/arrow-left.png" />
            </template>
            <template #title>
                <span class="pt-[10px] text-[#454558]">{{ t('guid_transfer.text_1') }}</span>
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
                <van-collapse-item :title="t('guid_transfer.text_2')" name="1">
                    <div class="pt-2 flex justify-between ">
                        <div class="text-start text-[12px] w-[450px] text-[#525252] pt-2">
                            <span class="">1.{{ t('guid_transfer.text_3') }}&nbsp;&gt;&nbsp;{{ t('guid_transfer.text_4') }}
                                <br />{{ t('guid_transfer.text_5') }}&nbsp;&gt;&nbsp;{{ t('guid_transfer.text_6') }}
                                <br />2.{{ t('guid_transfer.text_7') }}
                                <br />A.{{ t('guid_transfer.text_8') }}&nbsp;--&nbsp;{{ t('guid_transfer.text_9') }}
                                <br />{{ t('guid_transfer.text_10') }}&nbsp;--&nbsp;{{ t('guid_transfer.text_11') }}
                                <br />B.{{ t('guid_transfer.text_12') }}
                                <br />C.{{ t('guid_transfer.text_13') }}<br />D.{{ t('guid_transfer.text_14') }}
                                <br />3.{{ t('guid_transfer.text_15') }}
                                <br />A.{{ t('guid_transfer.text_16') }}&nbsp;--&nbsp;{{ t('guid_transfer.text_9') }}
                                <br />{{ t('guid_transfer.text_10') }}&nbsp;--&nbsp;{{ t('guid_transfer.text_18')
                                }}<br />B.{{ t('guid_transfer.text_19') }}</span>
                        </div>
                        <div class=" w-full flex justify-end h-[250px]">
                            <img class="" src="@/assets/images/account/transfer-guid.png" alt="arrow" />
                        </div>
                    </div>
                    <div>
                        <span class="text-[12px] text-red-500">
                            {{ t('guid_transfer.text_20') }}
                        </span>
                    </div>
                </van-collapse-item>
                <div class="h-[3px]"></div>
                <van-collapse-item title="开启自动转账后怎么取款？" name="2">
                    <div class="flex justify-between pb-1">
                        <div class="text-start text-[13px] text-[#525252] ">
                            {{ t('guid_transfer.text_21') }}<br />{{ t('guid_transfer.text_22') }}<br />{{ t('guid_transfer.text_23') }}<br />{{ t('guid_transfer.text_24') }}<br />{{ t('guid_transfer.text_25') }}
                        </div>
                    </div>
                </van-collapse-item>
                <div class="h-[3px]"></div>
                <van-collapse-item :title="t('guid_transfer.text_26')" name="3">
                    <div class="flex justify-between pb-1">
                        <div class="text-start text-[13px] text-[#525252] ">
                            {{ t('guid_transfer.text_27') }}
                        </div>
                    </div>
                </van-collapse-item>
                <div class="h-[3px]"></div>
                <van-collapse-item title="转账没有成功，但是钱却没了怎么办？" name="4">
                    <div class="flex justify-between pb-1">
                        <div class="text-start text-[13px] text-[#525252] ">
                            <span
                                class="paragraph_4">1.{{ t('guid_transfer.text_28') }}<br />2.{{ t('guid_transfer.text_29') }}<br />{{ t('guid_transfer.text_30') }}<br />{{ t('guid_transfer.text_31') }}<br />{{ t('guid_transfer.text_32') }}<br />{{ t('guid_transfer.text_33') }}</span>
                        </div>
                    </div>
                </van-collapse-item>
                <div class="h-[3px]"></div>
                <van-collapse-item title="主账户/场馆，转场馆/主账户失败？" name="5">
                    <div class="flex justify-between pb-1">
                        <div class="text-start text-[13px] text-[#525252] ">
                            <span
                                class="paragraph_5">1.{{ t('guid_transfer.text_34') }}<br />{{ t('guid_transfer.text_35') }}<br />2.{{ t('guid_transfer.text_36') }}<br />{{ t('guid_transfer.text_37') }}<br />{{ t('guid_transfer.text_38') }}<br />3.{{ t('guid_transfer.text_39') }}<br />4.{{ t('guid_transfer.text_40') }}</span>
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
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const activeNames = ref(['1', '2']);

const onClickLeft = () => {
    router.go(-1)
}

</script>
<style></style>