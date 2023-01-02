import React from 'react';
import styled from 'styled-components';
import { FcCallback } from 'react-icons/fc';
import { Button } from '../styled-components/button-styled';

import { Link } from 'react-router-dom';
import { themeColor, hoverEffect } from '../styled-components/theme';

function GetSpotify() {
   const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
   const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
   const RESPONSE_TYPE = 'code';
   const AUTH_ENDPOINT = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

   const handleClick = async () => {
      window.location = AUTH_ENDPOINT;
   };
   return (
      <FactsCard>
         <CardContent>
            <Chart>
               <FcCallback />
            </Chart>
            <FactsText>3. connect to Spotify</FactsText>
            {/* <Fact>Click button below!</Fact> */}
            <Button onClick={handleClick}>Connect to Spotify</Button>
         </CardContent>
      </FactsCard>
   );
}

const FactsCard = styled.div`
   color: ${({ theme }) => theme.colors.cardtext};
   background-color: ${({ theme }) => theme.colors.card};
   border: 1px solid ${themeColor};
   height: max-content !;
   padding: 0 1rem 0 1rem;
   border-radius: 1rem;
   transition: 0.3s;
   &:hover {
      transform: translate(0, -8px);
   }

   @media screen and (min-width: 320px) and (max-width: 1080px) {
      width: 100%;
   }
`;

const CardContent = styled.div`
   margin: 1rem;
   display: flex;
   flex-direction: column;
`;

const Title = styled.h2`
   font-weight: 700;
   color: ${({ theme }) => theme.colors.text};

   @media screen and (min-width: 320px) and (max-width: 1080px) {
      margin-top: 1rem;
   }
`;

const Chart = styled.div`
   display: flex;
   justify-content: center;
   svg {
      height: 4rem;
      width: 4rem;
   }
   @media screen and (min-width: 320px) and (max-width: 1080px) {
      svg {
         height: 3rem;
         width: 3rem;
      }
   }
`;

const FactsText = styled.h3`
   text-align: center;
   font-weight: normal;
   padding: 0.4rem 0;
   margin-bottom: 8px;
`;

export default GetSpotify;
