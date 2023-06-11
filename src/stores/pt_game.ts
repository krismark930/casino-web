import axios from "axios";
import { defineStore } from "pinia";
import { BASE_URL } from "@/config";
import { GET_PT_URL } from "@/config";
import { GET_PT_ALL } from "@/config";

export const ptGameStore = defineStore({
    id: "pt_game",
    state: () => ({
        success: false,
        redirectPTUrl: "",
        ptGameList: [],
        errMessage: ""
    }),
    getters: {
        getSuccess: (state) => state.success,
        getErrMessage: (state) => state.errMessage,
        getPTGameList: (state) => state.ptGameList,
        getRedirectPTUrl: (state) => state.redirectPTUrl,
    },
    actions: {
        setSuccess(success: boolean) {
            this.success = success;
        },
        setPTGameList(ptGameList: Array<any>) {
            this.ptGameList = ptGameList;
        },
        setRedirectPTUrl(redirectPTUrl: any) {
            this.redirectPTUrl = redirectPTUrl;
        },
        setErrorMessage(message: string) {
            this.errMessage = message;
        },
        async dispatchPTGameAll(data: any) {
            try {
                this.setSuccess(false);
                let response = await axios.post(`${BASE_URL}${GET_PT_ALL}`, data);
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setPTGameList(response.data.data);
                }
            } catch (err: any) {
                if (err.response.status === 400) {
                    this.setErrorMessage(err.response.data.message);
                }
            }
        },
        async dispatchRedirectPTUrl(data: any, token: any) {
            try {
                this.setSuccess(false);
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Access-Control-Allow-Origin": "*"
                    },
                };
                let response = await axios.post(`${BASE_URL}${GET_PT_URL}`, data, config);
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setRedirectPTUrl(response.data.data);
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
