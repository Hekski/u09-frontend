import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ArtistRecommendation from '../components/artist-recommendation';
import { useStateProvider } from '../context/state-provider';
import { Spinner } from '../styled-components/spinner-styled';
import { reducerCases } from '../context/constants';
import { hoverEffect } from '../styled-components/theme';

const ArtistPage = ({ spotifyApi }) => {
   const [{ accessToken, artist }, dispatch] = useStateProvider();
   const [loading, setLoading] = useState(true);
   const [artistInfo, setArtistInfo] = useState([]);
   const [albums, setAlbums] = useState([]);
   const [uri, setUri] = useState('');

   useEffect(() => {
      if (uri) {
         const track = uri;
         dispatch({ type: reducerCases.SET_TRACK, track });
      }
   }, [uri, dispatch]);

   useEffect(() => {
      if (!artist) return;
      const getItems = async () => {
         if (!accessToken) return;
         spotifyApi.setAccessToken(accessToken);

         const getArtist = await spotifyApi.getArtist(artist);
         if (getArtist) {
            setArtistInfo(getArtist.body);
         }
         setLoading(false);
      };
      getItems();
   }, [loading, artist, accessToken, spotifyApi, dispatch]);

   useEffect(() => {
      const getAlbums = async () => {
         if (!accessToken) return;
         spotifyApi.setAccessToken(accessToken);

         const albumItems = await spotifyApi.getArtistAlbums(artist, {
            limit: 5,
         });

         if (albumItems) {
            setAlbums(
               albumItems.body.items.map((album) => {
                  return {
                     name: album.name,
                     image: album.images[1].url,
                     uri: album.uri,
                     release_date: album.release_date,
                  };
               })
            );
         }
         setLoading(false);
      };
      getAlbums();
   }, [loading, artist, accessToken, spotifyApi]);

   return (
      <SubContainer>
         <SectionOne>
            {loading === true ? (
               <Spinner />
            ) : (
               <>
                  <ColumnOne1>
                     <ArtistRecommendation artist={artistInfo} />
                  </ColumnOne1>
                  <ColumnTwo1>
                     <TitleText>Popular Releases</TitleText>
                     {albums.map((album) => {
                        return (
                           <ItemsList onClick={() => setUri(album.uri)}>
                              <section>
                                 <img src={album.image} alt={album.name} />
                                 <div>
                                    <h5 key={album.uri}>{album.name}</h5>
                                    <p>{album.release_date}</p>
                                 </div>
                              </section>
                           </ItemsList>
                        );
                     })}
                  </ColumnTwo1>
               </>
            )}
         </SectionOne>
      </SubContainer>
   );
};

const SubContainer = styled.div`
   margin: 1rem 0;
   width: 100%;
   display: flex;
   flex-direction: column;
   @media screen and (min-width: 320px) and (max-width: 1080px) {
      height: 100%;
   }
`;
const SectionOne = styled.div`
   display: flex;
   justify-content: space-between;
   gap: 2rem;
   width: 100%;
   @media screen and (min-width: 320px) and (max-width: 1080px) {
      flex-direction: column;
      height: max-content;
   }
`;
const ColumnOne1 = styled.div`
   display: flex;
   flex-direction: column;
   height: 115%;
   width: 100%;
   @media screen and (min-width: 320px) and (max-width: 1080px) {
      height: max-content;
      justify-content: center;
      align-items: center;
   }
`;

const ColumnTwo1 = styled.div`
   display: flex;
   flex-direction: column;
   height: 115%;
   width: 100%;
   margin-left: 1rem;
   @media screen and (min-width: 320px) and (max-width: 1080px) {
      height: max-content;
   }
`;

const ItemsList = styled.div`
   justify-content: start;
   cursor: pointer;
   font-weight: 300;
   color: ${({ theme }) => theme.colors.title};
   margin-bottom: 1rem;

   section {
      display: flex;
      align-items: center;
   }
   div {
      margin-left: 2rem;
      display: flex;
      flex-direction: column;
      transition: 0.4s ease-in-out;
      &:hover {
         box-shadow: ${hoverEffect};
      }
   }
   p {
      /* color: ${({ theme }) => theme.colors.gray}; */
      font-size: 0.8rem;
   }

   img {
      height: 5rem;
      transition: 0.4s ease-in-out;
      &:hover {
         background-color: transparent;
         box-shadow: ${hoverEffect};
      }
   }
`;

const TitleText = styled.h3`
   color: ${({ theme }) => theme.colors.title};
   margin-bottom: 1rem;
`;
export default ArtistPage;
