<template>
    <div class="relative w-full border-[#2674ff] border rounded-sm pt-[6px] pb-[3px] h-[73px] flex flex-col  justify-between">
        <div class="h-full flex justify-center items-center">
            <img
                :src="item.img"
                class="w-[40px] w-[40px]"
                alt="dice"
            />
        </div>
        <p class="text-center text-[10px] mt-[2px]" :class="[isActive?'text-white':'text-gray-400']">{{ item.value }}</p>
        <p class="absolute top-[5px] right-[5px] text-[11px]">{{item.id}}</p>
    </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
const props = defineProps<{ item: any , isImg:boolean, isActive:boolean}>();
const {item, isActive } = toRefs(props);
</script>
