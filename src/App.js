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

import { PrivateRoutes } from './PrivateRoutes';

function App() {
   const [{ code, user }, dispatch] = useStateProvider();
   // const currentUser = JSON.parse(user);
   const navigate = useNavigate();

   useEffect(() => {
      if (localStorage.getItem('user')) {
         const user = localStorage.getItem('user');
         dispatch({ type: reducerCases.SET_USER, user });
         console.log('WE HAVE USER IN USEEFFECT', user);
         // navigate('/home');
         return;
      }

      if (code) {
         // navigate('/home');
         return;
      }

      if (!code) {
         const code = new URLSearchParams(window.location.search).get('code');
         dispatch({ type: reducerCases.SET_CODE, code });
         localStorage.setItem('spotifyToken', code);

         console.log('GOT CODE');
      }
   }, [code, user, dispatch]);

   return (
      <>
         <GlobalStyles />
         <Header user={user} />

         <>
            <Routes>
               <Route
                  path='/home'
                  element={<HomePage code={code} user={user} />}>
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
