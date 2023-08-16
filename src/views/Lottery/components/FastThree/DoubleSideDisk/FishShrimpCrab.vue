<template>
    <div class="animated fadeInLeft">
        <div class="bg-white m-[6px] py-[8px] px-[8px] flex items-center justify-center">
            <div class="w-full grid grid-cols-3 gap-1">
                <div v-for="(item, index) in itemList" :key="index" @click="() => sizeActive = item.id" class="">
                    <lottery-images-item :item="item" :isImg="false" :isActive="item.id === sizeActive" :class="[item.id === sizeActive? 'bg-[#2674ff] text-white':'bg-white text-[#2674ff]']"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import lotteryImagesItem from '@/components/global/lotteryImagesItem.vue';
const sizeActive = ref(1);
const itemList = ref([
    {
        id: 1,
        value: 1.98,
        img: new URL('@/assets/images/fastthree/icon-1.png', import.meta.url).href
    },
    {
        id: 2,
        value: 1.98,
        img: new URL('@/assets/images/fastthree/icon-2.png', import.meta.url).href
    },
    {
        id: 3,
        value: 1.98,
        img: new URL('@/assets/images/fastthree/icon-3.png', import.meta.url).href
    },
    {
        id: 4,
        value: 1.98,
        img: new URL('@/assets/images/fastthree/icon-4.png', import.meta.url).href
    },
    {
        id: 5,
        value: 1.98,
        img: new URL('@/assets/images/fastthree/icon-5.png', import.meta.url).href
    },
    {
        id: 6,
        value: 1.98,
        img: new URL('@/assets/images/fastthree/icon-6.png', import.meta.url).href
    }
])
</script>
<style>
</style>