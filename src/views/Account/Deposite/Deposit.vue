<template>
    <div class="animated fadeInLeft">
        <van-nav-bar class="border-b-2 border-gray-300" fixed @click-left="onClickLeft">
            <template #left>
                <img class="w-1" referrerpolicy="no-referrer" src="@/assets/images/my/arrow-left.png" />
            </template>
            <template #title>
                <span class="pt-[10px] text-[#454558]">存款</span>
            </template>
            <template #right> </template>
        </van-nav-bar>
        <div class="pt-[30px] pb-[60px] bg-gray-100">
            <div class="text-[16px] mt-[12px] w-full">
                <div class="bg-white p-2">
                    <span class="text-[#454558]">支付方式</span>
                    <p class="w-full h-[1px] bg-gray-200 my-[5px]"></p>

                    <div class="box_1">
                        <div class="flex justify-start gap-1">
                            <div v-for="(item, index) in cryptoList" :key="index" @click="selectCategory(index,item)"
                                :class="[
                                    active === index
                                        ? 'border border-blue-600'
                                        : 'border border-gray-200'
                                ]"
                                class="relative flex justify-center items-center mt-[6px] w-[80px] h-[60px] py-[3px] rounded-sm">
                                <div class="">
                                    <div class="flex justify-center">
                                        <img class="w-[25px] h-[25px] flex justify-center" referrerpolicy="no-referrer"
                                            :src="item.icon"/>
                                    </div>
                                    <p class="text-blue-700 text-[11px] pt-[5px]">
                                        {{ item.name }}
                                    </p>
                                </div>
                                <div v-if="active === index" class="absolute right-0 bottom-0 image-text_1">
                                    <img class="w-[15px] h-[15px]" referrerpolicy="no-referrer"
                                        src="@/assets/images/deposit/active.png"/>
                                </div>

                                <img v-if="item.new" class="absolute w-[25px] h-[25px] top-0 right-0"
                                    referrerpolicy="no-referrer"
                                    src="@/assets/images/deposit/new.png"/>

                            </div>
                        </div>
                    </div>
                </div>

                <currency-recharge v-if="active === 0" :tokenList="cryptoList[active]?.subBank&&cryptoList[active]?.subBank[active]"
                   />
                <!-- <yebi-currency v-if="active === 1" :tokenList="tokenList" :tokenActive="tokenActive"
                    @selectToken="selectToken" /> -->
                <bank-card v-if="active === 1" :bank="cryptoList[active]"/>
                <!-- <alipay-currency v-if="active === 4" /> -->
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import router from '@/router';
import AlipayCurrency from './AlipayCurrency.vue';
import BankCard from './BankCard.vue';
import CurrencyRecharge from './CurrencyRecharge.vue';
import YebiCurrency from './YebiCurrency.vue';
import { useDepositStore } from '@/stores/deposit';
import { storeToRefs } from "pinia";
const active = ref(0);
const tokenActive = ref(1);

const {
    getBanks,
    isCrypto
} = storeToRefs(useDepositStore());
const {
    getBankList,
    setIsCrypto
} = useDepositStore();
const cryptoList = ref([
    {
        id: 1,
        icon: new URL('@/assets/images/my/crypto.png', import.meta.url)
            .href,
        name: '虚拟币种类',
        new: true
    },
    // {
    //     id: 2,
    //     icon: new URL('@/assets/images/deposit/virtual-currency.png', import.meta.url)
    //         .href,
    //     name: '易币付虚拟币',
    //     new: true
    // },
    {
        id: 2,
        icon: new URL('@/assets/images/deposit/bank-card.png', import.meta.url)
            .href,
        name: '银行卡转账',
        new: false
    },
    // {
    //     id: 4,
    //     icon: new URL('@/assets/images/deposit/alipay.png', import.meta.url)
    //         .href,
    //     name: '支付宝',
    //     new: false
    // }
]);
onMounted(async () => {
    await getBankList();
    let temp = getBanks.value;
    let bankList = [] as Array<any>;
    let subBankList = [] as Array<any>;
    temp.map((item : any, index:number) => {
        let flag = false;
        let bankItem = item;
        subBankList = [];
        bankList.map((subbankItem: any , subIndex : number) => {
            if(subbankItem.bankname === item.bankname){ // if bankname same.
                flag = true;
                let subFlag = false;
                let subBankTemp = item.alias.split('-')[0];
                if(subbankItem.subBank){
                    subbankItem.subBank.map((subItem: any, index: number) => {
                        if(subItem[0] && subItem[0].name === item.alias.split('-')[0]){
                            subFlag = true;
                        }
                    })
                }
                if(subFlag){
                    subbankItem.subBank.map((obj: any)=>{
                        if(obj[0] && obj[0].name === subBankTemp){
                            return obj[0].child.push({bankID: item.ID , name:item.alias.split('-')[1], address: item.bankaddress });
                        }
                        return obj;
                    })
                }else{
                    let tempItem = {};
                    if(item.alias.split('-').length > 1){
                        tempItem = {name: subBankTemp , child: [{bankID: item.ID, name:item.alias.split('-')[1], address: item.bankaddress }]};
                    }else{
                        tempItem = {name: subBankTemp , child: []};
                    }
                    subBankList.push(tempItem);
                }
            }
        })
        if(flag){
            if(subBankList.length > 0){
                if(bankItem.alias.split('-').length > 1){
                    bankList.map((obj)=>{
                        if(obj.bankname === bankItem.bankname){
                            return obj.subBank.push(subBankList);
                        }
                        return obj;
                    })
                }else{
                    bankList.map((obj)=>{
                        if(obj.bankname === bankItem.bankname){
                            return obj.subBank.push(subBankList);
                        }
                        return obj;
                    })
                }
            }
        }else{
            let tempArray = [];
            let tempItem = {};
            if(item.alias.split('-').length > 1){
                tempItem = {name: item.alias.split('-')[0] , child: [{bankID: item.ID, name:item.alias.split('-')[1], address: item.bankaddress }]};
            }else{
                tempItem = {name: item.alias.split('-')[0] , child: []};
            }
            tempArray.push(tempItem);
            subBankList.push(tempArray);
            bankItem.subBank = subBankList;
            bankList.push(bankItem);
        }
    });
    let tempBank = cryptoList.value
    for(var i = 0 ; i< bankList.length; i++){
        tempBank[i].bankID = bankList[i].ID;
        tempBank[i].name = bankList[i].bankname;
        tempBank[i].bankaddress = bankList[i].bankaddress;
        tempBank[i].bankname = bankList[i].bankname;
        tempBank[i].bankno = bankList[i].bankno;
        tempBank[i].subBank = bankList[i].subBank;
    }
    cryptoList.value = tempBank;
});

const tokenList = ref([
    {
        id: 1,
        name: 'TRC20'
    },
    {
        id: 2,
        name: 'ERC20'
    }
]);
const selectCategory = (index: number, bank: any) => {
    active.value = index;
    if(bank.name === "虚拟币种类"){
        setIsCrypto(true)
    }else{
        setIsCrypto(false)
    }
};
const selectToken = (id: number) => {
    tokenActive.value = id;
};
const onClickLeft = () => {
    router.go(-1);
};
const onClick_1 = () => {
    //alert(1);
};
</script>
