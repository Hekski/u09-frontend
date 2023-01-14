import styled from 'styled-components';
import { AiOutlineHeart } from 'react-icons/ai';
import { useStateProvider } from '../context/state-provider';

function Likes() {
   const [{ user }] = useStateProvider();
   const currentUser = JSON.parse(user);

   return (
      <LikeCard>
         <CardContent>
            <Chart>
               <AiOutlineHeart />
            </Chart>
            <Like>{currentUser.data.likedSongs.length} likes</Like>
         </CardContent>
      </LikeCard>
   );
}

const LikeCard = styled.div`
   width: 100%;
   max-height: 12rem;
   padding: 1rem;
   border-radius: 1rem;
   color: white;
`;

const CardContent = styled.div`
   margin: 1rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   @media screen and (min-width: 320px) and (max-width: 1080px) {
      flex-direction: row;
   }
`;

const Chart = styled.div`
   display: flex;
   justify-content: center;
   svg {
      height: 4rem;
      width: 4rem;
   }
`;

const Like = styled.h2`
   text-align: center;
   margin: 0.8rem;
`;

export default Likes;
