import { defineStore } from "pinia";
import axios from "axios";
import config from "@/config"

export const useSysConfigStore = defineStore({
  id:"sysConfig",
  state:() =>({
    sysConfig: {} as any,
  }),
  getters:{
    getSysConfig: (state) => state.sysConfig,
  },
  actions:{
    setSysConfig(sysConfig: any){
      this.sysConfig = sysConfig;
    },
    async getSysConfigValue() {
      try {
        const url = config.api.GET_SYSCONFIG;
        const response = (await axios.get(url)).data;
        console.log(response)
        this.setSysConfig(response.sysConfig as any);
        return response;
      } catch (e) {
        return e;
      }
    },
  },
  persist:{
    enabled:true
  }
});
