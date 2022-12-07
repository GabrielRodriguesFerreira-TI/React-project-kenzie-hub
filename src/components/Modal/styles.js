import styled from "styled-components";

export const DivWrapper = styled.div`
    position: fixed;

    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(0, 0, 0, 0.250);
`

export const ModalContent = styled.div`
    margin: 0 10px;

    position: relative;
    top: -30px;

    width: 100%;
    max-width: 370px;
    height: 342px;

    background: #212529;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
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
    }
`