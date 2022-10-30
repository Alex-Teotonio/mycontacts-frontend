import {useState} from 'react';

export default function useErrors() {
    const [errors, setErrors] = useState([]);

    function setError({field, message}) {
        
        const isValidExists = errors.find((error) => error.field == 'email');
        
        if(isValidExists) {
            return
        }
        setErrors((prevState) => [
            ...prevState,
            {field, message}
        ])
    }

    function removeErrorsByFieldName(fieldName) {
        setErrors((prevState) => prevState.filter((error) => error.field != fieldName))
    }

    function getErrorMessageByFieldName(fieldName) {
        const errorsFilter =  errors.find((error) => error.field == fieldName);
        if (errorsFilter) {
            return errorsFilter.message
        }
    }
    return {setError, removeErrorsByFieldName, getErrorMessageByFieldName}
}