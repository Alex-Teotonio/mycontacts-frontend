import { useEffect } from "react";

import { Container } from "./style";
import  PropTypes from 'prop-types'
import XcircleIcon from '../../../assets/images/x-circle.svg';
import checkCircleIcon from '../../../assets/images/check-circle.svg';
export default function ToastMessage({id, text, type,duration, onRemoveMessage}) {


  useEffect(
    () => {
      const timeoutId = setTimeout(
        () => {
          onRemoveMessage(id)
        },
        duration || 7000
      )

    return () => {
      clearTimeout(timeoutId)
    }
    },
    [id,duration,onRemoveMessage]
  )

  function handleRemoveToast() {
    onRemoveMessage(id)
  }
  return (
    <Container type={type} onClick={handleRemoveToast} tabIndex={0} role="button">
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
  duration: PropTypes.number,
  onRemoveMessage: PropTypes.func
}

ToastMessage.defaultProps =  {
  type: 'default'
}