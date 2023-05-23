<template>
    <div class="w-full border-[#2674ff] border rounded-sm bg-white pt-[4px] pb-[6px]">
        <div class="flex justify-center items-center">
            <div class="text-black font-bold text-[20px]">{{ item.name }}</div>
            <div class="text-red-500 ml-[4px] mr-[4px] text-[18px]">{{ item.rate.toFixed(2) }}</div>
            <input class="w-[80px] border-[#2674ff] border rounded-sm" type="number" v-model="item.value"
                @mousedown="showNumberKeyboard(item['id'])" />
            <div class="flex justify-center ml-[4px]" v-for="(iconItem, iconIndex) in item.itemIcons" :key="iconIndex">
                <div class="relative">
                    <img :src="iconItem.icon" class="w-[30px]" alt="dice" />
                    <div class="absolute text-black font-bold number-position text-[18px]">
                        {{ iconItem.num }}
                    </div>
                </div>
            </div>
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
