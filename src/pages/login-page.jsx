import React from 'react';
import styled from 'styled-components';
import GetRegistered from '../components/get-registered';
import LoginModule from '../components/login-module';
import { Link } from 'react-router-dom';

const LoginPage = () => {
   return (
      <SubContainer>
         <SectionOne>
            <ColumnOne>
               <Link to='/register'>
                  <GetRegistered />
               </Link>
            </ColumnOne>
            <ColumnTwo>
               <TitleText>Login</TitleText>
               <LoginModule />
            </ColumnTwo>
         </SectionOne>
      </SubContainer>
   );
};

const SubContainer = styled.div`
   margin: 2rem 0;
   display: flex;
   flex-direction: column;
   gap: 4rem;
   @media screen and (min-width: 320px) and (max-width: 1080px) {
      height: 100%;
   }
`;
const SectionOne = styled.div`
   display: flex;
   justify-content: space-around;
   height: 40%;
   gap: 2rem;
   width: 100%;
   @media screen and (min-width: 320px) and (max-width: 1080px) {
      flex-direction: column;
      align-items: center;
      height: max-content;
   }
`;
const ColumnOne = styled.div`
   display: flex;
   gap: 3rem;

   @media screen and (min-width: 320px) and (max-width: 1080px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      width: 100%;
      height: 60%;
   }
`;

const ColumnTwo = styled.div`
   display: flex;
   flex-direction: column;
   height: 115%;
   width: 100%;
   @media screen and (min-width: 320px) and (max-width: 1080px) {
      height: max-content;
      justify-content: center;
      align-items: center;
   }
`;

const TitleText = styled.h3`
   color: ${({ theme }) => theme.colors.title};
   margin-bottom: 1rem;
`;

export default LoginPage;
