import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const config = {
   headers: {
      'Content-Type': 'application/json',
   },
   // withCredentials: true,
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
      console.log(res);
      return res;
   } catch (error) {
      if (error.response) {
         return error.response.data;
      }
   }
};

const removelikeFunction = async (trackToDelete, id, cookie) => {
   try {
      const res = await axios.delete(
         `${API_URL}/songs/like/${id}`,
         trackToDelete,
         config,
         {
            headers: {
               Authorization: 'Bearer ' + cookie,
            },
         }
      );
      console.log(res);
      return res;
   } catch (error) {
      if (error.response) {
         return error.response.data;
      }
   }
};

const songService = { likeFunction, removelikeFunction, getLikes };
export default songService;
