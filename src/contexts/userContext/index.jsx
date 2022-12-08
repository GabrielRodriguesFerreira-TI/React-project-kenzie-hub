import { useEffect } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { client } from "../../api";


export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [loadingLogin, setLoadingLogin] = useState(false)
    const [userState, setUserState] = useState({})
    const [isEyeOpen, setIsEyeOpen] = useState("fa-solid fa-eye")

    const Navigate = useNavigate()

    const getUser = async (token) => {
        try {
            const response = await client.get("profile", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setLoading(true)
            setUserState(response.data)

        } catch (error) {
            window.localStorage.clear()
            console.error(error)

        } finally {
            setLoading(false)
        }
    }

    const getUserFunction = () => {
        const token = localStorage.getItem("Token")
        getUser(token)
    }

    useEffect(() => {
        !localStorage.getItem("Token") ? Navigate("/login") : getUserFunction()
    }, [])


    // -------------------------------------------------------------------------


    const loginUser = async (data) => {

        try {
            const response = await client.post("sessions", data)
            toast.success('Login feito com sucesso!', {
                autoClose: 1000,
            });
            setLoading(true)
            setLoadingLogin(true)
            setUserState(response.data.user)


            window.localStorage.clear()
            window.localStorage.setItem("Token", response.data.token)
            window.localStorage.setItem("userId", response.data.user.id)

            Navigate("/dashboard")

        } catch (error) {
            toast.error('Sua senha está incorreta!', {
                autoClose: 2500,
            });

        } finally {
            setLoading(false)
        }
    }


    const loginSubmit = async (data) => {
        await loginUser(data)
    }

    const creatUser = async (data) => {
        try {
            setLoading(true)
            const response = await client.post('users', data)
            toast.success('Conta criada com sucesso!', {
                autoClose: 1500,
            });

            Navigate("/login")

        } catch (error) {
            toast.error('Ops! algo deu errado', {
                autoClose: 3500,
            });
            console.log(error)
            
        } finally {
            setLoading(false)
        }
    }

    const registerSubmit = async (data) => {
        delete data.confirmPassword
        await creatUser(data)
    }

    // -------------------------------------------------------------------------

    return (
        <UserContext.Provider value={{ loading, loginSubmit, registerSubmit, userState, getUser, getUserFunction, loadingLogin, isEyeOpen, setIsEyeOpen}}>
            {children}
        </UserContext.Provider>
    )
}