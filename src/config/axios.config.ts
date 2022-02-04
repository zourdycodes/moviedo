import axios from "axios";
import {stringify} from 'query-string'
import { apiConfig } from "./api.config";

const axiosClient = axios.create({
    baseURL: apiConfig.baseURL,
    headers: {
        'Content-Type': 'application/json'
    },
    paramsSerializer: params => stringify({...params, api_key: apiConfig.apiKey})
})


axiosClient.interceptors.request.use(async (config) => config)

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data
    }

    return response
}, error => {
    throw new Error(error)
})

export default axiosClient