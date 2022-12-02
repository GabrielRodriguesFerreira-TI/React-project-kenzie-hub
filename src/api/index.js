import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const client = axios.create({
    baseURL: "https://kenziehub.herokuapp.com",
    timeout: 1000,
})

export const getUser = async (token) => {
    try {
        const response = await client.get("profile", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    } catch (error) {
        toast.error('Ops! algo deu errado', {
            autoClose: 3500,
        });
    }
}


export const loginUser = async (data, setLoading, navigate) => {


    try {
        setLoading(true)
        const response = await client.post("sessions", data)
        toast.success('Login feito com sucesso!', {
            autoClose: 1000,
        });

        window.localStorage.clear()
        window.localStorage.setItem("Token", response.data.token)
        window.localStorage.setItem("userId", response.data.user.id)

        navigate("/dashboard/user")

    } catch (error) {
        toast.error('Ops! algo deu errado', {
            autoClose: 3500,
        });
    } finally {
        setLoading(false)
    }
}

export const creatUser = async (data, setLoading) => {
    try {
        setLoading(true)
        const response = await client.post('users', data)
        toast.success('Conta criada com sucesso!', {
            autoClose: 1500,
        });
    } catch (error) {
        toast.error('Ops! algo deu errado', {
            autoClose: 3500,
        });
    } finally {
        setLoading(false)
    }
}