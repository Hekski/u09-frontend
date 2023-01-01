import React, { useEffect } from 'react';

import Singles from '../components/singles';
import FeatPlaylists from '../components/feat-playlists';

const ExplorePage = ({ code, spotifyApi }) => {
   return (
      <>
         <Singles code={code} spotifyApi={spotifyApi} />
         {/* <FeatPlaylists /> */}
      </>
   );
};

export default ExplorePage;
