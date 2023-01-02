import styled from 'styled-components';
import { useState, useEffect } from 'react';

import { useStateProvider } from '../context/state-provider';
import useAuth from '../hooks/useAuth';
import songService from '../services/song-service';
import TrackSearchResult from '../components/track-search-result';
import Dropdown from '../components/dropdown2';
import { MainPlayer } from '../styled-components/player-styled';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';

import { themeColor } from '../styled-components/theme';
import Badge from '../components/badge';

function PlayerModule({ spotifyApi }) {
   const [{ code, user }, dispatch] = useStateProvider();
   const accessToken = useAuth(code);

   console.log(spotifyApi._credentials.accessToken);
   console.log(accessToken);

   const [searchKey, setSearchKey] = useState('');
   const [searchResults, setSearchResults] = useState([]);
   const [playingTrack, setPlayingTrack] = useState();
   const [message, setMessage] = useState('');
   const [like, setLike] = useState(false);

   function chooseTrack(track) {
      setPlayingTrack(track);
      setSearchKey('');

      /* 
    if (track.id) === (_id)§ of (user.user.likedSongs)
    setLike(true)
  } else {
    setLike(false) // Nollställ
  }
  
  ------
  let datan = user.user.likedSongs;
  
  const resulty = datan.map((data) => data._id);
  console.log(resulty);
  ------
  
  */
   }

   useEffect(() => {
      if (!code) {
         return;
      }

      if (!accessToken) return;
      spotifyApi.setAccessToken(accessToken);

      setLike(false);
   }, [accessToken]);

   useEffect(() => {
      if (!searchKey) return setSearchResults([]); // Nollställ array om
      if (!accessToken) return;

      let cancel = false;
      spotifyApi.searchTracks(searchKey, { limit: 6 }).then((res) => {
         if (cancel) return;
         setSearchResults(
            res.body.tracks.items.map((track) => {
               return {
                  id: track.id,
                  artist: track.artists[0].name,
                  artist_id: track.artists[0].id,
                  title: track.name,
                  uri: track.uri,
                  albumUrl: track.album.images[0].url,
               };
            })
         );
      });
      return () => (cancel = true);
   }, [searchKey, accessToken]);

   const handleLike = async () => {
      if (!playingTrack) setMessage('Search for a new song');
      if (!like && playingTrack) {
         let res = await songService.likeFunction(playingTrack, user.data._id);
         // dispatch({ type: reducerCases.SET_LIKES, likes });
         setLike(true);
         setMessage(res.data.message);
      }
      if (like && playingTrack) {
         let res = await songService.removelikeFunction(
            playingTrack,
            user.data._id
         );
         console.log(res);

         setLike(false);
         // setMessage(res.data.message);
      }
   };

   return (
      <>
         <SubContainer>
            <SearchContainer>
               <Search>
                  <Icon>
                     <FiSearch />
                     <Input
                        type='search'
                        placeholder=' Search songs, artists'
                        value={searchKey}
                        onChange={function (e) {
                           setSearchKey(e.target.value);
                        }}
                     />
                  </Icon>
               </Search>
            </SearchContainer>
            <MainPlayer
               accessToken={accessToken}
               trackUri={playingTrack?.uri}
            />

            <Dropdown playingTrack={playingTrack} />
            {/* {message ? <Message>{message}</Message> : ''} */}
            {/*             <ArtistContainer>
               <Text>{playingTrack ? playingTrack.artist : ''}</Text>
               <SongText>{playingTrack ? playingTrack.title : ''}</SongText>
               {playingTrack ? <Img src={playingTrack.albumUrl} /> : ''}
            </ArtistContainer> */}

            <section>
               <div>
                  {searchResults.map((track) => (
                     <TrackSearchResult
                        track={track}
                        key={track.uri}
                        chooseTrack={chooseTrack}
                     />
                  ))}
               </div>
            </section>
         </SubContainer>
      </>
   );
}

const SubContainer = styled.div`
   border: 1px solid ${themeColor};
   background: rgb(2, 0, 36);
   background: linear-gradient(
      0deg,
      rgba(2, 0, 36, 1) -100%,
      ${themeColor},
      rgba(0, 212, 255, 0) 100%
   );
   margin: 2rem 0rem 2rem 0rem;
   padding: 0.8rem 0.8rem 0.4rem 0.8rem;
   border-radius: 1.6rem;
   width: 100%;
`;

const SearchContainer = styled.div`
   display: flex;
   align-items: flex-start;
   flex-direction: row;
   margin-bottom: 0.8rem;
   @media screen and (min-width: 320px) and (max-width: 768px) {
      flex-direction: column;
   }
`;

const ArtistContainer = styled.div`
   display: flex;
   align-items: center;
   flex-direction: row;
   margin-bottom: 0.8rem;
   justify-content: space-around;
   @media screen and (min-width: 320px) and (max-width: 768px) {
      flex-direction: column;
   }
`;

const Search = styled.section`
   border-radius: 50px;
   padding: 10px 20px;
   width: 100%;
   background-color: ${({ bg }) => bg || '#fff'};
   margin-right: 0.8rem;
   & > input {
      font-size: 16px;
      max-height: 38px;
      border: none;
      text-transform: capitalize;
      color: ${({ color }) => color || '#333'};
   }
   @media screen and (min-width: 300px) and (max-width: 1080px) {
      width: 100%;
      justify-content: flex-end;
   }
`;

const SongText = styled.h3`
   color: ${({ theme }) => theme.colors.title};

   @media screen and (min-width: 320px) and (max-width: 1080px) {
      margin-top: 1rem;
   }
`;

const Img = styled.img`
   height: 10rem;
   width: 10rem;
   border-image: none;

   @media screen and (min-width: 320px) and (max-width: 1080px) {
      margin-top: 1rem;
   }
`;

const Icon = styled.div`
   display: flex;
   align-items: center;
   width: 100%;
   svg {
      color: #555555;
   }
`;

const Message = styled.div`
   display: flex;
   justify-content: start;
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

const Input = styled.input`
   border: none;
   width: 100%;
   border-top-right-radius: 0.5rem;
   border-bottom-right-radius: 0.5rem;
   color: #464646;

   &:focus {
      border: none;
      outline: none;
   }
`;

export default PlayerModule;
