import React from 'react';
import { Link } from 'react-router-dom';
import { StyledHeader, Nav, Logo } from '../styled-components/header-styled';
import { Home, Library, Heart } from '../styled-components/icons-styled';
import { Button } from '../styled-components/button-styled';
import authService from '../services/authService';

import { useStateProvider } from '../context/state-provider';

export default function Header({ code }) {
   const removeToken = async () => {
      const res = await authService.signout();
      console.log(res);
      window.location.href = '/';
   };
   return (
      <>
         <StyledHeader>
            <Nav>
               <Link to='/home'>
                  {/* <Logo src='./images/logo.svg' alt='logo' /> */}
                  <Logo>
                     <span>Hej</span>
                  </Logo>
               </Link>
               {code
                  ? [
                       <Link to='/home/explore'>
                          <Home />
                       </Link>,
                       <Link to='/home/playlists'>
                          <Library />
                       </Link>,
                       <Link to='/home/likes'>
                          <Heart />
                       </Link>,
                    ]
                  : ''}
               {code ? (
                  <Button onClick={removeToken}>Logout</Button>
               ) : (
                  <Link to='/login'>
                     <Button>Login</Button>
                  </Link>
               )}
            </Nav>
         </StyledHeader>
      </>
   );
}
