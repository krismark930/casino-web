<template>
  <div>
    <div class="form_item">
      <img class="form_icon" src="@/assets/images/login/username.png" alt="" />
      <input v-model="login_name" type="text" placeholder="请输入登陆帐号" />
      <div>
        <img v-if="login_name" src="@/assets/images/login/clear.png" @click="clearLoginName" alt="" />
      </div>
    </div>
    <div class="form_item">
      <img class="form_icon" src="@/assets/images/login/username.png" alt="" />
      <input v-model="username" type="text" placeholder="请输入会员名字" />
      <div>
        <img v-if="username" src="@/assets/images/login/clear.png" @click="clearUsername" alt="" />
      </div>
    </div>
    <div class="form_item" v-if="Number(sysConfigItem.phone_number_show) == 1">
      <img src="@/assets/images/login/phone.svg" alt=""
        style="margin-left: 4%; width: 24px !important; height: 26px !important;" />
      <input v-model="phone_number" type="number" placeholder="请输入电话号码" />
      <div>
        <img v-if="phone_number" src="@/assets/images/login/clear.png" @click="clearPhoneNumber" alt="" />
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
    <div class="form_item">
      <img class="form_icon" src="@/assets/images/login/password.png" alt="" />
      <input v-model="passwords" :type="!passwordType ? 'password' : 'string'" placeholder="再次输入密码" />
      <div>
        <img v-if="passwords" src="@/assets/images/login/see.png" @click="seePassword" alt="" />
        <img v-if="passwords" src="@/assets/images/login/clear.png" @click="clearPsssword" alt="" />
      </div>
    </div>
    <div class="verification">
      <verification @onValidation="onValidation"></verification>
    </div>
    <div class="forget">
      <van-checkbox v-model="checked" icon-size="14px" checked-color="#00A8FF">我已阅读并同意</van-checkbox>
      <span>相关条款</span>
      和
      <span>隐私政策</span>
    </div>
    <button v-if="!username || !password || !passwords || !login_name" class="submit_btn" @click="register">
      注册
    </button>
    <button v-else class="submit_btn2" @click="register">注册</button>
    <p class="venture">合营咨询</p>
  </div>
</template>

<script setup lang="ts">
import verification from "./verification.vue";
import { ref, toRefs, onMounted, computed } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useSysConfigStore } from '@/stores/sysConfig';
import { storeToRefs } from "pinia";
import axios from "axios";
import config from "@/config";
import router from "@/router";
import { onUnmounted } from "vue";
import { showToast } from "vant";
const {
  getToken,
  getUser
} = storeToRefs(useAuthStore());

const {
  signUp
} = useAuthStore();

const { getSysConfigValue } = useSysConfigStore();

const state = defineProps<{ inviter_id: string }>();

const { inviter_id } = toRefs(state)

const isVerification = ref(false);
const checked = ref(false);
const username = ref("");
const login_name = ref("");
const phone_number = ref("");
const password = ref("");
const passwords = ref("");
const passwordType = ref(false);
const interval = ref(null);

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
const clearPhoneNumber = () => {
  phone_number.value = "";
}
const clearLoginName = () => {
  login_name.value = "";
}

const sysConfigItem = computed(() => {
  const { getSysConfig } = storeToRefs(useSysConfigStore());
  return getSysConfig.value;
})

const success = computed(() => {
  const { getSuccess } = storeToRefs(useAuthStore());
  return getSuccess.value;
})

const errMessage = computed(() => {
  const { getErrMessage } = storeToRefs(useAuthStore());
  return getErrMessage.value;
})

const register = async () => {
  var regex = /^[a-zA-Z0-9]+$/;
  if (!regex.test(login_name.value)) {
    showToast("请您用英文字母和数字填写登录账号。")
  }
  await signUp(username.value, password.value, inviter_id.value ? inviter_id.value : '', phone_number.value, login_name.value);
  if (!success.value) {
    showToast(errMessage.value);
  }
}

onMounted(async () => {
  await getSysConfigValue();
  interval.value = setInterval(async () => {
    await getSysConfigValue();
  }, 5000);
})

onUnmounted(() => {
  clearInterval(interval.value);
})
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
  // justify-content: space-between;
  margin-top: 13px;
  margin-left: 25px;
  color: #7b7d84;
  font-size: 14px;

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
