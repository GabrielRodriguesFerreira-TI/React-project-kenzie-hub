import { TechnologyList } from "../TechnologyList"
import { UlContent } from "./styles"

export const Technology = ({ tecList }) => {

    return (
        <UlContent>
            {tecList?.map((element, index) => {
                return (
                    <TechnologyList key={index} type={element.status} title={element.title} id={element.id}/>
                )
            })}
        </UlContent>
    )
}