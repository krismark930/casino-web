<template>
  <B3 :title="title" :alertContent="alertContent" :g_type="g_type" :descriptionTitle="descriptionTitle" :descriptionSubTitle="descriptionSubTitle"/>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import B3 from "./B3.vue";
const title = ref("排列三");
const alertContent = ref("排列三开盘时间为：每日00:00 - 20:00");
const g_type = ref("p3");
const descriptionTitle = ref("排列三玩法规则");
const descriptionSubTitle = ref("该游戏的投注时间、开奖时间和开奖号码与排列三完全同步，北京时间（GMT+8）每天白天从上午8：00到晚上20：00每天开奖 1 期。");
</script>