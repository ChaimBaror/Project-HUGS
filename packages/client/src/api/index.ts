import HttpClient from './http-client'


export default class BaseHttpService {

    httpClient = new HttpClient();

    async get(endpoint: string, options = {}) {
        Object.assign(options, this._getCommonOptions());
        return this.httpClient.require('GET', `${endpoint}`, options)
        .catch(error => this._handleHttpError(error));

    }

    async post(endpoint: string, data = {}, options = {}) {
        Object.assign(options, this._getCommonOptions());
        return this.httpClient.post(`${endpoint}`, data, options)
        .catch(error => this._handleHttpError(error));  

    }

    async delete(endpoint: string, options = {}) {
        Object.assign(options, this._getCommonOptions());
        return this.httpClient.delete(`${endpoint}`, options)
            .catch(error => this._handleHttpError(error));
    }

    async patch(endpoint: string, data = {}, options = {}) {
        Object.assign(options, this._getCommonOptions());
        return this.httpClient.patch(`${endpoint}`, data, options)
            .catch(error => this._handleHttpError(error));
    }

    _handleHttpError(error: any) {
        const { statusCode } = error.response.data;

        if (statusCode !== 401) {
            throw error;
        } else {
            return statusCode;
        }
    }




    _getCommonOptions() {
        const token = this.loadToken();
        return {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }

    }

    loadToken() {
        const token = localStorage.getItem('accessToken');
        return token;
    }
    saveToken(accessToken: string) {
        return localStorage.setItem('accessToken', accessToken);
    }

    removeToken() {
        localStorage.removeItem('accessToken');
    }
}
