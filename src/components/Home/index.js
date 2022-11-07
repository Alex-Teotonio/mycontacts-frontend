import {Container, Header,ListContacts, Card, InputSearchContainer} from './style';


import arrow from '../../assets/images/arrow.svg';
import edit from '../../assets/images/edit.svg';
import trash from '../../assets/images/trash.svg';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import formatPhone from '../../utils/formatPhone';

export default function Home () {
    const [contacts, setContacts] = useState([]);
    const [orderBy, setOrderBy] = useState('asc');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch(`http://localhost:3003/contacts?orderBy=${orderBy}`)
            .then(async(response) => {
                const arrayContacts = await response.json()
                setContacts(arrayContacts);
            })
            .catch((error) => {
                console.log('erro', error)
            })
    },[orderBy]);

    function handleToggleOrderBy() {
        setOrderBy((prevState) => prevState == 'asc'? 'desc': 'asc')
    }

    function handleChangeSearchTerm (event) {
        setSearchTerm(event.target.value);
    }


    const filterdContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <Container>
            <InputSearchContainer>
                <input type="text" onChange={handleChangeSearchTerm} placeholder="Pesquise seu nome"></input>
            </InputSearchContainer>
            <Header>
                <strong>{`${filterdContacts.length} ${filterdContacts.length == 1 ? 'contato' : 'contatos'}`}</strong>
                <Link to='/new'>Novo contato</Link>
            </Header>

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
        </Container>
    );
}