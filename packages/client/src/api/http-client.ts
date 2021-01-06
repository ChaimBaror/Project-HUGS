import axios, { AxiosInstance, AxiosResponse, Method } from 'axios';

// put it in diff place
export interface UniversalResponse {
    data: any,
    status: any,
    headers: any,
    request: any
}


export default class HttpClient {
    instance: AxiosInstance;

    constructor() {
        this.instance = axios.create({
            baseURL: 'http://localhost:3000',
        });
    }


    async require(method: Method, url: string, data: {}) {
        let axiosResult: AxiosResponse = await this.instance({
            method: method,
            url: url,
            data: data
        })
        let result: UniversalResponse = {
            data: axiosResult.data,
            status: axiosResult.status,
            headers: axiosResult.headers,
            request: axiosResult.request
        }
        return result
    }

    async get(url: string, options: {}) {
        let axiosResult: AxiosResponse = await this.instance.get(url, options)
        let result: UniversalResponse = {
            data: axiosResult.data,
            status: axiosResult.status,
            headers: axiosResult.headers,
            request: axiosResult.request
        }
        return result
    }

    async post(url: string, data = {}, options = {}) {
        let axiosResult: AxiosResponse = await this.instance.post(url, data, options)
        let result: UniversalResponse = {
            data: axiosResult.data,
            status: axiosResult.status,
            headers: axiosResult.headers,
            request: axiosResult.request
        }
        return result
    }

    async patch(url: string, data = {}, options = {}) {
        let axiosResult: AxiosResponse = await this.instance.patch(url, data, options)
        let result: UniversalResponse = {
            data: axiosResult.data,
            status: axiosResult.status,
            headers: axiosResult.headers,
            request: axiosResult.request
        }
        return result
    }


    async delete(url: string, options = {}) {
        let axiosResult: AxiosResponse = await this.instance.delete(url, options)
        let result: UniversalResponse = {
            data: axiosResult.data,
            status: axiosResult.status,
            headers: axiosResult.headers,
            request: axiosResult.request
        }
        return result
    }
}

