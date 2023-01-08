import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { StyledHeader, Nav } from '../styled-components/header-styled';
import {
   Home,
   Library,
   Heart,
   Record,
} from '../styled-components/icons-styled';
import { Button } from '../styled-components/button-styled';
import authService from '../services/authService';
import { CogIcon } from '../styled-components/icons-styled';

import { useStateProvider } from '../context/state-provider';

export default function Header({ user }) {
   const currentUser = JSON.parse(user);

   const logout = async () => {
      const res = await authService.signout();
      console.log('logout', res);
      localStorage.removeItem('spotifyToken');
      localStorage.removeItem('user');
      window.location = '/';
   };

   return (
      <>
         <StyledHeader>
            <Nav>
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
                       <Link to='/artist'>
                          <Record />
                       </Link>,
                    ]
                  : ''}
               <Text>
                  {user ? (
                     <>
                        <Link to={`/profile/${currentUser.data._id}`}>
                           <CogIcon />
                        </Link>
                        <Button onClick={logout}>Logout</Button>
                     </>
                  ) : (
                     ''
                  )}
               </Text>
            </Nav>
         </StyledHeader>
      </>
   );
}

const Text = styled.h1`
   color: ${({ theme }) => theme.colors.title};
   display: flex;
   align-items: center;
   justify-content: center;

   @media screen and (min-width: 320px) and (max-width: 1080px) {
   }
`;
