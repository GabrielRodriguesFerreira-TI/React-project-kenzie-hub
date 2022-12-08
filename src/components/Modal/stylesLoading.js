import styled from "styled-components";

export const DivCenter = styled.div`
    margin-top: 10px;

    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    min-height: 18vh;
`

export const Ring = styled.div`
    position: absolute;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    animation: ring 2s linear infinite;

    @keyframes ring {
    0%{
        transform: rotate(0deg);
        box-shadow: 1px 5px 2px #e65c00;
    }
    50%{
        transform: rotate(180deg);
        box-shadow: 1px 5px 2px #18b201;
    }
    100%{
        transform: rotate(360deg);
        box-shadow: 1px 5px 2px #0456c8;
    }

    :before{
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(255, 255, 255, .3);
    }
}
`

export const SpanLoading = styled.span`
    color: white;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 1px;
    line-height: 200px;
    animation: text 3s ease-in-out infinite;

    @keyframes text{
    50%{
        color: #212529;
    }
}
`