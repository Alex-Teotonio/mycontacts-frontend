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

export const ListContacts = styled.div `
    margin-top: 32px;
    display: flex;
    align-items: center;
    margin-bottom: 8px ;

    button {
        border: none;
        background: transparent;
    }

    span {
        color: ${({theme}) => theme.primary.main};
        font-weight: 700;
    }

    img {
        margin-left: 8px;
    }
`
export const Card = styled.div `

    background-color: #fff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    border-radius: 4px;
    padding: 16px;

    header {
        display: flex;
        align-items: center;
        span {
            font-weight: bold;
            margin-right: 8px;
        }

        small {
            background: ${({theme}) => theme.primary.lighter};
            color: ${({theme}) => theme.primary.main};
            padding: 4px    ;
            border-radius: 4px;
            text-transform: uppercase;
        }
    }

    main {

        display: flex;
        align-items: center;
        justify-content: space-between;
        .info {
            span {
                display: block;
                margin-bottom: 4px
            }
        }

        .actions  {
            align-items: center;

            button {
                background: transparent;
                border: none;
                margin-left: 8px;
            }
        }
    }

    & {
        margin-bottom: 16px;
    }

`