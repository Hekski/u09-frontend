import { reducerCases } from './constants';

export const initialState = {
   code: null,
   user: localStorage.getItem('user'),
   accessToken: null,
   track: null,
   // isAuthenticated: localStorage.getItem('spotifyToken') ? true : false, // or just !!localStorage.getItem('token')
};

const reducer = (state, action) => {
   switch (action.type) {
      case reducerCases.SET_CODE:
         return {
            ...state,
            code: action.code,
         };
      case reducerCases.SET_USER:
         return {
            ...state,
            user: action.user,
         };
      case reducerCases.SET_TOKEN:
         return {
            ...state,
            accessToken: action.accessToken,
         };
      case reducerCases.SET_TRACK:
         return {
            ...state,
            track: action.track,
         };
      default:
         return state;
   }
};

export default reducer;
