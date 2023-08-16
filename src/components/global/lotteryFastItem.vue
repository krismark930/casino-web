<template>
    <div class="flex justify-center items-center w-full border-[#2674ff] border rounded-sm bg-white py-[10px]"
        :class="[item.selected ? 'bg-[#2674ff] text-white' : 'bg-white text-[#2674ff]']">
        <div class="flex justify-center ">
            <div class="relative">
                <img :src="item.icon" class="w-[30px]" alt="dice" />
                <div class="absolute text-black font-bold number-position text-[18px]">
                    {{ item.num }}
                </div>
            </div>
        </div>
        <div class="text-red-500 ml-[4px] text-[18px]">{{ item.rate.toFixed(2) }}</div>
        <div class="text-red-500 text-[18px]" v-if="item.rate_1 != undefined">
            /{{ item.rate_1.toFixed(2) }}
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
