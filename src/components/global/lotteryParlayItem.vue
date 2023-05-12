<template>
    <div v-if="item.name != undefined"
        class="flex justify-center items-center w-full border-[#2674ff] border rounded-sm bg-white py-[10px]"
        :class="[item.selected ? 'bg-[#2674ff] text-white' : 'bg-white text-[#2674ff]']">
        <div class="flex justify-center">
            <div class="text-black font-bold mt-[2px] text-[18px]">{{ item.name }}</div>
        </div>
        <div class="text-red-500 ml-[4px] text-[18px]">{{ item.rate != undefined ? item.rate.toFixed(2) : "" }}
        </div>
    </div>
    <div v-else></div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
const props = defineProps<{ item: any }>();
const { item } = toRefs(props);
</script>
