import { defineStore } from "pinia";
import axios from "axios";
import { BASE_URL } from "@/config"
import { GET_DISCOUNT } from "@/config";

export const discountStore = defineStore({
    id: "discount",
    state: () => ({
        success: false as boolean,
        errMessage: "" as string,
        discountList: [] as Array<any>,
    }),
    getters: {
        getSuccess: (state) => state.success,
        getErrMessage: (state) => state.errMessage,
        getDiscountList: (state) => state.discountList,
    },
    actions: {
        setSuccess(success: boolean) {
            this.success = success;
        },
        setErrMessage(errMessage: string) {
            this.errMessage = errMessage;
        },
        setDiscountList(discountList: Array<any>) {
            this.discountList = discountList;
        },
        async dispatchDiscounts(token: any) {
            this.setSuccess(false);
            try {
                const response = await axios.get(`${BASE_URL}${GET_DISCOUNT}`);
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setDiscountList(response.data.data);
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
