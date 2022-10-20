import CreateGlobalStyle from '../../assets/styles/global';
import {ThemeProvider} from 'styled-components';
import theme from '../../assets/styles/themes/default';
import {Container} from './style';

import Header from '../Header';
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CreateGlobalStyle/>
      <Container>
        <Header/>
      </Container>
    </ThemeProvider>
  );
}