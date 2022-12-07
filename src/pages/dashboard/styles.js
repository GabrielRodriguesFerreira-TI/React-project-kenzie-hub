import styled from "styled-components";

export const ContainerStyled = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`

export const DivHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    width: 100%;
    margin-top: 30px;

    @media (min-width: 950px) {
        flex-direction: row;
        align-items: center;
        gap: 20px;
    }
`

export const SpanLine = styled.div`
    margin-top: 30px;
    width: 100%;
    height: 0.5px;
    background: #212529;
`

export const Title = styled.h2`
    padding: 15px 0px 15px 10px;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #F8F9FA;

    @media (min-width: 950px) {
        font-size: 22px;
    }
`

export const SpanStyled = styled.span`
    padding: 15px 10px 15px 10px;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: #868E96;

    @media (min-width: 950px) {
        font-size: 15px;
        padding: 15px 10px 15px 0px;
    }
`

export const DivContent = styled.div`
    margin-top: 20px;
    width: 100%;

    display: flex;
    flex-direction:column;
    align-items:center;
    gap: 21px;
`

export const ContentHeader = styled.div`
    width: 100%;
    max-width: 780px;

    display: flex;
    justify-content: space-between;

    h2 {
        margin-left: 10px;

        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 18px;
        color: #F8F9FA;
    }

    i {
        margin-right: 10px;

        width: 32px;
        height: 32px;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        font-weight: 800;
        background: #212529;
        color: #FFFFFF;
        border-radius: 4px;

        cursor: pointer;
    }
`

export const DivPadding = styled.div`
    width: 100%;
    max-width: 780px;
    display: flex;
    justify-content:center;
`