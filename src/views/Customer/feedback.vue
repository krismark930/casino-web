<template>
    <div class="animated fadeInLeft">
        <van-nav-bar class="border-b-2 border-gray-300" fixed @click-left="onClickLeft" @click-right="onClickRight">
            <template #left>
                <img class="w-1" referrerpolicy="no-referrer" src="@/assets/images/my/arrow-left.png" />
            </template>
            <template #title>
                <span class="pt-[10px] text-[#454558]">{{ t('feed_back.text_1') }}</span>
            </template>
            <template #right> {{ t('feed_back.text_2') }}</template>
        </van-nav-bar>
        <div class="pt-[50px] pb-[60px]   bg-gray-100 text-[15px]">
            <div class="flex px-2 bg-white pt-[15px]">
                <p class="">{{ t('feed_back.text_3') }}</p><span class="text-red-500 text-[20px]">*</span>
            </div>
            <div class="flex justify-start items-center py-1 px-2 " @click="selectAddress">
                <img v-if="queryType.img" class="w-[25px] h-[25px] mr-2" referrerpolicy="no-referrer"
                    :src="queryType.img" />
                <div class="w-full">
                    <div class=" flex justify-between w-full">
                        <p v-if="queryType.name">{{ queryType.name }}</p>
                        <p v-if="!queryType.name" class="text-gray-400">{{ t('feed_back.text_4') }}</p>
                        <img src="@/assets/images/my/arrow-right.png" class="w-[10px] h-[15px]" />
                    </div>
                </div>


            </div>
            <div class="flex px-2 pt-2 bg-white">
                <p class="">{{ t('feed_back.text_5') }}</p><span class="text-red-500 text-[20px]">*</span>
                <p class="text-gray-400">{{ t('feed_back.text_6') }}</p>
            </div>
            <div class=" pt-1 bg-white mt-1">
                <div class="relative">
                    <textarea rows="9" class="px-2 w-full" v-model="content" :placeholder="t('feed_back.text_7')"></textarea>
                    <p class="absolute bottom-0 right-2 text-gray-400">{{ content.length }}/200</p>
                </div>
                <p class="h-[1px] w-screen bg-gray-300"></p>
            </div>
            <div class="flex px-2 pt-1 bg-white relative">
                <input type="file" class="hidden" ref="fileChoose" @change="selectFiles">
                <div v-for="(item, index) in imageList" :key="index" class="relative pt-1 pr-1">
                    <img class="w-[35px] h-[35px]" referrerpolicy="no-referrer" :src="item.img" />
                    <img class="w-[12px] h-[12px] absolute top-[5px] right-[5px]" referrerpolicy="no-referrer"
                        src="@/assets/images/customer/icon-remove.png" @click="removeImage(item.id)" />
                </div>
                <div class="pt-1">
                    <img @click="addImage" class="w-[35px] h-[35px]" referrerpolicy="no-referrer"
                        src="@/assets/images/customer/icon-upload.png" />
                </div>
                <div class="absolute top-1 right-2">
                    <p class="text-gray-400">{{ imageList.length }}/3</p>
                </div>
            </div>
            <div class="text-gray-400 text-[13px] px-2 py-1 bg-white ">
                <span class="">{{ t('feed_back.text_8') }}</span>
                <span class="">png、</span>
                <span class="">jpg、jpeg</span>
                <span class="">{{ t('feed_back.text_9') }}</span>
            </div>
            <div class="mt-3 px-2">
                <button
                    :class="[{ 'bg-blue-200': !content }, 'bg-blue-500 text-white px-2 py-[10px] w-full text-[17px] rounded-sm']"
                    @click="submit">
                    {{ t('feed_back.text_10') }}
                </button>
            </div>
        </div>
        <van-popup v-model:show="show" round position="bottom">
            <div class="rounded-t-md">
                <div class="text-[16px] px-2 pt-2 pb-1 flex justify-between">
                    <span class="text-blue-400" @click="cancel">{{ t('feed_back.text_11') }}</span>
                    <span class="font-bold">{{ t('feed_back.text_12') }}</span>
                    <span></span>
                </div>
                <p class="bg-gray-200 h-[0.5px] "></p>
                <div v-for="(item, index) in bankCardList" :key="index"
                    class="flex justify-between px-2 items-center border-b" @click="selectQueryType(item)">
                    <div class="flex items-center">
                        <img :src="item.img" class="w-[25px]" />
                        <p class="pl-2 text-[14px] py-1">{{ item.name }}</p>
                    </div>
                    <div><img class="w-[20px]" v-if="active === item.id" src="@/assets/images/customer/icon-check.png">
                    </div>
                </div>
            </div>
        </van-popup>
    </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
import router from '@/router';
import { showToast } from 'vant';
import { Cascader } from 'vant';
import { postStore } from '@/stores/post';
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';
import { ElLoading } from 'element-plus';
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const { dispatchAddPost } = postStore();

const fileChoose = ref(null);
const show = ref(false);
const active = ref(0)
const queryType = ref({
    id: 1,
    img: new URL('@/assets/images/account/icon-withdraw.png', import.meta.url).href,
    name: t('feed_back.text_13'),
});
const imgFiles = ref([]);
const cascaderValue = ref('');
const imageLength = ref(0);
const chars = ref(0);
const options = [
    {
        text: t('feed_back.text_14'),
        value: '330000',
    },
    {
        text: t('feed_back.text_15'),
        value: '320000',
    },
];
const bankCardList = ref([
    {
        id: 1,
        img: new URL('@/assets/images/account/icon-withdraw.png', import.meta.url).href,
        name: t('feed_back.text_16'),
    },
    {
        id: 2,
        img: new URL('@/assets/images/account/icon-deposit.png', import.meta.url).href,
        name: t('feed_back.text_17'),
    },
    {
        id: 3,
        img: new URL('@/assets/images/customer/icon-game.png', import.meta.url).href,
        name: t('feed_back.text_18'),
    },
    {
        id: 4,
        img: new URL('@/assets/images/customer/icon-gift.png', import.meta.url).href,
        name: t('feed_back.text_19'),
    },
    {
        id: 5,
        img: new URL('@/assets/images/customer/icon-pen.png', import.meta.url).href,
        name: t('feed_back.text_20'),
    },
    {
        id: 6,
        img: new URL('@/assets/images/account/icon-intro.png', import.meta.url).href,
        name: t('feed_back.text_21'),
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
const token = computed(() => {
    const { getToken } = storeToRefs(useAuthStore());
    return getToken.value;
})
const user = computed(() => {
    const { getUser } = storeToRefs(useAuthStore());
    return getUser.value
})
const success = computed(() => {
    const { getSuccess } = storeToRefs(postStore());
    return getSuccess.value;
})
const errMessage = computed(() => {
    const { getErrMessage } = storeToRefs(postStore());
    return getErrMessage.value;
})
const onClickLeft = () => {
    router.go(-1);
};
const onClickRight = () => {
    router.push('myFeedback');
};
const submit = async () => {
    console.log("11111111", imgFiles.value);
    if (!user.value.id) {
        router.push({ name: "login" });
        return;
    }
    if (!queryType.value.name) {
        showToast("");
        return;
    }
    if (content.value == "") {
        showToast("");
        return;
    }
    const loading = ElLoading.service({
        lock: true,
        text: t('feed_back.text_22'),
        background: 'rgba(0, 0, 0, 0.7)',
    })
    await dispatchAddPost({
        title: queryType.value.name,
        content: content.value,
        img_list: imageList.value
    }, token.value)
    loading.close();
    if (success.value) {
        showToast(t('feed_back.text_23'));
        content.value = "";
        imageList.value = [];
    } else {
        showToast(errMessage.value);
    }
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
        name: t('feed_back.text_13'),
    };
    show.value = false;
    active.value = 0;
}
const selectFiles = (event: any) => {
    if (imageList.value.length >= 3)
        return;
    imgFiles.value = event.target.files[0];
    console.log(event.target.files[0]);
    let fileName = event.target.files[0].name
    let reader = new FileReader();
    reader.onload = (event) => {
        console.log(event);
        const imageUrl = event.target?.result
        let tempList: Array<any> = [...imageList.value];
        tempList.push({ id: imageLength.value + 1, fileName: fileName, img: imageUrl });
        imageList.value = tempList;
        imageLength.value = imageLength.value + 1;
    };
    reader.readAsDataURL(event.target.files[0]);
}

const removeImage = (id: number) => {
    console.log(id)
    console.log(imageList.value);
    let tempList = imageList.value.filter((item: any) => item.id !== id);
    imageList.value = tempList;
}
const goDetail = (value: string) => {
    router.push(value)
}
</script>
