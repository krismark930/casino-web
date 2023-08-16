<template>
    <div class="animated fadeInLeft">
        <van-nav-bar class="border-b-2 border-gray-300" fixed @click-left="onClickLeft">
            <template #left>
                <img class="w-1" referrerpolicy="no-referrer" src="@/assets/images/my/arrow-left.png" />
            </template>
            <template #title>
                <span class="pt-[10px] text-[#454558]">设置</span>
            </template>
            <template #right> </template>
        </van-nav-bar>
        <div class="pt-[35px] pb-[60px] bg-blue-50 h-screen">
            <div class="flex text-[15px] px-2 pb-1 items-center pt-3">
                <div class="relative w-[70px]">
                    <img class="w-[60px] h-[60px]" referrerpolicy="no-referrer"
                                    src="@/assets/images/my/avatar.png" />
                    <img class="absolute right-0 bottom-0 w-[18px]" src="@/assets/images/account/icon-cut.png">
                </div>
                
                <div class="w-full">
                    <div class="pl-2 flex ">
                        <p class="">ACC822</p>
                    </div>
                    <div  class="pl-2 flex text-[13px]">
                        <p class="text-gray-500">加入开运体育第22天</p>
                    </div>
                </div>
            </div>
            <div class="flex text-[13px] px-2 py-1 items-center bg-white">
                <img class="w-[20px] h-[20px]" referrerpolicy="no-referrer"
                                src="@/assets/images/account/icon-key.png" />
                <div class="w-full">
                    <div class="pl-2 flex w-full justify-between items-center">
                        <p class="">修改密码</p>
                        <img class="w-[8px] h-[13px]" src="@/assets/images/my/arrow-right.png">
                    </div>
                </div>
            </div>
            <p class="h-[1px] bg-gray-200 mx-2"></p>
            <div class="flex text-[13px] px-2 py-1 items-center  bg-white">
                <img class="w-[20px] h-[20px]" referrerpolicy="no-referrer"
                                src="@/assets/images/account/icon-light.png" />
                <div class="w-full">
                    <div class="pl-2 flex w-full justify-between items-center">
                        <p class="">支付密码</p>
                        <img class="w-[8px] h-[13px]" src="@/assets/images/my/arrow-right.png">
                        <!-- <div class="relative">
                            <div class="" @click="selectLang">
                                <van-icon class="" name="arrow-down" />
                            </div>
                            <div class="absolute top-3 right-0 bg-gray-500 text-white rounded-sm" v-show="openLanguage">
                                <div class="flex text-[13px] px-2 py-1 items-center bg-blue-400  w-[280px] rounded-sm">
                                    <img class="w-[20px] h-[20px]" referrerpolicy="no-referrer"
                                                    src="@/assets/images/account/icon-key.png" />
                                    <div class="w-full pl-2">
                                        <p class="">修改密码</p>
                                        <p class="text-[10px]">修改密码</p>
                                    </div>
                                </div>
                                <div>test</div>
                                <div>test</div>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>

            <div class="flex text-[13px] px-2 py-1 items-center bg-white mt-1">
                <img class="w-[20px] h-[20px]" referrerpolicy="no-referrer"
                                src="@/assets/images/account/icon-trans.png" />
                <div class="w-full">
                    <div class="pl-2 flex w-full justify-between items-center">
                        <p class="">语言设置 <span class="text-orange-100">（简体中文）</span></p>
                        <!-- <img class="w-[8px] h-[13px]" src="@/assets/images/my/arrow-right.png"> -->
                        <div class="relative">
                            <div class="" @click="openSelectLang">
                                <img class="w-[8px] h-[13px]" src="@/assets/images/my/arrow-right.png">
                                <!-- <van-icon class="" name="arrow-down" /> -->
                            </div>
                            <div class="absolute top-3 right-0 bg-gray-500 text-white rounded-sm" v-show="openLanguage">
                                <div v-for="(item,index) in langList" :key="index" @click="selectLang(item)" :class="[lang.id === item.id? ' bg-blue-400 ':'']" class="flex text-[13px] px-2 py-1 items-center w-[280px] rounded-sm">
                                    <img class="w-[30px] h-[30px]" referrerpolicy="no-referrer"
                                                    :src="item.icon" />
                                    <div class="w-full pl-2">
                                        <p class="text-[15px]">{{item.title}}</p>
                                        <p class="text-[10px]">{{item.name}}</p>
                                    </div>
                                </div>
                                <p class="bg-gray-400 h-[0.5px]"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p class="h-[1px] bg-gray-200 mx-2"></p>
            <div class="flex text-[13px] px-2 py-1 items-center  bg-white">
                <img class="w-[25px] h-[25px]" referrerpolicy="no-referrer"
                                src="@/assets/images/account/icon-help.png" />
                <div class="w-full">
                    <div class="pl-2 flex w-full justify-between items-center">
                        <p class="">帮助中心</p>
                        <img class="w-[8px] h-[13px]" src="@/assets/images/my/arrow-right.png">
                    </div>
                </div> 
            </div>
            <div class="text-center bg-white mt-3 text-[13px] py-1">
                退出登录
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router';
const openLanguage = ref(false);
const lang = ref({
        id: 1,
        icon: new URL("@/assets/images/subhome/select1.png", import.meta.url).href,
        title: '简体中文',
        name: '简体中文',
        lang: 'cn'
    });
const langList = ref([
    {
        id: 1,
        icon: new URL("@/assets/images/subhome/select1.png", import.meta.url).href,
        title: '简体中文',
        name: '简体中文',
        lang: 'cn'
    },
    {
        id: 2,
        icon: new URL("@/assets/images/subhome/select2.png", import.meta.url).href,
        title: '繁軆中文',
        name: '繁軆中文',
        lang: 'tc'
    },
    {
        id: 3,
        icon: new URL("@/assets/images/subhome/select3.png", import.meta.url).href,
        title: 'English',
        name: '英文（美国',
        lang: 'en'
    }
])
const openSelectLang = () => {
	openLanguage.value = !openLanguage.value
}
const selectLang = (item: any) => {
    openLanguage.value = false;
    lang.value = item;
}
const onClickLeft = () => {
    router.go(-1);
};
const goDetail = (value:string) => {
    router.push(value)
}
</script>
