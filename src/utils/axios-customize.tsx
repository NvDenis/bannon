import axios from 'axios';
// import { callRefreshToken } from '../services/api';

const instance = axios.create({
    // baseURL: 'https://vduyit-bannon-be.onrender.com/',
    baseURL: import.meta.env.VITE_URL_BACKEND,
    // withCredentials: true,
});



instance.defaults.headers.common = { 'Authorization': `Bearer ${localStorage.getItem('access_token')}` }

// const handleRefreshToken = async () => {
//     const res = await callRefreshToken();
//     if (res && res.data) return res.data.access_token;
//     else null;
// }

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;

    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});


// const NO_RETRY_HEADER = 'x-no-retry'

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    
    return response && response.data ? response.data : response;
}, async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // return  Promise.reject(error);
    // if (error.config && error.response
    //     && +error.response.status === 401
    //     && !error.config.headers[NO_RETRY_HEADER]
    // ) {
    //     const access_token = await handleRefreshToken();
    //     error.config.headers[NO_RETRY_HEADER] = 'true'
    //     if (access_token) {
    //         error.config.headers['Authorization'] = `Bearer ${access_token}`;
    //         localStorage.setItem('access_token', access_token)
    //         return instance.request(error.config);
    //     }
    // }

    // if (
    //     error.config && error.response
    //     && +error.response.status === 400
    //     && error.config.url === '/api/v1/auth/refresh'
    // ) {
    //     window.location.href = '/login';
    // }
    return error?.response ?? Promise.reject(error);
});

export default instance