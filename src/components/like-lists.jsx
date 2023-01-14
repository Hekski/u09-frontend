import React from 'react';
import styled from 'styled-components';
import { cardShadow, hoverEffect, themeColor } from './utils';
import { useState } from 'react';
import { Spinner } from '../styled-components/spinner-styled';
import { useStateProvider } from '../context/state-provider';
import { TiDeleteOutline } from 'react-icons/ti';
import songService from '../services/song-service';
import { useEffect } from 'react';
import { reducerCases } from '../context/constants';

function Likelists({ cookie }) {
   const [{ user }, dispatch] = useStateProvider();
   const currentUser = JSON.parse(user);
   const [isLoading, setIsLoading] = useState(true);
   const [message, setMessage] = useState(false);
   const [likes, setLikes] = useState([]);
   const [uri, setUri] = useState('');

   useEffect(() => {
      if (uri) {
         const track = uri;
         dispatch({ type: reducerCases.SET_TRACK, track });
      }
   }, [uri]);

   useEffect(() => {
      const fetchLikesListAsync = async () => {
         const response = await songService.getLikes(currentUser.data._id);
         console.log(response);
         setLikes(
            response.data.data.map((like, i) => {
               return {
                  title: like.title,
                  artist_id: like.artist_id,
                  artist: like.artist,
                  uri: like.uri,
                  albumUrl: like.albumUrl,
               };
            })
         );
      };
      setIsLoading(false);
      fetchLikesListAsync();
   }, []);

   const handleDelete = async (e, index) => {
      const trackToDelete = currentUser.data.likedSongs[index]._id;
      const res = await songService.removelikeFunction(
         trackToDelete,
         currentUser.data._id
      );
      console.log(res.message);

      // setMessage(res.data.message);
   };

   return (
      <YourLikelists>
         {isLoading ? (
            <Spinner />
         ) : (
            <>
               {likes.map((like, index) => (
                  <Likelist key={like[index]}>
                     <Avatar onClick={() => setUri(like.uri)}>
                        <img src={like.albumUrl} alt='artist' />
                     </Avatar>
                     <Detail>
                        <Title onClick={() => setUri(like.uri)}>
                           {like.title}
                        </Title>
                        <SubTitle>{like.artist}</SubTitle>
                     </Detail>
                     <Right onClick={(e) => handleDelete(e, index)}>
                        <TiDeleteOutline />
                     </Right>
                  </Likelist>
               ))}
            </>
         )}
      </YourLikelists>
   );
}

const YourLikelists = styled.div`
   color: ${({ theme }) => theme.colors.cardtext};
   background-color: ${({ theme }) => theme.colors.card};
   /* border: 1px solid #333; */
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

const Likelist = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: 0.3rem;
`;
const Avatar = styled.div`
   cursor: pointer;
   transition: 0.3s ease-in-out;
   &:hover {
      opacity: 0.6;
      box-shadow: ${hoverEffect};
   }
   img {
      height: 4rem;
      width: 4rem;
   }
`;
const Detail = styled.div`
   cursor: pointer;
   margin-left: 1rem;
`;
const Title = styled.h3`
   font-weight: 500;
   transition: 0.3s ease-in-out;
   &:hover {
      opacity: 0.6;
      box-shadow: ${hoverEffect};
   }
   @media screen and (min-width: 320px) and (max-width: 1080px) {
      font-size: 1rem;
   }
`;

const SubTitle = styled.h5`
   font-weight: 300;
   transition: 0.3s ease-in-out;
   &:hover {
      opacity: 0.6;
      box-shadow: ${hoverEffect};
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

export default Likelists;
