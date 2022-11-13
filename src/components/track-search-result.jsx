import React from 'react';
import styled from 'styled-components';
import { useStateProvider } from '../context/state-provider';
import { reducerCases } from '../context/constants';

const TrackSearchResult = ({ track, chooseTrack }) => {
  const [{ currentSong }, dispatch] = useStateProvider();

  function handlePlay() {
    const currentSong = chooseTrack(track);
    dispatch({ type: reducerCases.SET_PLAYINGTRACK, currentSong });
  }

  console.log(currentSong);

  return (
    <>
      <Item src={track.albumUrl} onClick={handlePlay}>
        <img
          src={track.albumUrl}
          style={{ height: '64px', width: '64px' }}
          alt={track.title}
        />
        <div>
          <header>
            <h4>{track.title}</h4>
          </header>
          <p>{track.artist}</p>
        </div>
      </Item>
    </>
  );
};

const Item = styled.article`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 0.8rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 1rem;
  }

  & img {
    margin-right: 1rem;
  }
`;

export default TrackSearchResult;
