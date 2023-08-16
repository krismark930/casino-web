import { defineStore } from "pinia";
import axios from "axios";
import config from "@/config"
import type { 
  IUser,
 } from "@/interface";

export const useTransferStore = defineStore({
  id:"transfer",
  state:() =>({
    Credit_AG: '',
    Credit_OG: '',
    Credit_BBIN: '',
    Credit_MG: '',
    Credit_PT: '',
    Credit_KY: '',
  }),
  getters:{
    getCredit_AG: (state) => state.Credit_AG,
    getCredit_OG: (state) => state.Credit_OG,
    getCredit_BBIN: (state) => state.Credit_BBIN,
    getCredit_MG: (state) => state.Credit_MG,
    getCredit_PT: (state) => state.Credit_PT,
    getCredit_KY: (state) => state.Credit_KY,
  },
  actions:{
    setCredit_AG(Credit_AG:string){
      this.Credit_AG = Credit_AG;
    },
    setCredit_OG(Credit_OG:string){
      this.Credit_OG = Credit_OG;
    },
    setCredit_BBIN(Credit_BBIN:string){
      this.Credit_BBIN = Credit_BBIN;
    },
    setCredit_MG(Credit_MG:string){
      this.Credit_MG = Credit_MG;
    },
    setCredit_PT(Credit_PT:string){
      this.Credit_PT = Credit_PT;
    },
    setCredit_KY(Credit_KY:string){
      this.Credit_KY = Credit_KY;
    },

    async sumbitTransfer(userId:any , amount: number, type: string) {
      try{
        console.log(userId, amount, type)
        const url = config.api.TRANSFER;
        let data = {
          userId: userId,
          money: amount,
          type : type,
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
