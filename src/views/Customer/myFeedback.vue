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
        <div class="pt-[35px] pb-[60px] px-2">
            <div class="flex justify-start text-[15px] items-center pt-3" v-for="(post, index) in posts" :key="index"
                @click="goDetail(post.id)">
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
                        <p class="">{{ post.title }}</p>
                        <p class="text-gray-400">{{ moment(post.created_at).format("YYYY-MM-DD") }}</p>
                    </div>
                    <div class="pl-2 flex justify-between w-full">
                        <p class="text-gray-400">{{ post.content }}</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import router from '@/router';
import { postStore } from '@/stores/post';
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';
import { ElLoading } from 'element-plus';
import moment from 'moment';

const { dispatchPosts } = postStore();

const user = computed(() => {
    const { getUser } = storeToRefs(useAuthStore());
    return getUser.value
})
const token = computed(() => {
    const { getToken } = storeToRefs(useAuthStore());
    return getToken.value;
})
const success = computed(() => {
    const { getSuccess } = storeToRefs(postStore());
    return getSuccess.value;
})
const posts = computed(() => {
    const { getPosts } = storeToRefs(postStore());
    return getPosts.value;
})
const onClickLeft = () => {
    router.go(-1);
};
const goDetail = (id: number) => {
    router.push({ name: "feedbackdetail", query: { id } })
}
onMounted(async () => {
    if (!user.value.id) {
        router.push({ name: "login" });
    }
    const loading = ElLoading.service({
        lock: true,
        text: '加载中...',
        background: 'rgba(0, 0, 0, 0.7)',
    })
    await dispatchPosts(token.value);
    loading.close()
})
</script>
