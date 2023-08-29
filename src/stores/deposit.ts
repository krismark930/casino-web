import { defineStore } from "pinia";
import axios from "axios";
import config from "@/config"
import { BASE_URL } from "@/config";
import { GET_CRYPTO } from "@/config";
import { GET_PAYMENT_METHOD } from "@/config";

import type {
  IUser,
} from "@/interface";

export const useDepositStore = defineStore({
  id: "deposit",
  state: () => ({
    banks: [] as Array<any>,
    crypto: null,
    currencyRate: 1,
    walletAddress: '',
    isCrypto: true,
    paymentMethod: {},
    adminBankList: []
  }),
  getters: {
    getBanks: (state) => state.banks,
    getCurrencyRate: (state) => state.currencyRate,
    getWalletAddress: (state) => state.walletAddress,
    getIsCrypto: (state) => state.isCrypto,
    getCrypto: (state) => state.crypto,
    getPaymentMethod: (state) => state.paymentMethod,
    getAdminBank: (state) => state.adminBankList,
  },
  actions: {
    setBanks(banks: any) {
      this.banks = banks;
    },
    setCrypto(crypto: any) {
      this.crypto = crypto;
    },
    setCurrencyRate(currencyRate: IUser) {
      this.currencyRate = currencyRate;
    },
    setWalletAddress(walletAddress: string) {
      this.walletAddress = walletAddress;
    },
    setIsCrypto(isCrypto: boolean) {
      this.isCrypto = isCrypto;
    },
    setPaymentMethod(paymentMethod: any) {
      this.paymentMethod = paymentMethod;
    },
    setAdminBank(adminBankList: any) {
      this.adminBankList = adminBankList;
    },
    async dispatchGetCrypto(data: any, token: string) {
      try {
        const headerConfig = {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*"
          },
        };
        const response = await axios.post(`${BASE_URL}${GET_CRYPTO}`, data, headerConfig);
        if (response.status == 200) {
          this.setCrypto(response.data.data);
        }
      } catch (e) {
        return e;
      }
    },
    async dispatchPaymentMethod(data: any, token: string) {
      try {
        const headerConfig = {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*"
          },
        };
        const response = await axios.post(`${BASE_URL}${GET_PAYMENT_METHOD}`, data, headerConfig);
        if (response.status == 200) {
          this.setPaymentMethod(response.data.data);
        }
      } catch (e) {
        return e;
      }
    },
    async dispatchAdminBank(token: string) {
      try {
        const url = config.api.ADMIN_BANK_LIST;
        const headerConfig = {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*"
          },
        };
        const response = await axios.post(url, {}, headerConfig);
        if (response.status == 200) {
          this.setAdminBank(response.data.data as Array<any>);
        }
      } catch (e) {
        return e;
      }
    },
    async getBankList(data: any, token: string) {
      try {
        const url = config.api.BANK_LIST;
        const headerConfig = {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*"
          },
        };
        const response = await axios.post(url, data, headerConfig);
        if (response.status == 200) {
          this.setBanks(response.data.bankList as Array<any>);
        }
      } catch (e) {
        return e;
      }
    },
    async sumbitDeposit(userId: number, amount: number, name: string, bank: string, bankAccount: string, bankAddress: string, token: string) {
      try {
        console.log(bankAccount)
        const url = config.api.DEPOSIT;
        let data = {
          userId: userId,
          isCrypto: this.isCrypto,
          money: amount,
          name: name,
          bank: bank,
          bankAccount: bankAccount,
          bankAddress: bankAddress,
        };
        const headerConfig = {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*"
          },
        };
        const response = (await axios.post(url, data, headerConfig)).data;
        console.log(response);
        return response;
      } catch (e) {

      }
    }
  },
  persist: {
    enabled: true
  }
});
