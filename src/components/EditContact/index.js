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
    const [contactName, setContactName] = useState('')
    const contactFormRef = useRef(null);

    useEffect(() => {

        async function loadContact() {
            try {
                const contactData = await ContactsService.getContactById(id);
                contactFormRef.current.setFieldsValues(contactData[0])
                setIsLoading(false);
                setContactName(contactData.name)
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
    async function handleUpdate(formData) {
        try{
            const newContact = {
                name: formData.name, 
                email: formData.email,
                phone: formData.phone,
                category_id: formData.category
            }
            const contactUpdate = await ContactsService.updateContacts(id, newContact);

            console.log(contactUpdate)
            setContactName(contactUpdate.name)
            toast({
                type: 'success',
                text: 'Contato editado com sucesso',
                duration: 3000
            });
        } catch(e) {
            toast({
                type: 'danger',
                text: 'Ocorreu um erro',
                duration: 3000
            });
        }
    }
    return (
        <>
            <Loader isLoading={isLoading}></Loader>
            <PageHeader title={isLoading ? '...Carregando' : `Editar ${contactName}`}/>
            <ContactForm ref={contactFormRef} buttonLabel="Salvar alterações" onSubmit={handleUpdate} />
        </>
    );
}