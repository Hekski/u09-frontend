import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
};

const getPlaylists = async () => {
  try {
    const res = await axios.get(`${API_URL}/playlists/`, config);
    return res;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

const getPlaylistsById = async (id) => {
  try {
    const res = await axios.get(`${API_URL}/playlists/${id}`, config);
    return res;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

const addPlaylist = async (playlistData, id) => {
  try {
    const res = await axios.post(
      `${API_URL}/playlists/${id}`,
      playlistData,
      config
    );
    return res;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

const addSongToPlaylist = async (song, playlist_id) => {
  console.log(typeof song);
  try {
    const res = await axios.put(
      `${API_URL}/playlists/${playlist_id}`,
      song,
      config
    );
    return res;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

const playlistService = {
  addPlaylist,
  getPlaylists,
  addSongToPlaylist,
  getPlaylistsById,
};
export default playlistService;
