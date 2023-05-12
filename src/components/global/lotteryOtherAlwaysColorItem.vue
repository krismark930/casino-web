<template>
    <div class=" w-full border-[#2674ff] border rounded-sm bg-white " :class="[item.value?'pt-[4px] pb-[1px]':'py-[10px]']">
        <div class="flex justify-center ">
            <img
                v-if="isImg"
                :src="item.icon"
                class="w-[22px]"
                alt="dice"
            />
            <div v-if="!isImg" class="text-[12px]" >
                {{item.title }}
            </div>
        </div>
        <p v-if="item.value" class="text-center text-[10px]" :class="[isActive?'text-white':'text-gray-400']">{{ item.value }}</p>
    </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
const props = defineProps<{ item: any , isImg:boolean, isActive:boolean}>();
const {item, isImg, isActive } = toRefs(props);
</script>
