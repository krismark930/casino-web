<template>
    <div class="animated fadeInLeft overflow-y-auto h-[410px] mt-[15px]">
        <div v-for="(item, index) in data" :key="index">
            <p v-if="index !== 0" class="h-[1px] bg-gray-200 mx-2 mb-[4px]"></p>
            <p class="pl-[22px] text-[12px]">
                {{ item.title }}
            </p>
            <div class="m-[6px] py-[3px] px-[15px] flex items-center justify-center">
                <div class="w-full grid grid-cols-4 gap-1">
                    <div v-for="(subItem, index) in item.buttonList" :key="index" @click="() => sizeActive = subItem.id"
                        class="">
                        <lottery-always-color-item :item="subItem" :isImg="false" :isActive="false"
                            :class="[false ? 'bg-[#2674ff] text-white' : 'bg-white text-gray-800']" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, toRefs } from 'vue';
import LotteryAlwaysColorItem from '@/components/global/LotteryAlwaysColorItem.vue';
const state = defineProps<{ data: Array<any> }>();
const { data } = toRefs(state);
const active = ref(1);
const sizeActive = ref(1);

</script>

<style></style>