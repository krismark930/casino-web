import { defineStore } from "pinia";
import axios from "axios";
import { NOT_BET_SCORE } from "@/config"
import { BASE_URL } from "@/config"

export const subHomeStore = defineStore({
    id: "subHome",
    state: () => ({
        notBetScore: 0,
    }),
    getters: {
        getNotBetScore: (state) => state.notBetScore,
    },
    actions: {
        setNotBetScore(notBetScore: number) {
            this.notBetScore = notBetScore;
        },
        async dispatchNotBetScore(token: any) {
            try {
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Access-Control-Allow-Origin": "*"
                    },
                };
                const response = await axios.post(`${BASE_URL}${NOT_BET_SCORE}`, {}, config);
                if (response.status === 200) {
                    this.setNotBetScore(response.data.data);
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
