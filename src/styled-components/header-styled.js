import styled from 'styled-components';

export const StyledHeader = styled.header`
   background-color: 'transparent';
   padding-top: 20px;
   color: ${({ color }) => color || '#000'};
   align-items: space-between;
   max-width: 920px;
   width: 100%;

   @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 96%;
   }
`;

export const Nav = styled.nav`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 20px;

   @media (max-width: ${({ theme }) => theme.mobile}) {
      flex-direction: row;
      margin-bottom: 0px;
   }
`;

export const Logo = styled.img`
   @media (max-width: ${({ theme }) => theme.mobile}) {
      margin-bottom: 40px;
   }
`;

export const Image = styled.img`
   width: 375px;
   margin-left: 40px;
   text-transform: capitalize;

   @media (max-width: ${({ theme }) => theme.mobile}) {
      margin: 40px 0 30px;
      width: 80%;
   }
`;
