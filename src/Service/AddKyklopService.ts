import {AxiosInstance} from "axios";
import {defaultAxiosInstance} from "./Api";


export const AddKyklopService =(api: AxiosInstance = defaultAxiosInstance)=>({

    AddKyklop: async (vulgo:string,password:string) => {
        const data = await api.post('kyklos/',{
            id: "0",
            vulgo: vulgo,
            password: password
            })
        }
});