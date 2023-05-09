import axios from "axios";
import { defineStore } from "pinia";
import { BASE_URL } from "@/config";
import { SINGLE_FT_BETTING_INPLAY } from "@/config";
import { SINGLE_FT_BETTING_TODAY } from "@/config";
import { SINGLE_FT_BETTING_CHAMPION } from "@/config";
import { SINGLE_FT_BETTING_PARLAY } from "@/config";
import { MULTI_BETTING_PARLAY } from "@/config";
import { FT_BET_HISTORY } from "@/config";
import { FT_BET_SLIP } from "@/config";
import { SINGLE_BK_BETTING_INPLAY } from "@/config";
import { SINGLE_BK_BETTING_TODAY } from "@/config";
import { SINGLE_BK_BETTING_CHAMPION } from "@/config";
import { SINGLE_BK_BETTING_PARLAY } from "@/config";
import { BK_BET_HISTORY } from "@/config";
import { BK_BET_SLIP } from "@/config";
import { ADD_TEMP } from "@/config";

export const bettingStore = defineStore({
    id: "betting",
    state: () => ({
        success: false,
        betSlipList: [],
        favoriteList: [],
        historyList: [],
        betHistoryList: [],
        favoriteBKList: [],
        historyBKList: [],
        betHistoryBKList: [],
    }),
    getters: {
        getSuccess: (state) => state.success,
        getBetSlipList: (state) => state.betSlipList,
        getFavoriteList: (state) => state.favoriteList,
        getHistoryList: (state) => state.historyList,
        getBetHistoryList: (state) => state.betHistoryList,
        getFavoriteBKList: (state) => state.favoriteBKList,
        getHistoryBKList: (state) => state.historyBKList,
        getBetHistoryBKList: (state) => state.betHistoryBKList
    },
    actions: {
        setSuccess(success: boolean) {
            this.success = success;
        },
        setFavoriteList(favoriteItem: any) {
            this.favoriteList.push(favoriteItem);
        },
        removeFavoriteList(gid: number) {
            console.log(gid);
            this.favoriteList = this.favoriteList.filter(item => item.gid != gid)
            console.log(this.favoriteList);
        },
        setFavoriteBKList(favoriteBKItem: any) {
            this.favoriteBKList.push(favoriteBKItem);
        },
        removeFavoriteBKList(gid: number) {
            console.log(gid);
            this.favoriteBKList = this.favoriteBKList.filter(item => item.gid != gid)
            console.log(this.favoriteBKList);
        },
        setHistoryBKList(historyBKList: Array<any>) {
            this.historyBKList = historyBKList;
        },
        setBetHistoryBKList(betHistoryBKList: Array<any>) {
            this.betHistoryBKList = betHistoryBKList;
        },
        deleteAllBetSlip() {
            this.betSlipList = [];
        },
        deleteBetSlip(m_id) {
            this.betSlipList = this.betSlipList.filter(item => item["m_id"] !== m_id);
        },
        settingGold(gold: number) {
            this.betSlipList.map(item => {
                item['gold'] = gold;
            })
        },
        setBetSlip(betSlip: object) {
            if (this.betSlipList.length > 0) {
                let sameFlag = false;
                this.betSlipList.map(item => {
                    if (item["m_id"] === betSlip["m_id"]) {
                        item["line_type"] = betSlip["line_type"];
                        item["select_team"] = betSlip["select_team"];
                        item["title"] = betSlip["title"];
                        item["type"] = betSlip["type"];
                        item["order_rate"] = betSlip["order_rate"];
                        sameFlag = true;
                    }
                });
                if (!sameFlag) {
                    this.betSlipList.push(betSlip);
                }
            } else {
                this.betSlipList.push(betSlip);
            }
        },
        setHistoryList(historyList: Array<any>) {
            this.historyList = historyList;
        },
        setBetHistoryList(betHistoryList: Array<any>) {
            this.betHistoryList = betHistoryList;
        },
        async dispatchBettingInplay(data: object, token: any) {
            try {
                this.setSuccess(false);
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Access-Control-Allow-Origin": "*"
                    },
                };
                const response = await axios.post(`${BASE_URL}${SINGLE_FT_BETTING_INPLAY}`, data, config);
                if (response.status === 200) {
                    this.setSuccess(true);
                    console.log("ok");
                }
            } catch (e) {
                return e;
            }
        },
        async dispatchBettingToday(data: object, token: any) {
            try {
                this.setSuccess(false);
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Access-Control-Allow-Origin": "*"
                    },
                };
                const response = await axios.post(`${BASE_URL}${SINGLE_FT_BETTING_TODAY}`, data, config);
                if (response.status === 200) {
                    this.setSuccess(true);
                    console.log("ok");
                }
            } catch (e) {
                return e;
            }
        },
        async dispatchBettingChampion(data: object, token: any) {
            try {
                this.setSuccess(false);
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Access-Control-Allow-Origin": "*"
                    },
                };
                const response = await axios.post(`${BASE_URL}${SINGLE_FT_BETTING_CHAMPION}`, data, config);
                if (response.status === 200) {
                    this.setSuccess(true);
                    console.log("ok");
                }
            } catch (e) {
                return e;
            }
        },
        async dispatchBettingParlay(data: object, token: any) {
            try {
                this.setSuccess(false);
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Access-Control-Allow-Origin": "*"
                    },
                };
                const response = await axios.post(`${BASE_URL}${SINGLE_FT_BETTING_PARLAY}`, data, config);
                if (response.status === 200) {
                    this.setSuccess(true);
                    console.log("ok");
                }
            } catch (e) {
                return e;
            }
        },
        async dispatchBettingTemp(data: object, token: any) {
            try {
                this.setSuccess(false);
                const axiosConfig = {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                };
                const response = await axios.post(`${BASE_URL}${ADD_TEMP}`, data, axiosConfig);
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                return e;
            }
        },
        async dispatchMultiBetSlip(betSlipList: any, token: any) {
            console.log(betSlipList);
            try {
                this.setSuccess(false);
                await Promise.all(betSlipList.map(async item => {
                    if (item["gold"] !== "" && item["gold"] !== 0 && item["gold"] !== null) {
                        console.log(item);
                        let data = {
                            id: item.id,
                            gold: Number(item.gold),
                            m_id: item.m_id,
                            type: item.type,
                            line_type: item.line_type,
                            odd_f_type: item.odd_f_type,
                            active: item.active,
                            order_rate: item.order_rate,
                            r_type: item.r_type
                        }
                        if (item["g_type"] === "FT") {
                            switch (item["showType"]) {
                                case "Inplay":
                                    await this.dispatchBettingInplay(data, this.token);
                                    break;
                                case "Today":
                                    await this.dispatchBettingToday(data, this.token);
                                    break;
                                case "Early":
                                    await this.dispatchBettingToday(data, this.token);
                                    break;
                                case "Champion":
                                    await this.dispatchBettingChampion(data, this.token);
                                    break;
                                case "Parlay":
                                    await this.dispatchBettingParlay(data, this.token);
                                    break;
                            }
                        } else {
                            switch (item["showType"]) {
                                case "Inplay":
                                    await this.dispatchBKBettingInplay(data, this.token);
                                    break;
                                case "Today":
                                    await this.dispatchBKBettingToday(data, this.token);
                                    break;
                                case "Early":
                                    await this.dispatchBKBettingToday(data, this.token);
                                    break;
                                case "Champion":
                                    await this.dispatchBKBettingChampion(data, this.token);
                                    break;
                                case "Parlay":
                                    await this.dispatchBKBettingParlay(data, this.token);
                                    break;
                            }
                        }
                        this.setSuccess(true);
                    }
                }));
            } catch (e) {
                return e;
            }
        },
        async dispatchBetSlipParlay(data: object, token: any) {
            try {
                this.setSuccess(false);
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Access-Control-Allow-Origin": "*"
                    },
                };
                const response = await axios.post(`${BASE_URL}${MULTI_BETTING_PARLAY}`, data, config);
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                return e;
            }
        },
        async dispatchBetHistory(dateRange: object, token: any) {
            try {
                this.setSuccess(false);
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Access-Control-Allow-Origin": "*"
                    },
                };
                const response = await axios.post(`${BASE_URL}${FT_BET_HISTORY}`, dateRange, config);
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setHistoryList(response.data.data);
                }
            } catch (e) {
                return e;
            }
        },
        async dispatchBetSlip(userName: object, token: any) {
            try {
                this.setSuccess(false);
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Access-Control-Allow-Origin": "*"
                    },
                };
                const response = await axios.post(`${BASE_URL}${FT_BET_SLIP}`, userName, config);
                if (response.status === 200) {
                    this.setSuccess(true);
                    let betSlipHistoryList = [];
                    response.data.data.map(item => {
                        let winner = "";
                        let w_type = item.ShowType.split(",")
                        switch (w_type) {
                            case 'H':
                                winner = item.sport.MB_Team
                                break;
                            case 'C':
                                winner = item.sport.TG_Team
                                break;
                            default:
                                winner = "和局"
                                break;
                        }
                        betSlipHistoryList.push(
                            {
                                title: "足球",
                                type: '', // "Inplay", "Today", "Early", "Champion", "Parlay"
                                text: item.sport.MB_Team + " VS " + item.sport.TG_Team,
                                score: item.sport.GetScore,
                                typeName: item.BetType,
                                winner: winner,
                                Odds: item.M_Rate,
                                money: item.BetScore,
                                winMoney: item.Gwin,
                                number: item.OrderID,
                                time: item.BetTime.split(" ")[1],
                                place: item.sport.M_League,
                            }
                        )
                    })
                    this.setBetHistoryList(betSlipHistoryList);
                }
            } catch (e) {
                return e;
            }
        },

        // ===================== BK =============================== //
        async dispatchBKBettingInplay(data: object, token: any) {
            try {
                this.setSuccess(false);
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Access-Control-Allow-Origin": "*"
                    },
                };
                const response = await axios.post(`${BASE_URL}${SINGLE_BK_BETTING_INPLAY}`, data, config);
                if (response.status === 200) {
                    this.setSuccess(true);
                    console.log("ok");
                }
            } catch (e) {
                return e;
            }
        },
        async dispatchBKBettingToday(data: object, token: any) {
            try {
                this.setSuccess(false);
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Access-Control-Allow-Origin": "*"
                    },
                };
                const response = await axios.post(`${BASE_URL}${SINGLE_BK_BETTING_TODAY}`, data, config);
                if (response.status === 200) {
                    this.setSuccess(true);
                    console.log("ok");
                }
            } catch (e) {
                return e;
            }
        },
        async dispatchBKBettingChampion(data: object, token: any) {
            try {
                this.setSuccess(false);
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Access-Control-Allow-Origin": "*"
                    },
                };
                const response = await axios.post(`${BASE_URL}${SINGLE_BK_BETTING_CHAMPION}`, data, config);
                if (response.status === 200) {
                    this.setSuccess(true);
                    console.log("ok");
                }
            } catch (e) {
                return e;
            }
        },
        async dispatchBKBettingParlay(data: object, token: any) {
            try {
                this.setSuccess(false);
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Access-Control-Allow-Origin": "*"
                    },
                };
                const response = await axios.post(`${BASE_URL}${SINGLE_BK_BETTING_PARLAY}`, data, config);
                if (response.status === 200) {
                    this.setSuccess(true);
                    console.log("ok");
                }
            } catch (e) {
                return e;
            }
        },
        async dispatchBKBetHistory(dateRange: object, token: any) {
            try {
                this.setSuccess(false);
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Access-Control-Allow-Origin": "*"
                    },
                };
                const response = await axios.post(`${BASE_URL}${BK_BET_HISTORY}`, dateRange, config);
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setHistoryBKList(response.data.data);
                }
            } catch (e) {
                return e;
            }
        },
        async dispatchBKBetSlip(userName: object, token: any) {
            try {
                this.setSuccess(false);
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Access-Control-Allow-Origin": "*"
                    },
                };
                const response = await axios.post(`${BASE_URL}${BK_BET_SLIP}`, userName, config);
                if (response.status === 200) {
                    this.setSuccess(true);
                    let betSlipHistoryBKList: Array<any> = [];
                    response.data.data.map(item => {
                        let winner = "";
                        let w_type = item.ShowType.split(",")
                        switch (w_type) {
                            case 'H':
                                winner = item.sport.MB_Team
                                break;
                            case 'C':
                                winner = item.sport.TG_Team
                                break;
                        }
                        betSlipHistoryBKList.push(
                            {
                                title: "足球",
                                type: '', // "Inplay", "Today", "Early", "Champion", "Parlay"
                                text: item.sport.MB_Team + " VS " + item.sport.TG_Team,
                                score: item.sport.GetScore,
                                typeName: item.BetType,
                                winner: winner,
                                Odds: item.M_Rate,
                                money: item.BetScore,
                                winMoney: item.Gwin,
                                number: item.OrderID,
                                time: item.BetTime.split(" ")[1],
                                place: item.sport.M_League,
                            }
                        )
                    })
                    this.setBetHistoryBKList(betSlipHistoryBKList);
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
