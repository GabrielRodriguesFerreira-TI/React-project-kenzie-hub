import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { GetUser } from "../../api"
import { Header } from "../../components/Header"
import { ContainerStyled, DivContent, DivStyled, SpanLine, SpanStyled, TextStyled, Title } from "./styles"

export const DashBoardPage = () => {
    const [userState, setUserState] = useState({})
    const Navigate = useNavigate()

    useEffect(() => {
        const getUserFunction = async () => {
            !localStorage.getItem("Token") && Navigate("/login")

            const token = localStorage.getItem("Token")
            const user = await GetUser(token)
            setUserState(user)
        }
        getUserFunction()
    }, [])


    return (
        <>
            <ContainerStyled>
                <DivContent>
                    <Header dashBoard={true} />
                </DivContent>
            </ContainerStyled>
            <SpanLine />
            <ContainerStyled>
                <DivContent>
                    <Title>
                        Olá, {userState.name}
                    </Title>
                    <SpanStyled>
                        {userState.course_module}
                    </SpanStyled>
                </DivContent>
            </ContainerStyled>
            <SpanLine />
            <ContainerStyled>
                <DivStyled>
                    <Title>
                        Que pena! Estamos em desenvolvimento :(
                    </Title>
                    <TextStyled>
                        Nossa aplicação está em desenvolvimento, em breve teremos novidades
                    </TextStyled>
                </DivStyled>
            </ContainerStyled>
        </>
    )
}