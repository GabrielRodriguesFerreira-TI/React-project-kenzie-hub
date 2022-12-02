import { ButtonStyled, ButtonStyledLink } from "./styles"

export const Button = ({ children, to, variant, type, disable, onClick }) => {
    return (
        <>
            {type === "submit" ? (
                <ButtonStyled onClick={onClick} variant={variant} disabled={disable} type="submit">
                    {children}
                </ButtonStyled>
            ) : (
                <ButtonStyledLink to={to} variant={variant}>
                    {children}
                </ButtonStyledLink>
            )}
        </>
    )
}