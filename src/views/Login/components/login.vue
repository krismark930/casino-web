<template>
  <div>
    <div class="form_item">
      <img class="form_icon" src="@/assets/images/login/username.png" alt="" />
      <input v-model="username" type="text" placeholder="请输入用户名" />
      <div>
        <img v-if="username" src="@/assets/images/login/clear.png" @click="clearUsername" alt="" />
      </div>
    </div>
    <div class="form_item">
      <img class="form_icon" src="@/assets/images/login/password.png" alt="" />
      <input v-model="password" :type="!passwordType ? 'password' : 'string'" placeholder="请输入密码" />
      <div>
        <img v-if="password" src="@/assets/images/login/see.png" @click="seePassword" alt="" />
        <img v-if="password" src="@/assets/images/login/clear.png" @click="clearPsssword" alt="" />
      </div>
    </div>
    <div class="verification">
      <verification @onValidation="onValidation"></verification>
    </div>
    <div class="forget">
      <van-checkbox v-model="checked" icon-size="14px" checked-color="#00A8FF">记住密码</van-checkbox>
      <span>忘记密码</span>
    </div>
    <button v-if="!username || !password" class="submit_btn">
      登录
    </button>
    <button v-else class="submit_btn2" @click="login">登录</button>
    <p class="venture">合营咨询</p>
  </div>
</template>

<script setup lang="ts">
import verification from "./verification.vue";
import { ref } from 'vue';
import axios from 'axios';
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/auth";
import router from "@/router";

const {
  getToken,
  getUser
} = storeToRefs(useAuthStore());

const {
  signIn
} = useAuthStore();
const isVerification = ref(false);
const checked = ref(false);
const username = ref("");
const password = ref("");
const passwordType = ref(false);

const onValidation = (s: boolean) => {
  isVerification.value = s;
}
const seePassword = () => {
  passwordType.value = !passwordType.value;
}
const clearUsername = () => {
  username.value = "";
}
const clearPsssword = () => {
  password.value = "";
}
const login = async () => {   ///login
  console.log("UserName", username.value, password.value)
  await signIn(username.value, password.value)
}
</script>

<style scoped lang="scss">
.form_item {
  display: flex;
  align-items: center;
  position: relative;
  height: 45px;
  margin-top: 13px;
  border-bottom: 1px solid #0d4785;

  img {
    height: 12px;
  }

  input {
    border: none;
    font-size: 14px;
    margin-left: 12px;
  }

  .form_icon {
    width: 18px;
    height: 20px;
    margin-left: 5%;
  }

  div {
    height: 45px;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;

    img {
      margin-right: 14px;
    }
  }
}

.verification {
  margin-top: 14px;
}

.forget {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 13px;

  span {
    color: #7b7d84;
    font-size: 14px;
  }

  ::v-deep .van-checkbox__label {
    color: #7b7d84;
    font-size: 14px;
  }
}

.submit_btn,
.submit_btn2 {
  margin-top: 36px;
  width: 100%;
  line-height: 46px;
  border-radius: 5px;
  text-align: center;

  font-size: 20px;
  border: 0;
}

.submit_btn {
  color: #cbced8;
  background-image: linear-gradient(to right, #7dceff, #679bff);
}

.submit_btn2 {
  color: #ffffff;
  background-image: linear-gradient(to right, #00acff, #0059fe);
}

.venture {
  width: 100%;
  text-align: center;
  color: #1c57ff;
  font-size: 14px;
  margin-top: 22px;
  margin-bottom: 80px;
}
</style>
