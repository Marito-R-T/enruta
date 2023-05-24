import axios, { AxiosRequestConfig } from 'axios';
import { GLOBAL } from '../Global';
import { useSelector } from 'react-redux';
import { RootState } from '../../auth/Store';

const URL_API = GLOBAL.URL_API_ROUTE+"/route-service";

let apiConfig: AxiosRequestConfig = {
    baseURL: URL_API,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
};

const api = axios.create(apiConfig);

api.interceptors.request.use((config) => {
    const token = useSelector((state: RootState) => state.auth.token);
    config.headers.Authorization = `${token}`;
    return config;
});

export const postRoute = async (data: any) => {
    try {
        const response: any = await api.post(`/v1/routes`, data);
        return response
    } catch (error) {
        throw new Error('Error al enviar la solicitud POST');
    }
}

export const putRoute = async (data: any) => {
    try {
        const response: any = await api.put(`/v1/routes`, data);
        return response
    } catch (error) {
        throw new Error('Error al enviar la solicitud PUT');
    }
}

export const deleteRoute = async (id: any) => {
    try {
        const response: any = await api.delete(`/v1/routes/${id}`);
        return response
    } catch (error) {
        throw new Error('Error al enviar la solicitud DELETE');
    }
}

export const getRouteId = async (id: any) => {
    try {
        const response: any = await api.get(`/v1/routes/${id}`);
        return response
    } catch (error) {
        throw new Error('Error al enviar la solicitud GET');
    }
}

export const getListRoute = async (pattern: string, page: number, size: number) => {
    try {
        const response: any = await api.get(`/v1/routes/?pattern=${pattern}&page=${page}&size=${size}`);
        return response
    } catch (error) {
        throw new Error('Error al enviar la solicitud GET');
    }
}

export const getListRouteActive = async (pattern: string, page: number, size: number) => {
    try {
        const response: any = await api.get(`/v1/routes/active-routes?pattern=${pattern}&page=${page}&size=${size}`);
        return response
    } catch (error) {
        throw new Error('Error al enviar la solicitud GET');
    }
}

export const getListRouteAll = async () => {
    try {
        const response: any = await api.get(`/v1/routes/list`);
        return response
    } catch (error) {
        throw new Error('Error al enviar la solicitud GET');
    }
}