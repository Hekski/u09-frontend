import React from 'react';
import styled from 'styled-components';
import Badge from './Badge';
import AvatarImage from './assets/avatarImage4.jpg';
import { cardShadow, hoverEffect } from './utils';

function ArtistRecommendation() {
  return (
    <RecommendArtist>
      <CardContent>
        <Detail>
          <InfoContainer>
            <Avatar>
              <img src={AvatarImage} alt='' />
            </Avatar>
            <Info>
              <InfoName>Artist name</InfoName>
              <InfoUpdate>Some info</InfoUpdate>
            </Info>
          </InfoContainer>
          <Badge content='Genre' />
        </Detail>
        <Title>Artist that formed the essential sound of rock and roll</Title>
        <ArtistInfo>
          Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Numquam, sed veniam placeat voluptas
          dolorem quod nihil architecto ex in natus vitae aspernatur ut ad
          dicta, quis sequi alias, at modi.
        </ArtistInfo>
        <PriceContainer>
          <Price>Release</Price>
          <Badge content='Check out' clean />
        </PriceContainer>
      </CardContent>
    </RecommendArtist>
  );
}

const RecommendArtist = styled.div`
  color: ${({ theme }) => theme.colors.cardtext};
  background-color: ${({ theme }) => theme.colors.card};
  border: 1px solid #333;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    margin: 2rem 0;
  }
`;

const CardContent = styled.div`
  margin: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Detail = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.2rem;
    margin-bottom: 1rem;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Avatar = styled.div`
  margin-right: 1rem;
  img {
    height: 5rem;
    border-radius: 5rem;
  }
`;
const Info = styled.div``;
const InfoName = styled.h3`
  font-weight: 500;
`;
const InfoUpdate = styled.h5`
  font-weight: 300;
`;
const Title = styled.h4`
  font-weight: 500;
`;
const ArtistInfo = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
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
