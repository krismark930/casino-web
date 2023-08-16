import axios from "axios";
import { defineStore } from "pinia";
import { BASE_URL } from "@/config";
import { MACAO_KATAN_SAVE } from "@/config";
import { MACAO_KATAN_PARLAY_SAVE } from "@/config";
import { GET_MACAO_KABL } from "@/config";
import { MACAO_GAME_STATUS } from "@/config";
import { MACAO_GAME_VERSION } from "@/config";
import { MACAO_GAME_RESULT } from "@/config";
import { MACAO_KATAN_EVEN_SAVE } from "@/config";
import { MACAO_KATAN_ZODAIC_EVEN_SAVE } from "@/config";
import { MACAO_KATAN_MANTISSA_EVEN_SAVE } from "@/config";
import { MACAO_KATAN_MISS_ALL_SAVE } from "@/config";
import { MACAO_KATAN_COMPATIBLE_SAVE } from "@/config";
import { MACAO_BIRTH_HISTORY } from "@/config";
import { MACAO_MAIN_BET_RESULT } from "@/config";
import { MACAO_SUB_BET_RESULT } from "@/config";

export const macaoKatanStore = defineStore({
    id: "macao_katan",
    state: () => ({
        success: false,
        errMessage: "",
        kablList: [],
        gameStatus: 0,
        gameVersion: 0,
        resultTime: "",
        gameResult: [],
        birthHistoryList: [],
        mainBetResultList: [],
        orderNumber: 0,
    }),
    getters: {
        getSuccess: (state) => state.success,
        getKablList: (state) => state.kablList,
        getGameStatus: (state) => state.gameStatus,
        getGameVersion: (state) => state.gameVersion,
        getOrderNumber: (state) => state.orderNumber,
        getResultTime: (state) => state.resultTime,
        getErrMessage: (state) => state.errMessage,
        getGameResult: (state) => state.gameResult,
        getMacaoBirthHistoryList: (state) => state.birthHistoryList,
        getMacaoMainBetResultList: (state) => state.mainBetResultList
    },
    actions: {
        setSuccess(success: boolean) {
            this.success = success;
        },
        setKablList(kablList: any) {
            this.kablList = kablList
        },
        setBirthHistory(birthHistoryList: any) {
            this.birthHistoryList = birthHistoryList;
        },
        setGameStatus(gameStatus: number) {
            this.gameStatus = gameStatus;
        },
        setGameVersion(gameVersion: any) {
            this.gameVersion = gameVersion;
        },
        setOrderNumber(orderNumber: number) {
            this.orderNumber = orderNumber;
        },
        setGameResult(gameResult: any) {
            this.gameResult = gameResult;
        },
        setResultTime(resultTime: string) {
            this.resultTime = resultTime;
        },
        setErrorMessage(message: string) {
            this.errMessage = message;
        },
        setMainBetResult(mainBetResultList: any) {
            this.mainBetResultList = mainBetResultList;
        },
        async dispatchLotteryBet(data: object, token: any) {
            try {
                this.setSuccess(false);
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Access-Control-Allow-Origin": "*"
                    },
                };
                const response = await axios.post(`${BASE_URL}${MACAO_KATAN_SAVE}`, data, config);
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (err: any) {
                if (err.response.status === 400) {
                    this.setErrorMessage(err.response.data.message);
                }
            }
        },
        async dispatchParlayLotteryBet(data: object, token: any) {
            try {
                this.setSuccess(false);
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Access-Control-Allow-Origin": "*"
                    },
                };
                const response = await axios.post(`${BASE_URL}${MACAO_KATAN_PARLAY_SAVE}`, data, config);
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (err: any) {
                if (err.response.status === 400) {
                    this.setErrorMessage(err.response.data.message);
                }
            }
        },
        async dispatchEvenLotteryBet(data: any, token: any) {
            try {
                this.setSuccess(false);
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Access-Control-Allow-Origin": "*"
                    },
                };
                const response = await axios.post(`${BASE_URL}${MACAO_KATAN_EVEN_SAVE}`, { data: JSON.stringify(data) }, config);
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (err: any) {
                if (err.response.status === 400) {
                    this.setErrorMessage(err.response.data.message);
                }
            }
        },
        async dispatchZodaicEvenLotteryBet(data: any, token: any) {
            try {
                this.setSuccess(false);
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Access-Control-Allow-Origin": "*"
                    },
                };
                const response = await axios.post(`${BASE_URL}${MACAO_KATAN_ZODAIC_EVEN_SAVE}`, { data: JSON.stringify(data) }, config);
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (err: any) {
                if (err.response.status === 400) {
                    this.setErrorMessage(err.response.data.message);
                }
            }
        },
        async dispatchMantissaEvenLotteryBet(data: any, token: any) {
            try {
                this.setSuccess(false);
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Access-Control-Allow-Origin": "*"
                    },
                };
                const response = await axios.post(`${BASE_URL}${MACAO_KATAN_MANTISSA_EVEN_SAVE}`, { data: JSON.stringify(data) }, config);
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (err) {
                if (err.response.status === 400) {
                    this.setErrorMessage(err.response.data.message);
                }
            }
        },
        async dispatchMissAllLotteryBet(data: any, token: any) {
            try {
                this.setSuccess(false);
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Access-Control-Allow-Origin": "*"
                    },
                };
                const response = await axios.post(`${BASE_URL}${MACAO_KATAN_MISS_ALL_SAVE}`, { data: JSON.stringify(data) }, config);
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (err: any) {
                if (err.response.status === 400) {
                    this.setErrorMessage(err.response.data.message);
                }
            }
        },
        async dispatchCompatibleLotteryBet(data: any, token: any) {
            try {
                this.setSuccess(false);
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Access-Control-Allow-Origin": "*"
                    },
                };
                const response = await axios.post(`${BASE_URL}${MACAO_KATAN_COMPATIBLE_SAVE}`, data, config);
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (err: any) {
                if (err.response.status === 400) {
                    this.setErrorMessage(err.response.data.message);
                }
            }
        },
        async dispatchKablData(data: object) {
            try {
                this.setSuccess(false);
                const response = await axios.post(`${BASE_URL}${GET_MACAO_KABL}`, data);
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setKablList(response.data.data);
                }
            } catch (err: any) {
                if (err.response.status === 400) {
                    this.setErrorMessage(err.response.data.message);
                }
            }
        },
        async dispatchGameStatus(data: object) {
            try {
                this.setSuccess(false);
                const response = await axios.post(`${BASE_URL}${MACAO_GAME_STATUS}`, data);
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setGameStatus(response.data.data);
                    // this.setResultTime(response.data.result_time);
                }
            } catch (err: any) {
                if (err.response.status === 400) {
                    this.setErrorMessage(err.response.data.message);
                }
            }
        },
        async dispatchGameVersion(data: object) {
            try {
                this.setSuccess(false);
                const response = await axios.post(`${BASE_URL}${MACAO_GAME_VERSION}`, data);
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setGameVersion(response.data.data);
                }
            } catch (err: any) {
                if (err.response.status === 400) {
                    this.setErrorMessage(err.response.data.message);
                }
            }
        },
        async dispatchGameResult(data: object) {
            try {
                this.setSuccess(false);
                const response = await axios.post(`${BASE_URL}${MACAO_GAME_RESULT}`, data);
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setGameResult(response.data.data);
                    this.setOrderNumber(response.data.order_number);
                }
            } catch (err: any) {
                if (err.response.status === 400) {
                    this.setErrorMessage(err.response.data.message);
                }
            }
        },
        async dispatchMacaoSixMarkBirthHistory(data: object) {
            try {
                this.setSuccess(false);
                const response = await axios.post(`${BASE_URL}${MACAO_BIRTH_HISTORY}`, data);
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setBirthHistory(response.data.data);
                }
            } catch (err: any) {
                if (err.response.status === 400) {
                    this.setErrorMessage(err.response.data.message);
                }
            }
        },
        async dispatchMacaoMainBetResult(token: any) {
            try {
                this.setSuccess(false);
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Access-Control-Allow-Origin": "*"
                    },
                };
                const response = await axios.post(`${BASE_URL}${MACAO_MAIN_BET_RESULT}`, {}, config);
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
        async dispatchMacaoSubBetResult(data: any, token: any) {
            try {
                this.setSuccess(false);
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Access-Control-Allow-Origin": "*"
                    },
                };
                const response = await axios.post(`${BASE_URL}${MACAO_SUB_BET_RESULT}`, data, config);
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
