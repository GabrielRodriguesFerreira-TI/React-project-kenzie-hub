import styled, { css } from "styled-components";

const HeaderVariant = {
    register: css`
        max-width: 370px;
        justify-content:space-between;
        align-items: center;
    `,

    login: css`
    justify-content:center;
    `,

    dashBoard: css`
    width: 100%;
    justify-content:space-between;
    `
}

export const HeaderStyled = styled.header`
    ${({ variant }) => HeaderVariant[variant]}

    width: 100%;
    display: flex;

    > h1 {

        color: #FF577F;
        font-size: 22px;
        font-family: 'Inter', sans-serif;
        font-weight: 700;

        @media (min-width: 950px) {
            font-size: 30px;
        }
    }

`

export const DivPadding = styled.div`
    width: 100%;
    display: flex;
    justify-content:space-between;
    align-items: center;

    > h1 {
        margin-left: 10px;

        width: 50%;
        color: #FF577F;
        font-size: 22px;
        font-family: 'Inter', sans-serif;
        font-weight: 700;

        @media (min-width: 950px) {
            font-size: 30px;
        }
    }

`