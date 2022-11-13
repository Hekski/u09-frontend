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
          activeColor: '#000',
          bgColor: 'transparent',
          color: '#000',
          loaderColor: '#000',
          sliderColor: '#1cb954',
          trackArtistColor: '#000',
          trackNameColor: '#000',
          sliderHandleColor: 'white',
        }}
        callback={(state) => {
          if (!state.isPlaying) setPlay(false);
        }}
        play={play}
        uris={trackUri ? [trackUri] : []}
      />
    </div>
  );
}

