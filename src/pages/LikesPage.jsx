import React from 'react';
import styled from 'styled-components';

import Likes from '../components/Likes';
import Likelists from '../components/Likelists';

const LikesPage = () => {
  return (
    <Container>
      <SubContainer>
        <SectionOne>
          <ColumnOne1>
            <Likes />
          </ColumnOne1>
          <ColumnTwo1>
            <TitleText>Your Likes</TitleText>
            <Likelists />
          </ColumnTwo1>
        </SectionOne>
      </SubContainer>
    </Container>
  );
};

const Container = styled.div`
  border-radius: 2rem;
  top: 0;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const SubContainer = styled.div`
  margin: 0.5rem 0;
  height: 80%;
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
  height: 40%;
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
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
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

export default LikesPage;
