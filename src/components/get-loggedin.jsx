import React from 'react';
import styled from 'styled-components';
import { FcHeadset } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { themeColor, hoverEffect } from '../styled-components/theme';

function GetSpotify() {
   return (
      <Link to='/login'>
         <FactsCard>
            <CardContent>
               <Title>2</Title>
               <Chart>
                  <FcHeadset />
               </Chart>
               <FactsText>Login from header or...</FactsText>
               <Fact>Get Logged in Here!</Fact>
            </CardContent>
         </FactsCard>
      </Link>
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
