import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Badge from '../components/badge';
import { cardShadow, hoverEffect } from './utils';

function ArtistRecommendation({ artist }) {
   if (!artist) return;
   return (
      <RecommendArtist>
         <CardContent>
            <InfoContainer>
               <Avatar>
                  <img src={artist.images[1].url} alt={artist.name} />
               </Avatar>
               <Info>
                  <InfoName>{artist.name}</InfoName>
                  <Badge content={artist.type} />
               </Info>
            </InfoContainer>
            <InfoContainer2>
               {artist.genres.map((item) => {
                  return <h5 key={item}>{item}</h5>;
               })}
            </InfoContainer2>
            <GenreTitle>Populartity: {artist.popularity}</GenreTitle>
            <GenreTitle>Followers: {artist.followers.total}</GenreTitle>

            {/*             <PriceContainer>
               <Price>Artist Releases</Price>
               <Badge content='Check out' glow />
            </PriceContainer> */}
         </CardContent>
      </RecommendArtist>
   );
}

const RecommendArtist = styled.div`
   width: 100%;
   color: ${({ theme }) => theme.colors.cardtext};
   background-color: ${({ theme }) => theme.colors.card};
   border: 1px solid #333;
   border-radius: 1rem;
   padding: 1rem;
   box-shadow: ${cardShadow};
   transition: 0.4s ease-in-out;

   @media screen and (min-width: 320px) and (max-width: 1080px) {
      height: max-content;
   }
`;

const CardContent = styled.div`
   padding: 0.4rem;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
`;

const InfoContainer = styled.div`
   display: flex;
   align-items: center;
`;
const InfoContainer2 = styled.div`
   margin: 1rem 1rem 1rem 0;
   text-transform: capitalize;
   display: flex;
   flex-direction: row;
   h5:nth-child(even) {
      margin-left: 1rem;
   }
`;
const Avatar = styled.div`
   margin-left: 2rem;
   margin-right: 2rem;
   img {
      height: 5rem;
      border-radius: 5rem;
   }
`;
const Info = styled.div`
   display: flex;
   flex-direction: column;
`;
const InfoName = styled.h3`
   font-weight: 500;
   margin-bottom: 0.4rem;
`;
const GenreTitle = styled.p`
   font-size: 1rem;
   font-weight: 500;
   color: #3b3b3b;
   margin-bottom: 0.5em;
`;

const PriceContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin: 0 1rem;
   padding: 0.5rem 1rem;
   border-radius: 1rem;
   background-color: rgba(146, 166, 255, 0.3);
   @media screen and (min-width: 320px) and (max-width: 1080px) {
      flex-direction: column;
      gap: 0.4rem;
   }
`;
const Price = styled.div``;

export default ArtistRecommendation;
