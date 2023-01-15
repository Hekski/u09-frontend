import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const jwttoken = JSON.parse(localStorage.getItem('token'));

const config = {
   headers: {
      Authorization: `Bearer ${jwttoken}`,
   },
};

const getLikes = async (id) => {
   try {
      const res = await axios.get(`${API_URL}/songs/like/${id}`, config);
      return res;
   } catch (error) {
      if (error.response) {
         return error.response.data;
      }
   }
};

const likeFunction = async (playingTrack, id) => {
   try {
      const res = await axios.post(
         `${API_URL}/songs/like/${id}`,
         playingTrack,
         config
      );
      return res;
   } catch (error) {
      if (error.response) {
         return error.response.data;
      }
   }
};

const removelikeFunction = async (trackToDelete, id) => {
   try {
      const res = await axios.delete(
         `${API_URL}/songs/like/${trackToDelete}`,
         id,
         config
      );
      return res;
   } catch (error) {
      if (error.response) {
         return error.response.data;
      }
   }
};

const songService = { likeFunction, removelikeFunction, getLikes };
export default songService;
