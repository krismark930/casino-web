<script setup lang="ts">
import { ref } from 'vue'
// const { image } = defineProps<{image:string}>()
const active = ref(1)
const title = [
  '邀请奖励',
  '存款大福利',
  '现金天天赚'
]
</script>

<template>
  <div class="w-full relative mt-2">
    <van-tabs v-model:active="active" type="card" class="w-full">
      <van-tab v-for="index in 3" :title="title[index-1]" class="!rounded-tr-lg">
        <div class="bg-white flex items-center justify-between text-[0.4rem] p-1">
          <div class="text-center">
            <div class="text-[#4EABFF]">0</div>
            <div>邀请奖励</div>
          </div>
          <div class="text-center">
            <div class="text-[#4EABFF]">0.00</div>
            <div>获得邀请彩金(元）</div>
          </div>
          <div class="text-center">
            <div class="text-[#4EABFF]">0.00</div>
            <div>邀请成功(人)</div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<style lang="scss">
.van-tabs__nav{
  margin: 0px !important
}
.van-tabs__nav--card{
  border-top-left-radius: 10px !important;
  border-top-right-radius: 10px !important;
  height:30px !important;
}
.van-tab.van-tab--card.van-tab--active{
  // border-top-left-radius: 10px !important;
  // border-top-right-radius: 10px !important;
}
</style>