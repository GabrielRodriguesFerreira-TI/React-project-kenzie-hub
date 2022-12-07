import { DivWrapper, ModalContent, ModalHeader } from "./styles"

export const AddModal = ({ isModalOpen }) => {
    return (
        <DivWrapper>
            <ModalContent>
                <ModalHeader>
                    <h2>Cadastrar tecnologia</h2>
                    <i>X</i>
                </ModalHeader>
                {isModalOpen}
            </ModalContent>
        </DivWrapper>
    )
}