import axios from "axios";



const api = axios.create({
    baseURL: "https://api-swap.onrender.com/"
})

export default api