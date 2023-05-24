import axios, { AxiosRequestConfig } from 'axios';
import { GLOBAL } from '../Global';
import { useSelector } from 'react-redux';
import { RootState } from '../../auth/Store';

const URL_API = GLOBAL.URL_API_PACKAGES+"/package-service";

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

//Trasladar paquete
export const postPackage = async (data: any) => {
    try {
        const response: any = await api.post(`/v1/packages/`, data);
        return response
    } catch (error) {
        throw new Error('Error al enviar la solicitud POST');
    }
}

export const putFee = async (data: any) => {
    try {
        const response: any = await api.put(`/v1/fees`, data);
        return response
    } catch (error) {
        throw new Error('Error al enviar la solicitud PUT');
    }
}

export const getFee = async () => {
    try {
        const response: any = await api.get(`/v1/fees`);
        return response
    } catch (error) {
        throw new Error('Error al enviar la solicitud GET');
    }
}

export const getPackageList = async (pattern: string, page: number, size: number) => {
    try {
        const response: any = await api.get(`/v1/packages/?pattern=${pattern}&page=${page}&size=${size}`);
        return response
    } catch (error) {
        throw new Error('Error al enviar la solicitud GET');
    }
}

export const getPackageListDelivered = async (pattern: string, page: number, size: number) => {
    try {
        const response: any = await api.get(`/v1/packages/delivered?pattern=${pattern}&page=${page}&size=${size}`);
        return response
    } catch (error) {
        throw new Error('Error al enviar la solicitud GET');
    }
}