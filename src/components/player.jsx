import React, { useEffect, useState } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';

export default function Player({ accessToken, trackUri }) {
   const [play, setPlay] = useState(false);

   useEffect(() => {
      setPlay(true);
   }, [trackUri]);

   if (!accessToken) return <p>No Spotify access token available.</p>;
   return (
      <div>
         <SpotifyPlayer
            token={accessToken}
            styles={{
               activeColor: '#fff',
               bgColor: 'transparent',
               color: '#fff',
               loaderColor: '#fff',
               sliderColor: '#1cb954',
               sliderHeight: 1,
               trackArtistColor: '#fff',
               trackNameColor: '#fff',
               sliderHandleColor: 'white',
            }}
            callback={(state) => {
               if (!state.isPlaying) setPlay(false);
            }}
            play={play}
            uris={trackUri ? [trackUri] : []}
            playerPosition={'top'}
            position={1}
         />
      </div>
   );
}
