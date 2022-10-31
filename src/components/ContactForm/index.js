import {useState} from 'react';


import {Form, ButtonContainer} from './style';

import { Input } from '../Input';
import { Select } from '../Select';
import {Button} from '../Button';

import FormGroup from '../FormGroup';
import useErrors from '../../hooks/useErrors';

import isEmailValid from '../../utils/emailValidate';

import PropTypes from 'prop-types';

export default function ContactForm({ buttonLabel}) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [category, setCategory] = useState("");

    const {setError, removeErrorsByFieldName, getErrorMessageByFieldName} = useErrors()

    function handleEmailChange(event) {
        setEmail(event.target.value);

        if(event.target.value && !isEmailValid(event.target.value)){
            setError(
                {field: 'email', message: 'Email inválido '}
            )
        } else {
            removeErrorsByFieldName('email')
        }

    }

    function handleNameChange(event) {
        setName(event.target.value);

        if(!event.target.value) {
            setError(
              {field: 'name', message: 'Nome é obrigatório '}
            );
        } else {
            removeErrorsByFieldName('name')
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
    }
    
    return(
        <Form onSubmit={handleSubmit} noValidate>
            <FormGroup error={getErrorMessageByFieldName('name')}>
                <Input
                    error = {getErrorMessageByFieldName('name')}
                    placeholder='Nome'
                    value={name}
                    onChange={handleNameChange}
                />
            </FormGroup>
            <FormGroup error={getErrorMessageByFieldName('email')}>
                <Input 
                    error={getErrorMessageByFieldName('email')}
                    type="email"
                    placeholder='E-mail'
                    value={email}
                    onChange={handleEmailChange}
                />
            </FormGroup>
            <FormGroup>
                <Input
                    placeholder='Telefone'
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Select 
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                >
                    <option value="">Category</option>
                    <option value="instagram">Instagram</option>
                    <option value="facebook">Facebook</option>
                </Select>
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