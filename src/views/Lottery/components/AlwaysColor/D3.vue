<template>
  <B3 :title="title" :g_type="g_type" :descriptionTitle="descriptionTitle" :descriptionSubTitle="descriptionSubTitle"/>
</template>
<script setup>
import { ref } from "vue";
import B3 from "./B3.vue";
const title = ref("福彩3D");
const g_type = ref("d3");
const descriptionTitle = ref("福彩3D玩法规则");
const descriptionSubTitle = ref("该游戏的投注时间、开奖时间和开奖号码与福彩3D完全同步，北京时间（GMT+8）每天白天从上午8：00到晚上20：00每天开奖 1 期。");
</script>