import axios, { AxiosInstance } from 'axios';
//JSON Server
let BASE_URL: string = "http://localhost:8080/";

//Creating an axios instance with the JSON server as BASE_URL
export const defaultAxiosInstance = axios.create({
    baseURL: BASE_URL,

});
