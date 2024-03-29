import styled from "styled-components";

export const Select = styled.select`
    width: 100%;
    height: 52px;
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    border-radius: 4px;
    padding: 0 16px;
    outline: none;
    border: 2px solid #fff;
    transition: border 0.2s ease-in;
    font-size: 16px;
    appearance: none;

    &:focus {
        border: 2px solid ${({theme}) => theme.primary.main};
    }

    &[disabled] {
        background-color: ${({theme}) => theme.gray[100]};
        border-color: ${({theme}) => theme.gray[200]};
    }
`