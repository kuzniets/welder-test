import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.github.com/',
});

instance.interceptors.response.use((response) => {
    console.log('[Axios] Set axios response interceptors');

    return response;
}, (error) => {
    console.log('[Axios] Set axios response interceptors fail');

    return Promise.reject(error);
});

export default instance