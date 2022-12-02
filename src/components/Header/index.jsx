import { useNavigate } from "react-router-dom"
import { Button } from "../Button"
import { DivPadding, HeaderStyled } from "./styles"


export const Header = ({ boolean, dashBoard }) => {
    const Navigate = useNavigate()

    const comeBack = () =>{
        window.localStorage.clear()
        Navigate("/login")
    }

    return (
        <>
            {boolean === "true" ? (
                <HeaderStyled variant="login">
                    <h1>Kenzie Hub</h1>
                </HeaderStyled>
            ) : (
                <HeaderStyled variant={dashBoard ? "dashBoard" : "register"}>
                    <DivPadding>
                        <h1>Kenzie Hub</h1>
                        {dashBoard ? (
                            <Button onClick={comeBack} type="submit" variant="goOut">
                                Sair
                            </Button>
                        ) : (
                            <Button to="/login" variant="comeBack">
                                Voltar
                            </Button>
                        )}
                    </DivPadding>
                </HeaderStyled>
            )}
        </>
    )
}