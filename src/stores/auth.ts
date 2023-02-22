import { defineStore } from "pinia";
import axios from "axios";
import config from "@/config"
import type { 
  IUser,
 } from "@/interface";

export const useAuthStore = defineStore({
  id:"auth",
  state:() =>({
    token:'',
    user:{
      id: '',
      username:'',
      money:0,
      credit:0
    } as IUser,
  }),
  getters:{
    getToken: (state) => state.token,
    getUser: (state) => state.user,
  },
  actions:{
    setToken(token:string){
      this.token = token;
    },
    setUser(user:IUser){
      this.user = user;
    },
    async signIn(username:string, password:string) {
      try {
        let url = config.api.SIGN_IN;
        let data = {
          username:username,
          password:password
        };
        const response = (await axios.post(url, data)).data;
        this.setToken(response.data.token as string);
        this.setUser(response.data.user as IUser)
        return response;
      } catch (e) {
        return e;
      }
    },
    async signUp(username:string, password:string) {
      try {
        let url = config.api.SIGN_IN;
        let data = {
          username:username,
          password:password
        };
        const response = (await axios.post(url, data)).data;
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
