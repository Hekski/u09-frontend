import React from 'react';
import styled from 'styled-components';
import { Button } from '../styled-components/button-styled';
import { LandingContainer } from '../styled-components/container-styled';
import { FcHeadset } from 'react-icons/fc';
import { FaSpotify } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FcCallback } from 'react-icons/fc';
import Hero from '../components/hero';
import { StyledHeader } from '../styled-components/header-styled';

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
         <StyledHeader>
            <Hero />
            <LandingContainer>
               <Title>How to connect</Title>
               <p>
                  An easy-to-use Spotify interface for the when the need for the
                  most basic functionality is key.
               </p>
               <SubContainer>
                  <StepContainer>
                     <CardContent>
                        <SubTitle>1</SubTitle>
                        <Icon>
                           <FaSpotify />
                        </Icon>

                        <a href='https://www.spotify.com/se/signup'>
                           <Fact>Get Spotify Here!</Fact>
                        </a>
                        <FactsText>Spotify Premium needed</FactsText>
                     </CardContent>
                  </StepContainer>
                  <StepContainer>
                     <CardContent>
                        <SubTitle>2</SubTitle>
                        <Icon>
                           <FcHeadset />
                        </Icon>
                        <Fact>Log in Here!</Fact>
                        <Link to='/login'>
                           <Button>Login</Button>
                        </Link>
                     </CardContent>
                  </StepContainer>
                  <StepContainer>
                     <CardContent>
                        <SubTitle>3</SubTitle>
                        <Icon>
                           <FcCallback />
                        </Icon>
                        <Fact>connect to Spotify</Fact>
                        {/* <Fact>Click button below!</Fact> */}
                        <Button onClick={handleClick}>
                           Connect to Spotify
                        </Button>
                     </CardContent>
                  </StepContainer>
                  {/* <Button onClick={handleClick}>Connect to Spotify</Button> */}
               </SubContainer>
            </LandingContainer>
         </StyledHeader>
      </>
   );
}

/* const Container = styled.div`
   background-color: ${({ theme }) => theme.colors.card};
   height: max-content !;
   padding: 0 1rem 0 1rem;
   border-radius: 1rem;
   margin-top: 2rem;
`; */

const StepContainer = styled.div`
   color: ${({ theme }) => theme.colors.cardtext};
   background-color: ${({ theme }) => theme.colors.body};
   height: max-content !;
   padding: 0 1rem 0 1rem;
   border-radius: 1rem;

   @media screen and (min-width: 320px) and (max-width: 1080px) {
      width: 100%;
   }
`;

const CardContent = styled.div`
   margin: 1rem;
   display: flex;
   flex-direction: column;
   button {
      width: 100%;
   }
`;

const Title = styled.h2`
   font-weight: 700;
   margin: 2rem 0 2rem 0;
   color: ${({ theme }) => theme.colors.text};

   @media screen and (min-width: 320px) and (max-width: 1080px) {
      margin-top: 1rem;
   }
`;

const SubTitle = styled.h2`
   font-weight: 700;
   color: ${({ theme }) => theme.colors.text};

   @media screen and (min-width: 320px) and (max-width: 1080px) {
      margin-top: 1rem;
   }
`;
const Fact = styled.h2`
   text-align: center;
   margin-bottom: 0.4rem;
`;

const Icon = styled.div`
   display: flex;
   justify-content: center;
   margin-bottom: 0.2rem;
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
   font-weight: 200;
   font-size: 14px;
   padding: 0.4rem 0;
   margin-bottom: 4px;
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
