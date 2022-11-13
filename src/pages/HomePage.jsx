import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import PlayerModule from '../components/player-module';

function HomePage({ user, spotifyApi }) {
  return (
    <>
      <Container>
        <PlayerModule user={user} />
        <Outlet />
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 1rem;
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
