import { defineStore } from "pinia";
import axios from "axios";
import config from "@/config"
import router from "@/router";
import type { 
  IUser,
 } from "@/interface";

export const useBankAccountStore = defineStore({
  id:"bankAccount",
  state:() =>({
    bankAdd: {},
    cryptoAccounts: [],
    bankAccounts: [],
    editCrypto: {},
    editBank: {}
  }),
  getters:{
    getBankAccounts: (state) => state.bankAccounts,
    getCryptoAccounts: (state) => state.cryptoAccounts,
    getEditBank: (state) => state.editBank,
    getEditCrypto: (state) => state.editCrypto,
    getBankAdd : (state) => state.bankAdd
  },
  actions:{
    setCryptoAccounts(cryptoAccounts:Array<any>){
        this.cryptoAccounts = cryptoAccounts;
    },
    setBankAccounts(bankAccounts:Array<any>){
      this.bankAccounts = bankAccounts;
    },
    setEditCrypto(editCrypto:any){      
      this.editCrypto = editCrypto;
    },
    setEditBank(editBank:any){
      this.editBank = editBank;
    },
    setBankAdd(bankAdd: any){
      this.bankAdd = bankAdd;
    },
    async getBankList(userId:number){
        try{
            const url = config.api.GET_BANK_ACCOUNT_LIST_BY_USER_ID;
            const response = (await axios.get(url+`?userId=${userId}`)).data;
            this.setBankAccounts(response.bankList);
            return response;
        }catch(e){

        }
    },
    async getCryptoList(userId:number){
      try{
          const url = config.api.GET_CRYPTO_ACCOUNT_LIST_BY_USER_ID;
          const response = (await axios.get(url+`?userId=${userId}`)).data;
          this.setCryptoAccounts(response.bankList);
          return response;
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
            this.setCryptoAccounts(response.bankList);
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
            this.setCryptoAccounts(response.bankList);
        }
        console.log(response.bankList)
        return response;
      }catch(e){
      }
    },
    async addBankAccount(userId:number) {
      try{
        const url = config.api.ADD_BANK_ACCOUNT;
        let data = {
          userId : userId,
          bank_card_owner : this.bankAdd.bankCardOwner,
          bank_card_type : this.bankAdd.bankCardType,
          bank_type : this.bankAdd.bankType,
          bank_account: this.bankAdd.bankAccount,
          bank_address : this.bankAdd.bankAddress,
        };
        const response = (await axios.post(url, data)).data;
        if(response.success){
            this.setBankAccounts(response.bankList);
        }
        this.setBankAdd({});
        return response;
      }catch(e){
      }
    },
    async editBankAccount(userId: number , bank_id: string,  bank_card_owner: string , bank_type: string, bankAccount: string) {
      try{
        const url = config.api.Edit_BANK_ACCOUNT;
        let data = {
          userId : userId,
          bank_id : bank_id,
          bank_card_owner : bank_card_owner,
          bank_type : bank_type,
          bank_account: bankAccount,
        };
        const response = (await axios.post(url, data)).data;
        if(response.success){
            this.setBankAccounts(response.bankList);
        }
        console.log(response.bankList)
        return response;
      }catch(e){
      }
    },
    async deleteBank(id:number,userId:number){
      try{
        const url = config.api.DELETE_BANK_ACCOUNT;
        const response = (await axios.delete(url+`?bank_id=${id}&user_id=${userId}`)).data;
        if(response.success){
            this.setBankAccounts(response.bankList);
            this.setEditBank({});
            router.go(-1);
        }
        console.log(response.bankList)
        return response;
      }catch(e){
      }
    },
    async deleteCrypto(id:number,userId:number){
      try{
        const url = config.api.DELETE_CRYPTO_ACCOUNT;
        const response = (await axios.delete(url+`?crypto_id=${id}&user_id=${userId}`)).data;
        if(response.success){
            this.setBankAccounts(response.bankList);
            this.setEditCrypto({});
            router.go(-1);
        }
        console.log(response.bankList)
        return response;
      }catch(e){
      }
    }
  },
  persist:{
    enabled:true
  }
});
