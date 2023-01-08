import styled from 'styled-components';
import React, { useEffect } from 'react';
import { useStateProvider } from '../context/state-provider';
import { reducerCases } from '../context/constants';

import { useNavigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Player from '../components/player';
import PlayerModule from '../components/player-module';

function HomePage({ spotifyApi }) {
   const [{ user, track, code }, dispatch] = useStateProvider();
   const accessToken = useAuth(code);
   const navigate = useNavigate();

   useEffect(() => {
      setTimeout(() => {
         console.log('Delayed for 1 second.');
         if (user) navigate('/explore');
      }, '1000');
   }, [user]);

   useEffect(() => {
      dispatch({ type: reducerCases.SET_TOKEN, accessToken });
   }, [accessToken]);

   return (
      <>
         <Container>
            <PlayerModule spotifyApi={spotifyApi} accessToken={accessToken} />
            <Player accessToken={accessToken} />
            <Outlet />
         </Container>
      </>
   );
}

const Container = styled.div`
   width: 80%;
   top: 0;
   display: flex;
   flex-direction: column;
   align-items: space-between;

   @media screen and (min-width: 320px) and (max-width: 1080px) {
      width: 100%;
   }
`;

export default HomePage;
