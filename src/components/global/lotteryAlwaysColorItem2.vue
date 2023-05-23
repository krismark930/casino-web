<template>
    <div class="w-full border-[#2674ff] border rounded-sm bg-white pt-[4px] pb-[6px]">
        <div class="flex justify-center items-center">
            <div class="flex justify-center">
                <div class="relative">
                    <div :style="{ 'background-color': item.color }" class="text-center text-white rounded-md w-[24px] h-[24px] font-bold text-[18px]" v-if="item.num != ''">
                        {{ item.num }}
                    </div>
                    <div class="text-black font-bold mt-[2px]" :class="{'text-[14px]' : item.name.length > 3, 'text-[16px]' : item.name.length <= 3}" v-else>{{ item.name }}</div>
                </div>
            </div>
            <div class="text-red-500 text-[18px]">{{ item.rate }}</div>
        </div>
        <div class="flex justify-center mt-[6px]">
            <input v-if="!disabled" class="w-[80px] border-[#2674ff] border rounded-sm" type="number" v-model="item.value"
                @mousedown="showNumberKeyboard(item['id'])" v-on:blur="blurChange" :disabled="disabled"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { toRefs, ref, watch, computed, defineEmits } from 'vue';
const props = defineProps<{ item: any, disabled: boolean }>();
const emit = defineEmits<{
    (e: 'changeItem', data: any): void,
    (e: 'betResult'): void,
}>()
const { item, disabled } = toRefs(props);
const showNumberKeyboard = (id: number) => {
    emit("changeItem", { keyboardShow: true, selectedId: id })
}
const blurChange = () => {
    emit('betResult');
}
</script>
<style scoped>
</style>
