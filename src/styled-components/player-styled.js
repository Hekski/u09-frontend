import styled from 'styled-components';
import Player from '../components/player';

export const MainPlayer = styled(Player)`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    transform: scale(1.8);
  }
`;
