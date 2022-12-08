import { useContext } from "react"
import { Header } from "../../components/Header"
import { AddModal } from "../../components/Modal"
import { Technology } from "../../components/Technology"
import { TechContext } from "../../contexts/TechContext"
import { UserContext } from "../../contexts/UserContext"
import { ContainerStyled, ContentHeader, DivContent, DivHeader, DivPadding, SpanLine, SpanStyled, Title } from "./styles"

export const DashBoardPage = () => {
    const { userState, loading } = useContext(UserContext)
    const { isModalOpen, setIsModalOpen, setTypeModal } = useContext(TechContext)


    if (loading) {
        return;
    }

    return (
        <>
            {isModalOpen && <AddModal />}

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
                    <ContentHeader>
                        <h2>Tecnologias</h2>
                        <i onClick={() => {
                            setIsModalOpen(true)
                            setTypeModal("create")
                        }}>+</i>
                    </ContentHeader>

                    <DivPadding>
                        <Technology tecList={userState.techs} />
                    </DivPadding>
                </DivContent>
            </ContainerStyled>
        </>
    )
}