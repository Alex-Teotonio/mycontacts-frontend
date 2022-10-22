import styled from "styled-components";

export const Container = styled.div`
& + & {
    margin-top: 16px;
}

small {
    color: ${({ theme }) => theme.danger.main};
    margin-top: 8px;
    display: block;
}
`