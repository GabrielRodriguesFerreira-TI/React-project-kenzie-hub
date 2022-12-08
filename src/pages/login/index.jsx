import { useContext } from "react"
import { FormApp } from "../../components/Form"
import { Header } from "../../components/Header"
import { UserContext } from "../../contexts/UserContext"
import { ContainerStyled, DivCenter, DivContent, DivPadding, Ring, SpanLoading } from "./styles"

export const LoginPage = () => {
    const { loading } = useContext(UserContext)

    return (
        <ContainerStyled>
            <DivContent>
                <Header boolean="true" />
                <DivPadding>
                    {loading === false ? (
                        <FormApp boolean="true" />
                    ) : (
                        <DivCenter>
                            <Ring />
                            <SpanLoading>Loading...</SpanLoading>
                        </DivCenter>
                    )}
                </DivPadding>
            </DivContent>
        </ContainerStyled>
    )
}