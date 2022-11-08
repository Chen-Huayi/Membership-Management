import axios from 'axios'
import {token} from "./token";
import {history} from "./history";

const http = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 3000
})
// Add request interceptors
http.interceptors.request.use((config)=> {
    const myToken = token
    if (myToken) {
        config.headers.Authorization = `Bearer ${myToken}`
    }
    return config
}, (error)=> {
    return Promise.reject(error)
})

// Add response interceptors
http.interceptors.response.use((response)=> {
    // This function is triggered for any status code between 200 and 300 (code>=200 && code<300)
    return response.data
}, (error)=> {
    // Triggered for any status code outside the 299 range
    if (error.response.status===401){
        history.push('/login')
    }
    return Promise.reject(error)
})

export { http }