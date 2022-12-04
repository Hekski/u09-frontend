import React from 'react';
import styled from 'styled-components';
import { FaSpotify } from 'react-icons/fa';
import { themeColor, hoverEffect } from '../styled-components/theme';

function GetSpotify() {
   return (
      <a href='https://www.spotify.com/se/premium/'>
         <FactsCard>
            <CardContent>
               <Chart>
                  <FaSpotify />
               </Chart>
               <FactsText>Spotify Premium needed</FactsText>
               <Fact>Get Spotify Here!</Fact>
            </CardContent>
         </FactsCard>
      </a>
   );
}

const FactsCard = styled.div`
   color: ${({ theme }) => theme.colors.cardtext};
   background-color: ${({ theme }) => theme.colors.card};
   border: 1px solid ${themeColor};
   height: max-content !;
   padding: 1rem;
   border-radius: 1rem;
   cursor: pointer;
   transition: 0.4s ease-in-out;
   &:hover {
      box-shadow: ${hoverEffect};
   }

   @media screen and (min-width: 320px) and (max-width: 1080px) {
      width: 100%;
   }
`;

const CardContent = styled.div`
   margin: 1rem;
`;

const Chart = styled.div`
   display: flex;
   justify-content: center;
   svg {
      height: 4rem;
      width: 4rem;
   }
`;

const FactsText = styled.h3`
   text-align: center;
   font-weight: normal;
   padding: 0.4rem 0;
`;

const Fact = styled.h2`
   text-align: center;
   padding-bottom: 1rem;
`;

export default GetSpotify;
