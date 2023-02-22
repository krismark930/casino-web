<!-- 客服 -->
<template>
  <div class="w-full">
    <div class="border border-b-2 ">
			<van-nav-bar>
        <template #left> </template>
        <template #title>
          <span class="text-[#8F8F9E]">我的客服</span>
        </template>
        <template #right>
          <span class="text-[#8F8F9E]" @click="goDetail('feedback')">意见反馈</span>
        </template>
      </van-nav-bar>
		</div>
    <div class=" animated fadeInLeft">
      <div class="shadow-[0_0px_15px_-1px_rgba(0,0,0,0.3)] m-1 rounded-md p-2">
        <div class="flex justify-start items-center">
          <img
            class="w-[72px] h-[72px]"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/psllz9quefd6kqltg6yydolicnf1nr7jgfb6dcb10-137e-484b-b025-7a561d4701c6"
          />
          <div class="block ml-[16px]">
            <div class="text-[18px] font-bold text-[#676782]">HI,尊敬的用户</div>
            <div class="text-[13px] text-[#676782] font-medium">欢迎来到客服中心</div>
          </div>
        </div>
        <div class="relative flex mt-1">
          <img class="absolute w-[350px] -z-10" src="@/assets/images/customer/bg.png" alt="" />
          <div class="text-white p-[15px]">
            <span class="block text-[13px]">在线客服</span>
            <span class="block text-[13px]">Customer&nbsp;Services</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import router from '@/router';
const goDetail = (value:string) => {
  router.push(value)
}
</script>

<style scoped lang="scss">
</style>
