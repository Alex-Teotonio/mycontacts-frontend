import styled from "styled-components";

export const ContainerHeader = styled.header `
display: flex;
flex-direction: column;
align-items: center;
margin-top: 74px;
width: 100%
`

export const InputSearchContainer = styled.div `
    width: 100%;
    margin-top: 48px;

    input {
        background: #fff;
        border-radius: 25px;
        border: none;
        width: 100%;
        padding: 0px 16px;
        outline: none;
        height: 50px;

        &::placeholder {
            color: #BCBCBC;
        }
    }
`