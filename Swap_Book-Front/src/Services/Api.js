import axios from "axios";



const api = axios.create({
    baseURL: "https://swap-book.vercel.app"
})

export default api