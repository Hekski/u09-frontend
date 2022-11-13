import { useState, useEffect } from 'react';
import { useStateProvider } from '../context/state-provider';

export const useStatus = () => {
  const [{ user }] = useStateProvider();

  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [checkStatus, setCheckStatus] = useState(true);

  useEffect(() => {
    if (user.auth === true) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }

    setCheckStatus(false);
  }, [user]);

  useEffect(() => {
    if (user.data.isAdmin === true) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
    setCheckStatus(false);
  }, [user]);

  return { loggedIn, checkStatus, isAdmin };
};
