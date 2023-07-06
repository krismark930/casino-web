<template>
    <div class="animated fadeInLeft">
        <van-nav-bar class="border-b-2 border-gray-300" fixed @click-left="onClickLeft">
            <template #left>
                <img class="w-1" referrerpolicy="no-referrer" src="@/assets/images/my/arrow-left.png" />
            </template>
            <template #title>
                <span class="pt-[10px] text-[#454558]">我的反馈</span>
            </template>
            <template #right> </template>
        </van-nav-bar>
        <div class="pt-[50px] pb-[60px] ">
            <div class="flex justify-start text-[15px] items-center py-1 px-2">
                <img class="w-[25px] h-[25px]" referrerpolicy="no-referrer" src="@/assets/images/account/icon-deposit.png"
                    v-if="post.title == '取款问题'" />
                <img class="w-[25px] h-[25px]" referrerpolicy="no-referrer" src="@/assets/images/account/icon-withdraw.png"
                    v-else-if="post.title == '存款问题'" />
                <img class="w-[25px] h-[25px]" referrerpolicy="no-referrer" src="@/assets/images/customer/icon-game.png"
                    v-else-if="post.title == '游戏问题'" />
                <img class="w-[25px] h-[25px]" referrerpolicy="no-referrer" src="@/assets/images/customer/icon-gift.png"
                    v-else-if="post.title == '优惠问题'" />
                <img class="w-[25px] h-[25px]" referrerpolicy="no-referrer" src="@/assets/images/customer/icon-pen.png"
                    v-else-if="post.title == '修改资料'" />
                <img class="w-[25px] h-[25px]" referrerpolicy="no-referrer" src="@/assets/images/account/icon-intro.png"
                    v-else-if="post.title == '其他问题'" />
                <div class="w-full">
                    <div class="pl-2 flex justify-between w-full">
                        <p class="font-medium">{{ post.title }}</p>
                    </div>
                </div>
            </div>
            <p class="h-[5px] bg-gray-100"></p>
            <div class="flex px-2 py-1">
                <div>
                    <img class=" w-[30px]" src="@/assets/images/stadiums/user.png" />
                </div>
                <div class="pl-2 w-full">
                    <p class="text-[18px] text-[#4EABFF]">{{ user.UserName }}</p>
                    <p class="text-[16px] font-medium">{{ post.content }}</p>
                    <div class="flex">
                        <img class="w-[30px] mr-[5px]" :src="image" v-for="(image, index) in post.images" :key="index" />
                    </div>
                    <div class="pt-1 border-b text-gray-400">
                        <p class="text-[16px]">{{ moment(post.created_at).format("YYYY-MM-DD HH:mm:ss") }}</p>
                    </div>
                </div>
            </div>
            <div class="text-[18px] text-right mr-[20px] text-[#4EABFF]">
               {{ post.receiver }}
            </div>
            <div class="text-[18px] text-right mr-[20px]">
               {{post.answer}}
            </div>
            <div class="text-[14px] text-right mr-[20px] border-b text-gray-400" v-if="post.receiver != '' && post.receiver != null">
               {{moment(post.updated_at).format("YYYY-MM-DD HH:mm:ss")}}
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { postStore } from '@/stores/post';
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';
import router from '@/router';
import { useRoute } from 'vue-router';
import moment from "moment"
import { ElLoading } from 'element-plus';

const route = useRoute();
const { dispatchPost } = postStore();

const post = computed(() => {
    const { getPost } = storeToRefs(postStore());
    return getPost.value;
})
const user = computed(() => {
    const { getUser } = storeToRefs(useAuthStore());
    return getUser.value
})
const token = computed(() => {
    const { getToken } = storeToRefs(useAuthStore());
    return getToken.value;
})
const onClickLeft = () => {
    router.go(-1);
};
onMounted(async () => {
    const id = route.query.id;
    const loading = ElLoading.service({
        lock: true,
        text: '加载中...',
        background: 'rgba(0, 0, 0, 0.7)',
    })
    await dispatchPost({ id }, token.value);
    loading.close()
})
</script>
