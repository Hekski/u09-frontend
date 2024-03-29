import React, { useRef } from 'react';
import styled from 'styled-components';
import { useDetectOutsideClick } from '../hooks/useDetectOutsideClick';
import { useStateProvider } from '../context/state-provider';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { useState } from 'react';
import playlistService from '../services/playlist-service';
import { useEffect } from 'react';
import { themeColor } from '../styled-components/theme';
import songService from '../services/song-service';
import { cardShadow } from '../styled-components/theme';

export default function Dropdown({ playingTrack }) {
   const [{ user }] = useStateProvider();
   const dropdownRef = useRef(null);
   const [isActive, setIsActive] = useDetectOutsideClick(false);
   const [playlists, setPlaylists] = useState([]);
   const onClick = () => setIsActive(!isActive);
   const [message, setMessage] = useState('');
   const [like, setLike] = useState(false);

   const currentUser = JSON.parse(user);

   const handleAdd = async (playlist) => {
      const res = await playlistService.addSongToPlaylist(
         playingTrack,
         playlist.id,
         currentUser.data._id
      );
      setMessage(res.data.message);
   };

   const handleLike = async () => {
      if (!playingTrack) setMessage('Search for a new song');
      if (!like && playingTrack) {
         let res = await songService.likeFunction(
            playingTrack,
            currentUser.data._id
         );
         // dispatch({ type: reducerCases.SET_LIKES, likes });
         setLike(true);
         setMessage(res.data.message);
      }
      /*       if (like && playingTrack) {
         let res = await songService.removelikeFunction(
            playingTrack,
            currentUser.data._id
         );
         setLike(false);
         setMessage(res.data.message);
      } */
   };

   useEffect(() => {
      const fetchPlayListAsync = async () => {
         const response = await playlistService.getPlaylistsById(
            currentUser.data._id
         );
         setPlaylists(
            response.data.data.map((playlist, index) => {
               return {
                  id: playlist._id,
                  title: playlist.title,
                  index: playlist.index,
                  description: playlist.description,
                  songs: playlist.songs[index],
               };
            })
         );
      };
      fetchPlayListAsync();
   }, [isActive, message, like, playingTrack, currentUser.data._id]);

   return (
      <>
         {playingTrack ? (
            <ButtonContainer>
               <AddButton onClick={handleLike}>
                  <AiOutlineHeart />
                  <span>Like</span>
               </AddButton>
               <Button onClick={onClick}>
                  <AiOutlinePlusCircle />
                  <span>Playlist</span>
               </Button>
            </ButtonContainer>
         ) : (
            ''
         )}
         {isActive ? (
            <nav
               ref={dropdownRef}
               className={`menu ${isActive ? 'active' : 'inactive'}`}>
               <ul>
                  {playlists.map((playlist, i) => {
                     return (
                        <li key={playlist[i]}>
                           <p onClick={() => handleAdd(playlist)}>
                              {playlist.title}
                           </p>
                        </li>
                     );
                  })}
               </ul>
            </nav>
         ) : (
            ''
         )}
      </>
   );
}

const ButtonContainer = styled.div`
   border-radius: 50px;
   width: 100%;
   margin-bottom: 0.4rem;
   margin-top: 0.4rem;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   text-transform: capitalize;
   color: ${({ color }) => color || '#3CB9FF'};
   transition: 0.4s ease-in-out;
   font-size: 2rem;
   font-weight: 700;
   gap: 1rem;

   @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1rem;
      font-weight: 700;
      gap: 0.4rem;
   }
`;
const AddButton = styled.button`
   border-radius: 50px;
   width: 100%;
   border: 0px solid #333;
   cursor: pointer;
   display: flex;
   align-items: center;
   text-transform: capitalize;
   padding: 10px 20px;
   background: ${themeColor};
   box-shadow: ${cardShadow};
   color: ${({ color }) => color || '#3CB9FF'};
   transition: 0.4s ease-in-out;
   font-size: 1rem;
   font-weight: 700;
   svg {
      height: 2rem;
      width: 2rem;
      margin-right: 1rem;
   }

   &:hover {
      opacity: 0.8;
      transform: scale(0.98);
      background: ${({ color }) => color || '#162349'};
   }

   @media (max-width: ${({ theme }) => theme.mobile}) {
      padding: 8px;
      svg {
         height: 1.4rem;
         width: 1.4rem;
         margin-right: 0.8rem;
      }
   }
`;

const Button = styled.button`
   border-radius: 50px;
   width: 100%;
   border: 0px solid #333;
   cursor: pointer;
   display: flex;
   align-items: center;
   text-transform: capitalize;
   padding: 10px 20px;
   background: ${themeColor};
   box-shadow: ${cardShadow};
   color: ${({ color }) => color || '#3CB9FF'};
   transition: 0.4s ease-in-out;
   font-size: 1rem;
   font-weight: 700;

   svg {
      height: 2rem;
      width: 2rem;
      margin-right: 1rem;
   }

   &:hover {
      opacity: 0.8;
      transform: scale(0.98);
      background: ${({ color }) => color || '#162349'};
   }

   @media (max-width: ${({ theme }) => theme.mobile}) {
      padding: 8px;
      svg {
         height: 1.4rem;
         width: 1.4rem;
         margin-right: 0.8rem;
      }
   }
`;
