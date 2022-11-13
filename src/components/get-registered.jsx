import React from 'react';
import styled from 'styled-components';
import { FaPencilAlt } from 'react-icons/fa';
import { themeColor, hoverEffect } from '../styled-components/theme';

function GetRegistered() {
  return (
    <FactsCard>
      <CardContent>
        <Chart>
          <FaPencilAlt />
        </Chart>
        <FactsText>no account?</FactsText>
        <Fact>Register here!</Fact>
      </CardContent>
    </FactsCard>
  );
}

const FactsCard = styled.div`
  color: ${({ theme }) => theme.colors.cardtext};
  background-color: ${({ theme }) => theme.colors.card};
  border: 1px solid ${themeColor};
  padding: 1rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    padding: 0;
  }
`;

const CardContent = styled.div`
  margin: 1rem;
`;

const Chart = styled.div`
  display: flex;
  justify-content: center;
  svg {
    height: 4rem;
    width: 4rem;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-top: 1.4rem;
    svg {
      height: 2rem;
      width: 2rem;
    }
  }
`;

const FactsText = styled.h3`
  text-align: center;
  font-weight: normal;
  padding: 0.4rem 0;
  margin-top: 1rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1rem;
    margin-top: 0;
  }
`;

const Fact = styled.h2`
  text-align: center;
  padding-bottom: 1rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1rem;
  }
`;

export default GetRegistered;
