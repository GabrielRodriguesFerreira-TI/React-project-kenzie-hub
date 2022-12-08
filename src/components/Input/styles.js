import styled from "styled-components";

export const BoxInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    position: relative;

    width: 100%;

    i {
        position: absolute;
        top: 40px;
        right: 20px;

        color: #ffffffa6;

        cursor: pointer;
    }
`

export const InputSyled = styled.input`
    width: 95%;
    height: 39px;
    padding-left: 10px;

    color: #F8F9FA;
    background: #343B41;
    border: 0.973988px solid #343B41;
    border-radius: 3.19812px;

    font-family: 'Inter', sans-serif;

    ${({ errorInput }) => errorInput && "border: 0.5px solid red;"}

    :focus {
        outline: 1px solid #F8F9FA;
        background: #343B41;
    }

    :focus::placeholder {
        color: #F8F9FA;
    }

    ::placeholder {
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        line-height: 21px;
        color: #868E96;
    }

    :disabled {
        color: #868E96;
    }
`

export const LabelStyled = styled.label`
    color: #F8F9FA;

    font-size: 16px;
    font-family: 'Inter', sans-serif;
`