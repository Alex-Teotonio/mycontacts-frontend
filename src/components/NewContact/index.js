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
            <ContactForm buttonLabel="Cadastrar" onSubmit={handleSubmit}/>
        </>
    );
}