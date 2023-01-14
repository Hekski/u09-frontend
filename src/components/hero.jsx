import React from 'react';
import styled from 'styled-components';

import { Image } from '../styled-components/header-styled';
import { LandingContainer } from '../styled-components/container-styled';
import { Flex } from '../styled-components/flex-styled';
import { Button } from '../styled-components/button-styled';

export default function Hero() {
   return (
      <>
         <LandingContainer>
            <Flex>
               <TextContainer>
                  <HeroLogo src='./images/logo.svg' alt='logo' />
                  <h2>A simplified Spotify interface</h2>
                  <p>
                     An easy-to-use Spotify interface for the when the need for
                     the most basic functionality is key.
                  </p>
                  <Button>Get started for free</Button>
               </TextContainer>
               <Image src='./images/illustration-mockups.png' alt='' />
            </Flex>
         </LandingContainer>
      </>
   );
}

export const TextContainer = styled.div`
   color: ${({ theme }) => theme.colors.text};
   text-align: left;
   line-height: 1.5rem;
   p {
      font-weight: 300;
      margin-top: 1rem;
      margin-bottom: 2rem;
   }
   @media (max-width: ${({ theme }) => theme.mobile}) {
      margin-bottom: 40px;
   }
`;

export const HeroLogo = styled.img`
   margin-top: 2rem;
   margin-bottom: 1rem;
   @media (max-width: ${({ theme }) => theme.mobile}) {
      margin-bottom: 40px;
   }
`;
