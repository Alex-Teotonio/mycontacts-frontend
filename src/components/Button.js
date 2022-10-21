import styled from "styled-components";

export const Button = styled.button`
    height: 52px;
    border: none;
    padding: 0 16px;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    background: #5061FC;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    border-radius: 4px;
    transition: background-color 0.2 ease-in;

    &:hover {
        background: ${({ theme }) => theme.primary.light};
    }

    &:focus {
        background: ${({ theme }) => theme.primary.dark};
    }

    &[disabled] {
        background: #CCC;
        cursor: default;
    }
`