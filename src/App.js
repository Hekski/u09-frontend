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

import authService from './services/authService';

import { Spinner } from './styled-components/spinner-styled';
import Header from './components/header';

import { PrivateRoutes } from './PrivateRoutes';

function App() {
   const [{ code, user }, dispatch] = useStateProvider();
   const currentUser = JSON.parse(user);
   const navigate = useNavigate();

   useEffect(() => {
      console.log(currentUser.auth);

      if (!code) {
         const code = new URLSearchParams(window.location.search).get('code');
         dispatch({ type: reducerCases.SET_CODE, code });
         console.log('!CODE');
         return;
      }

      if (code) {
         localStorage.setItem('spotifyToken', code);
         dispatch({ type: reducerCases.SET_CODE, code });
         console.log('JIPPE!');
         navigate('/login');
      }
   }, [code, user, dispatch]);

   return (
      <>
         <GlobalStyles />
         <Header code={code} />

         <>
            <Routes>
               <Route
                  path='/home'
                  element={<HomePage code={code} user={user} />}>
                  {/* <Route
                     path='/home'
                     element={<HomePage code={code} user={user} />}
                  /> */}
                  <Route path='/home/likes' element={<PrivateRoutes />}>
                     <Route path='/home/likes' element={<LikesPage />} />
                  </Route>

                  <Route path='/home/playlists' element={<PrivateRoutes />}>
                     <Route
                        path='/home/playlists'
                        element={<PlaylistPage />}></Route>
                  </Route>

                  <Route path='/home/explore' element={<PrivateRoutes />}>
                     <Route path='/home/explore' element={<ExplorePage />} />
                  </Route>

                  <Route path='/home/profile/:id' element={<PrivateRoutes />}>
                     <Route
                        path='/home/profile/:id'
                        element={<UserProfilePage />}
                     />
                  </Route>
                  <Route path='/home/admin' element={<PrivateRoutes />}>
                     <Route exact path='/home/admin' element={<AdminPage />} />
                     <Route
                        path='/home/admin/:id'
                        element={<AdminUserProfilePage />}
                     />
                  </Route>
               </Route>
               <Route path='/' element={<LandingPage />} />
               <Route path='/login' element={<LoginPage />} />
               <Route path='/register' element={<RegisterPage />} />
               <Route path='*' element={<NotFoundPage />} />
            </Routes>
         </>
      </>
   );
}

export default App;
