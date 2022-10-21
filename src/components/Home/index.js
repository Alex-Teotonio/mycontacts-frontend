import {Container, Header,ListContacts, Card, InputSearchContainer} from './style';


import arrow from '../../assets/images/arrow.svg';
import edit from '../../assets/images/edit.svg';
import trash from '../../assets/images/trash.svg';

export default function Home () {
    return (
        <>
        <InputSearchContainer>
            <input type="text" placeholder="Pesquise seu nome"></input>
        </InputSearchContainer>
        <Container>
            <Header>
                <strong> 3 contatos</strong>
                <a href='/'>Novo contato</a>
            </Header>

            <ListContacts>
                <button type='button'>
                    <span>Nome</span>
                    <img src={arrow}></img>
                </button>
            </ListContacts>


            <Card>
                <header>
                    <span> Mateus Silva</span>
                    <small> Instagram</small>
                </header>

                <main>
                    <div className='info'>
                        <span>mateus@devacademy.com.br</span>
                        <span>(41) 99999-9999</span>
                    </div>

                    <div className='actions'>
                            <a href='/'>
                                <img src={edit}></img>
                            </a>

                            <button type='button'>
                                <img src={trash}></img>                                
                            </button>
                    </div>
                </main>
                </Card>

                <Card>
                <header>
                    <span> Mateus Silva</span>
                    <small> Instagram</small>
                </header>

                <main>
                    <div className='info'>
                        <span>mateus@devacademy.com.br</span>
                        <span>(41) 99999-9999</span>
                    </div>

                    <div className='actions'>
                            <a href='/'>
                                <img src={edit}></img>
                            </a>

                            <button type='button'>
                                <img src={trash}></img>                                
                            </button>
                    </div>
                </main>
                </Card>

                <Card>
                <header>
                    <span> Mateus Silva</span>
                    <small> Instagram</small>
                </header>

                <main>
                    <div className='info'>
                        <span>mateus@devacademy.com.br</span>
                        <span>(41) 99999-9999</span>
                    </div>

                    <div className='actions'>
                            <a href='/'>
                                <img src={edit}></img>
                            </a>

                            <button type='button'>
                                <img src={trash}></img>                                
                            </button>
                    </div>
                </main>
                </Card>
        </Container>
        </>
    );
}