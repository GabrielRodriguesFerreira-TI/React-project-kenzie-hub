import styled, { css } from "styled-components";
import { Link as LinkStyled } from "react-router-dom";

const buttonVariant = {
    entrance: css`
        width: 100%;
        color: #F8F9FA;
        background: #FF577F;
        border: 1px solid #FF577F;
        transition: 0.5s ease-in-out;

        :hover {
            background: #FF427F;
        }
    `,
    register: css`
        width: 100%;
        background: #868E96;
        transition: 0.5s ease-in-out;

        :hover {
            background: #343B41;
        }
    `,
    comeBack: css`
        margin-right: 10px;
        width: 26%;
        background: #212529;
        transition: 0.5s ease-in-out;

        :hover {
            background: #343B41;
        }
    `,
    goOut: css`
        margin-right: 10px;
        width: 70px;
        background: #212529;
        color: #F8F9FA;
        border: 1px solid #212529;
        transition: 0.5s ease-in-out;

        :hover {
            background: #343B41;
        }
    `

}

export const ButtonStyledLink = styled(LinkStyled)`
    ${({ variant }) => buttonVariant[variant]}

    height: 39px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    color: #F8F9FA;
    text-decoration: none;

    border-radius: 4px;
`

export const ButtonStyled = styled.button`
    ${({ variant }) => buttonVariant[variant]}

    height: 39px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    text-decoration: none;

    border-radius: 4px;

    :disabled {
        background: #59323F;
        border: 1px solid #59323F;
        cursor: inherit;
    }
`