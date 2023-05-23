import axios from "axios";
import { defineStore } from "pinia";
import { BASE_URL } from "@/config";
import { SAVE_B5 } from "@/config";
import { SAVE_B3 } from "@/config";
import { SAVE_OTHER } from "@/config";

export const lotterySaveStore = defineStore({
    id: "lottery_save",
    state: () => ({
        success: false,
        errMessage: ""
    }),
    getters: {
        getSuccess: (state) => state.success,
        getErrMessage: (state) => state.errMessage,
    },
    actions: {
        setSuccess(success: boolean) {
            this.success = success;
        },
        setErrorMessage(message: string) {
            this.errMessage = message;
        },
        async dispatchSaveLottery(data: any, token: any) {
            try {
                this.setSuccess(false);
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Access-Control-Allow-Origin": "*"
                    },
                };
                let response: any;
                switch (data["type"]) {
                    case "b5":
                        response = await axios.post(`${BASE_URL}${SAVE_B5}`, data, config);
                        break;
                    case "b3":
                        response = await axios.post(`${BASE_URL}${SAVE_B3}`, data, config);
                        break;
                    case "other":
                        response = await axios.post(`${BASE_URL}${SAVE_OTHER}`, data, config);
                        break;
                }
                if (response.status === 200) {
                    this.setSuccess(true);
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
