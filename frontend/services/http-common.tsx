import axios from "axios";

export const domain ="http://00d6-197-243-61-202.ngrok.io"
import AuthService from './user/AuthService'
import Router from "next/router";

const http = axios.create({
    baseURL: `${domain}/api`,
    headers: { 'Content-Type': 'application/json' },
});

http.interceptors.request.use(
    function (config) {
        const token = AuthService.getEncToken();
        if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

http.interceptors.response.use(
    function (response){
        return Promise.resolve(response)
    },
    function (error) {
        let res = error.response
        if (res?.data && res.data.message === "INVALID BEARER TOKEN")
            Router.push("/auth/login").then()
        
        return Promise.reject(error);
    }
)

export default http;