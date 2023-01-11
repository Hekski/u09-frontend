import { reducerCases } from './constants';

export const initialState = {
   code: null,
   user: localStorage.getItem('user'),
   accessToken: null,
   track: null,
   artist: '43ZHCT0cAZBISjO8DG9PnE',
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
      case reducerCases.SET_ARTIST:
         return {
            ...state,
            artist: action.artist,
         };
      default:
         return state;
   }
};

export default reducer;
