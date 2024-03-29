import {Container, Header,ListContacts, Card, InputSearchContainer, ErrorContainer, EmptyListContainer,SearchNotFoundContainer} from './style';


import arrow from '../../assets/images/arrow.svg';
import edit from '../../assets/images/edit.svg';
import trash from '../../assets/images/trash.svg';
import sad from '../../assets/images/sad.svg';
import emptyBox from '../../assets/images/empty-box.svg';
import magnifierQuestion from '../../assets/images/magnifier-question.svg'
import Loader from '../../components/Loader';
import {Button} from '../../components/Button';
import Modal from '../Modal';
import toast from '../../utils/toast'

import { Link } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';

import formatPhone from '../../utils/formatPhone';
import ContactsService from '../../services/ContactsService';

export default function Home () {
    const [contacts, setContacts] = useState([]);
    const [orderBy, setOrderBy] = useState('asc');
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [isDeleteModalVisible, setIsDeleteVisible] = useState(false);
    const [contactBeingDelete, setCOntactBeingDelete] = useState([]);

    const [isLoadingDelete, setIsLoadingDelete]  = useState(true)

    const loadContacts = useCallback(async () =>{
        try{
            setIsLoading(true)
            const contactsList = await ContactsService.listContacts();
            setContacts(contactsList);
            setHasError(false)
        }
        catch(error){
            setHasError(true)
        }
        finally {
            setIsLoading(false)
        }
    },[])
        

    useEffect(() => {
        loadContacts();
    },[loadContacts]);

    function handleToggleOrderBy() {
        setOrderBy((prevState) => prevState == 'asc'? 'desc': 'asc')
    }

    function handleChangeSearchTerm (event) {
        setSearchTerm(event.target.value);
    }

    function handleOpenDeleteModal(contact) {
        setCOntactBeingDelete(contact)
        setIsDeleteVisible(true)
    }

    function handleCloseDeleteModal() {
        setIsDeleteVisible(false)
    }
    function handleTryAgain() {
        loadContacts()
    }

    async function handleConfirmDeleteContact() {
        try {
            setIsLoadingDelete(true)
            await ContactsService.deleteContacts(contactBeingDelete.id);

            setContacts(prevState => prevState.filter((contact) => contact.id !== contactBeingDelete.id))
            handleCloseDeleteModal()
            toast({
                type: 'success',
                text: 'Contato deletado com sucesso!'
            })
        }catch (e)
        {
            toast({
                type: 'danger',
                text: 'Ocorreu um erro!'
            })
        }finally {
            setIsLoadingDelete(false)
        }
    }

    const filterdContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <Container>
            <Loader isLoading={isLoading}/>
            <Modal 
                danger
                visible={isDeleteModalVisible}
                idLoading={isLoadingDelete}
                title={`Deseja realmente deletar ${contactBeingDelete.name}`}
                confirmLabel="Deletar"
                onConfirm={handleConfirmDeleteContact}
                onCancel={handleCloseDeleteModal} 
            >
                Esta ação não poderá ser desfeita!
            </Modal>
            { contacts.length > 0 && (
                <InputSearchContainer>
                    <input type="text" onChange={handleChangeSearchTerm} placeholder="Pesquise seu nome"></input>
                </InputSearchContainer>
            )}
            <Header justifyContent={hasError ? 'flex-end': (contacts.length > 0 ? 'space-between': 'center')}>
                {
                    (!hasError  && contacts.length > 0 ) && (
                     <strong>{`${filterdContacts.length} ${filterdContacts.length == 1 ? 'contato' : 'contatos'}`}</strong>
                )}   
                <Link to='/new'>Novo contato</Link>
            </Header>

            { hasError && <ErrorContainer>
                <img src={sad}></img>
                <div className="details">
                    <strong>Ocorreu um erro ao obter os seus contatos</strong>
                    <Button type="button" onClick={handleTryAgain}>Tentar Novamente</Button>
                </div>

            </ErrorContainer>
            }

            {
                !hasError && (
                    <>
                        {
                            (contacts.length < 1 && !isLoading) && (
                                <EmptyListContainer>
                                    <img src={emptyBox}></img>
                                    <p>
                                    Você ainda não tem nenhum contato cadastrado!
                                    Clique no botão <strong>”Novo contato”</strong> à cima para cadastrar o seu primeiro!
                                    </p>
                                </EmptyListContainer>
                            )
                        }

                        {
                            (contacts.length > 0 && filterdContacts.length < 1) && (
                                <SearchNotFoundContainer>
                                    <img src={magnifierQuestion}></img>
                                    <span>Nenhum resultado foi encontrado para <strong>{searchTerm}</strong></span>
                                </SearchNotFoundContainer>
                            )
                        }
                        {
                            (contacts.length > 0 && filterdContacts.length > 1) && (
                                <ListContacts orderBy={orderBy}>
                                    <button type='button' onClick={handleToggleOrderBy}>
                                        <span>Nome</span>
                                        <img src={arrow}></img>
                                    </button>
                                </ListContacts>
                            )
                        }
                        {
                            filterdContacts.map((contact) => (
                                <Card key={contact.id}>
                                    <header>
                                        <span>{contact.name}</span>
                                        { contact.category ? <small> Instagram</small> : ''}
                                    </header>

                                    <main>
                                        <div className='info'>
                                            <span>{contact.email}</span>
                                            <span>{formatPhone(contact.phone)}</span>
                                        </div>

                                        <div className='actions'>
                                                <Link to={`edit/${contact.id}`}>
                                                    <img src={edit}></img>
                                                </Link>

                                                <button onClick={()=>handleOpenDeleteModal(contact)} type='button'>
                                                    <img src={trash}></img>                                
                                                </button>
                                        </div>
                                    </main>          
                                </Card>
                        ))}
                    </>
                )
            }
        </Container>
    );
}