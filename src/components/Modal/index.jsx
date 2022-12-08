import { useContext } from "react"
import { TechContext } from "../../contexts/TechContext"
import { ButtonForm, DivButtonForm, DivWrapper, FormModal, ModalContent, ModalHeader } from "./styles"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { createSchema, editSchema } from "./formModalSchema"
import { DivCenter, Ring, SpanLoading } from "./stylesLoading"
import { Button } from "../Button"
import { InputApp } from "../Input"
import { Select } from "../Select"

export const AddModal = () => {
    const { typeModal, setIsModalOpen, currentValue, getTech, techLoading, deleteTech, toEditTech } = useContext(TechContext)

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur",
        resolver: yupResolver(typeModal === "create" ? createSchema : editSchema)
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
                                <InputApp errorInput={errors.title?.message} type={"text"} placeholder="Nome do projeto..." register={register("title")}>Nome</InputApp>
                                {errors.title?.message && <p>{errors.title.message}</p>}
                                <Select errorSelect={errors.status?.message} type="formModal" register={register("status")}>Selecionar status</Select>
                                {errors.status?.message && <p>{errors.status.message}</p>}
                                <Button type="submit" variant="entrance">Cadastrar Tecnologia</Button>
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
                            <FormModal noValidate onSubmit={handleSubmit(toEditTech)}>
                                <InputApp value={currentValue.title} type="text" disabled={true} >Nome do projeto</InputApp>
                                <Select errorSelect={errors.status?.message} type="formModal" register={register("status")}>Status</Select>
                                {errors.status?.message && <p>{errors.status.message}</p>}
                                <DivButtonForm>
                                    <ButtonForm type="submit" variant="toSave">Salvar alterações</ButtonForm>
                                    <ButtonForm onClick={(e) => {
                                        e.preventDefault()
                                        deleteTech(currentValue.id)
                                    }} variant="delete">Excluir</ButtonForm>
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
        </DivWrapper >
    )
}