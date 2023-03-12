import { defineStore } from "pinia";
import axios from "axios";
import { BASE_URL, MATCH_SPORT, GET_IN_PLAY_DATA, GET_SPORTS_COUNT_DATA, GET_SCORE_IN_PLAY_DATA } from "@/config";

export const stadiumStore = defineStore({
    id: "stadium",
    state: () => ({
        ftInPlayLists: [] as Array<any>,
        ftScoreInPlayLists: [] as Array<any>,
        sportCount: Object,
        success: false
    }),
    getters: {
        getFTInPlayDatas: (state) => state.ftInPlayLists,
        getFTScoreInPlayLists: (state) => state.ftScoreInPlayLists,
        getSportCount: (state) => state.sportCount
    },
    actions: {
        setFTInPlayDatas(ftDatas: Array<any>) {
            this.ftInPlayLists = ftDatas;
        },
        setFTScoreInPlayDatas(ftScoreInPlayLists: Array<any>) {
            console.log(ftScoreInPlayLists);
            this.ftScoreInPlayLists = ftScoreInPlayLists;
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
        async getFTScoreInPlayDataList(data: object) {
            try {
                const response = await axios.get(`${BASE_URL}${GET_SCORE_IN_PLAY_DATA}`, data);
                var ftScoreInPlayDatas = [] as Array<any>;
                if (response.status === 200) {
                    let lidArray: Array<any> = response.data.data.map(function (item: object) {
                        return item["LID"];
                    });
                    var uniqueLIDArray = [...new Set(lidArray)].filter(item => item != null);
                    uniqueLIDArray.forEach(LID => {
                        let dataByLID = response.data.data.filter(item => item["LID"] == LID);
                        ftScoreInPlayDatas.push(dataByLID);
                    })
                    console.log(ftScoreInPlayDatas);
                    this.setSuccess(true);
                    this.setFTScoreInPlayDatas(ftScoreInPlayDatas);
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
