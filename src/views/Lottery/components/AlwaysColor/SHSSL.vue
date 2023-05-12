<template>
  <B3 :title="title" :g_type="g_type" :descriptionTitle="descriptionTitle" :descriptionSubTitle="descriptionSubTitle"/>
</template>
<script setup>
import { ref } from "vue";
import B3 from "./B3.vue";
const title = ref("上海时时乐");
const g_type = ref("t3");
const descriptionTitle = ref("上海时时乐玩法规则");
const descriptionSubTitle = ref("该游戏的投注时间、开奖时间和开奖号码与上海时时乐完全同步，北京时间（GMT+8）每天白天从上午10：00到晚上21：30每天开奖 23 期。");
</script>