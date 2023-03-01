import { defineStore } from "pinia";
import axios from "axios";
import config from "@/config"
import type { 
  IUser,
 } from "@/interface";

export const useWithdrawStore = defineStore({
  id:"deposit",
  state:() =>({
  }),
  getters:{
  },
  actions:{
    async sumbitWithdraw(userId: number, amount: number, bankAddress: string, bankAccount: string) {
      try{
        const url = config.api.QUICK_WITHDRAW;
        let data = {
          userId : userId,
          Money: amount,
          Bank_Address : bankAddress,
          Bank_Account: bankAccount,
        };
        console.log(data)
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
