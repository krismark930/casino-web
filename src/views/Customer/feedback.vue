<template>
    <div class="animated fadeInLeft">
        <van-nav-bar class="border-b-2 border-gray-300" fixed @click-left="onClickLeft" @click-right="onClickRight">
            <template #left>
                <img class="w-1" referrerpolicy="no-referrer" src="@/assets/images/my/arrow-left.png" />
            </template>
            <template #title>
                <span class="pt-[10px] text-[#454558]">意见反馈</span>
            </template>
            <template #right> 我的反馈</template>
        </van-nav-bar>
        <div class="pt-[50px] pb-[60px]   bg-gray-100 text-[15px]">
            <div class="flex px-2 bg-white pt-[15px]">
                <p class="">问题类型</p><span class="text-red-500 text-[20px]">*</span>
            </div>
            <div class="flex justify-start items-center py-1 px-2 " @click="selectAddress">
                <img v-if="queryType.img" class="w-[25px] h-[25px] mr-2" referrerpolicy="no-referrer"
                                    :src="queryType.img" />
                <div class="w-full">
                    <div class=" flex justify-between w-full">
                        <p v-if="queryType.name">{{queryType.name}}</p>
                        <p v-if="!queryType.name" class="text-gray-400">请选择问题类型</p>
                        <img src="@/assets/images/my/arrow-right.png"  class="w-[10px] h-[15px]"/>
                    </div>
                </div>
                
                
            </div>
            <div class="flex px-2 pt-2 bg-white">
                <p class="">问题描述</p><span class="text-red-500 text-[20px]">*</span>
                <p class="text-gray-400">（内容介于20~200字）</p>
            </div>
            <div class=" pt-1 bg-white mt-1">
                <div class="relative">
                    <textarea rows="9" class="px-2 w-full" v-model="content" placeholder="请详细描述您的问题或建议！" ></textarea>
                    <p class="absolute bottom-0 right-2 text-gray-400">{{content.length}}/200</p>
                </div>
                <p class="h-[1px] w-screen bg-gray-300"></p>
            </div>
            <div class="flex px-2 pt-1 bg-white relative">
                <input type="file" class="hidden" ref="fileChoose" @change="selectFiles">
                <div v-for="(item, index) in imageList" :key="index" class="relative pt-1 pr-1">
                    <img class="w-[35px] h-[35px]" referrerpolicy="no-referrer"
                                    :src="item.img" />
                    <img class="w-[12px] h-[12px] absolute top-[5px] right-[5px]" referrerpolicy="no-referrer"
                    src="@/assets/images/customer/icon-remove.png" @click="removeImage(item.id)"/>
                </div>
                <div class="pt-1">
                    <img @click="addImage" class="w-[35px] h-[35px]" referrerpolicy="no-referrer"
                                    src="@/assets/images/customer/icon-upload.png" />
                </div>
                <div class="absolute top-1 right-2">
                    <p class="text-gray-400">{{imageList.length}}/3</p>
                </div>
            </div>
            <div class="text-gray-400 text-[13px] px-2 py-1 bg-white ">
                <span class="">文件格式未</span>
                <span class="">png、</span>
                <span class="">jpg、jpeg</span>
                <span class="">，且大小不超过15MB</span>
            </div>
            <div class="mt-3 px-2">
                <button
                    :class="[{ 'bg-blue-200': !content }, 'bg-blue-500 text-white px-2 py-[10px] w-full text-[17px] rounded-sm']"
                    @click="submit">
                    提交
                </button>
            </div>
        </div>
        <van-popup v-model:show="show" round position="bottom">
            <div class="rounded-t-md">
                <div class="text-[16px] px-2 pt-2 pb-1 flex justify-between">
                    <span class="text-blue-400" @click="cancel">取消</span>
                    <span class="font-bold">选择问题类型</span>
                    <span></span>
                </div>
                <p class="bg-gray-200 h-[0.5px] "></p>
                <div v-for="(item, index) in bankCardList" :key="index" class="flex justify-between px-2 items-center border-b" @click="selectQueryType(item)">
                    <div class="flex items-center">
                        <img :src="item.img" class="w-[25px]"/>
                        <p class="pl-2 text-[14px] py-1">{{ item.name }}</p>
                    </div>
                    <div><img class="w-[20px]" v-if="active === item.id" src="@/assets/images/customer/icon-check.png"></div>
                </div>
            </div>
        </van-popup>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router';
import { showToast } from 'vant';
import { Cascader } from 'vant';

const fileChoose = ref(null);
const show = ref(false);
const active = ref(0)
const queryType = ref({
        id: 1,
        img: new URL('@/assets/images/account/icon-withdraw.png', import.meta.url).href,
        name: '存款问题',
    });
const imgFiles = ref([]);
const cascaderValue = ref('');
const imageLength = ref(0);
const chars = ref(0);
const options = [
      {
        text: 'Zhejiang',
        value: '330000',
      },
      {
        text: 'Jiangsu',
        value: '320000',
      },
    ];
const bankCardList = ref([
    {
        id: 1,
        img: new URL('@/assets/images/account/icon-withdraw.png', import.meta.url).href,
        name: '存款问题',
    },
    {
        id: 2,
        img: new URL('@/assets/images/account/icon-deposit.png', import.meta.url).href,
        name: '取款问题',
    },
    {
        id: 3,
        img: new URL('@/assets/images/customer/icon-game.png', import.meta.url).href,
        name: '游戏问题',
    },
    {
        id: 4,
        img: new URL('@/assets/images/customer/icon-gift.png', import.meta.url).href,
        name: '优惠问题',
    },
    {
        id: 5,
        img: new URL('@/assets/images/customer/icon-pen.png', import.meta.url).href,
        name: '修改资料',
    },
    {
        id: 6,
        img: new URL('@/assets/images/account/icon-intro.png', import.meta.url).href,
        name: '其他问题',
    }
]);
const selectAddress = () => {
    console.log("===============")
    show.value = true;
}
const imageList = ref([] as Array<any>)
const content = ref('')
const addImage = () => {
    (fileChoose.value as any).click();
}
const value = ref([
    { url: 'https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg' },
]);
const onClickLeft = () => {
    router.go(-1);
};
const onClickRight = () => {
    router.push('myFeedback');
};
const submit = () => {
    showToast('意见已提交');
}
const selectQueryType = (item: any) => {
    console.log(item)
    queryType.value = item;
    show.value = false;
    active.value = item.id;
}
const cancel = () => {
    queryType.value = {
        id: 1,
        img: new URL('@/assets/images/account/icon-withdraw.png', import.meta.url).href,
        name: '存款问题',
    };
    show.value = false;
    active.value = 0;
}
const selectFiles = (event:any) => {
    if(imageList.value.length >= 3)
        return;
    imgFiles.value = event.target.files;
    let reader = new FileReader();
    reader.onload = (event) => {
        const imageUrl = event.target?.result
        let tempList:Array<any> = [...imageList.value];
        tempList.push({id:imageLength.value + 1, img:imageUrl});
        imageList.value = tempList;
        imageLength.value = imageLength.value + 1;
    };
    reader.readAsDataURL(event.target.files[0]);
}

const removeImage = (id: number) => {
    console.log(id)
    console.log(imageList.value);
    let tempList = imageList.value.filter((item) => item.id !== id);
    imageList.value = tempList;
}
const goDetail = (value:string) => {
    router.push(value)
}
</script>
