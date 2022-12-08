import { useContext } from "react"
import { TechContext } from "../../contexts/TechContext"
import { LiContent } from "./style"

export const TechnologyList = ({ type, title, id }) => {
    const { setIsModalOpen, setTypeModal, setCurrentValue } = useContext(TechContext)

    return (
        <LiContent onClick={() => {
            setIsModalOpen(true)
            setTypeModal("delete")
            setCurrentValue({
                type: `${type}`,
                title: `${title}`,
                id: `${id}`,
            })
        }}>
            <h2>{title}</h2>
            <span>{type}</span>
        </LiContent>
    )
}