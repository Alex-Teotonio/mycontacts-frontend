import styled, {css} from "styled-components";

export const StyledButton = styled.button`
    height: 52px;
    border: none;
    padding: 0 16px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
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
    
     
    ${({ theme,danger}) => danger && css`

        background: ${theme.danger.main};

        &:hover {
            background: ${theme.danger.light};
        }

        &:focus {
            background: ${theme.danger.dark};
        }

        
    `}
`;