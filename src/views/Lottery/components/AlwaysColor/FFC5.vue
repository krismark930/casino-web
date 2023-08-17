<template>
  <B5 :title="title" :g_type="g_type" :descriptionTitle="descriptionTitle" :descriptionSubTitle="descriptionSubTitle" />
</template>
<script lang="ts" setup>
import { ref } from "vue";
import B5 from "./B5.vue";
const title = ref("河内五分彩");
const g_type = ref("ffc5");
const descriptionTitle = ref("五分彩游戏规则");
const descriptionSubTitle = ref("该游戏是依照越南福利彩票发行中心统一发行的『五分彩』彩票的开奖数据为依据所规划的线上彩票游戏，每5分钟开奖一期，每天开奖288期，全天开放。");
</script>