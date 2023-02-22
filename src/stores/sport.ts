import { defineStore } from "pinia";
import axios from "axios";
import config from "@/config"
import type { 
  ICountOfSports,
 } from "@/interface";

export const useSportStore = defineStore({
  id:"auth",
  state:() =>({
    count:{
      today_football:0,
      today_basketball:0,
      all_football:0,
      all_basketball:0,
      doing_football:0,
      doing_basketball:0,
    } as ICountOfSports,
    sportDetails:[] as Array<any>
  }),
  getters:{
    getCount: (state) => state.count,
    getSportDetails: (state) => state.sportDetails,
  },
  actions:{
    setCount(value:ICountOfSports){
      this.count = value;
    },
    setSportDetails(value:Array<any>){
      this.sportDetails = value;
    },
    async countOfSports() {
      try {
        let url = config.api.COUNT_OF_SPORTS;
        const response = (await axios.get(url)).data;
        console.log(response)
        this.setCount(response.data.sport)
        return response;
      } catch (e) {
        return e;
      }
    },
    async fetchDetails(offset:number, type:string) {
      try {
        let url = config.api.SPORT_LIST;
        let data = {
          offset: offset,
          type: type
        }
        const response = (await axios.post(url, data)).data;
        console.log(response)
        return response;
      } catch (e) {
        return e;
      }
    },
    async allShortSports() {
      try {
        let url = config.api.SHORT_SPORTS;
        const response = (await axios.get(url)).data;
        console.log(response)
        return response;
      } catch (e) {
        return e;
      }
    },
  },
  persist:{
    enabled:true
  }
});
