import { useEffect, useState } from 'react';
import { useStateProvider } from './context/state-provider';
import { reducerCases } from './context/constants';
import { Routes, Route } from 'react-router-dom';
import GlobalStyles from './styled-components/global';
import LandingPage from './pages/landing-page';
import LoginPage from './pages/login-page';
import RegisterPage from './pages/register-page';
import PlaylistPage from './pages/playlist-page';
import ArtistPage from './pages/artist-page';
import ExplorePage from './pages/explore-page';
import HomePage from './pages/home-page';
import UserProfilePage from './pages/user-profile-page';
import AdminUserProfilePage from './pages/admin-user-profile-page';
import AdminPage from './pages/admin-page';
import LikesPage from './pages/likes-page';
import NotFoundPage from './pages/not-found-page';
import Header from './components/header';
import Message from './components/message';
import SpotifyWebApi from 'spotify-web-api-node';

import { PrivateRoutes } from './PrivateRoutes';

const spotifyApi = new SpotifyWebApi({
   clientId: process.env.REACT_APP_CLIENT_ID,
});

function App() {
   const [{ code, user }, dispatch] = useStateProvider();
   const [message, setMessage] = useState();
   useEffect(() => {
      if (!code) {
         const code = new URLSearchParams(window.location.search).get('code');
         dispatch({ type: reducerCases.SET_CODE, code });
         localStorage.setItem('spotifyToken', code);
      }

      if (!user) {
         const user = localStorage.getItem('user');
         dispatch({ type: reducerCases.SET_USER, user });
         return;
      }
   }, [code, user, dispatch]);

   return (
      <>
         <GlobalStyles />
         <Header user={user} />
         {message ? <Message /> : ''}
         <>
            <Routes>
               {code ? (
                  <Route
                     path='/'
                     element={
                        <HomePage
                           code={code}
                           user={user}
                           spotifyApi={spotifyApi}
                        />
                     }>
                     <Route path='/likes' element={<PrivateRoutes />}>
                        <Route path='/likes' element={<LikesPage />} />
                     </Route>

                     <Route path='/artist' element={<PrivateRoutes />}>
                        <Route
                           path='/artist'
                           element={<ArtistPage spotifyApi={spotifyApi} />}
                        />
                     </Route>

                     <Route path='/playlists' element={<PrivateRoutes />}>
                        <Route
                           path='/playlists'
                           element={<PlaylistPage />}></Route>
                     </Route>

                     <Route path='/explore' element={<PrivateRoutes />}>
                        <Route
                           path='/explore'
                           element={
                              <ExplorePage
                                 code={code}
                                 spotifyApi={spotifyApi}
                              />
                           }
                        />
                     </Route>

                     <Route path='/profile/:id' element={<PrivateRoutes />}>
                        <Route
                           path='/profile/:id'
                           element={<UserProfilePage />}
                        />
                     </Route>
                     <Route path='/admin' element={<PrivateRoutes />}>
                        <Route exact path='/admin' element={<AdminPage />} />
                        <Route
                           path='/admin/:id'
                           element={<AdminUserProfilePage />}
                        />
                     </Route>
                  </Route>
               ) : (
                  <Route path='/' element={<LandingPage />} />
               )}

               <Route path='/login' element={<LoginPage />} />
               <Route path='/register' element={<RegisterPage />} />
               <Route path='*' element={<NotFoundPage />} />
            </Routes>
         </>
      </>
   );
}

export default App;
