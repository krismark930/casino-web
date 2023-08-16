<template>
    <p class="text-[11px] px-2 py-[6px]">奖金：<span class="text-orange-600">0.0352~0.2116</span> 元 </p>
    <div class="animated fadeInLeft px-1">
        <div v-if="hasLocation" class="mb-1">
            <div class="bg-white  py-[3px]  rounded-sm px-1 text-[10px]">
                <div class="flex items-center py-[2px] font-bold">
                    <div class="bg-blue-500 w-[3px] h-[10px] mr-[5px]" >
                    </div>
                    <p>位置选择</p>
                </div>
                <div class="flex z-0 text-[10px] grid grid-cols-5 gap-[5px] mt-[5px] font-bold">
                    <button
                        
                        class="bg-white text-black rounded-sm px-[10px] py-[5px] border-gray-300 border w-full whitespace-nowrap mr-1"
                        v-for="(item, index) in buttonList"
                        :key="index"
                        @click="selectButton()"
                    >
                        {{ item.title }}
                    </button>
                </div>
                <div class="text-gray-400 py-[4px] pt-[8px]">
                    温馨提示： <br/>
                    您选择了<span class="text-red-500">2</span>个位置
                </div>
            </div>
        </div>
        <div>
            <div class="bg-white  py-[12px]  flex items-center justify-between rounded-sm text-[11px] ">
                <textarea rows="4" v-model="content" class="pl-1 w-full " 
                placeholder="请将您要投注的号码输入到框中。&#10;格式1-每个号码之间无间隔，每两注号码之间用“，”间隔。&#10;格式2-每个号码之间用空格间隔，每两注号码之间使用“回车”间隔。" >
                </textarea>
            </div>
            <div class="flex justify-start pl-1 text-[11px] text-gray-400 pt-1">
                温馨提示：<br/> 程序会自动过滤掉不合规则的号码。
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import {toRefs, ref} from 'vue';
const state = defineProps<{hasLocation:boolean, buttonList:Array<any>}>();
const { hasLocation, buttonList } = toRefs(state);
const active = ref(0);
const content = ref('')
const selectButton = () => {

}
// const state = defineProps<{hasLocation:boolean}>();
// const { hasLocation } = toRefs(state);
</script>