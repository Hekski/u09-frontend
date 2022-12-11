import { Outlet, Navigate } from 'react-router-dom';
import { useStatus } from './hooks/useStatus';

import { Spinner } from './styled-components/spinner-styled';

export const PrivateRoutes = () => {
   const { loggedIn, checkStatus } = useStatus();

   if (checkStatus) {
      return <Spinner />;
   }

   // console.log(loggedIn);
   return loggedIn ? <Outlet /> : <Navigate to='/login' />;
};
