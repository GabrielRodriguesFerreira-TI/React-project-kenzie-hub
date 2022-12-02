import * as yup from "yup"

export const RegisterSchema = yup.object().shape({
    name: yup.string().trim().required("Nome Obrigatório").min(3, "O nome precisa ter no minimo 3 caracteres").max(100),
    email: yup.string().trim().required("Email Obrigatório").email("Email inválido"),
    password: yup.string().trim().required("Senha Obrigatória")
        .matches(/(?=.*?[A-Z])/, "É necessário uma letra maiúscula")
        .matches(/(?=.*?[a-z])/, "É necessário uma letra minúscula")
        .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número")
        .matches(/(?=.*?[#?!@$%^&*-])/, "É necessário pelo menos um caractere especial")
        .min(8, "É necessário no mínimo 8 digitos"),
    confirmPassword: yup.string().trim().required("Confirmação de senha obrigatória").oneOf([yup.ref('password')], "As senhas devem ser iguais"),
    bio: yup.string().trim().required("Bio Obrigatória").min(10, "Digite uma bio de pelo menos 10 digitos"),
    contact: yup.string().trim().required("Número para contato Obrigatório"),
    course_module: yup.string().required("Informe o seu modulo")
})

export const LoginSchema = yup.object().shape({
    email: yup.string().trim().required("Email Obrigatório").email("Email inválido"),
    password: yup.string().trim().required("Senha Obrigatória").min(8, "É necessário no mínimo 8 digitos"),
})