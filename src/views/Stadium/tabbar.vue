<template>
  <van-tabbar class="van_tabbar" route inactive-color="#AEADC4">
    <!-- badge="3" -->
    <van-tabbar-item v-for="(item, index) in footerList" :key="index" :to="item.path">
      <span>{{ item.name }}</span>
      <template #icon="props">
        <img :src="props.active ? item.icon.active : item.icon.inactive" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const active = ref(1)
const footerList = ref([
  {
    name: "体育",
    path: "/stadiums",
    icon: {
      active: new URL("@/assets/images/stadiums/stadium-o.png", import.meta.url).href,
      inactive: new URL("@/assets/images/stadiums/stadium.png", import.meta.url).href
    },
  },
  {
    name: "赛果",
    path: "/result",
    icon: {
      active: new URL("@/assets/images/stadiums/result.png", import.meta.url).href,
      inactive: new URL("@/assets/images/stadiums/result.png", import.meta.url).href
    },
  },
  {
    name: "注单",
    path: "/results",
    icon: {
      active: new URL("@/assets/images/stadiums/results.png", import.meta.url).href,
      inactive: new URL("@/assets/images/stadiums/results.png", import.meta.url).href
    },
  },
  {
    name: "投注记录",
    path: "/records",
    icon: {
      active: new URL("@/assets/images/stadiums/record.png", import.meta.url).href,
      inactive: new URL("@/assets/images/stadiums/record.png", import.meta.url).href
    },
  },
  {
    name: "收藏",
    path: "/collect",
    icon: {
      active: new URL("@/assets/images/stadiums/collect-o.png", import.meta.url).href,
      inactive: new URL("@/assets/images/stadiums/collect.png", import.meta.url).href
    },
  },
])
</script>

<style lang="scss">
.van_tabbar {
  z-index: 5;
  border-radius: 16px 16px 0 0;
  box-shadow: 0px -6px 5px 0px #75739229;
}
</style>
