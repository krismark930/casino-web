import { defineStore } from "pinia";
import axios from "axios";
import config from "@/config"
import router from "@/router";
import { showToast } from 'vant';
import type {
  IUser,
} from "@/interface";
import { routerKey } from "vue-router";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    token: '',
    user: {} as any,
  }),
  getters: {
    getToken: (state) => state.token,
    getUser: (state) => state.user,
  },
  actions: {
    setToken(token: string) {
      this.token = token;
    },
    setUser(user: any) {
      this.user = user;
    },
    async signIn(username: string, password: string) { ////login
      try {
        let url = config.api.SIGN_IN;
        let data = {
          UserName: username,
          password: password
        };
        console.log("login", username)
        const response = (await axios.post(url, data)).data;
        console.log("reponese", response)
        if (response) {
          showToast('登录 成功!')
          router.push({ name: 'my' })
        }
        else {
          showToast('用户名和密码不匹配')
        }
        this.setToken(response.data.token as string);
        this.setUser(response.data as any)
        return response;
      } catch (e) {
        return e;
      }
    },
    async signUp(username: string, password: string, inviter_id: string) { // register
      try {
        let url = config.api.SIGN_UP;
        let data = {
          UserName: username,
          password: password,
          inviter_id: inviter_id
        };
        const response = (await axios.post(url, data)).data;
        this.signIn(username, password);
        return response;
      } catch (e) {
        return e;
      }
    },
  },

  persist: {
    enabled: true
  }
});
