import instance from './axios'


export default class BaseHttpService {

    async get(endpoint: string, options = {}) {
        return instance.get(`${endpoint}`, options)
            .then(function (response) {
                // handle success
                console.log(response);
            })

    }

    async post(endpoint: string, data = {}, options = {}) {

        return instance.post(`${endpoint}`, data, options)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    async delete(endpoint: string, options = {}) {
        Object.assign(options, this._getCommonOptions());
        return instance.delete(`${endpoint}`, options)
            .catch(error => this._handleHttpError(error));
    }

    async patch(endpoint: string, data = {}, options = {}) {
        Object.assign(options, this._getCommonOptions());
        return instance.patch(`${endpoint}`, data, options)
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

