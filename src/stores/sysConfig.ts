import { defineStore } from "pinia";
import axios from "axios";
import config from "@/config";
import { BASE_URL } from "@/config";
import { LOTTERY_USER_CONFING_ADD } from "@/config";

export const useSysConfigStore = defineStore({
  id: "sysConfig",
  state: () => ({
    sysConfig: {} as any,
    config: {} as any,
  }),
  getters: {
    getSysConfig: (state) => state.sysConfig,
    getConfig: (state) => state.config,
  },
  actions: {
    setSysConfig(sysConfig: any) {
      this.sysConfig = sysConfig;
    },
    setConfig(config: any) {
      this.config = config;
    },
    async dispatchLotteryUserConfig(token: string) {
      try {
        const config = {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*"
          },
        };
        const response = (await axios.get(`${BASE_URL}${LOTTERY_USER_CONFING_ADD}`, config)).data;
      } catch (e) {
        return e;
      }
    },
    async getSysConfigValue() {
      try {
        const url = config.api.GET_SYSCONFIG;
        const response = (await axios.get(url)).data;
        this.setSysConfig(response.sysConfig as any);
        return response;
      } catch (e) {
        return e;
      }
    },
    async getConfigValue() {
      try {
        const url = config.api.GET_CONFIG;
        const response = (await axios.get(url)).data;
        this.setConfig(response.data as any);
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
