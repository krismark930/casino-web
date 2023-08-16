<template>
    <div class="shadow-[0_0px_10px_-1px_rgba(0,0,0,0.3)] m-1 rounded-sm px-[20px] py-[15px]">
        <div class="flex justify-start items-center">
            <img class="w-[72px] h-[72px]" referrerpolicy="no-referrer" src="@/assets/images/my/avatar.png" />
            <div class="flex ml-[16px] items-center justify-between w-full">
                <div class="text-[18px] font-medium text-[#676782]" @click="goDetail('login')" v-if="user.id == undefined">
                    点击登录/注册
                </div>
                <div class="text-[24px] font-medium text-[#4EABFF]" v-else>{{ user.UserName }}</div>
                <el-button type="primary" v-if="user.id != undefined" @click="logout">登出</el-button>
                <img class="w-[10px] h-[15px]" src="@/assets/images/my/arrow-right.png" alt="" />
            </div>
        </div>
        <div class="flex pl-1 pt-3 pb-1">
            <img class="w-[47px] h-[57px]" referrerpolicy="no-referrer" src="@/assets/images/my/mark.png" />
            <div class="p-[5px]">
                <div class="flex items-center">
                    <span class="text-[18px] font-medium text-[#A2A2A2]">加入VIP专享豪礼</span>
                    <img class="w-[15px] h-[15px] ml-1" referrerpolicy="no-referrer"
                        src="@/assets/images/my/arrow-double-right.png" />
                </div>
                <div class="pt-[5px] text-[#4EABFF] text-[14px]">
                    每周红包&nbsp;晋级礼金&nbsp;专属豪礼&nbsp;生日礼金
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { toRefs, computed } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';
//import router from "@/router";
import { useRouter } from "vue-router";

const router = useRouter();

const { dispatchLogout } = useAuthStore();

const user = computed(() => {
    const { getUser } = storeToRefs(useAuthStore());
    return getUser.value;
})

const logout = () => {
    dispatchLogout();
    router.push({ name: "login" });
}

const goDetail = (value: string) => {
    router.push({ name: value })
}
</script>