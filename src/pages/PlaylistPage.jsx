import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useStateProvider } from '../context/state-provider';

import Playlists from '../components/Playlists';
import { Button } from '../styled-components/button-styled';
import playlistService from '../services/playlist-service';

const PlaylistPage = () => {
   const [{ user }] = useStateProvider();
   const currentUser = JSON.parse(user);
   const [show, setShow] = useState(false);
   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');
   const [message, setMessage] = useState('');

   const showInputs = () => {
      !show ? setShow(true) : setShow(false);
   };

   const handleSubmit = async () => {
      const playlistData = {
         title: title,
         description: description,
      };

      await playlistService.addPlaylist(
         playlistData,
         currentUser.data._id,
         setMessage('Playlist added successfully')
      );
   };

   return (
      <SubContainer>
         <SectionOne>
            <ColumnOne1>
               <TitleText>
                  <TitleContainer>
                     Playlists
                     <AiOutlinePlusCircle onClick={showInputs} />
                  </TitleContainer>
                  {show ? (
                     <InputContainer>
                        <Input
                           placeholder='Title'
                           value={title}
                           onChange={(e) => setTitle(e.target.value)}
                        />
                        <Input
                           placeholder='Description'
                           value={description}
                           onChange={(e) => setDescription(e.target.value)}
                        />
                        <Button type='submit' onClick={handleSubmit}>
                           Add
                        </Button>
                     </InputContainer>
                  ) : (
                     ''
                  )}
               </TitleText>
               {message ? <Message>{message}</Message> : ''}
               <Playlists />
            </ColumnOne1>
         </SectionOne>
      </SubContainer>
   );
};

const SubContainer = styled.div`
   margin: 0.5rem 0;
   width: 100%;
   display: flex;
   flex-direction: column;
   gap: 4rem;
   @media screen and (min-width: 320px) and (max-width: 1080px) {
      height: 100%;
   }
`;
const TitleContainer = styled.div`
   margin: 0.5rem 0;
   width: 100%;
   display: flex;
   align-items: center;
   & > svg {
      margin-left: 1rem;
      height: 2.4rem;
      width: 2.4rem;
      cursor: pointer;
   }
   @media screen and (min-width: 320px) and (max-width: 1080px) {
      height: 100%;
   }
`;
const InputContainer = styled.div`
   margin: 0.5rem 0;
   width: 100%;
   display: flex;
   flex-direction: row;
   align-items: center;
   gap: 1rem;
   transition: var(--transition);

   @media screen and (min-width: 320px) and (max-width: 1080px) {
      height: 100%;
      flex-direction: column;
   }
`;

const Input = styled.input`
   display: flex;
   max-height: 38px;
   border-radius: 50px;

   border: none;
   padding: 0.5rem 1rem;
   border-radius: 1rem;
   background-color: rgba(146, 166, 255, 0.3);
   transition: var(--transition);

   &::placeholder {
      font-weight: bold;
      font-size: 0.8rem;
      font-weight: normal;
      /* color: ${({ color }) => color || '#3CB9FF'}; */
      color: ${({ theme }) => theme.colors.text};
   }
   @media screen and (min-width: 320px) and (max-width: 1080px) {
      width: 100%;
      flex-direction: column;
   }
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

const SectionOne = styled.div`
   display: flex;
   justify-content: space-between;
   gap: 2rem;
   width: 100%;
   @media screen and (min-width: 320px) and (max-width: 1080px) {
      flex-direction: column;
      height: max-content;
   }
`;
const ColumnOne1 = styled.div`
   display: flex;
   flex-direction: column;
   height: 115%;
   width: 100%;
   @media screen and (min-width: 320px) and (max-width: 1080px) {
      height: max-content;
      justify-content: center;
   }
`;

const TitleText = styled.h3`
   color: ${({ theme }) => theme.colors.title};
   margin: 0 1rem 1rem 1rem;
   display: flex;
   flex-direction: row;
   align-items: center;
   @media screen and (min-width: 320px) and (max-width: 1080px) {
      flex-direction: column;
   }
`;

export default PlaylistPage;
