import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Slider } from '../styled-components/slider-styled';
import { Spinner } from '../styled-components/spinner-styled';
import { Left } from '../styled-components/icons-styled';
import { Right } from '../styled-components/icons-styled';
import paginate from './paginate';
import Player from '../components/player';

const Singles = ({ spotifyApi }) => {
   const [loading, setLoading] = useState(true);
   const [page, setPage] = useState(0);
   const [data, setData] = useState([]);
   const [slideItems, setSlideItems] = useState([]);
   const accessToken = spotifyApi._credentials.accessToken;

   const handleClick = (uri) => {
      console.log(uri);
      Player(accessToken, uri);
   };

   const fillPages = () => {
      if (loading) return;
      setSlideItems(data[page]);
   };

   useEffect(() => {
      const getItems = () => {
         if (!accessToken) return;
         spotifyApi.setAccessToken(accessToken);

         spotifyApi
            .getNewReleases({ limit: 30, offset: 0, country: 'SE' })
            .then((res) => {
               setData(
                  paginate(
                     res.body.albums.items.map((track) => {
                        return {
                           id: track.id,
                           artist: track.artists[0].name,
                           title: track.name,
                           uri: track.uri,
                           singleUrl: track.images[0].url,
                        };
                     })
                  )
               );
               setLoading(false);
            });
      };
      getItems();
      fillPages();
   }, [accessToken, loading, page, spotifyApi]);

   const nextPage = () => {
      setPage((page) => page + 1);
      if (page >= data.length - 1) setPage(0);
   };

   const prevPage = () => {
      setPage((page) => page - 1);
      if (page === 0) setPage(data.length - 1);
   };

   return (
      <div>
         <Slider>
            {loading ? (
               <Spinner />
            ) : (
               <>
                  <section>
                     <h3>New singles</h3>
                     <div>
                        <Left onClick={prevPage} />
                        <Right onClick={nextPage} />
                     </div>
                  </section>
                  <section>
                     {slideItems.map((item) => {
                        return (
                           <Card
                              key={item.id}
                              {...item}
                              onClick={() => handleClick(item.uri)}>
                              <img src={item.singleUrl} alt={item.title} />
                           </Card>
                        );
                     })}
                  </section>
               </>
            )}
         </Slider>
      </div>
   );
};

const Card = styled.article`
   img {
      height: 140px;
      border-radius: 10px;
   }
   p {
      font-size: 12px;
      font-weight: 200;
   }

   @media screen and (min-width: 320px) and (max-width: 1080px) {
      img {
         height: 100px;
         border-radius: 10px;
      }
      h6 {
         font-size: 12px;
      }
      p {
         font-size: 12px;
         font-weight: 200;
      }
   }
`;

export default Singles;
