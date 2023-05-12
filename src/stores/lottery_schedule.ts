import axios from "axios";
import { defineStore } from "pinia";
import { BASE_URL } from "@/config";
import { GET_B5_SCHEDULE } from "@/config";
import { GET_B3_SCHEDULE } from "@/config";
import { GET_GD11_SCHEDULE } from "@/config";
import { GET_AZXY10_SCHEDULE } from "@/config";
import { GET_CQSF_SCHEDULE } from "@/config";
import { GET_GDSF_SCHEDULE } from "@/config";
import { GET_GXSF_SCHEDULE } from "@/config";
import { GET_TJSF_SCHEDULE } from "@/config";
import { GET_BJPK_SCHEDULE } from "@/config";
import { GET_XYFT_SCHEDULE } from "@/config";
import { GET_LOTTERY_STATUS } from "@/config";

export const lotteryScheduleStore = defineStore({
    id: "lottery_schedule",
    state: () => ({
        success: false,
        scheduleItem: null,
        lotteryStatus: null,
        errMessage: ""
    }),
    getters: {
        getSuccess: (state) => state.success,
        getErrMessage: (state) => state.errMessage,
        getScheduleItem: (state) => state.scheduleItem,
        getLotteryStatus: (state) => state.lotteryStatus,
    },
    actions: {
        setSuccess(success: boolean) {
            this.success = success;
        },
        setScheduleItem(scheduleItem: any) {
            this.scheduleItem = scheduleItem;
        },
        setLotteryStatus(lotteryStatus: any) {
            this.lotteryStatus = lotteryStatus;
        },
        setErrorMessage(message: string) {
            this.errMessage = message;
        },
        async dispatchLotterySchedule(data: any) {
            try {
                this.setSuccess(false);
                let response: any;
                switch (data["type"]) {
                    case "b5":
                        response = await axios.post(`${BASE_URL}${GET_B5_SCHEDULE}`, data);
                        break;
                    case "b3":
                        response = await axios.post(`${BASE_URL}${GET_B3_SCHEDULE}`, data);
                        break;
                    case "other":
                        switch (data["g_type"]) {
                            case "gd11":
                                response = await axios.post(`${BASE_URL}${GET_GD11_SCHEDULE}`, data);
                                break;
                            case "gxsf":
                                response = await axios.post(`${BASE_URL}${GET_GXSF_SCHEDULE}`, data);
                                break;
                            case "azxy10":
                                response = await axios.post(`${BASE_URL}${GET_AZXY10_SCHEDULE}`, data);
                                break;
                            case "cqsf":
                                response = await axios.post(`${BASE_URL}${GET_CQSF_SCHEDULE}`, data);
                                break;
                            case "gdsf":
                                response = await axios.post(`${BASE_URL}${GET_GDSF_SCHEDULE}`, data);
                                break;
                            case "tjsf":
                                response = await axios.post(`${BASE_URL}${GET_TJSF_SCHEDULE}`, data);
                                break;
                            case "bjpk":
                                response = await axios.post(`${BASE_URL}${GET_BJPK_SCHEDULE}`, data);
                                break;
                            case "xyft":
                                response = await axios.post(`${BASE_URL}${GET_XYFT_SCHEDULE}`, data);
                                break;
                        }
                        break;
                }
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setScheduleItem(response.data.data);
                }
            } catch (err: any) {
                if (err.response.status === 400) {
                    this.setErrorMessage(err.response.data.message);
                }
            }
        },
        async dispatchLotteryStatus(data: object) {
            try {
                this.setSuccess(false);
                const response = await axios.post(`${BASE_URL}${GET_LOTTERY_STATUS}`, data);
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setLotteryStatus(response.data.data);
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
