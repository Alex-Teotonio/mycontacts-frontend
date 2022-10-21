import CreateGlobalStyle from './assets/styles/global';
import {ThemeProvider} from 'styled-components';
import theme from './assets/styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CreateGlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
