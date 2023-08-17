import axios from "axios";
import { defineStore } from "pinia";
import { BASE_URL } from "@/config";
import { GET_BBIN_URL } from "@/config";
import { GET_BBIN_ALL } from "@/config";

export const bbinGameStore = defineStore({
    id: "bbin_game",
    state: () => ({
        success: false,
        redirectBBINUrl: "",
        bbinGameList: [],
        errMessage: ""
    }),
    getters: {
        getSuccess: (state) => state.success,
        getErrMessage: (state) => state.errMessage,
        getRedirectBBINUrl: (state) => state.redirectBBINUrl,
        getBBINGameList: (state) => state.bbinGameList
    },
    actions: {
        setSuccess(success: boolean) {
            this.success = success;
        },
        setBBINGameList(bbinGameList: Array<any>) {
            this.bbinGameList = bbinGameList;
        },
        setRedirectBBINUrl(redirectBBINUrl: any) {
            this.redirectBBINUrl = redirectBBINUrl;
        },
        setErrorMessage(message: string) {
            this.errMessage = message;
        },
        async dispatchBBINGameAll(data: any) {
            try {
                this.setSuccess(false);
                let response = await axios.post(`${BASE_URL}${GET_BBIN_ALL}`, data);
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setBBINGameList(response.data.data);
                }
            } catch (err: any) {
                if (err.response.status === 400) {
                    this.setErrorMessage(err.response.data.message);
                }
            }
        },
        async dispatchRedirectBBINUrl(data: any, token: any) {
            try {
                this.setSuccess(false);
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Access-Control-Allow-Origin": "*"
                    },
                };
                let response = await axios.post(`${BASE_URL}${GET_BBIN_URL}`, data, config);
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setRedirectBBINUrl(response.data.data);
                }
            } catch (err: any) {
                if (err.response.status === 400) {
                    this.setErrorMessage(err.response.data.message);
                }
            }
        },
    },
    persist: {
        enabled: true
    }
});
