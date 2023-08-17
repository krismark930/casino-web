<template>
    <div class="animated fadeInLeft">
        <div class="bg-white m-[6px] py-[8px] px-[15px] flex items-center justify-center">
            <div class="w-full grid grid-cols-4 gap-1">
                <div v-for="(item, index) in itemList" :key="index" @click="() => sizeActive = item.id" class="">
                    <lottery-item :item="item" :isImg="false" :isActive="item.id === sizeActive" :class="[item.id === sizeActive? 'bg-[#2674ff] text-white':'bg-white text-[#2674ff]']"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import LotteryItem from '@/components/global/lotteryItem.vue';
const active = ref(1);
const sizeActive = ref(1);
const itemList = ref([
    {
        id: 1,
        value: 1.98,
        title: 3,
    },
    {
        id: 2,
        value: 1.98,
        title: 4,
    },
    {
        id: 3,
        value: 1.98,
        title: 5,
    },
    {
        id: 4,
        value: 1.98,
        title: 6,
    },
    {
        id: 5,
        value: 1.98,
        title: 7,
    },
    {
        id: 6,
        value: 1.98,
        title: 8,
    }
    ,
    {
        id: 7,
        value: 1.98,
        title: 9,
    }
    ,
    {
        id: 8,
        value: 1.98,
        title: 10,
    }
    ,
    {
        id: 9,
        value: 1.98,
        title: 11,
    }
    ,
    {
        id: 10,
        value: 1.98,
        title: 12,
    }
    ,
    {
        id: 11,
        value: 1.98,
        title: 13,
    }
    ,
    {
        id: 12,
        value: 1.98,
        title: 14,
    }
    ,
    {
        id: 13,
        value: 1.98,
        title: 15,
    }
    ,
    {
        id: 14,
        value: 1.98,
        title: 16,
    }
    ,
    {
        id: 15,
        value: 1.98,
        title: 17,
    }
    ,
    {
        id: 16,
        value: 1.98,
        title: 18,
    }
])

</script>

<style>
</style>