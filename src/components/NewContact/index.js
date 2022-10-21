import PageHeader from "../PageHeader";
import ContactForm from "../ContactForm";

export default function NewContact() {
    return (
        <>
            <PageHeader title='Novo Contato'/>
            <ContactForm buttonLabel="Cadastrar"/>
        </>
    );
}