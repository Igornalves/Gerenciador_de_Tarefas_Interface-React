import axios from "axios";

const api = axios.create({
    baseURL: 'https://projeto-gerenciador-de-tarefas-node-js.onrender.com'
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