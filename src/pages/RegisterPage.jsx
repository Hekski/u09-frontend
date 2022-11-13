import React from 'react';
import styled from 'styled-components';
import GetSpotify from '../components/GetSpotify';
import RegisterModule from '../components/RegisterModule';

const RegisterPage = () => {
  return (
      <SubContainer>
        <SectionOne>
          <ColumnOne>
            <GetSpotify />
          </ColumnOne>
          <ColumnTwo>
            <TitleText>Register</TitleText>
            <RegisterModule />
          </ColumnTwo>
        </SectionOne>
      </SubContainer>
  );
};



const SubContainer = styled.div`
  margin: 0.5rem 0;
  height: 80%;
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: 100%;
  }
`;
const SectionOne = styled.div`
  display: flex;
  justify-content: space-around;
  height: 40%;
  gap: 2rem;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    height: max-content;
  }
`;
const ColumnOne = styled.div`
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

const ColumnTwo = styled.div`
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

export default RegisterPage;
