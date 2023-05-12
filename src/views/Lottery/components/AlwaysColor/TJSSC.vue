<template>
  <B5 :title="title" :g_type="g_type" :descriptionTitle="descriptionTitle" :descriptionSubTitle="descriptionSubTitle" />
</template>
<script setup>
import { ref } from "vue";
import B5 from "./B5.vue";
const title = ref("天津时时彩");
const g_type = ref("tj");
const descriptionTitle = ref("天津时时彩游戏规则");
const descriptionSubTitle = ref("该游戏的投注时间、开奖时间和开奖号码与天津时时彩完全同步，北京时间（GMT+8）每天白天从上午8：50开到晚上22：50，每 20 分钟开一次奖，每天开奖 42 期。");
</script>