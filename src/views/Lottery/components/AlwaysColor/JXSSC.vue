<template>
  <B5 :title="title" :g_type="g_type" :descriptionTitle="descriptionTitle" :descriptionSubTitle="descriptionSubTitle" />
</template>
<script lang="ts" setup>
import { ref } from "vue";
import B5 from "./B5.vue";
const title = ref("新疆时时彩");
const g_type = ref("jx");
const descriptionTitle = ref("新疆时时彩游戏规则");
const descriptionSubTitle = ref("该游戏的投注时间、开奖时间和开奖号码与新疆时时彩完全同步，北京时间（GMT+8）每天白天从上午10：00开到晚上2：00，每 20 分钟开一次奖，每天开奖 48 期。");
</script>