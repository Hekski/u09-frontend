import styled from 'styled-components';

export const Button = styled.button`
   border: 1px solid #333;
   cursor: pointer;
   font-weight: bold;
   font-size: 1rem;
   text-transform: capitalize;
   padding: 0.5rem 1rem;
   border-radius: 1rem;
   background-color: transparent;
   color: ${({ color }) => color || '#3CB9FF'};
   transition: 0.4s ease-in-out;

   &:hover {
      opacity: 0.8;
      transform: scale(0.98);
      background-color: ${({ color }) => color || '#162349'};
   }

   @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 0.8rem;
      padding: 0.5rem 1rem;
   }
`;
