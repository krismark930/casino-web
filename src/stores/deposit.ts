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
    isCrypto: true,
  }),
  getters:{
    getBanks: (state) => state.banks,
    getCurrencyRate: (state) => state.currencyRate,
    getWalletAddress: (state) => state.walletAddress,
    getIsCrypto: (state) => state.isCrypto
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
    setIsCrypto(isCrypto: boolean){
      this.isCrypto = isCrypto;
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
    async sumbitDeposit(userId: number, bank:any , amount: number, name: string) {
      try{
        console.log(amount)
        const url = config.api.DEPOSIT;
        let data = {
          userId : userId,
          isCrypto: this.isCrypto,
          money: amount,
          name : name,
          bankName: bank.bankname,
          bankAddress: bank.bankaddress,
          bankNo: bank.bankno
        };
        
        const response = (await axios.post(url, data)).data;
        return response;
      }catch(e){
        
      }
    }
  },
  persist:{
    enabled:true
  }
});
