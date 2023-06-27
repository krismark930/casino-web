<template>
  <B5 :title="title" :g_type="g_type" :descriptionTitle="descriptionTitle" :descriptionSubTitle="descriptionSubTitle" />
</template>
<script lang="ts" setup>
import { ref } from "vue";
import B5 from "./B5.vue";
const title = ref("澳洲幸运5");
const g_type = ref("azxy5");
const descriptionTitle = ref("澳洲幸运5游戏规则");
const descriptionSubTitle = ref("该游戏是依照澳大利亚福利彩票发行中心统一发行的『澳洲幸运5』彩票的开奖数据为依据所规划的线上彩票游戏，每5分钟开奖一期，每天开奖288期，全天开放。");
</script>