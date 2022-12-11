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
import LoginModule from './components/LoginModule';
import Header from './components/header';

import { PrivateRoutes } from './PrivateRoutes';

function App() {
   const [{ code, user }, dispatch] = useStateProvider();
   const navigate = useNavigate();

   // const [loading, setLoading] = useState(true);

   console.log('CODE!!', code);
   console.log('USER!!', user);

   useEffect(() => {
      if (code && user) {
         navigate('/home');
      }
      if (!code) {
         const code = new URLSearchParams(window.location.search).get('code');
         // localStorage.setItem('spotifyToken', code);
         dispatch({ type: reducerCases.SET_CODE, code });
         navigate('/');
      }
      if (code && !user) {
         const checkUser = async () => {
            const userAuth = await authService.isauth();
            console.log('userAuth', typeof userAuth.auth);
            if (userAuth.auth === true) {
               dispatch({ type: reducerCases.SET_USER, user });
               navigate('/home');
            } else {
               navigate('/');
            }
         };
         checkUser();
      }
   }, [code, dispatch, user]);

   return (
      <>
         <GlobalStyles />
         <Header code={code} />

         <>
            <Routes>
               <Route path='/' element={<LandingPage />} />
               <Route path='/login' element={<LoginPage />} />

               <Route path='/register' element={<RegisterPage />} />

               <Route path='/home' element={<PrivateRoutes />}>
                  <Route
                     path='/home'
                     element={<HomePage code={code} user={user} />}
                  />
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
                  <Route path='*' element={<NotFoundPage />} />
               </Route>
            </Routes>
         </>
      </>
   );
}

export default App;
