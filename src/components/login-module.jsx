import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../styled-components/button-styled';
import authService from '../services/authService';
import { Link } from 'react-router-dom';

function LoginModule() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [message, setMessage] = useState('');

   const loginData = {
      email: email,
      password: password,
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      if (!email || !password) {
         setMessage('Please fill in both fields');
         return;
      }

      let user = await authService.loginFunction(loginData);

      if (user.auth === true) {
         localStorage.setItem('user', JSON.stringify(user));
         localStorage.setItem('token', JSON.stringify(user.jwttoken));
         setMessage(user.message);
         window.location = '/';
      }
      if (user.auth === false) return;
   };

   return (
      <LoginContainer>
         <Inputform>
            <Container>
               <Title>Whats your email?</Title>
               <Input
                  placeholder='Email *'
                  name='email'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required={true}
               />
            </Container>
            <Container>
               <Title>Enter your password</Title>
               <Input
                  placeholder='Password *'
                  name='password'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required={true}
               />
            </Container>
            <Button type='submit' onClick={handleSubmit}>
               Login
            </Button>

            {message ? <Message>{message}</Message> : ''}
            <Link to='/register'>
               <Thin>No account?</Thin> <Fat>Sign up here!</Fat>
            </Link>
         </Inputform>
      </LoginContainer>
   );
}

const LoginContainer = styled.div`
   border-radius: 1rem;
   background-color: ${({ theme }) => theme.colors.card};
   color: ${({ theme }) => theme.colors.text};
   transition: 0.4s ease-in-out;

   button {
      margin-bottom: 1rem;
   }
   @media screen and (min-width: 320px) and (max-width: 1080px) {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
   }
`;

const Inputform = styled.div`
   display: flex;
   flex-direction: column;
   padding: 2rem;

   @media screen and (min-width: 320px) and (max-width: 1080px) {
      margin: 0;
   }
`;
const Input = styled.input`
   display: flex;
   width: 100%;
   align-items: center;
   border: none;
   justify-content: space-around;
   padding: 0.5rem 1rem;
   border-radius: 1rem;
   background-color: rgba(146, 166, 255, 0.3);

   &::placeholder {
      font-size: 0.8rem;
      font-weight: normal;
      /* color: ${({ color }) => color || '#3CB9FF'}; */
      color: ${({ theme }) => theme.colors.text};
   }
`;

const Container = styled.div`
   display: flex;
   align-items: start;
   margin-bottom: 1rem;
   flex-direction: column;
   gap: 0.8rem;

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

   animation: signup-response 0.5s 1;
   -webkit-animation: signup-response 0.5s 1;
   animation-fill-mode: forwards;

   animation-delay: 2s;
   -webkit-animation-delay: 1s; /* Safari and Chrome */
   -webkit-animation-fill-mode: forwards;

   @keyframes signup-response {
      from {
         opacity: 1;
      }
      to {
         opacity: 0;
      }
   }
   @-webkit-keyframes signup-response {
      from {
         opacity: 1;
      }
      to {
         opacity: 0;
      }
   }
`;

const Fat = styled.span`
   font-weight: 700;
   color: ${({ theme }) => theme.colors.shine};
`;
const Thin = styled.span`
   font-weight: 300;
   color: ${({ theme }) => theme.colors.shine};
`;

export default LoginModule;
