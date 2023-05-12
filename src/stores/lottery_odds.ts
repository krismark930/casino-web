import axios from "axios";
import { defineStore } from "pinia";
import { BASE_URL } from "@/config";
import { GET_B5_ODDS } from "@/config";
import { GET_B3_ODDS } from "@/config";
import { GET_OTHER_ODDS } from "@/config";

export const lotteryOddsStore = defineStore({
    id: "lottery_odds",
    state: () => ({
        success: false,
        lotteryOddsList: [],
        errMessage: ""
    }),
    getters: {
        getSuccess: (state) => state.success,
        getErrMessage: (state) => state.errMessage,
        getLotteryOddsList: (state) => state.lotteryOddsList
    },
    actions: {
        setSuccess(success: boolean) {
            this.success = success;
        },
        setLotteryOddsList(lotteryOddsList: any) {
            this.lotteryOddsList = lotteryOddsList;
        },
        setErrorMessage(message: string) {
            this.errMessage = message;
        },
        async dispatchLotteryOdds(data: any) {
            try {
                this.setSuccess(false);
                let response: any;
                switch (data["type"]) {
                    case "b5":
                        response = await axios.post(`${BASE_URL}${GET_B5_ODDS}`, data);
                        break;
                    case "b3":
                        response = await axios.post(`${BASE_URL}${GET_B3_ODDS}`, data);
                        break;
                    case "other":
                        response = await axios.post(`${BASE_URL}${GET_OTHER_ODDS}`, data);
                        break;
                }
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setLotteryOddsList(response.data.data);
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
