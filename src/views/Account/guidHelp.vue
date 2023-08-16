<!-- 赛果 -->
<template>
    <div class="animated fadeInLeft">
        <van-nav-bar class="border-b-2 border-gray-300" fixed @click-left="onClickLeft">
            <template #left>
                <img class="w-1" referrerpolicy="no-referrer" src="@/assets/images/my/arrow-left.png" />
            </template>
            <template #title>
                <span class="pt-[10px] text-[#454558]">{{ t('guid_help.text_1') }}</span>
            </template>
            <template #right> </template>
        </van-nav-bar>
        <div class=" pt-[50px] pb-[60px] h-screen text-[#454558]">
            <div>
                <div class="flex justify-between text-[15px] items-center py-2  px-2">
                    <div class="flex">
                        <p class="text-[#454558]">{{ t('guid_help.text_2') }}</p>
                    </div>
                    <div class="flex items-center">
                        <img class="w-[7px] h-[13px] ml-1 " src="@/assets/images/my/arrow-right.png" alt="arrow" />
                    </div>
                </div>
                <p class="w-full h-[0.5px] bg-[#CBCBCB] ml-2 "></p>
                <div class="pt-2 flex justify-between pl-2">
                    <div class="text-start text-[13px] w-[400px] pt-2">
                        <span>
                            1.{{ t('guid_help.text_3') }}，<br />{{ t('guid_help.text_4') }}：<br /><br />A.{{ t('guid_help.text_5') }}&nbsp;--&nbsp;{{ t('guid_help.text_6') }}&nbsp;--&nbsp;<br />{{ t('guid_help.text_7') }}&nbsp;--&nbsp;{{ t('guid_help.text_8') }}；<br /><br />B.{{ t('guid_help.text_9') }}&nbsp;--&nbsp;{{ t('guid_help.text_10') }}<br />{{ t('guid_help.text_11') }}&nbsp;--&nbsp;{{ t('guid_help.text_12') }}&nbsp;--&nbsp;{{ t('guid_help.text_13') }}<br /><br />2.{{ t('guid_help.text_14') }}<br />{{ t('guid_help.text_15') }}
                        </span>
                    </div>
                    <div class=" w-full flex justify-end">
                        <img class="" src="@/assets/images/account/help-content.png" alt="arrow" />
                    </div>
                </div>
            </div>
            <p class="w-full h-[0.5px] bg-[#CBCBCB]">{{ t('guid_help.text_16') }}</p>
            <div>
                <div class="flex justify-between text-[15px] items-center py-2  px-2">
                    <div class="flex">
                        <p class="text-[#454558]"></p>
                    </div>
                    <div class="flex items-center">
                        <img class="w-[7px] h-[13px] ml-1 " src="@/assets/images/my/arrow-right.png" alt="arrow" />
                    </div>
                </div>
                <p class="w-full h-[0.5px] bg-[#CBCBCB] ml-2 "></p>
                <div class="pt-2 flex justify-between px-2 pb-2">
                    <div class="text-start text-[13px] ">
                        {{ t('guid_help.text_17') }}
                    </div>
                </div>
            </div>
            <p class="w-full h-[0.5px] bg-[#CBCBCB]"></p>
            <div>
                <div class="flex justify-between text-[15px] items-center py-2  px-2">
                    <div class="flex">
                        <p class="text-[#454558]">{{ t('guid_help.text_18') }}</p>
                    </div>
                    <div class="flex items-center">
                        <img class="w-[7px] h-[13px] ml-1 " src="@/assets/images/my/arrow-right.png" alt="arrow" />
                    </div>
                </div>
                <p class="w-full h-[0.5px] bg-[#CBCBCB] ml-2 "></p>
                <div class="pt-2 flex justify-between px-2 pb-2">
                    <div class="text-start text-[13px] ">
                        1&nbsp;{{ t('guid_help.text_19') }}
                        <br />2&nbsp;{{ t('guid_help.text_20') }}
                        <br />3&nbsp;{{ t('guid_help.text_21') }}<br />{{ t('guid_help.text_22') }}
                        <br />4&nbsp;{{ t('guid_help.text_23') }}<br />{{ t('guid_help.text_24') }}
                        <br />5&nbsp;{{ t('guid_help.text_25') }}
                    </div>
                </div>
            </div>
            <p class="w-full h-[0.5px] bg-[#CBCBCB]"></p>
            <div>
                <div class="flex justify-between text-[15px] items-center py-2  px-2">
                    <div class="flex">
                        <p class="text-[#454558]">{{ t('guid_help.text_26') }}</p>
                    </div>
                    <div class="flex items-center">
                        <img class="w-[7px] h-[13px] ml-1 " src="@/assets/images/my/arrow-right.png" alt="arrow" />
                    </div>
                </div>
                <p class="w-full h-[0.5px] bg-[#CBCBCB] ml-2 "></p>
                <div class="pt-2 flex justify-between px-2 pb-2">
                    <div class="text-start text-[13px] ">
                        {{ t('guid_help.text_27') }}
                    </div>
                </div>
            </div>
            <p class="w-full h-[0.5px] bg-[#CBCBCB]"></p>
            <div>
                <div class="flex justify-between text-[15px] items-center py-2  px-2">
                    <div class="flex">
                        <p class="text-[#454558]">{{ t('guid_help.text_28') }}</p>
                    </div>
                    <div class="flex items-center">
                        <img class="w-[7px] h-[13px] ml-1 " src="@/assets/images/my/arrow-right.png" alt="arrow" />
                    </div>
                </div>
                <p class="w-full h-[0.5px] bg-[#CBCBCB] ml-2 "></p>
                <div class="pt-2 flex justify-between px-2 pb-2">
                    <div class="text-start text-[13px] ">
                        {{ t('guid_help.text_29') }}
                    </div>
                </div>
            </div>
            <p class="w-full h-[0.5px] bg-[#CBCBCB]"></p>
            <div>
                <div class="flex justify-between text-[15px] items-center py-2  px-2">
                    <div class="flex">
                        <p class="text-[#454558]">{{ t('guid_help.text_30') }}</p>
                    </div>
                    <div class="flex items-center">
                        <img class="w-[7px] h-[13px] ml-1 " src="@/assets/images/my/arrow-right.png" alt="arrow" />
                    </div>
                </div>
                <p class="w-full h-[0.5px] bg-[#CBCBCB] ml-2 "></p>
                <div class="pt-2 flex justify-between px-2 pb-2">
                    <div class="text-start text-[13px] ">
                        {{ t('guid_help.text_31') }}
                    </div>
                </div>
            </div>
            <p class="w-full h-[0.5px] bg-[#CBCBCB]"></p>
            <div>
                <div class="flex justify-between text-[15px] items-center py-2  px-2">
                    <div class="flex">
                        <p class="text-[#454558]">{{ t('guid_help.text_32') }}</p>
                    </div>
                    <div class="flex items-center">
                        <img class="w-[7px] h-[13px] ml-1 " src="@/assets/images/my/arrow-right.png" alt="arrow" />
                    </div>
                </div>
                <p class="w-full h-[0.5px] bg-[#CBCBCB] ml-2 "></p>
                <div class="pt-2 flex justify-between px-2 pb-2">
                    <div class="text-start text-[13px] ">
                        {{ t('guid_help.text_33') }}
                    </div>
                </div>
            </div>
            <p class="w-full h-[0.5px] bg-[#CBCBCB]"></p>
            <div>
                <div class="flex justify-between text-[15px] items-center py-2  px-2">
                    <div class="flex">
                        <p class="text-[#454558]">{{ t('guid_help.text_34') }}</p>
                    </div>
                    <div class="flex items-center">
                        <img class="w-[7px] h-[13px] ml-1 " src="@/assets/images/my/arrow-right.png" alt="arrow" />
                    </div>
                </div>
                <p class="w-full h-[0.5px] bg-[#CBCBCB] ml-2 "></p>
                <div class="pt-2 flex justify-between px-2 pb-2">
                    <div class="text-start text-[13px] ">
                        {{ t('guid_help.text_35') }}
                    </div>
                </div>
            </div>
            <p class="w-full h-[0.5px] bg-[#CBCBCB]"></p>
            <div>
                <div class="flex justify-between text-[15px] items-center py-2  px-2">
                    <div class="flex">
                        <p class="text-[#454558]">{{ t('guid_help.text_36') }}</p>
                    </div>
                    <div class="flex items-center">
                        <img class="w-[7px] h-[13px] ml-1 " src="@/assets/images/my/arrow-right.png" alt="arrow" />
                    </div>
                </div>
                <p class="w-full h-[0.5px] bg-[#CBCBCB] ml-2 "></p>
                <div class="pt-2 flex justify-between px-2 pb-2">
                    <div class="text-start text-[13px] ">
                        {{ t('guid_help.text_37') }}
                    </div>
                </div>
            </div>
            <p class="w-full h-[0.5px] bg-[#CBCBCB]"></p>
            <div>
                <div class="flex justify-between text-[15px] items-center py-2  px-2">
                    <div class="flex">
                        <p class="text-[#454558]">{{ t('guid_help.text_38') }}</p>
                    </div>
                    <div class="flex items-center">
                        <img class="w-[7px] h-[13px] ml-1 " src="@/assets/images/my/arrow-right.png" alt="arrow" />
                    </div>
                </div>
                <p class="w-full h-[0.5px] bg-[#CBCBCB] ml-2 "></p>
                <div class="pt-2 flex justify-between px-2 pb-2">
                    <div class="text-start text-[13px] ">
                        {{ t('guid_help.text_39') }}
                    </div>
                </div>
            </div>
            <p class="w-full h-[0.5px] bg-[#CBCBCB]"></p>
            <div>
                <div class="flex justify-between text-[15px] items-center py-2  px-2">
                    <div class="flex">
                        <p class="text-[#454558]">{{ t('guid_help.text_40') }}</p>
                    </div>
                    <div class="flex items-center">
                        <img class="w-[7px] h-[13px] ml-1 " src="@/assets/images/my/arrow-right.png" alt="arrow" />
                    </div>
                </div>
                <p class="w-full h-[0.5px] bg-[#CBCBCB] ml-2 "></p>
                <div class="pt-2 flex justify-between px-2 pb-2">
                    <div class="text-start text-[13px] ">
                        1 {{ t('guid_help.text_41') }}
                        <br />2 {{ t('guid_help.text_42') }}
                    </div>
                </div>
            </div>
            <p class="w-full h-[0.5px] bg-[#CBCBCB]"></p>
            <div>
                <div class="flex justify-between text-[15px] items-center py-2  px-2">
                    <div class="flex">
                        <p class="text-[#454558]">{{ t('guid_help.text_43') }}</p>
                    </div>
                    <div class="flex items-center">
                        <img class="w-[7px] h-[13px] ml-1 " src="@/assets/images/my/arrow-right.png" alt="arrow" />
                    </div>
                </div>
                <p class="w-full h-[0.5px] bg-[#CBCBCB] ml-2 "></p>
                <div class="pt-2 flex justify-between px-2 pb-2">
                    <div class="text-start text-[13px] ">
                        <span class="paragraph_12">{{ t('guid_help.text_44') }}
                            <br />{{ t('guid_help.text_45') }}
                            <br />{{ t('guid_help.text_46') }}
                            <br />{{ t('guid_help.text_47') }}<br />{{ t('guid_help.text_48') }}<br />{{ t('guid_help.text_49') }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router';
import { useI18n } from "vue-i18n";
const { t } = useI18n();
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
<style></style>