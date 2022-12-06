import { useContext } from "react"
import { Header } from "../../components/Header"
import { UserContext } from "../../contexts/UserContext"
import { ContainerStyled, DivContent, DivHeader, SpanLine, SpanStyled, Title } from "./styles"

export const DashBoardPage = () => {
    const { userState, loading } = useContext(UserContext)

    if (loading) {
        return;
    }

    return (
        <>
            <ContainerStyled>
                <DivHeader>
                    <Header dashBoard={true} />
                </DivHeader>
            </ContainerStyled>

            <SpanLine />

            <ContainerStyled>
                <DivHeader>
                    <Title>
                        Olá, {userState.name}
                    </Title>
                    <SpanStyled>
                        {userState.course_module}
                    </SpanStyled>
                </DivHeader>
            </ContainerStyled>

            <SpanLine />

            <ContainerStyled>
                <DivContent>

                </DivContent>
            </ContainerStyled>
        </>
    )
}