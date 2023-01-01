import { useEffect, useState } from 'react';
import { Slider } from '../styled-components/slider-styled';
import { Spinner } from '../styled-components/spinner-styled';
import { Left } from '../styled-components/icons-styled';
import { Right } from '../styled-components/icons-styled';
import paginate from './paginate';

const FeaturedPlaylists = ({ spotifyApi, code }) => {
   const [loading, setLoading] = useState(true);
   const [page, setPage] = useState(0);
   const [data, setData] = useState([]);
   const [slideItems, setSlideItems] = useState([]);
   const accessToken = spotifyApi._credentials.accessToken;

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
            <article>
               <img src={albumUrl} alt={title} />
               <h6>{title}</h6>
               <p>{title}</p>
            </article>
         </>
      );
   };

   return (
      <div>
         <Slider>
            <section>
               <h3>Featured playlists</h3>
               <div>
                  {loading ? <Spinner /> : ''}
                  {!loading && (
                     <>
                        <Left onClick={prevPage} />
                        <Right onClick={nextPage} />
                     </>
                  )}
               </div>
            </section>
            <section>
               {slideItems.map((item) => {
                  return <Cards key={item.id} {...item} />;
               })}
            </section>
         </Slider>
      </div>
   );
};

export default FeaturedPlaylists;
