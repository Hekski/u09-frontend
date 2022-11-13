import React from 'react';
import styled from 'styled-components';

import ArtistRecommendation from '../components/ArtistRecommendation';
import Playlists from '../components/Playlists';

const ArtistPage = () => {
  return (
    <SubContainer>
      <SectionOne>
        <ColumnOne1>
          <TitleText>Playlists</TitleText>
          <Playlists />
        </ColumnOne1>
        <ColumnTwo1>
          <TitleText>Playlist name</TitleText>
          <ArtistRecommendation />
        </ColumnTwo1>
      </SectionOne>
    </SubContainer>
  );
};


const Container = styled.div`
  /* background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%); */
  border-radius: 2rem;
  max-width: 80%;
  top: 0;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
  }
`;

const SubContainer = styled.div`
  margin: 0.5rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
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
    align-items: center;
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
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    justify-content: center;
    align-items: center;
  }
`;

const TitleText = styled.h3`
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 1rem;
`;

const SectionTwo = styled.div`
  display: flex;
  gap: 2rem;
  height: 26vh;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    height: max-content;
    width: 100%;
  }
`;
const ColumnOne2 = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;

const ColumnTwo2 = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export default ArtistPage;
