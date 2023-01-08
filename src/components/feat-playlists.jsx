import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Slider } from '../styled-components/slider-styled';
import { Spinner } from '../styled-components/spinner-styled';
import { Left } from '../styled-components/icons-styled';
import { Right } from '../styled-components/icons-styled';
import paginate from './paginate';
import { useStateProvider } from '../context/state-provider';
import { reducerCases } from '../context/constants';

const FeaturedPlaylists = ({ spotifyApi }) => {
   const [{ accessToken }, dispatch] = useStateProvider();
   const [loading, setLoading] = useState(true);
   const [page, setPage] = useState(0);
   const [data, setData] = useState([]);
   const [slideItems, setSlideItems] = useState([]);
   const [uri, setUri] = useState('');

   useEffect(() => {
      if (uri) {
         const track = uri;
         dispatch({ type: reducerCases.SET_TRACK, track });
      }
   }, [uri]);

   const fillPages = () => {
      if (loading) return;
      setSlideItems(data[page]);
   };

   useEffect(() => {
      const getItems = () => {
         if (!accessToken) return;
         spotifyApi.setAccessToken(accessToken);

         spotifyApi
            .getFeaturedPlaylists({
               limit: 30,
               offset: 1,
               country: 'SE',
               locale: 'sv_SE',
               timestamp: '2014-10-23T09:00:00',
            })
            .then((data) => {
               setData(
                  paginate(
                     data.body.playlists.items.map((item) => {
                        return {
                           id: item.id,
                           title: item.name,
                           uri: item.uri,
                           albumUrl: item.images[0].url,
                        };
                     })
                  )
               );
               setLoading(false);
            });
      };
      getItems();
      fillPages();
   }, [accessToken, loading, page]);

   const nextPage = () => {
      setPage((page) => page + 1);
      if (page >= data.length - 1) setPage(0);
   };

   const prevPage = () => {
      setPage((page) => page - 1);
      if (page === 0) setPage(data.length - 1);
   };

   const Cards = ({ title, albumUrl, uri }) => {
      return (
         <>
            <Card onClick={() => setUri(uri)}>
               <img src={albumUrl} alt={title} />
            </Card>
         </>
      );
   };

   return (
      <div>
         <Slider>
            {loading ? (
               <Spinner />
            ) : (
               <>
                  <section>
                     <h3>Featured playlists</h3>
                     <div>
                        <Left onClick={prevPage} />
                        <Right onClick={nextPage} />
                     </div>
                  </section>
                  <section>
                     {slideItems.map((item) => {
                        return <Cards key={item.id} {...item} />;
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

export default FeaturedPlaylists;
