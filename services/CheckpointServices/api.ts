import axios, { AxiosRequestConfig } from 'axios';
import { GLOBAL } from '../Global';
import { useSelector } from 'react-redux';
import { RootState } from '../../auth/Store';

const URL_API = GLOBAL.URL_API+"/checkpoint-service";

const apiConfig: AxiosRequestConfig = {
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

export const postCheckpoint = async (data: any) => {
    try {
        const response: any = await api.post(`/v1/checkpoints`, data);
        return response
    } catch (error) {
        throw new Error('Error al enviar la solicitud POST');
    }
}

export const putCheckpoint = async (data: any) => {
    try {
        const response: any = await api.put(`/v1/checkpoints`, data);
        return response
    } catch (error) {
        throw new Error('Error al enviar la solicitud PUT');
    }
}

export const deleteCheckpoint = async (id: any) => {
    try {
        const response: any = await api.delete(`/v1/checkpoints/${id}`);
        return response
    } catch (error) {
        throw new Error('Error al enviar la solicitud DELETE');
    }
}

export const getCheckpointId = async (id: any) => {
    try {
        const response: any = await api.get(`/v1/checkpoints/${id}`);
        return response
    } catch (error) {
        throw new Error('Error al enviar la solicitud GET');
    }
}

export const getCheckpointList = async (pattern: string, page: number, size: number) => {
    try {
        const response: any = await api.get(`/v1/checkpoints/?pattern=${pattern}&page=${page}&size=${size}`);
        return response
    } catch (error) {
        throw new Error('Error al enviar la solicitud GET');
    }
}

export const getCheckpointListActive = async (pattern: string, page: number, size: number) => {
    try {
        const response: any = await api.get(`/v1/checkpoints/active-checkpoins?pattern=${pattern}&page=${page}&size=${size}`);
        return response
    } catch (error) {
        throw new Error('Error al enviar la solicitud GET');
    }
}

export const getPackageInformation = async (pattern: string, page: number, size: number) => {
    try {
        const response: any = await api.get(`/v1/packages-information/?pattern=${pattern}&page=${page}&size=${size}`);
        return response
    } catch (error) {
        throw new Error('Error al enviar la solicitud GET');
    }
}