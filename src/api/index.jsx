import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const client = axios.create({
    baseURL: "https://kenziehub.herokuapp.com",
    timeout: 1000,
})

export const GetUser = async (token) => {
    try {
        const response = await client.get("profile", {
            headers : {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}


export const LoginUser = async (data, setLoading, navigate) => {


    try {
        setLoading(true)
        const response = await client.post("sessions", data)
        toast.success('Login feito com sucesso!', {
            autoClose: 1000,
        });

        console.log(response.data)
        window.localStorage.clear()
        window.localStorage.setItem("Token", response.data.token)
        window.localStorage.setItem("userId", response.data.user.id)

        setTimeout(function() {
            navigate("/dashboard/user")
        }, 2000)

    } catch (error) {
        toast.error('Ops! algo deu errado', {
            autoClose: 3500,
        });
    } finally {
        setLoading(false)
    }
}

export const CreatUser = async (data, setLoading) => {
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