import {SpinnerContaner} from './style'
import PropTypes from 'prop-types';


export default function Spinner({size}) {
  return(
    <SpinnerContaner size={size}></SpinnerContaner>
  )
}


Spinner.propTypes = {
  size: PropTypes.number
}

Spinner.defaultProps = {
  size: 32
}