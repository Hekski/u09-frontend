import styled from 'styled-components';
import { IoStatsChart } from 'react-icons/io5';

export const StyledHeader = styled.header`
   background-color: ${({ theme }) => theme.colors.header};
   padding-top: 20px;
   color: ${({ color }) => color || '#000'};
   align-items: space-between;
   max-width: 940px;
   width: 100%;

   @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 100%;
   }
`;

export const Nav = styled.nav`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 40px;

   @media (max-width: ${({ theme }) => theme.mobile}) {
      flex-direction: row;
      margin-bottom: 0px;
   }
`;

export const Logo = styled(IoStatsChart)`
   transform: scale(2.2);
   color: #fff;

   cursor: pointer;

   & > span {
      color: #fff;
   }
   @media (max-width: ${({ theme }) => theme.mobile}) {
      transform: scale(1.2);
   }
`;
