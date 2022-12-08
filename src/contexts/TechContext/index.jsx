import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import { client } from "../../api";
import { UserContext } from "../UserContext";


export const TechContext = createContext({})

export const TechProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [typeModal, setTypeModal] = useState("")
    const [currentValue, setCurrentValue] = useState({})
    const [techLoading, setTechLoading] = useState(false)
    const { getUserFunction } = useContext(UserContext)

    const createTech = async (data) => {
        const token = localStorage?.getItem("Token")
        try {
            setTechLoading(true)
            const response = await client.post("users/techs", data, {
                headers: { Authorization: `Bearer ${token}` },
            })

            getUserFunction()
        } catch (error) {
            toast.error('Ops! algo deu errado', {
                autoClose: 3500,
            });
            console.error(error)
        } finally {
            setTechLoading(false)
            setIsModalOpen(false)
        }
    }

    const getTech = async (data) => {
        await createTech(data)
    }

    const createDelete = async (id) => {
        const token = localStorage?.getItem("Token")
        try {
            setTechLoading(true)
            const response = await client.delete(`users/techs/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            getUserFunction()
        } catch (error) {
            console.error(error)
        } finally {
            setTechLoading(false)
            setIsModalOpen(false)
        }
    }

    const deleteTech = async (id) => {
        await createDelete(id)
    }

    return (
        <TechContext.Provider value={{ isModalOpen, setIsModalOpen, typeModal, setTypeModal, currentValue, setCurrentValue, getTech, techLoading, deleteTech }}>
            {children}
        </TechContext.Provider>
    )
}