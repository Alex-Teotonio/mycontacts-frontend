import {Container, Header,ListContacts, Card, InputSearchContainer} from './style';


import arrow from '../../assets/images/arrow.svg';
import edit from '../../assets/images/edit.svg';
import trash from '../../assets/images/trash.svg';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import formatPhone from '../../utils/formatPhone';

export default function Home () {
    const [contacts, setContacts] = useState([])
    useEffect(() => {
        fetch('http://localhost:3003/contacts')
            .then(async(response) => {
                const arrayContacts = await response.json()
                console.log(arrayContacts)
                setContacts(arrayContacts);
            })
            .catch((error) => {
                console.log('erro', error)
            })
    },[]);

    console.log(contacts)
    return (
        <Container>
            <InputSearchContainer>
                <input type="text" placeholder="Pesquise seu nome"></input>
            </InputSearchContainer>
            <Header>
                <strong>{`${contacts.length} ${contacts.length == 1 ? 'contato' : 'contatos'}`}</strong>
                <Link to='/new'>Novo contato</Link>
            </Header>

            <ListContacts>
                <button type='button'>
                    <span>Nome</span>
                    <img src={arrow}></img>
                </button>
            </ListContacts>

            {
                contacts.map((contact) => (
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
        </Container>
    );
}