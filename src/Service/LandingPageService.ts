import { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "./Api";

/* CRUD Methoden*/
const LandingPageService = (api: AxiosInstance = defaultAxiosInstance) => ({
    getAllKyklop: async () => {

        const data = await api.get("kyklos", {

        });
        return data["data"];
    },

    getKyklopById : async (id:string) => {
        const data = await api.get(`kyklos/${id}`, {

        });
        return data["data"];
    },

    deleteKyklop : async (id:string) => {
        await api.delete(`kyklos/${id}`)
    },

    putKyklos : async (id:string,vulgo:string,password:string) => {
        await api.put(`kyklos/${id}`,{id,password,vulgo})
    },

    postKyklop: async (vulgo:string,password:string) => {
        let id:number = 0;
        await api.post(`kyklos/`,{id, password, vulgo})
    }
});

export default LandingPageService;
