import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { Spinner } from '../styled-components/spinner-styled';
import { useStateProvider } from '../context/state-provider';
import { TiDeleteOutline } from 'react-icons/ti';
import './utils/btn.css';
import playlistService from '../services/playlist-service';

import songService from '../services/song-service';

function Playlists() {
   const [{ user }] = useStateProvider();
   const currentUser = JSON.parse(user);
   const [isLoading, setIsLoading] = useState(true);
   const [message, setMessage] = useState(false);
   const [songs, setSongs] = useState([]);
   const [value, setValue] = useState(null);
   const [playlists, setPlaylists] = useState([]);
   const [playlistsSongs, setPlaylistsSongs] = useState([]);

   //  console.log(user.data._id);
   useEffect(() => {
      const fetchPlayListAsync = async () => {
         const response = await playlistService.getPlaylistsById(
            currentUser.data._id
         );
         setPlaylists(
            response.data.data.map((playlist, i) => {
               return {
                  title: playlist.title,
                  description: playlist.description,
                  songs: playlist.songs,
               };
            })
         );
      };
      setIsLoading(false);
      fetchPlayListAsync();
   }, []);

   const handleDelete = async (e, index) => {
      const trackToDelete = currentUser.data.likedSongs[index]._id;
      console.log(trackToDelete, index);

      let res = await songService.removelikeFunction(
         trackToDelete,
         currentUser.data._id,
         console.log(res)
      );

      // setMessage(res.data.message);
   };

   return (
      <YourPlaylists>
         <ItemWrapper>
            {playlists.map((playlist, index) => {
               return (
                  <PlaylistItems>
                     <Playlist>
                        <button
                           key={playlist._id}
                           onClick={() => {
                              setPlaylistsSongs(() => playlists[index].songs);
                              setValue(index);
                           }}
                           className={`job-btn ${
                              index === value && 'active-btn'
                           }`}>
                           <Detail>
                              <Title>{playlist.title}</Title>
                              <SubTitle>{playlist.description} </SubTitle>
                           </Detail>
                        </button>
                     </Playlist>
                  </PlaylistItems>
               );
            })}
         </ItemWrapper>

         {isLoading ? (
            <Spinner />
         ) : (
            <>
               <PlaylistContainer>
                  {playlistsSongs.map((song, index) => (
                     <Song key={song[index]}>
                        <Avatar>
                           <img src={song.albumUrl} alt='artist' />
                        </Avatar>
                        <Detail>
                           <Title>{song.artist}</Title>
                           <SubTitle>{song.title}</SubTitle>
                        </Detail>
                        <Right onClick={(e) => handleDelete(e, index)}>
                           <TiDeleteOutline />
                        </Right>
                     </Song>
                  ))}
               </PlaylistContainer>
            </>
         )}
      </YourPlaylists>
   );
}

const YourPlaylists = styled.div`
   color: ${({ theme }) => theme.colors.cardtext};

   height: max-content;
   display: flex;
   flex-direction: row;
   transition: 0.4s ease-in-out;
   gap: 2rem;

   @media screen and (min-width: 320px) and (max-width: 1080px) {
      height: max-content;
      flex-direction: column;
   }
`;

const ItemWrapper = styled.div`
   background-color: ${({ theme }) => theme.colors.card};

   margin: 0;
   padding: 1rem;
   border-radius: 1rem;
   display: flex;
   width: 40%;
   height: min-content;
   flex-direction: column;
   align-items: space-between;
   @media screen and (min-width: 320px) and (max-width: 1080px) {
      width: 100%;
   }
`;
const PlaylistItems = styled.div`
   display: flex;
   justify-content: space-between;
   flex-direction: column;
   gap: 2rem;
   @media screen and (min-width: 320px) and (max-width: 1080px) {
      flex-direction: column;
      height: max-content;
   }
`;

const Song = styled.div`
   display: flex;
   justify-content: space-between;
   gap: 2rem;
   @media screen and (min-width: 320px) and (max-width: 1080px) {
      height: max-content;
   }
`;

const PlaylistContainer = styled.div`
   display: flex;
   flex-direction: column;
   padding: 1rem;
   border-radius: 1rem;
   gap: 2rem;
   height: max-content;
   width: 60%;
   @media screen and (min-width: 320px) and (max-width: 1080px) {
      flex-direction: column;
      width: 100%;
   }
`;
const Playlist = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   margin-bottom: 0.3rem;
`;
const Avatar = styled.div`
   img {
      height: 4rem;
      width: 4rem;
      border-radius: 4rem;
   }
`;
const Detail = styled.div`
   text-align: start;
`;
const Title = styled.h3`
   @media screen and (min-width: 320px) and (max-width: 1080px) {
      font-size: 1rem;
   }
`;
const SubTitle = styled.h5`
   font-weight: 300;
`;

const Right = styled.div`
   flex: 1;
   display: flex;
   justify-content: flex-end;
   padding-right: 1rem;
   cursor: pointer;
   svg {
      width: 2rem;
      height: 2rem;
   }
`;

export default Playlists;
