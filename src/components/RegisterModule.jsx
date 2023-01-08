import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { cardShadow, hoverEffect, themeColor } from './utils';
import { Button } from '../styled-components/button-styled';
import authService from '../services/authService';

function RegisterModule() {
   const [data, setData] = useState({ email: '', password: '' });
   const [email, setEmail] = useState('');
   const [name, setName] = useState('');
   const [password, setPassword] = useState('');
   const [message, setMessage] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const navigate = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();

      if (password.length < 6) {
         setMessage('Password must be at least 6 characters long');
         return;
      }

      function isValidEmail(email) {
         return /\S+@\S+\.\S+/.test(email);
      }
      if (!isValidEmail(email)) {
         setMessage('Email is invalid');
         return;
      }

      if (password !== confirmPassword) {
         setMessage('Password not confirmed');
      } else {
         const registerData = {
            name: name,
            email: email,
            password: password,
         };

         let res = await authService.registerFunction(registerData);

         setData(res);
         navigate('/');
      }
   };

   return (
      <LoginContainer>
         <Inputform>
            <Container>
               <Title>What should we call you?</Title>
               <Input
                  placeholder='Name *'
                  name='name'
                  type='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required={true}></Input>
            </Container>
            <Container>
               <Title>Whats your email?</Title>
               <Input
                  placeholder='Email *'
                  name='email'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required={true}></Input>
            </Container>
            <Container>
               <Title>Create a password</Title>
               <Input
                  placeholder='Password *'
                  name='password'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required={true}></Input>
            </Container>
            <Container>
               <Title>Confirm your password</Title>
               <Input
                  placeholder='Confirm Password *'
                  name='confirmPassword'
                  type='password'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required={true}></Input>
            </Container>
            <Button type='submit' onClick={handleSubmit}>
               register
            </Button>
            {message ? <Message>{message}</Message> : ''}
         </Inputform>
      </LoginContainer>
   );
}

const LoginContainer = styled.div`
   border-radius: 1rem;
   background-color: ${({ theme }) => theme.colors.card};
   color: ${({ theme }) => theme.colors.text};
   transition: 0.4s ease-in-out;

   @media screen and (min-width: 320px) and (max-width: 1080px) {
      display: flex;
      justify-content: center;
      align-items: center;
   }
`;

const Inputform = styled.div`
   display: flex;
   flex-direction: column;
   padding: 2rem;
   margin: 1rem 0;
   @media screen and (min-width: 320px) and (max-width: 1080px) {
   }
`;
const Input = styled.input`
   display: flex;
   align-items: center;
   border: none;
   justify-content: space-around;
   padding: 0.5rem 1rem;
   border-radius: 1rem;
   background-color: rgba(146, 166, 255, 0.3);

   &::placeholder {
      font-weight: bold;
      font-size: 0.8rem;
      font-weight: normal;
      /* color: ${({ color }) => color || '#3CB9FF'}; */
      color: ${({ theme }) => theme.colors.text};
   }

   @media screen and (min-width: 320px) and (max-width: 1080px) {
      flex-direction: column;

      gap: 0.4rem;
   }
`;

const Container = styled.div`
   display: flex;
   align-items: start;
   margin-bottom: 1rem;
   flex-direction: column;
   gap: 1rem;
   @media screen and (min-width: 320px) and (max-width: 1080px) {
      flex-direction: column;
   }
`;

const Title = styled.h4`
   font-weight: 700;
   font-size: 0.8rem;
   margin-bottom: 4px;
`;

const Message = styled.div`
   display: flex;
   justify-content: center;
   font-weight: 700;
   padding: 4px;
   font-size: 0.8rem;
   border-radius: 6px;
   margin-top: 8px;
   margin-bottom: 6px;
   background-color: ${({ theme }) => theme.colors.theme};
   color: ${({ theme }) => theme.colors.text};
`;

export default RegisterModule;
