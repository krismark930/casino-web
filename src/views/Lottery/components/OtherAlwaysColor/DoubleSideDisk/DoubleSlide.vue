.<template>
    <div class="animated fadeInLeft overflow-y-auto h-[410px]">
        <p class="pl-[22px] pt-1 text-[12px]">
            总和龙虎和
        </p>
        <div class="m-[6px] py-[3px] px-[15px] flex items-center justify-center">
            <div class="w-full grid grid-cols-4 gap-1">
                <div v-for="(subItem, index) in buttonList" :key="index" @click="() => sizeActive = subItem.id" class="">
                    <LotteryAlwaysColorItem :item="subItem" :isImg="false" :isActive="false" :class="[false? 'bg-[#2674ff] text-white':'bg-white text-[#2674ff]']"/>
                </div>
            </div>
        </div>
        <div v-for="(item, index) in itemList" :key="index">
            <p class="h-[1px] bg-gray-200 mx-2"></p>
            <p class="pl-[22px] text-[12px]">
                {{item.title}}
            </p>
            <div class="m-[6px] py-[3px] px-[15px] flex items-center justify-center">
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
import {ref} from 'vue';
import LotteryAlwaysColorItem from '@/components/global/lotteryAlwaysColorItem.vue';

const active = ref(1);
const sizeActive = ref(1);
const itemList = ref([
        {
        title: "第一球",
        buttonList:[
            {
                id: 1,
                value: 1.98,
                title: "大",
            },
            {
                id: 2,
                value: 1.98,
                title: "小",
            },
            {
                id: 3,
                value: 1.98,
                title: "单",
            },
            {
                id: 4,
                value: 1.98,
                title: "双",
            },
            {
                id: 5,
                value: 1.98,
                title: "龙",
            },
            {
                id: 6,
                value: 1.98,
                title: "虎",
            }
            ,
            {
                id: 7,
                value: 1.98,
                title: "和",
            }
        ]},
        {
        title: "第二球",
        buttonList:[
            {
                id: 1,
                value: 1.98,
                title: "大",
            },
            {
                id: 2,
                value: 1.98,
                title: "小",
            },
            {
                id: 3,
                value: 1.98,
                title: "单",
            },
            {
                id: 4,
                value: 1.98,
                title: "双",
            },
            {
                id: 5,
                value: 1.98,
                title: "龙",
            },
            {
                id: 6,
                value: 1.98,
                title: "虎",
            }
            ,
            {
                id: 7,
                value: 1.98,
                title: "和",
            }
        ]},
        {
        title: "第三球",
        buttonList:[
            {
                id: 1,
                value: 1.98,
                title: "大",
            },
            {
                id: 2,
                value: 1.98,
                title: "小",
            },
            {
                id: 3,
                value: 1.98,
                title: "单",
            },
            {
                id: 4,
                value: 1.98,
                title: "双",
            },
            {
                id: 5,
                value: 1.98,
                title: "龙",
            },
            {
                id: 6,
                value: 1.98,
                title: "虎",
            }
            ,
            {
                id: 7,
                value: 1.98,
                title: "和",
            }
        ]},
        {
        title: "第四球",
        buttonList:[
            {
                id: 1,
                value: 1.98,
                title: "大",
            },
            {
                id: 2,
                value: 1.98,
                title: "小",
            },
            {
                id: 3,
                value: 1.98,
                title: "单",
            },
            {
                id: 4,
                value: 1.98,
                title: "双",
            },
            {
                id: 5,
                value: 1.98,
                title: "龙",
            },
            {
                id: 6,
                value: 1.98,
                title: "虎",
            }
            ,
            {
                id: 7,
                value: 1.98,
                title: "和",
            }
        ]},
        {
        title: "第五球",
        buttonList:[
            {
                id: 1,
                value: 1.98,
                title: "大",
            },
            {
                id: 2,
                value: 1.98,
                title: "小",
            },
            {
                id: 3,
                value: 1.98,
                title: "单",
            },
            {
                id: 4,
                value: 1.98,
                title: "双",
            },
            {
                id: 5,
                value: 1.98,
                title: "龙",
            },
            {
                id: 6,
                value: 1.98,
                title: "虎",
            }
            ,
            {
                id: 7,
                value: 1.98,
                title: "和",
            }
        ]},
        
    ]);
const buttonList = ref([
{
                id: 1,
                value: 1.98,
                title: "大",
            },
            {
                id: 2,
                value: 1.98,
                title: "小",
            },
            {
                id: 3,
                value: 1.98,
                title: "单",
            },
            {
                id: 4,
                value: 1.98,
                title: "双",
            },
            {
                id: 5,
                value: 1.98,
                title: "龙",
            },
            {
                id: 6,
                value: 1.98,
                title: "虎",
            }
            ,
            {
                id: 7,
                value: 1.98,
                title: "和",
            }
        ])
</script>

<style>
</style>