import React from 'react';
// import { Button } from '../styled-components/button-styled';
import styled from 'styled-components';

import { BsThreeDots } from 'react-icons/bs';
import { BsFillPlayFill } from 'react-icons/bs';

const Song = () => {
  return (
    <Container>
      <Left>
        <Button /* onClick={handleChange} */>
          {/* {currentSong ? ( */}

          <BsFillPlayFill />
        </Button>
        {/* <img src={song.img} alt='song_img' /> */}
        <p>
          {/* {song.name} */}
          song.name
        </p>
      </Left>
      <Middle>
        <p>
          {/* {song.artist} */}
          song.artist
        </p>
      </Middle>
      <Right>
        {/* <Like songId={song._id} /> */}
        {/* <p>{song.duration}</p> */}
        <Button /* className={styles.menu_btn} onClick={() => setMenu(true)} */>
          <BsThreeDots />
        </Button>
        {/*  {menu && (
          <PlaylistMenu
            playlist={playlist}
            song={song}
            handleRemoveSong={handleRemoveSong}
            closeMenu={() => setMenu(false)}
          />
        )} */}
      </Right>
    </Container>
  );
};

const Container = styled.div`
  /* border-radius: 1rem; */
  border: 1px solid #333;

  background-color: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.text};

  height: 6rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: 0.4s ease-in-out;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    /* width: 80%; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  border-radius: 1rem;
  border: 1px solid #333;

  background-color: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.text};

  & > p {
    font-size: 1.4rem;
    font-weight: 500;
    margin-left: 1rem;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Middle = styled.div`
  flex: 1;

  > p {
    text-align: center;
    font-size: 1.2rem;
    margin: 0;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  flex: 1;

  p {
    margin: 0 0.5rem 0 1rem;
    font-size: 1.2rem;
  }
`;

const Button = styled.div`
  .play_btn {
    margin: 0 0.5rem;
    svg {
      width: 2rem;
      height: 2rem;
      color: var(--white);
    }
  }
`;

export default Song;
