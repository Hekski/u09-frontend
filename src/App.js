import { useEffect } from 'react';
import { useStateProvider } from './context/state-provider';
import { reducerCases } from './context/constants';
import AppTwo from './App2';

import { ThemeProvider } from 'styled-components';
import { theme } from './styled-components/theme';
import GlobalStyles from './styled-components/global';
import { Center } from './styled-components/container-styled';
import LandingPage from './pages/LandingPage';

function App() {
  const [{ code }, dispatch] = useStateProvider();
  localStorage.getItem('spotifyToken', code);

  useEffect(() => {
    if (!code) {
      const code = new URLSearchParams(window.location.search).get('code');
      dispatch({ type: reducerCases.SET_CODE, code });
    }
  }, [code, dispatch]);

  

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Center>{code ? <AppTwo /> : <LandingPage />}</Center>
    </ThemeProvider>
  );
}

export default App;
