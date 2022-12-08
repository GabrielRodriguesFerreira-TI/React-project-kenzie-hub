import { useContext } from "react"
import { TechContext } from "../../contexts/TechContext"
import { ButtonForm, DivButtonForm, DivInput, DivWrapper, FormModal, ModalContent, ModalHeader } from "./styles"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { modalSchema } from "./formModalSchema"
import { DivCenter, Ring, SpanLoading } from "./stylesLoading"

export const AddModal = () => {
    const { typeModal, setIsModalOpen, currentValue, getTech, techLoading, deleteTech } = useContext(TechContext)

    console.log(currentValue)

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur",
        resolver: yupResolver(modalSchema)
    })

    return (
        <DivWrapper>
            <ModalContent>
                {typeModal === "create" ? (
                    <>
                        <ModalHeader>
                            <h2>Cadastrar tecnologia</h2>
                            <i onClick={() => setIsModalOpen(false)}>X</i>
                        </ModalHeader>
                        {techLoading === false ? (
                            <FormModal noValidate onSubmit={handleSubmit(getTech)}>
                                <DivInput>
                                    <label>Nome</label>
                                    <input type="text" placeholder="Nome do projeto..." {...register("title")} />
                                    {errors.title?.message && <p>{errors.title.message}</p>}
                                </DivInput>
                                <DivInput>
                                    <label>Selecionar status</label>
                                    <select {...register("status")}>
                                        <option hidden disabled selected value="">Selecionar Status</option>
                                        <optgroup label="Status">
                                            <option value="Iniciante">Iniciante</option>
                                            <option value="Intermediário">Intermediário</option>
                                            <option value="Avançado">Avançado</option>
                                        </optgroup>
                                    </select>
                                    {errors.status?.message && <p>{errors.status.message}</p>}
                                </DivInput>
                                <ButtonForm type="submit" variant="create">Cadastrar Tecnologia</ButtonForm>
                            </FormModal>
                        ) : (
                            <DivCenter>
                                <Ring />
                                <SpanLoading>Loading...</SpanLoading>
                            </DivCenter>
                        )}
                    </>
                ) : (
                    <>
                        <ModalHeader>
                            <h2>Tecnologia detalhes</h2>
                            <i onClick={() => setIsModalOpen(false)}>X</i>
                        </ModalHeader>
                        {techLoading === false ? (
                            <FormModal noValidate onSubmit={(e) => {
                                e.preventDefault()
                                deleteTech(currentValue.id)
                            }}>
                                <DivInput>
                                    <label>Nome do projeto</label>
                                    <input disabled type="text" value={currentValue.title} />
                                </DivInput>
                                <DivInput>
                                    <label>Status</label>
                                    <select disabled>
                                        <option hidden disabled selected value="">{currentValue.type}</option>
                                    </select>
                                </DivInput>
                                <DivButtonForm>
                                    <ButtonForm disabled variant="disabled">Salvar alterações</ButtonForm>
                                    <ButtonForm type="submit" variant="delete">Excluir</ButtonForm>
                                </DivButtonForm>
                            </FormModal>
                        ) : (
                            <DivCenter>
                                <Ring />
                                <SpanLoading>Loading...</SpanLoading>
                            </DivCenter>
                        )}
                    </>
                )}
            </ModalContent>
        </DivWrapper>
    )
}