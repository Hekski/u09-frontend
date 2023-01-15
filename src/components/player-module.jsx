import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AdminIcon } from '../styled-components/icons-styled';
import Badge from '../components/badge';
import { reducerCases } from '../context/constants';
import { useStateProvider } from '../context/state-provider';
import TrackSearchResult from '../components/track-search-result';
import Dropdown from './dropdown';
import { FiSearch } from 'react-icons/fi';
import { themeColor, themeColor2 } from '../styled-components/theme';

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
         dispatch({ type: reducerCases.SET_TRACK, track });
      }
   }, [playingTrack, dispatch]);

   useEffect(() => {
      if (!accessToken) return;
      spotifyApi.setAccessToken(accessToken);
   }, [accessToken, spotifyApi]);

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
   }, [searchKey, accessToken, spotifyApi]);

   return (
      <>
         <SubContainer>
            <Hello>
               <span>Hello There, {currentUser.data.name}</span>
               {currentUser.data.isAdmin ? (
                  <Link to='/admin'>
                     <AdminIcon />
                     {currentUser.data.isAdmin ? <Badge content='Admin' /> : ''}
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
   background: rgb(2, 0, 36);
   background: ${themeColor2};
   margin: 1rem 0rem 1rem 0rem;
   padding: 0.8rem 0.8rem 0.4rem 0.8rem;
   border-radius: 1.6rem;
   width: 100%;
`;

const Hello = styled.h4`
   color: ${({ theme }) => theme.colors.title};
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

const Icon = styled.div`
   display: flex;
   align-items: center;
   width: 100%;
   svg {
      color: #fff;
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
