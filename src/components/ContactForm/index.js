import {Form, ButtonContainer} from './style';

import { Input } from '../Input';
import { Select } from '../Select';
import {Button} from '../Button';

import FormGroup from '../FormGroup';

import PropTypes from 'prop-types'

export default function ContactForm({ buttonLabel}) {
    return(
        <Form>
            <FormGroup>
                <Input placeholder='Nome'/>
            </FormGroup>
            <FormGroup>
                <Input placeholder='E-mail'/>
            </FormGroup>
            <FormGroup>
                <Input placeholder='Telefone'/>
            </FormGroup>
            <FormGroup>
                <Select />
            </FormGroup>

            <ButtonContainer>
                <Button>{ buttonLabel }</Button>
            </ButtonContainer>
        </Form>
    )
}

ContactForm.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
}