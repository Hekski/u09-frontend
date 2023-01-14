import React from 'react';
import styled from 'styled-components';
import RegisterModule from '../components/register-module';

const RegisterPage = () => {
   return (
      <SubContainer>
         <TitleText>Register</TitleText>
         <RegisterModule />
      </SubContainer>
   );
};

const SubContainer = styled.div`
   margin: 0.5rem 0;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 2rem;
   @media screen and (min-width: 320px) and (max-width: 1080px) {
   }
`;

const TitleText = styled.h3`
   color: ${({ theme }) => theme.colors.title};
`;

export default RegisterPage;
