import { useEffect, useState } from 'react';
import { Slider } from '../styled-components/slider-styled';
import { Spinner } from '../styled-components/spinner-styled';
import paginate from './paginate';
import { Left } from '../styled-components/icons-styled';
import { Right } from '../styled-components/icons-styled';
import useAuth from '../hooks/useAuth';

const Singles = ({ spotifyApi, chooseTrack, code }) => {
   const [loading, setLoading] = useState(true);
   const [page, setPage] = useState(0);
   const [data, setData] = useState([]);
   const [slideItems, setSlideItems] = useState([]);
   const accessToken = useAuth(code);

   console.log(spotifyApi);

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
                     res.body.albums.items.map((item) => {
                        return {
                           id: item.id,
                           artist: item.artists[0].name,
                           title: item.name,
                           uri: item.uri,
                           singleUrl: item.images[0].url,
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

   function handlePlay() {
      chooseTrack();
   }

   const Cards = ({ title, singleUrl, artist }) => {
      return (
         <>
            <article onClick={handlePlay}>
               <img src={singleUrl} alt={title} />
               <h6>{artist}</h6>
               <p>{title}</p>
            </article>
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
                     <h3>New singles</h3>
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

export default Singles;
