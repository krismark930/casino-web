import { defineStore } from "pinia";
import axios from "axios";
import { BASE_URL } from "@/config"
import { LY_PAY } from "@/config"

export const thirdpartyPaymentStore = defineStore({
    id: "thirdparty_payment",
    state: () => ({
        success: false,
        errMessage: "",
        payFormData: ""
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
                    const parser = new DOMParser();
                    const htmlDocument = parser.parseFromString(response.data.data, 'text/html');
                    const bodyElement = htmlDocument.querySelector('body');
                    if (bodyElement) {
                        // console.log(bodyElement.innerHTML);
                    }
                    this.setPayFormData(response.data.data);
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
