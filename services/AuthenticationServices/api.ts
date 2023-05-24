import axios, { AxiosRequestConfig } from 'axios';
import { GLOBAL } from '../Global';
import { useSelector } from 'react-redux';
import { RootState } from '../../auth/Store';

const URL_API = GLOBAL.URL_API+"/authentication-service";

const apiConfig: AxiosRequestConfig = {
    baseURL: URL_API,
    // timeout: 5000, // Tiempo máximo de espera para la respuesta en milisegundos
    headers: {
        'Content-Type': 'application/json',
        // Authorization: 'Bearer your-token', // Encabezado de autorización
        
    },
    withCredentials: true,
    // Otros parámetros de configuración
};

const api = axios.create(apiConfig);

api.interceptors.request.use((config) => {
    const token = useSelector((state: RootState) => state.auth.token);
    console.log(token);
    // config.headers.Authorization = `Bearer ${token}`;
    config.headers.Authorization = `${token}`;
    return config;
});

export const signinApi = async (data: any) => {
    try {
        const response = await api.post('/v1/auth/authenticate', data);
        console.log('Respuesta:', response.data);
        return response
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        throw error;
    }
}


//http://localhost:3000/sign-in
//Login
export const postAuthenticate = async (data: any) => {
    try {
        const response = await axios.post('/v1/auth/authenticate', data, {
            baseURL: URL_API,
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });
        console.log('Respuesta:', response.data);
        return response
    } catch (error) {
        // console.error('Error al obtener los datos:', error);
        // throw error;
        console.error('Error:', error);
        throw new Error('Error al enviar la solicitud POST');
    }
}


//Cuando el operador es que registra directamente
export const postRegisterOp = async (data: any) => {
    try {
        const response = await api.post('/v1/auth/register', data);
        console.log('Respuesta:', response);
        return response
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Error al enviar la solicitud POST');
    }
}

//http://localhost:3000/sign-up
//Registro para el cliente donde solo el se registra asi mismo
export const postRegisterClient = async (data: any) => {
    try {
        const response = await api.post('/v1/auth/register', data);
        console.log('Respuesta:', response);
        return response
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Error al enviar la solicitud POST');
    }
}

export const putUsers = async (data: any) => {
    try {
        const response = await api.put('/v1/users/', data);
        console.log('Respuesta:', response);
        return response
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Error al enviar la solicitud POST');
    }
}

export const deleteUsersId = async (id: any) => {
    try {
        const response = await api.delete(`/v1/users/${id}`);
        console.log('Respuesta:', response);
        return response
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Error al enviar la solicitud POST');
    }
}

export const getUsersId = async (id: any) => {
    try {
        const response = await api.get(`/v1/users/${id}`);
        console.log('Respuesta:', response);
        return response
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Error al enviar la solicitud POST');
    }
}

export const getListUsersId = async (pattern: string, page: number, size: number) => {
    try {
        const response: any = await api.get(`/v1/users/?pattern=${pattern}&page=${page}&size=${size}`);
        console.log('Respuesta:', response);
        return response
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Error al enviar la solicitud POST');
    }
}




// Agregar un interceptor para manejar errores de respuesta
// postAuthenticate.interceptors.response.use(
//     response => response,
//     error => {
//       console.error('Error de respuesta:', error);
//       return Promise.reject(error);
//     }
//   );







// import React, { useEffect, useState } from 'react';
// import { fetchData } from '../services/api';

// const MyComponent: React.FC = () => {
//   const [data, setData] = useState<any>(null);

//   useEffect(() => {
//     const fetchDataFromAPI = async () => {
//       try {
//         const apiData = await fetchData();
//         setData(apiData);
//       } catch (error) {
//         // Manejo de errores
//       }
//     };

//     fetchDataFromAPI();
//   }, []);

//   // Renderizado de componentes y uso de los datos

//   return <div>{/* Renderizado del componente */}</div>;
// };

// export default MyComponent;
