import React from 'react';
import styled from 'styled-components';

export default function NotFoundPage() {
  return (
    <>
      <Container>
        <Title>Page not found!</Title>
      </Container>
    </>
  );
}

const Container = styled.div`
  /* background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%); */
  border-bottom-right-radius: 2rem;
  border-top-right-radius: 2rem;
  /* width: 70%; */
  top: 0;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
  }
`;

const Title = styled.h1`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};

  @media screen and (min-width: 320px) and (max-width: 1080px) {
  }
`;
