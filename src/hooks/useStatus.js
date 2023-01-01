import { useState, useEffect } from 'react';
import { useStateProvider } from '../context/state-provider';

export const useStatus = () => {
   const [{ user }] = useStateProvider();
   const [loggedIn, setLoggedIn] = useState(false);
   const [isAdmin, setIsAdmin] = useState(false);
   const [checkStatus, setCheckStatus] = useState(true);
   const currentUser = JSON.parse(user);

   useEffect(() => {
      if (currentUser.auth === true) {
         setLoggedIn(true);
      } else {
         setLoggedIn(false);
      }

      setCheckStatus(false);
   }, [user]);

   useEffect(() => {
      if (currentUser.data.isAdmin === true) {
         setIsAdmin(true);
      } else {
         setIsAdmin(false);
      }
      setCheckStatus(false);
   }, [user]);

   return { loggedIn, checkStatus, isAdmin };
};
