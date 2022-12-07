import { useState } from "react";
import { createContext } from "react";


export const TechContext = createContext({})

export const TechProvider = ({ children }) =>{
    const [isModalOpen, setIsModalOpen] = useState("false")

    return (
        <TechContext.Provider value={{ isModalOpen, setIsModalOpen }}>
            {children}
        </TechContext.Provider>
    )
}