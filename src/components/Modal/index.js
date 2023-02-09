import PropTypes from 'prop-types'

import { Overlay, Container, Footer } from "./style";
import {Button} from '../Button';

import  ReactDOM from 'react-dom';

export default function Modal({ danger, title, children, cancelLabel, confirmLabel, onCancel, onConfirm }) {

    return(
        ReactDOM.createPortal(
            <Overlay>
                <Container danger={danger}>
                    <h1>
                        {title}
                    </h1>
                    <div className="modal-body">
                        {children}
                    </div>
                    <Footer>
                        <button type="button" onClick={onCancel} className="cancel-button" >{cancelLabel}</button>
                        <Button type="button" onClick={onConfirm} danger={danger}>{confirmLabel}</Button>
                    </Footer>
                </Container>
            </Overlay>,
            document.getElementById('modal-root')
        )
    );
    
}

Modal.propTypes = {
    danger: PropTypes.bool,
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
    cancelLabel: PropTypes.string, 
    confirmLabel: PropTypes.string,
     onCancel: PropTypes.func,
     onConfirm: PropTypes.func
}

Modal.defaultProps = {
    danger: false,
    cancelLabel: 'Cancelar',
    confirmLabel: 'Confirmar'
}