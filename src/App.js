import { useEffect } from 'react';
import { useStateProvider } from './context/state-provider';
import { reducerCases } from './context/constants';
import authService from './services/authService';
import Home from './home';

import GlobalStyles from './styled-components/global';
import LandingPage from './pages/LandingPage';

function App() {
   const [{ code, user }, dispatch] = useStateProvider();

   useEffect(() => {
      if (!code) {
         const code = new URLSearchParams(window.location.search).get('code');
         localStorage.setItem('spotifyToken', code);
         dispatch({ type: reducerCases.SET_CODE, code });
      }
      setUser();
   }, [code, dispatch]);
   console.log(user);

   const setAuth = () => {
      if (!user) {
         const user = authService.isauth();
         dispatch({ type: reducerCases.SET_USER, user });
      }
   };

   return (
      <>
         <GlobalStyles />
         {code ? <Home /> : <LandingPage />}
      </>
   );
}

export default App;
