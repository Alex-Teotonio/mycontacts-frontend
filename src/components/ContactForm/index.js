import {useEffect, useState, forwardRef, useImperativeHandle} from 'react';


import {Form, ButtonContainer} from './style';

import { Input } from '../Input';
import { Select } from '../Select';
import {Button} from '../Button';

import FormGroup from '../FormGroup';
import useErrors from '../../hooks/useErrors';

import isEmailValid from '../../utils/emailValidate';
import CategoriesService from '../../services/CategoriesService';
import formatPhone from '../../utils/formatPhone';

import PropTypes from 'prop-types';

const ContactForm = forwardRef(({ buttonLabel, onSubmit},ref) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [category, setCategory] = useState("");
    const [categoriesList, setCategoriesList] = useState([]);
    const [isLoaddingCategories, setIsLoadingCategories] = useState(true)
    const [isSubmiting, setIsSubmiting] = useState(false);

    useImperativeHandle(ref, () => ({
        setFieldsValues: (contact) => {
            setName(contact.name || '');
            setEmail(contact.email || '');
            setPhone(formatPhone(contact.phone || ''));
            setCategory(contact.category_id || '')
        },
        resetFields: () => {
            setName('');
            setEmail('');
            setPhone(formatPhone(''));
            setCategory('')
        }
    }), [])



    useEffect(() => {
        async function loadCategories() {
            try{
                setIsLoadingCategories(true)
                const categories = await CategoriesService.listCategories();
                setCategoriesList(categories)
            } catch(error){
                setIsLoadingCategories(false)
            } finally{
                setIsLoadingCategories(false)
            }
                
        }
        loadCategories();
    }, [])
    const {errors,setError, removeErrorsByFieldName, getErrorMessageByFieldName} = useErrors()
    
    const isFormValid = (name && errors.length == 0);
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

    function handlePhoneChange(event) {
        const formatedPhone = formatPhone(event.target.value)
        setPhone(formatedPhone)
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setIsSubmiting(true)
        await onSubmit({name, email, phone,category })
        setIsSubmiting(false);
        
    }
    
    return(
        <Form onSubmit={handleSubmit} noValidate>
            <FormGroup error={getErrorMessageByFieldName('name')}>
                <Input
                    error = {getErrorMessageByFieldName('name')}
                    placeholder='Nome'
                    value={name}
                    onChange={handleNameChange}
                    disabled={isSubmiting}
                />
            </FormGroup>
            <FormGroup error={getErrorMessageByFieldName('email')}>
                <Input 
                    error={getErrorMessageByFieldName('email')}
                    type="email"
                    placeholder='E-mail'
                    value={email}
                    onChange={handleEmailChange}
                    disabled={isSubmiting}
                />
            </FormGroup>
            <FormGroup>
                <Input
                    placeholder='Telefone'
                    value={phone}
                    onChange={handlePhoneChange}
                    maxLength="15"
                    disabled={isSubmiting}
                />
            </FormGroup>
            <FormGroup isLoading={isLoaddingCategories}>
                <Select 
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    disabled={isLoaddingCategories || isSubmiting}
                >
                    <option value="">Sem categoria</option>
                    {
                        categoriesList.map((c) => (
                            <option key={c.id} value={c.id}>{c.name}</option>
                        ))
                    }
                    
                </Select>
            </FormGroup>

            <ButtonContainer>
                <Button type ="submit" disabled={!isFormValid} isLoading={isSubmiting}>{ buttonLabel }</Button>
            </ButtonContainer>
        </Form>
    )

})



ContactForm.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
    onSubmit: PropTypes.func
};

export default ContactForm;