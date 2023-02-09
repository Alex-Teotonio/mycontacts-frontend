import PageHeader from "../PageHeader";
import ContactForm from "../ContactForm";
import ContactsService from '../../services/ContactsService';
import toast from "../../utils/toast";
import { useRef } from "react";

export default function NewContact() {

    const contactFormRef = useRef(null)

    async function handleSubmit(formData) {
        try{
            const newContact = {
                name: formData.name, 
                email: formData.email,
                phone: formData.phone,
                category_id: formData.category
            }
            await ContactsService.createContacts(newContact);

            contactFormRef.current.resetFields()
            toast({
                type: 'success',
                text: 'Contato cadastrado com sucesso',
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
            <PageHeader title='Novo Contato'/>
            <ContactForm buttonLabel="Cadastrar" onSubmit={handleSubmit} ref={contactFormRef}/>
        </>
    );
}