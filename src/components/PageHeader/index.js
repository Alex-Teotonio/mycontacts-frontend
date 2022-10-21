import { Container } from "./style";
import {Link} from 'react-router-dom';
import propTypes from 'prop-types'

import arrow from '../../assets/images/arrow.svg';

export default function PageHeader({ title }) {
    return(
        <Container>
            <Link to='/'>
                <img src={arrow}></img>
                <span>Voltar</span>
            </Link>
            <h1>{title}</h1>
        </Container>
    );
}

PageHeader.propTypes = {
    title: propTypes.string.isRequired,
};