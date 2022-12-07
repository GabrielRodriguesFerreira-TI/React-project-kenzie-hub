import { useContext } from "react"
import { TechContext } from "../../contexts/TechContext"
import { LiContent } from "./style"

export const TechnologyList = () =>{
    const { setIsModalOpen } = useContext(TechContext)

    return (
        <LiContent onClick={() => setIsModalOpen("true")}>
            <h2>React JS</h2>
            <span>Intermediário</span>
        </LiContent>
    )
}