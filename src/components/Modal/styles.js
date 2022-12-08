import styled, { css } from "styled-components";

const buttonVariant = {
    delete: css`
    width: 35%;
    background: #868E96;
    border: 1.2182px solid #868E96;
    color: #FFFFFF;
    transition: 0.5s ease-in-out;

    :hover {
        background: #343B41;
        border: 1.2182px solid #343B41;
    }
    `,

    toSave: css`
    width: 55%;
    background: #FF577F;
    border: 1px solid #FF577F;
    color: #FFFFFF;
    transition: 0.5s ease-in-out;

    :hover {
        background: #FF427F;
        border: 1px solid #FF427F;
    }
    `
}

export const DivWrapper = styled.div`
    position: fixed;

    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(0, 0, 0, 0.250);
    z-index: 1000;
`

export const ModalContent = styled.div`
    margin: 0 10px;

    position: relative;
    top: -30px;

    width: 100%;
    max-width: 370px;

    background: #212529;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    padding-bottom: 15px;

    animation: FadeIn 0.5s ease 0s 1 normal forwards;

@keyframes FadeIn {
0% {
    opacity: 0;
    transform: translateY(-250px);
}

100% {
    opacity: 1;
    transform: translateY(0);
 }
}
`

export const ModalHeader = styled.div`
    width: 100%;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background: #343B41;
    border-radius: 4px 4px 0px 0px;

    h2 {
        margin-left: 15px;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 24px;
        color: #F8F9FA;
    }

    i {
        margin-right: 15px;
        font-family: 'Nunito', sans-serif;
        font-style: normal;
        font-weight: 600;
        color: #868E96;

        cursor: pointer;
    }
`

export const FormModal = styled.form`
    margin: 20px 10px 0px 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    p {
        position: relative;
        right: 110px;

        color: red;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
    }

`

export const ButtonForm = styled.button`
    ${({ variant }) => buttonVariant[variant]}


    height: 48px;
    border-radius: 4.06066px;

    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;

    :disabled {
        cursor: inherit;
    }
`

export const DivButtonForm = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`