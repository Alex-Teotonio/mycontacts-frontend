import PageHeader from "../PageHeader";
import ContactForm from "../ContactForm";
import ContactsService from '../../services/ContactsService'

export default function NewContact() {

    async function handleSubmit(formData) {
        try{
            const newContact = {
                name: formData.name, 
                email: formData.email,
                phone: formData.phone,
                category_id: formData.category
            }
            const response = await ContactsService.createContacts(newContact);
            console.log(response);
        } catch(e) {
            alert('erro')
        }
        
        
    }
    return (
        <>
            <PageHeader title='Novo Contato'/>
            <ContactForm buttonLabel="Cadastrar" onSubmit={handleSubmit}/>
        </>
    );
}