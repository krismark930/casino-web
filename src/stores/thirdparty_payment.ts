import { defineStore } from "pinia";
import axios from "axios";
import { BASE_URL } from "@/config"
import { LY_PAY } from "@/config"
import { LY_PAY_URL } from "@/config"

export const thirdpartyPaymentStore = defineStore({
    id: "thirdparty_payment",
    state: () => ({
        success: false,
        errMessage: "",
        payFormData: {}
    }),
    getters: {
        getSuccess: (state) => state.success,
        getPayFormData: (state) => state.payFormData
    },
    actions: {
        setSuccess(success: boolean) {
            this.success = success;
        },
        setErrMessage(errMessage: string) {
            this.errMessage = errMessage;
        },
        setPayFormData(payFormData: any) {
            this.payFormData = payFormData;
        },
        async dispatchLYPay(data: any) {
            this.setSuccess(false);
            try {
                const response = await axios.post(`${BASE_URL}${LY_PAY}`, data);
                if (response.status === 200) {
                    this.setSuccess(true)
                    this.setPayFormData(response.data.data);
                }
            } catch (e) {
                return e;
            }
        },
        async dispatchSubmitLYPay(data: any) {
            this.setSuccess(false);
            try {
                const response = await axios.post(`${LY_PAY_URL}`, data);
                if (response.status === 200) {
                    this.setSuccess(true)
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
