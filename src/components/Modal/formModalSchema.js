import * as yup from "yup"

export const createSchema = yup.object().shape({
    title: yup.string().trim().required("Nome obrigatório").min(6 ,"O nome precisar ter no minimo 6 caracteres").max(100),
    status: yup.string().required("Informe seu status"),
})

export const editSchema = yup.object().shape({
    status: yup.string().required("Informe seu status")
})