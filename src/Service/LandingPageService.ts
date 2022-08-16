import { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "./Api";

/* CRUD Methoden*/
const LandingPageService = (api: AxiosInstance = defaultAxiosInstance) => ({
    getAllKyklop: async () => {

        const data = await api.get("kyklos", {

        });
        return data["data"];
    },

});
export default LandingPageService;
