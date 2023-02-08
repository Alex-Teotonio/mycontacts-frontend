import { StyledButton } from "./style";
import Spinner from "../Spinner";
import PropTypes from 'prop-types'
export  function Button({type, isLoading,children }) {
  return (
    <StyledButton type={type} disabled={isLoading}>
      {!isLoading && children}
      {isLoading && <Spinner size={16}/>}
    </StyledButton>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired
}

Button.defaultProps = {
  type: 'button',
  isLoading: false
}