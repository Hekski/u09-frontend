import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import authService from './services/authService';
import { useStateProvider } from './context/state-provider';
import { reducerCases } from './context/constants';

import GlobalStyles from './styled-components/global';
import { Spinner } from './styled-components/spinner-styled';

import Header from './components/header';
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

import { PrivateRoutes } from './PrivateRoutes';

function AppTwo() {
  const [{ code }] = useStateProvider();
  const [{ user }, dispatch] = useStateProvider();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = authService.isauth();
    // setUser(JSON.parse(localStorage.getItem('userInfo', user)));
    dispatch({ type: reducerCases.SET_USER, user });
    setLoading(false);
  }, [dispatch]);

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        {code ? <Header code={code} /> : ''}
        {loading ? (
          <Spinner />
        ) : (
          <Routes>
            <>
              <Route path='*' element={<NotFoundPage />} />
              <Route path='/' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />
            </>
            <>
              <Route
                path='/home'
                element={<HomePage code={code} user={user} />}
              >
                <Route path='/home/likes' element={<PrivateRoutes />}>
                  <Route path='/home/likes' element={<LikesPage />} />
                </Route>

                <Route path='/home/playlists' element={<PrivateRoutes />}>
                  <Route
                    path='/home/playlists'
                    element={<PlaylistPage />}
                  ></Route>
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
            </>
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default AppTwo;
