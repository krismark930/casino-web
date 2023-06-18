import axios from "axios";
import { defineStore } from "pinia";
import { BASE_URL } from "@/config";
import { SYSTEM_SMS_ALL } from "@/config";
import { GET_SYSTEM_SMS } from "@/config";
import { DELETE_SYSTEM_SMS } from "@/config";

export const messageStore = defineStore({
    id: "message",
    state: () => ({
        success: false,
        errMessage: "",
        messageList: [],
        messageItem: {},
    }),
    getters: {
        getSuccess: (state) => state.success,
        getErrMessage: (state) => state.errMessage,
        getMessageList: (state) => state.messageList,
        getMessageItem: (state) => state.messageItem,
    },
    actions: {
        setSuccess(success: boolean) {
            this.success = success;
        },
        setErrorMessage(message: string) {
            this.errMessage = message;
        },
        setMessageItem(messageItem: any) {
            this.messageItem = messageItem;
        },
        setMessageList(messageList: Array<any>) {
            this.messageList = messageList;
        },
        async dispatchMessageAll(data: any, token: any) {
            try {
                this.setSuccess(false);
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Access-Control-Allow-Origin": "*"
                    },
                };
                let response = await axios.post(`${BASE_URL}${SYSTEM_SMS_ALL}`, data, config);
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setMessageList(response.data.data);
                }
            } catch (err: any) {
                console.log(err);
                if (err.response.status === 400) {
                    this.setErrorMessage(err.response.data.message);
                }
            }
        },
        async dispatchMessageItemByID(data: any, token: any) {
            try {
                this.setSuccess(false);
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Access-Control-Allow-Origin": "*"
                    },
                };
                let response = await axios.post(`${BASE_URL}${GET_SYSTEM_SMS}`, data, config);
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setMessageItem(response.data.data);
                }
            } catch (err: any) {
                if (err.response.status === 400) {
                    this.setErrorMessage(err.response.data.message);
                }
            }
        },
        async dispatchDeleteMessageItemByID(data: any, token: any) {
            try {
                this.setSuccess(false);
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Access-Control-Allow-Origin": "*"
                    },
                };
                let response = await axios.post(`${BASE_URL}${DELETE_SYSTEM_SMS}`, data, config);
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
