import { Container } from "./style";
import  PropTypes from 'prop-types'
import XcircleIcon from '../../../assets/images/x-circle.svg';
import checkCircleIcon from '../../../assets/images/check-circle.svg';
export default function ToastMessage({id, text, type, onRemoveMessage}) {

  function handleRemoveToast() {
    onRemoveMessage(id)
  }
  return (
    <Container type={type} onClick={handleRemoveToast}>
      {type === 'success' && <img src={checkCircleIcon}/>}
      {type === 'danger' && <img src={XcircleIcon}/>}
      <strong>{text}</strong>
    </Container>
  )
}

ToastMessage.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'success', 'danger']),
  onRemoveMessage: PropTypes.func
}

ToastMessage.defaultProps =  {
  type: 'default'
}