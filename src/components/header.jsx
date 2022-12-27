import React from 'react';
import { Link } from 'react-router-dom';
import { StyledHeader, Nav, Logo } from '../styled-components/header-styled';
import { Home, Library, Heart } from '../styled-components/icons-styled';
import { Button } from '../styled-components/button-styled';
import authService from '../services/authService';
import { useNavigate } from 'react-router-dom';

import { useStateProvider } from '../context/state-provider';

export default function Header({ user }) {
   const navigate = useNavigate();

   const logout = async () => {
      const res = await authService.signout();
      console.log('HEEEEJ', res);
      localStorage.removeItem('spotifyToken');
      localStorage.removeItem('user');
      window.location = '/';
      //navigate('/');
   };

   return (
      <>
         <StyledHeader>
            <Nav>
               <Link to='/'>
                  {/* <Logo src='./images/logo.svg' alt='logo' /> */}
                  <Logo>
                     <span>Hej</span>
                  </Logo>
               </Link>
               {user
                  ? [
                       <Link to='/explore'>
                          <Home />
                       </Link>,
                       <Link to='/playlists'>
                          <Library />
                       </Link>,
                       <Link to='/likes'>
                          <Heart />
                       </Link>,
                    ]
                  : ''}
               {user ? (
                  <Button onClick={logout}>Logout</Button>
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
