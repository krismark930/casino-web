.<template>
    <div class="animated fadeInLeft overflow-y-auto h-[410px] mt-[15px]">
        
        <div v-for="(item, index) in itemList" :key="index">
            <p v-if="index !== 0" class="h-[1px] bg-gray-200 mx-2 mb-[4px]"></p>
            <p class="pl-[22px] text-[12px]">
                {{item.title}}
            </p>
            <div class="m-[6px] py-[3px] px-[15px] flex items-center justify-center">
                <div class="w-full grid grid-cols-4 gap-1">
                    <div v-for="(subItem, index) in item.buttonList" :key="index" @click="() => sizeActive = subItem.id" class="">
                        <lottery-always-color-item :item="subItem" :isImg="false" :isActive="false" :class="[false? 'bg-[#2674ff] text-white':'bg-white text-gray-800']"/>
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
                title: 0,
            },
            {
                id: 2,
                value: 1.98,
                title: 1,
            },
            {
                id: 3,
                value: 1.98,
                title: 2,
            },
            {
                id: 4,
                value: 1.98,
                title: 3,
            },
            {
                id: 5,
                value: 1.98,
                title: 4,
            },
            {
                id: 6,
                value: 1.98,
                title: 5,
            }
            ,
            {
                id: 7,
                value: 1.98,
                title: 6,
            }
            ,
            {
                id: 8,
                value: 1.98,
                title: 7,
            }
            ,
            {
                id: 9,
                value: 1.98,
                title: 8,
            }

        ]},
        {
        title: "第二球",
        buttonList:[
        {
                id: 1,
                value: 1.98,
                title: 0,
            },
            {
                id: 2,
                value: 1.98,
                title: 1,
            },
            {
                id: 3,
                value: 1.98,
                title: 2,
            },
            {
                id: 4,
                value: 1.98,
                title: 3,
            },
            {
                id: 5,
                value: 1.98,
                title: 4,
            },
            {
                id: 6,
                value: 1.98,
                title: 5,
            }
            ,
            {
                id: 7,
                value: 1.98,
                title: 6,
            }
            ,
            {
                id: 8,
                value: 1.98,
                title: 7,
            }
            ,
            {
                id: 9,
                value: 1.98,
                title: 8,
            }
        ]},
        {
        title: "第三球",
        buttonList:[
        {
                id: 1,
                value: 1.98,
                title: 0,
            },
            {
                id: 2,
                value: 1.98,
                title: 1,
            },
            {
                id: 3,
                value: 1.98,
                title: 2,
            },
            {
                id: 4,
                value: 1.98,
                title: 3,
            },
            {
                id: 5,
                value: 1.98,
                title: 4,
            },
            {
                id: 6,
                value: 1.98,
                title: 5,
            }
            ,
            {
                id: 7,
                value: 1.98,
                title: 6,
            }
            ,
            {
                id: 8,
                value: 1.98,
                title: 7,
            }
            ,
            {
                id: 9,
                value: 1.98,
                title: 8,
            }
        ]},
        {
        title: "第四球",
        buttonList:[
        {
                id: 1,
                value: 1.98,
                title: 0,
            },
            {
                id: 2,
                value: 1.98,
                title: 1,
            },
            {
                id: 3,
                value: 1.98,
                title: 2,
            },
            {
                id: 4,
                value: 1.98,
                title: 3,
            },
            {
                id: 5,
                value: 1.98,
                title: 4,
            },
            {
                id: 6,
                value: 1.98,
                title: 5,
            }
            ,
            {
                id: 7,
                value: 1.98,
                title: 6,
            }
            ,
            {
                id: 8,
                value: 1.98,
                title: 7,
            }
            ,
            {
                id: 9,
                value: 1.98,
                title: 8,
            }
        ]},
        {
        title: "第五球",
        buttonList:[
        {
                id: 1,
                value: 1.98,
                title: 0,
            },
            {
                id: 2,
                value: 1.98,
                title: 1,
            },
            {
                id: 3,
                value: 1.98,
                title: 2,
            },
            {
                id: 4,
                value: 1.98,
                title: 3,
            },
            {
                id: 5,
                value: 1.98,
                title: 4,
            },
            {
                id: 6,
                value: 1.98,
                title: 5,
            }
            ,
            {
                id: 7,
                value: 1.98,
                title: 6,
            }
            ,
            {
                id: 8,
                value: 1.98,
                title: 7,
            }
            ,
            {
                id: 9,
                value: 1.98,
                title: 8,
            }
        ]},
        
    ]);

</script>

<style>
</style>