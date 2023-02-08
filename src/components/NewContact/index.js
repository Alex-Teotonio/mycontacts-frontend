import PageHeader from "../PageHeader";
import ContactForm from "../ContactForm";
import ContactsService from '../../services/ContactsService';
import toast from "../../utils/toast";

export default function NewContact() {

    async function handleSubmit(formData) {
        try{
            const newContact = {
                name: formData.name, 
                email: formData.email,
                phone: formData.phone,
                category_id: formData.category
            }
            await ContactsService.createContacts(newContact);
            toast('succes', 'Contato cadastrado com sucesso');
        } catch(e) {
            toast('danger', 'Ocorreu um erro');
        }
    }
    return (
        <>
            <PageHeader title='Novo Contato'/>
            <ContactForm buttonLabel="Cadastrar" onSubmit={handleSubmit}/>
        </>
    );
}