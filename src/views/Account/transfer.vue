<template>
    <div class="animated fadeInLeft">
        <van-nav-bar class="border-b-2 border-gray-300" fixed @click-left="onClickLeft" @click-right="() => $router.push('guidTransfer')">
            <template #left>
                <img class="w-1" referrerpolicy="no-referrer" src="@/assets/images/my/arrow-left.png" />
            </template>
            <template #title>
                <span class="pt-[10px] text-[#454558]">转账</span>
            </template>
            <template #right>教程 
                <img class="w-[15px] h-[15px] ml-1" referrerpolicy="no-referrer"
                            src="@/assets/images/withdraw/icon-help.png" />
            </template>
        </van-nav-bar>

        <div class="pt-[40px] pb-[60px] bg-[#f7f7ff] h-screen">
            <div class=" px-2 bg-white  text-[13px] mt-2">
                <div class="flex justify-between mt-1 pt-[10px]">
                    <div class="flex items-center">
                        <p>钱包金额</p>
                        <img class="w-[15px] h-[15px] ml-1" referrerpolicy="no-referrer"
                            src="@/assets/images/withdraw/icon-refresh.png" />
                    </div>
                    <div class="text-blue-400">
                        一键回收
                    </div>
                </div>
                <p class="w-full h-[0.5px] bg-[#CBCBCB] my-[10px]"></p>
                <div class="flex justify-around text-[12px]">
                    <div class="" v-for="(item, index) in moneyList" :key="index">
                        <div class="flex items-center">
                            <img class="w-[15px] h-[13px] mr-1" referrerpolicy="no-referrer"
                            src="@/assets/images/withdraw/icon-wallet.png" />
                            <p class="text-[#454558]">{{item.name}}</p>
                        </div>
                        <p class="text-blue-400 text-center">{{item.value}}</p>
                    </div>
                </div>
                <div class="flex justify-between text-[12px] py-[5px]">
                    <div class="w-full grid grid-cols-4">
                        <div class="col-span-1" v-for="(item, index) in itemList" :key="index">
                            <div class="flex justify-center">
                                <p>{{item.name}}</p>
                            </div>
                            <p class="text-center text-[#454558]">{{item.value}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-1 py-2 px-2 bg-white flex justify-between text-[13px]">
                <p>自动转账</p>
                <van-switch v-model="checked" size="20px"/>
            </div>
            
            <div class="mt-1">
                <van-field
                    v-model="type.title"
                    is-link
                    readonly
                    label="转账选择："
                    placeholder="转账选择"
                    @click="showPicker = true"
                    />
                    <van-popup v-model:show="showPicker" round position="bottom" class="text-center text-[15px]">
                        <div v-if="user.AG && sysConfig.AG" class="py-1" @click="() => selectType('AGIN', '我的钱包-->AG馆')">我的钱包-->AG馆</div>
                        <div v-if="user.OG && sysConfig.OG"  class="py-1" @click="() => selectType('OGIN', '我的钱包-->OG馆')">我的钱包-->OG馆</div>
                        <div v-if="user.BBIN && sysConfig.BBIN"  class="py-1" @click="() => selectType('BBIN', '我的钱包-->BBIN馆')">我的钱包-->BBIN馆</div>
                        <div v-if="user.MG && sysConfig.MG"  class="py-1" @click="() => selectType('MGIN', '我的钱包-->MG馆')">我的钱包-->MG馆</div>
                        <div v-if="user.PT && sysConfig.PT"  class="py-1" @click="() => selectType('PTIN', '我的钱包-->PT馆')">我的钱包-->PT馆</div>
                        <div v-if="user.KY && sysConfig.KY"  class="py-1" @click="() => selectType('KYIN', '我的钱包-->开元棋牌')">我的钱包-->开元棋牌</div>
                        <div v-if="user.AG && sysConfig.AG"  class="py-1" @click="() => selectType('AGOUT', 'AG馆-->我的钱包')">AG馆-->我的钱包</div>
                        <div v-if="user.OG && sysConfig.OG"  class="py-1" @click="() => selectType('OGOUT', 'OG馆-->我的钱包')">OG馆-->我的钱包</div>
                        <div v-if="user.BBIN && sysConfig.BBIN"  class="py-1" @click="() => selectType('BBOUT', 'BBIN馆-->我的钱包')">BBIN馆-->我的钱包</div>
                        <div v-if="user.MG && sysConfig.MG"  class="py-1" @click="() => selectType('MGOUT', 'MG馆-->我的钱包')">MG馆-->我的钱包</div>
                        <div v-if="user.PT && sysConfig.PT"  class="py-1" @click="() => selectType('PTOUT', 'PT馆-->我的钱包')">PT馆-->我的钱包</div>
                        <div v-if="user.KY && sysConfig.KY"  class="py-1" @click="() => selectType('KYOUT', '开元棋牌-->我的钱包')">开元棋牌-->我的钱包</div>
                    </van-popup>
            </div>
            <div class="text-wrapper_2 flex justify-start items-center px-2 bg-white mt-1">
                <p class="text-[15px] w-12">转账金额：</p>
                <input type="number" v-model="amount" @input="amountChange" placeholder="" name="name" id="name"
                    class="ml-1 bg-gray-50block w-full border-0 border-b border-transparent placeholder-[#CBCBCB] placeholder:text-[12px] text-[25px] font-bold" />
            </div>
            <div class=" px-2  flex  text-[10px] mt-2 flex justify-center">
                <p>如需帮助，请 <span class="text-blue-500">联系客服</span></p>
            </div>
        </div>
        
        
        <div class=" bg-white fixed bottom-0 w-full  border-t-2 border-gray-300 py-1 px-[15px]  rounded-[7px]">
            
            <div class="w-full flex justify-center gap-1">
                <!-- <button class="button_1 flex w-full justify-center  py-1 border-2 border-blue-500 rounded-sm" @click="deleteResult">
                    <p class="text-blue-500">取消存款申请</p>
                </button> -->
                <button class="button_1 flex w-full justify-center  py-1 border-2 border-blue-500 rounded-sm bg-blue-500" @click="submitResult">
                    <p class="text-white text-[12px]">确定</p>
                </button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import router from '@/router';
import { ref , onMounted} from 'vue';
import { Switch } from 'vant';
import { Picker, showToast } from 'vant';
import { useAuthStore } from '@/stores/auth';
import { useSysConfigStore } from '@/stores/sysConfig';
import { storeToRefs } from 'pinia';
const {
    user,
} = storeToRefs(useAuthStore());
const {
    sysConfig
} = storeToRefs(useSysConfigStore());

const {
    signIn
} = useAuthStore();
const {
    getSysConfigValue
} = useSysConfigStore();

onMounted( async ()=>{
    await signIn('test1111', 'test111123');
    console.log(user.value)
    await getSysConfigValue();
    console.log(sysConfig.value)
    console.log(user.value.AG&&sysConfig.value.AG ? "true":"false")
})

const type = ref({title:'', value:''});
const showPicker = ref(false);
const tokenActive = ref(1);
const active = ref(1);
const checked = ref(true);
const amount = ref(0);
const tokenList = ref([
    {
        id: 1,
        name: '预约取款',
        disccount: true
    },
    {
        id: 2,
        name: '即时取款',
        disccount: false
    }
]);

const moneyList = ref([
    {
        name: '中心钱包',
        value: 0.00
    },
    {
        name: '锁定钱包',
        value: 0.00
    },
    {
        name: '福利中心',
        value: 0.00
    },
])
const itemList = ref([
    {
        name: '皇冠体育',
        value: 0.00
    },
    {
        name: 'OG东方馆',
        value: 0.00
    },
    {
        name: 'AG国际厅',
        value: 0.00
    },
    {
        name: 'AG旗舰厅',
        value: 0.00
    },
    {
        name: 'AG VIP厅',
        value: 0.00
    },
    {
        name: 'BBIN 馆',
        value: 0.00
    },
    {
        name: '开元棋牌',
        value: 0.00
    },
    {
        name: 'AG 电子',
        value: 0.00
    },
    {
        name: 'BBIN 电子',
        value: 0.00
    },
    {
        name: 'PT 电子',
        value: 0.00
    },
    {
        name: 'MG 电子',
        value: 0.00
    },
    {
        name: '新葡京彩票',
        value: 0.00
    },
    {
        name: '六合彩',
        value: 0.00
    },
    {
        name: '赛车',
        value: 0.00
    },
    {
        name: '飞艇PK10',
        value: 0.00
    },
    {
        name: '5分快3',
        value: 0.00
    },

])
const selectList = ref([
    {
        name: '极速取款',
        id: 1
    },
    {
        name: 'USDT提币',
        id: 2
    }
]);
const onClick_1 = () => {
    //alert(1);
};
const selectToken = (id: number) => {
    tokenActive.value = id;
};
const onClickLeft = () => {
    router.go(-1);
};
const selectCategory = (id: number) => {
    active.value = id;
};
const selectTime = (id:number) => {
    active.value = id;
}



const selectType = (value:string, title:string) => {
    type.value = {title: title, value:value}
    showPicker.value = false
};

const onCancel = () => {
    type.value = ''
};

const submitResult = () => {
    verifyData();
}
const verifyData = () => {
    if (amount.value <= 0 ){
        
    }
} 
</script>
