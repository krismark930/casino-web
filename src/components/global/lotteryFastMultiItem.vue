<template>
    <div class="flex justify-center items-center w-full border-[#2674ff] border rounded-sm bg-white py-[10px]"
        :class="[item.selected ? 'bg-[#2674ff] text-white' : 'bg-white text-[#2674ff]']">
        <div class="text-black font-bold text-[20px]">{{ item.name }}</div>
        <div class="text-red-500 ml-[4px] text-[18px]">{{ item.rate.toFixed(2) }}</div>
        <div class="flex justify-center ml-[4px]" v-for="(iconItem, iconIndex) in item.itemIcons" :key="iconIndex">
            <div class="relative">
                <img :src="iconItem.icon" class="w-[30px]" alt="dice" />
                <div class="absolute text-black font-bold number-position text-[18px]">
                    {{ iconItem.num }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
const props = defineProps<{ item: any }>();
const { item } = toRefs(props);
</script>
<style scoped>
.number-position {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
