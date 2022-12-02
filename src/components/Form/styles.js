import styled, { css } from "styled-components";

const FormVariant = {
    login: css`
    margin: 0 10px;
    height: 502px;
    `,
    register: css`
    margin: 0 10px 25px 10px;

    padding: 50px 0px 30px 0px;

    gap: 35px;
    /* height: 902px; */

    >span {
        margin-left: 65px;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;

        color: #868E96;
    }
    `
}

export const FormStyled = styled.form`
    ${({ variant }) => FormVariant[variant]}


    position: relative;

    width: 100%;
    max-width: 360px;
    background: #212529;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

`

export const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 21px;
    padding: 0px 10px 0px 15px;

    > p {
        color: red;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
    }
`

export const DivTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Title = styled.h2`
    color: #F8F9FA;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16.439px;

    @media (min-width: 950px) {
        font-size: 20px;
    }
`

export const DivButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 0px 10px 0px 15px;

    >span {
        margin-top: 20px;

        color: #868E96;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
    }
`