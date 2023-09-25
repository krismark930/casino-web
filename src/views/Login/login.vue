<template>
  <div class="content animated fadeInLeft">
    <div class="log_top">
      <img class="log_back" src="@/assets/images/login/icon1.png" alt="" />
      <img  src="@/assets/images/login/logo.png" alt="" width="218"/>
    </div>
    <div>
      <div class="select_box">
        <p
          v-for="(item, index) in selectList"
          :key="index"
          :class="{ active: select == item.id }"
          @click="selects(item.id)"
        >
          {{ item.name }}
        </p>
      </div>
      <div class="form_box">
        <login v-if="select == 1"></login>
        <register v-if="select == 2" :referral_code="referral_code"></register>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import login from "./components/login.vue";
import register from "./components/register.vue";
import { ref , onMounted} from "vue";
import router from "@/router";
import { useRoute } from 'vue-router';

const route = useRoute();
const select = ref(1);
const referral_code = ref('');

onMounted(() => {
  const code = route.params.code;
  console.log(code);
  if(code){
    select.value = 2;
    referral_code.value = code;
  }
})

const selectList = ref([
  {
    name: "登录",
    id: 1,
  },
  {
    name: "注册",
    id: 2,
  },
]);

const GoHome = () => {
  router.push({ name: "home" });
};

const selects = (id: number) => {
  select.value = id;
};
</script>

<style scoped lang="scss">
.content {
  min-height: 100vh;
}

.log_top {
  height: 256px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .log_back {
    position: absolute;
    top: 0;
    left: 0;
    height: 256px;
    width: 375px;
    z-index: -1;
  }

  .logo {
    width: 79px;
    height: 82px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3px;

    .img1 {
      width: 128px;
      height: 42px;
    }

    .img2 {
      width: 129px;
      height: 22px;
    }
  }
}

.select_box {
  margin-top: 84px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    width: 115px;
    line-height: 43px;
    border-radius: 43px;
    color: #7b7d84;
    font-size: 20px;
    text-align: center;
    background-color: #eef3fb;
  }

  .active {
    background-color: #00adff;
    color: #ffffff;
  }
}
.form_box {
  padding: 0 22px;
}
</style>
