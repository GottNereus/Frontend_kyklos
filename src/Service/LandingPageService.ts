import { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "./Api";

/* CRUD Methoden*/
const LandingPageService = (api: AxiosInstance = defaultAxiosInstance) => ({
    getAllKyklop: async () => {

        const data = await api.get("/", {

        });
        return data["data"];
    },

});
export default LandingPageService;
