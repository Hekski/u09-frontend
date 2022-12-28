import styled from 'styled-components';

export const Button = styled.button`
   max-height: 38px;

   border-radius: 50px;
   border: 1px solid #333;
   cursor: pointer;
   font-size: 16px;
   font-weight: 700;
   text-transform: capitalize;
   padding: 10px 16px;
   background-color: transparent;
   color: ${({ color }) => color || '#3CB9FF'};
   /* color: ${({ color }) => color || '#3CB9FF'}; */
   transition: 0.4s ease-in-out;

   &:hover {
      opacity: 0.8;
      transform: scale(0.98);
      background-color: ${({ color }) => color || '#162349'};
   }

   @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 12px;
      padding: 6px 10px;
   }
`;
export const LoginButton = styled.button`
   max-height: 38px;
   border-radius: 50px;
   border: 1px solid #333;
   cursor: pointer;
   font-size: 16px;
   font-weight: 700;
   text-transform: capitalize;
   padding: 10px 16px;
   background-color: transparent;
   color: ${({ color }) => color || '#3CB9FF'};
   /* color: ${({ color }) => color || '#3CB9FF'}; */
   transition: 0.4s ease-in-out;

   &:hover {
      opacity: 0.8;
      transform: scale(0.98);
      color: ${({ color }) => color || '#fff'};
      background-color: #000;
   }

   @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 12px;
      padding: 6px 10px;
   }
`;
