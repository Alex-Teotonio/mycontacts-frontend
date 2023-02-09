import { useEffect, useRef, useState } from "react";
import PageHeader from "../PageHeader";
import ContactForm from '../ContactForm';
import { useParams } from "react-router-dom";
import ContactsService from "../../services/ContactsService";
import Loader from '../../components/Loader';
import toast from '../../utils/toast'


export default function EditContact() {
    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const contactFormRef = useRef(null);

    useEffect(() => {

        async function loadContact() {
            try {
                const contactData = await ContactsService.getContactById(id);
                contactFormRef.current.setFieldsValues(contactData[0])
                setIsLoading(false)
            } catch(e) {
                setIsLoading(false)
                // history.push('/')
                toast({
                    type: 'danger',
                    text: 'Contato não encontrado!'
                })
            }
        }
        loadContact()
    })
    function handleUpdate() {

    }
    return (
        <>
            <Loader isLoading={isLoading}></Loader>
            <PageHeader title="Editar Alex Barbosa"/>
            <ContactForm ref={contactFormRef} buttonLabel="Salvar alterações" onSubmit={handleUpdate} />
        </>
    );
}