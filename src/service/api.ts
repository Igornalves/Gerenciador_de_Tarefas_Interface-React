import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.168.1.102:3333'
})

api.interceptors.request.use((config) => {
    console.log("INTERCEPTOR REQUEST => ",config) 
    return config;
}, (error) => {
    return Promise.reject(error);
});

api.interceptors.response.use(
    response => {
        console.log("DADOS RECEBIDOS =>", response.data);
        return response;
    },
    error => {
        console.error('INTERCEPTOR RESPONSE ERROR =>', error);
        return Promise.reject(error);
    }
);  

export { api }