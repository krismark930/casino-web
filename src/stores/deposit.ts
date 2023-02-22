import { defineStore } from "pinia";
import axios from "axios";
import config from "@/config"
import type { 
  IUser,
 } from "@/interface";

export const useDepositStore = defineStore({
  id:"deposit",
  state:() =>({
    banks: [] as Array<any>,
    currencyRate: 1,
    walletAddress: '',
  }),
  getters:{
    getBanks: (state) => state.banks,
    getCurrencyRate: (state) => state.currencyRate,
    getWalletAddress: (state) => state.walletAddress,
  },
  actions:{
    setBanks(banks:string){
      this.banks = banks;
    },
    setCurrencyRate(currencyRate:IUser){
      this.currencyRate = currencyRate;
    },
    setWalletAddress(walletAddress: string){
      this.walletAddress = walletAddress;
    },
    async getBankList() {
      try {
        const url = config.api.BANK_LIST;
        const response = (await axios.get(url)).data;
        this.setBanks(response.bankList as Array<any>);
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
