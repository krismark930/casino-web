<template>
    <div class="m-[2px] w-[93px] border-[#2674ff] border rounded-sm" :class="[item.value?'pt-[6px] pb-[3px]':'py-[12px]']">
        <div class="flex justify-center">
            <div class="flex justify-center w-full">
                <div v-if="item.isImg" class="flex justify-center w-full px-[5px] gap-[5px]">
                    <img
                        v-for="(obj, index) in item.icons"
                        :key="index"
                        :src="obj"
                        class="w-[22px]"
                        alt="dice"
                    />
                </div>
                <div v-if="!item.isImg" :class="[isActive?'text-white':'text-[#2674ff]']">
                    {{item.name}}
                </div>
            </div>
        </div>
        <p class="text-center text-[10px] mt-[2px]" :class="[isActive?'text-white':'text-gray-400']">{{ item.value }}</p>
    </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
const props = defineProps<{ item: any , isImg:boolean, isActive:boolean}>();
const {item, isActive } = toRefs(props);
</script>
