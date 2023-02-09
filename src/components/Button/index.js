import { StyledButton } from "./style";
import Spinner from "../Spinner";
import PropTypes from 'prop-types'
export  function Button({type, isLoading,children, danger, onClick }) {
  return (
    <StyledButton type={type} onClick={onClick} disabled={isLoading} danger={danger}>
      {!isLoading && children}
      {isLoading && <Spinner size={16}/>}
    </StyledButton>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired, 
  danger: PropTypes.bool,
  onClick: PropTypes.func
}

Button.defaultProps = {
  type: 'button',
  isLoading: false,
  danger:false,
  onClick: undefined
}