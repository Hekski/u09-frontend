import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function useAuth(code) {
   const navigate = useNavigate;
   const [accessToken, setAccessToken] = useState();
   const [refreshToken, setRefreshToken] = useState();
   const [expiresIn, setExpiresIn] = useState();

   useEffect(() => {
      axios
         .post(process.env.REACT_APP_SPOTIFY_AUTH_URL + '/login', {
            code,
         })
         .then((res) => {
            setAccessToken(res.data.accessToken);
            setRefreshToken(res.data.refreshToken);
            setExpiresIn(res.data.expiresIn);
            window.history.pushState({}, null, '/');
         })
         .catch(() => {
            // navigate('/');
            window.location = '/home';
         });
   }, [code]);

   useEffect(() => {
      if (!refreshToken || !expiresIn) return;
      const interval = setInterval(() => {
         axios
            .post(process.env.REACT_APP_SPOTIFY_AUTH_URL + '/refresh', {
               refreshToken,
            })
            .then((res) => {
               setAccessToken(res.data.accessToken);
               setExpiresIn(res.data.expiresIn);
            })
            .catch(() => {
               // navigate('/home');

               window.location = '/';
            });
      }, (expiresIn - 60) * 1000);

      return () => clearInterval(interval);
   }, [refreshToken, expiresIn]);

   return accessToken;
}
