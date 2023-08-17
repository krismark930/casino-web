import axios from "axios";
import { defineStore } from "pinia";
import { BASE_URL } from "@/config";
import { GET_FT_RESULT } from "@/config";
import { GET_BK_RESULT } from "@/config";
import { formatDate } from '@/utils/util'

export const gameResultStore = defineStore({
    id: "gameResult",
    state: () => ({
        success: false,
        collapseList: [],
    }),
    getters: {
        getSuccess: (state) => state.success,
        getCollapseList: (state) => state.collapseList,
    },
    actions: {
        setSuccess(success: boolean) {
            this.success = success;
        },
        setCollapseList(collapseList: any) {
            this.collapseList = collapseList;
        },
        async dispatchGameResult(gametype: number, selectedDate: any, active: number) {
            try {
                let data;
                if (active == 0) {
                    data = { date: selectedDate, active: active }
                } else {
                    data = { date: formatDate(selectedDate), active: active }
                }
                this.setSuccess(false);
                switch (gametype) {
                    case 0:
                        console.log(active);
                        const response = await axios.post(`${BASE_URL}${GET_FT_RESULT}`, data);
                        if (response.status === 200) {
                            this.setSuccess(true);
                            const tmpCollapseList = [...response.data.data];
                            const duplicatedLeagueNames = tmpCollapseList.map(item => item.M_League);
                            const leagueNames = duplicatedLeagueNames.filter((item, index) => duplicatedLeagueNames.indexOf(item) === index);
                            let resultList = [] as Array<any>;
                            resultList = leagueNames.map(item => {
                                return {
                                    name: item,
                                    gameResultList: []
                                }
                            })
                            tmpCollapseList.map(item => {
                                const index = leagueNames.indexOf(item.M_League);
                                if (active === 0) {
                                    resultList[index].gameResultList.push(
                                        {
                                            titletext: [item.M_Start, '上半场', '全场'],
                                            scoreList: [{
                                                name: item.MB_Team,
                                                nums: [item.MB_Inball_HR, item.MB_Ball]
                                            },
                                            {
                                                name: item.TG_Team,
                                                nums: [item.TG_Inball_HR, item.TG_Ball]
                                            },
                                            ],
                                        }
                                    )
                                } else {
                                    resultList[index].gameResultList.push(
                                        {
                                            titletext: [item.M_Start, '上半场', '全场'],
                                            scoreList: [{
                                                name: item.MB_Team,
                                                nums: [item.MB_Inball_HR, item.MB_Inball]
                                            },
                                            {
                                                name: item.TG_Team,
                                                nums: [item.TG_Inball_HR, item.TG_Inball]
                                            },
                                            ],
                                        }
                                    )
                                }
                            })
                            this.setCollapseList(resultList);
                        }
                        break;
                    case 1:
                        const response_bk = await axios.post(`${BASE_URL}${GET_BK_RESULT}`, data);
                        if (response_bk.status === 200) {
                            this.setSuccess(true);
                            const tmpCollapseList = [...response_bk.data.data];
                            const duplicatedLeagueNames = tmpCollapseList.map(item => item.M_League);
                            const leagueNames = duplicatedLeagueNames.filter((item, index) => duplicatedLeagueNames.indexOf(item) === index);
                            let resultList = [] as Array<any>;
                            resultList = leagueNames.map(item => {
                                return {
                                    name: item,
                                    gameResultList: []
                                }
                            })
                            tmpCollapseList.map(item => {
                                const index = leagueNames.indexOf(item.M_League);
                                if (active === 0) {
                                    resultList[index].gameResultList.push(
                                        {
                                            titletext: [item.M_Start, '上半场', '全场'],
                                            scoreList: [{
                                                name: item.MB_Team,
                                                nums: [item.MB_Inball_HR, item.MB_Ball]
                                            },
                                            {
                                                name: item.TG_Team,
                                                nums: [item.TG_Inball_HR, item.TG_Ball]
                                            },
                                            ],
                                        }
                                    )
                                } else {
                                    resultList[index].gameResultList.push(
                                        {
                                            titletext: [item.M_Start, '上半场', '全场'],
                                            scoreList: [{
                                                name: item.MB_Team,
                                                nums: [item.MB_Inball_HR, item.MB_Inball]
                                            },
                                            {
                                                name: item.TG_Team,
                                                nums: [item.TG_Inball_HR, item.TG_Inball]
                                            },
                                            ],
                                        }
                                    )
                                }
                            })
                            this.setCollapseList(resultList);
                        }
                        break;
                    case 2:
                        let gameResultList = [
                            {
                                name: 'NBA美国职业篮球联赛',
                                gameResultList: [
                                    {
                                        titletext: ['11月22日 03：00', '全场', '上半场', '下半场'],
                                        scoreList: [{
                                            name: '金州勇士',
                                            nums: [129, 59, 70]
                                        },
                                        {
                                            name: '金州勇士',
                                            nums: [129, 59, 70]
                                        },
                                        ],
                                    },
                                    {
                                        titletext: ['11月22日 00:00', '第一节', '第二节', '第三节'],
                                        scoreList: [{
                                            name: '洛杉矶快船',
                                            nums: [23, 22, 38]
                                        },
                                        {
                                            name: '丹佛掘金',
                                            nums: [37, 28, 35]
                                        },
                                        ],
                                    },
                                    {
                                        titletext: ['11月22日 03：00', '第四节', '加时'],
                                        scoreList: [{
                                            name: '萨达姆',
                                            nums: [35, 59]
                                        },
                                        {
                                            name: '拜登',
                                            nums: [32, 51]
                                        },
                                        ],
                                    },
                                ]
                            },
                            {
                                name: '土耳其篮球超级联赛',
                                gameResultList: [
                                    {
                                        titletext: ['11月22日 03：00', '全场', '上半场', '下半场'],
                                        scoreList: [{
                                            name: '金州勇士',
                                            nums: [129, 59, 70]
                                        },
                                        {
                                            name: '金州勇士',
                                            nums: [129, 59, 70]
                                        },
                                        ],
                                    },
                                    {
                                        titletext: ['11月22日 00:00', '第一节', '第二节', '第三节'],
                                        scoreList: [{
                                            name: '洛杉矶快船',
                                            nums: [23, 22, 38]
                                        },
                                        {
                                            name: '丹佛掘金',
                                            nums: [37, 28, 35]
                                        },
                                        ],
                                    },
                                    {
                                        titletext: ['11月22日 03：00', '第四节', '加时'],
                                        scoreList: [{
                                            name: '萨达姆',
                                            nums: [35, 59]
                                        },
                                        {
                                            name: '拜登',
                                            nums: [32, 51]
                                        },
                                        ],
                                    },

                                ]
                            },
                        ]
                        this.setCollapseList(gameResultList);
                        break;
                }
                this.setSuccess(true);
            } catch (e) {
                return e;
            }
        },
    },
    persist: {
        enabled: true
    }
});
