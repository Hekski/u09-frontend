import { useEffect, useState } from 'react';
import { useStateProvider } from './context/state-provider';
import { reducerCases } from './context/constants';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import GlobalStyles from './styled-components/global';

import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PlaylistPage from './pages/PlaylistPage';
import ExplorePage from './pages/ExplorePage';
import HomePage from './pages/HomePage';
import UserProfilePage from './pages/UserProfilePage';
import AdminUserProfilePage from './pages/AdminUserProfilePage';
import AdminPage from './pages/AdminPage';
import LikesPage from './pages/LikesPage';
import NotFoundPage from './pages/NotFoundPage';

import { Spinner } from './styled-components/spinner-styled';
import Header from './components/header';
import Message from './components/message';
import SpotifyWebApi from 'spotify-web-api-node';

import { PrivateRoutes } from './PrivateRoutes';

const spotifyApi = new SpotifyWebApi({
   clientId: process.env.REACT_APP_CLIENT_ID,
});

function App() {
   const [{ code, user }, dispatch] = useStateProvider();
   // const currentUser = JSON.parse(user);
   const navigate = useNavigate();

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

      /*       if (code) {
         return;
      } */
   }, [code, user, dispatch]);

   return (
      <>
         <GlobalStyles />
         <Header user={user} />
         <Message />
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
