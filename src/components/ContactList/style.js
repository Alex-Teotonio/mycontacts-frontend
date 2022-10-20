import styled from "styled-components";

export const Container = styled.div `
    margin-top: 32px;
`

export const Header = styled.header `
    display: flex;
    align-items: center;
    justify-content: space-between;
    strong {
        font-size: 24px;
    }

    a {
        font-weight: bold;
        color: ${({theme}) => theme.primary.main};
        border: 2px solid ${({theme}) => theme.primary.main};
        border-radius: 4px;
        padding: 8px 16px;
        text-decoration: none;

        &:hover {
            background-color: ${({theme}) => theme.primary.main };
            color: #FFF;
        }
    }
`