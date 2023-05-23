import axios, { AxiosRequestConfig } from 'axios';
import { GLOBAL } from '../Global';
import { useSelector } from 'react-redux';
import { RootState } from '../../auth/Store';

const URL_API = GLOBAL.URL_API+"/client-service";

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

export const postOrders = async (data: any) => {
    try {
        const response = await api.post(`/v1/orders`, data);
        return response
    } catch (error) {
        throw new Error('Error al enviar la solicitud POST');
    }
}