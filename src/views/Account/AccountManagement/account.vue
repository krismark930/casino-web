<template>
    <div class="animated fadeInLeft">
        <van-nav-bar class="border-b-2 border-gray-300" fixed @click-left="onClickLeft">
            <template #left>
                <img class="w-1" referrerpolicy="no-referrer" src="@/assets/images/my/arrow-left.png" />
            </template>
            <template #title>
                <span class="pt-[10px] text-[#454558]">账户管理</span>
            </template>
            <template #right> </template>
        </van-nav-bar>

        <div class="pt-[46px] pb-[60px] bg-[#f7f7ff] h-screen relative overflow-auto">
            <div class="flex justify-start text-[15px] px-1 pt-1 mt-1 bg-white text-[#454558]">
                <div v-for="(item, index) in selectList" :key="index" @click="selectCategory(item.id)" class="px-2">
                    {{ item.name }}
                    <div class="flex justify-center mt-1">
                        <div :class="{
                            'w-[36px] h-[2px] bg-[#01b3ff]':
                                active == item.id
                        }"></div>
                    </div>
                </div>
                <!-- <div class="text-wrapper_1 flex-row justify-between">
                    <span class="text_1">银行卡</span>
                    <span class="text_2">虚拟币账户</span>
                </div>
                <div class="image-wrapper_1 flex-row">
                    <img class="image_1" referrerpolicy="no-referrer"
                        src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps5tudjaoyylynoeqyophurl3yxwez2or8a60f267-32f6-4f10-ad90-cda032627889" />
                </div> -->
            </div>
            <Bank v-if="active === 1"></Bank>
            <Crypto v-if="active === 2" :bank-list="bankList"></Crypto>
        </div>
    </div>
</template>
<script setup lang="ts">
import router from '@/router';
import Bank from './bankCard.vue';
import Crypto from './crypto.vue';
import { ref, onMounted } from 'vue';
import { useBankAccountStore} from '@/stores/bankAccount';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/stores/auth';
const bankList = ref([]);
const { user } = useAuthStore();
const { getCryptoList } = useBankAccountStore();
const { cryptoAccounts } = storeToRefs(useBankAccountStore());

onMounted( async ()=>{
    const response = await getCryptoList(user.id);
    console.log(response)
    bankList.value = response.bankList;
});

const active = ref(1);

const selectList = ref([
    {
        name: '银行卡',
        id: 1
    },
    {
        name: '虚拟币账户',
        id: 2
    }
]);
const onClick_1 = () => {
    //alert(1);
};
const onClickLeft = () => {
    router.go(-1);
};
const selectCategory = (id: number) => {
    active.value = id;
};
</script>
