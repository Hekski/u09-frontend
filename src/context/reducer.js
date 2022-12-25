import { reducerCases } from './constants';

export const initialState = {
   code: new URLSearchParams(window.location.search).get('code'),
   user: localStorage.getItem('user'),
   auth: false,
   isAuthenticated: localStorage.getItem('spotifyToken') ? true : false, // or just !!localStorage.getItem('token')
};

const reducer = (state, action) => {
   switch (action.type) {
      case reducerCases.SET_CODE:
         return {
            ...state,
            code: action.code,
         };
      case reducerCases.SET_TOKEN:
         return {
            ...state,
            token: action.token,
         };
      case reducerCases.SET_AUTH:
         return {
            ...state,
            auth: action.auth,
         };
      case reducerCases.SET_PLAYINGTRACK:
         return {
            ...state,
            userInfo: action.currentSong,
         };
      default:
         return state;
   }
};

export default reducer;
