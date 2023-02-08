import CreateGlobalStyle from '../../assets/styles/global';
import {ThemeProvider} from 'styled-components';
import theme from '../../assets/styles/themes/default';
import {Container} from './style';
import {BrowserRouter} from 'react-router-dom'
import Routes from '../../Routes';
import ToastContainer from '../Toast/ToastContainer';

import Header from '../Header';
// import ContactList from '../ContactList';
export default function App() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <ToastContainer/>
      <CreateGlobalStyle/>
      <Container>
        <Header/>
        {/* <ContactList/> */}
          <Routes/>
      </Container>
    </ThemeProvider>
        </BrowserRouter>
  );
}