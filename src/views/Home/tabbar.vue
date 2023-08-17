<template>
  <van-tabbar class="van_tabbar" route inactive-color="#AEADC4">
    <!-- @change="onChange" -->
    <!-- badge="3" -->
    <van-tabbar-item
      v-for="(item, index) in tabList"
      :key="index"
      :to="item.path"
    >
      <span>{{ item.name }}</span>
      <template #icon="props">
        <img
          :src="
            props.active
              ? item.icon.active.toString()
              : item.icon.inactive.toString()
          "
        />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import { ref } from "vue";
const active = ref(0);
const tabList = ref([
  {
    name: "首页",
    path: "/homepage",
    icon: {
      active: new URL("@/assets/images/tabbar/home-o.png", import.meta.url)
        .href,
      inactive: new URL("@/assets/images/tabbar/home.png", import.meta.url)
        .href,
    },
  },
  {
    name: "优惠",
    path: "/discount",
    icon: {
      active: new URL("@/assets/images/tabbar/discount-o.png", import.meta.url)
        .href,
      inactive: new URL("@/assets/images/tabbar/discount.png", import.meta.url),
    },
  },
  {
    name: "客服",
    path: "/customer",
    icon: {
      active: new URL("@/assets/images/tabbar/customer-o.png", import.meta.url)
        .href,
      inactive: new URL("@/assets/images/tabbar/customer.png", import.meta.url)
        .href,
    },
  },
  {
    name: "我的",
    path: "/my",
    icon: {
      active: new URL("@/assets/images/tabbar/my-o.png", import.meta.url).href,
      inactive: new URL("@/assets/images/tabbar/my.png", import.meta.url).href,
    },
  },
]);
</script>

<style lang="scss" scoped>
.van_tabbar {
  z-index: 5;
  border-radius: 16px 16px 0 0;
  box-shadow: 0px -6px 5px 0px #75739229;
}
</style>
