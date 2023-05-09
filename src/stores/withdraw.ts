import { defineStore } from "pinia";
import axios from "axios";
import config from "@/config"
import type { 
  IUser,
 } from "@/interface";

export const useWithdrawStore = defineStore({
  id:"withdraw",
  state:() =>({
    historyList : [],
    historyDetail: {} as any
  }),
  getters:{
    getHistoryList: (state) => state.historyList,
    getHistoryDetail: (state) => state.historyDetail,
  },
  actions:{
    setHistoryList(historyList:Array<any>){
      this.historyList = historyList;
    },
    setHistoryDetail(historyDetail: any){
      this.historyDetail = historyDetail;
    },
    async sumbitWithdraw(userId: number, amount: number, bankAddress: string, bankAccount: string) {
      try{
        const url = config.api.QUICK_WITHDRAW;
        let data = {
          userId : userId,
          money: amount,
          Bank_Address : bankAddress,
          Bank_Account: bankAccount,
        };
        const response = (await axios.post(url, data)).data;
        return response;
      }catch(e){
        
      }
    },
    async getTransactionHistory(userName: string, type: number, type2: number){
      try{
        const url = config.api.GET_TRANSACTION_HISTORY;
        const response = await axios.get(url+`?username=${userName}&type=${type}&type2=${type2}`);
        this.setHistoryList(response.data.historyList as any);
        return response.data;
      }catch(e){
      }
    }
  },
  persist:{
    enabled:true
  }
});
