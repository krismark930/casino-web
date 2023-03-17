import axios from "axios";
import { defineStore } from "pinia";
import { BASE_URL } from "@/config";
import { SINGLE_FT_BETTING } from "@/config";
import config from "@/config";

export const bettingStore = defineStore({
    id: "betting",
    state: () => ({
        success: false
    }),
    getters: {
        getSuccess: (state) => state.success,
    },
    actions: {
        setSuccess(success: boolean) {
            this.success = success;
        },
        async dispatchBettingOrder(data: object, token: any) {
            try {
                this.setSuccess(false);
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Access-Control-Allow-Origin": "*"
                    },
                };
                // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
                const response = await axios.post(`${BASE_URL}${SINGLE_FT_BETTING}`, data, config);
                if (response.status === 200) {
                    this.setSuccess(true);
                    console.log("ok");
                }
            } catch (e) {
                return e;
            }
        },

        async dispatchBettingTemp(data: object, token: any) {
            try {
                this.setSuccess(false);
                const axiosConfig = {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                };
                const response = await axios.post(config.api.ADD_TEMP, data, axiosConfig);
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                return e;
            }
        },
    },
    persist: {
        enabled: true
    }
});
