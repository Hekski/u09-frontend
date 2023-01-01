import React, { useState } from 'react';
import styled from 'styled-components';

const Message = () => {
   const [message, setMessage] = useState('Hejsan hoppsan');

   return <>{message ? <MessageContainer>{message}</MessageContainer> : ''}</>;
};

export default Message;

const MessageContainer = styled.nav`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   margin-top: 1rem;
   margin-bottom: 0.8rem;
   padding: 10px;
   font-weight: 700;
   background-color: ${({ theme }) => theme.colors.shine};
`;
