import React from 'react';
import styled from 'styled-components';
import { Button } from '../styled-components/button-styled';
import GetSpotify from '../components/GetSpotify';
import GetLoggedin from '../components/get-loggedin';
import GetConnected from '../components/get-connected';

export default function LandingPage() {
   const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
   const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
   const RESPONSE_TYPE = 'code';
   const AUTH_ENDPOINT = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

   const handleClick = async () => {
      window.location = AUTH_ENDPOINT;
   };

   return (
      <>
         <Title>Main landing page?</Title>
         <SubContainer>
            <GetSpotify />
            <GetLoggedin />
            <GetConnected />
            {/* <Button onClick={handleClick}>Connect to Spotify</Button> */}
         </SubContainer>
      </>
   );
}

const Title = styled.h2`
   font-weight: 700;
   color: ${({ theme }) => theme.colors.text};

   @media screen and (min-width: 320px) and (max-width: 1080px) {
      margin-top: 1rem;
   }
`;

const SubContainer = styled.div`
   margin: 1rem 0;
   display: flex;
   flex-direction: row;
   gap: 2rem;
   @media screen and (min-width: 320px) and (max-width: 1080px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
   }
`;
