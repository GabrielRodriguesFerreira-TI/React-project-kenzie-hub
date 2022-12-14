import styled from "styled-components";

export const LiContent = styled.li`
    width: 95%;
    min-height: 50px;

    display: flex;
    justify-content:space-between;
    align-items:center;

    background: #121214;
    border-radius: 4px;
    transition: 0.5s ease-in-out;
    animation: SlideIn 0.5s ease 0s 1 normal forwards;

    @keyframes SlideIn {
	0% {
		opacity: 0;
		transform: translateX(250px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
}

    :hover,
    :focus{
        background: #343B41;
        span {
            color: #F8F9FA;
        }
    }

    h2 {
        margin-left: 20px;

        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 14.2123px;
        line-height: 24px;
        color: #F8F9FA;
    }

    span {
        margin-right: 20px;

        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12.182px;
        line-height: 22px;
        color: #868E96;
        transition: 0.5s ease-in-out;
    }
`