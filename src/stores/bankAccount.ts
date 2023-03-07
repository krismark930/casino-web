import { defineStore } from "pinia";
import axios from "axios";
import config from "@/config"
import type { 
  IUser,
 } from "@/interface";

export const useBankAccountStore = defineStore({
  id:"deposit",
  state:() =>({
    banks: [],
    editBank: {}
  }),
  getters:{
    getBanks: (state) => state.banks,
    getEditBank: (state) => state.editBank
  },
  actions:{
    setBanks(banks:Array<any>){
        this.banks = banks;
    },
    setEditBank(editBank:any){
      this.editBank = editBank;
    },
    async getBankList(userId:number){
        try{
            const url = config.api.GET_BANK_LIST_BY_USER_ID;
            const response = (await axios.get(url+`?userId=${userId}`)).data;
            this.setBanks(response.bankList);
        }catch(e){

        }
    },
    async addCryptoAccount(userId: number ,bank: string, bankAccount: string, bankAddress: string) {
      try{
        const url = config.api.ADD_CRYPTO_ACCOUNT;
        let data = {
          userId : userId,
          bank : bank,
          bank_account: bankAccount,
          bank_address : bankAddress,
          bank_type: 1,
        };
        
        const response = (await axios.post(url, data)).data;
        if(response.success){
            this.setBanks(response.bankList);
        }
        console.log(response.bankList)
        return response;
      }catch(e){
      }
    },
    async editCryptoAccount(userId: number , bankId: number , bank: string, bankAccount: string, bankAddress: string) {
      try{
        const url = config.api.Edit_CRYPTO_ACCOUNT;
        let data = {
          userId : userId,
          bank_id : bankId,
          bank : bank,
          bank_account: bankAccount,
          bank_address : bankAddress,
          bank_type: 1,
        };
        console.log(data)
        const response = (await axios.post(url, data)).data;
        if(response.success){
            this.setBanks(response.bankList);
        }
        console.log(response.bankList)
        return response;
      }catch(e){
      }
    },
  },
  persist:{
    enabled:true
  }
});
