import { Button } from "../Button"
import { InputApp } from "../Input"
import { Select } from "../Select"
import { DivButton, DivInput, DivTitle, FormStyled, Title } from "./styles"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { LoginSchema, RegisterSchema } from "./formSchema"
import { useState } from "react"
import { CreatUser, LoginUser } from "../../api"
import { useNavigate } from "react-router-dom"


export const FormApp = ({ boolean }) => {
    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: "onBlur",
        resolver: yupResolver(boolean === "true" ? LoginSchema : RegisterSchema)
    })

    const Navigate = useNavigate()

    const loginSubmit = async (data) => {
        await LoginUser(data, setLoading, Navigate)
        reset()
    }

    const registerSubmit = async (data) => {
        delete data.confirmPassword
        await CreatUser(data, setLoading)
        reset()
    }


    return (
        <>
            {boolean === "true" ? (
                <FormStyled onSubmit={handleSubmit(loginSubmit)} variant="login" noValidate>
                    <DivTitle>
                        <Title>Login</Title>
                    </DivTitle>
                    <DivInput>
                        <InputApp disabled={loading} type={"email"} placeholder="Digite seu email aqui..." register={register("email")} errorInput={errors.email?.message}>Email</InputApp>
                        {errors.email?.message && <p>{errors.email.message}</p>}

                        <InputApp disabled={loading} type={"password"} placeholder="Digite sua senha aqui..." register={register("password")} errorInput={errors.password?.message}>Senha</InputApp>
                        {errors.password?.message && <p>{errors.password.message}</p>}

                    </DivInput>
                    <DivButton>
                        <Button disable={loading} type="submit" variant="entrance">
                            {loading ? "Entrando..." : "Entrar"}
                        </Button>
                        <span>Ainda não possui uma conta?</span>
                        <Button to="/register/user" variant="register">
                            Cadastrar
                        </Button>
                    </DivButton>
                </FormStyled>
            ) : (
                <FormStyled onSubmit={handleSubmit(registerSubmit)} variant="register" noValidate>
                    <DivTitle>
                        <Title>Crie sua conta</Title>
                    </DivTitle>
                    <span>Rapido e grátis, vamos nessa</span>
                    <DivInput>
                        <InputApp disabled={loading} type={"text"} placeholder="Digite seu nome aqui..." register={register("name")} errorInput={errors.name?.message}>Nome</InputApp>
                        {errors.name?.message && <p>{errors.name.message}</p>}

                        <InputApp disabled={loading} type={"email"} placeholder="Digite sua email aqui..." register={register("email")} errorInput={errors.email?.message}>Email</InputApp>
                        {errors.email?.message && <p>{errors.email.message}</p>}

                        <InputApp disabled={loading} type={"password"} placeholder="Digite sua senha aqui..." register={register("password")} errorInput={errors.password?.message}>Senha</InputApp>
                        {errors.password?.message && <p>{errors.password.message}</p>}

                        <InputApp disabled={loading} type={"password"} placeholder="Digite sua senha aqui..." register={register("confirmPassword")} errorInput={errors.confirmPassword?.message}>Confimar senha</InputApp>
                        {errors.confirmPassword?.message && <p>{errors.confirmPassword.message}</p>}

                        <InputApp disabled={loading} type={"text"} placeholder="Fale sobre você..." register={register("bio")} errorInput={errors.bio?.message}>Bio</InputApp>
                        {errors.bio?.message && <p>{errors.bio.message}</p>}

                        <InputApp disabled={loading} type={"text"} placeholder="Opção de contato..." register={register("contact")} errorInput={errors.contact?.message}>Contato</InputApp>
                        {errors.contact?.message && <p>{errors.contact.message}</p>}

                        <Select register={register("course_module")} errorSelect={errors.course_module?.message}>Selecionar módulo</Select>
                        {errors.course_module?.message && <p>{errors.course_module.message}</p>}

                    </DivInput>
                    <DivButton>
                        <Button disable={loading} type="submit" variant="entrance">
                            {loading ? "Cadastrando..." : "Cadastrar"}
                        </Button>
                    </DivButton>
                </FormStyled>
            )}
        </>
    )
}