import axios from "axios";
import { defineStore } from "pinia";
import { BASE_URL } from "@/config";
import { GET_OG_URL } from "@/config";

export const ogGameStore = defineStore({
    id: "og_game",
    state: () => ({
        success: false,
        redirectOGUrl: "",
        errMessage: ""
    }),
    getters: {
        getSuccess: (state) => state.success,
        getErrMessage: (state) => state.errMessage,
        getRedirectOGUrl: (state) => state.redirectOGUrl,
    },
    actions: {
        setSuccess(success: boolean) {
            this.success = success;
        },
        setRedirectOGUrl(redirectOGUrl: any) {
            this.redirectOGUrl = redirectOGUrl;
        },
        setErrorMessage(message: string) {
            this.errMessage = message;
        },
        async dispatchRedirectOGUrl(data: any, token: any) {
            try {
                this.setSuccess(false);
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Access-Control-Allow-Origin": "*"
                    },
                };
                let response = await axios.post(`${BASE_URL}${GET_OG_URL}`, data, config);
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setRedirectOGUrl(response.data.data);
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
