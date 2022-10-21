import styled from "styled-components";

export const Container  = styled.header`

    margin-bottom: 24px;
    a {
        display: flex;
        align-items: center;
        text-decoration: none ;
    }
    span {
        color: ${({theme}) => theme.primary.main};
    }

    img {
        margin-right: 8px;
        transform: rotate(-90deg);
    }

    h1 {
        font-size: 24px;
        margin-top: 8px;
    }
`