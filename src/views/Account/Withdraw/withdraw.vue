<template>
    <div class="animated fadeInLeft">
        <van-nav-bar class="border-b-2 border-gray-300" fixed @click-left="onClickLeft"  @click-right="() => router.push('guidHelp')">
            <template #left>
                <img class="w-1" referrerpolicy="no-referrer" src="@/assets/images/my/arrow-left.png" />
            </template>
            <template #title>
                <span class="pt-[10px] text-[#454558]">取款</span>
            </template>
            <template #right>教程 
                <img class="w-[15px] h-[15px] ml-1" referrerpolicy="no-referrer"
                            src="@/assets/images/withdraw/icon-help.png" />
            </template>
        </van-nav-bar>

        <div class="pt-[40px] pb-[60px] bg-[#f7f7ff] h-screen overflow-scroll">
            <div class="flex justify-start text-[15px] px-1 pt-1 mt-1 bg-white text-[#454558]">
                <div v-for="(item, index) in selectList" :key="index" @click="selectMainCategory(item.id)" class="px-2">
                    {{ item.name }}
                    <div class="flex justify-center mt-1">
                        <div :class="{
                            'w-[36px] h-[2px] bg-[#01b3ff]':
                                mainActive == item.id
                        }"></div>
                    </div>
                </div>
                <!-- <div class="text-wrapper_1 flex-row justify-between">
                    <span class="text_1">银行卡</span>
                    <span class="text_2">虚拟币账户</span>
                </div>
                <div class="image-wrapper_1 flex-row">
                    <img class="image_1" referrerpolicy="no-referrer"
                        src="@/assets/images/deposit/active.png" />
                </div> -->
            </div>
            <div class=" px-2 bg-white  text-[13px] ">
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
                            <p>{{item.name}}</p>
                        </div>
                        <p class="text-blue-400 text-center">{{item.value}}</p>
                    </div>
                </div>
                <p class="w-full h-[0.5px] bg-[#CBCBCB] my-[10px]"></p>
                <div class="flex justify-between text-[12px] px-2 py-[5px]">
                    <div class="w-[260px] grid grid-cols-3">
                        <div class="col-span-1" v-for="(item, index) in itemList" :key="index">
                            <div class="flex justify-center">
                                <p>{{item.name}}</p>
                            </div>
                            <p class="text-center">{{item.value}}</p>
                        </div>
                    </div>
                    <div class="text-center">
                        <p class="text-center">更多</p>
                        <div class="flex justify-center">
                            <img class="w-[15px] h-[15px] mt-[5px]" referrerpolicy="no-referrer"
                            src="@/assets/images/withdraw/icon-more.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div class=" px-2 bg-white  text-[12px] pb-1">
                <div class="flex justify-between mt-1 pt-[10px]">
                    <div class="flex">
                        <p>取款方式</p>
                    </div>
                </div>
                <p class="w-full h-[0.5px] bg-[#CBCBCB] my-[10px]"></p>
                <div class="flex justify-between mt-[10px]">
                    <div v-for="(item, index) in tokenList" :key="index" @click="selectToken(item.id)"
                        :class="[tokenActive === item.id ? 'border border-blue-600' : 'border border-gray-200']"
                        class="relative flex justify-center items-center mt-[6px] w-[200px] h-[40px] mx-[3px] py-[3px]  rounded-sm">
                        <span class="text-blue-700">{{ item.name }}</span>
                        <div v-if="tokenActive === item.id" class="absolute right-0 bottom-0 image-text_1">
                            <img class="w-[12px] h-[12px]" referrerpolicy="no-referrer"
                                src="@/assets/images/deposit/active.png"/>
                        </div>
                        <div v-if="item.disccount === true" class="absolute -top-1 left-1">
                            <div class="relative">
                                <img class=" w-[80px] h-[16px]" referrerpolicy="no-referrer"
                                src="@/assets/images/withdraw/icon-new.png" />
                                <div class="absolute top-[2px] left-[20px] text-white text-[8px]">最高加送0.8%</div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="flex justify-between mt-1 pt-[10px]">
                    <div class="flex">
                        <p>预约取款时间</p>
                    </div>
                </div>
                <p class="w-full h-[0.5px] bg-[#CBCBCB] my-[10px]"></p>
                <div class="flex justify-between mt-[10px] grid grid-cols-2">
                    <div v-for="(item, index) in timeList" :key="index" @click="selectTime(item.id)"
                        :class="[active === item.id ? 'border border-blue-600' : 'border border-gray-200']"
                        class="relative flex justify-center items-center mt-[6px] w-[160px] h-[40px] py-[3px]  rounded-sm col-span-1">
                        <span class="text-blue-700">{{ item.name }}</span>
                        <div v-if="active === item.id" class="absolute right-0 bottom-0 image-text_1">
                            <div class="relative">
                                <img class="w-[12px] h-[12px]" referrerpolicy="no-referrer"
                                src="@/assets/images/deposit/active.png"/>
                                <p></p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div  class=" px-2 bg-white text-[12px] pb-1">
                <div class="text-wrapper_2 flex justify-start items-end">
                    <p class="text-[15px]">￥</p>
                    <input type="text" v-model="amount" @input="amountChange" placeholder="请输入￥100~￥1000000" name="name" id="name"
                        class="block w-full border-0 border-b border-transparent placeholder-[#CBCBCB] placeholder:text-[12px] text-[25px] font-bold" />
                </div>
            </div>
            <div class=" px-2 bg-white  text-[12px] pb-1">
                <div class="flex justify-between mt-1 pt-[10px]">
                    <div class="flex">
                        <p>银行卡 </p>
                         <p>(0/10)</p>
                    </div>
                    <div class="flex border border-blue-400 px-[5px] items-center rounded-sm" @click="addBank">
                        <!-- <img class="w-[10px] h-[10px] mr-1" referrerpolicy="no-referrer"
                            src="@/assets/images/deposit/active.png" /> -->
                            添加银行卡
                    </div>
                </div>
            </div>
            <div v-if="mainActive === 2">
                <div v-if="bankList.length > 0">
                    <van-radio-group v-model="bankAccount" direction="horizontal" class="block">
                        <van-radio v-for="(item, index) in bankList" 
                        :key="index" :name="item"
                        class="bg-white flex justify-start items-center mt-[10px] px-2 py-[15px] w-full"
                        >
                            <div class="flex justify-between w-[290px]">
                                <div class="text-center flex w-[90px]">
                                    <img class="w-[25px] h-[24px]" src="@/assets/images/my/bank-mark.png" />
                                    <div class="text-[12px] text-bold pl-1">{{ item.bank_type}}</div>
                                </div>
                                <span class="text-[13px] text-bold">{{ item.bank_account.substring(0, 7)+'*******'+ item.bank_account.substring(item.bank_account.length-7,item.bank_account.length) }}</span>
                                <span class="text-[12px] text-[#4EABFF]" @click="editBank(item)">编辑</span>
                            </div>
                        </van-radio>
                    </van-radio-group>

                    <!-- <div class="bg-white flex justify-between items-center mt-[10px] px-3 py-[15px]">
                        <div class="image-text_1 flex justify-between items-center">
                            <img class="w-[25px]" referrerpolicy="no-referrer" src="@/assets/images/my/bank-mark.png" />
                            <span class="text-[12px] pl-1">农业银行</span>
                        </div>
                        <span class="text-[13px] text-bold">622848******888</span>
                        <span class="text-[12px] text-[#4EABFF]" @click="editBank()">编辑</span>
                    </div> -->
                </div>
                <div v-else>
                    <div class=" px-2  flex  text-[10px] mt-2">
                        <p>请先绑定一张银行卡，用于收款 </p>
                    </div>
                    <div class=" px-2  flex  text-[10px] mt-2 flex justify-center">
                        <p>取款遇到问题？联系<span class="text-blue-500">人工客服</span>解决</p>
                    </div>
                </div>

                <!-- <div v-if="user.Bank_Address">
                    <div class="bg-white flex justify-between items-center mt-[10px] px-3 py-[15px]">
                        <div class="image-text_1 flex justify-between items-center">
                            <img class="w-[25px]" referrerpolicy="no-referrer" src="@/assets/images/my/bank-mark.png" />
                            <span class="text-[12px] pl-1">农业银行</span>
                        </div>
                        <span class="text-[13px] text-bold">622848******888</span>
                        <span class="text-[12px] text-[#4EABFF]" @click="editBank()">编辑</span>
                    </div>
                </div>
                <div v-else>
                    <div class=" px-2  flex  text-[10px] mt-2">
                        <p>请先绑定一张银行卡，用于收款 </p>
                    </div>
                    <div class=" px-2  flex  text-[10px] mt-2 flex justify-center">
                        <p>取款遇到问题？联系<span class="text-blue-500">人工客服</span>解决</p>
                    </div>
                </div> -->
            </div>
            
            <div v-else>
                <div v-if="cryptoBankList.length > 0">
                    <van-radio-group v-model="cryptoAccount" direction="horizontal" class="block">
                        <van-radio v-for="(item, index) in cryptoBankList" 
                        :key="index" :name="item"
                        class="bg-white flex justify-start items-center mt-[10px] px-3 py-[15px] w-full"
                        >
                            <div class="flex justify-between w-[290px] items-center">
                                <div class="text-center w-[55px]">
                                    <img class="w-[55px] h-[24px] px-2" src="@/assets/images/my/crypto.png" />
                                    <div class="text-[12px] text-bold">{{ item.bank.split('-')[1] }}</div>
                                </div>
                                <span class="text-[13px] text-bold">{{ item.bank_address.substring(0, 7)+'*******'+ item.bank_address.substring(item.bank_address.length-7,item.bank_address.length) }}</span>
                                <span class="text-[12px] text-[#4EABFF]" @click="editCrypto(item)">编辑</span>
                            </div>
                        </van-radio>
                    </van-radio-group>

                    <!-- <div class="bg-white flex justify-between items-center mt-[10px] px-3 py-[15px]">
                        <div class="image-text_1 flex justify-between items-center">
                            <img class="w-[25px]" referrerpolicy="no-referrer" src="@/assets/images/my/bank-mark.png" />
                            <span class="text-[12px] pl-1">农业银行</span>
                        </div>
                        <span class="text-[13px] text-bold">622848******888</span>
                        <span class="text-[12px] text-[#4EABFF]" @click="editBank()">编辑</span>
                    </div> -->
                </div>
                <div v-else>
                    <div class=" px-2  flex  text-[10px] mt-2">
                        <p>请先绑定一张银行卡，用于收款 </p>
                    </div>
                    <div class=" px-2  flex  text-[10px] mt-2 flex justify-center">
                        <p>取款遇到问题？联系<span class="text-blue-500">人工客服</span>解决</p>
                    </div>
                </div>
            </div>

            <div class=" bg-white fixed bottom-0 w-full  border-t-2 border-gray-300 py-1 px-[15px]  rounded-[7px]">
                <div class="w-full flex justify-center gap-1">
                    <!-- <button class="button_1 flex w-full justify-center  py-1 border-2 border-blue-500 rounded-sm" @click="deleteResult">
                        <p class="text-blue-500">取消存款申请</p>
                    </button> -->
                    <button :class="[amount > 0 && user.Bank_Address ? 'bg-blue-500 border-blue-500':'bg-blue-200 border-blue-200']" class="button_1 flex w-full justify-center  py-1 border-2  rounded-sm " 
                        @click="submitResult">
                        <p class="text-white text-[12px]">确定</p>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import router from '@/router';
import { ref, onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useWithdrawStore } from '@/stores/withdraw';
import { useSysConfigStore } from '@/stores/sysConfig';
import { storeToRefs } from 'pinia';
import { showToast } from 'vant';
import { useBankAccountStore} from '@/stores/bankAccount';
const {
    user,
} = storeToRefs(useAuthStore());
const { cryptoAccounts, bankAccounts } = storeToRefs(useBankAccountStore());
const { getBankList, getCryptoList, setEditBank, setEditCrypto } = useBankAccountStore();
const {
    sumbitWithdraw,test
} = useWithdrawStore();
const {
    getSysConfigValue
} = useSysConfigStore();
const {
    sysConfig
} = storeToRefs(useSysConfigStore());

const cryptoBankList = ref([]);
const cryptoAccount = ref();

const bankList = ref([]);
const bankAccount = ref();

onMounted(async ()=>{
    if(!sysConfig.value.AG)
        await getSysConfigValue();

    await getBankList(user.value.id);
    await getCryptoList(user.value.id)
    cryptoBankList.value = cryptoAccounts.value;
    cryptoAccount.value = cryptoBankList.value[0]?cryptoBankList.value[0]:null;

    bankList.value = bankAccounts.value;
    bankAccount.value = bankList.value[0]?bankList.value[0]:null;
    console.log(bankAccounts.value)
});

const tokenActive = ref(1);
const active = ref(1);
const mainActive = ref(2);
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
const timeList = ref([
    {
        id: 1,
        name: '0-9小时之内取款-加送0.2%',
    },
    {
        id: 2,
        name: '0-9小时之内取款-加送0.4%',
    },
    {
        id: 3,
        name: '0-9小时之内取款-加送0.6%',
    },
    {
        id: 4,
        name: '0-9小时之内取款-加送0.8%',
    },
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
        name: '皇冠体育 拷贝',
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
])
const selectList = ref([
    {
        name: '极速取款',
        id: 2
    },
    {
        name: 'USDT提币',
        id: 1
    }
]);

const selectToken = (id: number) => {
    tokenActive.value = id;
};
const onClickLeft = () => {
    router.go(-1);
};

const selectMainCategory = (id: number) => {
    mainActive.value = id;
};
const selectTime = (id:number) => {
    active.value = id;
}
const editBank = (item: any) => {
    setEditBank(item);
    router.push({name: 'editBankCard'});
}
const editCrypto = (item: any) => {
    setEditCrypto(item);
    router.push({ name: 'addCrypto' })
}

const submitResult = async () => {
    const result = VerifyData();
    if(mainActive.value === 2){
        if(result && amount.value > 0 && bankAccount.value){
            const result = await sumbitWithdraw(user.value.id, amount.value, bankAccount.value.bank_address, bankAccount.value.bank_account);
            showToast(result.message);
            if(result.success){
                router.push({name: 'my'});
            }
        }
    }else{
        if(result && amount.value > 0 && cryptoAccount.value ){
            const result = await sumbitWithdraw(user.value.id, amount.value, cryptoAccount.value.bank_address, cryptoAccount.value.bank_account);
            showToast(result.message);
            if(result.success){
                router.push({name: 'my'});
            }
        }
    }
}
const VerifyData = () => {
    if (amount.value == "") {
        showToast("请输入提款金额！");
        return false;
	}
	if (amount.value !="") {
        if(amount.value > user.value.Money )
        {
        showToast(`提款金额不能大于账号金额:${user.value.Money}`);
        return false;
        }
	}
    if (amount.value !="") {
        var ccc=amount.value%100;
        if(ccc!=0)
        {
            showToast("提款金额必须是100的倍数！");
            return false;
        }
        if(amount.value < sysConfig.value.min_qukuan_money)
        {
            showToast(`提款金额不能小于${value.min_qukuan_money}元！`);
            return false;
        }
	}
    return true
}
const addBank = () => {
    if(mainActive.value === 1){
        router.push({name: 'addBank2'});
    }else{
        router.push({name: 'addCrypto'});
    }
}
</script>
