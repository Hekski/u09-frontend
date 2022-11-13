import React from 'react';
import styled from 'styled-components';
import { cardShadow, hoverEffect, themeColor } from './utils';
import { BsPlayCircle } from 'react-icons/bs';
import { useState } from 'react';
import { Spinner } from '../styled-components/spinner-styled';
import { useStateProvider } from '../context/state-provider';
import { TiDeleteOutline } from 'react-icons/ti';
import songService from '../services/song-service';
import { useEffect } from 'react';

function Playlists() {
  const [{ user }] = useStateProvider();
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState(false);
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    const fetchLikesListAsync = async () => {
      const response = await songService.getLikes(user.data._id);
      console.log(response);
      setLikes(
        response.data.data.map((like, i) => {
          return {
            title: like.title,
            artist_id: like.artist_id,
            title: like.title,
            uri: like.uri,
            albumUrl: like.albumUrl,
          };
        })
      );
    };
    setIsLoading(false);
    fetchLikesListAsync();
  }, []);

  console.log(likes);
  const handleDelete = async (e, index) => {
    const trackToDelete = user.data.likedSongs[index]._id;
    console.log(trackToDelete, index);

    let res = await songService.removelikeFunction(
      trackToDelete,
      user.data._id,
      console.log(res)
    );

    // setMessage(res.data.message);
  };

  return (
    <YourPlaylists>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {likes.map((like, index) => (
            <Playlist key={like[index]}>
              <Avatar>
                <img src={like.albumUrl} alt='artist' />
              </Avatar>
              <Detail>
                <Title>{like.artist}</Title>
                <SubTitle>{like.title}</SubTitle>
              </Detail>
              <Right onClick={(e) => handleDelete(e, index)}>
                <TiDeleteOutline />
              </Right>
            </Playlist>
          ))}
        </>
      )}
      {/* <AllPlaylists>See all Playlists</AllPlaylists> */}
    </YourPlaylists>
  );
}

const YourPlaylists = styled.div`
  color: ${({ theme }) => theme.colors.cardtext};
  background-color: ${({ theme }) => theme.colors.card};
  border: 1px solid #333;
  margin: 0;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 100%;
    margin-top: 1rem;
  }
`;

const Playlist = styled.div`
  display: flex;
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
  margin-left: 1rem;
`;
const Title = styled.h3`
  font-weight: 500;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1rem;
  }
`;
const SubTitle = styled.h5`
  font-weight: 300;
`;
const AllPlaylists = styled.h5`
  text-align: end;
  color: ${themeColor};
  margin-right: 1rem;
  cursor: pointer;
`;

const ListBody = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  text-transform: uppercase;
  border-bottom: 1px solid #333;
  margin-bottom: 1rem;
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  padding-left: 1rem;

  p {
    padding-left: 0.8rem;
    font-size: 1rem;
    margin: 0;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    padding: 0;
  }
`;
const Middle = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  p {
    font-size: 1rem;
    margin: 0;
    padding: 0;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    padding: 0;
  }
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
