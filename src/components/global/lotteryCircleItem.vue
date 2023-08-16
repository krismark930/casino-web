<template>
    <div class="relative ">
        <div class="flex justify-center items-center w-[28px]">
            <img v-if="!isActive" alt="bg" src="@/assets/images/fastthree/icon-circle.png" class="w-[28px] h-[28px]" />
            <img v-if="isActive" alt="bg" src="@/assets/images/fastthree/icon-circle-active.png" class="w-[28px] h-[28px]" />
            <div class="absolute ">
                {{item.value }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
const props = defineProps<{ item: any , isActive:boolean}>();
const {item, isActive} = toRefs(props);
</script>
