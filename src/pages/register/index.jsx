import { FormApp } from "../../components/Form"
import { Header } from "../../components/Header"
import { ContainerStyled, DivContent, DivPadding } from "./styles"

export const RegisterPage = () => {
    return (
        <ContainerStyled>
            <DivContent>
                <Header />
                <DivPadding>
                    <FormApp />
                </DivPadding>
            </DivContent>
        </ContainerStyled>
    )
}