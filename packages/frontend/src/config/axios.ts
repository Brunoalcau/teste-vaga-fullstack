import axios, { AxiosInstance, AxiosStatic } from "axios";

function setupInterceptorsTo(axios: AxiosStatic): AxiosInstance {
    const axiosInstance  = axios.create({
        baseURL: "http://localhost:3030",
    })
    return axiosInstance;
}

export const instance = setupInterceptorsTo(axios);
