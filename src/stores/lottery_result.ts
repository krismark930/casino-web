import axios from "axios";
import { defineStore } from "pinia";
import { BASE_URL } from "@/config";
import { GET_B5_RESULT } from "@/config";
import { B5_BIRTH_HISTORY } from "@/config";
import { GET_B3_RESULT } from "@/config";
import { B3_BIRTH_HISTORY } from "@/config";
import { GET_OTHER_RESULT } from "@/config";
import { OTHER_BIRTH_HISTORY } from "@/config";
import { TOTAL_BET_RESULT } from "@/config";
import { ALWAYS_COLOR_SUB_BET_RESULT } from "@/config";

export const lotteryResultStore = defineStore({
    id: "lottery_result",
    state: () => ({
        success: false,
        beforeLotteryResult: null,
        birthHistoryList: [],
        mainBetResultList: [],
        errMessage: ""
    }),
    getters: {
        getSuccess: (state) => state.success,
        getErrMessage: (state) => state.errMessage,
        getBeforeLotteryResult: (state) => state.beforeLotteryResult,
        getMainBetResultList: (state) => state.mainBetResultList,
        getBirthHistoryList: (state) => state.birthHistoryList
    },
    actions: {
        setSuccess(success: boolean) {
            this.success = success;
        },
        setBeforeLotteryResult(beforeLotteryResult: any) {
            this.beforeLotteryResult = beforeLotteryResult;
        },
        setBirthHistoryList(birthHistoryList: any) {
            this.birthHistoryList = birthHistoryList;
        },
        setMainBetResult(mainBetResultList: any) {
            this.mainBetResultList = mainBetResultList;
        },
        setErrorMessage(message: string) {
            this.errMessage = message;
        },
        async dispatchBeforeLotteryResult(data: any) {
            try {
                this.setSuccess(false);
                let response: any;
                switch (data["type"]) {
                    case "b5":
                        response = await axios.post(`${BASE_URL}${GET_B5_RESULT}`, data);
                        break;
                    case "b3":
                        response = await axios.post(`${BASE_URL}${GET_B3_RESULT}`, data);
                        break;
                    case "other":
                        response = await axios.post(`${BASE_URL}${GET_OTHER_RESULT}`, data);
                        break;
                }
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setBeforeLotteryResult(response.data.data);
                }
            } catch (err: any) {
                if (err.response.status === 400) {
                    this.setErrorMessage(err.response.data.message);
                }
            }
        },
        async dispatchBirthHistory(data: any) {
            try {
                this.setSuccess(false);
                let response: any;
                switch (data["type"]) {
                    case "b5":
                        response = await axios.post(`${BASE_URL}${B5_BIRTH_HISTORY}`, data);
                        break;
                    case "b3":
                        response = await axios.post(`${BASE_URL}${B3_BIRTH_HISTORY}`, data);
                        break;
                    case "other":
                        response = await axios.post(`${BASE_URL}${OTHER_BIRTH_HISTORY}`, data);
                        break;
                }
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setBirthHistoryList(response.data.data);
                }
            } catch (err: any) {
                if (err.response.status === 400) {
                    this.setErrorMessage(err.response.data.message);
                }
            }
        },
        async dispatchTotalBetResult(data: any, token: any) {
            try {
                this.setSuccess(false);
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Access-Control-Allow-Origin": "*"
                    },
                };
                const response = await axios.post(`${BASE_URL}${TOTAL_BET_RESULT}`, data, config);
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setMainBetResult(response.data.data);
                }
            } catch (err: any) {
                if (err.response.status === 400) {
                    this.setErrorMessage(err.response.data.message);
                }
            }
        },
        async dispatchSubBetResult(data: any, token: any) {
            try {
                this.setSuccess(false);
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Access-Control-Allow-Origin": "*"
                    },
                };
                const response = await axios.post(`${BASE_URL}${ALWAYS_COLOR_SUB_BET_RESULT}`, data, config);
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setMainBetResult(response.data.data);
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
