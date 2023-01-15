import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StateProvider } from './context/state-provider';
import reducer, { initialState } from './context/reducer';
import { ThemeProvider } from 'styled-components';
import { theme } from './styled-components/theme';
import { Center } from './styled-components/container-styled';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <ThemeProvider theme={theme}>
      <StateProvider initialState={initialState} reducer={reducer}>
         <BrowserRouter>
            <Center>
               <App />
            </Center>
         </BrowserRouter>
      </StateProvider>
   </ThemeProvider>
);
