import CreateGlobalStyle from './assets/styles/global';
import {ThemeProvider} from 'styled-components';
import theme from './assets/styles/themes/default';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CreateGlobalStyle/>
      <h1>My Contacts</h1>
    </ThemeProvider>
  );
}

export default App;
