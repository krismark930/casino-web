.<template>
    <p class="text-[11px] px-2 pt-[8px]">奖金：<span class="text-orange-600">0.0352~0.2116</span> 元 </p>
    <div class="animated fadeInLeft overflow-y-auto h-[410px] ">
        <div v-for="(item, index) in itemList" :key="index" class="flex bg-white items-center mx-1 rounded-sm px-[4px] py-[6px] mb-[12px] mt-[5px]">
            <div class="m-[6px] py-[3px] px-[px] flex items-center justify-center w-full">
                <div class="w-full grid grid-cols-4 gap-1 text-[13px]">
                    <div v-for="(subItem, index) in item.buttonList" :key="index" @click="() => sizeActive = subItem.id" class="">
                        <lotteryItem :item="subItem" :isImg="false" :isActive="false" :class="[false? 'bg-[#2674ff] text-white':'bg-white text-gray-800']"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import {ref} from 'vue';
import LotteryAlwaysColorItem from '@/components/global/lotteryAlwaysColorItem.vue';
import lotteryItem from '@/components/global/lotteryItem.vue';
const active = ref(1);
const sizeActive = ref(1);
const itemList = ref([
        {
        title: "万位",
        buttonList:[
            {
                id: 1,
                title: "大",
            },
            {
                id: 2,
                title: "小",
            },
            {
                id: 3,
                title: "单",
            },
            {
                id: 4,
                title: "双",
            }
        ]}
    ]);

</script>

<style>
</style>