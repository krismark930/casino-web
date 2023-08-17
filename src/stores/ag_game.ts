import axios from "axios";
import { defineStore } from "pinia";
import { BASE_URL } from "@/config";
import { GET_AG_URL } from "@/config";
import { GET_AG_ALL } from "@/config";

export const agGameStore = defineStore({
    id: "ag_game",
    state: () => ({
        success: false,
        redirectAGUrl: "",
        agGameList: [],
        errMessage: ""
    }),
    getters: {
        getSuccess: (state) => state.success,
        getErrMessage: (state) => state.errMessage,
        getRedirectAGUrl: (state) => state.redirectAGUrl,
        getAGGameList: (state) => state.agGameList
    },
    actions: {
        setSuccess(success: boolean) {
            this.success = success;
        },
        setAGGameList(agGameList: any) {
            this.agGameList = agGameList;
        },
        setRedirectAGUrl(redirectAGUrl: any) {
            this.redirectAGUrl = redirectAGUrl;
        },
        setErrorMessage(message: string) {
            this.errMessage = message;
        },
        async dispatchAGGameAll(data: any) {
            try {
                this.setSuccess(false);
                let response = await axios.post(`${BASE_URL}${GET_AG_ALL}`, data);
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setAGGameList(response.data.data);
                }
            } catch (err: any) {
                if (err.response.status === 400) {
                    this.setErrorMessage(err.response.data.message);
                }
            }
        },
        async dispatchRedirectAGUrl(data: any, token: any) {
            try {
                this.setSuccess(false);
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Access-Control-Allow-Origin": "*"
                    },
                };
                let response = await axios.post(`${BASE_URL}${GET_AG_URL}`, data, config);
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setRedirectAGUrl(response.data.data);
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
