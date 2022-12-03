import React, { useRef } from 'react';
import './utils/styles.css';
import { useDetectOutsideClick } from '../hooks/useDetectOutsideClick';
import { useStateProvider } from '../context/state-provider';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useState } from 'react';
import playlistService from '../services/playlist-service';
import { useEffect } from 'react';

export default function Dropdown({ playingTrack }) {
  const [{ user }] = useStateProvider();
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(false);
  const [playlists, setPlaylists] = useState([]);
  const onClick = () => setIsActive(!isActive);
  const [message, setMessage] = useState('');

  const handleAdd = async (playlist) => {
    const res = await playlistService.addSongToPlaylist(
      playingTrack,
      playlist.id,
      user.data._id
    );
    console.log(res);
    setMessage(res.data.message);
  };

  useEffect(() => {
    const fetchPlayListAsync = async () => {
      const response = await playlistService.getPlaylistsById(user.data._id);
      setPlaylists(
        response.data.data.map((playlist, index) => {
          return {
            id: playlist._id,
            title: playlist.title,
            index: playlist.index,
            description: playlist.description,
            songs: playlist.songs[index],
          };
        })
      );
    };
    fetchPlayListAsync();
  }, [isActive]);

  return (
    <div className='container'>
      <div className='menu-container'>
        {playingTrack ? (
          <button onClick={onClick} className='menu-trigger'>
            <span>Add to Playlist</span>
            {/* <img
      src='https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg'
      alt='User avatar'
    /> */}
            <AiOutlinePlusCircle />
          </button>
        ) : (
          ''
        )}
        {isActive ? (
          <nav
            ref={dropdownRef}
            className={`menu ${isActive ? 'active' : 'inactive'}`}
          >
            <ul>
              {playlists.map((playlist, i) => {
                return (
                  <li key={playlist[i]}>
                    <p onClick={() => handleAdd(playlist)}>{playlist.title}</p>
                  </li>
                );
              })}
            </ul>
          </nav>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
