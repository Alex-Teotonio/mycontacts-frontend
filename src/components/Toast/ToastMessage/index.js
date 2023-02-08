import { Container } from "./style";
import  PropTypes from 'prop-types'
import XcircleIcon from '../../../assets/images/x-circle.svg';
import checkCircleIcon from '../../../assets/images/check-circle.svg';
export default function ToastMessage({text, type}) {
  return (
    <Container>
      {type === 'success' && <img src={checkCircleIcon}/>}
      {type === 'danger' && <img src={XcircleIcon}/>}
      <strong>{text}</strong>
    </Container>
  )
}

ToastMessage.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'success', 'danger'])
}

ToastMessage.defaultProps =  {
  type: 'default'
}