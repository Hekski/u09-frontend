import React from 'react';
import styled from 'styled-components';
import { Button } from '../styled-components/button-styled';
import GetSpotify from '../components/GetSpotify';

export default function LandingPage() {
  // const navigate = useNavigate();
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
  const RESPONSE_TYPE = 'code';
  const AUTH_ENDPOINT = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

  const handleClick = async () => {
    window.location.href = AUTH_ENDPOINT;
  };

  return (
    <>
        <SubContainer>
          <Title>Main landing page?</Title>
          <GetSpotify />
        </SubContainer>
        <Button onClick={handleClick}>Login to Spotify</Button>
    </>
  );
}

const Title = styled.h1`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-top: 1rem;
  }
`;


const SubContainer = styled.div`
  margin: 0.5rem 0;
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 320px) and (min-width: 1080px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
