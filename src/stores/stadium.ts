import { defineStore } from "pinia";
import axios from "axios";
import { BASE_URL, MATCH_SPORT, GET_IN_PLAY_DATA, GET_SPORTS_COUNT_DATA } from "@/config";

export const stadiumStore = defineStore({
    id: "stadium",
    state: () => ({
        ftInPlayDatas: [] as Array<any>,
        sportCount: Object,
        success: false
    }),
    getters: {
        getFTInPlayDatas: (state) => state.ftInPlayDatas,
        getSportCount: (state) => state.sportCount
    },
    actions: {
        setFTInPlayDatas(ftDatas: Array<any>) {
            this.ftInPlayDatas = ftDatas;
        },
        setSuccess(success: boolean) {
            this.success = success;
        },
        setSportCount(sportCount: object) {
            this.sportCount = sportCount;
        },
        async getFTInPlayDataList(data: object) {
            try {
                const response = await axios.get(`${BASE_URL}${GET_IN_PLAY_DATA}`, data);
                var ftInPlayDatas = [] as Array<any>;
                if (response.status === 200) {
                    let lidArray: Array<any> = response.data.data.map(function (item: object) {
                        return item["LID"];
                    });
                    var uniqueLIDArray = [...new Set(lidArray)].filter(item => item != null);
                    uniqueLIDArray.forEach(LID => {
                        let dataByLID = response.data.data.filter(item => item["LID"] == LID);
                        ftInPlayDatas.push(dataByLID);
                    })
                    this.setSuccess(true);
                    this.setFTInPlayDatas(ftInPlayDatas);
                }
            } catch (e) {
                return e;
            }
        },
        async getSportsCountData() {
            try {
                const response = await axios.get(`${BASE_URL}${GET_SPORTS_COUNT_DATA}`);
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setSportCount(response.data.data);
                }
            } catch (e) {
                return e
            }
        }
    },
    persist: {
        enabled: true
    }
});
