import axios from "axios";
import { defineStore } from "pinia";
import { BASE_URL } from "@/config";
import { LOTTERY_USER_CONFIG } from "@/config";

export const lotteryConfigStore = defineStore({
    id: "lottery_config",
    state: () => ({
        success: false,
        errMessage: "",
        lotteryUserConfigItem: {}
    }),
    getters: {
        getSuccess: (state) => state.success,
        getErrMessage: (state) => state.errMessage,
        getLotteryUserConfigItem: (state) => state.lotteryUserConfigItem,
    },
    actions: {
        setSuccess(success: boolean) {
            this.success = success;
        },
        setErrorMessage(message: string) {
            this.errMessage = message;
        },
        setLotteryUserConfigItem(lotteryUserConfigItem: any) {
            this.lotteryUserConfigItem = lotteryUserConfigItem;
        },
        async dispatchLotteryUserConfig(data: any, token: any) {
            try {
                this.setSuccess(false);
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Access-Control-Allow-Origin": "*"
                    },
                };
                const response = await axios.post(`${BASE_URL}${LOTTERY_USER_CONFIG}`, data, config);
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setLotteryUserConfigItem(response.data.data);
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
