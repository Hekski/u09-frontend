import styled from 'styled-components';
import { themeColor2, hoverEffect } from '../styled-components/theme';

export const Button = styled.button`
   /* border: 1px solid #333; */
   border: none;
   cursor: pointer;
   font-weight: bold;
   font-size: 1rem;
   text-transform: capitalize;
   padding: 0.5rem 1rem;
   border-radius: 1rem;
   color: ${({ theme }) => theme.colors.theme};
   background: ${themeColor2};
   transition: 0.2s ease-in-out;

   &:hover {
      opacity: 0.8;
      color: ${({ theme }) => theme.colors.text};
      transform: scale(0.98);
      /* background-color: ${({ color }) => color || '#162349'}; */
      box-shadow: ${hoverEffect};
   }

   @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 0.8rem;
      padding: 0.5rem 1rem;
   }
`;
