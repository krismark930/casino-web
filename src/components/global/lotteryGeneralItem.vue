<template>
    <div class="w-full border-[#2674ff] border rounded-sm bg-white pt-[4px] pb-[6px]">
        <div class="flex justify-center items-center">
            <div class="flex justify-center">
                <div class="relative">
                    <img :src="item.icon" class="w-[30px]" alt="dice" v-if="item.icon !== ''" />
                    <div class="text-black font-bold mt-[2px] text-[14px]" v-else>{{ item.name }}</div>
                    <div class="absolute text-black font-bold number-position text-[18px]" v-if="item.num <= 49">
                        {{ item.num }}
                    </div>
                </div>
            </div>
            <div class="text-red-500 ml-[4px] text-[18px]">{{ item.rate.toFixed(2) }}</div>
        </div>
        <div class="flex justify-center mt-[6px]">
            <input class="w-[80px] border-[#2674ff] border rounded-sm" type="number" v-model="item.value"
                @mousedown="showNumberKeyboard(item['id'])" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { toRefs, ref, watch, computed, defineEmits } from 'vue';
const props = defineProps<{ item: any }>();
const emit = defineEmits<{
    (e: 'changeItem', data: any): void,
}>()
const { item } = toRefs(props);
const showNumberKeyboard = (id: number) => {
    emit("changeItem", { keyboardShow: true, selectedId: id })
}
</script>
<style scoped>
.number-position {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
