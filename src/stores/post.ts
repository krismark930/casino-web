import { defineStore } from "pinia";
import axios from "axios";
import { BASE_URL } from "@/config"
import { POST_ALL } from "@/config";
import { ADD_POST } from "@/config";
import { GET_POST } from "@/config";

export const postStore = defineStore({
    id: "post",
    state: () => ({
        success: false as boolean,
        errMessage: "" as string,
        posts: [] as Array<any>,
        post: {} as any,
    }),
    getters: {
        getSuccess: (state) => state.success,
        getErrMessage: (state) => state.errMessage,
        getPosts: (state) => state.posts,
        getPost: (state) => state.post
    },
    actions: {
        setSuccess(success: boolean) {
            this.success = success;
        },
        setErrMessage(errMessage: string) {
            this.errMessage = errMessage;
        },
        setPosts(posts: Array<any>) {
            this.posts = posts;
        },
        setPost(post: any) {
            this.post = post;
        },
        async dispatchPosts(token: any) {
            this.setSuccess(false);
            try {
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Access-Control-Allow-Origin": "*"
                    },
                };
                const response = await axios.get(`${BASE_URL}${POST_ALL}`, config);
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setPosts(response.data.data);
                }
            } catch (err: any) {
                if (err.response.status === 400) {
                    this.setErrorMessage(err.response.data.message);
                }
            }
        },
        async dispatchAddPost(data: any, token: any) {
            this.setSuccess(false);
            try {
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Access-Control-Allow-Origin": "*"
                    },
                };
                const response = await axios.post(`${BASE_URL}${ADD_POST}`, data, config);
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (err: any) {
                if (err.response.status === 400) {
                    this.setErrorMessage(err.response.data.message);
                }
            }
        },
        async dispatchPost(data: any, token: any) {
            this.setSuccess(false);
            try {
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Access-Control-Allow-Origin": "*"
                    },
                };
                const response = await axios.post(`${BASE_URL}${GET_POST}`, data, config);
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setPost(response.data.data);
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
