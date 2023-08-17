<template>
    <div class="animated fadeInLeft">
        <van-nav-bar class="border-b-2 border-gray-300" fixed @click-left="onClickLeft"
            @click-right="() => $router.push('guidTransfer')">
            <template #left>
                <img class="w-1" referrerpolicy="no-referrer" src="@/assets/images/my/arrow-left.png" />
            </template>
            <template #title>
                <span class="pt-[10px] text-[#454558]">{{ t('transfer.text_1') }}</span>
            </template>
            <template #right>{{ t('transfer.text_2') }}
                <img class="w-[15px] h-[15px] ml-1" referrerpolicy="no-referrer"
                    src="@/assets/images/withdraw/icon-help.png" />
            </template>
        </van-nav-bar>

        <div class="pt-[40px] pb-[60px] bg-[#f7f7ff] h-screen">
            <div class=" px-2 bg-white  text-[13px] mt-2">
                <div class="flex justify-between mt-1 pt-[10px]">
                    <div class="flex items-center">
                        <p>{{ t('transfer.text_3') }}</p>
                        <img class="w-[15px] h-[15px] ml-1" referrerpolicy="no-referrer"
                            src="@/assets/images/withdraw/icon-refresh.png" />
                    </div>
                    <div class="text-blue-400">
                        {{ t('transfer.text_4') }}
                    </div>
                </div>
                <p class="w-full h-[0.5px] bg-[#CBCBCB] my-[10px]"></p>
                <div class="flex justify-around text-[12px]">
                    <div class="" v-for="(item, index) in moneyList" :key="index">
                        <div class="flex items-center">
                            <img class="w-[15px] h-[13px] mr-1" referrerpolicy="no-referrer"
                                src="@/assets/images/withdraw/icon-wallet.png" />
                            <p class="text-[#454558]">{{ item.name }}</p>
                        </div>
                        <p class="text-blue-400 text-center">{{ item.value }}</p>
                    </div>
                </div>
                <div class="flex justify-between text-[12px] py-[5px]">
                    <div class="w-full grid grid-cols-4">
                        <div class="col-span-1" v-for="(item, index) in itemList" :key="index">
                            <div class="flex justify-center">
                                <p>{{ item.name }}</p>
                            </div>
                            <p class="text-center text-[#454558]">{{ item.value }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-1 py-2 px-2 bg-white flex justify-between text-[13px]">
                <p>{{ t('transfer.text_5') }}</p>
                <van-switch v-model="checked" size="20px" />
            </div>

            <div class="mt-1">
                <van-field v-model="type.title" is-link readonly :label="t('transfer.text_6')" :placeholder="t('transfer.text_7')"
                    @click="showPicker = true" />
                <van-popup v-model:show="showPicker" round position="bottom" class="text-center text-[15px]">
                    <div v-if="user.AG && sysConfig.AG" class="py-1" @click="() => selectType('AGIN', t('transfer.text_8'))">
                        {{ t('transfer.text_9')}}
                    </div>
                    <div v-if="user.OG && sysConfig.OG" class="py-1" @click="() => selectType('OGIN', t('transfer.text_10'))">
                        {{ t('transfer.text_11')}}
                    </div>
                    <div v-if="user.BBIN && sysConfig.BBIN" class="py-1" @click="() => selectType('BBIN', t('transfer.text_12'))">
                        {{ t('transfer.text_13')}}
                    </div>
                    <div v-if="user.MG && sysConfig.MG" class="py-1" @click="() => selectType('MGIN', t('transfer.text_14'))">
                        {{ t('transfer.text_14')}}
                    </div>
                    <div v-if="user.PT && sysConfig.PT" class="py-1" @click="() => selectType('PTIN', t('transfer.text_15'))">
                        {{ t('transfer.text_15')}}
                    </div>
                    <div v-if="user.KY && sysConfig.KY" class="py-1" @click="() => selectType('KYIN', t('transfer.text_16'))">
                        {{ t('transfer.text_16')}}
                    </div>
                    <div v-if="user.AG && sysConfig.AG" class="py-1" @click="() => selectType('AGOUT', t('transfer.text_17'))">
                        {{ t('transfer.text_17')}}
                    </div>
                    <div v-if="user.OG && sysConfig.OG" class="py-1" @click="() => selectType('OGOUT', t('transfer.text_19'))">
                        {{ t('transfer.text_19')}}
                    </div>
                    <div v-if="user.BBIN && sysConfig.BBIN" class="py-1" @click="() => selectType('BBOUT', t('transfer.text_18'))">
                        {{ t('transfer.text_18')}}
                    </div>
                    <div v-if="user.MG && sysConfig.MG" class="py-1" @click="() => selectType('MGOUT', t('transfer.text_20'))">
                        {{ t('transfer.text_20')}}
                    </div>
                    <div v-if="user.PT && sysConfig.PT" class="py-1" @click="() => selectType('PTOUT', t('transfer.text_21'))">
                        {{ t('transfer.text_21')}}
                    </div>
                    <div v-if="user.KY && sysConfig.KY" class="py-1" @click="() => selectType('KYOUT', t('transfer.text_22'))">
                        {{ t('transfer.text_22')}}
                    </div>
                </van-popup>
            </div>
            <div class="text-wrapper_2 flex justify-start items-center px-2 bg-white mt-1">
                <p class="text-[15px] w-12">{{ t('transfer.text_23')}}</p>
                <input type="number" v-model="amount" @input="amountChange" placeholder="" name="name" id="name"
                    class="ml-1 bg-gray-50block w-full border-0 border-b border-transparent placeholder-[#CBCBCB] placeholder:text-[12px] text-[25px] font-bold" />
            </div>
            <p v-if="alertMessage" class="px-2 py-[5px] text-[12px] text-red-500 bg-gray-100 ml-10">
                {{ alertMessage }}
            </p>
            <div class=" px-2  flex  text-[10px] mt-2 flex justify-center">
                <p>{{ t('transfer.text_24')}} <span class="text-blue-500">{{ t('transfer.text_25')}}</span></p>
            </div>
        </div>


        <div class=" bg-white fixed bottom-0 w-full  border-t-2 border-gray-300 py-1 px-[15px]  rounded-[7px]">

            <div class="w-full flex justify-center gap-1">
                <!-- <button class="button_1 flex w-full justify-center  py-1 border-2 border-blue-500 rounded-sm" @click="deleteResult">
                    <p class="text-blue-500">取消存款申请</p>
                </button> -->
                <button :class="[amount && type ? 'bg-blue-500 border-blue-500' : 'bg-blue-200 border-blue-200']"
                    class="button_1 flex w-full justify-center  py-1 border-2  rounded-sm " @click="submitResult">
                    <p class="text-white text-[12px]">{{ t('transfer.text_26')}}</p>
                </button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import router from '@/router';
import { ref, computed, onMounted } from 'vue';
import { Switch } from 'vant';
import { ElLoading } from "element-plus";
import { Picker, showToast } from 'vant';
import { useAuthStore } from '@/stores/auth';
import { useSysConfigStore } from '@/stores/sysConfig';
import { storeToRefs } from 'pinia';
import { useTransferStore } from '@/stores/transfer';
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const type = ref({ title: '', value: '' });
const showPicker = ref(false);
const tokenActive = ref(1);
const active = ref(1);
const checked = ref(true);
const amount = ref("");
const alertMessage = ref("");

////////////////////////////
const Credit_AG = ref('');
const Credit_OG = ref('');
const Credit_BBIN = ref('');
const Credit_MG = ref('');
const Credit_PT = ref('');
const Credit_KY = ref('');

const { getProfile } = useAuthStore();

const token = computed(() => {
    const { getToken } = storeToRefs(useAuthStore());
    return getToken.value;
})

const user = computed(() => {
    const { getUser } = storeToRefs(useAuthStore());
    moneyList.value.map((item: any) => {
        if (item.name == t('transfer.text_27')) {
            item.value = getUser.value.Money
        }
        if (item.name == t('transfer.text_28')) {
            item.value = getUser.value.OG_Money + getUser.value.AG_Money + getUser.value.BBIN_Money + getUser.value.MG_Money + getUser.value.PT_Money + getUser.value.KY_Money;
        }
    });
    itemList.value.map((item: any) => {
        if (item.name == t('transfer.text_29')) {
            item.value = getUser.value.OG_Money
        }
        if (item.name == t('transfer.text_30')) {
            item.value = getUser.value.KY_Money
        }
        if (item.name == t('transfer.text_31')) {
            item.value = getUser.value.AG_Money
        }
        if (item.name == t('transfer.text_32')) {
            item.value = getUser.value.BBIN_Money
        }
        if (item.name == t('transfer.text_33')) {
            item.value = getUser.value.MG_Money
        }
        if (item.name == t('transfer.text_34')) {
            item.value = getUser.value.PT_Money
        }
    });
    return getUser.value;
})

const {
    sysConfig
} = storeToRefs(useSysConfigStore());

const {
    signIn
} = useAuthStore();
const {
    getSysConfigValue
} = useSysConfigStore();
const {
    sumbitTransfer
} = useTransferStore();
onMounted(async () => {
    console.log(user.value);
    await getProfile(token.value);
    if (!sysConfig.value.AG)
        await getSysConfigValue();
})

const amountChange = () => {
    alertMessage.value = "";
}

const moneyList = ref([
    {
        name: t('transfer.text_27'),
        value: 0.00
    },
    {
        name: t('transfer.text_28'),
        value: 0.00
    },
    //{
    //    name: '福利中心',
    //    value: 0.00
    //},
])
const itemList = ref([
    {
        name: t('transfer.text_29'),
        value: 0.00
    },
    {
        name: t('transfer.text_30'),
        value: 0.00
    },
    {
        name: t('transfer.text_31'),
        value: 0.00
    },
    {
        name: t('transfer.text_32'),
        value: 0.00
    },
    {
        name: t('transfer.text_33'),
        value: 0.00
    },
    {
        name: t('transfer.text_34'),
        value: 0.00
    },

])

const onClickLeft = () => {
    router.go(-1);
};

const selectType = (value: string, title: string) => {
    type.value = { title: title, value: value }
    showPicker.value = false
};

const submitResult = async () => {
    if (amount.value && type.value) {
        console.log(amount.value && type.value)
        const result = verifyData();
        if (result) {
            const loading = ElLoading.service({
                lock: true,
                text: t('transfer.text_35'),
                background: "rgba(0, 0, 0, 0.7)",
            });
            const response = await sumbitTransfer(user.value.id, amount.value, type.value.value);
            if (!response.success) {
                showToast(response.message);
            }
            if (response.message == t('transfer.text_36')) {
                await getProfile(token.value);
            }
            loading.close();
            showToast(response.message);
        }
    }
}
const verifyData = () => {
    if (type.value.title == "") {
        showToast(t('transfer.text_37'));
        return false;
    }
    if (amount.value < sysConfig.value.min_change_money) {
        alertMessage.value = t('transfer.text_38') + sysConfig.value.min_change_money + t('transfer.text_39');
        return false;
    }
    if (type.value.value == "AGIN" || type.value.value == "OGIN" || type.value.value == "BBIN" || type.value.value == "MGIN" || type.value.value == "PTIN" || type.value.value == "KYIN") {
        if (amount.value > user.value.Money) {
            alertMessage.value = t('transfer.text_40');
            return false;
        }
    }
    if (user.value.AG && sysConfig.value.AG) {
        if (type.value.value == "AGOUT") {
            if (Credit_AG == -1 || Credit_AG == -99) {
                showToast(t('transfer.text_41'));
                return false;
            }
            if (amount.value > Credit_AG) {
                showToast(t('transfer.text_42'));
                return false;
            }
        }
    } if (user.value.BBIN && sysConfig.value.BBIN) {
        if (type.value.value == "BBOUT") {
            if (Credit_BBIN == -1 || Credit_BBIN == -99) {
                showToast(t('transfer.text_41'))
                return false;
            }
            if (amount.value > Credit_BBIN) {
                showToast(t('transfer.text_42'));
                return false;
            }
        }
    }
    if (user.value.OG && sysConfig.value.OG) {
        if (type.value.value == "OGOUT") {
            if (Credit_OG == -1 || Credit_OG == -99) {
                showToast(t('transfer.text_41'))
                return false;
            }
            if (amount.value > Credit_OG) {
                showToast(t('transfer.text_42'));
                return false;
            }
        }
    }
    if (user.value.MG && sysConfig.value.MG) {
        if (type.value.value == "MGOUT") {
            if (Credit_OG == -1 || Credit_OG == -99) {
                showToast(t('transfer.text_41'))
                return false;
            }
            if (amount.value > Credit_MG) {
                showToast(t('transfer.text_42'));
                return false;
            }
        }
    }
    if (user.value.PT && sysConfig.value.PT) {
        if (type.value.value == "PTOUT") {
            if (Credit_OG == -1 || Credit_OG == -99) {
                showToast(t('transfer.text_41'))
                return false;
            }
            if (amount.value > Credit_PT) {
                showToast(t('transfer.text_42'));
                return false;
            }
        }
    }
    if (user.value.KY && sysConfig.value.KY) {
        if (type.value.value == "KYOUT") {
            if (Credit_OG == -1 || Credit_OG == -99) {
                showToast(t('transfer.text_41'))
                return false;
            }
            if (amount.value > Credit_KY) {
                showToast(t('transfer.text_42'));
                return false;
            }
        }
    }
    return true;
} 
</script>
