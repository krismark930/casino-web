<!-- 客服 -->
<template>
  <div class="w-full">
    <div class="border border-b-2 ">
      <van-nav-bar>
        <template #left> </template>
        <template #title>
          <span class="text-[#8F8F9E]">{{ t('customer.text_1') }}</span>
        </template>
        <template #right>
          <span class="text-[#8F8F9E]" @click="goDetail('feedback')">{{ t('customer.text_2') }}</span>
        </template>
      </van-nav-bar>
    </div>
    <div class=" animated fadeInLeft">
      <div class="shadow-[0_0px_15px_-1px_rgba(0,0,0,0.3)] m-1 rounded-md p-2" @click="goServicePage">
        <div class="flex justify-start items-center">
          <img class="w-[72px] h-[72px]" referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/psllz9quefd6kqltg6yydolicnf1nr7jgfb6dcb10-137e-484b-b025-7a561d4701c6" />
          <div class="block ml-[16px]">
            <div class="text-[18px] font-bold text-[#676782]">{{ t('customer.text_3') }}</div>
            <div class="text-[13px] text-[#676782] font-medium">{{ t('customer.text_4') }}</div>
          </div>
        </div>
        <div class="relative flex mt-1">
          <img class="absolute w-[350px] -z-10" src="@/assets/images/customer/bg.png" alt="" />
          <div class="text-white p-[15px]">
            <span class="block text-[13px]">{{ t('customer.text_5') }}</span>
            <span class="block text-[13px]">{{ t('customer.text_6') }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import router from '@/router';
import { toRefs, ref, computed, onMounted } from 'vue';
import { storeToRefs } from "pinia";
import { useSysConfigStore } from '@/stores/sysConfig';
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const { getConfigValue } = useSysConfigStore();
const goDetail = (value: string) => {
  router.push(value)
}
const config = computed(() => {
  const { getConfig } = storeToRefs(useSysConfigStore());
  return getConfig.value
})
const goServicePage = () => {
  location.href = config.value.kf1;
}
onMounted(async () => {
  await getConfigValue();
})
</script>

<style scoped lang="scss"></style>
