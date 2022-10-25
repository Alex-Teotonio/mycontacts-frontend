import {useState} from 'react';


import {Form, ButtonContainer} from './style';

import { Input } from '../Input';
import { Select } from '../Select';
import {Button} from '../Button';

import FormGroup from '../FormGroup';

import PropTypes from 'prop-types';

export default function ContactForm({ buttonLabel}) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [category, setCategory] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
    }
    return(
        <Form onSubmit={handleSubmit}>
            <FormGroup >
                <Input 
                    placeholder='Nome'
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </FormGroup>
            <FormGroup error = "O formato do e-mail é inválido">
                <Input 
                    placeholder='E-mail' error
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
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