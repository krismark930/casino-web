<template>
  <B5 :title="title" :g_type="g_type" :descriptionTitle="descriptionTitle" :descriptionSubTitle="descriptionSubTitle" />
</template>
<script lang="ts" setup>
import { ref } from "vue";
import B5 from "./B5.vue";
const title = ref("腾讯时时彩");
const g_type = ref("txssc");
const descriptionTitle = ref("重庆时时彩(凤凰)游戏规则");
const descriptionSubTitle = ref("该游戏的投注时间、开奖时间和开奖号码与重庆时时彩(凤凰)完全同步，北京时间（GMT+8）每天白天从上午07：00开到凌晨03：10，每 20 分钟开一次奖，每天开奖 59 期。");
</script>