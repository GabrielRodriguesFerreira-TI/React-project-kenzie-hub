import axios from "axios";


export const client = axios.create({
    baseURL: "https://kenziehub.herokuapp.com",
    timeout: 1000,
})
