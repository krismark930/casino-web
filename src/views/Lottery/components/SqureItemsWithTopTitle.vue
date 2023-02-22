.<template>
    <p class="text-[11px] px-2 py-[6px]">奖金：<span class="text-orange-600">0.0352~0.2116</span> 元 </p>
    <div class="animated fadeInLeft overflow-y-auto h-[410px]">
        <div v-for="(item, index) in data" :key="index" class="bg-white rounded-sm mx-1 mb-1 py-1">
            <p class="pl-[12px] text-[12px]">
                {{item.title}}
            </p>
            <div class="m-[6px] py-[3px] px-[5px] flex items-center justify-center">
                <div class="w-full grid grid-cols-4 gap-1">
                    <div v-for="(subItem, index) in item.buttonList" :key="index" @click="() => sizeActive = subItem.id" class="">
                        <LotteryAlwaysColorItem :item="subItem" :isImg="false" :isActive="false" :class="[false? 'bg-[#2674ff] text-white':'bg-white text-gray-800']"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import {ref, toRefs} from 'vue';
import LotteryAlwaysColorItem from '@/components/global/lotteryAlwaysColorItem.vue';
const state = defineProps<{data:Array<any>}>();
const { data } = toRefs(state);
const active = ref(1);
const sizeActive = ref(1);

</script>

<style>
</style>