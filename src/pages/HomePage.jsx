import React, { useEffect } from 'react';
import { useStateProvider } from '../context/state-provider';

import styled from 'styled-components';
import { useNavigate, Outlet } from 'react-router-dom';

import PlayerModule from '../components/player-module';

function HomePage({ spotifyApi }) {
   const [{ user }, dispatch] = useStateProvider();
   const navigate = useNavigate();

   useEffect(() => {
      setTimeout(() => {
         console.log('Delayed for 1 second.');
         if (user) navigate('/explore');
      }, '1000');
   }, [user]);

   return (
      <>
         <Container>
            <PlayerModule spotifyApi={spotifyApi} />
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
