import styled, {css} from 'styled-components'

const containerVariants = {
  default: css `background-color: ${({theme}) => theme.primary.main};`,
  success: css `background-color: ${({theme}) => theme.success.main};`,
  danger: css `background-color: ${({theme}) => theme.danger.main};`,
}

export const Container  =  styled.div`
  padding: 16px 32px;
  background-color: ${({theme}) => theme.primary.main};
  color: #FFF;
  border-radius: 4px;
  box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;

  ${({type}) => containerVariants[type] || containerVariants.danger}

  img {
    margin-right: 8px;
  }

  & + & {
    margin-top: 12px;
  }
`