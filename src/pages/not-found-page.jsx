import React from 'react';
import styled from 'styled-components';
import { FcBrokenLink } from 'react-icons/fc';
import { Button } from '../styled-components/button-styled';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
   return (
      <>
         <Container>
            <Title>Page not found!</Title>
            <SubTitle>Maybe you lost your Spotify connection...</SubTitle>
            <Chart>
               <FcBrokenLink />
            </Chart>
            <Link to='/'>
               <Button>Home</Button>
            </Link>
         </Container>
      </>
   );
}

const Container = styled.div`
   border-bottom-right-radius: 2rem;
   border-top-right-radius: 2rem;
   /* width: 70%; */
   margin-top: 4rem;
   display: flex;
   flex-direction: column;
   align-items: center;

   Button {
      margin-top: 2rem;
      font-size: 1rem;
      padding: 10px 20px;
   }

   @media screen and (min-width: 320px) and (max-width: 1080px) {
   }
`;

const Chart = styled.div`
   display: flex;
   justify-content: center;
   svg {
      height: 14rem;
      width: 14rem;
      margin-top: 2rem;
   }
`;

const Title = styled.h1`
   font-weight: 700;
   text-align: center;
   color: ${({ theme }) => theme.colors.text};

   @media screen and (min-width: 320px) and (max-width: 1080px) {
   }
`;
const SubTitle = styled.h4`
   font-weight: 400;
   font-size: 14px;
   text-align: center;
   color: ${({ theme }) => theme.colors.text};
   margin-top: 1rem;

   @media screen and (min-width: 320px) and (max-width: 1080px) {
   }
`;
