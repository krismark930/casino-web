<!-- eslint-disable prettier/prettier -->
<template>
    <div
        class="shadow-[0_0px_10px_-1px_rgba(0,0,0,0.3)] m-1 rounded-sm px-2 pt-[15px] pb-[7px] flex justify-between"
            >
                <div class="">
                    <div class="text-[14px] text-[#7A7A7A]">您还未登录</div>
                    <div class="text-[14px] pt-[10px] text-[#676782]" @click="goDetail('login')">
                        登录/注册后查看
                    </div>
                </div>
                <div class="flex justify-between w-[150px]">
                    <div
                        @click="goDetail(item.path)"
                        class="image-text_1 flex-col justify-between"
                        v-for="(item, index) in iconList"
                        :key="index + 250"
                    >
                        <img class="w-[40px]" :src="item.icon" alt="" />
                        <div class="pl-[5px] text-[14px]">{{ item.name }}</div>
                    </div>
                </div>
            </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
const state  = defineProps<{ iconList: Array<any> }>();
const {iconList} = toRefs(state);
const goDetail = (path:string) => {
    emit('goDetail', path);
}
const emit = defineEmits(['goDetail'])

</script>