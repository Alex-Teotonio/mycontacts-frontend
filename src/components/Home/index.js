import {Container, Header,ListContacts, Card, InputSearchContainer, ErrorContainer} from './style';


import arrow from '../../assets/images/arrow.svg';
import edit from '../../assets/images/edit.svg';
import trash from '../../assets/images/trash.svg';
import sad from '../../assets/images/sad.svg';
import Loader from '../../components/Loader';
import {Button} from '../../components/Button';

import { Link } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';

import formatPhone from '../../utils/formatPhone';
import ContactsService from '../../services/ContactsService';

export default function Home () {
    const [contacts, setContacts] = useState([]);
    const [orderBy, setOrderBy] = useState('asc');
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false)

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

    function handleTryAgain() {
        loadContacts()
    }

    const filterdContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <Container>
            <Loader isLoading={isLoading}/>
            <InputSearchContainer>
                <input type="text" onChange={handleChangeSearchTerm} placeholder="Pesquise seu nome"></input>
            </InputSearchContainer>
            <Header hasError={hasError}>
                {
                    !hasError && <strong>{`${filterdContacts.length} ${filterdContacts.length == 1 ? 'contato' : 'contatos'}`}</strong>
                }   
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
                        <ListContacts orderBy={orderBy}>
                            <button type='button' onClick={handleToggleOrderBy}>
                                <span>Nome</span>
                                <img src={arrow}></img>
                            </button>
                        </ListContacts>

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

                                                <button type='button'>
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