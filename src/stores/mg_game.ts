import axios from "axios";
import { defineStore } from "pinia";
import { BASE_URL } from "@/config";
import { GET_MG_URL } from "@/config";
import { GET_MG_ALL } from "@/config";

export const mgGameStore = defineStore({
    id: "mg_game",
    state: () => ({
        success: false,
        redirectMGUrl: "",
        mgGameList: [],
        errMessage: ""
    }),
    getters: {
        getSuccess: (state) => state.success,
        getErrMessage: (state) => state.errMessage,
        getMGGameList: (state) => state.mgGameList,
        getRedirectMGUrl: (state) => state.redirectMGUrl,
    },
    actions: {
        setSuccess(success: boolean) {
            this.success = success;
        },
        setMGGameList(mgGameList: Array<any>) {
            this.mgGameList = mgGameList;
        },
        setRedirectMGUrl(redirectMGUrl: any) {
            this.redirectMGUrl = redirectMGUrl;
        },
        setErrorMessage(message: string) {
            this.errMessage = message;
        },
        async dispatchMGGameAll(data: any) {
            try {
                this.setSuccess(false);
                let response = await axios.post(`${BASE_URL}${GET_MG_ALL}`, data);
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setMGGameList(response.data.data);
                }
            } catch (err: any) {
                if (err.response.status === 400) {
                    this.setErrorMessage(err.response.data.message);
                }
            }
        },
        async dispatchRedirectMGUrl(data: any, token: any) {
            try {
                this.setSuccess(false);
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Access-Control-Allow-Origin": "*"
                    },
                };
                let response = await axios.post(`${BASE_URL}${GET_MG_URL}`, data, config);
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setRedirectMGUrl(response.data.data);
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
