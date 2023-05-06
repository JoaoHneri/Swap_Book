import axios from "axios";



const api = axios.create({
    baseURL: "https://swap-book-api.onrender.com"
})

export default api