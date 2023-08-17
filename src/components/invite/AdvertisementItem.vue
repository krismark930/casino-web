<script setup lang="ts">
const { image } = defineProps<{image:string}>()
</script>

<template>
    <div class="w-full">
        <img :src="image" alt="Advertisement">
    </div>
</template>

<style scoped lang="scss">

</style>