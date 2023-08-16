<script setup lang="ts">
import type { INotification } from '@/interface';

const { notification } = defineProps<{notification:INotification}>()

</script>

<template>
    <div class="w-full text-[0.37rem] text-[#454558] flex items-center justify-start gap-1 my-[3px]">
        <div>
            <img :src="notification.icon" alt="icon" class="h-2 w-2">
        </div>
        <div class="truncate">{{notification.message}}</div>
    </div>
</template>

<style scoped lang="scss">

</style>