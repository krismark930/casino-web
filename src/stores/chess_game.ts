import axios from "axios";
import { defineStore } from "pinia";
import { BASE_URL } from "@/config";
import { GET_CHESS_ALL } from "@/config";
import { GET_KY_URL } from "@/config";

export const chessGameStore = defineStore({
    id: "chess_game",
    state: () => ({
        success: false,
        chessGameList: [],
        redirectUrl: "",
        errMessage: ""
    }),
    getters: {
        getSuccess: (state) => state.success,
        getErrMessage: (state) => state.errMessage,
        getRedirectUrl: (state) => state.redirectUrl,
        getChessGameList: (state) => state.chessGameList
    },
    actions: {
        setSuccess(success: boolean) {
            this.success = success;
        },
        setChessGameList(chessGameList: any) {
            this.chessGameList = chessGameList;
        },
        setRedirectUrl(redirectUrl: any) {
            this.redirectUrl = redirectUrl;
        },
        setErrorMessage(message: string) {
            this.errMessage = message;
        },
        async dispatchChessGameAll(data: any) {
            try {
                this.setSuccess(false);
                let response = await axios.post(`${BASE_URL}${GET_CHESS_ALL}`, data);
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setChessGameList(response.data.data);
                }
            } catch (err: any) {
                if (err.response.status === 400) {
                    this.setErrorMessage(err.response.data.message);
                }
            }
        },
        async dispatchRedirectUrl(data: any, token: any) {
            try {
                this.setSuccess(false);
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Access-Control-Allow-Origin": "*"
                    },
                };
                let response = await axios.post(`${BASE_URL}${GET_KY_URL}`, data, config);
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setRedirectUrl(response.data.data);
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
