<template>
    <div class="animated fadeInLeft">
        <van-nav-bar class="border-b-2 border-gray-300" fixed @click-left="onClickLeft">
            <template #left>
                <img class="w-1" referrerpolicy="no-referrer" src="@/assets/images/my/arrow-left.png" />
            </template>
            <template #title>
                <span class="pt-[10px] text-[#454558]">了解虚拟币</span>
            </template>
            <template #right> </template>
        </van-nav-bar>
        <div class="pt-[45px] pb-[60px] bg-gray-100 ">
            <div v-for="(item, index) in itemList" :key="index" class="bg-gray-100 pt-1">
                <div class=" w-full flex justify-center px-2">
                    <img class="" :src="item.img" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router';

const itemList = ref([
    {
        img: new URL('@/assets/images/account/about-crypto1.png', import.meta.url).href,
    },
    {
        img: "https://lanhu.oss-cn-beijing.aliyuncs.com/ps750bz3qxmle7kx1n9cuvmiui6gyklsp7od24abb9d-1f18-4118-afc4-b671651872b7",
    },
    {
        img: "https://lanhu.oss-cn-beijing.aliyuncs.com/psxg4clz8unjh6bnukvps505wrbr4bpeiro334a2774-576c-42d5-8ec1-adba4317d4ba",
    },
    {
        img: "https://lanhu.oss-cn-beijing.aliyuncs.com/pszgyeucyaytejk7e1cs97tw7z9hdszlyaf27e2f7-1e1d-495d-bb49-f90cdb9e7541",
    }
]);
const onClickLeft = () => {
    router.go(-1);
};

</script>
