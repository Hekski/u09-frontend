import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { StateProvider } from './context/state-provider';
import reducer, { initialState } from './context/reducer';
import { CookiesProvider } from 'react-cookie';
import { ThemeProvider } from 'styled-components';
import { theme } from './styled-components/theme';
import { Center } from './styled-components/container-styled';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <CookiesProvider>
      <ThemeProvider theme={theme}>
         <StateProvider initialState={initialState} reducer={reducer}>
            <Center>
               <App />
            </Center>
         </StateProvider>
      </ThemeProvider>
   </CookiesProvider>
);
