import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useStateProvider } from '../context/state-provider';
import { reducerCases } from '../context/constants';

import SpotifyWebApi from 'spotify-web-api-node';
import useAuth from '../services/Auth/useAuth';
import songService from '../services/song-service';
import TrackSearchResult from '../components/track-search-result';
import Dropdown from '../components/dropdown2';
import { MainPlayer } from '../styled-components/player-styled';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { AdminIcon } from '../styled-components/icons-styled';
import { CogIcon } from '../styled-components/icons-styled';
import { themeColor } from '../styled-components/theme';
import { Link } from 'react-router-dom';
import Badge from '../components/badge';

const spotifyApi = new SpotifyWebApi({
  clientId: 'e6304c3c0c68483f97c808463497441b',
});

function PlayerModule() {
  const [{ code }] = useStateProvider();
  const [{ user }, dispatch] = useStateProvider();
  const accessToken = useAuth(code);
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
    setLike(false);
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
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
      <NavbarContainer>
        <Text>
          <span>Hello There, {user.data.name}</span>
          {user.data.isAdmin ? <Badge content='Admin' /> : ''}
          {user.data.isAdmin ? (
            <Link to='/home/admin'>
              <AdminIcon />
            </Link>
          ) : (
            ''
          )}
          <Link to={`/home/profile/${user.data._id}`}>
            <CogIcon />
          </Link>
        </Text>
        <SearchContainer>
          <Search>
            <Icon>
              <FiSearch />
              <Input
                type='search'
                placeholder=' search...'
                value={searchKey}
                onChange={function (e) {
                  setSearchKey(e.target.value);
                }}
              />
            </Icon>
          </Search>
        </SearchContainer>
      </NavbarContainer>
      <SubContainer>
        {message ? <Message>{message}</Message> : ''}
        <ArtistContainer>
          <IconContainer>
            <HeartIcon onClick={handleLike}>
              {like ? <AiFillHeart /> : <AiOutlineHeart />}
            </HeartIcon>
          </IconContainer>
          <TextContainer>
            <Text>{playingTrack ? playingTrack.artist : ''}</Text>
            <SongText>{playingTrack ? playingTrack.title : ''}</SongText>
          </TextContainer>
          {!playingTrack ? '' : <Img src={playingTrack.albumUrl} />}
        </ArtistContainer>
        <MainPlayer accessToken={accessToken} trackUri={playingTrack?.uri} />

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
    </>
  );
}

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;
  @media screen and (min-width: 445px) and (max-width: 1080px) {
    margin-bottom: 1rem;
    flex-direction: row;
  }
  @media screen and (min-width: 300px) and (max-width: 444px) {
    flex-direction: column;
  }
`;
const ArtistContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 0.8rem;
  justify-content: space-between;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 1rem;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 0;
    margin-top: 1rem;
    justify-content: flex-end;
  }
`;

export const Search = styled.section`
  border-radius: 50px;
  padding: 10px 20px;
  background-color: ${({ bg }) => bg || '#fff'};
  & > input {
    font-size: 14px;
    max-height: 38px;
    border: none;
    text-transform: capitalize;
    color: ${({ color }) => color || '#333'};
  }
  @media screen and (min-width: 300px) and (max-width: 445px) {
    width: 100%;
  }
`;

const SubContainer = styled.div`
  /* background-color: ${themeColor}; */
  border: 1px solid ${themeColor};
  background: rgb(2, 0, 36);
  background: linear-gradient(
    0deg,
    rgba(2, 0, 36, 1) -100%,
    ${themeColor},
    rgba(0, 212, 255, 0) 100%
  );
  margin: 0rem 2rem 2rem 0rem;
  padding: 1rem;
  border-radius: 2rem;
  width: 100%;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: start;
`;
const HeartIcon = styled.div`
  display: flex;
  cursor: pointer;
  svg {
    fill: #000;
    height: 4rem;
    width: 4rem;

    &:hover {
      fill: #fff;
      transition: 0.4s ease-in-out;
    }
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  justify-content: center;
  align-items: center;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
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
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  color: #464646;

  &:focus {
    border: none;
    outline: none;
  }
`;

export default PlayerModule;
