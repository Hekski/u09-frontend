import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AdminIcon } from '../styled-components/icons-styled';
import Badge from '../components/badge';

import { reducerCases } from '../context/constants';
import { useStateProvider } from '../context/state-provider';

import TrackSearchResult from '../components/track-search-result';
import Dropdown from '../components/dropdown2';
import { FiSearch } from 'react-icons/fi';

import { themeColor } from '../styled-components/theme';

function PlayerModule({ spotifyApi }) {
   const [{ user, accessToken }, dispatch] = useStateProvider();
   const currentUser = JSON.parse(user);
   const [searchKey, setSearchKey] = useState('');
   const [searchResults, setSearchResults] = useState([]);
   const [playingTrack, setPlayingTrack] = useState();

   function chooseTrack(track) {
      setPlayingTrack(track);
      setSearchKey('');
   }

   useEffect(() => {
      if (playingTrack) {
         const track = playingTrack.uri;
         console.log(track);
         dispatch({ type: reducerCases.SET_TRACK, track });
      }
   }, [playingTrack]);

   useEffect(() => {
      if (!accessToken) return;
      spotifyApi.setAccessToken(accessToken);
   }, [accessToken]);

   useEffect(() => {
      if (!searchKey) return setSearchResults([]);
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

   return (
      <>
         <SubContainer>
            <Hello>
               <span>Hello There, {currentUser.data.name}</span>
               {currentUser.data.isAdmin ? <Badge content='Admin' /> : ''}
               {currentUser.data.isAdmin ? (
                  <Link to='/admin'>
                     <AdminIcon />
                  </Link>
               ) : (
                  ''
               )}
            </Hello>
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

            {/* {message ? <Message>{message}</Message> : ''} */}

            {/*             <ArtistContainer>
               <Text>{playingTrack ? playingTrack.artist : ''}</Text>
               <SongText>{playingTrack ? playingTrack.title : ''}</SongText>
               {playingTrack ? <Img src={playingTrack.albumUrl} /> : ''}
            </ArtistContainer> */}

            <Dropdown playingTrack={playingTrack} />
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
         {/* <Player accessToken={accessToken} trackUri={playingTrack?.uri} /> */}
      </>
   );
}

const SubContainer = styled.div`
   /* border: 1px solid ${themeColor}; */
   background: rgb(2, 0, 36);
   background: linear-gradient(
      0deg,
      rgba(2, 0, 36, 1) -100%,
      ${themeColor},
      rgba(0, 212, 255, 0) 100%
   );
   margin: 1rem 0rem 1rem 0rem;
   padding: 0.8rem 0.8rem 0.4rem 0.8rem;
   border-radius: 1.6rem;
   width: 100%;
`;

const Hello = styled.h4`
   color: ${({ theme }) => theme.colors.title};
   margin-bottom: 1rem;
   margin-left: 1rem;
   color: #fff;

   @media screen and (min-width: 320px) and (max-width: 1080px) {
   }
`;

const SearchContainer = styled.div`
   display: flex;
   align-items: flex-start;
   flex-direction: row;
   margin-bottom: 0.8rem;
   @media screen and (min-width: 320px) and (max-width: 1080px) {
      flex-direction: column;
   }
`;

const ArtistContainer = styled.div`
   display: flex;
   align-items: center;
   flex-direction: row;
   margin-bottom: 0.8rem;
   justify-content: space-around;
   @media screen and (min-width: 320px) and (max-width: 1080px) {
      flex-direction: column;
   }
`;

const Search = styled.section`
   border-radius: 50px;
   padding: 10px 20px;
   width: 100%;
   background-color: ${({ bg }) => bg || '#000'};
   margin-right: 0.8rem;
   & > input {
      font-size: 16px;
      max-height: 38px;
      border: none;
      text-transform: capitalize;
      color: ${({ color }) => color || '#fff'};
   }
   @media screen and (min-width: 300px) and (max-width: 1080px) {
      width: 100%;
      justify-content: flex-end;
   }
`;

const Text = styled.h1`
   color: ${({ theme }) => theme.colors.title};
   display: flex;
   align-items: center;
   justify-content: center;

   span {
      font-weight: 500;
      color: #333;
   }
   @media screen and (min-width: 320px) and (max-width: 1080px) {
      margin-top: 1rem;
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
      color: #fff;
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
   color: #fff;
   background-color: transparent;

   &:focus {
      border: none;
      outline: none;
   }
   &::placeholder {
      color: #fff;
      margin-left: 6px;
   }
`;

export default PlayerModule;
