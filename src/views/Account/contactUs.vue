<template>
    <div class="animated fadeInLeft">
        <div class="group_1 flex-col">
            <van-nav-bar class="border-b-2 border-gray-300" fixed @click-left="onClickLeft">
                <template #left>
                    <img class="w-1" referrerpolicy="no-referrer" src="@/assets/images/my/arrow-left.png" />
                </template>
                <template #title>
                    <span class="pt-[10px] text-[#454558]">{{ t('contact_us.text_1') }}</span>
                </template>
                <template #right> </template>
            </van-nav-bar>
            <div class="pt-[46px] pb-[60px]">
                <div class="bg-blue-50 py-2 px-2 ">
                    <div class="flex items-center">
                        <p class="bg-blue-400 w-[3px] h-[18px]"></p>
                        <p class="pl-1 text-[16px]">{{ t('contact_us.text_2') }}</p>
                    </div>
                    <div v-for="(item, index) in itemList" :key="index" class="flex justify-between items-center mt-1">
                        <div class="flex justify-start items-center w-[220px] px-2 py-[10px]">
                            <img class="w-[30px] h-[25px]" referrerpolicy="no-referrer"
                                src="https://lanhu.oss-cn-beijing.aliyuncs.com/psz5ham5kkyv5x0mih4dpe8ftgdfwlf9cl92824799-d7d4-4167-8a9d-c6e54e84d822" />
                            <div class="text-[13px] ml-[40px]">
                                <p class="">{{ item.title }}</p>
                                <p class="">{{ item.content }}</p>
                            </div>
                        </div>
                        <div>
                            <div v-for="(subItem, subIndex) in item.control" :key="subIndex"
                                class="bg-[#4eabff] rounded-full px-[14px] py-[2px] text-[12px] text-white ">
                                {{ subItem }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white pb-2 pt-1 px-2 ">
                    <div class="flex items-center">
                        <p class="bg-blue-400 w-[3px] h-[18px]"></p>
                        <p class="pl-1 text-[16px]">{{ t('contact_us.text_3') }}</p>
                    </div>
                    <div v-for="(item, index) in partnerList" :key="index"
                        class="flex justify-between items-center mt-1 ">
                        <div class="flex justify-start items-center w-[220px] px-2 py-[10px] ">
                            <img class="w-[30px] h-[30px]" referrerpolicy="no-referrer"
                                src="https://lanhu.oss-cn-beijing.aliyuncs.com/psd2hig3ckb2gu1ctg09ompv9g2umcrzob640bd3be-1024-4d0a-b826-05dbc0f8e171" />
                            <div class="text-[13px] ml-[40px] truncate">
                                <p class="">{{ item.title }}</p>
                                <p class="">{{ item.content }}</p>
                            </div>
                        </div>
                        <div class="flex">
                            <div v-for="(subItem, subIndex) in item.control" :key="subIndex"
                                class="bg-[#4eabff] rounded-full px-[14px] py-[2px] text-[12px] text-white ml-[5px]">
                                {{ subItem }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="px-2">
                    <button class="text-[16px] bg-[#4eabff] flex justify-center text-white rounded-sm w-full py-1"
                        @click="onClick_1">
                        <span class="text_20">{{ t('contact_us.text_4') }}</span>
                    </button>
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
const itemList = ref([
    {
        icon: new URL(
            '@/assets/images/deposit/virtual-currency.png',
            import.meta.url
        ).href,
        title: t('contact_us.text_5'),
        content: 'XPJ99.COM',
        control: [t('contact_us.text_6')]
    },
    {
        icon: new URL(
            '@/assets/images/deposit/virtual-currency.png',
            import.meta.url
        ).href,
        title: t('contact_us.text_7'),
        content: 'XPJ99&@gmail.com',
        control: [t('contact_us.text_6')]
    }
]);

const partnerList = ref([
    {
        icon: new URL(
            '@/assets/images/deposit/virtual-currency.png',
            import.meta.url
        ).href,
        title: t('contact_us.text_9'),
        content: t('contact_us.text_10'),
        control: [t('contact_us.text_6')]
    },
    {
        icon: new URL(
            '@/assets/images/deposit/virtual-currency.png',
            import.meta.url
        ).href,
        title: 'SKYPE',
        content: 'XPJ99&@OUTLOOK.COM',
        control: [t('contact_us.text_6'), t('contact_us.text_11')]
    },
    {
        icon: new URL(
            '@/assets/images/deposit/virtual-currency.png',
            import.meta.url
        ).href,
        title: 'FLYGRAM',
        content: 'XPJ99',
        control: [t('contact_us.text_6'), t('contact_us.text_11')]
    }
])
const onClick_1 = () => {
    
}
const onClickLeft = () => {
    router.go(-1)
}
</script>
