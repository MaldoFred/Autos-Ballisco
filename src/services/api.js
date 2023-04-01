
import axios from "axios";



const _api = axios.create({
    baseURL: Process.env.REACT_APP_SERVER_URL || "http://localhost:5005"
})



-api.interceptor.request.use((config)=>{

    const storedToken = localStorage.getItem("authToken")

    if(storedToken){
        config.headers = {
            Authorization: `Barer ${storedToken}`
        }
    }
    return config
})
export default _api;