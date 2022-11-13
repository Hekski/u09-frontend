import React, { useEffect } from 'react';
import useAuth from '../hooks/useAuth';

import Singles from '../components/singles';
import FeatPlaylists from '../components/feat-playlists';


const ExplorePage = () => {
  /*   const [{ code }] = useStateProvider();
  const accessToken = useAuth(code); */

  return (
    <>
      <Singles />
      {/* <FeatPlaylists /> */}
    </>
  );
};

export default ExplorePage;
