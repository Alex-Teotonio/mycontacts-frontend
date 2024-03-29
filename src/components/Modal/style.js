import styled from "styled-components";

export const Overlay = styled.div`
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(3.5px);
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top:0;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Container = styled.div`
    max-width: 450px;
    width: 100%;
    background: #FFF;
    padding: 24px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    border-radius: 4px;

    > h1 {
        font-size: 22px;
        color: ${({theme, danger}) => danger? theme.danger.main: theme.danger.gray}
    }

    .modal-body {
        margin-top: 32px;
    }
    p {
        margin-top: 8px;
    }
`

export const Footer = styled.footer`
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .cancel-button {
        background: transparent;
        border: none;
        margin-right: 24px;
        color: ${({theme}) => theme.gray};
        font-size: 16px;
    }
`