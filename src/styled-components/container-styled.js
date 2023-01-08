import styled from 'styled-components';

export const Container = styled.div`
   border-radius: 2rem;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   /* background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%); */
   @media screen and (min-width: 320px) and (max-width: 1080px) {
   }
`;
export const LandingContainer = styled.div`
   border-radius: 2rem;
   padding: 2rem;
   background-color: ${({ theme }) => theme.colors.card};
   margin-bottom: 2rem;

   p {
      color: ${({ theme }) => theme.colors.text};
      line-height: 1.5rem;
      font-weight: 300;
      margin-top: 1rem;
      margin-bottom: 2rem;
   }

   @media screen and (min-width: 320px) and (max-width: 1080px) {
   }
`;

export const Center = styled.div`
   max-width: 1200px;
   width: 80%;

   /*   padding: 0px 60px; */
   margin: 0 auto;
   border-radius: 2rem;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   @media screen and (min-width: 320px) and (max-width: 1080px) {
      width: 90%;
   }
`;
