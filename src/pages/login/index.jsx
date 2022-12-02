import { FormApp } from "../../components/Form"
import { Header } from "../../components/Header"
import { ContainerStyled, DivContent, DivPadding } from "./styles"

export const LoginPage = () => {
    return (
        <ContainerStyled>
            <DivContent>
                <Header boolean="true"/>
                <DivPadding>
                    <FormApp boolean="true"/>
                </DivPadding>
            </DivContent>
        </ContainerStyled>
    )
}