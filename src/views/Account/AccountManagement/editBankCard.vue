<template>
    <div class="animated fadeInLeft">
        <van-nav-bar class="border-b-2 border-gray-300" fixed @click-left="onClickLeft">
            <template #left>
                <img class="w-1" referrerpolicy="no-referrer" src="@/assets/images/my/arrow-left.png" />
            </template>
            <template #title>
                <span class="pt-[10px] text-[#454558]">{{ t('edit_bank_card.text_1') }}</span>
            </template>
            <template #right> </template>
        </van-nav-bar>

        <div class="pt-[46px] pb-[60px] bg-[#f7f7ff] h-screen">
            <div class=" px-2 bg-white  text-[12px] pb-1">
                <div class="flex justify-between mt-1 pt-[10px]">
                    <div class="flex">
                        <p>{{ t('edit_bank_card.text_2') }}</p>
                         <p>(1/10)</p>
                         <h1><font-awesome-icon icon=”hat-wizard” /></h1>
                    </div>
                    <div class="flex border border-blue-400 px-[5px] items-center rounded-sm" @click="() => router.push('addBank2')">
                        {{ t('edit_bank_card.text_3') }}
                    </div>
                </div>
                <p class="w-full h-[0.5px] bg-[#CBCBCB] mt-[15px]"></p>
            </div>
            <div class="bg-white flex justify-between items-center px-2 py-[15px]">
                <div class="flex w-[90px]">
                    <img class="w-[25px] h-[24px]" src="@/assets/images/my/bank-mark.png" />
                    <div class="text-[12px] text-bold pl-1">{{ bankItem.bank_type }}</div>
                </div>
                <span class="text-[13px] text-bold">{{bankItem.bank_account? bankItem.bank_account.substring(0, 7)+'*******'+ bankItem.bank_account.substring(bankItem.bank_account.length-7,bankItem.bank_account.length) :''}}</span>
                <img class="w-[12px]" referrerpolicy="no-referrer" src="@/assets/images/account/icon-delete.png" @click="deleteItem"/>
            </div>
            
            <div class="px-2  bg-white py-1 ">
                <div class="text-[12px] text-[#454558] pb-1">{{ t('edit_bank_card.text_4') }}</div>
                <div class="text-[15px] flex justify-between">
                    <input type="text" v-model="bank_card_owner" placeholder="" name="name" id="name"
                        class="block w-1/2 border-0 border-b border-transparent placeholder-[#CBCBCB]" />
                        <img v-if="bank_card_owner" @click="()=> bank_card_owner = ''" class="w-[12px] h-[12px] mt-[5px]" referrerpolicy="no-referrer" src="@/assets/images/account/icon-close.png" />
                </div>
                <p class="w-full h-[1px] bg-[#CBCBCB]"></p>
            </div>
            <div class="px-2 text-[12px] bg-white">
                <label for="name" class="block text-[#454558] ">{{ t('edit_bank_card.text_5') }}</label>
                <div class="mt-[5px] border-b border-gray-300 focus-within:border-gray-500 pb-[5px] flex justify-between items-center" @click="selectBank">
                    <input type="text" v-model="bankType" :placeholder="t('edit_bank_card.text_6')" name="name" id="name"
                        class="block w-full border-0 border-b border-transparent placeholder-[#CBCBCB]" />
                        <img class="w-[10px] h-[13px] " src="@/assets/images/my/arrow-right.png" alt="arrow" />
                </div>
            </div>
            <!-- <p class="w-full h-[0.5px] bg-[#CBCBCB]"></p> -->
            <div class="px-2  bg-white py-1 ">
                <div class="text-[12px] text-[#454558] pb-1">{{ t('edit_bank_card.text_7') }}</div>
                <div class="text-[15px] flex justify-between">
                    <input type="text" v-model="bank_account" placeholder="" name="name" id="name"
                        class="block w-1/2 border-0 border-b border-transparent placeholder-[#CBCBCB]" />
                        <img v-if="bank_account" @click="()=> bank_account = ''" class="w-[12px] h-[12px] mt-[5px]" referrerpolicy="no-referrer" src="@/assets/images/account/icon-close.png" />
                </div>
                <p class="w-full h-[0.5px] bg-[#CBCBCB] my-1"></p>
                <p class="text-[12px] text-gray-500">
                    {{ t('edit_bank_card.text_8') }}
                </p>
            </div>
            <div class="my-3 mx-2">
                <button
                    :class="[{ 'bg-blue-400': !bank_account || !bank_card_owner }, 'bg-blue-400 text-white px-2 py-[10px] w-full text-[17px]']"
                    @click="submit">
                    {{ t('edit_bank_card.text_9') }}
                </button>
            </div>
            <div class="text-[#8289AB] text-[12px] flex justify-center">
                {{ t('edit_bank_card.text_10') }}<span class="text-blue-500">{{ t('edit_bank_card.text_11') }}</span>
            </div>
        </div>
        <van-popup v-model:show="show" position="bottom" class="rounded-t-md">
			<div class="rounded-t-md">
				<div class="text-[16px] p-2 flex justify-between">
					<span class="text-blue-400" @click="() => show = false">{{ t('edit_bank_card.text_12') }}</span>
					<span class="font-bold"></span>
                    <span>{{ t('edit_bank_card.text_13') }}</span>
				</div>
				<p class="bg-gray-400 h-[1px] "></p>
                <div class="px-2 relative">
                    <input v-model="search" class="rounded-full h-[30px] bg-gray-300 flex justify-center w-full pl-4 my-1 placeholder:text-[15px] placeholder:pb-1 items-center" placeholder="">
                    <img src="@/assets/images/account/icon-search.png" class="w-[20px] absolute top-[5px] left-3"/>
                </div>
                <div v-for="(item, index) in bankCardList" :key="index" class="flex px-2 items-center" @click="selectBankType(item)">
                    <div v-if="search === '' || search===item.name" class="flex px-2 items-center">
                        <img :src="item.img" class="w-[20px]"/>
                        <p class="pl-1 text-[14px] font-bold py-1">{{ item.name }}</p>
                    </div>
                </div>
			</div>
		</van-popup>
        <van-overlay :show="deleteShow">
			<div class="wrapper" @click.stop>
				<div class="wrapper_box rounded">
					<p class="text-center w-full py-2 border-b">{{ t('edit_bank_card.text_14') }}</p>
					<div class="flex items-center justify-between w-full h-full ">
						<button @click="() => deleteShow = false" class="border-r h-full w-full">{{ t('edit_bank_card.text_12') }}</button>
						<button @click="commit" class="w-full text-blue-500">{{ t('edit_bank_card.text_13') }}</button>
					</div>
				</div>
			</div>
		</van-overlay>
    </div>
</template>
<script setup lang="ts">
import router from '@/router';
import { ref , onMounted } from 'vue';
import { showToast } from 'vant';
import { useBankAccountStore } from '@/stores/bankAccount';
import { useAuthStore } from '@/stores/auth';
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const {user} = useAuthStore();
const bankItem = ref({});
const { editBank , editBankAccount, deleteBank } = useBankAccountStore();
const bank_account = ref('');
const bank_card_owner = ref(t('edit_bank_card.text_14'));
const bankType = ref('');
const show = ref(false);
const deleteShow = ref(false);
const search = ref('');
onMounted(() => {
    bankItem.value = editBank;
    bank_card_owner.value = editBank.bank_card_owner;
    bank_account.value = editBank.bank_account;
    bankType.value = editBank.bank_type;
})
const onClickLeft = () => {
    router.go(-1);
};
const deleteItem = () => {
    deleteShow.value = true;
}
const submit = async () => {
    if(bank_card_owner.value !== '' && bankType.value !== '' && bank_account.value !== ''){
        const result = await editBankAccount(user.id, editBank.id, bank_card_owner.value, bankType.value, bank_account.value );
        if(result.success){
            showToast(result.message);
	        router.push({ name: 'myAccount' })
        }else{
            showToast(result.message);
        }
    }
}
const cancel = () => {
	show.value = false
}
const commit = async () => {
    const response = await deleteBank(editBank.id, user.id);
    if(response.success){
        showToast({
            message: t('edit_bank_card.text_15'),
            icon: new URL('@/assets/images/account/icon-success.png', import.meta.url).href,
        })
    }else{
        showToast(response.message)
    }
}

const bankCardList = ref([
    {
        id: 1,
        img: new URL('@/assets/images/account/icon-bank1.png', import.meta.url).href,
        name: t('bank_add_2.text_18'),
    },
    {
        id: 2,
        img: new URL('@/assets/images/account/icon-bank2.png', import.meta.url).href,
        name: t('bank_add_2.text_19'),
    },
    {
        id: 3,
        img: new URL('@/assets/images/account/icon-bank3.png', import.meta.url).href,
        name: t('bank_add_2.text_20'),
    },
    {
        id: 4,
        img: new URL('@/assets/images/account/icon-bank4.png', import.meta.url).href,
        name: t('bank_add_2.text_21'),
    },
    {
        id: 5,
        img: new URL('@/assets/images/account/icon-bank5.png', import.meta.url).href,
        name: t('bank_add_2.text_22'),
    },
    {
        id: 6,
        img: new URL('@/assets/images/account/icon-bank6.png', import.meta.url).href,
        name: t('bank_add_2.text_23'),
    },
    {
        id: 7,
        img: new URL('@/assets/images/account/icon-bank7.png', import.meta.url).href,
        name: t('bank_add_2.text_24'),
    },
    {
        id: 8,
        img: new URL('@/assets/images/account/icon-bank8.png', import.meta.url).href,
        name: t('bank_add_2.text_25'),
    },
    {
        id: 9,
        img: new URL('@/assets/images/account/icon-bank9.png', import.meta.url).href,
        name: t('bank_add_2.text_26'),
    },
    {
        id: 10,
        img: new URL('@/assets/images/account/icon-bank10.png', import.meta.url).href,
        name: t('bank_add_2.text_27'),
    },
    {
        id: 11,
        img: new URL('@/assets/images/account/icon-bank11.png', import.meta.url).href,
        name: t('bank_add_2.text_28'),
    },
    {
        id: 12,
        img: new URL('@/assets/images/account/icon-bank12.png', import.meta.url).href,
        name: t('bank_add_2.text_29'),
    },
    {
        id: 13,
        img: new URL('@/assets/images/account/icon-bank13.png', import.meta.url).href,
        name: t('bank_add_2.text_30'),
    }
])

const selectBank = () => {
    search.value = '';
    show.value = true
}

const selectBankType = (item:any) => {
    show.value = false
    bankType.value = item.name;
}

</script>
<style scoped lang="scss">
.wrapper {
	width: 100%;
	display: flex;
	justify-content: center;
	.wrapper_box {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
        justify-content: flex-start;
		font-size: 16px;
		width: 280px;
		height: 150px;
		background-color: #FFFFFF;
		margin-top: 250px;
        padding-left: 0px;
        padding-top: 10px;
        padding-bottom: 0px;
        border-radius: 10px;

		span {
			line-height: 45px;
			width: 100%;
			border-bottom: 1px solid #e9e9e9;
			text-align: start;
		}

		.button {
			width: 100%;
			height: 100px;
			display: flex;
			align-items: center;

			button {
				color: #4EABFF;
				width: 50%;
				height: 100%;
				background-color: #FFFFFF;
				padding: 0;
				margin: 0;
				border: 0;
			}

			.bt1 {
                color: rgb(60, 58, 58);
				border-right: 1px solid #e9e9e9;
			}
		}
	}
}
</style>