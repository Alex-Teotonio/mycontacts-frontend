import PageHeader from "../PageHeader";
import { Input } from "../Input";
import { Select } from "../Select";
import { Button } from "../Button";

export default function NewContact() {
    return (
        <>
            <PageHeader title='Novo Contato'/>
            <Input type='text' placeholder="Nome"/>
            <Select></Select>
            <Button type="button">Salvar alterações</Button>
            <Button type="button" disabled>Salvar alterações</Button>
        </>
    );
}