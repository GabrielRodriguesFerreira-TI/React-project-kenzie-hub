import styled from "styled-components";

export const BoxSelect = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    
    width: 100%;
`

export const SelectStyled = styled.select`
    width: 100%;
    height: 46px;
    border-radius: 4px;
    padding-left: 10px;

    color: #868E96;
    background: #343B41;
    border: 0.973988px solid #343B41;


    ${({ errorSelect }) => errorSelect && "border: 0.5px solid red;"}

    :focus {
        outline: 1px solid #F8F9FA;
        background: #343B41;
    }

    > optgroup {
        display: flex;
        flex-direction: column;
        gap: 5px;

        font-size: 15px;
        color: #F8F9FA;
    }
`

export const LabelStyled = styled.label`
    color: #F8F9FA;

    font-size: 16px;
    font-family: 'Inter', sans-serif;
`